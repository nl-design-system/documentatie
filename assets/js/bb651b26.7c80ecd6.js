"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [84968],
 {
  73294: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => d, default: () => m, frontMatter: () => i, metadata: () => s, toc: () => c });
   var a = n(85893),
    o = n(11151);
   const i = { title: "Dot badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Dot badge", pagination_label: "Dot badge", description: "UX richtlijnen voor Dot badge component", slug: "/dot-badge", tags: ["Help Wanted"] },
    d = "Dot badge",
    s = { id: "componenten/build/dot-badge", title: "Dot badge", description: "UX richtlijnen voor Dot badge component", source: "@site/docs/componenten/build/dot-badge.mdx", sourceDirName: "componenten/build", slug: "/dot-badge", permalink: "/dot-badge", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/dot-badge.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Dot badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Dot badge", pagination_label: "Dot badge", description: "UX richtlijnen voor Dot badge component", slug: "/dot-badge", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Date Picker", permalink: "/date-picker" }, next: { title: "Fieldset", permalink: "/fieldset" } },
    l = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function r(e) {
    const t = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: "dot-badge", children: "Dot badge" }), "\n", (0, a.jsx)(t.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, a.jsx)(t.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, a.jsx)(t.h3, { id: "react", children: "React" }), "\n", (0, a.jsx)(t.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, a.jsxs)(t.ul, { children: ["\n", (0, a.jsxs)(t.li, { children: ["Implementatie: ", (0, a.jsx)(t.a, { href: "https://github.com/nl-design-system/denhaag/tree/main/components/DotIndicator/src", children: "Dot badge React implementatie van Gemeente Den Haag" })] }), "\n", (0, a.jsxs)(t.li, { children: ["Storybook: ", (0, a.jsx)(t.a, { href: "https://nl-design-system.github.io/denhaag/?path=/story/react-data-display-dot-indicator--indicator-on-rectangle", children: "Dot badge React storybook van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, a.jsx)(t.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(t.p, { children: ["De Dot badge component staat bij NL Design System in de ", (0, a.jsx)(t.a, { href: "https://github.com/nl-design-system/backlog/issues/98", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: t } = { ...(0, o.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  11151: (e, t, n) => {
   n.d(t, { Z: () => s, a: () => d });
   var a = n(67294);
   const o = {},
    i = a.createContext(o);
   function d(e) {
    const t = a.useContext(i);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e]
    );
   }
   function s(e) {
    let t;
    return (t = e.disableParentContext ? ("function" == typeof e.components ? e.components(o) : e.components || o) : d(e.components)), a.createElement(i.Provider, { value: t }, e.children);
   }
  },
 },
]);
