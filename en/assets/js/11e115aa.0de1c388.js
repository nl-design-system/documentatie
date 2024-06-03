"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [883],
 {
  89081: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => h, frontMatter: () => s, metadata: () => l, toc: () => c });
   var i = t(52676),
    o = t(24785);
   const s = { title: "Heading", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Heading", pagination_label: "Heading", description: "UX richtlijnen voor Heading component", slug: "/heading", tags: ["Unknown"] },
    a = "Heading",
    l = { id: "componenten/build/heading", title: "Heading", description: "UX richtlijnen voor Heading component", source: "@site/docs/componenten/build/heading.mdx", sourceDirName: "componenten/build", slug: "/heading", permalink: "/en/heading", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/heading.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Heading", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Heading", pagination_label: "Heading", description: "UX richtlijnen voor Heading component", slug: "/heading", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Heading 6", permalink: "/en/heading-6" }, next: { title: "Image", permalink: "/en/image" } },
    d = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function r(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "heading", children: "Heading" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "css", children: "CSS" }), "\n", (0, i.jsx)(n.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/utrecht/tree/main/components/heading/web-component", children: "Heading CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, i.jsxs)(n.li, { children: ["Storybook: ", (0, i.jsx)(n.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-heading--default-story", children: "Heading CSS storybook van Gemeente Utrecht" })] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Heading component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/114", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => a });
   var i = t(75271);
   const o = {},
    s = i.createContext(o);
   function a(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
