"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [74644],
 {
  56527: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => a, contentTitle: () => d, default: () => m, frontMatter: () => r, metadata: () => s, toc: () => l });
   var o = t(11527),
    i = t(47214);
   const r = { title: "Component uitbreiden", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Component uitbreiden", pagination_label: "Component uitbreiden", description: "Hoe kun je een component uitbreiden", keywords: ["developer", "bijdragen"] },
    d = "Hoe kun je een bestaand component uitbreiden",
    s = { id: "meedoen/als-developer/component-uitbreiden", title: "Component uitbreiden", description: "Hoe kun je een component uitbreiden", source: "@site/docs/meedoen/als-developer/06-component-uitbreiden.md", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/component-uitbreiden", permalink: "/en/meedoen/als-developer/component-uitbreiden", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/06-component-uitbreiden.md", tags: [], version: "current", sidebarPosition: 6, frontMatter: { title: "Component uitbreiden", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Component uitbreiden", pagination_label: "Component uitbreiden", description: "Hoe kun je een component uitbreiden", keywords: ["developer", "bijdragen"] }, sidebar: "meedoen", previous: { title: "Component inzetten", permalink: "/en/meedoen/als-developer/component-inzetten" }, next: { title: "Componenten maken", permalink: "/en/meedoen/als-developer/componenten-maken" } },
    a = {},
    l = [];
   function p(e) {
    const n = { h1: "h1", ...(0, i.a)(), ...e.components };
    return (0, o.jsx)(n.h1, { id: "hoe-kun-je-een-bestaand-component-uitbreiden", children: "Hoe kun je een bestaand component uitbreiden" });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => d });
   var o = t(50959);
   const i = {},
    r = o.createContext(i);
   function d(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e]
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : d(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
