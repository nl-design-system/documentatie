"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [374],
 {
  16437: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => a, contentTitle: () => r, default: () => m, frontMatter: () => s, metadata: () => l, toc: () => c });
   var t = o(11527),
    i = o(80877);
   const s = { title: "Colofon", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Colofon", pagination_label: "Colofon", description: "Colofon - opsomming van de manier waarop deze website tot stand is gekomen", slug: "/colofon" },
    r = "Colofon",
    l = { id: "footer/colofon", title: "Colofon", description: "Colofon - opsomming van de manier waarop deze website tot stand is gekomen", source: "@site/docs/footer/colofon.mdx", sourceDirName: "footer", slug: "/colofon", permalink: "/colofon", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/footer/colofon.mdx", tags: [], version: "current", frontMatter: { title: "Colofon", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Colofon", pagination_label: "Colofon", description: "Colofon - opsomming van de manier waarop deze website tot stand is gekomen", slug: "/colofon" } },
    a = {},
    c = [
     { value: "Over deze website", id: "over-deze-website", level: 2 },
     { value: "Iconen", id: "iconen", level: 2 },
    ];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: "colofon", children: "Colofon" }), "\n", (0, t.jsx)(n.h2, { id: "over-deze-website", children: "Over deze website" }), "\n", (0, t.jsxs)(n.p, { children: ["De website wordt gemaakt en onderhouden door het kernteam en is nog volop in ontwikkeling. Mocht u vragen of opmerkingen hebben dan kunt u contact met ons opnemen op ons centrale e-mailadres: ", (0, t.jsx)("a", { href: "mailto:kernteam@nldesignsystem.nl", children: (0, t.jsx)(n.a, { href: "mailto:kernteam@nldesignsystem.nl", children: "kernteam@nldesignsystem.nl" }) }), "."] }), "\n", (0, t.jsx)(n.h2, { id: "iconen", children: "Iconen" }), "\n", (0, t.jsxs)(n.p, { children: ["De toptaak iconen op onze homepage zijn gemaakt door ", (0, t.jsx)("a", { href: "https://www.opengemeenten.nl/producten/iconenset", target: "_top", children: "OpenGemeenten" }), ". Deze iconenset is vrij te gebruiken en valt onder de CC BY-SA 4.0-licentie."] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
  },
  80877: (e, n, o) => {
   o.d(n, { Z: () => l, a: () => r });
   var t = o(50959);
   const i = {},
    s = t.createContext(i);
   function r(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
