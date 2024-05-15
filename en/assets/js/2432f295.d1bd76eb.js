"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1954],
 {
  64150: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => d, default: () => m, frontMatter: () => a, metadata: () => o, toc: () => h });
   var i = t(11527),
    s = t(80877),
    l = t(46828);
   const a = { title: "Heading 3", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Heading 3", pagination_label: "Heading 3", description: "UX richtlijnen voor Heading 3 component", slug: "/heading-3", tags: ["Community"] },
    d = "Heading 3",
    o = { id: "componenten/build/heading-3", title: "Heading 3", description: "UX richtlijnen voor Heading 3 component", source: "@site/docs/componenten/build/heading-3.mdx", sourceDirName: "componenten/build", slug: "/heading-3", permalink: "/en/heading-3", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/heading-3.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Heading 3", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Heading 3", pagination_label: "Heading 3", description: "UX richtlijnen voor Heading 3 component", slug: "/heading-3", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Heading 2", permalink: "/en/heading-2" }, next: { title: "Heading 4", permalink: "/en/heading-4" } },
    r = {},
    h = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", "\n", (0, i.jsx)(n.h1, { id: "heading-3", children: "Heading 3" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, i.jsx)(n.h2, { id: "voorbeeld", children: "Voorbeeld" }), "\n", (0, i.jsx)(l.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/iframe.html?viewMode=story&id=heading-3--utrecht" }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "css", children: "CSS" }), "\n", (0, i.jsx)(n.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/heading/css", children: "Heading 3 CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, i.jsxs)(n.li, { children: ["Storybook: ", (0, i.jsx)(n.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-3--default-story", children: "Heading 3 CSS storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, i.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, i.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039", children: "Heading 3 Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Heading 3 component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/114", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  46828: (e, n, t) => {
   t.d(n, { o: () => d });
   var i = t(64875);
   t(50959);
   const s = "story_PQo9",
    l = "story__link_f0vD";
   var a = t(11527);
   const d = (e) => {
    let { label: n, href: t } = e;
    const d = t,
     o = t.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
    return (0, a.jsxs)("div", { className: s, children: [(0, a.jsx)(i.Z, { src: o, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), (0, a.jsx)("a", { className: l, href: d, target: "_blank", rel: "noreferrer", children: n })] });
   };
  },
 },
]);