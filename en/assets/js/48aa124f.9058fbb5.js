"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4396],
 {
  89458: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => d, default: () => b, frontMatter: () => i, metadata: () => s, toc: () => l });
   var a = t(52676),
    o = t(24785);
   const i = { title: "Data badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Data badge", pagination_label: "Data badge", description: "UX richtlijnen voor Data badge component", slug: "/data-badge", tags: ["Unknown"] },
    d = "Data badge",
    s = { id: "componenten/build/data-badge", title: "Data badge", description: "UX richtlijnen voor Data badge component", source: "@site/docs/componenten/build/data-badge.mdx", sourceDirName: "componenten/build", slug: "/data-badge", permalink: "/en/data-badge", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/data-badge.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Data badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Data badge", pagination_label: "Data badge", description: "UX richtlijnen voor Data badge component", slug: "/data-badge", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Checkbox", permalink: "/en/checkbox" }, next: { title: "Date input group", permalink: "/en/date-input-group" } },
    c = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function r(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ["\n", "\n", (0, a.jsx)(n.h1, { id: "data-badge", children: "Data badge" }), "\n", (0, a.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, a.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(n.p, { children: ["De Data badge component staat bij NL Design System in de ", (0, a.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/94", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => d });
   var a = t(75271);
   const o = {},
    i = a.createContext(o);
   function d(e) {
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
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : d(e.components)), a.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
