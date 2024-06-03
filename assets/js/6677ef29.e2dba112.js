"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2660],
 {
  3980: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => s, default: () => d, frontMatter: () => a, metadata: () => c, toc: () => l });
   var i = n(52676),
    o = n(24785);
   const a = { title: "Date input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input", pagination_label: "Date input", description: "UX richtlijnen voor Date input component", slug: "/date-input", tags: ["Unknown"] },
    s = "Date input",
    c = { id: "componenten/build/date-input", title: "Date input", description: "UX richtlijnen voor Date input component", source: "@site/docs/componenten/build/date-input.mdx", sourceDirName: "componenten/build", slug: "/date-input", permalink: "/date-input", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/date-input.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Date input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input", pagination_label: "Date input", description: "UX richtlijnen voor Date input component", slug: "/date-input", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Date input group", permalink: "/date-input-group" }, next: { title: "Date picker", permalink: "/date-picker" } },
    r = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function p(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(t.h1, { id: "date-input", children: "Date input" }), "\n", (0, i.jsx)(t.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(t.p, { children: ["De Date input component staat bij NL Design System in de ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/188", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function d(e = {}) {
    const { wrapper: t } = { ...(0, o.a)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => c, a: () => s });
   var i = n(75271);
   const o = {},
    a = i.createContext(o);
   function s(e) {
    const t = i.useContext(a);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function c(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), i.createElement(a.Provider, { value: t }, e.children);
   }
  },
 },
]);
