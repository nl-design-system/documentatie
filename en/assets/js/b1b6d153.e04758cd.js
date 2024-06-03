"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3124],
 {
  80140: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => l, default: () => d, frontMatter: () => o, metadata: () => s, toc: () => r });
   var a = t(52676),
    i = t(24785);
   const o = { title: "Language navigation", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Language navigation", pagination_label: "Language navigation", description: "UX richtlijnen voor Language navigation component", slug: "/language-nav", tags: ["Unknown"] },
    l = "Language navigation",
    s = { id: "componenten/build/language-nav", title: "Language navigation", description: "UX richtlijnen voor Language navigation component", source: "@site/docs/componenten/build/language-nav.mdx", sourceDirName: "componenten/build", slug: "/language-nav", permalink: "/en/language-nav", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/language-nav.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Language navigation", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Language navigation", pagination_label: "Language navigation", description: "UX richtlijnen voor Language navigation component", slug: "/language-nav", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Invalid form alert", permalink: "/en/invalid-form-alert" }, next: { title: "Legend", permalink: "/en/legend" } },
    c = {},
    r = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function g(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ["\n", "\n", (0, a.jsx)(n.h1, { id: "language-navigation", children: "Language navigation" }), "\n", (0, a.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, a.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, a.jsx)(n.h3, { id: "css", children: "CSS" }), "\n", (0, a.jsx)(n.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, a.jsxs)(n.ul, { children: ["\n", (0, a.jsxs)(n.li, { children: ["Implementatie: ", (0, a.jsx)(n.a, { href: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-alternate-lang-nav--docs", children: "Language navigation CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, a.jsx)(n.li, { children: "Storybook: (nog) geen story beschikbaar" }), "\n"] }), "\n", (0, a.jsx)(n.h3, { id: "react", children: "React" }), "\n", (0, a.jsx)(n.h4, { id: "gemeente-utrecht-1", children: "Gemeente Utrecht" }), "\n", (0, a.jsxs)(n.ul, { children: ["\n", (0, a.jsxs)(n.li, { children: ["Implementatie: ", (0, a.jsx)(n.a, { href: "https://nl-design-system.github.io/utrecht/storybook-react/index.html?path=/docs/react-alternate-lang-nav--docs", children: "Language navigation React implementatie van Gemeente Utrecht" })] }), "\n", (0, a.jsx)(n.li, { children: "Storybook: (nog) geen story beschikbaar" }), "\n"] }), "\n", (0, a.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(n.p, { children: ["De Language navigation component staat bij NL Design System in de ", (0, a.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/243", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(g, { ...e }) }) : g(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => l });
   var a = t(75271);
   const i = {},
    o = a.createContext(i);
   function l(e) {
    const n = a.useContext(o);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), a.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
