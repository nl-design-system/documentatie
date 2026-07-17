/*! For license information please see b6e302a5.b10f2278.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [40415],
 {
  18439(e, n, i) {
   i.d(n, { R: () => o, x: () => a });
   var t = i(30758);
   const s = {},
    r = t.createContext(s);
   function o(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, i) {
   i.d(n, { A: () => r });
   var t = i(30758),
    s = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const r = (e, n, i, r) => {
    const o = (0, t.forwardRef)(({ color: i = 'currentColor', size: o = 24, stroke: a = 2, title: d, className: l, children: c, ...m }, h) => (0, t.createElement)('svg', { ref: h, ...s[e], width: o, height: o, className: ['tabler-icon', `tabler-icon-${n}`, l].join(' '), ...('filled' === e ? { fill: i } : { strokeWidth: a, stroke: i }), ...m }, [d && (0, t.createElement)('title', { key: 'svg-title' }, d), ...r.map(([e, n]) => (0, t.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((o.displayName = `${i}`), o);
   };
  },
  27843(e, n, i) {
   i.d(n, { v: () => a });
   var t = i(53538),
    s = i(13526),
    r = i(86070);
   const o = ({ className: e, children: n, purpose: i, iconStart: t, iconEnd: o, href: a }) => (0, r.jsxs)('a', { className: (0, s.A)('nl-button', e, { 'nl-button--primary': 'primary' === i, 'nl-button--secondary': 'secondary' === i, 'nl-button--subtle': 'subtle' === i }), href: a, children: [t && (0, r.jsx)('span', { className: 'nl-button__icon-start', children: t }), (0, r.jsx)('span', { className: 'nl-button__label', children: n }), o && (0, r.jsx)('span', { className: 'nl-button__icon-end', children: o })] }),
    a = globalThis.isAstro
     ? ({ appearance: e, href: n, ...i }) => {
        let t = 'primary';
        return ((t = 'secondary-action' === e ? 'secondary' : t), (0, r.jsx)(o, { purpose: t, href: n, ...i }));
       }
     : ({ appearance: e, ...n }) => (0, r.jsx)(t.F, { className: (0, s.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  53538(e, n, i) {
   i.d(n, { F: () => o, N: () => a });
   var t = i(13526),
    s = i(76097),
    r = i(86070);
   const o = ({ children: e, ...n }) => {
     const { to: i, href: t, ...o } = n;
     let a = i || t;
     const d = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === d.origin ? (d.pathname.endsWith('/') || (0, s.QQ)(d.pathname) || (d.pathname = `${d.pathname}/`), (a = d.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: a, ...o, children: e }));
    },
    a = ({ className: e, ...n }) => (0, r.jsx)(o, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  64249(e, n, i) {
   i.d(n, { A: () => t });
   const t = (0, i(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  76097(e, n, i) {
   i.d(n, { bo: () => s, KF: () => h, mJ: () => p, VZ: () => S, cR: () => y, Pv: () => g, qZ: () => o, kD: () => f, QQ: () => C, B2: () => v, Pc: () => d, f4: () => a, GT: () => w, fX: () => r, eQ: () => b, B_: () => j, o_: () => k });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    d = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => l.indexOf(e) - l.indexOf(n)),
    h = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return m(c(n));
    },
    v = (e, n) => p(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: i }) => '' !== i && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => m(c(e.projects.flatMap((e) => u(e)))),
    g = (e) => {
     const n = u(e),
      i = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: i }) => '' !== i && e.includes(n))
       .map(({ name: t, id: s, value: r }) => {
        const o = /^(.+) URL/.exec(t)[1],
         a = 'Storybook' === o ? `${i} (${n}) in Storybook van ${e.title}` : `${i} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: t, id: s, value: r, description: a };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    k = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((i) => ('object' == typeof e[i] && null !== e[i] ? f(e[i], [...n, i]) : []));
   }
   function w(e) {
    const n = new Map();
    function i(e) {
     return (n.has(e) || n.set(e, k(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || i(e).localeCompare(i(n)));
   }
   const y = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    S = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    M = new Set(['ics', 'json', 'pdf']),
    C = (e) => {
     const n = e.split('/').pop() ?? '',
      i = n.split('.').pop()?.toLowerCase();
     return void 0 !== i && M.has(i);
    };
  },
  89152(e, n, i) {
   (i.r(n), i.d(n, { assets: () => m, contentTitle: () => c, default: () => u, frontMatter: () => l, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"community/events/mijn-services-check-in","title":"MijnServices Check-in","description":"Tijdens de MijnServices Check-in delen we inzichten, idee\xebn en voortgang rond de doorontwikkeling van NL Design System-componenten die binnen MijnOmgevingen worden gebruikt. Lees hier hoe je mee kunt doen en wanneer het plaatsvindt.","source":"@site/docs/community/events/mijn-services-check-in.mdx","sourceDirName":"community/events","slug":"/events/mijn-services-check-in","permalink":"/events/mijn-services-check-in","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/mijn-services-check-in.mdx","tags":[],"version":"current","frontMatter":{"title":"MijnServices Check-in","hide_title":true,"hide_table_of_contents":false,"navigation_order":4,"sidebar_label":"MijnServices Check-in","pagination_label":"Tijdens de MijnServices Check-in delen we inzichten, idee\xebn en voortgang rond de doorontwikkeling van NL Design System-componenten die binnen MijnOmgevingen worden gebruikt.","description":"Tijdens de MijnServices Check-in delen we inzichten, idee\xebn en voortgang rond de doorontwikkeling van NL Design System-componenten die binnen MijnOmgevingen worden gebruikt. Lees hier hoe je mee kunt doen en wanneer het plaatsvindt.","slug":"/events/mijn-services-check-in","keywords":["nl design system","community sprints","mijn services community","mijnservices community","mijn services community afstemming","mijn services community check-in","overheidsbrede portalen community"]},"sidebar":"community","previous":{"title":"Aanmelden","permalink":"/events/developer-open-hour/aanmelden"},"next":{"title":"Tijdens de Rijkshuisstijl Community Open Hour wisselen verschillende organisaties informatie, inzichten en tips uit over de Rijkshuisstijl.","permalink":"/events/rijkshuisstijl-community-open-hour"}}');
   var s = i(86070),
    r = i(18439),
    o = i(27843),
    a = i(64249),
    d = i(46447);
   const l = { title: 'MijnServices Check-in', hide_title: !0, hide_table_of_contents: !1, navigation_order: 4, sidebar_label: 'MijnServices Check-in', pagination_label: 'Tijdens de MijnServices Check-in delen we inzichten, idee\xebn en voortgang rond de doorontwikkeling van NL Design System-componenten die binnen MijnOmgevingen worden gebruikt.', description: 'Tijdens de MijnServices Check-in delen we inzichten, idee\xebn en voortgang rond de doorontwikkeling van NL Design System-componenten die binnen MijnOmgevingen worden gebruikt. Lees hier hoe je mee kunt doen en wanneer het plaatsvindt.', slug: '/events/mijn-services-check-in', keywords: ['nl design system', 'community sprints', 'mijn services community', 'mijnservices community', 'mijn services community afstemming', 'mijn services community check-in', 'overheidsbrede portalen community'] },
    c = 'MijnServices Check-in',
    m = {},
    h = [
     { value: 'Ben je erbij?', id: 'ben-je-erbij', level: 2 },
     { value: 'Over de MijnServices Community', id: 'over-de-mijnservices-community', level: 2 },
     { value: 'Vragen of idee\xebn?', id: 'vragen-of-idee\xebn', level: 2 },
    ];
   function v(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'mijnservices-check-in', children: 'MijnServices Check-in' }) }), '\n', (0, s.jsx)(n.p, { children: 'De MijnServices Check-ins zijn laagdrempelige online bijeenkomsten waar ontwerpers en ontwikkelaars vanuit verschillende overheidsorganisaties samenkomen om te werken aan MijnOmgevingen, de persoonlijke, samenhangende digitale omgevingen van de overheid.' }), '\n', (0, s.jsx)(n.p, { children: 'Tijdens deze sessies delen we inzichten, idee\xebn en voortgang rond de doorontwikkeling van NL Design System-componenten die binnen MijnOmgevingen worden gebruikt. We stemmen af, leren van elkaar en zorgen ervoor dat ontwerp en techniek elkaar versterken. Zo bouwen we samen stap voor stap aan een herkenbare, toegankelijke en betrouwbare digitale overheid.\nIedereen die betrokken is bij de ontwikkeling van MijnOmgevingen is welkom om aan te sluiten, of je nu ontwerpt, ontwikkelt, test of implementeert.' }), '\n', (0, s.jsx)(n.h2, { id: 'ben-je-erbij', children: 'Ben je erbij?' }), '\n', (0, s.jsx)(n.p, { children: 'Iedereen kan aansluiten! Wekelijks of incidenteel, wanneer je vragen hebt of iets wilt bespreken.' }), '\n', (0, s.jsxs)(n.p, { children: ['De MijnServices Check-in vindt plaats op ', (0, s.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, s.jsx)(n.code, { children: '#nl-design-system-designers' }), '. We gebruiken de Huddle-functie van dat kanaal om elkaar te spreken. In dat kanaal vind je ook de threads van eerdere sessies.'] }), '\n', (0, s.jsx)(n.p, { children: 'Aanmelden is niet verplicht, maar door je aan te melden voor de MijnServices Check-in kunnen wij je op de hoogte houden van bijeenkomsten zoals de MijnServices Check-in. Je ontvangt dan ook direct een kalenderbestandje, zodat je de MijnServices Check-in makkelijk aan je agenda kan toevoegen.' }), '\n', (0, s.jsxs)(d.e2, { children: [(0, s.jsxs)(o.v, { href: '/community/community-sprints/mijn-services-community/aanmelden', appearance: 'primary-action', children: ['Meld je aan', (0, s.jsx)(a.A, {})] }), (0, s.jsxs)(o.v, { href: '/slack/', appearance: 'secondary-action', children: ['Doe mee op Slack', (0, s.jsx)(a.A, {})] })] }), '\n', (0, s.jsx)(n.h2, { id: 'over-de-mijnservices-community', children: 'Over de MijnServices Community' }), '\n', (0, s.jsx)(n.p, { children: 'De MijnServices Check-in is een onderdeel van de MijnServices Community. De MijnServices Community is een samenwerking van onder andere Ministerie van Binnenlandse Zaken en Koninkrijksrelaties, MijnOverheid van Logius, VNG, Ministerie van Justitie en Veiligheid, verschillende gemeenten, NLPortal en OIP.\nIn deze Community Sprint ontwikkelen we een uitgebreide set van huisstijl-onafhankelijke templates voor Mijn Omgevingen en formulieren die direct te gebruiken zijn voor websites en applicaties binnen de overheid.\nOf je nu werkt aan een pagina, een formulier of een specifieke flow, met deze templates werken we toe naar een \xe9\xe9nduidige beleving voor inwoners en ondernemers.' }), '\n', (0, s.jsx)(d.e2, { children: (0, s.jsxs)(o.v, { href: '/community/community-sprints/mijn-services-community', appearance: 'primary-action', children: ['Lees meer over de MijnServices Community', (0, s.jsx)(a.A, {})] }) }), '\n', (0, s.jsx)(n.h2, { id: 'vragen-of-idee\xebn', children: 'Vragen of idee\xebn?' }), '\n', (0, s.jsxs)(n.p, { children: ['Heb je vragen of idee\xebn voor de MijnServices Check-in? Stuur ons dan een mailtje via ', (0, s.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(v, { ...e }) }) : v(e);
   }
  },
 },
]);
