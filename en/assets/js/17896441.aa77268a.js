"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7918],
 {
  47568: (e, t, s) => {
   s.r(t), s.d(t, { default: () => R });
   var o = s(50959),
    l = s(69254),
    n = s(13408),
    a = s(11527);
   const r = o.createContext(null);
   function c(e) {
    let { children: t, content: s } = e;
    const l = (function (e) {
     return (0, o.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(s);
    return (0, a.jsx)(r.Provider, { value: l, children: t });
   }
   function d() {
    const e = (0, o.useContext)(r);
    if (null === e) throw new n.i6("DocProvider");
    return e;
   }
   function i() {
    const { metadata: e, frontMatter: t, assets: s } = d();
    return (0, a.jsx)(l.d, { title: e.title, description: e.description, keywords: t.keywords, image: s.image ?? t.image });
   }
   var u = s(86259),
    p = s(68781),
    h = s(8200);
   function m() {
    const { metadata: e } = d();
    return (0, a.jsx)(h.Z, { previous: e.previous, next: e.next });
   }
   var b = s(66500),
    v = s(75801),
    x = s(94560),
    y = s(92954);
   function j(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: s } = e;
    return (0, a.jsx)(y.Z, { id: "theme.lastUpdated.atDate", description: "The words used to describe on which date a page has been last updated", values: { date: (0, a.jsx)("b", { children: (0, a.jsx)("time", { dateTime: new Date(1e3 * t).toISOString(), children: s }) }) }, children: " on {date}" });
   }
   function g(e) {
    let { lastUpdatedBy: t } = e;
    return (0, a.jsx)(y.Z, { id: "theme.lastUpdated.byUser", description: "The words used to describe by who the page has been last updated", values: { user: (0, a.jsx)("b", { children: t }) }, children: " by {user}" });
   }
   function f(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: s, lastUpdatedBy: o } = e;
    return (0, a.jsxs)("span", { className: x.k.common.lastUpdated, children: [(0, a.jsx)(y.Z, { id: "theme.lastUpdated.lastUpdatedAtBy", description: "The sentence used to display when a page has been last updated, and by who", values: { atDate: t && s ? (0, a.jsx)(j, { lastUpdatedAt: t, formattedLastUpdatedAt: s }) : "", byUser: o ? (0, a.jsx)(g, { lastUpdatedBy: o }) : "" }, children: "Last updated{atDate}{byUser}" }), !1] });
   }
   var k = s(15951),
    Z = s(53548);
   const C = { lastUpdated: "lastUpdated_hc_C" };
   function N(e) {
    return (0, a.jsx)("div", { className: (0, u.Z)(x.k.docs.docFooterTagsRow, "row margin-bottom--sm"), children: (0, a.jsx)("div", { className: "col", children: (0, a.jsx)(Z.Z, { ...e }) }) });
   }
   function _(e) {
    let { editUrl: t, lastUpdatedAt: s, lastUpdatedBy: o, formattedLastUpdatedAt: l } = e;
    return (0, a.jsxs)("div", { className: (0, u.Z)(x.k.docs.docFooterEditMetaRow, "row"), children: [(0, a.jsx)("div", { className: "col", children: t && (0, a.jsx)(k.Z, { editUrl: t }) }), (0, a.jsx)("div", { className: (0, u.Z)("col", C.lastUpdated), children: (s || o) && (0, a.jsx)(f, { lastUpdatedAt: s, formattedLastUpdatedAt: l, lastUpdatedBy: o }) })] });
   }
   function L() {
    const { metadata: e } = d(),
     { editUrl: t, lastUpdatedAt: s, formattedLastUpdatedAt: o, lastUpdatedBy: l, tags: n } = e,
     r = n.length > 0,
     c = !!(t || s || l);
    return r || c ? (0, a.jsxs)("footer", { className: (0, u.Z)(x.k.docs.docFooter, "docusaurus-mt-lg"), children: [r && (0, a.jsx)(N, { tags: n }), c && (0, a.jsx)(_, { editUrl: t, lastUpdatedAt: s, lastUpdatedBy: l, formattedLastUpdatedAt: o })] }) : null;
   }
   var T = s(29893),
    U = s(87769);
   const w = { tocCollapsibleButton: "tocCollapsibleButton_B3q6", tocCollapsibleButtonExpanded: "tocCollapsibleButtonExpanded_MBlg" };
   function B(e) {
    let { collapsed: t, ...s } = e;
    return (0, a.jsx)("button", { type: "button", ...s, className: (0, u.Z)("clean-btn", w.tocCollapsibleButton, !t && w.tocCollapsibleButtonExpanded, s.className), children: (0, a.jsx)(y.Z, { id: "theme.TOCCollapsible.toggleButtonLabel", description: "The label used by the button on the collapsible TOC component", children: "On this page" }) });
   }
   const A = { tocCollapsible: "tocCollapsible_fSEh", tocCollapsibleContent: "tocCollapsibleContent_OROs", tocCollapsibleExpanded: "tocCollapsibleExpanded_or2w" };
   function M(e) {
    let { toc: t, className: s, minHeadingLevel: o, maxHeadingLevel: l } = e;
    const { collapsed: n, toggleCollapsed: r } = (0, T.u)({ initialState: !0 });
    return (0, a.jsxs)("div", { className: (0, u.Z)(A.tocCollapsible, !n && A.tocCollapsibleExpanded, s), children: [(0, a.jsx)(B, { collapsed: n, onClick: r }), (0, a.jsx)(T.z, { lazy: !0, className: A.tocCollapsibleContent, collapsed: n, children: (0, a.jsx)(U.Z, { toc: t, minHeadingLevel: o, maxHeadingLevel: l }) })] });
   }
   const S = { tocMobile: "tocMobile__qW_" };
   function E() {
    const { toc: e, frontMatter: t } = d();
    return (0, a.jsx)(M, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, u.Z)(x.k.docs.docTocMobile, S.tocMobile) });
   }
   var V = s(9967);
   function I() {
    const { toc: e, frontMatter: t } = d();
    return (0, a.jsx)(V.Z, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: x.k.docs.docTocDesktop });
   }
   var F = s(33260),
    H = s(21581);
   function D(e) {
    let { children: t } = e;
    const s = (function () {
     const { metadata: e, frontMatter: t, contentTitle: s } = d();
     return t.hide_title || void 0 !== s ? null : e.title;
    })();
    return (0, a.jsxs)("div", { className: (0, u.Z)(x.k.docs.docMarkdown), children: [s && (0, a.jsx)("header", { children: (0, a.jsx)(F.Z, { as: "h1", children: s }) }), (0, a.jsx)(H.Z, { children: t })] });
   }
   var O = s(9637),
    P = s(56379);
   const Q = { docItemContainer: "docItemContainer_sdSw", docItemCol: "docItemCol_ErwF" };
   function J(e) {
    let { children: t } = e;
    const s = (function () {
      const { frontMatter: e, toc: t } = d(),
       s = (0, p.i)(),
       o = e.hide_table_of_contents,
       l = !o && t.length > 0;
      return { hidden: o, mobile: l ? (0, a.jsx)(E, {}) : void 0, desktop: !l || ("desktop" !== s && "ssr" !== s) ? void 0 : (0, a.jsx)(I, {}) };
     })(),
     {
      metadata: { unlisted: o },
     } = d();
    return (0, a.jsxs)("div", { className: "row", children: [(0, a.jsxs)("div", { className: (0, u.Z)("col", !s.hidden && Q.docItemCol), children: [o && (0, a.jsx)(P.Z, {}), (0, a.jsx)(b.Z, {}), (0, a.jsxs)("div", { className: Q.docItemContainer, children: [(0, a.jsxs)("article", { children: [(0, a.jsx)(O.Z, {}), (0, a.jsx)(v.Z, {}), s.mobile, (0, a.jsx)(D, { children: t }), (0, a.jsx)(L, {})] }), (0, a.jsx)(m, {})] })] }), s.desktop && (0, a.jsx)("div", { className: "col col--3", children: s.desktop })] });
   }
   function R(e) {
    const t = `docs-doc-id-${e.content.metadata.id}`,
     s = e.content;
    return (0, a.jsx)(c, { content: e.content, children: (0, a.jsxs)(l.FG, { className: t, children: [(0, a.jsx)(i, {}), (0, a.jsx)(J, { children: (0, a.jsx)(s, {}) })] }) });
   }
  },
  8200: (e, t, s) => {
   s.d(t, { Z: () => a });
   s(50959);
   var o = s(92954),
    l = s(24220),
    n = s(11527);
   function a(e) {
    const { previous: t, next: s } = e;
    return (0, n.jsxs)("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, o.I)({ id: "theme.docs.paginator.navAriaLabel", message: "Docs pages", description: "The ARIA label for the docs pagination" }), children: [t && (0, n.jsx)(l.Z, { ...t, subLabel: (0, n.jsx)(o.Z, { id: "theme.docs.paginator.previous", description: "The label used to navigate to the previous doc", children: "Previous" }) }), s && (0, n.jsx)(l.Z, { ...s, subLabel: (0, n.jsx)(o.Z, { id: "theme.docs.paginator.next", description: "The label used to navigate to the next doc", children: "Next" }), isNext: !0 })] });
   }
  },
  75801: (e, t, s) => {
   s.d(t, { Z: () => c });
   s(50959);
   var o = s(86259),
    l = s(92954),
    n = s(94560),
    a = s(16613),
    r = s(11527);
   function c(e) {
    let { className: t } = e;
    const s = (0, a.E)();
    return s.badge ? (0, r.jsx)("span", { className: (0, o.Z)(t, n.k.docs.docVersionBadge, "badge badge--secondary"), children: (0, r.jsx)(l.Z, { id: "theme.docs.versionBadge.label", values: { versionLabel: s.label }, children: "Version: {versionLabel}" }) }) : null;
   }
  },
  66500: (e, t, s) => {
   s.d(t, { Z: () => v });
   s(50959);
   var o = s(86259),
    l = s(6417),
    n = s(47800),
    a = s(92954),
    r = s(89474),
    c = s(94560),
    d = s(79410),
    i = s(16613),
    u = s(11527);
   const p = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: s } = e;
     return (0, u.jsx)(a.Z, { id: "theme.docs.versions.unreleasedVersionLabel", description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)("b", { children: s.label }) }, children: "This is unreleased documentation for {siteTitle} {versionLabel} version." });
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: s } = e;
     return (0, u.jsx)(a.Z, { id: "theme.docs.versions.unmaintainedVersionLabel", description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)("b", { children: s.label }) }, children: "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained." });
    },
   };
   function h(e) {
    const t = p[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function m(e) {
    let { versionLabel: t, to: s, onClick: o } = e;
    return (0, u.jsx)(a.Z, { id: "theme.docs.versions.latestVersionSuggestionLabel", description: "The label used to tell the user to check the latest version", values: { versionLabel: t, latestVersionLink: (0, u.jsx)("b", { children: (0, u.jsx)(n.Z, { to: s, onClick: o, children: (0, u.jsx)(a.Z, { id: "theme.docs.versions.latestVersionLinkLabel", description: "The label used for the latest version suggestion link label", children: "latest version" }) }) }) }, children: "For up-to-date documentation, see the {latestVersionLink} ({versionLabel})." });
   }
   function b(e) {
    let { className: t, versionMetadata: s } = e;
    const {
      siteConfig: { title: n },
     } = (0, l.Z)(),
     { pluginId: a } = (0, r.gA)({ failfast: !0 }),
     { savePreferredVersionName: i } = (0, d.J)(a),
     { latestDocSuggestion: p, latestVersionSuggestion: b } = (0, r.Jo)(a),
     v = p ?? (x = b).docs.find((e) => e.id === x.mainDocId);
    var x;
    return (0, u.jsxs)("div", { className: (0, o.Z)(t, c.k.docs.docVersionBanner, "alert alert--warning margin-bottom--md"), role: "alert", children: [(0, u.jsx)("div", { children: (0, u.jsx)(h, { siteTitle: n, versionMetadata: s }) }), (0, u.jsx)("div", { className: "margin-top--md", children: (0, u.jsx)(m, { versionLabel: b.label, to: v.path, onClick: () => i(b.name) }) })] });
   }
   function v(e) {
    let { className: t } = e;
    const s = (0, i.E)();
    return s.banner ? (0, u.jsx)(b, { className: t, versionMetadata: s }) : null;
   }
  },
  56379: (e, t, s) => {
   s.d(t, { Z: () => h });
   s(50959);
   var o = s(86259),
    l = s(92954),
    n = s(78578),
    a = s(11527);
   function r() {
    return (0, a.jsx)(l.Z, { id: "theme.unlistedContent.title", description: "The unlisted content banner title", children: "Unlisted page" });
   }
   function c() {
    return (0, a.jsx)(l.Z, { id: "theme.unlistedContent.message", description: "The unlisted content banner message", children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it." });
   }
   function d() {
    return (0, a.jsx)(n.Z, { children: (0, a.jsx)("meta", { name: "robots", content: "noindex, nofollow" }) });
   }
   var i = s(94560),
    u = s(40976);
   function p(e) {
    let { className: t } = e;
    return (0, a.jsx)(u.Z, { type: "caution", title: (0, a.jsx)(r, {}), className: (0, o.Z)(t, i.k.common.unlistedBanner), children: (0, a.jsx)(c, {}) });
   }
   function h(e) {
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(d, {}), (0, a.jsx)(p, { ...e })] });
   }
  },
  46820: (e, t, s) => {
   s.d(t, { Q: () => m });
   var o = s(47800),
    l = s(28903),
    n = s(81989),
    a = s(35932),
    r = s(16532),
    c = s(86259),
    d = s(50959);
   const i = "breadcrumbs__73z",
    u = "breadcrumbs--mobile_QwgF",
    p = "breadcrumbs--desktop_v9Xv";
   var h = s(11527);
   const m = (e) => {
    let { breadcrumbs: t, ...s } = e;
    const m = [{ href: (0, n.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: b } = (0, l.TH)(),
     v = [...m].reverse().find((e) => e.href !== b);
    return (0, h.jsxs)(h.Fragment, {
     children: [
      (0, h.jsx)("div", {
       className: (0, c.Z)(i, p),
       children: (0, h.jsx)(r.Qu, {
        ...s,
        children: m.map((e, t, s) => {
         let { label: o, href: l, rel: n } = e,
          { length: a } = s;
         return (0, h.jsxs)(d.Fragment, { children: [(0, h.jsx)(r.yY, { href: l, current: t === a - 1, disabled: t === a - 1, rel: (0, c.Z)(n, { up: t === a - 2 }), children: o }), t < a - 1 && (0, h.jsx)(r.sc, { children: "/" })] }, t);
        }),
       }),
      }),
      v && (0, h.jsx)("div", { className: (0, c.Z)(i, u), children: (0, h.jsx)(r.hE, { children: (0, h.jsxs)(o.Z, { href: v.href, rel: v.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, h.jsx)(r.JO, { children: (0, h.jsx)(a.Z, {}) }), v.label] }) }) }),
     ],
    });
   };
  },
  41179: (e, t, s) => {
   s.d(t, { u: () => r });
   var o = s(16532),
    l = s(2425);
   s(50959);
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
   var a = s(11527);
   function r(e) {
    let { lineNumber: t, syntax: s, textContent: r, trim: c } = e,
     d = r;
    return (
     c && (d = d.trim()),
     (0, a.jsx)(l.y$, {
      theme: n,
      code: d,
      language: s || "",
      children: (e) => {
       let { style: s, tokens: l, getLineProps: n, getTokenProps: r } = e;
       return (0, a.jsx)(o.dn, { style: s, children: l.map((e, s) => (0, a.jsxs)("span", { ...n({ line: e }), children: [t && (0, a.jsx)("span", { children: s + 1 }), e.map((e, t) => (0, a.jsx)("span", { ...r({ token: e }) }, t)), "\n"] }, s)) });
      },
     })
    );
   }
  },
  9637: (e, t, s) => {
   s.d(t, { Z: () => r });
   var o = s(94560),
    l = s(44559),
    n = s(46820),
    a = (s(50959), s(11527));
   function r() {
    const e = (0, l.s1)()?.map((e) => ("category" === e.type ? { ...e, ...e.items.find((e) => "link" === e.type), label: e.label } : { href: e.href, label: e.label })) || [];
    return (0, a.jsx)(n.Q, { breadcrumbs: e, className: o.k.docs.docBreadcrumbs });
   }
  },
  21581: (e, t, s) => {
   s.d(t, { Z: () => b });
   var o = s(80877),
    l = s(40976),
    n = s(80697),
    a = s(50959),
    r = s(11527);
   function c(e) {
    const t = a.Children.toArray(e.children),
     s = t.find((e) => a.isValidElement(e) && "summary" === e.props?.mdxType),
     o = (0, r.jsx)(r.Fragment, { children: t.filter((e) => e !== s) });
    return (0, r.jsx)(n.Z, { ...e, summary: s, children: o });
   }
   var d = s(78578);
   function i(e) {
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
    return (0, r.jsx)(d.Z, { ...e, children: t });
   }
   var u = s(41179);
   function p(e) {
    let t,
     s = "";
    if ((0, a.isValidElement)(e.children)) {
     const o = e.children.props,
      l = "string" == typeof o.className ? o.className.match(/(?:^|.*\s)(?:language-)([^\s]+)(?:\s+|$)/) : null;
     l && (t = l[1]), "string" == typeof o.children && (s = o.children);
    }
    return (0, r.jsx)(u.u, { syntax: t, textContent: s, trim: !0 });
   }
   var h = s(77010),
    m = s(16532);
   function b(e) {
    let { children: t } = e;
    return (0, r.jsx)(o.Z, { components: { head: i, code: m.EK, a: m.rU, em: m.j$, pre: p, details: c, ul: m.QI, li: m.AS, img: m.Ee, h1: m.nL, h2: m.XJ, h3: m.aC, h4: m.k8, h5: m.by, h6: m.Cd, admonition: l.Z, mermaid: h.Z }, children: t });
   }
  },
 },
]);
