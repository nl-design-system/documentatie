"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3407],
 {
  15295: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => c, default: () => h, frontMatter: () => s, metadata: () => l, toc: () => a });
   var o = t(52676),
    i = t(24785);
   const s = { title: "Checkbox group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Checkbox group", pagination_label: "Checkbox group", description: "UX richtlijnen voor Checkbox group component", slug: "/checkbox-group", tags: ["Help Wanted"] },
    c = "Checkbox group",
    l = { id: "componenten/build/checkbox-group", title: "Checkbox group", description: "UX richtlijnen voor Checkbox group component", source: "@site/docs/componenten/build/checkbox-group.mdx", sourceDirName: "componenten/build", slug: "/checkbox-group", permalink: "/en/checkbox-group", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/checkbox-group.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Checkbox group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Checkbox group", pagination_label: "Checkbox group", description: "UX richtlijnen voor Checkbox group component", slug: "/checkbox-group", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Card as link", permalink: "/en/card-as-link" }, next: { title: "Checkbox", permalink: "/en/checkbox" } },
    r = {},
    a = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "checkbox-group", children: "Checkbox group" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, o.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, o.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, o.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Implementatie: ", (0, o.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=954-2226", children: "Checkbox group Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Checkbox group component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/128", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => c });
   var o = t(75271);
   const i = {},
    s = o.createContext(i);
   function c(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : c(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
