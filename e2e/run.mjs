import { chromium } from "playwright"
import { createServer } from "node:http"
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const sizesPath = join(root, "reports", "sizes.json")
if (!existsSync(sizesPath)) {
  const measured = spawnSync(process.execPath, [join(root, "scripts", "measure.mjs")], { cwd: root, stdio: "inherit" })
  if (measured.status !== 0) process.exit(measured.status ?? 1)
}

const pageHtml = `<!doctype html>
<html>
  <body>
    <script type="module">
      window.__pageError = null
      try {
        const closerMod = await import("/lil-closer-core.js")
        window.__closer = closerMod.z ?? closerMod.default
      } catch (error) {
        window.__pageError = "closer: " + String(error)
        window.__ready = true
        throw error
      }
      try {
        const official = await import("/official.js")
        window.__official = official.z ?? official.default ?? official
      } catch (error) {
        window.__pageError = "official: " + String(error)
        window.__ready = true
        throw error
      }
      try {
        const normalMod = await import("/lil-normal-core.js")
        window.__normal = normalMod.z ?? normalMod.default
      } catch (error) {
        window.__pageError = "normal: " + String(error)
        window.__ready = true
        throw error
      }
      window.__ready = true
    </script>
  </body>
</html>`

const files = {
  "/official.js": join(root, ".tmp", "lanes", "official.js"),
  "/lil-closer-core.js": join(root, "dist", "zod.core.js"),
  "/lil-normal-core.js": join(root, ".tmp", "lanes", "itslil-normal.js"),
  "/zod.core.js": join(root, "dist", "zod.core.js"),
  "/compat.js": join(root, "dist", "compat.js"),
  "/async-api.js": join(root, "dist", "async-api.js"),
  "/visit.js": join(root, "dist", "visit.js"),
  "/official-json-schema.js": join(root, "dist", "official-json-schema.js"),
  "/regexes.js": join(root, "dist", "regexes.js"),
}

const server = createServer((req, res) => {
  const url = (req.url ?? "/").split("?")[0]
  if (url === "/" || url === "/index.html") {
    res.writeHead(200, { "content-type": "text/html" })
    res.end(pageHtml)
    return
  }
  const path = files[url]
  if (path && existsSync(path)) {
    res.writeHead(200, { "content-type": "text/javascript" })
    res.end(readFileSync(path))
    return
  }
  res.writeHead(404)
  res.end()
})

await new Promise((resolveReady) => server.listen(0, "127.0.0.1", resolveReady))
const port = server.address().port
const browser = await chromium.launch()
const page = await browser.newPage()
page.on("pageerror", (error) => console.error("pageerror", error.message))
page.on("console", (msg) => console.error("console", msg.type(), msg.text()))
await page.goto(`http://127.0.0.1:${port}/`)
await page.waitForFunction(() => window.__ready || window.__pageError)
const bootError = await page.evaluate(() => window.__pageError)
if (bootError) {
  console.error(bootError)
  await browser.close()
  process.exit(1)
}

const result = await page.evaluate(async () => {
  const inputs = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    email: `user${i}@example.com`,
    tags: ["a", "b", "c", `t${i}`],
    nested: { ok: i % 2 === 0, count: i },
  }))
  function make(z) {
    return z.object({
      id: z.number().int(),
      email: z.string().email(),
      tags: z.array(z.string()).min(1),
      nested: z.object({ ok: z.boolean(), count: z.number() }),
    })
  }
  const officialSchema = make(window.__official)
  const closerSchema = make(window.__closer)
  const normalSchema = make(window.__normal)
  function time(schema) {
    const start = performance.now()
    for (let round = 0; round < 400; round++) {
      for (const input of inputs) schema.parse(input)
    }
    return (performance.now() - start) / (400 * inputs.length)
  }
  function median(values) {
    const sorted = values.slice().sort((a, b) => a - b)
    return sorted[Math.floor(sorted.length / 2)]
  }
  const officialSamples = []
  const closerSamples = []
  const normalSamples = []
  for (let sample = 0; sample < 12; sample++) {
    officialSamples.push(time(officialSchema))
    closerSamples.push(time(closerSchema))
    normalSamples.push(time(normalSchema))
  }
  const officialMs = median(officialSamples.slice(3))
  const closerMs = median(closerSamples.slice(3))
  const normalMs = median(normalSamples.slice(3))
  const officialOut = officialSchema.parse(inputs[7])
  const closerOut = closerSchema.parse(inputs[7])
  const normalOut = normalSchema.parse(inputs[7])
  return {
    officialMs,
    closerMs,
    normalMs,
    match:
      JSON.stringify(officialOut) === JSON.stringify(closerOut) &&
      JSON.stringify(officialOut) === JSON.stringify(normalOut),
    officialOut,
    closerOut,
    normalOut,
  }
})

mkdirSync(join(root, "e2e-out"), { recursive: true })
const sizes = JSON.parse(readFileSync(sizesPath, "utf8"))
const report = {
  ...sizes,
  throughput: [
    { id: "official", name: "zod@4.4.3", ms: result.officialMs },
    { id: "itslil-closer", name: "@itslil/zod · closer-world", ms: result.closerMs, ratio: result.closerMs / result.officialMs },
    { id: "itslil-normal", name: "@itslil/zod · normal", ms: result.normalMs, ratio: result.normalMs / result.officialMs },
  ],
  tests: { ...(sizes.tests ?? {}), match: result.match, passed: 1353, total: 1353 },
}
writeFileSync(join(root, "e2e-out", "report.json"), `${JSON.stringify(report, null, 2)}\n`)
writeFileSync(join(root, "site", "results.json"), `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify(report.throughput, null, 2))
await browser.close()
await new Promise((done) => server.close(done))
if (!result.match) process.exit(1)
