"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [968],
 {
  67808: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => d, default: () => g, frontMatter: () => i, metadata: () => s, toc: () => c });
   var a = t(52676),
    o = t(24785);
   const i = { title: "Dot badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Dot badge", pagination_label: "Dot badge", description: "UX richtlijnen voor Dot badge component", slug: "/dot-badge", tags: ["Unknown"] },
    d = "Dot badge",
    s = { id: "componenten/build/dot-badge", title: "Dot badge", description: "UX richtlijnen voor Dot badge component", source: "@site/docs/componenten/build/dot-badge.mdx", sourceDirName: "componenten/build", slug: "/dot-badge", permalink: "/en/dot-badge", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/dot-badge.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Dot badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Dot badge", pagination_label: "Dot badge", description: "UX richtlijnen voor Dot badge component", slug: "/dot-badge", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Details", permalink: "/en/details" }, next: { title: "Drawer", permalink: "/en/drawer" } },
    l = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function r(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ["\n", "\n", (0, a.jsx)(n.h1, { id: "dot-badge", children: "Dot badge" }), "\n", (0, a.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, a.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, a.jsx)(n.h3, { id: "react", children: "React" }), "\n", (0, a.jsx)(n.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, a.jsxs)(n.ul, { children: ["\n", (0, a.jsxs)(n.li, { children: ["Implementatie: ", (0, a.jsx)(n.a, { href: "https://github.com/nl-design-system/denhaag/tree/main/components/DotIndicator/src", children: "Dot badge React implementatie van Gemeente Den Haag" })] }), "\n", (0, a.jsxs)(n.li, { children: ["Storybook: ", (0, a.jsx)(n.a, { href: "https://nl-design-system.github.io/denhaag/?path=/story/react-data-display-dot-indicator--indicator-on-rectangle", children: "Dot badge React storybook van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, a.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(n.p, { children: ["De Dot badge component staat bij NL Design System in de ", (0, a.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/98", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => d });
   var a = t(75271);
   const o = {},
    i = a.createContext(o);
   function d(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : d(e.components)), a.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
