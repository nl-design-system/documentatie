"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4135],
 {
  22903: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => a, default: () => p, frontMatter: () => r, metadata: () => s, toc: () => c });
   var o = t(11527),
    i = t(27034);
   const r = { title: "Radio group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Radio group", pagination_label: "Radio group", description: "UX richtlijnen voor Radio group component", slug: "/radio-group", tags: ["Help Wanted"] },
    a = "Radio group",
    s = { id: "componenten/build/radio-group", title: "Radio group", description: "UX richtlijnen voor Radio group component", source: "@site/docs/componenten/build/radio-group.mdx", sourceDirName: "componenten/build", slug: "/radio-group", permalink: "/en/radio-group", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/radio-group.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Radio group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Radio group", pagination_label: "Radio group", description: "UX richtlijnen voor Radio group component", slug: "/radio-group", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Progress", permalink: "/en/progress" }, next: { title: "Radio button", permalink: "/en/radio" } },
    d = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }];
   function l(e) {
    const n = { a: "a", h1: "h1", h2: "h2", p: "p", ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ["\n", "\n", (0, o.jsx)(n.h1, { id: "radio-group", children: "Radio group" }), "\n", (0, o.jsx)(n.p, { children: 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.' }), "\n", (0, o.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, o.jsxs)(n.p, { children: ["De Radio group component staat bij NL Design System in de ", (0, o.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/129", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  27034: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => a });
   var o = t(50959);
   const i = {},
    r = o.createContext(i);
   function a(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
