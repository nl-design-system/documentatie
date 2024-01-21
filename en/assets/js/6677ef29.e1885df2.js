"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2660],
 {
  985: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => s, default: () => p, frontMatter: () => o, metadata: () => c, toc: () => r });
   var i = n(1527),
    a = n(7214);
   const o = { title: "Date input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input", pagination_label: "Date input", description: "UX richtlijnen voor Date input component", slug: "/date-input", tags: ["Help Wanted"] },
    s = "Date input",
    c = { id: "componenten/build/date-input", title: "Date input", description: "UX richtlijnen voor Date input component", source: "@site/docs/componenten/build/date-input.mdx", sourceDirName: "componenten/build", slug: "/date-input", permalink: "/en/date-input", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/date-input.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Date input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input", pagination_label: "Date input", description: "UX richtlijnen voor Date input component", slug: "/date-input", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Date input group", permalink: "/en/date-input-group" }, next: { title: "Date Picker", permalink: "/en/date-picker" } },
    l = {},
    r = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function d(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, a.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(t.h1, { id: "date-input", children: "Date input" }), "\n", (0, i.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, i.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(t.p, { children: ["De Date input component staat bij NL Design System in de ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/188", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, a.a)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
  7214: (e, t, n) => {
   n.d(t, { Z: () => c, a: () => s });
   var i = n(959);
   const a = {},
    o = i.createContext(a);
   function s(e) {
    const t = i.useContext(o);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function c(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), i.createElement(o.Provider, { value: t }, e.children);
   }
  },
 },
]);
