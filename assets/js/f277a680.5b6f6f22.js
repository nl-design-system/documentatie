"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7426],
 {
  98921: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => s, default: () => d, frontMatter: () => o, metadata: () => r, toc: () => m });
   var i = t(11527),
    a = t(47214);
   const o = { title: "Naamgeving", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Naamgeving", sidebar_position: 2, pagination_label: "Naamgeving", description: "Naamgeving voor componenten, attributen en variaties", keywords: ["design token", "design tokens", "naamgeving"] },
    s = "Naamgeving voor componenten, attributen en variaties",
    r = { id: "meedoen/naamgeving", title: "Naamgeving", description: "Naamgeving voor componenten, attributen en variaties", source: "@site/docs/meedoen/naamgeving.mdx", sourceDirName: "meedoen", slug: "/meedoen/naamgeving", permalink: "/meedoen/naamgeving", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/naamgeving.mdx", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Naamgeving", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Naamgeving", sidebar_position: 2, pagination_label: "Naamgeving", description: "Naamgeving voor componenten, attributen en variaties", keywords: ["design token", "design tokens", "naamgeving"] } },
    g = {},
    m = [];
   function c(e) {
    const n = { h1: "h1", ...(0, a.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", (0, i.jsx)(n.h1, { id: "naamgeving-voor-componenten-attributen-en-variaties", children: "Naamgeving voor componenten, attributen en variaties" })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => s });
   var i = t(50959);
   const a = {},
    o = i.createContext(a);
   function s(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
