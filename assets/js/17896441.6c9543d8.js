'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [27918],
 {
  95111: (e, t, n) => {
   n.r(t), n.d(t, { default: () => Q });
   var l = n(75271),
    s = n(14225),
    o = n(40465),
    a = n(52676);
   const r = l.createContext(null);
   function i(e) {
    let { children: t, content: n } = e;
    const s = (function (e) {
     return (0, l.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(n);
    return (0, a.jsx)(r.Provider, { value: s, children: t });
   }
   function c() {
    const e = (0, l.useContext)(r);
    if (null === e) throw new o.i6('DocProvider');
    return e;
   }
   function d() {
    const { metadata: e, frontMatter: t, assets: n } = c();
    return (0, a.jsx)(s.d, { title: e.title, description: e.description, keywords: t.keywords, image: n.image ?? t.image });
   }
   var u = n(4814),
    m = n(68175),
    h = n(92139);
   function p() {
    const { metadata: e } = c();
    return (0, a.jsx)(h.Z, { previous: e.previous, next: e.next });
   }
   var v = n(35353),
    b = n(46663),
    x = n(65697),
    g = n(40217);
   function f(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: n } = e;
    return (0, a.jsx)(g.Z, { id: 'theme.lastUpdated.atDate', description: 'The words used to describe on which date a page has been last updated', values: { date: (0, a.jsx)('b', { children: (0, a.jsx)('time', { dateTime: new Date(1e3 * t).toISOString(), children: n }) }) }, children: ' on {date}' });
   }
   function j(e) {
    let { lastUpdatedBy: t } = e;
    return (0, a.jsx)(g.Z, { id: 'theme.lastUpdated.byUser', description: 'The words used to describe by who the page has been last updated', values: { user: (0, a.jsx)('b', { children: t }) }, children: ' by {user}' });
   }
   function y(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: n, lastUpdatedBy: l } = e;
    return (0, a.jsxs)('span', { className: x.k.common.lastUpdated, children: [(0, a.jsx)(g.Z, { id: 'theme.lastUpdated.lastUpdatedAtBy', description: 'The sentence used to display when a page has been last updated, and by who', values: { atDate: t && n ? (0, a.jsx)(f, { lastUpdatedAt: t, formattedLastUpdatedAt: n }) : '', byUser: l ? (0, a.jsx)(j, { lastUpdatedBy: l }) : '' }, children: 'Last updated{atDate}{byUser}' }), !1] });
   }
   var k = n(64477),
    N = n(8481);
   const _ = { lastUpdated: 'lastUpdated_ka3N' };
   function Z(e) {
    return (0, a.jsx)('div', { className: (0, u.Z)(x.k.docs.docFooterTagsRow, 'row margin-bottom--sm'), children: (0, a.jsx)('div', { className: 'col', children: (0, a.jsx)(N.Z, { ...e }) }) });
   }
   function L(e) {
    let { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: l, formattedLastUpdatedAt: s } = e;
    return (0, a.jsxs)('div', { className: (0, u.Z)(x.k.docs.docFooterEditMetaRow, 'row'), children: [(0, a.jsx)('div', { className: 'col', children: t && (0, a.jsx)(k.Z, { editUrl: t }) }), (0, a.jsx)('div', { className: (0, u.Z)('col', _.lastUpdated), children: (n || l) && (0, a.jsx)(y, { lastUpdatedAt: n, formattedLastUpdatedAt: s, lastUpdatedBy: l }) })] });
   }
   function C() {
    const { metadata: e } = c(),
     { editUrl: t, lastUpdatedAt: n, formattedLastUpdatedAt: l, lastUpdatedBy: s, tags: o } = e,
     r = o.length > 0,
     i = !!(t || n || s);
    return r || i ? (0, a.jsxs)('footer', { className: (0, u.Z)(x.k.docs.docFooter, 'docusaurus-mt-lg'), children: [r && (0, a.jsx)(Z, { tags: o }), i && (0, a.jsx)(L, { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: s, formattedLastUpdatedAt: l })] }) : null;
   }
   var T = n(96401),
    U = n(68721);
   const H = { tocCollapsibleButton: 'tocCollapsibleButton_phta', tocCollapsibleButtonExpanded: 'tocCollapsibleButtonExpanded_rU2P' };
   function w(e) {
    let { collapsed: t, ...n } = e;
    return (0, a.jsx)('button', { type: 'button', ...n, className: (0, u.Z)('clean-btn', H.tocCollapsibleButton, !t && H.tocCollapsibleButtonExpanded, n.className), children: (0, a.jsx)(g.Z, { id: 'theme.TOCCollapsible.toggleButtonLabel', description: 'The label used by the button on the collapsible TOC component', children: 'On this page' }) });
   }
   const A = { tocCollapsible: 'tocCollapsible_DnGi', tocCollapsibleContent: 'tocCollapsibleContent_ss2L', tocCollapsibleExpanded: 'tocCollapsibleExpanded_Ss39' };
   function E(e) {
    let { toc: t, className: n, minHeadingLevel: l, maxHeadingLevel: s } = e;
    const { collapsed: o, toggleCollapsed: r } = (0, T.u)({ initialState: !0 });
    return (0, a.jsxs)('div', { className: (0, u.Z)(A.tocCollapsible, !o && A.tocCollapsibleExpanded, n), children: [(0, a.jsx)(w, { collapsed: o, onClick: r }), (0, a.jsx)(T.z, { lazy: !0, className: A.tocCollapsibleContent, collapsed: o, children: (0, a.jsx)(U.Z, { toc: t, minHeadingLevel: l, maxHeadingLevel: s }) })] });
   }
   const M = { tocMobile: 'tocMobile_WWCy' };
   function B() {
    const { toc: e, frontMatter: t } = c();
    return (0, a.jsx)(E, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, u.Z)(x.k.docs.docTocMobile, M.tocMobile) });
   }
   var I = n(62178);
   function S() {
    const { toc: e, frontMatter: t } = c();
    return (0, a.jsx)(I.Z, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: x.k.docs.docTocDesktop });
   }
   var O = n(6709),
    F = n(39731);
   function V(e) {
    let { children: t } = e;
    const n = (function () {
     const { metadata: e, frontMatter: t, contentTitle: n } = c();
     return t.hide_title || void 0 !== n ? null : e.title;
    })();
    return (0, a.jsxs)('div', { className: (0, u.Z)(x.k.docs.docMarkdown), children: [n && (0, a.jsx)('header', { children: (0, a.jsx)(O.Z, { as: 'h1', children: n }) }), (0, a.jsx)(F.Z, { children: t })] });
   }
   var D = n(9637),
    P = n(17902);
   const R = { docItemContainer: 'docItemContainer_PI1c', docItemCol: 'docItemCol_h8Im' };
   function $(e) {
    let { children: t } = e;
    const n = (function () {
      const { frontMatter: e, toc: t } = c(),
       n = (0, m.i)(),
       l = e.hide_table_of_contents,
       s = !l && t.length > 0;
      return { hidden: l, mobile: s ? (0, a.jsx)(B, {}) : void 0, desktop: !s || ('desktop' !== n && 'ssr' !== n) ? void 0 : (0, a.jsx)(S, {}) };
     })(),
     {
      metadata: { unlisted: l },
     } = c();
    return (0, a.jsxs)('div', { className: 'row', children: [(0, a.jsxs)('div', { className: (0, u.Z)('col', !n.hidden && R.docItemCol), children: [l && (0, a.jsx)(P.Z, {}), (0, a.jsx)(v.Z, {}), (0, a.jsxs)('div', { className: R.docItemContainer, children: [(0, a.jsxs)('article', { children: [(0, a.jsx)(D.Z, {}), (0, a.jsx)(b.Z, {}), n.mobile, (0, a.jsx)(V, { children: t }), (0, a.jsx)(C, {})] }), (0, a.jsx)(p, {})] })] }), n.desktop && (0, a.jsx)('div', { className: 'col col--3', children: n.desktop })] });
   }
   function Q(e) {
    const t = `docs-doc-id-${e.content.metadata.id}`,
     n = e.content;
    return (0, a.jsx)(i, { content: e.content, children: (0, a.jsxs)(s.FG, { className: t, children: [(0, a.jsx)(d, {}), (0, a.jsx)($, { children: (0, a.jsx)(n, {}) })] }) });
   }
  },
  92139: (e, t, n) => {
   n.d(t, { Z: () => a });
   n(75271);
   var l = n(40217),
    s = n(49687),
    o = n(52676);
   function a(e) {
    const { previous: t, next: n } = e;
    return (0, o.jsxs)('nav', { className: 'pagination-nav docusaurus-mt-lg', 'aria-label': (0, l.I)({ id: 'theme.docs.paginator.navAriaLabel', message: 'Docs pages', description: 'The ARIA label for the docs pagination' }), children: [t && (0, o.jsx)(s.Z, { ...t, subLabel: (0, o.jsx)(l.Z, { id: 'theme.docs.paginator.previous', description: 'The label used to navigate to the previous doc', children: 'Previous' }) }), n && (0, o.jsx)(s.Z, { ...n, subLabel: (0, o.jsx)(l.Z, { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc', children: 'Next' }), isNext: !0 })] });
   }
  },
  46663: (e, t, n) => {
   n.d(t, { Z: () => i });
   n(75271);
   var l = n(4814),
    s = n(40217),
    o = n(65697),
    a = n(88758),
    r = n(52676);
   function i(e) {
    let { className: t } = e;
    const n = (0, a.E)();
    return n.badge ? (0, r.jsx)('span', { className: (0, l.Z)(t, o.k.docs.docVersionBadge, 'badge badge--secondary'), children: (0, r.jsx)(s.Z, { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label }, children: 'Version: {versionLabel}' }) }) : null;
   }
  },
  35353: (e, t, n) => {
   n.d(t, { Z: () => b });
   n(75271);
   var l = n(4814),
    s = n(94699),
    o = n(83033),
    a = n(40217),
    r = n(76694),
    i = n(65697),
    c = n(19655),
    d = n(88758),
    u = n(52676);
   const m = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.unreleasedVersionLabel', description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)('b', { children: n.label }) }, children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.' });
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.unmaintainedVersionLabel', description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)('b', { children: n.label }) }, children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.' });
    },
   };
   function h(e) {
    const t = m[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function p(e) {
    let { versionLabel: t, to: n, onClick: l } = e;
    return (0, u.jsx)(a.Z, { id: 'theme.docs.versions.latestVersionSuggestionLabel', description: 'The label used to tell the user to check the latest version', values: { versionLabel: t, latestVersionLink: (0, u.jsx)('b', { children: (0, u.jsx)(o.Z, { to: n, onClick: l, children: (0, u.jsx)(a.Z, { id: 'theme.docs.versions.latestVersionLinkLabel', description: 'The label used for the latest version suggestion link label', children: 'latest version' }) }) }) }, children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).' });
   }
   function v(e) {
    let { className: t, versionMetadata: n } = e;
    const {
      siteConfig: { title: o },
     } = (0, s.Z)(),
     { pluginId: a } = (0, r.gA)({ failfast: !0 }),
     { savePreferredVersionName: d } = (0, c.J)(a),
     { latestDocSuggestion: m, latestVersionSuggestion: v } = (0, r.Jo)(a),
     b = m ?? (x = v).docs.find((e) => e.id === x.mainDocId);
    var x;
    return (0, u.jsxs)('div', { className: (0, l.Z)(t, i.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'), role: 'alert', children: [(0, u.jsx)('div', { children: (0, u.jsx)(h, { siteTitle: o, versionMetadata: n }) }), (0, u.jsx)('div', { className: 'margin-top--md', children: (0, u.jsx)(p, { versionLabel: v.label, to: b.path, onClick: () => d(v.name) }) })] });
   }
   function b(e) {
    let { className: t } = e;
    const n = (0, d.E)();
    return n.banner ? (0, u.jsx)(v, { className: t, versionMetadata: n }) : null;
   }
  },
  64477: (e, t, n) => {
   n.d(t, { Z: () => d });
   n(75271);
   var l = n(40217),
    s = n(65697),
    o = n(83033),
    a = n(4814);
   const r = { iconEdit: 'iconEdit_QIdz' };
   var i = n(52676);
   function c(e) {
    let { className: t, ...n } = e;
    return (0, i.jsx)('svg', { fill: 'currentColor', height: '20', width: '20', viewBox: '0 0 40 40', className: (0, a.Z)(r.iconEdit, t), 'aria-hidden': 'true', ...n, children: (0, i.jsx)('g', { children: (0, i.jsx)('path', { d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z' }) }) });
   }
   function d(e) {
    let { editUrl: t } = e;
    return (0, i.jsxs)(o.Z, { to: t, className: s.k.common.editThisPage, children: [(0, i.jsx)(c, {}), (0, i.jsx)(l.Z, { id: 'theme.common.editThisPage', description: 'The link label to edit the current page', children: 'Edit this page' })] });
   }
  },
  49687: (e, t, n) => {
   n.d(t, { Z: () => a });
   n(75271);
   var l = n(4814),
    s = n(83033),
    o = n(52676);
   function a(e) {
    const { permalink: t, title: n, subLabel: a, isNext: r } = e;
    return (0, o.jsxs)(s.Z, { className: (0, l.Z)('pagination-nav__link', r ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'), to: t, children: [a && (0, o.jsx)('div', { className: 'pagination-nav__sublabel', children: a }), (0, o.jsx)('div', { className: 'pagination-nav__label', children: n })] });
   }
  },
  62178: (e, t, n) => {
   n.d(t, { Z: () => c });
   n(75271);
   var l = n(4814),
    s = n(68721);
   const o = { tableOfContents: 'tableOfContents_LRQk', docItemContainer: 'docItemContainer_uBiB' };
   var a = n(52676);
   const r = 'table-of-contents__link toc-highlight',
    i = 'table-of-contents__link--active';
   function c(e) {
    let { className: t, ...n } = e;
    return (0, a.jsx)('div', { className: (0, l.Z)(o.tableOfContents, 'thin-scrollbar', t), children: (0, a.jsx)(s.Z, { ...n, linkClassName: r, linkActiveClassName: i }) });
   }
  },
  68721: (e, t, n) => {
   n.d(t, { Z: () => v });
   var l = n(75271),
    s = n(72929);
   function o(e) {
    const t = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     n = Array(7).fill(-1);
    t.forEach((e, t) => {
     const l = n.slice(2, e.level);
     (e.parentIndex = Math.max(...l)), (n[e.level] = t);
    });
    const l = [];
    return (
     t.forEach((e) => {
      const { parentIndex: n, ...s } = e;
      n >= 0 ? t[n].children.push(s) : l.push(s);
     }),
     l
    );
   }
   function a(e) {
    let { toc: t, minHeadingLevel: n, maxHeadingLevel: l } = e;
    return t.flatMap((e) => {
     const t = a({ toc: e.children, minHeadingLevel: n, maxHeadingLevel: l });
     return (function (e) {
      return e.level >= n && e.level <= l;
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
    const l = e.find((e) => r(e).top >= n);
    if (l) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(r(l))
      ? l
      : (e[e.indexOf(l) - 1] ?? null);
    }
    return e[e.length - 1] ?? null;
   }
   function c() {
    const e = (0, l.useRef)(0),
     {
      navbar: { hideOnScroll: t },
     } = (0, s.L)();
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
     const { linkClassName: l, linkActiveClassName: s, minHeadingLevel: o, maxHeadingLevel: a } = e;
     function r() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(l),
       r = (function (e) {
        let { minHeadingLevel: t, maxHeadingLevel: n } = e;
        const l = [];
        for (let s = t; s <= n; s += 1) l.push(`h${s}.anchor`);
        return Array.from(document.querySelectorAll(l.join()));
       })({ minHeadingLevel: o, maxHeadingLevel: a }),
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
        n ? (t.current && t.current !== e && t.current.classList.remove(s), e.classList.add(s), (t.current = e)) : e.classList.remove(s);
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
   var u = n(83033),
    m = n(52676);
   function h(e) {
    let { toc: t, className: n, linkClassName: l, isChild: s } = e;
    return t.length ? (0, m.jsx)('ul', { className: s ? void 0 : n, children: t.map((e) => (0, m.jsxs)('li', { children: [(0, m.jsx)(u.Z, { to: `#${e.id}`, className: l ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), (0, m.jsx)(h, { isChild: !0, toc: e.children, className: n, linkClassName: l })] }, e.id)) }) : null;
   }
   const p = l.memo(h);
   function v(e) {
    let { toc: t, className: n = 'table-of-contents table-of-contents__left-border', linkClassName: r = 'table-of-contents__link', linkActiveClassName: i, minHeadingLevel: c, maxHeadingLevel: u, ...h } = e;
    const v = (0, s.L)(),
     b = c ?? v.tableOfContents.minHeadingLevel,
     x = u ?? v.tableOfContents.maxHeadingLevel,
     g = (function (e) {
      let { toc: t, minHeadingLevel: n, maxHeadingLevel: s } = e;
      return (0, l.useMemo)(() => a({ toc: o(t), minHeadingLevel: n, maxHeadingLevel: s }), [t, n, s]);
     })({ toc: t, minHeadingLevel: b, maxHeadingLevel: x });
    return (
     d(
      (0, l.useMemo)(() => {
       if (r && i) return { linkClassName: r, linkActiveClassName: i, minHeadingLevel: b, maxHeadingLevel: x };
      }, [r, i, b, x]),
     ),
     (0, m.jsx)(p, { toc: g, className: n, linkClassName: r, ...h })
    );
   }
  },
  70923: (e, t, n) => {
   n.d(t, { Z: () => r });
   n(75271);
   var l = n(4814),
    s = n(83033);
   const o = { tag: 'tag_YSTM', tagRegular: 'tagRegular_l64o', tagWithCount: 'tagWithCount_oNQj' };
   var a = n(52676);
   function r(e) {
    let { permalink: t, label: n, count: r } = e;
    return (0, a.jsxs)(s.Z, { href: t, className: (0, l.Z)(o.tag, r ? o.tagWithCount : o.tagRegular), children: [n, r && (0, a.jsx)('span', { children: r })] });
   }
  },
  8481: (e, t, n) => {
   n.d(t, { Z: () => i });
   n(75271);
   var l = n(4814),
    s = n(40217),
    o = n(70923);
   const a = { tags: 'tags_MZhc', tag: 'tag_c2Qe' };
   var r = n(52676);
   function i(e) {
    let { tags: t } = e;
    return (0, r.jsxs)(r.Fragment, {
     children: [
      (0, r.jsx)('b', { children: (0, r.jsx)(s.Z, { id: 'theme.tags.tagsListLabel', description: 'The label alongside a tag list', children: 'Tags:' }) }),
      (0, r.jsx)('ul', {
       className: (0, l.Z)(a.tags, 'padding--none', 'margin-left--sm'),
       children: t.map((e) => {
        let { label: t, permalink: n } = e;
        return (0, r.jsx)('li', { className: a.tag, children: (0, r.jsx)(o.Z, { label: t, permalink: n }) }, n);
       }),
      }),
     ],
    });
   }
  },
  24009: (e, t, n) => {
   n.d(t, { Q: () => u });
   var l = n(57229),
    s = n(87573),
    o = n(92826),
    a = n(34616),
    r = n(16167),
    i = n(4814),
    c = n(75271),
    d = n(52676);
   const u = (e) => {
    let { breadcrumbs: t, ...n } = e;
    const u = (0, o.Z)('/'),
     { pathname: m } = (0, s.TH)(),
     h = [{ href: u, label: 'Home', rel: 'home' }, ...t].map((e) => {
      return { ...e, href: ((t = e.href), 'string' == typeof t && !1 === t.endsWith('/') ? `${t}/` : t) };
      var t;
     }),
     p = [...h].reverse().find((e) => e.href !== m);
    return (0, d.jsxs)(d.Fragment, {
     children: [
      (0, d.jsx)('div', {
       className: (0, i.Z)('breadcrumbs', 'breadcrumbs--desktop'),
       children: (0, d.jsx)(r.Qu, {
        ...n,
        label: 'breadcrumb',
        children: h.map((e, t, n) => {
         let { label: l, href: s, rel: o } = e,
          { length: a } = n;
         return (0, d.jsxs)(c.Fragment, { children: [(0, d.jsx)(r.yY, { href: s, current: t === a - 1, disabled: t === a - 1, rel: (0, i.Z)(o, { up: t === a - 2 }), children: l }), t < a - 1 && (0, d.jsx)(r.sc, { children: '/' })] }, t);
        }),
       }),
      }),
      p && (0, d.jsx)('div', { className: (0, i.Z)('breadcrumbs', 'breadcrumbs--mobile'), children: (0, d.jsx)(r.hE, { children: (0, d.jsxs)(l.r, { href: p.href, rel: p.rel, className: 'utrecht-link utrecht-link--html-a', children: [(0, d.jsx)(r.JO, { children: (0, d.jsx)(a.Z, {}) }), p.label] }) }) }),
     ],
    });
   };
  },
  41179: (e, t, n) => {
   n.d(t, { u: () => c });
   var l = n(16167),
    s = n(60648),
    o = n(75271),
    a = n(40761);
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
    const { title: m, type: h } = (0, o.useContext)(a.n),
     p = (0, o.useId)();
    return (
     d && (u = u.trim()),
     (0, i.jsx)(s.y$, {
      theme: r,
      code: u,
      language: n || '',
      children: (e) => {
       let { style: n, tokens: s, getLineProps: o, getTokenProps: a } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(l.dn, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': p, style: n, children: s.map((e, n) => (0, i.jsxs)('span', { ...o({ line: e }), children: [t && (0, i.jsx)('span', { children: n + 1 }), e.map((e, t) => (0, i.jsx)('span', { ...a({ token: e }) }, t)), '\n'] }, n)) })] });
      },
     })
    );
   }
  },
  40761: (e, t, n) => {
   n.d(t, { X: () => d, n: () => c });
   var l = n(69244),
    s = n(20061),
    o = n(16167),
    a = n(4814),
    r = n(75271),
    i = n(52676);
   const c = (0, r.createContext)({}),
    d = (e) => {
     let { title: t, appearance: n, description: r, children: d, figure: u } = e;
     const m = { do: 'Doen', dont: 'Niet doen' },
      h = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div';
     return (0, i.jsxs)(h, { className: (0, a.Z)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof t ? t?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.nv, { className: (0, a.Z)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(o.nv, { children: t })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.nv, { className: (0, a.Z)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(o.nv, { children: t })] }), r] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: t, type: m[n] }, children: d }) })] });
    };
  },
  9637: (e, t, n) => {
   n.d(t, { Z: () => r });
   var l = n(65697),
    s = n(73436),
    o = n(24009),
    a = n(52676);
   function r() {
    const e = (0, s.s1)()?.map((e) => ({ href: e.href, label: e.label })) || [];
    return (0, a.jsx)(o.Q, { breadcrumbs: e, className: l.k.docs.docBreadcrumbs });
   }
  },
  39731: (e, t, n) => {
   n.d(t, { Z: () => h });
   var l = n(40139),
    s = n(73497),
    o = n(27583),
    a = n(75271),
    r = n(52676);
   function i(e) {
    const t = a.Children.toArray(e.children),
     n = t.find((e) => a.isValidElement(e) && 'summary' === e.props?.mdxType),
     l = (0, r.jsx)(r.Fragment, { children: t.filter((e) => e !== n) });
    return (0, r.jsx)(o.Z, { ...e, summary: n, children: l });
   }
   var c = n(41179);
   function d(e) {
    let t,
     n = '';
    if ((0, a.isValidElement)(e.children)) {
     const l = e.children.props,
      s = 'string' == typeof l.className ? l.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     s && (t = s[1]), 'string' == typeof l.children && (n = l.children);
    }
    return (0, r.jsx)(c.u, { syntax: t, textContent: n, trim: !0 });
   }
   var u = n(35519),
    m = n(16167);
   function h(e) {
    let { children: t } = e;
    return (0, r.jsx)(l.Z, {
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
      admonition: s.Z,
      mermaid: u.Z,
     },
     children: t,
    });
   }
  },
  17902: (e, t, n) => {
   n.d(t, { Z: () => a });
   n(75271), n(40217);
   var l = n(97623),
    s = n(52676);
   function o() {
    return (0, s.jsx)(l.Z, { children: (0, s.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }) });
   }
   function a() {
    return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(o, {}) });
   }
  },
 },
]);
