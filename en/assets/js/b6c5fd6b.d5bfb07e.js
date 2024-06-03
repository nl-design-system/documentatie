"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1381],
 {
  50991: (n, e, o) => {
   o.r(e), o.d(e, { assets: () => s, contentTitle: () => l, default: () => m, frontMatter: () => i, metadata: () => d, toc: () => c });
   var t = o(52676),
    a = o(24785);
   const i = { title: "Non modal dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Non modal dialog", pagination_label: "Non modal dialog", description: "UX richtlijnen voor Non modal dialog component", slug: "/non-modal-dialog", tags: ["Unknown"] },
    l = "Non modal dialog",
    d = { id: "componenten/build/non-modal-dialog", title: "Non modal dialog", description: "UX richtlijnen voor Non modal dialog component", source: "@site/docs/componenten/build/non-modal-dialog.mdx", sourceDirName: "componenten/build", slug: "/non-modal-dialog", permalink: "/en/non-modal-dialog", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/non-modal-dialog.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Non modal dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Non modal dialog", pagination_label: "Non modal dialog", description: "UX richtlijnen voor Non modal dialog component", slug: "/non-modal-dialog", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Modal dialog", permalink: "/en/modal-dialog" }, next: { title: "Notification banner", permalink: "/en/notification-banner" } },
    s = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function r(n) {
    const e = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, a.a)(), ...n.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", (0, t.jsx)(e.h1, { id: "non-modal-dialog", children: "Non modal dialog" }), "\n", (0, t.jsx)(e.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, t.jsx)(e.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, t.jsxs)(e.p, { children: ["De Non modal dialog component staat bij NL Design System in de ", (0, t.jsx)(e.a, { href: "https://github.com/nl-design-system/backlog/issues/181", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(n = {}) {
    const { wrapper: e } = { ...(0, a.a)(), ...n.components };
    return e ? (0, t.jsx)(e, { ...n, children: (0, t.jsx)(r, { ...n }) }) : r(n);
   }
  },
  24785: (n, e, o) => {
   o.d(e, { Z: () => d, a: () => l });
   var t = o(75271);
   const a = {},
    i = t.createContext(a);
   function l(n) {
    const e = t.useContext(i);
    return t.useMemo(
     function () {
      return "function" == typeof n ? n(e) : { ...e, ...n };
     },
     [e, n],
    );
   }
   function d(n) {
    let e;
    return (e = n.disableParentContext ? ("function" == typeof n.components ? n.components(a) : n.components || a) : l(n.components)), t.createElement(i.Provider, { value: e }, n.children);
   }
  },
 },
]);
