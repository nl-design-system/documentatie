"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [47122],
 {
  61771: (e, t, n) => {
   n.d(t, { o: () => s });
   var a = n(76649),
    i = n(67294);
   const o = "story_PQo9",
    l = "story__link_f0vD",
    s = (e) => {
     let { label: t, href: n } = e;
     const s = n,
      m = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
     return i.createElement("div", { className: o }, i.createElement(a.Z, { src: m, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), i.createElement("a", { className: l, href: s, target: "_blank", rel: "noreferrer" }, t));
    };
  },
  87347: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => s, default: () => c, frontMatter: () => l, metadata: () => m, toc: () => d });
   var a = n(87462),
    i = (n(67294), n(3905)),
    o = n(61771);
   const l = { title: "Radio button", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Radio button", pagination_label: "Radio button", description: "UX richtlijnen voor Radio button component", slug: "/radio", tags: ["Community"] },
    s = void 0,
    m = { unversionedId: "componenten/build/radio", id: "componenten/build/radio", title: "Radio button", description: "UX richtlijnen voor Radio button component", source: "@site/docs/componenten/build/radio.mdx", sourceDirName: "componenten/build", slug: "/radio", permalink: "/en/radio", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/radio.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Radio button", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Radio button", pagination_label: "Radio button", description: "UX richtlijnen voor Radio button component", slug: "/radio", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Radio group", permalink: "/en/radio-group" }, next: { title: "Range", permalink: "/en/range" } },
    r = {},
    d = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    u = { toc: d },
    h = "wrapper";
   function c(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(h, (0, a.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "radio-button" }, "Radio button"), (0, i.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, i.kt)("h2", { id: "voorbeeld" }, "Voorbeeld"), (0, i.kt)(o.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/radio--gemeente-utrecht", mdxType: "Story" }), (0, i.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, i.kt)("h3", { id: "css" }, "CSS"), (0, i.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/custom-radio-button/css" }, "Radio button CSS implementatie van Gemeente Utrecht")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-custom-radio-button--default-story" }, "Radio button CSS storybook van Gemeente Utrecht"))), (0, i.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/tree/main/components/Radio/src/index.scss" }, "Radio button CSS implementatie van Gemeente Den Haag")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/css-input-radio--default-story" }, "Radio button CSS storybook van Gemeente Den Haag"))), (0, i.kt)("h3", { id: "html" }, "HTML"), (0, i.kt)("h4", { id: "gemeente-utrecht-1" }, "Gemeente Utrecht"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/radio-button/html" }, "Radio button HTML implementatie van Gemeente Utrecht")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-radio-button--default-story" }, "Radio button HTML storybook van Gemeente Utrecht"))), (0, i.kt)("h3", { id: "react" }, "React"), (0, i.kt)("h4", { id: "gemeente-den-haag-1" }, "Gemeente Den Haag"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/tree/main/components/Radio/src/index.tsx" }, "Radio button React implementatie van Gemeente Den Haag")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/react-input-radio-radio--default" }, "Radio button React storybook van Gemeente Den Haag"))), (0, i.kt)("h3", { id: "figma" }, "Figma"), (0, i.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1039-2941" }, "Radio button Figma implementatie van NL Design System"))), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Radio button component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/65" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   c.isMDXComponent = !0;
  },
 },
]);
