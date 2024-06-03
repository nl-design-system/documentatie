"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [539],
 {
  36232: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => u, contentTitle: () => r, default: () => l, frontMatter: () => a, metadata: () => p, toc: () => s });
   var o = t(52676),
    i = t(24785);
   const a = { title: "Date input group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input group", pagination_label: "Date input group", description: "UX richtlijnen voor Date input group component", slug: "/date-input-group", tags: ["Unknown"] },
    r = "Date input group",
    p = { id: "componenten/build/date-input-group", title: "Date input group", description: "UX richtlijnen voor Date input group component", source: "@site/docs/componenten/build/date-input-group.mdx", sourceDirName: "componenten/build", slug: "/date-input-group", permalink: "/en/date-input-group", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/date-input-group.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Date input group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input group", pagination_label: "Date input group", description: "UX richtlijnen voor Date input group component", slug: "/date-input-group", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Data badge", permalink: "/en/data-badge" }, next: { title: "Date input", permalink: "/en/date-input" } },
    u = {},
    s = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "date-input-group", children: "Date input group" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Date input group component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/189", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => p, a: () => r });
   var o = t(75271);
   const i = {},
    a = o.createContext(i);
   function r(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function p(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), o.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
