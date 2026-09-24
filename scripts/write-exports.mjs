import { copyFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const dist = (file) => resolve(root, "dist", file)
copyFileSync(resolve(root, "scripts", "compat.mjs"), dist("compat.js"))

// dist/compat.js completes z over the compiled core; its own keys become the named exports
const { z } = await import(pathToFileURL(dist("compat.js")).href)
const reserved = new Set(["null", "undefined", "void", "enum", "interface", "class", "function", "var", "let", "const", "import", "export", "await", "yield", "new", "this", "super", "typeof", "instanceof", "in", "if", "else", "return", "switch", "case", "break", "continue", "try", "catch", "finally", "throw", "with", "do", "while", "for", "debugger", "extends", "static"])
// one destructuring in the order esbuild prints the export clause (sorted), so the two lists compress as one run
// (z.with is the core's alias of check; upstream exports no `with`)
const keys = Object.keys(z).filter((key) => /^[$A-Za-z_][$A-Za-z0-9_]*$/.test(key) && key !== "default" && key !== "z" && key !== "with").sort()
writeFileSync(
  dist("index.js"),
  [
    `import { z } from "./compat.js";`,
    `export { z, z as default };`,
    `const { ${keys.map((key) => (reserved.has(key) ? `${key}: $${key}` : key)).join(", ")} } = z;`,
    `export { ${keys.map((key) => (reserved.has(key) ? `$${key} as ${key}` : key)).join(", ")} };`,
  ].join("\n") + "\n",
)

writeFileSync(
  dist("core.js"),
  [
    `import { z } from "./index.js";`,
    `export { z, default } from "./index.js";`,
    `export * from "./index.js";`,
    `export const { util, globalConfig, JSONSchemaGenerator, clone, visit } = z.core;`,
    `export const { config, parse, safeParse, registry, globalRegistry } = z;`,
    `export const { ZodError: $ZodError, ZodType: $ZodType, ZodNever: $ZodNever, ZodUnknown: $ZodUnknown, ZodAny: $ZodAny, ZodString: $ZodString, ZodNumber: $ZodNumber, ZodBoolean: $ZodBoolean, ZodObject: $ZodObject, ZodOptional: $ZodOptional, ZodArray: $ZodArray, ZodUnion: $ZodUnion, ZodPipe: $ZodPipe, ZodCustom: $ZodCustom } = z;`,
  ].join("\n") + "\n",
)
writeFileSync(dist("mini.js"), `export * from "./index.js";\nexport { z, default } from "./index.js";\n`)
writeFileSync(dist("locales.js"), `import { z } from "./index.js";\nexport default z.locales;\nexport const en = z.locales.en;\n`)
