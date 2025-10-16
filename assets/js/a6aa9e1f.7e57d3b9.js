'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [93089],
 {
  8305: (e, l, o) => {
   o.r(l), o.d(l, { default: () => m });
   o(75271);
   var t = o(4814),
    s = o(84084),
    n = o(69378),
    r = o(52035),
    c = o(97752),
    a = o(24574),
    i = o(83613),
    d = o(35694),
    p = o(52676);
   function y(e) {
    const { metadata: l } = e,
     {
      siteConfig: { title: o },
     } = (0, s.Z)(),
     { blogDescription: t, blogTitle: r, permalink: c } = l,
     a = '/' === c ? o : r;
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(n.d, { title: a, description: t }), (0, p.jsx)(i.Z, { tag: 'blog_posts_list' })] });
   }
   function g(e) {
    const { metadata: l, items: o, sidebar: t } = e;
    return (0, p.jsxs)(c.Z, { sidebar: t, children: [(0, p.jsx)(d.Z, { items: o }), (0, p.jsx)(a.Z, { metadata: l })] });
   }
   function m(e) {
    return (0, p.jsxs)(n.FG, { className: (0, t.Z)(r.k.wrapper.blogPages, r.k.page.blogListPage), children: [(0, p.jsx)(y, { ...e }), (0, p.jsx)(g, { ...e })] });
   }
  },
  24574: (e, l, o) => {
   o.d(l, { Z: () => r });
   o(75271);
   var t = o(42800),
    s = o(75545),
    n = o(52676);
   function r(e) {
    const { metadata: l } = e,
     { previousPage: o, nextPage: r } = l;
    return (0, n.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, t.I)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [o && (0, n.jsx)(s.Z, { permalink: o, title: (0, n.jsx)(t.Z, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer Entries' }) }), r && (0, n.jsx)(s.Z, { permalink: r, title: (0, n.jsx)(t.Z, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older Entries' }), isNext: !0 })] });
   }
  },
  35694: (e, l, o) => {
   o.d(l, { Z: () => r });
   o(75271);
   var t = o(84831),
    s = o(83357),
    n = o(52676);
   function r(e) {
    let { items: l, component: o = s.Z } = e;
    return (0, n.jsx)(n.Fragment, {
     children: l.map((e) => {
      let { content: l } = e;
      return (0, n.jsx)(t.n, { content: l, children: (0, n.jsx)(o, { children: (0, n.jsx)(l, {}) }) }, l.metadata.permalink);
     }),
    });
   }
  },
  41179: (e, l, o) => {
   o.d(l, { u: () => i });
   var t = o(37943),
    s = o(60648),
    n = o(75271),
    r = o(40761);
   const c = {
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
   var a = o(52676);
   function i(e) {
    let { lineNumber: l, syntax: o, textContent: i, trim: d } = e,
     p = i;
    const { title: y, type: g } = (0, n.useContext)(r.n),
     m = (0, n.useId)();
    return (
     d && (p = p.trim()),
     (0, a.jsx)(s.y$, {
      theme: c,
      code: p,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: s, getLineProps: n, getTokenProps: r } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', g ? `\u201c${g}\u201d` : '', ' ', y ? ': ' : ' ', y] }), (0, a.jsx)(t.dn, { tabIndex: 0, role: y ? 'region' : void 0, 'aria-labelledby': m, style: o, children: s.map((e, o) => (0, a.jsxs)('span', { ...n({ line: e }), children: [l && (0, a.jsx)('span', { children: o + 1 }), e.map((e, l) => (0, a.jsx)('span', { ...r({ token: e }) }, l)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, l, o) => {
   o.d(l, { X: () => d, n: () => i });
   var t = o(69244),
    s = o(20061),
    n = o(37943),
    r = o(4814),
    c = o(75271),
    a = o(52676);
   const i = (0, c.createContext)({}),
    d = (e) => {
     let { title: l, appearance: o, description: c, children: d, figure: p } = e;
     const y = { do: 'Doen', dont: 'Niet doen' },
      g = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div';
     return (0, a.jsxs)(g, { className: (0, r.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof l ? l?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: y.dont })] }), (0, a.jsx)(n.nv, { children: l })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: y.do })] }), (0, a.jsx)(n.nv, { children: l })] }), c] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(i.Provider, { value: { title: l, type: y[o] }, children: d }) })] });
    };
  },
  39731: (e, l, o) => {
   o.d(l, { Z: () => g });
   var t = o(40139),
    s = o(41017),
    n = o(10930),
    r = o(75271),
    c = o(52676);
   function a(e) {
    const l = r.Children.toArray(e.children),
     o = l.find((e) => r.isValidElement(e) && 'summary' === e.props?.mdxType),
     t = (0, c.jsx)(c.Fragment, { children: l.filter((e) => e !== o) });
    return (0, c.jsx)(n.Z, { ...e, summary: o, children: t });
   }
   var i = o(41179);
   function d(e) {
    let l,
     o = '';
    if ((0, r.isValidElement)(e.children)) {
     const t = e.children.props,
      s = 'string' == typeof t.className ? t.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     s && (l = s[1]), 'string' == typeof t.children && (o = t.children);
    }
    return (0, c.jsx)(i.u, { syntax: l, textContent: o, trim: !0 });
   }
   var p = o(69514),
    y = o(37943);
   function g(e) {
    let { children: l } = e;
    return (0, c.jsx)(t.Z, {
     components: {
      code: y.EK,
      a: y.rU,
      em: y.j$,
      pre: d,
      details: a,
      ul: (e) => {
       let { children: l } = e;
       return (0, c.jsx)(y.QI, { className: 'utrecht-unordered-list--html-content', children: l });
      },
      ol: (e) => {
       let { children: l } = e;
       return (0, c.jsx)(y.GS, { className: 'utrecht-ordered-list--html-content', children: l });
      },
      img: y.Ee,
      h1: y.nL,
      h2: y.XJ,
      h3: y.aC,
      h4: y.k8,
      h5: y.by,
      h6: y.Cd,
      admonition: s.Z,
      mermaid: p.Z,
     },
     children: l,
    });
   }
  },
 },
]);
