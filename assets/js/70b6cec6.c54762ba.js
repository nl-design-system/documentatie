"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3464],
 {
  40270: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => a, contentTitle: () => s, default: () => u, frontMatter: () => i, metadata: () => d, toc: () => k });
   var r = o(11527),
    t = o(27034);
   const i = { title: "Gebruikersonderzoek", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Gebruikersonderzoek", sidebar_position: 1, pagination_label: "Overzicht", description: "Gebruikersonderzoek", keywords: ["index", "onderzoek"] },
    s = "Gebruikersonderzoek",
    d = { id: "onderzoek/README", title: "Gebruikersonderzoek", description: "Gebruikersonderzoek", source: "@site/docs/onderzoek/README.md", sourceDirName: "onderzoek", slug: "/onderzoek/", permalink: "/onderzoek/", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/onderzoek/README.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Gebruikersonderzoek", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Gebruikersonderzoek", sidebar_position: 1, pagination_label: "Overzicht", description: "Gebruikersonderzoek", keywords: ["index", "onderzoek"] }, sidebar: "onderzoek" },
    a = {},
    k = [{ value: "Lopend onderzoek", id: "lopend-onderzoek", level: 2 }];
   function l(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: "gebruikersonderzoek", children: "Gebruikersonderzoek" }), "\n", (0, r.jsx)(n.p, { children: "In de community wordt veel gebruikersonderzoek gedaan. Omdat je veel van elkaars onderzoeksresultaten kan leren en onderzoeken over hetzelfde onderwerp kan vergelijken is de NL Design System community begonnen met het verzamelen en publiceren op een toegankelijke manier." }), "\n", (0, r.jsxs)(n.p, { children: ["De onderzoeken die al gedeeld zijn kan je vinden op ", (0, r.jsx)(n.a, { href: "http://gebruikersonderzoeken.nl", children: "gebruikersonderzoeken.nl" })] }), "\n", (0, r.jsxs)(n.p, { children: ["Heb jij ook gebruikersonderzoek gedaan en wil je de uitkomsten delen? Dat kan via een issue op ", (0, r.jsx)(n.a, { href: "https://github.com/nl-design-system/gebruikersonderzoeken", children: "gebruikersonderzoeken op GitHub" }), "."] }), "\n", (0, r.jsx)(n.h2, { id: "lopend-onderzoek", children: "Lopend onderzoek" }), "\n", (0, r.jsxs)(n.p, { children: ["Ga je onderzoek doen, ben je bezig van het uitwerken van resultaten of heb je een design waarvan je je afvraagt of iemand daar al onderzoek naar heeft gedaan? Dan kun je hiervoor de ", (0, r.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/discussions", children: "discussies op GitHub" }), " gebruiken."] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  27034: (e, n, o) => {
   o.d(n, { Z: () => d, a: () => s });
   var r = o(50959);
   const t = {},
    i = r.createContext(t);
   function s(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
