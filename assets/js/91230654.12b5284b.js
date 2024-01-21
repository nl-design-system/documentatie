"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [635],
 {
  6804: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => a, contentTitle: () => d, default: () => c, frontMatter: () => l, metadata: () => r, toc: () => s });
   var o = i(1527),
    t = i(7214);
   const l = { title: "Form field radio option", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field radio option", pagination_label: "Form field radio option", description: "UX richtlijnen voor Form field radio option component", slug: "/form-field-radio-option", tags: ["Help Wanted"] },
    d = "Form field radio option",
    r = { id: "componenten/build/form-field-radio-option", title: "Form field radio option", description: "UX richtlijnen voor Form field radio option component", source: "@site/docs/componenten/build/form-field-radio-option.mdx", sourceDirName: "componenten/build", slug: "/form-field-radio-option", permalink: "/form-field-radio-option", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-radio-option.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field radio option", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field radio option", pagination_label: "Form field radio option", description: "UX richtlijnen voor Form field radio option component", slug: "/form-field-radio-option", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field partial", permalink: "/form-field-partial" }, next: { title: "Form field", permalink: "/form-field" } },
    a = {},
    s = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function m(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "form-field-radio-option", children: "Form field radio option" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, o.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, o.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, o.jsx)(n.h4, { id: "nl-design-system", children: "NL Design System" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Implementatie: ", (0, o.jsx)(n.a, { href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1039-2941", children: "Form field radio option Figma implementatie van NL Design System" })] }), "\n"] }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Form field radio option component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/173", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
  },
  7214: (e, n, i) => {
   i.d(n, { Z: () => r, a: () => d });
   var o = i(959);
   const t = {},
    l = o.createContext(t);
   function d(e) {
    const n = o.useContext(l);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(t) : e.components || t) : d(e.components)), o.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
