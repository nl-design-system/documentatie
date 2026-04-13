'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [72881],
 {
  1292(e, n, i) {
   i.d(n, { r: () => g });
   var a = i(29181),
    t = i(74172),
    o = i(15089),
    s = i(28377),
    r = i(33648),
    l = i(83386),
    d = i(86070);
   const c = { figma: (0, d.jsx)(t.A, {}), github: (0, d.jsx)(o.A, {}), npm: (0, d.jsx)(s.A, {}), storybook: (0, d.jsx)(r.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(a.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  33062(e, n, i) {
   i.d(n, { bo: () => t, KF: () => m, mJ: () => h, VZ: () => A, cR: () => N, Pv: () => v, qZ: () => s, kD: () => x, B2: () => p, Pc: () => l, f4: () => r, GT: () => k, fX: () => o, eQ: () => b, B_: () => j, o_: () => f, Rc: () => _ });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    t = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    r = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return g(c(n));
    },
    p = (e, n) => h(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: i }) => '' !== i && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => g(c(e.projects.flatMap((e) => u(e)))),
    v = (e) => {
     const n = u(e),
      i = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const a = e.tasks
       .filter(({ name: e, value: i }) => '' !== i && e.includes(n))
       .map(({ name: a, id: t, value: o }) => {
        const s = /^(.+) URL/.exec(a)[1],
         r = 'Storybook' === s ? `${i} (${n}) in Storybook van ${e.title}` : `${i} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: a, id: t, value: o, description: r };
       });
      return { frameworkName: n, tasks: a };
     });
    },
    f = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((i) => ('object' == typeof e[i] && null !== e[i] ? x(e[i], [...n, i]) : []));
   }
   function k(e) {
    const n = new Map();
    function i(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || i(e).localeCompare(i(n)));
   }
   function _(e) {
    const n = {};
    for (const i of e) {
     let e = n;
     for (const n of i) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const N = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  37131(e, n, i) {
   i.d(n, { VK: () => v, $9: () => j, mu: () => f, Fc: () => b, K_: () => x });
   var a = i(29181),
    t = i(13526),
    o = i(1292),
    s = i(90495),
    r = i(54565);
   function l(e) {
    return (0, r.c)() ? e.children() : null;
   }
   var d = i(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const a = i(83294).V6;
      return (0, d.jsx)(a, {
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
   var g = i(67970),
    m = i(72642),
    p = i(58876),
    u = i(33062);
   const h = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    v = ({ component: e, headingLevel: n }) => {
     const i = e && e.projects.filter((e) => u.f4.includes(e.id)),
      o = i && u.f4.map((e) => i.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(a.If, { sections: o.map((i) => ({ className: (0, t.A)('definition-of-done', i && `definition-of-done--${(0, u.fX)(i.title)}`), headingLevel: n, expanded: !1, label: i ? `${i.title} - ${i.progress.value} van ${i.progress.max}` : '', body: i && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p._, { children: i.tasks.map(({ checked: e, name: i, id: a }) => (0, d.jsx)(p.Z, { headingLevel: n + 1, checked: e, heading: i, description: (0, u.qZ)(a) }, a)) }), (0, d.jsx)(a.fz, { children: (0, d.jsxs)(a.N_, { href: `${i.url}?filterQuery=${e.title}`, children: [i.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const i = e && e.projects.filter((e) => !u.f4.includes(e.id));
     return e && i.length
      ? (0, d.jsx)(s.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: i
          .sort((e, n) => {
           const i = e.progress.max - e.progress.value,
            a = n.progress.max - n.progress.value;
           return i === a ? e.title.localeCompare(n.title) : i - a;
          })
          .map((e) => {
           const i = e.tasks.find(({ name: e }) => 'Naam' === e),
            t = i?.value,
            r = (0, u.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${t} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${t} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            s.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(s.Wu, {
              children: [
               (0, d.jsx)(a.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(a.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(a.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || r.length > 0) && (0, d.jsx)(a.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(a.dk, {
                  links: g
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(o.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               r.length > 0 && (0, d.jsx)(d.Fragment, { children: r.map(({ frameworkName: e, tasks: i }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(a.DZ, { level: n + 2, children: [t, ' in ', e] }), (0, d.jsx)(a.dk, { links: i.map((e) => ({ children: e.description, icon: (0, d.jsx)(o.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(a.fz, { children: 'Er zijn nog geen implementaties' });
    },
    j = ({ component: e, headingLevel: n }) => {
     const i = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      t = i?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(a.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(a.Xy, { children: [t ? (0, d.jsxs)(a.Er, { children: ['Vul de ', (0, d.jsx)(a.N_, { href: t, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(a.Er, { children: [(0, d.jsxs)(a.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(a.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(a.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(a.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: i }) => {
     const t = e && u.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: t && (0, d.jsx)(g.D, { state: t }), children: e.title }), (0, d.jsx)(a.fz, { lead: !0, children: i })] });
    },
    x = ({ component: e }) => {
     const n = (e && h[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(a.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, i) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), i < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  54565(e, n, i) {
   i.d(n, { c: () => t });
   var a = i(30758);
   function t() {
    const [e, n] = (0, a.useState)();
    return ((0, a.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, i) {
   i.d(n, { D: () => r });
   var a = i(46447),
    t = i(13526),
    o = i(33062),
    s = i(86070);
   const r = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, s.jsx)(a.KE, { className: (0, t.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, i) {
   i.d(n, { p: () => o });
   var a = i(13526),
    t = i(86070);
   const o = ({ children: e, className: n, level: i = 1, suffix: o, ...s }) => (0, t.jsxs)('hgroup', { className: (0, a.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...s, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  87195(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, component: () => u, contentTitle: () => d, default: () => f, description: () => m, frontMatter: () => l, issueNumber: () => p, metadata: () => a, title: () => g, toc: () => h }));
   const a = JSON.parse('{"id":"componenten/side-navigation/index","title":"Side Navigation","description":"Verticale navigatie die de mogelijkheid biedt om tussen pagina\'s te navigeren.","source":"@site/docs/componenten/side-navigation/index.mdx","sourceDirName":"componenten/side-navigation","slug":"/side-navigation","permalink":"/side-navigation","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/side-navigation/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Side Navigation","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Side Navigation","pagination_label":"Side Navigation","description":"Verticale navigatie die de mogelijkheid biedt om tussen pagina\'s te navigeren.","slug":"/side-navigation","keywords":["hierarchical navigation","left navigation","menu","nav","navigation","navigation bar","navigation panel","page navigation","right navigation","side menu","side nav","side navigation","side panel","sidebar","sidebar navigation","tree navigation","vertical menu","vertical nav","vertical navigation"]},"sidebar":"componenten","previous":{"title":"Separator","permalink":"/separator"},"next":{"title":"Skip Link","permalink":"/skip-link"}}');
   var t = i(86070),
    o = i(18439),
    s = i(45189),
    r = i(37131);
   const l = { title: 'Side Navigation', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Side Navigation', pagination_label: 'Side Navigation', description: "Verticale navigatie die de mogelijkheid biedt om tussen pagina's te navigeren.", slug: '/side-navigation', keywords: ['hierarchical navigation', 'left navigation', 'menu', 'nav', 'navigation', 'navigation bar', 'navigation panel', 'page navigation', 'right navigation', 'side menu', 'side nav', 'side navigation', 'side panel', 'sidebar', 'sidebar navigation', 'tree navigation', 'vertical menu', 'vertical nav', 'vertical navigation'] },
    d = void 0,
    c = {},
    g = 'Side Navigation',
    m = "Verticale navigatie die de mogelijkheid biedt om tussen pagina's te navigeren.",
    p = 53,
    u = s.find((e) => e.number === p),
    h = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function v(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, t.jsx)(r.Fc, { component: u, headingLevel: 1, description: m }), '\n', (0, t.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, t.jsx)(r.VK, { component: u, headingLevel: 3 }), '\n', (0, t.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, t.jsx)(r.mu, { component: u, headingLevel: 3 }), '\n', (0, t.jsx)(r.K_, { component: u }), '\n', (0, t.jsx)(r.$9, { component: u, headingLevel: 2 })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(v, { ...e }) }) : v(e);
   }
  },
  90495(e, n, i) {
   i.d(n, { AC: () => d, Fu: () => s, Wu: () => r, Zp: () => l });
   var a = i(46447),
    t = i(13526),
    o = i(86070);
   const s = ({ background: e, children: n, className: i, ...a }) => (0, o.jsx)('div', { className: (0, t.A)('card__illustration', e && `card__illustration--${e}`, i), ...a, children: n }),
    r = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: i, component: s = 'div', background: r, children: l }) => {
     const d = (e) => ('article' === s ? (0, o.jsx)('article', { ...e }) : 'section' === s ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      c = (0, o.jsx)(d, { className: (0, t.A)('cardgroup__card', r && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, i), children: l });
     return e ? (0, o.jsx)(a.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: i }) => (0, o.jsx)('div', { className: (0, t.A)('cardgroup', `cardgroup--${e}`, i), children: n });
  },
 },
]);
