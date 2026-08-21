export const inputs = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  email: `user${i}@example.com`,
  tags: ["a", "b", "c", `t${i}`],
  nested: { ok: i % 2 === 0, count: i },
}))

export function makeSchema(z) {
  return z.object({
    id: z.number().int(),
    email: z.string().email(),
    tags: z.array(z.string()).min(1),
    nested: z.object({ ok: z.boolean(), count: z.number() }),
  })
}

export function median(values) {
  const sorted = values.slice().sort((a, b) => a - b)
  return sorted[Math.floor(sorted.length / 2)]
}

export function mean(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

export function stdev(values) {
  if (values.length < 2) return 0
  const avg = mean(values)
  const variance = values.reduce((sum, value) => sum + (value - avg) ** 2, 0) / (values.length - 1)
  return Math.sqrt(variance)
}

export function timeParse(schema, rounds = 400) {
  const start = performance.now()
  for (let round = 0; round < rounds; round++) {
    for (const input of inputs) schema.parse(input)
  }
  return (performance.now() - start) / (rounds * inputs.length)
}

export function sampleParseReport(schema, samples = 12, discard = 3, rounds = 400) {
  const taken = []
  for (let i = 0; i < samples; i++) taken.push(timeParse(schema, rounds))
  const cold = taken.slice(0, discard)
  const warm = taken.slice(discard)
  const sorted = warm.slice().sort((a, b) => a - b)
  return {
    samples,
    discard,
    rounds,
    batch: inputs.length,
    parses: rounds * inputs.length,
    coldMs: cold[0] ?? null,
    coldMeanMs: cold.length ? mean(cold) : null,
    warmMs: warm,
    warmMinMs: sorted[0],
    warmMaxMs: sorted[sorted.length - 1],
    warmMeanMs: mean(warm),
    warmMedianMs: median(warm),
    warmStdevMs: stdev(warm),
  }
}

export function sampleParse(schema, samples = 12, discard = 3, rounds = 400) {
  return sampleParseReport(schema, samples, discard, rounds).warmMedianMs
}

export function outputsMatch(officialSchema, closerSchema, normalSchema) {
  const officialOut = officialSchema.parse(inputs[7])
  const closerOut = closerSchema.parse(inputs[7])
  const normalOut = normalSchema.parse(inputs[7])
  return {
    match:
      JSON.stringify(officialOut) === JSON.stringify(closerOut) &&
      JSON.stringify(officialOut) === JSON.stringify(normalOut),
    officialOut,
    closerOut,
    normalOut,
  }
}
