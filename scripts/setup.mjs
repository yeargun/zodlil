import { existsSync, mkdirSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const pin = "e516c3baf22615e20934116abebfed6c000222c2"
const dest = resolve(root, "vendor", "zod")

function run(cmd, args, cwd) {
  const result = spawnSync(cmd, args, { cwd, stdio: "inherit" })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

mkdirSync(resolve(root, "vendor"), { recursive: true })
if (!existsSync(resolve(dest, ".git"))) {
  run("git", ["clone", "--filter=blob:none", "https://github.com/colinhacks/zod.git", dest], root)
}
run("git", ["fetch", "--tags", "--force"], dest)
run("git", ["checkout", "--force", pin], dest)
console.log(`Pinned vendor/zod at ${pin} (zod@4.4.3)`)
