'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [83249],
 {
  11063(e, t, n) {
   n.d(t, { A: () => M });
   n(30758);
   var l = n(13526),
    o = n(68139),
    s = n(86070);
   function r({ children: e, className: t }) {
    return (0, s.jsx)('article', { className: t, children: e });
   }
   var a = n(63195);
   const i = 'title_Cvpl';
   function c({ className: e }) {
    const { metadata: t, isBlogPostPage: n } = (0, o.e7)(),
     { permalink: r, title: c } = t,
     d = n ? 'h1' : 'h2';
    return (0, s.jsx)(d, { className: (0, l.A)(i, e), children: n ? c : (0, s.jsx)(a.A, { to: r, children: c }) });
   }
   var d = n(18236),
    m = n(18105),
    u = n(43242);
   const h = 'container_fVB1';
   function g({ readingTime: e }) {
    const t = (function () {
     const { selectMessage: e } = (0, m.W)();
     return (t) => {
      const n = Math.ceil(t);
      return e(n, (0, d.T)({ id: 'theme.blog.post.readingTime.plurals', description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)', message: 'One min read|{readingTime} min read' }, { readingTime: n }));
     };
    })();
    return (0, s.jsx)(s.Fragment, { children: t(e) });
   }
   function p({ date: e, formattedDate: t }) {
    return (0, s.jsx)('time', { dateTime: e, children: t });
   }
   function x() {
    return (0, s.jsx)(s.Fragment, { children: ' \xb7 ' });
   }
   function f({ className: e }) {
    const { metadata: t } = (0, o.e7)(),
     { date: n, readingTime: r } = t,
     a = (0, u.i)({ day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    return (0, s.jsxs)('div', { className: (0, l.A)(h, 'margin-vert--md', e), children: [(0, s.jsx)(p, { date: n, formattedDate: ((i = n), a.format(new Date(i))) }), void 0 !== r && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(x, {}), (0, s.jsx)(g, { readingTime: r })] })] });
    var i;
   }
   var v = n(4786);
   const b = 'authorCol_aa16',
    y = 'imageOnlyAuthorRow_d1cU',
    j = 'imageOnlyAuthorCol_sh3B';
   function A({ className: e }) {
    const {
     metadata: { authors: t },
     assets: n,
    } = (0, o.e7)();
    if (0 === t.length) return null;
    const r = t.every(({ name: e }) => !e),
     a = 1 === t.length;
    return (0, s.jsx)('div', { className: (0, l.A)('margin-top--md margin-bottom--sm', r ? y : 'row', e), children: t.map((e, t) => (0, s.jsx)('div', { className: (0, l.A)(!r && (a ? 'col col--12' : 'col col--6'), r ? j : b), children: (0, s.jsx)(v.A, { author: { ...e, imageURL: n.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function k() {
    return (0, s.jsxs)('header', { children: [(0, s.jsx)(c, {}), (0, s.jsx)(f, {}), (0, s.jsx)(A, {})] });
   }
   var N = n(99939),
    _ = n(85963);
   function L({ children: e, className: t }) {
    const { isBlogPostPage: n } = (0, o.e7)();
    return (0, s.jsx)('div', { id: n ? N.LU : void 0, className: (0, l.A)('markdown', t), children: (0, s.jsx)(_.A, { children: e }) });
   }
   var T = n(71639),
    C = n(29307),
    w = n(97068);
   function H() {
    return (0, s.jsx)('b', { children: (0, s.jsx)(d.A, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read more' }) });
   }
   function P(e) {
    const { blogPostTitle: t, ...n } = e;
    return (0, s.jsx)(a.A, { 'aria-label': (0, d.T)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...n, children: (0, s.jsx)(H, {}) });
   }
   function B() {
    const { metadata: e, isBlogPostPage: t } = (0, o.e7)(),
     { tags: n, title: r, editUrl: a, hasTruncateMarker: i, lastUpdatedBy: c, lastUpdatedAt: d } = e,
     m = !t && i,
     u = n.length > 0;
    if (!(u || m || a)) return null;
    if (t) {
     const e = !!(a || d || c);
     return (0, s.jsxs)('footer', { className: 'docusaurus-mt-lg', children: [u && (0, s.jsx)('div', { className: (0, l.A)('row', 'margin-top--sm', T.G.blog.blogFooterEditMetaRow), children: (0, s.jsx)('div', { className: 'col', children: (0, s.jsx)(w.A, { tags: n }) }) }), e && (0, s.jsx)(C.A, { className: (0, l.A)('margin-top--sm', T.G.blog.blogFooterEditMetaRow), editUrl: a, lastUpdatedAt: d, lastUpdatedBy: c })] });
    }
    return (0, s.jsxs)('footer', { className: 'row docusaurus-mt-lg', children: [u && (0, s.jsx)('div', { className: (0, l.A)('col', { 'col--9': m }), children: (0, s.jsx)(w.A, { tags: n }) }), m && (0, s.jsx)('div', { className: (0, l.A)('col text--right', { 'col--3': u }), children: (0, s.jsx)(P, { blogPostTitle: r, to: e.permalink }) })] });
   }
   function M({ children: e, className: t }) {
    const n = (function () {
     const { isBlogPostPage: e } = (0, o.e7)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, s.jsxs)(r, { className: (0, l.A)(n, t), children: [(0, s.jsx)(k, {}), (0, s.jsx)(L, { children: e }), (0, s.jsx)(B, {})] });
   }
  },
  15638(e, t, n) {
   n.d(t, { $: () => d, x: () => c });
   var l = n(4077),
    o = n(58315),
    s = n(46447),
    r = n(13526),
    a = n(30758),
    i = n(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: t, description: n, children: a, figure: d }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div';
     return (0, i.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(s.fz, { children: e })] }), n] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: m[t] }, children: a }) })] });
    };
  },
  28904(e, t, n) {
   (n.r(t), n.d(t, { default: () => b }));
   n(30758);
   var l = n(13526),
    o = n(86332),
    s = n(71639),
    r = n(68139),
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
    const { assets: e, metadata: t } = (0, r.e7)(),
     { title: n, description: l, date: s, tags: a, authors: i, frontMatter: c } = t,
     { keywords: d } = c,
     u = e.image ?? c.image;
    return (0, m.jsxs)(o.be, {
     title: c.title_meta ?? n,
     description: l,
     keywords: d,
     image: u,
     children: [
      (0, m.jsx)('meta', { property: 'og:type', content: 'article' }),
      (0, m.jsx)('meta', { property: 'article:published_time', content: s }),
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
   var g = n(70241);
   function p() {
    const e = (0, r.J_)();
    return (0, m.jsx)(g.A, { children: (0, m.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(e) }) });
   }
   var x = n(78690),
    f = n(82826);
   function v({ sidebar: e, children: t }) {
    const { metadata: n, toc: l } = (0, r.e7)(),
     { nextItem: o, prevItem: s, frontMatter: c } = n,
     { hide_table_of_contents: d, toc_min_heading_level: h, toc_max_heading_level: g } = c;
    return (0, m.jsxs)(a.A, { sidebar: e, toc: !d && l.length > 0 ? (0, m.jsx)(x.A, { toc: l, minHeadingLevel: h, maxHeadingLevel: g }) : void 0, children: [(0, m.jsx)(f.A, { metadata: n }), (0, m.jsx)(i.A, { children: t }), (o || s) && (0, m.jsx)(u, { nextItem: o, prevItem: s })] });
   }
   function b(e) {
    const t = e.content;
    return (0, m.jsx)(r.in, { content: e.content, isBlogPostPage: !0, children: (0, m.jsxs)(o.e3, { className: (0, l.A)(s.G.wrapper.blogPages, s.G.page.blogPostPage), children: [(0, m.jsx)(h, {}), (0, m.jsx)(p, {}), (0, m.jsx)(v, { sidebar: e.sidebar, children: (0, m.jsx)(t, {}) })] }) });
   }
  },
  69284(e, t, n) {
   n.d(t, { M: () => c });
   var l = n(46447),
    o = n(16194),
    s = n(30758),
    r = n(15638);
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
    const { title: m, type: u } = (0, s.useContext)(r.x),
     h = (0, s.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(o.f4, { theme: a, code: d, language: t || '', children: ({ style: t, tokens: n, getLineProps: o, getTokenProps: s }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: t, children: n.map((t, n) => (0, i.jsxs)('span', { ...o({ line: t }), children: [e && (0, i.jsx)('span', { children: n + 1 }), t.map((e, t) => (0, i.jsx)('span', { ...s({ token: e }) }, t)), '\n'] }, n)) })] }) }));
   }
  },
  76310(e, t, n) {
   n.d(t, { A: () => c });
   n(30758);
   var l = n(13526),
    o = n(71639),
    s = n(79540),
    r = n(76713),
    a = n(86070);
   function i({ className: e }) {
    return (0, a.jsx)(r.A, { type: 'caution', title: (0, a.jsx)(s.Rc, {}), className: (0, l.A)(e, o.G.common.unlistedBanner), children: (0, a.jsx)(s.Uh, {}) });
   }
   function c(e) {
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(s.AE, {}), (0, a.jsx)(i, { ...e })] });
   }
  },
  78690(e, t, n) {
   n.d(t, { A: () => a });
   n(30758);
   var l = n(13526),
    o = n(85412);
   const s = 'tableOfContents_yXC1';
   var r = n(86070);
   function a({ className: e, ...t }) {
    return (0, r.jsx)('div', { className: (0, l.A)(s, 'thin-scrollbar', e), children: (0, r.jsx)(o.A, { ...t, linkClassName: 'table-of-contents__link toc-highlight', linkActiveClassName: 'table-of-contents__link--active' }) });
   }
  },
  79540(e, t, n) {
   n.d(t, { AE: () => i, Rc: () => r, TT: () => d, Uh: () => a, Yh: () => c });
   n(30758);
   var l = n(18236),
    o = n(70241),
    s = n(86070);
   function r() {
    return (0, s.jsx)(l.A, { id: 'theme.contentVisibility.unlistedBanner.title', description: 'The unlisted content banner title', children: 'Unlisted page' });
   }
   function a() {
    return (0, s.jsx)(l.A, { id: 'theme.contentVisibility.unlistedBanner.message', description: 'The unlisted content banner message', children: 'This page is unlisted. Search engines will not index it, and only users having a direct link can access it.' });
   }
   function i() {
    return (0, s.jsx)(o.A, { children: (0, s.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function c() {
    return (0, s.jsx)(l.A, { id: 'theme.contentVisibility.draftBanner.title', description: 'The draft content banner title', children: 'Draft page' });
   }
   function d() {
    return (0, s.jsx)(l.A, { id: 'theme.contentVisibility.draftBanner.message', description: 'The draft content banner message', children: 'This page is a draft. It will only be visible in dev and be excluded from the production build.' });
   }
  },
  82826(e, t, n) {
   n.d(t, { A: () => d });
   n(30758);
   var l = n(13526),
    o = n(79540),
    s = n(71639),
    r = n(76713),
    a = n(86070);
   function i({ className: e }) {
    return (0, a.jsx)(r.A, { type: 'caution', title: (0, a.jsx)(o.Yh, {}), className: (0, l.A)(e, s.G.common.draftBanner), children: (0, a.jsx)(o.TT, {}) });
   }
   var c = n(76310);
   function d({ metadata: e }) {
    const { unlisted: t, frontMatter: n } = e;
    return (0, a.jsxs)(a.Fragment, { children: [(t || n.unlisted) && (0, a.jsx)(c.A, {}), n.draft && (0, a.jsx)(i, {})] });
   }
  },
  85412(e, t, n) {
   n.d(t, { A: () => p });
   var l = n(30758),
    o = n(87014);
   function s(e) {
    const t = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     n = Array(7).fill(-1);
    t.forEach((e, t) => {
     const l = n.slice(2, e.level);
     ((e.parentIndex = Math.max(...l)), (n[e.level] = t));
    });
    const l = [];
    return (
     t.forEach((e) => {
      const { parentIndex: n, ...o } = e;
      n >= 0 ? t[n].children.push(o) : l.push(o);
     }),
     l
    );
   }
   function r({ toc: e, minHeadingLevel: t, maxHeadingLevel: n }) {
    return e.flatMap((e) => {
     const l = r({ toc: e.children, minHeadingLevel: t, maxHeadingLevel: n });
     return (function (e) {
      return e.level >= t && e.level <= n;
     })(e)
      ? [{ ...e, children: l }]
      : l;
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
    const e = (0, l.useRef)(0),
     {
      navbar: { hideOnScroll: t },
     } = (0, o.p)();
    return (
     (0, l.useEffect)(() => {
      e.current = t ? 0 : document.querySelector('.navbar').clientHeight;
     }, [t]),
     e
    );
   }
   function d(e) {
    const t = (0, l.useRef)(void 0),
     n = c();
    (0, l.useEffect)(() => {
     if (!e) return () => {};
     const { linkClassName: l, linkActiveClassName: o, minHeadingLevel: s, maxHeadingLevel: r } = e;
     function a() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(l),
       a = (function ({ minHeadingLevel: e, maxHeadingLevel: t }) {
        const n = [];
        for (let l = e; l <= t; l += 1) n.push(`h${l}.anchor`);
        return Array.from(document.querySelectorAll(n.join()));
       })({ minHeadingLevel: s, maxHeadingLevel: r }),
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
        n ? (t.current && t.current !== e && t.current.classList.remove(o), e.classList.add(o), (t.current = e)) : e.classList.remove(o);
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
   function h({ toc: e, className: t, linkClassName: n, isChild: l }) {
    return e.length ? (0, u.jsx)('ul', { className: l ? void 0 : t, children: e.map((e) => (0, u.jsxs)('li', { children: [(0, u.jsx)(m.A, { to: `#${e.id}`, className: n ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, u.jsx)(h, { isChild: !0, toc: e.children, className: t, linkClassName: n })] }, e.id)) }) : null;
   }
   const g = l.memo(h);
   function p({ toc: e, className: t = 'table-of-contents table-of-contents__left-border', linkClassName: n = 'table-of-contents__link', linkActiveClassName: a, minHeadingLevel: i, maxHeadingLevel: c, ...m }) {
    const h = (0, o.p)(),
     p = i ?? h.tableOfContents.minHeadingLevel,
     x = c ?? h.tableOfContents.maxHeadingLevel,
     f = (function ({ toc: e, minHeadingLevel: t, maxHeadingLevel: n }) {
      return (0, l.useMemo)(() => r({ toc: s(e), minHeadingLevel: t, maxHeadingLevel: n }), [e, t, n]);
     })({ toc: e, minHeadingLevel: p, maxHeadingLevel: x });
    return (
     d(
      (0, l.useMemo)(() => {
       if (n && a) return { linkClassName: n, linkActiveClassName: a, minHeadingLevel: p, maxHeadingLevel: x };
      }, [n, a, p, x]),
     ),
     (0, u.jsx)(g, { toc: f, className: t, linkClassName: n, ...m })
    );
   }
  },
  85963(e, t, n) {
   n.d(t, { A: () => u });
   var l = n(18439),
    o = n(76713),
    s = n(5784),
    r = n(30758),
    a = n(86070);
   function i(e) {
    const t = r.Children.toArray(e.children),
     n = t.find((e) => r.isValidElement(e) && 'summary' === e.props?.mdxType),
     l = (0, a.jsx)(a.Fragment, { children: t.filter((e) => e !== n) });
    return (0, a.jsx)(s.A, { ...e, summary: n, children: l });
   }
   var c = n(69284);
   function d(e) {
    let t,
     n = '';
    if ((0, r.isValidElement)(e.children)) {
     const l = e.children.props,
      o = 'string' == typeof l.className ? l.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     (o && (t = o[1]), 'string' == typeof l.children && (n = l.children));
    }
    return (0, a.jsx)(c.M, { syntax: t, textContent: n, trim: !0 });
   }
   var m = n(46447);
   function u({ children: e }) {
    return (0, a.jsx)(l.x, { components: { code: m.Cy, a: m.N_, em: m.lx, pre: d, details: i, ul: ({ children: e }) => (0, a.jsx)(m.Xy, { className: 'utrecht-unordered-list--html-content', children: e }), ol: ({ children: e }) => (0, a.jsx)(m._J, { className: 'utrecht-ordered-list--html-content', children: e }), img: m._V, h1: m._, h2: m.fV, h3: m._B, h4: m.f_, h5: m.mM, h6: m.TT, admonition: o.A }, children: e });
   }
  },
 },
]);
