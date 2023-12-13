"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64376],
 {
  13713: (t, s, e) => {
   e.r(s), e.d(s, { assets: () => c, contentTitle: () => o, default: () => _, frontMatter: () => l, metadata: () => u, toc: () => d });
   var a = e(11527),
    n = e(47214),
    i = e(89405);
   const l = { title: "Estafettemodel voor richtlijnen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Estafettemodel", sidebar_position: 1, pagination_label: "Estafettemodel", description: "Estafettemodel voor richtlijnen", keywords: ["richtlijnen", "design system", "estafettemodel"] },
    o = "Estafettemodel",
    u = { id: "richtlijnen/estafettemodel", title: "Estafettemodel voor richtlijnen", description: "Estafettemodel voor richtlijnen", source: "@site/docs/richtlijnen/estafettemodel.mdx", sourceDirName: "richtlijnen", slug: "/richtlijnen/estafettemodel", permalink: "/en/richtlijnen/estafettemodel", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/estafettemodel.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Estafettemodel voor richtlijnen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Estafettemodel", sidebar_position: 1, pagination_label: "Estafettemodel", description: "Estafettemodel voor richtlijnen", keywords: ["richtlijnen", "design system", "estafettemodel"] } },
    c = {},
    d = [];
   function r(t) {
    const s = { a: "a", h1: "h1", p: "p", ...(0, n.a)(), ...t.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(s.h1, { id: "estafettemodel", children: "Estafettemodel" }), "\n", (0, a.jsxs)(s.p, { children: ["De richtlijnen van NL Design System worden met een ", (0, a.jsx)(s.a, { href: "'/meedoen/estafettemodel'", children: "estafette aanpak" }), " gemaakt. Daarom kan een richtlijn een van de volgende statussen hebben:"] }), "\n", (0, a.jsx)(i.P, {})] });
   }
   function _(t = {}) {
    const { wrapper: s } = { ...(0, n.a)(), ...t.components };
    return s ? (0, a.jsx)(s, { ...t, children: (0, a.jsx)(r, { ...t }) }) : r(t);
   }
  },
  89405: (t, s, e) => {
   e.d(s, { P: () => u });
   e(50959);
   var a = e(5341);
   const n = { "status-visual__status": "status-visual__status_WLZ4", "status-visual__connector": "status-visual__connector_s1s2", "status-visual__status--help-wanted": "status-visual__status--help-wanted_YObc", "status-visual__status--community": "status-visual__status--community_bL0y", "status-visual__status--unstable": "status-visual__status--unstable_ztb4", "status-visual__status--stable": "status-visual__status--stable_y8aj", "status-visual__title": "status-visual__title_JRta", "status-visual__description": "status-visual__description_tQIN" },
    i = "icon_fo5I";
   var l = e(11527);
   const o = (t) => {
     let { className: s, ...e } = t;
     return (0, l.jsx)("svg", { width: "14", height: "16", viewBox: "0 0 14 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", className: (0, a.Z)(i, s), ...e, children: (0, l.jsx)("path", { d: "M7 0C7.55228 0 8 0.447715 8 1L7.73285 14.3196L7.73487 14.3218L8 1V12.5858L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L7.70731 15.7069L7.70498 15.7092C7.60959 15.8041 7.49984 15.8757 7.38275 15.9241C7.2675 15.9719 7.14137 15.9988 7.00911 16L7.003 16L7 16L6.997 16L6.99235 16C6.85955 15.999 6.7329 15.9721 6.61722 15.9241C6.50195 15.8764 6.3938 15.8063 6.29945 15.7136L6.29289 15.7071L0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289C0.683417 7.90237 1.31658 7.90237 1.70711 8.29289L6 12.5858V1C6 0.447715 6.44772 0 7 0Z" }) });
    },
    u = () => (0, l.jsxs)("dl", { className: (0, a.Z)(n["status-visual"]), children: [(0, l.jsxs)("div", { className: (0, a.Z)(n["status-visual__status"], n["status-visual__status--help-wanted"]), children: [(0, l.jsx)("dt", { className: (0, a.Z)(n["status-visual__title"]), children: "Help Wanted" }), (0, l.jsx)("dd", { className: (0, a.Z)(n["status-visual__description"]), children: "Klaar om van de backlog opgepakt te worden" })] }), (0, l.jsxs)("div", { className: (0, a.Z)(n["status-visual__status"], n["status-visual__status--community"]), children: [(0, l.jsx)(o, { className: (0, a.Z)(n["status-visual__connector"]) }), (0, l.jsx)("dt", { className: (0, a.Z)(n["status-visual__title"]), children: "Community" }), (0, l.jsx)("dd", { className: (0, a.Z)(n["status-visual__description"]), children: "Door de community gebouwd volgens NLDS richtlijnen" })] }), (0, l.jsxs)("div", { className: (0, a.Z)(n["status-visual__status"], n["status-visual__status--unstable"]), children: [(0, l.jsx)(o, { className: (0, a.Z)(n["status-visual__connector"]) }), (0, l.jsx)("dt", { className: (0, a.Z)(n["status-visual__title"]), children: "Candidate" }), (0, l.jsx)("dd", { className: (0, a.Z)(n["status-visual__description"]), children: "NLDS component, maar is nog in ontwikkeling" })] }), (0, l.jsxs)("div", { className: (0, a.Z)(n["status-visual__status"], n["status-visual__status--stable"]), children: [(0, l.jsx)(o, { className: (0, a.Z)(n["status-visual__connector"]) }), (0, l.jsx)("dt", { className: (0, a.Z)(n["status-visual__title"]), children: "Hall of Fame" }), (0, l.jsx)("dd", { className: (0, a.Z)(n["status-visual__description"]), children: "NLDS component volgens onze Definition of Done" })] })] });
  },
  47214: (t, s, e) => {
   e.d(s, { Z: () => o, a: () => l });
   var a = e(50959);
   const n = {},
    i = a.createContext(n);
   function l(t) {
    const s = a.useContext(i);
    return a.useMemo(
     function () {
      return "function" == typeof t ? t(s) : { ...s, ...t };
     },
     [s, t]
    );
   }
   function o(t) {
    let s;
    return (s = t.disableParentContext ? ("function" == typeof t.components ? t.components(n) : t.components || n) : l(t.components)), a.createElement(i.Provider, { value: s }, t.children);
   }
  },
 },
]);
