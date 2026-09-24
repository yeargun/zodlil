// The hand-written layer over the compiled package (copied to dist/compat.js): what LilScript cannot state — upstream
// locales loaded from zod and the JSONSchemaGenerator class.
import { createRequire } from "node:module"
import { z, generatorContext, generatorProcess, generatorEmit } from "./zod.core.js"

try {
  const locales = createRequire(import.meta.url)("zod/v4/locales")
  z.locales = { ...z.locales, ...(locales.default ?? locales) }
} catch {}

z.core.JSONSchemaGenerator = class JSONSchemaGenerator {
  constructor(params) {
    this.ctx = generatorContext(params)
  }
  process(schema, params) {
    return generatorProcess(schema, this.ctx, params)
  }
  emit(schema, params) {
    return generatorEmit(schema, this.ctx, params)
  }
}

export { z }
