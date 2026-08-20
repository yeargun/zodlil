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

| Lane | raw | gzip-9 | Brotli-11 |
| --- | ---: | ---: | ---: |
| Official · Oxc closer-world (baseline) | 309,045 | 66,383 | 54,791 |
| Official · Oxc normal | 395,062 | 72,680 | 59,496 |
| Official · Terser closer-world | 280,301 | 63,734 | 52,561 |
| Official · Terser normal | 367,526 | 70,452 | 57,503 |
| **@itslil/zod · closer-world** | **112,019** | **34,542** | **29,978** |
| @itslil/zod · normal | 185,214 | 50,535 | 41,558 |

Closer-world Brotli is **0.547×** the official Oxc closer-world row. Normal (mangle off) stays larger than closer-world, as expected.

## Performance

Playwright Chromium. Same 48-object batch parsed 400 times per sample. Quiet median of 9 samples after discarding the first 3. Both LilScript lanes match official output. Ratio is lane / official (lower is faster).

| Lane | µs / parse | vs official |
| --- | ---: | ---: |
| zod@4.4.3 | 0.214 | 1.00× |
| **@itslil/zod · closer-world** | **0.911** | **4.27×** |
| @itslil/zod · normal | 0.917 | 4.29× |

The size win is the closer-world artifact. Parse of this object schema is slower than official; closer-world and normal stay within a few percent of each other.

```sh
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm test
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm run measure
npx playwright install chromium
PATH="$HOME/.nvm/versions/node/v24.11.1/bin:$PATH" npm run bench
```
