"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [24396],
 {
  94156: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => i, default: () => b, frontMatter: () => d, metadata: () => s, toc: () => c });
   var a = n(11527),
    o = n(47214);
   const d = { title: "Data badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Data badge", pagination_label: "Data badge", description: "UX richtlijnen voor Data badge component", slug: "/data-badge", tags: ["Help Wanted"] },
    i = "Data badge",
    s = { id: "componenten/build/data-badge", title: "Data badge", description: "UX richtlijnen voor Data badge component", source: "@site/docs/componenten/build/data-badge.mdx", sourceDirName: "componenten/build", slug: "/data-badge", permalink: "/en/data-badge", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/data-badge.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Data badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Data badge", pagination_label: "Data badge", description: "UX richtlijnen voor Data badge component", slug: "/data-badge", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Counter badge", permalink: "/en/counter-badge" }, next: { title: "Data list", permalink: "/en/data-list" } },
    l = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function r(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ["\n", "\n", (0, a.jsx)(t.h1, { id: "data-badge", children: "Data badge" }), "\n", (0, a.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, a.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(t.p, { children: ["De Data badge component staat bij NL Design System in de ", (0, a.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/94", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function b(e = {}) {
    const { wrapper: t } = { ...(0, o.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  47214: (e, t, n) => {
   n.d(t, { Z: () => s, a: () => i });
   var a = n(50959);
   const o = {},
    d = a.createContext(o);
   function i(e) {
    const t = a.useContext(d);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e]
    );
   }
   function s(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), a.createElement(d.Provider, { value: t }, e.children);
   }
  },
 },
]);
