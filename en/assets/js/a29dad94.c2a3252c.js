"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [689],
 {
  78238: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => o, default: () => m, frontMatter: () => a, metadata: () => l, toc: () => c });
   var t = i(52676),
    s = i(24785);
   const a = { title: "Side navigation", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Side navigation", pagination_label: "Side navigation", description: "UX richtlijnen voor Side navigation component", slug: "/side-navigation", tags: ["Community"] },
    o = "Side navigation",
    l = { id: "componenten/build/side-navigation", title: "Side navigation", description: "UX richtlijnen voor Side navigation component", source: "@site/docs/componenten/build/side-navigation.mdx", sourceDirName: "componenten/build", slug: "/side-navigation", permalink: "/en/side-navigation", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/side-navigation.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Side navigation", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Side navigation", pagination_label: "Side navigation", description: "UX richtlijnen voor Side navigation component", slug: "/side-navigation", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Separator", permalink: "/en/separator" }, next: { title: "Skip link", permalink: "/en/skip-link" } },
    d = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function r(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", (0, t.jsx)(n.h1, { id: "side-navigation", children: "Side navigation" }), "\n", (0, t.jsx)(n.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, t.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, t.jsx)(n.h3, { id: "css", children: "CSS" }), "\n", (0, t.jsx)(n.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Implementatie: ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/navigatie%20sidenav/css", children: "Side navigation CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, t.jsxs)(n.li, { children: ["Storybook: ", (0, t.jsx)(n.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-sidenav--default-story", children: "Side navigation CSS storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, t.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, t.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Implementatie: ", (0, t.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1670-10258", children: "Side navigation Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, t.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, t.jsxs)(n.p, { children: ["De Side navigation component staat bij NL Design System in de ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/53", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => o });
   var t = i(75271);
   const s = {},
    a = t.createContext(s);
   function o(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
