"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [14695],
 {
  9930: (n, e, t) => {
   t.r(e), t.d(e, { assets: () => s, contentTitle: () => c, default: () => b, frontMatter: () => a, metadata: () => r, toc: () => l });
   var i = t(11527),
    o = t(47214);
   const a = { title: "Notification banner", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Notification banner", pagination_label: "Notification banner", description: "UX richtlijnen voor Notification banner component", slug: "/notification-banner", tags: ["Help Wanted"] },
    c = "Notification banner",
    r = { id: "componenten/build/notification-banner", title: "Notification banner", description: "UX richtlijnen voor Notification banner component", source: "@site/docs/componenten/build/notification-banner.mdx", sourceDirName: "componenten/build", slug: "/notification-banner", permalink: "/en/notification-banner", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/notification-banner.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Notification banner", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Notification banner", pagination_label: "Notification banner", description: "UX richtlijnen voor Notification banner component", slug: "/notification-banner", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Non modal dialog", permalink: "/en/non-modal-dialog" }, next: { title: "Number input", permalink: "/en/number-input" } },
    s = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function d(n) {
    const e = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, o.a)(), ...n.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(e.h1, { id: "notification-banner", children: "Notification banner" }), "\n", (0, i.jsx)(e.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, i.jsx)(e.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(e.p, { children: ["De Notification banner component staat bij NL Design System in de ", (0, i.jsx)(e.a, { href: "https://github.com/nl-design-system/backlog/issues/169", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function b(n = {}) {
    const { wrapper: e } = { ...(0, o.a)(), ...n.components };
    return e ? (0, i.jsx)(e, { ...n, children: (0, i.jsx)(d, { ...n }) }) : d(n);
   }
  },
  47214: (n, e, t) => {
   t.d(e, { Z: () => r, a: () => c });
   var i = t(50959);
   const o = {},
    a = i.createContext(o);
   function c(n) {
    const e = i.useContext(a);
    return i.useMemo(
     function () {
      return "function" == typeof n ? n(e) : { ...e, ...n };
     },
     [e, n]
    );
   }
   function r(n) {
    let e;
    return (e = n.disableParentContext ? ("function" == typeof n.components ? n.components(o) : n.components || o) : c(n.components)), i.createElement(a.Provider, { value: e }, n.children);
   }
  },
 },
]);
