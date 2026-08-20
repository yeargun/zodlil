import { existsSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
if (!existsSync(resolve(root, "vendor", "zod", "packages", "zod", "src", "v4", "classic", "tests"))) {
  const setup = spawnSync(process.execPath, [resolve(root, "scripts", "setup.mjs")], {
    cwd: root,
    stdio: "inherit",
  })
  if (setup.status !== 0) process.exit(setup.status ?? 1)
}

const vitest = resolve(root, "node_modules", "vitest", "dist", "cli.js")
const extra = process.argv.slice(2)
const nodeCandidates = [
  process.env.ZODLIL_NODE,
  "/Users/yeargun/.nvm/versions/node/v24.11.1/bin/node",
  "/Users/yeargun/.nvm/versions/node/v22.21.1/bin/node",
  process.execPath,
]
const nodeBin = nodeCandidates.find((bin) => bin && existsSync(bin))
const result = spawnSync(nodeBin, [vitest, "run", "--config", resolve(root, "vitest.config.ts"), ...extra], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, NODE_OPTIONS: `${process.env.NODE_OPTIONS ?? ""} --experimental-vm-modules`.trim() },
})
process.exit(result.status ?? 1)
