"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1344],
 {
  56585: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => o, default: () => d, frontMatter: () => a, metadata: () => l, toc: () => r });
   var i = t(52676),
    s = t(24785);
   const a = { title: "Sluit je aan bij onze community", hide_title: !1, hide_table_of_contents: !1, sidebar_label: "Sluit je aan", pagination_label: "Sluit je aan", description: "Meld je aan bij de community van NL Design System.", slug: "/community/sluit-je-aan/bedankt", keywords: ["nl design system"] },
    o = void 0,
    l = { id: "community/sluit-je-aan-success", title: "Sluit je aan bij onze community", description: "Meld je aan bij de community van NL Design System.", source: "@site/docs/community/sluit-je-aan-success.mdx", sourceDirName: "community", slug: "/community/sluit-je-aan/bedankt", permalink: "/community/sluit-je-aan/bedankt", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/community/sluit-je-aan-success.mdx", tags: [], version: "current", frontMatter: { title: "Sluit je aan bij onze community", hide_title: !1, hide_table_of_contents: !1, sidebar_label: "Sluit je aan", pagination_label: "Sluit je aan", description: "Meld je aan bij de community van NL Design System.", slug: "/community/sluit-je-aan/bedankt", keywords: ["nl design system"] } },
    c = {},
    r = [];
   function u(e) {
    const n = { a: "a", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", (0, i.jsx)(n.p, { children: "Bedankt voor je aanmelding, welkom bij de NL Design System Community!" }), "\n", (0, i.jsx)(n.p, { children: "Handige links:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "https://praatmee.codefor.nl", children: "Word lid van het #nl-design-system Slack kanaal" }), " op CodeForNL, daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen."] }), "\n", (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: "/community/events/overzicht", children: "Bekijk events waar je aan mee kunt doen" }) }), "\n", (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/", children: "Kijk naar code op GitHub" }) }), "\n"] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => o });
   var i = t(75271);
   const s = {},
    a = i.createContext(s);
   function o(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), i.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
