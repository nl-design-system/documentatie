"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4897],
 {
  86429: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => m, contentTitle: () => t, default: () => c, frontMatter: () => o, metadata: () => l, toc: () => a });
   var i = r(52676),
    s = r(24785);
   const o = { title: "Form field error message", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field error message", pagination_label: "Form field error message", description: "UX richtlijnen voor Form field error message component", slug: "/form-field-error-message", tags: ["Unknown"] },
    t = "Form field error message",
    l = { id: "componenten/build/form-field-error-message", title: "Form field error message", description: "UX richtlijnen voor Form field error message component", source: "@site/docs/componenten/build/form-field-error-message.mdx", sourceDirName: "componenten/build", slug: "/form-field-error-message", permalink: "/form-field-error-message", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-error-message.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Form field error message", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field error message", pagination_label: "Form field error message", description: "UX richtlijnen voor Form field error message component", slug: "/form-field-error-message", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Form field description", permalink: "/form-field-description" }, next: { title: "Form field label", permalink: "/form-field-label" } },
    m = {},
    a = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "form-field-error-message", children: "Form field error message" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, i.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?type=design&node-id=851-939", children: "Form field error message Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Form field error message component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/122", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, r) => {
   r.d(n, { Z: () => l, a: () => t });
   var i = r(75271);
   const s = {},
    o = i.createContext(s);
   function t(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
