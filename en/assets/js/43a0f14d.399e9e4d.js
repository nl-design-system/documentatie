"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6896],
 {
  38874: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => d, default: () => p, frontMatter: () => s, metadata: () => a, toc: () => l });
   var o = t(11527),
    i = t(27034);
   const s = { title: "Video", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Video", pagination_label: "Video", description: "UX richtlijnen voor Video component", slug: "/video", tags: ["Help Wanted"] },
    d = "Video",
    a = { id: "componenten/build/video", title: "Video", description: "UX richtlijnen voor Video component", source: "@site/docs/componenten/build/video.mdx", sourceDirName: "componenten/build", slug: "/video", permalink: "/en/video", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/video.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Video", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Video", pagination_label: "Video", description: "UX richtlijnen voor Video component", slug: "/video", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Variable Heading", permalink: "/en/variable-heading" } },
    c = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function r(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "video", children: "Video" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Video component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/69", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  27034: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => d });
   var o = t(50959);
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
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : d(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
