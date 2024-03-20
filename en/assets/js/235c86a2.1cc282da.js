"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8979],
 {
  87116: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => i, default: () => c, frontMatter: () => r, metadata: () => o, toc: () => d });
   var a = n(11527),
    s = n(80877);
   const r = { title: "Heartbeat", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Heartbeat", pagination_label: "2 wekelijkse updates van het kernteam en community", slug: "/events/heartbeat" },
    i = "Heartbeat",
    o = { id: "community/events/heartbeat/heartbeat", title: "Heartbeat", description: "In de Heartbeat vertelt het kernteam van NL Design System elke twee weken wat de laatste stand van zaken is. Daarnaast laten we organisaties aan het woord die met/aan het NL Design System werken.", source: "@site/docs/community/events/heartbeat/heartbeat.mdx", sourceDirName: "community/events/heartbeat", slug: "/events/heartbeat", permalink: "/en/events/heartbeat", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/heartbeat.mdx", tags: [], version: "current", frontMatter: { title: "Heartbeat", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Heartbeat", pagination_label: "2 wekelijkse updates van het kernteam en community", slug: "/events/heartbeat" }, sidebar: "community", previous: { title: "Heartbeat", permalink: "/en/events/heartbeat/overzicht" }, next: { title: "Video's van de afgelopen Heartbeats", permalink: "/en/events/heartbeat/videos" } },
    l = {},
    d = [];
   function m(e) {
    const t = { a: "a", h1: "h1", p: "p", ...(0, s.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: "heartbeat", children: "Heartbeat" }), "\n", (0, a.jsx)(t.p, { children: "In de Heartbeat vertelt het kernteam van NL Design System elke twee weken wat de laatste stand van zaken is. Daarnaast laten we organisaties aan het woord die met/aan het NL Design System werken." }), "\n", (0, a.jsxs)(t.p, { children: ["Deze sessies zijn publiek toegankelijk. ", (0, a.jsx)(t.a, { href: "/events/heartbeat/aanmelden", children: "Meld je aan" }), " of ", (0, a.jsx)(t.a, { href: "/events/heartbeat/videos", children: "kijk de video's terug" }), "."] }), "\n", (0, a.jsxs)(t.p, { children: ["Heb je vragen of wil je zelf iets vertellen of presenteren tijdens een van de heartbeats? Stuur ons dan een mailtje op ", (0, a.jsx)("a", { href: "mailto:kernteam@nldesignsystem.nl", children: (0, a.jsx)(t.a, { href: "mailto:kernteam@nldesignsystem.nl", children: "kernteam@nldesignsystem.nl" }) })] })] });
   }
   function c(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
  },
  80877: (e, t, n) => {
   n.d(t, { Z: () => o, a: () => i });
   var a = n(50959);
   const s = {},
    r = a.createContext(s);
   function i(e) {
    const t = a.useContext(r);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function o(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : i(e.components)), a.createElement(r.Provider, { value: t }, e.children);
   }
  },
 },
]);
