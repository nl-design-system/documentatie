"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2007],
 {
  8140: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => d, contentTitle: () => l, default: () => m, frontMatter: () => s, metadata: () => o, toc: () => c });
   var i = n(11527),
    a = n(80877);
   const s = { title: "Data list", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Data list", pagination_label: "Data list", description: "UX richtlijnen voor Data list component", slug: "/data-list", tags: ["Help Wanted"] },
    l = "Data list",
    o = { id: "componenten/build/data-list", title: "Data list", description: "UX richtlijnen voor Data list component", source: "@site/docs/componenten/build/data-list.mdx", sourceDirName: "componenten/build", slug: "/data-list", permalink: "/en/data-list", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/data-list.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Data list", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Data list", pagination_label: "Data list", description: "UX richtlijnen voor Data list component", slug: "/data-list", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Data badge", permalink: "/en/data-badge" }, next: { title: "Date input group", permalink: "/en/date-input-group" } },
    d = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function r(e) {
    const t = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, a.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(t.h1, { id: "data-list", children: "Data list" }), "\n", (0, i.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, i.jsx)(t.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(t.h3, { id: "figma", children: "Figma" }), "\n", (0, i.jsx)(t.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, i.jsxs)(t.ul, { children: ["\n", (0, i.jsxs)(t.li, { children: ["Implementatie: ", (0, i.jsx)(t.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1238-4478", children: "Data list Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, i.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(t.p, { children: ["De Data list component staat bij NL Design System in de ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/185", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, a.a)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  80877: (e, t, n) => {
   n.d(t, { Z: () => o, a: () => l });
   var i = n(50959);
   const a = {},
    s = i.createContext(a);
   function l(e) {
    const t = i.useContext(s);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function o(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(a) : e.components || a) : l(e.components)), i.createElement(s.Provider, { value: t }, e.children);
   }
  },
 },
]);
