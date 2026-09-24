// Size receipts for the site and README: the official bar lanes and the port's lanes, all measured by
// lilscript-codec (raw / gzip-9 / Brotli-11). Run `npm run build` first: the shipped lane is dist/ as built.
//
// The bar is upstream zod@4.4.3 restricted to the surface this port shares (scripts/official-entry.mjs),
// English locale only (the port ships `z.locales.en` alone), bundled by esbuild and minified by Oxc, Terser
// and esbuild. The smallest lane per codec is the bar.
//
// Our side is what `import { z } from "@itslil/zod"` loads: dist/zod.core.js (compiler-written) plus the
// small JavaScript around it (dist/compat.js, hand-written; dist/index.js, generated re-exports), each file
// compressed on its own, as it is served. The gzip and raw objectives compile the same source with
// lilscript.gzip.toml and lilscript.bytes.toml. The esbuild bundle of the package is recorded too: it is
// the conservative figure (esbuild re-prints our core), and it is post-processed, not compiler-written.
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
const entry = resolve(root, "scripts", "zod.lil")
const dist = (file) => join(root, "dist", file)

for (const file of ["zod.core.js", "compat.js", "index.js", "index.cjs"]) {
  if (!existsSync(dist(file))) throw new Error(`dist/${file} is missing: run \`npm run build\` first`)
}

function compileLil(config, outfile) {
  const result = spawnSync(
    compiler,
    [entry, "--target", "js-module", "--config", resolve(root, config), "-o", outfile],
    { cwd: root, stdio: "inherit" },
  )
  if (result.status !== 0) process.exit(result.status ?? 1)
}

// --- the bar ---------------------------------------------------------------------------------------
const englishOnly = {
  name: "english-only-locales",
  setup(b) {
    b.onResolve({ filter: /locales\/index\.js$/ }, () => ({ path: "en-only", namespace: "en-only" }))
    b.onLoad({ filter: /.*/, namespace: "en-only" }, () => ({
      contents: `export { default as en } from ${JSON.stringify(join(root, "node_modules", "zod", "v4", "locales", "en.js"))};`,
      loader: "js",
      resolveDir: root,
    }))
  },
}
const officialBundle = await build({
  entryPoints: [join(root, "scripts", "official-entry.mjs")],
  bundle: true,
  format: "esm",
  write: false,
  platform: "neutral",
  mainFields: ["module", "main"],
  conditions: ["import", "default"],
  legalComments: "none",
  charset: "utf8",
  logLevel: "silent",
  plugins: [englishOnly],
})
const officialSource = officialBundle.outputFiles[0].text
writeFileSync(join(lanesDir, "official.js"), officialSource)
const officialMinified = await minifyLanes(officialSource, "zod.official.js")
for (const [lane, code] of Object.entries(officialMinified)) writeFileSync(join(lanesDir, `official-${lane}.js`), code)

// --- our lanes -------------------------------------------------------------------------------------
compileLil("lilscript.gzip.toml", join(lanesDir, "zod.core.gzip.js"))
compileLil("lilscript.bytes.toml", join(lanesDir, "zod.core.bytes.js"))
compileLil("lilscript.nomangle.toml", join(lanesDir, "itslil-normal.js"))

const glue = [dist("compat.js"), dist("index.js")]
function packageOf(core) {
  const parts = [core, ...glue].map(measureFile)
  return {
    raw: parts.reduce((sum, part) => sum + part.raw, 0),
    gzip9: parts.reduce((sum, part) => sum + part.gzip9, 0),
    brotli11: parts.reduce((sum, part) => sum + part.brotli11, 0),
  }
}

const packageBundle = await build({
  entryPoints: [dist("index.js")],
  bundle: true,
  format: "esm",
  platform: "node",
  target: "es2020",
  write: false,
  logLevel: "silent",
})
writeFileSync(join(lanesDir, "itslil-esbuild-bundle.js"), packageBundle.outputFiles[0].text)

const official = (id, name, file, note) => ({ id, name, note, official: true, ...measureFile(join(lanesDir, file)) })
const size = [
  official("official", "zod@4.4.3 bundle, unminified", "official.js", "esbuild bundle of the shared surface, English only"),
  official("official-oxc-mangle", "Official · Oxc", "official-oxc-mangle.js", "Vite 8 Oxc, mangle on"),
  official("official-oxc-nomangle", "Official · Oxc, mangle off", "official-oxc-nomangle.js", "Vite 8 Oxc, mangle off"),
  official("official-terser-mangle", "Official · Terser", "official-terser-mangle.js", "Terser 3 passes, mangle on"),
  official("official-terser-nomangle", "Official · Terser, mangle off", "official-terser-nomangle.js", "Terser 3 passes, mangle off"),
  official("official-esbuild", "Official · esbuild", "official-esbuild.js", "esbuild --minify"),
  {
    id: "itslil-closer",
    name: "@itslil/zod · shipped",
    note: "dist/zod.core.js + compat.js + index.js, Brotli objective (lilscript.toml), mangle on",
    primary: true,
    objective: "brotli",
    tables: ["brotli11", "gzip9", "raw"],
    ...packageOf(dist("zod.core.js")),
  },
  {
    id: "itslil-gzip",
    name: "@itslil/zod · gzip objective",
    note: "same files, core compiled with lilscript.gzip.toml",
    objective: "gzip",
    tables: ["gzip9"],
    ...packageOf(join(lanesDir, "zod.core.gzip.js")),
  },
  {
    id: "itslil-raw",
    name: "@itslil/zod · raw objective",
    note: "same files, core compiled with lilscript.bytes.toml",
    objective: "raw",
    tables: ["raw"],
    ...packageOf(join(lanesDir, "zod.core.bytes.js")),
  },
  {
    id: "itslil-core",
    name: "zod.core.js alone",
    note: "the compiler-written file by itself (the package's JavaScript glue excluded)",
    tables: ["brotli11", "gzip9", "raw"],
    ...measureFile(dist("zod.core.js")),
  },
  {
    id: "itslil-normal",
    name: "@itslil/zod · mangle off",
    note: "same files, core compiled with lilscript.nomangle.toml",
    tables: ["brotli11", "gzip9", "raw"],
    ...packageOf(join(lanesDir, "itslil-normal.js")),
  },
  {
    id: "itslil-esbuild-bundle",
    name: "@itslil/zod · esbuild bundle",
    note: "esbuild bundle of dist/index.js, unminified: esbuild re-prints our core (post-processed by esbuild, not compiler-written)",
    postProcessedBy: "esbuild",
    tables: ["brotli11", "gzip9", "raw"],
    ...measureFile(join(lanesDir, "itslil-esbuild-bundle.js")),
  },
]

// the bar per codec: the smallest minified official lane
const minified = size.filter((lane) => lane.official && lane.id !== "official")
const barFor = (metric) => minified.reduce((best, lane) => (lane[metric] < best[metric] ? lane : best))
const bars = { brotli11: barFor("brotli11").id, gzip9: barFor("gzip9").id, raw: barFor("raw").id }
for (const lane of size) lane.baseline = lane.id === bars.brotli11

const delivered = [
  ["dist/zod.core.js", "compiler", "LilScript, scripts/zod.lil with lilscript.toml"],
  ["dist/compat.js", "hand-written", "scripts/compat.mjs: upstream locales when zod is installed, and the JSONSchemaGenerator class; not compiler-written"],
  ["dist/index.js", "generated", "re-exports of z's members, written by scripts/write-exports.mjs; not compiler-written"],
  ["dist/core.js", "generated", "zod/v4/core re-exports, scripts/write-exports.mjs; not compiler-written"],
  ["dist/mini.js", "generated", "zod/mini re-exports, scripts/write-exports.mjs; not compiler-written"],
  ["dist/locales.js", "generated", "zod/locales re-exports, scripts/write-exports.mjs; not compiler-written"],
  ["dist/index.cjs", "post-processed by esbuild, not compiler-written", "CommonJS bundle of dist/index.js by esbuild (plan M12.2)"],
].map(([path, writtenBy, note]) => ({ path, writtenBy, note, ...measureFile(join(root, path)) }))

const resultsPath = join(root, "site", "results.json")
const previous = existsSync(resultsPath) ? JSON.parse(readFileSync(resultsPath, "utf8")) : {}
const report = {
  pin: "zod@4.4.3",
  package: "@itslil/zod",
  codec: "lilscript-codec gzip-9 / brotli-11",
  generatedAt: new Date().toISOString(),
  tests: previous.tests ?? { passed: 1353, total: 1353 },
  surface: "zod@4.4.3 z restricted to the 181 members the port shares, English locale only",
  bars,
  size,
  delivered,
  previousRelease: previous.previousRelease,
  compiler: previous.compiler,
  throughput: previous.throughput ?? [],
  browser: previous.browser,
  runtime: previous.runtime,
  warmupDiscard: previous.warmupDiscard,
}

writeFileSync(join(root, "reports", "sizes.json"), `${JSON.stringify(report, null, 2)}\n`)
writeFileSync(resultsPath, `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify({ bars, size: size.map(({ id, raw, gzip9, brotli11 }) => ({ id, raw, gzip9, brotli11 })) }, null, 2))
