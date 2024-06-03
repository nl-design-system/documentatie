"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3712],
 {
  70963: (n, t, i) => {
   i.r(t), i.d(t, { assets: () => c, contentTitle: () => l, default: () => f, frontMatter: () => s, metadata: () => r, toc: () => a });
   var e = i(52676),
    o = i(24785);
   const s = { title: "Definition list", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Definition list", pagination_label: "Definition list", description: "UX richtlijnen voor Definition list component", slug: "/definition-list", tags: ["Unknown"] },
    l = "Definition list",
    r = { id: "componenten/build/definition-list", title: "Definition list", description: "UX richtlijnen voor Definition list component", source: "@site/docs/componenten/build/definition-list.mdx", sourceDirName: "componenten/build", slug: "/definition-list", permalink: "/definition-list", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/definition-list.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Definition list", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Definition list", pagination_label: "Definition list", description: "UX richtlijnen voor Definition list component", slug: "/definition-list", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Date picker", permalink: "/date-picker" }, next: { title: "Details", permalink: "/details" } },
    c = {},
    a = [];
   function d(n) {
    const t = { h1: "h1", p: "p", ...(0, o.a)(), ...n.components };
    return (0, e.jsxs)(e.Fragment, { children: ["\n", "\n", (0, e.jsx)(t.h1, { id: "definition-list", children: "Definition list" }), "\n", (0, e.jsx)(t.p, { children: 'Dit component heeft de "Unknown" status:' })] });
   }
   function f(n = {}) {
    const { wrapper: t } = { ...(0, o.a)(), ...n.components };
    return t ? (0, e.jsx)(t, { ...n, children: (0, e.jsx)(d, { ...n }) }) : d(n);
   }
  },
  24785: (n, t, i) => {
   i.d(t, { Z: () => r, a: () => l });
   var e = i(75271);
   const o = {},
    s = e.createContext(o);
   function l(n) {
    const t = e.useContext(s);
    return e.useMemo(
     function () {
      return "function" == typeof n ? n(t) : { ...t, ...n };
     },
     [t, n],
    );
   }
   function r(n) {
    let t;
    return (t = n.disableParentContext ? ("function" == typeof n.components ? n.components(o) : n.components || o) : l(n.components)), e.createElement(s.Provider, { value: t }, n.children);
   }
  },
 },
]);
