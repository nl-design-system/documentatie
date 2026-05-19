'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84141],
 {
  18439(e, n, o) {
   o.d(n, { R: () => s, x: () => a });
   var i = o(30758);
   const r = {},
    t = i.createContext(r);
   function s(e) {
    const n = i.useContext(t);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(t.Provider, { value: n }, e.children));
   }
  },
  85684(e, n, o) {
   (o.r(n), o.d(n, { assets: () => v, contentTitle: () => a, default: () => l, frontMatter: () => s, metadata: () => i, toc: () => d }));
   const i = JSON.parse('{"id":"handboek/developer/conventies/versionering/index","title":"Aanpak voor versionering","description":"Aanpak voor versionering van NL Design System","source":"@site/docs/handboek/developer/03-conventies/06-versionering/index.mdx","sourceDirName":"handboek/developer/03-conventies/06-versionering","slug":"/handboek/developer/conventies/versionering","permalink":"/handboek/developer/conventies/versionering","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/03-conventies/06-versionering/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Aanpak voor versionering","title_sm":"Versionering conventie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanpak voor versionering","pagination_label":"Aanpak voor versionering","description":"Aanpak voor versionering van NL Design System","slug":"/handboek/developer/conventies/versionering"},"sidebar":"handboek","previous":{"title":"Namen van states","permalink":"/handboek/developer/state-conventie/"},"next":{"title":"Semantic Versioning","permalink":"/handboek/developer/semver-conventie/"}}');
   var r = o(86070),
    t = o(18439);
   const s = { title: 'Aanpak voor versionering', title_sm: 'Versionering conventie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanpak voor versionering', pagination_label: 'Aanpak voor versionering', description: 'Aanpak voor versionering van NL Design System', slug: '/handboek/developer/conventies/versionering' },
    a = 'Aanpak voor versionering van NL Design System',
    v = {},
    d = [];
   function c(e) {
    const n = { h1: 'h1', header: 'header', ...(0, t.R)(), ...e.components },
     { OverviewPage: o } = n;
    return (
     o ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanpak-voor-versionering-van-nl-design-system', children: 'Aanpak voor versionering van NL Design System' }) }), '\n', (0, r.jsx)(o, { excludeDocIDs: ['handboek/developer/conventies/versionering/index'] })] })
    );
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
