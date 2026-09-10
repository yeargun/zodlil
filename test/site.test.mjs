import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import { describe, it } from "node:test"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const site = resolve(root, "_site")

describe("github pages artifact", () => {
  it("ships the landing page, compiled core, and results", () => {
    for (const path of ["index.html", "styles.css", "app.js", "results.json", "zod.js", ".nojekyll"]) {
      assert.equal(existsSync(resolve(site, path)), true, path)
    }
  })

  it("compares the complete LilScript ESM graph against original ESM", () => {
    const html = readFileSync(resolve(site, "index.html"), "utf8")
    assert.match(html, /@itslil\/zod/)
    assert.match(html, /Brotli-11/)
    assert.match(html, /vs Oxc/)
    assert.match(html, /vs Oxc raw \/ gzip \/ Brotli/)
    assert.match(html, /Node/)
    const results = JSON.parse(readFileSync(resolve(site, "results.json"), "utf8"))
    const closer = results.size.find((lane) => lane.id === "itslil-closer")
    const normal = results.size.find((lane) => lane.id === "itslil-normal")
    const oxc = results.size.find((lane) => lane.id === "official-oxc-mangle")
    assert.equal(closer.primary, true)
    assert.equal(normal, undefined)
    assert.equal(oxc.baseline, true)
    assert.equal(closer.raw, readFileSync(resolve(site, "esm-comparison/lilscript.js")).byteLength)
    assert.ok(results.tests.passed <= results.tests.total)
    assert.ok(results.tests.total > 0)
    const chromium = results.throughput.chromium ?? results.throughput
    const node = results.throughput.node
    assert.ok(chromium.find((row) => row.id === "itslil-closer"))
    assert.ok(chromium.find((row) => row.id === "itslil-normal"))
    assert.ok(node.find((row) => row.id === "itslil-closer"))
    assert.ok(node.find((row) => row.id === "itslil-normal"))
  })
})
