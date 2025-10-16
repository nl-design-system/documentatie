'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [27918],
 {
  79924: (e, t, n) => {
   n.d(t, { Z: () => x });
   n(75271);
   var s = n(4814),
    l = n(52035),
    a = n(17542),
    o = n(46725),
    r = n(44679),
    i = n(42800),
    c = n(95765),
    d = n(52676);
   function u(e) {
    return (0, d.jsx)('svg', { viewBox: '0 0 24 24', ...e, children: (0, d.jsx)('path', { d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z', fill: 'currentColor' }) });
   }
   const m = { breadcrumbHomeIcon: 'breadcrumbHomeIcon_FTKm' };
   function h() {
    const e = (0, c.Z)('/');
    return (0, d.jsx)('li', { className: 'breadcrumbs__item', children: (0, d.jsx)(r.Z, { 'aria-label': (0, i.I)({ id: 'theme.docs.breadcrumbs.home', message: 'Home page', description: 'The ARIA label for the home page in the breadcrumbs' }), className: 'breadcrumbs__link', href: e, children: (0, d.jsx)(u, { className: m.breadcrumbHomeIcon }) }) });
   }
   const p = { breadcrumbsContainer: 'breadcrumbsContainer_QqW2' };
   function v(e) {
    let { children: t, href: n, isLast: s } = e;
    const l = 'breadcrumbs__link';
    return s ? (0, d.jsx)('span', { className: l, itemProp: 'name', children: t }) : n ? (0, d.jsx)(r.Z, { className: l, href: n, itemProp: 'item', children: (0, d.jsx)('span', { itemProp: 'name', children: t }) }) : (0, d.jsx)('span', { className: l, children: t });
   }
   function b(e) {
    let { children: t, active: n, index: l, addMicrodata: a } = e;
    return (0, d.jsxs)('li', { ...(a && { itemScope: !0, itemProp: 'itemListElement', itemType: 'https://schema.org/ListItem' }), className: (0, s.Z)('breadcrumbs__item', { 'breadcrumbs__item--active': n }), children: [t, (0, d.jsx)('meta', { itemProp: 'position', content: String(l + 1) })] });
   }
   function x() {
    const e = (0, a.s1)(),
     t = (0, o.Ns)();
    return e
     ? (0, d.jsx)('nav', {
        className: (0, s.Z)(l.k.docs.docBreadcrumbs, p.breadcrumbsContainer),
        'aria-label': (0, i.I)({ id: 'theme.docs.breadcrumbs.navAriaLabel', message: 'Breadcrumbs', description: 'The ARIA label for the breadcrumbs' }),
        children: (0, d.jsxs)('ul', {
         className: 'breadcrumbs',
         itemScope: !0,
         itemType: 'https://schema.org/BreadcrumbList',
         children: [
          t && (0, d.jsx)(h, {}),
          e.map((t, n) => {
           const s = n === e.length - 1,
            l = 'category' === t.type && t.linkUnlisted ? void 0 : t.href;
           return (0, d.jsx)(b, { active: s, index: n, addMicrodata: !!l, children: (0, d.jsx)(v, { href: l, isLast: s, children: t.label }) }, n);
          }),
         ],
        }),
       })
     : null;
   }
  },
  68063: (e, t, n) => {
   n.r(t), n.d(t, { default: () => z });
   var s = n(75271),
    l = n(69378),
    a = n(49052),
    o = n(52676);
   const r = s.createContext(null);
   function i(e) {
    let { children: t, content: n } = e;
    const l = (function (e) {
     return (0, s.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(n);
    return (0, o.jsx)(r.Provider, { value: l, children: t });
   }
   function c() {
    const e = (0, s.useContext)(r);
    if (null === e) throw new a.i6('DocProvider');
    return e;
   }
   function d() {
    const { metadata: e, frontMatter: t, assets: n } = c();
    return (0, o.jsx)(l.d, { title: e.title, description: e.description, keywords: t.keywords, image: n.image ?? t.image });
   }
   var u = n(4814),
    m = n(68204),
    h = n(69051);
   function p() {
    const { metadata: e } = c();
    return (0, o.jsx)(h.Z, { previous: e.previous, next: e.next });
   }
   var v = n(96097),
    b = n(99312),
    x = n(52035),
    g = n(42800);
   function f(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: n } = e;
    return (0, o.jsx)(g.Z, { id: 'theme.lastUpdated.atDate', description: 'The words used to describe on which date a page has been last updated', values: { date: (0, o.jsx)('b', { children: (0, o.jsx)('time', { dateTime: new Date(1e3 * t).toISOString(), children: n }) }) }, children: ' on {date}' });
   }
   function j(e) {
    let { lastUpdatedBy: t } = e;
    return (0, o.jsx)(g.Z, { id: 'theme.lastUpdated.byUser', description: 'The words used to describe by who the page has been last updated', values: { user: (0, o.jsx)('b', { children: t }) }, children: ' by {user}' });
   }
   function y(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: n, lastUpdatedBy: s } = e;
    return (0, o.jsxs)('span', { className: x.k.common.lastUpdated, children: [(0, o.jsx)(g.Z, { id: 'theme.lastUpdated.lastUpdatedAtBy', description: 'The sentence used to display when a page has been last updated, and by who', values: { atDate: t && n ? (0, o.jsx)(f, { lastUpdatedAt: t, formattedLastUpdatedAt: n }) : '', byUser: s ? (0, o.jsx)(j, { lastUpdatedBy: s }) : '' }, children: 'Last updated{atDate}{byUser}' }), !1] });
   }
   var k = n(6675),
    _ = n(25633);
   const N = { lastUpdated: 'lastUpdated_b5WM' };
   function L(e) {
    return (0, o.jsx)('div', { className: (0, u.Z)(x.k.docs.docFooterTagsRow, 'row margin-bottom--sm'), children: (0, o.jsx)('div', { className: 'col', children: (0, o.jsx)(_.Z, { ...e }) }) });
   }
   function Z(e) {
    let { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: s, formattedLastUpdatedAt: l } = e;
    return (0, o.jsxs)('div', { className: (0, u.Z)(x.k.docs.docFooterEditMetaRow, 'row'), children: [(0, o.jsx)('div', { className: 'col', children: t && (0, o.jsx)(k.Z, { editUrl: t }) }), (0, o.jsx)('div', { className: (0, u.Z)('col', N.lastUpdated), children: (n || s) && (0, o.jsx)(y, { lastUpdatedAt: n, formattedLastUpdatedAt: l, lastUpdatedBy: s }) })] });
   }
   function C() {
    const { metadata: e } = c(),
     { editUrl: t, lastUpdatedAt: n, formattedLastUpdatedAt: s, lastUpdatedBy: l, tags: a } = e,
     r = a.length > 0,
     i = !!(t || n || l);
    return r || i ? (0, o.jsxs)('footer', { className: (0, u.Z)(x.k.docs.docFooter, 'docusaurus-mt-lg'), children: [r && (0, o.jsx)(L, { tags: a }), i && (0, o.jsx)(Z, { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: l, formattedLastUpdatedAt: s })] }) : null;
   }
   var T = n(64124),
    U = n(96254);
   const H = { tocCollapsibleButton: 'tocCollapsibleButton_NsQI', tocCollapsibleButtonExpanded: 'tocCollapsibleButtonExpanded_qaNQ' };
   function w(e) {
    let { collapsed: t, ...n } = e;
    return (0, o.jsx)('button', { type: 'button', ...n, className: (0, u.Z)('clean-btn', H.tocCollapsibleButton, !t && H.tocCollapsibleButtonExpanded, n.className), children: (0, o.jsx)(g.Z, { id: 'theme.TOCCollapsible.toggleButtonLabel', description: 'The label used by the button on the collapsible TOC component', children: 'On this page' }) });
   }
   const A = { tocCollapsible: 'tocCollapsible_B7BO', tocCollapsibleContent: 'tocCollapsibleContent_A7xy', tocCollapsibleExpanded: 'tocCollapsibleExpanded_I2jd' };
   function I(e) {
    let { toc: t, className: n, minHeadingLevel: s, maxHeadingLevel: l } = e;
    const { collapsed: a, toggleCollapsed: r } = (0, T.u)({ initialState: !0 });
    return (0, o.jsxs)('div', { className: (0, u.Z)(A.tocCollapsible, !a && A.tocCollapsibleExpanded, n), children: [(0, o.jsx)(w, { collapsed: a, onClick: r }), (0, o.jsx)(T.z, { lazy: !0, className: A.tocCollapsibleContent, collapsed: a, children: (0, o.jsx)(U.Z, { toc: t, minHeadingLevel: s, maxHeadingLevel: l }) })] });
   }
   const M = { tocMobile: 'tocMobile_Ig5P' };
   function B() {
    const { toc: e, frontMatter: t } = c();
    return (0, o.jsx)(I, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, u.Z)(x.k.docs.docTocMobile, M.tocMobile) });
   }
   var E = n(6815);
   function S() {
    const { toc: e, frontMatter: t } = c();
    return (0, o.jsx)(E.Z, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: x.k.docs.docTocDesktop });
   }
   var O = n(34893),
    P = n(39731);
   function R(e) {
    let { children: t } = e;
    const n = (function () {
     const { metadata: e, frontMatter: t, contentTitle: n } = c();
     return t.hide_title || void 0 !== n ? null : e.title;
    })();
    return (0, o.jsxs)('div', { className: (0, u.Z)(x.k.docs.docMarkdown, 'markdown'), children: [n && (0, o.jsx)('header', { children: (0, o.jsx)(O.Z, { as: 'h1', children: n }) }), (0, o.jsx)(P.Z, { children: t })] });
   }
   var V = n(79924),
    F = n(94250);
   const D = { docItemContainer: 'docItemContainer_lZ1k', docItemCol: 'docItemCol_A55D' };
   function $(e) {
    let { children: t } = e;
    const n = (function () {
      const { frontMatter: e, toc: t } = c(),
       n = (0, m.i)(),
       s = e.hide_table_of_contents,
       l = !s && t.length > 0;
      return { hidden: s, mobile: l ? (0, o.jsx)(B, {}) : void 0, desktop: !l || ('desktop' !== n && 'ssr' !== n) ? void 0 : (0, o.jsx)(S, {}) };
     })(),
     {
      metadata: { unlisted: s },
     } = c();
    return (0, o.jsxs)('div', { className: 'row', children: [(0, o.jsxs)('div', { className: (0, u.Z)('col', !n.hidden && D.docItemCol), children: [s && (0, o.jsx)(F.Z, {}), (0, o.jsx)(v.Z, {}), (0, o.jsxs)('div', { className: D.docItemContainer, children: [(0, o.jsxs)('article', { children: [(0, o.jsx)(V.Z, {}), (0, o.jsx)(b.Z, {}), n.mobile, (0, o.jsx)(R, { children: t }), (0, o.jsx)(C, {})] }), (0, o.jsx)(p, {})] })] }), n.desktop && (0, o.jsx)('div', { className: 'col col--3', children: n.desktop })] });
   }
   function z(e) {
    const t = `docs-doc-id-${e.content.metadata.id}`,
     n = e.content;
    return (0, o.jsx)(i, { content: e.content, children: (0, o.jsxs)(l.FG, { className: t, children: [(0, o.jsx)(d, {}), (0, o.jsx)($, { children: (0, o.jsx)(n, {}) })] }) });
   }
  },
  69051: (e, t, n) => {
   n.d(t, { Z: () => o });
   n(75271);
   var s = n(42800),
    l = n(75545),
    a = n(52676);
   function o(e) {
    const { previous: t, next: n } = e;
    return (0, a.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, s.I)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [t && (0, a.jsx)(l.Z, { ...t, subLabel: (0, a.jsx)(s.Z, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), n && (0, a.jsx)(l.Z, { ...n, subLabel: (0, a.jsx)(s.Z, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  99312: (e, t, n) => {
   n.d(t, { Z: () => i });
   n(75271);
   var s = n(4814),
    l = n(42800),
    a = n(52035),
    o = n(65881),
    r = n(52676);
   function i(e) {
    let { className: t } = e;
    const n = (0, o.E)();
    return n.badge ? (0, r.jsx)('span', { className: (0, s.Z)(t, a.k.docs.docVersionBadge, 'badge badge--secondary'), children: (0, r.jsx)(l.Z, { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  96097: (e, t, n) => {
   n.d(t, { Z: () => b });
   n(75271);
   var s = n(4814),
    l = n(84084),
    a = n(44679),
    o = n(42800),
    r = n(92829),
    i = n(52035),
    c = n(67891),
    d = n(65881),
    u = n(52676);
   const m = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return (0, u.jsx)(o.Z, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)('b', { children: n.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return (0, u.jsx)(o.Z, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)('b', { children: n.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function h(e) {
    const t = m[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function p(e) {
    let { versionLabel: t, to: n, onClick: s } = e;
    return (0, u.jsx)(o.Z, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: t, latestVersionLink: (0, u.jsx)('b', { children: (0, u.jsx)(a.Z, { to: n, onClick: s, children: (0, u.jsx)(o.Z, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function v(e) {
    let { className: t, versionMetadata: n } = e;
    const {
      siteConfig: { title: a },
     } = (0, l.Z)(),
     { pluginId: o } = (0, r.gA)({ failfast: !0 }),
     { savePreferredVersionName: d } = (0, c.J)(o),
     { latestDocSuggestion: m, latestVersionSuggestion: v } = (0, r.Jo)(o),
     b = m ?? (x = v).docs.find((e) => e.id === x.mainDocId);
    var x;
    return (0, u.jsxs)('div', { className: (0, s.Z)(t, i.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, u.jsx)('div', { children: (0, u.jsx)(h, { siteTitle: a, versionMetadata: n }) }), (0, u.jsx)('div', { className: 'margin-top--md', children: (0, u.jsx)(p, { versionLabel: v.label, to: b.path, onClick: () => d(v.name) }) })] });
   }
   function b(e) {
    let { className: t } = e;
    const n = (0, d.E)();
    return n.banner ? (0, u.jsx)(v, { className: t, versionMetadata: n }) : null;
   }
  },
  6675: (e, t, n) => {
   n.d(t, { Z: () => d });
   n(75271);
   var s = n(42800),
    l = n(52035),
    a = n(44679),
    o = n(4814);
   const r = { iconEdit: 'iconEdit_vxtL' };
   var i = n(52676);
   function c(e) {
    let { className: t, ...n } = e;
    return (0, i.jsx)('svg', { fill: 'currentColor', height: '20', width: '20', viewBox: '0 0 40 40', className: (0, o.Z)(r.iconEdit, t), 'aria-hidden': 'true', ...n, children: (0, i.jsx)('g', { children: (0, i.jsx)('path', { d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z' }) }) });
   }
   function d(e) {
    let { editUrl: t } = e;
    return (0, i.jsxs)(a.Z, { to: t, className: l.k.common.editThisPage, children: [(0, i.jsx)(c, {}), (0, i.jsx)(s.Z, { id: 'theme.common.editThisPage', description: 'The link label to edit the current page', children: 'Edit this page' })] });
   }
  },
  75545: (e, t, n) => {
   n.d(t, { Z: () => o });
   n(75271);
   var s = n(4814),
    l = n(44679),
    a = n(52676);
   function o(e) {
    const { permalink: t, title: n, subLabel: o, isNext: r } = e;
    return (0, a.jsxs)(l.Z, { className: (0, s.Z)('pagination-nav__link', r ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: t, children: [o && (0, a.jsx)('div', { className: 'pagination-nav__sublabel', children: o }), (0, a.jsx)('div', { className: 'pagination-nav__label', children: n })] });
   }
  },
  6815: (e, t, n) => {
   n.d(t, { Z: () => c });
   n(75271);
   var s = n(4814),
    l = n(96254);
   const a = { tableOfContents: 'tableOfContents_B1zO', docItemContainer: 'docItemContainer_pj7X' };
   var o = n(52676);
   const r = 'table-of-contents__link toc-highlight',
    i = 'table-of-contents__link--active';
   function c(e) {
    let { className: t, ...n } = e;
    return (0, o.jsx)('div', { className: (0, s.Z)(a.tableOfContents, 'thin-scrollbar', t), children: (0, o.jsx)(l.Z, { ...n, linkClassName: r, linkActiveClassName: i }) });
   }
  },
  96254: (e, t, n) => {
   n.d(t, { Z: () => v });
   var s = n(75271),
    l = n(69687);
   function a(e) {
    const t = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     n = Array(7).fill(-1);
    t.forEach((e, t) => {
     const s = n.slice(2, e.level);
     (e.parentIndex = Math.max(...s)), (n[e.level] = t);
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
   function o(e) {
    let { toc: t, minHeadingLevel: n, maxHeadingLevel: s } = e;
    return t.flatMap((e) => {
     const t = o({ toc: e.children, minHeadingLevel: n, maxHeadingLevel: s });
     return (function (e) {
      return e.level >= n && e.level <= s;
     })(e)
      ? [{ ...e, children: t }]
      : t;
    });
   }
   function r(e) {
    const t = e.getBoundingClientRect();
    return t.top === t.bottom ? r(e.parentNode) : t;
   }
   function i(e, t) {
    let { anchorTopOffset: n } = t;
    const s = e.find((e) => r(e).top >= n);
    if (s) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(r(s))
      ? s
      : (e[e.indexOf(s) - 1] ?? null);
    }
    return e[e.length - 1] ?? null;
   }
   function c() {
    const e = (0, s.useRef)(0),
     {
      navbar: { hideOnScroll: t },
     } = (0, l.L)();
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
     const { linkClassName: s, linkActiveClassName: l, minHeadingLevel: a, maxHeadingLevel: o } = e;
     function r() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(s),
       r = (function (e) {
        let { minHeadingLevel: t, maxHeadingLevel: n } = e;
        const s = [];
        for (let l = t; l <= n; l += 1) s.push(`h${l}.anchor`);
        return Array.from(document.querySelectorAll(s.join()));
       })({ minHeadingLevel: a, maxHeadingLevel: o }),
       c = i(r, { anchorTopOffset: n.current }),
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
      document.addEventListener('scroll', r),
      document.addEventListener('resize', r),
      r(),
      () => {
       document.removeEventListener('scroll', r), document.removeEventListener('resize', r);
      }
     );
    }, [e, n]);
   }
   var u = n(44679),
    m = n(52676);
   function h(e) {
    let { toc: t, className: n, linkClassName: s, isChild: l } = e;
    return t.length ? (0, m.jsx)('ul', { className: l ? void 0 : n, children: t.map((e) => (0, m.jsxs)('li', { children: [(0, m.jsx)(u.Z, { to: `#${e.id}`, className: s ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, m.jsx)(h, { isChild: !0, toc: e.children, className: n, linkClassName: s })] }, e.id)) }) : null;
   }
   const p = s.memo(h);
   function v(e) {
    let { toc: t, className: n = 'table-of-contents table-of-contents__left-border', linkClassName: r = 'table-of-contents__link', linkActiveClassName: i, minHeadingLevel: c, maxHeadingLevel: u, ...h } = e;
    const v = (0, l.L)(),
     b = c ?? v.tableOfContents.minHeadingLevel,
     x = u ?? v.tableOfContents.maxHeadingLevel,
     g = (function (e) {
      let { toc: t, minHeadingLevel: n, maxHeadingLevel: l } = e;
      return (0, s.useMemo)(() => o({ toc: a(t), minHeadingLevel: n, maxHeadingLevel: l }), [t, n, l]);
     })({ toc: t, minHeadingLevel: b, maxHeadingLevel: x });
    return (
     d(
      (0, s.useMemo)(() => {
       if (r && i) return { linkClassName: r, linkActiveClassName: i, minHeadingLevel: b, maxHeadingLevel: x };
      }, [r, i, b, x]),
     ),
     (0, m.jsx)(p, { toc: g, className: n, linkClassName: r, ...h })
    );
   }
  },
  27123: (e, t, n) => {
   n.d(t, { Z: () => r });
   n(75271);
   var s = n(4814),
    l = n(44679);
   const a = { tag: 'tag_QMTp', tagRegular: 'tagRegular_BfdG', tagWithCount: 'tagWithCount_la3n' };
   var o = n(52676);
   function r(e) {
    let { permalink: t, label: n, count: r } = e;
    return (0, o.jsxs)(l.Z, { href: t, className: (0, s.Z)(a.tag, r ? a.tagWithCount : a.tagRegular), children: [n, r && (0, o.jsx)('span', { children: r })] });
   }
  },
  25633: (e, t, n) => {
   n.d(t, { Z: () => i });
   n(75271);
   var s = n(4814),
    l = n(42800),
    a = n(27123);
   const o = { tags: 'tags_cKSX', tag: 'tag_P9XR' };
   var r = n(52676);
   function i(e) {
    let { tags: t } = e;
    return (0, r.jsxs)(r.Fragment, {
     children: [
      (0, r.jsx)('b', { children: (0, r.jsx)(l.Z, { id: 'theme.tags.tagsListLabel', description: 'The label alongside a tag list', children: 'Tags:' }) }),
      (0, r.jsx)('ul', {
       className: (0, s.Z)(o.tags, 'padding--none', 'margin-left--sm'),
       children: t.map((e) => {
        let { label: t, permalink: n } = e;
        return (0, r.jsx)('li', { className: o.tag, children: (0, r.jsx)(a.Z, { label: t, permalink: n }) }, n);
       }),
      }),
     ],
    });
   }
  },
  41179: (e, t, n) => {
   n.d(t, { u: () => c });
   var s = n(37943),
    l = n(60648),
    a = n(75271),
    o = n(40761);
   const r = {
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
   var i = n(52676);
   function c(e) {
    let { lineNumber: t, syntax: n, textContent: c, trim: d } = e,
     u = c;
    const { title: m, type: h } = (0, a.useContext)(o.n),
     p = (0, a.useId)();
    return (
     d && (u = u.trim()),
     (0, i.jsx)(l.y$, {
      theme: r,
      code: u,
      language: n || '',
      children: (e) => {
       let { style: n, tokens: l, getLineProps: a, getTokenProps: o } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(s.dn, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((e, n) => (0, i.jsxs)('span', { ...a({ line: e }), children: [t && (0, i.jsx)('span', { children: n + 1 }), e.map((e, t) => (0, i.jsx)('span', { ...o({ token: e }) }, t)), '\n'] }, n)) })] });
      },
     })
    );
   }
  },
  40761: (e, t, n) => {
   n.d(t, { X: () => d, n: () => c });
   var s = n(69244),
    l = n(20061),
    a = n(37943),
    o = n(4814),
    r = n(75271),
    i = n(52676);
   const c = (0, r.createContext)({}),
    d = (e) => {
     let { title: t, appearance: n, description: r, children: d, figure: u } = e;
     const m = { do: 'Doen', dont: 'Niet doen' },
      h = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div';
     return (0, i.jsxs)(h, { className: (0, o.Z)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof t ? t?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(a.nv, { className: (0, o.Z)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(a.nv, { children: t })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(a.nv, { className: (0, o.Z)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(a.nv, { children: t })] }), r] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: t, type: m[n] }, children: d }) })] });
    };
  },
  39731: (e, t, n) => {
   n.d(t, { Z: () => h });
   var s = n(40139),
    l = n(41017),
    a = n(10930),
    o = n(75271),
    r = n(52676);
   function i(e) {
    const t = o.Children.toArray(e.children),
     n = t.find((e) => o.isValidElement(e) && 'summary' === e.props?.mdxType),
     s = (0, r.jsx)(r.Fragment, { children: t.filter((e) => e !== n) });
    return (0, r.jsx)(a.Z, { ...e, summary: n, children: s });
   }
   var c = n(41179);
   function d(e) {
    let t,
     n = '';
    if ((0, o.isValidElement)(e.children)) {
     const s = e.children.props,
      l = 'string' == typeof s.className ? s.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     l && (t = l[1]), 'string' == typeof s.children && (n = s.children);
    }
    return (0, r.jsx)(c.u, { syntax: t, textContent: n, trim: !0 });
   }
   var u = n(69514),
    m = n(37943);
   function h(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.Z, {
     components: {
      code: m.EK,
      a: m.rU,
      em: m.j$,
      pre: d,
      details: i,
      ul: (e) => {
       let { children: t } = e;
       return (0, r.jsx)(m.QI, { className: 'utrecht-unordered-list--html-content', children: t });
      },
      ol: (e) => {
       let { children: t } = e;
       return (0, r.jsx)(m.GS, { className: 'utrecht-ordered-list--html-content', children: t });
      },
      img: m.Ee,
      h1: m.nL,
      h2: m.XJ,
      h3: m.aC,
      h4: m.k8,
      h5: m.by,
      h6: m.Cd,
      admonition: l.Z,
      mermaid: u.Z,
     },
     children: t,
    });
   }
  },
  94250: (e, t, n) => {
   n.d(t, { Z: () => o });
   n(75271), n(42800);
   var s = n(90495),
    l = n(52676);
   function a() {
    return (0, l.jsx)(s.Z, { children: (0, l.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function o() {
    return (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(a, {}) });
   }
  },
 },
]);
