"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5085],
 {
  99589: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => s, default: () => p, frontMatter: () => r, metadata: () => u, toc: () => c });
   var i = t(52676),
    o = t(24785);
   const r = { title: "Number input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Number input", pagination_label: "Number input", description: "UX richtlijnen voor Number input component", slug: "/number-input", tags: ["Unknown"] },
    s = "Number input",
    u = { id: "componenten/build/number-input", title: "Number input", description: "UX richtlijnen voor Number input component", source: "@site/docs/componenten/build/number-input.mdx", sourceDirName: "componenten/build", slug: "/number-input", permalink: "/number-input", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/number-input.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Number input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Number input", pagination_label: "Number input", description: "UX richtlijnen voor Number input component", slug: "/number-input", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Number badge", permalink: "/number-badge" }, next: { title: "Ordered list", permalink: "/ordered-list" } },
    l = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function a(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "number-input", children: "Number input" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Number input component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/125", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => u, a: () => s });
   var i = t(75271);
   const o = {},
    r = i.createContext(o);
   function s(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function u(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
