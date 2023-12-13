"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6305],
 {
  94058: (e, t, s) => {
   s.r(t), s.d(t, { assets: () => r, contentTitle: () => d, default: () => m, frontMatter: () => l, metadata: () => o, toc: () => c });
   var n = s(11527),
    i = s(47214),
    a = s(67616);
   const l = { title: "Status badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Status badge", pagination_label: "Status badge", description: "UX richtlijnen voor Status badge component", slug: "/status-badge", tags: ["Community"] },
    d = "Status badge",
    o = { id: "componenten/build/status-badge", title: "Status badge", description: "UX richtlijnen voor Status badge component", source: "@site/docs/componenten/build/status-badge.mdx", sourceDirName: "componenten/build", slug: "/status-badge", permalink: "/en/status-badge", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/status-badge.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Status badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Status badge", pagination_label: "Status badge", description: "UX richtlijnen voor Status badge component", slug: "/status-badge", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Spinner", permalink: "/en/spinner" }, next: { title: "Strong", permalink: "/en/strong" } },
    r = {},
    c = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function h(e) {
    const t = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(t.h1, { id: "status-badge", children: "Status badge" }), "\n", (0, n.jsx)(t.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, n.jsx)(t.h2, { id: "voorbeeld", children: "Voorbeeld" }), "\n", (0, n.jsx)(a.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/status-badge--gemeente-utrecht" }), "\n", (0, n.jsx)(t.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, n.jsx)(t.h3, { id: "css", children: "CSS" }), "\n", (0, n.jsx)(t.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, n.jsxs)(t.ul, { children: ["\n", (0, n.jsxs)(t.li, { children: ["Implementatie: ", (0, n.jsx)(t.a, { href: "https://github.com/nl-design-system/utrecht/blob/main/components/badge-status/css/index.scss", children: "Status badge CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, n.jsxs)(t.li, { children: ["Storybook: ", (0, n.jsx)(t.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-status-badge--default-story", children: "Status badge CSS storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, n.jsx)(t.h3, { id: "figma", children: "Figma" }), "\n", (0, n.jsx)(t.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, n.jsxs)(t.ul, { children: ["\n", (0, n.jsxs)(t.li, { children: ["Implementatie: ", (0, n.jsx)(t.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1354-6672", children: "Status badge Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, n.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, n.jsxs)(t.p, { children: ["De Status badge component staat bij NL Design System in de ", (0, n.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/6", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(h, { ...e }) }) : h(e);
   }
  },
  67616: (e, t, s) => {
   s.d(t, { o: () => d });
   var n = s(64875);
   s(50959);
   const i = "story_PQo9",
    a = "story__link_f0vD";
   var l = s(11527);
   const d = (e) => {
    let { label: t, href: s } = e;
    const d = s,
     o = s.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
    return (0, l.jsxs)("div", { className: i, children: [(0, l.jsx)(n.Z, { src: o, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), (0, l.jsx)("a", { className: a, href: d, target: "_blank", rel: "noreferrer", children: t })] });
   };
  },
 },
]);
