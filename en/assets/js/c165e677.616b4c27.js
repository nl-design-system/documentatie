"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7996],
 {
  16502: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => s, default: () => g, frontMatter: () => i, metadata: () => r, toc: () => l });
   var o = t(52676),
    a = t(24785);
   const i = { title: "Range", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Range", pagination_label: "Range", description: "UX richtlijnen voor Range component", slug: "/range", tags: ["Unknown"] },
    s = "Range",
    r = { id: "componenten/build/range", title: "Range", description: "UX richtlijnen voor Range component", source: "@site/docs/componenten/build/range.mdx", sourceDirName: "componenten/build", slug: "/range", permalink: "/en/range", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/range.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Range", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Range", pagination_label: "Range", description: "UX richtlijnen voor Range component", slug: "/range", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Radio button", permalink: "/en/radio" }, next: { title: "Rich text content", permalink: "/en/rich-text-content" } },
    c = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, a.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "range", children: "Range" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Range component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/36", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => s });
   var o = t(75271);
   const a = {},
    i = o.createContext(a);
   function s(e) {
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
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), o.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
