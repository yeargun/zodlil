import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig, type Plugin } from "vitest/config"

const root = dirname(fileURLToPath(import.meta.url))
const index = resolve(root, "dist", "index.js")
const core = resolve(root, "dist", "core.js")
const mini = resolve(root, "dist", "mini.js")
const tests = resolve(root, "vendor", "zod", "packages", "zod", "src", "v4", "classic", "tests")

function officialAliases(): Plugin {
  return {
    name: "zodlil-official-aliases",
    enforce: "pre",
    resolveId(id) {
      if (id.includes("core/visit")) return core
      if (/(?:^|[./])deep-partial\.(?:js|ts)$/.test(id)) return index
      return null
    },
  }
}

export default defineConfig({
  plugins: [officialAliases()],
  resolve: {
    alias: [
      { find: "zod/v4/mini", replacement: mini },
      { find: "zod/mini", replacement: mini },
      { find: "zod/v4/core", replacement: core },
      { find: "zod/v4", replacement: index },
      { find: /^zod$/, replacement: index },
    ],
  },
  test: {
    include: [`${tests}/**/*.test.ts`],
    exclude: [
      `${tests}/**/*-types.test.ts`,
      `${tests}/recursive-types.test.ts`,
      `${tests}/assignability.test.ts`,
      `${tests}/optin-ladder.test.ts`,
      `${tests}/preprocess-types.test.ts`,
      `${tests}/in-out.test.ts`,
      `${tests}/generics.test.ts`,
    ],
    typecheck: {
      enabled: false,
    },
  },
})
