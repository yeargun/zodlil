import assert from "node:assert/strict"
import { createHash } from "node:crypto"
import { existsSync, readFileSync, statSync } from "node:fs"
import { describe, it } from "node:test"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const site = resolve(root, "_site")
const results = () => JSON.parse(readFileSync(resolve(site, "results.json"), "utf8"))
const bytes = (path) => statSync(resolve(root, path)).size

describe("github pages artifact", () => {
  it("ships the landing page, compiled core, and results", () => {
    for (const path of ["index.html", "styles.css", "app.js", "compiler-run.js", "results.json", "zod.js", ".nojekyll"]) {
      assert.equal(existsSync(resolve(site, path)), true, path)
    }
  })

  it("compares the shipped package against the smallest official minifier, per codec", () => {
    const html = readFileSync(resolve(site, "index.html"), "utf8")
    assert.match(html, /@itslil\/zod/)
    assert.match(html, /Brotli-11/)
    assert.match(html, /vs bar/)
    assert.match(html, /vs bar raw \/ gzip \/ Brotli/)
    assert.match(html, /English\s+locale only/)
    assert.match(html, /Node/)
    const { size, bars, tests, throughput } = results()
    const lane = (id) => size.find((row) => row.id === id)
    const shipped = size.find((row) => row.primary)
    assert.equal(shipped.id, "itslil-closer")
    const minified = size.filter((row) => row.official && row.id !== "official")
    assert.ok(minified.length >= 5)
    for (const metric of ["brotli11", "gzip9", "raw"]) {
      const bar = lane(bars[metric])
      assert.ok(bar?.official, metric)
      assert.equal(bar[metric], Math.min(...minified.map((row) => row[metric])), metric)
    }
    assert.equal(size.find((row) => row.baseline)?.id, bars.brotli11)
    // the receipts describe the committed dist
    assert.equal(lane("itslil-core").raw, bytes("dist/zod.core.js"))
    assert.equal(shipped.raw, bytes("dist/zod.core.js") + bytes("dist/compat.js") + bytes("dist/index.js"))
    assert.ok(lane("itslil-gzip") && lane("itslil-raw"))
    assert.ok(shipped.brotli11 < lane("itslil-normal").brotli11)
    assert.equal(tests.passed, 1353)
    assert.equal(tests.total, 1353)
    const chromium = throughput.chromium ?? throughput
    for (const rows of [chromium, throughput.node]) {
      assert.ok(rows.find((row) => row.id === "itslil-closer"))
      assert.ok(rows.find((row) => row.id === "itslil-normal"))
    }
  })

  it("labels every delivered file by what wrote it", () => {
    const html = readFileSync(resolve(site, "index.html"), "utf8")
    assert.match(html, /post-processed\s+by esbuild, not compiler-written/)
    const { delivered, size } = results()
    const file = (path) => delivered.find((row) => row.path === path)
    assert.equal(file("dist/zod.core.js").writtenBy, "compiler")
    assert.equal(file("dist/index.cjs").writtenBy, "post-processed by esbuild, not compiler-written")
    for (const row of delivered) assert.equal(row.raw, bytes(row.path), row.path)
    assert.equal(size.find((row) => row.id === "itslil-esbuild-bundle").postProcessedBy, "esbuild")
  })

  it("shows the compile of the shipped file: compiler, binary and wall time", () => {
    const html = readFileSync(resolve(site, "index.html"), "utf8")
    assert.match(html, /id="compiler-run"/)
    assert.match(html, /Compile<br \/>time/)
    const { compiler, previousRelease } = results()
    assert.match(compiler.revision, /^[0-9a-f]{7,40}$/)
    assert.match(compiler.binarySha256, /^[0-9a-f]{64}$/)
    assert.ok(compiler.compileWallMs.length >= 3)
    for (const ms of compiler.compileWallMs) assert.ok(Number.isFinite(ms) && ms > 0)
    const shipped = createHash("sha256").update(readFileSync(resolve(site, "zod.js"))).digest("hex")
    assert.equal(compiler.outputSha256, shipped, "the recorded compile is of the shipped zod.core.js")
    assert.ok(previousRelease.package.brotli11 > 0 && previousRelease.core.brotli11 > 0)
  })
})
