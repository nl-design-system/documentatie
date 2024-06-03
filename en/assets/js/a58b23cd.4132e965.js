"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [270],
 {
  78945: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => r, default: () => h, frontMatter: () => i, metadata: () => o, toc: () => c });
   var a = t(52676),
    l = t(24785);
   const i = { title: "Calendar", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Calendar", pagination_label: "Calendar", description: "UX richtlijnen voor Calendar component", slug: "/calendar", tags: ["Unknown"] },
    r = "Calendar",
    o = { id: "componenten/build/calendar", title: "Calendar", description: "UX richtlijnen voor Calendar component", source: "@site/docs/componenten/build/calendar.mdx", sourceDirName: "componenten/build", slug: "/calendar", permalink: "/en/calendar", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/calendar.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Calendar", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Calendar", pagination_label: "Calendar", description: "UX richtlijnen voor Calendar component", slug: "/calendar", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Button", permalink: "/en/button" }, next: { title: "Card as link", permalink: "/en/card-as-link" } },
    s = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ["\n", "\n", (0, a.jsx)(n.h1, { id: "calendar", children: "Calendar" }), "\n", (0, a.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, a.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, a.jsx)(n.h3, { id: "react", children: "React" }), "\n", (0, a.jsx)(n.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, a.jsxs)(n.ul, { children: ["\n", (0, a.jsxs)(n.li, { children: ["Implementatie: ", (0, a.jsx)(n.a, { href: "https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-calendar--docs", children: "Calendar React implementatie van Gemeente Utrecht" })] }), "\n", (0, a.jsx)(n.li, { children: "Storybook: (nog) geen story beschikbaar" }), "\n"] }), "\n", (0, a.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(n.p, { children: ["De Calendar component staat bij NL Design System in de ", (0, a.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/199", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => r });
   var a = t(75271);
   const l = {},
    i = a.createContext(l);
   function r(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), a.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
