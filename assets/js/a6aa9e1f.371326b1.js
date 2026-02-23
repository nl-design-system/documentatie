'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [37643],
 {
  11063(e, l, t) {
   t.d(l, { A: () => M });
   t(30758);
   var o = t(13526),
    s = t(68139),
    r = t(86070);
   function n({ children: e, className: l }) {
    return (0, r.jsx)('article', { className: l, children: e });
   }
   var a = t(63195);
   const c = 'title_Cvpl';
   function i({ className: e }) {
    const { metadata: l, isBlogPostPage: t } = (0, s.e7)(),
     { permalink: n, title: i } = l,
     d = t ? 'h1' : 'h2';
    return (0, r.jsx)(d, { className: (0, o.A)(c, e), children: t ? i : (0, r.jsx)(a.A, { to: n, children: i }) });
   }
   var d = t(18236),
    m = t(18105),
    g = t(43242);
   const p = 'container_fVB1';
   function u({ readingTime: e }) {
    const l = (function () {
     const { selectMessage: e } = (0, m.W)();
     return (l) => {
      const t = Math.ceil(l);
      return e(t, (0, d.T)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: t }));
     };
    })();
    return (0, r.jsx)(r.Fragment, { children: l(e) });
   }
   function h({ date: e, formattedDate: l }) {
    return (0, r.jsx)('time', { dateTime: e, children: l });
   }
   function y() {
    return (0, r.jsx)(r.Fragment, { children: ' \xb7 ' });
   }
   function x({ className: e }) {
    const { metadata: l } = (0, s.e7)(),
     { date: t, readingTime: n } = l,
     a = (0, g.i)({ day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    return (0, r.jsxs)('div', { className: (0, o.A)(p, 'margin-vert--md', e), children: [(0, r.jsx)(h, { date: t, formattedDate: ((c = t), a.format(new Date(c))) }), void 0 !== n && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(y, {}), (0, r.jsx)(u, { readingTime: n })] })] });
    var c;
   }
   var b = t(4786);
   const j = 'authorCol_aa16',
    v = 'imageOnlyAuthorRow_d1cU',
    f = 'imageOnlyAuthorCol_sh3B';
   function k({ className: e }) {
    const {
     metadata: { authors: l },
     assets: t,
    } = (0, s.e7)();
    if (0 === l.length) return null;
    const n = l.every(({ name: e }) => !e),
     a = 1 === l.length;
    return (0, r.jsx)('div', { className: (0, o.A)('margin-top--md margin-bottom--sm', n ? v : 'row', e), children: l.map((e, l) => (0, r.jsx)('div', { className: (0, o.A)(!n && (a ? 'col col--12' : 'col col--6'), n ? f : j), children: (0, r.jsx)(b.A, { author: { ...e, imageURL: t.authorsImageUrls[l] ?? e.imageURL } }) }, l)) });
   }
   function A() {
    return (0, r.jsxs)('header', { children: [(0, r.jsx)(i, {}), (0, r.jsx)(x, {}), (0, r.jsx)(k, {})] });
   }
   var _ = t(99939),
    N = t(85963);
   function T({ children: e, className: l }) {
    const { isBlogPostPage: t } = (0, s.e7)();
    return (0, r.jsx)('div', { id: t ? _.LU : void 0, className: (0, o.A)('markdown', l), children: (0, r.jsx)(N.A, { children: e }) });
   }
   var w = t(71639),
    P = t(29307),
    C = t(97068);
   function U() {
    return (0, r.jsx)('b', { children: (0, r.jsx)(d.A, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read more' }) });
   }
   function F(e) {
    const { blogPostTitle: l, ...t } = e;
    return (0, r.jsx)(a.A, { 'aria-label': (0, d.T)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: l }), ...t, children: (0, r.jsx)(U, {}) });
   }
   function B() {
    const { metadata: e, isBlogPostPage: l } = (0, s.e7)(),
     { tags: t, title: n, editUrl: a, hasTruncateMarker: c, lastUpdatedBy: i, lastUpdatedAt: d } = e,
     m = !l && c,
     g = t.length > 0;
    if (!(g || m || a)) return null;
    if (l) {
     const e = !!(a || d || i);
     return (0, r.jsxs)('footer', { className: 'docusaurus-mt-lg', children: [g && (0, r.jsx)('div', { className: (0, o.A)('row', 'margin-top--sm', w.G.blog.blogFooterEditMetaRow), children: (0, r.jsx)('div', { className: 'col', children: (0, r.jsx)(C.A, { tags: t }) }) }), e && (0, r.jsx)(P.A, { className: (0, o.A)('margin-top--sm', w.G.blog.blogFooterEditMetaRow), editUrl: a, lastUpdatedAt: d, lastUpdatedBy: i })] });
    }
    return (0, r.jsxs)('footer', { className: 'row docusaurus-mt-lg', children: [g && (0, r.jsx)('div', { className: (0, o.A)('col', { 'col--9': m }), children: (0, r.jsx)(C.A, { tags: t }) }), m && (0, r.jsx)('div', { className: (0, o.A)('col text--right', { 'col--3': g }), children: (0, r.jsx)(F, { blogPostTitle: n, to: e.permalink }) })] });
   }
   function M({ children: e, className: l }) {
    const t = (function () {
     const { isBlogPostPage: e } = (0, s.e7)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, r.jsxs)(n, { className: (0, o.A)(t, l), children: [(0, r.jsx)(A, {}), (0, r.jsx)(T, { children: e }), (0, r.jsx)(B, {})] });
   }
  },
  15638(e, l, t) {
   t.d(l, { $: () => d, x: () => i });
   var o = t(4077),
    s = t(58315),
    r = t(46447),
    n = t(13526),
    a = t(30758),
    c = t(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: l, description: t, children: a, figure: d }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      g = d ? 'figure' : 'div',
      p = d ? 'figcaption' : 'div';
     return (0, c.jsxs)(g, { className: (0, n.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, n.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, n.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, c.jsx)(r.fz, { children: e })] }), t] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: m[l] }, children: a }) })] });
    };
  },
  19485(e, l, t) {
   t.d(l, { A: () => n });
   t(30758);
   var o = t(18236),
    s = t(52266),
    r = t(86070);
   function n(e) {
    const { metadata: l } = e,
     { previousPage: t, nextPage: n } = l;
    return (0, r.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, o.T)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [t && (0, r.jsx)(s.A, { permalink: t, title: (0, r.jsx)(o.A, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer entries' }) }), n && (0, r.jsx)(s.A, { permalink: n, title: (0, r.jsx)(o.A, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older entries' }), isNext: !0 })] });
   }
  },
  69284(e, l, t) {
   t.d(l, { M: () => i });
   var o = t(46447),
    s = t(16194),
    r = t(30758),
    n = t(15638);
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
   var c = t(86070);
   function i({ lineNumber: e, syntax: l, textContent: t, trim: i }) {
    let d = t;
    const { title: m, type: g } = (0, r.useContext)(n.x),
     p = (0, r.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(s.f4, { theme: a, code: d, language: l || '', children: ({ style: l, tokens: t, getLineProps: s, getTokenProps: r }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', g ? `\u201c${g}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, c.jsx)(o.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': p, style: l, children: t.map((l, t) => (0, c.jsxs)('span', { ...s({ line: l }), children: [e && (0, c.jsx)('span', { children: t + 1 }), l.map((e, l) => (0, c.jsx)('span', { ...r({ token: e }) }, l)), '\n'] }, t)) })] }) }));
   }
  },
  79988(e, l, t) {
   (t.r(l), t.d(l, { default: () => x }));
   t(30758);
   var o = t(13526),
    s = t(74147),
    r = t(86332),
    n = t(71639),
    a = t(57605),
    c = t(19485),
    i = t(63811),
    d = t(99816),
    m = t(70241),
    g = t(68139),
    p = t(86070);
   function u(e) {
    const l = (0, g.kJ)(e);
    return (0, p.jsx)(m.A, { children: (0, p.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(l) }) });
   }
   function h(e) {
    const { metadata: l } = e,
     {
      siteConfig: { title: t },
     } = (0, s.A)(),
     { blogDescription: o, blogTitle: n, permalink: a } = l,
     c = '/' === a ? t : n;
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(r.be, { title: c, description: o }), (0, p.jsx)(i.A, { tag: 'blog_posts_list' })] });
   }
   function y(e) {
    const { metadata: l, items: t, sidebar: o } = e;
    return (0, p.jsxs)(a.A, { sidebar: o, children: [(0, p.jsx)(d.A, { items: t }), (0, p.jsx)(c.A, { metadata: l })] });
   }
   function x(e) {
    return (0, p.jsxs)(r.e3, { className: (0, o.A)(n.G.wrapper.blogPages, n.G.page.blogListPage), children: [(0, p.jsx)(h, { ...e }), (0, p.jsx)(u, { ...e }), (0, p.jsx)(y, { ...e })] });
   }
  },
  85963(e, l, t) {
   t.d(l, { A: () => g });
   var o = t(18439),
    s = t(76713),
    r = t(5784),
    n = t(30758),
    a = t(86070);
   function c(e) {
    const l = n.Children.toArray(e.children),
     t = l.find((e) => n.isValidElement(e) && 'summary' === e.props?.mdxType),
     o = (0, a.jsx)(a.Fragment, { children: l.filter((e) => e !== t) });
    return (0, a.jsx)(r.A, { ...e, summary: t, children: o });
   }
   var i = t(69284);
   function d(e) {
    let l,
     t = '';
    if ((0, n.isValidElement)(e.children)) {
     const o = e.children.props,
      s = 'string' == typeof o.className ? o.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     (s && (l = s[1]), 'string' == typeof o.children && (t = o.children));
    }
    return (0, a.jsx)(i.M, { syntax: l, textContent: t, trim: !0 });
   }
   var m = t(46447);
   function g({ children: e }) {
    return (0, a.jsx)(o.x, { components: { code: m.Cy, a: m.N_, em: m.lx, pre: d, details: c, ul: ({ children: e }) => (0, a.jsx)(m.Xy, { className: 'utrecht-unordered-list--html-content', children: e }), ol: ({ children: e }) => (0, a.jsx)(m._J, { className: 'utrecht-ordered-list--html-content', children: e }), img: m._V, h1: m._, h2: m.fV, h3: m._B, h4: m.f_, h5: m.mM, h6: m.TT, admonition: s.A }, children: e });
   }
  },
  99816(e, l, t) {
   t.d(l, { A: () => n });
   t(30758);
   var o = t(68139),
    s = t(11063),
    r = t(86070);
   function n({ items: e, component: l = s.A }) {
    return (0, r.jsx)(r.Fragment, { children: e.map(({ content: e }) => (0, r.jsx)(o.in, { content: e, children: (0, r.jsx)(l, { children: (0, r.jsx)(e, {}) }) }, e.metadata.permalink)) });
   }
  },
 },
]);
