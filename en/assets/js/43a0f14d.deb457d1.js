"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6896],
 {
  26449: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => d, default: () => u, frontMatter: () => s, metadata: () => c, toc: () => r });
   var o = t(52676),
    i = t(24785);
   const s = { title: "Video", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Video", pagination_label: "Video", description: "UX richtlijnen voor Video component", slug: "/video", tags: ["Unknown"] },
    d = "Video",
    c = { id: "componenten/build/video", title: "Video", description: "UX richtlijnen voor Video component", source: "@site/docs/componenten/build/video.mdx", sourceDirName: "componenten/build", slug: "/video", permalink: "/en/video", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/video.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Video", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Video", pagination_label: "Video", description: "UX richtlijnen voor Video component", slug: "/video", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Unordered list", permalink: "/en/unordered-list" } },
    l = {},
    r = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function a(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "video", children: "Video" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Video component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/69", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => c, a: () => d });
   var o = t(75271);
   const i = {},
    s = o.createContext(i);
   function d(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : d(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
