"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6305],
 {
  61771: (e, t, n) => {
   n.d(t, { o: () => l });
   var s = n(76649),
    a = n(67294);
   const i = "story_PQo9",
    o = "story__link_f0vD",
    l = (e) => {
     let { label: t, href: n } = e;
     const l = n,
      d = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
     return a.createElement("div", { className: i }, a.createElement(s.Z, { src: d, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), a.createElement("a", { className: o, href: l, target: "_blank", rel: "noreferrer" }, t));
    };
  },
  50763: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => m, contentTitle: () => l, default: () => g, frontMatter: () => o, metadata: () => d, toc: () => r });
   var s = n(87462),
    a = (n(67294), n(3905)),
    i = n(61771);
   const o = { title: "Status badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Status badge", pagination_label: "Status badge", description: "UX richtlijnen voor Status badge component", slug: "/status-badge", tags: ["Community"] },
    l = void 0,
    d = { unversionedId: "componenten/build/status-badge", id: "componenten/build/status-badge", title: "Status badge", description: "UX richtlijnen voor Status badge component", source: "@site/docs/componenten/build/status-badge.mdx", sourceDirName: "componenten/build", slug: "/status-badge", permalink: "/status-badge", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/status-badge.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Status badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Status badge", pagination_label: "Status badge", description: "UX richtlijnen voor Status badge component", slug: "/status-badge", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Spinner", permalink: "/spinner" }, next: { title: "Strong", permalink: "/strong" } },
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
    u = { toc: r },
    c = "wrapper";
   function g(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(c, (0, s.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "status-badge" }, "Status badge"), (0, a.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, a.kt)("h2", { id: "voorbeeld" }, "Voorbeeld"), (0, a.kt)(i.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/status-badge--gemeente-utrecht", mdxType: "Story" }), (0, a.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, a.kt)("h3", { id: "css" }, "CSS"), (0, a.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/blob/main/components/badge-status/css/index.scss" }, "Status badge CSS implementatie van Gemeente Utrecht")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-status-badge--default-story" }, "Status badge CSS storybook van Gemeente Utrecht"))), (0, a.kt)("h3", { id: "figma" }, "Figma"), (0, a.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1354-6672" }, "Status badge Figma implementatie van NL Design System"))), (0, a.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, a.kt)("p", null, "De Status badge component staat bij NL Design System in de ", (0, a.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/6" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   g.isMDXComponent = !0;
  },
 },
]);
