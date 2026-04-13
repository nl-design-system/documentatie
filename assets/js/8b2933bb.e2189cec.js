'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [99452],
 {
  1292(e, n, t) {
   t.d(n, { r: () => g });
   var r = t(29181),
    s = t(74172),
    i = t(15089),
    a = t(28377),
    o = t(33648),
    l = t(83386),
    c = t(86070);
   const d = { figma: (0, c.jsx)(s.A, {}), github: (0, c.jsx)(i.A, {}), npm: (0, c.jsx)(a.A, {}), storybook: (0, c.jsx)(o.A, {}) },
    g = ({ brand: e }) => (0, c.jsx)(r.In, { children: d[e] || (0, c.jsx)(l.A, {}) });
  },
  19988(e, n, t) {
   (t.r(n), t.d(n, { assets: () => g, component: () => j, componentName: () => f, contentTitle: () => d, default: () => b, description: () => m, frontMatter: () => c, issueNumber: () => p, metadata: () => r, relayStep: () => u, title: () => h, toc: () => x }));
   const r = JSON.parse('{"id":"componenten/progress-circle/index","title":"Progress Circle","description":"Toont de voortgang van een bepaald proces in de vorm van een cirkel.","source":"@site/docs/componenten/progress-circle/index.mdx","sourceDirName":"componenten/progress-circle","slug":"/progress-circle","permalink":"/progress-circle","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/progress-circle/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Progress Circle","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Progress Circle","pagination_label":"Progress Circle","description":"Toont de voortgang van een bepaald proces in de vorm van een cirkel.","slug":"/progress-circle"},"sidebar":"componenten","previous":{"title":"Progress Bar","permalink":"/progress-bar"},"next":{"title":"Progress List","permalink":"/progress-list"}}');
   var s = t(86070),
    i = t(18439),
    a = t(45189),
    o = t(37131),
    l = t(44594);
   const c = { title: 'Progress Circle', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Progress Circle', pagination_label: 'Progress Circle', description: 'Toont de voortgang van een bepaald proces in de vorm van een cirkel.', slug: '/progress-circle' },
    d = void 0,
    g = {},
    h = 'Progress Circle',
    m = 'Toont de voortgang van een bepaald proces in de vorm van een cirkel.',
    p = 366,
    u = 'help wanted',
    f = 'progress-circle',
    j = a.find((e) => e.number === p),
    x = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function v(e) {
    const n = { h2: 'h2', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, s.jsx)(o.Fc, { component: j, headingLevel: 1, description: m }), '\n', (0, s.jsx)(l.s, { relayStep: u, description: `Schets van de ${f} component`, name: f }), '\n', (0, s.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, s.jsx)(o.VK, { component: j, headingLevel: 3 }), '\n', (0, s.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, s.jsx)(o.mu, { component: j, headingLevel: 3 }), '\n', (0, s.jsx)(o.K_, { component: j }), '\n', (0, s.jsx)(o.$9, { component: j, headingLevel: 2 })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(v, { ...e }) }) : v(e);
   }
  },
  33062(e, n, t) {
   t.d(n, { bo: () => s, KF: () => h, mJ: () => u, VZ: () => N, cR: () => A, Pv: () => f, qZ: () => a, kD: () => b, B2: () => m, Pc: () => l, f4: () => o, GT: () => _, fX: () => i, eQ: () => v, B_: () => x, o_: () => j, Rc: () => k });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const g = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    h = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return g(d(n));
    },
    m = (e, n) => u(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(d(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => g(d(e.projects.flatMap((e) => p(e)))),
    f = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: s, value: i }) => {
        const a = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: r, id: s, value: i, description: o };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    j = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function _(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
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
   const A = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    N = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  37131(e, n, t) {
   t.d(n, { VK: () => f, $9: () => x, mu: () => j, Fc: () => v, K_: () => b });
   var r = t(29181),
    s = t(13526),
    i = t(1292),
    a = t(90495),
    o = t(54565);
   function l(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var c = t(86070);
   const d = ({ checked: e, unchecked: n }) =>
    (0, c.jsx)(l, {
     children: () => {
      const r = t(83294).V6;
      return (0, c.jsx)(r, {
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
   var g = t(67970),
    h = t(72642),
    m = t(58876),
    p = t(33062);
   const u = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      i = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, c.jsx)(r.If, { sections: i.map((t) => ({ className: (0, s.A)('definition-of-done', t && `definition-of-done--${(0, p.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, c.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(r) }, r)) }), (0, c.jsx)(r.fz, { children: (0, c.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && t.length
      ? (0, c.jsx)(a.AC, {
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
            o = (0, p.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, c.jsx)(
            a.Zp,
            {
             className: 'implementation-card',
             children: (0, c.jsxs)(a.Wu, {
              children: [
               (0, c.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, c.jsxs)(r.fz, { children: [(0, c.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || o.length > 0) && (0, c.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, c.jsx)(c.Fragment, {
                 children: (0, c.jsx)(r.dk, {
                  links: g
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, c.jsx)(i.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, c.jsx)(c.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, c.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, c.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, c.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(r.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, c.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, c.jsxs)(r.Xy, { children: [s ? (0, c.jsxs)(r.Er, { children: ['Vul de ', (0, c.jsx)(r.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, c.jsxs)(r.Er, { children: [(0, c.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, c.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, c.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, c.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && p.bo[e.relayStep];
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(h.p, { level: n, suffix: s && (0, c.jsx)(g.D, { state: s }), children: e.title }), (0, c.jsx)(r.fz, { lead: !0, children: t })] });
    },
    b = ({ component: e }) => {
     const n = (e && u[e.title]) || [];
     return n.length > 0 && (0, c.jsxs)(r.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(r.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  44594(e, n, t) {
   t.d(n, { s: () => l });
   var r = t(29181),
    s = t(13526),
    i = t(33062),
    a = t(86070);
   const o = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: n, description: t }) => {
     const l = (0, i.fX)(n),
      c = o[e] ?? e;
     return (0, a.jsxs)(r.WK, { children: [(0, a.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, s.A)('component-illustration', `component-illustration--${l}`), fill: 'none', children: [(0, a.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, a.jsx)('rect', { width: '960', height: '540' }), (0, a.jsx)('rect', { width: '960', height: '540' })] }), (0, a.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, a.jsx)('use', { href: `/svg/componenten_overzicht_${(0, i.fX)(c)}.svg#component-illustration` })] }), (0, a.jsx)(r.$P, { className: 'component-illustration__caption', children: t })] });
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
    i = t(33062),
    a = t(86070);
   const o = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, a.jsx)(r.KE, { className: (0, s.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => i });
   var r = t(13526),
    s = t(86070);
   const i = ({ children: e, className: n, level: t = 1, suffix: i, ...a }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...a, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  90495(e, n, t) {
   t.d(n, { AC: () => c, Fu: () => a, Wu: () => o, Zp: () => l });
   var r = t(46447),
    s = t(13526),
    i = t(86070);
   const a = ({ background: e, children: n, className: t, ...r }) => (0, i.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    o = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: a = 'div', background: o, children: l }) => {
     const c = (e) => ('article' === a ? (0, i.jsx)('article', { ...e }) : 'section' === a ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      d = (0, i.jsx)(c, { className: (0, s.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, i.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'medium', children: n, className: t }) => (0, i.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
