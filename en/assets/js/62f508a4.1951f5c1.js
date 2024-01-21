"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1038],
 {
  2904: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => i, default: () => p, frontMatter: () => r, metadata: () => s, toc: () => c });
   var o = n(1527),
    a = n(7214);
   const r = { title: "Page Footer", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Page Footer", pagination_label: "Page Footer", description: "UX richtlijnen voor Page Footer component", slug: "/page-footer", tags: ["Help Wanted"] },
    i = "Page Footer",
    s = { id: "componenten/build/page-footer", title: "Page Footer", description: "UX richtlijnen voor Page Footer component", source: "@site/docs/componenten/build/page-footer.mdx", sourceDirName: "componenten/build", slug: "/page-footer", permalink: "/en/page-footer", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/page-footer.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Page Footer", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Page Footer", pagination_label: "Page Footer", description: "UX richtlijnen voor Page Footer component", slug: "/page-footer", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Ordered list", permalink: "/en/ordered-list" }, next: { title: "Page Header", permalink: "/en/page-header" } },
    l = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function d(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, a.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(t.h1, { id: "page-footer", children: "Page Footer" }), "\n", (0, o.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, o.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(t.p, { children: ["De Page Footer component staat bij NL Design System in de ", (0, o.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/56", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, a.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
  },
  7214: (e, t, n) => {
   n.d(t, { Z: () => s, a: () => i });
   var o = n(959);
   const a = {},
    r = o.createContext(a);
   function i(e) {
    const t = o.useContext(r);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function s(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(a) : e.components || a) : i(e.components)), o.createElement(r.Provider, { value: t }, e.children);
   }
  },
 },
]);
