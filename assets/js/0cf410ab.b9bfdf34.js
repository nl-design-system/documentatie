'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65816],
 {
  1292(e, n, t) {
   t.d(n, { r: () => m });
   var i = t(29181),
    a = t(74172),
    o = t(15089),
    s = t(28377),
    r = t(33648),
    d = t(83386),
    l = t(86070);
   const c = { figma: (0, l.jsx)(a.A, {}), github: (0, l.jsx)(o.A, {}), npm: (0, l.jsx)(s.A, {}), storybook: (0, l.jsx)(r.A, {}) },
    m = ({ brand: e }) => (0, l.jsx)(i.In, { children: c[e] || (0, l.jsx)(d.A, {}) });
  },
  33062(e, n, t) {
   t.d(n, { bo: () => a, KF: () => g, mJ: () => h, VZ: () => D, cR: () => A, Pv: () => f, qZ: () => s, kD: () => x, B2: () => u, Pc: () => d, f4: () => r, GT: () => k, fX: () => o, eQ: () => v, B_: () => j, o_: () => b, Rc: () => _ });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    r = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    d = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => l.indexOf(e) - l.indexOf(n)),
    g = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return m(c(n));
    },
    u = (e, n) => h(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => m(c(e.projects.flatMap((e) => p(e)))),
    f = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: a, value: o }) => {
        const s = /^(.+) URL/.exec(i)[1],
         r = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: i, id: a, value: o, description: r };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    b = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? x(e[t], [...n, t]) : []));
   }
   function k(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
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
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    D = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  54565(e, n, t) {
   t.d(n, { c: () => a });
   var i = t(30758);
   function a() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  67149(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, component: () => p, contentTitle: () => l, default: () => b, description: () => g, frontMatter: () => d, issueNumber: () => u, metadata: () => i, title: () => m, toc: () => h }));
   const i = JSON.parse('{"id":"componenten/dot-badge/index","title":"Dot Badge","description":"Stip bij een Link of Button die zonder zichtbaar label de aandacht trekt bij een statuswijziging.","source":"@site/docs/componenten/dot-badge/index.mdx","sourceDirName":"componenten/dot-badge","slug":"/dot-badge","permalink":"/dot-badge","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/dot-badge/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Dot Badge","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Dot Badge","pagination_label":"Dot Badge","description":"Stip bij een Link of Button die zonder zichtbaar label de aandacht trekt bij een statuswijziging.","slug":"/dot-badge","keywords":["badge","dot","dot badge","dot indicator","dot marker","melding","nieuw","notificatie","notification"]},"sidebar":"componenten","previous":{"title":"Dialog","permalink":"/dialog"},"next":{"title":"Drawer","permalink":"/drawer"}}');
   var a = t(86070),
    o = t(18439),
    s = t(45189),
    r = t(80506);
   const d = { title: 'Dot Badge', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Dot Badge', pagination_label: 'Dot Badge', description: 'Stip bij een Link of Button die zonder zichtbaar label de aandacht trekt bij een statuswijziging.', slug: '/dot-badge', keywords: ['badge', 'dot', 'dot badge', 'dot indicator', 'dot marker', 'melding', 'nieuw', 'notificatie', 'notification'] },
    l = void 0,
    c = {},
    m = 'Dot Badge',
    g = 'Stip bij een Link of Button die zonder zichtbaar label de aandacht trekt bij een statuswijziging.',
    u = 98,
    p = s.find((e) => e.number === u),
    h = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function f(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, a.jsx)(r.Fc, { component: p, headingLevel: 1, description: g }), '\n', (0, a.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, a.jsx)(r.VK, { component: p, headingLevel: 3 }), '\n', (0, a.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, a.jsx)(r.mu, { component: p, headingLevel: 3 }), '\n', (0, a.jsx)(r.$9, { component: p, headingLevel: 2 })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(f, { ...e }) }) : f(e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => r });
   var i = t(46447),
    a = t(13526),
    o = t(33062),
    s = t(86070);
   const r = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, s.jsx)(i.KE, { className: (0, a.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => o });
   var i = t(13526),
    a = t(86070);
   const o = ({ children: e, className: n, level: t = 1, suffix: o, ...s }) => (0, a.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...s, children: [(0, a.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, a.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  80506(e, n, t) {
   t.d(n, { VK: () => h, $9: () => b, mu: () => f, Fc: () => j });
   var i = t(29181),
    a = t(13526),
    o = t(1292),
    s = t(90495),
    r = t(54565);
   function d(e) {
    return (0, r.c)() ? e.children() : null;
   }
   var l = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, l.jsx)(d, {
     children: () => {
      const i = t(83294).V6;
      return (0, l.jsx)(i, {
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
    g = t(72642),
    u = t(58876),
    p = t(33062);
   const h = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      o = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, l.jsx)(i.If, { sections: o.map((t) => ({ className: (0, a.A)('definition-of-done', t && `definition-of-done--${(0, p.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(u._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, l.jsx)(u.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(i) }, i)) }), (0, l.jsx)(i.fz, { children: (0, l.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && t.length
      ? (0, l.jsx)(s.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            i = n.progress.max - n.progress.value;
           return t === i ? e.title.localeCompare(n.title) : t - i;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            a = t?.value,
            r = (0, p.Pv)(e),
            d = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${a} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${a} voor visuele regressie tests` }],
            ]),
            m = e.tasks.filter(({ name: e, value: n }) => d.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, l.jsx)(
            s.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(s.Wu, {
              children: [
               (0, l.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(i.fz, { children: [(0, l.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (m.length > 0 || r.length > 0) && (0, l.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               m.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(i.dk, {
                  links: m
                   .filter((e) => !!d.get(e.name))
                   .map((e) => {
                    const n = d.get(e.name);
                    return { children: n.desciption, icon: (0, l.jsx)(o.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               r.length > 0 && (0, l.jsx)(l.Fragment, { children: r.map(({ frameworkName: e, tasks: t }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(i.DZ, { level: n + 2, children: [a, ' in ', e] }), (0, l.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, l.jsx)(o.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, l.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    b = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      a = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, l.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, l.jsxs)(i.Xy, { children: [a ? (0, l.jsxs)(i.Er, { children: ['Vul de ', (0, l.jsx)(i.N_, { href: a, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, l.jsxs)(i.Er, { children: [(0, l.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, l.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, l.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, l.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    j = ({ component: e, headingLevel: n, description: t }) => {
     const a = e && p.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(g.p, { level: n, suffix: a && (0, l.jsx)(m.D, { state: a }), children: e.title }), (0, l.jsx)(i.fz, { lead: !0, children: t })] });
    };
  },
  90495(e, n, t) {
   t.d(n, { AC: () => l, Fu: () => s, Wu: () => r, Zp: () => d });
   var i = t(46447),
    a = t(13526),
    o = t(86070);
   const s = ({ background: e, children: n, className: t, ...i }) => (0, o.jsx)('div', { className: (0, a.A)('card__illustration', e && `card__illustration--${e}`, t), ...i, children: n }),
    r = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    d = ({ href: e, appearance: n, className: t, component: s = 'div', background: r, children: d }) => {
     const l = (e) => ('article' === s ? (0, o.jsx)('article', { ...e }) : 'section' === s ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      c = (0, o.jsx)(l, { className: (0, a.A)('cardgroup__card', r && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: d });
     return e ? (0, o.jsx)(i.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    l = ({ appearance: e = 'medium', children: n, className: t }) => (0, o.jsx)('div', { className: (0, a.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
