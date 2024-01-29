"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4193],
 {
  84954: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => l, contentTitle: () => r, default: () => p, frontMatter: () => o, metadata: () => a, toc: () => u });
   var s = i(11527),
    t = i(47214);
   const o = { title: "Design Open Hour", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Design Open Hour", pagination_label: "In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/events/design-open-hour" },
    r = "Design Open Hour",
    a = { id: "community/events/design-open-hour/design-open-hour", title: "Design Open Hour", description: "In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit. Deze sessies zijn publiek toegankelijk. Meld je aan.", source: "@site/docs/community/events/design-open-hour/design-open-hour.mdx", sourceDirName: "community/events/design-open-hour", slug: "/events/design-open-hour", permalink: "/en/events/design-open-hour", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/design-open-hour.mdx", tags: [], version: "current", frontMatter: { title: "Design Open Hour", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Design Open Hour", pagination_label: "In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/events/design-open-hour" }, sidebar: "community", previous: { title: "Design Open Hour", permalink: "/en/events/design-open-hour/overzicht" }, next: { title: "In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", permalink: "/en/events/design-open-hour/aanmelden" } },
    l = {},
    u = [];
   function d(e) {
    const n = { a: "a", h1: "h1", p: "p", ...(0, t.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: "design-open-hour", children: "Design Open Hour" }), "\n", (0, s.jsxs)(n.p, { children: ["In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit. Deze sessies zijn publiek toegankelijk. ", (0, s.jsx)(n.a, { href: "/events/design-open-hour/aanmelden", children: "Meld je aan" }), "."] }), "\n", (0, s.jsxs)(n.p, { children: ["Heb je vragen of wil je eens aansluiten bij een Design Open Hour? Stuur ons dan een mailtje op ", (0, s.jsx)("a", { href: "mailto:kernteam@nldesignsystem.nl", children: (0, s.jsx)(n.a, { href: "mailto:kernteam@nldesignsystem.nl", children: "kernteam@nldesignsystem.nl" }) })] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
  },
  47214: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => r });
   var s = i(50959);
   const t = {},
    o = s.createContext(t);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
