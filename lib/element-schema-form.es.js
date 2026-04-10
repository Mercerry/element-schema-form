import { defineComponent as E, computed as S, resolveComponent as y, openBlock as g, createBlock as _, mergeProps as w, createSlots as ct, withCtx as A, createElementBlock as O, createCommentVNode as q, renderSlot as J, resolveDynamicComponent as Mn, createElementVNode as mt, toDisplayString as X, createVNode as Ne, unref as f, Fragment as L, renderList as Y, useAttrs as Un, getCurrentInstance as Hn, isRef as I, toHandlers as x, normalizeClass as Gn, createTextVNode as Se, ref as Be, withKeys as Ln, nextTick as Rn } from "vue";
import { Warning as zn } from "@element-plus/icons-vue";
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ae = { exports: {} };
Ae.exports;
(function(n, s) {
  var c = 200, p = "__lodash_hash_undefined__", o = 9007199254740991, a = "[object Arguments]", d = "[object Array]", h = "[object Boolean]", l = "[object Date]", i = "[object Error]", m = "[object Function]", C = "[object GeneratorFunction]", v = "[object Map]", B = "[object Number]", $ = "[object Object]", Z = "[object Promise]", Q = "[object RegExp]", P = "[object Set]", ue = "[object String]", ae = "[object Symbol]", le = "[object WeakMap]", ce = "[object ArrayBuffer]", R = "[object DataView]", T = "[object Float32Array]", N = "[object Float64Array]", ee = "[object Int8Array]", me = "[object Int16Array]", pe = "[object Int32Array]", H = "[object Uint8Array]", de = "[object Uint8ClampedArray]", we = "[object Uint16Array]", Pe = "[object Uint32Array]", ft = /[\\^$.*+?()[\]{}|]/g, ht = /\w*$/, gt = /^\[object .+?Constructor\]$/, vt = /^(?:0|[1-9]\d*)$/, b = {};
  b[a] = b[d] = b[ce] = b[R] = b[h] = b[l] = b[T] = b[N] = b[ee] = b[me] = b[pe] = b[v] = b[B] = b[$] = b[Q] = b[P] = b[ue] = b[ae] = b[H] = b[de] = b[we] = b[Pe] = !0, b[i] = b[m] = b[le] = !1;
  var bt = typeof _e == "object" && _e && _e.Object === Object && _e, yt = typeof self == "object" && self && self.Object === Object && self, D = bt || yt || Function("return this")(), De = s && !s.nodeType && s, Me = De && !0 && n && !n.nodeType && n, _t = Me && Me.exports === De;
  function St(e, t) {
    return e.set(t[0], t[1]), e;
  }
  function At(e, t) {
    return e.add(t), e;
  }
  function wt(e, t) {
    for (var r = -1, u = e ? e.length : 0; ++r < u && t(e[r], r, e) !== !1; )
      ;
    return e;
  }
  function Ct(e, t) {
    for (var r = -1, u = t.length, V = e.length; ++r < u; )
      e[V + r] = t[r];
    return e;
  }
  function Ue(e, t, r, u) {
    for (var V = -1, j = e ? e.length : 0; ++V < j; )
      r = t(r, e[V], V, e);
    return r;
  }
  function Vt(e, t) {
    for (var r = -1, u = Array(e); ++r < e; )
      u[r] = t(r);
    return u;
  }
  function Et(e, t) {
    return e == null ? void 0 : e[t];
  }
  function He(e) {
    var t = !1;
    if (e != null && typeof e.toString != "function")
      try {
        t = !!(e + "");
      } catch {
      }
    return t;
  }
  function Ge(e) {
    var t = -1, r = Array(e.size);
    return e.forEach(function(u, V) {
      r[++t] = [V, u];
    }), r;
  }
  function Ce(e, t) {
    return function(r) {
      return e(t(r));
    };
  }
  function Le(e) {
    var t = -1, r = Array(e.size);
    return e.forEach(function(u) {
      r[++t] = u;
    }), r;
  }
  var $t = Array.prototype, Ot = Function.prototype, fe = Object.prototype, Ve = D["__core-js_shared__"], Re = function() {
    var e = /[^.]+$/.exec(Ve && Ve.keys && Ve.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }(), ze = Ot.toString, G = fe.hasOwnProperty, he = fe.toString, Tt = RegExp(
    "^" + ze.call(G).replace(ft, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ke = _t ? D.Buffer : void 0, We = D.Symbol, qe = D.Uint8Array, jt = Ce(Object.getPrototypeOf, Object), Ft = Object.create, kt = fe.propertyIsEnumerable, xt = $t.splice, Je = Object.getOwnPropertySymbols, It = Ke ? Ke.isBuffer : void 0, Nt = Ce(Object.keys, Object), Ee = re(D, "DataView"), se = re(D, "Map"), $e = re(D, "Promise"), Oe = re(D, "Set"), Te = re(D, "WeakMap"), ie = re(Object, "create"), Bt = W(Ee), Pt = W(se), Dt = W($e), Mt = W(Oe), Ut = W(Te), Xe = We ? We.prototype : void 0, Ye = Xe ? Xe.valueOf : void 0;
  function z(e) {
    var t = -1, r = e ? e.length : 0;
    for (this.clear(); ++t < r; ) {
      var u = e[t];
      this.set(u[0], u[1]);
    }
  }
  function Ht() {
    this.__data__ = ie ? ie(null) : {};
  }
  function Gt(e) {
    return this.has(e) && delete this.__data__[e];
  }
  function Lt(e) {
    var t = this.__data__;
    if (ie) {
      var r = t[e];
      return r === p ? void 0 : r;
    }
    return G.call(t, e) ? t[e] : void 0;
  }
  function Rt(e) {
    var t = this.__data__;
    return ie ? t[e] !== void 0 : G.call(t, e);
  }
  function zt(e, t) {
    var r = this.__data__;
    return r[e] = ie && t === void 0 ? p : t, this;
  }
  z.prototype.clear = Ht, z.prototype.delete = Gt, z.prototype.get = Lt, z.prototype.has = Rt, z.prototype.set = zt;
  function M(e) {
    var t = -1, r = e ? e.length : 0;
    for (this.clear(); ++t < r; ) {
      var u = e[t];
      this.set(u[0], u[1]);
    }
  }
  function Kt() {
    this.__data__ = [];
  }
  function Wt(e) {
    var t = this.__data__, r = ge(t, e);
    if (r < 0)
      return !1;
    var u = t.length - 1;
    return r == u ? t.pop() : xt.call(t, r, 1), !0;
  }
  function qt(e) {
    var t = this.__data__, r = ge(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  function Jt(e) {
    return ge(this.__data__, e) > -1;
  }
  function Xt(e, t) {
    var r = this.__data__, u = ge(r, e);
    return u < 0 ? r.push([e, t]) : r[u][1] = t, this;
  }
  M.prototype.clear = Kt, M.prototype.delete = Wt, M.prototype.get = qt, M.prototype.has = Jt, M.prototype.set = Xt;
  function te(e) {
    var t = -1, r = e ? e.length : 0;
    for (this.clear(); ++t < r; ) {
      var u = e[t];
      this.set(u[0], u[1]);
    }
  }
  function Yt() {
    this.__data__ = {
      hash: new z(),
      map: new (se || M)(),
      string: new z()
    };
  }
  function Zt(e) {
    return ve(this, e).delete(e);
  }
  function Qt(e) {
    return ve(this, e).get(e);
  }
  function en(e) {
    return ve(this, e).has(e);
  }
  function tn(e, t) {
    return ve(this, e).set(e, t), this;
  }
  te.prototype.clear = Yt, te.prototype.delete = Zt, te.prototype.get = Qt, te.prototype.has = en, te.prototype.set = tn;
  function ne(e) {
    this.__data__ = new M(e);
  }
  function nn() {
    this.__data__ = new M();
  }
  function rn(e) {
    return this.__data__.delete(e);
  }
  function on(e) {
    return this.__data__.get(e);
  }
  function an(e) {
    return this.__data__.has(e);
  }
  function ln(e, t) {
    var r = this.__data__;
    if (r instanceof M) {
      var u = r.__data__;
      if (!se || u.length < c - 1)
        return u.push([e, t]), this;
      r = this.__data__ = new te(u);
    }
    return r.set(e, t), this;
  }
  ne.prototype.clear = nn, ne.prototype.delete = rn, ne.prototype.get = on, ne.prototype.has = an, ne.prototype.set = ln;
  function sn(e, t) {
    var r = ke(e) || kn(e) ? Vt(e.length, String) : [], u = r.length, V = !!u;
    for (var j in e)
      G.call(e, j) && !(V && (j == "length" || On(j, u))) && r.push(j);
    return r;
  }
  function Ze(e, t, r) {
    var u = e[t];
    (!(G.call(e, t) && nt(u, r)) || r === void 0 && !(t in e)) && (e[t] = r);
  }
  function ge(e, t) {
    for (var r = e.length; r--; )
      if (nt(e[r][0], t))
        return r;
    return -1;
  }
  function un(e, t) {
    return e && Qe(t, xe(t), e);
  }
  function je(e, t, r, u, V, j, U) {
    var F;
    if (u && (F = j ? u(e, V, j, U) : u(e)), F !== void 0)
      return F;
    if (!be(e))
      return e;
    var at = ke(e);
    if (at) {
      if (F = Vn(e), !t)
        return An(e, F);
    } else {
      var oe = K(e), lt = oe == m || oe == C;
      if (In(e))
        return hn(e, t);
      if (oe == $ || oe == a || lt && !j) {
        if (He(e))
          return j ? e : {};
        if (F = En(lt ? {} : e), !t)
          return wn(e, un(F, e));
      } else {
        if (!b[oe])
          return j ? e : {};
        F = $n(e, oe, je, t);
      }
    }
    U || (U = new ne());
    var st = U.get(e);
    if (st)
      return st;
    if (U.set(e, F), !at)
      var it = r ? Cn(e) : xe(e);
    return wt(it || e, function(Ie, ye) {
      it && (ye = Ie, Ie = e[ye]), Ze(F, ye, je(Ie, t, r, u, ye, e, U));
    }), F;
  }
  function cn(e) {
    return be(e) ? Ft(e) : {};
  }
  function mn(e, t, r) {
    var u = t(e);
    return ke(e) ? u : Ct(u, r(e));
  }
  function pn(e) {
    return he.call(e);
  }
  function dn(e) {
    if (!be(e) || jn(e))
      return !1;
    var t = ot(e) || He(e) ? Tt : gt;
    return t.test(W(e));
  }
  function fn(e) {
    if (!tt(e))
      return Nt(e);
    var t = [];
    for (var r in Object(e))
      G.call(e, r) && r != "constructor" && t.push(r);
    return t;
  }
  function hn(e, t) {
    if (t)
      return e.slice();
    var r = new e.constructor(e.length);
    return e.copy(r), r;
  }
  function Fe(e) {
    var t = new e.constructor(e.byteLength);
    return new qe(t).set(new qe(e)), t;
  }
  function gn(e, t) {
    var r = t ? Fe(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.byteLength);
  }
  function vn(e, t, r) {
    var u = t ? r(Ge(e), !0) : Ge(e);
    return Ue(u, St, new e.constructor());
  }
  function bn(e) {
    var t = new e.constructor(e.source, ht.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  function yn(e, t, r) {
    var u = t ? r(Le(e), !0) : Le(e);
    return Ue(u, At, new e.constructor());
  }
  function _n(e) {
    return Ye ? Object(Ye.call(e)) : {};
  }
  function Sn(e, t) {
    var r = t ? Fe(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  }
  function An(e, t) {
    var r = -1, u = e.length;
    for (t || (t = Array(u)); ++r < u; )
      t[r] = e[r];
    return t;
  }
  function Qe(e, t, r, u) {
    r || (r = {});
    for (var V = -1, j = t.length; ++V < j; ) {
      var U = t[V], F = void 0;
      Ze(r, U, F === void 0 ? e[U] : F);
    }
    return r;
  }
  function wn(e, t) {
    return Qe(e, et(e), t);
  }
  function Cn(e) {
    return mn(e, xe, et);
  }
  function ve(e, t) {
    var r = e.__data__;
    return Tn(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }
  function re(e, t) {
    var r = Et(e, t);
    return dn(r) ? r : void 0;
  }
  var et = Je ? Ce(Je, Object) : Pn, K = pn;
  (Ee && K(new Ee(new ArrayBuffer(1))) != R || se && K(new se()) != v || $e && K($e.resolve()) != Z || Oe && K(new Oe()) != P || Te && K(new Te()) != le) && (K = function(e) {
    var t = he.call(e), r = t == $ ? e.constructor : void 0, u = r ? W(r) : void 0;
    if (u)
      switch (u) {
        case Bt:
          return R;
        case Pt:
          return v;
        case Dt:
          return Z;
        case Mt:
          return P;
        case Ut:
          return le;
      }
    return t;
  });
  function Vn(e) {
    var t = e.length, r = e.constructor(t);
    return t && typeof e[0] == "string" && G.call(e, "index") && (r.index = e.index, r.input = e.input), r;
  }
  function En(e) {
    return typeof e.constructor == "function" && !tt(e) ? cn(jt(e)) : {};
  }
  function $n(e, t, r, u) {
    var V = e.constructor;
    switch (t) {
      case ce:
        return Fe(e);
      case h:
      case l:
        return new V(+e);
      case R:
        return gn(e, u);
      case T:
      case N:
      case ee:
      case me:
      case pe:
      case H:
      case de:
      case we:
      case Pe:
        return Sn(e, u);
      case v:
        return vn(e, u, r);
      case B:
      case ue:
        return new V(e);
      case Q:
        return bn(e);
      case P:
        return yn(e, u, r);
      case ae:
        return _n(e);
    }
  }
  function On(e, t) {
    return t = t ?? o, !!t && (typeof e == "number" || vt.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  function Tn(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function jn(e) {
    return !!Re && Re in e;
  }
  function tt(e) {
    var t = e && e.constructor, r = typeof t == "function" && t.prototype || fe;
    return e === r;
  }
  function W(e) {
    if (e != null) {
      try {
        return ze.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  function Fn(e) {
    return je(e, !0, !0);
  }
  function nt(e, t) {
    return e === t || e !== e && t !== t;
  }
  function kn(e) {
    return xn(e) && G.call(e, "callee") && (!kt.call(e, "callee") || he.call(e) == a);
  }
  var ke = Array.isArray;
  function rt(e) {
    return e != null && Nn(e.length) && !ot(e);
  }
  function xn(e) {
    return Bn(e) && rt(e);
  }
  var In = It || Dn;
  function ot(e) {
    var t = be(e) ? he.call(e) : "";
    return t == m || t == C;
  }
  function Nn(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= o;
  }
  function be(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  function Bn(e) {
    return !!e && typeof e == "object";
  }
  function xe(e) {
    return rt(e) ? sn(e) : fn(e);
  }
  function Pn() {
    return [];
  }
  function Dn() {
    return !1;
  }
  n.exports = Fn;
})(Ae, Ae.exports);
var Wn = Ae.exports;
const pt = /* @__PURE__ */ Kn(Wn), qn = { class: "schema-label" }, Jn = ["innerHTML"], Xn = ["innerHTML"], Yn = /* @__PURE__ */ E({
  name: "SchemaFormItem",
  inheritAttrs: !1,
  __name: "SchemaFormItem",
  props: {
    model: { default: () => ({}) },
    options: { default: () => ({}) },
    col: { default: () => ({}) }
  },
  setup(n) {
    const s = n, c = [
      "input",
      "select",
      "radio",
      "datepicker",
      "cascader",
      "placeholder",
      "checkbox",
      "slider",
      "timeselect",
      "timepicker",
      "jsoneditor",
      "quill",
      "codemirror",
      "rate",
      "switch",
      "colorpicker",
      "tags",
      "progress"
    ], p = S(() => {
      var d;
      return (((d = s.col) == null ? void 0 : d.formItem) || {}).label || "";
    });
    function o(a = "") {
      return c.includes(a) ? "schema-form-" + a : a;
    }
    return (a, d) => {
      const h = y("el-icon"), l = y("el-tooltip"), i = y("el-form-item");
      return g(), _(i, w({
        prop: n.col.prop
      }, n.col.formItem, { class: "schema-form-item" }), ct({
        default: A(() => [
          n.col.frontHtml ? (g(), O("span", {
            key: 0,
            innerHTML: n.col.frontHtml
          }, null, 8, Jn)) : q("", !0),
          n.col.frontSlot ? J(a.$slots, n.col.frontSlot, { key: 1 }, void 0, !0) : q("", !0),
          (g(), _(Mn(o(n.col.type)), w({ ...n.col.attrs, ...a.$attrs }, {
            prop: n.col.prop,
            value: n.model[n.col.prop],
            "onUpdate:value": d[0] || (d[0] = (m) => n.model[n.col.prop] = m),
            modifier: n.col.modifier,
            dynamicAttrs: n.col.dynamicAttrs,
            onEvents: n.col.on,
            options: n.options[n.col.prop]
          }), null, 16, ["prop", "value", "modifier", "dynamicAttrs", "onEvents", "options"])),
          n.col.rearSlot ? J(a.$slots, n.col.rearSlot, { key: 2 }, void 0, !0) : q("", !0),
          n.col.rearHtml ? (g(), O("span", {
            key: 3,
            innerHTML: n.col.rearHtml
          }, null, 8, Xn)) : q("", !0)
        ]),
        _: 2
      }, [
        n.col.labelSlot ? {
          name: "label",
          fn: A(() => [
            J(a.$slots, n.col.labelSlot, {}, void 0, !0)
          ]),
          key: "0"
        } : n.col.labelTooltip ? {
          name: "label",
          fn: A(() => [
            mt("span", qn, X(p.value), 1),
            Ne(l, {
              content: n.col.labelTooltip
            }, {
              default: A(() => [
                Ne(h, null, {
                  default: A(() => [
                    Ne(f(zn))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          key: "1"
        } : void 0
      ]), 1040, ["prop"]);
    };
  }
}), dt = (n, s) => {
  const c = n.__vccOpts || n;
  for (const [p, o] of s)
    c[p] = o;
  return c;
}, Zn = /* @__PURE__ */ dt(Yn, [["__scopeId", "data-v-e0e6467b"]]), Qn = { class: "schema-form" }, er = /* @__PURE__ */ E({
  name: "SchemaForm",
  inheritAttrs: !1,
  __name: "SchemaForm",
  props: {
    layout: { default: () => ({}) },
    schema: {},
    model: {},
    options: { default: () => ({}) }
  },
  setup(n) {
    const s = n, c = S(() => {
      const p = pt(s.schema || []);
      return p.forEach((o) => {
        const a = o.filter((d) => !d.hide).length || 1;
        o.forEach((d) => {
          d.colGrid = d.colGrid || { span: Math.round(24 / a) };
        });
      }), p;
    });
    return (p, o) => {
      const a = y("el-col"), d = y("el-row");
      return g(), O("div", Qn, [
        (g(!0), O(L, null, Y(c.value, (h, l) => (g(), _(d, w({ class: "schema-form__row" }, { ref_for: !0 }, n.layout, { key: l }), {
          default: A(() => [
            (g(!0), O(L, null, Y(h, (i, m) => (g(), O(L, null, [
              i.hide ? q("", !0) : (g(), _(a, w({
                key: 0,
                ref_for: !0
              }, i.colGrid, { key: m }), {
                default: A(() => [
                  i.slot ? J(p.$slots, i.slot, { key: 0 }) : (g(), _(Zn, w({
                    key: 1,
                    ref_for: !0
                  }, { ...i.formItem, prop: i.prop, col: i, model: n.model, options: n.options, ...p.$attrs }), ct({ _: 2 }, [
                    i.labelSlot ? {
                      name: i.labelSlot,
                      fn: A(() => [
                        J(p.$slots, i.labelSlot)
                      ]),
                      key: "0"
                    } : void 0,
                    i.frontSlot ? {
                      name: i.frontSlot,
                      fn: A(() => [
                        J(p.$slots, i.frontSlot)
                      ]),
                      key: "1"
                    } : void 0,
                    i.rearSlot ? {
                      name: i.rearSlot,
                      fn: A(() => [
                        J(p.$slots, i.rearSlot)
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1040))
                ]),
                _: 2
              }, 1040))
            ], 64))), 256))
          ]),
          _: 2
        }, 1040))), 128))
      ]);
    };
  }
});
function ut(n, s) {
  if (s === "number") {
    const c = parseFloat(String(n));
    return isNaN(c) ? n : c;
  }
  return s === "trim" && typeof n == "string" ? n.trim() : n;
}
function k(n, s, c) {
  const p = Un(), o = Hn(), a = S(() => ((o == null ? void 0 : o.appContext.config.globalProperties.$globalParams) || {})[n] || {}), d = S({
    get() {
      return ut(s.value, s.modifier);
    },
    set(m) {
      c("update:value", ut(m, s.modifier));
    }
  }), h = S(() => ({
    ...a.value,
    ...p,
    ...s.dynamicAttrs || {}
  })), l = S(() => s.onEvents || {}), i = S(() => s.options || []);
  return {
    bindVal: d,
    attrsAll: h,
    onEvents: l,
    options: i
  };
}
const tr = /* @__PURE__ */ E({
  name: "SchemaFormInput",
  inheritAttrs: !1,
  __name: "SchemaFormInput",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d } = k("input", c, p);
    return (h, l) => {
      const i = y("el-input");
      return g(), _(i, w({
        modelValue: f(o),
        "onUpdate:modelValue": l[0] || (l[0] = (m) => I(o) ? o.value = m : null)
      }, f(a), x(f(d)), {
        onChange: l[1] || (l[1] = (m) => h.$emit("change", { prop: n.prop, value: m }))
      }), null, 16, ["modelValue"]);
    };
  }
}), nr = { key: 1 }, rr = /* @__PURE__ */ E({
  name: "SchemaFormSelect",
  inheritAttrs: !1,
  __name: "SchemaFormSelect",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d, options: h } = k("select", c, p), l = S(() => a.value.optionSides || ""), i = S(() => Array.isArray(l.value) && l.value.length >= 2);
    return (m, C) => {
      const v = y("el-option"), B = y("el-select");
      return g(), _(B, w({
        modelValue: f(o),
        "onUpdate:modelValue": C[0] || (C[0] = ($) => I(o) ? o.value = $ : null)
      }, f(a), x(f(d)), {
        onChange: C[1] || (C[1] = ($) => m.$emit("change", { prop: n.prop, value: $ }))
      }), {
        default: A(() => [
          (g(!0), O(L, null, Y(f(h), ($, Z) => (g(), _(v, {
            key: `${$.value}_${Z}`,
            label: $.label,
            value: $.value,
            disabled: $.disabled
          }, {
            default: A(() => [
              i.value ? (g(!0), O(L, { key: 0 }, Y(l.value, (Q, P) => (g(), O("span", {
                key: P,
                class: Gn(`side-${P}`)
              }, X($[Q]), 3))), 128)) : (g(), O("span", nr, X($.label), 1))
            ]),
            _: 2
          }, 1032, ["label", "value", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), or = /* @__PURE__ */ E({
  name: "SchemaFormRadio",
  inheritAttrs: !1,
  __name: "SchemaFormRadio",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d, options: h } = k("radio", c, p);
    return (l, i) => {
      const m = y("el-radio"), C = y("el-radio-group");
      return g(), _(C, w({
        modelValue: f(o),
        "onUpdate:modelValue": i[0] || (i[0] = (v) => I(o) ? o.value = v : null)
      }, f(a), x(f(d)), {
        onChange: i[1] || (i[1] = (v) => l.$emit("change", { prop: n.prop, value: v }))
      }), {
        default: A(() => [
          (g(!0), O(L, null, Y(f(h), (v, B) => (g(), _(m, {
            key: `${v.value}_${B}`,
            label: v.value,
            disabled: v.disabled
          }, {
            default: A(() => [
              Se(X(v.label), 1)
            ]),
            _: 2
          }, 1032, ["label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), ar = /* @__PURE__ */ E({
  name: "SchemaFormDatepicker",
  inheritAttrs: !1,
  __name: "SchemaFormDatepicker",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d } = k("datepicker", c, p);
    return (h, l) => {
      const i = y("el-date-picker");
      return g(), _(i, w({
        modelValue: f(o),
        "onUpdate:modelValue": l[0] || (l[0] = (m) => I(o) ? o.value = m : null)
      }, f(a), x(f(d)), {
        onChange: l[1] || (l[1] = (m) => h.$emit("change", { prop: n.prop, value: m }))
      }), null, 16, ["modelValue"]);
    };
  }
}), lr = /* @__PURE__ */ E({
  name: "SchemaFormCascader",
  inheritAttrs: !1,
  __name: "SchemaFormCascader",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d, options: h } = k("cascader", c, p);
    return (l, i) => {
      const m = y("el-cascader");
      return g(), _(m, w({
        modelValue: f(o),
        "onUpdate:modelValue": i[0] || (i[0] = (C) => I(o) ? o.value = C : null)
      }, f(a), x(f(d)), {
        options: f(h),
        onChange: i[1] || (i[1] = (C) => l.$emit("change", { prop: n.prop, value: C }))
      }), null, 16, ["modelValue", "options"]);
    };
  }
}), sr = { class: "schema-form--placeholder" }, ir = /* @__PURE__ */ E({
  name: "SchemaFormPlaceholder",
  __name: "SchemaFormPlaceholder",
  setup(n) {
    return (s, c) => (g(), O("div", sr, [...c[0] || (c[0] = [
      mt("span", null, "Empty Field", -1)
    ])]));
  }
}), ur = /* @__PURE__ */ E({
  name: "SchemaFormCheckbox",
  inheritAttrs: !1,
  __name: "SchemaFormCheckbox",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d, options: h } = k("checkbox", c, p);
    return (l, i) => {
      const m = y("el-checkbox"), C = y("el-checkbox-group");
      return g(), _(C, w({
        modelValue: f(o),
        "onUpdate:modelValue": i[0] || (i[0] = (v) => I(o) ? o.value = v : null)
      }, f(a), x(f(d)), {
        onChange: i[1] || (i[1] = (v) => l.$emit("change", { prop: n.prop, value: v }))
      }), {
        default: A(() => [
          (g(!0), O(L, null, Y(f(h), (v, B) => (g(), _(m, {
            key: `${v.label}_${B}`,
            label: v.value,
            disabled: v.disabled
          }, {
            default: A(() => [
              Se(X(v.label), 1)
            ]),
            _: 2
          }, 1032, ["label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), cr = /* @__PURE__ */ E({
  name: "SchemaFormSlider",
  inheritAttrs: !1,
  __name: "SchemaFormSlider",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d } = k("slider", c, p);
    return (h, l) => {
      const i = y("el-slider");
      return g(), _(i, w({
        modelValue: f(o),
        "onUpdate:modelValue": l[0] || (l[0] = (m) => I(o) ? o.value = m : null)
      }, f(a), x(f(d)), {
        onChange: l[1] || (l[1] = (m) => h.$emit("change", { prop: n.prop, value: m }))
      }), null, 16, ["modelValue"]);
    };
  }
}), mr = /* @__PURE__ */ E({
  name: "SchemaFormTimeselect",
  inheritAttrs: !1,
  __name: "SchemaFormTimeselect",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d } = k("timeselect", c, p);
    return (h, l) => {
      const i = y("el-time-select");
      return g(), _(i, w({
        modelValue: f(o),
        "onUpdate:modelValue": l[0] || (l[0] = (m) => I(o) ? o.value = m : null)
      }, f(a), x(f(d)), {
        onChange: l[1] || (l[1] = (m) => h.$emit("change", { prop: n.prop, value: m }))
      }), null, 16, ["modelValue"]);
    };
  }
}), pr = /* @__PURE__ */ E({
  name: "SchemaFormTimepicker",
  inheritAttrs: !1,
  __name: "SchemaFormTimepicker",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d } = k("timepicker", c, p);
    return (h, l) => {
      const i = y("el-time-picker");
      return g(), _(i, w({
        modelValue: f(o),
        "onUpdate:modelValue": l[0] || (l[0] = (m) => I(o) ? o.value = m : null)
      }, f(a), x(f(d)), {
        onChange: l[1] || (l[1] = (m) => h.$emit("change", { prop: n.prop, value: m }))
      }), null, 16, ["modelValue"]);
    };
  }
}), dr = /* @__PURE__ */ E({
  name: "SchemaFormRate",
  inheritAttrs: !1,
  __name: "SchemaFormRate",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d } = k("rate", c, p);
    return (h, l) => {
      const i = y("el-rate");
      return g(), _(i, w({
        modelValue: f(o),
        "onUpdate:modelValue": l[0] || (l[0] = (m) => I(o) ? o.value = m : null)
      }, f(a), x(f(d)), {
        onChange: l[1] || (l[1] = (m) => h.$emit("change", { prop: n.prop, value: m }))
      }), null, 16, ["modelValue"]);
    };
  }
}), fr = /* @__PURE__ */ E({
  name: "SchemaFormSwitch",
  inheritAttrs: !1,
  __name: "SchemaFormSwitch",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d } = k("switch", c, p);
    return (h, l) => {
      const i = y("el-switch");
      return g(), _(i, w({
        modelValue: f(o),
        "onUpdate:modelValue": l[0] || (l[0] = (m) => I(o) ? o.value = m : null)
      }, f(a), x(f(d)), {
        onChange: l[1] || (l[1] = (m) => h.$emit("change", { prop: n.prop, value: m }))
      }), null, 16, ["modelValue"]);
    };
  }
}), hr = /* @__PURE__ */ E({
  name: "SchemaFormColorpicker",
  inheritAttrs: !1,
  __name: "SchemaFormColorpicker",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d } = k("colorpicker", c, p);
    return (h, l) => {
      const i = y("el-color-picker");
      return g(), _(i, w({
        modelValue: f(o),
        "onUpdate:modelValue": l[0] || (l[0] = (m) => I(o) ? o.value = m : null)
      }, f(a), x(f(d)), {
        onChange: l[1] || (l[1] = (m) => h.$emit("change", { prop: n.prop, value: m }))
      }), null, 16, ["modelValue"]);
    };
  }
}), gr = { class: "schema-form-tag" }, vr = /* @__PURE__ */ E({
  name: "SchemaFormTags",
  inheritAttrs: !1,
  __name: "SchemaFormTags",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a } = k("tags", c, p), d = Be(!1), h = Be(""), l = Be(null), i = S(() => a.value["show-add"] ? !!a.value["show-add"] : !1), m = S(() => Object.prototype.hasOwnProperty.call(a.value, "closable") ? !!a.value.closable : !0), C = S(() => a.value.type ? String(a.value.type) : ""), v = S(() => a.value.hit ? !!a.value.hit : !1), B = S(() => a.value.size ? String(a.value.size) : ""), $ = S(() => a.value.effect ? String(a.value.effect) : "light"), Z = S(() => a.value.color ? String(a.value.color) : ""), Q = S(() => a.value["button-size"] ? String(a.value["button-size"]) : "small"), P = S(() => a.value["button-words"] ? String(a.value["button-words"]) : "+ New Tag"), ue = S(() => a.value["button-type"] ? String(a.value["button-type"]) : "");
    function ae() {
      return Array.isArray(o.value) ? [...o.value] : [];
    }
    function le(T) {
      const N = ae().filter((ee) => ee !== T);
      o.value = N, p("change", { prop: c.prop, value: N });
    }
    function ce() {
      d.value = !0, Rn(() => {
        var T, N;
        (N = (T = l.value) == null ? void 0 : T.focus) == null || N.call(T);
      });
    }
    function R() {
      const T = ae();
      h.value && T.push(h.value), d.value = !1, h.value = "", o.value = T, p("change", { prop: c.prop, value: T });
    }
    return (T, N) => {
      const ee = y("el-tag"), me = y("el-input"), pe = y("el-button");
      return g(), O("div", gr, [
        (g(!0), O(L, null, Y(f(o), (H, de) => (g(), _(ee, {
          key: `${H}_${de}`,
          type: C.value,
          hit: v.value,
          size: B.value,
          effect: $.value,
          color: Z.value,
          closable: m.value,
          "disable-transitions": !1,
          onClose: (we) => le(H)
        }, {
          default: A(() => [
            Se(X(H), 1)
          ]),
          _: 2
        }, 1032, ["type", "hit", "size", "effect", "color", "closable", "onClose"]))), 128)),
        i.value && d.value ? (g(), _(me, {
          key: 0,
          class: "input-new-tag",
          modelValue: h.value,
          "onUpdate:modelValue": N[0] || (N[0] = (H) => h.value = H),
          ref_key: "saveTagInput",
          ref: l,
          size: "small",
          onKeyup: Ln(R, ["enter"]),
          onBlur: R
        }, null, 8, ["modelValue"])) : q("", !0),
        i.value && !d.value ? (g(), _(pe, {
          key: 1,
          class: "button-new-tag",
          size: Q.value,
          type: ue.value,
          onClick: ce
        }, {
          default: A(() => [
            Se(X(P.value), 1)
          ]),
          _: 1
        }, 8, ["size", "type"])) : q("", !0)
      ]);
    };
  }
}), br = /* @__PURE__ */ E({
  name: "SchemaFormProgress",
  inheritAttrs: !1,
  __name: "SchemaFormProgress",
  props: {
    value: { type: [Number, String, Array, Object, Boolean, Date, null] },
    prop: {},
    modifier: {},
    dynamicAttrs: {},
    options: { default: () => [] },
    onEvents: { default: () => ({}) }
  },
  emits: ["update:value", "change"],
  setup(n, { emit: s }) {
    const c = n, p = s, { bindVal: o, attrsAll: a, onEvents: d } = k("progress", c, p);
    return (h, l) => {
      const i = y("el-progress");
      return g(), _(i, w({
        class: "schema-form-progress",
        percentage: f(o)
      }, f(a), x(f(d)), {
        onChange: l[0] || (l[0] = (m) => h.$emit("change", { prop: n.prop, value: m }))
      }), null, 16, ["percentage"]);
    };
  }
}), yr = /* @__PURE__ */ dt(br, [["__scopeId", "data-v-04423dbd"]]), wr = {
  props: {
    value: [Number, String, Array, Object, Boolean, Date],
    prop: String,
    modifier: String,
    dynamicAttrs: Object,
    options: Array,
    onEvents: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    bindVal: {
      get() {
        return this.formatVal(
          this.value
        );
      },
      set(n) {
        const s = this;
        s.$emit("update:value", s.formatVal(n));
      }
    },
    componentName() {
      return (this.$options.name || "").replace("SchemaForm", "").toLowerCase();
    },
    globalOptions() {
      const n = this;
      return (n.$globalParams || {})[n.componentName] || {};
    },
    attrsAll() {
      const n = this;
      return { ...n.globalOptions, ...n.$attrs, ...n.dynamicAttrs };
    }
  },
  methods: {
    formatVal(n) {
      const s = this;
      if (s.modifier === "number") {
        const c = parseFloat(String(n));
        return isNaN(c) ? n : c;
      }
      return s.modifier === "trim" && n ? n.trim() : n;
    }
  }
}, Cr = {
  props: {
    layout: {
      type: Object,
      default: () => ({})
    },
    schema: {
      type: Array,
      required: !0,
      validator(n) {
        return n.every((s) => Array.isArray(s) && s.length > 0);
      }
    },
    model: {
      type: Object,
      required: !0,
      default: () => ({})
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    formatedSchema() {
      const n = pt(this.schema);
      return n.forEach((s) => {
        const c = s.filter((p) => !p.hide).length || 1;
        s.forEach((p) => {
          p.colGrid = p.colGrid || { span: Math.round(24 / c) };
        });
      }), n;
    }
  }
}, _r = [
  er,
  tr,
  rr,
  or,
  ar,
  lr,
  ir,
  ur,
  cr,
  mr,
  dr,
  fr,
  hr,
  vr,
  yr,
  pr
];
function Vr(n, s = {}) {
  _r.forEach((c) => {
    n.component(c.name, c);
  }), n.config.globalProperties.$globalParams = s;
}
export {
  wr as FormMixin,
  Cr as LayoutMixin,
  er as SchemaForm,
  Zn as SchemaFormItem,
  Vr as default
};
