"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [34740],
 {
  57734: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => o, default: () => p, frontMatter: () => s, metadata: () => l, toc: () => c });
   var a = t(11527),
    i = t(47214);
   const s = { title: "Card as link", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Card as link", pagination_label: "Card as link", description: "UX richtlijnen voor Card as link component", slug: "/card-as-link", tags: ["Help Wanted"] },
    o = "Card as link",
    l = { id: "componenten/build/card-as-link", title: "Card as link", description: "UX richtlijnen voor Card as link component", source: "@site/docs/componenten/build/card-as-link.mdx", sourceDirName: "componenten/build", slug: "/card-as-link", permalink: "/en/card-as-link", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/card-as-link.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Card as link", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Card as link", pagination_label: "Card as link", description: "UX richtlijnen voor Card as link component", slug: "/card-as-link", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Button", permalink: "/en/button" }, next: { title: "Checkbox group", permalink: "/en/checkbox-group" } },
    r = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ["\n", "\n", (0, a.jsx)(n.h1, { id: "card-as-link", children: "Card as link" }), "\n", (0, a.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, a.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(n.p, { children: ["De Card as link component staat bij NL Design System in de ", (0, a.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/101", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
   }
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => o });
   var a = t(50959);
   const i = {},
    s = a.createContext(i);
   function o(e) {
    const n = a.useContext(s);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e]
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), a.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
