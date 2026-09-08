/*! For license information please see 5c0cafdc.5b742a52.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [50186],
 {
  790(e) {
   e.exports = [];
  },
  8671(e, s, n) {
   (n.r(s), n.d(s, { assets: () => p, contentTitle: () => g, default: () => b, frontMatter: () => m, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/program","title":"Program","description":"Program for the Design Systems Week 2026 organised by NL Design System","source":"@site/docs/community/events/design-systems-week/en/program.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week-2026/en/program","permalink":"/events/design-systems-week-2026/en/program","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/program.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Program","lang":"en","description":"Program for the Design Systems Week 2026 organised by NL Design System","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Program","pagination_label":"Design Systems Week 2026","sidebar_position":2,"slug":"/events/design-systems-week-2026/en/program","translations":{"nl":"/events/design-systems-week-2026/programma/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 October, online"},"sidebar":"community","previous":{"title":"About Design Systems Week","permalink":"/events/design-systems-week/en"},"next":{"title":"Timetable","permalink":"/events/design-systems-week-2026/en/timetable"}}');
   var a = n(86070),
    i = n(18439),
    r = n(34225),
    o = n(24142),
    l = n(59292),
    d = n(64249),
    c = (n(790), n(86109), n(31439), n(51130));
   const m = { title: 'Program', lang: 'en', description: 'Program for the Design Systems Week 2026 organised by NL Design System', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Program', pagination_label: 'Design Systems Week 2026', sidebar_position: 2, slug: '/events/design-systems-week-2026/en/program', translations: { nl: '/events/design-systems-week-2026/programma/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 October, online' },
    g = 'Design Systems Week settings.year',
    p = {},
    h = [];
   function u(e) {
    const s = { h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)('div', { lang: 'en', children: [(0, a.jsx)(s.header, { children: (0, a.jsxs)(s.h1, { id: 'design-systems-week-settingsyear', children: ['Design Systems Week ', c.Ok] }) }), (0, a.jsx)(l.f, { purpose: 'lead', children: (0, a.jsxs)(s.p, { children: ['NL Design System is organising the Design Systems Week for the fifth time. It will feature a number of short talks\nabout the how and why of design systems. All online. From ', c.en.M, ', we will cover subjects like\nmanaging design systems, integrating accessibility, user research and code.'] }) }), (0, a.jsxs)(o.K, { children: [(0, a.jsxs)(r.v, { href: `/events/design-systems-week-${c.Ok}/en/timetable`, appearance: 'primary-action', children: ['View the timetable', (0, a.jsx)(d.A, { slot: 'icon-end' })] }), !!c.MX && (0, a.jsxs)(r.v, { href: c.MX, appearance: 'secondary-action', children: ['Use Miro', (0, a.jsx)(d.A, { slot: 'icon-end' })] })] })] });
   }
   function b(e = {}) {
    const { wrapper: s } = { ...(0, i.R)(), ...e.components };
    return s ? (0, a.jsx)(s, { ...e, children: (0, a.jsx)(u, { ...e }) }) : u(e);
   }
  },
  24142(e, s, n) {
   n.d(s, { K: () => t.e2 });
   var t = n(29181);
  },
  31439(e, s, n) {
   n.d(s, { H: () => d });
   var t = n(90578),
    a = n(46447),
    i = n(13526),
    r = n(80883),
    o = n(86070);
   const l = new Date().toISOString(),
    d = ({ lang: e = 'nl', headingLevel: s = 3, allSpeakers: n, videoId: d, children: c, allSessions: m, sessionId: g }) => {
     const p = m?.find(({ uuid: e }) => g === e),
      h = p && p.speakers.map((e) => n[e]).filter(Boolean),
      u = [d, p?.videoId, ...(p?.videoIds ?? [])].filter(Boolean);
     return p ? (0, o.jsxs)('article', { className: (0, i.A)('ma-dsw-session'), children: [(0, o.jsx)(a.DZ, { level: s, className: 'ma-dsw-session__title', id: p.subject.toLowerCase().replace(/\s/gi, '-'), children: p.subject }), (0, o.jsx)(a.fz, { className: 'ma-dsw-session__subtitle', lead: !0, children: h && h.map((e) => (e?.organisation ? `${e.name} - ${e.organisation}` : e.name)).join(' & ') }), u.length > 0 && u.map((e) => (0, o.jsx)(r.L, { id: e, title: p.subject, style: { marginBlock: '20px' } }, e)), p && p.isoDateTime && p.isoDateTime > l ? (0, o.jsx)(a.fz, { children: (0, o.jsx)('time', { dateTime: p.isoDateTime, children: new Intl.DateTimeFormat(e, { dateStyle: 'full', timeStyle: 'nl' === e ? 'short' : 'full', timeZone: 'Europe/Amsterdam' }).format(new Date(p.isoDateTime)) }) }) : (0, o.jsx)(o.Fragment, {}), c, 'nl' === e && h.find(({ language: e }) => 'nl' !== e) && (0, o.jsxs)(a.fz, { children: [(0, o.jsx)('b', { children: 'Goed te weten:' }), ' Deze sessie is in het Engels.'] }), p.captioned ? (p.captionId ? (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(a.fz, { children: ['nl' === e ? (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('b', { children: 'Bij deze sessie is een schrijftolk aanwezig: ' }) }) : (0, o.jsx)(o.Fragment, { children: (0, o.jsx)('b', { children: 'Live captioning is available for this session: ' }) }), (0, o.jsxs)('a', { href: `https://text-on-tap.live/#e=${p.captionId}`, children: [(0, o.jsxs)('span', { className: 'sr-only', children: [p.subject, ' '] }), 'nl' === e ? 'in de browser' : 'in the browser'] }), 'nl' === e ? ' of ' : ' or ', (0, o.jsxs)('a', { href: `https://text-on-tap.live/openoverlay.html?e=${p.captionId}`, children: [(0, o.jsxs)('span', { className: 'sr-only', children: [p.subject, ' '] }), 'nl' === e ? 'met de Overlay tool' : 'with the de Overlay tool'] })] }) }) : 'nl' === e ? (0, o.jsx)(a.fz, { children: 'Voor deze sessie hebben we nog geen schrijftolk gevonden' }) : (0, o.jsx)(o.Fragment, {})) : (0, o.jsx)(o.Fragment, {}), (0, o.jsx)('aside', { className: (0, i.A)('ma-dsw-session__speakers'), children: h.map((s, n) => (0, o.jsxs)('div', { className: (0, i.A)('ma-dsw-session__speaker', 'ma-dsw-speaker'), children: [(0, o.jsx)('img', { className: (0, i.A)('ma-dsw-speaker__image'), src: s.image.src, alt: s.image.alt }), (0, o.jsx)(a.fz, { className: (0, i.A)('ma-dsw-speaker__description'), children: s.description[e] })] }, n)) }), p && p.icalLink && !d ? (0, o.jsx)(a.fz, { children: (0, o.jsxs)(a.vx, { href: p.icalLink, download: p.icalLink, appearance: 'primary-action-button', children: [(0, o.jsx)(a.In, { children: (0, o.jsx)(t.A, {}) }), (0, o.jsx)('span', { children: 'nl' === e ? (0, o.jsxs)(o.Fragment, { children: ['Zet', (0, o.jsx)('span', { className: 'sr-only', children: p.subject }), ' in je agenda'] }) : (0, o.jsxs)(o.Fragment, { children: ['Add', (0, o.jsx)('span', { className: 'sr-only', children: p.subject }), ' to your calendar'] }) })] }) }) : null] }) : (0, o.jsx)(o.Fragment, {});
    };
  },
  32385(e, s, n) {
   n.d(s, { bo: () => a, KF: () => g, mJ: () => u, VZ: () => w, cR: () => v, Pv: () => b, qZ: () => r, kD: () => f, QQ: () => S, B2: () => p, Pc: () => l, f4: () => o, GT: () => x, fX: () => i, eQ: () => j, B_: () => k, o_: () => y });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, s) => d.indexOf(e) - d.indexOf(s)),
    g = (e) => {
     const s = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return m(c(s));
    },
    p = (e, s) => u(e).includes(s),
    h = (e) => {
     const s = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: n }) => '' !== n && s.test(e)).map(({ name: e }) => s.exec(e)?.[1])));
    },
    u = (e) => m(c(e.projects.flatMap((e) => h(e)))),
    b = (e) => {
     const s = h(e),
      n = ((e) => {
       const s = e.tasks.find(({ name: e }) => 'Naam' === e);
       return s?.value || '';
      })(e);
     return s.map((s) => {
      const t = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(s))
       .map(({ name: t, id: a, value: i }) => {
        const r = /^(.+) URL/.exec(t)[1],
         o = 'Storybook' === r ? `${n} (${s}) in Storybook van ${e.title}` : `${n} (${s}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: a, value: i, description: o };
       });
      return { frameworkName: s, tasks: t };
     });
    },
    y = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    j = (e, s) => s.reduce((e, s) => e?.[s], e);
   function f(e, s = []) {
    return Object.hasOwn(e, '$type') ? [s] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? f(e[n], [...s, n]) : []));
   }
   function x(e) {
    const s = new Map();
    function n(e) {
     return (s.has(e) || s.set(e, y(e)), s.get(e));
    }
    return e.sort((e, s) => e.length - s.length || n(e).localeCompare(n(s)));
   }
   const v = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    w = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const s = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return s ? s[1] : e.replace(/^[\^~>=<]+/, '');
    },
    _ = new Set(['ics', 'json', 'pdf']),
    S = (e) => {
     const s = e.split('/').pop() ?? '',
      n = s.split('.').pop()?.toLowerCase();
     return void 0 !== n && _.has(n);
    };
  },
  34225(e, s, n) {
   n.d(s, { v: () => o });
   var t = n(94309),
    a = n(13526),
    i = n(86070);
   const r = ({ className: e, children: s, purpose: n, iconStart: t, iconEnd: r, href: o }) => (0, i.jsxs)('a', { className: (0, a.A)('nl-button', e, { 'nl-button--primary': 'primary' === n, 'nl-button--secondary': 'secondary' === n, 'nl-button--subtle': 'subtle' === n }), href: o, children: [t && (0, i.jsx)('span', { className: 'nl-button__icon-start', children: t }), (0, i.jsx)('span', { className: 'nl-button__label', children: s }), r && (0, i.jsx)('span', { className: 'nl-button__icon-end', children: r })] }),
    o = globalThis.isAstro
     ? ({ appearance: e, href: s, ...n }) => {
        let t = 'primary';
        return ((t = 'secondary-action' === e ? 'secondary' : t), (0, i.jsx)(r, { purpose: t, href: s, ...n }));
       }
     : ({ appearance: e, ...s }) => (0, i.jsx)(t.F, { className: (0, a.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...s });
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  59292(e, s, n) {
   n.d(s, { f: () => t.f });
   var t = n(71544);
  },
  64249(e, s, n) {
   n.d(s, { A: () => t });
   const t = (0, n(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  80883(e, s, n) {
   n.d(s, { L: () => i });
   var t = n(20201),
    a = n(86070);
   const i = ({ id: e, title: s, ...n }) => (0, a.jsx)(t.Ay, { lazyLoad: !0, adNetwork: !1, announce: 'Bekijk', cookie: !1, containerElement: 'div', id: e, title: s, poster: 'maxresdefault', ...n });
  },
  86109(e) {
   e.exports = {};
  },
  94309(e, s, n) {
   n.d(s, { F: () => r, N: () => o });
   var t = n(13526),
    a = n(32385),
    i = n(86070);
   const r = ({ children: e, ...s }) => {
     const { to: n, href: t, ...r } = s;
     let o = n || t;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, a.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: o, ...r, children: e }));
    },
    o = ({ className: e, ...s }) => (0, i.jsx)(r, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...s });
  },
 },
]);
