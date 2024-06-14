"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7918],
 {
  86001: (e, t, o) => {
   o.r(t), o.d(t, { default: () => J });
   var s = o(75271),
    l = o(21296),
    n = o(61454),
    a = o(52676);
   const r = s.createContext(null);
   function c(e) {
    let { children: t, content: o } = e;
    const l = (function (e) {
     return (0, s.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(o);
    return (0, a.jsx)(r.Provider, { value: l, children: t });
   }
   function i() {
    const e = (0, s.useContext)(r);
    if (null === e) throw new n.i6("DocProvider");
    return e;
   }
   function d() {
    const { metadata: e, frontMatter: t, assets: o } = i();
    return (0, a.jsx)(l.d, { title: e.title, description: e.description, keywords: t.keywords, image: o.image ?? t.image });
   }
   var u = o(4814),
    p = o(62920),
    h = o(33918);
   function m() {
    const { metadata: e } = i();
    return (0, a.jsx)(h.Z, { previous: e.previous, next: e.next });
   }
   var b = o(73e3),
    v = o(10535),
    x = o(76373),
    y = o(8143);
   function j(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: o } = e;
    return (0, a.jsx)(y.Z, { id: "theme.lastUpdated.atDate", description: "The words used to describe on which date a page has been last updated", values: { date: (0, a.jsx)("b", { children: (0, a.jsx)("time", { dateTime: new Date(1e3 * t).toISOString(), children: o }) }) }, children: " on {date}" });
   }
   function g(e) {
    let { lastUpdatedBy: t } = e;
    return (0, a.jsx)(y.Z, { id: "theme.lastUpdated.byUser", description: "The words used to describe by who the page has been last updated", values: { user: (0, a.jsx)("b", { children: t }) }, children: " by {user}" });
   }
   function f(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: o, lastUpdatedBy: s } = e;
    return (0, a.jsxs)("span", { className: x.k.common.lastUpdated, children: [(0, a.jsx)(y.Z, { id: "theme.lastUpdated.lastUpdatedAtBy", description: "The sentence used to display when a page has been last updated, and by who", values: { atDate: t && o ? (0, a.jsx)(j, { lastUpdatedAt: t, formattedLastUpdatedAt: o }) : "", byUser: s ? (0, a.jsx)(g, { lastUpdatedBy: s }) : "" }, children: "Last updated{atDate}{byUser}" }), !1] });
   }
   var k = o(30734),
    Z = o(78896);
   const C = { lastUpdated: "lastUpdated_tQw2" };
   function T(e) {
    return (0, a.jsx)("div", { className: (0, u.Z)(x.k.docs.docFooterTagsRow, "row margin-bottom--sm"), children: (0, a.jsx)("div", { className: "col", children: (0, a.jsx)(Z.Z, { ...e }) }) });
   }
   function N(e) {
    let { editUrl: t, lastUpdatedAt: o, lastUpdatedBy: s, formattedLastUpdatedAt: l } = e;
    return (0, a.jsxs)("div", { className: (0, u.Z)(x.k.docs.docFooterEditMetaRow, "row"), children: [(0, a.jsx)("div", { className: "col", children: t && (0, a.jsx)(k.Z, { editUrl: t }) }), (0, a.jsx)("div", { className: (0, u.Z)("col", C.lastUpdated), children: (o || s) && (0, a.jsx)(f, { lastUpdatedAt: o, formattedLastUpdatedAt: l, lastUpdatedBy: s }) })] });
   }
   function L() {
    const { metadata: e } = i(),
     { editUrl: t, lastUpdatedAt: o, formattedLastUpdatedAt: s, lastUpdatedBy: l, tags: n } = e,
     r = n.length > 0,
     c = !!(t || o || l);
    return r || c ? (0, a.jsxs)("footer", { className: (0, u.Z)(x.k.docs.docFooter, "docusaurus-mt-lg"), children: [r && (0, a.jsx)(T, { tags: n }), c && (0, a.jsx)(N, { editUrl: t, lastUpdatedAt: o, lastUpdatedBy: l, formattedLastUpdatedAt: s })] }) : null;
   }
   var U = o(54218),
    _ = o(97059);
   const w = { tocCollapsibleButton: "tocCollapsibleButton_TUGG", tocCollapsibleButtonExpanded: "tocCollapsibleButtonExpanded_RTXO" };
   function A(e) {
    let { collapsed: t, ...o } = e;
    return (0, a.jsx)("button", { type: "button", ...o, className: (0, u.Z)("clean-btn", w.tocCollapsibleButton, !t && w.tocCollapsibleButtonExpanded, o.className), children: (0, a.jsx)(y.Z, { id: "theme.TOCCollapsible.toggleButtonLabel", description: "The label used by the button on the collapsible TOC component", children: "On this page" }) });
   }
   const B = { tocCollapsible: "tocCollapsible_KClT", tocCollapsibleContent: "tocCollapsibleContent_SC4h", tocCollapsibleExpanded: "tocCollapsibleExpanded_EvYa" };
   function M(e) {
    let { toc: t, className: o, minHeadingLevel: s, maxHeadingLevel: l } = e;
    const { collapsed: n, toggleCollapsed: r } = (0, U.u)({ initialState: !0 });
    return (0, a.jsxs)("div", { className: (0, u.Z)(B.tocCollapsible, !n && B.tocCollapsibleExpanded, o), children: [(0, a.jsx)(A, { collapsed: n, onClick: r }), (0, a.jsx)(U.z, { lazy: !0, className: B.tocCollapsibleContent, collapsed: n, children: (0, a.jsx)(_.Z, { toc: t, minHeadingLevel: s, maxHeadingLevel: l }) })] });
   }
   const S = { tocMobile: "tocMobile_NROf" };
   function E() {
    const { toc: e, frontMatter: t } = i();
    return (0, a.jsx)(M, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, u.Z)(x.k.docs.docTocMobile, S.tocMobile) });
   }
   var V = o(3028);
   function I() {
    const { toc: e, frontMatter: t } = i();
    return (0, a.jsx)(V.Z, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: x.k.docs.docTocDesktop });
   }
   var F = o(64536),
    H = o(21581);
   function D(e) {
    let { children: t } = e;
    const o = (function () {
     const { metadata: e, frontMatter: t, contentTitle: o } = i();
     return t.hide_title || void 0 !== o ? null : e.title;
    })();
    return (0, a.jsxs)("div", { className: (0, u.Z)(x.k.docs.docMarkdown), children: [o && (0, a.jsx)("header", { children: (0, a.jsx)(F.Z, { as: "h1", children: o }) }), (0, a.jsx)(H.Z, { children: t })] });
   }
   var O = o(9637),
    P = o(69867);
   const Q = { docItemContainer: "docItemContainer_SqTa", docItemCol: "docItemCol_mW2u" };
   function R(e) {
    let { children: t } = e;
    const o = (function () {
      const { frontMatter: e, toc: t } = i(),
       o = (0, p.i)(),
       s = e.hide_table_of_contents,
       l = !s && t.length > 0;
      return { hidden: s, mobile: l ? (0, a.jsx)(E, {}) : void 0, desktop: !l || ("desktop" !== o && "ssr" !== o) ? void 0 : (0, a.jsx)(I, {}) };
     })(),
     {
      metadata: { unlisted: s },
     } = i();
    return (0, a.jsxs)("div", { className: "row", children: [(0, a.jsxs)("div", { className: (0, u.Z)("col", !o.hidden && Q.docItemCol), children: [s && (0, a.jsx)(P.Z, {}), (0, a.jsx)(b.Z, {}), (0, a.jsxs)("div", { className: Q.docItemContainer, children: [(0, a.jsxs)("article", { children: [(0, a.jsx)(O.Z, {}), (0, a.jsx)(v.Z, {}), o.mobile, (0, a.jsx)(D, { children: t }), (0, a.jsx)(L, {})] }), (0, a.jsx)(m, {})] })] }), o.desktop && (0, a.jsx)("div", { className: "col col--3", children: o.desktop })] });
   }
   function J(e) {
    const t = `docs-doc-id-${e.content.metadata.id}`,
     o = e.content;
    return (0, a.jsx)(c, { content: e.content, children: (0, a.jsxs)(l.FG, { className: t, children: [(0, a.jsx)(d, {}), (0, a.jsx)(R, { children: (0, a.jsx)(o, {}) })] }) });
   }
  },
  33918: (e, t, o) => {
   o.d(t, { Z: () => a });
   o(75271);
   var s = o(8143),
    l = o(97444),
    n = o(52676);
   function a(e) {
    const { previous: t, next: o } = e;
    return (0, n.jsxs)("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, s.I)({ id: "theme.docs.paginator.navAriaLabel", message: "Docs pages", description: "The ARIA label for the docs pagination" }), children: [t && (0, n.jsx)(l.Z, { ...t, subLabel: (0, n.jsx)(s.Z, { id: "theme.docs.paginator.previous", description: "The label used to navigate to the previous doc", children: "Previous" }) }), o && (0, n.jsx)(l.Z, { ...o, subLabel: (0, n.jsx)(s.Z, { id: "theme.docs.paginator.next", description: "The label used to navigate to the next doc", children: "Next" }), isNext: !0 })] });
   }
  },
  10535: (e, t, o) => {
   o.d(t, { Z: () => c });
   o(75271);
   var s = o(4814),
    l = o(8143),
    n = o(76373),
    a = o(23929),
    r = o(52676);
   function c(e) {
    let { className: t } = e;
    const o = (0, a.E)();
    return o.badge ? (0, r.jsx)("span", { className: (0, s.Z)(t, n.k.docs.docVersionBadge, "badge badge--secondary"), children: (0, r.jsx)(l.Z, { id: "theme.docs.versionBadge.label", values: { versionLabel: o.label }, children: "Version: {versionLabel}" }) }) : null;
   }
  },
  73e3: (e, t, o) => {
   o.d(t, { Z: () => v });
   o(75271);
   var s = o(4814),
    l = o(73200),
    n = o(15854),
    a = o(8143),
    r = o(82508),
    c = o(76373),
    i = o(22258),
    d = o(23929),
    u = o(52676);
   const p = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: o } = e;
     return (0, u.jsx)(a.Z, { id: "theme.docs.versions.unreleasedVersionLabel", description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)("b", { children: o.label }) }, children: "This is unreleased documentation for {siteTitle} {versionLabel} version." });
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: o } = e;
     return (0, u.jsx)(a.Z, { id: "theme.docs.versions.unmaintainedVersionLabel", description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)("b", { children: o.label }) }, children: "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained." });
    },
   };
   function h(e) {
    const t = p[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function m(e) {
    let { versionLabel: t, to: o, onClick: s } = e;
    return (0, u.jsx)(a.Z, { id: "theme.docs.versions.latestVersionSuggestionLabel", description: "The label used to tell the user to check the latest version", values: { versionLabel: t, latestVersionLink: (0, u.jsx)("b", { children: (0, u.jsx)(n.Z, { to: o, onClick: s, children: (0, u.jsx)(a.Z, { id: "theme.docs.versions.latestVersionLinkLabel", description: "The label used for the latest version suggestion link label", children: "latest version" }) }) }) }, children: "For up-to-date documentation, see the {latestVersionLink} ({versionLabel})." });
   }
   function b(e) {
    let { className: t, versionMetadata: o } = e;
    const {
      siteConfig: { title: n },
     } = (0, l.Z)(),
     { pluginId: a } = (0, r.gA)({ failfast: !0 }),
     { savePreferredVersionName: d } = (0, i.J)(a),
     { latestDocSuggestion: p, latestVersionSuggestion: b } = (0, r.Jo)(a),
     v = p ?? (x = b).docs.find((e) => e.id === x.mainDocId);
    var x;
    return (0, u.jsxs)("div", { className: (0, s.Z)(t, c.k.docs.docVersionBanner, "alert alert--warning margin-bottom--md"), role: "alert", children: [(0, u.jsx)("div", { children: (0, u.jsx)(h, { siteTitle: n, versionMetadata: o }) }), (0, u.jsx)("div", { className: "margin-top--md", children: (0, u.jsx)(m, { versionLabel: b.label, to: v.path, onClick: () => d(b.name) }) })] });
   }
   function v(e) {
    let { className: t } = e;
    const o = (0, d.E)();
    return o.banner ? (0, u.jsx)(b, { className: t, versionMetadata: o }) : null;
   }
  },
  69867: (e, t, o) => {
   o.d(t, { Z: () => h });
   o(75271);
   var s = o(4814),
    l = o(8143),
    n = o(32604),
    a = o(52676);
   function r() {
    return (0, a.jsx)(l.Z, { id: "theme.unlistedContent.title", description: "The unlisted content banner title", children: "Unlisted page" });
   }
   function c() {
    return (0, a.jsx)(l.Z, { id: "theme.unlistedContent.message", description: "The unlisted content banner message", children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it." });
   }
   function i() {
    return (0, a.jsx)(n.Z, { children: (0, a.jsx)("meta", { name: "robots", content: "noindex, nofollow" }) });
   }
   var d = o(76373),
    u = o(59650);
   function p(e) {
    let { className: t } = e;
    return (0, a.jsx)(u.Z, { type: "caution", title: (0, a.jsx)(r, {}), className: (0, s.Z)(t, d.k.common.unlistedBanner), children: (0, a.jsx)(c, {}) });
   }
   function h(e) {
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(i, {}), (0, a.jsx)(p, { ...e })] });
   }
  },
  21524: (e, t, o) => {
   o.d(t, { Q: () => m });
   var s = o(15854),
    l = o(3225),
    n = o(70155),
    a = o(33137),
    r = o(78187),
    c = o(4814),
    i = o(75271);
   const d = "breadcrumbs__73z",
    u = "breadcrumbs--mobile_QwgF",
    p = "breadcrumbs--desktop_v9Xv";
   var h = o(52676);
   const m = (e) => {
    let { breadcrumbs: t, ...o } = e;
    const m = [{ href: (0, n.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: b } = (0, l.TH)(),
     v = [...m].reverse().find((e) => e.href !== b);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)("div", {
       className: (0, c.Z)(d, p),
       children: (0, h.jsx)(r.Qu, {
        ...o,
        children: m.map((e, t, o) => {
         let { label: s, href: l, rel: n } = e,
          { length: a } = o;
         return (0, h.jsxs)(i.Fragment, { children: [(0, h.jsx)(r.yY, { href: l, current: t === a - 1, disabled: t === a - 1, rel: (0, c.Z)(n, { up: t === a - 2 }), children: s }), t < a - 1 && (0, h.jsx)(r.sc, { children: "/" })] }, t);
        }),
       }),
      }),
      v && (0, h.jsx)("div", { className: (0, c.Z)(d, u), children: (0, h.jsx)(r.hE, { children: (0, h.jsxs)(s.Z, { href: v.href, rel: v.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, h.jsx)(r.JO, { children: (0, h.jsx)(a.Z, {}) }), v.label] }) }) }),
     ],
    });
   };
  },
  41179: (e, t, o) => {
   o.d(t, { u: () => r });
   var s = o(78187),
    l = o(12429);
   o(75271);
   const n = {
    plain: { color: "var(--nlds-code-block-color)", backgroundColor: "var(--nlds-code-block-background-color)" },
    styles: [
     { types: ["comment"], style: { color: "var(--nlds-code-block-comment-color)", fontStyle: "italic" } },
     { types: ["prolog"], style: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "italic" } },
     { types: ["cdata"], style: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "italic" } },
     { types: ["punctuation"], style: { color: "var(--nlds-code-block-punctuation-color)" } },
     { types: ["deleted"], style: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "italic" } },
     { types: ["symbol"], style: { color: "var(--nlds-code-block-symbol-color)" } },
     { types: ["property"], style: { color: "var(--nlds-code-block-property-color)" } },
     { types: ["tag"], style: { color: "var(--nlds-code-block-tag-color)" } },
     { types: ["operator"], style: { color: "var(--nlds-code-block-operator-color)" } },
     { types: ["keyword"], style: { color: "var(--nlds-code-block-keyword-color)" } },
     { types: ["boolean"], style: { color: "var(--nlds-code-block-boolean-color)" } },
     { types: ["number"], style: { color: "var(--nlds-code-block-number-color)" } },
     { types: ["constant"], style: { color: "var(--nlds-code-block-constant-color)" } },
     { types: ["function"], style: { color: "var(--nlds-code-block-function-color)" } },
     { types: ["builtin"], style: { color: "var(--nlds-code-block-builtin-color)" } },
     { types: ["char"], style: { color: "var(--nlds-code-block-char-color)" } },
     { types: ["selector"], style: { color: "var(--nlds-code-block-selector-color)", fontStyle: "italic" } },
     { types: ["doctype"], style: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "italic" } },
     { types: ["attr-name"], style: { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "italic" } },
     { types: ["inserted"], style: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "italic" } },
     { types: ["string"], style: { color: "var(--nlds-code-block-string-color)" } },
     { types: ["url"], style: { color: "var(--nlds-code-block-url-color)" } },
     { types: ["entity"], style: { color: "var(--nlds-code-block-entity-color)" } },
     { types: ["class-name"], style: { color: "var(--nlds-code-block-class-name-color)" } },
     { types: ["atrule"], style: { color: "var(--nlds-code-block-atrule-color)" } },
     { types: ["attr-value"], style: { color: "var(--nlds-code-block-attr-value-color)" } },
     { types: ["regex"], style: { color: "var(--nlds-code-block-regex-color)" } },
     { types: ["important"], style: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" } },
     { types: ["variable"], style: { color: "var(--nlds-code-block-variable-color)" } },
     { types: ["bold"], style: { fontWeight: "bold" } },
     { types: ["italic"], style: { fontStyle: "italic" } },
    ],
   };
   var a = o(52676);
   function r(e) {
    let { lineNumber: t, syntax: o, textContent: r, trim: c } = e,
     i = r;
    return (
     c && (i = i.trim()),
     (0, a.jsx)(l.y$, {
      theme: n,
      code: i,
      language: o || "",
      children: (e) => {
       let { style: o, tokens: l, getLineProps: n, getTokenProps: r } = e;
       return (0, a.jsx)(s.dn, { style: o, children: l.map((e, o) => (0, a.jsxs)("span", { ...n({ line: e }), children: [t && (0, a.jsx)("span", { children: o + 1 }), e.map((e, t) => (0, a.jsx)("span", { ...r({ token: e }) }, t)), "\n"] }, o)) });
      },
     })
    );
   }
  },
  9637: (e, t, o) => {
   o.d(t, { Z: () => r });
   var s = o(76373),
    l = o(85427),
    n = o(21524),
    a = (o(75271), o(52676));
   function r() {
    const e = (0, l.s1)()?.map((e) => ("category" === e.type ? { ...e, ...e.items.find((e) => "link" === e.type), label: e.label } : { href: e.href, label: e.label })) || [];
    return (0, a.jsx)(n.Q, { breadcrumbs: e, className: s.k.docs.docBreadcrumbs });
   }
  },
  21581: (e, t, o) => {
   o.d(t, { Z: () => b });
   var s = o(24785),
    l = o(59650),
    n = o(61248),
    a = o(75271),
    r = o(52676);
   function c(e) {
    const t = a.Children.toArray(e.children),
     o = t.find((e) => a.isValidElement(e) && "summary" === e.props?.mdxType),
     s = (0, r.jsx)(r.Fragment, { children: t.filter((e) => e !== o) });
    return (0, r.jsx)(n.Z, { ...e, summary: o, children: s });
   }
   var i = o(32604);
   function d(e) {
    const t = a.Children.map(e.children, (e) =>
     a.isValidElement(e)
      ? (function (e) {
         if (e.props?.mdxType && e.props.originalType) {
          const { ...t } = e.props;
          return a.createElement(e.props.originalType, t);
         }
         return e;
        })(e)
      : e,
    );
    return (0, r.jsx)(i.Z, { ...e, children: t });
   }
   var u = o(41179);
   function p(e) {
    let t,
     o = "";
    if ((0, a.isValidElement)(e.children)) {
     const s = e.children.props,
      l = "string" == typeof s.className ? s.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     l && (t = l[1]), "string" == typeof s.children && (o = s.children);
    }
    return (0, r.jsx)(u.u, { syntax: t, textContent: o, trim: !0 });
   }
   var h = o(55285),
    m = o(78187);
   function b(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.Z, { components: { head: d, code: m.EK, a: m.rU, em: m.j$, pre: p, details: c, ul: m.QI, li: m.AS, img: m.Ee, h1: m.nL, h2: m.XJ, h3: m.aC, h4: m.k8, h5: m.by, h6: m.Cd, admonition: l.Z, mermaid: h.Z }, children: t });
   }
  },
 },
]);
