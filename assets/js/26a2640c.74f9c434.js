"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [42766],
 {
  5071: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => h, contentTitle: () => r, default: () => c, frontMatter: () => l, metadata: () => o, toc: () => d });
   var a = n(11527),
    i = n(47214),
    s = n(67616);
   const l = { title: "Textarea", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Textarea", pagination_label: "Textarea", description: "UX richtlijnen voor Textarea component", slug: "/textarea", tags: ["Community"] },
    r = "Textarea",
    o = { id: "componenten/build/textarea", title: "Textarea", description: "UX richtlijnen voor Textarea component", source: "@site/docs/componenten/build/textarea.mdx", sourceDirName: "componenten/build", slug: "/textarea", permalink: "/textarea", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/textarea.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Textarea", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Textarea", pagination_label: "Textarea", description: "UX richtlijnen voor Textarea component", slug: "/textarea", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Text input", permalink: "/text-input" }, next: { title: "Toggletip", permalink: "/toggletip" } },
    h = {},
    d = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function m(e) {
    const t = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: "textarea", children: "Textarea" }), "\n", (0, a.jsx)(t.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, a.jsx)(t.h2, { id: "voorbeeld", children: "Voorbeeld" }), "\n", (0, a.jsx)(s.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/textarea--gemeente-utrecht" }), "\n", (0, a.jsx)(t.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, a.jsx)(t.h3, { id: "css", children: "CSS" }), "\n", (0, a.jsx)(t.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, a.jsxs)(t.ul, { children: ["\n", (0, a.jsxs)(t.li, { children: ["Implementatie: ", (0, a.jsx)(t.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/textarea/css", children: "Textarea CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, a.jsxs)(t.li, { children: ["Storybook: ", (0, a.jsx)(t.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-textarea--default-story", children: "Textarea CSS storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, a.jsx)(t.h3, { id: "html", children: "HTML" }), "\n", (0, a.jsx)(t.h4, { id: "gemeente-utrecht-1", children: "Gemeente Utrecht" }), "\n", (0, a.jsxs)(t.ul, { children: ["\n", (0, a.jsxs)(t.li, { children: ["Implementatie: ", (0, a.jsx)(t.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/textarea/html", children: "Textarea HTML implementatie van Gemeente Utrecht" })] }), "\n", (0, a.jsxs)(t.li, { children: ["Storybook: ", (0, a.jsx)(t.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-textarea--default-story", children: "Textarea HTML storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, a.jsx)(t.h3, { id: "react", children: "React" }), "\n", (0, a.jsx)(t.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, a.jsxs)(t.ul, { children: ["\n", (0, a.jsxs)(t.li, { children: ["Implementatie: ", (0, a.jsx)(t.a, { href: "https://github.com/nl-design-system/denhaag/tree/main/components/TextArea", children: "Textarea React implementatie van Gemeente Den Haag" })] }), "\n", (0, a.jsxs)(t.li, { children: ["Storybook: ", (0, a.jsx)(t.a, { href: "https://nl-design-system.github.io/denhaag/?path=/story/react-input-text-area--default-story", children: "Textarea React storybook van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, a.jsx)(t.h3, { id: "figma", children: "Figma" }), "\n", (0, a.jsx)(t.h4, { id: "gemeente-den-haag-1", children: "Gemeente Den Haag" }), "\n", (0, a.jsxs)(t.ul, { children: ["\n", (0, a.jsxs)(t.li, { children: ["Implementatie: ", (0, a.jsx)(t.a, { href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=7062%3A17687", children: "Textarea Figma implementatie van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, a.jsx)(t.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, a.jsxs)(t.ul, { children: ["\n", (0, a.jsxs)(t.li, { children: ["Implementatie: ", (0, a.jsx)(t.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=969-2047", children: "Textarea Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, a.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(t.p, { children: ["De Textarea component staat bij NL Design System in de ", (0, a.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/40", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function c(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
  67616: (e, t, n) => {
   n.d(t, { o: () => r });
   var a = n(64875);
   n(50959);
   const i = "story_PQo9",
    s = "story__link_f0vD";
   var l = n(11527);
   const r = (e) => {
    let { label: t, href: n } = e;
    const r = n,
     o = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
    return (0, l.jsxs)("div", { className: i, children: [(0, l.jsx)(a.Z, { src: o, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), (0, l.jsx)("a", { className: s, href: r, target: "_blank", rel: "noreferrer", children: t })] });
   };
  },
 },
]);
