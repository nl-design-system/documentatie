/*! For license information please see ffcf9766.2aca93c9.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [38100],
 {
  10645(e, n, a) {
   a.d(n, { p: () => i });
   var t = a(13526),
    r = a(86070);
   const i = ({ children: e, className: n, level: a = 1, suffix: i, ...l }) => (0, r.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${a}`, n), ...l, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  15089(e, n, a) {
   a.d(n, { A: () => l });
   var t = a(48907),
    r = a(30758),
    i = ['size', 'color'];
   function l(e) {
    var n = e.size,
     a = void 0 === n ? 24 : n,
     l = e.color,
     s = void 0 === l ? 'currentColor' : l,
     o = (0, t.$i)(e, i);
    return r.createElement('svg', (0, t._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-github', width: a, height: a, viewBox: '0 0 24 24', stroke: s, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, o), r.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), r.createElement('path', { d: 'M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' }));
   }
  },
  21530(e, n, a) {
   a.d(n, { AC: () => d, Fu: () => l, Wu: () => s, Zp: () => o });
   var t = a(46447),
    r = a(13526),
    i = a(86070);
   const l = ({ background: e, children: n, className: a, ...t }) => (0, i.jsx)('div', { className: (0, r.A)('ma-card__illustration', e && `ma-card__illustration--${e}`, a), ...t, children: n }),
    s = (e) => (0, i.jsx)('div', { className: 'ma-card__content', ...e }),
    o = ({ href: e, appearance: n, className: a, component: l = 'div', background: s, children: o }) => {
     const d = (e) => ('article' === l ? (0, i.jsx)('article', { ...e }) : 'section' === l ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      g = (0, i.jsx)(d, { className: (0, r.A)('ma-cardgroup__card', s && 'ma-cardgroup__card--light-purple', `ma-cardgroup__card--${n}`, a), children: o });
     return e ? (0, i.jsx)(t.N_, { href: e, boxContent: !0, className: 'ma-cardgroup__link', children: g }) : g;
    },
    d = ({ appearance: e = 'large', children: n, className: a }) => (0, i.jsx)('div', { className: (0, r.A)('ma-cardgroup', `ma-cardgroup--${e}`, a), children: n });
  },
  28377(e, n, a) {
   a.d(n, { A: () => l });
   var t = a(48907),
    r = a(30758),
    i = ['size', 'color'];
   function l(e) {
    var n = e.size,
     a = void 0 === n ? 24 : n,
     l = e.color,
     s = void 0 === l ? 'currentColor' : l,
     o = (0, t.$i)(e, i);
    return r.createElement('svg', (0, t._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-npm', width: a, height: a, viewBox: '0 0 24 24', stroke: s, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, o), r.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), r.createElement('path', { d: 'M1 8h22v7h-12v2h-4v-2h-6z' }), r.createElement('path', { d: 'M7 8v7' }), r.createElement('path', { d: 'M14 8v7' }), r.createElement('path', { d: 'M17 11v4' }), r.createElement('path', { d: 'M4 11v4' }), r.createElement('path', { d: 'M11 11v1' }), r.createElement('path', { d: 'M20 11v4' }));
   }
  },
  32385(e, n, a) {
   a.d(n, { bo: () => r, KF: () => c, mJ: () => p, VZ: () => w, cR: () => N, Pv: () => f, qZ: () => l, kD: () => j, QQ: () => D, B2: () => m, Pc: () => o, f4: () => s, GT: () => k, fX: () => i, eQ: () => x, B_: () => v, o_: () => b });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    l = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function g(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    c = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return u(g(n));
    },
    m = (e, n) => p(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return u(g(e.tasks.filter(({ name: e, value: a }) => '' !== a && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => u(g(e.projects.flatMap((e) => h(e)))),
    f = (e) => {
     const n = h(e),
      a = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: a }) => '' !== a && e.includes(n))
       .map(({ name: t, id: r, value: i }) => {
        const l = /^(.+) URL/.exec(t)[1],
         s = 'Storybook' === l ? `${a} (${n}) in Storybook van ${e.title}` : `${a} (${n}) op ${l}`;
        return { brand: l.toLowerCase(), name: t, id: r, value: i, description: s };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    b = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    x = (e, n) => n.reduce((e, n) => e?.[n], e);
   function j(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? j(e[a], [...n, a]) : []));
   }
   function k(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || a(e).localeCompare(a(n)));
   }
   const N = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    w = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    _ = new Set(['ics', 'json', 'pdf']),
    D = (e) => {
     const n = e.split('/').pop() ?? '',
      a = n.split('.').pop()?.toLowerCase();
     return void 0 !== a && _.has(a);
    };
  },
  33648(e, n, a) {
   a.d(n, { A: () => l });
   var t = a(48907),
    r = a(30758),
    i = ['size', 'color'];
   function l(e) {
    var n = e.size,
     a = void 0 === n ? 24 : n,
     l = e.color,
     s = void 0 === l ? 'currentColor' : l,
     o = (0, t.$i)(e, i);
    return r.createElement('svg', (0, t._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-storybook', width: a, height: a, viewBox: '0 0 24 24', stroke: s, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, o), r.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), r.createElement('path', { d: 'M5 4l.5 16.5l13.5 .5v-18z' }), r.createElement('path', { d: 'M9 15c.6 1.5 1.639 2 3.283 2h-.283c1.8 0 3 -.974 3 -2.435c0 -1.194 -.831 -1.799 -2.147 -2.333l-1.975 -.802c-1.15 -.467 -1.878 -1.422 -1.878 -2.467c0 -.97 .899 -1.786 2.087 -1.893l.613 -.055c1.528 -.138 2.999 .762 3.3 1.985' }), r.createElement('path', { d: 'M16 3.5v1' }));
   }
  },
  39569(e, n, a) {
   a.d(n, { D: () => s });
   var t = a(46447),
    r = a(13526),
    i = a(32385),
    l = a(86070);
   const s = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, l.jsx)(t.KE, { className: (0, r.A)('ma-estafette-badge', n && `ma-estafette-badge--${n}`), children: e });
   };
  },
  40889(e, n, a) {
   a.d(n, { r: () => u });
   var t = a(29181),
    r = a(74172),
    i = a(15089),
    l = a(28377),
    s = a(33648),
    o = a(83386),
    d = a(86070);
   const g = { figma: (0, d.jsx)(r.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(l.A, {}), storybook: (0, d.jsx)(s.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(t.In, { children: g[e] || (0, d.jsx)(o.A, {}) });
  },
  48907(e, n, a) {
   function t() {
    return (
     (t = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var n = 1; n < arguments.length; n++) {
          var a = arguments[n];
          for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
         }
         return e;
        }),
     t.apply(this, arguments)
    );
   }
   function r(e, n) {
    if (null == e) return {};
    var a,
     t,
     r = (function (e, n) {
      if (null == e) return {};
      var a,
       t,
       r = {},
       i = Object.keys(e);
      for (t = 0; t < i.length; t++) ((a = i[t]), n.indexOf(a) >= 0 || (r[a] = e[a]));
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (t = 0; t < i.length; t++) ((a = i[t]), n.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])));
    }
    return r;
   }
   a.d(n, { $i: () => r, _P: () => t });
  },
  50172(e, n, a) {
   a.d(n, { Z: () => c });
   var t = a(86070),
    r = a(63009);
   function i(e) {
    var n,
     a,
     t = '';
    if ('string' == typeof e || 'number' == typeof e) t += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var r = e.length;
      for (n = 0; n < r; n++) e[n] && (a = i(e[n])) && (t && (t += ' '), (t += a));
     } else for (a in e) e[a] && (t && (t += ' '), (t += a));
    return t;
   }
   function l() {
    for (var e, n, a = 0, t = '', r = arguments.length; a < r; a++) (e = arguments[a]) && (n = i(e)) && (t && (t += ' '), (t += n));
    return t;
   }
   const s = ({ ref: e, children: n, className: a, inline: i, ...s }) => (0, t.jsx)(r.N, { ...s, className: l('rhc-link', { 'rhc-link--inline': i }, a), disabled: !1, ref: e, children: n });
   s.displayName = 'Link';
   var o = a(30758);
   function d(e) {
    var n,
     a,
     t = '';
    if ('string' == typeof e || 'number' == typeof e) t += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var r = e.length;
      for (n = 0; n < r; n++) e[n] && (a = d(e[n])) && (t && (t += ' '), (t += a));
     } else for (a in e) e[a] && (t && (t += ' '), (t += a));
    return t;
   }
   function g() {
    for (var e, n, a = 0, t = '', r = arguments.length; a < r; a++) (e = arguments[a]) && (n = d(e)) && (t && (t += ' '), (t += n));
    return t;
   }
   const u = ({ level: e = 2, children: n, ...a }) => {
     const t = `h${e}`;
     return o.createElement(t, a, n);
    },
    c = (0, o.forwardRef)(({ heading: e, headingLevel: n = 2, subheading: a, description: r, metadata: i, image: l, href: o, target: d, linkLabel: c, title: m, className: h, children: p, ...f }, b) => (0, t.jsxs)('div', { className: g('rhc-card', 'rhc-card--default', h), ref: b, ...f, children: [l && (0, t.jsx)('div', { className: 'rhc-card__image', children: l }), (0, t.jsxs)('div', { className: 'rhc-card__content', children: [(0, t.jsx)(u, { className: 'rhc-card__heading', level: n, children: o ? (0, t.jsx)(s, { className: 'rhc-card__link', href: o, target: d, title: m, children: e }) : e }), a && (0, t.jsx)('p', { className: 'rhc-card__subheading', children: a }), r && (0, t.jsx)('p', { className: 'rhc-card__description', children: r }), i && (0, t.jsx)('p', { className: 'rhc-card__metadata', children: i }), p] }), c && (0, t.jsx)('div', { className: 'rhc-card__footer', children: (0, t.jsx)('div', { className: 'rhc-card__link', 'data-testid': 'rhc-card__link', children: (0, t.jsx)(s, { href: o, target: d, title: m, children: c }) }) })] }));
   c.displayName = 'Card';
  },
  59292(e, n, a) {
   a.d(n, { f: () => t.f });
   var t = a(56561);
  },
  63009(e, n, a) {
   a.d(n, { N: () => u });
   var t = a(15540),
    r = a(69967),
    i = a(86070),
    l = a(13526),
    s = a(30758),
    o = ['children', 'className', 'current', 'disabled', 'href', 'inlineBox'];
   function d(e, n) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      a.push.apply(a, t));
    }
    return a;
   }
   function g(e) {
    for (var n = 1; n < arguments.length; n++) {
     var a = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(a), !0).forEach(function (n) {
         (0, t.A)(e, n, a[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
        : d(Object(a)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
          });
    }
    return e;
   }
   var u = (0, s.forwardRef)(function (e, n) {
    var a = e.children,
     s = e.className,
     d = e.current,
     u = e.disabled,
     c = e.href,
     m = e.inlineBox,
     h = (0, r.A)(e, o);
    return (0, i.jsx)('a', g(g({ 'aria-current': d || void 0, 'aria-disabled': u, className: (0, l.$)('nl-link', (0, t.A)((0, t.A)((0, t.A)({}, 'nl-link--current', d), 'nl-link--disabled', u), 'nl-link--inline-box', m), s), href: u ? void 0 : c, role: u ? 'link' : void 0, ref: n, tabIndex: u ? 0 : void 0 }, h), {}, { children: a }));
   });
   u.displayName = 'Link';
  },
  70348(e, n, a) {
   a.d(n, { K: () => d, n: () => o });
   var t = a(13526),
    r = a(30758),
    i = a(96345),
    l = a(37168),
    s = a(86070);
   const o = (0, r.forwardRef)(({ as: e, className: n, children: a, ...r }, i) => {
     const l = e || 'div',
      o = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, s.jsx)(l, { ref: i, className: o, ...r, children: a });
    }),
    d = ({ className: e, classNamePanel: n, label: a, heading: r, headingLevel: o, headingApperance: d, ...g }) => {
     const u = (0, t.A)('utrecht-accordion__section', e),
      c = (0, t.A)('utrecht-accordion__panel', n);
     return (0, s.jsxs)('details', { className: u, ...g, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(i.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [r && (0, s.jsx)(l.D, { level: o, appearance: d, children: r }), a] })] }) }), (0, s.jsx)('div', { className: c, children: g.children })] });
    };
  },
  74172(e, n, a) {
   a.d(n, { A: () => l });
   var t = a(48907),
    r = a(30758),
    i = ['size', 'color'];
   function l(e) {
    var n = e.size,
     a = void 0 === n ? 24 : n,
     l = e.color,
     s = void 0 === l ? 'currentColor' : l,
     o = (0, t.$i)(e, i);
    return r.createElement('svg', (0, t._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-brand-figma', width: a, height: a, viewBox: '0 0 24 24', stroke: s, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, o), r.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), r.createElement('circle', { cx: '15', cy: '12', r: '3' }), r.createElement('rect', { x: '6', y: '3', width: '12', height: '6', rx: '3' }), r.createElement('path', { d: 'M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15' }));
   }
  },
  74352(e, n, a) {
   (a.r(n), a.d(n, { assets: () => g, component: () => f, componentName: () => p, contentTitle: () => d, default: () => x, description: () => c, frontMatter: () => o, issueNumber: () => m, metadata: () => t, relayStep: () => h, title: () => u, toc: () => b }));
   const t = JSON.parse('{"id":"componenten/number-input/index","title":"Number Input","description":"Invoerveld voor een heel getal of een getal met decimalen.","source":"@site/docs/componenten/number-input/index.mdx","sourceDirName":"componenten/number-input","slug":"/number-input","permalink":"/number-input","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/number-input/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Number Input","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Number Input","pagination_label":"Number Input","description":"Invoerveld voor een heel getal of een getal met decimalen.","issue_number":194,"slug":"/number-input","keywords":["cijferinvoer","decimaal","decimalen invoer","form","form control","form field","getal invoer","input field","invoerveld","number field","number input","numerieke invoer","numerieke input","nummer invoer","numeriek veld","value input","waarde","waarden invoer"]},"sidebar":"componenten","previous":{"title":"Number Badge","permalink":"/number-badge"},"next":{"title":"Ordered List","permalink":"/ordered-list"}}');
   var r = a(86070),
    i = a(18439),
    l = a(79447),
    s = a(82024);
   const o = { title: 'Number Input', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Number Input', pagination_label: 'Number Input', description: 'Invoerveld voor een heel getal of een getal met decimalen.', issue_number: 194, slug: '/number-input', keywords: ['cijferinvoer', 'decimaal', 'decimalen invoer', 'form', 'form control', 'form field', 'getal invoer', 'input field', 'invoerveld', 'number field', 'number input', 'numerieke invoer', 'numerieke input', 'nummer invoer', 'numeriek veld', 'value input', 'waarde', 'waarden invoer'] },
    d = void 0,
    g = {},
    u = 'Number Input',
    c = 'Invoerveld voor een heel getal of een getal met decimalen.',
    m = 194,
    h = 'help wanted',
    p = 'number-input',
    f = l.find((e) => e.number === m),
    b = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function v(e) {
    const n = { h2: 'h2', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, r.jsx)(s.Fc, { component: f, headingLevel: 1, description: c }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(s.VK, { component: f, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, r.jsx)(s.mu, { component: f, headingLevel: 3 }), '\n', (0, r.jsx)(s.K_, { component: f }), '\n', (0, r.jsx)(s.$9, { component: f, headingLevel: 2 })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
  },
  82024(e, n, a) {
   a.d(n, { VK: () => x, $9: () => k, mu: () => j, Fc: () => N, K_: () => w });
   var t = a(29181),
    r = a(85068),
    i = a(59292),
    l = a(13526),
    s = a(40889),
    o = a(21530),
    d = a(88166),
    g = a(86070);
   const u = ({ checked: e, unchecked: n }) => {
    const a = (e / (e + n)) * 250;
    return (0, g.jsxs)('svg', { viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg', className: 'ma-component-progress', 'aria-hidden': 'true', children: [(0, g.jsx)('circle', { className: 'ma-component-progress__background', cx: '50', cy: '50', r: '40', fill: 'none', stroke: 'none', strokeWidth: '20' }), (0, g.jsx)('circle', { className: 'ma-component-progress__progress', cx: '50', cy: '50', r: '40', fill: 'none', stroke: 'currentColor', strokeWidth: '20', strokeDasharray: a })] });
   };
   var c = a(39569),
    m = a(10645),
    h = a(58876),
    p = a(32385);
   const f = JSON.parse('{"Notification Banner":[{"name":"Alert","slug":"alert"},{"name":"Note","slug":"note"}],"Note":[{"name":"Alert","slug":"alert"},{"name":"Notification Banner","slug":"notification-banner"}],"Modal Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Dialog","slug":"dialog"}],"Drawer":[{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Dialog":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Drawer","slug":"drawer"},{"name":"Modal Dialog","slug":"modal-dialog"}],"Alert Dialog":[{"name":"Alert","slug":"alert"},{"name":"Modal Dialog","slug":"modal-dialog"},{"name":"Dialog","slug":"dialog"}],"Alert":[{"name":"Alert Dialog","slug":"alert-dialog"},{"name":"Invalid Form Alert","slug":null},{"name":"Notification Banner","slug":"notification-banner"},{"name":"Note","slug":"note"}],"Unordered List":[{"name":"Ordered List","slug":"ordered-list"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Link List","slug":"link-list"},{"name":"Task List","slug":"task-list"}],"Ordered List":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Unordered List","slug":"unordered-list"}],"Link":[{"name":"Link List","slug":"link-list"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Button":[{"name":"Action Group","slug":"action-group"},{"name":"Login Link","slug":"login-link"}],"Mark":[{"name":"Strong","slug":"strong"}],"Code Block":[{"name":"Code","slug":"code"}],"Number Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Status Badge","slug":"status-badge"}],"Heading":[{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Heading Group","slug":"heading-group"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Data Badge":[{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Color Sample":[],"Code":[{"name":"Code Block","slug":"code-block"}],"Paragraph":[{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Strong","slug":"strong"}],"Form Field Error Message":[{"name":"Invalid Form Alert","slug":null}],"File":[{"name":"File Input","slug":"file-input"}],"Page Footer":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Header","slug":"page-header"},{"name":"Page Body","slug":null}],"Page Header":[{"name":"Root","slug":null},{"name":"Body","slug":null},{"name":"Page Layout","slug":null},{"name":"Page Body","slug":null},{"name":"Page Footer","slug":"page-footer"},{"name":"Navigation Bar","slug":"navigation-bar"}],"Text Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input Group","slug":null}],"Date Input":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Description List":[{"name":"Data Summary","slug":"data-summary"},{"name":"Form Summary","slug":"form-summary"},{"name":"Table","slug":"table"}],"Fieldset":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Text Input Group","slug":null},{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox Group","slug":"checkbox-group"}],"Dot Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Number Badge","slug":"number-badge"},{"name":"Status Badge","slug":"status-badge"}],"Figure":[{"name":"Image","slug":"image"},{"name":"Video","slug":"video"}],"File Input":[{"name":"Form Field","slug":"form-field"},{"name":"File","slug":"file"}],"Password Input":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Status Badge":[{"name":"Data Badge","slug":"data-badge"},{"name":"Dot Badge","slug":"dot-badge"},{"name":"Number Badge","slug":"number-badge"}],"Form Field Description":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Form Field Error Message","slug":"form-field-error-message"}],"Breadcrumb Navigation":[],"Form Field Label":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Label Suffix","slug":"form-field-label-suffix"},{"name":"Legend","slug":null}],"Table":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Login Link":[{"name":"Button","slug":"button"}],"Link List":[{"name":"Link","slug":"link"},{"name":"Unordered List","slug":"unordered-list"}],"Select":[{"name":"Select Combobox","slug":"select-combobox"},{"name":"Radio Group","slug":"radio-group"}],"Image":[{"name":"Figure","slug":"figure"}],"Form Summary":[{"name":"Data Summary","slug":"data-summary"},{"name":"Description List","slug":"description-list"},{"name":"Table","slug":"table"}],"Card as Link":[{"name":"Case Card","slug":"case-card"}],"Text Area":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Description","slug":"form-field-description"},{"name":"Form Field Error Message","slug":"form-field-error-message"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Text Input","slug":"text-input"}],"Radio Button":[{"name":"Radio Group","slug":"radio-group"},{"name":"Checkbox","slug":"checkbox"},{"name":"Switch","slug":"switch"}],"Checkbox":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Radio Button","slug":"radio-button"},{"name":"Switch","slug":"switch"}],"Action Group":[{"name":"Button","slug":"button"}],"Side Navigation":[{"name":"Navigation Bar","slug":"navigation-bar"}],"Icon":[],"Accordion":[{"name":"Details","slug":null},{"name":"Tabs","slug":"tabs"}],"Skip Link":[],"Blockquote":[{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Pull Quote","slug":"pull-quote"}],"Heading Group":[{"name":"Heading","slug":"heading"},{"name":"Rich Text Content","slug":"rich-text-content"},{"name":"Subheading","slug":null},{"name":"Pre-heading","slug":null}],"Form Field":[{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Date Input","slug":"date-input"},{"name":"File Input","slug":"file-input"},{"name":"Number Input","slug":"number-input"},{"name":"Password Input","slug":"password-input"},{"name":"Radio Group","slug":"radio-group"},{"name":"Range","slug":"range"},{"name":"Text Area","slug":"text-area"},{"name":"Text Input","slug":"text-input"},{"name":"Text Input Group","slug":null}],"Separator":[],"Heading 6":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 5":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 4":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 3":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 2":[{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Heading 1":[{"name":"Heading","slug":"heading"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Form Field Label Suffix":[{"name":"Form Field","slug":"form-field"},{"name":"Form Field Label","slug":"form-field-label"},{"name":"Form Field Description","slug":"form-field-description"}],"Progress List":[{"name":"Form Navigation","slug":"form-navigation"}],"Task Navigation":[{"name":"Topic Navigation","slug":null}],"Language Navigation":[],"Avatar":[{"name":"Figure","slug":"figure"}],"Calendar":[{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"},{"name":"Date Picker","slug":"date-picker"}],"Contact Timeline":[],"Switch":[{"name":"Checkbox","slug":"checkbox"},{"name":"Radio Button","slug":"radio-button"}],"Tabs":[{"name":"Accordion","slug":"accordion"}],"Navigation Bar":[{"name":"Side Navigation","slug":"side-navigation"}],"Select Combobox":[{"name":"Select","slug":"select"},{"name":"Search Input","slug":null}],"Case Card":[{"name":"Card as link","slug":"card-as-link"}],"Page Number Navigation":[],"Rich Text Content":[{"name":"Blockquote","slug":"blockquote"},{"name":"Heading","slug":"heading"},{"name":"Heading 1","slug":"heading-1"},{"name":"Heading 2","slug":"heading-2"},{"name":"Heading 3","slug":"heading-3"},{"name":"Heading 4","slug":"heading-4"},{"name":"Heading 5","slug":"heading-5"},{"name":"Heading 6","slug":"heading-6"},{"name":"Lead Paragraph","slug":"paragraph"},{"name":"Link","slug":"link"},{"name":"Ordered List","slug":"ordered-list"},{"name":"Paragraph","slug":"paragraph"},{"name":"Pre-heading","slug":"pre-heading"},{"name":"Strong","slug":"strong"},{"name":"Unordered List","slug":"unordered-list"}],"Range":[{"name":"Number Input","slug":"number-input"}],"Toggletip":[],"Logo":[],"Spinner":[{"name":"Progress Bar","slug":"progress-bar"}],"Checkbox Group":[{"name":"Checkbox","slug":"checkbox"},{"name":"Fieldset","slug":"fieldset"},{"name":"Radio Group","slug":"radio-group"}],"Date Input Group":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Picker","slug":"date-picker"},{"name":"Input Group","slug":"input-group"}],"Date Picker":[{"name":"Calendar","slug":"calendar"},{"name":"Date Input","slug":"date-input"},{"name":"Date Input Group","slug":"date-input-group"}],"Radio Group":[{"name":"Radio Button","slug":"radio-button"},{"name":"Fieldset","slug":"fieldset"},{"name":"Checkbox Group","slug":"checkbox-group"},{"name":"Select","slug":"select"}],"Task List":[{"name":"Unordered List","slug":"unordered-list"}],"Progress Bar":[{"name":"Spinner","slug":"spinner"}],"Input Group":[{"name":"Date Input Group","slug":"date-input-group"},{"name":"Form Field Partial","slug":null},{"name":"Form Field","slug":"form-field"},{"name":"Text Input","slug":"text-input"}],"Form Navigation":[{"name":"Progress List","slug":"progress-list"}],"YouTube Video":[{"name":"Video","slug":"video"}],"Data Summary":[{"name":"Description List","slug":"description-list"},{"name":"Form Summary","slug":"form-summary"}],"Video":[{"name":"Youtube Video","slug":"youtube-video"},{"name":"Figure","slug":"figure"}],"Strong":[{"name":"Paragraph","slug":"paragraph"},{"name":"Rich Text Content","slug":"rich-text-content"}],"Pull Quote":[{"name":"Blockquote","slug":"blockquote"}]}');
   var b = a(70348),
    v = a(85162);
   const x = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => p.f4.includes(e.id)),
      r = a && p.f4.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return e && (0, g.jsx)(b.n, { children: r.map((a) => (0, g.jsx)(b.K, { className: (0, l.A)('ma-definition-of-done', a && `ma-definition-of-done--${(0, p.fX)(a.title)}`), heading: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', headingLevel: n, headingApperance: 'level-5', children: (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(h._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, g.jsx)(h.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, p.qZ)(t) }, t)) }), (0, g.jsx)(t.fz, { children: (0, g.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) }, a.title)) });
    },
    j = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && a.length
      ? (0, g.jsx)(o.AC, {
         appearance: 'large',
         className: 'ma-implementation-card-group',
         children: a
          .sort((e, n) => {
           const a = e.progress.max - e.progress.value,
            t = n.progress.max - n.progress.value;
           return a === t ? e.title.localeCompare(n.title) : a - t;
          })
          .map((e) => {
           const a = e.tasks.find(({ name: e }) => 'Naam' === e),
            l = a?.value,
            c = (0, p.Pv)(e),
            m = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${l} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${l} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => m.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return globalThis.isAstro
            ? (0, g.jsx)(
               d.Z,
               {
                heading: e.title.replace(/^Community/i, ''),
                headingLevel: n,
                description: (0, g.jsxs)('div', {
                 className: 'ma-flow',
                 children: [
                  (0, g.jsxs)(i.f, { children: [(0, g.jsx)(u, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, g.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
                  (0, g.jsxs)('div', {
                   children: [
                    (h.length > 0 || c.length > 0) && (0, g.jsx)(r.DZ, { level: Math.min(n + 1, 6), children: 'Snel aan de slag' }),
                    h.length > 0 &&
                     (0, g.jsx)(t.dk, {
                      links: h
                       .filter((e) => !!m.get(e.name))
                       .map((e) => {
                        const n = m.get(e.name);
                        return { children: n.desciption, icon: (0, g.jsx)(s.r, { brand: n.brand }), href: e.value };
                       }),
                     }),
                   ],
                  }),
                  c.length > 0 && c.map(({ frameworkName: e, tasks: a }) => (0, g.jsxs)('section', { children: [(0, g.jsxs)(r.DZ, { level: Math.min(n + 2, 6), children: [l, ' in ', e] }), (0, g.jsx)(t.dk, { links: a.map((e) => ({ children: e.description, icon: (0, g.jsx)(s.r, { brand: e.brand }), href: e.value })) })] }, e)),
                 ],
                }),
               },
               e.title,
              )
            : (0, g.jsx)(
               o.Zp,
               {
                className: 'ma-implementation-card',
                children: (0, g.jsxs)(o.Wu, {
                 children: [
                  (0, g.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
                  (0, g.jsxs)(t.fz, { children: [(0, g.jsx)(u, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, g.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
                  (h.length > 0 || c.length > 0) && (0, g.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
                  h.length > 0 &&
                   (0, g.jsx)(g.Fragment, {
                    children: (0, g.jsx)(t.dk, {
                     links: h
                      .filter((e) => !!m.get(e.name))
                      .map((e) => {
                       const n = m.get(e.name);
                       return { children: n.desciption, icon: (0, g.jsx)(s.r, { brand: n.brand }), href: e.value };
                      }),
                    }),
                   }),
                  c.length > 0 && (0, g.jsx)(g.Fragment, { children: c.map(({ frameworkName: e, tasks: a }) => (0, g.jsxs)(g.Fragment, { children: [(0, g.jsxs)(t.DZ, { level: n + 2, children: [l, ' in ', e] }), (0, g.jsx)(t.dk, { links: a.map((e) => ({ children: e.description, icon: (0, g.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
                 ],
                }),
               },
               e.title,
              );
          }),
        })
      : (0, g.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    k = ({ component: e, headingLevel: n }) => {
     const a = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      r = a?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(t.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, g.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, g.jsxs)(t.Xy, { children: [r ? (0, g.jsxs)(t.Er, { children: ['Vul de ', (0, g.jsx)(t.N_, { href: r, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, g.jsxs)(t.Er, { children: [(0, g.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, g.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, g.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, g.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    N = ({ component: e, headingLevel: n, description: a }) => {
     const r = e && p.bo[e.relayStep];
     return globalThis.isAstro ? null : e && (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(m.p, { level: n, suffix: r && (0, g.jsx)(c.D, { state: r }), children: e.title }), (0, g.jsx)(t.fz, { lead: !0, children: a }), ['Help Wanted', 'Community'].includes(r) && (0, g.jsx)(v.s, { relayStep: r, description: `Schets van de ${e.title} component`, name: e.title })] });
    },
    w = ({ component: e }) => {
     const n = (e && f[e.title]) || [];
     return n.length > 0 && (0, g.jsxs)(t.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, a) => (0, g.jsxs)(g.Fragment, { children: [e.slug ? (0, g.jsx)(t.N_, { href: `/${e.slug}/`, children: e.name }) : e.name, a < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  83386(e, n, a) {
   a.d(n, { A: () => l });
   var t = a(48907),
    r = a(30758),
    i = ['size', 'color'];
   function l(e) {
    var n = e.size,
     a = void 0 === n ? 24 : n,
     l = e.color,
     s = void 0 === l ? 'currentColor' : l,
     o = (0, t.$i)(e, i);
    return r.createElement('svg', (0, t._P)({ xmlns: 'http://www.w3.org/2000/svg', className: 'icon icon-tabler icon-tabler-external-link', width: a, height: a, viewBox: '0 0 24 24', stroke: s, strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }, o), r.createElement('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }), r.createElement('path', { d: 'M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5' }), r.createElement('line', { x1: '10', y1: '14', x2: '20', y2: '4' }), r.createElement('polyline', { points: '15 4 20 4 20 9' }));
   }
  },
  85068(e, n, a) {
   a.d(n, { DZ: () => i, _B: () => l });
   var t = a(37168),
    r = a(86070);
   const i = (e) => (0, r.jsx)(t.D, { ...e }),
    l = (e) => (0, r.jsx)(t.D, { ...e, level: 3 });
  },
  85162(e, n, a) {
   a.d(n, { s: () => o });
   var t = a(29181),
    r = a(13526),
    i = a(32385),
    l = a(86070);
   const s = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    o = ({ name: e, relayStep: n, description: a }) => {
     const o = (0, i.fX)(n),
      d = s[e] ?? e;
     return (0, l.jsxs)(t.WK, { children: [(0, l.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, r.A)('ma-component-illustration', `ma-component-illustration--${o}`), fill: 'none', children: [(0, l.jsxs)('g', { fill: 'var(--ma-component-illustration-background-color, white)', children: [(0, l.jsx)('rect', { width: '960', height: '540' }), (0, l.jsx)('rect', { width: '960', height: '540' })] }), (0, l.jsxs)('g', { fill: 'var(--ma-component-illustration-grid-color, #eee)', children: [(0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, l.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, l.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, l.jsx)('use', { href: `/svg/componenten_overzicht_${(0, i.fX)(d)}.svg#component-illustration` })] }), (0, l.jsx)(t.$P, { className: 'ma-component-illustration__caption', children: a })] });
    };
  },
  88166(e, n, a) {
   a.d(n, { Z: () => t.Z });
   var t = a(50172);
  },
  96345(e, n, a) {
   a.d(n, { A: () => t });
   const t = (0, a(18652).A)('outline', 'chevron-down', 'ChevronDown', [['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]]);
  },
 },
]);
