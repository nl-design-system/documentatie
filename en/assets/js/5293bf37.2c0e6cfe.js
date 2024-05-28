"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6004],
 {
  94949: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => c, frontMatter: () => s, metadata: () => d, toc: () => r });
   var a = t(52676),
    i = t(24785);
   const s = { title: "Estafettemodeldag", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Estafettemodeldag", pagination_label: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/community/events/estafettemodeldag" },
    o = "Estafettemodeldag",
    d = { id: "community/events/estafettemodeldag", title: "Estafettemodeldag", description: "Op estafettemodeldagen gaan we met designers en developers langs componenten, om na te gaan of ze voldoen aan onze Definition of Done.", source: "@site/docs/community/events/estafettemodeldag.mdx", sourceDirName: "community/events", slug: "/community/events/estafettemodeldag", permalink: "/en/community/events/estafettemodeldag", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/estafettemodeldag.mdx", tags: [], version: "current", frontMatter: { title: "Estafettemodeldag", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Estafettemodeldag", pagination_label: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/community/events/estafettemodeldag" }, sidebar: "community", previous: { title: "Tijdens de Design Open Dag komen designers bij elkaar om samen te werken aan designvraagstukken.", permalink: "/en/events/design-open-dag" }, next: { title: "Wie doet mee?", permalink: "/en/community/wie-doet-mee" } },
    l = {},
    r = [
     { value: "Planning", id: "planning", level: 2 },
     { value: "Aanmelden", id: "aanmelden", level: 2 },
    ];
   function m(e) {
    const n = { a: "a", h1: "h1", h2: "h2", li: "li", p: "p", strong: "strong", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: "estafettemodeldag", children: "Estafettemodeldag" }), "\n", (0, a.jsxs)(n.p, { children: ["Op ", (0, a.jsx)(n.strong, { children: "estafettemodeldagen" }), " gaan we met designers en developers langs componenten, om na te gaan of ze voldoen aan onze ", (0, a.jsx)(n.a, { href: "/componenten/definition-of-done", children: "Definition of Done" }), "."] }), "\n", (0, a.jsxs)(n.p, { children: ["Zo krijgen we inzicht in welke componenten welke status hebben, en werken we toe naar het verder brengen van componenten via het ", (0, a.jsx)(n.a, { href: "/handboek/estafettemodel/", children: "estafettemodel" }), "."] }), "\n", (0, a.jsx)(n.h2, { id: "planning", children: "Planning" }), "\n", (0, a.jsx)(n.p, { children: "Dit is de planning van onze estafettemodeldagen in 2024:" }), "\n", (0, a.jsxs)(n.ul, { children: ["\n", (0, a.jsx)(n.li, { children: "vrijdag 31 mei, 12:30 - 16:00 (Utrecht)" }), "\n", (0, a.jsx)(n.li, { children: "woensdag 26 juni, 13:00 - 16:30 (Utrecht)" }), "\n", (0, a.jsx)(n.li, { children: "woensdag 25 september" }), "\n", (0, a.jsx)(n.li, { children: "woensdag 30 oktober" }), "\n", (0, a.jsx)(n.li, { children: "woensdag 27 november" }), "\n"] }), "\n", (0, a.jsx)(n.h2, { id: "aanmelden", children: "Aanmelden" }), "\n", (0, a.jsx)(n.p, { children: "Estafettenmodeldagen zijn publiek toegankelijk, zolang er ruimte is. We proberen uit te komen op een goede mix van community (organisaties + leveranciers) en kernteam." }), "\n", (0, a.jsxs)(n.p, { children: ["Doe je mee? Mail het ", (0, a.jsx)(n.a, { href: "/project/kernteam", children: "kernteam" }), " of stuur \xe9\xe9n van ons een DM op Slack om je aan te melden."] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => o });
   var a = t(75271);
   const i = {},
    s = a.createContext(i);
   function o(e) {
    const n = a.useContext(s);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), a.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
