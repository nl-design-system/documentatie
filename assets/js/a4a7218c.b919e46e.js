"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9633],
 {
  18346: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => u, contentTitle: () => p, default: () => l, frontMatter: () => r, metadata: () => s, toc: () => c });
   var o = n(52676),
    i = n(24785);
   const r = { title: "Text input group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Text input group", pagination_label: "Text input group", description: "UX richtlijnen voor Text input group component", slug: "/text-input-group", tags: ["Unknown"] },
    p = "Text input group",
    s = { id: "componenten/build/text-input-group", title: "Text input group", description: "UX richtlijnen voor Text input group component", source: "@site/docs/componenten/build/text-input-group.mdx", sourceDirName: "componenten/build", slug: "/text-input-group", permalink: "/text-input-group", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/text-input-group.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Text input group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Text input group", pagination_label: "Text input group", description: "UX richtlijnen voor Text input group component", slug: "/text-input-group", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Tabs", permalink: "/tabs" }, next: { title: "Text input", permalink: "/text-input" } },
    u = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function a(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(t.h1, { id: "text-input-group", children: "Text input group" }), "\n", (0, o.jsx)(t.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, o.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(t.p, { children: ["De Text input group component staat bij NL Design System in de ", (0, o.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/178", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function l(e = {}) {
    const { wrapper: t } = { ...(0, i.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => s, a: () => p });
   var o = n(75271);
   const i = {},
    r = o.createContext(i);
   function p(e) {
    const t = o.useContext(r);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function s(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : p(e.components)), o.createElement(r.Provider, { value: t }, e.children);
   }
  },
 },
]);
