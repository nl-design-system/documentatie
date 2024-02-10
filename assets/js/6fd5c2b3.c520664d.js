"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [294],
 {
  24234: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => o, default: () => m, frontMatter: () => c, metadata: () => a, toc: () => d });
   var s = n(11527),
    i = n(27034),
    l = n(78945);
   const c = { title: "Select", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Select", pagination_label: "Select", description: "UX richtlijnen voor Select component", slug: "/select", tags: ["Community"] },
    o = "Select",
    a = { id: "componenten/build/select", title: "Select", description: "UX richtlijnen voor Select component", source: "@site/docs/componenten/build/select.mdx", sourceDirName: "componenten/build", slug: "/select", permalink: "/select", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/select.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Select", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Select", pagination_label: "Select", description: "UX richtlijnen voor Select component", slug: "/select", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Rich text content", permalink: "/rich-text-content" }, next: { title: "Separator", permalink: "/separator" } },
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
    const t = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ["\n", "\n", "\n", "\n", (0, s.jsx)(t.h1, { id: "select", children: "Select" }), "\n", (0, s.jsx)(t.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, s.jsx)(t.h2, { id: "voorbeeld", children: "Voorbeeld" }), "\n", (0, s.jsx)(l.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/select--gemeente-utrecht" }), "\n", (0, s.jsx)(t.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, s.jsx)(t.h3, { id: "css", children: "CSS" }), "\n", (0, s.jsx)(t.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, s.jsxs)(t.ul, { children: ["\n", (0, s.jsxs)(t.li, { children: ["Implementatie: ", (0, s.jsx)(t.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/select", children: "Select CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, s.jsxs)(t.li, { children: ["Storybook: ", (0, s.jsx)(t.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-select--default-story", children: "Select CSS storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, s.jsx)(t.h3, { id: "figma", children: "Figma" }), "\n", (0, s.jsx)(t.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, s.jsxs)(t.ul, { children: ["\n", (0, s.jsxs)(t.li, { children: ["Implementatie: ", (0, s.jsx)(t.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1130-3652", children: "Select Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, s.jsx)(t.h3, { id: "react", children: "React" }), "\n", (0, s.jsx)(t.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, s.jsxs)(t.ul, { children: ["\n", (0, s.jsxs)(t.li, { children: ["Implementatie: ", (0, s.jsx)(t.a, { href: "https://github.com/nl-design-system/denhaag/blob/main/components/Select/src/index.tsx", children: "Select React implementatie van Gemeente Den Haag" })] }), "\n", (0, s.jsx)(t.li, { children: "Storybook: (nog) geen story beschikbaar" }), "\n"] }), "\n", (0, s.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, s.jsxs)(t.p, { children: ["De Select component staat bij NL Design System in de ", (0, s.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/34", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
  },
  78945: (e, t, n) => {
   n.d(t, { o: () => o });
   var s = n(64875);
   n(50959);
   const i = "story_PQo9",
    l = "story__link_f0vD";
   var c = n(11527);
   const o = (e) => {
    let { label: t, href: n } = e;
    const o = n,
     a = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
    return (0, c.jsxs)("div", { className: i, children: [(0, c.jsx)(s.Z, { src: a, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), (0, c.jsx)("a", { className: l, href: o, target: "_blank", rel: "noreferrer", children: t })] });
   };
  },
 },
]);
