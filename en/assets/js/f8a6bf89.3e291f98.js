"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6574],
 {
  3996: (e, i, n) => {
   n.r(i), n.d(i, { assets: () => c, contentTitle: () => s, default: () => a, frontMatter: () => r, metadata: () => o, toc: () => j });
   var t = n(11527),
    l = n(47214);
   const r = { title: "Richtlijnen voor stijl", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Overzicht", sidebar_position: 1, pagination_label: "Overzicht", description: "Richtlijnen voor stijl" },
    s = "Richtlijnen voor stijl",
    o = { id: "richtlijnen/stijl/README", title: "Richtlijnen voor stijl", description: "Richtlijnen voor stijl", source: "@site/docs/richtlijnen/stijl/README.md", sourceDirName: "richtlijnen/stijl", slug: "/richtlijnen/stijl/", permalink: "/en/richtlijnen/stijl/", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/README.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Richtlijnen voor stijl", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Overzicht", sidebar_position: 1, pagination_label: "Overzicht", description: "Richtlijnen voor stijl" }, sidebar: "richtlijnen", previous: { title: "Stijl", permalink: "/en/richtlijnen/stijl/overzicht" }, next: { title: "Typografie", permalink: "/en/richtlijnen/stijl/typografie" } },
    c = {},
    j = [];
   function h(e) {
    const i = { a: "a", h1: "h1", li: "li", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(i.h1, { id: "richtlijnen-voor-stijl", children: "Richtlijnen voor stijl" }), "\n", (0, t.jsxs)(i.ul, { children: ["\n", (0, t.jsx)(i.li, { children: (0, t.jsx)(i.a, { href: "/en/richtlijnen/stijl/iconen", children: "Iconen" }) }), "\n", (0, t.jsx)(i.li, { children: (0, t.jsx)(i.a, { href: "/en/richtlijnen/stijl/kleuren", children: "Kleuren" }) }), "\n", (0, t.jsx)(i.li, { children: (0, t.jsx)(i.a, { href: "/en/richtlijnen/stijl/ruimte", children: "Ruimte" }) }), "\n", (0, t.jsx)(i.li, { children: (0, t.jsx)(i.a, { href: "/en/richtlijnen/stijl/typografie", children: "Typografie" }) }), "\n"] })] });
   }
   function a(e = {}) {
    const { wrapper: i } = { ...(0, l.a)(), ...e.components };
    return i ? (0, t.jsx)(i, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  47214: (e, i, n) => {
   n.d(i, { Z: () => o, a: () => s });
   var t = n(50959);
   const l = {},
    r = t.createContext(l);
   function s(e) {
    const i = t.useContext(r);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(i) : { ...i, ...e };
     },
     [i, e],
    );
   }
   function o(e) {
    let i;
    return (i = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), t.createElement(r.Provider, { value: i }, e.children);
   }
  },
 },
]);
