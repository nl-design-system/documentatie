"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7066],
 {
  5461: (e, n, s) => {
   s.r(n), s.d(n, { assets: () => a, contentTitle: () => r, default: () => p, frontMatter: () => o, metadata: () => l, toc: () => c });
   var t = s(52676),
    i = s(24785);
   const o = { title: "Progress list", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Progress list", pagination_label: "Progress list", description: "UX richtlijnen voor Progress list component", slug: "/progress-list", tags: ["Unknown"] },
    r = "Progress list",
    l = { id: "componenten/build/progress-list", title: "Progress list", description: "UX richtlijnen voor Progress list component", source: "@site/docs/componenten/build/progress-list.mdx", sourceDirName: "componenten/build", slug: "/progress-list", permalink: "/en/progress-list", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/progress-list.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Progress list", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Progress list", pagination_label: "Progress list", description: "UX richtlijnen voor Progress list component", slug: "/progress-list", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Password input", permalink: "/en/password-input" }, next: { title: "Progress", permalink: "/en/progress" } },
    a = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", (0, t.jsx)(n.h1, { id: "progress-list", children: "Progress list" }), "\n", (0, t.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, t.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, t.jsx)(n.h3, { id: "html", children: "HTML" }), "\n", (0, t.jsx)(n.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Implementatie: ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/emphasis/html", children: "Progress list HTML implementatie van Gemeente Den Haag" })] }), "\n", (0, t.jsxs)(n.li, { children: ["Storybook: ", (0, t.jsx)(n.a, { href: "https://nl-design-system.github.io/denhaag/?path=/docs/react-process-steps-status--docs", children: "Progress list HTML storybook van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, t.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, t.jsxs)(n.p, { children: ["De Progress list component staat bij NL Design System in de ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/150", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, s) => {
   s.d(n, { Z: () => l, a: () => r });
   var t = s(75271);
   const i = {},
    o = t.createContext(i);
   function r(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
