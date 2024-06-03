"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7136],
 {
  25958: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => a, default: () => d, frontMatter: () => l, metadata: () => o, toc: () => r });
   var i = t(52676),
    s = t(24785);
   const l = { title: "Image", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Image", pagination_label: "Image", description: "UX richtlijnen voor Image component", slug: "/image", tags: ["Unknown"] },
    a = "Image",
    o = { id: "componenten/build/image", title: "Image", description: "UX richtlijnen voor Image component", source: "@site/docs/componenten/build/image.mdx", sourceDirName: "componenten/build", slug: "/image", permalink: "/en/image", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/image.mdx", tags: [{ label: "Unknown", permalink: "/en/tags/unknown" }], version: "current", frontMatter: { title: "Image", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Image", pagination_label: "Image", description: "UX richtlijnen voor Image component", slug: "/image", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Heading", permalink: "/en/heading" }, next: { title: "Invalid form alert", permalink: "/en/invalid-form-alert" } },
    c = {},
    r = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "Vue", id: "vue", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-2", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function m(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "image", children: "Image" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "css", children: "CSS" }), "\n", (0, i.jsx)(n.h4, { id: "gemeente-utrecht", children: "Gemeente Utrecht" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://nl-design-system.github.io/utrecht/storybook-css/?path=/docs/css-img--docs", children: "Image CSS implementatie van Gemeente Utrecht" })] }), "\n", (0, i.jsx)(n.li, { children: "Storybook: (nog) geen story beschikbaar" }), "\n"] }), "\n", (0, i.jsx)(n.h3, { id: "react", children: "React" }), "\n", (0, i.jsx)(n.h4, { id: "gemeente-utrecht-1", children: "Gemeente Utrecht" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://nl-design-system.github.io/utrecht/storybook-react/?path=/docs/react-image--docs", children: "Image React implementatie van Gemeente Utrecht" })] }), "\n", (0, i.jsx)(n.li, { children: "Storybook: (nog) geen story beschikbaar" }), "\n"] }), "\n", (0, i.jsx)(n.h3, { id: "vue", children: "Vue" }), "\n", (0, i.jsx)(n.h4, { id: "gemeente-utrecht-2", children: "Gemeente Utrecht" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/vue_vue-image--docs", children: "Image Vue implementatie van Gemeente Utrecht" })] }), "\n", (0, i.jsx)(n.li, { children: "Storybook: (nog) geen story beschikbaar" }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Image component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/201", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => a });
   var i = t(75271);
   const s = {},
    l = i.createContext(s);
   function a(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), i.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
