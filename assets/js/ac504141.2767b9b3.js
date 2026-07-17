/*! For license information please see ac504141.2767b9b3.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [64256],
 {
  18439(e, n, r) {
   r.d(n, { R: () => l, x: () => s });
   var o = r(30758);
   const t = {},
    a = o.createContext(t);
   function l(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), o.createElement(a.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, r) {
   r.d(n, { A: () => a });
   var o = r(30758),
    t = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const a = (e, n, r, a) => {
    const l = (0, o.forwardRef)(({ color: r = 'currentColor', size: l = 24, stroke: s = 2, title: i, className: d, children: p, ...c }, u) => (0, o.createElement)('svg', { ref: u, ...t[e], width: l, height: l, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: r } : { strokeWidth: s, stroke: r }), ...c }, [i && (0, o.createElement)('title', { key: 'svg-title' }, i), ...a.map(([e, n]) => (0, o.createElement)(e, n)), ...(Array.isArray(p) ? p : [p])]));
    return ((l.displayName = `${r}`), l);
   };
  },
  27843(e, n, r) {
   r.d(n, { v: () => s });
   var o = r(53538),
    t = r(13526),
    a = r(86070);
   const l = ({ className: e, children: n, purpose: r, iconStart: o, iconEnd: l, href: s }) => (0, a.jsxs)('a', { className: (0, t.A)('nl-button', e, { 'nl-button--primary': 'primary' === r, 'nl-button--secondary': 'secondary' === r, 'nl-button--subtle': 'subtle' === r }), href: s, children: [o && (0, a.jsx)('span', { className: 'nl-button__icon-start', children: o }), (0, a.jsx)('span', { className: 'nl-button__label', children: n }), l && (0, a.jsx)('span', { className: 'nl-button__icon-end', children: l })] }),
    s = globalThis.isAstro
     ? ({ appearance: e, href: n, ...r }) => {
        let o = 'primary';
        return ((o = 'secondary-action' === e ? 'secondary' : o), (0, a.jsx)(l, { purpose: o, href: n, ...r }));
       }
     : ({ appearance: e, ...n }) => (0, a.jsx)(o.F, { className: (0, t.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  53538(e, n, r) {
   r.d(n, { F: () => l, N: () => s });
   var o = r(13526),
    t = r(76097),
    a = r(86070);
   const l = ({ children: e, ...n }) => {
     const { to: r, href: o, ...l } = n;
     let s = r || o;
     const i = new URL(s, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === i.origin ? (i.pathname.endsWith('/') || (0, t.QQ)(i.pathname) || (i.pathname = `${i.pathname}/`), (s = i.toString().replace('https://nldesignsystem.nl', ''))) : ((l.target = '_blank'), (l.rel = 'noopener noreferrer')), (0, a.jsx)('a', { href: s, ...l, children: e }));
    },
    s = ({ className: e, ...n }) => (0, a.jsx)(l, { className: (0, o.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  64249(e, n, r) {
   r.d(n, { A: () => o });
   const o = (0, r(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  76097(e, n, r) {
   r.d(n, { bo: () => t, KF: () => u, mJ: () => v, VZ: () => x, cR: () => w, Pv: () => g, qZ: () => l, kD: () => f, QQ: () => y, B2: () => m, Pc: () => i, f4: () => s, GT: () => D, fX: () => a, eQ: () => b, B_: () => k, o_: () => j });
   const o = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    t = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    a = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    l = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    i = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
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
     return c(p(e.tasks.filter(({ name: e, value: r }) => '' !== r && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    v = (e) => c(p(e.projects.flatMap((e) => h(e)))),
    g = (e) => {
     const n = h(e),
      r = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const o = e.tasks
       .filter(({ name: e, value: r }) => '' !== r && e.includes(n))
       .map(({ name: o, id: t, value: a }) => {
        const l = /^(.+) URL/.exec(o)[1],
         s = 'Storybook' === l ? `${r} (${n}) in Storybook van ${e.title}` : `${r} (${n}) op ${l}`;
        return { brand: l.toLowerCase(), name: o, id: t, value: a, description: s };
       });
      return { frameworkName: n, tasks: o };
     });
    },
    j = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((r) => ('object' == typeof e[r] && null !== e[r] ? f(e[r], [...n, r]) : []));
   }
   function D(e) {
    const n = new Map();
    function r(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || r(e).localeCompare(r(n)));
   }
   const w = () => {
     const e = o.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    x = () => {
     const e = o.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    A = new Set(['ics', 'json', 'pdf']),
    y = (e) => {
     const n = e.split('/').pop() ?? '',
      r = n.split('.').pop()?.toLowerCase();
     return void 0 !== r && A.has(r);
    };
  },
  79384(e, n, r) {
   (r.r(n), r.d(n, { assets: () => c, contentTitle: () => p, default: () => h, frontMatter: () => d, metadata: () => o, toc: () => u }));
   const o = JSON.parse('{"id":"community/events/developer-open-hour/index","title":"Developer Open Hour","description":"Tijdens Developer Open Hour kun je laagdrempelig vragen over development in de NL Design System community bespreken. Hier meld je je aan en zie je de planning.","source":"@site/docs/community/events/developer-open-hour/index.mdx","sourceDirName":"community/events/developer-open-hour","slug":"/events/developer-open-hour","permalink":"/events/developer-open-hour","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/developer-open-hour/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Developer Open Hour","hide_title":true,"hide_table_of_contents":false,"navigation_order":3,"sidebar_label":"Developer Open Hour","pagination_label":"In de Developer Open Hour wisselen developers informatie, inzichten en tips met elkaar uit.","description":"Tijdens Developer Open Hour kun je laagdrempelig vragen over development in de NL Design System community bespreken. Hier meld je je aan en zie je de planning.","slug":"/events/developer-open-hour"},"sidebar":"community","previous":{"title":"Developer Open Hour","permalink":"/events/developer-open-hour"},"next":{"title":"Aanmelden","permalink":"/events/developer-open-hour/aanmelden"}}');
   var t = r(86070),
    a = r(18439),
    l = r(27843),
    s = r(64249),
    i = r(46447);
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
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'developer-open-hour', children: 'Developer Open Hour' }) }), '\n', (0, t.jsx)(n.h2, { id: 'over-de-developer-open-hour', children: 'Over de Developer Open Hour' }), '\n', (0, t.jsx)(n.p, { children: 'Voor developers is er elke donderdag een Developer Open Hour. Op even weken is dit op 11:00 uur, op oneven weken om 13:00 uur.' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Heb je support nodig? Dit is het ideale moment om hulp te krijgen!' }), '\n', (0, t.jsx)(n.li, { children: 'Wil je een handige techniek laten zien die je voor NL Design System gebruikt? Deel je idee voor een demo hier.' }), '\n', (0, t.jsx)(n.li, { children: 'Ben je benieuwd of jouw ontwikkelingen handig zijn voor andere developers? Vraag het hier!' }), '\n', (0, t.jsx)(n.li, { children: 'Elk onderwerp kunnen we een aantal minuten bespreken, daarna kunnen we een vervolg plannen met de benodigde mensen.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'We raden je aan om jouw onderwerp voor de agenda in de thread van het chatbericht in #nl-design-system-developers te delen, om alvast interesse te wekken!' }), '\n', (0, t.jsxs)(n.p, { children: ['Anders dan de ', (0, t.jsx)(n.a, { href: '/events/heartbeat/', children: 'Heartbeat' }), ', worden Developer Open Hours niet opgenomen.'] }), '\n', (0, t.jsx)(n.h2, { id: 'ben-je-erbij', children: 'Ben je erbij?' }), '\n', (0, t.jsx)(n.p, { children: 'Iedereen kan aansluiten! Wekelijks, of incidenteel, wanneer je vragen hebt of iets wilt bespreken.' }), '\n', (0, t.jsxs)(n.p, { children: ['De Developer Open Hour vindt plaats op ', (0, t.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, t.jsx)(n.code, { children: '#nl-design-system-developers' }), '. We gebruiken de Huddle-functie van dat kanaal om elkaar te spreken.'] }), '\n', (0, t.jsx)(n.p, { children: 'Door je aan te melden kunnen wij je op de hoogte houden van Developer Open Hours. Je ontvangt dan ook direct een kalenderbestandje, zodat je de Developer Open Hour makkelijk aan je agenda kan toevoegen.' }), '\n', (0, t.jsxs)(i.e2, { children: [(0, t.jsxs)(l.v, { href: '/events/developer-open-hour/aanmelden', appearance: 'primary-action', children: ['Meld je aan', (0, t.jsx)(s.A, {})] }), (0, t.jsxs)(l.v, { href: '/slack/', appearance: 'secondary-action', children: ['Doe mee op Slack', (0, t.jsx)(s.A, {})] })] }), '\n', (0, t.jsx)(n.h2, { id: 'vragen-of-idee\xebn', children: 'Vragen of idee\xebn' }), '\n', (0, t.jsxs)(n.p, { children: ['Heb je vragen of idee\xebn voor de Developer Open Hour? Stuur ons dan een mailtje op ', (0, t.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
 },
]);
