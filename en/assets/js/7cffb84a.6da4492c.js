"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9866],
 {
  1128: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => l, contentTitle: () => c, default: () => m, frontMatter: () => s, metadata: () => a, toc: () => d });
   var t = i(1527),
    o = i(7214);
   const s = { title: "Accordion", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Accordion", pagination_label: "Accordion", description: "UX richtlijnen voor Accordion component", slug: "/accordion", tags: ["Community"] },
    c = "Accordion",
    a = { id: "componenten/build/accordion", title: "Accordion", description: "UX richtlijnen voor Accordion component", source: "@site/docs/componenten/build/accordion.mdx", sourceDirName: "componenten/build", slug: "/accordion", permalink: "/en/accordion", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/accordion.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Accordion", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Accordion", pagination_label: "Accordion", description: "UX richtlijnen voor Accordion component", slug: "/accordion", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Definition of Done", permalink: "/en/componenten/definition-of-done" }, next: { title: "Alert dialog", permalink: "/en/alert-dialog" } },
    l = {},
    d = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function r(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", (0, t.jsx)(n.h1, { id: "accordion", children: "Accordion" }), "\n", (0, t.jsx)(n.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, t.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, t.jsx)(n.h3, { id: "css", children: "CSS" }), "\n", (0, t.jsx)(n.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Implementatie: ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/denhaag/blob/main/components/Accordion/src/index.scss", children: "Accordion CSS implementatie van Gemeente Den Haag" })] }), "\n", (0, t.jsxs)(n.li, { children: ["Storybook: ", (0, t.jsx)(n.a, { href: "https://nl-design-system.github.io/denhaag/?path=/docs/css-surfaces-accordion--default-story", children: "Accordion CSS storybook van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, t.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, t.jsx)(n.h4, { id: "gemeente-den-haag-1", children: "Gemeente Den Haag" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Implementatie: ", (0, t.jsx)(n.a, { href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1585%3A0", children: "Accordion Figma implementatie van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, t.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Implementatie: ", (0, t.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1261-4784", children: "Accordion Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, t.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, t.jsxs)(n.p, { children: ["De Accordion component staat bij NL Design System in de ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/102", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  7214: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => c });
   var t = i(959);
   const o = {},
    s = t.createContext(o);
   function c(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : c(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
