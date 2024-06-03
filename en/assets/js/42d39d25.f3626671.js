"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7807],
 {
  96129: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => l, default: () => p, frontMatter: () => o, metadata: () => a, toc: () => c });
   var i = n(52676),
    s = n(24785);
   const o = { title: "Details", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Details", pagination_label: "Details", description: "UX richtlijnen voor Details component", slug: "/details", tags: ["Unknown"] },
    l = "Details",
    a = { id: "componenten/build/details", title: "Details", description: "UX richtlijnen voor Details component", source: "@site/docs/componenten/build/details.mdx", sourceDirName: "componenten/build", slug: "/details", permalink: "/en/details", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/details.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Details", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Details", pagination_label: "Details", description: "UX richtlijnen voor Details component", slug: "/details", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Definition list", permalink: "/en/definition-list" }, next: { title: "Dot badge", permalink: "/en/dot-badge" } },
    r = {},
    c = [];
   function d(e) {
    const t = { h1: "h1", p: "p", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(t.h1, { id: "details", children: "Details" }), "\n", (0, i.jsx)(t.p, { children: 'Dit component heeft de "Unknown" status:' })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => a, a: () => l });
   var i = n(75271);
   const s = {},
    o = i.createContext(s);
   function l(e) {
    const t = i.useContext(o);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function a(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), i.createElement(o.Provider, { value: t }, e.children);
   }
  },
 },
]);
