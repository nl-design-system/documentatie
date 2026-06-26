/*! For license information please see 4d034005.bb5d1b5b.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [26733],
 {
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => a });
   var i = t(30758);
   const r = {},
    s = i.createContext(r);
   function o(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, t) {
   t.d(n, { A: () => s });
   var i = t(30758),
    r = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const s = (e, n, t, s) => {
    const o = (0, i.forwardRef)(({ color: t = 'currentColor', size: o = 24, stroke: a = 2, title: l, className: d, children: c, ...p }, g) => (0, i.createElement)('svg', { ref: g, ...r[e], width: o, height: o, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: a, stroke: t }), ...p }, [l && (0, i.createElement)('title', { key: 'svg-title' }, l), ...s.map(([e, n]) => (0, i.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((o.displayName = `${t}`), o);
   };
  },
  20698(e, n, t) {
   t.d(n, { v: () => o });
   var i = t(53538),
    r = t(13526),
    s = t(86070);
   const o = ({ appearance: e, ...n }) => (0, s.jsx)(i.F, { className: (0, r.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  28330(e, n, t) {
   (t.r(n), t.d(n, { assets: () => p, contentTitle: () => c, default: () => u, frontMatter: () => d, metadata: () => i, toc: () => g }));
   const i = JSON.parse('{"id":"community/events/design-open-hour/index","title":"Design Open Hour","description":"Wat is Design Open Hour, hoe meld ik mij aan, en op welke momenten is het?","source":"@site/docs/community/events/design-open-hour/index.mdx","sourceDirName":"community/events/design-open-hour","slug":"/events/design-open-hour","permalink":"/events/design-open-hour","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-open-hour/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Design Open Hour","hide_title":true,"hide_table_of_contents":false,"navigation_order":2,"sidebar_label":"Design Open Hour","pagination_label":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","description":"Wat is Design Open Hour, hoe meld ik mij aan, en op welke momenten is het?","slug":"/events/design-open-hour"},"sidebar":"community","previous":{"title":"Design Open Hour","permalink":"/events/design-open-hour"},"next":{"title":"In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.","permalink":"/events/design-open-hour/aanmelden"}}');
   var r = t(86070),
    s = t(18439),
    o = t(20698),
    a = t(64249),
    l = t(46447);
   const d = { title: 'Design Open Hour', hide_title: !0, hide_table_of_contents: !1, navigation_order: 2, sidebar_label: 'Design Open Hour', pagination_label: 'In de Design Open Hour wisselen designers informatie, inzichten en tips met elkaar uit.', description: 'Wat is Design Open Hour, hoe meld ik mij aan, en op welke momenten is het?', slug: '/events/design-open-hour' },
    c = 'Design Open Hour',
    p = {},
    g = [
     { value: 'Over de Design Open Hour', id: 'over-de-design-open-hour', level: 2 },
     { value: 'Ervaringen', id: 'ervaringen', level: 2 },
     { value: 'Ben je erbij?', id: 'ben-je-erbij', level: 2 },
     { value: 'Vragen of idee\xebn', id: 'vragen-of-idee\xebn', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', blockquote: 'blockquote', code: 'code', h1: 'h1', h2: 'h2', header: 'header', img: 'img', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'design-open-hour', children: 'Design Open Hour' }) }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-open-hour.jpg', alt: 'Screenshot van een online meeting met verschillende aanwezigen vanuit de community.' }) }), '\n', (0, r.jsx)(n.h2, { id: 'over-de-design-open-hour', children: 'Over de Design Open Hour' }), '\n', (0, r.jsx)(n.p, { children: 'Wees welkom bij het 2-wekelijkse (online) \u2018Design Open Hour\u2019. Een moment om kennis te delen door design gerelateerde vraagstukken met elkaar te bespreken. Maar ook het delen van work-in-progress, tips of interessante inzichten uit gebruikersonderzoek wordt gewaardeerd!' }), '\n', (0, r.jsxs)(n.p, { children: ['Iedereen kan onderwerpen inbrengen. Er is vooraf geen vaste agenda. Die stellen we samen op aan het begin van de Design Open Hour. Maar wil je alvast iets inbrengen of je voorbereiden? Bekijk of vul dan de ', (0, r.jsx)(n.a, { href: 'https://codefornl.slack.com/docs/T68FXPFQV/F07AVE99NU9', children: 'agenda in Slack' }), ' aan.'] }), '\n', (0, r.jsx)(n.p, { children: 'Soms staat de Design Open Hour in het teken van 1 bepaald onderwerp. Zo is er tijdens eerdere edities feedback opgehaald rondom formulier patronen en gehele flows. Dit is altijd super waardevol maar vergt ook iets meer voorbereiding.' }), '\n', (0, r.jsxs)(n.p, { children: ['Voel je niet verplicht om elke keer aan te sluiten. Kan je er een keer niet bij zijn? Geen probleem. Design Open Hours worden echter, in tegenstelling tot de ', (0, r.jsx)(n.a, { href: '/events/heartbeat/', children: 'Heartbeat' }), ', niet opgenomen dus terugkijken met een bak popcorn zit er niet in.'] }), '\n', (0, r.jsx)(l.e2, { children: (0, r.jsxs)(o.v, { href: '/events/design-open-hour/aanmelden/', appearance: 'primary-action', children: ['Meld je aan', (0, r.jsx)(a.A, {})] }) }), '\n', (0, r.jsx)(n.h2, { id: 'ervaringen', children: 'Ervaringen' }), '\n', (0, r.jsx)(n.p, { children: 'Benieuwd hoe andere designers de Design Open Hour ervaren?' }), '\n', (0, r.jsxs)(n.blockquote, { children: ['\n', (0, r.jsx)(n.p, { children: '"De Design Open Hour is een moment om je idee\xebn te spiegelen en te horen waar andere designers mee bezig zijn."' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Yasmine Hoekstra, designer bij Gemeente Rotterdam.' }), '\n', (0, r.jsxs)(n.blockquote, { children: ['\n', (0, r.jsx)(n.p, { children: '"De Design Open Hour van het NL Design System is \'The place to be\' om nieuwe designmogelijkheden te verkennen, kennis te delen en inspiratie op te doen in gezellig sessies, waar diverse designers interessante vraagstukken voorleggen en ervaringen delen."' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Esther Erken & Aline van Thoor, designers bij PRA-Project, ICTU.' }), '\n', (0, r.jsxs)(n.blockquote, { children: ['\n', (0, r.jsx)(n.p, { children: '"De Design Open Hour is een warm bad. Het is een ontzettend vriendelijke en constructieve groep collega ontwerpers die je willen helpen en met je mee willen denken. De kwaliteit van mijn werk is gewoon hoger doordat ik vragen kan voorleggen en de kennis en ervaring van de groep in kan zetten. Bovendien is het is fijn om even uit je eigen silo te kunnen stappen en organisatie overstijgend te zien dat we allemaal met dezelfde dingen bezig zijn. En daarvan te leren en op elkaars werk te kunnen voortbouwen."' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Nico Druif, designer bij Gemeente Amsterdam.' }), '\n', (0, r.jsx)(n.h2, { id: 'ben-je-erbij', children: 'Ben je erbij?' }), '\n', (0, r.jsx)(n.p, { children: 'Iedereen kan aansluiten!' }), '\n', (0, r.jsxs)(n.p, { children: ['De Design Open Hour vindt plaats op ', (0, r.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, r.jsx)(n.code, { children: '#nl-design-system-designers' }), '. We gebruiken de Huddle-functie van dat kanaal om elkaar te spreken.'] }), '\n', (0, r.jsx)(n.p, { children: 'Door je aan te melden kunnen wij je op de hoogte houden van Design Open Hours. Je ontvangt dan ook direct een kalenderbestandje, zodat je de Design Open Hour makkelijk aan je agenda kan toevoegen.' }), '\n', (0, r.jsxs)(l.e2, { children: [(0, r.jsxs)(o.v, { href: '/events/design-open-hour/aanmelden/', appearance: 'primary-action', children: ['Meld je aan', (0, r.jsx)(a.A, {})] }), (0, r.jsxs)(o.v, { href: '/slack/', appearance: 'secondary-action', children: ['Doe mee op Slack', (0, r.jsx)(a.A, {})] })] }), '\n', (0, r.jsx)(n.h2, { id: 'vragen-of-idee\xebn', children: 'Vragen of idee\xebn' }), '\n', (0, r.jsxs)(n.p, { children: ['Heb je vragen of idee\xebn voor de Design Open Hour? Stuur ons dan een mailtje op ', (0, r.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
  },
  53538(e, n, t) {
   t.d(n, { F: () => o, N: () => a });
   var i = t(13526),
    r = t(76097),
    s = t(86070);
   const o = ({ children: e, ...n }) => {
     const { to: t, href: i, ...o } = n;
     let a = t || i;
     const l = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, r.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (a = l.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, s.jsx)('a', { href: a, ...o, children: e }));
    },
    a = ({ className: e, ...n }) => (0, s.jsx)(o, { className: (0, i.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  64249(e, n, t) {
   t.d(n, { A: () => i });
   const i = (0, t(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  76097(e, n, t) {
   t.d(n, { bo: () => r, KF: () => g, mJ: () => h, VZ: () => x, cR: () => D, Pv: () => k, qZ: () => o, kD: () => f, QQ: () => A, B2: () => m, Pc: () => l, f4: () => a, GT: () => w, fX: () => s, eQ: () => b, B_: () => j, o_: () => v });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const p = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    g = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return p(c(n));
    },
    m = (e, n) => h(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return p(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => p(c(e.projects.flatMap((e) => u(e)))),
    k = (e) => {
     const n = u(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: r, value: s }) => {
        const o = /^(.+) URL/.exec(i)[1],
         a = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: i, id: r, value: s, description: a };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    v = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function w(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const D = () => {
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    x = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    O = new Set(['ics', 'json', 'pdf']),
    A = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && O.has(t);
    };
  },
 },
]);
