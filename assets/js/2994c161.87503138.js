"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2233],
 {
  66774: (e, l, n) => {
   n.r(l), n.d(l, { assets: () => s, contentTitle: () => o, default: () => p, frontMatter: () => i, metadata: () => r, toc: () => d });
   var t = n(52676),
    a = n(24785);
   const i = { title: "Form field partial label", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field partial label", pagination_label: "Form field partial label", description: "UX richtlijnen voor Form field partial label component", slug: "/form-field-partial-label", tags: ["Unknown"] },
    o = "Form field partial label",
    r = { id: "componenten/build/form-field-partial-label", title: "Form field partial label", description: "UX richtlijnen voor Form field partial label component", source: "@site/docs/componenten/build/form-field-partial-label.mdx", sourceDirName: "componenten/build", slug: "/form-field-partial-label", permalink: "/form-field-partial-label", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-partial-label.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Form field partial label", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field partial label", pagination_label: "Form field partial label", description: "UX richtlijnen voor Form field partial label component", slug: "/form-field-partial-label", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Form field option label", permalink: "/form-field-option-label" }, next: { title: "Form field partial", permalink: "/form-field-partial" } },
    s = {},
    d = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function c(e) {
    const l = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, a.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", (0, t.jsx)(l.h1, { id: "form-field-partial-label", children: "Form field partial label" }), "\n", (0, t.jsx)(l.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, t.jsx)(l.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, t.jsxs)(l.p, { children: ["De Form field partial label component staat bij NL Design System in de ", (0, t.jsx)(l.a, { href: "https://github.com/nl-design-system/backlog/issues/180", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: l } = { ...(0, a.a)(), ...e.components };
    return l ? (0, t.jsx)(l, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, l, n) => {
   n.d(l, { Z: () => r, a: () => o });
   var t = n(75271);
   const a = {},
    i = t.createContext(a);
   function o(e) {
    const l = t.useContext(i);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function r(e) {
    let l;
    return (l = e.disableParentContext ? ("function" == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), t.createElement(i.Provider, { value: l }, e.children);
   }
  },
 },
]);
