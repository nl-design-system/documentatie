"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4306],
 {
  68625: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => a, default: () => m, frontMatter: () => s, metadata: () => o, toc: () => d });
   var i = t(11527),
    l = t(80877);
   const s = { title: "Alert", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Alert", pagination_label: "Alert", description: "UX richtlijnen voor Alert component", slug: "/alert", tags: ["Community"] },
    a = "Alert",
    o = { id: "componenten/build/alert", title: "Alert", description: "UX richtlijnen voor Alert component", source: "@site/docs/componenten/build/alert.mdx", sourceDirName: "componenten/build", slug: "/alert", permalink: "/en/alert", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/alert.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Alert", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Alert", pagination_label: "Alert", description: "UX richtlijnen voor Alert component", slug: "/alert", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Alert dialog", permalink: "/en/alert-dialog" }, next: { title: "Avatar", permalink: "/en/avatar" } },
    r = {},
    d = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "alert", children: "Alert" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "css", children: "CSS" }), "\n", (0, i.jsx)(n.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/denhaag/blob/main/components/Alert/src/index.scss", children: "Alert CSS implementatie van Gemeente Den Haag" })] }), "\n", (0, i.jsxs)(n.li, { children: ["Storybook: ", (0, i.jsx)(n.a, { href: "https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-alert--error", children: "Alert CSS storybook van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, i.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, i.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1179-3892", children: "Alert Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Alert component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/9", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  80877: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => a });
   var i = t(50959);
   const l = {},
    s = i.createContext(l);
   function a(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : a(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
