/*! For license information please see ab29330a.d6f47c66.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [85130],
 {
  18439(e, n, s) {
   s.d(n, { R: () => o, x: () => a });
   var t = s(30758);
   const r = {},
    i = t.createContext(r);
   function o(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(i.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, s) {
   s.d(n, { A: () => i });
   var t = s(30758),
    r = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const i = (e, n, s, i) => {
    const o = (0, t.forwardRef)(({ color: s = 'currentColor', size: o = 24, stroke: a = 2, title: l, className: d, children: c, ...m }, g) => (0, t.createElement)('svg', { ref: g, ...r[e], width: o, height: o, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: s } : { strokeWidth: a, stroke: s }), ...m }, [l && (0, t.createElement)('title', { key: 'svg-title' }, l), ...i.map(([e, n]) => (0, t.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((o.displayName = `${s}`), o);
   };
  },
  24142(e, n, s) {
   s.d(n, { K: () => t.e2 });
   var t = s(29181);
  },
  32385(e, n, s) {
   s.d(n, { bo: () => r, KF: () => g, mJ: () => h, VZ: () => S, cR: () => w, Pv: () => y, qZ: () => o, kD: () => b, QQ: () => O, B2: () => p, Pc: () => l, f4: () => a, GT: () => j, fX: () => i, eQ: () => k, B_: () => v, o_: () => f });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
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
    g = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return m(c(n));
    },
    p = (e, n) => h(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: s }) => '' !== s && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => m(c(e.projects.flatMap((e) => u(e)))),
    y = (e) => {
     const n = u(e),
      s = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: s }) => '' !== s && e.includes(n))
       .map(({ name: t, id: r, value: i }) => {
        const o = /^(.+) URL/.exec(t)[1],
         a = 'Storybook' === o ? `${s} (${n}) in Storybook van ${e.title}` : `${s} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: t, id: r, value: i, description: a };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    f = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((s) => ('object' == typeof e[s] && null !== e[s] ? b(e[s], [...n, s]) : []));
   }
   function j(e) {
    const n = new Map();
    function s(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || s(e).localeCompare(s(n)));
   }
   const w = () => {
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
    D = new Set(['ics', 'json', 'pdf']),
    O = (e) => {
     const n = e.split('/').pop() ?? '',
      s = n.split('.').pop()?.toLowerCase();
     return void 0 !== s && D.has(s);
    };
  },
  34225(e, n, s) {
   s.d(n, { v: () => a });
   var t = s(94309),
    r = s(13526),
    i = s(86070);
   const o = ({ className: e, children: n, purpose: s, iconStart: t, iconEnd: o, href: a }) => (0, i.jsxs)('a', { className: (0, r.A)('nl-button', e, { 'nl-button--primary': 'primary' === s, 'nl-button--secondary': 'secondary' === s, 'nl-button--subtle': 'subtle' === s }), href: a, children: [t && (0, i.jsx)('span', { className: 'nl-button__icon-start', children: t }), (0, i.jsx)('span', { className: 'nl-button__label', children: n }), o && (0, i.jsx)('span', { className: 'nl-button__icon-end', children: o })] }),
    a = globalThis.isAstro
     ? ({ appearance: e, href: n, ...s }) => {
        let t = 'primary';
        return ((t = 'secondary-action' === e ? 'secondary' : t), (0, i.jsx)(o, { purpose: t, href: n, ...s }));
       }
     : ({ appearance: e, ...n }) => (0, i.jsx)(t.F, { className: (0, r.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  36625(e, n, s) {
   (s.r(n), s.d(n, { assets: () => p, contentTitle: () => g, default: () => f, frontMatter: () => m, isUpComingOrHappening: () => u, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/index","title":"Design Systems Week","description":"Een online evenement georganiseerd door NL Design System met verschillende korte sessies over alles rondom design systems","source":"@site/docs/community/events/design-systems-week/index.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week","permalink":"/events/design-systems-week","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/index.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Design Systems Week","description":"Een online evenement georganiseerd door NL Design System met verschillende korte sessies over alles rondom design systems","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Over Design Systems Week","pagination_label":"Over Design Systems Week","sidebar_position":1,"navigation_order":1,"slug":"/events/design-systems-week","translations":{"en":"/events/design-systems-week/en/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 Oktober, online"},"sidebar":"community","previous":{"title":"Estafettemodeldag","permalink":"/community/events/estafettemodeldag"},"next":{"title":"Over Design Systems Week","permalink":"/events/design-systems-week"}}');
   var r = s(86070),
    i = s(18439),
    o = s(64249),
    a = s(34225),
    l = s(24142),
    d = s(59292),
    c = s(51130);
   const m = { title: 'Design Systems Week', description: 'Een online evenement georganiseerd door NL Design System met verschillende korte sessies over alles rondom design systems', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Over Design Systems Week', pagination_label: 'Over Design Systems Week', sidebar_position: 1, navigation_order: 1, slug: '/events/design-systems-week', translations: { en: '/events/design-systems-week/en/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 Oktober, online' },
    g = 'Design Systems Week',
    p = {},
    u = !!c.p$ || !!c.dF,
    h = [
     { value: 'Eerdere edities', id: 'eerdere-edities', level: 2 },
     { value: 'Organisatie', id: 'organisatie', level: 2 },
     { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
     { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 2 },
    ];
   function y(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'design-systems-week', children: 'Design Systems Week' }) }), '\n', !!u && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(d.f, { purpose: 'lead', children: ['NL Design System organiseert in ', c.Ok, ' voor de ', c.nl.Z, ' keer de Design Systems Week. Van', ' ', (0, r.jsx)('strong', { children: c.nl.M }), ' zijn er dagelijks meerdere korte sessies van diverse organisaties online te volgen over het ', (0, r.jsx)('strong', { children: 'hoe en waarom van design systems' }), '.'] }), (0, r.jsxs)(l.K, { children: [(0, r.jsxs)(a.v, { href: '/events/design-systems-week/aanmelden', appearance: 'primary-action', children: ['Meld je aan', (0, r.jsx)(o.A, { slot: 'icon-end' })] }), (0, r.jsxs)(a.v, { href: `/events/design-systems-week-${c.Ok}/programma`, appearance: 'secondary-action', children: ['Bekijk het programma', (0, r.jsx)(o.A, { slot: 'icon-end' })] })] })] }), '\n', !u && (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(d.f, { purpose: 'lead', children: 'Design Systems Week is een online evenement georganiseerd door NL Design System. Tijdens deze week worden meerdere korte sessies aangeboden waarin diverse (internationale) organisaties delen hoe en waarom ze design systems inzetten. Het doel is om designers, developers of andere professionals die werken aan digitale diensten voor de overheid samen te brengen om ervaringen en best practices uit te wisselen.' }) }), '\n', (0, r.jsx)(n.hr, {}), '\n', (0, r.jsx)(n.h2, { id: 'eerdere-edities', children: 'Eerdere edities' }), '\n', !!u && `Dit is het ${c.nl.Z} jaar dat NL Design System de Design Systems Week organiseert. Kun je niet wachten? Kijk dan de video's van voorgaande jaren terug!`, '\n', !u && "Kijk de video's van afgelopen jaren terug.", '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/events/design-systems-week-2025/programma/', children: 'Design Systems Week 2025' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/events/design-systems-week-2024/programma/', children: 'Design Systems Week 2024' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/events/design-systems-week-2023/programma/', children: 'Design Systems Week 2023' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/events/design-systems-week-2022/', children: 'Design Systems Week 2022' }) }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'organisatie', children: 'Organisatie' }), '\n', (0, r.jsx)(n.p, { children: 'Design Systems Week wordt georganiseerd door het kernteam van NL Design System.' }), '\n', (0, r.jsxs)(n.p, { children: ['NL Design System is een project dat specialisten van verschillende overheidsorganisaties laat samenwerken aan concrete oplossingen voor websites en applicaties. Denk bijvoorbeeld aan code, ontwerp en richtlijnen. Het project wordt uitgevoerd door ICTU, in opdracht van het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties. Zie ook: meer ', (0, r.jsx)(n.a, { href: '/project/over-nl-design-system/', children: 'over NL Design System' }), ' en ', (0, r.jsx)(n.a, { href: '/project/faq/', children: 'Veelgestelde vragen' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, r.jsxs)(n.p, { children: ['Op Design Systems Week is de ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.nl.md', children: 'NL Design System Code of Conduct' }), ' van toepassing. Je gaat daarmee akkoord als je je aanmeldt of spreekt.'] }), '\n', (0, r.jsx)(n.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, r.jsxs)(n.p, { children: ['We doen ons best Design Systems Week zo toegankelijk als mogelijk te organiseren. Indien je specifieke toegankelijkheidsvragen- of behoeften hebt, schroom niet te mailen met het NL Design System kernteam op ', (0, r.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y(e);
   }
  },
  41534(e, n, s) {
   function t(e, n) {
    if (null == e) return {};
    var s,
     t,
     r = (function (e, n) {
      if (null == e) return {};
      var s = {};
      for (var t in e)
       if ({}.hasOwnProperty.call(e, t)) {
        if (-1 !== n.indexOf(t)) continue;
        s[t] = e[t];
       }
      return s;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (t = 0; t < i.length; t++) ((s = i[t]), -1 === n.indexOf(s) && {}.propertyIsEnumerable.call(e, s) && (r[s] = e[s]));
    }
    return r;
   }
   s.d(n, { A: () => t });
  },
  48171(e, n, s) {
   function t(e) {
    return (
     (t =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     t(e)
    );
   }
   function r(e) {
    var n = (function (e, n) {
     if ('object' != t(e) || !e) return e;
     var s = e[Symbol.toPrimitive];
     if (void 0 !== s) {
      var r = s.call(e, n || 'default');
      if ('object' != t(r)) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == t(n) ? n : n + '';
   }
   function i(e, n, s) {
    return ((n = r(n)) in e ? Object.defineProperty(e, n, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = s), e);
   }
   s.d(n, { A: () => i });
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  59292(e, n, s) {
   s.d(n, { f: () => t.f });
   var t = s(71544);
  },
  64249(e, n, s) {
   s.d(n, { A: () => t });
   const t = (0, s(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  71544(e, n, s) {
   s.d(n, { f: () => m });
   var t = s(48171),
    r = s(41534),
    i = s(86070),
    o = s(13526),
    a = s(30758),
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
   var m = (0, a.forwardRef)(function (e, n) {
    var s = e.children,
     a = e.className,
     d = e.purpose,
     m = (0, r.A)(e, l);
    return (0, i.jsx)('p', c(c({ className: (0, o.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), a), ref: n }, m), {}, { children: 'lead' === d ? (0, i.jsx)('b', { className: 'nl-paragraph__lead', children: s }) : s }));
   });
   m.displayName = 'Paragraph';
  },
  94309(e, n, s) {
   s.d(n, { F: () => o, N: () => a });
   var t = s(13526),
    r = s(32385),
    i = s(86070);
   const o = ({ children: e, ...n }) => {
     const { to: s, href: t, ...o } = n;
     let a = s || t;
     const l = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, r.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (a = l.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: a, ...o, children: e }));
    },
    a = ({ className: e, ...n }) => (0, i.jsx)(o, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
