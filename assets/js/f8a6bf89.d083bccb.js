"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [66574],
 {
  36386: (i, e, t) => {
   t.r(e), t.d(e, { assets: () => c, contentTitle: () => s, default: () => a, frontMatter: () => r, metadata: () => o, toc: () => j });
   var n = t(11527),
    l = t(47214);
   const r = { title: "Richtlijnen voor stijl", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Overzicht", sidebar_position: 1, pagination_label: "Overzicht", description: "Richtlijnen voor stijl" },
    s = "Richtlijnen voor stijl",
    o = { id: "richtlijnen/stijl/README", title: "Richtlijnen voor stijl", description: "Richtlijnen voor stijl", source: "@site/docs/richtlijnen/stijl/README.md", sourceDirName: "richtlijnen/stijl", slug: "/richtlijnen/stijl/", permalink: "/richtlijnen/stijl/", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/README.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Richtlijnen voor stijl", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Overzicht", sidebar_position: 1, pagination_label: "Overzicht", description: "Richtlijnen voor stijl" }, sidebar: "richtlijnen", previous: { title: "Stijl", permalink: "/richtlijnen/stijl/overzicht" }, next: { title: "Typografie", permalink: "/richtlijnen/stijl/typografie" } },
    c = {},
    j = [];
   function h(i) {
    const e = { a: "a", h1: "h1", li: "li", ul: "ul", ...(0, l.a)(), ...i.components };
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(e.h1, { id: "richtlijnen-voor-stijl", children: "Richtlijnen voor stijl" }), "\n", (0, n.jsxs)(e.ul, { children: ["\n", (0, n.jsx)(e.li, { children: (0, n.jsx)(e.a, { href: "/richtlijnen/stijl/iconen", children: "Iconen" }) }), "\n", (0, n.jsx)(e.li, { children: (0, n.jsx)(e.a, { href: "/richtlijnen/stijl/kleuren", children: "Kleuren" }) }), "\n", (0, n.jsx)(e.li, { children: (0, n.jsx)(e.a, { href: "/richtlijnen/stijl/ruimte", children: "Ruimte" }) }), "\n", (0, n.jsx)(e.li, { children: (0, n.jsx)(e.a, { href: "/richtlijnen/stijl/typografie", children: "Typografie" }) }), "\n"] })] });
   }
   function a(i = {}) {
    const { wrapper: e } = { ...(0, l.a)(), ...i.components };
    return e ? (0, n.jsx)(e, { ...i, children: (0, n.jsx)(h, { ...i }) }) : h(i);
   }
  },
  47214: (i, e, t) => {
   t.d(e, { Z: () => o, a: () => s });
   var n = t(50959);
   const l = {},
    r = n.createContext(l);
   function s(i) {
    const e = n.useContext(r);
    return n.useMemo(
     function () {
      return "function" == typeof i ? i(e) : { ...e, ...i };
     },
     [e, i]
    );
   }
   function o(i) {
    let e;
    return (e = i.disableParentContext ? ("function" == typeof i.components ? i.components(l) : i.components || l) : s(i.components)), n.createElement(r.Provider, { value: e }, i.children);
   }
  },
 },
]);
