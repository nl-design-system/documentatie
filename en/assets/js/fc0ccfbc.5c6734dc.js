"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4135],
 {
  62751: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => a, default: () => p, frontMatter: () => s, metadata: () => r, toc: () => d });
   var o = t(52676),
    i = t(24785);
   const s = { title: "Radio group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Radio group", pagination_label: "Radio group", description: "UX richtlijnen voor Radio group component", slug: "/radio-group", tags: ["Unknown"] },
    a = "Radio group",
    r = { id: "componenten/build/radio-group", title: "Radio group", description: "UX richtlijnen voor Radio group component", source: "@site/docs/componenten/build/radio-group.mdx", sourceDirName: "componenten/build", slug: "/radio-group", permalink: "/en/radio-group", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/radio-group.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Radio group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Radio group", pagination_label: "Radio group", description: "UX richtlijnen voor Radio group component", slug: "/radio-group", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Progress", permalink: "/en/progress" }, next: { title: "Radio button", permalink: "/en/radio" } },
    l = {},
    d = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function c(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "radio-group", children: "Radio group" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, o.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, o.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, o.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Implementatie: ", (0, o.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?type=design&node-id=954-1910", children: "Radio group Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Radio group component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/129", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => a });
   var o = t(75271);
   const i = {},
    s = o.createContext(i);
   function a(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
