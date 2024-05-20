"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1934],
 {
  69560: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => a, default: () => g, frontMatter: () => i, metadata: () => r, toc: () => d });
   var o = n(52676),
    l = n(24785);
   const i = { title: "Alert dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Alert dialog", pagination_label: "Alert dialog", description: "UX richtlijnen voor Alert dialog component", slug: "/alert-dialog", tags: ["Help Wanted"] },
    a = "Alert dialog",
    r = { id: "componenten/build/alert-dialog", title: "Alert dialog", description: "UX richtlijnen voor Alert dialog component", source: "@site/docs/componenten/build/alert-dialog.mdx", sourceDirName: "componenten/build", slug: "/alert-dialog", permalink: "/en/alert-dialog", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/alert-dialog.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Alert dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Alert dialog", pagination_label: "Alert dialog", description: "UX richtlijnen voor Alert dialog component", slug: "/alert-dialog", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Accordion", permalink: "/en/accordion" }, next: { title: "Alert", permalink: "/en/alert" } },
    s = {},
    d = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function c(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(t.h1, { id: "alert-dialog", children: "Alert dialog" }), "\n", (0, o.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, o.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(t.p, { children: ["De Alert dialog component staat bij NL Design System in de ", (0, o.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/182", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function g(e = {}) {
    const { wrapper: t } = { ...(0, l.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => r, a: () => a });
   var o = n(75271);
   const l = {},
    i = o.createContext(l);
   function a(e) {
    const t = o.useContext(i);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function r(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : a(e.components)), o.createElement(i.Provider, { value: t }, e.children);
   }
  },
 },
]);
