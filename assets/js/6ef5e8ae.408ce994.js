"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7117],
 {
  61771: (e, t, n) => {
   n.d(t, { o: () => o });
   var i = n(76649),
    a = n(67294);
   const l = "story_PQo9",
    m = "story__link_f0vD",
    o = (e) => {
     let { label: t, href: n } = e;
     const o = n,
      s = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
     return a.createElement("div", { className: l }, a.createElement(i.Z, { src: s, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), a.createElement("a", { className: m, href: o, target: "_blank", rel: "noreferrer" }, t));
    };
  },
  41085: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => o, default: () => d, frontMatter: () => m, metadata: () => s, toc: () => p });
   var i = n(87462),
    a = (n(67294), n(3905)),
    l = n(61771);
   const m = { title: "Text input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Text input", pagination_label: "Text input", description: "UX richtlijnen voor Text input component", slug: "/text-input", tags: ["Community"] },
    o = void 0,
    s = { unversionedId: "componenten/build/text-input", id: "componenten/build/text-input", title: "Text input", description: "UX richtlijnen voor Text input component", source: "@site/docs/componenten/build/text-input.mdx", sourceDirName: "componenten/build", slug: "/text-input", permalink: "/text-input", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/text-input.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Text input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Text input", pagination_label: "Text input", description: "UX richtlijnen voor Text input component", slug: "/text-input", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Text input group", permalink: "/text-input-group" }, next: { title: "Textarea", permalink: "/textarea" } },
    r = {},
    p = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-2", level: 4 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-2", level: 4 },
     { value: "Web Component", id: "web-component", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-3", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    u = { toc: p },
    h = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(h, (0, i.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "text-input" }, "Text input"), (0, a.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, a.kt)("h2", { id: "voorbeeld" }, "Voorbeeld"), (0, a.kt)(l.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/text-input--gemeente-utrecht", mdxType: "Story" }), (0, a.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, a.kt)("h3", { id: "react" }, "React"), (0, a.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/blob/main/components/TextField/src/index.tsx" }, "Text input React implementatie van Gemeente Den Haag")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/react-input-textfield--default-story" }, "Text input React storybook van Gemeente Den Haag"))), (0, a.kt)("h3", { id: "css" }, "CSS"), (0, a.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/textbox/css" }, "Text input CSS implementatie van Gemeente Utrecht")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-textbox--default-story" }, "Text input CSS storybook van Gemeente Utrecht"))), (0, a.kt)("h4", { id: "gemeente-den-haag-1" }, "Gemeente Den Haag"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/blob/main/components/TextField/src/index.scss" }, "Text input CSS implementatie van Gemeente Den Haag")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: (nog) geen story beschikbaar")), (0, a.kt)("h3", { id: "figma" }, "Figma"), (0, a.kt)("h4", { id: "gemeente-den-haag-2" }, "Gemeente Den Haag"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag" }, "Text input Figma implementatie van Gemeente Den Haag"))), (0, a.kt)("h4", { id: "gemeente-utrecht-1" }, "Gemeente Utrecht"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://www.figma.com/file/msb3CfQBefPoruqNQ968Zh/Utrecht-Design-System?node-id=302%3A3975" }, "Text input Figma implementatie van Gemeente Utrecht"))), (0, a.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=859-981" }, "Text input Figma implementatie van NL Design System"))), (0, a.kt)("h3", { id: "html" }, "HTML"), (0, a.kt)("h4", { id: "gemeente-utrecht-2" }, "Gemeente Utrecht"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/textbox/html" }, "Text input HTML implementatie van Gemeente Utrecht")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-textbox--default-story" }, "Text input HTML storybook van Gemeente Utrecht"))), (0, a.kt)("h3", { id: "web-component" }, "Web Component"), (0, a.kt)("h4", { id: "gemeente-utrecht-3" }, "Gemeente Utrecht"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/textbox/web-component" }, "Text input Web Component implementatie van Gemeente Utrecht")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-textbox--default-story" }, "Text input Web Component storybook van Gemeente Utrecht"))), (0, a.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, a.kt)("p", null, "De Text input component staat bij NL Design System in de ", (0, a.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/5" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
