'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25261],
 {
  18439(e, n, t) {
   t.d(n, { R: () => d, x: () => a });
   var s = t(30758);
   const o = {},
    i = s.createContext(o);
   function d(e) {
    const n = s.useContext(i);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : d(e.components)), s.createElement(i.Provider, { value: n }, e.children));
   }
  },
  69861(e, n, t) {
   (t.r(n), t.d(n, { assets: () => r, contentTitle: () => a, default: () => c, frontMatter: () => d, metadata: () => s, toc: () => m }));
   const s = JSON.parse('{"id":"community/events/design-systems-week/aanmelden-bedankt","title":"Bedankt voor je aanmelding voor de Design Systems Week","description":"Design Systems Week 2026 is van 26 tot en met 29 oktober. We zijn nu druk bezig met de planning en voorbereiding, we houden je op de hoogte!","source":"@site/docs/community/events/design-systems-week/aanmelden-bedankt.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week/aanmelden/bedankt","permalink":"/events/design-systems-week/aanmelden/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/aanmelden-bedankt.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding voor de Design Systems Week","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Aanmelden","pagination_label":"Meld je aan voor Design Systems Week","slug":"/events/design-systems-week/aanmelden/bedankt","unlisted":true,"displayed_sidebar":"community"},"sidebar":"community"}');
   var o = t(86070),
    i = t(18439);
   const d = { title: 'Bedankt voor je aanmelding voor de Design Systems Week', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Aanmelden', pagination_label: 'Meld je aan voor Design Systems Week', slug: '/events/design-systems-week/aanmelden/bedankt', unlisted: !0, displayed_sidebar: 'community' },
    a = 'Bedankt voor je aanmelding voor de Design Systems Week.',
    r = {},
    m = [];
   function l(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'bedankt-voor-je-aanmelding-voor-de-design-systems-week', children: 'Bedankt voor je aanmelding voor de Design Systems Week.' }) }), '\n', (0, o.jsx)(n.p, { children: 'Design Systems Week 2026 is van 26 tot en met 29 oktober. We zijn nu druk bezig met de planning en voorbereiding, we houden je op de hoogte!' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
