"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1021],
 {
  39400: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => r, contentTitle: () => s, default: () => c, frontMatter: () => o, metadata: () => a, toc: () => d });
   var t = l(11527),
    i = l(47214);
   const o = { title: "Form field label", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field label", pagination_label: "Form field label", description: "UX richtlijnen voor Form field label component", slug: "/form-field-label", tags: ["Help Wanted"] },
    s = "Form field label",
    a = { id: "componenten/build/form-field-label", title: "Form field label", description: "UX richtlijnen voor Form field label component", source: "@site/docs/componenten/build/form-field-label.mdx", sourceDirName: "componenten/build", slug: "/form-field-label", permalink: "/en/form-field-label", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-label.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field label", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field label", pagination_label: "Form field label", description: "UX richtlijnen voor Form field label component", slug: "/form-field-label", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field error message", permalink: "/en/form-field-error-message" }, next: { title: "Form field option label", permalink: "/en/form-field-option-label" } },
    r = {},
    d = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function m(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", (0, t.jsx)(n.h1, { id: "form-field-label", children: "Form field label" }), "\n", (0, t.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, t.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, t.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, t.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Implementatie: ", (0, t.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=851-898", children: "Form field label Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, t.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, t.jsxs)(n.p, { children: ["De Form field label component staat bij NL Design System in de ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/177", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  47214: (e, n, l) => {
   l.d(n, { Z: () => a, a: () => s });
   var t = l(50959);
   const i = {},
    o = t.createContext(i);
   function s(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
