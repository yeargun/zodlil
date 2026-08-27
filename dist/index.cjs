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
  $ZodError: () => $ZodError,
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
  base64: () => base642,
  base64url: () => base64url2,
  bigint: () => bigint2,
  boolean: () => boolean2,
  catch: () => $catch,
  check: () => check,
  cidrv4: () => cidrv42,
  cidrv6: () => cidrv62,
  codec: () => codec,
  coerce: () => coerce,
  compile: () => compile,
  config: () => config,
  core: () => core,
  creditCard: () => creditCard2,
  cuid: () => cuid3,
  cuid2: () => cuid22,
  custom: () => custom,
  date: () => date2,
  decode: () => decode,
  decodeAsync: () => decodeAsync,
  deepPartial: () => deepPartial2,
  default: () => index_default,
  describe: () => describe,
  discriminatedUnion: () => discriminatedUnion,
  e164: () => e1642,
  email: () => email2,
  emoji: () => emoji2,
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
  globalRegistry: () => globalRegistry2,
  guid: () => guid2,
  hash: () => hash,
  hex: () => hex2,
  hostname: () => hostname2,
  httpUrl: () => httpUrl,
  instanceof: () => $instanceof,
  int: () => int,
  int32: () => int32,
  int64: () => int64,
  interface: () => $interface,
  intersection: () => intersection,
  invertCodec: () => invertCodec,
  ipv4: () => ipv42,
  ipv6: () => ipv62,
  iso: () => iso,
  json: () => json,
  jwt: () => jwt,
  keyof: () => keyof,
  ksuid: () => ksuid2,
  lazy: () => lazy,
  literal: () => literal,
  locales: () => locales,
  looseObject: () => looseObject,
  looseRecord: () => looseRecord,
  mac: () => mac2,
  map: () => map,
  maxLength: () => maxLength,
  meta: () => meta,
  minLength: () => minLength,
  nan: () => nan,
  nanoid: () => nanoid2,
  nativeEnum: () => nativeEnum,
  never: () => never,
  nonoptional: () => nonoptional,
  null: () => $null,
  nullable: () => nullable,
  number: () => number2,
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
  regexes: () => regexes_exports,
  registry: () => registry,
  safeDecode: () => safeDecode,
  safeDecodeAsync: () => safeDecodeAsync,
  safeEncode: () => safeEncode,
  safeEncodeAsync: () => safeEncodeAsync,
  safeParse: () => safeParse,
  safeParseAsync: () => safeParseAsync,
  set: () => $set,
  setErrorMap: () => setErrorMap,
  slugify: () => slugify,
  strictObject: () => strictObject,
  string: () => string2,
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
  ulid: () => ulid2,
  undefined: () => $undefined,
  union: () => union,
  unknown: () => unknown,
  url: () => url,
  util: () => util,
  uuid: () => uuid2,
  uuidv4: () => uuidv4,
  uuidv6: () => uuidv6,
  uuidv7: () => uuidv7,
  visit: () => visit2,
  void: () => $void,
  with: () => $with,
  xid: () => xid2,
  xor: () => xor,
  z: () => _e
});
module.exports = __toCommonJS(index_exports);

// dist/zod.core.js
var bg = "Encountered Promise during synchronous parse. Use .parseAsync() instead.";
var cg = 'Invalid discriminated union option at index "';
var dg = "return async function(data,params){return await impl(data,params)}";
var eg = ".exactPartial() cannot be used on object schemas containing refinements";
var fg = ".partial() cannot be used on object schemas containing refinements";
var gg = "[.*+?^${}()|[\\]\\\\]";
var hg = "";
var ig = "Invalid input";
var jg = "){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}";
var kg = '"';
var lg = "Invalid input: expected ";
var mg = " items";
var ng = " not found in enum";
var og = "){5}[0-9a-f]{2}$";
var pg = "^(?:[0-9A-F]{2}";
var X = (j2) => !(j2 == null) && "object" == typeof j2;
var la = () => /* @__PURE__ */ new Set();
var pa = (S2) => ga.keys(S2);
var ia = (S2, a2) => ga.assign(S2, a2);
var qb = (S2, a2) => {
  if (a2 == null || !X(a2)) return;
  var w2 = Reflect.ownKeys(a2);
  var g2 = w2.length;
  var h2 = 0, b2, c2;
  var f2 = Reflect;
  while (h2 < g2) {
    b2 = ga.getOwnPropertyDescriptor(a2, w2[h2]);
    !(b2 === void 0) && !(b2 == null) && ga.defineProperty(S2, w2[h2], b2);
    h2 = h2 + 1;
  }
};
var ba = (S2, n2, a2) => {
  ga.defineProperty(S2, n2, a2);
};
var Ca = (S2, n2, j2) => {
  ba(S2, n2, { value: j2, writable: true, enumerable: true, configurable: true });
};
var rb = (a2, T2) => {
  var b2 = Error.captureStackTrace;
  "function" == typeof b2 && b2(a2, T2);
};
var La = (j2) => true === Number.isFinite(j2);
var na = (a2) => new Error(a2);
var $ = (a2, b2) => new RegExp(a2, b2);
var aa = (j2) => X(j2) && "function" == typeof j2.then;
var Lb = (j2) => ({ enumerable: false, writable: true, configurable: true, value: j2 });
var Fa = (j2) => ({ enumerable: false, writable: false, configurable: true, value: j2 });
var za = (d2, a2) => new globalThis.Function(d2, a2);
var te = (a2, b2, y2, c2, d2) => {
  let f2 = new globalThis.Function("parseAsync,applyFn,input,output,implFn", "return async function(){var a=Array.from(arguments);var p=input?await parseAsync(input,a):a;var r=await applyFn(implFn,this,p);return output?await parseAsync(output,r):r}");
  let e2 = [];
  e2.push(a2);
  e2.push(b2);
  e2.push(y2);
  e2.push(c2);
  e2.push(d2);
  return f2.apply(void 0, e2);
};
var qa = (T2, j2) => {
  if (j2 == null) return false;
  return true === Pd.call(T2.prototype, j2);
};
var uf = (D2, l2, k2) => {
  if ("number_format" == D2) return Ud(l2, k2);
  if ("min_length" == D2) return Wd(l2, k2);
  if ("max_length" == D2) return Xd(l2, k2);
  if ("greater_than" == D2) return Yd(l2, k2);
  if ("less_than" == D2) return Zd(l2, k2);
  if ("string_format" == D2) {
    if (l2.pattern === void 0 || !("string" == typeof l2.format)) return;
    if ("email" != l2.format) return;
    return Vd(l2, k2);
  }
};
var $f = (k2) => {
  if (k2 === void 0) return;
  if (k2._zod === void 0) return;
  var v2 = k2._zod;
  if (!("function" == typeof v2.check)) {
    var l2 = v2.def;
    "string" == typeof l2.check && (k2 = uf(l2.check, l2, k2), k2 === void 0 || (v2.check = k2));
  }
};
var ue = (k2) => {
  var a2 = [];
  var b2 = k2._zod;
  var h2 = b2.def;
  "string" == typeof h2.check && a2.push(k2);
  k2 = h2.checks;
  if (!(k2 === void 0) && Array.isArray(k2)) {
    var c2 = k2.length;
    h2 = 0;
    while (h2 < c2) {
      $f(k2[h2]);
      b2 = k2[h2];
      a2.push(b2);
      h2 = h2 + 1;
    }
  }
  return a2;
};
var ve = (a2) => {
  var d2 = a2.length;
  var h2 = 0, I2, c2, b2;
  while (h2 < d2) {
    I2 = a2[h2];
    I2._zod === void 0 ? b2 = true : (c2 = I2._zod, b2 = !("function" == typeof c2.check));
    if (b2) return false;
    h2 = h2 + 1;
  }
  return true;
};
var gf = (a2, b2, c2, d2) => {
  var e2 = b2.length;
  if (0 == e2) return a2;
  if (!ve(b2)) return c2;
  return function(H2, f2) {
    var G2 = this;
    if (!(f2 === void 0) && !(f2 == null)) {
      var V2;
      if ("string" == typeof f2.direction && "backward" == f2.direction) return c2.call(G2, H2, f2);
      V2 = f2.skipChecks;
      if (true === V2) return a2.call(G2, H2, f2);
    }
    V2 = {};
    V2.go = function(mh2, h2) {
      h2 = +h2 | 0;
      while (h2 < e2) {
        var I3 = b2[h2];
        var x2;
        if (!(I3 === void 0) && !(I3 == null)) {
          var lh2 = I3._zod;
          if (lh2 == null) return c2.call(G2, mh2, f2);
          var N2 = lh2.def;
          var k2 = !(N2 === void 0) && !(N2 == null) && "function" == typeof N2.when, t2, l2, j2, i2, gh2, jh2, ih2, kh2, m2;
          x2 = mh2.aborted;
          x2 = true === x2;
          if (!x2) {
            t2 = mh2.issues;
            m2 = t2.length;
            i2 = 0;
            while (i2 < m2) {
              l2 = t2[i2];
              j2 = l2.continue;
              k2 ? false === j2 && (x2 = true) : true === j2 || (x2 = true);
              i2 = i2 + 1;
            }
          }
          k2 ? (x2 = mh2.issues.length > 0 && x2, !x2 && !N2.when(mh2) && (x2 = true)) : x2 = mh2.issues.length > 0 && x2;
          if (!x2) {
            x2 = lh2.check;
            if (!("function" == typeof x2)) return c2.call(G2, mh2, f2);
            x2 = x2.call(I3, mh2);
            if (aa(x2)) {
              if (!(f2 === void 0) && !(f2 == null) && false === f2.async) throw new Error(bg);
              gh2 = h2 + 1 | 0;
              return Promise.resolve(x2).then(/* @__PURE__ */ ((a3, b3, c3) => function(i3) {
                return a3.go(b3, +(0 + c3));
              })(V2, mh2, gh2));
            }
          }
        }
        h2 = h2 + 1 | 0;
      }
      jh2 = mh2.issues;
      kh2 = jh2.length;
      gh2 = 0;
      while (gh2 < kh2) {
        ih2 = jh2[gh2];
        ih2.schema === void 0 && (ih2 = jh2[gh2], ih2.schema = d2);
        gh2 = gh2 + 1;
      }
      return mh2;
    };
    var I2 = a2.call(G2, H2, f2);
    if (aa(I2)) return I2.then(function(o2) {
      return V2.go(o2, 0);
    });
    return V2.go(I2, 0);
  };
};
function we(p2, l2) {
  var a2 = l2.type;
  p2.id = ac;
  var d2 = ac;
  var e2 = ac;
  ac = ac + 1 | 0;
  p2.kind = xe(a2);
  "union" == a2 && !("string" == typeof l2.discriminator) && false === l2.inclusive && (p2.kind = 38);
  p2.handle = void 0;
  p2.def = l2;
  p2.ctor = void 0;
  p2.typeName = a2;
  "int" == a2 && (p2.typeName = "number");
  p2.trait = "ZodType";
  p2.values = void 0;
  p2.optin = 0;
  p2.optout = 0;
  p2.hasChecks = false;
  Ga.push(p2);
  ye(p2);
}
var xe = (a2) => "string" == a2 ? 0 : "number" == a2 ? 1 : "int" == a2 ? 1 : "boolean" == a2 ? 2 : "bigint" == a2 ? 3 : "symbol" == a2 ? 4 : "date" == a2 ? 5 : "nan" == a2 ? 6 : "undefined" == a2 ? 7 : "null" == a2 ? 8 : "any" == a2 ? 9 : "unknown" == a2 ? 10 : "never" == a2 ? 11 : "void" == a2 ? 12 : "literal" == a2 ? 13 : "enum" == a2 ? 14 : "object" == a2 ? 15 : "array" == a2 ? 16 : "tuple" == a2 ? 17 : "record" == a2 ? 18 : "map" == a2 ? 19 : "set" == a2 ? 20 : "union" == a2 ? 21 : "intersection" == a2 ? 22 : "optional" == a2 ? 23 : "nullable" == a2 ? 24 : "default" == a2 ? 25 : "prefault" == a2 ? 26 : "catch" == a2 ? 27 : "nonoptional" == a2 ? 28 : "lazy" == a2 ? 29 : "promise" == a2 ? 30 : "transform" == a2 ? 31 : "pipe" == a2 ? 32 : "readonly" == a2 ? 33 : "custom" == a2 ? 34 : "file" == a2 ? 35 : "success" == a2 ? 37 : "function" == a2 ? 39 : "template_literal" == a2 ? 40 : 34;
var ye = (p2) => {
  var m2 = p2.typeName;
  var l2 = p2.def;
  if ("undefined" == m2) {
    m2 = la();
    m2.add(void 0);
    p2.values = m2;
  } else {
    if ("null" == m2) {
      m2 = la();
      m2.add(null);
      p2.values = m2;
    } else {
      if ("literal" == m2) {
        var h2 = la();
        m2 = l2.values;
        if (Array.isArray(m2)) {
          var A2 = m2.length;
          l2 = 0;
          while (l2 < A2) {
            var g2 = m2[l2];
            h2.add(g2);
            l2 = l2 + 1;
          }
        }
        p2.values = h2;
      } else {
        if ("enum" == m2) {
          h2 = la();
          A2 = Bd(l2.entries);
          g2 = A2.length;
          m2 = 0;
          while (m2 < g2) {
            l2 = A2[m2];
            h2.add(l2);
            m2 = m2 + 1;
          }
          p2.values = h2;
        } else {
          if ("optional" == m2) {
            m2 = ka(p2, "innerType");
            if (m2) {
              var B2 = null;
              if (!(m2.values === void 0)) {
                h2 = la();
                g2 = Array.from(m2.values);
                var U2 = g2.length;
                A2 = 0;
                var oc2 = Array;
                while (A2 < U2) {
                  var a2 = g2[A2];
                  h2.add(a2);
                  A2 = A2 + 1;
                }
                l2.exact || h2.add(void 0);
                p2.values = h2;
              }
              2 == m2.optin ? p2.optin = 2 : p2.optin = 1;
            } else {
              p2.optin = 1;
            }
            p2.optout = 1;
          } else {
            if ("nullable" == m2) {
              m2 = ka(p2, "innerType");
              if (m2) {
                var Q2 = null;
                if (!(m2.values === void 0)) {
                  l2 = la();
                  A2 = Array.from(m2.values);
                  g2 = A2.length;
                  h2 = 0;
                  var rc2 = Array;
                  while (h2 < g2) {
                    U2 = A2[h2];
                    l2.add(U2);
                    h2 = h2 + 1;
                  }
                  l2.add(null);
                  p2.values = l2;
                }
                p2.optin = m2.optin;
                p2.optout = m2.optout;
              }
            } else {
              if ("default" == m2 || "prefault" == m2 || "catch" == m2) {
                l2 = ka(p2, "innerType");
                if ("catch" == m2) {
                  p2.optin = 1;
                  if (l2) {
                    var fa2 = null;
                    m2 = l2;
                    p2.values = m2.values;
                    2 == m2.optin && (p2.optin = 2);
                  }
                } else {
                  p2.optin = 2;
                  !l2 || (p2.values = l2.values);
                }
              } else {
                if ("readonly" == m2) {
                  m2 = ka(p2, "innerType");
                  !m2 || (p2.values = m2.values, p2.optin = m2.optin, p2.optout = m2.optout);
                } else {
                  if ("nonoptional" == m2) {
                    m2 = ka(p2, "innerType");
                    !m2 || (p2.values = m2.values);
                  } else {
                    if ("transform" == m2) {
                      p2.optin = 1;
                    } else {
                      if ("pipe" == m2) {
                        m2 = ka(p2, "in");
                        !m2 || (p2.values = m2.values, p2.optin = m2.optin, p2.optout = m2.optout);
                      } else {
                        if ("union" == m2) {
                          U2 = l2.options;
                          if (Array.isArray(U2)) {
                            var b2 = U2.length;
                            m2 = b2 > 0;
                            var c2 = la();
                            h2 = false;
                            A2 = false;
                            g2 = false;
                            a2 = 0;
                            while (a2 < b2) {
                              l2 = va(U2[a2]);
                              if (l2) {
                                var rb2 = null;
                                2 == l2.optin && (h2 = true);
                                0 != l2.optin && (A2 = true);
                                1 == l2.optout && (g2 = true);
                                if (l2.values === void 0) {
                                  m2 = false;
                                } else {
                                  var d2 = Array.from(l2.values);
                                  var e2 = d2.length;
                                  l2 = 0;
                                  var uc2 = Array;
                                  while (l2 < e2) {
                                    var f2 = d2[l2];
                                    c2.add(f2);
                                    l2 = l2 + 1;
                                  }
                                }
                              } else {
                                m2 = false;
                              }
                              a2 = a2 + 1;
                            }
                            m2 && (p2.values = c2);
                            h2 ? p2.optin = 2 : A2 && (p2.optin = 1);
                            g2 && (p2.optout = 1);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  p2.hasChecks = false;
  "string" == typeof p2.def.check ? p2.hasChecks = true : (m2 = p2.def.checks, Array.isArray(m2) && m2.length > 0 && (p2.hasChecks = true));
};
var Mb = (e2, q2, a2, m2) => {
  var b2 = m2.issues;
  b2.length > 0 && Xa(m2.issues, e2.issues, a2);
  q2[a2] = m2.value;
};
var Tc = (p2) => {
  var a2 = p2.handle._zod;
  var F2 = a2.optin;
  if ("string" == typeof F2) {
    if ("defaulted" == F2) return 2;
    if ("optional" == F2) return 1;
    return 0;
  }
  return p2.optin;
};
var Uc = (p2) => {
  var a2 = p2.handle._zod;
  var F2 = a2.optout;
  if ("string" == typeof F2) {
    var f2 = F2;
    F2 = "optional" == F2;
  } else {
    F2 = false;
  }
  if (F2) return 1;
  return p2.optout;
};
var Vc = (e2, q2, n2, a2, K2, b2, m2) => {
  if (a2 && 0 == m2.issues.length) {
    m2.value === void 0 ? q2[n2] = void 0 : q2[n2] = m2.value;
    return;
  }
  var c2 = 1 == b2;
  var f2 = 0 != K2;
  b2 = !a2 && c2 && 1 == K2;
  !b2 && m2.issues.length > 0 && (f2 && c2 && !a2 ? b2 = true : Xa(m2.issues, e2.issues, n2));
  !b2 && !a2 && 0 == K2 && (K2 = m2.issues, 0 == K2.length && (K2 = Aa("nonoptional", void 0), tb(K2, n2), b2 = e2.issues, b2.push(K2)), b2 = true);
  if (b2) return;
  m2.value === void 0 ? a2 && (q2[n2] = void 0) : q2[n2] = m2.value;
};
var Nb = (B2) => B2.replace($(gg, "g"), "\\$&");
var Ob = (P2) => {
  var a2 = P2.length;
  var b2 = P2.startsWith("^") ? 1 : 0;
  !P2.endsWith("$") || (a2 = a2 - 1 | 0);
  return P2.slice(b2, a2);
};
var ze = (F2) => {
  var C2 = F2.kind;
  var z2 = {};
  var a2;
  X(F2.handle) && X(F2.handle._zod) && (a2 = F2.handle._zod, z2 = a2.bag);
  if (0 == C2) {
    if (X(z2) && !(z2.patterns === void 0)) {
      a2 = Array.from(z2.patterns);
      C2 = a2.length;
      if (C2 > 0) return a2[C2 - 1];
    }
    if (!(F2.def.pattern === void 0)) return F2.def.pattern;
    F2 = "number" == typeof z2.minimum ? z2.minimum : "0";
    C2 = "number" == typeof z2.maximum ? z2.maximum : hg;
    return $("^[\\s\\S]{" + F2 + "," + C2 + "}$", hg);
  }
  if (1 == C2) {
    if (!(z2.pattern === void 0) && !(z2.pattern == null)) return z2.pattern;
    F2 = "string" == typeof z2.format ? z2.format : hg;
    if (F2.includes("int")) return $("^-?\\d+$", hg);
    return $("^-?\\d+(?:\\.\\d+)?$", hg);
  }
  if (2 == C2) return $("^(?:true|false)$", "i");
  if (3 == C2) return $("^-?\\d+n?$", hg);
  if (7 == C2) return $("^undefined$", hg);
  if (8 == C2) return $("^null$", hg);
  if (13 == C2) {
    var b2 = Array.from(F2.values);
    z2 = [];
    var g2 = b2.length;
    C2 = 0;
    var fb2 = Array;
    while (C2 < g2) {
      F2 = b2[C2];
      "string" == typeof F2 ? z2.push(Nb(F2)) : F2 == null && F2 === void 0 ? z2.push("undefined") : F2 == null ? z2.push("null") : z2.push(Nb(F2));
      C2 = C2 + 1;
    }
    return $("^(" + z2.join("|") + ")$", hg);
  }
  if (14 == C2) {
    a2 = Array.from(F2.values);
    b2 = [];
    g2 = a2.length;
    z2 = 0;
    var vb2 = Array;
    while (z2 < g2) {
      F2 = a2[z2];
      ("string" == typeof F2 || "number" == typeof F2 || "symbol" == typeof F2) && b2.push(Nb(F2));
      z2 = z2 + 1;
    }
    return $("^(" + b2.join("|") + ")$", hg);
  }
  if (40 == C2) return z2 = F2.handle._zod, z2.pattern;
};
var Ae = (D2) => {
  var c2 = [];
  var g2 = D2.length;
  var h2 = 0, a2, b2, d2;
  while (h2 < g2) {
    a2 = D2[h2];
    if (a2 == null || "string" == typeof a2 || "number" == typeof a2 || "boolean" == typeof a2 || "bigint" == typeof a2) {
      c2.push(Nb(a2));
    } else {
      if (X(a2) && X(a2._zod)) {
        d2 = a2._zod;
        b2 = d2.pattern;
        if (b2 == null) {
          b2 = a2._zod;
          D2 = b2.traits;
          !(D2 === void 0) ? (a2 = Array.from(D2), D2 = a2.length > 0 ? a2[0] : hg) : D2 = hg;
          throw new Error("Invalid template literal part, no pattern found: " + D2);
        }
        a2 = b2.source;
        if (0 == a2.length) throw new Error("Invalid template literal part");
        c2.push(Ob(a2));
      } else {
        throw new Error("Invalid template literal part: " + a2);
      }
    }
    h2 = h2 + 1;
  }
  return $("^" + c2.join(hg) + "$", hg);
};
var Be = (S2, a2) => {
  let b2 = /* @__PURE__ */ Symbol.for("evaluating"), c2 = { value: void 0 };
  ba(S2, "innerType", { configurable: true, get: function() {
    if (c2.value === b2) return;
    c2.value === void 0 && (c2.value = b2, c2.value = a2());
    return c2.value;
  }, set: function(F2) {
    ba(S2, "innerType", { value: F2, configurable: true, writable: true });
  } });
};
var ja = (p2, n2, a2) => {
  var v2 = p2.handle._zod;
  var b2 = ga.getPrototypeOf(v2);
  if (true === n2 in b2 && !(bc === v2)) {
    bc = void 0;
    return;
  }
  bc = v2;
  ba(b2, n2, { configurable: true, get: function() {
    ba(this, n2, ae);
    var c2 = Ya;
    Ya = false;
    var r2;
    try {
      var d2 = ae;
      r2 = a2(this);
      Ya ? Reflect.deleteProperty(this, n2) : ba(this, n2, { configurable: true, writable: true, value: r2 });
      c2 && (Ya = true);
      return r2;
    } catch (s2) {
      d2 = ae;
      Reflect.deleteProperty(this, n2);
      c2 && (Ya = true);
      throw s2;
    }
  }, set: function(j2) {
    ba(this, n2, { configurable: true, writable: true, value: j2 });
  } });
};
var Wc = (p2) => 1 == p2.optin ? "optional" : 2 == p2.optin ? "defaulted" : void 0;
var Xc = (p2) => 1 == p2.optout ? "optional" : void 0;
var Ce = (p2) => {
  var C2 = p2.kind;
  var v2 = p2.handle._zod;
  var a2 = p2.handle;
  if (29 == C2) {
    C2 = p2.def.getter;
    Be(v2, function() {
      var d2 = a2._zod;
      var b2 = d2.def;
      b2._cachedInner === void 0 && (b2._cachedInner = C2());
      return b2._cachedInner;
    });
    ja(p2, "pattern", function(r2) {
      var m2 = r2.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.pattern;
    });
    ja(p2, "propValues", function(r2) {
      var m2 = r2.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.propValues;
    });
    ja(p2, "optin", function(r2) {
      var m2 = r2.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.optin;
    });
    ja(p2, "optout", function(r2) {
      var m2 = r2.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.optout;
    });
    return;
  }
  if (23 == C2) {
    ja(p2, "optin", function(r2) {
      var b2 = r2.def;
      var m2 = b2.innerType;
      if (X(m2) && X(m2._zod) && "defaulted" == m2._zod.optin) return "defaulted";
      return "optional";
    });
    v2.optout = "optional";
    ja(p2, "values", function(r2) {
      var a3 = r2.def;
      var m2 = a3.innerType;
      if (!X(m2) || !X(m2._zod) || m2._zod.values === void 0) return;
      a3 = la();
      var b2 = Array;
      var c2 = m2._zod;
      b2 = b2.from(c2.values);
      var g2 = b2.length;
      m2 = 0;
      while (m2 < g2) {
        c2 = b2[m2];
        a3.add(c2);
        m2 = m2 + 1;
      }
      m2 = r2.def;
      m2.exact || a3.add(void 0);
      return a3;
    });
    ja(p2, "pattern", function(r2) {
      var b2 = r2.def;
      var s2 = b2.innerType;
      if (!X(s2) || !X(s2._zod)) return;
      r2 = s2._zod;
      b2 = r2.pattern;
      if (b2 == null) return;
      return $("^(" + Ob(b2.source) + ")?$", hg);
    });
    return;
  }
  if (24 == C2) {
    ja(p2, "optin", function(r2) {
      var a3 = r2.def;
      var m2 = a3.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.optin;
    });
    ja(p2, "optout", function(r2) {
      var a3 = r2.def;
      var m2 = a3.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.optout;
    });
    ja(p2, "pattern", function(r2) {
      var b2 = r2.def;
      var s2 = b2.innerType;
      if (!X(s2) || !X(s2._zod)) return;
      r2 = s2._zod;
      b2 = r2.pattern;
      if (b2 == null) return;
      return $("^(" + Ob(b2.source) + "|null)$", hg);
    });
    ja(p2, "values", function(r2) {
      var a3 = r2.def;
      var m2 = a3.innerType;
      if (!X(m2) || !X(m2._zod) || m2._zod.values === void 0) return;
      r2 = la();
      a3 = Array;
      var b2 = m2._zod;
      a3 = a3.from(b2.values);
      var g2 = a3.length;
      m2 = 0;
      while (m2 < g2) {
        b2 = a3[m2];
        r2.add(b2);
        m2 = m2 + 1;
      }
      r2.add(null);
      return r2;
    });
    return;
  }
  if (21 == C2 || 38 == C2) {
    ja(p2, "optin", function(r2) {
      var h2 = r2.def;
      var U2 = h2.options;
      if (!Array.isArray(U2)) return;
      var g2 = U2.length;
      r2 = false;
      h2 = 0;
      while (h2 < g2) {
        var b2 = U2[h2];
        var c2 = b2._zod;
        var a3 = c2.optin;
        if ("defaulted" == a3) return "defaulted";
        a3 === void 0 || (r2 = true);
        h2 = h2 + 1;
      }
      if (r2) return "optional";
    });
    ja(p2, "optout", function(h2) {
      var g2 = h2.def;
      var U2 = g2.options;
      if (!Array.isArray(U2)) return;
      g2 = U2.length;
      h2 = 0;
      while (h2 < g2) {
        var a3 = U2[h2];
        var b2 = a3._zod;
        if ("optional" == b2.optout) return "optional";
        h2 = h2 + 1;
      }
    });
    ja(p2, "values", function(h2) {
      var a3 = h2.def;
      var U2 = a3.options;
      if (!Array.isArray(U2)) return;
      var b2 = la();
      var g2 = U2.length;
      h2 = 0;
      while (h2 < g2) {
        var c2 = U2[h2];
        var d2 = c2._zod;
        a3 = d2.values;
        if (a3 === void 0) return;
        c2 = Array.from(a3);
        d2 = c2.length;
        a3 = 0;
        var u2 = Array;
        while (a3 < d2) {
          var e2 = c2[a3];
          b2.add(e2);
          a3 = a3 + 1;
        }
        h2 = h2 + 1;
      }
      return b2;
    });
    ja(p2, "pattern", function(h2) {
      var b2 = h2.def;
      var C3 = b2.options;
      if (!Array.isArray(C3)) return;
      var c2 = [];
      var g2 = C3.length;
      h2 = 0;
      while (h2 < g2) {
        var a3 = C3[h2];
        var d2 = a3._zod;
        b2 = d2.pattern;
        if (b2 == null) return;
        c2.push(Ob(b2.source));
        h2 = h2 + 1;
      }
      return $("^(" + c2.join("|") + ")$", hg);
    });
    return;
  }
  if (32 == C2) {
    ja(p2, "values", function(r2) {
      var a3 = r2.def;
      var b2 = a3.in;
      if (X(b2) && X(b2._zod)) return r2 = b2._zod, r2.values;
    });
    ja(p2, "optin", function(r2) {
      var a3 = r2.def;
      var b2 = a3.in;
      if (X(b2) && X(b2._zod)) return r2 = b2._zod, r2.optin;
    });
    ja(p2, "optout", function(r2) {
      var a3 = r2.def;
      var b2 = a3.out;
      if (X(b2) && X(b2._zod)) return r2 = b2._zod, r2.optout;
    });
    return;
  }
  if (27 == C2) {
    ja(p2, "optin", function(r2) {
      var b2 = r2.def;
      var m2 = b2.innerType;
      if (X(m2) && X(m2._zod) && "defaulted" == m2._zod.optin) return "defaulted";
      return "optional";
    });
    ja(p2, "optout", function(r2) {
      var a3 = r2.def;
      var m2 = a3.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.optout;
    });
    ja(p2, "values", function(r2) {
      var a3 = r2.def;
      var m2 = a3.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.values;
    });
    return;
  }
  if (40 == C2) return;
  if (33 == C2) {
    ja(p2, "optin", function(r2) {
      var a3 = r2.def;
      var m2 = a3.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.optin;
    });
    ja(p2, "optout", function(r2) {
      var a3 = r2.def;
      var m2 = a3.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.optout;
    });
    ja(p2, "values", function(r2) {
      var a3 = r2.def;
      var m2 = a3.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.values;
    });
    return;
  }
  ja(p2, "pattern", function(r2) {
    let b2 = Ga;
    return ze(b2[+r2.id]);
  });
  0 != p2.optin ? v2.optin = Wc(p2) : ja(p2, "optin", function(r2) {
    let b2 = Ga;
    return Wc(b2[+r2.id]);
  });
  0 != p2.optout ? v2.optout = Xc(p2) : ja(p2, "optout", function(r2) {
    let b2 = Ga;
    return Xc(b2[+r2.id]);
  });
  p2.values === void 0 || (v2.values = p2.values);
};
var sb = (p2) => {
  var C2 = p2.kind;
  if (15 == C2) return true;
  if (16 == C2) return true;
  if (17 == C2) return true;
  if (18 == C2) return true;
  if (19 == C2) return true;
  if (20 == C2) return true;
  return false;
};
var Pb = (B2, a2, b2) => {
  if (a2 == null || !X(a2)) return false;
  if (X(a2._zod)) {
    B2 = va(a2);
    if (B2) return Yc(B2, b2);
    return false;
  }
  if (!Array.isArray(a2)) return false;
  var g2 = a2.length;
  var h2 = 0;
  while (h2 < g2) {
    if (Pb(B2, a2[h2], b2)) return true;
    h2 = h2 + 1;
  }
  return false;
};
var Yc = (p2, a2) => {
  var E2 = Ec.get(p2.handle);
  var L2;
  if (!(E2 === void 0) && !(E2 == null)) return true === E2;
  if (a2.has(p2.handle)) return true;
  a2.add(p2.handle);
  if (29 == p2.kind) {
    E2 = p2.handle._zod;
    E2 = Pb(p2, E2.innerType, a2);
  } else {
    var l2 = p2.def;
    L2 = l2.shape;
    if (X(L2) && !(L2 == null)) {
      var w2 = pa(L2);
      var g2 = w2.length;
      var E2 = false, h2 = 0;
      while (h2 < g2) {
        Pb(p2, L2[w2[h2]], a2) && (E2 = true);
        h2 = h2 + 1;
      }
    } else {
      E2 = false;
    }
    h2 = pa(l2);
    w2 = h2.length;
    L2 = 0;
    while (L2 < w2) {
      "shape" != h2[L2] && Pb(p2, l2[h2[L2]], a2) && (E2 = true);
      L2 = L2 + 1;
    }
  }
  a2.delete(p2.handle);
  Ec.set(p2.handle, E2);
  return E2;
};
var Zc = (t2) => {
  var a2 = [];
  var g2 = t2.length;
  var h2 = 0, K2;
  while (h2 < g2) {
    K2 = ia({}, t2[h2]);
    Array.isArray(K2.path) && (K2.path = K2.path.slice(0));
    a2.push(K2);
    h2 = h2 + 1;
  }
  return a2;
};
var De = (h2, e2) => {
  var a2 = Zc(h2);
  var g2 = a2.length;
  h2 = 0;
  while (h2 < g2) {
    e2.issues.push(a2[h2]);
    h2 = h2 + 1;
  }
};
var Ee = (p2, e2, f2) => {
  var b2 = p2.handle._zod;
  var a2 = b2.memoizer;
  if (a2 == null) return;
  if (a2.recursive === void 0) {
    a2.recursive = Yc(p2, la());
    if (!a2.recursive) return;
  } else {
    if (!a2.recursive) return;
  }
  var y2 = e2.value;
  if (y2 == null || "object" != typeof y2) return;
  if (f2 == null || !X(f2)) return;
  b2 = f2["~memo"];
  var c2, d2;
  b2 == null && (b2 = /* @__PURE__ */ new Map(), b2 = { buckets: b2, backEdges: void 0 }, f2["~memo"] = b2);
  a2.ctx === f2 ? c2 = a2.bucket : (c2 = b2.buckets.get(p2.handle), c2 == null && (c2 = /* @__PURE__ */ new Map(), b2.buckets.set(p2.handle, c2)), a2.ctx = f2, a2.bucket = c2);
  p2 = c2.get(y2);
  if (!(p2 === void 0) && !(p2 == null)) return e2.value = p2.value, !(p2.issues == null) ? (f2 = p2.issues, f2.length > 0 && De(p2.issues, e2)) : (e2.memo = true, (b2.backEdges === void 0 || b2.backEdges == null) && (b2.backEdges = la()), b2.backEdges.add(p2.value)), e2;
  a2.handoff = c2;
  p2 = a2.open;
  a2.openDepth = p2.length;
};
var cb = (p2, e2, a2) => {
  var c2 = p2.handle._zod;
  var b2 = c2.memoizer;
  if (b2 === void 0 || b2.handoff === void 0 || b2.handoff == null) return a2;
  c2 = b2.handoff;
  b2.handoff = void 0;
  p2 = { value: a2, issues: null };
  var d2 = e2.value;
  c2.set(d2, p2);
  c2 = b2.open;
  c2.push(p2);
  return a2;
};
var _c = (p2, e2) => {
  var b2 = p2.handle._zod;
  var a2 = b2.memoizer;
  if (a2 == null) return;
  a2.handoff = void 0;
  p2 = a2.open;
  b2 = "number" == typeof a2.openDepth ? +a2.openDepth | 0 : 0;
  Array.isArray(p2) && p2.length > b2 && (p2 = p2.pop(), a2 = e2.issues, a2.length > 0 ? p2.issues = Zc(e2.issues) : p2.issues = []);
};
var $c = (a2, b2, y2) => a2 ? { code: "too_big", maximum: 0 + b2, inclusive: true, input: y2, origin: "array" } : { code: "too_small", minimum: 0 + b2, inclusive: true, input: y2, origin: "array" };
var ad = (e2, a2, h2, b2, c2) => {
  var q2 = e2.value;
  var g2 = h2.length;
  var k2 = a2.length;
  h2 = 0;
  while (h2 < k2) {
    var d2 = b2[h2];
    var f2 = h2 < g2;
    var i2 = va(a2[h2]);
    var j2 = i2 ? i2.optin : 0;
    if (!f2 && h2 >= c2 && 1 == j2) {
      q2.length = h2;
      break;
    }
    if (!(d2 === void 0) && !(d2 == null) && d2.issues.length > 0) {
      if (!f2 && h2 >= c2) {
        q2.length = h2;
        break;
      }
      f2 = d2.issues;
      i2 = e2.issues;
      Xa(f2, i2, +(0 + h2));
    }
    !(d2 === void 0) && !(d2 == null) && (q2[h2] = d2.value);
    h2 = h2 + 1;
  }
  e2 = q2.length - 1 | 0;
  while (e2 >= g2) {
    h2 = va(a2[e2]);
    if (h2) {
      var P2 = null;
      if (1 == h2.optout && q2[e2] === void 0) {
        q2.length = e2;
        e2 = e2 - 1 | 0;
        continue;
      }
    }
    break;
  }
};
var db = (e2, E2) => {
  e2.value = E2.value;
  qd(E2.issues, e2.issues);
};
var bd = (p2, e2, a2, f2) => {
  var g2 = a2.length;
  var h2 = 0, C2, t2, b2, d2, c2;
  while (h2 < g2) {
    C2 = a2[h2];
    if (!(C2 === void 0) && !(C2 == null) && 0 == C2.issues.length) {
      db(e2, C2);
      return;
    }
    h2 = h2 + 1;
  }
  t2 = [];
  h2 = 0;
  while (h2 < g2) {
    C2 = a2[h2];
    !(C2 === void 0) && !(C2 == null) && !Ub(C2) && t2.push(C2);
    h2 = h2 + 1;
  }
  if (1 == t2.length) {
    db(e2, t2[0]);
    return;
  }
  b2 = [];
  h2 = 0;
  while (h2 < g2) {
    C2 = a2[h2];
    c2 = [];
    if (!(C2 === void 0) && !(C2 == null)) {
      t2 = C2.issues;
      d2 = t2.length;
      C2 = 0;
      while (C2 < d2) {
        c2.push(Ta(t2[C2], p2, f2));
        C2 = C2 + 1;
      }
    }
    b2.push(c2);
    h2 = h2 + 1;
  }
  e2.issues.push({ code: "invalid_union", errors: b2, path: [] });
};
var rf = (a2) => 0 == a2 ? "string" : 1 == a2 ? "number" : 2 == a2 ? "boolean" : 3 == a2 ? "bigint" : 4 == a2 ? "symbol" : 5 == a2 ? "date" : 6 == a2 ? "nan" : 7 == a2 ? "undefined" : 8 == a2 ? "null" : 9 == a2 ? "any" : 10 == a2 ? "unknown" : 11 == a2 ? "never" : 12 == a2 ? "void" : 13 == a2 ? "literal" : 14 == a2 ? "enum" : 15 == a2 ? "object" : 16 == a2 ? "array" : 17 == a2 ? "tuple" : 18 == a2 ? "record" : 19 == a2 ? "map" : 20 == a2 ? "set" : 21 == a2 ? "union" : 38 == a2 ? "union" : 22 == a2 ? "intersection" : 23 == a2 ? "optional" : 24 == a2 ? "nullable" : 25 == a2 ? "default" : 26 == a2 ? "prefault" : 27 == a2 ? "catch" : 28 == a2 ? "nonoptional" : 29 == a2 ? "lazy" : 30 == a2 ? "promise" : 31 == a2 ? "transform" : 32 == a2 ? "pipe" : 33 == a2 ? "readonly" : 34 == a2 ? "custom" : 35 == a2 ? "file" : 36 == a2 ? "custom" : 37 == a2 ? "success" : 39 == a2 ? "function" : 40 == a2 ? "template_literal" : "custom";
var da = (k2) => {
  let a2 = Ga, b2 = k2._zod;
  return a2[+b2.id];
};
var va = (k2) => {
  if (k2 == null || !X(k2)) return null;
  var a2 = k2._zod;
  if (a2 == null || a2.id === void 0) return null;
  k2 = +a2.id | 0;
  if (k2 < 0 || k2 >= Ga.length) return null;
  return Ga[k2];
};
var Ef = (u2) => {
  if (u2 === void 0) return "undefined";
  if (u2 === null) return "null";
  var a2 = typeof u2;
  if ("number" == a2) {
    if (true === Number.isNaN(u2)) return "nan";
    if (!La(u2)) return u2;
    return "number";
  }
  if ("object" == a2) {
    if (u2 == null) return "null";
    if (Array.isArray(u2)) return "array";
    a2 = ga.getPrototypeOf(u2);
    if (!(a2 === ga.prototype) && "function" == typeof u2.constructor) {
      var b2 = u2.constructor;
      a2 = b2.name;
      if (a2.length > 0) return a2;
    }
    return "object";
  }
  return a2;
};
var Bf = (a2) => "regex" == a2 ? "input" : "email" == a2 ? "email address" : "url" == a2 ? "URL" : "emoji" == a2 ? "emoji" : "uuid" == a2 ? "UUID" : "uuidv4" == a2 ? "UUIDv4" : "uuidv6" == a2 ? "UUIDv6" : "uuidv7" == a2 ? "UUIDv7" : "nanoid" == a2 ? "nanoid" : "guid" == a2 ? "GUID" : "cuid" == a2 ? "cuid" : "cuid2" == a2 ? "cuid2" : "ulid" == a2 ? "ULID" : "xid" == a2 ? "XID" : "ksuid" == a2 ? "KSUID" : "datetime" == a2 ? "ISO datetime" : "date" == a2 ? "ISO date" : "time" == a2 ? "ISO time" : "duration" == a2 ? "ISO duration" : "ipv4" == a2 ? "IPv4 address" : "ipv6" == a2 ? "IPv6 address" : "mac" == a2 ? "MAC address" : "cidrv4" == a2 ? "IPv4 range" : "cidrv6" == a2 ? "IPv6 range" : "base64" == a2 ? "base64-encoded string" : "base64url" == a2 ? "base64url-encoded string" : "json_string" == a2 ? "JSON string" : "e164" == a2 ? "E.164 number" : "credit_card" == a2 ? "credit card number" : "jwt" == a2 ? "JWT" : "template_literal" == a2 ? "input" : a2;
var _f = (j2) => {
  if ("bigint" == typeof j2) return j2 + "n";
  if ("string" == typeof j2) return kg + j2 + kg;
  if (j2 === void 0) return "undefined";
  if (j2 == null) return "null";
  return j2;
};
var cd = (a2, b2) => {
  var g2 = a2.length;
  var q2 = hg, h2 = 0;
  while (h2 < g2) {
    h2 > 0 && (q2 = q2 + b2);
    q2 = q2 + _f(a2[h2]);
    h2 = h2 + 1;
  }
  return q2;
};
var dd = (H2) => {
  var h2 = H2.code;
  if ("invalid_type" == h2) {
    var g2 = H2.expected;
    "nan" == g2 && (g2 = "NaN");
    h2 = Ef(H2.input);
    "nan" == h2 && (h2 = "NaN");
    "number" == h2 && "number" == typeof H2.input && !La(H2.input) && (h2 = H2.input);
    return lg + g2 + ", received " + h2;
  }
  if ("invalid_value" == h2) {
    h2 = H2.values;
    if (h2 == null || !Array.isArray(h2)) return ig;
    if (1 == h2.length) return lg + _f(h2[0]);
    return "Invalid option: expected one of " + cd(h2, "|");
  }
  if ("too_big" == h2) {
    H2.exact ? h2 = "exactly " : (h2 = H2.inclusive, h2 = !(false === h2) ? "<=" : "<");
    var a2 = !(H2.origin === void 0) ? H2.origin : "value";
    if ("string" == a2) return "Too big: expected string to have " + h2 + H2.maximum + " characters";
    if ("array" == a2) return "Too big: expected array to have " + h2 + H2.maximum + mg;
    if ("set" == a2) return "Too big: expected set to have " + h2 + H2.maximum + mg;
    if ("map" == a2) return "Too big: expected map to have " + h2 + H2.maximum + " entries";
    if ("file" == a2) return "Too big: expected file to have " + h2 + H2.maximum + " bytes";
    h2 = "Too big: expected " + a2 + " to be " + h2;
    return h2 + H2.maximum;
  }
  if ("too_small" == h2) {
    H2.exact ? h2 = "exactly " : (h2 = H2.inclusive, h2 = !(false === h2) ? ">=" : ">");
    a2 = !(H2.origin === void 0) ? H2.origin : "value";
    if ("string" == a2) return "Too small: expected string to have " + h2 + H2.minimum + " characters";
    if ("array" == a2) return "Too small: expected array to have " + h2 + H2.minimum + mg;
    if ("set" == a2) return "Too small: expected set to have " + h2 + H2.minimum + mg;
    if ("map" == a2) return "Too small: expected map to have " + h2 + H2.minimum + " entries";
    if ("file" == a2) return "Too small: expected file to have " + h2 + H2.minimum + " bytes";
    h2 = "Too small: expected " + a2 + " to be " + h2;
    return h2 + H2.minimum;
  }
  if ("invalid_format" == h2) {
    h2 = H2.format;
    if ("starts_with" == h2) return 'Invalid string: must start with "' + H2.prefix + kg;
    if ("ends_with" == h2) return 'Invalid string: must end with "' + H2.suffix + kg;
    if ("includes" == h2) return 'Invalid string: must include "' + H2.includes + kg;
    if ("regex" == h2) return "Invalid string: must match pattern " + H2.pattern;
    return "Invalid " + Bf(h2);
  }
  if ("not_multiple_of" == h2) return "Invalid number: must be a multiple of " + H2.divisor;
  if ("unrecognized_keys" == h2) return h2 = H2.keys, H2 = h2.length > 1 ? "s" : hg, "Unrecognized key" + H2 + ": " + cd(h2, ", ");
  if ("invalid_key" == h2) return "Invalid key in " + H2.origin;
  if ("invalid_union" == h2) {
    Array.isArray(H2.options) ? (a2 = H2.options, h2 = a2.length > 0) : h2 = false;
    if (h2) {
      a2 = H2.options;
      g2 = a2.length;
      H2 = hg;
      h2 = 0;
      while (h2 < g2) {
        h2 > 0 && (H2 = H2 + " | ");
        H2 = H2 + "'" + a2[h2] + "'";
        h2 = h2 + 1;
      }
      return "Invalid discriminator value. Expected " + H2;
    }
    h2 = H2.inclusive;
    if (false === h2) return "Invalid input: more than one option matched";
    return ig;
  }
  if ("invalid_element" == h2) return "Invalid value in " + H2.origin;
  if ("custom" == h2) {
    if ("string" == typeof H2.message) return H2.message;
    return ig;
  }
  return ig;
};
var Ta = /* @__PURE__ */ (function() {
  let a2 = (e2) => {
    if (e2 == null) return;
    if ("string" == typeof e2) return e2;
    if (X(e2) && "string" == typeof e2.message) return e2.message;
  };
  let b2 = (k2) => {
    if (k2 == null || !X(k2)) return;
    var v2 = k2._zod;
    if (v2 == null) return;
    k2 = v2.def;
    return k2.error;
  };
  let c2 = (e2, f2) => {
    var g2;
    if ("string" == typeof e2.message && e2.message.length > 0) return e2.message;
    g2 = b2(e2.inst);
    var h2;
    if ("function" == typeof g2 && !((h2 = a2(g2(e2))) === void 0)) return h2;
    if ("string" == typeof g2) return g2;
    g2 = e2.schema;
    if (!(g2 === e2.inst)) {
      g2 = b2(e2.schema);
      if ("function" == typeof g2 && !((h2 = a2(g2(e2))) === void 0)) return h2;
      if ("string" == typeof g2) return g2;
    }
    if (!(f2 === void 0) && "function" == typeof f2.error && !((g2 = a2(f2.error(e2))) === void 0)) return g2;
    if ("function" == typeof Ab) {
      var x2 = Ab;
      f2 = a2(Ab(e2));
      if (!(f2 === void 0)) return f2;
    }
    if ("function" == typeof Za) {
      var A2 = Za;
      f2 = a2(Za(e2));
      if (!(f2 === void 0)) return f2;
    }
    return dd(e2);
  };
  let d2 = (e2) => {
    var k2 = e2.inst;
    if (k2 === void 0) return;
    if (k2 == null) return;
    if (!X(k2)) return;
    var v2 = k2._zod;
    if (v2 === void 0) return;
    if (v2 == null) return;
    var f2 = v2.traits;
    if (f2 === void 0) return;
    if (f2 == null) return;
    if (!f2.has("$ZodType")) return;
    f2.has("$ZodCheck") ? e2.schema === void 0 && (e2.schema = k2) : e2.schema = k2;
  };
  return function(e2, H2, f2) {
    e2.inst === void 0 && H2 && (e2.inst = H2.handle);
    d2(e2);
    var j2 = c2(e2, f2);
    H2 = {};
    var w2 = pa(e2);
    var g2 = w2.length;
    var h2 = 0, i2;
    while (h2 < g2) {
      i2 = w2[h2];
      "inst" != i2 && "schema" != i2 && "continue" != i2 && "input" != i2 && (H2[i2] = e2[i2]);
      h2 = h2 + 1;
    }
    (H2.path === void 0 || H2.path == null) && (H2.path = []);
    H2.message = j2;
    !(f2 === void 0) && !(f2 == null) && f2.reportInput && (H2.input = e2.input);
    return H2;
  };
})();
var tb = (H2, a2) => {
  var O2 = H2.path;
  var b2;
  O2 == null && (O2 = [], H2.path = O2);
  O2.unshift(a2);
};
var Aa = (a2, y2) => {
  var H2 = { expected: a2, code: "invalid_type", input: y2 };
  if ("number" == a2 && "number" == typeof y2) {
    if (true === Number.isNaN(y2)) {
      H2.received = "NaN";
    } else {
      var i2 = Number;
      La(y2) || (H2.received = y2);
    }
  }
  "date" == a2 && qa(Date, y2) && true === Number.isNaN(y2.getTime()) && (H2.received = "Invalid Date");
  return H2;
};
var qf = (a2, H2, b2, c2, d2, y2) => {
  var e2 = a2 ? "too_big" : "too_small";
  qa(Date, b2) && (b2 = b2.getTime());
  H2 = { origin: H2, code: e2 };
  a2 ? H2.maximum = b2 : H2.minimum = b2;
  H2.inclusive = c2;
  H2.input = y2;
  d2 && (H2.exact = true);
  H2.continue = true;
  return H2;
};
var eb = (e2, a2, b2, c2, d2, f2, y2) => {
  e2.issues.push(qf(a2, b2, c2, d2, f2, y2));
};
var oc = (j2) => "bigint" == typeof j2 ? j2 : j2;
var pc = (k2, A2) => {
  A2 == null && (A2 = []);
  var a2 = la();
  a2.add("$ZodError");
  a2.add("ZodError");
  k2.name = "ZodError";
  ba(k2, "issues", Lb(A2));
  ba(k2, "_zod", Lb({ def: A2, traits: a2 }));
  ba(k2, "message", { enumerable: true, configurable: true, get: function() {
    var v2 = this._zod;
    if (!(v2.message === void 0)) return v2.message;
    var a3 = v2.def;
    v2.message = JSON.stringify(a3, function(C2, F2) {
      return oc(F2);
    }, 2);
    return v2.message;
  }, set: function(j2) {
    let b2 = this._zod;
    b2.message = j2;
  } });
  return k2;
};
var Fe = () => {
  let a2 = ua.prototype, b2 = Error.prototype;
  ga.setPrototypeOf(a2, b2);
  a2 = ua;
  ba(a2, "name", Fa("ZodError"));
  a2 = ua;
  ba(a2, "init", Fa(function(k2, t2) {
    return pc(k2, t2);
  }));
  a2 = Ha.prototype;
  b2 = ua.prototype;
  ga.setPrototypeOf(a2, b2);
  ba(Ha, "name", Fa("ZodError"));
  a2 = Ha;
  ba(a2, "init", ua.init);
  a2 = ua;
  b2 = Symbol.hasInstance;
  ba(a2, b2, Fa(function(k2) {
    if (k2 == null || !X(k2)) return false;
    var v2 = k2._zod;
    if (v2 == null) return false;
    return !!v2.traits.has("ZodError");
  }));
  a2 = Ha;
  b2 = Symbol.hasInstance;
  ba(a2, b2, Fa(function(k2) {
    if (qa(Error, k2)) return true;
    if (k2 == null || !X(k2)) return false;
    var v2 = k2._zod;
    if (v2 == null) return false;
    return !!v2.traits.has("ZodError");
  }));
  a2 = ua.prototype;
  ba(a2, "toString", { configurable: true, enumerable: false, get: function() {
    var a3 = this;
    let j2 = function() {
      return a3.message;
    };
    ba(a3, "toString", { value: j2, configurable: true, writable: true });
    return j2;
  }, set: function(j2) {
    ba(this, "toString", { value: j2, configurable: true, writable: true });
  } });
  a2 = ua.prototype;
  Gf(a2, "format", function(a3) {
    return function(c2) {
      let b3 = { _errors: [] };
      Qb(a3.issues, [], b3, c2);
      return b3;
    };
  }, false);
  a2 = ua.prototype;
  Gf(a2, "flatten", function(a3) {
    return function(c2) {
      return ed(a3, c2);
    };
  }, false);
  a2 = ua.prototype;
  Gf(a2, "addIssue", function(a3) {
    return function(H2) {
      let b3 = a3.issues;
      b3.push(H2);
      b3 = a3._zod;
      H2 = a3.issues;
      b3.message = JSON.stringify(H2, function(C2, F2) {
        return oc(F2);
      }, 2);
    };
  }, false);
  a2 = ua.prototype;
  Gf(a2, "addIssues", function(a3) {
    return function(t2) {
      var g2 = t2.length;
      var h2 = 0;
      while (h2 < g2) {
        a3.issues.push(t2[h2]);
        h2 = h2 + 1;
      }
      h2 = a3._zod;
      t2 = a3.issues;
      h2.message = JSON.stringify(t2, function(C2, F2) {
        return oc(F2);
      }, 2);
    };
  }, false);
  a2 = ua.prototype;
  ba(a2, "isEmpty", { enumerable: false, configurable: true, get: function() {
    let b3 = this.issues;
    return 0 == b3.length;
  } });
};
var sf = (a2, H2) => {
  if ("function" == typeof a2) return a2(H2);
  return H2.message;
};
var Yf = (a2, n2, b2) => {
  Da.call(a2, n2) || Ca(a2, n2, b2());
  return a2[n2];
};
var ed = (O2, a2) => {
  var b2 = {};
  var d2 = [];
  var t2 = O2.issues;
  var g2 = t2.length;
  var h2 = 0, H2, c2;
  while (h2 < g2) {
    H2 = t2[h2];
    c2 = sf(a2, H2);
    O2 = H2.path;
    Array.isArray(O2) && O2.length > 0 ? (H2 = O2[0], Yf(b2, H2, function() {
      return [];
    }).push(c2)) : d2.push(c2);
    h2 = h2 + 1;
  }
  return { formErrors: d2, fieldErrors: b2 };
};
var Qb = (t2, a2, b2, c2) => {
  var g2 = t2.length;
  var h2 = 0, H2, e2, i2, f2, d2, j2, k2, l2;
  while (h2 < g2) {
    H2 = t2[h2];
    d2 = H2.code;
    if ("invalid_union" == d2 && Array.isArray(H2.errors) && H2.errors.length > 0) {
      e2 = H2.errors;
      f2 = e2.length;
      d2 = 0;
      while (d2 < f2) {
        j2 = a2.concat(H2.path);
        Qb(e2[d2], j2, b2, c2);
        d2 = d2 + 1;
      }
    } else {
      if ("invalid_key" == d2 || "invalid_element" == d2) {
        d2 = a2.concat(H2.path);
        Qb(H2.issues, d2, b2, c2);
      } else {
        e2 = a2.concat(H2.path);
        if (!Array.isArray(e2) || 0 == e2.length) {
          b2._errors.push(sf(c2, H2));
        } else {
          j2 = e2.length;
          i2 = b2;
          d2 = 0;
          while (d2 < j2) {
            k2 = e2[d2];
            l2 = d2 == (j2 - 1 | 0);
            "_errors" === k2 ? (l2 && i2._errors.push(sf(c2, H2)), f2 = i2) : (f2 = Yf(i2, k2, function() {
              return { _errors: [] };
            }), l2 && f2._errors.push(sf(c2, H2)));
            i2 = f2;
            d2 = d2 + 1;
          }
        }
      }
    }
    h2 = h2 + 1;
  }
};
var qc = (t2, a2, b2, c2) => {
  var g2 = t2.length;
  var h2 = 0, H2, e2, i2, k2, d2, m2, l2, f2, j2;
  while (h2 < g2) {
    H2 = t2[h2];
    d2 = H2.code;
    if ("invalid_union" == d2 && Array.isArray(H2.errors) && H2.errors.length > 0) {
      i2 = H2.errors;
      e2 = i2.length;
      d2 = 0;
      while (d2 < e2) {
        k2 = i2[d2];
        qc(k2, a2.concat(H2.path), b2, c2);
        d2 = d2 + 1;
      }
    } else {
      if ("invalid_key" == d2 || "invalid_element" == d2) {
        d2 = H2.issues;
        qc(d2, a2.concat(H2.path), b2, c2);
      } else {
        j2 = a2.concat(H2.path);
        if (!Array.isArray(j2) || 0 == j2.length) {
          b2.errors.push(sf(c2, H2));
        } else {
          k2 = j2.length;
          d2 = b2;
          i2 = 0;
          while (i2 < k2) {
            e2 = j2[i2];
            m2 = i2 == (k2 - 1 | 0);
            "string" == typeof e2 ? ((d2.properties === void 0 || d2.properties == null) && (d2.properties = {}), l2 = d2.properties, e2 = Yf(l2, e2, function() {
              return { errors: [] };
            }), d2 = e2) : ((d2.items === void 0 || d2.items == null) && (d2.items = []), f2 = d2.items, (f2[e2] === void 0 || f2[e2] == null) && (f2[e2] = { errors: [] }), e2 = f2[e2], d2 = e2);
            m2 && d2.errors.push(sf(c2, H2));
            i2 = i2 + 1;
          }
        }
      }
    }
    h2 = h2 + 1;
  }
};
var fd = (O2) => {
  var b2 = [];
  if (!Array.isArray(O2)) return hg;
  var g2 = O2.length;
  var h2 = 0, a2, c2;
  while (h2 < g2) {
    a2 = O2[h2];
    X(a2) && !(a2 == null) && !(a2.key === void 0) && (c2 = a2.key, a2 = c2);
    "number" == typeof a2 ? b2.push("[" + a2 + "]") : "symbol" == typeof a2 ? b2.push("[" + JSON.stringify(String(a2), void 0, void 0) + "]") : $("[^\\w$]", hg).test(a2) ? b2.push("[" + JSON.stringify(a2, void 0, void 0) + "]") : (b2.length > 0 && b2.push("."), b2.push(a2));
    h2 = h2 + 1;
  }
  return b2.join(hg);
};
var Rb = () => {
  var c2 = globalThis;
  var a2 = c2.__zod_globalConfig;
  var b2;
  a2 == null && (a2 = {}, c2.__zod_globalConfig = a2);
  return a2;
};
var Ge = () => {
  let b2 = {};
  ba(b2, "value", { enumerable: true, configurable: true, get: function() {
    var b3 = Rb();
    var a3;
    if (X(b3) && !!b3.jitless) return false;
    try {
      new globalThis.Function(hg);
      return true;
    } catch {
      return false;
    }
  } });
  let a2 = { allowsEval: b2, base64ToUint8Array: function(a3) {
    a3 = globalThis.atob(a3);
    var b3 = new globalThis.Uint8Array(a3.length);
    var g2 = a3.length;
    var h2 = 0;
    var l2 = globalThis;
    var m2 = globalThis;
    while (h2 < g2) {
      b3[h2] = a3.charCodeAt(h2);
      h2 = h2 + 1;
    }
    return b3;
  }, uint8ArrayToBase64: function(a3) {
    var g2 = a3.length;
    var b3 = hg, h2 = 0;
    while (h2 < g2) {
      b3 = b3 + globalThis.String.fromCharCode(a3[h2]);
      h2 = h2 + 1;
    }
    return globalThis.btoa(b3);
  } };
  a2.base64urlToUint8Array = function(c2) {
    var b3 = c2.replace($("-", "g"), "+").replace($("_", "g"), "/");
    c2 = b3.length % 4;
    if (0 != c2) {
      var d2 = 4 - c2;
      c2 = 0;
      while (c2 < d2) {
        b3 = b3 + "=";
        c2 = c2 + 1;
      }
    }
    return a2.base64ToUint8Array(b3);
  };
  a2.uint8ArrayToBase64url = function(c2) {
    return a2.uint8ArrayToBase64(c2).replace($("\\+", "g"), "-").replace($("/", "g"), "_").replace($("=", "g"), hg);
  };
  a2.hexToUint8Array = function(g2) {
    var b3 = g2.replace($("^0x", hg), hg);
    var h2 = globalThis.Uint8Array;
    g2 = b3.length / 2 | 0;
    var c2 = new h2(g2);
    h2 = 0;
    var n2 = globalThis;
    while (h2 < g2) {
      var a3 = h2 * 2 | 0;
      c2[h2] = Number.parseInt(b3.slice(a3, a3 + 2 | 0), 16);
      h2 = h2 + 1;
    }
    return c2;
  };
  a2.uint8ArrayToHex = function(a3) {
    var c2 = [];
    var g2 = a3.length;
    var h2 = 0, b3;
    while (h2 < g2) {
      b3 = a3[h2].toString(16);
      1 == b3.length && (b3 = "0" + b3);
      c2.push(b3);
      h2 = h2 + 1;
    }
    return c2.join(hg);
  };
  return a2;
};
var Ua = () => {
  var a2 = Rb();
  a2.localeError === void 0 ? (Za = function(H2) {
    return dd(H2);
  }, a2.localeError = Za) : Za = a2.localeError;
  "function" == typeof a2.customError && (Ab = a2.customError);
};
var gd = (a2, b2) => {
  let c2 = { _map: a2, _idmap: b2, add: function(i2, d2) {
    var e2 = a2;
    e2.set(i2, d2);
    if (X(d2) && !(d2 == null) && !(d2.id === void 0)) {
      var n2 = b2;
      var o2 = d2.id;
      n2.set(o2, i2);
    }
    return i2;
  }, clear: function() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
    a2 = this._map;
    b2 = this._idmap;
    return this;
  }, remove: function(i2) {
    var d2 = a2.get(i2);
    var q2;
    X(d2) && !(d2 == null) && !(d2.id === void 0) && (q2 = b2, q2.delete(d2.id));
    a2.delete(i2);
  }, get: function(i2) {
    var e2 = a2.get(i2);
    var c3 = void 0;
    var F2;
    X(i2) && X(i2._zod) && (F2 = i2._zod, c3 = F2.parent);
    if (!(c3 === void 0) && !(c3 == null)) {
      F2 = this.get(c3);
      var d2 = {};
      var G2;
      X(F2) && !(F2 == null) && ia(d2, F2);
      var x2 = Reflect;
      x2.deleteProperty(d2, "id");
      X(e2) && !(e2 == null) && ia(d2, e2);
      if (0 == pa(d2).length) return;
      return d2;
    }
    return e2;
  }, has: function(i2) {
    return !!a2.has(i2);
  } };
  return c2;
};
var Va = () => {
  var a2 = globalThis;
  var b2;
  if (!(a2.__zod_globalRegistry === void 0) && !(a2.__zod_globalRegistry == null)) return _a = a2.__zod_globalRegistry, _a;
  if (_a === void 0) {
    b2 = /* @__PURE__ */ new WeakMap();
    var i2 = _a;
    var o2 = Map;
    var q2 = WeakMap;
    _a = gd(b2, /* @__PURE__ */ new Map());
    a2.__zod_globalRegistry = _a;
  }
  return _a;
};
var Ma = (f2) => {
  if (f2 == null) return false;
  return "backward" == f2.direction;
};
var He = (j2) => {
  if (Array.isArray(j2)) return j2.slice(0);
  if (qa(Map, j2)) return new Map(j2);
  if (qa(Set, j2)) return new Set(j2);
  if (X(j2) && !Array.isArray(j2) && !qa(Date, j2)) {
    var a2 = ga.getPrototypeOf(j2);
    if (a2 == null || a2 === ga.prototype) return ia({}, j2);
  }
  return j2;
};
var rc = (i2) => {
  var j2 = i2.def.defaultValue;
  "function" == typeof j2 && (j2 = j2());
  return He(j2);
};
var pf = (D2) => "min_length" == D2 ? "$ZodCheckMinLength" : "max_length" == D2 ? "$ZodCheckMaxLength" : "length_equals" == D2 ? "$ZodCheckLengthEquals" : "greater_than" == D2 ? "$ZodCheckGreaterThan" : "less_than" == D2 ? "$ZodCheckLessThan" : "multiple_of" == D2 ? "$ZodCheckMultipleOf" : "min_size" == D2 ? "$ZodCheckMinSize" : "max_size" == D2 ? "$ZodCheckMaxSize" : "size_equals" == D2 ? "$ZodCheckSizeEquals" : "includes" == D2 ? "$ZodCheckIncludes" : "starts_with" == D2 ? "$ZodCheckStartsWith" : "ends_with" == D2 ? "$ZodCheckEndsWith" : "string_format" == D2 ? "$ZodCheckStringFormat" : "overwrite" == D2 ? "$ZodCheckOverwrite" : "mime_type" == D2 ? "$ZodCheckMimeType" : "number_format" == D2 ? "$ZodCheckNumberFormat" : "lowercase" == D2 ? "$ZodCheckStringFormat" : "uppercase" == D2 ? "$ZodCheckStringFormat" : "$ZodCheck";
var Tf = (e2) => {
  var a2 = e2.value;
  if (a2 == null) return false;
  return !(a2.length === void 0);
};
var Ff = (e2) => {
  var a2 = e2.value;
  if (a2 == null) return false;
  return !(a2.size === void 0);
};
var ea = (D2, Q2) => {
  Q2.check = D2;
  Q2.when === void 0 && ("min_length" == D2 || "max_length" == D2 || "length_equals" == D2 ? Q2.when = function(e2) {
    return Tf(e2) ? e2 : void 0;
  } : ("min_size" == D2 || "max_size" == D2 || "size_equals" == D2) && (Q2.when = function(e2) {
    return Ff(e2) ? e2 : void 0;
  }));
  var a2 = pf(D2);
  D2 = la();
  D2.add("$ZodCheck");
  D2.add(a2);
  var v2 = { def: Q2, onattach: [], traits: D2 };
  D2 = { def: Q2 };
  Q2 = function() {
    return D2;
  };
  ba(Q2, "name", Fa(a2));
  D2.constructor = Q2;
  ba(D2, "_zod", Lb(v2));
  $f(D2);
  return D2;
};
var ub = (x2, s2) => {
  var Q2 = { check: "custom" };
  X(s2) && !(s2 == null) && ia(Q2, s2);
  s2 = ea("custom", Q2);
  Q2 = s2._zod;
  Q2.check = x2;
  return s2;
};
var Hf = (a2, b2) => {
  var c2 = globalThis.Math;
  a2 = a2 / b2;
  c2 = +c2.round(a2);
  b2 = a2 < 0 ? 0 - a2 : a2;
  b2 > 1 || (b2 = 1);
  var d2 = +Number.EPSILON * b2;
  b2 = a2 - c2;
  b2 < 0 && (b2 = 0 - b2);
  if (b2 < d2) return 0;
  return a2 - c2;
};
var xa = (k2, a2) => {
  var P2 = da(k2);
  var l2 = P2.def;
  !(a2 === void 0) && X(a2) && (l2 = {}, qb(l2, P2.def), qb(l2, a2));
  l2 = new P2.ctor(l2);
  a2 === void 0 && (a2 = l2._zod, a2.parent = k2);
  return l2;
};
var fa = (k2, a2) => {
  var b2 = da(k2).def.checks;
  var c2;
  b2 = b2 === void 0 || !Array.isArray(b2) ? [] : b2.slice(0);
  b2.push(a2);
  a2 = xa(k2, { checks: b2 });
  b2 = a2._zod;
  b2.parent = k2;
  return a2;
};
var ka = (i2, n2) => va(i2.def[n2]);
var sc = (I2) => {
  if (X(I2) && !(I2._zod === void 0) && X(I2._zod) && !(I2._zod.def === void 0)) {
    var a2 = I2._zod;
    return a2.def;
  }
  return X(I2) && !(I2.def === void 0) ? I2.def : I2;
};
var tc = (a2) => {
  var b2 = 0, o2, c2;
  while (29 == a2.kind && b2 < 64) {
    o2 = void 0;
    X(a2.handle) && X(a2.handle._zod) && (c2 = a2.handle._zod, o2 = c2.innerType);
    if (o2 == null) {
      o2 = a2.def.getter;
      if (!("function" == typeof o2)) break;
      o2 = o2();
    }
    o2 = va(o2);
    o2 ? (a2 = o2, b2 = b2 + 1 | 0) : b2 = 64;
  }
  return a2;
};
var ta = (e2, a2, b2) => {
  var K2 = {};
  "url" != a2 && "jwt" != a2 && "ipv6" != a2 && "cidrv6" != a2 && "template_literal" != a2 && (K2.origin = "string");
  K2.code = "invalid_format";
  K2.format = a2;
  !(b2 === void 0) && X(b2) && ia(K2, b2);
  K2.continue === void 0 && (K2.continue = true);
  a2 = e2.issues;
  a2.push(K2);
};
var Sb = (e2, h2, k2) => {
  var t2 = e2.issues;
  var g2 = t2.length;
  while (h2 < g2) {
    e2 = t2[h2];
    e2.inst === void 0 && (e2 = t2[h2], e2.inst = k2);
    h2 = h2 + 1 | 0;
  }
};
var hd = (K2, e2, y2, k2, N2, a2) => {
  var b2 = e2.issues;
  if (b2.length != a2) return;
  if (K2) return;
  K2 = [];
  Array.isArray(N2.path) && (K2 = N2.path.slice(0));
  K2 = { code: "custom", input: y2, inst: k2, path: K2, continue: !N2.abort };
  N2.params === void 0 || (K2.params = N2.params);
  y2 = e2.issues;
  y2.push(K2);
};
var xf = (y2) => {
  if (!$("^\\d(?:[ -]?\\d){11,18}$", hg).test(y2)) return false;
  var g2 = y2.length;
  var b2 = hg, a2 = 0, h2, c2;
  while (a2 < g2) {
    h2 = y2.slice(a2, a2 + 1);
    h2 >= "0" && h2 <= "9" && (b2 = b2 + h2);
    a2 = a2 + 1;
  }
  h2 = b2.length - 1;
  a2 = 0;
  g2 = false;
  while (h2 >= 0) {
    y2 = +Number(b2.slice(h2, h2 + 1 | 0)) | 0;
    if (g2) {
      var A2 = Number;
      var C2 = void 0;
      y2 = y2 * 2 | 0;
      y2 > 9 && (y2 = y2 - 9 | 0);
    }
    a2 = a2 + y2 | 0;
    g2 = !g2;
    h2 = h2 - 1;
  }
  while (a2 >= 10) a2 = a2 - 10;
  return 0 == a2;
};
var Rf = (a2, b2) => {
  var c2 = a2.split(".");
  if (3 != c2.length) return false;
  a2 = c2[0];
  if (a2 == null || 0 == a2.length) return false;
  try {
    var A2 = globalThis;
    c2 = A2.JSON;
    var B2 = globalThis;
    var i2 = B2.atob;
    var D2 = i2(a2);
    var E2 = c2.parse(D2);
    var S2 = E2;
    var C2 = void 0;
    if (!X(S2) || S2 == null) return false;
    if (Da.call(S2, "typ") && "JWT" != S2.typ) return false;
    if (S2.alg === void 0) return false;
    if (!(b2 === void 0) && !(b2 == null) && "string" == typeof b2 && S2.alg != b2) return false;
    return true;
  } catch {
    return false;
  }
};
var id = (u2) => {
  if (0 == u2.length) return true;
  if ($("\\s", hg).test(u2)) return false;
  var a2 = 0, h2 = 0;
  while (h2 < u2.length) {
    a2 = a2 + 1 | 0;
    4 == a2 && (a2 = 0);
    h2 = h2 + 1;
  }
  if (0 != a2) return false;
  try {
    globalThis.atob(u2);
    return true;
  } catch {
    return false;
  }
};
var Of = (u2) => {
  if (!$("^[A-Za-z0-9_-]*$", hg).test(u2)) return false;
  u2 = u2.replace($("-", "g"), "+").replace($("_", "g"), "/");
  var a2 = 0, h2 = 0;
  while (h2 < u2.length) {
    a2 = a2 + 1 | 0;
    4 == a2 && (a2 = 0);
    h2 = h2 + 1;
  }
  1 == a2 && (u2 = u2 + "===");
  2 == a2 && (u2 = u2 + "==");
  3 == a2 && (u2 = u2 + "=");
  return id(u2);
};
var jd = (j2) => {
  if (!$("^[0-9a-fA-F:.]+$", hg).test(j2)) return false;
  try {
    new URL("http://[" + j2 + "]");
    return true;
  } catch {
    return false;
  }
};
var Sf = (j2) => {
  j2 = j2.split("/");
  if (2 != j2.length) return false;
  var a2 = j2[1];
  if (0 == a2.length) return false;
  var b2 = Number(a2);
  if (b2 != a2) return false;
  a2 = +b2;
  if (a2 < 0) return false;
  if (a2 > 128) return false;
  return jd(j2[0]);
};
var Uf = (N2, e2, j2) => {
  var a2 = j2.trim();
  if (!N2.normalize && !(N2.protocol === void 0) && !(N2.protocol == null) && !$("^https?:\\/\\/", "i").test(a2)) {
    ta(e2, "url", void 0);
    return;
  }
  var la2;
  try {
    la2 = new URL(a2);
  } catch {
    ta(e2, "url", void 0);
    return;
  }
  if (!(N2.hostname === void 0) && !(N2.hostname == null)) {
    j2 = N2.hostname;
    j2.lastIndex = 0;
    var R2 = la2.hostname;
    j2.test(R2) || ta(e2, "url", { note: "Invalid hostname", pattern: j2.source });
  }
  !(N2.protocol === void 0) && !(N2.protocol == null) && (R2 = N2.protocol, j2 = la2.protocol, j2.endsWith(":") && (j2 = j2.slice(0, j2.length - 1)), R2.lastIndex = 0, R2.test(j2) || ta(e2, "url", { note: "Invalid protocol", pattern: R2.source }));
  e2.value = a2.replace($("[\\t\\n\\r]", "g"), hg);
  !N2.normalize || (e2.value = la2.href);
};
var kd = (I2, e2, f2) => {
  var j2;
  if (X(I2) && X(I2._zod) && "function" == typeof I2._zod.check) {
    var N2 = I2._zod;
    j2 = N2.check.call(I2, e2);
    if (aa(j2)) {
      if (!(f2 === void 0) && false === f2.async) throw new Error(bg);
      e2.$pending = j2;
    }
    return;
  }
  N2 = sc(I2);
  var z2 = N2.check;
  j2 = e2.value;
  var b2, c2, d2;
  if ("min_length" == z2 || "max_length" == z2 || "length_equals" == z2) {
    f2 = "string" == typeof j2;
    if (!f2 && !Array.isArray(j2)) return;
    I2 = j2.length;
    f2 && (I2 = Array.from(j2).length);
    f2 = Array.isArray(j2) ? "array" : "string";
    "min_length" == z2 && I2 < +N2.minimum && (b2 = e2.issues, b2.push(qf(false, f2, +N2.minimum, true, false, j2)));
    "max_length" == z2 && I2 > +N2.maximum && (b2 = e2.issues, b2.push(qf(true, f2, +N2.maximum, true, false, j2)));
    "length_equals" == z2 && I2 != N2.length && (I2 < N2.length ? (I2 = e2.issues, I2.push(qf(false, f2, N2.length, true, true, j2))) : (I2 = e2.issues, I2.push(qf(true, f2, N2.length, true, true, j2))));
    return;
  }
  if ("min_size" == z2 || "max_size" == z2 || "size_equals" == z2) {
    if (Array.isArray(j2)) {
      I2 = j2.length;
    } else {
      if (X(j2) && !(j2.size === void 0)) {
        I2 = +j2.size;
      } else {
        return;
      }
    }
    f2 = Array.isArray(j2) ? "array" : "set";
    qa(Map, j2) && (f2 = "map");
    b2 = globalThis.File;
    !(b2 === void 0) && qa(b2, j2) && (f2 = "file");
    "min_size" == z2 && I2 < +N2.minimum && eb(e2, false, f2, N2.minimum, true, false, j2);
    "max_size" == z2 && I2 > +N2.maximum && eb(e2, true, f2, N2.maximum, true, false, j2);
    "size_equals" == z2 && I2 != +N2.size && (I2 < +N2.size ? (I2 = N2.size, eb(e2, false, f2, I2, true, true, j2)) : eb(e2, true, f2, N2.size, true, true, j2));
    return;
  }
  if ("greater_than" == z2 || "less_than" == z2) {
    if (!("number" == typeof j2) && !qa(Date, j2) && !("bigint" == typeof j2)) return;
    I2 = N2.value;
    f2 = N2.inclusive;
    b2 = !(false === f2);
    f2 = qa(Date, j2) ? "date" : "number";
    "bigint" == typeof j2 && (f2 = "bigint");
    N2.origin === void 0 || (f2 = N2.origin);
    if ("greater_than" == z2) {
      N2 = j2 > I2;
      b2 && (N2 = j2 >= I2);
      if (N2) return;
      eb(e2, false, f2, I2, b2, false, j2);
    } else {
      N2 = j2 < I2;
      b2 && (N2 = j2 <= I2);
      if (N2) return;
      eb(e2, true, f2, I2, b2, false, j2);
    }
    return;
  }
  if ("multiple_of" == z2) {
    if ("bigint" == typeof j2) {
      I2 = j2 % N2.value;
      I2 === BigInt(0) || (I2 = e2.issues, f2 = N2.value, I2.push({ code: "not_multiple_of", divisor: f2, path: [] }));
      return;
    }
    if (!("number" == typeof j2)) return;
    I2 = +j2;
    0 != Hf(I2, +N2.value) && (I2 = e2.issues, f2 = N2.value, I2.push({ origin: "number", code: "not_multiple_of", divisor: f2, input: j2 }));
    return;
  }
  if ("number_format" == z2) {
    I2 = N2.format;
    "safeint" == I2 && !(true === Number.isSafeInteger(j2)) && (+j2 > 0 ? e2.issues.push(qf(true, "number", 9007199254740991, true, false, j2)) : e2.issues.push(qf(false, "number", -9007199254740991, true, false, j2)));
    ("int32" == I2 || "safeint" == I2 || "int" == I2) && (true === Number.isInteger(j2) || e2.issues.push(Aa("int", j2)));
    "finite" == I2 && !La(j2) && e2.issues.push(Aa("number", j2));
    return;
  }
  if ("includes" == z2) {
    if (!("string" == typeof j2)) return;
    f2 = j2;
    j2 = N2.includes;
    I2 = f2.includes(j2);
    "number" == typeof N2.position && (I2 = f2.slice(+N2.position | 0).includes(j2));
    if (I2) return;
    ta(e2, "includes", { includes: N2.includes });
    return;
  }
  if ("starts_with" == z2) {
    if (!("string" == typeof j2)) return;
    if (j2.startsWith(N2.prefix)) return;
    ta(e2, "starts_with", { prefix: N2.prefix });
    return;
  }
  if ("ends_with" == z2) {
    if (!("string" == typeof j2)) return;
    if (j2.endsWith(N2.suffix)) return;
    ta(e2, "ends_with", { suffix: N2.suffix });
    return;
  }
  if ("string_format" == z2 || "lowercase" == z2 || "uppercase" == z2) {
    if (!("string" == typeof j2)) return;
    I2 = j2;
    var a2 = z2;
    "string_format" == z2 && (a2 = N2.format);
    if ("lowercase" == a2 && I2 != I2.toLowerCase()) {
      ta(e2, "lowercase", void 0);
      return;
    }
    if ("uppercase" == a2 && I2 != I2.toUpperCase()) {
      ta(e2, "uppercase", void 0);
      return;
    }
    if ("url" == a2) {
      Uf(N2, e2, j2);
      return;
    }
    if ("credit_card" == a2) {
      var Eh = a2;
      if (xf(I2)) return;
      ta(e2, "credit_card", void 0);
      return;
    }
    if ("jwt" == a2) {
      var Hh = a2;
      if (Rf(I2, N2.alg)) return;
      j2 = { code: "invalid_format", format: "jwt", input: j2 };
      !(N2.alg === void 0) && !(N2.alg == null) && (j2.algorithm = N2.alg);
      I2 = e2.issues;
      I2.push(j2);
      return;
    }
    if ("base64" == a2) {
      var Qh = a2;
      if (id(I2)) return;
      ta(e2, "base64", void 0);
      return;
    }
    if ("base64url" == a2) {
      var Th = a2;
      if (Of(I2)) return;
      ta(e2, "base64url", void 0);
      return;
    }
    if ("ipv6" == a2) {
      var Wh = a2;
      if (jd(I2)) return;
      ta(e2, "ipv6", void 0);
      return;
    }
    if ("cidrv6" == a2) {
      var Zh = a2;
      Sf(I2) || ta(e2, "cidrv6", void 0);
      return;
    }
    if ("function" == typeof N2.fn) {
      I2 = N2.fn(j2);
      if (aa(I2)) {
        e2.$pending = I2.then(function(o2) {
          if (!o2) {
            var b3 = e2.issues;
            o2 = a2;
            b3.push({ code: "invalid_format", format: o2, input: j2, continue: !N2.abort });
          }
          return e2;
        });
        return;
      }
      if (I2) return;
      I2 = e2.issues;
      f2 = a2;
      I2.push({ code: "invalid_format", format: f2, input: j2, continue: !N2.abort });
      return;
    }
    if (!(N2.pattern === void 0)) {
      f2 = N2.pattern;
      f2.lastIndex = 0;
      f2 = N2.pattern;
      if (f2.test(I2)) return;
      f2 = N2.pattern;
      I2 = { pattern: f2.toString() };
      ta(e2, a2, I2);
    }
    return;
  }
  if ("mime_type" == z2) {
    I2 = N2.mime;
    if (!Array.isArray(I2)) return;
    z2 = j2.type;
    N2 = I2.length;
    f2 = 0;
    while (f2 < N2) {
      if (I2[f2] == z2) return;
      f2 = f2 + 1;
    }
    f2 = j2.type;
    e2.issues.push({ code: "invalid_value", values: I2, input: f2 });
    return;
  }
  if ("property" == z2) {
    I2 = va(N2.schema);
    if (I2) {
      var Ai = null;
      var Ci = I2;
      I2 = wa(I2, j2[N2.property], f2);
      if (aa(I2)) {
        f2 = N2.property;
        e2.$pending = I2.then(function(E2) {
          var K2 = E2.issues;
          var a3 = K2.length;
          var b3 = 0;
          while (b3 < a3) {
            tb(K2[b3], f2);
            e2.issues.push(K2[b3]);
            b3 = b3 + 1;
          }
          return e2;
        });
        return;
      }
      f2 = I2.issues;
      j2 = f2.length;
      I2 = 0;
      while (I2 < j2) {
        z2 = f2[I2];
        tb(z2, N2.property);
        e2.issues.push(f2[I2]);
        I2 = I2 + 1;
      }
    }
    return;
  }
  if ("overwrite" == z2) {
    "function" == typeof N2.transform && (e2.value = N2.transform(j2));
    return;
  }
  if ("custom" == z2) {
    z2 = void 0;
    X(I2._zod) && (b2 = I2._zod, z2 = b2.bag);
    if (X(z2) && !(z2.Class === void 0)) {
      if (qa(z2.Class, j2)) return;
      I2 = e2.issues;
      f2 = z2.Class;
      I2.push(Aa(f2.name, j2));
      return;
    }
    if (!("function" == typeof N2.fn)) return;
    z2 = e2.issues;
    b2 = { value: j2, issues: z2, addIssue: function(o2) {
      "string" == typeof o2 ? o2 = { message: o2, code: "custom", input: j2, inst: I2 } : (!o2.fatal || (o2.continue = false), o2.code === void 0 && (o2.code = "custom"), true === "input" in o2 || (o2.input = j2), o2.inst === void 0 && (o2.inst = I2), o2.continue === void 0 && (o2.continue = !N2.abort));
      z2.push(o2);
    } };
    c2 = z2.length;
    b2 = N2.fn(j2, b2);
    if (aa(b2)) {
      var al = void 0;
      if (!(f2 === void 0) && false === f2.async) throw new Error(bg);
      e2.$pending = b2.then(function(E2) {
        hd(E2, e2, j2, I2, N2, c2);
        return e2;
      });
      return;
    }
    hd(b2, e2, j2, I2, N2, c2);
    return;
  }
};
var Tb = (e2) => {
  var a2 = e2.$pending;
  if (aa(a2)) return Reflect.deleteProperty(e2, "$pending"), a2;
};
var Ub = (h2) => {
  if (h2.aborted) return true;
  var t2 = h2.issues;
  var g2 = t2.length;
  h2 = 0;
  while (h2 < g2) {
    var a2 = t2[h2];
    var b2 = a2.continue;
    if (!(true === b2)) return true;
    h2 = h2 + 1;
  }
  return false;
};
var If = (h2) => {
  if (h2.aborted) return true;
  var t2 = h2.issues;
  var g2 = t2.length;
  h2 = 0;
  while (h2 < g2) {
    var a2 = t2[h2];
    var b2 = a2.continue;
    if (false === b2) return true;
    h2 = h2 + 1;
  }
  return false;
};
var ld = (e2, h2, k2) => {
  var t2 = e2.issues;
  var g2 = t2.length;
  while (h2 < g2) {
    e2 = t2[h2];
    e2.schema === void 0 && (e2 = t2[h2], e2.schema = k2);
    h2 = h2 + 1 | 0;
  }
};
var Lf = (e2, h2, N2) => {
  var a2 = !N2.abort;
  var t2 = e2.issues;
  var g2 = t2.length;
  while (h2 < g2) {
    e2 = t2[h2];
    e2.continue = a2;
    h2 = h2 + 1 | 0;
  }
};
var uc = (i2, e2, f2, h2) => {
  var a2 = i2.def.checks;
  var I2, g2, N2, c2, b2;
  if (a2 === void 0 || !Array.isArray(a2)) return e2;
  g2 = a2.length;
  while (h2 < g2) {
    I2 = a2[h2];
    N2 = sc(I2);
    if ("function" == typeof N2.when) {
      if (If(e2)) {
        h2 = h2 + 1 | 0;
        continue;
      }
      if (!N2.when(e2)) {
        h2 = h2 + 1 | 0;
        continue;
      }
    } else {
      if (Ub(e2)) {
        h2 = h2 + 1 | 0;
        continue;
      }
    }
    c2 = e2.issues;
    N2 = c2.length;
    kd(I2, e2, f2);
    h2 = h2 + 1 | 0;
    b2 = Tb(e2);
    if (aa(b2)) return b2.then(/* @__PURE__ */ ((a3, b3, c3, d2, g3, j2) => function(m2) {
      let l2 = a3.handle;
      Sb(b3, g3, d2);
      ld(b3, g3, l2);
      return uc(a3, b3, c3, j2);
    })(i2, e2, f2, I2, N2, h2));
    b2 = i2.handle;
    Sb(e2, N2, I2);
    ld(e2, N2, b2);
  }
  return e2;
};
var Vb = (i2, e2, f2) => {
  if (e2.memo) return e2;
  Sb(e2, 0, i2.handle);
  if ("string" == typeof i2.def.check) {
    var c2 = e2.issues;
    var a2 = c2.length;
    kd(i2.handle, e2, f2);
    Sb(e2, a2, i2.handle);
    Lf(e2, a2, i2.def);
    var b2 = Tb(e2);
    if (aa(b2)) return b2.then(function(c3) {
      return uc(i2, e2, f2, 0);
    });
    if (i2.def.abort) {
      b2 = e2.issues;
      if (b2.length > a2) return e2;
    }
  }
  return uc(i2, e2, f2, 0);
};
var vc = (e2) => {
  var A2 = e2.$waits;
  var a2;
  if (A2 === void 0 || !Array.isArray(A2)) return e2;
  Reflect.deleteProperty(e2, "$waits");
  if (0 == A2.length) return e2;
  return Promise.all(A2).then(function(a3) {
    return e2;
  });
};
var vb = (e2, m2, a2) => {
  if (aa(m2)) {
    var A2 = e2.$waits;
    var b2;
    (A2 === void 0 || !Array.isArray(A2)) && (A2 = [], e2.$waits = A2);
    A2.push(m2.then(a2));
  } else {
    a2(m2);
  }
};
var Wb = (i2, e2, f2) => {
  var a2 = Tb(e2);
  if (aa(a2)) return a2.then(function(c2) {
    return Wb(i2, e2, f2);
  });
  a2 = vc(e2);
  if (aa(a2)) return a2.then(function(o2) {
    sb(i2) && _c(i2, o2);
    if (!i2.hasChecks) return o2;
    return Vb(i2, o2, f2);
  });
  sb(i2) && _c(i2, e2);
  if (!i2.hasChecks) return e2;
  return Vb(i2, e2, f2);
};
var wb = (i2, e2, f2) => {
  if (32 == i2.kind || 31 == i2.kind) return nf(i2, e2, f2);
  zf(i2, e2, f2);
  i2 = Tb(e2);
  if (aa(i2)) return i2.then(function(c2) {
    return vc(e2);
  });
  return vc(e2);
};
var md = (i2, a2, e2, f2) => {
  if (Ub(a2)) return a2.aborted = true, a2;
  a2 = Vb(i2, e2, f2);
  if (aa(a2)) {
    if (!(f2 === void 0) && false === f2.async) throw new Error(bg);
    return a2.then(function(o2) {
      return wb(i2, o2, f2);
    });
  }
  return wb(i2, a2, f2);
};
var ra = (B2, e2, f2) => {
  B2 = tc(B2);
  if (sb(B2)) {
    var a2 = Ee(B2, e2, f2);
    if (!(a2 === void 0)) return Vb(B2, a2, f2);
  }
  if (30 == B2.kind) {
    if (f2 === void 0 || false === f2.async) throw new Error(bg);
    a2 = e2.value;
    return Promise.resolve(a2).then(function(m2) {
      e2.value = m2;
      var h2 = ka(B2, "innerType");
      if (h2) return ra(h2, e2, f2);
      return e2;
    });
  }
  if (!(f2 === void 0) && X(f2) && f2.skipChecks) return wb(B2, e2, f2);
  if (Ma(f2) && B2.hasChecks) {
    a2 = ia({}, f2);
    a2.skipChecks = true;
    var b2 = e2.value;
    a2 = wb(B2, { value: b2, issues: [] }, a2);
    if (aa(a2)) {
      if (!(f2 === void 0) && false === f2.async) throw new Error(bg);
      return a2.then(function(o2) {
        return md(B2, o2, e2, f2);
      });
    }
    return md(B2, a2, e2, f2);
  }
  if (32 == B2.kind || 31 == B2.kind) {
    a2 = nf(B2, e2, f2);
    if (aa(a2)) return a2.then(function(o2) {
      return Wb(B2, o2, f2);
    });
    return Wb(B2, e2, f2);
  }
  zf(B2, e2, f2);
  return Wb(B2, e2, f2);
};
var Wa = (i2, j2, f2) => {
  let a2 = i2.handle._zod;
  return a2.run.call(i2.handle._zod, { value: j2, issues: [] }, f2);
};
var wa = (i2, j2, f2) => !!i2 ? Wa(i2, j2, f2) : { value: j2, issues: [] };
var sa = (e2, a2, j2) => {
  e2.issues.push(Aa(a2, j2));
};
var Kf = (j2) => {
  if (!("number" == typeof j2)) return false;
  if (true === Number.isNaN(j2)) return false;
  if (!La(j2)) return false;
  return true;
};
var tf = (j2) => {
  if (!("number" == typeof j2)) return false;
  return true === Number.isNaN(j2);
};
var Vf = (j2) => j2 === void 0 ? false : j2 == null;
var of = (j2) => {
  if (!qa(Date, j2)) return false;
  if (true === Number.isNaN(j2.getTime())) return false;
  return true;
};
var nd = (e2) => {
  var a2 = e2.issues;
  if (0 == a2.length) return;
  a2 = e2.issues;
  a2.length = 0;
  e2.value = void 0;
  e2.aborted = false;
};
var od = (e2, B2, f2) => {
  var a2 = e2.issues;
  if (0 == a2.length) return;
  a2 = B2.def.catchValue;
  a2 === void 0 && (a2 = B2.def.defaultValue);
  if ("function" == typeof a2) {
    var b2 = [];
    var t2 = e2.issues;
    var g2 = t2.length;
    var h2 = 0;
    while (h2 < g2) {
      b2.push(Ta(t2[h2], B2, f2));
      h2 = h2 + 1;
    }
    B2 = e2.value;
    f2 = e2.issues;
    a2 = a2({ value: B2, issues: f2, error: { issues: b2 }, input: e2.value });
  }
  e2.value = a2;
  B2 = e2.issues;
  B2.length = 0;
  e2.aborted = false;
};
var pd = (e2) => {
  if (0 == e2.issues.length && e2.value === void 0) {
    var a2 = e2.issues;
    a2.push({ code: "invalid_type", expected: "nonoptional", input: e2.value });
  }
};
var yf = (e2, m2) => {
  aa(m2) && (e2.$pending = m2);
};
var zf = (m2, e2, f2) => {
  var B2 = tc(m2);
  var Zk = e2.value;
  m2 = B2.kind;
  var b2;
  if (9 == m2 || 10 == m2) return;
  if (0 == m2) {
    if (B2.def.coerce) try {
      e2.value = String(Zk);
      var k2 = Zk;
      var qj = String;
      var ck = void 0;
      Zk = e2.value;
    } catch {
    }
    if ("string" == typeof Zk) return;
    sa(e2, "string", Zk);
    return;
  }
  if (1 == m2) {
    if (B2.def.coerce) try {
      e2.value = Number(Zk);
      var t2 = Zk;
      var sj = Number;
      var dk = void 0;
      Zk = e2.value;
    } catch {
    }
    if (Kf(Zk)) return;
    sa(e2, "number", Zk);
    return;
  }
  if (2 == m2) {
    !B2.def.coerce || (e2.value = Boolean(Zk));
    Zk = e2.value;
    if ("boolean" == typeof Zk) return;
    sa(e2, "boolean", Zk);
    return;
  }
  if (3 == m2) {
    if (B2.def.coerce) try {
      e2.value = BigInt(Zk);
    } catch {
      sa(e2, "bigint", Zk);
      return;
    }
    Zk = e2.value;
    if ("bigint" == typeof Zk) return;
    sa(e2, "bigint", Zk);
    return;
  }
  if (4 == m2) {
    if ("symbol" == typeof Zk) return;
    sa(e2, "symbol", Zk);
    return;
  }
  if (5 == m2) {
    if (B2.def.coerce) try {
      e2.value = new Date(Zk);
      var sg2 = Zk;
      var Dj = Date;
      Zk = e2.value;
    } catch {
    }
    if (of(Zk)) return;
    sa(e2, "date", Zk);
    return;
  }
  if (6 == m2) {
    if (tf(Zk)) return;
    sa(e2, "nan", Zk);
    return;
  }
  if (7 == m2) {
    if (Zk === void 0) return;
    sa(e2, "undefined", Zk);
    return;
  }
  if (12 == m2) {
    if (Zk === void 0) return;
    sa(e2, "void", Zk);
    return;
  }
  if (8 == m2) {
    if (Vf(Zk)) return;
    sa(e2, "null", Zk);
    return;
  }
  if (11 == m2) {
    sa(e2, "never", Zk);
    return;
  }
  if (13 == m2) {
    if (!(B2.values === void 0) && !!B2.values.has(Zk)) return;
    f2 = Array.from(B2.values);
    m2 = Zk;
    e2.issues.push({ code: "invalid_value", values: f2, input: m2 });
    return;
  }
  if (14 == m2) {
    if (!(B2.values === void 0) && !!B2.values.has(Zk)) return;
    f2 = Array.from(B2.values);
    m2 = Zk;
    e2.issues.push({ code: "invalid_value", values: f2, input: m2 });
    return;
  }
  if (23 == m2) {
    m2 = ka(B2, "innerType");
    if (B2.def.exact) {
      !m2 || yf(e2, ra(m2, e2, f2));
      return;
    }
    if (Zk === void 0) {
      var fh2 = Zk;
      if (m2) {
        var gh2 = null;
        2 == m2.optin && (m2 = ra(m2, e2, f2), aa(m2) ? e2.$pending = m2.then(function(o2) {
          nd(o2);
          return o2;
        }) : nd(e2));
      }
      return;
    }
    !m2 || yf(e2, ra(m2, e2, f2));
    return;
  }
  if (24 == m2) {
    if (Zk === null) {
      e2.value = Zk;
      return;
    }
    m2 = ka(B2, "innerType");
    !m2 || yf(e2, ra(m2, e2, f2));
    return;
  }
  if (25 == m2 || 26 == m2) {
    b2 = ka(B2, "innerType");
    if (Ma(f2)) {
      !b2 || yf(e2, ra(b2, e2, f2));
      return;
    }
    if (Zk === void 0) {
      var Hh = rc(B2);
      e2.value = Hh;
      var Gh = Zk;
      26 == m2 && b2 && yf(e2, ra(b2, e2, f2));
      return;
    }
    if (b2) {
      var Mh = null;
      f2 = ra(b2, e2, f2);
      if (aa(f2)) {
        var Oh = b2;
        var a2 = 0;
        25 == m2 && (a2 = 1);
        e2.$pending = f2.then(function(o2) {
          1 == a2 && o2.value === void 0 && (o2.value = rc(B2));
          return o2;
        });
        return;
      }
    }
    25 == m2 && e2.value === void 0 && (e2.value = rc(B2));
    return;
  }
  if (27 == m2) {
    m2 = ka(B2, "innerType");
    if (Ma(f2)) {
      !m2 || yf(e2, ra(m2, e2, f2));
      return;
    }
    if (m2) {
      var bi = null;
      var di = m2;
      m2 = ra(m2, e2, f2);
      if (aa(m2)) {
        e2.$pending = m2.then(function(o2) {
          od(o2, B2, f2);
          return o2;
        });
        return;
      }
      od(e2, B2, f2);
    }
    return;
  }
  if (28 == m2) {
    m2 = ka(B2, "innerType");
    if (m2) {
      var ii = null;
      var ki = m2;
      m2 = ra(m2, e2, f2);
      if (aa(m2)) {
        e2.$pending = m2.then(function(o2) {
          pd(o2);
          return o2;
        });
        return;
      }
    }
    pd(e2);
    return;
  }
  if (33 == m2) {
    if (!Ma(f2)) {
      m2 = ka(B2, "innerType");
      if (m2) {
        var ri = null;
        var ti = m2;
        m2 = ra(m2, e2, f2);
        aa(m2) ? e2.$pending = m2.then(function(o2) {
          o2.memo || (o2.value = ga.freeze(o2.value));
          return o2;
        }) : e2.memo || (e2.value = ga.freeze(e2.value));
      }
      return;
    }
    m2 = ka(B2, "innerType");
    !m2 || yf(e2, ra(m2, e2, f2));
    return;
  }
  if (16 == m2) {
    Ie(B2, e2, f2);
  } else {
    if (17 == m2) {
      Cf(B2, e2, f2);
    } else {
      if (15 == m2) {
        Je(B2, e2, f2);
      } else {
        if (18 == m2) {
          Ke(B2, e2, f2);
        } else {
          if (21 == m2 || 38 == m2) {
            df(B2, e2, f2);
          } else {
            if (22 == m2) {
              Xf(B2, e2, f2);
            } else {
              if (19 == m2) {
                Pf(B2, e2, f2);
              } else {
                if (20 == m2) {
                  hf(B2, e2, f2);
                } else {
                  if (39 == m2) {
                    Nf(B2, e2);
                  } else {
                    if (40 == m2) {
                      if (!("string" == typeof Zk)) {
                        sa(e2, "string", Zk);
                        return;
                      }
                      f2 = B2.handle._zod;
                      m2 = f2.pattern;
                      !(m2 === void 0) && !(m2 == null) && (m2.lastIndex = 0, m2.test(Zk) || ta(e2, "template_literal", { pattern: m2.source }));
                    } else {
                      if (34 != m2) {
                        if (37 == m2) {
                          m2 = ka(B2, "innerType");
                          !m2 || (B2 = wa(m2, Zk, f2).issues, e2.value = 0 == B2.length);
                        } else {
                          if (35 == m2) {
                            m2 = globalThis.File;
                            if (m2 === void 0) {
                              sa(e2, "file", Zk);
                            } else {
                              var ak = globalThis;
                              qa(m2, Zk) || sa(e2, "file", Zk);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
var qd = (a2, b2) => {
  var g2 = a2.length;
  var h2 = 0, c2;
  while (h2 < g2) {
    c2 = a2[h2];
    b2.push(c2);
    h2 = h2 + 1;
  }
};
var Xa = (t2, a2, b2) => {
  var d2 = t2.length;
  var c2 = 0, e2;
  while (c2 < d2) {
    tb(t2[c2], b2);
    e2 = t2[c2];
    a2.push(e2);
    c2 = c2 + 1;
  }
};
var Wf = (a2) => {
  var C2 = a2.kind;
  if (32 == C2) return true;
  if (31 == C2) return true;
  if (30 == C2) return true;
  if (29 == C2) return true;
  if (25 == C2) return true;
  if (26 == C2) return true;
  if (27 == C2) return true;
  return false;
};
var ef = (a2, j2, f2, b2) => {
  if (sb(a2)) return Wa(a2, j2, f2);
  if (Ma(f2) && a2.hasChecks) return Wa(a2, j2, f2);
  if (Wf(a2)) return Wa(a2, j2, f2);
  b2.value = j2;
  var v2 = b2.issues;
  v2.length = 0;
  b2.aborted === void 0 || (b2.aborted = false);
  b2.memo === void 0 || (b2.memo = false);
  v2 = a2.handle._zod;
  b2 = v2.run(b2, f2);
  return aa(b2) ? Wa(a2, j2, f2) : b2;
};
var Ie = (i2, e2, f2) => {
  var j2 = e2.value;
  if (!Array.isArray(j2)) {
    e2.issues.push(Aa("array", j2));
    return;
  }
  var a2 = ka(i2, "element");
  var q2 = cb(i2, e2, []);
  var b2 = { value: void 0, issues: [] };
  var g2 = j2.length;
  var h2 = 0, m2, c2;
  while (h2 < g2) {
    if (a2) {
      var r2 = null;
      m2 = ef(a2, j2[h2], f2, b2);
      aa(m2) ? (c2 = +(0 + h2), vb(e2, m2, /* @__PURE__ */ ((a3, b3, d2, f3) => function(G2) {
        Mb(b3, d2, f3, G2);
      })(i2, e2, q2, c2))) : Mb(e2, q2, +(0 + h2), m2);
    } else {
      m2 = j2[h2];
      q2.push(m2);
    }
    h2 = h2 + 1;
  }
  e2.value = q2;
};
var rd = (a2, b2) => {
  var h2 = a2.length - 1 | 0;
  while (h2 >= 0) {
    var B2 = va(a2[h2]);
    if (B2) {
      var i2 = null;
      B2 = b2 ? 0 != B2.optin : 1 == B2.optout;
    } else {
      B2 = false;
    }
    if (!B2) return h2 + 1 | 0;
    h2 = h2 - 1;
  }
  return 0;
};
var Cf = (i2, e2, f2) => {
  var j2 = e2.value;
  if (!Array.isArray(j2)) {
    e2.issues.push(Aa("tuple", j2));
    return;
  }
  var a2 = i2.def.items;
  if (!Array.isArray(a2)) {
    var t2 = a2;
    a2 = [];
  }
  var g2 = j2.length;
  var m2 = a2.length;
  var h2 = rd(a2, true);
  var k2 = rd(a2, false);
  var d2 = ka(i2, "rest");
  if (!d2) {
    var x2 = a2;
    var A2 = a2;
    var B2 = a2;
    var C2 = null;
    if (g2 < h2) {
      e2.issues.push($c(false, h2, j2));
      return;
    }
    g2 > m2 && e2.issues.push($c(true, m2, j2));
  }
  var q2 = cb(i2, e2, []);
  e2.value = q2;
  var b2 = [];
  var c2 = [];
  h2 = 0;
  while (h2 < m2) {
    b2.push(void 0);
    h2 = h2 + 1;
  }
  h2 = 0;
  while (h2 < m2) {
    var l2 = { i: 0 + h2 };
    var V2 = wa(va(a2[h2]), j2[h2], f2);
    aa(V2) ? c2.push(V2.then(/* @__PURE__ */ ((a3, c3) => function(G2) {
      a3[c3.i] = G2;
    })(b2, l2))) : b2[h2] = V2;
    h2 = h2 + 1;
  }
  if (g2 > m2 && d2) {
    while (h2 < g2) {
      V2 = { i: 0 + h2 };
      m2 = wa(d2, j2[h2], f2);
      aa(m2) ? c2.push(m2.then(/* @__PURE__ */ ((a3, b3, c3, d3) => function(G2) {
        Mb(b3, c3, d3.i, G2);
      })(i2, e2, q2, V2))) : Mb(e2, q2, V2.i, m2);
      h2 = h2 + 1 | 0;
    }
  }
  if (c2.length > 0) {
    e2.$pending = Promise.all(c2).then(function(f3) {
      ad(e2, a2, j2, b2, k2);
      return e2;
    });
    return;
  }
  ad(e2, a2, j2, b2, k2);
};
var Je = (i2, e2, f2) => {
  var j2 = e2.value;
  var a2, L2, q2, b2, c2, d2, h2, w2, k2, C2, l2, m2, n2, g2;
  if (!X(j2) || Array.isArray(j2)) {
    e2.issues.push(Aa("object", j2));
    return;
  }
  L2 = i2.def.shape;
  L2 == null && (L2 = {});
  q2 = i2.handle._zod;
  a2 = q2["~keys"];
  b2 = q2["~fids"];
  if (!Array.isArray(a2) || !Array.isArray(b2)) {
    a2 = pa(L2);
    b2 = [];
    d2 = a2.length;
    c2 = 0;
    while (c2 < d2) {
      h2 = va(Reflect.get(L2, a2[c2]));
      h2 ? b2.push(+(0 + h2.id)) : b2.push(-1);
      c2 = c2 + 1;
    }
    q2["~keys"] = a2;
    q2["~fids"] = b2;
  }
  q2 = cb(i2, e2, {});
  w2 = { value: void 0, issues: [] };
  k2 = a2.length;
  h2 = 0;
  while (h2 < k2) {
    d2 = a2[h2];
    c2 = +b2[h2] | 0;
    if ("__proto__" == d2 || c2 < 0) {
      h2 = h2 + 1;
      continue;
    }
    c2 = Ga[c2];
    g2 = true === d2 in j2;
    C2 = void 0;
    g2 && (C2 = j2[d2]);
    C2 = ef(c2, C2, f2, w2);
    aa(C2) ? (l2 = Tc(c2), m2 = Uc(c2), vb(e2, C2, /* @__PURE__ */ ((a3, b3, c3, f3, h3, j3, k3) => function(G2) {
      Vc(b3, c3, f3, h3, j3, k3, G2);
    })(i2, e2, q2, d2, g2, l2, m2))) : Vc(e2, q2, d2, g2, Tc(c2), Uc(c2), C2);
    h2 = h2 + 1;
  }
  a2 = i2.def.catchall;
  if (!(a2 === void 0) && !(a2 == null)) {
    b2 = va(a2);
    c2 = [];
    w2 = pa(j2);
    k2 = w2.length;
    C2 = 0;
    while (C2 < k2) {
      a2 = w2[C2];
      if (!Da.call(L2, a2)) {
        var mh2 = Da;
        if ("__proto__" == a2) {
          if (b2) {
            var Fg2 = null;
            11 == b2.kind && c2.push(a2);
          }
        } else {
          if (b2) {
            var Kg2 = null;
            h2 = b2;
            11 == h2.kind ? c2.push(a2) : (h2 = Wa(h2, j2[a2], f2), n2 = h2.issues, n2.length > 0 ? Xa(h2.issues, e2.issues, a2) : q2[a2] = h2.value);
          } else {
            q2[a2] = j2[a2];
          }
        }
      }
      C2 = C2 + 1;
    }
    c2.length > 0 && e2.issues.push({ code: "unrecognized_keys", keys: c2, input: j2, path: [], continue: true });
  }
  e2.value = q2;
};
var Zf = (j2) => {
  if (!X(j2) || Array.isArray(j2)) return false;
  j2 = ga.getPrototypeOf(j2);
  if (j2 == null) return true;
  return j2 === ga.prototype;
};
var ag = (n2) => {
  if (!("string" == typeof n2)) return false;
  var a2 = Number(n2);
  var b2;
  if (!("number" == typeof a2) || !La(a2)) return false;
  return a2 == n2;
};
var lf = (e2, q2, n2, m2) => {
  var a2 = m2.issues;
  a2.length > 0 && Xa(m2.issues, e2.issues, n2);
  Ca(q2, n2, m2.value);
};
var Ke = (n2, e2, f2) => {
  var j2 = e2.value;
  if (!Zf(j2)) {
    sa(e2, "record", j2);
    return;
  }
  var q2 = cb(n2, e2, {});
  e2.value = q2;
  var a2;
  var l2 = "string" == typeof n2.def.mode && "loose" == n2.def.mode, w2, g2, i2, c2, k2, b2, x2, h2, m2, o2, d2;
  w2 = !!n2.def.partial;
  g2 = ka(n2, "keyType");
  i2 = ka(n2, "valueType");
  a2 = void 0;
  if (g2) {
    var B2 = null;
    n2 = g2;
    n2.values === void 0 || (a2 = Array.from(n2.values));
  }
  if (!(a2 === void 0) && Array.isArray(a2) && !w2) {
    c2 = la();
    k2 = a2.length;
    n2 = 0;
    while (n2 < k2) {
      w2 = a2[n2];
      b2 = typeof w2;
      if ("string" != b2 && "number" != b2 && "symbol" != b2) {
        n2 = n2 + 1;
        continue;
      }
      if ("number" == typeof w2) {
      }
      c2.add(w2);
      if ("string" == typeof w2 && "__proto__" == w2) {
        n2 = n2 + 1;
        continue;
      }
      w2 = wa(g2, a2[n2], f2);
      if (aa(w2)) {
        n2 = n2 + 1;
        continue;
      }
      b2 = w2.issues;
      if (b2.length > 0) {
        d2 = [];
        b2 = w2.issues;
        x2 = b2.length;
        b2 = 0;
        while (b2 < x2) {
          d2.push(Ta(w2.issues[b2], g2, f2));
          b2 = b2 + 1;
        }
        w2 = [];
        b2 = a2[n2];
        w2.push(b2);
        b2 = e2.issues;
        x2 = a2[n2];
        b2.push({ code: "invalid_key", origin: "record", issues: d2, input: x2, path: w2 });
        n2 = n2 + 1;
        continue;
      }
      h2 = w2.value;
      if ("string" == typeof h2 && "__proto__" == h2) {
        n2 = n2 + 1;
        continue;
      }
      w2 = a2[n2];
      vb(e2, wa(i2, Reflect.get(j2, w2), f2), /* @__PURE__ */ ((a3, b3, c3) => function(G2) {
        lf(a3, b3, c3, G2);
      })(e2, q2, h2));
      n2 = n2 + 1;
    }
    a2 = [];
    w2 = pa(j2);
    g2 = w2.length;
    f2 = 0;
    while (f2 < g2) {
      n2 = w2[f2];
      c2.has(n2) || (l2 ? "__proto__" != n2 && (q2[n2] = j2[n2]) : a2.push(n2));
      f2 = f2 + 1;
    }
    a2.length > 0 && e2.issues.push({ code: "unrecognized_keys", keys: a2, input: j2, continue: true });
    return;
  }
  d2 = [];
  x2 = Reflect.ownKeys(j2);
  m2 = x2.length;
  h2 = 0;
  var Qh = Reflect;
  while (h2 < m2) {
    n2 = x2[h2];
    if ("string" == typeof n2 && "__proto__" == n2) {
      h2 = h2 + 1;
      continue;
    }
    w2 = ga.prototype;
    if (!w2.propertyIsEnumerable.call(j2, n2)) {
      h2 = h2 + 1;
      continue;
    }
    w2 = wa(g2, n2, f2);
    !aa(w2) ? (k2 = w2.issues, b2 = k2.length > 0) : b2 = false;
    b2 && ag(n2) && (b2 = wa(g2, Number(n2), f2), !aa(b2) ? (o2 = b2.issues, k2 = 0 == o2.length) : k2 = false, k2 && (w2 = b2));
    aa(w2) ? b2 = true : (k2 = w2.issues, b2 = k2.length > 0);
    if (b2) {
      if (l2) {
        q2[n2] = j2[n2];
      } else {
        if (!(a2 === void 0)) {
          d2.push(n2);
        } else {
          k2 = [];
          if (!aa(w2)) {
            b2 = w2.issues;
            o2 = b2.length;
            b2 = 0;
            while (b2 < o2) {
              k2.push(Ta(w2.issues[b2], g2, f2));
              b2 = b2 + 1;
            }
          }
          w2 = [];
          w2.push(n2);
          e2.issues.push({ code: "invalid_key", origin: "record", issues: k2, input: n2, path: w2 });
        }
      }
      h2 = h2 + 1;
      continue;
    }
    c2 = w2.value;
    if ("string" == typeof c2 && "__proto__" == c2) {
      h2 = h2 + 1;
      continue;
    }
    vb(e2, wa(i2, j2[n2], f2), /* @__PURE__ */ ((a3, b3, d3) => function(G2) {
      lf(a3, b3, d3, G2);
    })(e2, q2, c2));
    h2 = h2 + 1;
  }
  d2.length > 0 && e2.issues.push({ code: "unrecognized_keys", keys: d2, input: j2, continue: true });
};
var sd = (t2, f2) => {
  var a2 = [];
  var g2 = t2.length;
  var h2 = 0;
  while (h2 < g2) {
    a2.push(Ta(t2[h2], null, f2));
    h2 = h2 + 1;
  }
  return a2;
};
var xb = (B2) => {
  if (B2 == null || !X(B2) || B2._zod === void 0) return;
  var v2 = B2._zod;
  var a2 = v2.bag;
  if (!(a2.propValues === void 0)) return B2 = v2.bag, B2.propValues;
  B2 = da(B2);
  if (15 == B2.kind) {
    a2 = {};
    var n2 = B2.def.shape;
    if (X(n2)) {
      var C2 = pa(n2);
      var g2 = C2.length;
      var U2 = 0, w2, h2, c2, d2, P2, b2;
      while (U2 < g2) {
        w2 = C2[U2];
        B2 = va(n2[w2]);
        if (B2) {
          var x2 = null;
          if (!(B2.values === void 0)) {
            h2 = la();
            b2 = Array.from(B2.values);
            c2 = b2.length;
            P2 = 0;
            var fb2 = Array;
            while (P2 < c2) {
              d2 = b2[P2];
              h2.add(d2);
              P2 = P2 + 1;
            }
            0 != B2.optin && h2.add(void 0);
            Ca(a2, w2, h2);
          }
        }
        U2 = U2 + 1;
      }
    }
    B2 = v2.bag;
    B2.propValues = a2;
    return a2;
  }
  if (32 == B2.kind) return xb(B2.def.in);
  if (29 == B2.kind) return xb(tc(B2).handle);
  if (21 == B2.kind || 38 == B2.kind) {
    a2 = {};
    U2 = B2.def.options;
    if (Array.isArray(U2)) {
      c2 = U2.length;
      h2 = 0;
      while (h2 < c2) {
        B2 = xb(U2[h2]);
        if (B2 == null || 0 == pa(B2).length) throw na(cg + h2 + kg);
        w2 = pa(B2);
        d2 = w2.length;
        C2 = 0;
        while (C2 < d2) {
          n2 = w2[C2];
          Da.call(a2, n2) || Ca(a2, n2, la());
          P2 = B2[n2];
          if (!(P2 === void 0) && !(P2 == null)) {
            g2 = Array.from(P2);
            b2 = g2.length;
            P2 = 0;
            var yb2 = Array;
            while (P2 < b2) {
              a2[n2].add(g2[P2]);
              P2 = P2 + 1;
            }
          }
          C2 = C2 + 1;
        }
        h2 = h2 + 1;
      }
    }
    B2 = v2.bag;
    B2.propValues = a2;
    return a2;
  }
};
var td = (h2) => {
  var v2 = h2.handle._zod;
  var z2 = v2.bag;
  if (!(z2.optionsMap === void 0)) return z2.optionsMap;
  var a2 = /* @__PURE__ */ new Map();
  var d2 = h2.def.discriminator;
  var U2 = h2.def.options;
  var g2 = U2.length;
  h2 = 0;
  var W2 = Map;
  while (h2 < g2) {
    var b2 = xb(U2[h2]);
    v2 = void 0;
    var c2;
    X(b2) && !!Da.call(b2, d2) && (v2 = b2[d2]);
    if (v2 === void 0) throw na(cg + h2 + kg);
    if (v2 == null) throw na(cg + h2 + kg);
    if (0 == (+v2.size | 0)) throw na(cg + h2 + kg);
    b2 = Array.from(v2);
    c2 = b2.length;
    v2 = 0;
    var ba2 = Array;
    while (v2 < c2) {
      var e2 = b2[v2];
      if (a2.has(e2)) throw na('Duplicate discriminator value "' + b2[v2] + kg);
      a2.set(b2[v2], U2[h2]);
      v2 = v2 + 1;
    }
    h2 = h2 + 1;
  }
  z2.optionsMap = a2;
  return a2;
};
var df = (K2, e2, f2) => {
  var j2 = e2.value;
  var U2 = K2.def.options;
  Array.isArray(U2) || (U2 = []);
  var a2 = "string" == typeof K2.def.discriminator ? K2.def.discriminator : hg;
  var g2 = U2.length;
  if (a2.length > 0) {
    if (!X(j2) || Array.isArray(j2)) {
      e2.issues.push(Aa("object", j2));
      return;
    }
    var m2 = td(K2);
    var h2 = j2[a2];
    h2 = m2.get(h2);
    var b2;
    if (!(h2 === void 0) && !(h2 == null)) {
      f2 = Wa(da(h2), j2, f2);
      if (aa(f2)) {
        e2.$pending = f2.then(function(o2) {
          db(e2, o2);
          return e2;
        });
        return;
      }
      db(e2, f2);
      return;
    }
    if (!(!!K2.def.unionFallback || Ma(f2))) {
      K2 = { code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: a2, options: Array.from(m2.keys()), path: [] };
      tb(K2, a2);
      f2 = e2.issues;
      f2.push(K2);
      return;
    }
  }
  a2 = [];
  b2 = [];
  var c2 = [];
  h2 = 0;
  while (h2 < g2) {
    a2.push(void 0);
    h2 = h2 + 1;
  }
  h2 = 0;
  while (h2 < g2) {
    m2 = wa(va(U2[h2]), j2, f2);
    if (aa(m2)) {
      var V2 = { i: 0 + h2 };
      c2.push(m2.then(/* @__PURE__ */ ((b3, c3) => function(G2) {
        b3[c3.i] = G2;
      })(a2, V2)));
    } else {
      a2[h2] = m2;
      var d2 = m2.issues;
      if (0 == d2.length) {
        if (38 != K2.kind) {
          db(e2, m2);
          return;
        }
        b2.push(h2);
      }
    }
    h2 = h2 + 1;
  }
  if (c2.length > 0) {
    e2.$pending = Promise.all(c2).then(function(b3) {
      if (38 == K2.kind) {
        var c3 = [];
        var C2 = 0, d3, h3;
        while (C2 < g2) {
          b3 = a2[C2];
          !(b3 === void 0) && !(b3 == null) && 0 == b3.issues.length && c3.push(C2);
          C2 = C2 + 1;
        }
        if (1 == c3.length) return db(e2, a2[c3[0]]), e2;
      }
      bd(K2, e2, a2, f2);
      return e2;
    });
    return;
  }
  if (38 == K2.kind) {
    if (1 == b2.length) {
      e2.value = a2[b2[0]].value;
      return;
    }
    if (0 == b2.length) {
      b2 = [];
      j2 = 0;
      while (j2 < g2) {
        h2 = va(U2[j2]);
        !h2 || (K2 = h2);
        h2 = a2[j2];
        m2 = h2.issues;
        c2 = [];
        d2 = m2.length;
        h2 = 0;
        while (h2 < d2) {
          c2.push(Ta(m2[h2], K2, f2));
          h2 = h2 + 1;
        }
        b2.push(c2);
        j2 = j2 + 1;
      }
      e2.issues.push({ code: "invalid_union", errors: b2, path: [] });
      return;
    }
    e2.issues.push({ code: "invalid_union", errors: [], inclusive: false, matches: b2, path: [] });
    return;
  }
  bd(K2, e2, a2, f2);
};
var wc = (a2, b2) => {
  if (true === Qd(a2, b2)) return { valid: true, data: a2 };
  var h2;
  qa(Date, a2) && qa(Date, b2) ? (h2 = a2.getTime(), h2 = h2 === b2.getTime()) : h2 = false;
  if (h2) return { valid: true, data: a2 };
  if (Zf(a2) && Zf(b2)) {
    var m2 = {};
    var d2 = [];
    d2.push(a2);
    d2.push(b2);
    var c2 = 0, P2, i2, e2, f2, g2;
    while (c2 < 2) {
      P2 = d2[c2];
      f2 = Reflect.ownKeys(P2);
      i2 = f2.length;
      g2 = 0;
      var Qa2 = Reflect;
      while (g2 < i2) {
        h2 = f2[g2];
        e2 = "string" == typeof h2 && "__proto__" == h2;
        e2 || Ca(m2, h2, P2[h2]);
        g2 = g2 + 1;
      }
      c2 = c2 + 1;
    }
    P2 = pa(a2);
    e2 = pa(b2);
    f2 = P2.length;
    g2 = 0;
    while (g2 < f2) {
      h2 = P2[g2];
      if ("__proto__" != h2) {
        i2 = e2.length;
        c2 = false;
        d2 = 0;
        while (d2 < i2) {
          e2[d2] == h2 && (c2 = true);
          d2 = d2 + 1;
        }
        if (c2) {
          c2 = wc(a2[h2], b2[h2]);
          if (!c2.valid) {
            m2 = [];
            m2.push(h2);
            a2 = c2.mergeErrorPath;
            if (Array.isArray(a2)) {
              h2 = a2.length;
              b2 = 0;
              while (b2 < h2) {
                g2 = a2[b2];
                m2.push(g2);
                b2 = b2 + 1;
              }
            }
            return { valid: false, mergeErrorPath: m2 };
          }
          m2[h2] = c2.data;
        }
      }
      g2 = g2 + 1;
    }
    return { valid: true, data: m2 };
  }
  if (Array.isArray(a2) && Array.isArray(b2)) {
    h2 = a2.length;
    if (h2 != b2.length) return { valid: false, mergeErrorPath: [] };
    c2 = [];
    g2 = a2.length;
    h2 = 0;
    while (h2 < g2) {
      m2 = wc(a2[h2], b2[h2]);
      if (!m2.valid) {
        c2 = [];
        c2.push(h2);
        a2 = m2.mergeErrorPath;
        if (Array.isArray(a2)) {
          h2 = a2.length;
          b2 = 0;
          while (b2 < h2) {
            g2 = a2[b2];
            c2.push(g2);
            b2 = b2 + 1;
          }
        }
        return { valid: false, mergeErrorPath: c2 };
      }
      d2 = m2.data;
      c2.push(d2);
      h2 = h2 + 1;
    }
    return { valid: true, data: c2 };
  }
  return { valid: false, mergeErrorPath: [] };
};
var Xf = (i2, e2, f2) => {
  var b2 = ka(i2, "left");
  var a2 = ka(i2, "right");
  if (!b2 || !a2) return;
  i2 = wa(b2, e2.value, f2);
  var h2 = b2;
  var k2 = a2;
  a2 = wa(a2, e2.value, f2);
  if (aa(i2) || aa(a2)) {
    f2 = [];
    f2.push(Promise.resolve(i2));
    f2.push(Promise.resolve(a2));
    e2.$pending = Promise.all(f2).then(function(a3) {
      let b3 = a3[0];
      ud(e2, b3, a3[1]);
      return e2;
    });
    return;
  }
  ud(e2, i2, a2);
};
var ud = (e2, a2, b2) => {
  var c2 = {};
  var d2 = {};
  var o2 = a2.issues;
  var g2 = o2.length;
  var o2 = void 0, h2 = 0, f2, i2, j2, k2;
  while (h2 < g2) {
    !vd(a2.issues[h2], "l", c2, d2) ? (f2 = e2.issues, i2 = a2.issues[h2], f2.push(i2)) : o2 === void 0 && "unrecognized_keys" == a2.issues[h2].code && (o2 = a2.issues[h2]);
    h2 = h2 + 1;
  }
  h2 = b2.issues;
  g2 = h2.length;
  h2 = 0;
  while (h2 < g2) {
    !vd(b2.issues[h2], "r", c2, d2) ? (f2 = e2.issues, i2 = b2.issues[h2], f2.push(i2)) : o2 === void 0 && "unrecognized_keys" == b2.issues[h2].code && (o2 = b2.issues[h2]);
    h2 = h2 + 1;
  }
  h2 = [];
  g2 = pa(c2);
  j2 = g2.length;
  d2 = 0;
  while (d2 < j2) {
    f2 = g2[d2];
    i2 = c2[f2];
    i2.l ? (k2 = c2[f2], i2 = !!k2.r) : i2 = false;
    i2 && h2.push(f2);
    d2 = d2 + 1;
  }
  if (h2.length > 0 && !(o2 === void 0)) {
    f2 = [];
    g2 = o2.keys;
    i2 = h2.length;
    c2 = 0;
    while (c2 < i2) {
      j2 = g2.length;
      d2 = 0;
      while (d2 < j2) {
        k2 = g2[d2];
        k2 == h2[c2] && (k2 = h2[c2], f2.push(k2));
        d2 = d2 + 1;
      }
      c2 = c2 + 1;
    }
    f2.length > 0 && (o2 = ia({}, o2), o2.keys = f2, h2 = e2.issues, h2.push(o2));
  }
  o2 = wc(a2.value, b2.value);
  if (o2.valid) {
    e2.value = o2.data;
  } else {
    if (!Ub(e2)) {
      e2 = o2.mergeErrorPath;
      throw na("Unmergable intersection. Error path: " + JSON.stringify(e2, void 0, void 0));
    }
  }
};
var vd = (K2, a2, b2, h2) => {
  var O2 = K2.path;
  var c2, g2;
  if ("unrecognized_keys" == K2.code && (O2 == null || 0 == O2.length)) {
    O2 = K2.keys;
    g2 = O2.length;
    h2 = 0;
    while (h2 < g2) {
      K2 = O2[h2];
      (b2[K2] === void 0 || b2[K2] == null) && (b2[K2] = {});
      b2[K2][a2] = true;
      h2 = h2 + 1;
    }
    return true;
  }
  if ("invalid_key" == K2.code && "record" == K2.origin && !(O2 === void 0) && 1 == O2.length) return c2 = O2[0], h2[c2] === void 0 && (h2[c2] = K2), (b2[c2] === void 0 || b2[c2] == null) && (b2[c2] = {}), K2 = b2[c2], K2[a2] = true, true;
  return false;
};
var wd = (n2) => {
  n2 = typeof n2;
  if ("string" == n2) return true;
  if ("number" == n2) return true;
  if ("symbol" == n2) return true;
  return false;
};
var xd = (a2, b2, e2, n2, y2, f2) => {
  var c2 = a2.issues;
  c2.length > 0 && (wd(n2) ? Xa(a2.issues, e2.issues, n2) : (c2 = e2.issues, c2.push({ code: "invalid_key", origin: "map", issues: sd(a2.issues, f2), input: y2, path: [] })));
  a2 = b2.issues;
  a2.length > 0 && (wd(n2) ? Xa(b2.issues, e2.issues, n2) : (a2 = e2.issues, a2.push({ code: "invalid_element", origin: "map", key: n2, issues: sd(b2.issues, f2), input: y2, path: [] })));
};
var Pf = (i2, e2, f2) => {
  var j2 = e2.value;
  if (!qa(Map, j2)) {
    e2.issues.push(Aa("map", j2));
    return;
  }
  var q2 = cb(i2, e2, /* @__PURE__ */ new Map());
  var g2 = [];
  var m2 = j2.entries();
  var d2 = m2.next();
  var N2 = Map;
  while (!d2.done) {
    var h2 = d2.value;
    var c2 = h2[0];
    var k2 = h2[1];
    var a2 = { value: c2, issues: [] };
    var b2 = { value: k2, issues: [] };
    var l2 = ka(i2, "keyType");
    !l2 || (a2 = wa(l2, c2, f2));
    d2 = ka(i2, "valueType");
    !d2 || (b2 = wa(d2, k2, f2));
    aa(a2) || aa(b2) ? (d2 = [], d2.push(Promise.resolve(a2)), d2.push(Promise.resolve(b2)), g2.push(Promise.all(d2).then(/* @__PURE__ */ ((a3, b3, d3, g3, h3) => function(c3) {
      let s2 = c3[0];
      xd(s2, c3[1], a3, h3, d3, b3);
      let r2 = c3[0], n2 = r2.value, l3 = c3[1].value;
      g3.set(n2, l3);
    })(e2, f2, j2, q2, c2)))) : (xd(a2, b2, e2, c2, j2, f2), q2.set(a2.value, b2.value));
    d2 = m2.next();
  }
  e2.value = q2;
  g2.length > 0 && (e2.$pending = Promise.all(g2).then(function(a3) {
    e2.value = q2;
    return e2;
  }));
};
var hf = (i2, e2, f2) => {
  var j2 = e2.value;
  var q2, a2, b2, c2;
  if (!X(j2) || j2.add === void 0) {
    e2.issues.push(Aa("set", j2));
    return;
  }
  q2 = cb(i2, e2, la());
  c2 = j2.values();
  j2 = c2.next();
  while (!j2.done) {
    a2 = j2.value;
    b2 = ka(i2, "valueType");
    b2 ? vb(e2, wa(b2, a2, f2), function(G2) {
      var b3 = G2.issues;
      b3.length > 0 && qd(G2.issues, e2.issues);
      var l2 = G2.value;
      q2.add(l2);
    }) : q2.add(a2);
    j2 = c2.next();
  }
  e2.value = q2;
};
var Xb = (i2, e2, f2, x2) => {
  if (!("function" == typeof x2)) return e2;
  var a2 = function(o2) {
    if ("string" == typeof o2) {
      var b3 = e2.value;
      o2 = { message: o2, code: "custom", input: b3, inst: i2.handle };
    } else {
      !o2.fatal || (o2.continue = false);
      o2.code === void 0 && (o2.code = "custom");
      true === "input" in o2 || (o2.input = e2.value);
      o2.inst === void 0 && (o2.inst = i2.handle);
    }
    var v2 = e2.issues;
    v2.push(o2);
  };
  var b2 = e2.value;
  a2 = { addIssue: a2, value: b2, issues: e2.issues };
  x2 = x2(e2.value, a2);
  if (aa(x2)) {
    var p2 = void 0;
    if (!(f2 === void 0) && false === f2.async) throw new Error(bg);
    return x2.then(function(o2) {
      e2.value = o2;
      return e2;
    });
  }
  e2.value = x2;
  return e2;
};
var xc = (h2) => {
  var t2 = h2.issues;
  var g2 = t2.length;
  h2 = 0;
  while (h2 < g2) {
    var a2 = t2[h2];
    if ("unrecognized_keys" != a2.code) return true;
    h2 = h2 + 1;
  }
  return false;
};
var fb = (e2, f2, a2) => !!a2 ? ra(a2, e2, f2) : e2;
var yd = (i2, e2, f2) => {
  if (xc(e2)) return e2.aborted = true, e2;
  var a2 = i2.def.transform;
  var b2 = ka(i2, "out");
  if ("function" == typeof a2) {
    a2 = Xb(i2, e2, f2, a2);
    if (aa(a2)) return a2.then(function(o2) {
      return fb(o2, f2, b2);
    });
  }
  return fb(e2, f2, b2);
};
var nf = (i2, e2, f2) => {
  var G2 = ka(i2, "in");
  var b2 = ka(i2, "out");
  var c2 = i2.def.transform;
  var a2 = i2.def.reverseTransform;
  if (31 == i2.kind) {
    if (Ma(f2)) throw new Fc("ZodTransform");
    if (!(f2 === void 0) && X(f2)) {
      G2 = f2["~memo"];
      if (X(G2) && !(G2.backEdges === void 0) && !(G2.backEdges == null) && G2.backEdges.has(e2.value)) {
        i2 = new Error("Cannot parse a reference cycle that closes through a transform");
        i2.name = "ZodCyclicError";
        throw i2;
      }
    }
    return "function" == typeof c2 ? Xb(i2, e2, f2, c2) : e2;
  }
  if (Ma(f2)) {
    if (b2) {
      var w2 = null;
      var y2 = b2;
      b2 = ra(b2, e2, f2);
      if (aa(b2)) return b2.then(function(d2) {
        if (xc(d2)) return d2.aborted = true, d2;
        var b3 = "function" == typeof a2 ? Xb(i2, d2, f2, a2) : d2;
        if (aa(b3)) return b3.then(function(c3) {
          return fb(c3, f2, G2);
        });
        return fb(d2, f2, G2);
      });
      if (xc(e2)) return e2.aborted = true, e2;
    }
    if ("function" == typeof a2) {
      a2 = Xb(i2, e2, f2, a2);
      if (aa(a2)) return a2.then(function(o2) {
        return fb(o2, f2, G2);
      });
    }
    return fb(e2, f2, G2);
  }
  if (G2) {
    var I2 = null;
    var K2 = G2;
    G2 = ra(G2, e2, f2);
    if (aa(G2)) return G2.then(function(o2) {
      return yd(i2, o2, f2);
    });
  }
  return yd(i2, e2, f2);
};
var yc = (x2, y2, a2, b2) => b2 ? te(function(i2, u2) {
  return Oa(i2, u2, void 0, void 0);
}, function(a3, c2, e2) {
  return a3.apply(c2, e2);
}, y2, a2, x2) : function() {
  return Na(a2, x2.apply(this, Na(y2, Array.from(arguments), void 0, void 0)), void 0, void 0);
};
var Nf = (i2, e2) => {
  var j2 = e2.value;
  if (!("function" == typeof j2)) {
    sa(e2, "function", j2);
    return;
  }
  var y2 = i2.def.input;
  var a2 = i2.def.output;
  var b2 = va(a2);
  if (b2) {
    var g2 = null;
    i2 = 30 == b2.kind;
  } else {
    i2 = false;
  }
  e2.value = yc(j2, y2, a2, i2);
};
var yb = (e2, i2, f2) => {
  var a2 = [];
  var h2 = e2.issues;
  var g2 = h2.length;
  h2 = 0;
  while (h2 < g2) {
    a2.push(Ta(e2.issues[h2], i2, f2));
    h2 = h2 + 1;
  }
  i2 = e2.value;
  return { value: i2, issues: a2 };
};
var gb = (G2) => {
  var a2 = G2.issues;
  if (a2.length > 0) return a2 = G2.issues, { success: false, error: new Ha(a2) };
  return { success: true, data: G2.value };
};
var zc = (k2, u2, f2) => {
  let a2 = k2._zod;
  return a2.run.call(k2._zod, { value: u2, issues: [] }, f2);
};
var zd = (f2) => {
  if (f2 == null) return { async: false };
  f2 = ia({}, f2);
  f2.async = false;
  return f2;
};
var Yb = (k2, e2, f2) => {
  f2 = zd(f2);
  e2 = zc(k2, e2, f2);
  if (aa(e2)) throw new Error(bg);
  var a2 = e2.issues;
  if (0 == a2.length) return { success: true, data: e2.value };
  Ua();
  return gb(yb(e2, da(k2), f2));
};
var Ad = (k2, e2, f2, a2) => {
  Ua();
  var b2 = da(k2);
  var c2 = yb(e2, b2, f2);
  var E2 = gb(c2);
  a2 == null && (a2 = Ad);
  rb(E2.error, a2);
  throw E2.error;
};
var Na = (k2, e2, f2, a2) => {
  f2 = zd(f2);
  e2 = zc(k2, e2, f2);
  if (aa(e2)) throw new Error(bg);
  var E2 = e2.issues;
  if (0 == E2.length) return e2.value;
  Ua();
  var j2 = da(k2);
  var l2 = yb(e2, j2, f2);
  E2 = gb(l2);
  a2 == null && (a2 = Na);
  rb(E2.error, a2);
  throw E2.error;
};
var Zb = /* @__PURE__ */ (function() {
  let a2 = (i2, e2, f2) => {
    var c2 = e2.issues;
    if (0 == c2.length) return e2;
    Ua();
    return yb(e2, i2, f2);
  };
  let b2 = (e2, u2, f2) => {
    var i2 = da(e2);
    e2 = zc(e2, u2, f2);
    if (aa(e2)) return e2.then(function(o2) {
      return a2(i2, o2, f2);
    });
    return a2(i2, e2, f2);
  };
  return function(E2, u2, c2) {
    c2 == null ? c2 = { async: true } : (c2 = ia({}, c2), c2.async = true);
    E2 = b2(E2, u2, c2);
    if (aa(E2)) return E2.then(function(G2) {
      return gb(G2);
    });
    return Promise.resolve(gb(E2));
  };
})();
var Oa = (k2, u2, f2, a2) => Zb(k2, u2, f2).then(function(E2) {
  if (E2.success) return E2.data;
  var m2 = a2 == null ? Oa : a2, b2;
  rb(E2.error, m2);
  throw E2.error;
});
var Gf = (R2, n2, a2, b2) => {
  ba(R2, n2, { configurable: true, enumerable: false, get: function() {
    let g2 = a2(this);
    ba(this, n2, { configurable: true, writable: true, enumerable: b2, value: g2 });
    return g2;
  }, set: function(j2) {
    ba(this, n2, { configurable: true, writable: true, enumerable: true, value: j2 });
  } });
};
var Bd = (a2) => {
  var b2 = [];
  if (Array.isArray(a2)) {
    var h2 = a2.length;
    var w2 = 0, C2, g2, e2, c2, d2;
    while (w2 < h2) {
      C2 = a2[w2];
      b2.push(C2);
      w2 = w2 + 1;
    }
    return b2;
  }
  if (!X(a2) || a2 == null) return b2;
  c2 = [];
  w2 = pa(a2);
  g2 = w2.length;
  h2 = 0;
  while (h2 < g2) {
    C2 = a2[w2[h2]];
    "number" == typeof C2 && c2.push(C2);
    h2 = h2 + 1;
  }
  h2 = 0;
  while (h2 < g2) {
    d2 = Number(w2[h2]);
    if ("number" == typeof d2) {
      e2 = c2.length;
      C2 = 0;
      var K2 = Number;
      var N2 = void 0;
      for (; ; ) {
        if (C2 >= e2) {
          C2 = false;
          break;
        }
        if (c2[C2] === d2) {
          C2 = true;
          break;
        }
        C2 = C2 + 1;
      }
    } else {
      C2 = false;
    }
    C2 || (C2 = a2[w2[h2]], b2.push(C2));
    h2 = h2 + 1;
  }
  return b2;
};
var vf = (T2, D2) => {
  var R2 = T2.prototype;
  var a2 = function(n2, a3) {
    ba(R2, n2, { configurable: true, enumerable: true, get: function() {
      let c2 = this._zod;
      return c2.def[a3];
    } });
  };
  "ZodArray" == D2 && a2("element", "element");
  ("ZodRecord" == D2 || "ZodMap" == D2) && (a2("keyType", "keyType"), a2("valueType", "valueType"));
  "ZodSet" == D2 && a2("valueType", "valueType");
  ("ZodUnion" == D2 || "ZodDiscriminatedUnion" == D2 || "ZodXor" == D2) && (a2("options", "options"), a2("discriminator", "discriminator"));
  ("ZodPipe" == D2 || "ZodCodec" == D2 || "ZodPreprocess" == D2) && (a2("in", "in"), a2("out", "out"));
  "ZodEnum" == D2 && (ba(R2, "enum", { configurable: true, enumerable: true, get: function() {
    var b2 = this._zod;
    var g2 = b2.def;
    var a3 = g2.entries;
    var h2;
    if (X(a3) && !Array.isArray(a3)) return a3;
    b2 = {};
    if (Array.isArray(a3)) {
      g2 = a3.length;
      h2 = 0;
      while (h2 < g2) {
        b2[a3[h2]] = a3[h2];
        h2 = h2 + 1;
      }
    }
    return b2;
  } }), ba(R2, "options", { configurable: true, enumerable: true, get: function() {
    let b2 = this._zod, c2 = b2.def;
    return Bd(c2.entries);
  } }));
  "ZodLiteral" == D2 && (ba(R2, "values", { configurable: true, enumerable: true, get: function() {
    let b2 = this._zod;
    return b2.values;
  } }), ba(R2, "value", { configurable: true, enumerable: true, get: function() {
    var b2 = this._zod;
    var c2 = b2.def;
    var A2 = c2.values;
    Array.isArray(A2) || (A2 = Array, b2 = this._zod, A2 = A2.from(b2.values));
    if (A2.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return A2[0];
  } }));
};
var _ = /* @__PURE__ */ (function() {
  let a2 = (l2) => {
    var h2 = ga.getOwnPropertyDescriptor(l2, "shape");
    if (!(h2 === void 0)) {
      var z2 = ga;
      if (!(h2 == null) && "function" == typeof h2.get) return;
    }
    var g2 = l2.shape;
    if (g2 === void 0) {
      var o2 = g2;
      g2 = {};
    }
    if (g2 == null) {
      var q2 = g2;
      g2 = {};
    }
    cc.set(l2, g2);
    ba(l2, "shape", { configurable: true, get: function() {
      var b3 = {};
      var d3 = Reflect.ownKeys(g2);
      var e3 = d3.length;
      var c3 = 0, f3, y2, h3;
      var i2 = g2;
      var q3 = Reflect;
      while (c3 < e3) {
        f3 = d3[c3];
        y2 = g2;
        h3 = d3[c3];
        Ca(b3, f3, Reflect.get(y2, h3));
        c3 = c3 + 1;
      }
      ba(l2, "shape", { value: b3, writable: true, enumerable: true, configurable: true });
      cc.set(l2, b3);
      return b3;
    } });
  };
  let b2 = (D2, T2) => {
    var g2 = la();
    g2.add("ZodType");
    g2.add("$ZodType");
    g2.add(D2);
    D2.length > 0 && g2.add("$" + D2);
    D2 = T2.__parent;
    var h2 = 0;
    while (!(D2 === void 0) && !(D2 == null) && h2 < 8) {
      T2 = D2.name;
      T2.length > 0 && (g2.add(T2), g2.add("$" + T2));
      T2 = D2.__parent;
      D2 = T2;
      h2 = h2 + 1 | 0;
    }
    return g2;
  };
  let c2 = (z2, N2) => {
    var g2 = N2.check;
    var h2, i2;
    ("min_length" == g2 || "min_size" == g2) && (h2 = z2.minimum, (h2 === void 0 || N2.minimum > h2) && (z2.minimum = N2.minimum));
    ("max_length" == g2 || "max_size" == g2) && (h2 = z2.maximum, (h2 === void 0 || N2.maximum < h2) && (z2.maximum = N2.maximum));
    "length_equals" == g2 && (z2.minimum = N2.length, z2.maximum = N2.length, z2.length = N2.length);
    "size_equals" == g2 && (z2.minimum = N2.size, z2.maximum = N2.size, z2.size = N2.size);
    "greater_than" == g2 && (h2 = N2.inclusive, false === h2 ? (h2 = z2.exclusiveMinimum, (h2 === void 0 || N2.value > h2) && (z2.exclusiveMinimum = N2.value)) : (h2 = z2.minimum, (h2 === void 0 || N2.value > h2) && (z2.minimum = N2.value)));
    "less_than" == g2 && (h2 = N2.inclusive, false === h2 ? (h2 = z2.exclusiveMaximum, (h2 === void 0 || N2.value < h2) && (z2.exclusiveMaximum = N2.value)) : (h2 = z2.maximum, (h2 === void 0 || N2.value < h2) && (z2.maximum = N2.value)));
    "multiple_of" == g2 && z2.multipleOf === void 0 && (z2.multipleOf = N2.value);
    "number_format" == g2 && (z2.format = N2.format, h2 = N2.format, ("safeint" == h2 || "int" == h2) && (z2.minimum = Number.MIN_SAFE_INTEGER, z2.maximum = Number.MAX_SAFE_INTEGER), "int32" == h2 && (z2.minimum = -2147483648, z2.maximum = 2147483647), "uint32" == h2 && (z2.minimum = 0, z2.maximum = 4294967295), "float32" == h2 && (z2.minimum = -34028234663852886e22, z2.maximum = 34028234663852886e22), "float64" == h2 && (z2.minimum = 0 - +Number.MAX_VALUE, z2.maximum = Number.MAX_VALUE), h2.includes("int") && (z2.pattern = $("^-?\\d+$", hg)));
    ("string_format" == g2 || "lowercase" == g2 || "uppercase" == g2) && ("string_format" == g2 ? z2.format = N2.format : z2.format = g2, !(N2.pattern === void 0) && !(N2.pattern == null) && "jwt" != z2.format && (z2.patterns === void 0 && (z2.patterns = la()), z2.patterns.add(N2.pattern)), "base64" == z2.format && (z2.contentEncoding = "base64"));
    "starts_with" == g2 && (z2.patterns === void 0 && (z2.patterns = la()), i2 = N2.prefix.replace($(gg, "g"), "\\$&"), h2 = z2.patterns, h2.add($("^" + i2 + ".*", hg)));
    "ends_with" == g2 && (z2.patterns === void 0 && (z2.patterns = la()), i2 = N2.suffix.replace($(gg, "g"), "\\$&"), h2 = z2.patterns, h2.add($(".*" + i2 + "$", hg)));
    "includes" == g2 && (z2.patterns === void 0 && (z2.patterns = la()), h2 = N2.includes.replace($(gg, "g"), "\\$&"), "number" == typeof N2.position ? (i2 = z2.patterns, i2.add($("^.{" + N2.position + "}" + h2, hg))) : (i2 = z2.patterns, i2.add($(h2, hg))));
    "mime_type" == g2 && (z2.mime = N2.mime);
  };
  let d2 = (k2, l2) => {
    var g2 = k2._zod;
    var z2 = g2.bag;
    "string" == typeof l2.check && c2(z2, l2);
    "string" == typeof l2.format && z2.format === void 0 && (z2.format = l2.format);
    k2 = l2.checks;
    if (!Array.isArray(k2)) return;
    g2 = k2.length;
    l2 = 0;
    while (l2 < g2) {
      c2(z2, sc(k2[l2]));
      l2 = l2 + 1;
    }
  };
  let e2 = (k2, l2, T2, g2) => {
    Ua();
    if (X(k2._zod)) {
      var i2 = k2._zod;
      var h2 = !(i2.id === void 0);
    } else {
      h2 = false;
    }
    if (h2) return;
    h2 = { id: 0, kind: 0, handle: null, def: null, ctor: null, typeName: "", trait: "", values: null, optin: 0, optout: 0, hasChecks: false };
    we(h2, l2);
    h2.ctor = T2;
    h2.trait = g2;
    T2 = b2(g2, T2);
    "string" == typeof l2.check && T2.add("$ZodCheck");
    f2(k2, h2, T2);
    15 == h2.kind && a2(l2);
    d2(k2, l2);
    Ce(h2);
  };
  let f2 = (k2, i2, g2) => {
    i2.handle = k2;
    var R2 = i2.ctor._zodProto;
    var h2;
    R2 == null && (R2 = {});
    R2 = ga.create(R2);
    R2.id = i2.id;
    R2.def = i2.def;
    R2.bag = {};
    R2.version = be;
    R2.traits = g2;
    R2.constr = i2.ctor;
    g2 = function(e3, f3) {
      return wb(i2, e3, f3);
    };
    h2 = function(e3, f3) {
      return ra(i2, e3, f3);
    };
    R2.parse = g2;
    R2.run = h2;
    sb(i2) && (R2.memoizer = { recursive: void 0, handoff: void 0, ctx: void 0, bucket: void 0, open: [] });
    ba(R2, "propValues", { enumerable: true, configurable: true, get: function() {
      return xb(k2);
    } });
    ba(k2, "_zod", Lb(R2));
    Le(k2, i2, R2, g2, h2);
  };
  return function(D2, h2) {
    var i2 = {};
    if (!(h2 === void 0) && X(h2._zodProto)) {
      var j2 = h2._zodProto;
      ga.setPrototypeOf(i2, j2);
    }
    var m2 = g2;
    var g2 = (0, function() {
      if (this === void 0 || this == null || !X(this)) {
        var a3 = g2.prototype;
        a3 = ga.create(a3);
      } else {
        a3 = this;
      }
      var l2 = arguments[0];
      var d3;
      !(l2 === void 0) && X(l2) && "string" == typeof l2.type && e2(a3, l2, g2, D2);
      return a3;
    });
    g2.__parent = h2;
    g2._zodProto = i2;
    h2 === void 0 || (i2 = g2.prototype, j2 = h2.prototype, ga.setPrototypeOf(i2, j2));
    h2 = g2.prototype;
    ba(h2, "def", { configurable: true, enumerable: true, get: function() {
      let b3 = this._zod;
      return b3.def;
    } });
    h2 = g2.prototype;
    ba(h2, "type", { configurable: true, enumerable: true, get: function() {
      let b3 = this._zod, c3 = b3.def;
      return c3.type;
    } });
    h2 = g2;
    ba(h2, "name", Fa(D2));
    h2 = g2;
    ba(h2, "init", Fa(function(k2, l2) {
      !(l2 === void 0) && X(l2) && e2(k2, l2, g2, D2);
      return k2;
    }));
    h2 = g2;
    i2 = Symbol.hasInstance;
    ba(h2, i2, Fa(function(k2) {
      if (k2 == null || !X(k2)) return false;
      var b3 = k2._zod;
      if (b3 == null) return false;
      k2 = b3.traits;
      return !!k2.has(D2);
    }));
    return g2;
  };
})();
var Le = (k2, a2, v2, b2, c2) => {
  $f(k2);
  var d2 = a2.kind;
  if (0 == d2) {
    a2 = Rd(k2);
  } else {
    if (1 == d2) {
      a2 = Sd(k2);
    } else {
      if (2 == d2) {
        a2 = Td(k2);
      } else {
        if (15 == d2) {
          var e2 = {};
          a2 = (0, function(Mn, f2) {
            var y2 = Mn.value;
            var Hn, l2, Jn, d3, Ln, In, v3, g2, h2, i2, n2, Gn, Kn, j2, p2, m2, o2, q2;
            if (!X(y2) || Array.isArray(y2)) return Mn.issues.push({ expected: "object", code: "invalid_type", input: y2, inst: k2 }), Mn;
            l2 = this.def;
            Hn = this["~lil"];
            Hn === void 0 && (Hn = Dc(k2), this["~lil"] = Hn);
            Hn = true === Hn;
            !(l2.catchall === void 0) && !(l2.catchall == null) && (Hn = true);
            !(f2 === void 0) && !(f2 == null) && (Jn = f2.async, true === Jn && (Hn = true), Jn = f2.jitless, true === Jn && (Hn = true), "string" == typeof f2.direction && "backward" == f2.direction && (Hn = true));
            d3 = globalThis.__zod_globalConfig;
            !(d3 === void 0) && !(d3 == null) && true === d3.jitless && (Hn = true);
            if (Hn) {
              Jn = this.run;
              if (Jn == e2.fn) return c2.call(this, Mn, f2);
              return b2.call(this, Mn, f2);
            }
            Jn = l2.shape;
            Jn == null && (Jn = {});
            In = this["~skeys"];
            In === void 0 && (In = pa(Jn), this["~skeys"] = In);
            Ln = {};
            n2 = In.length;
            if (2 == n2) {
              Gn = In[0];
              if ("__proto__" != Gn) {
                Hn = Jn[Gn];
                if (!(Hn === void 0) && !(Hn == null)) {
                  v3 = Hn._zod;
                  if (!(v3 === void 0) && !(v3 == null) && "function" == typeof v3.run) {
                    l2 = true === Gn in y2;
                    Hn = void 0;
                    l2 && (Hn = y2[Gn]);
                    Hn = v3.run({ value: Hn, issues: [] }, f2);
                    if (aa(Hn)) throw new Error(bg);
                    "string" == typeof v3.optin ? (d3 = v3.optin, d3 = "optional" == d3 ? 1 : "defaulted" == d3 ? 2 : 0) : d3 = 0;
                    i2 = "string" == typeof v3.optout && "optional" == v3.optout ? 1 : 0;
                    h2 = Hn.issues;
                    var nh2 = h2.length;
                    var oh2 = nh2;
                    g2 = oh2;
                    l2 && 0 == g2 ? (Hn.value === void 0 ? Ln[Gn] = void 0 : Ln[Gn] = Hn.value, v3 = true) : v3 = false;
                    if (!v3) {
                      v3 = !l2 && 1 == i2 && 1 == d3;
                      if (!v3 && g2 > 0) {
                        if (0 != d3 && 1 == i2 && !l2) {
                          v3 = true;
                        } else {
                          j2 = 0;
                          while (j2 < g2) {
                            h2 = Hn.issues[j2];
                            m2 = [];
                            m2.push(Gn);
                            i2 = h2.path;
                            if (Array.isArray(i2)) {
                              o2 = i2.length;
                              Kn = 0;
                              while (Kn < o2) {
                                n2 = i2[Kn];
                                m2.push(n2);
                                Kn = Kn + 1;
                              }
                            }
                            h2.path = m2;
                            i2 = Mn.issues;
                            i2.push(h2);
                            j2 = j2 + 1;
                          }
                        }
                      }
                      !v3 && !l2 && 0 == d3 && (0 == g2 && (d3 = [], d3.push(Gn), v3 = { expected: "nonoptional", code: "invalid_type", input: void 0, path: d3 }, Mn.issues.push(v3)), v3 = true);
                      v3 || (Hn.value === void 0 ? l2 && (Ln[Gn] = void 0) : Ln[Gn] = Hn.value);
                    }
                  }
                }
              }
              Gn = In[1];
              if ("__proto__" != Gn) {
                v3 = Jn[Gn];
                if (!(v3 === void 0) && !(v3 == null)) {
                  In = v3._zod;
                  if (!(In === void 0) && !(In == null) && "function" == typeof In.run) {
                    v3 = true === Gn in y2;
                    Jn = void 0;
                    v3 && (Jn = y2[Gn]);
                    Jn = In.run({ value: Jn, issues: [] }, f2);
                    if (aa(Jn)) throw new Error(bg);
                    "string" == typeof In.optin ? (f2 = In.optin, f2 = "optional" == f2 ? 1 : "defaulted" == f2 ? 2 : 0) : f2 = 0;
                    l2 = "string" == typeof In.optout && "optional" == In.optout ? 1 : 0;
                    Hn = Jn.issues;
                    var Lh = Hn.length;
                    var Mh = Lh;
                    y2 = Mh;
                    v3 && 0 == y2 ? (Jn.value === void 0 ? Ln[Gn] = void 0 : Ln[Gn] = Jn.value, In = true) : In = false;
                    if (!In) {
                      In = !v3 && 1 == l2 && 1 == f2;
                      if (!In && y2 > 0) {
                        if (0 != f2 && 1 == l2 && !v3) {
                          In = true;
                        } else {
                          d3 = 0;
                          while (d3 < y2) {
                            Hn = Jn.issues[d3];
                            h2 = [];
                            h2.push(Gn);
                            l2 = Hn.path;
                            if (Array.isArray(l2)) {
                              j2 = l2.length;
                              g2 = 0;
                              while (g2 < j2) {
                                i2 = l2[g2];
                                h2.push(i2);
                                g2 = g2 + 1;
                              }
                            }
                            Hn.path = h2;
                            l2 = Mn.issues;
                            l2.push(Hn);
                            d3 = d3 + 1;
                          }
                        }
                      }
                      !In && !v3 && 0 == f2 && (0 == y2 && (f2 = [], f2.push(Gn), In = { expected: "nonoptional", code: "invalid_type", input: void 0, path: f2 }, Mn.issues.push(In)), In = true);
                      In || (Jn.value === void 0 ? v3 && (Ln[Gn] = void 0) : Ln[Gn] = Jn.value);
                    }
                  }
                }
              }
            } else {
              if (4 == n2) {
                v3 = In[0];
                Hn = Jn[v3];
                if (!(Hn === void 0) && !(Hn == null)) {
                  Gn = Hn._zod;
                  if (!(Gn === void 0) && !(Gn == null) && "function" == typeof Gn.run) {
                    l2 = true === v3 in y2;
                    Hn = void 0;
                    l2 && (Hn = y2[v3]);
                    Hn = Gn.run({ value: Hn, issues: [] }, f2);
                    if (aa(Hn)) throw new Error(bg);
                    "string" == typeof Gn.optin ? (d3 = Gn.optin, d3 = "optional" == d3 ? 1 : "defaulted" == d3 ? 2 : 0) : d3 = 0;
                    i2 = "string" == typeof Gn.optout && "optional" == Gn.optout ? 1 : 0;
                    h2 = Hn.issues;
                    var ii = h2.length;
                    var ji = ii;
                    g2 = ji;
                    l2 && 0 == g2 ? (Hn.value === void 0 ? Ln[v3] = void 0 : Ln[v3] = Hn.value, Gn = true) : Gn = false;
                    if (!Gn) {
                      Gn = !l2 && 1 == i2 && 1 == d3;
                      if (!Gn && g2 > 0) {
                        if (0 != d3 && 1 == i2 && !l2) {
                          Gn = true;
                        } else {
                          j2 = 0;
                          while (j2 < g2) {
                            h2 = Hn.issues[j2];
                            m2 = [];
                            m2.push(v3);
                            i2 = h2.path;
                            if (Array.isArray(i2)) {
                              o2 = i2.length;
                              Kn = 0;
                              while (Kn < o2) {
                                n2 = i2[Kn];
                                m2.push(n2);
                                Kn = Kn + 1;
                              }
                            }
                            h2.path = m2;
                            i2 = Mn.issues;
                            i2.push(h2);
                            j2 = j2 + 1;
                          }
                        }
                      }
                      !Gn && !l2 && 0 == d3 && (0 == g2 && (d3 = [], d3.push(v3), Gn = { expected: "nonoptional", code: "invalid_type", input: void 0, path: d3 }, Mn.issues.push(Gn)), Gn = true);
                      Gn || (Hn.value === void 0 ? l2 && (Ln[v3] = void 0) : Ln[v3] = Hn.value);
                    }
                  }
                }
                v3 = In[1];
                Hn = Jn[v3];
                if (!(Hn === void 0) && !(Hn == null)) {
                  Gn = Hn._zod;
                  if (!(Gn === void 0) && !(Gn == null) && "function" == typeof Gn.run) {
                    l2 = true === v3 in y2;
                    Hn = void 0;
                    l2 && (Hn = y2[v3]);
                    Hn = Gn.run({ value: Hn, issues: [] }, f2);
                    if (aa(Hn)) throw new Error(bg);
                    "string" == typeof Gn.optin ? (d3 = Gn.optin, d3 = "optional" == d3 ? 1 : "defaulted" == d3 ? 2 : 0) : d3 = 0;
                    i2 = "string" == typeof Gn.optout && "optional" == Gn.optout ? 1 : 0;
                    h2 = Hn.issues;
                    var Gi = h2.length;
                    var Hi = Gi;
                    g2 = Hi;
                    l2 && 0 == g2 ? (Hn.value === void 0 ? Ln[v3] = void 0 : Ln[v3] = Hn.value, Gn = true) : Gn = false;
                    if (!Gn) {
                      Gn = !l2 && 1 == i2 && 1 == d3;
                      if (!Gn && g2 > 0) {
                        if (0 != d3 && 1 == i2 && !l2) {
                          Gn = true;
                        } else {
                          j2 = 0;
                          while (j2 < g2) {
                            h2 = Hn.issues[j2];
                            m2 = [];
                            m2.push(v3);
                            i2 = h2.path;
                            if (Array.isArray(i2)) {
                              o2 = i2.length;
                              Kn = 0;
                              while (Kn < o2) {
                                n2 = i2[Kn];
                                m2.push(n2);
                                Kn = Kn + 1;
                              }
                            }
                            h2.path = m2;
                            i2 = Mn.issues;
                            i2.push(h2);
                            j2 = j2 + 1;
                          }
                        }
                      }
                      !Gn && !l2 && 0 == d3 && (0 == g2 && (d3 = [], d3.push(v3), Gn = { expected: "nonoptional", code: "invalid_type", input: void 0, path: d3 }, Mn.issues.push(Gn)), Gn = true);
                      Gn || (Hn.value === void 0 ? l2 && (Ln[v3] = void 0) : Ln[v3] = Hn.value);
                    }
                  }
                }
                v3 = In[2];
                Hn = Jn[v3];
                if (!(Hn === void 0) && !(Hn == null)) {
                  Gn = Hn._zod;
                  if (!(Gn === void 0) && !(Gn == null) && "function" == typeof Gn.run) {
                    l2 = true === v3 in y2;
                    Hn = void 0;
                    l2 && (Hn = y2[v3]);
                    Hn = Gn.run({ value: Hn, issues: [] }, f2);
                    if (aa(Hn)) throw new Error(bg);
                    "string" == typeof Gn.optin ? (d3 = Gn.optin, d3 = "optional" == d3 ? 1 : "defaulted" == d3 ? 2 : 0) : d3 = 0;
                    i2 = "string" == typeof Gn.optout && "optional" == Gn.optout ? 1 : 0;
                    h2 = Hn.issues;
                    var cj = h2.length;
                    var dj = cj;
                    g2 = dj;
                    l2 && 0 == g2 ? (Hn.value === void 0 ? Ln[v3] = void 0 : Ln[v3] = Hn.value, Gn = true) : Gn = false;
                    if (!Gn) {
                      Gn = !l2 && 1 == i2 && 1 == d3;
                      if (!Gn && g2 > 0) {
                        if (0 != d3 && 1 == i2 && !l2) {
                          Gn = true;
                        } else {
                          j2 = 0;
                          while (j2 < g2) {
                            h2 = Hn.issues[j2];
                            m2 = [];
                            m2.push(v3);
                            i2 = h2.path;
                            if (Array.isArray(i2)) {
                              o2 = i2.length;
                              Kn = 0;
                              while (Kn < o2) {
                                n2 = i2[Kn];
                                m2.push(n2);
                                Kn = Kn + 1;
                              }
                            }
                            h2.path = m2;
                            i2 = Mn.issues;
                            i2.push(h2);
                            j2 = j2 + 1;
                          }
                        }
                      }
                      !Gn && !l2 && 0 == d3 && (0 == g2 && (d3 = [], d3.push(v3), Gn = { expected: "nonoptional", code: "invalid_type", input: void 0, path: d3 }, Mn.issues.push(Gn)), Gn = true);
                      Gn || (Hn.value === void 0 ? l2 && (Ln[v3] = void 0) : Ln[v3] = Hn.value);
                    }
                  }
                }
                Gn = In[3];
                v3 = Jn[Gn];
                if (!(v3 === void 0) && !(v3 == null)) {
                  In = v3._zod;
                  if (!(In === void 0) && !(In == null) && "function" == typeof In.run) {
                    v3 = true === Gn in y2;
                    Jn = void 0;
                    v3 && (Jn = y2[Gn]);
                    Jn = In.run({ value: Jn, issues: [] }, f2);
                    if (aa(Jn)) throw new Error(bg);
                    "string" == typeof In.optin ? (f2 = In.optin, f2 = "optional" == f2 ? 1 : "defaulted" == f2 ? 2 : 0) : f2 = 0;
                    l2 = "string" == typeof In.optout && "optional" == In.optout ? 1 : 0;
                    Hn = Jn.issues;
                    var zj = Hn.length;
                    var Aj = zj;
                    y2 = Aj;
                    v3 && 0 == y2 ? (Jn.value === void 0 ? Ln[Gn] = void 0 : Ln[Gn] = Jn.value, In = true) : In = false;
                    if (!In) {
                      In = !v3 && 1 == l2 && 1 == f2;
                      if (!In && y2 > 0) {
                        if (0 != f2 && 1 == l2 && !v3) {
                          In = true;
                        } else {
                          d3 = 0;
                          while (d3 < y2) {
                            Hn = Jn.issues[d3];
                            h2 = [];
                            h2.push(Gn);
                            l2 = Hn.path;
                            if (Array.isArray(l2)) {
                              j2 = l2.length;
                              g2 = 0;
                              while (g2 < j2) {
                                i2 = l2[g2];
                                h2.push(i2);
                                g2 = g2 + 1;
                              }
                            }
                            Hn.path = h2;
                            l2 = Mn.issues;
                            l2.push(Hn);
                            d3 = d3 + 1;
                          }
                        }
                      }
                      !In && !v3 && 0 == f2 && (0 == y2 && (f2 = [], f2.push(Gn), In = { expected: "nonoptional", code: "invalid_type", input: void 0, path: f2 }, Mn.issues.push(In)), In = true);
                      In || (Jn.value === void 0 ? v3 && (Ln[Gn] = void 0) : Ln[Gn] = Jn.value);
                    }
                  }
                }
              } else {
                d3 = 0;
                while (d3 < n2) {
                  Gn = In[d3];
                  if ("__proto__" == Gn) {
                    d3 = d3 + 1;
                  } else {
                    Hn = Jn[Gn];
                    if (!(Hn === void 0) && !(Hn == null)) {
                      v3 = Hn._zod;
                      if (!(v3 === void 0) && !(v3 == null) && "function" == typeof v3.run) {
                        l2 = true === Gn in y2;
                        Hn = void 0;
                        l2 && (Hn = y2[Gn]);
                        Hn = v3.run({ value: Hn, issues: [] }, f2);
                        if (aa(Hn)) throw new Error(bg);
                        "string" == typeof v3.optin ? (g2 = v3.optin, g2 = "optional" == g2 ? 1 : "defaulted" == g2 ? 2 : 0) : g2 = 0;
                        j2 = "string" == typeof v3.optout && "optional" == v3.optout ? 1 : 0;
                        Kn = Hn.issues;
                        var Xj = Kn.length;
                        var Yj = Xj;
                        h2 = Yj;
                        l2 && 0 == h2 ? (Hn.value === void 0 ? Ln[Gn] = void 0 : Ln[Gn] = Hn.value, v3 = true) : v3 = false;
                        if (!v3) {
                          v3 = !l2 && 1 == j2 && 1 == g2;
                          if (!v3 && h2 > 0) {
                            if (0 != g2 && 1 == j2 && !l2) {
                              v3 = true;
                            } else {
                              Kn = 0;
                              while (Kn < h2) {
                                i2 = Hn.issues[Kn];
                                o2 = [];
                                o2.push(Gn);
                                j2 = i2.path;
                                if (Array.isArray(j2)) {
                                  q2 = j2.length;
                                  m2 = 0;
                                  while (m2 < q2) {
                                    p2 = j2[m2];
                                    o2.push(p2);
                                    m2 = m2 + 1;
                                  }
                                }
                                i2.path = o2;
                                m2 = Mn.issues;
                                m2.push(i2);
                                Kn = Kn + 1;
                              }
                            }
                          }
                          !v3 && !l2 && 0 == g2 && (0 == h2 && (g2 = [], g2.push(Gn), v3 = { expected: "nonoptional", code: "invalid_type", input: void 0, path: g2 }, Mn.issues.push(v3)), v3 = true);
                          v3 || (Hn.value === void 0 ? l2 && (Ln[Gn] = void 0) : Ln[Gn] = Hn.value);
                        }
                      }
                    }
                    d3 = d3 + 1;
                  }
                }
              }
            }
            Mn.value = Ln;
            return Mn;
          });
          e2.fn = a2;
        } else {
          if (16 == d2) {
            e2 = {};
            a2 = (0, function(Gh, f2) {
              var y2 = Gh.value;
              if (!Array.isArray(y2)) return Gh.issues.push({ expected: "array", code: "invalid_type", input: y2, inst: k2 }), Gh;
              var Dh = this["~lil"];
              Dh === void 0 && (Dh = Dc(k2), this["~lil"] = Dh);
              Dh = true === Dh;
              if (!(f2 === void 0) && !(f2 == null)) {
                var Ch = f2.async;
                true === Ch && (Dh = true);
                Ch = f2.jitless;
                true === Ch && (Dh = true);
                "string" == typeof f2.direction && "backward" == f2.direction && (Dh = true);
              }
              if (Dh) {
                Ch = this.run;
                if (Ch == e2.fn) return c2.call(this, Gh, f2);
                return b2.call(this, Gh, f2);
              }
              var Bh = this.def;
              Ch = Bh.element;
              if (Ch == null || Ch._zod === void 0 || !("function" == typeof Ch._zod.run)) return b2.call(this, Gh, f2);
              var i2 = Ch._zod;
              var j2 = y2.length;
              var d3 = new Array(j2);
              var t2 = Gh.issues;
              var g2 = [];
              Bh = 0;
              var Jg2 = Array;
              while (Bh < j2) {
                var Eh = i2.run;
                Ch = y2[Bh];
                var Fh = i2.run({ value: Ch, issues: [] }, f2);
                if (aa(Fh)) {
                  if (!(f2 === void 0) && !(f2 == null) && false === f2.async) throw new Error(bg);
                  g2.push(Fh.then(/* @__PURE__ */ ((a3, b3, c3) => function(o2) {
                    var K2 = o2.issues;
                    var P2;
                    if (!(K2 === void 0) && K2.length > 0) {
                      var g3 = K2.length;
                      P2 = 0;
                      while (P2 < g3) {
                        var e3 = [];
                        e3.push(+(0 + c3));
                        var d4 = K2[P2];
                        var O2 = d4.path;
                        if (Array.isArray(O2)) {
                          var h3 = O2.length;
                          d4 = 0;
                          while (d4 < h3) {
                            var f3 = O2[d4];
                            e3.push(f3);
                            d4 = d4 + 1;
                          }
                        }
                        O2 = K2[P2];
                        O2.path = e3;
                        O2 = K2[P2];
                        b3.push(O2);
                        P2 = P2 + 1;
                      }
                    }
                    a3[c3] = o2.value;
                  })(d3, t2, Bh)));
                } else {
                  Eh = Fh.issues;
                  if (!(Eh === void 0) && Eh.length > 0) {
                    var m2 = Eh.length;
                    Ch = 0;
                    while (Ch < m2) {
                      var h2 = [];
                      h2.push(+(0 + Bh));
                      Dh = Eh[Ch];
                      var v3 = Dh.path;
                      if (Array.isArray(v3)) {
                        var n2 = v3.length;
                        Dh = 0;
                        while (Dh < n2) {
                          var l2 = v3[Dh];
                          h2.push(l2);
                          Dh = Dh + 1;
                        }
                      }
                      l2 = Eh[Ch];
                      l2.path = h2;
                      h2 = Eh[Ch];
                      t2.push(h2);
                      Ch = Ch + 1;
                    }
                  }
                  d3[Bh] = Fh.value;
                }
                Bh = Bh + 1;
              }
              Gh.value = d3;
              return g2.length > 0 ? Promise.all(g2).then(function(a3) {
                return Gh;
              }) : Gh;
            });
            e2.fn = a2;
          } else {
            return;
          }
        }
      }
    }
  }
  v2["~pf"] = b2;
  v2["~rf"] = c2;
  15 == d2 || 16 == d2 ? v2.parse = b2 : v2.parse = a2;
  v2.run = gf(a2, ue(k2), c2, k2);
};
var Mf = (s2) => {
  if ("string" == typeof s2) return s2;
  if (X(s2) && !(s2 == null)) {
    if ("string" == typeof s2.error) return s2.error;
    if ("string" == typeof s2.message) return s2.message;
  }
  return hg;
};
var Pa = (a2) => {
  if (a2 == null) return {};
  if ("string" == typeof a2) return { error: function() {
    return a2;
  } };
  if ("function" == typeof a2) return { error: a2 };
  if (!X(a2)) return {};
  if (!(a2.message === void 0)) {
    if (!(a2.error === void 0)) throw na("Cannot specify both `message` and `error` params");
    a2.error = a2.message;
  }
  Reflect.deleteProperty(a2, "message");
  if ("string" == typeof a2.error) {
    var b2 = a2.error;
    var q2 = ia({}, a2);
    q2.error = function() {
      return b2;
    };
    return q2;
  }
  return a2;
};
var Cd = (a2) => {
  if ("number" == typeof a2) {
    a2 = +a2 | 0;
    if (a2 == -1) return "(?:[01]\\d|2[0-3]):[0-5]\\d";
    if (0 == a2) return "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{" + a2 + "}";
  }
  return "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
};
var Dd = (s2) => {
  var a2 = void 0;
  X(s2) && !(s2 == null) && (a2 = s2.precision);
  return $("^" + Cd(a2) + "$", hg);
};
var Ed = (s2) => {
  var a2 = void 0;
  if (X(s2) && !(s2 == null)) {
    a2 = s2.precision;
    var b2 = s2.offset, c2;
    c2 = s2.local;
  } else {
    b2 = false;
    c2 = false;
  }
  a2 = Cd(a2);
  s2 = b2 ? "Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)" : "Z";
  s2 = "(?:" + s2 + ")";
  c2 && (s2 = s2 + "?");
  return $("^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:" + a2 + s2 + ")$", hg);
};
var zb = (k2) => {
  da(k2).def.coerce = true;
  var v2 = k2._zod;
  if (v2["~pf"] === void 0 || v2["~rf"] === void 0) return;
  v2.parse = v2["~pf"];
  v2.run = v2["~rf"];
};
var ff = (a2) => 0 == a2 ? Z : 1 == a2 ? ha : 2 == a2 ? $a : 3 == a2 ? oa : 4 == a2 ? dc : 5 == a2 ? Ba : 6 == a2 ? ec : 7 == a2 ? fc : 8 == a2 ? Bb : 9 == a2 ? gc : 10 == a2 ? Ia : 11 == a2 ? ib : 12 == a2 ? hc : 13 == a2 ? Cb : 14 == a2 ? Ja : 15 == a2 ? ma : 16 == a2 ? ya : 17 == a2 ? ic : 18 == a2 ? Db : 19 == a2 ? jb : 20 == a2 ? kb : 21 == a2 ? Ka : 38 == a2 ? Eb : 22 == a2 ? Fb : 23 == a2 ? ab : 24 == a2 ? kc : 25 == a2 ? Gb : 26 == a2 ? Hb : 27 == a2 ? Ib : 28 == a2 ? lc : 29 == a2 ? lb : 30 == a2 ? Jb : 31 == a2 ? mb : 32 == a2 ? Ea : 33 == a2 ? Pc : 34 == a2 ? Ra : 35 == a2 ? ob : 37 == a2 ? mc : 39 == a2 ? Sa : 40 == a2 ? nc : Y;
var ca = (l2, s2) => {
  l2 = { type: l2 };
  ia(l2, Pa(s2));
  return l2;
};
var mf = (k2, D2, Q2, s2) => {
  ia(Q2, Pa(s2));
  return fa(k2, ea(D2, Q2));
};
var Af = (a2, m2, l2) => {
  l2 = ca(rf(a2), l2);
  l2.innerType = m2;
  return new (ff(a2))(l2);
};
var wf = (k2) => {
  var a2 = da(k2).def.shape;
  return a2 == null ? {} : a2;
};
var Qf = (k2) => {
  var a2 = da(k2).def.checks;
  k2 = Array.isArray(a2) && a2.length > 0;
  return k2;
};
var jf = (L2, h2) => {
  var a2 = Reflect.ownKeys(h2);
  var g2 = a2.length;
  h2 = 0;
  var q2 = Reflect;
  while (h2 < g2) {
    if (!("string" == typeof a2[h2])) {
      h2 = h2 + 1;
      continue;
    }
    var b2 = a2[h2];
    if (!Da.call(L2, b2)) throw na('Unrecognized key: "' + a2[h2] + kg);
    h2 = h2 + 1;
  }
};
var Df = (a2, b2) => {
  let c2 = {};
  ba(c2, "shape", { configurable: true, enumerable: true, get: function() {
    var o2 = {};
    var d2 = wf(a2);
    qb(o2, d2);
    !(b2 === void 0) && X(b2) && !(b2 == null) && qb(o2, b2);
    ba(this, "shape", { value: o2, writable: true, enumerable: true, configurable: true });
    return o2;
  } });
  return c2;
};
var kf = (a2, b2, c2, d2) => {
  if (c2 && Qf(a2)) {
    if (d2) throw na(eg);
    throw na(fg);
  }
  var e2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(da(a2).def));
  ba(e2, "shape", { configurable: true, enumerable: true, get: function() {
    var P2 = da(a2).def.shape;
    var U2, L2, g2, e3, f2, h2, i2;
    P2 == null && (P2 = {});
    !(b2 === void 0) && !(b2 == null) && jf(P2, b2);
    i2 = Reflect.ownKeys(P2);
    L2 = {};
    g2 = i2.length;
    h2 = 0;
    var D2 = Reflect;
    while (h2 < g2) {
      U2 = i2[h2];
      if (!("string" == typeof U2)) {
        h2 = h2 + 1;
        continue;
      }
      e3 = P2[U2];
      (b2 == null || b2[U2]) && (e3 = c2 ? d2 ? new bb({ type: "optional", innerType: e3, exact: true }) : Af(23, e3, void 0) : Af(28, e3, void 0));
      Ca(L2, U2, e3);
      h2 = h2 + 1;
    }
    ba(this, "shape", { value: L2, writable: true, enumerable: true, configurable: true });
    return L2;
  } });
  c2 && (e2.checks = []);
  return new ma(e2);
};
var Fd = (a2, l2) => {
  if (Array.isArray(a2)) {
    var b2 = {};
    var g2 = a2.length;
    var h2 = 0;
    while (h2 < g2) {
      Ca(b2, a2[h2], a2[h2]);
      h2 = h2 + 1;
    }
    a2 = b2;
  }
  l2 = ca("enum", l2);
  l2.entries = a2;
  return new Ja(l2);
};
var Ac = (a2, l2) => {
  a2 == null && (a2 = {});
  l2 = ca("object", l2);
  l2.shape = a2;
  return new ma(l2);
};
var Bc = (a2, b2, s2) => {
  var l2 = ca("tuple", s2);
  l2.items = a2;
  !(b2 === void 0) && !(b2 == null) && (l2.rest = b2);
  return new ic(l2);
};
var _b = (a2, b2, l2) => {
  if (b2 == null || b2._zod === void 0) {
    l2 = new Z(ca("string", void 0));
    var q2 = a2;
    a2 = l2;
    l2 = b2;
    b2 = q2;
  }
  l2 = ca("record", l2);
  l2.keyType = a2;
  l2.valueType = b2;
  return new Db(l2);
};
var Me = (n2, U2, h2) => {
  var l2 = ca("union", h2);
  l2.options = U2;
  l2.discriminator = n2;
  l2.inclusive = false;
  if (Array.isArray(U2)) {
    var g2 = U2.length;
    h2 = 0;
    while (h2 < g2) {
      var a2 = U2[h2];
      if (a2 === void 0) {
        h2 = h2 + 1;
        continue;
      }
      if (a2 == null) {
        h2 = h2 + 1;
        continue;
      }
      if (!X(a2)) {
        h2 = h2 + 1;
        continue;
      }
      var v2 = a2._zod;
      if (v2 === void 0) {
        h2 = h2 + 1;
        continue;
      }
      if (v2 == null) {
        h2 = h2 + 1;
        continue;
      }
      a2 = v2.def;
      if (a2 === void 0) {
        h2 = h2 + 1;
        continue;
      }
      if (a2 == null) {
        h2 = h2 + 1;
        continue;
      }
      a2 = cc.get(a2);
      if (a2 === void 0) {
        h2 = h2 + 1;
        continue;
      }
      if (a2 == null) {
        h2 = h2 + 1;
        continue;
      }
      if (!Da.call(a2, n2)) throw na(cg + h2 + kg);
      h2 = h2 + 1;
    }
  }
  return new jc(l2);
};
var Gd = (a2, q2, s2) => {
  let b2 = nb, c2 = s2.decode;
  return new b2({ type: "pipe", in: a2, out: q2, transform: c2, reverseTransform: s2.encode });
};
var af = () => {
  let a2 = [];
  a2.push("true");
  a2.push("1");
  a2.push("yes");
  a2.push("on");
  a2.push("y");
  a2.push("enabled");
  return a2;
};
var bf = () => {
  let a2 = [];
  a2.push("false");
  a2.push("0");
  a2.push("no");
  a2.push("off");
  a2.push("n");
  a2.push("disabled");
  return a2;
};
var cf = (h2) => {
  var e2 = Pa(h2);
  var a2 = e2.truthy;
  var b2 = e2.falsy;
  (a2 === void 0 || !Array.isArray(a2)) && (a2 = af());
  (b2 === void 0 || !Array.isArray(b2)) && (b2 = bf());
  var c2 = false;
  "string" == typeof e2.case && "sensitive" == e2.case && (c2 = true);
  if (!c2) {
    var f2 = [];
    var g2 = a2.length;
    h2 = 0;
    var v2 = c2;
    var y2 = a2;
    while (h2 < g2) {
      if ("string" == typeof a2[h2]) {
        f2.push(a2[h2].toLowerCase());
      } else {
        var x2 = a2[h2];
        f2.push(x2);
      }
      h2 = h2 + 1;
    }
    a2 = f2;
    f2 = [];
    g2 = b2.length;
    h2 = 0;
    var J2 = b2;
    while (h2 < g2) {
      "string" == typeof b2[h2] ? f2.push(b2[h2].toLowerCase()) : (x2 = b2[h2], f2.push(x2));
      h2 = h2 + 1;
    }
    b2 = f2;
  }
  f2 = la();
  g2 = la();
  x2 = a2.length;
  h2 = 0;
  var U2 = a2;
  while (h2 < x2) {
    var i2 = a2[h2];
    f2.add(i2);
    h2 = h2 + 1;
  }
  x2 = b2.length;
  h2 = 0;
  var ug2 = b2;
  while (h2 < x2) {
    i2 = b2[h2];
    g2.add(i2);
    h2 = h2 + 1;
  }
  h2 = Z;
  var j2 = new h2({ type: "string", error: e2.error });
  h2 = $a;
  var k2 = new h2({ type: "boolean", error: e2.error });
  var d2;
  h2 = function(y3, e3) {
    var u2 = y3;
    c2 || (u2 = u2.toLowerCase());
    if (f2.has(u2)) return true;
    if (g2.has(u2)) return false;
    var Q2 = [];
    var N2 = a2.length;
    var P2 = 0, R2, O2;
    var l2 = a2;
    while (P2 < N2) {
      u2 = a2[P2];
      Q2.push(u2);
      P2 = P2 + 1;
    }
    P2 = b2.length;
    R2 = 0;
    var r2 = b2;
    while (R2 < P2) {
      N2 = b2[R2];
      Q2.push(N2);
      R2 = R2 + 1;
    }
    R2 = e3.issues;
    O2 = e3.value;
    R2.push({ code: "invalid_value", expected: "stringbool", values: Q2, input: O2, inst: d2 });
    return {};
  };
  x2 = function(y3, d3) {
    if (true === y3) return a2[0];
    return b2[0];
  };
  i2 = nb;
  var Eg2 = a2;
  var Fg2 = b2;
  var Gg2 = c2;
  var Hg2 = d2;
  var Jg2 = a2;
  var Kg2 = b2;
  d2 = new i2({ type: "pipe", in: j2, out: k2, transform: h2, reverseTransform: x2, error: e2.error });
  return d2;
};
var Ne = (s2) => {
  var a2;
  let b2 = a2;
  let g2 = lb;
  a2 = new lb({ type: "lazy", getter: function() {
    let b3 = [], L2 = new Z(ca("string", s2));
    b3.push(L2);
    b3.push(new ha(ca("number", void 0)));
    b3.push(new $a(ca("boolean", void 0)));
    b3.push(new Bb({ type: "null" }));
    let c2 = a2;
    L2 = ca("array", void 0);
    L2.element = c2;
    b3.push(new ya(L2));
    L2 = new Z(ca("string", void 0));
    b3.push(_b(L2, a2, void 0));
    L2 = ca("union", void 0);
    L2.options = b3;
    return new Ka(L2);
  } });
  return a2;
};
var Qa = (a2, b2, c2, s2) => {
  a2 == null && (a2 = Z);
  var l2 = ca("string", s2);
  l2.format = b2;
  l2.check = "string_format";
  !(c2 === void 0) && !(c2 == null) && (l2.pattern = c2);
  return new a2(l2);
};
var Oe = (a2, s2) => {
  var c2 = X(s2) && "string" == typeof s2.enc ? s2.enc : "hex";
  var D2 = a2 + "_" + c2;
  var b2 = a2;
  a2 = Oc;
  if ("hex" == c2) {
    var h2 = Oc;
    "md5" == b2 && (a2 = pe);
    "sha1" == b2 && (a2 = qe);
    "sha256" == b2 && (a2 = Oc);
    "sha384" == b2 && (a2 = re);
    "sha512" == b2 && (a2 = se);
  }
  "base64" == c2 && ("md5" == b2 && (a2 = $("^[A-Za-z0-9+/]{22}==$", hg)), "sha1" == b2 && (a2 = $("^[A-Za-z0-9+/]{27}=$", hg)), "sha256" == b2 && (a2 = $("^[A-Za-z0-9+/]{43}=$", hg)), "sha384" == b2 && (a2 = $("^[A-Za-z0-9+/]{64}$", hg)), "sha512" == b2 && (a2 = $("^[A-Za-z0-9+/]{86}==$", hg)));
  "base64url" == c2 && ("md5" == b2 && (a2 = $("^[A-Za-z0-9_-]{22}$", hg)), "sha1" == b2 && (a2 = $("^[A-Za-z0-9_-]{27}$", hg)), "sha256" == b2 && (a2 = $("^[A-Za-z0-9_-]{43}$", hg)), "sha384" == b2 && (a2 = $("^[A-Za-z0-9_-]{64}$", hg)), "sha512" == b2 && (a2 = $("^[A-Za-z0-9_-]{86}$", hg)));
  return Qa(void 0, D2, a2, s2);
};
var Pe = (a2, b2, l2) => {
  l2 = ca("string", l2);
  l2.check = "string_format";
  l2.format = a2;
  "function" == typeof b2 && (l2.fn = b2);
  X(b2) && !(b2 == null) && "function" == typeof b2.test && (l2.pattern = b2, l2.fn === void 0 && (l2.fn = function(c2) {
    return b2.test(c2);
  }));
  return new Z(l2);
};
var Qe = (s2) => {
  var y2 = void 0;
  var a2 = void 0;
  X(s2) && !(s2 == null) && (y2 = s2.input, a2 = s2.output);
  Array.isArray(y2) && (y2 = Bc(y2, void 0, void 0));
  y2 === void 0 && (y2 = new Ia({ type: "unknown" }), s2 = ca("array", void 0), s2.element = y2, y2 = new ya(s2));
  a2 === void 0 && (a2 = new Ia({ type: "unknown" }));
  return new Sa({ type: "function", input: y2, output: a2 });
};
var Jf = (k2, Q2, a2, s2) => {
  Q2 = { format: Q2, pattern: a2 };
  a2 = Mf(s2);
  a2.length > 0 && (Q2.error = a2);
  return fa(k2, ea("string_format", Q2));
};
var Re = () => {
  let b2 = Y.prototype, a2 = true;
  ba(b2, "_def", { configurable: a2, get: function() {
    let b3 = this._zod;
    return b3.def;
  } });
  b2 = Y.prototype;
  Gf(b2, "parse", function(b3) {
    var a3;
    let c2 = _d, d2 = b3._zod;
    let e2 = a3;
    let j2 = void 0;
    a3 = c2(d2, function(e3, f2) {
      return Ad(b3, e3, f2, a3);
    });
    return a3;
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "safeParse", function(a3) {
    return $d(a3._zod, function(e2, f2) {
      Ua();
      return gb(yb(e2, da(a3), f2));
    });
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "parseAsync", function(b3) {
    var a3;
    let c2 = function(u2, s2) {
      return Oa(b3, u2, s2, a3);
    };
    let d2 = a3;
    let i2 = globalThis;
    let k2 = void 0;
    a3 = new globalThis.Function("impl", dg)(c2);
    return a3;
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "safeParseAsync", function(a3) {
    return function(b3, c2) {
      return Zb(a3, b3, c2);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "spa", function(a3) {
    return a3.safeParseAsync;
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "encode", function(b3) {
    var a3;
    let d2 = a3;
    a3 = function() {
      var f2 = arguments[1];
      var d3;
      f2 = f2 == null ? {} : ia({}, f2);
      f2.direction = "backward";
      d3 = arguments[0];
      return Na(b3, d3, f2, a3);
    };
    return a3;
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "decode", function(b3) {
    var a3;
    let d2 = a3;
    a3 = function() {
      var f2 = arguments[1];
      var d3;
      f2 = f2 == null ? {} : ia({}, f2);
      f2.direction = "forward";
      d3 = arguments[0];
      return Na(b3, d3, f2, a3);
    };
    return a3;
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "encodeAsync", function(b3) {
    var a3;
    let c2 = function(u2, k3) {
      var f2 = k3 == null ? {} : ia({}, k3);
      f2.direction = "backward";
      return Oa(b3, u2, f2, a3);
    };
    let d2 = a3;
    let i2 = globalThis;
    let k2 = void 0;
    a3 = new globalThis.Function("impl", dg)(c2);
    return a3;
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "decodeAsync", function(b3) {
    var a3;
    let c2 = function(u2, k3) {
      var f2 = k3 == null ? {} : ia({}, k3);
      f2.direction = "forward";
      return Oa(b3, u2, f2, a3);
    };
    let d2 = a3;
    let i2 = globalThis;
    let k2 = void 0;
    a3 = new globalThis.Function("impl", dg)(c2);
    return a3;
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "optional", function(a3) {
    return function() {
      return Af(23, a3, void 0);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "exactOptional", function(a3) {
    return function() {
      return new bb({ type: "optional", innerType: a3, exact: true });
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "nullable", function(a3) {
    return function() {
      return Af(24, a3, void 0);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "nullish", function(a3) {
    return function() {
      return Af(23, Af(24, a3, void 0), void 0);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "array", function(a3) {
    return function() {
      let l2 = ca("array", void 0);
      l2.element = a3;
      return new ya(l2);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "or", function(a3) {
    return function(j2) {
      let b3 = [];
      b3.push(a3);
      b3.push(j2);
      let i2 = ca("union", void 0);
      i2.options = b3;
      return new Ka(i2);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "and", function(a3) {
    return function(c2) {
      return new Fb({ type: "intersection", left: a3, right: c2 });
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "optional", function(a3) {
    return function() {
      return Af(23, a3, void 0);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "default", function(a3) {
    return function(j2) {
      let b3 = { type: "default", innerType: a3 };
      ba(b3, "defaultValue", { configurable: true, enumerable: true, get: function() {
        return "function" == typeof j2 ? j2() : j2;
      } });
      return new Gb(b3);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "prefault", function(a3) {
    return function(j2) {
      let b3 = { type: "prefault", innerType: a3 };
      ba(b3, "defaultValue", { configurable: true, enumerable: true, get: function() {
        return "function" == typeof j2 ? j2() : j2;
      } });
      return new Hb(b3);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "catch", function(a3) {
    return function(c2) {
      var b3 = !("function" == typeof c2) ? function() {
        return c2;
      } : c2;
      return new Ib({ type: "catch", innerType: a3, catchValue: b3 });
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "removeDefault", function(a3) {
    return function() {
      return da(a3).def.innerType;
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "removeCatch", function(a3) {
    return function() {
      return da(a3).def.innerType;
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "nonoptional", function(a3) {
    return function(c2) {
      return Af(28, a3, c2);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "transform", function(a3) {
    return function(x2) {
      let b3 = new mb({ type: "transform", transform: x2 });
      return new Ea({ type: "pipe", in: a3, out: b3 });
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "pipe", function(a3) {
    return function(S2) {
      return new Ea({ type: "pipe", in: a3, out: S2 });
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "readonly", function(a3) {
    return function() {
      return Af(33, a3, void 0);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "brand", function(a3) {
    return function() {
      return a3;
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "describe", function(a3) {
    return function(c2) {
      let n2 = xa(a3, void 0);
      Va().add.call(Va(), n2);
      let b3 = Va();
      b3.add(n2, { description: c2 });
      return n2;
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "meta", function(a3) {
    return function(c2) {
      var b3 = Va();
      if (c2 === void 0) return b3.get(a3);
      var d2 = xa(a3, void 0);
      b3.add(d2, c2);
      return d2;
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "refine", function(a3) {
    return function() {
      let b3 = arguments[0], l2 = arguments[1];
      l2 = ca("custom", l2);
      l2.fn = b3;
      l2.check = "custom";
      return fa(a3, new Ra(l2));
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "superRefine", function(a3) {
    return function(b3, c2) {
      return fa(a3, ub(function(e2) {
        var a4 = this;
        e2.addIssue = function(o2) {
          if ("string" == typeof o2) {
            var b4 = e2.value;
            o2 = { message: o2, code: "custom", input: b4, inst: a4, path: [] };
          } else {
            !o2.fatal || (o2.continue = false);
            o2.code === void 0 && (o2.code = "custom");
            true === "input" in o2 || (o2.input = e2.value);
            o2.inst === void 0 && (o2.inst = a4);
            o2.continue === void 0 && (o2.continue = true);
          }
          var w2 = e2.issues;
          w2.push(o2);
        };
        return b3(e2.value, e2);
      }, c2));
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "overwrite", function(a3) {
    return function(x2) {
      return fa(a3, ea("overwrite", { transform: x2 }));
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "check", function(a3) {
    return function() {
      var g2 = arguments.length;
      var d2 = a3, h2 = 0, I2, b3;
      while (h2 < g2) {
        I2 = arguments[h2];
        "function" == typeof I2 ? d2 = fa(d2, ub(I2, void 0)) : X(I2) && !(I2._zod === void 0) && (d2 = fa(d2, I2));
        h2 = h2 + 1;
      }
      return d2;
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "with", function(a3) {
    return a3.check;
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "clone", function(a3) {
    return function(c2) {
      return xa(a3, c2);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "description", function(a3) {
    var c2 = Va().get.call(Va(), a3);
    if (c2 == null) return;
    return c2.description;
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "isOptional", function(a3) {
    return function() {
      return Yb(a3, void 0, void 0).success;
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "isNullable", function(a3) {
    return function() {
      return Yb(a3, null, void 0).success;
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "apply", function(a3) {
    return function(x2) {
      var b3 = [];
      b3.push(a3);
      var g2 = arguments.length;
      var r2 = 1, d2;
      while (r2 < g2) {
        d2 = arguments[r2];
        b3.push(d2);
        r2 = r2 + 1;
      }
      return x2.apply(void 0, b3);
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "register", function(a3) {
    return function(b3, f2) {
      b3.add.call(b3, a3, f2);
      return a3;
    };
  }, a2);
  b2 = Y.prototype;
  Gf(b2, "~standard", function(a3) {
    return { version: 1, vendor: "zod", validate: function(j2) {
      try {
        var v2 = Yb(a3, j2, void 0);
        if (v2.success) return { value: v2.data };
        return { issues: v2.error.issues };
      } catch {
        return Zb(a3, j2, void 0).then(function(E2) {
          if (E2.success) return { value: E2.data };
          return { issues: E2.error.issues };
        });
      }
    }, jsonSchema: { input: function() {
      a3.constructor;
      if (X(a3._zod) && "function" == typeof a3.toJSONSchema) {
        var s2 = arguments[0];
        var d2;
        s2 = s2 == null ? {} : ia({}, s2);
        s2.io = "input";
        return a3.toJSONSchema(s2);
      }
      return { type: da(a3).typeName };
    }, output: function() {
      if ("function" == typeof a3.toJSONSchema) {
        var s2 = arguments[0];
        var d2;
        s2 = s2 == null ? {} : ia({}, s2);
        s2.io = "output";
        return a3.toJSONSchema(s2);
      }
      return { type: da(a3).typeName };
    } } };
  }, false);
  b2 = Y.prototype;
  Gf(b2, "toJSONSchema", function(a3) {
    return function() {
      return { type: da(a3).typeName };
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "format", function(a3) {
    var b3 = a3._zod;
    var z2 = b3.bag;
    if (z2.format === void 0) return null;
    return z2.format;
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "minLength", function(a3) {
    var b3 = a3._zod;
    var z2 = b3.bag;
    if (z2.minimum === void 0) return null;
    return z2.minimum;
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "maxLength", function(a3) {
    var b3 = a3._zod;
    var z2 = b3.bag;
    if (z2.maximum === void 0) return null;
    return z2.maximum;
  }, a2);
};
var Se = () => {
  let b2 = Z.prototype;
  let c2 = Z;
  let e2 = function(a3) {
    return function(c3, e3) {
      let b3 = { minimum: c3 };
      return mf(a3, "min_length", b3, e3);
    };
  };
  let a2 = true;
  Gf(b2, "min", e2, a2);
  b2 = Z.prototype;
  Gf(b2, "max", function(a3) {
    return function(c3, e3) {
      let b3 = { maximum: c3 };
      return mf(a3, "max_length", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "length", function(a3) {
    return function(c3, e3) {
      let b3 = { length: c3 };
      return mf(a3, "length_equals", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "nonempty", function(a3) {
    return function(e3) {
      return mf(a3, "min_length", { minimum: 1 }, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "includes", function(a3) {
    return function(e3, f2) {
      var Q2 = { includes: e3 };
      var b3;
      X(f2) && "number" == typeof f2.position && (Q2.position = f2.position);
      return mf(a3, "includes", Q2, f2);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "startsWith", function(a3) {
    return function(c3, e3) {
      let b3 = { prefix: c3 };
      return mf(a3, "starts_with", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "endsWith", function(a3) {
    return function(c3, e3) {
      let b3 = { suffix: c3 };
      return mf(a3, "ends_with", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "regex", function(a3) {
    return function(c3, e3) {
      let b3 = { format: "regex", pattern: c3 };
      return mf(a3, "string_format", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "email", function(a3) {
    return function(e3) {
      let b3 = Gc;
      return Jf(a3, "email", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "url", function(a3) {
    return function(m2) {
      var Q2 = { format: "url" };
      var b3;
      X(m2) && !(m2.hostname === void 0) && (Q2.hostname = m2.hostname);
      X(m2) && !(m2.protocol === void 0) && (Q2.protocol = m2.protocol);
      X(m2) && !(m2.normalize === void 0) && (Q2.normalize = m2.normalize);
      return mf(a3, "string_format", Q2, m2);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "uuid", function(a3) {
    return function(e3) {
      let b3 = hb;
      return Jf(a3, "uuid", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "uuidv4", function(a3) {
    return function(e3) {
      let b3 = hb;
      return Jf(a3, "uuid", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "uuidv6", function(a3) {
    return function(e3) {
      let b3 = hb;
      return Jf(a3, "uuid", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "uuidv7", function(a3) {
    return function(e3) {
      let b3 = hb;
      return Jf(a3, "uuid", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "guid", function(a3) {
    return function(e3) {
      let b3 = Hc;
      return Jf(a3, "guid", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "cuid", function(a3) {
    return function(e3) {
      let b3 = ce;
      return Jf(a3, "cuid", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "cuid2", function(a3) {
    return function(e3) {
      let b3 = de;
      return Jf(a3, "cuid2", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "ulid", function(a3) {
    return function(e3) {
      let b3 = Ic;
      return Jf(a3, "ulid", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "nanoid", function(a3) {
    return function(e3) {
      let b3 = Jc;
      return Jf(a3, "nanoid", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "base64", function(a3) {
    return function(e3) {
      let b3 = new globalThis.RegExp("^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$");
      return Jf(a3, "base64", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "base64url", function(a3) {
    return function(e3) {
      let b3 = ie;
      return Jf(a3, "base64url", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "ipv4", function(a3) {
    return function(e3) {
      let b3 = Kc;
      return Jf(a3, "ipv4", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "ipv6", function(a3) {
    return function(e3) {
      let b3 = Lc;
      return Jf(a3, "ipv6", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "cidrv4", function(a3) {
    return function(e3) {
      let b3 = je;
      return Jf(a3, "cidrv4", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "cidrv6", function(a3) {
    return function(e3) {
      let b3 = ke;
      return Jf(a3, "cidrv6", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "jwt", function(a3) {
    return function(j2) {
      var Q2 = { format: "jwt" };
      var b3;
      X(j2) && "string" == typeof j2.alg && (Q2.alg = j2.alg);
      return mf(a3, "string_format", Q2, j2);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "emoji", function(a3) {
    return function(e3) {
      let b3 = he;
      return Jf(a3, "emoji", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "e164", function(a3) {
    return function(e3) {
      let b3 = ge;
      return Jf(a3, "e164", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "mac", function(a3) {
    return function(e3) {
      var b3;
      b3 = X(e3) && "string" == typeof e3.delimiter ? e3.delimiter : ":";
      b3 = $(pg + b3 + jg + b3 + og, hg);
      return Jf(a3, "mac", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "creditCard", function(a3) {
    return function(e3) {
      let b3 = Nc;
      return Jf(a3, "credit_card", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "xid", function(a3) {
    return function(e3) {
      let b3 = ee;
      return Jf(a3, "xid", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "ksuid", function(a3) {
    return function(e3) {
      let b3 = fe;
      return Jf(a3, "ksuid", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "datetime", function(a3) {
    return function(f2) {
      return Jf(a3, "datetime", Ed(f2), f2);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "date", function(a3) {
    return function(c3) {
      let b3 = $("^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$", hg);
      return Jf(a3, "date", b3, c3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "time", function(a3) {
    return function(f2) {
      return Jf(a3, "time", Dd(f2), f2);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "duration", function(a3) {
    return function(e3) {
      let b3 = Mc;
      return Jf(a3, "duration", b3, e3);
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "trim", function(a3) {
    return function() {
      return fa(a3, ea("overwrite", { transform: function(F2) {
        return F2.trim();
      } }));
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "toLowerCase", function(a3) {
    return function() {
      return fa(a3, ea("overwrite", { transform: function(F2) {
        return F2.toLowerCase();
      } }));
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "toUpperCase", function(a3) {
    return function() {
      return fa(a3, ea("overwrite", { transform: function(F2) {
        return F2.toUpperCase();
      } }));
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "lowercase", function(a3) {
    return function() {
      return fa(a3, ea("lowercase", {}));
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "uppercase", function(a3) {
    return function() {
      return fa(a3, ea("uppercase", {}));
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "normalize", function(a3) {
    return function(e3) {
      var b3 = "NFC";
      "string" == typeof e3 && (b3 = e3);
      return fa(a3, ea("overwrite", { transform: function(F2) {
        return F2.normalize(b3);
      } }));
    };
  }, a2);
  b2 = Z.prototype;
  Gf(b2, "slugify", function(a3) {
    return function() {
      return fa(a3, ea("overwrite", { transform: function(F2) {
        return F2.toLowerCase().trim().replace($("[^\\w\\s-]", "g"), hg).replace($("[\\s_-]+", "g"), "-").replace($("^-+|-+$", "g"), hg);
      } }));
    };
  }, a2);
};
var Te = () => {
  let b2 = ha.prototype;
  let c2 = ha;
  let e2 = function(a3) {
    return function() {
      let b3 = arguments[0];
      b3 = { value: b3, inclusive: true, origin: "number" };
      return mf(a3, "greater_than", b3, arguments[1]);
    };
  };
  let a2 = true;
  Gf(b2, "min", e2, a2);
  b2 = ha.prototype;
  Gf(b2, "max", function(a3) {
    return function() {
      let b3 = arguments[0];
      b3 = { value: b3, inclusive: true, origin: "number" };
      return mf(a3, "less_than", b3, arguments[1]);
    };
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "gt", function(a3) {
    return function() {
      let b3 = arguments[0];
      b3 = { value: b3, inclusive: false, origin: "number" };
      return mf(a3, "greater_than", b3, arguments[1]);
    };
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "gte", function(a3) {
    return a3.min;
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "lt", function(a3) {
    return function() {
      let b3 = arguments[0];
      b3 = { value: b3, inclusive: false, origin: "number" };
      return mf(a3, "less_than", b3, arguments[1]);
    };
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "lte", function(a3) {
    return a3.max;
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "int", function(a3) {
    return function() {
      return fa(a3, ea("number_format", { format: "int" }));
    };
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "positive", function(a3) {
    return function() {
      return fa(a3, ea("greater_than", { value: 0, inclusive: false, origin: "number" }));
    };
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "negative", function(a3) {
    return function() {
      return fa(a3, ea("less_than", { value: 0, inclusive: false, origin: "number" }));
    };
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "nonnegative", function(a3) {
    return function() {
      return fa(a3, ea("greater_than", { value: 0, inclusive: true, origin: "number" }));
    };
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "nonpositive", function(a3) {
    return function() {
      return fa(a3, ea("less_than", { value: 0, inclusive: true, origin: "number" }));
    };
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "multipleOf", function(a3) {
    return function(c3, e3) {
      let b3 = { value: c3 };
      return mf(a3, "multiple_of", b3, e3);
    };
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "step", function(a3) {
    return a3.multipleOf;
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "finite", function(a3) {
    return function() {
      return a3;
    };
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "safe", function(a3) {
    return function() {
      return fa(a3, ea("number_format", { format: "safeint" }));
    };
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "format", function(a3) {
    var b3 = a3._zod;
    var z2 = b3.bag;
    if (z2.format === void 0) return null;
    return z2.format;
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "minValue", function(a3) {
    var d2 = a3._zod;
    var z2 = d2.bag;
    var e3 = globalThis.Math;
    var c3 = Number.NEGATIVE_INFINITY;
    var b3 = z2.minimum;
    b3 === void 0 && (b3 = c3);
    a3 = z2.exclusiveMinimum;
    a3 === void 0 || (c3 = a3);
    return e3.max(b3, c3);
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "maxValue", function(a3) {
    var d2 = a3._zod;
    var z2 = d2.bag;
    var e3 = globalThis.Math;
    var c3 = Number.POSITIVE_INFINITY;
    var b3 = z2.maximum;
    b3 === void 0 && (b3 = c3);
    a3 = z2.exclusiveMaximum;
    a3 === void 0 || (c3 = a3);
    return e3.min(b3, c3);
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "isInt", function(a3) {
    var c3 = a3._zod;
    var z2 = c3.bag;
    c3 = "string" == typeof z2.format ? z2.format : hg;
    c3 = c3.includes("int");
    c3 || (a3 = z2.multipleOf, a3 === void 0 && (a3 = 0.5), true === Number.isSafeInteger(a3) && (c3 = true));
    return c3;
  }, a2);
  b2 = ha.prototype;
  Gf(b2, "isFinite", function(a3) {
    return true;
  }, a2);
};
var Ue = () => {
  let b2 = oa.prototype;
  let c2 = oa;
  let e2 = function(a3) {
    return function(b3) {
      return fa(a3, ea("greater_than", { value: b3, inclusive: true, origin: "bigint" }));
    };
  };
  let a2 = true;
  Gf(b2, "min", e2, a2);
  b2 = oa.prototype;
  Gf(b2, "max", function(a3) {
    return function(b3) {
      return fa(a3, ea("less_than", { value: b3, inclusive: true, origin: "bigint" }));
    };
  }, a2);
  b2 = oa.prototype;
  Gf(b2, "gt", function(a3) {
    return function(b3) {
      return fa(a3, ea("greater_than", { value: b3, inclusive: false, origin: "bigint" }));
    };
  }, a2);
  b2 = oa.prototype;
  Gf(b2, "gte", function(a3) {
    return a3.min;
  }, a2);
  b2 = oa.prototype;
  Gf(b2, "lt", function(a3) {
    return function(b3) {
      return fa(a3, ea("less_than", { value: b3, inclusive: false, origin: "bigint" }));
    };
  }, a2);
  b2 = oa.prototype;
  Gf(b2, "lte", function(a3) {
    return a3.max;
  }, a2);
  b2 = oa.prototype;
  Gf(b2, "positive", function(a3) {
    return function() {
      return fa(a3, ea("greater_than", { value: BigInt(0), inclusive: false, origin: "bigint" }));
    };
  }, a2);
  b2 = oa.prototype;
  Gf(b2, "negative", function(a3) {
    return function() {
      return fa(a3, ea("less_than", { value: BigInt(0), inclusive: false, origin: "bigint" }));
    };
  }, a2);
  b2 = oa.prototype;
  Gf(b2, "nonnegative", function(a3) {
    return function() {
      return fa(a3, ea("greater_than", { value: BigInt(0), inclusive: true, origin: "bigint" }));
    };
  }, a2);
  b2 = oa.prototype;
  Gf(b2, "nonpositive", function(a3) {
    return function() {
      return fa(a3, ea("less_than", { value: BigInt(0), inclusive: true, origin: "bigint" }));
    };
  }, a2);
  b2 = oa.prototype;
  Gf(b2, "multipleOf", function(a3) {
    return function(c3, e3) {
      let b3 = { value: c3 };
      return mf(a3, "multiple_of", b3, e3);
    };
  }, a2);
  b2 = oa.prototype;
  Gf(b2, "format", function(a3) {
    var b3 = a3._zod;
    var z2 = b3.bag;
    if (z2.format === void 0) return null;
    return z2.format;
  }, a2);
  b2 = oa.prototype;
  Gf(b2, "minValue", function(a3) {
    var b3 = a3._zod;
    var z2 = b3.bag;
    if (z2.minimum === void 0) return null;
    return z2.minimum;
  }, a2);
  b2 = oa.prototype;
  Gf(b2, "maxValue", function(a3) {
    var b3 = a3._zod;
    var z2 = b3.bag;
    if (z2.maximum === void 0) return null;
    return z2.maximum;
  }, a2);
};
var Ve = () => {
  let a2 = Ba.prototype;
  Gf(a2, "min", function(a3) {
    return function(b2) {
      return fa(a3, ea("greater_than", { value: b2, inclusive: true, origin: "date" }));
    };
  }, true);
  a2 = Ba.prototype;
  Gf(a2, "max", function(a3) {
    return function(b2) {
      return fa(a3, ea("less_than", { value: b2, inclusive: true, origin: "date" }));
    };
  }, true);
  a2 = Ba.prototype;
  Gf(a2, "minValue", function(a3) {
    var d2 = a3._zod;
    var z2 = d2.bag;
    var e2 = globalThis.Math;
    var c2 = Number.NEGATIVE_INFINITY;
    var b2 = z2.minimum;
    b2 === void 0 && (b2 = c2);
    a3 = z2.exclusiveMinimum;
    a3 === void 0 || (c2 = a3);
    return e2.max(b2, c2);
  }, true);
  a2 = Ba.prototype;
  Gf(a2, "maxValue", function(a3) {
    var d2 = a3._zod;
    var z2 = d2.bag;
    var e2 = globalThis.Math;
    var c2 = Number.POSITIVE_INFINITY;
    var b2 = z2.maximum;
    b2 === void 0 && (b2 = c2);
    a3 = z2.exclusiveMaximum;
    a3 === void 0 || (c2 = a3);
    return e2.min(b2, c2);
  }, true);
  a2 = Ba.prototype;
  Gf(a2, "minDate", function(a3) {
    var c2 = a3.minValue;
    if (c2 == null || !La(c2)) return null;
    return new Date(c2);
  }, true);
  a2 = Ba.prototype;
  Gf(a2, "maxDate", function(a3) {
    var c2 = a3.maxValue;
    if (c2 == null || !La(c2)) return null;
    return new Date(c2);
  }, true);
};
var Cc = (R2) => {
  Gf(R2, "min", function(a2) {
    return function(c2, e2) {
      let b2 = { minimum: c2 };
      return mf(a2, "min_size", b2, e2);
    };
  }, true);
  Gf(R2, "max", function(a2) {
    return function(c2, e2) {
      let b2 = { maximum: c2 };
      return mf(a2, "max_size", b2, e2);
    };
  }, true);
  Gf(R2, "size", function(a2) {
    return function(c2) {
      return fa(a2, ea("size_equals", { size: c2 }));
    };
  }, true);
  Gf(R2, "nonempty", function(a2) {
    return function() {
      return fa(a2, ea("min_size", { minimum: 1 }));
    };
  }, true);
};
var We = () => {
  let b2 = ma.prototype, a2 = true;
  ba(b2, "shape", { configurable: a2, enumerable: false, get: function() {
    let b3 = this._zod, c2 = b3.def;
    return c2.shape;
  } });
  b2 = ma.prototype;
  Gf(b2, "strict", function(a3) {
    return function() {
      return xa(a3, { catchall: new ib({ type: "never" }) });
    };
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "passthrough", function(a3) {
    return function() {
      return xa(a3, { catchall: new Ia({ type: "unknown" }) });
    };
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "strip", function(a3) {
    return function() {
      let l2 = ia({}, da(a3).def);
      l2.catchall = void 0;
      return new ma(l2);
    };
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "loose", function(a3) {
    return a3.passthrough;
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "catchall", function(a3) {
    return function(c2) {
      return xa(a3, { catchall: c2 });
    };
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "extend", function(a3) {
    return function(b3) {
      if (Qf(a3)) {
        var c2 = wf(a3);
        var w2 = pa(b3);
        var g2 = w2.length;
        var h2 = 0, d2;
        while (h2 < g2) {
          d2 = w2[h2];
          if (!(ga.getOwnPropertyDescriptor(c2, d2) === void 0)) throw na("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
          h2 = h2 + 1;
        }
      }
      return xa(a3, Df(a3, b3));
    };
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "safeExtend", function(a3) {
    return function(c2) {
      return xa(a3, Df(a3, c2));
    };
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "merge", function(a3) {
    return function(c2) {
      if (Qf(a3)) throw na(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
      var b3 = Df(a3, da(c2).def.shape);
      ba(b3, "catchall", { configurable: true, enumerable: true, get: function() {
        return da(c2).def.catchall;
      } });
      var d2 = da(c2).def.checks;
      Array.isArray(d2) ? b3.checks = d2 : b3.checks = [];
      return xa(a3, b3);
    };
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "pick", function(a3) {
    return function(b3) {
      if (Qf(a3)) throw na(".pick() cannot be used on object schemas containing refinements");
      var P2 = wf(a3);
      jf(P2, b3);
      var L2 = {};
      var d2 = Reflect.ownKeys(b3);
      var g2 = d2.length;
      var h2 = 0, n2, c2;
      var t2 = Reflect;
      while (h2 < g2) {
        n2 = d2[h2];
        "string" == typeof n2 && !!b3[n2] && Ca(L2, n2, P2[n2]);
        h2 = h2 + 1;
      }
      n2 = { checks: [] };
      ba(n2, "shape", { configurable: true, enumerable: true, get: function() {
        ba(this, "shape", { value: L2, writable: true, enumerable: true, configurable: true });
        return L2;
      } });
      return xa(a3, n2);
    };
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "omit", function(a3) {
    return function(b3) {
      if (Qf(a3)) throw na(".omit() cannot be used on object schemas containing refinements");
      var h2 = wf(a3);
      jf(h2, b3);
      var L2 = {};
      qb(L2, h2);
      var c2 = Reflect.ownKeys(b3);
      var g2 = c2.length;
      h2 = 0;
      var t2 = Reflect;
      while (h2 < g2) {
        var d2;
        "string" == typeof c2[h2] && !!b3[c2[h2]] && (d2 = c2[h2], Reflect.deleteProperty(L2, d2));
        h2 = h2 + 1;
      }
      h2 = { checks: [] };
      ba(h2, "shape", { configurable: true, enumerable: true, get: function() {
        ba(this, "shape", { value: L2, writable: true, enumerable: true, configurable: true });
        return L2;
      } });
      return xa(a3, h2);
    };
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "partial", function(a3) {
    return function(f2) {
      if (Qf(a3)) throw na(fg);
      return kf(a3, f2, true, false);
    };
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "exactPartial", function(a3) {
    return function(b3) {
      if (Qf(a3)) throw na(eg);
      return kf(a3, b3, true, true);
    };
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "required", function(a3) {
    return function(b3) {
      return kf(a3, b3, false, false);
    };
  }, a2);
  b2 = ma.prototype;
  Gf(b2, "keyof", function(a3) {
    return function() {
      return Fd(pa(wf(a3)), void 0);
    };
  }, a2);
};
var Xe = () => {
  let b2 = ab.prototype;
  let c2 = ab;
  let e2 = function(a3) {
    return function() {
      return da(a3).def.innerType;
    };
  };
  let a2 = true;
  Gf(b2, "unwrap", e2, a2);
  b2 = kc.prototype;
  Gf(b2, "unwrap", function(a3) {
    return function() {
      return da(a3).def.innerType;
    };
  }, a2);
  b2 = bb.prototype;
  Gf(b2, "unwrap", function(a3) {
    return function() {
      return da(a3).def.innerType;
    };
  }, a2);
  b2 = lc.prototype;
  Gf(b2, "unwrap", function(a3) {
    return function() {
      return da(a3).def.innerType;
    };
  }, a2);
  b2 = ya.prototype;
  Gf(b2, "unwrap", function(a3) {
    return function() {
      return da(a3).def.element;
    };
  }, a2);
  b2 = Gb.prototype;
  Gf(b2, "unwrap", function(a3) {
    return function() {
      return da(a3).def.innerType;
    };
  }, a2);
  b2 = Ib.prototype;
  Gf(b2, "unwrap", function(a3) {
    return function() {
      return da(a3).def.innerType;
    };
  }, a2);
  b2 = Hb.prototype;
  Gf(b2, "unwrap", function(a3) {
    return function() {
      return da(a3).def.innerType;
    };
  }, a2);
  b2 = lb.prototype;
  Gf(b2, "unwrap", function(a3) {
    return function() {
      return da(a3).def.getter();
    };
  }, a2);
  b2 = Jb.prototype;
  Gf(b2, "unwrap", function(a3) {
    return function() {
      return da(a3).def.innerType;
    };
  }, a2);
};
var Ye = () => {
  Ua();
  Fe();
  Re();
  Se();
  Te();
  Ue();
  Ve();
  Cc(jb.prototype);
  Cc(kb.prototype);
  Cc(ob.prototype);
  var a2 = ob.prototype;
  Gf(a2, "mime", function(a3) {
    return function() {
      var b2 = arguments[0];
      if (!Array.isArray(b2)) {
        var c2 = [];
        c2.push(b2);
        b2 = c2;
      }
      b2 = { mime: b2 };
      return mf(a3, "mime_type", b2, arguments[1]);
    };
  }, true);
  a2 = ya.prototype;
  Gf(a2, "min", function(a3) {
    return function(c2, e2) {
      let b2 = { minimum: c2 };
      return mf(a3, "min_length", b2, e2);
    };
  }, true);
  a2 = ya.prototype;
  Gf(a2, "max", function(a3) {
    return function(c2, e2) {
      let b2 = { maximum: c2 };
      return mf(a3, "max_length", b2, e2);
    };
  }, true);
  a2 = ya.prototype;
  Gf(a2, "length", function(a3) {
    return function(c2, e2) {
      let b2 = { length: c2 };
      return mf(a3, "length_equals", b2, e2);
    };
  }, true);
  a2 = ya.prototype;
  Gf(a2, "nonempty", function(a3) {
    return function(e2) {
      return mf(a3, "min_length", { minimum: 1 }, e2);
    };
  }, true);
  We();
  a2 = Ja.prototype;
  Gf(a2, "extract", function(a3) {
    return function(w2, u2) {
      var P2 = da(a3);
      var d2 = P2.def.entries;
      var o2 = {};
      var g2 = w2.length;
      var O2 = 0, b2;
      while (O2 < g2) {
        b2 = w2[O2];
        if (!Da.call(d2, b2)) throw na("Key " + w2[O2] + ng);
        b2 = w2[O2];
        Ca(o2, b2, d2[w2[O2]]);
        O2 = O2 + 1;
      }
      O2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(P2.def));
      ia(O2, Pa(u2));
      O2.entries = o2;
      O2.checks = [];
      return new Ja(O2);
    };
  }, true);
  a2 = Ja.prototype;
  Gf(a2, "exclude", function(a3) {
    return function(w2, u2) {
      var P2 = da(a3);
      var T2 = P2.def.entries;
      var d2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(T2));
      var g2 = w2.length;
      T2 = 0;
      var y2 = ga;
      var A2 = ga;
      while (T2 < g2) {
        var b2 = P2.def.entries;
        var c2 = w2[T2];
        if (!Da.call(b2, c2)) throw na("Key " + w2[T2] + ng);
        b2 = w2[T2];
        Reflect.deleteProperty(d2, b2);
        T2 = T2 + 1;
      }
      T2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(P2.def));
      ia(T2, Pa(u2));
      T2.entries = d2;
      T2.checks = [];
      return new Ja(T2);
    };
  }, true);
  Xe();
  a2 = Sa.prototype;
  Gf(a2, "implement", function(a3) {
    return function(x2) {
      if (!("function" == typeof x2)) throw na("implement() must be called with a function");
      var m2 = da(a3);
      var b2 = m2.def.input;
      return yc(x2, b2, m2.def.output, false);
    };
  }, true);
  a2 = Sa.prototype;
  Gf(a2, "implementAsync", function(a3) {
    return function(x2) {
      if (!("function" == typeof x2)) throw na("implementAsync() must be called with a function");
      var m2 = da(a3);
      var b2 = m2.def.input;
      return yc(x2, b2, m2.def.output, true);
    };
  }, true);
  a2 = Sa.prototype;
  Gf(a2, "input", function(a3) {
    return function() {
      var o2 = arguments[0];
      Array.isArray(o2) && (o2 = Bc(o2, arguments[1], void 0));
      return xa(a3, { input: o2 });
    };
  }, true);
  a2 = Sa.prototype;
  Gf(a2, "output", function(a3) {
    return function(q2) {
      return xa(a3, { output: q2 });
    };
  }, true);
  vf(ya, "ZodArray");
  vf(Db, "ZodRecord");
  vf(jb, "ZodMap");
  vf(kb, "ZodSet");
  vf(Ka, "ZodUnion");
  vf(jc, "ZodDiscriminatedUnion");
  vf(Eb, "ZodXor");
  vf(Ea, "ZodPipe");
  vf(nb, "ZodCodec");
  vf(Kb, "ZodPreprocess");
  vf(Ja, "ZodEnum");
  vf(Cb, "ZodLiteral");
};
var Hd = (o2) => {
  var a2 = Rb();
  !(o2 === void 0) && !(o2 == null) && (ia(a2, o2), true === "localeError" in o2 && (Za = o2.localeError), true === "customError" in o2 && (Ab = o2.customError));
  return a2;
};
var Id = (i2, u2, f2) => Na(i2, u2, f2, Id);
var Jd = (i2, u2, f2) => Oa(i2, u2, f2, Jd);
var $b = (o2, a2) => {
  o2 = o2 == null ? {} : ia({}, o2);
  o2.direction = a2;
  return o2;
};
var Kd = (i2, u2, f2) => Na(i2, u2, $b(f2, "backward"), Kd);
var Ld = (i2, u2, f2) => Na(i2, u2, $b(f2, "forward"), Ld);
var Md = (i2, u2, f2) => Oa(i2, u2, $b(f2, "backward"), Md);
var Nd = (i2, u2, f2) => Oa(i2, u2, $b(f2, "forward"), Nd);
var Ze = (L2) => {
  var a2 = [];
  if (!X(L2) || L2 == null) return a2;
  var w2 = pa(L2);
  var g2 = w2.length;
  var h2 = 0, b2;
  while (h2 < g2) {
    b2 = w2[h2];
    a2.push(ea("property", { property: b2, schema: L2[w2[h2]] }));
    h2 = h2 + 1;
  }
  return a2;
};
var Od = (i2) => i2;
var W = (n2, j2) => {
  pb[n2] = j2;
};
var ga = Object;
var q = ga.prototype;
var Da = q.hasOwnProperty;
var r = ga.prototype;
var Pd = r.isPrototypeOf;
var s = Array.prototype;
s.slice;
var Qd = ga.is;
var Rd = za("inst", "return function(payload){if(typeof payload.value==='string')return payload;payload.issues.push({expected:'string',code:'invalid_type',input:payload.value,inst:inst});return payload;}");
var Sd = za("inst", "return function(payload){var v=payload.value;if(typeof v==='number'&&Number.isFinite(v))return payload;var iss={expected:'number',code:'invalid_type',input:v,inst:inst};if(typeof v==='number'){if(Number.isNaN(v))iss.received='NaN';else if(!Number.isFinite(v))iss.received=String(v);}payload.issues.push(iss);return payload;}");
var Td = za("inst", "return function(payload){if(typeof payload.value==='boolean')return payload;payload.issues.push({expected:'boolean',code:'invalid_type',input:payload.value,inst:inst});return payload;}");
var Dc = za(hg, "var recCache=new WeakMap();function isRecursive(node,stack){var cached=recCache.get(node);if(cached!==void 0)return cached;if(stack.has(node))return true;stack.add(node);var result=false;function check(child){if(!result&&child&&child._zod)result=isRecursive(child,stack);}var def=node._zod&&node._zod.def;if(!def){stack.delete(node);recCache.set(node,false);return false;}if(def.type==='lazy'){stack.delete(node);recCache.set(node,true);return true;}var shape=def.shape;if(shape)for(var key in shape)check(shape[key]);for(var k in def){var value=def[k];if(!value||typeof value!=='object')continue;if(value._zod)check(value);else if(Array.isArray(value))for(var i=0;i<value.length;i++)check(value[i]);}stack.delete(node);recCache.set(node,result);return result;}return function useLil(node){return isRecursive(node,new Set());};")();
var a = "def,inst";
var Ud = za(a, "return function(payload){var input=payload.value;var fmt=def.format;if(fmt==='int'||fmt==='int32'||fmt==='safeint'){if(typeof input!=='number'||!Number.isInteger(input)){payload.issues.push({expected:'int',code:'invalid_type',input:input,inst:inst,continue:false});return;}}if(fmt==='safeint'&&!Number.isSafeInteger(input)){if(input>0)payload.issues.push({code:'too_big',maximum:9007199254740991,inclusive:true,origin:'number',input:input,inst:inst,continue:!def.abort});else payload.issues.push({code:'too_small',minimum:-9007199254740991,inclusive:true,origin:'number',input:input,inst:inst,continue:!def.abort});}};");
var Vd = za(a, "return function(payload){var p=def.pattern;if(!p)return;p.lastIndex=0;if(p.test(payload.value))return;var extra={origin:'string',code:'invalid_format',format:def.format,input:payload.value,inst:inst,continue:!def.abort};extra.pattern=p.toString();payload.issues.push(extra);};");
var Wd = za(a, "return function(payload){var v=payload.value;if(v==null||v.length==null)return;var n=typeof v==='string'?Array.from(v).length:v.length;if(n<def.minimum)payload.issues.push({origin:Array.isArray(v)?'array':'string',code:'too_small',minimum:def.minimum,inclusive:true,input:v,inst:inst,continue:!def.abort});};");
var Xd = za(a, "return function(payload){var v=payload.value;if(v==null||v.length==null)return;var n=typeof v==='string'?Array.from(v).length:v.length;if(n>def.maximum)payload.issues.push({origin:Array.isArray(v)?'array':'string',code:'too_big',maximum:def.maximum,inclusive:true,input:v,inst:inst,continue:!def.abort});};");
var Yd = za(a, "return function(payload){var v=payload.value;var bound=def.value;var inclusive=def.inclusive!==false;var ok=inclusive?v>=bound:v>bound;if(ok)return;var origin=typeof v==='number'?'number':typeof v==='bigint'?'bigint':typeof v==='object'?'date':def.origin;if(!origin)origin='number';payload.issues.push({origin:origin,code:'too_small',minimum:typeof bound==='object'&&bound&&typeof bound.getTime==='function'?bound.getTime():bound,inclusive:inclusive,input:v,inst:inst,continue:!def.abort});};");
var Zd = za(a, "return function(payload){var v=payload.value;var bound=def.value;var inclusive=def.inclusive!==false;var ok=inclusive?v<=bound:v<bound;if(ok)return;var origin=typeof v==='number'?'number':typeof v==='bigint'?'bigint':typeof v==='object'?'date':def.origin;if(!origin)origin='number';payload.issues.push({origin:origin,code:'too_big',maximum:typeof bound==='object'&&bound&&typeof bound.getTime==='function'?bound.getTime():bound,inclusive:inclusive,input:v,inst:inst,continue:!def.abort});};");
var _d = za("intern,fail", "return function(data,params){var ctx=params==null?{async:false}:Object.assign({},params,{async:false});var result=intern.run({value:data,issues:[]},ctx);if(result instanceof Promise)throw new Error('Encountered Promise during synchronous parse. Use .parseAsync() instead.');if(!result.issues.length)return result.value;return fail(result,ctx);}");
var $d = za("intern,fail", "return function(data,params){var ctx=params==null?{async:false}:Object.assign({},params,{async:false});var result=intern.run({value:data,issues:[]},ctx);if(result instanceof Promise)throw new Error('Encountered Promise during synchronous parse. Use .parseAsync() instead.');if(!result.issues.length)return {success:true,data:result.value};return fail(result,ctx);}");
var Ga = [];
var ac = 0;
var bc = void 0;
var Ya = false;
var ae = { configurable: true, get: function() {
  Ya = true;
} };
var Ec = /* @__PURE__ */ new WeakMap();
var cc = /* @__PURE__ */ new WeakMap();
var Za = void 0;
var Ab = void 0;
var _a = void 0;
var be = { major: 4, minor: 4, patch: 3 };
var ua = (0, function(g2) {
  if (this === void 0 || this == null || !X(this)) {
    var a2 = ua.prototype;
    a2 = ga.create(a2);
  } else {
    a2 = this;
  }
  pc(a2, g2);
  a2.stack === void 0 && rb(a2, ua);
  return a2;
});
var Ha = function(c2) {
  let a2 = Ha.prototype;
  a2 = ga.create(a2);
  pc(a2, c2);
  rb(a2, Ha);
  return a2;
};
var Fc = function(b2) {
  let a2 = Error;
  a2 = new a2("Encountered unidirectional transform during encode: " + b2);
  a2.name = "ZodEncodeError";
  return a2;
};
var Gc = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var hb = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
var Hc = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var ce = /^[cC][0-9a-z]{6,}$/;
var de = /^[0-9a-z]+$/;
var Ic = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var Jc = /^[a-zA-Z0-9_-]{21}$/;
var Kc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var Lc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
a = /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$/;
var Mc = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var ee = /^[0-9a-vA-V]{20}$/;
var fe = /^[A-Za-z0-9]{27}$/;
var ge = /^\+[1-9]\d{6,14}$/;
var b = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
var he = new RegExp("^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", "u");
var ie = /^[A-Za-z0-9_-]*$/;
var je = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var ke = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var Nc = /^\d(?:[ -]?\d){11,18}$/;
var le = /^[0-9a-fA-F]*$/;
var me = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
var ne = /^https?$/;
var oe = /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
var pe = /^[0-9a-fA-F]{32}$/;
var qe = /^[0-9a-fA-F]{40}$/;
var Oc = /^[0-9a-fA-F]{64}$/;
var re = /^[0-9a-fA-F]{96}$/;
var se = /^[0-9a-fA-F]{128}$/;
var Y = _("ZodType", void 0);
var Z = _("ZodString", Y);
var ha = _("ZodNumber", Y);
var $a = _("ZodBoolean", Y);
var oa = _("ZodBigInt", Y);
var dc = _("ZodSymbol", Y);
var Ba = _("ZodDate", Y);
var ec = _("ZodNaN", Y);
var fc = _("ZodUndefined", Y);
var Bb = _("ZodNull", Y);
var gc = _("ZodAny", Y);
var Ia = _("ZodUnknown", Y);
var ib = _("ZodNever", Y);
var hc = _("ZodVoid", Y);
var Cb = _("ZodLiteral", Y);
var Ja = _("ZodEnum", Y);
var ma = _("ZodObject", Y);
var ya = _("ZodArray", Y);
var ic = _("ZodTuple", Y);
var Db = _("ZodRecord", Y);
var jb = _("ZodMap", Y);
var kb = _("ZodSet", Y);
var Ka = _("ZodUnion", Y);
var jc = _("ZodDiscriminatedUnion", Ka);
var Eb = _("ZodXor", Ka);
var Fb = _("ZodIntersection", Y);
var ab = _("ZodOptional", Y);
var bb = _("ZodExactOptional", ab);
var kc = _("ZodNullable", Y);
var Gb = _("ZodDefault", Y);
var Hb = _("ZodPrefault", Y);
var Ib = _("ZodCatch", Y);
var lc = _("ZodNonOptional", Y);
var lb = _("ZodLazy", Y);
var Jb = _("ZodPromise", Y);
var mb = _("ZodTransform", Y);
var Ea = _("ZodPipe", Y);
var nb = _("ZodCodec", Ea);
var Kb = _("ZodPreprocess", Ea);
var Pc = _("ZodReadonly", Y);
var Ra = _("ZodCustom", Y);
var ob = _("ZodFile", Y);
var mc = _("ZodSuccess", Y);
var Sa = _("ZodFunction", Y);
var nc = _("ZodTemplateLiteral", Y);
var Qc = _("ZodISODateTime", Z);
var e = _("ZodISODate", Z);
var Rc = _("ZodISOTime", Z);
var f = _("ZodISODuration", Z);
var t = _("ZodEmail", Z);
var u = _("ZodGUID", Z);
var v = _("ZodUUID", Z);
var Sc = _("ZodURL", Z);
_("ZodCUID", Z);
_("ZodCUID2", Z);
_("ZodULID", Z);
_("ZodNanoID", Z);
_("ZodBase64", Z);
_("ZodBase64URL", Z);
_("ZodIPv4", Z);
_("ZodIPv6", Z);
_("ZodCIDRv4", Z);
_("ZodCIDRv6", Z);
var w = _("ZodJWT", Z);
_("ZodEmoji", Z);
_("ZodE164", Z);
_("ZodKSUID", Z);
_("ZodMAC", Z);
_("ZodXID", Z);
_("ZodCustomStringFormat", _("ZodStringFormat", Z));
_("ZodNumberFormat", ha);
_("ZodBigIntFormat", oa);
var g = (a2, b2) => {
  let E2 = { errors: [] };
  qc(a2.issues, [], E2, b2);
  return E2;
};
var h = (H2) => {
  var h2 = H2.issues;
  var a2 = h2.slice(0);
  a2.sort(function(a3, c3) {
    if (Array.isArray(a3.path)) {
      var d3 = a3.path;
      var b3 = d3.length;
    } else {
      b3 = 0;
    }
    Array.isArray(c3.path) ? (d3 = c3.path, a3 = d3.length) : a3 = 0;
    return b3 - a3 | 0;
  });
  var b2 = [];
  var g2 = a2.length;
  h2 = 0;
  while (h2 < g2) {
    H2 = a2[h2];
    var c2 = "\u2716 " + H2.message;
    b2.push(c2);
    if (Array.isArray(H2.path)) {
      var d2 = H2.path;
      c2 = d2.length > 0;
    } else {
      c2 = false;
    }
    c2 && (c2 = "  \u2192 at " + fd(H2.path), b2.push(c2));
    h2 = h2 + 1;
  }
  return b2.join("\n");
};
var i = (a2, b2) => {
  let c2 = { _errors: [] };
  Qb(a2.issues, [], c2, b2);
  return c2;
};
var j = ed;
var x = Va();
var d = ua;
var k = Ha;
var l = (a2, j2) => td(da(a2)).get(j2);
globalThis.Symbol("zod_brand");
globalThis.Symbol("ZodInput");
globalThis.Symbol("ZodOutput");
Ye();
var y = (0, function(a2) {
  return new Z(ca("string", a2));
});
var z = (0, function(a2) {
  return new ha(ca("number", a2));
});
var A = (0, function(a2) {
  return new $a(ca("boolean", a2));
});
var B = (0, function(a2) {
  return new oa(ca("bigint", a2));
});
var C = (0, function(a2) {
  return new dc(ca("symbol", a2));
});
var D = (0, function(a2) {
  return new Ba(ca("date", a2));
});
var E = (0, function(a2) {
  return new ec(ca("nan", a2));
});
var F = (0, function() {
  return new fc({ type: "undefined" });
});
var G = (0, function() {
  return new Bb({ type: "null" });
});
var H = (0, function() {
  return new gc({ type: "any" });
});
var I = (0, function() {
  return new Ia({ type: "unknown" });
});
var J = (0, function() {
  return new ib({ type: "never" });
});
var K = (0, function() {
  return new hc({ type: "void" });
});
var L = (0, function() {
  var A2 = arguments[0];
  var a2 = arguments[1];
  if (!Array.isArray(A2)) {
    var d2 = [];
    d2.push(A2);
    A2 = d2;
  }
  d2 = ca("literal", a2);
  d2.values = A2;
  d2 = new Cb(d2);
  return d2;
});
var m = (0, function(a2, b2) {
  return Fd(a2, b2);
});
var n = (0, function(a2, b2) {
  return Ac(a2, b2);
});
var M = (0, function() {
  let k2 = arguments[0];
  k2 = Ac(k2, arguments[1]);
  return k2.strict();
});
var N = (0, function() {
  let k2 = arguments[0];
  k2 = Ac(k2, arguments[1]);
  return k2.passthrough();
});
var O = (0, function() {
  let a2 = arguments[0], l2 = arguments[1];
  l2 = ca("array", l2);
  l2.element = a2;
  return new ya(l2);
});
var P = (0, function(a2, b2, c2) {
  return Bc(a2, b2, c2);
});
var Q = (0, function(a2, b2, c2) {
  return _b(a2, b2, c2);
});
var R = (0, function() {
  let a2 = arguments[0], l2 = arguments[1];
  l2 = ca("union", l2);
  l2.options = a2;
  return new Ka(l2);
});
var S = (0, function() {
  let a2 = arguments[0], l2 = arguments[1];
  l2 = ca("union", l2);
  l2.options = a2;
  l2.inclusive = false;
  return new Eb(l2);
});
var T = (0, function(c2, a2, e2) {
  let b2 = c2;
  return Me(b2, a2, e2);
});
var U = (0, function(a2, b2) {
  return new Fb({ type: "intersection", left: a2, right: b2 });
});
var V = (0, function(a2, b2) {
  return new jb({ type: "map", keyType: a2, valueType: b2 });
});
var qg = (0, function() {
  let a2 = arguments[0], l2 = arguments[1];
  l2 = ca("set", l2);
  l2.valueType = a2;
  return new kb(l2);
});
var rg = (0, function(a2) {
  return new lb({ type: "lazy", getter: a2 });
});
var sg = (0, function(a2) {
  return new Jb({ type: "promise", innerType: a2 });
});
var tg = (0, function() {
  var a2 = arguments[0];
  var b2 = arguments[1];
  "function" == typeof a2 || (a2 = function(a3) {
    return true;
  });
  var l2 = ca("custom", b2);
  l2.fn = a2;
  l2.check = "custom";
  l2 = new Ra(l2);
  return l2;
});
var ug = (0, function(a2) {
  return new ob(ca("file", a2));
});
var vg = (0, function() {
  var a2 = arguments[0];
  var b2 = arguments[1];
  var l2 = ca("custom", b2);
  l2.check = "custom";
  l2.abort = true;
  l2.fn = function(u2) {
    return qa(a2, u2) ? true : false;
  };
  l2 = new Ra(l2);
  b2 = da(l2).handle._zod;
  var c2 = b2.bag;
  c2.Class = a2;
  return l2;
});
var wg = (0, function(a2) {
  return new mb({ type: "transform", transform: a2 });
});
var xg = (0, function(a2) {
  return Qe(a2);
});
var yg = (0, function() {
  let a2 = arguments[0];
  a2 = new ha(ca("number", a2));
  return fa(a2, ea("number_format", { format: "int" }));
});
var zg = (0, function() {
  let a2 = arguments[0];
  a2 = new ha(ca("number", a2));
  return fa(a2, ea("number_format", { format: "int32" }));
});
var Ag = (0, function() {
  let a2 = arguments[0];
  a2 = new ha(ca("number", a2));
  return fa(a2, ea("number_format", { format: "uint32" }));
});
var Bg = (0, function() {
  let a2 = arguments[0];
  a2 = new ha(ca("number", a2));
  return fa(a2, ea("number_format", { format: "float32" }));
});
var Cg = (0, function() {
  let a2 = arguments[0];
  a2 = new ha(ca("number", a2));
  return fa(a2, ea("number_format", { format: "float64" }));
});
var Dg = (0, function(a2, b2) {
  return new Ea({ type: "pipe", in: a2, out: b2 });
});
var Eg = (0, function(a2) {
  return a2.optional.call(a2);
});
var Fg = (0, function(a2) {
  return a2.nullable.call(a2);
});
var Xg = Gc;
var Yg = function(c2) {
  return Qa(t, "email", Xg, c2);
};
var Zg = hb;
var _g = function(c2) {
  return Qa(v, "uuid", Zg, c2);
};
var $g = Hc;
var ah = function(c2) {
  return Qa(u, "guid", $g, c2);
};
var Gg = (0, function(a2) {
  var l2 = ca("string", a2);
  l2.format = "url";
  l2.check = "string_format";
  l2.abort = false;
  l2 = new Sc(l2);
  return l2;
});
var Hg = (0, function(a2) {
  var l2 = ca("string", a2);
  l2.format = "url";
  l2.check = "string_format";
  l2.abort = false;
  l2.protocol = ne;
  l2.hostname = oe;
  l2 = new Sc(l2);
  return l2;
});
var Ig = (0, function(a2, b2, c2) {
  return Gd(a2, b2, c2);
});
var Jg = (0, function() {
  var a2 = arguments[0];
  var B2 = da(a2);
  a2 = B2.def.out;
  var b2 = B2.def.in;
  var c2 = B2.def.reverseTransform;
  a2 = Gd(a2, b2, { decode: c2, encode: B2.def.transform });
  return a2;
});
var Kg = (0, function() {
  let a2 = arguments[0], b2 = arguments[1], c2 = Kb;
  a2 = new mb({ type: "transform", transform: a2 });
  return new c2({ type: "pipe", in: a2, out: b2 });
});
var Lg = (0, function(a2) {
  return cf(a2);
});
var Mg = (0, function(a2) {
  return new mc({ type: "success", innerType: a2 });
});
var Ng = (0, function(a2) {
  return Ne(a2);
});
var Og = (0, function(a2) {
  return Qa(void 0, "hex", le, a2);
});
var Pg = (0, function(a2) {
  return Qa(void 0, "hostname", me, a2);
});
var Qg = (0, function(a2, b2) {
  return Oe(a2, b2);
});
var Rg = (0, function() {
  let k2 = arguments[0], a2 = arguments[1];
  k2 = _b(k2, a2, arguments[2]);
  da(k2).def.partial = true;
  return k2;
});
var Sg = (0, function(a2) {
  return a2.keyof.call(a2);
});
var Tg = (0, function(a2, e2) {
  return a2.catch.call(a2, e2);
});
var o = (0, function(a2, e2) {
  return a2.default.call(a2, e2);
});
var Ug = (0, function(a2, e2) {
  return a2.prefault.call(a2, e2);
});
var Vg = (0, function(a2) {
  return a2.nonoptional.call(a2);
});
var Wg = (0, function(a2) {
  return a2.readonly.call(a2);
});
var bh = b;
var ch = function(c2) {
  return Qa(w, "jwt", bh, c2);
};
var dh = void 0;
var eh = Jc;
var fh = function(c2) {
  return Qa(dh, "nanoid", eh, c2);
};
var gh = void 0;
var hh = Ic;
var ih = function(c2) {
  return Qa(gh, "ulid", hh, c2);
};
var jh = void 0;
var kh = Kc;
var lh = function(c2) {
  return Qa(jh, "ipv4", kh, c2);
};
var mh = void 0;
var nh = Lc;
var oh = function(c2) {
  return Qa(mh, "ipv6", nh, c2);
};
b = { string: function() {
  let a2 = arguments[0];
  a2 = new Z(ca("string", a2));
  zb(a2);
  return a2;
}, number: function() {
  let a2 = arguments[0];
  a2 = new ha(ca("number", a2));
  zb(a2);
  return a2;
}, boolean: function() {
  let a2 = arguments[0];
  a2 = new $a(ca("boolean", a2));
  zb(a2);
  return a2;
}, bigint: function() {
  let a2 = arguments[0];
  a2 = new oa(ca("bigint", a2));
  zb(a2);
  return a2;
}, date: function() {
  let a2 = arguments[0];
  a2 = new Ba(ca("date", a2));
  zb(a2);
  return a2;
} };
var c = { datetime: function(b2) {
  let a2 = Qc;
  return Qa(a2, "datetime", Ed(b2), b2);
} };
var ph = a;
c.date = function(c2) {
  return Qa(e, "date", ph, c2);
};
c.time = function(b2) {
  let a2 = Rc;
  return Qa(a2, "time", Dd(b2), b2);
};
var qh = Mc;
c.duration = function(c2) {
  return Qa(f, "duration", qh, c2);
};
var p = { en: function() {
  return { localeError: function(H2) {
    return dd(H2);
  } };
} };
var Hk = () => {
  let a2 = /* @__PURE__ */ new WeakMap();
  return gd(a2, /* @__PURE__ */ new Map());
};
var Ik = fd;
a = {};
var pb = {};
W("string", y);
W("number", z);
W("boolean", A);
W("bigint", B);
W("symbol", C);
W("date", D);
W("nan", E);
W("undefined", F);
W("null", G);
W("any", H);
W("unknown", I);
W("never", J);
W("void", K);
W("literal", L);
W("enum", m);
W("nativeEnum", m);
W("object", n);
W("strictObject", M);
W("looseObject", N);
W("interface", n);
W("array", O);
W("tuple", P);
W("record", Q);
W("union", R);
W("xor", S);
W("discriminatedUnion", T);
W("intersection", U);
W("map", V);
W("set", qg);
W("lazy", rg);
W("promise", sg);
W("custom", tg);
W("file", ug);
W("instanceof", vg);
W("transform", wg);
W("function", xg);
W("int", yg);
W("int32", zg);
W("uint32", Ag);
W("float32", Bg);
W("float64", Cg);
W("pipe", Dg);
W("optional", Eg);
W("nullable", Fg);
W("email", Yg);
W("uuid", _g);
W("guid", ah);
W("url", Gg);
W("httpUrl", Hg);
W("codec", Ig);
W("invertCodec", Jg);
W("preprocess", Kg);
W("stringbool", Lg);
W("success", Mg);
W("json", Ng);
W("hex", Og);
W("hostname", Pg);
W("hash", Qg);
W("partialRecord", Rg);
W("looseRecord", function() {
  let k2 = arguments[0], a2 = arguments[1];
  k2 = _b(k2, a2, arguments[2]);
  da(k2).def.mode = "loose";
  return k2;
});
W("creditCard", function(a2) {
  return Qa(void 0, "credit_card", Nc, a2);
});
W("mac", function(a2) {
  var d2 = X(a2) && "string" == typeof a2.delimiter ? a2.delimiter : ":";
  d2 = Qa(void 0, "mac", $(pg + d2 + jg + d2 + og, hg), a2);
  return d2;
});
W("keyof", Sg);
W("catch", Tg);
W("default", o);
W("_default", o);
W("prefault", Ug);
W("nonoptional", Vg);
W("readonly", Wg);
W("jwt", ch);
W("nanoid", fh);
W("ulid", ih);
W("ipv4", lh);
W("ipv6", oh);
W("coerce", b);
W("iso", c);
W("locales", p);
W("core", a);
W("parse", Id);
W("safeParse", (i2, u2, f2) => Yb(i2, u2, f2));
W("parseAsync", Jd);
W("safeParseAsync", (i2, u2, f2) => Zb(i2, u2, f2));
W("encode", Kd);
W("decode", Ld);
W("encodeAsync", Md);
W("decodeAsync", Nd);
W("treeifyError", g);
W("prettifyError", h);
W("formatError", i);
W("flattenError", j);
W("registry", Hk);
W("globalRegistry", x);
W("config", Hd);
W("ZodType", Y);
W("ZodString", Z);
W("ZodNumber", ha);
W("ZodBoolean", $a);
W("ZodBigInt", oa);
W("ZodSymbol", dc);
W("ZodDate", Ba);
W("ZodNaN", ec);
W("ZodUndefined", fc);
W("ZodNull", Bb);
W("ZodAny", gc);
W("ZodUnknown", Ia);
W("ZodNever", ib);
W("ZodVoid", hc);
W("ZodLiteral", Cb);
W("ZodEnum", Ja);
W("ZodObject", ma);
W("ZodArray", ya);
W("ZodTuple", ic);
W("ZodRecord", Db);
W("ZodMap", jb);
W("ZodSet", kb);
W("ZodUnion", Ka);
W("ZodDiscriminatedUnion", jc);
W("ZodXor", Eb);
W("ZodIntersection", Fb);
W("ZodOptional", ab);
W("ZodNullable", kc);
W("ZodDefault", Gb);
W("ZodPrefault", Hb);
W("ZodCatch", Ib);
W("ZodNonOptional", lc);
W("ZodLazy", lb);
W("ZodPromise", Jb);
W("ZodTransform", mb);
W("ZodPipe", Ea);
W("ZodCodec", nb);
W("ZodPreprocess", Kb);
W("ZodReadonly", Pc);
W("ZodCustom", Ra);
W("ZodFile", ob);
W("ZodFunction", Sa);
W("ZodTemplateLiteral", nc);
W("ZodSuccess", mc);
W("ZodError", d);
W("ZodRealError", k);
W("getDiscriminatedOption", l);
W("ZodExactOptional", bb);
W("exactOptional", function(a2) {
  return new bb({ type: "optional", innerType: a2, exact: true });
});
W("slugify", function() {
  return ea("overwrite", { transform: function(F2) {
    return F2.toLowerCase().trim().replace($("[^\\w\\s-]", "g"), hg).replace($("[\\s_-]+", "g"), "-").replace($("^-+|-+$", "g"), hg);
  } });
});
W("properties", function(a2) {
  return Ze(a2);
});
W("property", function() {
  let Q2 = arguments[0], a2 = arguments[1], b2 = arguments[2];
  Q2 = { property: Q2, schema: a2 };
  ia(Q2, Pa(b2));
  return ea("property", Q2);
});
W("templateLiteral", function() {
  var a2 = arguments[0];
  var b2 = arguments[1];
  var d2 = ca("template_literal", b2);
  d2.parts = a2;
  d2 = new nc(d2);
  b2 = d2._zod;
  da(d2);
  ba(b2, "pattern", { value: Ae(a2), writable: true, configurable: true, enumerable: true });
  return d2;
});
W("stringFormat", function(a2, b2, c2) {
  return Pe(a2, b2, c2);
});
W("check", function(a2, b2) {
  return ub(a2, b2);
});
W("with", function(a2, b2) {
  return ub(a2, b2);
});
W("refine", function() {
  let a2 = arguments[0], l2 = arguments[1];
  l2 = ca("custom", l2);
  l2.fn = a2;
  l2.check = "custom";
  return new Ra(l2);
});
W("superRefine", function(a2, b2) {
  return ub(function(e2) {
    var h2 = this;
    e2.addIssue = function(o2) {
      if ("string" == typeof o2) {
        var b3 = e2.value;
        o2 = { message: o2, code: "custom", input: b3, inst: h2, path: [] };
      } else {
        !o2.fatal || (o2.continue = false);
        o2.code === void 0 && (o2.code = "custom");
        true === "input" in o2 || (o2.input = e2.value);
        o2.inst === void 0 && (o2.inst = h2);
        o2.continue === void 0 && (o2.continue = true);
      }
      var x2 = e2.issues;
      x2.push(o2);
    };
    return a2(e2.value, e2);
  }, b2);
});
W("trim", function() {
  return ea("overwrite", { transform: function(F2) {
    return F2.trim();
  } });
});
W("maxLength", function() {
  var Q2 = arguments[0];
  var a2 = arguments[1];
  Q2 = { maximum: Q2 };
  X(a2) && !(a2 == null) && ia(Q2, Pa(a2));
  var d2 = ea("max_length", Q2);
  return d2;
});
W("minLength", function() {
  var Q2 = arguments[0];
  var a2 = arguments[1];
  Q2 = { minimum: Q2 };
  X(a2) && !(a2 == null) && ia(Q2, Pa(a2));
  var d2 = ea("min_length", Q2);
  return d2;
});
W("ZodISODateTime", Qc);
W("ZodISODate", e);
W("ZodISOTime", Rc);
W("ZodISODuration", f);
W("$ZodError", d);
W("NEVER", { status: "aborted" });
W("fromJSONSchema", function(e2, f2) {
  e2;
  f2;
  return new Ia({ type: "unknown" });
});
W("visit", Od);
W("ZodIssueCode", { invalid_type: "invalid_type", too_big: "too_big", too_small: "too_small", invalid_format: "invalid_format", not_multiple_of: "not_multiple_of", unrecognized_keys: "unrecognized_keys", invalid_union: "invalid_union", invalid_key: "invalid_key", invalid_element: "invalid_element", invalid_value: "invalid_value", custom: "custom" });
W("TimePrecision", { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 });
ia(a, pb);
a.$ZodError = d;
a.$ZodRealError = k;
a.$ZodEncodeError = Fc;
a.toDotPath = Ik;
a.flattenError = j;
a.formatError = i;
a.treeifyError = g;
a.prettifyError = h;
a.getDiscriminatedOption = l;
a.$ZodType = Y;
a.$ZodPipe = Ea;
a.$ZodCodec = nb;
a.$ZodPreprocess = Kb;
a.$ZodString = Z;
a.$ZodCustom = Ra;
a.$ZodNever = ib;
a.$ZodUnknown = Ia;
a.$ZodNumber = ha;
a.$ZodString = Z;
a.$ZodType = Y;
a.$ZodObject = ma;
a.$ZodOptional = ab;
a.visit = Od;
a.$ZodObject = ma;
a.$ZodOptional = ab;
a.$ZodExactOptional = bb;
a.config = Hd;
a.globalConfig = Rb();
a.util = Ge();
pb.util = a.util;
var _e = pb;

// dist/compat.js
var import_node_module = require("node:module");
var import_meta = {};
var require2 = (0, import_node_module.createRequire)(import_meta.url);
function applyCompat(z2) {
  const util2 = {
    isPlainObject(o2) {
      if (o2 === null || typeof o2 !== "object") return false;
      const ctor = o2.constructor;
      if (ctor === void 0) return true;
      if (typeof ctor !== "function") return true;
      const prot = ctor.prototype;
      if (prot === null || typeof prot !== "object") return false;
      return Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf");
    },
    shallowClone(o2) {
      if (util2.isPlainObject(o2)) return { ...o2 };
      if (Array.isArray(o2)) return [...o2];
      if (o2 instanceof Map) return new Map(o2);
      if (o2 instanceof Set) return new Set(o2);
      return o2;
    },
    floatSafeRemainder(val, step) {
      const valDec = (val.toString().split(".")[1] || "").length;
      const stepDec = (step.toString().split(".")[1] || "").length;
      const mul = 10 ** Math.max(valDec, stepDec);
      return Math.round(val * mul) % Math.round(step * mul) / mul;
    },
    jsonStringifyReplacer(_2, value) {
      return typeof value === "bigint" ? value.toString() : value;
    },
    nullish(input) {
      return input === null || input === void 0;
    },
    prefixIssues(path, issues) {
      return issues.map((iss) => ({ ...iss, path: [...path, ...iss.path ?? []] }));
    },
    issue(arg, input, inst) {
      if (typeof arg === "string") {
        return { code: "custom", message: arg, input, inst, path: [] };
      }
      return arg;
    },
    cleanEnum(obj) {
      return Object.entries(obj).filter(([k2]) => Number.isNaN(Number.parseInt(k2, 10))).map((el) => el[1]);
    },
    getEnumValues(entries) {
      const numericValues = Object.values(entries).filter((v2) => typeof v2 === "number");
      return Object.entries(entries).filter(([k2]) => numericValues.indexOf(+k2) === -1).map(([, v2]) => v2);
    },
    joinValues(array2, separator = "|") {
      return array2.map((val) => typeof val === "string" ? `"${val}"` : String(val)).join(separator);
    },
    cached(getter) {
      return {
        get value() {
          const value = getter();
          Object.defineProperty(this, "value", { value });
          return value;
        }
      };
    },
    assertNever() {
      throw new Error("Unexpected value in exhaustive check");
    },
    assert() {
    },
    assertIs() {
    },
    assertEqual(val) {
      return val;
    },
    toZod() {
      return (schema) => schema;
    }
  };
  z2.core = z2.core ?? {};
  z2.core.util = Object.assign(z2.core.util ?? {}, util2);
  z2.core.$ZodError = z2.ZodError;
  z2.core.config = z2.config;
  z2.core.globalConfig = z2.core.globalConfig ?? {};
  z2.core.globalRegistry = z2.globalRegistry;
  z2.core.registry = z2.registry;
  z2.core.parse = z2.parse;
  z2.core.safeParse = z2.safeParse;
  z2.core.clone = (inst) => inst.clone();
  z2.core.$constructor = (name, init) => {
    const ctor = function(def) {
      const inst = Object.create(ctor.prototype);
      init(inst, def ?? {});
      return inst;
    };
    Object.defineProperty(ctor, "name", { value: name });
    return ctor;
  };
  z2.float32 = z2.float32 ?? ((params) => z2.number(params));
  z2.float64 = z2.float64 ?? ((params) => z2.number(params));
  z2.int32 = z2.int32 ?? ((params) => z2.number(params).int());
  z2.uint32 = z2.uint32 ?? ((params) => z2.number(params).int().nonnegative());
  z2.int64 = z2.int64 ?? ((params) => z2.bigint(params));
  z2.uint64 = z2.uint64 ?? ((params) => z2.bigint(params));
  z2.describe = z2.describe ?? ((schema, desc) => schema.describe(desc));
  z2.meta = z2.meta ?? ((schema, value) => schema.meta(value));
  z2.mac = z2.mac ?? ((params) => z2.string(params).mac(params));
  z2.e164 = z2.e164 ?? ((params) => z2.string(params).e164(params));
  z2.cidrv4 = z2.cidrv4 ?? ((params) => z2.string(params).cidrv4(params));
  z2.cidrv6 = z2.cidrv6 ?? ((params) => z2.string(params).cidrv6(params));
  z2.base64 = z2.base64 ?? ((params) => z2.string(params).base64(params));
  z2.base64url = z2.base64url ?? ((params) => z2.string(params).base64url(params));
  z2.xid = z2.xid ?? ((params) => z2.string(params).xid(params));
  z2.ksuid = z2.ksuid ?? ((params) => z2.string(params).ksuid(params));
  z2.cuid = z2.cuid ?? ((params) => z2.string(params).cuid(params));
  z2.cuid2 = z2.cuid2 ?? ((params) => z2.string(params).cuid2(params));
  z2.emoji = z2.emoji ?? ((params) => z2.string(params).emoji(params));
  z2.uuidv4 = z2.uuidv4 ?? ((params) => z2.string(params).uuidv4(params));
  z2.uuidv6 = z2.uuidv6 ?? ((params) => z2.string(params).uuidv6(params));
  z2.uuidv7 = z2.uuidv7 ?? ((params) => z2.string(params).uuidv7(params));
  z2.stringFormat = z2.stringFormat ?? ((format, fnOrRegex, params) => {
    const regex = fnOrRegex instanceof RegExp ? fnOrRegex : void 0;
    const fn = typeof fnOrRegex === "function" ? fnOrRegex : void 0;
    if (regex) return z2.string(params).regex(regex);
    if (fn) return z2.string(params).refine(fn);
    return z2.string(params);
  });
  z2.creditCard = z2.creditCard ?? ((params) => {
    return z2.string(params).regex(/^\d(?:[ -]?\d){11,18}$/, params).refine((value) => {
      const digits = String(value).replace(/\D/g, "");
      let sum = 0;
      let alt = false;
      for (let i2 = digits.length - 1; i2 >= 0; i2--) {
        let n2 = digits.charCodeAt(i2) - 48;
        if (alt) {
          n2 *= 2;
          if (n2 > 9) n2 -= 9;
        }
        sum += n2;
        alt = !alt;
      }
      return sum % 10 === 0;
    }, params);
  });
  z2.templateLiteral = z2.templateLiteral ?? ((parts, params) => {
    const source = parts.map((part) => {
      if (typeof part === "string") return part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (typeof part === "number" || typeof part === "bigint" || typeof part === "boolean") return String(part);
      const type = part?.def?.type ?? part?._zod?.def?.type;
      if (type === "string") return ".*";
      if (type === "number") return "-?\\d+(?:\\.\\d+)?";
      if (type === "bigint") return "-?\\d+";
      if (type === "boolean") return "true|false";
      if (type === "null") return "null";
      if (type === "undefined") return "undefined";
      if (type === "literal") {
        const values = part.def?.values ?? part._zod?.def?.values ?? [];
        return values.map((v2) => String(v2).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
      }
      if (type === "enum") {
        const values = part.def?.values ?? part.options ?? [];
        return values.map((v2) => String(v2).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
      }
      return ".*";
    }).join("");
    return z2.string(params).regex(new RegExp(`^${source}$`));
  });
  z2.deepPartial = z2.deepPartial ?? ((schema) => deepPartial(z2, schema));
  z2.fromJSONSchema = (json2, params) => fromJson(z2, json2, params);
  z2.safeEncode = z2.safeEncode ?? ((schema, data, ctx) => schema.safeParse(data, { ...ctx ?? {}, direction: "backward" }));
  z2.encode = z2.encode ?? ((schema, data, ctx) => schema.encode(data, ctx));
  z2.decode = z2.decode ?? ((schema, data, ctx) => schema.decode(data, ctx));
  z2.safeDecode = z2.safeDecode ?? ((schema, data, ctx) => schema.safeParse(data, ctx));
  z2.encodeAsync = z2.encodeAsync ?? ((schema, data, ctx) => schema.encodeAsync(data, ctx));
  z2.decodeAsync = z2.decodeAsync ?? ((schema, data, ctx) => schema.decodeAsync(data, ctx));
  z2.safeEncodeAsync = z2.safeEncodeAsync ?? ((schema, data, ctx) => schema.safeParse(data, { ...ctx ?? {}, direction: "backward" }).then ? schema.safeParseAsync(data, { ...ctx ?? {}, direction: "backward" }) : Promise.resolve(schema.safeParse(data, { ...ctx ?? {}, direction: "backward" })));
  z2.safeDecodeAsync = z2.safeDecodeAsync ?? ((schema, data, ctx) => schema.safeParseAsync(data, ctx));
  z2.setErrorMap = (fn) => z2.config({ customError: fn });
  z2.compile = z2.compile ?? ((schema) => schema);
  z2.core.clone = (inst, def, params) => {
    const Ctor = inst._zod?.constr ?? inst.constructor;
    const cl = new Ctor(def ?? inst._zod?.def ?? inst.def);
    if (params?.parent) cl._zod.parent = inst;
    return cl;
  };
  if (z2.ZodTuple?.prototype && !z2.ZodTuple.prototype.rest) {
    Object.defineProperty(z2.ZodTuple.prototype, "rest", {
      configurable: true,
      value(rest) {
        const items = this.def?.items ?? this._zod?.def?.items;
        return z2.tuple(items ?? [], rest);
      }
    });
  }
  try {
    const locales2 = require2("zod/v4/locales");
    z2.locales = { ...z2.locales, ...locales2.default ?? locales2 };
  } catch {
  }
  return z2;
}
function deepPartial(z2, schema, seen = /* @__PURE__ */ new Map()) {
  if (seen.has(schema)) return seen.get(schema);
  const type = schema?.def?.type ?? schema?.type;
  if (type === "object") {
    const next = schema.partial();
    seen.set(schema, next);
    return next;
  }
  if (type === "array") return z2.array(deepPartial(z2, schema.element ?? schema.def?.element, seen));
  if (type === "optional") return z2.optional(deepPartial(z2, schema.unwrap(), seen));
  if (type === "nullable") return z2.nullable(deepPartial(z2, schema.unwrap(), seen));
  if (type === "union") return z2.union((schema.options ?? schema.def?.options ?? []).map((opt) => deepPartial(z2, opt, seen)));
  if (type === "lazy") return z2.lazy(() => deepPartial(z2, schema.unwrap(), seen));
  return schema;
}
function fromJson(z2, json2) {
  if (!json2 || typeof json2 !== "object") return z2.unknown();
  if (json2.const !== void 0) return z2.literal(json2.const);
  if (json2.enum) return z2.enum(json2.enum.map(String));
  if (json2.anyOf) return z2.union(json2.anyOf.map((item) => fromJson(z2, item)));
  if (json2.allOf) return json2.allOf.map((item) => fromJson(z2, item)).reduce((a2, b2) => a2.and(b2));
  if (json2.type === "string") {
    let s2 = z2.string();
    if (json2.format === "credit_card") s2 = s2.check(z2.creditCard());
    else if (json2.format && typeof z2[json2.format] === "function") s2 = s2.check(z2[json2.format]());
    if (typeof json2.minLength === "number") s2 = s2.min(json2.minLength);
    if (typeof json2.maxLength === "number") s2 = s2.max(json2.maxLength);
    if (json2.pattern) s2 = s2.regex(new RegExp(json2.pattern));
    return s2;
  }
  if (json2.type === "number" || json2.type === "integer") return z2.number();
  if (json2.type === "boolean") return z2.boolean();
  if (json2.type === "null") return z2.null();
  if (json2.type === "array") return z2.array(fromJson(z2, json2.items ?? {}));
  if (json2.type === "object") {
    const shape = {};
    for (const [key, value] of Object.entries(json2.properties ?? {})) {
      const field = fromJson(z2, value);
      shape[key] = json2.required?.includes(key) ? field : field.optional();
    }
    return z2.object(shape);
  }
  return z2.unknown();
}

// dist/visit.js
var RESOLVING = /* @__PURE__ */ Symbol("z.visit/resolving");
function visit(z2, schema, fnOrHandlers) {
  const fn = typeof fnOrHandlers === "function" ? fnOrHandlers : (node) => {
    const h2 = fnOrHandlers[node._zod.def.type];
    return h2 ? h2(node) : node;
  };
  const cache = /* @__PURE__ */ new Map();
  function clone(inst, def) {
    const Ctor = inst._zod?.constr ?? inst.constructor;
    return new Ctor(def);
  }
  function run(s2) {
    const cached = cache.get(s2);
    if (cached === RESOLVING) {
      return new z2.ZodLazy({
        type: "lazy",
        getter: () => cache.get(s2)
      });
    }
    if (cached !== void 0) return cached;
    cache.set(s2, RESOLVING);
    const mapped = fn(mapInner(s2));
    cache.set(s2, mapped);
    return mapped;
  }
  function mapInner(s2) {
    const def = s2._zod.def;
    const kind = def.type;
    if (kind === "object") {
      const oldShape = def.shape ?? {};
      let changed = false;
      const newShape = {};
      for (const k2 of Object.keys(oldShape)) {
        const mapped = run(oldShape[k2]);
        if (mapped !== oldShape[k2]) changed = true;
        newShape[k2] = mapped;
      }
      let newCatchall = def.catchall;
      if (def.catchall) {
        newCatchall = run(def.catchall);
        if (newCatchall !== def.catchall) changed = true;
      }
      return changed ? clone(s2, { ...def, shape: newShape, catchall: newCatchall }) : s2;
    }
    if (kind === "array") {
      const mapped = run(def.element);
      return mapped === def.element ? s2 : clone(s2, { ...def, element: mapped });
    }
    if (kind === "tuple") {
      const oldItems = def.items ?? [];
      let changed = false;
      const newItems = [];
      for (const item of oldItems) {
        const mapped = run(item);
        if (mapped !== item) changed = true;
        newItems.push(mapped);
      }
      let newRest = def.rest;
      if (def.rest) {
        newRest = run(def.rest);
        if (newRest !== def.rest) changed = true;
      }
      return changed ? clone(s2, { ...def, items: newItems, rest: newRest }) : s2;
    }
    if (kind === "record" || kind === "map") {
      const newKey = run(def.keyType);
      const newVal = run(def.valueType);
      return newKey === def.keyType && newVal === def.valueType ? s2 : clone(s2, { ...def, keyType: newKey, valueType: newVal });
    }
    if (kind === "set") {
      const newVal = run(def.valueType);
      return newVal === def.valueType ? s2 : clone(s2, { ...def, valueType: newVal });
    }
    if (kind === "union") {
      const oldOptions = def.options ?? [];
      let changed = false;
      const newOptions = [];
      for (const opt of oldOptions) {
        const mapped = run(opt);
        if (mapped !== opt) changed = true;
        newOptions.push(mapped);
      }
      return changed ? clone(s2, { ...def, options: newOptions }) : s2;
    }
    if (kind === "intersection") {
      const newLeft = run(def.left);
      const newRight = run(def.right);
      return newLeft === def.left && newRight === def.right ? s2 : clone(s2, { ...def, left: newLeft, right: newRight });
    }
    if (kind === "optional" || kind === "nullable" || kind === "default" || kind === "prefault" || kind === "catch" || kind === "readonly" || kind === "nonoptional" || kind === "promise" || kind === "success") {
      const newInner = run(def.innerType);
      return newInner === def.innerType ? s2 : clone(s2, { ...def, innerType: newInner });
    }
    if (kind === "pipe") {
      const newIn = run(def.in);
      const newOut = run(def.out);
      return newIn === def.in && newOut === def.out ? s2 : clone(s2, { ...def, in: newIn, out: newOut });
    }
    if (kind === "function") {
      const newInput = run(def.input);
      const newOutput = run(def.output);
      return newInput === def.input && newOutput === def.output ? s2 : clone(s2, { ...def, input: newInput, output: newOutput });
    }
    if (kind === "lazy") {
      const original = def.getter;
      const rest = { ...def };
      delete rest._cachedInner;
      return clone(s2, { ...rest, getter: () => run(original()) });
    }
    return s2;
  }
  return run(schema);
}
function installVisit(z2) {
  z2.core = z2.core ?? {};
  z2.core.visit = (schema, fnOrHandlers) => visit(z2, schema, fnOrHandlers);
  z2.visit = z2.core.visit;
  z2.deepPartial = (schema) => visit(z2, schema, {
    object: (s2) => s2.partial(),
    union: (s2) => {
      const def = s2._zod.def;
      return def.discriminator === void 0 ? s2 : z2.union(def.options);
    }
  });
}

// dist/async-api.js
function restack(err, callee) {
  try {
    Error.captureStackTrace(err, callee);
  } catch {
  }
  const lines = String(err.stack ?? "").split("\n");
  const header = [];
  const frames = [];
  for (const line of lines) {
    if (line.trim().startsWith("at ")) {
      if (line.includes("processTicksAndRejections")) continue;
      if (line.includes("internal/process")) continue;
      if (line.includes("async-api")) continue;
      frames.push(line);
    } else {
      header.push(line);
    }
  }
  if (!header.length) header.push(`${err.name}: ${err.message}`);
  if (frames.length) err.stack = [...header, ...frames].join("\n");
}
function throwing2(runSafe) {
  let fn;
  fn = function(data, params) {
    const result = runSafe.call(this, data, params);
    if (result?.success) return result.data;
    if (result?.error) {
      restack(result.error, fn);
      throw result.error;
    }
    return result;
  };
  return fn;
}
function throwing3(runSafe) {
  let fn;
  fn = function(schema, data, ctx) {
    const result = runSafe(schema, data, ctx);
    if (result?.success) return result.data;
    if (result?.error) {
      restack(result.error, fn);
      throw result.error;
    }
    return result;
  };
  return fn;
}
function asyncThrowing2(runSafe) {
  let fn;
  fn = async function(data, params) {
    const result = await runSafe.call(this, data, params);
    if (result?.success) return result.data;
    if (result?.error) {
      restack(result.error, fn);
      throw result.error;
    }
    return result;
  };
  return fn;
}
function asyncThrowing3(runSafe) {
  let fn;
  fn = async function(schema, data, ctx) {
    const result = await runSafe(schema, data, ctx);
    if (result?.success) return result.data;
    if (result?.error) {
      restack(result.error, fn);
      throw result.error;
    }
    return result;
  };
  return fn;
}
function installOwn(proto, key, make) {
  Object.defineProperty(proto, key, {
    configurable: true,
    enumerable: true,
    get() {
      const self = this;
      const fn = make(self);
      Object.defineProperty(self, key, {
        configurable: true,
        writable: true,
        enumerable: true,
        value: fn
      });
      return fn;
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, enumerable: true, value });
    }
  });
}
function installAsyncApi(target) {
  target.parse = throwing3((schema, data, ctx) => target.safeParse(schema, data, ctx));
  target.encode = throwing3(
    (schema, data, ctx) => target.safeParse(schema, data, { ...ctx ?? {}, direction: "backward" })
  );
  target.decode = throwing3(
    (schema, data, ctx) => target.safeParse(schema, data, { ...ctx ?? {}, direction: "forward" })
  );
  target.parseAsync = asyncThrowing3((schema, data, ctx) => target.safeParseAsync(schema, data, ctx));
  target.encodeAsync = asyncThrowing3(
    (schema, data, ctx) => target.safeParseAsync(schema, data, { ...ctx ?? {}, direction: "backward" })
  );
  target.decodeAsync = asyncThrowing3(
    (schema, data, ctx) => target.safeParseAsync(schema, data, { ...ctx ?? {}, direction: "forward" })
  );
  const proto = target.ZodType?.prototype;
  if (!proto) return;
  installOwn(proto, "parse", (self) => throwing2((data, params) => self.safeParse(data, params)));
  installOwn(
    proto,
    "encode",
    (self) => throwing2((data, params) => self.safeParse(data, { ...params ?? {}, direction: "backward" }))
  );
  installOwn(
    proto,
    "decode",
    (self) => throwing2((data, params) => self.safeParse(data, { ...params ?? {}, direction: "forward" }))
  );
  installOwn(proto, "parseAsync", (self) => asyncThrowing2((data, params) => self.safeParseAsync(data, params)));
  installOwn(
    proto,
    "encodeAsync",
    (self) => asyncThrowing2((data, params) => self.safeParseAsync(data, { ...params ?? {}, direction: "backward" }))
  );
  installOwn(
    proto,
    "decodeAsync",
    (self) => asyncThrowing2((data, params) => self.safeParseAsync(data, { ...params ?? {}, direction: "forward" }))
  );
}

// dist/official-json-schema.js
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function getEnumValues(entries) {
  if (Array.isArray(entries)) return [...entries];
  const numericValues = Object.values(entries).filter((v2) => typeof v2 === "number");
  return Object.entries(entries).filter(([k2]) => numericValues.indexOf(+k2) === -1).map(([, v2]) => v2);
}
var globalRegistry = {
  get(schema) {
    return globalThis.__zod_globalRegistry?.get(schema);
  },
  has(schema) {
    return globalThis.__zod_globalRegistry?.has(schema) ?? false;
  },
  add(schema, meta2) {
    return globalThis.__zod_globalRegistry?.add(schema, meta2);
  },
  get _idmap() {
    return globalThis.__zod_globalRegistry?._idmap;
  }
};
function assignProps(target, ...sources) {
  for (const source of sources) {
    for (const key of Reflect.ownKeys(source)) {
      if (Object.prototype.propertyIsEnumerable.call(source, key)) {
        assignProp(target, key, source[key]);
      }
    }
  }
  return target;
}
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4") target = "draft-04";
  if (target === "draft-7") target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {
    }),
    io: params?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    external: params?.external ?? void 0
  };
}
function handleUnrepresentable(schema, ctx, json2, params, message) {
  const result = typeof ctx.unrepresentable === "function" ? ctx.unrepresentable({ zodSchema: schema, path: params.path, message }) : ctx.unrepresentable;
  if (result === "any") return false;
  if (result === void 0 || result === "throw") throw new Error(message);
  Object.assign(json2, result);
  return true;
}
function process(schema, ctx, _params = { path: [], schemaPath: [] }) {
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
  ctx.seen.set(schema, result);
  ctx.sharedDefsExtractedFor = void 0;
  ctx.sharedEmitDoneFor = void 0;
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref) result.ref = parent;
      process(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta2 = ctx.metadataRegistry.get(schema);
  if (meta2) assignProps(result.schema, meta2);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && "_prefault" in result.schema) result.schema.default ??= result.schema._prefault;
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function encodeJSONPointerSegment(segment) {
  return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external) return;
  const idToSchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.entries()) {
    const id2 = ctx.metadataRegistry.get(entry[0])?.id;
    if (id2) {
      const existing = idToSchema.get(id2);
      if (existing && existing !== entry[0]) {
        throw new Error(
          `Duplicate schema id "${id2}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`
        );
      }
      idToSchema.set(id2, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id22) => id22);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id2 = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id2;
      return { defId: id2, ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id2)}` };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    if (entry[1] === root && !entry[1].schema.id) {
      return { ref: uriPrefix };
    }
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + encodeJSONPointerSegment(defId) };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId) seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2) {
      delete schema2[key];
    }
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error(
          `Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`
        );
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id2 = ctx.metadataRegistry.get(entry[0])?.id;
    if (id2) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
        continue;
      }
    }
  }
  if (ctx.external) ctx.sharedDefsExtractedFor = ctx.external;
}
function compactTypeUnion(schema) {
  const options = schema.anyOf;
  if (!Array.isArray(options) || options.length === 0 || schema.type !== void 0) return;
  const types = [];
  for (const option of options) {
    if (!option || typeof option !== "object") return;
    compactTypeUnion(option);
    const keys = Object.keys(option);
    if (keys.length !== 1 || keys[0] !== "type") return;
    const type = option.type;
    for (const member of Array.isArray(type) ? type : [type]) {
      if (typeof member !== "string") return;
      if (!types.includes(member)) types.push(member);
    }
  }
  delete schema.anyOf;
  schema.type = types.length === 1 ? types[0] : types;
}
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null) return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else {
        assignProps(schema2, refSchema);
      }
      assignProps(schema2, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf") continue;
          if (!(key in _cached)) {
            delete schema2[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf") continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema2[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf") continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of [...ctx.seen.entries()].reverse()) {
      flattenRef(entry[0]);
    }
    if (ctx.target !== "openapi-3.0") {
      for (const entry of ctx.seen.entries()) {
        compactTypeUnion(entry[1].def ?? entry[1].schema);
      }
    }
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {
  } else {
  }
  if (ctx.external?.uri) {
    const id2 = ctx.external.registry.get(schema)?.id;
    if (!id2) throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id2);
  }
  assignProps(result, root.defId ? root.schema : root.def ?? root.schema);
  const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
  if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
  const defs = ctx.external?.defs ?? {};
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.def && seen.defId) {
        if (seen.def.id === seen.defId) delete seen.def.id;
        assignProp(defs, seen.defId, seen.def);
      }
    }
  }
  if (ctx.external) ctx.sharedEmitDoneFor = ctx.external;
  if (ctx.external) {
  } else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema)) return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform") return true;
  if (def.type === "array") return isTransforming(def.element, ctx);
  if (def.type === "set") return isTransforming(def.valueType, ctx);
  if (def.type === "lazy") return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    if (_schema._zod.traits.has("$ZodCodec")) return true;
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx)) return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx)) return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx)) return true;
    }
    if (def.rest && isTransforming(def.rest, ctx)) return true;
    return false;
  }
  return false;
}
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  process(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
var formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
};
var stringProcessor = (schema, ctx, _json, _params) => {
  const json2 = _json;
  json2.type = "string";
  const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
  if (typeof minimum === "number") json2.minLength = minimum;
  if (typeof maximum === "number") json2.maxLength = maximum;
  if (format) {
    json2.format = formatMap[format] ?? format;
    if (json2.format === "") delete json2.format;
    if (format === "time") {
      delete json2.format;
    }
  }
  if (contentEncoding) json2.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const regexes = [...patterns];
    if (regexes.length === 1) json2.pattern = regexes[0].source;
    else if (regexes.length > 1) {
      json2.allOf = [
        ...regexes.map((regex) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex.source
        }))
      ];
    }
  }
};
var numberProcessor = (schema, ctx, _json, _params) => {
  const json2 = _json;
  const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
  if (typeof format === "string" && format.includes("int")) json2.type = "integer";
  else json2.type = "number";
  const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
  const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
  const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
  if (exMin) {
    if (legacy) {
      json2.minimum = exclusiveMinimum;
      json2.exclusiveMinimum = true;
    } else {
      json2.exclusiveMinimum = exclusiveMinimum;
    }
  } else if (typeof minimum === "number") {
    json2.minimum = minimum;
  }
  if (exMax) {
    if (legacy) {
      json2.maximum = exclusiveMaximum;
      json2.exclusiveMaximum = true;
    } else {
      json2.exclusiveMaximum = exclusiveMaximum;
    }
  } else if (typeof maximum === "number") {
    json2.maximum = maximum;
  }
  if (typeof multipleOf === "number") json2.multipleOf = multipleOf;
};
var booleanProcessor = (_schema, _ctx, json2, _params) => {
  json2.type = "boolean";
};
var bigintProcessor = (schema, ctx, json2, params) => {
  handleUnrepresentable(schema, ctx, json2, params, "BigInt cannot be represented in JSON Schema");
};
var symbolProcessor = (schema, ctx, json2, params) => {
  handleUnrepresentable(schema, ctx, json2, params, "Symbols cannot be represented in JSON Schema");
};
var nullProcessor = (_schema, ctx, json2, _params) => {
  if (ctx.target === "openapi-3.0") {
    json2.type = "string";
    json2.nullable = true;
    json2.enum = [null];
  } else {
    json2.type = "null";
  }
};
var undefinedProcessor = (schema, ctx, json2, params) => {
  handleUnrepresentable(schema, ctx, json2, params, "Undefined cannot be represented in JSON Schema");
};
var voidProcessor = (schema, ctx, json2, params) => {
  handleUnrepresentable(schema, ctx, json2, params, "Void cannot be represented in JSON Schema");
};
var neverProcessor = (_schema, _ctx, json2, _params) => {
  json2.not = {};
};
var anyProcessor = (_schema, _ctx, _json, _params) => {
};
var unknownProcessor = (_schema, _ctx, _json, _params) => {
};
var dateProcessor = (schema, ctx, json2, params) => {
  handleUnrepresentable(schema, ctx, json2, params, "Date cannot be represented in JSON Schema");
};
var enumProcessor = (schema, _ctx, json2, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.every((v2) => typeof v2 === "number")) json2.type = "number";
  if (values.every((v2) => typeof v2 === "string")) json2.type = "string";
  json2.enum = values;
};
var literalProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const vals = [];
  for (const val of def.values) {
    if (val === void 0) {
      if (handleUnrepresentable(schema, ctx, json2, params, "Literal `undefined` cannot be represented in JSON Schema"))
        return;
    } else if (typeof val === "bigint") {
      if (handleUnrepresentable(schema, ctx, json2, params, "BigInt literals cannot be represented in JSON Schema"))
        return;
      vals.push(Number(val));
    } else {
      vals.push(val);
    }
  }
  if (vals.length === 0) {
  } else if (vals.length === 1) {
    const val = vals[0];
    json2.type = val === null ? "null" : typeof val;
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json2.enum = [val];
    } else {
      json2.const = val;
    }
  } else {
    if (vals.every((v2) => typeof v2 === "number")) json2.type = "number";
    if (vals.every((v2) => typeof v2 === "string")) json2.type = "string";
    if (vals.every((v2) => typeof v2 === "boolean")) json2.type = "boolean";
    if (vals.every((v2) => v2 === null)) json2.type = "null";
    json2.enum = vals;
  }
};
var nanProcessor = (schema, ctx, json2, params) => {
  handleUnrepresentable(schema, ctx, json2, params, "NaN cannot be represented in JSON Schema");
};
var templateLiteralProcessor = (schema, _ctx, json2, _params) => {
  const _json = json2;
  const pattern = schema._zod.pattern;
  if (!pattern) throw new Error("Pattern not found in template literal");
  _json.type = "string";
  _json.pattern = pattern.source;
};
var fileProcessor = (schema, _ctx, json2, _params) => {
  const _json = json2;
  const file2 = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  };
  const { minimum, maximum, mime } = schema._zod.bag;
  if (minimum !== void 0) file2.minLength = minimum;
  if (maximum !== void 0) file2.maxLength = maximum;
  if (mime) {
    if (mime.length === 1) {
      file2.contentMediaType = mime[0];
      Object.assign(_json, file2);
    } else {
      Object.assign(_json, file2);
      _json.anyOf = mime.map((m2) => ({ contentMediaType: m2 }));
    }
  } else {
    Object.assign(_json, file2);
  }
};
var successProcessor = (_schema, _ctx, json2, _params) => {
  json2.type = "boolean";
};
var customProcessor = (schema, ctx, json2, params) => {
  handleUnrepresentable(schema, ctx, json2, params, "Custom types cannot be represented in JSON Schema");
};
var functionProcessor = (schema, ctx, json2, params) => {
  handleUnrepresentable(schema, ctx, json2, params, "Function types cannot be represented in JSON Schema");
};
var transformProcessor = (schema, ctx, json2, params) => {
  handleUnrepresentable(schema, ctx, json2, params, "Transforms cannot be represented in JSON Schema");
};
var mapProcessor = (schema, ctx, json2, params) => {
  handleUnrepresentable(schema, ctx, json2, params, "Map cannot be represented in JSON Schema");
};
var setProcessor = (schema, ctx, json2, params) => {
  handleUnrepresentable(schema, ctx, json2, params, "Set cannot be represented in JSON Schema");
};
var arrayProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number") json2.minItems = minimum;
  if (typeof maximum === "number") json2.maxItems = maximum;
  json2.type = "array";
  json2.items = process(def.element, ctx, {
    ...params,
    path: [...params.path, "items"]
  });
};
function inputOptin(schema) {
  const def = schema._zod.def;
  if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) {
    return inputOptin(def.out);
  }
  if (def.type === "catch") {
    return inputOptin(def.innerType);
  }
  return schema._zod.optin;
}
var objectProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  json2.type = "object";
  json2.properties = {};
  const shape = def.shape;
  for (const key in shape) {
    assignProp(
      json2.properties,
      key,
      process(shape[key], ctx, {
        ...params,
        path: [...params.path, "properties", key]
      })
    );
  }
  const allKeys = new Set(Object.keys(shape));
  const requiredKeys = new Set(
    [...allKeys].filter((key) => {
      const field = def.shape[key];
      if (ctx.io === "input") {
        return inputOptin(field) === void 0;
      } else {
        return field._zod.optout === void 0;
      }
    })
  );
  if (requiredKeys.size > 0) {
    json2.required = Array.from(requiredKeys);
  }
  if (def.catchall?._zod.def.type === "never") {
    json2.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output") json2.additionalProperties = false;
  } else if (def.catchall) {
    json2.additionalProperties = process(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
var unionProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map(
    (x2, i2) => process(x2, ctx, {
      ...params,
      path: [...params.path, isExclusive ? "oneOf" : "anyOf", i2]
    })
  );
  if (isExclusive) {
    json2.oneOf = options;
  } else {
    json2.anyOf = options;
  }
};
var intersectionProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const a2 = process(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b2 = process(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a2) ? a2.allOf : [a2],
    ...isSimpleIntersection(b2) ? b2.allOf : [b2]
  ];
  json2.allOf = allOf;
};
var tupleProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  json2.type = "array";
  const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
  const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
  const prefixItems = def.items.map(
    (x2, i2) => process(x2, ctx, {
      ...params,
      path: [...params.path, prefixPath, i2]
    })
  );
  const rest = def.rest ? process(def.rest, ctx, {
    ...params,
    path: [...params.path, restPath, ...ctx.target === "openapi-3.0" ? [def.items.length] : []]
  }) : null;
  let minItems = def.items.length;
  while (minItems > 0) {
    const item = def.items[minItems - 1];
    const optional2 = ctx.io === "input" ? inputOptin(item) !== void 0 : item._zod.optout === "optional";
    if (!optional2) break;
    minItems--;
  }
  const maxItems = def.items.length;
  const isClosed = !def.rest;
  if (ctx.target === "draft-2020-12") {
    json2.prefixItems = prefixItems;
    if (isClosed) {
      json2.items = false;
    } else if (rest) {
      json2.items = rest;
    }
    if (minItems > 0) json2.minItems = minItems;
    if (isClosed) json2.maxItems = maxItems;
  } else if (ctx.target === "openapi-3.0") {
    json2.items = {
      anyOf: prefixItems
    };
    if (rest) {
      json2.items.anyOf.push(rest);
    }
    if (minItems > 0) json2.minItems = minItems;
    if (isClosed) json2.maxItems = maxItems;
  } else {
    json2.items = prefixItems;
    if (isClosed) {
      json2.additionalItems = false;
    } else if (rest) {
      json2.additionalItems = rest;
    }
    if (minItems > 0) json2.minItems = minItems;
    if (isClosed) json2.maxItems = maxItems;
  }
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number") json2.minItems = minimum;
  if (typeof maximum === "number") json2.maxItems = maximum;
};
var recordProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  json2.type = "object";
  const keyType = def.keyType;
  const keyBag = keyType._zod.bag;
  const patterns = keyBag?.patterns;
  if (def.mode === "loose" && patterns && patterns.size > 0) {
    const valueSchema = process(def.valueType, ctx, {
      ...params,
      path: [...params.path, "patternProperties", "*"]
    });
    json2.patternProperties = {};
    for (const pattern of patterns) {
      assignProp(json2.patternProperties, pattern.source, valueSchema);
    }
  } else {
    if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
      json2.propertyNames = process(def.keyType, ctx, {
        ...params,
        path: [...params.path, "propertyNames"]
      });
    }
    json2.additionalProperties = process(def.valueType, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
  const keyValues = keyType._zod.values;
  if (keyValues && !def.partial) {
    const validKeyValues = [...keyValues].filter(
      (v2) => typeof v2 === "string" || typeof v2 === "number"
    );
    if (validKeyValues.length > 0) {
      json2.required = validKeyValues;
    }
  }
};
var nullableProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const inner = process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json2.nullable = true;
  } else {
    json2.anyOf = [inner, { type: "null" }];
  }
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var UNREPRESENTABLE_DEFAULT = /* @__PURE__ */ Symbol();
function serializeDefaultValue(value, schema, ctx, json2, params) {
  let unrepresentable = false;
  const serialized = JSON.stringify(value, (_2, val) => {
    if (typeof val !== "bigint") return val;
    unrepresentable = true;
    return null;
  });
  if (!unrepresentable) return JSON.parse(serialized);
  handleUnrepresentable(schema, ctx, json2, params, "BigInt defaults cannot be represented in JSON Schema");
  return UNREPRESENTABLE_DEFAULT;
}
var defaultProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  const value = serializeDefaultValue(def.defaultValue, schema, ctx, json2, params);
  if (value !== UNREPRESENTABLE_DEFAULT) json2.default = value;
};
var prefaultProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io !== "input") return;
  const value = serializeDefaultValue(def.defaultValue, schema, ctx, json2, params);
  if (value !== UNREPRESENTABLE_DEFAULT) json2._prefault = value;
};
var catchProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(void 0);
  } catch {
    handleUnrepresentable(schema, ctx, json2, params, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  json2.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const inIsTransform = def.in._zod.traits.has("$ZodTransform");
  const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
  process(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json2.readOnly = true;
};
var promiseProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var lazyProcessor = (schema, ctx, _json, params) => {
  const innerType = schema._zod.innerType;
  process(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var allProcessors = {
  string: stringProcessor,
  number: numberProcessor,
  boolean: booleanProcessor,
  bigint: bigintProcessor,
  symbol: symbolProcessor,
  null: nullProcessor,
  undefined: undefinedProcessor,
  void: voidProcessor,
  never: neverProcessor,
  any: anyProcessor,
  unknown: unknownProcessor,
  date: dateProcessor,
  enum: enumProcessor,
  literal: literalProcessor,
  nan: nanProcessor,
  template_literal: templateLiteralProcessor,
  file: fileProcessor,
  success: successProcessor,
  custom: customProcessor,
  function: functionProcessor,
  transform: transformProcessor,
  map: mapProcessor,
  set: setProcessor,
  array: arrayProcessor,
  object: objectProcessor,
  union: unionProcessor,
  intersection: intersectionProcessor,
  tuple: tupleProcessor,
  record: recordProcessor,
  nullable: nullableProcessor,
  nonoptional: nonoptionalProcessor,
  default: defaultProcessor,
  prefault: prefaultProcessor,
  catch: catchProcessor,
  pipe: pipeProcessor,
  readonly: readonlyProcessor,
  promise: promiseProcessor,
  optional: optionalProcessor,
  lazy: lazyProcessor
};
function toJSONSchema(input, params) {
  if ("_idmap" in input) {
    const registry2 = input;
    const ctx2 = initializeContext({ ...params, processors: allProcessors });
    const defs = {};
    for (const entry of registry2._idmap.entries()) {
      const [_2, schema] = entry;
      process(schema, ctx2);
    }
    const schemas = {};
    const external = {
      registry: registry2,
      uri: params?.uri,
      defs
    };
    ctx2.external = external;
    for (const entry of registry2._idmap.entries()) {
      const [key, schema] = entry;
      extractDefs(ctx2, schema);
      assignProp(schemas, key, finalize(ctx2, schema));
    }
    if (Object.keys(defs).length > 0) {
      const defsSegment = ctx2.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return { schemas };
  }
  const ctx = initializeContext({ ...params, processors: allProcessors });
  process(input, ctx);
  extractDefs(ctx, input);
  return finalize(ctx, input);
}
var JSONSchemaGenerator = class {
  constructor(params) {
    let normalizedTarget = params?.target ?? "draft-2020-12";
    if (normalizedTarget === "draft-4") normalizedTarget = "draft-04";
    if (normalizedTarget === "draft-7") normalizedTarget = "draft-07";
    this.ctx = initializeContext({
      processors: allProcessors,
      target: normalizedTarget,
      ...params?.metadata && { metadata: params.metadata },
      ...params?.unrepresentable && { unrepresentable: params.unrepresentable },
      ...params?.override && { override: params.override },
      ...params?.io && { io: params.io }
    });
  }
  process(schema, _params = { path: [], schemaPath: [] }) {
    return process(schema, this.ctx, _params);
  }
  emit(schema, _params) {
    if (_params) {
      if (_params.cycles) this.ctx.cycles = _params.cycles;
      if (_params.reused) this.ctx.reused = _params.reused;
      if (_params.external) this.ctx.external = _params.external;
    }
    this.ctx.sharedDefsExtractedFor = void 0;
    this.ctx.sharedEmitDoneFor = void 0;
    extractDefs(this.ctx, schema);
    const result = finalize(this.ctx, schema);
    const { "~standard": _2, ...plainResult } = result;
    return plainResult;
  }
};

// dist/regexes.js
var regexes_exports = {};
__export(regexes_exports, {
  base64: () => base64,
  base64url: () => base64url,
  bigint: () => bigint,
  boolean: () => boolean,
  browserEmail: () => browserEmail,
  cidrv4: () => cidrv4,
  cidrv6: () => cidrv6,
  creditCard: () => creditCard,
  cuid: () => cuid,
  cuid2: () => cuid2,
  date: () => date,
  datetime: () => datetime,
  domain: () => domain,
  duration: () => duration,
  e164: () => e164,
  email: () => email,
  emoji: () => emoji,
  extendedDuration: () => extendedDuration,
  guid: () => guid,
  hex: () => hex,
  hostname: () => hostname,
  html5Email: () => html5Email,
  httpProtocol: () => httpProtocol,
  idnEmail: () => idnEmail,
  integer: () => integer,
  ipv4: () => ipv4,
  ipv6: () => ipv6,
  ksuid: () => ksuid,
  lowercase: () => lowercase,
  mac: () => mac,
  md5_base64: () => md5_base64,
  md5_base64url: () => md5_base64url,
  md5_hex: () => md5_hex,
  nanoid: () => nanoid,
  null: () => _null,
  number: () => number,
  rfc5322Email: () => rfc5322Email,
  sha1_base64: () => sha1_base64,
  sha1_base64url: () => sha1_base64url,
  sha1_hex: () => sha1_hex,
  sha256_base64: () => sha256_base64,
  sha256_base64url: () => sha256_base64url,
  sha256_hex: () => sha256_hex,
  sha384_base64: () => sha384_base64,
  sha384_base64url: () => sha384_base64url,
  sha384_hex: () => sha384_hex,
  sha512_base64: () => sha512_base64,
  sha512_base64url: () => sha512_base64url,
  sha512_hex: () => sha512_hex,
  string: () => string,
  time: () => time,
  ulid: () => ulid,
  undefined: () => _undefined,
  unicodeEmail: () => unicodeEmail,
  uppercase: () => uppercase,
  uuid: () => uuid,
  uuid4: () => uuid4,
  uuid6: () => uuid6,
  uuid7: () => uuid7,
  xid: () => xid
});
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var cuid = /^[cC][0-9a-z]{6,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid = (version) => {
  if (!version)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(
    `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`
  );
};
var uuid4 = /* @__PURE__ */ uuid(4);
var uuid6 = /* @__PURE__ */ uuid(6);
var uuid7 = /* @__PURE__ */ uuid(7);
var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
var idnEmail = unicodeEmail;
var browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var _emoji = `^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var mac = (delimiter) => {
  const escapedDelim = escapeRegex(delimiter ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
};
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^[A-Za-z0-9_-]*$/;
var hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
var domain = /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
var httpProtocol = /^https?$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var creditCard = /^\d(?:[ -]?\d){11,18}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
function anchor(source) {
  return new RegExp(`^${source}$`);
}
var date = /* @__PURE__ */ anchor(dateSource);
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  const time2 = timeSource({ precision: args.precision });
  const opts = ["Z"];
  if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const timeRegex = `${time2}(?:${opts.join("|")})${args.local ? "?" : ""}`;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var string = (params) => {
  const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
  return new RegExp(`^${regex}$`);
};
var bigint = /^-?\d+n?$/;
var integer = /^-?\d+$/;
var number = /^-?\d+(?:\.\d+)?$/;
var boolean = /^(?:true|false)$/i;
var _null = /^null$/i;
var _undefined = /^undefined$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;
var hex = /^[0-9a-fA-F]*$/;
function fixedBase64(bodyLength, padding) {
  return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
function fixedBase64url(length) {
  return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
var md5_hex = /^[0-9a-fA-F]{32}$/;
var md5_base64 = /* @__PURE__ */ fixedBase64(22, "==");
var md5_base64url = /* @__PURE__ */ fixedBase64url(22);
var sha1_hex = /^[0-9a-fA-F]{40}$/;
var sha1_base64 = /* @__PURE__ */ fixedBase64(27, "=");
var sha1_base64url = /* @__PURE__ */ fixedBase64url(27);
var sha256_hex = /^[0-9a-fA-F]{64}$/;
var sha256_base64 = /* @__PURE__ */ fixedBase64(43, "=");
var sha256_base64url = /* @__PURE__ */ fixedBase64url(43);
var sha384_hex = /^[0-9a-fA-F]{96}$/;
var sha384_base64 = /* @__PURE__ */ fixedBase64(64, "");
var sha384_base64url = /* @__PURE__ */ fixedBase64url(64);
var sha512_hex = /^[0-9a-fA-F]{128}$/;
var sha512_base64 = /* @__PURE__ */ fixedBase64(86, "==");
var sha512_base64url = /* @__PURE__ */ fixedBase64url(86);

// dist/index.js
applyCompat(_e);
installVisit(_e);
installAsyncApi(_e);
_e.toJSONSchema = toJSONSchema;
_e.core.toJSONSchema = toJSONSchema;
_e.core.JSONSchemaGenerator = JSONSchemaGenerator;
_e.regexes = regexes_exports;
_e.core.regexes = regexes_exports;
_e.compile = _e.compile ?? ((schema) => schema);
if (_e.ZodType && _e.ZodType.prototype) {
  _e.ZodType.prototype.toJSONSchema = function toJSONSchemaMethod(params) {
    return toJSONSchema(this, params);
  };
}
var index_default = _e;
var string2 = _e.string;
var number2 = _e.number;
var boolean2 = _e.boolean;
var bigint2 = _e.bigint;
var symbol = _e.symbol;
var date2 = _e.date;
var nan = _e.nan;
var $undefined = _e.undefined;
var $null = _e.null;
var any = _e.any;
var unknown = _e.unknown;
var never = _e.never;
var $void = _e.void;
var literal = _e.literal;
var $enum = _e.enum;
var nativeEnum = _e.nativeEnum;
var object = _e.object;
var strictObject = _e.strictObject;
var looseObject = _e.looseObject;
var $interface = _e.interface;
var array = _e.array;
var tuple = _e.tuple;
var record = _e.record;
var union = _e.union;
var xor = _e.xor;
var discriminatedUnion = _e.discriminatedUnion;
var intersection = _e.intersection;
var map = _e.map;
var $set = _e.set;
var lazy = _e.lazy;
var promise = _e.promise;
var custom = _e.custom;
var file = _e.file;
var $instanceof = _e.instanceof;
var transform = _e.transform;
var $function = _e.function;
var int = _e.int;
var int32 = _e.int32;
var uint32 = _e.uint32;
var float32 = _e.float32;
var float64 = _e.float64;
var pipe = _e.pipe;
var optional = _e.optional;
var nullable = _e.nullable;
var email2 = _e.email;
var uuid2 = _e.uuid;
var guid2 = _e.guid;
var url = _e.url;
var httpUrl = _e.httpUrl;
var codec = _e.codec;
var invertCodec = _e.invertCodec;
var preprocess = _e.preprocess;
var stringbool = _e.stringbool;
var success = _e.success;
var json = _e.json;
var hex2 = _e.hex;
var hostname2 = _e.hostname;
var hash = _e.hash;
var partialRecord = _e.partialRecord;
var looseRecord = _e.looseRecord;
var creditCard2 = _e.creditCard;
var mac2 = _e.mac;
var keyof = _e.keyof;
var $catch = _e.catch;
var _default = _e._default;
var prefault = _e.prefault;
var nonoptional = _e.nonoptional;
var readonly = _e.readonly;
var jwt = _e.jwt;
var nanoid2 = _e.nanoid;
var ulid2 = _e.ulid;
var ipv42 = _e.ipv4;
var ipv62 = _e.ipv6;
var coerce = _e.coerce;
var iso = _e.iso;
var locales = _e.locales;
var core = _e.core;
var parse = _e.parse;
var safeParse = _e.safeParse;
var parseAsync = _e.parseAsync;
var safeParseAsync = _e.safeParseAsync;
var encode = _e.encode;
var decode = _e.decode;
var encodeAsync = _e.encodeAsync;
var decodeAsync = _e.decodeAsync;
var treeifyError = _e.treeifyError;
var prettifyError = _e.prettifyError;
var formatError = _e.formatError;
var flattenError = _e.flattenError;
var registry = _e.registry;
var globalRegistry2 = _e.globalRegistry;
var config = _e.config;
var ZodType = _e.ZodType;
var ZodString = _e.ZodString;
var ZodNumber = _e.ZodNumber;
var ZodBoolean = _e.ZodBoolean;
var ZodBigInt = _e.ZodBigInt;
var ZodSymbol = _e.ZodSymbol;
var ZodDate = _e.ZodDate;
var ZodNaN = _e.ZodNaN;
var ZodUndefined = _e.ZodUndefined;
var ZodNull = _e.ZodNull;
var ZodAny = _e.ZodAny;
var ZodUnknown = _e.ZodUnknown;
var ZodNever = _e.ZodNever;
var ZodVoid = _e.ZodVoid;
var ZodLiteral = _e.ZodLiteral;
var ZodEnum = _e.ZodEnum;
var ZodObject = _e.ZodObject;
var ZodArray = _e.ZodArray;
var ZodTuple = _e.ZodTuple;
var ZodRecord = _e.ZodRecord;
var ZodMap = _e.ZodMap;
var ZodSet = _e.ZodSet;
var ZodUnion = _e.ZodUnion;
var ZodDiscriminatedUnion = _e.ZodDiscriminatedUnion;
var ZodXor = _e.ZodXor;
var ZodIntersection = _e.ZodIntersection;
var ZodOptional = _e.ZodOptional;
var ZodNullable = _e.ZodNullable;
var ZodDefault = _e.ZodDefault;
var ZodPrefault = _e.ZodPrefault;
var ZodCatch = _e.ZodCatch;
var ZodNonOptional = _e.ZodNonOptional;
var ZodLazy = _e.ZodLazy;
var ZodPromise = _e.ZodPromise;
var ZodTransform = _e.ZodTransform;
var ZodPipe = _e.ZodPipe;
var ZodCodec = _e.ZodCodec;
var ZodPreprocess = _e.ZodPreprocess;
var ZodReadonly = _e.ZodReadonly;
var ZodCustom = _e.ZodCustom;
var ZodFile = _e.ZodFile;
var ZodFunction = _e.ZodFunction;
var ZodTemplateLiteral = _e.ZodTemplateLiteral;
var ZodSuccess = _e.ZodSuccess;
var ZodError = _e.ZodError;
var ZodRealError = _e.ZodRealError;
var getDiscriminatedOption = _e.getDiscriminatedOption;
var ZodExactOptional = _e.ZodExactOptional;
var exactOptional = _e.exactOptional;
var slugify = _e.slugify;
var properties = _e.properties;
var property = _e.property;
var templateLiteral = _e.templateLiteral;
var stringFormat = _e.stringFormat;
var check = _e.check;
var $with = _e.with;
var refine = _e.refine;
var superRefine = _e.superRefine;
var trim = _e.trim;
var maxLength = _e.maxLength;
var minLength = _e.minLength;
var ZodISODateTime = _e.ZodISODateTime;
var ZodISODate = _e.ZodISODate;
var ZodISOTime = _e.ZodISOTime;
var ZodISODuration = _e.ZodISODuration;
var $ZodError = _e.$ZodError;
var NEVER = _e.NEVER;
var fromJSONSchema = _e.fromJSONSchema;
var visit2 = _e.visit;
var ZodIssueCode = _e.ZodIssueCode;
var TimePrecision = _e.TimePrecision;
var util = _e.util;
var int64 = _e.int64;
var uint64 = _e.uint64;
var describe = _e.describe;
var meta = _e.meta;
var e1642 = _e.e164;
var cidrv42 = _e.cidrv4;
var cidrv62 = _e.cidrv6;
var base642 = _e.base64;
var base64url2 = _e.base64url;
var xid2 = _e.xid;
var ksuid2 = _e.ksuid;
var cuid3 = _e.cuid;
var cuid22 = _e.cuid2;
var emoji2 = _e.emoji;
var uuidv4 = _e.uuidv4;
var uuidv6 = _e.uuidv6;
var uuidv7 = _e.uuidv7;
var deepPartial2 = _e.deepPartial;
var safeEncode = _e.safeEncode;
var safeDecode = _e.safeDecode;
var safeEncodeAsync = _e.safeEncodeAsync;
var safeDecodeAsync = _e.safeDecodeAsync;
var setErrorMap = _e.setErrorMap;
var compile = _e.compile;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  $ZodError,
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
  interface,
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
  with: null,
  xid,
  xor,
  z
});
