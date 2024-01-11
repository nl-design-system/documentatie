"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [45233],
 {
  92727: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => l, default: () => m, frontMatter: () => o, metadata: () => s, toc: () => d });
   var i = t(11527),
    a = t(47214);
   const o = { title: "Variable Heading", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Variable Heading", pagination_label: "Variable Heading", description: "UX richtlijnen voor Variable Heading component", slug: "/variable-heading", tags: ["Community"] },
    l = "Variable Heading",
    s = { id: "componenten/build/variable-heading", title: "Variable Heading", description: "UX richtlijnen voor Variable Heading component", source: "@site/docs/componenten/build/variable-heading.mdx", sourceDirName: "componenten/build", slug: "/variable-heading", permalink: "/en/variable-heading", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/variable-heading.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Variable Heading", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Variable Heading", pagination_label: "Variable Heading", description: "UX richtlijnen voor Variable Heading component", slug: "/variable-heading", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Unordered list", permalink: "/en/unordered-list" }, next: { title: "Video", permalink: "/en/video" } },
    r = {},
    d = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, a.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "variable-heading", children: "Variable Heading" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "css", children: "CSS" }), "\n", (0, i.jsx)(n.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/heading/web-component", children: "Variable Heading CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, i.jsxs)(n.li, { children: ["Storybook: ", (0, i.jsx)(n.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-heading--default-story", children: "Variable Heading CSS storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Variable Heading component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/114", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => l });
   var i = t(50959);
   const a = {},
    o = i.createContext(a);
   function l(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e]
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(a) : e.components || a) : l(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
