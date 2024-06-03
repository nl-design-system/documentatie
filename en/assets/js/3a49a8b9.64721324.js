"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3407],
 {
  15295: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => s, default: () => d, frontMatter: () => c, metadata: () => l, toc: () => a });
   var o = t(52676),
    i = t(24785);
   const c = { title: "Checkbox group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Checkbox group", pagination_label: "Checkbox group", description: "UX richtlijnen voor Checkbox group component", slug: "/checkbox-group", tags: ["Unknown"] },
    s = "Checkbox group",
    l = { id: "componenten/build/checkbox-group", title: "Checkbox group", description: "UX richtlijnen voor Checkbox group component", source: "@site/docs/componenten/build/checkbox-group.mdx", sourceDirName: "componenten/build", slug: "/checkbox-group", permalink: "/en/checkbox-group", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/checkbox-group.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Checkbox group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Checkbox group", pagination_label: "Checkbox group", description: "UX richtlijnen voor Checkbox group component", slug: "/checkbox-group", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Character count", permalink: "/en/character-count" }, next: { title: "Checkbox", permalink: "/en/checkbox" } },
    r = {},
    a = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function h(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "checkbox-group", children: "Checkbox group" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, o.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, o.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, o.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Implementatie: ", (0, o.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=954-2226", children: "Checkbox group Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Checkbox group component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/128", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => s });
   var o = t(75271);
   const i = {},
    c = o.createContext(i);
   function s(e) {
    const n = o.useContext(c);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), o.createElement(c.Provider, { value: n }, e.children);
   }
  },
 },
]);
