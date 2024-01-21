"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2693],
 {
  2524: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => r, contentTitle: () => i, default: () => p, frontMatter: () => m, metadata: () => a, toc: () => d });
   var t = o(1527),
    s = o(7214);
   const m = { title: "Componenten maken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Componenten maken", pagination_label: "Componenten maken", description: "Eigen componenten maken voor NL Design System", keywords: ["developer", "bijdragen", "componenten maken"] },
    i = "Eigen componenten maken voor NL Design System",
    a = { id: "meedoen/als-developer/componenten-maken", title: "Componenten maken", description: "Eigen componenten maken voor NL Design System", source: "@site/docs/meedoen/als-developer/07-componenten-maken.md", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/componenten-maken", permalink: "/meedoen/als-developer/componenten-maken", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/07-componenten-maken.md", tags: [], version: "current", sidebarPosition: 7, frontMatter: { title: "Componenten maken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Componenten maken", pagination_label: "Componenten maken", description: "Eigen componenten maken voor NL Design System", keywords: ["developer", "bijdragen", "componenten maken"] }, sidebar: "meedoen", previous: { title: "Component uitbreiden", permalink: "/meedoen/als-developer/component-uitbreiden" }, next: { title: "Meewerken", permalink: "/meedoen/als-developer/meewerken-als-developer" } },
    r = {},
    d = [];
   function l(e) {
    const n = { h1: "h1", ...(0, s.a)(), ...e.components };
    return (0, t.jsx)(n.h1, { id: "eigen-componenten-maken-voor-nl-design-system", children: "Eigen componenten maken voor NL Design System" });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  7214: (e, n, o) => {
   o.d(n, { Z: () => a, a: () => i });
   var t = o(959);
   const s = {},
    m = t.createContext(s);
   function i(e) {
    const n = t.useContext(m);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), t.createElement(m.Provider, { value: n }, e.children);
   }
  },
 },
]);
