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
  z: () => cf
});
module.exports = __toCommonJS(index_exports);

// dist/zod.core.js
var ef = "Encountered Promise during synchronous parse. Use .parseAsync() instead.";
var ff = 'Invalid discriminated union option at index "';
var gf = "return async function(data,params){return await impl(data,params)}";
var hf = ".exactPartial() cannot be used on object schemas containing refinements";
var jf = ".partial() cannot be used on object schemas containing refinements";
var kf = "[.*+?^${}()|[\\]\\\\]";
var lf = "";
var mf = "Invalid input";
var nf = "){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}";
var of = '"';
var pf = "Invalid input: expected ";
var qf = " items";
var rf = " not found in enum";
var sf = "){5}[0-9a-f]{2}$";
var tf = "^(?:[0-9A-F]{2}";
var X = (j2) => !(j2 == null) && "object" == typeof j2;
var la = () => /* @__PURE__ */ new Set();
var pa = (S2) => ga.keys(S2);
var ia = (S2, a) => ga.assign(S2, a);
var qb = (S2, a) => {
  if (a == null || !X(a)) return;
  var w2 = Reflect.ownKeys(a);
  var g2 = w2.length;
  var h2 = 0, b, c;
  while (h2 < g2) {
    b = ga.getOwnPropertyDescriptor(a, w2[h2]);
    !(b === void 0) && !(b == null) && ga.defineProperty(S2, w2[h2], b);
    h2 = h2 + 1;
  }
};
var ba = (S2, n2, a) => {
  ga.defineProperty(S2, n2, a);
};
var Ca = (S2, n2, j2) => {
  ba(S2, n2, { value: j2, writable: true, enumerable: true, configurable: true });
};
var rb = (a, T2) => {
  var b = Error.captureStackTrace;
  "function" == typeof b && b(a, T2);
};
var La = (j2) => true === Number.isFinite(j2);
var na = (a) => new Error(a);
var $ = (a, b) => new RegExp(a, b);
var aa = (j2) => X(j2) && "function" == typeof j2.then;
var Lb = (j2) => ({ enumerable: false, writable: true, configurable: true, value: j2 });
var Fa = (j2) => ({ enumerable: false, writable: false, configurable: true, value: j2 });
var za = (d, a) => new globalThis.Function(d, a);
var ue = (a, b, y2, c, d) => {
  let f2 = new globalThis.Function("parseAsync,applyFn,input,output,implFn", "return async function(){var a=Array.from(arguments);var p=input?await parseAsync(input,a):a;var r=await applyFn(implFn,this,p);return output?await parseAsync(output,r):r}");
  let e = [];
  e.push(a);
  e.push(b);
  e.push(y2);
  e.push(c);
  e.push(d);
  return f2.apply(void 0, e);
};
var qa = (T2, j2) => {
  if (j2 == null) return false;
  return true === Qd.call(T2.prototype, j2);
};
var ve;
var ea;
var Me;
(function() {
  let a = (D2, l2, k2) => {
    if ("number_format" == D2) return Vd(l2, k2);
    if ("min_length" == D2) return Xd(l2, k2);
    if ("max_length" == D2) return Yd(l2, k2);
    if ("greater_than" == D2) return Zd(l2, k2);
    if ("less_than" == D2) return _d(l2, k2);
    if ("string_format" == D2) {
      if (l2.pattern === void 0 || !("string" == typeof l2.format)) return;
      if ("email" != l2.format + "") return;
      return Wd(l2, k2);
    }
  };
  let b = (k2) => {
    if (k2 === void 0) return;
    if (k2._zod === void 0) return;
    var v2 = k2._zod;
    if (!("function" == typeof v2.check)) {
      var l2 = v2.def;
      "string" == typeof l2.check && (k2 = a(l2.check + "", l2, k2), k2 === void 0 || (v2.check = k2));
    }
  };
  let c = (g2, h2, i2, j2) => {
    var k2 = h2.length;
    if (0 == k2) return g2;
    if (!we(h2)) return i2;
    return function(e2, f3) {
      var a2 = this;
      if (!(f3 === void 0) && !(f3 == null)) {
        var V2;
        if ("string" == typeof f3.direction && "backward" == f3.direction + "") return i2.call(a2, e2, f3);
        V2 = f3.skipChecks;
        if (true === V2) return g2.call(a2, e2, f3);
      }
      V2 = {};
      V2.go = function(Df2, Ef2) {
        Ef2 = +Ef2 | 0;
        while (Ef2 < k2) {
          var Ff2 = h2[Ef2];
          var Cf2;
          if (!(Ff2 === void 0) && !(Ff2 == null)) {
            var Gf2 = Ff2._zod;
            if (Gf2 == null) return i2.call(a2, Df2, f3);
            var Hf2 = Gf2.def;
            var Lf2 = !(Hf2 === void 0) && !(Hf2 == null) && "function" == typeof Hf2.when, Jf2, Mf2, Kf2, If2, fh, hh, gh, ih, Nf2;
            Cf2 = Df2.aborted;
            Cf2 = true === Cf2;
            if (!Cf2) {
              Jf2 = Df2.issues;
              Nf2 = Jf2.length;
              If2 = 0;
              while (If2 < Nf2) {
                Mf2 = Jf2[If2];
                Kf2 = Mf2.continue;
                Lf2 ? false === Kf2 && (Cf2 = true) : true === Kf2 || (Cf2 = true);
                If2 = If2 + 1;
              }
            }
            Lf2 ? (Cf2 = Df2.issues.length > 0 && Cf2, !Cf2 && !Hf2.when(Df2) && (Cf2 = true)) : Cf2 = Df2.issues.length > 0 && Cf2;
            if (!Cf2) {
              Cf2 = Gf2.check;
              if (!("function" == typeof Cf2)) return i2.call(a2, Df2, f3);
              Cf2 = Cf2.call(Ff2, Df2);
              if (aa(Cf2)) {
                if (!(f3 === void 0) && !(f3 == null) && false === f3.async) throw new Error(ef);
                fh = Ef2 + 1 | 0;
                return Promise.resolve(Cf2).then(/* @__PURE__ */ ((a3, b2, c2) => function(i3) {
                  return a3.go(b2, +(0 + c2));
                })(V2, Df2, fh));
              }
            }
          }
          Ef2 = Ef2 + 1 | 0;
        }
        hh = Df2.issues;
        ih = hh.length;
        fh = 0;
        while (fh < ih) {
          gh = hh[fh];
          gh.schema === void 0 && (gh = hh[fh], gh.schema = j2);
          fh = fh + 1;
        }
        return Df2;
      };
      var uf2 = g2.call(a2, e2, f3);
      if (aa(uf2)) return uf2.then(function(o2) {
        return V2.go(o2, 0);
      });
      return V2.go(uf2, 0);
    };
  };
  let d = (D2) => "min_length" == D2 ? "$ZodCheckMinLength" : "max_length" == D2 ? "$ZodCheckMaxLength" : "length_equals" == D2 ? "$ZodCheckLengthEquals" : "greater_than" == D2 ? "$ZodCheckGreaterThan" : "less_than" == D2 ? "$ZodCheckLessThan" : "multiple_of" == D2 ? "$ZodCheckMultipleOf" : "min_size" == D2 ? "$ZodCheckMinSize" : "max_size" == D2 ? "$ZodCheckMaxSize" : "size_equals" == D2 ? "$ZodCheckSizeEquals" : "includes" == D2 ? "$ZodCheckIncludes" : "starts_with" == D2 ? "$ZodCheckStartsWith" : "ends_with" == D2 ? "$ZodCheckEndsWith" : "string_format" == D2 ? "$ZodCheckStringFormat" : "overwrite" == D2 ? "$ZodCheckOverwrite" : "mime_type" == D2 ? "$ZodCheckMimeType" : "number_format" == D2 ? "$ZodCheckNumberFormat" : "lowercase" == D2 ? "$ZodCheckStringFormat" : "uppercase" == D2 ? "$ZodCheckStringFormat" : "$ZodCheck";
  let e = (g2) => {
    var h2 = g2.value;
    if (h2 == null) return false;
    return !(h2.length === void 0);
  };
  let f2 = (g2) => {
    var h2 = g2.value;
    if (h2 == null) return false;
    return !(h2.size === void 0);
  };
  ve = function(k2) {
    var g2 = [];
    var i2 = k2._zod;
    var h2 = i2.def;
    "string" == typeof h2.check && g2.push(k2);
    k2 = h2.checks;
    if (!(k2 === void 0) && Array.isArray(k2)) {
      var j2 = k2.length;
      h2 = 0;
      while (h2 < j2) {
        b(k2[h2]);
        i2 = k2[h2];
        g2.push(i2);
        h2 = h2 + 1;
      }
    }
    return g2;
  };
  ea = function(D2, Q2) {
    Q2.check = D2;
    Q2.when === void 0 && ("min_length" == D2 || "max_length" == D2 || "length_equals" == D2 ? Q2.when = function(a2) {
      return e(a2) ? a2 : void 0;
    } : ("min_size" == D2 || "max_size" == D2 || "size_equals" == D2) && (Q2.when = function(e2) {
      return f2(e2) ? e2 : void 0;
    }));
    var g2 = d(D2);
    D2 = la();
    D2.add("$ZodCheck");
    D2.add(g2);
    var v2 = { def: Q2, onattach: [], traits: D2 };
    D2 = { def: Q2 };
    Q2 = function() {
      return D2;
    };
    ba(Q2, "name", Fa(g2));
    D2.constructor = Q2;
    ba(D2, "_zod", Lb(v2));
    b(D2);
    return D2;
  };
  Me = function(k2, i2, v2, g2, h2) {
    b(k2);
    var j2 = i2.kind;
    if (0 == j2) {
      i2 = Sd(k2);
    } else {
      if (1 == j2) {
        i2 = Td(k2);
      } else {
        if (2 == j2) {
          i2 = Ud(k2);
        } else {
          if (15 == j2) {
            var l2 = {};
            i2 = (0, function(e2, f3) {
              var y2 = e2.value;
              var c2, Nn, In, d2, Ln, Hn, v3, Mn, Jn, i3, n2, Gn, Kn, j3, p2, m2, o2, q2;
              if (!X(y2) || Array.isArray(y2)) return e2.issues.push({ expected: "object", code: "invalid_type", input: y2, inst: k2 }), e2;
              Nn = this.def;
              c2 = this["~lil"];
              c2 === void 0 && (c2 = Dc(k2), this["~lil"] = c2);
              c2 = true === c2;
              !(Nn.catchall === void 0) && !(Nn.catchall == null) && (c2 = true);
              !(f3 === void 0) && !(f3 == null) && (In = f3.async, true === In && (c2 = true), In = f3.jitless, true === In && (c2 = true), "string" == typeof f3.direction && "backward" == f3.direction + "" && (c2 = true));
              d2 = globalThis.__zod_globalConfig;
              !(d2 === void 0) && !(d2 == null) && true === d2.jitless && (c2 = true);
              if (c2) {
                In = this.run;
                if (In == l2.fn) return h2.call(this, e2, f3);
                return g2.call(this, e2, f3);
              }
              In = Nn.shape;
              In == null && (In = {});
              Hn = this["~skeys"];
              Hn === void 0 && (Hn = pa(In), this["~skeys"] = Hn);
              Ln = {};
              n2 = Hn.length;
              if (2 == n2) {
                Gn = Hn[0] + "";
                if ("__proto__" != Gn) {
                  c2 = In[Gn];
                  if (!(c2 === void 0) && !(c2 == null)) {
                    v3 = c2._zod;
                    if (!(v3 === void 0) && !(v3 == null) && "function" == typeof v3.run) {
                      Nn = true === Gn in y2;
                      c2 = void 0;
                      Nn && (c2 = y2[Gn]);
                      c2 = v3.run({ value: c2, issues: [] }, f3);
                      if (aa(c2)) throw new Error(ef);
                      "string" == typeof v3.optin ? (d2 = v3.optin + "", d2 = "optional" == d2 ? 1 : "defaulted" == d2 ? 2 : 0) : d2 = 0;
                      i3 = "string" == typeof v3.optout && "optional" == v3.optout + "" ? 1 : 0;
                      Jn = c2.issues;
                      var nh = Jn.length;
                      var oh = nh;
                      Mn = oh;
                      Nn && 0 == Mn ? (c2.value === void 0 ? Ln[Gn] = void 0 : Ln[Gn] = c2.value, v3 = true) : v3 = false;
                      if (!v3) {
                        v3 = !Nn && 1 == i3 && 1 == d2;
                        if (!v3 && Mn > 0) {
                          if (0 != d2 && 1 == i3 && !Nn) {
                            v3 = true;
                          } else {
                            j3 = 0;
                            while (j3 < Mn) {
                              Jn = c2.issues[j3];
                              m2 = [];
                              m2.push(Gn);
                              i3 = Jn.path;
                              if (Array.isArray(i3)) {
                                o2 = i3.length;
                                Kn = 0;
                                while (Kn < o2) {
                                  n2 = i3[Kn];
                                  m2.push(n2);
                                  Kn = Kn + 1;
                                }
                              }
                              Jn.path = m2;
                              i3 = e2.issues;
                              i3.push(Jn);
                              j3 = j3 + 1;
                            }
                          }
                        }
                        !v3 && !Nn && 0 == d2 && (0 == Mn && (d2 = [], d2.push(Gn), v3 = { expected: "nonoptional", code: "invalid_type", input: void 0, path: d2 }, e2.issues.push(v3)), v3 = true);
                        v3 || (c2.value === void 0 ? Nn && (Ln[Gn] = void 0) : Ln[Gn] = c2.value);
                      }
                    }
                  }
                }
                Gn = Hn[1] + "";
                if ("__proto__" != Gn) {
                  v3 = In[Gn];
                  if (!(v3 === void 0) && !(v3 == null)) {
                    Hn = v3._zod;
                    if (!(Hn === void 0) && !(Hn == null) && "function" == typeof Hn.run) {
                      v3 = true === Gn in y2;
                      In = void 0;
                      v3 && (In = y2[Gn]);
                      In = Hn.run({ value: In, issues: [] }, f3);
                      if (aa(In)) throw new Error(ef);
                      "string" == typeof Hn.optin ? (f3 = Hn.optin + "", f3 = "optional" == f3 ? 1 : "defaulted" == f3 ? 2 : 0) : f3 = 0;
                      Nn = "string" == typeof Hn.optout && "optional" == Hn.optout + "" ? 1 : 0;
                      c2 = In.issues;
                      var Lh = c2.length;
                      var Mh = Lh;
                      y2 = Mh;
                      v3 && 0 == y2 ? (In.value === void 0 ? Ln[Gn] = void 0 : Ln[Gn] = In.value, Hn = true) : Hn = false;
                      if (!Hn) {
                        Hn = !v3 && 1 == Nn && 1 == f3;
                        if (!Hn && y2 > 0) {
                          if (0 != f3 && 1 == Nn && !v3) {
                            Hn = true;
                          } else {
                            d2 = 0;
                            while (d2 < y2) {
                              c2 = In.issues[d2];
                              Jn = [];
                              Jn.push(Gn);
                              Nn = c2.path;
                              if (Array.isArray(Nn)) {
                                j3 = Nn.length;
                                Mn = 0;
                                while (Mn < j3) {
                                  i3 = Nn[Mn];
                                  Jn.push(i3);
                                  Mn = Mn + 1;
                                }
                              }
                              c2.path = Jn;
                              Nn = e2.issues;
                              Nn.push(c2);
                              d2 = d2 + 1;
                            }
                          }
                        }
                        !Hn && !v3 && 0 == f3 && (0 == y2 && (f3 = [], f3.push(Gn), Hn = { expected: "nonoptional", code: "invalid_type", input: void 0, path: f3 }, e2.issues.push(Hn)), Hn = true);
                        Hn || (In.value === void 0 ? v3 && (Ln[Gn] = void 0) : Ln[Gn] = In.value);
                      }
                    }
                  }
                }
              } else {
                if (4 == n2) {
                  v3 = Hn[0] + "";
                  c2 = In[v3];
                  if (!(c2 === void 0) && !(c2 == null)) {
                    Gn = c2._zod;
                    if (!(Gn === void 0) && !(Gn == null) && "function" == typeof Gn.run) {
                      Nn = true === v3 in y2;
                      c2 = void 0;
                      Nn && (c2 = y2[v3]);
                      c2 = Gn.run({ value: c2, issues: [] }, f3);
                      if (aa(c2)) throw new Error(ef);
                      "string" == typeof Gn.optin ? (d2 = Gn.optin + "", d2 = "optional" == d2 ? 1 : "defaulted" == d2 ? 2 : 0) : d2 = 0;
                      i3 = "string" == typeof Gn.optout && "optional" == Gn.optout + "" ? 1 : 0;
                      Jn = c2.issues;
                      var ii = Jn.length;
                      var ji = ii;
                      Mn = ji;
                      Nn && 0 == Mn ? (c2.value === void 0 ? Ln[v3] = void 0 : Ln[v3] = c2.value, Gn = true) : Gn = false;
                      if (!Gn) {
                        Gn = !Nn && 1 == i3 && 1 == d2;
                        if (!Gn && Mn > 0) {
                          if (0 != d2 && 1 == i3 && !Nn) {
                            Gn = true;
                          } else {
                            j3 = 0;
                            while (j3 < Mn) {
                              Jn = c2.issues[j3];
                              m2 = [];
                              m2.push(v3);
                              i3 = Jn.path;
                              if (Array.isArray(i3)) {
                                o2 = i3.length;
                                Kn = 0;
                                while (Kn < o2) {
                                  n2 = i3[Kn];
                                  m2.push(n2);
                                  Kn = Kn + 1;
                                }
                              }
                              Jn.path = m2;
                              i3 = e2.issues;
                              i3.push(Jn);
                              j3 = j3 + 1;
                            }
                          }
                        }
                        !Gn && !Nn && 0 == d2 && (0 == Mn && (d2 = [], d2.push(v3), Gn = { expected: "nonoptional", code: "invalid_type", input: void 0, path: d2 }, e2.issues.push(Gn)), Gn = true);
                        Gn || (c2.value === void 0 ? Nn && (Ln[v3] = void 0) : Ln[v3] = c2.value);
                      }
                    }
                  }
                  v3 = Hn[1] + "";
                  c2 = In[v3];
                  if (!(c2 === void 0) && !(c2 == null)) {
                    Gn = c2._zod;
                    if (!(Gn === void 0) && !(Gn == null) && "function" == typeof Gn.run) {
                      Nn = true === v3 in y2;
                      c2 = void 0;
                      Nn && (c2 = y2[v3]);
                      c2 = Gn.run({ value: c2, issues: [] }, f3);
                      if (aa(c2)) throw new Error(ef);
                      "string" == typeof Gn.optin ? (d2 = Gn.optin + "", d2 = "optional" == d2 ? 1 : "defaulted" == d2 ? 2 : 0) : d2 = 0;
                      i3 = "string" == typeof Gn.optout && "optional" == Gn.optout + "" ? 1 : 0;
                      Jn = c2.issues;
                      var Gi = Jn.length;
                      var Hi = Gi;
                      Mn = Hi;
                      Nn && 0 == Mn ? (c2.value === void 0 ? Ln[v3] = void 0 : Ln[v3] = c2.value, Gn = true) : Gn = false;
                      if (!Gn) {
                        Gn = !Nn && 1 == i3 && 1 == d2;
                        if (!Gn && Mn > 0) {
                          if (0 != d2 && 1 == i3 && !Nn) {
                            Gn = true;
                          } else {
                            j3 = 0;
                            while (j3 < Mn) {
                              Jn = c2.issues[j3];
                              m2 = [];
                              m2.push(v3);
                              i3 = Jn.path;
                              if (Array.isArray(i3)) {
                                o2 = i3.length;
                                Kn = 0;
                                while (Kn < o2) {
                                  n2 = i3[Kn];
                                  m2.push(n2);
                                  Kn = Kn + 1;
                                }
                              }
                              Jn.path = m2;
                              i3 = e2.issues;
                              i3.push(Jn);
                              j3 = j3 + 1;
                            }
                          }
                        }
                        !Gn && !Nn && 0 == d2 && (0 == Mn && (d2 = [], d2.push(v3), Gn = { expected: "nonoptional", code: "invalid_type", input: void 0, path: d2 }, e2.issues.push(Gn)), Gn = true);
                        Gn || (c2.value === void 0 ? Nn && (Ln[v3] = void 0) : Ln[v3] = c2.value);
                      }
                    }
                  }
                  v3 = Hn[2] + "";
                  c2 = In[v3];
                  if (!(c2 === void 0) && !(c2 == null)) {
                    Gn = c2._zod;
                    if (!(Gn === void 0) && !(Gn == null) && "function" == typeof Gn.run) {
                      Nn = true === v3 in y2;
                      c2 = void 0;
                      Nn && (c2 = y2[v3]);
                      c2 = Gn.run({ value: c2, issues: [] }, f3);
                      if (aa(c2)) throw new Error(ef);
                      "string" == typeof Gn.optin ? (d2 = Gn.optin + "", d2 = "optional" == d2 ? 1 : "defaulted" == d2 ? 2 : 0) : d2 = 0;
                      i3 = "string" == typeof Gn.optout && "optional" == Gn.optout + "" ? 1 : 0;
                      Jn = c2.issues;
                      var cj = Jn.length;
                      var dj = cj;
                      Mn = dj;
                      Nn && 0 == Mn ? (c2.value === void 0 ? Ln[v3] = void 0 : Ln[v3] = c2.value, Gn = true) : Gn = false;
                      if (!Gn) {
                        Gn = !Nn && 1 == i3 && 1 == d2;
                        if (!Gn && Mn > 0) {
                          if (0 != d2 && 1 == i3 && !Nn) {
                            Gn = true;
                          } else {
                            j3 = 0;
                            while (j3 < Mn) {
                              Jn = c2.issues[j3];
                              m2 = [];
                              m2.push(v3);
                              i3 = Jn.path;
                              if (Array.isArray(i3)) {
                                o2 = i3.length;
                                Kn = 0;
                                while (Kn < o2) {
                                  n2 = i3[Kn];
                                  m2.push(n2);
                                  Kn = Kn + 1;
                                }
                              }
                              Jn.path = m2;
                              i3 = e2.issues;
                              i3.push(Jn);
                              j3 = j3 + 1;
                            }
                          }
                        }
                        !Gn && !Nn && 0 == d2 && (0 == Mn && (d2 = [], d2.push(v3), Gn = { expected: "nonoptional", code: "invalid_type", input: void 0, path: d2 }, e2.issues.push(Gn)), Gn = true);
                        Gn || (c2.value === void 0 ? Nn && (Ln[v3] = void 0) : Ln[v3] = c2.value);
                      }
                    }
                  }
                  Gn = Hn[3] + "";
                  v3 = In[Gn];
                  if (!(v3 === void 0) && !(v3 == null)) {
                    Hn = v3._zod;
                    if (!(Hn === void 0) && !(Hn == null) && "function" == typeof Hn.run) {
                      v3 = true === Gn in y2;
                      In = void 0;
                      v3 && (In = y2[Gn]);
                      In = Hn.run({ value: In, issues: [] }, f3);
                      if (aa(In)) throw new Error(ef);
                      "string" == typeof Hn.optin ? (f3 = Hn.optin + "", f3 = "optional" == f3 ? 1 : "defaulted" == f3 ? 2 : 0) : f3 = 0;
                      Nn = "string" == typeof Hn.optout && "optional" == Hn.optout + "" ? 1 : 0;
                      c2 = In.issues;
                      var zj = c2.length;
                      var Aj = zj;
                      y2 = Aj;
                      v3 && 0 == y2 ? (In.value === void 0 ? Ln[Gn] = void 0 : Ln[Gn] = In.value, Hn = true) : Hn = false;
                      if (!Hn) {
                        Hn = !v3 && 1 == Nn && 1 == f3;
                        if (!Hn && y2 > 0) {
                          if (0 != f3 && 1 == Nn && !v3) {
                            Hn = true;
                          } else {
                            d2 = 0;
                            while (d2 < y2) {
                              c2 = In.issues[d2];
                              Jn = [];
                              Jn.push(Gn);
                              Nn = c2.path;
                              if (Array.isArray(Nn)) {
                                j3 = Nn.length;
                                Mn = 0;
                                while (Mn < j3) {
                                  i3 = Nn[Mn];
                                  Jn.push(i3);
                                  Mn = Mn + 1;
                                }
                              }
                              c2.path = Jn;
                              Nn = e2.issues;
                              Nn.push(c2);
                              d2 = d2 + 1;
                            }
                          }
                        }
                        !Hn && !v3 && 0 == f3 && (0 == y2 && (f3 = [], f3.push(Gn), Hn = { expected: "nonoptional", code: "invalid_type", input: void 0, path: f3 }, e2.issues.push(Hn)), Hn = true);
                        Hn || (In.value === void 0 ? v3 && (Ln[Gn] = void 0) : Ln[Gn] = In.value);
                      }
                    }
                  }
                } else {
                  d2 = 0;
                  while (d2 < n2) {
                    Gn = Hn[d2] + "";
                    if ("__proto__" == Gn) {
                      d2 = d2 + 1;
                    } else {
                      c2 = In[Gn];
                      if (!(c2 === void 0) && !(c2 == null)) {
                        v3 = c2._zod;
                        if (!(v3 === void 0) && !(v3 == null) && "function" == typeof v3.run) {
                          Nn = true === Gn in y2;
                          c2 = void 0;
                          Nn && (c2 = y2[Gn]);
                          c2 = v3.run({ value: c2, issues: [] }, f3);
                          if (aa(c2)) throw new Error(ef);
                          "string" == typeof v3.optin ? (Mn = v3.optin + "", Mn = "optional" == Mn ? 1 : "defaulted" == Mn ? 2 : 0) : Mn = 0;
                          j3 = "string" == typeof v3.optout && "optional" == v3.optout + "" ? 1 : 0;
                          Kn = c2.issues;
                          var Xj = Kn.length;
                          var Yj = Xj;
                          Jn = Yj;
                          Nn && 0 == Jn ? (c2.value === void 0 ? Ln[Gn] = void 0 : Ln[Gn] = c2.value, v3 = true) : v3 = false;
                          if (!v3) {
                            v3 = !Nn && 1 == j3 && 1 == Mn;
                            if (!v3 && Jn > 0) {
                              if (0 != Mn && 1 == j3 && !Nn) {
                                v3 = true;
                              } else {
                                Kn = 0;
                                while (Kn < Jn) {
                                  i3 = c2.issues[Kn];
                                  o2 = [];
                                  o2.push(Gn);
                                  j3 = i3.path;
                                  if (Array.isArray(j3)) {
                                    q2 = j3.length;
                                    m2 = 0;
                                    while (m2 < q2) {
                                      p2 = j3[m2];
                                      o2.push(p2);
                                      m2 = m2 + 1;
                                    }
                                  }
                                  i3.path = o2;
                                  m2 = e2.issues;
                                  m2.push(i3);
                                  Kn = Kn + 1;
                                }
                              }
                            }
                            !v3 && !Nn && 0 == Mn && (0 == Jn && (Mn = [], Mn.push(Gn), v3 = { expected: "nonoptional", code: "invalid_type", input: void 0, path: Mn }, e2.issues.push(v3)), v3 = true);
                            v3 || (c2.value === void 0 ? Nn && (Ln[Gn] = void 0) : Ln[Gn] = c2.value);
                          }
                        }
                      }
                      d2 = d2 + 1;
                    }
                  }
                }
              }
              e2.value = Ln;
              return e2;
            });
            l2.fn = i2;
          } else {
            if (16 == j2) {
              l2 = {};
              i2 = (0, function(e2, f3) {
                var I2 = e2.value;
                if (!Array.isArray(I2)) return e2.issues.push({ expected: "array", code: "invalid_type", input: I2, inst: k2 }), e2;
                var H2 = this["~lil"];
                H2 === void 0 && (H2 = Dc(k2), this["~lil"] = H2);
                H2 = true === H2;
                if (!(f3 === void 0) && !(f3 == null)) {
                  var fh = f3.async;
                  true === fh && (H2 = true);
                  fh = f3.jitless;
                  true === fh && (H2 = true);
                  "string" == typeof f3.direction && "backward" == f3.direction + "" && (H2 = true);
                }
                if (H2) {
                  fh = this.run;
                  if (fh == l2.fn) return h2.call(this, e2, f3);
                  return g2.call(this, e2, f3);
                }
                var eh = this.def;
                fh = eh.element;
                if (fh == null || fh._zod === void 0 || !("function" == typeof fh._zod.run)) return g2.call(this, e2, f3);
                var N2 = fh._zod;
                var P2 = I2.length;
                var J2 = new Array(P2);
                var O2 = e2.issues;
                var L2 = [];
                eh = 0;
                while (eh < P2) {
                  var gh = N2.run;
                  fh = I2[eh];
                  var hh = N2.run({ value: fh, issues: [] }, f3);
                  if (aa(hh)) {
                    if (!(f3 === void 0) && !(f3 == null) && false === f3.async) throw new Error(ef);
                    L2.push(hh.then(/* @__PURE__ */ ((a2, b2, c2) => function(o2) {
                      var K2 = o2.issues;
                      var P3;
                      if (!(K2 === void 0) && K2.length > 0) {
                        var g3 = K2.length;
                        P3 = 0;
                        while (P3 < g3) {
                          var e3 = [];
                          e3.push(+(0 + c2));
                          var d3 = K2[P3];
                          var O3 = d3.path;
                          if (Array.isArray(O3)) {
                            var h3 = O3.length;
                            d3 = 0;
                            while (d3 < h3) {
                              var f4 = O3[d3];
                              e3.push(f4);
                              d3 = d3 + 1;
                            }
                          }
                          O3 = K2[P3];
                          O3.path = e3;
                          O3 = K2[P3];
                          b2.push(O3);
                          P3 = P3 + 1;
                        }
                      }
                      a2[c2] = o2.value;
                    })(J2, O2, eh)));
                  } else {
                    gh = hh.issues;
                    if (!(gh === void 0) && gh.length > 0) {
                      var R2 = gh.length;
                      fh = 0;
                      while (fh < R2) {
                        var M2 = [];
                        M2.push(+(0 + eh));
                        H2 = gh[fh];
                        var d2 = H2.path;
                        if (Array.isArray(d2)) {
                          var S2 = d2.length;
                          H2 = 0;
                          while (H2 < S2) {
                            var Q2 = d2[H2];
                            M2.push(Q2);
                            H2 = H2 + 1;
                          }
                        }
                        Q2 = gh[fh];
                        Q2.path = M2;
                        M2 = gh[fh];
                        O2.push(M2);
                        fh = fh + 1;
                      }
                    }
                    J2[eh] = hh.value;
                  }
                  eh = eh + 1;
                }
                e2.value = J2;
                return L2.length > 0 ? Promise.all(L2).then(function(a2) {
                  return e2;
                }) : e2;
              });
              l2.fn = i2;
            } else {
              return;
            }
          }
        }
      }
    }
    v2["~pf"] = g2;
    v2["~rf"] = h2;
    15 == j2 || 16 == j2 ? v2.parse = g2 : v2.parse = i2;
    v2.run = c(i2, ve(k2), h2, k2);
  };
})();
var we = (a) => {
  var d = a.length;
  var h2 = 0, I2, c, b;
  while (h2 < d) {
    I2 = a[h2];
    I2._zod === void 0 ? b = true : (c = I2._zod, b = !("function" == typeof c.check));
    if (b) return false;
    h2 = h2 + 1;
  }
  return true;
};
function xe(p2, l2) {
  var a = l2.type + "";
  p2.id = ac;
  ac = ac + 1 | 0;
  p2.kind = ye(a);
  "union" == a && !("string" == typeof l2.discriminator) && false === l2.inclusive && (p2.kind = 38);
  p2.handle = void 0;
  p2.def = l2;
  p2.ctor = void 0;
  p2.typeName = a;
  "int" == a && (p2.typeName = "number");
  p2.trait = "ZodType";
  p2.values = void 0;
  p2.optin = 0;
  p2.optout = 0;
  p2.hasChecks = false;
  Ga.push(p2);
  ze(p2);
}
var ye = (a) => "string" == a ? 0 : "number" == a ? 1 : "int" == a ? 1 : "boolean" == a ? 2 : "bigint" == a ? 3 : "symbol" == a ? 4 : "date" == a ? 5 : "nan" == a ? 6 : "undefined" == a ? 7 : "null" == a ? 8 : "any" == a ? 9 : "unknown" == a ? 10 : "never" == a ? 11 : "void" == a ? 12 : "literal" == a ? 13 : "enum" == a ? 14 : "object" == a ? 15 : "array" == a ? 16 : "tuple" == a ? 17 : "record" == a ? 18 : "map" == a ? 19 : "set" == a ? 20 : "union" == a ? 21 : "intersection" == a ? 22 : "optional" == a ? 23 : "nullable" == a ? 24 : "default" == a ? 25 : "prefault" == a ? 26 : "catch" == a ? 27 : "nonoptional" == a ? 28 : "lazy" == a ? 29 : "promise" == a ? 30 : "transform" == a ? 31 : "pipe" == a ? 32 : "readonly" == a ? 33 : "custom" == a ? 34 : "file" == a ? 35 : "success" == a ? 37 : "function" == a ? 39 : "template_literal" == a ? 40 : 34;
var ze = (p2) => {
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
          A2 = Cd(l2.entries);
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
              if (!(m2.values === void 0)) {
                h2 = la();
                g2 = Array.from(m2.values);
                var U2 = g2.length;
                A2 = 0;
                while (A2 < U2) {
                  var a = g2[A2];
                  h2.add(a);
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
                if (!(m2.values === void 0)) {
                  l2 = la();
                  A2 = Array.from(m2.values);
                  g2 = A2.length;
                  h2 = 0;
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
                "catch" == m2 ? (p2.optin = 1, !l2 || (m2 = l2, p2.values = m2.values, 2 == m2.optin && (p2.optin = 2))) : (p2.optin = 2, !l2 || (p2.values = l2.values));
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
                            var b = U2.length;
                            m2 = b > 0;
                            var c = la();
                            h2 = false;
                            A2 = false;
                            g2 = false;
                            a = 0;
                            while (a < b) {
                              l2 = va(U2[a]);
                              if (l2) {
                                2 == l2.optin && (h2 = true);
                                0 != l2.optin && (A2 = true);
                                1 == l2.optout && (g2 = true);
                                if (l2.values === void 0) {
                                  m2 = false;
                                } else {
                                  var d = Array.from(l2.values);
                                  var e = d.length;
                                  l2 = 0;
                                  while (l2 < e) {
                                    var f2 = d[l2];
                                    c.add(f2);
                                    l2 = l2 + 1;
                                  }
                                }
                              } else {
                                m2 = false;
                              }
                              a = a + 1;
                            }
                            m2 && (p2.values = c);
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
var Mb = (e, q2, a, m2) => {
  var b = m2.issues;
  b.length > 0 && Xa(m2.issues, e.issues, a);
  q2[a] = m2.value;
};
var Tc = (p2) => {
  var a = p2.handle._zod;
  var F2 = a.optin;
  if ("string" == typeof F2) {
    if ("defaulted" == F2 + "") return 2;
    if ("optional" == F2 + "") return 1;
    return 0;
  }
  return p2.optin;
};
var Uc = (p2) => {
  var a = p2.handle._zod;
  var F2 = a.optout;
  if ("string" == typeof F2 && "optional" == F2 + "") return 1;
  return p2.optout;
};
var Vc = (e, q2, n2, a, K2, b, m2) => {
  if (a && 0 == m2.issues.length) {
    m2.value === void 0 ? q2[n2] = void 0 : q2[n2] = m2.value;
    return;
  }
  var c = 1 == b;
  var f2 = 0 != K2;
  b = !a && c && 1 == K2;
  !b && m2.issues.length > 0 && (f2 && c && !a ? b = true : Xa(m2.issues, e.issues, n2));
  !b && !a && 0 == K2 && (K2 = m2.issues, 0 == K2.length && (K2 = Aa("nonoptional", void 0), tb(K2, n2), b = e.issues, b.push(K2)), b = true);
  if (b) return;
  m2.value === void 0 ? a && (q2[n2] = void 0) : q2[n2] = m2.value;
};
var Nb = (B2) => B2.replace($(kf, "g"), "\\$&") + "";
var Ob = (P2) => {
  var a = P2.length;
  var b = P2.startsWith("^") ? 1 : 0;
  !P2.endsWith("$") || (a = a - 1 | 0);
  return P2.slice(b, a) + "";
};
var Ae = (F2) => {
  var C2 = F2.kind;
  var z2 = {};
  var a;
  X(F2.handle) && X(F2.handle._zod) && (a = F2.handle._zod, z2 = a.bag);
  if (0 == C2) {
    if (X(z2) && !(z2.patterns === void 0)) {
      a = Array.from(z2.patterns);
      C2 = a.length;
      if (C2 > 0) return a[C2 - 1];
    }
    if (!(F2.def.pattern === void 0)) return F2.def.pattern;
    F2 = "number" == typeof z2.minimum ? z2.minimum + "" : "0";
    C2 = "number" == typeof z2.maximum ? z2.maximum + "" : lf;
    return $("^[\\s\\S]{" + F2 + "," + C2 + "}$", lf);
  }
  if (1 == C2) {
    if (!(z2.pattern === void 0) && !(z2.pattern == null)) return z2.pattern;
    F2 = "string" == typeof z2.format ? z2.format + "" : lf;
    if (F2.includes("int")) return $("^-?\\d+$", lf);
    return $("^-?\\d+(?:\\.\\d+)?$", lf);
  }
  if (2 == C2) return $("^(?:true|false)$", "i");
  if (3 == C2) return $("^-?\\d+n?$", lf);
  if (7 == C2) return $("^undefined$", lf);
  if (8 == C2) return $("^null$", lf);
  if (13 == C2) {
    var b = Array.from(F2.values);
    z2 = [];
    var g2 = b.length;
    C2 = 0;
    while (C2 < g2) {
      F2 = b[C2];
      "string" == typeof F2 ? z2.push(Nb(F2 + "")) : F2 == null && F2 === void 0 ? z2.push("undefined") : F2 == null ? z2.push("null") : z2.push(Nb(F2 + ""));
      C2 = C2 + 1;
    }
    return $("^(" + z2.join("|") + ")$", lf);
  }
  if (14 == C2) {
    a = Array.from(F2.values);
    b = [];
    g2 = a.length;
    z2 = 0;
    while (z2 < g2) {
      F2 = a[z2];
      ("string" == typeof F2 || "number" == typeof F2 || "symbol" == typeof F2) && b.push(Nb(F2 + ""));
      z2 = z2 + 1;
    }
    return $("^(" + b.join("|") + ")$", lf);
  }
  if (40 == C2) return z2 = F2.handle._zod, z2.pattern;
};
var Be = (D2) => {
  var c = [];
  var g2 = D2.length;
  var h2 = 0, a, b, d;
  while (h2 < g2) {
    a = D2[h2];
    if (a == null || "string" == typeof a || "number" == typeof a || "boolean" == typeof a || "bigint" == typeof a) {
      c.push(Nb(a + ""));
    } else {
      if (X(a) && X(a._zod)) {
        d = a._zod;
        b = d.pattern;
        if (b == null) {
          b = a._zod;
          D2 = b.traits;
          !(D2 === void 0) ? (a = Array.from(D2), D2 = a.length > 0 ? a[0] + "" : lf) : D2 = lf;
          throw new Error("Invalid template literal part, no pattern found: " + D2);
        }
        a = b.source + "";
        if (0 == a.length) throw new Error("Invalid template literal part");
        c.push(Ob(a));
      } else {
        throw new Error("Invalid template literal part: " + a);
      }
    }
    h2 = h2 + 1;
  }
  return $("^" + c.join(lf) + "$", lf);
};
var Ce = (S2, a) => {
  let b = /* @__PURE__ */ Symbol.for("evaluating"), c = { value: void 0 };
  ba(S2, "innerType", { configurable: true, get: function() {
    if (c.value === b) return;
    c.value === void 0 && (c.value = b, c.value = a());
    return c.value;
  }, set: function(F2) {
    ba(S2, "innerType", { value: F2, configurable: true, writable: true });
  } });
};
var ja = (p2, n2, a) => {
  var v2 = p2.handle._zod;
  var b = ga.getPrototypeOf(v2);
  if (true === n2 in b && !(bc === v2)) {
    bc = void 0;
    return;
  }
  bc = v2;
  ba(b, n2, { configurable: true, get: function() {
    ba(this, n2, be);
    var c = Ya;
    Ya = false;
    var r2;
    try {
      r2 = a(this);
      if (Ya) {
        Reflect.deleteProperty(this, n2);
      } else {
        var j2 = void 0;
        ba(this, n2, { configurable: true, writable: true, value: r2 });
      }
      c && (Ya = true);
      return r2;
    } catch (s2) {
      Reflect.deleteProperty(this, n2);
      c && (Ya = true);
      throw s2;
    }
  }, set: function(j2) {
    ba(this, n2, { configurable: true, writable: true, value: j2 });
  } });
};
var Wc = (p2) => 1 == p2.optin ? "optional" : 2 == p2.optin ? "defaulted" : void 0;
var Xc = (p2) => 1 == p2.optout ? "optional" : void 0;
var De = (p2) => {
  var C2 = p2.kind;
  var v2 = p2.handle._zod;
  var a = p2.handle;
  if (29 == C2) {
    C2 = p2.def.getter;
    Ce(v2, function() {
      var d = a._zod;
      var b = d.def;
      b._cachedInner === void 0 && (b._cachedInner = C2());
      return b._cachedInner;
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
      var b = r2.def;
      var m2 = b.innerType;
      if (X(m2) && X(m2._zod) && "defaulted" == m2._zod.optin + "") return "defaulted";
      return "optional";
    });
    v2.optout = "optional";
    ja(p2, "values", function(r2) {
      var a2 = r2.def;
      var m2 = a2.innerType;
      if (!X(m2) || !X(m2._zod) || m2._zod.values === void 0) return;
      a2 = la();
      var b = Array;
      var c = m2._zod;
      b = b.from(c.values);
      var g2 = b.length;
      m2 = 0;
      while (m2 < g2) {
        c = b[m2];
        a2.add(c);
        m2 = m2 + 1;
      }
      m2 = r2.def;
      m2.exact || a2.add(void 0);
      return a2;
    });
    ja(p2, "pattern", function(r2) {
      var b = r2.def;
      var s2 = b.innerType;
      if (!X(s2) || !X(s2._zod)) return;
      r2 = s2._zod;
      b = r2.pattern;
      if (b == null) return;
      return $("^(" + Ob(b.source + "") + ")?$", lf);
    });
    return;
  }
  if (24 == C2) {
    ja(p2, "optin", function(r2) {
      var a2 = r2.def;
      var m2 = a2.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.optin;
    });
    ja(p2, "optout", function(r2) {
      var a2 = r2.def;
      var m2 = a2.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.optout;
    });
    ja(p2, "pattern", function(r2) {
      var b = r2.def;
      var s2 = b.innerType;
      if (!X(s2) || !X(s2._zod)) return;
      r2 = s2._zod;
      b = r2.pattern;
      if (b == null) return;
      return $("^(" + Ob(b.source + "") + "|null)$", lf);
    });
    ja(p2, "values", function(r2) {
      var a2 = r2.def;
      var m2 = a2.innerType;
      if (!X(m2) || !X(m2._zod) || m2._zod.values === void 0) return;
      r2 = la();
      a2 = Array;
      var b = m2._zod;
      a2 = a2.from(b.values);
      var g2 = a2.length;
      m2 = 0;
      while (m2 < g2) {
        b = a2[m2];
        r2.add(b);
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
        var b = U2[h2];
        var c = b._zod;
        var a2 = c.optin;
        if ("defaulted" == a2 + "") return "defaulted";
        a2 === void 0 || (r2 = true);
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
        var a2 = U2[h2];
        var b = a2._zod;
        if ("optional" == b.optout + "") return "optional";
        h2 = h2 + 1;
      }
    });
    ja(p2, "values", function(h2) {
      var a2 = h2.def;
      var U2 = a2.options;
      if (!Array.isArray(U2)) return;
      var b = la();
      var g2 = U2.length;
      h2 = 0;
      while (h2 < g2) {
        var c = U2[h2];
        var d = c._zod;
        a2 = d.values;
        if (a2 === void 0) return;
        c = Array.from(a2);
        d = c.length;
        a2 = 0;
        while (a2 < d) {
          var e = c[a2];
          b.add(e);
          a2 = a2 + 1;
        }
        h2 = h2 + 1;
      }
      return b;
    });
    ja(p2, "pattern", function(h2) {
      var b = h2.def;
      var C3 = b.options;
      if (!Array.isArray(C3)) return;
      var c = [];
      var g2 = C3.length;
      h2 = 0;
      while (h2 < g2) {
        var a2 = C3[h2];
        var d = a2._zod;
        b = d.pattern;
        if (b == null) return;
        c.push(Ob(b.source + ""));
        h2 = h2 + 1;
      }
      return $("^(" + c.join("|") + ")$", lf);
    });
    return;
  }
  if (32 == C2) {
    ja(p2, "values", function(r2) {
      var a2 = r2.def;
      var b = a2.in;
      if (X(b) && X(b._zod)) return r2 = b._zod, r2.values;
    });
    ja(p2, "optin", function(r2) {
      var a2 = r2.def;
      var b = a2.in;
      if (X(b) && X(b._zod)) return r2 = b._zod, r2.optin;
    });
    ja(p2, "optout", function(r2) {
      var a2 = r2.def;
      var b = a2.out;
      if (X(b) && X(b._zod)) return r2 = b._zod, r2.optout;
    });
    return;
  }
  if (27 == C2) {
    ja(p2, "optin", function(r2) {
      var b = r2.def;
      var m2 = b.innerType;
      if (X(m2) && X(m2._zod) && "defaulted" == m2._zod.optin + "") return "defaulted";
      return "optional";
    });
    ja(p2, "optout", function(r2) {
      var a2 = r2.def;
      var m2 = a2.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.optout;
    });
    ja(p2, "values", function(r2) {
      var a2 = r2.def;
      var m2 = a2.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.values;
    });
    return;
  }
  if (40 == C2) return;
  if (33 == C2) {
    ja(p2, "optin", function(r2) {
      var a2 = r2.def;
      var m2 = a2.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.optin;
    });
    ja(p2, "optout", function(r2) {
      var a2 = r2.def;
      var m2 = a2.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.optout;
    });
    ja(p2, "values", function(r2) {
      var a2 = r2.def;
      var m2 = a2.innerType;
      if (X(m2) && X(m2._zod)) return r2 = m2._zod, r2.values;
    });
    return;
  }
  ja(p2, "pattern", function(r2) {
    let b = Ga;
    return Ae(b[+r2.id]);
  });
  0 != p2.optin ? v2.optin = Wc(p2) : ja(p2, "optin", function(r2) {
    let b = Ga;
    return Wc(b[+r2.id]);
  });
  0 != p2.optout ? v2.optout = Xc(p2) : ja(p2, "optout", function(r2) {
    let b = Ga;
    return Xc(b[+r2.id]);
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
var Pb = (B2, a, b) => {
  if (a == null || !X(a)) return false;
  if (X(a._zod)) {
    B2 = va(a);
    if (B2) return Yc(B2, b);
    return false;
  }
  if (!Array.isArray(a)) return false;
  var g2 = a.length;
  var h2 = 0;
  while (h2 < g2) {
    if (Pb(B2, a[h2], b)) return true;
    h2 = h2 + 1;
  }
  return false;
};
var Yc = (p2, a) => {
  var E2 = Ec.get(p2.handle);
  var L2;
  if (!(E2 === void 0) && !(E2 == null)) return true === E2;
  if (a.has(p2.handle)) return true;
  a.add(p2.handle);
  if (29 == p2.kind) {
    E2 = p2.handle._zod;
    E2 = Pb(p2, E2.innerType, a);
  } else {
    var l2 = p2.def;
    L2 = l2.shape;
    if (X(L2) && !(L2 == null)) {
      var w2 = pa(L2);
      var g2 = w2.length;
      var E2 = false, h2 = 0;
      while (h2 < g2) {
        Pb(p2, L2[w2[h2]], a) && (E2 = true);
        h2 = h2 + 1;
      }
    } else {
      E2 = false;
    }
    h2 = pa(l2);
    w2 = h2.length;
    L2 = 0;
    while (L2 < w2) {
      "shape" != h2[L2] + "" && Pb(p2, l2[h2[L2]], a) && (E2 = true);
      L2 = L2 + 1;
    }
  }
  a.delete(p2.handle);
  Ec.set(p2.handle, E2);
  return E2;
};
var Zc = (t2) => {
  var a = [];
  var g2 = t2.length;
  var h2 = 0, K2;
  while (h2 < g2) {
    K2 = ia({}, t2[h2]);
    if (Array.isArray(K2.path)) {
      var m2 = K2.path.slice(0);
      K2.path = m2;
    }
    a.push(K2);
    h2 = h2 + 1;
  }
  return a;
};
var Ee = (h2, e) => {
  var a = Zc(h2);
  var g2 = a.length;
  h2 = 0;
  while (h2 < g2) {
    e.issues.push(a[h2]);
    h2 = h2 + 1;
  }
};
var Fe = (p2, e, f2) => {
  var b = p2.handle._zod;
  var a = b.memoizer;
  if (a == null) return;
  if (a.recursive === void 0) {
    a.recursive = Yc(p2, la());
    if (!a.recursive) return;
  } else {
    if (!a.recursive) return;
  }
  var y2 = e.value;
  if (y2 == null || "object" != typeof y2) return;
  if (f2 == null || !X(f2)) return;
  b = f2["~memo"];
  var c, d;
  b == null && (b = /* @__PURE__ */ new Map(), b = { buckets: b, backEdges: void 0 }, f2["~memo"] = b);
  a.ctx === f2 ? c = a.bucket : (c = b.buckets.get(p2.handle), c == null && (c = /* @__PURE__ */ new Map(), b.buckets.set(p2.handle, c)), a.ctx = f2, a.bucket = c);
  p2 = c.get(y2);
  if (!(p2 === void 0) && !(p2 == null)) return e.value = p2.value, !(p2.issues == null) ? (f2 = p2.issues, f2.length > 0 && Ee(p2.issues, e)) : (e.memo = true, (b.backEdges === void 0 || b.backEdges == null) && (b.backEdges = la()), b.backEdges.add(p2.value)), e;
  a.handoff = c;
  p2 = a.open;
  a.openDepth = p2.length;
};
var cb = (p2, e, a) => {
  var c = p2.handle._zod;
  var b = c.memoizer;
  if (b === void 0 || b.handoff === void 0 || b.handoff == null) return a;
  c = b.handoff;
  b.handoff = void 0;
  p2 = { value: a, issues: null };
  var d = e.value;
  c.set(d, p2);
  c = b.open;
  c.push(p2);
  return a;
};
var _c = (p2, e) => {
  var b = p2.handle._zod;
  var a = b.memoizer;
  if (a == null) return;
  a.handoff = void 0;
  p2 = a.open;
  b = "number" == typeof a.openDepth ? +a.openDepth | 0 : 0;
  Array.isArray(p2) && p2.length > b && (p2 = p2.pop(), a = e.issues, a.length > 0 ? p2.issues = Zc(e.issues) : p2.issues = []);
};
var $c = (a, b, y2) => a ? { code: "too_big", maximum: 0 + b, inclusive: true, input: y2, origin: "array" } : { code: "too_small", minimum: 0 + b, inclusive: true, input: y2, origin: "array" };
var ad = (e, a, h2, b, c) => {
  var q2 = e.value;
  var g2 = h2.length;
  var k2 = a.length;
  h2 = 0;
  while (h2 < k2) {
    var d = b[h2];
    var f2 = h2 < g2;
    var i2 = va(a[h2]);
    var j2 = i2 ? i2.optin : 0;
    if (!f2 && h2 >= c && 1 == j2) {
      q2.length = h2;
      break;
    }
    if (!(d === void 0) && !(d == null) && d.issues.length > 0) {
      if (!f2 && h2 >= c) {
        q2.length = h2;
        break;
      }
      f2 = d.issues;
      i2 = e.issues;
      Xa(f2, i2, +(0 + h2));
    }
    !(d === void 0) && !(d == null) && (q2[h2] = d.value);
    h2 = h2 + 1;
  }
  e = q2.length - 1 | 0;
  while (e >= g2) {
    h2 = va(a[e]);
    if (h2 && 1 == h2.optout && q2[e] === void 0) {
      q2.length = e;
      e = e - 1 | 0;
      continue;
    }
    break;
  }
};
var db = (e, E2) => {
  e.value = E2.value;
  qd(E2.issues, e.issues);
};
var bd = (p2, e, a, f2) => {
  var g2 = a.length;
  var h2 = 0, C2, t2, b, d, c;
  while (h2 < g2) {
    C2 = a[h2];
    if (!(C2 === void 0) && !(C2 == null) && 0 == C2.issues.length) {
      db(e, C2);
      return;
    }
    h2 = h2 + 1;
  }
  t2 = [];
  h2 = 0;
  while (h2 < g2) {
    C2 = a[h2];
    !(C2 === void 0) && !(C2 == null) && !Ub(C2) && t2.push(C2);
    h2 = h2 + 1;
  }
  if (1 == t2.length) {
    db(e, t2[0]);
    return;
  }
  b = [];
  h2 = 0;
  while (h2 < g2) {
    C2 = a[h2];
    c = [];
    if (!(C2 === void 0) && !(C2 == null)) {
      t2 = C2.issues;
      d = t2.length;
      C2 = 0;
      while (C2 < d) {
        c.push(Ta(t2[C2], p2, f2));
        C2 = C2 + 1;
      }
    }
    b.push(c);
    h2 = h2 + 1;
  }
  e.issues.push({ code: "invalid_union", errors: b, path: [] });
};
var da = (k2) => {
  let a = Ga, b = k2._zod;
  return a[+b.id];
};
var va = (k2) => {
  if (k2 == null || !X(k2)) return null;
  var a = k2._zod;
  if (a == null || a.id === void 0) return null;
  k2 = +a.id | 0;
  if (k2 < 0 || k2 >= Ga.length) return null;
  return Ga[k2];
};
var cd;
var dd;
(function() {
  let a = (u2) => {
    if (u2 === void 0) return "undefined";
    if (u2 === null) return "null";
    var d = typeof u2;
    if ("number" == d) {
      if (true === Number.isNaN(u2)) return "nan";
      if (!La(u2)) return u2 + "";
      return "number";
    }
    if ("object" == d) {
      if (u2 == null) return "null";
      if (Array.isArray(u2)) return "array";
      d = ga.getPrototypeOf(u2);
      if (!(d === ga.prototype) && "function" == typeof u2.constructor) {
        var e = u2.constructor;
        d = e.name + "";
        if (d.length > 0) return d;
      }
      return "object";
    }
    return d;
  };
  let b = (d) => "regex" == d ? "input" : "email" == d ? "email address" : "url" == d ? "URL" : "emoji" == d ? "emoji" : "uuid" == d ? "UUID" : "uuidv4" == d ? "UUIDv4" : "uuidv6" == d ? "UUIDv6" : "uuidv7" == d ? "UUIDv7" : "nanoid" == d ? "nanoid" : "guid" == d ? "GUID" : "cuid" == d ? "cuid" : "cuid2" == d ? "cuid2" : "ulid" == d ? "ULID" : "xid" == d ? "XID" : "ksuid" == d ? "KSUID" : "datetime" == d ? "ISO datetime" : "date" == d ? "ISO date" : "time" == d ? "ISO time" : "duration" == d ? "ISO duration" : "ipv4" == d ? "IPv4 address" : "ipv6" == d ? "IPv6 address" : "mac" == d ? "MAC address" : "cidrv4" == d ? "IPv4 range" : "cidrv6" == d ? "IPv6 range" : "base64" == d ? "base64-encoded string" : "base64url" == d ? "base64url-encoded string" : "json_string" == d ? "JSON string" : "e164" == d ? "E.164 number" : "credit_card" == d ? "credit card number" : "jwt" == d ? "JWT" : "template_literal" == d ? "input" : d;
  let c = (j2) => {
    if ("bigint" == typeof j2) return j2 + "n";
    if ("string" == typeof j2) return of + j2 + of;
    if (j2 === void 0) return "undefined";
    if (j2 == null) return "null";
    return j2 + "";
  };
  cd = function(d, e) {
    var g2 = d.length;
    var q2 = lf, h2 = 0;
    while (h2 < g2) {
      h2 > 0 && (q2 = q2 + e);
      q2 = q2 + c(d[h2]);
      h2 = h2 + 1;
    }
    return q2;
  };
  dd = function(H2) {
    var h2 = H2.code + "";
    if ("invalid_type" == h2) {
      var g2 = H2.expected + "";
      "nan" == g2 && (g2 = "NaN");
      h2 = a(H2.input);
      "nan" == h2 && (h2 = "NaN");
      "number" == h2 && "number" == typeof H2.input && !La(H2.input) && (h2 = H2.input + "");
      return pf + g2 + ", received " + h2;
    }
    if ("invalid_value" == h2) {
      h2 = H2.values;
      if (h2 == null || !Array.isArray(h2)) return mf;
      if (1 == h2.length) return pf + c(h2[0]);
      return "Invalid option: expected one of " + cd(h2, "|");
    }
    if ("too_big" == h2) {
      H2.exact ? h2 = "exactly " : (h2 = H2.inclusive, h2 = !(false === h2) ? "<=" : "<");
      var d = !(H2.origin === void 0) ? H2.origin + "" : "value";
      if ("string" == d) return "Too big: expected string to have " + h2 + H2.maximum + " characters";
      if ("array" == d) return "Too big: expected array to have " + h2 + H2.maximum + qf;
      if ("set" == d) return "Too big: expected set to have " + h2 + H2.maximum + qf;
      if ("map" == d) return "Too big: expected map to have " + h2 + H2.maximum + " entries";
      if ("file" == d) return "Too big: expected file to have " + h2 + H2.maximum + " bytes";
      h2 = "Too big: expected " + d + " to be " + h2;
      return h2 + H2.maximum;
    }
    if ("too_small" == h2) {
      H2.exact ? h2 = "exactly " : (h2 = H2.inclusive, h2 = !(false === h2) ? ">=" : ">");
      d = !(H2.origin === void 0) ? H2.origin + "" : "value";
      if ("string" == d) return "Too small: expected string to have " + h2 + H2.minimum + " characters";
      if ("array" == d) return "Too small: expected array to have " + h2 + H2.minimum + qf;
      if ("set" == d) return "Too small: expected set to have " + h2 + H2.minimum + qf;
      if ("map" == d) return "Too small: expected map to have " + h2 + H2.minimum + " entries";
      if ("file" == d) return "Too small: expected file to have " + h2 + H2.minimum + " bytes";
      h2 = "Too small: expected " + d + " to be " + h2;
      return h2 + H2.minimum;
    }
    if ("invalid_format" == h2) {
      h2 = H2.format + "";
      if ("starts_with" == h2) return 'Invalid string: must start with "' + H2.prefix + of;
      if ("ends_with" == h2) return 'Invalid string: must end with "' + H2.suffix + of;
      if ("includes" == h2) return 'Invalid string: must include "' + H2.includes + of;
      if ("regex" == h2) return "Invalid string: must match pattern " + H2.pattern;
      return "Invalid " + b(h2);
    }
    if ("not_multiple_of" == h2) return "Invalid number: must be a multiple of " + H2.divisor;
    if ("unrecognized_keys" == h2) {
      h2 = H2.keys;
      H2 = h2.length > 1 ? "s" : lf;
      var Uc2 = "Unrecognized key" + H2 + ": ";
      return Uc2 + cd(h2, ", ");
    }
    if ("invalid_key" == h2) return "Invalid key in " + H2.origin;
    if ("invalid_union" == h2) {
      Array.isArray(H2.options) ? (d = H2.options, h2 = d.length > 0) : h2 = false;
      if (h2) {
        d = H2.options;
        g2 = d.length;
        H2 = lf;
        h2 = 0;
        while (h2 < g2) {
          h2 > 0 && (H2 = H2 + " | ");
          H2 = H2 + "'" + d[h2] + "'";
          h2 = h2 + 1;
        }
        return "Invalid discriminator value. Expected " + H2;
      }
      h2 = H2.inclusive;
      if (false === h2) return "Invalid input: more than one option matched";
      return mf;
    }
    if ("invalid_element" == h2) return "Invalid value in " + H2.origin;
    if ("custom" == h2) {
      if ("string" == typeof H2.message) return H2.message + "";
      return mf;
    }
    return mf;
  };
})();
var Ta = /* @__PURE__ */ (function() {
  let d = (a) => {
    if (a == null) return;
    if ("string" == typeof a) return a;
    if (X(a) && "string" == typeof a.message) return a.message;
  };
  let e = (k2) => {
    if (k2 == null || !X(k2)) return;
    var v2 = k2._zod;
    if (v2 == null) return;
    k2 = v2.def;
    return k2.error;
  };
  let f2 = (h2, i2) => {
    var j2;
    if ("string" == typeof h2.message && (h2.message + "").length > 0) return h2.message + "";
    j2 = e(h2.inst);
    if ("function" == typeof j2) {
      var N2 = void 0;
      var k2 = d(j2(h2));
      if (!(k2 === void 0)) return k2 + "";
    }
    if ("string" == typeof j2) return j2 + "";
    j2 = h2.schema;
    if (!(j2 === h2.inst)) {
      j2 = e(h2.schema);
      if ("function" == typeof j2) {
        var _2 = void 0;
        k2 = d(j2(h2));
        if (!(k2 === void 0)) return k2 + "";
      }
      if ("string" == typeof j2) return j2 + "";
    }
    if (!(i2 === void 0) && "function" == typeof i2.error) {
      j2 = d(i2.error(h2));
      if (!(j2 === void 0)) return j2 + "";
    }
    if ("function" == typeof Ab) {
      i2 = d(Ab(h2));
      if (!(i2 === void 0)) return i2 + "";
    }
    if ("function" == typeof Za) {
      i2 = d(Za(h2));
      if (!(i2 === void 0)) return i2 + "";
    }
    return dd(h2);
  };
  let g2 = (a) => {
    var k2 = a.inst;
    if (k2 === void 0) return;
    if (k2 == null) return;
    if (!X(k2)) return;
    var v2 = k2._zod;
    if (v2 === void 0) return;
    if (v2 == null) return;
    var b = v2.traits;
    if (b === void 0) return;
    if (b == null) return;
    if (!b.has("$ZodType")) return;
    b.has("$ZodCheck") ? a.schema === void 0 && (a.schema = k2) : a.schema = k2;
  };
  return function(a, H2, b) {
    a.inst === void 0 && H2 && (a.inst = H2.handle);
    g2(a);
    var i2 = f2(a, b);
    H2 = {};
    var w2 = pa(a);
    var j2 = w2.length;
    var h2 = 0, c;
    while (h2 < j2) {
      c = w2[h2] + "";
      "inst" != c && "schema" != c && "continue" != c && "input" != c && (H2[c] = a[c]);
      h2 = h2 + 1;
    }
    (H2.path === void 0 || H2.path == null) && (H2.path = []);
    H2.message = i2;
    !(b === void 0) && !(b == null) && b.reportInput && (H2.input = a.input);
    return H2;
  };
})();
var tb = (H2, a) => {
  var O2 = H2.path;
  var b;
  O2 == null && (O2 = [], H2.path = O2);
  O2.unshift(a);
};
var Aa = (a, y2) => {
  var H2 = { expected: a, code: "invalid_type", input: y2 };
  "number" == a && "number" == typeof y2 && (true === Number.isNaN(y2) ? H2.received = "NaN" : La(y2) || (H2.received = y2 + ""));
  "date" == a && qa(Date, y2) && true === Number.isNaN(y2.getTime()) && (H2.received = "Invalid Date");
  return H2;
};
var eb;
var kd;
(function() {
  let a = (h2, H2, i2, j2, k2, y2) => {
    var l2 = h2 ? "too_big" : "too_small";
    qa(Date, i2) && (i2 = i2.getTime());
    H2 = { origin: H2, code: l2 };
    h2 ? H2.maximum = i2 : H2.minimum = i2;
    H2.inclusive = j2;
    H2.input = y2;
    k2 && (H2.exact = true);
    H2.continue = true;
    return H2;
  };
  let b = (h2, i2) => {
    var j2 = globalThis.Math;
    h2 = h2 / i2;
    j2 = +j2.round(h2);
    i2 = h2 < 0 ? 0 - h2 : h2;
    i2 > 1 || (i2 = 1);
    var k2 = +Number.EPSILON * i2;
    i2 = h2 - j2;
    i2 < 0 && (i2 = 0 - i2);
    if (i2 < k2) return 0;
    return h2 - j2;
  };
  let c = (y2) => {
    if (!$("^\\d(?:[ -]?\\d){11,18}$", lf).test(y2)) return false;
    var k2 = y2.length;
    var j2 = lf, i2 = 0, h2, l2;
    while (i2 < k2) {
      h2 = y2.slice(i2, i2 + 1);
      h2 >= "0" && h2 <= "9" && (j2 = j2 + h2);
      i2 = i2 + 1;
    }
    h2 = j2.length - 1;
    i2 = 0;
    k2 = false;
    while (h2 >= 0) {
      y2 = +Number(j2.slice(h2, h2 + 1 | 0)) | 0;
      if (k2) {
        var J2 = void 0;
        y2 = y2 * 2 | 0;
        y2 > 9 && (y2 = y2 - 9 | 0);
      }
      i2 = i2 + y2 | 0;
      k2 = !k2;
      h2 = h2 - 1;
    }
    while (i2 >= 10) i2 = i2 - 10;
    return 0 == i2;
  };
  let d = (h2, i2) => {
    var j2 = h2.split(".");
    if (3 != j2.length) return false;
    h2 = j2[0];
    if (h2 == null || 0 == (h2 + "").length) return false;
    try {
      var H2 = globalThis;
      j2 = H2.JSON;
      var I2 = globalThis;
      var p2 = I2.atob;
      var K2 = p2(h2);
      var L2 = j2.parse(K2);
      var aa2 = L2;
      var J2 = void 0;
      if (!X(aa2) || aa2 == null) return false;
      if (Da.call(aa2, "typ") && "JWT" != aa2.typ + "") return false;
      if (aa2.alg === void 0) return false;
      if (!(i2 === void 0) && !(i2 == null) && "string" == typeof i2 && aa2.alg + "" != i2 + "") return false;
      return true;
    } catch {
      return false;
    }
  };
  let e = (u2) => {
    if (!$("^[A-Za-z0-9_-]*$", lf).test(u2)) return false;
    u2 = u2.replace($("-", "g"), "+").replace($("_", "g"), "/") + "";
    var i2 = 0, h2 = 0;
    while (h2 < u2.length) {
      i2 = i2 + 1 | 0;
      4 == i2 && (i2 = 0);
      h2 = h2 + 1;
    }
    1 == i2 && (u2 = u2 + "===");
    2 == i2 && (u2 = u2 + "==");
    3 == i2 && (u2 = u2 + "=");
    return id(u2);
  };
  let f2 = (j2) => {
    j2 = j2.split("/");
    if (2 != j2.length) return false;
    var h2 = j2[1] + "";
    if (0 == h2.length) return false;
    var i2 = Number(h2);
    if (i2 + "" != h2) return false;
    h2 = +i2;
    if (h2 < 0) return false;
    if (h2 > 128) return false;
    return jd(j2[0] + "");
  };
  let g2 = (N2, h2, j2) => {
    var i2 = j2.trim();
    if (!N2.normalize && !(N2.protocol === void 0) && !(N2.protocol == null) && !$("^https?:\\/\\/", "i").test(i2)) {
      ta(h2, "url", void 0);
      return;
    }
    var za2;
    try {
      za2 = new URL(i2);
    } catch {
      ta(h2, "url", void 0);
      return;
    }
    if (!(N2.hostname === void 0) && !(N2.hostname == null)) {
      j2 = N2.hostname;
      j2.lastIndex = 0;
      var R2 = za2.hostname;
      j2.test(R2) || ta(h2, "url", { note: "Invalid hostname", pattern: j2.source });
    }
    !(N2.protocol === void 0) && !(N2.protocol == null) && (R2 = N2.protocol, j2 = za2.protocol + "", j2.endsWith(":") && (j2 = j2.slice(0, j2.length - 1)), R2.lastIndex = 0, R2.test(j2) || ta(h2, "url", { note: "Invalid protocol", pattern: R2.source }));
    h2.value = i2.replace($("[\\t\\n\\r]", "g"), lf) + "";
    !N2.normalize || (h2.value = za2.href);
  };
  eb = function(h2, i2, j2, k2, l2, m2, y2) {
    h2.issues.push(a(i2, j2, k2, l2, m2, y2));
  };
  kd = function(I2, i2, K2) {
    var j2;
    if (X(I2) && X(I2._zod) && "function" == typeof I2._zod.check) {
      var N2 = I2._zod;
      j2 = N2.check.call(I2, i2);
      if (aa(j2)) {
        if (!(K2 === void 0) && false === K2.async) throw new Error(ef);
        i2.$pending = j2;
      }
      return;
    }
    N2 = sc(I2);
    var z2 = N2.check + "";
    j2 = i2.value;
    var k2, l2, m2;
    if ("min_length" == z2 || "max_length" == z2 || "length_equals" == z2) {
      K2 = "string" == typeof j2;
      if (!K2 && !Array.isArray(j2)) return;
      I2 = j2.length;
      K2 && (I2 = Array.from(j2).length);
      K2 = Array.isArray(j2) ? "array" : "string";
      "min_length" == z2 && I2 < +N2.minimum && (k2 = i2.issues, k2.push(a(false, K2, +N2.minimum, true, false, j2)));
      "max_length" == z2 && I2 > +N2.maximum && (k2 = i2.issues, k2.push(a(true, K2, +N2.maximum, true, false, j2)));
      "length_equals" == z2 && I2 != N2.length && (I2 < N2.length ? (I2 = i2.issues, I2.push(a(false, K2, N2.length, true, true, j2))) : (I2 = i2.issues, I2.push(a(true, K2, N2.length, true, true, j2))));
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
      K2 = Array.isArray(j2) ? "array" : "set";
      qa(Map, j2) && (K2 = "map");
      k2 = globalThis.File;
      !(k2 === void 0) && qa(k2, j2) && (K2 = "file");
      "min_size" == z2 && I2 < +N2.minimum && eb(i2, false, K2, N2.minimum, true, false, j2);
      "max_size" == z2 && I2 > +N2.maximum && eb(i2, true, K2, N2.maximum, true, false, j2);
      "size_equals" == z2 && I2 != +N2.size && (I2 < +N2.size ? (I2 = N2.size, eb(i2, false, K2, I2, true, true, j2)) : eb(i2, true, K2, N2.size, true, true, j2));
      return;
    }
    if ("greater_than" == z2 || "less_than" == z2) {
      if (!("number" == typeof j2) && !qa(Date, j2) && !("bigint" == typeof j2)) return;
      I2 = N2.value;
      K2 = N2.inclusive;
      k2 = !(false === K2);
      K2 = qa(Date, j2) ? "date" : "number";
      "bigint" == typeof j2 && (K2 = "bigint");
      N2.origin === void 0 || (K2 = N2.origin + "");
      if ("greater_than" == z2) {
        N2 = j2 > I2;
        k2 && (N2 = j2 >= I2);
        if (N2) return;
        eb(i2, false, K2, I2, k2, false, j2);
      } else {
        N2 = j2 < I2;
        k2 && (N2 = j2 <= I2);
        if (N2) return;
        eb(i2, true, K2, I2, k2, false, j2);
      }
      return;
    }
    if ("multiple_of" == z2) {
      if ("bigint" == typeof j2) {
        I2 = j2 % N2.value;
        I2 === BigInt(0) || (I2 = i2.issues, K2 = N2.value, I2.push({ code: "not_multiple_of", divisor: K2, path: [] }));
        return;
      }
      if (!("number" == typeof j2)) return;
      I2 = +j2;
      0 != b(I2, +N2.value) && (I2 = i2.issues, K2 = N2.value, I2.push({ origin: "number", code: "not_multiple_of", divisor: K2, input: j2 }));
      return;
    }
    if ("number_format" == z2) {
      I2 = N2.format + "";
      "safeint" == I2 && !(true === Number.isSafeInteger(j2)) && (+j2 > 0 ? i2.issues.push(a(true, "number", 9007199254740991, true, false, j2)) : i2.issues.push(a(false, "number", -9007199254740991, true, false, j2)));
      ("int32" == I2 || "safeint" == I2 || "int" == I2) && (true === Number.isInteger(j2) || i2.issues.push(Aa("int", j2)));
      "finite" == I2 && !La(j2) && i2.issues.push(Aa("number", j2));
      return;
    }
    if ("includes" == z2) {
      if (!("string" == typeof j2)) return;
      K2 = j2 + "";
      j2 = N2.includes + "";
      I2 = K2.includes(j2);
      "number" == typeof N2.position && (I2 = K2.slice(+N2.position | 0).includes(j2));
      if (I2) return;
      ta(i2, "includes", { includes: N2.includes });
      return;
    }
    if ("starts_with" == z2) {
      if (!("string" == typeof j2)) return;
      I2 = j2 + "";
      if (I2.startsWith(N2.prefix + "")) return;
      ta(i2, "starts_with", { prefix: N2.prefix });
      return;
    }
    if ("ends_with" == z2) {
      if (!("string" == typeof j2)) return;
      I2 = j2 + "";
      if (I2.endsWith(N2.suffix + "")) return;
      ta(i2, "ends_with", { suffix: N2.suffix });
      return;
    }
    if ("string_format" == z2 || "lowercase" == z2 || "uppercase" == z2) {
      if (!("string" == typeof j2)) return;
      I2 = j2 + "";
      var h2 = z2;
      "string_format" == z2 && (h2 = N2.format + "");
      if ("lowercase" == h2 && I2 != I2.toLowerCase()) {
        ta(i2, "lowercase", void 0);
        return;
      }
      if ("uppercase" == h2 && I2 != I2.toUpperCase()) {
        ta(i2, "uppercase", void 0);
        return;
      }
      if ("url" == h2) {
        g2(N2, i2, j2);
        return;
      }
      if ("credit_card" == h2) {
        if (c(I2)) return;
        ta(i2, "credit_card", void 0);
        return;
      }
      if ("jwt" == h2) {
        if (d(I2, N2.alg)) return;
        j2 = { code: "invalid_format", format: "jwt", input: j2 };
        !(N2.alg === void 0) && !(N2.alg == null) && (j2.algorithm = N2.alg);
        I2 = i2.issues;
        I2.push(j2);
        return;
      }
      if ("base64" == h2) {
        if (id(I2)) return;
        ta(i2, "base64", void 0);
        return;
      }
      if ("base64url" == h2) {
        if (e(I2)) return;
        ta(i2, "base64url", void 0);
        return;
      }
      if ("ipv6" == h2) {
        if (jd(I2)) return;
        ta(i2, "ipv6", void 0);
        return;
      }
      if ("cidrv6" == h2) {
        f2(I2) || ta(i2, "cidrv6", void 0);
        return;
      }
      if ("function" == typeof N2.fn) {
        I2 = N2.fn(j2);
        if (aa(I2)) {
          i2.$pending = I2.then(function(o2) {
            if (!o2) {
              var b2 = i2.issues;
              o2 = h2;
              b2.push({ code: "invalid_format", format: o2, input: j2, continue: !N2.abort });
            }
            return i2;
          });
          return;
        }
        if (I2) return;
        I2 = i2.issues;
        K2 = h2;
        I2.push({ code: "invalid_format", format: K2, input: j2, continue: !N2.abort });
        return;
      }
      if (!(N2.pattern === void 0)) {
        K2 = N2.pattern;
        K2.lastIndex = 0;
        K2 = N2.pattern;
        if (K2.test(I2)) return;
        K2 = N2.pattern;
        I2 = { pattern: K2.toString() };
        ta(i2, h2, I2);
      }
      return;
    }
    if ("mime_type" == z2) {
      I2 = N2.mime;
      if (!Array.isArray(I2)) return;
      z2 = j2.type + "";
      N2 = I2.length;
      K2 = 0;
      while (K2 < N2) {
        if (I2[K2] + "" == z2) return;
        K2 = K2 + 1;
      }
      K2 = j2.type;
      i2.issues.push({ code: "invalid_value", values: I2, input: K2 });
      return;
    }
    if ("property" == z2) {
      I2 = va(N2.schema);
      if (I2) {
        I2 = wa(I2, j2[N2.property], K2);
        if (aa(I2)) {
          K2 = N2.property;
          i2.$pending = I2.then(function(E2) {
            var r2 = E2.issues;
            var a2 = r2.length;
            var b2 = 0;
            while (b2 < a2) {
              tb(r2[b2], K2);
              i2.issues.push(r2[b2]);
              b2 = b2 + 1;
            }
            return i2;
          });
          return;
        }
        K2 = I2.issues;
        j2 = K2.length;
        I2 = 0;
        while (I2 < j2) {
          z2 = K2[I2];
          tb(z2, N2.property);
          i2.issues.push(K2[I2]);
          I2 = I2 + 1;
        }
      }
      return;
    }
    if ("overwrite" == z2) {
      "function" == typeof N2.transform && (i2.value = N2.transform(j2));
      return;
    }
    if ("custom" == z2) {
      z2 = void 0;
      X(I2._zod) && (k2 = I2._zod, z2 = k2.bag);
      if (X(z2) && !(z2.Class === void 0)) {
        if (qa(z2.Class, j2)) return;
        I2 = i2.issues;
        K2 = z2.Class;
        I2.push(Aa(K2.name + "", j2));
        return;
      }
      if (!("function" == typeof N2.fn)) return;
      z2 = i2.issues;
      k2 = { value: j2, issues: z2, addIssue: function(o2) {
        "string" == typeof o2 ? o2 = { message: o2, code: "custom", input: j2, inst: I2 } : (!o2.fatal || (o2.continue = false), o2.code === void 0 && (o2.code = "custom"), true === "input" in o2 || (o2.input = j2), o2.inst === void 0 && (o2.inst = I2), o2.continue === void 0 && (o2.continue = !N2.abort));
        z2.push(o2);
      } };
      l2 = z2.length;
      k2 = N2.fn(j2, k2);
      if (aa(k2)) {
        var lk = void 0;
        if (!(K2 === void 0) && false === K2.async) throw new Error(ef);
        i2.$pending = k2.then(function(E2) {
          hd(E2, i2, j2, I2, N2, l2);
          return i2;
        });
        return;
      }
      hd(k2, i2, j2, I2, N2, l2);
      return;
    }
  };
})();
var oc = (j2) => "bigint" == typeof j2 ? j2 + "" : j2;
var pc = (k2, A2) => {
  A2 == null && (A2 = []);
  var a = la();
  a.add("$ZodError");
  a.add("ZodError");
  k2.name = "ZodError";
  ba(k2, "issues", Lb(A2));
  ba(k2, "_zod", Lb({ def: A2, traits: a }));
  ba(k2, "message", { enumerable: true, configurable: true, get: function() {
    var v2 = this._zod;
    if (!(v2.message === void 0)) return v2.message;
    var s2 = v2.def;
    v2.message = JSON.stringify(s2, function(C2, F2) {
      return oc(F2);
    }, 2);
    return v2.message;
  }, set: function(j2) {
    let b = this._zod;
    b.message = j2;
  } });
  return k2;
};
var Ge;
var Ve;
var We;
var Xe;
var Ye;
var Ze;
var Cc;
var _e;
var $e;
var af;
(function() {
  let a = (b) => 0 == b ? "string" : 1 == b ? "number" : 2 == b ? "boolean" : 3 == b ? "bigint" : 4 == b ? "symbol" : 5 == b ? "date" : 6 == b ? "nan" : 7 == b ? "undefined" : 8 == b ? "null" : 9 == b ? "any" : 10 == b ? "unknown" : 11 == b ? "never" : 12 == b ? "void" : 13 == b ? "literal" : 14 == b ? "enum" : 15 == b ? "object" : 16 == b ? "array" : 17 == b ? "tuple" : 18 == b ? "record" : 19 == b ? "map" : 20 == b ? "set" : 21 == b ? "union" : 38 == b ? "union" : 22 == b ? "intersection" : 23 == b ? "optional" : 24 == b ? "nullable" : 25 == b ? "default" : 26 == b ? "prefault" : 27 == b ? "catch" : 28 == b ? "nonoptional" : 29 == b ? "lazy" : 30 == b ? "promise" : 31 == b ? "transform" : 32 == b ? "pipe" : 33 == b ? "readonly" : 34 == b ? "custom" : 35 == b ? "file" : 36 == b ? "custom" : 37 == b ? "success" : 39 == b ? "function" : 40 == b ? "template_literal" : "custom";
  let c = (R2, b, d, p2) => {
    ba(R2, b, { configurable: true, enumerable: false, get: function() {
      let a2 = d(this);
      let e2 = void 0;
      ba(this, b, { configurable: true, writable: true, enumerable: p2, value: a2 });
      return a2;
    }, set: function(j3) {
      ba(this, b, { configurable: true, writable: true, enumerable: true, value: j3 });
    } });
  };
  let e = (T2, D2) => {
    var R2 = T2.prototype;
    var b = function(n3, e2) {
      ba(R2, n3, { configurable: true, enumerable: true, get: function() {
        let c2 = this._zod;
        return c2.def[e2];
      } });
    };
    "ZodArray" == D2 && b("element", "element");
    ("ZodRecord" == D2 || "ZodMap" == D2) && (b("keyType", "keyType"), b("valueType", "valueType"));
    "ZodSet" == D2 && b("valueType", "valueType");
    ("ZodUnion" == D2 || "ZodDiscriminatedUnion" == D2 || "ZodXor" == D2) && (b("options", "options"), b("discriminator", "discriminator"));
    ("ZodPipe" == D2 || "ZodCodec" == D2 || "ZodPreprocess" == D2) && (b("in", "in"), b("out", "out"));
    "ZodEnum" == D2 && (ba(R2, "enum", { configurable: true, enumerable: true, get: function() {
      var b2 = this._zod;
      var g3 = b2.def;
      var a2 = g3.entries;
      var h3;
      if (X(a2) && !Array.isArray(a2)) return a2;
      b2 = {};
      if (Array.isArray(a2)) {
        g3 = a2.length;
        h3 = 0;
        while (h3 < g3) {
          b2[a2[h3]] = a2[h3];
          h3 = h3 + 1;
        }
      }
      return b2;
    } }), ba(R2, "options", { configurable: true, enumerable: true, get: function() {
      let b2 = this._zod, c2 = b2.def;
      return Cd(c2.entries);
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
  let f2 = (s2) => {
    if ("string" == typeof s2) return s2;
    if (X(s2) && !(s2 == null)) {
      if ("string" == typeof s2.error) return s2.error;
      if ("string" == typeof s2.message) return s2.message;
    }
    return lf;
  };
  let g2 = (b) => 0 == b ? Z : 1 == b ? ha : 2 == b ? $a : 3 == b ? oa : 4 == b ? dc : 5 == b ? Ba : 6 == b ? ec : 7 == b ? fc : 8 == b ? Bb : 9 == b ? gc : 10 == b ? Ia : 11 == b ? ib : 12 == b ? hc : 13 == b ? Cb : 14 == b ? Ja : 15 == b ? ma : 16 == b ? ya : 17 == b ? ic : 18 == b ? Db : 19 == b ? jb : 20 == b ? kb : 21 == b ? Ka : 38 == b ? Eb : 22 == b ? Fb : 23 == b ? ab : 24 == b ? kc : 25 == b ? Gb : 26 == b ? Hb : 27 == b ? Ib : 28 == b ? lc : 29 == b ? lb : 30 == b ? Jb : 31 == b ? mb : 32 == b ? Ea : 33 == b ? Pc : 34 == b ? Ra : 35 == b ? ob : 37 == b ? mc : 39 == b ? Sa : 40 == b ? nc : Y;
  let h2 = (p2, D2, Q2, s2) => {
    ia(Q2, Pa(s2));
    return fa(p2, ea(D2, Q2));
  };
  let i2 = (b, d, s2) => {
    s2 = ca(a(b), s2);
    s2.innerType = d;
    return new (g2(b))(s2);
  };
  let j2 = (b) => {
    var d = da(b).def.shape;
    return d == null ? {} : d;
  };
  let k2 = (b) => {
    var d = da(b).def.checks;
    b = Array.isArray(d) && d.length > 0;
    return b;
  };
  let l2 = (L2, b) => {
    var d = Reflect.ownKeys(b);
    var p2 = d.length;
    b = 0;
    while (b < p2) {
      if (!("string" == typeof d[b])) {
        b = b + 1;
        continue;
      }
      var q2 = d[b];
      if (!Da.call(L2, q2)) throw na('Unrecognized key: "' + d[b] + of);
      b = b + 1;
    }
  };
  let m2 = (b, d) => {
    let p2 = {};
    ba(p2, "shape", { configurable: true, enumerable: true, get: function() {
      var o3 = {};
      var a2 = j2(b);
      qb(o3, a2);
      !(d === void 0) && X(d) && !(d == null) && qb(o3, d);
      ba(this, "shape", { value: o3, writable: true, enumerable: true, configurable: true });
      return o3;
    } });
    return p2;
  };
  let n2 = (b, d, p2, q2) => {
    if (p2 && k2(b)) {
      if (q2) throw na(hf);
      throw na(jf);
    }
    var u2 = {};
    var r2 = ga.defineProperties(u2, ga.getOwnPropertyDescriptors(da(b).def));
    ba(r2, "shape", { configurable: true, enumerable: true, get: function() {
      var P2 = da(b).def.shape;
      var e2, L2, m3, f3, j3, h3, k3;
      P2 == null && (P2 = {});
      !(d === void 0) && !(d == null) && l2(P2, d);
      k3 = Reflect.ownKeys(P2);
      L2 = {};
      m3 = k3.length;
      h3 = 0;
      while (h3 < m3) {
        e2 = k3[h3];
        if (!("string" == typeof e2)) {
          h3 = h3 + 1;
          continue;
        }
        f3 = P2[e2];
        (d == null || d[e2]) && (f3 = p2 ? q2 ? new bb({ type: "optional", innerType: f3, exact: true }) : i2(23, f3, void 0) : i2(28, f3, void 0));
        Ca(L2, e2, f3);
        h3 = h3 + 1;
      }
      ba(this, "shape", { value: L2, writable: true, enumerable: true, configurable: true });
      return L2;
    } });
    p2 && (r2.checks = []);
    return new ma(r2);
  };
  let o2 = (p2, Q2, q2, s2) => {
    Q2 = { format: Q2, pattern: q2 };
    q2 = f2(s2) + "";
    q2.length > 0 && (Q2.error = q2);
    return fa(p2, ea("string_format", Q2));
  };
  Ge = function() {
    let b = ua.prototype, d = Error.prototype;
    ga.setPrototypeOf(b, d);
    b = ua;
    ba(b, "name", Fa("ZodError"));
    b = ua;
    ba(b, "init", Fa(function(k3, t2) {
      return pc(k3, t2);
    }));
    b = Ha.prototype;
    d = ua.prototype;
    ga.setPrototypeOf(b, d);
    ba(Ha, "name", Fa("ZodError"));
    b = Ha;
    ba(b, "init", ua.init);
    b = ua;
    d = Symbol.hasInstance;
    ba(b, d, Fa(function(k3) {
      if (k3 == null || !X(k3)) return false;
      var v2 = k3._zod;
      if (v2 == null) return false;
      return !!v2.traits.has("ZodError");
    }));
    b = Ha;
    d = Symbol.hasInstance;
    ba(b, d, Fa(function(k3) {
      if (qa(Error, k3)) return true;
      if (k3 == null || !X(k3)) return false;
      var v2 = k3._zod;
      if (v2 == null) return false;
      return !!v2.traits.has("ZodError");
    }));
    b = ua.prototype;
    ba(b, "toString", { configurable: true, enumerable: false, get: function() {
      var a2 = this;
      let j3 = function() {
        return a2.message;
      };
      ba(a2, "toString", { value: j3, configurable: true, writable: true });
      return j3;
    }, set: function(j3) {
      ba(this, "toString", { value: j3, configurable: true, writable: true });
    } });
    b = ua.prototype;
    c(b, "format", function(a2) {
      return function(c2) {
        let b2 = { _errors: [] };
        Qb(a2.issues, [], b2, c2);
        return b2;
      };
    }, false);
    b = ua.prototype;
    c(b, "flatten", function(a2) {
      return function(c2) {
        return ed(a2, c2);
      };
    }, false);
    b = ua.prototype;
    c(b, "addIssue", function(a2) {
      return function(i3) {
        let h3 = a2.issues;
        h3.push(i3);
        h3 = a2._zod;
        i3 = a2.issues;
        h3.message = JSON.stringify(i3, function(C2, F2) {
          return oc(F2);
        }, 2);
      };
    }, false);
    b = ua.prototype;
    c(b, "addIssues", function(a2) {
      return function(i3) {
        var j3 = i3.length;
        var h3 = 0;
        while (h3 < j3) {
          a2.issues.push(i3[h3]);
          h3 = h3 + 1;
        }
        h3 = a2._zod;
        i3 = a2.issues;
        h3.message = JSON.stringify(i3, function(C2, F2) {
          return oc(F2);
        }, 2);
      };
    }, false);
    b = ua.prototype;
    ba(b, "isEmpty", { enumerable: false, configurable: true, get: function() {
      let b2 = this.issues;
      return 0 == b2.length;
    } });
  };
  Ve = function() {
    let q2 = Y.prototype, p2 = true;
    ba(q2, "_def", { configurable: p2, get: function() {
      let b = this._zod;
      return b.def;
    } });
    q2 = Y.prototype;
    c(q2, "parse", function(b) {
      var a2;
      let c2 = $d, d = b._zod;
      a2 = c2(d, function(e2, f3) {
        return Bd(b, e2, f3, a2);
      });
      return a2;
    }, p2);
    q2 = Y.prototype;
    c(q2, "safeParse", function(a2) {
      return ae(a2._zod, function(e2, f3) {
        Ua();
        return gb(yb(e2, da(a2), f3));
      });
    }, p2);
    q2 = Y.prototype;
    c(q2, "parseAsync", function(b) {
      var a2;
      let c2 = function(u2, s2) {
        return Oa(b, u2, s2, a2);
      };
      a2 = new globalThis.Function("impl", gf)(c2);
      return a2;
    }, p2);
    q2 = Y.prototype;
    c(q2, "safeParseAsync", function(a2) {
      return function(b, c2) {
        return Zb(a2, b, c2);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "spa", function(a2) {
      return a2.safeParseAsync;
    }, p2);
    q2 = Y.prototype;
    c(q2, "encode", function(b) {
      var a2;
      a2 = function() {
        var f3 = arguments[1];
        var d;
        f3 = f3 == null ? {} : ia({}, f3);
        f3.direction = "backward";
        d = arguments[0];
        return Na(b, d, f3, a2);
      };
      return a2;
    }, p2);
    q2 = Y.prototype;
    c(q2, "decode", function(b) {
      var a2;
      a2 = function() {
        var f3 = arguments[1];
        var d;
        f3 = f3 == null ? {} : ia({}, f3);
        f3.direction = "forward";
        d = arguments[0];
        return Na(b, d, f3, a2);
      };
      return a2;
    }, p2);
    q2 = Y.prototype;
    c(q2, "encodeAsync", function(b) {
      var a2;
      let c2 = function(u2, k3) {
        var f3 = k3 == null ? {} : ia({}, k3);
        f3.direction = "backward";
        return Oa(b, u2, f3, a2);
      };
      a2 = new globalThis.Function("impl", gf)(c2);
      return a2;
    }, p2);
    q2 = Y.prototype;
    c(q2, "decodeAsync", function(b) {
      var a2;
      let c2 = function(u2, k3) {
        var f3 = k3 == null ? {} : ia({}, k3);
        f3.direction = "forward";
        return Oa(b, u2, f3, a2);
      };
      a2 = new globalThis.Function("impl", gf)(c2);
      return a2;
    }, p2);
    q2 = Y.prototype;
    c(q2, "optional", function(b) {
      return function() {
        return i2(23, b, void 0);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "exactOptional", function(a2) {
      return function() {
        return new bb({ type: "optional", innerType: a2, exact: true });
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "nullable", function(b) {
      return function() {
        return i2(24, b, void 0);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "nullish", function(b) {
      return function() {
        return i2(23, i2(24, b, void 0), void 0);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "array", function(a2) {
      return function() {
        let l3 = ca("array", void 0);
        l3.element = a2;
        return new ya(l3);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "or", function(a2) {
      return function(j3) {
        let b = [];
        b.push(a2);
        b.push(j3);
        let i3 = ca("union", void 0);
        i3.options = b;
        return new Ka(i3);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "and", function(a2) {
      return function(c2) {
        return new Fb({ type: "intersection", left: a2, right: c2 });
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "optional", function(b) {
      return function() {
        return i2(23, b, void 0);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "default", function(a2) {
      return function(j3) {
        let c2 = { type: "default", innerType: a2 };
        ba(c2, "defaultValue", { configurable: true, enumerable: true, get: function() {
          return "function" == typeof j3 ? j3() : j3;
        } });
        return new Gb(c2);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "prefault", function(a2) {
      return function(j3) {
        let c2 = { type: "prefault", innerType: a2 };
        ba(c2, "defaultValue", { configurable: true, enumerable: true, get: function() {
          return "function" == typeof j3 ? j3() : j3;
        } });
        return new Hb(c2);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "catch", function(a2) {
      return function(g3) {
        var f3 = !("function" == typeof g3) ? function() {
          return g3;
        } : g3;
        return new Ib({ type: "catch", innerType: a2, catchValue: f3 });
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "removeDefault", function(a2) {
      return function() {
        return da(a2).def.innerType;
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "removeCatch", function(a2) {
      return function() {
        return da(a2).def.innerType;
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "nonoptional", function(b) {
      return function(e2) {
        return i2(28, b, e2);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "transform", function(a2) {
      return function(x2) {
        let b = new mb({ type: "transform", transform: x2 });
        return new Ea({ type: "pipe", in: a2, out: b });
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "pipe", function(a2) {
      return function(S2) {
        return new Ea({ type: "pipe", in: a2, out: S2 });
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "readonly", function(b) {
      return function() {
        return i2(33, b, void 0);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "brand", function(a2) {
      return function() {
        return a2;
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "describe", function(a2) {
      return function(c2) {
        let n3 = xa(a2, void 0);
        Va().add.call(Va(), n3);
        let b = Va();
        b.add(n3, { description: c2 });
        return n3;
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "meta", function(a2) {
      return function(c2) {
        var b = Va();
        if (c2 === void 0) return b.get(a2);
        var d = xa(a2, void 0);
        b.add(d, c2);
        return d;
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "refine", function(a2) {
      return function() {
        let b = arguments[0], l3 = arguments[1];
        l3 = ca("custom", l3);
        l3.fn = b;
        l3.check = "custom";
        return fa(a2, new Ra(l3));
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "superRefine", function(a2) {
      return function(f3, h3) {
        return fa(a2, ub(function(o3) {
          var n3 = this;
          o3.addIssue = function(w2) {
            if ("string" == typeof w2) {
              var b = o3.value;
              w2 = { message: w2, code: "custom", input: b, inst: n3, path: [] };
            } else {
              !w2.fatal || (w2.continue = false);
              w2.code === void 0 && (w2.code = "custom");
              true === "input" in w2 || (w2.input = o3.value);
              w2.inst === void 0 && (w2.inst = n3);
              w2.continue === void 0 && (w2.continue = true);
            }
            var x2 = o3.issues;
            x2.push(w2);
          };
          return f3(o3.value, o3);
        }, h3));
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "overwrite", function(a2) {
      return function(x2) {
        return fa(a2, ea("overwrite", { transform: x2 }));
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "check", function(a2) {
      return function() {
        var g3 = arguments.length;
        var d = a2, h3 = 0, I2, b;
        while (h3 < g3) {
          I2 = arguments[h3];
          "function" == typeof I2 ? d = fa(d, ub(I2, void 0)) : X(I2) && !(I2._zod === void 0) && (d = fa(d, I2));
          h3 = h3 + 1;
        }
        return d;
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "with", function(a2) {
      return a2.check;
    }, p2);
    q2 = Y.prototype;
    c(q2, "clone", function(a2) {
      return function(c2) {
        return xa(a2, c2);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "description", function(a2) {
      var c2 = Va().get.call(Va(), a2);
      if (c2 == null) return;
      return c2.description;
    }, p2);
    q2 = Y.prototype;
    c(q2, "isOptional", function(a2) {
      return function() {
        return Yb(a2, void 0, void 0).success;
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "isNullable", function(a2) {
      return function() {
        return Yb(a2, null, void 0).success;
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "apply", function(a2) {
      return function(x2) {
        var b = [];
        b.push(a2);
        var g3 = arguments.length;
        var r2 = 1, d;
        while (r2 < g3) {
          d = arguments[r2];
          b.push(d);
          r2 = r2 + 1;
        }
        return x2.apply(void 0, b);
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "register", function(a2) {
      return function(b, f3) {
        b.add.call(b, a2, f3);
        return a2;
      };
    }, p2);
    q2 = Y.prototype;
    c(q2, "~standard", function(a2) {
      return { version: 1, vendor: "zod", validate: function(m3) {
        try {
          var Lh = Yb(a2, m3, void 0);
          if (Lh.success) return { value: Lh.data };
          return { issues: Lh.error.issues };
        } catch {
          return Zb(a2, m3, void 0).then(function(E2) {
            if (E2.success) return { value: E2.data };
            return { issues: E2.error.issues };
          });
        }
      }, jsonSchema: { input: function() {
        a2.constructor;
        if (X(a2._zod) && "function" == typeof a2.toJSONSchema) {
          var s2 = arguments[0];
          var d;
          s2 = s2 == null ? {} : ia({}, s2);
          s2.io = "input";
          return a2.toJSONSchema(s2);
        }
        return { type: da(a2).typeName };
      }, output: function() {
        if ("function" == typeof a2.toJSONSchema) {
          var s2 = arguments[0];
          var d;
          s2 = s2 == null ? {} : ia({}, s2);
          s2.io = "output";
          return a2.toJSONSchema(s2);
        }
        return { type: da(a2).typeName };
      } } };
    }, false);
    q2 = Y.prototype;
    c(q2, "toJSONSchema", function(a2) {
      return function() {
        return { type: da(a2).typeName };
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "format", function(a2) {
      var b = a2._zod;
      var z2 = b.bag;
      if (z2.format === void 0) return null;
      return z2.format;
    }, p2);
    q2 = Z.prototype;
    c(q2, "minLength", function(a2) {
      var b = a2._zod;
      var z2 = b.bag;
      if (z2.minimum === void 0) return null;
      return z2.minimum;
    }, p2);
    q2 = Z.prototype;
    c(q2, "maxLength", function(a2) {
      var b = a2._zod;
      var z2 = b.bag;
      if (z2.maximum === void 0) return null;
      return z2.maximum;
    }, p2);
  };
  We = function() {
    let q2 = Z.prototype, p2 = true;
    c(q2, "min", function(a2) {
      return function(c2, e2) {
        let b = { minimum: c2 };
        return h2(a2, "min_length", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "max", function(a2) {
      return function(c2, e2) {
        let b = { maximum: c2 };
        return h2(a2, "max_length", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "length", function(a2) {
      return function(c2, e2) {
        let b = { length: c2 };
        return h2(a2, "length_equals", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "nonempty", function(a2) {
      return function(e2) {
        return h2(a2, "min_length", { minimum: 1 }, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "includes", function(a2) {
      return function(e2, f3) {
        var Q2 = { includes: e2 };
        var b;
        X(f3) && "number" == typeof f3.position && (Q2.position = f3.position);
        return h2(a2, "includes", Q2, f3);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "startsWith", function(a2) {
      return function(c2, e2) {
        let b = { prefix: c2 };
        return h2(a2, "starts_with", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "endsWith", function(a2) {
      return function(c2, e2) {
        let b = { suffix: c2 };
        return h2(a2, "ends_with", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "regex", function(a2) {
      return function(c2, e2) {
        let b = { format: "regex", pattern: c2 };
        return h2(a2, "string_format", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "email", function(a2) {
      return function(e2) {
        let b = Gc;
        return o2(a2, "email", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "url", function(a2) {
      return function(n3) {
        var Q2 = { format: "url" };
        var b;
        X(n3) && !(n3.hostname === void 0) && (Q2.hostname = n3.hostname);
        X(n3) && !(n3.protocol === void 0) && (Q2.protocol = n3.protocol);
        X(n3) && !(n3.normalize === void 0) && (Q2.normalize = n3.normalize);
        return h2(a2, "string_format", Q2, n3);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "uuid", function(a2) {
      return function(e2) {
        let b = hb;
        return o2(a2, "uuid", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "uuidv4", function(a2) {
      return function(e2) {
        let b = hb;
        return o2(a2, "uuid", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "uuidv6", function(a2) {
      return function(e2) {
        let b = hb;
        return o2(a2, "uuid", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "uuidv7", function(a2) {
      return function(e2) {
        let b = hb;
        return o2(a2, "uuid", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "guid", function(a2) {
      return function(e2) {
        let b = Hc;
        return o2(a2, "guid", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "cuid", function(a2) {
      return function(e2) {
        let b = de;
        return o2(a2, "cuid", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "cuid2", function(a2) {
      return function(e2) {
        let b = ee;
        return o2(a2, "cuid2", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "ulid", function(a2) {
      return function(e2) {
        let b = Ic;
        return o2(a2, "ulid", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "nanoid", function(a2) {
      return function(e2) {
        let b = Jc;
        return o2(a2, "nanoid", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "base64", function(a2) {
      return function(e2) {
        let b = new globalThis.RegExp("^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$");
        return o2(a2, "base64", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "base64url", function(a2) {
      return function(e2) {
        let b = je;
        return o2(a2, "base64url", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "ipv4", function(a2) {
      return function(e2) {
        let b = Kc;
        return o2(a2, "ipv4", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "ipv6", function(a2) {
      return function(e2) {
        let b = Lc;
        return o2(a2, "ipv6", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "cidrv4", function(a2) {
      return function(e2) {
        let b = ke;
        return o2(a2, "cidrv4", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "cidrv6", function(a2) {
      return function(e2) {
        let b = le;
        return o2(a2, "cidrv6", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "jwt", function(a2) {
      return function(k3) {
        var Q2 = { format: "jwt" };
        var b;
        X(k3) && "string" == typeof k3.alg && (Q2.alg = k3.alg);
        return h2(a2, "string_format", Q2, k3);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "emoji", function(a2) {
      return function(e2) {
        let b = ie;
        return o2(a2, "emoji", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "e164", function(a2) {
      return function(e2) {
        let b = he;
        return o2(a2, "e164", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "mac", function(a2) {
      return function(e2) {
        let b;
        b = X(e2) && "string" == typeof e2.delimiter ? e2.delimiter + "" : ":";
        b = $(tf + b + nf + b + sf, lf);
        return o2(a2, "mac", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "creditCard", function(a2) {
      return function(e2) {
        let b = Nc;
        return o2(a2, "credit_card", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "xid", function(a2) {
      return function(e2) {
        let b = fe;
        return o2(a2, "xid", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "ksuid", function(a2) {
      return function(e2) {
        let b = ge;
        return o2(a2, "ksuid", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "datetime", function(a2) {
      return function(g3) {
        return o2(a2, "datetime", Fd(g3), g3);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "date", function(a2) {
      return function(c2) {
        let b = $("^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$", lf);
        return o2(a2, "date", b, c2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "time", function(a2) {
      return function(g3) {
        return o2(a2, "time", Ed(g3), g3);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "duration", function(a2) {
      return function(e2) {
        let b = Mc;
        return o2(a2, "duration", b, e2);
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "trim", function(a2) {
      return function() {
        return fa(a2, ea("overwrite", { transform: function(F2) {
          return F2.trim();
        } }));
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "toLowerCase", function(a2) {
      return function() {
        return fa(a2, ea("overwrite", { transform: function(F2) {
          return F2.toLowerCase();
        } }));
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "toUpperCase", function(a2) {
      return function() {
        return fa(a2, ea("overwrite", { transform: function(F2) {
          return F2.toUpperCase();
        } }));
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "lowercase", function(a2) {
      return function() {
        return fa(a2, ea("lowercase", {}));
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "uppercase", function(a2) {
      return function() {
        return fa(a2, ea("uppercase", {}));
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "normalize", function(a2) {
      return function(k3) {
        var c2 = "NFC";
        "string" == typeof k3 && (c2 = k3);
        return fa(a2, ea("overwrite", { transform: function(F2) {
          return F2.normalize(c2);
        } }));
      };
    }, p2);
    q2 = Z.prototype;
    c(q2, "slugify", function(a2) {
      return function() {
        return fa(a2, ea("overwrite", { transform: function(F2) {
          return F2.toLowerCase().trim().replace($("[^\\w\\s-]", "g"), lf).replace($("[\\s_-]+", "g"), "-").replace($("^-+|-+$", "g"), lf);
        } }));
      };
    }, p2);
  };
  Xe = function() {
    let q2 = ha.prototype, p2 = true;
    c(q2, "min", function(a2) {
      return function() {
        let b = arguments[0];
        b = { value: b, inclusive: true, origin: "number" };
        return h2(a2, "greater_than", b, arguments[1]);
      };
    }, p2);
    q2 = ha.prototype;
    c(q2, "max", function(a2) {
      return function() {
        let b = arguments[0];
        b = { value: b, inclusive: true, origin: "number" };
        return h2(a2, "less_than", b, arguments[1]);
      };
    }, p2);
    q2 = ha.prototype;
    c(q2, "gt", function(a2) {
      return function() {
        let b = arguments[0];
        b = { value: b, inclusive: false, origin: "number" };
        return h2(a2, "greater_than", b, arguments[1]);
      };
    }, p2);
    q2 = ha.prototype;
    c(q2, "gte", function(a2) {
      return a2.min;
    }, p2);
    q2 = ha.prototype;
    c(q2, "lt", function(a2) {
      return function() {
        let b = arguments[0];
        b = { value: b, inclusive: false, origin: "number" };
        return h2(a2, "less_than", b, arguments[1]);
      };
    }, p2);
    q2 = ha.prototype;
    c(q2, "lte", function(a2) {
      return a2.max;
    }, p2);
    q2 = ha.prototype;
    c(q2, "int", function(a2) {
      return function() {
        return fa(a2, ea("number_format", { format: "int" }));
      };
    }, p2);
    q2 = ha.prototype;
    c(q2, "positive", function(a2) {
      return function() {
        return fa(a2, ea("greater_than", { value: 0, inclusive: false, origin: "number" }));
      };
    }, p2);
    q2 = ha.prototype;
    c(q2, "negative", function(a2) {
      return function() {
        return fa(a2, ea("less_than", { value: 0, inclusive: false, origin: "number" }));
      };
    }, p2);
    q2 = ha.prototype;
    c(q2, "nonnegative", function(a2) {
      return function() {
        return fa(a2, ea("greater_than", { value: 0, inclusive: true, origin: "number" }));
      };
    }, p2);
    q2 = ha.prototype;
    c(q2, "nonpositive", function(a2) {
      return function() {
        return fa(a2, ea("less_than", { value: 0, inclusive: true, origin: "number" }));
      };
    }, p2);
    q2 = ha.prototype;
    c(q2, "multipleOf", function(a2) {
      return function(c2, e2) {
        let b = { value: c2 };
        return h2(a2, "multiple_of", b, e2);
      };
    }, p2);
    q2 = ha.prototype;
    c(q2, "step", function(a2) {
      return a2.multipleOf;
    }, p2);
    q2 = ha.prototype;
    c(q2, "finite", function(a2) {
      return function() {
        return a2;
      };
    }, p2);
    q2 = ha.prototype;
    c(q2, "safe", function(a2) {
      return function() {
        return fa(a2, ea("number_format", { format: "safeint" }));
      };
    }, p2);
    q2 = ha.prototype;
    c(q2, "format", function(a2) {
      var b = a2._zod;
      var z2 = b.bag;
      if (z2.format === void 0) return null;
      return z2.format;
    }, p2);
    q2 = ha.prototype;
    c(q2, "minValue", function(a2) {
      var d = a2._zod;
      var z2 = d.bag;
      var e2 = globalThis.Math;
      var c2 = Number.NEGATIVE_INFINITY;
      var b = z2.minimum;
      b === void 0 && (b = c2);
      a2 = z2.exclusiveMinimum;
      a2 === void 0 || (c2 = a2);
      return e2.max(b, c2);
    }, p2);
    q2 = ha.prototype;
    c(q2, "maxValue", function(a2) {
      var d = a2._zod;
      var z2 = d.bag;
      var e2 = globalThis.Math;
      var c2 = Number.POSITIVE_INFINITY;
      var b = z2.maximum;
      b === void 0 && (b = c2);
      a2 = z2.exclusiveMaximum;
      a2 === void 0 || (c2 = a2);
      return e2.min(b, c2);
    }, p2);
    q2 = ha.prototype;
    c(q2, "isInt", function(a2) {
      var c2 = a2._zod;
      var z2 = c2.bag;
      c2 = "string" == typeof z2.format ? z2.format + "" : lf;
      c2 = c2.includes("int");
      c2 || (a2 = z2.multipleOf, a2 === void 0 && (a2 = 0.5), true === Number.isSafeInteger(a2) && (c2 = true));
      return c2;
    }, p2);
    q2 = ha.prototype;
    c(q2, "isFinite", function(a2) {
      return true;
    }, p2);
  };
  Ye = function() {
    let q2 = oa.prototype, p2 = true;
    c(q2, "min", function(a2) {
      return function(c2) {
        return fa(a2, ea("greater_than", { value: c2, inclusive: true, origin: "bigint" }));
      };
    }, p2);
    q2 = oa.prototype;
    c(q2, "max", function(a2) {
      return function(c2) {
        return fa(a2, ea("less_than", { value: c2, inclusive: true, origin: "bigint" }));
      };
    }, p2);
    q2 = oa.prototype;
    c(q2, "gt", function(a2) {
      return function(c2) {
        return fa(a2, ea("greater_than", { value: c2, inclusive: false, origin: "bigint" }));
      };
    }, p2);
    q2 = oa.prototype;
    c(q2, "gte", function(a2) {
      return a2.min;
    }, p2);
    q2 = oa.prototype;
    c(q2, "lt", function(a2) {
      return function(c2) {
        return fa(a2, ea("less_than", { value: c2, inclusive: false, origin: "bigint" }));
      };
    }, p2);
    q2 = oa.prototype;
    c(q2, "lte", function(a2) {
      return a2.max;
    }, p2);
    q2 = oa.prototype;
    c(q2, "positive", function(a2) {
      return function() {
        return fa(a2, ea("greater_than", { value: BigInt(0), inclusive: false, origin: "bigint" }));
      };
    }, p2);
    q2 = oa.prototype;
    c(q2, "negative", function(a2) {
      return function() {
        return fa(a2, ea("less_than", { value: BigInt(0), inclusive: false, origin: "bigint" }));
      };
    }, p2);
    q2 = oa.prototype;
    c(q2, "nonnegative", function(a2) {
      return function() {
        return fa(a2, ea("greater_than", { value: BigInt(0), inclusive: true, origin: "bigint" }));
      };
    }, p2);
    q2 = oa.prototype;
    c(q2, "nonpositive", function(a2) {
      return function() {
        return fa(a2, ea("less_than", { value: BigInt(0), inclusive: true, origin: "bigint" }));
      };
    }, p2);
    q2 = oa.prototype;
    c(q2, "multipleOf", function(a2) {
      return function(c2, e2) {
        let b = { value: c2 };
        return h2(a2, "multiple_of", b, e2);
      };
    }, p2);
    q2 = oa.prototype;
    c(q2, "format", function(a2) {
      var b = a2._zod;
      var z2 = b.bag;
      if (z2.format === void 0) return null;
      return z2.format;
    }, p2);
    q2 = oa.prototype;
    c(q2, "minValue", function(a2) {
      var b = a2._zod;
      var z2 = b.bag;
      if (z2.minimum === void 0) return null;
      return z2.minimum;
    }, p2);
    q2 = oa.prototype;
    c(q2, "maxValue", function(a2) {
      var b = a2._zod;
      var z2 = b.bag;
      if (z2.maximum === void 0) return null;
      return z2.maximum;
    }, p2);
  };
  Ze = function() {
    let p2 = Ba.prototype;
    c(p2, "min", function(a2) {
      return function(c2) {
        return fa(a2, ea("greater_than", { value: c2, inclusive: true, origin: "date" }));
      };
    }, true);
    p2 = Ba.prototype;
    c(p2, "max", function(a2) {
      return function(c2) {
        return fa(a2, ea("less_than", { value: c2, inclusive: true, origin: "date" }));
      };
    }, true);
    p2 = Ba.prototype;
    c(p2, "minValue", function(a2) {
      var d = a2._zod;
      var z2 = d.bag;
      var e2 = globalThis.Math;
      var c2 = Number.NEGATIVE_INFINITY;
      var b = z2.minimum;
      b === void 0 && (b = c2);
      a2 = z2.exclusiveMinimum;
      a2 === void 0 || (c2 = a2);
      return e2.max(b, c2);
    }, true);
    p2 = Ba.prototype;
    c(p2, "maxValue", function(a2) {
      var d = a2._zod;
      var z2 = d.bag;
      var e2 = globalThis.Math;
      var c2 = Number.POSITIVE_INFINITY;
      var b = z2.maximum;
      b === void 0 && (b = c2);
      a2 = z2.exclusiveMaximum;
      a2 === void 0 || (c2 = a2);
      return e2.min(b, c2);
    }, true);
    p2 = Ba.prototype;
    c(p2, "minDate", function(a2) {
      var c2 = a2.minValue;
      if (c2 == null || !La(c2)) return null;
      return new Date(c2);
    }, true);
    p2 = Ba.prototype;
    c(p2, "maxDate", function(a2) {
      var c2 = a2.maxValue;
      if (c2 == null || !La(c2)) return null;
      return new Date(c2);
    }, true);
  };
  Cc = function(R2) {
    c(R2, "min", function(a2) {
      return function(c2, e2) {
        let b = { minimum: c2 };
        return h2(a2, "min_size", b, e2);
      };
    }, true);
    c(R2, "max", function(a2) {
      return function(c2, e2) {
        let b = { maximum: c2 };
        return h2(a2, "max_size", b, e2);
      };
    }, true);
    c(R2, "size", function(a2) {
      return function(f3) {
        return fa(a2, ea("size_equals", { size: f3 }));
      };
    }, true);
    c(R2, "nonempty", function(a2) {
      return function() {
        return fa(a2, ea("min_size", { minimum: 1 }));
      };
    }, true);
  };
  _e = function() {
    let d = ma.prototype, b = true;
    ba(d, "shape", { configurable: b, enumerable: false, get: function() {
      let b2 = this._zod, c2 = b2.def;
      return c2.shape;
    } });
    d = ma.prototype;
    c(d, "strict", function(a2) {
      return function() {
        return xa(a2, { catchall: new ib({ type: "never" }) });
      };
    }, b);
    d = ma.prototype;
    c(d, "passthrough", function(a2) {
      return function() {
        return xa(a2, { catchall: new Ia({ type: "unknown" }) });
      };
    }, b);
    d = ma.prototype;
    c(d, "strip", function(a2) {
      return function() {
        let b2 = {}, l3 = ia(b2, da(a2).def);
        l3.catchall = void 0;
        return new ma(l3);
      };
    }, b);
    d = ma.prototype;
    c(d, "loose", function(a2) {
      return a2.passthrough;
    }, b);
    d = ma.prototype;
    c(d, "catchall", function(a2) {
      return function(c2) {
        return xa(a2, { catchall: c2 });
      };
    }, b);
    d = ma.prototype;
    c(d, "extend", function(a2) {
      return function(b2) {
        if (k2(a2)) {
          var c2 = j2(a2);
          var w2 = pa(b2);
          var g3 = w2.length;
          var h3 = 0, d2;
          while (h3 < g3) {
            d2 = w2[h3];
            if (!(ga.getOwnPropertyDescriptor(c2, d2) === void 0)) throw na("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
            h3 = h3 + 1;
          }
        }
        return xa(a2, m2(a2, b2));
      };
    }, b);
    d = ma.prototype;
    c(d, "safeExtend", function(a2) {
      return function(c2) {
        return xa(a2, m2(a2, c2));
      };
    }, b);
    d = ma.prototype;
    c(d, "merge", function(a2) {
      return function(i3) {
        if (k2(a2)) throw na(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
        var h3 = m2(a2, da(i3).def.shape);
        ba(h3, "catchall", { configurable: true, enumerable: true, get: function() {
          return da(i3).def.catchall;
        } });
        var j3 = da(i3).def.checks;
        Array.isArray(j3) ? h3.checks = j3 : h3.checks = [];
        return xa(a2, h3);
      };
    }, b);
    d = ma.prototype;
    c(d, "pick", function(a2) {
      return function(i3) {
        if (k2(a2)) throw na(".pick() cannot be used on object schemas containing refinements");
        var m3 = j2(a2);
        l2(m3, i3);
        var o3 = {};
        var Jf2 = Reflect.ownKeys(i3);
        var Kf2 = Jf2.length;
        var h3 = 0, n3, If2;
        while (h3 < Kf2) {
          n3 = Jf2[h3];
          "string" == typeof n3 && !!i3[n3] && Ca(o3, n3, m3[n3]);
          h3 = h3 + 1;
        }
        n3 = { checks: [] };
        ba(n3, "shape", { configurable: true, enumerable: true, get: function() {
          ba(this, "shape", { value: o3, writable: true, enumerable: true, configurable: true });
          return o3;
        } });
        return xa(a2, n3);
      };
    }, b);
    d = ma.prototype;
    c(d, "omit", function(a2) {
      return function(i3) {
        if (k2(a2)) throw na(".omit() cannot be used on object schemas containing refinements");
        var h3 = j2(a2);
        l2(h3, i3);
        var n3 = {};
        qb(n3, h3);
        var m3 = Reflect.ownKeys(i3);
        var If2 = m3.length;
        h3 = 0;
        while (h3 < If2) {
          var o3;
          "string" == typeof m3[h3] && !!i3[m3[h3]] && (o3 = m3[h3], Reflect.deleteProperty(n3, o3));
          h3 = h3 + 1;
        }
        h3 = { checks: [] };
        ba(h3, "shape", { configurable: true, enumerable: true, get: function() {
          ba(this, "shape", { value: n3, writable: true, enumerable: true, configurable: true });
          return n3;
        } });
        return xa(a2, h3);
      };
    }, b);
    d = ma.prototype;
    c(d, "partial", function(a2) {
      return function(f3) {
        if (k2(a2)) throw na(jf);
        return n2(a2, f3, true, false);
      };
    }, b);
    d = ma.prototype;
    c(d, "exactPartial", function(a2) {
      return function(b2) {
        if (k2(a2)) throw na(hf);
        return n2(a2, b2, true, true);
      };
    }, b);
    d = ma.prototype;
    c(d, "required", function(a2) {
      return function(b2) {
        return n2(a2, b2, false, false);
      };
    }, b);
    d = ma.prototype;
    c(d, "keyof", function(a2) {
      return function() {
        return Gd(pa(j2(a2)), void 0);
      };
    }, b);
  };
  $e = function() {
    let d = ab.prototype, b = true;
    c(d, "unwrap", function(a2) {
      return function() {
        return da(a2).def.innerType;
      };
    }, b);
    d = kc.prototype;
    c(d, "unwrap", function(a2) {
      return function() {
        return da(a2).def.innerType;
      };
    }, b);
    d = bb.prototype;
    c(d, "unwrap", function(a2) {
      return function() {
        return da(a2).def.innerType;
      };
    }, b);
    d = lc.prototype;
    c(d, "unwrap", function(a2) {
      return function() {
        return da(a2).def.innerType;
      };
    }, b);
    d = ya.prototype;
    c(d, "unwrap", function(a2) {
      return function() {
        return da(a2).def.element;
      };
    }, b);
    d = Gb.prototype;
    c(d, "unwrap", function(a2) {
      return function() {
        return da(a2).def.innerType;
      };
    }, b);
    d = Ib.prototype;
    c(d, "unwrap", function(a2) {
      return function() {
        return da(a2).def.innerType;
      };
    }, b);
    d = Hb.prototype;
    c(d, "unwrap", function(a2) {
      return function() {
        return da(a2).def.innerType;
      };
    }, b);
    d = lb.prototype;
    c(d, "unwrap", function(a2) {
      return function() {
        return da(a2).def.getter();
      };
    }, b);
    d = Jb.prototype;
    c(d, "unwrap", function(a2) {
      return function() {
        return da(a2).def.innerType;
      };
    }, b);
  };
  af = function() {
    Ua();
    Ge();
    Ve();
    We();
    Xe();
    Ye();
    Ze();
    Cc(jb.prototype);
    Cc(kb.prototype);
    Cc(ob.prototype);
    var b = ob.prototype;
    c(b, "mime", function(a2) {
      return function() {
        var b2 = arguments[0];
        if (!Array.isArray(b2)) {
          var c2 = [];
          c2.push(b2);
          b2 = c2;
        }
        b2 = { mime: b2 };
        return h2(a2, "mime_type", b2, arguments[1]);
      };
    }, true);
    b = ya.prototype;
    c(b, "min", function(a2) {
      return function(c2, e2) {
        let b2 = { minimum: c2 };
        return h2(a2, "min_length", b2, e2);
      };
    }, true);
    b = ya.prototype;
    c(b, "max", function(a2) {
      return function(c2, e2) {
        let b2 = { maximum: c2 };
        return h2(a2, "max_length", b2, e2);
      };
    }, true);
    b = ya.prototype;
    c(b, "length", function(a2) {
      return function(c2, e2) {
        let b2 = { length: c2 };
        return h2(a2, "length_equals", b2, e2);
      };
    }, true);
    b = ya.prototype;
    c(b, "nonempty", function(a2) {
      return function(e2) {
        return h2(a2, "min_length", { minimum: 1 }, e2);
      };
    }, true);
    _e();
    b = Ja.prototype;
    c(b, "extract", function(a2) {
      return function(w2, u2) {
        var P2 = da(a2);
        var d = P2.def.entries;
        var o3 = {};
        var g3 = w2.length;
        var O2 = 0, b2;
        while (O2 < g3) {
          b2 = w2[O2];
          if (!Da.call(d, b2)) throw na("Key " + w2[O2] + rf);
          b2 = w2[O2];
          Ca(o3, b2, d[w2[O2]]);
          O2 = O2 + 1;
        }
        O2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(P2.def));
        ia(O2, Pa(u2));
        O2.entries = o3;
        O2.checks = [];
        return new Ja(O2);
      };
    }, true);
    b = Ja.prototype;
    c(b, "exclude", function(a2) {
      return function(w2, u2) {
        var P2 = da(a2);
        var T2 = P2.def.entries;
        var d = ga.defineProperties({}, ga.getOwnPropertyDescriptors(T2));
        var g3 = w2.length;
        T2 = 0;
        while (T2 < g3) {
          var b2 = P2.def.entries;
          var c2 = w2[T2];
          if (!Da.call(b2, c2)) throw na("Key " + w2[T2] + rf);
          b2 = w2[T2];
          Reflect.deleteProperty(d, b2);
          T2 = T2 + 1;
        }
        T2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(P2.def));
        ia(T2, Pa(u2));
        T2.entries = d;
        T2.checks = [];
        return new Ja(T2);
      };
    }, true);
    $e();
    b = Sa.prototype;
    c(b, "implement", function(a2) {
      return function(x2) {
        if (!("function" == typeof x2)) throw na("implement() must be called with a function");
        var m3 = da(a2);
        var b2 = m3.def.input;
        return yc(x2, b2, m3.def.output, false);
      };
    }, true);
    b = Sa.prototype;
    c(b, "implementAsync", function(a2) {
      return function(x2) {
        if (!("function" == typeof x2)) throw na("implementAsync() must be called with a function");
        var m3 = da(a2);
        var b2 = m3.def.input;
        return yc(x2, b2, m3.def.output, true);
      };
    }, true);
    b = Sa.prototype;
    c(b, "input", function(a2) {
      return function() {
        var o3 = arguments[0];
        Array.isArray(o3) && (o3 = Bc(o3, arguments[1], void 0));
        return xa(a2, { input: o3 });
      };
    }, true);
    b = Sa.prototype;
    c(b, "output", function(a2) {
      return function(q2) {
        return xa(a2, { output: q2 });
      };
    }, true);
    e(ya, "ZodArray");
    e(Db, "ZodRecord");
    e(jb, "ZodMap");
    e(kb, "ZodSet");
    e(Ka, "ZodUnion");
    e(jc, "ZodDiscriminatedUnion");
    e(Eb, "ZodXor");
    e(Ea, "ZodPipe");
    e(nb, "ZodCodec");
    e(Kb, "ZodPreprocess");
    e(Ja, "ZodEnum");
    e(Cb, "ZodLiteral");
  };
})();
var ed;
var Qb;
var qc;
(function() {
  let a = (c, H2) => {
    if ("function" == typeof c) return c(H2);
    return H2.message;
  };
  let b = (c, n2, d) => {
    if (!Da.call(c, n2)) {
      var j2 = void 0;
      Ca(c, n2, d());
    }
    return c[n2];
  };
  ed = function(O2, c) {
    var d = {};
    var f2 = [];
    var t2 = O2.issues;
    var g2 = t2.length;
    var h2 = 0, H2, e;
    while (h2 < g2) {
      H2 = t2[h2];
      e = a(c, H2);
      O2 = H2.path;
      Array.isArray(O2) && O2.length > 0 ? (H2 = O2[0], b(d, H2, function() {
        return [];
      }).push(e)) : f2.push(e);
      h2 = h2 + 1;
    }
    return { formErrors: f2, fieldErrors: d };
  };
  Qb = function(t2, c, d, e) {
    var g2 = t2.length;
    var h2 = 0, H2, i2, k2, j2, f2, l2, m2, n2;
    while (h2 < g2) {
      H2 = t2[h2];
      f2 = H2.code + "";
      if ("invalid_union" == f2 && Array.isArray(H2.errors) && H2.errors.length > 0) {
        i2 = H2.errors;
        j2 = i2.length;
        f2 = 0;
        while (f2 < j2) {
          l2 = c.concat(H2.path);
          Qb(i2[f2], l2, d, e);
          f2 = f2 + 1;
        }
      } else {
        if ("invalid_key" == f2 || "invalid_element" == f2) {
          f2 = c.concat(H2.path);
          Qb(H2.issues, f2, d, e);
        } else {
          i2 = c.concat(H2.path);
          if (!Array.isArray(i2) || 0 == i2.length) {
            d._errors.push(a(e, H2));
          } else {
            l2 = i2.length;
            k2 = d;
            f2 = 0;
            while (f2 < l2) {
              m2 = i2[f2];
              n2 = f2 == (l2 - 1 | 0);
              "_errors" === m2 ? (n2 && k2._errors.push(a(e, H2)), j2 = k2) : (j2 = b(k2, m2, function() {
                return { _errors: [] };
              }), n2 && j2._errors.push(a(e, H2)));
              k2 = j2;
              f2 = f2 + 1;
            }
          }
        }
      }
      h2 = h2 + 1;
    }
  };
  qc = function(t2, c, d, e) {
    var g2 = t2.length;
    var h2 = 0, H2, i2, k2, m2, f2, o2, n2, j2, l2;
    while (h2 < g2) {
      H2 = t2[h2];
      f2 = H2.code + "";
      if ("invalid_union" == f2 && Array.isArray(H2.errors) && H2.errors.length > 0) {
        k2 = H2.errors;
        i2 = k2.length;
        f2 = 0;
        while (f2 < i2) {
          m2 = k2[f2];
          qc(m2, c.concat(H2.path), d, e);
          f2 = f2 + 1;
        }
      } else {
        if ("invalid_key" == f2 || "invalid_element" == f2) {
          f2 = H2.issues;
          qc(f2, c.concat(H2.path), d, e);
        } else {
          l2 = c.concat(H2.path);
          if (!Array.isArray(l2) || 0 == l2.length) {
            d.errors.push(a(e, H2));
          } else {
            m2 = l2.length;
            f2 = d;
            k2 = 0;
            while (k2 < m2) {
              i2 = l2[k2];
              o2 = k2 == (m2 - 1 | 0);
              "string" == typeof i2 ? ((f2.properties === void 0 || f2.properties == null) && (f2.properties = {}), n2 = f2.properties, i2 = b(n2, i2, function() {
                return { errors: [] };
              }), f2 = i2) : ((f2.items === void 0 || f2.items == null) && (f2.items = []), j2 = f2.items, (j2[i2] === void 0 || j2[i2] == null) && (j2[i2] = { errors: [] }), i2 = j2[i2], f2 = i2);
              o2 && f2.errors.push(a(e, H2));
              k2 = k2 + 1;
            }
          }
        }
      }
      h2 = h2 + 1;
    }
  };
})();
var fd = (O2) => {
  var b = [];
  if (!Array.isArray(O2)) return lf;
  var g2 = O2.length;
  var h2 = 0, a, c;
  while (h2 < g2) {
    a = O2[h2];
    X(a) && !(a == null) && !(a.key === void 0) && (c = a.key, a = c);
    "number" == typeof a ? b.push("[" + a + "]") : "symbol" == typeof a ? b.push("[" + JSON.stringify(String(a), void 0, void 0) + "]") : (a = a + "", $("[^\\w$]", lf).test(a) ? b.push("[" + JSON.stringify(a, void 0, void 0) + "]") : (b.length > 0 && b.push("."), b.push(a)));
    h2 = h2 + 1;
  }
  return b.join(lf);
};
var Rb = () => {
  var c = globalThis;
  var a = c.__zod_globalConfig;
  var b;
  a == null && (a = {}, c.__zod_globalConfig = a);
  return a;
};
var He = () => {
  let b = {};
  ba(b, "value", { enumerable: true, configurable: true, get: function() {
    var b2 = Rb();
    var a2;
    if (X(b2) && !!b2.jitless) return false;
    try {
      new globalThis.Function(lf);
      return true;
    } catch {
      return false;
    }
  } });
  let a = { allowsEval: b, base64ToUint8Array: function(a2) {
    a2 = globalThis.atob(a2);
    var b2 = new globalThis.Uint8Array(a2.length);
    var g2 = a2.length;
    var h2 = 0;
    while (h2 < g2) {
      b2[h2] = a2.charCodeAt(h2);
      h2 = h2 + 1;
    }
    return b2;
  }, uint8ArrayToBase64: function(a2) {
    var g2 = a2.length;
    var b2 = lf, h2 = 0;
    while (h2 < g2) {
      b2 = b2 + globalThis.String.fromCharCode(a2[h2]) + "";
      h2 = h2 + 1;
    }
    return globalThis.btoa(b2);
  } };
  a.base64urlToUint8Array = function(c) {
    var b2 = c.replace($("-", "g"), "+").replace($("_", "g"), "/");
    c = b2.length % 4;
    if (0 != c) {
      var d = 4 - c;
      c = 0;
      while (c < d) {
        b2 = b2 + "=";
        c = c + 1;
      }
    }
    return a.base64ToUint8Array(b2);
  };
  a.uint8ArrayToBase64url = function(c) {
    return a.uint8ArrayToBase64(c).replace($("\\+", "g"), "-").replace($("/", "g"), "_").replace($("=", "g"), lf);
  };
  a.hexToUint8Array = function(g2) {
    var b2 = g2.replace($("^0x", lf), lf);
    var h2 = globalThis.Uint8Array;
    g2 = b2.length / 2 | 0;
    var c = new h2(g2);
    h2 = 0;
    while (h2 < g2) {
      var a2 = h2 * 2 | 0;
      c[h2] = Number.parseInt(b2.slice(a2, a2 + 2 | 0), 16);
      h2 = h2 + 1;
    }
    return c;
  };
  let q2 = function(a2) {
    var c = [];
    var g2 = a2.length;
    var h2 = 0, b2;
    while (h2 < g2) {
      b2 = a2[h2].toString(16) + "";
      1 == b2.length && (b2 = "0" + b2);
      c.push(b2);
      h2 = h2 + 1;
    }
    return c.join(lf);
  };
  a.uint8ArrayToHex = q2;
  return a;
};
var Ua = () => {
  var d = Rb();
  d.localeError === void 0 ? (Za = function(H2) {
    return dd(H2);
  }, d.localeError = Za) : Za = d.localeError;
  "function" == typeof d.customError && (Ab = d.customError);
};
var gd = (a, b) => {
  let c = { _map: a, _idmap: b, add: function(i2, d) {
    var e = a;
    e.set(i2, d);
    if (X(d) && !(d == null) && !(d.id === void 0)) {
      var n2 = b;
      var o2 = d.id;
      n2.set(o2, i2);
    }
    return i2;
  }, clear: function() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
    a = this._map;
    b = this._idmap;
    return this;
  }, remove: function(i2) {
    var d = a.get(i2);
    var q2;
    X(d) && !(d == null) && !(d.id === void 0) && (q2 = b, q2.delete(d.id));
    a.delete(i2);
  }, get: function(i2) {
    var e = a.get(i2);
    var c2 = void 0;
    var F2;
    X(i2) && X(i2._zod) && (F2 = i2._zod, c2 = F2.parent);
    if (!(c2 === void 0) && !(c2 == null)) {
      F2 = this.get(c2);
      var d = {};
      var G2;
      X(F2) && !(F2 == null) && ia(d, F2);
      var x2 = Reflect;
      x2.deleteProperty(d, "id");
      X(e) && !(e == null) && ia(d, e);
      if (0 == pa(d).length) return;
      return d;
    }
    return e;
  }, has: function(i2) {
    return !!a.has(i2);
  } };
  return c;
};
var Va = () => {
  var a = globalThis;
  var b;
  if (!(a.__zod_globalRegistry === void 0) && !(a.__zod_globalRegistry == null)) return _a = a.__zod_globalRegistry, _a;
  _a === void 0 && (b = /* @__PURE__ */ new WeakMap(), _a = gd(b, /* @__PURE__ */ new Map()), a.__zod_globalRegistry = _a);
  return _a;
};
var Ma = (f2) => {
  if (f2 == null) return false;
  return "backward" == f2.direction + "";
};
var Ie = (j2) => {
  if (Array.isArray(j2)) return j2.slice(0);
  if (qa(Map, j2)) return new Map(j2);
  if (qa(Set, j2)) return new Set(j2);
  if (X(j2) && !Array.isArray(j2) && !qa(Date, j2)) {
    var a = ga.getPrototypeOf(j2);
    if (a == null || a === ga.prototype) return ia({}, j2);
  }
  return j2;
};
var rc = (i2) => {
  var j2 = i2.def.defaultValue;
  "function" == typeof j2 && (j2 = j2());
  return Ie(j2);
};
var ub = (x2, s2) => {
  var Q2 = { check: "custom" };
  X(s2) && !(s2 == null) && ia(Q2, s2);
  s2 = ea("custom", Q2);
  Q2 = s2._zod;
  Q2.check = x2;
  return s2;
};
var xa = (k2, a) => {
  var P2 = da(k2);
  var l2 = P2.def;
  !(a === void 0) && X(a) && (l2 = {}, qb(l2, P2.def), qb(l2, a));
  l2 = new P2.ctor(l2);
  a === void 0 && (a = l2._zod, a.parent = k2);
  return l2;
};
var fa = (k2, a) => {
  var b = da(k2).def.checks;
  var c;
  b = b === void 0 || !Array.isArray(b) ? [] : b.slice(0);
  b.push(a);
  a = xa(k2, { checks: b });
  b = a._zod;
  b.parent = k2;
  return a;
};
var ka = (i2, n2) => va(i2.def[n2]);
var sc = (I2) => {
  if (X(I2) && !(I2._zod === void 0) && X(I2._zod) && !(I2._zod.def === void 0)) {
    var a = I2._zod;
    return a.def;
  }
  return X(I2) && !(I2.def === void 0) ? I2.def : I2;
};
var tc = (a) => {
  var b = 0, o2, c;
  while (29 == a.kind && b < 64) {
    o2 = void 0;
    X(a.handle) && X(a.handle._zod) && (c = a.handle._zod, o2 = c.innerType);
    if (o2 == null) {
      o2 = a.def.getter;
      if (!("function" == typeof o2)) break;
      o2 = o2();
    }
    o2 = va(o2);
    o2 ? (a = o2, b = b + 1 | 0) : b = 64;
  }
  return a;
};
var ta = (e, a, b) => {
  var K2 = {};
  "url" != a && "jwt" != a && "ipv6" != a && "cidrv6" != a && "template_literal" != a && (K2.origin = "string");
  K2.code = "invalid_format";
  K2.format = a;
  !(b === void 0) && X(b) && ia(K2, b);
  K2.continue === void 0 && (K2.continue = true);
  a = e.issues;
  a.push(K2);
};
var Sb = (e, h2, k2) => {
  var t2 = e.issues;
  var g2 = t2.length;
  while (h2 < g2) {
    e = t2[h2];
    e.inst === void 0 && (e = t2[h2], e.inst = k2);
    h2 = h2 + 1 | 0;
  }
};
var hd = (K2, e, y2, k2, N2, a) => {
  var b = e.issues;
  if (b.length != a) return;
  if (K2) return;
  K2 = [];
  Array.isArray(N2.path) && (K2 = N2.path.slice(0));
  K2 = { code: "custom", input: y2, inst: k2, path: K2, continue: !N2.abort };
  N2.params === void 0 || (K2.params = N2.params);
  y2 = e.issues;
  y2.push(K2);
};
var id = (u2) => {
  if (0 == u2.length) return true;
  if ($("\\s", lf).test(u2)) return false;
  var a = 0, h2 = 0;
  while (h2 < u2.length) {
    a = a + 1 | 0;
    4 == a && (a = 0);
    h2 = h2 + 1;
  }
  if (0 != a) return false;
  try {
    globalThis.atob(u2);
    return true;
  } catch {
    return false;
  }
};
var jd = (j2) => {
  if (!$("^[0-9a-fA-F:.]+$", lf).test(j2)) return false;
  try {
    new URL("http://[" + j2 + "]");
    return true;
  } catch {
    return false;
  }
};
var Tb = (e) => {
  var a = e.$pending;
  if (aa(a)) return Reflect.deleteProperty(e, "$pending"), a;
};
var Ub = (h2) => {
  if (h2.aborted) return true;
  var t2 = h2.issues;
  var g2 = t2.length;
  h2 = 0;
  while (h2 < g2) {
    var a = t2[h2];
    var b = a.continue;
    if (!(true === b)) return true;
    h2 = h2 + 1;
  }
  return false;
};
var ld = (e, h2, k2) => {
  var t2 = e.issues;
  var g2 = t2.length;
  while (h2 < g2) {
    e = t2[h2];
    e.schema === void 0 && (e = t2[h2], e.schema = k2);
    h2 = h2 + 1 | 0;
  }
};
var uc;
var Vb;
(function() {
  let h2 = (e) => {
    if (e.aborted) return true;
    var t2 = e.issues;
    var g2 = t2.length;
    e = 0;
    while (e < g2) {
      var a = t2[e];
      var b = a.continue;
      if (false === b) return true;
      e = e + 1;
    }
    return false;
  };
  let i2 = (e, a, N2) => {
    var b = !N2.abort;
    var t2 = e.issues;
    var g2 = t2.length;
    while (a < g2) {
      e = t2[a];
      e.continue = b;
      a = a + 1 | 0;
    }
  };
  uc = function(j2, k2, l2, m2) {
    var n2 = j2.def.checks;
    var I2, p2, N2, q2, o2;
    if (n2 === void 0 || !Array.isArray(n2)) return k2;
    p2 = n2.length;
    while (m2 < p2) {
      I2 = n2[m2];
      N2 = sc(I2);
      if ("function" == typeof N2.when) {
        if (h2(k2)) {
          m2 = m2 + 1 | 0;
          continue;
        }
        if (!N2.when(k2)) {
          m2 = m2 + 1 | 0;
          continue;
        }
      } else {
        if (Ub(k2)) {
          m2 = m2 + 1 | 0;
          continue;
        }
      }
      q2 = k2.issues;
      N2 = q2.length;
      kd(I2, k2, l2);
      m2 = m2 + 1 | 0;
      o2 = Tb(k2);
      if (aa(o2)) return o2.then(/* @__PURE__ */ ((a, b, c, d, e, f2) => function(l3) {
        let k3 = a.handle;
        Sb(b, e, d);
        ld(b, e, k3);
        return uc(a, b, c, f2);
      })(j2, k2, l2, I2, N2, m2));
      o2 = j2.handle;
      Sb(k2, N2, I2);
      ld(k2, N2, o2);
    }
    return k2;
  };
  Vb = function(j2, k2, l2) {
    if (k2.memo) return k2;
    Sb(k2, 0, j2.handle);
    if ("string" == typeof j2.def.check) {
      var o2 = k2.issues;
      var m2 = o2.length;
      kd(j2.handle, k2, l2);
      Sb(k2, m2, j2.handle);
      i2(k2, m2, j2.def);
      var n2 = Tb(k2);
      if (aa(n2)) return n2.then(function(c) {
        return uc(j2, k2, l2, 0);
      });
      if (j2.def.abort) {
        n2 = k2.issues;
        if (n2.length > m2) return k2;
      }
    }
    return uc(j2, k2, l2, 0);
  };
})();
var vc = (e) => {
  var A2 = e.$waits;
  var a;
  if (A2 === void 0 || !Array.isArray(A2)) return e;
  Reflect.deleteProperty(e, "$waits");
  if (0 == A2.length) return e;
  return Promise.all(A2).then(function(a2) {
    return e;
  });
};
var vb = (e, m2, a) => {
  if (aa(m2)) {
    var A2 = e.$waits;
    var b;
    (A2 === void 0 || !Array.isArray(A2)) && (A2 = [], e.$waits = A2);
    A2.push(m2.then(a));
  } else {
    a(m2);
  }
};
var Wb = (a, e, f2) => {
  var b = Tb(e);
  if (aa(b)) return b.then(function(c) {
    return Wb(a, e, f2);
  });
  b = vc(e);
  if (aa(b)) return b.then(function(o2) {
    sb(a) && _c(a, o2);
    if (!a.hasChecks) return o2;
    return Vb(a, o2, f2);
  });
  sb(a) && _c(a, e);
  if (!a.hasChecks) return e;
  return Vb(a, e, f2);
};
var wb;
var ra;
(function() {
  let a = (f2) => {
    if (!("number" == typeof f2)) return false;
    if (true === Number.isNaN(f2)) return false;
    if (!La(f2)) return false;
    return true;
  };
  let b = (f2) => {
    if (!("number" == typeof f2)) return false;
    return true === Number.isNaN(f2);
  };
  let c = (f2) => f2 === void 0 ? false : f2 == null;
  let d = (f2) => {
    if (!qa(Date, f2)) return false;
    if (true === Number.isNaN(f2.getTime())) return false;
    return true;
  };
  let e = (f2, g2) => {
    aa(g2) && (f2.$pending = g2);
  };
  let h2 = (i2, g2, q2) => {
    var B2 = tc(i2);
    var ok = g2.value;
    i2 = B2.kind;
    var r2;
    if (9 == i2 || 10 == i2) return;
    if (0 == i2) {
      if (B2.def.coerce) try {
        g2.value = String(ok);
        ok = g2.value;
      } catch {
      }
      if ("string" == typeof ok) return;
      sa(g2, "string", ok);
      return;
    }
    if (1 == i2) {
      if (B2.def.coerce) try {
        g2.value = Number(ok);
        ok = g2.value;
      } catch {
      }
      if (a(ok)) return;
      sa(g2, "number", ok);
      return;
    }
    if (2 == i2) {
      !B2.def.coerce || (g2.value = Boolean(ok));
      ok = g2.value;
      if ("boolean" == typeof ok) return;
      sa(g2, "boolean", ok);
      return;
    }
    if (3 == i2) {
      if (B2.def.coerce) try {
        g2.value = BigInt(ok);
      } catch {
        sa(g2, "bigint", ok);
        return;
      }
      ok = g2.value;
      if ("bigint" == typeof ok) return;
      sa(g2, "bigint", ok);
      return;
    }
    if (4 == i2) {
      if ("symbol" == typeof ok) return;
      sa(g2, "symbol", ok);
      return;
    }
    if (5 == i2) {
      if (B2.def.coerce) try {
        g2.value = new Date(ok);
        ok = g2.value;
      } catch {
      }
      if (d(ok)) return;
      sa(g2, "date", ok);
      return;
    }
    if (6 == i2) {
      if (b(ok)) return;
      sa(g2, "nan", ok);
      return;
    }
    if (7 == i2) {
      if (ok === void 0) return;
      sa(g2, "undefined", ok);
      return;
    }
    if (12 == i2) {
      if (ok === void 0) return;
      sa(g2, "void", ok);
      return;
    }
    if (8 == i2) {
      if (c(ok)) return;
      sa(g2, "null", ok);
      return;
    }
    if (11 == i2) {
      sa(g2, "never", ok);
      return;
    }
    if (13 == i2) {
      if (!(B2.values === void 0) && !!B2.values.has(ok)) return;
      q2 = Array.from(B2.values);
      i2 = ok;
      g2.issues.push({ code: "invalid_value", values: q2, input: i2 });
      return;
    }
    if (14 == i2) {
      if (!(B2.values === void 0) && !!B2.values.has(ok)) return;
      q2 = Array.from(B2.values);
      i2 = ok;
      g2.issues.push({ code: "invalid_value", values: q2, input: i2 });
      return;
    }
    if (23 == i2) {
      i2 = ka(B2, "innerType");
      if (B2.def.exact) {
        !i2 || e(g2, ra(i2, g2, q2));
        return;
      }
      if (ok === void 0) {
        !i2 || 2 == i2.optin && (i2 = ra(i2, g2, q2), aa(i2) ? g2.$pending = i2.then(function(o3) {
          nd(o3);
          return o3;
        }) : nd(g2));
        return;
      }
      !i2 || e(g2, ra(i2, g2, q2));
      return;
    }
    if (24 == i2) {
      if (ok === null) {
        g2.value = ok;
        return;
      }
      i2 = ka(B2, "innerType");
      !i2 || e(g2, ra(i2, g2, q2));
      return;
    }
    if (25 == i2 || 26 == i2) {
      r2 = ka(B2, "innerType");
      if (Ma(q2)) {
        !r2 || e(g2, ra(r2, g2, q2));
        return;
      }
      if (ok === void 0) {
        var Yg = rc(B2);
        g2.value = Yg;
        26 == i2 && r2 && e(g2, ra(r2, g2, q2));
        return;
      }
      if (r2) {
        q2 = ra(r2, g2, q2);
        if (aa(q2)) {
          var f2 = 0;
          25 == i2 && (f2 = 1);
          g2.$pending = q2.then(function(o3) {
            1 == f2 && o3.value === void 0 && (o3.value = rc(B2));
            return o3;
          });
          return;
        }
      }
      25 == i2 && g2.value === void 0 && (g2.value = rc(B2));
      return;
    }
    if (27 == i2) {
      i2 = ka(B2, "innerType");
      if (Ma(q2)) {
        !i2 || e(g2, ra(i2, g2, q2));
        return;
      }
      if (i2) {
        i2 = ra(i2, g2, q2);
        if (aa(i2)) {
          g2.$pending = i2.then(function(o3) {
            od(o3, B2, q2);
            return o3;
          });
          return;
        }
        od(g2, B2, q2);
      }
      return;
    }
    if (28 == i2) {
      i2 = ka(B2, "innerType");
      if (i2) {
        i2 = ra(i2, g2, q2);
        if (aa(i2)) {
          g2.$pending = i2.then(function(o3) {
            pd(o3);
            return o3;
          });
          return;
        }
      }
      pd(g2);
      return;
    }
    if (33 == i2) {
      if (!Ma(q2)) {
        i2 = ka(B2, "innerType");
        if (i2) {
          i2 = ra(i2, g2, q2);
          if (aa(i2)) {
            g2.$pending = i2.then(function(o3) {
              if (!o3.memo) {
                var f3 = ga.freeze(o3.value);
                o3.value = f3;
              }
              return o3;
            });
          } else {
            if (!g2.memo) {
              var Sh = ga.freeze(g2.value);
              g2.value = Sh;
            }
          }
        }
        return;
      }
      i2 = ka(B2, "innerType");
      !i2 || e(g2, ra(i2, g2, q2));
      return;
    }
    if (16 == i2) {
      Je(B2, g2, q2);
    } else {
      if (17 == i2) {
        j2(B2, g2, q2);
      } else {
        if (15 == i2) {
          Ke(B2, g2, q2);
        } else {
          if (18 == i2) {
            Le(B2, g2, q2);
          } else {
            if (21 == i2 || 38 == i2) {
              k2(B2, g2, q2);
            } else {
              if (22 == i2) {
                l2(B2, g2, q2);
              } else {
                if (19 == i2) {
                  m2(B2, g2, q2);
                } else {
                  if (20 == i2) {
                    n2(B2, g2, q2);
                  } else {
                    if (39 == i2) {
                      p2(B2, g2);
                    } else {
                      if (40 == i2) {
                        if (!("string" == typeof ok)) {
                          sa(g2, "string", ok);
                          return;
                        }
                        q2 = B2.handle._zod;
                        i2 = q2.pattern;
                        !(i2 === void 0) && !(i2 == null) && (i2.lastIndex = 0, i2.test(ok) || ta(g2, "template_literal", { pattern: i2.source }));
                      } else {
                        34 == i2 || (37 == i2 ? (i2 = ka(B2, "innerType"), !i2 || (B2 = wa(i2, ok, q2).issues, g2.value = 0 == B2.length)) : 35 == i2 && (i2 = globalThis.File, i2 === void 0 ? sa(g2, "file", ok) : qa(i2, ok) || sa(g2, "file", ok)));
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
  let j2 = (i2, r2, s2) => {
    var u2 = r2.value;
    if (!Array.isArray(u2)) {
      r2.issues.push(Aa("tuple", u2));
      return;
    }
    var f2 = i2.def.items;
    Array.isArray(f2) || (f2 = []);
    var g2 = u2.length;
    var v2 = f2.length;
    var t2 = rd(f2, true);
    var z2 = rd(f2, false);
    var y2 = ka(i2, "rest");
    if (!y2) {
      if (g2 < t2) {
        r2.issues.push($c(false, t2, u2));
        return;
      }
      g2 > v2 && r2.issues.push($c(true, v2, u2));
    }
    var q2 = cb(i2, r2, []);
    r2.value = q2;
    var w2 = [];
    var x2 = [];
    t2 = 0;
    while (t2 < v2) {
      w2.push(void 0);
      t2 = t2 + 1;
    }
    t2 = 0;
    while (t2 < v2) {
      var A2 = { i: 0 + t2 };
      var V2 = wa(va(f2[t2]), u2[t2], s2);
      aa(V2) ? x2.push(V2.then(/* @__PURE__ */ ((a2, b2) => function(G2) {
        a2[b2.i] = G2;
      })(w2, A2))) : w2[t2] = V2;
      t2 = t2 + 1;
    }
    if (g2 > v2 && y2) {
      while (t2 < g2) {
        V2 = { i: 0 + t2 };
        v2 = wa(y2, u2[t2], s2);
        aa(v2) ? x2.push(v2.then(/* @__PURE__ */ ((a2, b2, c2, d2) => function(G2) {
          Mb(b2, c2, d2.i, G2);
        })(i2, r2, q2, V2))) : Mb(r2, q2, V2.i, v2);
        t2 = t2 + 1 | 0;
      }
    }
    if (x2.length > 0) {
      r2.$pending = Promise.all(x2).then(function(b2) {
        ad(r2, f2, u2, w2, z2);
        return r2;
      });
      return;
    }
    ad(r2, f2, u2, w2, z2);
  };
  let k2 = (K2, i2, q2) => {
    var s2 = i2.value;
    var U2 = K2.def.options;
    Array.isArray(U2) || (U2 = []);
    var r2 = "string" == typeof K2.def.discriminator ? K2.def.discriminator + "" : lf;
    var w2 = U2.length;
    if (r2.length > 0) {
      if (!X(s2) || Array.isArray(s2)) {
        i2.issues.push(Aa("object", s2));
        return;
      }
      var u2 = ud(K2);
      var t2 = s2[r2];
      t2 = u2.get(t2);
      var v2;
      if (!(t2 === void 0) && !(t2 == null)) {
        q2 = Wa(da(t2), s2, q2);
        if (aa(q2)) {
          i2.$pending = q2.then(function(o3) {
            db(i2, o3);
            return i2;
          });
          return;
        }
        db(i2, q2);
        return;
      }
      if (!(!!K2.def.unionFallback || Ma(q2))) {
        K2 = { code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: r2, options: Array.from(u2.keys()), path: [] };
        tb(K2, r2);
        q2 = i2.issues;
        q2.push(K2);
        return;
      }
    }
    r2 = [];
    v2 = [];
    var x2 = [];
    t2 = 0;
    while (t2 < w2) {
      r2.push(void 0);
      t2 = t2 + 1;
    }
    t2 = 0;
    while (t2 < w2) {
      u2 = wa(va(U2[t2]), s2, q2);
      if (aa(u2)) {
        var V2 = { i: 0 + t2 };
        x2.push(u2.then(/* @__PURE__ */ ((a2, b2) => function(G2) {
          a2[b2.i] = G2;
        })(r2, V2)));
      } else {
        r2[t2] = u2;
        var y2 = u2.issues;
        if (0 == y2.length) {
          if (38 != K2.kind) {
            db(i2, u2);
            return;
          }
          v2.push(t2);
        }
      }
      t2 = t2 + 1;
    }
    if (x2.length > 0) {
      i2.$pending = Promise.all(x2).then(function(b2) {
        if (38 == K2.kind) {
          var c2 = [];
          var C2 = 0, d2, h3;
          while (C2 < w2) {
            b2 = r2[C2];
            !(b2 === void 0) && !(b2 == null) && 0 == b2.issues.length && c2.push(C2);
            C2 = C2 + 1;
          }
          if (1 == c2.length) return db(i2, r2[c2[0]]), i2;
        }
        bd(K2, i2, r2, q2);
        return i2;
      });
      return;
    }
    if (38 == K2.kind) {
      if (1 == v2.length) {
        i2.value = r2[v2[0]].value;
        return;
      }
      if (0 == v2.length) {
        v2 = [];
        s2 = 0;
        while (s2 < w2) {
          t2 = va(U2[s2]);
          !t2 || (K2 = t2);
          t2 = r2[s2];
          u2 = t2.issues;
          x2 = [];
          y2 = u2.length;
          t2 = 0;
          while (t2 < y2) {
            x2.push(Ta(u2[t2], K2, q2));
            t2 = t2 + 1;
          }
          v2.push(x2);
          s2 = s2 + 1;
        }
        i2.issues.push({ code: "invalid_union", errors: v2, path: [] });
        return;
      }
      i2.issues.push({ code: "invalid_union", errors: [], inclusive: false, matches: v2, path: [] });
      return;
    }
    bd(K2, i2, r2, q2);
  };
  let l2 = (i2, g2, f2) => {
    var r2 = ka(i2, "left");
    var q2 = ka(i2, "right");
    if (!r2 || !q2) return;
    i2 = wa(r2, g2.value, f2);
    q2 = wa(q2, g2.value, f2);
    if (aa(i2) || aa(q2)) {
      f2 = [];
      f2.push(Promise.resolve(i2));
      f2.push(Promise.resolve(q2));
      g2.$pending = Promise.all(f2).then(function(a2) {
        let b2 = a2[0];
        vd(g2, b2, a2[1]);
        return g2;
      });
      return;
    }
    vd(g2, i2, q2);
  };
  let m2 = (i2, g2, f2) => {
    var t2 = g2.value;
    if (!qa(Map, t2)) {
      g2.issues.push(Aa("map", t2));
      return;
    }
    var q2 = cb(i2, g2, /* @__PURE__ */ new Map());
    var w2 = [];
    var A2 = t2.entries();
    var v2 = A2.next();
    while (!v2.done) {
      var x2 = v2.value;
      var u2 = x2[0];
      var y2 = x2[1];
      var r2 = { value: u2, issues: [] };
      var s2 = { value: y2, issues: [] };
      var z2 = ka(i2, "keyType");
      !z2 || (r2 = wa(z2, u2, f2));
      v2 = ka(i2, "valueType");
      !v2 || (s2 = wa(v2, y2, f2));
      aa(r2) || aa(s2) ? (v2 = [], v2.push(Promise.resolve(r2)), v2.push(Promise.resolve(s2)), w2.push(Promise.all(v2).then(/* @__PURE__ */ ((a2, b2, c2, d2, e2) => function(n3) {
        let r3 = n3[0];
        yd(r3, n3[1], a2, e2, c2, b2);
        let p3 = n3[0], m3 = p3.value, l3 = n3[1].value;
        d2.set(m3, l3);
      })(g2, f2, t2, q2, u2)))) : (yd(r2, s2, g2, u2, t2, f2), q2.set(r2.value, s2.value));
      v2 = A2.next();
    }
    g2.value = q2;
    w2.length > 0 && (g2.$pending = Promise.all(w2).then(function(a2) {
      g2.value = q2;
      return g2;
    }));
  };
  let n2 = (i2, g2, f2) => {
    var r2 = g2.value;
    var q2, s2, t2, u2;
    if (!X(r2) || r2.add === void 0) {
      g2.issues.push(Aa("set", r2));
      return;
    }
    q2 = cb(i2, g2, la());
    u2 = r2.values();
    r2 = u2.next();
    while (!r2.done) {
      s2 = r2.value;
      t2 = ka(i2, "valueType");
      t2 ? vb(g2, wa(t2, s2, f2), function(G2) {
        var b2 = G2.issues;
        b2.length > 0 && qd(G2.issues, g2.issues);
        var l3 = G2.value;
        q2.add(l3);
      }) : q2.add(s2);
      r2 = u2.next();
    }
    g2.value = q2;
  };
  let o2 = (i2, g2, f2) => {
    var G2 = ka(i2, "in");
    var r2 = ka(i2, "out");
    var s2 = i2.def.transform;
    var q2 = i2.def.reverseTransform;
    if (31 == i2.kind) {
      if (Ma(f2)) throw new Fc("ZodTransform");
      if (!(f2 === void 0) && X(f2)) {
        G2 = f2["~memo"];
        if (X(G2) && !(G2.backEdges === void 0) && !(G2.backEdges == null) && G2.backEdges.has(g2.value)) {
          i2 = new Error("Cannot parse a reference cycle that closes through a transform");
          i2.name = "ZodCyclicError";
          throw i2;
        }
      }
      return "function" == typeof s2 ? Xb(i2, g2, f2, s2) : g2;
    }
    if (Ma(f2)) {
      if (r2) {
        r2 = ra(r2, g2, f2);
        if (aa(r2)) return r2.then(function(h3) {
          if (xc(h3)) return h3.aborted = true, h3;
          var b2 = "function" == typeof q2 ? Xb(i2, h3, f2, q2) : h3;
          if (aa(b2)) return b2.then(function(c2) {
            return fb(c2, f2, G2);
          });
          return fb(h3, f2, G2);
        });
        if (xc(g2)) return g2.aborted = true, g2;
      }
      if ("function" == typeof q2) {
        q2 = Xb(i2, g2, f2, q2);
        if (aa(q2)) return q2.then(function(o3) {
          return fb(o3, f2, G2);
        });
      }
      return fb(g2, f2, G2);
    }
    if (G2) {
      G2 = ra(G2, g2, f2);
      if (aa(G2)) return G2.then(function(o3) {
        return zd(i2, o3, f2);
      });
    }
    return zd(i2, g2, f2);
  };
  let p2 = (i2, f2) => {
    var g2 = f2.value;
    if (!("function" == typeof g2)) {
      sa(f2, "function", g2);
      return;
    }
    var y2 = i2.def.input;
    var q2 = i2.def.output;
    var r2 = va(q2);
    i2 = r2 && 30 == r2.kind;
    f2.value = yc(g2, y2, q2, i2);
  };
  wb = function(i2, g2, f2) {
    if (32 == i2.kind || 31 == i2.kind) return o2(i2, g2, f2);
    h2(i2, g2, f2);
    i2 = Tb(g2);
    if (aa(i2)) return i2.then(function(c2) {
      return vc(g2);
    });
    return vc(g2);
  };
  ra = function(B2, g2, f2) {
    B2 = tc(B2);
    if (sb(B2)) {
      var q2 = Fe(B2, g2, f2);
      if (!(q2 === void 0)) return Vb(B2, q2, f2);
    }
    if (30 == B2.kind) {
      if (f2 === void 0 || false === f2.async) throw new Error(ef);
      q2 = g2.value;
      return Promise.resolve(q2).then(function(m3) {
        g2.value = m3;
        var i2 = ka(B2, "innerType");
        return i2 ? ra(i2, g2, f2) : g2;
      });
    }
    if (!(f2 === void 0) && X(f2) && f2.skipChecks) return wb(B2, g2, f2);
    if (Ma(f2) && B2.hasChecks) {
      q2 = ia({}, f2);
      q2.skipChecks = true;
      var r2 = g2.value;
      q2 = wb(B2, { value: r2, issues: [] }, q2);
      if (aa(q2)) {
        if (!(f2 === void 0) && false === f2.async) throw new Error(ef);
        return q2.then(function(o3) {
          return md(B2, o3, g2, f2);
        });
      }
      return md(B2, q2, g2, f2);
    }
    if (32 == B2.kind || 31 == B2.kind) {
      q2 = o2(B2, g2, f2);
      if (aa(q2)) return q2.then(function(o3) {
        return Wb(B2, o3, f2);
      });
      return Wb(B2, g2, f2);
    }
    h2(B2, g2, f2);
    return Wb(B2, g2, f2);
  };
})();
var md = (a, b, e, f2) => {
  if (Ub(b)) return b.aborted = true, b;
  b = Vb(a, e, f2);
  if (aa(b)) {
    if (!(f2 === void 0) && false === f2.async) throw new Error(ef);
    return b.then(function(b2) {
      return wb(a, b2, f2);
    });
  }
  return wb(a, b, f2);
};
var Wa = (i2, j2, f2) => {
  let a = i2.handle._zod;
  return a.run.call(i2.handle._zod, { value: j2, issues: [] }, f2);
};
var wa = (i2, j2, f2) => !!i2 ? Wa(i2, j2, f2) : { value: j2, issues: [] };
var sa = (e, a, j2) => {
  e.issues.push(Aa(a, j2));
};
var nd = (e) => {
  var a = e.issues;
  if (0 == a.length) return;
  a = e.issues;
  a.length = 0;
  e.value = void 0;
  e.aborted = false;
};
var od = (e, B2, a) => {
  var b = e.issues;
  if (0 == b.length) return;
  b = B2.def.catchValue;
  b === void 0 && (b = B2.def.defaultValue);
  if ("function" == typeof b) {
    var c = [];
    var t2 = e.issues;
    var d = t2.length;
    var h2 = 0;
    while (h2 < d) {
      c.push(Ta(t2[h2], B2, a));
      h2 = h2 + 1;
    }
    B2 = e.value;
    a = e.issues;
    b = b({ value: B2, issues: a, error: { issues: c }, input: e.value });
  }
  e.value = b;
  B2 = e.issues;
  B2.length = 0;
  e.aborted = false;
};
var pd = (e) => {
  if (0 == e.issues.length && e.value === void 0) {
    var a = e.issues;
    a.push({ code: "invalid_type", expected: "nonoptional", input: e.value });
  }
};
var qd = (a, b) => {
  var g2 = a.length;
  var h2 = 0, c;
  while (h2 < g2) {
    c = a[h2];
    b.push(c);
    h2 = h2 + 1;
  }
};
var Xa = (t2, a, b) => {
  var d = t2.length;
  var c = 0, e;
  while (c < d) {
    tb(t2[c], b);
    e = t2[c];
    a.push(e);
    c = c + 1;
  }
};
var Je;
var Ke;
(function() {
  let a = (c) => {
    var C2 = c.kind;
    if (32 == C2) return true;
    if (31 == C2) return true;
    if (30 == C2) return true;
    if (29 == C2) return true;
    if (25 == C2) return true;
    if (26 == C2) return true;
    if (27 == C2) return true;
    return false;
  };
  let b = (c, j2, f2, d) => {
    if (sb(c)) return Wa(c, j2, f2);
    if (Ma(f2) && c.hasChecks) return Wa(c, j2, f2);
    if (a(c)) return Wa(c, j2, f2);
    d.value = j2;
    var v2 = d.issues;
    v2.length = 0;
    d.aborted === void 0 || (d.aborted = false);
    d.memo === void 0 || (d.memo = false);
    v2 = c.handle._zod;
    d = v2.run(d, f2);
    return aa(d) ? Wa(c, j2, f2) : d;
  };
  Je = function(i2, e, f2) {
    var j2 = e.value;
    if (!Array.isArray(j2)) {
      e.issues.push(Aa("array", j2));
      return;
    }
    var c = ka(i2, "element");
    var q2 = cb(i2, e, []);
    var d = { value: void 0, issues: [] };
    var g2 = j2.length;
    var h2 = 0, m2, k2;
    while (h2 < g2) {
      c ? (m2 = b(c, j2[h2], f2, d), aa(m2) ? (k2 = +(0 + h2), vb(e, m2, /* @__PURE__ */ ((a2, b2, c2, d2) => function(G2) {
        Mb(b2, c2, d2, G2);
      })(i2, e, q2, k2))) : Mb(e, q2, +(0 + h2), m2)) : (m2 = j2[h2], q2.push(m2));
      h2 = h2 + 1;
    }
    e.value = q2;
  };
  Ke = function(i2, e, f2) {
    var j2 = e.value;
    var c, L2, q2, d, g2, k2, h2, w2, m2, C2, n2, o2, p2, l2;
    if (!X(j2) || Array.isArray(j2)) {
      e.issues.push(Aa("object", j2));
      return;
    }
    L2 = i2.def.shape;
    L2 == null && (L2 = {});
    q2 = i2.handle._zod;
    c = q2["~keys"];
    d = q2["~fids"];
    if (!Array.isArray(c) || !Array.isArray(d)) {
      c = pa(L2);
      d = [];
      k2 = c.length;
      g2 = 0;
      while (g2 < k2) {
        h2 = va(Reflect.get(L2, c[g2] + ""));
        h2 ? d.push(+(0 + h2.id)) : d.push(-1);
        g2 = g2 + 1;
      }
      q2["~keys"] = c;
      q2["~fids"] = d;
    }
    q2 = cb(i2, e, {});
    w2 = { value: void 0, issues: [] };
    m2 = c.length;
    h2 = 0;
    while (h2 < m2) {
      k2 = c[h2] + "";
      g2 = +d[h2] | 0;
      if ("__proto__" == k2 || g2 < 0) {
        h2 = h2 + 1;
        continue;
      }
      g2 = Ga[g2];
      l2 = true === k2 in j2;
      C2 = void 0;
      l2 && (C2 = j2[k2]);
      C2 = b(g2, C2, f2, w2);
      aa(C2) ? (n2 = Tc(g2), o2 = Uc(g2), vb(e, C2, /* @__PURE__ */ ((a2, b2, c2, d2, f3, g3, h3) => function(G2) {
        Vc(b2, c2, d2, f3, g3, h3, G2);
      })(i2, e, q2, k2, l2, n2, o2))) : Vc(e, q2, k2, l2, Tc(g2), Uc(g2), C2);
      h2 = h2 + 1;
    }
    c = i2.def.catchall;
    if (!(c === void 0) && !(c == null)) {
      d = va(c);
      g2 = [];
      w2 = pa(j2);
      m2 = w2.length;
      C2 = 0;
      while (C2 < m2) {
        c = w2[C2] + "";
        Da.call(L2, c) || ("__proto__" == c ? !d || 11 == d.kind && g2.push(c) : d ? (h2 = d, 11 == h2.kind ? g2.push(c) : (h2 = Wa(h2, j2[c], f2), p2 = h2.issues, p2.length > 0 ? Xa(h2.issues, e.issues, c) : q2[c] = h2.value)) : q2[c] = j2[c]);
        C2 = C2 + 1;
      }
      g2.length > 0 && e.issues.push({ code: "unrecognized_keys", keys: g2, input: j2, path: [], continue: true });
    }
    e.value = q2;
  };
})();
var rd = (a, b) => {
  var h2 = a.length - 1 | 0;
  while (h2 >= 0) {
    var B2 = va(a[h2]);
    B2 = B2 && (b ? 0 != B2.optin : 1 == B2.optout);
    if (!B2) return h2 + 1 | 0;
    h2 = h2 - 1;
  }
  return 0;
};
var sd = (e, q2, n2, m2) => {
  var a = m2.issues;
  a.length > 0 && Xa(m2.issues, e.issues, n2);
  Ca(q2, n2, m2.value);
};
var Le;
var wc;
(function() {
  let a = (j2) => {
    if (!X(j2) || Array.isArray(j2)) return false;
    j2 = ga.getPrototypeOf(j2);
    if (j2 == null) return true;
    return j2 === ga.prototype;
  };
  let b = (n2) => {
    if (!("string" == typeof n2)) return false;
    var c = Number(n2);
    var d;
    if (!("number" == typeof c) || !La(c)) return false;
    return c + "" == n2 + "";
  };
  Le = function(n2, e, h2) {
    var j2 = e.value;
    if (!a(j2)) {
      sa(e, "record", j2);
      return;
    }
    var q2 = cb(n2, e, {});
    e.value = q2;
    var c;
    var r2 = "string" == typeof n2.def.mode && "loose" == n2.def.mode + "", w2, d, o2, l2, p2, k2, x2, i2, s2, t2, m2;
    w2 = !!n2.def.partial;
    d = ka(n2, "keyType");
    o2 = ka(n2, "valueType");
    c = void 0;
    !d || (n2 = d, n2.values === void 0 || (c = Array.from(n2.values)));
    if (!(c === void 0) && Array.isArray(c) && !w2) {
      l2 = la();
      p2 = c.length;
      n2 = 0;
      while (n2 < p2) {
        w2 = c[n2];
        k2 = typeof w2;
        if ("string" != k2 && "number" != k2 && "symbol" != k2) {
          n2 = n2 + 1;
          continue;
        }
        "number" == typeof w2 && (w2 = w2 + "");
        l2.add(w2);
        if ("string" == typeof w2 && "__proto__" == w2 + "") {
          n2 = n2 + 1;
          continue;
        }
        w2 = wa(d, c[n2], h2);
        if (aa(w2)) {
          n2 = n2 + 1;
          continue;
        }
        k2 = w2.issues;
        if (k2.length > 0) {
          m2 = [];
          k2 = w2.issues;
          x2 = k2.length;
          k2 = 0;
          while (k2 < x2) {
            m2.push(Ta(w2.issues[k2], d, h2));
            k2 = k2 + 1;
          }
          w2 = [];
          k2 = c[n2];
          w2.push(k2);
          k2 = e.issues;
          x2 = c[n2];
          k2.push({ code: "invalid_key", origin: "record", issues: m2, input: x2, path: w2 });
          n2 = n2 + 1;
          continue;
        }
        i2 = w2.value;
        if ("string" == typeof i2 && "__proto__" == i2 + "") {
          n2 = n2 + 1;
          continue;
        }
        w2 = c[n2];
        vb(e, wa(o2, Reflect.get(j2, w2), h2), /* @__PURE__ */ ((a2, b2, c2) => function(G2) {
          sd(a2, b2, c2, G2);
        })(e, q2, i2));
        n2 = n2 + 1;
      }
      c = [];
      w2 = pa(j2);
      d = w2.length;
      h2 = 0;
      while (h2 < d) {
        n2 = w2[h2];
        l2.has(n2) || (r2 ? "__proto__" != n2 + "" && (q2[n2] = j2[n2]) : c.push(n2));
        h2 = h2 + 1;
      }
      c.length > 0 && e.issues.push({ code: "unrecognized_keys", keys: c, input: j2, continue: true });
      return;
    }
    m2 = [];
    x2 = Reflect.ownKeys(j2);
    s2 = x2.length;
    i2 = 0;
    while (i2 < s2) {
      n2 = x2[i2];
      if ("string" == typeof n2 && "__proto__" == n2 + "") {
        i2 = i2 + 1;
        continue;
      }
      w2 = ga.prototype;
      if (!w2.propertyIsEnumerable.call(j2, n2)) {
        i2 = i2 + 1;
        continue;
      }
      w2 = wa(d, n2, h2);
      !aa(w2) ? (p2 = w2.issues, k2 = p2.length > 0) : k2 = false;
      k2 && b(n2) && (k2 = wa(d, Number(n2), h2), !aa(k2) ? (t2 = k2.issues, p2 = 0 == t2.length) : p2 = false, p2 && (w2 = k2));
      aa(w2) ? k2 = true : (p2 = w2.issues, k2 = p2.length > 0);
      if (k2) {
        if (r2) {
          q2[n2] = j2[n2];
        } else {
          if (!(c === void 0)) {
            m2.push(n2);
          } else {
            p2 = [];
            if (!aa(w2)) {
              k2 = w2.issues;
              t2 = k2.length;
              k2 = 0;
              while (k2 < t2) {
                p2.push(Ta(w2.issues[k2], d, h2));
                k2 = k2 + 1;
              }
            }
            w2 = [];
            w2.push(n2);
            e.issues.push({ code: "invalid_key", origin: "record", issues: p2, input: n2, path: w2 });
          }
        }
        i2 = i2 + 1;
        continue;
      }
      l2 = w2.value;
      if ("string" == typeof l2 && "__proto__" == l2 + "") {
        i2 = i2 + 1;
        continue;
      }
      vb(e, wa(o2, j2[n2], h2), /* @__PURE__ */ ((a2, b2, c2) => function(G2) {
        sd(a2, b2, c2, G2);
      })(e, q2, l2));
      i2 = i2 + 1;
    }
    m2.length > 0 && e.issues.push({ code: "unrecognized_keys", keys: m2, input: j2, continue: true });
  };
  wc = function(c, d) {
    if (true === Rd(c, d)) return { valid: true, data: c };
    var h2;
    qa(Date, c) && qa(Date, d) ? (h2 = c.getTime(), h2 = h2 === d.getTime()) : h2 = false;
    if (h2) return { valid: true, data: c };
    if (a(c) && a(d)) {
      var m2 = {};
      var f2 = [];
      f2.push(c);
      f2.push(d);
      var e = 0, P2, k2, i2, j2, g2;
      while (e < 2) {
        P2 = f2[e];
        j2 = Reflect.ownKeys(P2);
        k2 = j2.length;
        g2 = 0;
        while (g2 < k2) {
          h2 = j2[g2];
          i2 = "string" == typeof h2 && "__proto__" == h2 + "";
          i2 || Ca(m2, h2, P2[h2]);
          g2 = g2 + 1;
        }
        e = e + 1;
      }
      P2 = pa(c);
      i2 = pa(d);
      j2 = P2.length;
      g2 = 0;
      while (g2 < j2) {
        h2 = P2[g2] + "";
        if ("__proto__" != h2) {
          k2 = i2.length;
          e = false;
          f2 = 0;
          while (f2 < k2) {
            i2[f2] + "" == h2 && (e = true);
            f2 = f2 + 1;
          }
          if (e) {
            e = wc(c[h2], d[h2]);
            if (!e.valid) {
              m2 = [];
              m2.push(h2);
              c = e.mergeErrorPath;
              if (Array.isArray(c)) {
                h2 = c.length;
                d = 0;
                while (d < h2) {
                  g2 = c[d];
                  m2.push(g2);
                  d = d + 1;
                }
              }
              return { valid: false, mergeErrorPath: m2 };
            }
            m2[h2] = e.data;
          }
        }
        g2 = g2 + 1;
      }
      return { valid: true, data: m2 };
    }
    if (Array.isArray(c) && Array.isArray(d)) {
      h2 = c.length;
      if (h2 != d.length) return { valid: false, mergeErrorPath: [] };
      e = [];
      g2 = c.length;
      h2 = 0;
      while (h2 < g2) {
        m2 = wc(c[h2], d[h2]);
        if (!m2.valid) {
          e = [];
          e.push(h2);
          c = m2.mergeErrorPath;
          if (Array.isArray(c)) {
            h2 = c.length;
            d = 0;
            while (d < h2) {
              g2 = c[d];
              e.push(g2);
              d = d + 1;
            }
          }
          return { valid: false, mergeErrorPath: e };
        }
        f2 = m2.data;
        e.push(f2);
        h2 = h2 + 1;
      }
      return { valid: true, data: e };
    }
    return { valid: false, mergeErrorPath: [] };
  };
})();
var td = (t2, a) => {
  var b = [];
  var c = t2.length;
  var h2 = 0;
  while (h2 < c) {
    b.push(Ta(t2[h2], null, a));
    h2 = h2 + 1;
  }
  return b;
};
var xb = (B2) => {
  if (B2 == null || !X(B2) || B2._zod === void 0) return;
  var v2 = B2._zod;
  var a = v2.bag;
  if (!(a.propValues === void 0)) return B2 = v2.bag, B2.propValues;
  B2 = da(B2);
  if (15 == B2.kind) {
    a = {};
    var n2 = B2.def.shape;
    if (X(n2)) {
      var C2 = pa(n2);
      var g2 = C2.length;
      var U2 = 0, w2, h2, c, d, P2, b;
      while (U2 < g2) {
        w2 = C2[U2];
        B2 = va(n2[w2]);
        if (B2 && !(B2.values === void 0)) {
          h2 = la();
          b = Array.from(B2.values);
          c = b.length;
          P2 = 0;
          while (P2 < c) {
            d = b[P2];
            h2.add(d);
            P2 = P2 + 1;
          }
          0 != B2.optin && h2.add(void 0);
          Ca(a, w2, h2);
        }
        U2 = U2 + 1;
      }
    }
    B2 = v2.bag;
    B2.propValues = a;
    return a;
  }
  if (32 == B2.kind) return xb(B2.def.in);
  if (29 == B2.kind) return xb(tc(B2).handle);
  if (21 == B2.kind || 38 == B2.kind) {
    a = {};
    U2 = B2.def.options;
    if (Array.isArray(U2)) {
      c = U2.length;
      h2 = 0;
      while (h2 < c) {
        B2 = xb(U2[h2]);
        if (B2 == null || 0 == pa(B2).length) throw na(ff + h2 + of);
        w2 = pa(B2);
        d = w2.length;
        C2 = 0;
        while (C2 < d) {
          n2 = w2[C2];
          Da.call(a, n2) || Ca(a, n2, la());
          P2 = B2[n2];
          if (!(P2 === void 0) && !(P2 == null)) {
            g2 = Array.from(P2);
            b = g2.length;
            P2 = 0;
            while (P2 < b) {
              a[n2].add(g2[P2]);
              P2 = P2 + 1;
            }
          }
          C2 = C2 + 1;
        }
        h2 = h2 + 1;
      }
    }
    B2 = v2.bag;
    B2.propValues = a;
    return a;
  }
};
var ud = (h2) => {
  var v2 = h2.handle._zod;
  var z2 = v2.bag;
  if (!(z2.optionsMap === void 0)) return z2.optionsMap;
  var a = /* @__PURE__ */ new Map();
  var d = h2.def.discriminator + "";
  var U2 = h2.def.options;
  var g2 = U2.length;
  h2 = 0;
  while (h2 < g2) {
    var b = xb(U2[h2]);
    v2 = void 0;
    var c;
    X(b) && !!Da.call(b, d) && (v2 = b[d]);
    if (v2 === void 0) throw na(ff + h2 + of);
    if (v2 == null) throw na(ff + h2 + of);
    if (0 == (+v2.size | 0)) throw na(ff + h2 + of);
    b = Array.from(v2);
    c = b.length;
    v2 = 0;
    while (v2 < c) {
      var e = b[v2];
      if (a.has(e)) throw na('Duplicate discriminator value "' + b[v2] + of);
      a.set(b[v2], U2[h2]);
      v2 = v2 + 1;
    }
    h2 = h2 + 1;
  }
  z2.optionsMap = a;
  return a;
};
var vd = (e, b, c) => {
  var d = {};
  var f2 = {};
  var o2 = b.issues;
  var g2 = o2.length;
  var o2 = void 0, h2 = 0, i2, j2, k2, l2;
  while (h2 < g2) {
    !wd(b.issues[h2], "l", d, f2) ? (i2 = e.issues, j2 = b.issues[h2], i2.push(j2)) : o2 === void 0 && "unrecognized_keys" == b.issues[h2].code + "" && (o2 = b.issues[h2]);
    h2 = h2 + 1;
  }
  h2 = c.issues;
  g2 = h2.length;
  h2 = 0;
  while (h2 < g2) {
    !wd(c.issues[h2], "r", d, f2) ? (i2 = e.issues, j2 = c.issues[h2], i2.push(j2)) : o2 === void 0 && "unrecognized_keys" == c.issues[h2].code + "" && (o2 = c.issues[h2]);
    h2 = h2 + 1;
  }
  h2 = [];
  g2 = pa(d);
  k2 = g2.length;
  f2 = 0;
  while (f2 < k2) {
    i2 = g2[f2] + "";
    j2 = d[i2];
    j2.l ? (l2 = d[i2], j2 = !!l2.r) : j2 = false;
    j2 && h2.push(i2);
    f2 = f2 + 1;
  }
  if (h2.length > 0 && !(o2 === void 0)) {
    i2 = [];
    g2 = o2.keys;
    j2 = h2.length;
    d = 0;
    while (d < j2) {
      k2 = g2.length;
      f2 = 0;
      while (f2 < k2) {
        l2 = g2[f2] + "";
        l2 == h2[d] + "" && (l2 = h2[d], i2.push(l2));
        f2 = f2 + 1;
      }
      d = d + 1;
    }
    i2.length > 0 && (o2 = ia({}, o2), o2.keys = i2, h2 = e.issues, h2.push(o2));
  }
  o2 = wc(b.value, c.value);
  if (o2.valid) {
    e.value = o2.data;
  } else {
    if (!Ub(e)) {
      e = o2.mergeErrorPath;
      throw na("Unmergable intersection. Error path: " + JSON.stringify(e, void 0, void 0));
    }
  }
};
var wd = (K2, a, b, h2) => {
  var O2 = K2.path;
  var c, g2;
  if ("unrecognized_keys" == K2.code + "" && (O2 == null || 0 == O2.length)) {
    O2 = K2.keys;
    g2 = O2.length;
    h2 = 0;
    while (h2 < g2) {
      K2 = O2[h2] + "";
      (b[K2] === void 0 || b[K2] == null) && (b[K2] = {});
      b[K2][a] = true;
      h2 = h2 + 1;
    }
    return true;
  }
  if ("invalid_key" == K2.code + "" && "record" == K2.origin + "" && !(O2 === void 0) && 1 == O2.length) return c = O2[0] + "", h2[c] === void 0 && (h2[c] = K2), (b[c] === void 0 || b[c] == null) && (b[c] = {}), K2 = b[c], K2[a] = true, true;
  return false;
};
var xd = (n2) => {
  n2 = typeof n2;
  if ("string" == n2) return true;
  if ("number" == n2) return true;
  if ("symbol" == n2) return true;
  return false;
};
var yd = (a, b, e, n2, y2, f2) => {
  var c = a.issues;
  c.length > 0 && (xd(n2) ? Xa(a.issues, e.issues, n2) : (c = e.issues, c.push({ code: "invalid_key", origin: "map", issues: td(a.issues, f2), input: y2, path: [] })));
  a = b.issues;
  a.length > 0 && (xd(n2) ? Xa(b.issues, e.issues, n2) : (a = e.issues, a.push({ code: "invalid_element", origin: "map", key: n2, issues: td(b.issues, f2), input: y2, path: [] })));
};
var Xb = (i2, e, f2, x2) => {
  if (!("function" == typeof x2)) return e;
  var a = function(o2) {
    if ("string" == typeof o2) {
      var b2 = e.value;
      o2 = { message: o2, code: "custom", input: b2, inst: i2.handle };
    } else {
      !o2.fatal || (o2.continue = false);
      o2.code === void 0 && (o2.code = "custom");
      true === "input" in o2 || (o2.input = e.value);
      o2.inst === void 0 && (o2.inst = i2.handle);
    }
    var v2 = e.issues;
    v2.push(o2);
  };
  var b = e.value;
  a = { addIssue: a, value: b, issues: e.issues };
  x2 = x2(e.value, a);
  if (aa(x2)) {
    var p2 = void 0;
    if (!(f2 === void 0) && false === f2.async) throw new Error(ef);
    return x2.then(function(o2) {
      e.value = o2;
      return e;
    });
  }
  e.value = x2;
  return e;
};
var xc = (h2) => {
  var t2 = h2.issues;
  var g2 = t2.length;
  h2 = 0;
  while (h2 < g2) {
    var a = t2[h2];
    if ("unrecognized_keys" != a.code + "") return true;
    h2 = h2 + 1;
  }
  return false;
};
var fb = (e, f2, a) => !!a ? ra(a, e, f2) : e;
var zd = (i2, e, f2) => {
  if (xc(e)) return e.aborted = true, e;
  var a = i2.def.transform;
  var b = ka(i2, "out");
  if ("function" == typeof a) {
    a = Xb(i2, e, f2, a);
    if (aa(a)) return a.then(function(o2) {
      return fb(o2, f2, b);
    });
  }
  return fb(e, f2, b);
};
var yc = (x2, y2, a, b) => b ? ue(function(i2, u2) {
  return Oa(i2, u2, void 0, void 0);
}, function(a2, c, e) {
  return a2.apply(c, e);
}, y2, a, x2) : function() {
  return Na(a, x2.apply(this, Na(y2, Array.from(arguments), void 0, void 0)), void 0, void 0);
};
var yb = (e, i2, a) => {
  var b = [];
  var h2 = e.issues;
  var c = h2.length;
  h2 = 0;
  while (h2 < c) {
    b.push(Ta(e.issues[h2], i2, a));
    h2 = h2 + 1;
  }
  i2 = e.value;
  return { value: i2, issues: b };
};
var gb = (G2) => {
  var a = G2.issues;
  if (a.length > 0) return a = G2.issues, { success: false, error: new Ha(a) };
  return { success: true, data: G2.value };
};
var zc = (k2, u2, f2) => {
  let a = k2._zod;
  return a.run.call(k2._zod, { value: u2, issues: [] }, f2);
};
var Ad = (f2) => {
  if (f2 == null) return { async: false };
  f2 = ia({}, f2);
  f2.async = false;
  return f2;
};
var Yb = (k2, e, f2) => {
  f2 = Ad(f2);
  e = zc(k2, e, f2);
  if (aa(e)) throw new Error(ef);
  var a = e.issues;
  if (0 == a.length) return { success: true, data: e.value };
  Ua();
  return gb(yb(e, da(k2), f2));
};
var Bd = (k2, e, f2, a) => {
  Ua();
  var b = da(k2);
  var c = yb(e, b, f2);
  var E2 = gb(c);
  a == null && (a = Bd);
  rb(E2.error, a);
  throw E2.error;
};
var Na = (k2, e, f2, a) => {
  f2 = Ad(f2);
  e = zc(k2, e, f2);
  if (aa(e)) throw new Error(ef);
  var E2 = e.issues;
  if (0 == E2.length) return e.value;
  Ua();
  var j2 = da(k2);
  var l2 = yb(e, j2, f2);
  E2 = gb(l2);
  a == null && (a = Na);
  rb(E2.error, a);
  throw E2.error;
};
var Zb = /* @__PURE__ */ (function() {
  let a = (i2, e, f2) => {
    var c = e.issues;
    if (0 == c.length) return e;
    Ua();
    return yb(e, i2, f2);
  };
  let b = (e, u2, f2) => {
    var i2 = da(e);
    e = zc(e, u2, f2);
    if (aa(e)) return e.then(function(o2) {
      return a(i2, o2, f2);
    });
    return a(i2, e, f2);
  };
  return function(E2, u2, c) {
    c == null ? c = { async: true } : (c = ia({}, c), c.async = true);
    E2 = b(E2, u2, c);
    if (aa(E2)) return E2.then(function(G2) {
      return gb(G2);
    });
    return Promise.resolve(gb(E2));
  };
})();
var Oa = (k2, u2, f2, a) => Zb(k2, u2, f2).then(function(E2) {
  if (E2.success) return E2.data;
  var w2 = a == null ? Oa : a, j2;
  rb(E2.error, w2);
  throw E2.error;
});
var Cd = (a) => {
  var b = [];
  if (Array.isArray(a)) {
    var h2 = a.length;
    var w2 = 0, C2, g2, e, c, d;
    while (w2 < h2) {
      C2 = a[w2];
      b.push(C2);
      w2 = w2 + 1;
    }
    return b;
  }
  if (!X(a) || a == null) return b;
  c = [];
  w2 = pa(a);
  g2 = w2.length;
  h2 = 0;
  while (h2 < g2) {
    C2 = a[w2[h2]];
    "number" == typeof C2 && c.push(C2);
    h2 = h2 + 1;
  }
  h2 = 0;
  while (h2 < g2) {
    d = Number(w2[h2] + "");
    if ("number" == typeof d) {
      e = c.length;
      C2 = 0;
      var N2 = void 0;
      for (; ; ) {
        if (C2 >= e) {
          C2 = false;
          break;
        }
        if (c[C2] === d) {
          C2 = true;
          break;
        }
        C2 = C2 + 1;
      }
    } else {
      C2 = false;
    }
    C2 || (C2 = a[w2[h2]], b.push(C2));
    h2 = h2 + 1;
  }
  return b;
};
var _ = /* @__PURE__ */ (function() {
  let a = (l2) => {
    var c = ga.getOwnPropertyDescriptor(l2, "shape");
    if (!(c === void 0) && !(c == null) && "function" == typeof c.get) return;
    var b = l2.shape;
    b === void 0 && (b = {});
    b == null && (b = {});
    cc.set(l2, b);
    ba(l2, "shape", { configurable: true, get: function() {
      var y2 = {};
      var d2 = Reflect.ownKeys(b);
      var e2 = d2.length;
      var c2 = 0, f3, g3, h2;
      while (c2 < e2) {
        f3 = d2[c2];
        g3 = b;
        h2 = d2[c2];
        Ca(y2, f3, Reflect.get(g3, h2));
        c2 = c2 + 1;
      }
      ba(l2, "shape", { value: y2, writable: true, enumerable: true, configurable: true });
      cc.set(l2, y2);
      return y2;
    } });
  };
  let d = (D2, T2) => {
    var b = la();
    b.add("ZodType");
    b.add("$ZodType");
    b.add(D2);
    D2.length > 0 && b.add("$" + D2);
    D2 = T2.__parent;
    var c = 0;
    while (!(D2 === void 0) && !(D2 == null) && c < 8) {
      T2 = D2.name + "";
      T2.length > 0 && (b.add(T2), b.add("$" + T2));
      T2 = D2.__parent;
      D2 = T2;
      c = c + 1 | 0;
    }
    return b;
  };
  let e = (z2, N2) => {
    var b = N2.check + "";
    var c, h2;
    ("min_length" == b || "min_size" == b) && (c = z2.minimum, (c === void 0 || N2.minimum > c) && (z2.minimum = N2.minimum));
    ("max_length" == b || "max_size" == b) && (c = z2.maximum, (c === void 0 || N2.maximum < c) && (z2.maximum = N2.maximum));
    "length_equals" == b && (z2.minimum = N2.length, z2.maximum = N2.length, z2.length = N2.length);
    "size_equals" == b && (z2.minimum = N2.size, z2.maximum = N2.size, z2.size = N2.size);
    "greater_than" == b && (c = N2.inclusive, false === c ? (c = z2.exclusiveMinimum, (c === void 0 || N2.value > c) && (z2.exclusiveMinimum = N2.value)) : (c = z2.minimum, (c === void 0 || N2.value > c) && (z2.minimum = N2.value)));
    "less_than" == b && (c = N2.inclusive, false === c ? (c = z2.exclusiveMaximum, (c === void 0 || N2.value < c) && (z2.exclusiveMaximum = N2.value)) : (c = z2.maximum, (c === void 0 || N2.value < c) && (z2.maximum = N2.value)));
    "multiple_of" == b && z2.multipleOf === void 0 && (z2.multipleOf = N2.value);
    "number_format" == b && (z2.format = N2.format, c = N2.format + "", ("safeint" == c || "int" == c) && (z2.minimum = Number.MIN_SAFE_INTEGER, z2.maximum = Number.MAX_SAFE_INTEGER), "int32" == c && (z2.minimum = -2147483648, z2.maximum = 2147483647), "uint32" == c && (z2.minimum = 0, z2.maximum = 4294967295), "float32" == c && (z2.minimum = -34028234663852886e22, z2.maximum = 34028234663852886e22), "float64" == c && (z2.minimum = 0 - +Number.MAX_VALUE, z2.maximum = Number.MAX_VALUE), c.includes("int") && (z2.pattern = $("^-?\\d+$", lf)));
    ("string_format" == b || "lowercase" == b || "uppercase" == b) && ("string_format" == b ? z2.format = N2.format : z2.format = b, !(N2.pattern === void 0) && !(N2.pattern == null) && "jwt" != z2.format + "" && (z2.patterns === void 0 && (z2.patterns = la()), z2.patterns.add(N2.pattern)), "base64" == z2.format + "" && (z2.contentEncoding = "base64"));
    "starts_with" == b && (z2.patterns === void 0 && (z2.patterns = la()), h2 = N2.prefix.replace($(kf, "g"), "\\$&"), c = z2.patterns, c.add($("^" + h2 + ".*", lf)));
    "ends_with" == b && (z2.patterns === void 0 && (z2.patterns = la()), h2 = N2.suffix.replace($(kf, "g"), "\\$&"), c = z2.patterns, c.add($(".*" + h2 + "$", lf)));
    "includes" == b && (z2.patterns === void 0 && (z2.patterns = la()), c = N2.includes.replace($(kf, "g"), "\\$&"), "number" == typeof N2.position ? (h2 = z2.patterns, h2.add($("^.{" + N2.position + "}" + c, lf))) : (h2 = z2.patterns, h2.add($(c + "", lf))));
    "mime_type" == b && (z2.mime = N2.mime);
  };
  let f2 = (k2, l2) => {
    var b = k2._zod;
    var z2 = b.bag;
    "string" == typeof l2.check && e(z2, l2);
    "string" == typeof l2.format && z2.format === void 0 && (z2.format = l2.format);
    k2 = l2.checks;
    if (!Array.isArray(k2)) return;
    b = k2.length;
    l2 = 0;
    while (l2 < b) {
      e(z2, sc(k2[l2]));
      l2 = l2 + 1;
    }
  };
  let g2 = (k2, l2, T2, b) => {
    Ua();
    if (X(k2._zod)) {
      var h2 = k2._zod;
      var c = !(h2.id === void 0);
    } else {
      c = false;
    }
    if (c) return;
    c = { id: 0, kind: 0, handle: null, def: null, ctor: null, typeName: "", trait: "", values: null, optin: 0, optout: 0, hasChecks: false };
    xe(c, l2);
    c.ctor = T2;
    c.trait = b;
    T2 = d(b, T2);
    "string" == typeof l2.check && T2.add("$ZodCheck");
    i2(k2, c, T2);
    15 == c.kind && a(l2);
    f2(k2, l2);
    De(c);
  };
  let i2 = (k2, j2, l2) => {
    j2.handle = k2;
    var R2 = j2.ctor._zodProto;
    var m2;
    R2 == null && (R2 = {});
    R2 = ga.create(R2);
    R2.id = j2.id;
    R2.def = j2.def;
    R2.bag = {};
    R2.version = ce;
    R2.traits = l2;
    R2.constr = j2.ctor;
    l2 = function(e2, f3) {
      return wb(j2, e2, f3);
    };
    m2 = function(e2, f3) {
      return ra(j2, e2, f3);
    };
    R2.parse = l2;
    R2.run = m2;
    sb(j2) && (R2.memoizer = { recursive: void 0, handoff: void 0, ctx: void 0, bucket: void 0, open: [] });
    ba(R2, "propValues", { enumerable: true, configurable: true, get: function() {
      return xb(k2);
    } });
    ba(k2, "_zod", Lb(R2));
    Me(k2, j2, R2, l2, m2);
  };
  return function(D2, c) {
    var h2 = {};
    if (!(c === void 0) && X(c._zodProto)) {
      var j2 = c._zodProto;
      ga.setPrototypeOf(h2, j2);
    }
    var b = (0, function() {
      if (this === void 0 || this == null || !X(this)) {
        var u2 = b.prototype;
        u2 = ga.create(u2);
      } else {
        u2 = this;
      }
      var l2 = arguments[0];
      var c2;
      !(l2 === void 0) && X(l2) && "string" == typeof l2.type && g2(u2, l2, b, D2);
      return u2;
    });
    b.__parent = c;
    b._zodProto = h2;
    c === void 0 || (h2 = b.prototype, j2 = c.prototype, ga.setPrototypeOf(h2, j2));
    c = b.prototype;
    ba(c, "def", { configurable: true, enumerable: true, get: function() {
      let b2 = this._zod;
      return b2.def;
    } });
    c = b.prototype;
    ba(c, "type", { configurable: true, enumerable: true, get: function() {
      let b2 = this._zod, c2 = b2.def;
      return c2.type;
    } });
    c = b;
    ba(c, "name", Fa(D2));
    c = b;
    ba(c, "init", Fa(function(k2, l2) {
      !(l2 === void 0) && X(l2) && g2(k2, l2, b, D2);
      return k2;
    }));
    c = b;
    h2 = Symbol.hasInstance;
    ba(c, h2, Fa(function(k2) {
      if (k2 == null || !X(k2)) return false;
      var b2 = k2._zod;
      if (b2 == null) return false;
      k2 = b2.traits;
      return !!k2.has(D2);
    }));
    return b;
  };
})();
var Pa = (a) => {
  if (a == null) return {};
  if ("string" == typeof a) return { error: function() {
    return a;
  } };
  if ("function" == typeof a) return { error: a };
  if (!X(a)) return {};
  if (!(a.message === void 0)) {
    if (!(a.error === void 0)) throw na("Cannot specify both `message` and `error` params");
    a.error = a.message;
  }
  Reflect.deleteProperty(a, "message");
  if ("string" == typeof a.error) {
    var b = a.error;
    var q2 = ia({}, a);
    q2.error = function() {
      return b;
    };
    return q2;
  }
  return a;
};
var Dd = (a) => {
  if ("number" == typeof a) {
    a = +a | 0;
    if (a == -1) return "(?:[01]\\d|2[0-3]):[0-5]\\d";
    if (0 == a) return "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{" + a + "}";
  }
  return "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
};
var Ed = (s2) => {
  var a = void 0;
  X(s2) && !(s2 == null) && (a = s2.precision);
  return $("^" + Dd(a) + "$", lf);
};
var Fd = (s2) => {
  var a = void 0;
  if (X(s2) && !(s2 == null)) {
    a = s2.precision;
    var b = s2.offset, c;
    c = s2.local;
  } else {
    b = false;
    c = false;
  }
  a = Dd(a);
  s2 = b ? "Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)" : "Z";
  s2 = "(?:" + s2 + ")";
  c && (s2 = s2 + "?");
  return $("^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:" + a + s2 + ")$", lf);
};
var zb = (k2) => {
  da(k2).def.coerce = true;
  var v2 = k2._zod;
  if (v2["~pf"] === void 0 || v2["~rf"] === void 0) return;
  v2.parse = v2["~pf"];
  v2.run = v2["~rf"];
};
var ca = (l2, s2) => {
  l2 = { type: l2 };
  ia(l2, Pa(s2));
  return l2;
};
var Gd = (a, l2) => {
  if (Array.isArray(a)) {
    var b = {};
    var g2 = a.length;
    var h2 = 0;
    while (h2 < g2) {
      Ca(b, a[h2], a[h2]);
      h2 = h2 + 1;
    }
    a = b;
  }
  l2 = ca("enum", l2);
  l2.entries = a;
  return new Ja(l2);
};
var Ac = (a, l2) => {
  a == null && (a = {});
  l2 = ca("object", l2);
  l2.shape = a;
  return new ma(l2);
};
var Bc = (a, b, s2) => {
  var l2 = ca("tuple", s2);
  l2.items = a;
  !(b === void 0) && !(b == null) && (l2.rest = b);
  return new ic(l2);
};
var _b = (a, b, l2) => {
  if (b == null || b._zod === void 0) {
    l2 = new Z(ca("string", void 0));
    var q2 = a;
    a = l2;
    l2 = b;
    b = q2;
  }
  l2 = ca("record", l2);
  l2.keyType = a;
  l2.valueType = b;
  return new Db(l2);
};
var Ne = (n2, U2, h2) => {
  var l2 = ca("union", h2);
  l2.options = U2;
  l2.discriminator = n2;
  l2.inclusive = false;
  if (Array.isArray(U2)) {
    var g2 = U2.length;
    h2 = 0;
    while (h2 < g2) {
      var a = U2[h2];
      if (a === void 0) {
        h2 = h2 + 1;
        continue;
      }
      if (a == null) {
        h2 = h2 + 1;
        continue;
      }
      if (!X(a)) {
        h2 = h2 + 1;
        continue;
      }
      var v2 = a._zod;
      if (v2 === void 0) {
        h2 = h2 + 1;
        continue;
      }
      if (v2 == null) {
        h2 = h2 + 1;
        continue;
      }
      a = v2.def;
      if (a === void 0) {
        h2 = h2 + 1;
        continue;
      }
      if (a == null) {
        h2 = h2 + 1;
        continue;
      }
      a = cc.get(a);
      if (a === void 0) {
        h2 = h2 + 1;
        continue;
      }
      if (a == null) {
        h2 = h2 + 1;
        continue;
      }
      if (!Da.call(a, n2)) throw na(ff + h2 + of);
      h2 = h2 + 1;
    }
  }
  return new jc(l2);
};
var Hd = (a, q2, s2) => {
  let b = nb, c = s2.decode;
  return new b({ type: "pipe", in: a, out: q2, transform: c, reverseTransform: s2.encode });
};
var Oe = () => {
  let a = [];
  a.push("true");
  a.push("1");
  a.push("yes");
  a.push("on");
  a.push("y");
  a.push("enabled");
  return a;
};
var Pe = () => {
  let a = [];
  a.push("false");
  a.push("0");
  a.push("no");
  a.push("off");
  a.push("n");
  a.push("disabled");
  return a;
};
var Qe = (h2) => {
  var e = Pa(h2);
  var a = e.truthy;
  var b = e.falsy;
  (a === void 0 || !Array.isArray(a)) && (a = Oe());
  (b === void 0 || !Array.isArray(b)) && (b = Pe());
  var c = false;
  "string" == typeof e.case && "sensitive" == e.case + "" && (c = true);
  if (!c) {
    var f2 = [];
    var g2 = a.length;
    h2 = 0;
    while (h2 < g2) {
      if ("string" == typeof a[h2]) {
        f2.push(a[h2].toLowerCase());
      } else {
        var x2 = a[h2];
        f2.push(x2);
      }
      h2 = h2 + 1;
    }
    a = f2;
    f2 = [];
    g2 = b.length;
    h2 = 0;
    while (h2 < g2) {
      "string" == typeof b[h2] ? f2.push(b[h2].toLowerCase()) : (x2 = b[h2], f2.push(x2));
      h2 = h2 + 1;
    }
    b = f2;
  }
  f2 = la();
  g2 = la();
  x2 = a.length;
  h2 = 0;
  while (h2 < x2) {
    var i2 = a[h2];
    f2.add(i2);
    h2 = h2 + 1;
  }
  x2 = b.length;
  h2 = 0;
  while (h2 < x2) {
    i2 = b[h2];
    g2.add(i2);
    h2 = h2 + 1;
  }
  h2 = Z;
  var j2 = new h2({ type: "string", error: e.error });
  h2 = $a;
  var k2 = new h2({ type: "boolean", error: e.error });
  var d;
  h2 = function(y2, e2) {
    var u2 = y2 + "";
    c || (u2 = u2.toLowerCase());
    if (f2.has(u2)) return true;
    if (g2.has(u2)) return false;
    var Q2 = [];
    var N2 = a.length;
    var P2 = 0, R2, O2;
    while (P2 < N2) {
      u2 = a[P2];
      Q2.push(u2);
      P2 = P2 + 1;
    }
    P2 = b.length;
    R2 = 0;
    while (R2 < P2) {
      N2 = b[R2];
      Q2.push(N2);
      R2 = R2 + 1;
    }
    R2 = e2.issues;
    O2 = e2.value;
    R2.push({ code: "invalid_value", expected: "stringbool", values: Q2, input: O2, inst: d });
    return {};
  };
  x2 = function(y2, d2) {
    if (true === y2) return a[0];
    return b[0];
  };
  i2 = nb;
  d = new i2({ type: "pipe", in: j2, out: k2, transform: h2, reverseTransform: x2, error: e.error });
  return d;
};
var Re = (s2) => {
  var a;
  a = new lb({ type: "lazy", getter: function() {
    let b = [], L2 = new Z(ca("string", s2));
    b.push(L2);
    b.push(new ha(ca("number", void 0)));
    b.push(new $a(ca("boolean", void 0)));
    b.push(new Bb({ type: "null" }));
    let c = a;
    L2 = ca("array", void 0);
    L2.element = c;
    b.push(new ya(L2));
    L2 = new Z(ca("string", void 0));
    b.push(_b(L2, a, void 0));
    L2 = ca("union", void 0);
    L2.options = b;
    return new Ka(L2);
  } });
  return a;
};
var Qa = (a, b, c, s2) => {
  a == null && (a = Z);
  var l2 = ca("string", s2);
  l2.format = b;
  l2.check = "string_format";
  !(c === void 0) && !(c == null) && (l2.pattern = c);
  return new a(l2);
};
var Se = (a, s2) => {
  var c = X(s2) && "string" == typeof s2.enc ? s2.enc + "" : "hex";
  var D2 = a + "_" + c;
  var b = a + "";
  a = Oc;
  "hex" == c && ("md5" == b && (a = qe), "sha1" == b && (a = re), "sha256" == b && (a = Oc), "sha384" == b && (a = se), "sha512" == b && (a = te));
  "base64" == c && ("md5" == b && (a = $("^[A-Za-z0-9+/]{22}==$", lf)), "sha1" == b && (a = $("^[A-Za-z0-9+/]{27}=$", lf)), "sha256" == b && (a = $("^[A-Za-z0-9+/]{43}=$", lf)), "sha384" == b && (a = $("^[A-Za-z0-9+/]{64}$", lf)), "sha512" == b && (a = $("^[A-Za-z0-9+/]{86}==$", lf)));
  "base64url" == c && ("md5" == b && (a = $("^[A-Za-z0-9_-]{22}$", lf)), "sha1" == b && (a = $("^[A-Za-z0-9_-]{27}$", lf)), "sha256" == b && (a = $("^[A-Za-z0-9_-]{43}$", lf)), "sha384" == b && (a = $("^[A-Za-z0-9_-]{64}$", lf)), "sha512" == b && (a = $("^[A-Za-z0-9_-]{86}$", lf)));
  return Qa(void 0, D2, a, s2);
};
var Te = (a, b, l2) => {
  l2 = ca("string", l2);
  l2.check = "string_format";
  l2.format = a;
  "function" == typeof b && (l2.fn = b);
  X(b) && !(b == null) && "function" == typeof b.test && (l2.pattern = b, l2.fn === void 0 && (l2.fn = function(c) {
    return b.test(c);
  }));
  return new Z(l2);
};
var Ue = (s2) => {
  var y2 = void 0;
  var a = void 0;
  X(s2) && !(s2 == null) && (y2 = s2.input, a = s2.output);
  Array.isArray(y2) && (y2 = Bc(y2, void 0, void 0));
  y2 === void 0 && (y2 = new Ia({ type: "unknown" }), s2 = ca("array", void 0), s2.element = y2, y2 = new ya(s2));
  a === void 0 && (a = new Ia({ type: "unknown" }));
  return new Sa({ type: "function", input: y2, output: a });
};
var Id = (o2) => {
  var a = Rb();
  !(o2 === void 0) && !(o2 == null) && (ia(a, o2), true === "localeError" in o2 && (Za = o2.localeError), true === "customError" in o2 && (Ab = o2.customError));
  return a;
};
var Jd = (i2, u2, f2) => Na(i2, u2, f2, Jd);
var Kd = (i2, u2, f2) => Oa(i2, u2, f2, Kd);
var $b = (o2, a) => {
  o2 = o2 == null ? {} : ia({}, o2);
  o2.direction = a;
  return o2;
};
var Ld = (i2, u2, f2) => Na(i2, u2, $b(f2, "backward"), Ld);
var Md = (i2, u2, f2) => Na(i2, u2, $b(f2, "forward"), Md);
var Nd = (i2, u2, f2) => Oa(i2, u2, $b(f2, "backward"), Nd);
var Od = (i2, u2, f2) => Oa(i2, u2, $b(f2, "forward"), Od);
var bf = (L2) => {
  var a = [];
  if (!X(L2) || L2 == null) return a;
  var w2 = pa(L2);
  var g2 = w2.length;
  var h2 = 0, c;
  while (h2 < g2) {
    c = w2[h2];
    a.push(ea("property", { property: c, schema: L2[w2[h2]] }));
    h2 = h2 + 1;
  }
  return a;
};
var Pd = (i2) => i2;
var W = (n2, j2) => {
  pb[n2] = j2;
};
var ga = Object;
var v = ga.prototype;
var Da = v.hasOwnProperty;
var w = ga.prototype;
var Qd = w.isPrototypeOf;
var x = Array.prototype;
x.slice;
var Rd = ga.is;
var Sd = za("inst", "return function(payload){if(typeof payload.value==='string')return payload;payload.issues.push({expected:'string',code:'invalid_type',input:payload.value,inst:inst});return payload;}");
var Td = za("inst", "return function(payload){var v=payload.value;if(typeof v==='number'&&Number.isFinite(v))return payload;var iss={expected:'number',code:'invalid_type',input:v,inst:inst};if(typeof v==='number'){if(Number.isNaN(v))iss.received='NaN';else if(!Number.isFinite(v))iss.received=String(v);}payload.issues.push(iss);return payload;}");
var Ud = za("inst", "return function(payload){if(typeof payload.value==='boolean')return payload;payload.issues.push({expected:'boolean',code:'invalid_type',input:payload.value,inst:inst});return payload;}");
var Dc = za(lf, "var recCache=new WeakMap();function isRecursive(node,stack){var cached=recCache.get(node);if(cached!==void 0)return cached;if(stack.has(node))return true;stack.add(node);var result=false;function check(child){if(!result&&child&&child._zod)result=isRecursive(child,stack);}var def=node._zod&&node._zod.def;if(!def){stack.delete(node);recCache.set(node,false);return false;}if(def.type==='lazy'){stack.delete(node);recCache.set(node,true);return true;}var shape=def.shape;if(shape)for(var key in shape)check(shape[key]);for(var k in def){var value=def[k];if(!value||typeof value!=='object')continue;if(value._zod)check(value);else if(Array.isArray(value))for(var i=0;i<value.length;i++)check(value[i]);}stack.delete(node);recCache.set(node,result);return result;}return function useLil(node){return isRecursive(node,new Set());};")();
var f = "def,inst";
var Vd = za(f, "return function(payload){var input=payload.value;var fmt=def.format;if(fmt==='int'||fmt==='int32'||fmt==='safeint'){if(typeof input!=='number'||!Number.isInteger(input)){payload.issues.push({expected:'int',code:'invalid_type',input:input,inst:inst,continue:false});return;}}if(fmt==='safeint'&&!Number.isSafeInteger(input)){if(input>0)payload.issues.push({code:'too_big',maximum:9007199254740991,inclusive:true,origin:'number',input:input,inst:inst,continue:!def.abort});else payload.issues.push({code:'too_small',minimum:-9007199254740991,inclusive:true,origin:'number',input:input,inst:inst,continue:!def.abort});}};");
var Wd = za(f, "return function(payload){var p=def.pattern;if(!p)return;p.lastIndex=0;if(p.test(payload.value))return;var extra={origin:'string',code:'invalid_format',format:def.format,input:payload.value,inst:inst,continue:!def.abort};extra.pattern=p.toString();payload.issues.push(extra);};");
var Xd = za(f, "return function(payload){var v=payload.value;if(v==null||v.length==null)return;var n=typeof v==='string'?Array.from(v).length:v.length;if(n<def.minimum)payload.issues.push({origin:Array.isArray(v)?'array':'string',code:'too_small',minimum:def.minimum,inclusive:true,input:v,inst:inst,continue:!def.abort});};");
var Yd = za(f, "return function(payload){var v=payload.value;if(v==null||v.length==null)return;var n=typeof v==='string'?Array.from(v).length:v.length;if(n>def.maximum)payload.issues.push({origin:Array.isArray(v)?'array':'string',code:'too_big',maximum:def.maximum,inclusive:true,input:v,inst:inst,continue:!def.abort});};");
var Zd = za(f, "return function(payload){var v=payload.value;var bound=def.value;var inclusive=def.inclusive!==false;var ok=inclusive?v>=bound:v>bound;if(ok)return;var origin=typeof v==='number'?'number':typeof v==='bigint'?'bigint':typeof v==='object'?'date':def.origin;if(!origin)origin='number';payload.issues.push({origin:origin,code:'too_small',minimum:typeof bound==='object'&&bound&&typeof bound.getTime==='function'?bound.getTime():bound,inclusive:inclusive,input:v,inst:inst,continue:!def.abort});};");
var _d = za(f, "return function(payload){var v=payload.value;var bound=def.value;var inclusive=def.inclusive!==false;var ok=inclusive?v<=bound:v<bound;if(ok)return;var origin=typeof v==='number'?'number':typeof v==='bigint'?'bigint':typeof v==='object'?'date':def.origin;if(!origin)origin='number';payload.issues.push({origin:origin,code:'too_big',maximum:typeof bound==='object'&&bound&&typeof bound.getTime==='function'?bound.getTime():bound,inclusive:inclusive,input:v,inst:inst,continue:!def.abort});};");
var $d = za("intern,fail", "return function(data,params){var ctx=params==null?{async:false}:Object.assign({},params,{async:false});var result=intern.run({value:data,issues:[]},ctx);if(result instanceof Promise)throw new Error('Encountered Promise during synchronous parse. Use .parseAsync() instead.');if(!result.issues.length)return result.value;return fail(result,ctx);}");
var ae = za("intern,fail", "return function(data,params){var ctx=params==null?{async:false}:Object.assign({},params,{async:false});var result=intern.run({value:data,issues:[]},ctx);if(result instanceof Promise)throw new Error('Encountered Promise during synchronous parse. Use .parseAsync() instead.');if(!result.issues.length)return {success:true,data:result.value};return fail(result,ctx);}");
var Ga = [];
var ac = 0;
var bc = void 0;
var Ya = false;
var be = { configurable: true, get: function() {
  Ya = true;
} };
var Ec = /* @__PURE__ */ new WeakMap();
var cc = /* @__PURE__ */ new WeakMap();
var Za = void 0;
var Ab = void 0;
var _a = void 0;
var ce = { major: 4, minor: 4, patch: 3 };
var ua = (0, function(g2) {
  if (this === void 0 || this == null || !X(this)) {
    var a = ua.prototype;
    a = ga.create(a);
  } else {
    a = this;
  }
  pc(a, g2);
  a.stack === void 0 && rb(a, ua);
  return a;
});
var Ha = function(c) {
  let a = Ha.prototype;
  a = ga.create(a);
  pc(a, c);
  rb(a, Ha);
  return a;
};
var Fc = function(b) {
  let a = Error;
  a = new a("Encountered unidirectional transform during encode: " + b);
  a.name = "ZodEncodeError";
  return a;
};
var Gc = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var hb = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
var Hc = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var de = /^[cC][0-9a-z]{6,}$/;
var ee = /^[0-9a-z]+$/;
var Ic = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var Jc = /^[a-zA-Z0-9_-]{21}$/;
var Kc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var Lc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
f = /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$/;
var Mc = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var fe = /^[0-9a-vA-V]{20}$/;
var ge = /^[A-Za-z0-9]{27}$/;
var he = /^\+[1-9]\d{6,14}$/;
var g = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
var ie = new RegExp("^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", "u");
var je = /^[A-Za-z0-9_-]*$/;
var ke = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var le = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var Nc = /^\d(?:[ -]?\d){11,18}$/;
var me = /^[0-9a-fA-F]*$/;
var ne = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
var oe = /^https?$/;
var pe = /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
var qe = /^[0-9a-fA-F]{32}$/;
var re = /^[0-9a-fA-F]{40}$/;
var Oc = /^[0-9a-fA-F]{64}$/;
var se = /^[0-9a-fA-F]{96}$/;
var te = /^[0-9a-fA-F]{128}$/;
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
var j = _("ZodISODate", Z);
var Rc = _("ZodISOTime", Z);
var k = _("ZodISODuration", Z);
var y = _("ZodEmail", Z);
var z = _("ZodGUID", Z);
var A = _("ZodUUID", Z);
var Sc = _("ZodURL", Z);
_("ZodCUID", Z);
_("ZodCUID2", Z);
_("ZodULID", Z);
_("ZodNanoID", Z);
_("ZodBase64", Z);
_("ZodIPv4", Z);
_("ZodIPv6", Z);
var B = _("ZodJWT", Z);
_("ZodEmoji", Z);
var l = (c, d) => {
  let E2 = { errors: [] };
  qc(c.issues, [], E2, d);
  return E2;
};
var m = (a) => {
  var b = a.issues;
  var c = b.slice(0);
  c.sort(function(a2, c2) {
    if (Array.isArray(a2.path)) {
      var d2 = a2.path;
      var b2 = d2.length;
    } else {
      b2 = 0;
    }
    Array.isArray(c2.path) ? (d2 = c2.path, a2 = d2.length) : a2 = 0;
    return b2 - a2 | 0;
  });
  var d = [];
  var Xs = c.length;
  b = 0;
  while (b < Xs) {
    a = c[b];
    var e = "\u2716 " + a.message;
    d.push(e);
    if (Array.isArray(a.path)) {
      var Ys = a.path;
      e = Ys.length > 0;
    } else {
      e = false;
    }
    e && (e = "  \u2192 at " + fd(a.path), d.push(e));
    b = b + 1;
  }
  return d.join("\n");
};
var n = (c, d) => {
  let e = { _errors: [] };
  Qb(c.issues, [], e, d);
  return e;
};
var o = ed;
var Fj = () => {
  let a = /* @__PURE__ */ new WeakMap();
  return gd(a, /* @__PURE__ */ new Map());
};
var C = Va();
var i = ua;
var p = Ha;
var q = (a, j2) => ud(da(a)).get(j2);
af();
var D = (0, function(a) {
  return new Z(ca("string", a));
});
var E = (0, function(a) {
  return new ha(ca("number", a));
});
var F = (0, function(a) {
  return new $a(ca("boolean", a));
});
var G = (0, function(a) {
  return new oa(ca("bigint", a));
});
var H = (0, function(a) {
  return new dc(ca("symbol", a));
});
var I = (0, function(a) {
  return new Ba(ca("date", a));
});
var J = (0, function(a) {
  return new ec(ca("nan", a));
});
var K = (0, function() {
  return new fc({ type: "undefined" });
});
var L = (0, function() {
  return new Bb({ type: "null" });
});
var M = (0, function() {
  return new gc({ type: "any" });
});
var N = (0, function() {
  return new Ia({ type: "unknown" });
});
var O = (0, function() {
  return new ib({ type: "never" });
});
var P = (0, function() {
  return new hc({ type: "void" });
});
var Q = (0, function() {
  var A2 = arguments[0];
  var a = arguments[1];
  if (!Array.isArray(A2)) {
    var d = [];
    d.push(A2);
    A2 = d;
  }
  d = ca("literal", a);
  d.values = A2;
  d = new Cb(d);
  return d;
});
var r = (0, function(a, b) {
  return Gd(a, b);
});
var s = (0, function(a, b) {
  return Ac(a, b);
});
var R = (0, function() {
  let k2 = arguments[0];
  k2 = Ac(k2, arguments[1]);
  return k2.strict();
});
var S = (0, function() {
  let k2 = arguments[0];
  k2 = Ac(k2, arguments[1]);
  return k2.passthrough();
});
var T = (0, function() {
  let a = arguments[0], l2 = arguments[1];
  l2 = ca("array", l2);
  l2.element = a;
  return new ya(l2);
});
var U = (0, function(a, b, c) {
  return Bc(a, b, c);
});
var V = (0, function(a, b, c) {
  return _b(a, b, c);
});
var uf = (0, function() {
  let a = arguments[0], l2 = arguments[1];
  l2 = ca("union", l2);
  l2.options = a;
  return new Ka(l2);
});
var vf = (0, function() {
  let a = arguments[0], l2 = arguments[1];
  l2 = ca("union", l2);
  l2.options = a;
  l2.inclusive = false;
  return new Eb(l2);
});
var wf = (0, function(c, a, e) {
  let b = c + "";
  return Ne(b, a, e);
});
var xf = (0, function(a, b) {
  return new Fb({ type: "intersection", left: a, right: b });
});
var yf = (0, function(a, b) {
  return new jb({ type: "map", keyType: a, valueType: b });
});
var zf = (0, function() {
  let a = arguments[0], l2 = arguments[1];
  l2 = ca("set", l2);
  l2.valueType = a;
  return new kb(l2);
});
var Af = (0, function(a) {
  return new lb({ type: "lazy", getter: a });
});
var Bf = (0, function(a) {
  return new Jb({ type: "promise", innerType: a });
});
var Cf = (0, function() {
  var a = arguments[0];
  var b = arguments[1];
  "function" == typeof a || (a = function(a2) {
    return true;
  });
  var d = ca("custom", b);
  d.fn = a;
  d.check = "custom";
  d = new Ra(d);
  return d;
});
var Df = (0, function(a) {
  return new ob(ca("file", a));
});
var Ef = (0, function() {
  var a = arguments[0];
  var b = arguments[1];
  var d = ca("custom", b);
  d.check = "custom";
  d.abort = true;
  d.fn = function(u2) {
    return qa(a, u2) ? true : false;
  };
  d = new Ra(d);
  b = da(d).handle._zod;
  var c = b.bag;
  c.Class = a;
  return d;
});
var Ff = (0, function(a) {
  return new mb({ type: "transform", transform: a });
});
var Gf = (0, function(a) {
  return Ue(a);
});
var Hf = (0, function() {
  let c = arguments[0];
  c = new ha(ca("number", c));
  return fa(c, ea("number_format", { format: "int" }));
});
var If = (0, function() {
  let c = arguments[0];
  c = new ha(ca("number", c));
  return fa(c, ea("number_format", { format: "int32" }));
});
var Jf = (0, function() {
  let c = arguments[0];
  c = new ha(ca("number", c));
  return fa(c, ea("number_format", { format: "uint32" }));
});
var Kf = (0, function() {
  let c = arguments[0];
  c = new ha(ca("number", c));
  return fa(c, ea("number_format", { format: "float32" }));
});
var Lf = (0, function() {
  let c = arguments[0];
  c = new ha(ca("number", c));
  return fa(c, ea("number_format", { format: "float64" }));
});
var Mf = (0, function(a, b) {
  return new Ea({ type: "pipe", in: a, out: b });
});
var Nf = (0, function(a) {
  return a.optional.call(a);
});
var Of = (0, function(a) {
  return a.nullable.call(a);
});
var eg = Gc;
var fg = function(c) {
  return Qa(y, "email", eg, c);
};
var gg = hb;
var hg = function(c) {
  return Qa(A, "uuid", gg, c);
};
var ig = Hc;
var jg = function(c) {
  return Qa(z, "guid", ig, c);
};
var Pf = (0, function(a) {
  var l2 = ca("string", a);
  l2.format = "url";
  l2.check = "string_format";
  l2.abort = false;
  l2 = new Sc(l2);
  return l2;
});
var Qf = (0, function(a) {
  var l2 = ca("string", a);
  l2.format = "url";
  l2.check = "string_format";
  l2.abort = false;
  l2.protocol = oe;
  l2.hostname = pe;
  l2 = new Sc(l2);
  return l2;
});
var Rf = (0, function(a, b, c) {
  return Hd(a, b, c);
});
var Sf = (0, function() {
  var a = arguments[0];
  var B2 = da(a);
  a = B2.def.out;
  var b = B2.def.in;
  var c = B2.def.reverseTransform;
  a = Hd(a, b, { decode: c, encode: B2.def.transform });
  return a;
});
var Tf = (0, function() {
  let a = arguments[0], b = arguments[1], c = Kb;
  a = new mb({ type: "transform", transform: a });
  return new c({ type: "pipe", in: a, out: b });
});
var Uf = (0, function(a) {
  return Qe(a);
});
var Vf = (0, function(a) {
  return new mc({ type: "success", innerType: a });
});
var Wf = (0, function(a) {
  return Re(a);
});
var Xf = (0, function(a) {
  return Qa(void 0, "hex", me, a);
});
var Yf = (0, function(a) {
  return Qa(void 0, "hostname", ne, a);
});
var Zf = (0, function(a, b) {
  return Se(a, b);
});
var _f = (0, function() {
  let k2 = arguments[0], a = arguments[1];
  k2 = _b(k2, a, arguments[2]);
  da(k2).def.partial = true;
  return k2;
});
var $f = (0, function(a) {
  return a.keyof.call(a);
});
var ag = (0, function(a, e) {
  return a.catch.call(a, e);
});
var t = (0, function(a, e) {
  return a.default.call(a, e);
});
var bg = (0, function(a, e) {
  return a.prefault.call(a, e);
});
var cg = (0, function(a) {
  return a.nonoptional.call(a);
});
var dg = (0, function(a) {
  return a.readonly.call(a);
});
var kg = g;
var lg = function(c) {
  return Qa(B, "jwt", kg, c);
};
var mg = void 0;
var ng = Jc;
var og = function(c) {
  return Qa(mg, "nanoid", ng, c);
};
var pg = void 0;
var qg = Ic;
var rg = function(c) {
  return Qa(pg, "ulid", qg, c);
};
var sg = void 0;
var tg = Kc;
var ug = function(c) {
  return Qa(sg, "ipv4", tg, c);
};
var vg = void 0;
var wg = Lc;
var xg = function(c) {
  return Qa(vg, "ipv6", wg, c);
};
g = { string: function() {
  let a = arguments[0];
  a = new Z(ca("string", a));
  zb(a);
  return a;
}, number: function() {
  let a = arguments[0];
  a = new ha(ca("number", a));
  zb(a);
  return a;
}, boolean: function() {
  let a = arguments[0];
  a = new $a(ca("boolean", a));
  zb(a);
  return a;
}, bigint: function() {
  let a = arguments[0];
  a = new oa(ca("bigint", a));
  zb(a);
  return a;
}, date: function() {
  let a = arguments[0];
  a = new Ba(ca("date", a));
  zb(a);
  return a;
} };
var h = { datetime: function(b) {
  let a = Qc;
  return Qa(a, "datetime", Fd(b), b);
} };
var yg = f;
h.date = function(c) {
  return Qa(j, "date", yg, c);
};
h.time = function(b) {
  let a = Rc;
  return Qa(a, "time", Ed(b), b);
};
var zg = Mc;
h.duration = function(c) {
  return Qa(k, "duration", zg, c);
};
var u = { en: function() {
  return { localeError: function(H2) {
    return dd(H2);
  } };
} };
f = {};
var pb = {};
W("string", D);
W("number", E);
W("boolean", F);
W("bigint", G);
W("symbol", H);
W("date", I);
W("nan", J);
W("undefined", K);
W("null", L);
W("any", M);
W("unknown", N);
W("never", O);
W("void", P);
W("literal", Q);
W("enum", r);
W("nativeEnum", r);
W("object", s);
W("strictObject", R);
W("looseObject", S);
W("interface", s);
W("array", T);
W("tuple", U);
W("record", V);
W("union", uf);
W("xor", vf);
W("discriminatedUnion", wf);
W("intersection", xf);
W("map", yf);
W("set", zf);
W("lazy", Af);
W("promise", Bf);
W("custom", Cf);
W("file", Df);
W("instanceof", Ef);
W("transform", Ff);
W("function", Gf);
W("int", Hf);
W("int32", If);
W("uint32", Jf);
W("float32", Kf);
W("float64", Lf);
W("pipe", Mf);
W("optional", Nf);
W("nullable", Of);
W("email", fg);
W("uuid", hg);
W("guid", jg);
W("url", Pf);
W("httpUrl", Qf);
W("codec", Rf);
W("invertCodec", Sf);
W("preprocess", Tf);
W("stringbool", Uf);
W("success", Vf);
W("json", Wf);
W("hex", Xf);
W("hostname", Yf);
W("hash", Zf);
W("partialRecord", _f);
W("looseRecord", function() {
  let k2 = arguments[0], a = arguments[1];
  k2 = _b(k2, a, arguments[2]);
  da(k2).def.mode = "loose";
  return k2;
});
W("creditCard", function(a) {
  return Qa(void 0, "credit_card", Nc, a);
});
W("mac", function(a) {
  var d = X(a) && "string" == typeof a.delimiter ? a.delimiter : ":";
  d = d + "";
  d = Qa(void 0, "mac", $(tf + d + nf + d + sf, lf), a);
  return d;
});
W("keyof", $f);
W("catch", ag);
W("default", t);
W("_default", t);
W("prefault", bg);
W("nonoptional", cg);
W("readonly", dg);
W("jwt", lg);
W("nanoid", og);
W("ulid", rg);
W("ipv4", ug);
W("ipv6", xg);
W("coerce", g);
W("iso", h);
W("locales", u);
W("core", f);
W("parse", Jd);
W("safeParse", (i2, u2, f2) => Yb(i2, u2, f2));
W("parseAsync", Kd);
W("safeParseAsync", (i2, u2, f2) => Zb(i2, u2, f2));
W("encode", Ld);
W("decode", Md);
W("encodeAsync", Nd);
W("decodeAsync", Od);
W("treeifyError", l);
W("prettifyError", m);
W("formatError", n);
W("flattenError", o);
W("registry", Fj);
W("globalRegistry", C);
W("config", Id);
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
W("ZodError", i);
W("ZodRealError", p);
W("getDiscriminatedOption", q);
W("ZodExactOptional", bb);
W("exactOptional", function(a) {
  return new bb({ type: "optional", innerType: a, exact: true });
});
W("slugify", function() {
  return ea("overwrite", { transform: function(F2) {
    return F2.toLowerCase().trim().replace($("[^\\w\\s-]", "g"), lf).replace($("[\\s_-]+", "g"), "-").replace($("^-+|-+$", "g"), lf);
  } });
});
W("properties", function(a) {
  return bf(a);
});
W("property", function() {
  let Q2 = arguments[0], c = arguments[1], e = arguments[2];
  Q2 = { property: Q2, schema: c };
  ia(Q2, Pa(e));
  return ea("property", Q2);
});
W("templateLiteral", function() {
  var a = arguments[0];
  var b = arguments[1];
  var d = ca("template_literal", b);
  d.parts = a;
  d = new nc(d);
  b = d._zod;
  da(d);
  ba(b, "pattern", { value: Be(a), writable: true, configurable: true, enumerable: true });
  return d;
});
W("stringFormat", function(a, b, c) {
  return Te(a, b, c);
});
W("check", function(a, b) {
  return ub(a, b);
});
W("with", function(a, b) {
  return ub(a, b);
});
W("refine", function() {
  let a = arguments[0], l2 = arguments[1];
  l2 = ca("custom", l2);
  l2.fn = a;
  l2.check = "custom";
  return new Ra(l2);
});
W("superRefine", function(a, b) {
  return ub(function(_s) {
    var Zs = this;
    _s.addIssue = function(o2) {
      if ("string" == typeof o2) {
        var b2 = _s.value;
        o2 = { message: o2, code: "custom", input: b2, inst: Zs, path: [] };
      } else {
        !o2.fatal || (o2.continue = false);
        o2.code === void 0 && (o2.code = "custom");
        true === "input" in o2 || (o2.input = _s.value);
        o2.inst === void 0 && (o2.inst = Zs);
        o2.continue === void 0 && (o2.continue = true);
      }
      var w2 = _s.issues;
      w2.push(o2);
    };
    return a(_s.value, _s);
  }, b);
});
W("trim", function() {
  return ea("overwrite", { transform: function(F2) {
    return F2.trim();
  } });
});
W("maxLength", function() {
  var Q2 = arguments[0];
  var c = arguments[1];
  Q2 = { maximum: Q2 };
  X(c) && !(c == null) && ia(Q2, Pa(c));
  var a = ea("max_length", Q2);
  return a;
});
W("minLength", function() {
  var Q2 = arguments[0];
  var c = arguments[1];
  Q2 = { minimum: Q2 };
  X(c) && !(c == null) && ia(Q2, Pa(c));
  var a = ea("min_length", Q2);
  return a;
});
W("ZodISODateTime", Qc);
W("ZodISODate", j);
W("ZodISOTime", Rc);
W("ZodISODuration", k);
W("$ZodError", i);
W("NEVER", { status: "aborted" });
W("fromJSONSchema", function(e, f2) {
  e;
  f2;
  return new Ia({ type: "unknown" });
});
W("visit", Pd);
W("ZodIssueCode", { invalid_type: "invalid_type", too_big: "too_big", too_small: "too_small", invalid_format: "invalid_format", not_multiple_of: "not_multiple_of", unrecognized_keys: "unrecognized_keys", invalid_union: "invalid_union", invalid_key: "invalid_key", invalid_element: "invalid_element", invalid_value: "invalid_value", custom: "custom" });
W("TimePrecision", { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 });
ia(f, pb);
f.$ZodError = i;
f.$ZodRealError = p;
f.$ZodEncodeError = Fc;
f.toDotPath = fd;
f.flattenError = o;
f.formatError = n;
f.treeifyError = l;
f.prettifyError = m;
f.getDiscriminatedOption = q;
f.$ZodType = Y;
f.$ZodPipe = Ea;
f.$ZodCodec = nb;
f.$ZodPreprocess = Kb;
f.$ZodString = Z;
f.$ZodCustom = Ra;
f.$ZodNever = ib;
f.$ZodUnknown = Ia;
f.$ZodNumber = ha;
f.$ZodString = Z;
f.$ZodType = Y;
f.$ZodObject = ma;
f.$ZodOptional = ab;
f.visit = Pd;
f.$ZodObject = ma;
f.$ZodOptional = ab;
f.$ZodExactOptional = bb;
f.config = Id;
f.globalConfig = Rb();
f.util = He();
pb.util = f.util;
var cf = pb;

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
  if (json2.allOf) return json2.allOf.map((item) => fromJson(z2, item)).reduce((a, b) => a.and(b));
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
  const a = process(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = process(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
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
applyCompat(cf);
installVisit(cf);
installAsyncApi(cf);
cf.toJSONSchema = toJSONSchema;
cf.core.toJSONSchema = toJSONSchema;
cf.core.JSONSchemaGenerator = JSONSchemaGenerator;
cf.regexes = regexes_exports;
cf.core.regexes = regexes_exports;
cf.compile = cf.compile ?? ((schema) => schema);
if (cf.ZodType && cf.ZodType.prototype) {
  cf.ZodType.prototype.toJSONSchema = function toJSONSchemaMethod(params) {
    return toJSONSchema(this, params);
  };
}
var index_default = cf;
var string2 = cf.string;
var number2 = cf.number;
var boolean2 = cf.boolean;
var bigint2 = cf.bigint;
var symbol = cf.symbol;
var date2 = cf.date;
var nan = cf.nan;
var $undefined = cf.undefined;
var $null = cf.null;
var any = cf.any;
var unknown = cf.unknown;
var never = cf.never;
var $void = cf.void;
var literal = cf.literal;
var $enum = cf.enum;
var nativeEnum = cf.nativeEnum;
var object = cf.object;
var strictObject = cf.strictObject;
var looseObject = cf.looseObject;
var $interface = cf.interface;
var array = cf.array;
var tuple = cf.tuple;
var record = cf.record;
var union = cf.union;
var xor = cf.xor;
var discriminatedUnion = cf.discriminatedUnion;
var intersection = cf.intersection;
var map = cf.map;
var $set = cf.set;
var lazy = cf.lazy;
var promise = cf.promise;
var custom = cf.custom;
var file = cf.file;
var $instanceof = cf.instanceof;
var transform = cf.transform;
var $function = cf.function;
var int = cf.int;
var int32 = cf.int32;
var uint32 = cf.uint32;
var float32 = cf.float32;
var float64 = cf.float64;
var pipe = cf.pipe;
var optional = cf.optional;
var nullable = cf.nullable;
var email2 = cf.email;
var uuid2 = cf.uuid;
var guid2 = cf.guid;
var url = cf.url;
var httpUrl = cf.httpUrl;
var codec = cf.codec;
var invertCodec = cf.invertCodec;
var preprocess = cf.preprocess;
var stringbool = cf.stringbool;
var success = cf.success;
var json = cf.json;
var hex2 = cf.hex;
var hostname2 = cf.hostname;
var hash = cf.hash;
var partialRecord = cf.partialRecord;
var looseRecord = cf.looseRecord;
var creditCard2 = cf.creditCard;
var mac2 = cf.mac;
var keyof = cf.keyof;
var $catch = cf.catch;
var _default = cf._default;
var prefault = cf.prefault;
var nonoptional = cf.nonoptional;
var readonly = cf.readonly;
var jwt = cf.jwt;
var nanoid2 = cf.nanoid;
var ulid2 = cf.ulid;
var ipv42 = cf.ipv4;
var ipv62 = cf.ipv6;
var coerce = cf.coerce;
var iso = cf.iso;
var locales = cf.locales;
var core = cf.core;
var parse = cf.parse;
var safeParse = cf.safeParse;
var parseAsync = cf.parseAsync;
var safeParseAsync = cf.safeParseAsync;
var encode = cf.encode;
var decode = cf.decode;
var encodeAsync = cf.encodeAsync;
var decodeAsync = cf.decodeAsync;
var treeifyError = cf.treeifyError;
var prettifyError = cf.prettifyError;
var formatError = cf.formatError;
var flattenError = cf.flattenError;
var registry = cf.registry;
var globalRegistry2 = cf.globalRegistry;
var config = cf.config;
var ZodType = cf.ZodType;
var ZodString = cf.ZodString;
var ZodNumber = cf.ZodNumber;
var ZodBoolean = cf.ZodBoolean;
var ZodBigInt = cf.ZodBigInt;
var ZodSymbol = cf.ZodSymbol;
var ZodDate = cf.ZodDate;
var ZodNaN = cf.ZodNaN;
var ZodUndefined = cf.ZodUndefined;
var ZodNull = cf.ZodNull;
var ZodAny = cf.ZodAny;
var ZodUnknown = cf.ZodUnknown;
var ZodNever = cf.ZodNever;
var ZodVoid = cf.ZodVoid;
var ZodLiteral = cf.ZodLiteral;
var ZodEnum = cf.ZodEnum;
var ZodObject = cf.ZodObject;
var ZodArray = cf.ZodArray;
var ZodTuple = cf.ZodTuple;
var ZodRecord = cf.ZodRecord;
var ZodMap = cf.ZodMap;
var ZodSet = cf.ZodSet;
var ZodUnion = cf.ZodUnion;
var ZodDiscriminatedUnion = cf.ZodDiscriminatedUnion;
var ZodXor = cf.ZodXor;
var ZodIntersection = cf.ZodIntersection;
var ZodOptional = cf.ZodOptional;
var ZodNullable = cf.ZodNullable;
var ZodDefault = cf.ZodDefault;
var ZodPrefault = cf.ZodPrefault;
var ZodCatch = cf.ZodCatch;
var ZodNonOptional = cf.ZodNonOptional;
var ZodLazy = cf.ZodLazy;
var ZodPromise = cf.ZodPromise;
var ZodTransform = cf.ZodTransform;
var ZodPipe = cf.ZodPipe;
var ZodCodec = cf.ZodCodec;
var ZodPreprocess = cf.ZodPreprocess;
var ZodReadonly = cf.ZodReadonly;
var ZodCustom = cf.ZodCustom;
var ZodFile = cf.ZodFile;
var ZodFunction = cf.ZodFunction;
var ZodTemplateLiteral = cf.ZodTemplateLiteral;
var ZodSuccess = cf.ZodSuccess;
var ZodError = cf.ZodError;
var ZodRealError = cf.ZodRealError;
var getDiscriminatedOption = cf.getDiscriminatedOption;
var ZodExactOptional = cf.ZodExactOptional;
var exactOptional = cf.exactOptional;
var slugify = cf.slugify;
var properties = cf.properties;
var property = cf.property;
var templateLiteral = cf.templateLiteral;
var stringFormat = cf.stringFormat;
var check = cf.check;
var $with = cf.with;
var refine = cf.refine;
var superRefine = cf.superRefine;
var trim = cf.trim;
var maxLength = cf.maxLength;
var minLength = cf.minLength;
var ZodISODateTime = cf.ZodISODateTime;
var ZodISODate = cf.ZodISODate;
var ZodISOTime = cf.ZodISOTime;
var ZodISODuration = cf.ZodISODuration;
var $ZodError = cf.$ZodError;
var NEVER = cf.NEVER;
var fromJSONSchema = cf.fromJSONSchema;
var visit2 = cf.visit;
var ZodIssueCode = cf.ZodIssueCode;
var TimePrecision = cf.TimePrecision;
var util = cf.util;
var int64 = cf.int64;
var uint64 = cf.uint64;
var describe = cf.describe;
var meta = cf.meta;
var e1642 = cf.e164;
var cidrv42 = cf.cidrv4;
var cidrv62 = cf.cidrv6;
var base642 = cf.base64;
var base64url2 = cf.base64url;
var xid2 = cf.xid;
var ksuid2 = cf.ksuid;
var cuid3 = cf.cuid;
var cuid22 = cf.cuid2;
var emoji2 = cf.emoji;
var uuidv4 = cf.uuidv4;
var uuidv6 = cf.uuidv6;
var uuidv7 = cf.uuidv7;
var deepPartial2 = cf.deepPartial;
var safeEncode = cf.safeEncode;
var safeDecode = cf.safeDecode;
var safeEncodeAsync = cf.safeEncodeAsync;
var safeDecodeAsync = cf.safeDecodeAsync;
var setErrorMap = cf.setErrorMap;
var compile = cf.compile;
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
