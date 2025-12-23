'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [83249],
 {
  15638(e, t, o) {
   o.d(t, { $: () => d, x: () => i });
   var l = o(54736),
    s = o(26990),
    r = o(68873),
    n = o(13526),
    a = o(30758),
    c = o(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: t, description: o, children: a, figure: d }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div';
     return (0, c.jsxs)(p, { className: (0, n.A)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, n.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, n.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, c.jsx)(r.fz, { children: e })] }), o] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: m[t] }, children: a }) })] });
    };
  },
  51152(e, t, o) {
   o.r(t), o.d(t, { default: () => j });
   o(30758);
   var l = o(13526),
    s = o(6016),
    r = o(19499),
    n = o(74438),
    a = o(36353),
    c = o(55018),
    i = o(63475),
    d = o(71522),
    m = o(86070);
   function p(e) {
    const { nextItem: t, prevItem: o } = e;
    return (0, m.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, i.T)({ id: 'theme.blog.post.paginator.navAriaLabel', message: 'Blog post page navigation', description: 'The ARIA label for the blog posts pagination' }), children: [o && (0, m.jsx)(d.A, { ...o, subLabel: (0, m.jsx)(i.A, { id: 'theme.blog.post.paginator.newerPost', description: 'The blog post button label to navigate to the newer/previous post', children: 'Newer post' }) }), t && (0, m.jsx)(d.A, { ...t, subLabel: (0, m.jsx)(i.A, { id: 'theme.blog.post.paginator.olderPost', description: 'The blog post button label to navigate to the older/next post', children: 'Older post' }), isNext: !0 })] });
   }
   function u() {
    const { assets: e, metadata: t } = (0, n.e7)(),
     { title: o, description: l, date: r, tags: a, authors: c, frontMatter: i } = t,
     { keywords: d } = i,
     p = e.image ?? i.image;
    return (0, m.jsxs)(s.be, {
     title: i.title_meta ?? o,
     description: l,
     keywords: d,
     image: p,
     children: [
      (0, m.jsx)('meta', { property: 'og:type', content: 'article' }),
      (0, m.jsx)('meta', { property: 'article:published_time', content: r }),
      c.some((e) => e.url) &&
       (0, m.jsx)('meta', {
        property: 'article:author',
        content: c
         .map((e) => e.url)
         .filter(Boolean)
         .join(','),
       }),
      a.length > 0 && (0, m.jsx)('meta', { property: 'article:tag', content: a.map((e) => e.label).join(',') }),
     ],
    });
   }
   var g = o(94958);
   function h() {
    const e = (0, n.J_)();
    return (0, m.jsx)(g.A, { children: (0, m.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(e) }) });
   }
   var y = o(8166),
    x = o(72434);
   function b({ sidebar: e, children: t }) {
    const { metadata: o, toc: l } = (0, n.e7)(),
     { nextItem: s, prevItem: r, frontMatter: i } = o,
     { hide_table_of_contents: d, toc_min_heading_level: u, toc_max_heading_level: g } = i;
    return (0, m.jsxs)(a.A, { sidebar: e, toc: !d && l.length > 0 ? (0, m.jsx)(y.A, { toc: l, minHeadingLevel: u, maxHeadingLevel: g }) : void 0, children: [(0, m.jsx)(x.A, { metadata: o }), (0, m.jsx)(c.A, { children: t }), (s || r) && (0, m.jsx)(p, { nextItem: s, prevItem: r })] });
   }
   function j(e) {
    const t = e.content;
    return (0, m.jsx)(n.in, { content: e.content, isBlogPostPage: !0, children: (0, m.jsxs)(s.e3, { className: (0, l.A)(r.G.wrapper.blogPages, r.G.page.blogPostPage), children: [(0, m.jsx)(u, {}), (0, m.jsx)(h, {}), (0, m.jsx)(b, { sidebar: e.sidebar, children: (0, m.jsx)(t, {}) })] }) });
   }
  },
  55018(e, t, o) {
   o.d(t, { A: () => L });
   o(30758);
   var l = o(13526),
    s = o(74438),
    r = o(86070);
   function n({ children: e, className: t }) {
    return (0, r.jsx)('article', { className: t, children: e });
   }
   var a = o(83648);
   const c = 'title_qlHA';
   function i({ className: e }) {
    const { metadata: t, isBlogPostPage: o } = (0, s.e7)(),
     { permalink: n, title: i } = t,
     d = o ? 'h1' : 'h2';
    return (0, r.jsx)(d, { className: (0, l.A)(c, e), children: o ? i : (0, r.jsx)(a.A, { to: n, children: i }) });
   }
   var d = o(63475),
    m = o(74621),
    p = o(81246);
   const u = 'container_poU8';
   function g({ readingTime: e }) {
    const t = (function () {
     const { selectMessage: e } = (0, m.W)();
     return (t) => {
      const o = Math.ceil(t);
      return e(o, (0, d.T)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: o }));
     };
    })();
    return (0, r.jsx)(r.Fragment, { children: t(e) });
   }
   function h({ date: e, formattedDate: t }) {
    return (0, r.jsx)('time', { dateTime: e, children: t });
   }
   function y() {
    return (0, r.jsx)(r.Fragment, { children: ' \xb7 ' });
   }
   function x({ className: e }) {
    const { metadata: t } = (0, s.e7)(),
     { date: o, readingTime: n } = t,
     a = (0, p.i)({ day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    return (0, r.jsxs)('div', { className: (0, l.A)(u, 'margin-vert--md', e), children: [(0, r.jsx)(h, { date: o, formattedDate: ((c = o), a.format(new Date(c))) }), void 0 !== n && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(y, {}), (0, r.jsx)(g, { readingTime: n })] })] });
    var c;
   }
   var b = o(91566);
   const j = 'authorCol_R7XV',
    v = 'imageOnlyAuthorRow__ojw',
    f = 'imageOnlyAuthorCol_sMmV';
   function _({ className: e }) {
    const {
     metadata: { authors: t },
     assets: o,
    } = (0, s.e7)();
    if (0 === t.length) return null;
    const n = t.every(({ name: e }) => !e),
     a = 1 === t.length;
    return (0, r.jsx)('div', { className: (0, l.A)('margin-top--md margin-bottom--sm', n ? v : 'row', e), children: t.map((e, t) => (0, r.jsx)('div', { className: (0, l.A)(!n && (a ? 'col col--12' : 'col col--6'), n ? f : j), children: (0, r.jsx)(b.A, { author: { ...e, imageURL: o.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function k() {
    return (0, r.jsxs)('header', { children: [(0, r.jsx)(i, {}), (0, r.jsx)(x, {}), (0, r.jsx)(_, {})] });
   }
   var A = o(99939),
    N = o(85963);
   function T({ children: e, className: t }) {
    const { isBlogPostPage: o } = (0, s.e7)();
    return (0, r.jsx)('div', { id: o ? A.LU : void 0, className: (0, l.A)('markdown', t), children: (0, r.jsx)(N.A, { children: e }) });
   }
   var w = o(19499),
    P = o(16557),
    C = o(94484);
   function M() {
    return (0, r.jsx)('b', { children: (0, r.jsx)(d.A, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read more' }) });
   }
   function U(e) {
    const { blogPostTitle: t, ...o } = e;
    return (0, r.jsx)(a.A, { 'aria-label': (0, d.T)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...o, children: (0, r.jsx)(M, {}) });
   }
   function I() {
    const { metadata: e, isBlogPostPage: t } = (0, s.e7)(),
     { tags: o, title: n, editUrl: a, hasTruncateMarker: c, lastUpdatedBy: i, lastUpdatedAt: d } = e,
     m = !t && c,
     p = o.length > 0;
    if (!(p || m || a)) return null;
    if (t) {
     const e = !!(a || d || i);
     return (0, r.jsxs)('footer', { className: 'docusaurus-mt-lg', children: [p && (0, r.jsx)('div', { className: (0, l.A)('row', 'margin-top--sm', w.G.blog.blogFooterEditMetaRow), children: (0, r.jsx)('div', { className: 'col', children: (0, r.jsx)(C.A, { tags: o }) }) }), e && (0, r.jsx)(P.A, { className: (0, l.A)('margin-top--sm', w.G.blog.blogFooterEditMetaRow), editUrl: a, lastUpdatedAt: d, lastUpdatedBy: i })] });
    }
    return (0, r.jsxs)('footer', { className: 'row docusaurus-mt-lg', children: [p && (0, r.jsx)('div', { className: (0, l.A)('col', { 'col--9': m }), children: (0, r.jsx)(C.A, { tags: o }) }), m && (0, r.jsx)('div', { className: (0, l.A)('col text--right', { 'col--3': p }), children: (0, r.jsx)(U, { blogPostTitle: n, to: e.permalink }) })] });
   }
   function L({ children: e, className: t }) {
    const o = (function () {
     const { isBlogPostPage: e } = (0, s.e7)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, r.jsxs)(n, { className: (0, l.A)(o, t), children: [(0, r.jsx)(k, {}), (0, r.jsx)(T, { children: e }), (0, r.jsx)(I, {})] });
   }
  },
  69284(e, t, o) {
   o.d(t, { M: () => i });
   var l = o(68873),
    s = o(16194),
    r = o(30758),
    n = o(15638);
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
   var c = o(86070);
   function i({ lineNumber: e, syntax: t, textContent: o, trim: i }) {
    let d = o;
    const { title: m, type: p } = (0, r.useContext)(n.x),
     u = (0, r.useId)();
    return i && (d = d.trim()), (0, c.jsx)(s.f4, { theme: a, code: d, language: t || '', children: ({ style: t, tokens: o, getLineProps: s, getTokenProps: r }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, c.jsx)(l.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': u, style: t, children: o.map((t, o) => (0, c.jsxs)('span', { ...s({ line: t }), children: [e && (0, c.jsx)('span', { children: o + 1 }), t.map((e, t) => (0, c.jsx)('span', { ...r({ token: e }) }, t)), '\n'] }, o)) })] }) });
   }
  },
  85963(e, t, o) {
   o.d(t, { A: () => p });
   var l = o(85248),
    s = o(80345),
    r = o(52071),
    n = o(30758),
    a = o(86070);
   function c(e) {
    const t = n.Children.toArray(e.children),
     o = t.find((e) => n.isValidElement(e) && 'summary' === e.props?.mdxType),
     l = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== o) });
    return (0, a.jsx)(r.A, { ...e, summary: o, children: l });
   }
   var i = o(69284);
   function d(e) {
    let t,
     o = '';
    if ((0, n.isValidElement)(e.children)) {
     const l = e.children.props,
      s = 'string' == typeof l.className ? l.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     s && (t = s[1]), 'string' == typeof l.children && (o = l.children);
    }
    return (0, a.jsx)(i.M, { syntax: t, textContent: o, trim: !0 });
   }
   var m = o(68873);
   function p({ children: e }) {
    return (0, a.jsx)(l.x, { components: { code: m.Cy, a: m.N_, em: m.lx, pre: d, details: c, ul: ({ children: e }) => (0, a.jsx)(m.Xy, { className: 'utrecht-unordered-list--html-content', children: e }), ol: ({ children: e }) => (0, a.jsx)(m._J, { className: 'utrecht-ordered-list--html-content', children: e }), img: m._V, h1: m._, h2: m.fV, h3: m._B, h4: m.f_, h5: m.mM, h6: m.TT, admonition: s.A }, children: e });
   }
  },
 },
]);
