'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71842],
 {
  1292(e, n, t) {
   t.d(n, { r: () => u });
   var o = t(29181),
    i = t(74172),
    s = t(15089),
    r = t(28377),
    a = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(r.A, {}), storybook: (0, d.jsx)(a.A, {}) },
    u = ({ brand: e }) => (0, d.jsx)(o.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  25674(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, component: () => g, contentTitle: () => d, default: () => f, description: () => p, frontMatter: () => l, issueNumber: () => m, metadata: () => o, title: () => u, toc: () => h }));
   const o = JSON.parse('{"id":"componenten/radio-button/index","title":"Radio Button","description":"Invoerveld voor het kiezen van een enkele optie uit een groep van opties.","source":"@site/docs/componenten/radio-button/index.mdx","sourceDirName":"componenten/radio-button","slug":"/radio-button","permalink":"/radio-button","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/radio-button/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Radio Button","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Radio Button","pagination_label":"Radio Button","description":"Invoerveld voor het kiezen van een enkele optie uit een groep van opties.","slug":"/radio-button","keywords":["form","invoerveld","optie","opties","option","option button","radio","radio button","radioknop","keuze","keuzemogelijkheid","keuzerondje"]},"sidebar":"componenten","previous":{"title":"Progress List","permalink":"/progress-list"},"next":{"title":"Radio Group","permalink":"/radio-group"}}');
   var i = t(86070),
    s = t(18439),
    r = t(45189),
    a = t(80506);
   const l = { title: 'Radio Button', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Radio Button', pagination_label: 'Radio Button', description: 'Invoerveld voor het kiezen van een enkele optie uit een groep van opties.', slug: '/radio-button', keywords: ['form', 'invoerveld', 'optie', 'opties', 'option', 'option button', 'radio', 'radio button', 'radioknop', 'keuze', 'keuzemogelijkheid', 'keuzerondje'] },
    d = void 0,
    c = {},
    u = 'Radio Button',
    p = 'Invoerveld voor het kiezen van een enkele optie uit een groep van opties.',
    m = 65,
    g = r.find((e) => e.number === m),
    h = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function v(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(a.Fc, { component: g, headingLevel: 1, description: p }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(a.VK, { component: g, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(a.mu, { component: g, headingLevel: 3 }), '\n', (0, i.jsx)(a.$9, { component: g, headingLevel: 2 })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
  },
  33062(e, n, t) {
   t.d(n, { bo: () => i, KF: () => p, mJ: () => h, VZ: () => N, cR: () => A, Pv: () => v, qZ: () => r, kD: () => x, B2: () => m, Pc: () => l, f4: () => a, GT: () => k, fX: () => s, eQ: () => b, B_: () => j, o_: () => f, Rc: () => _ });
   const o = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    p = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return u(c(n));
    },
    m = (e, n) => h(e).includes(n),
    g = (e) => {
     const n = / URL \(([^)]+)\)/;
     return u(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => u(c(e.projects.flatMap((e) => g(e)))),
    v = (e) => {
     const n = g(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const o = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: o, id: i, value: s }) => {
        const r = /^(.+) URL/.exec(o)[1],
         a = 'Storybook' === r ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: o, id: i, value: s, description: a };
       });
      return { frameworkName: n, tasks: o };
     });
    },
    f = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? x(e[t], [...n, t]) : []));
   }
   function k(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, f(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function _(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const A = () => {
     const e = o.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    N = () => {
     const e = o.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  54565(e, n, t) {
   t.d(n, { c: () => i });
   var o = t(30758);
   function i() {
    const [e, n] = (0, o.useState)();
    return ((0, o.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => a });
   var o = t(46447),
    i = t(13526),
    s = t(33062),
    r = t(86070);
   const a = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, r.jsx)(o.KE, { className: (0, i.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => s });
   var o = t(13526),
    i = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...r }) => (0, i.jsxs)('hgroup', { className: (0, o.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...r, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  80506(e, n, t) {
   t.d(n, { VK: () => h, $9: () => f, mu: () => v, Fc: () => j });
   var o = t(29181),
    i = t(13526),
    s = t(1292),
    r = t(90495),
    a = t(54565);
   function l(e) {
    return (0, a.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const o = t(83294).V6;
      return (0, d.jsx)(o, {
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
   var u = t(67970),
    p = t(72642),
    m = t(58876),
    g = t(33062);
   const h = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => g.f4.includes(e.id)),
      s = t && g.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(o.If, { sections: s.map((t) => ({ className: (0, i.A)('definition-of-done', t && `definition-of-done--${(0, g.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: o }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, g.qZ)(o) }, o)) }), (0, d.jsx)(o.fz, { children: (0, d.jsxs)(o.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    v = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !g.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(r.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            o = n.progress.max - n.progress.value;
           return t === o ? e.title.localeCompare(n.title) : t - o;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = t?.value,
            a = (0, g.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            r.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(r.Wu, {
              children: [
               (0, d.jsx)(o.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(o.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(o.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || a.length > 0) && (0, d.jsx)(o.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(o.dk, {
                  links: u
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 && (0, d.jsx)(d.Fragment, { children: a.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(o.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, d.jsx)(o.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(o.fz, { children: 'Er zijn nog geen implementaties' });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(o.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(o.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(o.Xy, { children: [i ? (0, d.jsxs)(o.Er, { children: ['Vul de ', (0, d.jsx)(o.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(o.Er, { children: [(0, d.jsxs)(o.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(o.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(o.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(o.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    j = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && g.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p.p, { level: n, suffix: i && (0, d.jsx)(u.D, { state: i }), children: e.title }), (0, d.jsx)(o.fz, { lead: !0, children: t })] });
    };
  },
  90495(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => r, Wu: () => a, Zp: () => l });
   var o = t(46447),
    i = t(13526),
    s = t(86070);
   const r = ({ background: e, children: n, className: t, ...o }) => (0, s.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, t), ...o, children: n }),
    a = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: r = 'div', background: a, children: l }) => {
     const d = (e) => ('article' === r ? (0, s.jsx)('article', { ...e }) : 'section' === r ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      c = (0, s.jsx)(d, { className: (0, i.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, s.jsx)(o.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, s.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
