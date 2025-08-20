/*! For license information please see 96879.ebe74901.js.LICENSE.txt */
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [96879],
 {
  35519: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => r });
   const r = () => null;
  },
  73497: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => A });
   var r = t(75271),
    o = t(52676);
   function i(e) {
    const { mdxAdmonitionTitle: n, rest: t } = (function (e) {
      const n = r.Children.toArray(e),
       t = n.find((e) => r.isValidElement(e) && 'mdxAdmonitionTitle' === e.type),
       i = n.filter((e) => e !== t),
       l = t?.props.children;
      return { mdxAdmonitionTitle: l, rest: i.length > 0 ? (0, o.jsx)(o.Fragment, { children: i }) : null };
     })(e.children),
     i = e.title ?? n;
    return { ...e, ...(i && { title: i }), children: t };
   }
   var l = t(4814),
    a = t(40217),
    s = t(65697);
   const c = { admonition: 'admonition_rxXX', admonitionHeading: 'admonitionHeading_eMFo', admonitionIcon: 'admonitionIcon_EbBA', admonitionContent: 'admonitionContent_GPTu' };
   function u(e) {
    let { type: n, className: t, children: r } = e;
    return (0, o.jsx)('div', { className: (0, l.Z)(s.k.common.admonition, s.k.common.admonitionType(n), c.admonition, t), children: r });
   }
   function f(e) {
    let { icon: n, title: t } = e;
    return (0, o.jsxs)('div', { className: c.admonitionHeading, children: [(0, o.jsx)('span', { className: c.admonitionIcon, children: n }), t] });
   }
   function p(e) {
    let { children: n } = e;
    return n ? (0, o.jsx)('div', { className: c.admonitionContent, children: n }) : null;
   }
   function d(e) {
    const { type: n, icon: t, title: r, children: i, className: l } = e;
    return (0, o.jsxs)(u, { type: n, className: l, children: [(0, o.jsx)(f, { title: r, icon: t }), (0, o.jsx)(p, { children: i })] });
   }
   function h(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z' }) });
   }
   const m = { icon: (0, o.jsx)(h, {}), title: (0, o.jsx)(a.Z, { id: 'theme.admonition.note', description: 'The default label used for the Note admonition (:::note)', children: 'note' }) };
   function g(e) {
    return (0, o.jsx)(d, { ...m, ...e, className: (0, l.Z)('alert alert--secondary', e.className), children: e.children });
   }
   function y(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z' }) });
   }
   const x = { icon: (0, o.jsx)(y, {}), title: (0, o.jsx)(a.Z, { id: 'theme.admonition.tip', description: 'The default label used for the Tip admonition (:::tip)', children: 'tip' }) };
   function v(e) {
    return (0, o.jsx)(d, { ...x, ...e, className: (0, l.Z)('alert alert--success', e.className), children: e.children });
   }
   function k(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 14 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z' }) });
   }
   const b = { icon: (0, o.jsx)(k, {}), title: (0, o.jsx)(a.Z, { id: 'theme.admonition.info', description: 'The default label used for the Info admonition (:::info)', children: 'info' }) };
   function w(e) {
    return (0, o.jsx)(d, { ...b, ...e, className: (0, l.Z)('alert alert--info', e.className), children: e.children });
   }
   function S(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 16 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z' }) });
   }
   const C = { icon: (0, o.jsx)(S, {}), title: (0, o.jsx)(a.Z, { id: 'theme.admonition.warning', description: 'The default label used for the Warning admonition (:::warning)', children: 'warning' }) };
   function E(e) {
    return (0, o.jsx)('svg', { viewBox: '0 0 12 16', ...e, children: (0, o.jsx)('path', { fillRule: 'evenodd', d: 'M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z' }) });
   }
   const P = { icon: (0, o.jsx)(E, {}), title: (0, o.jsx)(a.Z, { id: 'theme.admonition.danger', description: 'The default label used for the Danger admonition (:::danger)', children: 'danger' }) };
   const T = { icon: (0, o.jsx)(S, {}), title: (0, o.jsx)(a.Z, { id: 'theme.admonition.caution', description: 'The default label used for the Caution admonition (:::caution)', children: 'caution' }) };
   const I = {
    ...{
     note: g,
     tip: v,
     info: w,
     warning: function (e) {
      return (0, o.jsx)(d, { ...C, ...e, className: (0, l.Z)('alert alert--warning', e.className), children: e.children });
     },
     danger: function (e) {
      return (0, o.jsx)(d, { ...P, ...e, className: (0, l.Z)('alert alert--danger', e.className), children: e.children });
     },
    },
    ...{
     secondary: (e) => (0, o.jsx)(g, { title: 'secondary', ...e }),
     important: (e) => (0, o.jsx)(w, { title: 'important', ...e }),
     success: (e) => (0, o.jsx)(v, { title: 'success', ...e }),
     caution: function (e) {
      return (0, o.jsx)(d, { ...T, ...e, className: (0, l.Z)('alert alert--warning', e.className), children: e.children });
     },
    },
   };
   function A(e) {
    const n = i(e),
     t = ((r = n.type), I[r] || (console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`), I.info));
    var r;
    return (0, o.jsx)(t, { ...n });
   }
  },
  27583: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => h });
   var r = t(75271),
    o = t(4814),
    i = t(97674),
    l = t(96401);
   const a = { details: 'details_pUJb', isBrowser: 'isBrowser__m4A', collapsibleContent: 'collapsibleContent_lHT6' };
   var s = t(52676);
   function c(e) {
    return !!e && ('SUMMARY' === e.tagName || c(e.parentElement));
   }
   function u(e, n) {
    return !!e && (e === n || u(e.parentElement, n));
   }
   function f(e) {
    let { summary: n, children: t, ...f } = e;
    const p = (0, i.Z)(),
     d = (0, r.useRef)(null),
     { collapsed: h, setCollapsed: m } = (0, l.u)({ initialState: !f.open }),
     [g, y] = (0, r.useState)(f.open),
     x = r.isValidElement(n) ? n : (0, s.jsx)('summary', { children: n ?? 'Details' });
    return (0, s.jsxs)('details', {
     ...f,
     ref: d,
     open: g,
     'data-collapsed': h,
     className: (0, o.Z)(a.details, p && a.isBrowser, f.className),
     onMouseDown: (e) => {
      c(e.target) && e.detail > 1 && e.preventDefault();
     },
     onClick: (e) => {
      e.stopPropagation();
      const n = e.target;
      c(n) && u(n, d.current) && (e.preventDefault(), h ? (m(!1), y(!0)) : m(!0));
     },
     children: [
      x,
      (0, s.jsx)(l.z, {
       lazy: !1,
       collapsed: h,
       disableSSRStyle: !0,
       onCollapseTransitionEnd: (e) => {
        m(e), y(!e);
       },
       children: (0, s.jsx)('div', { className: a.collapsibleContent, children: t }),
      }),
     ],
    });
   }
   const p = { details: 'details_hleR' },
    d = 'alert alert--info';
   function h(e) {
    let { ...n } = e;
    return (0, s.jsx)(f, { ...n, className: (0, o.Z)(d, p.details, n.className) });
   }
  },
  27396: (e) => {
   'use strict';
   var n = Object.prototype.hasOwnProperty,
    t = Object.prototype.toString,
    r = Object.defineProperty,
    o = Object.getOwnPropertyDescriptor,
    i = function (e) {
     return 'function' == typeof Array.isArray ? Array.isArray(e) : '[object Array]' === t.call(e);
    },
    l = function (e) {
     if (!e || '[object Object]' !== t.call(e)) return !1;
     var r,
      o = n.call(e, 'constructor'),
      i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, 'isPrototypeOf');
     if (e.constructor && !o && !i) return !1;
     for (r in e);
     return void 0 === r || n.call(e, r);
    },
    a = function (e, n) {
     r && '__proto__' === n.name ? r(e, n.name, { enumerable: !0, configurable: !0, value: n.newValue, writable: !0 }) : (e[n.name] = n.newValue);
    },
    s = function (e, t) {
     if ('__proto__' === t) {
      if (!n.call(e, t)) return;
      if (o) return o(e, t).value;
     }
     return e[t];
    };
   e.exports = function e() {
    var n,
     t,
     r,
     o,
     c,
     u,
     f = arguments[0],
     p = 1,
     d = arguments.length,
     h = !1;
    for ('boolean' == typeof f && ((h = f), (f = arguments[1] || {}), (p = 2)), (null == f || ('object' != typeof f && 'function' != typeof f)) && (f = {}); p < d; ++p) if (null != (n = arguments[p])) for (t in n) (r = s(f, t)), f !== (o = s(n, t)) && (h && o && (l(o) || (c = i(o))) ? (c ? ((c = !1), (u = r && i(r) ? r : [])) : (u = r && l(r) ? r : {}), a(f, { name: t, newValue: e(h, u, o) })) : void 0 !== o && a(f, { name: t, newValue: o }));
    return f;
   };
  },
  82640: (e) => {
   var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    t = /\n/g,
    r = /^\s*/,
    o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    i = /^:\s*/,
    l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    a = /^[;\s]*/,
    s = /^\s+|\s+$/g,
    c = '';
   function u(e) {
    return e ? e.replace(s, c) : c;
   }
   e.exports = function (e, s) {
    if ('string' != typeof e) throw new TypeError('First argument must be a string');
    if (!e) return [];
    s = s || {};
    var f = 1,
     p = 1;
    function d(e) {
     var n = e.match(t);
     n && (f += n.length);
     var r = e.lastIndexOf('\n');
     p = ~r ? e.length - r : p + e.length;
    }
    function h() {
     var e = { line: f, column: p };
     return function (n) {
      return (n.position = new m(e)), v(), n;
     };
    }
    function m(e) {
     (this.start = e), (this.end = { line: f, column: p }), (this.source = s.source);
    }
    m.prototype.content = e;
    var g = [];
    function y(n) {
     var t = new Error(s.source + ':' + f + ':' + p + ': ' + n);
     if (((t.reason = n), (t.filename = s.source), (t.line = f), (t.column = p), (t.source = e), !s.silent)) throw t;
     g.push(t);
    }
    function x(n) {
     var t = n.exec(e);
     if (t) {
      var r = t[0];
      return d(r), (e = e.slice(r.length)), t;
     }
    }
    function v() {
     x(r);
    }
    function k(e) {
     var n;
     for (e = e || []; (n = b()); ) !1 !== n && e.push(n);
     return e;
    }
    function b() {
     var n = h();
     if ('/' == e.charAt(0) && '*' == e.charAt(1)) {
      for (var t = 2; c != e.charAt(t) && ('*' != e.charAt(t) || '/' != e.charAt(t + 1)); ) ++t;
      if (((t += 2), c === e.charAt(t - 1))) return y('End of comment missing');
      var r = e.slice(2, t - 2);
      return (p += 2), d(r), (e = e.slice(t)), (p += 2), n({ type: 'comment', comment: r });
     }
    }
    function w() {
     var e = h(),
      t = x(o);
     if (t) {
      if ((b(), !x(i))) return y("property missing ':'");
      var r = x(l),
       s = e({ type: 'declaration', property: u(t[0].replace(n, c)), value: r ? u(r[0].replace(n, c)) : c });
      return x(a), s;
     }
    }
    return (
     v(),
     (function () {
      var e,
       n = [];
      for (k(n); (e = w()); ) !1 !== e && (n.push(e), k(n));
      return n;
     })()
    );
   };
  },
  4075: function (e, n, t) {
   'use strict';
   var r =
    (this && this.__importDefault) ||
    function (e) {
     return e && e.__esModule ? e : { default: e };
    };
   Object.defineProperty(n, '__esModule', { value: !0 }),
    (n.default = function (e, n) {
     var t = null;
     if (!e || 'string' != typeof e) return t;
     var r = (0, o.default)(e),
      i = 'function' == typeof n;
     return (
      r.forEach(function (e) {
       if ('declaration' === e.type) {
        var r = e.property,
         o = e.value;
        i ? n(r, o, e) : o && ((t = t || {})[r] = o);
       }
      }),
      t
     );
    });
   var o = r(t(82640));
  },
  20061: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => r });
   var r = (0, t(72315).Z)('outline', 'mood-happy', 'IconMoodHappy', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  69244: (e, n, t) => {
   'use strict';
   t.d(n, { Z: () => r });
   var r = (0, t(72315).Z)('outline', 'mood-sad', 'IconMoodSad', [
    ['path', { d: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
  97626: (e, n, t) => {
   'use strict';
   t.d(n, { UG: () => Ir });
   var r = {};
   t.r(r), t.d(r, { boolean: () => g, booleanish: () => y, commaOrSpaceSeparated: () => w, commaSeparated: () => b, number: () => v, overloadedBoolean: () => x, spaceSeparated: () => k });
   var o = {};
   t.r(o), t.d(o, { attentionMarkers: () => nt, contentInitial: () => Xn, disable: () => tt, document: () => Qn, flow: () => $n, flowInitial: () => Yn, insideSpan: () => et, string: () => Jn, text: () => Gn });
   const i = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    l = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    a = {};
   function s(e, n) {
    return ((n || a).jsx ? l : i).test(e);
   }
   const c = /[ \t\n\f\r]/g;
   function u(e) {
    return '' === e.replace(c, '');
   }
   class f {
    constructor(e, n, t) {
     (this.property = e), (this.normal = n), t && (this.space = t);
    }
   }
   function p(e, n) {
    const t = {},
     r = {};
    let o = -1;
    for (; ++o < e.length; ) Object.assign(t, e[o].property), Object.assign(r, e[o].normal);
    return new f(t, r, n);
   }
   function d(e) {
    return e.toLowerCase();
   }
   (f.prototype.property = {}), (f.prototype.normal = {}), (f.prototype.space = null);
   class h {
    constructor(e, n) {
     (this.property = e), (this.attribute = n);
    }
   }
   (h.prototype.space = null), (h.prototype.boolean = !1), (h.prototype.booleanish = !1), (h.prototype.overloadedBoolean = !1), (h.prototype.number = !1), (h.prototype.commaSeparated = !1), (h.prototype.spaceSeparated = !1), (h.prototype.commaOrSpaceSeparated = !1), (h.prototype.mustUseProperty = !1), (h.prototype.defined = !1);
   let m = 0;
   const g = S(),
    y = S(),
    x = S(),
    v = S(),
    k = S(),
    b = S(),
    w = S();
   function S() {
    return 2 ** ++m;
   }
   const C = Object.keys(r);
   class E extends h {
    constructor(e, n, t, o) {
     let i = -1;
     if ((super(e, n), P(this, 'space', o), 'number' == typeof t))
      for (; ++i < C.length; ) {
       const e = C[i];
       P(this, C[i], (t & r[e]) === r[e]);
      }
    }
   }
   function P(e, n, t) {
    t && (e[n] = t);
   }
   E.prototype.defined = !0;
   const T = {}.hasOwnProperty;
   function I(e) {
    const n = {},
     t = {};
    let r;
    for (r in e.properties)
     if (T.call(e.properties, r)) {
      const o = e.properties[r],
       i = new E(r, e.transform(e.attributes || {}, r), o, e.space);
      e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), (n[r] = i), (t[d(r)] = r), (t[d(i.attribute)] = r);
     }
    return new f(n, t, e.space);
   }
   const A = I({ space: 'xlink', transform: (e, n) => 'xlink:' + n.slice(5).toLowerCase(), properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } }),
    O = I({ space: 'xml', transform: (e, n) => 'xml:' + n.slice(3).toLowerCase(), properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
   function j(e, n) {
    return n in e ? e[n] : n;
   }
   function D(e, n) {
    return j(e, n.toLowerCase());
   }
   const L = I({ space: 'xmlns', attributes: { xmlnsxlink: 'xmlns:xlink' }, transform: D, properties: { xmlns: null, xmlnsXLink: null } }),
    z = I({ transform: (e, n) => ('role' === n ? n : 'aria-' + n.slice(4).toLowerCase()), properties: { ariaActiveDescendant: null, ariaAtomic: y, ariaAutoComplete: null, ariaBusy: y, ariaChecked: y, ariaColCount: v, ariaColIndex: v, ariaColSpan: v, ariaControls: k, ariaCurrent: null, ariaDescribedBy: k, ariaDetails: null, ariaDisabled: y, ariaDropEffect: k, ariaErrorMessage: null, ariaExpanded: y, ariaFlowTo: k, ariaGrabbed: y, ariaHasPopup: null, ariaHidden: y, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: k, ariaLevel: v, ariaLive: null, ariaModal: y, ariaMultiLine: y, ariaMultiSelectable: y, ariaOrientation: null, ariaOwns: k, ariaPlaceholder: null, ariaPosInSet: v, ariaPressed: y, ariaReadOnly: y, ariaRelevant: null, ariaRequired: y, ariaRoleDescription: k, ariaRowCount: v, ariaRowIndex: v, ariaRowSpan: v, ariaSelected: y, ariaSetSize: v, ariaSort: null, ariaValueMax: v, ariaValueMin: v, ariaValueNow: v, ariaValueText: null, role: null } }),
    M = I({ space: 'html', attributes: { acceptcharset: 'accept-charset', classname: 'class', htmlfor: 'for', httpequiv: 'http-equiv' }, transform: D, mustUseProperty: ['checked', 'multiple', 'muted', 'selected'], properties: { abbr: null, accept: b, acceptCharset: k, accessKey: k, action: null, allow: null, allowFullScreen: g, allowPaymentRequest: g, allowUserMedia: g, alt: null, as: null, async: g, autoCapitalize: null, autoComplete: k, autoFocus: g, autoPlay: g, blocking: k, capture: g, charSet: null, checked: g, cite: null, className: k, cols: v, colSpan: null, content: null, contentEditable: y, controls: g, controlsList: k, coords: v | b, crossOrigin: null, data: null, dateTime: null, decoding: null, default: g, defer: g, dir: null, dirName: null, disabled: g, download: x, draggable: y, encType: null, enterKeyHint: null, fetchPriority: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: g, formTarget: null, headers: k, height: v, hidden: g, high: v, href: null, hrefLang: null, htmlFor: k, httpEquiv: k, id: null, imageSizes: null, imageSrcSet: null, inert: g, inputMode: null, integrity: null, is: null, isMap: g, itemId: null, itemProp: k, itemRef: k, itemScope: g, itemType: k, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: g, low: v, manifest: null, max: null, maxLength: v, media: null, method: null, min: null, minLength: v, multiple: g, muted: g, name: null, nonce: null, noModule: g, noValidate: g, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforeMatch: null, onBeforePrint: null, onBeforeToggle: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextLost: null, onContextMenu: null, onContextRestored: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onScrollEnd: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: g, optimum: v, pattern: null, ping: k, placeholder: null, playsInline: g, popover: null, popoverTarget: null, popoverTargetAction: null, poster: null, preload: null, readOnly: g, referrerPolicy: null, rel: k, required: g, reversed: g, rows: v, rowSpan: v, sandbox: k, scope: null, scoped: g, seamless: g, selected: g, shadowRootDelegatesFocus: g, shadowRootMode: null, shape: null, size: v, sizes: null, slot: null, span: v, spellCheck: y, src: null, srcDoc: null, srcLang: null, srcSet: null, start: v, step: null, style: null, tabIndex: v, target: null, title: null, translate: null, type: null, typeMustMatch: g, useMap: null, value: y, width: v, wrap: null, align: null, aLink: null, archive: k, axis: null, background: null, bgColor: null, border: v, borderColor: null, bottomMargin: v, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: g, declare: g, event: null, face: null, frame: null, frameBorder: null, hSpace: v, leftMargin: v, link: null, longDesc: null, lowSrc: null, marginHeight: v, marginWidth: v, noResize: g, noHref: g, noShade: g, noWrap: g, object: null, profile: null, prompt: null, rev: null, rightMargin: v, rules: null, scheme: null, scrolling: y, standby: null, summary: null, text: null, topMargin: v, valueType: null, version: null, vAlign: null, vLink: null, vSpace: v, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: g, disableRemotePlayback: g, prefix: null, property: null, results: v, security: null, unselectable: null } }),
    N = I({ space: 'svg', attributes: { accentHeight: 'accent-height', alignmentBaseline: 'alignment-baseline', arabicForm: 'arabic-form', baselineShift: 'baseline-shift', capHeight: 'cap-height', className: 'class', clipPath: 'clip-path', clipRule: 'clip-rule', colorInterpolation: 'color-interpolation', colorInterpolationFilters: 'color-interpolation-filters', colorProfile: 'color-profile', colorRendering: 'color-rendering', crossOrigin: 'crossorigin', dataType: 'datatype', dominantBaseline: 'dominant-baseline', enableBackground: 'enable-background', fillOpacity: 'fill-opacity', fillRule: 'fill-rule', floodColor: 'flood-color', floodOpacity: 'flood-opacity', fontFamily: 'font-family', fontSize: 'font-size', fontSizeAdjust: 'font-size-adjust', fontStretch: 'font-stretch', fontStyle: 'font-style', fontVariant: 'font-variant', fontWeight: 'font-weight', glyphName: 'glyph-name', glyphOrientationHorizontal: 'glyph-orientation-horizontal', glyphOrientationVertical: 'glyph-orientation-vertical', hrefLang: 'hreflang', horizAdvX: 'horiz-adv-x', horizOriginX: 'horiz-origin-x', horizOriginY: 'horiz-origin-y', imageRendering: 'image-rendering', letterSpacing: 'letter-spacing', lightingColor: 'lighting-color', markerEnd: 'marker-end', markerMid: 'marker-mid', markerStart: 'marker-start', navDown: 'nav-down', navDownLeft: 'nav-down-left', navDownRight: 'nav-down-right', navLeft: 'nav-left', navNext: 'nav-next', navPrev: 'nav-prev', navRight: 'nav-right', navUp: 'nav-up', navUpLeft: 'nav-up-left', navUpRight: 'nav-up-right', onAbort: 'onabort', onActivate: 'onactivate', onAfterPrint: 'onafterprint', onBeforePrint: 'onbeforeprint', onBegin: 'onbegin', onCancel: 'oncancel', onCanPlay: 'oncanplay', onCanPlayThrough: 'oncanplaythrough', onChange: 'onchange', onClick: 'onclick', onClose: 'onclose', onCopy: 'oncopy', onCueChange: 'oncuechange', onCut: 'oncut', onDblClick: 'ondblclick', onDrag: 'ondrag', onDragEnd: 'ondragend', onDragEnter: 'ondragenter', onDragExit: 'ondragexit', onDragLeave: 'ondragleave', onDragOver: 'ondragover', onDragStart: 'ondragstart', onDrop: 'ondrop', onDurationChange: 'ondurationchange', onEmptied: 'onemptied', onEnd: 'onend', onEnded: 'onended', onError: 'onerror', onFocus: 'onfocus', onFocusIn: 'onfocusin', onFocusOut: 'onfocusout', onHashChange: 'onhashchange', onInput: 'oninput', onInvalid: 'oninvalid', onKeyDown: 'onkeydown', onKeyPress: 'onkeypress', onKeyUp: 'onkeyup', onLoad: 'onload', onLoadedData: 'onloadeddata', onLoadedMetadata: 'onloadedmetadata', onLoadStart: 'onloadstart', onMessage: 'onmessage', onMouseDown: 'onmousedown', onMouseEnter: 'onmouseenter', onMouseLeave: 'onmouseleave', onMouseMove: 'onmousemove', onMouseOut: 'onmouseout', onMouseOver: 'onmouseover', onMouseUp: 'onmouseup', onMouseWheel: 'onmousewheel', onOffline: 'onoffline', onOnline: 'ononline', onPageHide: 'onpagehide', onPageShow: 'onpageshow', onPaste: 'onpaste', onPause: 'onpause', onPlay: 'onplay', onPlaying: 'onplaying', onPopState: 'onpopstate', onProgress: 'onprogress', onRateChange: 'onratechange', onRepeat: 'onrepeat', onReset: 'onreset', onResize: 'onresize', onScroll: 'onscroll', onSeeked: 'onseeked', onSeeking: 'onseeking', onSelect: 'onselect', onShow: 'onshow', onStalled: 'onstalled', onStorage: 'onstorage', onSubmit: 'onsubmit', onSuspend: 'onsuspend', onTimeUpdate: 'ontimeupdate', onToggle: 'ontoggle', onUnload: 'onunload', onVolumeChange: 'onvolumechange', onWaiting: 'onwaiting', onZoom: 'onzoom', overlinePosition: 'overline-position', overlineThickness: 'overline-thickness', paintOrder: 'paint-order', panose1: 'panose-1', pointerEvents: 'pointer-events', referrerPolicy: 'referrerpolicy', renderingIntent: 'rendering-intent', shapeRendering: 'shape-rendering', stopColor: 'stop-color', stopOpacity: 'stop-opacity', strikethroughPosition: 'strikethrough-position', strikethroughThickness: 'strikethrough-thickness', strokeDashArray: 'stroke-dasharray', strokeDashOffset: 'stroke-dashoffset', strokeLineCap: 'stroke-linecap', strokeLineJoin: 'stroke-linejoin', strokeMiterLimit: 'stroke-miterlimit', strokeOpacity: 'stroke-opacity', strokeWidth: 'stroke-width', tabIndex: 'tabindex', textAnchor: 'text-anchor', textDecoration: 'text-decoration', textRendering: 'text-rendering', transformOrigin: 'transform-origin', typeOf: 'typeof', underlinePosition: 'underline-position', underlineThickness: 'underline-thickness', unicodeBidi: 'unicode-bidi', unicodeRange: 'unicode-range', unitsPerEm: 'units-per-em', vAlphabetic: 'v-alphabetic', vHanging: 'v-hanging', vIdeographic: 'v-ideographic', vMathematical: 'v-mathematical', vectorEffect: 'vector-effect', vertAdvY: 'vert-adv-y', vertOriginX: 'vert-origin-x', vertOriginY: 'vert-origin-y', wordSpacing: 'word-spacing', writingMode: 'writing-mode', xHeight: 'x-height', playbackOrder: 'playbackorder', timelineBegin: 'timelinebegin' }, transform: j, properties: { about: w, accentHeight: v, accumulate: null, additive: null, alignmentBaseline: null, alphabetic: v, amplitude: v, arabicForm: null, ascent: v, attributeName: null, attributeType: null, azimuth: v, bandwidth: null, baselineShift: null, baseFrequency: null, baseProfile: null, bbox: null, begin: null, bias: v, by: null, calcMode: null, capHeight: v, className: k, clip: null, clipPath: null, clipPathUnits: null, clipRule: null, color: null, colorInterpolation: null, colorInterpolationFilters: null, colorProfile: null, colorRendering: null, content: null, contentScriptType: null, contentStyleType: null, crossOrigin: null, cursor: null, cx: null, cy: null, d: null, dataType: null, defaultAction: null, descent: v, diffuseConstant: v, direction: null, display: null, dur: null, divisor: v, dominantBaseline: null, download: g, dx: null, dy: null, edgeMode: null, editable: null, elevation: v, enableBackground: null, end: null, event: null, exponent: v, externalResourcesRequired: null, fill: null, fillOpacity: v, fillRule: null, filter: null, filterRes: null, filterUnits: null, floodColor: null, floodOpacity: null, focusable: null, focusHighlight: null, fontFamily: null, fontSize: null, fontSizeAdjust: null, fontStretch: null, fontStyle: null, fontVariant: null, fontWeight: null, format: null, fr: null, from: null, fx: null, fy: null, g1: b, g2: b, glyphName: b, glyphOrientationHorizontal: null, glyphOrientationVertical: null, glyphRef: null, gradientTransform: null, gradientUnits: null, handler: null, hanging: v, hatchContentUnits: null, hatchUnits: null, height: null, href: null, hrefLang: null, horizAdvX: v, horizOriginX: v, horizOriginY: v, id: null, ideographic: v, imageRendering: null, initialVisibility: null, in: null, in2: null, intercept: v, k: v, k1: v, k2: v, k3: v, k4: v, kernelMatrix: w, kernelUnitLength: null, keyPoints: null, keySplines: null, keyTimes: null, kerning: null, lang: null, lengthAdjust: null, letterSpacing: null, lightingColor: null, limitingConeAngle: v, local: null, markerEnd: null, markerMid: null, markerStart: null, markerHeight: null, markerUnits: null, markerWidth: null, mask: null, maskContentUnits: null, maskUnits: null, mathematical: null, max: null, media: null, mediaCharacterEncoding: null, mediaContentEncodings: null, mediaSize: v, mediaTime: null, method: null, min: null, mode: null, name: null, navDown: null, navDownLeft: null, navDownRight: null, navLeft: null, navNext: null, navPrev: null, navRight: null, navUp: null, navUpLeft: null, navUpRight: null, numOctaves: null, observer: null, offset: null, onAbort: null, onActivate: null, onAfterPrint: null, onBeforePrint: null, onBegin: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnd: null, onEnded: null, onError: null, onFocus: null, onFocusIn: null, onFocusOut: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadStart: null, onMessage: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onMouseWheel: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRepeat: null, onReset: null, onResize: null, onScroll: null, onSeeked: null, onSeeking: null, onSelect: null, onShow: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnload: null, onVolumeChange: null, onWaiting: null, onZoom: null, opacity: null, operator: null, order: null, orient: null, orientation: null, origin: null, overflow: null, overlay: null, overlinePosition: v, overlineThickness: v, paintOrder: null, panose1: null, path: null, pathLength: v, patternContentUnits: null, patternTransform: null, patternUnits: null, phase: null, ping: k, pitch: null, playbackOrder: null, pointerEvents: null, points: null, pointsAtX: v, pointsAtY: v, pointsAtZ: v, preserveAlpha: null, preserveAspectRatio: null, primitiveUnits: null, propagate: null, property: w, r: null, radius: null, referrerPolicy: null, refX: null, refY: null, rel: w, rev: w, renderingIntent: null, repeatCount: null, repeatDur: null, requiredExtensions: w, requiredFeatures: w, requiredFonts: w, requiredFormats: w, resource: null, restart: null, result: null, rotate: null, rx: null, ry: null, scale: null, seed: null, shapeRendering: null, side: null, slope: null, snapshotTime: null, specularConstant: v, specularExponent: v, spreadMethod: null, spacing: null, startOffset: null, stdDeviation: null, stemh: null, stemv: null, stitchTiles: null, stopColor: null, stopOpacity: null, strikethroughPosition: v, strikethroughThickness: v, string: null, stroke: null, strokeDashArray: w, strokeDashOffset: null, strokeLineCap: null, strokeLineJoin: null, strokeMiterLimit: v, strokeOpacity: v, strokeWidth: null, style: null, surfaceScale: v, syncBehavior: null, syncBehaviorDefault: null, syncMaster: null, syncTolerance: null, syncToleranceDefault: null, systemLanguage: w, tabIndex: v, tableValues: null, target: null, targetX: v, targetY: v, textAnchor: null, textDecoration: null, textRendering: null, textLength: null, timelineBegin: null, title: null, transformBehavior: null, type: null, typeOf: w, to: null, transform: null, transformOrigin: null, u1: null, u2: null, underlinePosition: v, underlineThickness: v, unicode: null, unicodeBidi: null, unicodeRange: null, unitsPerEm: v, values: null, vAlphabetic: v, vMathematical: v, vectorEffect: null, vHanging: v, vIdeographic: v, version: null, vertAdvY: v, vertOriginX: v, vertOriginY: v, viewBox: null, viewTarget: null, visibility: null, width: null, widths: null, wordSpacing: null, writingMode: null, x: null, x1: null, x2: null, xChannelSelector: null, xHeight: v, y: null, y1: null, y2: null, yChannelSelector: null, z: null, zoomAndPan: null } }),
    F = p([O, A, L, z, M], 'html'),
    R = p([O, A, L, z, N], 'svg'),
    _ = /^data[-\w.:]+$/i,
    B = /-[a-z]/g,
    H = /[A-Z]/g;
   function U(e) {
    return '-' + e.toLowerCase();
   }
   function V(e) {
    return e.charAt(1).toUpperCase();
   }
   const q = { classId: 'classID', dataType: 'datatype', itemId: 'itemID', strokeDashArray: 'strokeDasharray', strokeDashOffset: 'strokeDashoffset', strokeLineCap: 'strokeLinecap', strokeLineJoin: 'strokeLinejoin', strokeMiterLimit: 'strokeMiterlimit', typeOf: 'typeof', xLinkActuate: 'xlinkActuate', xLinkArcRole: 'xlinkArcrole', xLinkHref: 'xlinkHref', xLinkRole: 'xlinkRole', xLinkShow: 'xlinkShow', xLinkTitle: 'xlinkTitle', xLinkType: 'xlinkType', xmlnsXLink: 'xmlnsXlink' };
   var Z = t(4075);
   const W = Z.default || Z,
    K = X('end'),
    Q = X('start');
   function X(e) {
    return function (n) {
     const t = (n && n.position && n.position[e]) || {};
     if ('number' == typeof t.line && t.line > 0 && 'number' == typeof t.column && t.column > 0) return { line: t.line, column: t.column, offset: 'number' == typeof t.offset && t.offset > -1 ? t.offset : void 0 };
    };
   }
   function Y(e) {
    return e && 'object' == typeof e ? ('position' in e || 'type' in e ? J(e.position) : 'start' in e || 'end' in e ? J(e) : 'line' in e || 'column' in e ? $(e) : '') : '';
   }
   function $(e) {
    return G(e && e.line) + ':' + G(e && e.column);
   }
   function J(e) {
    return $(e && e.start) + '-' + $(e && e.end);
   }
   function G(e) {
    return e && 'number' == typeof e ? e : 1;
   }
   class ee extends Error {
    constructor(e, n, t) {
     super(), 'string' == typeof n && ((t = n), (n = void 0));
     let r = '',
      o = {},
      i = !1;
     if ((n && (o = ('line' in n && 'column' in n) || ('start' in n && 'end' in n) ? { place: n } : 'type' in n ? { ancestors: [n], place: n.position } : { ...n }), 'string' == typeof e ? (r = e) : !o.cause && e && ((i = !0), (r = e.message), (o.cause = e)), !o.ruleId && !o.source && 'string' == typeof t)) {
      const e = t.indexOf(':');
      -1 === e ? (o.ruleId = t) : ((o.source = t.slice(0, e)), (o.ruleId = t.slice(e + 1)));
     }
     if (!o.place && o.ancestors && o.ancestors) {
      const e = o.ancestors[o.ancestors.length - 1];
      e && (o.place = e.position);
     }
     const l = o.place && 'start' in o.place ? o.place.start : o.place;
     (this.ancestors = o.ancestors || void 0), (this.cause = o.cause || void 0), (this.column = l ? l.column : void 0), (this.fatal = void 0), this.file, (this.message = r), (this.line = l ? l.line : void 0), (this.name = Y(o.place) || '1:1'), (this.place = o.place || void 0), (this.reason = this.message), (this.ruleId = o.ruleId || void 0), (this.source = o.source || void 0), (this.stack = i && o.cause && 'string' == typeof o.cause.stack ? o.cause.stack : ''), this.actual, this.expected, this.note, this.url;
    }
   }
   (ee.prototype.file = ''), (ee.prototype.name = ''), (ee.prototype.reason = ''), (ee.prototype.message = ''), (ee.prototype.stack = ''), (ee.prototype.column = void 0), (ee.prototype.line = void 0), (ee.prototype.ancestors = void 0), (ee.prototype.cause = void 0), (ee.prototype.fatal = void 0), (ee.prototype.place = void 0), (ee.prototype.ruleId = void 0), (ee.prototype.source = void 0);
   const ne = {}.hasOwnProperty,
    te = new Map(),
    re = /[A-Z]/g,
    oe = /-([a-z])/g,
    ie = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
    le = new Set(['td', 'th']),
    ae = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
   function se(e, n) {
    if (!n || void 0 === n.Fragment) throw new TypeError('Expected `Fragment` in options');
    const t = n.filePath || void 0;
    let r;
    if (n.development) {
     if ('function' != typeof n.jsxDEV) throw new TypeError('Expected `jsxDEV` in options when `development: true`');
     r = (function (e, n) {
      return t;
      function t(t, r, o, i) {
       const l = Array.isArray(o.children),
        a = Q(t);
       return n(r, o, i, l, { columnNumber: a ? a.column - 1 : void 0, fileName: e, lineNumber: a ? a.line : void 0 }, void 0);
      }
     })(t, n.jsxDEV);
    } else {
     if ('function' != typeof n.jsx) throw new TypeError('Expected `jsx` in production options');
     if ('function' != typeof n.jsxs) throw new TypeError('Expected `jsxs` in production options');
     r = (function (e, n, t) {
      return r;
      function r(e, r, o, i) {
       const l = Array.isArray(o.children) ? t : n;
       return i ? l(r, o, i) : l(r, o);
      }
     })(0, n.jsx, n.jsxs);
    }
    const o = { Fragment: n.Fragment, ancestors: [], components: n.components || {}, create: r, elementAttributeNameCase: n.elementAttributeNameCase || 'react', evaluater: n.createEvaluater ? n.createEvaluater() : void 0, filePath: t, ignoreInvalidStyle: n.ignoreInvalidStyle || !1, passKeys: !1 !== n.passKeys, passNode: n.passNode || !1, schema: 'svg' === n.space ? R : F, stylePropertyNameCase: n.stylePropertyNameCase || 'dom', tableCellAlignToStyle: !1 !== n.tableCellAlignToStyle },
     i = ce(o, e, void 0);
    return i && 'string' != typeof i ? i : o.create(e, o.Fragment, { children: i || void 0 }, void 0);
   }
   function ce(e, n, t) {
    return 'element' === n.type
     ? (function (e, n, t) {
        const r = e.schema;
        let o = r;
        'svg' === n.tagName.toLowerCase() && 'html' === r.space && ((o = R), (e.schema = o));
        e.ancestors.push(n);
        const i = he(e, n.tagName, !1),
         l = (function (e, n) {
          const t = {};
          let r, o;
          for (o in n.properties)
           if ('children' !== o && ne.call(n.properties, o)) {
            const i = de(e, o, n.properties[o]);
            if (i) {
             const [o, l] = i;
             e.tableCellAlignToStyle && 'align' === o && 'string' == typeof l && le.has(n.tagName) ? (r = l) : (t[o] = l);
            }
           }
          if (r) {
           (t.style || (t.style = {}))['css' === e.stylePropertyNameCase ? 'text-align' : 'textAlign'] = r;
          }
          return t;
         })(e, n);
        let a = pe(e, n);
        ie.has(n.tagName) &&
         (a = a.filter(function (e) {
          return 'string' != typeof e || !('object' == typeof (n = e) ? 'text' === n.type && u(n.value) : u(n));
          var n;
         }));
        return ue(e, l, i, n), fe(l, a), e.ancestors.pop(), (e.schema = r), e.create(n, i, l, t);
       })(e, n, t)
     : 'mdxFlowExpression' === n.type || 'mdxTextExpression' === n.type
       ? (function (e, n) {
          if (n.data && n.data.estree && e.evaluater) {
           const t = n.data.estree.body[0];
           return t.type, e.evaluater.evaluateExpression(t.expression);
          }
          me(e, n.position);
         })(e, n)
       : 'mdxJsxFlowElement' === n.type || 'mdxJsxTextElement' === n.type
         ? (function (e, n, t) {
            const r = e.schema;
            let o = r;
            'svg' === n.name && 'html' === r.space && ((o = R), (e.schema = o));
            e.ancestors.push(n);
            const i = null === n.name ? e.Fragment : he(e, n.name, !0),
             l = (function (e, n) {
              const t = {};
              for (const r of n.attributes)
               if ('mdxJsxExpressionAttribute' === r.type)
                if (r.data && r.data.estree && e.evaluater) {
                 const n = r.data.estree.body[0];
                 n.type;
                 const o = n.expression;
                 o.type;
                 const i = o.properties[0];
                 i.type, Object.assign(t, e.evaluater.evaluateExpression(i.argument));
                } else me(e, n.position);
               else {
                const o = r.name;
                let i;
                if (r.value && 'object' == typeof r.value)
                 if (r.value.data && r.value.data.estree && e.evaluater) {
                  const n = r.value.data.estree.body[0];
                  n.type, (i = e.evaluater.evaluateExpression(n.expression));
                 } else me(e, n.position);
                else i = null === r.value || r.value;
                t[o] = i;
               }
              return t;
             })(e, n),
             a = pe(e, n);
            return ue(e, l, i, n), fe(l, a), e.ancestors.pop(), (e.schema = r), e.create(n, i, l, t);
           })(e, n, t)
         : 'mdxjsEsm' === n.type
           ? (function (e, n) {
              if (n.data && n.data.estree && e.evaluater) return e.evaluater.evaluateProgram(n.data.estree);
              me(e, n.position);
             })(e, n)
           : 'root' === n.type
             ? (function (e, n, t) {
                const r = {};
                return fe(r, pe(e, n)), e.create(n, e.Fragment, r, t);
               })(e, n, t)
             : 'text' === n.type
               ? (function (e, n) {
                  return n.value;
                 })(0, n)
               : void 0;
   }
   function ue(e, n, t, r) {
    'string' != typeof t && t !== e.Fragment && e.passNode && (n.node = r);
   }
   function fe(e, n) {
    if (n.length > 0) {
     const t = n.length > 1 ? n : n[0];
     t && (e.children = t);
    }
   }
   function pe(e, n) {
    const t = [];
    let r = -1;
    const o = e.passKeys ? new Map() : te;
    for (; ++r < n.children.length; ) {
     const i = n.children[r];
     let l;
     if (e.passKeys) {
      const e = 'element' === i.type ? i.tagName : 'mdxJsxFlowElement' === i.type || 'mdxJsxTextElement' === i.type ? i.name : void 0;
      if (e) {
       const n = o.get(e) || 0;
       (l = e + '-' + n), o.set(e, n + 1);
      }
     }
     const a = ce(e, i, l);
     void 0 !== a && t.push(a);
    }
    return t;
   }
   function de(e, n, t) {
    const r = (function (e, n) {
     const t = d(n);
     let r = n,
      o = h;
     if (t in e.normal) return e.property[e.normal[t]];
     if (t.length > 4 && 'data' === t.slice(0, 4) && _.test(n)) {
      if ('-' === n.charAt(4)) {
       const e = n.slice(5).replace(B, V);
       r = 'data' + e.charAt(0).toUpperCase() + e.slice(1);
      } else {
       const e = n.slice(4);
       if (!B.test(e)) {
        let t = e.replace(H, U);
        '-' !== t.charAt(0) && (t = '-' + t), (n = 'data' + t);
       }
      }
      o = E;
     }
     return new o(r, n);
    })(e.schema, n);
    if (!(null == t || ('number' == typeof t && Number.isNaN(t)))) {
     if (
      (Array.isArray(t) &&
       (t = r.commaSeparated
        ? (function (e, n) {
           const t = n || {};
           return ('' === e[e.length - 1] ? [...e, ''] : e).join((t.padRight ? ' ' : '') + ',' + (!1 === t.padLeft ? '' : ' ')).trim();
          })(t)
        : t.join(' ').trim()),
      'style' === r.property)
     ) {
      let n =
       'object' == typeof t
        ? t
        : (function (e, n) {
           const t = {};
           try {
            W(n, r);
           } catch (o) {
            if (!e.ignoreInvalidStyle) {
             const n = o,
              t = new ee('Cannot parse `style` attribute', { ancestors: e.ancestors, cause: n, ruleId: 'style', source: 'hast-util-to-jsx-runtime' });
             throw ((t.file = e.filePath || void 0), (t.url = ae + '#cannot-parse-style-attribute'), t);
            }
           }
           return t;
           function r(e, n) {
            let r = e;
            '--' !== r.slice(0, 2) && ('-ms-' === r.slice(0, 4) && (r = 'ms-' + r.slice(4)), (r = r.replace(oe, ye))), (t[r] = n);
           }
          })(e, String(t));
      return (
       'css' === e.stylePropertyNameCase &&
        (n = (function (e) {
         const n = {};
         let t;
         for (t in e) ne.call(e, t) && (n[ge(t)] = e[t]);
         return n;
        })(n)),
       ['style', n]
      );
     }
     return ['react' === e.elementAttributeNameCase && r.space ? q[r.property] || r.property : r.attribute, t];
    }
   }
   function he(e, n, t) {
    let r;
    if (t)
     if (n.includes('.')) {
      const e = n.split('.');
      let t,
       o = -1;
      for (; ++o < e.length; ) {
       const n = s(e[o]) ? { type: 'Identifier', name: e[o] } : { type: 'Literal', value: e[o] };
       t = t ? { type: 'MemberExpression', object: t, property: n, computed: Boolean(o && 'Literal' === n.type), optional: !1 } : n;
      }
      r = t;
     } else r = s(n) && !/^[a-z]/.test(n) ? { type: 'Identifier', name: n } : { type: 'Literal', value: n };
    else r = { type: 'Literal', value: n };
    if ('Literal' === r.type) {
     const n = r.value;
     return ne.call(e.components, n) ? e.components[n] : n;
    }
    if (e.evaluater) return e.evaluater.evaluateExpression(r);
    me(e);
   }
   function me(e, n) {
    const t = new ee('Cannot handle MDX estrees without `createEvaluater`', { ancestors: e.ancestors, place: n, ruleId: 'mdx-estree', source: 'hast-util-to-jsx-runtime' });
    throw ((t.file = e.filePath || void 0), (t.url = ae + '#cannot-handle-mdx-estrees-without-createevaluater'), t);
   }
   function ge(e) {
    let n = e.replace(re, xe);
    return 'ms-' === n.slice(0, 3) && (n = '-' + n), n;
   }
   function ye(e, n) {
    return n.toUpperCase();
   }
   function xe(e) {
    return '-' + e.toLowerCase();
   }
   const ve = { action: ['form'], cite: ['blockquote', 'del', 'ins', 'q'], data: ['object'], formAction: ['button', 'input'], href: ['a', 'area', 'base', 'link'], icon: ['menuitem'], itemId: null, manifest: ['html'], ping: ['a', 'area'], poster: ['video'], src: ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'] };
   var ke = t(52676);
   t(75271);
   const be = {};
   function we(e, n, t) {
    if (
     (function (e) {
      return Boolean(e && 'object' == typeof e);
     })(e)
    ) {
     if ('value' in e) return 'html' !== e.type || t ? e.value : '';
     if (n && 'alt' in e && e.alt) return e.alt;
     if ('children' in e) return Se(e.children, n, t);
    }
    return Array.isArray(e) ? Se(e, n, t) : '';
   }
   function Se(e, n, t) {
    const r = [];
    let o = -1;
    for (; ++o < e.length; ) r[o] = we(e[o], n, t);
    return r.join('');
   }
   function Ce(e, n, t, r) {
    const o = e.length;
    let i,
     l = 0;
    if (((n = n < 0 ? (-n > o ? 0 : o + n) : n > o ? o : n), (t = t > 0 ? t : 0), r.length < 1e4)) (i = Array.from(r)), i.unshift(n, t), e.splice(...i);
    else for (t && e.splice(n, t); l < r.length; ) (i = r.slice(l, l + 1e4)), i.unshift(n, 0), e.splice(...i), (l += 1e4), (n += 1e4);
   }
   function Ee(e, n) {
    return e.length > 0 ? (Ce(e, e.length, 0, n), e) : n;
   }
   function Pe(e) {
    const n = {};
    let t,
     r,
     o,
     i,
     l,
     a,
     s,
     c = -1;
    for (; ++c < e.length; ) {
     for (; c in n; ) c = n[c];
     if (((t = e[c]), c && 'chunkFlow' === t[1].type && 'listItemPrefix' === e[c - 1][1].type && ((a = t[1]._tokenizer.events), (o = 0), o < a.length && 'lineEndingBlank' === a[o][1].type && (o += 2), o < a.length && 'content' === a[o][1].type))) for (; ++o < a.length && 'content' !== a[o][1].type; ) 'chunkText' === a[o][1].type && ((a[o][1]._isInFirstContentOfListItem = !0), o++);
     if ('enter' === t[0]) t[1].contentType && (Object.assign(n, Te(e, c)), (c = n[c]), (s = !0));
     else if (t[1]._container) {
      for (o = c, r = void 0; o-- && ((i = e[o]), 'lineEnding' === i[1].type || 'lineEndingBlank' === i[1].type); ) 'enter' === i[0] && (r && (e[r][1].type = 'lineEndingBlank'), (i[1].type = 'lineEnding'), (r = o));
      r && ((t[1].end = Object.assign({}, e[r][1].start)), (l = e.slice(r, c)), l.unshift(t), Ce(e, r, c - r + 1, l));
     }
    }
    return !s;
   }
   function Te(e, n) {
    const t = e[n][1],
     r = e[n][2];
    let o = n - 1;
    const i = [],
     l = t._tokenizer || r.parser[t.contentType](t.start),
     a = l.events,
     s = [],
     c = {};
    let u,
     f,
     p = -1,
     d = t,
     h = 0,
     m = 0;
    const g = [m];
    for (; d; ) {
     for (; e[++o][1] !== d; );
     i.push(o), d._tokenizer || ((u = r.sliceStream(d)), d.next || u.push(null), f && l.defineSkip(d.start), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(u), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), (f = d), (d = d.next);
    }
    for (d = t; ++p < a.length; ) 'exit' === a[p][0] && 'enter' === a[p - 1][0] && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && ((m = p + 1), g.push(m), (d._tokenizer = void 0), (d.previous = void 0), (d = d.next));
    for (l.events = [], d ? ((d._tokenizer = void 0), (d.previous = void 0)) : g.pop(), p = g.length; p--; ) {
     const n = a.slice(g[p], g[p + 1]),
      t = i.pop();
     s.unshift([t, t + n.length - 1]), Ce(e, t, 2, n);
    }
    for (p = -1; ++p < s.length; ) (c[h + s[p][0]] = h + s[p][1]), (h += s[p][1] - s[p][0] - 1);
    return c;
   }
   const Ie = {}.hasOwnProperty;
   function Ae(e, n) {
    let t;
    for (t in n) {
     const r = (Ie.call(e, t) ? e[t] : void 0) || (e[t] = {}),
      o = n[t];
     let i;
     if (o)
      for (i in o) {
       Ie.call(r, i) || (r[i] = []);
       const e = o[i];
       Oe(r[i], Array.isArray(e) ? e : e ? [e] : []);
      }
    }
   }
   function Oe(e, n) {
    let t = -1;
    const r = [];
    for (; ++t < n.length; ) ('after' === n[t].add ? e : r).push(n[t]);
    Ce(e, 0, 0, r);
   }
   const je = Ve(/\p{P}/u),
    De = Ve(/[A-Za-z]/),
    Le = Ve(/[\dA-Za-z]/),
    ze = Ve(/[#-'*+\--9=?A-Z^-~]/);
   function Me(e) {
    return null !== e && (e < 32 || 127 === e);
   }
   const Ne = Ve(/\d/),
    Fe = Ve(/[\dA-Fa-f]/),
    Re = Ve(/[!-/:-@[-`{-~]/);
   function _e(e) {
    return null !== e && e < -2;
   }
   function Be(e) {
    return null !== e && (e < 0 || 32 === e);
   }
   function He(e) {
    return -2 === e || -1 === e || 32 === e;
   }
   const Ue = Ve(/\s/);
   function Ve(e) {
    return function (n) {
     return null !== n && n > -1 && e.test(String.fromCharCode(n));
    };
   }
   function qe(e, n, t, r) {
    const o = r ? r - 1 : Number.POSITIVE_INFINITY;
    let i = 0;
    return function (r) {
     if (He(r)) return e.enter(t), l(r);
     return n(r);
    };
    function l(r) {
     return He(r) && i++ < o ? (e.consume(r), l) : (e.exit(t), n(r));
    }
   }
   const Ze = {
    tokenize: function (e) {
     const n = e.attempt(
      this.parser.constructs.contentInitial,
      function (t) {
       if (null === t) return void e.consume(t);
       return e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), qe(e, n, 'linePrefix');
      },
      function (n) {
       return e.enter('paragraph'), r(n);
      },
     );
     let t;
     return n;
     function r(n) {
      const r = e.enter('chunkText', { contentType: 'text', previous: t });
      return t && (t.next = r), (t = r), o(n);
     }
     function o(n) {
      return null === n ? (e.exit('chunkText'), e.exit('paragraph'), void e.consume(n)) : _e(n) ? (e.consume(n), e.exit('chunkText'), r) : (e.consume(n), o);
     }
    },
   };
   const We = {
     tokenize: function (e) {
      const n = this,
       t = [];
      let r,
       o,
       i,
       l = 0;
      return a;
      function a(r) {
       if (l < t.length) {
        const o = t[l];
        return (n.containerState = o[1]), e.attempt(o[0].continuation, s, c)(r);
       }
       return c(r);
      }
      function s(e) {
       if ((l++, n.containerState._closeFlow)) {
        (n.containerState._closeFlow = void 0), r && x();
        const t = n.events.length;
        let o,
         i = t;
        for (; i--; )
         if ('exit' === n.events[i][0] && 'chunkFlow' === n.events[i][1].type) {
          o = n.events[i][1].end;
          break;
         }
        y(l);
        let a = t;
        for (; a < n.events.length; ) (n.events[a][1].end = Object.assign({}, o)), a++;
        return Ce(n.events, i + 1, 0, n.events.slice(t)), (n.events.length = a), c(e);
       }
       return a(e);
      }
      function c(o) {
       if (l === t.length) {
        if (!r) return p(o);
        if (r.currentConstruct && r.currentConstruct.concrete) return h(o);
        n.interrupt = Boolean(r.currentConstruct && !r._gfmTableDynamicInterruptHack);
       }
       return (n.containerState = {}), e.check(Ke, u, f)(o);
      }
      function u(e) {
       return r && x(), y(l), p(e);
      }
      function f(e) {
       return (n.parser.lazy[n.now().line] = l !== t.length), (i = n.now().offset), h(e);
      }
      function p(t) {
       return (n.containerState = {}), e.attempt(Ke, d, h)(t);
      }
      function d(e) {
       return l++, t.push([n.currentConstruct, n.containerState]), p(e);
      }
      function h(t) {
       return null === t ? (r && x(), y(0), void e.consume(t)) : ((r = r || n.parser.flow(n.now())), e.enter('chunkFlow', { contentType: 'flow', previous: o, _tokenizer: r }), m(t));
      }
      function m(t) {
       return null === t ? (g(e.exit('chunkFlow'), !0), y(0), void e.consume(t)) : _e(t) ? (e.consume(t), g(e.exit('chunkFlow')), (l = 0), (n.interrupt = void 0), a) : (e.consume(t), m);
      }
      function g(e, t) {
       const a = n.sliceStream(e);
       if ((t && a.push(null), (e.previous = o), o && (o.next = e), (o = e), r.defineSkip(e.start), r.write(a), n.parser.lazy[e.start.line])) {
        let e = r.events.length;
        for (; e--; ) if (r.events[e][1].start.offset < i && (!r.events[e][1].end || r.events[e][1].end.offset > i)) return;
        const t = n.events.length;
        let o,
         a,
         s = t;
        for (; s--; )
         if ('exit' === n.events[s][0] && 'chunkFlow' === n.events[s][1].type) {
          if (o) {
           a = n.events[s][1].end;
           break;
          }
          o = !0;
         }
        for (y(l), e = t; e < n.events.length; ) (n.events[e][1].end = Object.assign({}, a)), e++;
        Ce(n.events, s + 1, 0, n.events.slice(t)), (n.events.length = e);
       }
      }
      function y(r) {
       let o = t.length;
       for (; o-- > r; ) {
        const r = t[o];
        (n.containerState = r[1]), r[0].exit.call(n, e);
       }
       t.length = r;
      }
      function x() {
       r.write([null]), (o = void 0), (r = void 0), (n.containerState._closeFlow = void 0);
      }
     },
    },
    Ke = {
     tokenize: function (e, n, t) {
      return qe(e, e.attempt(this.parser.constructs.document, n, t), 'linePrefix', this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4);
     },
    };
   const Qe = {
    tokenize: function (e, n, t) {
     return function (n) {
      return He(n) ? qe(e, r, 'linePrefix')(n) : r(n);
     };
     function r(e) {
      return null === e || _e(e) ? n(e) : t(e);
     }
    },
    partial: !0,
   };
   const Xe = {
     tokenize: function (e, n) {
      let t;
      return function (n) {
       return e.enter('content'), (t = e.enter('chunkContent', { contentType: 'content' })), r(n);
      };
      function r(n) {
       return null === n ? o(n) : _e(n) ? e.check(Ye, i, o)(n) : (e.consume(n), r);
      }
      function o(t) {
       return e.exit('chunkContent'), e.exit('content'), n(t);
      }
      function i(n) {
       return e.consume(n), e.exit('chunkContent'), (t.next = e.enter('chunkContent', { contentType: 'content', previous: t })), (t = t.next), r;
      }
     },
     resolve: function (e) {
      return Pe(e), e;
     },
    },
    Ye = {
     tokenize: function (e, n, t) {
      const r = this;
      return function (n) {
       return e.exit('chunkContent'), e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), qe(e, o, 'linePrefix');
      };
      function o(o) {
       if (null === o || _e(o)) return t(o);
       const i = r.events[r.events.length - 1];
       return !r.parser.constructs.disable.null.includes('codeIndented') && i && 'linePrefix' === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? n(o) : e.interrupt(r.parser.constructs.flow, t, n)(o);
      }
     },
     partial: !0,
    };
   const $e = {
    tokenize: function (e) {
     const n = this,
      t = e.attempt(
       Qe,
       function (r) {
        if (null === r) return void e.consume(r);
        return e.enter('lineEndingBlank'), e.consume(r), e.exit('lineEndingBlank'), (n.currentConstruct = void 0), t;
       },
       e.attempt(this.parser.constructs.flowInitial, r, qe(e, e.attempt(this.parser.constructs.flow, r, e.attempt(Xe, r)), 'linePrefix')),
      );
     return t;
     function r(r) {
      if (null !== r) return e.enter('lineEnding'), e.consume(r), e.exit('lineEnding'), (n.currentConstruct = void 0), t;
      e.consume(r);
     }
    },
   };
   const Je = { resolveAll: tn() },
    Ge = nn('string'),
    en = nn('text');
   function nn(e) {
    return {
     tokenize: function (n) {
      const t = this,
       r = this.parser.constructs[e],
       o = n.attempt(r, i, l);
      return i;
      function i(e) {
       return s(e) ? o(e) : l(e);
      }
      function l(e) {
       if (null !== e) return n.enter('data'), n.consume(e), a;
       n.consume(e);
      }
      function a(e) {
       return s(e) ? (n.exit('data'), o(e)) : (n.consume(e), a);
      }
      function s(e) {
       if (null === e) return !0;
       const n = r[e];
       let o = -1;
       if (n)
        for (; ++o < n.length; ) {
         const e = n[o];
         if (!e.previous || e.previous.call(t, t.previous)) return !0;
        }
       return !1;
      }
     },
     resolveAll: tn('text' === e ? rn : void 0),
    };
   }
   function tn(e) {
    return function (n, t) {
     let r,
      o = -1;
     for (; ++o <= n.length; ) void 0 === r ? n[o] && 'data' === n[o][1].type && ((r = o), o++) : (n[o] && 'data' === n[o][1].type) || (o !== r + 2 && ((n[r][1].end = n[o - 1][1].end), n.splice(r + 2, o - r - 2), (o = r + 2)), (r = void 0));
     return e ? e(n, t) : n;
    };
   }
   function rn(e, n) {
    let t = 0;
    for (; ++t <= e.length; )
     if ((t === e.length || 'lineEnding' === e[t][1].type) && 'data' === e[t - 1][1].type) {
      const r = e[t - 1][1],
       o = n.sliceStream(r);
      let i,
       l = o.length,
       a = -1,
       s = 0;
      for (; l--; ) {
       const e = o[l];
       if ('string' == typeof e) {
        for (a = e.length; 32 === e.charCodeAt(a - 1); ) s++, a--;
        if (a) break;
        a = -1;
       } else if (-2 === e) (i = !0), s++;
       else if (-1 !== e) {
        l++;
        break;
       }
      }
      if (s) {
       const o = { type: t === e.length || i || s < 2 ? 'lineSuffix' : 'hardBreakTrailing', start: { line: r.end.line, column: r.end.column - s, offset: r.end.offset - s, _index: r.start._index + l, _bufferIndex: l ? a : r.start._bufferIndex + a }, end: Object.assign({}, r.end) };
       (r.end = Object.assign({}, o.start)), r.start.offset === r.end.offset ? Object.assign(r, o) : (e.splice(t, 0, ['enter', o, n], ['exit', o, n]), (t += 2));
      }
      t++;
     }
    return e;
   }
   function on(e, n, t) {
    const r = [];
    let o = -1;
    for (; ++o < e.length; ) {
     const i = e[o].resolveAll;
     i && !r.includes(i) && ((n = i(n, t)), r.push(i));
    }
    return n;
   }
   function ln(e, n, t) {
    let r = Object.assign(t ? Object.assign({}, t) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 });
    const o = {},
     i = [];
    let l = [],
     a = [],
     s = !0;
    const c = {
      consume: function (e) {
       _e(e) ? (r.line++, (r.column = 1), (r.offset += -3 === e ? 2 : 1), k()) : -1 !== e && (r.column++, r.offset++);
       r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && ((r._bufferIndex = -1), r._index++));
       (u.previous = e), (s = !0);
      },
      enter: function (e, n) {
       const t = n || {};
       return (t.type = e), (t.start = h()), u.events.push(['enter', t, u]), a.push(t), t;
      },
      exit: function (e) {
       const n = a.pop();
       return (n.end = h()), u.events.push(['exit', n, u]), n;
      },
      attempt: x(function (e, n) {
       v(e, n.from);
      }),
      check: x(y),
      interrupt: x(y, { interrupt: !0 }),
     },
     u = {
      previous: null,
      code: null,
      containerState: {},
      events: [],
      parser: e,
      sliceStream: d,
      sliceSerialize: function (e, n) {
       return (function (e, n) {
        let t = -1;
        const r = [];
        let o;
        for (; ++t < e.length; ) {
         const i = e[t];
         let l;
         if ('string' == typeof i) l = i;
         else
          switch (i) {
           case -5:
            l = '\r';
            break;
           case -4:
            l = '\n';
            break;
           case -3:
            l = '\r\n';
            break;
           case -2:
            l = n ? ' ' : '\t';
            break;
           case -1:
            if (!n && o) continue;
            l = ' ';
            break;
           default:
            l = String.fromCharCode(i);
          }
         (o = -2 === i), r.push(l);
        }
        return r.join('');
       })(d(e), n);
      },
      now: h,
      defineSkip: function (e) {
       (o[e.line] = e.column), k();
      },
      write: function (e) {
       if (((l = Ee(l, e)), m(), null !== l[l.length - 1])) return [];
       return v(n, 0), (u.events = on(i, u.events, u)), u.events;
      },
     };
    let f,
     p = n.tokenize.call(u, c);
    return n.resolveAll && i.push(n), u;
    function d(e) {
     return (function (e, n) {
      const t = n.start._index,
       r = n.start._bufferIndex,
       o = n.end._index,
       i = n.end._bufferIndex;
      let l;
      if (t === o) l = [e[t].slice(r, i)];
      else {
       if (((l = e.slice(t, o)), r > -1)) {
        const e = l[0];
        'string' == typeof e ? (l[0] = e.slice(r)) : l.shift();
       }
       i > 0 && l.push(e[o].slice(0, i));
      }
      return l;
     })(l, e);
    }
    function h() {
     const { line: e, column: n, offset: t, _index: o, _bufferIndex: i } = r;
     return { line: e, column: n, offset: t, _index: o, _bufferIndex: i };
    }
    function m() {
     let e;
     for (; r._index < l.length; ) {
      const n = l[r._index];
      if ('string' == typeof n) for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length; ) g(n.charCodeAt(r._bufferIndex));
      else g(n);
     }
    }
    function g(e) {
     (s = void 0), (f = e), (p = p(e));
    }
    function y(e, n) {
     n.restore();
    }
    function x(e, n) {
     return function (t, o, i) {
      let l, f, p, d;
      return Array.isArray(t)
       ? m(t)
       : 'tokenize' in t
         ? m([t])
         : (function (e) {
            return n;
            function n(n) {
             const t = null !== n && e[n],
              r = null !== n && e.null;
             return m([...(Array.isArray(t) ? t : t ? [t] : []), ...(Array.isArray(r) ? r : r ? [r] : [])])(n);
            }
           })(t);
      function m(e) {
       return (l = e), (f = 0), 0 === e.length ? i : g(e[f]);
      }
      function g(e) {
       return function (t) {
        (d = (function () {
         const e = h(),
          n = u.previous,
          t = u.currentConstruct,
          o = u.events.length,
          i = Array.from(a);
         return { restore: l, from: o };
         function l() {
          (r = e), (u.previous = n), (u.currentConstruct = t), (u.events.length = o), (a = i), k();
         }
        })()),
         (p = e),
         e.partial || (u.currentConstruct = e);
        if (e.name && u.parser.constructs.disable.null.includes(e.name)) return x(t);
        return e.tokenize.call(n ? Object.assign(Object.create(u), n) : u, c, y, x)(t);
       };
      }
      function y(n) {
       return (s = !0), e(p, d), o;
      }
      function x(e) {
       return (s = !0), d.restore(), ++f < l.length ? g(l[f]) : i;
      }
     };
    }
    function v(e, n) {
     e.resolveAll && !i.includes(e) && i.push(e), e.resolve && Ce(u.events, n, u.events.length - n, e.resolve(u.events.slice(n), u)), e.resolveTo && (u.events = e.resolveTo(u.events, u));
    }
    function k() {
     r.line in o && r.column < 2 && ((r.column = o[r.line]), (r.offset += o[r.line] - 1));
    }
   }
   const an = {
    name: 'thematicBreak',
    tokenize: function (e, n, t) {
     let r,
      o = 0;
     return function (n) {
      return (
       e.enter('thematicBreak'),
       (function (e) {
        return (r = e), i(e);
       })(n)
      );
     };
     function i(i) {
      return i === r ? (e.enter('thematicBreakSequence'), l(i)) : o >= 3 && (null === i || _e(i)) ? (e.exit('thematicBreak'), n(i)) : t(i);
     }
     function l(n) {
      return n === r ? (e.consume(n), o++, l) : (e.exit('thematicBreakSequence'), He(n) ? qe(e, i, 'whitespace')(n) : i(n));
     }
    },
   };
   const sn = {
     name: 'list',
     tokenize: function (e, n, t) {
      const r = this,
       o = r.events[r.events.length - 1];
      let i = o && 'linePrefix' === o[1].type ? o[2].sliceSerialize(o[1], !0).length : 0,
       l = 0;
      return function (n) {
       const o = r.containerState.type || (42 === n || 43 === n || 45 === n ? 'listUnordered' : 'listOrdered');
       if ('listUnordered' === o ? !r.containerState.marker || n === r.containerState.marker : Ne(n)) {
        if ((r.containerState.type || ((r.containerState.type = o), e.enter(o, { _container: !0 })), 'listUnordered' === o)) return e.enter('listItemPrefix'), 42 === n || 45 === n ? e.check(an, t, s)(n) : s(n);
        if (!r.interrupt || 49 === n) return e.enter('listItemPrefix'), e.enter('listItemValue'), a(n);
       }
       return t(n);
      };
      function a(n) {
       return Ne(n) && ++l < 10 ? (e.consume(n), a) : (!r.interrupt || l < 2) && (r.containerState.marker ? n === r.containerState.marker : 41 === n || 46 === n) ? (e.exit('listItemValue'), s(n)) : t(n);
      }
      function s(n) {
       return e.enter('listItemMarker'), e.consume(n), e.exit('listItemMarker'), (r.containerState.marker = r.containerState.marker || n), e.check(Qe, r.interrupt ? t : c, e.attempt(cn, f, u));
      }
      function c(e) {
       return (r.containerState.initialBlankLine = !0), i++, f(e);
      }
      function u(n) {
       return He(n) ? (e.enter('listItemPrefixWhitespace'), e.consume(n), e.exit('listItemPrefixWhitespace'), f) : t(n);
      }
      function f(t) {
       return (r.containerState.size = i + r.sliceSerialize(e.exit('listItemPrefix'), !0).length), n(t);
      }
     },
     continuation: {
      tokenize: function (e, n, t) {
       const r = this;
       return (r.containerState._closeFlow = void 0), e.check(Qe, o, i);
       function o(t) {
        return (r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine), qe(e, n, 'listItemIndent', r.containerState.size + 1)(t);
       }
       function i(t) {
        return r.containerState.furtherBlankLines || !He(t) ? ((r.containerState.furtherBlankLines = void 0), (r.containerState.initialBlankLine = void 0), l(t)) : ((r.containerState.furtherBlankLines = void 0), (r.containerState.initialBlankLine = void 0), e.attempt(un, n, l)(t));
       }
       function l(o) {
        return (r.containerState._closeFlow = !0), (r.interrupt = void 0), qe(e, e.attempt(sn, n, t), 'linePrefix', r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4)(o);
       }
      },
     },
     exit: function (e) {
      e.exit(this.containerState.type);
     },
    },
    cn = {
     tokenize: function (e, n, t) {
      const r = this;
      return qe(
       e,
       function (e) {
        const o = r.events[r.events.length - 1];
        return !He(e) && o && 'listItemPrefixWhitespace' === o[1].type ? n(e) : t(e);
       },
       'listItemPrefixWhitespace',
       r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5,
      );
     },
     partial: !0,
    },
    un = {
     tokenize: function (e, n, t) {
      const r = this;
      return qe(
       e,
       function (e) {
        const o = r.events[r.events.length - 1];
        return o && 'listItemIndent' === o[1].type && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? n(e) : t(e);
       },
       'listItemIndent',
       r.containerState.size + 1,
      );
     },
     partial: !0,
    };
   const fn = {
    name: 'blockQuote',
    tokenize: function (e, n, t) {
     const r = this;
     return function (n) {
      if (62 === n) {
       const t = r.containerState;
       return t.open || (e.enter('blockQuote', { _container: !0 }), (t.open = !0)), e.enter('blockQuotePrefix'), e.enter('blockQuoteMarker'), e.consume(n), e.exit('blockQuoteMarker'), o;
      }
      return t(n);
     };
     function o(t) {
      return He(t) ? (e.enter('blockQuotePrefixWhitespace'), e.consume(t), e.exit('blockQuotePrefixWhitespace'), e.exit('blockQuotePrefix'), n) : (e.exit('blockQuotePrefix'), n(t));
     }
    },
    continuation: {
     tokenize: function (e, n, t) {
      const r = this;
      return function (n) {
       if (He(n)) return qe(e, o, 'linePrefix', r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4)(n);
       return o(n);
      };
      function o(r) {
       return e.attempt(fn, n, t)(r);
      }
     },
    },
    exit: function (e) {
     e.exit('blockQuote');
    },
   };
   function pn(e, n, t, r, o, i, l, a, s) {
    const c = s || Number.POSITIVE_INFINITY;
    let u = 0;
    return function (n) {
     if (60 === n) return e.enter(r), e.enter(o), e.enter(i), e.consume(n), e.exit(i), f;
     if (null === n || 32 === n || 41 === n || Me(n)) return t(n);
     return e.enter(r), e.enter(l), e.enter(a), e.enter('chunkString', { contentType: 'string' }), h(n);
    };
    function f(t) {
     return 62 === t ? (e.enter(i), e.consume(t), e.exit(i), e.exit(o), e.exit(r), n) : (e.enter(a), e.enter('chunkString', { contentType: 'string' }), p(t));
    }
    function p(n) {
     return 62 === n ? (e.exit('chunkString'), e.exit(a), f(n)) : null === n || 60 === n || _e(n) ? t(n) : (e.consume(n), 92 === n ? d : p);
    }
    function d(n) {
     return 60 === n || 62 === n || 92 === n ? (e.consume(n), p) : p(n);
    }
    function h(o) {
     return u || (null !== o && 41 !== o && !Be(o)) ? (u < c && 40 === o ? (e.consume(o), u++, h) : 41 === o ? (e.consume(o), u--, h) : null === o || 32 === o || 40 === o || Me(o) ? t(o) : (e.consume(o), 92 === o ? m : h)) : (e.exit('chunkString'), e.exit(a), e.exit(l), e.exit(r), n(o));
    }
    function m(n) {
     return 40 === n || 41 === n || 92 === n ? (e.consume(n), h) : h(n);
    }
   }
   function dn(e, n, t, r, o, i) {
    const l = this;
    let a,
     s = 0;
    return function (n) {
     return e.enter(r), e.enter(o), e.consume(n), e.exit(o), e.enter(i), c;
    };
    function c(f) {
     return s > 999 || null === f || 91 === f || (93 === f && !a) || (94 === f && !s && '_hiddenFootnoteSupport' in l.parser.constructs) ? t(f) : 93 === f ? (e.exit(i), e.enter(o), e.consume(f), e.exit(o), e.exit(r), n) : _e(f) ? (e.enter('lineEnding'), e.consume(f), e.exit('lineEnding'), c) : (e.enter('chunkString', { contentType: 'string' }), u(f));
    }
    function u(n) {
     return null === n || 91 === n || 93 === n || _e(n) || s++ > 999 ? (e.exit('chunkString'), c(n)) : (e.consume(n), a || (a = !He(n)), 92 === n ? f : u);
    }
    function f(n) {
     return 91 === n || 92 === n || 93 === n ? (e.consume(n), s++, u) : u(n);
    }
   }
   function hn(e, n, t, r, o, i) {
    let l;
    return function (n) {
     if (34 === n || 39 === n || 40 === n) return e.enter(r), e.enter(o), e.consume(n), e.exit(o), (l = 40 === n ? 41 : n), a;
     return t(n);
    };
    function a(t) {
     return t === l ? (e.enter(o), e.consume(t), e.exit(o), e.exit(r), n) : (e.enter(i), s(t));
    }
    function s(n) {
     return n === l ? (e.exit(i), a(l)) : null === n ? t(n) : _e(n) ? (e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), qe(e, s, 'linePrefix')) : (e.enter('chunkString', { contentType: 'string' }), c(n));
    }
    function c(n) {
     return n === l || null === n || _e(n) ? (e.exit('chunkString'), s(n)) : (e.consume(n), 92 === n ? u : c);
    }
    function u(n) {
     return n === l || 92 === n ? (e.consume(n), c) : c(n);
    }
   }
   function mn(e, n) {
    let t;
    return function r(o) {
     if (_e(o)) return e.enter('lineEnding'), e.consume(o), e.exit('lineEnding'), (t = !0), r;
     if (He(o)) return qe(e, r, t ? 'linePrefix' : 'lineSuffix')(o);
     return n(o);
    };
   }
   function gn(e) {
    return e
     .replace(/[\t\n\r ]+/g, ' ')
     .replace(/^ | $/g, '')
     .toLowerCase()
     .toUpperCase();
   }
   const yn = {
     name: 'definition',
     tokenize: function (e, n, t) {
      const r = this;
      let o;
      return function (n) {
       return (
        e.enter('definition'),
        (function (n) {
         return dn.call(r, e, i, t, 'definitionLabel', 'definitionLabelMarker', 'definitionLabelString')(n);
        })(n)
       );
      };
      function i(n) {
       return (o = gn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))), 58 === n ? (e.enter('definitionMarker'), e.consume(n), e.exit('definitionMarker'), l) : t(n);
      }
      function l(n) {
       return Be(n) ? mn(e, a)(n) : a(n);
      }
      function a(n) {
       return pn(e, s, t, 'definitionDestination', 'definitionDestinationLiteral', 'definitionDestinationLiteralMarker', 'definitionDestinationRaw', 'definitionDestinationString')(n);
      }
      function s(n) {
       return e.attempt(xn, c, c)(n);
      }
      function c(n) {
       return He(n) ? qe(e, u, 'whitespace')(n) : u(n);
      }
      function u(i) {
       return null === i || _e(i) ? (e.exit('definition'), r.parser.defined.push(o), n(i)) : t(i);
      }
     },
    },
    xn = {
     tokenize: function (e, n, t) {
      return function (n) {
       return Be(n) ? mn(e, r)(n) : t(n);
      };
      function r(n) {
       return hn(e, o, t, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(n);
      }
      function o(n) {
       return He(n) ? qe(e, i, 'whitespace')(n) : i(n);
      }
      function i(e) {
       return null === e || _e(e) ? n(e) : t(e);
      }
     },
     partial: !0,
    };
   const vn = {
     name: 'codeIndented',
     tokenize: function (e, n, t) {
      const r = this;
      return function (n) {
       return e.enter('codeIndented'), qe(e, o, 'linePrefix', 5)(n);
      };
      function o(e) {
       const n = r.events[r.events.length - 1];
       return n && 'linePrefix' === n[1].type && n[2].sliceSerialize(n[1], !0).length >= 4 ? i(e) : t(e);
      }
      function i(n) {
       return null === n ? a(n) : _e(n) ? e.attempt(kn, i, a)(n) : (e.enter('codeFlowValue'), l(n));
      }
      function l(n) {
       return null === n || _e(n) ? (e.exit('codeFlowValue'), i(n)) : (e.consume(n), l);
      }
      function a(t) {
       return e.exit('codeIndented'), n(t);
      }
     },
    },
    kn = {
     tokenize: function (e, n, t) {
      const r = this;
      return o;
      function o(n) {
       return r.parser.lazy[r.now().line] ? t(n) : _e(n) ? (e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), o) : qe(e, i, 'linePrefix', 5)(n);
      }
      function i(e) {
       const i = r.events[r.events.length - 1];
       return i && 'linePrefix' === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? n(e) : _e(e) ? o(e) : t(e);
      }
     },
     partial: !0,
    };
   const bn = {
    name: 'headingAtx',
    tokenize: function (e, n, t) {
     let r = 0;
     return function (n) {
      return (
       e.enter('atxHeading'),
       (function (n) {
        return e.enter('atxHeadingSequence'), o(n);
       })(n)
      );
     };
     function o(n) {
      return 35 === n && r++ < 6 ? (e.consume(n), o) : null === n || Be(n) ? (e.exit('atxHeadingSequence'), i(n)) : t(n);
     }
     function i(t) {
      return 35 === t ? (e.enter('atxHeadingSequence'), l(t)) : null === t || _e(t) ? (e.exit('atxHeading'), n(t)) : He(t) ? qe(e, i, 'whitespace')(t) : (e.enter('atxHeadingText'), a(t));
     }
     function l(n) {
      return 35 === n ? (e.consume(n), l) : (e.exit('atxHeadingSequence'), i(n));
     }
     function a(n) {
      return null === n || 35 === n || Be(n) ? (e.exit('atxHeadingText'), i(n)) : (e.consume(n), a);
     }
    },
    resolve: function (e, n) {
     let t,
      r,
      o = e.length - 2,
      i = 3;
     'whitespace' === e[i][1].type && (i += 2);
     o - 2 > i && 'whitespace' === e[o][1].type && (o -= 2);
     'atxHeadingSequence' === e[o][1].type && (i === o - 1 || (o - 4 > i && 'whitespace' === e[o - 2][1].type)) && (o -= i + 1 === o ? 2 : 4);
     o > i &&
      ((t = { type: 'atxHeadingText', start: e[i][1].start, end: e[o][1].end }),
      (r = { type: 'chunkText', start: e[i][1].start, end: e[o][1].end, contentType: 'text' }),
      Ce(e, i, o - i + 1, [
       ['enter', t, n],
       ['enter', r, n],
       ['exit', r, n],
       ['exit', t, n],
      ]));
     return e;
    },
   };
   const wn = {
    name: 'setextUnderline',
    tokenize: function (e, n, t) {
     const r = this;
     let o;
     return function (n) {
      let l,
       a = r.events.length;
      for (; a--; )
       if ('lineEnding' !== r.events[a][1].type && 'linePrefix' !== r.events[a][1].type && 'content' !== r.events[a][1].type) {
        l = 'paragraph' === r.events[a][1].type;
        break;
       }
      if (!r.parser.lazy[r.now().line] && (r.interrupt || l))
       return (
        e.enter('setextHeadingLine'),
        (o = n),
        (function (n) {
         return e.enter('setextHeadingLineSequence'), i(n);
        })(n)
       );
      return t(n);
     };
     function i(n) {
      return n === o ? (e.consume(n), i) : (e.exit('setextHeadingLineSequence'), He(n) ? qe(e, l, 'lineSuffix')(n) : l(n));
     }
     function l(r) {
      return null === r || _e(r) ? (e.exit('setextHeadingLine'), n(r)) : t(r);
     }
    },
    resolveTo: function (e, n) {
     let t,
      r,
      o,
      i = e.length;
     for (; i--; )
      if ('enter' === e[i][0]) {
       if ('content' === e[i][1].type) {
        t = i;
        break;
       }
       'paragraph' === e[i][1].type && (r = i);
      } else 'content' === e[i][1].type && e.splice(i, 1), o || 'definition' !== e[i][1].type || (o = i);
     const l = { type: 'setextHeading', start: Object.assign({}, e[r][1].start), end: Object.assign({}, e[e.length - 1][1].end) };
     (e[r][1].type = 'setextHeadingText'), o ? (e.splice(r, 0, ['enter', l, n]), e.splice(o + 1, 0, ['exit', e[t][1], n]), (e[t][1].end = Object.assign({}, e[o][1].end))) : (e[t][1] = l);
     return e.push(['exit', l, n]), e;
    },
   };
   const Sn = ['address', 'article', 'aside', 'base', 'basefont', 'blockquote', 'body', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dialog', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'link', 'main', 'menu', 'menuitem', 'nav', 'noframes', 'ol', 'optgroup', 'option', 'p', 'param', 'search', 'section', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul'],
    Cn = ['pre', 'script', 'style', 'textarea'],
    En = {
     name: 'htmlFlow',
     tokenize: function (e, n, t) {
      const r = this;
      let o, i, l, a, s;
      return function (n) {
       return (function (n) {
        return e.enter('htmlFlow'), e.enter('htmlFlowData'), e.consume(n), c;
       })(n);
      };
      function c(a) {
       return 33 === a ? (e.consume(a), u) : 47 === a ? (e.consume(a), (i = !0), d) : 63 === a ? (e.consume(a), (o = 3), r.interrupt ? n : z) : De(a) ? (e.consume(a), (l = String.fromCharCode(a)), h) : t(a);
      }
      function u(i) {
       return 45 === i ? (e.consume(i), (o = 2), f) : 91 === i ? (e.consume(i), (o = 5), (a = 0), p) : De(i) ? (e.consume(i), (o = 4), r.interrupt ? n : z) : t(i);
      }
      function f(o) {
       return 45 === o ? (e.consume(o), r.interrupt ? n : z) : t(o);
      }
      function p(o) {
       const i = 'CDATA[';
       return o === i.charCodeAt(a++) ? (e.consume(o), 6 === a ? (r.interrupt ? n : P) : p) : t(o);
      }
      function d(n) {
       return De(n) ? (e.consume(n), (l = String.fromCharCode(n)), h) : t(n);
      }
      function h(a) {
       if (null === a || 47 === a || 62 === a || Be(a)) {
        const s = 47 === a,
         c = l.toLowerCase();
        return s || i || !Cn.includes(c) ? (Sn.includes(l.toLowerCase()) ? ((o = 6), s ? (e.consume(a), m) : r.interrupt ? n(a) : P(a)) : ((o = 7), r.interrupt && !r.parser.lazy[r.now().line] ? t(a) : i ? g(a) : y(a))) : ((o = 1), r.interrupt ? n(a) : P(a));
       }
       return 45 === a || Le(a) ? (e.consume(a), (l += String.fromCharCode(a)), h) : t(a);
      }
      function m(o) {
       return 62 === o ? (e.consume(o), r.interrupt ? n : P) : t(o);
      }
      function g(n) {
       return He(n) ? (e.consume(n), g) : C(n);
      }
      function y(n) {
       return 47 === n ? (e.consume(n), C) : 58 === n || 95 === n || De(n) ? (e.consume(n), x) : He(n) ? (e.consume(n), y) : C(n);
      }
      function x(n) {
       return 45 === n || 46 === n || 58 === n || 95 === n || Le(n) ? (e.consume(n), x) : v(n);
      }
      function v(n) {
       return 61 === n ? (e.consume(n), k) : He(n) ? (e.consume(n), v) : y(n);
      }
      function k(n) {
       return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n), (s = n), b) : He(n) ? (e.consume(n), k) : w(n);
      }
      function b(n) {
       return n === s ? (e.consume(n), (s = null), S) : null === n || _e(n) ? t(n) : (e.consume(n), b);
      }
      function w(n) {
       return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || Be(n) ? v(n) : (e.consume(n), w);
      }
      function S(e) {
       return 47 === e || 62 === e || He(e) ? y(e) : t(e);
      }
      function C(n) {
       return 62 === n ? (e.consume(n), E) : t(n);
      }
      function E(n) {
       return null === n || _e(n) ? P(n) : He(n) ? (e.consume(n), E) : t(n);
      }
      function P(n) {
       return 45 === n && 2 === o ? (e.consume(n), O) : 60 === n && 1 === o ? (e.consume(n), j) : 62 === n && 4 === o ? (e.consume(n), M) : 63 === n && 3 === o ? (e.consume(n), z) : 93 === n && 5 === o ? (e.consume(n), L) : !_e(n) || (6 !== o && 7 !== o) ? (null === n || _e(n) ? (e.exit('htmlFlowData'), T(n)) : (e.consume(n), P)) : (e.exit('htmlFlowData'), e.check(Pn, N, T)(n));
      }
      function T(n) {
       return e.check(Tn, I, N)(n);
      }
      function I(n) {
       return e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), A;
      }
      function A(n) {
       return null === n || _e(n) ? T(n) : (e.enter('htmlFlowData'), P(n));
      }
      function O(n) {
       return 45 === n ? (e.consume(n), z) : P(n);
      }
      function j(n) {
       return 47 === n ? (e.consume(n), (l = ''), D) : P(n);
      }
      function D(n) {
       if (62 === n) {
        const t = l.toLowerCase();
        return Cn.includes(t) ? (e.consume(n), M) : P(n);
       }
       return De(n) && l.length < 8 ? (e.consume(n), (l += String.fromCharCode(n)), D) : P(n);
      }
      function L(n) {
       return 93 === n ? (e.consume(n), z) : P(n);
      }
      function z(n) {
       return 62 === n ? (e.consume(n), M) : 45 === n && 2 === o ? (e.consume(n), z) : P(n);
      }
      function M(n) {
       return null === n || _e(n) ? (e.exit('htmlFlowData'), N(n)) : (e.consume(n), M);
      }
      function N(t) {
       return e.exit('htmlFlow'), n(t);
      }
     },
     resolveTo: function (e) {
      let n = e.length;
      for (; n-- && ('enter' !== e[n][0] || 'htmlFlow' !== e[n][1].type); );
      n > 1 && 'linePrefix' === e[n - 2][1].type && ((e[n][1].start = e[n - 2][1].start), (e[n + 1][1].start = e[n - 2][1].start), e.splice(n - 2, 2));
      return e;
     },
     concrete: !0,
    },
    Pn = {
     tokenize: function (e, n, t) {
      return function (r) {
       return e.enter('lineEnding'), e.consume(r), e.exit('lineEnding'), e.attempt(Qe, n, t);
      };
     },
     partial: !0,
    },
    Tn = {
     tokenize: function (e, n, t) {
      const r = this;
      return function (n) {
       if (_e(n)) return e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), o;
       return t(n);
      };
      function o(e) {
       return r.parser.lazy[r.now().line] ? t(e) : n(e);
      }
     },
     partial: !0,
    };
   const In = {
     tokenize: function (e, n, t) {
      const r = this;
      return function (n) {
       if (null === n) return t(n);
       return e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), o;
      };
      function o(e) {
       return r.parser.lazy[r.now().line] ? t(e) : n(e);
      }
     },
     partial: !0,
    },
    An = {
     name: 'codeFenced',
     tokenize: function (e, n, t) {
      const r = this,
       o = {
        tokenize: function (e, n, t) {
         let o = 0;
         return l;
         function l(n) {
          return e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), s;
         }
         function s(n) {
          return e.enter('codeFencedFence'), He(n) ? qe(e, c, 'linePrefix', r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4)(n) : c(n);
         }
         function c(n) {
          return n === i ? (e.enter('codeFencedFenceSequence'), u(n)) : t(n);
         }
         function u(n) {
          return n === i ? (o++, e.consume(n), u) : o >= a ? (e.exit('codeFencedFenceSequence'), He(n) ? qe(e, f, 'whitespace')(n) : f(n)) : t(n);
         }
         function f(r) {
          return null === r || _e(r) ? (e.exit('codeFencedFence'), n(r)) : t(r);
         }
        },
        partial: !0,
       };
      let i,
       l = 0,
       a = 0;
      return function (n) {
       return (function (n) {
        const t = r.events[r.events.length - 1];
        return (l = t && 'linePrefix' === t[1].type ? t[2].sliceSerialize(t[1], !0).length : 0), (i = n), e.enter('codeFenced'), e.enter('codeFencedFence'), e.enter('codeFencedFenceSequence'), s(n);
       })(n);
      };
      function s(n) {
       return n === i ? (a++, e.consume(n), s) : a < 3 ? t(n) : (e.exit('codeFencedFenceSequence'), He(n) ? qe(e, c, 'whitespace')(n) : c(n));
      }
      function c(t) {
       return null === t || _e(t) ? (e.exit('codeFencedFence'), r.interrupt ? n(t) : e.check(In, d, x)(t)) : (e.enter('codeFencedFenceInfo'), e.enter('chunkString', { contentType: 'string' }), u(t));
      }
      function u(n) {
       return null === n || _e(n) ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), c(n)) : He(n) ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), qe(e, f, 'whitespace')(n)) : 96 === n && n === i ? t(n) : (e.consume(n), u);
      }
      function f(n) {
       return null === n || _e(n) ? c(n) : (e.enter('codeFencedFenceMeta'), e.enter('chunkString', { contentType: 'string' }), p(n));
      }
      function p(n) {
       return null === n || _e(n) ? (e.exit('chunkString'), e.exit('codeFencedFenceMeta'), c(n)) : 96 === n && n === i ? t(n) : (e.consume(n), p);
      }
      function d(n) {
       return e.attempt(o, x, h)(n);
      }
      function h(n) {
       return e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), m;
      }
      function m(n) {
       return l > 0 && He(n) ? qe(e, g, 'linePrefix', l + 1)(n) : g(n);
      }
      function g(n) {
       return null === n || _e(n) ? e.check(In, d, x)(n) : (e.enter('codeFlowValue'), y(n));
      }
      function y(n) {
       return null === n || _e(n) ? (e.exit('codeFlowValue'), g(n)) : (e.consume(n), y);
      }
      function x(t) {
       return e.exit('codeFenced'), n(t);
      }
     },
     concrete: !0,
    };
   const On = document.createElement('i');
   function jn(e) {
    const n = '&' + e + ';';
    On.innerHTML = n;
    const t = On.textContent;
    return (59 !== t.charCodeAt(t.length - 1) || 'semi' === e) && t !== n && t;
   }
   const Dn = {
    name: 'characterReference',
    tokenize: function (e, n, t) {
     const r = this;
     let o,
      i,
      l = 0;
     return function (n) {
      return e.enter('characterReference'), e.enter('characterReferenceMarker'), e.consume(n), e.exit('characterReferenceMarker'), a;
     };
     function a(n) {
      return 35 === n ? (e.enter('characterReferenceMarkerNumeric'), e.consume(n), e.exit('characterReferenceMarkerNumeric'), s) : (e.enter('characterReferenceValue'), (o = 31), (i = Le), c(n));
     }
     function s(n) {
      return 88 === n || 120 === n ? (e.enter('characterReferenceMarkerHexadecimal'), e.consume(n), e.exit('characterReferenceMarkerHexadecimal'), e.enter('characterReferenceValue'), (o = 6), (i = Fe), c) : (e.enter('characterReferenceValue'), (o = 7), (i = Ne), c(n));
     }
     function c(a) {
      if (59 === a && l) {
       const o = e.exit('characterReferenceValue');
       return i !== Le || jn(r.sliceSerialize(o)) ? (e.enter('characterReferenceMarker'), e.consume(a), e.exit('characterReferenceMarker'), e.exit('characterReference'), n) : t(a);
      }
      return i(a) && l++ < o ? (e.consume(a), c) : t(a);
     }
    },
   };
   const Ln = {
    name: 'characterEscape',
    tokenize: function (e, n, t) {
     return function (n) {
      return e.enter('characterEscape'), e.enter('escapeMarker'), e.consume(n), e.exit('escapeMarker'), r;
     };
     function r(r) {
      return Re(r) ? (e.enter('characterEscapeValue'), e.consume(r), e.exit('characterEscapeValue'), e.exit('characterEscape'), n) : t(r);
     }
    },
   };
   const zn = {
    name: 'lineEnding',
    tokenize: function (e, n) {
     return function (t) {
      return e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), qe(e, n, 'linePrefix');
     };
    },
   };
   const Mn = {
     name: 'labelEnd',
     tokenize: function (e, n, t) {
      const r = this;
      let o,
       i,
       l = r.events.length;
      for (; l--; )
       if (('labelImage' === r.events[l][1].type || 'labelLink' === r.events[l][1].type) && !r.events[l][1]._balanced) {
        o = r.events[l][1];
        break;
       }
      return function (n) {
       if (!o) return t(n);
       if (o._inactive) return u(n);
       return (i = r.parser.defined.includes(gn(r.sliceSerialize({ start: o.end, end: r.now() })))), e.enter('labelEnd'), e.enter('labelMarker'), e.consume(n), e.exit('labelMarker'), e.exit('labelEnd'), a;
      };
      function a(n) {
       return 40 === n ? e.attempt(Nn, c, i ? c : u)(n) : 91 === n ? e.attempt(Fn, c, i ? s : u)(n) : i ? c(n) : u(n);
      }
      function s(n) {
       return e.attempt(Rn, c, u)(n);
      }
      function c(e) {
       return n(e);
      }
      function u(e) {
       return (o._balanced = !0), t(e);
      }
     },
     resolveTo: function (e, n) {
      let t,
       r,
       o,
       i,
       l = e.length,
       a = 0;
      for (; l--; )
       if (((t = e[l][1]), r)) {
        if ('link' === t.type || ('labelLink' === t.type && t._inactive)) break;
        'enter' === e[l][0] && 'labelLink' === t.type && (t._inactive = !0);
       } else if (o) {
        if ('enter' === e[l][0] && ('labelImage' === t.type || 'labelLink' === t.type) && !t._balanced && ((r = l), 'labelLink' !== t.type)) {
         a = 2;
         break;
        }
       } else 'labelEnd' === t.type && (o = l);
      const s = { type: 'labelLink' === e[r][1].type ? 'link' : 'image', start: Object.assign({}, e[r][1].start), end: Object.assign({}, e[e.length - 1][1].end) },
       c = { type: 'label', start: Object.assign({}, e[r][1].start), end: Object.assign({}, e[o][1].end) },
       u = { type: 'labelText', start: Object.assign({}, e[r + a + 2][1].end), end: Object.assign({}, e[o - 2][1].start) };
      return (
       (i = [
        ['enter', s, n],
        ['enter', c, n],
       ]),
       (i = Ee(i, e.slice(r + 1, r + a + 3))),
       (i = Ee(i, [['enter', u, n]])),
       (i = Ee(i, on(n.parser.constructs.insideSpan.null, e.slice(r + a + 4, o - 3), n))),
       (i = Ee(i, [['exit', u, n], e[o - 2], e[o - 1], ['exit', c, n]])),
       (i = Ee(i, e.slice(o + 1))),
       (i = Ee(i, [['exit', s, n]])),
       Ce(e, r, e.length, i),
       e
      );
     },
     resolveAll: function (e) {
      let n = -1;
      for (; ++n < e.length; ) {
       const t = e[n][1];
       ('labelImage' !== t.type && 'labelLink' !== t.type && 'labelEnd' !== t.type) || (e.splice(n + 1, 'labelImage' === t.type ? 4 : 2), (t.type = 'data'), n++);
      }
      return e;
     },
    },
    Nn = {
     tokenize: function (e, n, t) {
      return function (n) {
       return e.enter('resource'), e.enter('resourceMarker'), e.consume(n), e.exit('resourceMarker'), r;
      };
      function r(n) {
       return Be(n) ? mn(e, o)(n) : o(n);
      }
      function o(n) {
       return 41 === n ? c(n) : pn(e, i, l, 'resourceDestination', 'resourceDestinationLiteral', 'resourceDestinationLiteralMarker', 'resourceDestinationRaw', 'resourceDestinationString', 32)(n);
      }
      function i(n) {
       return Be(n) ? mn(e, a)(n) : c(n);
      }
      function l(e) {
       return t(e);
      }
      function a(n) {
       return 34 === n || 39 === n || 40 === n ? hn(e, s, t, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(n) : c(n);
      }
      function s(n) {
       return Be(n) ? mn(e, c)(n) : c(n);
      }
      function c(r) {
       return 41 === r ? (e.enter('resourceMarker'), e.consume(r), e.exit('resourceMarker'), e.exit('resource'), n) : t(r);
      }
     },
    },
    Fn = {
     tokenize: function (e, n, t) {
      const r = this;
      return function (n) {
       return dn.call(r, e, o, i, 'reference', 'referenceMarker', 'referenceString')(n);
      };
      function o(e) {
       return r.parser.defined.includes(gn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(e) : t(e);
      }
      function i(e) {
       return t(e);
      }
     },
    },
    Rn = {
     tokenize: function (e, n, t) {
      return function (n) {
       return e.enter('reference'), e.enter('referenceMarker'), e.consume(n), e.exit('referenceMarker'), r;
      };
      function r(r) {
       return 93 === r ? (e.enter('referenceMarker'), e.consume(r), e.exit('referenceMarker'), e.exit('reference'), n) : t(r);
      }
     },
    };
   const _n = {
    name: 'labelStartImage',
    tokenize: function (e, n, t) {
     const r = this;
     return function (n) {
      return e.enter('labelImage'), e.enter('labelImageMarker'), e.consume(n), e.exit('labelImageMarker'), o;
     };
     function o(n) {
      return 91 === n ? (e.enter('labelMarker'), e.consume(n), e.exit('labelMarker'), e.exit('labelImage'), i) : t(n);
     }
     function i(e) {
      return 94 === e && '_hiddenFootnoteSupport' in r.parser.constructs ? t(e) : n(e);
     }
    },
    resolveAll: Mn.resolveAll,
   };
   function Bn(e) {
    return null === e || Be(e) || Ue(e)
     ? 1
     : (function (e) {
          return Re(e) || je(e);
         })(e)
       ? 2
       : void 0;
   }
   const Hn = {
    name: 'attention',
    tokenize: function (e, n) {
     const t = this.parser.constructs.attentionMarkers.null,
      r = this.previous,
      o = Bn(r);
     let i;
     return function (n) {
      return (i = n), e.enter('attentionSequence'), l(n);
     };
     function l(a) {
      if (a === i) return e.consume(a), l;
      const s = e.exit('attentionSequence'),
       c = Bn(a),
       u = !c || (2 === c && o) || t.includes(a),
       f = !o || (2 === o && c) || t.includes(r);
      return (s._open = Boolean(42 === i ? u : u && (o || !f))), (s._close = Boolean(42 === i ? f : f && (c || !u))), n(a);
     }
    },
    resolveAll: function (e, n) {
     let t,
      r,
      o,
      i,
      l,
      a,
      s,
      c,
      u = -1;
     for (; ++u < e.length; )
      if ('enter' === e[u][0] && 'attentionSequence' === e[u][1].type && e[u][1]._close)
       for (t = u; t--; )
        if ('exit' === e[t][0] && 'attentionSequence' === e[t][1].type && e[t][1]._open && n.sliceSerialize(e[t][1]).charCodeAt(0) === n.sliceSerialize(e[u][1]).charCodeAt(0)) {
         if ((e[t][1]._close || e[u][1]._open) && (e[u][1].end.offset - e[u][1].start.offset) % 3 && !((e[t][1].end.offset - e[t][1].start.offset + e[u][1].end.offset - e[u][1].start.offset) % 3)) continue;
         a = e[t][1].end.offset - e[t][1].start.offset > 1 && e[u][1].end.offset - e[u][1].start.offset > 1 ? 2 : 1;
         const f = Object.assign({}, e[t][1].end),
          p = Object.assign({}, e[u][1].start);
         Un(f, -a),
          Un(p, a),
          (i = { type: a > 1 ? 'strongSequence' : 'emphasisSequence', start: f, end: Object.assign({}, e[t][1].end) }),
          (l = { type: a > 1 ? 'strongSequence' : 'emphasisSequence', start: Object.assign({}, e[u][1].start), end: p }),
          (o = { type: a > 1 ? 'strongText' : 'emphasisText', start: Object.assign({}, e[t][1].end), end: Object.assign({}, e[u][1].start) }),
          (r = { type: a > 1 ? 'strong' : 'emphasis', start: Object.assign({}, i.start), end: Object.assign({}, l.end) }),
          (e[t][1].end = Object.assign({}, i.start)),
          (e[u][1].start = Object.assign({}, l.end)),
          (s = []),
          e[t][1].end.offset - e[t][1].start.offset &&
           (s = Ee(s, [
            ['enter', e[t][1], n],
            ['exit', e[t][1], n],
           ])),
          (s = Ee(s, [
           ['enter', r, n],
           ['enter', i, n],
           ['exit', i, n],
           ['enter', o, n],
          ])),
          (s = Ee(s, on(n.parser.constructs.insideSpan.null, e.slice(t + 1, u), n))),
          (s = Ee(s, [
           ['exit', o, n],
           ['enter', l, n],
           ['exit', l, n],
           ['exit', r, n],
          ])),
          e[u][1].end.offset - e[u][1].start.offset
           ? ((c = 2),
             (s = Ee(s, [
              ['enter', e[u][1], n],
              ['exit', e[u][1], n],
             ])))
           : (c = 0),
          Ce(e, t - 1, u - t + 3, s),
          (u = t + s.length - c - 2);
         break;
        }
     u = -1;
     for (; ++u < e.length; ) 'attentionSequence' === e[u][1].type && (e[u][1].type = 'data');
     return e;
    },
   };
   function Un(e, n) {
    (e.column += n), (e.offset += n), (e._bufferIndex += n);
   }
   const Vn = {
    name: 'autolink',
    tokenize: function (e, n, t) {
     let r = 0;
     return function (n) {
      return e.enter('autolink'), e.enter('autolinkMarker'), e.consume(n), e.exit('autolinkMarker'), e.enter('autolinkProtocol'), o;
     };
     function o(n) {
      return De(n) ? (e.consume(n), i) : s(n);
     }
     function i(e) {
      return 43 === e || 45 === e || 46 === e || Le(e) ? ((r = 1), l(e)) : s(e);
     }
     function l(n) {
      return 58 === n ? (e.consume(n), (r = 0), a) : (43 === n || 45 === n || 46 === n || Le(n)) && r++ < 32 ? (e.consume(n), l) : ((r = 0), s(n));
     }
     function a(r) {
      return 62 === r ? (e.exit('autolinkProtocol'), e.enter('autolinkMarker'), e.consume(r), e.exit('autolinkMarker'), e.exit('autolink'), n) : null === r || 32 === r || 60 === r || Me(r) ? t(r) : (e.consume(r), a);
     }
     function s(n) {
      return 64 === n ? (e.consume(n), c) : ze(n) ? (e.consume(n), s) : t(n);
     }
     function c(e) {
      return Le(e) ? u(e) : t(e);
     }
     function u(t) {
      return 46 === t ? (e.consume(t), (r = 0), c) : 62 === t ? ((e.exit('autolinkProtocol').type = 'autolinkEmail'), e.enter('autolinkMarker'), e.consume(t), e.exit('autolinkMarker'), e.exit('autolink'), n) : f(t);
     }
     function f(n) {
      if ((45 === n || Le(n)) && r++ < 63) {
       const t = 45 === n ? f : u;
       return e.consume(n), t;
      }
      return t(n);
     }
    },
   };
   const qn = {
    name: 'htmlText',
    tokenize: function (e, n, t) {
     const r = this;
     let o, i, l;
     return function (n) {
      return e.enter('htmlText'), e.enter('htmlTextData'), e.consume(n), a;
     };
     function a(n) {
      return 33 === n ? (e.consume(n), s) : 47 === n ? (e.consume(n), k) : 63 === n ? (e.consume(n), x) : De(n) ? (e.consume(n), S) : t(n);
     }
     function s(n) {
      return 45 === n ? (e.consume(n), c) : 91 === n ? (e.consume(n), (i = 0), d) : De(n) ? (e.consume(n), y) : t(n);
     }
     function c(n) {
      return 45 === n ? (e.consume(n), p) : t(n);
     }
     function u(n) {
      return null === n ? t(n) : 45 === n ? (e.consume(n), f) : _e(n) ? ((l = u), D(n)) : (e.consume(n), u);
     }
     function f(n) {
      return 45 === n ? (e.consume(n), p) : u(n);
     }
     function p(e) {
      return 62 === e ? j(e) : 45 === e ? f(e) : u(e);
     }
     function d(n) {
      const r = 'CDATA[';
      return n === r.charCodeAt(i++) ? (e.consume(n), 6 === i ? h : d) : t(n);
     }
     function h(n) {
      return null === n ? t(n) : 93 === n ? (e.consume(n), m) : _e(n) ? ((l = h), D(n)) : (e.consume(n), h);
     }
     function m(n) {
      return 93 === n ? (e.consume(n), g) : h(n);
     }
     function g(n) {
      return 62 === n ? j(n) : 93 === n ? (e.consume(n), g) : h(n);
     }
     function y(n) {
      return null === n || 62 === n ? j(n) : _e(n) ? ((l = y), D(n)) : (e.consume(n), y);
     }
     function x(n) {
      return null === n ? t(n) : 63 === n ? (e.consume(n), v) : _e(n) ? ((l = x), D(n)) : (e.consume(n), x);
     }
     function v(e) {
      return 62 === e ? j(e) : x(e);
     }
     function k(n) {
      return De(n) ? (e.consume(n), b) : t(n);
     }
     function b(n) {
      return 45 === n || Le(n) ? (e.consume(n), b) : w(n);
     }
     function w(n) {
      return _e(n) ? ((l = w), D(n)) : He(n) ? (e.consume(n), w) : j(n);
     }
     function S(n) {
      return 45 === n || Le(n) ? (e.consume(n), S) : 47 === n || 62 === n || Be(n) ? C(n) : t(n);
     }
     function C(n) {
      return 47 === n ? (e.consume(n), j) : 58 === n || 95 === n || De(n) ? (e.consume(n), E) : _e(n) ? ((l = C), D(n)) : He(n) ? (e.consume(n), C) : j(n);
     }
     function E(n) {
      return 45 === n || 46 === n || 58 === n || 95 === n || Le(n) ? (e.consume(n), E) : P(n);
     }
     function P(n) {
      return 61 === n ? (e.consume(n), T) : _e(n) ? ((l = P), D(n)) : He(n) ? (e.consume(n), P) : C(n);
     }
     function T(n) {
      return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n), (o = n), I) : _e(n) ? ((l = T), D(n)) : He(n) ? (e.consume(n), T) : (e.consume(n), A);
     }
     function I(n) {
      return n === o ? (e.consume(n), (o = void 0), O) : null === n ? t(n) : _e(n) ? ((l = I), D(n)) : (e.consume(n), I);
     }
     function A(n) {
      return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 96 === n ? t(n) : 47 === n || 62 === n || Be(n) ? C(n) : (e.consume(n), A);
     }
     function O(e) {
      return 47 === e || 62 === e || Be(e) ? C(e) : t(e);
     }
     function j(r) {
      return 62 === r ? (e.consume(r), e.exit('htmlTextData'), e.exit('htmlText'), n) : t(r);
     }
     function D(n) {
      return e.exit('htmlTextData'), e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), L;
     }
     function L(n) {
      return He(n) ? qe(e, z, 'linePrefix', r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4)(n) : z(n);
     }
     function z(n) {
      return e.enter('htmlTextData'), l(n);
     }
    },
   };
   const Zn = {
    name: 'labelStartLink',
    tokenize: function (e, n, t) {
     const r = this;
     return function (n) {
      return e.enter('labelLink'), e.enter('labelMarker'), e.consume(n), e.exit('labelMarker'), e.exit('labelLink'), o;
     };
     function o(e) {
      return 94 === e && '_hiddenFootnoteSupport' in r.parser.constructs ? t(e) : n(e);
     }
    },
    resolveAll: Mn.resolveAll,
   };
   const Wn = {
    name: 'hardBreakEscape',
    tokenize: function (e, n, t) {
     return function (n) {
      return e.enter('hardBreakEscape'), e.consume(n), r;
     };
     function r(r) {
      return _e(r) ? (e.exit('hardBreakEscape'), n(r)) : t(r);
     }
    },
   };
   const Kn = {
    name: 'codeText',
    tokenize: function (e, n, t) {
     let r,
      o,
      i = 0;
     return function (n) {
      return e.enter('codeText'), e.enter('codeTextSequence'), l(n);
     };
     function l(n) {
      return 96 === n ? (e.consume(n), i++, l) : (e.exit('codeTextSequence'), a(n));
     }
     function a(n) {
      return null === n ? t(n) : 32 === n ? (e.enter('space'), e.consume(n), e.exit('space'), a) : 96 === n ? ((o = e.enter('codeTextSequence')), (r = 0), c(n)) : _e(n) ? (e.enter('lineEnding'), e.consume(n), e.exit('lineEnding'), a) : (e.enter('codeTextData'), s(n));
     }
     function s(n) {
      return null === n || 32 === n || 96 === n || _e(n) ? (e.exit('codeTextData'), a(n)) : (e.consume(n), s);
     }
     function c(t) {
      return 96 === t ? (e.consume(t), r++, c) : r === i ? (e.exit('codeTextSequence'), e.exit('codeText'), n(t)) : ((o.type = 'codeTextData'), s(t));
     }
    },
    resolve: function (e) {
     let n,
      t,
      r = e.length - 4,
      o = 3;
     if (!(('lineEnding' !== e[o][1].type && 'space' !== e[o][1].type) || ('lineEnding' !== e[r][1].type && 'space' !== e[r][1].type)))
      for (n = o; ++n < r; )
       if ('codeTextData' === e[n][1].type) {
        (e[o][1].type = 'codeTextPadding'), (e[r][1].type = 'codeTextPadding'), (o += 2), (r -= 2);
        break;
       }
     (n = o - 1), r++;
     for (; ++n <= r; ) void 0 === t ? n !== r && 'lineEnding' !== e[n][1].type && (t = n) : (n !== r && 'lineEnding' !== e[n][1].type) || ((e[t][1].type = 'codeTextData'), n !== t + 2 && ((e[t][1].end = e[n - 1][1].end), e.splice(t + 2, n - t - 2), (r -= n - t - 2), (n = t + 2)), (t = void 0));
     return e;
    },
    previous: function (e) {
     return 96 !== e || 'characterEscape' === this.events[this.events.length - 1][1].type;
    },
   };
   const Qn = { 42: sn, 43: sn, 45: sn, 48: sn, 49: sn, 50: sn, 51: sn, 52: sn, 53: sn, 54: sn, 55: sn, 56: sn, 57: sn, 62: fn },
    Xn = { 91: yn },
    Yn = { [-2]: vn, [-1]: vn, 32: vn },
    $n = { 35: bn, 42: an, 45: [wn, an], 60: En, 61: wn, 95: an, 96: An, 126: An },
    Jn = { 38: Dn, 92: Ln },
    Gn = { [-5]: zn, [-4]: zn, [-3]: zn, 33: _n, 38: Dn, 42: Hn, 60: [Vn, qn], 91: Zn, 92: [Wn, Ln], 93: Mn, 95: Hn, 96: Kn },
    et = { null: [Hn, Je] },
    nt = { null: [42, 95] },
    tt = { null: [] };
   function rt(e) {
    const n = (function (e) {
      const n = {};
      let t = -1;
      for (; ++t < e.length; ) Ae(n, e[t]);
      return n;
     })([o, ...((e || {}).extensions || [])]),
     t = { defined: [], lazy: {}, constructs: n, content: r(Ze), document: r(We), flow: r($e), string: r(Ge), text: r(en) };
    return t;
    function r(e) {
     return function (n) {
      return ln(t, e, n);
     };
    }
   }
   const ot = /[\0\t\n\r]/g;
   function it(e, n) {
    const t = Number.parseInt(e, n);
    return t < 9 || 11 === t || (t > 13 && t < 32) || (t > 126 && t < 160) || (t > 55295 && t < 57344) || (t > 64975 && t < 65008) || 65535 == (65535 & t) || 65534 == (65535 & t) || t > 1114111 ? '\ufffd' : String.fromCodePoint(t);
   }
   const lt = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
   function at(e, n, t) {
    if (n) return n;
    if (35 === t.charCodeAt(0)) {
     const e = t.charCodeAt(1),
      n = 120 === e || 88 === e;
     return it(t.slice(n ? 2 : 1), n ? 16 : 10);
    }
    return jn(t) || e;
   }
   const st = {}.hasOwnProperty;
   function ct(e, n, t) {
    return (
     'string' != typeof n && ((t = n), (n = void 0)),
     (function (e) {
      const n = { transforms: [], canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'], enter: { autolink: i(ne), autolinkProtocol: E, autolinkEmail: E, atxHeading: i($), blockQuote: i(Z), characterEscape: E, characterReference: E, codeFenced: i(W), codeFencedFenceInfo: l, codeFencedFenceMeta: l, codeIndented: i(W, l), codeText: i(K, l), codeTextData: E, data: E, codeFlowValue: E, definition: i(Q), definitionDestinationString: l, definitionLabelString: l, definitionTitleString: l, emphasis: i(X), hardBreakEscape: i(J), hardBreakTrailing: i(J), htmlFlow: i(G, l), htmlFlowData: E, htmlText: i(G, l), htmlTextData: E, image: i(ee), label: l, link: i(ne), listItem: i(re), listItemValue: p, listOrdered: i(te, f), listUnordered: i(te), paragraph: i(oe), reference: _, referenceString: l, resourceDestinationString: l, resourceTitleString: l, setextHeading: i($), strong: i(ie), thematicBreak: i(ae) }, exit: { atxHeading: s(), atxHeadingSequence: b, autolink: s(), autolinkEmail: q, autolinkProtocol: V, blockQuote: s(), characterEscapeValue: P, characterReferenceMarkerHexadecimal: H, characterReferenceMarkerNumeric: H, characterReferenceValue: U, codeFenced: s(g), codeFencedFence: m, codeFencedFenceInfo: d, codeFencedFenceMeta: h, codeFlowValue: P, codeIndented: s(y), codeText: s(j), codeTextData: P, data: P, definition: s(), definitionDestinationString: k, definitionLabelString: x, definitionTitleString: v, emphasis: s(), hardBreakEscape: s(I), hardBreakTrailing: s(I), htmlFlow: s(A), htmlFlowData: P, htmlText: s(O), htmlTextData: P, image: s(L), label: M, labelText: z, lineEnding: T, link: s(D), listItem: s(), listOrdered: s(), listUnordered: s(), paragraph: s(), referenceString: B, resourceDestinationString: N, resourceTitleString: F, resource: R, setextHeading: s(C), setextHeadingLineSequence: S, setextHeadingText: w, strong: s(), thematicBreak: s() } };
      ft(n, (e || {}).mdastExtensions || []);
      const t = {};
      return r;
      function r(e) {
       let r = { type: 'root', children: [] };
       const i = { stack: [r], tokenStack: [], config: n, enter: a, exit: c, buffer: l, resume: u, data: t },
        s = [];
       let f = -1;
       for (; ++f < e.length; )
        if ('listOrdered' === e[f][1].type || 'listUnordered' === e[f][1].type)
         if ('enter' === e[f][0]) s.push(f);
         else {
          f = o(e, s.pop(), f);
         }
       for (f = -1; ++f < e.length; ) {
        const t = n[e[f][0]];
        st.call(t, e[f][1].type) && t[e[f][1].type].call(Object.assign({ sliceSerialize: e[f][2].sliceSerialize }, i), e[f][1]);
       }
       if (i.tokenStack.length > 0) {
        const e = i.tokenStack[i.tokenStack.length - 1];
        (e[1] || dt).call(i, void 0, e[0]);
       }
       for (r.position = { start: ut(e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 }), end: ut(e.length > 0 ? e[e.length - 2][1].end : { line: 1, column: 1, offset: 0 }) }, f = -1; ++f < n.transforms.length; ) r = n.transforms[f](r) || r;
       return r;
      }
      function o(e, n, t) {
       let r,
        o,
        i,
        l,
        a = n - 1,
        s = -1,
        c = !1;
       for (; ++a <= t; ) {
        const n = e[a];
        switch (n[1].type) {
         case 'listUnordered':
         case 'listOrdered':
         case 'blockQuote':
          'enter' === n[0] ? s++ : s--, (l = void 0);
          break;
         case 'lineEndingBlank':
          'enter' === n[0] && (!r || l || s || i || (i = a), (l = void 0));
          break;
         case 'linePrefix':
         case 'listItemValue':
         case 'listItemMarker':
         case 'listItemPrefix':
         case 'listItemPrefixWhitespace':
          break;
         default:
          l = void 0;
        }
        if ((!s && 'enter' === n[0] && 'listItemPrefix' === n[1].type) || (-1 === s && 'exit' === n[0] && ('listUnordered' === n[1].type || 'listOrdered' === n[1].type))) {
         if (r) {
          let l = a;
          for (o = void 0; l--; ) {
           const n = e[l];
           if ('lineEnding' === n[1].type || 'lineEndingBlank' === n[1].type) {
            if ('exit' === n[0]) continue;
            o && ((e[o][1].type = 'lineEndingBlank'), (c = !0)), (n[1].type = 'lineEnding'), (o = l);
           } else if ('linePrefix' !== n[1].type && 'blockQuotePrefix' !== n[1].type && 'blockQuotePrefixWhitespace' !== n[1].type && 'blockQuoteMarker' !== n[1].type && 'listItemIndent' !== n[1].type) break;
          }
          i && (!o || i < o) && (r._spread = !0), (r.end = Object.assign({}, o ? e[o][1].start : n[1].end)), e.splice(o || a, 0, ['exit', r, n[2]]), a++, t++;
         }
         if ('listItemPrefix' === n[1].type) {
          const o = { type: 'listItem', _spread: !1, start: Object.assign({}, n[1].start), end: void 0 };
          (r = o), e.splice(a, 0, ['enter', o, n[2]]), a++, t++, (i = void 0), (l = !0);
         }
        }
       }
       return (e[n][1]._spread = c), t;
      }
      function i(e, n) {
       return t;
       function t(t) {
        a.call(this, e(t), t), n && n.call(this, t);
       }
      }
      function l() {
       this.stack.push({ type: 'fragment', children: [] });
      }
      function a(e, n, t) {
       this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([n, t]), (e.position = { start: ut(n.start), end: void 0 });
      }
      function s(e) {
       return n;
       function n(n) {
        e && e.call(this, n), c.call(this, n);
       }
      }
      function c(e, n) {
       const t = this.stack.pop(),
        r = this.tokenStack.pop();
       if (!r) throw new Error('Cannot close `' + e.type + '` (' + Y({ start: e.start, end: e.end }) + '): it\u2019s not open');
       if (r[0].type !== e.type)
        if (n) n.call(this, e, r[0]);
        else {
         (r[1] || dt).call(this, e, r[0]);
        }
       t.position.end = ut(e.end);
      }
      function u() {
       return (function (e, n) {
        const t = n || be;
        return we(e, 'boolean' != typeof t.includeImageAlt || t.includeImageAlt, 'boolean' != typeof t.includeHtml || t.includeHtml);
       })(this.stack.pop());
      }
      function f() {
       this.data.expectingFirstListItemValue = !0;
      }
      function p(e) {
       if (this.data.expectingFirstListItemValue) {
        (this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10)), (this.data.expectingFirstListItemValue = void 0);
       }
      }
      function d() {
       const e = this.resume();
       this.stack[this.stack.length - 1].lang = e;
      }
      function h() {
       const e = this.resume();
       this.stack[this.stack.length - 1].meta = e;
      }
      function m() {
       this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
      }
      function g() {
       const e = this.resume();
       (this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')), (this.data.flowCodeInside = void 0);
      }
      function y() {
       const e = this.resume();
       this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, '');
      }
      function x(e) {
       const n = this.resume(),
        t = this.stack[this.stack.length - 1];
       (t.label = n), (t.identifier = gn(this.sliceSerialize(e)).toLowerCase());
      }
      function v() {
       const e = this.resume();
       this.stack[this.stack.length - 1].title = e;
      }
      function k() {
       const e = this.resume();
       this.stack[this.stack.length - 1].url = e;
      }
      function b(e) {
       const n = this.stack[this.stack.length - 1];
       if (!n.depth) {
        const t = this.sliceSerialize(e).length;
        n.depth = t;
       }
      }
      function w() {
       this.data.setextHeadingSlurpLineEnding = !0;
      }
      function S(e) {
       this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
      }
      function C() {
       this.data.setextHeadingSlurpLineEnding = void 0;
      }
      function E(e) {
       const n = this.stack[this.stack.length - 1].children;
       let t = n[n.length - 1];
       (t && 'text' === t.type) || ((t = le()), (t.position = { start: ut(e.start), end: void 0 }), n.push(t)), this.stack.push(t);
      }
      function P(e) {
       const n = this.stack.pop();
       (n.value += this.sliceSerialize(e)), (n.position.end = ut(e.end));
      }
      function T(e) {
       const t = this.stack[this.stack.length - 1];
       if (this.data.atHardBreak) {
        return (t.children[t.children.length - 1].position.end = ut(e.end)), void (this.data.atHardBreak = void 0);
       }
       !this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(t.type) && (E.call(this, e), P.call(this, e));
      }
      function I() {
       this.data.atHardBreak = !0;
      }
      function A() {
       const e = this.resume();
       this.stack[this.stack.length - 1].value = e;
      }
      function O() {
       const e = this.resume();
       this.stack[this.stack.length - 1].value = e;
      }
      function j() {
       const e = this.resume();
       this.stack[this.stack.length - 1].value = e;
      }
      function D() {
       const e = this.stack[this.stack.length - 1];
       if (this.data.inReference) {
        const n = this.data.referenceType || 'shortcut';
        (e.type += 'Reference'), (e.referenceType = n), delete e.url, delete e.title;
       } else delete e.identifier, delete e.label;
       this.data.referenceType = void 0;
      }
      function L() {
       const e = this.stack[this.stack.length - 1];
       if (this.data.inReference) {
        const n = this.data.referenceType || 'shortcut';
        (e.type += 'Reference'), (e.referenceType = n), delete e.url, delete e.title;
       } else delete e.identifier, delete e.label;
       this.data.referenceType = void 0;
      }
      function z(e) {
       const n = this.sliceSerialize(e),
        t = this.stack[this.stack.length - 2];
       (t.label = (function (e) {
        return e.replace(lt, at);
       })(n)),
        (t.identifier = gn(n).toLowerCase());
      }
      function M() {
       const e = this.stack[this.stack.length - 1],
        n = this.resume(),
        t = this.stack[this.stack.length - 1];
       if (((this.data.inReference = !0), 'link' === t.type)) {
        const n = e.children;
        t.children = n;
       } else t.alt = n;
      }
      function N() {
       const e = this.resume();
       this.stack[this.stack.length - 1].url = e;
      }
      function F() {
       const e = this.resume();
       this.stack[this.stack.length - 1].title = e;
      }
      function R() {
       this.data.inReference = void 0;
      }
      function _() {
       this.data.referenceType = 'collapsed';
      }
      function B(e) {
       const n = this.resume(),
        t = this.stack[this.stack.length - 1];
       (t.label = n), (t.identifier = gn(this.sliceSerialize(e)).toLowerCase()), (this.data.referenceType = 'full');
      }
      function H(e) {
       this.data.characterReferenceType = e.type;
      }
      function U(e) {
       const n = this.sliceSerialize(e),
        t = this.data.characterReferenceType;
       let r;
       if (t) (r = it(n, 'characterReferenceMarkerNumeric' === t ? 10 : 16)), (this.data.characterReferenceType = void 0);
       else {
        r = jn(n);
       }
       const o = this.stack.pop();
       (o.value += r), (o.position.end = ut(e.end));
      }
      function V(e) {
       P.call(this, e);
       this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
      }
      function q(e) {
       P.call(this, e);
       this.stack[this.stack.length - 1].url = 'mailto:' + this.sliceSerialize(e);
      }
      function Z() {
       return { type: 'blockquote', children: [] };
      }
      function W() {
       return { type: 'code', lang: null, meta: null, value: '' };
      }
      function K() {
       return { type: 'inlineCode', value: '' };
      }
      function Q() {
       return { type: 'definition', identifier: '', label: null, title: null, url: '' };
      }
      function X() {
       return { type: 'emphasis', children: [] };
      }
      function $() {
       return { type: 'heading', depth: 0, children: [] };
      }
      function J() {
       return { type: 'break' };
      }
      function G() {
       return { type: 'html', value: '' };
      }
      function ee() {
       return { type: 'image', title: null, url: '', alt: null };
      }
      function ne() {
       return { type: 'link', title: null, url: '', children: [] };
      }
      function te(e) {
       return { type: 'list', ordered: 'listOrdered' === e.type, start: null, spread: e._spread, children: [] };
      }
      function re(e) {
       return { type: 'listItem', spread: e._spread, checked: null, children: [] };
      }
      function oe() {
       return { type: 'paragraph', children: [] };
      }
      function ie() {
       return { type: 'strong', children: [] };
      }
      function le() {
       return { type: 'text', value: '' };
      }
      function ae() {
       return { type: 'thematicBreak' };
      }
     })(t)(
      (function (e) {
       for (; !Pe(e); );
       return e;
      })(
       rt(t)
        .document()
        .write(
         (function () {
          let e,
           n = 1,
           t = '',
           r = !0;
          return function (o, i, l) {
           const a = [];
           let s, c, u, f, p;
           for (o = t + ('string' == typeof o ? o.toString() : new TextDecoder(i || void 0).decode(o)), u = 0, t = '', r && (65279 === o.charCodeAt(0) && u++, (r = void 0)); u < o.length; ) {
            if (((ot.lastIndex = u), (s = ot.exec(o)), (f = s && void 0 !== s.index ? s.index : o.length), (p = o.charCodeAt(f)), !s)) {
             t = o.slice(u);
             break;
            }
            if (10 === p && u === f && e) a.push(-3), (e = void 0);
            else
             switch ((e && (a.push(-5), (e = void 0)), u < f && (a.push(o.slice(u, f)), (n += f - u)), p)) {
              case 0:
               a.push(65533), n++;
               break;
              case 9:
               for (c = 4 * Math.ceil(n / 4), a.push(-2); n++ < c; ) a.push(-1);
               break;
              case 10:
               a.push(-4), (n = 1);
               break;
              default:
               (e = !0), (n = 1);
             }
            u = f + 1;
           }
           return l && (e && a.push(-5), t && a.push(t), a.push(null)), a;
          };
         })()(e, n, !0),
        ),
      ),
     )
    );
   }
   function ut(e) {
    return { line: e.line, column: e.column, offset: e.offset };
   }
   function ft(e, n) {
    let t = -1;
    for (; ++t < n.length; ) {
     const r = n[t];
     Array.isArray(r) ? ft(e, r) : pt(e, r);
    }
   }
   function pt(e, n) {
    let t;
    for (t in n)
     if (st.call(n, t))
      switch (t) {
       case 'canContainEols': {
        const r = n[t];
        r && e[t].push(...r);
        break;
       }
       case 'transforms': {
        const r = n[t];
        r && e[t].push(...r);
        break;
       }
       case 'enter':
       case 'exit': {
        const r = n[t];
        r && Object.assign(e[t], r);
        break;
       }
      }
   }
   function dt(e, n) {
    throw e ? new Error('Cannot close `' + e.type + '` (' + Y({ start: e.start, end: e.end }) + '): a different token (`' + n.type + '`, ' + Y({ start: n.start, end: n.end }) + ') is open') : new Error('Cannot close document, a token (`' + n.type + '`, ' + Y({ start: n.start, end: n.end }) + ') is still open');
   }
   function ht(e) {
    const n = this;
    n.parser = function (t) {
     return ct(t, { ...n.data('settings'), ...e, extensions: n.data('micromarkExtensions') || [], mdastExtensions: n.data('fromMarkdownExtensions') || [] });
    };
   }
   const mt = 'object' == typeof self ? self : globalThis,
    gt = (e) =>
     ((e, n) => {
      const t = (n, t) => (e.set(t, n), n),
       r = (o) => {
        if (e.has(o)) return e.get(o);
        const [i, l] = n[o];
        switch (i) {
         case 0:
         case -1:
          return t(l, o);
         case 1: {
          const e = t([], o);
          for (const n of l) e.push(r(n));
          return e;
         }
         case 2: {
          const e = t({}, o);
          for (const [n, t] of l) e[r(n)] = r(t);
          return e;
         }
         case 3:
          return t(new Date(l), o);
         case 4: {
          const { source: e, flags: n } = l;
          return t(new RegExp(e, n), o);
         }
         case 5: {
          const e = t(new Map(), o);
          for (const [n, t] of l) e.set(r(n), r(t));
          return e;
         }
         case 6: {
          const e = t(new Set(), o);
          for (const n of l) e.add(r(n));
          return e;
         }
         case 7: {
          const { name: e, message: n } = l;
          return t(new mt[e](n), o);
         }
         case 8:
          return t(BigInt(l), o);
         case 'BigInt':
          return t(Object(BigInt(l)), o);
        }
        return t(new mt[i](l), o);
       };
      return r;
     })(
      new Map(),
      e,
     )(0),
    yt = '',
    { toString: xt } = {},
    { keys: vt } = Object,
    kt = (e) => {
     const n = typeof e;
     if ('object' !== n || !e) return [0, n];
     const t = xt.call(e).slice(8, -1);
     switch (t) {
      case 'Array':
       return [1, yt];
      case 'Object':
       return [2, yt];
      case 'Date':
       return [3, yt];
      case 'RegExp':
       return [4, yt];
      case 'Map':
       return [5, yt];
      case 'Set':
       return [6, yt];
     }
     return t.includes('Array') ? [1, t] : t.includes('Error') ? [7, t] : [2, t];
    },
    bt = ([e, n]) => 0 === e && ('function' === n || 'symbol' === n),
    wt = (e, { json: n, lossy: t } = {}) => {
     const r = [];
     return (
      ((e, n, t, r) => {
       const o = (e, n) => {
         const o = r.push(e) - 1;
         return t.set(n, o), o;
        },
        i = (r) => {
         if (t.has(r)) return t.get(r);
         let [l, a] = kt(r);
         switch (l) {
          case 0: {
           let n = r;
           switch (a) {
            case 'bigint':
             (l = 8), (n = r.toString());
             break;
            case 'function':
            case 'symbol':
             if (e) throw new TypeError('unable to serialize ' + a);
             n = null;
             break;
            case 'undefined':
             return o([-1], r);
           }
           return o([l, n], r);
          }
          case 1: {
           if (a) return o([a, [...r]], r);
           const e = [],
            n = o([l, e], r);
           for (const t of r) e.push(i(t));
           return n;
          }
          case 2: {
           if (a)
            switch (a) {
             case 'BigInt':
              return o([a, r.toString()], r);
             case 'Boolean':
             case 'Number':
             case 'String':
              return o([a, r.valueOf()], r);
            }
           if (n && 'toJSON' in r) return i(r.toJSON());
           const t = [],
            s = o([l, t], r);
           for (const n of vt(r)) (!e && bt(kt(r[n]))) || t.push([i(n), i(r[n])]);
           return s;
          }
          case 3:
           return o([l, r.toISOString()], r);
          case 4: {
           const { source: e, flags: n } = r;
           return o([l, { source: e, flags: n }], r);
          }
          case 5: {
           const n = [],
            t = o([l, n], r);
           for (const [o, l] of r) (e || (!bt(kt(o)) && !bt(kt(l)))) && n.push([i(o), i(l)]);
           return t;
          }
          case 6: {
           const n = [],
            t = o([l, n], r);
           for (const o of r) (!e && bt(kt(o))) || n.push(i(o));
           return t;
          }
         }
         const { message: s } = r;
         return o([l, { name: a, message: s }], r);
        };
       return i;
      })(
       !(n || t),
       !!n,
       new Map(),
       r,
      )(e),
      r
     );
    },
    St = 'function' == typeof structuredClone ? (e, n) => (n && ('json' in n || 'lossy' in n) ? gt(wt(e, n)) : structuredClone(e)) : (e, n) => gt(wt(e, n));
   function Ct(e) {
    const n = [];
    let t = -1,
     r = 0,
     o = 0;
    for (; ++t < e.length; ) {
     const i = e.charCodeAt(t);
     let l = '';
     if (37 === i && Le(e.charCodeAt(t + 1)) && Le(e.charCodeAt(t + 2))) o = 2;
     else if (i < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (l = String.fromCharCode(i));
     else if (i > 55295 && i < 57344) {
      const n = e.charCodeAt(t + 1);
      i < 56320 && n > 56319 && n < 57344 ? ((l = String.fromCharCode(i, n)), (o = 1)) : (l = '\ufffd');
     } else l = String.fromCharCode(i);
     l && (n.push(e.slice(r, t), encodeURIComponent(l)), (r = t + o + 1), (l = '')), o && ((t += o), (o = 0));
    }
    return n.join('') + e.slice(r);
   }
   function Et(e, n) {
    const t = [{ type: 'text', value: '\u21a9' }];
    return n > 1 && t.push({ type: 'element', tagName: 'sup', properties: {}, children: [{ type: 'text', value: String(n) }] }), t;
   }
   function Pt(e, n) {
    return 'Back to reference ' + (e + 1) + (n > 1 ? '-' + n : '');
   }
   const Tt = function (e) {
    if (null == e) return At;
    if ('function' == typeof e) return It(e);
    if ('object' == typeof e)
     return Array.isArray(e)
      ? (function (e) {
         const n = [];
         let t = -1;
         for (; ++t < e.length; ) n[t] = Tt(e[t]);
         return It(r);
         function r(...e) {
          let t = -1;
          for (; ++t < n.length; ) if (n[t].apply(this, e)) return !0;
          return !1;
         }
        })(e)
      : (function (e) {
         const n = e;
         return It(t);
         function t(t) {
          const r = t;
          let o;
          for (o in e) if (r[o] !== n[o]) return !1;
          return !0;
         }
        })(e);
    if ('string' == typeof e)
     return (function (e) {
      return It(n);
      function n(n) {
       return n && n.type === e;
      }
     })(e);
    throw new Error('Expected function, string, or object as test');
   };
   function It(e) {
    return function (n, t, r) {
     return Boolean(Ot(n) && e.call(this, n, 'number' == typeof t ? t : void 0, r || void 0));
    };
   }
   function At() {
    return !0;
   }
   function Ot(e) {
    return null !== e && 'object' == typeof e && 'type' in e;
   }
   const jt = [],
    Dt = !0,
    Lt = !1,
    zt = 'skip';
   function Mt(e, n, t, r) {
    let o;
    'function' == typeof n && 'function' != typeof t ? ((r = t), (t = n)) : (o = n);
    const i = Tt(o),
     l = r ? -1 : 1;
    !(function e(o, a, s) {
     const c = o && 'object' == typeof o ? o : {};
     if ('string' == typeof c.type) {
      const e = 'string' == typeof c.tagName ? c.tagName : 'string' == typeof c.name ? c.name : void 0;
      Object.defineProperty(u, 'name', { value: 'node (' + o.type + (e ? '<' + e + '>' : '') + ')' });
     }
     return u;
     function u() {
      let c,
       u,
       f,
       p = jt;
      if (
       (!n || i(o, a, s[s.length - 1] || void 0)) &&
       ((p = (function (e) {
        if (Array.isArray(e)) return e;
        if ('number' == typeof e) return [Dt, e];
        return null == e ? jt : [e];
       })(t(o, s))),
       p[0] === Lt)
      )
       return p;
      if ('children' in o && o.children) {
       const n = o;
       if (n.children && p[0] !== zt)
        for (u = (r ? n.children.length : -1) + l, f = s.concat(n); u > -1 && u < n.children.length; ) {
         const t = n.children[u];
         if (((c = e(t, u, f)()), c[0] === Lt)) return c;
         u = 'number' == typeof c[1] ? c[1] : u + l;
        }
      }
      return p;
     }
    })(e, void 0, [])();
   }
   function Nt(e, n, t, r) {
    let o, i, l;
    'function' == typeof n && 'function' != typeof t ? ((i = void 0), (l = n), (o = t)) : ((i = n), (l = t), (o = r)),
     Mt(
      e,
      i,
      function (e, n) {
       const t = n[n.length - 1],
        r = t ? t.children.indexOf(e) : void 0;
       return l(e, r, t);
      },
      o,
     );
   }
   function Ft(e, n) {
    const t = n.referenceType;
    let r = ']';
    if (('collapsed' === t ? (r += '[]') : 'full' === t && (r += '[' + (n.label || n.identifier) + ']'), 'imageReference' === n.type)) return [{ type: 'text', value: '![' + n.alt + r }];
    const o = e.all(n),
     i = o[0];
    i && 'text' === i.type ? (i.value = '[' + i.value) : o.unshift({ type: 'text', value: '[' });
    const l = o[o.length - 1];
    return l && 'text' === l.type ? (l.value += r) : o.push({ type: 'text', value: r }), o;
   }
   function Rt(e) {
    const n = e.spread;
    return null == n ? e.children.length > 1 : n;
   }
   const _t = 9,
    Bt = 32;
   function Ht(e) {
    const n = String(e),
     t = /\r?\n|\r/g;
    let r = t.exec(n),
     o = 0;
    const i = [];
    for (; r; ) i.push(Ut(n.slice(o, r.index), o > 0, !0), r[0]), (o = r.index + r[0].length), (r = t.exec(n));
    return i.push(Ut(n.slice(o), o > 0, !1)), i.join('');
   }
   function Ut(e, n, t) {
    let r = 0,
     o = e.length;
    if (n) {
     let n = e.codePointAt(r);
     for (; n === _t || n === Bt; ) r++, (n = e.codePointAt(r));
    }
    if (t) {
     let n = e.codePointAt(o - 1);
     for (; n === _t || n === Bt; ) o--, (n = e.codePointAt(o - 1));
    }
    return o > r ? e.slice(r, o) : '';
   }
   const Vt = {
    blockquote: function (e, n) {
     const t = { type: 'element', tagName: 'blockquote', properties: {}, children: e.wrap(e.all(n), !0) };
     return e.patch(n, t), e.applyData(n, t);
    },
    break: function (e, n) {
     const t = { type: 'element', tagName: 'br', properties: {}, children: [] };
     return e.patch(n, t), [e.applyData(n, t), { type: 'text', value: '\n' }];
    },
    code: function (e, n) {
     const t = n.value ? n.value + '\n' : '',
      r = {};
     n.lang && (r.className = ['language-' + n.lang]);
     let o = { type: 'element', tagName: 'code', properties: r, children: [{ type: 'text', value: t }] };
     return n.meta && (o.data = { meta: n.meta }), e.patch(n, o), (o = e.applyData(n, o)), (o = { type: 'element', tagName: 'pre', properties: {}, children: [o] }), e.patch(n, o), o;
    },
    delete: function (e, n) {
     const t = { type: 'element', tagName: 'del', properties: {}, children: e.all(n) };
     return e.patch(n, t), e.applyData(n, t);
    },
    emphasis: function (e, n) {
     const t = { type: 'element', tagName: 'em', properties: {}, children: e.all(n) };
     return e.patch(n, t), e.applyData(n, t);
    },
    footnoteReference: function (e, n) {
     const t = 'string' == typeof e.options.clobberPrefix ? e.options.clobberPrefix : 'user-content-',
      r = String(n.identifier).toUpperCase(),
      o = Ct(r.toLowerCase()),
      i = e.footnoteOrder.indexOf(r);
     let l,
      a = e.footnoteCounts.get(r);
     void 0 === a ? ((a = 0), e.footnoteOrder.push(r), (l = e.footnoteOrder.length)) : (l = i + 1), (a += 1), e.footnoteCounts.set(r, a);
     const s = { type: 'element', tagName: 'a', properties: { href: '#' + t + 'fn-' + o, id: t + 'fnref-' + o + (a > 1 ? '-' + a : ''), dataFootnoteRef: !0, ariaDescribedBy: ['footnote-label'] }, children: [{ type: 'text', value: String(l) }] };
     e.patch(n, s);
     const c = { type: 'element', tagName: 'sup', properties: {}, children: [s] };
     return e.patch(n, c), e.applyData(n, c);
    },
    heading: function (e, n) {
     const t = { type: 'element', tagName: 'h' + n.depth, properties: {}, children: e.all(n) };
     return e.patch(n, t), e.applyData(n, t);
    },
    html: function (e, n) {
     if (e.options.allowDangerousHtml) {
      const t = { type: 'raw', value: n.value };
      return e.patch(n, t), e.applyData(n, t);
     }
    },
    imageReference: function (e, n) {
     const t = String(n.identifier).toUpperCase(),
      r = e.definitionById.get(t);
     if (!r) return Ft(e, n);
     const o = { src: Ct(r.url || ''), alt: n.alt };
     null !== r.title && void 0 !== r.title && (o.title = r.title);
     const i = { type: 'element', tagName: 'img', properties: o, children: [] };
     return e.patch(n, i), e.applyData(n, i);
    },
    image: function (e, n) {
     const t = { src: Ct(n.url) };
     null !== n.alt && void 0 !== n.alt && (t.alt = n.alt), null !== n.title && void 0 !== n.title && (t.title = n.title);
     const r = { type: 'element', tagName: 'img', properties: t, children: [] };
     return e.patch(n, r), e.applyData(n, r);
    },
    inlineCode: function (e, n) {
     const t = { type: 'text', value: n.value.replace(/\r?\n|\r/g, ' ') };
     e.patch(n, t);
     const r = { type: 'element', tagName: 'code', properties: {}, children: [t] };
     return e.patch(n, r), e.applyData(n, r);
    },
    linkReference: function (e, n) {
     const t = String(n.identifier).toUpperCase(),
      r = e.definitionById.get(t);
     if (!r) return Ft(e, n);
     const o = { href: Ct(r.url || '') };
     null !== r.title && void 0 !== r.title && (o.title = r.title);
     const i = { type: 'element', tagName: 'a', properties: o, children: e.all(n) };
     return e.patch(n, i), e.applyData(n, i);
    },
    link: function (e, n) {
     const t = { href: Ct(n.url) };
     null !== n.title && void 0 !== n.title && (t.title = n.title);
     const r = { type: 'element', tagName: 'a', properties: t, children: e.all(n) };
     return e.patch(n, r), e.applyData(n, r);
    },
    listItem: function (e, n, t) {
     const r = e.all(n),
      o = t
       ? (function (e) {
          let n = !1;
          if ('list' === e.type) {
           n = e.spread || !1;
           const t = e.children;
           let r = -1;
           for (; !n && ++r < t.length; ) n = Rt(t[r]);
          }
          return n;
         })(t)
       : Rt(n),
      i = {},
      l = [];
     if ('boolean' == typeof n.checked) {
      const e = r[0];
      let t;
      e && 'element' === e.type && 'p' === e.tagName ? (t = e) : ((t = { type: 'element', tagName: 'p', properties: {}, children: [] }), r.unshift(t)), t.children.length > 0 && t.children.unshift({ type: 'text', value: ' ' }), t.children.unshift({ type: 'element', tagName: 'input', properties: { type: 'checkbox', checked: n.checked, disabled: !0 }, children: [] }), (i.className = ['task-list-item']);
     }
     let a = -1;
     for (; ++a < r.length; ) {
      const e = r[a];
      (o || 0 !== a || 'element' !== e.type || 'p' !== e.tagName) && l.push({ type: 'text', value: '\n' }), 'element' !== e.type || 'p' !== e.tagName || o ? l.push(e) : l.push(...e.children);
     }
     const s = r[r.length - 1];
     s && (o || 'element' !== s.type || 'p' !== s.tagName) && l.push({ type: 'text', value: '\n' });
     const c = { type: 'element', tagName: 'li', properties: i, children: l };
     return e.patch(n, c), e.applyData(n, c);
    },
    list: function (e, n) {
     const t = {},
      r = e.all(n);
     let o = -1;
     for ('number' == typeof n.start && 1 !== n.start && (t.start = n.start); ++o < r.length; ) {
      const e = r[o];
      if ('element' === e.type && 'li' === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes('task-list-item')) {
       t.className = ['contains-task-list'];
       break;
      }
     }
     const i = { type: 'element', tagName: n.ordered ? 'ol' : 'ul', properties: t, children: e.wrap(r, !0) };
     return e.patch(n, i), e.applyData(n, i);
    },
    paragraph: function (e, n) {
     const t = { type: 'element', tagName: 'p', properties: {}, children: e.all(n) };
     return e.patch(n, t), e.applyData(n, t);
    },
    root: function (e, n) {
     const t = { type: 'root', children: e.wrap(e.all(n)) };
     return e.patch(n, t), e.applyData(n, t);
    },
    strong: function (e, n) {
     const t = { type: 'element', tagName: 'strong', properties: {}, children: e.all(n) };
     return e.patch(n, t), e.applyData(n, t);
    },
    table: function (e, n) {
     const t = e.all(n),
      r = t.shift(),
      o = [];
     if (r) {
      const t = { type: 'element', tagName: 'thead', properties: {}, children: e.wrap([r], !0) };
      e.patch(n.children[0], t), o.push(t);
     }
     if (t.length > 0) {
      const r = { type: 'element', tagName: 'tbody', properties: {}, children: e.wrap(t, !0) },
       i = Q(n.children[1]),
       l = K(n.children[n.children.length - 1]);
      i && l && (r.position = { start: i, end: l }), o.push(r);
     }
     const i = { type: 'element', tagName: 'table', properties: {}, children: e.wrap(o, !0) };
     return e.patch(n, i), e.applyData(n, i);
    },
    tableCell: function (e, n) {
     const t = { type: 'element', tagName: 'td', properties: {}, children: e.all(n) };
     return e.patch(n, t), e.applyData(n, t);
    },
    tableRow: function (e, n, t) {
     const r = t ? t.children : void 0,
      o = 0 === (r ? r.indexOf(n) : 1) ? 'th' : 'td',
      i = t && 'table' === t.type ? t.align : void 0,
      l = i ? i.length : n.children.length;
     let a = -1;
     const s = [];
     for (; ++a < l; ) {
      const t = n.children[a],
       r = {},
       l = i ? i[a] : void 0;
      l && (r.align = l);
      let c = { type: 'element', tagName: o, properties: r, children: [] };
      t && ((c.children = e.all(t)), e.patch(t, c), (c = e.applyData(t, c))), s.push(c);
     }
     const c = { type: 'element', tagName: 'tr', properties: {}, children: e.wrap(s, !0) };
     return e.patch(n, c), e.applyData(n, c);
    },
    text: function (e, n) {
     const t = { type: 'text', value: Ht(String(n.value)) };
     return e.patch(n, t), e.applyData(n, t);
    },
    thematicBreak: function (e, n) {
     const t = { type: 'element', tagName: 'hr', properties: {}, children: [] };
     return e.patch(n, t), e.applyData(n, t);
    },
    toml: qt,
    yaml: qt,
    definition: qt,
    footnoteDefinition: qt,
   };
   function qt() {}
   const Zt = {}.hasOwnProperty,
    Wt = {};
   function Kt(e, n) {
    e.position &&
     (n.position = (function (e) {
      const n = Q(e),
       t = K(e);
      if (n && t) return { start: n, end: t };
     })(e));
   }
   function Qt(e, n) {
    let t = n;
    if (e && e.data) {
     const n = e.data.hName,
      r = e.data.hChildren,
      o = e.data.hProperties;
     if ('string' == typeof n)
      if ('element' === t.type) t.tagName = n;
      else {
       t = { type: 'element', tagName: n, properties: {}, children: 'children' in t ? t.children : [t] };
      }
     'element' === t.type && o && Object.assign(t.properties, St(o)), 'children' in t && t.children && null != r && (t.children = r);
    }
    return t;
   }
   function Xt(e, n) {
    const t = n.data || {},
     r = !('value' in n) || Zt.call(t, 'hProperties') || Zt.call(t, 'hChildren') ? { type: 'element', tagName: 'div', properties: {}, children: e.all(n) } : { type: 'text', value: n.value };
    return e.patch(n, r), e.applyData(n, r);
   }
   function Yt(e, n) {
    const t = [];
    let r = -1;
    for (n && t.push({ type: 'text', value: '\n' }); ++r < e.length; ) r && t.push({ type: 'text', value: '\n' }), t.push(e[r]);
    return n && e.length > 0 && t.push({ type: 'text', value: '\n' }), t;
   }
   function $t(e) {
    let n = 0,
     t = e.charCodeAt(n);
    for (; 9 === t || 32 === t; ) n++, (t = e.charCodeAt(n));
    return e.slice(n);
   }
   function Jt(e, n) {
    const t = (function (e, n) {
      const t = n || Wt,
       r = new Map(),
       o = new Map(),
       i = new Map(),
       l = { ...Vt, ...t.handlers },
       a = {
        all: function (e) {
         const n = [];
         if ('children' in e) {
          const t = e.children;
          let r = -1;
          for (; ++r < t.length; ) {
           const o = a.one(t[r], e);
           if (o) {
            if (r && 'break' === t[r - 1].type && (Array.isArray(o) || 'text' !== o.type || (o.value = $t(o.value)), !Array.isArray(o) && 'element' === o.type)) {
             const e = o.children[0];
             e && 'text' === e.type && (e.value = $t(e.value));
            }
            Array.isArray(o) ? n.push(...o) : n.push(o);
           }
          }
         }
         return n;
        },
        applyData: Qt,
        definitionById: r,
        footnoteById: o,
        footnoteCounts: i,
        footnoteOrder: [],
        handlers: l,
        one: function (e, n) {
         const t = e.type,
          r = a.handlers[t];
         if (Zt.call(a.handlers, t) && r) return r(a, e, n);
         if (a.options.passThrough && a.options.passThrough.includes(t)) {
          if ('children' in e) {
           const { children: n, ...t } = e,
            r = St(t);
           return (r.children = a.all(e)), r;
          }
          return St(e);
         }
         return (a.options.unknownHandler || Xt)(a, e, n);
        },
        options: t,
        patch: Kt,
        wrap: Yt,
       };
      return (
       Nt(e, function (e) {
        if ('definition' === e.type || 'footnoteDefinition' === e.type) {
         const n = 'definition' === e.type ? r : o,
          t = String(e.identifier).toUpperCase();
         n.has(t) || n.set(t, e);
        }
       }),
       a
      );
     })(e, n),
     r = t.one(e, void 0),
     o = (function (e) {
      const n = 'string' == typeof e.options.clobberPrefix ? e.options.clobberPrefix : 'user-content-',
       t = e.options.footnoteBackContent || Et,
       r = e.options.footnoteBackLabel || Pt,
       o = e.options.footnoteLabel || 'Footnotes',
       i = e.options.footnoteLabelTagName || 'h2',
       l = e.options.footnoteLabelProperties || { className: ['sr-only'] },
       a = [];
      let s = -1;
      for (; ++s < e.footnoteOrder.length; ) {
       const o = e.footnoteById.get(e.footnoteOrder[s]);
       if (!o) continue;
       const i = e.all(o),
        l = String(o.identifier).toUpperCase(),
        c = Ct(l.toLowerCase());
       let u = 0;
       const f = [],
        p = e.footnoteCounts.get(l);
       for (; void 0 !== p && ++u <= p; ) {
        f.length > 0 && f.push({ type: 'text', value: ' ' });
        let e = 'string' == typeof t ? t : t(s, u);
        'string' == typeof e && (e = { type: 'text', value: e }), f.push({ type: 'element', tagName: 'a', properties: { href: '#' + n + 'fnref-' + c + (u > 1 ? '-' + u : ''), dataFootnoteBackref: '', ariaLabel: 'string' == typeof r ? r : r(s, u), className: ['data-footnote-backref'] }, children: Array.isArray(e) ? e : [e] });
       }
       const d = i[i.length - 1];
       if (d && 'element' === d.type && 'p' === d.tagName) {
        const e = d.children[d.children.length - 1];
        e && 'text' === e.type ? (e.value += ' ') : d.children.push({ type: 'text', value: ' ' }), d.children.push(...f);
       } else i.push(...f);
       const h = { type: 'element', tagName: 'li', properties: { id: n + 'fn-' + c }, children: e.wrap(i, !0) };
       e.patch(o, h), a.push(h);
      }
      if (0 !== a.length)
       return {
        type: 'element',
        tagName: 'section',
        properties: { dataFootnotes: !0, className: ['footnotes'] },
        children: [
         { type: 'element', tagName: i, properties: { ...St(l), id: 'footnote-label' }, children: [{ type: 'text', value: o }] },
         { type: 'text', value: '\n' },
         { type: 'element', tagName: 'ol', properties: {}, children: e.wrap(a, !0) },
         { type: 'text', value: '\n' },
        ],
       };
     })(t),
     i = Array.isArray(r) ? { type: 'root', children: r } : r || { type: 'root', children: [] };
    return o && i.children.push({ type: 'text', value: '\n' }, o), i;
   }
   function Gt(e, n) {
    return e && 'run' in e
     ? async function (t, r) {
        const o = Jt(t, n);
        await e.run(o, r);
       }
     : function (t) {
        return Jt(t, n || e);
       };
   }
   function er(e) {
    if (e) throw e;
   }
   var nr = t(27396);
   function tr(e) {
    if ('object' != typeof e || null === e) return !1;
    const n = Object.getPrototypeOf(e);
    return !((null !== n && n !== Object.prototype && null !== Object.getPrototypeOf(n)) || Symbol.toStringTag in e || Symbol.iterator in e);
   }
   function rr() {
    const e = [],
     n = {
      run: function (...n) {
       let t = -1;
       const r = n.pop();
       if ('function' != typeof r) throw new TypeError('Expected function as last argument, not ' + r);
       !(function o(i, ...l) {
        const a = e[++t];
        let s = -1;
        if (i) r(i);
        else {
         for (; ++s < n.length; ) (null !== l[s] && void 0 !== l[s]) || (l[s] = n[s]);
         (n = l),
          a
           ? (function (e, n) {
              let t;
              return r;
              function r(...n) {
               const r = e.length > n.length;
               let a;
               r && n.push(o);
               try {
                a = e.apply(this, n);
               } catch (i) {
                if (r && t) throw i;
                return o(i);
               }
               r || (a instanceof Promise ? a.then(l, o) : a instanceof Error ? o(a) : l(a));
              }
              function o(e, ...r) {
               t || ((t = !0), n(e, ...r));
              }
              function l(e) {
               o(null, e);
              }
             })(
              a,
              o,
             )(...l)
           : r(null, ...l);
        }
       })(null, ...n);
      },
      use: function (t) {
       if ('function' != typeof t) throw new TypeError('Expected `middelware` to be a function, not ' + t);
       return e.push(t), n;
      },
     };
    return n;
   }
   const or = {
    basename: function (e, n) {
     if (void 0 !== n && 'string' != typeof n) throw new TypeError('"ext" argument must be a string');
     ir(e);
     let t,
      r = 0,
      o = -1,
      i = e.length;
     if (void 0 === n || 0 === n.length || n.length > e.length) {
      for (; i--; )
       if (47 === e.codePointAt(i)) {
        if (t) {
         r = i + 1;
         break;
        }
       } else o < 0 && ((t = !0), (o = i + 1));
      return o < 0 ? '' : e.slice(r, o);
     }
     if (n === e) return '';
     let l = -1,
      a = n.length - 1;
     for (; i--; )
      if (47 === e.codePointAt(i)) {
       if (t) {
        r = i + 1;
        break;
       }
      } else l < 0 && ((t = !0), (l = i + 1)), a > -1 && (e.codePointAt(i) === n.codePointAt(a--) ? a < 0 && (o = i) : ((a = -1), (o = l)));
     r === o ? (o = l) : o < 0 && (o = e.length);
     return e.slice(r, o);
    },
    dirname: function (e) {
     if ((ir(e), 0 === e.length)) return '.';
     let n,
      t = -1,
      r = e.length;
     for (; --r; )
      if (47 === e.codePointAt(r)) {
       if (n) {
        t = r;
        break;
       }
      } else n || (n = !0);
     return t < 0 ? (47 === e.codePointAt(0) ? '/' : '.') : 1 === t && 47 === e.codePointAt(0) ? '//' : e.slice(0, t);
    },
    extname: function (e) {
     ir(e);
     let n,
      t = e.length,
      r = -1,
      o = 0,
      i = -1,
      l = 0;
     for (; t--; ) {
      const a = e.codePointAt(t);
      if (47 !== a) r < 0 && ((n = !0), (r = t + 1)), 46 === a ? (i < 0 ? (i = t) : 1 !== l && (l = 1)) : i > -1 && (l = -1);
      else if (n) {
       o = t + 1;
       break;
      }
     }
     if (i < 0 || r < 0 || 0 === l || (1 === l && i === r - 1 && i === o + 1)) return '';
     return e.slice(i, r);
    },
    join: function (...e) {
     let n,
      t = -1;
     for (; ++t < e.length; ) ir(e[t]), e[t] && (n = void 0 === n ? e[t] : n + '/' + e[t]);
     return void 0 === n
      ? '.'
      : (function (e) {
         ir(e);
         const n = 47 === e.codePointAt(0);
         let t = (function (e, n) {
          let t,
           r,
           o = '',
           i = 0,
           l = -1,
           a = 0,
           s = -1;
          for (; ++s <= e.length; ) {
           if (s < e.length) t = e.codePointAt(s);
           else {
            if (47 === t) break;
            t = 47;
           }
           if (47 === t) {
            if (l === s - 1 || 1 === a);
            else if (l !== s - 1 && 2 === a) {
             if (o.length < 2 || 2 !== i || 46 !== o.codePointAt(o.length - 1) || 46 !== o.codePointAt(o.length - 2))
              if (o.length > 2) {
               if (((r = o.lastIndexOf('/')), r !== o.length - 1)) {
                r < 0 ? ((o = ''), (i = 0)) : ((o = o.slice(0, r)), (i = o.length - 1 - o.lastIndexOf('/'))), (l = s), (a = 0);
                continue;
               }
              } else if (o.length > 0) {
               (o = ''), (i = 0), (l = s), (a = 0);
               continue;
              }
             n && ((o = o.length > 0 ? o + '/..' : '..'), (i = 2));
            } else o.length > 0 ? (o += '/' + e.slice(l + 1, s)) : (o = e.slice(l + 1, s)), (i = s - l - 1);
            (l = s), (a = 0);
           } else 46 === t && a > -1 ? a++ : (a = -1);
          }
          return o;
         })(e, !n);
         0 !== t.length || n || (t = '.');
         t.length > 0 && 47 === e.codePointAt(e.length - 1) && (t += '/');
         return n ? '/' + t : t;
        })(n);
    },
    sep: '/',
   };
   function ir(e) {
    if ('string' != typeof e) throw new TypeError('Path must be a string. Received ' + JSON.stringify(e));
   }
   const lr = {
    cwd: function () {
     return '/';
    },
   };
   function ar(e) {
    return Boolean(null !== e && 'object' == typeof e && 'href' in e && e.href && 'protocol' in e && e.protocol && void 0 === e.auth);
   }
   function sr(e) {
    if ('string' == typeof e) e = new URL(e);
    else if (!ar(e)) {
     const n = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + '`');
     throw ((n.code = 'ERR_INVALID_ARG_TYPE'), n);
    }
    if ('file:' !== e.protocol) {
     const e = new TypeError('The URL must be of scheme file');
     throw ((e.code = 'ERR_INVALID_URL_SCHEME'), e);
    }
    return (function (e) {
     if ('' !== e.hostname) {
      const e = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw ((e.code = 'ERR_INVALID_FILE_URL_HOST'), e);
     }
     const n = e.pathname;
     let t = -1;
     for (; ++t < n.length; )
      if (37 === n.codePointAt(t) && 50 === n.codePointAt(t + 1)) {
       const e = n.codePointAt(t + 2);
       if (70 === e || 102 === e) {
        const e = new TypeError('File URL path must not include encoded / characters');
        throw ((e.code = 'ERR_INVALID_FILE_URL_PATH'), e);
       }
      }
     return decodeURIComponent(n);
    })(e);
   }
   const cr = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
   class ur {
    constructor(e) {
     let n;
     (n = e
      ? ar(e)
        ? { path: e }
        : 'string' == typeof e ||
            (function (e) {
             return Boolean(e && 'object' == typeof e && 'byteLength' in e && 'byteOffset' in e);
            })(e)
          ? { value: e }
          : e
      : {}),
      (this.cwd = lr.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored;
     let t,
      r = -1;
     for (; ++r < cr.length; ) {
      const e = cr[r];
      e in n && void 0 !== n[e] && null !== n[e] && (this[e] = 'history' === e ? [...n[e]] : n[e]);
     }
     for (t in n) cr.includes(t) || (this[t] = n[t]);
    }
    get basename() {
     return 'string' == typeof this.path ? or.basename(this.path) : void 0;
    }
    set basename(e) {
     pr(e, 'basename'), fr(e, 'basename'), (this.path = or.join(this.dirname || '', e));
    }
    get dirname() {
     return 'string' == typeof this.path ? or.dirname(this.path) : void 0;
    }
    set dirname(e) {
     dr(this.basename, 'dirname'), (this.path = or.join(e || '', this.basename));
    }
    get extname() {
     return 'string' == typeof this.path ? or.extname(this.path) : void 0;
    }
    set extname(e) {
     if ((fr(e, 'extname'), dr(this.dirname, 'extname'), e)) {
      if (46 !== e.codePointAt(0)) throw new Error('`extname` must start with `.`');
      if (e.includes('.', 1)) throw new Error('`extname` cannot contain multiple dots');
     }
     this.path = or.join(this.dirname, this.stem + (e || ''));
    }
    get path() {
     return this.history[this.history.length - 1];
    }
    set path(e) {
     ar(e) && (e = sr(e)), pr(e, 'path'), this.path !== e && this.history.push(e);
    }
    get stem() {
     return 'string' == typeof this.path ? or.basename(this.path, this.extname) : void 0;
    }
    set stem(e) {
     pr(e, 'stem'), fr(e, 'stem'), (this.path = or.join(this.dirname || '', e + (this.extname || '')));
    }
    fail(e, n, t) {
     const r = this.message(e, n, t);
     throw ((r.fatal = !0), r);
    }
    info(e, n, t) {
     const r = this.message(e, n, t);
     return (r.fatal = void 0), r;
    }
    message(e, n, t) {
     const r = new ee(e, n, t);
     return this.path && ((r.name = this.path + ':' + r.name), (r.file = this.path)), (r.fatal = !1), this.messages.push(r), r;
    }
    toString(e) {
     if (void 0 === this.value) return '';
     if ('string' == typeof this.value) return this.value;
     return new TextDecoder(e || void 0).decode(this.value);
    }
   }
   function fr(e, n) {
    if (e && e.includes(or.sep)) throw new Error('`' + n + '` cannot be a path: did not expect `' + or.sep + '`');
   }
   function pr(e, n) {
    if (!e) throw new Error('`' + n + '` cannot be empty');
   }
   function dr(e, n) {
    if (!e) throw new Error('Setting `' + n + '` requires `path` to be set too');
   }
   const hr = function (e) {
     const n = this.constructor.prototype,
      t = n[e],
      r = function () {
       return t.apply(r, arguments);
      };
     Object.setPrototypeOf(r, n);
     const o = Object.getOwnPropertyNames(t);
     for (const i of o) {
      const e = Object.getOwnPropertyDescriptor(t, i);
      e && Object.defineProperty(r, i, e);
     }
     return r;
    },
    mr = {}.hasOwnProperty;
   class gr extends hr {
    constructor() {
     super('copy'), (this.Compiler = void 0), (this.Parser = void 0), (this.attachers = []), (this.compiler = void 0), (this.freezeIndex = -1), (this.frozen = void 0), (this.namespace = {}), (this.parser = void 0), (this.transformers = rr());
    }
    copy() {
     const e = new gr();
     let n = -1;
     for (; ++n < this.attachers.length; ) {
      const t = this.attachers[n];
      e.use(...t);
     }
     return e.data(nr(!0, {}, this.namespace)), e;
    }
    data(e, n) {
     return 'string' == typeof e ? (2 === arguments.length ? (kr('data', this.frozen), (this.namespace[e] = n), this) : (mr.call(this.namespace, e) && this.namespace[e]) || void 0) : e ? (kr('data', this.frozen), (this.namespace = e), this) : this.namespace;
    }
    freeze() {
     if (this.frozen) return this;
     const e = this;
     for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...t] = this.attachers[this.freezeIndex];
      if (!1 === t[0]) continue;
      !0 === t[0] && (t[0] = void 0);
      const r = n.call(e, ...t);
      'function' == typeof r && this.transformers.use(r);
     }
     return (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this;
    }
    parse(e) {
     this.freeze();
     const n = Sr(e),
      t = this.parser || this.Parser;
     return xr('parse', t), t(String(n), n);
    }
    process(e, n) {
     const t = this;
     return this.freeze(), xr('process', this.parser || this.Parser), vr('process', this.compiler || this.Compiler), n ? r(void 0, n) : new Promise(r);
     function r(r, o) {
      const i = Sr(e),
       l = t.parse(i);
      function a(e, t) {
       e || !t ? o(e) : r ? r(t) : n(void 0, t);
      }
      t.run(l, i, function (e, n, r) {
       if (e || !n || !r) return a(e);
       const o = n,
        i = t.stringify(o, r);
       var l;
       'string' == typeof (l = i) ||
       (function (e) {
        return Boolean(e && 'object' == typeof e && 'byteLength' in e && 'byteOffset' in e);
       })(l)
        ? (r.value = i)
        : (r.result = i),
        a(e, r);
      });
     }
    }
    processSync(e) {
     let n,
      t = !1;
     return (
      this.freeze(),
      xr('processSync', this.parser || this.Parser),
      vr('processSync', this.compiler || this.Compiler),
      this.process(e, function (e, r) {
       (t = !0), er(e), (n = r);
      }),
      wr('processSync', 'process', t),
      n
     );
    }
    run(e, n, t) {
     br(e), this.freeze();
     const r = this.transformers;
     return t || 'function' != typeof n || ((t = n), (n = void 0)), t ? o(void 0, t) : new Promise(o);
     function o(o, i) {
      const l = Sr(n);
      r.run(e, l, function (n, r, l) {
       const a = r || e;
       n ? i(n) : o ? o(a) : t(void 0, a, l);
      });
     }
    }
    runSync(e, n) {
     let t,
      r = !1;
     return (
      this.run(e, n, function (e, n) {
       er(e), (t = n), (r = !0);
      }),
      wr('runSync', 'run', r),
      t
     );
    }
    stringify(e, n) {
     this.freeze();
     const t = Sr(n),
      r = this.compiler || this.Compiler;
     return vr('stringify', r), br(e), r(e, t);
    }
    use(e, ...n) {
     const t = this.attachers,
      r = this.namespace;
     if ((kr('use', this.frozen), null == e));
     else if ('function' == typeof e) a(e, n);
     else {
      if ('object' != typeof e) throw new TypeError('Expected usable value, not `' + e + '`');
      Array.isArray(e) ? l(e) : i(e);
     }
     return this;
     function o(e) {
      if ('function' == typeof e) a(e, []);
      else {
       if ('object' != typeof e) throw new TypeError('Expected usable value, not `' + e + '`');
       if (Array.isArray(e)) {
        const [n, ...t] = e;
        a(n, t);
       } else i(e);
      }
     }
     function i(e) {
      if (!('plugins' in e) && !('settings' in e)) throw new Error('Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither');
      l(e.plugins), e.settings && (r.settings = nr(!0, r.settings, e.settings));
     }
     function l(e) {
      let n = -1;
      if (null == e);
      else {
       if (!Array.isArray(e)) throw new TypeError('Expected a list of plugins, not `' + e + '`');
       for (; ++n < e.length; ) {
        o(e[n]);
       }
      }
     }
     function a(e, n) {
      let r = -1,
       o = -1;
      for (; ++r < t.length; )
       if (t[r][0] === e) {
        o = r;
        break;
       }
      if (-1 === o) t.push([e, ...n]);
      else if (n.length > 0) {
       let [r, ...i] = n;
       const l = t[o][1];
       tr(l) && tr(r) && (r = nr(!0, l, r)), (t[o] = [e, r, ...i]);
      }
     }
    }
   }
   const yr = new gr().freeze();
   function xr(e, n) {
    if ('function' != typeof n) throw new TypeError('Cannot `' + e + '` without `parser`');
   }
   function vr(e, n) {
    if ('function' != typeof n) throw new TypeError('Cannot `' + e + '` without `compiler`');
   }
   function kr(e, n) {
    if (n) throw new Error('Cannot call `' + e + '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.');
   }
   function br(e) {
    if (!tr(e) || 'string' != typeof e.type) throw new TypeError('Expected node, got `' + e + '`');
   }
   function wr(e, n, t) {
    if (!t) throw new Error('`' + e + '` finished async. Use `' + n + '` instead');
   }
   function Sr(e) {
    return (function (e) {
     return Boolean(e && 'object' == typeof e && 'message' in e && 'messages' in e);
    })(e)
     ? e
     : new ur(e);
   }
   const Cr = [],
    Er = { allowDangerousHtml: !0 },
    Pr = /^(https?|ircs?|mailto|xmpp)$/i,
    Tr = [
     { from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser' },
     { from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser' },
     { from: 'allowNode', id: 'replace-allownode-allowedtypes-and-disallowedtypes', to: 'allowElement' },
     { from: 'allowedTypes', id: 'replace-allownode-allowedtypes-and-disallowedtypes', to: 'allowedElements' },
     { from: 'className', id: 'remove-classname' },
     { from: 'disallowedTypes', id: 'replace-allownode-allowedtypes-and-disallowedtypes', to: 'disallowedElements' },
     { from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser' },
     { from: 'includeElementIndex', id: '#remove-includeelementindex' },
     { from: 'includeNodeIndex', id: 'change-includenodeindex-to-includeelementindex' },
     { from: 'linkTarget', id: 'remove-linktarget' },
     { from: 'plugins', id: 'change-plugins-to-remarkplugins', to: 'remarkPlugins' },
     { from: 'rawSourcePos', id: '#remove-rawsourcepos' },
     { from: 'renderers', id: 'change-renderers-to-components', to: 'components' },
     { from: 'source', id: 'change-source-to-children', to: 'children' },
     { from: 'sourcePos', id: '#remove-sourcepos' },
     { from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform' },
     { from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform' },
    ];
   function Ir(e) {
    const n = Ar(e),
     t = Or(e);
    return jr(n.runSync(n.parse(t), t), e);
   }
   function Ar(e) {
    const n = e.rehypePlugins || Cr,
     t = e.remarkPlugins || Cr,
     r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Er } : Er;
    return yr().use(ht).use(t).use(Gt, r).use(n);
   }
   function Or(e) {
    const n = e.children || '',
     t = new ur();
    return 'string' == typeof n && (t.value = n), t;
   }
   function jr(e, n) {
    const t = n.allowedElements,
     r = n.allowElement,
     o = n.components,
     i = n.disallowedElements,
     l = n.skipHtml,
     a = n.unwrapDisallowed,
     s = n.urlTransform || Dr;
    for (const c of Tr) Object.hasOwn(n, c.from) && (c.from, c.to && c.to, c.id);
    return (
     Nt(e, function (e, n, o) {
      if ('raw' === e.type && o && 'number' == typeof n) return l ? o.children.splice(n, 1) : (o.children[n] = { type: 'text', value: e.value }), n;
      if ('element' === e.type) {
       let n;
       for (n in ve)
        if (Object.hasOwn(ve, n) && Object.hasOwn(e.properties, n)) {
         const t = e.properties[n],
          r = ve[n];
         (null === r || r.includes(e.tagName)) && (e.properties[n] = s(String(t || ''), n, e));
        }
      }
      if ('element' === e.type) {
       let l = t ? !t.includes(e.tagName) : !!i && i.includes(e.tagName);
       if ((!l && r && 'number' == typeof n && (l = !r(e, n, o)), l && o && 'number' == typeof n)) return a && e.children ? o.children.splice(n, 1, ...e.children) : o.children.splice(n, 1), n;
      }
     }),
     se(e, { Fragment: ke.Fragment, components: o, ignoreInvalidStyle: !0, jsx: ke.jsx, jsxs: ke.jsxs, passKeys: !0, passNode: !0 })
    );
   }
   function Dr(e) {
    const n = e.indexOf(':'),
     t = e.indexOf('?'),
     r = e.indexOf('#'),
     o = e.indexOf('/');
    return -1 === n || (-1 !== o && n > o) || (-1 !== t && n > t) || (-1 !== r && n > r) || Pr.test(e.slice(0, n)) ? e : '';
   }
  },
 },
]);
