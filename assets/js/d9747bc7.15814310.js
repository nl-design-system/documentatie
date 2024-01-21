"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6627],
 {
  2278: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => s, default: () => c, frontMatter: () => l, metadata: () => d, toc: () => a });
   var i = t(1527),
    o = t(7214);
   const l = { title: "Form field", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field", pagination_label: "Form field", description: "UX richtlijnen voor Form field component", slug: "/form-field", tags: ["Help Wanted"] },
    s = "Form field",
    d = { id: "componenten/build/form-field", title: "Form field", description: "UX richtlijnen voor Form field component", source: "@site/docs/componenten/build/form-field.mdx", sourceDirName: "componenten/build", slug: "/form-field", permalink: "/form-field", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field", pagination_label: "Form field", description: "UX richtlijnen voor Form field component", slug: "/form-field", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field radio option", permalink: "/form-field-radio-option" }, next: { title: "Heading 1", permalink: "/heading-1" } },
    r = {},
    a = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function m(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "form-field", children: "Form field" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, i.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=958-1925", children: "Form field Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Form field component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/176", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  7214: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => s });
   var i = t(959);
   const o = {},
    l = i.createContext(o);
   function s(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), i.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
