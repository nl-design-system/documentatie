"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3318],
 {
  1974: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => h, contentTitle: () => d, default: () => m, frontMatter: () => r, metadata: () => o, toc: () => a });
   var i = n(1527),
    s = n(7214),
    l = n(8945);
   const r = { title: "Ordered list", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Ordered list", pagination_label: "Ordered list", description: "UX richtlijnen voor Ordered list component", slug: "/ordered-list", tags: ["Community"] },
    d = "Ordered list",
    o = { id: "componenten/build/ordered-list", title: "Ordered list", description: "UX richtlijnen voor Ordered list component", source: "@site/docs/componenten/build/ordered-list.mdx", sourceDirName: "componenten/build", slug: "/ordered-list", permalink: "/en/ordered-list", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/ordered-list.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Ordered list", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Ordered list", pagination_label: "Ordered list", description: "UX richtlijnen voor Ordered list component", slug: "/ordered-list", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Number input", permalink: "/en/number-input" }, next: { title: "Page Footer", permalink: "/en/page-footer" } },
    h = {},
    a = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function c(e) {
    const t = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", "\n", (0, i.jsx)(t.h1, { id: "ordered-list", children: "Ordered list" }), "\n", (0, i.jsx)(t.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, i.jsx)(t.h2, { id: "voorbeeld", children: "Voorbeeld" }), "\n", (0, i.jsx)(l.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/ordered-list--gemeente-utrecht" }), "\n", (0, i.jsx)(t.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(t.h3, { id: "css", children: "CSS" }), "\n", (0, i.jsx)(t.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, i.jsxs)(t.ul, { children: ["\n", (0, i.jsxs)(t.li, { children: ["Implementatie: ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/ordered-list/css", children: "Ordered list CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, i.jsxs)(t.li, { children: ["Storybook: ", (0, i.jsx)(t.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-ordered-list--default-story", children: "Ordered list CSS storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, i.jsx)(t.h3, { id: "html", children: "HTML" }), "\n", (0, i.jsx)(t.h4, { id: "gemeente-utrecht-1", children: "Gemeente Utrecht" }), "\n", (0, i.jsxs)(t.ul, { children: ["\n", (0, i.jsxs)(t.li, { children: ["Implementatie: ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/ordered-list/html", children: "Ordered list HTML implementatie van Gemeente Utrecht" })] }), "\n", (0, i.jsxs)(t.li, { children: ["Storybook: ", (0, i.jsx)(t.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-ordered-list--default-story", children: "Ordered list HTML storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, i.jsx)(t.h3, { id: "figma", children: "Figma" }), "\n", (0, i.jsx)(t.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, i.jsxs)(t.ul, { children: ["\n", (0, i.jsxs)(t.li, { children: ["Implementatie: ", (0, i.jsx)(t.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=823-571", children: "Ordered list Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, i.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(t.p, { children: ["De Ordered list component staat bij NL Design System in de ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/117", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  8945: (e, t, n) => {
   n.d(t, { o: () => d });
   var i = n(4875);
   n(959);
   const s = "story_PQo9",
    l = "story__link_f0vD";
   var r = n(1527);
   const d = (e) => {
    let { label: t, href: n } = e;
    const d = n,
     o = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
    return (0, r.jsxs)("div", { className: s, children: [(0, r.jsx)(i.Z, { src: o, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), (0, r.jsx)("a", { className: l, href: d, target: "_blank", rel: "noreferrer", children: t })] });
   };
  },
 },
]);
