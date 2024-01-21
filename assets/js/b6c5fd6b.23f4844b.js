"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1381],
 {
  5733: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => s, contentTitle: () => l, default: () => m, frontMatter: () => i, metadata: () => d, toc: () => c });
   var t = o(1527),
    a = o(7214);
   const i = { title: "Non modal dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Non modal dialog", pagination_label: "Non modal dialog", description: "UX richtlijnen voor Non modal dialog component", slug: "/non-modal-dialog", tags: ["Help Wanted"] },
    l = "Non modal dialog",
    d = { id: "componenten/build/non-modal-dialog", title: "Non modal dialog", description: "UX richtlijnen voor Non modal dialog component", source: "@site/docs/componenten/build/non-modal-dialog.mdx", sourceDirName: "componenten/build", slug: "/non-modal-dialog", permalink: "/non-modal-dialog", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/non-modal-dialog.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Non modal dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Non modal dialog", pagination_label: "Non modal dialog", description: "UX richtlijnen voor Non modal dialog component", slug: "/non-modal-dialog", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Modal dialog", permalink: "/modal-dialog" }, next: { title: "Notification banner", permalink: "/notification-banner" } },
    s = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function r(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, a.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", (0, t.jsx)(n.h1, { id: "non-modal-dialog", children: "Non modal dialog" }), "\n", (0, t.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, t.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, t.jsxs)(n.p, { children: ["De Non modal dialog component staat bij NL Design System in de ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/181", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  7214: (e, n, o) => {
   o.d(n, { Z: () => d, a: () => l });
   var t = o(959);
   const a = {},
    i = t.createContext(a);
   function l(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(a) : e.components || a) : l(e.components)), t.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
