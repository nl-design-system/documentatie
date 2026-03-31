'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [58973],
 {
  1292(e, n, t) {
   t.d(n, { r: () => m });
   var r = t(29181),
    s = t(74172),
    a = t(15089),
    i = t(28377),
    o = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(s.A, {}), github: (0, d.jsx)(a.A, {}), npm: (0, d.jsx)(i.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    m = ({ brand: e }) => (0, d.jsx)(r.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  16157(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, component: () => g, contentTitle: () => d, default: () => v, description: () => u, frontMatter: () => l, issueNumber: () => p, metadata: () => r, title: () => m, toc: () => h }));
   const r = JSON.parse('{"id":"componenten/form-summary/index","title":"Form Summary","description":"Overzicht van ingevoerde data in een formulier.","source":"@site/docs/componenten/form-summary/index.mdx","sourceDirName":"componenten/form-summary","slug":"/form-summary","permalink":"/form-summary","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/form-summary/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Form Summary","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Form Summary","pagination_label":"Form Summary","description":"Overzicht van ingevoerde data in een formulier.","slug":"/form-summary","keywords":["antwoordlijst","conclusion","contents list","form summary","grouped list","lijst","list","overview","overzicht","samenvatting","summary","summary data","summary list","verzameling"]},"sidebar":"componenten","previous":{"title":"Form Navigation","permalink":"/form-navigation"},"next":{"title":"Heading","permalink":"/heading"}}');
   var s = t(86070),
    a = t(18439),
    i = t(45189),
    o = t(80506);
   const l = { title: 'Form Summary', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Form Summary', pagination_label: 'Form Summary', description: 'Overzicht van ingevoerde data in een formulier.', slug: '/form-summary', keywords: ['antwoordlijst', 'conclusion', 'contents list', 'form summary', 'grouped list', 'lijst', 'list', 'overview', 'overzicht', 'samenvatting', 'summary', 'summary data', 'summary list', 'verzameling'] },
    d = void 0,
    c = {},
    m = 'Form Summary',
    u = 'Overzicht van ingevoerde data in een formulier.',
    p = 185,
    g = i.find((e) => e.number === p),
    h = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function f(e) {
    const n = { h2: 'h2', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, s.jsx)(o.Fc, { component: g, headingLevel: 1, description: u }), '\n', (0, s.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, s.jsx)(o.VK, { component: g, headingLevel: 3 }), '\n', (0, s.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, s.jsx)(o.mu, { component: g, headingLevel: 3 }), '\n', (0, s.jsx)(o.$9, { component: g, headingLevel: 2 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(f, { ...e }) }) : f(e);
   }
  },
  33062(e, n, t) {
   t.d(n, { bo: () => s, KF: () => u, mJ: () => h, VZ: () => A, cR: () => y, Pv: () => f, qZ: () => i, kD: () => x, B2: () => p, Pc: () => l, f4: () => o, GT: () => _, fX: () => a, eQ: () => b, B_: () => j, o_: () => v, Rc: () => k });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    a = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return m(c(n));
    },
    p = (e, n) => h(e).includes(n),
    g = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => m(c(e.projects.flatMap((e) => g(e)))),
    f = (e) => {
     const n = g(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: s, value: a }) => {
        const i = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === i ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: r, id: s, value: a, description: o };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    v = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? x(e[t], [...n, t]) : []));
   }
   function _(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function k(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const y = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  54565(e, n, t) {
   t.d(n, { c: () => s });
   var r = t(30758);
   function s() {
    const [e, n] = (0, r.useState)();
    return ((0, r.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => o });
   var r = t(46447),
    s = t(13526),
    a = t(33062),
    i = t(86070);
   const o = ({ state: e }) => {
    const n = (0, a.fX)(e);
    return (0, i.jsx)(r.KE, { className: (0, s.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => a });
   var r = t(13526),
    s = t(86070);
   const a = ({ children: e, className: n, level: t = 1, suffix: a, ...i }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...i, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), a && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
  },
  80506(e, n, t) {
   t.d(n, { VK: () => h, $9: () => v, mu: () => f, Fc: () => j });
   var r = t(29181),
    s = t(13526),
    a = t(1292),
    i = t(90495),
    o = t(54565);
   function l(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const r = t(83294).V6;
      return (0, d.jsx)(r, {
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
   var m = t(67970),
    u = t(72642),
    p = t(58876),
    g = t(33062);
   const h = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => g.f4.includes(e.id)),
      a = t && g.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(r.If, { sections: a.map((t) => ({ className: (0, s.A)('definition-of-done', t && `definition-of-done--${(0, g.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p._, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, d.jsx)(p.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, g.qZ)(r) }, r)) }), (0, d.jsx)(r.fz, { children: (0, d.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !g.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(i.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            r = n.progress.max - n.progress.value;
           return t === r ? e.title.localeCompare(n.title) : t - r;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            s = t?.value,
            o = (0, g.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            m = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            i.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(i.Wu, {
              children: [
               (0, d.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(r.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (m.length > 0 || o.length > 0) && (0, d.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               m.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.dk, {
                  links: m
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(a.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, d.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(a.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    v = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(r.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.Xy, { children: [s ? (0, d.jsxs)(r.Er, { children: ['Vul de ', (0, d.jsx)(r.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.Er, { children: [(0, d.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    j = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && g.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u.p, { level: n, suffix: s && (0, d.jsx)(m.D, { state: s }), children: e.title }), (0, d.jsx)(r.fz, { lead: !0, children: t })] });
    };
  },
  90495(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => i, Wu: () => o, Zp: () => l });
   var r = t(46447),
    s = t(13526),
    a = t(86070);
   const i = ({ background: e, children: n, className: t, ...r }) => (0, a.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    o = (e) => (0, a.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: i = 'div', background: o, children: l }) => {
     const d = (e) => ('article' === i ? (0, a.jsx)('article', { ...e }) : 'section' === i ? (0, a.jsx)('section', { ...e }) : (0, a.jsx)('div', { ...e })),
      c = (0, a.jsx)(d, { className: (0, s.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, a.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, a.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
