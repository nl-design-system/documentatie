'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [28904],
 {
  11063(e, t, n) {
   n.d(t, { A: () => U });
   n(30758);
   var s = n(13526),
    a = n(68139),
    i = n(86070);
   function r({ children: e, className: t }) {
    return (0, i.jsx)('article', { className: t, children: e });
   }
   var l = n(63195);
   const o = 'title_Cvpl';
   function c({ className: e }) {
    const { metadata: t, isBlogPostPage: n } = (0, a.e7)(),
     { permalink: r, title: c } = t,
     d = n ? 'h1' : 'h2';
    return (0, i.jsx)(d, { className: (0, s.A)(o, e), children: n ? c : (0, i.jsx)(l.A, { to: r, children: c }) });
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
    return (0, i.jsx)(i.Fragment, { children: t(e) });
   }
   function x({ date: e, formattedDate: t }) {
    return (0, i.jsx)('time', { dateTime: e, children: t });
   }
   function f() {
    return (0, i.jsx)(i.Fragment, { children: ' \xb7 ' });
   }
   function p({ className: e }) {
    const { metadata: t } = (0, a.e7)(),
     { date: n, readingTime: r } = t,
     l = (0, u.i)({ day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    return (0, i.jsxs)('div', { className: (0, s.A)(h, 'margin-vert--md', e), children: [(0, i.jsx)(x, { date: n, formattedDate: ((o = n), l.format(new Date(o))) }), void 0 !== r && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(f, {}), (0, i.jsx)(g, { readingTime: r })] })] });
    var o;
   }
   var v = n(4786);
   const j = 'authorCol_aa16',
    b = 'imageOnlyAuthorRow_d1cU',
    A = 'imageOnlyAuthorCol_sh3B';
   function N({ className: e }) {
    const {
     metadata: { authors: t },
     assets: n,
    } = (0, a.e7)();
    if (0 === t.length) return null;
    const r = t.every(({ name: e }) => !e),
     l = 1 === t.length;
    return (0, i.jsx)('div', { className: (0, s.A)('margin-top--md margin-bottom--sm', r ? b : 'row', e), children: t.map((e, t) => (0, i.jsx)('div', { className: (0, s.A)(!r && (l ? 'col col--12' : 'col col--6'), r ? A : j), children: (0, i.jsx)(v.A, { author: { ...e, imageURL: n.authorsImageUrls[t] ?? e.imageURL } }) }, t)) });
   }
   function L() {
    return (0, i.jsxs)('header', { children: [(0, i.jsx)(c, {}), (0, i.jsx)(p, {}), (0, i.jsx)(N, {})] });
   }
   var _ = n(99939),
    y = n(10768);
   function T({ children: e, className: t }) {
    const { isBlogPostPage: n } = (0, a.e7)();
    return (0, i.jsx)('div', { id: n ? _.LU : void 0, className: (0, s.A)('markdown', t), children: (0, i.jsx)(y.A, { children: e }) });
   }
   var k = n(71639),
    H = n(29307),
    w = n(97068);
   function C() {
    return (0, i.jsx)('b', { children: (0, i.jsx)(d.A, { id: 'theme.blog.post.readMore', description: 'The label used in blog post item excerpts to link to full blog posts', children: 'Read more' }) });
   }
   function B(e) {
    const { blogPostTitle: t, ...n } = e;
    return (0, i.jsx)(l.A, { 'aria-label': (0, d.T)({ message: 'Read more about {title}', id: 'theme.blog.post.readMoreLabel', description: 'The ARIA label for the link to full blog posts from excerpts' }, { title: t }), ...n, children: (0, i.jsx)(C, {}) });
   }
   function P() {
    const { metadata: e, isBlogPostPage: t } = (0, a.e7)(),
     { tags: n, title: r, editUrl: l, hasTruncateMarker: o, lastUpdatedBy: c, lastUpdatedAt: d } = e,
     m = !t && o,
     u = n.length > 0;
    if (!(u || m || l)) return null;
    if (t) {
     const e = !!(l || d || c);
     return (0, i.jsxs)('footer', { className: 'docusaurus-mt-lg', children: [u && (0, i.jsx)('div', { className: (0, s.A)('row', 'margin-top--sm', k.G.blog.blogFooterEditMetaRow), children: (0, i.jsx)('div', { className: 'col', children: (0, i.jsx)(w.A, { tags: n }) }) }), e && (0, i.jsx)(H.A, { className: (0, s.A)('margin-top--sm', k.G.blog.blogFooterEditMetaRow), editUrl: l, lastUpdatedAt: d, lastUpdatedBy: c })] });
    }
    return (0, i.jsxs)('footer', { className: 'row docusaurus-mt-lg', children: [u && (0, i.jsx)('div', { className: (0, s.A)('col', { 'col--9': m }), children: (0, i.jsx)(w.A, { tags: n }) }), m && (0, i.jsx)('div', { className: (0, s.A)('col text--right', { 'col--3': u }), children: (0, i.jsx)(B, { blogPostTitle: r, to: e.permalink }) })] });
   }
   function U({ children: e, className: t }) {
    const n = (function () {
     const { isBlogPostPage: e } = (0, a.e7)();
     return e ? void 0 : 'margin-bottom--xl';
    })();
    return (0, i.jsxs)(r, { className: (0, s.A)(n, t), children: [(0, i.jsx)(L, {}), (0, i.jsx)(T, { children: e }), (0, i.jsx)(P, {})] });
   }
  },
  28904(e, t, n) {
   (n.r(t), n.d(t, { default: () => j }));
   n(30758);
   var s = n(13526),
    a = n(86332),
    i = n(71639),
    r = n(68139),
    l = n(57605),
    o = n(11063),
    c = n(18236),
    d = n(52266),
    m = n(86070);
   function u(e) {
    const { nextItem: t, prevItem: n } = e;
    return (0, m.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, c.T)({ id: 'theme.blog.post.paginator.navAriaLabel', message: 'Blog post page navigation', description: 'The ARIA label for the blog posts pagination' }), children: [n && (0, m.jsx)(d.A, { ...n, subLabel: (0, m.jsx)(c.A, { id: 'theme.blog.post.paginator.newerPost', description: 'The blog post button label to navigate to the newer/previous post', children: 'Newer post' }) }), t && (0, m.jsx)(d.A, { ...t, subLabel: (0, m.jsx)(c.A, { id: 'theme.blog.post.paginator.olderPost', description: 'The blog post button label to navigate to the older/next post', children: 'Older post' }), isNext: !0 })] });
   }
   function h() {
    const { assets: e, metadata: t } = (0, r.e7)(),
     { title: n, description: s, date: i, tags: l, authors: o, frontMatter: c } = t,
     { keywords: d } = c,
     u = e.image ?? c.image;
    return (0, m.jsxs)(a.be, {
     title: c.title_meta ?? n,
     description: s,
     keywords: d,
     image: u,
     children: [
      (0, m.jsx)('meta', { property: 'og:type', content: 'article' }),
      (0, m.jsx)('meta', { property: 'article:published_time', content: i }),
      o.some((e) => e.url) &&
       (0, m.jsx)('meta', {
        property: 'article:author',
        content: o
         .map((e) => e.url)
         .filter(Boolean)
         .join(','),
       }),
      l.length > 0 && (0, m.jsx)('meta', { property: 'article:tag', content: l.map((e) => e.label).join(',') }),
     ],
    });
   }
   var g = n(70241);
   function x() {
    const e = (0, r.J_)();
    return (0, m.jsx)(g.A, { children: (0, m.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(e) }) });
   }
   var f = n(78690),
    p = n(82826);
   function v({ sidebar: e, children: t }) {
    const { metadata: n, toc: s } = (0, r.e7)(),
     { nextItem: a, prevItem: i, frontMatter: c } = n,
     { hide_table_of_contents: d, toc_min_heading_level: h, toc_max_heading_level: g } = c;
    return (0, m.jsxs)(l.A, { sidebar: e, toc: !d && s.length > 0 ? (0, m.jsx)(f.A, { toc: s, minHeadingLevel: h, maxHeadingLevel: g }) : void 0, children: [(0, m.jsx)(p.A, { metadata: n }), (0, m.jsx)(o.A, { children: t }), (a || i) && (0, m.jsx)(u, { nextItem: a, prevItem: i })] });
   }
   function j(e) {
    const t = e.content;
    return (0, m.jsx)(r.in, { content: e.content, isBlogPostPage: !0, children: (0, m.jsxs)(a.e3, { className: (0, s.A)(i.G.wrapper.blogPages, i.G.page.blogPostPage), children: [(0, m.jsx)(h, {}), (0, m.jsx)(x, {}), (0, m.jsx)(v, { sidebar: e.sidebar, children: (0, m.jsx)(t, {}) })] }) });
   }
  },
  76310(e, t, n) {
   n.d(t, { A: () => c });
   n(30758);
   var s = n(13526),
    a = n(71639),
    i = n(79540),
    r = n(76713),
    l = n(86070);
   function o({ className: e }) {
    return (0, l.jsx)(r.A, { type: 'caution', title: (0, l.jsx)(i.Rc, {}), className: (0, s.A)(e, a.G.common.unlistedBanner), children: (0, l.jsx)(i.Uh, {}) });
   }
   function c(e) {
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.AE, {}), (0, l.jsx)(o, { ...e })] });
   }
  },
  78690(e, t, n) {
   n.d(t, { A: () => l });
   n(30758);
   var s = n(13526),
    a = n(85412);
   const i = 'tableOfContents_yXC1';
   var r = n(86070);
   function l({ className: e, ...t }) {
    return (0, r.jsx)('div', { className: (0, s.A)(i, 'thin-scrollbar', e), children: (0, r.jsx)(a.A, { ...t, linkClassName: 'table-of-contents__link toc-highlight', linkActiveClassName: 'table-of-contents__link--active' }) });
   }
  },
  79540(e, t, n) {
   n.d(t, { AE: () => o, Rc: () => r, TT: () => d, Uh: () => l, Yh: () => c });
   n(30758);
   var s = n(18236),
    a = n(70241),
    i = n(86070);
   function r() {
    return (0, i.jsx)(s.A, { id: 'theme.contentVisibility.unlistedBanner.title', description: 'The unlisted content banner title', children: 'Unlisted page' });
   }
   function l() {
    return (0, i.jsx)(s.A, { id: 'theme.contentVisibility.unlistedBanner.message', description: 'The unlisted content banner message', children: 'This page is unlisted. Search engines will not index it, and only users having a direct link can access it.' });
   }
   function o() {
    return (0, i.jsx)(a.A, { children: (0, i.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function c() {
    return (0, i.jsx)(s.A, { id: 'theme.contentVisibility.draftBanner.title', description: 'The draft content banner title', children: 'Draft page' });
   }
   function d() {
    return (0, i.jsx)(s.A, { id: 'theme.contentVisibility.draftBanner.message', description: 'The draft content banner message', children: 'This page is a draft. It will only be visible in dev and be excluded from the production build.' });
   }
  },
  82826(e, t, n) {
   n.d(t, { A: () => d });
   n(30758);
   var s = n(13526),
    a = n(79540),
    i = n(71639),
    r = n(76713),
    l = n(86070);
   function o({ className: e }) {
    return (0, l.jsx)(r.A, { type: 'caution', title: (0, l.jsx)(a.Yh, {}), className: (0, s.A)(e, i.G.common.draftBanner), children: (0, l.jsx)(a.TT, {}) });
   }
   var c = n(76310);
   function d({ metadata: e }) {
    const { unlisted: t, frontMatter: n } = e;
    return (0, l.jsxs)(l.Fragment, { children: [(t || n.unlisted) && (0, l.jsx)(c.A, {}), n.draft && (0, l.jsx)(o, {})] });
   }
  },
  85412(e, t, n) {
   n.d(t, { A: () => x });
   var s = n(30758),
    a = n(87014);
   function i(e) {
    const t = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     n = Array(7).fill(-1);
    t.forEach((e, t) => {
     const s = n.slice(2, e.level);
     ((e.parentIndex = Math.max(...s)), (n[e.level] = t));
    });
    const s = [];
    return (
     t.forEach((e) => {
      const { parentIndex: n, ...a } = e;
      n >= 0 ? t[n].children.push(a) : s.push(a);
     }),
     s
    );
   }
   function r({ toc: e, minHeadingLevel: t, maxHeadingLevel: n }) {
    return e.flatMap((e) => {
     const s = r({ toc: e.children, minHeadingLevel: t, maxHeadingLevel: n });
     return (function (e) {
      return e.level >= t && e.level <= n;
     })(e)
      ? [{ ...e, children: s }]
      : s;
    });
   }
   function l(e) {
    const t = e.getBoundingClientRect();
    return t.top === t.bottom ? l(e.parentNode) : t;
   }
   function o(e, { anchorTopOffset: t }) {
    const n = e.find((e) => l(e).top >= t);
    if (n) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(l(n))
      ? n
      : (e[e.indexOf(n) - 1] ?? null);
    }
    return e[e.length - 1] ?? null;
   }
   function c() {
    const e = (0, s.useRef)(0),
     {
      navbar: { hideOnScroll: t },
     } = (0, a.p)();
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
     const { linkClassName: s, linkActiveClassName: a, minHeadingLevel: i, maxHeadingLevel: r } = e;
     function l() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(s),
       l = (function ({ minHeadingLevel: e, maxHeadingLevel: t }) {
        const n = [];
        for (let s = e; s <= t; s += 1) n.push(`h${s}.anchor`);
        return Array.from(document.querySelectorAll(n.join()));
       })({ minHeadingLevel: i, maxHeadingLevel: r }),
       c = o(l, { anchorTopOffset: n.current }),
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
        n ? (t.current && t.current !== e && t.current.classList.remove(a), e.classList.add(a), (t.current = e)) : e.classList.remove(a);
       })(e, e === d);
      });
     }
     return (
      document.addEventListener('scroll', l),
      document.addEventListener('resize', l),
      l(),
      () => {
       (document.removeEventListener('scroll', l), document.removeEventListener('resize', l));
      }
     );
    }, [e, n]);
   }
   var m = n(63195),
    u = n(86070);
   function h({ toc: e, className: t, linkClassName: n, isChild: s }) {
    return e.length ? (0, u.jsx)('ul', { className: s ? void 0 : t, children: e.map((e) => (0, u.jsxs)('li', { children: [(0, u.jsx)(m.A, { to: `#${e.id}`, className: n ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, u.jsx)(h, { isChild: !0, toc: e.children, className: t, linkClassName: n })] }, e.id)) }) : null;
   }
   const g = s.memo(h);
   function x({ toc: e, className: t = 'table-of-contents table-of-contents__left-border', linkClassName: n = 'table-of-contents__link', linkActiveClassName: l, minHeadingLevel: o, maxHeadingLevel: c, ...m }) {
    const h = (0, a.p)(),
     x = o ?? h.tableOfContents.minHeadingLevel,
     f = c ?? h.tableOfContents.maxHeadingLevel,
     p = (function ({ toc: e, minHeadingLevel: t, maxHeadingLevel: n }) {
      return (0, s.useMemo)(() => r({ toc: i(e), minHeadingLevel: t, maxHeadingLevel: n }), [e, t, n]);
     })({ toc: e, minHeadingLevel: x, maxHeadingLevel: f });
    return (
     d(
      (0, s.useMemo)(() => {
       if (n && l) return { linkClassName: n, linkActiveClassName: l, minHeadingLevel: x, maxHeadingLevel: f };
      }, [n, l, x, f]),
     ),
     (0, u.jsx)(g, { toc: p, className: t, linkClassName: n, ...m })
    );
   }
  },
 },
]);
