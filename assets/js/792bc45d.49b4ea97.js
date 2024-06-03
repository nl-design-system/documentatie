"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2626],
 {
  84475: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => o, contentTitle: () => i, default: () => m, frontMatter: () => c, metadata: () => r, toc: () => d });
   var a = t(52676),
    s = t(24785);
   const c = { title: "Case card", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Case card", pagination_label: "Case card", description: "UX richtlijnen voor Case card component", slug: "/case-card", tags: ["Unknown"] },
    i = "Case card",
    r = { id: "componenten/build/case-card", title: "Case card", description: "UX richtlijnen voor Case card component", source: "@site/docs/componenten/build/case-card.mdx", sourceDirName: "componenten/build", slug: "/case-card", permalink: "/case-card", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/case-card.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Case card", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Case card", pagination_label: "Case card", description: "UX richtlijnen voor Case card component", slug: "/case-card", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Card as link", permalink: "/card-as-link" }, next: { title: "Character count", permalink: "/character-count" } },
    o = {},
    d = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
    ];
   function l(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ["\n", "\n", (0, a.jsx)(n.h1, { id: "case-card", children: "Case card" }), "\n", (0, a.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, a.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, a.jsx)(n.h3, { id: "react", children: "React" }), "\n", (0, a.jsx)(n.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, a.jsxs)(n.ul, { children: ["\n", (0, a.jsxs)(n.li, { children: ["Implementatie: ", (0, a.jsx)(n.a, { href: "https://nl-design-system.github.io/denhaag/?path=/docs/react-cards-case-card--docs", children: "Case card React implementatie van Gemeente Den Haag" })] }), "\n", (0, a.jsx)(n.li, { children: "Storybook: (nog) geen story beschikbaar" }), "\n"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => i });
   var a = t(75271);
   const s = {},
    c = a.createContext(s);
   function i(e) {
    const n = a.useContext(c);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), a.createElement(c.Provider, { value: n }, e.children);
   }
  },
 },
]);
