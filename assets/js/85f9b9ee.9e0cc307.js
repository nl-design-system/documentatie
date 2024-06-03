"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [572],
 {
  48400: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => a, default: () => p, frontMatter: () => i, metadata: () => s, toc: () => l });
   var r = t(52676),
    o = t(24785);
   const i = { title: "Drawer", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Drawer", pagination_label: "Drawer", description: "UX richtlijnen voor Drawer component", slug: "/drawer", tags: ["Unknown"] },
    a = "Drawer",
    s = { id: "componenten/build/drawer", title: "Drawer", description: "UX richtlijnen voor Drawer component", source: "@site/docs/componenten/build/drawer.mdx", sourceDirName: "componenten/build", slug: "/drawer", permalink: "/drawer", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/drawer.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Drawer", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Drawer", pagination_label: "Drawer", description: "UX richtlijnen voor Drawer component", slug: "/drawer", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Dot badge", permalink: "/dot-badge" }, next: { title: "Fieldset", permalink: "/fieldset" } },
    c = {},
    l = [];
   function d(e) {
    const n = { h1: "h1", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", (0, r.jsx)(n.h1, { id: "drawer", children: "Drawer" }), "\n", (0, r.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => a });
   var r = t(75271);
   const o = {},
    i = r.createContext(o);
   function a(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), r.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
