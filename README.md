# @itslil/zod



Zod 4.4.3 reimplemented in LilScript. Same classic API and official types. Internals can be mangled; only the public API stays named.

Official classic suite: **1353 / 1353**.

**Site:** [yeargun.github.io/zodlil](https://yeargun.github.io/zodlil/)

```sh
npm install @itslil/zod
```

```js
import { z } from "@itslil/zod"

const User = z.object({
  email: z.string().email(),
  age: z.number().int().min(0),
})

User.parse({ email: "a@b.com", age: 20 })
```

This is an independent port of [`zod@4.4.3`](https://github.com/colinhacks/zod). It is not affiliated with Colin McDonnell.

## Build

`npm run build` compiles `scripts/zod.lil` (the package root: the core in `src/` plus the JSON-schema layer in `scripts/json-schema.lil`) with `lilscript.toml` into `dist/zod.core.js`. Nothing minifies it afterwards. The only hand-written JavaScript left is `dist/compat.js` (769 bytes: upstream locales when `zod` is installed, and the `JSONSchemaGenerator` class). `dist/index.js` and the other entry points are generated re-exports.

`dist/index.cjs` is post-processed by esbuild, not compiler-written: it is esbuild's CommonJS bundle of `dist/index.js`, because the compiler has no CommonJS target yet.

| Config | Objective | Mangling |
| --- | --- | --- |
| `lilscript.toml` (shipped) | Brotli | on |
| `lilscript.gzip.toml` | gzip | on |
| `lilscript.bytes.toml` | raw bytes | on |
| `lilscript.nomangle.toml` | Brotli | off |
| `lilscript.dev.toml` (`--dev`) | Brotli, no candidate search | on |

The public API (`z`, `parse`, `object`, `string` and the rest) keeps its names in every config.

## Size

`lilscript-codec` raw / gzip-9 / Brotli-11, from `npm run measure`. The bar is `zod@4.4.3` restricted to the 181 `z` members this port shares (`scripts/official-entry.mjs`), English locale only, bundled by esbuild and minified by Oxc, Terser and esbuild. Oxc is the smallest in every codec, so Oxc is the bar. Our rows are what `import { z } from "@itslil/zod"` loads: `zod.core.js`, `compat.js` and `index.js`, each compressed on its own, as served.

| Lane | raw | gzip-9 | Brotli-11 | vs bar raw / gzip / Brotli |
| --- | ---: | ---: | ---: | ---: |
| Official · Oxc (bar) | 127,709 | 34,134 | 29,437 | 1.000× / 1.000× / 1.000× |
| Official · Terser | 130,452 | 34,542 | 29,642 | 1.021× / 1.012× / 1.007× |
| Official · esbuild | 130,491 | 35,240 | 30,367 | 1.022× / 1.032× / 1.032× |
| **@itslil/zod · shipped (Brotli objective)** | **95,332** | **31,749** | **28,192** | **0.746× / 0.930× / 0.958×** |
| @itslil/zod · gzip objective | 95,332 | 31,749 | 28,192 | 0.746× / 0.930× / 0.958× |
| @itslil/zod · raw objective | 87,323 | 32,607 | 29,180 | 0.684× / 0.955× / 0.991× |
| `zod.core.js` alone | 90,567 | 30,358 | 27,008 | 0.709× / 0.889× / 0.917× |
| @itslil/zod · mangle off | 139,091 | 39,704 | 34,851 | 1.089× / 1.163× / 1.184× |
| @itslil/zod · esbuild bundle (post-processed by esbuild) | 134,055 | 36,831 | 31,732 | 1.050× / 1.079× / 1.078× |

The shipped package is 1,245 bytes (4.2%) under the bar in Brotli, 2,385 under it in gzip, and the raw-objective build is 40,386 raw bytes under it. The gzip objective chooses the same file as the Brotli objective. The esbuild bundle row is the conservative figure: esbuild re-prints our already-minified core when it bundles the package, and loses to the bar by 2,295 Brotli. The bar's `z.core` is upstream's whole core namespace, of which the port offers 42 names, so the bar carries about 1.2K Brotli of surface the port does not ship; the port's own additions, such as `z.visit`, count against it.

The previous release (2026-09-02, built by the old compiler, since deleted) loaded 47,921 Brotli across seven files (`zod.core.js` 32,458). This release is 41.2% smaller. Its site compared `zod.core.js` alone with all of `zod/v4` including 50 other locales the port does not ship; that bar is gone.

## Compile time

`npm run record:compiler` compiles the shipped file three times and records each wall time in `site/results.json`, with the compiler's revision and binary hash; every run must reproduce `dist/zod.core.js` byte for byte. This release: compiler `aa2052f0` (SHA-256 `13cb49a9…77cf18f9`), 1,181 / 1,141 / 884 ms on an 8-core AMD EPYC 7763 host.

## Performance

Same 48-object batch, 400 rounds per sample. Quiet median after discarding the first 3. Chromium is Playwright; Node is v24. Both LilScript lanes match official output. Ratio is lane / official (lower is faster).

| Lane | Chromium µs | vs official | Node µs | vs official |
| --- | ---: | ---: | ---: | ---: |
| zod@4.4.3 | 0.391 | 1.00× | 0.496 | 1.00× |
| **@itslil/zod** | **2.260** | **5.79×** | **2.718** | **5.48×** |
| @itslil/zod · mangle off | 2.214 | 5.67× | 2.773 | 5.59× |

This release parses more slowly than the last one (about 1.5× official in Node on this host). The rewrite dropped the fast paths that were JavaScript source compiled with `new Function`, which a strict CSP forbids; upstream compiles its object parsers that way. This port puts size first.

```sh
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm test
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm run measure
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm run record:compiler
npx playwright install chromium
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm run bench
```
