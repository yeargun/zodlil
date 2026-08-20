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

// ../zodlil/dist/index.js
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
  z: () => ie
});
module.exports = __toCommonJS(index_exports);

// ../zodlil/dist/zod.core.js
var ne = "length";
var oe = "issues";
var pe = "value";
var re = "_zod";
var se = "string";
var te = "innerType";
var ve = "Encountered Promise during synchronous parse. Use .parseAsync() instead.";
var we = "function";
var xe = "number";
var ze = "format";
var Ce = "input";
var Ee = "pattern";
var He = "transform";
var Je = "type";
var Ke = "message";
var Le = 'Invalid discriminated union option at index "';
var Ne = "values";
var Pe = "continue";
var Qe = "string_format";
var Re = "optional";
var Se = "def";
var Ue = "greater_than";
var Ve = "bigint";
var Xe = "options";
var Ye = "unrecognized_keys";
var Ze = "$pending";
var $e = "return async function(data,params){return await impl(data,params)}";
var af = "custom";
var bf = "check";
var cf = "shape";
var ef = "number_format";
var ff = "less_than";
var hf = "optout";
var kf = "overwrite";
var lf = "min_length";
var nf = "invalid_union";
var of = "optin";
var rf = "array";
var sf = "includes";
var uf = "set";
var vf = "success";
var wf = "template_literal";
var yf = "invalid_key";
var zf = "nonoptional";
var Af = "discriminator";
var Bf = "length_equals";
var Cf = "inst";
var Ef = "__proto__";
var Ff = "undefined";
var Hf = "max_length";
var If = "invalid_format";
var Jf = "boolean";
var Lf = ".exactPartial() cannot be used on object schemas containing refinements";
var Mf = "coerce";
var Nf = "schema";
var Pf = "defaulted";
var Qf = "valueType";
var Rf = "invalid_value";
var Sf = ".partial() cannot be used on object schemas containing refinements";
var Tf = "propValues";
var Uf = "[.*+?^${}()|[\\]\\\\]";
var Vf = "aborted";
var Wf = "invalid_element";
var Xf = "object";
var Yf = "symbol";
var Zf = "catchall";
var _f = "hostname";
var bg = "date";
var cg = "union";
var eg = "lowercase";
var fg = "uppercase";
var hg = "size_equals";
var ig = "starts_with";
var jg = "";
var lg = "output";
var ng = "unknown";
var pg = "multipleOf";
var qg = "min_size";
var rg = "prefault";
var sg = "intersection";
var tg = "toJSONSchema";
var yg = "null";
var zg = "pipe";
var Ag = "size";
var Bg = "base64url";
var Dg = "ends_with";
var Eg = "normalize";
var Hg = "base64";
var Ig = "record";
var Ng = "_errors";
var Og = "default";
var Pg = "element";
var Qg = "credit_card";
var Rg = "multiple_of";
var Sg = "not_multiple_of";
var Tg = "max_size";
var Ug = "nullable";
var Wg = "property";
var Xg = "readonly";
var Zg = "int";
var _g = "url";
var $g = "properties";
var ah = "$ZodCheckStringFormat";
var bh = "ZodDiscriminatedUnion";
var ch = "catch";
var fh = "Invalid input";
var gh = "out";
var hh = "file";
var jh = "name";
var lh = "defaultValue";
var mh = "invalid_type";
var nh = "id";
var oh = "in";
var ph = "map";
var qh = "max";
var rh = "min";
var th = "ZodError";
var uh = "backward";
var vh = "datetime";
var wh = "toString";
var zh = "toLowerCase";
var Ah = "cidrv6";
var Ch = "){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}";
var Dh = "keyType";
var Eh = "literal";
var Fh = '"';
var Hh = "ipv6";
var Jh = "uuid";
var Mh = "never";
var Nh = "$ZodCheck";
var Rh = "mime_type";
var Th = "too_small";
var Uh = "safeParseAsync";
var Xh = "jwt";
var Yh = "nan";
var _h = "nanoid";
var bi = "ZodPreprocess";
var ci = "addIssue";
var di = "duration";
var fi = "maxValue";
var hi = "minValue";
var ji = "enum";
var ki = "trim";
var li = "Invalid input: expected ";
var mi = "tuple";
var ni = "forward";
var pi = "promise";
var ri = "safeint";
var si = "too_big";
var ti = "description";
var ui = "passthrough";
var vi = "ZodLiteral";
var xi = " items";
var yi = "$waits";
var Ai = "decode";
var Bi = "encode";
var Ei = "lazy";
var Fi = "time";
var Gi = "void";
var Ii = "ZodRecord";
var Ki = " not found in enum";
var Oi = "g";
var Qi = "cuid2";
var Ri = "email";
var Si = "emoji";
var Ti = "int32";
var Ui = "parse";
var Vi = "regex";
var Wi = "$ZodType";
var Xi = "ZodArray";
var Yi = "ZodCodec";
var Zi = "ZodUnion";
var $i = "nonempty";
var dj = "){5}[0-9a-f]{2}$";
var ej = "i";
var fj = "mac";
var gj = "ZodEnum";
var hj = "ZodPipe";
var ij = "ZodType";
var lj = "float32";
var mj = "float64";
var nj = "partial";
var oj = "^(?:[0-9A-F]{2}";
var pj = "\\$&";
var qj = "cuid";
var rj = "guid";
var sj = "ipv4";
var uj = "mime";
var xj = "ulid";
var zj = "ZodMap";
var Aj = "ZodSet";
var Bj = "ZodXor";
var Dj = "cidrv4";
var Gj = "sha256";
var Hj = "sha384";
var Ij = "sha512";
var Jj = "uint32";
var Kj = "exactOptional";
var Mj = "ZodTransform";
var Nj = "^(";
var Oj = "any";
var Pj = "hex";
var Rj = "keyof";
var Sj = "ksuid";
var Tj = "loose";
var Uj = "right";
var Vj = "~memo";
var Wj = " characters";
var Xj = "decodeAsync";
var Yj = "encodeAsync";
var _j = "nonnegative";
var $j = "nonpositive";
var ak = "superRefine";
var bk = "toUpperCase";
var dk = "[^\\w\\s-]";
var fk = "creditCard";
var gk = "parseAsync";
var ik = "startsWith";
var jk = "stringbool";
var kk = "$";
var mk = "e164";
var nk = "impl";
var ok = "left";
var rk = "sha1";
var tk = "$ZodError";
var uk = "maxLength";
var vk = "minLength";
var xk = "safeParse";
var yk = ")$";
var zk = " entries";
var Ak = "[\\s_-]+";
var Bk = "^-?\\d+$";
var Ck = "endsWith";
var Dk = "exactly ";
var Ek = "isFinite";
var Fk = "negative";
var Gk = "positive";
var X = (j2) => j2 != null && typeof j2 == Xf;
var la = () => /* @__PURE__ */ new Set();
var qa = (P2) => ga.keys(P2);
var ia = (P2, a) => ga.assign(P2, a);
var mb = (P2, a) => {
  if (!(a == null || !X(a))) {
    var u2 = Reflect.ownKeys(a);
    var f2 = u2.length | 0;
    var g2 = 0, b, c2;
    while (g2 < f2) {
      b = u2[g2];
      b = ga.getOwnPropertyDescriptor(a, b);
      b !== void 0 && b != null && (c2 = u2[g2], ga.defineProperty(P2, c2, b));
      g2 = g2 + 1;
    }
  }
};
var aa = (P2, o2, a) => {
  ga.defineProperty(P2, o2, a);
};
var Aa = (P2, o2, j2) => {
  aa(P2, o2, { value: j2, writable: true, enumerable: true, configurable: true });
};
var Bb = (a, Q2) => {
  var b = Error.captureStackTrace;
  typeof b == we && b(a, Q2);
};
var Ka = (j2) => true === Number.isFinite(j2);
var na = (a) => new Error(a);
var $ = (a, b) => new RegExp(a, b);
var Ba = (a, j2) => !!a.test(j2);
var da = (j2) => X(j2) && typeof j2.then == we;
var Ea = (j2) => ({ enumerable: false, writable: false, configurable: true, value: j2 });
var Ed = (a, b, z2, c2, e2) => {
  let d2 = globalThis.Function;
  let f2 = new d2("parseAsync,applyFn,input,output,implFn", "return async function(){var a=Array.from(arguments);var p=input?await parseAsync(input,a):a;var r=await applyFn(implFn,this,p);return output?await parseAsync(output,r):r}");
  d2 = [];
  d2.push(a);
  d2.push(b);
  d2.push(z2);
  d2.push(c2);
  d2.push(e2);
  return f2.apply(void 0, d2);
};
var ra = (Q2, j2) => {
  if (j2 == null) return false;
  Q2 = Q2.prototype;
  return true === jd.call(Q2, j2);
};
function Fd(n2, k2) {
  var a = k2.type + "";
  n2.id = Ob;
  Ob = Ob + 1 | 0;
  n2.kind = Gd(a);
  a == cg && typeof k2.discriminator != se && false === k2.inclusive && (n2.kind = 38);
  n2.handle = void 0;
  n2.def = k2;
  n2.ctor = void 0;
  n2.typeName = a;
  a == Zg && (n2.typeName = xe);
  n2.trait = ij;
  n2.values = void 0;
  n2.optin = 0;
  n2.optout = 0;
  Oa.push(n2);
  Hd(n2);
}
var Gd = (a) => a == se ? 0 : a == xe ? 1 : a == Zg ? 1 : a == Jf ? 2 : a == Ve ? 3 : a == Yf ? 4 : a == bg ? 5 : a == Yh ? 6 : a == Ff ? 7 : a == yg ? 8 : a == Oj ? 9 : a == ng ? 10 : a == Mh ? 11 : a == Gi ? 12 : a == Eh ? 13 : a == ji ? 14 : a == Xf ? 15 : a == rf ? 16 : a == mi ? 17 : a == Ig ? 18 : a == ph ? 19 : a == uf ? 20 : a == cg ? 21 : a == sg ? 22 : a == Re ? 23 : a == Ug ? 24 : a == Og ? 25 : a == rg ? 26 : a == ch ? 27 : a == zf ? 28 : a == Ei ? 29 : a == pi ? 30 : a == He ? 31 : a == zg ? 32 : a == Xg ? 33 : a == af ? 34 : a == hh ? 35 : a == vf ? 37 : a == we ? 39 : a == wf ? 40 : 34;
var Hd = (n2) => {
  var m2 = n2.typeName;
  var k2 = n2.def;
  if (m2 == Ff) {
    m2 = la();
    m2.add(void 0);
    n2.values = m2;
  } else if (m2 == yg) {
    m2 = la();
    m2.add(null);
    n2.values = m2;
  } else if (m2 == Eh) {
    var g2 = la();
    m2 = k2.values;
    if (Array.isArray(m2)) {
      var f2 = m2.length | 0;
      k2 = 0;
      while (k2 < f2) {
        var a = m2[k2];
        g2.add(a);
        k2 = k2 + 1;
      }
    }
    n2.values = g2;
  } else if (m2 == ji) {
    g2 = la();
    k2 = Vc(k2.entries);
    f2 = k2.length | 0;
    m2 = 0;
    while (m2 < f2) {
      a = k2[m2];
      g2.add(a);
      m2 = m2 + 1;
    }
    n2.values = g2;
  } else if (m2 == Re) {
    m2 = ka(n2, te);
    if (m2) {
      if (m2.values !== void 0) {
        g2 = la();
        a = Array.from(m2.values);
        var S2 = a.length | 0;
        f2 = 0;
        while (f2 < S2) {
          var b = a[f2];
          g2.add(b);
          f2 = f2 + 1;
        }
        k2.exact || g2.add(void 0);
        n2.values = g2;
      }
      2 == m2.optin ? n2.optin = 2 : n2.optin = 1;
    } else {
      n2.optin = 1;
    }
    n2.optout = 1;
  } else if (m2 == Ug) {
    m2 = ka(n2, te);
    if (m2) {
      if (m2.values !== void 0) {
        k2 = la();
        f2 = Array.from(m2.values);
        a = f2.length | 0;
        g2 = 0;
        while (g2 < a) {
          S2 = f2[g2];
          k2.add(S2);
          g2 = g2 + 1;
        }
        k2.add(null);
        n2.values = k2;
      }
      n2.optin = m2.optin;
      n2.optout = m2.optout;
    }
  } else if (m2 == Og || m2 == rg || m2 == ch) {
    k2 = ka(n2, te);
    m2 == ch ? (n2.optin = 1, !k2 || (m2 = k2, n2.values = m2.values, 2 == m2.optin && (n2.optin = 2))) : (n2.optin = 2, !k2 || (n2.values = k2.values));
  } else if (m2 == Xg) {
    m2 = ka(n2, te);
    !m2 || (n2.values = m2.values, n2.optin = m2.optin, n2.optout = m2.optout);
  } else if (m2 == zf) {
    m2 = ka(n2, te);
    !m2 || (n2.values = m2.values);
  } else if (m2 == He) n2.optin = 1;
  else if (m2 == zg) {
    m2 = ka(n2, oh);
    !m2 || (n2.values = m2.values, n2.optin = m2.optin, n2.optout = m2.optout);
  } else if (m2 == cg) {
    S2 = k2.options;
    if (Array.isArray(S2)) {
      var c2 = S2.length | 0;
      m2 = c2 > 0;
      var d2 = la();
      g2 = false;
      f2 = false;
      a = false;
      b = 0;
      while (b < c2) {
        k2 = va(S2[b]);
        if (k2) {
          2 == k2.optin && (g2 = true);
          0 != k2.optin && (f2 = true);
          1 == k2.optout && (a = true);
          if (k2.values === void 0) m2 = false;
          else {
            var e2 = Array.from(k2.values);
            var h2 = e2.length | 0;
            k2 = 0;
            while (k2 < h2) {
              var i2 = e2[k2];
              d2.add(i2);
              k2 = k2 + 1;
            }
          }
        } else {
          m2 = false;
        }
        b = b + 1;
      }
      m2 && (n2.values = d2);
      g2 ? n2.optin = 2 : f2 && (n2.optin = 1);
      a && (n2.optout = 1);
    }
  }
};
var ac = (e2, q2, a, m2) => {
  var b = m2.issues;
  var f2 = b.length | 0;
  f2 > 0 && (b = m2.issues, e2 = e2.issues, Ua(b, e2, a));
  q2[a] = m2.value;
};
var Id = (n2) => {
  var D2 = n2.handle._zod;
  D2 = D2.optin;
  return typeof D2 == se ? D2 + "" == Pf ? 2 : D2 + "" == Re ? 1 : 0 : n2.optin;
};
var Jd = (n2) => {
  var D2 = n2.handle._zod;
  D2 = D2.optout;
  return typeof D2 == se && D2 + "" == Re ? 1 : n2.optout;
};
var Kd = (e2, q2, o2, a, b, c2, m2) => {
  var d2 = 1 == c2;
  var g2 = 0 != b;
  c2 = !a && d2 && 1 == b;
  if (!c2 && (m2.issues.length | 0) > 0) if (g2 && d2 && !a) c2 = true;
  else {
    d2 = m2.issues;
    var f2 = e2.issues;
    Ua(d2, f2, o2);
  }
  if (!c2 && !a && 0 == b) {
    b = m2.issues;
    var w2 = b.length | 0;
    0 == w2 && (b = ya(zf, void 0), Fb(b, o2), e2 = e2.issues, e2.push(b));
    c2 = true;
  }
  if (!c2) m2.value === void 0 ? a && (q2[o2] = void 0) : q2[o2] = m2.value;
};
var Cb = (A2) => A2.replace($(Uf, Oi), pj) + "";
var Db = (M2) => {
  M2 = M2 + "";
  var a = M2.length | 0;
  var b = M2.startsWith("^") ? 1 : 0;
  !M2.endsWith(kk) || (a = a - 1 | 0);
  return M2.slice(b, a) + "";
};
var Ld = (D2) => {
  var B2 = D2.kind;
  var x2 = {};
  var a;
  X(D2.handle) && X(D2.handle._zod) && (x2 = D2.handle._zod, x2 = x2.bag);
  if (0 == B2) {
    if (X(x2) && x2.patterns !== void 0) {
      B2 = x2.patterns;
      a = Array.from(B2);
      B2 = a.length | 0;
      if (B2 > 0) return a[B2 - 1 | 0];
    }
    if (D2.def.pattern !== void 0) return D2.def.pattern;
    var Ea2 = typeof x2.minimum;
    D2 = Ea2 == xe ? x2.minimum + "" : "0";
    var Ka2 = typeof x2.maximum;
    x2 = Ka2 == xe ? x2.maximum + "" : jg;
    return $("^[\\s\\S]{" + D2 + "," + x2 + "}$", jg);
  }
  if (1 == B2) {
    if (x2.pattern !== void 0 && x2.pattern != null) return x2.pattern;
    var Ra2 = typeof x2.format;
    D2 = Ra2 == se ? x2.format + "" : jg;
    return D2.includes(Zg) ? $(Bk, jg) : $("^-?\\d+(?:\\.\\d+)?$", jg);
  }
  if (2 == B2) return $("^(?:true|false)$", ej);
  if (3 == B2) return $("^-?\\d+n?$", jg);
  if (7 == B2) return $("^undefined$", jg);
  if (8 == B2) return $("^null$", jg);
  if (13 == B2) {
    var b = Array.from(D2.values);
    x2 = [];
    var f2 = b.length | 0;
    B2 = 0;
    while (B2 < f2) {
      D2 = b[B2];
      typeof D2 == se ? x2.push(Cb(D2 + "")) : D2 == null && D2 === void 0 ? x2.push(Ff) : D2 == null ? x2.push(yg) : x2.push(Cb(D2 + ""));
      B2 = B2 + 1;
    }
    D2 = Nj + x2.join("|");
    return $(D2 + yk, jg);
  }
  if (14 == B2) {
    b = Array.from(D2.values);
    B2 = [];
    f2 = b.length | 0;
    x2 = 0;
    while (x2 < f2) {
      D2 = b[x2];
      (typeof D2 == se || typeof D2 == xe || typeof D2 == Yf) && B2.push(Cb(D2 + ""));
      x2 = x2 + 1;
    }
    D2 = Nj + B2.join("|");
    return $(D2 + yk, jg);
  }
  if (40 == B2) {
    D2 = D2.handle._zod;
    return D2.pattern;
  }
};
var Md = (C2) => {
  var b = [];
  var f2 = C2.length | 0;
  var g2 = 0, a, c2;
  while (g2 < f2) {
    a = C2[g2];
    if (a == null || typeof a == se || typeof a == xe || typeof a == Jf || typeof a == Ve) b.push(Cb(a + ""));
    else if (X(a) && X(a._zod)) {
      c2 = a._zod;
      c2 = c2.pattern;
      if (c2 == null) {
        C2 = a._zod;
        C2 = C2.traits;
        if (C2 !== void 0) {
          C2 = Array.from(C2);
          var q2 = C2.length | 0;
          C2 = q2 > 0 ? C2[0] + "" : jg;
        } else {
          C2 = jg;
        }
        throw new Error("Invalid template literal part, no pattern found: " + C2);
      }
      a = c2.source + "";
      if (0 == a.length) throw new Error("Invalid template literal part");
      b.push(Db(a));
    } else {
      C2 = "Invalid template literal part: " + a;
      throw new Error(C2);
    }
    g2 = g2 + 1;
  }
  C2 = "^" + b.join(jg);
  return $(C2 + kk, jg);
};
var Nd = (P2, a) => {
  let b = Symbol.for;
  b = b("evaluating");
  let c2 = { value: void 0 };
  aa(P2, te, { configurable: true, get: function() {
    if (c2.value !== b) {
      c2.value === void 0 && (c2.value = b, c2.value = a());
      return c2.value;
    }
  }, set: function(D2) {
    aa(P2, te, { value: D2, configurable: true, writable: true });
  } });
};
var ja = (H2, o2, a) => {
  H2 = H2.handle._zod;
  var c2 = ga.getPrototypeOf(H2);
  if (true === o2 in c2 && Pb !== H2) {
    Pb = void 0;
    return;
  }
  Pb = H2;
  aa(c2, o2, { configurable: true, get: function() {
    aa(this, o2, ld);
    var c3 = Va;
    Va = false;
    var r2;
    try {
      r2 = a(this);
      Va ? Reflect.deleteProperty(this, o2) : aa(this, o2, { configurable: true, writable: true, value: r2 });
      c3 && (Va = true);
      return r2;
    } catch (s2) {
      Reflect.deleteProperty(this, o2);
      c3 && (Va = true);
      throw s2;
    }
  }, set: function(j2) {
    aa(this, o2, { configurable: true, writable: true, value: j2 });
  } });
};
var zc = (n2) => 1 == n2.optin ? Re : 2 == n2.optin ? Pf : void 0;
var Ac = (n2) => 1 == n2.optout ? Re : void 0;
var Od = (n2) => {
  var B2 = n2.kind;
  var H2 = n2.handle._zod;
  var a = n2.handle;
  if (29 == B2) {
    B2 = n2.def.getter;
    Nd(H2, function() {
      var b = a._zod;
      b = b.def;
      b._cachedInner === void 0 && (b._cachedInner = B2());
      return b._cachedInner;
    });
    ja(n2, Ee, function(r2) {
      var m2 = r2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.pattern;
      }
    });
    ja(n2, Tf, function(r2) {
      var m2 = r2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.propValues;
      }
    });
    ja(n2, of, function(r2) {
      var m2 = r2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optin;
      }
    });
    ja(n2, hf, function(r2) {
      var m2 = r2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optout;
      }
    });
    return;
  }
  if (23 == B2) {
    ja(n2, of, function(m2) {
      var b = m2.def;
      m2 = b.innerType;
      return X(m2) && X(m2._zod) && m2._zod.optin + "" == Pf ? Pf : Re;
    });
    H2.optout = Re;
    ja(n2, Ne, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      var a2, f2, c2, b;
      if (!(!X(m2) || !X(m2._zod)) || m2._zod.values === void 0) {
        a2 = la();
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
      }
    });
    ja(n2, Ee, function(r2) {
      var s2 = r2.def;
      s2 = s2.innerType;
      if (!(!X(s2) || !X(s2._zod))) {
        s2 = s2._zod;
        s2 = s2.pattern;
        if (!(s2 == null)) {
          var h2 = Nj + Db(s2.source + "");
          return $(h2 + ")?$", jg);
        }
      }
    });
    return;
  }
  if (24 == B2) {
    ja(n2, of, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optin;
      }
    });
    ja(n2, hf, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optout;
      }
    });
    ja(n2, Ee, function(r2) {
      var s2 = r2.def;
      s2 = s2.innerType;
      if (!(!X(s2) || !X(s2._zod))) {
        s2 = s2._zod;
        s2 = s2.pattern;
        if (!(s2 == null)) {
          var h2 = Nj + Db(s2.source + "");
          return $(h2 + "|null)$", jg);
        }
      }
    });
    ja(n2, Ne, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (!(!X(m2) || !X(m2._zod)) || m2._zod.values === void 0) {
        r2 = la();
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
      }
    });
    return;
  }
  if (21 == B2 || 38 == B2) {
    ja(n2, of, function(r2) {
      var S2 = r2.def;
      S2 = S2.options;
      if (!!Array.isArray(S2)) {
        var f2 = S2.length | 0;
        var r2 = false, g2 = 0, a2;
        while (g2 < f2) {
          a2 = S2[g2];
          a2 = a2._zod;
          a2 = a2.optin;
          if (a2 + "" == Pf) return Pf;
          a2 === void 0 || (r2 = true);
          g2 = g2 + 1;
        }
        if (r2) return Re;
      }
    });
    ja(n2, hf, function(g2) {
      var S2 = g2.def;
      S2 = S2.options;
      if (!!Array.isArray(S2)) {
        var f2 = S2.length | 0;
        g2 = 0;
        while (g2 < f2) {
          var a2 = S2[g2];
          a2 = a2._zod;
          var m2 = a2.optout + "";
          if (m2 == Re) return Re;
          g2 = g2 + 1;
        }
      }
    });
    ja(n2, Ne, function(g2) {
      var S2 = g2.def;
      S2 = S2.options;
      if (!!Array.isArray(S2)) {
        var b = la();
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
      }
    });
    ja(n2, Ee, function(g2) {
      var A2 = g2.def;
      A2 = A2.options;
      if (!!Array.isArray(A2)) {
        var a2 = [];
        var f2 = A2.length | 0;
        g2 = 0;
        while (g2 < f2) {
          var b = A2[g2];
          b = b._zod;
          b = b.pattern;
          if (b == null) return;
          a2.push(Db(b.source + ""));
          g2 = g2 + 1;
        }
        A2 = Nj + a2.join("|");
        return $(A2 + yk, jg);
      }
    });
    return;
  }
  if (32 == B2) {
    ja(n2, Ne, function(r2) {
      var V2 = r2.def;
      V2 = V2.in;
      if (X(V2) && X(V2._zod)) {
        V2 = V2._zod;
        return V2.values;
      }
    });
    ja(n2, of, function(r2) {
      var V2 = r2.def;
      V2 = V2.in;
      if (X(V2) && X(V2._zod)) {
        V2 = V2._zod;
        return V2.optin;
      }
    });
    ja(n2, hf, function(r2) {
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
    ja(n2, of, function(m2) {
      var b = m2.def;
      m2 = b.innerType;
      return X(m2) && X(m2._zod) && m2._zod.optin + "" == Pf ? Pf : Re;
    });
    ja(n2, hf, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optout;
      }
    });
    ja(n2, Ne, function(r2) {
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
    ja(n2, of, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optin;
      }
    });
    ja(n2, hf, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.optout;
      }
    });
    ja(n2, Ne, function(r2) {
      var m2 = r2.def;
      m2 = m2.innerType;
      if (X(m2) && X(m2._zod)) {
        m2 = m2._zod;
        return m2.values;
      }
    });
    return;
  }
  ja(n2, Ee, function(r2) {
    let b = Oa;
    return Ld(b[+r2.id | 0]);
  });
  0 != n2.optin ? H2.optin = zc(n2) : ja(n2, of, function(r2) {
    let b = Oa;
    return zc(b[+r2.id | 0]);
  });
  0 != n2.optout ? H2.optout = Ac(n2) : ja(n2, hf, function(r2) {
    let b = Oa;
    return Ac(b[+r2.id | 0]);
  });
  n2.values === void 0 || (H2.values = n2.values);
};
var Bc = (B2) => {
  B2 = B2.kind;
  return 15 == B2 ? true : 16 == B2 ? true : 17 == B2 ? true : 18 == B2 ? true : 19 == B2 ? true : 20 == B2 ? true : false;
};
var Eb = (A2, a, b) => {
  if (a == null || !X(a)) return false;
  if (X(a._zod)) {
    A2 = va(a);
    return A2 ? Cc(A2, b) : false;
  }
  if (!Array.isArray(a)) return false;
  var f2 = a.length | 0;
  var g2 = 0;
  while (g2 < f2) {
    if (Eb(A2, a[g2], b)) return true;
    g2 = g2 + 1;
  }
  return false;
};
var Cc = (n2, a) => {
  var G2 = kc.get(n2.handle);
  var L2;
  if (G2 !== void 0 && G2 != null) return true === G2;
  if (a.has(n2.handle)) return true;
  a.add(n2.handle);
  if (29 == n2.kind) {
    G2 = n2.handle._zod;
    G2 = Eb(n2, G2.innerType, a);
  } else {
    var k2 = n2.def;
    L2 = k2.shape;
    if (X(L2) && L2 != null) {
      var u2 = qa(L2);
      var f2 = u2.length | 0;
      var G2 = false, g2 = 0;
      while (g2 < f2) {
        Eb(n2, L2[u2[g2]], a) && (G2 = true);
        g2 = g2 + 1;
      }
    } else {
      G2 = false;
    }
    g2 = qa(k2);
    u2 = g2.length | 0;
    L2 = 0;
    while (L2 < u2) {
      var S2 = g2[L2] + "";
      S2 != cf && Eb(n2, k2[g2[L2]], a) && (G2 = true);
      L2 = L2 + 1;
    }
  }
  a.delete(n2.handle);
  kc.set(n2.handle, G2);
  return G2;
};
var Dc = (v2) => {
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
var Pd = (g2, e2) => {
  var a = Dc(g2);
  var f2 = a.length | 0;
  g2 = 0;
  while (g2 < f2) {
    var b = e2.issues;
    var c2 = a[g2];
    b.push(c2);
    g2 = g2 + 1;
  }
};
var Qd = (n2, e2, i2) => {
  var a = n2.handle._zod;
  a = a.memoizer;
  var b, z2, c2, d2;
  if (!(a == null)) {
    if (a.recursive === void 0) {
      a.recursive = Cc(n2, la());
      if (!a.recursive) return;
    } else {
      if (!a.recursive) return;
    }
    z2 = e2.value;
    if (!(z2 == null || typeof z2 != Xf)) {
      if (!(i2 == null || !X(i2))) {
        b = i2[Vj];
        b == null && (b = /* @__PURE__ */ new Map(), b = { buckets: b, backEdges: void 0 }, i2[Vj] = b);
        a.ctx === i2 ? c2 = a.bucket : (c2 = b.buckets, c2 = c2.get(n2.handle), c2 == null && (c2 = /* @__PURE__ */ new Map(), d2 = b.buckets, d2.set(n2.handle, c2)), Object.assign(a, { ctx: i2, bucket: c2 }));
        n2 = c2.get(z2);
        if (n2 !== void 0 && n2 != null) {
          e2.value = n2.value;
          if (n2.issues != null) {
            i2 = n2.issues;
            var I2 = i2.length | 0;
            I2 > 0 && Pd(n2.issues, e2);
          } else {
            e2.memo = true;
            (b.backEdges === void 0 || b.backEdges == null) && (b.backEdges = la());
            i2 = b.backEdges;
            n2 = n2.value;
            i2.add(n2);
          }
          return e2;
        }
        a.handoff = c2;
        n2 = a.open;
        a.openDepth = n2.length;
      }
    }
  }
};
var $a = (n2, e2, a) => {
  n2 = n2.handle._zod;
  n2 = n2.memoizer;
  var b, c2;
  if (n2 === void 0 || n2.handoff === void 0 || n2.handoff == null) return a;
  c2 = n2.handoff;
  n2.handoff = void 0;
  b = { value: a, issues: null };
  e2 = e2.value;
  c2.set(e2, b);
  n2 = n2.open;
  n2.push(b);
  return a;
};
var Ec = (n2, e2) => {
  n2 = n2.handle._zod;
  n2 = n2.memoizer;
  var a;
  if (!(n2 == null)) {
    n2.handoff = void 0;
    a = n2.open;
    var t2 = typeof n2.openDepth;
    n2 = t2 == xe ? +n2.openDepth | 0 : 0;
    if (Array.isArray(a) && (a.length | 0) > n2) {
      n2 = a.pop();
      a = e2.issues;
      var l2 = a.length | 0;
      l2 > 0 ? n2.issues = Dc(e2.issues) : n2.issues = [];
    }
  }
};
var Fc = (a, b, z2) => a ? { code: si, maximum: 0 + b, inclusive: true, input: z2, origin: rf } : { code: Th, minimum: 0 + b, inclusive: true, input: z2, origin: rf };
var Gc = (e2, a, g2, b, c2) => {
  var q2 = e2.value;
  var f2 = g2.length | 0;
  var j2 = a.length | 0;
  g2 = 0;
  while (g2 < j2) {
    var d2 = b[g2];
    var h2 = g2 < f2;
    var i2 = va(a[g2]);
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
    g2 = va(a[e2]);
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
var ab = (e2, G2) => {
  e2.value = G2.value;
  G2 = G2.issues;
  e2 = e2.issues;
  Sc(G2, e2);
};
var Hc = (e2, a, i2) => {
  var f2 = a.length | 0;
  var g2 = 0, B2, b, c2, v2, d2;
  while (g2 < f2) {
    B2 = a[g2];
    if (B2 !== void 0 && B2 != null && 0 == (B2.issues.length | 0)) {
      ab(e2, B2);
      return;
    }
    g2 = g2 + 1;
  }
  g2 = [];
  b = 0;
  while (b < f2) {
    B2 = a[b];
    B2 !== void 0 && B2 != null && !Kb(B2) && g2.push(B2);
    b = b + 1;
  }
  var z2 = g2.length | 0;
  if (1 == z2) {
    ab(e2, g2[0]);
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
        c2.push(Ra(v2[B2], i2));
        B2 = B2 + 1;
      }
    }
    b.push(c2);
    g2 = g2 + 1;
  }
  e2 = e2.issues;
  e2.push({ code: nf, errors: b, path: [] });
};
var ca = (l2) => {
  let a = Oa;
  l2 = l2._zod;
  return a[+l2.id | 0];
};
var va = (l2) => {
  if (l2 == null || !X(l2)) return null;
  l2 = l2._zod;
  if (l2 == null || l2.id === void 0) return null;
  l2 = +l2.id | 0;
  return l2 < 0 || l2 >= Oa.length ? null : Oa[l2];
};
var Ic = /* @__PURE__ */ (function() {
  let a = (t2) => {
    if (t2 === void 0) return Ff;
    if (t2 == null && t2 !== void 0) return yg;
    var e2 = typeof t2;
    if (e2 == xe) return true === Number.isNaN(t2) ? Yh : !Ka(t2) ? t2 + "" : xe;
    if (e2 == Xf) {
      if (t2 == null) return yg;
      if (Array.isArray(t2)) return rf;
      e2 = ga.getPrototypeOf(t2);
      if (e2 !== ga.prototype) {
        var C2 = typeof t2.constructor;
        e2 = C2 == we;
      } else {
        e2 = false;
      }
      if (e2) {
        t2 = t2.constructor;
        t2 = t2.name + "";
        if (t2.length > 0) return t2;
      }
      return Xf;
    }
    return e2;
  };
  let b = (T2) => T2 == Vi ? Ce : T2 == Ri ? "email address" : T2 == _g ? "URL" : T2 == Si ? Si : T2 == Jh ? "UUID" : "uuidv4" == T2 ? "UUIDv4" : "uuidv6" == T2 ? "UUIDv6" : "uuidv7" == T2 ? "UUIDv7" : T2 == _h ? _h : T2 == rj ? "GUID" : T2 == qj ? qj : T2 == Qi ? Qi : T2 == xj ? "ULID" : "xid" == T2 ? "XID" : T2 == Sj ? "KSUID" : T2 == vh ? "ISO datetime" : T2 == bg ? "ISO date" : T2 == Fi ? "ISO time" : T2 == di ? "ISO duration" : T2 == sj ? "IPv4 address" : T2 == Hh ? "IPv6 address" : T2 == fj ? "MAC address" : T2 == Dj ? "IPv4 range" : T2 == Ah ? "IPv6 range" : T2 == Hg ? "base64-encoded string" : T2 == Bg ? "base64url-encoded string" : "json_string" == T2 ? "JSON string" : T2 == mk ? "E.164 number" : T2 == Qg ? "credit card number" : T2 == Xh ? "JWT" : T2 == wf ? Ce : T2;
  let c2 = (j2) => {
    return typeof j2 == Ve ? j2 + "n" : typeof j2 == se ? Fh + j2 + Fh : j2 === void 0 ? Ff : j2 == null ? yg : j2 + "";
  };
  let d2 = (e2, h2) => {
    var f2 = e2.length | 0;
    var q2 = jg, g2 = 0;
    while (g2 < f2) {
      g2 > 0 && (q2 = q2 + h2);
      q2 = q2 + c2(e2[g2]);
      g2 = g2 + 1;
    }
    return q2;
  };
  return function(F2) {
    var g2 = F2.code + "";
    if (g2 == mh) {
      var f2 = F2.expected + "";
      f2 == Yh && (f2 = "NaN");
      g2 = a(F2.input);
      g2 == Yh && (g2 = "NaN");
      g2 == xe && typeof F2.input == xe && !Ka(F2.input) && (g2 = F2.input + "");
      return li + f2 + ", received " + g2;
    }
    if (g2 == Rf) {
      F2 = F2.values;
      if (F2 == null || !Array.isArray(F2)) return fh;
      var y2 = F2.length | 0;
      return 1 == y2 ? li + c2(F2[0]) : "Invalid option: expected one of " + d2(F2, "|");
    }
    if (g2 == si) {
      F2.exact ? g2 = Dk : (g2 = F2.inclusive, g2 = false !== g2 ? "<=" : "<");
      var e2 = F2.origin !== void 0 ? F2.origin + "" : pe;
      if (e2 == se) {
        var R2 = "Too big: expected string to have " + g2 + F2.maximum;
        return R2 + Wj;
      }
      if (e2 == rf) {
        var W2 = "Too big: expected array to have " + g2 + F2.maximum;
        return W2 + xi;
      }
      if (e2 == uf) {
        var ba2 = "Too big: expected set to have " + g2 + F2.maximum;
        return ba2 + xi;
      }
      if (e2 == ph) {
        var ia2 = "Too big: expected map to have " + g2 + F2.maximum;
        return ia2 + zk;
      }
      if (e2 == hh) {
        var pa2 = "Too big: expected file to have " + g2 + F2.maximum;
        return pa2 + " bytes";
      }
      g2 = "Too big: expected " + e2 + " to be " + g2;
      return g2 + F2.maximum + "";
    }
    if (g2 == Th) {
      F2.exact ? g2 = Dk : (g2 = F2.inclusive, g2 = false !== g2 ? ">=" : ">");
      e2 = F2.origin !== void 0 ? F2.origin + "" : pe;
      if (e2 == se) {
        var Ta2 = "Too small: expected string to have " + g2 + F2.minimum;
        return Ta2 + Wj;
      }
      if (e2 == rf) {
        var cb2 = "Too small: expected array to have " + g2 + F2.minimum;
        return cb2 + xi;
      }
      if (e2 == uf) {
        var Bb2 = "Too small: expected set to have " + g2 + F2.minimum;
        return Bb2 + xi;
      }
      if (e2 == ph) {
        var Gb2 = "Too small: expected map to have " + g2 + F2.minimum;
        return Gb2 + zk;
      }
      if (e2 == hh) {
        var Lb2 = "Too small: expected file to have " + g2 + F2.minimum;
        return Lb2 + " bytes";
      }
      g2 = "Too small: expected " + e2 + " to be " + g2;
      return g2 + F2.minimum + "";
    }
    if (g2 == If) {
      g2 = F2.format + "";
      if (g2 == ig) {
        F2 = 'Invalid string: must start with "' + F2.prefix;
        return F2 + Fh;
      }
      if (g2 == Dg) {
        F2 = 'Invalid string: must end with "' + F2.suffix;
        return F2 + Fh;
      }
      if (g2 == sf) {
        F2 = 'Invalid string: must include "' + F2.includes;
        return F2 + Fh;
      }
      return g2 == Vi ? "Invalid string: must match pattern " + F2.pattern : "Invalid " + b(g2);
    }
    if (g2 == Sg) return "Invalid number: must be a multiple of " + F2.divisor;
    if (g2 == Ye) {
      F2 = F2.keys;
      var Oc2 = F2.length | 0;
      g2 = Oc2 > 1 ? "s" : jg;
      return "Unrecognized key" + g2 + ": " + d2(F2, ", ");
    }
    if (g2 == yf) return "Invalid key in " + F2.origin;
    if (g2 == nf) {
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
        F2 = jg;
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
      return false === F2 ? "Invalid input: more than one option matched" : fh;
    }
    if (g2 == Wf) return "Invalid value in " + F2.origin;
    if (g2 == af) {
      var ce2 = typeof F2.message;
      return ce2 == se ? F2.message + "" : fh;
    }
    return fh;
  };
})();
var Ra = /* @__PURE__ */ (function() {
  let a = (e2) => {
    if (!(e2 == null)) {
      if (typeof e2 == se) return e2;
      if (X(e2) && typeof e2.message == se) return e2.message;
    }
  };
  let b = (l2) => {
    if (!(l2 == null || !X(l2))) {
      l2 = l2._zod;
      if (!(l2 == null)) {
        l2 = l2.def;
        return l2.error;
      }
    }
  };
  let c2 = (e2, i2) => {
    var D2 = typeof e2.message;
    if (D2 == se) {
      var k2 = (e2.message + "").length;
      var f2 = k2 > 0;
    } else {
      f2 = false;
    }
    if (f2) return e2.message + "";
    f2 = b(e2.inst);
    if (typeof f2 == we) {
      var g2 = a(f2(e2));
      if (g2 !== void 0) return g2 + "";
    }
    if (typeof f2 == se) return f2 + "";
    f2 = e2.schema;
    if (f2 !== e2.inst) {
      f2 = b(e2.schema);
      if (typeof f2 == we) {
        g2 = a(f2(e2));
        if (g2 !== void 0) return g2 + "";
      }
      if (typeof f2 == se) return f2 + "";
    }
    if (i2 !== void 0 && typeof i2.error == we) {
      i2 = i2.error;
      i2 = a(i2(e2));
      if (i2 !== void 0) return i2 + "";
    }
    if (typeof qb == we) {
      i2 = a(qb(e2));
      if (i2 !== void 0) return i2 + "";
    }
    if (typeof Wa == we) {
      i2 = a(Wa(e2));
      if (i2 !== void 0) return i2 + "";
    }
    return Ic(e2);
  };
  let d2 = (e2) => {
    var l2 = e2.inst;
    if (l2 !== void 0) {
      if (l2 != null) {
        if (!!X(l2)) {
          var U2 = l2._zod;
          if (U2 !== void 0) {
            if (U2 != null) {
              U2 = U2.traits;
              if (U2 !== void 0) {
                if (U2 != null) {
                  if (!!U2.has(Wi)) U2.has(Nh) ? e2.schema === void 0 && (e2.schema = l2) : e2.schema = l2;
                }
              }
            }
          }
        }
      }
    }
  };
  return function(e2, i2) {
    d2(e2);
    var j2 = c2(e2, i2);
    var F2 = {};
    var u2 = qa(e2);
    var f2 = u2.length | 0;
    var g2 = 0, h2;
    while (g2 < f2) {
      h2 = u2[g2] + "";
      h2 != Cf && h2 != Nf && h2 != Pe && h2 != Ce && (F2[h2] = e2[h2]);
      g2 = g2 + 1;
    }
    (F2.path === void 0 || F2.path == null) && (F2.path = []);
    F2.message = j2;
    i2 !== void 0 && i2 != null && i2.reportInput && (F2.input = e2.input);
    return F2;
  };
})();
var Fb = (F2, a) => {
  var b = F2.path;
  b == null && (b = [], F2.path = b);
  b.unshift(a);
};
var ya = (a, z2) => {
  var F2 = { expected: a, code: mh, input: z2 };
  a == xe && typeof z2 == xe && (true === Number.isNaN(z2) ? F2.received = "NaN" : Ka(z2) || (F2.received = z2 + ""));
  a == bg && ra(Date, z2) && true === Number.isNaN(z2.getTime()) && (F2.received = "Invalid Date");
  return F2;
};
var Sa = (a, F2, b, c2, d2, z2) => {
  var e2 = a ? si : Th;
  ra(Date, b) && (b = b.getTime());
  F2 = { origin: F2, code: e2 };
  a ? F2.maximum = b : F2.minimum = b;
  Object.assign(F2, { inclusive: c2, input: z2 });
  d2 && (F2.exact = true);
  F2.continue = true;
  return F2;
};
var bb = (e2, a, b, c2, d2, f2, z2) => {
  e2 = e2.issues;
  e2.push(Sa(a, b, c2, d2, f2, z2));
};
var bc = (j2) => typeof j2 == Ve ? j2 + "" : j2;
var cc;
var ea;
var ae;
(function() {
  let a = (j2) => ({ enumerable: false, writable: true, configurable: true, value: j2 });
  let b = (C2) => C2 == lf ? "$ZodCheckMinLength" : C2 == Hf ? "$ZodCheckMaxLength" : C2 == Bf ? "$ZodCheckLengthEquals" : C2 == Ue ? "$ZodCheckGreaterThan" : C2 == ff ? "$ZodCheckLessThan" : C2 == Rg ? "$ZodCheckMultipleOf" : C2 == qg ? "$ZodCheckMinSize" : C2 == Tg ? "$ZodCheckMaxSize" : C2 == hg ? "$ZodCheckSizeEquals" : C2 == sf ? "$ZodCheckIncludes" : C2 == ig ? "$ZodCheckStartsWith" : C2 == Dg ? "$ZodCheckEndsWith" : C2 == Qe ? ah : C2 == kf ? "$ZodCheckOverwrite" : C2 == Rh ? "$ZodCheckMimeType" : C2 == ef ? "$ZodCheckNumberFormat" : C2 == eg ? ah : C2 == fg ? ah : Nh;
  let c2 = (e2) => {
    e2 = e2.value;
    return e2 == null ? false : e2.length !== void 0;
  };
  let d2 = (e2) => {
    e2 = e2.value;
    return e2 == null ? false : e2.size !== void 0;
  };
  cc = function(l2, y2) {
    y2 == null && (y2 = []);
    var U2 = la();
    U2.add(tk);
    U2.add(th);
    l2.name = th;
    aa(l2, oe, a(y2));
    aa(l2, re, a({ def: y2, traits: U2 }));
    aa(l2, Ke, { enumerable: true, configurable: true, get: function() {
      var H2 = this._zod;
      if (H2.message !== void 0) return H2.message;
      var a2 = H2.def;
      H2.message = JSON.stringify(a2, function(B2, D2) {
        return bc(D2);
      }, 2);
      return H2.message;
    }, set: function(j2) {
      let a2 = this._zod;
      a2.message = j2;
    } });
    return l2;
  };
  ea = function(C2, O2) {
    O2.check = C2;
    O2.when === void 0 && (C2 == lf || C2 == Hf || C2 == Bf ? O2.when = function(e3) {
      return c2(e3) ? e3 : void 0;
    } : (C2 == qg || C2 == Tg || C2 == hg) && (O2.when = function(e3) {
      return d2(e3) ? e3 : void 0;
    }));
    var e2 = b(C2);
    C2 = la();
    C2.add(Nh);
    C2.add(e2);
    var H2 = { def: O2, onattach: [], traits: C2 };
    C2 = { def: O2 };
    O2 = (0, function() {
      return C2;
    });
    aa(O2, jh, Ea(e2));
    C2.constructor = O2;
    aa(C2, re, a(H2));
    return C2;
  };
  ae = function(l2, h2, U2) {
    h2.handle = l2;
    var N2 = h2.ctor._zodProto;
    N2 == null && (N2 = {});
    N2 = ga.create(N2);
    Object.assign(N2, { id: h2.id, def: h2.def, bag: {}, version: md, traits: U2, constr: h2.ctor, run: function(e2, i2) {
      return pa(h2, e2, i2);
    }, parse: N2.run });
    Bc(h2) && (N2.memoizer = { recursive: void 0, handoff: void 0, ctx: void 0, bucket: void 0, open: [] });
    aa(N2, Tf, { enumerable: true, configurable: true, get: function() {
      return pb(l2);
    } });
    aa(l2, re, a(N2));
  };
})();
var Jc;
var Gb;
var dc;
(function() {
  let a = (c2, F2) => {
    return typeof c2 == we ? c2(F2) : F2.message;
  };
  let b = (c2, o2, d2) => {
    Ca.call(c2, o2) || Aa(c2, o2, d2());
    return c2[o2];
  };
  Jc = function(F2, c2) {
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
  Gb = function(v2, c2, d2, e2) {
    var f2 = v2.length | 0;
    var g2 = 0, F2, i2, j2, h2, k2, l2, m2;
    while (g2 < f2) {
      F2 = v2[g2];
      h2 = F2.code + "";
      if (h2 == nf && Array.isArray(F2.errors) && (F2.errors.length | 0) > 0) {
        i2 = F2.errors;
        j2 = i2.length | 0;
        h2 = 0;
        while (h2 < j2) {
          k2 = c2.concat(F2.path);
          Gb(i2[h2], k2, d2, e2);
          h2 = h2 + 1;
        }
      } else if (h2 == yf || h2 == Wf) {
        h2 = c2.concat(F2.path);
        Gb(F2.issues, h2, d2, e2);
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
            l2 === Ng ? m2 && (l2 = h2._errors, l2.push(a(e2, F2))) : (h2 = b(h2, l2, function() {
              return { _errors: [] };
            }), m2 && (l2 = h2._errors, l2.push(a(e2, F2))));
            i2 = i2 + 1;
          }
        }
      }
      g2 = g2 + 1;
    }
  };
  dc = function(v2, c2, d2, e2) {
    var f2 = v2.length | 0;
    var g2 = 0, F2, i2, j2, k2, h2, l2, n2;
    while (g2 < f2) {
      F2 = v2[g2];
      h2 = F2.code + "";
      if (h2 == nf && Array.isArray(F2.errors) && (F2.errors.length | 0) > 0) {
        i2 = F2.errors;
        j2 = i2.length | 0;
        h2 = 0;
        while (h2 < j2) {
          k2 = i2[h2];
          dc(k2, c2.concat(F2.path), d2, e2);
          h2 = h2 + 1;
        }
      } else if (h2 == yf || h2 == Wf) {
        h2 = F2.issues;
        dc(h2, c2.concat(F2.path), d2, e2);
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
            typeof i2 == se ? ((h2.properties === void 0 || h2.properties == null) && (h2.properties = {}), h2 = h2.properties, h2 = b(h2, i2, function() {
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
var Kc = (a) => {
  var c2 = [];
  if (!Array.isArray(a)) return jg;
  var f2 = a.length | 0;
  var g2 = 0, b;
  while (g2 < f2) {
    b = a[g2];
    X(b) && b != null && b.key !== void 0 && (b = b.key);
    if (typeof b == xe) {
      b = "[" + b;
      c2.push(b + "]");
    } else if (typeof b == Yf) {
      b = "[" + JSON.stringify(String(b), void 0, void 0);
      c2.push(b + "]");
    } else {
      b = b + "";
      if (Ba($("[^\\w$]", jg), b)) {
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
  return c2.join(jg);
};
var Hb = () => {
  var c2 = globalThis;
  var a = c2.__zod_globalConfig;
  a == null && (a = {}, c2.__zod_globalConfig = a);
  return a;
};
var Rd = () => {
  let a = {};
  aa(a, pe, { enumerable: true, configurable: true, get: function() {
    var b = Hb();
    if (X(b) && !!b.jitless) return false;
    try {
      b = globalThis.Function;
      new b(jg);
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
    var b = jg, g2 = 0, c2, d2;
    while (g2 < f2) {
      c2 = globalThis.String;
      d2 = a2[g2];
      b = b + c2.fromCharCode(d2) + "";
      g2 = g2 + 1;
    }
    return globalThis.btoa(b);
  } };
  Object.assign(a, { base64urlToUint8Array: function(c2) {
    var n2 = c2.replace($("-", Oi), "+");
    var b = n2.replace($("_", Oi), "/");
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
    let b = a.uint8ArrayToBase64, i2 = b(c2).replace($("\\+", Oi), "-"), j2 = i2.replace($("/", Oi), "_");
    return j2.replace($("=", Oi), jg);
  }, hexToUint8Array: function(f2) {
    var b = f2.replace($("^0x", jg), jg);
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
    return c2.join(jg);
  } });
  return a;
};
var Lc = (a, b) => ({ _map: a, _idmap: b, add: function(h2, d2) {
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
    x2.deleteProperty(d2, nh);
    X(e2) && e2 != null && ia(d2, e2);
    var t2 = qa(d2).length | 0;
    return 0 == t2 ? void 0 : d2;
  }
  return e2;
}, has: function(h2) {
  return !!a.has(h2);
} });
var Ta = () => {
  var a = globalThis;
  var b;
  if (a.__zod_globalRegistry !== void 0 && a.__zod_globalRegistry != null) {
    Xa = a.__zod_globalRegistry;
    return Xa;
  }
  Xa === void 0 && (b = /* @__PURE__ */ new WeakMap(), Xa = Lc(b, /* @__PURE__ */ new Map()), a.__zod_globalRegistry = Xa);
  return Xa;
};
var nb = (w2, s2) => {
  var O2 = { check: af };
  X(s2) && s2 != null && ia(O2, s2);
  s2 = ea(af, O2);
  O2 = s2._zod;
  O2.check = w2;
  return s2;
};
var Sd = (a, b) => {
  var c2 = globalThis.Math;
  a = a / b;
  c2 = +c2.round(a);
  b = a < 0 ? 0 - a : a;
  b > 1 || (b = 1);
  var d2 = +Number.EPSILON * b;
  b = a - c2;
  b < 0 && (b = 0 - b);
  return b < d2 ? 0 : a - c2;
};
var wa = (l2, a) => {
  var M2 = ca(l2);
  var k2 = M2.def;
  a !== void 0 && X(a) && (k2 = {}, mb(k2, M2.def), mb(k2, a));
  k2 = new M2.ctor(k2);
  a === void 0 && (a = k2._zod, a.parent = l2);
  return k2;
};
var fa = (l2, a) => {
  var b = ca(l2).def.checks;
  b = b === void 0 || !Array.isArray(b) ? [] : b.slice(0);
  b.push(a);
  a = wa(l2, { checks: b });
  b = a._zod;
  b.parent = l2;
  return a;
};
var ka = (h2, o2) => va(h2.def[o2]);
var ec = (K2) => {
  if (X(K2) && K2._zod !== void 0 && X(K2._zod) && K2._zod.def !== void 0) {
    K2 = K2._zod;
    return K2.def;
  }
  return X(K2) && K2.def !== void 0 ? K2.def : K2;
};
var sa = (e2, T2, a) => {
  var b = {};
  T2 != _g && T2 != Xh && T2 != Hh && T2 != Ah && T2 != wf && (b.origin = se);
  b.code = If;
  b.format = T2;
  a !== void 0 && X(a) && ia(b, a);
  b.continue === void 0 && (b.continue = true);
  e2 = e2.issues;
  e2.push(b);
};
var Ib = (v2, g2, l2) => {
  v2 = v2.issues;
  var f2 = v2.length | 0;
  while (g2 < f2) {
    var a = v2[g2];
    a.inst === void 0 && (a = v2[g2], a.inst = l2);
    g2 = g2 + 1 | 0;
  }
};
var Mc = (G2, e2, z2, l2, R2, a) => {
  var b = e2.issues;
  if ((b.length | 0) == a) {
    if (!G2) {
      G2 = [];
      Array.isArray(R2.path) && (G2 = R2.path, G2 = G2.slice(0));
      G2 = { code: af, input: z2, inst: l2, path: G2 };
      G2.continue = !R2.abort;
      R2.params === void 0 || (G2.params = R2.params);
      e2 = e2.issues;
      e2.push(G2);
    }
  }
};
var Td = (z2) => {
  if (!Ba($("^\\d(?:[ -]?\\d){11,18}$", jg), z2)) return false;
  var f2 = z2.length;
  var b = jg, a = 0, g2;
  while (a < f2) {
    g2 = z2.slice(a, a + 1);
    g2 >= "0" && g2 <= "9" && (b = b + g2);
    a = a + 1;
  }
  g2 = b.length - 1;
  a = 0;
  f2 = false;
  while (g2 >= 0) {
    z2 = +Number(b.slice(g2, g2 + 1 | 0)) | 0;
    if (f2) {
      z2 = z2 * 2 | 0;
      z2 > 9 && (z2 = z2 - 9 | 0);
    }
    a = a + z2 | 0;
    f2 = !f2;
    g2 = g2 - 1;
  }
  while (a >= 10) a = a - 10;
  return 0 == a;
};
var Ud = (a, b) => {
  a = a.split(".");
  var g2 = a.length | 0;
  if (3 != g2) return false;
  a = a[0];
  var c2, d2;
  if (a == null || 0 == (a + "").length) return false;
  try {
    var A2 = globalThis;
    c2 = A2.JSON;
    var B2 = globalThis;
    d2 = B2.atob;
    var D2 = d2(a);
    var E2 = c2.parse(D2);
    var S2 = E2;
    if (!X(S2) || S2 == null) return false;
    if (Ca.call(S2, "typ")) {
      var I2 = S2.typ + "";
      a = "JWT" != I2;
    } else {
      a = false;
    }
    if (a) return false;
    if (S2.alg === void 0) return false;
    if (b !== void 0 && b != null && typeof b == se) {
      var N2 = S2.alg + "";
      if (N2 != b + "") return false;
    }
    return true;
  } catch {
    return false;
  }
};
var Nc = (t2) => {
  if (0 == t2.length) return true;
  if (Ba($("\\s", jg), t2)) return false;
  var a = 0, g2 = 0;
  while (g2 < t2.length) {
    a = a + 1 | 0;
    4 == a && (a = 0);
    g2 = g2 + 1;
  }
  if (0 != a) return false;
  try {
    a = globalThis.atob;
    a(t2);
    return true;
  } catch {
    return false;
  }
};
var Vd = (t2) => {
  if (!Ba($("^[A-Za-z0-9_-]*$", jg), t2)) return false;
  var p2 = t2.replace($("-", Oi), "+");
  t2 = p2.replace($("_", Oi), "/") + "";
  var a = 0, g2 = 0;
  while (g2 < t2.length) {
    a = a + 1 | 0;
    4 == a && (a = 0);
    g2 = g2 + 1;
  }
  1 == a && (t2 = t2 + "===");
  2 == a && (t2 = t2 + "==");
  3 == a && (t2 = t2 + "=");
  return Nc(t2);
};
var Oc = (j2) => {
  if (!Ba($("^[0-9a-fA-F:.]+$", jg), j2)) return false;
  try {
    new URL("http://[" + j2 + "]");
    return true;
  } catch {
    return false;
  }
};
var Wd = (j2) => {
  j2 = j2.split("/");
  var e2 = j2.length | 0;
  if (2 != e2) return false;
  var a = j2[1] + "";
  if (0 == a.length) return false;
  var b = Number(a);
  if (b + "" != a) return false;
  a = +b;
  return a < 0 ? false : a > 128 ? false : Oc(j2[0] + "");
};
var Xd = (R2, e2, j2) => {
  var a = j2.trim();
  if (!R2.normalize && R2.protocol !== void 0 && R2.protocol != null) {
    if (!Ba($("^https?:\\/\\/", ej), a)) {
      sa(e2, _g, void 0);
      return;
    }
  }
  var ka2;
  try {
    ka2 = new URL(a);
  } catch {
    sa(e2, _g, void 0);
    return;
  }
  R2.hostname !== void 0 && R2.hostname != null && (j2 = R2.hostname, j2.lastIndex = 0, Ba(j2, ka2.hostname + "") || sa(e2, _g, { note: "Invalid hostname", pattern: j2.source }));
  if (R2.protocol !== void 0 && R2.protocol != null) {
    var N2 = R2.protocol;
    j2 = ka2.protocol + "";
    j2.endsWith(":") && (j2 = j2.slice(0, j2.length - 1));
    N2.lastIndex = 0;
    Ba(N2, j2) || sa(e2, _g, { note: "Invalid protocol", pattern: N2.source });
  }
  e2.value = a.replace($("[\\t\\n\\r]", Oi), jg) + "";
  !R2.normalize || (e2.value = ka2.href);
};
var Pc = (K2, e2, i2) => {
  var j2;
  if (X(K2) && X(K2._zod) && typeof K2._zod.check == we) {
    j2 = K2._zod;
    j2 = j2.check.call(K2, e2);
    if (da(j2)) {
      if (i2 !== void 0 && false === i2.async) throw new Error(ve);
      e2.$pending = j2;
    }
    return;
  }
  var R2 = ec(K2);
  var x2 = R2.check + "";
  j2 = e2.value;
  var b, c2, d2;
  if (x2 == lf || x2 == Hf || x2 == Bf) {
    i2 = typeof j2 == se;
    if (!i2 && !Array.isArray(j2)) return;
    K2 = j2.length;
    i2 && (K2 = Array.from(j2).length);
    i2 = Array.isArray(j2) ? rf : se;
    if (x2 == lf && K2 < +R2.minimum) {
      b = e2.issues;
      var Dn = +R2.minimum;
      b.push(Sa(false, i2, Dn, true, false, j2));
    }
    if (x2 == Hf && K2 > +R2.maximum) {
      b = e2.issues;
      var Gn = +R2.maximum;
      b.push(Sa(true, i2, Gn, true, false, j2));
    }
    x2 == Bf && K2 != R2.length && (K2 < R2.length ? (K2 = e2.issues, K2.push(Sa(false, i2, R2.length, true, true, j2))) : (K2 = e2.issues, K2.push(Sa(true, i2, R2.length, true, true, j2))));
    return;
  }
  if (x2 == qg || x2 == Tg || x2 == hg) {
    if (Array.isArray(j2)) K2 = j2.length;
    else if (X(j2) && j2.size !== void 0) K2 = +j2.size;
    else {
      return;
    }
    i2 = Array.isArray(j2) ? rf : uf;
    ra(Map, j2) && (i2 = ph);
    b = globalThis.File;
    b !== void 0 && ra(b, j2) && (i2 = hh);
    x2 == qg && K2 < +R2.minimum && (b = R2.minimum, bb(e2, false, i2, b, true, false, j2));
    x2 == Tg && K2 > +R2.maximum && (b = R2.maximum, bb(e2, true, i2, b, true, false, j2));
    x2 == hg && K2 != +R2.size && (K2 < +R2.size ? (K2 = R2.size, bb(e2, false, i2, K2, true, true, j2)) : bb(e2, true, i2, R2.size, true, true, j2));
    return;
  }
  if (x2 == Ue || x2 == ff) {
    if (typeof j2 != xe && !ra(Date, j2) && typeof j2 != Ve) return;
    K2 = R2.value;
    i2 = R2.inclusive;
    b = false !== i2;
    i2 = ra(Date, j2) ? bg : xe;
    typeof j2 == Ve && (i2 = Ve);
    R2.origin === void 0 || (i2 = R2.origin + "");
    if (x2 == Ue) {
      R2 = j2 > K2;
      b && (R2 = j2 >= K2);
      if (R2) return;
      bb(e2, false, i2, K2, b, false, j2);
    } else {
      R2 = j2 < K2;
      b && (R2 = j2 <= K2);
      if (R2) return;
      bb(e2, true, i2, K2, b, false, j2);
    }
    return;
  }
  if (x2 == Rg) {
    if (typeof j2 == Ve) {
      K2 = j2 % R2.value;
      K2 === BigInt(0) || (K2 = e2.issues, e2 = R2.value, K2.push({ code: Sg, divisor: e2, path: [] }));
      return;
    }
    if (typeof j2 != xe) return;
    K2 = +j2;
    var Xk2 = Sd(K2, +R2.value);
    0 != Xk2 && (K2 = e2.issues, e2 = R2.value, K2.push({ origin: xe, code: Sg, divisor: e2, input: j2 }));
    return;
  }
  if (x2 == ef) {
    K2 = R2.format + "";
    K2 == ri && true !== Number.isSafeInteger(j2) && (+j2 > 0 ? (i2 = e2.issues, i2.push(Sa(true, xe, 9007199254740991, true, false, j2))) : (i2 = e2.issues, i2.push(Sa(false, xe, -9007199254740991, true, false, j2))));
    (K2 == Ti || K2 == ri || K2 == Zg) && (true === Number.isInteger(j2) || (i2 = e2.issues, i2.push(ya(Zg, j2))));
    "finite" == K2 && !Ka(j2) && (K2 = e2.issues, K2.push(ya(xe, j2)));
    return;
  }
  if (x2 == sf) {
    if (typeof j2 != se) return;
    i2 = j2 + "";
    j2 = R2.includes + "";
    K2 = i2.includes(j2);
    var yo = typeof R2.position;
    yo == xe && (K2 = i2.slice(+R2.position | 0).includes(j2));
    if (K2) return;
    sa(e2, sf, { includes: R2.includes });
    return;
  }
  if (x2 == ig) {
    if (typeof j2 != se) return;
    if (j2.startsWith(R2.prefix + "")) return;
    sa(e2, ig, { prefix: R2.prefix });
    return;
  }
  if (x2 == Dg) {
    if (typeof j2 != se) return;
    if (j2.endsWith(R2.suffix + "")) return;
    sa(e2, Dg, { suffix: R2.suffix });
    return;
  }
  if (x2 == Qe || x2 == eg || x2 == fg) {
    if (typeof j2 != se) return;
    K2 = j2 + "";
    var a = x2;
    x2 == Qe && (a = R2.format + "");
    if (a == eg && K2 != K2.toLowerCase()) {
      sa(e2, eg, void 0);
      return;
    }
    if (a == fg && K2 != K2.toUpperCase()) {
      sa(e2, fg, void 0);
      return;
    }
    if (a == _g) {
      Xd(R2, e2, j2);
      return;
    }
    if (a == Qg) {
      if (Td(K2)) return;
      sa(e2, Qg, void 0);
      return;
    }
    if (a == Xh) {
      if (Ud(K2, R2.alg)) return;
      j2 = { code: If, format: Xh, input: j2 };
      R2.alg !== void 0 && R2.alg != null && (j2.algorithm = R2.alg);
      K2 = e2.issues;
      K2.push(j2);
      return;
    }
    if (a == Hg) {
      if (Nc(K2)) return;
      sa(e2, Hg, void 0);
      return;
    }
    if (a == Bg) {
      if (Vd(K2)) return;
      sa(e2, Bg, void 0);
      return;
    }
    if (a == Hh) {
      if (Oc(K2)) return;
      sa(e2, Hh, void 0);
      return;
    }
    if (a == Ah) {
      Wd(K2) || sa(e2, Ah, void 0);
      return;
    }
    var Qo = typeof R2.fn;
    if (Qo == we) {
      K2 = R2.fn;
      K2 = K2(j2);
      if (da(K2)) {
        e2.$pending = K2.then(function(p2) {
          if (!p2) {
            var b2 = e2.issues;
            p2 = a;
            b2.push({ code: If, format: p2, input: j2, continue: !R2.abort });
          }
          return e2;
        });
        return;
      }
      if (K2) return;
      K2 = e2.issues;
      e2 = a;
      K2.push({ code: If, format: e2, input: j2, continue: !R2.abort });
      return;
    }
    if (R2.pattern !== void 0) {
      i2 = R2.pattern;
      i2.lastIndex = 0;
      if (Ba(R2.pattern, K2)) return;
      K2 = R2.pattern;
      sa(e2, a, { pattern: K2.toString() });
    }
    return;
  }
  if (x2 == Rh) {
    K2 = R2.mime;
    if (!Array.isArray(K2)) return;
    x2 = j2.type + "";
    R2 = K2.length | 0;
    i2 = 0;
    while (i2 < R2) {
      if (K2[i2] + "" == x2) return;
      i2 = i2 + 1;
    }
    i2 = j2.type;
    e2 = e2.issues;
    e2.push({ code: Rf, values: K2, input: i2 });
    return;
  }
  if (x2 == Wg) {
    K2 = va(R2.schema);
    if (K2) {
      i2 = ta(K2, j2[R2.property], i2).issues;
      j2 = i2.length | 0;
      K2 = 0;
      while (K2 < j2) {
        x2 = i2[K2];
        Fb(x2, R2.property);
        x2 = e2.issues;
        b = i2[K2];
        x2.push(b);
        K2 = K2 + 1;
      }
    }
    return;
  }
  if (x2 == kf) {
    var Zo = typeof R2.transform;
    Zo == we && (K2 = R2.transform, e2.value = K2(j2));
    return;
  }
  if (x2 == af) {
    x2 = void 0;
    X(K2._zod) && (x2 = K2._zod, x2 = x2.bag);
    if (X(x2) && x2.Class !== void 0) {
      if (ra(x2.Class, j2)) return;
      K2 = e2.issues;
      e2 = x2.Class;
      K2.push(ya(e2.name + "", j2));
      return;
    }
    var cp = typeof R2.fn;
    if (cp != we) return;
    x2 = e2.issues;
    b = { value: j2, issues: x2 };
    b.addIssue = function(p2) {
      typeof p2 == se ? p2 = { message: p2, code: af, input: j2, inst: K2 } : (!p2.fatal || (p2.continue = false), p2.code === void 0 && (p2.code = af), true === "input" in p2 || (p2.input = j2), p2.inst === void 0 && (p2.inst = K2), p2.continue === void 0 && (p2.continue = !R2.abort));
      x2.push(p2);
    };
    c2 = x2.length | 0;
    d2 = R2.fn;
    b = d2(j2, b);
    if (da(b)) {
      if (i2 !== void 0 && false === i2.async) throw new Error(ve);
      e2.$pending = b.then(function(G2) {
        Mc(G2, e2, j2, K2, R2, c2);
        return e2;
      });
      return;
    }
    Mc(b, e2, j2, K2, R2, c2);
    return;
  }
};
var Jb = (e2) => {
  var a = e2.$pending;
  if (da(a)) {
    Reflect.deleteProperty(e2, Ze);
    return a;
  }
};
var Kb = (g2) => {
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
var Yd = (g2) => {
  if (g2.aborted) return true;
  var v2 = g2.issues;
  var f2 = v2.length | 0;
  g2 = 0;
  while (g2 < f2) {
    var a = v2[g2];
    a = a.continue;
    if (false === a) return true;
    g2 = g2 + 1;
  }
  return false;
};
var Qc = (v2, g2, l2) => {
  v2 = v2.issues;
  var f2 = v2.length | 0;
  while (g2 < f2) {
    var a = v2[g2];
    a.schema === void 0 && (a = v2[g2], a.schema = l2);
    g2 = g2 + 1 | 0;
  }
};
var fc = (h2, e2, i2, g2) => {
  var a = h2.def.checks;
  var K2, f2, R2, b;
  if (a === void 0 || !Array.isArray(a)) return e2;
  f2 = a.length | 0;
  while (g2 < f2) {
    K2 = a[g2];
    R2 = ec(K2);
    var A2 = typeof R2.when;
    if (A2 == we) {
      if (Yd(e2)) {
        g2 = g2 + 1 | 0;
        continue;
      }
      R2 = R2.when;
      if (!R2(e2)) {
        g2 = g2 + 1 | 0;
        continue;
      }
    } else if (Kb(e2)) {
      g2 = g2 + 1 | 0;
      continue;
    }
    R2 = e2.issues;
    R2 = R2.length | 0;
    Pc(K2, e2, i2);
    g2 = g2 + 1 | 0;
    b = Jb(e2);
    if (da(b)) return b.then(/* @__PURE__ */ ((a2, b2, c2, d2, f3, j2) => function(m2) {
      let l2 = a2.handle;
      Ib(b2, f3, d2);
      Qc(b2, f3, l2);
      return fc(a2, b2, c2, j2);
    })(h2, e2, i2, K2, R2, g2));
    b = h2.handle;
    Ib(e2, R2, K2);
    Qc(e2, R2, b);
  }
  return e2;
};
var pa;
var Rc;
var pb;
(function() {
  let a = (U2) => {
    if (U2 == null) return false;
    var aa2 = U2.direction + "";
    return aa2 == uh;
  };
  let b = (U2) => {
    if (Array.isArray(U2)) return U2.slice(0);
    if (ra(Map, U2)) return new Map(U2);
    if (ra(Set, U2)) return new Set(U2);
    if (X(U2) && !Array.isArray(U2) && !ra(Date, U2)) {
      var V2 = ga.getPrototypeOf(U2);
      if (V2 == null || V2 === ga.prototype) return ia({}, U2);
    }
    return U2;
  };
  let c2 = (U2) => {
    U2 = U2.def.defaultValue;
    typeof U2 == we && (U2 = U2());
    return b(U2);
  };
  let d2 = (U2) => {
    var W2 = 0, V2;
    while (29 == U2.kind && W2 < 64) {
      V2 = void 0;
      X(U2.handle) && X(U2.handle._zod) && (V2 = U2.handle._zod, V2 = V2.innerType);
      if (V2 == null) {
        V2 = U2.def.getter;
        if (typeof V2 != we) break;
        V2 = V2();
      }
      V2 = va(V2);
      V2 ? (U2 = V2, W2 = W2 + 1 | 0) : W2 = 64;
    }
    return U2;
  };
  let e2 = (U2, V2, W2) => {
    W2 = !W2.abort;
    U2 = U2.issues;
    var X2 = U2.length | 0;
    while (V2 < X2) {
      var _2 = U2[V2];
      _2.continue = W2;
      V2 = V2 + 1 | 0;
    }
  };
  let f2 = (U2, V2, Hk2) => {
    if (V2.memo) return V2;
    Ib(V2, 0, U2.handle);
    var dl2 = typeof U2.def.check;
    if (dl2 == se) {
      var Ik2 = V2.issues;
      Ik2 = Ik2.length | 0;
      Pc(U2.handle, V2, Hk2);
      Ib(V2, Ik2, U2.handle);
      e2(V2, Ik2, U2.def);
      var Jk2 = Jb(V2);
      if (da(Jk2)) return Jk2.then(function(c3) {
        return fc(U2, V2, Hk2, 0);
      });
      if (U2.def.abort) {
        Jk2 = V2.issues;
        if ((Jk2.length | 0) > Ik2) return V2;
      }
    }
    return fc(U2, V2, Hk2, 0);
  };
  let g2 = (U2, V2, W2) => f2(U2, V2, W2);
  let h2 = (U2) => {
    var V2 = U2.$waits;
    if (V2 === void 0 || !Array.isArray(V2)) return U2;
    Reflect.deleteProperty(U2, yi);
    var Kk2 = V2.length | 0;
    return 0 == Kk2 ? U2 : Promise.all(V2).then(function(a2) {
      return U2;
    });
  };
  let i2 = (U2, V2, W2) => {
    if (da(V2)) {
      var X2 = U2.$waits;
      (X2 === void 0 || !Array.isArray(X2)) && (X2 = [], U2.$waits = X2);
      X2.push(V2.then(W2));
    } else W2(V2);
  };
  let j2 = (U2, V2, Hk2) => {
    var Ik2 = Jb(V2);
    if (da(Ik2)) return Ik2.then(function(c3) {
      return j2(U2, V2, Hk2);
    });
    Ik2 = h2(V2);
    if (da(Ik2)) return Ik2.then(function(p3) {
      Ec(U2, p3);
      return g2(U2, p3, Hk2);
    });
    Ec(U2, V2);
    return g2(U2, V2, Hk2);
  };
  let k2 = (U2) => {
    var ba2 = typeof U2.def.check;
    if (ba2 == se) return true;
    U2 = U2.def.checks;
    if (Array.isArray(U2)) {
      var aa2 = U2.length | 0;
      U2 = aa2 > 0;
    } else {
      U2 = false;
    }
    return U2 ? true : false;
  };
  let l2 = (U2, V2, Hk2) => {
    if (32 == U2.kind || 31 == U2.kind) return S2(U2, V2, Hk2);
    Rc(U2, V2, Hk2);
    U2 = Jb(V2);
    return da(U2) ? U2.then(function(c3) {
      return h2(V2);
    }) : h2(V2);
  };
  let m2 = (U2, V2, Hk2, Ik2) => {
    if (Kb(V2)) {
      V2.aborted = true;
      return V2;
    }
    V2 = f2(U2, Hk2, Ik2);
    if (da(V2)) {
      if (Ik2 !== void 0 && false === Ik2.async) throw new Error(ve);
      return V2.then(function(p3) {
        return l2(U2, p3, Ik2);
      });
    }
    return l2(U2, V2, Ik2);
  };
  let n2 = (U2, V2, W2) => {
    U2 = U2.issues;
    U2.push(ya(V2, W2));
  };
  let o2 = (U2) => {
    return typeof U2 != xe ? false : true === Number.isNaN(U2) ? false : !Ka(U2) ? false : true;
  };
  let p2 = (U2) => {
    return typeof U2 != xe ? false : true === Number.isNaN(U2);
  };
  let q2 = (U2) => U2 === void 0 ? false : U2 == null;
  let r2 = (U2) => {
    return !ra(Date, U2) ? false : true === Number.isNaN(U2.getTime()) ? false : true;
  };
  let s2 = (U2) => {
    var V2 = U2.issues;
    var _2 = V2.length | 0;
    if (0 != _2) {
      V2 = U2.issues;
      V2.length = 0;
      Object.assign(U2, { value: void 0, aborted: false });
    }
  };
  let t2 = (U2, V2, W2) => {
    var X2 = U2.issues;
    var da2 = X2.length | 0;
    if (0 != da2) {
      X2 = V2.def.catchValue;
      X2 === void 0 && (X2 = V2.def.defaultValue);
      if (typeof X2 == we) {
        var _2 = [];
        var $2 = U2.issues;
        var aa2 = $2.length | 0;
        V2 = 0;
        while (V2 < aa2) {
          _2.push(Ra($2[V2], W2));
          V2 = V2 + 1;
        }
        V2 = U2.value;
        W2 = U2.issues;
        X2 = X2({ value: V2, issues: W2, error: { issues: _2 }, input: U2.value });
      }
      U2.value = X2;
      V2 = U2.issues;
      V2.length = 0;
      U2.aborted = false;
    }
  };
  let u2 = (U2) => {
    if (0 == (U2.issues.length | 0) && U2.value === void 0) {
      var V2 = U2.issues;
      V2.push({ code: mh, expected: zf, input: U2.value });
    }
  };
  let v2 = (U2, V2) => {
    da(V2) && (U2.$pending = V2);
  };
  let w2 = (U2, V2, Hk2) => {
    var Ik2 = V2.value;
    if (!Array.isArray(Ik2)) {
      U2 = V2.issues;
      U2.push(ya(rf, Ik2));
      return;
    }
    var Lk2 = ka(U2, Pg);
    var Kk2 = $a(U2, V2, []);
    var Mk2 = Ik2.length | 0;
    var Jk2 = 0, Nk2, Ok2;
    while (Jk2 < Mk2) {
      Lk2 ? (Nk2 = +(0 + Jk2), Ok2 = Ik2[Jk2], i2(V2, ta(Lk2, Ok2, Hk2), /* @__PURE__ */ ((a2, b2, c3, d3) => function(E3) {
        ac(b2, c3, d3, E3);
      })(U2, V2, Kk2, Nk2))) : (Ok2 = Ik2[Jk2], Kk2.push(Ok2));
      Jk2 = Jk2 + 1;
    }
    V2.value = Kk2;
  };
  let x2 = (U2, V2) => {
    var aa2 = U2.length | 0;
    var W2 = aa2 - 1 | 0;
    while (W2 >= 0) {
      var X2 = va(U2[W2]);
      X2 = X2 && (V2 ? 0 != X2.optin : 1 == X2.optout);
      if (!X2) return W2 + 1 | 0;
      W2 = W2 - 1;
    }
    return 0;
  };
  let y2 = (V2, Hk2, Ik2) => {
    var Kk2 = Hk2.value;
    if (!Array.isArray(Kk2)) {
      V2 = Hk2.issues;
      V2.push(ya(mi, Kk2));
      return;
    }
    var U2 = V2.def.items;
    Array.isArray(U2) || (U2 = []);
    var Nk2 = Kk2.length | 0;
    var Lk2 = U2.length | 0;
    var Jk2 = x2(U2, true);
    var Sk2 = x2(U2, false);
    var Pk2 = ka(V2, "rest");
    if (!Pk2) {
      if (Nk2 < Jk2) {
        V2 = Hk2.issues;
        V2.push(Fc(false, Jk2, Kk2));
        return;
      }
      Nk2 > Lk2 && (Jk2 = Hk2.issues, Jk2.push(Fc(true, Lk2, Kk2)));
    }
    var Qk2 = $a(V2, Hk2, []);
    Hk2.value = Qk2;
    var Mk2 = [];
    var Ok2 = [];
    Jk2 = 0;
    while (Jk2 < Lk2) {
      Mk2.push(void 0);
      Jk2 = Jk2 + 1;
    }
    Jk2 = 0;
    while (Jk2 < Lk2) {
      var Tk2 = { i: 0 + Jk2 };
      var tl2 = va(U2[Jk2]);
      var Rk2 = Kk2[Jk2];
      Rk2 = ta(tl2, Rk2, Ik2);
      da(Rk2) ? Ok2.push(Rk2.then(/* @__PURE__ */ ((a2, b2) => function(E3) {
        a2[b2.i] = E3;
      })(Mk2, Tk2))) : Mk2[Jk2] = Rk2;
      Jk2 = Jk2 + 1;
    }
    if (Nk2 > Lk2 && Pk2) while (Jk2 < Nk2) {
      Rk2 = { i: 0 + Jk2 };
      Lk2 = Kk2[Jk2];
      Lk2 = ta(Pk2, Lk2, Ik2);
      da(Lk2) ? Ok2.push(Lk2.then(/* @__PURE__ */ ((a2, b2, c3, d3) => function(E3) {
        ac(b2, c3, d3.i, E3);
      })(V2, Hk2, Qk2, Rk2))) : ac(Hk2, Qk2, Rk2.i, Lk2);
      Jk2 = Jk2 + 1 | 0;
    }
    var Kl2 = Ok2.length | 0;
    if (Kl2 > 0) {
      Hk2.$pending = Promise.all(Ok2).then(function(f3) {
        Gc(Hk2, U2, Kk2, Mk2, Sk2);
        return Hk2;
      });
      return;
    }
    Gc(Hk2, U2, Kk2, Mk2, Sk2);
  };
  let z2 = (U2, V2, Hk2) => {
    var Ik2 = V2.value;
    var Jk2, Kk2, Pk2, Mk2, Qk2, Nk2, Ok2, Tk2, Uk2, Rk2, Vk2, Wk2, Lk2, Sk2;
    if (!X(Ik2) || Array.isArray(Ik2)) {
      U2 = V2.issues;
      U2.push(ya(Xf, Ik2));
      return;
    }
    Kk2 = U2.def.shape;
    Kk2 == null && (Kk2 = {});
    Pk2 = qa(Kk2);
    Mk2 = $a(U2, V2, {});
    Qk2 = Pk2.length | 0;
    Jk2 = 0;
    while (Jk2 < Qk2) {
      Lk2 = Pk2[Jk2] + "";
      if (Lk2 == Ef) {
        Jk2 = Jk2 + 1;
        continue;
      }
      Nk2 = va(Reflect.get(Kk2, Lk2));
      !Nk2 || (Sk2 = true === Lk2 in Ik2, Ok2 = void 0, Sk2 && (Ok2 = Ik2[Lk2]), Ok2 = ob(Nk2, Ok2, Hk2), Tk2 = Id(Nk2), Uk2 = Jd(Nk2), i2(V2, Ok2, /* @__PURE__ */ ((a2, b2, c3, d3, e3, f3, g3) => function(E3) {
        Kd(b2, c3, d3, e3, f3, g3, E3);
      })(U2, V2, Mk2, Lk2, Sk2, Tk2, Uk2)));
      Jk2 = Jk2 + 1;
    }
    Jk2 = U2.def.catchall;
    if (Jk2 !== void 0 && Jk2 != null) {
      Nk2 = va(Jk2);
      Ok2 = [];
      Rk2 = qa(Ik2);
      Vk2 = Rk2.length | 0;
      Qk2 = 0;
      while (Qk2 < Vk2) {
        Jk2 = Rk2[Qk2] + "";
        if (!Ca.call(Kk2, Jk2)) if (Jk2 == Ef) !Nk2 || 11 == Nk2.kind && Ok2.push(Jk2);
        else if (Nk2) {
          Pk2 = Nk2;
          if (11 == Pk2.kind) Ok2.push(Jk2);
          else {
            Pk2 = ob(Pk2, Ik2[Jk2], Hk2);
            Wk2 = Pk2.issues;
            var Hl2 = Wk2.length | 0;
            Hl2 > 0 ? (Pk2 = Pk2.issues, Wk2 = V2.issues, Ua(Pk2, Wk2, Jk2)) : Mk2[Jk2] = Pk2.value;
          }
        } else {
          Mk2[Jk2] = Ik2[Jk2];
        }
        Qk2 = Qk2 + 1;
      }
      var Ol2 = Ok2.length | 0;
      Ol2 > 0 && (Hk2 = V2.issues, Hk2.push({ code: Ye, keys: Ok2, input: Ik2, path: [], continue: true }));
    }
    V2.value = Mk2;
  };
  let A2 = (U2) => {
    if (!X(U2) || Array.isArray(U2)) return false;
    U2 = ga.getPrototypeOf(U2);
    return U2 == null ? true : U2 === ga.prototype;
  };
  let B2 = (U2) => {
    if (typeof U2 != se) return false;
    var V2 = Number(U2);
    return typeof V2 != xe || !Ka(V2) ? false : V2 + "" == U2 + "";
  };
  let C2 = (U2, V2, W2, X2) => {
    var _2 = X2.issues;
    var ba2 = _2.length | 0;
    ba2 > 0 && (_2 = X2.issues, U2 = U2.issues, Ua(_2, U2, W2));
    Aa(V2, W2, X2.value);
  };
  let D2 = (U2, V2, Hk2) => {
    var Jk2 = V2.value;
    if (!A2(Jk2)) {
      n2(V2, Ig, Jk2);
      return;
    }
    var Mk2 = $a(U2, V2, {});
    V2.value = Mk2;
    var Qm = typeof U2.def.mode;
    if (Qm == se) {
      var Sm = U2.def.mode + "";
      var Ik2 = Sm == Tj;
    } else {
      Ik2 = false;
    }
    var Tk2 = Ik2, Kk2, Nk2, Rk2, Pk2, Sk2, Ok2, Qk2, Uk2, Lk2, Vk2, Wk2;
    Kk2 = !!U2.def.partial;
    Nk2 = ka(U2, Dh);
    Rk2 = ka(U2, Qf);
    U2 = void 0;
    !Nk2 || (Ik2 = Nk2, Ik2.values === void 0 || (U2 = Array.from(Ik2.values)));
    if (U2 !== void 0 && Array.isArray(U2) && !Kk2) {
      Pk2 = la();
      Sk2 = U2.length | 0;
      Ik2 = 0;
      while (Ik2 < Sk2) {
        Kk2 = U2[Ik2];
        Ok2 = typeof Kk2;
        if (Ok2 != se) {
          if (Ok2 != xe) {
            if (Ok2 != Yf) {
              Ik2 = Ik2 + 1;
              continue;
            }
          }
        }
        typeof Kk2 == xe && (Kk2 = Kk2 + "");
        Pk2.add(Kk2);
        if (typeof Kk2 == se && Kk2 + "" == Ef) {
          Ik2 = Ik2 + 1;
          continue;
        }
        Kk2 = ta(Nk2, U2[Ik2], Hk2);
        if (da(Kk2)) {
          Ik2 = Ik2 + 1;
          continue;
        }
        Ok2 = Kk2.issues;
        var xl2 = Ok2.length | 0;
        if (xl2 > 0) {
          Qk2 = [];
          Ok2 = Kk2.issues;
          Uk2 = Ok2.length | 0;
          Ok2 = 0;
          while (Ok2 < Uk2) {
            Qk2.push(Ra(Kk2.issues[Ok2], Hk2));
            Ok2 = Ok2 + 1;
          }
          Kk2 = [];
          Ok2 = U2[Ik2];
          Kk2.push(Ok2);
          Ok2 = V2.issues;
          Uk2 = U2[Ik2];
          Ok2.push({ code: yf, origin: Ig, issues: Qk2, input: Uk2, path: Kk2 });
          Ik2 = Ik2 + 1;
          continue;
        }
        Lk2 = Kk2.value;
        if (typeof Lk2 == se && Lk2 + "" == Ef) {
          Ik2 = Ik2 + 1;
          continue;
        }
        Kk2 = U2[Ik2];
        i2(V2, ta(Rk2, Reflect.get(Jk2, Kk2), Hk2), /* @__PURE__ */ ((a2, b2, c3) => function(E3) {
          C2(a2, b2, c3, E3);
        })(V2, Mk2, Lk2));
        Ik2 = Ik2 + 1;
      }
      Hk2 = [];
      Kk2 = qa(Jk2);
      Nk2 = Kk2.length | 0;
      Ik2 = 0;
      while (Ik2 < Nk2) {
        U2 = Kk2[Ik2];
        Pk2.has(U2) || (Tk2 ? U2 + "" != Ef && (Mk2[U2] = Jk2[U2]) : Hk2.push(U2));
        Ik2 = Ik2 + 1;
      }
      var Xl2 = Hk2.length | 0;
      Xl2 > 0 && (U2 = V2.issues, U2.push({ code: Ye, keys: Hk2, input: Jk2, continue: true }));
      return;
    }
    Ok2 = [];
    Uk2 = Reflect.ownKeys(Jk2);
    Vk2 = Uk2.length | 0;
    Lk2 = 0;
    while (Lk2 < Vk2) {
      Ik2 = Uk2[Lk2];
      if (typeof Ik2 == se && Ik2 + "" == Ef) {
        Lk2 = Lk2 + 1;
        continue;
      }
      Kk2 = ga.prototype;
      if (!Kk2.propertyIsEnumerable.call(Jk2, Ik2)) {
        Lk2 = Lk2 + 1;
        continue;
      }
      Kk2 = ta(Nk2, Ik2, Hk2);
      if (!da(Kk2)) {
        Pk2 = Kk2.issues;
        var im = Pk2.length | 0;
        Pk2 = im > 0;
      } else {
        Pk2 = false;
      }
      if (Pk2 && B2(Ik2)) {
        Pk2 = ta(Nk2, Number(Ik2), Hk2);
        if (!da(Pk2)) {
          Sk2 = Pk2.issues;
          var nm = Sk2.length | 0;
          Sk2 = 0 == nm;
        } else {
          Sk2 = false;
        }
        Sk2 && (Kk2 = Pk2);
      }
      if (da(Kk2)) Pk2 = true;
      else {
        Pk2 = Kk2.issues;
        var rm = Pk2.length | 0;
        Pk2 = rm > 0;
      }
      if (Pk2) {
        if (Tk2) Mk2[Ik2] = Jk2[Ik2];
        else if (U2 !== void 0) Ok2.push(Ik2);
        else {
          Sk2 = [];
          if (!da(Kk2)) {
            Pk2 = Kk2.issues;
            Wk2 = Pk2.length | 0;
            Pk2 = 0;
            while (Pk2 < Wk2) {
              Sk2.push(Ra(Kk2.issues[Pk2], Hk2));
              Pk2 = Pk2 + 1;
            }
          }
          Kk2 = [];
          Kk2.push(Ik2);
          Pk2 = V2.issues;
          Pk2.push({ code: yf, origin: Ig, issues: Sk2, input: Ik2, path: Kk2 });
        }
        Lk2 = Lk2 + 1;
        continue;
      }
      Qk2 = Kk2.value;
      if (typeof Qk2 == se && Qk2 + "" == Ef) {
        Lk2 = Lk2 + 1;
        continue;
      }
      i2(V2, ta(Rk2, Jk2[Ik2], Hk2), /* @__PURE__ */ ((a2, b2, c3) => function(E3) {
        C2(a2, b2, c3, E3);
      })(V2, Mk2, Qk2));
      Lk2 = Lk2 + 1;
    }
    var Nm = Ok2.length | 0;
    Nm > 0 && (U2 = V2.issues, U2.push({ code: Ye, keys: Ok2, input: Jk2, continue: true }));
  };
  let E2 = (U2, V2) => {
    var X2 = [];
    var _2 = U2.length | 0;
    var W2 = 0;
    while (W2 < _2) {
      X2.push(Ra(U2[W2], V2));
      W2 = W2 + 1;
    }
    return X2;
  };
  let F2 = (U2, V2, Hk2) => {
    var Jk2 = V2.value;
    var Lk2 = U2.def.options;
    Array.isArray(Lk2) || (Lk2 = []);
    var im = typeof U2.def.discriminator;
    var Ik2 = im == se ? U2.def.discriminator + "" : jg;
    var Ok2 = Lk2.length | 0;
    if (Ik2.length > 0) {
      if (!X(Jk2) || Array.isArray(Jk2)) {
        U2 = V2.issues;
        U2.push(ya(Xf, Jk2));
        return;
      }
      var Mk2 = Tc(U2);
      var Kk2 = Jk2[Ik2];
      Kk2 = Mk2.get(Kk2);
      var Nk2;
      if (Kk2 !== void 0 && Kk2 != null) {
        Hk2 = ob(ca(Kk2), Jk2, Hk2);
        if (da(Hk2)) {
          V2.$pending = Hk2.then(function(p3) {
            ab(V2, p3);
            return V2;
          });
          return;
        }
        ab(V2, Hk2);
        return;
      }
      if (!(!!U2.def.unionFallback || a(Hk2))) {
        U2 = { code: nf, errors: [], note: "No matching discriminator", discriminator: Ik2, options: Array.from(Mk2.keys()), path: [] };
        Fb(U2, Ik2);
        V2 = V2.issues;
        V2.push(U2);
        return;
      }
    }
    Ik2 = [];
    Mk2 = [];
    var Pk2 = [];
    Kk2 = 0;
    while (Kk2 < Ok2) {
      Ik2.push(void 0);
      Kk2 = Kk2 + 1;
    }
    Kk2 = 0;
    while (Kk2 < Ok2) {
      Nk2 = ta(va(Lk2[Kk2]), Jk2, Hk2);
      if (da(Nk2)) {
        var Qk2 = { i: 0 + Kk2 };
        Pk2.push(Nk2.then(/* @__PURE__ */ ((a2, b2) => function(E3) {
          a2[b2.i] = E3;
        })(Ik2, Qk2)));
      } else {
        Ik2[Kk2] = Nk2;
        var Rk2 = Nk2.issues;
        var Al2 = Rk2.length | 0;
        if (0 == Al2) {
          if (38 != U2.kind) {
            ab(V2, Nk2);
            return;
          }
          Mk2.push(Kk2);
        }
      }
      Kk2 = Kk2 + 1;
    }
    var Hl2 = Pk2.length | 0;
    if (Hl2 > 0) {
      V2.$pending = Promise.all(Pk2).then(function(c3) {
        if (38 == U2.kind) {
          var b2 = [];
          var E3 = 0;
          while (E3 < Ok2) {
            c3 = Ik2[E3];
            c3 !== void 0 && c3 != null && 0 == (c3.issues.length | 0) && b2.push(E3);
            E3 = E3 + 1;
          }
          var s3 = b2.length | 0;
          if (1 == s3) {
            ab(V2, Ik2[b2[0]]);
            return V2;
          }
        }
        Hc(V2, Ik2, Hk2);
        return V2;
      });
      return;
    }
    if (38 == U2.kind) {
      var Pl2 = Mk2.length | 0;
      if (1 == Pl2) {
        V2.value = Ik2[Mk2[0]].value;
        return;
      }
      var Wl2 = Mk2.length | 0;
      if (0 == Wl2) {
        Kk2 = [];
        U2 = 0;
        while (U2 < Ok2) {
          var _l2 = va(Lk2[U2]);
          if (!_l2) {
          }
          Jk2 = Ik2[U2];
          Mk2 = Jk2.issues;
          Nk2 = [];
          Pk2 = Mk2.length | 0;
          Jk2 = 0;
          while (Jk2 < Pk2) {
            Nk2.push(Ra(Mk2[Jk2], Hk2));
            Jk2 = Jk2 + 1;
          }
          Kk2.push(Nk2);
          U2 = U2 + 1;
        }
        U2 = V2.issues;
        U2.push({ code: nf, errors: Kk2, path: [] });
        return;
      }
      U2 = V2.issues;
      U2.push({ code: nf, errors: [], inclusive: false, matches: Mk2, path: [] });
      return;
    }
    Hc(V2, Ik2, Hk2);
  };
  let G2 = (U2, V2) => {
    if (true === kd(U2, V2)) return { valid: true, data: U2 };
    var W2;
    ra(Date, U2) && ra(Date, V2) ? (W2 = U2.getTime(), W2 = W2 === V2.getTime()) : W2 = false;
    if (W2) return { valid: true, data: U2 };
    if (A2(U2) && A2(V2)) {
      var X2 = {};
      var _2 = [];
      _2.push(U2);
      _2.push(V2);
      var $2 = 0, ba2, ea2, ca2, da2, aa2;
      while ($2 < 2) {
        ba2 = _2[$2];
        da2 = Reflect.ownKeys(ba2);
        ea2 = da2.length | 0;
        aa2 = 0;
        while (aa2 < ea2) {
          W2 = da2[aa2];
          ca2 = typeof W2 == se && W2 + "" == Ef;
          ca2 || Aa(X2, W2, ba2[W2]);
          aa2 = aa2 + 1;
        }
        $2 = $2 + 1;
      }
      ba2 = qa(U2);
      ca2 = qa(V2);
      da2 = ba2.length | 0;
      $2 = 0;
      while ($2 < da2) {
        W2 = ba2[$2] + "";
        if (W2 != Ef) {
          ea2 = ca2.length | 0;
          _2 = false;
          aa2 = 0;
          while (aa2 < ea2) {
            ca2[aa2] + "" == W2 && (_2 = true);
            aa2 = aa2 + 1;
          }
          if (_2) {
            _2 = U2[W2];
            aa2 = V2[W2];
            _2 = G2(_2, aa2);
            if (!_2.valid) {
              U2 = [];
              U2.push(W2);
              V2 = _2.mergeErrorPath;
              if (Array.isArray(V2)) {
                X2 = V2.length | 0;
                W2 = 0;
                while (W2 < X2) {
                  _2 = V2[W2];
                  U2.push(_2);
                  W2 = W2 + 1;
                }
              }
              return { valid: false, mergeErrorPath: U2 };
            }
            X2[W2] = _2.data;
          }
        }
        $2 = $2 + 1;
      }
      return { valid: true, data: X2 };
    }
    if (Array.isArray(U2) && Array.isArray(V2)) {
      W2 = U2.length | 0;
      if (W2 != (V2.length | 0)) return { valid: false, mergeErrorPath: [] };
      _2 = [];
      $2 = U2.length | 0;
      W2 = 0;
      while (W2 < $2) {
        X2 = U2[W2];
        aa2 = V2[W2];
        X2 = G2(X2, aa2);
        if (!X2.valid) {
          U2 = [];
          U2.push(W2);
          V2 = X2.mergeErrorPath;
          if (Array.isArray(V2)) {
            X2 = V2.length | 0;
            W2 = 0;
            while (W2 < X2) {
              _2 = V2[W2];
              U2.push(_2);
              W2 = W2 + 1;
            }
          }
          return { valid: false, mergeErrorPath: U2 };
        }
        X2 = X2.data;
        _2.push(X2);
        W2 = W2 + 1;
      }
      return { valid: true, data: _2 };
    }
    return { valid: false, mergeErrorPath: [] };
  };
  let H2 = (U2, Hk2, Ik2) => {
    var V2 = ka(U2, ok);
    var Jk2 = ka(U2, Uj);
    if (!(!V2 || !Jk2)) {
      U2 = ta(V2, Hk2.value, Ik2);
      var Kk2 = Hk2.value;
      Jk2 = ta(Jk2, Kk2, Ik2);
      if (da(U2) || da(Jk2)) {
        Ik2 = [];
        Ik2.push(Promise.resolve(U2));
        Ik2.push(Promise.resolve(Jk2));
        Hk2.$pending = Promise.all(Ik2).then(function(a2) {
          let b2 = a2[0];
          I2(Hk2, b2, a2[1]);
          return Hk2;
        });
        return;
      }
      I2(Hk2, U2, Jk2);
    }
  };
  let I2 = (U2, V2, W2) => {
    var $2 = {};
    var aa2 = {};
    var X2 = V2.issues;
    var ca2 = X2.length | 0;
    var X2 = void 0, _2 = 0, ba2, da2, ea2, fa2;
    while (_2 < ca2) {
      ba2 = V2.issues[_2];
      !J2(ba2, "l", $2, aa2) ? (ba2 = U2.issues, da2 = V2.issues[_2], ba2.push(da2)) : X2 === void 0 && V2.issues[_2].code + "" == Ye && (X2 = V2.issues[_2]);
      _2 = _2 + 1;
    }
    _2 = W2.issues;
    ca2 = _2.length | 0;
    _2 = 0;
    while (_2 < ca2) {
      ba2 = W2.issues[_2];
      !J2(ba2, "r", $2, aa2) ? (ba2 = U2.issues, da2 = W2.issues[_2], ba2.push(da2)) : X2 === void 0 && W2.issues[_2].code + "" == Ye && (X2 = W2.issues[_2]);
      _2 = _2 + 1;
    }
    _2 = [];
    ca2 = qa($2);
    ea2 = ca2.length | 0;
    aa2 = 0;
    while (aa2 < ea2) {
      ba2 = ca2[aa2] + "";
      da2 = $2[ba2];
      da2.l ? (da2 = $2[ba2], da2 = !!da2.r) : da2 = false;
      da2 && _2.push(ba2);
      aa2 = aa2 + 1;
    }
    var Fb2 = _2.length | 0;
    if (Fb2 > 0) {
      if (X2 !== void 0) {
        aa2 = [];
        ca2 = X2.keys;
        da2 = _2.length | 0;
        $2 = 0;
        while ($2 < da2) {
          ea2 = ca2.length | 0;
          ba2 = 0;
          while (ba2 < ea2) {
            fa2 = ca2[ba2] + "";
            fa2 == _2[$2] + "" && (fa2 = _2[$2], aa2.push(fa2));
            ba2 = ba2 + 1;
          }
          $2 = $2 + 1;
        }
        var ic2 = aa2.length | 0;
        ic2 > 0 && (X2 = ia({}, X2), X2.keys = aa2, _2 = U2.issues, _2.push(X2));
      }
    }
    V2 = V2.value;
    W2 = W2.value;
    V2 = G2(V2, W2);
    if (V2.valid) U2.value = V2.data;
    else if (!Kb(U2)) {
      U2 = V2.mergeErrorPath;
      throw na("Unmergable intersection. Error path: " + JSON.stringify(U2, void 0, void 0));
    }
  };
  let J2 = (U2, V2, W2, X2) => {
    var _2 = U2.path;
    var $2, aa2;
    if (U2.code + "" == Ye && (_2 == null || 0 == (_2.length | 0))) {
      _2 = U2.keys;
      aa2 = _2.length | 0;
      X2 = 0;
      while (X2 < aa2) {
        U2 = _2[X2] + "";
        (W2[U2] === void 0 || W2[U2] == null) && (W2[U2] = {});
        U2 = W2[U2];
        U2[V2] = true;
        X2 = X2 + 1;
      }
      return true;
    }
    var Ta2 = U2.code + "";
    if (Ta2 == yf) {
      var $a2 = U2.origin + "";
      $2 = $a2 == Ig;
    } else {
      $2 = false;
    }
    if ($2) {
      if (_2 !== void 0 && 1 == (_2.length | 0)) {
        _2 = _2[0] + "";
        X2[_2] === void 0 && (X2[_2] = U2);
        (W2[_2] === void 0 || W2[_2] == null) && (W2[_2] = {});
        U2 = W2[_2];
        U2[V2] = true;
        return true;
      }
    }
    return false;
  };
  let K2 = (U2) => {
    U2 = typeof U2;
    return U2 == se ? true : U2 == xe ? true : U2 == Yf ? true : false;
  };
  let L2 = (U2, V2, W2, X2, _2, $2) => {
    var aa2 = U2.issues;
    var da2 = aa2.length | 0;
    da2 > 0 && (K2(X2) ? (U2 = U2.issues, aa2 = W2.issues, Ua(U2, aa2, X2)) : (aa2 = W2.issues, aa2.push({ code: yf, origin: ph, issues: E2(U2.issues, $2), input: _2, path: [] })));
    U2 = V2.issues;
    var ra2 = U2.length | 0;
    ra2 > 0 && (K2(X2) ? (U2 = V2.issues, V2 = W2.issues, Ua(U2, V2, X2)) : (U2 = W2.issues, U2.push({ code: Wf, origin: ph, key: X2, issues: E2(V2.issues, $2), input: _2, path: [] })));
  };
  let M2 = (U2, V2, Hk2) => {
    var Kk2 = V2.value;
    if (!ra(Map, Kk2)) {
      U2 = V2.issues;
      U2.push(ya(ph, Kk2));
      return;
    }
    var Lk2 = $a(U2, V2, /* @__PURE__ */ new Map());
    var Nk2 = [];
    var Qk2 = Kk2.entries();
    var Ik2 = Qk2.next();
    while (!Ik2.done) {
      Ik2 = Ik2.value;
      var Mk2 = Ik2[0];
      var Ok2 = Ik2[1];
      Ik2 = { value: Mk2, issues: [] };
      var Jk2 = { value: Ok2, issues: [] };
      var Pk2 = ka(U2, Dh);
      !Pk2 || (Ik2 = ta(Pk2, Mk2, Hk2));
      Pk2 = ka(U2, Qf);
      !Pk2 || (Jk2 = ta(Pk2, Ok2, Hk2));
      da(Ik2) || da(Jk2) ? (Ok2 = [], Ok2.push(Promise.resolve(Ik2)), Ok2.push(Promise.resolve(Jk2)), Nk2.push(Promise.all(Ok2).then(/* @__PURE__ */ ((a2, b2, c3, d3, e3) => function(n3) {
        let p3 = n3[0];
        L2(p3, n3[1], a2, e3, c3, b2);
        let m3 = n3[0];
        m3 = m3.value;
        let l3 = n3[1].value;
        d3.set(m3, l3);
      })(V2, Hk2, Kk2, Lk2, Mk2)))) : (L2(Ik2, Jk2, V2, Mk2, Kk2, Hk2), Ik2 = Ik2.value, Jk2 = Jk2.value, Lk2.set(Ik2, Jk2));
      Ik2 = Qk2.next();
    }
    V2.value = Lk2;
    var il2 = Nk2.length | 0;
    il2 > 0 && (V2.$pending = Promise.all(Nk2).then(function(a2) {
      V2.value = Lk2;
      return V2;
    }));
  };
  let N2 = (U2, V2, Hk2) => {
    var Ik2 = V2.value;
    var Jk2, Kk2, Lk2;
    if (!X(Ik2) || Ik2.add === void 0) {
      U2 = V2.issues;
      U2.push(ya(uf, Ik2));
      return;
    }
    Jk2 = $a(U2, V2, la());
    Lk2 = Ik2.values();
    Ik2 = Lk2.next();
    while (!Ik2.done) {
      Ik2 = Ik2.value;
      Kk2 = ka(U2, Qf);
      Kk2 ? i2(V2, ta(Kk2, Ik2, Hk2), function(E3) {
        var b2 = E3.issues;
        var d3 = b2.length | 0;
        if (d3 > 0) {
          b2 = E3.issues;
          var j3 = V2.issues;
          Sc(b2, j3);
        }
        j3 = E3.value;
        Jk2.add(j3);
      }) : Jk2.add(Ik2);
      Ik2 = Lk2.next();
    }
    V2.value = Jk2;
  };
  let O2 = (U2, V2, Hk2, Ik2) => {
    if (typeof Ik2 != we) return V2;
    var Jk2 = function(p3) {
      if (typeof p3 == se) {
        var b2 = V2.value;
        p3 = { message: p3, code: af, input: b2, inst: U2.handle };
      } else {
        !p3.fatal || (p3.continue = false);
        p3.code === void 0 && (p3.code = af);
        true === "input" in p3 || (p3.input = V2.value);
        p3.inst === void 0 && (p3.inst = U2.handle);
      }
      var v3 = V2.issues;
      v3.push(p3);
    };
    var Kk2 = V2.value;
    Jk2 = { addIssue: Jk2, value: Kk2, issues: V2.issues };
    Kk2 = V2.value;
    Ik2 = Ik2(Kk2, Jk2);
    if (da(Ik2)) {
      if (Hk2 !== void 0 && false === Hk2.async) throw new Error(ve);
      return Ik2.then(function(p3) {
        V2.value = p3;
        return V2;
      });
    }
    V2.value = Ik2;
    return V2;
  };
  let P2 = (U2) => {
    var V2 = U2.issues;
    var W2 = V2.length | 0;
    U2 = 0;
    while (U2 < W2) {
      var X2 = V2[U2];
      var ea2 = X2.code + "";
      if (ea2 != Ye) return true;
      U2 = U2 + 1;
    }
    return false;
  };
  let Q2 = (U2, V2, W2) => !!W2 ? pa(W2, U2, V2) : U2;
  let R2 = (U2, V2, Hk2) => {
    if (P2(V2)) {
      V2.aborted = true;
      return V2;
    }
    var Ik2 = U2.def.transform;
    var Jk2 = ka(U2, gh);
    if (typeof Ik2 == we) {
      Ik2 = O2(U2, V2, Hk2, Ik2);
      if (da(Ik2)) return Ik2.then(function(p3) {
        return Q2(p3, Hk2, Jk2);
      });
    }
    return Q2(V2, Hk2, Jk2);
  };
  let S2 = (U2, Hk2, Ik2) => {
    var V2 = ka(U2, oh);
    var Kk2 = ka(U2, gh);
    var Lk2 = U2.def.transform;
    var Jk2 = U2.def.reverseTransform;
    if (31 == U2.kind) {
      if (a(Ik2)) throw new lc(Mj);
      if (Ik2 !== void 0 && X(Ik2)) {
        V2 = Ik2[Vj];
        if (X(V2) && V2.backEdges !== void 0 && V2.backEdges != null) {
          V2 = V2.backEdges;
          Jk2 = Hk2.value;
          if (V2.has(Jk2)) {
            U2 = new Error("Cannot parse a reference cycle that closes through a transform");
            U2.name = "ZodCyclicError";
            throw U2;
          }
        }
      }
      return typeof Lk2 == we ? O2(U2, Hk2, Ik2, Lk2) : Hk2;
    }
    if (a(Ik2)) {
      if (Kk2) {
        Kk2 = pa(Kk2, Hk2, Ik2);
        if (da(Kk2)) return Kk2.then(function(c3) {
          if (P2(c3)) {
            c3.aborted = true;
            return c3;
          }
          var b2 = typeof Jk2 == we ? O2(U2, c3, Ik2, Jk2) : c3;
          return da(b2) ? b2.then(function(b3) {
            return Q2(b3, Ik2, V2);
          }) : Q2(c3, Ik2, V2);
        });
        if (P2(Hk2)) {
          Hk2.aborted = true;
          return Hk2;
        }
      }
      if (typeof Jk2 == we) {
        Jk2 = O2(U2, Hk2, Ik2, Jk2);
        if (da(Jk2)) return Jk2.then(function(p3) {
          return Q2(p3, Ik2, V2);
        });
      }
      return Q2(Hk2, Ik2, V2);
    }
    if (V2) {
      V2 = pa(V2, Hk2, Ik2);
      if (da(V2)) return V2.then(function(p3) {
        return R2(U2, p3, Ik2);
      });
    }
    return R2(U2, Hk2, Ik2);
  };
  let T2 = (U2, V2) => {
    var W2 = V2.value;
    if (typeof W2 != we) {
      n2(V2, we, W2);
      return;
    }
    var _2 = U2.def.input;
    U2 = U2.def.output;
    var X2 = va(U2);
    X2 = X2 && 30 == X2.kind;
    V2.value = gc(W2, _2, U2, X2);
  };
  pa = function(U2, V2, Hk2) {
    U2 = d2(U2);
    if (Bc(U2)) {
      var Ik2 = Qd(U2, V2, Hk2);
      if (Ik2 !== void 0) return g2(U2, Ik2, Hk2);
    }
    if (30 == U2.kind) {
      if (Hk2 === void 0 || false === Hk2.async) throw new Error(ve);
      Ik2 = V2.value;
      return Promise.resolve(Ik2).then(function(m3) {
        V2.value = m3;
        var g3 = ka(U2, te);
        return g3 ? pa(g3, V2, Hk2) : V2;
      });
    }
    if (Hk2 !== void 0 && X(Hk2) && Hk2.skipChecks) return l2(U2, V2, Hk2);
    if (a(Hk2) && k2(U2)) {
      Ik2 = ia({}, Hk2);
      Ik2.skipChecks = true;
      var Jk2 = V2.value;
      Ik2 = l2(U2, { value: Jk2, issues: [] }, Ik2);
      if (da(Ik2)) {
        if (Hk2 !== void 0 && false === Hk2.async) throw new Error(ve);
        return Ik2.then(function(p3) {
          return m2(U2, p3, V2, Hk2);
        });
      }
      return m2(U2, Ik2, V2, Hk2);
    }
    if (32 == U2.kind || 31 == U2.kind) {
      Ik2 = S2(U2, V2, Hk2);
      return da(Ik2) ? Ik2.then(function(p3) {
        return j2(U2, p3, Hk2);
      }) : j2(U2, V2, Hk2);
    }
    Rc(U2, V2, Hk2);
    return j2(U2, V2, Hk2);
  };
  Rc = function(V2, Hk2, Ik2) {
    var Jk2 = d2(V2);
    var fq = Hk2.value;
    V2 = Jk2.kind;
    var Kk2;
    if (!(9 == V2 || 10 == V2)) {
      if (0 == V2) {
        if (Jk2.def.coerce) try {
          Hk2.value = String(fq);
          fq = Hk2.value;
        } catch {
        }
        if (typeof fq == se) return;
        n2(Hk2, se, fq);
        return;
      }
      if (1 == V2) {
        if (Jk2.def.coerce) try {
          Hk2.value = Number(fq);
          fq = Hk2.value;
        } catch {
        }
        if (o2(fq)) return;
        n2(Hk2, xe, fq);
        return;
      }
      if (2 == V2) {
        !Jk2.def.coerce || (Hk2.value = Boolean(fq));
        fq = Hk2.value;
        if (typeof fq == Jf) return;
        n2(Hk2, Jf, fq);
        return;
      }
      if (3 == V2) {
        if (Jk2.def.coerce) try {
          Hk2.value = BigInt(fq);
        } catch {
          n2(Hk2, Ve, fq);
          return;
        }
        fq = Hk2.value;
        if (typeof fq == Ve) return;
        n2(Hk2, Ve, fq);
        return;
      }
      if (4 == V2) {
        if (typeof fq == Yf) return;
        n2(Hk2, Yf, fq);
        return;
      }
      if (5 == V2) {
        if (Jk2.def.coerce) try {
          Hk2.value = new Date(fq);
          fq = Hk2.value;
        } catch {
        }
        if (r2(fq)) return;
        n2(Hk2, bg, fq);
        return;
      }
      if (6 == V2) {
        if (p2(fq)) return;
        n2(Hk2, Yh, fq);
        return;
      }
      if (7 == V2) {
        if (fq === void 0) return;
        n2(Hk2, Ff, fq);
        return;
      }
      if (12 == V2) {
        if (fq === void 0) return;
        n2(Hk2, Gi, fq);
        return;
      }
      if (8 == V2) {
        if (q2(fq)) return;
        n2(Hk2, yg, fq);
        return;
      }
      if (11 == V2) {
        n2(Hk2, Mh, fq);
        return;
      }
      if (13 == V2) {
        if (Jk2.values !== void 0 && !!Jk2.values.has(fq)) return;
        Ik2 = Array.from(Jk2.values);
        V2 = fq;
        Hk2 = Hk2.issues;
        Hk2.push({ code: Rf, values: Ik2, input: V2 });
        return;
      }
      if (14 == V2) {
        if (Jk2.values !== void 0 && !!Jk2.values.has(fq)) return;
        Ik2 = Array.from(Jk2.values);
        V2 = fq;
        Hk2 = Hk2.issues;
        Hk2.push({ code: Rf, values: Ik2, input: V2 });
        return;
      }
      if (23 == V2) {
        V2 = ka(Jk2, te);
        if (Jk2.def.exact) {
          !V2 || v2(Hk2, pa(V2, Hk2, Ik2));
          return;
        }
        if (fq === void 0) {
          !V2 || 2 == V2.optin && (V2 = pa(V2, Hk2, Ik2), da(V2) ? Hk2.$pending = V2.then(function(p3) {
            s2(p3);
            return p3;
          }) : s2(Hk2));
          return;
        }
        !V2 || v2(Hk2, pa(V2, Hk2, Ik2));
        return;
      }
      if (24 == V2) {
        if (fq == null && fq !== void 0) {
          Hk2.value = fq;
          return;
        }
        V2 = ka(Jk2, te);
        !V2 || v2(Hk2, pa(V2, Hk2, Ik2));
        return;
      }
      if (25 == V2 || 26 == V2) {
        Kk2 = ka(Jk2, te);
        if (a(Ik2)) {
          !Kk2 || v2(Hk2, pa(Kk2, Hk2, Ik2));
          return;
        }
        if (fq === void 0) {
          var Qm = c2(Jk2);
          Hk2.value = Qm;
          26 == V2 && Kk2 && v2(Hk2, pa(Kk2, Hk2, Ik2));
          return;
        }
        if (Kk2) {
          Ik2 = pa(Kk2, Hk2, Ik2);
          if (da(Ik2)) {
            var U2 = 0;
            25 == V2 && (U2 = 1);
            Hk2.$pending = Ik2.then(function(p3) {
              1 == U2 && p3.value === void 0 && (p3.value = c2(Jk2));
              return p3;
            });
            return;
          }
        }
        25 == V2 && Hk2.value === void 0 && (Hk2.value = c2(Jk2));
        return;
      }
      if (27 == V2) {
        V2 = ka(Jk2, te);
        if (a(Ik2)) {
          !V2 || v2(Hk2, pa(V2, Hk2, Ik2));
          return;
        }
        if (V2) {
          V2 = pa(V2, Hk2, Ik2);
          if (da(V2)) {
            Hk2.$pending = V2.then(function(p3) {
              t2(p3, Jk2, Ik2);
              return p3;
            });
            return;
          }
          t2(Hk2, Jk2, Ik2);
        }
        return;
      }
      if (28 == V2) {
        V2 = ka(Jk2, te);
        if (V2) {
          V2 = pa(V2, Hk2, Ik2);
          if (da(V2)) {
            Hk2.$pending = V2.then(function(p3) {
              u2(p3);
              return p3;
            });
            return;
          }
        }
        u2(Hk2);
        return;
      }
      if (33 == V2) {
        if (!a(Ik2)) {
          V2 = ka(Jk2, te);
          !V2 || (V2 = pa(V2, Hk2, Ik2), da(V2) ? Hk2.$pending = V2.then(function(p3) {
            if (!p3.memo) {
              var b2 = p3.value;
              p3.value = ga.freeze(b2);
            }
            return p3;
          }) : Hk2.memo || (V2 = Hk2.value, Hk2.value = ga.freeze(V2)));
          return;
        }
        V2 = ka(Jk2, te);
        !V2 || v2(Hk2, pa(V2, Hk2, Ik2));
        return;
      }
      if (16 == V2) w2(Jk2, Hk2, Ik2);
      else if (17 == V2) y2(Jk2, Hk2, Ik2);
      else if (15 == V2) z2(Jk2, Hk2, Ik2);
      else if (18 == V2) D2(Jk2, Hk2, Ik2);
      else if (21 == V2 || 38 == V2) F2(Jk2, Hk2, Ik2);
      else if (22 == V2) H2(Jk2, Hk2, Ik2);
      else if (19 == V2) M2(Jk2, Hk2, Ik2);
      else if (20 == V2) N2(Jk2, Hk2, Ik2);
      else if (39 == V2) T2(Jk2, Hk2);
      else if (40 == V2) {
        if (typeof fq != se) {
          n2(Hk2, se, fq);
          return;
        }
        V2 = Jk2.handle._zod;
        V2 = V2.pattern;
        V2 !== void 0 && V2 != null && (V2.lastIndex = 0, Ba(V2, fq + "") || sa(Hk2, wf, { pattern: V2.source }));
      } else if (34 != V2) if (37 == V2) {
        V2 = ka(Jk2, te);
        if (V2) {
          V2 = ta(V2, fq, Ik2).issues;
          var so = V2.length | 0;
          Hk2.value = 0 == so;
        }
      } else 35 == V2 && (V2 = globalThis.File, V2 === void 0 ? n2(Hk2, hh, fq) : ra(V2, fq) || n2(Hk2, hh, fq));
    }
  };
  pb = function(U2) {
    if (!(U2 == null || !X(U2) || U2._zod === void 0)) {
      var W2 = U2._zod;
      var V2 = W2.bag;
      if (V2.propValues !== void 0) {
        U2 = W2.bag;
        return U2.propValues;
      }
      U2 = ca(U2);
      if (15 == U2.kind) {
        V2 = {};
        U2 = U2.def.shape;
        if (X(U2)) {
          var da2 = qa(U2);
          var ia2 = da2.length | 0;
          var aa2 = 0, ea2, _2, $2, ja2, ka2, ba2, fa2, ra2, sa2;
          while (aa2 < ia2) {
            ea2 = da2[aa2];
            _2 = va(U2[ea2]);
            if (_2) {
              if (_2.values !== void 0) {
                $2 = la();
                fa2 = Array.from(_2.values);
                ja2 = fa2.length | 0;
                ba2 = 0;
                while (ba2 < ja2) {
                  ka2 = fa2[ba2];
                  $2.add(ka2);
                  ba2 = ba2 + 1;
                }
                0 != _2.optin && $2.add(void 0);
                Aa(V2, ea2, $2);
              }
            }
            aa2 = aa2 + 1;
          }
        }
        U2 = W2.bag;
        U2.propValues = V2;
        return V2;
      }
      if (32 == U2.kind) return pb(U2.def.in);
      if (29 == U2.kind) return pb(d2(U2).handle);
      if (21 == U2.kind || 38 == U2.kind) {
        V2 = {};
        aa2 = U2.def.options;
        if (Array.isArray(aa2)) {
          ia2 = aa2.length | 0;
          $2 = 0;
          while ($2 < ia2) {
            U2 = pb(aa2[$2]);
            if (U2 == null || 0 == (qa(U2).length | 0)) throw na(Le + $2 + Fh);
            ea2 = qa(U2);
            ja2 = ea2.length | 0;
            da2 = 0;
            while (da2 < ja2) {
              _2 = ea2[da2];
              Ca.call(V2, _2) || Aa(V2, _2, la());
              ba2 = U2[_2];
              if (ba2 !== void 0 && ba2 != null) {
                fa2 = Array.from(ba2);
                ka2 = fa2.length | 0;
                ba2 = 0;
                while (ba2 < ka2) {
                  ra2 = V2[_2];
                  sa2 = fa2[ba2];
                  ra2.add(sa2);
                  ba2 = ba2 + 1;
                }
              }
              da2 = da2 + 1;
            }
            $2 = $2 + 1;
          }
        }
        U2 = W2.bag;
        U2.propValues = V2;
        return V2;
      }
    }
  };
})();
var ob = (h2, j2, i2) => pa(h2, { value: j2, issues: [] }, i2);
var ta = (h2, j2, i2) => !!h2 ? ob(h2, j2, i2) : { value: j2, issues: [] };
var Sc = (a, b) => {
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
    Fb(v2[c2], b);
    e2 = v2[c2];
    a.push(e2);
    c2 = c2 + 1;
  }
};
var Tc = (g2) => {
  var H2 = g2.handle._zod;
  var x2 = H2.bag;
  if (x2.optionsMap !== void 0) return x2.optionsMap;
  var a = /* @__PURE__ */ new Map();
  var d2 = g2.def.discriminator + "";
  var S2 = g2.def.options;
  var f2 = S2.length | 0;
  g2 = 0;
  while (g2 < f2) {
    var b = pb(S2[g2]);
    H2 = void 0;
    var c2;
    X(b) && !!Ca.call(b, d2) && (H2 = b[d2]);
    if (H2 === void 0) throw na(Le + g2 + Fh);
    if (H2 == null) throw na(Le + g2 + Fh);
    var E2 = +H2.size | 0;
    if (0 == E2) throw na(Le + g2 + Fh);
    b = Array.from(H2);
    c2 = b.length | 0;
    H2 = 0;
    while (H2 < c2) {
      var e2 = b[H2];
      if (a.has(e2)) {
        g2 = b[H2];
        g2 = 'Duplicate discriminator value "' + g2;
        throw na(g2 + Fh);
      }
      e2 = b[H2];
      var h2 = S2[g2];
      a.set(e2, h2);
      H2 = H2 + 1;
    }
    g2 = g2 + 1;
  }
  x2.optionsMap = a;
  return a;
};
var gc = (w2, z2, a, b) => b ? Ed(function(h2, t2) {
  return La(h2, t2, void 0, void 0);
}, function(b2, a2, d2) {
  return b2.apply(a2, d2);
}, z2, a, w2) : function() {
  let h2 = w2.apply(this, Fa(z2, Array.from(arguments), void 0, void 0));
  return Fa(a, h2, void 0, void 0);
};
var hc = (E2) => {
  var a = E2.issues;
  var d2 = a.length | 0;
  if (d2 > 0) {
    E2 = E2.issues;
    return { success: false, error: new Ga(E2) };
  }
  return { success: true, data: E2.value };
};
var Uc;
var Xc;
var ge;
(function() {
  let a = (z2) => 0 == z2 ? se : 1 == z2 ? xe : 2 == z2 ? Jf : 3 == z2 ? Ve : 4 == z2 ? Yf : 5 == z2 ? bg : 6 == z2 ? Yh : 7 == z2 ? Ff : 8 == z2 ? yg : 9 == z2 ? Oj : 10 == z2 ? ng : 11 == z2 ? Mh : 12 == z2 ? Gi : 13 == z2 ? Eh : 14 == z2 ? ji : 15 == z2 ? Xf : 16 == z2 ? rf : 17 == z2 ? mi : 18 == z2 ? Ig : 19 == z2 ? ph : 20 == z2 ? uf : 21 == z2 ? cg : 38 == z2 ? cg : 22 == z2 ? sg : 23 == z2 ? Re : 24 == z2 ? Ug : 25 == z2 ? Og : 26 == z2 ? rg : 27 == z2 ? ch : 28 == z2 ? zf : 29 == z2 ? Ei : 30 == z2 ? pi : 31 == z2 ? He : 32 == z2 ? zg : 33 == z2 ? Xg : 34 == z2 ? af : 35 == z2 ? hh : 36 == z2 ? af : 37 == z2 ? vf : 39 == z2 ? we : 40 == z2 ? wf : af;
  let b = () => {
    let z2 = ua.prototype, A2 = Error.prototype;
    ga.setPrototypeOf(z2, A2);
    z2 = ua;
    aa(z2, jh, Ea(th));
    z2 = ua;
    aa(z2, "init", Ea(function(l3, v3) {
      return cc(l3, v3);
    }));
    z2 = Ga.prototype;
    A2 = ua.prototype;
    ga.setPrototypeOf(z2, A2);
    aa(Ga, jh, Ea(th));
    z2 = Ga;
    aa(z2, "init", ua.init);
    z2 = ua;
    A2 = Symbol.hasInstance;
    aa(z2, A2, Ea(function(l3) {
      if (l3 == null || !X(l3)) return false;
      var H2 = l3._zod;
      if (H2 == null) return false;
      H2 = H2.traits;
      return !!H2.has(th);
    }));
    z2 = Ga;
    A2 = Symbol.hasInstance;
    aa(z2, A2, Ea(function(l3) {
      if (ra(Error, l3)) return true;
      if (l3 == null || !X(l3)) return false;
      var H2 = l3._zod;
      if (H2 == null) return false;
      H2 = H2.traits;
      return !!H2.has(th);
    }));
    z2 = ua.prototype;
    aa(z2, wh, { configurable: true, enumerable: false, get: function() {
      var a2 = this;
      let j3 = (0, function() {
        return a2.message;
      });
      aa(a2, wh, { value: j3, configurable: true, writable: true });
      return j3;
    }, set: function(j3) {
      aa(this, wh, { value: j3, configurable: true, writable: true });
    } });
    z2 = ua.prototype;
    e2(z2, ze, function(a2) {
      return function(d3) {
        let b2 = { _errors: [] }, g3 = a2.issues;
        Gb(g3, [], b2, d3);
        return b2;
      };
    }, false);
    z2 = ua.prototype;
    e2(z2, "flatten", function(a2) {
      return function(c3) {
        return Jc(a2, c3);
      };
    }, false);
    z2 = ua.prototype;
    e2(z2, ci, function(a2) {
      return function(F2) {
        let b2 = a2.issues;
        b2.push(F2);
        b2 = a2._zod;
        let i3 = a2.issues;
        b2.message = JSON.stringify(i3, function(B2, D2) {
          return bc(D2);
        }, 2);
      };
    }, false);
    z2 = ua.prototype;
    e2(z2, "addIssues", function(a2) {
      return function(v3) {
        var f3 = v3.length | 0;
        var g3 = 0, b2, c3, r3;
        while (g3 < f3) {
          b2 = a2.issues;
          c3 = v3[g3];
          b2.push(c3);
          g3 = g3 + 1;
        }
        g3 = a2._zod;
        r3 = a2.issues;
        g3.message = JSON.stringify(r3, function(B2, D2) {
          return bc(D2);
        }, 2);
      };
    }, false);
    z2 = ua.prototype;
    aa(z2, "isEmpty", { enumerable: false, configurable: true, get: function() {
      let a2 = this.issues, d3 = a2.length | 0;
      return 0 == d3;
    } });
  };
  let c2 = () => {
    var z2 = Hb();
    z2.localeError === void 0 ? (Wa = (0, function(F2) {
      return Ic(F2);
    }), z2.localeError = Wa) : Wa = z2.localeError;
    var I2 = typeof z2.customError;
    I2 == we && (qb = z2.customError);
  };
  let d2 = (z2, A2) => {
    var C2 = [];
    var B2 = z2.issues;
    var D2 = B2.length | 0;
    B2 = 0;
    while (B2 < D2) {
      C2.push(Ra(z2.issues[B2], A2));
      B2 = B2 + 1;
    }
    z2 = z2.value;
    return { value: z2, issues: C2 };
  };
  let e2 = (N2, z2, A2, B2) => {
    aa(N2, z2, { configurable: true, enumerable: false, get: function() {
      let a2 = A2(this);
      aa(this, z2, { configurable: true, writable: true, enumerable: B2, value: a2 });
      return a2;
    }, set: function(j3) {
      aa(this, z2, { configurable: true, writable: true, enumerable: true, value: j3 });
    } });
  };
  let f2 = (N2, z2, A2) => {
    aa(N2, z2, { configurable: true, enumerable: true, get: function() {
      let a2 = this._zod;
      return a2.def[A2];
    } });
  };
  let g2 = (N2, C2) => {
    N2 = N2.prototype;
    C2 == Xi && f2(N2, Pg, Pg);
    (C2 == Ii || C2 == zj) && (f2(N2, Dh, Dh), f2(N2, Qf, Qf));
    C2 == Aj && f2(N2, Qf, Qf);
    (C2 == Zi || C2 == bh || C2 == Bj) && (f2(N2, Xe, Xe), f2(N2, Af, Af));
    (C2 == hj || C2 == Yi || C2 == bi) && (f2(N2, oh, oh), f2(N2, gh, gh));
    C2 == gj && (aa(N2, ji, { configurable: true, enumerable: true, get: function() {
      var a2 = this._zod;
      a2 = a2.def;
      a2 = a2.entries;
      var g3;
      if (X(a2) && !Array.isArray(a2)) return a2;
      var b2 = {};
      if (Array.isArray(a2)) {
        var f3 = a2.length | 0;
        g3 = 0;
        while (g3 < f3) {
          var c3 = a2[g3];
          var d3 = a2[g3];
          b2[c3] = d3;
          g3 = g3 + 1;
        }
      }
      return b2;
    } }), aa(N2, Xe, { configurable: true, enumerable: true, get: function() {
      let a2 = this._zod;
      a2 = a2.def;
      return Vc(a2.entries);
    } }));
    C2 == vi && (aa(N2, Ne, { configurable: true, enumerable: true, get: function() {
      let a2 = this._zod;
      return a2.values;
    } }), aa(N2, pe, { configurable: true, enumerable: true, get: function() {
      var y3 = this._zod;
      y3 = y3.def;
      y3 = y3.values;
      if (!Array.isArray(y3)) {
        y3 = Array;
        var a2 = this._zod;
        y3 = y3.from(a2.values);
      }
      var f3 = y3.length | 0;
      if (f3 > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return y3[0];
    } }));
  };
  let h2 = (z2) => {
    if (typeof z2 == se) return z2;
    if (X(z2) && z2 != null) {
      var K2 = typeof z2.error;
      if (K2 == se) return z2.error;
      var M2 = typeof z2.message;
      if (M2 == se) return z2.message;
    }
    return jg;
  };
  let i2 = (z2) => 0 == z2 ? Z : 1 == z2 ? ha : 2 == z2 ? Ya : 3 == z2 ? oa : 4 == z2 ? Rb : 5 == z2 ? za : 6 == z2 ? Sb : 7 == z2 ? Tb : 8 == z2 ? rb : 9 == z2 ? Ub : 10 == z2 ? Ha : 11 == z2 ? eb : 12 == z2 ? Vb : 13 == z2 ? sb : 14 == z2 ? Ia : 15 == z2 ? ma : 16 == z2 ? xa : 17 == z2 ? Wb : 18 == z2 ? tb : 19 == z2 ? fb : 20 == z2 ? gb : 21 == z2 ? Ja : 38 == z2 ? ub : 22 == z2 ? vb : 23 == z2 ? Za : 24 == z2 ? Yb : 25 == z2 ? wb : 26 == z2 ? xb : 27 == z2 ? yb : 28 == z2 ? Zb : 29 == z2 ? hb : 30 == z2 ? zb : 31 == z2 ? ib : 32 == z2 ? Da : 33 == z2 ? vc : 34 == z2 ? Pa : 35 == z2 ? kb : 37 == z2 ? _b : 39 == z2 ? Qa : 40 == z2 ? $b : Y;
  let j2 = (z2, C2, O2, A2) => {
    ia(O2, Ma(A2));
    return fa(z2, ea(C2, O2));
  };
  let k2 = (z2, A2, B2) => {
    B2 = ba(a(z2), B2);
    B2.innerType = A2;
    return new (i2(z2))(B2);
  };
  let l2 = (z2) => {
    z2 = ca(z2).def.shape;
    return z2 == null ? {} : z2;
  };
  let m2 = (z2) => {
    z2 = ca(z2).def.checks;
    if (Array.isArray(z2)) {
      var E2 = z2.length | 0;
      z2 = E2 > 0;
    } else {
      z2 = false;
    }
    return z2;
  };
  let n2 = (L2, z2) => {
    var A2 = Reflect.ownKeys(z2);
    var B2 = A2.length | 0;
    z2 = 0;
    while (z2 < B2) {
      var P2 = typeof A2[z2];
      if (P2 != se) z2 = z2 + 1;
      else {
        var C2 = A2[z2];
        if (!Ca.call(L2, C2)) {
          L2 = A2[z2];
          L2 = 'Unrecognized key: "' + L2;
          throw na(L2 + Fh);
        }
        z2 = z2 + 1;
      }
    }
  };
  let o2 = (z2, A2) => {
    let B2 = {};
    aa(B2, cf, { configurable: true, enumerable: true, get: function() {
      var p3 = {};
      var d3 = l2(z2);
      mb(p3, d3);
      A2 !== void 0 && X(A2) && A2 != null && mb(p3, A2);
      aa(this, cf, { value: p3, writable: true, enumerable: true, configurable: true });
      return p3;
    } });
    return B2;
  };
  let p2 = (z2, A2, B2, C2) => {
    if (B2 && m2(z2)) {
      if (C2) throw na(Lf);
      throw na(Sf);
    }
    var D2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(ca(z2).def));
    aa(D2, cf, { configurable: true, enumerable: true, get: function() {
      var a2 = ca(z2).def.shape;
      var e3, L2, f3, o3, g3, i3;
      a2 == null && (a2 = {});
      A2 !== void 0 && A2 != null && n2(a2, A2);
      i3 = Reflect.ownKeys(a2);
      L2 = {};
      f3 = i3.length | 0;
      g3 = 0;
      while (g3 < f3) {
        o3 = i3[g3];
        if (typeof o3 != se) g3 = g3 + 1;
        else {
          e3 = a2[o3];
          (A2 == null || A2[o3]) && (e3 = B2 ? C2 ? new _a({ type: Re, innerType: e3, exact: true }) : k2(23, e3, void 0) : k2(28, e3, void 0));
          Aa(L2, o3, e3);
          g3 = g3 + 1;
        }
      }
      aa(this, cf, { value: L2, writable: true, enumerable: true, configurable: true });
      return L2;
    } });
    B2 && (D2.checks = []);
    return new ma(D2);
  };
  let q2 = (z2, O2, A2, B2) => {
    O2 = { format: O2, pattern: A2 };
    A2 = h2(B2) + "";
    A2.length > 0 && (O2.error = A2);
    return fa(z2, ea(Qe, O2));
  };
  let r2 = () => {
    let A2 = Y.prototype, z2 = true;
    aa(A2, "_def", { configurable: z2, get: function() {
      let a2 = this._zod;
      return a2.def;
    } });
    A2 = Y.prototype;
    e2(A2, Ui, function(b2) {
      var a2;
      a2 = (0, function(f3, d3) {
        return Fa(b2, f3, d3, a2);
      });
      return a2;
    }, z2);
    A2 = Y.prototype;
    e2(A2, xk, function(a2) {
      return function(b2, c3) {
        return cb(a2, b2, c3);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, gk, function(b2) {
      var a2;
      let c3 = function(t3, s3) {
        return La(b2, t3, s3, a2);
      }, d3 = globalThis.Function;
      d3 = new d3(nk, $e);
      a2 = d3(c3);
      return a2;
    }, z2);
    A2 = Y.prototype;
    e2(A2, Uh, function(a2) {
      return function(b2, c3) {
        return Lb(a2, b2, c3);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "spa", function(a2) {
      return a2.safeParseAsync;
    }, z2);
    A2 = Y.prototype;
    e2(A2, Bi, function(b2) {
      var a2;
      a2 = (0, function() {
        var i3 = arguments[1];
        var d3;
        i3 = i3 == null ? {} : ia({}, i3);
        i3.direction = uh;
        d3 = arguments[0];
        return Fa(b2, d3, i3, a2);
      });
      return a2;
    }, z2);
    A2 = Y.prototype;
    e2(A2, Ai, function(b2) {
      var a2;
      a2 = (0, function() {
        var i3 = arguments[1];
        var d3;
        i3 = i3 == null ? {} : ia({}, i3);
        i3.direction = ni;
        d3 = arguments[0];
        return Fa(b2, d3, i3, a2);
      });
      return a2;
    }, z2);
    A2 = Y.prototype;
    e2(A2, Yj, function(b2) {
      var a2;
      let c3 = function(t3, k3) {
        var i3 = k3 == null ? {} : ia({}, k3);
        i3.direction = uh;
        return La(b2, t3, i3, a2);
      };
      let d3 = globalThis.Function;
      d3 = new d3(nk, $e);
      a2 = d3(c3);
      return a2;
    }, z2);
    A2 = Y.prototype;
    e2(A2, Xj, function(b2) {
      var a2;
      let c3 = function(t3, k3) {
        var i3 = k3 == null ? {} : ia({}, k3);
        i3.direction = ni;
        return La(b2, t3, i3, a2);
      };
      let d3 = globalThis.Function;
      d3 = new d3(nk, $e);
      a2 = d3(c3);
      return a2;
    }, z2);
    A2 = Y.prototype;
    e2(A2, Re, function(a2) {
      return function() {
        return k2(23, a2, void 0);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, Kj, function(a2) {
      return function() {
        return new _a({ type: Re, innerType: a2, exact: true });
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, Ug, function(a2) {
      return function() {
        return k2(24, a2, void 0);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "nullish", function(a2) {
      return function() {
        return k2(23, k2(24, a2, void 0), void 0);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, rf, function(a2) {
      return function() {
        let k3 = ba(rf, void 0);
        k3.element = a2;
        return new xa(k3);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "or", function(a2) {
      return function(j3) {
        let b2 = [];
        b2.push(a2);
        b2.push(j3);
        let i3 = ba(cg, void 0);
        i3.options = b2;
        return new Ja(i3);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "and", function(a2) {
      return function(c3) {
        return new vb({ type: sg, left: a2, right: c3 });
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, Re, function(a2) {
      return function() {
        return k2(23, a2, void 0);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, Og, function(a2) {
      return function(j3) {
        let b2 = { type: Og, innerType: a2 };
        aa(b2, lh, { configurable: true, enumerable: true, get: function() {
          return typeof j3 == we ? j3() : j3;
        } });
        return new wb(b2);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, rg, function(a2) {
      return function(j3) {
        let b2 = { type: rg, innerType: a2 };
        aa(b2, lh, { configurable: true, enumerable: true, get: function() {
          return typeof j3 == we ? j3() : j3;
        } });
        return new xb(b2);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, ch, function(a2) {
      return function(c3) {
        var b2 = typeof c3 != we ? (0, function() {
          return c3;
        }) : c3;
        return new yb({ type: ch, innerType: a2, catchValue: b2 });
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "removeDefault", function(a2) {
      return function() {
        return ca(a2).def.innerType;
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "removeCatch", function(a2) {
      return function() {
        return ca(a2).def.innerType;
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, zf, function(a2) {
      return function(c3) {
        return k2(28, a2, c3);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, He, function(a2) {
      return function(w3) {
        let b2 = new ib({ type: He, transform: w3 });
        return new Da({ type: zg, in: a2, out: b2 });
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, zg, function(a2) {
      return function(P2) {
        return new Da({ type: zg, in: a2, out: P2 });
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, Xg, function(a2) {
      return function() {
        return k2(33, a2, void 0);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "brand", function(a2) {
      return function() {
        return a2;
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "describe", function(a2) {
      return function(c3) {
        let m3 = wa(a2, void 0), b2 = Ta().add;
        b2.call(Ta(), m3);
        b2 = Ta();
        let d3 = b2.add;
        b2.add(m3, { description: c3 });
        return m3;
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "meta", function(a2) {
      return function(e3) {
        var b2 = Ta();
        if (e3 === void 0) return b2.get(a2);
        var m3 = wa(a2, void 0);
        var c3 = b2.add;
        b2.add(m3, e3);
        return m3;
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "refine", function(a2) {
      return function() {
        let b2 = arguments[0], k3 = arguments[1];
        k3 = ba(af, k3);
        Object.assign(k3, { fn: b2, check: af });
        return fa(a2, new Pa(k3));
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, ak, function(a2) {
      return function(b2, d3) {
        return fa(a2, nb(function(e3) {
          var a3 = this;
          e3.addIssue = function(p3) {
            if (typeof p3 == se) {
              var b3 = e3.value;
              p3 = { message: p3, code: af, input: b3, inst: a3, path: [] };
            } else {
              !p3.fatal || (p3.continue = false);
              p3.code === void 0 && (p3.code = af);
              true === "input" in p3 || (p3.input = e3.value);
              p3.inst === void 0 && (p3.inst = a3);
              p3.continue === void 0 && (p3.continue = true);
            }
            var w3 = e3.issues;
            w3.push(p3);
          };
          let h3 = e3.value;
          return b2(h3, e3);
        }, d3));
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, kf, function(a2) {
      return function(w3) {
        return fa(a2, ea(kf, { transform: w3 }));
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, bf, function(a2) {
      return function() {
        var f3 = arguments.length | 0;
        var d3 = a2, g3 = 0, K2;
        while (g3 < f3) {
          K2 = arguments[g3];
          typeof K2 == we ? d3 = fa(d3, nb(K2, void 0)) : X(K2) && K2._zod !== void 0 && (d3 = fa(d3, K2));
          g3 = g3 + 1;
        }
        return d3;
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "with", function(a2) {
      return a2.check;
    }, z2);
    A2 = Y.prototype;
    e2(A2, "clone", function(a2) {
      return function(c3) {
        return wa(a2, c3);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, ti, function(a2) {
      var c3 = Ta().get;
      c3 = c3.call(Ta(), a2);
      return c3 == null ? void 0 : c3.description;
    }, z2);
    A2 = Y.prototype;
    e2(A2, "isOptional", function(a2) {
      return function() {
        return cb(a2, void 0, void 0).success;
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "isNullable", function(a2) {
      return function() {
        return cb(a2, null, void 0).success;
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "apply", function(a2) {
      return function(w3) {
        var b2 = [];
        b2.push(a2);
        var f3 = arguments.length | 0;
        var r3 = 1, d3;
        while (r3 < f3) {
          d3 = arguments[r3];
          b2.push(d3);
          r3 = r3 + 1;
        }
        return w3.apply(void 0, b2);
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "register", function(a2) {
      return function() {
        let b2 = arguments[0];
        b2 = b2.add;
        let c3 = arguments[0], d3 = arguments[1];
        b2.call(c3, a2, d3);
        return a2;
      };
    }, z2);
    A2 = Y.prototype;
    e2(A2, "~standard", function(a2) {
      return { version: 1, vendor: "zod", validate: function(j3) {
        try {
          var v3 = cb(a2, j3, void 0);
          return v3.success ? { value: v3.data } : { issues: v3.error.issues };
        } catch {
          return Lb(a2, j3, void 0).then(function(G2) {
            return G2.success ? { value: G2.data } : { issues: G2.error.issues };
          });
        }
      }, jsonSchema: { input: function() {
        a2.constructor;
        if (X(a2._zod) && typeof a2.toJSONSchema == we) {
          var s3 = arguments[0];
          s3 = s3 == null ? {} : ia({}, s3);
          s3.io = Ce;
          return a2.toJSONSchema(s3);
        }
        return { type: ca(a2).typeName };
      }, output: function() {
        var j3 = typeof a2.toJSONSchema;
        if (j3 == we) {
          var s3 = arguments[0];
          s3 = s3 == null ? {} : ia({}, s3);
          s3.io = lg;
          return a2.toJSONSchema(s3);
        }
        return { type: ca(a2).typeName };
      } } };
    }, false);
    A2 = Y.prototype;
    e2(A2, tg, function(a2) {
      return function() {
        return { type: ca(a2).typeName };
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, ze, function(a2) {
      var x3 = a2._zod;
      x3 = x3.bag;
      return x3.format === void 0 ? null : x3.format;
    }, z2);
    A2 = Z.prototype;
    e2(A2, vk, function(a2) {
      var x3 = a2._zod;
      x3 = x3.bag;
      return x3.minimum === void 0 ? null : x3.minimum;
    }, z2);
    A2 = Z.prototype;
    e2(A2, uk, function(a2) {
      var x3 = a2._zod;
      x3 = x3.bag;
      return x3.maximum === void 0 ? null : x3.maximum;
    }, z2);
  };
  let s2 = () => {
    let A2 = Z.prototype, z2 = true;
    e2(A2, rh, function(a2) {
      return function(c3, e3) {
        let b2 = { minimum: c3 };
        return j2(a2, lf, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, qh, function(a2) {
      return function(c3, e3) {
        let b2 = { maximum: c3 };
        return j2(a2, Hf, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, ne, function(a2) {
      return function(c3, e3) {
        let b2 = { length: c3 };
        return j2(a2, Bf, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, $i, function(a2) {
      return function(e3) {
        return j2(a2, lf, { minimum: 1 }, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, sf, function(a2) {
      return function(c3, e3) {
        var O2 = { includes: c3 };
        if (X(e3)) {
          var m3 = typeof e3.position;
          var b2 = m3 == xe;
        } else {
          b2 = false;
        }
        b2 && (O2.position = e3.position);
        return j2(a2, sf, O2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, ik, function(a2) {
      return function(c3, e3) {
        let b2 = { prefix: c3 };
        return j2(a2, ig, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Ck, function(a2) {
      return function(c3, e3) {
        let b2 = { suffix: c3 };
        return j2(a2, Dg, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Vi, function(a2) {
      return function(c3, e3) {
        let b2 = { format: Vi, pattern: c3 };
        return j2(a2, Qe, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Ri, function(a2) {
      return function(e3) {
        let b2 = mc;
        return q2(a2, Ri, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, _g, function(a2) {
      return function(m3) {
        var O2 = { format: _g };
        X(m3) && m3.hostname !== void 0 && (O2.hostname = m3.hostname);
        X(m3) && m3.protocol !== void 0 && (O2.protocol = m3.protocol);
        X(m3) && m3.normalize !== void 0 && (O2.normalize = m3.normalize);
        return j2(a2, Qe, O2, m3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Jh, function(a2) {
      return function(e3) {
        let b2 = db;
        return q2(a2, Jh, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, "uuidv4", function(a2) {
      return function(e3) {
        let b2 = db;
        return q2(a2, Jh, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, "uuidv6", function(a2) {
      return function(e3) {
        let b2 = db;
        return q2(a2, Jh, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, "uuidv7", function(a2) {
      return function(e3) {
        let b2 = db;
        return q2(a2, Jh, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, rj, function(a2) {
      return function(e3) {
        let b2 = nc;
        return q2(a2, rj, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, qj, function(a2) {
      return function(e3) {
        let b2 = nd;
        return q2(a2, qj, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Qi, function(a2) {
      return function(e3) {
        let b2 = od;
        return q2(a2, Qi, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, xj, function(a2) {
      return function(e3) {
        let b2 = oc;
        return q2(a2, xj, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, _h, function(a2) {
      return function(e3) {
        let b2 = pc;
        return q2(a2, _h, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Hg, function(a2) {
      return function(c3) {
        let b2 = globalThis.RegExp;
        b2 = new b2("^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$");
        return q2(a2, Hg, b2, c3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Bg, function(a2) {
      return function(e3) {
        let b2 = td;
        return q2(a2, Bg, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, sj, function(a2) {
      return function(e3) {
        let b2 = qc;
        return q2(a2, sj, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Hh, function(a2) {
      return function(e3) {
        let b2 = rc;
        return q2(a2, Hh, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Dj, function(a2) {
      return function(e3) {
        let b2 = ud;
        return q2(a2, Dj, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Ah, function(a2) {
      return function(e3) {
        let b2 = vd;
        return q2(a2, Ah, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Xh, function(a2) {
      return function(i3) {
        var O2 = { format: Xh };
        if (X(i3)) {
          var l3 = typeof i3.alg;
          var b2 = l3 == se;
        } else {
          b2 = false;
        }
        b2 && (O2.alg = i3.alg);
        return j2(a2, Qe, O2, i3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Si, function(a2) {
      return function(e3) {
        let b2 = sd;
        return q2(a2, Si, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, mk, function(a2) {
      return function(e3) {
        let b2 = rd;
        return q2(a2, mk, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, fj, function(a2) {
      return function(c3) {
        if (X(c3)) {
          var n3 = typeof c3.delimiter;
          var b2 = n3 == se;
        } else {
          b2 = false;
        }
        b2 = b2 ? c3.delimiter + "" : ":";
        b2 = $(oj + b2 + Ch + b2 + dj, jg);
        return q2(a2, fj, b2, c3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, fk, function(a2) {
      return function(e3) {
        let b2 = tc;
        return q2(a2, Qg, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, "xid", function(a2) {
      return function(e3) {
        let b2 = pd;
        return q2(a2, "xid", b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Sj, function(a2) {
      return function(e3) {
        let b2 = qd;
        return q2(a2, Sj, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, vh, function(a2) {
      return function(b2) {
        let e3 = _c(b2);
        return q2(a2, vh, e3, b2);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, bg, function(a2) {
      return function(c3) {
        let b2 = $("^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$", jg);
        return q2(a2, bg, b2, c3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Fi, function(a2) {
      return function(b2) {
        let e3 = Zc(b2);
        return q2(a2, Fi, e3, b2);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, di, function(a2) {
      return function(e3) {
        let b2 = sc;
        return q2(a2, di, b2, e3);
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, ki, function(a2) {
      return function() {
        return fa(a2, ea(kf, { transform: function(D2) {
          return D2.trim();
        } }));
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, zh, function(a2) {
      return function() {
        return fa(a2, ea(kf, { transform: function(D2) {
          return D2.toLowerCase();
        } }));
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, bk, function(a2) {
      return function() {
        return fa(a2, ea(kf, { transform: function(D2) {
          return D2.toUpperCase();
        } }));
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, eg, function(a2) {
      return function() {
        return fa(a2, ea(eg, {}));
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, fg, function(a2) {
      return function() {
        return fa(a2, ea(fg, {}));
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, Eg, function(a2) {
      return function(e3) {
        var b2 = "NFC";
        var m3 = typeof e3;
        m3 == se && (b2 = e3);
        return fa(a2, ea(kf, { transform: function(D2) {
          return D2.normalize(b2);
        } }));
      };
    }, z2);
    A2 = Z.prototype;
    e2(A2, "slugify", function(a2) {
      return function() {
        return fa(a2, ea(kf, { transform: function(D2) {
          let e3 = D2.toLowerCase().trim(), f3 = e3.replace($(dk, Oi), jg), g3 = f3.replace($(Ak, Oi), "-");
          return g3.replace($("^-+|-+$", Oi), jg);
        } }));
      };
    }, z2);
  };
  let t2 = () => {
    let A2 = ha.prototype, z2 = true;
    e2(A2, rh, function(a2) {
      return function() {
        let b2 = arguments[0];
        b2 = { value: b2, inclusive: true, origin: xe };
        return j2(a2, Ue, b2, arguments[1]);
      };
    }, z2);
    A2 = ha.prototype;
    e2(A2, qh, function(a2) {
      return function() {
        let b2 = arguments[0];
        b2 = { value: b2, inclusive: true, origin: xe };
        return j2(a2, ff, b2, arguments[1]);
      };
    }, z2);
    A2 = ha.prototype;
    e2(A2, "gt", function(a2) {
      return function() {
        let b2 = arguments[0];
        b2 = { value: b2, inclusive: false, origin: xe };
        return j2(a2, Ue, b2, arguments[1]);
      };
    }, z2);
    A2 = ha.prototype;
    e2(A2, "gte", function(a2) {
      return a2.min;
    }, z2);
    A2 = ha.prototype;
    e2(A2, "lt", function(a2) {
      return function() {
        let b2 = arguments[0];
        b2 = { value: b2, inclusive: false, origin: xe };
        return j2(a2, ff, b2, arguments[1]);
      };
    }, z2);
    A2 = ha.prototype;
    e2(A2, "lte", function(a2) {
      return a2.max;
    }, z2);
    A2 = ha.prototype;
    e2(A2, Zg, function(a2) {
      return function() {
        return fa(a2, ea(ef, { format: Zg }));
      };
    }, z2);
    A2 = ha.prototype;
    e2(A2, Gk, function(a2) {
      return function() {
        return fa(a2, ea(Ue, { value: 0, inclusive: false, origin: xe }));
      };
    }, z2);
    A2 = ha.prototype;
    e2(A2, Fk, function(a2) {
      return function() {
        return fa(a2, ea(ff, { value: 0, inclusive: false, origin: xe }));
      };
    }, z2);
    A2 = ha.prototype;
    e2(A2, _j, function(a2) {
      return function() {
        return fa(a2, ea(Ue, { value: 0, inclusive: true, origin: xe }));
      };
    }, z2);
    A2 = ha.prototype;
    e2(A2, $j, function(a2) {
      return function() {
        return fa(a2, ea(ff, { value: 0, inclusive: true, origin: xe }));
      };
    }, z2);
    A2 = ha.prototype;
    e2(A2, pg, function(a2) {
      return function(c3, e3) {
        let b2 = { value: c3 };
        return j2(a2, Rg, b2, e3);
      };
    }, z2);
    A2 = ha.prototype;
    e2(A2, "step", function(a2) {
      return a2.multipleOf;
    }, z2);
    A2 = ha.prototype;
    e2(A2, "finite", function(a2) {
      return function() {
        return a2;
      };
    }, z2);
    A2 = ha.prototype;
    e2(A2, "safe", function(a2) {
      return function() {
        return fa(a2, ea(ef, { format: ri }));
      };
    }, z2);
    A2 = ha.prototype;
    e2(A2, ze, function(a2) {
      var x3 = a2._zod;
      x3 = x3.bag;
      return x3.format === void 0 ? null : x3.format;
    }, z2);
    A2 = ha.prototype;
    e2(A2, hi, function(a2) {
      var c3 = a2._zod;
      var x3 = c3.bag;
      var b2 = globalThis.Math;
      c3 = Number.NEGATIVE_INFINITY;
      a2 = x3.minimum;
      a2 === void 0 && (a2 = c3);
      x3 = x3.exclusiveMinimum;
      x3 === void 0 || (c3 = x3);
      return b2.max(a2, c3);
    }, z2);
    A2 = ha.prototype;
    e2(A2, fi, function(a2) {
      var c3 = a2._zod;
      var x3 = c3.bag;
      var b2 = globalThis.Math;
      c3 = Number.POSITIVE_INFINITY;
      a2 = x3.maximum;
      a2 === void 0 && (a2 = c3);
      x3 = x3.exclusiveMaximum;
      x3 === void 0 || (c3 = x3);
      return b2.min(a2, c3);
    }, z2);
    A2 = ha.prototype;
    e2(A2, "isInt", function(x3) {
      var c3 = x3._zod;
      x3 = c3.bag;
      var e3 = typeof x3.format;
      c3 = e3 == se ? x3.format + "" : jg;
      c3 = c3.includes(Zg);
      c3 || (x3 = x3.multipleOf, x3 === void 0 && (x3 = 0.5), true === Number.isSafeInteger(x3) && (c3 = true));
      return c3;
    }, z2);
    A2 = ha.prototype;
    e2(A2, Ek, function(a2) {
      return true;
    }, z2);
  };
  let u2 = () => {
    let A2 = oa.prototype, z2 = true;
    e2(A2, rh, function(a2) {
      return function(b2) {
        return fa(a2, ea(Ue, { value: b2, inclusive: true, origin: Ve }));
      };
    }, z2);
    A2 = oa.prototype;
    e2(A2, qh, function(a2) {
      return function(b2) {
        return fa(a2, ea(ff, { value: b2, inclusive: true, origin: Ve }));
      };
    }, z2);
    A2 = oa.prototype;
    e2(A2, "gt", function(a2) {
      return function(b2) {
        return fa(a2, ea(Ue, { value: b2, inclusive: false, origin: Ve }));
      };
    }, z2);
    A2 = oa.prototype;
    e2(A2, "gte", function(a2) {
      return a2.min;
    }, z2);
    A2 = oa.prototype;
    e2(A2, "lt", function(a2) {
      return function(b2) {
        return fa(a2, ea(ff, { value: b2, inclusive: false, origin: Ve }));
      };
    }, z2);
    A2 = oa.prototype;
    e2(A2, "lte", function(a2) {
      return a2.max;
    }, z2);
    A2 = oa.prototype;
    e2(A2, Gk, function(a2) {
      return function() {
        return fa(a2, ea(Ue, { value: BigInt(0), inclusive: false, origin: Ve }));
      };
    }, z2);
    A2 = oa.prototype;
    e2(A2, Fk, function(a2) {
      return function() {
        return fa(a2, ea(ff, { value: BigInt(0), inclusive: false, origin: Ve }));
      };
    }, z2);
    A2 = oa.prototype;
    e2(A2, _j, function(a2) {
      return function() {
        return fa(a2, ea(Ue, { value: BigInt(0), inclusive: true, origin: Ve }));
      };
    }, z2);
    A2 = oa.prototype;
    e2(A2, $j, function(a2) {
      return function() {
        return fa(a2, ea(ff, { value: BigInt(0), inclusive: true, origin: Ve }));
      };
    }, z2);
    A2 = oa.prototype;
    e2(A2, pg, function(a2) {
      return function(c3, e3) {
        let b2 = { value: c3 };
        return j2(a2, Rg, b2, e3);
      };
    }, z2);
    A2 = oa.prototype;
    e2(A2, ze, function(a2) {
      var x3 = a2._zod;
      x3 = x3.bag;
      return x3.format === void 0 ? null : x3.format;
    }, z2);
    A2 = oa.prototype;
    e2(A2, hi, function(a2) {
      var x3 = a2._zod;
      x3 = x3.bag;
      return x3.minimum === void 0 ? null : x3.minimum;
    }, z2);
    A2 = oa.prototype;
    e2(A2, fi, function(a2) {
      var x3 = a2._zod;
      x3 = x3.bag;
      return x3.maximum === void 0 ? null : x3.maximum;
    }, z2);
  };
  let v2 = () => {
    let z2 = za.prototype;
    e2(z2, rh, function(a2) {
      return function(b2) {
        return fa(a2, ea(Ue, { value: b2, inclusive: true, origin: bg }));
      };
    }, true);
    z2 = za.prototype;
    e2(z2, qh, function(a2) {
      return function(b2) {
        return fa(a2, ea(ff, { value: b2, inclusive: true, origin: bg }));
      };
    }, true);
    z2 = za.prototype;
    e2(z2, hi, function(a2) {
      var c3 = a2._zod;
      var x3 = c3.bag;
      var b2 = globalThis.Math;
      c3 = Number.NEGATIVE_INFINITY;
      a2 = x3.minimum;
      a2 === void 0 && (a2 = c3);
      x3 = x3.exclusiveMinimum;
      x3 === void 0 || (c3 = x3);
      return b2.max(a2, c3);
    }, true);
    z2 = za.prototype;
    e2(z2, fi, function(a2) {
      var c3 = a2._zod;
      var x3 = c3.bag;
      var b2 = globalThis.Math;
      c3 = Number.POSITIVE_INFINITY;
      a2 = x3.maximum;
      a2 === void 0 && (a2 = c3);
      x3 = x3.exclusiveMaximum;
      x3 === void 0 || (c3 = x3);
      return b2.min(a2, c3);
    }, true);
    z2 = za.prototype;
    e2(z2, "minDate", function(a2) {
      var c3 = a2.minValue;
      return c3 == null || !Ka(c3) ? null : new Date(c3);
    }, true);
    z2 = za.prototype;
    e2(z2, "maxDate", function(a2) {
      var c3 = a2.maxValue;
      return c3 == null || !Ka(c3) ? null : new Date(c3);
    }, true);
  };
  let w2 = (N2) => {
    e2(N2, rh, function(a2) {
      return function(c3, e3) {
        let b2 = { minimum: c3 };
        return j2(a2, qg, b2, e3);
      };
    }, true);
    e2(N2, qh, function(a2) {
      return function(c3, e3) {
        let b2 = { maximum: c3 };
        return j2(a2, Tg, b2, e3);
      };
    }, true);
    e2(N2, Ag, function(a2) {
      return function(c3) {
        return fa(a2, ea(hg, { size: c3 }));
      };
    }, true);
    e2(N2, $i, function(a2) {
      return function() {
        return fa(a2, ea(qg, { minimum: 1 }));
      };
    }, true);
  };
  let x2 = () => {
    let A2 = ma.prototype, z2 = true;
    aa(A2, cf, { configurable: z2, enumerable: false, get: function() {
      let a2 = this._zod;
      a2 = a2.def;
      return a2.shape;
    } });
    A2 = ma.prototype;
    e2(A2, "strict", function(a2) {
      return function() {
        return wa(a2, { catchall: new eb({ type: Mh }) });
      };
    }, z2);
    A2 = ma.prototype;
    e2(A2, ui, function(a2) {
      return function() {
        return wa(a2, { catchall: new Ha({ type: ng }) });
      };
    }, z2);
    A2 = ma.prototype;
    e2(A2, "strip", function(a2) {
      return function() {
        let b2 = ia({}, ca(a2).def);
        b2.catchall = void 0;
        return new ma(b2);
      };
    }, z2);
    A2 = ma.prototype;
    e2(A2, Tj, function(a2) {
      return a2.passthrough;
    }, z2);
    A2 = ma.prototype;
    e2(A2, Zf, function(a2) {
      return function(c3) {
        return wa(a2, { catchall: c3 });
      };
    }, z2);
    A2 = ma.prototype;
    e2(A2, "extend", function(a2) {
      return function(b2) {
        if (m2(a2)) {
          var c3 = l2(a2);
          var u3 = qa(b2);
          var f3 = u3.length | 0;
          var g3 = 0, d3;
          while (g3 < f3) {
            d3 = u3[g3];
            if (ga.getOwnPropertyDescriptor(c3, d3) !== void 0) throw na("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
            g3 = g3 + 1;
          }
        }
        return wa(a2, o2(a2, b2));
      };
    }, z2);
    A2 = ma.prototype;
    e2(A2, "safeExtend", function(a2) {
      return function(c3) {
        return wa(a2, o2(a2, c3));
      };
    }, z2);
    A2 = ma.prototype;
    e2(A2, "merge", function(a2) {
      return function(c3) {
        if (m2(a2)) throw na(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
        var b2 = o2(a2, ca(c3).def.shape);
        aa(b2, Zf, { configurable: true, enumerable: true, get: function() {
          return ca(c3).def.catchall;
        } });
        var d3 = ca(c3).def.checks;
        Array.isArray(d3) ? b2.checks = d3 : b2.checks = [];
        return wa(a2, b2);
      };
    }, z2);
    A2 = ma.prototype;
    e2(A2, "pick", function(a2) {
      return function(b2) {
        if (m2(a2)) throw na(".pick() cannot be used on object schemas containing refinements");
        var M2 = l2(a2);
        n2(M2, b2);
        var L2 = {};
        var d3 = Reflect.ownKeys(b2);
        var f3 = d3.length | 0;
        var g3 = 0, o3;
        while (g3 < f3) {
          o3 = d3[g3];
          typeof o3 == se && !!b2[o3] && Aa(L2, o3, M2[o3]);
          g3 = g3 + 1;
        }
        o3 = { checks: [] };
        aa(o3, cf, { configurable: true, enumerable: true, get: function() {
          aa(this, cf, { value: L2, writable: true, enumerable: true, configurable: true });
          return L2;
        } });
        return wa(a2, o3);
      };
    }, z2);
    A2 = ma.prototype;
    e2(A2, "omit", function(a2) {
      return function(b2) {
        if (m2(a2)) throw na(".omit() cannot be used on object schemas containing refinements");
        var g3 = l2(a2);
        n2(g3, b2);
        var L2 = {};
        mb(L2, g3);
        var c3 = Reflect.ownKeys(b2);
        var f3 = c3.length | 0;
        g3 = 0;
        while (g3 < f3) {
          var y3 = typeof c3[g3];
          var d3;
          y3 == se && !!b2[c3[g3]] && (d3 = c3[g3], Reflect.deleteProperty(L2, d3));
          g3 = g3 + 1;
        }
        g3 = { checks: [] };
        aa(g3, cf, { configurable: true, enumerable: true, get: function() {
          aa(this, cf, { value: L2, writable: true, enumerable: true, configurable: true });
          return L2;
        } });
        return wa(a2, g3);
      };
    }, z2);
    A2 = ma.prototype;
    e2(A2, nj, function(a2) {
      return function(b2) {
        if (m2(a2)) throw na(Sf);
        return p2(a2, b2, true, false);
      };
    }, z2);
    A2 = ma.prototype;
    e2(A2, "exactPartial", function(a2) {
      return function(b2) {
        if (m2(a2)) throw na(Lf);
        return p2(a2, b2, true, true);
      };
    }, z2);
    A2 = ma.prototype;
    e2(A2, "required", function(a2) {
      return function(b2) {
        return p2(a2, b2, false, false);
      };
    }, z2);
    A2 = ma.prototype;
    e2(A2, Rj, function(a2) {
      return function() {
        let d3 = qa(l2(a2));
        return $c(d3, void 0);
      };
    }, z2);
  };
  let y2 = () => {
    let B2 = Za.prototype, z2 = "unwrap", A2 = true;
    e2(B2, z2, function(a2) {
      return function() {
        return ca(a2).def.innerType;
      };
    }, A2);
    B2 = Yb.prototype;
    e2(B2, z2, function(a2) {
      return function() {
        return ca(a2).def.innerType;
      };
    }, A2);
    B2 = _a.prototype;
    e2(B2, z2, function(a2) {
      return function() {
        return ca(a2).def.innerType;
      };
    }, A2);
    B2 = Zb.prototype;
    e2(B2, z2, function(a2) {
      return function() {
        return ca(a2).def.innerType;
      };
    }, A2);
    B2 = xa.prototype;
    e2(B2, z2, function(a2) {
      return function() {
        return ca(a2).def.element;
      };
    }, A2);
    B2 = wb.prototype;
    e2(B2, z2, function(a2) {
      return function() {
        return ca(a2).def.innerType;
      };
    }, A2);
    B2 = yb.prototype;
    e2(B2, z2, function(a2) {
      return function() {
        return ca(a2).def.innerType;
      };
    }, A2);
    B2 = xb.prototype;
    e2(B2, z2, function(a2) {
      return function() {
        return ca(a2).def.innerType;
      };
    }, A2);
    B2 = hb.prototype;
    e2(B2, z2, function(a2) {
      return function() {
        let b2 = ca(a2).def.getter;
        return b2();
      };
    }, A2);
    B2 = zb.prototype;
    e2(B2, z2, function(a2) {
      return function() {
        return ca(a2).def.innerType;
      };
    }, A2);
  };
  Uc = function(z2, A2, B2) {
    c2();
    var C2 = ca(z2);
    z2 = ob(C2, A2, B2);
    return da(z2) ? z2.then(function(p3) {
      return d2(p3, B2);
    }) : d2(z2, B2);
  };
  Xc = function(z2, A2, Q2, B2) {
    c2();
    if (X(z2._zod)) {
      var C2 = z2._zod;
      C2 = C2.id !== void 0;
    } else {
      C2 = false;
    }
    if (!C2) {
      C2 = { id: 0, kind: 0, handle: null, def: null, ctor: null, typeName: "", trait: "", values: null, optin: 0, optout: 0 };
      Fd(C2, A2);
      C2.ctor = Q2;
      C2.trait = B2;
      Q2 = _d(B2, Q2);
      var K2 = typeof A2.check;
      K2 == se && Q2.add(Nh);
      ae(z2, C2, Q2);
      15 == C2.kind && Zd(A2);
      $d(z2, A2);
      Od(C2);
    }
  };
  ge = function() {
    c2();
    b();
    r2();
    s2();
    t2();
    u2();
    v2();
    w2(fb.prototype);
    w2(gb.prototype);
    w2(kb.prototype);
    var z2 = kb.prototype;
    e2(z2, uj, function(a2) {
      return function() {
        var b2 = arguments[0];
        if (!Array.isArray(b2)) {
          var c3 = [];
          c3.push(b2);
          b2 = c3;
        }
        b2 = { mime: b2 };
        return j2(a2, Rh, b2, arguments[1]);
      };
    }, true);
    z2 = xa.prototype;
    e2(z2, rh, function(a2) {
      return function(c3, e3) {
        let b2 = { minimum: c3 };
        return j2(a2, lf, b2, e3);
      };
    }, true);
    z2 = xa.prototype;
    e2(z2, qh, function(a2) {
      return function(c3, e3) {
        let b2 = { maximum: c3 };
        return j2(a2, Hf, b2, e3);
      };
    }, true);
    z2 = xa.prototype;
    e2(z2, ne, function(a2) {
      return function(c3, e3) {
        let b2 = { length: c3 };
        return j2(a2, Bf, b2, e3);
      };
    }, true);
    z2 = xa.prototype;
    e2(z2, $i, function(a2) {
      return function(e3) {
        return j2(a2, lf, { minimum: 1 }, e3);
      };
    }, true);
    x2();
    z2 = Ia.prototype;
    e2(z2, "extract", function(a2) {
      return function(u3, s3) {
        var M2 = ca(a2);
        var d3 = M2.def.entries;
        var p3 = {};
        var f3 = u3.length | 0;
        var N2 = 0, b2;
        while (N2 < f3) {
          b2 = u3[N2];
          if (!Ca.call(d3, b2)) {
            N2 = u3[N2];
            N2 = "Key " + N2;
            throw na(N2 + Ki);
          }
          b2 = u3[N2];
          Aa(p3, b2, d3[u3[N2]]);
          N2 = N2 + 1;
        }
        N2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(M2.def));
        ia(N2, Ma(s3));
        Object.assign(N2, { entries: p3, checks: [] });
        return new Ia(N2);
      };
    }, true);
    z2 = Ia.prototype;
    e2(z2, "exclude", function(a2) {
      return function(u3, s3) {
        var M2 = ca(a2);
        var R2 = M2.def.entries;
        var d3 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(R2));
        var f3 = u3.length | 0;
        R2 = 0;
        while (R2 < f3) {
          var b2 = M2.def.entries;
          var c3 = u3[R2];
          if (!Ca.call(b2, c3)) {
            R2 = u3[R2];
            R2 = "Key " + R2;
            throw na(R2 + Ki);
          }
          b2 = u3[R2];
          Reflect.deleteProperty(d3, b2);
          R2 = R2 + 1;
        }
        R2 = ga.defineProperties({}, ga.getOwnPropertyDescriptors(M2.def));
        ia(R2, Ma(s3));
        Object.assign(R2, { entries: d3, checks: [] });
        return new Ia(R2);
      };
    }, true);
    y2();
    z2 = Qa.prototype;
    e2(z2, "implement", function(a2) {
      return function(w3) {
        if (typeof w3 != we) throw na("implement() must be called with a function");
        var l3 = ca(a2);
        var b2 = l3.def.input;
        l3 = l3.def.output;
        return gc(w3, b2, l3, false);
      };
    }, true);
    z2 = Qa.prototype;
    e2(z2, "implementAsync", function(a2) {
      return function(w3) {
        if (typeof w3 != we) throw na("implementAsync() must be called with a function");
        var l3 = ca(a2);
        var b2 = l3.def.input;
        l3 = l3.def.output;
        return gc(w3, b2, l3, true);
      };
    }, true);
    z2 = Qa.prototype;
    e2(z2, Ce, function(a2) {
      return function() {
        var p3 = arguments[0];
        if (Array.isArray(p3)) {
          var d3 = arguments[1];
          p3 = jc(p3, d3, void 0);
        }
        return wa(a2, { input: p3 });
      };
    }, true);
    z2 = Qa.prototype;
    e2(z2, lg, function(a2) {
      return function(q3) {
        return wa(a2, { output: q3 });
      };
    }, true);
    g2(xa, Xi);
    g2(tb, Ii);
    g2(fb, zj);
    g2(gb, Aj);
    g2(Ja, Zi);
    g2(Xb, bh);
    g2(ub, Bj);
    g2(Da, hj);
    g2(jb, Yi);
    g2(Ab, bi);
    g2(Ia, gj);
    g2(sb, vi);
  };
})();
var cb = (G2, t2, a) => {
  a === void 0 && (a = { async: false });
  G2 = Uc(G2, t2, a);
  if (da(G2)) throw new Error(ve);
  return hc(G2);
};
var Fa = (G2, t2, i2, a) => {
  G2 = cb(G2, t2, i2);
  if (G2.success) return G2.data;
  a == null && (a = Fa);
  Bb(G2.error, a);
  throw G2.error;
};
var Lb = (G2, t2, a) => {
  a == null ? a = { async: true } : (a = ia({}, a), a.async = true);
  G2 = Uc(G2, t2, a);
  return da(G2) ? G2.then(function(E2) {
    return hc(E2);
  }) : Promise.resolve(hc(G2));
};
var La = (l2, t2, i2, a) => Lb(l2, t2, i2).then(function(G2) {
  if (G2.success) return G2.data;
  var m2 = a == null ? La : a;
  Bb(G2.error, m2);
  throw G2.error;
});
var Vc = (a) => {
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
  u2 = qa(a);
  f2 = u2.length | 0;
  g2 = 0;
  while (g2 < f2) {
    B2 = a[u2[g2]];
    typeof B2 == xe && b.push(B2);
    g2 = g2 + 1;
  }
  g2 = 0;
  while (g2 < f2) {
    c2 = Number(u2[g2] + "");
    if (typeof c2 == xe) {
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
var Zd = (k2) => {
  var b = ga.getOwnPropertyDescriptor(k2, cf);
  if (b !== void 0) {
    if (b != null) {
      var w2 = typeof b.get;
      if (w2 == we) return;
    }
  }
  var a = k2.shape;
  a === void 0 && (a = {});
  a == null && (a = {});
  Qb.set(k2, a);
  aa(k2, cf, { configurable: true, get: function() {
    var b2 = {};
    var d2 = Reflect.ownKeys(a);
    var e2 = d2.length | 0;
    var c2 = 0, f2, g2, h2;
    while (c2 < e2) {
      f2 = d2[c2];
      g2 = a;
      h2 = d2[c2];
      Aa(b2, f2, Reflect.get(g2, h2));
      c2 = c2 + 1;
    }
    aa(k2, cf, { value: b2, writable: true, enumerable: true, configurable: true });
    Qb.set(k2, b2);
    return b2;
  } });
};
var _d = (C2, Q2) => {
  var U2 = la();
  U2.add(ij);
  U2.add(Wi);
  U2.add(C2);
  C2.length > 0 && U2.add(kk + C2);
  C2 = Q2.__parent;
  var a = 0;
  while (C2 !== void 0 && C2 != null && a < 8) {
    Q2 = C2.name + "";
    Q2.length > 0 && (U2.add(Q2), U2.add(kk + Q2));
    C2 = C2.__parent;
    a = a + 1 | 0;
  }
  return U2;
};
var Wc = (x2, R2) => {
  var a = R2.check + "";
  var b, c2, d2;
  (a == lf || a == qg) && (b = x2.minimum, (b === void 0 || R2.minimum > b) && (x2.minimum = R2.minimum));
  (a == Hf || a == Tg) && (b = x2.maximum, (b === void 0 || R2.maximum < b) && (x2.maximum = R2.maximum));
  a == Bf && Object.assign(x2, { minimum: R2.length, maximum: R2.length, length: R2.length });
  a == hg && Object.assign(x2, { minimum: R2.size, maximum: R2.size, size: R2.size });
  a == Ue && (b = R2.inclusive, false === b ? (b = x2.exclusiveMinimum, (b === void 0 || R2.value > b) && (x2.exclusiveMinimum = R2.value)) : (b = x2.minimum, (b === void 0 || R2.value > b) && (x2.minimum = R2.value)));
  a == ff && (b = R2.inclusive, false === b ? (b = x2.exclusiveMaximum, (b === void 0 || R2.value < b) && (x2.exclusiveMaximum = R2.value)) : (b = x2.maximum, (b === void 0 || R2.value < b) && (x2.maximum = R2.value)));
  a == Rg && x2.multipleOf === void 0 && (x2.multipleOf = R2.value);
  a == ef && (x2.format = R2.format, b = R2.format + "", (b == ri || b == Zg) && Object.assign(x2, { minimum: Number.MIN_SAFE_INTEGER, maximum: Number.MAX_SAFE_INTEGER }), b == Ti && Object.assign(x2, { minimum: -2147483648, maximum: 2147483647 }), b == Jj && Object.assign(x2, { minimum: 0, maximum: 4294967295 }), b == lj && Object.assign(x2, { minimum: -34028234663852886e22, maximum: 34028234663852886e22 }), b == mj && Object.assign(x2, { minimum: 0 - +Number.MAX_VALUE, maximum: Number.MAX_VALUE }), b.includes(Zg) && (x2.pattern = $(Bk, jg)));
  if (a == Qe || a == eg || a == fg) {
    a == Qe ? x2.format = R2.format : x2.format = a;
    R2.pattern !== void 0 && R2.pattern != null && x2.format + "" != Xh && (x2.patterns === void 0 && (x2.patterns = la()), b = x2.patterns, c2 = R2.pattern, b.add(c2));
    var ac2 = x2.format + "";
    ac2 == Hg && (x2.contentEncoding = Hg);
  }
  a == ig && (x2.patterns === void 0 && (x2.patterns = la()), b = R2.prefix, c2 = b.replace($(Uf, Oi), pj), b = x2.patterns, c2 = "^" + c2, b.add($(c2 + ".*", jg)));
  a == Dg && (x2.patterns === void 0 && (x2.patterns = la()), b = R2.suffix, c2 = b.replace($(Uf, Oi), pj), b = x2.patterns, c2 = ".*" + c2, b.add($(c2 + kk, jg)));
  if (a == sf) {
    x2.patterns === void 0 && (x2.patterns = la());
    b = R2.includes;
    b = b.replace($(Uf, Oi), pj);
    var ec2 = typeof R2.position;
    if (ec2 == xe) {
      c2 = x2.patterns;
      d2 = "^.{" + R2.position;
      var ab2 = d2 + "}" + b;
      c2.add($(ab2, jg));
    } else {
      c2 = x2.patterns;
      c2.add($(b + "", jg));
    }
  }
  a == Rh && (x2.mime = R2.mime);
};
var $d = (x2, k2) => {
  x2 = x2._zod;
  x2 = x2.bag;
  var o2 = typeof k2.check;
  o2 == se && Wc(x2, k2);
  typeof k2.format == se && x2.format === void 0 && (x2.format = k2.format);
  k2 = k2.checks;
  if (!!Array.isArray(k2)) {
    var f2 = k2.length | 0;
    var g2 = 0;
    while (g2 < f2) {
      Wc(x2, ec(k2[g2]));
      g2 = g2 + 1;
    }
  }
};
var _ = (C2, b) => {
  var c2 = {};
  if (b !== void 0 && X(b._zodProto)) {
    var d2 = b._zodProto;
    ga.setPrototypeOf(c2, d2);
  }
  var a = (0, function(k2) {
    if (this === void 0 || this == null || !X(this)) {
      var p2 = a.prototype;
      p2 = ga.create(p2);
    } else {
      p2 = this;
    }
    k2 !== void 0 && X(k2) && typeof k2.type == se && Xc(p2, k2, a, C2);
    return p2;
  });
  a.__parent = b;
  a._zodProto = c2;
  b === void 0 || (c2 = a.prototype, b = b.prototype, ga.setPrototypeOf(c2, b));
  b = a.prototype;
  aa(b, Se, { configurable: true, enumerable: true, get: function() {
    let a2 = this._zod;
    return a2.def;
  } });
  b = a.prototype;
  aa(b, Je, { configurable: true, enumerable: true, get: function() {
    let a2 = this._zod;
    a2 = a2.def;
    return a2.type;
  } });
  b = a;
  aa(b, jh, Ea(C2));
  b = a;
  aa(b, "init", Ea(function(l2, k2) {
    k2 !== void 0 && X(k2) && Xc(l2, k2, a, C2);
    return l2;
  }));
  b = a;
  c2 = Symbol.hasInstance;
  aa(b, c2, Ea(function(l2) {
    if (l2 == null || !X(l2)) return false;
    var U2 = l2._zod;
    if (U2 == null) return false;
    U2 = U2.traits;
    return !!U2.has(C2);
  }));
  return a;
};
var Ma = (q2) => {
  if (q2 == null) return {};
  if (typeof q2 == se) return { error: function() {
    return q2;
  } };
  if (typeof q2 == we) return { error: q2 };
  if (!X(q2)) return {};
  if (q2.message !== void 0) {
    if (q2.error !== void 0) throw na("Cannot specify both `message` and `error` params");
    q2.error = q2.message;
  }
  Reflect.deleteProperty(q2, Ke);
  var C2 = typeof q2.error;
  if (C2 == se) {
    var a = q2.error;
    q2 = ia({}, q2);
    q2.error = function() {
      return a;
    };
    return q2;
  }
  return q2;
};
var Yc = (a) => {
  if (typeof a == xe) {
    a = +a | 0;
    return a == -1 ? "(?:[01]\\d|2[0-3]):[0-5]\\d" : 0 == a ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" : "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{" + a + "}";
  }
  return "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
};
var Zc = (s2) => {
  var a = void 0;
  X(s2) && s2 != null && (a = s2.precision);
  var g2 = "^" + Yc(a);
  return $(g2 + kk, jg);
};
var _c = (s2) => {
  var a = void 0;
  if (X(s2) && s2 != null) {
    a = s2.precision;
    var b = s2.offset, c2;
    c2 = s2.local;
  } else {
    b = false;
    c2 = false;
  }
  a = Yc(a);
  s2 = b ? "Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)" : "Z";
  s2 = "(?:" + s2 + ")";
  c2 && (s2 = s2 + "?");
  return $("^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:" + a + s2 + yk, jg);
};
var ba = (k2, s2) => {
  k2 = { type: k2 };
  ia(k2, Ma(s2));
  return k2;
};
var $c = (a, k2) => {
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
  k2 = ba(ji, k2);
  k2.entries = a;
  return new Ia(k2);
};
var ic = (a, k2) => {
  a == null && (a = {});
  k2 = ba(Xf, k2);
  k2.shape = a;
  return new ma(k2);
};
var jc = (a, b, s2) => {
  var k2 = ba(mi, s2);
  k2.items = a;
  b !== void 0 && b != null && (k2.rest = b);
  return new Wb(k2);
};
var Mb = (a, b, k2) => {
  if (b == null || b._zod === void 0) {
    k2 = new Z(ba(se, void 0));
    var q2 = a;
    a = k2;
    k2 = b;
    b = q2;
  }
  k2 = ba(Ig, k2);
  Object.assign(k2, { keyType: a, valueType: b });
  return new tb(k2);
};
var be = (o2, S2, g2) => {
  var k2 = ba(cg, g2);
  Object.assign(k2, { options: S2, discriminator: o2, inclusive: false });
  if (Array.isArray(S2)) {
    var f2 = S2.length | 0;
    g2 = 0;
    while (g2 < f2) {
      var H2 = S2[g2];
      if (H2 === void 0) g2 = g2 + 1;
      else if (H2 == null) g2 = g2 + 1;
      else if (!X(H2)) g2 = g2 + 1;
      else {
        H2 = H2._zod;
        if (H2 === void 0) g2 = g2 + 1;
        else if (H2 == null) g2 = g2 + 1;
        else {
          H2 = H2.def;
          if (H2 === void 0) g2 = g2 + 1;
          else if (H2 == null) g2 = g2 + 1;
          else {
            H2 = Qb.get(H2);
            if (H2 === void 0) g2 = g2 + 1;
            else if (H2 == null) g2 = g2 + 1;
            else {
              if (!Ca.call(H2, o2)) throw na(Le + g2 + Fh);
              g2 = g2 + 1;
            }
          }
        }
      }
    }
  }
  return new Xb(k2);
};
var ad = (a, q2, s2) => {
  let b = jb, c2 = s2.decode;
  return new b({ type: zg, in: a, out: q2, transform: c2, reverseTransform: s2.encode });
};
var ke = () => {
  let y2 = [];
  y2.push("true");
  y2.push("1");
  y2.push("yes");
  y2.push("on");
  y2.push("y");
  y2.push("enabled");
  return y2;
};
var le = () => {
  let y2 = [];
  y2.push("false");
  y2.push("0");
  y2.push("no");
  y2.push("off");
  y2.push("n");
  y2.push("disabled");
  return y2;
};
var me = (g2) => {
  var e2 = Ma(g2);
  var a = e2.truthy;
  var b = e2.falsy;
  (a === void 0 || !Array.isArray(a)) && (a = ke());
  (b === void 0 || !Array.isArray(b)) && (b = le());
  var c2 = false;
  var il2 = typeof e2.case;
  if (il2 == se) {
    var kl2 = e2.case + "";
    g2 = "sensitive" == kl2;
  } else {
    g2 = false;
  }
  g2 && (c2 = true);
  if (!c2) {
    var h2 = [];
    var f2 = a.length | 0;
    g2 = 0;
    while (g2 < f2) {
      var ll2 = typeof a[g2];
      if (ll2 == se) h2.push(a[g2].toLowerCase());
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
      var nl2 = typeof b[g2];
      nl2 == se ? h2.push(b[g2].toLowerCase()) : (w2 = b[g2], h2.push(w2));
      g2 = g2 + 1;
    }
    b = h2;
  }
  h2 = la();
  f2 = la();
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
  var j2 = new g2({ type: se, error: e2.error });
  g2 = Ya;
  var k2 = new g2({ type: Jf, error: e2.error });
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
    S2.push({ code: Rf, expected: jk, values: R2, input: P2, inst: d2 });
    return {};
  };
  w2 = function(z2, d3) {
    return true === z2 ? a[0] : b[0];
  };
  i2 = jb;
  d2 = new i2({ type: zg, in: j2, out: k2, transform: g2, reverseTransform: w2, error: e2.error });
  return d2;
};
var ce = (s2) => {
  var a;
  a = new hb({ type: Ei, getter: function() {
    let b = [], K2 = new Z(ba(se, s2));
    b.push(K2);
    b.push(new ha(ba(xe, void 0)));
    b.push(new Ya(ba(Jf, void 0)));
    b.push(new rb({ type: yg }));
    let c2 = a;
    K2 = ba(rf, void 0);
    K2.element = c2;
    b.push(new xa(K2));
    K2 = new Z(ba(se, void 0));
    b.push(Mb(K2, a, void 0));
    K2 = ba(cg, void 0);
    K2.options = b;
    return new Ja(K2);
  } });
  return a;
};
var Na = (a, T2, b, s2) => {
  a == null && (a = Z);
  var k2 = ba(se, s2);
  k2.format = T2;
  k2.check = Qe;
  b !== void 0 && b != null && (k2.pattern = b);
  return new a(k2);
};
var de = (a, s2) => {
  var c2 = X(s2) && typeof s2.enc == se ? s2.enc + "" : Pj;
  var C2 = a + "_" + c2;
  var b = a + "";
  a = uc;
  c2 == Pj && ("md5" == b && (a = Ad), b == rk && (a = Bd), b == Gj && (a = uc), b == Hj && (a = Cd), b == Ij && (a = Dd));
  c2 == Hg && ("md5" == b && (a = $("^[A-Za-z0-9+/]{22}==$", jg)), b == rk && (a = $("^[A-Za-z0-9+/]{27}=$", jg)), b == Gj && (a = $("^[A-Za-z0-9+/]{43}=$", jg)), b == Hj && (a = $("^[A-Za-z0-9+/]{64}$", jg)), b == Ij && (a = $("^[A-Za-z0-9+/]{86}==$", jg)));
  c2 == Bg && ("md5" == b && (a = $("^[A-Za-z0-9_-]{22}$", jg)), b == rk && (a = $("^[A-Za-z0-9_-]{27}$", jg)), b == Gj && (a = $("^[A-Za-z0-9_-]{43}$", jg)), b == Hj && (a = $("^[A-Za-z0-9_-]{64}$", jg)), b == Ij && (a = $("^[A-Za-z0-9_-]{86}$", jg)));
  return Na(void 0, C2, a, s2);
};
var ee = (T2, a, k2) => {
  k2 = ba(se, k2);
  Object.assign(k2, { check: Qe, format: T2 });
  typeof a == we && (k2.fn = a);
  X(a) && a != null && typeof a.test == we && (k2.pattern = a, k2.fn === void 0 && (k2.fn = function(c2) {
    return a.test(c2);
  }));
  return new Z(k2);
};
var fe = (s2) => {
  var z2 = void 0;
  var a = void 0;
  X(s2) && s2 != null && (z2 = s2.input, a = s2.output);
  Array.isArray(z2) && (z2 = jc(z2, void 0, void 0));
  z2 === void 0 && (z2 = new Ha({ type: ng }), s2 = ba(rf, void 0), s2.element = z2, z2 = new xa(s2));
  a === void 0 && (a = new Ha({ type: ng }));
  return new Qa({ type: we, input: z2, output: a });
};
var bd = (p2) => {
  var a = Hb();
  p2 !== void 0 && p2 != null && (ia(a, p2), true === "localeError" in p2 && (Wa = p2.localeError), true === "customError" in p2 && (qb = p2.customError));
  return a;
};
var cd = (h2, t2, i2) => Fa(h2, t2, i2, cd);
var dd = (h2, t2, i2) => La(h2, t2, i2, dd);
var Nb = (p2, a) => {
  p2 = p2 == null ? {} : ia({}, p2);
  p2.direction = a;
  return p2;
};
var ed = (h2, t2, i2) => Fa(h2, t2, Nb(i2, uh), ed);
var fd = (h2, t2, i2) => Fa(h2, t2, Nb(i2, ni), fd);
var gd = (h2, t2, i2) => La(h2, t2, Nb(i2, uh), gd);
var hd = (h2, t2, i2) => La(h2, t2, Nb(i2, ni), hd);
var he = (L2) => {
  var q2 = [];
  if (!X(L2) || L2 == null) return q2;
  var u2 = qa(L2);
  var f2 = u2.length | 0;
  var g2 = 0, a;
  while (g2 < f2) {
    a = u2[g2];
    q2.push(ea(Wg, { property: a, schema: L2[u2[g2]] }));
    g2 = g2 + 1;
  }
  return q2;
};
var id = (h2) => h2;
var W = (o2, j2) => {
  lb[o2] = j2;
};
var ga = Object;
var c = ga.prototype;
var Ca = c.hasOwnProperty;
c = ga.prototype;
var jd = c.isPrototypeOf;
c = Array.prototype;
c.slice;
var kd = ga.is;
var Oa = [];
var Ob = 0;
var Pb = void 0;
var Va = false;
var ld = { configurable: true, get: function() {
  Va = true;
} };
var kc = /* @__PURE__ */ new WeakMap();
var Qb = /* @__PURE__ */ new WeakMap();
var Wa = void 0;
var qb = void 0;
var Xa = void 0;
var md = { major: 4, minor: 4, patch: 3 };
var ua = (0, function(g2) {
  if (this === void 0 || this == null || !X(this)) {
    var a = ua.prototype;
    a = ga.create(a);
  } else {
    a = this;
  }
  cc(a, g2);
  a.stack === void 0 && Bb(a, ua);
  return a;
});
var Ga = (0, function(c2) {
  let a = Ga.prototype;
  a = ga.create(a);
  cc(a, c2);
  Bb(a, Ga);
  return a;
});
var lc = (0, function(b) {
  let a = Error;
  a = new a("Encountered unidirectional transform during encode: " + b);
  a.name = "ZodEncodeError";
  return a;
});
var mc = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var db = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
var nc = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var nd = /^[cC][0-9a-z]{6,}$/;
var od = /^[0-9a-z]+$/;
var oc = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var pc = /^[a-zA-Z0-9_-]{21}$/;
var qc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var rc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
c = /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$/;
var sc = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var pd = /^[0-9a-vA-V]{20}$/;
var qd = /^[A-Za-z0-9]{27}$/;
var rd = /^\+[1-9]\d{6,14}$/;
var R = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
var sd = new RegExp("^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", "u");
var td = /^[A-Za-z0-9_-]*$/;
var ud = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var vd = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var tc = /^\d(?:[ -]?\d){11,18}$/;
var wd = /^[0-9a-fA-F]*$/;
var xd = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
var yd = /^https?$/;
var zd = /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
var Ad = /^[0-9a-fA-F]{32}$/;
var Bd = /^[0-9a-fA-F]{40}$/;
var uc = /^[0-9a-fA-F]{64}$/;
var Cd = /^[0-9a-fA-F]{96}$/;
var Dd = /^[0-9a-fA-F]{128}$/;
var Y = _(ij, void 0);
var e = "ZodString";
var Z = _(e, Y);
var f = "ZodNumber";
var ha = _(f, Y);
var g = "ZodBoolean";
var Ya = _(g, Y);
var h = "ZodBigInt";
var oa = _(h, Y);
var i = "ZodSymbol";
var Rb = _(i, Y);
var za = _("ZodDate", Y);
var Sb = _("ZodNaN", Y);
var j = "ZodUndefined";
var Tb = _(j, Y);
var rb = _("ZodNull", Y);
var Ub = _("ZodAny", Y);
var k = "ZodUnknown";
var Ha = _(k, Y);
var l = "ZodNever";
var eb = _(l, Y);
var Vb = _("ZodVoid", Y);
var sb = _(vi, Y);
var Ia = _(gj, Y);
var m = "ZodObject";
var ma = _(m, Y);
var xa = _(Xi, Y);
var n = "ZodTuple";
var Wb = _(n, Y);
var tb = _(Ii, Y);
var fb = _(zj, Y);
var gb = _(Aj, Y);
var Ja = _(Zi, Y);
var Xb = _(bh, Ja);
var ub = _(Bj, Ja);
var o = "ZodIntersection";
var vb = _(o, Y);
var p = "ZodOptional";
var Za = _(p, Y);
var q = "ZodExactOptional";
var _a = _(q, Za);
var r = "ZodNullable";
var Yb = _(r, Y);
var s = "ZodDefault";
var wb = _(s, Y);
var t = "ZodPrefault";
var xb = _(t, Y);
var u = "ZodCatch";
var yb = _(u, Y);
var v = "ZodNonOptional";
var Zb = _(v, Y);
var hb = _("ZodLazy", Y);
var w = "ZodPromise";
var zb = _(w, Y);
var ib = _(Mj, Y);
var Da = _(hj, Y);
var jb = _(Yi, Da);
var Ab = _(bi, Da);
var x = "ZodReadonly";
var vc = _(x, Y);
var y = "ZodCustom";
var Pa = _(y, Y);
var kb = _("ZodFile", Y);
var z = "ZodSuccess";
var _b = _(z, Y);
var A = "ZodFunction";
var Qa = _(A, Y);
var B = "ZodTemplateLiteral";
var $b = _(B, Y);
var C = "ZodISODateTime";
var wc = _(C, Z);
var D = "ZodISODate";
var E = _(D, Z);
var F = "ZodISOTime";
var xc = _(F, Z);
var G = "ZodISODuration";
var H = _(G, Z);
var S = _("ZodEmail", Z);
var T = _("ZodGUID", Z);
var U = _("ZodUUID", Z);
var yc = _("ZodURL", Z);
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
  let G2 = { errors: [] };
  a = a.issues;
  dc(a, [], G2, b);
  return G2;
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
    c2 && (F2 = "  \u2192 at " + Kc(F2.path), a.push(F2));
    g2 = g2 + 1;
  }
  return a.join("\n");
};
var K = (a, b) => {
  let c2 = { _errors: [] };
  a = a.issues;
  Gb(a, [], c2, b);
  return c2;
};
var L = Jc;
var Hk = Ta();
var d = ua;
var M = Ga;
var N = (a, j2) => Tc(ca(a)).get(j2);
ge();
var Ik = (0, function(d2) {
  return new Z(ba(se, d2));
});
var Jk = (0, function(d2) {
  return new ha(ba(xe, d2));
});
var Kk = (0, function(d2) {
  return new Ya(ba(Jf, d2));
});
var Lk = (0, function(d2) {
  return new oa(ba(Ve, d2));
});
var Mk = (0, function(d2) {
  return new Rb(ba(Yf, d2));
});
var Nk = (0, function(d2) {
  return new za(ba(bg, d2));
});
var Ok = (0, function(d2) {
  return new Sb(ba(Yh, d2));
});
var Pk = (0, function() {
  return new Tb({ type: Ff });
});
var Qk = (0, function() {
  return new rb({ type: yg });
});
var Rk = (0, function() {
  return new Ub({ type: Oj });
});
var Sk = (0, function() {
  return new Ha({ type: ng });
});
var Tk = (0, function() {
  return new eb({ type: Mh });
});
var Uk = (0, function() {
  return new Vb({ type: Gi });
});
var Vk = (0, function() {
  var y2 = arguments[0];
  var a = arguments[1];
  if (!Array.isArray(y2)) {
    var d2 = [];
    d2.push(y2);
    y2 = d2;
  }
  d2 = ba(Eh, a);
  d2.values = y2;
  d2 = new sb(d2);
  return d2;
});
var O = (0, function(a, b) {
  return $c(a, b);
});
var P = (0, function(a, b) {
  return ic(a, b);
});
var Wk = (0, function(a, b) {
  let d2 = ic(a, b);
  return d2.strict();
});
var Xk = (0, function(a, b) {
  let d2 = ic(a, b);
  return d2.passthrough();
});
var Yk = (0, function() {
  let a = arguments[0], d2 = arguments[1];
  d2 = ba(rf, d2);
  d2.element = a;
  return new xa(d2);
});
var Zk = (0, function(a, b, c2) {
  return jc(a, b, c2);
});
var _k = (0, function(a, b, c2) {
  return Mb(a, b, c2);
});
var $k = (0, function() {
  let a = arguments[0], d2 = arguments[1];
  d2 = ba(cg, d2);
  d2.options = a;
  return new Ja(d2);
});
var al = (0, function() {
  let a = arguments[0], k2 = arguments[1];
  k2 = ba(cg, k2);
  Object.assign(k2, { options: a, inclusive: false });
  return new ub(k2);
});
var bl = (0, function(c2, a, e2) {
  let b = c2 + "";
  return be(b, a, e2);
});
var cl = (0, function(a, d2) {
  return new vb({ type: sg, left: a, right: d2 });
});
var dl = (0, function(a, d2) {
  return new fb({ type: ph, keyType: a, valueType: d2 });
});
var el = (0, function() {
  let a = arguments[0], d2 = arguments[1];
  d2 = ba(uf, d2);
  d2.valueType = a;
  return new gb(d2);
});
var fl = (0, function(d2) {
  return new hb({ type: Ei, getter: d2 });
});
var gl = (0, function(d2) {
  return new zb({ type: pi, innerType: d2 });
});
var hl = (0, function() {
  var a = arguments[0];
  var k2 = arguments[1];
  typeof a == we || (a = (0, function(a2) {
    return true;
  }));
  k2 = ba(af, k2);
  Object.assign(k2, { fn: a, check: af });
  k2 = new Pa(k2);
  return k2;
});
var il = (0, function(d2) {
  return new kb(ba(hh, d2));
});
var jl = (0, function() {
  var a = arguments[0];
  var k2 = arguments[1];
  k2 = ba(af, k2);
  Object.assign(k2, { check: af, abort: true, fn: function(t2) {
    return ra(a, t2) ? true : false;
  } });
  k2 = new Pa(k2);
  var b = ca(k2).handle._zod;
  b = b.bag;
  b.Class = a;
  return k2;
});
var kl = (0, function(d2) {
  return new ib({ type: He, transform: d2 });
});
var ll = (0, function(a) {
  return fe(a);
});
var ml = (0, function() {
  let d2 = arguments[0];
  d2 = new ha(ba(xe, d2));
  return fa(d2, ea(ef, { format: Zg }));
});
var nl = (0, function() {
  let d2 = arguments[0];
  d2 = new ha(ba(xe, d2));
  return fa(d2, ea(ef, { format: Ti }));
});
var ol = (0, function() {
  let d2 = arguments[0];
  d2 = new ha(ba(xe, d2));
  return fa(d2, ea(ef, { format: Jj }));
});
var pl = (0, function() {
  let d2 = arguments[0];
  d2 = new ha(ba(xe, d2));
  return fa(d2, ea(ef, { format: lj }));
});
var ql = (0, function() {
  let d2 = arguments[0];
  d2 = new ha(ba(xe, d2));
  return fa(d2, ea(ef, { format: mj }));
});
var rl = (0, function(a, d2) {
  return new Da({ type: zg, in: a, out: d2 });
});
var sl = (0, function() {
  let a = arguments[0];
  a = a.optional;
  let d2 = arguments[0];
  return a.call(d2);
});
var tl = (0, function() {
  let a = arguments[0];
  a = a.nullable;
  let d2 = arguments[0];
  return a.call(d2);
});
var Nl = mc;
var Ol = function(b) {
  return Na(S, Ri, Nl, b);
};
var Pl = db;
var Ql = function(b) {
  return Na(U, Jh, Pl, b);
};
var Rl = nc;
var Sl = function(b) {
  return Na(T, rj, Rl, b);
};
var ul = (0, function() {
  var k2 = arguments[0];
  k2 = ba(se, k2);
  Object.assign(k2, { format: _g, check: Qe, abort: false });
  k2 = new yc(k2);
  return k2;
});
var vl = (0, function() {
  var k2 = arguments[0];
  k2 = ba(se, k2);
  Object.assign(k2, { format: _g, check: Qe, abort: false, protocol: yd, hostname: zd });
  k2 = new yc(k2);
  return k2;
});
var wl = (0, function(a, b, c2) {
  return ad(a, b, c2);
});
var xl = (0, function() {
  var A2 = arguments[0];
  A2 = ca(A2);
  var a = A2.def.out;
  var b = A2.def.in;
  var c2 = A2.def.reverseTransform;
  A2 = ad(a, b, { decode: c2, encode: A2.def.transform });
  return A2;
});
var yl = (0, function() {
  let a = arguments[0], d2 = arguments[1], b = Ab;
  a = new ib({ type: He, transform: a });
  return new b({ type: zg, in: a, out: d2 });
});
var zl = (0, function(a) {
  return me(a);
});
var Al = (0, function(d2) {
  return new _b({ type: vf, innerType: d2 });
});
var Bl = (0, function(a) {
  return ce(a);
});
var Cl = (0, function(d2) {
  return Na(void 0, Pj, wd, d2);
});
var Dl = (0, function(d2) {
  return Na(void 0, _f, xd, d2);
});
var El = (0, function(a, b) {
  return de(a, b);
});
var Fl = (0, function(a, b, c2) {
  let d2 = Mb(a, b, c2);
  ca(d2).def.partial = true;
  return d2;
});
var Gl = (0, function() {
  let a = arguments[0];
  a = a.keyof;
  let d2 = arguments[0];
  return a.call(d2);
});
var Hl = (0, function() {
  let a = arguments[0];
  a = a.catch;
  let b = arguments[0], d2 = arguments[1];
  return a.call(b, d2);
});
var Q = (0, function() {
  let a = arguments[0];
  a = a.default;
  let b = arguments[0], d2 = arguments[1];
  return a.call(b, d2);
});
var Il = (0, function() {
  let a = arguments[0];
  a = a.prefault;
  let b = arguments[0], d2 = arguments[1];
  return a.call(b, d2);
});
var Jl = (0, function() {
  let a = arguments[0];
  a = a.nonoptional;
  let d2 = arguments[0];
  return a.call(d2);
});
var Kl = (0, function() {
  let a = arguments[0];
  a = a.readonly;
  let d2 = arguments[0];
  return a.call(d2);
});
var Tl = R;
var Ul = function(b) {
  return Na(V, Xh, Tl, b);
};
var Vl = void 0;
var Wl = pc;
var Xl = function(b) {
  return Na(Vl, _h, Wl, b);
};
var Yl = void 0;
var Zl = oc;
var _l = function(b) {
  return Na(Yl, xj, Zl, b);
};
var $l = void 0;
var am = qc;
var bm = function(b) {
  return Na($l, sj, am, b);
};
var cm = void 0;
var dm = rc;
var em = function(b) {
  return Na(cm, Hh, dm, b);
};
R = { string: function() {
  let d2 = arguments[0];
  d2 = new Z(ba(se, d2));
  ca(d2).def.coerce = true;
  return d2;
}, number: function() {
  let d2 = arguments[0];
  d2 = new ha(ba(xe, d2));
  ca(d2).def.coerce = true;
  return d2;
}, boolean: function() {
  let d2 = arguments[0];
  d2 = new Ya(ba(Jf, d2));
  ca(d2).def.coerce = true;
  return d2;
}, bigint: function() {
  let d2 = arguments[0];
  d2 = new oa(ba(Ve, d2));
  ca(d2).def.coerce = true;
  return d2;
}, date: function() {
  let d2 = arguments[0];
  d2 = new za(ba(bg, d2));
  ca(d2).def.coerce = true;
  return d2;
} };
var fm = c;
var gm = sc;
var Ll = { datetime: function(c2) {
  let a = wc, e2 = _c(c2);
  return Na(a, vh, e2, c2);
}, date: function(b) {
  return Na(E, bg, fm, b);
}, time: function(c2) {
  let a = xc, e2 = Zc(c2);
  return Na(a, Fi, e2, c2);
}, duration: function(b) {
  return Na(H, di, gm, b);
} };
var Ml = { en: function() {
  return { localeError: function(F2) {
    return Ic(F2);
  } };
} };
c = {};
var lb = {};
W(se, Ik);
W(xe, Jk);
W(Jf, Kk);
W(Ve, Lk);
W(Yf, Mk);
W(bg, Nk);
W(Yh, Ok);
W(Ff, Pk);
W(yg, Qk);
W(Oj, Rk);
W(ng, Sk);
W(Mh, Tk);
W(Gi, Uk);
W(Eh, Vk);
W(ji, O);
W("nativeEnum", O);
W(Xf, P);
W("strictObject", Wk);
W("looseObject", Xk);
W("interface", P);
W(rf, Yk);
W(mi, Zk);
W(Ig, _k);
W(cg, $k);
W("xor", al);
W("discriminatedUnion", bl);
W(sg, cl);
W(ph, dl);
W(uf, el);
W(Ei, fl);
W(pi, gl);
W(af, hl);
W(hh, il);
W("instanceof", jl);
W(He, kl);
W(we, ll);
W(Zg, ml);
W(Ti, nl);
W(Jj, ol);
W(lj, pl);
W(mj, ql);
W(zg, rl);
W(Re, sl);
W(Ug, tl);
W(Ri, Ol);
W(Jh, Ql);
W(rj, Sl);
W(_g, ul);
W("httpUrl", vl);
W("codec", wl);
W("invertCodec", xl);
W("preprocess", yl);
W(jk, zl);
W(vf, Al);
W("json", Bl);
W(Pj, Cl);
W(_f, Dl);
W("hash", El);
W("partialRecord", Fl);
W("looseRecord", function(a, b, c2) {
  let d2 = Mb(a, b, c2);
  ca(d2).def.mode = Tj;
  return d2;
});
W(fk, function(d2) {
  return Na(void 0, Qg, tc, d2);
});
W(fj, function() {
  var d2 = arguments[0];
  var a = X(d2) && typeof d2.delimiter == se ? d2.delimiter : ":";
  a = a + "";
  d2 = Na(void 0, fj, $(oj + a + Ch + a + dj, jg), d2);
  return d2;
});
W(Rj, Gl);
W(ch, Hl);
W(Og, Q);
W("_default", Q);
W(rg, Il);
W(zf, Jl);
W(Xg, Kl);
W(Xh, Ul);
W(_h, Xl);
W(xj, _l);
W(sj, bm);
W(Hh, em);
W(Mf, R);
W("iso", Ll);
W("locales", Ml);
W("core", c);
W(Ui, cd);
W(xk, (h2, t2, i2) => cb(h2, t2, i2));
W(gk, dd);
W(Uh, (h2, t2, i2) => Lb(h2, t2, i2));
W(Bi, ed);
W(Ai, fd);
W(Yj, gd);
W(Xj, hd);
W("treeifyError", I);
W("prettifyError", J);
W("formatError", K);
W("flattenError", L);
W("registry", () => {
  let a = /* @__PURE__ */ new WeakMap();
  return Lc(a, /* @__PURE__ */ new Map());
});
W("globalRegistry", Hk);
W("config", bd);
W(ij, Y);
W(e, Z);
W(f, ha);
W(g, Ya);
W(h, oa);
W(i, Rb);
W("ZodDate", za);
W("ZodNaN", Sb);
W(j, Tb);
W("ZodNull", rb);
W("ZodAny", Ub);
W(k, Ha);
W(l, eb);
W("ZodVoid", Vb);
W(vi, sb);
W(gj, Ia);
W(m, ma);
W(Xi, xa);
W(n, Wb);
W(Ii, tb);
W(zj, fb);
W(Aj, gb);
W(Zi, Ja);
W(bh, Xb);
W(Bj, ub);
W(o, vb);
W(p, Za);
W(r, Yb);
W(s, wb);
W(t, xb);
W(u, yb);
W(v, Zb);
W("ZodLazy", hb);
W(w, zb);
W(Mj, ib);
W(hj, Da);
W(Yi, jb);
W(bi, Ab);
W(x, vc);
W(y, Pa);
W("ZodFile", kb);
W(A, Qa);
W(B, $b);
W(z, _b);
W(th, d);
W("ZodRealError", M);
W("getDiscriminatedOption", N);
W(q, _a);
W(Kj, function(d2) {
  return new _a({ type: Re, innerType: d2, exact: true });
});
W("slugify", function() {
  return ea(kf, { transform: function(D2) {
    let e2 = D2.toLowerCase().trim(), f2 = e2.replace($(dk, Oi), jg), g2 = f2.replace($(Ak, Oi), "-");
    return g2.replace($("^-+|-+$", Oi), jg);
  } });
});
W($g, function(a) {
  return he(a);
});
W(Wg, function(a, b, c2) {
  let d2 = { property: a, schema: b };
  ia(d2, Ma(c2));
  return ea(Wg, d2);
});
W("templateLiteral", function() {
  var a = arguments[0];
  var d2 = arguments[1];
  d2 = ba(wf, d2);
  d2.parts = a;
  d2 = new $b(d2);
  var b = d2._zod;
  ca(d2);
  aa(b, Ee, { value: Md(a), writable: true, configurable: true, enumerable: true });
  return d2;
});
W("stringFormat", function(a, b, c2) {
  return ee(a, b, c2);
});
W(bf, function(a, b) {
  return nb(a, b);
});
W("with", function(a, b) {
  return nb(a, b);
});
W("refine", function() {
  let a = arguments[0], k2 = arguments[1];
  k2 = ba(af, k2);
  Object.assign(k2, { fn: a, check: af });
  return new Pa(k2);
});
W(ak, function(a, d2) {
  return nb(function(e2) {
    var h2 = this;
    e2.addIssue = function(p2) {
      if (typeof p2 == se) {
        var b2 = e2.value;
        p2 = { message: p2, code: af, input: b2, inst: h2, path: [] };
      } else {
        !p2.fatal || (p2.continue = false);
        p2.code === void 0 && (p2.code = af);
        true === "input" in p2 || (p2.input = e2.value);
        p2.inst === void 0 && (p2.inst = h2);
        p2.continue === void 0 && (p2.continue = true);
      }
      var x2 = e2.issues;
      x2.push(p2);
    };
    let b = e2.value;
    return a(b, e2);
  }, d2);
});
W(ki, function() {
  return ea(kf, { transform: function(D2) {
    return D2.trim();
  } });
});
W(uk, function() {
  var O2 = arguments[0];
  var d2 = arguments[1];
  O2 = { maximum: O2 };
  X(d2) && d2 != null && ia(O2, Ma(d2));
  d2 = ea(Hf, O2);
  return d2;
});
W(vk, function() {
  var O2 = arguments[0];
  var d2 = arguments[1];
  O2 = { minimum: O2 };
  X(d2) && d2 != null && ia(O2, Ma(d2));
  d2 = ea(lf, O2);
  return d2;
});
W(C, wc);
W(D, E);
W(F, xc);
W(G, H);
W(tk, d);
W("NEVER", { status: Vf });
W("fromJSONSchema", function(e2, f2) {
  e2;
  f2;
  return new Ha({ type: ng });
});
W("visit", id);
W("ZodIssueCode", { invalid_type: mh, too_big: si, too_small: Th, invalid_format: If, not_multiple_of: Sg, unrecognized_keys: Ye, invalid_union: nf, invalid_key: yf, invalid_element: Wf, invalid_value: Rf, custom: af });
W("TimePrecision", { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 });
ia(c, lb);
Object.assign(c, { $ZodError: d, $ZodRealError: M, $ZodEncodeError: lc, toDotPath: Kc, flattenError: L, formatError: K, treeifyError: I, prettifyError: J, getDiscriminatedOption: N, $ZodType: Y, $ZodPipe: Da, $ZodCodec: jb, $ZodPreprocess: Ab, $ZodString: Z, $ZodCustom: Pa, $ZodNever: eb, $ZodUnknown: Ha, $ZodNumber: ha });
Object.assign(c, { $ZodString: Z, $ZodType: Y, $ZodObject: ma, $ZodOptional: Za, visit: id });
Object.assign(c, { $ZodObject: ma, $ZodOptional: Za, $ZodExactOptional: _a, config: bd, globalConfig: Hb(), util: Rd() });
c = c.util;
lb.util = c;
var ie = lb;

// ../zodlil/dist/compat.js
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

// ../zodlil/dist/visit.js
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

// ../zodlil/dist/async-api.js
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

// ../zodlil/dist/official-json-schema.js
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

// ../zodlil/dist/regexes.js
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

// ../zodlil/dist/index.js
applyCompat(ie);
installVisit(ie);
installAsyncApi(ie);
ie.toJSONSchema = toJSONSchema;
ie.core.toJSONSchema = toJSONSchema;
ie.core.JSONSchemaGenerator = JSONSchemaGenerator;
ie.regexes = regexes_exports;
ie.core.regexes = regexes_exports;
ie.compile = ie.compile ?? ((schema) => schema);
if (ie.ZodType && ie.ZodType.prototype) {
  ie.ZodType.prototype.toJSONSchema = function toJSONSchemaMethod(params) {
    return toJSONSchema(this, params);
  };
}
var index_default = ie;
var string2 = ie.string;
var number2 = ie.number;
var boolean2 = ie.boolean;
var bigint2 = ie.bigint;
var symbol = ie.symbol;
var date2 = ie.date;
var nan = ie.nan;
var $undefined = ie.undefined;
var $null = ie.null;
var any = ie.any;
var unknown = ie.unknown;
var never = ie.never;
var $void = ie.void;
var literal = ie.literal;
var $enum = ie.enum;
var nativeEnum = ie.nativeEnum;
var object = ie.object;
var strictObject = ie.strictObject;
var looseObject = ie.looseObject;
var $interface = ie.interface;
var array = ie.array;
var tuple = ie.tuple;
var record = ie.record;
var union = ie.union;
var xor = ie.xor;
var discriminatedUnion = ie.discriminatedUnion;
var intersection = ie.intersection;
var map = ie.map;
var $set = ie.set;
var lazy = ie.lazy;
var promise = ie.promise;
var custom = ie.custom;
var file = ie.file;
var $instanceof = ie.instanceof;
var transform = ie.transform;
var $function = ie.function;
var int = ie.int;
var int32 = ie.int32;
var uint32 = ie.uint32;
var float32 = ie.float32;
var float64 = ie.float64;
var pipe = ie.pipe;
var optional = ie.optional;
var nullable = ie.nullable;
var email2 = ie.email;
var uuid2 = ie.uuid;
var guid2 = ie.guid;
var url = ie.url;
var httpUrl = ie.httpUrl;
var codec = ie.codec;
var invertCodec = ie.invertCodec;
var preprocess = ie.preprocess;
var stringbool = ie.stringbool;
var success = ie.success;
var json = ie.json;
var hex2 = ie.hex;
var hostname2 = ie.hostname;
var hash = ie.hash;
var partialRecord = ie.partialRecord;
var looseRecord = ie.looseRecord;
var creditCard2 = ie.creditCard;
var mac2 = ie.mac;
var keyof = ie.keyof;
var $catch = ie.catch;
var _default = ie._default;
var prefault = ie.prefault;
var nonoptional = ie.nonoptional;
var readonly = ie.readonly;
var jwt = ie.jwt;
var nanoid2 = ie.nanoid;
var ulid2 = ie.ulid;
var ipv42 = ie.ipv4;
var ipv62 = ie.ipv6;
var coerce = ie.coerce;
var iso = ie.iso;
var locales = ie.locales;
var core = ie.core;
var parse = ie.parse;
var safeParse = ie.safeParse;
var parseAsync = ie.parseAsync;
var safeParseAsync = ie.safeParseAsync;
var encode = ie.encode;
var decode = ie.decode;
var encodeAsync = ie.encodeAsync;
var decodeAsync = ie.decodeAsync;
var treeifyError = ie.treeifyError;
var prettifyError = ie.prettifyError;
var formatError = ie.formatError;
var flattenError = ie.flattenError;
var registry = ie.registry;
var globalRegistry2 = ie.globalRegistry;
var config = ie.config;
var ZodType = ie.ZodType;
var ZodString = ie.ZodString;
var ZodNumber = ie.ZodNumber;
var ZodBoolean = ie.ZodBoolean;
var ZodBigInt = ie.ZodBigInt;
var ZodSymbol = ie.ZodSymbol;
var ZodDate = ie.ZodDate;
var ZodNaN = ie.ZodNaN;
var ZodUndefined = ie.ZodUndefined;
var ZodNull = ie.ZodNull;
var ZodAny = ie.ZodAny;
var ZodUnknown = ie.ZodUnknown;
var ZodNever = ie.ZodNever;
var ZodVoid = ie.ZodVoid;
var ZodLiteral = ie.ZodLiteral;
var ZodEnum = ie.ZodEnum;
var ZodObject = ie.ZodObject;
var ZodArray = ie.ZodArray;
var ZodTuple = ie.ZodTuple;
var ZodRecord = ie.ZodRecord;
var ZodMap = ie.ZodMap;
var ZodSet = ie.ZodSet;
var ZodUnion = ie.ZodUnion;
var ZodDiscriminatedUnion = ie.ZodDiscriminatedUnion;
var ZodXor = ie.ZodXor;
var ZodIntersection = ie.ZodIntersection;
var ZodOptional = ie.ZodOptional;
var ZodNullable = ie.ZodNullable;
var ZodDefault = ie.ZodDefault;
var ZodPrefault = ie.ZodPrefault;
var ZodCatch = ie.ZodCatch;
var ZodNonOptional = ie.ZodNonOptional;
var ZodLazy = ie.ZodLazy;
var ZodPromise = ie.ZodPromise;
var ZodTransform = ie.ZodTransform;
var ZodPipe = ie.ZodPipe;
var ZodCodec = ie.ZodCodec;
var ZodPreprocess = ie.ZodPreprocess;
var ZodReadonly = ie.ZodReadonly;
var ZodCustom = ie.ZodCustom;
var ZodFile = ie.ZodFile;
var ZodFunction = ie.ZodFunction;
var ZodTemplateLiteral = ie.ZodTemplateLiteral;
var ZodSuccess = ie.ZodSuccess;
var ZodError = ie.ZodError;
var ZodRealError = ie.ZodRealError;
var getDiscriminatedOption = ie.getDiscriminatedOption;
var ZodExactOptional = ie.ZodExactOptional;
var exactOptional = ie.exactOptional;
var slugify = ie.slugify;
var properties = ie.properties;
var property = ie.property;
var templateLiteral = ie.templateLiteral;
var stringFormat = ie.stringFormat;
var check = ie.check;
var $with = ie.with;
var refine = ie.refine;
var superRefine = ie.superRefine;
var trim = ie.trim;
var maxLength = ie.maxLength;
var minLength = ie.minLength;
var ZodISODateTime = ie.ZodISODateTime;
var ZodISODate = ie.ZodISODate;
var ZodISOTime = ie.ZodISOTime;
var ZodISODuration = ie.ZodISODuration;
var $ZodError = ie.$ZodError;
var NEVER = ie.NEVER;
var fromJSONSchema = ie.fromJSONSchema;
var visit2 = ie.visit;
var ZodIssueCode = ie.ZodIssueCode;
var TimePrecision = ie.TimePrecision;
var util = ie.util;
var int64 = ie.int64;
var uint64 = ie.uint64;
var describe = ie.describe;
var meta = ie.meta;
var e1642 = ie.e164;
var cidrv42 = ie.cidrv4;
var cidrv62 = ie.cidrv6;
var base642 = ie.base64;
var base64url2 = ie.base64url;
var xid2 = ie.xid;
var ksuid2 = ie.ksuid;
var cuid3 = ie.cuid;
var cuid22 = ie.cuid2;
var emoji2 = ie.emoji;
var uuidv4 = ie.uuidv4;
var uuidv6 = ie.uuidv6;
var uuidv7 = ie.uuidv7;
var deepPartial2 = ie.deepPartial;
var safeEncode = ie.safeEncode;
var safeDecode = ie.safeDecode;
var safeEncodeAsync = ie.safeEncodeAsync;
var safeDecodeAsync = ie.safeDecodeAsync;
var setErrorMap = ie.setErrorMap;
var compile = ie.compile;
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
