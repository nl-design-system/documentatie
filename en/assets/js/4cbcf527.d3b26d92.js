"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6786],
 {
  80133: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => a, default: () => d, frontMatter: () => o, metadata: () => s, toc: () => u });
   var r = t(11527),
    i = t(27034);
   const o = { title: "Geslacht uitvragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Geslacht uitvragen", sidebar_position: 3, pagination_label: "Geslacht uitvragen", description: "Geslacht uitvragen in formulieren", keywords: ["patronen", "design system", "geslacht uitvragen", "formulieren"] },
    a = "Geslacht uitvragen in formulieren",
    s = { id: "voorbeelden/patronen/formulieren/geslacht-uitvragen", title: "Geslacht uitvragen", description: "Geslacht uitvragen in formulieren", source: "@site/docs/voorbeelden/patronen/formulieren/geslacht-uitvragen.md", sourceDirName: "voorbeelden/patronen/formulieren", slug: "/voorbeelden/patronen/formulieren/geslacht-uitvragen", permalink: "/en/voorbeelden/patronen/formulieren/geslacht-uitvragen", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/formulieren/geslacht-uitvragen.md", tags: [], version: "current", sidebarPosition: 3, frontMatter: { title: "Geslacht uitvragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Geslacht uitvragen", sidebar_position: 3, pagination_label: "Geslacht uitvragen", description: "Geslacht uitvragen in formulieren", keywords: ["patronen", "design system", "geslacht uitvragen", "formulieren"] }, sidebar: "voorbeelden", previous: { title: "Adres uitvragen", permalink: "/en/voorbeelden/patronen/formulieren/adres-uitvragen" }, next: { title: "Templates", permalink: "/en/voorbeelden/templates/" } },
    l = {},
    u = [];
   function c(e) {
    const n = { h1: "h1", ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(n.h1, { id: "geslacht-uitvragen-in-formulieren", children: "Geslacht uitvragen in formulieren" });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
  27034: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => a });
   var r = t(50959);
   const i = {},
    o = r.createContext(i);
   function a(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), r.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
