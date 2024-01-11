"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [12652],
 {
  61687: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => a, contentTitle: () => s, default: () => p, frontMatter: () => r, metadata: () => u, toc: () => c });
   var o = n(11527),
    i = n(47214);
   const r = { title: "Button group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Button group", pagination_label: "Button group", description: "UX richtlijnen voor Button group component", slug: "/button-group", tags: ["Help Wanted"] },
    s = "Button group",
    u = { id: "componenten/build/button-group", title: "Button group", description: "UX richtlijnen voor Button group component", source: "@site/docs/componenten/build/button-group.mdx", sourceDirName: "componenten/build", slug: "/button-group", permalink: "/button-group", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/button-group.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Button group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Button group", pagination_label: "Button group", description: "UX richtlijnen voor Button group component", slug: "/button-group", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Breadcrumb navigation", permalink: "/breadcrumb" }, next: { title: "Button", permalink: "/button" } },
    a = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function l(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(t.h1, { id: "button-group", children: "Button group" }), "\n", (0, o.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, o.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(t.p, { children: ["De Button group component staat bij NL Design System in de ", (0, o.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/153", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  47214: (e, t, n) => {
   n.d(t, { Z: () => u, a: () => s });
   var o = n(50959);
   const i = {},
    r = o.createContext(i);
   function s(e) {
    const t = o.useContext(r);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e]
    );
   }
   function u(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), o.createElement(r.Provider, { value: t }, e.children);
   }
  },
 },
]);
