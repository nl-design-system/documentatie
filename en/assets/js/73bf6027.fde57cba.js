"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [96103],
 {
  95078: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => o, default: () => m, frontMatter: () => i, metadata: () => r, toc: () => d });
   var a = n(52676),
    s = n(24785);
   const i = { title: "Bedankt voor je aanmelding", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "2 wekelijkse updates van het kernteam en community", slug: "/events/heartbeat/aanmelden/bedankt", unlisted: !0 },
    o = "Bedankt!",
    r = { id: "community/events/heartbeat/aanmelden-success", title: "Bedankt voor je aanmelding", description: "Je bent nu aangemeld voor onze tweewekelijkse Heartbeat.", source: "@site/docs/community/events/heartbeat/aanmelden-success.mdx", sourceDirName: "community/events/heartbeat", slug: "/events/heartbeat/aanmelden/bedankt", permalink: "/en/events/heartbeat/aanmelden/bedankt", draft: !1, unlisted: !0, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/aanmelden-success.mdx", tags: [], version: "current", frontMatter: { title: "Bedankt voor je aanmelding", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "2 wekelijkse updates van het kernteam en community", slug: "/events/heartbeat/aanmelden/bedankt", unlisted: !0 } },
    l = {},
    d = [];
   function c(e) {
    const t = { a: "a", h1: "h1", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: "bedankt", children: "Bedankt!" }), "\n", (0, a.jsx)(t.p, { children: "Je bent nu aangemeld voor onze tweewekelijkse Heartbeat." }), "\n", (0, a.jsxs)(t.ul, { children: ["\n", (0, a.jsx)(t.li, { children: (0, a.jsx)(t.a, { href: "/events/heartbeat/videos", children: "Video's van eerdere Heartbeats" }) }), "\n"] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => r, a: () => o });
   var a = n(75271);
   const s = {},
    i = a.createContext(s);
   function o(e) {
    const t = a.useContext(i);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function r(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), a.createElement(i.Provider, { value: t }, e.children);
   }
  },
 },
]);
