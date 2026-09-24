// The compiler that built this release, its compile time, and the release it replaces.
// Same approach as markedlil's site/compiler-comparison.js: everything comes from results.json.
const formatter = new Intl.NumberFormat("en-US")

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character])
}

export function compileSummary(compiler) {
  const samples = (compiler?.compileWallMs ?? []).filter(Number.isFinite).sort((left, right) => left - right)
  if (samples.length === 0) return "not recorded"
  const median = samples[Math.floor(samples.length / 2)] / 1000
  return samples.length === 1 ? `${median.toFixed(2)} s wall` : `${median.toFixed(2)} s median · ${samples.length} runs`
}

function delta(before, now) {
  if (before == null || now == null) return { className: "even", text: "not recorded" }
  const change = now - before
  if (change === 0) return { className: "even", text: "no change" }
  return {
    className: change < 0 ? "win" : "loss",
    text: `${formatter.format(Math.abs(change))} B ${change < 0 ? "smaller" : "larger"} · ${Math.abs((change / before) * 100).toFixed(1)}%`,
  }
}

function valueRow(term, value) {
  return `<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(value ?? "not recorded")}</dd></div>`
}

export function renderCompilerRun(data, selector = "#compiler-run") {
  const root = document.querySelector(selector)
  if (!root) return
  const compiler = data.compiler
  const previous = data.previousRelease
  const shipped = (data.size ?? []).find((lane) => lane.primary)
  const core = (data.size ?? []).find((lane) => lane.id === "itslil-core")
  if (!compiler || !shipped) {
    root.textContent = "Compiler data is not available."
    return
  }
  const packageDelta = delta(previous?.package?.brotli11, shipped.brotli11)
  const coreDelta = delta(previous?.core?.brotli11, core?.brotli11)
  root.innerHTML = `
    <div class="compiler-runline" aria-label="Brotli-11, previous release against this release">
      <article>
        <span>Previous release · ${escapeHtml(previous?.compiledAt ?? "")}</span>
        <strong>${previous?.package ? `${formatter.format(previous.package.brotli11)} B` : "—"}</strong>
        <small>${escapeHtml(previous?.compiler ?? "")}</small>
      </article>
      <div class="compiler-arrow" aria-hidden="true">→</div>
      <article class="current">
        <span>This release · compiler ${escapeHtml(compiler.revision)}</span>
        <strong>${formatter.format(shipped.brotli11)} B</strong>
        <small>${escapeHtml(shipped.note)}</small>
      </article>
    </div>
    <div class="compiler-facts">
      <article class="${packageDelta.className}"><span>Package, Brotli-11</span><strong>${escapeHtml(packageDelta.text)}</strong></article>
      <article class="${coreDelta.className}"><span>zod.core.js, Brotli-11</span><strong>${escapeHtml(coreDelta.text)}</strong></article>
      <article><span>Compile time</span><strong>${escapeHtml(compileSummary(compiler))}</strong></article>
    </div>
    <div class="compiler-provenance-list">
      <details class="compiler-provenance" open>
        <summary>This release's compile</summary>
        <dl>
          ${valueRow("compiler revision", compiler.revision)}
          ${valueRow("compiler SHA-256", compiler.binarySha256)}
          ${valueRow("input", compiler.input)}
          ${valueRow("config", compiler.config)}
          ${valueRow("target", compiler.target)}
          ${valueRow("output", compiler.output)}
          ${valueRow("output SHA-256", compiler.outputSha256)}
          ${valueRow("compile wall time, each run", (compiler.compileWallMs ?? []).map((ms) => `${formatter.format(ms)} ms`).join(" · "))}
          ${valueRow("host", compiler.host)}
          ${valueRow("recorded", compiler.date)}
        </dl>
      </details>
      ${
        previous
          ? `<details class="compiler-provenance">
        <summary>Previous release (${escapeHtml(previous.commit)})</summary>
        <dl>
          ${valueRow("compiler", previous.compiler)}
          ${valueRow("package", `${previous.package.note}: ${formatter.format(previous.package.raw)} raw / ${formatter.format(previous.package.gzip9)} gzip-9 / ${formatter.format(previous.package.brotli11)} Brotli-11`)}
          ${valueRow("zod.core.js", `${formatter.format(previous.core.raw)} raw / ${formatter.format(previous.core.gzip9)} gzip-9 / ${formatter.format(previous.core.brotli11)} Brotli-11`)}
          ${valueRow("index.cjs", `${formatter.format(previous.cjs.raw)} raw / ${formatter.format(previous.cjs.gzip9)} gzip-9 / ${formatter.format(previous.cjs.brotli11)} Brotli-11`)}
          ${valueRow("its size bar", `${formatter.format(previous.siteBar.brotli11)} B Brotli-11: ${previous.siteBar.note}`)}
        </dl>
      </details>`
          : ""
      }
    </div>`
}
