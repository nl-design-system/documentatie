"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4787],
 {
  8381: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => s, default: () => h, frontMatter: () => i, metadata: () => a, toc: () => l });
   var o = n(52676),
    c = n(24785);
   const i = { title: "Rich text content", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Rich text content", pagination_label: "Rich text content", description: "UX richtlijnen voor Rich text content component", slug: "/rich-text-content", tags: ["Help Wanted"] },
    s = "Rich text content",
    a = { id: "componenten/build/rich-text-content", title: "Rich text content", description: "UX richtlijnen voor Rich text content component", source: "@site/docs/componenten/build/rich-text-content.mdx", sourceDirName: "componenten/build", slug: "/rich-text-content", permalink: "/rich-text-content", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/rich-text-content.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Rich text content", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Rich text content", pagination_label: "Rich text content", description: "UX richtlijnen voor Rich text content component", slug: "/rich-text-content", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Range", permalink: "/range" }, next: { title: "Select", permalink: "/select" } },
    r = {},
    l = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function d(e) {
    const t = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, c.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(t.h1, { id: "rich-text-content", children: "Rich text content" }), "\n", (0, o.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, o.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(t.p, { children: ["De Rich text content component staat bij NL Design System in de ", (0, o.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/127", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, c.a)(), ...e.components };
    return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => a, a: () => s });
   var o = n(75271);
   const c = {},
    i = o.createContext(c);
   function s(e) {
    const t = o.useContext(i);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function a(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(c) : e.components || c) : s(e.components)), o.createElement(i.Provider, { value: t }, e.children);
   }
  },
 },
]);
