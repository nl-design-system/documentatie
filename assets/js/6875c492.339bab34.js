'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84813],
 {
  3227(e, t, s) {
   s.d(t, { A: () => g });
   var n = s(60316),
    l = s(45282),
    r = s(2264),
    o = s(29181),
    a = s(13526),
    i = s(86070);
   function c({ href: e, icon: t = '', title: s, description: n, children: r }) {
    return (0, i.jsxs)('div', { className: 'card', children: [e ? (0, i.jsx)(l.N, { href: e, className: (0, a.A)('cardLink', 'utrecht-link'), children: (0, i.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', s] }) }) : (0, i.jsxs)('h2', { className: 'cardTitle', children: [t, ' ', s] }), n && (0, i.jsx)('p', { className: 'cardDescription', children: n }), r] });
   }
   function d({ item: e }) {
    return (0, i.jsx)(c, { title: e.label, description: e.description, children: (0, i.jsx)(o.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, t) => (0, i.jsx)(o.Er, { children: 'link' === e.type ? (0, i.jsx)(l.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, i.jsxs)(l.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, i.jsx)(i.Fragment, {}) }, t)) }) });
   }
   function m({ item: e }) {
    const t = (0, r.cC)(e.docId);
    return (0, i.jsx)(c, { href: e.href, title: e.label, description: e.description ?? t?.description });
   }
   function h({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, i.jsx)(m, { item: e });
     case 'category':
      return (0, i.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function u({ className: e }) {
    const t = (0, n.$S)();
    return (0, i.jsx)(g, { items: t.items, className: e });
   }
   function g(e) {
    const { items: t, className: s } = e;
    if (!t) return (0, i.jsx)(u, { ...e });
    const l = (0, n.d1)(t);
    return (0, i.jsx)('section', { className: (0, a.A)('row', s), ...e, children: l.map((e, t) => (0, i.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, i.jsx)(h, { item: e }) }, t)) });
   }
  },
  10441(e, t, s) {
   (s.r(t), s.d(t, { default: () => b }));
   s(30758);
   var n = s(13526),
    l = s(18236),
    r = s(71639),
    o = s(86332),
    a = s(57485),
    i = s(63195),
    c = s(57605),
    d = s(19485),
    m = s(63811),
    h = s(99816),
    u = s(76310),
    g = s(39470),
    p = s(86070);
   function x({ tag: e }) {
    const t = (0, a.ZD)(e);
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(o.be, { title: t, description: e.description }), (0, p.jsx)(m.A, { tag: 'blog_tags_posts' })] });
   }
   function y({ tag: e, items: t, sidebar: s, listMetadata: n }) {
    const r = (0, a.ZD)(e);
    return (0, p.jsxs)(c.A, { sidebar: s, children: [e.unlisted && (0, p.jsx)(u.A, {}), (0, p.jsxs)('header', { className: 'margin-bottom--xl', children: [(0, p.jsx)(g.A, { as: 'h1', children: r }), e.description && (0, p.jsx)('p', { children: e.description }), (0, p.jsx)(i.A, { href: e.allTagsPath, children: (0, p.jsx)(l.A, { id: 'theme.tags.tagsPageLink', description: 'The label of the link targeting the tag list page', children: 'View All Tags' }) })] }), (0, p.jsx)(h.A, { items: t }), (0, p.jsx)(d.A, { metadata: n })] });
   }
   function b(e) {
    return (0, p.jsxs)(o.e3, { className: (0, n.A)(r.G.wrapper.blogPages, r.G.page.blogTagPostListPage), children: [(0, p.jsx)(x, { ...e }), (0, p.jsx)(y, { ...e })] });
   }
  },
  11063(e, t, s) {
   s.d(t, { A: () => S });
   s(30758);
   var n = s(13526),
    l = s(68139),
    r = s(86070);
   function o({ children: e, className: t }) {
    return (0, r.jsx)('article', { className: t, children: e });
   }
   var a = s(63195);
   const i = 'title_Cvpl';
   function c({ className: e }) {
    const { metadata: t, isBlogPostPage: s } = (0, l.e7)(),
     { permalink: o, title: c } = t,
     d = s ? 'h1' : 'h2';
    return (0, r.jsx)(d, { className: (0, n.A)(i, e), children: s ? c : (0, r.jsx)(a.A, { to: o, children: c }) });
   }
   var d = s(18236),
    m = s(18105),
    h = s(43242);
   const u = 'container_fVB1';
   function g({ readingTime: e }) {
    const t = (function () {
     const { selectMessage: e } = (0, m.W)();
     return (t) => {
      const s = Math.ceil(t);
      return e(s, (0, d.T)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: s }));
     };
    })();
    return (0, r.jsx)(r.Fragment, { children: t(e) });
   }
   function p({ date: e, formattedDate: t }) {
    return (0, r.jsx)('time', { dateTime: e, children: t });
   }
   function x() {
    return (0, r.jsx)(r.Fragment, { children: ' \xb7 ' });
   }
   function y({ className: e }) {
    const { metadata: t } = (0, l.e7)(),
     { date: s, readingTime: o } = t,
     a = (0, h.i)({ day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    return (0, r.jsxs)('div', { className: (0, n.A)(u, 'margin-vert--md', e), children: [(0, r.jsx)(p, { date: s, formattedDate: ((i = s), a.format(new Date(i))) }), void 0 !== o && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(x, {}), (0, r.jsx)(g, { readingTime: o })] })] });
    var i;
   }
   var b = s(4786);
   const j = 'authorCol_aa16',
    f = 'imageOnlyAuthorRow_d1cU',
    v = 'imageOnlyAuthorCol_sh3B';
   function A({ className: e }) {
    const {
     metadata: { authors: t },
     assets: s,
    } = (0, l.e7)();
    if (0 === t.length) return null;
    const o = t.every(({ name: e }) => !e),
     a = 1 === t.length;
    return (0, r.jsx)('div', { className: (0, n.A)('margin-top--md margin-bottom--sm', o ? f : 'row', e), children: t.map((e, t) => (0, r.jsx)('div', { className: (0, n.A)(!o && (a ? 'col col--12' : 'col col--6'), o ? v : j), children: (0, r.jsx)(b.A, { author: { ...e, imageURL: s.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function k() {
    return (0, r.jsxs)('header', { children: [(0, r.jsx)(c, {}), (0, r.jsx)(y, {}), (0, r.jsx)(A, {})] });
   }
   var N = s(99939),
    T = s(29452);
   function _({ children: e, className: t }) {
    const { isBlogPostPage: s } = (0, l.e7)();
    return (0, r.jsx)('div', { id: s ? N.LU : void 0, className: (0, n.A)('markdown', t), children: (0, r.jsx)(T.A, { children: e }) });
   }
   var w = s(71639),
    P = s(29307),
    U = s(97068);
   function C() {
    return (0, r.jsx)('b', { children: (0, r.jsx)(d.A, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read more' }) });
   }
   function B(e) {
    const { blogPostTitle: t, ...s } = e;
    return (0, r.jsx)(a.A, { 'aria-label': (0, d.T)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...s, children: (0, r.jsx)(C, {}) });
   }
   function F() {
    const { metadata: e, isBlogPostPage: t } = (0, l.e7)(),
     { tags: s, title: o, editUrl: a, hasTruncateMarker: i, lastUpdatedBy: c, lastUpdatedAt: d } = e,
     m = !t && i,
     h = s.length > 0;
    if (!(h || m || a)) return null;
    if (t) {
     const e = !!(a || d || c);
     return (0, r.jsxs)('footer', { className: 'docusaurus-mt-lg', children: [h && (0, r.jsx)('div', { className: (0, n.A)('row', 'margin-top--sm', w.G.blog.blogFooterEditMetaRow), children: (0, r.jsx)('div', { className: 'col', children: (0, r.jsx)(U.A, { tags: s }) }) }), e && (0, r.jsx)(P.A, { className: (0, n.A)('margin-top--sm', w.G.blog.blogFooterEditMetaRow), editUrl: a, lastUpdatedAt: d, lastUpdatedBy: c })] });
    }
    return (0, r.jsxs)('footer', { className: 'row docusaurus-mt-lg', children: [h && (0, r.jsx)('div', { className: (0, n.A)('col', { 'col--9': m }), children: (0, r.jsx)(U.A, { tags: s }) }), m && (0, r.jsx)('div', { className: (0, n.A)('col text--right', { 'col--3': h }), children: (0, r.jsx)(B, { blogPostTitle: o, to: e.permalink }) })] });
   }
   function S({ children: e, className: t }) {
    const s = (function () {
     const { isBlogPostPage: e } = (0, l.e7)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, r.jsxs)(o, { className: (0, n.A)(s, t), children: [(0, r.jsx)(k, {}), (0, r.jsx)(_, { children: e }), (0, r.jsx)(F, {})] });
   }
  },
  15638(e, t, s) {
   s.d(t, { $: () => m, x: () => d });
   var n = s(4077),
    l = s(58315),
    r = s(46447),
    o = s(13526),
    a = s(9547),
    i = s(30758),
    c = s(86070);
   const d = (0, i.createContext)({}),
    m = ({ title: e, appearance: t, description: s, children: i, figure: m }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = m ? 'figure' : 'div',
      g = m ? 'figcaption' : 'div',
      p = 'string' == typeof s ? (0, c.jsx)(a.oz, { children: s }) : s;
     return (0, c.jsxs)(u, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(n.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(r.fz, { children: e })] }), p] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[t] }, children: i }) })] });
    };
  },
  19485(e, t, s) {
   s.d(t, { A: () => o });
   s(30758);
   var n = s(18236),
    l = s(52266),
    r = s(86070);
   function o(e) {
    const { metadata: t } = e,
     { previousPage: s, nextPage: o } = t;
    return (0, r.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, n.T)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [s && (0, r.jsx)(l.A, { permalink: s, title: (0, r.jsx)(n.A, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer entries' }) }), o && (0, r.jsx)(l.A, { permalink: o, title: (0, r.jsx)(n.A, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older entries' }), isNext: !0 })] });
   }
  },
  29452(e, t, s) {
   s.d(t, { A: () => y });
   var n = s(18439),
    l = s(76713),
    r = s(5784),
    o = s(30758),
    a = s(86070);
   function i(e) {
    const t = o.Children.toArray(e.children),
     s = t.find((e) => o.isValidElement(e) && 'summary' === e.props?.mdxType),
     n = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== s) });
    return (0, a.jsx)(r.A, { ...e, summary: s, children: n });
   }
   var c = s(69284);
   function d(e) {
    let t,
     s = '';
    if ((0, o.isValidElement)(e.children)) {
     const n = e.children.props,
      l = 'string' == typeof n.className ? n.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     (l && (t = l[1]), 'string' == typeof n.children && (s = n.children));
    }
    return (0, a.jsx)(c.M, { syntax: t, textContent: s, trim: !0 });
   }
   var m = s(46447),
    h = s(60316),
    u = s(13526),
    g = s(3227);
   const p = (e, t) => e.reduce((e, s) => ('link' === s.type ? (t.includes(s.docId) ? e : [...e, s]) : 'category' === s.type ? [...e, { ...s, items: p(s.items, t) }] : e), []),
    x = ({ excludeDocIDs: e = [], className: t, ...s }) => {
     const n = (0, h.$S)();
     return (0, a.jsx)('div', { ...s, className: (0, u.A)('margin-top--lg', t), children: (0, a.jsx)(g.A, { items: p(n.items, e) }) });
    };
   function y({ children: e }) {
    return (0, a.jsx)(n.x, { components: { code: m.Cy, a: m.N_, em: m.lx, pre: d, details: i, ul: ({ children: e }) => (0, a.jsx)(m.Xy, { className: 'utrecht-unordered-list--html-content', children: e }), ol: ({ children: e }) => (0, a.jsx)(m._J, { className: 'utrecht-ordered-list--html-content', children: e }), img: m._V, h1: m._, h2: m.fV, h3: m._B, h4: m.f_, h5: m.mM, h6: m.TT, admonition: l.A, OverviewPage: x, DocCardList: g.A }, children: e });
   }
  },
  45282(e, t, s) {
   s.d(t, { F: () => r, N: () => o });
   var n = s(13526),
    l = s(86070);
   const r = ({ children: e, ...t }) => {
     const { to: s, href: n, ...r } = t;
     let o = s || n;
     const a = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === a.origin ? ((a.pathname = a.pathname.endsWith('/') ? a.pathname : `${a.pathname}/`), (o = a.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, l.jsx)('a', { href: o, ...r, children: e }));
    },
    o = ({ className: e, ...t }) => (0, l.jsx)(r, { className: (0, n.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  57485(e, t, s) {
   s.d(t, { ZD: () => o, uz: () => a });
   s(30758);
   var n = s(18236),
    l = s(18105);
   s(86070);
   function r() {
    const { selectMessage: e } = (0, l.W)();
    return (t) => e(t, (0, n.T)({ id: 'theme.blog.post.plurals', description: 'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One post|{count} posts' }, { count: t }));
   }
   function o(e) {
    const t = r();
    return (0, n.T)({ id: 'theme.blog.tagTitle', description: 'The title of the page for a blog tag', message: '{nPosts} tagged with "{tagName}"' }, { nPosts: t(e.count), tagName: e.label });
   }
   const a = () => (0, n.T)({ id: 'theme.blog.authorsList.pageTitle', message: 'Authors', description: 'The title of the authors page' });
  },
  69284(e, t, s) {
   s.d(t, { M: () => c });
   var n = s(46447),
    l = s(16194),
    r = s(30758),
    o = s(15638);
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
   var i = s(86070);
   function c({ lineNumber: e, syntax: t, textContent: s, trim: c }) {
    let d = s;
    const { title: m, type: h } = (0, r.useContext)(o.x),
     u = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(l.f4, { theme: a, code: d, language: t || '', children: ({ style: t, tokens: s, getLineProps: l, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(n.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': u, style: t, children: s.map((t, s) => (0, i.jsxs)('span', { ...l({ line: t }), children: [e && (0, i.jsx)('span', { children: s + 1 }), t.map((e, t) => (0, i.jsx)('span', { ...r({ token: e }) }, t)), '\n'] }, s)) })] }) }));
   }
  },
  76310(e, t, s) {
   s.d(t, { A: () => c });
   s(30758);
   var n = s(13526),
    l = s(71639),
    r = s(79540),
    o = s(76713),
    a = s(86070);
   function i({ className: e }) {
    return (0, a.jsx)(o.A, { type: 'caution', title: (0, a.jsx)(r.Rc, {}), className: (0, n.A)(e, l.G.common.unlistedBanner), children: (0, a.jsx)(r.Uh, {}) });
   }
   function c(e) {
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(r.AE, {}), (0, a.jsx)(i, { ...e })] });
   }
  },
  79540(e, t, s) {
   s.d(t, { AE: () => i, Rc: () => o, TT: () => d, Uh: () => a, Yh: () => c });
   s(30758);
   var n = s(18236),
    l = s(70241),
    r = s(86070);
   function o() {
    return (0, r.jsx)(n.A, { id: 'theme.contentVisibility.unlistedBanner.title', description: 'The unlisted content banner title', children: 'Unlisted page' });
   }
   function a() {
    return (0, r.jsx)(n.A, { id: 'theme.contentVisibility.unlistedBanner.message', description: 'The unlisted content banner message', children: 'This page is unlisted. Search engines will not index it, and only users having a direct link can access it.' });
   }
   function i() {
    return (0, r.jsx)(l.A, { children: (0, r.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function c() {
    return (0, r.jsx)(n.A, { id: 'theme.contentVisibility.draftBanner.title', description: 'The draft content banner title', children: 'Draft page' });
   }
   function d() {
    return (0, r.jsx)(n.A, { id: 'theme.contentVisibility.draftBanner.message', description: 'The draft content banner message', children: 'This page is a draft. It will only be visible in dev and be excluded from the production build.' });
   }
  },
  99816(e, t, s) {
   s.d(t, { A: () => o });
   s(30758);
   var n = s(68139),
    l = s(11063),
    r = s(86070);
   function o({ items: e, component: t = l.A }) {
    return (0, r.jsx)(r.Fragment, { children: e.map(({ content: e }) => (0, r.jsx)(n.in, { content: e, children: (0, r.jsx)(t, { children: (0, r.jsx)(e, {}) }) }, e.metadata.permalink)) });
   }
  },
 },
]);
