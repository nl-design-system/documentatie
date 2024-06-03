"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8281],
 {
  40481: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => d, contentTitle: () => c, default: () => a, frontMatter: () => l, metadata: () => s, toc: () => r });
   var i = o(52676),
    t = o(24785);
   const l = { title: "Form field checkbox option", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field checkbox option", pagination_label: "Form field checkbox option", description: "UX richtlijnen voor Form field checkbox option component", slug: "/form-field-checkbox-option", tags: ["Unknown"] },
    c = "Form field checkbox option",
    s = { id: "componenten/build/form-field-checkbox-option", title: "Form field checkbox option", description: "UX richtlijnen voor Form field checkbox option component", source: "@site/docs/componenten/build/form-field-checkbox-option.mdx", sourceDirName: "componenten/build", slug: "/form-field-checkbox-option", permalink: "/en/form-field-checkbox-option", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-checkbox-option.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Form field checkbox option", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field checkbox option", pagination_label: "Form field checkbox option", description: "UX richtlijnen voor Form field checkbox option component", slug: "/form-field-checkbox-option", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "File input", permalink: "/en/file-input" }, next: { title: "Form field description", permalink: "/en/form-field-description" } },
    d = {},
    r = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function m(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "form-field-checkbox-option", children: "Form field checkbox option" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, i.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1031-2917", children: "Form field checkbox option Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Form field checkbox option component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/172", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  24785: (e, n, o) => {
   o.d(n, { Z: () => s, a: () => c });
   var i = o(75271);
   const t = {},
    l = i.createContext(t);
   function c(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(t) : e.components || t) : c(e.components)), i.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
