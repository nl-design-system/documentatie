/*! For license information please see 9d33172e.d3152336.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [32537],
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
    const a = (0, s.forwardRef)(({ color: t = 'currentColor', size: a = 24, stroke: r = 2, title: l, className: d, children: c, ...m }, u) => (0, s.createElement)('svg', { ref: u, ...i[e], width: a, height: a, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: r, stroke: t }), ...m }, [l && (0, s.createElement)('title', { key: 'svg-title' }, l), ...o.map(([e, n]) => (0, s.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((a.displayName = `${t}`), a);
   };
  },
  27843(e, n, t) {
   t.d(n, { v: () => r });
   var s = t(53538),
    i = t(13526),
    o = t(86070);
   const a = ({ className: e, children: n, purpose: t, iconStart: s, iconEnd: a, href: r }) => (0, o.jsxs)('a', { className: (0, i.A)('nl-button', e, { 'nl-button--primary': 'primary' === t, 'nl-button--secondary': 'secondary' === t, 'nl-button--subtle': 'subtle' === t }), href: r, children: [s && (0, o.jsx)('span', { className: 'nl-button__icon-start', children: s }), (0, o.jsx)('span', { className: 'nl-button__label', children: n }), a && (0, o.jsx)('span', { className: 'nl-button__icon-end', children: a })] }),
    r = globalThis.isAstro
     ? ({ appearance: e, href: n, ...t }) => {
        let s = 'primary';
        return ((s = 'secondary-action' === e ? 'secondary' : s), (0, o.jsx)(a, { purpose: s, href: n, ...t }));
       }
     : ({ appearance: e, ...n }) => (0, o.jsx)(s.F, { className: (0, i.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  40535(e, n, t) {
   (t.r(n), t.d(n, { assets: () => m, contentTitle: () => c, default: () => p, frontMatter: () => d, metadata: () => s, toc: () => u }));
   const s = JSON.parse('{"id":"community/community-sprints/rijkshuisstijl-community/aanmelden-success","title":"Bedankt voor je aanmelding voor de Rijkshuisstijl Community","description":"Welkom bij de Rijkshuisstijl Community, fijn dat je erbij bent. We hopen je snel (weer) eens te zien in het #rijkshuisstijl-community Slack kanaal of bij een van de bijeenkomsten!","source":"@site/docs/community/community-sprints/rijkshuisstijl-community/aanmelden-success.mdx","sourceDirName":"community/community-sprints/rijkshuisstijl-community","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt","permalink":"/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt","draft":false,"unlisted":true,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/rijkshuisstijl-community/aanmelden-success.mdx","tags":[],"version":"current","frontMatter":{"title":"Bedankt voor je aanmelding voor de Rijkshuisstijl Community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Bedankt voor je aanmelding","pagination_label":"Bedankt voor je aanmelding","slug":"/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt","unlisted":true}}');
   var i = t(86070),
    o = t(18439),
    a = t(90578),
    r = t(27843),
    l = t(46447);
   const d = { title: 'Bedankt voor je aanmelding voor de Rijkshuisstijl Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Bedankt voor je aanmelding', pagination_label: 'Bedankt voor je aanmelding', slug: '/community/community-sprints/rijkshuisstijl-community/aanmelden/bedankt', unlisted: !0 },
    c = 'Bedankt!',
    m = {},
    u = [{ value: 'Open Hour', id: 'open-hour', level: 2 }];
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Welkom bij de Rijkshuisstijl Community, fijn dat je erbij bent. We hopen je snel (weer) eens te zien in het ', (0, i.jsx)(n.code, { children: '#rijkshuisstijl-community' }), ' Slack kanaal of bij een van de bijeenkomsten!'] }), '\n', (0, i.jsx)(n.p, { children: 'Handige links:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Word lid van het ', (0, i.jsx)(n.code, { children: '#rijkshuisstijl-community' }), ' kanaal op ', (0, i.jsx)(n.a, { href: '/slack/', children: 'Slack' }), ', daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/rijkshuisstijl-community', children: 'Bekijk de code op GitHub' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Bekijk onze ', (0, i.jsx)(n.a, { href: 'https://www.youtube.com/playlist?list=PLnAxFMscDU3FHVDYR9WvX3d84JdQ5Q3tJ', children: "video's in de Rijkshuisstijl Community Sprint playlist op YouTube" }), ' en abonneer je op ons kanaal.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Vind alle relevante linkjes en informatie op de ', (0, i.jsx)(n.a, { href: 'https://rijkshuisstijl-community.nl/', children: 'Rijkshuisstijl Community homepage' }), ' en op ', (0, i.jsx)(n.a, { href: '/community/community-sprints/rijkshuisstijl-community/', children: 'NL Design System onder Rijkshuisstijl Community' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'open-hour', children: 'Open Hour' }), '\n', (0, i.jsxs)(n.p, { children: ['Voor iedereen die interesse heeft in de Rijkshuisstijl is er in de oneven weken, iedere dinsdag om 16:00 uur, een ', (0, i.jsx)(n.a, { href: '/events/rijkshuisstijl-community-open-hour/', children: 'Rijkshuisstijl Community Open Hour' }), '. Dit is een moment om kennis te delen en samen vraagstukken rond de Rijkshuisstijl te bespreken. Ook het delen van work-in-progress, tips of inzichten uit gebruikersonderzoek wordt gewaardeerd!'] }), '\n', (0, i.jsx)(l.e2, { children: (0, i.jsxs)(r.v, { appearance: 'secondary-action', href: 'https://nldesignsystem.nl/rijkshuisstijl-community/rijkshuisstijl-community-open-hour.ics', download: 'https://nldesignsystem.nl/rijkshuisstijl-community/rijkshuisstijl-community-open-hour.ics', 'aria-label': 'iCal bestand voor de Rijkshuisstijl Community Open Hour (download)', children: [(0, i.jsx)(a.A, {}), ' Download het kalenderbestand voor de Open Hour'] }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
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
   t.d(n, { bo: () => i, KF: () => u, mJ: () => j, VZ: () => A, cR: () => w, Pv: () => k, qZ: () => a, kD: () => f, QQ: () => x, B2: () => h, Pc: () => l, f4: () => r, GT: () => v, fX: () => o, eQ: () => b, B_: () => y, o_: () => g });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    r = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return m(c(n));
    },
    h = (e, n) => j(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    j = (e) => m(c(e.projects.flatMap((e) => p(e)))),
    k = (e) => {
     const n = p(e),
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
    g = (e) => e.join('.'),
    y = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? f(e[t], [...n, t]) : []));
   }
   function v(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, g(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const w = () => {
     const e = s.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = s.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    _ = new Set(['ics', 'json', 'pdf']),
    x = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && _.has(t);
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
