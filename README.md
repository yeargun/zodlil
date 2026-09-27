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
| **@itslil/zod · shipped (Brotli objective)** | **95,150** | **31,724** | **28,132** | **0.745× / 0.929× / 0.956×** |
| @itslil/zod · gzip objective | 93,901 | 31,675 | 28,135 | 0.735× / 0.928× / 0.956× |
| @itslil/zod · raw objective | 87,278 | 32,587 | 29,135 | 0.683× / 0.955× / 0.990× |
| `zod.core.js` alone | 90,385 | 30,333 | 26,948 | 0.708× / 0.889× / 0.915× |
| @itslil/zod · mangle off | 139,065 | 39,695 | 34,799 | 1.089× / 1.163× / 1.182× |
| @itslil/zod · esbuild bundle (post-processed by esbuild) | 133,684 | 36,790 | 31,760 | 1.047× / 1.078× / 1.079× |

The shipped package is 1,305 bytes (4.4%) under the bar in Brotli, the gzip-objective build is 2,459 under it in gzip, and the raw-objective build is 40,431 raw bytes under it. The gzip objective chooses a different core: 31,675 gzip against the shipped file's 31,724. The esbuild bundle row is the conservative figure: esbuild re-prints our already-minified core when it bundles the package, and loses to the bar by 2,323 Brotli. The bar's `z.core` is upstream's whole core namespace, of which the port offers 42 names, so the bar carries about 1.2K Brotli of surface the port does not ship; the port's own additions, such as `z.visit`, count against it.

The previous release (2026-09-24, LilScript `aa2052f0`) loaded 28,192 Brotli across the same three files (`zod.core.js` 27,008). This release is 60 bytes (0.2%) smaller. The release before it (2026-09-02, the old compiler, since deleted) loaded 47,921 Brotli across seven files.

## Compile time

`npm run record:compiler` compiles the shipped file three times and records each wall time in `site/results.json`, with the compiler's revision and binary hash; every run must reproduce `dist/zod.core.js` byte for byte. This release: compiler `24968659` (SHA-256 `47048e41…194b3041`), 4,189 / 3,630 / 2,888 ms on an 8-core AMD EPYC 7763 host shared with other jobs.

Three clean builds from source of the release commit, on the same host (`comparison/source-build/`, shown on the site): the package build takes 6.30 s median, of which the compiler takes 5.59 s; zod's own `pnpm --filter zod build` takes 34.10 s. The previous record (2026-09-24, LilScript `aa2052f0`, same host) was 1.12 s per package build and 20.06 s for zod's build.

## Performance

Same 48-object batch, 400 rounds per sample. Quiet median after discarding the first 3. Chromium is Playwright; Node is v24. Both LilScript lanes match official output. Ratio is lane / official (lower is faster).

| Lane | Chromium µs | vs official | Node µs | vs official |
| --- | ---: | ---: | ---: | ---: |
| zod@4.4.3 | 0.432 | 1.00× | 0.946 | 1.00× |
| **@itslil/zod** | **2.995** | **6.93×** | **3.194** | **3.38×** |
| @itslil/zod · mangle off | 2.714 | 6.28× | 3.202 | 3.39× |

Parsing is 6.93× official in Chromium and 3.38× in Node (the 2026-09-24 release measured 5.79× and 5.48×). On this shared host, back-to-back runs of `npm run bench` disagreed by up to 2× on these ratios, so read them as several times slower than official, not as precise figures. The rewrite dropped the fast paths that were JavaScript source compiled with `new Function`, which a strict CSP forbids; upstream compiles its object parsers that way. This port puts size first.

```sh
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm test
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm run measure
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm run record:compiler
npx playwright install chromium
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm run bench
```
