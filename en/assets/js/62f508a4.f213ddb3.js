"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1038],
 {
  46040: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => i, default: () => p, frontMatter: () => a, metadata: () => s, toc: () => c });
   var o = t(52676),
    r = t(24785);
   const a = { title: "Page footer", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Page footer", pagination_label: "Page footer", description: "UX richtlijnen voor Page footer component", slug: "/page-footer", tags: ["Unknown"] },
    i = "Page footer",
    s = { id: "componenten/build/page-footer", title: "Page footer", description: "UX richtlijnen voor Page footer component", source: "@site/docs/componenten/build/page-footer.mdx", sourceDirName: "componenten/build", slug: "/page-footer", permalink: "/en/page-footer", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/page-footer.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Page footer", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Page footer", pagination_label: "Page footer", description: "UX richtlijnen voor Page footer component", slug: "/page-footer", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Ordered list", permalink: "/en/ordered-list" }, next: { title: "Page header", permalink: "/en/page-header" } },
    l = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "page-footer", children: "Page footer" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Page footer component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/56", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => i });
   var o = t(75271);
   const r = {},
    a = o.createContext(r);
   function i(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(r) : e.components || r) : i(e.components)), o.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
