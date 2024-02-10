"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9817],
 {
  17771: (e, t, n) => {
   n.d(t, { Z: () => a });
   n(50959);
   var s = n(48714),
    i = n(30947),
    r = n(11527);
   function a(e) {
    const { previous: t, next: n } = e;
    return (0, r.jsxs)("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, s.I)({ id: "theme.docs.paginator.navAriaLabel", message: "Docs pages", description: "The ARIA label for the docs pagination" }), children: [t && (0, r.jsx)(i.Z, { ...t, subLabel: (0, r.jsx)(s.Z, { id: "theme.docs.paginator.previous", description: "The label used to navigate to the previous doc", children: "Previous" }) }), n && (0, r.jsx)(i.Z, { ...n, subLabel: (0, r.jsx)(s.Z, { id: "theme.docs.paginator.next", description: "The label used to navigate to the next doc", children: "Next" }), isNext: !0 })] });
   }
  },
  88439: (e, t, n) => {
   n.d(t, { Z: () => o });
   n(50959);
   var s = n(86259),
    i = n(48714),
    r = n(76711),
    a = n(8420),
    l = n(11527);
   function o(e) {
    let { className: t } = e;
    const n = (0, a.E)();
    return n.badge ? (0, l.jsx)("span", { className: (0, s.Z)(t, r.k.docs.docVersionBadge, "badge badge--secondary"), children: (0, l.jsx)(i.Z, { id: "theme.docs.versionBadge.label", values: { versionLabel: n.label }, children: "Version: {versionLabel}" }) }) : null;
   }
  },
  26683: (e, t, n) => {
   n.d(t, { Z: () => x });
   n(50959);
   var s = n(86259),
    i = n(45090),
    r = n(58812),
    a = n(48714),
    l = n(99306),
    o = n(76711),
    c = n(10409),
    d = n(8420),
    u = n(11527);
   const h = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return (0, u.jsx)(a.Z, { id: "theme.docs.versions.unreleasedVersionLabel", description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)("b", { children: n.label }) }, children: "This is unreleased documentation for {siteTitle} {versionLabel} version." });
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return (0, u.jsx)(a.Z, { id: "theme.docs.versions.unmaintainedVersionLabel", description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: (0, u.jsx)("b", { children: n.label }) }, children: "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained." });
    },
   };
   function m(e) {
    const t = h[e.versionMetadata.banner];
    return (0, u.jsx)(t, { ...e });
   }
   function b(e) {
    let { versionLabel: t, to: n, onClick: s } = e;
    return (0, u.jsx)(a.Z, { id: "theme.docs.versions.latestVersionSuggestionLabel", description: "The label used to tell the user to check the latest version", values: { versionLabel: t, latestVersionLink: (0, u.jsx)("b", { children: (0, u.jsx)(r.Z, { to: n, onClick: s, children: (0, u.jsx)(a.Z, { id: "theme.docs.versions.latestVersionLinkLabel", description: "The label used for the latest version suggestion link label", children: "latest version" }) }) }) }, children: "For up-to-date documentation, see the {latestVersionLink} ({versionLabel})." });
   }
   function v(e) {
    let { className: t, versionMetadata: n } = e;
    const {
      siteConfig: { title: r },
     } = (0, i.Z)(),
     { pluginId: a } = (0, l.gA)({ failfast: !0 }),
     { savePreferredVersionName: d } = (0, c.J)(a),
     { latestDocSuggestion: h, latestVersionSuggestion: v } = (0, l.Jo)(a),
     x = h ?? (g = v).docs.find((e) => e.id === g.mainDocId);
    var g;
    return (0, u.jsxs)("div", { className: (0, s.Z)(t, o.k.docs.docVersionBanner, "alert alert--warning margin-bottom--md"), role: "alert", children: [(0, u.jsx)("div", { children: (0, u.jsx)(m, { siteTitle: r, versionMetadata: n }) }), (0, u.jsx)("div", { className: "margin-top--md", children: (0, u.jsx)(b, { versionLabel: v.label, to: x.path, onClick: () => d(v.name) }) })] });
   }
   function x(e) {
    let { className: t } = e;
    const n = (0, d.E)();
    return n.banner ? (0, u.jsx)(v, { className: t, versionMetadata: n }) : null;
   }
  },
  30947: (e, t, n) => {
   n.d(t, { Z: () => a });
   n(50959);
   var s = n(86259),
    i = n(58812),
    r = n(11527);
   function a(e) {
    const { permalink: t, title: n, subLabel: a, isNext: l } = e;
    return (0, r.jsxs)(i.Z, { className: (0, s.Z)("pagination-nav__link", l ? "pagination-nav__link--next" : "pagination-nav__link--prev"), to: t, children: [a && (0, r.jsx)("div", { className: "pagination-nav__sublabel", children: a }), (0, r.jsx)("div", { className: "pagination-nav__label", children: n })] });
   }
  },
  46820: (e, t, n) => {
   n.d(t, { Q: () => b });
   var s = n(58812),
    i = n(28903),
    r = n(90772),
    a = n(35932),
    l = n(16532),
    o = n(86259),
    c = n(50959);
   const d = "breadcrumbs__73z",
    u = "breadcrumbs--mobile_QwgF",
    h = "breadcrumbs--desktop_v9Xv";
   var m = n(11527);
   const b = (e) => {
    let { breadcrumbs: t, ...n } = e;
    const b = [{ href: (0, r.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: v } = (0, i.TH)(),
     x = [...b].reverse().find((e) => e.href !== v);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsx)("div", {
       className: (0, o.Z)(d, h),
       children: (0, m.jsx)(l.Qu, {
        ...n,
        children: b.map((e, t, n) => {
         let { label: s, href: i, rel: r } = e,
          { length: a } = n;
         return (0, m.jsxs)(c.Fragment, { children: [(0, m.jsx)(l.yY, { href: i, current: t === a - 1, disabled: t === a - 1, rel: (0, o.Z)(r, { up: t === a - 2 }), children: s }), t < a - 1 && (0, m.jsx)(l.sc, { children: "/" })] }, t);
        }),
       }),
      }),
      x && (0, m.jsx)("div", { className: (0, o.Z)(d, u), children: (0, m.jsx)(l.hE, { children: (0, m.jsxs)(s.Z, { href: x.href, rel: x.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, m.jsx)(l.JO, { children: (0, m.jsx)(a.Z, {}) }), x.label] }) }) }),
     ],
    });
   };
  },
  9637: (e, t, n) => {
   n.d(t, { Z: () => l });
   var s = n(76711),
    i = n(88097),
    r = n(46820),
    a = (n(50959), n(11527));
   function l() {
    const e = (0, i.s1)()?.map((e) => ("category" === e.type ? { ...e, ...e.items.find((e) => "link" === e.type), label: e.label } : { href: e.href, label: e.label })) || [];
    return (0, a.jsx)(r.Q, { breadcrumbs: e, className: s.k.docs.docBreadcrumbs });
   }
  },
  14986: (e, t, n) => {
   n.r(t), n.d(t, { default: () => I });
   var s = n(48270),
    i = n(88097),
    r = n(90772),
    a = n(9637),
    l = n(58812),
    o = n(48714),
    c = n(16532),
    d = n(86259),
    u = n(50959);
   function h() {
    return (
     (h = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
         }
         return e;
        }),
     h.apply(this, arguments)
    );
   }
   function m(e, t) {
    if (null == e) return {};
    var n,
     s,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       s,
       i = {},
       r = Object.keys(e);
      for (s = 0; s < r.length; s++) (n = r[s]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (s = 0; s < r.length; s++) (n = r[s]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var b = ["size", "color"];
   function v(e) {
    var t = e.size,
     n = void 0 === t ? 24 : t,
     s = e.color,
     i = void 0 === s ? "currentColor" : s,
     r = m(e, b);
    return u.createElement("svg", h({ xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-arrow-narrow-right", width: n, height: n, viewBox: "0 0 24 24", stroke: i, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, r), u.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), u.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }), u.createElement("line", { x1: "15", y1: "16", x2: "19", y2: "12" }), u.createElement("line", { x1: "15", y1: "8", x2: "19", y2: "12" }));
   }
   const x = { card: "card_l9fv", cardTitle: "cardTitle_HoSo", cardDescription: "cardDescription_c27F" };
   var g = n(11527);
   function p(e) {
    let { href: t, icon: n = "", title: s, description: i, linkDescription: r } = e;
    return (0, g.jsxs)("div", { className: (0, d.Z)("card", x.card), children: [(0, g.jsxs)("h2", { className: (0, d.Z)(x.cardTitle), title: s, children: [n, " ", s] }), i && (0, g.jsx)("p", { className: (0, d.Z)(x.cardDescription), title: i, children: i }), (0, g.jsxs)(l.Z, { href: t, className: (0, d.Z)(x.cardLink), children: [r, " ", (0, g.jsx)(c.JO, { children: (0, g.jsx)(v, {}) })] })] });
   }
   function j(e) {
    let { item: t } = e;
    const n = (0, i.LM)(t);
    return n ? (0, g.jsx)(p, { href: n, title: t.label, linkDescription: `Bekijk ${t.label.toLowerCase()} overzicht`, description: t.description ?? (0, o.I)({ message: "{count} items", id: "theme.docs.DocCard.categoryDescription", description: "The default description for a category card in the generated index about how many items this category includes" }, { count: t.items.length }) }) : null;
   }
   function f(e) {
    let { item: t } = e;
    const n = (0, i.xz)(t.docId);
    return (0, g.jsx)(p, { linkDescription: n?.title || t.label, href: t.href, title: t.label, description: t.description ?? n?.description });
   }
   function k(e) {
    let { item: t } = e;
    switch (t.type) {
     case "link":
      return (0, g.jsx)(f, { item: t });
     case "category":
      return (0, g.jsx)(j, { item: t });
     default:
      throw new Error(`unknown item type ${JSON.stringify(t)}`);
    }
   }
   function Z(e) {
    let { className: t } = e;
    const n = (0, i.jA)();
    return (0, g.jsx)(y, { items: n.items, className: t });
   }
   function y(e) {
    const { items: t, className: n } = e;
    if (!t) return (0, g.jsx)(Z, { ...e });
    const s = (0, i.MN)(t);
    return (0, g.jsx)("section", { className: (0, d.Z)("row", n), children: s.map((e, t) => (0, g.jsx)("article", { className: "col col--12 margin-bottom--lg doc-card-list", children: (0, g.jsx)(k, { item: e }) }, t)) });
   }
   var N = n(17771),
    _ = n(88439),
    w = n(26683),
    L = n(88782);
   const T = { generatedIndexPage: "generatedIndexPage_jE6W", list: "list_XVd1", title: "title__lw4", "navbar__items--right": "navbar__items--right_fTHD" };
   function O(e) {
    let { categoryGeneratedIndex: t } = e;
    return (0, g.jsx)(s.d, { title: t.title, description: t.description, keywords: t.keywords, image: (0, r.Z)(t.image) });
   }
   function D(e) {
    let { categoryGeneratedIndex: t } = e;
    const n = (0, i.jA)();
    return (0, g.jsxs)("div", { className: T.generatedIndexPage, children: [(0, g.jsx)(w.Z, {}), (0, g.jsx)(a.Z, {}), (0, g.jsx)(_.Z, {}), (0, g.jsxs)("header", { children: [(0, g.jsx)(L.Z, { as: "h1", className: T.title, children: t.title }), t.description && (0, g.jsx)("p", { children: t.description })] }), (0, g.jsx)("article", { className: "margin-top--lg", children: (0, g.jsx)(y, { items: n.items, className: T.list }) }), (0, g.jsx)("footer", { className: "margin-top--lg", children: (0, g.jsx)(N.Z, { previous: t.navigation.previous, next: t.navigation.next }) })] });
   }
   function I(e) {
    return (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(O, { ...e }), (0, g.jsx)(D, { ...e })] });
   }
  },
 },
]);
