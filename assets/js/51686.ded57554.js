'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [51686],
 {
  51686: (e, t, r) => {
   r.d(t, { cI: () => Se });
   var s = r(75271),
    a = (e) => 'checkbox' === e.type,
    i = (e) => e instanceof Date,
    n = (e) => null == e;
   const o = (e) => 'object' == typeof e;
   var l = (e) => !n(e) && !Array.isArray(e) && o(e) && !i(e),
    u = (e) => (l(e) && e.target ? (a(e.target) ? e.target.checked : e.target.value) : e),
    d = (e, t) => e.has(((e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
    c = (e) => {
     const t = e.constructor && e.constructor.prototype;
     return l(t) && t.hasOwnProperty('isPrototypeOf');
    },
    f = 'undefined' != typeof window && void 0 !== window.HTMLElement && 'undefined' != typeof document;
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
    g = (e) => 'boolean' == typeof e,
    b = (e) => /^\w*$/.test(e),
    p = (e) => m(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
    _ = (e, t, r) => {
     let s = -1;
     const a = b(t) ? [t] : p(t),
      i = a.length,
      n = i - 1;
     for (; ++s < i; ) {
      const t = a[s];
      let i = r;
      if (s !== n) {
       const r = e[t];
       i = l(r) || Array.isArray(r) ? r : isNaN(+a[s + 1]) ? {} : [];
      }
      if ('__proto__' === t) return;
      (e[t] = i), (e = e[t]);
     }
     return e;
    };
   const V = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
    A = { onBlur: 'onBlur', onChange: 'onChange', onSubmit: 'onSubmit', onTouched: 'onTouched', all: 'all' },
    F = 'max',
    w = 'min',
    S = 'maxLength',
    x = 'minLength',
    D = 'pattern',
    k = 'required',
    O = 'validate';
   s.createContext(null);
   var E = (e, t, r, s = !0) => {
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
   function j(e) {
    const t = s.useRef(e);
    (t.current = e),
     s.useEffect(() => {
      const r = !e.disabled && t.current.subject && t.current.subject.subscribe({ next: t.current.next });
      return () => {
       r && r.unsubscribe();
      };
     }, [e.disabled]);
   }
   var L = (e) => 'string' == typeof e,
    B = (e, t, r, s, a) => (L(e) ? (s && t.watch.add(e), h(r, e, a)) : Array.isArray(e) ? e.map((e) => (s && t.watch.add(e), h(r, e))) : (s && (t.watchAll = !0), r));
   var N = (e, t, r, s, a) => (t ? { ...r[e], types: { ...(r[e] && r[e].types ? r[e].types : {}), [s]: a || !0 } } : {}),
    M = (e) => ({ isOnSubmit: !e || e === A.onSubmit, isOnBlur: e === A.onBlur, isOnChange: e === A.onChange, isOnAll: e === A.all, isOnTouch: e === A.onTouched }),
    q = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
   const I = (e, t, r, s) => {
    for (const a of r || Object.keys(e)) {
     const r = h(e, a);
     if (r) {
      const { _f: e, ...i } = r;
      if (e) {
       if (e.refs && e.refs[0] && t(e.refs[0], a) && !s) return !0;
       if (e.ref && t(e.ref, e.name) && !s) return !0;
       if (I(i, t)) break;
      } else if (l(i) && I(i, t)) break;
     }
    }
   };
   var P = (e, t, r) => {
     const s = U(h(e, r));
     return _(s, 'root', t[r]), _(e, r, s), e;
    },
    R = (e) => 'file' === e.type,
    H = (e) => 'function' == typeof e,
    $ = (e) => {
     if (!f) return !1;
     const t = e ? e.ownerDocument : 0;
     return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
    },
    W = (e) => L(e),
    G = (e) => 'radio' === e.type,
    z = (e) => e instanceof RegExp;
   const J = { value: !1, isValid: !1 },
    K = { value: !0, isValid: !0 };
   var Q = (e) => {
    if (Array.isArray(e)) {
     if (e.length > 1) {
      const t = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
      return { value: t, isValid: !!t.length };
     }
     return e[0].checked && !e[0].disabled ? (e[0].attributes && !v(e[0].attributes.value) ? (v(e[0].value) || '' === e[0].value ? K : { value: e[0].value, isValid: !0 }) : K) : J;
    }
    return J;
   };
   const X = { isValid: !1, value: null };
   var Y = (e) => (Array.isArray(e) ? e.reduce((e, t) => (t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : e), X) : X);
   function Z(e, t, r = 'validate') {
    if (W(e) || (Array.isArray(e) && e.every(W)) || (g(e) && !e)) return { type: r, message: W(e) ? e : '', ref: t };
   }
   var ee = (e) => (l(e) && !z(e) ? e : { value: e, message: '' }),
    te = async (e, t, r, s, i) => {
     const { ref: o, refs: u, required: d, maxLength: c, minLength: f, min: y, max: m, pattern: b, validate: p, name: _, valueAsNumber: V, mount: A, disabled: E } = e._f,
      T = h(t, _);
     if (!A || E) return {};
     const U = u ? u[0] : o,
      j = (e) => {
       s && U.reportValidity && (U.setCustomValidity(g(e) ? '' : e || ''), U.reportValidity());
      },
      B = {},
      M = G(o),
      q = a(o),
      I = M || q,
      P = ((V || R(o)) && v(o.value) && v(T)) || ($(o) && '' === o.value) || '' === T || (Array.isArray(T) && !T.length),
      J = N.bind(null, _, r, B),
      K = (e, t, r, s = S, a = x) => {
       const i = e ? t : r;
       B[_] = { type: e ? s : a, message: i, ref: o, ...J(e ? s : a, i) };
      };
     if (i ? !Array.isArray(T) || !T.length : d && ((!I && (P || n(T))) || (g(T) && !T) || (q && !Q(u).isValid) || (M && !Y(u).isValid))) {
      const { value: e, message: t } = W(d) ? { value: !!d, message: d } : ee(d);
      if (e && ((B[_] = { type: k, message: t, ref: U, ...J(k, t) }), !r)) return j(t), B;
     }
     if (!(P || (n(y) && n(m)))) {
      let e, t;
      const s = ee(m),
       a = ee(y);
      if (n(T) || isNaN(T)) {
       const r = o.valueAsDate || new Date(T),
        i = (e) => new Date(new Date().toDateString() + ' ' + e),
        n = 'time' == o.type,
        l = 'week' == o.type;
       L(s.value) && T && (e = n ? i(T) > i(s.value) : l ? T > s.value : r > new Date(s.value)), L(a.value) && T && (t = n ? i(T) < i(a.value) : l ? T < a.value : r < new Date(a.value));
      } else {
       const r = o.valueAsNumber || (T ? +T : T);
       n(s.value) || (e = r > s.value), n(a.value) || (t = r < a.value);
      }
      if ((e || t) && (K(!!e, s.message, a.message, F, w), !r)) return j(B[_].message), B;
     }
     if ((c || f) && !P && (L(T) || (i && Array.isArray(T)))) {
      const e = ee(c),
       t = ee(f),
       s = !n(e.value) && T.length > +e.value,
       a = !n(t.value) && T.length < +t.value;
      if ((s || a) && (K(s, e.message, t.message), !r)) return j(B[_].message), B;
     }
     if (b && !P && L(T)) {
      const { value: e, message: t } = ee(b);
      if (z(e) && !T.match(e) && ((B[_] = { type: D, message: t, ref: o, ...J(D, t) }), !r)) return j(t), B;
     }
     if (p)
      if (H(p)) {
       const e = Z(await p(T, t), U);
       if (e && ((B[_] = { ...e, ...J(O, e.message) }), !r)) return j(e.message), B;
      } else if (l(p)) {
       let e = {};
       for (const s in p) {
        if (!C(e) && !r) break;
        const a = Z(await p[s](T, t), U, s);
        a && ((e = { ...a, ...J(s, a.message) }), j(a.message), r && (B[_] = e));
       }
       if (!C(e) && ((B[_] = { ref: U, ...e }), !r)) return B;
      }
     return j(!0), B;
    };
   function re(e, t) {
    const r = Array.isArray(t) ? t : b(t) ? [t] : p(t),
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
     if ('ref' !== a) {
      const e = t[a];
      if ((i(r) && i(e)) || (l(r) && l(e)) || (Array.isArray(r) && Array.isArray(e)) ? !ie(r, e) : r !== e) return !1;
     }
    }
    return !0;
   }
   var ne = (e) => 'select-multiple' === e.type,
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
    ye = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: s }) => (v(e) ? e : t ? ('' === e ? NaN : e ? +e : e) : r && L(e) ? new Date(e) : s ? s(e) : e);
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
    he = (e) => (v(e) ? e : z(e) ? e.source : l(e) ? (z(e.value) ? e.value.source : e.value) : e);
   const ge = 'AsyncFunction';
   var be = (e) => !((e && e.validate) || !((H(e.validate) && e.validate.constructor.name === ge) || (l(e.validate) && Object.values(e.validate).find((e) => e.constructor.name === ge)))),
    pe = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
   function _e(e, t, r) {
    const s = h(e, r);
    if (s || b(r)) return { error: s, name: r };
    const a = r.split('.');
    for (; a.length; ) {
     const s = a.join('.'),
      i = h(t, s),
      n = h(e, s);
     if (i && !Array.isArray(i) && r !== s) return { name: r };
     if (n && n.type) return { name: s, error: n };
     a.pop();
    }
    return { name: r };
   }
   var Ve = (e, t, r, s, a) => !a.isOnAll && (!r && a.isOnTouch ? !(t || e) : (r ? s.isOnBlur : a.isOnBlur) ? !e : !(r ? s.isOnChange : a.isOnChange) || e),
    Ae = (e, t) => !m(h(e, t)).length && re(e, t);
   const Fe = { mode: A.onSubmit, reValidateMode: A.onChange, shouldFocusError: !0 };
   function we(e = {}) {
    let t,
     r = { ...Fe, ...e },
     s = { submitCount: 0, isDirty: !1, isLoading: H(r.defaultValues), isValidating: !1, isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, touchedFields: {}, dirtyFields: {}, validatingFields: {}, errors: r.errors || {}, disabled: r.disabled || !1 },
     o = {},
     c = ((l(r.defaultValues) || l(r.values)) && y(r.defaultValues || r.values)) || {},
     b = r.shouldUnregister ? {} : y(c),
     p = { action: !1, mount: !1, watch: !1 },
     F = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
     w = 0;
    const S = { isDirty: !1, dirtyFields: !1, validatingFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 },
     x = { values: se(), array: se(), state: se() },
     D = M(r.mode),
     k = M(r.reValidateMode),
     O = r.criteriaMode === A.all,
     E = async (e) => {
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
     j = (e, t, r, s) => {
      const a = h(o, e);
      if (a) {
       const i = h(b, e, v(r) ? h(c, e) : r);
       v(i) || (s && s.defaultChecked) || t ? _(b, e, t ? i : me(a._f)) : Q(e, i), p.mount && E();
      }
     },
     N = (e, t, r, a, i) => {
      let n = !1,
       l = !1;
      const u = { name: e },
       d = !!(h(o, e) && h(o, e)._f && h(o, e)._f.disabled);
      if (!r || a) {
       S.isDirty && ((l = s.isDirty), (s.isDirty = u.isDirty = J()), (n = l !== u.isDirty));
       const r = d || ie(h(c, e), t);
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
      const t = await r.resolver(b, r.context, ve(e || F.mount, o, r.criteriaMode, r.shouldUseNativeValidation));
      return T(e), t;
     },
     z = async (e, t, a = { valid: !0 }) => {
      for (const i in e) {
       const n = e[i];
       if (n) {
        const { _f: e, ...o } = n;
        if (e) {
         const o = F.array.has(e.name),
          l = n._f && be(n._f);
         l && S.validatingFields && T([i], !0);
         const u = await te(n, b, O, r.shouldUseNativeValidation && !t, o);
         if ((l && S.validatingFields && T([i]), u[e.name] && ((a.valid = !1), t))) break;
         !t && (h(u, e.name) ? (o ? P(s.errors, u, e.name) : _(s.errors, e.name, u[e.name])) : re(s.errors, e.name));
        }
        !C(o) && (await z(o, t, a));
       }
      }
      return a.valid;
     },
     J = (e, t) => (e && t && _(b, e, t), !ie(de(), c)),
     K = (e, t, r) => B(e, F, { ...(p.mount ? b : v(t) ? c : L(e) ? { [e]: t } : t) }, r, t),
     Q = (e, t, r = {}) => {
      const s = h(o, e);
      let i = t;
      if (s) {
       const r = s._f;
       r && (!r.disabled && _(b, e, ye(t, r)), (i = $(r.ref) && n(t) ? '' : t), ne(r.ref) ? [...r.ref.options].forEach((e) => (e.selected = i.includes(e.value))) : r.refs ? (a(r.ref) ? (r.refs.length > 1 ? r.refs.forEach((e) => (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(i) ? !!i.find((t) => t === e.value) : i === e.value)) : r.refs[0] && (r.refs[0].checked = !!i)) : r.refs.forEach((e) => (e.checked = e.value === i))) : R(r.ref) ? (r.ref.value = '') : ((r.ref.value = i), r.ref.type || x.values.next({ name: e, values: { ...b } })));
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
      _(b, e, l), i ? (x.array.next({ name: e, values: { ...b } }), (S.isDirty || S.dirtyFields) && r.shouldDirty && x.state.next({ name: e, dirtyFields: fe(c, b), isDirty: J(e, l) })) : !a || a._f || n(l) ? Q(e, l, r) : X(e, l, r), q(e, F) && x.state.next({ ...s }), x.values.next({ name: p.mount ? e : void 0, values: { ...b } });
     },
     Z = async (a) => {
      p.mount = !0;
      const i = a.target;
      let n = i.name,
       l = !0;
      const d = h(o, n),
       c = (e) => {
        l = Number.isNaN(e) || ie(e, h(b, n, e));
       };
      if (d) {
       let f, y;
       const m = i.type ? me(d._f) : u(a),
        v = a.type === V.BLUR || a.type === V.FOCUS_OUT,
        g = (!pe(d._f) && !r.resolver && !h(s.errors, n) && !d._f.deps) || Ve(v, h(s.touchedFields, n), s.isSubmitted, k, D),
        p = q(n, F, v);
       _(b, n, m), v ? (d._f.onBlur && d._f.onBlur(a), t && t(0)) : d._f.onChange && d._f.onChange(a);
       const A = N(n, m, v, !1),
        w = !C(A) || p;
       if ((!v && x.values.next({ name: n, type: a.type, values: { ...b } }), g)) return S.isValid && ('onBlur' === e.mode ? v && E() : E()), w && x.state.next({ name: n, ...(p ? {} : A) });
       if ((!v && p && x.state.next({ ...s }), r.resolver)) {
        const { errors: e } = await G([n]);
        if ((c(m), l)) {
         const t = _e(s.errors, o, n),
          r = _e(e, o, t.name || n);
         (f = r.error), (n = r.name), (y = C(e));
        }
       } else T([n], !0), (f = (await te(d, b, O, r.shouldUseNativeValidation))[n]), T([n]), c(m), l && (f ? (y = !1) : S.isValid && (y = await z(o, !0)));
       l && (d._f.deps && ue(d._f.deps), W(n, y, f, A));
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
          (i || s.isValid) && E())
        : (i = a = await z(o));
      return x.state.next({ ...(!L(e) || (S.isValid && a !== s.isValid) ? {} : { name: e }), ...(r.resolver || !e ? { isValid: a } : {}), errors: s.errors }), t.shouldFocus && !i && I(o, ee, e ? n : F.mount), i;
     },
     de = (e) => {
      const t = { ...(p.mount ? b : c) };
      return v(e) ? t : L(e) ? h(t, e) : e.map((e) => h(t, e));
     },
     ce = (e, t) => ({ invalid: !!h((t || s).errors, e), isDirty: !!h((t || s).dirtyFields, e), error: h((t || s).errors, e), isValidating: !!h(s.validatingFields, e), isTouched: !!h((t || s).touchedFields, e) }),
     ge = (e, t, r) => {
      const a = (h(o, e, { _f: {} })._f || {}).ref,
       i = h(s.errors, e) || {},
       { ref: n, message: l, type: u, ...d } = i;
      _(s.errors, e, { ...d, ...t, ref: a }), x.state.next({ name: e, errors: s.errors, isValid: !1 }), r && r.shouldFocus && a && a.focus && a.focus();
     },
     we = (e, t = {}) => {
      for (const a of e ? U(e) : F.mount) F.mount.delete(a), F.array.delete(a), t.keepValue || (re(o, a), re(b, a)), !t.keepError && re(s.errors, a), !t.keepDirty && re(s.dirtyFields, a), !t.keepTouched && re(s.touchedFields, a), !t.keepIsValidating && re(s.validatingFields, a), !r.shouldUnregister && !t.keepDefaultValue && re(c, a);
      x.values.next({ values: { ...b } }), x.state.next({ ...s, ...(t.keepDirty ? { isDirty: J() } : {}) }), !t.keepIsValid && E();
     },
     Se = ({ disabled: e, name: t, field: r, fields: s, value: a }) => {
      if ((g(e) && p.mount) || e) {
       const i = e ? void 0 : v(a) ? me(r ? r._f : h(s, t)._f) : a;
       _(b, t, i), N(t, i, !1, !1, !0);
      }
     },
     xe = (t, s = {}) => {
      let a = h(o, t);
      const i = g(s.disabled) || g(e.disabled);
      return (
       _(o, t, { ...(a || {}), _f: { ...(a && a._f ? a._f : { ref: { name: t } }), name: t, mount: !0, ...s } }),
       F.mount.add(t),
       a ? Se({ field: a, disabled: g(s.disabled) ? s.disabled : e.disabled, name: t, value: s.value }) : j(t, !0, s.value),
       {
        ...(i ? { disabled: s.disabled || e.disabled } : {}),
        ...(r.progressive ? { required: !!s.required, min: he(s.min), max: he(s.max), minLength: he(s.minLength), maxLength: he(s.maxLength), pattern: he(s.pattern) } : {}),
        name: t,
        onChange: Z,
        onBlur: Z,
        ref: (e) => {
         if (e) {
          xe(t, s), (a = h(o, t));
          const r = (v(e.value) && e.querySelectorAll && e.querySelectorAll('input,select,textarea')[0]) || e,
           i = oe(r),
           n = a._f.refs || [];
          if (i ? n.find((e) => e === r) : r === a._f.ref) return;
          _(o, t, { _f: { ...a._f, ...(i ? { refs: [...n.filter(le), r, ...(Array.isArray(h(c, t)) ? [{}] : [])], ref: { type: r.type, name: t } } : { ref: r }) } }), j(t, !1, void 0, r);
         } else (a = h(o, t, {})), a._f && (a._f.mount = !1), (r.shouldUnregister || s.shouldUnregister) && (!d(F.array, t) || !p.action) && F.unMount.add(t);
        },
       }
      );
     },
     De = () => r.shouldFocusError && I(o, ee, F.mount),
     ke = (e, t) => async (a) => {
      let i;
      a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
      let n = y(b);
      if ((x.state.next({ isSubmitting: !0 }), r.resolver)) {
       const { errors: e, values: t } = await G();
       (s.errors = e), (n = t);
      } else await z(o);
      if ((re(s.errors, 'root'), C(s.errors))) {
       x.state.next({ errors: {} });
       try {
        await e(n, a);
       } catch (l) {
        i = l;
       }
      } else t && (await t({ ...s.errors }, a)), De(), setTimeout(De);
      if ((x.state.next({ isSubmitted: !0, isSubmitting: !1, isSubmitSuccessful: C(s.errors) && !i, submitCount: s.submitCount + 1, errors: s.errors }), i)) throw i;
     },
     Oe = (t, r = {}) => {
      const a = t ? y(t) : c,
       i = y(a),
       n = C(t),
       l = n ? c : i;
      if ((r.keepDefaultValues || (c = a), !r.keepValues)) {
       if (r.keepDirtyValues) for (const e of F.mount) h(s.dirtyFields, e) ? _(l, e, h(b, e)) : Y(e, h(l, e));
       else {
        if (f && v(t))
         for (const e of F.mount) {
          const t = h(o, e);
          if (t && t._f) {
           const e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
           if ($(e)) {
            const t = e.closest('form');
            if (t) {
             t.reset();
             break;
            }
           }
          }
         }
        o = {};
       }
       (b = e.shouldUnregister ? (r.keepDefaultValues ? y(c) : {}) : y(l)), x.array.next({ values: { ...l } }), x.values.next({ values: { ...l } });
      }
      (F = { mount: r.keepDirtyValues ? F.mount : new Set(), unMount: new Set(), array: new Set(), watch: new Set(), watchAll: !1, focus: '' }), (p.mount = !S.isValid || !!r.keepIsValid || !!r.keepDirtyValues), (p.watch = !!e.shouldUnregister), x.state.next({ submitCount: r.keepSubmitCount ? s.submitCount : 0, isDirty: !n && (r.keepDirty ? s.isDirty : !(!r.keepDefaultValues || ie(t, c))), isSubmitted: !!r.keepIsSubmitted && s.isSubmitted, dirtyFields: n ? {} : r.keepDirtyValues ? (r.keepDefaultValues && b ? fe(c, b) : s.dirtyFields) : r.keepDefaultValues && t ? fe(c, t) : r.keepDirty ? s.dirtyFields : {}, touchedFields: r.keepTouched ? s.touchedFields : {}, errors: r.keepErrors ? s.errors : {}, isSubmitSuccessful: !!r.keepIsSubmitSuccessful && s.isSubmitSuccessful, isSubmitting: !1 });
     },
     Ee = (e, t) => Oe(H(e) ? e(b) : e, t);
    return {
     control: {
      register: xe,
      unregister: we,
      getFieldState: ce,
      handleSubmit: ke,
      setError: ge,
      _executeSchema: G,
      _getWatch: K,
      _getDirty: J,
      _updateValid: E,
      _removeUnmounted: () => {
       for (const e of F.unMount) {
        const t = h(o, e);
        t && (t._f.refs ? t._f.refs.every((e) => !le(e)) : !le(t._f.ref)) && we(e);
       }
       F.unMount = new Set();
      },
      _updateFieldArray: (e, t = [], r, a, i = !0, n = !0) => {
       if (a && r) {
        if (((p.action = !0), n && Array.isArray(h(o, e)))) {
         const t = r(h(o, e), a.argA, a.argB);
         i && _(o, e, t);
        }
        if (n && Array.isArray(h(s.errors, e))) {
         const t = r(h(s.errors, e), a.argA, a.argB);
         i && _(s.errors, e, t), Ae(s.errors, e);
        }
        if (S.touchedFields && n && Array.isArray(h(s.touchedFields, e))) {
         const t = r(h(s.touchedFields, e), a.argA, a.argB);
         i && _(s.touchedFields, e, t);
        }
        S.dirtyFields && (s.dirtyFields = fe(c, b)), x.state.next({ name: e, isDirty: J(e, t), dirtyFields: s.dirtyFields, errors: s.errors, isValid: s.isValid });
       } else _(b, e, t);
      },
      _updateDisabledField: Se,
      _getFieldArray: (t) => m(h(p.mount ? b : c, t, e.shouldUnregister ? h(c, t, []) : [])),
      _reset: Oe,
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
       return b;
      },
      get _state() {
       return p;
      },
      set _state(e) {
       p = e;
      },
      get _defaultValues() {
       return c;
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
     register: xe,
     handleSubmit: ke,
     watch: (e, t) => (H(e) ? x.values.subscribe({ next: (r) => e(K(void 0, t), r) }) : K(e, t, !0)),
     setValue: Y,
     getValues: de,
     reset: Ee,
     resetField: (e, t = {}) => {
      h(o, e) && (v(t.defaultValue) ? Y(e, y(h(c, e))) : (Y(e, t.defaultValue), _(c, e, y(t.defaultValue))), t.keepTouched || re(s.touchedFields, e), t.keepDirty || (re(s.dirtyFields, e), (s.isDirty = t.defaultValue ? J(e, y(h(c, e))) : J())), t.keepError || (re(s.errors, e), S.isValid && E()), x.state.next({ ...s }));
     },
     clearErrors: (e) => {
      e && U(e).forEach((e) => re(s.errors, e)), x.state.next({ errors: e ? s.errors : {} });
     },
     unregister: we,
     setError: ge,
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
   function Se(e = {}) {
    const t = s.useRef(),
     r = s.useRef(),
     [a, i] = s.useState({ isDirty: !1, isValidating: !1, isLoading: H(e.defaultValues), isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, submitCount: 0, dirtyFields: {}, touchedFields: {}, validatingFields: {}, errors: e.errors || {}, disabled: e.disabled || !1, defaultValues: H(e.defaultValues) ? void 0 : e.defaultValues });
    t.current || (t.current = { ...we(e), formState: a });
    const n = t.current.control;
    return (
     (n._options = e),
     j({
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
     (t.current.formState = E(a, n)),
     t.current
    );
   }
  },
 },
]);
