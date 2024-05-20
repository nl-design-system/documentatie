"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5201],
 {
  52442: (e, s, t) => {
   t.r(s), t.d(s, { assets: () => a, contentTitle: () => i, default: () => d, frontMatter: () => r, metadata: () => p, toc: () => c });
   var n = t(52676),
    o = t(24785);
   const r = { title: "Progress steps", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Progress steps", pagination_label: "Progress steps", description: "UX richtlijnen voor Progress steps component", slug: "/progress-steps", tags: ["Help Wanted"] },
    i = "Progress steps",
    p = { id: "componenten/build/progress-steps", title: "Progress steps", description: "UX richtlijnen voor Progress steps component", source: "@site/docs/componenten/build/progress-steps.mdx", sourceDirName: "componenten/build", slug: "/progress-steps", permalink: "/progress-steps", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/progress-steps.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Progress steps", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Progress steps", pagination_label: "Progress steps", description: "UX richtlijnen voor Progress steps component", slug: "/progress-steps", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Password input", permalink: "/password-input" }, next: { title: "Progress", permalink: "/progress" } },
    a = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function l(e) {
    const s = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, n.jsxs)(n.Fragment, { children: ["\n", "\n", (0, n.jsx)(s.h1, { id: "progress-steps", children: "Progress steps" }), "\n", (0, n.jsx)(s.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, n.jsx)(s.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, n.jsxs)(s.p, { children: ["De Progress steps component staat bij NL Design System in de ", (0, n.jsx)(s.a, { href: "https://github.com/nl-design-system/backlog/issues/150", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function d(e = {}) {
    const { wrapper: s } = { ...(0, o.a)(), ...e.components };
    return s ? (0, n.jsx)(s, { ...e, children: (0, n.jsx)(l, { ...e }) }) : l(e);
   }
  },
  24785: (e, s, t) => {
   t.d(s, { Z: () => p, a: () => i });
   var n = t(75271);
   const o = {},
    r = n.createContext(o);
   function i(e) {
    const s = n.useContext(r);
    return n.useMemo(
     function () {
      return "function" == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function p(e) {
    let s;
    return (s = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), n.createElement(r.Provider, { value: s }, e.children);
   }
  },
 },
]);
