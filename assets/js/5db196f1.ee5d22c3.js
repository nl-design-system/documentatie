"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [29813],
 {
  51741: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => o, default: () => c, frontMatter: () => a, metadata: () => r, toc: () => d });
   var i = t(11527),
    l = t(47214);
   const a = { title: "Invalid form alert", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Invalid form alert", pagination_label: "Invalid form alert", description: "UX richtlijnen voor Invalid form alert component", slug: "/invalid-form-alert", tags: ["Help Wanted"] },
    o = "Invalid form alert",
    r = { id: "componenten/build/invalid-form-alert", title: "Invalid form alert", description: "UX richtlijnen voor Invalid form alert component", source: "@site/docs/componenten/build/invalid-form-alert.mdx", sourceDirName: "componenten/build", slug: "/invalid-form-alert", permalink: "/invalid-form-alert", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/invalid-form-alert.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Invalid form alert", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Invalid form alert", pagination_label: "Invalid form alert", description: "UX richtlijnen voor Invalid form alert component", slug: "/invalid-form-alert", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Heading 6", permalink: "/heading-6" }, next: { title: "Legend", permalink: "/legend" } },
    s = {},
    d = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function m(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: "invalid-form-alert", children: "Invalid form alert" }), "\n", (0, i.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, i.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, i.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, i.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: ["Implementatie: ", (0, i.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1300-5679", children: "Invalid form alert Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, i.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, i.jsxs)(n.p, { children: ["De Invalid form alert component staat bij NL Design System in de ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/175", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  47214: (e, n, t) => {
   t.d(n, { Z: () => r, a: () => o });
   var i = t(50959);
   const l = {},
    a = i.createContext(l);
   function o(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e]
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : o(e.components)), i.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
