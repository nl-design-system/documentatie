"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4740],
 {
  90884: (n, e, t) => {
   t.r(e), t.d(e, { assets: () => r, contentTitle: () => o, default: () => k, frontMatter: () => s, metadata: () => l, toc: () => c });
   var a = t(52676),
    i = t(24785);
   const s = { title: "Card as link", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Card as link", pagination_label: "Card as link", description: "UX richtlijnen voor Card as link component", slug: "/card-as-link", tags: ["Unknown"] },
    o = "Card as link",
    l = { id: "componenten/build/card-as-link", title: "Card as link", description: "UX richtlijnen voor Card as link component", source: "@site/docs/componenten/build/card-as-link.mdx", sourceDirName: "componenten/build", slug: "/card-as-link", permalink: "/en/card-as-link", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/card-as-link.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Card as link", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Card as link", pagination_label: "Card as link", description: "UX richtlijnen voor Card as link component", slug: "/card-as-link", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Calendar", permalink: "/en/calendar" }, next: { title: "Case card", permalink: "/en/case-card" } },
    r = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function d(n) {
    const e = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...n.components };
    return (0, a.jsxs)(a.Fragment, { children: ["\n", "\n", (0, a.jsx)(e.h1, { id: "card-as-link", children: "Card as link" }), "\n", (0, a.jsx)(e.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, a.jsx)(e.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(e.p, { children: ["De Card as link component staat bij NL Design System in de ", (0, a.jsx)(e.a, { href: "https://github.com/nl-design-system/backlog/issues/101", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function k(n = {}) {
    const { wrapper: e } = { ...(0, i.a)(), ...n.components };
    return e ? (0, a.jsx)(e, { ...n, children: (0, a.jsx)(d, { ...n }) }) : d(n);
   }
  },
  24785: (n, e, t) => {
   t.d(e, { Z: () => l, a: () => o });
   var a = t(75271);
   const i = {},
    s = a.createContext(i);
   function o(n) {
    const e = a.useContext(s);
    return a.useMemo(
     function () {
      return "function" == typeof n ? n(e) : { ...e, ...n };
     },
     [e, n],
    );
   }
   function l(n) {
    let e;
    return (e = n.disableParentContext ? ("function" == typeof n.components ? n.components(i) : n.components || i) : o(n.components)), a.createElement(s.Provider, { value: e }, n.children);
   }
  },
 },
]);
