export function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true,
  })
}

export function getEnumValues(entries) {
  if (Array.isArray(entries)) return [...entries]
  const numericValues = Object.values(entries).filter((v) => typeof v === "number")
  return Object.entries(entries)
    .filter(([k]) => numericValues.indexOf(+k) === -1)
    .map(([, v]) => v)
}

export const globalRegistry = {
  get(schema) {
    return globalThis.__zod_globalRegistry?.get(schema)
  },
  has(schema) {
    return globalThis.__zod_globalRegistry?.has(schema) ?? false
  },
  add(schema, meta) {
    return globalThis.__zod_globalRegistry?.add(schema, meta)
  },
  get _idmap() {
    return globalThis.__zod_globalRegistry?._idmap
  },
}
