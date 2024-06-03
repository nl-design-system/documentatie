"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4573],
 {
  90010: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => s, default: () => d, frontMatter: () => r, metadata: () => l, toc: () => a });
   var i = t(52676),
    o = t(24785);
   const r = { title: "Figure", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Figure", pagination_label: "Figure", description: "UX richtlijnen voor Figure component", slug: "/figure", tags: ["Unknown"] },
    s = "Figure",
    l = { id: "componenten/build/figure", title: "Figure", description: "UX richtlijnen voor Figure component", source: "@site/docs/componenten/build/figure.mdx", sourceDirName: "componenten/build", slug: "/figure", permalink: "/figure", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/figure.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Figure", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Figure", pagination_label: "Figure", description: "UX richtlijnen voor Figure component", slug: "/figure", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Fieldset", permalink: "/fieldset" }, next: { title: "File input", permalink: "/file-input" } },
    c = {},
    a = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function u(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "figure", children: "Figure" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Figure component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/70", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => s });
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
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
