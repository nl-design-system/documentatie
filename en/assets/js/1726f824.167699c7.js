"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8939],
 {
  6321: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => a, contentTitle: () => s, default: () => p, frontMatter: () => l, metadata: () => r, toc: () => c });
   var o = n(1527),
    i = n(7214);
   const l = { title: "Tooltip", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Tooltip", pagination_label: "Tooltip", description: "UX richtlijnen voor Tooltip component", slug: "/tooltip", tags: ["Discouraged"] },
    s = "Tooltip",
    r = { id: "componenten/build/tooltip", title: "Tooltip", description: "UX richtlijnen voor Tooltip component", source: "@site/docs/componenten/build/tooltip.mdx", sourceDirName: "componenten/build", slug: "/tooltip", permalink: "/en/tooltip", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/tooltip.mdx", tags: [{ label: "Discouraged", permalink: "/en/tags/discouraged" }], version: "current", frontMatter: { title: "Tooltip", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Tooltip", pagination_label: "Tooltip", description: "UX richtlijnen voor Tooltip component", slug: "/tooltip", tags: ["Discouraged"] }, sidebar: "componenten", previous: { title: "Toggletip", permalink: "/en/toggletip" }, next: { title: "Unordered list", permalink: "/en/unordered-list" } },
    a = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function d(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(t.h1, { id: "tooltip", children: "Tooltip" }), "\n", (0, o.jsx)(t.p, { children: 'Dit component heeft de "Discouraged" status: Dit component is geen onderdeel van de NL Design System. Gebruik van dit component wordt door het kernteam afgeraden.' }), "\n", (0, o.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(t.p, { children: ["De Tooltip component staat bij NL Design System in de ", (0, o.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/50", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
  },
  7214: (e, t, n) => {
   n.d(t, { Z: () => r, a: () => s });
   var o = n(959);
   const i = {},
    l = o.createContext(i);
   function s(e) {
    const t = o.useContext(l);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function r(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), o.createElement(l.Provider, { value: t }, e.children);
   }
  },
 },
]);
