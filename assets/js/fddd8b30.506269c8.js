/*! For license information please see fddd8b30.506269c8.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [21242],
 {
  790(e) {
   e.exports = JSON.parse('[{"uuid":"1bfd50e8-d845-492b-9553-51cae7dafd5b","isoDateTime":"2026-10-26T12:00:00.000Z","speakers":["DrStephDriver"],"subject":"Tracking conformance data within the code-base","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":null},{"uuid":"b919f274-381c-41db-9d1d-cc3b6934ce93","isoDateTime":"2026-10-26T14:00:00.000Z","speakers":["EricVanMullekom","MiekeTenDam"],"subject":"Digitale toegankelijkheid van kaartviewers","language":{"abbr":"NL","description":"Nederlands"},"videoId":null,"icalLink":null},{"uuid":"a23217db-b17d-4e97-ad46-1fd7d113c567","isoDateTime":"2026-10-27T14:00:00.000Z","speakers":["MarionCouesnon"],"subject":"Switching design systems without compromising accessibility","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":null}]');
  },
  18439(e, n, s) {
   s.d(n, { R: () => r, x: () => o });
   var t = s(30758);
   const a = {},
    i = t.createContext(a);
   function r(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), t.createElement(i.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, s) {
   s.d(n, { A: () => i });
   var t = s(30758),
    a = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const i = (e, n, s, i) => {
    const r = (0, t.forwardRef)(({ color: s = 'currentColor', size: r = 24, stroke: o = 2, title: l, className: d, children: c, ...m }, g) => (0, t.createElement)('svg', { ref: g, ...a[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: s } : { strokeWidth: o, stroke: s }), ...m }, [l && (0, t.createElement)('title', { key: 'svg-title' }, l), ...i.map(([e, n]) => (0, t.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((r.displayName = `${s}`), r);
   };
  },
  23288(e, n, s) {
   s.d(n, { F: () => d });
   const t = (0, s(18652).A)('outline', 'user', 'User', [
    ['path', { d: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0', key: 'svg-0' }],
    ['path', { d: 'M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2', key: 'svg-1' }],
   ]);
   var a = s(90578),
    i = s(46447),
    r = s(13526),
    o = s(86070);
   const l = ({ name: e, organisation: n }) => (0, o.jsxs)(i.fz, { className: (0, r.A)('ma-session-table__speaker', 'ma-speaker'), children: [(0, o.jsx)(i.In, { className: 'ma-speaker__icon', children: (0, o.jsx)(t, {}) }), (0, o.jsx)('span', { className: 'ma-speaker__name', children: e }), (0, o.jsx)('br', {}), (0, o.jsx)('span', { className: 'ma-speaker__organisation', children: n })] }),
    d = ({ lang: e, sessions: n, speakers: s, className: t, ...d }) =>
     (0, o.jsx)('div', {
      className: (0, r.A)('ma-session-table-container', t),
      children: (0, o.jsxs)(i.XI, {
       className: (0, r.A)('ma-session-table', t),
       ...d,
       children: [
        (0, o.jsx)(i.A0, { children: (0, o.jsxs)(i.Hj, { className: 'ma-session-table__row', children: [(0, o.jsx)(i.M_, { className: 'ma-session-table__header-cell', children: 'nl-NL' === e ? 'Tijd' : 'Time' }), (0, o.jsx)(i.M_, { className: 'ma-session-table__header-cell', children: 'nl-NL' === e ? 'Taal' : 'Language' }), (0, o.jsx)(i.M_, { className: 'ma-session-table__header-cell', children: 'nl-NL' === e ? 'Spreker' : 'Speaker' }), (0, o.jsx)(i.M_, { className: 'ma-session-table__header-cell', children: 'nl-NL' === e ? 'Onderwerp' : 'Subject' }), (0, o.jsx)(i.M_, { className: 'ma-session-table__header-cell', children: 'nl-NL' === e ? 'Agenda' : 'Calendar' })] }) }),
        (0, o.jsx)(i.BF, {
         children: n.map(
          ({ isoDateTime: n, speakers: t, subject: r, icalLink: d, language: c, cancelled: m }, g) =>
           !m &&
           (0, o.jsxs)(
            i.Hj,
            {
             className: 'ma-session-table__row',
             children: [
              (0, o.jsx)(i.nA, { className: 'ma-session-table__time', children: (0, o.jsx)(i.fz, { children: (0, o.jsx)('time', { dateTime: n, children: new Intl.DateTimeFormat(e, { hour: 'numeric', minute: 'numeric', timeZone: 'Europe/Amsterdam', timeZoneName: 'nl-NL' !== e ? 'short' : void 0 }).format(new Date(n)) }) }) }),
              (0, o.jsx)(i.nA, { className: 'ma-session-table__language', children: (0, o.jsx)('abbr', { title: c.description, children: c.abbr }) }),
              (0, o.jsx)(i.nA, {
               children: (0, o.jsx)('div', {
                className: 'ma-session-table__speakers',
                children: Object.entries(s)
                 .filter(([e]) => t.includes(e))
                 .map(([e, n], s) => (0, o.jsx)(l, { ...n }, s)),
               }),
              }),
              (0, o.jsx)(i.nA, { className: 'ma-session-table__subject', children: (0, o.jsx)(i.fz, { lang: c.abbr, children: (0, o.jsx)(i.N_, { href: `/events/design-systems-week-2025/${'nl-NL' === e ? 'programma' : 'EN' === c.abbr ? 'en/program' : 'programma'}#${r.toLowerCase().replace(/\s/gi, '-')}`, children: r }) }) }),
              (0, o.jsx)(i.nA, { className: 'ma-session-table__time', children: d && (0, o.jsxs)(i.vx, { href: d, download: d, 'aria-labelledby': 'ical-description', children: [(0, o.jsx)(i.In, { children: (0, o.jsx)(a.A, {}) }), ' ', (0, o.jsxs)('span', { id: 'ical-description', className: 'sr-only', children: ['iCal file for ', (0, o.jsx)('span', { lang: c.abbr, children: r }), '(download)'] })] }) }),
             ],
            },
            g,
           ),
         ),
        }),
       ],
      }),
     });
  },
  24142(e, n, s) {
   s.d(n, { K: () => t.e2 });
   var t = s(29181);
  },
  32385(e, n, s) {
   s.d(n, { bo: () => a, KF: () => g, mJ: () => k, VZ: () => x, cR: () => w, Pv: () => u, qZ: () => r, kD: () => f, QQ: () => N, B2: () => h, Pc: () => l, f4: () => o, GT: () => y, fX: () => i, eQ: () => v, B_: () => j, o_: () => b });
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
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    g = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return m(c(n));
    },
    h = (e, n) => k(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: s }) => '' !== s && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    k = (e) => m(c(e.projects.flatMap((e) => p(e)))),
    u = (e) => {
     const n = p(e),
      s = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: s }) => '' !== s && e.includes(n))
       .map(({ name: t, id: a, value: i }) => {
        const r = /^(.+) URL/.exec(t)[1],
         o = 'Storybook' === r ? `${s} (${n}) in Storybook van ${e.title}` : `${s} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: a, value: i, description: o };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    b = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function f(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((s) => ('object' == typeof e[s] && null !== e[s] ? f(e[s], [...n, s]) : []));
   }
   function y(e) {
    const n = new Map();
    function s(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || s(e).localeCompare(s(n)));
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
    _ = new Set(['ics', 'json', 'pdf']),
    N = (e) => {
     const n = e.split('/').pop() ?? '',
      s = n.split('.').pop()?.toLowerCase();
     return void 0 !== s && _.has(s);
    };
  },
  34225(e, n, s) {
   s.d(n, { v: () => o });
   var t = s(94309),
    a = s(13526),
    i = s(86070);
   const r = ({ className: e, children: n, purpose: s, iconStart: t, iconEnd: r, href: o }) => (0, i.jsxs)('a', { className: (0, a.A)('nl-button', e, { 'nl-button--primary': 'primary' === s, 'nl-button--secondary': 'secondary' === s, 'nl-button--subtle': 'subtle' === s }), href: o, children: [t && (0, i.jsx)('span', { className: 'nl-button__icon-start', children: t }), (0, i.jsx)('span', { className: 'nl-button__label', children: n }), r && (0, i.jsx)('span', { className: 'nl-button__icon-end', children: r })] }),
    o = globalThis.isAstro
     ? ({ appearance: e, href: n, ...s }) => {
        let t = 'primary';
        return ((t = 'secondary-action' === e ? 'secondary' : t), (0, i.jsx)(r, { purpose: t, href: n, ...s }));
       }
     : ({ appearance: e, ...n }) => (0, i.jsx)(t.F, { className: (0, a.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  53190(e, n, s) {
   (s.r(n), s.d(n, { assets: () => u, contentTitle: () => k, default: () => v, frontMatter: () => p, metadata: () => t, toc: () => b }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/tijdschema","title":"Tijdschema","description":"Tijdschema per dag voor de Design Systems Week 2026","source":"@site/docs/community/events/design-systems-week/tijdschema.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week-2026/tijdschema/","permalink":"/events/design-systems-week-2026/tijdschema/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/tijdschema.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Tijdschema","description":"Tijdschema per dag voor de Design Systems Week 2026","hide_table_of_contents":true,"sidebar_label":"Tijdschema","pagination_label":"Tijdschema","sidebar_position":3,"navigation_order":3,"slug":"/events/design-systems-week-2026/tijdschema/","translations":{"en":"/events/design-systems-week-2026/en/timetable/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 Oktober, online"},"sidebar":"community","previous":{"title":"Programma","permalink":"/events/design-systems-week-2026/programma"},"next":{"title":"About Design Systems Week","permalink":"/events/design-systems-week/en"}}');
   var a = s(86070),
    i = s(18439),
    r = s(34225),
    o = s(24142),
    l = s(59292),
    d = s(64249),
    c = s(790),
    m = s(86109),
    g = s(23288),
    h = s(51130);
   const p = { title: 'Tijdschema', description: 'Tijdschema per dag voor de Design Systems Week 2026', hide_table_of_contents: !0, sidebar_label: 'Tijdschema', pagination_label: 'Tijdschema', sidebar_position: 3, navigation_order: 3, slug: '/events/design-systems-week-2026/tijdschema/', translations: { en: '/events/design-systems-week-2026/en/timetable/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 Oktober, online' },
    k = 'Tijdschema Design Systems Week settings.year',
    u = {},
    b = [
     { value: 'Maandag 26 oktober', id: 'maandag-26-oktober', level: 2 },
     { value: 'Dinsdag 27 oktober', id: 'dinsdag-27-oktober', level: 2 },
     { value: 'Woensdag 28 oktober', id: 'woensdag-28-oktober', level: 2 },
     { value: 'Donderdag 29 oktober', id: 'donderdag-29-oktober', level: 2 },
     { value: 'Organisatie', id: 'organisatie', level: 2 },
     { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
     { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 2 },
    ];
   function j(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', strong: 'strong', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsxs)(n.h1, { id: 'tijdschema-design-systems-week-settingsyear', children: ['Tijdschema Design Systems Week ', h.Ok] }) }), '\n', (0, a.jsx)(l.f, { purpose: 'lead', children: (0, a.jsxs)(n.p, { children: ['NL Design System organiseert in ', h.Ok, ' voor de ', h.nl.Z, ' keer de Design Systems Week. Van', ' ', '\n', (0, a.jsx)('strong', { children: h.nl.M }), ' zijn er dagelijks meerdere korte sessies van diverse organisaties online te\nvolgen over het ', (0, a.jsx)(n.strong, { children: 'hoe en waarom van design systems' }), '.'] }) }), '\n', !h.dF && (0, a.jsx)(o.K, { children: (0, a.jsxs)(r.v, { href: '/events/design-systems-week/', appearance: 'primary-action', children: ['Over Design Systems Week', (0, a.jsx)(d.A, { slot: 'icon-end' })] }) }), '\n', !!h.dF && (0, a.jsx)(a.Fragment, { children: (0, a.jsxs)(o.K, { children: [(0, a.jsxs)(r.v, { href: `/events/design-systems-week-${h.Ok}/programma`, appearance: 'primary-action', children: ['Bekijk het programma', (0, a.jsx)(d.A, { slot: 'icon-end' })] }), !!h.MX && (0, a.jsxs)(r.v, { href: h.MX, appearance: 'secondary-action', children: ['Gebruik Miro', (0, a.jsx)(d.A, { slot: 'icon-end' })] })] }) }), '\n', !h.Ic && (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(l.f, { children: 'Het tijdschema is nog niet definitief. De sessies worden de komende weken verder uitgewerkt en toegevoegd. Houd deze pagina in de gaten voor updates.' }) }), '\n', '\n', (0, a.jsx)(n.h2, { id: 'maandag-26-oktober', children: 'Maandag 26 oktober' }), '\n', (0, a.jsx)(g.F, { lang: 'nl-NL', speakers: m, sessions: c.filter(({ isoDateTime: e }) => e.startsWith(`${h.Ok}-10-26`)) }), '\n', (0, a.jsx)(n.h2, { id: 'dinsdag-27-oktober', children: 'Dinsdag 27 oktober' }), '\n', (0, a.jsx)(g.F, { lang: 'nl-NL', speakers: m, sessions: c.filter(({ isoDateTime: e }) => e.startsWith(`${h.Ok}-10-27`)) }), '\n', (0, a.jsx)(n.h2, { id: 'woensdag-28-oktober', children: 'Woensdag 28 oktober' }), '\n', (0, a.jsx)(g.F, { lang: 'nl-NL', speakers: m, sessions: c.filter(({ isoDateTime: e }) => e.startsWith(`${h.Ok}-10-28`)) }), '\n', (0, a.jsx)(n.h2, { id: 'donderdag-29-oktober', children: 'Donderdag 29 oktober' }), '\n', (0, a.jsx)(g.F, { lang: 'nl-NL', speakers: m, sessions: c.filter(({ isoDateTime: e }) => e.startsWith(`${h.Ok}-10-29`)) }), '\n', !!h.dF && (0, a.jsx)(a.Fragment, { children: (0, a.jsx)('hr', {}) }), '\n', (0, a.jsx)(n.h2, { id: 'organisatie', children: 'Organisatie' }), '\n', (0, a.jsx)(n.p, { children: 'Design Systems Week wordt georganiseerd door het kernteam van NL Design System, vanuit Stichting ICTU, met dank aan het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties.' }), '\n', (0, a.jsx)(n.h2, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, a.jsxs)(n.p, { children: ['Op Design Systems Week is de ', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.nl.md', children: 'NL Design System Code of Conduct' }), ' van toepassing. Je gaat daarmee akkoord als je je aanmeldt of spreekt.'] }), '\n', (0, a.jsx)(n.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, a.jsxs)(n.p, { children: ['We doen ons best Design Systems Week zo toegankelijk als mogelijk te organiseren. Indien je specifieke toegankelijkheidsvragen- of behoeften hebt, schroom niet te mailen met het NL Design System kernteam op ', (0, a.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(j, { ...e }) }) : j(e);
   }
  },
  56561(e, n, s) {
   s.d(n, { f: () => m });
   var t = s(15540),
    a = s(69967),
    i = s(86070),
    r = s(13526),
    o = s(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, n) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      s.push.apply(s, t));
    }
    return s;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var s = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(s), !0).forEach(function (n) {
         (0, t.A)(e, n, s[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
        : d(Object(s)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(s, n));
          });
    }
    return e;
   }
   var m = (0, o.forwardRef)(function (e, n) {
    var s = e.children,
     o = e.className,
     d = e.purpose,
     m = (0, a.A)(e, l);
    return (0, i.jsx)('p', c(c({ className: (0, r.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, m), {}, { children: 'lead' === d ? (0, i.jsx)('b', { className: 'nl-paragraph__lead', children: s }) : s }));
   });
   m.displayName = 'Paragraph';
  },
  59292(e, n, s) {
   s.d(n, { f: () => t.f });
   var t = s(56561);
  },
  64249(e, n, s) {
   s.d(n, { A: () => t });
   const t = (0, s(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  86109(e) {
   e.exports = JSON.parse('{"DrStephDriver":{"name":"Dr Steph Driver","organisation":"Open Library of Humanities","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-DrStephDriver.jpg","alt":"Dr Steph Driver"},"description":{"en":"Steph is the accessibility-specialist developer at the Open Library of Humanities.  As an assistive technology user herself, she is passionate about making open access truly accessible for everyone. She combines deep technical expertise with a passion for education, helping teams develop smarter workflows and innovative accessibility solutions. With a background spanning natural sciences, creative writing, technology and disability-activism, Steph brings a unique perspective to inclusive digital design.","nl":"Steph is ontwikkelaar en specialist op het gebied van toegankelijkheid bij de Open Library of Humanities. Als gebruiker van ondersteunende technologie zet zij zich vol passie in om open access voor iedereen werkelijk toegankelijk te maken. Ze combineert diepgaande technische expertise met een passie voor onderwijs en helpt teams bij het ontwikkelen van slimmere werkprocessen en innovatieve oplossingen voor toegankelijkheid. Met een achtergrond in de natuurwetenschappen, creatief schrijven, technologie en activisme rondom handicaps brengt Steph een uniek perspectief in op inclusief digitaal ontwerp."},"language":"en"},"MarionCouesnon":{"name":"Marion Couesnon","organisation":"Digitalservice GmbH des Bundes","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-MarionCouesnon.jpg","alt":"Marion Couesnon"},"description":{"en":"Marion is an accessibility designer based in Berlin. She has been passionate about design since 2011 and has specialised in accessibility since 2019. She currently works for DigitalService, a company owned by the German federal government. Within the organisation, she implements accessibility practices whilst contributing to the design of services, including the <a target=\\"blank\\" href=\\"https://service.justiz.de\\">Ministry of Justice\u2019s online portal</a>. Outside of work, you might spot Marion at her boxing club or knitting on her sofa.","nl":"Marion is een ontwerper gespecialiseerd in toegankelijkheid, gevestigd in Berlijn. Ze is sinds 2011 gepassioneerd door design en heeft zich sinds 2019 toegelegd op toegankelijkheid. Momenteel werkt ze bij DigitalService, een bedrijf dat eigendom is van de Duitse federale overheid. Binnen de organisatie implementeert ze toegankelijkheidsmaatregelen en draagt ze bij aan het ontwerp van diensten, waaronder het <a target=\\"blank\\" href=\\"https://service.justiz.de\\">online portaal van het ministerie van Justitie</a>. Buiten haar werk kun je Marion tegenkomen bij haar boksclub of breiend op de bank."},"language":"en"},"EricVanMullekom":{"name":"Eric van Mullekom","organisation":"Kadaster","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-EricVanMullekom.jpg","alt":"Eric van Mullekom"},"description":{"nl":"Erik is sinds 2000 als projectmanager/product owner betrokken bij softwareontwikkeling, met oog voor techniek en gebruikersgemak. Bij het Kadaster is hij als Product Owner verantwoordelijk voor <a target=\\"blank\\" href=\\"https://generiekegeocomponenten.nl\\">generiekegeocomponenten.nl</a>, <a target=\\"blank\\" href=\\"https://kaartenvannederland.nl\\">kaartenvannederland.nl</a> en <a target=\\"blank\\" href=\\"https://verbeterdekaart.nl\\">terugmeldsysteem (o.a. verbeterdekaart.nl)</a>."},"language":"nl"},"MiekeTenDam":{"name":"Mieke ten Dam","organisation":"Kadaster","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-MiekeTenDam.jpg","alt":"Mieke ten Dam"},"description":{"nl":"Mieke werkt sinds 2019 bij het Kadaster als software engineer, met digitale toegankelijkheid als specialisme. Haar scrumteam ontwikkelt en beheert diverse websites, portals en applicaties, waaronder <a target=\\"blank\\" href=\\"https://www.kadaster.nl\\">www.kadaster.nl</a>, <a target=\\"blank\\" href=\\"https://topokaarten.kadaster.nl\\">topokaarten.kadaster.nl</a> en de zakelijke <a target=\\"blank\\" href=\\"https://mijn.kadaster.nl\\">mijn.kadaster.nl</a> omgeving."},"language":"nl"}}');
  },
  90578(e, n, s) {
   s.d(n, { A: () => t });
   const t = (0, s(18652).A)('outline', 'calendar-event', 'CalendarEvent', [
    ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12', key: 'svg-0' }],
    ['path', { d: 'M16 3l0 4', key: 'svg-1' }],
    ['path', { d: 'M8 3l0 4', key: 'svg-2' }],
    ['path', { d: 'M4 11l16 0', key: 'svg-3' }],
    ['path', { d: 'M8 15h2v2h-2l0 -2', key: 'svg-4' }],
   ]);
  },
  94309(e, n, s) {
   s.d(n, { F: () => r, N: () => o });
   var t = s(13526),
    a = s(32385),
    i = s(86070);
   const r = ({ children: e, ...n }) => {
     const { to: s, href: t, ...r } = n;
     let o = s || t;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, a.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: o, ...r, children: e }));
    },
    o = ({ className: e, ...n }) => (0, i.jsx)(r, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
