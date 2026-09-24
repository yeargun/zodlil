var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist/index.js
var index_exports = {};
__export(index_exports, {
  NEVER: () => NEVER,
  TimePrecision: () => TimePrecision,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodCatch: () => ZodCatch,
  ZodCodec: () => ZodCodec,
  ZodCustom: () => ZodCustom,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodExactOptional: () => ZodExactOptional,
  ZodFile: () => ZodFile,
  ZodFunction: () => ZodFunction,
  ZodISODate: () => ZodISODate,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODuration: () => ZodISODuration,
  ZodISOTime: () => ZodISOTime,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNever: () => ZodNever,
  ZodNonOptional: () => ZodNonOptional,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodPipe: () => ZodPipe,
  ZodPrefault: () => ZodPrefault,
  ZodPreprocess: () => ZodPreprocess,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRealError: () => ZodRealError,
  ZodRecord: () => ZodRecord,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSuccess: () => ZodSuccess,
  ZodSymbol: () => ZodSymbol,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodTransform: () => ZodTransform,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  ZodXor: () => ZodXor,
  _default: () => _default,
  any: () => any,
  array: () => array,
  base64: () => base64,
  base64url: () => base64url,
  bigint: () => bigint,
  boolean: () => boolean,
  catch: () => $catch,
  check: () => check,
  cidrv4: () => cidrv4,
  cidrv6: () => cidrv6,
  codec: () => codec,
  coerce: () => coerce,
  compile: () => compile,
  config: () => config,
  core: () => core,
  creditCard: () => creditCard,
  cuid: () => cuid,
  cuid2: () => cuid2,
  custom: () => custom,
  date: () => date,
  decode: () => decode,
  decodeAsync: () => decodeAsync,
  deepPartial: () => deepPartial,
  default: () => vj,
  describe: () => describe,
  discriminatedUnion: () => discriminatedUnion,
  e164: () => e164,
  email: () => email,
  emoji: () => emoji,
  encode: () => encode,
  encodeAsync: () => encodeAsync,
  enum: () => $enum,
  exactOptional: () => exactOptional,
  file: () => file,
  flattenError: () => flattenError,
  float32: () => float32,
  float64: () => float64,
  formatError: () => formatError,
  fromJSONSchema: () => fromJSONSchema,
  function: () => $function,
  getDiscriminatedOption: () => getDiscriminatedOption,
  globalRegistry: () => globalRegistry,
  guid: () => guid,
  hash: () => hash,
  hex: () => hex,
  hostname: () => hostname,
  httpUrl: () => httpUrl,
  instanceof: () => $instanceof,
  int: () => int,
  int32: () => int32,
  int64: () => int64,
  intersection: () => intersection,
  invertCodec: () => invertCodec,
  ipv4: () => ipv4,
  ipv6: () => ipv6,
  iso: () => iso,
  json: () => json,
  jwt: () => jwt,
  keyof: () => keyof,
  ksuid: () => ksuid,
  lazy: () => lazy,
  literal: () => literal,
  locales: () => locales,
  looseObject: () => looseObject,
  looseRecord: () => looseRecord,
  mac: () => mac,
  map: () => map,
  maxLength: () => maxLength,
  meta: () => meta,
  minLength: () => minLength,
  nan: () => nan,
  nanoid: () => nanoid,
  nativeEnum: () => nativeEnum,
  never: () => never,
  nonoptional: () => nonoptional,
  null: () => $null,
  nullable: () => nullable,
  number: () => number,
  object: () => object,
  optional: () => optional,
  parse: () => parse,
  parseAsync: () => parseAsync,
  partialRecord: () => partialRecord,
  pipe: () => pipe,
  prefault: () => prefault,
  preprocess: () => preprocess,
  prettifyError: () => prettifyError,
  promise: () => promise,
  properties: () => properties,
  property: () => property,
  readonly: () => readonly,
  record: () => record,
  refine: () => refine,
  regexes: () => regexes,
  registry: () => registry,
  safeDecode: () => safeDecode,
  safeDecodeAsync: () => safeDecodeAsync,
  safeEncode: () => safeEncode,
  safeEncodeAsync: () => safeEncodeAsync,
  safeParse: () => safeParse,
  safeParseAsync: () => safeParseAsync,
  set: () => set,
  setErrorMap: () => setErrorMap,
  slugify: () => slugify,
  strictObject: () => strictObject,
  string: () => string,
  stringFormat: () => stringFormat,
  stringbool: () => stringbool,
  success: () => success,
  superRefine: () => superRefine,
  symbol: () => symbol,
  templateLiteral: () => templateLiteral,
  toJSONSchema: () => toJSONSchema,
  transform: () => transform,
  treeifyError: () => treeifyError,
  trim: () => trim,
  tuple: () => tuple,
  uint32: () => uint32,
  uint64: () => uint64,
  ulid: () => ulid,
  undefined: () => $undefined,
  union: () => union,
  unknown: () => unknown,
  url: () => url,
  util: () => util,
  uuid: () => uuid,
  uuidv4: () => uuidv4,
  uuidv6: () => uuidv6,
  uuidv7: () => uuidv7,
  visit: () => visit,
  void: () => $void,
  xid: () => xid,
  xor: () => xor,
  z: () => vj
});
module.exports = __toCommonJS(index_exports);

// dist/compat.js
var import_node_module = require("node:module");

// dist/zod.core.js
var j = (a) => a != null && typeof a == "object";
var E = (a, b) => a.push(b);
var F = (a) => Ca.keys(a);
var H = (a, b) => Ca.assign(a, b);
var I = (a, b) => {
  let c = Ca.getOwnPropertyDescriptors(b);
  return Ca.defineProperties(a, c);
};
var J = (a, b) => {
  if (!j(b)) return a;
  return I(a, b);
};
var L = (a) => Ca.create(a);
var M = (a, b, c) => Ca.defineProperty(a, b, c);
var N = (a, b) => !!Reflect.deleteProperty(a, b);
var O = (a) => Ca.getPrototypeOf(a);
var P = (a, b) => Ca.setPrototypeOf(a, b);
var Q = (a, b) => !!Da.call(a, b);
var R = (a, b) => !!Ca.prototype.propertyIsEnumerable.call(a, b);
var S = (a, b, c) => M(a, b, { value: c, writable: true, enumerable: true, configurable: true });
var U = (a, b) => {
  let c = Error.captureStackTrace;
  if (typeof c == "function") c(a, b);
};
var W = (a, b) => Ca.getOwnPropertyDescriptor(a, b);
var $ = (a) => BigInt(a);
var ba = (a, b) => !!a.test(b);
var fa = (a) => j(a) && typeof a.then == "function";
var ta = (a, b) => a.has(b);
var ua = (a, b) => a.add(b);
var va = (a, b) => a.delete(b);
var wa = (a, b) => a.get(b);
var xa = (a, b, c) => a.set(b, c);
var ya = (a, b) => !!a.has(b);
function Ik(a) {
  return function() {
    return a(this, arguments);
  };
}
var za = (a, b, c, d, e) => Ik((f, g) => {
  try {
    let h = Array.from(g);
    if (c) h = a(c, h);
    let i = Promise.resolve(h).then((a2) => b(e, f, a2));
    if (d) i = i.then((b2) => a(d, b2));
    return i;
  } catch (a2) {
    return Promise.reject(a2);
  }
});
var Aa = (a, b) => {
  if (b == null) return false;
  return Ea.call(a.prototype, b) === true;
};
var Ba = (a) => Aa(Date, a);
var Ga = (a, b, c, d) => {
  let e = "object", f;
  if (d == 2) e = "array";
  f = (g, h) => {
    let i = g.value, k = g.issues, l = k.length;
    if (d == 0 || Array.isArray(i) == (d == 2) && (d == 2 || j(i))) {
      let e2 = a;
      if (c._zod.run === f) e2 = b;
      let i2 = e2(g, h);
      if (d == 0 && k.length > l) k[l].inst = c;
      return i2;
    }
    let m = Db(e, i);
    m.inst = c;
    E(k, m);
    return g;
  };
  return f;
};
var Ja = (a) => {
  let b = a.check + "";
  return b.endsWith("length") || b.endsWith("than") || b == "number_format" || b == "string_format" && a.format + "" == "email" && !!a.pattern;
};
var Ka = (a) => {
  let b = [], c = a._zod.def;
  if (typeof c.check == "string") E(b, a);
  if (Array.isArray(c.checks)) b = b.concat(c.checks);
  return b;
};
var La = (a, b, c) => {
  let d = b.issues;
  a.forEach((a2) => {
    let e = a2._zod.def.when, f = typeof e == "function", g = !d.some((a3) => a3.continue === false || !f && a3.continue !== true);
    if (g && f) g = !!e(b);
    if (g) {
      let e2 = d.length;
      a2._zod.check(b);
      d.slice(e2).forEach((a3) => {
        if (a3.schema === void 0) a3.schema = c;
      });
    }
  });
  return b;
};
var Ma = (a, b, c, d, e) => {
  if (b.length == 0) return a;
  if (!b.every((a2) => Ja(a2._zod.def))) return c;
  return (d2, f) => {
    if (f != null) {
      if (f.direction === "backward") return c(d2, f);
      if (f.skipChecks === true) return a(d2, f);
    }
    let g = a(d2, f);
    if (fa(g)) return g.then((a2) => La(b, a2, e));
    return La(b, g, e);
  };
};
var Qa = (a) => {
  let b = a._zod, c = b.def;
  if (typeof b.check == "function" || !Ja(c)) return;
  let d = c.check + "";
  if (d == "number_format") b.check = ((a2, b2) => {
    let c2 = a2.format + "";
    if (c2 == "int") c2 = "safeint";
    let d2 = c2.includes("int"), e = 1 / 0;
    if (c2 == "int32") e = 2147483647;
    if (c2 == "uint32") e = 4294967295;
    if (c2 == "float32") e = 34028234663852886e22;
    let f = -e;
    if (c2 == "int32") f = -e - 1;
    if (c2 == "uint32") f = 0;
    return (g) => {
      let h = g.value, i = g.issues, j2 = !a2.abort;
      if (d2) {
        if (!Number.isInteger(h)) {
          E(i, { expected: "int", format: c2, code: "invalid_type", continue: false, input: h, inst: b2 });
          return;
        }
        if (!Number.isSafeInteger(h)) {
          let a3 = { input: h, code: "too_small", minimum: -9007199254740991 };
          if (+h > 0) a3 = { input: h, code: "too_big", maximum: 9007199254740991 };
          a3.note = "Integers must be within the safe integer range.";
          a3.inst = b2;
          a3.origin = "int";
          a3.inclusive = true;
          a3.continue = j2;
          E(i, a3);
          return;
        }
      }
      let k = +h;
      if (k < f || k > e) {
        let a3 = { origin: "number", input: h, code: "too_small", minimum: f };
        if (k > e) a3 = { origin: "number", input: h, code: "too_big", maximum: e };
        a3.inclusive = true;
        a3.inst = b2;
        a3.continue = j2;
        E(i, a3);
      }
    };
  })(c, a);
  else if (d == "string_format") b.check = /* @__PURE__ */ ((a2, b2) => (c2) => {
    let d2 = a2.pattern;
    d2.lastIndex = 0;
    if (d2.test(c2.value)) return;
    E(c2.issues, { origin: "string", code: "invalid_format", format: a2.format, input: c2.value, pattern: d2 + "", inst: b2, continue: !a2.abort });
  })(c, a);
  else b.check = ((a2, b2, c2, d2) => {
    let e = "minimum", f = "too_small";
    if (c2) {
      e = "maximum";
      f = "too_big";
    }
    return (g) => {
      let h = g.value, i = h, k = a2.value, l = a2.inclusive !== false, m = typeof h, n = m;
      if (m == "object") n = "date";
      else if (m != "number" && m != "bigint") n = a2.origin + "";
      if (d2) {
        i = h.length;
        if (typeof h == "string") i = Array.from(h).length;
        k = a2[e];
        l = true;
        n = "unknown";
        if (Array.isArray(h)) n = "array";
        if (typeof h == "string") n = "string";
      }
      let o = i, p = k;
      if (c2) {
        o = k;
        p = i;
      }
      if (l && o >= p || !l && o > p) return;
      let q = { origin: n, code: f };
      q[e] = k;
      if (j(k) && typeof k.getTime == "function") q[e] = k.getTime();
      q.inclusive = l;
      q.input = h;
      q.inst = b2;
      q.continue = !a2.abort;
      E(g.issues, q);
    };
  })(c, a, d.startsWith("max") || d.startsWith("less"), d.endsWith("length"));
};
var $f = (a, b) => {
  let d = "";
  b.forEach((a2) => {
    if (a2 == null || typeof a2 == "string" || typeof a2 == "number" || typeof a2 == "boolean" || typeof a2 == "bigint") d = d + Ya(a2 + "");
    else if (j(a2) && j(a2._zod)) {
      let b2 = a2._zod.pattern;
      if (b2 == null) throw new Error("Invalid template literal part, no pattern found: " + Array.from(a2._zod.traits)[0]);
      let c = b2.source + "";
      if (c.length == 0) throw new Error("Invalid template literal part");
      d = d + Za(c);
    } else throw new Error("Invalid template literal part: " + a2);
  });
  return new RegExp("^" + d + "$");
};
var Ya = (a) => a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var Za = (a) => {
  let b = 0, c = a.length;
  if (a.startsWith("^")) b = 1;
  if (a.endsWith("$")) c = c - 1 | 0;
  return a.slice(b, c);
};
var _a = (a, b) => !!Number[a](b);
var ab = (a, b, c) => {
  M(a, b, { configurable: true, value: c });
};
function Jk(a) {
  return function() {
    return a(this);
  };
}
function Kk(a) {
  return function(b) {
    return a(this, b);
  };
}
var cb = (a, b, c) => {
  let d = O(a);
  if (b in d && df !== a) {
    df = void 0;
    return;
  }
  df = a;
  M(d, b, { configurable: true, get: Jk((a2) => {
    M(a2, b, ff);
    let d2 = ef;
    ef = false;
    try {
      let e = c(a2);
      if (ef) delete a2[b];
      else M(a2, b, { configurable: true, writable: true, value: e });
      if (d2) ef = true;
      return e;
    } catch (c2) {
      delete a2[b];
      if (d2) ef = true;
      throw c2;
    }
  }), set: Kk((a2, c2) => {
    M(a2, b, { configurable: true, writable: true, value: c2 });
  }) });
};
var db = (a, b) => {
  let c = a.innerType;
  if (b != "") c = a.def[b];
  if (j(c) && j(c._zod)) return c._zod;
};
var eb = (a, b, c) => {
  cb(a, b, (a2) => {
    let d = db(a2, c);
    if (d === void 0) return;
    return d[b];
  });
};
var gb = (a) => a.kind >= Ee && a.kind <= Je;
var hb = (a, b) => {
  if (!j(a)) return false;
  if (j(a._zod)) {
    let c = pb(a);
    if (c) return ib(c, b);
    return false;
  }
  if (!Array.isArray(a)) return false;
  return a.some((a2) => hb(a2, b));
};
var ib = (a, b) => {
  let c = a.handle, d = wa(gf, c);
  if (d != null) return d === true;
  if (ta(b, c)) return true;
  ua(b, c);
  let e = false, f = a.def;
  if (a.kind == Se) e = hb(c._zod.innerType, b);
  else {
    let a2 = f.shape;
    if (j(a2)) {
      for (let c2 in a2) if (!e) e = hb(a2[c2], b);
    }
    for (let a3 in f) if (!e) e = hb(f[a3], b);
  }
  va(b, c);
  xa(gf, c, e);
  return e;
};
var jb = (a) => a.map((a2) => {
  let b = H({}, a2);
  if (Array.isArray(b.path)) b.path = b.path.slice();
  return b;
});
var kb = (a, b) => {
  b.forEach((b2) => E(a, b2));
};
var mb = (a, b, c) => {
  let d = a.handle._zod.memoizer;
  if (d == null || d.handoff == null) return c;
  let e = { value: c, issues: null };
  xa(d.handoff, b.value, e);
  d.handoff = void 0;
  E(d.open, e);
  return c;
};
var ob = (a) => cf[a._zod.id | 0];
var pb = (a) => {
  if (!j(a) || a._zod == null || typeof a._zod.id != "number") return null;
  return cf[a._zod.id | 0];
};
var rb = (a) => {
  if (typeof a == "bigint") return a + "n";
  if (typeof a == "string") return '"' + a + '"';
  return a + "";
};
var sb = (a, b) => a.map((a2) => rb(a2)).join(b);
var ub = (a) => {
  if (a == "nan") return "NaN";
  return a;
};
var vb = (a) => {
  let b = a.code + "";
  if (b == "invalid_type") return "Invalid input: expected " + ub(a.expected + "") + ", received " + ub(((a2) => {
    let b2 = typeof a2;
    if (b2 == "number") {
      if (_a("isFinite", a2)) return "number";
      if (_a("isNaN", a2)) return "nan";
      return a2 + "";
    }
    if (b2 == "object") {
      if (a2 == null) return "null";
      if (Array.isArray(a2)) return "array";
      if (O(a2) !== Ca.prototype && typeof a2.constructor == "function") {
        let b3 = a2.constructor.name + "";
        if (b3.length > 0) return b3;
      }
      return "object";
    }
    return b2;
  })(a.input));
  if (b == "invalid_value") {
    let b2 = a.values;
    if (!Array.isArray(b2)) return "Invalid input";
    if (b2.length == 1) return "Invalid input: expected " + rb(b2[0]);
    return "Invalid option: expected one of " + sb(b2, "|");
  }
  if (b == "too_big" || b == "too_small") return ((a2, b2) => {
    let c = "<";
    if (!b2) c = ">";
    if (a2.exact) c = "exactly ";
    else if (a2.inclusive !== false) c = c + "=";
    let d = a2.origin, e = of[d];
    if (d === void 0) d = "value";
    let f = "Too small: expected ";
    if (b2) f = "Too big: expected ";
    let g = a2.minimum + "";
    if (b2) g = a2.maximum + "";
    if (typeof e == "string") return f + d + " to have " + c + g + " " + e;
    return f + d + " to be " + c + g;
  })(a, b == "too_big");
  if (b == "invalid_format") {
    let b2 = a.format + "";
    if (b2 == "starts_with") return 'Invalid string: must start with "' + a.prefix + '"';
    if (b2 == "ends_with") return 'Invalid string: must end with "' + a.suffix + '"';
    if (b2 == "includes") return 'Invalid string: must include "' + a.includes + '"';
    if (b2 == "regex") return "Invalid string: must match pattern " + a.pattern;
    let c = pf[b2];
    if (typeof c != "string") c = b2;
    return "Invalid " + c;
  }
  if (b == "not_multiple_of") return "Invalid number: must be a multiple of " + a.divisor;
  if (b == "unrecognized_keys") {
    let b2 = "";
    if (a.keys.length > 1) b2 = "s";
    return "Unrecognized key" + b2 + ": " + sb(a.keys, ", ");
  }
  if (b == "invalid_key") return "Invalid key in " + a.origin;
  if (b == "invalid_element") return "Invalid value in " + a.origin;
  if (b == "invalid_union") {
    let b2 = a.options;
    if (Array.isArray(b2) && b2.length > 0) return "Invalid discriminator value. Expected " + b2.map((a2) => "'" + a2 + "'").join(" | ");
    if (a.inclusive === false) return "Invalid input: more than one option matched";
  }
  if (b == "custom" && typeof a.message == "string") return a.message + "";
  return "Invalid input";
};
var xb = (a) => {
  if (!j(a) || a._zod == null) return;
  return a._zod.def.error;
};
var yb = (a, b, c) => {
  if (c && typeof a == "string") return a;
  if (typeof a == "function") return ((a2) => {
    if (typeof a2 == "string") return a2;
    if (j(a2) && typeof a2.message == "string") return a2.message;
  })(a(b));
};
var Bb = (a, b, c) => a.map((a2) => ((a3, b2, c2) => {
  if (a3.inst === void 0 && b2) a3.inst = b2.handle;
  let d = a3.inst;
  if (j(d) && d._zod != null) {
    let b3 = d._zod.traits;
    if (b3 != null && ta(b3, "$ZodType")) {
      if (!ta(b3, "$ZodCheck") || a3.schema === void 0) a3.schema = d;
    }
  }
  let e = ((a4, b3, c3) => {
    if (typeof a4.message == "string" && (a4.message + "").length > 0) return a4.message + "";
    let d2 = yb(xb(a4.inst), a4, true);
    if (d2 === void 0 && a4.schema !== a4.inst) d2 = yb(xb(a4.schema), a4, true);
    if (d2 === void 0 && c3 !== void 0) d2 = yb(c3.error, a4, false);
    if (d2 === void 0) d2 = yb(lf, a4, false);
    if (d2 === void 0) d2 = yb(kf, a4, false);
    if (d2 === void 0) return vb(a4);
    return d2 + "";
  })(a3, b2, c2), f = H({}, a3);
  delete f.inst;
  delete f.schema;
  delete f.continue;
  delete f.input;
  if (f.path == null) f.path = [];
  f.message = e;
  if (c2 != null && c2.reportInput) f.input = a3.input;
  return f;
})(a2, b, c));
var Db = (a, b) => {
  let c = { expected: a, code: "invalid_type", input: b };
  if (a == "number" && typeof b == "number" && !_a("isFinite", b)) c.received = b + "";
  if (a == "date" && Ba(b) && _a("isNaN", b.getTime())) c.received = "Invalid Date";
  return c;
};
var Gb = (a, b) => {
  E(a.issues, b);
};
var Hb = (a, b, c, d, e, f, g) => {
  Gb(a, ((a2, b2, c2, d2, e2, f2) => {
    if (Ba(c2)) c2 = c2.getTime();
    let g2 = { origin: b2, code: "too_small" };
    if (a2) {
      g2.code = "too_big";
      g2.maximum = c2;
    } else g2.minimum = c2;
    g2.inclusive = d2;
    g2.input = f2;
    if (e2) g2.exact = true;
    g2.continue = true;
    return g2;
  })(b, c, d, e, f, g));
};
var Ib = (a) => JSON.stringify(a, (a2, b) => {
  if (typeof b == "bigint") return b + "";
  return b;
}, 2);
var Jb = (a, b) => {
  let c = b || [], d = /* @__PURE__ */ new Set();
  ua(d, "$ZodError");
  ua(d, "ZodError");
  a.name = "ZodError";
  M(a, "issues", { enumerable: false, writable: true, configurable: true, value: c });
  M(a, "_zod", { enumerable: false, writable: true, configurable: true, value: { def: c, traits: d } });
  M(a, "message", { enumerable: true, configurable: true, get: Jk((a2) => {
    let b2 = a2._zod;
    if (b2.message === void 0) b2.message = Ib(b2.def);
    return b2.message;
  }), set: Kk((a2, b2) => {
    a2._zod.message = b2;
  }) });
  return a;
};
var Kb = (a) => j(a) && a._zod != null && !!ta(a._zod.traits, "ZodError");
var Lb = () => {
  let a = qf.prototype;
  P(a, Error.prototype);
  ab(qf, "name", "ZodError");
  ab(qf, "init", (a2, b2) => Jb(a2, b2));
  P(rf.prototype, a);
  ab(rf, "name", "ZodError");
  ab(rf, "init", qf.init);
  let b = Symbol.hasInstance;
  ab(qf, b, (a2) => Kb(a2));
  ab(rf, b, (a2) => Aa(Error, a2) || Kb(a2));
  M(a, "toString", { configurable: true, get: Jk((a2) => {
    let b2 = () => a2.message;
    M(a2, "toString", { configurable: true, writable: true, value: b2 });
    return b2;
  }), set: Kk((a2, b2) => {
    M(a2, "toString", { configurable: true, writable: true, value: b2 });
  }) });
  Td(a, "format", (a2) => (b2) => Rb(a2, b2), false);
  Td(a, "flatten", (a2) => (b2) => Pb(a2, b2), false);
  Td(a, "addIssue", (a2) => (b2) => {
    E(a2.issues, b2);
    a2._zod.message = Ib(a2.issues);
  }, false);
  Td(a, "addIssues", (a2) => (b2) => {
    kb(a2.issues, b2);
    a2._zod.message = Ib(a2.issues);
  }, false);
  M(a, "isEmpty", { configurable: true, get: Jk((a2) => a2.issues.length == 0) });
};
var Nb = (a, b) => {
  if (typeof a == "function") return a(b);
  return b.message;
};
var Ob = (a, b, c) => {
  if (!Q(a, b)) S(a, b, c());
  return a[b];
};
var Pb = function(a, b) {
  let c = {}, d = [];
  a.issues.forEach((a2) => {
    let e = a2.path, f = d;
    if (Array.isArray(e) && e.length > 0) f = Ob(c, e[0], () => []);
    E(f, Nb(b, a2));
  });
  return { formErrors: d, fieldErrors: c };
};
var Qb = (a, b, c) => {
  a.forEach((a2) => {
    let d = a2.code + "", e = b.concat(a2.path);
    if (d == "invalid_union" && Array.isArray(a2.errors) && a2.errors.length > 0) a2.errors.forEach((a3) => Qb(a3, e, c));
    else if (d == "invalid_key" || d == "invalid_element") Qb(a2.issues, e, c);
    else c(e, a2);
  });
};
var Rb = function(a, b) {
  let c = { _errors: [] };
  Qb(a.issues, [], (a2, d) => {
    let e = c, g = a2.length, h = 0;
    a2.forEach((a3) => {
      h = h + 1 | 0;
      if (a3 !== "_errors") e = Ob(e, a3, () => ({ _errors: [] }));
      if (h == g) E(e._errors, Nb(b, d));
    });
    if (g == 0) E(c._errors, Nb(b, d));
  });
  return c;
};
var Sb = function(a, b) {
  let c = { errors: [] };
  Qb(a.issues, [], (a2, d) => {
    let e = c;
    a2.forEach((a3) => {
      if (typeof a3 == "string") {
        if (e.properties == null) e.properties = {};
        e = Ob(e.properties, a3, () => ({ errors: [] }));
      } else {
        if (e.items == null) e.items = [];
        let b2 = e.items;
        if (b2[a3] == null) b2[a3] = { errors: [] };
        e = b2[a3];
      }
    });
    E(e.errors, Nb(b, d));
  });
  return c;
};
var Tb = function(a) {
  if (!Array.isArray(a)) return "";
  let c = [];
  a.forEach((a2) => {
    let b = a2;
    if (j(b) && b.key !== void 0) b = b.key;
    if (typeof b == "number") c.push("[" + b + "]");
    else if (typeof b == "symbol") c.push("[" + JSON.stringify(String(b)) + "]");
    else {
      let a3 = b + "";
      if (ba(/[^\w$]/, a3)) c.push("[" + JSON.stringify(a3) + "]");
      else {
        if (c.length > 0) c.push(".");
        c.push(a3);
      }
    }
  });
  return c.join("");
};
var Ub = (a) => {
  if (Array.isArray(a.path)) return a.path.length;
  return 0;
};
var Vb = function(a) {
  let d, b = (d = a.issues.slice().sort((a2, b2) => Ub(a2) - Ub(b2)), d), c = [];
  b.forEach((a2) => {
    c.push("\u2716 " + a2.message);
    if (Ub(a2) > 0) c.push("  \u2192 at " + Tb(a2.path));
  });
  return c.join("\n");
};
var Wb = () => {
  let a = globalThis;
  if (a.__zod_globalConfig == null) a.__zod_globalConfig = {};
  return a.__zod_globalConfig;
};
var Xb = function(a) {
  let b = Wb();
  if (a != null) {
    H(b, a);
    if ("localeError" in a) kf = a.localeError;
    if ("customError" in a) lf = a.customError;
  }
  return b;
};
var Yb = () => {
  let a = globalThis, b = {}, c = {};
  M(c, "value", { enumerable: true, configurable: true, get: () => {
    if (Wb().jitless) return false;
    try {
      new a.Function("");
      return true;
    } catch {
      return false;
    }
  } });
  b.allowsEval = c;
  let d = a.Uint8Array, e = (b2) => d.from(a.atob(b2), (a2) => a2.charCodeAt(0)), f = (b2) => {
    let c2;
    return a.btoa((c2 = Array.from(b2, (a2) => String.fromCharCode(a2)), c2).join(""));
  };
  b.base64ToUint8Array = e;
  b.uint8ArrayToBase64 = f;
  b.base64urlToUint8Array = (a2) => {
    let b2 = (a2 + "").replace(/-/g, "+").replace(/_/g, "/");
    while (b2.length % 4 != 0) b2 = b2 + "=";
    return e(b2);
  };
  b.uint8ArrayToBase64url = (a2) => (f(a2) + "").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  b.hexToUint8Array = (a2) => {
    let b2 = (a2 + "").replace(/^0x/, "").match(/../g);
    return d.from(b2 || [], (a3) => Number.parseInt(a3, 16));
  };
  b.uint8ArrayToHex = (a2) => Array.from(a2).map((a3) => a3.toString(16).padStart(2, "0") + "").join("");
  return b;
};
var Zb = () => (a) => vb(a);
var $b = () => {
  let a = Wb();
  if (a.localeError === void 0) a.localeError = Zb();
  kf = a.localeError;
  if (typeof a.customError == "function") lf = a.customError;
};
var _b = () => {
  let a = L(tf);
  a._map = /* @__PURE__ */ new WeakMap();
  a._idmap = /* @__PURE__ */ new Map();
  return a;
};
var ac = () => {
  let a = globalThis;
  if (a.__zod_globalRegistry != null) mf = a.__zod_globalRegistry;
  else if (mf === void 0) {
    mf = _b();
    a.__zod_globalRegistry = mf;
  }
  return mf;
};
var bc = function() {
  return _b();
};
var cc = (a) => a != null && a.direction === "backward";
var dc = (a) => {
  if (a !== void 0 && a.async === false) throw new Error(jf);
};
var fc = (a) => {
  let b = a.def.defaultValue;
  if (typeof b == "function") b = b();
  return ((a2) => {
    if (Array.isArray(a2)) return a2.slice();
    if (Aa(Map, a2)) return new Map(a2);
    if (Aa(Set, a2)) return new Set(a2);
    if (j(a2) && !Ba(a2)) {
      let b2 = O(a2);
      if (b2 == null || b2 === Ca.prototype) return H({}, a2);
    }
    return a2;
  })(b);
};
var hc = (a, b) => {
  b.check = a;
  if (b.when === void 0) {
    let c2 = "";
    if (a == "min_length" || a == "max_length" || a == "length_equals") c2 = "length";
    if (a == "min_size" || a == "max_size" || a == "size_equals") c2 = "size";
    if (c2 != "") b.when = (a2) => a2.value != null && a2.value[c2] !== void 0;
  }
  let c = ((a2) => {
    if (a2 == "custom") return "$ZodCheck";
    if (a2 == "lowercase" || a2 == "uppercase") return "$ZodCheckStringFormat";
    return "$ZodCheck" + a2.replace(/(?:^|_)(\w)/g, (a3, b2) => (b2 + "").toUpperCase());
  })(a), d = /* @__PURE__ */ new Set();
  ua(d, "$ZodCheck");
  ua(d, c);
  let e = { def: b }, f = Ik((a2, b2) => e);
  ab(f, "name", c);
  e.constructor = f;
  M(e, "_zod", { enumerable: false, writable: true, configurable: true, value: { def: b, onattach: [], traits: d } });
  Qa(e);
  return e;
};
var ic = function(a, b) {
  let c = { check: "custom" };
  if (j(b)) H(c, b);
  let d = hc("custom", c);
  d._zod.check = a;
  return d;
};
var kc = (a, b) => {
  let c = ob(a), d = c.def;
  if (j(b)) {
    d = {};
    J(d, c.def);
    J(d, b);
  }
  let e = new c.ctor(d);
  if (b === void 0) e._zod.parent = a;
  return e;
};
var mc = (a, b) => {
  let c = ob(a).def.checks, d = [];
  if (Array.isArray(c)) d = c.slice();
  E(d, b);
  return ((a2, b2) => {
    let c2 = kc(a2, b2);
    c2._zod.parent = a2;
    return c2;
  })(a, { checks: d });
};
var nc = (a, b) => pb(a.def[b]);
var oc = (a) => {
  if (j(a)) {
    if (j(a._zod) && a._zod.def !== void 0) return a._zod.def;
    if (a.def !== void 0) return a.def;
  }
  return a;
};
var pc = (a) => {
  let b = a;
  for (let a2 = 0; b.kind == Se && a2 < 64; a2 = a2 + 1 | 0) {
    let a3 = b.handle._zod.innerType;
    if (a3 == null && typeof b.def.getter == "function") a3 = (0, b.def.getter)();
    let c = pb(a3);
    if (!c) return b;
    b = c;
  }
  return b;
};
var qc = (a, b, c) => {
  Gb(a, Db(b, c));
};
var rc = (a, b, c) => {
  Gb(a, { code: "invalid_value", values: b, input: c });
};
var sc = (a, b, c) => {
  let d = {};
  if (!["url", "jwt", "ipv6", "cidrv6", "template_literal"].includes(b)) d.origin = "string";
  d.code = "invalid_format";
  d.format = b;
  if (j(c)) H(d, c);
  if (d.continue === void 0) d.continue = true;
  Gb(a, d);
};
var tc = (a, b, c, d, e) => {
  let f = a.issues;
  for (let a2 = b; a2 < f.length; a2 = a2 + 1 | 0) {
    let b2 = f[a2];
    if (e || b2[c] === void 0) b2[c] = d;
  }
};
var uc = (a, b, c, d) => {
  if (typeof a == "string") return { message: a, code: "custom", input: b, inst: c };
  if (a.fatal) a.continue = false;
  if (a.code === void 0) a.code = "custom";
  if (!("input" in a)) a.input = b;
  if (a.inst === void 0) a.inst = c;
  if (a.continue === void 0 && d !== void 0) a.continue = d;
  return a;
};
var vc = (a, b, c, d, e, f) => {
  if (b.issues.length != f || a) return;
  let g = [];
  if (Array.isArray(e.path)) g = e.path.slice();
  let h = { code: "custom", input: c, inst: d, path: g, continue: !e.abort };
  if (e.params !== void 0) h.params = e.params;
  Gb(b, h);
};
var yc = (a) => {
  if (a == "") return true;
  if (/\s/.test(a) || a.length % 4 != 0) return false;
  try {
    globalThis.atob(a);
    return true;
  } catch {
    return false;
  }
};
var Ac = (a) => {
  if (!/^[0-9a-fA-F:.]+$/.test(a)) return false;
  try {
    new URL("http://[" + a + "]");
    return true;
  } catch {
    return false;
  }
};
var Ec = (a, b, c) => {
  if (j(a) && j(a._zod) && typeof a._zod.check == "function") {
    let d2 = a._zod.check.call(a, b);
    if (fa(d2)) {
      dc(c);
      b.$pending = d2;
    }
    return;
  }
  let d = oc(a), e = d.check + "", f = b.value, g = e == "length_equals";
  if (g || e == "min_size" || e == "max_size" || e == "size_equals") {
    let a2 = 0, c2 = "set";
    if (Array.isArray(f)) {
      a2 = f.length;
      c2 = "array";
    } else if (g) {
      if (typeof f != "string") return;
      a2 = Array.from(f).length;
      c2 = "string";
    } else if (j(f) && f.size !== void 0) {
      a2 = +f.size;
      if (Aa(Map, f)) c2 = "map";
      let b2 = globalThis.File;
      if (b2 !== void 0 && Aa(b2, f)) c2 = "file";
    } else return;
    if (e.startsWith("min")) {
      if (a2 < +d.minimum) Hb(b, false, c2, d.minimum, true, false, f);
    } else if (e.startsWith("max")) {
      if (a2 > +d.maximum) Hb(b, true, c2, d.maximum, true, false, f);
    } else {
      let e2 = d.size;
      if (g) e2 = d.length;
      if (a2 != +e2) Hb(b, a2 > +e2, c2, e2, true, true, f);
    }
    return;
  }
  if (e == "multiple_of") {
    if (typeof f == "bigint") {
      if (f % d.value !== $(0)) Gb(b, { code: "not_multiple_of", divisor: d.value, path: [] });
    } else if (typeof f == "number" && ((a2, b2) => {
      let c2 = a2 / b2, d2 = c2 - Math.round(c2);
      if (Math.abs(d2) < +Number.EPSILON * Math.max(Math.abs(c2), 1)) return 0;
      return d2;
    })(+f, +d.value) != 0) Gb(b, { origin: "number", code: "not_multiple_of", divisor: d.value, input: f });
    return;
  }
  if (e == "includes" || e == "starts_with" || e == "ends_with") {
    if (typeof f != "string") return;
    let a2 = f + "", c2 = "includes";
    if (e == "starts_with") c2 = "prefix";
    if (e == "ends_with") c2 = "suffix";
    let g2 = d[c2] + "", h = a2.endsWith(g2);
    if (e == "starts_with") h = a2.startsWith(g2);
    if (e == "includes") {
      if (typeof d.position == "number") a2 = a2.slice(d.position | 0);
      h = a2.includes(g2);
    }
    if (!h) {
      let a3 = {};
      a3[c2] = d[c2];
      sc(b, e, a3);
    }
    return;
  }
  if (e == "string_format" || e == "lowercase" || e == "uppercase") {
    if (typeof f != "string") return;
    let a2 = f + "", c2 = e;
    if (e == "string_format") c2 = d.format + "";
    if (c2 == "lowercase" || c2 == "uppercase") {
      let d2 = a2.toUpperCase();
      if (c2 == "lowercase") d2 = a2.toLowerCase();
      if (a2 != d2) {
        sc(b, c2);
        return;
      }
    }
    if (c2 == "url") {
      ((a3, b2, c3) => {
        let d2 = (c3 + "").trim(), e2 = a3.protocol, f2;
        if (!a3.normalize && e2 != null && !/^https?:\/\//i.test(d2)) {
          sc(b2, "url");
          return;
        }
        try {
          f2 = new URL(d2);
        } catch {
          sc(b2, "url");
          return;
        }
        let g3 = a3.hostname;
        if (g3 != null) {
          g3.lastIndex = 0;
          if (!ba(g3, f2.hostname + "")) sc(b2, "url", { note: "Invalid hostname", pattern: g3.source });
        }
        if (e2 != null) {
          let a4 = f2.protocol + "";
          if (a4.endsWith(":")) a4 = a4.slice(0, a4.length - 1);
          e2.lastIndex = 0;
          if (!ba(e2, a4)) sc(b2, "url", { note: "Invalid protocol", pattern: e2.source });
        }
        b2.value = d2.replace(/[\t\n\r]/g, "");
        if (a3.normalize) b2.value = f2.href;
      })(d, b, f);
      return;
    }
    if (c2 == "jwt") {
      if (((a3, b2) => {
        let c4 = a3.split(".");
        if (c4.length != 3 || (c4[0] ?? "") == "") return false;
        try {
          let a4 = JSON.parse(globalThis.atob(c4[0] ?? ""));
          if (!j(a4)) return false;
          if (Q(a4, "typ") && a4.typ + "" != "JWT") return false;
          if (a4.alg === void 0) return false;
          return typeof b2 != "string" || a4.alg + "" == b2 + "";
        } catch {
          return false;
        }
      })(a2, d.alg)) return;
      let c3 = { code: "invalid_format", format: "jwt", input: f };
      if (d.alg != null) c3.algorithm = d.alg;
      Gb(b, c3);
      return;
    }
    if (["credit_card", "base64", "base64url", "ipv6", "cidrv6"].includes(c2)) {
      if (!((a3, b2, c3) => {
        if (a3 == "credit_card") return ((a4) => {
          if (!/^\d(?:[ -]?\d){11,18}$/.test(a4)) return false;
          let b3 = a4.replace(/\D/g, ""), c4 = 0, d2 = false;
          for (let a5 = b3.length - 1; a5 >= 0; --a5) {
            let e2 = (b3.charCodeAt(a5) | 0) - 48 | 0;
            if (d2) e2 = e2 * 2 | 0;
            if (e2 > 9) e2 = e2 - 9 | 0;
            c4 = c4 + e2 | 0;
            d2 = !d2;
          }
          return (c4 % 10 | 0) == 0;
        })(b2);
        if (a3 == "base64") return yc(b2);
        if (a3 == "base64url") return ((a4) => {
          if (!/^[A-Za-z0-9_-]*$/.test(a4)) return false;
          let b3 = a4.replace(/-/g, "+").replace(/_/g, "/");
          while (b3.length % 4 != 0) b3 = b3 + "=";
          return yc(b3);
        })(b2);
        if (a3 == "ipv6") return Ac(b2);
        return ((a4) => {
          let b3 = a4.split("/");
          if (b3.length != 2) return false;
          let c4 = b3[1] ?? "", d2 = Number(c4);
          if (c4 == "" || d2 + "" != c4 || +d2 < 0 || +d2 > 128) return false;
          return Ac(b3[0] ?? "");
        })(b2);
      })(c2, a2, d)) sc(b, c2);
      return;
    }
    if (typeof d.fn == "function") {
      let a3 = (0, d.fn)(f), e2 = { code: "invalid_format", format: c2, input: f, continue: !d.abort };
      if (fa(a3)) b.$pending = a3.then((a4) => {
        if (!a4) Gb(b, e2);
        return b;
      });
      else if (!a3) Gb(b, e2);
      return;
    }
    let g2 = d.pattern;
    if (g2 !== void 0) {
      g2.lastIndex = 0;
      if (!ba(g2, a2)) sc(b, c2, { pattern: g2.toString() });
    }
    return;
  }
  if (e == "mime_type") {
    let a2 = d.mime;
    if (!Array.isArray(a2)) return;
    let e2 = f.type + "";
    if (!a2.some((a3) => a3 + "" == e2)) rc(b, a2, f.type);
    return;
  }
  if (e == "property") {
    let a2 = pb(d.schema);
    if (a2) {
      let e2 = d.property, g2 = Qc(a2, f[e2], c);
      if (fa(g2)) b.$pending = g2.then((a3) => {
        Yc(a3.issues, b.issues, e2);
        return b;
      });
      else Yc(g2.issues, b.issues, e2);
    }
    return;
  }
  if (e == "overwrite") {
    if (typeof d.transform == "function") b.value = (0, d.transform)(f);
    return;
  }
  if (e == "custom") {
    let e2;
    if (j(a._zod)) e2 = a._zod.bag;
    if (j(e2) && e2.Class !== void 0) {
      if (!Aa(e2.Class, f)) qc(b, e2.Class.name + "", f);
      return;
    }
    if (typeof d.fn != "function") return;
    let g2 = b.issues, h = { value: f, issues: g2, addIssue: (b2) => {
      E(g2, uc(b2, f, a, !d.abort));
    } }, i = g2.length, k = (0, d.fn)(f, h);
    if (fa(k)) {
      dc(c);
      b.$pending = k.then((c2) => {
        vc(c2, b, f, a, d, i);
        return b;
      });
      return;
    }
    vc(k, b, f, a, d, i);
  }
};
var Fc = (a) => {
  let b = a.$pending;
  if (!fa(b)) return;
  delete a.$pending;
  return b;
};
var Gc = (a, b) => {
  if (a.aborted) return true;
  return a.issues.some((a2) => a2.continue === false || !b && a2.continue !== true);
};
var Hc = (a, b, c, d) => {
  let e = a.def.checks;
  if (!Array.isArray(e)) return b;
  for (let f = d; f < e.length; f = f + 1 | 0) {
    let d2 = e[f], g = oc(d2).when;
    if (typeof g == "function") {
      if (Gc(b, true) || !g(b)) continue;
    } else if (Gc(b, false)) continue;
    let h = b.issues.length;
    Ec(d2, b, c);
    let i = Fc(b), j2 = f + 1 | 0;
    if (fa(i)) return i.then((e2) => {
      tc(b, h, "inst", d2, false);
      tc(b, h, "schema", a.handle, false);
      return Hc(a, b, c, j2);
    });
    tc(b, h, "inst", d2, false);
    tc(b, h, "schema", a.handle, false);
  }
  return b;
};
var Ic = (a, b, c) => {
  if (b.memo) return b;
  let d = a.handle;
  tc(b, 0, "inst", d, false);
  if (typeof a.def.check == "string") {
    let e = b.issues.length;
    Ec(d, b, c);
    tc(b, e, "inst", d, false);
    tc(b, e, "continue", !a.def.abort, true);
    let f = Fc(b);
    if (fa(f)) return f.then((d2) => Hc(a, b, c, 0));
    if (a.def.abort && b.issues.length > e) return b;
  }
  return Hc(a, b, c, 0);
};
var Jc = (a) => {
  let b = a.$waits;
  if (!Array.isArray(b)) return a;
  delete a.$waits;
  if (b.length == 0) return a;
  return Promise.all(b).then((b2) => a);
};
var Kc = (a, b, c) => {
  if (!fa(b)) {
    c(b);
    return;
  }
  if (!Array.isArray(a.$waits)) a.$waits = [];
  E(a.$waits, b.then(c));
};
var Lc = (a, b, c) => {
  if (gb(a)) ((a2, b2) => {
    let c2 = a2.handle._zod.memoizer;
    if (c2 == null) return;
    c2.handoff = void 0;
    let d = c2.open, e = 0;
    if (typeof c2.openDepth == "number") e = +c2.openDepth;
    if (Array.isArray(d) && d.length > e) d.pop().issues = jb(b2.issues);
  })(a, b);
  if (!a.hasChecks) return b;
  return Ic(a, b, c);
};
var Mc = (a, b, c) => {
  let d = Fc(b);
  if (fa(d)) return d.then((d2) => Mc(a, b, c));
  let e = Jc(b);
  if (fa(e)) return e.then((b2) => Lc(a, b2, c));
  return Lc(a, b, c);
};
var Nc = (a, b, c) => {
  if (a.kind == Ve || a.kind == Ue) return Cd(a, b, c);
  Xc(a, b, c);
  let d = Fc(b);
  if (fa(d)) return d.then((a2) => Jc(b));
  return Jc(b);
};
var Oc = (a, b, c, d) => {
  if (Gc(b, false)) {
    b.aborted = true;
    return b;
  }
  let e = Ic(a, c, d);
  if (fa(e)) {
    dc(d);
    return e.then((b2) => Nc(a, b2, d));
  }
  return Nc(a, e, d);
};
var Pc = (a, b, c) => {
  let d = pc(a);
  if (gb(d)) {
    let a2 = ((a3, b2, c2) => {
      let d2 = a3.handle._zod.memoizer;
      if (d2 == null) return;
      if (d2.recursive === void 0) d2.recursive = ib(a3, /* @__PURE__ */ new Set());
      let e2 = b2.value;
      if (!d2.recursive || !j(e2) || !j(c2)) return;
      let f = c2["~memo"];
      if (f == null) {
        f = { buckets: /* @__PURE__ */ new Map(), backEdges: void 0 };
        c2["~memo"] = f;
      }
      let g = d2.bucket;
      if (d2.ctx !== c2) {
        g = wa(f.buckets, a3.handle);
        if (g == null) {
          g = /* @__PURE__ */ new Map();
          xa(f.buckets, a3.handle, g);
        }
        d2.ctx = c2;
        d2.bucket = g;
      }
      let h = wa(g, e2);
      if (h != null) {
        b2.value = h.value;
        let a4 = h.issues;
        if (a4 != null) kb(b2.issues, jb(a4));
        else {
          b2.memo = true;
          if (f.backEdges == null) f.backEdges = /* @__PURE__ */ new Set();
          ua(f.backEdges, h.value);
        }
        return b2;
      }
      d2.handoff = g;
      d2.openDepth = d2.open.length;
    })(d, b, c);
    if (a2 !== void 0) return Ic(d, a2, c);
  }
  if (d.kind == Te) {
    if (c === void 0 || c.async === false) throw new Error(jf);
    return Promise.resolve(b.value).then((a2) => {
      b.value = a2;
      return Sc(nc(d, "innerType"), b, c);
    });
  }
  if (j(c) && c.skipChecks) return Nc(d, b, c);
  if (cc(c) && d.hasChecks) {
    let a2 = H({}, c);
    a2.skipChecks = true;
    let e2 = Nc(d, { value: b.value, issues: [] }, a2);
    if (fa(e2)) {
      dc(c);
      return e2.then((a3) => Oc(d, a3, b, c));
    }
    return Oc(d, e2, b, c);
  }
  let e = b;
  if (d.kind == Ve || d.kind == Ue) e = Cd(d, b, c);
  else Xc(d, b, c);
  if (fa(e)) return e.then((a2) => Mc(d, a2, c));
  return Mc(d, b, c);
};
var Qc = (a, b, c) => a.handle._zod.run({ value: b, issues: [] }, c);
var Rc = (a, b, c) => {
  if (a) return Qc(a, b, c);
  return { value: b, issues: [] };
};
var Sc = (a, b, c) => {
  if (a) return Pc(a, b, c);
  return b;
};
var Tc = (a, b) => {
  if (fa(b)) a.$pending = b;
};
var Uc = (a, b, c) => {
  if (fa(b)) a.$pending = b.then((a2) => {
    c(a2);
    return a2;
  });
  else c(a);
};
var Vc = (a) => {
  a.issues.length = 0;
  a.aborted = false;
};
var Xc = (a, b, c) => {
  let d = pc(a), e = b.value, f = d.kind, g = d.def, h = nc(d, "innerType");
  if (f == ye || f == ze) return;
  if (f <= Be) {
    if (g.coerce && f <= ue && f != te) {
      try {
        let a3;
        if (f == pe) a3 = String(e);
        else if (f == qe) a3 = Number(e);
        else if (f == re) a3 = Boolean(e);
        else if (f == se) a3 = $(e);
        else a3 = new Date(e);
        b.value = a3;
        e = a3;
      } catch {
        if (f == se) {
          qc(b, "bigint", e);
          return;
        }
      }
    }
    let a2 = false;
    if (f == pe) a2 = typeof e == "string";
    if (f == qe) a2 = _a("isFinite", e);
    if (f == re) a2 = typeof e == "boolean";
    if (f == se) a2 = typeof e == "bigint";
    if (f == te) a2 = typeof e == "symbol";
    if (f == ue) a2 = Ba(e) && !_a("isNaN", e.getTime());
    if (f == ve) a2 = _a("isNaN", e);
    if (f == we || f == Be) a2 = e === void 0;
    if (f == xe) a2 = e === null;
    if (!a2) qc(b, ((a3) => bf[a3] ?? "")(f | 0), e);
    return;
  }
  if (f == Ce || f == De) {
    let a2 = d.handle._zod.values;
    if (!ta(a2, e)) rc(b, Array.from(a2), e);
    return;
  }
  let i = cc(c);
  if (f == Ne && e === null) return;
  if (f == Ne || f == Me && (g.exact || e !== void 0) || i && (f == Oe || f == Pe || f == Qe || f == We)) {
    Tc(b, Sc(h, b, c));
    return;
  }
  if (f == Me) {
    if (h && h.handle._zod.optin === "defaulted") Uc(b, Pc(h, b, c), (a2) => {
      if (a2.issues.length > 0) {
        a2.value = void 0;
        Vc(a2);
      }
    });
    return;
  }
  if (f == Oe || f == Pe) {
    if (e === void 0) {
      b.value = fc(d);
      if (f == Pe) Tc(b, Sc(h, b, c));
      return;
    }
    Uc(b, Sc(h, b, c), (a2) => {
      if (f == Oe && a2.value === void 0) a2.value = fc(d);
    });
    return;
  }
  if (f == Qe) {
    if (h) Uc(b, Pc(h, b, c), (a2) => ((a3, b2, c2) => {
      if (a3.issues.length == 0) return;
      let d2 = b2.def.catchValue;
      if (d2 === void 0) d2 = b2.def.defaultValue;
      if (typeof d2 == "function") {
        let e2 = Bb(a3.issues, b2, c2);
        d2 = d2({ value: a3.value, issues: a3.issues, error: { issues: e2 }, input: a3.value });
      }
      a3.value = d2;
      Vc(a3);
    })(a2, d, c));
    return;
  }
  if (f == Re) {
    Uc(b, Sc(h, b, c), (a2) => {
      if (a2.issues.length == 0 && a2.value === void 0) Gb(a2, { code: "invalid_type", expected: "nonoptional", input: a2.value });
    });
    return;
  }
  if (f == We) {
    if (h) Uc(b, Pc(h, b, c), (a2) => {
      if (!a2.memo) a2.value = Ca.freeze(a2.value);
    });
    return;
  }
  if (f == Fe) $c(d, b, c);
  else if (f == Ge) dd(d, b, c);
  else if (f == Ee) fd(d, b, c);
  else if (f == He) jd(d, b, c);
  else if (f == Ke || f == $e) rd(d, b, c);
  else if (f == Le) ud(d, b, c);
  else if (f == Ie) yd(d, b, c);
  else if (f == Je) zd(d, b, c);
  else if (f == _e) Ed(d, b, c);
  else if (f == af) {
    if (typeof e != "string") {
      qc(b, "string", e);
      return;
    }
    let a2 = d.handle._zod.pattern;
    if (a2 != null) {
      a2.lastIndex = 0;
      if (!ba(a2, e + "")) sc(b, "template_literal", { pattern: a2.source });
    }
  } else if (f == Ze) {
    if (h) b.value = Rc(h, e, c).issues.length == 0;
  } else if (f == Ye) {
    let a2 = globalThis.File;
    if (a2 === void 0 || !Aa(a2, e)) qc(b, "file", e);
  }
};
var Yc = (a, b, c) => {
  a.forEach((a2) => {
    ((a3, b2) => {
      if (a3.path == null) a3.path = [];
      a3.path.unshift(b2);
    })(a2, c);
    E(b, a2);
  });
};
var Zc = (a, b, c, d) => {
  Yc(d.issues, a.issues, c);
  b[c] = d.value;
};
var $c = (a, b, c) => {
  let d = b.value;
  if (!Array.isArray(d)) {
    qc(b, "array", d);
    return;
  }
  let e = nc(a, "element"), f = mb(a, b, []);
  for (let a2 = 0; a2 < d.length; a2 = a2 + 1 | 0) {
    let g = a2;
    if (e) {
      let h, i;
      Kc((h = Qc(e, d[a2], c), i = (a3) => Zc(b, f, g, a3), b), h, i);
    } else E(f, d[a2]);
  }
  b.value = f;
};
var _c = (a, b) => {
  let c = a[b];
  if (j(c) && j(c._zod)) return c._zod;
  return {};
};
var ad = (a, b) => {
  for (let c = a.length - 1 | 0; c >= 0; --c) {
    let d = _c(a, c), e = d.optout === "optional";
    if (b) e = d.optin !== void 0;
    if (!e) return c + 1 | 0;
  }
  return 0;
};
var bd = (a, b, c) => {
  if (a) return { code: "too_big", maximum: b, inclusive: true, input: c, origin: "array" };
  return { code: "too_small", minimum: b, inclusive: true, input: c, origin: "array" };
};
var cd = (a, b, c, d, e) => {
  let f = a.value, g = c.length;
  for (let c2 = 0; c2 < b.length; c2 = c2 + 1 | 0) {
    let h = d[c2], i = c2 >= g && c2 >= e;
    if (i && _c(b, c2).optin === "optional") {
      f.length = c2;
      break;
    }
    if (h != null) {
      if (h.issues.length > 0) {
        if (i) {
          f.length = c2;
          break;
        }
        Yc(h.issues, a.issues, c2);
      }
      f[c2] = h.value;
    }
  }
  for (let a2 = f.length - 1 | 0; a2 >= g; a2 = a2 - 1 | 0) {
    if (_c(b, a2).optout !== "optional" || f[a2] !== void 0) break;
    f.length = a2;
  }
};
var dd = (a, b, c) => {
  let d = b.value;
  if (!Array.isArray(d)) {
    qc(b, "tuple", d);
    return;
  }
  let e = a.def.items;
  if (!Array.isArray(e)) e = [];
  let f = d.length, g = e.length, h = ad(e, true), i = ad(e, false), j2 = nc(a, "rest");
  if (!j2) {
    if (f < h) {
      Gb(b, bd(false, h, d));
      return;
    }
    if (f > g) Gb(b, bd(true, g, d));
  }
  let k = mb(a, b, []);
  b.value = k;
  let l = [], m = [];
  for (let a2 = 0; a2 < g; a2 = a2 + 1 | 0) {
    let b2 = a2, f2 = Rc(pb(e[a2]), d[a2], c);
    if (fa(f2)) E(m, f2.then((a3) => {
      l[b2] = a3;
    }));
    else l[b2] = f2;
  }
  if (j2) {
    for (let a2 = g; a2 < f; a2 = a2 + 1 | 0) {
      let e2 = a2, f2 = Rc(j2, d[a2], c);
      if (fa(f2)) E(m, f2.then((a3) => {
        Zc(b, k, e2, a3);
      }));
      else Zc(b, k, e2, f2);
    }
  }
  if (m.length > 0) {
    b.$pending = Promise.all(m).then((a2) => {
      cd(b, e, d, l, i);
      return b;
    });
    return;
  }
  cd(b, e, d, l, i);
};
var fd = (a, b, c) => {
  let d = b.value;
  if (!j(d) || Array.isArray(d)) {
    qc(b, "object", d);
    return;
  }
  let e = a.def.shape || {}, f = mb(a, b, {});
  F(e).forEach((a2) => {
    let g = pb(e[a2]);
    if (g && a2 != "__proto__") {
      let e2 = a2 in d, h2;
      if (e2) h2 = d[a2];
      let i = Qc(g, h2, c), j2 = g.handle._zod, k = j2.optin, l = j2.optout;
      Kc(b, i, (c2) => ((a3, b2, c3, d2, e3, f2, g2) => {
        let h3 = g2.issues.length > 0;
        if (d2 && !h3) {
          b2[c3] = g2.value;
          return;
        }
        let i2 = f2 === "optional";
        if (!d2 && i2 && e3 === "optional") return;
        if (h3) {
          if (e3 !== void 0 && i2 && !d2) return;
          Yc(g2.issues, a3.issues, c3);
        }
        if (!d2 && e3 === void 0) {
          if (!h3) Gb(a3, { expected: "nonoptional", code: "invalid_type", input: void 0, path: [c3] });
          return;
        }
        if (d2 || g2.value !== void 0) b2[c3] = g2.value;
      })(b, f, a2, e2, k, l, c2));
    }
  });
  let h = a.def.catchall;
  if (h != null) {
    let a2 = pb(h), g = [];
    F(d).forEach((h2) => {
      if (!Q(e, h2)) {
        if (a2 && a2.kind == Ae) E(g, h2);
        else if (h2 != "__proto__") if (!a2) f[h2] = d[h2];
        else {
          let e2 = Qc(a2, d[h2], c);
          if (e2.issues.length > 0) Yc(e2.issues, b.issues, h2);
          else f[h2] = e2.value;
        }
      }
    });
    if (g.length > 0) Gb(b, { code: "unrecognized_keys", keys: g, input: d, path: [], continue: true });
  }
  b.value = f;
};
var gd = (a) => {
  if (!j(a) || Array.isArray(a)) return false;
  let b = O(a);
  return b == null || b === Ca.prototype;
};
var id = (a, b, c) => {
  Gb(a, { code: "invalid_key", origin: "record", issues: b, input: c, path: [c] });
};
var jd = (a, b, c) => {
  let d = b.value;
  if (!gd(d)) {
    qc(b, "record", d);
    return;
  }
  let e = mb(a, b, {});
  b.value = e;
  let f = a.def, g = f.mode === "loose", h = nc(a, "keyType"), i = nc(a, "valueType"), j2;
  if (h) {
    let a2 = h.handle._zod.values;
    if (a2 !== void 0) j2 = Array.from(a2);
  }
  let k = [], l = (a2, d2) => {
    let f2 = a2.value;
    if (f2 !== "__proto__") Kc(b, Rc(i, d2, c), (a3) => ((a4, b2, c2, d3) => {
      Yc(d3.issues, a4.issues, c2);
      S(b2, c2, d3.value);
    })(b, e, f2, a3));
  };
  if (j2 !== void 0 && !f.partial) {
    let a2 = /* @__PURE__ */ new Set();
    j2.forEach((e2) => {
      if (typeof e2 == "string" || typeof e2 == "number" || typeof e2 == "symbol") {
        let f2 = e2;
        if (typeof e2 == "number") f2 = e2 + "";
        ua(a2, f2);
        if (f2 !== "__proto__") {
          let a3 = Rc(h, e2, c);
          if (fa(a3)) {
          } else if (a3.issues.length > 0) id(b, Bb(a3.issues, h, c), e2);
          else l(a3, Reflect.get(d, e2));
        }
      }
    });
    F(d).forEach((b2) => {
      if (!ta(a2, b2)) {
        if (!g) E(k, b2);
        else if (b2 != "__proto__") e[b2] = d[b2];
      }
    });
  } else Reflect.ownKeys(d).forEach((a2) => {
    if (a2 !== "__proto__" && R(d, a2)) {
      let f2 = Rc(h, a2, c);
      if (!fa(f2) && f2.issues.length > 0 && typeof a2 == "string") {
        let b2 = Number(a2);
        if (_a("isFinite", b2) && b2 + "" == a2 + "") {
          let a3 = Rc(h, b2, c);
          if (!fa(a3) && a3.issues.length == 0) f2 = a3;
        }
      }
      if (fa(f2) || f2.issues.length > 0) {
        if (g) e[a2] = d[a2];
        else if (j2 !== void 0) E(k, a2);
        else {
          let d2 = [];
          if (!fa(f2)) d2 = Bb(f2.issues, h, c);
          id(b, d2, a2);
        }
      } else l(f2, d[a2]);
    }
  });
  if (k.length > 0) Gb(b, { code: "unrecognized_keys", keys: k, input: d, continue: true });
};
var ld = (a) => {
  if (!j(a) || a._zod === void 0) return;
  return a._zod.propValues;
};
var md = (a) => {
  let b = a.handle._zod.bag;
  if (b.optionsMap !== void 0) return b.optionsMap;
  let c = /* @__PURE__ */ new Map(), d = a.def.discriminator, e = a.def.options;
  for (let a2 = 0; a2 < e.length; ++a2) {
    let b2 = e[a2], f = ld(b2), g;
    if (j(f) && Q(f, d)) g = f[d];
    if (g == null || +g.size == 0) throw new Error('Invalid discriminated union option at index "' + a2 + '"');
    g.forEach((a3) => {
      if (ya(c, a3)) throw new Error('Duplicate discriminator value "' + String(a3) + '"');
      xa(c, a3, b2);
    });
  }
  b.optionsMap = c;
  return c;
};
var nd = function(a, b) {
  return wa(md(ob(a)), b);
};
var od = (a, b) => {
  a.value = b.value;
  kb(a.issues, b.issues);
};
var pd = (a) => a != null && a.issues.length == 0;
var qd = (a, b, c, d) => {
  let f = c.filter((a2) => pd(a2));
  if (f.length > 0) {
    od(b, f[0]);
    return;
  }
  let g = c.filter((a2) => a2 != null && !Gc(a2, false));
  if (g.length == 1) {
    od(b, g[0]);
    return;
  }
  Gb(b, { code: "invalid_union", errors: c.map((b2) => {
    if (b2 == null) return [];
    return Bb(b2.issues, a, d);
  }), path: [] });
};
var rd = (a, b, c) => {
  let d = b.value, e = a.def, f = e.options;
  if (!Array.isArray(f)) f = [];
  let g = e.discriminator, h = f.length;
  if (typeof g == "string" && g + "" != "") {
    if (!j(d) || Array.isArray(d)) {
      qc(b, "object", d);
      return;
    }
    let f2 = md(a), h2 = wa(f2, d[g]);
    if (h2 != null) {
      let a2 = Qc(ob(h2), d, c);
      if (fa(a2)) b.$pending = a2.then((a3) => {
        od(b, a3);
        return b;
      });
      else od(b, a2);
      return;
    }
    if (!e.unionFallback && !cc(c)) {
      Gb(b, { code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: g, options: Array.from(f2.keys()), path: [g] });
      return;
    }
  }
  let i = a.kind == $e, k = [], l = [], m = [];
  for (let a2 = 0; a2 < h; a2 = a2 + 1 | 0) {
    let e2 = a2, g2 = Rc(pb(f[a2]), d, c);
    if (fa(g2)) E(m, g2.then((a3) => {
      k[e2] = a3;
    }));
    else {
      k[e2] = g2;
      if (pd(g2)) {
        if (!i) {
          od(b, g2);
          return;
        }
        E(l, e2);
      }
    }
  }
  if (m.length > 0) {
    b.$pending = Promise.all(m).then((d2) => {
      let f2 = k.filter((a2) => pd(a2));
      if (i && f2.length == 1) od(b, f2[0]);
      else qd(a, b, k, c);
      return b;
    });
    return;
  }
  if (!i) {
    qd(a, b, k, c);
    return;
  }
  let n = l.length;
  if (n == 1) b.value = k[l[0]].value;
  else if (n == 0) {
    let d2 = [];
    for (let b2 = 0; b2 < h; b2 = b2 + 1 | 0) {
      let e2 = pb(f[b2]), g2 = a;
      if (e2) g2 = e2;
      E(d2, Bb(k[b2].issues, g2, c));
    }
    Gb(b, { code: "invalid_union", errors: d2, path: [] });
  } else Gb(b, { code: "invalid_union", errors: [], inclusive: false, matches: l, path: [] });
};
var sd = (a, b, c) => {
  let d = { valid: a };
  d[b] = c;
  return d;
};
var td = (a, b) => {
  if (Fa(a, b) === true || Ba(a) && Ba(b) && a.getTime() === b.getTime()) return sd(true, "data", a);
  if (gd(a) && gd(b)) {
    let c = {};
    [a, b].forEach((a2) => {
      Reflect.ownKeys(a2).forEach((b2) => {
        if (b2 !== "__proto__") S(c, b2, a2[b2]);
      });
    });
    let e = F(b), f = F(a);
    {
      let d = f, g = 0;
      for (; g < d.length; ++g) {
        let f2 = d[g] ?? "";
        if (f2 != "__proto__" && e.includes(f2)) {
          let d2 = td(a[f2], b[f2]);
          if (!d2.valid) return sd(false, "mergeErrorPath", [f2].concat(d2.mergeErrorPath));
          c[f2] = d2.data;
        }
      }
    }
    return sd(true, "data", c);
  }
  if (Array.isArray(a) && Array.isArray(b) && a.length == b.length) {
    let c = [];
    for (let d = 0; d < a.length; d = d + 1 | 0) {
      let e = td(a[d], b[d]);
      if (!e.valid) return sd(false, "mergeErrorPath", [d].concat(e.mergeErrorPath));
      E(c, e.data);
    }
    return sd(true, "data", c);
  }
  return sd(false, "mergeErrorPath", []);
};
var ud = (a, b, c) => {
  let d = nc(a, "left"), e = nc(a, "right");
  if (!d || !e) return;
  let f = Rc(d, b.value, c), g = Rc(e, b.value, c);
  if (fa(f) || fa(g)) {
    b.$pending = Promise.all([f, g]).then((a2) => {
      vd(b, a2[0], a2[1]);
      return b;
    });
    return;
  }
  vd(b, f, g);
};
var vd = (a, b, c) => {
  let d = L(null), e;
  [b, c].forEach((c2) => {
    let f = "r";
    if (c2 === b) f = "l";
    c2.issues.forEach((b2) => {
      let c3 = b2.path, g2 = c3 == null || c3.length == 0, h = [];
      if (b2.code === "unrecognized_keys" && g2) {
        h = b2.keys;
        if (e === void 0) e = b2;
      } else if (b2.code === "invalid_key" && b2.origin === "record" && c3 !== void 0 && c3.length == 1) h = [c3[0]];
      else E(a.issues, b2);
      h.forEach((a2) => {
        let b3 = a2 + "";
        if (d[b3] == null) d[b3] = {};
        d[b3][f] = true;
      });
    });
  });
  if (e !== void 0) {
    let b2 = e.keys, f = F(d).filter((a2) => {
      let c2;
      return !!d[a2].l && !!d[a2].r && b2.some((c2 = (b3) => b3 + "" == a2, c2));
    });
    if (f.length > 0) {
      let b3 = H({}, e);
      b3.keys = f;
      E(a.issues, b3);
    }
  }
  let g = td(b.value, c.value);
  if (g.valid) a.value = g.data;
  else if (!Gc(a, false)) throw new Error("Unmergable intersection. Error path: " + JSON.stringify(g.mergeErrorPath));
};
var wd = (a) => typeof a == "string" || typeof a == "number" || typeof a == "symbol";
var xd = (a, b, c, d, e, f) => {
  if (a.issues.length > 0) if (wd(d)) Yc(a.issues, c.issues, d);
  else Gb(c, { code: "invalid_key", origin: "map", issues: Bb(a.issues, null, f), input: e, path: [] });
  if (b.issues.length > 0) if (wd(d)) Yc(b.issues, c.issues, d);
  else Gb(c, { code: "invalid_element", origin: "map", key: d, issues: Bb(b.issues, null, f), input: e, path: [] });
};
var yd = (a, b, c) => {
  let d = b.value;
  if (!Aa(Map, d)) {
    qc(b, "map", d);
    return;
  }
  let e = mb(a, b, /* @__PURE__ */ new Map()), f = nc(a, "keyType"), g = nc(a, "valueType"), h = [];
  Array.from(d).forEach((a2) => {
    let i = a2[0], j2 = Rc(f, i, c), k = Rc(g, a2[1], c);
    if (fa(j2) || fa(k)) {
      let a3;
      E((a3 = Promise.all([j2, k]).then((a4) => {
        xd(a4[0], a4[1], b, i, d, c);
        xa(e, a4[0].value, a4[1].value);
      }), h), a3);
    } else {
      xd(j2, k, b, i, d, c);
      xa(e, j2.value, k.value);
    }
  });
  b.value = e;
  if (h.length > 0) b.$pending = Promise.all(h).then((a2) => {
    b.value = e;
    return b;
  });
};
var zd = (a, b, c) => {
  let d = b.value;
  if (!Aa(Set, d)) {
    qc(b, "set", d);
    return;
  }
  let e = mb(a, b, /* @__PURE__ */ new Set()), f = nc(a, "valueType");
  Array.from(d.values()).forEach((a2) => {
    if (f) Kc(b, Qc(f, a2, c), (a3) => {
      kb(b.issues, a3.issues);
      ua(e, a3.value);
    });
    else ua(e, a2);
  });
  b.value = e;
};
var Ad = (a, b, c, d) => {
  if (typeof d != "function") return b;
  let e = b.value, g = d(e, { addIssue: (c2) => {
    E(b.issues, uc(c2, b.value, a.handle));
  }, value: e, issues: b.issues });
  if (fa(g)) {
    dc(c);
    return g.then((a2) => {
      b.value = a2;
      return b;
    });
  }
  b.value = g;
  return b;
};
var Bd = (a, b, c, d, e, f) => {
  if (d) {
    if (b.issues.some((a2) => a2.code !== "unrecognized_keys")) {
      b.aborted = true;
      return b;
    }
  }
  let g = Ad(a, b, c, e);
  if (fa(g)) return g.then((a2) => Sc(f, a2, c));
  return Sc(f, b, c);
};
var Cd = (a, b, c) => {
  let d = a.def, e = cc(c);
  if (a.kind == Ue) {
    if (e) throw new sf("ZodTransform");
    if (j(c)) {
      let a2 = c["~memo"];
      if (j(a2) && a2.backEdges != null && ta(a2.backEdges, b.value)) {
        let a3 = new Error("Cannot parse a reference cycle that closes through a transform");
        a3.name = "ZodCyclicError";
        throw a3;
      }
    }
    return Ad(a, b, c, d.transform);
  }
  let f = nc(a, "in"), g = nc(a, "out"), h = d.transform;
  if (e) {
    f = nc(a, "out");
    g = nc(a, "in");
    h = d.reverseTransform;
  }
  if (f) {
    let d2 = Pc(f, b, c);
    if (fa(d2)) return d2.then((b2) => Bd(a, b2, c, true, h, g));
  }
  return Bd(a, b, c, !e || f != null, h, g);
};
var Dd = (a, b, c, d) => {
  if (d) return za((a2, b2) => Rd(a2, b2), (a2, b2, c2) => a2.apply(b2, c2), b, c, a);
  return Ik((d2, e) => Pd(c, a.apply(d2, Pd(b, Array.from(e)))));
};
var Ed = (a, b, c) => {
  let d = b.value;
  if (typeof d != "function") {
    qc(b, "function", d);
    return;
  }
  let e = a.def.output, f = pb(e), g = false;
  if (f) g = f.kind == Te;
  b.value = Dd(d, a.def.input, e, g);
};
var Fd = (a) => {
  if (a.issues.length > 0) return { success: false, error: ((a2) => new rf(a2))(a.issues) };
  return { success: true, data: a.value };
};
var Gd = (a, b, c) => {
  if (b.issues.length == 0) return b;
  $b();
  return { value: b.value, issues: Bb(b.issues, a, c) };
};
var Hd = (a, b, c) => a._zod.run({ value: b, issues: [] }, c);
var Jd = (a, b) => {
  let c = H({}, a);
  c.async = b;
  return c;
};
var Kd = (a, b, c) => {
  let d = Hd(a, b, c);
  if (fa(d)) throw new Error(jf);
  return Gd(ob(a), d, c);
};
var Ld = function(a, b, c) {
  return Fd(Kd(a, b, Jd(c, false)));
};
var Md = (a, b, c) => {
  U(a.error, b || c);
  throw a.error;
};
var Nd = (a, b, c) => {
  $b();
  return Fd({ value: b.value, issues: Bb(b.issues, ob(a), c) });
};
var Od = function(a, b, c, d) {
  let e = Fd(Kd(a, b, Jd(c, false)));
  if (e.success) return e.data;
  return Md(e, d, Od);
};
var Pd = (a, b, c) => Od(a, b, c);
var Qd = function(a, b, c) {
  let d = ((a2, b2, c2) => {
    let d2 = ob(a2), e = Hd(a2, b2, c2);
    if (fa(e)) return e.then((a3) => Gd(d2, a3, c2));
    return Gd(d2, e, c2);
  })(a, b, Jd(c, true));
  if (fa(d)) return d.then((a2) => Fd(a2));
  return Promise.resolve(Fd(d));
};
var Rd = async function(a, b, c, d) {
  let f = await Qd(a, b, c);
  if (f.success) return f.data;
  return Md(f, d, Rd);
};
var Td = (a, b, c, d) => {
  M(a, b, { configurable: true, get: Jk((a2) => {
    let e = c(a2);
    M(a2, b, { configurable: true, writable: true, enumerable: d, value: e });
    return e;
  }), set: Kk((a2, c2) => {
    M(a2, b, { configurable: true, writable: true, enumerable: true, value: c2 });
  }) });
  return a;
};
var Ud = function(a) {
  if (Array.isArray(a)) return a.slice();
  if (!j(a)) return [];
  let b = F(a), d = b.map((b2) => a[b2]).filter((a2) => typeof a2 == "number");
  return b.filter((a2) => d.indexOf(Number(a2)) < 0).map((b2) => a[b2]);
};
var Vd = (a) => wa(hf, a);
var Xd = (a, b, c) => {
  M(a, b, { configurable: true, enumerable: true, get: Jk((a2) => c(a2)) });
};
var Yd = (a, b) => {
  if (b.length > 0) {
    ua(a, b);
    ua(a, "$" + b);
  }
};
var $d = (a, b, c, d) => {
  let e = a[b];
  if (e === void 0 || d && c < e || !d && c > e) a[b] = c;
};
var _d = (a) => {
  if (a.patterns === void 0) a.patterns = /* @__PURE__ */ new Set();
  return a.patterns;
};
var ae = (a, b) => {
  let c = b.check + "";
  if (c == "min_length" || c == "min_size") $d(a, "minimum", b.minimum, false);
  if (c == "max_length" || c == "max_size") $d(a, "maximum", b.maximum, true);
  if (c == "length_equals" || c == "size_equals") {
    let d = "size";
    if (c == "length_equals") d = "length";
    a.minimum = b[d];
    a.maximum = b[d];
    a[d] = b[d];
  }
  if (c == "greater_than" || c == "less_than") {
    let d = c == "less_than", e = "minimum";
    if (d) e = "maximum";
    if (b.inclusive === false) {
      e = "exclusiveMinimum";
      if (d) e = "exclusiveMaximum";
    }
    $d(a, e, b.value, d);
  }
  if (c == "multiple_of" && a.multipleOf === void 0) a.multipleOf = b.value;
  if (c == "number_format") {
    a.format = b.format;
    let c2 = b.format + "", d = uf[c2];
    if (Array.isArray(d)) {
      a.minimum = d[0];
      a.maximum = d[1];
    }
    if (c2.includes("int")) a.pattern = /^-?\d+$/;
  }
  if (c == "string_format" || c == "lowercase" || c == "uppercase") {
    a.format = c;
    if (c == "string_format") a.format = b.format;
    if (b.pattern != null && a.format !== "jwt") ua(_d(a), b.pattern);
    if (a.format === "base64") a.contentEncoding = "base64";
  }
  if (c == "starts_with") ua(_d(a), new RegExp("^" + Ya(b.prefix + "") + ".*"));
  if (c == "ends_with") ua(_d(a), new RegExp(".*" + Ya(b.suffix + "") + "$"));
  if (c == "includes") {
    let c2 = Ya(b.includes + "");
    if (typeof b.position == "number") c2 = "^.{" + b.position + "}" + c2;
    ua(_d(a), new RegExp(c2));
  }
  if (c == "mime_type") a.mime = b.mime;
};
var ce = (a, b, c, d) => {
  $b();
  if (j(a._zod) && a._zod.id !== void 0) return;
  let g = { id: 0, kind: 0, handle: null, def: null, ctor: null, typeName: "", hasChecks: false };
  ((a2, b2) => {
    let c2 = b2.type + "", d2 = ((a3) => {
      if (a3 == "int") return qe;
      let b3 = bf.indexOf(a3);
      if (b3 < 0) return Xe;
      return b3;
    })(c2);
    if (d2 == Ke && typeof b2.discriminator != "string" && b2.inclusive === false) d2 = $e;
    let e = b2.checks;
    a2.id = cf.length;
    a2.kind = d2;
    a2.def = b2;
    a2.typeName = c2;
    if (c2 == "int") a2.typeName = "number";
    a2.hasChecks = typeof b2.check == "string" || Array.isArray(e) && e.length > 0;
    cf.push(a2);
  })(g, b);
  g.ctor = c;
  let f = ((a2, b2) => {
    let c2 = /* @__PURE__ */ new Set();
    Yd(c2, a2);
    let d2 = b2.__parent;
    for (let a3 = 0; d2 != null && a3 < 8; a3 = a3 + 1 | 0) {
      Yd(c2, d2.name + "");
      d2 = d2.__parent;
    }
    Yd(c2, "ZodType");
    return c2;
  })(d, c);
  if (typeof b.check == "string") ua(f, "$ZodCheck");
  fe(a, g, f);
  if (g.kind == Ee) ((a2) => {
    let b2 = W(a2, "shape");
    if (b2 != null && typeof b2.get == "function") return;
    let c2 = a2.shape || {};
    xa(hf, a2, c2);
    M(a2, "shape", { configurable: true, get: () => {
      let b3 = {};
      Reflect.ownKeys(c2).forEach((a3) => S(b3, a3, Reflect.get(c2, a3)));
      M(a2, "shape", { value: b3, writable: true, enumerable: true, configurable: true });
      xa(hf, a2, b3);
      return b3;
    } });
  })(b);
  ((a2, b2) => {
    let c2 = a2._zod.bag;
    if (typeof b2.check == "string") ae(c2, b2);
    if (typeof b2.format == "string" && c2.format === void 0) c2.format = b2.format;
    if (Array.isArray(b2.checks)) b2.checks.forEach((a3) => ae(c2, oc(a3)));
  })(a, b);
  ((a2) => {
    let b2 = a2.kind, c2 = a2.def, d2 = a2.handle._zod;
    if (b2 == Se) {
      let a3 = c2.getter, b3;
      M(d2, "innerType", { configurable: true, get: () => {
        if (b3 === ff) return;
        if (b3 === void 0) {
          b3 = ff;
          let c3 = d2.def;
          if (c3._cachedInner === void 0) c3._cachedInner = a3();
          b3 = c3._cachedInner;
        }
        return b3;
      }, set: (a4) => {
        M(d2, "innerType", { configurable: true, writable: true, value: a4 });
      } });
      eb(d2, "pattern", "");
      eb(d2, "optin", "");
      eb(d2, "optout", "");
      return;
    }
    if (b2 == Me || b2 == Ne || b2 == Qe || b2 == We) {
      if (b2 == Ne || b2 == We) eb(d2, "optin", "innerType");
      else cb(d2, "optin", (a3) => {
        let b3 = db(a3, "innerType");
        if (b3 !== void 0 && b3.optin === "defaulted") return "defaulted";
        return "optional";
      });
      if (b2 == Me) d2.optout = "optional";
      else eb(d2, "optout", "innerType");
      if (b2 == Qe || b2 == We) {
        eb(d2, "values", "innerType");
        return;
      }
      cb(d2, "values", (a3) => {
        let c3 = db(a3, "innerType");
        if (c3 === void 0 || c3.values === void 0) return;
        let d3 = new Set(c3.values);
        if (b2 == Ne) ua(d3, null);
        else if (!a3.def.exact) ua(d3);
        return d3;
      });
      cb(d2, "pattern", (a3) => {
        let c3 = db(a3, "innerType");
        if (c3 === void 0 || c3.pattern == null) return;
        let d3 = ")?$";
        if (b2 == Ne) d3 = "|null)$";
        return new RegExp("^(" + Za(c3.pattern.source + "") + d3);
      });
      return;
    }
    if (b2 == Ke || b2 == $e) {
      cb(d2, "optin", (a3) => {
        let b3 = a3.def.options;
        if (b3.some((a4) => a4._zod.optin === "defaulted")) return "defaulted";
        if (b3.some((a4) => a4._zod.optin !== void 0)) return "optional";
      });
      cb(d2, "optout", (a3) => {
        if (a3.def.options.some((a4) => a4._zod.optout === "optional")) return "optional";
      });
      cb(d2, "values", (a3) => {
        let b3 = a3.def.options;
        if (b3.some((a4) => a4._zod.values === void 0)) return;
        let c3 = /* @__PURE__ */ new Set();
        b3.forEach((a4) => a4._zod.values.forEach((a5) => ua(c3, a5)));
        return c3;
      });
      cb(d2, "pattern", (a3) => {
        let b3 = a3.def.options;
        if (b3.some((a4) => a4._zod.pattern == null)) return;
        return new RegExp("^(" + b3.map((a4) => Za(a4._zod.pattern.source + "")).join("|") + ")$");
      });
      return;
    }
    if (b2 == Ve) {
      eb(d2, "values", "in");
      eb(d2, "optin", "in");
      eb(d2, "optout", "out");
      return;
    }
    if (b2 <= se || b2 == we || b2 == xe || b2 == Ce || b2 == De) cb(d2, "pattern", (a3) => ((a4) => {
      let b3 = a4.kind, c3 = a4.handle._zod, d3 = c3.bag;
      if (b3 == pe) {
        let b4 = Array.from(d3.patterns || []).pop();
        if (b4 !== void 0) return b4;
        if (a4.def.pattern !== void 0) return a4.def.pattern;
        let c4 = "0", e2 = "";
        if (typeof d3.minimum == "number") c4 = d3.minimum + "";
        if (typeof d3.maximum == "number") e2 = d3.maximum + "";
        return new RegExp("^[\\s\\S]{" + c4 + "," + e2 + "}$");
      }
      if (b3 == qe) {
        if (d3.pattern != null) return d3.pattern;
        if (typeof d3.format == "string" && (d3.format + "").includes("int")) return /^-?\d+$/;
        return /^-?\d+(?:\.\d+)?$/;
      }
      if (b3 == re) return /^(?:true|false)$/i;
      if (b3 == se) return /^-?\d+n?$/;
      if (b3 == we || b3 == xe) return new RegExp("^" + a4.typeName + "$");
      let e = Array.from(c3.values), f2 = [];
      e.forEach((a5) => {
        if (b3 == Ce || typeof a5 == "string" || typeof a5 == "number" || typeof a5 == "symbol") f2.push(Ya(String(a5)));
      });
      return new RegExp("^(" + f2.join("|") + ")$");
    })(cf[a3.id | 0]));
    if (b2 == we || b2 == xe || b2 == Ce || b2 == De) {
      let a3 = c2.values;
      if (b2 == we) a3 = [void 0];
      if (b2 == xe) a3 = [null];
      if (b2 == De) a3 = Ud(c2.entries);
      d2.values = new Set(a3);
    }
    if (b2 == Oe || b2 == Pe) d2.optin = "defaulted";
    if (b2 == Ue) d2.optin = "optional";
    if (b2 == Oe || b2 == Pe || b2 == Re) eb(d2, "values", "innerType");
  })(g);
};
var ee = (a, b) => {
  let c = Ik((b2, d2) => {
    if (!j(b2)) b2 = L(c.prototype);
    let e = d2[0];
    if (j(e) && typeof e.type == "string") ce(b2, e, c, a);
    return b2;
  }), d = c.prototype;
  c.__parent = b;
  c._zodProto = {};
  if (b !== void 0) P(d, b.prototype);
  Xd(d, "def", (a2) => a2._zod.def);
  Xd(d, "type", (a2) => a2._zod.def.type);
  ab(c, "name", a);
  ab(c, "init", (b2, d2) => {
    if (j(d2)) ce(b2, d2, c, a);
    return b2;
  });
  ab(c, Symbol.hasInstance, /* @__PURE__ */ ((a2) => (b2) => j(b2) && b2._zod != null && !!ta(b2._zod.traits, a2))(a));
  return c;
};
var fe = (a, b, c) => {
  b.handle = a;
  let d = L(b.ctor._zodProto || {});
  d.id = b.id | 0;
  d.def = b.def;
  d.bag = {};
  d.version = nf;
  d.traits = c;
  d.constr = b.ctor;
  let e = (a2, c2) => Nc(b, a2, c2), f = (a2, c2) => Pc(b, a2, c2);
  d.parse = e;
  d.run = f;
  if (gb(b)) d.memoizer = { open: [] };
  M(d, "propValues", { enumerable: true, configurable: true, get: () => {
    let a2 = ((a3) => {
      let b2 = a3.kind, c2 = a3.def;
      if (b2 == Ve) return ld(c2.in);
      if (b2 == Se) return ld(pc(a3).handle);
      let d2 = {};
      if (b2 == Ee) {
        let a4 = c2.shape;
        if (j(a4)) F(a4).forEach((b3) => {
          let c3 = a4[b3];
          if (j(c3) && j(c3._zod) && c3._zod.values !== void 0) {
            let a5 = c3._zod, e3 = new Set(a5.values);
            if (a5.optin !== void 0) ua(e3);
            S(d2, b3, e3);
          }
        });
        return d2;
      }
      if (b2 != Ke && b2 != $e || !Array.isArray(c2.options)) return;
      let e2 = c2.options;
      for (let a4 = 0; a4 < e2.length; ++a4) {
        let b3 = ld(e2[a4]);
        if (!j(b3) || F(b3).length == 0) throw new Error('Invalid discriminated union option at index "' + a4 + '"');
        F(b3).forEach((a5) => {
          if (!Q(d2, a5)) S(d2, a5, /* @__PURE__ */ new Set());
          let c3 = d2[a5];
          if (b3[a5] != null) b3[a5].forEach((a6) => ua(c3, a6));
        });
      }
      return d2;
    })(b);
    if (a2 !== void 0) M(d, "propValues", { enumerable: true, configurable: true, writable: true, value: a2 });
    return a2;
  } });
  M(a, "_zod", { enumerable: false, writable: true, configurable: true, value: d });
  ge(a, b, d, e, f);
};
var ge = (a, b, c, d, e) => {
  Qa(a);
  let f = b.kind, g = d;
  if (f == Ee) g = Ga(d, e, a, 1);
  else if (f == Fe) g = Ga(d, e, a, 2);
  else if (f <= re) {
    g = Ga(a._zod.parse, a._zod.run, a, 0);
    c.parse = g;
  } else return;
  c["~pf"] = d;
  c["~rf"] = e;
  c.run = Ma(g, Ka(a), e, c, a);
};
var he = (a) => {
  if (typeof a == "string") return { error: () => a };
  if (typeof a == "function") return { error: a };
  if (!j(a)) return {};
  if (a.message !== void 0) {
    if (a.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    a.error = a.message;
  }
  delete a.message;
  let b = a.error;
  if (typeof b != "string") return a;
  let c = H({}, a);
  c.error = () => b;
  return c;
};
var ie = (a) => {
  let b = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  if (typeof a != "number") return b + "(?::[0-5]\\d(?:\\.\\d+)?)?";
  let c = a | 0;
  if (c == -1) return b;
  if (c == 0) return b + ":[0-5]\\d";
  return b + ":[0-5]\\d\\.\\d{" + c + "}";
};
var je = (a, b) => {
  if (j(a)) return a[b];
};
var le = (a) => new RegExp("^" + ie(je(a, "precision")) + "$");
var me = (a) => {
  let b = "Z";
  if (je(a, "offset")) b = "Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)";
  let c = "(?:" + b + ")";
  if (je(a, "local")) c = c + "?";
  return new RegExp("^" + Ff + "T(?:" + ie(je(a, "precision")) + c + ")$");
};
var oe = (a) => {
  ob(a).def.coerce = true;
  let b = a._zod;
  if (b["~pf"] === void 0 || b["~rf"] === void 0) return;
  b.parse = b["~pf"];
  b.run = b["~rf"];
};
var _f = (a, b) => {
  let c = ee(a, b);
  Zg[a] = c;
  return c;
};
var ag = (a) => _f(a, $g);
var dg = (a) => {
  if (a === void 0) return null;
  return a;
};
var eg = (a, b, c) => new a(H(b, he(c)));
var fg = (a, b, c) => eg(a, { type: b }, c);
var hg = (a, b, c) => hc(a, H(b, he(c)));
var ig = (a, b) => (c, d) => {
  let e = {};
  e[b] = c;
  return hg(a, e, d);
};
var jg = (a, b) => (c, d) => hg(a, { value: c, inclusive: b }, d);
var kg = (a, b, c) => mg((d, e) => {
  let f = 0;
  if (c) f = $(0);
  return hg(a, { value: f, inclusive: b }, d);
});
var lg = (a) => hc("overwrite", { transform: a });
var mg = (a) => (b) => ng(b, a);
var ng = (a, b) => (c, d) => mc(a, b(c, d));
var og = (a, b) => mg(ig(a, b));
var pg = (a) => mg((b, c) => lg(a));
var qg = (a, b, c) => {
  let d = { format: a };
  if (b !== void 0) d.pattern = b;
  return hg("string_format", d, c);
};
var rg = (a, b) => mg((c, d) => qg(a, b, c));
var sg = (a) => rg("uuid", new RegExp("^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-" + a + "[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$", ""));
var tg = (a) => {
  let b = ":";
  if (j(a) && typeof a.delimiter == "string") b = a.delimiter;
  let c = b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "";
  return new RegExp("^(?:[0-9A-F]{2}" + c + "){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}" + c + "){5}[0-9a-f]{2}$", "");
};
var ug = (a) => {
  let b = a.prototype;
  return (a2) => {
    for (let c in a2) Td(b, c, a2[c], true);
  };
};
var vg = (a, b, c) => {
  M(a.prototype, b, { configurable: true, get: c });
};
var wg = (a, b, c) => {
  M(a.prototype, b, { configurable: true, enumerable: true, get: Jk((a2) => c(a2)) });
};
var xg = (a, b) => {
  b.split(" ").forEach((b2) => wg(a, b2, (a2) => a2._zod.def[b2]));
};
var zg = (a, b) => {
  if (Ag(a)) throw new Error("." + b + "() cannot be used on object schemas containing refinements");
};
var Ag = (a) => {
  let b = a._zod.def.checks;
  return Array.isArray(b) && b.length > 0;
};
var Cg = (a, b) => {
  M(a, "shape", { configurable: true, enumerable: true, get: Jk((a2) => {
    let c = b();
    S(a2, "shape", c);
    return c;
  }) });
  return a;
};
var Dg = (a, b) => Cg({}, () => J(J({}, a._zod.def.shape ?? {}), b));
var Eg = (a) => {
  let b = {};
  a.forEach((a2) => S(b, a2, a2));
  return b;
};
var Fg = (a, b, c) => {
  let d = { type: "object", shape: a };
  if (a == null) d.shape = {};
  if (c !== void 0) d.catchall = c;
  return eg(oh, d, b);
};
var Hg = (a) => a.map((a2) => {
  if (typeof a2 == "string") return a2.toLowerCase();
  return a2;
});
var Ig = (a, b, c, d) => {
  let e = { type: "string", format: b, check: "string_format" };
  if (c !== void 0) e.pattern = c;
  return eg(a, e, d);
};
var Jg = (a, b) => mc(qi(b), hc("number_format", { format: a }));
var Kg = (a, b, c, d) => {
  if (c) if (d) zg(a, "exactPartial");
  else zg(a, "partial");
  let e = Cg(I({}, a._zod.def), () => {
    let e2 = a._zod.def.shape ?? {};
    if (b != null) ((a2, b2) => {
      for (let c2 in b2) if (!Q(a2, c2)) throw new Error('Unrecognized key: "' + c2 + '"');
    })(e2, b);
    let f = {};
    for (let a2 in e2) {
      let g = e2[a2];
      if (b == null || b[a2]) if (!c) g = new Eh({ type: "nonoptional", innerType: g });
      else if (d) g = cj(g);
      else g = new yh({ type: "optional", innerType: g });
      S(f, a2, g);
    }
    return f;
  });
  if (c) e.checks = [];
  return new oh(e);
};
var Lg = (a, b, c, d) => {
  let e = { type: b, innerType: c };
  M(e, "defaultValue", { configurable: true, enumerable: true, get: () => {
    if (typeof d == "function") return d();
    return d;
  } });
  return new a(e);
};
var Mg = (a, b) => {
  let c = {};
  if (a != null) H(c, a);
  c.direction = b;
  return c;
};
var Ng = (a) => (b) => {
  let c;
  c = (d, e) => Od(b, d, Mg(e, a), c);
  return c;
};
var Og = async function(a, b, c) {
  return await Rd(a, b, c, Og);
};
var Pg = (a) => (b) => (c, d) => Og(b, c, Mg(d, a));
var Qg = (a, b) => (c) => (d, e) => {
  if (b) return Qd(c, d, Mg(e, a));
  return Ld(c, d, Mg(e, a));
};
var Rg = function(a) {
  if (a.success) return { value: a.data };
  return { issues: a.error.issues };
};
var Sg = (a, b) => (c) => {
  let d = {};
  if (c != null) H(d, c);
  d.io = b;
  return a.toJSONSchema(d);
};
var Tg = (a, b) => (c) => (d) => {
  if (typeof d != "function") throw new Error(b + "() must be called with a function");
  let e = c._zod.def;
  return Dd(d, e.input, e.output, a);
};
var Ug = (a, b, c, d) => {
  let e = a._zod.def, f = e.entries, g = {};
  if (!d) I(g, f);
  let h = 0;
  while (h < b.length) {
    let a2 = b[h];
    if (!Q(f, a2)) throw new Error("Key " + a2 + " not found in enum");
    if (d) S(g, a2, f[a2]);
    else N(g, a2);
    h = h + 1 | 0;
  }
  let i = H(I({}, e), he(c));
  i.entries = g;
  i.checks = [];
  return new nh(i);
};
var Vg = (a, b, c, d) => {
  zg(a, d);
  let e = Cg({ checks: [] }, () => {
    let d2 = a._zod.def.shape ?? {}, e2 = {};
    if (!c) J(e2, d2);
    for (let a2 in b) {
      if (!Q(d2, a2)) throw new Error('Unrecognized key: "' + a2 + '"');
      if (b[a2]) if (c) S(e2, a2, d2[a2]);
      else N(e2, a2);
    }
    return e2;
  });
  return kc(a, e);
};
var Wg = (a, b, c, d, e) => {
  let f = a._zod.bag, g = f[b], h = f[c];
  if (g === void 0) g = e;
  if (h === void 0) h = e;
  return Math[d](g, h);
};
var Xg = (a, b) => {
  let c = a._zod.bag[b];
  if (!c) return null;
  return new Date(c);
};
function Lk(a) {
  return function() {
    return a(arguments);
  };
}
var Yg = () => {
  let c, d;
  $b();
  Lb();
  ug($g)((c = { parse: (a2) => {
    let b2;
    b2 = (c2, d2) => Od(a2, c2, d2, b2);
    return b2;
  }, safeParse: (a2) => Ta(a2._zod, (b2, c2) => Nd(a2, b2, c2)), parseAsync: (a2) => (b2, c2) => Og(a2, b2, c2), safeParseAsync: (a2) => (b2, c2) => Qd(a2, b2, c2), spa: (a2) => a2.safeParseAsync, encode: Ng("backward"), decode: Ng("forward"), encodeAsync: Pg("backward"), decodeAsync: Pg("forward"), safeEncode: Qg("backward", false), safeDecode: Qg("forward", false), safeEncodeAsync: Qg("backward", true), safeDecodeAsync: Qg("forward", true), optional: (a2) => () => new yh({ type: "optional", innerType: a2 }), exactOptional: (a2) => () => cj(a2), nullable: (a2) => () => new Ah({ type: "nullable", innerType: a2 }), nullish: (a2) => () => new yh({ type: "optional", innerType: new Ah({ type: "nullable", innerType: a2 }) }), array: (a2) => () => zi(a2), or: (a2) => (b2) => Ci([a2, b2]), and: (a2) => (b2) => new xh({ type: "intersection", left: a2, right: b2 }), default: (a2) => (b2) => Lg(Bh, "default", a2, b2), prefault: (a2) => (b2) => Lg(Ch, "prefault", a2, b2), catch: (a2) => (b2) => {
    let c2 = b2;
    if (typeof b2 != "function") c2 = () => b2;
    return new Dh({ type: "catch", innerType: a2, catchValue: c2 });
  }, nonoptional: (a2) => (b2) => eg(Eh, { type: "nonoptional", innerType: a2 }, b2), transform: (a2) => (b2) => Pi(a2, Oi(b2)), pipe: (a2) => (b2) => Pi(a2, b2), readonly: (a2) => () => new Lh({ type: "readonly", innerType: a2 }), brand: (a2) => () => a2, describe: (a2) => (b2) => {
    let c2 = kc(a2);
    ac().add(c2, { description: b2 });
    return c2;
  }, meta: (a2) => Lk((b2) => {
    if (b2[0] === void 0) return ac().get(a2);
    let c2 = kc(a2);
    ac().add(c2, b2[0]);
    return c2;
  }), refine: mg(Ki), superRefine: mg(Li), overwrite: mg((a2, b2) => lg(a2)), check: (a2) => Lk((b2) => {
    let c2 = a2, d2 = 0;
    while (d2 < b2.length) {
      let a3 = b2[d2];
      if (typeof a3 == "function") c2 = mc(c2, ic(a3));
      else if (j(a3) && a3._zod !== void 0) c2 = mc(c2, a3);
      d2 = d2 + 1 | 0;
    }
    return c2;
  }), with: (a2) => a2.check, clone: (a2) => (b2) => kc(a2, b2), isOptional: (a2) => () => Ld(a2).success, isNullable: (a2) => () => Ld(a2, null).success, apply: (a2) => Lk((b2) => {
    let c2 = Array.from(b2);
    c2[0] = a2;
    return b2[0].apply(void 0, c2);
  }), register: (a2) => (b2, c2) => {
    b2.add(a2, c2);
    return a2;
  } }, c));
  Td($g.prototype, "~standard", (a2) => ({ validate: (b2) => {
    try {
      return Rg(Ld(a2, b2));
    } catch {
      return Qd(a2, b2).then(Rg);
    }
  }, vendor: "zod", version: 1, jsonSchema: { input: Sg(a2, "input"), output: Sg(a2, "output") } }), false);
  vg($g, "_def", Jk((a2) => a2._zod.def));
  vg($g, "description", Jk((a2) => {
    let b2 = ac().get(a2);
    if (b2 == null) return;
    return b2.description;
  }));
  let a = _g.prototype;
  for (let b2 in ni) Td(a, b2, rg(b2, ni[b2]), true);
  ug(_g)((d = { includes: og("includes", "includes"), startsWith: og("starts_with", "prefix"), endsWith: og("ends_with", "suffix"), regex: mg((a2, b2) => qg("regex", a2, b2)), uuidv4: sg("4"), uuidv6: sg("6"), uuidv7: sg("7"), mac: mg((a2, b2) => qg("mac", tg(a2), a2)), datetime: mg((a2, b2) => qg("datetime", me(a2), a2)), date: mg((a2, b2) => qg("date", new RegExp("^" + Ff + "$"), a2)), time: mg((a2, b2) => qg("time", le(a2), a2)), trim: pg(ki), toLowerCase: pg((a2) => a2.toLowerCase()), toUpperCase: pg((a2) => a2.toUpperCase()), lowercase: mg((a2, b2) => hg("lowercase", {}, a2)), uppercase: mg((a2, b2) => hg("uppercase", {}, a2)), normalize: mg((a2, b2) => lg((b3) => b3.normalize(a2))), slugify: pg(li), format: (a2) => dg(a2._zod.bag.format), minLength: (a2) => dg(a2._zod.bag.minimum), maxLength: (a2) => dg(a2._zod.bag.maximum), min: ai, max: bi, length: ci, nonempty: di }, d));
  ug(ah)({ int: mg((a2, b2) => hg("number_format", { format: "int" }, a2)), safe: mg((a2, b2) => hg("number_format", { format: "safeint" }, a2)), positive: kg("greater_than", false, false), nonnegative: kg("greater_than", true, false), negative: kg("less_than", false, false), nonpositive: kg("less_than", true, false), multipleOf: ii, step: ii, finite: (a2) => () => a2, format: (a2) => dg(a2._zod.bag.format), minValue: (a2) => Wg(a2, "minimum", "exclusiveMinimum", "max", Number.NEGATIVE_INFINITY), maxValue: (a2) => Wg(a2, "maximum", "exclusiveMaximum", "min", Number.POSITIVE_INFINITY), isInt: (a2) => {
    let b2 = a2._zod.bag;
    if (((b2.format || "") + "").includes("int")) return true;
    let c2 = b2.multipleOf;
    if (c2 === void 0) c2 = 0.5;
    return Number.isSafeInteger(c2);
  }, isFinite: (a2) => true, gt: ei, gte: fi, min: fi, lt: gi, lte: hi, max: hi });
  ug(ch)({ positive: kg("greater_than", false, true), nonnegative: kg("greater_than", true, true), negative: kg("less_than", false, true), nonpositive: kg("less_than", true, true), multipleOf: ii, format: (a2) => dg(a2._zod.bag.format), minValue: (a2) => dg(a2._zod.bag.minimum), maxValue: (a2) => dg(a2._zod.bag.maximum), gt: ei, gte: fi, min: fi, lt: gi, lte: hi, max: hi });
  ug(eh)({ min: fi, max: hi, minDate: (a2) => Xg(a2, "minimum"), maxDate: (a2) => Xg(a2, "maximum") });
  ug(ph)({ min: ai, max: bi, length: ci, nonempty: di, unwrap: (a2) => () => a2._zod.def.element });
  let b = { min: og("min_size", "minimum"), max: og("max_size", "maximum"), size: og("size_equals", "size"), nonempty: mg((a2, b2) => hg("min_size", { minimum: 1 }, a2)) };
  ug(sh)(b);
  ug(th)(b);
  ug(Nh)({ mime: mg((a2, b2) => {
    let c2 = a2;
    if (!Array.isArray(a2)) c2 = [a2];
    return hg("mime_type", { mime: c2 }, b2);
  }), min: b.min, max: b.max });
  vg(oh, "shape", Jk((a2) => a2._zod.def.shape));
  ug(oh)({ strict: (a2) => () => kc(a2, { catchall: vi() }), passthrough: (a2) => () => kc(a2, { catchall: ui() }), strip: (a2) => () => {
    let b2 = H({}, a2._zod.def);
    b2.catchall = void 0;
    return new oh(b2);
  }, loose: (a2) => a2.passthrough, catchall: (a2) => (b2) => kc(a2, { catchall: b2 }), extend: (a2) => (b2) => {
    if (Ag(a2)) {
      let c2 = a2._zod.def.shape ?? {};
      for (let a3 in b2) if (W(c2, a3) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
    }
    return kc(a2, Dg(a2, b2));
  }, safeExtend: (a2) => (b2) => kc(a2, Dg(a2, b2)), merge: (a2) => (b2) => {
    if (Ag(a2)) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
    let c2 = Dg(a2, b2._zod.def.shape);
    M(c2, "catchall", { configurable: true, enumerable: true, get: () => b2._zod.def.catchall });
    let d2 = b2._zod.def.checks;
    if (!Array.isArray(d2)) d2 = [];
    c2.checks = d2;
    return kc(a2, c2);
  }, pick: (a2) => (b2) => Vg(a2, b2, true, "pick"), omit: (a2) => (b2) => Vg(a2, b2, false, "omit"), partial: (a2) => (b2) => Kg(a2, b2, true, false), exactPartial: (a2) => (b2) => Kg(a2, b2, true, true), required: (a2) => (b2) => Kg(a2, b2, false, false), keyof: (a2) => () => xi(F(a2._zod.def.shape ?? {})) });
  ug(nh)({ extract: (a2) => (b2, c2) => Ug(a2, b2, c2, true), exclude: (a2) => (b2, c2) => Ug(a2, b2, c2, false) });
  ug(Ph)({ implement: Tg(false, "implement"), implementAsync: Tg(true, "implementAsync"), input: (a2) => (b2, c2) => {
    let d2 = b2;
    if (Array.isArray(b2)) d2 = Ai(b2, c2);
    return kc(a2, { input: d2 });
  }, output: (a2) => (b2) => kc(a2, { output: b2 }) });
  [yh, Ah, Eh, Bh, Dh, Ch, Gh, Oh, Lh].forEach((a2) => Td(a2.prototype, "unwrap", ji, true));
  Td(Bh.prototype, "removeDefault", ji, true);
  Td(Dh.prototype, "removeCatch", ji, true);
  Td(Fh.prototype, "unwrap", (a2) => () => (0, a2._zod.def.getter)(), true);
  xg(ph, "element");
  xg(rh, "keyType valueType");
  xg(sh, "keyType valueType");
  xg(uh, "options discriminator");
  xg(Ih, "in out");
  wg(nh, "enum", (a2) => a2._zod.def.entries);
  wg(nh, "options", (a2) => Ud(a2._zod.def.entries));
  wg(mh, "values", (a2) => a2._zod.values);
  wg(mh, "value", (a2) => {
    let b2 = a2._zod.def.values;
    if (b2.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return b2[0];
  });
};
var pj = (a) => {
  oe(a);
  return a;
};
var yj = (a, b) => a ?? b;
var zj = (a, b) => {
  let c = Reflect.ownKeys(b);
  for (let d = 0; d < c.length; ++d) {
    let e = c[d];
    if (R(b, e)) S(a, e, b[e]);
  }
  return a;
};
var Aj = (a) => {
  if (a == null) return {};
  return zj({}, a);
};
var Bj = (a, b) => a.seen.get(b);
var Dj = (a, b) => a.target == b;
var Ej = (a) => Dj(a, "draft-04") || Dj(a, "openapi-3.0");
var Fj = (a) => Dj(a, "draft-07") || Ej(a);
var Hj = (a, b) => Object.assign({}, a, { path: a.path.concat(b) });
var Jj = (a) => {
  let b = yj(a.target, "draft-2020-12");
  if (b == "draft-4") b = "draft-04";
  if (b == "draft-7") b = "draft-07";
  return { metadataRegistry: yj(a.metadata, ac()), target: b, unrepresentable: yj(a.unrepresentable, "throw"), override: a.override, io: yj(a.io, "output"), counter: 0, seen: /* @__PURE__ */ new Map(), cycles: yj(a.cycles, "ref"), reused: yj(a.reused, "inline"), external: a.external };
};
var Kj = (a, b, c, d, e) => {
  let f = b.unrepresentable;
  if (typeof f == "function") f = b.unrepresentable({ zodSchema: a, path: d.path, message: e });
  if (f == "any") return false;
  if (f === void 0 || f == "throw") throw new Error(e);
  H(c, f);
  return true;
};
var Lj = (a, b, c, d, e) => Kj(a, b, c, d, e + " cannot be represented in JSON Schema");
var Mj = (a, b, c) => {
  let d = a._zod, e = d.def, f = Bj(b, a);
  if (f) {
    f.count = f.count + 1;
    if (c.schemaPath.includes(a)) f.cycle = c.path;
    return f.schema;
  }
  let g = { schema: {}, count: 1, path: c.path }, h;
  b.seen.set(a, g);
  b.sharedDefsExtractedFor = void 0;
  b.sharedEmitDoneFor = void 0;
  if (d.toJSONSchema != null) h = d.toJSONSchema();
  if (h) g.schema = h;
  else {
    let f2 = Object.assign({}, c, { schemaPath: c.schemaPath.concat([a]), path: c.path });
    if (d.processJSONSchema) d.processJSONSchema(b, g.schema, f2);
    else ek(a, e, b, g.schema, f2);
    let h2 = d.parent;
    if (h2) {
      if (!g.ref) g.ref = h2;
      Mj(h2, b, f2);
      Bj(b, h2).isParent = true;
    }
  }
  let i = g.schema, j2 = b.metadataRegistry.get(a);
  if (j2) zj(i, j2);
  if (b.io == "input" && _j(a, /* @__PURE__ */ new Set())) {
    delete i.examples;
    delete i.default;
  }
  if (b.io == "input" && "_prefault" in i && i.default == null) i.default = i._prefault;
  delete i._prefault;
  return i;
};
var Oj = (a) => {
  if (Dj(a, "draft-2020-12")) return "$defs";
  return "definitions";
};
var Pj = (a, b) => {
  let c = a.get(b);
  if (c == null) return;
  return c.id;
};
var Qj = (a, b, c) => b + "#/" + Oj(a) + "/" + ((a2) => a2.replace(/~/g, "~0").replace(/\//g, "~1"))(c);
var Rj = (a, b) => {
  let c = b + (a.counter + "");
  a.counter = a.counter + 1;
  return c;
};
var Tj = (a, b, c) => {
  let d = c[1];
  if (d.schema.$ref) return;
  let e = ((a2, b2, c2) => {
    let d2 = c2[1], e2 = a2.external;
    if (e2) {
      let b3 = Pj(e2.registry, c2[0]), f3 = e2.uri;
      if (b3) {
        if (f3 == null) return { ref: b3 };
        return { ref: f3(b3) };
      }
      let g = yj(d2.defId, d2.schema.id) ?? Rj(a2, "schema");
      d2.defId = g;
      let h = "__shared";
      if (f3 != null) h = f3("__shared");
      return { defId: g, ref: Qj(a2, h + "", g) };
    }
    if (d2 === b2 && !d2.schema.id) return { ref: "#" };
    let f2 = d2.schema.id ?? Rj(a2, "__schema");
    return { defId: f2, ref: Qj(a2, "", f2) };
  })(a, b, c);
  d.def = Aj(d.schema);
  if (e.defId) d.defId = e.defId;
  let f = d.schema;
  for (let a2 in f) delete f[a2];
  f.$ref = e.ref;
};
var Uj = (a, b) => {
  let c = Bj(a, b);
  if (!c) throw new Error("Unprocessed schema. This is a bug in Zod.");
  let d = a.external;
  if (d && a.sharedDefsExtractedFor === d) return;
  let e = /* @__PURE__ */ new Map(), f = Array.from(a.seen);
  for (let b2 = 0; b2 < f.length; ++b2) {
    let c2 = f[b2], d2 = Pj(a.metadataRegistry, c2[0]);
    if (d2) {
      let a2 = e.get(d2);
      if (a2 && a2 !== c2[0]) throw new Error('Duplicate schema id "' + d2 + '" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.');
      e.set(d2, c2[0]);
    }
  }
  if (a.cycles == "throw") {
    for (let a2 = 0; a2 < f.length; ++a2) {
      let b2 = f[a2][1].cycle;
      if (b2) throw new Error("Cycle detected: #/" + b2.join("/") + '/<root>\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
    }
  }
  for (let e2 = 0; e2 < f.length; ++e2) {
    let g = f[e2], h = g[1];
    if (b === g[0] || d && Pj(d.registry, g[0]) || Pj(a.metadataRegistry, g[0]) || h.cycle || h.count > 1 && a.reused == "ref") Tj(a, c, g);
  }
  if (d) a.sharedDefsExtractedFor = d;
};
var Vj = (a) => {
  let b = a.anyOf;
  if (!Array.isArray(b) || b.length == 0 || a.type !== void 0) return;
  let c = [];
  for (let a2 = 0; a2 < b.length; ++a2) {
    let d = b[a2];
    if (!d || typeof d != "object") return;
    Vj(d);
    let e = F(d);
    if (e.length != 1 || e[0] != "type") return;
    let f = [].concat(d.type);
    for (let a3 = 0; a3 < f.length; ++a3) {
      let b2 = f[a3];
      if (typeof b2 != "string") return;
      if (!c.includes(b2)) c.push(b2);
    }
  }
  delete a.anyOf;
  if (c.length == 1) a.type = c[0];
  else a.type = c;
};
var Wj = (a, b) => {
  for (let c in a) if (c != "$ref" && c != "allOf" && c in b && JSON.stringify(a[c]) == JSON.stringify(b[c])) delete a[c];
};
var Xj = (a, b) => {
  let c = Bj(a, b);
  if (c.ref === null) return;
  let d = yj(c.def, c.schema), e = Aj(d), f = c.ref;
  c.ref = null;
  if (f) {
    Xj(a, f);
    let c2 = Bj(a, f), g2 = c2.schema;
    if (g2.$ref && Fj(a)) {
      if (d.allOf == null) d.allOf = [];
      d.allOf.push(g2);
    } else zj(d, g2);
    zj(d, e);
    if (b._zod.parent === f) {
      for (let a2 in d) if (a2 != "$ref" && a2 != "allOf" && !(a2 in e)) delete d[a2];
    }
    if (g2.$ref && c2.def) Wj(d, c2.def);
  }
  let g = b._zod.parent;
  if (g && g !== f) {
    Xj(a, g);
    let b2 = Bj(a, g);
    if (b2.schema.$ref) {
      d.$ref = b2.schema.$ref;
      if (b2.def) Wj(d, b2.def);
    }
  }
  if (a.override != null) a.override({ zodSchema: b, jsonSchema: d, path: yj(c.path, []) });
};
var Yj = (a, b) => {
  let c = Bj(a, b);
  if (!c) throw new Error("Unprocessed schema. This is a bug in Zod.");
  let d = a.external, e = !d || a.sharedEmitDoneFor !== d;
  if (e) {
    let b2 = Array.from(a.seen);
    for (let c2 = b2.length - 1; c2 >= 0; --c2) Xj(a, b2[c2][0]);
    if (!Dj(a, "openapi-3.0")) {
      for (let a2 = 0; a2 < b2.length; ++a2) Vj(yj(b2[a2][1].def, b2[a2][1].schema));
    }
  }
  let f = {};
  if (typeof a.target == "string") {
    let b2 = lk[a.target + ""] ?? null;
    if (b2 != null) f.$schema = b2;
  }
  if (d && d.uri) {
    let a2 = Pj(d.registry, b);
    if (!a2) throw new Error("Schema is missing an `id` property");
    f.$id = d.uri(a2);
  }
  if (c.defId) zj(f, c.schema);
  else zj(f, yj(c.def, c.schema));
  let g = Pj(a.metadataRegistry, b);
  if (g !== void 0 && f.id === g) delete f.id;
  let h = {};
  if (d && d.defs != null) h = d.defs;
  if (e) {
    let b2 = Array.from(a.seen);
    for (let a2 = 0; a2 < b2.length; ++a2) {
      let c2 = b2[a2][1];
      if (c2.def && c2.defId) {
        if (c2.def.id === c2.defId) delete c2.def.id;
        S(h, c2.defId, c2.def);
      }
    }
  }
  if (d) a.sharedEmitDoneFor = d;
  else if (F(h).length > 0) f[Oj(a)] = h;
  try {
    let a2 = JSON.parse(JSON.stringify(f)), c2 = Aj(b["~standard"]);
    c2.jsonSchema = { input: Zj(b, "input"), output: Zj(b, "output") };
    M(a2, "~standard", { value: c2, enumerable: false, writable: false });
    return a2;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
};
var Zj = (a, b) => (c) => {
  let d = {};
  if (c != null) d = c;
  let e = Aj(d.libraryOptions);
  e.target = d.target;
  e.io = b;
  let f = Jj(e);
  return $j(a, f, { path: [], schemaPath: [] });
};
var $j = (a, b, c) => {
  Mj(a, b, c);
  Uj(b, a);
  return Yj(b, a);
};
var _j = (a, b) => {
  if (b.has(a)) return false;
  b.add(a);
  let c = a._zod.def, d = c.type;
  if (d == "transform") return true;
  if (d == "array") return _j(c.element, b);
  if (d == "set") return _j(c.valueType, b);
  if (d == "lazy") return _j(c.getter(), b);
  if (jk.includes(d + "")) return _j(c.innerType, b);
  if (d == "intersection") return _j(c.left, b) || _j(c.right, b);
  if (d == "record" || d == "map") return _j(c.keyType, b) || _j(c.valueType, b);
  if (d == "pipe") return !!a._zod.traits.has("$ZodCodec") || _j(c.in, b) || _j(c.out, b);
  if (d == "object") {
    for (let a2 in c.shape) if (_j(c.shape[a2], b)) return true;
    return false;
  }
  let e = [];
  if (d == "union") e = c.options;
  if (d == "tuple") {
    e = c.items;
    if (c.rest) e = e.concat([c.rest]);
  }
  for (let a2 = 0; a2 < e.length; ++a2) if (_j(e[a2], b)) return true;
  return false;
};
var ak = (a, b, c, d, e) => {
  let f = false, g = JSON.stringify(a, (a2, b2) => {
    if (typeof b2 != "bigint") return b2;
    f = true;
    return null;
  });
  if (!f) return JSON.parse(g);
  Lj(b, c, d, e, "BigInt defaults");
  return ik;
};
var bk = (a) => {
  let b = a._zod.def;
  if (b.type == "pipe" && b.in._zod.traits.has("$ZodTransform")) return bk(b.out);
  if (b.type == "catch") return bk(b.innerType);
  return a._zod.optin;
};
var dk = (a) => {
  let b;
  for (let c = 0; c < a.length; ++c) {
    let d = a[c], e = typeof d;
    if (d === null) e = "null";
    if (c == 0) b = e;
    else if (b !== e) return;
  }
  return b;
};
var ek = (a, b, c, d, e) => {
  let f = a._zod, g = f.bag, h = b.type;
  if (h == "string") {
    d.type = "string";
    let a2 = g.format, b2 = g.patterns;
    if (typeof g.minimum == "number") d.minLength = g.minimum;
    if (typeof g.maximum == "number") d.maxLength = g.maximum;
    if (a2) {
      let b3 = a2;
      if (a2 == "guid") b3 = "uuid";
      if (a2 == "url") b3 = "uri";
      if (a2 == "datetime") b3 = "date-time";
      if (a2 == "json_string") b3 = "json-string";
      if (a2 != "regex" && a2 != "time") d.format = b3;
    }
    if (g.contentEncoding) d.contentEncoding = g.contentEncoding;
    if (b2 && b2.size > 0) {
      let a3 = Array.from(b2);
      if (a3.length == 1) d.pattern = a3[0].source;
      else {
        let b3 = [];
        for (let d2 = 0; d2 < a3.length; ++d2) {
          let e2 = {};
          if (Fj(c)) e2.type = "string";
          e2.pattern = a3[d2].source;
          b3.push(e2);
        }
        d.allOf = b3;
      }
    }
    return;
  }
  if (h == "number") {
    let a2 = g.format, b2 = g.minimum, e2 = g.maximum, f2 = g.exclusiveMinimum, h2 = g.exclusiveMaximum;
    if (typeof a2 == "string" && a2.includes("int")) d.type = "integer";
    else d.type = "number";
    let i2 = Ej(c);
    if (typeof f2 == "number" && f2 >= yj(b2, -1 / 0)) {
      if (i2) {
        d.minimum = f2;
        d.exclusiveMinimum = true;
      } else d.exclusiveMinimum = f2;
    } else if (typeof b2 == "number") d.minimum = b2;
    if (typeof h2 == "number" && h2 <= yj(e2, 1 / 0)) {
      if (i2) {
        d.maximum = h2;
        d.exclusiveMaximum = true;
      } else d.exclusiveMaximum = h2;
    } else if (typeof e2 == "number") d.maximum = e2;
    if (typeof g.multipleOf == "number") d.multipleOf = g.multipleOf;
    return;
  }
  if (h == "boolean" || h == "success") {
    d.type = "boolean";
    return;
  }
  if (h == "null") {
    if (Dj(c, "openapi-3.0")) {
      d.type = "string";
      d.nullable = true;
      d.enum = [null];
    } else d.type = "null";
    return;
  }
  if (h == "never") {
    d.not = {};
    return;
  }
  if (h == "any" || h == "unknown") return;
  let i = kk[h + ""] ?? null;
  if (i != null) {
    Lj(a, c, d, e, i);
    return;
  }
  if (h == "enum") {
    let a2 = Ud(b.entries), c2 = dk(a2);
    if (c2 == "number" || c2 == "string" || a2.length == 0) if (a2.length == 0) d.type = "string";
    else d.type = c2;
    d.enum = a2;
    return;
  }
  if (h == "literal") {
    let f2 = [], g2 = b.values;
    for (let b2 = 0; b2 < g2.length; ++b2) {
      let h2 = g2[b2];
      if (h2 === void 0) {
        if (Lj(a, c, d, e, "Literal `undefined`")) return;
      } else if (typeof h2 == "bigint") {
        if (Lj(a, c, d, e, "BigInt literals")) return;
        f2.push(Number(h2));
      } else f2.push(h2);
    }
    if (f2.length == 1) {
      let a2 = f2[0];
      if (a2 === null) d.type = "null";
      else d.type = typeof a2;
      if (Ej(c)) d.enum = [a2];
      else d.const = a2;
    } else if (f2.length > 1) {
      let a2 = dk(f2);
      if (a2 == "number" || a2 == "string" || a2 == "boolean" || a2 == "null") d.type = a2;
      d.enum = f2;
    }
    return;
  }
  if (h == "template_literal") {
    let a2 = f.pattern;
    if (!a2) throw new Error("Pattern not found in template literal");
    d.type = "string";
    d.pattern = a2.source;
    return;
  }
  if (h == "file") {
    let a2 = { type: "string", format: "binary", contentEncoding: "binary" }, b2 = g.mime;
    if (g.minimum !== void 0) a2.minLength = g.minimum;
    if (g.maximum !== void 0) a2.maxLength = g.maximum;
    if (b2 && b2.length == 1) a2.contentMediaType = b2[0];
    H(d, a2);
    if (b2 && b2.length != 1) d.anyOf = b2.map((a3) => ({ contentMediaType: a3 }));
    return;
  }
  if (h == "array") {
    if (typeof g.minimum == "number") d.minItems = g.minimum;
    if (typeof g.maximum == "number") d.maxItems = g.maximum;
    d.type = "array";
    d.items = Mj(b.element, c, Hj(e, "items"));
    return;
  }
  if (h == "object") {
    let a2 = b.shape, f2 = {};
    d.type = "object";
    d.properties = f2;
    for (let b2 in a2) S(f2, b2, Mj(a2[b2], c, Hj(e, ["properties", b2])));
    let g2 = F(a2).filter((b2) => !((a3, b3) => {
      if (a3.io == "input") return bk(b3) !== void 0;
      return b3._zod.optout !== void 0;
    })(c, a2[b2]));
    if (g2.length > 0) d.required = g2;
    let h2 = b.catchall;
    if (h2 && h2._zod.def.type == "never") d.additionalProperties = false;
    else if (!h2) {
      if (c.io == "output") d.additionalProperties = false;
    } else d.additionalProperties = Mj(h2, c, Hj(e, "additionalProperties"));
    return;
  }
  if (h == "union") {
    let a2 = "anyOf";
    if (b.inclusive === false) a2 = "oneOf";
    let f2 = b.options, g2 = [];
    for (let b2 = 0; b2 < f2.length; ++b2) g2.push(Mj(f2[b2], c, Hj(e, [a2, b2])));
    d[a2] = g2;
    return;
  }
  if (h == "intersection") {
    let a2 = Mj(b.left, c, Hj(e, ["allOf", 0])), f2 = Mj(b.right, c, Hj(e, ["allOf", 1]));
    d.allOf = fk(a2).concat(fk(f2));
    return;
  }
  if (h == "tuple") {
    let a2 = b.items;
    d.type = "array";
    let f2 = Dj(c, "draft-2020-12"), h2 = Dj(c, "openapi-3.0"), i2 = "items";
    if (f2) i2 = "prefixItems";
    let j3 = [];
    for (let b2 = 0; b2 < a2.length; ++b2) j3.push(Mj(a2[b2], c, Hj(e, [i2, b2])));
    let k = null;
    if (b.rest) {
      let d2 = ["additionalItems"];
      if (f2) d2 = ["items"];
      if (h2) d2 = ["items", a2.length];
      k = Mj(b.rest, c, Hj(e, d2));
    }
    let l = a2.length;
    while (l > 0) {
      let b2 = a2[l - 1];
      if (c.io == "input") {
        if (bk(b2) === void 0) break;
      } else if (b2._zod.optout != "optional") break;
      --l;
    }
    let m = !b.rest;
    if (f2) {
      d.prefixItems = j3;
      if (m) d.items = false;
      else if (k) d.items = k;
    } else if (h2) {
      d.items = { anyOf: j3 };
      if (k) j3.push(k);
    } else {
      d.items = j3;
      if (m) d.additionalItems = false;
      else if (k) d.additionalItems = k;
    }
    if (l > 0) d.minItems = l;
    if (m) d.maxItems = a2.length;
    if (typeof g.minimum == "number") d.minItems = g.minimum;
    if (typeof g.maximum == "number") d.maxItems = g.maximum;
    return;
  }
  if (h == "record") {
    let a2 = b.keyType, f2 = a2._zod.bag, g2;
    if (f2 != null) g2 = f2.patterns;
    d.type = "object";
    if (b.mode == "loose" && g2 && g2.size > 0) {
      let a3 = Mj(b.valueType, c, Hj(e, ["patternProperties", "*"])), f3 = {};
      d.patternProperties = f3;
      g2.forEach((b2) => S(f3, b2.source, a3));
    } else {
      if (Dj(c, "draft-07") || Dj(c, "draft-2020-12")) d.propertyNames = Mj(a2, c, Hj(e, "propertyNames"));
      d.additionalProperties = Mj(b.valueType, c, Hj(e, "additionalProperties"));
    }
    let h2 = a2._zod.values;
    if (h2 && !b.partial) {
      let a3 = Array.from(h2).filter((a4) => typeof a4 == "string" || typeof a4 == "number");
      if (a3.length > 0) d.required = a3;
    }
    return;
  }
  if (h == "nullable") {
    let f2 = Mj(b.innerType, c, e);
    if (Dj(c, "openapi-3.0")) {
      Bj(c, a).ref = b.innerType;
      d.nullable = true;
    } else d.anyOf = [f2, { type: "null" }];
    return;
  }
  if (!jk.includes(h + "") && h != "pipe" && h != "lazy") throw new Error("[toJSONSchema]: Non-representable type encountered: " + h);
  let j2 = b.innerType;
  if (h == "lazy") j2 = f.innerType;
  if (h == "pipe") {
    j2 = b.out;
    if (c.io == "input" && !b.in._zod.traits.has("$ZodTransform")) j2 = b.in;
  }
  Mj(j2, c, e);
  Bj(c, a).ref = j2;
  if (h == "readonly") d.readOnly = true;
  if (h == "default") {
    let f2 = ak(b.defaultValue, a, c, d, e);
    if (f2 !== ik) d.default = f2;
  }
  if (h == "prefault" && c.io == "input") {
    let f2 = ak(b.defaultValue, a, c, d, e);
    if (f2 !== ik) d._prefault = f2;
  }
  if (h == "catch") {
    let f2;
    try {
      f2 = b.catchValue(void 0);
    } catch {
      Kj(a, c, d, e, "Dynamic catch values are not supported in JSON Schema");
      return;
    }
    d.default = f2;
  }
};
var fk = (a) => {
  if ("allOf" in a && F(a).length == 1) return a.allOf;
  return [a];
};
var gk = function(a, b) {
  let c = Aj(b), d = Jj(c);
  if ("_idmap" in a) {
    let b2 = {}, e = {}, f = Array.from(a._idmap.entries());
    for (let a2 = 0; a2 < f.length; ++a2) Mj(f[a2][1], d, { path: [], schemaPath: [] });
    d.external = { registry: a, uri: c.uri, defs: b2 };
    for (let a2 = 0; a2 < f.length; ++a2) {
      Uj(d, f[a2][1]);
      S(e, f[a2][0], Yj(d, f[a2][1]));
    }
    if (F(b2).length > 0) {
      let a2 = {};
      a2[Oj(d)] = b2;
      e.__shared = a2;
    }
    return { schemas: e };
  }
  return $j(a, d, { path: [], schemaPath: [] });
};
var hk = (a, b) => {
  if (a == null) return;
  return a[b] || void 0;
};
var generatorContext = function(a) {
  let b;
  if (a != null) b = a.target;
  return Jj({ target: b, metadata: hk(a, "metadata"), unrepresentable: hk(a, "unrepresentable"), override: hk(a, "override"), io: hk(a, "io") });
};
var generatorProcess = function(a, b, c) {
  if (c === void 0) return Mj(a, b, { path: [], schemaPath: [] });
  return Mj(a, b, c);
};
var generatorEmit = function(a, b, c) {
  if (c) {
    if (c.cycles) b.cycles = c.cycles;
    if (c.reused) b.reused = c.reused;
    if (c.external) b.external = c.external;
  }
  b.sharedDefsExtractedFor = void 0;
  b.sharedEmitDoneFor = void 0;
  Uj(b, a);
  return Aj(Yj(b, a));
};
var nk = (a, b) => a ?? b;
var ok = (a) => new RegExp("^" + a + "$");
var pk = function(a) {
  if (!j(a) || Array.isArray(a)) return false;
  let b = a.constructor;
  if (typeof b != "function") return true;
  let c = b.prototype;
  return j(c) && Q(c, "isPrototypeOf");
};
var qk = (a) => {
  let b = Aj(a);
  b.direction = "backward";
  return b;
};
var sk = (a, b, c) => {
  let d = c.get(a);
  if (d === Ck) return new vj.ZodLazy({ type: "lazy", getter: () => c.get(a) });
  if (d !== void 0) return d;
  c.set(a, Ck);
  let e = a._zod.def, f = e.type + "", g = false, h = Aj(e), i = (a2) => {
    let d2 = sk(a2, b, c);
    if (d2 !== a2) g = true;
    return d2;
  };
  if (f == "lazy") {
    let a2 = e.getter;
    delete h._cachedInner;
    h.getter = () => sk(a2(), b, c);
    g = true;
  }
  let j2 = ((a2) => {
    if (a2 == "success" || jk.includes(a2)) return "innerType";
    return Dk[a2] ?? "";
  })(f);
  if (j2 != "") {
    let a2 = j2.split(" ");
    for (let b2 = 0; b2 < a2.length; ++b2) {
      let c2 = a2[b2] ?? "", d2 = e[c2];
      if (c2 != "catchall" && c2 != "rest" || d2) if (Array.isArray(d2)) h[c2] = d2.map((a3) => i(a3));
      else if (c2 == "shape") {
        let a3 = {}, b3 = F(d2);
        for (let c3 = 0; c3 < b3.length; ++c3) a3[b3[c3] + ""] = i(d2[b3[c3] + ""]);
        h[c2] = a3;
      } else h[c2] = i(d2);
    }
  }
  let k = a;
  if (g) k = new a._zod.constr(h);
  let l = b(k);
  c.set(a, l);
  return l;
};
var tk = function(a, b) {
  let c = b;
  if (typeof c != "function") c = (a2) => {
    let c2 = b[a2._zod.def.type + ""];
    if (c2) return c2(a2);
    return a2;
  };
  return sk(a, c, /* @__PURE__ */ new Map());
};
var uk = (a) => {
  if (!a || typeof a != "object") return vj.unknown();
  let b = a.type, c = a.format;
  if (a.const !== void 0) return vj.literal(a.const);
  if (a.enum) return vj.enum(a.enum.map((a2) => a2 + ""));
  if (a.anyOf) return vj.union(a.anyOf.map((a2) => uk(a2)));
  if (a.allOf) return a.allOf.map((a2) => uk(a2)).reduce((a2, b2) => a2.and(b2));
  if (b == "string") {
    let b2 = vj.string();
    if (c == "credit_card") b2 = b2.check(vj.creditCard());
    else if (c && typeof vj[c + ""] == "function") b2 = b2.check(vj[c + ""]());
    if (typeof a.minLength == "number") b2 = b2.min(a.minLength);
    if (typeof a.maxLength == "number") b2 = b2.max(a.maxLength);
    if (a.pattern) b2 = b2.regex(new RegExp(a.pattern));
    return b2;
  }
  if (b == "number" || b == "integer") return vj.number();
  if (b == "boolean") return vj.boolean();
  if (b == "null") return vj.null();
  if (b == "array") return vj.array(uk(nk(a.items, {})));
  if (b == "object") {
    let b2 = {}, c2 = nk(a.properties, {}), d = a.required, e = F(c2);
    for (let a2 = 0; a2 < e.length; ++a2) {
      let f = e[a2] + "", g = uk(c2[f]);
      if (d == null || !d.includes(f)) g = g.optional();
      b2[f] = g;
    }
    return vj.object(b2);
  }
  return vj.unknown();
};
var wk = function(a) {
  if (!a) return new RegExp(wf.source);
  return ok("([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-" + a + "[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})");
};
var xk = (a, b) => ok("[A-Za-z0-9+/]{" + a + "}" + b);
var yk = (a) => ok("[A-Za-z0-9_-]{" + a + "}");
var Ca = Object;
var Da = Ca.prototype.hasOwnProperty;
var Ea = Ca.prototype.isPrototypeOf;
var Fa = Ca.is;
var Ta = (a, b) => /* @__PURE__ */ ((a2, b2, c) => (d, e) => {
  let f = H({}, e);
  f.async = false;
  let g = a2.run({ value: d, issues: [] }, f);
  if (fa(g)) throw new Error("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  if (g.issues.length > 0) return b2(g, f);
  if (c) return { success: true, data: g.value };
  return g.value;
})(a, b, true);
var pe = 0;
var qe = 1;
var re = 2;
var se = 3;
var te = 4;
var ue = 5;
var ve = 6;
var we = 7;
var xe = 8;
var ye = 9;
var ze = 10;
var Ae = 11;
var Be = 12;
var Ce = 13;
var De = 14;
var Ee = 15;
var Fe = 16;
var Ge = 17;
var He = 18;
var Ie = 19;
var Je = 20;
var Ke = 21;
var Le = 22;
var Me = 23;
var Ne = 24;
var Oe = 25;
var Pe = 26;
var Qe = 27;
var Re = 28;
var Se = 29;
var Te = 30;
var Ue = 31;
var Ve = 32;
var We = 33;
var Xe = 34;
var Ye = 35;
var Ze = 37;
var $e = 38;
var _e = 39;
var af = 40;
var bf = "string number boolean bigint symbol date nan undefined null any unknown never void literal enum object array tuple record map set union intersection optional nullable default prefault catch nonoptional lazy promise transform pipe readonly custom file custom success union function template_literal".split(" ");
var cf = [];
var df;
var ef = false;
var ff = { configurable: true, get: () => {
  ef = true;
} };
var gf = /* @__PURE__ */ new WeakMap();
var hf = /* @__PURE__ */ new WeakMap();
var jf = "Encountered Promise during synchronous parse. Use .parseAsync() instead.";
var kf;
var lf;
var mf;
var nf = { major: 4, minor: 4, patch: 3 };
var of = { string: "characters", file: "bytes", array: "items", set: "items", map: "entries" };
var pf = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", uuidv7: "UUIDv7", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", credit_card: "credit card number", jwt: "JWT", template_literal: "input" };
var qf = Ik((a, b) => {
  if (!j(a)) a = L(qf.prototype);
  Jb(a, b[0]);
  if (a.stack === void 0) U(a, qf);
  return a;
});
var rf = Ik((a, b) => {
  let c = L(rf.prototype);
  Jb(c, b[0]);
  U(c, rf);
  return c;
});
var sf = Ik((a, b) => {
  let c = new Error("Encountered unidirectional transform during encode: " + b[0]);
  c.name = "ZodEncodeError";
  return c;
});
function Mk(a) {
  return function(b, c) {
    return a(this, b, c);
  };
}
var tf = { add: Mk((a, b, c) => {
  xa(a._map, b, c);
  if (j(c) && "id" in c) xa(a._idmap, c.id, b);
  return a;
}), clear: Jk((a) => {
  a._map = /* @__PURE__ */ new WeakMap();
  a._idmap = /* @__PURE__ */ new Map();
  return a;
}), remove: Kk((a, b) => {
  let c = wa(a._map, b);
  if (j(c) && "id" in c) a._idmap.delete(c.id);
  a._map.delete(b);
  return a;
}), get: Kk((a, b) => {
  let c = wa(a._map, b), d;
  if (j(b) && j(b._zod)) d = b._zod.parent;
  if (!d) return c;
  let e = H({}, a.get(d));
  delete e.id;
  H(e, c);
  if (F(e).length == 0) return;
  return e;
}), has: Kk((a, b) => ya(a._map, b)) };
var uf = { safeint: [-9007199254740991, 9007199254740991], int: [-9007199254740991, 9007199254740991], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-17976931348623157e292, 17976931348623157e292] };
var vf = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var wf = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
var xf = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var yf = /^[cC][0-9a-z]{6,}$/;
var zf = /^[0-9a-z]+$/;
var Af = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var Bf = /^[a-zA-Z0-9_-]{21}$/;
var Cf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var Ef = new RegExp("^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$");
var Ff = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
var Gf = new RegExp("^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$");
var Hf = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var If = /^[0-9a-vA-V]{20}$/;
var Jf = /^[A-Za-z0-9]{27}$/;
var Kf = /^\+[1-9]\d{6,14}$/;
var Lf = /^[\p{Extended_Pictographic}\p{Emoji_Component}]+$/u;
var Mf = /^[A-Za-z0-9_-]*$/;
var Nf = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var Of = new RegExp("^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$");
var Pf = /^\d(?:[ -]?\d){11,18}$/;
var Qf = /^[0-9a-fA-F]*$/;
var Rf = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
var Sf = /^https?$/;
var Tf = /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
var Uf = /^[0-9a-fA-F]{32}$/;
var Vf = /^[0-9a-fA-F]{40}$/;
var Wf = /^[0-9a-fA-F]{64}$/;
var Xf = /^[0-9a-fA-F]{96}$/;
var Yf = /^[0-9a-fA-F]{128}$/;
var Zg = {};
var $g = _f("ZodType");
var _g = ag("ZodString");
var ah = ag("ZodNumber");
var bh = ag("ZodBoolean");
var ch = ag("ZodBigInt");
var dh = ag("ZodSymbol");
var eh = ag("ZodDate");
var fh = ag("ZodNaN");
var gh = ag("ZodUndefined");
var hh = ag("ZodNull");
var ih = ag("ZodAny");
var jh = ag("ZodUnknown");
var kh = ag("ZodNever");
var lh = ag("ZodVoid");
var mh = ag("ZodLiteral");
var nh = ag("ZodEnum");
var oh = ag("ZodObject");
var ph = ag("ZodArray");
var qh = ag("ZodTuple");
var rh = ag("ZodRecord");
var sh = ag("ZodMap");
var th = ag("ZodSet");
var uh = ag("ZodUnion");
var vh = _f("ZodDiscriminatedUnion", uh);
var wh = _f("ZodXor", uh);
var xh = ag("ZodIntersection");
var yh = ag("ZodOptional");
var zh = _f("ZodExactOptional", yh);
var Ah = ag("ZodNullable");
var Bh = ag("ZodDefault");
var Ch = ag("ZodPrefault");
var Dh = ag("ZodCatch");
var Eh = ag("ZodNonOptional");
var Fh = ag("ZodLazy");
var Gh = ag("ZodPromise");
var Hh = ag("ZodTransform");
var Ih = ag("ZodPipe");
var Jh = _f("ZodCodec", Ih);
var Kh = _f("ZodPreprocess", Ih);
var Lh = ag("ZodReadonly");
var Mh = ag("ZodCustom");
var Nh = ag("ZodFile");
var Oh = ag("ZodSuccess");
var Ph = ag("ZodFunction");
var Qh = ag("ZodTemplateLiteral");
var Rh = _f("ZodISODateTime", _g);
var Sh = _f("ZodISODate", _g);
var Th = _f("ZodISOTime", _g);
var Uh = _f("ZodISODuration", _g);
var Vh = ee("ZodEmail", _g);
var Wh = ee("ZodGUID", _g);
var Xh = ee("ZodUUID", _g);
var Yh = ee("ZodURL", _g);
var Zh = ee("ZodJWT", _g);
var $h = ig("min_length", "minimum");
var _h = ig("max_length", "maximum");
var ai = (a) => ng(a, $h);
var bi = (a) => ng(a, _h);
var ci = (a) => ng(a, ig("length_equals", "length"));
var di = (a) => ng(a, (a2, b) => $h(1, a2));
var ei = (a) => ng(a, jg("greater_than", false));
var fi = (a) => ng(a, jg("greater_than", true));
var gi = (a) => ng(a, jg("less_than", false));
var hi = (a) => ng(a, jg("less_than", true));
var ii = (a) => ng(a, ig("multiple_of", "value"));
var ji = (a) => () => a._zod.def.innerType;
var ki = (a) => a.trim();
var li = (a) => a.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
var ni = { email: vf, url: void 0, uuid: wf, guid: xf, cuid: yf, cuid2: zf, ulid: Af, nanoid: Bf, base64: new globalThis.RegExp("^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$"), base64url: Mf, ipv4: Cf, ipv6: Ef, cidrv4: Nf, cidrv6: Of, jwt: void 0, emoji: Lf, e164: Kf, xid: If, ksuid: Jf, duration: Hf };
var oi = (a) => Ig(_g, "mac", tg(a), a);
var pi = (a) => fg(_g, "string", a);
var qi = (a) => fg(ah, "number", a);
var ri = (a) => fg(bh, "boolean", a);
var si = (a) => fg(ch, "bigint", a);
var ti = (a) => fg(eh, "date", a);
var ui = (a) => fg(jh, "unknown", a);
var vi = (a) => fg(kh, "never", a);
var wi = (a, b) => {
  let c = a;
  if (!Array.isArray(a)) c = [a];
  return eg(mh, { type: "literal", values: c }, b);
};
var xi = (a, b) => {
  let c = a;
  if (Array.isArray(a)) c = Eg(a);
  return eg(nh, { type: "enum", entries: c }, b);
};
var yi = (a, b) => Fg(a, b);
var zi = (a, b) => eg(ph, { type: "array", element: a }, b);
var Ai = (a, b, c) => {
  let d = { type: "tuple", items: a };
  if (j(b) && b._zod !== void 0) d.rest = b;
  else if (c === void 0) c = b;
  return eg(qh, d, c);
};
var Bi = (a, b, c, d) => {
  let e = { type: "record", keyType: a, valueType: b };
  if (b == null || b._zod === void 0) {
    e.keyType = pi();
    e.valueType = a;
    c = b;
  }
  return new rh(H(H(e, he(c)), d));
};
var Ci = (a, b) => eg(uh, { type: "union", options: a }, b);
var Di = (a, b) => eg(wh, { type: "union", options: a, inclusive: false }, b);
var Ei = (a, b, c) => {
  if (Array.isArray(b)) {
    let c2 = 0;
    while (c2 < b.length) {
      let d = b[c2];
      if (j(d) && j(d._zod)) {
        let b2 = Vd(d._zod.def);
        if (j(b2) && !Q(b2, a)) throw new Error('Invalid discriminated union option at index "' + c2 + '"');
      }
      c2 = c2 + 1 | 0;
    }
  }
  return eg(vh, { type: "union", options: b, discriminator: a + "", inclusive: false }, c);
};
var Fi = (a, b) => new xh({ type: "intersection", left: a, right: b });
var Gi = (a, b, c) => eg(sh, { type: "map", keyType: a, valueType: b }, c);
var Hi = (a, b) => eg(th, { type: "set", valueType: a }, b);
var Ii = (a) => new Fh({ type: "lazy", getter: a });
var Ji = (a) => new Gh({ type: "promise", innerType: a });
var Ki = (a, b) => eg(Mh, { type: "custom", check: "custom", fn: a }, b);
var Li = (a, b) => ic(Kk((b2, c) => {
  c.addIssue = (a2) => {
    let d = a2;
    if (typeof a2 == "string") d = { message: a2, code: "custom", input: c.value, inst: b2, path: [] };
    else {
      if (d.fatal) d.continue = false;
      if (d.code === void 0) d.code = "custom";
      if (!("input" in d)) d.input = c.value;
      if (d.inst === void 0) d.inst = b2;
      if (d.continue === void 0) d.continue = true;
    }
    E(c.issues, d);
  };
  return a(c.value, c);
}), b);
var Mi = (a, b) => {
  let c = a;
  if (typeof a != "function") c = () => true;
  return Ki(c, b);
};
var Ni = (a, b) => {
  let c = eg(Mh, { type: "custom", check: "custom", abort: true, fn: (b2) => Aa(a, b2) }, b);
  c._zod.bag.Class = a;
  return c;
};
var Oi = (a) => new Hh({ type: "transform", transform: a });
var Pi = (a, b) => new Ih({ type: "pipe", in: a, out: b });
var Qi = (a, b, c) => new Jh({ type: "pipe", in: a, out: b, transform: c.decode, reverseTransform: c.encode });
var Ri = (a) => {
  let b = a._zod.def;
  return Qi(b.out, b.in, { decode: b.reverseTransform, encode: b.transform });
};
var Si = (a, b) => new Kh({ type: "pipe", in: Oi(a), out: b });
var Ti = (a) => eg(Yh, { type: "string", format: "url", check: "string_format", abort: false }, a);
var Ui = (a) => eg(Yh, { type: "string", format: "url", check: "string_format", abort: false, protocol: Sf, hostname: Tf }, a);
var Vi = (a) => {
  let b = he(a), c = b.truthy, d = b.falsy;
  if (!Array.isArray(c)) c = ["true", "1", "yes", "on", "y", "enabled"];
  if (!Array.isArray(d)) d = ["false", "0", "no", "off", "n", "disabled"];
  let e = b.case === "sensitive";
  if (!e) {
    c = Hg(c);
    d = Hg(d);
  }
  let f = new Set(c), g = new Set(d), h = b.error, i;
  i = new Jh({ type: "pipe", in: new _g({ type: "string", error: h }), out: new bh({ type: "boolean", error: h }), transform: (a2, b2) => {
    let h2 = a2;
    if (!e) h2 = a2.toLowerCase();
    if (ta(f, h2)) return true;
    if (ta(g, h2)) return false;
    E(b2.issues, { code: "invalid_value", expected: "stringbool", values: c.concat(d), input: b2.value, inst: i, continue: false });
    return false;
  }, reverseTransform: (a2) => {
    if (a2 === true) return c[0] || "true";
    return d[0] || "false";
  }, error: h });
  return i;
};
var Wi = (a) => new Oh({ type: "success", innerType: a });
var Xi = (a) => {
  let b;
  b = Ii(() => Ci([pi(a), qi(), ri(), fg(hh, "null"), zi(b), Bi(pi(), b)]));
  return b;
};
var Yi = (a, b, c) => {
  let d = { type: "string", check: "string_format", format: a, fn: b };
  if (typeof b != "function") {
    d.pattern = b;
    d.fn = (a2) => b.test(a2);
  }
  return eg(_g, d, c);
};
var Zi = { md5: [32, 22, "=="], sha1: [40, 27, "="], sha256: [64, 43, "="], sha384: [96, 64, ""], sha512: [128, 86, "=="] };
var $i = (a, b) => {
  let c = "hex";
  if (j(b) && b.enc !== void 0) c = b.enc;
  let d = a + "_" + c, e = Zi[a], f = "";
  if (Array.isArray(e)) {
    if (c === "hex") f = "^[0-9a-fA-F]{" + e[0] + "}$";
    if (c === "base64") f = "^[A-Za-z0-9+/]{" + e[1] + "}" + e[2] + "$";
    if (c === "base64url") f = "^[A-Za-z0-9_-]{" + e[1] + "}$";
  }
  if (f == "") throw new Error("Unrecognized hash format: " + d);
  return Yi(d, new RegExp(f, ""), b);
};
var _i = (a, b) => {
  let c = eg(Qh, { type: "template_literal", parts: a }, b), d = $f(ob(c), a);
  S(c._zod, "pattern", d);
  return c;
};
var aj = (a, b, c) => hg("property", { property: a, schema: b }, c);
var bj = (a) => {
  let b, c;
  if (j(a)) {
    b = a.input;
    c = a.output;
  }
  if (Array.isArray(b)) b = Ai(b);
  if (b === void 0) b = zi(ui());
  if (c === void 0) c = ui();
  return new Ph({ type: "function", input: b, output: c });
};
var cj = (a) => new zh({ type: "optional", innerType: a, exact: true });
var dj = () => lg(li);
var ej = () => lg(ki);
var hj = (a) => F(a).map((b) => hc("property", { property: b, schema: a[b] }));
var ij = () => ({ localeError: Zb() });
var jj = (a, b, c) => Od(a, b, c, jj);
var kj = (a, b, c) => Og(a, b, c);
var lj = (a, b, c) => Od(a, b, Mg(c, "backward"), lj);
var mj = (a, b, c) => Od(a, b, Mg(c, "forward"), mj);
var nj = (a, b, c) => Og(a, b, Mg(c, "backward"));
var oj = (a, b, c) => Og(a, b, Mg(c, "forward"));
Yg();
var qj = (a, b) => a.default(b);
var rj = {};
var sj = Eg("invalid_type too_big too_small invalid_format not_multiple_of unrecognized_keys invalid_union invalid_key invalid_element invalid_value custom".split(" "));
var uj = { string: pi, number: qi, boolean: ri, bigint: si, symbol: (a) => fg(dh, "symbol", a), date: ti, nan: (a) => fg(fh, "nan", a), undefined: (a) => fg(gh, "undefined", a), null: (a) => fg(hh, "null", a), any: (a) => fg(ih, "any", a), unknown: ui, never: vi, void: (a) => fg(lh, "void", a), literal: wi, enum: xi, nativeEnum: xi, object: yi, strictObject: (a, b) => Fg(a, b, vi()), looseObject: (a, b) => Fg(a, b, ui()), array: zi, tuple: Ai, record: Bi, union: Ci, xor: Di, discriminatedUnion: Ei, intersection: Fi, map: Gi, set: Hi, lazy: Ii, promise: Ji, custom: Mi, file: (a) => fg(Nh, "file", a), instanceof: Ni, transform: Oi, function: bj, int: (a) => Jg("int", a), int32: (a) => Jg("int32", a), uint32: (a) => Jg("uint32", a), float32: (a) => Jg("float32", a), float64: (a) => Jg("float64", a), pipe: Pi, optional: (a) => a.optional(), nullable: (a) => a.nullable(), email: (a) => Ig(Vh, "email", vf, a), uuid: (a) => Ig(Xh, "uuid", wf, a), guid: (a) => Ig(Wh, "guid", xf, a), url: Ti, httpUrl: Ui, codec: Qi, invertCodec: Ri, preprocess: Si, stringbool: Vi, success: Wi, json: Xi, hex: (a) => Yi("hex", Qf, a), hostname: (a) => Yi("hostname", Rf, a), hash: $i, partialRecord: (a, b, c) => Bi(a, b, c, { partial: true }), looseRecord: (a, b, c) => Bi(a, b, c, { mode: "loose" }), creditCard: (a) => Ig(_g, "credit_card", Pf, a), mac: oi, keyof: (a) => a.keyof(), catch: (a, b) => a.catch(b), default: qj, _default: qj, prefault: (a, b) => a.prefault(b), nonoptional: (a, b) => a.nonoptional(b), readonly: (a) => a.readonly(), jwt: (a) => Ig(Zh, "jwt", void 0, a), nanoid: (a) => Ig(_g, "nanoid", Bf, a), ulid: (a) => Ig(_g, "ulid", Af, a), ipv4: (a) => Ig(_g, "ipv4", Cf, a), ipv6: (a) => Ig(_g, "ipv6", Ef, a), coerce: { string: (a) => pj(pi(a)), number: (a) => pj(qi(a)), boolean: (a) => pj(ri(a)), bigint: (a) => pj(fg(ch, "bigint", a)), date: (a) => pj(fg(eh, "date", a)) }, iso: { datetime: (a) => Ig(Rh, "datetime", me(a), a), date: (a) => Ig(Sh, "date", Gf, a), time: (a) => Ig(Th, "time", le(a), a), duration: (a) => Ig(Uh, "duration", Hf, a) }, locales: { en: ij }, core: rj, parse: jj, safeParse: Ld, parseAsync: kj, safeParseAsync: Qd, encode: lj, decode: mj, encodeAsync: nj, decodeAsync: oj, treeifyError: Sb, prettifyError: Vb, formatError: Rb, flattenError: Pb, registry: bc, globalRegistry: ac(), config: Xb, ZodError: qf, ZodRealError: rf, getDiscriminatedOption: nd, exactOptional: cj, slugify: dj, properties: hj, property: aj, templateLiteral: _i, stringFormat: Yi, check: ic, with: ic, refine: Ki, superRefine: Li, trim: ej, maxLength: _h, minLength: $h, NEVER: { status: "aborted" }, ZodIssueCode: sj, TimePrecision: { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 } };
H(uj, Zg);
H(rj, uj);
for (let a in Zg) rj["$" + a] = Zg[a];
H(rj, { $ZodError: qf, $ZodRealError: rf, $ZodEncodeError: sf, toDotPath: Tb, globalConfig: Wb(), util: Yb() });
uj.util = rj.util;
var vj = uj;
var ik = /* @__PURE__ */ Symbol();
var jk = ["optional", "nullable", "default", "prefault", "catch", "readonly", "nonoptional", "promise"];
var kk = { __proto__: null, bigint: "BigInt", symbol: "Symbols", undefined: "Undefined", void: "Void", date: "Date", nan: "NaN", custom: "Custom types", function: "Function types", transform: "Transforms", map: "Map", set: "Set" };
var lk = { __proto__: null, "draft-2020-12": "https://json-schema.org/draft/2020-12/schema", "draft-07": "http://json-schema.org/draft-07/schema#", "draft-04": "http://json-schema.org/draft-04/schema#" };
var zk = vj.core;
var Ak = zk.util;
Ak.isPlainObject = pk;
Ak.shallowClone = (a) => {
  if (pk(a)) return Aj(a);
  if (Array.isArray(a)) return Array.from(a);
  if (Aa(Map, a) || Aa(Set, a)) return new a.constructor(a);
  return a;
};
Ak.floatSafeRemainder = (a, b) => {
  let c = +a / +b, d = Math.round(c);
  if (Math.abs(c - d) < 2220446049250313e-31 * Math.max(Math.abs(c), 1)) return 0;
  return c - d;
};
Ak.jsonStringifyReplacer = (a, b) => {
  if (typeof b == "bigint") return b.toString();
  return b;
};
Ak.nullish = (a) => a == null;
Ak.prefixIssues = (a, b) => b.map((b2) => {
  if (b2.path == null) b2.path = [];
  b2.path.unshift(a);
  return b2;
});
Ak.issue = (a, b, c) => {
  if (typeof a == "string") return { message: a, code: "custom", input: b, inst: c };
  return Aj(a);
};
Ak.cleanEnum = (a) => {
  let b = [], c = F(a);
  for (let d = 0; d < c.length; ++d) if (Number.isNaN(Number.parseInt(c[d], 10))) b.push(a[c[d]]);
  return b;
};
Ak.getEnumValues = Ud;
Ak.joinValues = (a, b) => a.map((a2) => rb(a2)).join(nk(b, "|"));
Ak.cached = (a) => {
  let b = {};
  M(b, "value", { get: Jk((b2) => {
    let c = a();
    M(b2, "value", { value: c });
    return c;
  }), enumerable: true, configurable: true });
  return b;
};
Ak.assertNever = (a) => {
  throw new Error("Unexpected value in exhaustive check");
};
Ak.assert = (a) => {
};
Ak.assertIs = Ak.assert;
Ak.assertEqual = (a) => a;
zk.clone = (a, b, c) => {
  let d = new a._zod.constr(nk(b, a._zod.def));
  if (!b || c != null && c.parent) d._zod.parent = a;
  return d;
};
zk.$constructor = (a, b) => {
  let c;
  c = Lk((a2) => {
    let d = L(c.prototype);
    b(d, nk(a2[0], {}));
    return d;
  });
  M(c, "name", { value: a });
  return c;
};
var Bk = "e164 cidrv4 cidrv6 base64 base64url xid ksuid cuid cuid2 emoji uuidv4 uuidv6 uuidv7".split(" ");
for (let a = 0; a < Bk.length; ++a) {
  let b = Bk[a] ?? "";
  vj[b] = (a2) => vj.string(a2)[b](a2);
}
vj.int64 = vj.bigint;
vj.uint64 = vj.bigint;
vj.describe = (a, b) => a.describe(b);
vj.meta = (a, b) => a.meta(b);
vj.setErrorMap = (a) => vj.config({ customError: a });
vj.compile = (a) => a;
vj.safeEncode = (a, b, c) => a.safeParse(b, qk(c));
vj.safeDecode = (a, b, c) => a.safeParse(b, c);
vj.safeEncodeAsync = (a, b, c) => a.safeParseAsync(b, qk(c));
vj.safeDecodeAsync = (a, b, c) => a.safeParseAsync(b, c);
var Ck = /* @__PURE__ */ Symbol("z.visit/resolving");
var Dk = { __proto__: null, object: "shape catchall", array: "element", tuple: "items rest", record: "keyType valueType", map: "keyType valueType", set: "valueType", union: "options", intersection: "left right", pipe: "in out", function: "input output" };
vj.visit = tk;
zk.visit = tk;
vj.deepPartial = (a) => tk(a, { object: (a2) => a2.partial(), union: (a2) => {
  let b = a2._zod.def;
  if (b.discriminator === void 0) return a2;
  return vj.union(b.options);
} });
vj.fromJSONSchema = (a) => uk(a);
M(vj.ZodTuple.prototype, "rest", { configurable: true, value: Kk((a, b) => vj.tuple(a._zod.def.items, b)) });
vj.toJSONSchema = gk;
zk.toJSONSchema = gk;
vj.ZodType.prototype.toJSONSchema = Kk((a, b) => gk(a, b));
var Ek = RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
var Fk = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
var Gk = { base64: RegExp("^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$"), base64url: Mf, bigint: /^-?\d+n?$/, boolean: /^(?:true|false)$/i, browserEmail: Ek, cidrv4: Nf, cidrv6: Of, creditCard: Pf, cuid: yf, cuid2: zf, date: Gf, datetime: (a) => {
  a.precision;
  return me(a);
}, domain: Tf, duration: Hf, e164: Kf, email: vf, emoji: () => /^[\p{Extended_Pictographic}\p{Emoji_Component}]+$/u, extendedDuration: /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, guid: xf, hex: Qf, hostname: Rf, html5Email: Ek, httpProtocol: Sf, idnEmail: Fk, integer: /^-?\d+$/, ipv4: Cf, ipv6: Ef, ksuid: Jf, lowercase: /^[^A-Z]*$/, mac: (a) => {
  let b = (nk(a, ":") + "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp("^(?:[0-9A-F]{2}" + b + "){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}" + b + "){5}[0-9a-f]{2}$");
}, md5_base64: xk("22", "=="), md5_base64url: yk("22"), md5_hex: Uf, nanoid: Bf, null: /^null$/i, number: /^-?\d+(?:\.\d+)?$/, rfc5322Email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, sha1_base64: xk("27", "="), sha1_base64url: yk("27"), sha1_hex: Vf, sha256_base64: xk("43", "="), sha256_base64url: yk("43"), sha256_hex: Wf, sha384_base64: xk("64", ""), sha384_base64url: yk("64"), sha384_hex: Xf, sha512_base64: xk("86", "=="), sha512_base64url: yk("86"), sha512_hex: Yf, string: (a) => {
  if (!a) return ok("[\\s\\S]*");
  return ok("[\\s\\S]{" + nk(a.minimum, 0) + "," + nk(a.maximum, "") + "}");
}, time: (a) => {
  a.precision;
  return le(a);
}, ulid: Af, undefined: /^undefined$/i, unicodeEmail: Fk, uppercase: /^[^a-z]*$/, uuid: wk, uuid4: wk(4), uuid6: wk(6), uuid7: wk(7), xid: If };
vj.regexes = Gk;
zk.regexes = Gk;

// dist/compat.js
var import_meta = {};
try {
  const locales2 = (0, import_node_module.createRequire)(import_meta.url)("zod/v4/locales");
  vj.locales = { ...vj.locales, ...locales2.default ?? locales2 };
} catch {
}
vj.core.JSONSchemaGenerator = class JSONSchemaGenerator {
  constructor(params) {
    this.ctx = generatorContext(params);
  }
  process(schema, params) {
    return generatorProcess(schema, this.ctx, params);
  }
  emit(schema, params) {
    return generatorEmit(schema, this.ctx, params);
  }
};

// dist/index.js
var { NEVER, TimePrecision, ZodAny, ZodArray, ZodBigInt, ZodBoolean, ZodCatch, ZodCodec, ZodCustom, ZodDate, ZodDefault, ZodDiscriminatedUnion, ZodEnum, ZodError, ZodExactOptional, ZodFile, ZodFunction, ZodISODate, ZodISODateTime, ZodISODuration, ZodISOTime, ZodIntersection, ZodIssueCode, ZodLazy, ZodLiteral, ZodMap, ZodNaN, ZodNever, ZodNonOptional, ZodNull, ZodNullable, ZodNumber, ZodObject, ZodOptional, ZodPipe, ZodPrefault, ZodPreprocess, ZodPromise, ZodReadonly, ZodRealError, ZodRecord, ZodSet, ZodString, ZodSuccess, ZodSymbol, ZodTemplateLiteral, ZodTransform, ZodTuple, ZodType, ZodUndefined, ZodUnion, ZodUnknown, ZodVoid, ZodXor, _default, any, array, base64, base64url, bigint, boolean, catch: $catch, check, cidrv4, cidrv6, codec, coerce, compile, config, core, creditCard, cuid, cuid2, custom, date, decode, decodeAsync, deepPartial, describe, discriminatedUnion, e164, email, emoji, encode, encodeAsync, enum: $enum, exactOptional, file, flattenError, float32, float64, formatError, fromJSONSchema, function: $function, getDiscriminatedOption, globalRegistry, guid, hash, hex, hostname, httpUrl, instanceof: $instanceof, int, int32, int64, intersection, invertCodec, ipv4, ipv6, iso, json, jwt, keyof, ksuid, lazy, literal, locales, looseObject, looseRecord, mac, map, maxLength, meta, minLength, nan, nanoid, nativeEnum, never, nonoptional, null: $null, nullable, number, object, optional, parse, parseAsync, partialRecord, pipe, prefault, preprocess, prettifyError, promise, properties, property, readonly, record, refine, regexes, registry, safeDecode, safeDecodeAsync, safeEncode, safeEncodeAsync, safeParse, safeParseAsync, set, setErrorMap, slugify, strictObject, string, stringFormat, stringbool, success, superRefine, symbol, templateLiteral, toJSONSchema, transform, treeifyError, trim, tuple, uint32, uint64, ulid, undefined: $undefined, union, unknown, url, util, uuid, uuidv4, uuidv6, uuidv7, visit, void: $void, xid, xor } = vj;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NEVER,
  TimePrecision,
  ZodAny,
  ZodArray,
  ZodBigInt,
  ZodBoolean,
  ZodCatch,
  ZodCodec,
  ZodCustom,
  ZodDate,
  ZodDefault,
  ZodDiscriminatedUnion,
  ZodEnum,
  ZodError,
  ZodExactOptional,
  ZodFile,
  ZodFunction,
  ZodISODate,
  ZodISODateTime,
  ZodISODuration,
  ZodISOTime,
  ZodIntersection,
  ZodIssueCode,
  ZodLazy,
  ZodLiteral,
  ZodMap,
  ZodNaN,
  ZodNever,
  ZodNonOptional,
  ZodNull,
  ZodNullable,
  ZodNumber,
  ZodObject,
  ZodOptional,
  ZodPipe,
  ZodPrefault,
  ZodPreprocess,
  ZodPromise,
  ZodReadonly,
  ZodRealError,
  ZodRecord,
  ZodSet,
  ZodString,
  ZodSuccess,
  ZodSymbol,
  ZodTemplateLiteral,
  ZodTransform,
  ZodTuple,
  ZodType,
  ZodUndefined,
  ZodUnion,
  ZodUnknown,
  ZodVoid,
  ZodXor,
  _default,
  any,
  array,
  base64,
  base64url,
  bigint,
  boolean,
  catch: null,
  check,
  cidrv4,
  cidrv6,
  codec,
  coerce,
  compile,
  config,
  core,
  creditCard,
  cuid,
  cuid2,
  custom,
  date,
  decode,
  decodeAsync,
  deepPartial,
  describe,
  discriminatedUnion,
  e164,
  email,
  emoji,
  encode,
  encodeAsync,
  enum: null,
  exactOptional,
  file,
  flattenError,
  float32,
  float64,
  formatError,
  fromJSONSchema,
  function: null,
  getDiscriminatedOption,
  globalRegistry,
  guid,
  hash,
  hex,
  hostname,
  httpUrl,
  instanceof: null,
  int,
  int32,
  int64,
  intersection,
  invertCodec,
  ipv4,
  ipv6,
  iso,
  json,
  jwt,
  keyof,
  ksuid,
  lazy,
  literal,
  locales,
  looseObject,
  looseRecord,
  mac,
  map,
  maxLength,
  meta,
  minLength,
  nan,
  nanoid,
  nativeEnum,
  never,
  nonoptional,
  null: null,
  nullable,
  number,
  object,
  optional,
  parse,
  parseAsync,
  partialRecord,
  pipe,
  prefault,
  preprocess,
  prettifyError,
  promise,
  properties,
  property,
  readonly,
  record,
  refine,
  regexes,
  registry,
  safeDecode,
  safeDecodeAsync,
  safeEncode,
  safeEncodeAsync,
  safeParse,
  safeParseAsync,
  set,
  setErrorMap,
  slugify,
  strictObject,
  string,
  stringFormat,
  stringbool,
  success,
  superRefine,
  symbol,
  templateLiteral,
  toJSONSchema,
  transform,
  treeifyError,
  trim,
  tuple,
  uint32,
  uint64,
  ulid,
  undefined,
  union,
  unknown,
  url,
  util,
  uuid,
  uuidv4,
  uuidv6,
  uuidv7,
  visit,
  void: null,
  xid,
  xor,
  z
});
