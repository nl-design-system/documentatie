/*! For license information please see fddd8b30.c627e240.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [21242],
 {
  790(e) {
   e.exports = [];
  },
  18439(e, n, t) {
   t.d(n, { R: () => i, x: () => o });
   var s = t(30758);
   const a = {},
    r = s.createContext(a);
   function i(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : i(e.components)), s.createElement(r.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, t) {
   t.d(n, { A: () => r });
   var s = t(30758),
    a = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const r = (e, n, t, r) => {
    const i = (0, s.forwardRef)(({ color: t = 'currentColor', size: i = 24, stroke: o = 2, title: l, className: d, children: c, ...m }, g) => (0, s.createElement)('svg', { ref: g, ...a[e], width: i, height: i, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: o, stroke: t }), ...m }, [l && (0, s.createElement)('title', { key: 'svg-title' }, l), ...r.map(([e, n]) => (0, s.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((i.displayName = `${t}`), i);
   };
  },
  24142(e, n, t) {
   t.d(n, { K: () => s.e2 });
   var s = t(29181);
  },
  32385(e, n, t) {
   t.d(n, { bo: () => a, KF: () => g, mJ: () => u, VZ: () => S, cR: () => w, Pv: () => k, qZ: () => i, kD: () => b, QQ: () => _, B2: () => p, Pc: () => l, f4: () => o, GT: () => v, fX: () => r, eQ: () => f, B_: () => y, o_: () => j });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    g = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return m(c(n));
    },
    p = (e, n) => u(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => m(c(e.projects.flatMap((e) => h(e)))),
    k = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const s = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: s, id: a, value: r }) => {
        const i = /^(.+) URL/.exec(s)[1],
         o = 'Storybook' === i ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: s, id: a, value: r, description: o };
       });
      return { frameworkName: n, tasks: s };
     });
    },
    j = (e) => e.join('.'),
    y = (e) => '--' + e.join('-'),
    f = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function v(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const w = () => {
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
    O = new Set(['ics', 'json', 'pdf']),
    _ = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && O.has(t);
    };
  },
  34225(e, n, t) {
   t.d(n, { v: () => o });
   var s = t(94309),
    a = t(13526),
    r = t(86070);
   const i = ({ className: e, children: n, purpose: t, iconStart: s, iconEnd: i, href: o }) => (0, r.jsxs)('a', { className: (0, a.A)('nl-button', e, { 'nl-button--primary': 'primary' === t, 'nl-button--secondary': 'secondary' === t, 'nl-button--subtle': 'subtle' === t }), href: o, children: [s && (0, r.jsx)('span', { className: 'nl-button__icon-start', children: s }), (0, r.jsx)('span', { className: 'nl-button__label', children: n }), i && (0, r.jsx)('span', { className: 'nl-button__icon-end', children: i })] }),
    o = globalThis.isAstro
     ? ({ appearance: e, href: n, ...t }) => {
        let s = 'primary';
        return ((s = 'secondary-action' === e ? 'secondary' : s), (0, r.jsx)(i, { purpose: s, href: n, ...t }));
       }
     : ({ appearance: e, ...n }) => (0, r.jsx)(s.F, { className: (0, a.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  53190(e, n, t) {
   (t.r(n), t.d(n, { assets: () => p, contentTitle: () => g, default: () => k, frontMatter: () => m, metadata: () => s, toc: () => h }));
   const s = JSON.parse('{"id":"community/events/design-systems-week/tijdschema","title":"Tijdschema","description":"Tijdschema per dag voor de Design Systems Week 2026","source":"@site/docs/community/events/design-systems-week/tijdschema.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week-2026/tijdschema/","permalink":"/events/design-systems-week-2026/tijdschema/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/tijdschema.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Tijdschema","description":"Tijdschema per dag voor de Design Systems Week 2026","hide_table_of_contents":true,"sidebar_label":"Tijdschema","pagination_label":"Tijdschema","sidebar_position":3,"navigation_order":3,"slug":"/events/design-systems-week-2026/tijdschema/","translations":{"en":"/events/design-systems-week-2026/en/timetable/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 Oktober, online"},"sidebar":"community","previous":{"title":"Programma","permalink":"/events/design-systems-week-2026/programma"},"next":{"title":"About Design Systems Week","permalink":"/events/design-systems-week/en"}}');
   var a = t(86070),
    r = t(18439),
    i = t(34225),
    o = t(24142),
    l = t(59292),
    d = t(64249),
    c = (t(790), t(86109), t(59541), t(51130));
   const m = { title: 'Tijdschema', description: 'Tijdschema per dag voor de Design Systems Week 2026', hide_table_of_contents: !0, sidebar_label: 'Tijdschema', pagination_label: 'Tijdschema', sidebar_position: 3, navigation_order: 3, slug: '/events/design-systems-week-2026/tijdschema/', translations: { en: '/events/design-systems-week-2026/en/timetable/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 Oktober, online' },
    g = 'Tijdschema Design Systems Week settings.year',
    p = {},
    h = [
     { value: 'Organisatie', id: 'organisatie', level: 2 },
     { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
     { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 2 },
    ];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsxs)(n.h1, { id: 'tijdschema-design-systems-week-settingsyear', children: ['Tijdschema Design Systems Week ', c.Ok] }) }), '\n', (0, a.jsx)(l.f, { purpose: 'lead', children: (0, a.jsxs)(n.p, { children: ['NL Design System organiseert in ', c.Ok, ' voor de ', c.nl.Z, ' keer de Design Systems Week. Van', ' ', '\n', (0, a.jsx)('strong', { children: c.nl.M }), ' zijn er dagelijks meerdere korte sessies van diverse organisaties online te\nvolgen over het ', (0, a.jsx)(n.strong, { children: 'hoe en waarom van design systems' }), '.'] }) }), '\n', !c.dF && (0, a.jsx)(o.K, { children: (0, a.jsxs)(i.v, { href: '/events/design-systems-week/', appearance: 'primary-action', children: ['Over Design Systems Week', (0, a.jsx)(d.A, { slot: 'icon-end' })] }) }), '\n', !!c.dF && (0, a.jsx)(a.Fragment, { children: (0, a.jsxs)(o.K, { children: [(0, a.jsxs)(i.v, { href: `/events/design-systems-week-${c.Ok}/programma`, appearance: 'primary-action', children: ['Bekijk het programma', (0, a.jsx)(d.A, { slot: 'icon-end' })] }), !!c.MX && (0, a.jsxs)(i.v, { href: c.MX, appearance: 'secondary-action', children: ['Gebruik Miro', (0, a.jsx)(d.A, { slot: 'icon-end' })] })] }) }), '\n', '\n', '\n', '\n', !!c.dF && (0, a.jsx)(a.Fragment, { children: (0, a.jsx)('hr', {}) }), '\n', (0, a.jsx)(n.h2, { id: 'organisatie', children: 'Organisatie' }), '\n', (0, a.jsx)(n.p, { children: 'Design Systems Week wordt georganiseerd door het kernteam van NL Design System, vanuit Stichting ICTU, met dank aan het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties.' }), '\n', (0, a.jsx)(n.h2, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, a.jsxs)(n.p, { children: ['Op Design Systems Week is de ', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.nl.md', children: 'NL Design System Code of Conduct' }), ' van toepassing. Je gaat daarmee akkoord als je je aanmeldt of spreekt.'] }), '\n', (0, a.jsx)(n.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, a.jsxs)(n.p, { children: ['We doen ons best Design Systems Week zo toegankelijk als mogelijk te organiseren. Indien je specifieke toegankelijkheidsvragen- of behoeften hebt, schroom niet te mailen met het NL Design System kernteam op ', (0, a.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(u, { ...e }) }) : u(e);
   }
  },
  56561(e, n, t) {
   t.d(n, { f: () => m });
   var s = t(15540),
    a = t(69967),
    r = t(86070),
    i = t(13526),
    o = t(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     (n &&
      (s = s.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, s));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, s.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var m = (0, o.forwardRef)(function (e, n) {
    var t = e.children,
     o = e.className,
     d = e.purpose,
     m = (0, a.A)(e, l);
    return (0, r.jsx)('p', c(c({ className: (0, i.$)('nl-paragraph', (0, s.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, m), {}, { children: 'lead' === d ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   m.displayName = 'Paragraph';
  },
  59292(e, n, t) {
   t.d(n, { f: () => s.f });
   var s = t(56561);
  },
  59541(e, n, t) {
   (t(46447), t(86070));
  },
  64249(e, n, t) {
   t.d(n, { A: () => s });
   const s = (0, t(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  86109(e) {
   e.exports = {};
  },
  94309(e, n, t) {
   t.d(n, { F: () => i, N: () => o });
   var s = t(13526),
    a = t(32385),
    r = t(86070);
   const i = ({ children: e, ...n }) => {
     const { to: t, href: s, ...i } = n;
     let o = t || s;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, a.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((i.target = '_blank'), (i.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: o, ...i, children: e }));
    },
    o = ({ className: e, ...n }) => (0, r.jsx)(i, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
