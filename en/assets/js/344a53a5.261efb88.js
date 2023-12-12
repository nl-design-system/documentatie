"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4654],
 {
  58813: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => c, contentTitle: () => s, default: () => j, frontMatter: () => o, metadata: () => d, toc: () => a });
   var t = i(85893),
    r = i(11151);
   const o = { title: "Richtlijnen bijdragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Bijdragen", sidebar_position: 1, pagination_label: "Bijdragen", description: "Richtlijnen bijdragen", keywords: ["richtlijnen", "design system", "estafettemodel", "bijdragen"] },
    s = "Richtlijnen bijdragen",
    d = { id: "richtlijnen/bijdragen", title: "Richtlijnen bijdragen", description: "Richtlijnen bijdragen", source: "@site/docs/richtlijnen/bijdragen.mdx", sourceDirName: "richtlijnen", slug: "/richtlijnen/bijdragen", permalink: "/en/richtlijnen/bijdragen", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/bijdragen.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Richtlijnen bijdragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Bijdragen", sidebar_position: 1, pagination_label: "Bijdragen", description: "Richtlijnen bijdragen", keywords: ["richtlijnen", "design system", "estafettemodel", "bijdragen"] } },
    c = {},
    a = [{ value: "Definition of Done voor community richtlijnen", id: "definition-of-done-voor-community-richtlijnen", level: 2 }];
   function l(e) {
    const n = { h1: "h1", h2: "h2", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: "richtlijnen-bijdragen", children: "Richtlijnen bijdragen" }), "\n", (0, t.jsx)(n.h2, { id: "definition-of-done-voor-community-richtlijnen", children: "Definition of Done voor community richtlijnen" })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  11151: (e, n, i) => {
   i.d(n, { Z: () => d, a: () => s });
   var t = i(67294);
   const r = {},
    o = t.createContext(r);
   function s(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e]
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
