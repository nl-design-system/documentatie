/*! For license information please see f069e887.3b1f8108.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [87010],
 {
  18439(e, n, t) {
   t.d(n, { R: () => i, x: () => l });
   var a = t(30758);
   const r = {},
    s = a.createContext(r);
   function i(e) {
    const n = a.useContext(s);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : i(e.components)), a.createElement(s.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, t) {
   t.d(n, { A: () => s });
   var a = t(30758),
    r = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const s = (e, n, t, s) => {
    const i = (0, a.forwardRef)(({ color: t = 'currentColor', size: i = 24, stroke: l = 2, title: o, className: d, children: c, ...h }, m) => (0, a.createElement)('svg', { ref: m, ...r[e], width: i, height: i, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: l, stroke: t }), ...h }, [o && (0, a.createElement)('title', { key: 'svg-title' }, o), ...s.map(([e, n]) => (0, a.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((i.displayName = `${t}`), i);
   };
  },
  27843(e, n, t) {
   t.d(n, { v: () => l });
   var a = t(53538),
    r = t(13526),
    s = t(86070);
   const i = ({ className: e, children: n, purpose: t, iconStart: a, iconEnd: i, href: l }) => (0, s.jsxs)('a', { className: (0, r.A)('nl-button', e, { 'nl-button--primary': 'primary' === t, 'nl-button--secondary': 'secondary' === t, 'nl-button--subtle': 'subtle' === t }), href: l, children: [a && (0, s.jsx)('span', { className: 'nl-button__icon-start', children: a }), (0, s.jsx)('span', { className: 'nl-button__label', children: n }), i && (0, s.jsx)('span', { className: 'nl-button__icon-end', children: i })] }),
    l = globalThis.isAstro
     ? ({ appearance: e, href: n, ...t }) => {
        let a = 'primary';
        return ((a = 'secondary-action' === e ? 'secondary' : a), (0, s.jsx)(i, { purpose: a, href: n, ...t }));
       }
     : ({ appearance: e, ...n }) => (0, s.jsx)(a.F, { className: (0, r.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  30522(e, n, t) {
   t.d(n, { A: () => a });
   const a = t.p + 'assets/files/heartbeat-dfc3f6a16749638d019e231117d9bead.ics';
  },
  53538(e, n, t) {
   t.d(n, { F: () => i, N: () => l });
   var a = t(13526),
    r = t(76097),
    s = t(86070);
   const i = ({ children: e, ...n }) => {
     const { to: t, href: a, ...i } = n;
     let l = t || a;
     const o = new URL(l, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === o.origin ? (o.pathname.endsWith('/') || (0, r.QQ)(o.pathname) || (o.pathname = `${o.pathname}/`), (l = o.toString().replace('https://nldesignsystem.nl', ''))) : ((i.target = '_blank'), (i.rel = 'noopener noreferrer')), (0, s.jsx)('a', { href: l, ...i, children: e }));
    },
    l = ({ className: e, ...n }) => (0, s.jsx)(i, { className: (0, a.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  64249(e, n, t) {
   t.d(n, { A: () => a });
   const a = (0, t(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  66807(e, n, t) {
   (t.r(n), t.d(n, { assets: () => m, contentTitle: () => h, default: () => b, frontMatter: () => c, metadata: () => a, toc: () => p }));
   const a = JSON.parse('{"id":"community/events/heartbeat/index","title":"Heartbeat van NL Design System","description":"Wat is de Heartbeat, hoe meld ik mij aan, en op welke momenten is het?","source":"@site/docs/community/events/heartbeat/index.mdx","sourceDirName":"community/events/heartbeat","slug":"/events/heartbeat","permalink":"/events/heartbeat","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/heartbeat/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Heartbeat van NL Design System","title_sm":"Heartbeat","hide_title":true,"hide_table_of_contents":false,"navigation_order":1,"sidebar_label":"Heartbeat","pagination_label":"Heartbeat","description":"Wat is de Heartbeat, hoe meld ik mij aan, en op welke momenten is het?","slug":"/events/heartbeat"},"sidebar":"community","previous":{"title":"Heartbeat","permalink":"/events/heartbeat"},"next":{"title":"Video\'s van de afgelopen Heartbeats","permalink":"/events/heartbeat/videos"}}');
   var r = t(86070),
    s = t(18439),
    i = t(27843),
    l = t(53538),
    o = t(64249),
    d = t(46447);
   const c = { title: 'Heartbeat van NL Design System', title_sm: 'Heartbeat', hide_title: !0, hide_table_of_contents: !1, navigation_order: 1, sidebar_label: 'Heartbeat', pagination_label: 'Heartbeat', description: 'Wat is de Heartbeat, hoe meld ik mij aan, en op welke momenten is het?', slug: '/events/heartbeat' },
    h = 'Heartbeat',
    m = {},
    p = [
     { value: 'Ben je erbij?', id: 'ben-je-erbij', level: 2 },
     { value: 'Planning', id: 'planning', level: 2 },
     { value: 'Vragen?', id: 'vragen', level: 2 },
    ];
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'heartbeat', children: 'Heartbeat' }) }), '\n', (0, r.jsx)(n.p, { children: 'In de Heartbeat vertelt het kernteam van NL Design System elke twee weken wat de laatste stand van zaken is. Daarnaast laten we organisaties aan het woord die met/aan het NL Design System werken.' }), '\n', (0, r.jsxs)(d.e2, { children: [(0, r.jsxs)(i.v, { href: '/events/heartbeat/aanmelden/', appearance: 'primary-action', children: ['Meld je aan', (0, r.jsx)(o.A, {})] }), (0, r.jsxs)(i.v, { href: '/events/heartbeat/videos/', appearance: 'secondary-action', children: ['Kijk de Heartbeat terug', (0, r.jsx)(o.A, {})] })] }), '\n', (0, r.jsx)(n.h2, { id: 'ben-je-erbij', children: 'Ben je erbij?' }), '\n', (0, r.jsx)(n.p, { children: 'Iedereen kan aansluiten!' }), '\n', (0, r.jsxs)(n.p, { children: ['De Heartbeat is elke even week, op dinsdag om 13:00 uur ', (0, r.jsx)('a', { className: 'utrecht-link utrecht-link--html-a', href: '/events/heartbeat/deelnemen/', children: 'in Microsoft Teams' }), '. De sessies zijn publiek toegankelijk en worden opgenomen.'] }), '\n', (0, r.jsx)(n.p, { children: 'Door je aan te melden kunnen wij je op de hoogte houden van Heartbeats. Je ontvangt dan ook direct een kalenderbestandje, zodat je de Heartbeat makkelijk aan je agenda kan toevoegen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Werk jij met of aan het NL Design System? Dan kun je zelf ook iets presenteren! Lees meer over hoe dat werkt op ', (0, r.jsx)(l.N, { href: '/events/heartbeat/zelf-iets-vertellen', children: 'zelf iets vertellen in de Heartbeat' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'planning', children: 'Planning' }), '\n', (0, r.jsx)(n.p, { children: 'De Heartbeat vindt om de week plaats op dinsdag. Dit zijn de data voor 2026:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '6 januari' }), '\n', (0, r.jsx)(n.li, { children: '20 januari' }), '\n', (0, r.jsx)(n.li, { children: '3 februari' }), '\n', (0, r.jsx)(n.li, { children: '17 februari' }), '\n', (0, r.jsx)(n.li, { children: '3 maart' }), '\n', (0, r.jsx)(n.li, { children: '17 maart' }), '\n', (0, r.jsx)(n.li, { children: '31 maart' }), '\n', (0, r.jsx)(n.li, { children: '14 april' }), '\n', (0, r.jsx)(n.li, { children: '28 april' }), '\n', (0, r.jsx)(n.li, { children: '12 mei' }), '\n', (0, r.jsx)(n.li, { children: '26 mei' }), '\n', (0, r.jsx)(n.li, { children: '9 juni' }), '\n', (0, r.jsx)(n.li, { children: '23 juni' }), '\n', (0, r.jsx)(n.li, { children: '7 juli' }), '\n', (0, r.jsx)(n.li, { children: '18 augustus' }), '\n', (0, r.jsx)(n.li, { children: '1 september' }), '\n', (0, r.jsx)(n.li, { children: '15 september' }), '\n', (0, r.jsx)(n.li, { children: '29 september' }), '\n', (0, r.jsx)(n.li, { children: '13 oktober' }), '\n', (0, r.jsx)(n.li, { children: '27 oktober' }), '\n', (0, r.jsx)(n.li, { children: '10 november' }), '\n', (0, r.jsx)(n.li, { children: '24 november' }), '\n', (0, r.jsx)(n.li, { children: '8 december' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { target: '_blank', 'data-noBrokenLinkCheck': !0, href: t(30522).A + '', children: 'Voeg Heartbeats aan je kalender (.ics)' }) }), '\n', (0, r.jsx)(n.h2, { id: 'vragen', children: 'Vragen?' }), '\n', (0, r.jsxs)(n.p, { children: ['Heb je nog vragen? Stuur ons dan een mailtje op ', (0, r.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), ' of neem contact op via ', (0, r.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, r.jsx)(n.code, { children: '#nl-design-system' }), ', daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
  76097(e, n, t) {
   t.d(n, { bo: () => r, KF: () => m, mJ: () => b, VZ: () => w, cR: () => _, Pv: () => j, qZ: () => i, kD: () => f, QQ: () => y, B2: () => p, Pc: () => o, f4: () => l, GT: () => x, fX: () => s, eQ: () => v, B_: () => k, o_: () => g });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return h(c(n));
    },
    p = (e, n) => b(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    b = (e) => h(c(e.projects.flatMap((e) => u(e)))),
    j = (e) => {
     const n = u(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const a = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: a, id: r, value: s }) => {
        const i = /^(.+) URL/.exec(a)[1],
         l = 'Storybook' === i ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: a, id: r, value: s, description: l };
       });
      return { frameworkName: n, tasks: a };
     });
    },
    g = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function x(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, g(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const _ = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    w = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    A = new Set(['ics', 'json', 'pdf']),
    y = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && A.has(t);
    };
  },
 },
]);
