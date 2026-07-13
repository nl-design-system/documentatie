/*! For license information please see 0b07a63f.d777d9f6.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [8424],
 {
  18439(e, n, t) {
   t.d(n, { R: () => a, x: () => r });
   var s = t(30758);
   const i = {},
    o = s.createContext(i);
   function a(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, t) {
   t.d(n, { A: () => o });
   var s = t(30758),
    i = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const o = (e, n, t, o) => {
    const a = (0, s.forwardRef)(({ color: t = 'currentColor', size: a = 24, stroke: r = 2, title: l, className: c, children: d, ...m }, u) => (0, s.createElement)('svg', { ref: u, ...i[e], width: a, height: a, className: ['tabler-icon', `tabler-icon-${n}`, c].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: r, stroke: t }), ...m }, [l && (0, s.createElement)('title', { key: 'svg-title' }, l), ...o.map(([e, n]) => (0, s.createElement)(e, n)), ...(Array.isArray(d) ? d : [d])]));
    return ((a.displayName = `${t}`), a);
   };
  },
  20698(e, n, t) {
   t.d(n, { v: () => a });
   var s = t(53538),
    i = t(13526),
    o = t(86070);
   const a = ({ appearance: e, ...n }) => (0, o.jsx)(s.F, { className: (0, i.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  24955(e, n, t) {
   (t.r(n), t.d(n, { assets: () => m, contentTitle: () => d, default: () => h, frontMatter: () => c, metadata: () => s, toc: () => u }));
   const s = JSON.parse('{"id":"community/community-sprints/mijn-services-community/aanmelden-success","title":"Bedankt voor je aanmelding voor de MijnServices community","description":"Welkom bij de MijnServices Community, fijn dat je erbij bent!","source":"@site/docs/community/community-sprints/mijn-services-community/aanmelden-success.mdx","sourceDirName":"community/community-sprints/mijn-services-community","slug":"/community/community-sprints/mijn-services-community/aanmelden/bedankt","permalink":"/community/community-sprints/mijn-services-community/aanmelden/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/mijn-services-community/aanmelden-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding voor de MijnServices community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Bedankt voor je aanmelding","pagination_label":"Bedankt voor je aanmelding","slug":"/community/community-sprints/mijn-services-community/aanmelden/bedankt","unlisted":true}}');
   var i = t(86070),
    o = t(18439),
    a = t(90578),
    r = t(20698),
    l = t(46447);
   const c = { title: 'Bedankt voor je aanmelding voor de MijnServices community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Bedankt voor je aanmelding', pagination_label: 'Bedankt voor je aanmelding', slug: '/community/community-sprints/mijn-services-community/aanmelden/bedankt', unlisted: !0 },
    d = 'Bedankt!',
    m = {},
    u = [];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }) }), '\n', (0, i.jsx)(n.p, { children: 'Welkom bij de MijnServices Community, fijn dat je erbij bent!' }), '\n', (0, i.jsx)(n.p, { children: 'Handige links:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Praat mee op ', (0, i.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ' in het kanaal ', (0, i.jsx)(n.code, { children: '#nl-design-system-developers' }), ' Stel hier je vragen of volg de gesprekken.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/mijn-services', children: 'Bekijk de code op GitHub' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Bekijk onze ', (0, i.jsx)(n.a, { href: 'https://www.youtube.com/playlist?list=PLnAxFMscDU3F1VYQxlJLpmV-Z-FQ6hCU_', children: "video's in de MijnServices Community Sprint playlist op YouTube" }), ' en abonneer je op ons kanaal.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Vind alle relevante linkjes en informatie op de ', (0, i.jsx)(n.a, { href: '/community/community-sprints/mijn-services-community/', children: 'MijnServices Community pagina' }), '.'] }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Elke even week op donderdag van 10:00 tot 11:00 kan je meedoen aan de ', (0, i.jsx)(n.a, { href: '/events/mijn-services-check-in/', children: 'MijnServices Community Check-in' }), ' huddle en de thread volgen in het #nl-design-system-designers kanaal. Deze is voor zowel developers als designers.'] }), '\n', (0, i.jsx)(l.e2, { children: (0, i.jsxs)(r.v, { appearance: 'secondary-action', href: 'https://nldesignsystem.nl/mijn-services-community/mijn-services-community-check-in.ics', download: 'https://nldesignsystem.nl/mijn-services-community/mijn-services-community-check-in.ics', 'aria-label': 'iCal bestand voor de MijnServices Community Check-in (download)', children: [(0, i.jsx)(a.A, {}), ' Download het kalenderbestand'] }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  53538(e, n, t) {
   t.d(n, { F: () => a, N: () => r });
   var s = t(13526),
    i = t(76097),
    o = t(86070);
   const a = ({ children: e, ...n }) => {
     const { to: t, href: s, ...a } = n;
     let r = t || s;
     const l = new URL(r, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, i.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (r = l.toString().replace('https://nldesignsystem.nl', ''))) : ((a.target = '_blank'), (a.rel = 'noopener noreferrer')), (0, o.jsx)('a', { href: r, ...a, children: e }));
    },
    r = ({ className: e, ...n }) => (0, o.jsx)(a, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  76097(e, n, t) {
   t.d(n, { bo: () => i, KF: () => u, mJ: () => v, VZ: () => S, cR: () => A, Pv: () => g, qZ: () => a, kD: () => b, QQ: () => M, B2: () => p, Pc: () => l, f4: () => r, GT: () => f, fX: () => o, eQ: () => y, B_: () => j, o_: () => k });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    r = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return m(d(n));
    },
    p = (e, n) => v(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(d(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    v = (e) => m(d(e.projects.flatMap((e) => h(e)))),
    g = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const s = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: s, id: i, value: o }) => {
        const a = /^(.+) URL/.exec(s)[1],
         r = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: s, id: i, value: o, description: r };
       });
      return { frameworkName: n, tasks: s };
     });
    },
    k = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    y = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function f(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, k(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const A = () => {
     const e = s.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    S = () => {
     const e = s.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    w = new Set(['ics', 'json', 'pdf']),
    M = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && w.has(t);
    };
  },
  90578(e, n, t) {
   t.d(n, { A: () => s });
   const s = (0, t(18652).A)('outline', 'calendar-event', 'CalendarEvent', [
    ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12', key: 'svg-0' }],
    ['path', { d: 'M16 3l0 4', key: 'svg-1' }],
    ['path', { d: 'M8 3l0 4', key: 'svg-2' }],
    ['path', { d: 'M4 11l16 0', key: 'svg-3' }],
    ['path', { d: 'M8 15h2v2h-2l0 -2', key: 'svg-4' }],
   ]);
  },
 },
]);
