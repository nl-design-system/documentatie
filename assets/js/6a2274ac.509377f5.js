'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [94505],
 {
  1292(e, n, t) {
   t.d(n, { r: () => u });
   var i = t(29181),
    s = t(74172),
    o = t(15089),
    r = t(28377),
    a = t(33648),
    d = t(83386),
    l = t(86070);
   const c = { figma: (0, l.jsx)(s.A, {}), github: (0, l.jsx)(o.A, {}), npm: (0, l.jsx)(r.A, {}), storybook: (0, l.jsx)(a.A, {}) },
    u = ({ brand: e }) => (0, l.jsx)(i.In, { children: c[e] || (0, l.jsx)(d.A, {}) });
  },
  33062(e, n, t) {
   t.d(n, { bo: () => s, KF: () => m, mJ: () => p, VZ: () => N, cR: () => A, Pv: () => f, qZ: () => r, kD: () => x, B2: () => h, Pc: () => d, f4: () => a, GT: () => _, fX: () => o, eQ: () => v, B_: () => b, o_: () => j, Rc: () => k });
   const i = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    d = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const u = (e) => [...e].sort((e, n) => l.indexOf(e) - l.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return u(c(n));
    },
    h = (e, n) => p(e).includes(n),
    g = (e) => {
     const n = / URL \(([^)]+)\)/;
     return u(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => u(c(e.projects.flatMap((e) => g(e)))),
    f = (e) => {
     const n = g(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const i = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: i, id: s, value: o }) => {
        const r = /^(.+) URL/.exec(i)[1],
         a = 'Storybook' === r ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: i, id: s, value: o, description: a };
       });
      return { frameworkName: n, tasks: i };
     });
    },
    j = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? x(e[t], [...n, t]) : []));
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
     const e = i.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    N = () => {
     const e = i.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  44594(e, n, t) {
   t.d(n, { s: () => d });
   var i = t(29181),
    s = t(13526),
    o = t(33062),
    r = t(86070);
   const a = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    d = ({ name: e, relayStep: n, description: t }) => {
     const d = (0, o.fX)(n),
      l = a[e] ?? e;
     return (0, r.jsxs)(i.WK, { children: [(0, r.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, s.A)('component-illustration', `component-illustration--${d}`), fill: 'none', children: [(0, r.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, r.jsx)('rect', { width: '960', height: '540' }), (0, r.jsx)('rect', { width: '960', height: '540' })] }), (0, r.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, r.jsx)('use', { href: `/svg/componenten_overzicht_${(0, o.fX)(l)}.svg#component-illustration` })] }), (0, r.jsx)(i.$P, { className: 'component-illustration__caption', children: t })] });
    };
  },
  54565(e, n, t) {
   t.d(n, { c: () => s });
   var i = t(30758);
   function s() {
    const [e, n] = (0, i.useState)();
    return ((0, i.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => a });
   var i = t(46447),
    s = t(13526),
    o = t(33062),
    r = t(86070);
   const a = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, r.jsx)(i.KE, { className: (0, s.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => o });
   var i = t(13526),
    s = t(86070);
   const o = ({ children: e, className: n, level: t = 1, suffix: o, ...r }) => (0, s.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...r, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  80506(e, n, t) {
   t.d(n, { VK: () => p, $9: () => j, mu: () => f, Fc: () => b });
   var i = t(29181),
    s = t(13526),
    o = t(1292),
    r = t(90495),
    a = t(54565);
   function d(e) {
    return (0, a.c)() ? e.children() : null;
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
   var u = t(67970),
    m = t(72642),
    h = t(58876),
    g = t(33062);
   const p = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => g.f4.includes(e.id)),
      o = t && g.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, l.jsx)(i.If, { sections: o.map((t) => ({ className: (0, s.A)('definition-of-done', t && `definition-of-done--${(0, g.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(h._, { children: t.tasks.map(({ checked: e, name: t, id: i }) => (0, l.jsx)(h.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, g.qZ)(i) }, i)) }), (0, l.jsx)(i.fz, { children: (0, l.jsxs)(i.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !g.f4.includes(e.id));
     return e && t.length
      ? (0, l.jsx)(r.AC, {
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
            s = t?.value,
            a = (0, g.Pv)(e),
            d = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            u = e.tasks.filter(({ name: e, value: n }) => d.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, l.jsx)(
            r.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(r.Wu, {
              children: [
               (0, l.jsx)(i.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(i.fz, { children: [(0, l.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(i.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (u.length > 0 || a.length > 0) && (0, l.jsx)(i.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               u.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(i.dk, {
                  links: u
                   .filter((e) => !!d.get(e.name))
                   .map((e) => {
                    const n = d.get(e.name);
                    return { children: n.desciption, icon: (0, l.jsx)(o.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 && (0, l.jsx)(l.Fragment, { children: a.map(({ frameworkName: e, tasks: t }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(i.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, l.jsx)(i.dk, { links: t.map((e) => ({ children: e.description, icon: (0, l.jsx)(o.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, l.jsx)(i.fz, { children: 'Er zijn nog geen implementaties' });
    },
    j = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, l.jsxs)(i.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, l.jsxs)(i.Xy, { children: [s ? (0, l.jsxs)(i.Er, { children: ['Vul de ', (0, l.jsx)(i.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, l.jsxs)(i.Er, { children: [(0, l.jsxs)(i.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, l.jsxs)(i.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, l.jsx)(i.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, l.jsx)(i.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && g.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(m.p, { level: n, suffix: s && (0, l.jsx)(u.D, { state: s }), children: e.title }), (0, l.jsx)(i.fz, { lead: !0, children: t })] });
    };
  },
  80693(e, n, t) {
   (t.r(n), t.d(n, { assets: () => u, component: () => j, componentName: () => f, contentTitle: () => c, default: () => x, description: () => h, frontMatter: () => l, issueNumber: () => g, metadata: () => i, relayStep: () => p, title: () => m, toc: () => b }));
   const i = JSON.parse('{"id":"componenten/youtube-video/index","title":"YouTube Video","description":"YouTube-video met de bedieningselementen die YouTube zelf biedt.","source":"@site/docs/componenten/youtube-video/index.mdx","sourceDirName":"componenten/youtube-video","slug":"/youtube-video","permalink":"/youtube-video","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/youtube-video/index.mdx","tags":[],"version":"current","frontMatter":{"title":"YouTube Video","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"YouTube Video","pagination_label":"YouTube Video","description":"YouTube-video met de bedieningselementen die YouTube zelf biedt.","slug":"/youtube-video"},"sidebar":"componenten","previous":{"title":"Video","permalink":"/video"}}');
   var s = t(86070),
    o = t(18439),
    r = t(45189),
    a = t(80506),
    d = t(44594);
   const l = { title: 'YouTube Video', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'YouTube Video', pagination_label: 'YouTube Video', description: 'YouTube-video met de bedieningselementen die YouTube zelf biedt.', slug: '/youtube-video' },
    c = void 0,
    u = {},
    m = 'YouTube Video',
    h = 'YouTube-video met de bedieningselementen die YouTube zelf biedt.',
    g = 353,
    p = 'help wanted',
    f = 'youtube-video',
    j = r.find((e) => e.number === g),
    b = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function v(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, s.jsx)(a.Fc, { component: j, headingLevel: 1, description: h }), '\n', (0, s.jsx)(d.s, { relayStep: p, description: `Schets van de ${f} component`, name: f }), '\n', (0, s.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, s.jsx)(a.VK, { component: j, headingLevel: 3 }), '\n', (0, s.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, s.jsx)(a.mu, { component: j, headingLevel: 3 }), '\n', (0, s.jsx)(a.$9, { component: j, headingLevel: 2 })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(v, { ...e }) }) : v(e);
   }
  },
  90495(e, n, t) {
   t.d(n, { AC: () => l, Fu: () => r, Wu: () => a, Zp: () => d });
   var i = t(46447),
    s = t(13526),
    o = t(86070);
   const r = ({ background: e, children: n, className: t, ...i }) => (0, o.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, t), ...i, children: n }),
    a = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    d = ({ href: e, appearance: n, className: t, component: r = 'div', background: a, children: d }) => {
     const l = (e) => ('article' === r ? (0, o.jsx)('article', { ...e }) : 'section' === r ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      c = (0, o.jsx)(l, { className: (0, s.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: d });
     return e ? (0, o.jsx)(i.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    l = ({ appearance: e = 'medium', children: n, className: t }) => (0, o.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
