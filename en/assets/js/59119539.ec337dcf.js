"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8173],
 {
  26641: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => o, default: () => r, frontMatter: () => s, metadata: () => l, toc: () => m });
   var a = t(11527),
    i = t(27034);
   const s = { title: "Tabs", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Tabs", pagination_label: "Tabs", description: "UX richtlijnen voor Tabs component", slug: "/tabs", tags: ["Community"] },
    o = "Tabs",
    l = { id: "componenten/build/tabs", title: "Tabs", description: "UX richtlijnen voor Tabs component", source: "@site/docs/componenten/build/tabs.mdx", sourceDirName: "componenten/build", slug: "/tabs", permalink: "/en/tabs", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/tabs.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Tabs", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Tabs", pagination_label: "Tabs", description: "UX richtlijnen voor Tabs component", slug: "/tabs", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Table", permalink: "/en/table" }, next: { title: "Text input group", permalink: "/en/text-input-group" } },
    c = {},
    m = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ["\n", "\n", (0, a.jsx)(n.h1, { id: "tabs", children: "Tabs" }), "\n", (0, a.jsx)(n.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, a.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, a.jsx)(n.h3, { id: "react", children: "React" }), "\n", (0, a.jsx)(n.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, a.jsxs)(n.ul, { children: ["\n", (0, a.jsxs)(n.li, { children: ["Implementatie: ", (0, a.jsx)(n.a, { href: "https://github.com/nl-design-system/denhaag/blob/main/components/Tab/src/Tabs.tsx", children: "Tabs React implementatie van Gemeente Den Haag" })] }), "\n", (0, a.jsxs)(n.li, { children: ["Storybook: ", (0, a.jsx)(n.a, { href: "https://nl-design-system.github.io/denhaag/?path=/story/react-navigation-tab--default", children: "Tabs React storybook van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, a.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, a.jsx)(n.h4, { id: "gemeente-den-haag-1", children: "Gemeente Den Haag" }), "\n", (0, a.jsxs)(n.ul, { children: ["\n", (0, a.jsxs)(n.li, { children: ["Implementatie: ", (0, a.jsx)(n.a, { href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=5020%3A18454", children: "Tabs Figma implementatie van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, a.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(n.p, { children: ["De Tabs component staat bij NL Design System in de ", (0, a.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/51", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
   }
  },
  27034: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => o });
   var a = t(50959);
   const i = {},
    s = a.createContext(i);
   function o(e) {
    const n = a.useContext(s);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), a.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
