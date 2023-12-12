"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [26786],
 {
  13522: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => a, default: () => d, frontMatter: () => o, metadata: () => s, toc: () => u });
   var r = n(85893),
    i = n(11151);
   const o = { title: "Geslacht uitvragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Geslacht uitvragen", sidebar_position: 3, pagination_label: "Geslacht uitvragen", description: "Geslacht uitvragen in formulieren", keywords: ["patronen", "design system", "geslacht uitvragen", "formulieren"] },
    a = "Geslacht uitvragen in formulieren",
    s = { id: "voorbeelden/patronen/formulieren/geslacht-uitvragen", title: "Geslacht uitvragen", description: "Geslacht uitvragen in formulieren", source: "@site/docs/voorbeelden/patronen/formulieren/geslacht-uitvragen.md", sourceDirName: "voorbeelden/patronen/formulieren", slug: "/voorbeelden/patronen/formulieren/geslacht-uitvragen", permalink: "/voorbeelden/patronen/formulieren/geslacht-uitvragen", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/formulieren/geslacht-uitvragen.md", tags: [], version: "current", sidebarPosition: 3, frontMatter: { title: "Geslacht uitvragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Geslacht uitvragen", sidebar_position: 3, pagination_label: "Geslacht uitvragen", description: "Geslacht uitvragen in formulieren", keywords: ["patronen", "design system", "geslacht uitvragen", "formulieren"] }, sidebar: "voorbeelden", previous: { title: "Adres uitvragen", permalink: "/voorbeelden/patronen/formulieren/adres-uitvragen" }, next: { title: "Templates", permalink: "/voorbeelden/templates/" } },
    l = {},
    u = [];
   function c(e) {
    const t = { h1: "h1", ...(0, i.a)(), ...e.components };
    return (0, r.jsx)(t.h1, { id: "geslacht-uitvragen-in-formulieren", children: "Geslacht uitvragen in formulieren" });
   }
   function d(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
  11151: (e, t, n) => {
   n.d(t, { Z: () => s, a: () => a });
   var r = n(67294);
   const i = {},
    o = r.createContext(i);
   function a(e) {
    const t = r.useContext(o);
    return r.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e]
    );
   }
   function s(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), r.createElement(o.Provider, { value: t }, e.children);
   }
  },
 },
]);
