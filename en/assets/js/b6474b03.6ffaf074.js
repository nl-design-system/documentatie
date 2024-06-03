"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5961],
 {
  43552: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => r, default: () => h, frontMatter: () => i, metadata: () => s, toc: () => c });
   var a = t(52676),
    o = t(24785);
   const i = { title: "Page header", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Page header", pagination_label: "Page header", description: "UX richtlijnen voor Page header component", slug: "/page-header", tags: ["Unknown"] },
    r = "Page header",
    s = { id: "componenten/build/page-header", title: "Page header", description: "UX richtlijnen voor Page header component", source: "@site/docs/componenten/build/page-header.mdx", sourceDirName: "componenten/build", slug: "/page-header", permalink: "/en/page-header", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/page-header.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Page header", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Page header", pagination_label: "Page header", description: "UX richtlijnen voor Page header component", slug: "/page-header", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Page footer", permalink: "/en/page-footer" }, next: { title: "Pagination", permalink: "/en/pagination" } },
    d = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function l(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ["\n", "\n", (0, a.jsx)(n.h1, { id: "page-header", children: "Page header" }), "\n", (0, a.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, a.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(n.p, { children: ["De Page header component staat bij NL Design System in de ", (0, a.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/55", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => r });
   var a = t(75271);
   const o = {},
    i = a.createContext(o);
   function r(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), a.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
