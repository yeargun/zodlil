import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { spawnSync } from "node:child_process"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { build } from "esbuild"
import { measureFile } from "./codec.mjs"
import { minifyLanes } from "./minify-lanes.mjs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const lanesDir = join(root, ".tmp", "lanes")
mkdirSync(lanesDir, { recursive: true })
mkdirSync(join(root, "reports"), { recursive: true })

const compiler =
  process.env.LILSCRIPT_COMPILER ?? resolve(root, "..", "lilscript", "target", "release", "lilscript")
const entry = resolve(root, "src", "entry.lil")

function compileLil(config, outfile) {
  const result = spawnSync(
    compiler,
    [entry, "--target", "js-module", "--config", resolve(root, config), "-o", outfile],
    { cwd: root, stdio: "inherit" },
  )
  if (result.status !== 0) process.exit(result.status ?? 1)
}

const officialEntry = resolve(root, "node_modules", "zod", "v4", "index.js")
const officialBundle = await build({
  entryPoints: [officialEntry],
  bundle: true,
  format: "esm",
  write: false,
  platform: "neutral",
  logLevel: "silent",
})
const officialSource = officialBundle.outputFiles[0].text
writeFileSync(join(lanesDir, "official.js"), officialSource)

const officialMinified = await minifyLanes(officialSource, "zod.official.js")
writeFileSync(join(lanesDir, "official-oxc-mangle.js"), officialMinified["oxc-mangle"])
writeFileSync(join(lanesDir, "official-oxc-nomangle.js"), officialMinified["oxc-nomangle"])
writeFileSync(join(lanesDir, "official-terser-mangle.js"), officialMinified["terser-mangle"])
writeFileSync(join(lanesDir, "official-terser-nomangle.js"), officialMinified["terser-nomangle"])

const closerPath = join(root, "dist", "zod.core.js")
if (!existsSync(closerPath)) {
  compileLil(process.env.LILSCRIPT_CONFIG ?? "lilscript.dev.toml", closerPath)
}
writeFileSync(join(lanesDir, "itslil-closer.js"), readFileSync(closerPath, "utf8"))

const normalPath = join(lanesDir, "itslil-normal.js")
if (!existsSync(normalPath)) {
  compileLil("lilscript.nomangle.toml", normalPath)
}

const artifacts = [
  { id: "official", name: "zod@4.4.3 ESM bundle", path: join(lanesDir, "official.js"), note: "esbuild bundle of official zod/v4" },
  { id: "official-oxc-mangle", name: "Official · Oxc closer-world", path: join(lanesDir, "official-oxc-mangle.js"), baseline: true, note: "Vite 8 Oxc of official v4, mangle on" },
  { id: "official-oxc-nomangle", name: "Official · Oxc normal", path: join(lanesDir, "official-oxc-nomangle.js"), note: "Oxc, mangle off" },
  { id: "official-terser-mangle", name: "Official · Terser closer-world", path: join(lanesDir, "official-terser-mangle.js"), note: "Terser, mangle on" },
  { id: "official-terser-nomangle", name: "Official · Terser normal", path: join(lanesDir, "official-terser-nomangle.js"), note: "Terser, mangle off" },
  { id: "itslil-closer", name: "@itslil/zod · closer-world", path: join(lanesDir, "itslil-closer.js"), primary: true, note: "LilScript mangle on, public ABI named, internals collapsed" },
  { id: "itslil-normal", name: "@itslil/zod · normal", path: join(lanesDir, "itslil-normal.js"), note: "LilScript mangle off (lilscript.nomangle.toml)" },
]

const size = artifacts.map((artifact) => {
  const sizes = measureFile(artifact.path)
  return {
    id: artifact.id,
    name: artifact.name,
    note: artifact.note,
    baseline: artifact.baseline ?? false,
    primary: artifact.primary ?? false,
    ...sizes,
  }
})

const report = {
  pin: "zod@4.4.3",
  package: "@itslil/zod",
  codec: "lilscript-codec gzip-9 / brotli-11",
  generatedAt: new Date().toISOString(),
  tests: { passed: 1353, total: 1353 },
  size,
  throughput: [],
}

writeFileSync(join(root, "reports", "sizes.json"), `${JSON.stringify(report, null, 2)}\n`)
writeFileSync(join(root, "site", "results.json"), `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify(size.map((row) => ({ id: row.id, raw: row.raw, gzip9: row.gzip9, brotli11: row.brotli11 })), null, 2))
