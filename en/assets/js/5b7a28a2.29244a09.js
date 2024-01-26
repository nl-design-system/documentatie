"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [539],
 {
  57980: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => s, default: () => c, frontMatter: () => a, metadata: () => p, toc: () => u });
   var o = n(11527),
    i = n(47214);
   const a = { title: "Date input group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input group", pagination_label: "Date input group", description: "UX richtlijnen voor Date input group component", slug: "/date-input-group", tags: ["Help Wanted"] },
    s = "Date input group",
    p = { id: "componenten/build/date-input-group", title: "Date input group", description: "UX richtlijnen voor Date input group component", source: "@site/docs/componenten/build/date-input-group.mdx", sourceDirName: "componenten/build", slug: "/date-input-group", permalink: "/en/date-input-group", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/date-input-group.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Date input group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input group", pagination_label: "Date input group", description: "UX richtlijnen voor Date input group component", slug: "/date-input-group", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Data list", permalink: "/en/data-list" }, next: { title: "Date input", permalink: "/en/date-input" } },
    r = {},
    u = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function l(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(t.h1, { id: "date-input-group", children: "Date input group" }), "\n", (0, o.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, o.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(t.p, { children: ["De Date input group component staat bij NL Design System in de ", (0, o.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/189", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function c(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  47214: (e, t, n) => {
   n.d(t, { Z: () => p, a: () => s });
   var o = n(50959);
   const i = {},
    a = o.createContext(i);
   function s(e) {
    const t = o.useContext(a);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function p(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), o.createElement(a.Provider, { value: t }, e.children);
   }
  },
 },
]);
