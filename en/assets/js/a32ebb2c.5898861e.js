"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2138],
 {
  53705: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => l, default: () => d, frontMatter: () => o, metadata: () => a, toc: () => r });
   var i = t(11527),
    s = t(27034);
   const o = { title: "Skip link", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Skip link", pagination_label: "Skip link", description: "UX richtlijnen voor Skip link component", slug: "/skip-link", tags: ["Help Wanted"] },
    l = "Skip link",
    a = { id: "componenten/build/skip-link", title: "Skip link", description: "UX richtlijnen voor Skip link component", source: "@site/docs/componenten/build/skip-link.mdx", sourceDirName: "componenten/build", slug: "/skip-link", permalink: "/en/skip-link", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/skip-link.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Skip link", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Skip link", pagination_label: "Skip link", description: "UX richtlijnen voor Skip link component", slug: "/skip-link", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Side navigation", permalink: "/en/side-navigation" }, next: { title: "Spinner", permalink: "/en/spinner" } },
    c = {},
    r = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function p(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "skip-link", children: "Skip link" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Skip link component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/74", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  27034: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => l });
   var i = t(50959);
   const s = {},
    o = i.createContext(s);
   function l(e) {
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
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
