'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [4088],
 {
  18439(e, t, r) {
   r.d(t, { R: () => n, x: () => o });
   var s = r(30758);
   const a = {},
    i = s.createContext(a);
   function n(e) {
    const t = s.useContext(i);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function o(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : n(e.components)), s.createElement(i.Provider, { value: t }, e.children));
   }
  },
  27890(e, t, r) {
   r.d(t, { mN: () => Ae });
   var s = r(30758),
    a = (e) => 'checkbox' === e.type,
    i = (e) => e instanceof Date,
    n = (e) => null == e;
   const o = (e) => 'object' == typeof e;
   var l = (e) => !n(e) && !Array.isArray(e) && o(e) && !i(e),
    u = (e) => (l(e) && e.target ? (a(e.target) ? e.target.checked : e.target.value) : e),
    d = (e, t) => e.has(((e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
    c = 'undefined' != typeof window && void 0 !== window.HTMLElement && 'undefined' != typeof document;
   function f(e) {
    if (e instanceof Date) return new Date(e);
    const t = 'undefined' != typeof FileList && e instanceof FileList;
    if (c && (e instanceof Blob || t)) return e;
    const r = Array.isArray(e);
    if (
     !(
      r ||
      (l(e) &&
       ((e) => {
        const t = e.constructor && e.constructor.prototype;
        return l(t) && t.hasOwnProperty('isPrototypeOf');
       })(e))
     )
    )
     return e;
    const s = r ? [] : Object.create(Object.getPrototypeOf(e));
    for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (s[a] = f(e[a]));
    return s;
   }
   var m = (e) => /^\w*$/.test(e),
    y = (e) => void 0 === e,
    h = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
    v = (e) => h(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
    p = (e, t, r) => {
     if (!t || !l(e)) return r;
     const s = (m(t) ? [t] : v(t)).reduce((e, t) => (n(e) ? e : e[t]), e);
     return y(s) || s === e ? (y(e[t]) ? r : e[t]) : s;
    },
    g = (e) => 'boolean' == typeof e,
    b = (e) => 'function' == typeof e,
    _ = (e, t, r) => {
     let s = -1;
     const a = m(t) ? [t] : v(t),
      i = a.length,
      n = i - 1;
     for (; ++s < i; ) {
      const t = a[s];
      let i = r;
      if (s !== n) {
       const r = e[t];
       i = l(r) || Array.isArray(r) ? r : isNaN(+a[s + 1]) ? {} : [];
      }
      if ('__proto__' === t || 'constructor' === t || 'prototype' === t) return;
      ((e[t] = i), (e = e[t]));
     }
    };
   const V = 'blur',
    F = 'focusout',
    A = 'onBlur',
    w = 'onChange',
    k = 'onSubmit',
    S = 'onTouched',
    x = 'all',
    D = 'max',
    O = 'min',
    E = 'maxLength',
    C = 'minLength',
    j = 'pattern',
    N = 'required',
    T = 'validate',
    L = s.createContext(null);
   L.displayName = 'HookFormControlContext';
   var M = (e, t, r, s = !0) => {
    const a = { defaultValues: t._defaultValues };
    for (const i in e)
     Object.defineProperty(a, i, {
      get: () => {
       const a = i;
       return (t._proxyFormState[a] !== x && (t._proxyFormState[a] = !s || x), r && (r[a] = !0), e[a]);
      },
     });
    return a;
   };
   const U = 'undefined' != typeof window ? s.useLayoutEffect : s.useEffect;
   var B = (e) => 'string' == typeof e,
    R = (e, t, r, s, a) => (B(e) ? (s && t.watch.add(e), p(r, e, a)) : Array.isArray(e) ? e.map((e) => (s && t.watch.add(e), p(r, e))) : (s && (t.watchAll = !0), r)),
    I = (e) => n(e) || !o(e);
   function P(e, t, r = new WeakSet()) {
    if (I(e) || I(t)) return Object.is(e, t);
    if (i(e) && i(t)) return Object.is(e.getTime(), t.getTime());
    const s = Object.keys(e),
     a = Object.keys(t);
    if (s.length !== a.length) return !1;
    if (r.has(e) || r.has(t)) return !0;
    (r.add(e), r.add(t));
    for (const n of s) {
     const s = e[n];
     if (!a.includes(n)) return !1;
     if ('ref' !== n) {
      const e = t[n];
      if ((i(s) && i(e)) || (l(s) && l(e)) || (Array.isArray(s) && Array.isArray(e)) ? !P(s, e, r) : !Object.is(s, e)) return !1;
     }
    }
    return !0;
   }
   const q = s.createContext(null);
   q.displayName = 'HookFormContext';
   var W = (e, t, r, s, a) => (t ? { ...r[e], types: { ...(r[e] && r[e].types ? r[e].types : {}), [s]: a || !0 } } : {}),
    H = (e) => (Array.isArray(e) ? e : [e]),
    $ = () => {
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
    };
   function z(e, t) {
    const r = {};
    for (const s in e)
     if (e.hasOwnProperty(s)) {
      const a = e[s],
       i = t[s];
      if (a && l(a) && i) {
       const e = z(a, i);
       l(e) && (r[s] = e);
      } else e[s] && (r[s] = i);
     }
    return r;
   }
   var G = (e) => l(e) && !Object.keys(e).length,
    J = (e) => 'file' === e.type,
    K = (e) => {
     if (!c) return !1;
     const t = e ? e.ownerDocument : 0;
     return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
    },
    Q = (e) => 'select-multiple' === e.type,
    X = (e) => 'radio' === e.type,
    Y = (e) => K(e) && e.isConnected;
   function Z(e, t) {
    const r = Array.isArray(t) ? t : m(t) ? [t] : v(t),
     s =
      1 === r.length
       ? e
       : (function (e, t) {
          const r = t.slice(0, -1).length;
          let s = 0;
          for (; s < r; ) e = y(e) ? s++ : e[t[s++]];
          return e;
         })(e, r),
     a = r.length - 1,
     i = r[a];
    return (
     s && delete s[i],
     0 !== a &&
      ((l(s) && G(s)) ||
       (Array.isArray(s) &&
        (function (e) {
         for (const t in e) if (e.hasOwnProperty(t) && !y(e[t])) return !1;
         return !0;
        })(s))) &&
      Z(e, r.slice(0, -1)),
     e
    );
   }
   function ee(e) {
    return (
     Array.isArray(e) ||
     (l(e) &&
      !((e) => {
       for (const t in e) if (b(e[t])) return !0;
       return !1;
      })(e))
    );
   }
   function te(e, t = {}) {
    for (const r in e) {
     const s = e[r];
     ee(s) ? ((t[r] = Array.isArray(s) ? [] : {}), te(s, t[r])) : y(s) || (t[r] = !0);
    }
    return t;
   }
   function re(e, t, r) {
    r || (r = te(t));
    for (const s in e) {
     const a = e[s];
     if (ee(a)) y(t) || I(r[s]) ? (r[s] = te(a, Array.isArray(a) ? [] : {})) : re(a, n(t) ? {} : t[s], r[s]);
     else {
      const e = t[s];
      r[s] = !P(a, e);
     }
    }
    return r;
   }
   const se = { value: !1, isValid: !1 },
    ae = { value: !0, isValid: !0 };
   var ie = (e) => {
     if (Array.isArray(e)) {
      if (e.length > 1) {
       const t = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
       return { value: t, isValid: !!t.length };
      }
      return e[0].checked && !e[0].disabled ? (e[0].attributes && !y(e[0].attributes.value) ? (y(e[0].value) || '' === e[0].value ? ae : { value: e[0].value, isValid: !0 }) : ae) : se;
     }
     return se;
    },
    ne = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: s }) => (y(e) ? e : t ? ('' === e ? NaN : e ? +e : e) : r && B(e) ? new Date(e) : s ? s(e) : e);
   const oe = { isValid: !1, value: null };
   var le = (e) => (Array.isArray(e) ? e.reduce((e, t) => (t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : e), oe) : oe);
   function ue(e) {
    const t = e.ref;
    return J(t) ? t.files : X(t) ? le(e.refs).value : Q(t) ? [...t.selectedOptions].map(({ value: e }) => e) : a(t) ? ie(e.refs).value : ne(y(t.value) ? e.ref.value : t.value, e);
   }
   var de = (e) => e instanceof RegExp,
    ce = (e) => (y(e) ? e : de(e) ? e.source : l(e) ? (de(e.value) ? e.value.source : e.value) : e),
    fe = (e) => ({ isOnSubmit: !e || e === k, isOnBlur: e === A, isOnChange: e === w, isOnAll: e === x, isOnTouch: e === S });
   const me = 'AsyncFunction';
   var ye = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
   const he = (e, t, r, s) => {
    for (const a of r || Object.keys(e)) {
     const r = p(e, a);
     if (r) {
      const { _f: e, ...i } = r;
      if (e) {
       if (e.refs && e.refs[0] && t(e.refs[0], a) && !s) return !0;
       if (e.ref && t(e.ref, e.name) && !s) return !0;
       if (he(i, t)) break;
      } else if (l(i) && he(i, t)) break;
     }
    }
   };
   function ve(e, t, r) {
    const s = p(e, r);
    if (s || m(r)) return { error: s, name: r };
    const a = r.split('.');
    for (; a.length; ) {
     const s = a.join('.'),
      i = p(t, s),
      n = p(e, s);
     if (i && !Array.isArray(i) && r !== s) return { name: r };
     if (n && n.type) return { name: s, error: n };
     if (n && n.root && n.root.type) return { name: `${s}.root`, error: n.root };
     a.pop();
    }
    return { name: r };
   }
   var pe = (e, t, r) => {
    const s = H(p(e, r));
    return (_(s, 'root', t[r]), _(e, r, s), e);
   };
   function ge(e, t, r = 'validate') {
    if (B(e) || (Array.isArray(e) && e.every(B)) || (g(e) && !e)) return { type: r, message: B(e) ? e : '', ref: t };
   }
   var be = (e) => (l(e) && !de(e) ? e : { value: e, message: '' }),
    _e = async (e, t, r, s, i, o) => {
     const { ref: u, refs: d, required: c, maxLength: f, minLength: m, min: h, max: v, pattern: _, validate: V, name: F, valueAsNumber: A, mount: w } = e._f,
      k = p(r, F);
     if (!w || t.has(F)) return {};
     const S = d ? d[0] : u,
      x = (e) => {
       i && S.reportValidity && (S.setCustomValidity(g(e) ? '' : e || ''), S.reportValidity());
      },
      L = {},
      M = X(u),
      U = a(u),
      R = M || U,
      I = ((A || J(u)) && y(u.value) && y(k)) || (K(u) && '' === u.value) || '' === k || (Array.isArray(k) && !k.length),
      P = W.bind(null, F, s, L),
      q = (e, t, r, s = E, a = C) => {
       const i = e ? t : r;
       L[F] = { type: e ? s : a, message: i, ref: u, ...P(e ? s : a, i) };
      };
     if (o ? !Array.isArray(k) || !k.length : c && ((!R && (I || n(k))) || (g(k) && !k) || (U && !ie(d).isValid) || (M && !le(d).isValid))) {
      const { value: e, message: t } = B(c) ? { value: !!c, message: c } : be(c);
      if (e && ((L[F] = { type: N, message: t, ref: S, ...P(N, t) }), !s)) return (x(t), L);
     }
     if (!(I || (n(h) && n(v)))) {
      let e, t;
      const r = be(v),
       a = be(h);
      if (n(k) || isNaN(k)) {
       const s = u.valueAsDate || new Date(k),
        i = (e) => new Date(new Date().toDateString() + ' ' + e),
        n = 'time' == u.type,
        o = 'week' == u.type;
       (B(r.value) && k && (e = n ? i(k) > i(r.value) : o ? k > r.value : s > new Date(r.value)), B(a.value) && k && (t = n ? i(k) < i(a.value) : o ? k < a.value : s < new Date(a.value)));
      } else {
       const s = u.valueAsNumber || (k ? +k : k);
       (n(r.value) || (e = s > r.value), n(a.value) || (t = s < a.value));
      }
      if ((e || t) && (q(!!e, r.message, a.message, D, O), !s)) return (x(L[F].message), L);
     }
     if ((f || m) && !I && (B(k) || (o && Array.isArray(k)))) {
      const e = be(f),
       t = be(m),
       r = !n(e.value) && k.length > +e.value,
       a = !n(t.value) && k.length < +t.value;
      if ((r || a) && (q(r, e.message, t.message), !s)) return (x(L[F].message), L);
     }
     if (_ && !I && B(k)) {
      const { value: e, message: t } = be(_);
      if (de(e) && !k.match(e) && ((L[F] = { type: j, message: t, ref: u, ...P(j, t) }), !s)) return (x(t), L);
     }
     if (V)
      if (b(V)) {
       const e = ge(await V(k, r), S);
       if (e && ((L[F] = { ...e, ...P(T, e.message) }), !s)) return (x(e.message), L);
      } else if (l(V)) {
       let e = {};
       for (const t in V) {
        if (!G(e) && !s) break;
        const a = ge(await V[t](k, r), S, t);
        a && ((e = { ...a, ...P(t, a.message) }), x(a.message), s && (L[F] = e));
       }
       if (!G(e) && ((L[F] = { ref: S, ...e }), !s)) return L;
      }
     return (x(!0), L);
    };
   const Ve = { mode: k, reValidateMode: w, shouldFocusError: !0 };
   function Fe(e = {}) {
    let t,
     r = { ...Ve, ...e },
     s = { submitCount: 0, isDirty: !1, isReady: !1, isLoading: b(r.defaultValues), isValidating: !1, isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, touchedFields: {}, dirtyFields: {}, validatingFields: {}, errors: r.errors || {}, disabled: r.disabled || !1 },
     o = {},
     m = ((l(r.defaultValues) || l(r.values)) && f(r.defaultValues || r.values)) || {},
     v = r.shouldUnregister ? {} : f(m),
     A = { action: !1, mount: !1, watch: !1, keepIsValid: !1 },
     w = { mount: new Set(), disabled: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
     k = 0;
    const S = { isDirty: !1, dirtyFields: !1, validatingFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 },
     D = { ...S };
    let O = { ...D };
    const E = { array: $(), state: $() },
     C = r.criteriaMode === x,
     j = async (e) => {
      if (!A.keepIsValid && !r.disabled && (D.isValid || O.isValid || e)) {
       let e;
       (r.resolver ? ((e = G((await U()).errors)), N()) : (e = await I(o, !0)), e !== s.isValid && E.state.next({ isValid: e }));
      }
     },
     N = (e, t) => {
      !r.disabled &&
       (D.isValidating || D.validatingFields || O.isValidating || O.validatingFields) &&
       ((e || Array.from(w.mount)).forEach((e) => {
        e && (t ? _(s.validatingFields, e, t) : Z(s.validatingFields, e));
       }),
       E.state.next({ validatingFields: s.validatingFields, isValidating: !G(s.validatingFields) }));
     },
     T = (e, t, r, s) => {
      const a = p(o, e);
      if (a) {
       const i = p(v, e, y(r) ? p(m, e) : r);
       (y(i) || (s && s.defaultChecked) || t ? _(v, e, t ? i : ue(a._f)) : ee(e, i), A.mount && !A.action && j());
      }
     },
     L = (e, t, a, i, n) => {
      let o = !1,
       l = !1;
      const u = { name: e };
      if (!r.disabled) {
       if (!a || i) {
        (D.isDirty || O.isDirty) && ((l = s.isDirty), (s.isDirty = u.isDirty = q()), (o = l !== u.isDirty));
        const r = P(p(m, e), t);
        ((l = !!p(s.dirtyFields, e)), r ? Z(s.dirtyFields, e) : _(s.dirtyFields, e, !0), (u.dirtyFields = s.dirtyFields), (o = o || ((D.dirtyFields || O.dirtyFields) && l !== !r)));
       }
       if (a) {
        const t = p(s.touchedFields, e);
        t || (_(s.touchedFields, e, a), (u.touchedFields = s.touchedFields), (o = o || ((D.touchedFields || O.touchedFields) && t !== a)));
       }
       o && n && E.state.next(u);
      }
      return o ? u : {};
     },
     M = (e, a, i, n) => {
      const o = p(s.errors, e),
       l = (D.isValid || O.isValid) && g(a) && s.isValid !== a;
      var u;
      if (
       (r.delayError && i
        ? ((u = () =>
           ((e, t) => {
            (_(s.errors, e, t), E.state.next({ errors: s.errors }));
           })(e, i)),
          (t = (e) => {
           (clearTimeout(k), (k = setTimeout(u, e)));
          }),
          t(r.delayError))
        : (clearTimeout(k), (t = null), i ? _(s.errors, e, i) : Z(s.errors, e)),
       (i ? !P(o, i) : o) || !G(n) || l)
      ) {
       const t = { ...n, ...(l && g(a) ? { isValid: a } : {}), errors: s.errors, name: e };
       ((s = { ...s, ...t }), E.state.next(t));
      }
     },
     U = async (e) => {
      N(e, !0);
      const t = await r.resolver(
       v,
       r.context,
       ((e, t, r, s) => {
        const a = {};
        for (const i of e) {
         const e = p(t, i);
         e && _(a, i, e._f);
        }
        return { criteriaMode: r, names: [...e], fields: a, shouldUseNativeValidation: s };
       })(e || w.mount, o, r.criteriaMode, r.shouldUseNativeValidation),
      );
      return t;
     },
     I = async (t, a, i = { valid: !0 }) => {
      for (const o in t) {
       const u = t[o];
       if (u) {
        const { _f: t, ...o } = u;
        if (t) {
         const o = w.array.has(t.name),
          d = u._f && !!(n = u._f) && !!n.validate && !!((b(n.validate) && n.validate.constructor.name === me) || (l(n.validate) && Object.values(n.validate).find((e) => e.constructor.name === me)));
         d && D.validatingFields && N([t.name], !0);
         const c = await _e(u, w.disabled, v, C, r.shouldUseNativeValidation && !a, o);
         if ((d && D.validatingFields && N([t.name]), c[t.name] && ((i.valid = !1), a || e.shouldUseNativeValidation))) break;
         !a && (p(c, t.name) ? (o ? pe(s.errors, c, t.name) : _(s.errors, t.name, c[t.name])) : Z(s.errors, t.name));
        }
        !G(o) && (await I(o, a, i));
       }
      }
      var n;
      return i.valid;
     },
     q = (e, t) => !r.disabled && (e && t && _(v, e, t), !P(le(), m)),
     W = (e, t, r) => R(e, w, { ...(A.mount ? v : y(t) ? m : B(e) ? { [e]: t } : t) }, r, t),
     ee = (e, t, r = {}) => {
      const s = p(o, e);
      let i = t;
      if (s) {
       const r = s._f;
       r &&
        (!r.disabled && _(v, e, ne(t, r)),
        (i = K(r.ref) && n(t) ? '' : t),
        Q(r.ref)
         ? [...r.ref.options].forEach((e) => (e.selected = i.includes(e.value)))
         : r.refs
           ? a(r.ref)
             ? r.refs.forEach((e) => {
                (e.defaultChecked && e.disabled) || (Array.isArray(i) ? (e.checked = !!i.find((t) => t === e.value)) : (e.checked = i === e.value || !!i));
               })
             : r.refs.forEach((e) => (e.checked = e.value === i))
           : J(r.ref)
             ? (r.ref.value = '')
             : ((r.ref.value = i), r.ref.type || E.state.next({ name: e, values: f(v) })));
      }
      ((r.shouldDirty || r.shouldTouch) && L(e, i, r.shouldTouch, r.shouldDirty, !0), r.shouldValidate && oe(e));
     },
     te = (e, t, r) => {
      for (const s in t) {
       if (!t.hasOwnProperty(s)) return;
       const a = t[s],
        n = e + '.' + s,
        u = p(o, n);
       (w.array.has(e) || l(a) || (u && !u._f)) && !i(a) ? te(n, a, r) : ee(n, a, r);
      }
     },
     se = (e, t, r = {}) => {
      const a = p(o, e),
       i = w.array.has(e),
       l = f(t);
      (_(v, e, l), i ? (E.array.next({ name: e, values: f(v) }), (D.isDirty || D.dirtyFields || O.isDirty || O.dirtyFields) && r.shouldDirty && E.state.next({ name: e, dirtyFields: re(m, v), isDirty: q(e, l) })) : !a || a._f || n(l) ? ee(e, l, r) : te(e, l, r), ye(e, w) ? E.state.next({ ...s, name: e, values: f(v) }) : E.state.next({ name: A.mount ? e : void 0, values: f(v) }));
     },
     ae = async (e) => {
      A.mount = !0;
      const a = e.target;
      let n = a.name,
       l = !0;
      const d = p(o, n),
       c = (e) => {
        l = Number.isNaN(e) || (i(e) && isNaN(e.getTime())) || P(e, p(v, n, e));
       },
       m = fe(r.mode),
       y = fe(r.reValidateMode);
      if (d) {
       let i, g;
       const b = a.type ? ue(d._f) : u(e),
        A = e.type === V || e.type === F,
        k = !(((h = d._f).mount && (h.required || h.min || h.max || h.maxLength || h.minLength || h.pattern || h.validate)) || r.resolver || p(s.errors, n) || d._f.deps) || ((e, t, r, s, a) => !a.isOnAll && (!r && a.isOnTouch ? !(t || e) : (r ? s.isOnBlur : a.isOnBlur) ? !e : !(r ? s.isOnChange : a.isOnChange) || e))(A, p(s.touchedFields, n), s.isSubmitted, y, m),
        S = ye(n, w, A);
       (_(v, n, b), A ? (a && a.readOnly) || (d._f.onBlur && d._f.onBlur(e), t && t(0)) : d._f.onChange && d._f.onChange(e));
       const x = L(n, b, A),
        T = !G(x) || S;
       if ((!A && E.state.next({ name: n, type: e.type, values: f(v) }), k)) return ((D.isValid || O.isValid) && ('onBlur' === r.mode ? A && j() : A || j()), T && E.state.next({ name: n, ...(S ? {} : x) }));
       if ((!A && S && E.state.next({ ...s }), r.resolver)) {
        const { errors: e } = await U([n]);
        if ((N([n]), c(b), l)) {
         const t = ve(s.errors, o, n),
          r = ve(e, o, t.name || n);
         ((i = r.error), (n = r.name), (g = G(e)));
        }
       } else (N([n], !0), (i = (await _e(d, w.disabled, v, C, r.shouldUseNativeValidation))[n]), N([n]), c(b), l && (i ? (g = !1) : (D.isValid || O.isValid) && (g = await I(o, !0))));
       l && (d._f.deps && (!Array.isArray(d._f.deps) || d._f.deps.length > 0) && oe(d._f.deps), M(n, g, i, x));
      }
      var h;
     },
     ie = (e, t) => {
      if (p(s.errors, t) && e.focus) return (e.focus(), 1);
     },
     oe = async (e, t = {}) => {
      let a, i;
      const n = H(e);
      if (r.resolver) {
       const t = await (async (e) => {
        const { errors: t } = await U(e);
        if ((N(e), e))
         for (const r of e) {
          const e = p(t, r);
          e ? _(s.errors, r, e) : Z(s.errors, r);
         }
        else s.errors = t;
        return t;
       })(y(e) ? e : n);
       ((a = G(t)), (i = e ? !n.some((e) => p(t, e)) : a));
      } else
       e
        ? ((i = (
           await Promise.all(
            n.map(async (e) => {
             const t = p(o, e);
             return await I(t && t._f ? { [e]: t } : t);
            }),
           )
          ).every(Boolean)),
          (i || s.isValid) && j())
        : (i = a = await I(o));
      return (E.state.next({ ...(!B(e) || ((D.isValid || O.isValid) && a !== s.isValid) ? {} : { name: e }), ...(r.resolver || !e ? { isValid: a } : {}), errors: s.errors }), t.shouldFocus && !i && he(o, ie, e ? n : w.mount), i);
     },
     le = (e, t) => {
      let r = { ...(A.mount ? v : m) };
      return (t && (r = z(t.dirtyFields ? s.dirtyFields : s.touchedFields, r)), y(e) ? r : B(e) ? p(r, e) : e.map((e) => p(r, e)));
     },
     de = (e, t) => ({ invalid: !!p((t || s).errors, e), isDirty: !!p((t || s).dirtyFields, e), error: p((t || s).errors, e), isValidating: !!p(s.validatingFields, e), isTouched: !!p((t || s).touchedFields, e) }),
     ge = (e, t, r) => {
      const a = (p(o, e, { _f: {} })._f || {}).ref,
       i = p(s.errors, e) || {},
       { ref: n, message: l, type: u, ...d } = i;
      (_(s.errors, e, { ...d, ...t, ref: a }), E.state.next({ name: e, errors: s.errors, isValid: !1 }), r && r.shouldFocus && a && a.focus && a.focus());
     },
     be = (e) =>
      E.state.subscribe({
       next: (t) => {
        var r, a, i;
        ((r = e.name),
         (a = t.name),
         (i = e.exact),
         (r && a && r !== a && !H(r).some((e) => e && (i ? e === a : e.startsWith(a) || a.startsWith(e)))) ||
          !((e, t, r, s) => {
           r(e);
           const { name: a, ...i } = e;
           return G(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((e) => t[e] === (!s || x));
          })(t, e.formState || D, Oe, e.reRenderRoot) ||
          e.callback({ values: { ...v }, ...s, ...t, defaultValues: m }));
       },
      }).unsubscribe,
     Fe = (e, t = {}) => {
      for (const a of e ? H(e) : w.mount) (w.mount.delete(a), w.array.delete(a), t.keepValue || (Z(o, a), Z(v, a)), !t.keepError && Z(s.errors, a), !t.keepDirty && Z(s.dirtyFields, a), !t.keepTouched && Z(s.touchedFields, a), !t.keepIsValidating && Z(s.validatingFields, a), !r.shouldUnregister && !t.keepDefaultValue && Z(m, a));
      (E.state.next({ values: f(v) }), E.state.next({ ...s, ...(t.keepDirty ? { isDirty: q() } : {}) }), !t.keepIsValid && j());
     },
     Ae = ({ disabled: e, name: t }) => {
      if ((g(e) && A.mount) || e || w.disabled.has(t)) {
       const r = w.disabled.has(t) !== !!e;
       (e ? w.disabled.add(t) : w.disabled.delete(t), r && A.mount && !A.action && j());
      }
     },
     we = (e, t = {}) => {
      let s = p(o, e);
      const i = g(t.disabled) || g(r.disabled);
      return (
       _(o, e, { ...(s || {}), _f: { ...(s && s._f ? s._f : { ref: { name: e } }), name: e, mount: !0, ...t } }),
       w.mount.add(e),
       s ? Ae({ disabled: g(t.disabled) ? t.disabled : r.disabled, name: e }) : T(e, !0, t.value),
       {
        ...(i ? { disabled: t.disabled || r.disabled } : {}),
        ...(r.progressive ? { required: !!t.required, min: ce(t.min), max: ce(t.max), minLength: ce(t.minLength), maxLength: ce(t.maxLength), pattern: ce(t.pattern) } : {}),
        name: e,
        onChange: ae,
        onBlur: ae,
        ref: (i) => {
         if (i) {
          (we(e, t), (s = p(o, e)));
          const r = (y(i.value) && i.querySelectorAll && i.querySelectorAll('input,select,textarea')[0]) || i,
           n = ((e) => X(e) || a(e))(r),
           l = s._f.refs || [];
          if (n ? l.find((e) => e === r) : r === s._f.ref) return;
          (_(o, e, { _f: { ...s._f, ...(n ? { refs: [...l.filter(Y), r, ...(Array.isArray(p(m, e)) ? [{}] : [])], ref: { type: r.type, name: e } } : { ref: r }) } }), T(e, !1, void 0, r));
         } else ((s = p(o, e, {})), s._f && (s._f.mount = !1), (r.shouldUnregister || t.shouldUnregister) && (!d(w.array, e) || !A.action) && w.unMount.add(e));
        },
       }
      );
     },
     ke = () => r.shouldFocusError && he(o, ie, w.mount),
     Se = (e, t) => async (a) => {
      let i;
      a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
      let n = f(v);
      if ((E.state.next({ isSubmitting: !0 }), r.resolver)) {
       const { errors: e, values: t } = await U();
       (N(), (s.errors = e), (n = f(t)));
      } else await I(o);
      if (w.disabled.size) for (const e of w.disabled) Z(n, e);
      if ((Z(s.errors, 'root'), G(s.errors))) {
       E.state.next({ errors: {} });
       try {
        await e(n, a);
       } catch (l) {
        i = l;
       }
      } else (t && (await t({ ...s.errors }, a)), ke(), setTimeout(ke));
      if ((E.state.next({ isSubmitted: !0, isSubmitting: !1, isSubmitSuccessful: G(s.errors) && !i, submitCount: s.submitCount + 1, errors: s.errors }), i)) throw i;
     },
     xe = (e, t = {}) => {
      const a = e ? f(e) : m,
       i = f(a),
       n = G(e),
       l = n ? m : i;
      if ((t.keepDefaultValues || (m = a), !t.keepValues)) {
       if (t.keepDirtyValues) {
        const e = new Set([...w.mount, ...Object.keys(re(m, v))]);
        for (const t of Array.from(e)) {
         const e = p(s.dirtyFields, t),
          r = p(v, t),
          a = p(l, t);
         e && !y(r) ? _(l, t, r) : e || y(a) || se(t, a);
        }
       } else {
        if (c && y(e))
         for (const e of w.mount) {
          const t = p(o, e);
          if (t && t._f) {
           const e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
           if (K(e)) {
            const t = e.closest('form');
            if (t) {
             t.reset();
             break;
            }
           }
          }
         }
        if (t.keepFieldsRef) for (const e of w.mount) se(e, p(l, e));
        else o = {};
       }
       ((v = r.shouldUnregister ? (t.keepDefaultValues ? f(m) : {}) : f(l)), E.array.next({ values: { ...l } }), E.state.next({ values: { ...l } }));
      }
      ((w = { mount: t.keepDirtyValues ? w.mount : new Set(), unMount: new Set(), array: new Set(), disabled: new Set(), watch: new Set(), watchAll: !1, focus: '' }), (A.mount = !D.isValid || !!t.keepIsValid || !!t.keepDirtyValues || (!r.shouldUnregister && !G(l))), (A.watch = !!r.shouldUnregister), (A.keepIsValid = !!t.keepIsValid), (A.action = !1), t.keepErrors || (s.errors = {}), E.state.next({ submitCount: t.keepSubmitCount ? s.submitCount : 0, isDirty: !n && (t.keepDirty ? s.isDirty : !(!t.keepDefaultValues || P(e, m))), isSubmitted: !!t.keepIsSubmitted && s.isSubmitted, dirtyFields: n ? {} : t.keepDirtyValues ? (t.keepDefaultValues && v ? re(m, v) : s.dirtyFields) : t.keepDefaultValues && e ? re(m, e) : t.keepDirty ? s.dirtyFields : {}, touchedFields: t.keepTouched ? s.touchedFields : {}, errors: t.keepErrors ? s.errors : {}, isSubmitSuccessful: !!t.keepIsSubmitSuccessful && s.isSubmitSuccessful, isSubmitting: !1, defaultValues: m }));
     },
     De = (e, t) => xe(b(e) ? e(v) : e, { ...r.resetOptions, ...t }),
     Oe = (e) => {
      s = { ...s, ...e };
     },
     Ee = {
      control: {
       register: we,
       unregister: Fe,
       getFieldState: de,
       handleSubmit: Se,
       setError: ge,
       _subscribe: be,
       _runSchema: U,
       _updateIsValidating: N,
       _focusError: ke,
       _getWatch: W,
       _getDirty: q,
       _setValid: j,
       _setFieldArray: (e, t = [], a, i, n = !0, l = !0) => {
        if (i && a && !r.disabled) {
         if (((A.action = !0), l && Array.isArray(p(o, e)))) {
          const t = a(p(o, e), i.argA, i.argB);
          n && _(o, e, t);
         }
         if (l && Array.isArray(p(s.errors, e))) {
          const t = a(p(s.errors, e), i.argA, i.argB);
          (n && _(s.errors, e, t),
           ((e, t) => {
            !h(p(e, t)).length && Z(e, t);
           })(s.errors, e));
         }
         if ((D.touchedFields || O.touchedFields) && l && Array.isArray(p(s.touchedFields, e))) {
          const t = a(p(s.touchedFields, e), i.argA, i.argB);
          n && _(s.touchedFields, e, t);
         }
         ((D.dirtyFields || O.dirtyFields) && (s.dirtyFields = re(m, v)), E.state.next({ name: e, isDirty: q(e, t), dirtyFields: s.dirtyFields, errors: s.errors, isValid: s.isValid }));
        } else _(v, e, t);
       },
       _setDisabledField: Ae,
       _setErrors: (e) => {
        ((s.errors = e), E.state.next({ errors: s.errors, isValid: !1 }));
       },
       _getFieldArray: (e) => h(p(A.mount ? v : m, e, r.shouldUnregister ? p(m, e, []) : [])),
       _reset: xe,
       _resetDefaultValues: () =>
        b(r.defaultValues) &&
        r.defaultValues().then((e) => {
         (De(e, r.resetOptions), E.state.next({ isLoading: !1 }));
        }),
       _removeUnmounted: () => {
        for (const e of w.unMount) {
         const t = p(o, e);
         t && (t._f.refs ? t._f.refs.every((e) => !Y(e)) : !Y(t._f.ref)) && Fe(e);
        }
        w.unMount = new Set();
       },
       _disableForm: (e) => {
        g(e) &&
         (E.state.next({ disabled: e }),
         he(
          o,
          (t, r) => {
           const s = p(o, r);
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
       _subjects: E,
       _proxyFormState: D,
       get _fields() {
        return o;
       },
       get _formValues() {
        return v;
       },
       get _state() {
        return A;
       },
       set _state(e) {
        A = e;
       },
       get _defaultValues() {
        return m;
       },
       get _names() {
        return w;
       },
       set _names(e) {
        w = e;
       },
       get _formState() {
        return s;
       },
       get _options() {
        return r;
       },
       set _options(e) {
        r = { ...r, ...e };
       },
      },
      subscribe: (e) => ((A.mount = !0), (O = { ...O, ...e.formState }), be({ ...e, formState: { ...S, ...e.formState } })),
      trigger: oe,
      register: we,
      handleSubmit: Se,
      watch: (e, t) => (b(e) ? E.state.subscribe({ next: (r) => 'values' in r && e(W(void 0, t), r) }) : W(e, t, !0)),
      setValue: se,
      getValues: le,
      reset: De,
      resetField: (e, t = {}) => {
       p(o, e) && (y(t.defaultValue) ? se(e, f(p(m, e))) : (se(e, t.defaultValue), _(m, e, f(t.defaultValue))), t.keepTouched || Z(s.touchedFields, e), t.keepDirty || (Z(s.dirtyFields, e), (s.isDirty = t.defaultValue ? q(e, f(p(m, e))) : q())), t.keepError || (Z(s.errors, e), D.isValid && j()), E.state.next({ ...s }));
      },
      clearErrors: (e) => {
       (e && H(e).forEach((e) => Z(s.errors, e)), E.state.next({ errors: e ? s.errors : {} }));
      },
      unregister: Fe,
      setError: ge,
      setFocus: (e, t = {}) => {
       const r = p(o, e),
        s = r && r._f;
       if (s) {
        const e = s.refs ? s.refs[0] : s.ref;
        e.focus &&
         setTimeout(() => {
          (e.focus(), t.shouldSelect && b(e.select) && e.select());
         });
       }
      },
      getFieldState: de,
     };
    return { ...Ee, formControl: Ee };
   }
   function Ae(e = {}) {
    const t = s.useRef(void 0),
     r = s.useRef(void 0),
     [a, i] = s.useState({ isDirty: !1, isValidating: !1, isLoading: b(e.defaultValues), isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, submitCount: 0, dirtyFields: {}, touchedFields: {}, validatingFields: {}, errors: e.errors || {}, disabled: e.disabled || !1, isReady: !1, defaultValues: b(e.defaultValues) ? void 0 : e.defaultValues });
    if (!t.current)
     if (e.formControl) ((t.current = { ...e.formControl, formState: a }), e.defaultValues && !b(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions));
     else {
      const { formControl: r, ...s } = Fe(e);
      t.current = { ...s, formState: a };
     }
    const n = t.current.control;
    return (
     (n._options = e),
     U(() => {
      const e = n._subscribe({ formState: n._proxyFormState, callback: () => i({ ...n._formState }), reRenderRoot: !0 });
      return (i((e) => ({ ...e, isReady: !0 })), (n._formState.isReady = !0), e);
     }, [n]),
     s.useEffect(() => n._disableForm(e.disabled), [n, e.disabled]),
     s.useEffect(() => {
      (e.mode && (n._options.mode = e.mode), e.reValidateMode && (n._options.reValidateMode = e.reValidateMode));
     }, [n, e.mode, e.reValidateMode]),
     s.useEffect(() => {
      e.errors && (n._setErrors(e.errors), n._focusError());
     }, [n, e.errors]),
     s.useEffect(() => {
      e.shouldUnregister && n._subjects.state.next({ values: n._getWatch() });
     }, [n, e.shouldUnregister]),
     s.useEffect(() => {
      if (n._proxyFormState.isDirty) {
       const e = n._getDirty();
       e !== a.isDirty && n._subjects.state.next({ isDirty: e });
      }
     }, [n, a.isDirty]),
     s.useEffect(() => {
      var t;
      e.values && !P(e.values, r.current) ? (n._reset(e.values, { keepFieldsRef: !0, ...n._options.resetOptions }), (null === (t = n._options.resetOptions) || void 0 === t ? void 0 : t.keepIsValid) || n._setValid(), (r.current = e.values), i((e) => ({ ...e }))) : n._resetDefaultValues();
     }, [n, e.values]),
     s.useEffect(() => {
      (n._state.mount || (n._setValid(), (n._state.mount = !0)), n._state.watch && ((n._state.watch = !1), n._subjects.state.next({ ...n._formState })), n._removeUnmounted());
     }),
     (t.current.formState = s.useMemo(() => M(a, n), [n, a])),
     t.current
    );
   }
  },
 },
]);
