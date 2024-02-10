"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2758],
 {
  29370: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => d, contentTitle: () => s, default: () => c, frontMatter: () => o, metadata: () => a, toc: () => u });
   var t = r(11527),
    i = r(27034);
   const o = { title: "Adres uitvragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Adres uitvragen", sidebar_position: 2, pagination_label: "Adres uitvragen", description: "Adres uitvragen in formulieren", keywords: ["patronen", "design system", "adres uitvragen", "formulieren"] },
    s = "Adres uitvragen in formulieren",
    a = { id: "voorbeelden/patronen/formulieren/adres-uitvragen", title: "Adres uitvragen", description: "Adres uitvragen in formulieren", source: "@site/docs/voorbeelden/patronen/formulieren/adres-uitvragen.md", sourceDirName: "voorbeelden/patronen/formulieren", slug: "/voorbeelden/patronen/formulieren/adres-uitvragen", permalink: "/en/voorbeelden/patronen/formulieren/adres-uitvragen", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/formulieren/adres-uitvragen.md", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Adres uitvragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Adres uitvragen", sidebar_position: 2, pagination_label: "Adres uitvragen", description: "Adres uitvragen in formulieren", keywords: ["patronen", "design system", "adres uitvragen", "formulieren"] }, sidebar: "voorbeelden", previous: { title: "Foutmeldingen", permalink: "/en/voorbeelden/patronen/formulieren/foutmeldingen" }, next: { title: "Geslacht uitvragen", permalink: "/en/voorbeelden/patronen/formulieren/geslacht-uitvragen" } },
    d = {},
    u = [];
   function l(e) {
    const n = { h1: "h1", ...(0, i.a)(), ...e.components };
    return (0, t.jsx)(n.h1, { id: "adres-uitvragen-in-formulieren", children: "Adres uitvragen in formulieren" });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  27034: (e, n, r) => {
   r.d(n, { Z: () => a, a: () => s });
   var t = r(50959);
   const i = {},
    o = t.createContext(i);
   function s(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
