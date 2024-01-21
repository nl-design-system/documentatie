"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1746],
 {
  5531: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => c, default: () => p, frontMatter: () => o, metadata: () => s, toc: () => d });
   var i = n(1527),
    a = n(7214);
   const o = { title: "Date Picker", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date Picker", pagination_label: "Date Picker", description: "UX richtlijnen voor Date Picker component", slug: "/date-picker", tags: ["Help Wanted"] },
    c = "Date Picker",
    s = { id: "componenten/build/date-picker", title: "Date Picker", description: "UX richtlijnen voor Date Picker component", source: "@site/docs/componenten/build/date-picker.mdx", sourceDirName: "componenten/build", slug: "/date-picker", permalink: "/en/date-picker", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/date-picker.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Date Picker", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date Picker", pagination_label: "Date Picker", description: "UX richtlijnen voor Date Picker component", slug: "/date-picker", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Date input", permalink: "/en/date-input" }, next: { title: "Dot badge", permalink: "/en/dot-badge" } },
    r = {},
    d = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function l(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, a.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(t.h1, { id: "date-picker", children: "Date Picker" }), "\n", (0, i.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, i.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(t.p, { children: ["De Date Picker component staat bij NL Design System in de ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/35", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, a.a)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  7214: (e, t, n) => {
   n.d(t, { Z: () => s, a: () => c });
   var i = n(959);
   const a = {},
    o = i.createContext(a);
   function c(e) {
    const t = i.useContext(o);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function s(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(a) : e.components || a) : c(e.components)), i.createElement(o.Provider, { value: t }, e.children);
   }
  },
 },
]);
