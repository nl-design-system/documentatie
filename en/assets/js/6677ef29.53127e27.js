"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2660],
 {
  3980: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => s, default: () => d, frontMatter: () => a, metadata: () => c, toc: () => l });
   var i = t(52676),
    o = t(24785);
   const a = { title: "Date input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input", pagination_label: "Date input", description: "UX richtlijnen voor Date input component", slug: "/date-input", tags: ["Unknown"] },
    s = "Date input",
    c = { id: "componenten/build/date-input", title: "Date input", description: "UX richtlijnen voor Date input component", source: "@site/docs/componenten/build/date-input.mdx", sourceDirName: "componenten/build", slug: "/date-input", permalink: "/en/date-input", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/date-input.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Date input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input", pagination_label: "Date input", description: "UX richtlijnen voor Date input component", slug: "/date-input", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Date input group", permalink: "/en/date-input-group" }, next: { title: "Date picker", permalink: "/en/date-picker" } },
    r = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function p(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "date-input", children: "Date input" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Date input component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/188", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => c, a: () => s });
   var i = t(75271);
   const o = {},
    a = i.createContext(o);
   function s(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), i.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
