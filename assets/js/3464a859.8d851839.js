'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [49717],
 {
  1292(e, n, a) {
   a.d(n, { r: () => g });
   var t = a(29181),
    o = a(74172),
    r = a(15089),
    s = a(28377),
    i = a(33648),
    l = a(83386),
    d = a(86070);
   const c = { figma: (0, d.jsx)(o.A, {}), github: (0, d.jsx)(r.A, {}), npm: (0, d.jsx)(s.A, {}), storybook: (0, d.jsx)(i.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(t.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  33062(e, n, a) {
   a.d(n, { bo: () => o, KF: () => p, mJ: () => h, VZ: () => N, cR: () => A, Pv: () => f, qZ: () => s, kD: () => x, B2: () => m, Pc: () => l, f4: () => i, GT: () => k, fX: () => r, eQ: () => j, B_: () => b, o_: () => v, Rc: () => _ });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    o = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    p = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return g(c(n));
    },
    m = (e, n) => h(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: a }) => '' !== a && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => g(c(e.projects.flatMap((e) => u(e)))),
    f = (e) => {
     const n = u(e),
      a = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: a }) => '' !== a && e.includes(n))
       .map(({ name: t, id: o, value: r }) => {
        const s = /^(.+) URL/.exec(t)[1],
         i = 'Storybook' === s ? `${a} (${n}) in Storybook van ${e.title}` : `${a} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: t, id: o, value: r, description: i };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    v = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? x(e[a], [...n, a]) : []));
   }
   function k(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || a(e).localeCompare(a(n)));
   }
   function _(e) {
    const n = {};
    for (const a of e) {
     let e = n;
     for (const n of a) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const A = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    N = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  54565(e, n, a) {
   a.d(n, { c: () => o });
   var t = a(30758);
   function o() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, a) {
   a.d(n, { D: () => i });
   var t = a(46447),
    o = a(13526),
    r = a(33062),
    s = a(86070);
   const i = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, s.jsx)(t.KE, { className: (0, o.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  70440(e, n, a) {
   (a.r(n), a.d(n, { assets: () => c, component: () => u, contentTitle: () => d, default: () => v, description: () => p, frontMatter: () => l, issueNumber: () => m, metadata: () => t, title: () => g, toc: () => h }));
   const t = JSON.parse('{"id":"componenten/page-header/index","title":"Page Header","description":"Consistente plek bovenaan elke pagina, vaak met een logo, navigatie en zoekfunctie.","source":"@site/docs/componenten/page-header/index.mdx","sourceDirName":"componenten/page-header","slug":"/page-header","permalink":"/page-header","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/page-header/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Page Header","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Page Header","pagination_label":"Page Header","description":"Consistente plek bovenaan elke pagina, vaak met een logo, navigatie en zoekfunctie.","slug":"/page-header","keywords":["branding","global","global header","header","language","logo","main header","masthead","merk","navigation","navigation bar","pageheader","page header","section header","toolbar","top header","top bar"]},"sidebar":"componenten","previous":{"title":"Page Footer","permalink":"/page-footer"},"next":{"title":"Page Number Navigation","permalink":"/page-number-navigation"}}');
   var o = a(86070),
    r = a(18439),
    s = a(45189),
    i = a(80506);
   const l = { title: 'Page Header', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Page Header', pagination_label: 'Page Header', description: 'Consistente plek bovenaan elke pagina, vaak met een logo, navigatie en zoekfunctie.', slug: '/page-header', keywords: ['branding', 'global', 'global header', 'header', 'language', 'logo', 'main header', 'masthead', 'merk', 'navigation', 'navigation bar', 'pageheader', 'page header', 'section header', 'toolbar', 'top header', 'top bar'] },
    d = void 0,
    c = {},
    g = 'Page Header',
    p = 'Consistente plek bovenaan elke pagina, vaak met een logo, navigatie en zoekfunctie.',
    m = 55,
    u = s.find((e) => e.number === m),
    h = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function f(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, o.jsx)(i.Fc, { component: u, headingLevel: 1, description: p }), '\n', (0, o.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, o.jsx)(i.VK, { component: u, headingLevel: 3 }), '\n', (0, o.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, o.jsx)(i.mu, { component: u, headingLevel: 3 }), '\n', (0, o.jsx)(i.$9, { component: u, headingLevel: 2 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(f, { ...e }) }) : f(e);
   }
  },
  72642(e, n, a) {
   a.d(n, { p: () => r });
   var t = a(13526),
    o = a(86070);
   const r = ({ children: e, className: n, level: a = 1, suffix: r, ...s }) => (0, o.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${a}`, n), ...s, children: [(0, o.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, o.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  80506(e, n, a) {
   a.d(n, { VK: () => h, $9: () => v, mu: () => f, Fc: () => b });
   var t = a(29181),
    o = a(13526),
    r = a(1292),
    s = a(90495),
    i = a(54565);
   function l(e) {
    return (0, i.c)() ? e.children() : null;
   }
   var d = a(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const t = a(83294).V6;
      return (0, d.jsx)(t, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: e, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: n, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   var g = a(67970),
    p = a(72642),
    m = a(58876),
    u = a(33062);
   const h = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => u.f4.includes(e.id)),
      r = a && u.f4.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: r.map((a) => ({ className: (0, o.A)('definition-of-done', a && `definition-of-done--${(0, u.fX)(a.title)}`), headingLevel: n, expanded: !1, label: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', body: a && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, u.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => !u.f4.includes(e.id));
     return e && a.length
      ? (0, d.jsx)(s.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: a
          .sort((e, n) => {
           const a = e.progress.max - e.progress.value,
            t = n.progress.max - n.progress.value;
           return a === t ? e.title.localeCompare(n.title) : a - t;
          })
          .map((e) => {
           const a = e.tasks.find(({ name: e }) => 'Naam' === e),
            o = a?.value,
            i = (0, u.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${o} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${o} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            s.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(s.Wu, {
              children: [
               (0, d.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(t.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || i.length > 0) && (0, d.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(t.dk, {
                  links: g
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(r.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               i.length > 0 && (0, d.jsx)(d.Fragment, { children: i.map(({ frameworkName: e, tasks: a }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: n + 2, children: [o, ' in ', e] }), (0, d.jsx)(t.dk, { links: a.map((e) => ({ children: e.description, icon: (0, d.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    v = ({ component: e, headingLevel: n }) => {
     const a = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      o = a?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [o ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: o, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: a }) => {
     const o = e && u.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p.p, { level: n, suffix: o && (0, d.jsx)(g.D, { state: o }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: a })] });
    };
  },
  90495(e, n, a) {
   a.d(n, { AC: () => d, Fu: () => s, Wu: () => i, Zp: () => l });
   var t = a(46447),
    o = a(13526),
    r = a(86070);
   const s = ({ background: e, children: n, className: a, ...t }) => (0, r.jsx)('div', { className: (0, o.A)('card__illustration', e && `card__illustration--${e}`, a), ...t, children: n }),
    i = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: a, component: s = 'div', background: i, children: l }) => {
     const d = (e) => ('article' === s ? (0, r.jsx)('article', { ...e }) : 'section' === s ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      c = (0, r.jsx)(d, { className: (0, o.A)('cardgroup__card', i && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, a), children: l });
     return e ? (0, r.jsx)(t.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: a }) => (0, r.jsx)('div', { className: (0, o.A)('cardgroup', `cardgroup--${e}`, a), children: n });
  },
 },
]);
