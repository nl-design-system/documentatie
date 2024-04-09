"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8281],
 {
  30665: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => d, contentTitle: () => c, default: () => m, frontMatter: () => l, metadata: () => s, toc: () => r });
   var t = o(11527),
    i = o(80877);
   const l = { title: "Form field checkbox option", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field checkbox option", pagination_label: "Form field checkbox option", description: "UX richtlijnen voor Form field checkbox option component", slug: "/form-field-checkbox-option", tags: ["Help Wanted"] },
    c = "Form field checkbox option",
    s = { id: "componenten/build/form-field-checkbox-option", title: "Form field checkbox option", description: "UX richtlijnen voor Form field checkbox option component", source: "@site/docs/componenten/build/form-field-checkbox-option.mdx", sourceDirName: "componenten/build", slug: "/form-field-checkbox-option", permalink: "/form-field-checkbox-option", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-checkbox-option.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field checkbox option", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field checkbox option", pagination_label: "Form field checkbox option", description: "UX richtlijnen voor Form field checkbox option component", slug: "/form-field-checkbox-option", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "File input", permalink: "/file-input" }, next: { title: "Form field description", permalink: "/form-field-description" } },
    d = {},
    r = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function a(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", (0, t.jsx)(n.h1, { id: "form-field-checkbox-option", children: "Form field checkbox option" }), "\n", (0, t.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, t.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, t.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, t.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Implementatie: ", (0, t.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1031-2917", children: "Form field checkbox option Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, t.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, t.jsxs)(n.p, { children: ["De Form field checkbox option component staat bij NL Design System in de ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/172", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  80877: (e, n, o) => {
   o.d(n, { Z: () => s, a: () => c });
   var t = o(50959);
   const i = {},
    l = t.createContext(i);
   function c(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : c(e.components)), t.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
