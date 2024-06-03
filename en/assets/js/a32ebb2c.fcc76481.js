"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2138],
 {
  78413: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => c, contentTitle: () => o, default: () => p, frontMatter: () => s, metadata: () => a, toc: () => d });
   var t = i(52676),
    l = i(24785);
   const s = { title: "Skip link", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Skip link", pagination_label: "Skip link", description: "UX richtlijnen voor Skip link component", slug: "/skip-link", tags: ["Unknown"] },
    o = "Skip link",
    a = { id: "componenten/build/skip-link", title: "Skip link", description: "UX richtlijnen voor Skip link component", source: "@site/docs/componenten/build/skip-link.mdx", sourceDirName: "componenten/build", slug: "/skip-link", permalink: "/en/skip-link", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/skip-link.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Skip link", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Skip link", pagination_label: "Skip link", description: "UX richtlijnen voor Skip link component", slug: "/skip-link", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Side navigation", permalink: "/en/side-navigation" }, next: { title: "Spinner", permalink: "/en/spinner" } },
    c = {},
    d = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function r(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", (0, t.jsx)(n.h1, { id: "skip-link", children: "Skip link" }), "\n", (0, t.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, t.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, t.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, t.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Implementatie: ", (0, t.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?type=design&node-id=2217-10122", children: "Skip link Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, t.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, t.jsxs)(n.p, { children: ["De Skip link component staat bij NL Design System in de ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/74", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => o });
   var t = i(75271);
   const l = {},
    s = t.createContext(l);
   function o(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : o(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
