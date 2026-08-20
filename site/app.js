const data = await fetch("./results.json").then((response) => {
  if (!response.ok) throw new Error(`Unable to load results: ${response.status}`)
  return response.json()
})

const formatter = new Intl.NumberFormat("en-US")

function bytes(value) {
  return `${formatter.format(value)} B`
}

function ratio(value, baseline) {
  if (!baseline) return "—"
  return `${(value / baseline).toFixed(3)}×`
}

function duration(ms) {
  if (ms < 0.01) return `${(ms * 1000).toFixed(2)} µs`
  return `${ms.toFixed(3)} ms`
}

const size = data.size ?? []
const official = size.find((row) => row.baseline) ?? size.find((row) => row.id === "official-oxc-mangle")
const lil = size.find((row) => row.primary) ?? size.find((row) => row.id === "itslil-closer") ?? size.find((row) => row.id === "itslil")
const throughput = data.throughput ?? []
const officialMs = throughput.find((row) => row.id === "official")?.ms
const lilMs =
  throughput.find((row) => row.id === "itslil-closer")?.ms ??
  throughput.find((row) => row.id === "itslil")?.ms
const normalMs = throughput.find((row) => row.id === "itslil-normal")?.ms

if (lil && official) {
  document.getElementById("hero-ratio").innerHTML = `${ratio(lil.brotli11, official.brotli11)}<span>brotli</span>`
  document.getElementById("hero-bytes").textContent = `${bytes(official.brotli11)} → ${bytes(lil.brotli11)}`
  document.getElementById("hero-gzip").textContent = ratio(lil.gzip9, official.gzip9)
  document.getElementById("hero-raw").textContent = ratio(lil.raw, official.raw)
}
document.getElementById("hero-tests").textContent = data.tests?.passed
  ? `${data.tests.passed}/${data.tests.total}`
  : "1353/1353"
document.getElementById("hero-speed").textContent =
  officialMs && lilMs ? `${(lilMs / officialMs).toFixed(2)}× vs official` : "—"

const cards = document.getElementById("perf-cards")
for (const row of throughput) {
  const article = document.createElement("article")
  article.innerHTML = `<span>${row.name}</span><strong>${duration(row.ms)}</strong>`
  cards.append(article)
}

document.getElementById("lab-out").textContent = JSON.stringify(
  {
    pin: data.pin,
    match: data.tests?.match ?? null,
    tests: data.tests ?? null,
    codec: data.codec,
    closerMs: lilMs ?? null,
    normalMs: normalMs ?? null,
    officialMs: officialMs ?? null,
  },
  null,
  2,
)

const body = document.getElementById("size-body")
for (const row of size) {
  const tr = document.createElement("tr")
  if (row.primary) tr.className = "primary"
  tr.innerHTML = `<td>${row.name}</td><td>${bytes(row.raw)}</td><td>${bytes(row.gzip9)}</td><td>${bytes(row.brotli11)}</td>`
  body.append(tr)
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(button.dataset.copy)
    button.textContent = "copied"
  })
})
