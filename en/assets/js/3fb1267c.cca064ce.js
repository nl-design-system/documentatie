"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [52840],
 {
  25259: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => i, default: () => p, frontMatter: () => r, metadata: () => a, toc: () => l });
   var s = t(11527),
    o = t(47214);
   const r = { title: "Progress", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Progress", pagination_label: "Progress", description: "UX richtlijnen voor Progress component", slug: "/progress", tags: ["Help Wanted"] },
    i = "Progress",
    a = { id: "componenten/build/progress", title: "Progress", description: "UX richtlijnen voor Progress component", source: "@site/docs/componenten/build/progress.mdx", sourceDirName: "componenten/build", slug: "/progress", permalink: "/en/progress", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/progress.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Progress", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Progress", pagination_label: "Progress", description: "UX richtlijnen voor Progress component", slug: "/progress", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Progress steps", permalink: "/en/progress-steps" }, next: { title: "Radio group", permalink: "/en/radio-group" } },
    c = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: "progress", children: "Progress" }), "\n", (0, s.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, s.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, s.jsxs)(n.p, { children: ["De Progress component staat bij NL Design System in de ", (0, s.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/42", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => i });
   var s = t(50959);
   const o = {},
    r = s.createContext(o);
   function i(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e]
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), s.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
