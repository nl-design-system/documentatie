"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [27918],
 {
  21882: (e, t, a) => {
   a.r(t), a.d(t, { default: () => J });
   var n = a(67294),
    l = a(10833),
    r = a(902);
   const o = n.createContext(null);
   function s(e) {
    let { children: t, content: a } = e;
    const l = (function (e) {
     return (0, n.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(a);
    return n.createElement(o.Provider, { value: l }, t);
   }
   function c() {
    const e = (0, n.useContext)(o);
    if (null === e) throw new r.i6("DocProvider");
    return e;
   }
   function i() {
    const { metadata: e, frontMatter: t, assets: a } = c();
    return n.createElement(l.d, { title: e.title, description: e.description, keywords: t.keywords, image: a.image ?? t.image });
   }
   var d = a(86010),
    m = a(87524),
    u = a(80049);
   function p() {
    const { metadata: e } = c();
    return n.createElement(u.Z, { previous: e.previous, next: e.next });
   }
   var h = a(23120),
    v = a(44364),
    b = a(35281),
    E = a(95999);
   function g(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: a } = e;
    return n.createElement(E.Z, { id: "theme.lastUpdated.atDate", description: "The words used to describe on which date a page has been last updated", values: { date: n.createElement("b", null, n.createElement("time", { dateTime: new Date(1e3 * t).toISOString() }, a)) } }, " on {date}");
   }
   function f(e) {
    let { lastUpdatedBy: t } = e;
    return n.createElement(E.Z, { id: "theme.lastUpdated.byUser", description: "The words used to describe by who the page has been last updated", values: { user: n.createElement("b", null, t) } }, " by {user}");
   }
   function Z(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: a, lastUpdatedBy: l } = e;
    return n.createElement("span", { className: b.k.common.lastUpdated }, n.createElement(E.Z, { id: "theme.lastUpdated.lastUpdatedAtBy", description: "The sentence used to display when a page has been last updated, and by who", values: { atDate: t && a ? n.createElement(g, { lastUpdatedAt: t, formattedLastUpdatedAt: a }) : "", byUser: l ? n.createElement(f, { lastUpdatedBy: l }) : "" } }, "Last updated{atDate}{byUser}"), !1);
   }
   var k = a(84881),
    y = a(71526);
   const N = { lastUpdated: "lastUpdated_vwxv" };
   function C(e) {
    return n.createElement("div", { className: (0, d.Z)(b.k.docs.docFooterTagsRow, "row margin-bottom--sm") }, n.createElement("div", { className: "col" }, n.createElement(y.Z, e)));
   }
   function T(e) {
    let { editUrl: t, lastUpdatedAt: a, lastUpdatedBy: l, formattedLastUpdatedAt: r } = e;
    return n.createElement("div", { className: (0, d.Z)(b.k.docs.docFooterEditMetaRow, "row") }, n.createElement("div", { className: "col" }, t && n.createElement(k.Z, { editUrl: t })), n.createElement("div", { className: (0, d.Z)("col", N.lastUpdated) }, (a || l) && n.createElement(Z, { lastUpdatedAt: a, formattedLastUpdatedAt: r, lastUpdatedBy: l })));
   }
   function L() {
    const { metadata: e } = c(),
     { editUrl: t, lastUpdatedAt: a, formattedLastUpdatedAt: l, lastUpdatedBy: r, tags: o } = e,
     s = o.length > 0,
     i = !!(t || a || r);
    return s || i ? n.createElement("footer", { className: (0, d.Z)(b.k.docs.docFooter, "docusaurus-mt-lg") }, s && n.createElement(C, { tags: o }), i && n.createElement(T, { editUrl: t, lastUpdatedAt: a, lastUpdatedBy: r, formattedLastUpdatedAt: l })) : null;
   }
   var _ = a(47186),
    U = a(93743),
    w = a(87462);
   const x = { tocCollapsibleButton: "tocCollapsibleButton_TO0P", tocCollapsibleButtonExpanded: "tocCollapsibleButtonExpanded_MG3E" };
   function A(e) {
    let { collapsed: t, ...a } = e;
    return n.createElement("button", (0, w.Z)({ type: "button" }, a, { className: (0, d.Z)("clean-btn", x.tocCollapsibleButton, !t && x.tocCollapsibleButtonExpanded, a.className) }), n.createElement(E.Z, { id: "theme.TOCCollapsible.toggleButtonLabel", description: "The label used by the button on the collapsible TOC component" }, "On this page"));
   }
   const M = { tocCollapsible: "tocCollapsible_ETCw", tocCollapsibleContent: "tocCollapsibleContent_vkbj", tocCollapsibleExpanded: "tocCollapsibleExpanded_sAul" };
   function B(e) {
    let { toc: t, className: a, minHeadingLevel: l, maxHeadingLevel: r } = e;
    const { collapsed: o, toggleCollapsed: s } = (0, _.u)({ initialState: !0 });
    return n.createElement("div", { className: (0, d.Z)(M.tocCollapsible, !o && M.tocCollapsibleExpanded, a) }, n.createElement(A, { collapsed: o, onClick: s }), n.createElement(_.z, { lazy: !0, className: M.tocCollapsibleContent, collapsed: o }, n.createElement(U.Z, { toc: t, minHeadingLevel: l, maxHeadingLevel: r })));
   }
   const V = { tocMobile: "tocMobile_ITEo" };
   function I() {
    const { toc: e, frontMatter: t } = c();
    return n.createElement(B, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, d.Z)(b.k.docs.docTocMobile, V.tocMobile) });
   }
   var S = a(39407);
   function H() {
    const { toc: e, frontMatter: t } = c();
    return n.createElement(S.Z, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: b.k.docs.docTocDesktop });
   }
   var D = a(92503),
    O = a(88059);
   function F(e) {
    let { children: t } = e;
    const a = (function () {
     const { metadata: e, frontMatter: t, contentTitle: a } = c();
     return t.hide_title || void 0 !== a ? null : e.title;
    })();
    return n.createElement("div", { className: (0, d.Z)(b.k.docs.docMarkdown) }, a && n.createElement("header", null, n.createElement(D.Z, { as: "h1" }, a)), n.createElement(O.Z, null, t));
   }
   var W = a(1832);
   const P = { docItemContainer: "docItemContainer_Djhp", docItemCol: "docItemCol_VOVn" };
   function Q(e) {
    let { children: t } = e;
    const a = (function () {
     const { frontMatter: e, toc: t } = c(),
      a = (0, m.i)(),
      l = e.hide_table_of_contents,
      r = !l && t.length > 0;
     return { hidden: l, mobile: r ? n.createElement(I, null) : void 0, desktop: !r || ("desktop" !== a && "ssr" !== a) ? void 0 : n.createElement(H, null) };
    })();
    return n.createElement("div", { className: "row" }, n.createElement("div", { className: (0, d.Z)("col", !a.hidden && P.docItemCol) }, n.createElement(h.Z, null), n.createElement("div", { className: P.docItemContainer }, n.createElement("article", null, n.createElement(W.Z, null), n.createElement(v.Z, null), a.mobile, n.createElement(F, null, t), n.createElement(L, null)), n.createElement(p, null))), a.desktop && n.createElement("div", { className: "col col--3" }, a.desktop));
   }
   function J(e) {
    const t = `docs-doc-id-${e.content.metadata.unversionedId}`,
     a = e.content;
    return n.createElement(s, { content: e.content }, n.createElement(l.FG, { className: t }, n.createElement(i, null), n.createElement(Q, null, n.createElement(a, null))));
   }
  },
  80049: (e, t, a) => {
   a.d(t, { Z: () => s });
   var n = a(87462),
    l = a(67294),
    r = a(95999),
    o = a(32244);
   function s(e) {
    const { previous: t, next: a } = e;
    return l.createElement("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, r.I)({ id: "theme.docs.paginator.navAriaLabel", message: "Docs pages", description: "The ARIA label for the docs pagination" }) }, t && l.createElement(o.Z, (0, n.Z)({}, t, { subLabel: l.createElement(r.Z, { id: "theme.docs.paginator.previous", description: "The label used to navigate to the previous doc" }, "Previous") })), a && l.createElement(o.Z, (0, n.Z)({}, a, { subLabel: l.createElement(r.Z, { id: "theme.docs.paginator.next", description: "The label used to navigate to the next doc" }, "Next"), isNext: !0 })));
   }
  },
  44364: (e, t, a) => {
   a.d(t, { Z: () => c });
   var n = a(67294),
    l = a(86010),
    r = a(95999),
    o = a(35281),
    s = a(74477);
   function c(e) {
    let { className: t } = e;
    const a = (0, s.E)();
    return a.badge ? n.createElement("span", { className: (0, l.Z)(t, o.k.docs.docVersionBadge, "badge badge--secondary") }, n.createElement(r.Z, { id: "theme.docs.versionBadge.label", values: { versionLabel: a.label } }, "Version: {versionLabel}")) : null;
   }
  },
  23120: (e, t, a) => {
   a.d(t, { Z: () => b });
   var n = a(67294),
    l = a(86010),
    r = a(52263),
    o = a(39960),
    s = a(95999),
    c = a(80143),
    i = a(35281),
    d = a(60373),
    m = a(74477);
   const u = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: a } = e;
     return n.createElement(s.Z, { id: "theme.docs.versions.unreleasedVersionLabel", description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: n.createElement("b", null, a.label) } }, "This is unreleased documentation for {siteTitle} {versionLabel} version.");
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: a } = e;
     return n.createElement(s.Z, { id: "theme.docs.versions.unmaintainedVersionLabel", description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: n.createElement("b", null, a.label) } }, "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.");
    },
   };
   function p(e) {
    const t = u[e.versionMetadata.banner];
    return n.createElement(t, e);
   }
   function h(e) {
    let { versionLabel: t, to: a, onClick: l } = e;
    return n.createElement(s.Z, { id: "theme.docs.versions.latestVersionSuggestionLabel", description: "The label used to tell the user to check the latest version", values: { versionLabel: t, latestVersionLink: n.createElement("b", null, n.createElement(o.Z, { to: a, onClick: l }, n.createElement(s.Z, { id: "theme.docs.versions.latestVersionLinkLabel", description: "The label used for the latest version suggestion link label" }, "latest version"))) } }, "For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).");
   }
   function v(e) {
    let { className: t, versionMetadata: a } = e;
    const {
      siteConfig: { title: o },
     } = (0, r.Z)(),
     { pluginId: s } = (0, c.gA)({ failfast: !0 }),
     { savePreferredVersionName: m } = (0, d.J)(s),
     { latestDocSuggestion: u, latestVersionSuggestion: v } = (0, c.Jo)(s),
     b = u ?? (E = v).docs.find((e) => e.id === E.mainDocId);
    var E;
    return n.createElement("div", { className: (0, l.Z)(t, i.k.docs.docVersionBanner, "alert alert--warning margin-bottom--md"), role: "alert" }, n.createElement("div", null, n.createElement(p, { siteTitle: o, versionMetadata: a })), n.createElement("div", { className: "margin-top--md" }, n.createElement(h, { versionLabel: v.label, to: b.path, onClick: () => m(v.name) })));
   }
   function b(e) {
    let { className: t } = e;
    const a = (0, m.E)();
    return a.banner ? n.createElement(v, { className: t, versionMetadata: a }) : null;
   }
  },
  92503: (e, t, a) => {
   a.d(t, { Z: () => d });
   var n = a(87462),
    l = a(67294),
    r = a(86010),
    o = a(95999),
    s = a(86668),
    c = a(39960);
   const i = { anchorWithStickyNavbar: "anchorWithStickyNavbar_LWe7", anchorWithHideOnScrollNavbar: "anchorWithHideOnScrollNavbar_WYt5" };
   function d(e) {
    let { as: t, id: a, ...d } = e;
    const {
     navbar: { hideOnScroll: m },
    } = (0, s.L)();
    if ("h1" === t || !a) return l.createElement(t, (0, n.Z)({}, d, { id: void 0 }));
    const u = (0, o.I)({ id: "theme.common.headingLinkTitle", message: "Direct link to {heading}", description: "Title for link to heading" }, { heading: "string" == typeof d.children ? d.children : a });
    return l.createElement(t, (0, n.Z)({}, d, { className: (0, r.Z)("anchor", m ? i.anchorWithHideOnScrollNavbar : i.anchorWithStickyNavbar, d.className), id: a }), d.children, l.createElement(c.Z, { className: "hash-link", to: `#${a}`, "aria-label": u, title: u }, "\u200b"));
   }
  },
  26595: (e, t, a) => {
   a.d(t, { Q: () => p });
   var n = a(67294),
    l = a(44996);
   const r = "breadcrumbs__73z",
    o = "breadcrumbs--mobile_QwgF",
    s = "breadcrumbs--desktop_v9Xv";
   var c = a(86010),
    i = a(21209),
    d = a(65663),
    m = a(76775),
    u = a(39960);
   const p = (e) => {
    let { breadcrumbs: t, ...a } = e;
    const p = [{ href: (0, l.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: h } = (0, m.TH)(),
     v = [...p].reverse().find((e) => e.href !== h);
    return n.createElement(
     n.Fragment,
     null,
     n.createElement(
      "div",
      { className: (0, c.Z)(r, s) },
      n.createElement(
       d.Qu,
       a,
       p.map((e, t, a) => {
        let { label: l, href: r, rel: o } = e,
         { length: s } = a;
        return n.createElement(n.Fragment, { key: t }, n.createElement(d.yY, { href: r, current: t === s - 1, disabled: t === s - 1, rel: (0, c.Z)(o, { up: t === s - 2 }) }, l), t < s - 1 && n.createElement(d.sc, null, "/"));
       })
      )
     ),
     v && n.createElement("div", { className: (0, c.Z)(r, o) }, n.createElement(d.hE, null, n.createElement(u.Z, { href: v.href, rel: v.rel, className: "utrecht-link utrecht-link--html-a" }, n.createElement(d.JO, null, n.createElement(i.Z, null)), v.label)))
    );
   };
  },
  1832: (e, t, a) => {
   a.d(t, { Z: () => s });
   var n = a(67294),
    l = a(35281),
    r = a(52802),
    o = a(26595);
   function s() {
    var e;
    const t = (null == (e = (0, r.s1)()) ? void 0 : e.map((e) => ("category" === e.type ? { ...e, ...e.items.find((e) => "link" === e.type), label: e.label } : { href: e.href, label: e.label }))) || [];
    return n.createElement(o.Q, { breadcrumbs: t, className: l.k.docs.docBreadcrumbs });
   }
  },
  88059: (e, t, a) => {
   a.d(t, { Z: () => v });
   var n = a(67294),
    l = a(3905),
    r = a(35742);
   function o(e) {
    const t = n.Children.map(e.children, (e) =>
     n.isValidElement(e)
      ? (function (e) {
         var t;
         if (null != (t = e.props) && t.mdxType && e.props.originalType) {
          const { mdxType: t, originalType: a, ...l } = e.props;
          return n.createElement(e.props.originalType, l);
         }
         return e;
        })(e)
      : e
    );
    return n.createElement(r.Z, e, t);
   }
   var s = a(74464);
   function c(e) {
    var t;
    return n.createElement(s.Z, (0, n.isValidElement)(e.children) && "code" === (null == (t = e.children.props) ? void 0 : t.originalType) ? e.children.props : { ...e });
   }
   var i = a(87462),
    d = a(34673);
   function m(e) {
    const t = n.Children.toArray(e.children),
     a = t.find((e) => {
      var t;
      return n.isValidElement(e) && "summary" === (null == (t = e.props) ? void 0 : t.mdxType);
     }),
     l = n.createElement(
      n.Fragment,
      null,
      t.filter((e) => e !== a)
     );
    return n.createElement(d.Z, (0, i.Z)({}, e, { summary: a }), l);
   }
   var u = a(23612),
    p = a(11875),
    h = a(65663);
   function v(e) {
    let { children: t } = e;
    return n.createElement(l.Zo, { components: { head: o, code: h.EK, a: h.rU, em: h.j$, pre: c, p: h.nv, details: m, ul: h.QI, li: h.AS, img: h.Ee, h1: h.nL, h2: h.XJ, h3: h.aC, h4: h.k8, h5: h.by, h6: h.Cd, admonition: u.Z, mermaid: p.Z } }, t);
   }
  },
 },
]);
