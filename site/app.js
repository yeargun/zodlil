import { z as lilZ } from "./zod.js"

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

function barClass(id) {
  if (id === "itslil-closer") return "bar-lil"
  if (id === "itslil-normal") return "bar-normal"
  return "bar-official"
}

function sizeLanes() {
  return [
    "official-oxc-mangle",
    "official-oxc-nomangle",
    "official-terser-mangle",
    "official-terser-nomangle",
    "itslil-closer",
    "itslil-normal",
  ]
    .map(laneById)
    .filter(Boolean)
}

function throughputLanes(runtime) {
  const block = data.throughput
  if (Array.isArray(block)) return runtime === "chromium" ? block : []
  return block?.[runtime] ?? []
}

function renderCodec(metric, barId, bodyId) {
  const oxc = laneById("official-oxc-mangle")
  const lanes = sizeLanes()
  if (!oxc || lanes.length === 0) return
  const max = Math.max(...lanes.map((lane) => lane[metric]))
  document.querySelector(barId).innerHTML = lanes
    .map((lane) => {
      const width = Math.max(18, (lane[metric] / max) * 100)
      return `<div class="${barClass(lane.id)}" style="width:${width}%"><span>${lane.name}</span><strong>${formatter.format(lane[metric])} B</strong></div>`
    })
    .join("")
  document.querySelector(bodyId).innerHTML = lanes
    .map((lane) => {
      const ratio = times(lane[metric], oxc[metric])
      const win = lane[metric] < oxc[metric]
      return `
    <tr>
      <th scope="row">${lane.name}</th>
      <td>${formatter.format(lane[metric])}</td>
      <td class="verdict ${win ? "win" : lane[metric] === oxc[metric] ? "even" : "loss"}"><strong>${ratio}</strong></td>
    </tr>`
    })
    .join("")
}

function renderHero() {
  const oxc = laneById("official-oxc-mangle")
  const closer = laneById("itslil-closer")
  if (!oxc || !closer) return
  document.querySelector("#hero-ratio").innerHTML =
    `${times(closer.brotli11, oxc.brotli11)}<span>brotli vs Oxc</span>`
  document.querySelector("#hero-bytes").textContent =
    `${formatter.format(oxc.brotli11)} B → ${formatter.format(closer.brotli11)} B Brotli-11`
  document.querySelector("#hero-gzip").textContent = times(closer.gzip9, oxc.gzip9)
  document.querySelector("#hero-raw").textContent = times(closer.raw, oxc.raw)
  document.querySelector("#hero-tests").textContent = data.tests
    ? `${data.tests.passed}/${data.tests.total}`
    : "1353/1353"
  const chromium = throughputLanes("chromium")
  const official = chromium.find((row) => row.id === "official")
  const lil = chromium.find((row) => row.id === "itslil-closer")
  document.querySelector("#hero-speed").textContent =
    official && lil ? times(lil.ms, official.ms) : "—"
}

function renderSize() {
  const oxc = laneById("official-oxc-mangle")
  if (!oxc) return
  renderCodec("brotli11", "#bar-brotli", "#body-brotli")
  renderCodec("gzip9", "#bar-gzip", "#body-gzip")
  renderCodec("raw", "#bar-raw", "#body-raw")
  document.querySelector("#body-matched").innerHTML = sizeLanes()
    .map((lane) => {
      const ratio = `${times(lane.raw, oxc.raw)} / ${times(lane.gzip9, oxc.gzip9)} / ${times(lane.brotli11, oxc.brotli11)}`
      const win = lane.brotli11 < oxc.brotli11
      return `
    <tr>
      <th scope="row">${lane.name}</th>
      <td>${formatter.format(lane.raw)}</td>
      <td>${formatter.format(lane.gzip9)}</td>
      <td>${formatter.format(lane.brotli11)}</td>
      <td class="verdict ${win ? "win" : lane.brotli11 === oxc.brotli11 ? "even" : "loss"}"><strong>${ratio}</strong></td>
    </tr>`
    })
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
      <td class="verdict ${cWin ? "win" : "even"}"><strong>${cRatio}</strong></td>
      <td>${duration(n?.ms)}</td>
      <td class="verdict ${nWin ? "win" : "even"}"><strong>${nRatio}</strong></td>
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
bindCopy()
bindProgress()
bindPlayground()
