"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4651],
 {
  21295: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => a, contentTitle: () => l, default: () => g, frontMatter: () => s, metadata: () => d, toc: () => c });
   var o = t(52676),
    i = t(24785);
   const s = { title: "Legend", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Legend", pagination_label: "Legend", description: "UX richtlijnen voor Legend component", slug: "/legend", tags: ["Help Wanted"] },
    l = "Legend",
    d = { id: "componenten/build/legend", title: "Legend", description: "UX richtlijnen voor Legend component", source: "@site/docs/componenten/build/legend.mdx", sourceDirName: "componenten/build", slug: "/legend", permalink: "/legend", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/legend.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Legend", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Legend", pagination_label: "Legend", description: "UX richtlijnen voor Legend component", slug: "/legend", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Invalid form alert", permalink: "/invalid-form-alert" }, next: { title: "Link", permalink: "/link" } },
    a = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function r(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "legend", children: "Legend" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Legend component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/186", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => l });
   var o = t(75271);
   const i = {},
    s = o.createContext(i);
   function l(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
