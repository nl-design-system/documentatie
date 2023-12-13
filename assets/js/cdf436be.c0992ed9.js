"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7961],
 {
  23256: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => l, default: () => m, frontMatter: () => r, metadata: () => d, toc: () => u });
   var o = t(11527),
    i = t(47214);
   const r = { title: "Foutmeldingen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Foutmeldingen", sidebar_position: 1, pagination_label: "Foutmeldingen", description: "Foutmeldingen in formulieren", keywords: ["patronen", "design system", "foutmeldinge", "formulieren"] },
    l = "Foutmeldingen in formulieren",
    d = { id: "voorbeelden/patronen/formulieren/foutmeldingen", title: "Foutmeldingen", description: "Foutmeldingen in formulieren", source: "@site/docs/voorbeelden/patronen/formulieren/foutmeldingen.md", sourceDirName: "voorbeelden/patronen/formulieren", slug: "/voorbeelden/patronen/formulieren/foutmeldingen", permalink: "/voorbeelden/patronen/formulieren/foutmeldingen", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/formulieren/foutmeldingen.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Foutmeldingen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Foutmeldingen", sidebar_position: 1, pagination_label: "Foutmeldingen", description: "Foutmeldingen in formulieren", keywords: ["patronen", "design system", "foutmeldinge", "formulieren"] }, sidebar: "voorbeelden", previous: { title: "Laden", permalink: "/voorbeelden/patronen/laden" }, next: { title: "Adres uitvragen", permalink: "/voorbeelden/patronen/formulieren/adres-uitvragen" } },
    s = {},
    u = [];
   function a(e) {
    const n = { h1: "h1", ...(0, i.a)(), ...e.components };
    return (0, o.jsx)(n.h1, { id: "foutmeldingen-in-formulieren", children: "Foutmeldingen in formulieren" });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => l });
   var o = t(50959);
   const i = {},
    r = o.createContext(i);
   function l(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e]
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
