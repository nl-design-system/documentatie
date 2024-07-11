'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2850],
 {
  74819: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => p, contentTitle: () => l, default: () => u, frontMatter: () => i, metadata: () => s, toc: () => a });
   var r = o(52676),
    t = o(24785);
   const i = { title: 'Developer Open Hour', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Developer Open Hour', pagination_label: 'In het Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', description: 'Wat is Developer Open Hour?', slug: '/events/developer-open-hour' },
    l = 'Developer Open Hour',
    s = { id: 'community/events/developer-open-hour/developer-open-hour', title: 'Developer Open Hour', description: 'Wat is Developer Open Hour?', source: '@site/docs/community/events/developer-open-hour/developer-open-hour.mdx', sourceDirName: 'community/events/developer-open-hour', slug: '/events/developer-open-hour', permalink: '/events/developer-open-hour', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/developer-open-hour.mdx', tags: [], version: 'current', frontMatter: { title: 'Developer Open Hour', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Developer Open Hour', pagination_label: 'In het Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', description: 'Wat is Developer Open Hour?', slug: '/events/developer-open-hour' }, sidebar: 'community', previous: { title: 'Developer Open Hour', permalink: '/events/developer-open-hour/overzicht' }, next: { title: 'In het Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', permalink: '/events/developer-open-hour/aanmelden' } },
    p = {},
    a = [
     { value: 'Over het Developer Open Hour', id: 'over-het-developer-open-hour', level: 2 },
     { value: 'Ben je erbij?', id: 'ben-je-erbij', level: 2 },
     { value: 'Op de hoogte blijven', id: 'op-de-hoogte-blijven', level: 2 },
     { value: 'Vragen of idee\xebn', id: 'vragen-of-idee\xebn', level: 2 },
    ];
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'developer-open-hour', children: 'Developer Open Hour' }), '\n', (0, r.jsx)(n.h2, { id: 'over-het-developer-open-hour', children: 'Over het Developer Open Hour' }), '\n', (0, r.jsx)(n.p, { children: 'Voor developers is er elke donderdag een Developer Open Hour. Op even weken is dit op 11:00 uur, op oneven weken om 13:00 uur.' }), '\n', (0, r.jsx)(n.p, { children: 'In principe is er vooraf geen agenda. Deze stellen we aan het begin gezamenlijk op. Iedereen kan iets inbrengen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Anders dan de ', (0, r.jsx)(n.a, { href: '../heartbeat/heartbeat', children: 'Heartbeat' }), ', worden Developer Open Hours niet opgenomen.'] }), '\n', (0, r.jsx)(n.h2, { id: 'ben-je-erbij', children: 'Ben je erbij?' }), '\n', (0, r.jsx)(n.p, { children: 'Iedereen kan aansluiten! Wekelijks, of incidenteel, wanneer je vragen hebt of iets wilt bespreken.' }), '\n', (0, r.jsxs)(n.p, { children: ['Het Developer Open Hour vindt plaats in het ', (0, r.jsx)(n.code, { children: '#nl-design-system-developers' }), '-kanaal op de Slack van Code for NL. We gebruiken de Huddle-functie van dat kanaal om elkaar te spreken.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Nog geen account in de Code for NL Slack? ', (0, r.jsx)(n.a, { href: 'https://praatmee.codefor.nl/', children: 'Meld je aan' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'op-de-hoogte-blijven', children: 'Op de hoogte blijven' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/events/developer-open-hour/aanmelden', children: 'Laat je gegevens achter' }), ' om op de hoogte te blijven van Developer Open Hours.'] }), '\n', (0, r.jsx)(n.h2, { id: 'vragen-of-idee\xebn', children: 'Vragen of idee\xebn' }), '\n', (0, r.jsxs)(n.p, { children: ['Heb je vragen of idee\xebn voor het Developer Open Hour? Stuur ons dan een mailtje op ', (0, r.jsx)('a', { href: 'mailto:kernteam@nldesignsystem.nl', children: (0, r.jsx)(n.a, { href: 'mailto:kernteam@nldesignsystem.nl', children: 'kernteam@nldesignsystem.nl' }) })] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, o) => {
   o.d(n, { Z: () => s, a: () => l });
   var r = o(75271);
   const t = {},
    i = r.createContext(t);
   function l(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
