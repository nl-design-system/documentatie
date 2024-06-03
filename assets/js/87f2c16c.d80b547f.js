"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4617],
 {
  62474: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => o, contentTitle: () => m, default: () => d, frontMatter: () => l, metadata: () => a, toc: () => r });
   var i = t(52676),
    s = t(24785);
   const l = { title: "Summary list", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Summary list", pagination_label: "Summary list", description: "UX richtlijnen voor Summary list component", slug: "/summary-list", tags: ["Unknown"] },
    m = "Summary list",
    a = { id: "componenten/build/summary-list", title: "Summary list", description: "UX richtlijnen voor Summary list component", source: "@site/docs/componenten/build/summary-list.mdx", sourceDirName: "componenten/build", slug: "/summary-list", permalink: "/summary-list", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/summary-list.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Summary list", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Summary list", pagination_label: "Summary list", description: "UX richtlijnen voor Summary list component", slug: "/summary-list", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Strong", permalink: "/strong" }, next: { title: "Switch", permalink: "/switch" } },
    o = {},
    r = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "summary-list", children: "Summary list" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, i.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1238-4478", children: "Summary list Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Summary list component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/185", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => m });
   var i = t(75271);
   const s = {},
    l = i.createContext(s);
   function m(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : m(e.components)), i.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
