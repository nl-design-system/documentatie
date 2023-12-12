"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [45755],
 {
  75426: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => r, default: () => m, frontMatter: () => o, metadata: () => a, toc: () => d });
   var s = t(85893),
    i = t(11151);
   const o = { title: "NL Design System", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Events", sidebar_position: 1, pagination_label: "Events", slug: "/project/events", description: "Bijeenkomsten van NL Design System", keywords: ["videos", "events", "design system"] },
    r = "Events",
    a = { id: "project/events", title: "NL Design System", description: "Bijeenkomsten van NL Design System", source: "@site/docs/project/events.mdx", sourceDirName: "project", slug: "/project/events", permalink: "/en/project/events", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/project/events.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "NL Design System", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Events", sidebar_position: 1, pagination_label: "Events", slug: "/project/events", description: "Bijeenkomsten van NL Design System", keywords: ["videos", "events", "design system"] } },
    l = {},
    d = [{ value: "Video-archief", id: "video-archief", level: 2 }];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: "events", children: "Events" }), "\n", (0, s.jsx)(n.p, { children: "Het NL Design System kernteam brengt regelmatig mensen bij elkaar. Zo zijn er tweewekelijks Design Open Hours en Heartbeats, en jaarlijks een Design Systems Week." }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: "events/design-systems-week-2023/overzicht", children: "Design Systems Week - 2023" }) }), "\n"] }), "\n", (0, s.jsx)(n.h2, { id: "video-archief", children: "Video-archief" }), "\n", (0, s.jsx)(n.p, { children: "Bij NL Design System nemen we sommige online sessies op. Deze opnames kun je op de originele eventpagina's terugvinden. Om opnames zo snel mogelijk te delen kan het zijn dat deze nog niet opgepoetst of ondertiteld zijn." }), "\n", (0, s.jsx)(n.p, { children: "Zie bijvorobeeld de volgende opnames:" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: "events/design-systems-week-2022", children: "Design Systems Week - 2022" }) }), "\n", (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: "events/heartbeat", children: "De 2-wekelijkse Heartbeat" }) }), "\n"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  11151: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => r });
   var s = t(67294);
   const i = {},
    o = s.createContext(i);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e]
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
