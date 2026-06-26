/*! For license information please see ac504141.139bc243.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [64256],
 {
  18439(e, n, o) {
   o.d(n, { R: () => i, x: () => l });
   var t = o(30758);
   const r = {},
    a = t.createContext(r);
   function i(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : i(e.components)), t.createElement(a.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, o) {
   o.d(n, { A: () => a });
   var t = o(30758),
    r = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const a = (e, n, o, a) => {
    const i = (0, t.forwardRef)(({ color: o = 'currentColor', size: i = 24, stroke: l = 2, title: s, className: d, children: p, ...c }, u) => (0, t.createElement)('svg', { ref: u, ...r[e], width: i, height: i, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: o } : { strokeWidth: l, stroke: o }), ...c }, [s && (0, t.createElement)('title', { key: 'svg-title' }, s), ...a.map(([e, n]) => (0, t.createElement)(e, n)), ...(Array.isArray(p) ? p : [p])]));
    return ((i.displayName = `${o}`), i);
   };
  },
  20698(e, n, o) {
   o.d(n, { v: () => i });
   var t = o(53538),
    r = o(13526),
    a = o(86070);
   const i = ({ appearance: e, ...n }) => (0, a.jsx)(t.F, { className: (0, r.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  53538(e, n, o) {
   o.d(n, { F: () => i, N: () => l });
   var t = o(13526),
    r = o(76097),
    a = o(86070);
   const i = ({ children: e, ...n }) => {
     const { to: o, href: t, ...i } = n;
     let l = o || t;
     const s = new URL(l, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === s.origin ? (s.pathname.endsWith('/') || (0, r.QQ)(s.pathname) || (s.pathname = `${s.pathname}/`), (l = s.toString().replace('https://nldesignsystem.nl', ''))) : ((i.target = '_blank'), (i.rel = 'noopener noreferrer')), (0, a.jsx)('a', { href: l, ...i, children: e }));
    },
    l = ({ className: e, ...n }) => (0, a.jsx)(i, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  64249(e, n, o) {
   o.d(n, { A: () => t });
   const t = (0, o(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  76097(e, n, o) {
   o.d(n, { bo: () => r, KF: () => u, mJ: () => v, VZ: () => x, cR: () => w, Pv: () => g, qZ: () => i, kD: () => b, QQ: () => O, B2: () => m, Pc: () => s, f4: () => l, GT: () => D, fX: () => a, eQ: () => f, B_: () => k, o_: () => j });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    a = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    s = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function p(e) {
    return Array.from(new Set(e));
   }
   const c = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return c(p(n));
    },
    m = (e, n) => v(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return c(p(e.tasks.filter(({ name: e, value: o }) => '' !== o && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    v = (e) => c(p(e.projects.flatMap((e) => h(e)))),
    g = (e) => {
     const n = h(e),
      o = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: o }) => '' !== o && e.includes(n))
       .map(({ name: t, id: r, value: a }) => {
        const i = /^(.+) URL/.exec(t)[1],
         l = 'Storybook' === i ? `${o} (${n}) in Storybook van ${e.title}` : `${o} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: t, id: r, value: a, description: l };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    j = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    f = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((o) => ('object' == typeof e[o] && null !== e[o] ? b(e[o], [...n, o]) : []));
   }
   function D(e) {
    const n = new Map();
    function o(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || o(e).localeCompare(o(n)));
   }
   const w = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    x = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    A = new Set(['ics', 'json', 'pdf']),
    O = (e) => {
     const n = e.split('/').pop() ?? '',
      o = n.split('.').pop()?.toLowerCase();
     return void 0 !== o && A.has(o);
    };
  },
  79384(e, n, o) {
   (o.r(n), o.d(n, { assets: () => c, contentTitle: () => p, default: () => h, frontMatter: () => d, metadata: () => t, toc: () => u }));
   const t = JSON.parse('{"id":"community/events/developer-open-hour/index","title":"Developer Open Hour","description":"Tijdens Developer Open Hour kun je laagdrempelig vragen over development in de NL Design System community bespreken. Hier meld je je aan en zie je de planning.","source":"@site/docs/community/events/developer-open-hour/index.mdx","sourceDirName":"community/events/developer-open-hour","slug":"/events/developer-open-hour","permalink":"/events/developer-open-hour","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Developer Open Hour","hide_title":true,"hide_table_of_contents":false,"navigation_order":3,"sidebar_label":"Developer Open Hour","pagination_label":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.","description":"Tijdens Developer Open Hour kun je laagdrempelig vragen over development in de NL Design System community bespreken. Hier meld je je aan en zie je de planning.","slug":"/events/developer-open-hour"},"sidebar":"community","previous":{"title":"Developer Open Hour","permalink":"/events/developer-open-hour"},"next":{"title":"Aanmelden","permalink":"/events/developer-open-hour/aanmelden"}}');
   var r = o(86070),
    a = o(18439),
    i = o(20698),
    l = o(64249),
    s = o(46447);
   const d = { title: 'Developer Open Hour', hide_title: !0, hide_table_of_contents: !1, navigation_order: 3, sidebar_label: 'Developer Open Hour', pagination_label: 'In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.', description: 'Tijdens Developer Open Hour kun je laagdrempelig vragen over development in de NL Design System community bespreken. Hier meld je je aan en zie je de planning.', slug: '/events/developer-open-hour' },
    p = 'Developer Open Hour',
    c = {},
    u = [
     { value: 'Over de Developer Open Hour', id: 'over-de-developer-open-hour', level: 2 },
     { value: 'Ben je erbij?', id: 'ben-je-erbij', level: 2 },
     { value: 'Vragen of idee\xebn', id: 'vragen-of-idee\xebn', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'developer-open-hour', children: 'Developer Open Hour' }) }), '\n', (0, r.jsx)(n.h2, { id: 'over-de-developer-open-hour', children: 'Over de Developer Open Hour' }), '\n', (0, r.jsx)(n.p, { children: 'Voor developers is er elke donderdag een Developer Open Hour. Op even weken is dit op 11:00 uur, op oneven weken om 13:00 uur.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Heb je support nodig? Dit is het ideale moment om hulp te krijgen!' }), '\n', (0, r.jsx)(n.li, { children: 'Wil je een handige techniek laten zien die je voor NL Design System gebruikt? Deel je idee voor een demo hier.' }), '\n', (0, r.jsx)(n.li, { children: 'Ben je benieuwd of jouw ontwikkelingen handig zijn voor andere developers? Vraag het hier!' }), '\n', (0, r.jsx)(n.li, { children: 'Elk onderwerp kunnen we een aantal minuten bespreken, daarna kunnen we een vervolg plannen met de benodigde mensen.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'We raden je aan om jouw onderwerp voor de agenda in de thread van het chatbericht in #nl-design-system-developers te delen, om alvast interesse te wekken!' }), '\n', (0, r.jsxs)(n.p, { children: ['Anders dan de ', (0, r.jsx)(n.a, { href: '/events/heartbeat/', children: 'Heartbeat' }), ', worden Developer Open Hours niet opgenomen.'] }), '\n', (0, r.jsx)(n.h2, { id: 'ben-je-erbij', children: 'Ben je erbij?' }), '\n', (0, r.jsx)(n.p, { children: 'Iedereen kan aansluiten! Wekelijks, of incidenteel, wanneer je vragen hebt of iets wilt bespreken.' }), '\n', (0, r.jsxs)(n.p, { children: ['De Developer Open Hour vindt plaats op ', (0, r.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, r.jsx)(n.code, { children: '#nl-design-system-developers' }), '. We gebruiken de Huddle-functie van dat kanaal om elkaar te spreken.'] }), '\n', (0, r.jsx)(n.p, { children: 'Door je aan te melden kunnen wij je op de hoogte houden van Developer Open Hours. Je ontvangt dan ook direct een kalenderbestandje, zodat je de Developer Open Hour makkelijk aan je agenda kan toevoegen.' }), '\n', (0, r.jsxs)(s.e2, { children: [(0, r.jsxs)(i.v, { href: '/events/developer-open-hour/aanmelden', appearance: 'primary-action', children: ['Meld je aan', (0, r.jsx)(l.A, {})] }), (0, r.jsxs)(i.v, { href: '/slack/', appearance: 'secondary-action', children: ['Doe mee op Slack', (0, r.jsx)(l.A, {})] })] }), '\n', (0, r.jsx)(n.h2, { id: 'vragen-of-idee\xebn', children: 'Vragen of idee\xebn' }), '\n', (0, r.jsxs)(n.p, { children: ['Heb je vragen of idee\xebn voor de Developer Open Hour? Stuur ons dan een mailtje op ', (0, r.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
  },
 },
]);
