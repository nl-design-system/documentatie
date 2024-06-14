"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6953],
 {
  16953: (e, t, r) => {
   r.d(t, { cI: () => Fe });
   var s = r(75271),
    a = (e) => "checkbox" === e.type,
    i = (e) => e instanceof Date,
    n = (e) => null == e;
   const o = (e) => "object" == typeof e;
   var l = (e) => !n(e) && !Array.isArray(e) && o(e) && !i(e),
    u = (e) => (l(e) && e.target ? (a(e.target) ? e.target.checked : e.target.value) : e),
    d = (e, t) => e.has(((e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
    f = (e) => {
     const t = e.constructor && e.constructor.prototype;
     return l(t) && t.hasOwnProperty("isPrototypeOf");
    },
    c = "undefined" != typeof window && void 0 !== window.HTMLElement && "undefined" != typeof document;
   function y(e) {
    let t;
    const r = Array.isArray(e);
    if (e instanceof Date) t = new Date(e);
    else if (e instanceof Set) t = new Set(e);
    else {
     if ((c && (e instanceof Blob || e instanceof FileList)) || (!r && !l(e))) return e;
     if (((t = r ? [] : {}), r || f(e))) for (const r in e) e.hasOwnProperty(r) && (t[r] = y(e[r]));
     else t = e;
    }
    return t;
   }
   var m = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
    v = (e) => void 0 === e,
    h = (e, t, r) => {
     if (!t || !l(e)) return r;
     const s = m(t.split(/[,[\].]+?/)).reduce((e, t) => (n(e) ? e : e[t]), e);
     return v(s) || s === e ? (v(e[t]) ? r : e[t]) : s;
    },
    g = (e) => "boolean" == typeof e,
    p = (e) => /^\w*$/.test(e),
    b = (e) => m(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
    _ = (e, t, r) => {
     let s = -1;
     const a = p(t) ? [t] : b(t),
      i = a.length,
      n = i - 1;
     for (; ++s < i; ) {
      const t = a[s];
      let i = r;
      if (s !== n) {
       const r = e[t];
       i = l(r) || Array.isArray(r) ? r : isNaN(+a[s + 1]) ? {} : [];
      }
      if ("__proto__" === t) return;
      (e[t] = i), (e = e[t]);
     }
     return e;
    };
   const V = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
    A = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" },
    F = "max",
    w = "min",
    S = "maxLength",
    x = "minLength",
    D = "pattern",
    k = "required",
    E = "validate";
   s.createContext(null);
   var O = (e, t, r, s = !0) => {
     const a = { defaultValues: t._defaultValues };
     for (const i in e)
      Object.defineProperty(a, i, {
       get: () => {
        const a = i;
        return t._proxyFormState[a] !== A.all && (t._proxyFormState[a] = !s || A.all), r && (r[a] = !0), e[a];
       },
      });
     return a;
    },
    C = (e) => l(e) && !Object.keys(e).length,
    T = (e, t, r, s) => {
     r(e);
     const { name: a, ...i } = e;
     return C(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((e) => t[e] === (!s || A.all));
    },
    U = (e) => (Array.isArray(e) ? e : [e]);
   function L(e) {
    const t = s.useRef(e);
    (t.current = e),
     s.useEffect(() => {
      const r = !e.disabled && t.current.subject && t.current.subject.subscribe({ next: t.current.next });
      return () => {
       r && r.unsubscribe();
      };
     }, [e.disabled]);
   }
   var j = (e) => "string" == typeof e,
    B = (e, t, r, s, a) => (j(e) ? (s && t.watch.add(e), h(r, e, a)) : Array.isArray(e) ? e.map((e) => (s && t.watch.add(e), h(r, e))) : (s && (t.watchAll = !0), r));
   var N = (e, t, r, s, a) => (t ? { ...r[e], types: { ...(r[e] && r[e].types ? r[e].types : {}), [s]: a || !0 } } : {}),
    M = (e) => ({ isOnSubmit: !e || e === A.onSubmit, isOnBlur: e === A.onBlur, isOnChange: e === A.onChange, isOnAll: e === A.all, isOnTouch: e === A.onTouched }),
    q = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
   const I = (e, t, r, s) => {
    for (const a of r || Object.keys(e)) {
     const r = h(e, a);
     if (r) {
      const { _f: e, ...i } = r;
      if (e) {
       if (e.refs && e.refs[0] && t(e.refs[0], a) && !s) break;
       if (e.ref && t(e.ref, e.name) && !s) break;
       I(i, t);
      } else l(i) && I(i, t);
     }
    }
   };
   var P = (e, t, r) => {
     const s = m(h(e, r));
     return _(s, "root", t[r]), _(e, r, s), e;
    },
    R = (e) => "file" === e.type,
    H = (e) => "function" == typeof e,
    $ = (e) => {
     if (!c) return !1;
     const t = e ? e.ownerDocument : 0;
     return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
    },
    W = (e) => j(e),
    G = (e) => "radio" === e.type,
    z = (e) => e instanceof RegExp;
   const J = { value: !1, isValid: !1 },
    K = { value: !0, isValid: !0 };
   var Q = (e) => {
    if (Array.isArray(e)) {
     if (e.length > 1) {
      const t = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
      return { value: t, isValid: !!t.length };
     }
     return e[0].checked && !e[0].disabled ? (e[0].attributes && !v(e[0].attributes.value) ? (v(e[0].value) || "" === e[0].value ? K : { value: e[0].value, isValid: !0 }) : K) : J;
    }
    return J;
   };
   const X = { isValid: !1, value: null };
   var Y = (e) => (Array.isArray(e) ? e.reduce((e, t) => (t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : e), X) : X);
   function Z(e, t, r = "validate") {
    if (W(e) || (Array.isArray(e) && e.every(W)) || (g(e) && !e)) return { type: r, message: W(e) ? e : "", ref: t };
   }
   var ee = (e) => (l(e) && !z(e) ? e : { value: e, message: "" }),
    te = async (e, t, r, s, i) => {
     const { ref: o, refs: u, required: d, maxLength: f, minLength: c, min: y, max: m, pattern: p, validate: b, name: _, valueAsNumber: V, mount: A, disabled: O } = e._f,
      T = h(t, _);
     if (!A || O) return {};
     const U = u ? u[0] : o,
      L = (e) => {
       s && U.reportValidity && (U.setCustomValidity(g(e) ? "" : e || ""), U.reportValidity());
      },
      B = {},
      M = G(o),
      q = a(o),
      I = M || q,
      P = ((V || R(o)) && v(o.value) && v(T)) || ($(o) && "" === o.value) || "" === T || (Array.isArray(T) && !T.length),
      J = N.bind(null, _, r, B),
      K = (e, t, r, s = S, a = x) => {
       const i = e ? t : r;
       B[_] = { type: e ? s : a, message: i, ref: o, ...J(e ? s : a, i) };
      };
     if (i ? !Array.isArray(T) || !T.length : d && ((!I && (P || n(T))) || (g(T) && !T) || (q && !Q(u).isValid) || (M && !Y(u).isValid))) {
      const { value: e, message: t } = W(d) ? { value: !!d, message: d } : ee(d);
      if (e && ((B[_] = { type: k, message: t, ref: U, ...J(k, t) }), !r)) return L(t), B;
     }
     if (!(P || (n(y) && n(m)))) {
      let e, t;
      const s = ee(m),
       a = ee(y);
      if (n(T) || isNaN(T)) {
       const r = o.valueAsDate || new Date(T),
        i = (e) => new Date(new Date().toDateString() + " " + e),
        n = "time" == o.type,
        l = "week" == o.type;
       j(s.value) && T && (e = n ? i(T) > i(s.value) : l ? T > s.value : r > new Date(s.value)), j(a.value) && T && (t = n ? i(T) < i(a.value) : l ? T < a.value : r < new Date(a.value));
      } else {
       const r = o.valueAsNumber || (T ? +T : T);
       n(s.value) || (e = r > s.value), n(a.value) || (t = r < a.value);
      }
      if ((e || t) && (K(!!e, s.message, a.message, F, w), !r)) return L(B[_].message), B;
     }
     if ((f || c) && !P && (j(T) || (i && Array.isArray(T)))) {
      const e = ee(f),
       t = ee(c),
       s = !n(e.value) && T.length > +e.value,
       a = !n(t.value) && T.length < +t.value;
      if ((s || a) && (K(s, e.message, t.message), !r)) return L(B[_].message), B;
     }
     if (p && !P && j(T)) {
      const { value: e, message: t } = ee(p);
      if (z(e) && !T.match(e) && ((B[_] = { type: D, message: t, ref: o, ...J(D, t) }), !r)) return L(t), B;
     }
     if (b)
      if (H(b)) {
       const e = Z(await b(T, t), U);
       if (e && ((B[_] = { ...e, ...J(E, e.message) }), !r)) return L(e.message), B;
      } else if (l(b)) {
       let e = {};
       for (const s in b) {
        if (!C(e) && !r) break;
        const a = Z(await b[s](T, t), U, s);
        a && ((e = { ...a, ...J(s, a.message) }), L(a.message), r && (B[_] = e));
       }
       if (!C(e) && ((B[_] = { ref: U, ...e }), !r)) return B;
      }
     return L(!0), B;
    };
   function re(e, t) {
    const r = Array.isArray(t) ? t : p(t) ? [t] : b(t),
     s =
      1 === r.length
       ? e
       : (function (e, t) {
          const r = t.slice(0, -1).length;
          let s = 0;
          for (; s < r; ) e = v(e) ? s++ : e[t[s++]];
          return e;
         })(e, r),
     a = r.length - 1,
     i = r[a];
    return (
     s && delete s[i],
     0 !== a &&
      ((l(s) && C(s)) ||
       (Array.isArray(s) &&
        (function (e) {
         for (const t in e) if (e.hasOwnProperty(t) && !v(e[t])) return !1;
         return !0;
        })(s))) &&
      re(e, r.slice(0, -1)),
     e
    );
   }
   var se = () => {
     let e = [];
     return {
      get observers() {
       return e;
      },
      next: (t) => {
       for (const r of e) r.next && r.next(t);
      },
      subscribe: (t) => (
       e.push(t),
       {
        unsubscribe: () => {
         e = e.filter((e) => e !== t);
        },
       }
      ),
      unsubscribe: () => {
       e = [];
      },
     };
    },
    ae = (e) => n(e) || !o(e);
   function ie(e, t) {
    if (ae(e) || ae(t)) return e === t;
    if (i(e) && i(t)) return e.getTime() === t.getTime();
    const r = Object.keys(e),
     s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (const a of r) {
     const r = e[a];
     if (!s.includes(a)) return !1;
     if ("ref" !== a) {
      const e = t[a];
      if ((i(r) && i(e)) || (l(r) && l(e)) || (Array.isArray(r) && Array.isArray(e)) ? !ie(r, e) : r !== e) return !1;
     }
    }
    return !0;
   }
   var ne = (e) => "select-multiple" === e.type,
    oe = (e) => G(e) || a(e),
    le = (e) => $(e) && e.isConnected,
    ue = (e) => {
     for (const t in e) if (H(e[t])) return !0;
     return !1;
    };
   function de(e, t = {}) {
    const r = Array.isArray(e);
    if (l(e) || r) for (const s in e) Array.isArray(e[s]) || (l(e[s]) && !ue(e[s])) ? ((t[s] = Array.isArray(e[s]) ? [] : {}), de(e[s], t[s])) : n(e[s]) || (t[s] = !0);
    return t;
   }
   function fe(e, t, r) {
    const s = Array.isArray(e);
    if (l(e) || s) for (const a in e) Array.isArray(e[a]) || (l(e[a]) && !ue(e[a])) ? (v(t) || ae(r[a]) ? (r[a] = Array.isArray(e[a]) ? de(e[a], []) : { ...de(e[a]) }) : fe(e[a], n(t) ? {} : t[a], r[a])) : (r[a] = !ie(e[a], t[a]));
    return r;
   }
   var ce = (e, t) => fe(e, t, de(t)),
    ye = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: s }) => (v(e) ? e : t ? ("" === e ? NaN : e ? +e : e) : r && j(e) ? new Date(e) : s ? s(e) : e);
   function me(e) {
    const t = e.ref;
    if (!(e.refs ? e.refs.every((e) => e.disabled) : t.disabled)) return R(t) ? t.files : G(t) ? Y(e.refs).value : ne(t) ? [...t.selectedOptions].map(({ value: e }) => e) : a(t) ? Q(e.refs).value : ye(v(t.value) ? e.ref.value : t.value, e);
   }
   var ve = (e, t, r, s) => {
     const a = {};
     for (const i of e) {
      const e = h(t, i);
      e && _(a, i, e._f);
     }
     return { criteriaMode: r, names: [...e], fields: a, shouldUseNativeValidation: s };
    },
    he = (e) => (v(e) ? e : z(e) ? e.source : l(e) ? (z(e.value) ? e.value.source : e.value) : e),
    ge = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
   function pe(e, t, r) {
    const s = h(e, r);
    if (s || p(r)) return { error: s, name: r };
    const a = r.split(".");
    for (; a.length; ) {
     const s = a.join("."),
      i = h(t, s),
      n = h(e, s);
     if (i && !Array.isArray(i) && r !== s) return { name: r };
     if (n && n.type) return { name: s, error: n };
     a.pop();
    }
    return { name: r };
   }
   var be = (e, t, r, s, a) => !a.isOnAll && (!r && a.isOnTouch ? !(t || e) : (r ? s.isOnBlur : a.isOnBlur) ? !e : !(r ? s.isOnChange : a.isOnChange) || e),
    _e = (e, t) => !m(h(e, t)).length && re(e, t);
   const Ve = { mode: A.onSubmit, reValidateMode: A.onChange, shouldFocusError: !0 };
   function Ae(e = {}) {
    let t,
     r = { ...Ve, ...e },
     s = { submitCount: 0, isDirty: !1, isLoading: H(r.defaultValues), isValidating: !1, isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, touchedFields: {}, dirtyFields: {}, validatingFields: {}, errors: r.errors || {}, disabled: r.disabled || !1 },
     o = {},
     f = ((l(r.defaultValues) || l(r.values)) && y(r.defaultValues || r.values)) || {},
     p = r.shouldUnregister ? {} : y(f),
     b = { action: !1, mount: !1, watch: !1 },
     F = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
     w = 0;
    const S = { isDirty: !1, dirtyFields: !1, validatingFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 },
     x = { values: se(), array: se(), state: se() },
     D = M(r.mode),
     k = M(r.reValidateMode),
     E = r.criteriaMode === A.all,
     O = async (e) => {
      if (S.isValid || e) {
       const e = r.resolver ? C((await G()).errors) : await z(o, !0);
       e !== s.isValid && x.state.next({ isValid: e });
      }
     },
     T = (e, t) => {
      (S.isValidating || S.validatingFields) &&
       ((e || Array.from(F.mount)).forEach((e) => {
        e && (t ? _(s.validatingFields, e, t) : re(s.validatingFields, e));
       }),
       x.state.next({ validatingFields: s.validatingFields, isValidating: !C(s.validatingFields) }));
     },
     L = (e, t, r, s) => {
      const a = h(o, e);
      if (a) {
       const i = h(p, e, v(r) ? h(f, e) : r);
       v(i) || (s && s.defaultChecked) || t ? _(p, e, t ? i : me(a._f)) : Q(e, i), b.mount && O();
      }
     },
     N = (e, t, r, a, i) => {
      let n = !1,
       l = !1;
      const u = { name: e },
       d = !(!h(o, e) || !h(o, e)._f.disabled);
      if (!r || a) {
       S.isDirty && ((l = s.isDirty), (s.isDirty = u.isDirty = J()), (n = l !== u.isDirty));
       const r = d || ie(h(f, e), t);
       (l = !(d || !h(s.dirtyFields, e))), r || d ? re(s.dirtyFields, e) : _(s.dirtyFields, e, !0), (u.dirtyFields = s.dirtyFields), (n = n || (S.dirtyFields && l !== !r));
      }
      if (r) {
       const t = h(s.touchedFields, e);
       t || (_(s.touchedFields, e, r), (u.touchedFields = s.touchedFields), (n = n || (S.touchedFields && t !== r)));
      }
      return n && i && x.state.next(u), n ? u : {};
     },
     W = (r, a, i, n) => {
      const o = h(s.errors, r),
       l = S.isValid && g(a) && s.isValid !== a;
      var u;
      if (
       (e.delayError && i
        ? ((u = () =>
           ((e, t) => {
            _(s.errors, e, t), x.state.next({ errors: s.errors });
           })(r, i)),
          (t = (e) => {
           clearTimeout(w), (w = setTimeout(u, e));
          }),
          t(e.delayError))
        : (clearTimeout(w), (t = null), i ? _(s.errors, r, i) : re(s.errors, r)),
       (i ? !ie(o, i) : o) || !C(n) || l)
      ) {
       const e = { ...n, ...(l && g(a) ? { isValid: a } : {}), errors: s.errors, name: r };
       (s = { ...s, ...e }), x.state.next(e);
      }
     },
     G = async (e) => {
      T(e, !0);
      const t = await r.resolver(p, r.context, ve(e || F.mount, o, r.criteriaMode, r.shouldUseNativeValidation));
      return T(e), t;
     },
     z = async (e, t, a = { valid: !0 }) => {
      for (const i in e) {
       const n = e[i];
       if (n) {
        const { _f: e, ...o } = n;
        if (e) {
         const o = F.array.has(e.name);
         T([i], !0);
         const l = await te(n, p, E, r.shouldUseNativeValidation && !t, o);
         if ((T([i]), l[e.name] && ((a.valid = !1), t))) break;
         !t && (h(l, e.name) ? (o ? P(s.errors, l, e.name) : _(s.errors, e.name, l[e.name])) : re(s.errors, e.name));
        }
        o && (await z(o, t, a));
       }
      }
      return a.valid;
     },
     J = (e, t) => (e && t && _(p, e, t), !ie(de(), f)),
     K = (e, t, r) => B(e, F, { ...(b.mount ? p : v(t) ? f : j(e) ? { [e]: t } : t) }, r, t),
     Q = (e, t, r = {}) => {
      const s = h(o, e);
      let i = t;
      if (s) {
       const r = s._f;
       r && (!r.disabled && _(p, e, ye(t, r)), (i = $(r.ref) && n(t) ? "" : t), ne(r.ref) ? [...r.ref.options].forEach((e) => (e.selected = i.includes(e.value))) : r.refs ? (a(r.ref) ? (r.refs.length > 1 ? r.refs.forEach((e) => (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(i) ? !!i.find((t) => t === e.value) : i === e.value)) : r.refs[0] && (r.refs[0].checked = !!i)) : r.refs.forEach((e) => (e.checked = e.value === i))) : R(r.ref) ? (r.ref.value = "") : ((r.ref.value = i), r.ref.type || x.values.next({ name: e, values: { ...p } })));
      }
      (r.shouldDirty || r.shouldTouch) && N(e, i, r.shouldTouch, r.shouldDirty, !0), r.shouldValidate && ue(e);
     },
     X = (e, t, r) => {
      for (const s in t) {
       const a = t[s],
        n = `${e}.${s}`,
        l = h(o, n);
       (!F.array.has(e) && ae(a) && (!l || l._f)) || i(a) ? Q(n, a, r) : X(n, a, r);
      }
     },
     Y = (e, t, r = {}) => {
      const a = h(o, e),
       i = F.array.has(e),
       l = y(t);
      _(p, e, l), i ? (x.array.next({ name: e, values: { ...p } }), (S.isDirty || S.dirtyFields) && r.shouldDirty && x.state.next({ name: e, dirtyFields: ce(f, p), isDirty: J(e, l) })) : !a || a._f || n(l) ? Q(e, l, r) : X(e, l, r), q(e, F) && x.state.next({ ...s }), x.values.next({ name: b.mount ? e : void 0, values: { ...p } });
     },
     Z = async (e) => {
      b.mount = !0;
      const a = e.target;
      let i = a.name,
       n = !0;
      const l = h(o, i),
       d = (e) => {
        n = Number.isNaN(e) || e === h(p, i, e);
       };
      if (l) {
       let f, c;
       const y = a.type ? me(l._f) : u(e),
        m = e.type === V.BLUR || e.type === V.FOCUS_OUT,
        v = (!ge(l._f) && !r.resolver && !h(s.errors, i) && !l._f.deps) || be(m, h(s.touchedFields, i), s.isSubmitted, k, D),
        g = q(i, F, m);
       _(p, i, y), m ? (l._f.onBlur && l._f.onBlur(e), t && t(0)) : l._f.onChange && l._f.onChange(e);
       const b = N(i, y, m, !1),
        A = !C(b) || g;
       if ((!m && x.values.next({ name: i, type: e.type, values: { ...p } }), v)) return S.isValid && O(), A && x.state.next({ name: i, ...(g ? {} : b) });
       if ((!m && g && x.state.next({ ...s }), r.resolver)) {
        const { errors: e } = await G([i]);
        if ((d(y), n)) {
         const t = pe(s.errors, o, i),
          r = pe(e, o, t.name || i);
         (f = r.error), (i = r.name), (c = C(e));
        }
       } else T([i], !0), (f = (await te(l, p, E, r.shouldUseNativeValidation))[i]), T([i]), d(y), n && (f ? (c = !1) : S.isValid && (c = await z(o, !0)));
       n && (l._f.deps && ue(l._f.deps), W(i, c, f, b));
      }
     },
     ee = (e, t) => {
      if (h(s.errors, t) && e.focus) return e.focus(), 1;
     },
     ue = async (e, t = {}) => {
      let a, i;
      const n = U(e);
      if (r.resolver) {
       const t = await (async (e) => {
        const { errors: t } = await G(e);
        if (e)
         for (const r of e) {
          const e = h(t, r);
          e ? _(s.errors, r, e) : re(s.errors, r);
         }
        else s.errors = t;
        return t;
       })(v(e) ? e : n);
       (a = C(t)), (i = e ? !n.some((e) => h(t, e)) : a);
      } else
       e
        ? ((i = (
           await Promise.all(
            n.map(async (e) => {
             const t = h(o, e);
             return await z(t && t._f ? { [e]: t } : t);
            }),
           )
          ).every(Boolean)),
          (i || s.isValid) && O())
        : (i = a = await z(o));
      return x.state.next({ ...(!j(e) || (S.isValid && a !== s.isValid) ? {} : { name: e }), ...(r.resolver || !e ? { isValid: a } : {}), errors: s.errors }), t.shouldFocus && !i && I(o, ee, e ? n : F.mount), i;
     },
     de = (e) => {
      const t = { ...(b.mount ? p : f) };
      return v(e) ? t : j(e) ? h(t, e) : e.map((e) => h(t, e));
     },
     fe = (e, t) => ({ invalid: !!h((t || s).errors, e), isDirty: !!h((t || s).dirtyFields, e), isTouched: !!h((t || s).touchedFields, e), isValidating: !!h((t || s).validatingFields, e), error: h((t || s).errors, e) }),
     Ae = (e, t, r) => {
      const a = (h(o, e, { _f: {} })._f || {}).ref,
       i = h(s.errors, e) || {},
       { ref: n, message: l, type: u, ...d } = i;
      _(s.errors, e, { ...d, ...t, ref: a }), x.state.next({ name: e, errors: s.errors, isValid: !1 }), r && r.shouldFocus && a && a.focus && a.focus();
     },
     Fe = (e, t = {}) => {
      for (const a of e ? U(e) : F.mount) F.mount.delete(a), F.array.delete(a), t.keepValue || (re(o, a), re(p, a)), !t.keepError && re(s.errors, a), !t.keepDirty && re(s.dirtyFields, a), !t.keepTouched && re(s.touchedFields, a), !t.keepIsValidating && re(s.validatingFields, a), !r.shouldUnregister && !t.keepDefaultValue && re(f, a);
      x.values.next({ values: { ...p } }), x.state.next({ ...s, ...(t.keepDirty ? { isDirty: J() } : {}) }), !t.keepIsValid && O();
     },
     we = ({ disabled: e, name: t, field: r, fields: s, value: a }) => {
      if ((g(e) && b.mount) || e) {
       const i = e ? void 0 : v(a) ? me(r ? r._f : h(s, t)._f) : a;
       _(p, t, i), N(t, i, !1, !1, !0);
      }
     },
     Se = (e, t = {}) => {
      let s = h(o, e);
      const a = g(t.disabled);
      return (
       _(o, e, { ...(s || {}), _f: { ...(s && s._f ? s._f : { ref: { name: e } }), name: e, mount: !0, ...t } }),
       F.mount.add(e),
       s ? we({ field: s, disabled: t.disabled, name: e, value: t.value }) : L(e, !0, t.value),
       {
        ...(a ? { disabled: t.disabled } : {}),
        ...(r.progressive ? { required: !!t.required, min: he(t.min), max: he(t.max), minLength: he(t.minLength), maxLength: he(t.maxLength), pattern: he(t.pattern) } : {}),
        name: e,
        onChange: Z,
        onBlur: Z,
        ref: (a) => {
         if (a) {
          Se(e, t), (s = h(o, e));
          const r = (v(a.value) && a.querySelectorAll && a.querySelectorAll("input,select,textarea")[0]) || a,
           i = oe(r),
           n = s._f.refs || [];
          if (i ? n.find((e) => e === r) : r === s._f.ref) return;
          _(o, e, { _f: { ...s._f, ...(i ? { refs: [...n.filter(le), r, ...(Array.isArray(h(f, e)) ? [{}] : [])], ref: { type: r.type, name: e } } : { ref: r }) } }), L(e, !1, void 0, r);
         } else (s = h(o, e, {})), s._f && (s._f.mount = !1), (r.shouldUnregister || t.shouldUnregister) && (!d(F.array, e) || !b.action) && F.unMount.add(e);
        },
       }
      );
     },
     xe = () => r.shouldFocusError && I(o, ee, F.mount),
     De = (e, t) => async (a) => {
      let i;
      a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
      let n = y(p);
      if ((x.state.next({ isSubmitting: !0 }), r.resolver)) {
       const { errors: e, values: t } = await G();
       (s.errors = e), (n = t);
      } else await z(o);
      if ((re(s.errors, "root"), C(s.errors))) {
       x.state.next({ errors: {} });
       try {
        await e(n, a);
       } catch (l) {
        i = l;
       }
      } else t && (await t({ ...s.errors }, a)), xe(), setTimeout(xe);
      if ((x.state.next({ isSubmitted: !0, isSubmitting: !1, isSubmitSuccessful: C(s.errors) && !i, submitCount: s.submitCount + 1, errors: s.errors }), i)) throw i;
     },
     ke = (t, r = {}) => {
      const a = t ? y(t) : f,
       i = y(a),
       n = C(t),
       l = n ? f : i;
      if ((r.keepDefaultValues || (f = a), !r.keepValues)) {
       if (r.keepDirtyValues) for (const e of F.mount) h(s.dirtyFields, e) ? _(l, e, h(p, e)) : Y(e, h(l, e));
       else {
        if (c && v(t))
         for (const e of F.mount) {
          const t = h(o, e);
          if (t && t._f) {
           const e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
           if ($(e)) {
            const t = e.closest("form");
            if (t) {
             t.reset();
             break;
            }
           }
          }
         }
        o = {};
       }
       (p = e.shouldUnregister ? (r.keepDefaultValues ? y(f) : {}) : y(l)), x.array.next({ values: { ...l } }), x.values.next({ values: { ...l } });
      }
      (F = { mount: r.keepDirtyValues ? F.mount : new Set(), unMount: new Set(), array: new Set(), watch: new Set(), watchAll: !1, focus: "" }), (b.mount = !S.isValid || !!r.keepIsValid || !!r.keepDirtyValues), (b.watch = !!e.shouldUnregister), x.state.next({ submitCount: r.keepSubmitCount ? s.submitCount : 0, isDirty: !n && (r.keepDirty ? s.isDirty : !(!r.keepDefaultValues || ie(t, f))), isSubmitted: !!r.keepIsSubmitted && s.isSubmitted, dirtyFields: n ? [] : r.keepDirtyValues ? (r.keepDefaultValues && p ? ce(f, p) : s.dirtyFields) : r.keepDefaultValues && t ? ce(f, t) : {}, touchedFields: r.keepTouched ? s.touchedFields : {}, errors: r.keepErrors ? s.errors : {}, isSubmitSuccessful: !!r.keepIsSubmitSuccessful && s.isSubmitSuccessful, isSubmitting: !1 });
     },
     Ee = (e, t) => ke(H(e) ? e(p) : e, t);
    return {
     control: {
      register: Se,
      unregister: Fe,
      getFieldState: fe,
      handleSubmit: De,
      setError: Ae,
      _executeSchema: G,
      _getWatch: K,
      _getDirty: J,
      _updateValid: O,
      _removeUnmounted: () => {
       for (const e of F.unMount) {
        const t = h(o, e);
        t && (t._f.refs ? t._f.refs.every((e) => !le(e)) : !le(t._f.ref)) && Fe(e);
       }
       F.unMount = new Set();
      },
      _updateFieldArray: (e, t = [], r, a, i = !0, n = !0) => {
       if (a && r) {
        if (((b.action = !0), n && Array.isArray(h(o, e)))) {
         const t = r(h(o, e), a.argA, a.argB);
         i && _(o, e, t);
        }
        if (n && Array.isArray(h(s.errors, e))) {
         const t = r(h(s.errors, e), a.argA, a.argB);
         i && _(s.errors, e, t), _e(s.errors, e);
        }
        if (S.touchedFields && n && Array.isArray(h(s.touchedFields, e))) {
         const t = r(h(s.touchedFields, e), a.argA, a.argB);
         i && _(s.touchedFields, e, t);
        }
        S.dirtyFields && (s.dirtyFields = ce(f, p)), x.state.next({ name: e, isDirty: J(e, t), dirtyFields: s.dirtyFields, errors: s.errors, isValid: s.isValid });
       } else _(p, e, t);
      },
      _updateDisabledField: we,
      _getFieldArray: (t) => m(h(b.mount ? p : f, t, e.shouldUnregister ? h(f, t, []) : [])),
      _reset: ke,
      _resetDefaultValues: () =>
       H(r.defaultValues) &&
       r.defaultValues().then((e) => {
        Ee(e, r.resetOptions), x.state.next({ isLoading: !1 });
       }),
      _updateFormState: (e) => {
       s = { ...s, ...e };
      },
      _disableForm: (e) => {
       g(e) &&
        (x.state.next({ disabled: e }),
        I(
         o,
         (t, r) => {
          const s = h(o, r);
          s &&
           ((t.disabled = s._f.disabled || e),
           Array.isArray(s._f.refs) &&
            s._f.refs.forEach((t) => {
             t.disabled = s._f.disabled || e;
            }));
         },
         0,
         !1,
        ));
      },
      _subjects: x,
      _proxyFormState: S,
      _setErrors: (e) => {
       (s.errors = e), x.state.next({ errors: s.errors, isValid: !1 });
      },
      get _fields() {
       return o;
      },
      get _formValues() {
       return p;
      },
      get _state() {
       return b;
      },
      set _state(e) {
       b = e;
      },
      get _defaultValues() {
       return f;
      },
      get _names() {
       return F;
      },
      set _names(e) {
       F = e;
      },
      get _formState() {
       return s;
      },
      set _formState(e) {
       s = e;
      },
      get _options() {
       return r;
      },
      set _options(e) {
       r = { ...r, ...e };
      },
     },
     trigger: ue,
     register: Se,
     handleSubmit: De,
     watch: (e, t) => (H(e) ? x.values.subscribe({ next: (r) => e(K(void 0, t), r) }) : K(e, t, !0)),
     setValue: Y,
     getValues: de,
     reset: Ee,
     resetField: (e, t = {}) => {
      h(o, e) && (v(t.defaultValue) ? Y(e, y(h(f, e))) : (Y(e, t.defaultValue), _(f, e, y(t.defaultValue))), t.keepTouched || re(s.touchedFields, e), t.keepDirty || (re(s.dirtyFields, e), (s.isDirty = t.defaultValue ? J(e, y(h(f, e))) : J())), t.keepError || (re(s.errors, e), S.isValid && O()), x.state.next({ ...s }));
     },
     clearErrors: (e) => {
      e && U(e).forEach((e) => re(s.errors, e)), x.state.next({ errors: e ? s.errors : {} });
     },
     unregister: Fe,
     setError: Ae,
     setFocus: (e, t = {}) => {
      const r = h(o, e),
       s = r && r._f;
      if (s) {
       const e = s.refs ? s.refs[0] : s.ref;
       e.focus && (e.focus(), t.shouldSelect && e.select());
      }
     },
     getFieldState: fe,
    };
   }
   function Fe(e = {}) {
    const t = s.useRef(),
     r = s.useRef(),
     [a, i] = s.useState({ isDirty: !1, isValidating: !1, isLoading: H(e.defaultValues), isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, submitCount: 0, dirtyFields: {}, touchedFields: {}, validatingFields: {}, errors: e.errors || {}, disabled: e.disabled || !1, defaultValues: H(e.defaultValues) ? void 0 : e.defaultValues });
    t.current || (t.current = { ...Ae(e), formState: a });
    const n = t.current.control;
    return (
     (n._options = e),
     L({
      subject: n._subjects.state,
      next: (e) => {
       T(e, n._proxyFormState, n._updateFormState, !0) && i({ ...n._formState });
      },
     }),
     s.useEffect(() => n._disableForm(e.disabled), [n, e.disabled]),
     s.useEffect(() => {
      if (n._proxyFormState.isDirty) {
       const e = n._getDirty();
       e !== a.isDirty && n._subjects.state.next({ isDirty: e });
      }
     }, [n, a.isDirty]),
     s.useEffect(() => {
      e.values && !ie(e.values, r.current) ? (n._reset(e.values, n._options.resetOptions), (r.current = e.values), i((e) => ({ ...e }))) : n._resetDefaultValues();
     }, [e.values, n]),
     s.useEffect(() => {
      e.errors && n._setErrors(e.errors);
     }, [e.errors, n]),
     s.useEffect(() => {
      n._state.mount || (n._updateValid(), (n._state.mount = !0)), n._state.watch && ((n._state.watch = !1), n._subjects.state.next({ ...n._formState })), n._removeUnmounted();
     }),
     s.useEffect(() => {
      e.shouldUnregister && n._subjects.values.next({ values: n._getWatch() });
     }, [e.shouldUnregister, n]),
     (t.current.formState = O(a, n)),
     t.current
    );
   }
  },
 },
]);
