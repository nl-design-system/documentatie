"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [82920],
 {
  45533: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => r, default: () => m, frontMatter: () => i, metadata: () => l, toc: () => a });
   var s = n(11527),
    o = n(47214);
   const i = { title: "Strong", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Strong", pagination_label: "Strong", description: "UX richtlijnen voor Strong component", slug: "/strong", tags: ["Community"] },
    r = "Strong",
    l = { id: "componenten/build/strong", title: "Strong", description: "UX richtlijnen voor Strong component", source: "@site/docs/componenten/build/strong.mdx", sourceDirName: "componenten/build", slug: "/strong", permalink: "/strong", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/strong.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Strong", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Strong", pagination_label: "Strong", description: "UX richtlijnen voor Strong component", slug: "/strong", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Status badge", permalink: "/status-badge" }, next: { title: "Switch", permalink: "/switch" } },
    c = {},
    a = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function h(e) {
    const t = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(t.h1, { id: "strong", children: "Strong" }), "\n", (0, s.jsx)(t.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, s.jsx)(t.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, s.jsx)(t.h3, { id: "css", children: "CSS" }), "\n", (0, s.jsx)(t.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, s.jsxs)(t.ul, { children: ["\n", (0, s.jsxs)(t.li, { children: ["Implementatie: ", (0, s.jsx)(t.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/emphasis/css", children: "Strong CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, s.jsxs)(t.li, { children: ["Storybook: ", (0, s.jsx)(t.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-emphasis--strong", children: "Strong CSS storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, s.jsx)(t.h3, { id: "html", children: "HTML" }), "\n", (0, s.jsx)(t.h4, { id: "gemeente-utrecht-1", children: "Gemeente Utrecht" }), "\n", (0, s.jsxs)(t.ul, { children: ["\n", (0, s.jsxs)(t.li, { children: ["Implementatie: ", (0, s.jsx)(t.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/emphasis/html", children: "Strong HTML implementatie van Gemeente Utrecht" })] }), "\n", (0, s.jsxs)(t.li, { children: ["Storybook: ", (0, s.jsx)(t.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-emphasis--strong", children: "Strong HTML storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, s.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, s.jsxs)(t.p, { children: ["De Strong component staat bij NL Design System in de ", (0, s.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/138", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, o.a)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
  },
  47214: (e, t, n) => {
   n.d(t, { Z: () => l, a: () => r });
   var s = n(50959);
   const o = {},
    i = s.createContext(o);
   function r(e) {
    const t = s.useContext(i);
    return s.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e]
    );
   }
   function l(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), s.createElement(i.Provider, { value: t }, e.children);
   }
  },
 },
]);
