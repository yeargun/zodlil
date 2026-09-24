// Record the compile of the shipped file in site/results.json (and reports/sizes.json): the compiler's
// revision and binary hash, and the wall time of each compile of scripts/zod.lil with lilscript.toml.
//
//   node scripts/record-compiler-run.mjs [--revision <rev>] [--samples 3]
//
// Every sample must reproduce dist/zod.core.js byte for byte, so the timing is of the build that ships.
// Provenance is computed, not asserted: the hash is of the binary on disk at the moment of the run.
import { createHash } from "node:crypto"
import { execFileSync, spawnSync } from "node:child_process"
import { cpus } from "node:os"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const argv = process.argv.slice(2)
const flag = (name, fallback = null) => {
  const at = argv.indexOf(`--${name}`)
  return at === -1 ? fallback : argv[at + 1]
}

const compiler =
  process.env.LILSCRIPT_COMPILER ?? resolve(root, "..", "lilscript", "target", "release", "lilscript")
const compilerRoot = process.env.LILSCRIPT_ROOT ?? resolve(root, "..", "lilscript")
const revision =
  flag("revision") ??
  (() => {
    try {
      return execFileSync("git", ["rev-parse", "--short=8", "HEAD"], { cwd: compilerRoot, encoding: "utf8" }).trim()
    } catch {
      return null
    }
  })()
const samples = Number(flag("samples", "3"))
const sha256 = (path) => createHash("sha256").update(readFileSync(path)).digest("hex")

const shipped = readFileSync(join(root, "dist", "zod.core.js"))
const scratch = join(root, ".tmp", "compile-sample.js")
mkdirSync(dirname(scratch), { recursive: true })
const args = [join(root, "scripts", "zod.lil"), "--target", "js-module", "--config", join(root, "lilscript.toml"), "-o", scratch]

const compileWallMs = []
for (let i = 0; i < samples; i++) {
  const start = process.hrtime.bigint()
  const result = spawnSync(compiler, args, { cwd: root, stdio: ["ignore", "ignore", "inherit"] })
  const wallMs = Number(process.hrtime.bigint() - start) / 1e6
  if (result.status !== 0) process.exit(result.status ?? 1)
  if (!readFileSync(scratch).equals(shipped)) {
    throw new Error("the compile does not reproduce dist/zod.core.js: run `npm run build` with this compiler first")
  }
  compileWallMs.push(Math.round(wallMs))
}

const record = {
  revision,
  binarySha256: sha256(compiler),
  input: "scripts/zod.lil",
  config: "lilscript.toml",
  target: "js-module",
  output: "dist/zod.core.js",
  outputSha256: sha256(join(root, "dist", "zod.core.js")),
  compileWallMs,
  host: `${cpus().length} × ${cpus()[0]?.model ?? "unknown CPU"}`,
  date: new Date().toISOString().slice(0, 10),
}

for (const path of [join(root, "site", "results.json"), join(root, "reports", "sizes.json")]) {
  if (!existsSync(path)) continue
  const results = JSON.parse(readFileSync(path, "utf8"))
  results.compiler = record
  writeFileSync(path, `${JSON.stringify(results, null, 2)}\n`)
}
console.log(`compiler ${revision} ${record.binarySha256.slice(0, 12)}: ${compileWallMs.join(", ")} ms wall`)
