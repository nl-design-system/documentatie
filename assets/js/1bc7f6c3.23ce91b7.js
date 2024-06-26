"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [51237],
 {
  75401: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => r, contentTitle: () => a, default: () => c, frontMatter: () => o, metadata: () => d, toc: () => l });
   var s = t(52676),
    i = t(24785);
   const o = { title: "Bedankt voor je aanmelding", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/events/design-open-hour/aanmelden/bedankt", unlisted: !0 },
    a = "Bedankt!",
    d = { id: "community/events/design-open-hour/aanmelden-success", title: "Bedankt voor je aanmelding", description: "Je bent nu aangemeld voor onze tweewekelijkse Design Open Hour.", source: "@site/docs/community/events/design-open-hour/aanmelden-success.mdx", sourceDirName: "community/events/design-open-hour", slug: "/events/design-open-hour/aanmelden/bedankt", permalink: "/events/design-open-hour/aanmelden/bedankt", draft: !1, unlisted: !0, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden-success.mdx", tags: [], version: "current", frontMatter: { title: "Bedankt voor je aanmelding", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/events/design-open-hour/aanmelden/bedankt", unlisted: !0 } },
    r = {},
    l = [];
   function u(e) {
    const n = { h1: "h1", p: "p", ...(0, i.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: "bedankt", children: "Bedankt!" }), "\n", (0, s.jsx)(n.p, { children: "Je bent nu aangemeld voor onze tweewekelijkse Design Open Hour." })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => a });
   var s = t(75271);
   const i = {},
    o = s.createContext(i);
   function a(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), s.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
