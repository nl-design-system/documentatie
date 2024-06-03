"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4499],
 {
  8523: (n, e, t) => {
   t.r(e), t.d(e, { assets: () => l, contentTitle: () => r, default: () => d, frontMatter: () => s, metadata: () => a, toc: () => c });
   var i = t(52676),
    o = t(24785);
   const s = { title: "Spinner", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Spinner", pagination_label: "Spinner", description: "UX richtlijnen voor Spinner component", slug: "/spinner", tags: ["Unknown"] },
    r = "Spinner",
    a = { id: "componenten/build/spinner", title: "Spinner", description: "UX richtlijnen voor Spinner component", source: "@site/docs/componenten/build/spinner.mdx", sourceDirName: "componenten/build", slug: "/spinner", permalink: "/en/spinner", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/spinner.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Spinner", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Spinner", pagination_label: "Spinner", description: "UX richtlijnen voor Spinner component", slug: "/spinner", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Skip link", permalink: "/en/skip-link" }, next: { title: "Status badge", permalink: "/en/status-badge" } },
    l = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function p(n) {
    const e = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...n.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(e.h1, { id: "spinner", children: "Spinner" }), "\n", (0, i.jsx)(e.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(e.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(e.p, { children: ["De Spinner component staat bij NL Design System in de ", (0, i.jsx)(e.a, { href: "https://github.com/nl-design-system/backlog/issues/75", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function d(n = {}) {
    const { wrapper: e } = { ...(0, o.a)(), ...n.components };
    return e ? (0, i.jsx)(e, { ...n, children: (0, i.jsx)(p, { ...n }) }) : p(n);
   }
  },
  24785: (n, e, t) => {
   t.d(e, { Z: () => a, a: () => r });
   var i = t(75271);
   const o = {},
    s = i.createContext(o);
   function r(n) {
    const e = i.useContext(s);
    return i.useMemo(
     function () {
      return "function" == typeof n ? n(e) : { ...e, ...n };
     },
     [e, n],
    );
   }
   function a(n) {
    let e;
    return (e = n.disableParentContext ? ("function" == typeof n.components ? n.components(o) : n.components || o) : r(n.components)), i.createElement(s.Provider, { value: e }, n.children);
   }
  },
 },
]);
