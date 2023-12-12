"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [85557],
 {
  18082: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => p, frontMatter: () => i, metadata: () => s, toc: () => l });
   var o = t(85893),
    r = t(11151);
   const i = { title: "Patronen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Patronen overzicht", sidebar_position: 1, pagination_label: "Patronen", description: "Patronen overzicht", keywords: ["index", "patronen"] },
    a = "Patronen",
    s = { id: "voorbeelden/patronen/README", title: "Patronen", description: "Patronen overzicht", source: "@site/docs/voorbeelden/patronen/README.mdx", sourceDirName: "voorbeelden/patronen", slug: "/voorbeelden/patronen/", permalink: "/voorbeelden/patronen/", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/README.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Patronen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Patronen overzicht", sidebar_position: 1, pagination_label: "Patronen", description: "Patronen overzicht", keywords: ["index", "patronen"] }, sidebar: "voorbeelden", previous: { title: "Overzicht", permalink: "/voorbeelden/" }, next: { title: "Estafettemodel", permalink: "/voorbeelden/patronen/estafettemodel" } },
    d = {},
    l = [];
   function c(e) {
    const n = { h1: "h1", ...(0, r.a)(), ...e.components };
    return (0, o.jsx)(n.h1, { id: "patronen", children: "Patronen" });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  11151: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => a });
   var o = t(67294);
   const r = {},
    i = o.createContext(r);
   function a(e) {
    const n = o.useContext(i);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e]
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), o.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
