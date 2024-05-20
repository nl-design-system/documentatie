"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5370],
 {
  98339: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => a, default: () => r, frontMatter: () => l, metadata: () => d, toc: () => c });
   var o = t(52676),
    i = t(24785);
   const l = { title: "Modal dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Modal dialog", pagination_label: "Modal dialog", description: "UX richtlijnen voor Modal dialog component", slug: "/modal-dialog", tags: ["Community"] },
    a = "Modal dialog",
    d = { id: "componenten/build/modal-dialog", title: "Modal dialog", description: "UX richtlijnen voor Modal dialog component", source: "@site/docs/componenten/build/modal-dialog.mdx", sourceDirName: "componenten/build", slug: "/modal-dialog", permalink: "/modal-dialog", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/modal-dialog.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Modal dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Modal dialog", pagination_label: "Modal dialog", description: "UX richtlijnen voor Modal dialog component", slug: "/modal-dialog", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Link", permalink: "/link" }, next: { title: "Non modal dialog", permalink: "/non-modal-dialog" } },
    s = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function m(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "modal-dialog", children: "Modal dialog" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.' }), "\n", (0, o.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, o.jsx)(n.h3, { id: "css", children: "CSS" }), "\n", (0, o.jsx)(n.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, o.jsxs)(n.ul, { children: ["\n", (0, o.jsxs)(n.li, { children: ["Implementatie: ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/denhaag/blob/main/components/Modal/src/index.scss", children: "Modal dialog CSS implementatie van Gemeente Den Haag" })] }), "\n", (0, o.jsxs)(n.li, { children: ["Storybook: ", (0, o.jsx)(n.a, { href: "https://nl-design-system.github.io/denhaag/?path=/story/css-feedback-modal--default-story", children: "Modal dialog CSS storybook van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Modal dialog component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/66", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => a });
   var o = t(75271);
   const i = {},
    l = o.createContext(i);
   function a(e) {
    const n = o.useContext(l);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), o.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
