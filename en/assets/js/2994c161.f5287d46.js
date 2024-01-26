"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2233],
 {
  67889: (e, t, l) => {
   l.r(t), l.d(t, { assets: () => s, contentTitle: () => o, default: () => p, frontMatter: () => i, metadata: () => r, toc: () => d });
   var n = l(11527),
    a = l(47214);
   const i = { title: "Form field partial label", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field partial label", pagination_label: "Form field partial label", description: "UX richtlijnen voor Form field partial label component", slug: "/form-field-partial-label", tags: ["Help Wanted"] },
    o = "Form field partial label",
    r = { id: "componenten/build/form-field-partial-label", title: "Form field partial label", description: "UX richtlijnen voor Form field partial label component", source: "@site/docs/componenten/build/form-field-partial-label.mdx", sourceDirName: "componenten/build", slug: "/form-field-partial-label", permalink: "/en/form-field-partial-label", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-partial-label.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field partial label", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field partial label", pagination_label: "Form field partial label", description: "UX richtlijnen voor Form field partial label component", slug: "/form-field-partial-label", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field option label", permalink: "/en/form-field-option-label" }, next: { title: "Form field partial", permalink: "/en/form-field-partial" } },
    s = {},
    d = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function c(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, a.a)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: ["\n", "\n", (0, n.jsx)(t.h1, { id: "form-field-partial-label", children: "Form field partial label" }), "\n", (0, n.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, n.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, n.jsxs)(t.p, { children: ["De Form field partial label component staat bij NL Design System in de ", (0, n.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/180", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, a.a)(), ...e.components };
    return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(c, { ...e }) }) : c(e);
   }
  },
  47214: (e, t, l) => {
   l.d(t, { Z: () => r, a: () => o });
   var n = l(50959);
   const a = {},
    i = n.createContext(a);
   function o(e) {
    const t = n.useContext(i);
    return n.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function r(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), n.createElement(i.Provider, { value: t }, e.children);
   }
  },
 },
]);
