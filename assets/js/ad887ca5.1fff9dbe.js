"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1170],
 {
  61771: (e, t, n) => {
   n.d(t, { o: () => m });
   var o = n(76649),
    a = n(67294);
   const i = "story_PQo9",
    l = "story__link_f0vD",
    m = (e) => {
     let { label: t, href: n } = e;
     const m = n,
      c = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
     return a.createElement("div", { className: i }, a.createElement(o.Z, { src: c, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), a.createElement("a", { className: l, href: m, target: "_blank", rel: "noreferrer" }, t));
    };
  },
  28105: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => m, default: () => k, frontMatter: () => l, metadata: () => c, toc: () => h });
   var o = n(87462),
    a = (n(67294), n(3905)),
    i = n(61771);
   const l = { title: "Checkbox", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Checkbox", pagination_label: "Checkbox", description: "UX richtlijnen voor Checkbox component", slug: "/checkbox", tags: ["Community"] },
    m = void 0,
    c = { unversionedId: "componenten/build/checkbox", id: "componenten/build/checkbox", title: "Checkbox", description: "UX richtlijnen voor Checkbox component", source: "@site/docs/componenten/build/checkbox.mdx", sourceDirName: "componenten/build", slug: "/checkbox", permalink: "/checkbox", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/checkbox.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Checkbox", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Checkbox", pagination_label: "Checkbox", description: "UX richtlijnen voor Checkbox component", slug: "/checkbox", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Checkbox group", permalink: "/checkbox-group" }, next: { title: "Counter badge", permalink: "/counter-badge" } },
    s = {},
    h = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "Web Component", id: "web-component", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-2", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    r = { toc: h },
    d = "wrapper";
   function k(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(d, (0, o.Z)({}, r, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "checkbox" }, "Checkbox"), (0, a.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, a.kt)("h2", { id: "voorbeeld" }, "Voorbeeld"), (0, a.kt)(i.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/checkbox--gemeente-utrecht", mdxType: "Story" }), (0, a.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, a.kt)("h3", { id: "css" }, "CSS"), (0, a.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/custom-checkbox/css" }, "Checkbox CSS implementatie van Gemeente Utrecht")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-custom-checkbox--default-story" }, "Checkbox CSS storybook van Gemeente Utrecht"))), (0, a.kt)("h3", { id: "html" }, "HTML"), (0, a.kt)("h4", { id: "gemeente-utrecht-1" }, "Gemeente Utrecht"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/checkbox/html" }, "Checkbox HTML implementatie van Gemeente Utrecht")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-checkbox--default-story" }, "Checkbox HTML storybook van Gemeente Utrecht"))), (0, a.kt)("h3", { id: "web-component" }, "Web Component"), (0, a.kt)("h4", { id: "gemeente-utrecht-2" }, "Gemeente Utrecht"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/custom-checkbox/web-component" }, "Checkbox Web Component implementatie van Gemeente Utrecht")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-custom-checkbox--default-story" }, "Checkbox Web Component storybook van Gemeente Utrecht"))), (0, a.kt)("h3", { id: "react" }, "React"), (0, a.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/tree/main/components/Checkbox" }, "Checkbox React implementatie van Gemeente Den Haag")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/react-input-checkbox--default-story" }, "Checkbox React storybook van Gemeente Den Haag"))), (0, a.kt)("h3", { id: "figma" }, "Figma"), (0, a.kt)("h4", { id: "gemeente-den-haag-1" }, "Gemeente Den Haag"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1450%3A4570" }, "Checkbox Figma implementatie van Gemeente Den Haag"))), (0, a.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=944-1535" }, "Checkbox Figma implementatie van NL Design System"))), (0, a.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, a.kt)("p", null, "De Checkbox component staat bij NL Design System in de ", (0, a.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/64" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   k.isMDXComponent = !0;
  },
 },
]);
