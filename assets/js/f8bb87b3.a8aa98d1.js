'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [93259],
 {
  1292(e, n, a) {
   a.d(n, { r: () => g });
   var t = a(29181),
    i = a(74172),
    r = a(15089),
    s = a(28377),
    o = a(33648),
    l = a(83386),
    d = a(86070);
   const c = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(r.A, {}), npm: (0, d.jsx)(s.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(t.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  22056(e, n, a) {
   (a.r(n), a.d(n, { assets: () => g, component: () => f, componentName: () => v, contentTitle: () => c, default: () => b, description: () => p, frontMatter: () => d, issueNumber: () => h, metadata: () => t, relayStep: () => u, title: () => m, toc: () => j }));
   const t = JSON.parse('{"id":"componenten/page-number-navigation/index","title":"Page Number Navigation","description":"Navigatie naar andere pagina\'s wanneer een grote hoeveelheid informatie is verdeeld over genummerde pagina\'s.","source":"@site/docs/componenten/page-number-navigation/index.mdx","sourceDirName":"componenten/page-number-navigation","slug":"/page-number-navigation","permalink":"/page-number-navigation","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/page-number-navigation/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Page Number Navigation","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Page Number Navigation","pagination_label":"Page Number Navigation","description":"Navigatie naar andere pagina\'s wanneer een grote hoeveelheid informatie is verdeeld over genummerde pagina\'s.","slug":"/page-number-navigation","keywords":["content pagination","navigation","navigation links","numbered pagination","number navigation","pages","page control","page selector","page indicator","page links","page number","page numbers","paginering","paginatie","pagination","page navigation","pagina","paging"]},"sidebar":"componenten","previous":{"title":"Page Header","permalink":"/page-header"},"next":{"title":"Paragraph","permalink":"/paragraph"}}');
   var i = a(86070),
    r = a(18439),
    s = a(87069),
    o = a(80506),
    l = a(44594);
   const d = { title: 'Page Number Navigation', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Page Number Navigation', pagination_label: 'Page Number Navigation', description: "Navigatie naar andere pagina's wanneer een grote hoeveelheid informatie is verdeeld over genummerde pagina's.", slug: '/page-number-navigation', keywords: ['content pagination', 'navigation', 'navigation links', 'numbered pagination', 'number navigation', 'pages', 'page control', 'page selector', 'page indicator', 'page links', 'page number', 'page numbers', 'paginering', 'paginatie', 'pagination', 'page navigation', 'pagina', 'paging'] },
    c = void 0,
    g = {},
    m = 'Page Number Navigation',
    p = "Navigatie naar andere pagina's wanneer een grote hoeveelheid informatie is verdeeld over genummerde pagina's.",
    h = 106,
    u = 'help wanted',
    v = 'page-number-navigation',
    f = s.find((e) => e.number === h),
    j = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function x(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(o.Fc, { component: f, headingLevel: 1, description: p }), '\n', (0, i.jsx)(l.s, { relayStep: u, description: `Schets van de ${v} component`, name: v }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(o.VK, { component: f, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(o.mu, { component: f, headingLevel: 3 }), '\n', (0, i.jsx)(o.$9, { component: f, headingLevel: 2 })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
  },
  33062(e, n, a) {
   a.d(n, { bo: () => i, KF: () => m, mJ: () => u, VZ: () => w, cR: () => k, Pv: () => v, qZ: () => s, kD: () => b, B2: () => p, Pc: () => l, f4: () => o, GT: () => N, fX: () => r, eQ: () => x, B_: () => j, o_: () => f, Rc: () => _ });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return g(c(n));
    },
    p = (e, n) => u(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: a }) => '' !== a && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => g(c(e.projects.flatMap((e) => h(e)))),
    v = (e) => {
     const n = h(e),
      a = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: a }) => '' !== a && e.includes(n))
       .map(({ name: t, id: i, value: r }) => {
        const s = /^(.+) URL/.exec(t)[1],
         o = 'Storybook' === s ? `${a} (${n}) in Storybook van ${e.title}` : `${a} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: t, id: i, value: r, description: o };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    f = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    x = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((a) => ('object' == typeof e[a] && null !== e[a] ? b(e[a], [...n, a]) : []));
   }
   function N(e) {
    const n = new Map();
    function a(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
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
   const k = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    w = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  44594(e, n, a) {
   a.d(n, { s: () => l });
   var t = a(29181),
    i = a(13526),
    r = a(33062),
    s = a(86070);
   const o = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: n, description: a }) => {
     const l = (0, r.fX)(n),
      d = o[e] ?? e;
     return (0, s.jsxs)(t.WK, { children: [(0, s.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, i.A)('component-illustration', `component-illustration--${l}`), fill: 'none', children: [(0, s.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, s.jsx)('rect', { width: '960', height: '540' }), (0, s.jsx)('rect', { width: '960', height: '540' })] }), (0, s.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, s.jsx)('use', { href: `/svg/componenten_overzicht_${(0, r.fX)(d)}.svg#component-illustration` })] }), (0, s.jsx)(t.$P, { className: 'component-illustration__caption', children: a })] });
    };
  },
  54565(e, n, a) {
   a.d(n, { c: () => i });
   var t = a(30758);
   function i() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, a) {
   a.d(n, { D: () => o });
   var t = a(46447),
    i = a(13526),
    r = a(33062),
    s = a(86070);
   const o = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, s.jsx)(t.KE, { className: (0, i.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, a) {
   a.d(n, { p: () => r });
   var t = a(13526),
    i = a(86070);
   const r = ({ children: e, className: n, level: a = 1, suffix: r, ...s }) => (0, i.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${a}`, n), ...s, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  80506(e, n, a) {
   a.d(n, { VK: () => u, $9: () => f, mu: () => v, Fc: () => j });
   var t = a(29181),
    i = a(13526),
    r = a(1292),
    s = a(90495),
    o = a(54565);
   function l(e) {
    return (0, o.c)() ? e.children() : null;
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
    m = a(72642),
    p = a(58876),
    h = a(33062);
   const u = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => h.f4.includes(e.id)),
      r = a && h.f4.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: r.map((a) => ({ className: (0, i.A)('definition-of-done', a && `definition-of-done--${(0, h.fX)(a.title)}`), headingLevel: n, expanded: !1, label: a ? `${a.title} - ${a.progress.value} van ${a.progress.max}` : '', body: a && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p._, { children: a.tasks.map(({ checked: e, name: a, id: t }) => (0, d.jsx)(p.Z, { headingLevel: n + 1, checked: e, heading: a, description: (0, h.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${a.url}?filterQuery=${e.title}`, children: [a.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    v = ({ component: e, headingLevel: n }) => {
     const a = e && e.projects.filter((e) => !h.f4.includes(e.id));
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
            i = a?.value,
            o = (0, h.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
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
               (g.length > 0 || o.length > 0) && (0, d.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
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
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: a }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, d.jsx)(t.dk, { links: a.map((e) => ({ children: e.description, icon: (0, d.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    f = ({ component: e, headingLevel: n }) => {
     const a = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = a?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [i ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    j = ({ component: e, headingLevel: n, description: a }) => {
     const i = e && h.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: i && (0, d.jsx)(g.D, { state: i }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: a })] });
    };
  },
  90495(e, n, a) {
   a.d(n, { AC: () => d, Fu: () => s, Wu: () => o, Zp: () => l });
   var t = a(46447),
    i = a(13526),
    r = a(86070);
   const s = ({ background: e, children: n, className: a, ...t }) => (0, r.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, a), ...t, children: n }),
    o = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: a, component: s = 'div', background: o, children: l }) => {
     const d = (e) => ('article' === s ? (0, r.jsx)('article', { ...e }) : 'section' === s ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      c = (0, r.jsx)(d, { className: (0, i.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, a), children: l });
     return e ? (0, r.jsx)(t.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: a }) => (0, r.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, a), children: n });
  },
 },
]);
