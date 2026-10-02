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

## Comparison with the original

See [COMPARISON.md](COMPARISON.md) for current raw-, gzip- and Brotli-objective builds, minified upstream comparisons, build times and validation.
