import { spawnSync } from "node:child_process"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { mkdirSync } from "node:fs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const compiler =
  process.env.LILSCRIPT_COMPILER ??
  resolve(root, "..", "lilscript", "target", "release", "lilscript")
mkdirSync(resolve(root, "dist"), { recursive: true })
const result = spawnSync(
  compiler,
  [
    resolve(root, "src", "entry.lil"),
    "--target",
    "js-module",
    "--config",
    resolve(root, process.env.LILSCRIPT_CONFIG ?? "lilscript.dev.toml"),
    "-o",
    resolve(root, "dist", "zod.core.js"),
  ],
  { cwd: root, stdio: "inherit" },
)
if (result.status !== 0) process.exit(result.status ?? 1)
await import("./write-exports.mjs")
