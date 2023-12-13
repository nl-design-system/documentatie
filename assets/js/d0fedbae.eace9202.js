"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [16919],
 {
  23772: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => d, contentTitle: () => i, default: () => c, frontMatter: () => s, metadata: () => a, toc: () => l });
   var t = o(11527),
    r = o(47214);
   const s = { title: "Zoek patroon", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Zoeken", sidebar_position: 4, pagination_label: "Zoeken", description: "Zoek patroon", keywords: ["patronen", "design system", "zoeken"] },
    i = "Zoeken",
    a = { id: "voorbeelden/patronen/zoeken", title: "Zoek patroon", description: "Zoek patroon", source: "@site/docs/voorbeelden/patronen/zoeken.md", sourceDirName: "voorbeelden/patronen", slug: "/voorbeelden/patronen/zoeken", permalink: "/voorbeelden/patronen/zoeken", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/zoeken.md", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Zoek patroon", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Zoeken", sidebar_position: 4, pagination_label: "Zoeken", description: "Zoek patroon", keywords: ["patronen", "design system", "zoeken"] }, sidebar: "voorbeelden", previous: { title: "Estafettemodel", permalink: "/voorbeelden/patronen/estafettemodel" }, next: { title: "Laden", permalink: "/voorbeelden/patronen/laden" } },
    d = {},
    l = [];
   function p(e) {
    const n = { h1: "h1", ...(0, r.a)(), ...e.components };
    return (0, t.jsx)(n.h1, { id: "zoeken", children: "Zoeken" });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
  },
  47214: (e, n, o) => {
   o.d(n, { Z: () => a, a: () => i });
   var t = o(50959);
   const r = {},
    s = t.createContext(r);
   function i(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e]
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(r) : e.components || r) : i(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
