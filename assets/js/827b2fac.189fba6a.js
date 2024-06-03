"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3044],
 {
  66761: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => s, default: () => p, frontMatter: () => l, metadata: () => a, toc: () => r });
   var o = n(52676),
    i = n(24785);
   const l = { title: "Toggletip", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Toggletip", pagination_label: "Toggletip", description: "UX richtlijnen voor Toggletip component", slug: "/toggletip", tags: ["Unknown"] },
    s = "Toggletip",
    a = { id: "componenten/build/toggletip", title: "Toggletip", description: "UX richtlijnen voor Toggletip component", source: "@site/docs/componenten/build/toggletip.mdx", sourceDirName: "componenten/build", slug: "/toggletip", permalink: "/toggletip", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/toggletip.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Toggletip", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Toggletip", pagination_label: "Toggletip", description: "UX richtlijnen voor Toggletip component", slug: "/toggletip", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Textarea", permalink: "/textarea" }, next: { title: "Tooltip", permalink: "/tooltip" } },
    c = {},
    r = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function g(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(t.h1, { id: "toggletip", children: "Toggletip" }), "\n", (0, o.jsx)(t.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, o.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(t.p, { children: ["De Toggletip component staat bij NL Design System in de ", (0, o.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/170", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => a, a: () => s });
   var o = n(75271);
   const i = {},
    l = o.createContext(i);
   function s(e) {
    const t = o.useContext(l);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function a(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), o.createElement(l.Provider, { value: t }, e.children);
   }
  },
 },
]);
