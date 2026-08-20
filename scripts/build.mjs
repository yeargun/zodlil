import { accessSync, constants, copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const lilscriptRoot = process.env.LILSCRIPT_ROOT ?? resolve(root, "..", "lilscript")

function compilerPath() {
  const candidates = [
    process.env.LILSCRIPT_COMPILER,
    resolve(lilscriptRoot, "target", "release", "lilscript"),
    resolve(lilscriptRoot, "target", "debug", "lilscript"),
  ].filter(Boolean)
  for (const candidate of candidates) {
    try {
      accessSync(candidate, constants.X_OK)
      return candidate
    } catch {}
  }
  throw new Error("LilScript compiler not found. Set LILSCRIPT_COMPILER or build lilscript.")
}

function run(cmd, args, opts = {}) {
  const result = spawnSync(cmd, args, { cwd: root, stdio: "inherit", ...opts })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

export function compile(config, out) {
  mkdirSync(resolve(root, "dist"), { recursive: true })
  run(compilerPath(), [
    resolve(root, "src", "entry.lil"),
    "--target",
    "js-module",
    "--config",
    resolve(root, config),
    "-o",
    resolve(root, out),
  ])
}

function writeCjs() {
  const esbuild = resolve(root, "node_modules", ".bin", "esbuild")
  if (!existsSync(esbuild)) return
  run(esbuild, [
    resolve(root, "dist", "index.js"),
    "--bundle",
    "--format=cjs",
    "--platform=node",
    `--outfile=${resolve(root, "dist", "index.cjs")}`,
    "--log-level=error",
  ])
}

function copyDts() {
  const from = resolve(root, "node_modules", "zod")
  if (!existsSync(from)) return
  const dest = resolve(root, "dist", "types")
  mkdirSync(dest, { recursive: true })
  run("rsync", [
    "-a",
    "--include=*/",
    "--include=*.d.ts",
    "--include=*.d.cts",
    "--include=*.d.mts",
    "--exclude=*",
    `${from}/`,
    `${dest}/`,
  ])
  writeFileSync(
    resolve(root, "dist", "index.d.ts"),
    'export * from "./types/index.js";\nexport { z } from "./types/index.js";\nexport { default } from "./types/index.js";\n',
  )
  writeFileSync(resolve(root, "dist", "core.d.ts"), 'export * from "./types/v4/core/index.js";\n')
  writeFileSync(resolve(root, "dist", "mini.d.ts"), 'export * from "./types/mini/index.js";\n')
  writeFileSync(resolve(root, "dist", "locales.d.ts"), 'export * from "./types/locales/index.js";\n')
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])
const args = process.argv.slice(2)
const compileRequested = args.includes("--compile") || args.length === 0
const config = args.includes("--prod") ? "lilscript.toml" : "lilscript.dev.toml"

if (isMain && compileRequested) {
  compile(config, "dist/zod.core.js")
  run(process.execPath, [resolve(root, "scripts", "write-exports.mjs")])
  writeCjs()
  copyDts()
}
