# Current comparison with the original

Node ESM package-root API, including compatibility helpers. The optional zod/v4/locales provider is external on both sides; Node builtins are excluded. The original locale-index imports use that same external provider. These sizes exclude the locale provider, so they are not total application download sizes. The browser playground uses the separately compiled browser core.

Each compression row uses a separate LilScript compilation targeting that objective. Original results are the smallest of Terser, esbuild and Oxc for the named codec.

| Objective | LilScript bytes | Original minified bytes | Original minifier | LilScript build (s) | Original bundle + minify (s) |
|---|---:|---:|---|---:|---:|
| raw | 87,282 | 132,160 | Oxc | 12.687 | 0.214 |
| gzip | 32,437 | 35,532 | Oxc | 11.787 | 0.214 |
| brotli | 28,807 | 29,956 | Oxc | 19.051 | 0.214 |

Original version: `zod@4.4.3`. gzip level 9; Brotli quality 11/window 22. Each time is one sequential fresh-output build on the recorded shared machine. Original timing starts from installed ESM and does not include the original repository’s TypeScript compilation. Dependency installation, tests and final file compression are excluded.

Validation: 777 checks across raw, gzip and Brotli main entries. This does not cover every package format or establish complete upstream API equivalence.

[Artifacts, hashes and settings](site/comparison.json) · [Commands, source identities and timings](site/comparison-builds.json) · [Exact checked source inputs](site/comparison-artifacts/sources.tar.gz).
