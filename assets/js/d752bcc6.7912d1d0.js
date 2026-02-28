'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [41407],
 {
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => l });
   var i = t(30758);
   const s = {},
    r = i.createContext(s);
   function o(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), i.createElement(r.Provider, { value: n }, e.children));
   }
  },
  48213(e, n, t) {
   (t.r(n), t.d(n, { assets: () => a, contentTitle: () => c, default: () => j, frontMatter: () => l, metadata: () => i, toc: () => d }));
   const i = JSON.parse('{"id":"project/schrijfwijzer/engels","title":"Engels","description":"Richtlijnen voor Engelstalige communicatie vanuit het project NL Design System.","source":"@site/docs/project/schrijfwijzer/engels.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/engels","permalink":"/project/schrijfwijzer/engels","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/engels.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Engels","hide_title":true,"sidebar_label":"Engels","sidebar_position":6,"pagination_label":"Engels","description":"Richtlijnen voor Engelstalige communicatie vanuit het project NL Design System.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Nederlands","permalink":"/project/schrijfwijzer/nederlands"},"next":{"title":"Beslissingen voor schrijfwijze","permalink":"/project/schrijfwijzer/beslissingen"}}');
   var s = t(86070),
    r = t(18439),
    o = t(46447);
   const l = { title: 'Engels', hide_title: !0, sidebar_label: 'Engels', sidebar_position: 6, pagination_label: 'Engels', description: 'Richtlijnen voor Engelstalige communicatie vanuit het project NL Design System.', keywords: ['kernteam'] },
    c = 'Richtlijnen voor Engelse teksten',
    a = {},
    d = [
     { value: 'Consistent met API&#39;s', id: 'consistent-met-apis', level: 2 },
     { value: 'Telefoonnummers', id: 'telefoonnummers', level: 2 },
    ];
   function h(e) {
    const n = { h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'richtlijnen-voor-engelse-teksten', children: 'Richtlijnen voor Engelse teksten' }) }), '\n', (0, s.jsx)(o.fz, { lead: !0, children: (0, s.jsx)(n.p, { children: "Sommige pagina's op de website zijn Engelstalig, omdat ze bedoeld zijn voor een internationaal publiek. Veel\nsoftwaredocumentatie is ook alleen in het Engels beschikbaar, vanwege de Standard for Public Code." }) }), '\n', (0, s.jsx)(n.h2, { id: 'consistent-met-apis', children: "Consistent met API's" }), '\n', (0, s.jsx)(n.p, { children: 'Schrijf teksten in Amerikaans-Engels, zodat de teksten consistent zijn met code van het design system. Bijvoorbeeld: "color" in plaats van "colour".' }), '\n', (0, s.jsx)(n.h2, { id: 'telefoonnummers', children: 'Telefoonnummers' }), '\n', (0, s.jsx)(n.p, { children: 'Gebruik de internationale notatie voor telefoonnummers in Engelse teksten, zodat ze ook werken buiten Nederland.' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: '+31 234 56 78 90' }), '\n', (0, s.jsx)(n.li, { children: '+31 20 623 45 67' }), '\n', (0, s.jsx)(n.li, { children: '+31 6 53 45 67 89' }), '\n'] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
