"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [27918],
 {
  74164: (e, t, n) => {
   n.r(t), n.d(t, { default: () => P });
   var s = n(50959),
    a = n(48270),
    l = n(27362),
    i = n(11527);
   const o = s.createContext(null);
   function d(e) {
    let { children: t, content: n } = e;
    const a = (function (e) {
     return (0, s.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(n);
    return (0, i.jsx)(o.Provider, { value: a, children: t });
   }
   function r() {
    const e = (0, s.useContext)(o);
    if (null === e) throw new l.i6("DocProvider");
    return e;
   }
   function c() {
    const { metadata: e, frontMatter: t, assets: n } = r();
    return (0, i.jsx)(a.d, { title: e.title, description: e.description, keywords: t.keywords, image: n.image ?? t.image });
   }
   var u = n(86259),
    h = n(39975),
    m = n(84789);
   function p() {
    const { metadata: e } = r();
    return (0, i.jsx)(m.Z, { previous: e.previous, next: e.next });
   }
   var x = n(58701),
    b = n(66831),
    v = n(76711),
    j = n(48714);
   function g(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: n } = e;
    return (0, i.jsx)(j.Z, { id: "theme.lastUpdated.atDate", description: "The words used to describe on which date a page has been last updated", values: { date: (0, i.jsx)("b", { children: (0, i.jsx)("time", { dateTime: new Date(1e3 * t).toISOString(), children: n }) }) }, children: " on {date}" });
   }
   function f(e) {
    let { lastUpdatedBy: t } = e;
    return (0, i.jsx)(j.Z, { id: "theme.lastUpdated.byUser", description: "The words used to describe by who the page has been last updated", values: { user: (0, i.jsx)("b", { children: t }) }, children: " by {user}" });
   }
   function Z(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: n, lastUpdatedBy: s } = e;
    return (0, i.jsxs)("span", { className: v.k.common.lastUpdated, children: [(0, i.jsx)(j.Z, { id: "theme.lastUpdated.lastUpdatedAtBy", description: "The sentence used to display when a page has been last updated, and by who", values: { atDate: t && n ? (0, i.jsx)(g, { lastUpdatedAt: t, formattedLastUpdatedAt: n }) : "", byUser: s ? (0, i.jsx)(f, { lastUpdatedBy: s }) : "" }, children: "Last updated{atDate}{byUser}" }), !1] });
   }
   var C = n(13624),
    k = n(3361);
   const y = { lastUpdated: "lastUpdated_JGtH" };
   function L(e) {
    return (0, i.jsx)("div", { className: (0, u.Z)(v.k.docs.docFooterTagsRow, "row margin-bottom--sm"), children: (0, i.jsx)("div", { className: "col", children: (0, i.jsx)(k.Z, { ...e }) }) });
   }
   function T(e) {
    let { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: s, formattedLastUpdatedAt: a } = e;
    return (0, i.jsxs)("div", { className: (0, u.Z)(v.k.docs.docFooterEditMetaRow, "row"), children: [(0, i.jsx)("div", { className: "col", children: t && (0, i.jsx)(C.Z, { editUrl: t }) }), (0, i.jsx)("div", { className: (0, u.Z)("col", y.lastUpdated), children: (n || s) && (0, i.jsx)(Z, { lastUpdatedAt: n, formattedLastUpdatedAt: a, lastUpdatedBy: s }) })] });
   }
   function N() {
    const { metadata: e } = r(),
     { editUrl: t, lastUpdatedAt: n, formattedLastUpdatedAt: s, lastUpdatedBy: a, tags: l } = e,
     o = l.length > 0,
     d = !!(t || n || a);
    return o || d ? (0, i.jsxs)("footer", { className: (0, u.Z)(v.k.docs.docFooter, "docusaurus-mt-lg"), children: [o && (0, i.jsx)(L, { tags: l }), d && (0, i.jsx)(T, { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: a, formattedLastUpdatedAt: s })] }) : null;
   }
   var U = n(17796),
    _ = n(18740);
   const w = { tocCollapsibleButton: "tocCollapsibleButton_OGmT", tocCollapsibleButtonExpanded: "tocCollapsibleButtonExpanded_RDam" };
   function A(e) {
    let { collapsed: t, ...n } = e;
    return (0, i.jsx)("button", { type: "button", ...n, className: (0, u.Z)("clean-btn", w.tocCollapsibleButton, !t && w.tocCollapsibleButtonExpanded, n.className), children: (0, i.jsx)(j.Z, { id: "theme.TOCCollapsible.toggleButtonLabel", description: "The label used by the button on the collapsible TOC component", children: "On this page" }) });
   }
   const B = { tocCollapsible: "tocCollapsible_jt91", tocCollapsibleContent: "tocCollapsibleContent_iu6L", tocCollapsibleExpanded: "tocCollapsibleExpanded_NtQa" };
   function M(e) {
    let { toc: t, className: n, minHeadingLevel: s, maxHeadingLevel: a } = e;
    const { collapsed: l, toggleCollapsed: o } = (0, U.u)({ initialState: !0 });
    return (0, i.jsxs)("div", { className: (0, u.Z)(B.tocCollapsible, !l && B.tocCollapsibleExpanded, n), children: [(0, i.jsx)(A, { collapsed: l, onClick: o }), (0, i.jsx)(U.z, { lazy: !0, className: B.tocCollapsibleContent, collapsed: l, children: (0, i.jsx)(_.Z, { toc: t, minHeadingLevel: s, maxHeadingLevel: a }) })] });
   }
   const E = { tocMobile: "tocMobile_oZGg" };
   function V() {
    const { toc: e, frontMatter: t } = r();
    return (0, i.jsx)(M, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, u.Z)(v.k.docs.docTocMobile, E.tocMobile) });
   }
   var I = n(89113);
   function F() {
    const { toc: e, frontMatter: t } = r();
    return (0, i.jsx)(I.Z, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: v.k.docs.docTocDesktop });
   }
   var H = n(9024),
    D = n(21581);
   function S(e) {
    let { children: t } = e;
    const n = (function () {
     const { metadata: e, frontMatter: t, contentTitle: n } = r();
     return t.hide_title || void 0 !== n ? null : e.title;
    })();
    return (0, i.jsxs)("div", { className: (0, u.Z)(v.k.docs.docMarkdown), children: [n && (0, i.jsx)("header", { children: (0, i.jsx)(H.Z, { as: "h1", children: n }) }), (0, i.jsx)(D.Z, { children: t })] });
   }
   var O = n(9637),
    Q = n(63968);
   const J = { docItemContainer: "docItemContainer_V0kI", docItemCol: "docItemCol_Fms6" };
   function G(e) {
    let { children: t } = e;
    const n = (function () {
      const { frontMatter: e, toc: t } = r(),
       n = (0, h.i)(),
       s = e.hide_table_of_contents,
       a = !s && t.length > 0;
      return { hidden: s, mobile: a ? (0, i.jsx)(V, {}) : void 0, desktop: !a || ("desktop" !== n && "ssr" !== n) ? void 0 : (0, i.jsx)(F, {}) };
     })(),
     {
      metadata: { unlisted: s },
     } = r();
    return (0, i.jsxs)("div", { className: "row", children: [(0, i.jsxs)("div", { className: (0, u.Z)("col", !n.hidden && J.docItemCol), children: [s && (0, i.jsx)(Q.Z, {}), (0, i.jsx)(x.Z, {}), (0, i.jsxs)("div", { className: J.docItemContainer, children: [(0, i.jsxs)("article", { children: [(0, i.jsx)(O.Z, {}), (0, i.jsx)(b.Z, {}), n.mobile, (0, i.jsx)(S, { children: t }), (0, i.jsx)(N, {})] }), (0, i.jsx)(p, {})] })] }), n.desktop && (0, i.jsx)("div", { className: "col col--3", children: n.desktop })] });
   }
   function P(e) {
    const t = `docs-doc-id-${e.content.metadata.id}`,
     n = e.content;
    return (0, i.jsx)(d, { content: e.content, children: (0, i.jsxs)(a.FG, { className: t, children: [(0, i.jsx)(c, {}), (0, i.jsx)(G, { children: (0, i.jsx)(n, {}) })] }) });
   }
  },
  84789: (e, t, n) => {
   n.d(t, { Z: () => i });
   n(50959);
   var s = n(48714),
    a = n(91138),
    l = n(11527);
   function i(e) {
    const { previous: t, next: n } = e;
    return (0, l.jsxs)("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, s.I)({ id: "theme.docs.paginator.navAriaLabel", message: "Docs pages", description: "The ARIA label for the docs pagination" }), children: [t && (0, l.jsx)(a.Z, { ...t, subLabel: (0, l.jsx)(s.Z, { id: "theme.docs.paginator.previous", description: "The label used to navigate to the previous doc", children: "Previous" }) }), n && (0, l.jsx)(a.Z, { ...n, subLabel: (0, l.jsx)(s.Z, { id: "theme.docs.paginator.next", description: "The label used to navigate to the next doc", children: "Next" }), isNext: !0 })] });
   }
  },
  66831: (e, t, n) => {
   n.d(t, { Z: () => d });
   n(50959);
   var s = n(86259),
    a = n(48714),
    l = n(76711),
    i = n(8420),
    o = n(11527);
   function d(e) {
    let { className: t } = e;
    const n = (0, i.E)();
    return n.badge ? (0, o.jsx)("span", { className: (0, s.Z)(t, l.k.docs.docVersionBadge, "badge badge--secondary"), children: (0, o.jsx)(a.Z, { id: "theme.docs.versionBadge.label", values: { versionLabel: n.label }, children: "Version: {versionLabel}" }) }) : null;
   }
  },
  58701: (e, t, n) => {
   n.d(t, { Z: () => b });
   n(50959);
   var s = n(86259),
    a = n(45090),
    l = n(58812),
    i = n(48714),
    o = n(99306),
    d = n(76711),
    r = n(10409),
    c = n(8420),
    u = n(11527);
   const h = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return (0, u.jsx)(i.Z, { id: "theme.docs.versions.unreleasedVersionLabel", description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)("b", { children: n.label }) }, children: "This is unreleased documentation for {siteTitle} {versionLabel} version." });
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return (0, u.jsx)(i.Z, { id: "theme.docs.versions.unmaintainedVersionLabel", description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)("b", { children: n.label }) }, children: "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained." });
    },
   };
   function m(e) {
    const t = h[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function p(e) {
    let { versionLabel: t, to: n, onClick: s } = e;
    return (0, u.jsx)(i.Z, { id: "theme.docs.versions.latestVersionSuggestionLabel", description: "The label used to tell the user to check the latest version", values: { versionLabel: t, latestVersionLink: (0, u.jsx)("b", { children: (0, u.jsx)(l.Z, { to: n, onClick: s, children: (0, u.jsx)(i.Z, { id: "theme.docs.versions.latestVersionLinkLabel", description: "The label used for the latest version suggestion link label", children: "latest version" }) }) }) }, children: "For up-to-date documentation, see the {latestVersionLink} ({versionLabel})." });
   }
   function x(e) {
    let { className: t, versionMetadata: n } = e;
    const {
      siteConfig: { title: l },
     } = (0, a.Z)(),
     { pluginId: i } = (0, o.gA)({ failfast: !0 }),
     { savePreferredVersionName: c } = (0, r.J)(i),
     { latestDocSuggestion: h, latestVersionSuggestion: x } = (0, o.Jo)(i),
     b = h ?? (v = x).docs.find((e) => e.id === v.mainDocId);
    var v;
    return (0, u.jsxs)("div", { className: (0, s.Z)(t, d.k.docs.docVersionBanner, "alert alert--warning margin-bottom--md"), role: "alert", children: [(0, u.jsx)("div", { children: (0, u.jsx)(m, { siteTitle: l, versionMetadata: n }) }), (0, u.jsx)("div", { className: "margin-top--md", children: (0, u.jsx)(p, { versionLabel: x.label, to: b.path, onClick: () => c(x.name) }) })] });
   }
   function b(e) {
    let { className: t } = e;
    const n = (0, c.E)();
    return n.banner ? (0, u.jsx)(x, { className: t, versionMetadata: n }) : null;
   }
  },
  63968: (e, t, n) => {
   n.d(t, { Z: () => m });
   n(50959);
   var s = n(86259),
    a = n(48714),
    l = n(81911),
    i = n(11527);
   function o() {
    return (0, i.jsx)(a.Z, { id: "theme.unlistedContent.title", description: "The unlisted content banner title", children: "Unlisted page" });
   }
   function d() {
    return (0, i.jsx)(a.Z, { id: "theme.unlistedContent.message", description: "The unlisted content banner message", children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it." });
   }
   function r() {
    return (0, i.jsx)(l.Z, { children: (0, i.jsx)("meta", { name: "robots", content: "noindex, nofollow" }) });
   }
   var c = n(76711),
    u = n(77818);
   function h(e) {
    let { className: t } = e;
    return (0, i.jsx)(u.Z, { type: "caution", title: (0, i.jsx)(o, {}), className: (0, s.Z)(t, c.k.common.unlistedBanner), children: (0, i.jsx)(d, {}) });
   }
   function m(e) {
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(r, {}), (0, i.jsx)(h, { ...e })] });
   }
  },
  46820: (e, t, n) => {
   n.d(t, { Q: () => p });
   var s = n(58812),
    a = n(28903),
    l = n(90772),
    i = n(71895),
    o = n(16532),
    d = n(86259),
    r = n(50959);
   const c = "breadcrumbs__73z",
    u = "breadcrumbs--mobile_QwgF",
    h = "breadcrumbs--desktop_v9Xv";
   var m = n(11527);
   const p = (e) => {
    let { breadcrumbs: t, ...n } = e;
    const p = [{ href: (0, l.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: x } = (0, a.TH)(),
     b = [...p].reverse().find((e) => e.href !== x);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsx)("div", {
       className: (0, d.Z)(c, h),
       children: (0, m.jsx)(o.Qu, {
        ...n,
        children: p.map((e, t, n) => {
         let { label: s, href: a, rel: l } = e,
          { length: i } = n;
         return (0, m.jsxs)(r.Fragment, { children: [(0, m.jsx)(o.yY, { href: a, current: t === i - 1, disabled: t === i - 1, rel: (0, d.Z)(l, { up: t === i - 2 }), children: s }), t < i - 1 && (0, m.jsx)(o.sc, { children: "/" })] }, t);
        }),
       }),
      }),
      b && (0, m.jsx)("div", { className: (0, d.Z)(c, u), children: (0, m.jsx)(o.hE, { children: (0, m.jsxs)(s.Z, { href: b.href, rel: b.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, m.jsx)(o.JO, { children: (0, m.jsx)(i.Z, {}) }), b.label] }) }) }),
     ],
    });
   };
  },
  9637: (e, t, n) => {
   n.d(t, { Z: () => o });
   var s = n(76711),
    a = n(88097),
    l = n(46820),
    i = (n(50959), n(11527));
   function o() {
    const e = (0, a.s1)()?.map((e) => ("category" === e.type ? { ...e, ...e.items.find((e) => "link" === e.type), label: e.label } : { href: e.href, label: e.label })) || [];
    return (0, i.jsx)(l.Q, { breadcrumbs: e, className: s.k.docs.docBreadcrumbs });
   }
  },
  21581: (e, t, n) => {
   n.d(t, { Z: () => x });
   var s = n(47214),
    a = n(77818),
    l = n(44410),
    i = n(50959),
    o = n(11527);
   function d(e) {
    const t = i.Children.toArray(e.children),
     n = t.find((e) => i.isValidElement(e) && "summary" === e.props?.mdxType),
     s = (0, o.jsx)(o.Fragment, { children: t.filter((e) => e !== n) });
    return (0, o.jsx)(l.Z, { ...e, summary: n, children: s });
   }
   var r = n(81911);
   function c(e) {
    const t = i.Children.map(e.children, (e) =>
     i.isValidElement(e)
      ? (function (e) {
         if (e.props?.mdxType && e.props.originalType) {
          const { ...t } = e.props;
          return i.createElement(e.props.originalType, t);
         }
         return e;
        })(e)
      : e
    );
    return (0, o.jsx)(r.Z, { ...e, children: t });
   }
   var u = n(50654);
   function h(e) {
    return (0, o.jsx)(u.Z, { ...((0, i.isValidElement)(e.children) && "code" === e.children.props?.originalType ? e.children.props : { ...e }) });
   }
   var m = n(86092),
    p = n(16532);
   function x(e) {
    let { children: t } = e;
    return (0, o.jsx)(s.Z, { components: { head: c, code: p.EK, a: p.rU, em: p.j$, pre: h, details: d, ul: p.QI, li: p.AS, img: p.Ee, h1: p.nL, h2: p.XJ, h3: p.aC, h4: p.k8, h5: p.by, h6: p.Cd, admonition: a.Z, mermaid: m.Z }, children: t });
   }
  },
 },
]);
