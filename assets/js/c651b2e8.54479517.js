'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [76645],
 {
  13694: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => u, contentTitle: () => c, default: () => l, frontMatter: () => i, metadata: () => s, toc: () => a });
   const s = JSON.parse('{"id":"project/nieuwsbrief","title":"nieuwsbrief","description":"","source":"@site/docs/project/nieuwsbrief.mdx","sourceDirName":"project","slug":"/project/nieuwsbrief","permalink":"/project/nieuwsbrief","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/nieuwsbrief.mdx","tags":[],"version":"current","frontMatter":{}}');
   var r = n(86070),
    o = n(85248);
   const i = {},
    c = void 0,
    u = {},
    a = [];
   function d(e) {
    return (0, r.jsx)(r.Fragment, {});
   }
   function l(e = {}) {
    const { wrapper: t } = { ...(0, o.R)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d();
   }
  },
  85248: (e, t, n) => {
   n.d(t, { R: () => i, x: () => c });
   var s = n(30758);
   const r = {},
    o = s.createContext(r);
   function i(e) {
    const t = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function c(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : i(e.components)), s.createElement(o.Provider, { value: t }, e.children);
   }
  },
 },
]);
