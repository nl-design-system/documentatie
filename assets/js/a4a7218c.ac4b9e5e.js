"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [69633],
 {
  29736: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => u, contentTitle: () => p, default: () => l, frontMatter: () => s, metadata: () => r, toc: () => a });
   var o = n(11527),
    i = n(47214);
   const s = { title: "Text input group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Text input group", pagination_label: "Text input group", description: "UX richtlijnen voor Text input group component", slug: "/text-input-group", tags: ["Help Wanted"] },
    p = "Text input group",
    r = { id: "componenten/build/text-input-group", title: "Text input group", description: "UX richtlijnen voor Text input group component", source: "@site/docs/componenten/build/text-input-group.mdx", sourceDirName: "componenten/build", slug: "/text-input-group", permalink: "/text-input-group", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/text-input-group.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Text input group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Text input group", pagination_label: "Text input group", description: "UX richtlijnen voor Text input group component", slug: "/text-input-group", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Tabs", permalink: "/tabs" }, next: { title: "Text input", permalink: "/text-input" } },
    u = {},
    a = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function c(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(t.h1, { id: "text-input-group", children: "Text input group" }), "\n", (0, o.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, o.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(t.p, { children: ["De Text input group component staat bij NL Design System in de ", (0, o.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/178", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function l(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  47214: (e, t, n) => {
   n.d(t, { Z: () => r, a: () => p });
   var o = n(50959);
   const i = {},
    s = o.createContext(i);
   function p(e) {
    const t = o.useContext(s);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e]
    );
   }
   function r(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : p(e.components)), o.createElement(s.Provider, { value: t }, e.children);
   }
  },
 },
]);
