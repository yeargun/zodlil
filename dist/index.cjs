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
  z: () => ke
});
module.exports = __toCommonJS(index_exports);

// dist/zod.core.js
var Be = "length";
var Ce = "issues";
var De = "value";
var Fe = "_zod";
var Ge = "string";
var He = "innerType";
var Ie = "Encountered Promise during synchronous parse. Use .parseAsync() instead.";
var Ke = "function";
var Le = "number";
var Me = "format";
var Qe = "input";
var Se = "pattern";
var Ve = "transform";
var Xe = "type";
var Ye = "message";
var Ze = 'Invalid discriminated union option at index "';
var $e = "values";
var af = "string_format";
var cf = "continue";
var df = "greater_than";
var ef = "def";
var ff = "check";
var hf = "bigint";
var kf = "options";
var lf = "optional";
var mf = "unrecognized_keys";
var nf = "number_format";
var of = "$pending";
var qf = "return async function(data,params){return await impl(data,params)}";
var rf = "custom";
var sf = "shape";
var uf = "less_than";
var vf = "min_length";
var yf = "overwrite";
var Bf = "optout";
var Cf = "invalid_union";
var Ef = "inst";
var Ff = "array";
var Gf = "optin";
var Hf = "includes";
var Jf = "set";
var Kf = "success";
var Lf = "max_length";
var Mf = "template_literal";
var Of = "invalid_key";
var Pf = "nonoptional";
var Qf = "discriminator";
var Rf = "length_equals";
var Sf = "aborted";
var Uf = "__proto__";
var Vf = "undefined";
var Xf = "coerce";
var Yf = "invalid_format";
var Zf = "boolean";
var $f = ".exactPartial() cannot be used on object schemas containing refinements";
var ag = "schema";
var cg = "valueType";
var dg = "invalid_value";
var eg = ".partial() cannot be used on object schemas containing refinements";
var fg = "propValues";
var gg = "[.*+?^${}()|[\\]\\\\]";
var hg = "invalid_element";
var ig = "object";
var jg = "symbol";
var kg = "catchall";
var lg = "hostname";
var og = "date";
var pg = "union";
var rg = "defaulted";
var sg = "lowercase";
var tg = "uppercase";
var vg = "size_equals";
var wg = "starts_with";
var xg = "";
var zg = "output";
var Bg = "unknown";
var Dg = "multipleOf";
var Fg = "min_size";
var Gg = "prefault";
var Hg = "intersection";
var Ig = "toJSONSchema";
var Ng = "null";
var Og = "pipe";
var Pg = "size";
var Qg = "base64url";
var Sg = "ends_with";
var Tg = "normalize";
var Wg = "base64";
var Xg = "record";
var $g = "_errors";
var ah = "default";
var bh = "element";
var ch = "credit_card";
var dh = "multiple_of";
var eh = "not_multiple_of";
var gh = "max_size";
var hh = "nullable";
var jh = "property";
var kh = "readonly";
var mh = "int";
var nh = "url";
var oh = "properties";
var ph = "$ZodCheckStringFormat";
var qh = "ZodDiscriminatedUnion";
var rh = "catch";
var uh = "Invalid input";
var vh = "out";
var wh = "file";
var yh = "name";
var Ah = "defaultValue";
var Bh = "invalid_type";
var Ch = "id";
var Dh = "in";
var Eh = "map";
var Fh = "max";
var Gh = "min";
var Hh = "ZodError";
var Ih = "backward";
var Jh = "datetime";
var Kh = "toString";
var Nh = "toLowerCase";
var Oh = "cidrv6";
var Qh = "){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}";
var Rh = "keyType";
var Sh = "literal";
var Th = '"';
var Vh = "ipv6";
var Xh = "uuid";
var _h = "never";
var $h = "$ZodCheck";
var di = "mime_type";
var fi = "too_small";
var gi = "safeParseAsync";
var ji = "jwt";
var ki = "nan";
var mi = "nanoid";
var pi = "ZodPreprocess";
var qi = "addIssue";
var ri = "duration";
var ti = "maxValue";
var vi = "minValue";
var xi = "enum";
var yi = "trim";
var zi = "Invalid input: expected ";
var Ai = "email";
var Bi = "parse";
var Ci = "tuple";
var Di = "forward";
var Fi = "promise";
var Hi = "safeint";
var Ii = "too_big";
var Ji = "description";
var Ki = "passthrough";
var Li = "ZodLiteral";
var Ni = " items";
var Oi = "$waits";
var Qi = "decode";
var Ri = "encode";
var Ui = "lazy";
var Vi = "time";
var Wi = "void";
var Yi = "ZodRecord";
var _i = " not found in enum";
var cj = "g";
var ej = "cuid2";
var fj = "emoji";
var gj = "int32";
var hj = "regex";
var ij = "$ZodType";
var jj = "ZodArray";
var kj = "ZodCodec";
var lj = "ZodUnion";
var nj = "nonempty";
var rj = "){5}[0-9a-f]{2}$";
var sj = "i";
var tj = "mac";
var uj = "ZodEnum";
var vj = "ZodPipe";
var wj = "ZodType";
var zj = "float32";
var Aj = "float64";
var Bj = "partial";
var Cj = "^(?:[0-9A-F]{2}";
var Dj = "\\$&";
var Ej = "cuid";
var Fj = "guid";
var Gj = "ipv4";
var Ij = "mime";
var Lj = "ulid";
var Nj = "ZodMap";
var Oj = "ZodSet";
var Pj = "ZodXor";
var Rj = "cidrv4";
var Uj = "sha256";
var Vj = "sha384";
var Wj = "sha512";
var Xj = "uint32";
var Yj = "exactOptional";
var _j = "ZodTransform";
var $j = "^(";
var ak = "any";
var bk = "hex";
var dk = "keyof";
var ek = "ksuid";
var fk = "loose";
var gk = "right";
var hk = "~memo";
var ik = " characters";
var jk = "decodeAsync";
var kk = "encodeAsync";
var mk = "nonnegative";
var nk = "nonpositive";
var ok = "superRefine";
var pk = "toUpperCase";
var rk = "[^\\w\\s-]";
var tk = "creditCard";
var uk = "parseAsync";
var wk = "startsWith";
var xk = "stringbool";
var yk = "$";
var Ak = "e164";
var Bk = "impl";
var Ck = "left";
var Fk = "sha1";
var Hk = "$ZodError";
var Ik = "maxLength";
var Jk = "minLength";
var Lk = "safeParse";
var Mk = ")$";
var Nk = " entries";
var Ok = "[\\s_-]+";
var Pk = "^-?\\d+$";
var Qk = "endsWith";
var Rk = "exactly ";
var Sk = "isFinite";
var Tk = "negative";
var Uk = "positive";
var X = (j2) => j2 != null && typeof j2 == ig;
var ma = () => /* @__PURE__ */ new Set();
var ra = (P2) => ga.keys(P2);
var ia = (P2, a) => ga.assign(P2, a);
var lb = (P2, a) => {
  if (a == null || !X(a)) return;
  var u2 = Reflect.ownKeys(a);
  var f2 = u2.length | 0;
  var g2 = 0, b, c2;
  while (g2 < f2) {
    b = u2[g2];
    b = ga.getOwnPropertyDescriptor(a, b);
    b !== void 0 && b != null && (c2 = u2[g2], ga.defineProperty(P2, c2, b));
    g2 = g2 + 1;
  }
};
var aa = (P2, n2, a) => {
  ga.defineProperty(P2, n2, a);
};
var Aa = (P2, n2, j2) => {
  aa(P2, n2, { value: j2, writable: true, enumerable: true, configurable: true });
};
var Cb = (a, Q2) => {
  var b = Error.captureStackTrace;
  typeof b == Ke && b(a, Q2);
};
var Ma = (j2) => true === Number.isFinite(j2);
var pa = (a) => new Error(a);
var $ = (a, b) => new RegExp(a, b);
var Ba = (a, j2) => !!a.test(j2);
var ca = (j2) => X(j2) && typeof j2.then == Ke;
var Db = (j2) => ({ enumerable: false, writable: true, configurable: true, value: j2 });
var Ea = (j2) => ({ enumerable: false, writable: false, configurable: true, value: j2 });
var wa = (c2, a) => {
  let b = globalThis.Function;
  return new b(c2 + "", a + "");
};
var Nd = (a, b, z2, d2, e2) => {
  let c2 = globalThis.Function;
  let f2 = new c2("parseAsync,applyFn,input,output,implFn", "return async function(){var a=Array.from(arguments);var p=input?await parseAsync(input,a):a;var r=await applyFn(implFn,this,p);return output?await parseAsync(output,r):r}");
  c2 = [];
  c2.push(a);
  c2.push(b);
  c2.push(z2);
  c2.push(d2);
  c2.push(e2);
  return f2.apply(void 0, c2);
};
var sa = (Q2, j2) => {
  if (j2 == null) return false;
  Q2 = Q2.prototype;
  return true === fd.call(Q2, j2);
};
var Od = (C2, l2, k2) => {
  if (C2 == nf) return od(l2, k2);
  if (C2 == vf) return qd(l2, k2);
  if (C2 == Lf) return rd(l2, k2);
  if (C2 == df) return sd(l2, k2);
  if (C2 == uf) return td(l2, k2);
  if (C2 == af) {
    if (l2.pattern === void 0 || typeof l2.format != Ge) return;
    var I2 = l2.format + "";
    if (I2 != Ai) return;
    return pd(l2, k2);
  }
};
var Pd;
var ea;
var ae;
(function() {
  let a = (k2) => {
    if (k2 !== void 0 && k2._zod !== void 0) {
      var D2 = k2._zod;
      var p2 = typeof D2.check;
      if (p2 != Ke) {
        var l2 = D2.def;
        var r2 = typeof l2.check;
        r2 == Ge && (k2 = Od(l2.check + "", l2, k2), k2 === void 0 || (D2.check = k2));
      }
    }
  };
  let b = (C2) => C2 == vf ? "$ZodCheckMinLength" : C2 == Lf ? "$ZodCheckMaxLength" : C2 == Rf ? "$ZodCheckLengthEquals" : C2 == df ? "$ZodCheckGreaterThan" : C2 == uf ? "$ZodCheckLessThan" : C2 == dh ? "$ZodCheckMultipleOf" : C2 == Fg ? "$ZodCheckMinSize" : C2 == gh ? "$ZodCheckMaxSize" : C2 == vg ? "$ZodCheckSizeEquals" : C2 == Hf ? "$ZodCheckIncludes" : C2 == wg ? "$ZodCheckStartsWith" : C2 == Sg ? "$ZodCheckEndsWith" : C2 == af ? ph : C2 == yf ? "$ZodCheckOverwrite" : C2 == di ? "$ZodCheckMimeType" : C2 == nf ? "$ZodCheckNumberFormat" : C2 == sg ? ph : C2 == tg ? ph : $h;
  let c2 = (e2) => {
    e2 = e2.value;
    if (e2 == null) return false;
    return e2.length !== void 0;
  };
  let d2 = (e2) => {
    e2 = e2.value;
    if (e2 == null) return false;
    return e2.size !== void 0;
  };
  Pd = function(k2) {
    var y2 = [];
    var g2 = k2._zod;
    g2 = g2.def;
    var p2 = typeof g2.check;
    p2 == Ge && y2.push(k2);
    k2 = g2.checks;
    if (k2 !== void 0 && Array.isArray(k2)) {
      var f2 = k2.length | 0;
      g2 = 0;
      while (g2 < f2) {
        a(k2[g2]);
        var e2 = k2[g2];
        y2.push(e2);
        g2 = g2 + 1;
      }
    }
    return y2;
  };
  ea = function(C2, N2) {
    N2.check = C2;
    N2.when === void 0 && (C2 == vf || C2 == Lf || C2 == Rf ? N2.when = function(e3) {
      return c2(e3) ? e3 : void 0;
    } : (C2 == Fg || C2 == gh || C2 == vg) && (N2.when = function(e3) {
      return d2(e3) ? e3 : void 0;
    }));
    var e2 = b(C2);
    C2 = ma();
    C2.add($h);
    C2.add(e2);
    var D2 = { def: N2, onattach: [], traits: C2 };
    C2 = { def: N2 };
    N2 = (0, function() {
      return C2;
    });
    aa(N2, yh, Ea(e2));
    C2.constructor = N2;
    aa(C2, Fe, Db(D2));
    a(C2);
    return C2;
  };
  ae = function(k2, h2, D2, e2) {
    if (h2.def.coerce) return;
    a(k2);
    h2 = h2.kind;
    if (0 == h2) h2 = hd(k2);
    else if (1 == h2) h2 = id(k2);
    else if (2 == h2) h2 = jd(k2);
    else if (15 == h2) {
      h2 = [];
      h2.push(e2);
      h2.push(md);
      h2.push(k2);
      h2 = nd.apply(void 0, h2);
    } else if (16 == h2) h2 = ld(e2, k2);
    else {
      return;
    }
    Object.assign(D2, { parse: h2, run: Qd(h2, Pd(k2), e2, D2, k2) });
  };
})();
var se = (a) => {
  var f2 = a.length | 0;
  var g2 = 0, J2;
  while (g2 < f2) {
    J2 = a[g2];
    if (J2._zod === void 0) J2 = true;
    else {
      J2 = J2._zod;
      var k2 = typeof J2.check;
      J2 = k2 != Ke;
    }
    if (J2) return false;
    g2 = g2 + 1;
  }
  return true;
};
var Qd = (a, b, d2, D2, e2) => {
  var h2 = b.length | 0;
  if (0 == h2) return a;
  if (!se(b)) return d2;
  var c2 = [];
  c2.push(a);
  c2.push(b);
  c2.push(d2);
  c2.push(D2);
  c2.push(e2);
  return kd.apply(void 0, c2);
};
function Rd(o2, l2) {
  var a = l2.type + "";
  o2.id = Rb;
  Rb = Rb + 1 | 0;
  o2.kind = Sd(a);
  a == pg && typeof l2.discriminator != Ge && false === l2.inclusive && (o2.kind = 38);
  o2.handle = void 0;
  o2.def = l2;
  o2.ctor = void 0;
  o2.typeName = a;
  a == mh && (o2.typeName = Le);
  o2.trait = wj;
  o2.values = void 0;
  o2.optin = 0;
  o2.optout = 0;
  o2.hasChecks = false;
  Ha.push(o2);
  Td(o2);
}
var Sd = (a) => a == Ge ? 0 : a == Le ? 1 : a == mh ? 1 : a == Zf ? 2 : a == hf ? 3 : a == jg ? 4 : a == og ? 5 : a == ki ? 6 : a == Vf ? 7 : a == Ng ? 8 : a == ak ? 9 : a == Bg ? 10 : a == _h ? 11 : a == Wi ? 12 : a == Sh ? 13 : a == xi ? 14 : a == ig ? 15 : a == Ff ? 16 : a == Ci ? 17 : a == Xg ? 18 : a == Eh ? 19 : a == Jf ? 20 : a == pg ? 21 : a == Hg ? 22 : a == lf ? 23 : a == hh ? 24 : a == ah ? 25 : a == Gg ? 26 : a == rh ? 27 : a == Pf ? 28 : a == Ui ? 29 : a == Fi ? 30 : a == Ve ? 31 : a == Og ? 32 : a == kh ? 33 : a == rf ? 34 : a == wh ? 35 : a == Kf ? 37 : a == Ke ? 39 : a == Mf ? 40 : 34;
var Td = (o2) => {
  var m2 = o2.typeName;
  var l2 = o2.def;
  if (m2 == Vf) {
    m2 = ma();
    m2.add(void 0);
    o2.values = m2;
  } else if (m2 == Ng) {
    m2 = ma();
    m2.add(null);
    o2.values = m2;
  } else if (m2 == Sh) {
    var g2 = ma();
    m2 = l2.values;
    if (Array.isArray(m2)) {
      var f2 = m2.length | 0;
      l2 = 0;
      while (l2 < f2) {
        var a = m2[l2];
        g2.add(a);
        l2 = l2 + 1;
      }
    }
    o2.values = g2;
  } else if (m2 == xi) {
    g2 = ma();
    l2 = Tc(l2.entries);
    f2 = l2.length | 0;
    m2 = 0;
    while (m2 < f2) {
      a = l2[m2];
      g2.add(a);
      m2 = m2 + 1;
    }
    o2.values = g2;
  } else if (m2 == lf) {
    m2 = ka(o2, He);
    if (m2) {
      if (m2.values !== void 0) {
        g2 = ma();
        a = Array.from(m2.values);
        var S2 = a.length | 0;
        f2 = 0;
        while (f2 < S2) {
          var b = a[f2];
          g2.add(b);
          f2 = f2 + 1;
        }
        l2.exact || g2.add(void 0);
        o2.values = g2;
      }
      2 == m2.optin ? o2.optin = 2 : o2.optin = 1;
    } else {
      o2.optin = 1;
    }
    o2.optout = 1;
  } else if (m2 == hh) {
    m2 = ka(o2, He);
    if (m2) {
      if (m2.values !== void 0) {
        l2 = ma();
        f2 = Array.from(m2.values);
        a = f2.length | 0;
        g2 = 0;
        while (g2 < a) {
          S2 = f2[g2];
          l2.add(S2);
          g2 = g2 + 1;
        }
        l2.add(null);
        o2.values = l2;
      }
      o2.optin = m2.optin;
      o2.optout = m2.optout;
    }
  } else if (m2 == ah || m2 == Gg || m2 == rh) {
    l2 = ka(o2, He);
    m2 == rh ? (o2.optin = 1, !l2 || (m2 = l2, o2.values = m2.values, 2 == m2.optin && (o2.optin = 2))) : (o2.optin = 2, !l2 || (o2.values = l2.values));
  } else if (m2 == kh) {
    m2 = ka(o2, He);
    !m2 || (o2.values = m2.values, o2.optin = m2.optin, o2.optout = m2.optout);
  } else if (m2 == Pf) {
    m2 = ka(o2, He);
    !m2 || (o2.values = m2.values);
  } else if (m2 == Ve) o2.optin = 1;
  else if (m2 == Og) {
    m2 = ka(o2, Dh);
    !m2 || (o2.values = m2.values, o2.optin = m2.optin, o2.optout = m2.optout);
  } else if (m2 == pg) {
    S2 = l2.options;
    if (Array.isArray(S2)) {
      var c2 = S2.length | 0;
      m2 = c2 > 0;
      var d2 = ma();
      g2 = false;
      f2 = false;
      a = false;
      b = 0;
      while (b < c2) {
        l2 = ua(S2[b]);
        if (l2) {
          2 == l2.optin && (g2 = true);
          0 != l2.optin && (f2 = true);
          1 == l2.optout && (a = true);
          if (l2.values === void 0) m2 = false;
          else {
            var e2 = Array.from(l2.values);
            var h2 = e2.length | 0;
            l2 = 0;
            while (l2 < h2) {
              var i2 = e2[l2];
              d2.add(i2);
              l2 = l2 + 1;
            }
          }
        } else {
          m2 = false;
        }
        b = b + 1;
      }
      m2 && (o2.values = d2);
      g2 ? o2.optin = 2 : f2 && (o2.optin = 1);
      a && (o2.optout = 1);
    }
  }
  o2.hasChecks = false;
  var kc2 = typeof o2.def.check;
  if (kc2 == Ge) o2.hasChecks = true;
  else {
    m2 = o2.def.checks;
    if (Array.isArray(m2)) {
      var ic2 = m2.length | 0;
      m2 = ic2 > 0;
    } else {
      m2 = false;
    }
    m2 && (o2.hasChecks = true);
  }
};
var Eb = (e2, q2, a, m2) => {
  var b = m2.issues;
  var f2 = b.length | 0;
  f2 > 0 && (b = m2.issues, e2 = e2.issues, Ua(b, e2, a));
  q2[a] = m2.value;
};
var Ec = (e2, q2, n2, a, b, c2, m2) => {
  if (a && 0 == (m2.issues.length | 0)) {
    m2.value === void 0 ? q2[n2] = void 0 : q2[n2] = m2.value;
    return;
  }
  var d2 = 1 == c2;
  var g2 = 0 != b;
  c2 = !a && d2 && 1 == b;
  if (!c2 && (m2.issues.length | 0) > 0) if (g2 && d2 && !a) c2 = true;
  else {
    d2 = m2.issues;
    var f2 = e2.issues;
    Ua(d2, f2, n2);
  }
  if (!c2 && !a && 0 == b) {
    b = m2.issues;
    var B2 = b.length | 0;
    0 == B2 && (b = ya(Pf, void 0), Jb(b, n2), e2 = e2.issues, e2.push(b));
    c2 = true;
  }
  if (c2) return;
  m2.value === void 0 ? a && (q2[n2] = void 0) : q2[n2] = m2.value;
};
var Fb = (A2) => A2.replace($(gg, cj), Dj) + "";
var Gb = (M2) => {
  M2 = M2 + "";
  var a = M2.length | 0;
  var b = M2.startsWith("^") ? 1 : 0;
  !M2.endsWith(yk) || (a = a - 1 | 0);
  return M2.slice(b, a) + "";
};
var Ud = (G2) => {
  var B2 = G2.kind;
  var x2 = {};
  var a;
  X(G2.handle) && X(G2.handle._zod) && (x2 = G2.handle._zod, x2 = x2.bag);
  if (0 == B2) {
    if (X(x2) && x2.patterns !== void 0) {
      B2 = x2.patterns;
      a = Array.from(B2);
      B2 = a.length | 0;
      if (B2 > 0) return a[B2 - 1 | 0];
    }
    if (G2.def.pattern !== void 0) return G2.def.pattern;
    var Ea2 = typeof x2.minimum;
    G2 = Ea2 == Le ? x2.minimum + "" : "0";
    var Ga2 = typeof x2.maximum;
    x2 = Ga2 == Le ? x2.maximum + "" : xg;
    return $("^[\\s\\S]{" + G2 + "," + x2 + "}$", xg);
  }
  if (1 == B2) {
    if (x2.pattern !== void 0 && x2.pattern != null) return x2.pattern;
    var Pa2 = typeof x2.format;
    G2 = Pa2 == Ge ? x2.format + "" : xg;
    if (G2.includes(mh)) return $(Pk, xg);
    return $("^-?\\d+(?:\\.\\d+)?$", xg);
  }
  if (2 == B2) return $("^(?:true|false)$", sj);
  if (3 == B2) return $("^-?\\d+n?$", xg);
  if (7 == B2) return $("^undefined$", xg);
  if (8 == B2) return $("^null$", xg);
  if (13 == B2) {
    var b = Array.from(G2.values);
    x2 = [];
    var f2 = b.length | 0;
    B2 = 0;
    while (B2 < f2) {
      G2 = b[B2];
      typeof G2 == Ge ? x2.push(Fb(G2 + "")) : G2 == null && G2 === void 0 ? x2.push(Vf) : G2 == null ? x2.push(Ng) : x2.push(Fb(G2 + ""));
      B2 = B2 + 1;
    }
    G2 = $j + x2.join("|");
    return $(G2 + Mk, xg);
  }
  if (14 == B2) {
    b = Array.from(G2.values);
    B2 = [];
    f2 = b.length | 0;
    x2 = 0;
    while (x2 < f2) {
      G2 = b[x2];
      (typeof G2 == Ge || typeof G2 == Le || typeof G2 == jg) && B2.push(Fb(G2 + ""));
      x2 = x2 + 1;
    }
    G2 = $j + B2.join("|");
    return $(G2 + Mk, xg);
  }
  if (40 == B2) {
    G2 = G2.handle._zod;
    return G2.pattern;
  }
};
var Vd = (C2) => {
  var b = [];
  var f2 = C2.length | 0;
  var g2 = 0, a, c2;
  while (g2 < f2) {
    a = C2[g2];
    if (a == null || typeof a == Ge || typeof a == Le || typeof a == Zf || typeof a == hf) b.push(Fb(a + ""));
    else if (X(a) && X(a._zod)) {
      c2 = a._zod;
      c2 = c2.pattern;
      if (c2 == null) {
        C2 = a._zod;
        C2 = C2.traits;
        if (C2 !== void 0) {
          C2 = Array.from(C2);
          var q2 = C2.length | 0;
          C2 = q2 > 0 ? C2[0] + "" : xg;
        } else {
          C2 = xg;
        }
        throw new Error("Invalid template literal part, no pattern found: " + C2);
      }
      a = c2.source + "";
      if (0 == a.length) throw new Error("Invalid template literal part");
      b.push(Gb(a));
    } else {
      C2 = "Invalid template literal part: " + a;
      throw new Error(C2);
    }
    g2 = g2 + 1;
  }
  C2 = "^" + b.join(xg);
  return $(C2 + yk, xg);
};
var Wd = (P2, a) => {
  let b = Symbol.for;
  b = b("evaluating");
  let c2 = { value: void 0 };
  aa(P2, He, { configurable: true, get: function() {
    if (c2.value === b) return;
    c2.value === void 0 && (c2.value = b, c2.value = a());
    return c2.value;
  }, set: function(G2) {
    aa(P2, He, { value: G2, configurable: true, writable: true });
  } });
};
var ja = (D2, n2, a) => {
  D2 = D2.handle._zod;
  var c2 = ga.getPrototypeOf(D2);
  if (true === n2 in c2 && Sb !== D2) {
    Sb = void 0;
    return;
  }
  Sb = D2;
  aa(c2, n2, { configurable: true, get: function() {
    aa(this, n2, ud);
    var c3 = Wa;
    Wa = false;
    var r2;
    try {
      r2 = a(this);
      Wa ? Reflect.deleteProperty(this, n2) : aa(this, n2, { configurable: true, writable: true, value: r2 });
      c3 && (Wa = true);
      return r2;
    } catch (s2) {
      Reflect.deleteProperty(this, n2);
      c3 && (Wa = true);
      throw s2;
    }
  }, set: function(j2) {
    aa(this, n2, { configurable: true, writable: true, value: j2 });
  } });
};
var Fc = (o2) => 1 == o2.optin ? lf : 2 == o2.optin ? rg : void 0;
var Gc = (o2) => 1 == o2.optout ? lf : void 0;
var Xd = (o2) => {
  var B2 = o2.kind;
  var D2 = o2.handle._zod;
  var a = o2.handle;
  if (29 == B2) {
    B2 = o2.def.getter;
    Wd(D2, function() {
      var b = a._zod;
      b = b.def;
      b._cachedInner === void 0 && (b._cachedInner = B2());
      return b._cachedInner;
    });
    ja(o2, Se, function(r2) {
      var m2 = r2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.pattern;
      }
    });
    ja(o2, fg, function(r2) {
      var m2 = r2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.propValues;
      }
    });
    ja(o2, Gf, function(r2) {
      var m2 = r2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optin;
      }
    });
    ja(o2, Bf, function(r2) {
      var m2 = r2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optout;
      }
    });
    return;
  }
  if (23 == B2) {
    ja(o2, Gf, function(m2) {
      var b = m2.def;
      m2 = b.innerType;
      if (X(m2) && X(m2._zod) && m2._zod.optin + "" == rg) return rg;
      return lf;
    });
    D2.optout = lf;
    ja(o2, $e, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      var a2, f2, c2, b;
      if (!X(m2) || !X(m2._zod) || m2._zod.values === void 0) return;
      a2 = ma();
      b = Array;
      m2 = m2._zod;
      b = b.from(m2.values);
      f2 = b.length | 0;
      m2 = 0;
      while (m2 < f2) {
        c2 = b[m2];
        a2.add(c2);
        m2 = m2 + 1;
      }
      m2 = r2.def;
      m2.exact || a2.add(void 0);
      return a2;
    });
    ja(o2, Se, function(r2) {
      var s2 = r2.def;
      s2 = s2.innerType;
      if (!X(s2) || !X(s2._zod)) return;
      s2 = s2._zod;
      s2 = s2.pattern;
      if (s2 == null) return;
      var h2 = $j + Gb(s2.source + "");
      return $(h2 + ")?$", xg);
    });
    return;
  }
  if (24 == B2) {
    ja(o2, Gf, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optin;
      }
    });
    ja(o2, Bf, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optout;
      }
    });
    ja(o2, Se, function(r2) {
      var s2 = r2.def;
      s2 = s2.innerType;
      if (!X(s2) || !X(s2._zod)) return;
      s2 = s2._zod;
      s2 = s2.pattern;
      if (s2 == null) return;
      var h2 = $j + Gb(s2.source + "");
      return $(h2 + "|null)$", xg);
    });
    ja(o2, $e, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (!X(m2) || !X(m2._zod) || m2._zod.values === void 0) return;
      r2 = ma();
      var a2 = Array;
      m2 = m2._zod;
      a2 = a2.from(m2.values);
      var f2 = a2.length | 0;
      m2 = 0;
      while (m2 < f2) {
        var b = a2[m2];
        r2.add(b);
        m2 = m2 + 1;
      }
      r2.add(null);
      return r2;
    });
    return;
  }
  if (21 == B2 || 38 == B2) {
    ja(o2, Gf, function(r2) {
      var S2 = r2.def;
      S2 = S2.options;
      if (!Array.isArray(S2)) return;
      var f2 = S2.length | 0;
      var r2 = false, g2 = 0, a2;
      while (g2 < f2) {
        a2 = S2[g2];
        a2 = a2._zod;
        a2 = a2.optin;
        if (a2 + "" == rg) return rg;
        a2 === void 0 || (r2 = true);
        g2 = g2 + 1;
      }
      if (r2) return lf;
    });
    ja(o2, Bf, function(g2) {
      var S2 = g2.def;
      S2 = S2.options;
      if (!Array.isArray(S2)) return;
      var f2 = S2.length | 0;
      g2 = 0;
      while (g2 < f2) {
        var a2 = S2[g2];
        a2 = a2._zod;
        var m2 = a2.optout + "";
        if (m2 == lf) return lf;
        g2 = g2 + 1;
      }
    });
    ja(o2, $e, function(g2) {
      var S2 = g2.def;
      S2 = S2.options;
      if (!Array.isArray(S2)) return;
      var b = ma();
      var f2 = S2.length | 0;
      g2 = 0;
      while (g2 < f2) {
        var a2 = S2[g2];
        a2 = a2._zod;
        a2 = a2.values;
        if (a2 === void 0) return;
        var c2 = Array.from(a2);
        var d2 = c2.length | 0;
        a2 = 0;
        while (a2 < d2) {
          var e2 = c2[a2];
          b.add(e2);
          a2 = a2 + 1;
        }
        g2 = g2 + 1;
      }
      return b;
    });
    ja(o2, Se, function(g2) {
      var A2 = g2.def;
      A2 = A2.options;
      if (!Array.isArray(A2)) return;
      var a2 = [];
      var f2 = A2.length | 0;
      g2 = 0;
      while (g2 < f2) {
        var b = A2[g2];
        b = b._zod;
        b = b.pattern;
        if (b == null) return;
        a2.push(Gb(b.source + ""));
        g2 = g2 + 1;
      }
      A2 = $j + a2.join("|");
      return $(A2 + Mk, xg);
    });
    return;
  }
  if (32 == B2) {
    ja(o2, $e, function(r2) {
      var V2 = r2.def;
      V2 = V2.in;
      if (X(V2) && X(V2._zod)) {
        V2 = V2._zod;
        return V2.values;
      }
    });
    ja(o2, Gf, function(r2) {
      var V2 = r2.def;
      V2 = V2.in;
      if (X(V2) && X(V2._zod)) {
        V2 = V2._zod;
        return V2.optin;
      }
    });
    ja(o2, Bf, function(r2) {
      var b = r2.def;
      b = b.out;
      if (X(b) && X(b._zod)) {
        b = b._zod;
        return b.optout;
      }
    });
    return;
  }
  if (27 == B2) {
    ja(o2, Gf, function(m2) {
      var b = m2.def;
      m2 = b.innerType;
      if (X(m2) && X(m2._zod) && m2._zod.optin + "" == rg) return rg;
      return lf;
    });
    ja(o2, Bf, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optout;
      }
    });
    ja(o2, $e, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.values;
      }
    });
    return;
  }
  if (40 == B2) return;
  if (33 == B2) {
    ja(o2, Gf, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optin;
      }
    });
    ja(o2, Bf, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optout;
      }
    });
    ja(o2, $e, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.values;
      }
    });
    return;
  }
  ja(o2, Se, function(r2) {
    let b = Ha;
    return Ud(b[+r2.id | 0]);
  });
  0 != o2.optin ? D2.optin = Fc(o2) : ja(o2, Gf, function(r2) {
    let b = Ha;
    return Fc(b[+r2.id | 0]);
  });
  0 != o2.optout ? D2.optout = Gc(o2) : ja(o2, Bf, function(r2) {
    let b = Ha;
    return Gc(b[+r2.id | 0]);
  });
  o2.values === void 0 || (D2.values = o2.values);
};
var Hb = (B2) => {
  B2 = B2.kind;
  if (15 == B2) return true;
  if (16 == B2) return true;
  if (17 == B2) return true;
  if (18 == B2) return true;
  if (19 == B2) return true;
  if (20 == B2) return true;
  return false;
};
var Ib = (A2, a, b) => {
  if (a == null || !X(a)) return false;
  if (X(a._zod)) {
    A2 = ua(a);
    if (A2) return Hc(A2, b);
    return false;
  }
  if (!Array.isArray(a)) return false;
  var f2 = a.length | 0;
  var g2 = 0;
  while (g2 < f2) {
    if (Ib(A2, a[g2], b)) return true;
    g2 = g2 + 1;
  }
  return false;
};
var Hc = (o2, a) => {
  var I2 = pc.get(o2.handle);
  var L2;
  if (I2 !== void 0 && I2 != null) return true === I2;
  if (a.has(o2.handle)) return true;
  a.add(o2.handle);
  if (29 == o2.kind) {
    I2 = o2.handle._zod;
    I2 = Ib(o2, I2.innerType, a);
  } else {
    var l2 = o2.def;
    L2 = l2.shape;
    if (X(L2) && L2 != null) {
      var u2 = ra(L2);
      var f2 = u2.length | 0;
      var I2 = false, g2 = 0;
      while (g2 < f2) {
        Ib(o2, L2[u2[g2]], a) && (I2 = true);
        g2 = g2 + 1;
      }
    } else {
      I2 = false;
    }
    g2 = ra(l2);
    u2 = g2.length | 0;
    L2 = 0;
    while (L2 < u2) {
      var S2 = g2[L2] + "";
      S2 != sf && Ib(o2, l2[g2[L2]], a) && (I2 = true);
      L2 = L2 + 1;
    }
  }
  a.delete(o2.handle);
  pc.set(o2.handle, I2);
  return I2;
};
var Ic = (v2) => {
  var q2 = [];
  var f2 = v2.length | 0;
  var g2 = 0, a, b;
  while (g2 < f2) {
    a = v2[g2];
    a = ia({}, a);
    Array.isArray(a.path) && (b = a.path, a.path = b.slice(0));
    q2.push(a);
    g2 = g2 + 1;
  }
  return q2;
};
var Yd = (g2, e2) => {
  var a = Ic(g2);
  var f2 = a.length | 0;
  g2 = 0;
  while (g2 < f2) {
    var b = e2.issues;
    var c2 = a[g2];
    b.push(c2);
    g2 = g2 + 1;
  }
};
var Zd = (o2, e2, i2) => {
  var a = o2.handle._zod;
  a = a.memoizer;
  var b, z2, c2, d2;
  if (a == null) return;
  if (a.recursive === void 0) {
    a.recursive = Hc(o2, ma());
    if (!a.recursive) return;
  } else {
    if (!a.recursive) return;
  }
  z2 = e2.value;
  if (z2 == null || typeof z2 != ig) return;
  if (i2 == null || !X(i2)) return;
  b = i2[hk];
  b == null && (b = /* @__PURE__ */ new Map(), b = { buckets: b, backEdges: void 0 }, i2[hk] = b);
  a.ctx === i2 ? c2 = a.bucket : (c2 = b.buckets, c2 = c2.get(o2.handle), c2 == null && (c2 = /* @__PURE__ */ new Map(), d2 = b.buckets, d2.set(o2.handle, c2)), Object.assign(a, { ctx: i2, bucket: c2 }));
  o2 = c2.get(z2);
  if (o2 !== void 0 && o2 != null) {
    e2.value = o2.value;
    if (o2.issues != null) {
      i2 = o2.issues;
      var I2 = i2.length | 0;
      I2 > 0 && Yd(o2.issues, e2);
    } else {
      e2.memo = true;
      (b.backEdges === void 0 || b.backEdges == null) && (b.backEdges = ma());
      i2 = b.backEdges;
      o2 = o2.value;
      i2.add(o2);
    }
    return e2;
  }
  a.handoff = c2;
  o2 = a.open;
  a.openDepth = o2.length;
};
var ab = (o2, e2, a) => {
  o2 = o2.handle._zod;
  o2 = o2.memoizer;
  var b, c2;
  if (o2 === void 0 || o2.handoff === void 0 || o2.handoff == null) return a;
  c2 = o2.handoff;
  o2.handoff = void 0;
  b = { value: a, issues: null };
  e2 = e2.value;
  c2.set(e2, b);
  o2 = o2.open;
  o2.push(b);
  return a;
};
var Jc = (o2, e2) => {
  o2 = o2.handle._zod;
  o2 = o2.memoizer;
  var a;
  if (o2 == null) return;
  o2.handoff = void 0;
  a = o2.open;
  var t2 = typeof o2.openDepth;
  o2 = t2 == Le ? +o2.openDepth | 0 : 0;
  if (Array.isArray(a) && (a.length | 0) > o2) {
    o2 = a.pop();
    a = e2.issues;
    var l2 = a.length | 0;
    l2 > 0 ? o2.issues = Ic(e2.issues) : o2.issues = [];
  }
};
var Kc = (a, b, z2) => a ? { code: Ii, maximum: 0 + b, inclusive: true, input: z2, origin: Ff } : { code: fi, minimum: 0 + b, inclusive: true, input: z2, origin: Ff };
var Lc = (e2, a, g2, b, c2) => {
  var q2 = e2.value;
  var f2 = g2.length | 0;
  var j2 = a.length | 0;
  g2 = 0;
  while (g2 < j2) {
    var d2 = b[g2];
    var h2 = g2 < f2;
    var i2 = ua(a[g2]);
    i2 = i2 ? i2.optin : 0;
    if (!h2 && g2 >= c2 && 1 == i2) {
      q2.length = g2;
      break;
    }
    if (d2 !== void 0 && d2 != null && (d2.issues.length | 0) > 0) {
      if (!h2 && g2 >= c2) {
        q2.length = g2;
        break;
      }
      h2 = d2.issues;
      i2 = e2.issues;
      Ua(h2, i2, +(0 + g2));
    }
    d2 !== void 0 && d2 != null && (q2[g2] = d2.value);
    g2 = g2 + 1;
  }
  var M2 = q2.length | 0;
  e2 = M2 - 1 | 0;
  while (e2 >= f2) {
    g2 = ua(a[e2]);
    if (g2) {
      if (1 == g2.optout && q2[e2] === void 0) {
        q2.length = e2;
        e2 = e2 - 1 | 0;
        continue;
      }
    }
    break;
  }
};
var bb = (e2, I2) => {
  e2.value = I2.value;
  I2 = I2.issues;
  e2 = e2.issues;
  Rc(I2, e2);
};
var Mc = (o2, e2, a, i2) => {
  var f2 = a.length | 0;
  var g2 = 0, B2, b, c2, v2, d2;
  while (g2 < f2) {
    B2 = a[g2];
    if (B2 !== void 0 && B2 != null && 0 == (B2.issues.length | 0)) {
      bb(e2, B2);
      return;
    }
    g2 = g2 + 1;
  }
  g2 = [];
  b = 0;
  while (b < f2) {
    B2 = a[b];
    B2 !== void 0 && B2 != null && !Mb(B2) && g2.push(B2);
    b = b + 1;
  }
  var A2 = g2.length | 0;
  if (1 == A2) {
    bb(e2, g2[0]);
    return;
  }
  b = [];
  g2 = 0;
  while (g2 < f2) {
    B2 = a[g2];
    c2 = [];
    if (B2 !== void 0 && B2 != null) {
      v2 = B2.issues;
      d2 = v2.length | 0;
      B2 = 0;
      while (B2 < d2) {
        c2.push(Sa(v2[B2], o2, i2));
        B2 = B2 + 1;
      }
    }
    b.push(c2);
    g2 = g2 + 1;
  }
  o2 = e2.issues;
  o2.push({ code: Cf, errors: b, path: [] });
};
var _d = (a) => 0 == a ? Ge : 1 == a ? Le : 2 == a ? Zf : 3 == a ? hf : 4 == a ? jg : 5 == a ? og : 6 == a ? ki : 7 == a ? Vf : 8 == a ? Ng : 9 == a ? ak : 10 == a ? Bg : 11 == a ? _h : 12 == a ? Wi : 13 == a ? Sh : 14 == a ? xi : 15 == a ? ig : 16 == a ? Ff : 17 == a ? Ci : 18 == a ? Xg : 19 == a ? Eh : 20 == a ? Jf : 21 == a ? pg : 38 == a ? pg : 22 == a ? Hg : 23 == a ? lf : 24 == a ? hh : 25 == a ? ah : 26 == a ? Gg : 27 == a ? rh : 28 == a ? Pf : 29 == a ? Ui : 30 == a ? Fi : 31 == a ? Ve : 32 == a ? Og : 33 == a ? kh : 34 == a ? rf : 35 == a ? wh : 36 == a ? rf : 37 == a ? Kf : 39 == a ? Ke : 40 == a ? Mf : rf;
var da = (k2) => {
  let a = Ha;
  k2 = k2._zod;
  return a[+k2.id | 0];
};
var ua = (k2) => {
  if (k2 == null || !X(k2)) return null;
  k2 = k2._zod;
  if (k2 == null || k2.id === void 0) return null;
  k2 = +k2.id | 0;
  if (k2 < 0 || k2 >= Ha.length) return null;
  return Ha[k2];
};
var Nc = /* @__PURE__ */ (function() {
  let a = (t2) => {
    if (t2 === void 0) return Vf;
    if (t2 == null && t2 !== void 0) return Ng;
    var e2 = typeof t2;
    if (e2 == Le) {
      if (true === Number.isNaN(t2)) return ki;
      if (!Ma(t2)) return t2 + "";
      return Le;
    }
    if (e2 == ig) {
      if (t2 == null) return Ng;
      if (Array.isArray(t2)) return Ff;
      e2 = ga.getPrototypeOf(t2);
      if (e2 !== ga.prototype) {
        var C2 = typeof t2.constructor;
        e2 = C2 == Ke;
      } else {
        e2 = false;
      }
      if (e2) {
        t2 = t2.constructor;
        t2 = t2.name + "";
        if (t2.length > 0) return t2;
      }
      return ig;
    }
    return e2;
  };
  let b = (T2) => T2 == hj ? Qe : T2 == Ai ? "email address" : T2 == nh ? "URL" : T2 == fj ? fj : T2 == Xh ? "UUID" : "uuidv4" == T2 ? "UUIDv4" : "uuidv6" == T2 ? "UUIDv6" : "uuidv7" == T2 ? "UUIDv7" : T2 == mi ? mi : T2 == Fj ? "GUID" : T2 == Ej ? Ej : T2 == ej ? ej : T2 == Lj ? "ULID" : "xid" == T2 ? "XID" : T2 == ek ? "KSUID" : T2 == Jh ? "ISO datetime" : T2 == og ? "ISO date" : T2 == Vi ? "ISO time" : T2 == ri ? "ISO duration" : T2 == Gj ? "IPv4 address" : T2 == Vh ? "IPv6 address" : T2 == tj ? "MAC address" : T2 == Rj ? "IPv4 range" : T2 == Oh ? "IPv6 range" : T2 == Wg ? "base64-encoded string" : T2 == Qg ? "base64url-encoded string" : "json_string" == T2 ? "JSON string" : T2 == Ak ? "E.164 number" : T2 == ch ? "credit card number" : T2 == ji ? "JWT" : T2 == Mf ? Qe : T2;
  let c2 = (j2) => {
    if (typeof j2 == hf) return j2 + "n";
    if (typeof j2 == Ge) return Th + j2 + Th;
    if (j2 === void 0) return Vf;
    if (j2 == null) return Ng;
    return j2 + "";
  };
  let d2 = (e2, h2) => {
    var f2 = e2.length | 0;
    var q2 = xg, g2 = 0;
    while (g2 < f2) {
      g2 > 0 && (q2 = q2 + h2);
      q2 = q2 + c2(e2[g2]);
      g2 = g2 + 1;
    }
    return q2;
  };
  return function(F2) {
    var g2 = F2.code + "";
    if (g2 == Bh) {
      var f2 = F2.expected + "";
      f2 == ki && (f2 = "NaN");
      g2 = a(F2.input);
      g2 == ki && (g2 = "NaN");
      g2 == Le && typeof F2.input == Le && !Ma(F2.input) && (g2 = F2.input + "");
      return zi + f2 + ", received " + g2;
    }
    if (g2 == dg) {
      F2 = F2.values;
      if (F2 == null || !Array.isArray(F2)) return uh;
      var y2 = F2.length | 0;
      if (1 == y2) return zi + c2(F2[0]);
      return "Invalid option: expected one of " + d2(F2, "|");
    }
    if (g2 == Ii) {
      F2.exact ? g2 = Rk : (g2 = F2.inclusive, g2 = false !== g2 ? "<=" : "<");
      var e2 = F2.origin !== void 0 ? F2.origin + "" : De;
      if (e2 == Ge) {
        var R2 = "Too big: expected string to have " + g2 + F2.maximum;
        return R2 + ik;
      }
      if (e2 == Ff) {
        var W2 = "Too big: expected array to have " + g2 + F2.maximum;
        return W2 + Ni;
      }
      if (e2 == Jf) {
        var ba2 = "Too big: expected set to have " + g2 + F2.maximum;
        return ba2 + Ni;
      }
      if (e2 == Eh) {
        var ia2 = "Too big: expected map to have " + g2 + F2.maximum;
        return ia2 + Nk;
      }
      if (e2 == wh) {
        var na2 = "Too big: expected file to have " + g2 + F2.maximum;
        return na2 + " bytes";
      }
      g2 = "Too big: expected " + e2 + " to be " + g2;
      return g2 + F2.maximum + "";
    }
    if (g2 == fi) {
      F2.exact ? g2 = Rk : (g2 = F2.inclusive, g2 = false !== g2 ? ">=" : ">");
      e2 = F2.origin !== void 0 ? F2.origin + "" : De;
      if (e2 == Ge) {
        var Ta2 = "Too small: expected string to have " + g2 + F2.minimum;
        return Ta2 + ik;
      }
      if (e2 == Ff) {
        var lb2 = "Too small: expected array to have " + g2 + F2.minimum;
        return lb2 + Ni;
      }
      if (e2 == Jf) {
        var qb2 = "Too small: expected set to have " + g2 + F2.minimum;
        return qb2 + Ni;
      }
      if (e2 == Eh) {
        var Gb2 = "Too small: expected map to have " + g2 + F2.minimum;
        return Gb2 + Nk;
      }
      if (e2 == wh) {
        var Lb2 = "Too small: expected file to have " + g2 + F2.minimum;
        return Lb2 + " bytes";
      }
      g2 = "Too small: expected " + e2 + " to be " + g2;
      return g2 + F2.minimum + "";
    }
    if (g2 == Yf) {
      g2 = F2.format + "";
      if (g2 == wg) {
        F2 = 'Invalid string: must start with "' + F2.prefix;
        return F2 + Th;
      }
      if (g2 == Sg) {
        F2 = 'Invalid string: must end with "' + F2.suffix;
        return F2 + Th;
      }
      if (g2 == Hf) {
        F2 = 'Invalid string: must include "' + F2.includes;
        return F2 + Th;
      }
      if (g2 == hj) return "Invalid string: must match pattern " + F2.pattern;
      return "Invalid " + b(g2);
    }
    if (g2 == eh) return "Invalid number: must be a multiple of " + F2.divisor;
    if (g2 == mf) {
      F2 = F2.keys;
      var Oc2 = F2.length | 0;
      g2 = Oc2 > 1 ? "s" : xg;
      return "Unrecognized key" + g2 + ": " + d2(F2, ", ");
    }
    if (g2 == Of) return "Invalid key in " + F2.origin;
    if (g2 == Cf) {
      if (Array.isArray(F2.options)) {
        g2 = F2.options;
        var $c2 = g2.length | 0;
        g2 = $c2 > 0;
      } else {
        g2 = false;
      }
      if (g2) {
        e2 = F2.options;
        f2 = e2.length | 0;
        F2 = xg;
        g2 = 0;
        while (g2 < f2) {
          g2 > 0 && (F2 = F2 + " | ");
          F2 = F2 + "'";
          F2 = F2 + e2[g2] + "'";
          g2 = g2 + 1;
        }
        return "Invalid discriminator value. Expected " + F2;
      }
      F2 = F2.inclusive;
      if (false === F2) return "Invalid input: more than one option matched";
      return uh;
    }
    if (g2 == hg) return "Invalid value in " + F2.origin;
    if (g2 == rf) {
      var re2 = typeof F2.message;
      if (re2 == Ge) return F2.message + "";
      return uh;
    }
    return uh;
  };
})();
var Sa = /* @__PURE__ */ (function() {
  let a = (e2) => {
    if (e2 == null) return;
    if (typeof e2 == Ge) return e2;
    if (X(e2) && typeof e2.message == Ge) return e2.message;
  };
  let b = (k2) => {
    if (k2 == null || !X(k2)) return;
    k2 = k2._zod;
    if (k2 == null) return;
    k2 = k2.def;
    return k2.error;
  };
  let c2 = (e2, i2) => {
    var D2 = typeof e2.message;
    if (D2 == Ge) {
      var k2 = (e2.message + "").length;
      var f2 = k2 > 0;
    } else {
      f2 = false;
    }
    if (f2) return e2.message + "";
    f2 = b(e2.inst);
    if (typeof f2 == Ke) {
      var g2 = a(f2(e2));
      if (g2 !== void 0) return g2 + "";
    }
    if (typeof f2 == Ge) return f2 + "";
    f2 = e2.schema;
    if (f2 !== e2.inst) {
      f2 = b(e2.schema);
      if (typeof f2 == Ke) {
        g2 = a(f2(e2));
        if (g2 !== void 0) return g2 + "";
      }
      if (typeof f2 == Ge) return f2 + "";
    }
    if (i2 !== void 0 && typeof i2.error == Ke) {
      i2 = i2.error;
      i2 = a(i2(e2));
      if (i2 !== void 0) return i2 + "";
    }
    if (typeof rb == Ke) {
      i2 = a(rb(e2));
      if (i2 !== void 0) return i2 + "";
    }
    if (typeof Xa == Ke) {
      i2 = a(Xa(e2));
      if (i2 !== void 0) return i2 + "";
    }
    return Nc(e2);
  };
  let d2 = (e2) => {
    var k2 = e2.inst;
    if (k2 === void 0) return;
    if (k2 == null) return;
    if (!X(k2)) return;
    var U2 = k2._zod;
    if (U2 === void 0) return;
    if (U2 == null) return;
    U2 = U2.traits;
    if (U2 === void 0) return;
    if (U2 == null) return;
    if (!U2.has(ij)) return;
    U2.has($h) ? e2.schema === void 0 && (e2.schema = k2) : e2.schema = k2;
  };
  return function(e2, F2, i2) {
    e2.inst === void 0 && F2 && (e2.inst = F2.handle);
    d2(e2);
    var j2 = c2(e2, i2);
    F2 = {};
    var u2 = ra(e2);
    var f2 = u2.length | 0;
    var g2 = 0, h2;
    while (g2 < f2) {
      h2 = u2[g2] + "";
      h2 != Ef && h2 != ag && h2 != cf && h2 != Qe && (F2[h2] = e2[h2]);
      g2 = g2 + 1;
    }
    (F2.path === void 0 || F2.path == null) && (F2.path = []);
    F2.message = j2;
    i2 !== void 0 && i2 != null && i2.reportInput && (F2.input = e2.input);
    return F2;
  };
})();
var Jb = (F2, a) => {
  var b = F2.path;
  b == null && (b = [], F2.path = b);
  b.unshift(a);
};
var ya = (a, z2) => {
  var F2 = { expected: a, code: Bh, input: z2 };
  a == Le && typeof z2 == Le && (true === Number.isNaN(z2) ? F2.received = "NaN" : Ma(z2) || (F2.received = z2 + ""));
  a == og && sa(Date, z2) && true === Number.isNaN(z2.getTime()) && (F2.received = "Invalid Date");
  return F2;
};
var dc = (j2) => typeof j2 == hf ? j2 + "" : j2;
var ec = (k2, y2) => {
  y2 == null && (y2 = []);
  var U2 = ma();
  U2.add(Hk);
  U2.add(Hh);
  k2.name = Hh;
  aa(k2, Ce, Db(y2));
  aa(k2, Fe, Db({ def: y2, traits: U2 }));
  aa(k2, Ye, { enumerable: true, configurable: true, get: function() {
    var D2 = this._zod;
    if (D2.message !== void 0) return D2.message;
    var a = D2.def;
    D2.message = JSON.stringify(a, function(B2, G2) {
      return dc(G2);
    }, 2);
    return D2.message;
  }, set: function(j2) {
    let a = this._zod;
    a.message = j2;
  } });
  return k2;
};
var qe = () => {
  let a = ta.prototype, b = Error.prototype;
  ga.setPrototypeOf(a, b);
  a = ta;
  aa(a, yh, Ea(Hh));
  a = ta;
  aa(a, "init", Ea(function(k2, v2) {
    return ec(k2, v2);
  }));
  a = Ia.prototype;
  b = ta.prototype;
  ga.setPrototypeOf(a, b);
  aa(Ia, yh, Ea(Hh));
  a = Ia;
  aa(a, "init", ta.init);
  a = ta;
  b = Symbol.hasInstance;
  aa(a, b, Ea(function(k2) {
    if (k2 == null || !X(k2)) return false;
    var D2 = k2._zod;
    if (D2 == null) return false;
    D2 = D2.traits;
    return !!D2.has(Hh);
  }));
  a = Ia;
  b = Symbol.hasInstance;
  aa(a, b, Ea(function(k2) {
    if (sa(Error, k2)) return true;
    if (k2 == null || !X(k2)) return false;
    var D2 = k2._zod;
    if (D2 == null) return false;
    D2 = D2.traits;
    return !!D2.has(Hh);
  }));
  a = ta.prototype;
  aa(a, Kh, { configurable: true, enumerable: false, get: function() {
    var a2 = this;
    let j2 = (0, function() {
      return a2.message;
    });
    aa(a2, Kh, { value: j2, configurable: true, writable: true });
    return j2;
  }, set: function(j2) {
    aa(this, Kh, { value: j2, configurable: true, writable: true });
  } });
  a = ta.prototype;
  re(a, Me, function(a2) {
    return function(c2) {
      let b2 = { _errors: [] }, g2 = a2.issues;
      Kb(g2, [], b2, c2);
      return b2;
    };
  }, false);
  a = ta.prototype;
  re(a, "flatten", function(a2) {
    return function(d2) {
      return Oc(a2, d2);
    };
  }, false);
  a = ta.prototype;
  re(a, qi, function(a2) {
    return function(F2) {
      let b2 = a2.issues;
      b2.push(F2);
      b2 = a2._zod;
      let i2 = a2.issues;
      b2.message = JSON.stringify(i2, function(B2, G2) {
        return dc(G2);
      }, 2);
    };
  }, false);
  a = ta.prototype;
  re(a, "addIssues", function(a2) {
    return function(v2) {
      var f2 = v2.length | 0;
      var g2 = 0, b2, c2, r2;
      while (g2 < f2) {
        b2 = a2.issues;
        c2 = v2[g2];
        b2.push(c2);
        g2 = g2 + 1;
      }
      g2 = a2._zod;
      r2 = a2.issues;
      g2.message = JSON.stringify(r2, function(B2, G2) {
        return dc(G2);
      }, 2);
    };
  }, false);
  a = ta.prototype;
  aa(a, "isEmpty", { enumerable: false, configurable: true, get: function() {
    let a2 = this.issues, d2 = a2.length | 0;
    return 0 == d2;
  } });
};
var Oc;
var Kb;
var fc;
(function() {
  let a = (c2, F2) => {
    if (typeof c2 == Ke) return c2(F2);
    return F2.message;
  };
  let b = (c2, n2, d2) => {
    Ca.call(c2, n2) || Aa(c2, n2, d2());
    return c2[n2];
  };
  Oc = function(F2, c2) {
    var d2 = {};
    var e2 = [];
    var v2 = F2.issues;
    var f2 = v2.length | 0;
    var g2 = 0, h2, i2;
    while (g2 < f2) {
      F2 = v2[g2];
      h2 = a(c2, F2);
      F2 = F2.path;
      if (Array.isArray(F2)) {
        var o2 = F2.length | 0;
        i2 = o2 > 0;
      } else {
        i2 = false;
      }
      i2 ? (F2 = F2[0], b(d2, F2, function() {
        return [];
      }).push(h2)) : e2.push(h2);
      g2 = g2 + 1;
    }
    return { formErrors: e2, fieldErrors: d2 };
  };
  Kb = function(v2, c2, d2, e2) {
    var f2 = v2.length | 0;
    var g2 = 0, F2, i2, j2, h2, k2, l2, m2;
    while (g2 < f2) {
      F2 = v2[g2];
      h2 = F2.code + "";
      if (h2 == Cf && Array.isArray(F2.errors) && (F2.errors.length | 0) > 0) {
        i2 = F2.errors;
        j2 = i2.length | 0;
        h2 = 0;
        while (h2 < j2) {
          k2 = c2.concat(F2.path);
          Kb(i2[h2], k2, d2, e2);
          h2 = h2 + 1;
        }
      } else if (h2 == Of || h2 == hg) {
        h2 = c2.concat(F2.path);
        Kb(F2.issues, h2, d2, e2);
      } else {
        j2 = c2.concat(F2.path);
        if (!Array.isArray(j2)) h2 = true;
        else {
          var L2 = j2.length | 0;
          h2 = 0 == L2;
        }
        if (h2) {
          h2 = d2._errors;
          h2.push(a(e2, F2));
        } else {
          k2 = j2.length | 0;
          h2 = d2;
          i2 = 0;
          while (i2 < k2) {
            l2 = j2[i2];
            m2 = i2 == (k2 - 1 | 0);
            l2 === $g ? m2 && (l2 = h2._errors, l2.push(a(e2, F2))) : (h2 = b(h2, l2, function() {
              return { _errors: [] };
            }), m2 && (l2 = h2._errors, l2.push(a(e2, F2))));
            i2 = i2 + 1;
          }
        }
      }
      g2 = g2 + 1;
    }
  };
  fc = function(v2, c2, d2, e2) {
    var f2 = v2.length | 0;
    var g2 = 0, F2, i2, j2, k2, h2, l2, n2;
    while (g2 < f2) {
      F2 = v2[g2];
      h2 = F2.code + "";
      if (h2 == Cf && Array.isArray(F2.errors) && (F2.errors.length | 0) > 0) {
        i2 = F2.errors;
        j2 = i2.length | 0;
        h2 = 0;
        while (h2 < j2) {
          k2 = i2[h2];
          fc(k2, c2.concat(F2.path), d2, e2);
          h2 = h2 + 1;
        }
      } else if (h2 == Of || h2 == hg) {
        h2 = F2.issues;
        fc(h2, c2.concat(F2.path), d2, e2);
      } else {
        k2 = c2.concat(F2.path);
        if (!Array.isArray(k2)) h2 = true;
        else {
          var K2 = k2.length | 0;
          h2 = 0 == K2;
        }
        if (h2) {
          h2 = d2.errors;
          h2.push(a(e2, F2));
        } else {
          l2 = k2.length | 0;
          h2 = d2;
          j2 = 0;
          while (j2 < l2) {
            i2 = k2[j2];
            n2 = j2 == (l2 - 1 | 0);
            typeof i2 == Ge ? ((h2.properties === void 0 || h2.properties == null) && (h2.properties = {}), h2 = h2.properties, h2 = b(h2, i2, function() {
              return { errors: [] };
            })) : ((h2.items === void 0 || h2.items == null) && (h2.items = []), h2 = h2.items, (h2[i2] === void 0 || h2[i2] == null) && (h2[i2] = { errors: [] }), h2 = h2[i2]);
            n2 && (i2 = h2.errors, i2.push(a(e2, F2)));
            j2 = j2 + 1;
          }
        }
      }
      g2 = g2 + 1;
    }
  };
})();
var Pc = (a) => {
  var c2 = [];
  if (!Array.isArray(a)) return xg;
  var f2 = a.length | 0;
  var g2 = 0, b;
  while (g2 < f2) {
    b = a[g2];
    X(b) && b != null && b.key !== void 0 && (b = b.key);
    if (typeof b == Le) {
      b = "[" + b;
      c2.push(b + "]");
    } else if (typeof b == jg) {
      b = "[" + JSON.stringify(String(b), void 0, void 0);
      c2.push(b + "]");
    } else {
      b = b + "";
      if (Ba($("[^\\w$]", xg), b)) {
        b = "[" + JSON.stringify(b, void 0, void 0);
        c2.push(b + "]");
      } else {
        var u2 = c2.length | 0;
        u2 > 0 && c2.push(".");
        c2.push(b);
      }
    }
    g2 = g2 + 1;
  }
  return c2.join(xg);
};
var Lb = () => {
  var c2 = globalThis;
  var a = c2.__zod_globalConfig;
  a == null && (a = {}, c2.__zod_globalConfig = a);
  return a;
};
var $d = () => {
  let a = {};
  aa(a, De, { enumerable: true, configurable: true, get: function() {
    var b = Lb();
    if (X(b) && !!b.jitless) return false;
    try {
      b = globalThis.Function;
      new b(xg);
      return true;
    } catch {
      return false;
    }
  } });
  a = { allowsEval: a, base64ToUint8Array: function(a2) {
    a2 = globalThis.atob(a2);
    var g2 = globalThis.Uint8Array;
    var b = a2.length;
    b = new g2(b);
    var f2 = a2.length | 0;
    g2 = 0;
    while (g2 < f2) {
      b[g2] = a2.charCodeAt(g2);
      g2 = g2 + 1;
    }
    return b;
  }, uint8ArrayToBase64: function(a2) {
    var f2 = a2.length | 0;
    var b = xg, g2 = 0, c2, d2;
    while (g2 < f2) {
      c2 = globalThis.String;
      d2 = a2[g2];
      b = b + c2.fromCharCode(d2) + "";
      g2 = g2 + 1;
    }
    return globalThis.btoa(b);
  } };
  Object.assign(a, { base64urlToUint8Array: function(c2) {
    var n2 = c2.replace($("-", cj), "+");
    var b = n2.replace($("_", cj), "/");
    var i2 = b.length | 0;
    c2 = i2 % 4;
    if (0 != c2) {
      var d2 = 4 - c2;
      c2 = 0;
      while (c2 < d2) {
        b = b + "=";
        c2 = c2 + 1;
      }
    }
    var u2 = a.base64ToUint8Array;
    return u2(b);
  }, uint8ArrayToBase64url: function(c2) {
    let b = a.uint8ArrayToBase64, i2 = b(c2).replace($("\\+", cj), "-"), j2 = i2.replace($("/", cj), "_");
    return j2.replace($("=", cj), xg);
  }, hexToUint8Array: function(f2) {
    var b = f2.replace($("^0x", xg), xg);
    var g2 = globalThis.Uint8Array;
    var i2 = b.length | 0;
    f2 = i2 / 2 | 0;
    var c2 = new g2(f2);
    g2 = 0;
    while (g2 < f2) {
      var a2 = g2 * 2 | 0;
      c2[g2] = Number.parseInt(b.slice(a2, a2 + 2 | 0), 16);
      g2 = g2 + 1;
    }
    return c2;
  }, uint8ArrayToHex: function(a2) {
    var c2 = [];
    var f2 = a2.length | 0;
    var g2 = 0, b;
    while (g2 < f2) {
      b = a2[g2];
      b = b.toString(16) + "";
      1 == b.length && (b = "0" + b);
      c2.push(b);
      g2 = g2 + 1;
    }
    return c2.join(xg);
  } });
  return a;
};
var mb = () => {
  var a = Lb();
  a.localeError === void 0 ? (Xa = (0, function(F2) {
    return Nc(F2);
  }), a.localeError = Xa) : Xa = a.localeError;
  var j2 = typeof a.customError;
  j2 == Ke && (rb = a.customError);
};
var Qc = (a, b) => ({ _map: a, _idmap: b, add: function(h2, d2) {
  var e2 = a;
  e2.set(h2, d2);
  if (X(d2) && d2 != null && d2.id !== void 0) {
    var n2 = b;
    var o2 = d2.id;
    n2.set(o2, h2);
  }
  return h2;
}, clear: function() {
  this._map = /* @__PURE__ */ new WeakMap();
  this._idmap = /* @__PURE__ */ new Map();
  a = this._map;
  b = this._idmap;
  return this;
}, remove: function(h2) {
  var d2 = a.get(h2);
  var q2;
  X(d2) && d2 != null && d2.id !== void 0 && (q2 = b, q2.delete(d2.id));
  a.delete(h2);
}, get: function(h2) {
  var e2 = a.get(h2);
  var c2 = void 0;
  var F2;
  X(h2) && X(h2._zod) && (F2 = h2._zod, c2 = F2.parent);
  if (c2 !== void 0 && c2 != null) {
    F2 = this.get(c2);
    var d2 = {};
    X(F2) && F2 != null && ia(d2, F2);
    var x2 = Reflect;
    x2.deleteProperty(d2, Ch);
    X(e2) && e2 != null && ia(d2, e2);
    var t2 = ra(d2).length | 0;
    if (0 == t2) return;
    return d2;
  }
  return e2;
}, has: function(h2) {
  return !!a.has(h2);
} });
var Ta = () => {
  var a = globalThis;
  var b;
  if (a.__zod_globalRegistry !== void 0 && a.__zod_globalRegistry != null) {
    Ya = a.__zod_globalRegistry;
    return Ya;
  }
  Ya === void 0 && (b = /* @__PURE__ */ new WeakMap(), Ya = Qc(b, /* @__PURE__ */ new Map()), a.__zod_globalRegistry = Ya);
  return Ya;
};
var nb = (w2, s2) => {
  var N2 = { check: rf };
  X(s2) && s2 != null && ia(N2, s2);
  s2 = ea(rf, N2);
  N2 = s2._zod;
  N2.check = w2;
  return s2;
};
var va = (k2, a) => {
  var M2 = da(k2);
  var l2 = M2.def;
  a !== void 0 && X(a) && (l2 = {}, lb(l2, M2.def), lb(l2, a));
  l2 = new M2.ctor(l2);
  a === void 0 && (a = l2._zod, a.parent = k2);
  return l2;
};
var fa = (k2, a) => {
  var b = da(k2).def.checks;
  b = b === void 0 || !Array.isArray(b) ? [] : b.slice(0);
  b.push(a);
  a = va(k2, { checks: b });
  b = a._zod;
  b.parent = k2;
  return a;
};
var ka = (h2, n2) => ua(h2.def[n2]);
var gc = (a) => {
  var b = 0, p2;
  while (29 == a.kind && b < 64) {
    p2 = void 0;
    X(a.handle) && X(a.handle._zod) && (p2 = a.handle._zod, p2 = p2.innerType);
    if (p2 == null) {
      p2 = a.def.getter;
      if (typeof p2 != Ke) break;
      p2 = p2();
    }
    p2 = ua(p2);
    p2 ? (a = p2, b = b + 1 | 0) : b = 64;
  }
  return a;
};
var Mb = (g2) => {
  if (g2.aborted) return true;
  var v2 = g2.issues;
  var f2 = v2.length | 0;
  g2 = 0;
  while (g2 < f2) {
    var a = v2[g2];
    a = a.continue;
    if (true !== a) return true;
    g2 = g2 + 1;
  }
  return false;
};
var Rc = (a, b) => {
  var f2 = a.length | 0;
  var g2 = 0, c2;
  while (g2 < f2) {
    c2 = a[g2];
    b.push(c2);
    g2 = g2 + 1;
  }
};
var Ua = (v2, a, b) => {
  var d2 = v2.length | 0;
  var c2 = 0, e2;
  while (c2 < d2) {
    Jb(v2[c2], b);
    e2 = v2[c2];
    a.push(e2);
    c2 = c2 + 1;
  }
};
var ob = (A2) => {
  if (A2 == null || !X(A2) || A2._zod === void 0) return;
  var D2 = A2._zod;
  var a = D2.bag;
  if (a.propValues !== void 0) {
    A2 = D2.bag;
    return A2.propValues;
  }
  A2 = da(A2);
  if (15 == A2.kind) {
    a = {};
    A2 = A2.def.shape;
    if (X(A2)) {
      var B2 = ra(A2);
      var f2 = B2.length | 0;
      var S2 = 0, u2, n2, g2, c2, d2, M2, b, e2, h2;
      while (S2 < f2) {
        u2 = B2[S2];
        n2 = ua(A2[u2]);
        if (n2) {
          if (n2.values !== void 0) {
            g2 = ma();
            b = Array.from(n2.values);
            c2 = b.length | 0;
            M2 = 0;
            while (M2 < c2) {
              d2 = b[M2];
              g2.add(d2);
              M2 = M2 + 1;
            }
            0 != n2.optin && g2.add(void 0);
            Aa(a, u2, g2);
          }
        }
        S2 = S2 + 1;
      }
    }
    A2 = D2.bag;
    A2.propValues = a;
    return a;
  }
  if (32 == A2.kind) return ob(A2.def.in);
  if (29 == A2.kind) return ob(gc(A2).handle);
  if (21 == A2.kind || 38 == A2.kind) {
    a = {};
    S2 = A2.def.options;
    if (Array.isArray(S2)) {
      f2 = S2.length | 0;
      g2 = 0;
      while (g2 < f2) {
        A2 = ob(S2[g2]);
        if (A2 == null || 0 == (ra(A2).length | 0)) throw pa(Ze + g2 + Th);
        u2 = ra(A2);
        c2 = u2.length | 0;
        B2 = 0;
        while (B2 < c2) {
          n2 = u2[B2];
          Ca.call(a, n2) || Aa(a, n2, ma());
          M2 = A2[n2];
          if (M2 !== void 0 && M2 != null) {
            b = Array.from(M2);
            d2 = b.length | 0;
            M2 = 0;
            while (M2 < d2) {
              e2 = a[n2];
              h2 = b[M2];
              e2.add(h2);
              M2 = M2 + 1;
            }
          }
          B2 = B2 + 1;
        }
        g2 = g2 + 1;
      }
    }
    A2 = D2.bag;
    A2.propValues = a;
    return a;
  }
};
var Sc = (g2) => {
  var D2 = g2.handle._zod;
  var x2 = D2.bag;
  if (x2.optionsMap !== void 0) return x2.optionsMap;
  var a = /* @__PURE__ */ new Map();
  var d2 = g2.def.discriminator + "";
  var S2 = g2.def.options;
  var f2 = S2.length | 0;
  g2 = 0;
  while (g2 < f2) {
    var b = ob(S2[g2]);
    D2 = void 0;
    var c2;
    X(b) && !!Ca.call(b, d2) && (D2 = b[d2]);
    if (D2 === void 0) throw pa(Ze + g2 + Th);
    if (D2 == null) throw pa(Ze + g2 + Th);
    var F2 = +D2.size | 0;
    if (0 == F2) throw pa(Ze + g2 + Th);
    b = Array.from(D2);
    c2 = b.length | 0;
    D2 = 0;
    while (D2 < c2) {
      var e2 = b[D2];
      if (a.has(e2)) {
        g2 = b[D2];
        g2 = 'Duplicate discriminator value "' + g2;
        throw pa(g2 + Th);
      }
      e2 = b[D2];
      var h2 = S2[g2];
      a.set(e2, h2);
      D2 = D2 + 1;
    }
    g2 = g2 + 1;
  }
  x2.optionsMap = a;
  return a;
};
var hc = (w2, z2, a, b) => b ? Nd(function(h2, t2) {
  return Na(h2, t2, void 0, void 0);
}, function(b2, a2, c2) {
  return b2.apply(a2, c2);
}, z2, a, w2) : function() {
  let h2 = w2.apply(this, Fa(z2, Array.from(arguments), void 0, void 0));
  return Fa(a, h2, void 0, void 0);
};
var ic = (e2, h2, i2) => {
  var a = [];
  var g2 = e2.issues;
  var f2 = g2.length | 0;
  g2 = 0;
  while (g2 < f2) {
    a.push(Sa(e2.issues[g2], h2, i2));
    g2 = g2 + 1;
  }
  e2 = e2.value;
  return { value: e2, issues: a };
};
var Nb = (E2) => {
  var a = E2.issues;
  var d2 = a.length | 0;
  if (d2 > 0) {
    E2 = E2.issues;
    return { success: false, error: new Ia(E2) };
  }
  return { success: true, data: E2.value };
};
var jc = (k2, t2, i2) => {
  let a = k2._zod;
  a = a.run;
  k2 = k2._zod;
  return a.call(k2, { value: t2, issues: [] }, i2);
};
var pb = (k2, e2, a) => {
  a === void 0 && (a = { async: false });
  e2 = jc(k2, e2, a);
  if (ca(e2)) throw new Error(Ie);
  var b = e2.issues;
  var h2 = b.length | 0;
  if (0 == h2) return { success: true, data: e2.value };
  mb();
  return Nb(ic(e2, da(k2), a));
};
var Fa = (k2, e2, a, b) => {
  a == null && (a = { async: false });
  e2 = jc(k2, e2, a);
  if (ca(e2)) throw new Error(Ie);
  var I2 = e2.issues;
  var i2 = I2.length | 0;
  if (0 == i2) return e2.value;
  mb();
  var m2 = da(k2);
  var n2 = ic(e2, m2, a);
  I2 = Nb(n2);
  b == null && (b = Fa);
  Cb(I2.error, b);
  throw I2.error;
};
var Ob = /* @__PURE__ */ (function() {
  let a = (h2, e2, i2) => {
    var c2 = e2.issues;
    var g2 = c2.length | 0;
    if (0 == g2) return e2;
    mb();
    return ic(e2, h2, i2);
  };
  let b = (e2, t2, i2) => {
    var h2 = da(e2);
    e2 = jc(e2, t2, i2);
    if (ca(e2)) return e2.then(function(p2) {
      return a(h2, p2, i2);
    });
    return a(h2, e2, i2);
  };
  return function(I2, t2, c2) {
    c2 == null ? c2 = { async: true } : (c2 = ia({}, c2), c2.async = true);
    I2 = b(I2, t2, c2);
    if (ca(I2)) return I2.then(function(E2) {
      return Nb(E2);
    });
    return Promise.resolve(Nb(I2));
  };
})();
var Na = (k2, t2, i2, a) => Ob(k2, t2, i2).then(function(I2) {
  if (I2.success) return I2.data;
  var m2 = a == null ? Na : a;
  Cb(I2.error, m2);
  throw I2.error;
});
var re = (O2, n2, a, b) => {
  aa(O2, n2, { configurable: true, enumerable: false, get: function() {
    let g2 = a(this);
    aa(this, n2, { configurable: true, writable: true, enumerable: b, value: g2 });
    return g2;
  }, set: function(j2) {
    aa(this, n2, { configurable: true, writable: true, enumerable: true, value: j2 });
  } });
};
var Tc = (a) => {
  var y2 = [];
  if (Array.isArray(a)) {
    var g2 = a.length | 0;
    var u2 = 0, b, f2, B2, d2, c2;
    while (u2 < g2) {
      b = a[u2];
      y2.push(b);
      u2 = u2 + 1;
    }
    return y2;
  }
  if (!X(a) || a == null) return y2;
  b = [];
  u2 = ra(a);
  f2 = u2.length | 0;
  g2 = 0;
  while (g2 < f2) {
    B2 = a[u2[g2]];
    typeof B2 == Le && b.push(B2);
    g2 = g2 + 1;
  }
  g2 = 0;
  while (g2 < f2) {
    c2 = Number(u2[g2] + "");
    if (typeof c2 == Le) {
      d2 = b.length | 0;
      B2 = 0;
      for (; ; ) {
        if (B2 >= d2) {
          B2 = false;
          break;
        }
        if (b[B2] === c2) {
          B2 = true;
          break;
        }
        B2 = B2 + 1;
      }
    } else {
      B2 = false;
    }
    B2 = B2 || a[u2[g2]], y2.push(B2);
    g2 = g2 + 1;
  }
  return y2;
};
var xe = (Q2, C2) => {
  var O2 = Q2.prototype;
  Q2 = (0, function(n2, a) {
    aa(O2, n2, { configurable: true, enumerable: true, get: function() {
      let e2 = this._zod;
      return e2.def[a];
    } });
  });
  C2 == jj && Q2(bh, bh);
  (C2 == Yi || C2 == Nj) && (Q2(Rh, Rh), Q2(cg, cg));
  C2 == Oj && Q2(cg, cg);
  (C2 == lj || C2 == qh || C2 == Pj) && (Q2(kf, kf), Q2(Qf, Qf));
  (C2 == vj || C2 == kj || C2 == pi) && (Q2(Dh, Dh), Q2(vh, vh));
  C2 == uj && (aa(O2, xi, { configurable: true, enumerable: true, get: function() {
    var a = this._zod;
    a = a.def;
    a = a.entries;
    var g2;
    if (X(a) && !Array.isArray(a)) return a;
    var b = {};
    if (Array.isArray(a)) {
      var f2 = a.length | 0;
      g2 = 0;
      while (g2 < f2) {
        var c2 = a[g2];
        var d2 = a[g2];
        b[c2] = d2;
        g2 = g2 + 1;
      }
    }
    return b;
  } }), aa(O2, kf, { configurable: true, enumerable: true, get: function() {
    let a = this._zod;
    a = a.def;
    return Tc(a.entries);
  } }));
  C2 == Li && (aa(O2, $e, { configurable: true, enumerable: true, get: function() {
    let a = this._zod;
    return a.values;
  } }), aa(O2, De, { configurable: true, enumerable: true, get: function() {
    var y2 = this._zod;
    y2 = y2.def;
    y2 = y2.values;
    if (!Array.isArray(y2)) {
      y2 = Array;
      var a = this._zod;
      y2 = y2.from(a.values);
    }
    var f2 = y2.length | 0;
    if (f2 > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return y2[0];
  } }));
};
var _ = /* @__PURE__ */ (function() {
  let a = (X2, $2, aa2, ca2, da2, ia2) => {
    var ka2 = X2 ? Ii : fi;
    sa(Date, aa2) && (aa2 = aa2.getTime());
    $2 = { origin: $2, code: ka2 };
    X2 ? $2.maximum = aa2 : $2.minimum = aa2;
    Object.assign($2, { inclusive: ca2, input: ia2 });
    da2 && ($2.exact = true);
    $2.continue = true;
    return $2;
  };
  let b = (X2, $2, aa2, ca2, da2, ia2, ka2) => {
    X2 = X2.issues;
    X2.push(a($2, aa2, ca2, da2, ia2, ka2));
  };
  let c2 = (X2) => {
    if (X2 == null) return false;
    var ka2 = X2.direction + "";
    return ka2 == Ih;
  };
  let d2 = ($2) => {
    if (Array.isArray($2)) return $2.slice(0);
    if (sa(Map, $2)) return new Map($2);
    if (sa(Set, $2)) return new Set($2);
    if (X($2) && !Array.isArray($2) && !sa(Date, $2)) {
      var aa2 = ga.getPrototypeOf($2);
      if (aa2 == null || aa2 === ga.prototype) return ia({}, $2);
    }
    return $2;
  };
  let e2 = (X2) => {
    X2 = X2.def.defaultValue;
    typeof X2 == Ke && (X2 = X2());
    return d2(X2);
  };
  let f2 = (X2, $2) => {
    var aa2 = globalThis.Math;
    X2 = X2 / $2;
    aa2 = +aa2.round(X2);
    $2 = X2 < 0 ? 0 - X2 : X2;
    $2 > 1 || ($2 = 1);
    var ca2 = +Number.EPSILON * $2;
    $2 = X2 - aa2;
    $2 < 0 && ($2 = 0 - $2);
    if ($2 < ca2) return 0;
    return X2 - aa2;
  };
  let g2 = ($2) => {
    if (X($2) && $2._zod !== void 0 && X($2._zod) && $2._zod.def !== void 0) {
      $2 = $2._zod;
      return $2.def;
    }
    return X($2) && $2.def !== void 0 ? $2.def : $2;
  };
  let h2 = ($2, aa2, ca2) => {
    var da2 = {};
    aa2 != nh && aa2 != ji && aa2 != Vh && aa2 != Oh && aa2 != Mf && (da2.origin = Ge);
    da2.code = Yf;
    da2.format = aa2;
    ca2 !== void 0 && X(ca2) && ia(da2, ca2);
    da2.continue === void 0 && (da2.continue = true);
    $2 = $2.issues;
    $2.push(da2);
  };
  let i2 = (X2, $2, aa2) => {
    X2 = X2.issues;
    var ca2 = X2.length | 0;
    while ($2 < ca2) {
      var da2 = X2[$2];
      da2.inst === void 0 && (da2 = X2[$2], da2.inst = aa2);
      $2 = $2 + 1 | 0;
    }
  };
  let j2 = (X2, $2, aa2, ca2, da2, ia2) => {
    var ka2 = $2.issues;
    if ((ka2.length | 0) != ia2) return;
    if (X2) return;
    X2 = [];
    Array.isArray(da2.path) && (X2 = da2.path, X2 = X2.slice(0));
    X2 = { code: rf, input: aa2, inst: ca2, path: X2 };
    X2.continue = !da2.abort;
    da2.params === void 0 || (X2.params = da2.params);
    $2 = $2.issues;
    $2.push(X2);
  };
  let k2 = (X2) => {
    if (!Ba($("^\\d(?:[ -]?\\d){11,18}$", xg), X2)) return false;
    var ia2 = X2.length;
    var ca2 = xg, aa2 = 0, da2;
    while (aa2 < ia2) {
      da2 = X2.slice(aa2, aa2 + 1);
      da2 >= "0" && da2 <= "9" && (ca2 = ca2 + da2);
      aa2 = aa2 + 1;
    }
    da2 = ca2.length - 1;
    aa2 = 0;
    ia2 = false;
    while (da2 >= 0) {
      X2 = +Number(ca2.slice(da2, da2 + 1 | 0)) | 0;
      if (ia2) {
        X2 = X2 * 2 | 0;
        X2 > 9 && (X2 = X2 - 9 | 0);
      }
      aa2 = aa2 + X2 | 0;
      ia2 = !ia2;
      da2 = da2 - 1;
    }
    while (aa2 >= 10) aa2 = aa2 - 10;
    return 0 == aa2;
  };
  let l2 = ($2, aa2) => {
    $2 = $2.split(".");
    var ma2 = $2.length | 0;
    if (3 != ma2) return false;
    $2 = $2[0];
    var ca2, da2;
    if ($2 == null || 0 == ($2 + "").length) return false;
    try {
      var pb2 = globalThis;
      ca2 = pb2.JSON;
      var qb2 = globalThis;
      da2 = qb2.atob;
      var Db2 = da2($2);
      var Eb2 = ca2.parse(Db2);
      var ec2 = Eb2;
      if (!X(ec2) || ec2 == null) return false;
      if (Ca.call(ec2, "typ")) {
        var Ib2 = ec2.typ + "";
        $2 = "JWT" != Ib2;
      } else {
        $2 = false;
      }
      if ($2) return false;
      if (ec2.alg === void 0) return false;
      if (aa2 !== void 0 && aa2 != null && typeof aa2 == Ge) {
        var Nb2 = ec2.alg + "";
        if (Nb2 != aa2 + "") return false;
      }
      return true;
    } catch {
      return false;
    }
  };
  let m2 = (X2) => {
    if (0 == X2.length) return true;
    if (Ba($("\\s", xg), X2)) return false;
    var aa2 = 0, ca2 = 0;
    while (ca2 < X2.length) {
      aa2 = aa2 + 1 | 0;
      4 == aa2 && (aa2 = 0);
      ca2 = ca2 + 1;
    }
    if (0 != aa2) return false;
    try {
      aa2 = globalThis.atob;
      aa2(X2);
      return true;
    } catch {
      return false;
    }
  };
  let n2 = (X2) => {
    if (!Ba($("^[A-Za-z0-9_-]*$", xg), X2)) return false;
    var Ta2 = X2.replace($("-", cj), "+");
    X2 = Ta2.replace($("_", cj), "/") + "";
    var aa2 = 0, ca2 = 0;
    while (ca2 < X2.length) {
      aa2 = aa2 + 1 | 0;
      4 == aa2 && (aa2 = 0);
      ca2 = ca2 + 1;
    }
    1 == aa2 && (X2 = X2 + "===");
    2 == aa2 && (X2 = X2 + "==");
    3 == aa2 && (X2 = X2 + "=");
    return m2(X2);
  };
  let o2 = (X2) => {
    if (!Ba($("^[0-9a-fA-F:.]+$", xg), X2)) return false;
    try {
      new URL("http://[" + X2 + "]");
      return true;
    } catch {
      return false;
    }
  };
  let p2 = (X2) => {
    X2 = X2.split("/");
    var ia2 = X2.length | 0;
    if (2 != ia2) return false;
    var $2 = X2[1] + "";
    if (0 == $2.length) return false;
    var aa2 = Number($2);
    if (aa2 + "" != $2) return false;
    $2 = +aa2;
    if ($2 < 0) return false;
    if ($2 > 128) return false;
    return o2(X2[0] + "");
  };
  let q2 = (X2, aa2, ca2) => {
    var da2 = ca2.trim();
    if (!X2.normalize && X2.protocol !== void 0 && X2.protocol != null) {
      if (!Ba($("^https?:\\/\\/", sj), da2)) {
        h2(aa2, nh, void 0);
        return;
      }
    }
    var Jc2;
    try {
      Jc2 = new URL(da2);
    } catch {
      h2(aa2, nh, void 0);
      return;
    }
    X2.hostname !== void 0 && X2.hostname != null && (ca2 = X2.hostname, ca2.lastIndex = 0, Ba(ca2, Jc2.hostname + "") || h2(aa2, nh, { note: "Invalid hostname", pattern: ca2.source }));
    if (X2.protocol !== void 0 && X2.protocol != null) {
      var ia2 = X2.protocol;
      ca2 = Jc2.protocol + "";
      ca2.endsWith(":") && (ca2 = ca2.slice(0, ca2.length - 1));
      ia2.lastIndex = 0;
      Ba(ia2, ca2) || h2(aa2, nh, { note: "Invalid protocol", pattern: ia2.source });
    }
    aa2.value = da2.replace($("[\\t\\n\\r]", cj), xg) + "";
    !X2.normalize || (aa2.value = Jc2.href);
  };
  let r2 = (Wk2, Xk2, Yk2) => {
    var Zk2;
    if (X(Wk2) && X(Wk2._zod) && typeof Wk2._zod.check == Ke) {
      Zk2 = Wk2._zod;
      Zk2 = Zk2.check.call(Wk2, Xk2);
      if (ca(Zk2)) {
        if (Yk2 !== void 0 && false === Yk2.async) throw new Error(Ie);
        Xk2.$pending = Zk2;
      }
      return;
    }
    var _k2 = g2(Wk2);
    var $k2 = _k2.check + "";
    Zk2 = Xk2.value;
    var al2, bl2, cl2;
    if ($k2 == vf || $k2 == Lf || $k2 == Rf) {
      Yk2 = typeof Zk2 == Ge;
      if (!Yk2 && !Array.isArray(Zk2)) return;
      Wk2 = Zk2.length;
      Yk2 && (Wk2 = Array.from(Zk2).length);
      Yk2 = Array.isArray(Zk2) ? Ff : Ge;
      if ($k2 == vf && Wk2 < +_k2.minimum) {
        al2 = Xk2.issues;
        var Mo = +_k2.minimum;
        al2.push(a(false, Yk2, Mo, true, false, Zk2));
      }
      if ($k2 == Lf && Wk2 > +_k2.maximum) {
        al2 = Xk2.issues;
        var Po = +_k2.maximum;
        al2.push(a(true, Yk2, Po, true, false, Zk2));
      }
      $k2 == Rf && Wk2 != _k2.length && (Wk2 < _k2.length ? (Wk2 = Xk2.issues, Wk2.push(a(false, Yk2, _k2.length, true, true, Zk2))) : (Wk2 = Xk2.issues, Wk2.push(a(true, Yk2, _k2.length, true, true, Zk2))));
      return;
    }
    if ($k2 == Fg || $k2 == gh || $k2 == vg) {
      if (Array.isArray(Zk2)) Wk2 = Zk2.length;
      else if (X(Zk2) && Zk2.size !== void 0) Wk2 = +Zk2.size;
      else {
        return;
      }
      Yk2 = Array.isArray(Zk2) ? Ff : Jf;
      sa(Map, Zk2) && (Yk2 = Eh);
      al2 = globalThis.File;
      al2 !== void 0 && sa(al2, Zk2) && (Yk2 = wh);
      $k2 == Fg && Wk2 < +_k2.minimum && (al2 = _k2.minimum, b(Xk2, false, Yk2, al2, true, false, Zk2));
      $k2 == gh && Wk2 > +_k2.maximum && (al2 = _k2.maximum, b(Xk2, true, Yk2, al2, true, false, Zk2));
      $k2 == vg && Wk2 != +_k2.size && (Wk2 < +_k2.size ? (Wk2 = _k2.size, b(Xk2, false, Yk2, Wk2, true, true, Zk2)) : b(Xk2, true, Yk2, _k2.size, true, true, Zk2));
      return;
    }
    if ($k2 == df || $k2 == uf) {
      if (typeof Zk2 != Le && !sa(Date, Zk2) && typeof Zk2 != hf) return;
      Wk2 = _k2.value;
      Yk2 = _k2.inclusive;
      al2 = false !== Yk2;
      Yk2 = sa(Date, Zk2) ? og : Le;
      typeof Zk2 == hf && (Yk2 = hf);
      _k2.origin === void 0 || (Yk2 = _k2.origin + "");
      if ($k2 == df) {
        _k2 = Zk2 > Wk2;
        al2 && (_k2 = Zk2 >= Wk2);
        if (_k2) return;
        b(Xk2, false, Yk2, Wk2, al2, false, Zk2);
      } else {
        _k2 = Zk2 < Wk2;
        al2 && (_k2 = Zk2 <= Wk2);
        if (_k2) return;
        b(Xk2, true, Yk2, Wk2, al2, false, Zk2);
      }
      return;
    }
    if ($k2 == dh) {
      if (typeof Zk2 == hf) {
        Wk2 = Zk2 % _k2.value;
        Wk2 === BigInt(0) || (Wk2 = Xk2.issues, Xk2 = _k2.value, Wk2.push({ code: eh, divisor: Xk2, path: [] }));
        return;
      }
      if (typeof Zk2 != Le) return;
      Wk2 = +Zk2;
      var dm2 = f2(Wk2, +_k2.value);
      0 != dm2 && (Wk2 = Xk2.issues, Xk2 = _k2.value, Wk2.push({ origin: Le, code: eh, divisor: Xk2, input: Zk2 }));
      return;
    }
    if ($k2 == nf) {
      Wk2 = _k2.format + "";
      Wk2 == Hi && true !== Number.isSafeInteger(Zk2) && (+Zk2 > 0 ? (Yk2 = Xk2.issues, Yk2.push(a(true, Le, 9007199254740991, true, false, Zk2))) : (Yk2 = Xk2.issues, Yk2.push(a(false, Le, -9007199254740991, true, false, Zk2))));
      (Wk2 == gj || Wk2 == Hi || Wk2 == mh) && (true === Number.isInteger(Zk2) || (Yk2 = Xk2.issues, Yk2.push(ya(mh, Zk2))));
      "finite" == Wk2 && !Ma(Zk2) && (Wk2 = Xk2.issues, Wk2.push(ya(Le, Zk2)));
      return;
    }
    if ($k2 == Hf) {
      if (typeof Zk2 != Ge) return;
      Yk2 = Zk2 + "";
      Zk2 = _k2.includes + "";
      Wk2 = Yk2.includes(Zk2);
      var Gp = typeof _k2.position;
      Gp == Le && (Wk2 = Yk2.slice(+_k2.position | 0).includes(Zk2));
      if (Wk2) return;
      h2(Xk2, Hf, { includes: _k2.includes });
      return;
    }
    if ($k2 == wg) {
      if (typeof Zk2 != Ge) return;
      if (Zk2.startsWith(_k2.prefix + "")) return;
      h2(Xk2, wg, { prefix: _k2.prefix });
      return;
    }
    if ($k2 == Sg) {
      if (typeof Zk2 != Ge) return;
      if (Zk2.endsWith(_k2.suffix + "")) return;
      h2(Xk2, Sg, { suffix: _k2.suffix });
      return;
    }
    if ($k2 == af || $k2 == sg || $k2 == tg) {
      if (typeof Zk2 != Ge) return;
      Wk2 = Zk2 + "";
      var Vk2 = $k2;
      $k2 == af && (Vk2 = _k2.format + "");
      if (Vk2 == sg && Wk2 != Wk2.toLowerCase()) {
        h2(Xk2, sg, void 0);
        return;
      }
      if (Vk2 == tg && Wk2 != Wk2.toUpperCase()) {
        h2(Xk2, tg, void 0);
        return;
      }
      if (Vk2 == nh) {
        q2(_k2, Xk2, Zk2);
        return;
      }
      if (Vk2 == ch) {
        if (k2(Wk2)) return;
        h2(Xk2, ch, void 0);
        return;
      }
      if (Vk2 == ji) {
        if (l2(Wk2, _k2.alg)) return;
        Zk2 = { code: Yf, format: ji, input: Zk2 };
        _k2.alg !== void 0 && _k2.alg != null && (Zk2.algorithm = _k2.alg);
        Wk2 = Xk2.issues;
        Wk2.push(Zk2);
        return;
      }
      if (Vk2 == Wg) {
        if (m2(Wk2)) return;
        h2(Xk2, Wg, void 0);
        return;
      }
      if (Vk2 == Qg) {
        if (n2(Wk2)) return;
        h2(Xk2, Qg, void 0);
        return;
      }
      if (Vk2 == Vh) {
        if (o2(Wk2)) return;
        h2(Xk2, Vh, void 0);
        return;
      }
      if (Vk2 == Oh) {
        p2(Wk2) || h2(Xk2, Oh, void 0);
        return;
      }
      var Yp = typeof _k2.fn;
      if (Yp == Ke) {
        Wk2 = _k2.fn;
        Wk2 = Wk2(Zk2);
        if (ca(Wk2)) {
          Xk2.$pending = Wk2.then(function(p3) {
            if (!p3) {
              var b2 = Xk2.issues;
              p3 = Vk2;
              b2.push({ code: Yf, format: p3, input: Zk2, continue: !_k2.abort });
            }
            return Xk2;
          });
          return;
        }
        if (Wk2) return;
        Wk2 = Xk2.issues;
        Xk2 = Vk2;
        Wk2.push({ code: Yf, format: Xk2, input: Zk2, continue: !_k2.abort });
        return;
      }
      if (_k2.pattern !== void 0) {
        Yk2 = _k2.pattern;
        Yk2.lastIndex = 0;
        if (Ba(_k2.pattern, Wk2)) return;
        Wk2 = _k2.pattern;
        h2(Xk2, Vk2, { pattern: Wk2.toString() });
      }
      return;
    }
    if ($k2 == di) {
      Wk2 = _k2.mime;
      if (!Array.isArray(Wk2)) return;
      $k2 = Zk2.type + "";
      _k2 = Wk2.length | 0;
      Yk2 = 0;
      while (Yk2 < _k2) {
        if (Wk2[Yk2] + "" == $k2) return;
        Yk2 = Yk2 + 1;
      }
      Yk2 = Zk2.type;
      Xk2 = Xk2.issues;
      Xk2.push({ code: dg, values: Wk2, input: Yk2 });
      return;
    }
    if ($k2 == jh) {
      Wk2 = ua(_k2.schema);
      if (Wk2) {
        Yk2 = G2(Wk2, Zk2[_k2.property], Yk2).issues;
        Zk2 = Yk2.length | 0;
        Wk2 = 0;
        while (Wk2 < Zk2) {
          $k2 = Yk2[Wk2];
          Jb($k2, _k2.property);
          $k2 = Xk2.issues;
          al2 = Yk2[Wk2];
          $k2.push(al2);
          Wk2 = Wk2 + 1;
        }
      }
      return;
    }
    if ($k2 == yf) {
      var fq = typeof _k2.transform;
      fq == Ke && (Wk2 = _k2.transform, Xk2.value = Wk2(Zk2));
      return;
    }
    if ($k2 == rf) {
      $k2 = void 0;
      X(Wk2._zod) && ($k2 = Wk2._zod, $k2 = $k2.bag);
      if (X($k2) && $k2.Class !== void 0) {
        if (sa($k2.Class, Zk2)) return;
        Wk2 = Xk2.issues;
        Xk2 = $k2.Class;
        Wk2.push(ya(Xk2.name + "", Zk2));
        return;
      }
      var kq = typeof _k2.fn;
      if (kq != Ke) return;
      $k2 = Xk2.issues;
      al2 = { value: Zk2, issues: $k2 };
      al2.addIssue = function(p3) {
        typeof p3 == Ge ? p3 = { message: p3, code: rf, input: Zk2, inst: Wk2 } : (!p3.fatal || (p3.continue = false), p3.code === void 0 && (p3.code = rf), true === "input" in p3 || (p3.input = Zk2), p3.inst === void 0 && (p3.inst = Wk2), p3.continue === void 0 && (p3.continue = !_k2.abort));
        $k2.push(p3);
      };
      bl2 = $k2.length | 0;
      cl2 = _k2.fn;
      al2 = cl2(Zk2, al2);
      if (ca(al2)) {
        if (Yk2 !== void 0 && false === Yk2.async) throw new Error(Ie);
        Xk2.$pending = al2.then(function(I3) {
          j2(I3, Xk2, Zk2, Wk2, _k2, bl2);
          return Xk2;
        });
        return;
      }
      j2(al2, Xk2, Zk2, Wk2, _k2, bl2);
      return;
    }
  };
  let s2 = (X2) => {
    var $2 = X2.$pending;
    if (ca($2)) {
      Reflect.deleteProperty(X2, of);
      return $2;
    }
  };
  let t2 = (X2) => {
    if (X2.aborted) return true;
    var $2 = X2.issues;
    var aa2 = $2.length | 0;
    X2 = 0;
    while (X2 < aa2) {
      var ca2 = $2[X2];
      ca2 = ca2.continue;
      if (false === ca2) return true;
      X2 = X2 + 1;
    }
    return false;
  };
  let u2 = (X2, $2, aa2) => {
    X2 = X2.issues;
    var ca2 = X2.length | 0;
    while ($2 < ca2) {
      var da2 = X2[$2];
      da2.schema === void 0 && (da2 = X2[$2], da2.schema = aa2);
      $2 = $2 + 1 | 0;
    }
  };
  let v2 = (X2, $2, aa2) => {
    aa2 = !aa2.abort;
    X2 = X2.issues;
    var ca2 = X2.length | 0;
    while ($2 < ca2) {
      var da2 = X2[$2];
      da2.continue = aa2;
      $2 = $2 + 1 | 0;
    }
  };
  let w2 = (Vk2, Wk2, Xk2, Yk2) => {
    var Zk2 = Vk2.def.checks;
    var _k2, bl2, $k2, al2;
    if (Zk2 === void 0 || !Array.isArray(Zk2)) return Wk2;
    bl2 = Zk2.length | 0;
    while (Yk2 < bl2) {
      _k2 = Zk2[Yk2];
      $k2 = g2(_k2);
      var vl2 = typeof $k2.when;
      if (vl2 == Ke) {
        if (t2(Wk2)) {
          Yk2 = Yk2 + 1 | 0;
          continue;
        }
        $k2 = $k2.when;
        if (!$k2(Wk2)) {
          Yk2 = Yk2 + 1 | 0;
          continue;
        }
      } else if (Mb(Wk2)) {
        Yk2 = Yk2 + 1 | 0;
        continue;
      }
      $k2 = Wk2.issues;
      $k2 = $k2.length | 0;
      r2(_k2, Wk2, Xk2);
      Yk2 = Yk2 + 1 | 0;
      al2 = s2(Wk2);
      if (ca(al2)) return al2.then(/* @__PURE__ */ ((a2, b2, c3, d3, e3, f3) => function(l3) {
        let k3 = a2.handle;
        i2(b2, e3, d3);
        u2(b2, e3, k3);
        return w2(a2, b2, c3, f3);
      })(Vk2, Wk2, Xk2, _k2, $k2, Yk2));
      al2 = Vk2.handle;
      i2(Wk2, $k2, _k2);
      u2(Wk2, $k2, al2);
    }
    return Wk2;
  };
  let x2 = (Vk2, Wk2, Xk2) => {
    if (Wk2.memo) return Wk2;
    i2(Wk2, 0, Vk2.handle);
    var tl2 = typeof Vk2.def.check;
    if (tl2 == Ge) {
      var Yk2 = Wk2.issues;
      Yk2 = Yk2.length | 0;
      r2(Vk2.handle, Wk2, Xk2);
      i2(Wk2, Yk2, Vk2.handle);
      v2(Wk2, Yk2, Vk2.def);
      var Zk2 = s2(Wk2);
      if (ca(Zk2)) return Zk2.then(function(d3) {
        return w2(Vk2, Wk2, Xk2, 0);
      });
      if (Vk2.def.abort) {
        Zk2 = Wk2.issues;
        if ((Zk2.length | 0) > Yk2) return Wk2;
      }
    }
    return w2(Vk2, Wk2, Xk2, 0);
  };
  let y2 = (X2, $2, aa2) => x2(X2, $2, aa2);
  let z2 = (Vk2) => {
    var Wk2 = Vk2.$waits;
    if (Wk2 === void 0 || !Array.isArray(Wk2)) return Vk2;
    Reflect.deleteProperty(Vk2, Oi);
    var _k2 = Wk2.length | 0;
    if (0 == _k2) return Vk2;
    return Promise.all(Wk2).then(function(a2) {
      return Vk2;
    });
  };
  let A2 = (X2, $2, aa2) => {
    if (ca($2)) {
      var da2 = X2.$waits;
      (da2 === void 0 || !Array.isArray(da2)) && (da2 = [], X2.$waits = da2);
      da2.push($2.then(aa2));
    } else aa2($2);
  };
  let B2 = (Vk2, Wk2, Xk2) => {
    var Yk2 = s2(Wk2);
    if (ca(Yk2)) return Yk2.then(function(d3) {
      return B2(Vk2, Wk2, Xk2);
    });
    Yk2 = z2(Wk2);
    if (ca(Yk2)) return Yk2.then(function(p3) {
      Hb(Vk2) && Jc(Vk2, p3);
      if (!Vk2.hasChecks) return p3;
      return y2(Vk2, p3, Xk2);
    });
    Hb(Vk2) && Jc(Vk2, Wk2);
    if (!Vk2.hasChecks) return Wk2;
    return y2(Vk2, Wk2, Xk2);
  };
  let C2 = (Vk2, Wk2, Xk2) => {
    if (32 == Vk2.kind || 31 == Vk2.kind) return Ga2(Vk2, Wk2, Xk2);
    Q2(Vk2, Wk2, Xk2);
    Vk2 = s2(Wk2);
    if (ca(Vk2)) return Vk2.then(function(d3) {
      return z2(Wk2);
    });
    return z2(Wk2);
  };
  let D2 = (Vk2, Wk2, Xk2, Yk2) => {
    if (Mb(Wk2)) {
      Wk2.aborted = true;
      return Wk2;
    }
    Wk2 = x2(Vk2, Xk2, Yk2);
    if (ca(Wk2)) {
      if (Yk2 !== void 0 && false === Yk2.async) throw new Error(Ie);
      return Wk2.then(function(p3) {
        return C2(Vk2, p3, Yk2);
      });
    }
    return C2(Vk2, Wk2, Yk2);
  };
  let E2 = (Vk2, Wk2, Xk2) => {
    Vk2 = gc(Vk2);
    if (Hb(Vk2)) {
      var Yk2 = Zd(Vk2, Wk2, Xk2);
      if (Yk2 !== void 0) return y2(Vk2, Yk2, Xk2);
    }
    if (30 == Vk2.kind) {
      if (Xk2 === void 0 || false === Xk2.async) throw new Error(Ie);
      Yk2 = Wk2.value;
      return Promise.resolve(Yk2).then(function(m3) {
        Wk2.value = m3;
        var g3 = ka(Vk2, He);
        return g3 ? E2(g3, Wk2, Xk2) : Wk2;
      });
    }
    if (Xk2 !== void 0 && X(Xk2) && Xk2.skipChecks) return C2(Vk2, Wk2, Xk2);
    if (c2(Xk2) && Vk2.hasChecks) {
      Yk2 = ia({}, Xk2);
      Yk2.skipChecks = true;
      var Zk2 = Wk2.value;
      Yk2 = C2(Vk2, { value: Zk2, issues: [] }, Yk2);
      if (ca(Yk2)) {
        if (Xk2 !== void 0 && false === Xk2.async) throw new Error(Ie);
        return Yk2.then(function(p3) {
          return D2(Vk2, p3, Wk2, Xk2);
        });
      }
      return D2(Vk2, Yk2, Wk2, Xk2);
    }
    if (32 == Vk2.kind || 31 == Vk2.kind) {
      Yk2 = Ga2(Vk2, Wk2, Xk2);
      if (ca(Yk2)) return Yk2.then(function(p3) {
        return B2(Vk2, p3, Xk2);
      });
      return B2(Vk2, Wk2, Xk2);
    }
    Q2(Vk2, Wk2, Xk2);
    return B2(Vk2, Wk2, Xk2);
  };
  let F2 = (X2, $2, aa2) => E2(X2, { value: $2, issues: [] }, aa2);
  let G2 = (X2, $2, aa2) => !!X2 ? F2(X2, $2, aa2) : { value: $2, issues: [] };
  let H2 = (X2, $2, aa2) => {
    X2 = X2.issues;
    X2.push(ya($2, aa2));
  };
  let I2 = (X2) => {
    if (typeof X2 != Le) return false;
    if (true === Number.isNaN(X2)) return false;
    if (!Ma(X2)) return false;
    return true;
  };
  let J2 = (X2) => {
    if (typeof X2 != Le) return false;
    return true === Number.isNaN(X2);
  };
  let K2 = (X2) => X2 === void 0 ? false : X2 == null;
  let L2 = (X2) => {
    if (!sa(Date, X2)) return false;
    if (true === Number.isNaN(X2.getTime())) return false;
    return true;
  };
  let M2 = (X2) => {
    var $2 = X2.issues;
    var da2 = $2.length | 0;
    if (0 == da2) return;
    $2 = X2.issues;
    $2.length = 0;
    Object.assign(X2, { value: void 0, aborted: false });
  };
  let N2 = (X2, $2, aa2) => {
    var ca2 = X2.issues;
    var sa2 = ca2.length | 0;
    if (0 == sa2) return;
    ca2 = $2.def.catchValue;
    ca2 === void 0 && (ca2 = $2.def.defaultValue);
    if (typeof ca2 == Ke) {
      var ia2 = [];
      var ka2 = X2.issues;
      var ma2 = ka2.length | 0;
      var da2 = 0;
      while (da2 < ma2) {
        ia2.push(Sa(ka2[da2], $2, aa2));
        da2 = da2 + 1;
      }
      $2 = X2.value;
      aa2 = X2.issues;
      ca2 = ca2({ value: $2, issues: aa2, error: { issues: ia2 }, input: X2.value });
    }
    X2.value = ca2;
    $2 = X2.issues;
    $2.length = 0;
    X2.aborted = false;
  };
  let O2 = (X2) => {
    if (0 == (X2.issues.length | 0) && X2.value === void 0) {
      var $2 = X2.issues;
      $2.push({ code: Bh, expected: Pf, input: X2.value });
    }
  };
  let P2 = (X2, $2) => {
    ca($2) && (X2.$pending = $2);
  };
  let Q2 = (Wk2, Xk2, Yk2) => {
    var Zk2 = gc(Wk2);
    var vq = Xk2.value;
    Wk2 = Zk2.kind;
    var _k2;
    if (9 == Wk2 || 10 == Wk2) return;
    if (0 == Wk2) {
      if (Zk2.def.coerce) try {
        Xk2.value = String(vq);
        vq = Xk2.value;
      } catch {
      }
      if (typeof vq == Ge) return;
      H2(Xk2, Ge, vq);
      return;
    }
    if (1 == Wk2) {
      if (Zk2.def.coerce) try {
        Xk2.value = Number(vq);
        vq = Xk2.value;
      } catch {
      }
      if (I2(vq)) return;
      H2(Xk2, Le, vq);
      return;
    }
    if (2 == Wk2) {
      !Zk2.def.coerce || (Xk2.value = Boolean(vq));
      vq = Xk2.value;
      if (typeof vq == Zf) return;
      H2(Xk2, Zf, vq);
      return;
    }
    if (3 == Wk2) {
      if (Zk2.def.coerce) try {
        Xk2.value = BigInt(vq);
      } catch {
        H2(Xk2, hf, vq);
        return;
      }
      vq = Xk2.value;
      if (typeof vq == hf) return;
      H2(Xk2, hf, vq);
      return;
    }
    if (4 == Wk2) {
      if (typeof vq == jg) return;
      H2(Xk2, jg, vq);
      return;
    }
    if (5 == Wk2) {
      if (Zk2.def.coerce) try {
        Xk2.value = new Date(vq);
        vq = Xk2.value;
      } catch {
      }
      if (L2(vq)) return;
      H2(Xk2, og, vq);
      return;
    }
    if (6 == Wk2) {
      if (J2(vq)) return;
      H2(Xk2, ki, vq);
      return;
    }
    if (7 == Wk2) {
      if (vq === void 0) return;
      H2(Xk2, Vf, vq);
      return;
    }
    if (12 == Wk2) {
      if (vq === void 0) return;
      H2(Xk2, Wi, vq);
      return;
    }
    if (8 == Wk2) {
      if (K2(vq)) return;
      H2(Xk2, Ng, vq);
      return;
    }
    if (11 == Wk2) {
      H2(Xk2, _h, vq);
      return;
    }
    if (13 == Wk2) {
      if (Zk2.values !== void 0 && !!Zk2.values.has(vq)) return;
      Yk2 = Array.from(Zk2.values);
      Wk2 = vq;
      Xk2 = Xk2.issues;
      Xk2.push({ code: dg, values: Yk2, input: Wk2 });
      return;
    }
    if (14 == Wk2) {
      if (Zk2.values !== void 0 && !!Zk2.values.has(vq)) return;
      Yk2 = Array.from(Zk2.values);
      Wk2 = vq;
      Xk2 = Xk2.issues;
      Xk2.push({ code: dg, values: Yk2, input: Wk2 });
      return;
    }
    if (23 == Wk2) {
      Wk2 = ka(Zk2, He);
      if (Zk2.def.exact) {
        !Wk2 || P2(Xk2, E2(Wk2, Xk2, Yk2));
        return;
      }
      if (vq === void 0) {
        !Wk2 || 2 == Wk2.optin && (Wk2 = E2(Wk2, Xk2, Yk2), ca(Wk2) ? Xk2.$pending = Wk2.then(function(p3) {
          M2(p3);
          return p3;
        }) : M2(Xk2));
        return;
      }
      !Wk2 || P2(Xk2, E2(Wk2, Xk2, Yk2));
      return;
    }
    if (24 == Wk2) {
      if (vq == null && vq !== void 0) {
        Xk2.value = vq;
        return;
      }
      Wk2 = ka(Zk2, He);
      !Wk2 || P2(Xk2, E2(Wk2, Xk2, Yk2));
      return;
    }
    if (25 == Wk2 || 26 == Wk2) {
      _k2 = ka(Zk2, He);
      if (c2(Yk2)) {
        !_k2 || P2(Xk2, E2(_k2, Xk2, Yk2));
        return;
      }
      if (vq === void 0) {
        var en = e2(Zk2);
        Xk2.value = en;
        26 == Wk2 && _k2 && P2(Xk2, E2(_k2, Xk2, Yk2));
        return;
      }
      if (_k2) {
        Yk2 = E2(_k2, Xk2, Yk2);
        if (ca(Yk2)) {
          var Vk2 = 0;
          25 == Wk2 && (Vk2 = 1);
          Xk2.$pending = Yk2.then(function(p3) {
            1 == Vk2 && p3.value === void 0 && (p3.value = e2(Zk2));
            return p3;
          });
          return;
        }
      }
      25 == Wk2 && Xk2.value === void 0 && (Xk2.value = e2(Zk2));
      return;
    }
    if (27 == Wk2) {
      Wk2 = ka(Zk2, He);
      if (c2(Yk2)) {
        !Wk2 || P2(Xk2, E2(Wk2, Xk2, Yk2));
        return;
      }
      if (Wk2) {
        Wk2 = E2(Wk2, Xk2, Yk2);
        if (ca(Wk2)) {
          Xk2.$pending = Wk2.then(function(p3) {
            N2(p3, Zk2, Yk2);
            return p3;
          });
          return;
        }
        N2(Xk2, Zk2, Yk2);
      }
      return;
    }
    if (28 == Wk2) {
      Wk2 = ka(Zk2, He);
      if (Wk2) {
        Wk2 = E2(Wk2, Xk2, Yk2);
        if (ca(Wk2)) {
          Xk2.$pending = Wk2.then(function(p3) {
            O2(p3);
            return p3;
          });
          return;
        }
      }
      O2(Xk2);
      return;
    }
    if (33 == Wk2) {
      if (!c2(Yk2)) {
        Wk2 = ka(Zk2, He);
        !Wk2 || (Wk2 = E2(Wk2, Xk2, Yk2), ca(Wk2) ? Xk2.$pending = Wk2.then(function(p3) {
          if (!p3.memo) {
            var b2 = p3.value;
            p3.value = ga.freeze(b2);
          }
          return p3;
        }) : Xk2.memo || (Wk2 = Xk2.value, Xk2.value = ga.freeze(Wk2)));
        return;
      }
      Wk2 = ka(Zk2, He);
      !Wk2 || P2(Xk2, E2(Wk2, Xk2, Yk2));
      return;
    }
    if (16 == Wk2) T2(Zk2, Xk2, Yk2);
    else if (17 == Wk2) V2(Zk2, Xk2, Yk2);
    else if (15 == Wk2) W2(Zk2, Xk2, Yk2);
    else if (18 == Wk2) ea2(Zk2, Xk2, Yk2);
    else if (21 == Wk2 || 38 == Wk2) ha2(Zk2, Xk2, Yk2);
    else if (22 == Wk2) la2(Zk2, Xk2, Yk2);
    else if (19 == Wk2) va2(Zk2, Xk2, Yk2);
    else if (20 == Wk2) wa2(Zk2, Xk2, Yk2);
    else if (39 == Wk2) Ia2(Zk2, Xk2);
    else if (40 == Wk2) {
      if (typeof vq != Ge) {
        H2(Xk2, Ge, vq);
        return;
      }
      Wk2 = Zk2.handle._zod;
      Wk2 = Wk2.pattern;
      Wk2 !== void 0 && Wk2 != null && (Wk2.lastIndex = 0, Ba(Wk2, vq + "") || h2(Xk2, Mf, { pattern: Wk2.source }));
    } else if (34 != Wk2) if (37 == Wk2) {
      Wk2 = ka(Zk2, He);
      if (Wk2) {
        Wk2 = G2(Wk2, vq, Yk2).issues;
        var Io = Wk2.length | 0;
        Xk2.value = 0 == Io;
      }
    } else 35 == Wk2 && (Wk2 = globalThis.File, Wk2 === void 0 ? H2(Xk2, wh, vq) : sa(Wk2, vq) || H2(Xk2, wh, vq));
  };
  let R2 = (X2) => {
    X2 = X2.kind;
    if (32 == X2) return true;
    if (31 == X2) return true;
    if (30 == X2) return true;
    if (29 == X2) return true;
    if (25 == X2) return true;
    if (26 == X2) return true;
    if (27 == X2) return true;
    return false;
  };
  let S2 = (X2, $2, aa2, da2) => {
    if (c2(aa2) && X2.hasChecks) return F2(X2, $2, aa2);
    if (R2(X2)) return F2(X2, $2, aa2);
    da2.value = $2;
    var ia2 = da2.issues;
    ia2.length = 0;
    da2.aborted === void 0 || (da2.aborted = false);
    Q2(X2, da2, aa2);
    if (ca(s2(da2))) return F2(X2, $2, aa2);
    if (!X2.hasChecks) return da2;
    X2 = x2(X2, da2, aa2);
    return ca(X2) ? X2 : da2;
  };
  let T2 = (Vk2, Wk2, Xk2) => {
    var Zk2 = Wk2.value;
    if (!Array.isArray(Zk2)) {
      Vk2 = Wk2.issues;
      Vk2.push(ya(Ff, Zk2));
      return;
    }
    var al2 = ka(Vk2, bh);
    var _k2 = ab(Vk2, Wk2, []);
    var bl2 = { value: void 0, issues: [] };
    var cl2 = Zk2.length | 0;
    var Yk2 = 0, $k2, dl2;
    while (Yk2 < cl2) {
      al2 ? ($k2 = Zk2[Yk2], $k2 = S2(al2, $k2, Xk2, bl2), ca($k2) ? (dl2 = +(0 + Yk2), A2(Wk2, $k2, /* @__PURE__ */ ((a2, b2, c3, d3) => function(E3) {
        Eb(b2, c3, d3, E3);
      })(Vk2, Wk2, _k2, dl2))) : Eb(Wk2, _k2, +(0 + Yk2), $k2)) : ($k2 = Zk2[Yk2], _k2.push($k2));
      Yk2 = Yk2 + 1;
    }
    Wk2.value = _k2;
  };
  let U2 = (X2, $2) => {
    var ka2 = X2.length | 0;
    var aa2 = ka2 - 1 | 0;
    while (aa2 >= 0) {
      var ca2 = ua(X2[aa2]);
      ca2 = ca2 && ($2 ? 0 != ca2.optin : 1 == ca2.optout);
      if (!ca2) return aa2 + 1 | 0;
      aa2 = aa2 - 1;
    }
    return 0;
  };
  let V2 = (Wk2, Xk2, Yk2) => {
    var _k2 = Xk2.value;
    if (!Array.isArray(_k2)) {
      Wk2 = Xk2.issues;
      Wk2.push(ya(Ci, _k2));
      return;
    }
    var Vk2 = Wk2.def.items;
    Array.isArray(Vk2) || (Vk2 = []);
    var bl2 = _k2.length | 0;
    var $k2 = Vk2.length | 0;
    var Zk2 = U2(Vk2, true);
    var gl2 = U2(Vk2, false);
    var dl2 = ka(Wk2, "rest");
    if (!dl2) {
      if (bl2 < Zk2) {
        Wk2 = Xk2.issues;
        Wk2.push(Kc(false, Zk2, _k2));
        return;
      }
      bl2 > $k2 && (Zk2 = Xk2.issues, Zk2.push(Kc(true, $k2, _k2)));
    }
    var el2 = ab(Wk2, Xk2, []);
    Xk2.value = el2;
    var al2 = [];
    var cl2 = [];
    Zk2 = 0;
    while (Zk2 < $k2) {
      al2.push(void 0);
      Zk2 = Zk2 + 1;
    }
    Zk2 = 0;
    while (Zk2 < $k2) {
      var hl2 = { i: 0 + Zk2 };
      var Jl2 = ua(Vk2[Zk2]);
      var fl2 = _k2[Zk2];
      fl2 = G2(Jl2, fl2, Yk2);
      ca(fl2) ? cl2.push(fl2.then(/* @__PURE__ */ ((a2, b2) => function(E3) {
        a2[b2.i] = E3;
      })(al2, hl2))) : al2[Zk2] = fl2;
      Zk2 = Zk2 + 1;
    }
    if (bl2 > $k2 && dl2) while (Zk2 < bl2) {
      fl2 = { i: 0 + Zk2 };
      $k2 = _k2[Zk2];
      $k2 = G2(dl2, $k2, Yk2);
      ca($k2) ? cl2.push($k2.then(/* @__PURE__ */ ((a2, b2, c3, d3) => function(E3) {
        Eb(b2, c3, d3.i, E3);
      })(Wk2, Xk2, el2, fl2))) : Eb(Xk2, el2, fl2.i, $k2);
      Zk2 = Zk2 + 1 | 0;
    }
    var _l2 = cl2.length | 0;
    if (_l2 > 0) {
      Xk2.$pending = Promise.all(cl2).then(function(f3) {
        Lc(Xk2, Vk2, _k2, al2, gl2);
        return Xk2;
      });
      return;
    }
    Lc(Xk2, Vk2, _k2, al2, gl2);
  };
  let W2 = (Vk2, Wk2, Xk2) => {
    var Yk2 = Wk2.value;
    var Zk2, $k2, _k2, al2, cl2, bl2, gl2, hl2, el2, il2, jl2, kl2, dl2, fl2;
    if (!X(Yk2) || Array.isArray(Yk2)) {
      Vk2 = Wk2.issues;
      Vk2.push(ya(ig, Yk2));
      return;
    }
    $k2 = Vk2.def.shape;
    $k2 == null && ($k2 = {});
    Zk2 = Vk2.def["~keys"];
    _k2 = Vk2.def["~fids"];
    if (!Array.isArray(Zk2) || !Array.isArray(_k2)) {
      Zk2 = ra($k2);
      _k2 = [];
      cl2 = Zk2.length | 0;
      al2 = 0;
      while (al2 < cl2) {
        bl2 = ua(Reflect.get($k2, Zk2[al2] + ""));
        bl2 ? _k2.push(+(0 + bl2.id)) : _k2.push(-1);
        al2 = al2 + 1;
      }
      Vk2.def["~keys"] = Zk2;
      Vk2.def["~fids"] = _k2;
    }
    al2 = ab(Vk2, Wk2, {});
    gl2 = { value: void 0, issues: [] };
    hl2 = Zk2.length | 0;
    cl2 = 0;
    while (cl2 < hl2) {
      dl2 = Zk2[cl2] + "";
      bl2 = +_k2[cl2] | 0;
      if (dl2 == Uf || bl2 < 0) {
        cl2 = cl2 + 1;
        continue;
      }
      bl2 = Ha[bl2];
      fl2 = true === dl2 in Yk2;
      el2 = void 0;
      fl2 && (el2 = Yk2[dl2]);
      el2 = S2(bl2, el2, Xk2, gl2);
      ca(el2) ? (il2 = bl2.optin, jl2 = bl2.optout, A2(Wk2, el2, /* @__PURE__ */ ((a2, b2, c3, d3, e3, f3, g3) => function(E3) {
        Ec(b2, c3, d3, e3, f3, g3, E3);
      })(Vk2, Wk2, al2, dl2, fl2, il2, jl2))) : Ec(Wk2, al2, dl2, fl2, bl2.optin, bl2.optout, el2);
      cl2 = cl2 + 1;
    }
    Zk2 = Vk2.def.catchall;
    if (Zk2 !== void 0 && Zk2 != null) {
      _k2 = ua(Zk2);
      bl2 = [];
      gl2 = ra(Yk2);
      hl2 = gl2.length | 0;
      el2 = 0;
      while (el2 < hl2) {
        Zk2 = gl2[el2] + "";
        if (!Ca.call($k2, Zk2)) if (Zk2 == Uf) !_k2 || 11 == _k2.kind && bl2.push(Zk2);
        else if (_k2) {
          cl2 = _k2;
          if (11 == cl2.kind) bl2.push(Zk2);
          else {
            cl2 = F2(cl2, Yk2[Zk2], Xk2);
            kl2 = cl2.issues;
            var rm2 = kl2.length | 0;
            rm2 > 0 ? (cl2 = cl2.issues, kl2 = Wk2.issues, Ua(cl2, kl2, Zk2)) : al2[Zk2] = cl2.value;
          }
        } else {
          al2[Zk2] = Yk2[Zk2];
        }
        el2 = el2 + 1;
      }
      var ym = bl2.length | 0;
      ym > 0 && (Xk2 = Wk2.issues, Xk2.push({ code: mf, keys: bl2, input: Yk2, path: [], continue: true }));
    }
    Wk2.value = al2;
  };
  let Y2 = ($2) => {
    if (!X($2) || Array.isArray($2)) return false;
    $2 = ga.getPrototypeOf($2);
    if ($2 == null) return true;
    return $2 === ga.prototype;
  };
  let Z2 = (X2) => {
    if (typeof X2 != Ge) return false;
    var $2 = Number(X2);
    if (typeof $2 != Le || !Ma($2)) return false;
    return $2 + "" == X2 + "";
  };
  let ba2 = (X2, $2, aa2, ca2) => {
    var da2 = ca2.issues;
    var ma2 = da2.length | 0;
    ma2 > 0 && (da2 = ca2.issues, X2 = X2.issues, Ua(da2, X2, aa2));
    Aa($2, aa2, ca2.value);
  };
  let ea2 = (Vk2, Wk2, Xk2) => {
    var Zk2 = Wk2.value;
    if (!Y2(Zk2)) {
      H2(Wk2, Xg, Zk2);
      return;
    }
    var bl2 = ab(Vk2, Wk2, {});
    Wk2.value = bl2;
    var en = typeof Vk2.def.mode;
    if (en == Ge) {
      var gn = Vk2.def.mode + "";
      var Yk2 = gn == fk;
    } else {
      Yk2 = false;
    }
    var hl2 = Yk2, _k2, $k2, fl2, dl2, gl2, cl2, el2, il2, al2, jl2, kl2;
    _k2 = !!Vk2.def.partial;
    $k2 = ka(Vk2, Rh);
    fl2 = ka(Vk2, cg);
    Vk2 = void 0;
    !$k2 || (Yk2 = $k2, Yk2.values === void 0 || (Vk2 = Array.from(Yk2.values)));
    if (Vk2 !== void 0 && Array.isArray(Vk2) && !_k2) {
      dl2 = ma();
      gl2 = Vk2.length | 0;
      Yk2 = 0;
      while (Yk2 < gl2) {
        _k2 = Vk2[Yk2];
        cl2 = typeof _k2;
        if (cl2 != Ge) {
          if (cl2 != Le) {
            if (cl2 != jg) {
              Yk2 = Yk2 + 1;
              continue;
            }
          }
        }
        typeof _k2 == Le && (_k2 = _k2 + "");
        dl2.add(_k2);
        if (typeof _k2 == Ge && _k2 + "" == Uf) {
          Yk2 = Yk2 + 1;
          continue;
        }
        _k2 = G2($k2, Vk2[Yk2], Xk2);
        if (ca(_k2)) {
          Yk2 = Yk2 + 1;
          continue;
        }
        cl2 = _k2.issues;
        var Nl2 = cl2.length | 0;
        if (Nl2 > 0) {
          el2 = [];
          cl2 = _k2.issues;
          il2 = cl2.length | 0;
          cl2 = 0;
          while (cl2 < il2) {
            el2.push(Sa(_k2.issues[cl2], $k2, Xk2));
            cl2 = cl2 + 1;
          }
          _k2 = [];
          cl2 = Vk2[Yk2];
          _k2.push(cl2);
          cl2 = Wk2.issues;
          il2 = Vk2[Yk2];
          cl2.push({ code: Of, origin: Xg, issues: el2, input: il2, path: _k2 });
          Yk2 = Yk2 + 1;
          continue;
        }
        al2 = _k2.value;
        if (typeof al2 == Ge && al2 + "" == Uf) {
          Yk2 = Yk2 + 1;
          continue;
        }
        _k2 = Vk2[Yk2];
        A2(Wk2, G2(fl2, Reflect.get(Zk2, _k2), Xk2), /* @__PURE__ */ ((a2, b2, c3) => function(E3) {
          ba2(a2, b2, c3, E3);
        })(Wk2, bl2, al2));
        Yk2 = Yk2 + 1;
      }
      Xk2 = [];
      _k2 = ra(Zk2);
      $k2 = _k2.length | 0;
      Yk2 = 0;
      while (Yk2 < $k2) {
        Vk2 = _k2[Yk2];
        dl2.has(Vk2) || (hl2 ? Vk2 + "" != Uf && (bl2[Vk2] = Zk2[Vk2]) : Xk2.push(Vk2));
        Yk2 = Yk2 + 1;
      }
      var lm2 = Xk2.length | 0;
      lm2 > 0 && (Vk2 = Wk2.issues, Vk2.push({ code: mf, keys: Xk2, input: Zk2, continue: true }));
      return;
    }
    cl2 = [];
    il2 = Reflect.ownKeys(Zk2);
    jl2 = il2.length | 0;
    al2 = 0;
    while (al2 < jl2) {
      Yk2 = il2[al2];
      if (typeof Yk2 == Ge && Yk2 + "" == Uf) {
        al2 = al2 + 1;
        continue;
      }
      _k2 = ga.prototype;
      if (!_k2.propertyIsEnumerable.call(Zk2, Yk2)) {
        al2 = al2 + 1;
        continue;
      }
      _k2 = G2($k2, Yk2, Xk2);
      if (!ca(_k2)) {
        dl2 = _k2.issues;
        var ym = dl2.length | 0;
        dl2 = ym > 0;
      } else {
        dl2 = false;
      }
      if (dl2 && Z2(Yk2)) {
        dl2 = G2($k2, Number(Yk2), Xk2);
        if (!ca(dl2)) {
          gl2 = dl2.issues;
          var Dm = gl2.length | 0;
          gl2 = 0 == Dm;
        } else {
          gl2 = false;
        }
        gl2 && (_k2 = dl2);
      }
      if (ca(_k2)) dl2 = true;
      else {
        dl2 = _k2.issues;
        var Hm = dl2.length | 0;
        dl2 = Hm > 0;
      }
      if (dl2) {
        if (hl2) bl2[Yk2] = Zk2[Yk2];
        else if (Vk2 !== void 0) cl2.push(Yk2);
        else {
          gl2 = [];
          if (!ca(_k2)) {
            dl2 = _k2.issues;
            kl2 = dl2.length | 0;
            dl2 = 0;
            while (dl2 < kl2) {
              gl2.push(Sa(_k2.issues[dl2], $k2, Xk2));
              dl2 = dl2 + 1;
            }
          }
          _k2 = [];
          _k2.push(Yk2);
          dl2 = Wk2.issues;
          dl2.push({ code: Of, origin: Xg, issues: gl2, input: Yk2, path: _k2 });
        }
        al2 = al2 + 1;
        continue;
      }
      el2 = _k2.value;
      if (typeof el2 == Ge && el2 + "" == Uf) {
        al2 = al2 + 1;
        continue;
      }
      A2(Wk2, G2(fl2, Zk2[Yk2], Xk2), /* @__PURE__ */ ((a2, b2, c3) => function(E3) {
        ba2(a2, b2, c3, E3);
      })(Wk2, bl2, el2));
      al2 = al2 + 1;
    }
    var bn = cl2.length | 0;
    bn > 0 && (Vk2 = Wk2.issues, Vk2.push({ code: mf, keys: cl2, input: Zk2, continue: true }));
  };
  let fa2 = (X2, $2) => {
    var ca2 = [];
    var da2 = X2.length | 0;
    var aa2 = 0, ia2;
    while (aa2 < da2) {
      ia2 = X2[aa2];
      ca2.push(Sa(ia2, null, $2));
      aa2 = aa2 + 1;
    }
    return ca2;
  };
  let ha2 = (Vk2, Wk2, Xk2) => {
    var Zk2 = Wk2.value;
    var $k2 = Vk2.def.options;
    Array.isArray($k2) || ($k2 = []);
    var ym = typeof Vk2.def.discriminator;
    var Yk2 = ym == Ge ? Vk2.def.discriminator + "" : xg;
    var cl2 = $k2.length | 0;
    if (Yk2.length > 0) {
      if (!X(Zk2) || Array.isArray(Zk2)) {
        Vk2 = Wk2.issues;
        Vk2.push(ya(ig, Zk2));
        return;
      }
      var al2 = Sc(Vk2);
      var _k2 = Zk2[Yk2];
      _k2 = al2.get(_k2);
      var bl2;
      if (_k2 !== void 0 && _k2 != null) {
        Xk2 = F2(da(_k2), Zk2, Xk2);
        if (ca(Xk2)) {
          Wk2.$pending = Xk2.then(function(p3) {
            bb(Wk2, p3);
            return Wk2;
          });
          return;
        }
        bb(Wk2, Xk2);
        return;
      }
      if (!(!!Vk2.def.unionFallback || c2(Xk2))) {
        Vk2 = { code: Cf, errors: [], note: "No matching discriminator", discriminator: Yk2, options: Array.from(al2.keys()), path: [] };
        Jb(Vk2, Yk2);
        Wk2 = Wk2.issues;
        Wk2.push(Vk2);
        return;
      }
    }
    Yk2 = [];
    al2 = [];
    var dl2 = [];
    _k2 = 0;
    while (_k2 < cl2) {
      Yk2.push(void 0);
      _k2 = _k2 + 1;
    }
    _k2 = 0;
    while (_k2 < cl2) {
      bl2 = G2(ua($k2[_k2]), Zk2, Xk2);
      if (ca(bl2)) {
        var el2 = { i: 0 + _k2 };
        dl2.push(bl2.then(/* @__PURE__ */ ((a2, b2) => function(E3) {
          a2[b2.i] = E3;
        })(Yk2, el2)));
      } else {
        Yk2[_k2] = bl2;
        var fl2 = bl2.issues;
        var Ql2 = fl2.length | 0;
        if (0 == Ql2) {
          if (38 != Vk2.kind) {
            bb(Wk2, bl2);
            return;
          }
          al2.push(_k2);
        }
      }
      _k2 = _k2 + 1;
    }
    var Xl2 = dl2.length | 0;
    if (Xl2 > 0) {
      Wk2.$pending = Promise.all(dl2).then(function(b2) {
        if (38 == Vk2.kind) {
          b2 = [];
          var B3 = 0, c3;
          while (B3 < cl2) {
            c3 = Yk2[B3];
            c3 !== void 0 && c3 != null && 0 == (c3.issues.length | 0) && b2.push(B3);
            B3 = B3 + 1;
          }
          var t3 = b2.length | 0;
          if (1 == t3) {
            bb(Wk2, Yk2[b2[0]]);
            return Wk2;
          }
        }
        Mc(Vk2, Wk2, Yk2, Xk2);
        return Wk2;
      });
      return;
    }
    if (38 == Vk2.kind) {
      var dm2 = al2.length | 0;
      if (1 == dm2) {
        Wk2.value = Yk2[al2[0]].value;
        return;
      }
      var km2 = al2.length | 0;
      if (0 == km2) {
        al2 = [];
        Zk2 = 0;
        while (Zk2 < cl2) {
          _k2 = ua($k2[Zk2]);
          !_k2 || (Vk2 = _k2);
          _k2 = Yk2[Zk2];
          bl2 = _k2.issues;
          dl2 = [];
          fl2 = bl2.length | 0;
          _k2 = 0;
          while (_k2 < fl2) {
            dl2.push(Sa(bl2[_k2], Vk2, Xk2));
            _k2 = _k2 + 1;
          }
          al2.push(dl2);
          Zk2 = Zk2 + 1;
        }
        Vk2 = Wk2.issues;
        Vk2.push({ code: Cf, errors: al2, path: [] });
        return;
      }
      Vk2 = Wk2.issues;
      Vk2.push({ code: Cf, errors: [], inclusive: false, matches: al2, path: [] });
      return;
    }
    Mc(Vk2, Wk2, Yk2, Xk2);
  };
  let ja2 = (X2, $2) => {
    if (true === gd(X2, $2)) return { valid: true, data: X2 };
    var aa2;
    sa(Date, X2) && sa(Date, $2) ? (aa2 = X2.getTime(), aa2 = aa2 === $2.getTime()) : aa2 = false;
    if (aa2) return { valid: true, data: X2 };
    if (Y2(X2) && Y2($2)) {
      var ca2 = {};
      var da2 = [];
      da2.push(X2);
      da2.push($2);
      var ia2 = 0, ma2, ya2, pa2, ua2, ka2;
      while (ia2 < 2) {
        ma2 = da2[ia2];
        ua2 = Reflect.ownKeys(ma2);
        ya2 = ua2.length | 0;
        ka2 = 0;
        while (ka2 < ya2) {
          aa2 = ua2[ka2];
          pa2 = typeof aa2 == Ge && aa2 + "" == Uf;
          pa2 || Aa(ca2, aa2, ma2[aa2]);
          ka2 = ka2 + 1;
        }
        ia2 = ia2 + 1;
      }
      ma2 = ra(X2);
      pa2 = ra($2);
      ua2 = ma2.length | 0;
      ia2 = 0;
      while (ia2 < ua2) {
        aa2 = ma2[ia2] + "";
        if (aa2 != Uf) {
          ya2 = pa2.length | 0;
          da2 = false;
          ka2 = 0;
          while (ka2 < ya2) {
            pa2[ka2] + "" == aa2 && (da2 = true);
            ka2 = ka2 + 1;
          }
          if (da2) {
            da2 = X2[aa2];
            ka2 = $2[aa2];
            da2 = ja2(da2, ka2);
            if (!da2.valid) {
              X2 = [];
              X2.push(aa2);
              $2 = da2.mergeErrorPath;
              if (Array.isArray($2)) {
                ca2 = $2.length | 0;
                aa2 = 0;
                while (aa2 < ca2) {
                  da2 = $2[aa2];
                  X2.push(da2);
                  aa2 = aa2 + 1;
                }
              }
              return { valid: false, mergeErrorPath: X2 };
            }
            ca2[aa2] = da2.data;
          }
        }
        ia2 = ia2 + 1;
      }
      return { valid: true, data: ca2 };
    }
    if (Array.isArray(X2) && Array.isArray($2)) {
      aa2 = X2.length | 0;
      if (aa2 != ($2.length | 0)) return { valid: false, mergeErrorPath: [] };
      da2 = [];
      ia2 = X2.length | 0;
      aa2 = 0;
      while (aa2 < ia2) {
        ca2 = X2[aa2];
        ka2 = $2[aa2];
        ca2 = ja2(ca2, ka2);
        if (!ca2.valid) {
          X2 = [];
          X2.push(aa2);
          $2 = ca2.mergeErrorPath;
          if (Array.isArray($2)) {
            ca2 = $2.length | 0;
            aa2 = 0;
            while (aa2 < ca2) {
              da2 = $2[aa2];
              X2.push(da2);
              aa2 = aa2 + 1;
            }
          }
          return { valid: false, mergeErrorPath: X2 };
        }
        ca2 = ca2.data;
        da2.push(ca2);
        aa2 = aa2 + 1;
      }
      return { valid: true, data: da2 };
    }
    return { valid: false, mergeErrorPath: [] };
  };
  let la2 = (Vk2, Wk2, Xk2) => {
    var Zk2 = ka(Vk2, Ck);
    var Yk2 = ka(Vk2, gk);
    if (!Zk2 || !Yk2) return;
    Vk2 = G2(Zk2, Wk2.value, Xk2);
    var _k2 = Wk2.value;
    Yk2 = G2(Yk2, _k2, Xk2);
    if (ca(Vk2) || ca(Yk2)) {
      Xk2 = [];
      Xk2.push(Promise.resolve(Vk2));
      Xk2.push(Promise.resolve(Yk2));
      Wk2.$pending = Promise.all(Xk2).then(function(a2) {
        let b2 = a2[0];
        na2(Wk2, b2, a2[1]);
        return Wk2;
      });
      return;
    }
    na2(Wk2, Vk2, Yk2);
  };
  let na2 = (X2, $2, aa2) => {
    var ka2 = {};
    var ma2 = {};
    var ca2 = $2.issues;
    var ua2 = ca2.length | 0;
    var ca2 = void 0, da2 = 0, sa2, ya2, Aa2, Ba2;
    while (da2 < ua2) {
      sa2 = $2.issues[da2];
      !oa2(sa2, "l", ka2, ma2) ? (sa2 = X2.issues, ya2 = $2.issues[da2], sa2.push(ya2)) : ca2 === void 0 && $2.issues[da2].code + "" == mf && (ca2 = $2.issues[da2]);
      da2 = da2 + 1;
    }
    da2 = aa2.issues;
    ua2 = da2.length | 0;
    da2 = 0;
    while (da2 < ua2) {
      sa2 = aa2.issues[da2];
      !oa2(sa2, "r", ka2, ma2) ? (sa2 = X2.issues, ya2 = aa2.issues[da2], sa2.push(ya2)) : ca2 === void 0 && aa2.issues[da2].code + "" == mf && (ca2 = aa2.issues[da2]);
      da2 = da2 + 1;
    }
    da2 = [];
    ua2 = ra(ka2);
    Aa2 = ua2.length | 0;
    ma2 = 0;
    while (ma2 < Aa2) {
      sa2 = ua2[ma2] + "";
      ya2 = ka2[sa2];
      ya2.l ? (ya2 = ka2[sa2], ya2 = !!ya2.r) : ya2 = false;
      ya2 && da2.push(sa2);
      ma2 = ma2 + 1;
    }
    var hc2 = da2.length | 0;
    if (hc2 > 0) {
      if (ca2 !== void 0) {
        ma2 = [];
        ua2 = ca2.keys;
        ya2 = da2.length | 0;
        ka2 = 0;
        while (ka2 < ya2) {
          Aa2 = ua2.length | 0;
          sa2 = 0;
          while (sa2 < Aa2) {
            Ba2 = ua2[sa2] + "";
            Ba2 == da2[ka2] + "" && (Ba2 = da2[ka2], ma2.push(Ba2));
            sa2 = sa2 + 1;
          }
          ka2 = ka2 + 1;
        }
        var Mc2 = ma2.length | 0;
        Mc2 > 0 && (ca2 = ia({}, ca2), ca2.keys = ma2, da2 = X2.issues, da2.push(ca2));
      }
    }
    $2 = $2.value;
    aa2 = aa2.value;
    $2 = ja2($2, aa2);
    if ($2.valid) X2.value = $2.data;
    else if (!Mb(X2)) {
      X2 = $2.mergeErrorPath;
      throw pa("Unmergable intersection. Error path: " + JSON.stringify(X2, void 0, void 0));
    }
  };
  let oa2 = (X2, $2, aa2, ca2) => {
    var da2 = X2.path;
    var ia2, ka2;
    if (X2.code + "" == mf && (da2 == null || 0 == (da2.length | 0))) {
      da2 = X2.keys;
      ka2 = da2.length | 0;
      ca2 = 0;
      while (ca2 < ka2) {
        X2 = da2[ca2] + "";
        (aa2[X2] === void 0 || aa2[X2] == null) && (aa2[X2] = {});
        X2 = aa2[X2];
        X2[$2] = true;
        ca2 = ca2 + 1;
      }
      return true;
    }
    var Hb2 = X2.code + "";
    if (Hb2 == Of) {
      var Jb2 = X2.origin + "";
      ia2 = Jb2 == Xg;
    } else {
      ia2 = false;
    }
    if (ia2) {
      if (da2 !== void 0 && 1 == (da2.length | 0)) {
        da2 = da2[0] + "";
        ca2[da2] === void 0 && (ca2[da2] = X2);
        (aa2[da2] === void 0 || aa2[da2] == null) && (aa2[da2] = {});
        X2 = aa2[da2];
        X2[$2] = true;
        return true;
      }
    }
    return false;
  };
  let qa2 = (X2) => {
    X2 = typeof X2;
    if (X2 == Ge) return true;
    if (X2 == Le) return true;
    if (X2 == jg) return true;
    return false;
  };
  let ta2 = (X2, $2, aa2, ca2, da2, ia2) => {
    var ka2 = X2.issues;
    var ra2 = ka2.length | 0;
    ra2 > 0 && (qa2(ca2) ? (X2 = X2.issues, ka2 = aa2.issues, Ua(X2, ka2, ca2)) : (ka2 = aa2.issues, ka2.push({ code: Of, origin: Eh, issues: fa2(X2.issues, ia2), input: da2, path: [] })));
    X2 = $2.issues;
    var Ta2 = X2.length | 0;
    Ta2 > 0 && (qa2(ca2) ? (X2 = $2.issues, $2 = aa2.issues, Ua(X2, $2, ca2)) : (X2 = aa2.issues, X2.push({ code: hg, origin: Eh, key: ca2, issues: fa2($2.issues, ia2), input: da2, path: [] })));
  };
  let va2 = (Vk2, Wk2, Xk2) => {
    var _k2 = Wk2.value;
    if (!sa(Map, _k2)) {
      Vk2 = Wk2.issues;
      Vk2.push(ya(Eh, _k2));
      return;
    }
    var $k2 = ab(Vk2, Wk2, /* @__PURE__ */ new Map());
    var bl2 = [];
    var el2 = _k2.entries();
    var Yk2 = el2.next();
    while (!Yk2.done) {
      Yk2 = Yk2.value;
      var al2 = Yk2[0];
      var cl2 = Yk2[1];
      Yk2 = { value: al2, issues: [] };
      var Zk2 = { value: cl2, issues: [] };
      var dl2 = ka(Vk2, Rh);
      !dl2 || (Yk2 = G2(dl2, al2, Xk2));
      dl2 = ka(Vk2, cg);
      !dl2 || (Zk2 = G2(dl2, cl2, Xk2));
      ca(Yk2) || ca(Zk2) ? (cl2 = [], cl2.push(Promise.resolve(Yk2)), cl2.push(Promise.resolve(Zk2)), bl2.push(Promise.all(cl2).then(/* @__PURE__ */ ((a2, b2, c3, d3, e3) => function(n3) {
        let p3 = n3[0];
        ta2(p3, n3[1], a2, e3, c3, b2);
        let m3 = n3[0];
        m3 = m3.value;
        let l3 = n3[1].value;
        d3.set(m3, l3);
      })(Wk2, Xk2, _k2, $k2, al2)))) : (ta2(Yk2, Zk2, Wk2, al2, _k2, Xk2), Yk2 = Yk2.value, Zk2 = Zk2.value, $k2.set(Yk2, Zk2));
      Yk2 = el2.next();
    }
    Wk2.value = $k2;
    var yl2 = bl2.length | 0;
    yl2 > 0 && (Wk2.$pending = Promise.all(bl2).then(function(a2) {
      Wk2.value = $k2;
      return Wk2;
    }));
  };
  let wa2 = (Vk2, Wk2, Xk2) => {
    var Yk2 = Wk2.value;
    var Zk2, _k2, $k2;
    if (!X(Yk2) || Yk2.add === void 0) {
      Vk2 = Wk2.issues;
      Vk2.push(ya(Jf, Yk2));
      return;
    }
    Zk2 = ab(Vk2, Wk2, ma());
    $k2 = Yk2.values();
    Yk2 = $k2.next();
    while (!Yk2.done) {
      Yk2 = Yk2.value;
      _k2 = ka(Vk2, cg);
      _k2 ? A2(Wk2, G2(_k2, Yk2, Xk2), function(E3) {
        var b2 = E3.issues;
        var d3 = b2.length | 0;
        if (d3 > 0) {
          b2 = E3.issues;
          var j3 = Wk2.issues;
          Rc(b2, j3);
        }
        j3 = E3.value;
        Zk2.add(j3);
      }) : Zk2.add(Yk2);
      Yk2 = $k2.next();
    }
    Wk2.value = Zk2;
  };
  let xa2 = (Vk2, Wk2, Xk2, Yk2) => {
    if (typeof Yk2 != Ke) return Wk2;
    var Zk2 = function(p3) {
      if (typeof p3 == Ge) {
        var b2 = Wk2.value;
        p3 = { message: p3, code: rf, input: b2, inst: Vk2.handle };
      } else {
        !p3.fatal || (p3.continue = false);
        p3.code === void 0 && (p3.code = rf);
        true === "input" in p3 || (p3.input = Wk2.value);
        p3.inst === void 0 && (p3.inst = Vk2.handle);
      }
      var v3 = Wk2.issues;
      v3.push(p3);
    };
    var _k2 = Wk2.value;
    Zk2 = { addIssue: Zk2, value: _k2, issues: Wk2.issues };
    _k2 = Wk2.value;
    Yk2 = Yk2(_k2, Zk2);
    if (ca(Yk2)) {
      if (Xk2 !== void 0 && false === Xk2.async) throw new Error(Ie);
      return Yk2.then(function(p3) {
        Wk2.value = p3;
        return Wk2;
      });
    }
    Wk2.value = Yk2;
    return Wk2;
  };
  let za2 = (X2) => {
    var $2 = X2.issues;
    var aa2 = $2.length | 0;
    X2 = 0;
    while (X2 < aa2) {
      var ca2 = $2[X2];
      var sa2 = ca2.code + "";
      if (sa2 != mf) return true;
      X2 = X2 + 1;
    }
    return false;
  };
  let Da2 = (X2, $2, aa2) => !!aa2 ? E2(aa2, X2, $2) : X2;
  let Fa2 = (Vk2, Wk2, Xk2) => {
    if (za2(Wk2)) {
      Wk2.aborted = true;
      return Wk2;
    }
    var Yk2 = Vk2.def.transform;
    var Zk2 = ka(Vk2, vh);
    if (typeof Yk2 == Ke) {
      Yk2 = xa2(Vk2, Wk2, Xk2, Yk2);
      if (ca(Yk2)) return Yk2.then(function(p3) {
        return Da2(p3, Xk2, Zk2);
      });
    }
    return Da2(Wk2, Xk2, Zk2);
  };
  let Ga2 = (Vk2, Wk2, Xk2) => {
    var Yk2 = ka(Vk2, Dh);
    var _k2 = ka(Vk2, vh);
    var $k2 = Vk2.def.transform;
    var Zk2 = Vk2.def.reverseTransform;
    if (31 == Vk2.kind) {
      if (c2(Xk2)) throw new qc(_j);
      if (Xk2 !== void 0 && X(Xk2)) {
        Yk2 = Xk2[hk];
        if (X(Yk2) && Yk2.backEdges !== void 0 && Yk2.backEdges != null) {
          Yk2 = Yk2.backEdges;
          Zk2 = Wk2.value;
          if (Yk2.has(Zk2)) {
            Vk2 = new Error("Cannot parse a reference cycle that closes through a transform");
            Vk2.name = "ZodCyclicError";
            throw Vk2;
          }
        }
      }
      return typeof $k2 == Ke ? xa2(Vk2, Wk2, Xk2, $k2) : Wk2;
    }
    if (c2(Xk2)) {
      if (_k2) {
        _k2 = E2(_k2, Wk2, Xk2);
        if (ca(_k2)) return _k2.then(function(c3) {
          if (za2(c3)) {
            c3.aborted = true;
            return c3;
          }
          var b2 = typeof Zk2 == Ke ? xa2(Vk2, c3, Xk2, Zk2) : c3;
          if (ca(b2)) return b2.then(function(b3) {
            return Da2(b3, Xk2, Yk2);
          });
          return Da2(c3, Xk2, Yk2);
        });
        if (za2(Wk2)) {
          Wk2.aborted = true;
          return Wk2;
        }
      }
      if (typeof Zk2 == Ke) {
        Zk2 = xa2(Vk2, Wk2, Xk2, Zk2);
        if (ca(Zk2)) return Zk2.then(function(p3) {
          return Da2(p3, Xk2, Yk2);
        });
      }
      return Da2(Wk2, Xk2, Yk2);
    }
    if (Yk2) {
      Yk2 = E2(Yk2, Wk2, Xk2);
      if (ca(Yk2)) return Yk2.then(function(p3) {
        return Fa2(Vk2, p3, Xk2);
      });
    }
    return Fa2(Vk2, Wk2, Xk2);
  };
  let Ia2 = (X2, $2) => {
    var aa2 = $2.value;
    if (typeof aa2 != Ke) {
      H2($2, Ke, aa2);
      return;
    }
    var da2 = X2.def.input;
    X2 = X2.def.output;
    var ca2 = ua(X2);
    ca2 = ca2 && 30 == ca2.kind;
    $2.value = hc(aa2, da2, X2, ca2);
  };
  let Ja2 = (Wk2) => {
    var Xk2 = ga.getOwnPropertyDescriptor(Wk2, sf);
    if (Xk2 !== void 0) {
      if (Xk2 != null) {
        var pl2 = typeof Xk2.get;
        if (pl2 == Ke) return;
      }
    }
    var Vk2 = Wk2.shape;
    Vk2 === void 0 && (Vk2 = {});
    Vk2 == null && (Vk2 = {});
    Tb.set(Wk2, Vk2);
    aa(Wk2, sf, { configurable: true, get: function() {
      var b2 = {};
      var d3 = Reflect.ownKeys(Vk2);
      var e3 = d3.length | 0;
      var c3 = 0, f3, g3, h3;
      while (c3 < e3) {
        f3 = d3[c3];
        g3 = Vk2;
        h3 = d3[c3];
        Aa(b2, f3, Reflect.get(g3, h3));
        c3 = c3 + 1;
      }
      aa(Wk2, sf, { value: b2, writable: true, enumerable: true, configurable: true });
      Tb.set(Wk2, b2);
      return b2;
    } });
  };
  let Ka2 = (X2, $2) => {
    var aa2 = ma();
    aa2.add(wj);
    aa2.add(ij);
    aa2.add(X2);
    X2.length > 0 && aa2.add(yk + X2);
    X2 = $2.__parent;
    var ca2 = 0;
    while (X2 !== void 0 && X2 != null && ca2 < 8) {
      $2 = X2.name + "";
      $2.length > 0 && (aa2.add($2), aa2.add(yk + $2));
      X2 = X2.__parent;
      ca2 = ca2 + 1 | 0;
    }
    return aa2;
  };
  let La2 = (X2, aa2) => {
    var ca2 = aa2.check + "";
    var da2, ia2, ka2;
    (ca2 == vf || ca2 == Fg) && (da2 = X2.minimum, (da2 === void 0 || aa2.minimum > da2) && (X2.minimum = aa2.minimum));
    (ca2 == Lf || ca2 == gh) && (da2 = X2.maximum, (da2 === void 0 || aa2.maximum < da2) && (X2.maximum = aa2.maximum));
    ca2 == Rf && Object.assign(X2, { minimum: aa2.length, maximum: aa2.length, length: aa2.length });
    ca2 == vg && Object.assign(X2, { minimum: aa2.size, maximum: aa2.size, size: aa2.size });
    ca2 == df && (da2 = aa2.inclusive, false === da2 ? (da2 = X2.exclusiveMinimum, (da2 === void 0 || aa2.value > da2) && (X2.exclusiveMinimum = aa2.value)) : (da2 = X2.minimum, (da2 === void 0 || aa2.value > da2) && (X2.minimum = aa2.value)));
    ca2 == uf && (da2 = aa2.inclusive, false === da2 ? (da2 = X2.exclusiveMaximum, (da2 === void 0 || aa2.value < da2) && (X2.exclusiveMaximum = aa2.value)) : (da2 = X2.maximum, (da2 === void 0 || aa2.value < da2) && (X2.maximum = aa2.value)));
    ca2 == dh && X2.multipleOf === void 0 && (X2.multipleOf = aa2.value);
    ca2 == nf && (X2.format = aa2.format, da2 = aa2.format + "", (da2 == Hi || da2 == mh) && Object.assign(X2, { minimum: Number.MIN_SAFE_INTEGER, maximum: Number.MAX_SAFE_INTEGER }), da2 == gj && Object.assign(X2, { minimum: -2147483648, maximum: 2147483647 }), da2 == Xj && Object.assign(X2, { minimum: 0, maximum: 4294967295 }), da2 == zj && Object.assign(X2, { minimum: -34028234663852886e22, maximum: 34028234663852886e22 }), da2 == Aj && Object.assign(X2, { minimum: 0 - +Number.MAX_VALUE, maximum: Number.MAX_VALUE }), da2.includes(mh) && (X2.pattern = $(Pk, xg)));
    if (ca2 == af || ca2 == sg || ca2 == tg) {
      ca2 == af ? X2.format = aa2.format : X2.format = ca2;
      aa2.pattern !== void 0 && aa2.pattern != null && X2.format + "" != ji && (X2.patterns === void 0 && (X2.patterns = ma()), da2 = X2.patterns, ia2 = aa2.pattern, da2.add(ia2));
      var ee2 = X2.format + "";
      ee2 == Wg && (X2.contentEncoding = Wg);
    }
    ca2 == wg && (X2.patterns === void 0 && (X2.patterns = ma()), da2 = aa2.prefix, ia2 = da2.replace($(gg, cj), Dj), da2 = X2.patterns, ia2 = "^" + ia2, da2.add($(ia2 + ".*", xg)));
    ca2 == Sg && (X2.patterns === void 0 && (X2.patterns = ma()), da2 = aa2.suffix, ia2 = da2.replace($(gg, cj), Dj), da2 = X2.patterns, ia2 = ".*" + ia2, da2.add($(ia2 + yk, xg)));
    if (ca2 == Hf) {
      X2.patterns === void 0 && (X2.patterns = ma());
      da2 = aa2.includes;
      da2 = da2.replace($(gg, cj), Dj);
      var ie2 = typeof aa2.position;
      if (ie2 == Le) {
        ia2 = X2.patterns;
        ka2 = "^.{" + aa2.position;
        var ed2 = ka2 + "}" + da2;
        ia2.add($(ed2, xg));
      } else {
        ia2 = X2.patterns;
        ia2.add($(da2 + "", xg));
      }
    }
    ca2 == di && (X2.mime = aa2.mime);
  };
  let Na2 = (X2, $2) => {
    X2 = X2._zod;
    X2 = X2.bag;
    var Ea2 = typeof $2.check;
    Ea2 == Ge && La2(X2, $2);
    typeof $2.format == Ge && X2.format === void 0 && (X2.format = $2.format);
    $2 = $2.checks;
    if (!Array.isArray($2)) return;
    var ca2 = $2.length | 0;
    var aa2 = 0;
    while (aa2 < ca2) {
      La2(X2, g2($2[aa2]));
      aa2 = aa2 + 1;
    }
  };
  let Oa2 = ($2, aa2, ca2, da2) => {
    mb();
    if (X($2._zod)) {
      var ia2 = $2._zod;
      ia2 = ia2.id !== void 0;
    } else {
      ia2 = false;
    }
    if (ia2) return;
    ia2 = { id: 0, kind: 0, handle: null, def: null, ctor: null, typeName: "", trait: "", values: null, optin: 0, optout: 0, hasChecks: false };
    Rd(ia2, aa2);
    ia2.ctor = ca2;
    ia2.trait = da2;
    ca2 = Ka2(da2, ca2);
    var Aa2 = typeof aa2.check;
    Aa2 == Ge && ca2.add($h);
    Pa2($2, ia2, ca2);
    15 == ia2.kind && Ja2(aa2);
    Na2($2, aa2);
    Xd(ia2);
  };
  let Pa2 = (Vk2, Wk2, Xk2) => {
    Wk2.handle = Vk2;
    var Yk2 = Wk2.ctor._zodProto;
    Yk2 == null && (Yk2 = {});
    Yk2 = ga.create(Yk2);
    Object.assign(Yk2, { id: Wk2.id, def: Wk2.def, bag: {}, version: vd, traits: Xk2, constr: Wk2.ctor });
    Xk2 = (0, function(e3, i3) {
      return E2(Wk2, e3, i3);
    });
    Object.assign(Yk2, { run: Xk2, parse: Xk2 });
    Hb(Wk2) && (Yk2.memoizer = { recursive: void 0, handoff: void 0, ctx: void 0, bucket: void 0, open: [] });
    aa(Yk2, fg, { enumerable: true, configurable: true, get: function() {
      return ob(Vk2);
    } });
    aa(Vk2, Fe, Db(Yk2));
    ae(Vk2, Wk2, Yk2, Xk2);
  };
  return function(Wk2, Xk2) {
    var Yk2 = {};
    if (Xk2 !== void 0 && X(Xk2._zodProto)) {
      var Zk2 = Xk2._zodProto;
      ga.setPrototypeOf(Yk2, Zk2);
    }
    var Vk2 = (0, function(l3) {
      if (this === void 0 || this == null || !X(this)) {
        var a2 = Vk2.prototype;
        a2 = ga.create(a2);
      } else {
        a2 = this;
      }
      l3 !== void 0 && X(l3) && typeof l3.type == Ge && Oa2(a2, l3, Vk2, Wk2);
      return a2;
    });
    Vk2.__parent = Xk2;
    Vk2._zodProto = Yk2;
    Xk2 === void 0 || (Yk2 = Vk2.prototype, Xk2 = Xk2.prototype, ga.setPrototypeOf(Yk2, Xk2));
    Xk2 = Vk2.prototype;
    aa(Xk2, ef, { configurable: true, enumerable: true, get: function() {
      let a2 = this._zod;
      return a2.def;
    } });
    Xk2 = Vk2.prototype;
    aa(Xk2, Xe, { configurable: true, enumerable: true, get: function() {
      let a2 = this._zod;
      a2 = a2.def;
      return a2.type;
    } });
    Xk2 = Vk2;
    aa(Xk2, yh, Ea(Wk2));
    Xk2 = Vk2;
    aa(Xk2, "init", Ea(function(k3, l3) {
      l3 !== void 0 && X(l3) && Oa2(k3, l3, Vk2, Wk2);
      return k3;
    }));
    Xk2 = Vk2;
    Yk2 = Symbol.hasInstance;
    aa(Xk2, Yk2, Ea(function(k3) {
      if (k3 == null || !X(k3)) return false;
      var U3 = k3._zod;
      if (U3 == null) return false;
      U3 = U3.traits;
      return !!U3.has(Wk2);
    }));
    return Vk2;
  };
})();
var be = (s2) => {
  if (typeof s2 == Ge) return s2;
  if (X(s2) && s2 != null) {
    var k2 = typeof s2.error;
    if (k2 == Ge) return s2.error;
    var m2 = typeof s2.message;
    if (m2 == Ge) return s2.message;
  }
  return xg;
};
var Oa = (q2) => {
  if (q2 == null) return {};
  if (typeof q2 == Ge) return { error: function() {
    return q2;
  } };
  if (typeof q2 == Ke) return { error: q2 };
  if (!X(q2)) return {};
  if (q2.message !== void 0) {
    if (q2.error !== void 0) throw pa("Cannot specify both `message` and `error` params");
    q2.error = q2.message;
  }
  Reflect.deleteProperty(q2, Ye);
  var C2 = typeof q2.error;
  if (C2 == Ge) {
    var a = q2.error;
    q2 = ia({}, q2);
    q2.error = function() {
      return a;
    };
    return q2;
  }
  return q2;
};
var Uc = (a) => {
  if (typeof a == Le) {
    a = +a | 0;
    if (a == -1) return "(?:[01]\\d|2[0-3]):[0-5]\\d";
    if (0 == a) return "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{" + a + "}";
  }
  return "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
};
var Vc = (s2) => {
  var a = void 0;
  X(s2) && s2 != null && (a = s2.precision);
  var g2 = "^" + Uc(a);
  return $(g2 + yk, xg);
};
var Wc = (s2) => {
  var a = void 0;
  if (X(s2) && s2 != null) {
    a = s2.precision;
    var b = s2.offset, c2;
    c2 = s2.local;
  } else {
    b = false;
    c2 = false;
  }
  a = Uc(a);
  s2 = b ? "Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)" : "Z";
  s2 = "(?:" + s2 + ")";
  c2 && (s2 = s2 + "?");
  return $("^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:" + a + s2 + Mk, xg);
};
var ce = (a) => 0 == a ? Z : 1 == a ? ha : 2 == a ? Za : 3 == a ? qa : 4 == a ? Ub : 5 == a ? za : 6 == a ? Vb : 7 == a ? Wb : 8 == a ? sb : 9 == a ? Xb : 10 == a ? Ja : 11 == a ? db : 12 == a ? Yb : 13 == a ? tb : 14 == a ? Ka : 15 == a ? oa : 16 == a ? xa : 17 == a ? Zb : 18 == a ? ub : 19 == a ? eb : 20 == a ? fb : 21 == a ? La : 38 == a ? vb : 22 == a ? wb : 23 == a ? _a : 24 == a ? $b : 25 == a ? xb : 26 == a ? yb : 27 == a ? zb : 28 == a ? ac : 29 == a ? gb : 30 == a ? Ab : 31 == a ? hb : 32 == a ? Da : 33 == a ? Ac : 34 == a ? Qa : 35 == a ? jb : 37 == a ? bc : 39 == a ? Ra : 40 == a ? cc : Y;
var ba = (l2, s2) => {
  l2 = { type: l2 };
  ia(l2, Oa(s2));
  return l2;
};
var na = (k2, C2, N2, s2) => {
  ia(N2, Oa(s2));
  return fa(k2, ea(C2, N2));
};
var Ga = (a, m2, l2) => {
  l2 = ba(_d(a), l2);
  l2.innerType = m2;
  return new (ce(a))(l2);
};
var qb = (k2) => {
  k2 = da(k2).def.shape;
  return k2 == null ? {} : k2;
};
var Va = (k2) => {
  k2 = da(k2).def.checks;
  if (Array.isArray(k2)) {
    var e2 = k2.length | 0;
    k2 = e2 > 0;
  } else {
    k2 = false;
  }
  return k2;
};
var kc = (L2, g2) => {
  var a = Reflect.ownKeys(g2);
  var f2 = a.length | 0;
  g2 = 0;
  while (g2 < f2) {
    var p2 = typeof a[g2];
    if (p2 != Ge) g2 = g2 + 1;
    else {
      var b = a[g2];
      if (!Ca.call(L2, b)) {
        L2 = a[g2];
        L2 = 'Unrecognized key: "' + L2;
        throw pa(L2 + Th);
      }
      g2 = g2 + 1;
    }
  }
};
var lc = (a, b) => {
  let c2 = {};
  aa(c2, sf, { configurable: true, enumerable: true, get: function() {
    var p2 = {};
    var d2 = qb(a);
    lb(p2, d2);
    b !== void 0 && X(b) && b != null && lb(p2, b);
    aa(this, sf, { value: p2, writable: true, enumerable: true, configurable: true });
    return p2;
  } });
  return c2;
};
var mc = (a, b, c2, d2) => {
  if (c2 && Va(a)) {
    if (d2) throw pa($f);
    throw pa(eg);
  }
  var e2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(da(a).def));
  aa(e2, sf, { configurable: true, enumerable: true, get: function() {
    var U2 = da(a).def.shape;
    var e3, L2, f2, n2, g2, i2;
    U2 == null && (U2 = {});
    b !== void 0 && b != null && kc(U2, b);
    i2 = Reflect.ownKeys(U2);
    L2 = {};
    f2 = i2.length | 0;
    g2 = 0;
    while (g2 < f2) {
      n2 = i2[g2];
      if (typeof n2 != Ge) g2 = g2 + 1;
      else {
        e3 = U2[n2];
        (b == null || b[n2]) && (e3 = c2 ? d2 ? new $a({ type: lf, innerType: e3, exact: true }) : Ga(23, e3, void 0) : Ga(28, e3, void 0));
        Aa(L2, n2, e3);
        g2 = g2 + 1;
      }
    }
    aa(this, sf, { value: L2, writable: true, enumerable: true, configurable: true });
    return L2;
  } });
  c2 && (e2.checks = []);
  return new oa(e2);
};
var Xc = (a, l2) => {
  if (Array.isArray(a)) {
    var b = {};
    var f2 = a.length | 0;
    var g2 = 0, c2, d2;
    while (g2 < f2) {
      c2 = a[g2];
      d2 = a[g2];
      Aa(b, c2, d2);
      g2 = g2 + 1;
    }
    a = b;
  }
  l2 = ba(xi, l2);
  l2.entries = a;
  return new Ka(l2);
};
var nc = (a, l2) => {
  a == null && (a = {});
  l2 = ba(ig, l2);
  l2.shape = a;
  return new oa(l2);
};
var oc = (a, b, s2) => {
  var l2 = ba(Ci, s2);
  l2.items = a;
  b !== void 0 && b != null && (l2.rest = b);
  return new Zb(l2);
};
var Pb = (a, b, l2) => {
  if (b == null || b._zod === void 0) {
    l2 = new Z(ba(Ge, void 0));
    var q2 = a;
    a = l2;
    l2 = b;
    b = q2;
  }
  l2 = ba(Xg, l2);
  Object.assign(l2, { keyType: a, valueType: b });
  return new ub(l2);
};
var de = (n2, S2, g2) => {
  var l2 = ba(pg, g2);
  Object.assign(l2, { options: S2, discriminator: n2, inclusive: false });
  if (Array.isArray(S2)) {
    var f2 = S2.length | 0;
    g2 = 0;
    while (g2 < f2) {
      var D2 = S2[g2];
      if (D2 === void 0) g2 = g2 + 1;
      else if (D2 == null) g2 = g2 + 1;
      else if (!X(D2)) g2 = g2 + 1;
      else {
        D2 = D2._zod;
        if (D2 === void 0) g2 = g2 + 1;
        else if (D2 == null) g2 = g2 + 1;
        else {
          D2 = D2.def;
          if (D2 === void 0) g2 = g2 + 1;
          else if (D2 == null) g2 = g2 + 1;
          else {
            D2 = Tb.get(D2);
            if (D2 === void 0) g2 = g2 + 1;
            else if (D2 == null) g2 = g2 + 1;
            else {
              if (!Ca.call(D2, n2)) throw pa(Ze + g2 + Th);
              g2 = g2 + 1;
            }
          }
        }
      }
    }
  }
  return new _b(l2);
};
var Yc = (a, q2, s2) => {
  let b = ib, c2 = s2.decode;
  return new b({ type: Og, in: a, out: q2, transform: c2, reverseTransform: s2.encode });
};
var me = () => {
  let y2 = [];
  y2.push("true");
  y2.push("1");
  y2.push("yes");
  y2.push("on");
  y2.push("y");
  y2.push("enabled");
  return y2;
};
var ne = () => {
  let y2 = [];
  y2.push("false");
  y2.push("0");
  y2.push("no");
  y2.push("off");
  y2.push("n");
  y2.push("disabled");
  return y2;
};
var oe = (g2) => {
  var e2 = Oa(g2);
  var a = e2.truthy;
  var b = e2.falsy;
  (a === void 0 || !Array.isArray(a)) && (a = me());
  (b === void 0 || !Array.isArray(b)) && (b = ne());
  var c2 = false;
  var wl2 = typeof e2.case;
  if (wl2 == Ge) {
    var yl2 = e2.case + "";
    g2 = "sensitive" == yl2;
  } else {
    g2 = false;
  }
  g2 && (c2 = true);
  if (!c2) {
    var h2 = [];
    var f2 = a.length | 0;
    g2 = 0;
    while (g2 < f2) {
      var zl2 = typeof a[g2];
      if (zl2 == Ge) h2.push(a[g2].toLowerCase());
      else {
        var w2 = a[g2];
        h2.push(w2);
      }
      g2 = g2 + 1;
    }
    a = h2;
    h2 = [];
    f2 = b.length | 0;
    g2 = 0;
    while (g2 < f2) {
      var Bl2 = typeof b[g2];
      Bl2 == Ge ? h2.push(b[g2].toLowerCase()) : (w2 = b[g2], h2.push(w2));
      g2 = g2 + 1;
    }
    b = h2;
  }
  h2 = ma();
  f2 = ma();
  w2 = a.length | 0;
  g2 = 0;
  while (g2 < w2) {
    var i2 = a[g2];
    h2.add(i2);
    g2 = g2 + 1;
  }
  w2 = b.length | 0;
  g2 = 0;
  while (g2 < w2) {
    i2 = b[g2];
    f2.add(i2);
    g2 = g2 + 1;
  }
  g2 = Z;
  var j2 = new g2({ type: Ge, error: e2.error });
  g2 = Za;
  var k2 = new g2({ type: Zf, error: e2.error });
  var d2;
  g2 = function(z2, e3) {
    var t2 = z2 + "";
    c2 || (t2 = t2.toLowerCase());
    if (h2.has(t2)) return true;
    if (f2.has(t2)) return false;
    var R2 = [];
    var O2 = a.length | 0;
    var Q2 = 0, S2, P2;
    while (Q2 < O2) {
      t2 = a[Q2];
      R2.push(t2);
      Q2 = Q2 + 1;
    }
    Q2 = b.length | 0;
    S2 = 0;
    while (S2 < Q2) {
      O2 = b[S2];
      R2.push(O2);
      S2 = S2 + 1;
    }
    S2 = e3.issues;
    P2 = e3.value;
    S2.push({ code: dg, expected: xk, values: R2, input: P2, inst: d2 });
    return {};
  };
  w2 = function(z2, d3) {
    if (true === z2) return a[0];
    return b[0];
  };
  i2 = ib;
  d2 = new i2({ type: Og, in: j2, out: k2, transform: g2, reverseTransform: w2, error: e2.error });
  return d2;
};
var ee = (s2) => {
  var a;
  a = new gb({ type: Ui, getter: function() {
    let b = [], K2 = new Z(ba(Ge, s2));
    b.push(K2);
    b.push(new ha(ba(Le, void 0)));
    b.push(new Za(ba(Zf, void 0)));
    b.push(new sb({ type: Ng }));
    let c2 = a;
    K2 = ba(Ff, void 0);
    K2.element = c2;
    b.push(new xa(K2));
    K2 = new Z(ba(Ge, void 0));
    b.push(Pb(K2, a, void 0));
    K2 = ba(pg, void 0);
    K2.options = b;
    return new La(K2);
  } });
  return a;
};
var Pa = (a, T2, b, s2) => {
  a == null && (a = Z);
  var l2 = ba(Ge, s2);
  l2.format = T2;
  l2.check = af;
  b !== void 0 && b != null && (l2.pattern = b);
  return new a(l2);
};
var fe = (a, s2) => {
  var c2 = X(s2) && typeof s2.enc == Ge ? s2.enc + "" : bk;
  var C2 = a + "_" + c2;
  var b = a + "";
  a = zc;
  c2 == bk && ("md5" == b && (a = Jd), b == Fk && (a = Kd), b == Uj && (a = zc), b == Vj && (a = Ld), b == Wj && (a = Md));
  c2 == Wg && ("md5" == b && (a = $("^[A-Za-z0-9+/]{22}==$", xg)), b == Fk && (a = $("^[A-Za-z0-9+/]{27}=$", xg)), b == Uj && (a = $("^[A-Za-z0-9+/]{43}=$", xg)), b == Vj && (a = $("^[A-Za-z0-9+/]{64}$", xg)), b == Wj && (a = $("^[A-Za-z0-9+/]{86}==$", xg)));
  c2 == Qg && ("md5" == b && (a = $("^[A-Za-z0-9_-]{22}$", xg)), b == Fk && (a = $("^[A-Za-z0-9_-]{27}$", xg)), b == Uj && (a = $("^[A-Za-z0-9_-]{43}$", xg)), b == Vj && (a = $("^[A-Za-z0-9_-]{64}$", xg)), b == Wj && (a = $("^[A-Za-z0-9_-]{86}$", xg)));
  return Pa(void 0, C2, a, s2);
};
var ge = (T2, a, l2) => {
  l2 = ba(Ge, l2);
  Object.assign(l2, { check: af, format: T2 });
  typeof a == Ke && (l2.fn = a);
  X(a) && a != null && typeof a.test == Ke && (l2.pattern = a, l2.fn === void 0 && (l2.fn = function(c2) {
    return a.test(c2);
  }));
  return new Z(l2);
};
var he = (s2) => {
  var z2 = void 0;
  var a = void 0;
  X(s2) && s2 != null && (z2 = s2.input, a = s2.output);
  Array.isArray(z2) && (z2 = oc(z2, void 0, void 0));
  z2 === void 0 && (z2 = new Ja({ type: Bg }), s2 = ba(Ff, void 0), s2.element = z2, z2 = new xa(s2));
  a === void 0 && (a = new Ja({ type: Bg }));
  return new Ra({ type: Ke, input: z2, output: a });
};
var la = (k2, N2, a, s2) => {
  N2 = { format: N2, pattern: a };
  a = be(s2) + "";
  a.length > 0 && (N2.error = a);
  return fa(k2, ea(af, N2));
};
var Ae = () => {
  let b = Y.prototype, a = true;
  aa(b, "_def", { configurable: a, get: function() {
    let a2 = this._zod;
    return a2.def;
  } });
  b = Y.prototype;
  re(b, Bi, function(b2) {
    var a2;
    a2 = (0, function(f2, c2) {
      return Fa(b2, f2, c2, a2);
    });
    return a2;
  }, a);
  b = Y.prototype;
  re(b, Lk, function(a2) {
    return function(b2, d2) {
      return pb(a2, b2, d2);
    };
  }, a);
  b = Y.prototype;
  re(b, uk, function(b2) {
    var a2;
    let d2 = function(t2, s2) {
      return Na(b2, t2, s2, a2);
    }, c2 = globalThis.Function;
    c2 = new c2(Bk, qf);
    a2 = c2(d2);
    return a2;
  }, a);
  b = Y.prototype;
  re(b, gi, function(a2) {
    return function(b2, d2) {
      return Ob(a2, b2, d2);
    };
  }, a);
  b = Y.prototype;
  re(b, "spa", function(a2) {
    return a2.safeParseAsync;
  }, a);
  b = Y.prototype;
  re(b, Ri, function(b2) {
    var a2;
    a2 = (0, function() {
      var i2 = arguments[1];
      var c2;
      i2 = i2 == null ? {} : ia({}, i2);
      i2.direction = Ih;
      c2 = arguments[0];
      return Fa(b2, c2, i2, a2);
    });
    return a2;
  }, a);
  b = Y.prototype;
  re(b, Qi, function(b2) {
    var a2;
    a2 = (0, function() {
      var i2 = arguments[1];
      var c2;
      i2 = i2 == null ? {} : ia({}, i2);
      i2.direction = Di;
      c2 = arguments[0];
      return Fa(b2, c2, i2, a2);
    });
    return a2;
  }, a);
  b = Y.prototype;
  re(b, kk, function(b2) {
    var a2;
    let d2 = function(t2, k2) {
      var i2 = k2 == null ? {} : ia({}, k2);
      i2.direction = Ih;
      return Na(b2, t2, i2, a2);
    };
    let c2 = globalThis.Function;
    c2 = new c2(Bk, qf);
    a2 = c2(d2);
    return a2;
  }, a);
  b = Y.prototype;
  re(b, jk, function(b2) {
    var a2;
    let d2 = function(t2, k2) {
      var i2 = k2 == null ? {} : ia({}, k2);
      i2.direction = Di;
      return Na(b2, t2, i2, a2);
    };
    let c2 = globalThis.Function;
    c2 = new c2(Bk, qf);
    a2 = c2(d2);
    return a2;
  }, a);
  b = Y.prototype;
  re(b, lf, function(a2) {
    return function() {
      return Ga(23, a2, void 0);
    };
  }, a);
  b = Y.prototype;
  re(b, Yj, function(a2) {
    return function() {
      return new $a({ type: lf, innerType: a2, exact: true });
    };
  }, a);
  b = Y.prototype;
  re(b, hh, function(a2) {
    return function() {
      return Ga(24, a2, void 0);
    };
  }, a);
  b = Y.prototype;
  re(b, "nullish", function(a2) {
    return function() {
      return Ga(23, Ga(24, a2, void 0), void 0);
    };
  }, a);
  b = Y.prototype;
  re(b, Ff, function(a2) {
    return function() {
      let l2 = ba(Ff, void 0);
      l2.element = a2;
      return new xa(l2);
    };
  }, a);
  b = Y.prototype;
  re(b, "or", function(a2) {
    return function(j2) {
      let b2 = [];
      b2.push(a2);
      b2.push(j2);
      let i2 = ba(pg, void 0);
      i2.options = b2;
      return new La(i2);
    };
  }, a);
  b = Y.prototype;
  re(b, "and", function(a2) {
    return function(c2) {
      return new wb({ type: Hg, left: a2, right: c2 });
    };
  }, a);
  b = Y.prototype;
  re(b, lf, function(a2) {
    return function() {
      return Ga(23, a2, void 0);
    };
  }, a);
  b = Y.prototype;
  re(b, ah, function(a2) {
    return function(j2) {
      let b2 = { type: ah, innerType: a2 };
      aa(b2, Ah, { configurable: true, enumerable: true, get: function() {
        return typeof j2 == Ke ? j2() : j2;
      } });
      return new xb(b2);
    };
  }, a);
  b = Y.prototype;
  re(b, Gg, function(a2) {
    return function(j2) {
      let b2 = { type: Gg, innerType: a2 };
      aa(b2, Ah, { configurable: true, enumerable: true, get: function() {
        return typeof j2 == Ke ? j2() : j2;
      } });
      return new yb(b2);
    };
  }, a);
  b = Y.prototype;
  re(b, rh, function(a2) {
    return function(c2) {
      var b2 = typeof c2 != Ke ? (0, function() {
        return c2;
      }) : c2;
      return new zb({ type: rh, innerType: a2, catchValue: b2 });
    };
  }, a);
  b = Y.prototype;
  re(b, "removeDefault", function(a2) {
    return function() {
      return da(a2).def.innerType;
    };
  }, a);
  b = Y.prototype;
  re(b, "removeCatch", function(a2) {
    return function() {
      return da(a2).def.innerType;
    };
  }, a);
  b = Y.prototype;
  re(b, Pf, function(a2) {
    return function(d2) {
      return Ga(28, a2, d2);
    };
  }, a);
  b = Y.prototype;
  re(b, Ve, function(a2) {
    return function(w2) {
      let b2 = new hb({ type: Ve, transform: w2 });
      return new Da({ type: Og, in: a2, out: b2 });
    };
  }, a);
  b = Y.prototype;
  re(b, Og, function(a2) {
    return function(P2) {
      return new Da({ type: Og, in: a2, out: P2 });
    };
  }, a);
  b = Y.prototype;
  re(b, kh, function(a2) {
    return function() {
      return Ga(33, a2, void 0);
    };
  }, a);
  b = Y.prototype;
  re(b, "brand", function(a2) {
    return function() {
      return a2;
    };
  }, a);
  b = Y.prototype;
  re(b, "describe", function(a2) {
    return function(c2) {
      let m2 = va(a2, void 0), b2 = Ta().add;
      b2.call(Ta(), m2);
      b2 = Ta();
      let d2 = b2.add;
      b2.add(m2, { description: c2 });
      return m2;
    };
  }, a);
  b = Y.prototype;
  re(b, "meta", function(a2) {
    return function(e2) {
      var b2 = Ta();
      if (e2 === void 0) return b2.get(a2);
      var m2 = va(a2, void 0);
      var d2 = b2.add;
      b2.add(m2, e2);
      return m2;
    };
  }, a);
  b = Y.prototype;
  re(b, "refine", function(a2) {
    return function() {
      let b2 = arguments[0], l2 = arguments[1];
      l2 = ba(rf, l2);
      Object.assign(l2, { fn: b2, check: rf });
      return fa(a2, new Qa(l2));
    };
  }, a);
  b = Y.prototype;
  re(b, ok, function(a2) {
    return function(b2, c2) {
      return fa(a2, nb(function(e2) {
        var a3 = this;
        e2.addIssue = function(p2) {
          if (typeof p2 == Ge) {
            var b3 = e2.value;
            p2 = { message: p2, code: rf, input: b3, inst: a3, path: [] };
          } else {
            !p2.fatal || (p2.continue = false);
            p2.code === void 0 && (p2.code = rf);
            true === "input" in p2 || (p2.input = e2.value);
            p2.inst === void 0 && (p2.inst = a3);
            p2.continue === void 0 && (p2.continue = true);
          }
          var w2 = e2.issues;
          w2.push(p2);
        };
        let h2 = e2.value;
        return b2(h2, e2);
      }, c2));
    };
  }, a);
  b = Y.prototype;
  re(b, yf, function(a2) {
    return function(w2) {
      return fa(a2, ea(yf, { transform: w2 }));
    };
  }, a);
  b = Y.prototype;
  re(b, ff, function(a2) {
    return function() {
      var f2 = arguments.length | 0;
      var c2 = a2, g2 = 0, J2;
      while (g2 < f2) {
        J2 = arguments[g2];
        typeof J2 == Ke ? c2 = fa(c2, nb(J2, void 0)) : X(J2) && J2._zod !== void 0 && (c2 = fa(c2, J2));
        g2 = g2 + 1;
      }
      return c2;
    };
  }, a);
  b = Y.prototype;
  re(b, "with", function(a2) {
    return a2.check;
  }, a);
  b = Y.prototype;
  re(b, "clone", function(a2) {
    return function(d2) {
      return va(a2, d2);
    };
  }, a);
  b = Y.prototype;
  re(b, Ji, function(a2) {
    var d2 = Ta().get;
    d2 = d2.call(Ta(), a2);
    if (d2 == null) return;
    return d2.description;
  }, a);
  b = Y.prototype;
  re(b, "isOptional", function(a2) {
    return function() {
      return pb(a2, void 0, void 0).success;
    };
  }, a);
  b = Y.prototype;
  re(b, "isNullable", function(a2) {
    return function() {
      return pb(a2, null, void 0).success;
    };
  }, a);
  b = Y.prototype;
  re(b, "apply", function(a2) {
    return function(w2) {
      var b2 = [];
      b2.push(a2);
      var f2 = arguments.length | 0;
      var r2 = 1, c2;
      while (r2 < f2) {
        c2 = arguments[r2];
        b2.push(c2);
        r2 = r2 + 1;
      }
      return w2.apply(void 0, b2);
    };
  }, a);
  b = Y.prototype;
  re(b, "register", function(a2) {
    return function() {
      let b2 = arguments[0];
      b2 = b2.add;
      let d2 = arguments[0], c2 = arguments[1];
      b2.call(d2, a2, c2);
      return a2;
    };
  }, a);
  b = Y.prototype;
  re(b, "~standard", function(a2) {
    return { version: 1, vendor: "zod", validate: function(j2) {
      try {
        var v2 = pb(a2, j2, void 0);
        if (v2.success) return { value: v2.data };
        return { issues: v2.error.issues };
      } catch {
        return Ob(a2, j2, void 0).then(function(I2) {
          if (I2.success) return { value: I2.data };
          return { issues: I2.error.issues };
        });
      }
    }, jsonSchema: { input: function() {
      a2.constructor;
      if (X(a2._zod) && typeof a2.toJSONSchema == Ke) {
        var s2 = arguments[0];
        s2 = s2 == null ? {} : ia({}, s2);
        s2.io = Qe;
        return a2.toJSONSchema(s2);
      }
      return { type: da(a2).typeName };
    }, output: function() {
      var j2 = typeof a2.toJSONSchema;
      if (j2 == Ke) {
        var s2 = arguments[0];
        s2 = s2 == null ? {} : ia({}, s2);
        s2.io = zg;
        return a2.toJSONSchema(s2);
      }
      return { type: da(a2).typeName };
    } } };
  }, false);
  b = Y.prototype;
  re(b, Ig, function(a2) {
    return function() {
      return { type: da(a2).typeName };
    };
  }, a);
  b = Z.prototype;
  re(b, Me, function(a2) {
    var x2 = a2._zod;
    x2 = x2.bag;
    if (x2.format === void 0) return null;
    return x2.format;
  }, a);
  b = Z.prototype;
  re(b, Jk, function(a2) {
    var x2 = a2._zod;
    x2 = x2.bag;
    if (x2.minimum === void 0) return null;
    return x2.minimum;
  }, a);
  b = Z.prototype;
  re(b, Ik, function(a2) {
    var x2 = a2._zod;
    x2 = x2.bag;
    if (x2.maximum === void 0) return null;
    return x2.maximum;
  }, a);
};
var we = () => {
  let b = Z.prototype, a = true;
  re(b, Gh, function(a2) {
    return function(d2, e2) {
      let b2 = { minimum: d2 };
      return na(a2, vf, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Fh, function(a2) {
    return function(d2, e2) {
      let b2 = { maximum: d2 };
      return na(a2, Lf, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Be, function(a2) {
    return function(d2, e2) {
      let b2 = { length: d2 };
      return na(a2, Rf, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, nj, function(a2) {
    return function(e2) {
      return na(a2, vf, { minimum: 1 }, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Hf, function(a2) {
    return function(d2, e2) {
      var N2 = { includes: d2 };
      if (X(e2)) {
        var l2 = typeof e2.position;
        var b2 = l2 == Le;
      } else {
        b2 = false;
      }
      b2 && (N2.position = e2.position);
      return na(a2, Hf, N2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, wk, function(a2) {
    return function(d2, e2) {
      let b2 = { prefix: d2 };
      return na(a2, wg, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Qk, function(a2) {
    return function(d2, e2) {
      let b2 = { suffix: d2 };
      return na(a2, Sg, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, hj, function(a2) {
    return function(d2, e2) {
      let b2 = { format: hj, pattern: d2 };
      return na(a2, af, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Ai, function(a2) {
    return function(e2) {
      let b2 = rc;
      return la(a2, Ai, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, nh, function(a2) {
    return function(l2) {
      var N2 = { format: nh };
      X(l2) && l2.hostname !== void 0 && (N2.hostname = l2.hostname);
      X(l2) && l2.protocol !== void 0 && (N2.protocol = l2.protocol);
      X(l2) && l2.normalize !== void 0 && (N2.normalize = l2.normalize);
      return na(a2, af, N2, l2);
    };
  }, a);
  b = Z.prototype;
  re(b, Xh, function(a2) {
    return function(e2) {
      let b2 = cb;
      return la(a2, Xh, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, "uuidv4", function(a2) {
    return function(e2) {
      let b2 = cb;
      return la(a2, Xh, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, "uuidv6", function(a2) {
    return function(e2) {
      let b2 = cb;
      return la(a2, Xh, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, "uuidv7", function(a2) {
    return function(e2) {
      let b2 = cb;
      return la(a2, Xh, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Fj, function(a2) {
    return function(e2) {
      let b2 = sc;
      return la(a2, Fj, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Ej, function(a2) {
    return function(e2) {
      let b2 = wd;
      return la(a2, Ej, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, ej, function(a2) {
    return function(e2) {
      let b2 = xd;
      return la(a2, ej, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Lj, function(a2) {
    return function(e2) {
      let b2 = tc;
      return la(a2, Lj, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, mi, function(a2) {
    return function(e2) {
      let b2 = uc;
      return la(a2, mi, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Wg, function(a2) {
    return function(d2) {
      let b2 = globalThis.RegExp;
      b2 = new b2("^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$");
      return la(a2, Wg, b2, d2);
    };
  }, a);
  b = Z.prototype;
  re(b, Qg, function(a2) {
    return function(e2) {
      let b2 = Cd;
      return la(a2, Qg, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Gj, function(a2) {
    return function(e2) {
      let b2 = vc;
      return la(a2, Gj, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Vh, function(a2) {
    return function(e2) {
      let b2 = wc;
      return la(a2, Vh, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Rj, function(a2) {
    return function(e2) {
      let b2 = Dd;
      return la(a2, Rj, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Oh, function(a2) {
    return function(e2) {
      let b2 = Ed;
      return la(a2, Oh, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, ji, function(a2) {
    return function(i2) {
      var N2 = { format: ji };
      if (X(i2)) {
        var k2 = typeof i2.alg;
        var b2 = k2 == Ge;
      } else {
        b2 = false;
      }
      b2 && (N2.alg = i2.alg);
      return na(a2, af, N2, i2);
    };
  }, a);
  b = Z.prototype;
  re(b, fj, function(a2) {
    return function(e2) {
      let b2 = Bd;
      return la(a2, fj, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Ak, function(a2) {
    return function(e2) {
      let b2 = Ad;
      return la(a2, Ak, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, tj, function(a2) {
    return function(d2) {
      if (X(d2)) {
        var n2 = typeof d2.delimiter;
        var b2 = n2 == Ge;
      } else {
        b2 = false;
      }
      b2 = b2 ? d2.delimiter + "" : ":";
      b2 = $(Cj + b2 + Qh + b2 + rj, xg);
      return la(a2, tj, b2, d2);
    };
  }, a);
  b = Z.prototype;
  re(b, tk, function(a2) {
    return function(e2) {
      let b2 = yc;
      return la(a2, ch, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, "xid", function(a2) {
    return function(e2) {
      let b2 = yd;
      return la(a2, "xid", b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, ek, function(a2) {
    return function(e2) {
      let b2 = zd;
      return la(a2, ek, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, Jh, function(a2) {
    return function(b2) {
      let e2 = Wc(b2);
      return la(a2, Jh, e2, b2);
    };
  }, a);
  b = Z.prototype;
  re(b, og, function(a2) {
    return function(d2) {
      let b2 = $("^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$", xg);
      return la(a2, og, b2, d2);
    };
  }, a);
  b = Z.prototype;
  re(b, Vi, function(a2) {
    return function(b2) {
      let e2 = Vc(b2);
      return la(a2, Vi, e2, b2);
    };
  }, a);
  b = Z.prototype;
  re(b, ri, function(a2) {
    return function(e2) {
      let b2 = xc;
      return la(a2, ri, b2, e2);
    };
  }, a);
  b = Z.prototype;
  re(b, yi, function(a2) {
    return function() {
      return fa(a2, ea(yf, { transform: function(G2) {
        return G2.trim();
      } }));
    };
  }, a);
  b = Z.prototype;
  re(b, Nh, function(a2) {
    return function() {
      return fa(a2, ea(yf, { transform: function(G2) {
        return G2.toLowerCase();
      } }));
    };
  }, a);
  b = Z.prototype;
  re(b, pk, function(a2) {
    return function() {
      return fa(a2, ea(yf, { transform: function(G2) {
        return G2.toUpperCase();
      } }));
    };
  }, a);
  b = Z.prototype;
  re(b, sg, function(a2) {
    return function() {
      return fa(a2, ea(sg, {}));
    };
  }, a);
  b = Z.prototype;
  re(b, tg, function(a2) {
    return function() {
      return fa(a2, ea(tg, {}));
    };
  }, a);
  b = Z.prototype;
  re(b, Tg, function(a2) {
    return function(e2) {
      var b2 = "NFC";
      var m2 = typeof e2;
      m2 == Ge && (b2 = e2);
      return fa(a2, ea(yf, { transform: function(G2) {
        return G2.normalize(b2);
      } }));
    };
  }, a);
  b = Z.prototype;
  re(b, "slugify", function(a2) {
    return function() {
      return fa(a2, ea(yf, { transform: function(G2) {
        let e2 = G2.toLowerCase().trim(), f2 = e2.replace($(rk, cj), xg), g2 = f2.replace($(Ok, cj), "-");
        return g2.replace($("^-+|-+$", cj), xg);
      } }));
    };
  }, a);
};
var ye = () => {
  let b = ha.prototype, a = true;
  re(b, Gh, function(a2) {
    return function() {
      let b2 = arguments[0];
      b2 = { value: b2, inclusive: true, origin: Le };
      return na(a2, df, b2, arguments[1]);
    };
  }, a);
  b = ha.prototype;
  re(b, Fh, function(a2) {
    return function() {
      let b2 = arguments[0];
      b2 = { value: b2, inclusive: true, origin: Le };
      return na(a2, uf, b2, arguments[1]);
    };
  }, a);
  b = ha.prototype;
  re(b, "gt", function(a2) {
    return function() {
      let b2 = arguments[0];
      b2 = { value: b2, inclusive: false, origin: Le };
      return na(a2, df, b2, arguments[1]);
    };
  }, a);
  b = ha.prototype;
  re(b, "gte", function(a2) {
    return a2.min;
  }, a);
  b = ha.prototype;
  re(b, "lt", function(a2) {
    return function() {
      let b2 = arguments[0];
      b2 = { value: b2, inclusive: false, origin: Le };
      return na(a2, uf, b2, arguments[1]);
    };
  }, a);
  b = ha.prototype;
  re(b, "lte", function(a2) {
    return a2.max;
  }, a);
  b = ha.prototype;
  re(b, mh, function(a2) {
    return function() {
      return fa(a2, ea(nf, { format: mh }));
    };
  }, a);
  b = ha.prototype;
  re(b, Uk, function(a2) {
    return function() {
      return fa(a2, ea(df, { value: 0, inclusive: false, origin: Le }));
    };
  }, a);
  b = ha.prototype;
  re(b, Tk, function(a2) {
    return function() {
      return fa(a2, ea(uf, { value: 0, inclusive: false, origin: Le }));
    };
  }, a);
  b = ha.prototype;
  re(b, mk, function(a2) {
    return function() {
      return fa(a2, ea(df, { value: 0, inclusive: true, origin: Le }));
    };
  }, a);
  b = ha.prototype;
  re(b, nk, function(a2) {
    return function() {
      return fa(a2, ea(uf, { value: 0, inclusive: true, origin: Le }));
    };
  }, a);
  b = ha.prototype;
  re(b, Dg, function(a2) {
    return function(d2, e2) {
      let b2 = { value: d2 };
      return na(a2, dh, b2, e2);
    };
  }, a);
  b = ha.prototype;
  re(b, "step", function(a2) {
    return a2.multipleOf;
  }, a);
  b = ha.prototype;
  re(b, "finite", function(a2) {
    return function() {
      return a2;
    };
  }, a);
  b = ha.prototype;
  re(b, "safe", function(a2) {
    return function() {
      return fa(a2, ea(nf, { format: Hi }));
    };
  }, a);
  b = ha.prototype;
  re(b, Me, function(a2) {
    var x2 = a2._zod;
    x2 = x2.bag;
    if (x2.format === void 0) return null;
    return x2.format;
  }, a);
  b = ha.prototype;
  re(b, vi, function(a2) {
    var d2 = a2._zod;
    var x2 = d2.bag;
    var b2 = globalThis.Math;
    d2 = Number.NEGATIVE_INFINITY;
    a2 = x2.minimum;
    a2 === void 0 && (a2 = d2);
    x2 = x2.exclusiveMinimum;
    x2 === void 0 || (d2 = x2);
    return b2.max(a2, d2);
  }, a);
  b = ha.prototype;
  re(b, ti, function(a2) {
    var d2 = a2._zod;
    var x2 = d2.bag;
    var b2 = globalThis.Math;
    d2 = Number.POSITIVE_INFINITY;
    a2 = x2.maximum;
    a2 === void 0 && (a2 = d2);
    x2 = x2.exclusiveMaximum;
    x2 === void 0 || (d2 = x2);
    return b2.min(a2, d2);
  }, a);
  b = ha.prototype;
  re(b, "isInt", function(x2) {
    var d2 = x2._zod;
    x2 = d2.bag;
    var e2 = typeof x2.format;
    d2 = e2 == Ge ? x2.format + "" : xg;
    d2 = d2.includes(mh);
    d2 || (x2 = x2.multipleOf, x2 === void 0 && (x2 = 0.5), true === Number.isSafeInteger(x2) && (d2 = true));
    return d2;
  }, a);
  b = ha.prototype;
  re(b, Sk, function(a2) {
    return true;
  }, a);
};
var te = () => {
  let b = qa.prototype, a = true;
  re(b, Gh, function(a2) {
    return function(b2) {
      return fa(a2, ea(df, { value: b2, inclusive: true, origin: hf }));
    };
  }, a);
  b = qa.prototype;
  re(b, Fh, function(a2) {
    return function(b2) {
      return fa(a2, ea(uf, { value: b2, inclusive: true, origin: hf }));
    };
  }, a);
  b = qa.prototype;
  re(b, "gt", function(a2) {
    return function(b2) {
      return fa(a2, ea(df, { value: b2, inclusive: false, origin: hf }));
    };
  }, a);
  b = qa.prototype;
  re(b, "gte", function(a2) {
    return a2.min;
  }, a);
  b = qa.prototype;
  re(b, "lt", function(a2) {
    return function(b2) {
      return fa(a2, ea(uf, { value: b2, inclusive: false, origin: hf }));
    };
  }, a);
  b = qa.prototype;
  re(b, "lte", function(a2) {
    return a2.max;
  }, a);
  b = qa.prototype;
  re(b, Uk, function(a2) {
    return function() {
      return fa(a2, ea(df, { value: BigInt(0), inclusive: false, origin: hf }));
    };
  }, a);
  b = qa.prototype;
  re(b, Tk, function(a2) {
    return function() {
      return fa(a2, ea(uf, { value: BigInt(0), inclusive: false, origin: hf }));
    };
  }, a);
  b = qa.prototype;
  re(b, mk, function(a2) {
    return function() {
      return fa(a2, ea(df, { value: BigInt(0), inclusive: true, origin: hf }));
    };
  }, a);
  b = qa.prototype;
  re(b, nk, function(a2) {
    return function() {
      return fa(a2, ea(uf, { value: BigInt(0), inclusive: true, origin: hf }));
    };
  }, a);
  b = qa.prototype;
  re(b, Dg, function(a2) {
    return function(d2, e2) {
      let b2 = { value: d2 };
      return na(a2, dh, b2, e2);
    };
  }, a);
  b = qa.prototype;
  re(b, Me, function(a2) {
    var x2 = a2._zod;
    x2 = x2.bag;
    if (x2.format === void 0) return null;
    return x2.format;
  }, a);
  b = qa.prototype;
  re(b, vi, function(a2) {
    var x2 = a2._zod;
    x2 = x2.bag;
    if (x2.minimum === void 0) return null;
    return x2.minimum;
  }, a);
  b = qa.prototype;
  re(b, ti, function(a2) {
    var x2 = a2._zod;
    x2 = x2.bag;
    if (x2.maximum === void 0) return null;
    return x2.maximum;
  }, a);
};
var ze = () => {
  let a = za.prototype;
  re(a, Gh, function(a2) {
    return function(b) {
      return fa(a2, ea(df, { value: b, inclusive: true, origin: og }));
    };
  }, true);
  a = za.prototype;
  re(a, Fh, function(a2) {
    return function(b) {
      return fa(a2, ea(uf, { value: b, inclusive: true, origin: og }));
    };
  }, true);
  a = za.prototype;
  re(a, vi, function(a2) {
    var d2 = a2._zod;
    var x2 = d2.bag;
    var b = globalThis.Math;
    d2 = Number.NEGATIVE_INFINITY;
    a2 = x2.minimum;
    a2 === void 0 && (a2 = d2);
    x2 = x2.exclusiveMinimum;
    x2 === void 0 || (d2 = x2);
    return b.max(a2, d2);
  }, true);
  a = za.prototype;
  re(a, ti, function(a2) {
    var d2 = a2._zod;
    var x2 = d2.bag;
    var b = globalThis.Math;
    d2 = Number.POSITIVE_INFINITY;
    a2 = x2.maximum;
    a2 === void 0 && (a2 = d2);
    x2 = x2.exclusiveMaximum;
    x2 === void 0 || (d2 = x2);
    return b.min(a2, d2);
  }, true);
  a = za.prototype;
  re(a, "minDate", function(a2) {
    var d2 = a2.minValue;
    if (d2 == null || !Ma(d2)) return null;
    return new Date(d2);
  }, true);
  a = za.prototype;
  re(a, "maxDate", function(a2) {
    var d2 = a2.maxValue;
    if (d2 == null || !Ma(d2)) return null;
    return new Date(d2);
  }, true);
};
var ue = (O2) => {
  re(O2, Gh, function(a) {
    return function(d2, e2) {
      let b = { minimum: d2 };
      return na(a, Fg, b, e2);
    };
  }, true);
  re(O2, Fh, function(a) {
    return function(d2, e2) {
      let b = { maximum: d2 };
      return na(a, gh, b, e2);
    };
  }, true);
  re(O2, Pg, function(a) {
    return function(d2) {
      return fa(a, ea(vg, { size: d2 }));
    };
  }, true);
  re(O2, nj, function(a) {
    return function() {
      return fa(a, ea(Fg, { minimum: 1 }));
    };
  }, true);
};
var ve = () => {
  let b = oa.prototype, a = true;
  aa(b, sf, { configurable: a, enumerable: false, get: function() {
    let a2 = this._zod;
    a2 = a2.def;
    return a2.shape;
  } });
  b = oa.prototype;
  re(b, "strict", function(a2) {
    return function() {
      return va(a2, { catchall: new db({ type: _h }) });
    };
  }, a);
  b = oa.prototype;
  re(b, Ki, function(a2) {
    return function() {
      return va(a2, { catchall: new Ja({ type: Bg }) });
    };
  }, a);
  b = oa.prototype;
  re(b, "strip", function(a2) {
    return function() {
      let b2 = ia({}, da(a2).def);
      b2.catchall = void 0;
      return new oa(b2);
    };
  }, a);
  b = oa.prototype;
  re(b, fk, function(a2) {
    return a2.passthrough;
  }, a);
  b = oa.prototype;
  re(b, kg, function(a2) {
    return function(c2) {
      return va(a2, { catchall: c2 });
    };
  }, a);
  b = oa.prototype;
  re(b, "extend", function(a2) {
    return function(b2) {
      if (Va(a2)) {
        var c2 = qb(a2);
        var u2 = ra(b2);
        var f2 = u2.length | 0;
        var g2 = 0, d2;
        while (g2 < f2) {
          d2 = u2[g2];
          if (ga.getOwnPropertyDescriptor(c2, d2) !== void 0) throw pa("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
          g2 = g2 + 1;
        }
      }
      return va(a2, lc(a2, b2));
    };
  }, a);
  b = oa.prototype;
  re(b, "safeExtend", function(a2) {
    return function(c2) {
      return va(a2, lc(a2, c2));
    };
  }, a);
  b = oa.prototype;
  re(b, "merge", function(a2) {
    return function(c2) {
      if (Va(a2)) throw pa(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
      var b2 = lc(a2, da(c2).def.shape);
      aa(b2, kg, { configurable: true, enumerable: true, get: function() {
        return da(c2).def.catchall;
      } });
      var d2 = da(c2).def.checks;
      Array.isArray(d2) ? b2.checks = d2 : b2.checks = [];
      return va(a2, b2);
    };
  }, a);
  b = oa.prototype;
  re(b, "pick", function(a2) {
    return function(b2) {
      if (Va(a2)) throw pa(".pick() cannot be used on object schemas containing refinements");
      var M2 = qb(a2);
      kc(M2, b2);
      var L2 = {};
      var d2 = Reflect.ownKeys(b2);
      var f2 = d2.length | 0;
      var g2 = 0, n2;
      while (g2 < f2) {
        n2 = d2[g2];
        typeof n2 == Ge && !!b2[n2] && Aa(L2, n2, M2[n2]);
        g2 = g2 + 1;
      }
      n2 = { checks: [] };
      aa(n2, sf, { configurable: true, enumerable: true, get: function() {
        aa(this, sf, { value: L2, writable: true, enumerable: true, configurable: true });
        return L2;
      } });
      return va(a2, n2);
    };
  }, a);
  b = oa.prototype;
  re(b, "omit", function(a2) {
    return function(b2) {
      if (Va(a2)) throw pa(".omit() cannot be used on object schemas containing refinements");
      var g2 = qb(a2);
      kc(g2, b2);
      var L2 = {};
      lb(L2, g2);
      var c2 = Reflect.ownKeys(b2);
      var f2 = c2.length | 0;
      g2 = 0;
      while (g2 < f2) {
        var v2 = typeof c2[g2];
        var d2;
        v2 == Ge && !!b2[c2[g2]] && (d2 = c2[g2], Reflect.deleteProperty(L2, d2));
        g2 = g2 + 1;
      }
      g2 = { checks: [] };
      aa(g2, sf, { configurable: true, enumerable: true, get: function() {
        aa(this, sf, { value: L2, writable: true, enumerable: true, configurable: true });
        return L2;
      } });
      return va(a2, g2);
    };
  }, a);
  b = oa.prototype;
  re(b, Bj, function(a2) {
    return function(b2) {
      if (Va(a2)) throw pa(eg);
      return mc(a2, b2, true, false);
    };
  }, a);
  b = oa.prototype;
  re(b, "exactPartial", function(a2) {
    return function(b2) {
      if (Va(a2)) throw pa($f);
      return mc(a2, b2, true, true);
    };
  }, a);
  b = oa.prototype;
  re(b, "required", function(a2) {
    return function(b2) {
      return mc(a2, b2, false, false);
    };
  }, a);
  b = oa.prototype;
  re(b, dk, function(a2) {
    return function() {
      let d2 = ra(qb(a2));
      return Xc(d2, void 0);
    };
  }, a);
};
var pe = () => {
  let c2 = _a.prototype, a = "unwrap", b = true;
  re(c2, a, function(a2) {
    return function() {
      return da(a2).def.innerType;
    };
  }, b);
  c2 = $b.prototype;
  re(c2, a, function(a2) {
    return function() {
      return da(a2).def.innerType;
    };
  }, b);
  c2 = $a.prototype;
  re(c2, a, function(a2) {
    return function() {
      return da(a2).def.innerType;
    };
  }, b);
  c2 = ac.prototype;
  re(c2, a, function(a2) {
    return function() {
      return da(a2).def.innerType;
    };
  }, b);
  c2 = xa.prototype;
  re(c2, a, function(a2) {
    return function() {
      return da(a2).def.element;
    };
  }, b);
  c2 = xb.prototype;
  re(c2, a, function(a2) {
    return function() {
      return da(a2).def.innerType;
    };
  }, b);
  c2 = zb.prototype;
  re(c2, a, function(a2) {
    return function() {
      return da(a2).def.innerType;
    };
  }, b);
  c2 = yb.prototype;
  re(c2, a, function(a2) {
    return function() {
      return da(a2).def.innerType;
    };
  }, b);
  c2 = gb.prototype;
  re(c2, a, function(a2) {
    return function() {
      let b2 = da(a2).def.getter;
      return b2();
    };
  }, b);
  c2 = Ab.prototype;
  re(c2, a, function(a2) {
    return function() {
      return da(a2).def.innerType;
    };
  }, b);
};
var ie = () => {
  mb();
  qe();
  Ae();
  we();
  ye();
  te();
  ze();
  ue(eb.prototype);
  ue(fb.prototype);
  ue(jb.prototype);
  var a = jb.prototype;
  re(a, Ij, function(a2) {
    return function() {
      var b = arguments[0];
      if (!Array.isArray(b)) {
        var d2 = [];
        d2.push(b);
        b = d2;
      }
      b = { mime: b };
      return na(a2, di, b, arguments[1]);
    };
  }, true);
  a = xa.prototype;
  re(a, Gh, function(a2) {
    return function(d2, e2) {
      let b = { minimum: d2 };
      return na(a2, vf, b, e2);
    };
  }, true);
  a = xa.prototype;
  re(a, Fh, function(a2) {
    return function(d2, e2) {
      let b = { maximum: d2 };
      return na(a2, Lf, b, e2);
    };
  }, true);
  a = xa.prototype;
  re(a, Be, function(a2) {
    return function(d2, e2) {
      let b = { length: d2 };
      return na(a2, Rf, b, e2);
    };
  }, true);
  a = xa.prototype;
  re(a, nj, function(a2) {
    return function(e2) {
      return na(a2, vf, { minimum: 1 }, e2);
    };
  }, true);
  ve();
  a = Ka.prototype;
  re(a, "extract", function(a2) {
    return function(u2, s2) {
      var M2 = da(a2);
      var c2 = M2.def.entries;
      var p2 = {};
      var f2 = u2.length | 0;
      var N2 = 0, b;
      while (N2 < f2) {
        b = u2[N2];
        if (!Ca.call(c2, b)) {
          N2 = u2[N2];
          N2 = "Key " + N2;
          throw pa(N2 + _i);
        }
        b = u2[N2];
        Aa(p2, b, c2[u2[N2]]);
        N2 = N2 + 1;
      }
      N2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(M2.def));
      ia(N2, Oa(s2));
      Object.assign(N2, { entries: p2, checks: [] });
      return new Ka(N2);
    };
  }, true);
  a = Ka.prototype;
  re(a, "exclude", function(a2) {
    return function(u2, s2) {
      var M2 = da(a2);
      var R2 = M2.def.entries;
      var c2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(R2));
      var f2 = u2.length | 0;
      R2 = 0;
      while (R2 < f2) {
        var b = M2.def.entries;
        var d2 = u2[R2];
        if (!Ca.call(b, d2)) {
          R2 = u2[R2];
          R2 = "Key " + R2;
          throw pa(R2 + _i);
        }
        b = u2[R2];
        Reflect.deleteProperty(c2, b);
        R2 = R2 + 1;
      }
      R2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(M2.def));
      ia(R2, Oa(s2));
      Object.assign(R2, { entries: c2, checks: [] });
      return new Ka(R2);
    };
  }, true);
  pe();
  a = Ra.prototype;
  re(a, "implement", function(a2) {
    return function(w2) {
      if (typeof w2 != Ke) throw pa("implement() must be called with a function");
      var l2 = da(a2);
      var b = l2.def.input;
      l2 = l2.def.output;
      return hc(w2, b, l2, false);
    };
  }, true);
  a = Ra.prototype;
  re(a, "implementAsync", function(a2) {
    return function(w2) {
      if (typeof w2 != Ke) throw pa("implementAsync() must be called with a function");
      var l2 = da(a2);
      var b = l2.def.input;
      l2 = l2.def.output;
      return hc(w2, b, l2, true);
    };
  }, true);
  a = Ra.prototype;
  re(a, Qe, function(a2) {
    return function() {
      var p2 = arguments[0];
      if (Array.isArray(p2)) {
        var c2 = arguments[1];
        p2 = oc(p2, c2, void 0);
      }
      return va(a2, { input: p2 });
    };
  }, true);
  a = Ra.prototype;
  re(a, zg, function(a2) {
    return function(q2) {
      return va(a2, { output: q2 });
    };
  }, true);
  xe(xa, jj);
  xe(ub, Yi);
  xe(eb, Nj);
  xe(fb, Oj);
  xe(La, lj);
  xe(_b, qh);
  xe(vb, Pj);
  xe(Da, vj);
  xe(ib, kj);
  xe(Bb, pi);
  xe(Ka, uj);
  xe(tb, Li);
};
var Zc = (p2) => {
  var a = Lb();
  p2 !== void 0 && p2 != null && (ia(a, p2), true === "localeError" in p2 && (Xa = p2.localeError), true === "customError" in p2 && (rb = p2.customError));
  return a;
};
var _c = (h2, t2, i2) => Fa(h2, t2, i2, _c);
var $c = (h2, t2, i2) => Na(h2, t2, i2, $c);
var Qb = (p2, a) => {
  p2 = p2 == null ? {} : ia({}, p2);
  p2.direction = a;
  return p2;
};
var ad = (h2, t2, i2) => Fa(h2, t2, Qb(i2, Ih), ad);
var bd = (h2, t2, i2) => Fa(h2, t2, Qb(i2, Di), bd);
var cd = (h2, t2, i2) => Na(h2, t2, Qb(i2, Ih), cd);
var dd = (h2, t2, i2) => Na(h2, t2, Qb(i2, Di), dd);
var je = (L2) => {
  var q2 = [];
  if (!X(L2) || L2 == null) return q2;
  var u2 = ra(L2);
  var f2 = u2.length | 0;
  var g2 = 0, a;
  while (g2 < f2) {
    a = u2[g2];
    q2.push(ea(jh, { property: a, schema: L2[u2[g2]] }));
    g2 = g2 + 1;
  }
  return q2;
};
var ed = (h2) => h2;
var W = (n2, j2) => {
  kb[n2] = j2;
};
var ga = Object;
var c = ga.prototype;
var Ca = c.hasOwnProperty;
c = ga.prototype;
var fd = c.isPrototypeOf;
c = Array.prototype;
c.slice;
var gd = ga.is;
var hd = wa(Ef, "return function(payload){if(typeof payload.value==='string')return payload;payload.issues.push({expected:'string',code:'invalid_type',input:payload.value,inst:inst});return payload;}");
var id = wa(Ef, "return function(payload){var v=payload.value;if(typeof v==='number'&&Number.isFinite(v))return payload;var iss={expected:'number',code:'invalid_type',input:v,inst:inst};if(typeof v==='number'){if(Number.isNaN(v))iss.received='NaN';else if(!Number.isFinite(v))iss.received=String(v);}payload.issues.push(iss);return payload;}");
var jd = wa(Ef, "return function(payload){if(typeof payload.value==='boolean')return payload;payload.issues.push({expected:'boolean',code:'invalid_type',input:payload.value,inst:inst});return payload;}");
var kd = wa("parse,checks,fallback,self,owner", "return function(payload,ctx){if(ctx){if(ctx.direction==='backward')return fallback.call(self,payload,ctx);if(ctx.skipChecks)return parse.call(self,payload,ctx);}var result=parse.call(self,payload,ctx);if(result instanceof Promise)return result.then(function(next){return applyChecks(next,ctx);});return applyChecks(result,ctx);function applyChecks(payload,ctx){for(var i=0;i<checks.length;i++){var ch=checks[i];var intern=ch&&ch._zod;var cdef=intern&&intern.def;if(cdef&&typeof cdef.when==='function'&&!cdef.when(payload))continue;var fn=intern&&intern.check;if(typeof fn!=='function')return fallback.call(self,payload,ctx);fn.call(ch,payload);}var iss=payload.issues;for(var j=0;j<iss.length;j++){if(iss[j].schema===void 0)iss[j].schema=owner;}return payload;}}");
var ld = wa("fallback,inst", "return function(payload,ctx){var input=payload.value;if(!Array.isArray(input)){payload.issues.push({expected:'array',code:'invalid_type',input:input,inst:inst});return payload;}var el=this.def.element;if(!el||!el._zod||typeof el._zod.run!=='function')return fallback.call(this,payload,ctx);var out=new Array(input.length);var issues=payload.issues;var proms=[];for(var i=0;i<input.length;i++){var r=el._zod.run({value:input[i],issues:[]},ctx);if(r instanceof Promise){if(ctx&&ctx.async===false)throw new Error('Encountered Promise during synchronous parse. Use .parseAsync() instead.');proms.push(r.then((function(idx){return function(next){put(next,idx);};})(i)));}else put(r,i);}payload.value=out;if(proms.length)return Promise.all(proms).then(function(){return payload;});return payload;function put(r,i){var iss=r.issues;if(iss&&iss.length){for(var j=0;j<iss.length;j++){var it=iss[j];it.path=it.path?[i].concat(it.path):[i];issues.push(it);}}out[i]=r.value;}}");
var md = wa(sf, `var keys=Object.keys(shape);var parts=['var input=payload.value,nr={},r,iss,j,it,present;'];for(var i=0;i<keys.length;i++){var key=keys[i];if(key==='__proto__')continue;var k=JSON.stringify(key);var z=shape[key]&&shape[key]._zod;var optIn=z&&(z.optin==='optional'||z.optin==='defaulted');var optOut=z&&z.optout==='optional';parts.push('r=shape['+k+']._zod.run({value:input['+k+'],issues:[]},ctx);');parts.push('if(r instanceof Promise)throw new Error("Encountered Promise during synchronous parse. Use .parseAsync() instead.");');parts.push('present='+k+' in input;');if(optIn&&optOut){parts.push('if(r.issues.length){if(present){iss=r.issues;for(j=0;j<iss.length;j++){it=iss[j];it.path=it.path?['+k+'].concat(it.path):['+k+'];payload.issues.push(it);}}}');parts.push('if(!(r.issues.length&&!present)){if(r.value===void 0){if(present)nr['+k+']=void 0;}else nr['+k+']=r.value;}');}else if(!optIn){parts.push('if(r.issues.length){iss=r.issues;for(j=0;j<iss.length;j++){it=iss[j];it.path=it.path?['+k+'].concat(it.path):['+k+'];payload.issues.push(it);}}');parts.push('if(!present&&!r.issues.length)payload.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:['+k+']});');parts.push('if(present){if(r.value===void 0)nr['+k+']=void 0;else nr['+k+']=r.value;}');}else{parts.push('if(r.issues.length){iss=r.issues;for(j=0;j<iss.length;j++){it=iss[j];it.path=it.path?['+k+'].concat(it.path):['+k+'];payload.issues.push(it);}}');parts.push('if(r.value===void 0){if(present)nr['+k+']=void 0;}else nr['+k+']=r.value;');}}parts.push('payload.value=nr;return payload;');return new Function('shape','payload','ctx','fallback',parts.join(''));`);
var nd = wa("fallback,compileFastpass,inst", "return function(payload,ctx){var input=payload.value;if(input===null||typeof input!=='object'||Array.isArray(input)){payload.issues.push({expected:'object',code:'invalid_type',input:input,inst:inst});return payload;}var def=this.def;if(def.catchall!=null)return fallback.call(this,payload,ctx);if(ctx&&(ctx.async===true||ctx.jitless===true||ctx.direction==='backward'))return fallback.call(this,payload,ctx);if(globalThis.__zod_globalConfig&&globalThis.__zod_globalConfig.jitless)return fallback.call(this,payload,ctx);var shape=def.shape;if(!shape)shape={};var fp=this['~fp'];if(!fp){try{fp=compileFastpass(shape);this['~fp']=fp;}catch(e){return fallback.call(this,payload,ctx);}}return fp(shape,payload,ctx,fallback);}");
c = "def,inst";
var od = wa(c, "return function(payload){var input=payload.value;var fmt=def.format;if(fmt==='int'||fmt==='int32'||fmt==='safeint'){if(typeof input!=='number'||!Number.isInteger(input)){payload.issues.push({expected:'int',code:'invalid_type',input:input,inst:inst,continue:false});return;}}if(fmt==='safeint'&&!Number.isSafeInteger(input)){if(input>0)payload.issues.push({code:'too_big',maximum:9007199254740991,inclusive:true,origin:'number',input:input,continue:!def.abort});else payload.issues.push({code:'too_small',minimum:-9007199254740991,inclusive:true,origin:'number',input:input,continue:!def.abort});}};");
var pd = wa(c, "return function(payload){var p=def.pattern;if(!p)return;p.lastIndex=0;if(p.test(payload.value))return;var extra={origin:'string',code:'invalid_format',format:def.format,input:payload.value,inst:inst,continue:!def.abort};extra.pattern=p.toString();payload.issues.push(extra);};");
var qd = wa(c, "return function(payload){var v=payload.value;if(v==null||v.length==null)return;var n=typeof v==='string'?Array.from(v).length:v.length;if(n<def.minimum)payload.issues.push({origin:Array.isArray(v)?'array':'string',code:'too_small',minimum:def.minimum,inclusive:true,input:v,inst:inst,continue:true});};");
var rd = wa(c, "return function(payload){var v=payload.value;if(v==null||v.length==null)return;var n=typeof v==='string'?Array.from(v).length:v.length;if(n>def.maximum)payload.issues.push({origin:Array.isArray(v)?'array':'string',code:'too_big',maximum:def.maximum,inclusive:true,input:v,inst:inst,continue:true});};");
var sd = wa(c, "return function(payload){var v=payload.value;var bound=def.value;var inclusive=def.inclusive!==false;var ok=inclusive?v>=bound:v>bound;if(ok)return;var origin=def.origin;if(!origin)origin=typeof v==='number'?'number':'date';payload.issues.push({origin:origin,code:'too_small',minimum:bound,inclusive:inclusive,input:v,inst:inst,continue:true});};");
var td = wa(c, "return function(payload){var v=payload.value;var bound=def.value;var inclusive=def.inclusive!==false;var ok=inclusive?v<=bound:v<bound;if(ok)return;var origin=def.origin;if(!origin)origin=typeof v==='number'?'number':'date';payload.issues.push({origin:origin,code:'too_big',maximum:bound,inclusive:inclusive,input:v,inst:inst,continue:true});};");
var Ha = [];
var Rb = 0;
var Sb = void 0;
var Wa = false;
var ud = { configurable: true, get: function() {
  Wa = true;
} };
var pc = /* @__PURE__ */ new WeakMap();
var Tb = /* @__PURE__ */ new WeakMap();
var Xa = void 0;
var rb = void 0;
var Ya = void 0;
var vd = { major: 4, minor: 4, patch: 3 };
var ta = (0, function(g2) {
  if (this === void 0 || this == null || !X(this)) {
    var a = ta.prototype;
    a = ga.create(a);
  } else {
    a = this;
  }
  ec(a, g2);
  a.stack === void 0 && Cb(a, ta);
  return a;
});
var Ia = (0, function(d2) {
  let a = Ia.prototype;
  a = ga.create(a);
  ec(a, d2);
  Cb(a, Ia);
  return a;
});
var qc = (0, function(b) {
  let a = Error;
  a = new a("Encountered unidirectional transform during encode: " + b);
  a.name = "ZodEncodeError";
  return a;
});
var rc = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var cb = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
var sc = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var wd = /^[cC][0-9a-z]{6,}$/;
var xd = /^[0-9a-z]+$/;
var tc = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var uc = /^[a-zA-Z0-9_-]{21}$/;
var vc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var wc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
c = /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$/;
var xc = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var yd = /^[0-9a-vA-V]{20}$/;
var zd = /^[A-Za-z0-9]{27}$/;
var Ad = /^\+[1-9]\d{6,14}$/;
var R = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
var Bd = new RegExp("^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", "u");
var Cd = /^[A-Za-z0-9_-]*$/;
var Dd = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var Ed = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var yc = /^\d(?:[ -]?\d){11,18}$/;
var Fd = /^[0-9a-fA-F]*$/;
var Gd = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
var Hd = /^https?$/;
var Id = /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
var Jd = /^[0-9a-fA-F]{32}$/;
var Kd = /^[0-9a-fA-F]{40}$/;
var zc = /^[0-9a-fA-F]{64}$/;
var Ld = /^[0-9a-fA-F]{96}$/;
var Md = /^[0-9a-fA-F]{128}$/;
var Y = _(wj, void 0);
var e = "ZodString";
var Z = _(e, Y);
var f = "ZodNumber";
var ha = _(f, Y);
var g = "ZodBoolean";
var Za = _(g, Y);
var h = "ZodBigInt";
var qa = _(h, Y);
var i = "ZodSymbol";
var Ub = _(i, Y);
var za = _("ZodDate", Y);
var Vb = _("ZodNaN", Y);
var j = "ZodUndefined";
var Wb = _(j, Y);
var sb = _("ZodNull", Y);
var Xb = _("ZodAny", Y);
var k = "ZodUnknown";
var Ja = _(k, Y);
var l = "ZodNever";
var db = _(l, Y);
var Yb = _("ZodVoid", Y);
var tb = _(Li, Y);
var Ka = _(uj, Y);
var m = "ZodObject";
var oa = _(m, Y);
var xa = _(jj, Y);
var n = "ZodTuple";
var Zb = _(n, Y);
var ub = _(Yi, Y);
var eb = _(Nj, Y);
var fb = _(Oj, Y);
var La = _(lj, Y);
var _b = _(qh, La);
var vb = _(Pj, La);
var o = "ZodIntersection";
var wb = _(o, Y);
var p = "ZodOptional";
var _a = _(p, Y);
var q = "ZodExactOptional";
var $a = _(q, _a);
var r = "ZodNullable";
var $b = _(r, Y);
var s = "ZodDefault";
var xb = _(s, Y);
var t = "ZodPrefault";
var yb = _(t, Y);
var u = "ZodCatch";
var zb = _(u, Y);
var v = "ZodNonOptional";
var ac = _(v, Y);
var gb = _("ZodLazy", Y);
var w = "ZodPromise";
var Ab = _(w, Y);
var hb = _(_j, Y);
var Da = _(vj, Y);
var ib = _(kj, Da);
var Bb = _(pi, Da);
var x = "ZodReadonly";
var Ac = _(x, Y);
var y = "ZodCustom";
var Qa = _(y, Y);
var jb = _("ZodFile", Y);
var z = "ZodSuccess";
var bc = _(z, Y);
var A = "ZodFunction";
var Ra = _(A, Y);
var B = "ZodTemplateLiteral";
var cc = _(B, Y);
var C = "ZodISODateTime";
var Bc = _(C, Z);
var D = "ZodISODate";
var E = _(D, Z);
var F = "ZodISOTime";
var Cc = _(F, Z);
var G = "ZodISODuration";
var H = _(G, Z);
var S = _("ZodEmail", Z);
var T = _("ZodGUID", Z);
var U = _("ZodUUID", Z);
var Dc = _("ZodURL", Z);
_("ZodCUID", Z);
_("ZodCUID2", Z);
_("ZodULID", Z);
_("ZodNanoID", Z);
_("ZodBase64", Z);
_("ZodIPv4", Z);
_("ZodIPv6", Z);
var V = _("ZodJWT", Z);
_("ZodEmoji", Z);
var I = (a, b) => {
  let I2 = { errors: [] };
  a = a.issues;
  fc(a, [], I2, b);
  return I2;
};
var J = (F2) => {
  F2 = F2.issues;
  var b = F2.slice(0);
  b.sort(function(a2, c3) {
    if (Array.isArray(a2.path)) {
      var b2 = a2.path;
      b2 = b2.length | 0;
    } else {
      b2 = 0;
    }
    Array.isArray(c3.path) ? (a2 = c3.path, a2 = a2.length | 0) : a2 = 0;
    return b2 - a2 | 0;
  });
  var a = [];
  var f2 = b.length | 0;
  var g2 = 0, c2;
  while (g2 < f2) {
    F2 = b[g2];
    c2 = "\u2716 " + F2.message;
    a.push(c2);
    if (Array.isArray(F2.path)) {
      c2 = F2.path;
      var o2 = c2.length | 0;
      c2 = o2 > 0;
    } else {
      c2 = false;
    }
    c2 && (F2 = "  \u2192 at " + Pc(F2.path), a.push(F2));
    g2 = g2 + 1;
  }
  return a.join("\n");
};
var K = (a, b) => {
  let c2 = { _errors: [] };
  a = a.issues;
  Kb(a, [], c2, b);
  return c2;
};
var L = Oc;
var Vk = Ta();
var d = ta;
var M = Ia;
var N = (a, j2) => Sc(da(a)).get(j2);
ie();
var Wk = (0, function(c2) {
  return new Z(ba(Ge, c2));
});
var Xk = (0, function(c2) {
  return new ha(ba(Le, c2));
});
var Yk = (0, function(c2) {
  return new Za(ba(Zf, c2));
});
var Zk = (0, function(c2) {
  return new qa(ba(hf, c2));
});
var _k = (0, function(c2) {
  return new Ub(ba(jg, c2));
});
var $k = (0, function(c2) {
  return new za(ba(og, c2));
});
var al = (0, function(c2) {
  return new Vb(ba(ki, c2));
});
var bl = (0, function() {
  return new Wb({ type: Vf });
});
var cl = (0, function() {
  return new sb({ type: Ng });
});
var dl = (0, function() {
  return new Xb({ type: ak });
});
var el = (0, function() {
  return new Ja({ type: Bg });
});
var fl = (0, function() {
  return new db({ type: _h });
});
var gl = (0, function() {
  return new Yb({ type: Wi });
});
var hl = (0, function() {
  var y2 = arguments[0];
  var a = arguments[1];
  if (!Array.isArray(y2)) {
    var c2 = [];
    c2.push(y2);
    y2 = c2;
  }
  c2 = ba(Sh, a);
  c2.values = y2;
  c2 = new tb(c2);
  return c2;
});
var O = (0, function(a, b) {
  return Xc(a, b);
});
var P = (0, function(a, b) {
  return nc(a, b);
});
var il = (0, function(a, b) {
  let c2 = nc(a, b);
  return c2.strict();
});
var jl = (0, function(a, b) {
  let c2 = nc(a, b);
  return c2.passthrough();
});
var kl = (0, function() {
  let a = arguments[0], c2 = arguments[1];
  c2 = ba(Ff, c2);
  c2.element = a;
  return new xa(c2);
});
var ll = (0, function(a, b, d2) {
  return oc(a, b, d2);
});
var ml = (0, function(a, b, d2) {
  return Pb(a, b, d2);
});
var nl = (0, function() {
  let a = arguments[0], c2 = arguments[1];
  c2 = ba(pg, c2);
  c2.options = a;
  return new La(c2);
});
var ol = (0, function() {
  let a = arguments[0], l2 = arguments[1];
  l2 = ba(pg, l2);
  Object.assign(l2, { options: a, inclusive: false });
  return new vb(l2);
});
var pl = (0, function(d2, a, e2) {
  let b = d2 + "";
  return de(b, a, e2);
});
var ql = (0, function(a, c2) {
  return new wb({ type: Hg, left: a, right: c2 });
});
var rl = (0, function(a, c2) {
  return new eb({ type: Eh, keyType: a, valueType: c2 });
});
var sl = (0, function() {
  let a = arguments[0], c2 = arguments[1];
  c2 = ba(Jf, c2);
  c2.valueType = a;
  return new fb(c2);
});
var tl = (0, function(c2) {
  return new gb({ type: Ui, getter: c2 });
});
var ul = (0, function(c2) {
  return new Ab({ type: Fi, innerType: c2 });
});
var vl = (0, function() {
  var a = arguments[0];
  var l2 = arguments[1];
  typeof a == Ke || (a = (0, function(a2) {
    return true;
  }));
  l2 = ba(rf, l2);
  Object.assign(l2, { fn: a, check: rf });
  l2 = new Qa(l2);
  return l2;
});
var wl = (0, function(c2) {
  return new jb(ba(wh, c2));
});
var xl = (0, function() {
  var a = arguments[0];
  var l2 = arguments[1];
  l2 = ba(rf, l2);
  Object.assign(l2, { check: rf, abort: true, fn: function(t2) {
    return sa(a, t2) ? true : false;
  } });
  l2 = new Qa(l2);
  var b = da(l2).handle._zod;
  b = b.bag;
  b.Class = a;
  return l2;
});
var yl = (0, function(c2) {
  return new hb({ type: Ve, transform: c2 });
});
var zl = (0, function(a) {
  return he(a);
});
var Al = (0, function() {
  let c2 = arguments[0];
  c2 = new ha(ba(Le, c2));
  return fa(c2, ea(nf, { format: mh }));
});
var Bl = (0, function() {
  let c2 = arguments[0];
  c2 = new ha(ba(Le, c2));
  return fa(c2, ea(nf, { format: gj }));
});
var Cl = (0, function() {
  let c2 = arguments[0];
  c2 = new ha(ba(Le, c2));
  return fa(c2, ea(nf, { format: Xj }));
});
var Dl = (0, function() {
  let c2 = arguments[0];
  c2 = new ha(ba(Le, c2));
  return fa(c2, ea(nf, { format: zj }));
});
var El = (0, function() {
  let c2 = arguments[0];
  c2 = new ha(ba(Le, c2));
  return fa(c2, ea(nf, { format: Aj }));
});
var Fl = (0, function(a, c2) {
  return new Da({ type: Og, in: a, out: c2 });
});
var Gl = (0, function() {
  let a = arguments[0];
  a = a.optional;
  let c2 = arguments[0];
  return a.call(c2);
});
var Hl = (0, function() {
  let a = arguments[0];
  a = a.nullable;
  let c2 = arguments[0];
  return a.call(c2);
});
var $l = rc;
var am = function(b) {
  return Pa(S, Ai, $l, b);
};
var bm = cb;
var cm = function(b) {
  return Pa(U, Xh, bm, b);
};
var dm = sc;
var em = function(b) {
  return Pa(T, Fj, dm, b);
};
var Il = (0, function() {
  var l2 = arguments[0];
  l2 = ba(Ge, l2);
  Object.assign(l2, { format: nh, check: af, abort: false });
  l2 = new Dc(l2);
  return l2;
});
var Jl = (0, function() {
  var l2 = arguments[0];
  l2 = ba(Ge, l2);
  Object.assign(l2, { format: nh, check: af, abort: false, protocol: Hd, hostname: Id });
  l2 = new Dc(l2);
  return l2;
});
var Kl = (0, function(a, b, d2) {
  return Yc(a, b, d2);
});
var Ll = (0, function() {
  var A2 = arguments[0];
  A2 = da(A2);
  var a = A2.def.out;
  var b = A2.def.in;
  var c2 = A2.def.reverseTransform;
  A2 = Yc(a, b, { decode: c2, encode: A2.def.transform });
  return A2;
});
var Ml = (0, function() {
  let a = arguments[0], c2 = arguments[1], b = Bb;
  a = new hb({ type: Ve, transform: a });
  return new b({ type: Og, in: a, out: c2 });
});
var Nl = (0, function(a) {
  return oe(a);
});
var Ol = (0, function(c2) {
  return new bc({ type: Kf, innerType: c2 });
});
var Pl = (0, function(a) {
  return ee(a);
});
var Ql = (0, function(c2) {
  return Pa(void 0, bk, Fd, c2);
});
var Rl = (0, function(c2) {
  return Pa(void 0, lg, Gd, c2);
});
var Sl = (0, function(a, b) {
  return fe(a, b);
});
var Tl = (0, function(a, b, d2) {
  let c2 = Pb(a, b, d2);
  da(c2).def.partial = true;
  return c2;
});
var Ul = (0, function() {
  let a = arguments[0];
  a = a.keyof;
  let c2 = arguments[0];
  return a.call(c2);
});
var Vl = (0, function() {
  let a = arguments[0];
  a = a.catch;
  let b = arguments[0], c2 = arguments[1];
  return a.call(b, c2);
});
var Q = (0, function() {
  let a = arguments[0];
  a = a.default;
  let b = arguments[0], c2 = arguments[1];
  return a.call(b, c2);
});
var Wl = (0, function() {
  let a = arguments[0];
  a = a.prefault;
  let b = arguments[0], c2 = arguments[1];
  return a.call(b, c2);
});
var Xl = (0, function() {
  let a = arguments[0];
  a = a.nonoptional;
  let c2 = arguments[0];
  return a.call(c2);
});
var Yl = (0, function() {
  let a = arguments[0];
  a = a.readonly;
  let c2 = arguments[0];
  return a.call(c2);
});
var fm = R;
var gm = function(b) {
  return Pa(V, ji, fm, b);
};
var hm = void 0;
var im = uc;
var jm = function(b) {
  return Pa(hm, mi, im, b);
};
var km = void 0;
var lm = tc;
var mm = function(b) {
  return Pa(km, Lj, lm, b);
};
var nm = void 0;
var om = vc;
var pm = function(b) {
  return Pa(nm, Gj, om, b);
};
var qm = void 0;
var rm = wc;
var sm = function(b) {
  return Pa(qm, Vh, rm, b);
};
R = { string: function() {
  let c2 = arguments[0];
  c2 = new Z(ba(Ge, c2));
  da(c2).def.coerce = true;
  return c2;
}, number: function() {
  let c2 = arguments[0];
  c2 = new ha(ba(Le, c2));
  da(c2).def.coerce = true;
  return c2;
}, boolean: function() {
  let c2 = arguments[0];
  c2 = new Za(ba(Zf, c2));
  da(c2).def.coerce = true;
  return c2;
}, bigint: function() {
  let c2 = arguments[0];
  c2 = new qa(ba(hf, c2));
  da(c2).def.coerce = true;
  return c2;
}, date: function() {
  let c2 = arguments[0];
  c2 = new za(ba(og, c2));
  da(c2).def.coerce = true;
  return c2;
} };
var tm = c;
var um = xc;
var Zl = { datetime: function(d2) {
  let a = Bc, e2 = Wc(d2);
  return Pa(a, Jh, e2, d2);
}, date: function(b) {
  return Pa(E, og, tm, b);
}, time: function(d2) {
  let a = Cc, e2 = Vc(d2);
  return Pa(a, Vi, e2, d2);
}, duration: function(b) {
  return Pa(H, ri, um, b);
} };
var _l = { en: function() {
  return { localeError: function(F2) {
    return Nc(F2);
  } };
} };
c = {};
var kb = {};
W(Ge, Wk);
W(Le, Xk);
W(Zf, Yk);
W(hf, Zk);
W(jg, _k);
W(og, $k);
W(ki, al);
W(Vf, bl);
W(Ng, cl);
W(ak, dl);
W(Bg, el);
W(_h, fl);
W(Wi, gl);
W(Sh, hl);
W(xi, O);
W("nativeEnum", O);
W(ig, P);
W("strictObject", il);
W("looseObject", jl);
W("interface", P);
W(Ff, kl);
W(Ci, ll);
W(Xg, ml);
W(pg, nl);
W("xor", ol);
W("discriminatedUnion", pl);
W(Hg, ql);
W(Eh, rl);
W(Jf, sl);
W(Ui, tl);
W(Fi, ul);
W(rf, vl);
W(wh, wl);
W("instanceof", xl);
W(Ve, yl);
W(Ke, zl);
W(mh, Al);
W(gj, Bl);
W(Xj, Cl);
W(zj, Dl);
W(Aj, El);
W(Og, Fl);
W(lf, Gl);
W(hh, Hl);
W(Ai, am);
W(Xh, cm);
W(Fj, em);
W(nh, Il);
W("httpUrl", Jl);
W("codec", Kl);
W("invertCodec", Ll);
W("preprocess", Ml);
W(xk, Nl);
W(Kf, Ol);
W("json", Pl);
W(bk, Ql);
W(lg, Rl);
W("hash", Sl);
W("partialRecord", Tl);
W("looseRecord", function(a, b, d2) {
  let c2 = Pb(a, b, d2);
  da(c2).def.mode = fk;
  return c2;
});
W(tk, function(c2) {
  return Pa(void 0, ch, yc, c2);
});
W(tj, function() {
  var c2 = arguments[0];
  var a = X(c2) && typeof c2.delimiter == Ge ? c2.delimiter : ":";
  a = a + "";
  c2 = Pa(void 0, tj, $(Cj + a + Qh + a + rj, xg), c2);
  return c2;
});
W(dk, Ul);
W(rh, Vl);
W(ah, Q);
W("_default", Q);
W(Gg, Wl);
W(Pf, Xl);
W(kh, Yl);
W(ji, gm);
W(mi, jm);
W(Lj, mm);
W(Gj, pm);
W(Vh, sm);
W(Xf, R);
W("iso", Zl);
W("locales", _l);
W("core", c);
W(Bi, _c);
W(Lk, (h2, t2, i2) => pb(h2, t2, i2));
W(uk, $c);
W(gi, (h2, t2, i2) => Ob(h2, t2, i2));
W(Ri, ad);
W(Qi, bd);
W(kk, cd);
W(jk, dd);
W("treeifyError", I);
W("prettifyError", J);
W("formatError", K);
W("flattenError", L);
W("registry", () => {
  let a = /* @__PURE__ */ new WeakMap();
  return Qc(a, /* @__PURE__ */ new Map());
});
W("globalRegistry", Vk);
W("config", Zc);
W(wj, Y);
W(e, Z);
W(f, ha);
W(g, Za);
W(h, qa);
W(i, Ub);
W("ZodDate", za);
W("ZodNaN", Vb);
W(j, Wb);
W("ZodNull", sb);
W("ZodAny", Xb);
W(k, Ja);
W(l, db);
W("ZodVoid", Yb);
W(Li, tb);
W(uj, Ka);
W(m, oa);
W(jj, xa);
W(n, Zb);
W(Yi, ub);
W(Nj, eb);
W(Oj, fb);
W(lj, La);
W(qh, _b);
W(Pj, vb);
W(o, wb);
W(p, _a);
W(r, $b);
W(s, xb);
W(t, yb);
W(u, zb);
W(v, ac);
W("ZodLazy", gb);
W(w, Ab);
W(_j, hb);
W(vj, Da);
W(kj, ib);
W(pi, Bb);
W(x, Ac);
W(y, Qa);
W("ZodFile", jb);
W(A, Ra);
W(B, cc);
W(z, bc);
W(Hh, d);
W("ZodRealError", M);
W("getDiscriminatedOption", N);
W(q, $a);
W(Yj, function(c2) {
  return new $a({ type: lf, innerType: c2, exact: true });
});
W("slugify", function() {
  return ea(yf, { transform: function(G2) {
    let e2 = G2.toLowerCase().trim(), f2 = e2.replace($(rk, cj), xg), g2 = f2.replace($(Ok, cj), "-");
    return g2.replace($("^-+|-+$", cj), xg);
  } });
});
W(oh, function(a) {
  return je(a);
});
W(jh, function(a, b, d2) {
  let c2 = { property: a, schema: b };
  ia(c2, Oa(d2));
  return ea(jh, c2);
});
W("templateLiteral", function() {
  var a = arguments[0];
  var c2 = arguments[1];
  c2 = ba(Mf, c2);
  c2.parts = a;
  c2 = new cc(c2);
  var b = c2._zod;
  da(c2);
  aa(b, Se, { value: Vd(a), writable: true, configurable: true, enumerable: true });
  return c2;
});
W("stringFormat", function(a, b, d2) {
  return ge(a, b, d2);
});
W(ff, function(a, b) {
  return nb(a, b);
});
W("with", function(a, b) {
  return nb(a, b);
});
W("refine", function() {
  let a = arguments[0], l2 = arguments[1];
  l2 = ba(rf, l2);
  Object.assign(l2, { fn: a, check: rf });
  return new Qa(l2);
});
W(ok, function(a, c2) {
  return nb(function(e2) {
    var h2 = this;
    e2.addIssue = function(p2) {
      if (typeof p2 == Ge) {
        var b2 = e2.value;
        p2 = { message: p2, code: rf, input: b2, inst: h2, path: [] };
      } else {
        !p2.fatal || (p2.continue = false);
        p2.code === void 0 && (p2.code = rf);
        true === "input" in p2 || (p2.input = e2.value);
        p2.inst === void 0 && (p2.inst = h2);
        p2.continue === void 0 && (p2.continue = true);
      }
      var x2 = e2.issues;
      x2.push(p2);
    };
    let b = e2.value;
    return a(b, e2);
  }, c2);
});
W(yi, function() {
  return ea(yf, { transform: function(G2) {
    return G2.trim();
  } });
});
W(Ik, function() {
  var N2 = arguments[0];
  var c2 = arguments[1];
  N2 = { maximum: N2 };
  X(c2) && c2 != null && ia(N2, Oa(c2));
  c2 = ea(Lf, N2);
  return c2;
});
W(Jk, function() {
  var N2 = arguments[0];
  var c2 = arguments[1];
  N2 = { minimum: N2 };
  X(c2) && c2 != null && ia(N2, Oa(c2));
  c2 = ea(vf, N2);
  return c2;
});
W(C, Bc);
W(D, E);
W(F, Cc);
W(G, H);
W(Hk, d);
W("NEVER", { status: Sf });
W("fromJSONSchema", function(e2, f2) {
  e2;
  f2;
  return new Ja({ type: Bg });
});
W("visit", ed);
W("ZodIssueCode", { invalid_type: Bh, too_big: Ii, too_small: fi, invalid_format: Yf, not_multiple_of: eh, unrecognized_keys: mf, invalid_union: Cf, invalid_key: Of, invalid_element: hg, invalid_value: dg, custom: rf });
W("TimePrecision", { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 });
ia(c, kb);
Object.assign(c, { $ZodError: d, $ZodRealError: M, $ZodEncodeError: qc, toDotPath: Pc, flattenError: L, formatError: K, treeifyError: I, prettifyError: J, getDiscriminatedOption: N, $ZodType: Y, $ZodPipe: Da, $ZodCodec: ib, $ZodPreprocess: Bb, $ZodString: Z, $ZodCustom: Qa, $ZodNever: db, $ZodUnknown: Ja, $ZodNumber: ha });
Object.assign(c, { $ZodString: Z, $ZodType: Y, $ZodObject: oa, $ZodOptional: _a, visit: ed });
Object.assign(c, { $ZodObject: oa, $ZodOptional: _a, $ZodExactOptional: $a, config: Zc, globalConfig: Lb(), util: $d() });
c = c.util;
kb.util = c;
var ke = kb;

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
      return Object.entries(obj).filter(([k2]) => Number.isNaN(Number.parseInt(k2, 10))).map((el2) => el2[1]);
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
    const cl2 = new Ctor(def ?? inst._zod?.def ?? inst.def);
    if (params?.parent) cl2._zod.parent = inst;
    return cl2;
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
applyCompat(ke);
installVisit(ke);
installAsyncApi(ke);
ke.toJSONSchema = toJSONSchema;
ke.core.toJSONSchema = toJSONSchema;
ke.core.JSONSchemaGenerator = JSONSchemaGenerator;
ke.regexes = regexes_exports;
ke.core.regexes = regexes_exports;
ke.compile = ke.compile ?? ((schema) => schema);
if (ke.ZodType && ke.ZodType.prototype) {
  ke.ZodType.prototype.toJSONSchema = function toJSONSchemaMethod(params) {
    return toJSONSchema(this, params);
  };
}
var index_default = ke;
var string2 = ke.string;
var number2 = ke.number;
var boolean2 = ke.boolean;
var bigint2 = ke.bigint;
var symbol = ke.symbol;
var date2 = ke.date;
var nan = ke.nan;
var $undefined = ke.undefined;
var $null = ke.null;
var any = ke.any;
var unknown = ke.unknown;
var never = ke.never;
var $void = ke.void;
var literal = ke.literal;
var $enum = ke.enum;
var nativeEnum = ke.nativeEnum;
var object = ke.object;
var strictObject = ke.strictObject;
var looseObject = ke.looseObject;
var $interface = ke.interface;
var array = ke.array;
var tuple = ke.tuple;
var record = ke.record;
var union = ke.union;
var xor = ke.xor;
var discriminatedUnion = ke.discriminatedUnion;
var intersection = ke.intersection;
var map = ke.map;
var $set = ke.set;
var lazy = ke.lazy;
var promise = ke.promise;
var custom = ke.custom;
var file = ke.file;
var $instanceof = ke.instanceof;
var transform = ke.transform;
var $function = ke.function;
var int = ke.int;
var int32 = ke.int32;
var uint32 = ke.uint32;
var float32 = ke.float32;
var float64 = ke.float64;
var pipe = ke.pipe;
var optional = ke.optional;
var nullable = ke.nullable;
var email2 = ke.email;
var uuid2 = ke.uuid;
var guid2 = ke.guid;
var url = ke.url;
var httpUrl = ke.httpUrl;
var codec = ke.codec;
var invertCodec = ke.invertCodec;
var preprocess = ke.preprocess;
var stringbool = ke.stringbool;
var success = ke.success;
var json = ke.json;
var hex2 = ke.hex;
var hostname2 = ke.hostname;
var hash = ke.hash;
var partialRecord = ke.partialRecord;
var looseRecord = ke.looseRecord;
var creditCard2 = ke.creditCard;
var mac2 = ke.mac;
var keyof = ke.keyof;
var $catch = ke.catch;
var _default = ke._default;
var prefault = ke.prefault;
var nonoptional = ke.nonoptional;
var readonly = ke.readonly;
var jwt = ke.jwt;
var nanoid2 = ke.nanoid;
var ulid2 = ke.ulid;
var ipv42 = ke.ipv4;
var ipv62 = ke.ipv6;
var coerce = ke.coerce;
var iso = ke.iso;
var locales = ke.locales;
var core = ke.core;
var parse = ke.parse;
var safeParse = ke.safeParse;
var parseAsync = ke.parseAsync;
var safeParseAsync = ke.safeParseAsync;
var encode = ke.encode;
var decode = ke.decode;
var encodeAsync = ke.encodeAsync;
var decodeAsync = ke.decodeAsync;
var treeifyError = ke.treeifyError;
var prettifyError = ke.prettifyError;
var formatError = ke.formatError;
var flattenError = ke.flattenError;
var registry = ke.registry;
var globalRegistry2 = ke.globalRegistry;
var config = ke.config;
var ZodType = ke.ZodType;
var ZodString = ke.ZodString;
var ZodNumber = ke.ZodNumber;
var ZodBoolean = ke.ZodBoolean;
var ZodBigInt = ke.ZodBigInt;
var ZodSymbol = ke.ZodSymbol;
var ZodDate = ke.ZodDate;
var ZodNaN = ke.ZodNaN;
var ZodUndefined = ke.ZodUndefined;
var ZodNull = ke.ZodNull;
var ZodAny = ke.ZodAny;
var ZodUnknown = ke.ZodUnknown;
var ZodNever = ke.ZodNever;
var ZodVoid = ke.ZodVoid;
var ZodLiteral = ke.ZodLiteral;
var ZodEnum = ke.ZodEnum;
var ZodObject = ke.ZodObject;
var ZodArray = ke.ZodArray;
var ZodTuple = ke.ZodTuple;
var ZodRecord = ke.ZodRecord;
var ZodMap = ke.ZodMap;
var ZodSet = ke.ZodSet;
var ZodUnion = ke.ZodUnion;
var ZodDiscriminatedUnion = ke.ZodDiscriminatedUnion;
var ZodXor = ke.ZodXor;
var ZodIntersection = ke.ZodIntersection;
var ZodOptional = ke.ZodOptional;
var ZodNullable = ke.ZodNullable;
var ZodDefault = ke.ZodDefault;
var ZodPrefault = ke.ZodPrefault;
var ZodCatch = ke.ZodCatch;
var ZodNonOptional = ke.ZodNonOptional;
var ZodLazy = ke.ZodLazy;
var ZodPromise = ke.ZodPromise;
var ZodTransform = ke.ZodTransform;
var ZodPipe = ke.ZodPipe;
var ZodCodec = ke.ZodCodec;
var ZodPreprocess = ke.ZodPreprocess;
var ZodReadonly = ke.ZodReadonly;
var ZodCustom = ke.ZodCustom;
var ZodFile = ke.ZodFile;
var ZodFunction = ke.ZodFunction;
var ZodTemplateLiteral = ke.ZodTemplateLiteral;
var ZodSuccess = ke.ZodSuccess;
var ZodError = ke.ZodError;
var ZodRealError = ke.ZodRealError;
var getDiscriminatedOption = ke.getDiscriminatedOption;
var ZodExactOptional = ke.ZodExactOptional;
var exactOptional = ke.exactOptional;
var slugify = ke.slugify;
var properties = ke.properties;
var property = ke.property;
var templateLiteral = ke.templateLiteral;
var stringFormat = ke.stringFormat;
var check = ke.check;
var $with = ke.with;
var refine = ke.refine;
var superRefine = ke.superRefine;
var trim = ke.trim;
var maxLength = ke.maxLength;
var minLength = ke.minLength;
var ZodISODateTime = ke.ZodISODateTime;
var ZodISODate = ke.ZodISODate;
var ZodISOTime = ke.ZodISOTime;
var ZodISODuration = ke.ZodISODuration;
var $ZodError = ke.$ZodError;
var NEVER = ke.NEVER;
var fromJSONSchema = ke.fromJSONSchema;
var visit2 = ke.visit;
var ZodIssueCode = ke.ZodIssueCode;
var TimePrecision = ke.TimePrecision;
var util = ke.util;
var int64 = ke.int64;
var uint64 = ke.uint64;
var describe = ke.describe;
var meta = ke.meta;
var e1642 = ke.e164;
var cidrv42 = ke.cidrv4;
var cidrv62 = ke.cidrv6;
var base642 = ke.base64;
var base64url2 = ke.base64url;
var xid2 = ke.xid;
var ksuid2 = ke.ksuid;
var cuid3 = ke.cuid;
var cuid22 = ke.cuid2;
var emoji2 = ke.emoji;
var uuidv4 = ke.uuidv4;
var uuidv6 = ke.uuidv6;
var uuidv7 = ke.uuidv7;
var deepPartial2 = ke.deepPartial;
var safeEncode = ke.safeEncode;
var safeDecode = ke.safeDecode;
var safeEncodeAsync = ke.safeEncodeAsync;
var safeDecodeAsync = ke.safeDecodeAsync;
var setErrorMap = ke.setErrorMap;
var compile = ke.compile;
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
