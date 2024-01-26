"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9418],
 {
  70007: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => m, frontMatter: () => s, metadata: () => r, toc: () => c });
   var t = i(11527),
    o = i(47214);
   const s = { title: "Form field description", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field description", pagination_label: "Form field description", description: "UX richtlijnen voor Form field description component", slug: "/form-field-description", tags: ["Help Wanted"] },
    l = "Form field description",
    r = { id: "componenten/build/form-field-description", title: "Form field description", description: "UX richtlijnen voor Form field description component", source: "@site/docs/componenten/build/form-field-description.mdx", sourceDirName: "componenten/build", slug: "/form-field-description", permalink: "/form-field-description", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-description.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field description", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field description", pagination_label: "Form field description", description: "UX richtlijnen voor Form field description component", slug: "/form-field-description", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field checkbox option", permalink: "/form-field-checkbox-option" }, next: { title: "Form field error message", permalink: "/form-field-error-message" } },
    d = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function a(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", (0, t.jsx)(n.h1, { id: "form-field-description", children: "Form field description" }), "\n", (0, t.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, t.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, t.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, t.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Implementatie: ", (0, t.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=851-924", children: "Form field description Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, t.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, t.jsxs)(n.p, { children: ["De Form field description component staat bij NL Design System in de ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/174", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  47214: (e, n, i) => {
   i.d(n, { Z: () => r, a: () => l });
   var t = i(50959);
   const o = {},
    s = t.createContext(o);
   function l(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : l(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
