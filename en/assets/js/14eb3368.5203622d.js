"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9817],
 {
  33918: (e, n, t) => {
   t.d(n, { Z: () => a });
   t(75271);
   var s = t(8143),
    i = t(97444),
    r = t(52676);
   function a(e) {
    const { previous: n, next: t } = e;
    return (0, r.jsxs)("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, s.I)({ id: "theme.docs.paginator.navAriaLabel", message: "Docs pages", description: "The ARIA label for the docs pagination" }), children: [n && (0, r.jsx)(i.Z, { ...n, subLabel: (0, r.jsx)(s.Z, { id: "theme.docs.paginator.previous", description: "The label used to navigate to the previous doc", children: "Previous" }) }), t && (0, r.jsx)(i.Z, { ...t, subLabel: (0, r.jsx)(s.Z, { id: "theme.docs.paginator.next", description: "The label used to navigate to the next doc", children: "Next" }), isNext: !0 })] });
   }
  },
  10535: (e, n, t) => {
   t.d(n, { Z: () => o });
   t(75271);
   var s = t(4814),
    i = t(8143),
    r = t(76373),
    a = t(23929),
    l = t(52676);
   function o(e) {
    let { className: n } = e;
    const t = (0, a.E)();
    return t.badge ? (0, l.jsx)("span", { className: (0, s.Z)(n, r.k.docs.docVersionBadge, "badge badge--secondary"), children: (0, l.jsx)(i.Z, { id: "theme.docs.versionBadge.label", values: { versionLabel: t.label }, children: "Version: {versionLabel}" }) }) : null;
   }
  },
  73e3: (e, n, t) => {
   t.d(n, { Z: () => v });
   t(75271);
   var s = t(4814),
    i = t(73200),
    r = t(15854),
    a = t(8143),
    l = t(82508),
    o = t(76373),
    c = t(22258),
    d = t(23929),
    h = t(52676);
   const u = {
    unreleased: function (e) {
     let { siteTitle: n, versionMetadata: t } = e;
     return (0, h.jsx)(a.Z, { id: "theme.docs.versions.unreleasedVersionLabel", description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: n, versionLabel: (0, h.jsx)("b", { children: t.label }) }, children: "This is unreleased documentation for {siteTitle} {versionLabel} version." });
    },
    unmaintained: function (e) {
     let { siteTitle: n, versionMetadata: t } = e;
     return (0, h.jsx)(a.Z, { id: "theme.docs.versions.unmaintainedVersionLabel", description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: n, versionLabel: (0, h.jsx)("b", { children: t.label }) }, children: "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained." });
    },
   };
   function m(e) {
    const n = u[e.versionMetadata.banner];
    return (0, h.jsx)(n, { ...e });
   }
   function x(e) {
    let { versionLabel: n, to: t, onClick: s } = e;
    return (0, h.jsx)(a.Z, { id: "theme.docs.versions.latestVersionSuggestionLabel", description: "The label used to tell the user to check the latest version", values: { versionLabel: n, latestVersionLink: (0, h.jsx)("b", { children: (0, h.jsx)(r.Z, { to: t, onClick: s, children: (0, h.jsx)(a.Z, { id: "theme.docs.versions.latestVersionLinkLabel", description: "The label used for the latest version suggestion link label", children: "latest version" }) }) }) }, children: "For up-to-date documentation, see the {latestVersionLink} ({versionLabel})." });
   }
   function b(e) {
    let { className: n, versionMetadata: t } = e;
    const {
      siteConfig: { title: r },
     } = (0, i.Z)(),
     { pluginId: a } = (0, l.gA)({ failfast: !0 }),
     { savePreferredVersionName: d } = (0, c.J)(a),
     { latestDocSuggestion: u, latestVersionSuggestion: b } = (0, l.Jo)(a),
     v = u ?? (g = b).docs.find((e) => e.id === g.mainDocId);
    var g;
    return (0, h.jsxs)("div", { className: (0, s.Z)(n, o.k.docs.docVersionBanner, "alert alert--warning margin-bottom--md"), role: "alert", children: [(0, h.jsx)("div", { children: (0, h.jsx)(m, { siteTitle: r, versionMetadata: t }) }), (0, h.jsx)("div", { className: "margin-top--md", children: (0, h.jsx)(x, { versionLabel: b.label, to: v.path, onClick: () => d(b.name) }) })] });
   }
   function v(e) {
    let { className: n } = e;
    const t = (0, d.E)();
    return t.banner ? (0, h.jsx)(b, { className: n, versionMetadata: t }) : null;
   }
  },
  97444: (e, n, t) => {
   t.d(n, { Z: () => a });
   t(75271);
   var s = t(4814),
    i = t(15854),
    r = t(52676);
   function a(e) {
    const { permalink: n, title: t, subLabel: a, isNext: l } = e;
    return (0, r.jsxs)(i.Z, { className: (0, s.Z)("pagination-nav__link", l ? "pagination-nav__link--next" : "pagination-nav__link--prev"), to: n, children: [a && (0, r.jsx)("div", { className: "pagination-nav__sublabel", children: a }), (0, r.jsx)("div", { className: "pagination-nav__label", children: t })] });
   }
  },
  21524: (e, n, t) => {
   t.d(n, { Q: () => x });
   var s = t(15854),
    i = t(3225),
    r = t(70155),
    a = t(33137),
    l = t(78187),
    o = t(4814),
    c = t(75271);
   const d = "breadcrumbs__73z",
    h = "breadcrumbs--mobile_QwgF",
    u = "breadcrumbs--desktop_v9Xv";
   var m = t(52676);
   const x = (e) => {
    let { breadcrumbs: n, ...t } = e;
    const x = [{ href: (0, r.Z)("/"), label: "Home", rel: "home" }, ...n],
     { pathname: b } = (0, i.TH)(),
     v = [...x].reverse().find((e) => e.href !== b);
    return (0, m.jsxs)(m.Fragment, {
     children: [
      (0, m.jsx)("div", {
       className: (0, o.Z)(d, u),
       children: (0, m.jsx)(l.Qu, {
        ...t,
        children: x.map((e, n, t) => {
         let { label: s, href: i, rel: r } = e,
          { length: a } = t;
         return (0, m.jsxs)(c.Fragment, { children: [(0, m.jsx)(l.yY, { href: i, current: n === a - 1, disabled: n === a - 1, rel: (0, o.Z)(r, { up: n === a - 2 }), children: s }), n < a - 1 && (0, m.jsx)(l.sc, { children: "/" })] }, n);
        }),
       }),
      }),
      v && (0, m.jsx)("div", { className: (0, o.Z)(d, h), children: (0, m.jsx)(l.hE, { children: (0, m.jsxs)(s.Z, { href: v.href, rel: v.rel, className: "utrecht-link utrecht-link--html-a", children: [(0, m.jsx)(l.JO, { children: (0, m.jsx)(a.Z, {}) }), v.label] }) }) }),
     ],
    });
   };
  },
  9637: (e, n, t) => {
   t.d(n, { Z: () => l });
   var s = t(76373),
    i = t(85427),
    r = t(21524),
    a = (t(75271), t(52676));
   function l() {
    const e = (0, i.s1)()?.map((e) => ("category" === e.type ? { ...e, ...e.items.find((e) => "link" === e.type), label: e.label } : { href: e.href, label: e.label })) || [];
    return (0, a.jsx)(r.Q, { breadcrumbs: e, className: s.k.docs.docBreadcrumbs });
   }
  },
  52059: (e, n, t) => {
   t.r(n), t.d(n, { default: () => V });
   var s = t(21296),
    i = t(85427),
    r = t(70155),
    a = t(9637),
    l = t(15854),
    o = t(40168),
    c = t(78187),
    d = t(4814),
    h = t(75271);
   function u() {
    return (
     (u = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
         }
         return e;
        }),
     u.apply(this, arguments)
    );
   }
   function m(e, n) {
    if (null == e) return {};
    var t,
     s,
     i = (function (e, n) {
      if (null == e) return {};
      var t,
       s,
       i = {},
       r = Object.keys(e);
      for (s = 0; s < r.length; s++) (t = r[s]), n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (s = 0; s < r.length; s++) (t = r[s]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
    }
    return i;
   }
   var x = ["size", "color"];
   function b(e) {
    var n = e.size,
     t = void 0 === n ? 24 : n,
     s = e.color,
     i = void 0 === s ? "currentColor" : s,
     r = m(e, x);
    return h.createElement("svg", u({ xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-arrow-narrow-right", width: t, height: t, viewBox: "0 0 24 24", stroke: i, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, r), h.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), h.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }), h.createElement("line", { x1: "15", y1: "16", x2: "19", y2: "12" }), h.createElement("line", { x1: "15", y1: "8", x2: "19", y2: "12" }));
   }
   const v = { card: "card_l9fv", cardTitle: "cardTitle_HoSo", cardDescription: "cardDescription_c27F" };
   var g = t(52676);
   function j(e) {
    let { href: n, icon: t = "", title: s, description: i, linkDescription: r, children: a } = e;
    return (0, g.jsxs)("div", { className: (0, d.Z)("card", v.card), children: [(0, g.jsxs)("h2", { className: (0, d.Z)(v.cardTitle), children: [t, " ", s] }), i && (0, g.jsx)("p", { className: (0, d.Z)(v.cardDescription), children: i }), a, n && r && (0, g.jsxs)(l.Z, { href: n, className: (0, d.Z)(v.cardLink), children: [r, " ", (0, g.jsx)(c.JO, { children: (0, g.jsx)(b, {}) })] })] });
   }
   function p(e) {
    let { item: n } = e;
    return (0, g.jsx)(j, { title: n.label, description: n.description, children: (0, g.jsx)(o.QI, { children: n.items.filter((e) => "link" === e.type || "category" === e.type).map((e, n) => (0, g.jsx)(o.AS, { children: "link" === e.type ? (0, g.jsx)(l.Z, { to: e.href, children: e.label }) : "category" === e.type ? (0, g.jsxs)(l.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, g.jsx)(g.Fragment, {}) }, n)) }) });
   }
   function f(e) {
    let { item: n } = e;
    const t = (0, i.xz)(n.docId);
    return (0, g.jsx)(j, { linkDescription: t?.title || n.label, href: n.href, title: n.label, description: n.description ?? t?.description });
   }
   function Z(e) {
    let { item: n } = e;
    switch (n.type) {
     case "link":
      return (0, g.jsx)(f, { item: n });
     case "category":
      return (0, g.jsx)(p, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function k(e) {
    let { className: n } = e;
    const t = (0, i.jA)();
    return (0, g.jsx)(y, { items: t.items, className: n });
   }
   function y(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, g.jsx)(k, { ...e });
    const s = (0, i.MN)(n);
    return (0, g.jsx)("section", { className: (0, d.Z)("row", t), children: s.map((e, n) => (0, g.jsx)("article", { className: "col col--12 margin-bottom--lg doc-card-list", children: (0, g.jsx)(Z, { item: e }) }, n)) });
   }
   var N = t(33918),
    _ = t(10535),
    w = t(73e3),
    L = t(64536);
   const T = { generatedIndexPage: "generatedIndexPage_jE6W", list: "list_XVd1", title: "title__lw4", "navbar__items--right": "navbar__items--right_fTHD" };
   function O(e) {
    let { categoryGeneratedIndex: n } = e;
    return (0, g.jsx)(s.d, { title: n.title, description: n.description, keywords: n.keywords, image: (0, r.Z)(n.image) });
   }
   function I(e) {
    let { categoryGeneratedIndex: n } = e;
    const t = (0, i.jA)();
    return (0, g.jsxs)("div", { className: T.generatedIndexPage, children: [(0, g.jsx)(w.Z, {}), (0, g.jsx)(a.Z, {}), (0, g.jsx)(_.Z, {}), (0, g.jsxs)("header", { children: [(0, g.jsx)(L.Z, { as: "h1", className: T.title, children: n.title }), n.description && (0, g.jsx)("p", { children: n.description })] }), (0, g.jsx)("article", { className: "margin-top--lg", children: (0, g.jsx)(y, { items: t.items, className: T.list }) }), (0, g.jsx)("footer", { className: "margin-top--lg", children: (0, g.jsx)(N.Z, { previous: n.navigation.previous, next: n.navigation.next }) })] });
   }
   function V(e) {
    return (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(O, { ...e }), (0, g.jsx)(I, { ...e })] });
   }
  },
 },
]);
