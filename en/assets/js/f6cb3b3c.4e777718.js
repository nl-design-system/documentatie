"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4499],
 {
  8568: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => r, default: () => d, frontMatter: () => o, metadata: () => a, toc: () => c });
   var i = t(1527),
    s = t(7214);
   const o = { title: "Spinner", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Spinner", pagination_label: "Spinner", description: "UX richtlijnen voor Spinner component", slug: "/spinner", tags: ["Help Wanted"] },
    r = "Spinner",
    a = { id: "componenten/build/spinner", title: "Spinner", description: "UX richtlijnen voor Spinner component", source: "@site/docs/componenten/build/spinner.mdx", sourceDirName: "componenten/build", slug: "/spinner", permalink: "/en/spinner", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/spinner.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Spinner", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Spinner", pagination_label: "Spinner", description: "UX richtlijnen voor Spinner component", slug: "/spinner", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Skip link", permalink: "/en/skip-link" }, next: { title: "Status badge", permalink: "/en/status-badge" } },
    l = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function p(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "spinner", children: "Spinner" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Spinner component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/75", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  7214: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => r });
   var i = t(959);
   const s = {},
    o = i.createContext(s);
   function r(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
