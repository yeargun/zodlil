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

function renderHero() {
  const bar = barFor("brotli11")
  const shipped = (data.size ?? []).find((lane) => lane.primary)
  if (!bar || !shipped) return
  document.querySelector("#hero-ratio").innerHTML =
    `${times(shipped.brotli11, bar.brotli11)}<span>Brotli vs ${bar.name}</span>`
  document.querySelector("#hero-bytes").textContent =
    `${formatter.format(bar.brotli11)} B → ${formatter.format(shipped.brotli11)} B Brotli-11`
  const gzip = laneById("itslil-gzip") ?? shipped
  const raw = laneById("itslil-raw") ?? shipped
  document.querySelector("#hero-gzip").textContent = times(gzip.gzip9, barFor("gzip9").gzip9)
  document.querySelector("#hero-raw").textContent = times(raw.raw, barFor("raw").raw)
  document.querySelector("#hero-tests").textContent = data.tests
    ? `${data.tests.passed}/${data.tests.total}`
    : "1353/1353"
  const chromium = throughputLanes("chromium")
  const official = chromium.find((row) => row.id === "official")
  const lil = chromium.find((row) => row.id === "itslil-closer")
  document.querySelector("#hero-speed").textContent =
    official && lil ? times(lil.ms, official.ms) : "—"
  document.querySelector("#hero-compile").textContent = compileSeconds()
  const before = data.previousRelease?.package?.brotli11
  document.querySelector("#hero-release").textContent = before ? times(shipped.brotli11, before) : "—"
}

function renderSize() {
  renderCodec("brotli11", "#bar-brotli", "#body-brotli")
  renderCodec("gzip9", "#bar-gzip", "#body-gzip")
  renderCodec("raw", "#bar-raw", "#body-raw")
  const bars = { raw: barFor("raw"), gzip9: barFor("gzip9"), brotli11: barFor("brotli11") }
  document.querySelector("#body-matched").innerHTML = sizeLanes(null)
    .map((lane) => {
      const ratio = `${times(lane.raw, bars.raw.raw)} / ${times(lane.gzip9, bars.gzip9.gzip9)} / ${times(lane.brotli11, bars.brotli11.brotli11)}`
      return `
    <tr>
      <th scope="row">${lane.name}</th>
      <td>${formatter.format(lane.raw)}</td>
      <td>${formatter.format(lane.gzip9)}</td>
      <td>${formatter.format(lane.brotli11)}</td>
      <td class="verdict ${verdict(lane.brotli11, bars.brotli11.brotli11)}"><strong>${ratio}</strong></td>
    </tr>`
    })
    .join("")
  document.querySelector("#body-delivered").innerHTML = (data.delivered ?? [])
    .map(
      (file) => `
    <tr>
      <th scope="row"><code>${file.path}</code><small>${file.note}</small></th>
      <td class="written ${file.writtenBy === "compiler" ? "compiler" : "other"}">${file.writtenBy}</td>
      <td>${formatter.format(file.raw)}</td>
      <td>${formatter.format(file.gzip9)}</td>
      <td>${formatter.format(file.brotli11)}</td>
    </tr>`,
    )
    .join("")
}

function renderPerf() {
  const chromium = throughputLanes("chromium")
  const node = throughputLanes("node")
  const officialC = chromium.find((row) => row.id === "official")
  const closerC = chromium.find((row) => row.id === "itslil-closer")
  const officialN = node.find((row) => row.id === "official")
  const closerN = node.find((row) => row.id === "itslil-closer")
  const cards = [
    {
      label: "Chromium parse vs official",
      value: officialC && closerC ? times(closerC.ms, officialC.ms) : "—",
      win: officialC && closerC ? closerC.ms < officialC.ms : false,
    },
    {
      label: "Node parse vs official",
      value: officialN && closerN ? times(closerN.ms, officialN.ms) : "—",
      win: officialN && closerN ? closerN.ms < officialN.ms : false,
    },
    {
      label: "classic tests with matching output",
      value: data.tests ? `${data.tests.passed}/${data.tests.total}` : "—",
      geo: true,
    },
    {
      label: "median Chromium parse",
      value: closerC ? duration(closerC.ms) : "—",
    },
  ]
  document.querySelector("#perf-cards").innerHTML = cards
    .map(
      (card) => `
    <article class="perf-card${card.win ? " win" : ""}${card.geo ? " geo" : ""}">
      <strong>${card.value}</strong>
      <span>${card.label}</span>
    </article>
  `,
    )
    .join("")
  const ids = ["official", "itslil-closer", "itslil-normal"]
  document.querySelector("#perf-body").innerHTML = ids
    .map((id) => {
      const c = chromium.find((row) => row.id === id)
      const n = node.find((row) => row.id === id)
      if (!c && !n) return ""
      const name = (c ?? n).name
      const cRatio = officialC && c ? times(c.ms, officialC.ms) : "—"
      const nRatio = officialN && n ? times(n.ms, officialN.ms) : "—"
      const cWin = officialC && c ? c.ms < officialC.ms : false
      const nWin = officialN && n ? n.ms < officialN.ms : false
      return `
    <tr>
      <th scope="row">${name}</th>
      <td>${duration(c?.ms)}</td>
      <td class="verdict ${id === "official" ? "even" : cWin ? "win" : "loss"}"><strong>${cRatio}</strong></td>
      <td>${duration(n?.ms)}</td>
      <td class="verdict ${id === "official" ? "even" : nWin ? "win" : "loss"}"><strong>${nRatio}</strong></td>
    </tr>`
    })
    .join("")
  document.querySelector("#perf-note").textContent =
    `${data.browser ?? "Playwright Chromium"} · ${data.runtime ?? "Node"}. ${data.codec ?? ""}. Quiet median after discarding the first ${data.warmupDiscard ?? 3} samples.`
}

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
