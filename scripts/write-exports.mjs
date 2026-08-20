import { copyFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import { applyCompat } from "./compat.mjs"
import { installVisit } from "./visit.mjs"
import { installAsyncApi } from "./async-api.mjs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
copyFileSync(resolve(root, "scripts", "compat.mjs"), resolve(root, "dist", "compat.js"))
copyFileSync(resolve(root, "scripts", "visit.mjs"), resolve(root, "dist", "visit.js"))
copyFileSync(resolve(root, "scripts", "async-api.mjs"), resolve(root, "dist", "async-api.js"))
copyFileSync(resolve(root, "scripts", "official-json-schema.mjs"), resolve(root, "dist", "official-json-schema.js"))
copyFileSync(resolve(root, "scripts", "regexes.mjs"), resolve(root, "dist", "regexes.js"))
const corePath = resolve(root, "dist", "zod.core.js")
const { z } = await import(pathToFileURL(corePath).href)
applyCompat(z)
installVisit(z)
const jsonSchemaMod = await import("./official-json-schema.mjs")
z.toJSONSchema = jsonSchemaMod.toJSONSchema
z.core.toJSONSchema = z.toJSONSchema
z.core.JSONSchemaGenerator = jsonSchemaMod.JSONSchemaGenerator
if (z.ZodType?.prototype) {
  z.ZodType.prototype.toJSONSchema = function toJSONSchemaMethod(params) {
    return z.toJSONSchema(this, params)
  }
}

installAsyncApi(z)

function isIdent(key) {
  return /^[$A-Za-z_][$A-Za-z0-9_]*$/.test(key)
}

const reserved = new Set([
  "null",
  "undefined",
  "void",
  "enum",
  "interface",
  "default",
  "class",
  "function",
  "var",
  "let",
  "const",
  "import",
  "export",
  "await",
  "yield",
  "new",
  "this",
  "super",
  "typeof",
  "instanceof",
  "in",
  "of",
  "if",
  "else",
  "return",
  "switch",
  "case",
  "break",
  "continue",
  "try",
  "catch",
  "finally",
  "throw",
  "with",
  "do",
  "while",
  "for",
  "debugger",
  "extends",
  "static",
  "get",
  "set",
  "async",
])

const keys = Object.keys(z).filter((key) => isIdent(key) && key !== "default" && key !== "z" && key !== "toJSONSchema")
const lines = [
  `import { z } from "./zod.core.js";`,
  `import { applyCompat } from "./compat.js";`,
  `import { installVisit } from "./visit.js";`,
  `import { installAsyncApi } from "./async-api.js";`,
  `import { toJSONSchema, JSONSchemaGenerator } from "./official-json-schema.js";`,
  `import * as regexes from "./regexes.js";`,
  `applyCompat(z);`,
  `installVisit(z);`,
  `installAsyncApi(z);`,
  `z.toJSONSchema = toJSONSchema;`,
  `z.core.toJSONSchema = toJSONSchema;`,
  `z.core.JSONSchemaGenerator = JSONSchemaGenerator;`,
  `z.regexes = regexes;`,
  `z.core.regexes = regexes;`,
  `export { regexes };`,
  `z.compile = z.compile ?? ((schema) => schema);`,
  `if (z.ZodType && z.ZodType.prototype) {`,
  `  z.ZodType.prototype.toJSONSchema = function toJSONSchemaMethod(params) { return toJSONSchema(this, params); };`,
  `}`,
  `export { z };`,
  `export default z;`,
]
for (const key of keys) {
  if (reserved.has(key)) {
    lines.push(`const $${key} = z.${key};`)
    lines.push(`export { $${key} as ${key} };`)
  } else {
    lines.push(`export const ${key} = z.${key};`)
  }
}
lines.push(`export { toJSONSchema };`)
writeFileSync(resolve(root, "dist", "index.js"), `${lines.join("\n")}\n`)

writeFileSync(
  resolve(root, "dist", "core.js"),
  [
    `import { z } from "./index.js";`,
    `export { z, default } from "./index.js";`,
    `export * from "./index.js";`,
    `export const util = z.core.util;`,
    `export const globalConfig = z.core.globalConfig;`,
    `export const $ZodError = z.ZodError;`,
    `export const config = z.config;`,
    `export const parse = z.parse;`,
    `export const JSONSchemaGenerator = z.core.JSONSchemaGenerator;`,
    `export const safeParse = z.safeParse;`,
    `export const clone = z.core.clone;`,
    `export const registry = z.registry;`,
    `export const globalRegistry = z.globalRegistry;`,
    `export const visit = z.core.visit ?? z.visit;`,
    `export const $ZodType = z.ZodType;`,
    `export const $ZodNever = z.ZodNever;`,
    `export const $ZodUnknown = z.ZodUnknown;`,
    `export const $ZodAny = z.ZodAny;`,
    `export const $ZodString = z.ZodString;`,
    `export const $ZodNumber = z.ZodNumber;`,
    `export const $ZodBoolean = z.ZodBoolean;`,
    `export const $ZodObject = z.ZodObject;`,
    `export const $ZodOptional = z.ZodOptional;`,
    `export const $ZodArray = z.ZodArray;`,
    `export const $ZodUnion = z.ZodUnion;`,
    `export const $ZodPipe = z.ZodPipe;`,
    `export const $ZodCustom = z.ZodCustom;`,
  ].join("\n") + "\n",
)
writeFileSync(resolve(root, "dist", "mini.js"), `export * from "./index.js";\nexport { z, default } from "./index.js";\n`)
writeFileSync(
  resolve(root, "dist", "locales.js"),
  `import { z } from "./index.js";\nexport default z.locales;\nexport const en = z.locales.en;\n`,
)
