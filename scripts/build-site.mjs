import { cp, mkdir, rm, writeFile } from "node:fs/promises"
import { existsSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const output = join(root, "_site")

if (!existsSync(join(root, "dist", "zod.core.js"))) {
  throw new Error("dist/zod.core.js is missing. Commit the compiled closer-world core or compile locally.")
}

if (!existsSync(join(root, "site", "results.json"))) {
  writeFileSync(
    join(root, "site", "results.json"),
    `${JSON.stringify({ pin: "zod@4.4.3", package: "@itslil/zod", size: [], throughput: [] }, null, 2)}\n`,
  )
}

await rm(output, { recursive: true, force: true })
await mkdir(output, { recursive: true })
await cp(join(root, "site"), output, { recursive: true })
if (existsSync(join(root, "dist", "zod.core.js"))) {
  await cp(join(root, "dist", "zod.core.js"), join(output, "zod.js"))
}
await writeFile(join(output, ".nojekyll"), "")
console.log(`Built GitHub Pages site at ${output}`)

// Refuse publication if source or served artifacts drift from this measurement.
await import("./build-audit.mjs").then(({writeAudit}) => writeAudit({root, output}));
