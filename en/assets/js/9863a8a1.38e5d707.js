"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [718],
 {
  41885: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => r, default: () => d, frontMatter: () => a, metadata: () => i, toc: () => l });
   var c = t(52676),
    o = t(24785);
   const a = { title: "Character count", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Character count", pagination_label: "Character count", description: "UX richtlijnen voor Character count component", slug: "/character-count", tags: ["Unknown"] },
    r = "Character count",
    i = { id: "componenten/build/character-count", title: "Character count", description: "UX richtlijnen voor Character count component", source: "@site/docs/componenten/build/character-count.mdx", sourceDirName: "componenten/build", slug: "/character-count", permalink: "/en/character-count", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/character-count.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Character count", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Character count", pagination_label: "Character count", description: "UX richtlijnen voor Character count component", slug: "/character-count", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Case card", permalink: "/en/case-card" }, next: { title: "Checkbox group", permalink: "/en/checkbox-group" } },
    s = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function u(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, c.jsxs)(c.Fragment, { children: ["\n", "\n", (0, c.jsx)(n.h1, { id: "character-count", children: "Character count" }), "\n", (0, c.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, c.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, c.jsxs)(n.p, { children: ["De Character count component staat bij NL Design System in de ", (0, c.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/130", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(u, { ...e }) }) : u(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => i, a: () => r });
   var c = t(75271);
   const o = {},
    a = c.createContext(o);
   function r(e) {
    const n = c.useContext(a);
    return c.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), c.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
