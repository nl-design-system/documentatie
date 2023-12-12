"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [57302],
 {
  47510: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => l, frontMatter: () => i, metadata: () => r, toc: () => p });
   var s = t(85893),
    o = t(11151);
   const i = { title: "Password input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Password input", pagination_label: "Password input", description: "UX richtlijnen voor Password input component", slug: "/password-input", tags: ["Help Wanted"] },
    a = "Password input",
    r = { id: "componenten/build/password-input", title: "Password input", description: "UX richtlijnen voor Password input component", source: "@site/docs/componenten/build/password-input.mdx", sourceDirName: "componenten/build", slug: "/password-input", permalink: "/en/password-input", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/password-input.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Password input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Password input", pagination_label: "Password input", description: "UX richtlijnen voor Password input component", slug: "/password-input", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Paragraph", permalink: "/en/paragraph" }, next: { title: "Progress steps", permalink: "/en/progress-steps" } },
    d = {},
    p = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: "password-input", children: "Password input" }), "\n", (0, s.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, s.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, s.jsxs)(n.p, { children: ["De Password input component staat bij NL Design System in de ", (0, s.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/133", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  11151: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => a });
   var s = t(67294);
   const o = {},
    i = s.createContext(o);
   function a(e) {
    const n = s.useContext(i);
    return s.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e]
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), s.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
