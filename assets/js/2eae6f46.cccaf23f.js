"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7932],
 {
  12283: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => i, default: () => c, frontMatter: () => r, metadata: () => d, toc: () => l });
   var o = t(11527),
    a = t(47214);
   const r = { title: "Laad patronen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Laden", sidebar_position: 5, pagination_label: "Laden", description: "Laad patronen", keywords: ["patronen", "design system", "laden"] },
    i = "Patronen voor laden",
    d = { id: "voorbeelden/patronen/laden", title: "Laad patronen", description: "Laad patronen", source: "@site/docs/voorbeelden/patronen/laden.md", sourceDirName: "voorbeelden/patronen", slug: "/voorbeelden/patronen/laden", permalink: "/voorbeelden/patronen/laden", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/laden.md", tags: [], version: "current", sidebarPosition: 5, frontMatter: { title: "Laad patronen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Laden", sidebar_position: 5, pagination_label: "Laden", description: "Laad patronen", keywords: ["patronen", "design system", "laden"] }, sidebar: "voorbeelden", previous: { title: "Zoeken", permalink: "/voorbeelden/patronen/zoeken" }, next: { title: "Foutmeldingen", permalink: "/voorbeelden/patronen/formulieren/foutmeldingen" } },
    s = {},
    l = [];
   function p(e) {
    const n = { h1: "h1", ...(0, a.a)(), ...e.components };
    return (0, o.jsx)(n.h1, { id: "patronen-voor-laden", children: "Patronen voor laden" });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => i });
   var o = t(50959);
   const a = {},
    r = o.createContext(a);
   function i(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(a) : e.components || a) : i(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
