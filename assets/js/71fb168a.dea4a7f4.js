/*! For license information please see 71fb168a.dea4a7f4.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [31399],
 {
  18439(e, n, s) {
   s.d(n, { R: () => o, x: () => a });
   var t = s(30758);
   const i = {},
    r = t.createContext(i);
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, s) {
   s.d(n, { A: () => r });
   var t = s(30758),
    i = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const r = (e, n, s, r) => {
    const o = (0, t.forwardRef)(({ color: s = 'currentColor', size: o = 24, stroke: a = 2, title: l, className: c, children: d, ...m }, g) => (0, t.createElement)('svg', { ref: g, ...i[e], width: o, height: o, className: ['tabler-icon', `tabler-icon-${n}`, c].join(' '), ...('filled' === e ? { fill: s } : { strokeWidth: a, stroke: s }), ...m }, [l && (0, t.createElement)('title', { key: 'svg-title' }, l), ...r.map(([e, n]) => (0, t.createElement)(e, n)), ...(Array.isArray(d) ? d : [d])]));
    return ((o.displayName = `${s}`), o);
   };
  },
  18945(e, n, s) {
   (s.r(n), s.d(n, { assets: () => u, contentTitle: () => g, default: () => f, frontMatter: () => m, isUpComingOrHappening: () => p, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/index","title":"Design Systems Week - English","description":"Design Systems Week is an online event organized by NL Design System with several short sessions about the ins and outs of design systems","source":"@site/docs/community/events/design-systems-week/en/index.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en","permalink":"/events/design-systems-week/en","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/index.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Design Systems Week - English","description":"Design Systems Week is an online event organized by NL Design System with several short sessions about the ins and outs of design systems","lang":"en","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"About Design Systems Week","pagination_label":"About Design Systems Week","sidebar_position":1,"navigation_order":1,"slug":"/events/design-systems-week/en","translations":{"nl":"/events/design-systems-week/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 October, online"},"sidebar":"community","previous":{"title":"Tijdschema","permalink":"/events/design-systems-week-2026/tijdschema/"},"next":{"title":"About Design Systems Week","permalink":"/events/design-systems-week/en"}}');
   var i = s(86070),
    r = s(18439),
    o = s(64249),
    a = s(34225),
    l = s(24142),
    c = s(59292),
    d = s(51130);
   const m = { title: 'Design Systems Week - English', description: 'Design Systems Week is an online event organized by NL Design System with several short sessions about the ins and outs of design systems', lang: 'en', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'About Design Systems Week', pagination_label: 'About Design Systems Week', sidebar_position: 1, navigation_order: 1, slug: '/events/design-systems-week/en', translations: { nl: '/events/design-systems-week/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 October, online' },
    g = 'Design Systems Week',
    u = {},
    p = !!d.p$ || !!d.dF,
    h = [
     { value: 'Previous editions', id: 'previous-editions', level: 2 },
     { value: 'Organisation', id: 'organisation', level: 2 },
     { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
     { value: 'Accessibility', id: 'accessibility', level: 2 },
    ];
   function y(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'design-systems-week', children: 'Design Systems Week' }) }), '\n', !!p && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(c.f, { purpose: 'lead', children: ['NL Design System is organising the Design Systems Week for the ', d.en.Z, ' time. It will feature a number of short talks about the how and why of design systems. All online. From ', d.en.M, ', we will cover subjects like managing design systems, integrating accessibility, user research and code.'] }), (0, i.jsxs)(l.K, { children: [(0, i.jsxs)(a.v, { href: '/events/design-systems-week/en/sign-up', appearance: 'primary-action', children: ['Sign up', (0, i.jsx)(o.A, { slot: 'icon-end' })] }), (0, i.jsxs)(a.v, { href: `/events/design-systems-week-${d.Ok}/en/program`, appearance: 'secondary-action', children: ['View the Program', (0, i.jsx)(o.A, { slot: 'icon-end' })] })] })] }), '\n', !p && (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(c.f, { purpose: 'lead', children: 'Design Systems Week is an online event organized by NL Design System. During this week, several short sessions are offered in which various (international) organizations share how and why they use design systems. The goal is to bring together designers, developers, and other professionals working on digital government services to exchange experiences and best practices.' }) }), '\n', (0, i.jsx)(n.hr, {}), '\n', (0, i.jsx)(n.h2, { id: 'previous-editions', children: 'Previous editions' }), '\n', !!p && `This is the ${d.en.Z} year that NL Design System is organizing Design Systems Week. Can't wait? Then check out the videos from previous years!`, '\n', !p && 'Check out the videos from previous years.', '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/events/design-systems-week-2025/en/program/', children: 'Design Systems Week 2025' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/events/design-systems-week-2024/en/program/', children: 'Design Systems Week 2024' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/events/design-systems-week-2023/en/program/', children: 'Design Systems Week 2023' }) }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'organisation', children: 'Organisation' }), '\n', (0, i.jsx)(n.p, { children: 'Design Systems Week is organised by the NL Design System core team.' }), '\n', (0, i.jsx)(n.p, { children: 'At NL Design System, web professionals from across the government collaborate on building blocks for websites and applications, like code, design and guidelines. The project is managed by ICTU for the Dutch Ministry of the Interior and Kingdom Relations.' }), '\n', (0, i.jsx)(n.h2, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, i.jsxs)(n.p, { children: ['All participants of Design Systems Week are expected to abide by our ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.md', children: 'NL Design System Code of Conduct' }), " van toepassing. By signing up for one or more sessions you've agreed to these terms."] }), '\n', (0, i.jsx)(n.h2, { id: 'accessibility', children: 'Accessibility' }), '\n', (0, i.jsxs)(n.p, { children: ['We do our best to organise Design Systems Week accessibly. If you have specific questions or requests, please do reach to the NL Design System core team at ', (0, i.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(y, { ...e }) }) : y(e);
   }
  },
  24142(e, n, s) {
   s.d(n, { K: () => t.e2 });
   var t = s(29181);
  },
  32385(e, n, s) {
   s.d(n, { bo: () => i, KF: () => g, mJ: () => h, VZ: () => j, cR: () => S, Pv: () => y, qZ: () => o, kD: () => k, QQ: () => x, B2: () => u, Pc: () => l, f4: () => a, GT: () => w, fX: () => r, eQ: () => v, B_: () => b, o_: () => f });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    g = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return m(d(n));
    },
    u = (e, n) => h(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(d(e.tasks.filter(({ name: e, value: s }) => '' !== s && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => m(d(e.projects.flatMap((e) => p(e)))),
    y = (e) => {
     const n = p(e),
      s = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: s }) => '' !== s && e.includes(n))
       .map(({ name: t, id: i, value: r }) => {
        const o = /^(.+) URL/.exec(t)[1],
         a = 'Storybook' === o ? `${s} (${n}) in Storybook van ${e.title}` : `${s} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: t, id: i, value: r, description: a };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    f = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function k(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((s) => ('object' == typeof e[s] && null !== e[s] ? k(e[s], [...n, s]) : []));
   }
   function w(e) {
    const n = new Map();
    function s(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || s(e).localeCompare(s(n)));
   }
   const S = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    j = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    D = new Set(['ics', 'json', 'pdf']),
    x = (e) => {
     const n = e.split('/').pop() ?? '',
      s = n.split('.').pop()?.toLowerCase();
     return void 0 !== s && D.has(s);
    };
  },
  34225(e, n, s) {
   s.d(n, { v: () => a });
   var t = s(94309),
    i = s(13526),
    r = s(86070);
   const o = ({ className: e, children: n, purpose: s, iconStart: t, iconEnd: o, href: a }) => (0, r.jsxs)('a', { className: (0, i.A)('nl-button', e, { 'nl-button--primary': 'primary' === s, 'nl-button--secondary': 'secondary' === s, 'nl-button--subtle': 'subtle' === s }), href: a, children: [t && (0, r.jsx)('span', { className: 'nl-button__icon-start', children: t }), (0, r.jsx)('span', { className: 'nl-button__label', children: n }), o && (0, r.jsx)('span', { className: 'nl-button__icon-end', children: o })] }),
    a = globalThis.isAstro
     ? ({ appearance: e, href: n, ...s }) => {
        let t = 'primary';
        return ((t = 'secondary-action' === e ? 'secondary' : t), (0, r.jsx)(o, { purpose: t, href: n, ...s }));
       }
     : ({ appearance: e, ...n }) => (0, r.jsx)(t.F, { className: (0, i.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  41534(e, n, s) {
   function t(e, n) {
    if (null == e) return {};
    var s,
     t,
     i = (function (e, n) {
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
     var r = Object.getOwnPropertySymbols(e);
     for (t = 0; t < r.length; t++) ((s = r[t]), -1 === n.indexOf(s) && {}.propertyIsEnumerable.call(e, s) && (i[s] = e[s]));
    }
    return i;
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
   function i(e) {
    var n = (function (e, n) {
     if ('object' != t(e) || !e) return e;
     var s = e[Symbol.toPrimitive];
     if (void 0 !== s) {
      var i = s.call(e, n || 'default');
      if ('object' != t(i)) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == t(n) ? n : n + '';
   }
   function r(e, n, s) {
    return ((n = i(n)) in e ? Object.defineProperty(e, n, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = s), e);
   }
   s.d(n, { A: () => r });
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
    i = s(41534),
    r = s(86070),
    o = s(13526),
    a = s(30758),
    l = ['children', 'className', 'purpose'];
   function c(e, n) {
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
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var s = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? c(Object(s), !0).forEach(function (n) {
         (0, t.A)(e, n, s[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
        : c(Object(s)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(s, n));
          });
    }
    return e;
   }
   var m = (0, a.forwardRef)(function (e, n) {
    var s = e.children,
     a = e.className,
     c = e.purpose,
     m = (0, i.A)(e, l);
    return (0, r.jsx)('p', d(d({ className: (0, o.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === c), a), ref: n }, m), {}, { children: 'lead' === c ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: s }) : s }));
   });
   m.displayName = 'Paragraph';
  },
  94309(e, n, s) {
   s.d(n, { F: () => o, N: () => a });
   var t = s(13526),
    i = s(32385),
    r = s(86070);
   const o = ({ children: e, ...n }) => {
     const { to: s, href: t, ...o } = n;
     let a = s || t;
     const l = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, i.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (a = l.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: a, ...o, children: e }));
    },
    a = ({ className: e, ...n }) => (0, r.jsx)(o, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
