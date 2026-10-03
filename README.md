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

`npm run build` compiles the package root and format-specific entries through the compiler’s delivery pipeline. ESM and CommonJS modules, shared chunks and export wrappers are compiler-written. Locale and host-provider boundaries are identified in [the package build record](site/package-build.json). The standalone comparison keeps the optional locale provider external on both sides; its bytes are not included in the headline.

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

[Download the checked repository package](https://yeargun.github.io/zodlil/downloads/package.tgz) · [Package files, hashes and validation](https://yeargun.github.io/zodlil/package-build.json). npm publication is independent.
