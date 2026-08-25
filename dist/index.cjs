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
  z: () => ne
});
module.exports = __toCommonJS(index_exports);

// dist/zod.core.js
var qf = "length";
var rf = "issues";
var sf = "value";
var tf = "Encountered Promise during synchronous parse. Use .parseAsync() instead.";
var vf = "_zod";
var wf = "string";
var xf = "innerType";
var zf = "function";
var Af = "number";
var Bf = "input";
var Cf = "format";
var Hf = "optional";
var Jf = "pattern";
var Nf = "transform";
var Pf = "type";
var Qf = "optout";
var Rf = "message";
var Sf = 'Invalid discriminated union option at index "';
var Tf = "values";
var Uf = "string_format";
var Vf = "def";
var Wf = "optin";
var Xf = "continue";
var Yf = "greater_than";
var Zf = "check";
var _f = "nonoptional";
var ag = "invalid_type";
var bg = "bigint";
var dg = "options";
var eg = "$pending";
var fg = "unrecognized_keys";
var gg = "defaulted";
var hg = "number_format";
var jg = "return async function(data,params){return await impl(data,params)}";
var kg = "custom";
var lg = "shape";
var ng = "less_than";
var pg = "__proto__";
var rg = "min_length";
var tg = "inst";
var vg = "overwrite";
var yg = "invalid_union";
var zg = "array";
var Cg = "includes";
var Eg = "set";
var Fg = "aborted";
var Gg = "success";
var Hg = "max_length";
var Ig = "template_literal";
var Kg = "schema";
var Lg = "invalid_key";
var Mg = "discriminator";
var Ng = "length_equals";
var Og = "catchall";
var Qg = "undefined";
var Tg = "invalid_format";
var Ug = "boolean";
var Wg = ".exactPartial() cannot be used on object schemas containing refinements";
var Xg = "object";
var Zg = "valueType";
var _g = "invalid_value";
var $g = ".partial() cannot be used on object schemas containing refinements";
var ah = "propValues";
var bh = "[.*+?^${}()|[\\]\\\\]";
var ch = "invalid_element";
var dh = "symbol";
var eh = "backward";
var fh = "hostname";
var ih = "date";
var jh = "union";
var lh = "lowercase";
var mh = "uppercase";
var oh = "size_equals";
var ph = "starts_with";
var qh = "";
var sh = "output";
var th = "element";
var vh = "unknown";
var xh = "multipleOf";
var yh = "min_size";
var zh = "prefault";
var Ah = "property";
var Bh = "intersection";
var Ch = "toJSONSchema";
var Hh = "null";
var Ih = "pipe";
var Jh = "size";
var Kh = "base64url";
var Lh = "ends_with";
var Mh = "normalize";
var Ph = "base64";
var Qh = "record";
var Uh = "_errors";
var Vh = "default";
var Wh = "credit_card";
var Xh = "multiple_of";
var Yh = "not_multiple_of";
var _h = "max_size";
var $h = "nullable";
var bi = "readonly";
var di = "int";
var ei = "url";
var fi = "properties";
var gi = "$ZodCheckStringFormat";
var hi = "ZodDiscriminatedUnion";
var ji = "catch";
var li = "coerce";
var ni = "Invalid input";
var oi = "out";
var pi = "file";
var ri = "name";
var ti = "defaultValue";
var vi = "id";
var wi = "in";
var xi = "map";
var yi = "max";
var zi = "min";
var Ai = "parse";
var Bi = "ZodError";
var Ci = "datetime";
var Di = "toString";
var Gi = "toLowerCase";
var Hi = "cidrv6";
var Ji = "){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}";
var Ki = "keyType";
var Li = "literal";
var Ni = '"';
var Oi = "ipv6";
var Qi = "uuid";
var Ui = "never";
var Vi = "$ZodCheck";
var Zi = "mime_type";
var $i = "too_small";
var aj = "safeParseAsync";
var dj = "jwt";
var ej = "nan";
var gj = "nanoid";
var jj = "ZodPreprocess";
var kj = "addIssue";
var lj = "duration";
var mj = "maxValue";
var oj = "minValue";
var qj = "enum";
var sj = "trim";
var tj = "Invalid input: expected ";
var vj = "email";
var wj = "tuple";
var xj = "forward";
var Aj = "promise";
var Bj = "safeint";
var Cj = "too_big";
var Dj = "description";
var Ej = "passthrough";
var Fj = "ZodLiteral";
var Ij = " items";
var Jj = "$waits";
var Lj = "decode";
var Mj = "encode";
var Oj = "lazy";
var Pj = "time";
var Qj = "void";
var Rj = "ZodRecord";
var Tj = " not found in enum";
var Wj = "g";
var Yj = "cuid2";
var Zj = "emoji";
var _j = "int32";
var $j = "regex";
var ak = "$ZodType";
var bk = "ZodArray";
var ck = "ZodCodec";
var dk = "ZodUnion";
var fk = "nonempty";
var jk = "){5}[0-9a-f]{2}$";
var kk = "i";
var lk = "mac";
var mk = "ZodEnum";
var nk = "ZodPipe";
var ok = "ZodType";
var rk = "float32";
var sk = "float64";
var tk = "partial";
var uk = "^(?:[0-9A-F]{2}";
var vk = "\\$&";
var wk = "cuid";
var xk = "guid";
var yk = "ipv4";
var zk = "mime";
var Ck = "ulid";
var Fk = "ZodMap";
var Gk = "ZodSet";
var Hk = "ZodXor";
var Jk = "cidrv4";
var Mk = "sha256";
var Nk = "sha384";
var Ok = "sha512";
var Pk = "uint32";
var Qk = "exactOptional";
var Sk = "ZodTransform";
var Tk = "^(";
var Uk = "any";
var Vk = "hex";
var Xk = "keyof";
var Yk = "ksuid";
var Zk = "loose";
var _k = "right";
var al = " characters";
var bl = "decodeAsync";
var cl = "encodeAsync";
var el = "nonnegative";
var fl = "nonpositive";
var gl = "superRefine";
var hl = "toUpperCase";
var jl = "[^\\w\\s-]";
var ll = "creditCard";
var ml = "parseAsync";
var nl = "startsWith";
var ol = "stringbool";
var pl = "$";
var rl = "e164";
var sl = "impl";
var tl = "left";
var wl = "sha1";
var yl = "$ZodError";
var zl = "maxLength";
var Al = "minLength";
var Cl = "safeParse";
var Dl = ")$";
var Fl = " entries";
var Gl = "[\\s_-]+";
var Hl = "^-?\\d+$";
var Il = "endsWith";
var Jl = "exactly ";
var Kl = "isFinite";
var Ll = "negative";
var Ml = "positive";
var j = (a) => !(a == null) && typeof a == Xg;
var z = () => /* @__PURE__ */ new Set();
var D = (a) => u.keys(a);
var w = (a, b) => u.assign(a, b);
var Fa = (a, b) => {
  if (b === void 0 || b == null || !j(b)) return;
  var c = Reflect.ownKeys(b);
  var g = c.length | 0;
  var h = 0, d, e;
  while (h < g) {
    d = u.getOwnPropertyDescriptor(b, c[h]);
    !(d === void 0) && !(d == null) && u.defineProperty(a, c[h], d);
    h = h + 1;
  }
};
var p = (a, b, c) => {
  u.defineProperty(a, b, c);
};
var Q = (a, b, c) => {
  p(a, b, { value: c, writable: true, enumerable: true, configurable: true });
};
var Ga = (a, b) => {
  var c = Error.captureStackTrace;
  typeof c == zf && c(a, b);
};
var _ = (a) => true === Number.isFinite(a);
var B = (a) => new Error(a);
var n = (a, b) => new RegExp(a, b);
var R = (a, b) => !!a.test(b);
var o = (a) => j(a) && typeof a.then == zf;
var _a = (a) => ({ enumerable: false, writable: true, configurable: true, value: a });
var U = (a) => ({ enumerable: false, writable: false, configurable: true, value: a });
var N = (d, a) => new globalThis.Function(d + "", a + "");
var Id = (a, b, c, d, e) => {
  let g = new globalThis.Function("parseAsync,applyFn,input,output,implFn", "return async function(){var a=Array.from(arguments);var p=input?await parseAsync(input,a):a;var r=await applyFn(implFn,this,p);return output?await parseAsync(output,r):r}");
  let f = [];
  f.push(a);
  f.push(b);
  f.push(c);
  f.push(d);
  f.push(e);
  return g.apply(void 0, f);
};
var E = (a, b) => {
  if (b == null) return false;
  return true === cd.call(a.prototype, b);
};
var Ie = (a, b, c) => {
  if (a == hg) return hd(b, c);
  if (a == rg) return jd(b, c);
  if (a == Hg) return kd(b, c);
  if (a == Yf) return ld(b, c);
  if (a == ng) return md(b, c);
  if (a == Uf) {
    if (b.pattern === void 0 || !(typeof b.format == wf)) return;
    if (b.format + "" != vj) return;
    return id(b, c);
  }
};
var of = (a) => {
  if (a === void 0) return;
  if (a._zod === void 0) return;
  var b = a._zod;
  if (!(typeof b.check == zf)) {
    var c = b.def;
    typeof c.check == wf && (a = Ie(c.check + "", c, a), a === void 0 || (b.check = a));
  }
};
var Jd = (a) => {
  var b = [];
  var h = a._zod;
  h = h.def;
  typeof h.check == wf && b.push(a);
  a = h.checks;
  if (!(a === void 0) && Array.isArray(a)) {
    var d = a.length | 0;
    h = 0;
    while (h < d) {
      of(a[h]);
      var c = a[h];
      b.push(c);
      h = h + 1;
    }
  }
  return b;
};
var Kd = (a) => {
  var c = a.length | 0;
  var h = 0, b;
  while (h < c) {
    b = a[h];
    b._zod === void 0 ? b = true : (b = b._zod, b = !(typeof b.check == zf));
    if (b) return false;
    h = h + 1;
  }
  return true;
};
var ve = (a, b, c, d) => {
  var e = b.length | 0;
  if (0 == e) return a;
  if (!Kd(b)) return c;
  return function(J2, f) {
    var I2 = this;
    if (!(f === void 0) && !(f == null)) {
      var i2;
      if (typeof f.direction == wf && f.direction + "" == eh) return c.call(I2, J2, f);
      i2 = f.skipChecks;
      if (true === i2) return a.call(I2, J2, f);
    }
    i2 = {};
    i2.go = function(j2, h) {
      h = +h | 0;
      while (h < e) {
        var k2 = b[h];
        var Ma2;
        if (!(k2 === void 0) && !(k2 == null)) {
          var l2 = k2._zod;
          if (l2 === void 0 || l2 == null) return c.call(I2, j2, f);
          var m2 = l2.def;
          var r2 = !(m2 === void 0) && !(m2 == null) && typeof m2.when == zf, p2, q2, n2, Na2, Pa2, Oa2, Qa2, s2;
          Ma2 = j2.aborted;
          Ma2 = true === Ma2;
          if (!Ma2) {
            p2 = j2.issues;
            s2 = p2.length | 0;
            n2 = 0;
            while (n2 < s2) {
              q2 = p2[n2];
              q2 = q2.continue;
              r2 ? false === q2 && (Ma2 = true) : true === q2 || (Ma2 = true);
              n2 = n2 + 1;
            }
          }
          r2 ? (Ma2 = (j2.issues.length | 0) > 0 && Ma2, !Ma2 && !m2.when(j2) && (Ma2 = true)) : Ma2 = (j2.issues.length | 0) > 0 && Ma2;
          if (!Ma2) {
            Ma2 = l2.check;
            if (!(typeof Ma2 == zf)) return c.call(I2, j2, f);
            Ma2 = Ma2.call(k2, j2);
            if (o(Ma2)) {
              if (!(f === void 0) && !(f == null) && false === f.async) throw new Error(tf);
              Na2 = h + 1 | 0;
              return Promise.resolve(Ma2).then(/* @__PURE__ */ ((a2, b2, c2) => function(e2) {
                return a2.go(b2, +(0 + c2));
              })(i2, j2, Na2));
            }
          }
        }
        h = h + 1 | 0;
      }
      Pa2 = j2.issues;
      Qa2 = Pa2.length | 0;
      Na2 = 0;
      while (Na2 < Qa2) {
        Oa2 = Pa2[Na2];
        Oa2.schema === void 0 && (Oa2 = Pa2[Na2], Oa2.schema = d);
        Na2 = Na2 + 1;
      }
      return j2;
    };
    var K2 = a.call(I2, J2, f);
    if (o(K2)) return K2.then(function(c2) {
      return i2.go(c2, 0);
    });
    return i2.go(K2, 0);
  };
};
function Ld(a, b) {
  var c = b.type + "";
  a.id = pb;
  pb = pb + 1 | 0;
  a.kind = Md(c);
  c == jh && !(typeof b.discriminator == wf) && false === b.inclusive && (a.kind = 38);
  a.handle = void 0;
  a.def = b;
  a.ctor = void 0;
  a.typeName = c;
  c == di && (a.typeName = Af);
  a.trait = ok;
  a.values = void 0;
  a.optin = 0;
  a.optout = 0;
  a.hasChecks = false;
  V.push(a);
  Nd(a);
}
var Md = (a) => a == wf ? 0 : a == Af ? 1 : a == di ? 1 : a == Ug ? 2 : a == bg ? 3 : a == dh ? 4 : a == ih ? 5 : a == ej ? 6 : a == Qg ? 7 : a == Hh ? 8 : a == Uk ? 9 : a == vh ? 10 : a == Ui ? 11 : a == Qj ? 12 : a == Li ? 13 : a == qj ? 14 : a == Xg ? 15 : a == zg ? 16 : a == wj ? 17 : a == Qh ? 18 : a == xi ? 19 : a == Eg ? 20 : a == jh ? 21 : a == Bh ? 22 : a == Hf ? 23 : a == $h ? 24 : a == Vh ? 25 : a == zh ? 26 : a == ji ? 27 : a == _f ? 28 : a == Oj ? 29 : a == Aj ? 30 : a == Nf ? 31 : a == Ih ? 32 : a == bi ? 33 : a == kg ? 34 : a == pi ? 35 : a == Gg ? 37 : a == zf ? 39 : a == Ig ? 40 : 34;
var Nd = (a) => {
  var h = a.typeName;
  var b = a.def;
  if (h == Qg) {
    h = z();
    h.add(void 0);
    a.values = h;
  } else {
    if (h == Hh) {
      h = z();
      h.add(null);
      a.values = h;
    } else {
      if (h == Li) {
        var c = z();
        h = b.values;
        if (Array.isArray(h)) {
          var g = h.length | 0;
          b = 0;
          while (b < g) {
            var d = h[b];
            c.add(d);
            b = b + 1;
          }
        }
        a.values = c;
      } else {
        if (h == qj) {
          c = z();
          b = Qc(b.entries);
          g = b.length | 0;
          h = 0;
          while (h < g) {
            d = b[h];
            c.add(d);
            h = h + 1;
          }
          a.values = c;
        } else {
          if (h == Hf) {
            h = y(a, xf);
            if (h) {
              if (!(h.values === void 0)) {
                c = z();
                d = Array.from(h.values);
                var e = d.length | 0;
                g = 0;
                while (g < e) {
                  var f = d[g];
                  c.add(f);
                  g = g + 1;
                }
                b.exact || c.add(void 0);
                a.values = c;
              }
              2 == h.optin ? a.optin = 2 : a.optin = 1;
            } else {
              a.optin = 1;
            }
            a.optout = 1;
          } else {
            if (h == $h) {
              h = y(a, xf);
              if (h) {
                if (!(h.values === void 0)) {
                  b = z();
                  g = Array.from(h.values);
                  d = g.length | 0;
                  c = 0;
                  while (c < d) {
                    e = g[c];
                    b.add(e);
                    c = c + 1;
                  }
                  b.add(null);
                  a.values = b;
                }
                a.optin = h.optin;
                a.optout = h.optout;
              }
            } else {
              if (h == Vh || h == zh || h == ji) {
                b = y(a, xf);
                h == ji ? (a.optin = 1, !b || (h = b, a.values = h.values, 2 == h.optin && (a.optin = 2))) : (a.optin = 2, !b || (a.values = b.values));
              } else {
                if (h == bi) {
                  h = y(a, xf);
                  !h || (a.values = h.values, a.optin = h.optin, a.optout = h.optout);
                } else {
                  if (h == _f) {
                    h = y(a, xf);
                    !h || (a.values = h.values);
                  } else {
                    if (h == Nf) {
                      a.optin = 1;
                    } else {
                      if (h == Ih) {
                        h = y(a, wi);
                        !h || (a.values = h.values, a.optin = h.optin, a.optout = h.optout);
                      } else {
                        if (h == jh) {
                          e = b.options;
                          if (Array.isArray(e)) {
                            var i2 = e.length | 0;
                            h = i2 > 0;
                            var j2 = z();
                            c = false;
                            g = false;
                            d = false;
                            f = 0;
                            while (f < i2) {
                              b = J(e[f]);
                              if (b) {
                                2 == b.optin && (c = true);
                                0 != b.optin && (g = true);
                                1 == b.optout && (d = true);
                                if (b.values === void 0) {
                                  h = false;
                                } else {
                                  var k2 = Array.from(b.values);
                                  var l2 = k2.length | 0;
                                  b = 0;
                                  while (b < l2) {
                                    var m2 = k2[b];
                                    j2.add(m2);
                                    b = b + 1;
                                  }
                                }
                              } else {
                                h = false;
                              }
                              f = f + 1;
                            }
                            h && (a.values = j2);
                            c ? a.optin = 2 : g && (a.optin = 1);
                            d && (a.optout = 1);
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
  a.hasChecks = false;
  typeof a.def.check == wf ? a.hasChecks = true : (h = a.def.checks, Array.isArray(h) && (h.length | 0) > 0 && (a.hasChecks = true));
};
var $a = (e, a, b, c) => {
  var d = c.issues;
  (d.length | 0) > 0 && ka(c.issues, e.issues, b);
  a[b] = c.value;
};
var gc = (a) => {
  var b = a.handle._zod;
  b = b.optin;
  if (typeof b == wf) {
    if (b + "" == gg) return 2;
    if (b + "" == Hf) return 1;
    return 0;
  }
  return a.optin;
};
var hc = (a) => {
  var b = a.handle._zod;
  b = b.optout;
  if (typeof b == wf && b + "" == Hf) return 1;
  return a.optout;
};
var ic = (e, a, b, c, d, f, g) => {
  if (c && 0 == (g.issues.length | 0)) {
    g.value === void 0 ? a[b] = void 0 : a[b] = g.value;
    return;
  }
  var h = 1 == f;
  var j2 = 0 != d;
  f = !c && h && 1 == d;
  !f && (g.issues.length | 0) > 0 && (j2 && h && !c ? f = true : ka(g.issues, e.issues, b));
  !f && !c && 0 == d && (d = g.issues, 0 == (d.length | 0) && (d = O(_f, void 0), Ia(d, b), e = e.issues, e.push(d)), f = true);
  if (f) return;
  g.value === void 0 ? c && (a[b] = void 0) : a[b] = g.value;
};
var ab = (a) => a.replace(n(bh, Wj), vk) + "";
var bb = (a) => {
  a = a + "";
  var b = a.length | 0;
  var c = a.startsWith("^") ? 1 : 0;
  !a.endsWith(pl) || (b = b - 1 | 0);
  return a.slice(c, b) + "";
};
var Od = (a) => {
  var h = a.kind;
  var b = {};
  var c;
  j(a.handle) && j(a.handle._zod) && (b = a.handle._zod, b = b.bag);
  if (0 == h) {
    if (j(b) && !(b.patterns === void 0)) {
      c = Array.from(b.patterns);
      h = c.length | 0;
      if (h > 0) return c[h - 1];
    }
    if (!(a.def.pattern === void 0)) return a.def.pattern;
    a = typeof b.minimum == Af ? b.minimum + "" : "0";
    b = typeof b.maximum == Af ? b.maximum + "" : qh;
    return n("^[\\s\\S]{" + a + "," + b + "}$", qh);
  }
  if (1 == h) {
    if (!(b.pattern === void 0) && !(b.pattern == null)) return b.pattern;
    a = typeof b.format == wf ? b.format + "" : qh;
    if (a.includes(di)) return n(Hl, qh);
    return n("^-?\\d+(?:\\.\\d+)?$", qh);
  }
  if (2 == h) return n("^(?:true|false)$", kk);
  if (3 == h) return n("^-?\\d+n?$", qh);
  if (7 == h) return n("^undefined$", qh);
  if (8 == h) return n("^null$", qh);
  if (13 == h) {
    var d = Array.from(a.values);
    b = [];
    var g = d.length | 0;
    h = 0;
    while (h < g) {
      a = d[h];
      typeof a == wf ? b.push(ab(a + "")) : a == null && a === void 0 ? b.push(Qg) : a == null ? b.push(Hh) : b.push(ab(a + ""));
      h = h + 1;
    }
    return n(Tk + b.join("|") + Dl, qh);
  }
  if (14 == h) {
    c = Array.from(a.values);
    d = [];
    g = c.length | 0;
    b = 0;
    while (b < g) {
      a = c[b];
      (typeof a == wf || typeof a == Af || typeof a == dh) && d.push(ab(a + ""));
      b = b + 1;
    }
    return n(Tk + d.join("|") + Dl, qh);
  }
  if (40 == h) {
    a = a.handle._zod;
    return a.pattern;
  }
};
var Pd = (a) => {
  var d = [];
  var g = a.length | 0;
  var h = 0, b, c, e;
  while (h < g) {
    b = a[h];
    if (b == null || typeof b == wf || typeof b == Af || typeof b == Ug || typeof b == bg) {
      d.push(ab(b + ""));
    } else {
      if (j(b) && j(b._zod)) {
        c = b._zod;
        c = c.pattern;
        if (c === void 0 || c == null) {
          a = b._zod;
          a = a.traits;
          !(a === void 0) ? (a = Array.from(a), a = (a.length | 0) > 0 ? a[0] + "" : qh) : a = qh;
          throw new Error("Invalid template literal part, no pattern found: " + a);
        }
        b = c.source + "";
        if (0 == b.length) throw new Error("Invalid template literal part");
        d.push(bb(b));
      } else {
        throw new Error("Invalid template literal part: " + b);
      }
    }
    h = h + 1;
  }
  return n("^" + d.join(qh) + pl, qh);
};
var Qd = (a, b) => {
  let c = /* @__PURE__ */ Symbol.for("evaluating"), d = { value: void 0 };
  p(a, xf, { configurable: true, get: function() {
    if (d.value === c) return;
    d.value === void 0 && (d.value = c, d.value = b());
    return d.value;
  }, set: function(d2) {
    p(a, xf, { value: d2, configurable: true, writable: true });
  } });
};
var x = (a, b, c) => {
  a = a.handle._zod;
  var e = u.getPrototypeOf(a);
  var d;
  if (true === b in e && !(qb === a)) {
    qb = void 0;
    return;
  }
  qb = a;
  p(e, b, { configurable: true, get: function() {
    p(this, b, pd);
    var d2 = la;
    la = false;
    var s2;
    try {
      s2 = c(this);
      la ? Reflect.deleteProperty(this, b) : p(this, b, { configurable: true, writable: true, value: s2 });
      d2 && (la = true);
      return s2;
    } catch (a2) {
      Reflect.deleteProperty(this, b);
      d2 && (la = true);
      throw a2;
    }
  }, set: function(c2) {
    p(this, b, { configurable: true, writable: true, value: c2 });
  } });
};
var jc = (a) => 1 == a.optin ? Hf : 2 == a.optin ? gg : void 0;
var kc = (a) => 1 == a.optout ? Hf : void 0;
var Rd = (b) => {
  var c = b.kind;
  var d = b.handle._zod;
  var a = b.handle;
  if (29 == c) {
    c = b.def.getter;
    Qd(d, function() {
      var b2 = a._zod;
      b2 = b2.def;
      b2._cachedInner === void 0 && (b2._cachedInner = c());
      return b2._cachedInner;
    });
    x(b, Jf, function(a2) {
      var b2 = a2.innerType;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.pattern;
      }
    });
    x(b, ah, function(a2) {
      var b2 = a2.innerType;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.propValues;
      }
    });
    x(b, Wf, function(a2) {
      var b2 = a2.innerType;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.optin;
      }
    });
    x(b, Qf, function(a2) {
      var b2 = a2.innerType;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.optout;
      }
    });
    return;
  }
  if (23 == c) {
    x(b, Wf, function(a2) {
      var b2 = a2.def;
      a2 = b2.innerType;
      if (j(a2) && j(a2._zod) && a2._zod.optin + "" == gg) return gg;
      return Hf;
    });
    d.optout = Hf;
    x(b, Tf, function(a2) {
      var h = a2.def;
      h = h.innerType;
      var b2, g, d2, c2;
      if (!j(h) || !j(h._zod) || h._zod.values === void 0) return;
      b2 = z();
      c2 = Array;
      h = h._zod;
      c2 = c2.from(h.values);
      g = c2.length | 0;
      h = 0;
      while (h < g) {
        d2 = c2[h];
        b2.add(d2);
        h = h + 1;
      }
      h = a2.def;
      h.exact || b2.add(void 0);
      return b2;
    });
    x(b, Jf, function(c2) {
      var u2 = c2.def;
      u2 = u2.innerType;
      var v2;
      if (!j(u2) || !j(u2._zod)) return;
      u2 = u2._zod;
      u2 = u2.pattern;
      if (u2 === void 0 || u2 == null) return;
      return n(Tk + bb(u2.source + "") + ")?$", qh);
    });
    return;
  }
  if (24 == c) {
    x(b, Wf, function(a2) {
      var b2 = a2.def;
      b2 = b2.innerType;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.optin;
      }
    });
    x(b, Qf, function(a2) {
      var b2 = a2.def;
      b2 = b2.innerType;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.optout;
      }
    });
    x(b, Jf, function(c2) {
      var u2 = c2.def;
      u2 = u2.innerType;
      var v2;
      if (!j(u2) || !j(u2._zod)) return;
      u2 = u2._zod;
      u2 = u2.pattern;
      if (u2 === void 0 || u2 == null) return;
      return n(Tk + bb(u2.source + "") + "|null)$", qh);
    });
    x(b, Tf, function(a2) {
      var h = a2.def;
      h = h.innerType;
      if (!j(h) || !j(h._zod) || h._zod.values === void 0) return;
      a2 = z();
      var b2 = Array;
      h = h._zod;
      b2 = b2.from(h.values);
      var g = b2.length | 0;
      h = 0;
      while (h < g) {
        var c2 = b2[h];
        a2.add(c2);
        h = h + 1;
      }
      a2.add(null);
      return a2;
    });
    return;
  }
  if (21 == c || 38 == c) {
    x(b, Wf, function(a2) {
      var b2 = a2.def;
      b2 = b2.options;
      if (!Array.isArray(b2)) return;
      var g = b2.length | 0;
      var a2 = false, h = 0, c2;
      while (h < g) {
        c2 = b2[h];
        c2 = c2._zod;
        c2 = c2.optin;
        if (c2 + "" == gg) return gg;
        c2 === void 0 || (a2 = true);
        h = h + 1;
      }
      if (a2) return Hf;
    });
    x(b, Qf, function(h) {
      var b2 = h.def;
      b2 = b2.options;
      if (!Array.isArray(b2)) return;
      var g = b2.length | 0;
      h = 0;
      while (h < g) {
        var a2 = b2[h];
        a2 = a2._zod;
        if (a2.optout + "" == Hf) return Hf;
        h = h + 1;
      }
    });
    x(b, Tf, function(h) {
      var b2 = h.def;
      b2 = b2.options;
      if (!Array.isArray(b2)) return;
      var c2 = z();
      var g = b2.length | 0;
      h = 0;
      while (h < g) {
        var a2 = b2[h];
        a2 = a2._zod;
        a2 = a2.values;
        if (a2 === void 0) return;
        var d2 = Array.from(a2);
        var e = d2.length | 0;
        a2 = 0;
        while (a2 < e) {
          var f = d2[a2];
          c2.add(f);
          a2 = a2 + 1;
        }
        h = h + 1;
      }
      return c2;
    });
    x(b, Jf, function(h) {
      var D2 = h.def;
      D2 = D2.options;
      if (!Array.isArray(D2)) return;
      var d2 = [];
      var g = D2.length | 0;
      h = 0;
      while (h < g) {
        var E2 = D2[h];
        E2 = E2._zod;
        E2 = E2.pattern;
        var c2;
        if (E2 === void 0 || E2 == null) return;
        d2.push(bb(E2.source + ""));
        h = h + 1;
      }
      return n(Tk + d2.join("|") + Dl, qh);
    });
    return;
  }
  if (32 == c) {
    x(b, Tf, function(a2) {
      var b2 = a2.def;
      b2 = b2.in;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.values;
      }
    });
    x(b, Wf, function(a2) {
      var b2 = a2.def;
      b2 = b2.in;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.optin;
      }
    });
    x(b, Qf, function(a2) {
      var b2 = a2.def;
      b2 = b2.out;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.optout;
      }
    });
    return;
  }
  if (27 == c) {
    x(b, Wf, function(a2) {
      var b2 = a2.def;
      a2 = b2.innerType;
      if (j(a2) && j(a2._zod) && a2._zod.optin + "" == gg) return gg;
      return Hf;
    });
    x(b, Qf, function(a2) {
      var b2 = a2.def;
      b2 = b2.innerType;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.optout;
      }
    });
    x(b, Tf, function(a2) {
      var b2 = a2.def;
      b2 = b2.innerType;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.values;
      }
    });
    return;
  }
  if (40 == c) return;
  if (33 == c) {
    x(b, Wf, function(a2) {
      var b2 = a2.def;
      b2 = b2.innerType;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.optin;
      }
    });
    x(b, Qf, function(a2) {
      var b2 = a2.def;
      b2 = b2.innerType;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.optout;
      }
    });
    x(b, Tf, function(a2) {
      var b2 = a2.def;
      b2 = b2.innerType;
      if (j(b2) && j(b2._zod)) {
        b2 = b2._zod;
        return b2.values;
      }
    });
    return;
  }
  x(b, Jf, function(a2) {
    let b2 = V;
    return Od(b2[+a2.id]);
  });
  0 != b.optin ? d.optin = jc(b) : x(b, Wf, function(a2) {
    let b2 = V;
    return jc(b2[+a2.id]);
  });
  0 != b.optout ? d.optout = kc(b) : x(b, Qf, function(a2) {
    let b2 = V;
    return kc(b2[+a2.id]);
  });
  b.values === void 0 || (d.values = b.values);
};
var Ha = (a) => {
  a = a.kind;
  if (15 == a) return true;
  if (16 == a) return true;
  if (17 == a) return true;
  if (18 == a) return true;
  if (19 == a) return true;
  if (20 == a) return true;
  return false;
};
var cb = (a, b, c) => {
  if (b == null || !j(b)) return false;
  if (j(b._zod)) {
    a = J(b);
    if (a) return lc(a, c);
    return false;
  }
  if (!Array.isArray(b)) return false;
  var g = b.length | 0;
  var h = 0;
  while (h < g) {
    if (cb(a, b[h], c)) return true;
    h = h + 1;
  }
  return false;
};
var lc = (a, b) => {
  var c = Tb.get(a.handle);
  var h;
  if (!(c === void 0) && !(c == null)) return true === c;
  if (b.has(a.handle)) return true;
  b.add(a.handle);
  if (29 == a.kind) {
    c = a.handle._zod;
    c = cb(a, c.innerType, b);
  } else {
    var d = a.def;
    h = d.shape;
    if (j(h) && !(h == null)) {
      var g = D(h);
      var f = g.length | 0;
      var c = false, e = 0;
      while (e < f) {
        cb(a, h[g[e]], b) && (c = true);
        e = e + 1;
      }
    } else {
      c = false;
    }
    e = D(d);
    g = e.length | 0;
    h = 0;
    while (h < g) {
      e[h] + "" != lg && cb(a, d[e[h]], b) && (c = true);
      h = h + 1;
    }
  }
  b.delete(a.handle);
  Tb.set(a.handle, c);
  return c;
};
var mc = (a) => {
  var c = [];
  var g = a.length | 0;
  var h = 0, b;
  while (h < g) {
    b = w({}, a[h]);
    Array.isArray(b.path) && (b.path = b.path.slice(0));
    c.push(b);
    h = h + 1;
  }
  return c;
};
var Sd = (h, e) => {
  var a = mc(h);
  var g = a.length | 0;
  h = 0;
  while (h < g) {
    e.issues.push(a[h]);
    h = h + 1;
  }
};
var Td = (a, e, f) => {
  var b = a.handle._zod;
  b = b.memoizer;
  var c, g, d, h;
  if (b === void 0 || b == null) return;
  if (b.recursive === void 0) {
    b.recursive = lc(a, z());
    if (!b.recursive) return;
  } else {
    if (!b.recursive) return;
  }
  g = e.value;
  if (g == null || typeof g != Xg) return;
  if (f === void 0 || f == null || !j(f)) return;
  c = f["~memo"];
  (c === void 0 || c == null) && (c = /* @__PURE__ */ new Map(), c = { buckets: c, backEdges: void 0 }, f["~memo"] = c);
  b.ctx === f ? d = b.bucket : (d = c.buckets.get(a.handle), (d === void 0 || d == null) && (d = /* @__PURE__ */ new Map(), c.buckets.set(a.handle, d)), Object.assign(b, { ctx: f, bucket: d }));
  a = d.get(g);
  if (!(a === void 0) && !(a == null)) {
    e.value = a.value;
    !(a.issues == null) ? (f = a.issues, (f.length | 0) > 0 && Sd(a.issues, e)) : (e.memo = true, (c.backEdges === void 0 || c.backEdges == null) && (c.backEdges = z()), c.backEdges.add(a.value));
    return e;
  }
  b.handoff = d;
  a = b.open;
  b.openDepth = a.length;
};
var ra = (a, e, b) => {
  a = a.handle._zod;
  a = a.memoizer;
  var c, d;
  if (a === void 0 || a.handoff === void 0 || a.handoff == null) return b;
  d = a.handoff;
  a.handoff = void 0;
  c = { value: b, issues: null };
  e = e.value;
  d.set(e, c);
  a = a.open;
  a.push(c);
  return b;
};
var nc = (a, e) => {
  a = a.handle._zod;
  a = a.memoizer;
  var b;
  if (a === void 0 || a == null) return;
  a.handoff = void 0;
  b = a.open;
  a = typeof a.openDepth == Af ? +a.openDepth | 0 : 0;
  Array.isArray(b) && (b.length | 0) > a && (a = b.pop(), b = e.issues, (b.length | 0) > 0 ? a.issues = mc(e.issues) : a.issues = []);
};
var oc = (a, b, c) => a ? { code: Cj, maximum: 0 + b, inclusive: true, input: c, origin: zg } : { code: $i, minimum: 0 + b, inclusive: true, input: c, origin: zg };
var pc = (e, a, h, b, c) => {
  var f = e.value;
  var g = h.length | 0;
  var k2 = a.length | 0;
  h = 0;
  while (h < k2) {
    var d = b[h];
    var i2 = h < g;
    var j2 = J(a[h]);
    j2 = j2 ? j2.optin : 0;
    if (!i2 && h >= c && 1 == j2) {
      f.length = h;
      break;
    }
    if (!(d === void 0) && !(d == null) && (d.issues.length | 0) > 0) {
      if (!i2 && h >= c) {
        f.length = h;
        break;
      }
      i2 = d.issues;
      j2 = e.issues;
      ka(i2, j2, +(0 + h));
    }
    !(d === void 0) && !(d == null) && (f[h] = d.value);
    h = h + 1;
  }
  e = (f.length | 0) - 1 | 0;
  while (e >= g) {
    h = J(a[e]);
    if (h) {
      if (1 == h.optout && f[e] === void 0) {
        f.length = e;
        e = e - 1 | 0;
        continue;
      }
    }
    break;
  }
};
var sa = (e, a) => {
  e.value = a.value;
  Fc(a.issues, e.issues);
};
var qc = (a, e, b, f) => {
  var g = b.length | 0;
  var h = 0, c, d, i2, k2, j2;
  while (h < g) {
    c = b[h];
    if (!(c === void 0) && !(c == null) && 0 == (c.issues.length | 0)) {
      sa(e, c);
      return;
    }
    h = h + 1;
  }
  d = [];
  h = 0;
  while (h < g) {
    c = b[h];
    !(c === void 0) && !(c == null) && !hb(c) && d.push(c);
    h = h + 1;
  }
  if (1 == (d.length | 0)) {
    sa(e, d[0]);
    return;
  }
  i2 = [];
  h = 0;
  while (h < g) {
    c = b[h];
    j2 = [];
    if (!(c === void 0) && !(c == null)) {
      d = c.issues;
      k2 = d.length | 0;
      c = 0;
      while (c < k2) {
        j2.push(ga(d[c], a, f));
        c = c + 1;
      }
    }
    i2.push(j2);
    h = h + 1;
  }
  e.issues.push({ code: yg, errors: i2, path: [] });
};
var Fe = (a) => 0 == a ? wf : 1 == a ? Af : 2 == a ? Ug : 3 == a ? bg : 4 == a ? dh : 5 == a ? ih : 6 == a ? ej : 7 == a ? Qg : 8 == a ? Hh : 9 == a ? Uk : 10 == a ? vh : 11 == a ? Ui : 12 == a ? Qj : 13 == a ? Li : 14 == a ? qj : 15 == a ? Xg : 16 == a ? zg : 17 == a ? wj : 18 == a ? Qh : 19 == a ? xi : 20 == a ? Eg : 21 == a ? jh : 38 == a ? jh : 22 == a ? Bh : 23 == a ? Hf : 24 == a ? $h : 25 == a ? Vh : 26 == a ? zh : 27 == a ? ji : 28 == a ? _f : 29 == a ? Oj : 30 == a ? Aj : 31 == a ? Nf : 32 == a ? Ih : 33 == a ? bi : 34 == a ? kg : 35 == a ? pi : 36 == a ? kg : 37 == a ? Gg : 39 == a ? zf : 40 == a ? Ig : kg;
var r = (a) => {
  let b = V;
  a = a._zod;
  return b[+a.id];
};
var J = (a) => {
  if (a == null || !j(a)) return null;
  a = a._zod;
  var b;
  if (a == null || a.id === void 0) return null;
  a = +a.id | 0;
  if (a < 0 || a >= V.length) return null;
  return V[a];
};
var Se = (a) => {
  if (a === void 0) return Qg;
  if (a == null && !(a === void 0)) return Hh;
  var b = typeof a;
  if (b == Af) {
    if (true === Number.isNaN(a)) return ej;
    if (!_(a)) return a + "";
    return Af;
  }
  if (b == Xg) {
    if (a == null) return Hh;
    if (Array.isArray(a)) return zg;
    b = u.getPrototypeOf(a);
    if (!(b === u.prototype) && typeof a.constructor == zf) {
      a = a.constructor;
      a = a.name + "";
      if (a.length > 0) return a;
    }
    return Xg;
  }
  return b;
};
var Pe = (a) => a == $j ? Bf : a == vj ? "email address" : a == ei ? "URL" : a == Zj ? Zj : a == Qi ? "UUID" : "uuidv4" == a ? "UUIDv4" : "uuidv6" == a ? "UUIDv6" : "uuidv7" == a ? "UUIDv7" : a == gj ? gj : a == xk ? "GUID" : a == wk ? wk : a == Yj ? Yj : a == Ck ? "ULID" : "xid" == a ? "XID" : a == Yk ? "KSUID" : a == Ci ? "ISO datetime" : a == ih ? "ISO date" : a == Pj ? "ISO time" : a == lj ? "ISO duration" : a == yk ? "IPv4 address" : a == Oi ? "IPv6 address" : a == lk ? "MAC address" : a == Jk ? "IPv4 range" : a == Hi ? "IPv6 range" : a == Ph ? "base64-encoded string" : a == Kh ? "base64url-encoded string" : "json_string" == a ? "JSON string" : a == rl ? "E.164 number" : a == Wh ? "credit card number" : a == dj ? "JWT" : a == Ig ? Bf : a;
var nf = (a) => {
  if (typeof a == bg) return a + "n";
  if (typeof a == wf) return Ni + a + Ni;
  if (a === void 0) return Qg;
  if (a == null) return Hh;
  return a + "";
};
var rc = (a, b) => {
  var g = a.length | 0;
  var c = qh, h = 0;
  while (h < g) {
    h > 0 && (c = c + b);
    c = c + nf(a[h]);
    h = h + 1;
  }
  return c;
};
var sc = (a) => {
  var h = a.code + "";
  if (h == ag) {
    var g = a.expected + "";
    g == ej && (g = "NaN");
    h = Se(a.input);
    h == ej && (h = "NaN");
    h == Af && typeof a.input == Af && !_(a.input) && (h = a.input + "");
    return tj + g + ", received " + h;
  }
  if (h == _g) {
    a = a.values;
    if (a === void 0 || a == null || !Array.isArray(a)) return ni;
    if (1 == (a.length | 0)) return tj + nf(a[0]);
    return "Invalid option: expected one of " + rc(a, "|");
  }
  if (h == Cj) {
    a.exact ? h = Jl : (h = a.inclusive, h = !(false === h) ? "<=" : "<");
    var b = !(a.origin === void 0) ? a.origin + "" : sf;
    if (b == wf) return "Too big: expected string to have " + h + a.maximum + al;
    if (b == zg) return "Too big: expected array to have " + h + a.maximum + Ij;
    if (b == Eg) return "Too big: expected set to have " + h + a.maximum + Ij;
    if (b == xi) return "Too big: expected map to have " + h + a.maximum + Fl;
    if (b == pi) return "Too big: expected file to have " + h + a.maximum + " bytes";
    h = "Too big: expected " + b + " to be " + h;
    return h + a.maximum + "";
  }
  if (h == $i) {
    a.exact ? h = Jl : (h = a.inclusive, h = !(false === h) ? ">=" : ">");
    b = !(a.origin === void 0) ? a.origin + "" : sf;
    if (b == wf) return "Too small: expected string to have " + h + a.minimum + al;
    if (b == zg) return "Too small: expected array to have " + h + a.minimum + Ij;
    if (b == Eg) return "Too small: expected set to have " + h + a.minimum + Ij;
    if (b == xi) return "Too small: expected map to have " + h + a.minimum + Fl;
    if (b == pi) return "Too small: expected file to have " + h + a.minimum + " bytes";
    h = "Too small: expected " + b + " to be " + h;
    return h + a.minimum + "";
  }
  if (h == Tg) {
    h = a.format + "";
    if (h == ph) return 'Invalid string: must start with "' + a.prefix + Ni;
    if (h == Lh) return 'Invalid string: must end with "' + a.suffix + Ni;
    if (h == Cg) return 'Invalid string: must include "' + a.includes + Ni;
    if (h == $j) return "Invalid string: must match pattern " + a.pattern;
    return "Invalid " + Pe(h);
  }
  if (h == Yh) return "Invalid number: must be a multiple of " + a.divisor;
  if (h == fg) {
    a = a.keys;
    h = (a.length | 0) > 1 ? "s" : qh;
    return "Unrecognized key" + h + ": " + rc(a, ", ");
  }
  if (h == Lg) return "Invalid key in " + a.origin;
  if (h == yg) {
    Array.isArray(a.options) ? (h = a.options, h = (h.length | 0) > 0) : h = false;
    if (h) {
      b = a.options;
      g = b.length | 0;
      a = qh;
      h = 0;
      while (h < g) {
        h > 0 && (a = a + " | ");
        a = a + "'";
        a = a + b[h] + "'";
        h = h + 1;
      }
      return "Invalid discriminator value. Expected " + a;
    }
    a = a.inclusive;
    if (false === a) return "Invalid input: more than one option matched";
    return ni;
  }
  if (h == ch) return "Invalid value in " + a.origin;
  if (h == kg) {
    if (typeof a.message == wf) return a.message + "";
    return ni;
  }
  return ni;
};
var ga = /* @__PURE__ */ (function() {
  let a = (e) => {
    if (e === void 0 || e == null) return;
    if (typeof e == wf) return e;
    if (j(e) && typeof e.message == wf) return e.message;
  };
  let b = (e) => {
    if (e == null || e === void 0 || !j(e)) return;
    e = e._zod;
    var f;
    if (e == null || e === void 0) return;
    e = e.def;
    return e.error;
  };
  let c = (e, f) => {
    var g;
    if (typeof e.message == wf && (e.message + "").length > 0) return e.message + "";
    g = b(e.inst);
    if (typeof g == zf) {
      var h = a(g(e));
      if (!(h === void 0)) return h + "";
    }
    if (typeof g == wf) return g + "";
    g = e.schema;
    if (!(g === e.inst)) {
      g = b(e.schema);
      if (typeof g == zf) {
        h = a(g(e));
        if (!(h === void 0)) return h + "";
      }
      if (typeof g == wf) return g + "";
    }
    if (!(f === void 0) && typeof f.error == zf) {
      f = a(f.error(e));
      if (!(f === void 0)) return f + "";
    }
    if (typeof Pa == zf) {
      f = a(Pa(e));
      if (!(f === void 0)) return f + "";
    }
    if (typeof ma == zf) {
      f = a(ma(e));
      if (!(f === void 0)) return f + "";
    }
    return sc(e);
  };
  let d = (e) => {
    var f = e.inst;
    if (f === void 0) return;
    if (f == null) return;
    if (!j(f)) return;
    var g = f._zod;
    if (g === void 0) return;
    if (g == null) return;
    g = g.traits;
    if (g === void 0) return;
    if (g == null) return;
    if (!g.has(ak)) return;
    g.has(Vi) ? e.schema === void 0 && (e.schema = f) : e.schema = f;
  };
  return function(e, i2, f) {
    e.inst === void 0 && i2 && (e.inst = i2.handle);
    d(e);
    var l2 = c(e, f);
    i2 = {};
    var k2 = D(e);
    var g = k2.length | 0;
    var h = 0, j2;
    while (h < g) {
      j2 = k2[h] + "";
      j2 != tg && j2 != Kg && j2 != Xf && j2 != Bf && (i2[j2] = e[j2]);
      h = h + 1;
    }
    (i2.path === void 0 || i2.path == null) && (i2.path = []);
    i2.message = l2;
    !(f === void 0) && !(f == null) && f.reportInput && (i2.input = e.input);
    return i2;
  };
})();
var Ia = (a, b) => {
  var c = a.path;
  var d;
  (c === void 0 || c == null) && (c = [], a.path = c);
  c.unshift(b);
};
var O = (a, b) => {
  var c = { expected: a, code: ag, input: b };
  a == Af && typeof b == Af && (true === Number.isNaN(b) ? c.received = "NaN" : _(b) || (c.received = b + ""));
  a == ih && E(Date, b) && true === Number.isNaN(b.getTime()) && (c.received = "Invalid Date");
  return c;
};
var Ee = (a, b, c, d, e, f) => {
  var g = a ? Cj : $i;
  E(Date, c) && (c = c.getTime());
  b = { origin: b, code: g };
  a ? b.maximum = c : b.minimum = c;
  Object.assign(b, { inclusive: d, input: f });
  e && (b.exact = true);
  b.continue = true;
  return b;
};
var ta = (e, a, b, c, d, f, g) => {
  e.issues.push(Ee(a, b, c, d, f, g));
};
var Db = (a) => typeof a == bg ? a + "" : a;
var Eb = (a, b) => {
  (b === void 0 || b == null) && (b = []);
  var c = z();
  c.add(yl);
  c.add(Bi);
  a.name = Bi;
  p(a, rf, _a(b));
  p(a, vf, _a({ def: b, traits: c }));
  p(a, Rf, { enumerable: true, configurable: true, get: function() {
    var a2 = this._zod;
    if (!(a2.message === void 0)) return a2.message;
    var b2 = a2.def;
    a2.message = JSON.stringify(b2, function(a3, c2) {
      return Db(c2);
    }, 2);
    return a2.message;
  }, set: function(b2) {
    let a2 = this._zod;
    a2.message = b2;
  } });
  return a;
};
var Ud = () => {
  let a = I.prototype, b = Error.prototype;
  u.setPrototypeOf(a, b);
  a = I;
  p(a, ri, U(Bi));
  a = I;
  p(a, "init", U(function(a2, c) {
    return Eb(a2, c);
  }));
  a = W.prototype;
  b = I.prototype;
  u.setPrototypeOf(a, b);
  p(W, ri, U(Bi));
  a = W;
  p(a, "init", I.init);
  a = I;
  b = Symbol.hasInstance;
  p(a, b, U(function(a2) {
    if (a2 == null || !j(a2)) return false;
    var b2 = a2._zod;
    if (b2 === void 0 || b2 == null) return false;
    return !!b2.traits.has(Bi);
  }));
  a = W;
  b = Symbol.hasInstance;
  p(a, b, U(function(a2) {
    if (E(Error, a2)) return true;
    if (a2 == null || !j(a2)) return false;
    var b2 = a2._zod;
    if (b2 === void 0 || b2 == null) return false;
    return !!b2.traits.has(Bi);
  }));
  a = I.prototype;
  p(a, Di, { configurable: true, enumerable: false, get: function() {
    var a2 = this;
    let b2 = (0, function() {
      return a2.message;
    });
    p(a2, Di, { value: b2, configurable: true, writable: true });
    return b2;
  }, set: function(b2) {
    p(this, Di, { value: b2, configurable: true, writable: true });
  } });
  a = I.prototype;
  Ue(a, Cf, function(a2) {
    return function(d) {
      let b2 = { _errors: [] };
      db(a2.issues, [], b2, d);
      return b2;
    };
  }, false);
  a = I.prototype;
  Ue(a, "flatten", function(a2) {
    return function(c) {
      return tc(a2, c);
    };
  }, false);
  a = I.prototype;
  Ue(a, kj, function(a2) {
    return function(c) {
      let b2 = a2.issues;
      b2.push(c);
      b2 = a2._zod;
      let j2 = a2.issues;
      b2.message = JSON.stringify(j2, function(b3, c2) {
        return Db(c2);
      }, 2);
    };
  }, false);
  a = I.prototype;
  Ue(a, "addIssues", function(a2) {
    return function(b2) {
      var g = b2.length | 0;
      var h = 0, s2;
      while (h < g) {
        a2.issues.push(b2[h]);
        h = h + 1;
      }
      h = a2._zod;
      s2 = a2.issues;
      h.message = JSON.stringify(s2, function(b3, c) {
        return Db(c);
      }, 2);
    };
  }, false);
  a = I.prototype;
  p(a, "isEmpty", { enumerable: false, configurable: true, get: function() {
    let a2 = this.issues;
    return 0 == (a2.length | 0);
  } });
};
var Ge = (a, b) => {
  if (typeof a == zf) return a(b);
  return b.message;
};
var lf = (a, b, c) => {
  S.call(a, b) || Q(a, b, c());
  return a[b];
};
var tc = (a, b) => {
  var c = {};
  var i2 = [];
  var d = a.issues;
  var g = d.length | 0;
  var h = 0, e, f;
  while (h < g) {
    a = d[h];
    e = Ge(b, a);
    a = a.path;
    Array.isArray(a) && (a.length | 0) > 0 ? (a = a[0], lf(c, a, function() {
      return [];
    }).push(e)) : i2.push(e);
    h = h + 1;
  }
  return { formErrors: i2, fieldErrors: c };
};
var db = (a, b, c, d) => {
  var g = a.length | 0;
  var h = 0, e, i2, j2, f, k2, l2, m2;
  while (h < g) {
    e = a[h];
    f = e.code + "";
    if (f == yg && Array.isArray(e.errors) && (e.errors.length | 0) > 0) {
      i2 = e.errors;
      j2 = i2.length | 0;
      f = 0;
      while (f < j2) {
        k2 = b.concat(e.path);
        db(i2[f], k2, c, d);
        f = f + 1;
      }
    } else {
      if (f == Lg || f == ch) {
        f = b.concat(e.path);
        db(e.issues, f, c, d);
      } else {
        j2 = b.concat(e.path);
        if (!Array.isArray(j2) || 0 == (j2.length | 0)) {
          c._errors.push(Ge(d, e));
        } else {
          k2 = j2.length | 0;
          f = c;
          i2 = 0;
          while (i2 < k2) {
            l2 = j2[i2];
            m2 = i2 == (k2 - 1 | 0);
            l2 === Uh ? m2 && f._errors.push(Ge(d, e)) : (f = lf(f, l2, function() {
              return { _errors: [] };
            }), m2 && f._errors.push(Ge(d, e)));
            i2 = i2 + 1;
          }
        }
      }
    }
    h = h + 1;
  }
};
var Fb = (a, b, c, d) => {
  var g = a.length | 0;
  var h = 0, f, i2, j2, k2, e, l2, n2, m2;
  while (h < g) {
    f = a[h];
    e = f.code + "";
    if (e == yg && Array.isArray(f.errors) && (f.errors.length | 0) > 0) {
      i2 = f.errors;
      j2 = i2.length | 0;
      e = 0;
      while (e < j2) {
        k2 = i2[e];
        Fb(k2, b.concat(f.path), c, d);
        e = e + 1;
      }
    } else {
      if (e == Lg || e == ch) {
        e = f.issues;
        Fb(e, b.concat(f.path), c, d);
      } else {
        k2 = b.concat(f.path);
        if (!Array.isArray(k2) || 0 == (k2.length | 0)) {
          c.errors.push(Ge(d, f));
        } else {
          l2 = k2.length | 0;
          e = c;
          j2 = 0;
          while (j2 < l2) {
            i2 = k2[j2];
            n2 = j2 == (l2 - 1 | 0);
            typeof i2 == wf ? ((e.properties === void 0 || e.properties == null) && (e.properties = {}), e = e.properties, e = lf(e, i2, function() {
              return { errors: [] };
            })) : ((e.items === void 0 || e.items == null) && (e.items = []), e = e.items, (e[i2] === void 0 || e[i2] == null) && (e[i2] = { errors: [] }), e = e[i2]);
            n2 && e.errors.push(Ge(d, f));
            j2 = j2 + 1;
          }
        }
      }
    }
    h = h + 1;
  }
};
var uc = (a) => {
  var c = [];
  if (!Array.isArray(a)) return qh;
  var g = a.length | 0;
  var h = 0, b, d;
  while (h < g) {
    b = a[h];
    j(b) && !(b == null) && !(b.key === void 0) && (b = b.key);
    typeof b == Af ? c.push("[" + b + "]") : typeof b == dh ? c.push("[" + JSON.stringify(String(b), void 0, void 0) + "]") : (b = b + "", R(n("[^\\w$]", qh), b) ? c.push("[" + JSON.stringify(b, void 0, void 0) + "]") : ((c.length | 0) > 0 && c.push("."), c.push(b)));
    h = h + 1;
  }
  return c.join(qh);
};
var eb = () => {
  var c = globalThis;
  var a = c.__zod_globalConfig;
  var b;
  (a == null || a === void 0) && (a = {}, c.__zod_globalConfig = a);
  return a;
};
var Vd = () => {
  let b = {};
  p(b, sf, { enumerable: true, configurable: true, get: function() {
    var b2 = eb();
    if (j(b2) && !!b2.jitless) return false;
    try {
      new globalThis.Function(qh);
      return true;
    } catch {
      return false;
    }
  } });
  let a = {};
  Object.assign(a, { allowsEval: b, base64ToUint8Array: function(a2) {
    a2 = globalThis.atob(a2);
    var b2 = new globalThis.Uint8Array(a2.length);
    var g = a2.length | 0;
    var h = 0;
    while (h < g) {
      b2[h] = a2.charCodeAt(h);
      h = h + 1;
    }
    return b2;
  }, uint8ArrayToBase64: function(a2) {
    var g = a2.length | 0;
    var b2 = qh, h = 0;
    while (h < g) {
      b2 = b2 + globalThis.String.fromCharCode(a2[h]) + "";
      h = h + 1;
    }
    return globalThis.btoa(b2);
  }, base64urlToUint8Array: function(c) {
    var b2 = c.replace(n("-", Wj), "+").replace(n("_", Wj), "/");
    c = (b2.length | 0) % 4;
    if (0 != c) {
      var d = 4 - c;
      c = 0;
      while (c < d) {
        b2 = b2 + "=";
        c = c + 1;
      }
    }
    return a.base64ToUint8Array(b2);
  }, uint8ArrayToBase64url: function(c) {
    return a.uint8ArrayToBase64(c).replace(n("\\+", Wj), "-").replace(n("/", Wj), "_").replace(n("=", Wj), qh);
  }, hexToUint8Array: function(g) {
    var b2 = g.replace(n("^0x", qh), qh);
    var h = globalThis.Uint8Array;
    g = (b2.length | 0) / 2 | 0;
    var c = new h(g);
    h = 0;
    while (h < g) {
      var a2 = h * 2 | 0;
      c[h] = Number.parseInt(b2.slice(a2, a2 + 2 | 0), 16);
      h = h + 1;
    }
    return c;
  }, uint8ArrayToHex: function(a2) {
    var c = [];
    var g = a2.length | 0;
    var h = 0, b2;
    while (h < g) {
      b2 = a2[h].toString(16) + "";
      1 == b2.length && (b2 = "0" + b2);
      c.push(b2);
      h = h + 1;
    }
    return c.join(qh);
  } });
  return a;
};
var ha = () => {
  var a = eb();
  a.localeError === void 0 ? (ma = (0, function(a2) {
    return sc(a2);
  }), a.localeError = ma) : ma = a.localeError;
  typeof a.customError == zf && (Pa = a.customError);
};
var vc = (a, b) => {
  let c = {};
  Object.assign(c, { _map: a, _idmap: b, add: function(d, e) {
    var f = a;
    f.set(d, e);
    if (j(e) && !(e == null) && !(e.id === void 0)) {
      var o2 = b;
      var p2 = e.id;
      o2.set(p2, d);
    }
    return d;
  }, clear: function() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
    a = this._map;
    b = this._idmap;
    return this;
  }, remove: function(d) {
    var e = a.get(d);
    var r2;
    j(e) && !(e == null) && !(e.id === void 0) && (r2 = b, r2.delete(e.id));
    a.delete(d);
  }, get: function(c2) {
    var f = a.get(c2);
    var d = void 0;
    var I2;
    j(c2) && j(c2._zod) && (I2 = c2._zod, d = I2.parent);
    if (!(d === void 0) && !(d == null)) {
      I2 = this.get(d);
      var e = {};
      var J2;
      j(I2) && !(I2 == null) && w(e, I2);
      var z2 = Reflect;
      z2.deleteProperty(e, vi);
      j(f) && !(f == null) && w(e, f);
      if (0 == (D(e).length | 0)) return;
      return e;
    }
    return f;
  }, has: function(c2) {
    return !!a.has(c2);
  } });
  return c;
};
var ia = () => {
  var a = globalThis;
  var b;
  if (!(a.__zod_globalRegistry === void 0) && !(a.__zod_globalRegistry == null)) {
    na = a.__zod_globalRegistry;
    return na;
  }
  na === void 0 && (b = /* @__PURE__ */ new WeakMap(), na = vc(b, /* @__PURE__ */ new Map()), a.__zod_globalRegistry = na);
  return na;
};
var $ = (f) => {
  if (f === void 0 || f == null) return false;
  return f.direction + "" == eh;
};
var Wd = (a) => {
  if (Array.isArray(a)) return a.slice(0);
  if (E(Map, a)) return new Map(a);
  if (E(Set, a)) return new Set(a);
  if (j(a) && !Array.isArray(a) && !E(Date, a)) {
    var b = u.getPrototypeOf(a);
    if (b == null || b === u.prototype) return w({}, a);
  }
  return a;
};
var Gb = (a) => {
  a = a.def.defaultValue;
  typeof a == zf && (a = a());
  return Wd(a);
};
var De = (a) => a == rg ? "$ZodCheckMinLength" : a == Hg ? "$ZodCheckMaxLength" : a == Ng ? "$ZodCheckLengthEquals" : a == Yf ? "$ZodCheckGreaterThan" : a == ng ? "$ZodCheckLessThan" : a == Xh ? "$ZodCheckMultipleOf" : a == yh ? "$ZodCheckMinSize" : a == _h ? "$ZodCheckMaxSize" : a == oh ? "$ZodCheckSizeEquals" : a == Cg ? "$ZodCheckIncludes" : a == ph ? "$ZodCheckStartsWith" : a == Lh ? "$ZodCheckEndsWith" : a == Uf ? gi : a == vg ? "$ZodCheckOverwrite" : a == Zi ? "$ZodCheckMimeType" : a == hg ? "$ZodCheckNumberFormat" : a == lh ? gi : a == mh ? gi : Vi;
var ff = (e) => {
  e = e.value;
  var a;
  if (e === void 0 || e == null) return false;
  return !(e.length === void 0);
};
var Te = (e) => {
  e = e.value;
  var a;
  if (e === void 0 || e == null) return false;
  return !(e.size === void 0);
};
var s = (a, b) => {
  b.check = a;
  b.when === void 0 && (a == rg || a == Hg || a == Ng ? b.when = function(e) {
    return ff(e) ? e : void 0;
  } : (a == yh || a == _h || a == oh) && (b.when = function(e) {
    return Te(e) ? e : void 0;
  }));
  var c = De(a);
  a = z();
  a.add(Vi);
  a.add(c);
  var d = { def: b, onattach: [], traits: a };
  a = {};
  a.def = b;
  b = (0, function() {
    return a;
  });
  p(b, ri, U(c));
  a.constructor = b;
  p(a, vf, _a(d));
  of(a);
  return a;
};
var Ja = (a, b) => {
  var c = { check: kg };
  j(b) && !(b == null) && w(c, b);
  b = s(kg, c);
  c = b._zod;
  c.check = a;
  return b;
};
var Ve = (a, b) => {
  var c = globalThis.Math;
  a = a / b;
  c = +c.round(a);
  b = a < 0 ? 0 - a : a;
  b > 1 || (b = 1);
  var d = +Number.EPSILON * b;
  b = a - c;
  b < 0 && (b = 0 - b);
  if (b < d) return 0;
  return a - c;
};
var L = (a, b) => {
  var d = r(a);
  var c = d.def;
  !(b === void 0) && j(b) && (c = {}, Fa(c, d.def), Fa(c, b));
  c = new d.ctor(c);
  b === void 0 && (b = c._zod, b.parent = a);
  return c;
};
var t = (a, b) => {
  var c = r(a).def.checks;
  var d;
  c = c === void 0 || !Array.isArray(c) ? [] : c.slice(0);
  c.push(b);
  b = L(a, { checks: c });
  c = b._zod;
  c.parent = a;
  return b;
};
var y = (a, b) => J(a.def[b]);
var Hb = (a) => {
  if (j(a) && !(a._zod === void 0) && j(a._zod) && !(a._zod.def === void 0)) {
    a = a._zod;
    return a.def;
  }
  return j(a) && !(a.def === void 0) ? a.def : a;
};
var Ib = (a) => {
  var c = 0, b, d;
  while (29 == a.kind && c < 64) {
    b = void 0;
    j(a.handle) && j(a.handle._zod) && (b = a.handle._zod, b = b.innerType);
    if (b === void 0 || b == null) {
      b = a.def.getter;
      if (!(typeof b == zf)) break;
      b = b();
    }
    b = J(b);
    b ? (a = b, c = c + 1 | 0) : c = 64;
  }
  return a;
};
var H = (e, a, b) => {
  var c = {};
  a != ei && a != dj && a != Oi && a != Hi && a != Ig && (c.origin = wf);
  c.code = Tg;
  c.format = a;
  !(b === void 0) && j(b) && w(c, b);
  c.continue === void 0 && (c.continue = true);
  e = e.issues;
  e.push(c);
};
var fb = (e, h, a) => {
  e = e.issues;
  var g = e.length | 0;
  while (h < g) {
    var b = e[h];
    b.inst === void 0 && (b = e[h], b.inst = a);
    h = h + 1 | 0;
  }
};
var wc = (a, e, b, c, d, f) => {
  var g = e.issues;
  if ((g.length | 0) != f) return;
  if (a) return;
  a = [];
  Array.isArray(d.path) && (a = d.path.slice(0));
  a = { code: kg, input: b, inst: c, path: a };
  a.continue = !d.abort;
  d.params === void 0 || (a.params = d.params);
  e = e.issues;
  e.push(a);
};
var Le = (a) => {
  if (!R(n("^\\d(?:[ -]?\\d){11,18}$", qh), a)) return false;
  var g = a.length;
  var c = qh, b = 0, h, d;
  while (b < g) {
    h = a.slice(b, b + 1);
    h >= "0" && h <= "9" && (c = c + h);
    b = b + 1;
  }
  h = c.length - 1;
  b = 0;
  g = false;
  while (h >= 0) {
    a = +Number(c.slice(h, h + 1 | 0)) | 0;
    if (g) {
      var C2 = void 0;
      a = a * 2 | 0;
      a > 9 && (a = a - 9 | 0);
    }
    b = b + a | 0;
    g = !g;
    h = h - 1;
  }
  while (b >= 10) b = b - 10;
  return 0 == b;
};
var df = (a, b) => {
  a = a.split(".");
  if (3 != (a.length | 0)) return false;
  a = a[0];
  var c;
  if (a === void 0 || a == null || 0 == (a + "").length) return false;
  try {
    var C2 = globalThis;
    c = C2.JSON;
    var D2 = globalThis;
    var i2 = D2.atob;
    var F2 = i2(a);
    var G2 = c.parse(F2);
    var V2 = G2;
    var E2 = void 0;
    if (!j(V2) || V2 == null) return false;
    if (S.call(V2, "typ") && "JWT" != V2.typ + "") return false;
    if (V2.alg === void 0) return false;
    if (!(b === void 0) && !(b == null) && typeof b == wf && V2.alg + "" != b + "") return false;
    return true;
  } catch {
    return false;
  }
};
var xc = (a) => {
  if (0 == a.length) return true;
  if (R(n("\\s", qh), a)) return false;
  var b = 0, h = 0;
  while (h < a.length) {
    b = b + 1 | 0;
    4 == b && (b = 0);
    h = h + 1;
  }
  if (0 != b) return false;
  try {
    globalThis.atob(a);
    return true;
  } catch {
    return false;
  }
};
var af = (a) => {
  if (!R(n("^[A-Za-z0-9_-]*$", qh), a)) return false;
  a = a.replace(n("-", Wj), "+").replace(n("_", Wj), "/") + "";
  var b = 0, h = 0;
  while (h < a.length) {
    b = b + 1 | 0;
    4 == b && (b = 0);
    h = h + 1;
  }
  1 == b && (a = a + "===");
  2 == b && (a = a + "==");
  3 == b && (a = a + "=");
  return xc(a);
};
var yc = (a) => {
  if (!R(n("^[0-9a-fA-F:.]+$", qh), a)) return false;
  try {
    new URL("http://[" + a + "]");
    return true;
  } catch {
    return false;
  }
};
var ef = (a) => {
  a = a.split("/");
  if (2 != (a.length | 0)) return false;
  var b = a[1] + "";
  if (0 == b.length) return false;
  var c = Number(b);
  if (c + "" != b) return false;
  b = +c;
  if (b < 0) return false;
  if (b > 128) return false;
  return yc(a[0] + "");
};
var gf = (a, e, b) => {
  var c = b.trim();
  if (!a.normalize && !(a.protocol === void 0) && !(a.protocol == null)) {
    if (!R(n("^https?:\\/\\/", kk), c)) {
      H(e, ei, void 0);
      return;
    }
  }
  var ia2;
  try {
    ia2 = new URL(c);
  } catch {
    H(e, ei, void 0);
    return;
  }
  !(a.hostname === void 0) && !(a.hostname == null) && (b = a.hostname, b.lastIndex = 0, R(b, ia2.hostname + "") || H(e, ei, { note: "Invalid hostname", pattern: b.source }));
  if (!(a.protocol === void 0) && !(a.protocol == null)) {
    var d = a.protocol;
    b = ia2.protocol + "";
    b.endsWith(":") && (b = b.slice(0, b.length - 1));
    d.lastIndex = 0;
    R(d, b) || H(e, ei, { note: "Invalid protocol", pattern: d.source });
  }
  e.value = c.replace(n("[\\t\\n\\r]", Wj), qh) + "";
  !a.normalize || (e.value = ia2.href);
};
var zc = (g, e, f) => {
  var b;
  if (j(g) && j(g._zod) && typeof g._zod.check == zf) {
    b = g._zod;
    b = b.check.call(g, e);
    if (o(b)) {
      if (!(f === void 0) && false === f.async) throw new Error(tf);
      e.$pending = b;
    }
    return;
  }
  var c = Hb(g);
  var d = c.check + "";
  b = e.value;
  var h, i2;
  if (d == rg || d == Hg || d == Ng) {
    f = typeof b == wf;
    if (!f && !Array.isArray(b)) return;
    g = b.length;
    f && (g = Array.from(b).length);
    f = Array.isArray(b) ? zg : wf;
    d == rg && g < +c.minimum && (h = e.issues, h.push(Ee(false, f, +c.minimum, true, false, b)));
    d == Hg && g > +c.maximum && (h = e.issues, h.push(Ee(true, f, +c.maximum, true, false, b)));
    d == Ng && g != c.length && (g < c.length ? (g = e.issues, g.push(Ee(false, f, c.length, true, true, b))) : (g = e.issues, g.push(Ee(true, f, c.length, true, true, b))));
    return;
  }
  if (d == yh || d == _h || d == oh) {
    if (Array.isArray(b)) {
      g = b.length;
    } else {
      if (j(b) && !(b.size === void 0)) {
        g = +b.size;
      } else {
        return;
      }
    }
    f = Array.isArray(b) ? zg : Eg;
    E(Map, b) && (f = xi);
    h = globalThis.File;
    !(h === void 0) && E(h, b) && (f = pi);
    d == yh && g < +c.minimum && ta(e, false, f, c.minimum, true, false, b);
    d == _h && g > +c.maximum && ta(e, true, f, c.maximum, true, false, b);
    d == oh && g != +c.size && (g < +c.size ? (g = c.size, ta(e, false, f, g, true, true, b)) : ta(e, true, f, c.size, true, true, b));
    return;
  }
  if (d == Yf || d == ng) {
    if (!(typeof b == Af) && !E(Date, b) && !(typeof b == bg)) return;
    g = c.value;
    f = c.inclusive;
    h = !(false === f);
    f = E(Date, b) ? ih : Af;
    typeof b == bg && (f = bg);
    c.origin === void 0 || (f = c.origin + "");
    if (d == Yf) {
      c = b > g;
      h && (c = b >= g);
      if (c) return;
      ta(e, false, f, g, h, false, b);
    } else {
      c = b < g;
      h && (c = b <= g);
      if (c) return;
      ta(e, true, f, g, h, false, b);
    }
    return;
  }
  if (d == Xh) {
    if (typeof b == bg) {
      g = b % c.value;
      g === BigInt(0) || (g = e.issues, e = c.value, g.push({ code: Yh, divisor: e, path: [] }));
      return;
    }
    if (!(typeof b == Af)) return;
    g = +b;
    0 != Ve(g, +c.value) && (g = e.issues, e = c.value, g.push({ origin: Af, code: Yh, divisor: e, input: b }));
    return;
  }
  if (d == hg) {
    g = c.format + "";
    g == Bj && !(true === Number.isSafeInteger(b)) && (+b > 0 ? e.issues.push(Ee(true, Af, 9007199254740991, true, false, b)) : e.issues.push(Ee(false, Af, -9007199254740991, true, false, b)));
    (g == _j || g == Bj || g == di) && (true === Number.isInteger(b) || e.issues.push(O(di, b)));
    "finite" == g && !_(b) && e.issues.push(O(Af, b));
    return;
  }
  if (d == Cg) {
    if (!(typeof b == wf)) return;
    f = b + "";
    b = c.includes + "";
    g = f.includes(b);
    typeof c.position == Af && (g = f.slice(+c.position | 0).includes(b));
    if (g) return;
    H(e, Cg, { includes: c.includes });
    return;
  }
  if (d == ph) {
    if (!(typeof b == wf)) return;
    if (b.startsWith(c.prefix + "")) return;
    H(e, ph, { prefix: c.prefix });
    return;
  }
  if (d == Lh) {
    if (!(typeof b == wf)) return;
    if (b.endsWith(c.suffix + "")) return;
    H(e, Lh, { suffix: c.suffix });
    return;
  }
  if (d == Uf || d == lh || d == mh) {
    if (!(typeof b == wf)) return;
    g = b + "";
    var a = d;
    d == Uf && (a = c.format + "");
    if (a == lh && g != g.toLowerCase()) {
      H(e, lh, void 0);
      return;
    }
    if (a == mh && g != g.toUpperCase()) {
      H(e, mh, void 0);
      return;
    }
    if (a == ei) {
      gf(c, e, b);
      return;
    }
    if (a == Wh) {
      if (Le(g)) return;
      H(e, Wh, void 0);
      return;
    }
    if (a == dj) {
      if (df(g, c.alg)) return;
      b = { code: Tg, format: dj, input: b };
      !(c.alg === void 0) && !(c.alg == null) && (b.algorithm = c.alg);
      g = e.issues;
      g.push(b);
      return;
    }
    if (a == Ph) {
      if (xc(g)) return;
      H(e, Ph, void 0);
      return;
    }
    if (a == Kh) {
      if (af(g)) return;
      H(e, Kh, void 0);
      return;
    }
    if (a == Oi) {
      if (yc(g)) return;
      H(e, Oi, void 0);
      return;
    }
    if (a == Hi) {
      ef(g) || H(e, Hi, void 0);
      return;
    }
    if (typeof c.fn == zf) {
      g = c.fn(b);
      if (o(g)) {
        e.$pending = g.then(function(f2) {
          if (!f2) {
            var n2 = e.issues;
            f2 = a;
            n2.push({ code: Tg, format: f2, input: b, continue: !c.abort });
          }
          return e;
        });
        return;
      }
      if (g) return;
      g = e.issues;
      e = a;
      g.push({ code: Tg, format: e, input: b, continue: !c.abort });
      return;
    }
    if (!(c.pattern === void 0)) {
      f = c.pattern;
      f.lastIndex = 0;
      if (R(c.pattern, g)) return;
      g = {};
      f = c.pattern;
      g.pattern = f.toString();
      H(e, a, g);
    }
    return;
  }
  if (d == Zi) {
    g = c.mime;
    if (!Array.isArray(g)) return;
    d = b.type + "";
    c = g.length | 0;
    f = 0;
    while (f < c) {
      if (g[f] + "" == d) return;
      f = f + 1;
    }
    f = b.type;
    e.issues.push({ code: _g, values: g, input: f });
    return;
  }
  if (d == Ah) {
    g = J(c.schema);
    if (g) {
      g = K(g, b[c.property], f);
      if (o(g)) {
        f = c.property;
        e.$pending = g.then(function(c2) {
          c2 = c2.issues;
          var d2 = c2.length | 0;
          var b2 = 0;
          while (b2 < d2) {
            Ia(c2[b2], f);
            e.issues.push(c2[b2]);
            b2 = b2 + 1;
          }
          return e;
        });
        return;
      }
      f = g.issues;
      b = f.length | 0;
      g = 0;
      while (g < b) {
        d = f[g];
        Ia(d, c.property);
        e.issues.push(f[g]);
        g = g + 1;
      }
    }
    return;
  }
  if (d == vg) {
    typeof c.transform == zf && (e.value = c.transform(b));
    return;
  }
  if (d == kg) {
    d = void 0;
    j(g._zod) && (d = g._zod, d = d.bag);
    if (j(d) && !(d.Class === void 0)) {
      if (E(d.Class, b)) return;
      g = e.issues;
      e = d.Class;
      g.push(O(e.name + "", b));
      return;
    }
    if (!(typeof c.fn == zf)) return;
    d = e.issues;
    h = { value: b, issues: d };
    h.addIssue = function(f2) {
      typeof f2 == wf ? f2 = { message: f2, code: kg, input: b, inst: g } : (!f2.fatal || (f2.continue = false), f2.code === void 0 && (f2.code = kg), true === "input" in f2 || (f2.input = b), f2.inst === void 0 && (f2.inst = g), f2.continue === void 0 && (f2.continue = !c.abort));
      d.push(f2);
    };
    i2 = d.length | 0;
    h = c.fn(b, h);
    if (o(h)) {
      var Xe2 = void 0;
      if (!(f === void 0) && false === f.async) throw new Error(tf);
      e.$pending = h.then(function(f2) {
        wc(f2, e, b, g, c, i2);
        return e;
      });
      return;
    }
    wc(h, e, b, g, c, i2);
    return;
  }
};
var gb = (e) => {
  var a = e.$pending;
  if (o(a)) {
    Reflect.deleteProperty(e, eg);
    return a;
  }
};
var hb = (h) => {
  if (h.aborted) return true;
  var a = h.issues;
  var g = a.length | 0;
  h = 0;
  while (h < g) {
    var b = a[h];
    b = b.continue;
    if (!(true === b)) return true;
    h = h + 1;
  }
  return false;
};
var We = (h) => {
  if (h.aborted) return true;
  var a = h.issues;
  var g = a.length | 0;
  h = 0;
  while (h < g) {
    var b = a[h];
    b = b.continue;
    if (false === b) return true;
    h = h + 1;
  }
  return false;
};
var Ac = (e, h, a) => {
  e = e.issues;
  var g = e.length | 0;
  while (h < g) {
    var b = e[h];
    b.schema === void 0 && (b = e[h], b.schema = a);
    h = h + 1 | 0;
  }
};
var Ze = (e, h, a) => {
  a = !a.abort;
  e = e.issues;
  var g = e.length | 0;
  while (h < g) {
    var b = e[h];
    b.continue = a;
    h = h + 1 | 0;
  }
};
var Jb = (a, e, f, h) => {
  var b = a.def.checks;
  var c, g, d, i2;
  if (b === void 0 || !Array.isArray(b)) return e;
  g = b.length | 0;
  while (h < g) {
    c = b[h];
    d = Hb(c);
    if (typeof d.when == zf) {
      if (We(e)) {
        h = h + 1 | 0;
        continue;
      }
      if (!d.when(e)) {
        h = h + 1 | 0;
        continue;
      }
    } else {
      if (hb(e)) {
        h = h + 1 | 0;
        continue;
      }
    }
    d = e.issues;
    d = d.length | 0;
    zc(c, e, f);
    h = h + 1 | 0;
    i2 = gb(e);
    if (o(i2)) return i2.then(/* @__PURE__ */ ((b2, g2, i3, j2, k2, l2) => function(c2) {
      let n2 = b2.handle;
      fb(g2, k2, j2);
      Ac(g2, k2, n2);
      return Jb(b2, g2, i3, l2);
    })(a, e, f, c, d, h));
    i2 = a.handle;
    fb(e, d, c);
    Ac(e, d, i2);
  }
  return e;
};
var ib = (a, e, f) => {
  if (e.memo) return e;
  fb(e, 0, a.handle);
  if (typeof a.def.check == wf) {
    var b = e.issues;
    b = b.length | 0;
    zc(a.handle, e, f);
    fb(e, b, a.handle);
    Ze(e, b, a.def);
    var c = gb(e);
    if (o(c)) return c.then(function(c2) {
      return Jb(a, e, f, 0);
    });
    if (a.def.abort) {
      c = e.issues;
      if ((c.length | 0) > b) return e;
    }
  }
  return Jb(a, e, f, 0);
};
var Kb = (e) => {
  var a = e.$waits;
  var b;
  if (a === void 0 || !Array.isArray(a)) return e;
  Reflect.deleteProperty(e, Jj);
  if (0 == (a.length | 0)) return e;
  return Promise.all(a).then(function(a2) {
    return e;
  });
};
var Ka = (e, a, b) => {
  if (o(a)) {
    var c = e.$waits;
    var d;
    (c === void 0 || !Array.isArray(c)) && (c = [], e.$waits = c);
    c.push(a.then(b));
  } else {
    b(a);
  }
};
var jb = (a, e, f) => {
  var b = gb(e);
  if (o(b)) return b.then(function(c) {
    return jb(a, e, f);
  });
  b = Kb(e);
  if (o(b)) return b.then(function(c) {
    Ha(a) && nc(a, c);
    if (!a.hasChecks) return c;
    return ib(a, c, f);
  });
  Ha(a) && nc(a, e);
  if (!a.hasChecks) return e;
  return ib(a, e, f);
};
var La = (a, e, f) => {
  if (32 == a.kind || 31 == a.kind) return Be(a, e, f);
  Ne(a, e, f);
  a = gb(e);
  if (o(a)) return a.then(function(c) {
    return Kb(e);
  });
  return Kb(e);
};
var Bc = (a, b, e, f) => {
  if (hb(b)) {
    b.aborted = true;
    return b;
  }
  b = ib(a, e, f);
  if (o(b)) {
    if (!(f === void 0) && false === f.async) throw new Error(tf);
    return b.then(function(c) {
      return La(a, c, f);
    });
  }
  return La(a, b, f);
};
var F = (a, e, f) => {
  a = Ib(a);
  if (Ha(a)) {
    var b = Td(a, e, f);
    if (!(b === void 0)) return ib(a, b, f);
  }
  if (30 == a.kind) {
    if (f === void 0 || false === f.async) throw new Error(tf);
    b = e.value;
    return Promise.resolve(b).then(function(c2) {
      e.value = c2;
      var b2 = y(a, xf);
      return b2 ? F(b2, e, f) : e;
    });
  }
  if (!(f === void 0) && j(f) && f.skipChecks) return La(a, e, f);
  if ($(f) && a.hasChecks) {
    b = w({}, f);
    b.skipChecks = true;
    var c = e.value;
    b = La(a, { value: c, issues: [] }, b);
    if (o(b)) {
      if (!(f === void 0) && false === f.async) throw new Error(tf);
      return b.then(function(c2) {
        return Bc(a, c2, e, f);
      });
    }
    return Bc(a, b, e, f);
  }
  if (32 == a.kind || 31 == a.kind) {
    b = Be(a, e, f);
    if (o(b)) return b.then(function(c2) {
      return jb(a, c2, f);
    });
    return jb(a, e, f);
  }
  Ne(a, e, f);
  return jb(a, e, f);
};
var ja = (a, b, f) => {
  let c = a.handle._zod;
  return c.run.call(a.handle._zod, { value: b, issues: [] }, f);
};
var K = (a, b, f) => !!a ? ja(a, b, f) : { value: b, issues: [] };
var G = (e, a, b) => {
  e.issues.push(O(a, b));
};
var Ye = (a) => {
  if (!(typeof a == Af)) return false;
  if (true === Number.isNaN(a)) return false;
  if (!_(a)) return false;
  return true;
};
var He = (a) => {
  if (!(typeof a == Af)) return false;
  return true === Number.isNaN(a);
};
var hf = (a) => a === void 0 ? false : a == null;
var Ce = (a) => {
  if (!E(Date, a)) return false;
  if (true === Number.isNaN(a.getTime())) return false;
  return true;
};
var Cc = (e) => {
  var a = e.issues;
  if (0 == (a.length | 0)) return;
  a = e.issues;
  a.length = 0;
  Object.assign(e, { value: void 0, aborted: false });
};
var Dc = (e, a, f) => {
  var b = e.issues;
  if (0 == (b.length | 0)) return;
  b = a.def.catchValue;
  b === void 0 && (b = a.def.defaultValue);
  if (typeof b == zf) {
    var d = [];
    var c = e.issues;
    var g = c.length | 0;
    var h = 0;
    while (h < g) {
      d.push(ga(c[h], a, f));
      h = h + 1;
    }
    a = e.value;
    f = e.issues;
    b = b({ value: a, issues: f, error: { issues: d }, input: e.value });
  }
  e.value = b;
  a = e.issues;
  a.length = 0;
  e.aborted = false;
};
var Ec = (e) => {
  if (0 == (e.issues.length | 0) && e.value === void 0) {
    var a = e.issues;
    a.push({ code: ag, expected: _f, input: e.value });
  }
};
var Me = (e, a) => {
  o(a) && (e.$pending = a);
};
var Ne = (b, e, f) => {
  var c = Ib(b);
  var cf2 = e.value;
  b = c.kind;
  var d;
  if (9 == b || 10 == b) return;
  if (0 == b) {
    if (c.def.coerce) try {
      e.value = String(cf2);
      cf2 = e.value;
    } catch {
    }
    if (typeof cf2 == wf) return;
    G(e, wf, cf2);
    return;
  }
  if (1 == b) {
    if (c.def.coerce) try {
      e.value = Number(cf2);
      cf2 = e.value;
    } catch {
    }
    if (Ye(cf2)) return;
    G(e, Af, cf2);
    return;
  }
  if (2 == b) {
    !c.def.coerce || (e.value = Boolean(cf2));
    cf2 = e.value;
    if (typeof cf2 == Ug) return;
    G(e, Ug, cf2);
    return;
  }
  if (3 == b) {
    if (c.def.coerce) try {
      e.value = BigInt(cf2);
    } catch {
      G(e, bg, cf2);
      return;
    }
    cf2 = e.value;
    if (typeof cf2 == bg) return;
    G(e, bg, cf2);
    return;
  }
  if (4 == b) {
    if (typeof cf2 == dh) return;
    G(e, dh, cf2);
    return;
  }
  if (5 == b) {
    if (c.def.coerce) try {
      e.value = new Date(cf2);
      cf2 = e.value;
    } catch {
    }
    if (Ce(cf2)) return;
    G(e, ih, cf2);
    return;
  }
  if (6 == b) {
    if (He(cf2)) return;
    G(e, ej, cf2);
    return;
  }
  if (7 == b) {
    if (cf2 === void 0) return;
    G(e, Qg, cf2);
    return;
  }
  if (12 == b) {
    if (cf2 === void 0) return;
    G(e, Qj, cf2);
    return;
  }
  if (8 == b) {
    if (hf(cf2)) return;
    G(e, Hh, cf2);
    return;
  }
  if (11 == b) {
    G(e, Ui, cf2);
    return;
  }
  if (13 == b) {
    if (!(c.values === void 0) && !!c.values.has(cf2)) return;
    f = Array.from(c.values);
    b = cf2;
    e.issues.push({ code: _g, values: f, input: b });
    return;
  }
  if (14 == b) {
    if (!(c.values === void 0) && !!c.values.has(cf2)) return;
    f = Array.from(c.values);
    b = cf2;
    e.issues.push({ code: _g, values: f, input: b });
    return;
  }
  if (23 == b) {
    b = y(c, xf);
    if (c.def.exact) {
      !b || Me(e, F(b, e, f));
      return;
    }
    if (cf2 === void 0) {
      !b || 2 == b.optin && (b = F(b, e, f), o(b) ? e.$pending = b.then(function(a2) {
        Cc(a2);
        return a2;
      }) : Cc(e));
      return;
    }
    !b || Me(e, F(b, e, f));
    return;
  }
  if (24 == b) {
    if (cf2 == null && !(cf2 === void 0)) {
      e.value = cf2;
      return;
    }
    b = y(c, xf);
    !b || Me(e, F(b, e, f));
    return;
  }
  if (25 == b || 26 == b) {
    d = y(c, xf);
    if ($(f)) {
      !d || Me(e, F(d, e, f));
      return;
    }
    if (cf2 === void 0) {
      var vb2 = Gb(c);
      e.value = vb2;
      26 == b && d && Me(e, F(d, e, f));
      return;
    }
    if (d) {
      f = F(d, e, f);
      if (o(f)) {
        var a = 0;
        25 == b && (a = 1);
        e.$pending = f.then(function(d2) {
          1 == a && d2.value === void 0 && (d2.value = Gb(c));
          return d2;
        });
        return;
      }
    }
    25 == b && e.value === void 0 && (e.value = Gb(c));
    return;
  }
  if (27 == b) {
    b = y(c, xf);
    if ($(f)) {
      !b || Me(e, F(b, e, f));
      return;
    }
    if (b) {
      b = F(b, e, f);
      if (o(b)) {
        e.$pending = b.then(function(b2) {
          Dc(b2, c, f);
          return b2;
        });
        return;
      }
      Dc(e, c, f);
    }
    return;
  }
  if (28 == b) {
    b = y(c, xf);
    if (b) {
      b = F(b, e, f);
      if (o(b)) {
        e.$pending = b.then(function(a2) {
          Ec(a2);
          return a2;
        });
        return;
      }
    }
    Ec(e);
    return;
  }
  if (33 == b) {
    if (!$(f)) {
      b = y(c, xf);
      !b || (b = F(b, e, f), o(b) ? e.$pending = b.then(function(a2) {
        a2.memo || (a2.value = u.freeze(a2.value));
        return a2;
      }) : e.memo || (e.value = u.freeze(e.value)));
      return;
    }
    b = y(c, xf);
    !b || Me(e, F(b, e, f));
    return;
  }
  if (16 == b) {
    Xd(c, e, f);
  } else {
    if (17 == b) {
      Qe(c, e, f);
    } else {
      if (15 == b) {
        Yd(c, e, f);
      } else {
        if (18 == b) {
          Zd(c, e, f);
        } else {
          if (21 == b || 38 == b) {
            se(c, e, f);
          } else {
            if (22 == b) {
              kf(c, e, f);
            } else {
              if (19 == b) {
                bf(c, e, f);
              } else {
                if (20 == b) {
                  we(c, e, f);
                } else {
                  if (39 == b) {
                    $e(c, e);
                  } else {
                    if (40 == b) {
                      if (!(typeof cf2 == wf)) {
                        G(e, wf, cf2);
                        return;
                      }
                      b = c.handle._zod;
                      b = b.pattern;
                      !(b === void 0) && !(b == null) && (b.lastIndex = 0, R(b, cf2 + "") || H(e, Ig, { pattern: b.source }));
                    } else {
                      34 == b || (37 == b ? (b = y(c, xf), !b || (b = K(b, cf2, f).issues, e.value = 0 == (b.length | 0))) : 35 == b && (b = globalThis.File, b === void 0 ? G(e, pi, cf2) : E(b, cf2) || G(e, pi, cf2)));
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
var Fc = (a, b) => {
  var g = a.length | 0;
  var h = 0, c;
  while (h < g) {
    c = a[h];
    b.push(c);
    h = h + 1;
  }
};
var ka = (a, b, c) => {
  var e = a.length | 0;
  var d = 0, f;
  while (d < e) {
    Ia(a[d], c);
    f = a[d];
    b.push(f);
    d = d + 1;
  }
};
var jf = (a) => {
  a = a.kind;
  if (32 == a) return true;
  if (31 == a) return true;
  if (30 == a) return true;
  if (29 == a) return true;
  if (25 == a) return true;
  if (26 == a) return true;
  if (27 == a) return true;
  return false;
};
var te = (a, b, f, c) => {
  if (Ha(a)) return ja(a, b, f);
  if ($(f) && a.hasChecks) return ja(a, b, f);
  if (jf(a)) return ja(a, b, f);
  c.value = b;
  var d = c.issues;
  d.length = 0;
  c.aborted === void 0 || (c.aborted = false);
  c.memo === void 0 || (c.memo = false);
  d = a.handle._zod;
  c = d.run(c, f);
  return o(c) ? ja(a, b, f) : c;
};
var Xd = (a, e, f) => {
  var b = e.value;
  if (!Array.isArray(b)) {
    e.issues.push(O(zg, b));
    return;
  }
  var i2 = y(a, th);
  var c = ra(a, e, []);
  var j2 = { value: void 0, issues: [] };
  var g = b.length | 0;
  var h = 0, d, k2;
  while (h < g) {
    i2 ? (d = te(i2, b[h], f, j2), o(d) ? (k2 = +(0 + h), Ka(e, d, /* @__PURE__ */ ((b2, d2, f2, g2) => function(i3) {
      $a(d2, f2, g2, i3);
    })(a, e, c, k2))) : $a(e, c, +(0 + h), d)) : (d = b[h], c.push(d));
    h = h + 1;
  }
  e.value = c;
};
var Gc = (a, b) => {
  var h = (a.length | 0) - 1 | 0;
  while (h >= 0) {
    var c = J(a[h]);
    c = c && (b ? 0 != c.optin : 1 == c.optout);
    if (!c) return h + 1 | 0;
    h = h - 1;
  }
  return 0;
};
var Qe = (b, e, f) => {
  var c = e.value;
  if (!Array.isArray(c)) {
    e.issues.push(O(wj, c));
    return;
  }
  var a = b.def.items;
  Array.isArray(a) || (a = []);
  var g = c.length | 0;
  var d = a.length | 0;
  var h = Gc(a, true);
  var n2 = Gc(a, false);
  var k2 = y(b, "rest");
  if (!k2) {
    if (g < h) {
      e.issues.push(oc(false, h, c));
      return;
    }
    g > d && e.issues.push(oc(true, d, c));
  }
  var l2 = ra(b, e, []);
  e.value = l2;
  var i2 = [];
  var j2 = [];
  h = 0;
  while (h < d) {
    i2.push(void 0);
    h = h + 1;
  }
  h = 0;
  while (h < d) {
    var p2 = { i: 0 + h };
    var m2 = K(J(a[h]), c[h], f);
    o(m2) ? j2.push(m2.then(/* @__PURE__ */ ((a2, b2) => function(d2) {
      a2[b2.i] = d2;
    })(i2, p2))) : i2[h] = m2;
    h = h + 1;
  }
  if (g > d && k2) {
    while (h < g) {
      m2 = { i: 0 + h };
      d = K(k2, c[h], f);
      o(d) ? j2.push(d.then(/* @__PURE__ */ ((a2, c2, d2, f2) => function(b2) {
        $a(c2, d2, f2.i, b2);
      })(b, e, l2, m2))) : $a(e, l2, m2.i, d);
      h = h + 1 | 0;
    }
  }
  if ((j2.length | 0) > 0) {
    e.$pending = Promise.all(j2).then(function(h2) {
      pc(e, a, c, i2, n2);
      return e;
    });
    return;
  }
  pc(e, a, c, i2, n2);
};
var Yd = (a, e, f) => {
  var b = e.value;
  var c, g, i2, d, k2, l2, h, p2, q2, m2, r2, s2, t2, n2;
  if (!j(b) || Array.isArray(b)) {
    e.issues.push(O(Xg, b));
    return;
  }
  g = a.def.shape;
  (g === void 0 || g == null) && (g = {});
  i2 = a.handle._zod;
  c = i2["~keys"];
  d = i2["~fids"];
  if (!Array.isArray(c) || !Array.isArray(d)) {
    c = D(g);
    d = [];
    l2 = c.length | 0;
    k2 = 0;
    while (k2 < l2) {
      h = J(Reflect.get(g, c[k2] + ""));
      h ? d.push(+(0 + h.id)) : d.push(-1);
      k2 = k2 + 1;
    }
    Object.assign(i2, { "~keys": c, "~fids": d });
  }
  i2 = ra(a, e, {});
  p2 = { value: void 0, issues: [] };
  q2 = c.length | 0;
  h = 0;
  while (h < q2) {
    l2 = c[h] + "";
    k2 = +d[h] | 0;
    if (l2 == pg || k2 < 0) {
      h = h + 1;
      continue;
    }
    k2 = V[k2];
    n2 = true === l2 in b;
    m2 = void 0;
    n2 && (m2 = b[l2]);
    m2 = te(k2, m2, f, p2);
    o(m2) ? (r2 = gc(k2), s2 = hc(k2), Ka(e, m2, /* @__PURE__ */ ((b2, c2, d2, f2, g2, h2, j2) => function(i3) {
      ic(c2, d2, f2, g2, h2, j2, i3);
    })(a, e, i2, l2, n2, r2, s2))) : ic(e, i2, l2, n2, gc(k2), hc(k2), m2);
    h = h + 1;
  }
  c = a.def.catchall;
  if (!(c === void 0) && !(c == null)) {
    d = J(c);
    k2 = [];
    p2 = D(b);
    q2 = p2.length | 0;
    m2 = 0;
    while (m2 < q2) {
      c = p2[m2] + "";
      S.call(g, c) || (c == pg ? !d || 11 == d.kind && k2.push(c) : d ? (h = d, 11 == h.kind ? k2.push(c) : (h = ja(h, b[c], f), t2 = h.issues, (t2.length | 0) > 0 ? ka(h.issues, e.issues, c) : i2[c] = h.value)) : i2[c] = b[c]);
      m2 = m2 + 1;
    }
    (k2.length | 0) > 0 && e.issues.push({ code: fg, keys: k2, input: b, path: [], continue: true });
  }
  e.value = i2;
};
var mf = (a) => {
  if (!j(a) || Array.isArray(a)) return false;
  a = u.getPrototypeOf(a);
  if (a == null) return true;
  return a === u.prototype;
};
var pf = (a) => {
  if (!(typeof a == wf)) return false;
  var b = Number(a);
  var c;
  if (!(typeof b == Af) || !_(b)) return false;
  return b + "" == a + "";
};
var ze = (e, a, b, c) => {
  var d = c.issues;
  (d.length | 0) > 0 && ka(c.issues, e.issues, b);
  Q(a, b, c.value);
};
var Zd = (a, e, f) => {
  var c = e.value;
  if (!mf(c)) {
    G(e, Qh, c);
    return;
  }
  var i2 = ra(a, e, {});
  e.value = i2;
  var b;
  var p2 = typeof a.def.mode == wf && a.def.mode + "" == Zk, d, g, m2, k2, n2, j2, q2, h, r2, s2, l2;
  d = !!a.def.partial;
  g = y(a, Ki);
  m2 = y(a, Zg);
  a = void 0;
  !g || (b = g, b.values === void 0 || (a = Array.from(b.values)));
  if (!(a === void 0) && Array.isArray(a) && !d) {
    k2 = z();
    n2 = a.length | 0;
    b = 0;
    while (b < n2) {
      d = a[b];
      j2 = typeof d;
      if (j2 != wf) {
        if (j2 != Af) {
          if (j2 != dh) {
            b = b + 1;
            continue;
          }
        }
      }
      typeof d == Af && (d = d + "");
      k2.add(d);
      if (typeof d == wf && d + "" == pg) {
        b = b + 1;
        continue;
      }
      d = K(g, a[b], f);
      if (o(d)) {
        b = b + 1;
        continue;
      }
      j2 = d.issues;
      if ((j2.length | 0) > 0) {
        l2 = [];
        j2 = d.issues;
        q2 = j2.length | 0;
        j2 = 0;
        while (j2 < q2) {
          l2.push(ga(d.issues[j2], g, f));
          j2 = j2 + 1;
        }
        d = [];
        j2 = a[b];
        d.push(j2);
        j2 = e.issues;
        q2 = a[b];
        j2.push({ code: Lg, origin: Qh, issues: l2, input: q2, path: d });
        b = b + 1;
        continue;
      }
      h = d.value;
      if (typeof h == wf && h + "" == pg) {
        b = b + 1;
        continue;
      }
      d = a[b];
      Ka(e, K(m2, Reflect.get(c, d), f), /* @__PURE__ */ ((a2, b2, c2) => function(d2) {
        ze(a2, b2, c2, d2);
      })(e, i2, h));
      b = b + 1;
    }
    b = [];
    d = D(c);
    g = d.length | 0;
    f = 0;
    while (f < g) {
      a = d[f];
      k2.has(a) || (p2 ? a + "" != pg && (i2[a] = c[a]) : b.push(a));
      f = f + 1;
    }
    (b.length | 0) > 0 && e.issues.push({ code: fg, keys: b, input: c, continue: true });
    return;
  }
  l2 = [];
  q2 = Reflect.ownKeys(c);
  r2 = q2.length | 0;
  h = 0;
  while (h < r2) {
    b = q2[h];
    if (typeof b == wf && b + "" == pg) {
      h = h + 1;
      continue;
    }
    d = u.prototype;
    if (!d.propertyIsEnumerable.call(c, b)) {
      h = h + 1;
      continue;
    }
    d = K(g, b, f);
    !o(d) ? (j2 = d.issues, j2 = (j2.length | 0) > 0) : j2 = false;
    j2 && pf(b) && (j2 = K(g, Number(b), f), !o(j2) ? (n2 = j2.issues, n2 = 0 == (n2.length | 0)) : n2 = false, n2 && (d = j2));
    o(d) ? j2 = true : (j2 = d.issues, j2 = (j2.length | 0) > 0);
    if (j2) {
      if (p2) {
        i2[b] = c[b];
      } else {
        if (!(a === void 0)) {
          l2.push(b);
        } else {
          n2 = [];
          if (!o(d)) {
            j2 = d.issues;
            s2 = j2.length | 0;
            j2 = 0;
            while (j2 < s2) {
              n2.push(ga(d.issues[j2], g, f));
              j2 = j2 + 1;
            }
          }
          d = [];
          d.push(b);
          e.issues.push({ code: Lg, origin: Qh, issues: n2, input: b, path: d });
        }
      }
      h = h + 1;
      continue;
    }
    k2 = d.value;
    if (typeof k2 == wf && k2 + "" == pg) {
      h = h + 1;
      continue;
    }
    Ka(e, K(m2, c[b], f), /* @__PURE__ */ ((a2, b2, c2) => function(d2) {
      ze(a2, b2, c2, d2);
    })(e, i2, k2));
    h = h + 1;
  }
  (l2.length | 0) > 0 && e.issues.push({ code: fg, keys: l2, input: c, continue: true });
};
var Hc = (a, f) => {
  var b = [];
  var g = a.length | 0;
  var h = 0;
  while (h < g) {
    b.push(ga(a[h], null, f));
    h = h + 1;
  }
  return b;
};
var Ma = (a) => {
  if (a == null || !j(a) || a._zod === void 0) return;
  var c = a._zod;
  var b = c.bag;
  if (!(b.propValues === void 0)) {
    a = c.bag;
    return a.propValues;
  }
  a = r(a);
  if (15 == a.kind) {
    b = {};
    a = a.def.shape;
    if (j(a)) {
      var i2 = D(a);
      var g = i2.length | 0;
      var e = 0, k2, d, h, m2, n2, f, l2;
      while (e < g) {
        k2 = i2[e];
        d = J(a[k2]);
        if (d) {
          if (!(d.values === void 0)) {
            h = z();
            l2 = Array.from(d.values);
            m2 = l2.length | 0;
            f = 0;
            while (f < m2) {
              n2 = l2[f];
              h.add(n2);
              f = f + 1;
            }
            0 != d.optin && h.add(void 0);
            Q(b, k2, h);
          }
        }
        e = e + 1;
      }
    }
    a = c.bag;
    a.propValues = b;
    return b;
  }
  if (32 == a.kind) return Ma(a.def.in);
  if (29 == a.kind) return Ma(Ib(a).handle);
  if (21 == a.kind || 38 == a.kind) {
    b = {};
    e = a.def.options;
    if (Array.isArray(e)) {
      g = e.length | 0;
      h = 0;
      while (h < g) {
        a = Ma(e[h]);
        if (a === void 0 || a == null || 0 == (D(a).length | 0)) throw B(Sf + h + Ni);
        k2 = D(a);
        m2 = k2.length | 0;
        i2 = 0;
        while (i2 < m2) {
          d = k2[i2];
          S.call(b, d) || Q(b, d, z());
          f = a[d];
          if (!(f === void 0) && !(f == null)) {
            l2 = Array.from(f);
            n2 = l2.length | 0;
            f = 0;
            while (f < n2) {
              b[d].add(l2[f]);
              f = f + 1;
            }
          }
          i2 = i2 + 1;
        }
        h = h + 1;
      }
    }
    a = c.bag;
    a.propValues = b;
    return b;
  }
};
var Ic = (h) => {
  var a = h.handle._zod;
  var d = a.bag;
  if (!(d.optionsMap === void 0)) return d.optionsMap;
  var b = /* @__PURE__ */ new Map();
  var i2 = h.def.discriminator + "";
  var e = h.def.options;
  var g = e.length | 0;
  h = 0;
  while (h < g) {
    var c = Ma(e[h]);
    a = void 0;
    var f;
    j(c) && !!S.call(c, i2) && (a = c[i2]);
    if (a === void 0) throw B(Sf + h + Ni);
    if (a == null) throw B(Sf + h + Ni);
    if (0 == (+a.size | 0)) throw B(Sf + h + Ni);
    c = Array.from(a);
    f = c.length | 0;
    a = 0;
    while (a < f) {
      var k2 = c[a];
      if (b.has(k2)) throw B('Duplicate discriminator value "' + c[a] + Ni);
      b.set(c[a], e[h]);
      a = a + 1;
    }
    h = h + 1;
  }
  d.optionsMap = b;
  return b;
};
var se = (a, e, f) => {
  var c = e.value;
  var d = a.def.options;
  Array.isArray(d) || (d = []);
  var b = typeof a.def.discriminator == wf ? a.def.discriminator + "" : qh;
  var g = d.length | 0;
  if (b.length > 0) {
    if (!j(c) || Array.isArray(c)) {
      e.issues.push(O(Xg, c));
      return;
    }
    var i2 = Ic(a);
    var h = c[b];
    h = i2.get(h);
    var k2;
    if (!(h === void 0) && !(h == null)) {
      f = ja(r(h), c, f);
      if (o(f)) {
        e.$pending = f.then(function(c2) {
          sa(e, c2);
          return e;
        });
        return;
      }
      sa(e, f);
      return;
    }
    if (!(!!a.def.unionFallback || $(f))) {
      a = { code: yg, errors: [], note: "No matching discriminator", discriminator: b, options: Array.from(i2.keys()), path: [] };
      Ia(a, b);
      e = e.issues;
      e.push(a);
      return;
    }
  }
  b = [];
  k2 = [];
  var l2 = [];
  h = 0;
  while (h < g) {
    b.push(void 0);
    h = h + 1;
  }
  h = 0;
  while (h < g) {
    i2 = K(J(d[h]), c, f);
    if (o(i2)) {
      var m2 = { i: 0 + h };
      l2.push(i2.then(/* @__PURE__ */ ((a2, c2) => function(d2) {
        a2[c2.i] = d2;
      })(b, m2)));
    } else {
      b[h] = i2;
      var n2 = i2.issues;
      if (0 == (n2.length | 0)) {
        if (38 != a.kind) {
          sa(e, i2);
          return;
        }
        k2.push(h);
      }
    }
    h = h + 1;
  }
  if ((l2.length | 0) > 0) {
    e.$pending = Promise.all(l2).then(function(d2) {
      if (38 == a.kind) {
        var h2 = [];
        var F2 = 0, i3;
        while (F2 < g) {
          d2 = b[F2];
          !(d2 === void 0) && !(d2 == null) && 0 == (d2.issues.length | 0) && h2.push(F2);
          F2 = F2 + 1;
        }
        if (1 == (h2.length | 0)) {
          sa(e, b[h2[0]]);
          return e;
        }
      }
      qc(a, e, b, f);
      return e;
    });
    return;
  }
  if (38 == a.kind) {
    if (1 == (k2.length | 0)) {
      e.value = b[k2[0]].value;
      return;
    }
    if (0 == (k2.length | 0)) {
      k2 = [];
      c = 0;
      while (c < g) {
        h = J(d[c]);
        !h || (a = h);
        h = b[c];
        i2 = h.issues;
        l2 = [];
        n2 = i2.length | 0;
        h = 0;
        while (h < n2) {
          l2.push(ga(i2[h], a, f));
          h = h + 1;
        }
        k2.push(l2);
        c = c + 1;
      }
      e.issues.push({ code: yg, errors: k2, path: [] });
      return;
    }
    e.issues.push({ code: yg, errors: [], inclusive: false, matches: k2, path: [] });
    return;
  }
  qc(a, e, b, f);
};
var Lb = (a, b) => {
  if (true === dd(a, b)) return { valid: true, data: a };
  var h;
  E(Date, a) && E(Date, b) ? (h = a.getTime(), h = h === b.getTime()) : h = false;
  if (h) return { valid: true, data: a };
  if (mf(a) && mf(b)) {
    var c = {};
    var e = [];
    e.push(a);
    e.push(b);
    var d = 0, f, k2, i2, j2, g;
    while (d < 2) {
      f = e[d];
      j2 = Reflect.ownKeys(f);
      k2 = j2.length | 0;
      g = 0;
      while (g < k2) {
        h = j2[g];
        i2 = typeof h == wf && h + "" == pg;
        i2 || Q(c, h, f[h]);
        g = g + 1;
      }
      d = d + 1;
    }
    f = D(a);
    i2 = D(b);
    j2 = f.length | 0;
    g = 0;
    while (g < j2) {
      h = f[g] + "";
      if (h != pg) {
        k2 = i2.length | 0;
        d = false;
        e = 0;
        while (e < k2) {
          i2[e] + "" == h && (d = true);
          e = e + 1;
        }
        if (d) {
          d = Lb(a[h], b[h]);
          if (!d.valid) {
            c = [];
            c.push(h);
            a = d.mergeErrorPath;
            if (Array.isArray(a)) {
              h = a.length | 0;
              b = 0;
              while (b < h) {
                d = a[b];
                c.push(d);
                b = b + 1;
              }
            }
            return { valid: false, mergeErrorPath: c };
          }
          c[h] = d.data;
        }
      }
      g = g + 1;
    }
    return { valid: true, data: c };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    h = a.length | 0;
    if (h != (b.length | 0)) return { valid: false, mergeErrorPath: [] };
    d = [];
    g = a.length | 0;
    h = 0;
    while (h < g) {
      c = Lb(a[h], b[h]);
      if (!c.valid) {
        d = [];
        d.push(h);
        a = c.mergeErrorPath;
        if (Array.isArray(a)) {
          h = a.length | 0;
          b = 0;
          while (b < h) {
            c = a[b];
            d.push(c);
            b = b + 1;
          }
        }
        return { valid: false, mergeErrorPath: d };
      }
      c = c.data;
      d.push(c);
      h = h + 1;
    }
    return { valid: true, data: d };
  }
  return { valid: false, mergeErrorPath: [] };
};
var kf = (a, e, f) => {
  var c = y(a, tl);
  var b = y(a, _k);
  if (!c || !b) return;
  a = K(c, e.value, f);
  b = K(b, e.value, f);
  if (o(a) || o(b)) {
    f = [];
    f.push(Promise.resolve(a));
    f.push(Promise.resolve(b));
    e.$pending = Promise.all(f).then(function(a2) {
      let b2 = a2[0];
      Jc(e, b2, a2[1]);
      return e;
    });
    return;
  }
  Jc(e, a, b);
};
var Jc = (e, a, b) => {
  var d = {};
  var f = {};
  var c = a.issues;
  var g = c.length | 0;
  var c = void 0, h = 0, i2, j2, k2, l2;
  while (h < g) {
    !Kc(a.issues[h], "l", d, f) ? (i2 = e.issues, j2 = a.issues[h], i2.push(j2)) : c === void 0 && a.issues[h].code + "" == fg && (c = a.issues[h]);
    h = h + 1;
  }
  h = b.issues;
  g = h.length | 0;
  h = 0;
  while (h < g) {
    !Kc(b.issues[h], "r", d, f) ? (i2 = e.issues, j2 = b.issues[h], i2.push(j2)) : c === void 0 && b.issues[h].code + "" == fg && (c = b.issues[h]);
    h = h + 1;
  }
  h = [];
  g = D(d);
  k2 = g.length | 0;
  f = 0;
  while (f < k2) {
    i2 = g[f] + "";
    j2 = d[i2];
    j2.l ? (j2 = d[i2], j2 = !!j2.r) : j2 = false;
    j2 && h.push(i2);
    f = f + 1;
  }
  if ((h.length | 0) > 0) {
    if (!(c === void 0)) {
      i2 = [];
      g = c.keys;
      j2 = h.length | 0;
      d = 0;
      while (d < j2) {
        k2 = g.length | 0;
        f = 0;
        while (f < k2) {
          l2 = g[f] + "";
          l2 == h[d] + "" && (l2 = h[d], i2.push(l2));
          f = f + 1;
        }
        d = d + 1;
      }
      (i2.length | 0) > 0 && (c = w({}, c), c.keys = i2, h = e.issues, h.push(c));
    }
  }
  a = Lb(a.value, b.value);
  if (a.valid) {
    e.value = a.data;
  } else {
    if (!hb(e)) {
      e = a.mergeErrorPath;
      throw B("Unmergable intersection. Error path: " + JSON.stringify(e, void 0, void 0));
    }
  }
};
var Kc = (a, b, c, h) => {
  var d = a.path;
  var e, g;
  if (a.code + "" == fg && (d === void 0 || d == null || 0 == (d.length | 0))) {
    d = a.keys;
    g = d.length | 0;
    h = 0;
    while (h < g) {
      a = d[h] + "";
      (c[a] === void 0 || c[a] == null) && (c[a] = {});
      c[a][b] = true;
      h = h + 1;
    }
    return true;
  }
  if (a.code + "" == Lg && a.origin + "" == Qh) {
    if (!(d === void 0) && 1 == (d.length | 0)) {
      d = d[0] + "";
      h[d] === void 0 && (h[d] = a);
      (c[d] === void 0 || c[d] == null) && (c[d] = {});
      a = c[d];
      a[b] = true;
      return true;
    }
  }
  return false;
};
var Lc = (a) => {
  a = typeof a;
  if (a == wf) return true;
  if (a == Af) return true;
  if (a == dh) return true;
  return false;
};
var Mc = (a, b, e, c, d, f) => {
  var g = a.issues;
  (g.length | 0) > 0 && (Lc(c) ? ka(a.issues, e.issues, c) : (g = e.issues, g.push({ code: Lg, origin: xi, issues: Hc(a.issues, f), input: d, path: [] })));
  a = b.issues;
  (a.length | 0) > 0 && (Lc(c) ? ka(b.issues, e.issues, c) : (a = e.issues, a.push({ code: ch, origin: xi, key: c, issues: Hc(b.issues, f), input: d, path: [] })));
};
var bf = (a, e, f) => {
  var d = e.value;
  if (!E(Map, d)) {
    e.issues.push(O(xi, d));
    return;
  }
  var g = ra(a, e, /* @__PURE__ */ new Map());
  var i2 = [];
  var l2 = d.entries();
  var b = l2.next();
  while (!b.done) {
    b = b.value;
    var h = b[0];
    var j2 = b[1];
    b = { value: h, issues: [] };
    var c = { value: j2, issues: [] };
    var k2 = y(a, Ki);
    !k2 || (b = K(k2, h, f));
    k2 = y(a, Zg);
    !k2 || (c = K(k2, j2, f));
    o(b) || o(c) ? (j2 = [], j2.push(Promise.resolve(b)), j2.push(Promise.resolve(c)), i2.push(Promise.all(j2).then(/* @__PURE__ */ ((a2, b2, c2, i3, j3) => function(g2) {
      let q2 = g2[0];
      Mc(q2, g2[1], a2, j3, c2, b2);
      let o2 = g2[0];
      o2 = o2.value;
      let m2 = g2[1].value;
      i3.set(o2, m2);
    })(e, f, d, g, h)))) : (Mc(b, c, e, h, d, f), g.set(b.value, c.value));
    b = l2.next();
  }
  e.value = g;
  (i2.length | 0) > 0 && (e.$pending = Promise.all(i2).then(function(c2) {
    e.value = g;
    return e;
  }));
};
var we = (a, e, f) => {
  var b = e.value;
  var c, d, g;
  if (!j(b) || b.add === void 0) {
    e.issues.push(O(Eg, b));
    return;
  }
  c = ra(a, e, z());
  g = b.values();
  b = g.next();
  while (!b.done) {
    b = b.value;
    d = y(a, Zg);
    d ? Ka(e, K(d, b, f), function(n2) {
      var b2 = n2.issues;
      (b2.length | 0) > 0 && Fc(n2.issues, e.issues);
      var o2 = n2.value;
      c.add(o2);
    }) : c.add(b);
    b = g.next();
  }
  e.value = c;
};
var kb = (a, e, f, b) => {
  if (!(typeof b == zf)) return e;
  var c = function(c2) {
    if (typeof c2 == wf) {
      var b2 = e.value;
      c2 = { message: c2, code: kg, input: b2, inst: a.handle };
    } else {
      !c2.fatal || (c2.continue = false);
      c2.code === void 0 && (c2.code = kg);
      true === "input" in c2 || (c2.input = e.value);
      c2.inst === void 0 && (c2.inst = a.handle);
    }
    var v2 = e.issues;
    v2.push(c2);
  };
  var d = e.value;
  c = { addIssue: c, value: d, issues: e.issues };
  b = b(e.value, c);
  if (o(b)) {
    var r2 = void 0;
    if (!(f === void 0) && false === f.async) throw new Error(tf);
    return b.then(function(a2) {
      e.value = a2;
      return e;
    });
  }
  e.value = b;
  return e;
};
var Mb = (h) => {
  var a = h.issues;
  var g = a.length | 0;
  h = 0;
  while (h < g) {
    var b = a[h];
    if (b.code + "" != fg) return true;
    h = h + 1;
  }
  return false;
};
var ua = (e, f, a) => !!a ? F(a, e, f) : e;
var Nc = (a, e, f) => {
  if (Mb(e)) {
    e.aborted = true;
    return e;
  }
  var b = a.def.transform;
  var c = y(a, oi);
  if (typeof b == zf) {
    b = kb(a, e, f, b);
    if (o(b)) return b.then(function(d) {
      return ua(d, f, c);
    });
  }
  return ua(e, f, c);
};
var Be = (a, e, f) => {
  var b = y(a, wi);
  var d = y(a, oi);
  var g = a.def.transform;
  var c = a.def.reverseTransform;
  if (31 == a.kind) {
    if ($(f)) throw new Ub(Sk);
    if (!(f === void 0) && j(f)) {
      b = f["~memo"];
      if (j(b) && !(b.backEdges === void 0) && !(b.backEdges == null)) {
        if (b.backEdges.has(e.value)) {
          a = new Error("Cannot parse a reference cycle that closes through a transform");
          a.name = "ZodCyclicError";
          throw a;
        }
      }
    }
    return typeof g == zf ? kb(a, e, f, g) : e;
  }
  if ($(f)) {
    if (d) {
      d = F(d, e, f);
      if (o(d)) return d.then(function(e2) {
        if (Mb(e2)) {
          e2.aborted = true;
          return e2;
        }
        var q2 = typeof c == zf ? kb(a, e2, f, c) : e2;
        if (o(q2)) return q2.then(function(d2) {
          return ua(d2, f, b);
        });
        return ua(e2, f, b);
      });
      if (Mb(e)) {
        e.aborted = true;
        return e;
      }
    }
    if (typeof c == zf) {
      c = kb(a, e, f, c);
      if (o(c)) return c.then(function(d2) {
        return ua(d2, f, b);
      });
    }
    return ua(e, f, b);
  }
  if (b) {
    b = F(b, e, f);
    if (o(b)) return b.then(function(c2) {
      return Nc(a, c2, f);
    });
  }
  return Nc(a, e, f);
};
var Nb = (a, b, c, d) => d ? Id(function(a2, c2) {
  return ba(a2, c2, void 0, void 0);
}, function(a2, c2, e) {
  return a2.apply(c2, e);
}, b, c, a) : function() {
  return aa(c, a.apply(this, aa(b, Array.from(arguments), void 0, void 0)), void 0, void 0);
};
var $e = (a, e) => {
  var b = e.value;
  if (!(typeof b == zf)) {
    G(e, zf, b);
    return;
  }
  var d = a.def.input;
  a = a.def.output;
  var c = J(a);
  c = c && 30 == c.kind;
  e.value = Nb(b, d, a, c);
};
var Na = (e, a, f) => {
  var b = [];
  var h = e.issues;
  var g = h.length | 0;
  h = 0;
  while (h < g) {
    b.push(ga(e.issues[h], a, f));
    h = h + 1;
  }
  e = e.value;
  return { value: e, issues: b };
};
var va = (a) => {
  var b = a.issues;
  if ((b.length | 0) > 0) {
    a = a.issues;
    return { success: false, error: new W(a) };
  }
  return { success: true, data: a.value };
};
var Ob = (a, b, f) => {
  let c = a._zod;
  return c.run.call(a._zod, { value: b, issues: [] }, f);
};
var Oc = (f) => {
  if (f === void 0 || f == null) return { async: false };
  f = w({}, f);
  f.async = false;
  return f;
};
var lb = (a, e, f) => {
  f = Oc(f);
  e = Ob(a, e, f);
  if (o(e)) throw new Error(tf);
  var b = e.issues;
  if (0 == (b.length | 0)) return { success: true, data: e.value };
  ha();
  return va(Na(e, r(a), f));
};
var Pc = (a, e, f, b) => {
  ha();
  var d = r(a);
  var g = Na(e, d, f);
  var c = va(g);
  (b === void 0 || b == null) && (b = Pc);
  Ga(c.error, b);
  throw c.error;
};
var aa = (a, e, f, b) => {
  f = Oc(f);
  e = Ob(a, e, f);
  if (o(e)) throw new Error(tf);
  var c = e.issues;
  if (0 == (c.length | 0)) return e.value;
  ha();
  var l2 = r(a);
  var m2 = Na(e, l2, f);
  c = va(m2);
  (b === void 0 || b == null) && (b = aa);
  Ga(c.error, b);
  throw c.error;
};
var mb = /* @__PURE__ */ (function() {
  let a = (c, e, f) => {
    var d = e.issues;
    if (0 == (d.length | 0)) return e;
    ha();
    return Na(e, c, f);
  };
  let b = (e, c, f) => {
    var d = r(e);
    e = Ob(e, c, f);
    if (o(e)) return e.then(function(b2) {
      return a(d, b2, f);
    });
    return a(d, e, f);
  };
  return function(c, d, e) {
    e === void 0 || e == null ? e = { async: true } : (e = w({}, e), e.async = true);
    c = b(c, d, e);
    if (o(c)) return c.then(function(a2) {
      return va(a2);
    });
    return Promise.resolve(va(c));
  };
})();
var ba = (a, b, f, c) => mb(a, b, f).then(function(n2) {
  if (n2.success) return n2.data;
  var o2 = c === void 0 || c == null ? ba : c, b2;
  Ga(n2.error, o2);
  throw n2.error;
});
var Ue = (a, b, c, d) => {
  p(a, b, { configurable: true, enumerable: false, get: function() {
    let a2 = c(this);
    p(this, b, { configurable: true, writable: true, enumerable: d, value: a2 });
    return a2;
  }, set: function(c2) {
    p(this, b, { configurable: true, writable: true, enumerable: true, value: c2 });
  } });
};
var Qc = (a) => {
  var b = [];
  if (Array.isArray(a)) {
    var h = a.length | 0;
    var c = 0, d, g, i2, e, f;
    while (c < h) {
      d = a[c];
      b.push(d);
      c = c + 1;
    }
    return b;
  }
  if (!j(a) || a == null) return b;
  e = [];
  c = D(a);
  g = c.length | 0;
  h = 0;
  while (h < g) {
    d = a[c[h]];
    typeof d == Af && e.push(d);
    h = h + 1;
  }
  h = 0;
  while (h < g) {
    f = Number(c[h] + "");
    if (typeof f == Af) {
      i2 = e.length | 0;
      d = 0;
      var P2 = void 0;
      for (; ; ) {
        if (d >= i2) {
          d = false;
          break;
        }
        if (e[d] === f) {
          d = true;
          break;
        }
        d = d + 1;
      }
    } else {
      d = false;
    }
    d = d || a[c[h]], b.push(d);
    h = h + 1;
  }
  return b;
};
var Je = (a, b) => {
  var c = a.prototype;
  a = (0, function(b2, d) {
    p(c, b2, { configurable: true, enumerable: true, get: function() {
      let a2 = this._zod;
      return a2.def[d];
    } });
  });
  b == bk && a(th, th);
  (b == Rj || b == Fk) && (a(Ki, Ki), a(Zg, Zg));
  b == Gk && a(Zg, Zg);
  (b == dk || b == hi || b == Hk) && (a(dg, dg), a(Mg, Mg));
  (b == nk || b == ck || b == jj) && (a(wi, wi), a(oi, oi));
  b == mk && (p(c, qj, { configurable: true, enumerable: true, get: function() {
    var a2 = this._zod;
    a2 = a2.def;
    a2 = a2.entries;
    var h;
    if (j(a2) && !Array.isArray(a2)) return a2;
    var b2 = {};
    if (Array.isArray(a2)) {
      var g = a2.length | 0;
      h = 0;
      while (h < g) {
        b2[a2[h]] = a2[h];
        h = h + 1;
      }
    }
    return b2;
  } }), p(c, dg, { configurable: true, enumerable: true, get: function() {
    let a2 = this._zod;
    a2 = a2.def;
    return Qc(a2.entries);
  } }));
  b == Fj && (p(c, Tf, { configurable: true, enumerable: true, get: function() {
    let a2 = this._zod;
    return a2.values;
  } }), p(c, sf, { configurable: true, enumerable: true, get: function() {
    var b2 = this._zod;
    b2 = b2.def;
    b2 = b2.values;
    if (!Array.isArray(b2)) {
      b2 = Array;
      var a2 = this._zod;
      b2 = b2.from(a2.values);
    }
    if ((b2.length | 0) > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return b2[0];
  } }));
};
var m = /* @__PURE__ */ (function() {
  let a = (h) => {
    var i2 = u.getOwnPropertyDescriptor(h, lg);
    if (!(i2 === void 0) && !(i2 == null) && typeof i2.get == zf) return;
    var g = h.shape;
    g === void 0 && (g = {});
    g == null && (g = {});
    rb.set(h, g);
    p(h, lg, { configurable: true, get: function() {
      var b2 = {};
      var e2 = Reflect.ownKeys(g);
      var f2 = e2.length | 0;
      var d2 = 0, A2, z2, i3;
      while (d2 < f2) {
        A2 = e2[d2];
        z2 = g;
        i3 = e2[d2];
        Q(b2, A2, Reflect.get(z2, i3));
        d2 = d2 + 1;
      }
      p(h, lg, { value: b2, writable: true, enumerable: true, configurable: true });
      rb.set(h, b2);
      return b2;
    } });
  };
  let b = (g, h) => {
    var i2 = z();
    i2.add(ok);
    i2.add(ak);
    i2.add(g);
    g.length > 0 && i2.add(pl + g);
    g = h.__parent;
    var j2 = 0;
    while (!(g === void 0) && !(g == null) && j2 < 8) {
      h = g.name + "";
      h.length > 0 && (i2.add(h), i2.add(pl + h));
      g = g.__parent;
      j2 = j2 + 1 | 0;
    }
    return i2;
  };
  let c = (g, h) => {
    var i2 = h.check + "";
    var j2, k2;
    (i2 == rg || i2 == yh) && (j2 = g.minimum, (j2 === void 0 || h.minimum > j2) && (g.minimum = h.minimum));
    (i2 == Hg || i2 == _h) && (j2 = g.maximum, (j2 === void 0 || h.maximum < j2) && (g.maximum = h.maximum));
    i2 == Ng && Object.assign(g, { minimum: h.length, maximum: h.length, length: h.length });
    i2 == oh && Object.assign(g, { minimum: h.size, maximum: h.size, size: h.size });
    i2 == Yf && (j2 = h.inclusive, false === j2 ? (j2 = g.exclusiveMinimum, (j2 === void 0 || h.value > j2) && (g.exclusiveMinimum = h.value)) : (j2 = g.minimum, (j2 === void 0 || h.value > j2) && (g.minimum = h.value)));
    i2 == ng && (j2 = h.inclusive, false === j2 ? (j2 = g.exclusiveMaximum, (j2 === void 0 || h.value < j2) && (g.exclusiveMaximum = h.value)) : (j2 = g.maximum, (j2 === void 0 || h.value < j2) && (g.maximum = h.value)));
    i2 == Xh && g.multipleOf === void 0 && (g.multipleOf = h.value);
    i2 == hg && (g.format = h.format, j2 = h.format + "", (j2 == Bj || j2 == di) && Object.assign(g, { minimum: Number.MIN_SAFE_INTEGER, maximum: Number.MAX_SAFE_INTEGER }), j2 == _j && Object.assign(g, { minimum: -2147483648, maximum: 2147483647 }), j2 == Pk && Object.assign(g, { minimum: 0, maximum: 4294967295 }), j2 == rk && Object.assign(g, { minimum: -34028234663852886e22, maximum: 34028234663852886e22 }), j2 == sk && Object.assign(g, { minimum: 0 - +Number.MAX_VALUE, maximum: Number.MAX_VALUE }), j2.includes(di) && (g.pattern = n(Hl, qh)));
    (i2 == Uf || i2 == lh || i2 == mh) && (i2 == Uf ? g.format = h.format : g.format = i2, !(h.pattern === void 0) && !(h.pattern == null) && g.format + "" != dj && (g.patterns === void 0 && (g.patterns = z()), g.patterns.add(h.pattern)), g.format + "" == Ph && (g.contentEncoding = Ph));
    i2 == ph && (g.patterns === void 0 && (g.patterns = z()), k2 = h.prefix.replace(n(bh, Wj), vk), j2 = g.patterns, j2.add(n("^" + k2 + ".*", qh)));
    i2 == Lh && (g.patterns === void 0 && (g.patterns = z()), k2 = h.suffix.replace(n(bh, Wj), vk), j2 = g.patterns, j2.add(n(".*" + k2 + pl, qh)));
    i2 == Cg && (g.patterns === void 0 && (g.patterns = z()), j2 = h.includes.replace(n(bh, Wj), vk), typeof h.position == Af ? (k2 = g.patterns, k2.add(n("^.{" + h.position + "}" + j2, qh))) : (k2 = g.patterns, k2.add(n(j2 + "", qh))));
    i2 == Zi && (g.mime = h.mime);
  };
  let d = (i2, j2) => {
    i2 = i2._zod;
    i2 = i2.bag;
    typeof j2.check == wf && c(i2, j2);
    typeof j2.format == wf && i2.format === void 0 && (i2.format = j2.format);
    j2 = j2.checks;
    if (!Array.isArray(j2)) return;
    var g = j2.length | 0;
    var h = 0;
    while (h < g) {
      c(i2, Hb(j2[h]));
      h = h + 1;
    }
  };
  let e = (g, h, i2, k2) => {
    ha();
    if (j(g._zod)) {
      var l2 = g._zod;
      l2 = !(l2.id === void 0);
    } else {
      l2 = false;
    }
    if (l2) return;
    l2 = { id: 0, kind: 0, handle: null, def: null, ctor: null, typeName: "", trait: "", values: null, optin: 0, optout: 0, hasChecks: false };
    Ld(l2, h);
    l2.ctor = i2;
    l2.trait = k2;
    i2 = b(k2, i2);
    typeof h.check == wf && i2.add(Vi);
    f(g, l2, i2);
    15 == l2.kind && a(h);
    d(g, h);
    Rd(l2);
  };
  let f = (g, h, i2) => {
    h.handle = g;
    var j2 = h.ctor._zodProto;
    var k2;
    (j2 === void 0 || j2 == null) && (j2 = {});
    j2 = u.create(j2);
    Object.assign(j2, { id: h.id, def: h.def, bag: {}, version: qd, traits: i2, constr: h.ctor });
    i2 = (0, function(e2, f2) {
      return La(h, e2, f2);
    });
    k2 = (0, function(e2, f2) {
      return F(h, e2, f2);
    });
    Object.assign(j2, { parse: i2, run: k2 });
    Ha(h) && (j2.memoizer = { recursive: void 0, handoff: void 0, ctx: void 0, bucket: void 0, open: [] });
    p(j2, ah, { enumerable: true, configurable: true, get: function() {
      return Ma(g);
    } });
    p(g, vf, _a(j2));
    _d(g, h, j2, i2, k2);
  };
  return function(h, i2) {
    var k2 = {};
    if (!(i2 === void 0) && j(i2._zodProto)) {
      var l2 = i2._zodProto;
      u.setPrototypeOf(k2, l2);
    }
    var g = (0, function(d2) {
      if (this === void 0 || this == null || !j(this)) {
        var a2 = g.prototype;
        a2 = u.create(a2);
      } else {
        a2 = this;
      }
      var f2;
      !(d2 === void 0) && j(d2) && typeof d2.type == wf && e(a2, d2, g, h);
      return a2;
    });
    g.__parent = i2;
    g._zodProto = k2;
    i2 === void 0 || (k2 = g.prototype, i2 = i2.prototype, u.setPrototypeOf(k2, i2));
    i2 = g.prototype;
    p(i2, Vf, { configurable: true, enumerable: true, get: function() {
      let a2 = this._zod;
      return a2.def;
    } });
    i2 = g.prototype;
    p(i2, Pf, { configurable: true, enumerable: true, get: function() {
      let a2 = this._zod;
      a2 = a2.def;
      return a2.type;
    } });
    i2 = g;
    p(i2, ri, U(h));
    i2 = g;
    p(i2, "init", U(function(d2, f2) {
      !(f2 === void 0) && j(f2) && e(d2, f2, g, h);
      return d2;
    }));
    i2 = g;
    k2 = Symbol.hasInstance;
    p(i2, k2, U(function(c2) {
      if (c2 == null || !j(c2)) return false;
      var b2 = c2._zod;
      if (b2 == null || b2 === void 0) return false;
      b2 = b2.traits;
      return !!b2.has(h);
    }));
    return g;
  };
})();
var _d = (b, a, c, d, e) => {
  of(b);
  var f = a.kind;
  if (0 == f) {
    a = ed(b);
  } else {
    if (1 == f) {
      a = fd(b);
    } else {
      if (2 == f) {
        a = gd(b);
      } else {
        if (15 == f) {
          var g = {};
          a = (0, function(am2, f2) {
            var h = am2.value;
            var i2, k2, Yl2, l2, $l2, Zl2, _l2, m2, n2, p2, t2, Xl2, q2, v2, r2, s2, u2, w2;
            if (!j(h) || Array.isArray(h)) {
              am2.issues.push({ expected: Xg, code: ag, input: h, inst: b });
              return am2;
            }
            k2 = this.def;
            i2 = this["~lil"];
            i2 === void 0 && (i2 = Sb(b), this["~lil"] = i2);
            i2 = true === i2;
            !(k2.catchall === void 0) && !(k2.catchall == null) && (i2 = true);
            !(f2 === void 0) && !(f2 == null) && (Yl2 = f2.async, true === Yl2 && (i2 = true), Yl2 = f2.jitless, true === Yl2 && (i2 = true), typeof f2.direction == wf && f2.direction + "" == eh && (i2 = true));
            l2 = globalThis.__zod_globalConfig;
            !(l2 === void 0) && !(l2 == null) && true === l2.jitless && (i2 = true);
            if (i2) {
              Yl2 = this.run;
              if (Yl2 == g.fn) return e.call(this, am2, f2);
              return d.call(this, am2, f2);
            }
            Yl2 = k2.shape;
            (Yl2 === void 0 || Yl2 == null) && (Yl2 = {});
            Zl2 = this["~skeys"];
            Zl2 === void 0 && (Zl2 = D(Yl2), this["~skeys"] = Zl2);
            $l2 = {};
            t2 = Zl2.length | 0;
            if (2 == t2) {
              Xl2 = Zl2[0] + "";
              if (Xl2 != pg) {
                _l2 = Yl2[Xl2];
                if (!(_l2 === void 0) && !(_l2 == null)) {
                  _l2 = _l2._zod;
                  if (!(_l2 === void 0) && !(_l2 == null) && typeof _l2.run == zf) {
                    k2 = true === Xl2 in h;
                    i2 = void 0;
                    k2 && (i2 = h[Xl2]);
                    i2 = _l2.run({ value: i2, issues: [] }, f2);
                    if (o(i2)) throw new Error(tf);
                    typeof _l2.optin == wf ? (l2 = _l2.optin + "", l2 = l2 == Hf ? 1 : l2 == gg ? 2 : 0) : l2 = 0;
                    p2 = typeof _l2.optout == wf && _l2.optout + "" == Hf ? 1 : 0;
                    m2 = i2.issues;
                    var _e2 = m2.length;
                    var $e2 = _e2;
                    m2 = $e2 | 0;
                    k2 && 0 == m2 ? (i2.value === void 0 ? $l2[Xl2] = void 0 : $l2[Xl2] = i2.value, _l2 = true) : _l2 = false;
                    if (!_l2) {
                      _l2 = !k2 && 1 == p2 && 1 == l2;
                      if (!_l2 && m2 > 0) {
                        if (0 != l2 && 1 == p2 && !k2) {
                          _l2 = true;
                        } else {
                          q2 = 0;
                          while (q2 < m2) {
                            n2 = i2.issues[q2];
                            s2 = [];
                            s2.push(Xl2);
                            p2 = n2.path;
                            if (Array.isArray(p2)) {
                              u2 = p2.length | 0;
                              r2 = 0;
                              while (r2 < u2) {
                                t2 = p2[r2];
                                s2.push(t2);
                                r2 = r2 + 1;
                              }
                            }
                            n2.path = s2;
                            p2 = am2.issues;
                            p2.push(n2);
                            q2 = q2 + 1;
                          }
                        }
                      }
                      !_l2 && !k2 && 0 == l2 && (0 == m2 && (_l2 = { expected: _f, code: ag, input: void 0 }, l2 = [], l2.push(Xl2), _l2.path = l2, am2.issues.push(_l2)), _l2 = true);
                      _l2 || (i2.value === void 0 ? k2 && ($l2[Xl2] = void 0) : $l2[Xl2] = i2.value);
                    }
                  }
                }
              }
              Zl2 = Zl2[1] + "";
              if (Zl2 != pg) {
                Yl2 = Yl2[Zl2];
                if (!(Yl2 === void 0) && !(Yl2 == null)) {
                  Yl2 = Yl2._zod;
                  if (!(Yl2 === void 0) && !(Yl2 == null) && typeof Yl2.run == zf) {
                    _l2 = true === Zl2 in h;
                    Xl2 = void 0;
                    _l2 && (Xl2 = h[Zl2]);
                    Xl2 = Yl2.run({ value: Xl2, issues: [] }, f2);
                    if (o(Xl2)) throw new Error(tf);
                    typeof Yl2.optin == wf ? (f2 = Yl2.optin + "", f2 = f2 == Hf ? 1 : f2 == gg ? 2 : 0) : f2 = 0;
                    k2 = typeof Yl2.optout == wf && Yl2.optout + "" == Hf ? 1 : 0;
                    h = Xl2.issues;
                    var If = h.length;
                    var Jf2 = If;
                    h = Jf2 | 0;
                    _l2 && 0 == h ? (Xl2.value === void 0 ? $l2[Zl2] = void 0 : $l2[Zl2] = Xl2.value, Yl2 = true) : Yl2 = false;
                    if (!Yl2) {
                      Yl2 = !_l2 && 1 == k2 && 1 == f2;
                      if (!Yl2 && h > 0) {
                        if (0 != f2 && 1 == k2 && !_l2) {
                          Yl2 = true;
                        } else {
                          l2 = 0;
                          while (l2 < h) {
                            i2 = Xl2.issues[l2];
                            n2 = [];
                            n2.push(Zl2);
                            k2 = i2.path;
                            if (Array.isArray(k2)) {
                              q2 = k2.length | 0;
                              m2 = 0;
                              while (m2 < q2) {
                                p2 = k2[m2];
                                n2.push(p2);
                                m2 = m2 + 1;
                              }
                            }
                            i2.path = n2;
                            k2 = am2.issues;
                            k2.push(i2);
                            l2 = l2 + 1;
                          }
                        }
                      }
                      !Yl2 && !_l2 && 0 == f2 && (0 == h && (Yl2 = { expected: _f, code: ag, input: void 0 }, f2 = [], f2.push(Zl2), Yl2.path = f2, am2.issues.push(Yl2)), Yl2 = true);
                      Yl2 || (Xl2.value === void 0 ? _l2 && ($l2[Zl2] = void 0) : $l2[Zl2] = Xl2.value);
                    }
                  }
                }
              }
            } else {
              if (4 == t2) {
                _l2 = Zl2[0] + "";
                Xl2 = Yl2[_l2];
                if (!(Xl2 === void 0) && !(Xl2 == null)) {
                  Xl2 = Xl2._zod;
                  if (!(Xl2 === void 0) && !(Xl2 == null) && typeof Xl2.run == zf) {
                    k2 = true === _l2 in h;
                    i2 = void 0;
                    k2 && (i2 = h[_l2]);
                    i2 = Xl2.run({ value: i2, issues: [] }, f2);
                    if (o(i2)) throw new Error(tf);
                    typeof Xl2.optin == wf ? (l2 = Xl2.optin + "", l2 = l2 == Hf ? 1 : l2 == gg ? 2 : 0) : l2 = 0;
                    p2 = typeof Xl2.optout == wf && Xl2.optout + "" == Hf ? 1 : 0;
                    m2 = i2.issues;
                    var ng2 = m2.length;
                    var og = ng2;
                    m2 = og | 0;
                    k2 && 0 == m2 ? (i2.value === void 0 ? $l2[_l2] = void 0 : $l2[_l2] = i2.value, Xl2 = true) : Xl2 = false;
                    if (!Xl2) {
                      Xl2 = !k2 && 1 == p2 && 1 == l2;
                      if (!Xl2 && m2 > 0) {
                        if (0 != l2 && 1 == p2 && !k2) {
                          Xl2 = true;
                        } else {
                          q2 = 0;
                          while (q2 < m2) {
                            n2 = i2.issues[q2];
                            s2 = [];
                            s2.push(_l2);
                            p2 = n2.path;
                            if (Array.isArray(p2)) {
                              u2 = p2.length | 0;
                              r2 = 0;
                              while (r2 < u2) {
                                t2 = p2[r2];
                                s2.push(t2);
                                r2 = r2 + 1;
                              }
                            }
                            n2.path = s2;
                            p2 = am2.issues;
                            p2.push(n2);
                            q2 = q2 + 1;
                          }
                        }
                      }
                      !Xl2 && !k2 && 0 == l2 && (0 == m2 && (Xl2 = { expected: _f, code: ag, input: void 0 }, l2 = [], l2.push(_l2), Xl2.path = l2, am2.issues.push(Xl2)), Xl2 = true);
                      Xl2 || (i2.value === void 0 ? k2 && ($l2[_l2] = void 0) : $l2[_l2] = i2.value);
                    }
                  }
                }
                _l2 = Zl2[1] + "";
                Xl2 = Yl2[_l2];
                if (!(Xl2 === void 0) && !(Xl2 == null)) {
                  Xl2 = Xl2._zod;
                  if (!(Xl2 === void 0) && !(Xl2 == null) && typeof Xl2.run == zf) {
                    k2 = true === _l2 in h;
                    i2 = void 0;
                    k2 && (i2 = h[_l2]);
                    i2 = Xl2.run({ value: i2, issues: [] }, f2);
                    if (o(i2)) throw new Error(tf);
                    typeof Xl2.optin == wf ? (l2 = Xl2.optin + "", l2 = l2 == Hf ? 1 : l2 == gg ? 2 : 0) : l2 = 0;
                    p2 = typeof Xl2.optout == wf && Xl2.optout + "" == Hf ? 1 : 0;
                    m2 = i2.issues;
                    var Sg = m2.length;
                    var Tg2 = Sg;
                    m2 = Tg2 | 0;
                    k2 && 0 == m2 ? (i2.value === void 0 ? $l2[_l2] = void 0 : $l2[_l2] = i2.value, Xl2 = true) : Xl2 = false;
                    if (!Xl2) {
                      Xl2 = !k2 && 1 == p2 && 1 == l2;
                      if (!Xl2 && m2 > 0) {
                        if (0 != l2 && 1 == p2 && !k2) {
                          Xl2 = true;
                        } else {
                          q2 = 0;
                          while (q2 < m2) {
                            n2 = i2.issues[q2];
                            s2 = [];
                            s2.push(_l2);
                            p2 = n2.path;
                            if (Array.isArray(p2)) {
                              u2 = p2.length | 0;
                              r2 = 0;
                              while (r2 < u2) {
                                t2 = p2[r2];
                                s2.push(t2);
                                r2 = r2 + 1;
                              }
                            }
                            n2.path = s2;
                            p2 = am2.issues;
                            p2.push(n2);
                            q2 = q2 + 1;
                          }
                        }
                      }
                      !Xl2 && !k2 && 0 == l2 && (0 == m2 && (Xl2 = { expected: _f, code: ag, input: void 0 }, l2 = [], l2.push(_l2), Xl2.path = l2, am2.issues.push(Xl2)), Xl2 = true);
                      Xl2 || (i2.value === void 0 ? k2 && ($l2[_l2] = void 0) : $l2[_l2] = i2.value);
                    }
                  }
                }
                _l2 = Zl2[2] + "";
                Xl2 = Yl2[_l2];
                if (!(Xl2 === void 0) && !(Xl2 == null)) {
                  Xl2 = Xl2._zod;
                  if (!(Xl2 === void 0) && !(Xl2 == null) && typeof Xl2.run == zf) {
                    k2 = true === _l2 in h;
                    i2 = void 0;
                    k2 && (i2 = h[_l2]);
                    i2 = Xl2.run({ value: i2, issues: [] }, f2);
                    if (o(i2)) throw new Error(tf);
                    typeof Xl2.optin == wf ? (l2 = Xl2.optin + "", l2 = l2 == Hf ? 1 : l2 == gg ? 2 : 0) : l2 = 0;
                    p2 = typeof Xl2.optout == wf && Xl2.optout + "" == Hf ? 1 : 0;
                    m2 = i2.issues;
                    var qh2 = m2.length;
                    var rh = qh2;
                    m2 = rh | 0;
                    k2 && 0 == m2 ? (i2.value === void 0 ? $l2[_l2] = void 0 : $l2[_l2] = i2.value, Xl2 = true) : Xl2 = false;
                    if (!Xl2) {
                      Xl2 = !k2 && 1 == p2 && 1 == l2;
                      if (!Xl2 && m2 > 0) {
                        if (0 != l2 && 1 == p2 && !k2) {
                          Xl2 = true;
                        } else {
                          q2 = 0;
                          while (q2 < m2) {
                            n2 = i2.issues[q2];
                            s2 = [];
                            s2.push(_l2);
                            p2 = n2.path;
                            if (Array.isArray(p2)) {
                              u2 = p2.length | 0;
                              r2 = 0;
                              while (r2 < u2) {
                                t2 = p2[r2];
                                s2.push(t2);
                                r2 = r2 + 1;
                              }
                            }
                            n2.path = s2;
                            p2 = am2.issues;
                            p2.push(n2);
                            q2 = q2 + 1;
                          }
                        }
                      }
                      !Xl2 && !k2 && 0 == l2 && (0 == m2 && (Xl2 = { expected: _f, code: ag, input: void 0 }, l2 = [], l2.push(_l2), Xl2.path = l2, am2.issues.push(Xl2)), Xl2 = true);
                      Xl2 || (i2.value === void 0 ? k2 && ($l2[_l2] = void 0) : $l2[_l2] = i2.value);
                    }
                  }
                }
                Xl2 = Zl2[3] + "";
                Zl2 = Yl2[Xl2];
                if (!(Zl2 === void 0) && !(Zl2 == null)) {
                  Zl2 = Zl2._zod;
                  if (!(Zl2 === void 0) && !(Zl2 == null) && typeof Zl2.run == zf) {
                    _l2 = true === Xl2 in h;
                    Yl2 = void 0;
                    _l2 && (Yl2 = h[Xl2]);
                    Yl2 = Zl2.run({ value: Yl2, issues: [] }, f2);
                    if (o(Yl2)) throw new Error(tf);
                    typeof Zl2.optin == wf ? (f2 = Zl2.optin + "", f2 = f2 == Hf ? 1 : f2 == gg ? 2 : 0) : f2 = 0;
                    k2 = typeof Zl2.optout == wf && Zl2.optout + "" == Hf ? 1 : 0;
                    h = Yl2.issues;
                    var Nh = h.length;
                    var Oh = Nh;
                    h = Oh | 0;
                    _l2 && 0 == h ? (Yl2.value === void 0 ? $l2[Xl2] = void 0 : $l2[Xl2] = Yl2.value, Zl2 = true) : Zl2 = false;
                    if (!Zl2) {
                      Zl2 = !_l2 && 1 == k2 && 1 == f2;
                      if (!Zl2 && h > 0) {
                        if (0 != f2 && 1 == k2 && !_l2) {
                          Zl2 = true;
                        } else {
                          l2 = 0;
                          while (l2 < h) {
                            i2 = Yl2.issues[l2];
                            n2 = [];
                            n2.push(Xl2);
                            k2 = i2.path;
                            if (Array.isArray(k2)) {
                              q2 = k2.length | 0;
                              m2 = 0;
                              while (m2 < q2) {
                                p2 = k2[m2];
                                n2.push(p2);
                                m2 = m2 + 1;
                              }
                            }
                            i2.path = n2;
                            k2 = am2.issues;
                            k2.push(i2);
                            l2 = l2 + 1;
                          }
                        }
                      }
                      !Zl2 && !_l2 && 0 == f2 && (0 == h && (Zl2 = { expected: _f, code: ag, input: void 0 }, f2 = [], f2.push(Xl2), Zl2.path = f2, am2.issues.push(Zl2)), Zl2 = true);
                      Zl2 || (Yl2.value === void 0 ? _l2 && ($l2[Xl2] = void 0) : $l2[Xl2] = Yl2.value);
                    }
                  }
                }
              } else {
                l2 = 0;
                while (l2 < t2) {
                  Xl2 = Zl2[l2] + "";
                  if (Xl2 == pg) {
                    l2 = l2 + 1;
                  } else {
                    _l2 = Yl2[Xl2];
                    if (!(_l2 === void 0) && !(_l2 == null)) {
                      _l2 = _l2._zod;
                      if (!(_l2 === void 0) && !(_l2 == null) && typeof _l2.run == zf) {
                        k2 = true === Xl2 in h;
                        i2 = void 0;
                        k2 && (i2 = h[Xl2]);
                        i2 = _l2.run({ value: i2, issues: [] }, f2);
                        if (o(i2)) throw new Error(tf);
                        typeof _l2.optin == wf ? (m2 = _l2.optin + "", m2 = m2 == Hf ? 1 : m2 == gg ? 2 : 0) : m2 = 0;
                        q2 = typeof _l2.optout == wf && _l2.optout + "" == Hf ? 1 : 0;
                        n2 = i2.issues;
                        var ki = n2.length;
                        var li2 = ki;
                        n2 = li2 | 0;
                        k2 && 0 == n2 ? (i2.value === void 0 ? $l2[Xl2] = void 0 : $l2[Xl2] = i2.value, _l2 = true) : _l2 = false;
                        if (!_l2) {
                          _l2 = !k2 && 1 == q2 && 1 == m2;
                          if (!_l2 && n2 > 0) {
                            if (0 != m2 && 1 == q2 && !k2) {
                              _l2 = true;
                            } else {
                              r2 = 0;
                              while (r2 < n2) {
                                p2 = i2.issues[r2];
                                u2 = [];
                                u2.push(Xl2);
                                q2 = p2.path;
                                if (Array.isArray(q2)) {
                                  w2 = q2.length | 0;
                                  s2 = 0;
                                  while (s2 < w2) {
                                    v2 = q2[s2];
                                    u2.push(v2);
                                    s2 = s2 + 1;
                                  }
                                }
                                p2.path = u2;
                                q2 = am2.issues;
                                q2.push(p2);
                                r2 = r2 + 1;
                              }
                            }
                          }
                          !_l2 && !k2 && 0 == m2 && (0 == n2 && (_l2 = { expected: _f, code: ag, input: void 0 }, m2 = [], m2.push(Xl2), _l2.path = m2, am2.issues.push(_l2)), _l2 = true);
                          _l2 || (i2.value === void 0 ? k2 && ($l2[Xl2] = void 0) : $l2[Xl2] = i2.value);
                        }
                      }
                    }
                    l2 = l2 + 1;
                  }
                }
              }
            }
            am2.value = $l2;
            return am2;
          });
          g.fn = a;
        } else {
          if (16 == f) {
            g = {};
            a = (0, function(mb2, f2) {
              var i2 = mb2.value;
              if (!Array.isArray(i2)) {
                mb2.issues.push({ expected: zg, code: ag, input: i2, inst: b });
                return mb2;
              }
              var h = this["~lil"];
              h === void 0 && (h = Sb(b), this["~lil"] = h);
              h = true === h;
              if (!(f2 === void 0) && !(f2 == null)) {
                var ib2 = f2.async;
                true === ib2 && (h = true);
                ib2 = f2.jitless;
                true === ib2 && (h = true);
                typeof f2.direction == wf && f2.direction + "" == eh && (h = true);
              }
              if (h) {
                ib2 = this.run;
                if (ib2 == g.fn) return e.call(this, mb2, f2);
                return d.call(this, mb2, f2);
              }
              var hb2 = this.def;
              ib2 = hb2.element;
              if (ib2 === void 0 || ib2 == null || ib2._zod === void 0 || !(typeof ib2._zod.run == zf)) return d.call(this, mb2, f2);
              var m2 = ib2._zod;
              var p2 = i2.length | 0;
              var j2 = new Array(p2);
              var n2 = mb2.issues;
              var k2 = [];
              hb2 = 0;
              while (hb2 < p2) {
                var jb2 = m2.run;
                ib2 = i2[hb2];
                var kb2 = m2.run({ value: ib2, issues: [] }, f2);
                if (o(kb2)) {
                  if (!(f2 === void 0) && !(f2 == null) && false === f2.async) throw new Error(tf);
                  k2.push(kb2.then(/* @__PURE__ */ ((a2, b2, c2) => function(e2) {
                    var O2 = e2.issues;
                    var f3;
                    if (!(O2 === void 0) && (O2.length | 0) > 0) {
                      var k3 = O2.length | 0;
                      f3 = 0;
                      while (f3 < k3) {
                        var i3 = [];
                        i3.push(+(0 + c2));
                        var g2 = O2[f3];
                        g2 = g2.path;
                        if (Array.isArray(g2)) {
                          var l3 = g2.length | 0;
                          var h2 = 0, j3;
                          while (h2 < l3) {
                            j3 = g2[h2];
                            i3.push(j3);
                            h2 = h2 + 1;
                          }
                        }
                        g2 = O2[f3];
                        g2.path = i3;
                        g2 = O2[f3];
                        b2.push(g2);
                        f3 = f3 + 1;
                      }
                    }
                    a2[c2] = e2.value;
                  })(j2, n2, hb2)));
                } else {
                  jb2 = kb2.issues;
                  if (!(jb2 === void 0) && (jb2.length | 0) > 0) {
                    var r2 = jb2.length | 0;
                    ib2 = 0;
                    while (ib2 < r2) {
                      var l2 = [];
                      l2.push(+(0 + hb2));
                      var lb2 = jb2[ib2];
                      lb2 = lb2.path;
                      if (Array.isArray(lb2)) {
                        var s2 = lb2.length | 0;
                        h = 0;
                        while (h < s2) {
                          var q2 = lb2[h];
                          l2.push(q2);
                          h = h + 1;
                        }
                      }
                      lb2 = jb2[ib2];
                      lb2.path = l2;
                      lb2 = jb2[ib2];
                      n2.push(lb2);
                      ib2 = ib2 + 1;
                    }
                  }
                  j2[hb2] = kb2.value;
                }
                hb2 = hb2 + 1;
              }
              mb2.value = j2;
              return (k2.length | 0) > 0 ? Promise.all(k2).then(function(a2) {
                return mb2;
              }) : mb2;
            });
            g.fn = a;
          } else {
            return;
          }
        }
      }
    }
  }
  c["~pf"] = d;
  c["~rf"] = e;
  15 == f || 16 == f ? c.parse = d : c.parse = a;
  c.run = ve(a, Jd(b), e, b);
};
var _e = (a) => {
  if (typeof a == wf) return a;
  if (j(a) && !(a == null)) {
    if (typeof a.error == wf) return a.error;
    if (typeof a.message == wf) return a.message;
  }
  return qh;
};
var ca = (a) => {
  if (a === void 0 || a == null) return {};
  if (typeof a == wf) return { error: function() {
    return a;
  } };
  if (typeof a == zf) return { error: a };
  if (!j(a)) return {};
  if (!(a.message === void 0)) {
    if (!(a.error === void 0)) throw B("Cannot specify both `message` and `error` params");
    a.error = a.message;
  }
  Reflect.deleteProperty(a, Rf);
  if (typeof a.error == wf) {
    var b = a.error;
    a = w({}, a);
    a.error = function() {
      return b;
    };
    return a;
  }
  return a;
};
var Rc = (a) => {
  if (typeof a == Af) {
    a = +a | 0;
    if (a == -1) return "(?:[01]\\d|2[0-3]):[0-5]\\d";
    if (0 == a) return "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{" + a + "}";
  }
  return "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
};
var Sc = (a) => {
  var b = void 0;
  j(a) && !(a == null) && (b = a.precision);
  return n("^" + Rc(b) + pl, qh);
};
var Tc = (a) => {
  var b = void 0;
  if (j(a) && !(a == null)) {
    b = a.precision;
    var c = a.offset, d;
    d = a.local;
  } else {
    c = false;
    d = false;
  }
  b = Rc(b);
  a = c ? "Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)" : "Z";
  a = "(?:" + a + ")";
  d && (a = a + "?");
  return n("^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:" + b + a + Dl, qh);
};
var Oa = (a) => {
  r(a).def.coerce = true;
  a = a._zod;
  var b;
  if (a["~pf"] === void 0 || a["~rf"] === void 0) return;
  Object.assign(a, { parse: a["~pf"], run: a["~rf"] });
};
var ue = (a) => 0 == a ? l : 1 == a ? v : 2 == a ? oa : 3 == a ? C : 4 == a ? sb : 5 == a ? P : 6 == a ? tb : 7 == a ? ub : 8 == a ? Qa : 9 == a ? vb : 10 == a ? X : 11 == a ? xa : 12 == a ? wb : 13 == a ? Ra : 14 == a ? Y : 15 == a ? A : 16 == a ? M : 17 == a ? xb : 18 == a ? Sa : 19 == a ? ya : 20 == a ? za : 21 == a ? Z : 38 == a ? Ta : 22 == a ? Ua : 23 == a ? pa : 24 == a ? zb : 25 == a ? Va : 26 == a ? Wa : 27 == a ? Xa : 28 == a ? Ab : 29 == a ? Aa : 30 == a ? Ya : 31 == a ? Ba : 32 == a ? T : 33 == a ? cc : 34 == a ? ea : 35 == a ? Da : 37 == a ? Bb : 39 == a ? fa : 40 == a ? Cb : k;
var q = (a, b) => {
  a = { type: a };
  w(a, ca(b));
  return a;
};
var Ae = (a, b, c, d) => {
  w(c, ca(d));
  return t(a, s(b, c));
};
var Oe = (a, b, c) => {
  c = q(Fe(a), c);
  c.innerType = b;
  return new (ue(a))(c);
};
var Ke = (a) => {
  a = r(a).def.shape;
  var b;
  return a === void 0 || a == null ? {} : a;
};
var cf = (a) => {
  a = r(a).def.checks;
  a = Array.isArray(a) && (a.length | 0) > 0;
  return a;
};
var xe = (a, h) => {
  var b = Reflect.ownKeys(h);
  var g = b.length | 0;
  h = 0;
  while (h < g) {
    if (!(typeof b[h] == wf)) {
      h = h + 1;
      continue;
    }
    var c = b[h];
    if (!S.call(a, c)) throw B('Unrecognized key: "' + b[h] + Ni);
    h = h + 1;
  }
};
var Re = (a, b) => {
  let c = {};
  p(c, lg, { configurable: true, enumerable: true, get: function() {
    var d = {};
    var e = Ke(a);
    Fa(d, e);
    !(b === void 0) && j(b) && !(b == null) && Fa(d, b);
    p(this, lg, { value: d, writable: true, enumerable: true, configurable: true });
    return d;
  } });
  return c;
};
var ye = (a, b, c, d) => {
  if (c && cf(a)) {
    if (d) throw B(Wg);
    throw B($g);
  }
  var e = u.defineProperties({}, u.getOwnPropertyDescriptors(r(a).def));
  p(e, lg, { configurable: true, enumerable: true, get: function() {
    var Z2 = r(a).def.shape;
    var f, j2, g, i2, l2, h, n2;
    (Z2 === void 0 || Z2 == null) && (Z2 = {});
    !(b === void 0) && !(b == null) && xe(Z2, b);
    n2 = Reflect.ownKeys(Z2);
    j2 = {};
    g = n2.length | 0;
    h = 0;
    while (h < g) {
      i2 = n2[h];
      if (!(typeof i2 == wf)) {
        h = h + 1;
        continue;
      }
      f = Z2[i2];
      (b === void 0 || b == null || b[i2]) && (f = c ? d ? new qa({ type: Hf, innerType: f, exact: true }) : Oe(23, f, void 0) : Oe(28, f, void 0));
      Q(j2, i2, f);
      h = h + 1;
    }
    p(this, lg, { value: j2, writable: true, enumerable: true, configurable: true });
    return j2;
  } });
  c && (e.checks = []);
  return new A(e);
};
var Uc = (a, b) => {
  if (Array.isArray(a)) {
    var c = {};
    var g = a.length | 0;
    var h = 0;
    while (h < g) {
      Q(c, a[h], a[h]);
      h = h + 1;
    }
    a = c;
  }
  b = q(qj, b);
  b.entries = a;
  return new Y(b);
};
var Pb = (a, b) => {
  (a === void 0 || a == null) && (a = {});
  b = q(Xg, b);
  b.shape = a;
  return new A(b);
};
var Qb = (a, b, c) => {
  var d = q(wj, c);
  d.items = a;
  !(b === void 0) && !(b == null) && (d.rest = b);
  return new xb(d);
};
var nb = (a, b, c) => {
  if (b === void 0 || b == null || b._zod === void 0) {
    c = new l(q(wf, void 0));
    var u2 = a;
    a = c;
    c = b;
    b = u2;
  }
  c = q(Qh, c);
  Object.assign(c, { keyType: a, valueType: b });
  return new Sa(c);
};
var $d = (a, b, h) => {
  var c = q(jh, h);
  Object.assign(c, { options: b, discriminator: a, inclusive: false });
  if (Array.isArray(b)) {
    var g = b.length | 0;
    h = 0;
    while (h < g) {
      var d = b[h];
      if (d === void 0) {
        h = h + 1;
        continue;
      }
      if (d == null) {
        h = h + 1;
        continue;
      }
      if (!j(d)) {
        h = h + 1;
        continue;
      }
      d = d._zod;
      if (d === void 0) {
        h = h + 1;
        continue;
      }
      if (d == null) {
        h = h + 1;
        continue;
      }
      d = d.def;
      if (d === void 0) {
        h = h + 1;
        continue;
      }
      if (d == null) {
        h = h + 1;
        continue;
      }
      d = rb.get(d);
      if (d === void 0) {
        h = h + 1;
        continue;
      }
      if (d == null) {
        h = h + 1;
        continue;
      }
      if (!S.call(d, a)) throw B(Sf + h + Ni);
      h = h + 1;
    }
  }
  return new yb(c);
};
var Vc = (a, b, c) => {
  let d = Ca, e = c.decode;
  return new d({ type: Ih, in: a, out: b, transform: e, reverseTransform: c.encode });
};
var pe = () => {
  let a = [];
  a.push("true");
  a.push("1");
  a.push("yes");
  a.push("on");
  a.push("y");
  a.push("enabled");
  return a;
};
var qe = () => {
  let a = [];
  a.push("false");
  a.push("0");
  a.push("no");
  a.push("off");
  a.push("n");
  a.push("disabled");
  return a;
};
var re = (h) => {
  var e = ca(h);
  var a = e.truthy;
  var b = e.falsy;
  (a === void 0 || !Array.isArray(a)) && (a = pe());
  (b === void 0 || !Array.isArray(b)) && (b = qe());
  var c = false;
  typeof e.case == wf && "sensitive" == e.case + "" && (c = true);
  if (!c) {
    var f = [];
    var g = a.length | 0;
    h = 0;
    while (h < g) {
      if (typeof a[h] == wf) {
        f.push(a[h].toLowerCase());
      } else {
        var i2 = a[h];
        f.push(i2);
      }
      h = h + 1;
    }
    a = f;
    f = [];
    g = b.length | 0;
    h = 0;
    while (h < g) {
      typeof b[h] == wf ? f.push(b[h].toLowerCase()) : (i2 = b[h], f.push(i2));
      h = h + 1;
    }
    b = f;
  }
  f = z();
  g = z();
  i2 = a.length | 0;
  h = 0;
  while (h < i2) {
    var j2 = a[h];
    f.add(j2);
    h = h + 1;
  }
  i2 = b.length | 0;
  h = 0;
  while (h < i2) {
    j2 = b[h];
    g.add(j2);
    h = h + 1;
  }
  h = l;
  var n2 = new h({ type: wf, error: e.error });
  h = oa;
  var o2 = new h({ type: Ug, error: e.error });
  var d;
  h = function(i3, e2) {
    var N2 = i3 + "";
    c || (N2 = N2.toLowerCase());
    if (f.has(N2)) return true;
    if (g.has(N2)) return false;
    var R2 = [];
    var O2 = a.length | 0;
    var Q2 = 0, S2, P2;
    while (Q2 < O2) {
      N2 = a[Q2];
      R2.push(N2);
      Q2 = Q2 + 1;
    }
    Q2 = b.length | 0;
    S2 = 0;
    while (S2 < Q2) {
      O2 = b[S2];
      R2.push(O2);
      S2 = S2 + 1;
    }
    S2 = e2.issues;
    P2 = e2.value;
    S2.push({ code: _g, expected: ol, values: R2, input: P2, inst: d });
    return {};
  };
  i2 = function(d2, e2) {
    if (true === d2) return a[0];
    return b[0];
  };
  j2 = Ca;
  d = new j2({ type: Ih, in: n2, out: o2, transform: h, reverseTransform: i2, error: e.error });
  return d;
};
var ae = (b) => {
  var a;
  a = new Aa({ type: Oj, getter: function() {
    let Q2 = [], R2 = new l(q(wf, b));
    Q2.push(R2);
    Q2.push(new v(q(Af, void 0)));
    Q2.push(new oa(q(Ug, void 0)));
    Q2.push(new Qa({ type: Hh }));
    let d = a;
    R2 = q(zg, void 0);
    R2.element = d;
    Q2.push(new M(R2));
    R2 = new l(q(wf, void 0));
    Q2.push(nb(R2, a, void 0));
    R2 = q(jh, void 0);
    R2.options = Q2;
    return new Z(R2);
  } });
  return a;
};
var da = (a, b, c, d) => {
  (a === void 0 || a == null) && (a = l);
  var e = q(wf, d);
  e.format = b;
  e.check = Uf;
  !(c === void 0) && !(c == null) && (e.pattern = c);
  return new a(e);
};
var be = (a, b) => {
  var d = j(b) && typeof b.enc == wf ? b.enc + "" : Vk;
  var e = a + "_" + d;
  var c = a + "";
  a = bc;
  d == Vk && ("md5" == c && (a = Ed), c == wl && (a = Fd), c == Mk && (a = bc), c == Nk && (a = Gd), c == Ok && (a = Hd));
  d == Ph && ("md5" == c && (a = n("^[A-Za-z0-9+/]{22}==$", qh)), c == wl && (a = n("^[A-Za-z0-9+/]{27}=$", qh)), c == Mk && (a = n("^[A-Za-z0-9+/]{43}=$", qh)), c == Nk && (a = n("^[A-Za-z0-9+/]{64}$", qh)), c == Ok && (a = n("^[A-Za-z0-9+/]{86}==$", qh)));
  d == Kh && ("md5" == c && (a = n("^[A-Za-z0-9_-]{22}$", qh)), c == wl && (a = n("^[A-Za-z0-9_-]{27}$", qh)), c == Mk && (a = n("^[A-Za-z0-9_-]{43}$", qh)), c == Nk && (a = n("^[A-Za-z0-9_-]{64}$", qh)), c == Ok && (a = n("^[A-Za-z0-9_-]{86}$", qh)));
  return da(void 0, e, a, b);
};
var ce = (a, b, c) => {
  c = q(wf, c);
  Object.assign(c, { check: Uf, format: a });
  typeof b == zf && (c.fn = b);
  j(b) && !(b == null) && typeof b.test == zf && (c.pattern = b, c.fn === void 0 && (c.fn = function(c2) {
    return b.test(c2);
  }));
  return new l(c);
};
var de = (a) => {
  var b = void 0;
  var c = void 0;
  j(a) && !(a == null) && (b = a.input, c = a.output);
  Array.isArray(b) && (b = Qb(b, void 0, void 0));
  b === void 0 && (b = new X({ type: vh }), a = q(zg, void 0), a.element = b, b = new M(a));
  c === void 0 && (c = new X({ type: vh }));
  return new fa({ type: zf, input: b, output: c });
};
var Xe = (a, b, c, d) => {
  b = { format: b, pattern: c };
  c = _e(d) + "";
  c.length > 0 && (b.error = c);
  return t(a, s(Uf, b));
};
var ee = () => {
  let b = k.prototype, a = true;
  p(b, "_def", { configurable: a, get: function() {
    let a2 = this._zod;
    return a2.def;
  } });
  b = k.prototype;
  Ue(b, Ai, function(b2) {
    var a2;
    let c = nd, d = b2._zod;
    a2 = c(d, function(e, f) {
      return Pc(b2, e, f, a2);
    });
    return a2;
  }, a);
  b = k.prototype;
  Ue(b, Cl, function(a2) {
    return od(a2._zod, function(e, f) {
      ha();
      return va(Na(e, r(a2), f));
    });
  }, a);
  b = k.prototype;
  Ue(b, ml, function(b2) {
    var a2;
    let c = function(d, e) {
      return ba(b2, d, e, a2);
    };
    a2 = new globalThis.Function(sl, jg)(c);
    return a2;
  }, a);
  b = k.prototype;
  Ue(b, aj, function(a2) {
    return function(b2, c) {
      return mb(a2, b2, c);
    };
  }, a);
  b = k.prototype;
  Ue(b, "spa", function(a2) {
    return a2.safeParseAsync;
  }, a);
  b = k.prototype;
  Ue(b, Mj, function(b2) {
    var a2;
    a2 = (0, function() {
      var f = arguments[1];
      var c, d;
      f = f === void 0 || f == null ? {} : w({}, f);
      f.direction = eh;
      d = arguments[0];
      return aa(b2, d, f, a2);
    });
    return a2;
  }, a);
  b = k.prototype;
  Ue(b, Lj, function(b2) {
    var a2;
    a2 = (0, function() {
      var f = arguments[1];
      var c, d;
      f = f === void 0 || f == null ? {} : w({}, f);
      f.direction = xj;
      d = arguments[0];
      return aa(b2, d, f, a2);
    });
    return a2;
  }, a);
  b = k.prototype;
  Ue(b, cl, function(b2) {
    var a2;
    let c = function(c2, d) {
      var f = d === void 0 || d == null ? {} : w({}, d);
      f.direction = eh;
      return ba(b2, c2, f, a2);
    };
    a2 = new globalThis.Function(sl, jg)(c);
    return a2;
  }, a);
  b = k.prototype;
  Ue(b, bl, function(b2) {
    var a2;
    let c = function(c2, d) {
      var f = d === void 0 || d == null ? {} : w({}, d);
      f.direction = xj;
      return ba(b2, c2, f, a2);
    };
    a2 = new globalThis.Function(sl, jg)(c);
    return a2;
  }, a);
  b = k.prototype;
  Ue(b, Hf, function(a2) {
    return function() {
      return Oe(23, a2, void 0);
    };
  }, a);
  b = k.prototype;
  Ue(b, Qk, function(a2) {
    return function() {
      return new qa({ type: Hf, innerType: a2, exact: true });
    };
  }, a);
  b = k.prototype;
  Ue(b, $h, function(a2) {
    return function() {
      return Oe(24, a2, void 0);
    };
  }, a);
  b = k.prototype;
  Ue(b, "nullish", function(a2) {
    return function() {
      return Oe(23, Oe(24, a2, void 0), void 0);
    };
  }, a);
  b = k.prototype;
  Ue(b, zg, function(a2) {
    return function() {
      let b2 = q(zg, void 0);
      b2.element = a2;
      return new M(b2);
    };
  }, a);
  b = k.prototype;
  Ue(b, "or", function(a2) {
    return function(c) {
      let b2 = [];
      b2.push(a2);
      b2.push(c);
      let j2 = q(jh, void 0);
      j2.options = b2;
      return new Z(j2);
    };
  }, a);
  b = k.prototype;
  Ue(b, "and", function(a2) {
    return function(c) {
      return new Ua({ type: Bh, left: a2, right: c });
    };
  }, a);
  b = k.prototype;
  Ue(b, Hf, function(a2) {
    return function() {
      return Oe(23, a2, void 0);
    };
  }, a);
  b = k.prototype;
  Ue(b, Vh, function(a2) {
    return function(c) {
      let b2 = { type: Vh, innerType: a2 };
      p(b2, ti, { configurable: true, enumerable: true, get: function() {
        return typeof c == zf ? c() : c;
      } });
      return new Va(b2);
    };
  }, a);
  b = k.prototype;
  Ue(b, zh, function(a2) {
    return function(c) {
      let b2 = { type: zh, innerType: a2 };
      p(b2, ti, { configurable: true, enumerable: true, get: function() {
        return typeof c == zf ? c() : c;
      } });
      return new Wa(b2);
    };
  }, a);
  b = k.prototype;
  Ue(b, ji, function(a2) {
    return function(c) {
      var b2 = !(typeof c == zf) ? (0, function() {
        return c;
      }) : c;
      return new Xa({ type: ji, innerType: a2, catchValue: b2 });
    };
  }, a);
  b = k.prototype;
  Ue(b, "removeDefault", function(a2) {
    return function() {
      return r(a2).def.innerType;
    };
  }, a);
  b = k.prototype;
  Ue(b, "removeCatch", function(a2) {
    return function() {
      return r(a2).def.innerType;
    };
  }, a);
  b = k.prototype;
  Ue(b, _f, function(a2) {
    return function(c) {
      return Oe(28, a2, c);
    };
  }, a);
  b = k.prototype;
  Ue(b, Nf, function(a2) {
    return function(c) {
      let b2 = new Ba({ type: Nf, transform: c });
      return new T({ type: Ih, in: a2, out: b2 });
    };
  }, a);
  b = k.prototype;
  Ue(b, Ih, function(a2) {
    return function(c) {
      return new T({ type: Ih, in: a2, out: c });
    };
  }, a);
  b = k.prototype;
  Ue(b, bi, function(a2) {
    return function() {
      return Oe(33, a2, void 0);
    };
  }, a);
  b = k.prototype;
  Ue(b, "brand", function(a2) {
    return function() {
      return a2;
    };
  }, a);
  b = k.prototype;
  Ue(b, "describe", function(a2) {
    return function(c) {
      let n2 = L(a2, void 0);
      ia().add.call(ia(), n2);
      let b2 = ia();
      b2.add(n2, { description: c });
      return n2;
    };
  }, a);
  b = k.prototype;
  Ue(b, "meta", function(a2) {
    return function(c) {
      var b2 = ia();
      if (c === void 0) return b2.get(a2);
      var d = L(a2, void 0);
      b2.add(d, c);
      return d;
    };
  }, a);
  b = k.prototype;
  Ue(b, "refine", function(a2) {
    return function() {
      let c = arguments[0], b2 = arguments[1];
      b2 = q(kg, b2);
      Object.assign(b2, { fn: c, check: kg });
      return t(a2, new ea(b2));
    };
  }, a);
  b = k.prototype;
  Ue(b, gl, function(a2) {
    return function(b2, d) {
      return t(a2, Ja(function(e) {
        var a3 = this;
        e.addIssue = function(c) {
          if (typeof c == wf) {
            var b3 = e.value;
            c = { message: c, code: kg, input: b3, inst: a3, path: [] };
          } else {
            !c.fatal || (c.continue = false);
            c.code === void 0 && (c.code = kg);
            true === "input" in c || (c.input = e.value);
            c.inst === void 0 && (c.inst = a3);
            c.continue === void 0 && (c.continue = true);
          }
          var w2 = e.issues;
          w2.push(c);
        };
        return b2(e.value, e);
      }, d));
    };
  }, a);
  b = k.prototype;
  Ue(b, vg, function(a2) {
    return function(c) {
      return t(a2, s(vg, { transform: c }));
    };
  }, a);
  b = k.prototype;
  Ue(b, Zf, function(a2) {
    return function() {
      var g = arguments.length | 0;
      var d = a2, h = 0, b2, c;
      while (h < g) {
        b2 = arguments[h];
        typeof b2 == zf ? d = t(d, Ja(b2, void 0)) : j(b2) && !(b2._zod === void 0) && (d = t(d, b2));
        h = h + 1;
      }
      return d;
    };
  }, a);
  b = k.prototype;
  Ue(b, "with", function(a2) {
    return a2.check;
  }, a);
  b = k.prototype;
  Ue(b, "clone", function(a2) {
    return function(c) {
      return L(a2, c);
    };
  }, a);
  b = k.prototype;
  Ue(b, Dj, function(a2) {
    var c = ia().get.call(ia(), a2);
    if (c === void 0 || c == null) return;
    return c.description;
  }, a);
  b = k.prototype;
  Ue(b, "isOptional", function(a2) {
    return function() {
      return lb(a2, void 0, void 0).success;
    };
  }, a);
  b = k.prototype;
  Ue(b, "isNullable", function(a2) {
    return function() {
      return lb(a2, null, void 0).success;
    };
  }, a);
  b = k.prototype;
  Ue(b, "apply", function(a2) {
    return function(d) {
      var b2 = [];
      b2.push(a2);
      var g = arguments.length | 0;
      var s2 = 1, c;
      while (s2 < g) {
        c = arguments[s2];
        b2.push(c);
        s2 = s2 + 1;
      }
      return d.apply(void 0, b2);
    };
  }, a);
  b = k.prototype;
  Ue(b, "register", function(a2) {
    return function(b2, f) {
      b2.add.call(b2, a2, f);
      return a2;
    };
  }, a);
  b = k.prototype;
  Ue(b, "~standard", function(a2) {
    return { version: 1, vendor: "zod", validate: function(c) {
      try {
        var v2 = lb(a2, c, void 0);
        if (v2.success) return { value: v2.data };
        return { issues: v2.error.issues };
      } catch {
        return mb(a2, c, void 0).then(function(b2) {
          if (b2.success) return { value: b2.data };
          return { issues: b2.error.issues };
        });
      }
    }, jsonSchema: { input: function() {
      a2.constructor;
      if (j(a2._zod) && typeof a2.toJSONSchema == zf) {
        var b2 = arguments[0];
        var d;
        b2 = b2 === void 0 || b2 == null ? {} : w({}, b2);
        b2.io = Bf;
        return a2.toJSONSchema(b2);
      }
      return { type: r(a2).typeName };
    }, output: function() {
      if (typeof a2.toJSONSchema == zf) {
        var b2 = arguments[0];
        var d;
        b2 = b2 === void 0 || b2 == null ? {} : w({}, b2);
        b2.io = sh;
        return a2.toJSONSchema(b2);
      }
      return { type: r(a2).typeName };
    } } };
  }, false);
  b = k.prototype;
  Ue(b, Ch, function(a2) {
    return function() {
      return { type: r(a2).typeName };
    };
  }, a);
  b = l.prototype;
  Ue(b, Cf, function(a2) {
    var c = a2._zod;
    c = c.bag;
    if (c.format === void 0) return null;
    return c.format;
  }, a);
  b = l.prototype;
  Ue(b, Al, function(a2) {
    var c = a2._zod;
    c = c.bag;
    if (c.minimum === void 0) return null;
    return c.minimum;
  }, a);
  b = l.prototype;
  Ue(b, zl, function(a2) {
    var c = a2._zod;
    c = c.bag;
    if (c.maximum === void 0) return null;
    return c.maximum;
  }, a);
};
var fe = () => {
  let b = l.prototype, a = true;
  Ue(b, zi, function(a2) {
    return function(c, e) {
      let b2 = { minimum: c };
      return Ae(a2, rg, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, yi, function(a2) {
    return function(c, e) {
      let b2 = { maximum: c };
      return Ae(a2, Hg, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, qf, function(a2) {
    return function(c, e) {
      let b2 = { length: c };
      return Ae(a2, Ng, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, fk, function(a2) {
    return function(e) {
      return Ae(a2, rg, { minimum: 1 }, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, Cg, function(a2) {
    return function(e, f) {
      var c = { includes: e };
      var b2;
      j(f) && typeof f.position == Af && (c.position = f.position);
      return Ae(a2, Cg, c, f);
    };
  }, a);
  b = l.prototype;
  Ue(b, nl, function(a2) {
    return function(c, e) {
      let b2 = { prefix: c };
      return Ae(a2, ph, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, Il, function(a2) {
    return function(c, e) {
      let b2 = { suffix: c };
      return Ae(a2, Lh, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, $j, function(a2) {
    return function(c, e) {
      let b2 = { format: $j, pattern: c };
      return Ae(a2, Uf, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, vj, function(a2) {
    return function(e) {
      let b2 = Vb;
      return Xe(a2, vj, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, ei, function(a2) {
    return function(n2) {
      var c = { format: ei };
      var b2;
      j(n2) && !(n2.hostname === void 0) && (c.hostname = n2.hostname);
      j(n2) && !(n2.protocol === void 0) && (c.protocol = n2.protocol);
      j(n2) && !(n2.normalize === void 0) && (c.normalize = n2.normalize);
      return Ae(a2, Uf, c, n2);
    };
  }, a);
  b = l.prototype;
  Ue(b, Qi, function(a2) {
    return function(e) {
      let b2 = wa;
      return Xe(a2, Qi, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, "uuidv4", function(a2) {
    return function(e) {
      let b2 = wa;
      return Xe(a2, Qi, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, "uuidv6", function(a2) {
    return function(e) {
      let b2 = wa;
      return Xe(a2, Qi, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, "uuidv7", function(a2) {
    return function(e) {
      let b2 = wa;
      return Xe(a2, Qi, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, xk, function(a2) {
    return function(e) {
      let b2 = Wb;
      return Xe(a2, xk, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, wk, function(a2) {
    return function(e) {
      let b2 = rd;
      return Xe(a2, wk, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, Yj, function(a2) {
    return function(e) {
      let b2 = sd;
      return Xe(a2, Yj, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, Ck, function(a2) {
    return function(e) {
      let b2 = Xb;
      return Xe(a2, Ck, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, gj, function(a2) {
    return function(e) {
      let b2 = Yb;
      return Xe(a2, gj, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, Ph, function(a2) {
    return function(e) {
      let b2 = new globalThis.RegExp("^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$");
      return Xe(a2, Ph, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, Kh, function(a2) {
    return function(e) {
      let b2 = xd;
      return Xe(a2, Kh, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, yk, function(a2) {
    return function(e) {
      let b2 = Zb;
      return Xe(a2, yk, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, Oi, function(a2) {
    return function(e) {
      let b2 = _b;
      return Xe(a2, Oi, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, Jk, function(a2) {
    return function(e) {
      let b2 = yd;
      return Xe(a2, Jk, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, Hi, function(a2) {
    return function(e) {
      let b2 = zd;
      return Xe(a2, Hi, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, dj, function(a2) {
    return function(k2) {
      var c = { format: dj };
      var b2;
      j(k2) && typeof k2.alg == wf && (c.alg = k2.alg);
      return Ae(a2, Uf, c, k2);
    };
  }, a);
  b = l.prototype;
  Ue(b, Zj, function(a2) {
    return function(e) {
      let b2 = wd;
      return Xe(a2, Zj, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, rl, function(a2) {
    return function(e) {
      let b2 = vd;
      return Xe(a2, rl, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, lk, function(a2) {
    return function(c) {
      let b2;
      b2 = j(c) && typeof c.delimiter == wf ? c.delimiter + "" : ":";
      b2 = n(uk + b2 + Ji + b2 + jk, qh);
      return Xe(a2, lk, b2, c);
    };
  }, a);
  b = l.prototype;
  Ue(b, ll, function(a2) {
    return function(e) {
      let b2 = ac;
      return Xe(a2, Wh, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, "xid", function(a2) {
    return function(e) {
      let b2 = td;
      return Xe(a2, "xid", b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, Yk, function(a2) {
    return function(e) {
      let b2 = ud;
      return Xe(a2, Yk, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, Ci, function(a2) {
    return function(f) {
      return Xe(a2, Ci, Tc(f), f);
    };
  }, a);
  b = l.prototype;
  Ue(b, ih, function(a2) {
    return function(c) {
      let b2 = n("^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$", qh);
      return Xe(a2, ih, b2, c);
    };
  }, a);
  b = l.prototype;
  Ue(b, Pj, function(a2) {
    return function(f) {
      return Xe(a2, Pj, Sc(f), f);
    };
  }, a);
  b = l.prototype;
  Ue(b, lj, function(a2) {
    return function(e) {
      let b2 = $b;
      return Xe(a2, lj, b2, e);
    };
  }, a);
  b = l.prototype;
  Ue(b, sj, function(a2) {
    return function() {
      return t(a2, s(vg, { transform: function(b2) {
        return b2.trim();
      } }));
    };
  }, a);
  b = l.prototype;
  Ue(b, Gi, function(a2) {
    return function() {
      return t(a2, s(vg, { transform: function(b2) {
        return b2.toLowerCase();
      } }));
    };
  }, a);
  b = l.prototype;
  Ue(b, hl, function(a2) {
    return function() {
      return t(a2, s(vg, { transform: function(b2) {
        return b2.toUpperCase();
      } }));
    };
  }, a);
  b = l.prototype;
  Ue(b, lh, function(a2) {
    return function() {
      return t(a2, s(lh, {}));
    };
  }, a);
  b = l.prototype;
  Ue(b, mh, function(a2) {
    return function() {
      return t(a2, s(mh, {}));
    };
  }, a);
  b = l.prototype;
  Ue(b, Mh, function(a2) {
    return function(e) {
      var b2 = "NFC";
      typeof e == wf && (b2 = e);
      return t(a2, s(vg, { transform: function(c) {
        return c.normalize(b2);
      } }));
    };
  }, a);
  b = l.prototype;
  Ue(b, "slugify", function(a2) {
    return function() {
      return t(a2, s(vg, { transform: function(b2) {
        return b2.toLowerCase().trim().replace(n(jl, Wj), qh).replace(n(Gl, Wj), "-").replace(n("^-+|-+$", Wj), qh);
      } }));
    };
  }, a);
};
var ge = () => {
  let b = v.prototype, a = true;
  Ue(b, zi, function(a2) {
    return function() {
      let b2 = arguments[0];
      b2 = { value: b2, inclusive: true, origin: Af };
      return Ae(a2, Yf, b2, arguments[1]);
    };
  }, a);
  b = v.prototype;
  Ue(b, yi, function(a2) {
    return function() {
      let b2 = arguments[0];
      b2 = { value: b2, inclusive: true, origin: Af };
      return Ae(a2, ng, b2, arguments[1]);
    };
  }, a);
  b = v.prototype;
  Ue(b, "gt", function(a2) {
    return function() {
      let b2 = arguments[0];
      b2 = { value: b2, inclusive: false, origin: Af };
      return Ae(a2, Yf, b2, arguments[1]);
    };
  }, a);
  b = v.prototype;
  Ue(b, "gte", function(a2) {
    return a2.min;
  }, a);
  b = v.prototype;
  Ue(b, "lt", function(a2) {
    return function() {
      let b2 = arguments[0];
      b2 = { value: b2, inclusive: false, origin: Af };
      return Ae(a2, ng, b2, arguments[1]);
    };
  }, a);
  b = v.prototype;
  Ue(b, "lte", function(a2) {
    return a2.max;
  }, a);
  b = v.prototype;
  Ue(b, di, function(a2) {
    return function() {
      return t(a2, s(hg, { format: di }));
    };
  }, a);
  b = v.prototype;
  Ue(b, Ml, function(a2) {
    return function() {
      return t(a2, s(Yf, { value: 0, inclusive: false, origin: Af }));
    };
  }, a);
  b = v.prototype;
  Ue(b, Ll, function(a2) {
    return function() {
      return t(a2, s(ng, { value: 0, inclusive: false, origin: Af }));
    };
  }, a);
  b = v.prototype;
  Ue(b, el, function(a2) {
    return function() {
      return t(a2, s(Yf, { value: 0, inclusive: true, origin: Af }));
    };
  }, a);
  b = v.prototype;
  Ue(b, fl, function(a2) {
    return function() {
      return t(a2, s(ng, { value: 0, inclusive: true, origin: Af }));
    };
  }, a);
  b = v.prototype;
  Ue(b, xh, function(a2) {
    return function(c, e) {
      let b2 = { value: c };
      return Ae(a2, Xh, b2, e);
    };
  }, a);
  b = v.prototype;
  Ue(b, "step", function(a2) {
    return a2.multipleOf;
  }, a);
  b = v.prototype;
  Ue(b, "finite", function(a2) {
    return function() {
      return a2;
    };
  }, a);
  b = v.prototype;
  Ue(b, "safe", function(a2) {
    return function() {
      return t(a2, s(hg, { format: Bj }));
    };
  }, a);
  b = v.prototype;
  Ue(b, Cf, function(a2) {
    var c = a2._zod;
    c = c.bag;
    if (c.format === void 0) return null;
    return c.format;
  }, a);
  b = v.prototype;
  Ue(b, oj, function(a2) {
    var c = a2._zod;
    var b2 = c.bag;
    var d = globalThis.Math;
    c = Number.NEGATIVE_INFINITY;
    a2 = b2.minimum;
    a2 === void 0 && (a2 = c);
    b2 = b2.exclusiveMinimum;
    b2 === void 0 || (c = b2);
    return d.max(a2, c);
  }, a);
  b = v.prototype;
  Ue(b, mj, function(a2) {
    var c = a2._zod;
    var b2 = c.bag;
    var d = globalThis.Math;
    c = Number.POSITIVE_INFINITY;
    a2 = b2.maximum;
    a2 === void 0 && (a2 = c);
    b2 = b2.exclusiveMaximum;
    b2 === void 0 || (c = b2);
    return d.min(a2, c);
  }, a);
  b = v.prototype;
  Ue(b, "isInt", function(a2) {
    var c = a2._zod;
    a2 = c.bag;
    c = typeof a2.format == wf ? a2.format + "" : qh;
    c = c.includes(di);
    c || (a2 = a2.multipleOf, a2 === void 0 && (a2 = 0.5), true === Number.isSafeInteger(a2) && (c = true));
    return c;
  }, a);
  b = v.prototype;
  Ue(b, Kl, function(a2) {
    return true;
  }, a);
};
var he = () => {
  let b = C.prototype, a = true;
  Ue(b, zi, function(a2) {
    return function(b2) {
      return t(a2, s(Yf, { value: b2, inclusive: true, origin: bg }));
    };
  }, a);
  b = C.prototype;
  Ue(b, yi, function(a2) {
    return function(b2) {
      return t(a2, s(ng, { value: b2, inclusive: true, origin: bg }));
    };
  }, a);
  b = C.prototype;
  Ue(b, "gt", function(a2) {
    return function(b2) {
      return t(a2, s(Yf, { value: b2, inclusive: false, origin: bg }));
    };
  }, a);
  b = C.prototype;
  Ue(b, "gte", function(a2) {
    return a2.min;
  }, a);
  b = C.prototype;
  Ue(b, "lt", function(a2) {
    return function(b2) {
      return t(a2, s(ng, { value: b2, inclusive: false, origin: bg }));
    };
  }, a);
  b = C.prototype;
  Ue(b, "lte", function(a2) {
    return a2.max;
  }, a);
  b = C.prototype;
  Ue(b, Ml, function(a2) {
    return function() {
      return t(a2, s(Yf, { value: BigInt(0), inclusive: false, origin: bg }));
    };
  }, a);
  b = C.prototype;
  Ue(b, Ll, function(a2) {
    return function() {
      return t(a2, s(ng, { value: BigInt(0), inclusive: false, origin: bg }));
    };
  }, a);
  b = C.prototype;
  Ue(b, el, function(a2) {
    return function() {
      return t(a2, s(Yf, { value: BigInt(0), inclusive: true, origin: bg }));
    };
  }, a);
  b = C.prototype;
  Ue(b, fl, function(a2) {
    return function() {
      return t(a2, s(ng, { value: BigInt(0), inclusive: true, origin: bg }));
    };
  }, a);
  b = C.prototype;
  Ue(b, xh, function(a2) {
    return function(c, e) {
      let b2 = { value: c };
      return Ae(a2, Xh, b2, e);
    };
  }, a);
  b = C.prototype;
  Ue(b, Cf, function(a2) {
    var c = a2._zod;
    c = c.bag;
    if (c.format === void 0) return null;
    return c.format;
  }, a);
  b = C.prototype;
  Ue(b, oj, function(a2) {
    var c = a2._zod;
    c = c.bag;
    if (c.minimum === void 0) return null;
    return c.minimum;
  }, a);
  b = C.prototype;
  Ue(b, mj, function(a2) {
    var c = a2._zod;
    c = c.bag;
    if (c.maximum === void 0) return null;
    return c.maximum;
  }, a);
};
var ie = () => {
  let a = P.prototype;
  Ue(a, zi, function(a2) {
    return function(b) {
      return t(a2, s(Yf, { value: b, inclusive: true, origin: ih }));
    };
  }, true);
  a = P.prototype;
  Ue(a, yi, function(a2) {
    return function(b) {
      return t(a2, s(ng, { value: b, inclusive: true, origin: ih }));
    };
  }, true);
  a = P.prototype;
  Ue(a, oj, function(a2) {
    var c = a2._zod;
    var b = c.bag;
    var d = globalThis.Math;
    c = Number.NEGATIVE_INFINITY;
    a2 = b.minimum;
    a2 === void 0 && (a2 = c);
    b = b.exclusiveMinimum;
    b === void 0 || (c = b);
    return d.max(a2, c);
  }, true);
  a = P.prototype;
  Ue(a, mj, function(a2) {
    var c = a2._zod;
    var b = c.bag;
    var d = globalThis.Math;
    c = Number.POSITIVE_INFINITY;
    a2 = b.maximum;
    a2 === void 0 && (a2 = c);
    b = b.exclusiveMaximum;
    b === void 0 || (c = b);
    return d.min(a2, c);
  }, true);
  a = P.prototype;
  Ue(a, "minDate", function(a2) {
    var c = a2.minValue;
    if (c == null || !_(c)) return null;
    return new Date(c);
  }, true);
  a = P.prototype;
  Ue(a, "maxDate", function(a2) {
    var c = a2.maxValue;
    if (c == null || !_(c)) return null;
    return new Date(c);
  }, true);
};
var Rb = (a) => {
  Ue(a, zi, function(a2) {
    return function(c, e) {
      let b = { minimum: c };
      return Ae(a2, yh, b, e);
    };
  }, true);
  Ue(a, yi, function(a2) {
    return function(c, e) {
      let b = { maximum: c };
      return Ae(a2, _h, b, e);
    };
  }, true);
  Ue(a, Jh, function(a2) {
    return function(c) {
      return t(a2, s(oh, { size: c }));
    };
  }, true);
  Ue(a, fk, function(a2) {
    return function() {
      return t(a2, s(yh, { minimum: 1 }));
    };
  }, true);
};
var je = () => {
  let b = A.prototype, a = true;
  p(b, lg, { configurable: a, enumerable: false, get: function() {
    let a2 = this._zod;
    a2 = a2.def;
    return a2.shape;
  } });
  b = A.prototype;
  Ue(b, "strict", function(a2) {
    return function() {
      return L(a2, { catchall: new xa({ type: Ui }) });
    };
  }, a);
  b = A.prototype;
  Ue(b, Ej, function(a2) {
    return function() {
      return L(a2, { catchall: new X({ type: vh }) });
    };
  }, a);
  b = A.prototype;
  Ue(b, "strip", function(a2) {
    return function() {
      let b2 = w({}, r(a2).def);
      b2.catchall = void 0;
      return new A(b2);
    };
  }, a);
  b = A.prototype;
  Ue(b, Zk, function(a2) {
    return a2.passthrough;
  }, a);
  b = A.prototype;
  Ue(b, Og, function(a2) {
    return function(c) {
      return L(a2, { catchall: c });
    };
  }, a);
  b = A.prototype;
  Ue(b, "extend", function(a2) {
    return function(b2) {
      if (cf(a2)) {
        var d = Ke(a2);
        var c = D(b2);
        var g = c.length | 0;
        var h = 0, e;
        while (h < g) {
          e = c[h];
          if (!(u.getOwnPropertyDescriptor(d, e) === void 0)) throw B("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
          h = h + 1;
        }
      }
      return L(a2, Re(a2, b2));
    };
  }, a);
  b = A.prototype;
  Ue(b, "safeExtend", function(a2) {
    return function(c) {
      return L(a2, Re(a2, c));
    };
  }, a);
  b = A.prototype;
  Ue(b, "merge", function(a2) {
    return function(c) {
      if (cf(a2)) throw B(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
      var b2 = Re(a2, r(c).def.shape);
      p(b2, Og, { configurable: true, enumerable: true, get: function() {
        return r(c).def.catchall;
      } });
      var d = r(c).def.checks;
      Array.isArray(d) ? b2.checks = d : b2.checks = [];
      return L(a2, b2);
    };
  }, a);
  b = A.prototype;
  Ue(b, "pick", function(a2) {
    return function(c) {
      if (cf(a2)) throw B(".pick() cannot be used on object schemas containing refinements");
      var d = Ke(a2);
      xe(d, c);
      var e = {};
      var i2 = Reflect.ownKeys(c);
      var g = i2.length | 0;
      var h = 0, b2, f;
      while (h < g) {
        b2 = i2[h];
        typeof b2 == wf && !!c[b2] && Q(e, b2, d[b2]);
        h = h + 1;
      }
      b2 = {};
      b2.checks = [];
      p(b2, lg, { configurable: true, enumerable: true, get: function() {
        p(this, lg, { value: e, writable: true, enumerable: true, configurable: true });
        return e;
      } });
      return L(a2, b2);
    };
  }, a);
  b = A.prototype;
  Ue(b, "omit", function(a2) {
    return function(b2) {
      if (cf(a2)) throw B(".omit() cannot be used on object schemas containing refinements");
      var h = Ke(a2);
      xe(h, b2);
      var d = {};
      Fa(d, h);
      var c = Reflect.ownKeys(b2);
      var g = c.length | 0;
      h = 0;
      while (h < g) {
        var e;
        typeof c[h] == wf && !!b2[c[h]] && (e = c[h], Reflect.deleteProperty(d, e));
        h = h + 1;
      }
      h = {};
      h.checks = [];
      p(h, lg, { configurable: true, enumerable: true, get: function() {
        p(this, lg, { value: d, writable: true, enumerable: true, configurable: true });
        return d;
      } });
      return L(a2, h);
    };
  }, a);
  b = A.prototype;
  Ue(b, tk, function(a2) {
    return function(f) {
      if (cf(a2)) throw B($g);
      return ye(a2, f, true, false);
    };
  }, a);
  b = A.prototype;
  Ue(b, "exactPartial", function(a2) {
    return function(b2) {
      if (cf(a2)) throw B(Wg);
      return ye(a2, b2, true, true);
    };
  }, a);
  b = A.prototype;
  Ue(b, "required", function(a2) {
    return function(b2) {
      return ye(a2, b2, false, false);
    };
  }, a);
  b = A.prototype;
  Ue(b, Xk, function(a2) {
    return function() {
      return Uc(D(Ke(a2)), void 0);
    };
  }, a);
};
var ke = () => {
  let c = pa.prototype, a = "unwrap", b = true;
  Ue(c, a, function(a2) {
    return function() {
      return r(a2).def.innerType;
    };
  }, b);
  c = zb.prototype;
  Ue(c, a, function(a2) {
    return function() {
      return r(a2).def.innerType;
    };
  }, b);
  c = qa.prototype;
  Ue(c, a, function(a2) {
    return function() {
      return r(a2).def.innerType;
    };
  }, b);
  c = Ab.prototype;
  Ue(c, a, function(a2) {
    return function() {
      return r(a2).def.innerType;
    };
  }, b);
  c = M.prototype;
  Ue(c, a, function(a2) {
    return function() {
      return r(a2).def.element;
    };
  }, b);
  c = Va.prototype;
  Ue(c, a, function(a2) {
    return function() {
      return r(a2).def.innerType;
    };
  }, b);
  c = Xa.prototype;
  Ue(c, a, function(a2) {
    return function() {
      return r(a2).def.innerType;
    };
  }, b);
  c = Wa.prototype;
  Ue(c, a, function(a2) {
    return function() {
      return r(a2).def.innerType;
    };
  }, b);
  c = Aa.prototype;
  Ue(c, a, function(a2) {
    return function() {
      return r(a2).def.getter();
    };
  }, b);
  c = Ya.prototype;
  Ue(c, a, function(a2) {
    return function() {
      return r(a2).def.innerType;
    };
  }, b);
};
var le = () => {
  ha();
  Ud();
  ee();
  fe();
  ge();
  he();
  ie();
  Rb(ya.prototype);
  Rb(za.prototype);
  Rb(Da.prototype);
  var a = Da.prototype;
  Ue(a, zk, function(a2) {
    return function() {
      var b = arguments[0];
      if (!Array.isArray(b)) {
        var c = [];
        c.push(b);
        b = c;
      }
      b = { mime: b };
      return Ae(a2, Zi, b, arguments[1]);
    };
  }, true);
  a = M.prototype;
  Ue(a, zi, function(a2) {
    return function(c, e) {
      let b = { minimum: c };
      return Ae(a2, rg, b, e);
    };
  }, true);
  a = M.prototype;
  Ue(a, yi, function(a2) {
    return function(c, e) {
      let b = { maximum: c };
      return Ae(a2, Hg, b, e);
    };
  }, true);
  a = M.prototype;
  Ue(a, qf, function(a2) {
    return function(c, e) {
      let b = { length: c };
      return Ae(a2, Ng, b, e);
    };
  }, true);
  a = M.prototype;
  Ue(a, fk, function(a2) {
    return function(e) {
      return Ae(a2, rg, { minimum: 1 }, e);
    };
  }, true);
  je();
  a = Y.prototype;
  Ue(a, "extract", function(a2) {
    return function(b, C2) {
      var d = r(a2);
      var c = d.def.entries;
      var e = {};
      var g = b.length | 0;
      var X2 = 0, f;
      while (X2 < g) {
        f = b[X2];
        if (!S.call(c, f)) throw B("Key " + b[X2] + Tj);
        f = b[X2];
        Q(e, f, c[b[X2]]);
        X2 = X2 + 1;
      }
      X2 = u.defineProperties({}, u.getOwnPropertyDescriptors(d.def));
      w(X2, ca(C2));
      Object.assign(X2, { entries: e, checks: [] });
      return new Y(X2);
    };
  }, true);
  a = Y.prototype;
  Ue(a, "exclude", function(a2) {
    return function(b, C2) {
      var d = r(a2);
      var $2 = d.def.entries;
      var c = u.defineProperties({}, u.getOwnPropertyDescriptors($2));
      var g = b.length | 0;
      $2 = 0;
      while ($2 < g) {
        var e = d.def.entries;
        var f = b[$2];
        if (!S.call(e, f)) throw B("Key " + b[$2] + Tj);
        e = b[$2];
        Reflect.deleteProperty(c, e);
        $2 = $2 + 1;
      }
      $2 = u.defineProperties({}, u.getOwnPropertyDescriptors(d.def));
      w($2, ca(C2));
      Object.assign($2, { entries: c, checks: [] });
      return new Y($2);
    };
  }, true);
  ke();
  a = fa.prototype;
  Ue(a, "implement", function(a2) {
    return function(c) {
      if (!(typeof c == zf)) throw B("implement() must be called with a function");
      var m2 = r(a2);
      var b = m2.def.input;
      return Nb(c, b, m2.def.output, false);
    };
  }, true);
  a = fa.prototype;
  Ue(a, "implementAsync", function(a2) {
    return function(c) {
      if (!(typeof c == zf)) throw B("implementAsync() must be called with a function");
      var m2 = r(a2);
      var b = m2.def.input;
      return Nb(c, b, m2.def.output, true);
    };
  }, true);
  a = fa.prototype;
  Ue(a, Bf, function(a2) {
    return function() {
      var b = arguments[0];
      Array.isArray(b) && (b = Qb(b, arguments[1], void 0));
      return L(a2, { input: b });
    };
  }, true);
  a = fa.prototype;
  Ue(a, sh, function(a2) {
    return function(c) {
      return L(a2, { output: c });
    };
  }, true);
  Je(M, bk);
  Je(Sa, Rj);
  Je(ya, Fk);
  Je(za, Gk);
  Je(Z, dk);
  Je(yb, hi);
  Je(Ta, Hk);
  Je(T, nk);
  Je(Ca, ck);
  Je(Za, jj);
  Je(Y, mk);
  Je(Ra, Fj);
};
var Wc = (a) => {
  var b = eb();
  !(a === void 0) && !(a == null) && (w(b, a), true === "localeError" in a && (ma = a.localeError), true === "customError" in a && (Pa = a.customError));
  return b;
};
var Xc = (a, b, f) => aa(a, b, f, Xc);
var Yc = (a, b, f) => ba(a, b, f, Yc);
var ob = (a, b) => {
  a = a === void 0 || a == null ? {} : w({}, a);
  a.direction = b;
  return a;
};
var Zc = (a, b, f) => aa(a, b, ob(f, eh), Zc);
var _c = (a, b, f) => aa(a, b, ob(f, xj), _c);
var $c = (a, b, f) => ba(a, b, ob(f, eh), $c);
var ad = (a, b, f) => ba(a, b, ob(f, xj), ad);
var me = (a) => {
  var c = [];
  if (!j(a) || a == null) return c;
  var b = D(a);
  var g = b.length | 0;
  var h = 0, d;
  while (h < g) {
    d = b[h];
    c.push(s(Ah, { property: d, schema: a[b[h]] }));
    h = h + 1;
  }
  return c;
};
var bd = (a) => a;
var i = (a, b) => {
  Ea[a] = b;
};
var u = Object;
var Nl = u.prototype;
var S = Nl.hasOwnProperty;
Nl = u.prototype;
var cd = Nl.isPrototypeOf;
Nl = Array.prototype;
Nl.slice;
var dd = u.is;
var ed = N(tg, "return function(payload){if(typeof payload.value==='string')return payload;payload.issues.push({expected:'string',code:'invalid_type',input:payload.value,inst:inst});return payload;}");
var fd = N(tg, "return function(payload){var v=payload.value;if(typeof v==='number'&&Number.isFinite(v))return payload;var iss={expected:'number',code:'invalid_type',input:v,inst:inst};if(typeof v==='number'){if(Number.isNaN(v))iss.received='NaN';else if(!Number.isFinite(v))iss.received=String(v);}payload.issues.push(iss);return payload;}");
var gd = N(tg, "return function(payload){if(typeof payload.value==='boolean')return payload;payload.issues.push({expected:'boolean',code:'invalid_type',input:payload.value,inst:inst});return payload;}");
var Sb = N(qh, "var recCache=new WeakMap();function isRecursive(node,stack){var cached=recCache.get(node);if(cached!==void 0)return cached;if(stack.has(node))return true;stack.add(node);var result=false;function check(child){if(!result&&child&&child._zod)result=isRecursive(child,stack);}var def=node._zod&&node._zod.def;if(!def){stack.delete(node);recCache.set(node,false);return false;}if(def.type==='lazy'){stack.delete(node);recCache.set(node,true);return true;}var shape=def.shape;if(shape)for(var key in shape)check(shape[key]);for(var k in def){var value=def[k];if(!value||typeof value!=='object')continue;if(value._zod)check(value);else if(Array.isArray(value))for(var i=0;i<value.length;i++)check(value[i]);}stack.delete(node);recCache.set(node,result);return result;}return function useLil(node){return isRecursive(node,new Set());};")();
Nl = "def,inst";
var hd = N(Nl, "return function(payload){var input=payload.value;var fmt=def.format;if(fmt==='int'||fmt==='int32'||fmt==='safeint'){if(typeof input!=='number'||!Number.isInteger(input)){payload.issues.push({expected:'int',code:'invalid_type',input:input,inst:inst,continue:false});return;}}if(fmt==='safeint'&&!Number.isSafeInteger(input)){if(input>0)payload.issues.push({code:'too_big',maximum:9007199254740991,inclusive:true,origin:'number',input:input,inst:inst,continue:!def.abort});else payload.issues.push({code:'too_small',minimum:-9007199254740991,inclusive:true,origin:'number',input:input,inst:inst,continue:!def.abort});}};");
var id = N(Nl, "return function(payload){var p=def.pattern;if(!p)return;p.lastIndex=0;if(p.test(payload.value))return;var extra={origin:'string',code:'invalid_format',format:def.format,input:payload.value,inst:inst,continue:!def.abort};extra.pattern=p.toString();payload.issues.push(extra);};");
var jd = N(Nl, "return function(payload){var v=payload.value;if(v==null||v.length==null)return;var n=typeof v==='string'?Array.from(v).length:v.length;if(n<def.minimum)payload.issues.push({origin:Array.isArray(v)?'array':'string',code:'too_small',minimum:def.minimum,inclusive:true,input:v,inst:inst,continue:!def.abort});};");
var kd = N(Nl, "return function(payload){var v=payload.value;if(v==null||v.length==null)return;var n=typeof v==='string'?Array.from(v).length:v.length;if(n>def.maximum)payload.issues.push({origin:Array.isArray(v)?'array':'string',code:'too_big',maximum:def.maximum,inclusive:true,input:v,inst:inst,continue:!def.abort});};");
var ld = N(Nl, "return function(payload){var v=payload.value;var bound=def.value;var inclusive=def.inclusive!==false;var ok=inclusive?v>=bound:v>bound;if(ok)return;var origin=typeof v==='number'?'number':typeof v==='bigint'?'bigint':typeof v==='object'?'date':def.origin;if(!origin)origin='number';payload.issues.push({origin:origin,code:'too_small',minimum:typeof bound==='object'&&bound&&typeof bound.getTime==='function'?bound.getTime():bound,inclusive:inclusive,input:v,inst:inst,continue:!def.abort});};");
var md = N(Nl, "return function(payload){var v=payload.value;var bound=def.value;var inclusive=def.inclusive!==false;var ok=inclusive?v<=bound:v<bound;if(ok)return;var origin=typeof v==='number'?'number':typeof v==='bigint'?'bigint':typeof v==='object'?'date':def.origin;if(!origin)origin='number';payload.issues.push({origin:origin,code:'too_big',maximum:typeof bound==='object'&&bound&&typeof bound.getTime==='function'?bound.getTime():bound,inclusive:inclusive,input:v,inst:inst,continue:!def.abort});};");
Nl = "intern,fail";
var nd = N(Nl, "return function(data,params){var ctx=params==null?{async:false}:Object.assign({},params,{async:false});var result=intern.run({value:data,issues:[]},ctx);if(result instanceof Promise)throw new Error('Encountered Promise during synchronous parse. Use .parseAsync() instead.');if(!result.issues.length)return result.value;return fail(result,ctx);}");
var od = N(Nl, "return function(data,params){var ctx=params==null?{async:false}:Object.assign({},params,{async:false});var result=intern.run({value:data,issues:[]},ctx);if(result instanceof Promise)throw new Error('Encountered Promise during synchronous parse. Use .parseAsync() instead.');if(!result.issues.length)return {success:true,data:result.value};return fail(result,ctx);}");
var V = [];
var pb = 0;
var qb = void 0;
var la = false;
var pd = { configurable: true, get: function() {
  la = true;
} };
var Tb = /* @__PURE__ */ new WeakMap();
var rb = /* @__PURE__ */ new WeakMap();
var ma = void 0;
var Pa = void 0;
var na = void 0;
var qd = { major: 4, minor: 4, patch: 3 };
var I = (0, function(g) {
  if (this === void 0 || this == null || !j(this)) {
    var a = I.prototype;
    a = u.create(a);
  } else {
    a = this;
  }
  Eb(a, g);
  a.stack === void 0 && Ga(a, I);
  return a;
});
var W = (0, function(c) {
  let a = W.prototype;
  a = u.create(a);
  Eb(a, c);
  Ga(a, W);
  return a;
});
var Ub = (0, function(b) {
  let a = Error;
  a = new a("Encountered unidirectional transform during encode: " + b);
  a.name = "ZodEncodeError";
  return a;
});
var Vb = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var wa = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
var Wb = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var rd = /^[cC][0-9a-z]{6,}$/;
var sd = /^[0-9a-z]+$/;
var Xb = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var Yb = /^[a-zA-Z0-9_-]{21}$/;
var Zb = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var _b = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
Nl = /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$/;
var $b = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var td = /^[0-9a-vA-V]{20}$/;
var ud = /^[A-Za-z0-9]{27}$/;
var vd = /^\+[1-9]\d{6,14}$/;
var Ol = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
var wd = new RegExp("^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", "u");
var xd = /^[A-Za-z0-9_-]*$/;
var yd = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var zd = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var ac = /^\d(?:[ -]?\d){11,18}$/;
var Ad = /^[0-9a-fA-F]*$/;
var Bd = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
var Cd = /^https?$/;
var Dd = /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
var Ed = /^[0-9a-fA-F]{32}$/;
var Fd = /^[0-9a-fA-F]{40}$/;
var bc = /^[0-9a-fA-F]{64}$/;
var Gd = /^[0-9a-fA-F]{96}$/;
var Hd = /^[0-9a-fA-F]{128}$/;
var k = m(ok, void 0);
var Rl = "ZodString";
var l = m(Rl, k);
var Sl = "ZodNumber";
var v = m(Sl, k);
var Tl = "ZodBoolean";
var oa = m(Tl, k);
var Ul = "ZodBigInt";
var C = m(Ul, k);
var Vl = "ZodSymbol";
var sb = m(Vl, k);
var P = m("ZodDate", k);
var tb = m("ZodNaN", k);
var Wl = "ZodUndefined";
var ub = m(Wl, k);
var Qa = m("ZodNull", k);
var vb = m("ZodAny", k);
var Xl = "ZodUnknown";
var X = m(Xl, k);
var Yl = "ZodNever";
var xa = m(Yl, k);
var wb = m("ZodVoid", k);
var Ra = m(Fj, k);
var Y = m(mk, k);
var Zl = "ZodObject";
var A = m(Zl, k);
var M = m(bk, k);
var _l = "ZodTuple";
var xb = m(_l, k);
var Sa = m(Rj, k);
var ya = m(Fk, k);
var za = m(Gk, k);
var Z = m(dk, k);
var yb = m(hi, Z);
var Ta = m(Hk, Z);
var $l = "ZodIntersection";
var Ua = m($l, k);
var am = "ZodOptional";
var pa = m(am, k);
var bm = "ZodExactOptional";
var qa = m(bm, pa);
var cm = "ZodNullable";
var zb = m(cm, k);
var dm = "ZodDefault";
var Va = m(dm, k);
var em = "ZodPrefault";
var Wa = m(em, k);
var fm = "ZodCatch";
var Xa = m(fm, k);
var gm = "ZodNonOptional";
var Ab = m(gm, k);
var Aa = m("ZodLazy", k);
var hm = "ZodPromise";
var Ya = m(hm, k);
var Ba = m(Sk, k);
var T = m(nk, k);
var Ca = m(ck, T);
var Za = m(jj, T);
var im = "ZodReadonly";
var cc = m(im, k);
var jm = "ZodCustom";
var ea = m(jm, k);
var Da = m("ZodFile", k);
var km = "ZodSuccess";
var Bb = m(km, k);
var lm = "ZodFunction";
var fa = m(lm, k);
var mm = "ZodTemplateLiteral";
var Cb = m(mm, k);
var nm = "ZodISODateTime";
var dc = m(nm, l);
var om = "ZodISODate";
var pm = m(om, l);
var qm = "ZodISOTime";
var ec = m(qm, l);
var rm = "ZodISODuration";
var sm = m(rm, l);
var Dm = m("ZodEmail", l);
var Em = m("ZodGUID", l);
var Fm = m("ZodUUID", l);
var fc = m("ZodURL", l);
m("ZodCUID", l);
m("ZodCUID2", l);
m("ZodULID", l);
m("ZodNanoID", l);
m("ZodBase64", l);
m("ZodIPv4", l);
m("ZodIPv6", l);
var Gm = m("ZodJWT", l);
m("ZodEmoji", l);
var tm = (a, b) => {
  let c = { errors: [] };
  Fb(a.issues, [], c, b);
  return c;
};
var um = (a) => {
  a = a.issues;
  var b = a.slice(0);
  b.sort(function(a2, c2) {
    if (Array.isArray(a2.path)) {
      var b2 = a2.path;
      b2 = b2.length | 0;
    } else {
      b2 = 0;
    }
    Array.isArray(c2.path) ? (a2 = c2.path, a2 = a2.length | 0) : a2 = 0;
    return b2 - a2 | 0;
  });
  var c = [];
  var g = b.length | 0;
  var h = 0, d;
  while (h < g) {
    a = b[h];
    d = "\u2716 " + a.message;
    c.push(d);
    Array.isArray(a.path) ? (d = a.path, d = (d.length | 0) > 0) : d = false;
    d && (a = "  \u2192 at " + uc(a.path), c.push(a));
    h = h + 1;
  }
  return c.join("\n");
};
var vm = (a, b) => {
  let c = { _errors: [] };
  db(a.issues, [], c, b);
  return c;
};
var wm = tc;
var Hm = ia();
var Ql = I;
var xm = W;
var ym = (a, b) => Ic(r(a)).get(b);
le();
var Im = (0, function(d) {
  return new l(q(wf, d));
});
var Jm = (0, function(d) {
  return new v(q(Af, d));
});
var Km = (0, function(d) {
  return new oa(q(Ug, d));
});
var Lm = (0, function(d) {
  return new C(q(bg, d));
});
var Mm = (0, function(d) {
  return new sb(q(dh, d));
});
var Nm = (0, function(d) {
  return new P(q(ih, d));
});
var Om = (0, function(d) {
  return new tb(q(ej, d));
});
var Pm = (0, function() {
  return new ub({ type: Qg });
});
var Qm = (0, function() {
  return new Qa({ type: Hh });
});
var Rm = (0, function() {
  return new vb({ type: Uk });
});
var Sm = (0, function() {
  return new X({ type: vh });
});
var Tm = (0, function() {
  return new xa({ type: Ui });
});
var Um = (0, function() {
  return new wb({ type: Qj });
});
var Vm = (0, function() {
  var a = arguments[0];
  var b = arguments[1];
  if (!Array.isArray(a)) {
    var d = [];
    d.push(a);
    a = d;
  }
  d = q(Li, b);
  d.values = a;
  d = new Ra(d);
  return d;
});
var zm = (0, function(a, b) {
  return Uc(a, b);
});
var Am = (0, function(a, b) {
  return Pb(a, b);
});
var Wm = (0, function(a, b) {
  let d = Pb(a, b);
  return d.strict();
});
var Xm = (0, function(a, b) {
  let d = Pb(a, b);
  return d.passthrough();
});
var Ym = (0, function() {
  let a = arguments[0], d = arguments[1];
  d = q(zg, d);
  d.element = a;
  return new M(d);
});
var Zm = (0, function(a, b, c) {
  return Qb(a, b, c);
});
var _m = (0, function(a, b, c) {
  return nb(a, b, c);
});
var $m = (0, function() {
  let a = arguments[0], d = arguments[1];
  d = q(jh, d);
  d.options = a;
  return new Z(d);
});
var an = (0, function() {
  let a = arguments[0], d = arguments[1];
  d = q(jh, d);
  Object.assign(d, { options: a, inclusive: false });
  return new Ta(d);
});
var bn = (0, function(c, a, e) {
  let b = c + "";
  return $d(b, a, e);
});
var cn = (0, function(a, d) {
  return new Ua({ type: Bh, left: a, right: d });
});
var dn = (0, function(a, d) {
  return new ya({ type: xi, keyType: a, valueType: d });
});
var en = (0, function() {
  let a = arguments[0], d = arguments[1];
  d = q(Eg, d);
  d.valueType = a;
  return new za(d);
});
var fn = (0, function(d) {
  return new Aa({ type: Oj, getter: d });
});
var gn = (0, function(d) {
  return new Ya({ type: Aj, innerType: d });
});
var hn = (0, function() {
  var a = arguments[0];
  var d = arguments[1];
  typeof a == zf || (a = (0, function(a2) {
    return true;
  }));
  d = q(kg, d);
  Object.assign(d, { fn: a, check: kg });
  d = new ea(d);
  return d;
});
var jn = (0, function(d) {
  return new Da(q(pi, d));
});
var kn = (0, function() {
  var a = arguments[0];
  var d = arguments[1];
  d = q(kg, d);
  Object.assign(d, { check: kg, abort: true, fn: function(c) {
    return E(a, c) ? true : false;
  } });
  d = new ea(d);
  var b = r(d).handle._zod;
  b = b.bag;
  b.Class = a;
  return d;
});
var ln = (0, function(d) {
  return new Ba({ type: Nf, transform: d });
});
var mn = (0, function(a) {
  return de(a);
});
var nn = (0, function() {
  let d = arguments[0];
  d = new v(q(Af, d));
  return t(d, s(hg, { format: di }));
});
var on = (0, function() {
  let d = arguments[0];
  d = new v(q(Af, d));
  return t(d, s(hg, { format: _j }));
});
var pn = (0, function() {
  let d = arguments[0];
  d = new v(q(Af, d));
  return t(d, s(hg, { format: Pk }));
});
var qn = (0, function() {
  let d = arguments[0];
  d = new v(q(Af, d));
  return t(d, s(hg, { format: rk }));
});
var rn = (0, function() {
  let d = arguments[0];
  d = new v(q(Af, d));
  return t(d, s(hg, { format: sk }));
});
var sn = (0, function(a, d) {
  return new T({ type: Ih, in: a, out: d });
});
var tn = (0, function(a) {
  return a.optional.call(a);
});
var un = (0, function(a) {
  return a.nullable.call(a);
});
var Mn = Vb;
var Nn = function(e) {
  return da(Dm, vj, Mn, e);
};
var On = wa;
var Pn = function(e) {
  return da(Fm, Qi, On, e);
};
var Qn = Wb;
var Rn = function(e) {
  return da(Em, xk, Qn, e);
};
var vn = (0, function() {
  var d = arguments[0];
  d = q(wf, d);
  Object.assign(d, { format: ei, check: Uf, abort: false });
  d = new fc(d);
  return d;
});
var wn = (0, function() {
  var d = arguments[0];
  d = q(wf, d);
  Object.assign(d, { format: ei, check: Uf, abort: false, protocol: Cd, hostname: Dd });
  d = new fc(d);
  return d;
});
var xn = (0, function(a, b, c) {
  return Vc(a, b, c);
});
var yn = (0, function() {
  var d = arguments[0];
  d = r(d);
  var a = d.def.out;
  var b = d.def.in;
  var c = d.def.reverseTransform;
  d = Vc(a, b, { decode: c, encode: d.def.transform });
  return d;
});
var zn = (0, function() {
  let a = arguments[0], d = arguments[1], b = Za;
  a = new Ba({ type: Nf, transform: a });
  return new b({ type: Ih, in: a, out: d });
});
var An = (0, function(a) {
  return re(a);
});
var Bn = (0, function(d) {
  return new Bb({ type: Gg, innerType: d });
});
var Cn = (0, function(a) {
  return ae(a);
});
var Dn = (0, function(d) {
  return da(void 0, Vk, Ad, d);
});
var En = (0, function(d) {
  return da(void 0, fh, Bd, d);
});
var Fn = (0, function(a, b) {
  return be(a, b);
});
var Gn = (0, function(a, b, c) {
  let d = nb(a, b, c);
  r(d).def.partial = true;
  return d;
});
var Hn = (0, function(a) {
  return a.keyof.call(a);
});
var In = (0, function(a, e) {
  return a.catch.call(a, e);
});
var Bm = (0, function(a, e) {
  return a.default.call(a, e);
});
var Jn = (0, function(a, e) {
  return a.prefault.call(a, e);
});
var Kn = (0, function(a) {
  return a.nonoptional.call(a);
});
var Ln = (0, function(a) {
  return a.readonly.call(a);
});
var Sn = Ol;
var Tn = function(e) {
  return da(Gm, dj, Sn, e);
};
var Un = void 0;
var Vn = Yb;
var Wn = function(e) {
  return da(Un, gj, Vn, e);
};
var Xn = void 0;
var Yn = Xb;
var Zn = function(e) {
  return da(Xn, Ck, Yn, e);
};
var _n = void 0;
var $n = Zb;
var ao = function(e) {
  return da(_n, yk, $n, e);
};
var bo = void 0;
var co = _b;
var eo = function(e) {
  return da(bo, Oi, co, e);
};
Ol = {};
Object.assign(Ol, { string: function() {
  let d = arguments[0];
  d = new l(q(wf, d));
  Oa(d);
  return d;
}, number: function() {
  let d = arguments[0];
  d = new v(q(Af, d));
  Oa(d);
  return d;
}, boolean: function() {
  let d = arguments[0];
  d = new oa(q(Ug, d));
  Oa(d);
  return d;
}, bigint: function() {
  let d = arguments[0];
  d = new C(q(bg, d));
  Oa(d);
  return d;
}, date: function() {
  let d = arguments[0];
  d = new P(q(ih, d));
  Oa(d);
  return d;
} });
var Pl = {};
Pl.datetime = function(b) {
  let a = dc;
  return da(a, Ci, Tc(b), b);
};
var fo = Nl;
Object.assign(Pl, { date: function(e) {
  return da(pm, ih, fo, e);
}, time: function(b) {
  let a = ec;
  return da(a, Pj, Sc(b), b);
} });
var go = $b;
Pl.duration = function(e) {
  return da(sm, lj, go, e);
};
var Cm = {};
Cm.en = function() {
  return { localeError: function(a) {
    return sc(a);
  } };
};
Nl = {};
var Ea = {};
i(wf, Im);
i(Af, Jm);
i(Ug, Km);
i(bg, Lm);
i(dh, Mm);
i(ih, Nm);
i(ej, Om);
i(Qg, Pm);
i(Hh, Qm);
i(Uk, Rm);
i(vh, Sm);
i(Ui, Tm);
i(Qj, Um);
i(Li, Vm);
i(qj, zm);
i("nativeEnum", zm);
i(Xg, Am);
i("strictObject", Wm);
i("looseObject", Xm);
i("interface", Am);
i(zg, Ym);
i(wj, Zm);
i(Qh, _m);
i(jh, $m);
i("xor", an);
i("discriminatedUnion", bn);
i(Bh, cn);
i(xi, dn);
i(Eg, en);
i(Oj, fn);
i(Aj, gn);
i(kg, hn);
i(pi, jn);
i("instanceof", kn);
i(Nf, ln);
i(zf, mn);
i(di, nn);
i(_j, on);
i(Pk, pn);
i(rk, qn);
i(sk, rn);
i(Ih, sn);
i(Hf, tn);
i($h, un);
i(vj, Nn);
i(Qi, Pn);
i(xk, Rn);
i(ei, vn);
i("httpUrl", wn);
i("codec", xn);
i("invertCodec", yn);
i("preprocess", zn);
i(ol, An);
i(Gg, Bn);
i("json", Cn);
i(Vk, Dn);
i(fh, En);
i("hash", Fn);
i("partialRecord", Gn);
i("looseRecord", function(a, b, c) {
  let d = nb(a, b, c);
  r(d).def.mode = Zk;
  return d;
});
i(ll, function(d) {
  return da(void 0, Wh, ac, d);
});
i(lk, function() {
  var d = arguments[0];
  var a = j(d) && typeof d.delimiter == wf ? d.delimiter : ":";
  a = a + "";
  d = da(void 0, lk, n(uk + a + Ji + a + jk, qh), d);
  return d;
});
i(Xk, Hn);
i(ji, In);
i(Vh, Bm);
i("_default", Bm);
i(zh, Jn);
i(_f, Kn);
i(bi, Ln);
i(dj, Tn);
i(gj, Wn);
i(Ck, Zn);
i(yk, ao);
i(Oi, eo);
i(li, Ol);
i("iso", Pl);
i("locales", Cm);
i("core", Nl);
i(Ai, Xc);
i(Cl, (a, b, f) => lb(a, b, f));
i(ml, Yc);
i(aj, (a, b, f) => mb(a, b, f));
i(Mj, Zc);
i(Lj, _c);
i(cl, $c);
i(bl, ad);
i("treeifyError", tm);
i("prettifyError", um);
i("formatError", vm);
i("flattenError", wm);
i("registry", () => {
  let a = /* @__PURE__ */ new WeakMap();
  return vc(a, /* @__PURE__ */ new Map());
});
i("globalRegistry", Hm);
i("config", Wc);
i(ok, k);
i(Rl, l);
i(Sl, v);
i(Tl, oa);
i(Ul, C);
i(Vl, sb);
i("ZodDate", P);
i("ZodNaN", tb);
i(Wl, ub);
i("ZodNull", Qa);
i("ZodAny", vb);
i(Xl, X);
i(Yl, xa);
i("ZodVoid", wb);
i(Fj, Ra);
i(mk, Y);
i(Zl, A);
i(bk, M);
i(_l, xb);
i(Rj, Sa);
i(Fk, ya);
i(Gk, za);
i(dk, Z);
i(hi, yb);
i(Hk, Ta);
i($l, Ua);
i(am, pa);
i(cm, zb);
i(dm, Va);
i(em, Wa);
i(fm, Xa);
i(gm, Ab);
i("ZodLazy", Aa);
i(hm, Ya);
i(Sk, Ba);
i(nk, T);
i(ck, Ca);
i(jj, Za);
i(im, cc);
i(jm, ea);
i("ZodFile", Da);
i(lm, fa);
i(mm, Cb);
i(km, Bb);
i(Bi, Ql);
i("ZodRealError", xm);
i("getDiscriminatedOption", ym);
i(bm, qa);
i(Qk, function(d) {
  return new qa({ type: Hf, innerType: d, exact: true });
});
i("slugify", function() {
  return s(vg, { transform: function(b) {
    return b.toLowerCase().trim().replace(n(jl, Wj), qh).replace(n(Gl, Wj), "-").replace(n("^-+|-+$", Wj), qh);
  } });
});
i(fi, function(a) {
  return me(a);
});
i(Ah, function(a, b, c) {
  let d = { property: a, schema: b };
  w(d, ca(c));
  return s(Ah, d);
});
i("templateLiteral", function() {
  var a = arguments[0];
  var d = arguments[1];
  d = q(Ig, d);
  d.parts = a;
  d = new Cb(d);
  var b = d._zod;
  r(d);
  p(b, Jf, { value: Pd(a), writable: true, configurable: true, enumerable: true });
  return d;
});
i("stringFormat", function(a, b, c) {
  return ce(a, b, c);
});
i(Zf, function(a, b) {
  return Ja(a, b);
});
i("with", function(a, b) {
  return Ja(a, b);
});
i("refine", function() {
  let a = arguments[0], d = arguments[1];
  d = q(kg, d);
  Object.assign(d, { fn: a, check: kg });
  return new ea(d);
});
i(gl, function(a, d) {
  return Ja(function(e) {
    var i2 = this;
    e.addIssue = function(c) {
      if (typeof c == wf) {
        var b = e.value;
        c = { message: c, code: kg, input: b, inst: i2, path: [] };
      } else {
        !c.fatal || (c.continue = false);
        c.code === void 0 && (c.code = kg);
        true === "input" in c || (c.input = e.value);
        c.inst === void 0 && (c.inst = i2);
        c.continue === void 0 && (c.continue = true);
      }
      var x2 = e.issues;
      x2.push(c);
    };
    return a(e.value, e);
  }, d);
});
i(sj, function() {
  return s(vg, { transform: function(b) {
    return b.trim();
  } });
});
i(zl, function() {
  var a = arguments[0];
  var d = arguments[1];
  a = { maximum: a };
  j(d) && !(d == null) && w(a, ca(d));
  d = s(Hg, a);
  return d;
});
i(Al, function() {
  var a = arguments[0];
  var d = arguments[1];
  a = { minimum: a };
  j(d) && !(d == null) && w(a, ca(d));
  d = s(rg, a);
  return d;
});
i(nm, dc);
i(om, pm);
i(qm, ec);
i(rm, sm);
i(yl, Ql);
i("NEVER", { status: Fg });
i("fromJSONSchema", function(e, f) {
  e;
  f;
  return new X({ type: vh });
});
i("visit", bd);
i("ZodIssueCode", { invalid_type: ag, too_big: Cj, too_small: $i, invalid_format: Tg, not_multiple_of: Yh, unrecognized_keys: fg, invalid_union: yg, invalid_key: Lg, invalid_element: ch, invalid_value: _g, custom: kg });
i("TimePrecision", { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 });
w(Nl, Ea);
Object.assign(Nl, { $ZodError: Ql, $ZodRealError: xm, $ZodEncodeError: Ub, toDotPath: uc, flattenError: wm, formatError: vm, treeifyError: tm, prettifyError: um, getDiscriminatedOption: ym, $ZodType: k, $ZodPipe: T, $ZodCodec: Ca, $ZodPreprocess: Za, $ZodString: l, $ZodCustom: ea, $ZodNever: xa, $ZodUnknown: X, $ZodNumber: v });
Object.assign(Nl, { $ZodString: l, $ZodType: k, $ZodObject: A, $ZodOptional: pa, visit: bd });
Object.assign(Nl, { $ZodObject: A, $ZodOptional: pa, $ZodExactOptional: qa, config: Wc, globalConfig: eb(), util: Vd() });
Ea.util = Nl.util;
var ne = Ea;

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
    const fn2 = typeof fnOrRegex === "function" ? fnOrRegex : void 0;
    if (regex) return z2.string(params).regex(regex);
    if (fn2) return z2.string(params).refine(fn2);
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
  z2.setErrorMap = (fn2) => z2.config({ customError: fn2 });
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
  const fn2 = typeof fnOrHandlers === "function" ? fnOrHandlers : (node) => {
    const h = fnOrHandlers[node._zod.def.type];
    return h ? h(node) : node;
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
    const mapped = fn2(mapInner(s2));
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
  let fn2;
  fn2 = function(data, params) {
    const result = runSafe.call(this, data, params);
    if (result?.success) return result.data;
    if (result?.error) {
      restack(result.error, fn2);
      throw result.error;
    }
    return result;
  };
  return fn2;
}
function throwing3(runSafe) {
  let fn2;
  fn2 = function(schema, data, ctx) {
    const result = runSafe(schema, data, ctx);
    if (result?.success) return result.data;
    if (result?.error) {
      restack(result.error, fn2);
      throw result.error;
    }
    return result;
  };
  return fn2;
}
function asyncThrowing2(runSafe) {
  let fn2;
  fn2 = async function(data, params) {
    const result = await runSafe.call(this, data, params);
    if (result?.success) return result.data;
    if (result?.error) {
      restack(result.error, fn2);
      throw result.error;
    }
    return result;
  };
  return fn2;
}
function asyncThrowing3(runSafe) {
  let fn2;
  fn2 = async function(schema, data, ctx) {
    const result = await runSafe(schema, data, ctx);
    if (result?.success) return result.data;
    if (result?.error) {
      restack(result.error, fn2);
      throw result.error;
    }
    return result;
  };
  return fn2;
}
function installOwn(proto, key, make) {
  Object.defineProperty(proto, key, {
    configurable: true,
    enumerable: true,
    get() {
      const self = this;
      const fn2 = make(self);
      Object.defineProperty(self, key, {
        configurable: true,
        writable: true,
        enumerable: true,
        value: fn2
      });
      return fn2;
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
applyCompat(ne);
installVisit(ne);
installAsyncApi(ne);
ne.toJSONSchema = toJSONSchema;
ne.core.toJSONSchema = toJSONSchema;
ne.core.JSONSchemaGenerator = JSONSchemaGenerator;
ne.regexes = regexes_exports;
ne.core.regexes = regexes_exports;
ne.compile = ne.compile ?? ((schema) => schema);
if (ne.ZodType && ne.ZodType.prototype) {
  ne.ZodType.prototype.toJSONSchema = function toJSONSchemaMethod(params) {
    return toJSONSchema(this, params);
  };
}
var index_default = ne;
var string2 = ne.string;
var number2 = ne.number;
var boolean2 = ne.boolean;
var bigint2 = ne.bigint;
var symbol = ne.symbol;
var date2 = ne.date;
var nan = ne.nan;
var $undefined = ne.undefined;
var $null = ne.null;
var any = ne.any;
var unknown = ne.unknown;
var never = ne.never;
var $void = ne.void;
var literal = ne.literal;
var $enum = ne.enum;
var nativeEnum = ne.nativeEnum;
var object = ne.object;
var strictObject = ne.strictObject;
var looseObject = ne.looseObject;
var $interface = ne.interface;
var array = ne.array;
var tuple = ne.tuple;
var record = ne.record;
var union = ne.union;
var xor = ne.xor;
var discriminatedUnion = ne.discriminatedUnion;
var intersection = ne.intersection;
var map = ne.map;
var $set = ne.set;
var lazy = ne.lazy;
var promise = ne.promise;
var custom = ne.custom;
var file = ne.file;
var $instanceof = ne.instanceof;
var transform = ne.transform;
var $function = ne.function;
var int = ne.int;
var int32 = ne.int32;
var uint32 = ne.uint32;
var float32 = ne.float32;
var float64 = ne.float64;
var pipe = ne.pipe;
var optional = ne.optional;
var nullable = ne.nullable;
var email2 = ne.email;
var uuid2 = ne.uuid;
var guid2 = ne.guid;
var url = ne.url;
var httpUrl = ne.httpUrl;
var codec = ne.codec;
var invertCodec = ne.invertCodec;
var preprocess = ne.preprocess;
var stringbool = ne.stringbool;
var success = ne.success;
var json = ne.json;
var hex2 = ne.hex;
var hostname2 = ne.hostname;
var hash = ne.hash;
var partialRecord = ne.partialRecord;
var looseRecord = ne.looseRecord;
var creditCard2 = ne.creditCard;
var mac2 = ne.mac;
var keyof = ne.keyof;
var $catch = ne.catch;
var _default = ne._default;
var prefault = ne.prefault;
var nonoptional = ne.nonoptional;
var readonly = ne.readonly;
var jwt = ne.jwt;
var nanoid2 = ne.nanoid;
var ulid2 = ne.ulid;
var ipv42 = ne.ipv4;
var ipv62 = ne.ipv6;
var coerce = ne.coerce;
var iso = ne.iso;
var locales = ne.locales;
var core = ne.core;
var parse = ne.parse;
var safeParse = ne.safeParse;
var parseAsync = ne.parseAsync;
var safeParseAsync = ne.safeParseAsync;
var encode = ne.encode;
var decode = ne.decode;
var encodeAsync = ne.encodeAsync;
var decodeAsync = ne.decodeAsync;
var treeifyError = ne.treeifyError;
var prettifyError = ne.prettifyError;
var formatError = ne.formatError;
var flattenError = ne.flattenError;
var registry = ne.registry;
var globalRegistry2 = ne.globalRegistry;
var config = ne.config;
var ZodType = ne.ZodType;
var ZodString = ne.ZodString;
var ZodNumber = ne.ZodNumber;
var ZodBoolean = ne.ZodBoolean;
var ZodBigInt = ne.ZodBigInt;
var ZodSymbol = ne.ZodSymbol;
var ZodDate = ne.ZodDate;
var ZodNaN = ne.ZodNaN;
var ZodUndefined = ne.ZodUndefined;
var ZodNull = ne.ZodNull;
var ZodAny = ne.ZodAny;
var ZodUnknown = ne.ZodUnknown;
var ZodNever = ne.ZodNever;
var ZodVoid = ne.ZodVoid;
var ZodLiteral = ne.ZodLiteral;
var ZodEnum = ne.ZodEnum;
var ZodObject = ne.ZodObject;
var ZodArray = ne.ZodArray;
var ZodTuple = ne.ZodTuple;
var ZodRecord = ne.ZodRecord;
var ZodMap = ne.ZodMap;
var ZodSet = ne.ZodSet;
var ZodUnion = ne.ZodUnion;
var ZodDiscriminatedUnion = ne.ZodDiscriminatedUnion;
var ZodXor = ne.ZodXor;
var ZodIntersection = ne.ZodIntersection;
var ZodOptional = ne.ZodOptional;
var ZodNullable = ne.ZodNullable;
var ZodDefault = ne.ZodDefault;
var ZodPrefault = ne.ZodPrefault;
var ZodCatch = ne.ZodCatch;
var ZodNonOptional = ne.ZodNonOptional;
var ZodLazy = ne.ZodLazy;
var ZodPromise = ne.ZodPromise;
var ZodTransform = ne.ZodTransform;
var ZodPipe = ne.ZodPipe;
var ZodCodec = ne.ZodCodec;
var ZodPreprocess = ne.ZodPreprocess;
var ZodReadonly = ne.ZodReadonly;
var ZodCustom = ne.ZodCustom;
var ZodFile = ne.ZodFile;
var ZodFunction = ne.ZodFunction;
var ZodTemplateLiteral = ne.ZodTemplateLiteral;
var ZodSuccess = ne.ZodSuccess;
var ZodError = ne.ZodError;
var ZodRealError = ne.ZodRealError;
var getDiscriminatedOption = ne.getDiscriminatedOption;
var ZodExactOptional = ne.ZodExactOptional;
var exactOptional = ne.exactOptional;
var slugify = ne.slugify;
var properties = ne.properties;
var property = ne.property;
var templateLiteral = ne.templateLiteral;
var stringFormat = ne.stringFormat;
var check = ne.check;
var $with = ne.with;
var refine = ne.refine;
var superRefine = ne.superRefine;
var trim = ne.trim;
var maxLength = ne.maxLength;
var minLength = ne.minLength;
var ZodISODateTime = ne.ZodISODateTime;
var ZodISODate = ne.ZodISODate;
var ZodISOTime = ne.ZodISOTime;
var ZodISODuration = ne.ZodISODuration;
var $ZodError = ne.$ZodError;
var NEVER = ne.NEVER;
var fromJSONSchema = ne.fromJSONSchema;
var visit2 = ne.visit;
var ZodIssueCode = ne.ZodIssueCode;
var TimePrecision = ne.TimePrecision;
var util = ne.util;
var int64 = ne.int64;
var uint64 = ne.uint64;
var describe = ne.describe;
var meta = ne.meta;
var e1642 = ne.e164;
var cidrv42 = ne.cidrv4;
var cidrv62 = ne.cidrv6;
var base642 = ne.base64;
var base64url2 = ne.base64url;
var xid2 = ne.xid;
var ksuid2 = ne.ksuid;
var cuid3 = ne.cuid;
var cuid22 = ne.cuid2;
var emoji2 = ne.emoji;
var uuidv4 = ne.uuidv4;
var uuidv6 = ne.uuidv6;
var uuidv7 = ne.uuidv7;
var deepPartial2 = ne.deepPartial;
var safeEncode = ne.safeEncode;
var safeDecode = ne.safeDecode;
var safeEncodeAsync = ne.safeEncodeAsync;
var safeDecodeAsync = ne.safeDecodeAsync;
var setErrorMap = ne.setErrorMap;
var compile = ne.compile;
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
