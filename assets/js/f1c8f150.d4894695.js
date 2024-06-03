"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7302],
 {
  52919: (n, e, t) => {
   t.r(e), t.d(e, { assets: () => d, contentTitle: () => r, default: () => c, frontMatter: () => i, metadata: () => a, toc: () => p });
   var s = t(52676),
    o = t(24785);
   const i = { title: "Password input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Password input", pagination_label: "Password input", description: "UX richtlijnen voor Password input component", slug: "/password-input", tags: ["Unknown"] },
    r = "Password input",
    a = { id: "componenten/build/password-input", title: "Password input", description: "UX richtlijnen voor Password input component", source: "@site/docs/componenten/build/password-input.mdx", sourceDirName: "componenten/build", slug: "/password-input", permalink: "/password-input", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/password-input.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Password input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Password input", pagination_label: "Password input", description: "UX richtlijnen voor Password input component", slug: "/password-input", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Paragraph", permalink: "/paragraph" }, next: { title: "Progress list", permalink: "/progress-list" } },
    d = {},
    p = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function l(n) {
    const e = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...n.components };
    return (0, s.jsxs)(s.Fragment, { children: ["\n", "\n", (0, s.jsx)(e.h1, { id: "password-input", children: "Password input" }), "\n", (0, s.jsx)(e.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, s.jsx)(e.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, s.jsxs)(e.p, { children: ["De Password input component staat bij NL Design System in de ", (0, s.jsx)(e.a, { href: "https://github.com/nl-design-system/backlog/issues/133", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function c(n = {}) {
    const { wrapper: e } = { ...(0, o.a)(), ...n.components };
    return e ? (0, s.jsx)(e, { ...n, children: (0, s.jsx)(l, { ...n }) }) : l(n);
   }
  },
  24785: (n, e, t) => {
   t.d(e, { Z: () => a, a: () => r });
   var s = t(75271);
   const o = {},
    i = s.createContext(o);
   function r(n) {
    const e = s.useContext(i);
    return s.useMemo(
     function () {
      return "function" == typeof n ? n(e) : { ...e, ...n };
     },
     [e, n],
    );
   }
   function a(n) {
    let e;
    return (e = n.disableParentContext ? ("function" == typeof n.components ? n.components(o) : n.components || o) : r(n.components)), s.createElement(i.Provider, { value: e }, n.children);
   }
  },
 },
]);
