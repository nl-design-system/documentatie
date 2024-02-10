"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1237],
 {
  83949: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => u, frontMatter: () => i, metadata: () => r, toc: () => l });
   var s = t(11527),
    o = t(27034);
   const i = { title: "Bedankt voor je aanmelding", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/events/design-open-hour/aanmelden/bedankt" },
    a = "Bedankt!",
    r = { id: "community/events/design-open-hour/aanmelden-success", title: "Bedankt voor je aanmelding", description: "Je bent nu aangemeld voor onze tweewekelijkse Design Open Hour.", source: "@site/docs/community/events/design-open-hour/aanmelden-success.mdx", sourceDirName: "community/events/design-open-hour", slug: "/events/design-open-hour/aanmelden/bedankt", permalink: "/events/design-open-hour/aanmelden/bedankt", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/aanmelden-success.mdx", tags: [], version: "current", frontMatter: { title: "Bedankt voor je aanmelding", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Aanmelden", pagination_label: "In het Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.", slug: "/events/design-open-hour/aanmelden/bedankt" } },
    d = {},
    l = [];
   function c(e) {
    const n = { h1: "h1", p: "p", ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: "bedankt", children: "Bedankt!" }), "\n", (0, s.jsx)(n.p, { children: "Je bent nu aangemeld voor onze tweewekelijkse Design Open Hour." })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
  },
  27034: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => a });
   var s = t(50959);
   const o = {},
    i = s.createContext(o);
   function a(e) {
    const n = s.useContext(i);
    return s.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), s.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
