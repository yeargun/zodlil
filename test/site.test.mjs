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

  it("compares closer-world and normal LilScript lanes against official minify", () => {
    const html = readFileSync(resolve(site, "index.html"), "utf8")
    assert.match(html, /@itslil\/zod/)
    assert.match(html, /closer-world/)
    assert.match(html, /mangle off/)
    assert.match(html, /Brotli-11/)
    const results = JSON.parse(readFileSync(resolve(site, "results.json"), "utf8"))
    const closer = results.size.find((lane) => lane.id === "itslil-closer")
    const normal = results.size.find((lane) => lane.id === "itslil-normal")
    const oxc = results.size.find((lane) => lane.id === "official-oxc-mangle")
    assert.equal(closer.primary, true)
    assert.ok(normal)
    assert.equal(oxc.baseline, true)
    assert.ok(closer.brotli11 < oxc.brotli11)
    assert.ok(closer.brotli11 < normal.brotli11)
    assert.equal(results.tests.passed, 1353)
    assert.equal(results.tests.total, 1353)
  })
})
