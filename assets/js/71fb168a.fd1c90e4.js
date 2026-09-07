/*! For license information please see 71fb168a.fd1c90e4.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [31399],
 {
  18439(e, s, n) {
   n.d(s, { R: () => r, x: () => a });
   var t = n(30758);
   const i = {},
    o = t.createContext(i);
   function r(e) {
    const s = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function a(e) {
    let s;
    return ((s = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), t.createElement(o.Provider, { value: s }, e.children));
   }
  },
  18652(e, s, n) {
   n.d(s, { A: () => o });
   var t = n(30758),
    i = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const o = (e, s, n, o) => {
    const r = (0, t.forwardRef)(({ color: n = 'currentColor', size: r = 24, stroke: a = 2, title: l, className: d, children: c, ...m }, g) => (0, t.createElement)('svg', { ref: g, ...i[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${s}`, d].join(' '), ...('filled' === e ? { fill: n } : { strokeWidth: a, stroke: n }), ...m }, [l && (0, t.createElement)('title', { key: 'svg-title' }, l), ...o.map(([e, s]) => (0, t.createElement)(e, s)), ...(Array.isArray(c) ? c : [c])]));
    return ((r.displayName = `${n}`), r);
   };
  },
  18945(e, s, n) {
   (n.r(s), n.d(s, { assets: () => h, contentTitle: () => g, default: () => b, frontMatter: () => m, isUpComingOrHappening: () => p, metadata: () => t, toc: () => u }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/index","title":"Design Systems Week - English","description":"Design Systems Week is an online event organized by NL Design System with several short sessions about the ins and outs of design systems","source":"@site/docs/community/events/design-systems-week/en/index.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en","permalink":"/events/design-systems-week/en","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/index.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Design Systems Week - English","description":"Design Systems Week is an online event organized by NL Design System with several short sessions about the ins and outs of design systems","lang":"en","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"About Design Systems Week","pagination_label":"About Design Systems Week","sidebar_position":1,"navigation_order":1,"slug":"/events/design-systems-week/en","translations":{"nl":"/events/design-systems-week/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 October, online"},"sidebar":"community","previous":{"title":"Tijdschema","permalink":"/events/design-systems-week-2026/tijdschema/"},"next":{"title":"About Design Systems Week","permalink":"/events/design-systems-week/en"}}');
   var i = n(86070),
    o = n(18439),
    r = n(64249),
    a = n(34225),
    l = n(24142),
    d = n(59292),
    c = n(51130);
   const m = { title: 'Design Systems Week - English', description: 'Design Systems Week is an online event organized by NL Design System with several short sessions about the ins and outs of design systems', lang: 'en', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'About Design Systems Week', pagination_label: 'About Design Systems Week', sidebar_position: 1, navigation_order: 1, slug: '/events/design-systems-week/en', translations: { nl: '/events/design-systems-week/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 October, online' },
    g = 'Design Systems Week',
    h = {},
    p = !!c.p$ || !!c.dF,
    u = [
     { value: 'Previous editions', id: 'previous-editions', level: 2 },
     { value: 'Organisation', id: 'organisation', level: 2 },
     { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
     { value: 'Accessibility', id: 'accessibility', level: 2 },
    ];
   function y(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.header, { children: (0, i.jsx)(s.h1, { id: 'design-systems-week', children: 'Design Systems Week' }) }), '\n', !!p && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(d.f, { purpose: 'lead', children: ['NL Design System is organising the Design Systems Week for the ', c.en.Z, ' time. It will feature a number of short talks about the how and why of design systems. All online. From ', c.en.M, ', we will cover subjects like managing design systems, integrating accessibility, user research and code.'] }), (0, i.jsxs)(l.K, { children: [(0, i.jsxs)(a.v, { href: '/events/design-systems-week/en/sign-up', appearance: 'primary-action', children: ['Sign up', (0, i.jsx)(r.A, { slot: 'icon-end' })] }), (0, i.jsxs)(a.v, { href: `/events/design-systems-week-${c.Ok}/en/program`, appearance: 'secondary-action', children: ['View the Program', (0, i.jsx)(r.A, { slot: 'icon-end' })] })] })] }), '\n', !p && (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(d.f, { purpose: 'lead', children: 'Design Systems Week is an online event organized by NL Design System. During this week, several short sessions are offered in which various (international) organizations share how and why they use design systems. The goal is to bring together designers, developers, and other professionals working on digital government services to exchange experiences and best practices.' }) }), '\n', (0, i.jsx)(s.hr, {}), '\n', (0, i.jsx)(s.h2, { id: 'previous-editions', children: 'Previous editions' }), '\n', !!p && `This is the ${c.en.Z} year that NL Design System is organizing Design Systems Week. Can't wait? Then check out the videos from previous years!`, '\n', !p && 'Check out the videos from previous years.', '\n', (0, i.jsxs)(s.ul, { children: ['\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2025/en/program/', children: 'Design Systems Week 2025' }) }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2024/en/program/', children: 'Design Systems Week 2024' }) }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2023/en/program/', children: 'Design Systems Week 2023' }) }), '\n'] }), '\n', (0, i.jsx)(s.h2, { id: 'organisation', children: 'Organisation' }), '\n', (0, i.jsx)(s.p, { children: 'Design Systems Week is organised by the NL Design System core team.' }), '\n', (0, i.jsx)(s.p, { children: 'At NL Design System, web professionals from across the government collaborate on building blocks for websites and applications, like code, design and guidelines. The project is managed by ICTU for the Dutch Ministry of the Interior and Kingdom Relations.' }), '\n', (0, i.jsx)(s.h2, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, i.jsxs)(s.p, { children: ['All participants of Design Systems Week are expected to abide by our ', (0, i.jsx)(s.a, { href: 'https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.md', children: 'NL Design System Code of Conduct' }), " van toepassing. By signing up for one or more sessions you've agreed to these terms."] }), '\n', (0, i.jsx)(s.h2, { id: 'accessibility', children: 'Accessibility' }), '\n', (0, i.jsxs)(s.p, { children: ['We do our best to organise Design Systems Week accessibly. If you have specific questions or requests, please do reach to the NL Design System core team at ', (0, i.jsx)(s.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function b(e = {}) {
    const { wrapper: s } = { ...(0, o.R)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(y, { ...e }) }) : y(e);
   }
  },
  24142(e, s, n) {
   n.d(s, { K: () => t.e2 });
   var t = n(29181);
  },
  32385(e, s, n) {
   n.d(s, { bo: () => i, KF: () => g, mJ: () => u, VZ: () => j, cR: () => S, Pv: () => y, qZ: () => r, kD: () => k, QQ: () => x, B2: () => h, Pc: () => l, f4: () => a, GT: () => w, fX: () => o, eQ: () => v, B_: () => f, o_: () => b });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, s) => d.indexOf(e) - d.indexOf(s)),
    g = (e) => {
     const s = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return m(c(s));
    },
    h = (e, s) => u(e).includes(s),
    p = (e) => {
     const s = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: n }) => '' !== n && s.test(e)).map(({ name: e }) => s.exec(e)?.[1])));
    },
    u = (e) => m(c(e.projects.flatMap((e) => p(e)))),
    y = (e) => {
     const s = p(e),
      n = ((e) => {
       const s = e.tasks.find(({ name: e }) => 'Naam' === e);
       return s?.value || '';
      })(e);
     return s.map((s) => {
      const t = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(s))
       .map(({ name: t, id: i, value: o }) => {
        const r = /^(.+) URL/.exec(t)[1],
         a = 'Storybook' === r ? `${n} (${s}) in Storybook van ${e.title}` : `${n} (${s}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: i, value: o, description: a };
       });
      return { frameworkName: s, tasks: t };
     });
    },
    b = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    v = (e, s) => s.reduce((e, s) => e?.[s], e);
   function k(e, s = []) {
    return Object.hasOwn(e, '$type') ? [s] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? k(e[n], [...s, n]) : []));
   }
   function w(e) {
    const s = new Map();
    function n(e) {
     return (s.has(e) || s.set(e, b(e)), s.get(e));
    }
    return e.sort((e, s) => e.length - s.length || n(e).localeCompare(n(s)));
   }
   const S = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    j = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const s = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return s ? s[1] : e.replace(/^[\^~>=<]+/, '');
    },
    D = new Set(['ics', 'json', 'pdf']),
    x = (e) => {
     const s = e.split('/').pop() ?? '',
      n = s.split('.').pop()?.toLowerCase();
     return void 0 !== n && D.has(n);
    };
  },
  34225(e, s, n) {
   n.d(s, { v: () => a });
   var t = n(94309),
    i = n(13526),
    o = n(86070);
   const r = ({ className: e, children: s, purpose: n, iconStart: t, iconEnd: r, href: a }) => (0, o.jsxs)('a', { className: (0, i.A)('nl-button', e, { 'nl-button--primary': 'primary' === n, 'nl-button--secondary': 'secondary' === n, 'nl-button--subtle': 'subtle' === n }), href: a, children: [t && (0, o.jsx)('span', { className: 'nl-button__icon-start', children: t }), (0, o.jsx)('span', { className: 'nl-button__label', children: s }), r && (0, o.jsx)('span', { className: 'nl-button__icon-end', children: r })] }),
    a = globalThis.isAstro
     ? ({ appearance: e, href: s, ...n }) => {
        let t = 'primary';
        return ((t = 'secondary-action' === e ? 'secondary' : t), (0, o.jsx)(r, { purpose: t, href: s, ...n }));
       }
     : ({ appearance: e, ...s }) => (0, o.jsx)(t.F, { className: (0, i.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...s });
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  56561(e, s, n) {
   n.d(s, { f: () => m });
   var t = n(15540),
    i = n(69967),
    o = n(86070),
    r = n(13526),
    a = n(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, s) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (s &&
      (t = t.filter(function (s) {
       return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, t));
    }
    return n;
   }
   function c(e) {
    for (var s = 1; s < arguments.length; s++) {
     var n = null != arguments[s] ? arguments[s] : {};
     s % 2
      ? d(Object(n), !0).forEach(function (s) {
         (0, t.A)(e, s, n[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : d(Object(n)).forEach(function (s) {
           Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(n, s));
          });
    }
    return e;
   }
   var m = (0, a.forwardRef)(function (e, s) {
    var n = e.children,
     a = e.className,
     d = e.purpose,
     m = (0, i.A)(e, l);
    return (0, o.jsx)('p', c(c({ className: (0, r.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), a), ref: s }, m), {}, { children: 'lead' === d ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   m.displayName = 'Paragraph';
  },
  59292(e, s, n) {
   n.d(s, { f: () => t.f });
   var t = n(56561);
  },
  64249(e, s, n) {
   n.d(s, { A: () => t });
   const t = (0, n(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  94309(e, s, n) {
   n.d(s, { F: () => r, N: () => a });
   var t = n(13526),
    i = n(32385),
    o = n(86070);
   const r = ({ children: e, ...s }) => {
     const { to: n, href: t, ...r } = s;
     let a = n || t;
     const l = new URL(a, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, i.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (a = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, o.jsx)('a', { href: a, ...r, children: e }));
    },
    a = ({ className: e, ...s }) => (0, o.jsx)(r, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...s });
  },
 },
]);
