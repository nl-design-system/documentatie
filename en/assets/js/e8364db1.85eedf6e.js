"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5607],
 {
  9917: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => l, default: () => p, frontMatter: () => a, metadata: () => r, toc: () => d });
   var i = n(1527),
    o = n(7214);
   const a = { title: "Form field partial", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field partial", pagination_label: "Form field partial", description: "UX richtlijnen voor Form field partial component", slug: "/form-field-partial", tags: ["Help Wanted"] },
    l = "Form field partial",
    r = { id: "componenten/build/form-field-partial", title: "Form field partial", description: "UX richtlijnen voor Form field partial component", source: "@site/docs/componenten/build/form-field-partial.mdx", sourceDirName: "componenten/build", slug: "/form-field-partial", permalink: "/en/form-field-partial", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-partial.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field partial", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field partial", pagination_label: "Form field partial", description: "UX richtlijnen voor Form field partial component", slug: "/form-field-partial", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field partial label", permalink: "/en/form-field-partial-label" }, next: { title: "Form field radio option", permalink: "/en/form-field-radio-option" } },
    s = {},
    d = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function c(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(t.h1, { id: "form-field-partial", children: "Form field partial" }), "\n", (0, i.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, i.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(t.p, { children: ["De Form field partial component staat bij NL Design System in de ", (0, i.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/179", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, o.a)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  7214: (e, t, n) => {
   n.d(t, { Z: () => r, a: () => l });
   var i = n(959);
   const o = {},
    a = i.createContext(o);
   function l(e) {
    const t = i.useContext(a);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function r(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : l(e.components)), i.createElement(a.Provider, { value: t }, e.children);
   }
  },
 },
]);
