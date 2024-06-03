"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1746],
 {
  1514: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => a, default: () => p, frontMatter: () => c, metadata: () => r, toc: () => l });
   var i = t(52676),
    o = t(24785);
   const c = { title: "Date picker", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date picker", pagination_label: "Date picker", description: "UX richtlijnen voor Date picker component", slug: "/date-picker", tags: ["Unknown"] },
    a = "Date picker",
    r = { id: "componenten/build/date-picker", title: "Date picker", description: "UX richtlijnen voor Date picker component", source: "@site/docs/componenten/build/date-picker.mdx", sourceDirName: "componenten/build", slug: "/date-picker", permalink: "/en/date-picker", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/date-picker.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Date picker", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date picker", pagination_label: "Date picker", description: "UX richtlijnen voor Date picker component", slug: "/date-picker", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Date input", permalink: "/en/date-input" }, next: { title: "Definition list", permalink: "/en/definition-list" } },
    s = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "date-picker", children: "Date picker" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Date picker component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/35", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => a });
   var i = t(75271);
   const o = {},
    c = i.createContext(o);
   function a(e) {
    const n = i.useContext(c);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), i.createElement(c.Provider, { value: n }, e.children);
   }
  },
 },
]);
