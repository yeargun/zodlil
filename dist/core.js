import { z } from "./index.js";
export { z, default } from "./index.js";
export * from "./index.js";
export const { util, globalConfig, JSONSchemaGenerator, clone, visit } = z.core;
export const { config, parse, safeParse, registry, globalRegistry } = z;
export const { ZodError: $ZodError, ZodType: $ZodType, ZodNever: $ZodNever, ZodUnknown: $ZodUnknown, ZodAny: $ZodAny, ZodString: $ZodString, ZodNumber: $ZodNumber, ZodBoolean: $ZodBoolean, ZodObject: $ZodObject, ZodOptional: $ZodOptional, ZodArray: $ZodArray, ZodUnion: $ZodUnion, ZodPipe: $ZodPipe, ZodCustom: $ZodCustom } = z;
