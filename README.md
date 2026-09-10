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

## Mangle on / off

`public_aggregate_abi = "named"` in every config, so `z`, `parse`, `object`, `string`, and the rest of the developer-facing API keep their names.

| Config | Lane | Identifiers / properties |
| --- | --- | --- |
| `lilscript.dev.toml` / `lilscript.toml` | closer-world | on |
| `lilscript.nomangle.toml` | normal | off |

The published file is closer-world. Benchmarks always measure both lanes against official `zod@4.4.3` after Oxc and Terser.

## Size

`lilscript-codec` raw / gzip-9 / Brotli-11. Official rows are an esbuild bundle of `zod@4.4.3` `v4`, then Oxc or Terser.

| Lane | raw | gzip-9 | Brotli-11 | vs Oxc raw / gzip / Brotli |
| --- | ---: | ---: | ---: | ---: |
| Official · Oxc closer-world (baseline) | 309,045 | 66,383 | 54,791 | 1.000× / 1.000× / 1.000× |
| Official · Oxc normal | 395,062 | 72,680 | 59,496 | 1.278× / 1.095× / 1.086× |
| Official · Terser closer-world | 280,301 | 63,734 | 52,561 | 0.907× / 0.960× / 0.959× |
| Official · Terser normal | 367,526 | 70,452 | 57,503 | 1.189× / 1.061× / 1.049× |
| **@itslil/zod · closer-world** | **132,595** | **39,649** | **34,152** | **0.429× / 0.597× / 0.623×** |
| @itslil/zod · normal | 197,579 | 53,968 | 44,208 | 0.639× / 0.813× / 0.807× |

Closer-world is **0.429× / 0.597× / 0.623×** the official Oxc closer-world row. Normal (mangle off) stays larger than closer-world, as expected.

## Performance

Same 48-object batch, 400 rounds per sample. Quiet median after discarding the first 3. Chromium is Playwright; Node is v24. Both LilScript lanes match official output. Ratio is lane / official (lower is faster).

| Lane | Chromium µs | vs official | Node µs | vs official |
| --- | ---: | ---: | ---: | ---: |
| zod@4.4.3 | 0.219 | 1.00× | 0.260 | 1.00× |
| **@itslil/zod · closer-world** | **0.286** | **1.31×** | **0.477** | **1.83×** |
| @itslil/zod · normal | 0.255 | 1.17× | 0.291 | 1.12× |

```sh
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm test
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm run measure
npx playwright install chromium
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm run bench
```
