'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [37643],
 {
  14329: (e, l, o) => {
   o.r(l), o.d(l, { default: () => h });
   o(30758);
   var t = o(13526),
    s = o(34374),
    r = o(85970),
    c = o(76493),
    n = o(71462),
    d = o(93243),
    a = o(27889),
    i = o(11430),
    y = o(51416),
    p = o(42580),
    b = o(86070);
   function m(e) {
    const l = (0, p.kJ)(e);
    return (0, b.jsx)(y.A, { children: (0, b.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(l) }) });
   }
   function u(e) {
    const { metadata: l } = e,
     {
      siteConfig: { title: o },
     } = (0, s.A)(),
     { blogDescription: t, blogTitle: c, permalink: n } = l,
     d = '/' === n ? o : c;
    return (0, b.jsxs)(b.Fragment, { children: [(0, b.jsx)(r.be, { title: d, description: t }), (0, b.jsx)(a.A, { tag: 'blog_posts_list' })] });
   }
   function g(e) {
    const { metadata: l, items: o, sidebar: t } = e;
    return (0, b.jsxs)(n.A, { sidebar: t, children: [(0, b.jsx)(i.A, { items: o }), (0, b.jsx)(d.A, { metadata: l })] });
   }
   function h(e) {
    return (0, b.jsxs)(r.e3, { className: (0, t.A)(c.G.wrapper.blogPages, c.G.page.blogListPage), children: [(0, b.jsx)(u, { ...e }), (0, b.jsx)(m, { ...e }), (0, b.jsx)(g, { ...e })] });
   }
  },
  16609: (e, l, o) => {
   o.d(l, { M: () => a });
   var t = o(68873),
    s = o(16194),
    r = o(30758),
    c = o(50124);
   const n = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
     { types: ['maybe-class-name'], style: { color: 'var(--nlds-code-block-maybe-class-name-color, var(--nlds-code-block-class-name-color))' } },
     { types: ['comment'], style: { color: 'var(--nlds-code-block-comment-color)', fontStyle: 'italic' } },
     { types: ['prolog'], style: { color: 'var(--nlds-code-block-prolog-color)', fontStyle: 'italic' } },
     { types: ['cdata'], style: { color: 'var(--nlds-code-block-cdata-color)', fontStyle: 'italic' } },
     { types: ['punctuation'], style: { color: 'var(--nlds-code-block-punctuation-color)' } },
     { types: ['deleted'], style: { color: 'var(--nlds-code-block-deleted-color)', fontStyle: 'italic' } },
     { types: ['symbol'], style: { color: 'var(--nlds-code-block-symbol-color)' } },
     { types: ['property'], style: { color: 'var(--nlds-code-block-property-color)' } },
     { types: ['tag'], style: { color: 'var(--nlds-code-block-tag-color)' } },
     { types: ['operator'], style: { color: 'var(--nlds-code-block-operator-color)' } },
     { types: ['keyword'], style: { color: 'var(--nlds-code-block-keyword-color)' } },
     { types: ['boolean'], style: { color: 'var(--nlds-code-block-boolean-color)' } },
     { types: ['number'], style: { color: 'var(--nlds-code-block-number-color)' } },
     { types: ['constant'], style: { color: 'var(--nlds-code-block-constant-color)' } },
     { types: ['function'], style: { color: 'var(--nlds-code-block-function-color)' } },
     { types: ['builtin'], style: { color: 'var(--nlds-code-block-builtin-color)' } },
     { types: ['char'], style: { color: 'var(--nlds-code-block-char-color)' } },
     { types: ['selector'], style: { color: 'var(--nlds-code-block-selector-color)', fontStyle: 'italic' } },
     { types: ['doctype'], style: { color: 'var(--nlds-code-block-doctype-color)', fontStyle: 'italic' } },
     { types: ['attr-name'], style: { color: 'var(--nlds-code-block-attr-name-color)', fontStyle: 'italic' } },
     { types: ['inserted'], style: { color: 'var(--nlds-code-block-inserted-color)', fontStyle: 'italic' } },
     { types: ['string'], style: { color: 'var(--nlds-code-block-string-color)' } },
     { types: ['url'], style: { color: 'var(--nlds-code-block-url-color)' } },
     { types: ['entity'], style: { color: 'var(--nlds-code-block-entity-color)' } },
     { types: ['class-name'], style: { color: 'var(--nlds-code-block-class-name-color)' } },
     { types: ['atrule'], style: { color: 'var(--nlds-code-block-atrule-color)' } },
     { types: ['attr-value'], style: { color: 'var(--nlds-code-block-attr-value-color)' } },
     { types: ['regex'], style: { color: 'var(--nlds-code-block-regex-color)' } },
     { types: ['important'], style: { color: 'var(--nlds-code-block-important-color)', fontWeight: 'bold' } },
     { types: ['variable'], style: { color: 'var(--nlds-code-block-variable-color)' } },
     { types: ['bold'], style: { fontWeight: 'bold' } },
     { types: ['italic'], style: { fontStyle: 'italic' } },
    ],
   };
   var d = o(86070);
   function a({ lineNumber: e, syntax: l, textContent: o, trim: a }) {
    let i = o;
    const { title: y, type: p } = (0, r.useContext)(c.x),
     b = (0, r.useId)();
    return a && (i = i.trim()), (0, d.jsx)(s.f4, { theme: n, code: i, language: l || '', children: ({ style: l, tokens: o, getLineProps: s, getTokenProps: r }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)('span', { hidden: !0, id: b, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', y ? ': ' : ' ', y] }), (0, d.jsx)(t.NG, { tabIndex: 0, role: y ? 'region' : void 0, 'aria-labelledby': b, style: l, children: o.map((l, o) => (0, d.jsxs)('span', { ...s({ line: l }), children: [e && (0, d.jsx)('span', { children: o + 1 }), l.map((e, l) => (0, d.jsx)('span', { ...r({ token: e }) }, l)), '\n'] }, o)) })] }) });
   }
  },
  50124: (e, l, o) => {
   o.d(l, { $: () => i, x: () => a });
   var t = o(54736),
    s = o(26990),
    r = o(68873),
    c = o(13526),
    n = o(30758),
    d = o(86070);
   const a = (0, n.createContext)({}),
    i = ({ title: e, appearance: l, description: o, children: n, figure: i }) => {
     const y = { do: 'Doen', dont: 'Niet doen' },
      p = i ? 'figure' : 'div',
      b = i ? 'figcaption' : 'div';
     return (0, d.jsxs)(p, { className: (0, c.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(b, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.fz, { className: (0, c.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, d.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: y.dont })] }), (0, d.jsx)(r.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.fz, { className: (0, c.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, d.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: y.do })] }), (0, d.jsx)(r.fz, { children: e })] }), o] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(a.Provider, { value: { title: e, type: y[l] }, children: n }) })] });
    };
  },
  81087: (e, l, o) => {
   o.d(l, { A: () => p });
   var t = o(85248),
    s = o(51786),
    r = o(87867),
    c = o(30758),
    n = o(86070);
   function d(e) {
    const l = c.Children.toArray(e.children),
     o = l.find((e) => c.isValidElement(e) && 'summary' === e.props?.mdxType),
     t = (0, n.jsx)(n.Fragment, { children: l.filter((e) => e !== o) });
    return (0, n.jsx)(r.A, { ...e, summary: o, children: t });
   }
   var a = o(16609);
   function i(e) {
    let l,
     o = '';
    if ((0, c.isValidElement)(e.children)) {
     const t = e.children.props,
      s = 'string' == typeof t.className ? t.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     s && (l = s[1]), 'string' == typeof t.children && (o = t.children);
    }
    return (0, n.jsx)(a.M, { syntax: l, textContent: o, trim: !0 });
   }
   var y = o(68873);
   function p({ children: e }) {
    return (0, n.jsx)(t.x, { components: { code: y.Cy, a: y.N_, em: y.lx, pre: i, details: d, ul: ({ children: e }) => (0, n.jsx)(y.Xy, { className: 'utrecht-unordered-list--html-content', children: e }), ol: ({ children: e }) => (0, n.jsx)(y._J, { className: 'utrecht-ordered-list--html-content', children: e }), img: y._V, h1: y._, h2: y.fV, h3: y._B, h4: y.f_, h5: y.mM, h6: y.TT, admonition: s.A }, children: e });
   }
  },
 },
]);
