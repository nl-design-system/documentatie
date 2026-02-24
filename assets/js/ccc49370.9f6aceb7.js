'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [83249],
 {
  3227(e, t, n) {
   n.d(t, { A: () => p });
   var s = n(60316),
    l = n(45282),
    r = n(2264),
    o = n(29181),
    a = n(13526),
    i = n(86070);
   function c({ href: e, icon: t = '', title: n, description: s, children: r }) {
    return (0, i.jsxs)('div', { className: 'card', children: [e ? (0, i.jsx)(l.N, { href: e, className: (0, a.A)('cardLink', 'utrecht-link'), children: (0, i.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', n] }) }) : (0, i.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', n] }), s && (0, i.jsx)('p', { className: 'cardDescription', children: s }), r] });
   }
   function d({ item: e }) {
    return (0, i.jsx)(c, { title: e.label, description: e.description, children: (0, i.jsx)(o.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, t) => (0, i.jsx)(o.Er, { children: 'link' === e.type ? (0, i.jsx)(l.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, i.jsxs)(l.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, i.jsx)(i.Fragment, {}) }, t)) }) });
   }
   function m({ item: e }) {
    const t = (0, r.cC)(e.docId);
    return (0, i.jsx)(c, { href: e.href, title: e.label, description: e.description ?? t?.description });
   }
   function u({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, i.jsx)(m, { item: e });
     case 'category':
      return (0, i.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function h({ className: e }) {
    const t = (0, s.$S)();
    return (0, i.jsx)(p, { items: t.items, className: e });
   }
   function p(e) {
    const { items: t, className: n } = e;
    if (!t) return (0, i.jsx)(h, { ...e });
    const l = (0, s.d1)(t);
    return (0, i.jsx)('section', { className: (0, a.A)('row', n), ...e, children: l.map((e, t) => (0, i.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, i.jsx)(u, { item: e }) }, t)) });
   }
  },
  11063(e, t, n) {
   n.d(t, { A: () => I });
   n(30758);
   var s = n(13526),
    l = n(68139),
    r = n(86070);
   function o({ children: e, className: t }) {
    return (0, r.jsx)('article', { className: t, children: e });
   }
   var a = n(63195);
   const i = 'title_Cvpl';
   function c({ className: e }) {
    const { metadata: t, isBlogPostPage: n } = (0, l.e7)(),
     { permalink: o, title: c } = t,
     d = n ? 'h1' : 'h2';
    return (0, r.jsx)(d, { className: (0, s.A)(i, e), children: n ? c : (0, r.jsx)(a.A, { to: o, children: c }) });
   }
   var d = n(18236),
    m = n(18105),
    u = n(43242);
   const h = 'container_fVB1';
   function p({ readingTime: e }) {
    const t = (function () {
     const { selectMessage: e } = (0, m.W)();
     return (t) => {
      const n = Math.ceil(t);
      return e(n, (0, d.T)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: n }));
     };
    })();
    return (0, r.jsx)(r.Fragment, { children: t(e) });
   }
   function g({ date: e, formattedDate: t }) {
    return (0, r.jsx)('time', { dateTime: e, children: t });
   }
   function x() {
    return (0, r.jsx)(r.Fragment, { children: ' \xb7 ' });
   }
   function f({ className: e }) {
    const { metadata: t } = (0, l.e7)(),
     { date: n, readingTime: o } = t,
     a = (0, u.i)({ day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    return (0, r.jsxs)('div', { className: (0, s.A)(h, 'margin-vert--md', e), children: [(0, r.jsx)(g, { date: n, formattedDate: ((i = n), a.format(new Date(i))) }), void 0 !== o && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(x, {}), (0, r.jsx)(p, { readingTime: o })] })] });
    var i;
   }
   var v = n(4786);
   const y = 'authorCol_aa16',
    b = 'imageOnlyAuthorRow_d1cU',
    j = 'imageOnlyAuthorCol_sh3B';
   function N({ className: e }) {
    const {
     metadata: { authors: t },
     assets: n,
    } = (0, l.e7)();
    if (0 === t.length) return null;
    const o = t.every(({ name: e }) => !e),
     a = 1 === t.length;
    return (0, r.jsx)('div', { className: (0, s.A)('margin-top--md margin-bottom--sm', o ? b : 'row', e), children: t.map((e, t) => (0, r.jsx)('div', { className: (0, s.A)(!o && (a ? 'col col--12' : 'col col--6'), o ? j : y), children: (0, r.jsx)(v.A, { author: { ...e, imageURL: n.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function A() {
    return (0, r.jsxs)('header', { children: [(0, r.jsx)(c, {}), (0, r.jsx)(f, {}), (0, r.jsx)(N, {})] });
   }
   var k = n(99939),
    _ = n(85963);
   function L({ children: e, className: t }) {
    const { isBlogPostPage: n } = (0, l.e7)();
    return (0, r.jsx)('div', { id: n ? k.LU : void 0, className: (0, s.A)('markdown', t), children: (0, r.jsx)(_.A, { children: e }) });
   }
   var T = n(71639),
    w = n(29307),
    C = n(97068);
   function H() {
    return (0, r.jsx)('b', { children: (0, r.jsx)(d.A, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read more' }) });
   }
   function P(e) {
    const { blogPostTitle: t, ...n } = e;
    return (0, r.jsx)(a.A, { 'aria-label': (0, d.T)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...n, children: (0, r.jsx)(H, {}) });
   }
   function B() {
    const { metadata: e, isBlogPostPage: t } = (0, l.e7)(),
     { tags: n, title: o, editUrl: a, hasTruncateMarker: i, lastUpdatedBy: c, lastUpdatedAt: d } = e,
     m = !t && i,
     u = n.length > 0;
    if (!(u || m || a)) return null;
    if (t) {
     const e = !!(a || d || c);
     return (0, r.jsxs)('footer', { className: 'docusaurus-mt-lg', children: [u && (0, r.jsx)('div', { className: (0, s.A)('row', 'margin-top--sm', T.G.blog.blogFooterEditMetaRow), children: (0, r.jsx)('div', { className: 'col', children: (0, r.jsx)(C.A, { tags: n }) }) }), e && (0, r.jsx)(w.A, { className: (0, s.A)('margin-top--sm', T.G.blog.blogFooterEditMetaRow), editUrl: a, lastUpdatedAt: d, lastUpdatedBy: c })] });
    }
    return (0, r.jsxs)('footer', { className: 'row docusaurus-mt-lg', children: [u && (0, r.jsx)('div', { className: (0, s.A)('col', { 'col--9': m }), children: (0, r.jsx)(C.A, { tags: n }) }), m && (0, r.jsx)('div', { className: (0, s.A)('col text--right', { 'col--3': u }), children: (0, r.jsx)(P, { blogPostTitle: o, to: e.permalink }) })] });
   }
   function I({ children: e, className: t }) {
    const n = (function () {
     const { isBlogPostPage: e } = (0, l.e7)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, r.jsxs)(o, { className: (0, s.A)(n, t), children: [(0, r.jsx)(A, {}), (0, r.jsx)(L, { children: e }), (0, r.jsx)(B, {})] });
   }
  },
  15638(e, t, n) {
   n.d(t, { $: () => d, x: () => c });
   var s = n(4077),
    l = n(58315),
    r = n(46447),
    o = n(13526),
    a = n(30758),
    i = n(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: t, description: n, children: a, figure: d }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div';
     return (0, i.jsxs)(u, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(r.fz, { children: e })] }), n] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[t] }, children: a }) })] });
    };
  },
  28904(e, t, n) {
   (n.r(t), n.d(t, { default: () => y }));
   n(30758);
   var s = n(13526),
    l = n(86332),
    r = n(71639),
    o = n(68139),
    a = n(57605),
    i = n(11063),
    c = n(18236),
    d = n(52266),
    m = n(86070);
   function u(e) {
    const { nextItem: t, prevItem: n } = e;
    return (0, m.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, c.T)({ id: 'theme.blog.post.paginator.navAriaLabel', message: 'Blog post page navigation', description: 'The ARIA label for the blog posts pagination' }), children: [n && (0, m.jsx)(d.A, { ...n, subLabel: (0, m.jsx)(c.A, { id: 'theme.blog.post.paginator.newerPost', description: 'The blog post button label to navigate to the newer/previous post', children: 'Newer post' }) }), t && (0, m.jsx)(d.A, { ...t, subLabel: (0, m.jsx)(c.A, { id: 'theme.blog.post.paginator.olderPost', description: 'The blog post button label to navigate to the older/next post', children: 'Older post' }), isNext: !0 })] });
   }
   function h() {
    const { assets: e, metadata: t } = (0, o.e7)(),
     { title: n, description: s, date: r, tags: a, authors: i, frontMatter: c } = t,
     { keywords: d } = c,
     u = e.image ?? c.image;
    return (0, m.jsxs)(l.be, {
     title: c.title_meta ?? n,
     description: s,
     keywords: d,
     image: u,
     children: [
      (0, m.jsx)('meta', { property: 'og:type', content: 'article' }),
      (0, m.jsx)('meta', { property: 'article:published_time', content: r }),
      i.some((e) => e.url) &&
       (0, m.jsx)('meta', {
        property: 'article:author',
        content: i
         .map((e) => e.url)
         .filter(Boolean)
         .join(','),
       }),
      a.length > 0 && (0, m.jsx)('meta', { property: 'article:tag', content: a.map((e) => e.label).join(',') }),
     ],
    });
   }
   var p = n(70241);
   function g() {
    const e = (0, o.J_)();
    return (0, m.jsx)(p.A, { children: (0, m.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(e) }) });
   }
   var x = n(78690),
    f = n(82826);
   function v({ sidebar: e, children: t }) {
    const { metadata: n, toc: s } = (0, o.e7)(),
     { nextItem: l, prevItem: r, frontMatter: c } = n,
     { hide_table_of_contents: d, toc_min_heading_level: h, toc_max_heading_level: p } = c;
    return (0, m.jsxs)(a.A, { sidebar: e, toc: !d && s.length > 0 ? (0, m.jsx)(x.A, { toc: s, minHeadingLevel: h, maxHeadingLevel: p }) : void 0, children: [(0, m.jsx)(f.A, { metadata: n }), (0, m.jsx)(i.A, { children: t }), (l || r) && (0, m.jsx)(u, { nextItem: l, prevItem: r })] });
   }
   function y(e) {
    const t = e.content;
    return (0, m.jsx)(o.in, { content: e.content, isBlogPostPage: !0, children: (0, m.jsxs)(l.e3, { className: (0, s.A)(r.G.wrapper.blogPages, r.G.page.blogPostPage), children: [(0, m.jsx)(h, {}), (0, m.jsx)(g, {}), (0, m.jsx)(v, { sidebar: e.sidebar, children: (0, m.jsx)(t, {}) })] }) });
   }
  },
  45282(e, t, n) {
   n.d(t, { F: () => r, N: () => o });
   var s = n(13526),
    l = n(86070);
   const r = ({ children: e, ...t }) => {
     const { to: n, href: s, ...r } = t;
     let o = n || s;
     const a = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === a.origin ? ((a.pathname = a.pathname.endsWith('/') ? a.pathname : `${a.pathname}/`), (o = a.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, l.jsx)('a', { href: o, ...r, children: e }));
    },
    o = ({ className: e, ...t }) => (0, l.jsx)(r, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  69284(e, t, n) {
   n.d(t, { M: () => c });
   var s = n(46447),
    l = n(16194),
    r = n(30758),
    o = n(15638);
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
   var i = n(86070);
   function c({ lineNumber: e, syntax: t, textContent: n, trim: c }) {
    let d = n;
    const { title: m, type: u } = (0, r.useContext)(o.x),
     h = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(l.f4, { theme: a, code: d, language: t || '', children: ({ style: t, tokens: n, getLineProps: l, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: t, children: n.map((t, n) => (0, i.jsxs)('span', { ...l({ line: t }), children: [e && (0, i.jsx)('span', { children: n + 1 }), t.map((e, t) => (0, i.jsx)('span', { ...r({ token: e }) }, t)), '\n'] }, n)) })] }) }));
   }
  },
  76310(e, t, n) {
   n.d(t, { A: () => c });
   n(30758);
   var s = n(13526),
    l = n(71639),
    r = n(79540),
    o = n(76713),
    a = n(86070);
   function i({ className: e }) {
    return (0, a.jsx)(o.A, { type: 'caution', title: (0, a.jsx)(r.Rc, {}), className: (0, s.A)(e, l.G.common.unlistedBanner), children: (0, a.jsx)(r.Uh, {}) });
   }
   function c(e) {
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(r.AE, {}), (0, a.jsx)(i, { ...e })] });
   }
  },
  78690(e, t, n) {
   n.d(t, { A: () => a });
   n(30758);
   var s = n(13526),
    l = n(85412);
   const r = 'tableOfContents_yXC1';
   var o = n(86070);
   function a({ className: e, ...t }) {
    return (0, o.jsx)('div', { className: (0, s.A)(r, 'thin-scrollbar', e), children: (0, o.jsx)(l.A, { ...t, linkClassName: 'table-of-contents__link toc-highlight', linkActiveClassName: 'table-of-contents__link--active' }) });
   }
  },
  79540(e, t, n) {
   n.d(t, { AE: () => i, Rc: () => o, TT: () => d, Uh: () => a, Yh: () => c });
   n(30758);
   var s = n(18236),
    l = n(70241),
    r = n(86070);
   function o() {
    return (0, r.jsx)(s.A, { id: 'theme.contentVisibility.unlistedBanner.title', description: 'The unlisted content banner title', children: 'Unlisted page' });
   }
   function a() {
    return (0, r.jsx)(s.A, { id: 'theme.contentVisibility.unlistedBanner.message', description: 'The unlisted content banner message', children: 'This page is unlisted. Search engines will not index it, and only users having a direct link can access it.' });
   }
   function i() {
    return (0, r.jsx)(l.A, { children: (0, r.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function c() {
    return (0, r.jsx)(s.A, { id: 'theme.contentVisibility.draftBanner.title', description: 'The draft content banner title', children: 'Draft page' });
   }
   function d() {
    return (0, r.jsx)(s.A, { id: 'theme.contentVisibility.draftBanner.message', description: 'The draft content banner message', children: 'This page is a draft. It will only be visible in dev and be excluded from the production build.' });
   }
  },
  82826(e, t, n) {
   n.d(t, { A: () => d });
   n(30758);
   var s = n(13526),
    l = n(79540),
    r = n(71639),
    o = n(76713),
    a = n(86070);
   function i({ className: e }) {
    return (0, a.jsx)(o.A, { type: 'caution', title: (0, a.jsx)(l.Yh, {}), className: (0, s.A)(e, r.G.common.draftBanner), children: (0, a.jsx)(l.TT, {}) });
   }
   var c = n(76310);
   function d({ metadata: e }) {
    const { unlisted: t, frontMatter: n } = e;
    return (0, a.jsxs)(a.Fragment, { children: [(t || n.unlisted) && (0, a.jsx)(c.A, {}), n.draft && (0, a.jsx)(i, {})] });
   }
  },
  85412(e, t, n) {
   n.d(t, { A: () => g });
   var s = n(30758),
    l = n(87014);
   function r(e) {
    const t = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     n = Array(7).fill(-1);
    t.forEach((e, t) => {
     const s = n.slice(2, e.level);
     ((e.parentIndex = Math.max(...s)), (n[e.level] = t));
    });
    const s = [];
    return (
     t.forEach((e) => {
      const { parentIndex: n, ...l } = e;
      n >= 0 ? t[n].children.push(l) : s.push(l);
     }),
     s
    );
   }
   function o({ toc: e, minHeadingLevel: t, maxHeadingLevel: n }) {
    return e.flatMap((e) => {
     const s = o({ toc: e.children, minHeadingLevel: t, maxHeadingLevel: n });
     return (function (e) {
      return e.level >= t && e.level <= n;
     })(e)
      ? [{ ...e, children: s }]
      : s;
    });
   }
   function a(e) {
    const t = e.getBoundingClientRect();
    return t.top === t.bottom ? a(e.parentNode) : t;
   }
   function i(e, { anchorTopOffset: t }) {
    const n = e.find((e) => a(e).top >= t);
    if (n) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(a(n))
      ? n
      : (e[e.indexOf(n) - 1] ?? null);
    }
    return e[e.length - 1] ?? null;
   }
   function c() {
    const e = (0, s.useRef)(0),
     {
      navbar: { hideOnScroll: t },
     } = (0, l.p)();
    return (
     (0, s.useEffect)(() => {
      e.current = t ? 0 : document.querySelector('.navbar').clientHeight;
     }, [t]),
     e
    );
   }
   function d(e) {
    const t = (0, s.useRef)(void 0),
     n = c();
    (0, s.useEffect)(() => {
     if (!e) return () => {};
     const { linkClassName: s, linkActiveClassName: l, minHeadingLevel: r, maxHeadingLevel: o } = e;
     function a() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(s),
       a = (function ({ minHeadingLevel: e, maxHeadingLevel: t }) {
        const n = [];
        for (let s = e; s <= t; s += 1) n.push(`h${s}.anchor`);
        return Array.from(document.querySelectorAll(n.join()));
       })({ minHeadingLevel: r, maxHeadingLevel: o }),
       c = i(a, { anchorTopOffset: n.current }),
       d = e.find(
        (e) =>
         c &&
         c.id ===
          (function (e) {
           return decodeURIComponent(e.href.substring(e.href.indexOf('#') + 1));
          })(e),
       );
      e.forEach((e) => {
       !(function (e, n) {
        n ? (t.current && t.current !== e && t.current.classList.remove(l), e.classList.add(l), (t.current = e)) : e.classList.remove(l);
       })(e, e === d);
      });
     }
     return (
      document.addEventListener('scroll', a),
      document.addEventListener('resize', a),
      a(),
      () => {
       (document.removeEventListener('scroll', a), document.removeEventListener('resize', a));
      }
     );
    }, [e, n]);
   }
   var m = n(63195),
    u = n(86070);
   function h({ toc: e, className: t, linkClassName: n, isChild: s }) {
    return e.length ? (0, u.jsx)('ul', { className: s ? void 0 : t, children: e.map((e) => (0, u.jsxs)('li', { children: [(0, u.jsx)(m.A, { to: `#${e.id}`, className: n ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, u.jsx)(h, { isChild: !0, toc: e.children, className: t, linkClassName: n })] }, e.id)) }) : null;
   }
   const p = s.memo(h);
   function g({ toc: e, className: t = 'table-of-contents table-of-contents__left-border', linkClassName: n = 'table-of-contents__link', linkActiveClassName: a, minHeadingLevel: i, maxHeadingLevel: c, ...m }) {
    const h = (0, l.p)(),
     g = i ?? h.tableOfContents.minHeadingLevel,
     x = c ?? h.tableOfContents.maxHeadingLevel,
     f = (function ({ toc: e, minHeadingLevel: t, maxHeadingLevel: n }) {
      return (0, s.useMemo)(() => o({ toc: r(e), minHeadingLevel: t, maxHeadingLevel: n }), [e, t, n]);
     })({ toc: e, minHeadingLevel: g, maxHeadingLevel: x });
    return (
     d(
      (0, s.useMemo)(() => {
       if (n && a) return { linkClassName: n, linkActiveClassName: a, minHeadingLevel: g, maxHeadingLevel: x };
      }, [n, a, g, x]),
     ),
     (0, u.jsx)(p, { toc: f, className: t, linkClassName: n, ...m })
    );
   }
  },
  85963(e, t, n) {
   n.d(t, { A: () => h });
   var s = n(18439),
    l = n(76713),
    r = n(5784),
    o = n(30758),
    a = n(86070);
   function i(e) {
    const t = o.Children.toArray(e.children),
     n = t.find((e) => o.isValidElement(e) && 'summary' === e.props?.mdxType),
     s = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== n) });
    return (0, a.jsx)(r.A, { ...e, summary: n, children: s });
   }
   var c = n(69284);
   function d(e) {
    let t,
     n = '';
    if ((0, o.isValidElement)(e.children)) {
     const s = e.children.props,
      l = 'string' == typeof s.className ? s.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     (l && (t = l[1]), 'string' == typeof s.children && (n = s.children));
    }
    return (0, a.jsx)(c.M, { syntax: t, textContent: n, trim: !0 });
   }
   var m = n(46447),
    u = n(89874);
   function h({ children: e }) {
    return (0, a.jsx)(s.x, { components: { code: m.Cy, a: m.N_, em: m.lx, pre: d, details: i, ul: ({ children: e }) => (0, a.jsx)(m.Xy, { className: 'utrecht-unordered-list--html-content', children: e }), ol: ({ children: e }) => (0, a.jsx)(m._J, { className: 'utrecht-ordered-list--html-content', children: e }), img: m._V, h1: m._, h2: m.fV, h3: m._B, h4: m.f_, h5: m.mM, h6: m.TT, admonition: l.A, OverviewPage: u.F }, children: e });
   }
  },
  89874(e, t, n) {
   n.d(t, { F: () => i });
   var s = n(60316),
    l = n(13526),
    r = n(3227),
    o = n(86070);
   const a = (e, t) => e.reduce((e, n) => ('link' === n.type ? (t.includes(n.docId) ? e : [...e, n]) : 'category' === n.type ? [...e, { ...n, items: a(n.items, t) }] : e), []),
    i = ({ excludeDocIDs: e = [], className: t, ...n }) => {
     const i = (0, s.$S)();
     return (0, o.jsx)('div', { ...n, className: (0, l.A)('margin-top--lg', t), children: (0, o.jsx)(r.A, { items: a(i.items, e) }) });
    };
  },
 },
]);
