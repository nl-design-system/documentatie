"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6574],
 {
  75687: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => j, contentTitle: () => c, default: () => u, frontMatter: () => o, metadata: () => d, toc: () => a });
   var t = i(11527),
    r = i(80877);
   function s(e) {
    const n = { a: "a", em: "em", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "over-deze-richtlijnen", children: "Over deze richtlijnen" }), "\n", (0, t.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ", (0, t.jsx)(n.em, { children: "beta" }), "."] }), "\n", (0, t.jsxs)(n.p, { children: ["We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
   const o = { title: "Richtlijnen voor stijl", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Introductie stijl", sidebar_position: 1, pagination_label: "Introductie", description: "Richtlijnen voor stijl" },
    c = "Introductie richtlijnen voor stijl",
    d = { id: "richtlijnen/stijl/README", title: "Richtlijnen voor stijl", description: "Richtlijnen voor stijl", source: "@site/docs/richtlijnen/stijl/README.md", sourceDirName: "richtlijnen/stijl", slug: "/richtlijnen/stijl/", permalink: "/en/richtlijnen/stijl/", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/README.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Richtlijnen voor stijl", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Introductie stijl", sidebar_position: 1, pagination_label: "Introductie", description: "Richtlijnen voor stijl" }, sidebar: "richtlijnen", previous: { title: "Stijl", permalink: "/en/richtlijnen/stijl/overzicht" }, next: { title: "Typografie", permalink: "/en/richtlijnen/stijl/typografie" } },
    j = {},
    a = [{ value: "Opzet", id: "opzet", level: 2 }];
   function h(e) {
    const n = { a: "a", h1: "h1", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: "introductie-richtlijnen-voor-stijl", children: "Introductie richtlijnen voor stijl" }), "\n", (0, t.jsx)(n.p, { children: "Het NL Design System geeft richtlijnen voor stijl en visueel ontwerp. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek." }), "\n", (0, t.jsx)(n.h2, { id: "opzet", children: "Opzet" }), "\n", (0, t.jsx)(n.p, { children: "De richtlijnen zijn onderverdeeld in een aantal pagina's per onderwerp:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: "/en/richtlijnen/stijl/typografie", children: "Typografie" }) }), "\n", (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: "/en/richtlijnen/stijl/kleuren", children: "Kleuren" }) }), "\n", (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: "/en/richtlijnen/stijl/ruimte", children: "Ruimte" }) }), "\n", (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: "/en/richtlijnen/stijl/iconen", children: "Iconen" }) }), "\n"] }), "\n", (0, t.jsx)(l, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  80877: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => l });
   var t = i(50959);
   const r = {},
    s = t.createContext(r);
   function l(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
