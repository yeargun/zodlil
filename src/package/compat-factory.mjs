// Source-owned optional locale integration and constructor ABI.
export function completeZod(z, generatorContext, generatorProcess, generatorEmit, createRequire, moduleUrl) {
try {
  const locales = createRequire(moduleUrl)("zod/v4/locales")
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

return z;
}
