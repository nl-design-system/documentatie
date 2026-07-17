/*! For license information please see f0196b31.aaadf721.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [93071],
 {
  18439(e, n, i) {
   i.d(n, { R: () => r, x: () => a });
   var s = i(30758);
   const t = {},
    o = s.createContext(t);
   function r(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, i) {
   i.d(n, { A: () => o });
   var s = i(30758),
    t = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const o = (e, n, i, o) => {
    const r = (0, s.forwardRef)(({ color: i = 'currentColor', size: r = 24, stroke: a = 2, title: l, className: d, children: u, ...c }, m) => (0, s.createElement)('svg', { ref: m, ...t[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: i } : { strokeWidth: a, stroke: i }), ...c }, [l && (0, s.createElement)('title', { key: 'svg-title' }, l), ...o.map(([e, n]) => (0, s.createElement)(e, n)), ...(Array.isArray(u) ? u : [u])]));
    return ((r.displayName = `${i}`), r);
   };
  },
  27843(e, n, i) {
   i.d(n, { v: () => a });
   var s = i(53538),
    t = i(13526),
    o = i(86070);
   const r = ({ className: e, children: n, purpose: i, iconStart: s, iconEnd: r, href: a }) => (0, o.jsxs)('a', { className: (0, t.A)('nl-button', e, { 'nl-button--primary': 'primary' === i, 'nl-button--secondary': 'secondary' === i, 'nl-button--subtle': 'subtle' === i }), href: a, children: [s && (0, o.jsx)('span', { className: 'nl-button__icon-start', children: s }), (0, o.jsx)('span', { className: 'nl-button__label', children: n }), r && (0, o.jsx)('span', { className: 'nl-button__icon-end', children: r })] }),
    a = globalThis.isAstro
     ? ({ appearance: e, href: n, ...i }) => {
        let s = 'primary';
        return ((s = 'secondary-action' === e ? 'secondary' : s), (0, o.jsx)(r, { purpose: s, href: n, ...i }));
       }
     : ({ appearance: e, ...n }) => (0, o.jsx)(s.F, { className: (0, t.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  53538(e, n, i) {
   i.d(n, { F: () => r, N: () => a });
   var s = i(13526),
    t = i(76097),
    o = i(86070);
   const r = ({ children: e, ...n }) => {
     const { to: i, href: s, ...r } = n;
     let a = i || s;
     const l = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, t.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (a = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, o.jsx)('a', { href: a, ...r, children: e }));
    },
    a = ({ className: e, ...n }) => (0, o.jsx)(r, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  64249(e, n, i) {
   i.d(n, { A: () => s });
   const s = (0, i(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  76097(e, n, i) {
   i.d(n, { bo: () => t, KF: () => m, mJ: () => p, VZ: () => x, cR: () => w, Pv: () => k, qZ: () => r, kD: () => y, QQ: () => O, B2: () => h, Pc: () => l, f4: () => a, GT: () => f, fX: () => o, eQ: () => b, B_: () => v, o_: () => g });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    t = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function u(e) {
    return Array.from(new Set(e));
   }
   const c = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => j(e));
     return c(u(n));
    },
    h = (e, n) => p(e).includes(n),
    j = (e) => {
     const n = / URL \(([^)]+)\)/;
     return c(u(e.tasks.filter(({ name: e, value: i }) => '' !== i && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => c(u(e.projects.flatMap((e) => j(e)))),
    k = (e) => {
     const n = j(e),
      i = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const s = e.tasks
       .filter(({ name: e, value: i }) => '' !== i && e.includes(n))
       .map(({ name: s, id: t, value: o }) => {
        const r = /^(.+) URL/.exec(s)[1],
         a = 'Storybook' === r ? `${i} (${n}) in Storybook van ${e.title}` : `${i} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: s, id: t, value: o, description: a };
       });
      return { frameworkName: n, tasks: s };
     });
    },
    g = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function y(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((i) => ('object' == typeof e[i] && null !== e[i] ? y(e[i], [...n, i]) : []));
   }
   function f(e) {
    const n = new Map();
    function i(e) {
     return (n.has(e) || n.set(e, g(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || i(e).localeCompare(i(n)));
   }
   const w = () => {
     const e = s.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    x = () => {
     const e = s.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    C = new Set(['ics', 'json', 'pdf']),
    O = (e) => {
     const n = e.split('/').pop() ?? '',
      i = n.split('.').pop()?.toLowerCase();
     return void 0 !== i && C.has(i);
    };
  },
  94034(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => u, default: () => j, frontMatter: () => d, metadata: () => s, toc: () => m }));
   const s = JSON.parse('{"id":"community/events/rijkshuisstijl-community-open-hour","title":"Rijkshuisstijl Community Open Hour","description":"Tijdens de Rijkshuisstijl Community Open Hour wisselen verschillende organisaties informatie, inzichten en tips uit over de Rijkshuisstijl. Lees hier hoe je mee kunt doen en wanneer het plaatsvindt.","source":"@site/docs/community/events/rijkshuisstijl-community-open-hour.mdx","sourceDirName":"community/events","slug":"/events/rijkshuisstijl-community-open-hour","permalink":"/events/rijkshuisstijl-community-open-hour","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/rijkshuisstijl-community-open-hour.mdx","tags":[],"version":"current","frontMatter":{"title":"Rijkshuisstijl Community Open Hour","hide_title":true,"hide_table_of_contents":false,"navigation_order":5,"sidebar_label":"Rijkshuisstijl Community Open Hour","pagination_label":"Tijdens de Rijkshuisstijl Community Open Hour wisselen verschillende organisaties informatie, inzichten en tips uit over de Rijkshuisstijl.","description":"Tijdens de Rijkshuisstijl Community Open Hour wisselen verschillende organisaties informatie, inzichten en tips uit over de Rijkshuisstijl. Lees hier hoe je mee kunt doen en wanneer het plaatsvindt.","slug":"/events/rijkshuisstijl-community-open-hour"},"sidebar":"community","previous":{"title":"Tijdens de MijnServices Check-in delen we inzichten, idee\xebn en voortgang rond de doorontwikkeling van NL Design System-componenten die binnen MijnOmgevingen worden gebruikt.","permalink":"/events/mijn-services-check-in"},"next":{"title":"Design Open Dag","permalink":"/events/design-open-dag"}}');
   var t = i(86070),
    o = i(18439),
    r = i(27843),
    a = i(64249),
    l = i(46447);
   const d = { title: 'Rijkshuisstijl Community Open Hour', hide_title: !0, hide_table_of_contents: !1, navigation_order: 5, sidebar_label: 'Rijkshuisstijl Community Open Hour', pagination_label: 'Tijdens de Rijkshuisstijl Community Open Hour wisselen verschillende organisaties informatie, inzichten en tips uit over de Rijkshuisstijl.', description: 'Tijdens de Rijkshuisstijl Community Open Hour wisselen verschillende organisaties informatie, inzichten en tips uit over de Rijkshuisstijl. Lees hier hoe je mee kunt doen en wanneer het plaatsvindt.', slug: '/events/rijkshuisstijl-community-open-hour' },
    u = 'Rijkshuisstijl Community Open Hour',
    c = {},
    m = [
     { value: 'Wat doen we?', id: 'wat-doen-we', level: 2 },
     { value: 'Ben je erbij?', id: 'ben-je-erbij', level: 2 },
     { value: 'Over de Rijkshuisstijl Community', id: 'over-de-rijkshuisstijl-community', level: 2 },
     { value: 'Vragen of idee\xebn?', id: 'vragen-of-idee\xebn', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'rijkshuisstijl-community-open-hour', children: 'Rijkshuisstijl Community Open Hour' }) }), '\n', (0, t.jsx)(n.p, { children: 'Tijdens de Rijkshuisstijl Community Open Hour delen verschillende organisaties hun kennis, inzichten en ervaringen rond de Rijkshuisstijl. We bespreken vraagstukken, geven feedback en laten werk in ontwikkeling zien. Iedereen kan iets inbrengen of meedoen aan het gesprek.' }), '\n', (0, t.jsx)(n.h2, { id: 'wat-doen-we', children: 'Wat doen we?' }), '\n', (0, t.jsx)(n.p, { children: 'De Rijkshuisstijl Community Open Hour is een moment om kennis te delen en samen vraagstukken rond de Rijkshuisstijl te bespreken. Ook het delen van work-in-progress, tips of inzichten uit gebruikersonderzoek wordt gewaardeerd!' }), '\n', (0, t.jsxs)(n.p, { children: ['Iedereen kan onderwerpen inbrengen. Er is vooraf geen vaste agenda. Die stellen we samen op aan het begin van de Rijkshuisstijl Community Open Hour. Maar wil je alvast iets inbrengen of je voorbereiden? Bekijk of vul dan de ', (0, t.jsx)(n.a, { href: 'https://codefornl.slack.com/docs/T68FXPFQV/F08UP7ZBR8Q', children: 'agenda in Slack' }), ' aan.'] }), '\n', (0, t.jsx)(n.p, { children: 'Soms staat de Open Hour in het teken van \xe9\xe9n specifiek onderwerp. Denk bijvoorbeeld aan het ophalen van feedback over bepaalde stylingkeuzes. Dit is altijd erg waardevol, maar vraagt soms iets meer voorbereiding.' }), '\n', (0, t.jsxs)(n.p, { children: ['Voel je niet verplicht om elke keer aan te sluiten. Kan je er een keer niet bij zijn? Geen probleem. Rijkshuisstijl Community Open Hours worden echter, in tegenstelling tot de ', (0, t.jsx)(n.a, { href: '/events/heartbeat/', children: 'Heartbeat' }), ', niet opgenomen. Dus terugkijken met een bak popcorn zit er niet in. De samenvattingen van de sessies worden gedeeld in de ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions/categories/rijkshuisstijl-community-open-hour', children: 'Rijkshuisstijl Community Open Hour op GitHub' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Vaak word aan de hand van de Open Hour verder gewerkt in de ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community/discussions/categories/rijkshuisstijl-2025-interpretatie', children: 'GitHub Discussions rondom de Rijkshuisstijl 2025 styling keuzes' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'ben-je-erbij', children: 'Ben je erbij?' }), '\n', (0, t.jsx)(n.p, { children: 'Iedereen kan aansluiten! Regelmatig of af en toe, wanneer je vragen hebt of iets wilt bespreken.' }), '\n', (0, t.jsxs)(n.p, { children: ['De Rijkshuisstijl Community Open Hour vindt plaats in de oneven weken, iedere dinsdag om 16:00 uur, op ', (0, t.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, t.jsx)(n.code, { children: '#rijkshuisstijl-community' }), '. We gebruiken de Huddle-functie van dat kanaal om elkaar te spreken. In dat kanaal vind je ook de threads van eerdere sessies.'] }), '\n', (0, t.jsx)(n.p, { children: 'Door je aan te melden voor de Rijkshuisstijl Community kunnen wij je op de hoogte houden van bijeenkomsten zoals de Rijkshuisstijl Community Open Hours. Je ontvangt dan ook direct een kalenderbestandje, zodat je de Rijkshuisstijl Community Open Hour makkelijk aan je agenda kan toevoegen.' }), '\n', (0, t.jsxs)(l.e2, { children: [(0, t.jsxs)(r.v, { href: '/community/community-sprints/rijkshuisstijl-community/aanmelden', appearance: 'primary-action', children: ['Meld je aan', (0, t.jsx)(a.A, {})] }), (0, t.jsxs)(r.v, { href: '/slack/', appearance: 'secondary-action', children: ['Doe mee op Slack', (0, t.jsx)(a.A, {})] })] }), '\n', (0, t.jsx)(n.h2, { id: 'over-de-rijkshuisstijl-community', children: 'Over de Rijkshuisstijl Community' }), '\n', (0, t.jsx)(n.p, { children: 'De Rijkshuisstijl Community Open Hour is een onderdeel van de Rijkshuisstijl Community. De Rijkshuisstijl Community is een Open Source project waaraan iedereen kan bijdragen ongeacht de organisatie waarvoor je werkt. De Rijkshuisstijl Community Sprint maakt deel uit van een samenwerkingsverband om NL Design System-componenten te ontwikkelen voor projecten die moeten voldoen aan de Rijkshuisstijl.' }), '\n', (0, t.jsx)(n.p, { children: 'Organisaties van de centrale overheid van Nederland (bijvoorbeeld: Belastingdienst, DUO, Logius, SVB) en degenen die door hen zijn ingehuurd voor het ontwikkelen van websites en apps, kunnen via dit project samenwerken.' }), '\n', (0, t.jsx)(l.e2, { children: (0, t.jsxs)(r.v, { href: '/community/community-sprints/rijkshuisstijl-community', appearance: 'primary-action', children: ['Lees meer over de Rijkshuisstijl Community', (0, t.jsx)(a.A, {})] }) }), '\n', (0, t.jsx)(n.h2, { id: 'vragen-of-idee\xebn', children: 'Vragen of idee\xebn?' }), '\n', (0, t.jsxs)(n.p, { children: ['Heb je vragen of idee\xebn voor de Rijkshuisstijl Community Open Hour? Deel ze op ', (0, t.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, t.jsx)(n.code, { children: '#rijkshuisstijl-community' }), ' of stuur een mail naar ', (0, t.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
