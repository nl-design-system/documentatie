"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [10231],
 {
  11982: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => c, default: () => m, frontMatter: () => l, metadata: () => h, toc: () => a });
   var i = n(11527),
    s = n(47214),
    o = n(78945);
   const l = { title: "Switch", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Switch", pagination_label: "Switch", description: "UX richtlijnen voor Switch component", slug: "/switch", tags: ["Community"] },
    c = "Switch",
    h = { id: "componenten/build/switch", title: "Switch", description: "UX richtlijnen voor Switch component", source: "@site/docs/componenten/build/switch.mdx", sourceDirName: "componenten/build", slug: "/switch", permalink: "/en/switch", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/switch.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Switch", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Switch", pagination_label: "Switch", description: "UX richtlijnen voor Switch component", slug: "/switch", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Strong", permalink: "/en/strong" }, next: { title: "Table", permalink: "/en/table" } },
    r = {},
    a = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Web Component", id: "web-component", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function d(e) {
    const t = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", "\n", (0, i.jsx)(t.h1, { id: "switch", children: "Switch" }), "\n", (0, i.jsx)(t.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, i.jsx)(t.h2, { id: "voorbeeld", children: "Voorbeeld" }), "\n", (0, i.jsx)(o.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/switch--gemeente-utrecht" }), "\n", (0, i.jsx)(t.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(t.h3, { id: "css", children: "CSS" }), "\n", (0, i.jsx)(t.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, i.jsxs)(t.ul, { children: ["\n", (0, i.jsxs)(t.li, { children: ["Implementatie: ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/form-toggle/css", children: "Switch CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, i.jsxs)(t.li, { children: ["Storybook: ", (0, i.jsx)(t.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-form-toggle--default-story", children: "Switch CSS storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, i.jsx)(t.h3, { id: "web-component", children: "Web Component" }), "\n", (0, i.jsx)(t.h4, { id: "gemeente-utrecht-1", children: "Gemeente Utrecht" }), "\n", (0, i.jsxs)(t.ul, { children: ["\n", (0, i.jsxs)(t.li, { children: ["Implementatie: ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/form-toggle/web-component", children: "Switch Web Component implementatie van Gemeente Utrecht" })] }), "\n", (0, i.jsxs)(t.li, { children: ["Storybook: ", (0, i.jsx)(t.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-form-toggle--default-story", children: "Switch Web Component storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, i.jsx)(t.h3, { id: "react", children: "React" }), "\n", (0, i.jsx)(t.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, i.jsxs)(t.ul, { children: ["\n", (0, i.jsxs)(t.li, { children: ["Implementatie: ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/denhaag/blob/main/components/Switch/src/index.tsx", children: "Switch React implementatie van Gemeente Den Haag" })] }), "\n", (0, i.jsxs)(t.li, { children: ["Storybook: ", (0, i.jsx)(t.a, { href: "https://nl-design-system.github.io/denhaag/?path=/story/react-input-switch--default", children: "Switch React storybook van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, i.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(t.p, { children: ["De Switch component staat bij NL Design System in de ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/33", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
  78945: (e, t, n) => {
   n.d(t, { o: () => c });
   var i = n(64875);
   n(50959);
   const s = "story_PQo9",
    o = "story__link_f0vD";
   var l = n(11527);
   const c = (e) => {
    let { label: t, href: n } = e;
    const c = n,
     h = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
    return (0, l.jsxs)("div", { className: s, children: [(0, l.jsx)(i.Z, { src: h, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), (0, l.jsx)("a", { className: o, href: c, target: "_blank", rel: "noreferrer", children: t })] });
   };
  },
 },
]);
