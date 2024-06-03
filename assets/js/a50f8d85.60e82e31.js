"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1934],
 {
  69560: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => a, default: () => g, frontMatter: () => i, metadata: () => r, toc: () => d });
   var o = t(52676),
    l = t(24785);
   const i = { title: "Alert dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Alert dialog", pagination_label: "Alert dialog", description: "UX richtlijnen voor Alert dialog component", slug: "/alert-dialog", tags: ["Unknown"] },
    a = "Alert dialog",
    r = { id: "componenten/build/alert-dialog", title: "Alert dialog", description: "UX richtlijnen voor Alert dialog component", source: "@site/docs/componenten/build/alert-dialog.mdx", sourceDirName: "componenten/build", slug: "/alert-dialog", permalink: "/alert-dialog", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/alert-dialog.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Alert dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Alert dialog", pagination_label: "Alert dialog", description: "UX richtlijnen voor Alert dialog component", slug: "/alert-dialog", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Accordion", permalink: "/accordion" }, next: { title: "Alert", permalink: "/alert" } },
    s = {},
    d = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "alert-dialog", children: "Alert dialog" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Alert dialog component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/182", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => a });
   var o = t(75271);
   const l = {},
    i = o.createContext(l);
   function a(e) {
    const n = o.useContext(i);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : a(e.components)), o.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
