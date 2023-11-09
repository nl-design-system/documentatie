"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [41954],
 {
  61771: (e, t, n) => {
   n.d(t, { o: () => o });
   var i = n(76649),
    a = n(67294);
   const s = "story_PQo9",
    l = "story__link_f0vD",
    o = (e) => {
     let { label: t, href: n } = e;
     const o = n,
      d = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
     return a.createElement("div", { className: s }, a.createElement(i.Z, { src: d, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), a.createElement("a", { className: l, href: o, target: "_blank", rel: "noreferrer" }, t));
    };
  },
  54605: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => m, contentTitle: () => o, default: () => h, frontMatter: () => l, metadata: () => d, toc: () => r });
   var i = n(87462),
    a = (n(67294), n(3905)),
    s = n(61771);
   const l = { title: "Heading 3", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Heading 3", pagination_label: "Heading 3", description: "UX richtlijnen voor Heading 3 component", slug: "/heading-3", tags: ["Community"] },
    o = void 0,
    d = { unversionedId: "componenten/build/heading-3", id: "componenten/build/heading-3", title: "Heading 3", description: "UX richtlijnen voor Heading 3 component", source: "@site/docs/componenten/build/heading-3.mdx", sourceDirName: "componenten/build", slug: "/heading-3", permalink: "/en/heading-3", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/heading-3.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Heading 3", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Heading 3", pagination_label: "Heading 3", description: "UX richtlijnen voor Heading 3 component", slug: "/heading-3", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Heading 2", permalink: "/en/heading-2" }, next: { title: "Heading 4", permalink: "/en/heading-4" } },
    m = {},
    r = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    c = { toc: r },
    g = "wrapper";
   function h(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(g, (0, i.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "heading-3" }, "Heading 3"), (0, a.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, a.kt)("h2", { id: "voorbeeld" }, "Voorbeeld"), (0, a.kt)(s.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/heading-3--gemeente-utrecht", mdxType: "Story" }), (0, a.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, a.kt)("h3", { id: "css" }, "CSS"), (0, a.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/heading/css" }, "Heading 3 CSS implementatie van Gemeente Utrecht")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-3--default-story" }, "Heading 3 CSS storybook van Gemeente Utrecht"))), (0, a.kt)("h3", { id: "figma" }, "Figma"), (0, a.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039" }, "Heading 3 Figma implementatie van NL Design System"))), (0, a.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, a.kt)("p", null, "De Heading 3 component staat bij NL Design System in de ", (0, a.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/114" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   h.isMDXComponent = !0;
  },
 },
]);
