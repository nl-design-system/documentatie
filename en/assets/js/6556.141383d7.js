"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6556],
 {
  6556: (e, t, r) => {
   r.d(t, { cI: () => Fe });
   var s = r(50959),
    a = (e) => "checkbox" === e.type,
    i = (e) => e instanceof Date,
    n = (e) => null == e;
   const o = (e) => "object" == typeof e;
   var l = (e) => !n(e) && !Array.isArray(e) && o(e) && !i(e),
    u = (e) => (l(e) && e.target ? (a(e.target) ? e.target.checked : e.target.value) : e),
    d = (e, t) => e.has(((e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
    c = (e) => {
     const t = e.constructor && e.constructor.prototype;
     return l(t) && t.hasOwnProperty("isPrototypeOf");
    },
    f = "undefined" != typeof window && void 0 !== window.HTMLElement && "undefined" != typeof document;
   function y(e) {
    let t;
    const r = Array.isArray(e);
    if (e instanceof Date) t = new Date(e);
    else if (e instanceof Set) t = new Set(e);
    else {
     if ((f && (e instanceof Blob || e instanceof FileList)) || (!r && !l(e))) return e;
     if (((t = r ? [] : {}), r || c(e))) for (const r in e) e.hasOwnProperty(r) && (t[r] = y(e[r]));
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
    g = (e) => "boolean" == typeof e;
   const p = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
    b = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" },
    _ = "max",
    V = "min",
    A = "maxLength",
    F = "minLength",
    w = "pattern",
    S = "required",
    x = "validate";
   s.createContext(null);
   var D = (e, t, r, s = !0) => {
     const a = { defaultValues: t._defaultValues };
     for (const i in e)
      Object.defineProperty(a, i, {
       get: () => {
        const a = i;
        return t._proxyFormState[a] !== b.all && (t._proxyFormState[a] = !s || b.all), r && (r[a] = !0), e[a];
       },
      });
     return a;
    },
    k = (e) => l(e) && !Object.keys(e).length,
    O = (e, t, r, s) => {
     r(e);
     const { name: a, ...i } = e;
     return k(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((e) => t[e] === (!s || b.all));
    },
    E = (e) => (Array.isArray(e) ? e : [e]);
   function C(e) {
    const t = s.useRef(e);
    (t.current = e),
     s.useEffect(() => {
      const r = !e.disabled && t.current.subject && t.current.subject.subscribe({ next: t.current.next });
      return () => {
       r && r.unsubscribe();
      };
     }, [e.disabled]);
   }
   var T = (e) => "string" == typeof e,
    U = (e, t, r, s, a) => (T(e) ? (s && t.watch.add(e), h(r, e, a)) : Array.isArray(e) ? e.map((e) => (s && t.watch.add(e), h(r, e))) : (s && (t.watchAll = !0), r));
   var L = (e) => /^\w*$/.test(e),
    j = (e) => m(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
    B = (e, t, r) => {
     let s = -1;
     const a = L(t) ? [t] : j(t),
      i = a.length,
      n = i - 1;
     for (; ++s < i; ) {
      const t = a[s];
      let i = r;
      if (s !== n) {
       const r = e[t];
       i = l(r) || Array.isArray(r) ? r : isNaN(+a[s + 1]) ? {} : [];
      }
      (e[t] = i), (e = e[t]);
     }
     return e;
    };
   var N = (e, t, r, s, a) => (t ? { ...r[e], types: { ...(r[e] && r[e].types ? r[e].types : {}), [s]: a || !0 } } : {}),
    M = (e) => ({ isOnSubmit: !e || e === b.onSubmit, isOnBlur: e === b.onBlur, isOnChange: e === b.onChange, isOnAll: e === b.all, isOnTouch: e === b.onTouched }),
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
     return B(s, "root", t[r]), B(e, r, s), e;
    },
    R = (e) => "file" === e.type,
    H = (e) => "function" == typeof e,
    $ = (e) => {
     if (!f) return !1;
     const t = e ? e.ownerDocument : 0;
     return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
    },
    W = (e) => T(e),
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
     const { ref: o, refs: u, required: d, maxLength: c, minLength: f, min: y, max: m, pattern: p, validate: b, name: D, valueAsNumber: O, mount: E, disabled: C } = e._f,
      U = h(t, D);
     if (!E || C) return {};
     const L = u ? u[0] : o,
      j = (e) => {
       s && L.reportValidity && (L.setCustomValidity(g(e) ? "" : e || ""), L.reportValidity());
      },
      B = {},
      M = G(o),
      q = a(o),
      I = M || q,
      P = ((O || R(o)) && v(o.value) && v(U)) || ($(o) && "" === o.value) || "" === U || (Array.isArray(U) && !U.length),
      J = N.bind(null, D, r, B),
      K = (e, t, r, s = A, a = F) => {
       const i = e ? t : r;
       B[D] = { type: e ? s : a, message: i, ref: o, ...J(e ? s : a, i) };
      };
     if (i ? !Array.isArray(U) || !U.length : d && ((!I && (P || n(U))) || (g(U) && !U) || (q && !Q(u).isValid) || (M && !Y(u).isValid))) {
      const { value: e, message: t } = W(d) ? { value: !!d, message: d } : ee(d);
      if (e && ((B[D] = { type: S, message: t, ref: L, ...J(S, t) }), !r)) return j(t), B;
     }
     if (!(P || (n(y) && n(m)))) {
      let e, t;
      const s = ee(m),
       a = ee(y);
      if (n(U) || isNaN(U)) {
       const r = o.valueAsDate || new Date(U),
        i = (e) => new Date(new Date().toDateString() + " " + e),
        n = "time" == o.type,
        l = "week" == o.type;
       T(s.value) && U && (e = n ? i(U) > i(s.value) : l ? U > s.value : r > new Date(s.value)), T(a.value) && U && (t = n ? i(U) < i(a.value) : l ? U < a.value : r < new Date(a.value));
      } else {
       const r = o.valueAsNumber || (U ? +U : U);
       n(s.value) || (e = r > s.value), n(a.value) || (t = r < a.value);
      }
      if ((e || t) && (K(!!e, s.message, a.message, _, V), !r)) return j(B[D].message), B;
     }
     if ((c || f) && !P && (T(U) || (i && Array.isArray(U)))) {
      const e = ee(c),
       t = ee(f),
       s = !n(e.value) && U.length > +e.value,
       a = !n(t.value) && U.length < +t.value;
      if ((s || a) && (K(s, e.message, t.message), !r)) return j(B[D].message), B;
     }
     if (p && !P && T(U)) {
      const { value: e, message: t } = ee(p);
      if (z(e) && !U.match(e) && ((B[D] = { type: w, message: t, ref: o, ...J(w, t) }), !r)) return j(t), B;
     }
     if (b)
      if (H(b)) {
       const e = Z(await b(U, t), L);
       if (e && ((B[D] = { ...e, ...J(x, e.message) }), !r)) return j(e.message), B;
      } else if (l(b)) {
       let e = {};
       for (const s in b) {
        if (!k(e) && !r) break;
        const a = Z(await b[s](U, t), L, s);
        a && ((e = { ...a, ...J(s, a.message) }), j(a.message), r && (B[D] = e));
       }
       if (!k(e) && ((B[D] = { ref: L, ...e }), !r)) return B;
      }
     return j(!0), B;
    };
   function re(e, t) {
    const r = Array.isArray(t) ? t : L(t) ? [t] : j(t),
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
      ((l(s) && k(s)) ||
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
   function ce(e, t, r) {
    const s = Array.isArray(e);
    if (l(e) || s) for (const a in e) Array.isArray(e[a]) || (l(e[a]) && !ue(e[a])) ? (v(t) || ae(r[a]) ? (r[a] = Array.isArray(e[a]) ? de(e[a], []) : { ...de(e[a]) }) : ce(e[a], n(t) ? {} : t[a], r[a])) : (r[a] = !ie(e[a], t[a]));
    return r;
   }
   var fe = (e, t) => ce(e, t, de(t)),
    ye = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: s }) => (v(e) ? e : t ? ("" === e ? NaN : e ? +e : e) : r && T(e) ? new Date(e) : s ? s(e) : e);
   function me(e) {
    const t = e.ref;
    if (!(e.refs ? e.refs.every((e) => e.disabled) : t.disabled)) return R(t) ? t.files : G(t) ? Y(e.refs).value : ne(t) ? [...t.selectedOptions].map(({ value: e }) => e) : a(t) ? Q(e.refs).value : ye(v(t.value) ? e.ref.value : t.value, e);
   }
   var ve = (e, t, r, s) => {
     const a = {};
     for (const i of e) {
      const e = h(t, i);
      e && B(a, i, e._f);
     }
     return { criteriaMode: r, names: [...e], fields: a, shouldUseNativeValidation: s };
    },
    he = (e) => (v(e) ? e : z(e) ? e.source : l(e) ? (z(e.value) ? e.value.source : e.value) : e),
    ge = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
   function pe(e, t, r) {
    const s = h(e, r);
    if (s || L(r)) return { error: s, name: r };
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
   const Ve = { mode: b.onSubmit, reValidateMode: b.onChange, shouldFocusError: !0 };
   function Ae(e = {}) {
    let t,
     r = { ...Ve, ...e },
     s = { submitCount: 0, isDirty: !1, isLoading: H(r.defaultValues), isValidating: !1, isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, touchedFields: {}, dirtyFields: {}, validatingFields: {}, errors: r.errors || {}, disabled: r.disabled || !1 },
     o = {},
     c = ((l(r.defaultValues) || l(r.values)) && y(r.defaultValues || r.values)) || {},
     _ = r.shouldUnregister ? {} : y(c),
     V = { action: !1, mount: !1, watch: !1 },
     A = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
     F = 0;
    const w = { isDirty: !1, dirtyFields: !1, validatingFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 },
     S = { values: se(), array: se(), state: se() },
     x = M(r.mode),
     D = M(r.reValidateMode),
     O = r.criteriaMode === b.all,
     C = async (e) => {
      if (w.isValid || e) {
       const e = r.resolver ? k((await G()).errors) : await z(o, !0);
       e !== s.isValid && S.state.next({ isValid: e });
      }
     },
     L = (e, t) => {
      (w.isValidating || w.validatingFields) &&
       ((e || Array.from(A.mount)).forEach((e) => {
        e && (t ? B(s.validatingFields, e, t) : re(s.validatingFields, e));
       }),
       S.state.next({ validatingFields: s.validatingFields, isValidating: !k(s.validatingFields) }));
     },
     j = (e, t, r, s) => {
      const a = h(o, e);
      if (a) {
       const i = h(_, e, v(r) ? h(c, e) : r);
       v(i) || (s && s.defaultChecked) || t ? B(_, e, t ? i : me(a._f)) : Q(e, i), V.mount && C();
      }
     },
     N = (e, t, r, a, i) => {
      let n = !1,
       l = !1;
      const u = { name: e },
       d = !(!h(o, e) || !h(o, e)._f.disabled);
      if (!r || a) {
       w.isDirty && ((l = s.isDirty), (s.isDirty = u.isDirty = J()), (n = l !== u.isDirty));
       const r = d || ie(h(c, e), t);
       (l = !(d || !h(s.dirtyFields, e))), r || d ? re(s.dirtyFields, e) : B(s.dirtyFields, e, !0), (u.dirtyFields = s.dirtyFields), (n = n || (w.dirtyFields && l !== !r));
      }
      if (r) {
       const t = h(s.touchedFields, e);
       t || (B(s.touchedFields, e, r), (u.touchedFields = s.touchedFields), (n = n || (w.touchedFields && t !== r)));
      }
      return n && i && S.state.next(u), n ? u : {};
     },
     W = (r, a, i, n) => {
      const o = h(s.errors, r),
       l = w.isValid && g(a) && s.isValid !== a;
      var u;
      if (
       (e.delayError && i
        ? ((u = () =>
           ((e, t) => {
            B(s.errors, e, t), S.state.next({ errors: s.errors });
           })(r, i)),
          (t = (e) => {
           clearTimeout(F), (F = setTimeout(u, e));
          }),
          t(e.delayError))
        : (clearTimeout(F), (t = null), i ? B(s.errors, r, i) : re(s.errors, r)),
       (i ? !ie(o, i) : o) || !k(n) || l)
      ) {
       const e = { ...n, ...(l && g(a) ? { isValid: a } : {}), errors: s.errors, name: r };
       (s = { ...s, ...e }), S.state.next(e);
      }
     },
     G = async (e) => {
      L(e, !0);
      const t = await r.resolver(_, r.context, ve(e || A.mount, o, r.criteriaMode, r.shouldUseNativeValidation));
      return L(e), t;
     },
     z = async (e, t, a = { valid: !0 }) => {
      for (const i in e) {
       const n = e[i];
       if (n) {
        const { _f: e, ...o } = n;
        if (e) {
         const o = A.array.has(e.name);
         L([i], !0);
         const l = await te(n, _, O, r.shouldUseNativeValidation && !t, o);
         if ((L([i]), l[e.name] && ((a.valid = !1), t))) break;
         !t && (h(l, e.name) ? (o ? P(s.errors, l, e.name) : B(s.errors, e.name, l[e.name])) : re(s.errors, e.name));
        }
        o && (await z(o, t, a));
       }
      }
      return a.valid;
     },
     J = (e, t) => (e && t && B(_, e, t), !ie(de(), c)),
     K = (e, t, r) => U(e, A, { ...(V.mount ? _ : v(t) ? c : T(e) ? { [e]: t } : t) }, r, t),
     Q = (e, t, r = {}) => {
      const s = h(o, e);
      let i = t;
      if (s) {
       const r = s._f;
       r && (!r.disabled && B(_, e, ye(t, r)), (i = $(r.ref) && n(t) ? "" : t), ne(r.ref) ? [...r.ref.options].forEach((e) => (e.selected = i.includes(e.value))) : r.refs ? (a(r.ref) ? (r.refs.length > 1 ? r.refs.forEach((e) => (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(i) ? !!i.find((t) => t === e.value) : i === e.value)) : r.refs[0] && (r.refs[0].checked = !!i)) : r.refs.forEach((e) => (e.checked = e.value === i))) : R(r.ref) ? (r.ref.value = "") : ((r.ref.value = i), r.ref.type || S.values.next({ name: e, values: { ..._ } })));
      }
      (r.shouldDirty || r.shouldTouch) && N(e, i, r.shouldTouch, r.shouldDirty, !0), r.shouldValidate && ue(e);
     },
     X = (e, t, r) => {
      for (const s in t) {
       const a = t[s],
        n = `${e}.${s}`,
        l = h(o, n);
       (!A.array.has(e) && ae(a) && (!l || l._f)) || i(a) ? Q(n, a, r) : X(n, a, r);
      }
     },
     Y = (e, t, r = {}) => {
      const a = h(o, e),
       i = A.array.has(e),
       l = y(t);
      B(_, e, l), i ? (S.array.next({ name: e, values: { ..._ } }), (w.isDirty || w.dirtyFields) && r.shouldDirty && S.state.next({ name: e, dirtyFields: fe(c, _), isDirty: J(e, l) })) : !a || a._f || n(l) ? Q(e, l, r) : X(e, l, r), q(e, A) && S.state.next({ ...s }), S.values.next({ name: V.mount ? e : void 0, values: { ..._ } });
     },
     Z = async (e) => {
      const a = e.target;
      let i = a.name,
       n = !0;
      const l = h(o, i),
       d = (e) => {
        n = Number.isNaN(e) || e === h(_, i, e);
       };
      if (l) {
       let c, f;
       const y = a.type ? me(l._f) : u(e),
        m = e.type === p.BLUR || e.type === p.FOCUS_OUT,
        v = (!ge(l._f) && !r.resolver && !h(s.errors, i) && !l._f.deps) || be(m, h(s.touchedFields, i), s.isSubmitted, D, x),
        g = q(i, A, m);
       B(_, i, y), m ? (l._f.onBlur && l._f.onBlur(e), t && t(0)) : l._f.onChange && l._f.onChange(e);
       const b = N(i, y, m, !1),
        V = !k(b) || g;
       if ((!m && S.values.next({ name: i, type: e.type, values: { ..._ } }), v)) return w.isValid && C(), V && S.state.next({ name: i, ...(g ? {} : b) });
       if ((!m && g && S.state.next({ ...s }), r.resolver)) {
        const { errors: e } = await G([i]);
        if ((d(y), n)) {
         const t = pe(s.errors, o, i),
          r = pe(e, o, t.name || i);
         (c = r.error), (i = r.name), (f = k(e));
        }
       } else L([i], !0), (c = (await te(l, _, O, r.shouldUseNativeValidation))[i]), L([i]), d(y), n && (c ? (f = !1) : w.isValid && (f = await z(o, !0)));
       n && (l._f.deps && ue(l._f.deps), W(i, f, c, b));
      }
     },
     ee = (e, t) => {
      if (h(s.errors, t) && e.focus) return e.focus(), 1;
     },
     ue = async (e, t = {}) => {
      let a, i;
      const n = E(e);
      if (r.resolver) {
       const t = await (async (e) => {
        const { errors: t } = await G(e);
        if (e)
         for (const r of e) {
          const e = h(t, r);
          e ? B(s.errors, r, e) : re(s.errors, r);
         }
        else s.errors = t;
        return t;
       })(v(e) ? e : n);
       (a = k(t)), (i = e ? !n.some((e) => h(t, e)) : a);
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
          (i || s.isValid) && C())
        : (i = a = await z(o));
      return S.state.next({ ...(!T(e) || (w.isValid && a !== s.isValid) ? {} : { name: e }), ...(r.resolver || !e ? { isValid: a } : {}), errors: s.errors }), t.shouldFocus && !i && I(o, ee, e ? n : A.mount), i;
     },
     de = (e) => {
      const t = { ...c, ...(V.mount ? _ : {}) };
      return v(e) ? t : T(e) ? h(t, e) : e.map((e) => h(t, e));
     },
     ce = (e, t) => ({ invalid: !!h((t || s).errors, e), isDirty: !!h((t || s).dirtyFields, e), isTouched: !!h((t || s).touchedFields, e), isValidating: !!h((t || s).validatingFields, e), error: h((t || s).errors, e) }),
     Ae = (e, t, r) => {
      const a = (h(o, e, { _f: {} })._f || {}).ref;
      B(s.errors, e, { ...t, ref: a }), S.state.next({ name: e, errors: s.errors, isValid: !1 }), r && r.shouldFocus && a && a.focus && a.focus();
     },
     Fe = (e, t = {}) => {
      for (const a of e ? E(e) : A.mount) A.mount.delete(a), A.array.delete(a), t.keepValue || (re(o, a), re(_, a)), !t.keepError && re(s.errors, a), !t.keepDirty && re(s.dirtyFields, a), !t.keepTouched && re(s.touchedFields, a), !t.keepIsValidating && re(s.validatingFields, a), !r.shouldUnregister && !t.keepDefaultValue && re(c, a);
      S.values.next({ values: { ..._ } }), S.state.next({ ...s, ...(t.keepDirty ? { isDirty: J() } : {}) }), !t.keepIsValid && C();
     },
     we = ({ disabled: e, name: t, field: r, fields: s, value: a }) => {
      if (g(e)) {
       const i = e ? void 0 : v(a) ? me(r ? r._f : h(s, t)._f) : a;
       B(_, t, i), N(t, i, !1, !1, !0);
      }
     },
     Se = (e, t = {}) => {
      let s = h(o, e);
      const a = g(t.disabled);
      return (
       B(o, e, { ...(s || {}), _f: { ...(s && s._f ? s._f : { ref: { name: e } }), name: e, mount: !0, ...t } }),
       A.mount.add(e),
       s ? we({ field: s, disabled: t.disabled, name: e, value: t.value }) : j(e, !0, t.value),
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
          B(o, e, { _f: { ...s._f, ...(i ? { refs: [...n.filter(le), r, ...(Array.isArray(h(c, e)) ? [{}] : [])], ref: { type: r.type, name: e } } : { ref: r }) } }), j(e, !1, void 0, r);
         } else (s = h(o, e, {})), s._f && (s._f.mount = !1), (r.shouldUnregister || t.shouldUnregister) && (!d(A.array, e) || !V.action) && A.unMount.add(e);
        },
       }
      );
     },
     xe = () => r.shouldFocusError && I(o, ee, A.mount),
     De = (e, t) => async (a) => {
      let i;
      a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
      let n = y(_);
      if ((S.state.next({ isSubmitting: !0 }), r.resolver)) {
       const { errors: e, values: t } = await G();
       (s.errors = e), (n = t);
      } else await z(o);
      if ((re(s.errors, "root"), k(s.errors))) {
       S.state.next({ errors: {} });
       try {
        await e(n, a);
       } catch (l) {
        i = l;
       }
      } else t && (await t({ ...s.errors }, a)), xe(), setTimeout(xe);
      if ((S.state.next({ isSubmitted: !0, isSubmitting: !1, isSubmitSuccessful: k(s.errors) && !i, submitCount: s.submitCount + 1, errors: s.errors }), i)) throw i;
     },
     ke = (t, r = {}) => {
      const a = t ? y(t) : c,
       i = y(a),
       n = k(t),
       l = n ? c : i;
      if ((r.keepDefaultValues || (c = a), !r.keepValues)) {
       if (r.keepDirtyValues) for (const e of A.mount) h(s.dirtyFields, e) ? B(l, e, h(_, e)) : Y(e, h(l, e));
       else {
        if (f && v(t))
         for (const e of A.mount) {
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
       (_ = e.shouldUnregister ? (r.keepDefaultValues ? y(c) : {}) : y(l)), S.array.next({ values: { ...l } }), S.values.next({ values: { ...l } });
      }
      (A = { mount: r.keepDirtyValues ? A.mount : new Set(), unMount: new Set(), array: new Set(), watch: new Set(), watchAll: !1, focus: "" }), (V.mount = !w.isValid || !!r.keepIsValid || !!r.keepDirtyValues), (V.watch = !!e.shouldUnregister), S.state.next({ submitCount: r.keepSubmitCount ? s.submitCount : 0, isDirty: !n && (r.keepDirty ? s.isDirty : !(!r.keepDefaultValues || ie(t, c))), isSubmitted: !!r.keepIsSubmitted && s.isSubmitted, dirtyFields: n ? [] : r.keepDirtyValues ? (r.keepDefaultValues && _ ? fe(c, _) : s.dirtyFields) : r.keepDefaultValues && t ? fe(c, t) : {}, touchedFields: r.keepTouched ? s.touchedFields : {}, errors: r.keepErrors ? s.errors : {}, isSubmitSuccessful: !!r.keepIsSubmitSuccessful && s.isSubmitSuccessful, isSubmitting: !1 });
     },
     Oe = (e, t) => ke(H(e) ? e(_) : e, t);
    return {
     control: {
      register: Se,
      unregister: Fe,
      getFieldState: ce,
      handleSubmit: De,
      setError: Ae,
      _executeSchema: G,
      _getWatch: K,
      _getDirty: J,
      _updateValid: C,
      _removeUnmounted: () => {
       for (const e of A.unMount) {
        const t = h(o, e);
        t && (t._f.refs ? t._f.refs.every((e) => !le(e)) : !le(t._f.ref)) && Fe(e);
       }
       A.unMount = new Set();
      },
      _updateFieldArray: (e, t = [], r, a, i = !0, n = !0) => {
       if (a && r) {
        if (((V.action = !0), n && Array.isArray(h(o, e)))) {
         const t = r(h(o, e), a.argA, a.argB);
         i && B(o, e, t);
        }
        if (n && Array.isArray(h(s.errors, e))) {
         const t = r(h(s.errors, e), a.argA, a.argB);
         i && B(s.errors, e, t), _e(s.errors, e);
        }
        if (w.touchedFields && n && Array.isArray(h(s.touchedFields, e))) {
         const t = r(h(s.touchedFields, e), a.argA, a.argB);
         i && B(s.touchedFields, e, t);
        }
        w.dirtyFields && (s.dirtyFields = fe(c, _)), S.state.next({ name: e, isDirty: J(e, t), dirtyFields: s.dirtyFields, errors: s.errors, isValid: s.isValid });
       } else B(_, e, t);
      },
      _updateDisabledField: we,
      _getFieldArray: (t) => m(h(V.mount ? _ : c, t, e.shouldUnregister ? h(c, t, []) : [])),
      _reset: ke,
      _resetDefaultValues: () =>
       H(r.defaultValues) &&
       r.defaultValues().then((e) => {
        Oe(e, r.resetOptions), S.state.next({ isLoading: !1 });
       }),
      _updateFormState: (e) => {
       s = { ...s, ...e };
      },
      _disableForm: (e) => {
       g(e) &&
        (S.state.next({ disabled: e }),
        I(
         o,
         (t, r) => {
          let s = e;
          const a = h(o, r);
          a && g(a._f.disabled) && (s || (s = a._f.disabled)), (t.disabled = s);
         },
         0,
         !1,
        ));
      },
      _subjects: S,
      _proxyFormState: w,
      _setErrors: (e) => {
       (s.errors = e), S.state.next({ errors: s.errors, isValid: !1 });
      },
      get _fields() {
       return o;
      },
      get _formValues() {
       return _;
      },
      get _state() {
       return V;
      },
      set _state(e) {
       V = e;
      },
      get _defaultValues() {
       return c;
      },
      get _names() {
       return A;
      },
      set _names(e) {
       A = e;
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
     watch: (e, t) => (H(e) ? S.values.subscribe({ next: (r) => e(K(void 0, t), r) }) : K(e, t, !0)),
     setValue: Y,
     getValues: de,
     reset: Oe,
     resetField: (e, t = {}) => {
      h(o, e) && (v(t.defaultValue) ? Y(e, y(h(c, e))) : (Y(e, t.defaultValue), B(c, e, y(t.defaultValue))), t.keepTouched || re(s.touchedFields, e), t.keepDirty || (re(s.dirtyFields, e), (s.isDirty = t.defaultValue ? J(e, y(h(c, e))) : J())), t.keepError || (re(s.errors, e), w.isValid && C()), S.state.next({ ...s }));
     },
     clearErrors: (e) => {
      e && E(e).forEach((e) => re(s.errors, e)), S.state.next({ errors: e ? s.errors : {} });
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
     getFieldState: ce,
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
     C({
      subject: n._subjects.state,
      next: (e) => {
       O(e, n._proxyFormState, n._updateFormState, !0) && i({ ...n._formState });
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
     (t.current.formState = D(a, n)),
     t.current
    );
   }
  },
 },
]);
