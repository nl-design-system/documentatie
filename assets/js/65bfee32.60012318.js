"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [853],
 {
  85791: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => g, frontMatter: () => s, metadata: () => o, toc: () => c });
   var i = t(11527),
    a = t(47214);
   const s = { title: "Pagination", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Pagination", pagination_label: "Pagination", description: "UX richtlijnen voor Pagination component", slug: "/pagination", tags: ["Help Wanted"] },
    l = "Pagination",
    o = { id: "componenten/build/pagination", title: "Pagination", description: "UX richtlijnen voor Pagination component", source: "@site/docs/componenten/build/pagination.mdx", sourceDirName: "componenten/build", slug: "/pagination", permalink: "/pagination", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/pagination.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Pagination", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Pagination", pagination_label: "Pagination", description: "UX richtlijnen voor Pagination component", slug: "/pagination", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Page Header", permalink: "/page-header" }, next: { title: "Paragraph", permalink: "/paragraph" } },
    d = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-2", level: 4 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function r(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, a.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "pagination", children: "Pagination" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "css", children: "CSS" }), "\n", (0, i.jsx)(n.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/denhaag/blob/main/components/Pagination/src/index.scss", children: "Pagination CSS implementatie van Gemeente Den Haag" })] }), "\n", (0, i.jsxs)(n.li, { children: ["Storybook: ", (0, i.jsx)(n.a, { href: "https://nl-design-system.github.io/denhaag/?path=/story/css-navigation-pagination--default-story", children: "Pagination CSS storybook van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, i.jsx)(n.h3, { id: "react", children: "React" }), "\n", (0, i.jsx)(n.h4, { id: "gemeente-den-haag-1", children: "Gemeente Den Haag" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/denhaag/blob/main/components/Pagination/src/index.tsx", children: "Pagination React implementatie van Gemeente Den Haag" })] }), "\n", (0, i.jsx)(n.li, { children: "Storybook: (nog) geen story beschikbaar" }), "\n"] }), "\n", (0, i.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, i.jsx)(n.h4, { id: "gemeente-den-haag-2", children: "Gemeente Den Haag" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1673%3A231", children: "Pagination Figma implementatie van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, i.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1691-11779", children: "Pagination Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Pagination component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/106", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => l });
   var i = t(50959);
   const a = {},
    s = i.createContext(a);
   function l(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(a) : e.components || a) : l(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
