"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5085],
 {
  91342: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => a, contentTitle: () => s, default: () => p, frontMatter: () => r, metadata: () => u, toc: () => c });
   var i = t(11527),
    o = t(80877);
   const r = { title: "Number input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Number input", pagination_label: "Number input", description: "UX richtlijnen voor Number input component", slug: "/number-input", tags: ["Help Wanted"] },
    s = "Number input",
    u = { id: "componenten/build/number-input", title: "Number input", description: "UX richtlijnen voor Number input component", source: "@site/docs/componenten/build/number-input.mdx", sourceDirName: "componenten/build", slug: "/number-input", permalink: "/number-input", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/number-input.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Number input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Number input", pagination_label: "Number input", description: "UX richtlijnen voor Number input component", slug: "/number-input", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Notification banner", permalink: "/notification-banner" }, next: { title: "Ordered list", permalink: "/ordered-list" } },
    a = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function l(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "number-input", children: "Number input" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Number input component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/125", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  80877: (e, n, t) => {
   t.d(n, { Z: () => u, a: () => s });
   var i = t(50959);
   const o = {},
    r = i.createContext(o);
   function s(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function u(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
