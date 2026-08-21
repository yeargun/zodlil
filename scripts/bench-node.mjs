import { existsSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import { z as officialZ } from "zod"
import { makeSchema, outputsMatch, sampleParseReport } from "./bench-workload.mjs"

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

function summarize(name, report, officialMedian) {
  return {
    name,
    coldMs: report.coldMs,
    warmMedianMs: report.warmMedianMs,
    warmMeanMs: report.warmMeanMs,
    warmStdevMs: report.warmStdevMs,
    warmMinMs: report.warmMinMs,
    warmMaxMs: report.warmMaxMs,
    ratio: officialMedian == null ? 1 : report.warmMedianMs / officialMedian,
  }
}

const officialReport = sampleParseReport(officialSchema)
const closerReport = sampleParseReport(closerSchema)
const normalReport = normalZ ? sampleParseReport(normalSchema) : null
const result = {
  protocol: {
    samples: officialReport.samples,
    discard: officialReport.discard,
    rounds: officialReport.rounds,
    batch: officialReport.batch,
    parsesPerSample: officialReport.parses,
    note: "cold = first sample; published number is quiet median of remaining warm samples",
  },
  officialMs: officialReport.warmMedianMs,
  closerMs: closerReport.warmMedianMs,
  normalMs: normalReport ? normalReport.warmMedianMs : null,
  official: summarize("zod@4.4.3", officialReport, officialReport.warmMedianMs),
  closer: summarize("@itslil/zod · closer-world", closerReport, officialReport.warmMedianMs),
  normal: normalReport ? summarize("@itslil/zod · normal", normalReport, officialReport.warmMedianMs) : null,
  match: checked.match,
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(JSON.stringify(result, null, 2))
}

export { result as nodeBench }
