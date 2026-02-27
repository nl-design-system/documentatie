'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [78361],
 {
  7619(e, n, t) {
   t.d(n, { A: () => l });
   t(30758);
   var s = t(13526),
    i = t(18236),
    a = t(52266),
    r = t(86070);
   function l(e) {
    const { className: n, previous: t, next: l } = e;
    return (0, r.jsxs)('nav', { className: (0, s.A)(n, 'pagination-nav'), 'aria-label': (0, i.T)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [t && (0, r.jsx)(a.A, { ...t, subLabel: (0, r.jsx)(i.A, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), l && (0, r.jsx)(a.A, { ...l, subLabel: (0, r.jsx)(i.A, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  76310(e, n, t) {
   t.d(n, { A: () => c });
   t(30758);
   var s = t(13526),
    i = t(71639),
    a = t(79540),
    r = t(76713),
    l = t(86070);
   function o({ className: e }) {
    return (0, l.jsx)(r.A, { type: 'caution', title: (0, l.jsx)(a.Rc, {}), className: (0, s.A)(e, i.G.common.unlistedBanner), children: (0, l.jsx)(a.Uh, {}) });
   }
   function c(e) {
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(a.AE, {}), (0, l.jsx)(o, { ...e })] });
   }
  },
  78361(e, n, t) {
   (t.r(n), t.d(n, { default: () => z }));
   var s = t(30758),
    i = t(86332),
    a = t(90076),
    r = t(86070);
   const l = s.createContext(null);
   function o({ children: e, content: n }) {
    const t = (function (e) {
     return (0, s.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(n);
    return (0, r.jsx)(l.Provider, { value: t, children: e });
   }
   function c() {
    const e = (0, s.useContext)(l);
    if (null === e) throw new a.dV('DocProvider');
    return e;
   }
   function d() {
    const { metadata: e, frontMatter: n, assets: t } = c();
    return (0, r.jsx)(i.be, { title: e.title, description: e.description, keywords: n.keywords, image: t.image ?? n.image });
   }
   var u = t(13526),
    m = t(14149),
    h = t(7619);
   function v() {
    const { metadata: e } = c();
    return (0, r.jsx)(h.A, { className: 'docusaurus-mt-lg', previous: e.previous, next: e.next });
   }
   var x = t(92410),
    b = t(88519),
    f = t(71639),
    g = t(97068),
    j = t(29307);
   function p() {
    const { metadata: e } = c(),
     { editUrl: n, lastUpdatedAt: t, lastUpdatedBy: s, tags: i } = e,
     a = i.length > 0,
     l = !!(n || t || s);
    return a || l ? (0, r.jsxs)('footer', { className: (0, u.A)(f.G.docs.docFooter, 'docusaurus-mt-lg'), children: [a && (0, r.jsx)('div', { className: (0, u.A)('row margin-top--sm', f.G.docs.docFooterTagsRow), children: (0, r.jsx)('div', { className: 'col', children: (0, r.jsx)(g.A, { tags: i }) }) }), l && (0, r.jsx)(j.A, { className: (0, u.A)('margin-top--sm', f.G.docs.docFooterEditMetaRow), editUrl: n, lastUpdatedAt: t, lastUpdatedBy: s })] }) : null;
   }
   var A = t(88014),
    N = t(85412),
    L = t(18236);
   const _ = 'tocCollapsibleButton_XjgU',
    T = 'tocCollapsibleButtonExpanded_Glk4';
   function C({ collapsed: e, ...n }) {
    return (0, r.jsx)('button', { type: 'button', ...n, className: (0, u.A)('clean-btn', _, !e && T, n.className), children: (0, r.jsx)(L.A, { id: 'theme.TOCCollapsible.toggleButtonLabel', description: 'The label used by the button on the collapsible TOC component', children: 'On this page' }) });
   }
   const k = 'tocCollapsible_RuM8',
    H = 'tocCollapsibleContent_DMSN',
    y = 'tocCollapsibleExpanded_w112';
   function M({ toc: e, className: n, minHeadingLevel: t, maxHeadingLevel: s }) {
    const { collapsed: i, toggleCollapsed: a } = (0, A.u)({ initialState: !0 });
    return (0, r.jsxs)('div', { className: (0, u.A)(k, !i && y, n), children: [(0, r.jsx)(C, { collapsed: i, onClick: a }), (0, r.jsx)(A.N, { lazy: !0, className: H, collapsed: i, children: (0, r.jsx)(N.A, { toc: e, minHeadingLevel: t, maxHeadingLevel: s }) })] });
   }
   const w = 'tocMobile_zSi9';
   function B() {
    const { toc: e, frontMatter: n } = c();
    return (0, r.jsx)(M, { toc: e, minHeadingLevel: n.toc_min_heading_level, maxHeadingLevel: n.toc_max_heading_level, className: (0, u.A)(f.G.docs.docTocMobile, w) });
   }
   var E = t(78690);
   function V() {
    const { toc: e, frontMatter: n } = c();
    return (0, r.jsx)(E.A, { toc: e, minHeadingLevel: n.toc_min_heading_level, maxHeadingLevel: n.toc_max_heading_level, className: f.G.docs.docTocDesktop });
   }
   var I = t(39470),
    O = t(10768);
   function S({ children: e }) {
    const n = (function () {
     const { metadata: e, frontMatter: n, contentTitle: t } = c();
     return n.hide_title || void 0 !== t ? null : e.title;
    })();
    return (0, r.jsxs)('div', { className: (0, u.A)(f.G.docs.docMarkdown, 'markdown'), children: [n && (0, r.jsx)('header', { children: (0, r.jsx)(I.A, { as: 'h1', children: n }) }), (0, r.jsx)(O.A, { children: e })] });
   }
   var U = t(87836),
    G = t(82826);
   const R = 'docItemContainer_aQSU',
    D = 'docItemCol_pMYj';
   function F({ children: e }) {
    const n = (function () {
      const { frontMatter: e, toc: n } = c(),
       t = (0, m.l)(),
       s = e.hide_table_of_contents,
       i = !s && n.length > 0;
      return { hidden: s, mobile: i ? (0, r.jsx)(B, {}) : void 0, desktop: !i || ('desktop' !== t && 'ssr' !== t) ? void 0 : (0, r.jsx)(V, {}) };
     })(),
     { metadata: t } = c();
    return (0, r.jsxs)('div', { className: 'row', children: [(0, r.jsxs)('div', { className: (0, u.A)('col', !n.hidden && D), children: [(0, r.jsx)(G.A, { metadata: t }), (0, r.jsx)(x.A, {}), (0, r.jsxs)('div', { className: R, children: [(0, r.jsxs)('article', { children: [(0, r.jsx)(U.A, {}), (0, r.jsx)(b.A, {}), n.mobile, (0, r.jsx)(S, { children: e }), (0, r.jsx)(p, {})] }), (0, r.jsx)(v, {})] })] }), n.desktop && (0, r.jsx)('div', { className: 'col col--3', children: n.desktop })] });
   }
   function z(e) {
    const n = `docs-doc-id-${e.content.metadata.id}`,
     t = e.content;
    return (0, r.jsx)(o, { content: e.content, children: (0, r.jsxs)(i.e3, { className: n, children: [(0, r.jsx)(d, {}), (0, r.jsx)(F, { children: (0, r.jsx)(t, {}) })] }) });
   }
  },
  78690(e, n, t) {
   t.d(n, { A: () => l });
   t(30758);
   var s = t(13526),
    i = t(85412);
   const a = 'tableOfContents_yXC1';
   var r = t(86070);
   function l({ className: e, ...n }) {
    return (0, r.jsx)('div', { className: (0, s.A)(a, 'thin-scrollbar', e), children: (0, r.jsx)(i.A, { ...n, linkClassName: 'table-of-contents__link toc-highlight', linkActiveClassName: 'table-of-contents__link--active' }) });
   }
  },
  79540(e, n, t) {
   t.d(n, { AE: () => o, Rc: () => r, TT: () => d, Uh: () => l, Yh: () => c });
   t(30758);
   var s = t(18236),
    i = t(70241),
    a = t(86070);
   function r() {
    return (0, a.jsx)(s.A, { id: 'theme.contentVisibility.unlistedBanner.title', description: 'The unlisted content banner title', children: 'Unlisted page' });
   }
   function l() {
    return (0, a.jsx)(s.A, { id: 'theme.contentVisibility.unlistedBanner.message', description: 'The unlisted content banner message', children: 'This page is unlisted. Search engines will not index it, and only users having a direct link can access it.' });
   }
   function o() {
    return (0, a.jsx)(i.A, { children: (0, a.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function c() {
    return (0, a.jsx)(s.A, { id: 'theme.contentVisibility.draftBanner.title', description: 'The draft content banner title', children: 'Draft page' });
   }
   function d() {
    return (0, a.jsx)(s.A, { id: 'theme.contentVisibility.draftBanner.message', description: 'The draft content banner message', children: 'This page is a draft. It will only be visible in dev and be excluded from the production build.' });
   }
  },
  82826(e, n, t) {
   t.d(n, { A: () => d });
   t(30758);
   var s = t(13526),
    i = t(79540),
    a = t(71639),
    r = t(76713),
    l = t(86070);
   function o({ className: e }) {
    return (0, l.jsx)(r.A, { type: 'caution', title: (0, l.jsx)(i.Yh, {}), className: (0, s.A)(e, a.G.common.draftBanner), children: (0, l.jsx)(i.TT, {}) });
   }
   var c = t(76310);
   function d({ metadata: e }) {
    const { unlisted: n, frontMatter: t } = e;
    return (0, l.jsxs)(l.Fragment, { children: [(n || t.unlisted) && (0, l.jsx)(c.A, {}), t.draft && (0, l.jsx)(o, {})] });
   }
  },
  85412(e, n, t) {
   t.d(n, { A: () => x });
   var s = t(30758),
    i = t(87014);
   function a(e) {
    const n = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     t = Array(7).fill(-1);
    n.forEach((e, n) => {
     const s = t.slice(2, e.level);
     ((e.parentIndex = Math.max(...s)), (t[e.level] = n));
    });
    const s = [];
    return (
     n.forEach((e) => {
      const { parentIndex: t, ...i } = e;
      t >= 0 ? n[t].children.push(i) : s.push(i);
     }),
     s
    );
   }
   function r({ toc: e, minHeadingLevel: n, maxHeadingLevel: t }) {
    return e.flatMap((e) => {
     const s = r({ toc: e.children, minHeadingLevel: n, maxHeadingLevel: t });
     return (function (e) {
      return e.level >= n && e.level <= t;
     })(e)
      ? [{ ...e, children: s }]
      : s;
    });
   }
   function l(e) {
    const n = e.getBoundingClientRect();
    return n.top === n.bottom ? l(e.parentNode) : n;
   }
   function o(e, { anchorTopOffset: n }) {
    const t = e.find((e) => l(e).top >= n);
    if (t) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(l(t))
      ? t
      : (e[e.indexOf(t) - 1] ?? null);
    }
    return e[e.length - 1] ?? null;
   }
   function c() {
    const e = (0, s.useRef)(0),
     {
      navbar: { hideOnScroll: n },
     } = (0, i.p)();
    return (
     (0, s.useEffect)(() => {
      e.current = n ? 0 : document.querySelector('.navbar').clientHeight;
     }, [n]),
     e
    );
   }
   function d(e) {
    const n = (0, s.useRef)(void 0),
     t = c();
    (0, s.useEffect)(() => {
     if (!e) return () => {};
     const { linkClassName: s, linkActiveClassName: i, minHeadingLevel: a, maxHeadingLevel: r } = e;
     function l() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(s),
       l = (function ({ minHeadingLevel: e, maxHeadingLevel: n }) {
        const t = [];
        for (let s = e; s <= n; s += 1) t.push(`h${s}.anchor`);
        return Array.from(document.querySelectorAll(t.join()));
       })({ minHeadingLevel: a, maxHeadingLevel: r }),
       c = o(l, { anchorTopOffset: t.current }),
       d = e.find(
        (e) =>
         c &&
         c.id ===
          (function (e) {
           return decodeURIComponent(e.href.substring(e.href.indexOf('#') + 1));
          })(e),
       );
      e.forEach((e) => {
       !(function (e, t) {
        t ? (n.current && n.current !== e && n.current.classList.remove(i), e.classList.add(i), (n.current = e)) : e.classList.remove(i);
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
    }, [e, t]);
   }
   var u = t(63195),
    m = t(86070);
   function h({ toc: e, className: n, linkClassName: t, isChild: s }) {
    return e.length ? (0, m.jsx)('ul', { className: s ? void 0 : n, children: e.map((e) => (0, m.jsxs)('li', { children: [(0, m.jsx)(u.A, { to: `#${e.id}`, className: t ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, m.jsx)(h, { isChild: !0, toc: e.children, className: n, linkClassName: t })] }, e.id)) }) : null;
   }
   const v = s.memo(h);
   function x({ toc: e, className: n = 'table-of-contents table-of-contents__left-border', linkClassName: t = 'table-of-contents__link', linkActiveClassName: l, minHeadingLevel: o, maxHeadingLevel: c, ...u }) {
    const h = (0, i.p)(),
     x = o ?? h.tableOfContents.minHeadingLevel,
     b = c ?? h.tableOfContents.maxHeadingLevel,
     f = (function ({ toc: e, minHeadingLevel: n, maxHeadingLevel: t }) {
      return (0, s.useMemo)(() => r({ toc: a(e), minHeadingLevel: n, maxHeadingLevel: t }), [e, n, t]);
     })({ toc: e, minHeadingLevel: x, maxHeadingLevel: b });
    return (
     d(
      (0, s.useMemo)(() => {
       if (t && l) return { linkClassName: t, linkActiveClassName: l, minHeadingLevel: x, maxHeadingLevel: b };
      }, [t, l, x, b]),
     ),
     (0, m.jsx)(v, { toc: f, className: n, linkClassName: t, ...u })
    );
   }
  },
  87836(e, n, t) {
   t.d(n, { A: () => p });
   t(30758);
   var s = t(13526),
    i = t(71639),
    a = t(2264),
    r = t(29281),
    l = t(63195),
    o = t(18236),
    c = t(63320),
    d = t(86070);
   function u(e) {
    return (0, d.jsx)('svg', { viewBox: '0 0 24 24', ...e, children: (0, d.jsx)('path', { d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z', fill: 'currentColor' }) });
   }
   const m = 'breadcrumbHomeIcon_nXN1';
   function h() {
    const e = (0, c.Ay)('/');
    return (0, d.jsx)('li', { className: 'breadcrumbs__item', children: (0, d.jsx)(l.A, { 'aria-label': (0, o.T)({ id: 'theme.docs.breadcrumbs.home', message: 'Home page', description: 'The ARIA label for the home page in the breadcrumbs' }), className: 'breadcrumbs__link', href: e, children: (0, d.jsx)(u, { className: m }) }) });
   }
   var v = t(70241),
    x = t(74147);
   function b(e) {
    const n = (function ({ breadcrumbs: e }) {
     const { siteConfig: n } = (0, x.A)();
     return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: e.filter((e) => e.href).map((e, t) => ({ '@type': 'ListItem', position: t + 1, name: e.label, item: `${n.url}${e.href}` })) };
    })({ breadcrumbs: e.breadcrumbs });
    return (0, d.jsx)(v.A, { children: (0, d.jsx)('script', { type: 'application/ld+json', children: JSON.stringify(n) }) });
   }
   const f = 'breadcrumbsContainer_Bqeg';
   function g({ children: e, href: n, isLast: t }) {
    const s = 'breadcrumbs__link';
    return t ? (0, d.jsx)('span', { className: s, children: e }) : n ? (0, d.jsx)(l.A, { className: s, href: n, children: (0, d.jsx)('span', { children: e }) }) : (0, d.jsx)('span', { className: s, children: e });
   }
   function j({ children: e, active: n }) {
    return (0, d.jsx)('li', { className: (0, s.A)('breadcrumbs__item', { 'breadcrumbs__item--active': n }), children: e });
   }
   function p() {
    const e = (0, a.OF)(),
     n = (0, r.Dt)();
    return e
     ? (0, d.jsxs)(d.Fragment, {
        children: [
         (0, d.jsx)(b, { breadcrumbs: e }),
         (0, d.jsx)('nav', {
          className: (0, s.A)(i.G.docs.docBreadcrumbs, f),
          'aria-label': (0, o.T)({ id: 'theme.docs.breadcrumbs.navAriaLabel', message: 'Breadcrumbs', description: 'The ARIA label for the breadcrumbs' }),
          children: (0, d.jsxs)('ul', {
           className: 'breadcrumbs',
           children: [
            n && (0, d.jsx)(h, {}),
            e.map((n, t) => {
             const s = t === e.length - 1,
              i = 'category' === n.type && n.linkUnlisted ? void 0 : n.href;
             return (0, d.jsx)(j, { active: s, children: (0, d.jsx)(g, { href: i, isLast: s, children: n.label }) }, t);
            }),
           ],
          }),
         }),
        ],
       })
     : null;
   }
  },
  88519(e, n, t) {
   t.d(n, { A: () => o });
   t(30758);
   var s = t(13526),
    i = t(18236),
    a = t(71639),
    r = t(21093),
    l = t(86070);
   function o({ className: e }) {
    const n = (0, r.r)();
    return n.badge ? (0, l.jsx)('span', { className: (0, s.A)(e, a.G.docs.docVersionBadge, 'badge badge--secondary'), children: (0, l.jsx)(i.A, { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  92410(e, n, t) {
   t.d(n, { A: () => b });
   t(30758);
   var s = t(13526),
    i = t(74147),
    a = t(63195),
    r = t(18236),
    l = t(97819),
    o = t(71639),
    c = t(13714),
    d = t(21093),
    u = t(86070);
   const m = {
    unreleased: function ({ siteTitle: e, versionMetadata: n }) {
     return (0, u.jsx)(r.A, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: e, versionLabel: (0, u.jsx)('b', { children: n.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function ({ siteTitle: e, versionMetadata: n }) {
     return (0, u.jsx)(r.A, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: e, versionLabel: (0, u.jsx)('b', { children: n.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function h(e) {
    const n = m[e.versionMetadata.banner];
    return (0, u.jsx)(n, { ...e });
   }
   function v({ versionLabel: e, to: n, onClick: t }) {
    return (0, u.jsx)(r.A, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: e, latestVersionLink: (0, u.jsx)('b', { children: (0, u.jsx)(a.A, { to: n, onClick: t, children: (0, u.jsx)(r.A, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function x({ className: e, versionMetadata: n }) {
    const {
      siteConfig: { title: t },
     } = (0, i.A)(),
     { pluginId: a } = (0, l.vT)({ failfast: !0 }),
     { savePreferredVersionName: r } = (0, c.g1)(a),
     { latestDocSuggestion: d, latestVersionSuggestion: m } = (0, l.HW)(a),
     x = d ?? (b = m).docs.find((e) => e.id === b.mainDocId);
    var b;
    return (0, u.jsxs)('div', { className: (0, s.A)(e, o.G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, u.jsx)('div', { children: (0, u.jsx)(h, { siteTitle: t, versionMetadata: n }) }), (0, u.jsx)('div', { className: 'margin-top--md', children: (0, u.jsx)(v, { versionLabel: m.label, to: x.path, onClick: () => r(m.name) }) })] });
   }
   function b({ className: e }) {
    const n = (0, d.r)();
    return n.banner ? (0, u.jsx)(x, { className: e, versionMetadata: n }) : null;
   }
  },
 },
]);
