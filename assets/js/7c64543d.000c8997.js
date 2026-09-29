/*! For license information please see 7c64543d.000c8997.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [89033],
 {
  790(e) {
   e.exports = JSON.parse('[{"uuid":"a5287a4e-fda6-45e9-b6da-5859daab3d3c","isoDateTime":"2026-10-26T10:00:00.000Z","speakers":["KoenDeGreef"],"subject":"AI Design Systems: van pixels naar regie","language":{"abbr":"NL","description":"Nederlands"},"videoId":null,"icalLink":"/dsweek-2026/koen-de-greef.ics"},{"uuid":"1bfd50e8-d845-492b-9553-51cae7dafd5b","isoDateTime":"2026-10-26T12:00:00.000Z","speakers":["DrStephDriver"],"subject":"Tracking conformance data within the code-base","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":"/dsweek-2026/dr-steph-driver.ics"},{"uuid":"b919f274-381c-41db-9d1d-cc3b6934ce93","isoDateTime":"2026-10-26T14:00:00.000Z","speakers":["EricVanMullekom","MaartenSchut"],"subject":"Digitale toegankelijkheid van kaartviewers","language":{"abbr":"NL","description":"Nederlands"},"videoId":null,"icalLink":"/dsweek-2026/eric-van-mullekom-en-maarten-schut.ics"},{"uuid":"b94a7d82-2641-446d-ad36-eafca20ec7fb","isoDateTime":"2026-10-27T10:00:00.000Z","speakers":["CarolineDahl","PierreOrsander","RobinWhittleton"],"subject":"Design Systems as a Lever for Accessibility Culture","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":"/dsweek-2026/caroline-dahl-pierre-orsander-robin-whittleton.ics"},{"uuid":"a23217db-b17d-4e97-ad46-1fd7d113c567","isoDateTime":"2026-10-27T14:00:00.000Z","speakers":["MarionCouesnon"],"subject":"Switching design systems without compromising accessibility","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":"/dsweek-2026/marion-couesnon.ics"},{"uuid":"dc60b53e-664e-4dac-badb-cb0754065ed7","isoDateTime":"2026-10-27T15:30:00.000Z","speakers":["ManonVanKeulen"],"subject":"Toegankelijkheid begint bij ontwerp","language":{"abbr":"NL","description":"Nederlands"},"videoId":null,"icalLink":"/dsweek-2026/manon-van-keulen.ics"},{"uuid":"6b1d8785-cf2b-4c38-a4c1-b65458456728","isoDateTime":"2026-10-28T12:00:00.000Z","speakers":["FrederiqueSchimmelpenninckVanDerOije"],"subject":"Toegankelijke en herkenbare huisstijl","language":{"abbr":"NL","description":"Nederlands"},"videoId":null,"icalLink":"/dsweek-2026/frederique-schimmelpenninck-van-der-oije.ics"},{"uuid":"5c426f34-76eb-44c3-a951-277b49e6b442","isoDateTime":"2026-10-28T14:00:00.000Z","speakers":["JavierCuello"],"subject":"The renaissance of design tooling","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":"/dsweek-2026/javier-cuello.ics"},{"uuid":"aec41135-5d58-404d-a427-47dcb6730b20","isoDateTime":"2026-10-29T12:00:00.000Z","speakers":["EirikBacker"],"subject":"Designsystemet - What if we build less?","language":{"abbr":"EN","description":"English"},"videoId":null,"icalLink":"/dsweek-2026/eirik-backer.ics"}]');
  },
  18252(e, n, i) {
   i.d(n, { F: () => d });
   const s = (0, i(18652).A)('outline', 'user', 'User', [
    ['path', { d: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0', key: 'svg-0' }],
    ['path', { d: 'M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2', key: 'svg-1' }],
   ]);
   var t = i(90578),
    a = i(46447),
    r = i(13526),
    o = i(86070);
   const l = ({ name: e, organisation: n }) => (0, o.jsxs)(a.fz, { className: (0, r.A)('ma-session-table__speaker', 'ma-speaker'), children: [(0, o.jsx)(a.In, { className: 'ma-speaker__icon', children: (0, o.jsx)(s, {}) }), (0, o.jsx)('span', { className: 'ma-speaker__name', children: e }), (0, o.jsx)('br', {}), (0, o.jsx)('span', { className: 'ma-speaker__organisation', children: n })] }),
    d = ({ year: e, lang: n, sessions: i, speakers: s, className: d, ...c }) =>
     (0, o.jsx)('div', {
      className: (0, r.A)('ma-session-table-container', d),
      children: (0, o.jsxs)(a.XI, {
       className: (0, r.A)('ma-session-table', d),
       ...c,
       children: [
        (0, o.jsx)(a.A0, { children: (0, o.jsxs)(a.Hj, { className: 'ma-session-table__row', children: [(0, o.jsx)(a.M_, { className: 'ma-session-table__header-cell', children: 'nl-NL' === n ? 'Tijd' : 'Time' }), (0, o.jsx)(a.M_, { className: 'ma-session-table__header-cell', children: 'nl-NL' === n ? 'Taal' : 'Language' }), (0, o.jsx)(a.M_, { className: 'ma-session-table__header-cell', children: 'nl-NL' === n ? 'Spreker' : 'Speaker' }), (0, o.jsx)(a.M_, { className: 'ma-session-table__header-cell', children: 'nl-NL' === n ? 'Onderwerp' : 'Subject' }), (0, o.jsx)(a.M_, { className: 'ma-session-table__header-cell', children: 'nl-NL' === n ? 'Agenda' : 'Calendar' })] }) }),
        (0, o.jsx)(a.BF, {
         children: i.map(
          ({ isoDateTime: i, speakers: r, subject: d, icalLink: c, language: g, cancelled: m }, h) =>
           !m &&
           (0, o.jsxs)(
            a.Hj,
            {
             className: 'ma-session-table__row',
             children: [
              (0, o.jsx)(a.nA, { className: 'ma-session-table__time', children: (0, o.jsx)(a.fz, { children: (0, o.jsx)('time', { dateTime: i, children: new Intl.DateTimeFormat(n, { hour: 'numeric', minute: 'numeric', timeZone: 'Europe/Amsterdam', timeZoneName: 'nl-NL' !== n ? 'short' : void 0 }).format(new Date(i)) }) }) }),
              (0, o.jsx)(a.nA, { className: 'ma-session-table__language', children: (0, o.jsx)('abbr', { title: g.description, children: g.abbr }) }),
              (0, o.jsx)(a.nA, {
               children: (0, o.jsx)('div', {
                className: 'ma-session-table__speakers',
                children: Object.entries(s)
                 .filter(([e]) => r.includes(e))
                 .map(([e, n], i) => (0, o.jsx)(l, { ...n }, i)),
               }),
              }),
              (0, o.jsx)(a.nA, { className: 'ma-session-table__subject', children: (0, o.jsx)(a.fz, { lang: g.abbr, children: (0, o.jsx)(a.N_, { href: `/events/design-systems-week-${e}/${'nl-NL' === n ? 'programma' : 'EN' === g.abbr ? 'en/program' : 'programma'}#${d.toLowerCase().replace(/\s/gi, '-')}`, children: d }) }) }),
              (0, o.jsx)(a.nA, { className: 'ma-session-table__time', children: c && (0, o.jsxs)(a.vx, { href: c, download: c, 'aria-labelledby': 'ical-description', children: [(0, o.jsx)(a.In, { children: (0, o.jsx)(t.A, {}) }), ' ', (0, o.jsxs)('span', { id: 'ical-description', className: 'sr-only', children: ['iCal file for ', (0, o.jsx)('span', { lang: g.abbr, children: d }), '(download)'] })] }) }),
             ],
            },
            h,
           ),
         ),
        }),
       ],
      }),
     });
  },
  18439(e, n, i) {
   i.d(n, { R: () => r, x: () => o });
   var s = i(30758);
   const t = {},
    a = s.createContext(t);
   function r(e) {
    const n = s.useContext(a);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), s.createElement(a.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, i) {
   i.d(n, { A: () => a });
   var s = i(30758),
    t = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const a = (e, n, i, a) => {
    const r = (0, s.forwardRef)(({ color: i = 'currentColor', size: r = 24, stroke: o = 2, title: l, className: d, children: c, ...g }, m) => (0, s.createElement)('svg', { ref: m, ...t[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: i } : { strokeWidth: o, stroke: i }), ...g }, [l && (0, s.createElement)('title', { key: 'svg-title' }, l), ...a.map(([e, n]) => (0, s.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((r.displayName = `${i}`), r);
   };
  },
  24456(e, n, i) {
   i.d(n, { F: () => r, N: () => o });
   var s = i(13526),
    t = i(84471),
    a = i(86070);
   const r = ({ children: e, ...n }) => {
     const { to: i, href: s, ...r } = n;
     let o = i || s;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, t.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, a.jsx)('a', { href: o, ...r, children: e }));
    },
    o = ({ className: e, boxContent: n, ...i }) => (0, a.jsx)(r, { className: (0, s.$)('utrecht-link', 'utrecht-link--html-a', { 'utrecht-link--box-content': n }, e), ...i });
  },
  29680(e, n, i) {
   i.d(n, { v: () => o });
   var s = i(24456),
    t = i(13526),
    a = i(86070);
   const r = ({ className: e, children: n, purpose: i, iconStart: s, iconEnd: r, href: o }) => (0, a.jsxs)('a', { className: (0, t.A)('nl-button', e, { 'nl-button--primary': 'primary' === i, 'nl-button--secondary': 'secondary' === i, 'nl-button--subtle': 'subtle' === i }), href: o, children: [s && (0, a.jsx)('span', { className: 'nl-button__icon-start', children: s }), (0, a.jsx)('span', { className: 'nl-button__label', children: n }), r && (0, a.jsx)('span', { className: 'nl-button__icon-end', children: r })] }),
    o = globalThis.isAstro
     ? ({ appearance: e, href: n, ...i }) => {
        let s = 'primary';
        return ((s = 'secondary-action' === e ? 'secondary' : s), (0, a.jsx)(r, { purpose: s, href: n, ...i }));
       }
     : ({ appearance: e, ...n }) => (0, a.jsx)(s.F, { className: (0, t.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  35683(e, n, i) {
   i.d(n, { K: () => s.e2 });
   var s = i(29181);
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"Ic":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  56561(e, n, i) {
   i.d(n, { f: () => g });
   var s = i(15540),
    t = i(69967),
    a = i(86070),
    r = i(13526),
    o = i(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, n) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     (n &&
      (s = s.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      i.push.apply(i, s));
    }
    return i;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var i = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(i), !0).forEach(function (n) {
         (0, s.A)(e, n, i[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : d(Object(i)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
          });
    }
    return e;
   }
   var g = (0, o.forwardRef)(function (e, n) {
    var i = e.children,
     o = e.className,
     d = e.purpose,
     g = (0, t.A)(e, l);
    return (0, a.jsx)('p', c(c({ className: (0, r.$)('nl-paragraph', (0, s.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, g), {}, { children: 'lead' === d ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: i }) : i }));
   });
   g.displayName = 'Paragraph';
  },
  63009(e, n, i) {
   i.d(n, { N: () => g });
   var s = i(15540),
    t = i(69967),
    a = i(86070),
    r = i(13526),
    o = i(30758),
    l = ['children', 'className', 'current', 'disabled', 'href', 'inlineBox'];
   function d(e, n) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     (n &&
      (s = s.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      i.push.apply(i, s));
    }
    return i;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var i = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(i), !0).forEach(function (n) {
         (0, s.A)(e, n, i[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : d(Object(i)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
          });
    }
    return e;
   }
   var g = (0, o.forwardRef)(function (e, n) {
    var i = e.children,
     o = e.className,
     d = e.current,
     g = e.disabled,
     m = e.href,
     h = e.inlineBox,
     p = (0, t.A)(e, l);
    return (0, a.jsx)('a', c(c({ 'aria-current': d || void 0, 'aria-disabled': g, className: (0, r.$)('nl-link', (0, s.A)((0, s.A)((0, s.A)({}, 'nl-link--current', d), 'nl-link--disabled', g), 'nl-link--inline-box', h), o), href: g ? void 0 : m, role: g ? 'link' : void 0, ref: n, tabIndex: g ? 0 : void 0 }, p), {}, { children: i }));
   });
   g.displayName = 'Link';
  },
  64249(e, n, i) {
   i.d(n, { A: () => s });
   const s = (0, i(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  65839(e, n, i) {
   i.d(n, { N: () => s.N });
   var s = i(63009);
  },
  66153(e, n, i) {
   i.d(n, { f: () => s.f });
   var s = i(56561);
  },
  70758(e, n, i) {
   (i.r(n), i.d(n, { assets: () => k, contentTitle: () => b, default: () => y, frontMatter: () => u, metadata: () => s, toc: () => v }));
   const s = JSON.parse('{"id":"community/events/design-systems-week/en/timetable","title":"Timetable","description":"Timetable for the Design Systems Week 2026 organised by NL Design System","source":"@site/docs/community/events/design-systems-week/en/timetable.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week-2026/en/timetable","permalink":"/events/design-systems-week-2026/en/timetable","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/timetable.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Timetable","description":"Timetable for the Design Systems Week 2026 organised by NL Design System","lang":"en","hide_table_of_contents":true,"sidebar_label":"Timetable","pagination_label":"Timetable","sidebar_position":3,"navigation_order":3,"slug":"/events/design-systems-week-2026/en/timetable","translations":{"nl":"/events/design-systems-week-2026/tijdschema/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 October, online"},"sidebar":"community","previous":{"title":"Design Systems Week 2026","permalink":"/events/design-systems-week-2026/en/program"},"next":{"title":"Videos 2025","permalink":"/events/design-systems-week-2025/en/program"}}');
   var t = i(86070),
    a = i(18439),
    r = i(29680),
    o = i(35683),
    l = i(65839),
    d = i(66153),
    c = i(64249),
    g = i(790),
    m = i(86109),
    h = i(18252),
    p = i(51130);
   const u = { title: 'Timetable', description: 'Timetable for the Design Systems Week 2026 organised by NL Design System', lang: 'en', hide_table_of_contents: !0, sidebar_label: 'Timetable', pagination_label: 'Timetable', sidebar_position: 3, navigation_order: 3, slug: '/events/design-systems-week-2026/en/timetable', translations: { nl: '/events/design-systems-week-2026/tijdschema/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 October, online' },
    b = 'Design Systems Week settings.year Timetable',
    k = {},
    v = [
     { value: 'Monday, October 26', id: 'monday-october-26', level: 2 },
     { value: 'Tuesday, October 27', id: 'tuesday-october-27', level: 2 },
     { value: 'Wednesday, October 28', id: 'wednesday-october-28', level: 2 },
     { value: 'Thursday, October 29', id: 'thursday-october-29', level: 2 },
     { value: 'Organisation', id: 'organisation', level: 2 },
     { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
     { value: 'Accessibility', id: 'accessibility', level: 2 },
    ];
   function j(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsxs)(n.h1, { id: 'design-systems-week-settingsyear-timetable', children: ['Design Systems Week ', p.Ok, ' Timetable'] }) }), '\n', (0, t.jsx)(d.f, { purpose: 'lead', children: (0, t.jsxs)(n.p, { children: ['NL Design System is organising the Design Systems Week for the ', p.en.Z, ' time. It will feature a number of\nshort talks about the how and why of design systems. All online. From ', p.en.M, ', we will cover subjects\nlike managing design systems, integrating accessibility, user research and code.'] }) }), '\n', !p.dF && (0, t.jsx)(o.K, { children: (0, t.jsxs)(r.v, { href: '/events/design-systems-week/en', appearance: 'primary-action', children: ['About Design Systems Week', (0, t.jsx)(c.A, { slot: 'icon-end' })] }) }), '\n', !!p.dF && (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)(o.K, { children: [(0, t.jsxs)(r.v, { href: `/events/design-systems-week-${p.Ok}/en/program`, appearance: 'primary-action', children: ['See the program', (0, t.jsx)(c.A, { slot: 'icon-end' })] }), !!p.MX && (0, t.jsxs)(r.v, { href: p.MX, appearance: 'secondary-action', children: ['Use Miro', (0, t.jsx)(c.A, { slot: 'icon-end' })] })] }) }), '\n', !p.Ic && (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(d.f, { children: 'The timetable is not yet final. The sessions will be further developed and added in the coming weeks. Keep an eye on this page for updates.' }) }), '\n', '\n', (0, t.jsx)(n.h2, { id: 'monday-october-26', children: 'Monday, October 26' }), '\n', (0, t.jsx)(h.F, { year: p.Ok, speakers: m, sessions: g.filter(({ isoDateTime: e }) => e.startsWith(`${p.Ok}-10-26`)) }), '\n', (0, t.jsx)(n.h2, { id: 'tuesday-october-27', children: 'Tuesday, October 27' }), '\n', (0, t.jsx)(h.F, { year: p.Ok, speakers: m, sessions: g.filter(({ isoDateTime: e }) => e.startsWith(`${p.Ok}-10-27`)) }), '\n', (0, t.jsx)(n.h2, { id: 'wednesday-october-28', children: 'Wednesday, October 28' }), '\n', (0, t.jsx)(h.F, { year: p.Ok, speakers: m, sessions: g.filter(({ isoDateTime: e }) => e.startsWith(`${p.Ok}-10-28`)) }), '\n', (0, t.jsx)(n.h2, { id: 'thursday-october-29', children: 'Thursday, October 29' }), '\n', (0, t.jsx)(h.F, { year: p.Ok, speakers: m, sessions: g.filter(({ isoDateTime: e }) => e.startsWith(`${p.Ok}-10-29`)) }), '\n', !!p.dF && (0, t.jsx)(t.Fragment, { children: (0, t.jsx)('hr', {}) }), '\n', (0, t.jsx)(n.h2, { id: 'organisation', children: 'Organisation' }), '\n', (0, t.jsxs)(n.p, { children: ['Design Systems Week is organised by the NL Design System core team, thanks to the support of the Ministry of the Interior and Kingdom Relations (BZK) and ', (0, t.jsx)(l.N, { href: 'https://international.gebruikercentraal.nl', children: 'User Needs First' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, t.jsxs)(n.p, { children: ['All participants of Design Systems Week are expected to abide by our ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.md', children: 'NL Design System Code of Conduct' }), ". By signing up for one or more sessions you've agreed to these terms."] }), '\n', (0, t.jsx)(n.h2, { id: 'accessibility', children: 'Accessibility' }), '\n', (0, t.jsxs)(n.p, { children: ['We do our best to organise Design Systems Week accessibly. If you have specific questions or requests, please do reach to the NL Design System core team at ', (0, t.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j(e);
   }
  },
  84471(e, n, i) {
   i.d(n, { bo: () => t, KF: () => m, mJ: () => u, VZ: () => D, cR: () => f, Pv: () => b, qZ: () => r, kD: () => y, QQ: () => N, B2: () => h, Pc: () => l, f4: () => o, GT: () => w, fX: () => a, eQ: () => j, B_: () => v, o_: () => k });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    t = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    a = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return g(c(n));
    },
    h = (e, n) => u(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: i }) => '' !== i && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => g(c(e.projects.flatMap((e) => p(e)))),
    b = (e) => {
     const n = p(e),
      i = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const s = e.tasks
       .filter(({ name: e, value: i }) => '' !== i && e.includes(n))
       .map(({ name: s, id: t, value: a }) => {
        const r = /^(.+) URL/.exec(s)[1],
         o = 'Storybook' === r ? `${i} (${n}) in Storybook van ${e.title}` : `${i} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: s, id: t, value: a, description: o };
       });
      return { frameworkName: n, tasks: s };
     });
    },
    k = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function y(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((i) => ('object' == typeof e[i] && null !== e[i] ? y(e[i], [...n, i]) : []));
   }
   function w(e) {
    const n = new Map();
    function i(e) {
     return (n.has(e) || n.set(e, k(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || i(e).localeCompare(i(n)));
   }
   const f = () => {
     const e = s.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    D = () => {
     const e = s.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    x = new Set(['ics', 'json', 'pdf']),
    N = (e) => {
     const n = e.split('/').pop() ?? '',
      i = n.split('.').pop()?.toLowerCase();
     return void 0 !== i && x.has(i);
    };
  },
  86109(e) {
   e.exports = JSON.parse('{"KoenDeGreef":{"name":"Koen de Greef","organisation":"FIDDS Design","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-KoenDeGreef.jpg","alt":"Koen de Greef"},"description":{"nl":"Koen is Head of Design Services bij FIDDS Design en werkt op het snijvlak van design en AI. Met ruim tien jaar ervaring in Enterprise UX helpt hij organisaties om vanuit een menselijk perspectief te ontwerpen met en voor AI, zodat de technologie die ze bouwen ook echt gebruikt wordt. Daarvoor was hij design strateeg bij NS, waar hij werkte aan digitale toegankelijkheid en aan hoe design binnen de organisatie georganiseerd was. AI Design Systems zijn de nieuwste manier waarop hij teams helpt snel te bouwen zonder in te leveren op kwaliteit."},"language":"nl"},"DrStephDriver":{"name":"Dr Steph Driver","organisation":"Open Library of Humanities","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-DrStephDriver.jpg","alt":"Dr Steph Driver"},"description":{"en":"Steph is the accessibility-specialist developer at the Open Library of Humanities.  As an assistive technology user herself, she is passionate about making open access truly accessible for everyone. She combines deep technical expertise with a passion for education, helping teams develop smarter workflows and innovative accessibility solutions. With a background spanning natural sciences, creative writing, technology and disability-activism, Steph brings a unique perspective to inclusive digital design.","nl":"Steph is ontwikkelaar en specialist op het gebied van toegankelijkheid bij de Open Library of Humanities. Als gebruiker van ondersteunende technologie zet zij zich vol passie in om open access voor iedereen werkelijk toegankelijk te maken. Ze combineert diepgaande technische expertise met een passie voor onderwijs en helpt teams bij het ontwikkelen van slimmere werkprocessen en innovatieve oplossingen voor toegankelijkheid. Met een achtergrond in de natuurwetenschappen, creatief schrijven, technologie en activisme rondom handicaps brengt Steph een uniek perspectief in op inclusief digitaal ontwerp."},"language":"en"},"EricVanMullekom":{"name":"Eric van Mullekom","organisation":"Kadaster","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-EricVanMullekom.jpg","alt":"Eric van Mullekom"},"description":{"nl":"Eric is sinds 2000 als projectmanager/product owner betrokken bij softwareontwikkeling, met oog voor techniek en gebruikersgemak. Bij het Kadaster is hij als Product Owner verantwoordelijk voor <a target=\\"blank\\" href=\\"https://generiekegeocomponenten.nl\\">generiekegeocomponenten.nl</a>, <a target=\\"blank\\" href=\\"https://kaartenvannederland.nl\\">kaartenvannederland.nl</a> en <a target=\\"blank\\" href=\\"https://verbeterdekaart.nl\\">terugmeldsysteem (o.a. verbeterdekaart.nl)</a>."},"language":"nl"},"MaartenSchut":{"name":"Maarten Schut","organisation":"Kadaster","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-MaartenSchut.jpg","alt":"Maarten Schut"},"description":{"nl":"Maarten werkt sinds 2025 bij het Kadaster als product owner. Samen met het dev-team ontwikkelt en beheert hij diverse websites, portals en applicaties, waaronder <a target=\\"blank\\" href=\\"https://www.kadaster.nl\\">www.kadaster.nl</a>, <a target=\\"blank\\" href=\\"https://topokaarten.kadaster.nl\\">topokaarten.kadaster.nl</a> en het zakelijke portaal <a target=\\"blank\\" href=\\"https://mijn.kadaster.nl\\">mijn.kadaster.nl</a>. "},"language":"nl"},"MarionCouesnon":{"name":"Marion Couesnon","organisation":"Digitalservice GmbH des Bundes","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-MarionCouesnon.jpg","alt":"Marion Couesnon"},"description":{"en":"Marion is an accessibility designer based in Berlin. She has been passionate about design since 2011 and has specialised in accessibility since 2019. She currently works for DigitalService, a company owned by the German federal government. Within the organisation, she implements accessibility practices whilst contributing to the design of services, including the <a target=\\"blank\\" href=\\"https://service.justiz.de\\">Ministry of Justice\u2019s online portal</a>. Outside of work, you might spot Marion at her boxing club or knitting on her sofa.","nl":"Marion is een ontwerper gespecialiseerd in toegankelijkheid, gevestigd in Berlijn. Ze is sinds 2011 gepassioneerd door design en heeft zich sinds 2019 toegelegd op toegankelijkheid. Momenteel werkt ze bij DigitalService, een bedrijf dat eigendom is van de Duitse federale overheid. Binnen de organisatie implementeert ze toegankelijkheidsmaatregelen en draagt ze bij aan het ontwerp van diensten, waaronder het <a target=\\"blank\\" href=\\"https://service.justiz.de\\">online portaal van het ministerie van Justitie</a>. Buiten haar werk kun je Marion tegenkomen bij haar boksclub of breiend op de bank."},"language":"en"},"ManonVanKeulen":{"name":"Manon van Keulen","organisation":"Digitaal Toegankelijk","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-ManonVanKeulen.jpg","alt":"Manon van Keulen"},"description":{"nl":"Het werk van Manon kreeg, na in 2020 omgeschoold te zijn naar Webdeveloper, al snel een focus op digitale toegankelijkheid. Tegenwoordig werkt zij als consultant bij Digitaal Toegankelijk. Via trainingen en adviestrajecten ondersteunt zij bedrijven om hun diensten toegankelijker te maken. Haar missie is te laten zien hoe meer aandacht voor de toegankelijkheid ook leidt tot een betere ervaring voor andere eindgebruikers. En hoe de eerste beslissingen tijdens het design daar al een grote invloed op kunnen hebben."},"language":"nl"},"FrederiqueSchimmelpenninckVanDerOije":{"name":"Fr\xe9d\xe9rique Schimmelpenninck van der Oije","organisation":"UWV","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-FrederiqueSchimmelpenninck.jpg","alt":"Fr\xe9d\xe9rique Schimmelpenninck van der Oije"},"description":{"nl":"Fr\xe9d\xe9rique Schimmelpenninck van der Oije is grafisch ontwerper, zij werkte eerder als ontwerper en beeldredacteur voor onder andere de Volkskrant en Het Financieele Dagblad en is nu Designmanager bij UWV. Daarnaast werkt zij als parttime docent op het Amsterdam Fashion Institute. Helder, herkenbaar en vooral toegankelijke communicatie zijn een belangrijke leidraad in haar werk en werkwijze. Bij UWV werkt zij aan een integrale aanpak van de huisstijl, van mobiel tot bewegwijzering en van beachflag tot formulier."},"language":"nl"},"JavierCuello":{"name":"Javier Cuello","organisation":"Fuller","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-JavierCuello.png","alt":"Javier Cuello"},"description":{"en":"Javier is a product designer specialising in design systems. Originally from Argentina, he has spent nearly 20 years in Europe working with companies like Wise, UEFA, Telef\xf3nica and Zara. He now runs his own independent design practice, helping teams build and scale their design systems.","nl":"Javier is een productontwerper die gespecialiseerd is in designsystemen. Hij komt oorspronkelijk uit Argentini\xeb en heeft bijna twintig jaar in Europa gewerkt voor bedrijven als Wise, UEFA, Telef\xf3nica en Zara. Tegenwoordig runt hij zijn eigen onafhankelijke ontwerppraktijk, waarin hij teams helpt bij het opzetten en opschalen van hun designsystemen."},"language":"en"},"EirikBacker":{"name":"Eirik Backer","organisation":"Norwegian Digitalisation Agency","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-EirikBacker.jpeg","alt":"Eirik Backer"},"description":{"en":"Eirik is a front-end developer and former designer with a passion for web standards and accessibility. He currently works at the Norwegian Digitalisation Agency.","nl":"Eirik is front-end developer en voormalig ontwerper met een passie voor webstandaarden en toegankelijkheid. Hij werkt momenteel bij het Noorse Agentschap voor Digitalisering."},"language":"en"},"CarolineDahl":{"name":"Caroline Dahl","organisation":"IKEA","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-CarolineDahl.jpg","alt":"Caroline Dahl"},"description":{"en":"Caroline is a product owner with 10 years of experience in digital product development at IKEA. With a background in marketing and brand management, she combines business, technology, and human-centered design to create products that deliver real value. Leading the design system team at IKEA, Caroline is passionate about making accessibility and inclusivity a natural part of how digital products are designed and built.","nl":"Caroline is een product owner met 10 jaar ervaring in de ontwikkeling van digitale producten bij IKEA. Met een achtergrond in marketing en brandmanagement combineert ze business, technologie en mensgericht ontwerp om producten te cre\xebren die echt waarde toevoegen. Als leider van het designsystem-team bij IKEA zet ze zich gepassioneerd in om toegankelijkheid en inclusiviteit een integraal onderdeel te maken van het ontwerp- en ontwikkelproces van digitale producten."},"language":"en"},"PierreOrsander":{"name":"Pierre Orsander","organisation":"IKEA","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-PierreOrsander.jpg","alt":"Pierre Orsander"},"description":{"en":"Pierre is a digital product designer with 18+ years of experience creating well-designed digital solutions for global companies, governments, service providers, and startups. Over the past six years at IKEA, he has specialised in building the digital design system, Skapa, developing deep expertise in accessibility and inclusive user experiences.","nl":"Pierre is een digital product designer met meer dan 18 jaar ervaring in het ontwerpen van hoogwaardige digitale oplossingen voor wereldwijde bedrijven, overheidsinstanties, dienstverleners en startups. De afgelopen zes jaar heeft hij zich bij IKEA gespecialiseerd in de opzet van het digitale designsystem \'Skapa\', waarbij hij diepgaande expertise heeft opgebouwd op het gebied van toegankelijkheid en inclusieve gebruikerservaringen."},"language":"en"},"RobinWhittleton":{"name":"Robin Whittleton","organisation":"IKEA","image":{"src":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/design-systems-week-2026-RobinWhittleton.jpg","alt":"Robin Whittleton"},"description":{"en":"Robin is an accessibility specialist with a background in front-end development. Originally from the UK \u2013 where he helped to start the GOV.UK Design System \u2013 he moved to Sweden nearly a decade ago and was in the right place and time to help to start the IKEA design system. His focus is on making design and technology work for everyone regardless of need.","nl":"Robin is een toegankelijkheidsspecialist met een achtergrond in front-end development. Hij is afkomstig uit het Verenigd Koninkrijk \u2013 waar hij meewerkte aan de start van het GOV.UK Design System \u2013 en verhuisde bijna tien jaar geleden naar Zweden; daar was hij op het juiste moment op de juiste plek om te helpen bij de opzet van het IKEA-designsystem. Zijn focus ligt op het zodanig inzetten van ontwerp en technologie dat ze voor iedereen werken, ongeacht individuele behoeften."},"language":"en"}}');
  },
  90578(e, n, i) {
   i.d(n, { A: () => s });
   const s = (0, i(18652).A)('outline', 'calendar-event', 'CalendarEvent', [
    ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12', key: 'svg-0' }],
    ['path', { d: 'M16 3l0 4', key: 'svg-1' }],
    ['path', { d: 'M8 3l0 4', key: 'svg-2' }],
    ['path', { d: 'M4 11l16 0', key: 'svg-3' }],
    ['path', { d: 'M8 15h2v2h-2l0 -2', key: 'svg-4' }],
   ]);
  },
 },
]);
