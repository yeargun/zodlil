import {renderComparison} from './objective-comparison.js';
const currentComparison=await fetch('./comparison.json').then(response=>{if(!response.ok)throw Error('Comparison could not load');return response.json()});
renderComparison(currentComparison);
import { z as lilZ } from "./zod.js"
import { renderCompilerRun } from "./compiler-run.js"

const data = await fetch("./results.json").then((response) => {
  if (!response.ok) throw new Error(`Unable to load results: ${response.status}`)
  return response.json()
})

const formatter = new Intl.NumberFormat("en-US")
const sample = `{
  "id": 7,
  "email": "user@example.com",
  "tags": ["a", "b", "c"],
  "nested": { "ok": true, "count": 3 }
}`

function times(value, baseline) {
  if (!baseline) return "—"
  return `${(value / baseline).toFixed(3)}×`
}

function duration(ms) {
  if (ms == null) return "—"
  if (ms < 0.01) return `${(ms * 1000).toFixed(2)} µs`
  return `${ms.toFixed(3)} ms`
}

function laneById(id) {
  return (data.size ?? []).find((lane) => lane.id === id)
}

// the bar per codec: the smallest minified official lane (results.json names it; recomputed if absent)
function barFor(metric) {
  const named = laneById(data.bars?.[metric])
  if (named) return named
  const official = (data.size ?? []).filter((lane) => lane.official && lane.id !== "official")
  return official.reduce((best, lane) => (!best || lane[metric] < best[metric] ? lane : best), null)
}

function barClass(lane) {
  if (lane.primary) return "bar-lil"
  if (!lane.official) return "bar-normal"
  return "bar-official"
}

function sizeLanes(metric) {
  return (data.size ?? []).filter(
    (lane) => (lane.official && lane.id !== "official") || (!lane.official && (!metric || lane.tables?.includes(metric))),
  )
}

function laneName(lane, metric) {
  return barFor(metric)?.id === lane.id ? `${lane.name} (bar)` : lane.name
}

function verdict(value, bar) {
  return value < bar ? "win" : value === bar ? "even" : "loss"
}

function throughputLanes(runtime) {
  const block = data.throughput
  if (Array.isArray(block)) return runtime === "chromium" ? block : []
  return block?.[runtime] ?? []
}

function renderCodec(metric, barId, bodyId) {
  const bar = barFor(metric)
  const lanes = sizeLanes(metric)
  if (!bar || lanes.length === 0) return
  const max = Math.max(...lanes.map((lane) => lane[metric]))
  document.querySelector(barId).innerHTML = lanes
    .map((lane) => {
      const width = Math.max(18, (lane[metric] / max) * 100)
      return `<div class="${barClass(lane)}" style="width:${width}%"><span>${laneName(lane, metric)}</span><strong>${formatter.format(lane[metric])} B</strong></div>`
    })
    .join("")
  document.querySelector(bodyId).innerHTML = lanes
    .map(
      (lane) => `
    <tr>
      <th scope="row">${laneName(lane, metric)}${lane.official ? "" : `<small>${lane.note}</small>`}</th>
      <td>${formatter.format(lane[metric])}</td>
      <td class="verdict ${verdict(lane[metric], bar[metric])}"><strong>${times(lane[metric], bar[metric])}</strong></td>
    </tr>`,
    )
    .join("")
}

function compileSeconds() {
  const samples = (data.compiler?.compileWallMs ?? []).filter(Number.isFinite).sort((a, b) => a - b)
  return samples.length ? `${(samples[Math.floor(samples.length / 2)] / 1000).toFixed(2)} s` : "—"
}

function renderHero() {}

function renderSize() {}

function renderPerf() {}

function bindCopy() {
  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy]")
    if (!button) return
    await navigator.clipboard.writeText(button.dataset.copy)
    button.textContent = "copied"
    window.setTimeout(() => {
      button.textContent = "copy"
    }, 1200)
  })
}

function bindProgress() {
  const bar = document.querySelector(".progress")
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
  }
  window.addEventListener("scroll", update, { passive: true })
  update()
}

function userSchema(z) {
  return z.object({
    id: z.number().int(),
    email: z.string().email(),
    tags: z.array(z.string()).min(1),
    nested: z.object({ ok: z.boolean(), count: z.number() }),
  })
}

let officialZ = null
async function officialEngine() {
  if (officialZ) return officialZ
  const mod = await import("https://esm.sh/zod@4.4.3")
  officialZ = mod.z ?? mod.default
  return officialZ
}

async function currentEngine() {
  const value = document.querySelector("input[name=engine]:checked")?.value
  return value === "official" ? officialEngine() : lilZ
}

async function renderPreview() {
  const out = document.querySelector("#preview")
  try {
    const input = JSON.parse(document.querySelector("#source").value)
    const z = await currentEngine()
    out.textContent = JSON.stringify(userSchema(z).parse(input), null, 2)
  } catch (error) {
    out.textContent = String(error)
  }
}

function bindPlayground() {
  const source = document.querySelector("#source")
  source.value = sample
  source.addEventListener("input", () => {
    renderPreview()
  })
  for (const input of document.querySelectorAll("input[name=engine]")) {
    input.addEventListener("change", () => {
      renderPreview()
    })
  }
  document.querySelector("#race").addEventListener("click", async () => {
    const input = JSON.parse(source.value)
    const official = await officialEngine()
    const lilSchema = userSchema(lilZ)
    const officialSchema = userSchema(official)
    const loops = 400
    const run = (schema) => {
      schema.parse(input)
      const start = performance.now()
      for (let i = 0; i < loops; i++) schema.parse(input)
      return performance.now() - start
    }
    const lilMs = run(lilSchema)
    const officialMs = run(officialSchema)
    document.querySelector("#race-out").textContent =
      `@itslil/zod ${lilMs.toFixed(1)} ms · official ${officialMs.toFixed(1)} ms · ${times(lilMs, officialMs)}`
  })
  renderPreview()
}

renderHero()
renderPerf()
renderSize()
renderCompilerRun(data)
bindCopy()
bindProgress()
bindPlayground()
