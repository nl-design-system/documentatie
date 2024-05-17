"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1484],
 {
  8458: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => r, default: () => c, frontMatter: () => a, metadata: () => l, toc: () => o });
   var t = i(11527),
    s = i(80877);
   const a = { title: "Design Open Dag", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Design Open Dag", pagination_label: "Design Open Dag is een samenwerkdag waar designers met elkaar werken aan ontwerpproblemen.", slug: "/events/design-open-dag" },
    r = "Design Open Dag",
    l = { id: "community/events/design-open-dag", title: "Design Open Dag", description: "Op de Design Open Dag komen designers bij elkaar om samen te werken aan designvraagstukken.", source: "@site/docs/community/events/design-open-dag.mdx", sourceDirName: "community/events", slug: "/events/design-open-dag", permalink: "/en/events/design-open-dag", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-dag.mdx", tags: [], version: "current", frontMatter: { title: "Design Open Dag", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Design Open Dag", pagination_label: "Design Open Dag is een samenwerkdag waar designers met elkaar werken aan ontwerpproblemen.", slug: "/events/design-open-dag" }, sidebar: "community", previous: { title: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", permalink: "/en/events/design-open-hour/aanmelden" }, next: { title: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", permalink: "/en/community/events/estafettemodeldag" } },
    d = {},
    o = [
     { value: "Planning", id: "planning", level: 2 },
     { value: "Aanmelden", id: "aanmelden", level: 2 },
    ];
   function g(e) {
    const n = { a: "a", h1: "h1", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: "design-open-dag", children: "Design Open Dag" }), "\n", (0, t.jsx)(n.p, { children: "Op de Design Open Dag komen designers bij elkaar om samen te werken aan designvraagstukken." }), "\n", (0, t.jsx)(n.h2, { id: "planning", children: "Planning" }), "\n", (0, t.jsx)(n.p, { children: "Dit is de planning in 2024:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "vrijdag 24 mei (Utrecht)" }), "\n", (0, t.jsx)(n.li, { children: "vrijdag 21 juni (Utrecht)" }), "\n", (0, t.jsx)(n.li, { children: "vrijdag 19 juli (Utrecht)" }), "\n", (0, t.jsx)(n.li, { children: "vrijdag 23 augustus" }), "\n", (0, t.jsx)(n.li, { children: "vrijdag 20 september" }), "\n", (0, t.jsx)(n.li, { children: "vrijdag 25 oktober" }), "\n", (0, t.jsx)(n.li, { children: "vrijdag 22 november" }), "\n", (0, t.jsx)(n.li, { children: "vrijdag 20 december" }), "\n"] }), "\n", (0, t.jsx)(n.h2, { id: "aanmelden", children: "Aanmelden" }), "\n", (0, t.jsx)(n.p, { children: "Een Design Open Dag is publiek toegankelijk, zolang er ruimte is." }), "\n", (0, t.jsxs)(n.p, { children: ["Doe je mee? Mail het ", (0, t.jsx)(n.a, { href: "/project/kernteam", children: "kernteam" }), " of stuur \xe9\xe9n van ons een DM op Slack om je aan te melden."] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
  },
  80877: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => r });
   var t = i(50959);
   const s = {},
    a = t.createContext(s);
   function r(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
