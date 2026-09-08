/*! For license information please see fddd8b30.7ff13889.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [21242],
 {
  790(e) {
   e.exports = [];
  },
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => a });
   var s = t(30758);
   const r = {},
    i = s.createContext(r);
   function o(e) {
    const n = s.useContext(i);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), s.createElement(i.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, t) {
   t.d(n, { A: () => i });
   var s = t(30758),
    r = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const i = (e, n, t, i) => {
    const o = (0, s.forwardRef)(({ color: t = 'currentColor', size: o = 24, stroke: a = 2, title: l, className: d, children: c, ...m }, p) => (0, s.createElement)('svg', { ref: p, ...r[e], width: o, height: o, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: t } : { strokeWidth: a, stroke: t }), ...m }, [l && (0, s.createElement)('title', { key: 'svg-title' }, l), ...i.map(([e, n]) => (0, s.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((o.displayName = `${t}`), o);
   };
  },
  24142(e, n, t) {
   t.d(n, { K: () => s.e2 });
   var s = t(29181);
  },
  32385(e, n, t) {
   t.d(n, { bo: () => r, KF: () => p, mJ: () => h, VZ: () => S, cR: () => w, Pv: () => f, qZ: () => o, kD: () => v, QQ: () => x, B2: () => g, Pc: () => l, f4: () => a, GT: () => j, fX: () => i, eQ: () => k, B_: () => b, o_: () => y });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    p = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return m(c(n));
    },
    g = (e, n) => h(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => m(c(e.projects.flatMap((e) => u(e)))),
    f = (e) => {
     const n = u(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const s = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: s, id: r, value: i }) => {
        const o = /^(.+) URL/.exec(s)[1],
         a = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: s, id: r, value: i, description: a };
       });
      return { frameworkName: n, tasks: s };
     });
    },
    y = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? v(e[t], [...n, t]) : []));
   }
   function j(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, y(e)), n.get(e));
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
    x = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && O.has(t);
    };
  },
  34225(e, n, t) {
   t.d(n, { v: () => a });
   var s = t(94309),
    r = t(13526),
    i = t(86070);
   const o = ({ className: e, children: n, purpose: t, iconStart: s, iconEnd: o, href: a }) => (0, i.jsxs)('a', { className: (0, r.A)('nl-button', e, { 'nl-button--primary': 'primary' === t, 'nl-button--secondary': 'secondary' === t, 'nl-button--subtle': 'subtle' === t }), href: a, children: [s && (0, i.jsx)('span', { className: 'nl-button__icon-start', children: s }), (0, i.jsx)('span', { className: 'nl-button__label', children: n }), o && (0, i.jsx)('span', { className: 'nl-button__icon-end', children: o })] }),
    a = globalThis.isAstro
     ? ({ appearance: e, href: n, ...t }) => {
        let s = 'primary';
        return ((s = 'secondary-action' === e ? 'secondary' : s), (0, i.jsx)(o, { purpose: s, href: n, ...t }));
       }
     : ({ appearance: e, ...n }) => (0, i.jsx)(s.F, { className: (0, r.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  41534(e, n, t) {
   function s(e, n) {
    if (null == e) return {};
    var t,
     s,
     r = (function (e, n) {
      if (null == e) return {};
      var t = {};
      for (var s in e)
       if ({}.hasOwnProperty.call(e, s)) {
        if (-1 !== n.indexOf(s)) continue;
        t[s] = e[s];
       }
      return t;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (s = 0; s < i.length; s++) ((t = i[s]), -1 === n.indexOf(t) && {}.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   t.d(n, { A: () => s });
  },
  48171(e, n, t) {
   function s(e) {
    return (
     (s =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     s(e)
    );
   }
   function r(e) {
    var n = (function (e, n) {
     if ('object' != s(e) || !e) return e;
     var t = e[Symbol.toPrimitive];
     if (void 0 !== t) {
      var r = t.call(e, n || 'default');
      if ('object' != s(r)) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == s(n) ? n : n + '';
   }
   function i(e, n, t) {
    return ((n = r(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e);
   }
   t.d(n, { A: () => i });
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  53190(e, n, t) {
   (t.r(n), t.d(n, { assets: () => g, contentTitle: () => p, default: () => f, frontMatter: () => m, metadata: () => s, toc: () => u }));
   const s = JSON.parse('{"id":"community/events/design-systems-week/tijdschema","title":"Tijdschema","description":"Tijdschema per dag voor de Design Systems Week 2026","source":"@site/docs/community/events/design-systems-week/tijdschema.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week-2026/tijdschema/","permalink":"/events/design-systems-week-2026/tijdschema/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/tijdschema.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Tijdschema","description":"Tijdschema per dag voor de Design Systems Week 2026","hide_table_of_contents":true,"sidebar_label":"Tijdschema","pagination_label":"Tijdschema","sidebar_position":3,"navigation_order":3,"slug":"/events/design-systems-week-2026/tijdschema/","translations":{"en":"/events/design-systems-week-2026/en/timetable/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 Oktober, online"},"sidebar":"community","previous":{"title":"Programma","permalink":"/events/design-systems-week-2026/programma"},"next":{"title":"About Design Systems Week","permalink":"/events/design-systems-week/en"}}');
   var r = t(86070),
    i = t(18439),
    o = t(34225),
    a = t(24142),
    l = t(59292),
    d = t(64249),
    c = (t(790), t(86109), t(59541), t(51130));
   const m = { title: 'Tijdschema', description: 'Tijdschema per dag voor de Design Systems Week 2026', hide_table_of_contents: !0, sidebar_label: 'Tijdschema', pagination_label: 'Tijdschema', sidebar_position: 3, navigation_order: 3, slug: '/events/design-systems-week-2026/tijdschema/', translations: { en: '/events/design-systems-week-2026/en/timetable/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 Oktober, online' },
    p = 'Tijdschema Design Systems Week settings.year',
    g = {},
    u = [
     { value: 'Organisatie', id: 'organisatie', level: 2 },
     { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
     { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', strong: 'strong', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsxs)(n.h1, { id: 'tijdschema-design-systems-week-settingsyear', children: ['Tijdschema Design Systems Week ', c.Ok] }) }), '\n', (0, r.jsx)(l.f, { purpose: 'lead', children: (0, r.jsxs)(n.p, { children: ['NL Design System organiseert in ', c.Ok, ' voor de ', c.nl.Z, ' keer de Design Systems Week. Van', ' ', '\n', (0, r.jsx)('strong', { children: c.nl.M }), ' zijn er dagelijks meerdere korte sessies van diverse organisaties online te\nvolgen over het ', (0, r.jsx)(n.strong, { children: 'hoe en waarom van design systems' }), '.'] }) }), '\n', !c.dF && (0, r.jsx)(a.K, { children: (0, r.jsxs)(o.v, { href: '/events/design-systems-week/', appearance: 'primary-action', children: ['Over Design Systems Week', (0, r.jsx)(d.A, { slot: 'icon-end' })] }) }), '\n', !!c.dF && (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)(a.K, { children: [(0, r.jsxs)(o.v, { href: `/events/design-systems-week-${c.Ok}/programma`, appearance: 'primary-action', children: ['Bekijk het programma', (0, r.jsx)(d.A, { slot: 'icon-end' })] }), !!c.MX && (0, r.jsxs)(o.v, { href: c.MX, appearance: 'secondary-action', children: ['Gebruik Miro', (0, r.jsx)(d.A, { slot: 'icon-end' })] })] }) }), '\n', '\n', '\n', '\n', !!c.dF && (0, r.jsx)(r.Fragment, { children: (0, r.jsx)('hr', {}) }), '\n', (0, r.jsx)(n.h2, { id: 'organisatie', children: 'Organisatie' }), '\n', (0, r.jsx)(n.p, { children: 'Design Systems Week wordt georganiseerd door het kernteam van NL Design System, vanuit Stichting ICTU, met dank aan het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties.' }), '\n', (0, r.jsx)(n.h2, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, r.jsxs)(n.p, { children: ['Op Design Systems Week is de ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.nl.md', children: 'NL Design System Code of Conduct' }), ' van toepassing. Je gaat daarmee akkoord als je je aanmeldt of spreekt.'] }), '\n', (0, r.jsx)(n.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, r.jsxs)(n.p, { children: ['We doen ons best Design Systems Week zo toegankelijk als mogelijk te organiseren. Indien je specifieke toegankelijkheidsvragen- of behoeften hebt, schroom niet te mailen met het NL Design System kernteam op ', (0, r.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
  59292(e, n, t) {
   t.d(n, { f: () => s.f });
   var s = t(71544);
  },
  59541(e, n, t) {
   (t(46447), t(86070));
  },
  64249(e, n, t) {
   t.d(n, { A: () => s });
   const s = (0, t(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  71544(e, n, t) {
   t.d(n, { f: () => m });
   var s = t(48171),
    r = t(41534),
    i = t(86070),
    o = t(13526),
    a = t(30758),
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
   var m = (0, a.forwardRef)(function (e, n) {
    var t = e.children,
     a = e.className,
     d = e.purpose,
     m = (0, r.A)(e, l);
    return (0, i.jsx)('p', c(c({ className: (0, o.$)('nl-paragraph', (0, s.A)({}, 'nl-paragraph--lead', 'lead' === d), a), ref: n }, m), {}, { children: 'lead' === d ? (0, i.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   m.displayName = 'Paragraph';
  },
  86109(e) {
   e.exports = {};
  },
  94309(e, n, t) {
   t.d(n, { F: () => o, N: () => a });
   var s = t(13526),
    r = t(32385),
    i = t(86070);
   const o = ({ children: e, ...n }) => {
     const { to: t, href: s, ...o } = n;
     let a = t || s;
     const l = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, r.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (a = l.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: a, ...o, children: e }));
    },
    a = ({ className: e, ...n }) => (0, i.jsx)(o, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
