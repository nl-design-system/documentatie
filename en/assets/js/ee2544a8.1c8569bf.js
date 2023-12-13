"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [84897],
 {
  53148: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => a, contentTitle: () => i, default: () => c, frontMatter: () => s, metadata: () => l, toc: () => d });
   var o = r(11527),
    t = r(47214);
   const s = { title: "Form field error message", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field error message", pagination_label: "Form field error message", description: "UX richtlijnen voor Form field error message component", slug: "/form-field-error-message", tags: ["Help Wanted"] },
    i = "Form field error message",
    l = { id: "componenten/build/form-field-error-message", title: "Form field error message", description: "UX richtlijnen voor Form field error message component", source: "@site/docs/componenten/build/form-field-error-message.mdx", sourceDirName: "componenten/build", slug: "/form-field-error-message", permalink: "/en/form-field-error-message", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-error-message.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field error message", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field error message", pagination_label: "Form field error message", description: "UX richtlijnen voor Form field error message component", slug: "/form-field-error-message", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field description", permalink: "/en/form-field-description" }, next: { title: "Form field label", permalink: "/en/form-field-label" } },
    a = {},
    d = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function m(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: "form-field-error-message", children: "Form field error message" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Form field error message component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/122", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
  },
  47214: (e, n, r) => {
   r.d(n, { Z: () => l, a: () => i });
   var o = r(50959);
   const t = {},
    s = o.createContext(t);
   function i(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e]
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(t) : e.components || t) : i(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
