# Source-build measurements

Measured 2026-09-27T16:36:06Z using LilScript `249686599dc3bf1b6bf70dc9a030081b755bbb24` and the upstream Git revision recorded in `job.json`.

`result.json` records the commands, wall time, CPU time, machine and exit codes, and, for each LilScript build, the wall time of every compiler invocation. `esm.json` records the comparison ESM assembly (the port's `scripts/official-entry.mjs` over the source-built zod, English locale only) and its exact input graph. `compiler-invocations.jsonl` records the compiler invocations of the last LilScript build. The lockfiles record dependency resolution. The public page uses `source-build.json` for the final consolidated record.

Run the installation and setup commands from `job.json` in the corresponding pinned upstream checkout; they are excluded from build time. Run the recorded build command with Node v24.11.1. Clear the listed generated output directories between repetitions. Install the port dependencies and set `LILSCRIPT_COMPILER`, `LILSCRIPT_ROOT` and `LILSCRIPT_CODEC` to the recorded compiler and codec. The port's tests need `vendor/zod` at the pin in `scripts/setup.mjs`.

The original repository build and comparison ESM assembly are measured separately. Build output scope can differ between repositories; no build speedup is inferred. Both lanes ran on the same Azure Standard_B8als_v2 host, which also runs unrelated jobs.
