"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2840],
 {
  24799: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => i, default: () => p, frontMatter: () => r, metadata: () => l, toc: () => a });
   var s = t(52676),
    o = t(24785);
   const r = { title: "Progress", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Progress", pagination_label: "Progress", description: "UX richtlijnen voor Progress component", slug: "/progress", tags: ["Unknown"] },
    i = "Progress",
    l = { id: "componenten/build/progress", title: "Progress", description: "UX richtlijnen voor Progress component", source: "@site/docs/componenten/build/progress.mdx", sourceDirName: "componenten/build", slug: "/progress", permalink: "/progress", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/progress.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Progress", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Progress", pagination_label: "Progress", description: "UX richtlijnen voor Progress component", slug: "/progress", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Progress list", permalink: "/progress-list" }, next: { title: "Radio group", permalink: "/radio-group" } },
    c = {},
    a = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ["\n", "\n", (0, s.jsx)(n.h1, { id: "progress", children: "Progress" }), "\n", (0, s.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, s.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, s.jsxs)(n.p, { children: ["De Progress component staat bij NL Design System in de ", (0, s.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/42", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => i });
   var s = t(75271);
   const o = {},
    r = s.createContext(o);
   function i(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), s.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
