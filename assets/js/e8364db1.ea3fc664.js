"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5607],
 {
  80603: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => a, default: () => p, frontMatter: () => l, metadata: () => r, toc: () => d });
   var i = t(52676),
    o = t(24785);
   const l = { title: "Form field partial", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field partial", pagination_label: "Form field partial", description: "UX richtlijnen voor Form field partial component", slug: "/form-field-partial", tags: ["Unknown"] },
    a = "Form field partial",
    r = { id: "componenten/build/form-field-partial", title: "Form field partial", description: "UX richtlijnen voor Form field partial component", source: "@site/docs/componenten/build/form-field-partial.mdx", sourceDirName: "componenten/build", slug: "/form-field-partial", permalink: "/form-field-partial", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-partial.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Form field partial", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field partial", pagination_label: "Form field partial", description: "UX richtlijnen voor Form field partial component", slug: "/form-field-partial", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Form field partial label", permalink: "/form-field-partial-label" }, next: { title: "Form field radio option", permalink: "/form-field-radio-option" } },
    s = {},
    d = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "form-field-partial", children: "Form field partial" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Form field partial component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/179", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => a });
   var i = t(75271);
   const o = {},
    l = i.createContext(o);
   function a(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), i.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);