"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [294],
 {
  65817: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => a, default: () => m, frontMatter: () => c, metadata: () => o, toc: () => d });
   var l = n(52676),
    s = n(24785),
    i = n(17925);
   const c = { title: "Select", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Select", pagination_label: "Select", description: "UX richtlijnen voor Select component", slug: "/select", tags: ["Unknown"] },
    a = "Select",
    o = { id: "componenten/build/select", title: "Select", description: "UX richtlijnen voor Select component", source: "@site/docs/componenten/build/select.mdx", sourceDirName: "componenten/build", slug: "/select", permalink: "/en/select", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/select.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Select", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Select", pagination_label: "Select", description: "UX richtlijnen voor Select component", slug: "/select", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Rich text content", permalink: "/en/rich-text-content" }, next: { title: "Separator", permalink: "/en/separator" } },
    r = {},
    d = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function h(e) {
    const t = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ["\n", "\n", "\n", "\n", (0, l.jsx)(t.h1, { id: "select", children: "Select" }), "\n", (0, l.jsx)(t.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, l.jsx)(t.h2, { id: "voorbeeld", children: "Voorbeeld" }), "\n", (0, l.jsx)(i.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/iframe.html?viewMode=story&id=select--utrecht" }), "\n", (0, l.jsx)(t.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, l.jsx)(t.h3, { id: "css", children: "CSS" }), "\n", (0, l.jsx)(t.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, l.jsxs)(t.ul, { children: ["\n", (0, l.jsxs)(t.li, { children: ["Implementatie: ", (0, l.jsx)(t.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/select", children: "Select CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, l.jsxs)(t.li, { children: ["Storybook: ", (0, l.jsx)(t.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-select--default-story", children: "Select CSS storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, l.jsx)(t.h3, { id: "figma", children: "Figma" }), "\n", (0, l.jsx)(t.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, l.jsxs)(t.ul, { children: ["\n", (0, l.jsxs)(t.li, { children: ["Implementatie: ", (0, l.jsx)(t.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1130-3652", children: "Select Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, l.jsx)(t.h3, { id: "react", children: "React" }), "\n", (0, l.jsx)(t.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, l.jsxs)(t.ul, { children: ["\n", (0, l.jsxs)(t.li, { children: ["Implementatie: ", (0, l.jsx)(t.a, { href: "https://github.com/nl-design-system/denhaag/blob/main/components/Select/src/index.tsx", children: "Select React implementatie van Gemeente Den Haag" })] }), "\n", (0, l.jsx)(t.li, { children: "Storybook: (nog) geen story beschikbaar" }), "\n"] }), "\n", (0, l.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, l.jsxs)(t.p, { children: ["De Select component staat bij NL Design System in de ", (0, l.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/34", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, l.jsx)(t, { ...e, children: (0, l.jsx)(h, { ...e }) }) : h(e);
   }
  },
  17925: (e, t, n) => {
   n.d(t, { o: () => a });
   var l = n(36629);
   n(75271);
   const s = "story_PQo9",
    i = "story__link_f0vD";
   var c = n(52676);
   const a = (e) => {
    let { label: t, href: n } = e;
    const a = n,
     o = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
    return (0, c.jsxs)("div", { className: s, children: [(0, c.jsx)(l.Z, { src: o, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), (0, c.jsx)("a", { className: i, href: a, target: "_blank", rel: "noreferrer", children: t })] });
   };
  },
 },
]);
