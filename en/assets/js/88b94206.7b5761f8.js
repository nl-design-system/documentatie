"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9325],
 {
  93028: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => a, default: () => p, frontMatter: () => o, metadata: () => s, toc: () => d });
   var i = t(11527),
    l = t(80877);
   const o = { title: "File input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "File input", pagination_label: "File input", description: "UX richtlijnen voor File input component", slug: "/file-input", tags: ["Help Wanted"] },
    a = "File input",
    s = { id: "componenten/build/file-input", title: "File input", description: "UX richtlijnen voor File input component", source: "@site/docs/componenten/build/file-input.mdx", sourceDirName: "componenten/build", slug: "/file-input", permalink: "/en/file-input", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/file-input.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "File input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "File input", pagination_label: "File input", description: "UX richtlijnen voor File input component", slug: "/file-input", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Figure", permalink: "/en/figure" }, next: { title: "Form field checkbox option", permalink: "/en/form-field-checkbox-option" } },
    c = {},
    d = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function r(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", (0, i.jsx)(n.h1, { id: "file-input", children: "File input" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, i.jsx)(n.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=10817%3A61351", children: "File input Figma implementatie van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De File input component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/72", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  80877: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => a });
   var i = t(50959);
   const l = {},
    o = i.createContext(l);
   function a(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : a(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
