import { existsSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import { z as officialZ } from "zod"
import { makeSchema, outputsMatch, sampleParse } from "./bench-workload.mjs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const closerMod = await import(pathToFileURL(join(root, "dist", "zod.core.js")).href)
const closerZ = closerMod.z ?? closerMod.default
const normalPath = join(root, ".tmp", "lanes", "itslil-normal.js")
const normalZ = existsSync(normalPath)
  ? (await import(pathToFileURL(normalPath).href)).z
  : null

const officialSchema = makeSchema(officialZ)
const closerSchema = makeSchema(closerZ)
const normalSchema = normalZ ? makeSchema(normalZ) : officialSchema
const checked = outputsMatch(officialSchema, closerSchema, normalSchema)
if (!checked.match) {
  console.error("node parse output mismatch", checked)
  process.exit(1)
}

const result = {
  officialMs: sampleParse(officialSchema),
  closerMs: sampleParse(closerSchema),
  normalMs: normalZ ? sampleParse(normalSchema) : null,
  match: checked.match,
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(JSON.stringify(result, null, 2))
}

export { result as nodeBench }
