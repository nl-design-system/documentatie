'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [95121],
 {
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => o });
   var i = t(30758);
   const r = {},
    a = i.createContext(r);
   function s(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(a.Provider, { value: n }, e.children));
   }
  },
  43844(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => o, metadata: () => i, toc: () => p }));
   const i = JSON.parse('{"id":"project/kwaliteitsaanpak/sprint-review","title":"Sprint review","description":"Branch deployments van GitHub Pull Requests zijn de testomgevingen.","source":"@site/docs/project/kwaliteitsaanpak/sprint-review.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/sprint-review","permalink":"/project/kwaliteitsaanpak/sprint-review","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/sprint-review.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Sprint review","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Sprint review","sidebar_position":12,"pagination_label":"Sprint review","description":"Branch deployments van GitHub Pull Requests zijn de testomgevingen.","keywords":["dtap","otap","test"]},"sidebar":"project","previous":{"title":"Open Source","permalink":"/project/kwaliteitsaanpak/open-source"},"next":{"title":"Toegankelijkheid","permalink":"/project/kwaliteitsaanpak/toegankelijkheid"}}');
   var r = t(86070),
    a = t(18439),
    s = t(46447);
   const o = { title: 'Sprint review', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Sprint review', sidebar_position: 12, pagination_label: 'Sprint review', description: 'Branch deployments van GitHub Pull Requests zijn de testomgevingen.', keywords: ['dtap', 'otap', 'test'] },
    l = 'Sprint review',
    d = {},
    p = [{ value: 'Community', id: 'community', level: 2 }];
   function c(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'sprint-review', children: 'Sprint review' }) }), '\n', (0, r.jsx)(s.fz, { lead: !0, children: (0, r.jsx)(n.p, { children: 'Presenteer de ontwikkelingen aan de product owner en andere belangrijke stakeholders, aan het eind van elke agile\nsprint. Zorg dat de product owner het resultaat accepteert en je voldoet aan de acceptatiecriteria en de Definition of\nDone.' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Zet de status van een issue op de ', (0, r.jsx)(n.a, { href: '/project/kwaliteitsaanpak/product-backlog/', children: 'backlog' }), ' op "PO acceptance" wanneer je klaar bent. Deel in de GitHub Issue voldoende informatie om een review te doen, zoals instructies voor het testen of een video-opname.'] }), '\n', (0, r.jsxs)(n.p, { children: ['De product owner verandert de status van een issue van "PO acceptance" naar "Done", tenzij er nog meer werk nodig is in een volgende ', (0, r.jsx)(n.a, { href: '/project/kwaliteitsaanpak/agile-sprint/', children: 'sprint' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'community', children: 'Community' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/events/heartbeat/zelf-iets-vertellen/', children: 'Presenteer in de NL Design System Heartbeat' }), ' nieuwe ontwikkelingen die relevant zijn voor de Community, zodat de belangrijkste stakeholders daar op de hoogte zijn. Deel een opname van de presentatie, zodat niemand verplicht is om op een specifieke tijd aanwezig te zijn.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer het resultaat te vaktechnisch is om te presenteren voor een breed publiek, of je wilt in een interactieve sessie plannen maken voor doorontwikkeling, dan is de ', (0, r.jsx)(n.a, { href: '/events/developer-open-hour/', children: 'Developer Open Hour' }), ' of de ', (0, r.jsx)(n.a, { href: '/events/design-open-hour/', children: 'Design Open Hour' }), ' mogelijk een betere bijeenkomst om te presenteren.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
