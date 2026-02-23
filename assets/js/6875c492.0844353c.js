'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84813],
 {
  10441(e, t, l) {
   (l.r(t), l.d(t, { default: () => y }));
   l(30758);
   var s = l(13526),
    n = l(18236),
    o = l(71639),
    r = l(86332),
    a = l(57485),
    i = l(63195),
    c = l(57605),
    d = l(19485),
    m = l(63811),
    u = l(99816),
    g = l(76310),
    h = l(39470),
    p = l(86070);
   function x({ tag: e }) {
    const t = (0, a.ZD)(e);
    return (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(r.be, { title: t, description: e.description }), (0, p.jsx)(m.A, { tag: 'blog_tags_posts' })] });
   }
   function b({ tag: e, items: t, sidebar: l, listMetadata: s }) {
    const o = (0, a.ZD)(e);
    return (0, p.jsxs)(c.A, { sidebar: l, children: [e.unlisted && (0, p.jsx)(g.A, {}), (0, p.jsxs)('header', { className: 'margin-bottom--xl', children: [(0, p.jsx)(h.A, { as: 'h1', children: o }), e.description && (0, p.jsx)('p', { children: e.description }), (0, p.jsx)(i.A, { href: e.allTagsPath, children: (0, p.jsx)(n.A, { id: 'theme.tags.tagsPageLink', description: 'The label of the link targeting the tag list page', children: 'View All Tags' }) })] }), (0, p.jsx)(u.A, { items: t }), (0, p.jsx)(d.A, { metadata: s })] });
   }
   function y(e) {
    return (0, p.jsxs)(r.e3, { className: (0, s.A)(o.G.wrapper.blogPages, o.G.page.blogTagPostListPage), children: [(0, p.jsx)(x, { ...e }), (0, p.jsx)(b, { ...e })] });
   }
  },
  11063(e, t, l) {
   l.d(t, { A: () => M });
   l(30758);
   var s = l(13526),
    n = l(68139),
    o = l(86070);
   function r({ children: e, className: t }) {
    return (0, o.jsx)('article', { className: t, children: e });
   }
   var a = l(63195);
   const i = 'title_Cvpl';
   function c({ className: e }) {
    const { metadata: t, isBlogPostPage: l } = (0, n.e7)(),
     { permalink: r, title: c } = t,
     d = l ? 'h1' : 'h2';
    return (0, o.jsx)(d, { className: (0, s.A)(i, e), children: l ? c : (0, o.jsx)(a.A, { to: r, children: c }) });
   }
   var d = l(18236),
    m = l(18105),
    u = l(43242);
   const g = 'container_fVB1';
   function h({ readingTime: e }) {
    const t = (function () {
     const { selectMessage: e } = (0, m.W)();
     return (t) => {
      const l = Math.ceil(t);
      return e(l, (0, d.T)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: l }));
     };
    })();
    return (0, o.jsx)(o.Fragment, { children: t(e) });
   }
   function p({ date: e, formattedDate: t }) {
    return (0, o.jsx)('time', { dateTime: e, children: t });
   }
   function x() {
    return (0, o.jsx)(o.Fragment, { children: ' \xb7 ' });
   }
   function b({ className: e }) {
    const { metadata: t } = (0, n.e7)(),
     { date: l, readingTime: r } = t,
     a = (0, u.i)({ day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    return (0, o.jsxs)('div', { className: (0, s.A)(g, 'margin-vert--md', e), children: [(0, o.jsx)(p, { date: l, formattedDate: ((i = l), a.format(new Date(i))) }), void 0 !== r && (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(x, {}), (0, o.jsx)(h, { readingTime: r })] })] });
    var i;
   }
   var y = l(4786);
   const j = 'authorCol_aa16',
    f = 'imageOnlyAuthorRow_d1cU',
    v = 'imageOnlyAuthorCol_sh3B';
   function A({ className: e }) {
    const {
     metadata: { authors: t },
     assets: l,
    } = (0, n.e7)();
    if (0 === t.length) return null;
    const r = t.every(({ name: e }) => !e),
     a = 1 === t.length;
    return (0, o.jsx)('div', { className: (0, s.A)('margin-top--md margin-bottom--sm', r ? f : 'row', e), children: t.map((e, t) => (0, o.jsx)('div', { className: (0, s.A)(!r && (a ? 'col col--12' : 'col col--6'), r ? v : j), children: (0, o.jsx)(y.A, { author: { ...e, imageURL: l.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function k() {
    return (0, o.jsxs)('header', { children: [(0, o.jsx)(c, {}), (0, o.jsx)(b, {}), (0, o.jsx)(A, {})] });
   }
   var N = l(99939),
    T = l(85963);
   function _({ children: e, className: t }) {
    const { isBlogPostPage: l } = (0, n.e7)();
    return (0, o.jsx)('div', { id: l ? N.LU : void 0, className: (0, s.A)('markdown', t), children: (0, o.jsx)(T.A, { children: e }) });
   }
   var w = l(71639),
    P = l(29307),
    U = l(97068);
   function B() {
    return (0, o.jsx)('b', { children: (0, o.jsx)(d.A, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read more' }) });
   }
   function C(e) {
    const { blogPostTitle: t, ...l } = e;
    return (0, o.jsx)(a.A, { 'aria-label': (0, d.T)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...l, children: (0, o.jsx)(B, {}) });
   }
   function F() {
    const { metadata: e, isBlogPostPage: t } = (0, n.e7)(),
     { tags: l, title: r, editUrl: a, hasTruncateMarker: i, lastUpdatedBy: c, lastUpdatedAt: d } = e,
     m = !t && i,
     u = l.length > 0;
    if (!(u || m || a)) return null;
    if (t) {
     const e = !!(a || d || c);
     return (0, o.jsxs)('footer', { className: 'docusaurus-mt-lg', children: [u && (0, o.jsx)('div', { className: (0, s.A)('row', 'margin-top--sm', w.G.blog.blogFooterEditMetaRow), children: (0, o.jsx)('div', { className: 'col', children: (0, o.jsx)(U.A, { tags: l }) }) }), e && (0, o.jsx)(P.A, { className: (0, s.A)('margin-top--sm', w.G.blog.blogFooterEditMetaRow), editUrl: a, lastUpdatedAt: d, lastUpdatedBy: c })] });
    }
    return (0, o.jsxs)('footer', { className: 'row docusaurus-mt-lg', children: [u && (0, o.jsx)('div', { className: (0, s.A)('col', { 'col--9': m }), children: (0, o.jsx)(U.A, { tags: l }) }), m && (0, o.jsx)('div', { className: (0, s.A)('col text--right', { 'col--3': u }), children: (0, o.jsx)(C, { blogPostTitle: r, to: e.permalink }) })] });
   }
   function M({ children: e, className: t }) {
    const l = (function () {
     const { isBlogPostPage: e } = (0, n.e7)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, o.jsxs)(r, { className: (0, s.A)(l, t), children: [(0, o.jsx)(k, {}), (0, o.jsx)(_, { children: e }), (0, o.jsx)(F, {})] });
   }
  },
  15638(e, t, l) {
   l.d(t, { $: () => d, x: () => c });
   var s = l(4077),
    n = l(58315),
    o = l(46447),
    r = l(13526),
    a = l(30758),
    i = l(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: t, description: l, children: a, figure: d }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      g = d ? 'figcaption' : 'div';
     return (0, i.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(n.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(o.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(o.fz, { children: e })] }), l] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[t] }, children: a }) })] });
    };
  },
  19485(e, t, l) {
   l.d(t, { A: () => r });
   l(30758);
   var s = l(18236),
    n = l(52266),
    o = l(86070);
   function r(e) {
    const { metadata: t } = e,
     { previousPage: l, nextPage: r } = t;
    return (0, o.jsxs)('nav', { className: 'pagination-nav', 'aria-label': (0, s.T)({ id: 'theme.blog.paginator.navAriaLabel', message: 'Blog list page navigation', description: 'The ARIA label for the blog pagination' }), children: [l && (0, o.jsx)(n.A, { permalink: l, title: (0, o.jsx)(s.A, { id: 'theme.blog.paginator.newerEntries', description: 'The label used to navigate to the newer blog posts page (previous page)', children: 'Newer entries' }) }), r && (0, o.jsx)(n.A, { permalink: r, title: (0, o.jsx)(s.A, { id: 'theme.blog.paginator.olderEntries', description: 'The label used to navigate to the older blog posts page (next page)', children: 'Older entries' }), isNext: !0 })] });
   }
  },
  57485(e, t, l) {
   l.d(t, { ZD: () => r, uz: () => a });
   l(30758);
   var s = l(18236),
    n = l(18105);
   l(86070);
   function o() {
    const { selectMessage: e } = (0, n.W)();
    return (t) => e(t, (0, s.T)({ id: 'theme.blog.post.plurals', description: 'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One post|{count} posts' }, { count: t }));
   }
   function r(e) {
    const t = o();
    return (0, s.T)({ id: 'theme.blog.tagTitle', description: 'The title of the page for a blog tag', message: '{nPosts} tagged with "{tagName}"' }, { nPosts: t(e.count), tagName: e.label });
   }
   const a = () => (0, s.T)({ id: 'theme.blog.authorsList.pageTitle', message: 'Authors', description: 'The title of the authors page' });
  },
  69284(e, t, l) {
   l.d(t, { M: () => c });
   var s = l(46447),
    n = l(16194),
    o = l(30758),
    r = l(15638);
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
   var i = l(86070);
   function c({ lineNumber: e, syntax: t, textContent: l, trim: c }) {
    let d = l;
    const { title: m, type: u } = (0, o.useContext)(r.x),
     g = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(n.f4, { theme: a, code: d, language: t || '', children: ({ style: t, tokens: l, getLineProps: n, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': g, style: t, children: l.map((t, l) => (0, i.jsxs)('span', { ...n({ line: t }), children: [e && (0, i.jsx)('span', { children: l + 1 }), t.map((e, t) => (0, i.jsx)('span', { ...o({ token: e }) }, t)), '\n'] }, l)) })] }) }));
   }
  },
  76310(e, t, l) {
   l.d(t, { A: () => c });
   l(30758);
   var s = l(13526),
    n = l(71639),
    o = l(79540),
    r = l(76713),
    a = l(86070);
   function i({ className: e }) {
    return (0, a.jsx)(r.A, { type: 'caution', title: (0, a.jsx)(o.Rc, {}), className: (0, s.A)(e, n.G.common.unlistedBanner), children: (0, a.jsx)(o.Uh, {}) });
   }
   function c(e) {
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(o.AE, {}), (0, a.jsx)(i, { ...e })] });
   }
  },
  79540(e, t, l) {
   l.d(t, { AE: () => i, Rc: () => r, TT: () => d, Uh: () => a, Yh: () => c });
   l(30758);
   var s = l(18236),
    n = l(70241),
    o = l(86070);
   function r() {
    return (0, o.jsx)(s.A, { id: 'theme.contentVisibility.unlistedBanner.title', description: 'The unlisted content banner title', children: 'Unlisted page' });
   }
   function a() {
    return (0, o.jsx)(s.A, { id: 'theme.contentVisibility.unlistedBanner.message', description: 'The unlisted content banner message', children: 'This page is unlisted. Search engines will not index it, and only users having a direct link can access it.' });
   }
   function i() {
    return (0, o.jsx)(n.A, { children: (0, o.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function c() {
    return (0, o.jsx)(s.A, { id: 'theme.contentVisibility.draftBanner.title', description: 'The draft content banner title', children: 'Draft page' });
   }
   function d() {
    return (0, o.jsx)(s.A, { id: 'theme.contentVisibility.draftBanner.message', description: 'The draft content banner message', children: 'This page is a draft. It will only be visible in dev and be excluded from the production build.' });
   }
  },
  85963(e, t, l) {
   l.d(t, { A: () => u });
   var s = l(18439),
    n = l(76713),
    o = l(5784),
    r = l(30758),
    a = l(86070);
   function i(e) {
    const t = r.Children.toArray(e.children),
     l = t.find((e) => r.isValidElement(e) && 'summary' === e.props?.mdxType),
     s = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== l) });
    return (0, a.jsx)(o.A, { ...e, summary: l, children: s });
   }
   var c = l(69284);
   function d(e) {
    let t,
     l = '';
    if ((0, r.isValidElement)(e.children)) {
     const s = e.children.props,
      n = 'string' == typeof s.className ? s.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     (n && (t = n[1]), 'string' == typeof s.children && (l = s.children));
    }
    return (0, a.jsx)(c.M, { syntax: t, textContent: l, trim: !0 });
   }
   var m = l(46447);
   function u({ children: e }) {
    return (0, a.jsx)(s.x, { components: { code: m.Cy, a: m.N_, em: m.lx, pre: d, details: i, ul: ({ children: e }) => (0, a.jsx)(m.Xy, { className: 'utrecht-unordered-list--html-content', children: e }), ol: ({ children: e }) => (0, a.jsx)(m._J, { className: 'utrecht-ordered-list--html-content', children: e }), img: m._V, h1: m._, h2: m.fV, h3: m._B, h4: m.f_, h5: m.mM, h6: m.TT, admonition: n.A }, children: e });
   }
  },
  99816(e, t, l) {
   l.d(t, { A: () => r });
   l(30758);
   var s = l(68139),
    n = l(11063),
    o = l(86070);
   function r({ items: e, component: t = n.A }) {
    return (0, o.jsx)(o.Fragment, { children: e.map(({ content: e }) => (0, o.jsx)(s.in, { content: e, children: (0, o.jsx)(t, { children: (0, o.jsx)(e, {}) }) }, e.metadata.permalink)) });
   }
  },
 },
]);
