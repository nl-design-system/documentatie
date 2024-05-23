"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8394],
 {
  10220: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => a, contentTitle: () => d, default: () => m, frontMatter: () => o, metadata: () => r, toc: () => c });
   var i = n(52676),
    s = n(24785),
    l = n(17925);
   const o = { title: "Fieldset", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Fieldset", pagination_label: "Fieldset", description: "UX richtlijnen voor Fieldset component", slug: "/fieldset", tags: ["Community"] },
    d = "Fieldset",
    r = { id: "componenten/build/fieldset", title: "Fieldset", description: "UX richtlijnen voor Fieldset component", source: "@site/docs/componenten/build/fieldset.mdx", sourceDirName: "componenten/build", slug: "/fieldset", permalink: "/fieldset", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/fieldset.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Fieldset", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Fieldset", pagination_label: "Fieldset", description: "UX richtlijnen voor Fieldset component", slug: "/fieldset", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Dot badge", permalink: "/dot-badge" }, next: { title: "Figure", permalink: "/figure" } },
    a = {},
    c = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function h(e) {
    const t = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", "\n", (0, i.jsx)(t.h1, { id: "fieldset", children: "Fieldset" }), "\n", (0, i.jsx)(t.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, i.jsx)(t.h2, { id: "voorbeeld", children: "Voorbeeld" }), "\n", (0, i.jsx)(l.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/iframe.html?viewMode=story&id=fieldset--utrecht" }), "\n", (0, i.jsx)(t.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(t.h3, { id: "css", children: "CSS" }), "\n", (0, i.jsx)(t.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, i.jsxs)(t.ul, { children: ["\n", (0, i.jsxs)(t.li, { children: ["Implementatie: ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/form-fieldset/css", children: "Fieldset CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, i.jsxs)(t.li, { children: ["Storybook: ", (0, i.jsx)(t.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-form-fieldset--default-story", children: "Fieldset CSS storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, i.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(t.p, { children: ["De Fieldset component staat bij NL Design System in de ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/124", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
  },
  17925: (e, t, n) => {
   n.d(t, { o: () => d });
   var i = n(36629);
   n(75271);
   const s = "story_PQo9",
    l = "story__link_f0vD";
   var o = n(52676);
   const d = (e) => {
    let { label: t, href: n } = e;
    const d = n,
     r = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
    return (0, o.jsxs)("div", { className: s, children: [(0, o.jsx)(i.Z, { src: r, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), (0, o.jsx)("a", { className: l, href: d, target: "_blank", rel: "noreferrer", children: t })] });
   };
  },
 },
]);