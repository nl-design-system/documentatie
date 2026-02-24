'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [37643],
 {
  3227(e, t, l) {
   l.d(t, { A: () => u });
   var s = l(60316),
    r = l(45282),
    n = l(2264),
    o = l(29181),
    a = l(13526),
    c = l(86070);
   function i({ href: e, icon: t = '', title: l, description: s, children: n }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(r.N, { href: e, className: (0, a.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', l] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', l] }), s && (0, c.jsx)('p', { className: 'cardDescription', children: s }), n] });
   }
   function d({ item: e }) {
    return (0, c.jsx)(i, { title: e.label, description: e.description, children: (0, c.jsx)(o.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, t) => (0, c.jsx)(o.Er, { children: 'link' === e.type ? (0, c.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, t)) }) });
   }
   function m({ item: e }) {
    const t = (0, n.cC)(e.docId);
    return (0, c.jsx)(i, { href: e.href, title: e.label, description: e.description ?? t?.description });
   }
   function p({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(m, { item: e });
     case 'category':
      return (0, c.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function h({ className: e }) {
    const t = (0, s.$S)();
    return (0, c.jsx)(u, { items: t.items, className: e });
   }
   function u(e) {
    const { items: t, className: l } = e;
    if (!t) return (0, c.jsx)(h, { ...e });
    const r = (0, s.d1)(t);
    return (0, c.jsx)('section', { className: (0, a.A)('row', l), ...e, children: r.map((e, t) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(p, { item: e }) }, t)) });
   }
  },
  11063(e, t, l) {
   l.d(t, { A: () => $ });
   l(30758);
   var s = l(13526),
    r = l(68139),
    n = l(86070);
   function o({ children: e, className: t }) {
    return (0, n.jsx)('article', { className: t, children: e });
   }
   var a = l(63195);
   const c = 'title_Cvpl';
   function i({ className: e }) {
    const { metadata: t, isBlogPostPage: l } = (0, r.e7)(),
     { permalink: o, title: i } = t,
     d = l ? 'h1' : 'h2';
    return (0, n.jsx)(d, { className: (0, s.A)(c, e), children: l ? i : (0, n.jsx)(a.A, { to: o, children: i }) });
   }
   var d = l(18236),
    m = l(18105),
    p = l(43242);
   const h = 'container_fVB1';
   function u({ readingTime: e }) {
    const t = (function () {
     const { selectMessage: e } = (0, m.W)();
     return (t) => {
      const l = Math.ceil(t);
      return e(l, (0, d.T)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: l }));
     };
    })();
    return (0, n.jsx)(n.Fragment, { children: t(e) });
   }
   function g({ date: e, formattedDate: t }) {
    return (0, n.jsx)('time', { dateTime: e, children: t });
   }
   function x() {
    return (0, n.jsx)(n.Fragment, { children: ' \xb7 ' });
   }
   function y({ className: e }) {
    const { metadata: t } = (0, r.e7)(),
     { date: l, readingTime: o } = t,
     a = (0, p.i)({ day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    return (0, n.jsxs)('div', { className: (0, s.A)(h, 'margin-vert--md', e), children: [(0, n.jsx)(g, { date: l, formattedDate: ((c = l), a.format(new Date(c))) }), void 0 !== o && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(x, {}), (0, n.jsx)(u, { readingTime: o })] })] });
    var c;
   }
   var b = l(4786);
   const j = 'authorCol_aa16',
    f = 'imageOnlyAuthorRow_d1cU',
    v = 'imageOnlyAuthorCol_sh3B';
   function k({ className: e }) {
    const {
     metadata: { authors: t },
     assets: l,
    } = (0, r.e7)();
    if (0 === t.length) return null;
    const o = t.every(({ name: e }) => !e),
     a = 1 === t.length;
    return (0, n.jsx)('div', { className: (0, s.A)('margin-top--md margin-bottom--sm', o ? f : 'row', e), children: t.map((e, t) => (0, n.jsx)('div', { className: (0, s.A)(!o && (a ? 'col col--12' : 'col col--6'), o ? v : j), children: (0, n.jsx)(b.A, { author: { ...e, imageURL: l.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function N() {
    return (0, n.jsxs)('header', { children: [(0, n.jsx)(i, {}), (0, n.jsx)(y, {}), (0, n.jsx)(k, {})] });
   }
   var A = l(99939),
    _ = l(85963);
   function w({ children: e, className: t }) {
    const { isBlogPostPage: l } = (0, r.e7)();
    return (0, n.jsx)('div', { id: l ? A.LU : void 0, className: (0, s.A)('markdown', t), children: (0, n.jsx)(_.A, { children: e }) });
   }
   var T = l(71639),
    P = l(29307),
    C = l(97068);
   function F() {
    return (0, n.jsx)('b', { children: (0, n.jsx)(d.A, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read more' }) });
   }
   function S(e) {
    const { blogPostTitle: t, ...l } = e;
    return (0, n.jsx)(a.A, { 'aria-label': (0, d.T)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...l, children: (0, n.jsx)(F, {}) });
   }
   function U() {
    const { metadata: e, isBlogPostPage: t } = (0, r.e7)(),
     { tags: l, title: o, editUrl: a, hasTruncateMarker: c, lastUpdatedBy: i, lastUpdatedAt: d } = e,
     m = !t && c,
     p = l.length > 0;
    if (!(p || m || a)) return null;
    if (t) {
     const e = !!(a || d || i);
     return (0, n.jsxs)('footer', { className: 'docusaurus-mt-lg', children: [p && (0, n.jsx)('div', { className: (0, s.A)('row', 'margin-top--sm', T.G.blog.blogFooterEditMetaRow), children: (0, n.jsx)('div', { className: 'col', children: (0, n.jsx)(C.A, { tags: l }) }) }), e && (0, n.jsx)(P.A, { className: (0, s.A)('margin-top--sm', T.G.blog.blogFooterEditMetaRow), editUrl: a, lastUpdatedAt: d, lastUpdatedBy: i })] });
    }
    return (0, n.jsxs)('footer', { className: 'row docusaurus-mt-lg', children: [p && (0, n.jsx)('div', { className: (0, s.A)('col', { 'col--9': m }), children: (0, n.jsx)(C.A, { tags: l }) }), m && (0, n.jsx)('div', { className: (0, s.A)('col text--right', { 'col--3': p }), children: (0, n.jsx)(S, { blogPostTitle: o, to: e.permalink }) })] });
   }
   function $({ children: e, className: t }) {
    const l = (function () {
     const { isBlogPostPage: e } = (0, r.e7)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, n.jsxs)(o, { className: (0, s.A)(l, t), children: [(0, n.jsx)(N, {}), (0, n.jsx)(w, { children: e }), (0, n.jsx)(U, {})] });
   }
  },
  15638(e, t, l) {
   l.d(t, { $: () => d, x: () => i });
   var s = l(4077),
    r = l(58315),
    n = l(46447),
    o = l(13526),
    a = l(30758),
    c = l(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: t, description: l, children: a, figure: d }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div';
     return (0, c.jsxs)(p, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(n.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, c.jsx)(n.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(n.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, c.jsx)(n.fz, { children: e })] }), l] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: m[t] }, children: a }) })] });
    };
  },
  19485(e, t, l) {
   l.d(t, { A: () => o });
   l(30758);
   var s = l(18236),
    r = l(52266),
    n = l(86070);
   function o(e) {
    const { metadata: t } = e,
     { previousPage: l, nextPage: o } = t;
    return (0, n.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, s.T)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [l && (0, n.jsx)(r.A, { permalink: l, title: (0, n.jsx)(s.A, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer entries' }) }), o && (0, n.jsx)(r.A, { permalink: o, title: (0, n.jsx)(s.A, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older entries' }), isNext: !0 })] });
   }
  },
  45282(e, t, l) {
   l.d(t, { F: () => n, N: () => o });
   var s = l(13526),
    r = l(86070);
   const n = ({ children: e, ...t }) => {
     const { to: l, href: s, ...n } = t;
     let o = l || s;
     const a = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === a.origin ? ((a.pathname = a.pathname.endsWith('/') ? a.pathname : `${a.pathname}/`), (o = a.toString().replace('https://nldesignsystem.nl', ''))) : ((n.target = '_blank'), (n.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: o, ...n, children: e }));
    },
    o = ({ className: e, ...t }) => (0, r.jsx)(n, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  69284(e, t, l) {
   l.d(t, { M: () => i });
   var s = l(46447),
    r = l(16194),
    n = l(30758),
    o = l(15638);
   const a = {
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
   var c = l(86070);
   function i({ lineNumber: e, syntax: t, textContent: l, trim: i }) {
    let d = l;
    const { title: m, type: p } = (0, n.useContext)(o.x),
     h = (0, n.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(r.f4, { theme: a, code: d, language: t || '', children: ({ style: t, tokens: l, getLineProps: r, getTokenProps: n }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, c.jsx)(s.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: t, children: l.map((t, l) => (0, c.jsxs)('span', { ...r({ line: t }), children: [e && (0, c.jsx)('span', { children: l + 1 }), t.map((e, t) => (0, c.jsx)('span', { ...n({ token: e }) }, t)), '\n'] }, l)) })] }) }));
   }
  },
  79988(e, t, l) {
   (l.r(t), l.d(t, { default: () => y }));
   l(30758);
   var s = l(13526),
    r = l(74147),
    n = l(86332),
    o = l(71639),
    a = l(57605),
    c = l(19485),
    i = l(63811),
    d = l(99816),
    m = l(70241),
    p = l(68139),
    h = l(86070);
   function u(e) {
    const t = (0, p.kJ)(e);
    return (0, h.jsx)(m.A, { children: (0, h.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(t) }) });
   }
   function g(e) {
    const { metadata: t } = e,
     {
      siteConfig: { title: l },
     } = (0, r.A)(),
     { blogDescription: s, blogTitle: o, permalink: a } = t,
     c = '/' === a ? l : o;
    return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(n.be, { title: c, description: s }), (0, h.jsx)(i.A, { tag: 'blog_posts_list' })] });
   }
   function x(e) {
    const { metadata: t, items: l, sidebar: s } = e;
    return (0, h.jsxs)(a.A, { sidebar: s, children: [(0, h.jsx)(d.A, { items: l }), (0, h.jsx)(c.A, { metadata: t })] });
   }
   function y(e) {
    return (0, h.jsxs)(n.e3, { className: (0, s.A)(o.G.wrapper.blogPages, o.G.page.blogListPage), children: [(0, h.jsx)(g, { ...e }), (0, h.jsx)(u, { ...e }), (0, h.jsx)(x, { ...e })] });
   }
  },
  85963(e, t, l) {
   l.d(t, { A: () => h });
   var s = l(18439),
    r = l(76713),
    n = l(5784),
    o = l(30758),
    a = l(86070);
   function c(e) {
    const t = o.Children.toArray(e.children),
     l = t.find((e) => o.isValidElement(e) && 'summary' === e.props?.mdxType),
     s = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== l) });
    return (0, a.jsx)(n.A, { ...e, summary: l, children: s });
   }
   var i = l(69284);
   function d(e) {
    let t,
     l = '';
    if ((0, o.isValidElement)(e.children)) {
     const s = e.children.props,
      r = 'string' == typeof s.className ? s.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     (r && (t = r[1]), 'string' == typeof s.children && (l = s.children));
    }
    return (0, a.jsx)(i.M, { syntax: t, textContent: l, trim: !0 });
   }
   var m = l(46447),
    p = l(89874);
   function h({ children: e }) {
    return (0, a.jsx)(s.x, { components: { code: m.Cy, a: m.N_, em: m.lx, pre: d, details: c, ul: ({ children: e }) => (0, a.jsx)(m.Xy, { className: 'utrecht-unordered-list--html-content', children: e }), ol: ({ children: e }) => (0, a.jsx)(m._J, { className: 'utrecht-ordered-list--html-content', children: e }), img: m._V, h1: m._, h2: m.fV, h3: m._B, h4: m.f_, h5: m.mM, h6: m.TT, admonition: r.A, OverviewPage: p.F }, children: e });
   }
  },
  89874(e, t, l) {
   l.d(t, { F: () => c });
   var s = l(60316),
    r = l(13526),
    n = l(3227),
    o = l(86070);
   const a = (e, t) => e.reduce((e, l) => ('link' === l.type ? (t.includes(l.docId) ? e : [...e, l]) : 'category' === l.type ? [...e, { ...l, items: a(l.items, t) }] : e), []),
    c = ({ excludeDocIDs: e = [], className: t, ...l }) => {
     const c = (0, s.$S)();
     return (0, o.jsx)('div', { ...l, className: (0, r.A)('margin-top--lg', t), children: (0, o.jsx)(n.A, { items: a(c.items, e) }) });
    };
  },
  99816(e, t, l) {
   l.d(t, { A: () => o });
   l(30758);
   var s = l(68139),
    r = l(11063),
    n = l(86070);
   function o({ items: e, component: t = r.A }) {
    return (0, n.jsx)(n.Fragment, { children: e.map(({ content: e }) => (0, n.jsx)(s.in, { content: e, children: (0, n.jsx)(t, { children: (0, n.jsx)(e, {}) }) }, e.metadata.permalink)) });
   }
  },
 },
]);
