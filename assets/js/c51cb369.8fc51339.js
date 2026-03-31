'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [92229],
 {
  1292(e, n, t) {
   t.d(n, { r: () => g });
   var a = t(29181),
    i = t(74172),
    s = t(15089),
    r = t(28377),
    o = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(s.A, {}), npm: (0, d.jsx)(r.A, {}), storybook: (0, d.jsx)(o.A, {}) },
    g = ({ brand: e }) => (0, d.jsx)(a.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  15384(e, n, t) {
   (t.r(n), t.d(n, { assets: () => g, component: () => v, componentName: () => f, contentTitle: () => c, default: () => b, description: () => u, frontMatter: () => d, issueNumber: () => h, metadata: () => a, relayStep: () => p, title: () => m, toc: () => j }));
   const a = JSON.parse('{"id":"componenten/language-navigation/index","title":"Language Navigation","description":"E\xe9n of meerdere links om de website te openen in een andere taal.","source":"@site/docs/componenten/language-navigation/index.mdx","sourceDirName":"componenten/language-navigation","slug":"/language-navigation","permalink":"/language-navigation","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/language-navigation/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Language Navigation","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Language Navigation","pagination_label":"Language Navigation","description":"E\xe9n of meerdere links om de website te openen in een andere taal.","slug":"/language-navigation","keywords":["language","language choices","language menu","language navigation","language options","language selection","language switcher","language switcher menu","multilingual","switcher","taal","taalkeuze","taalmenu","taalnavigatie","taalopties","taalselectie","translate","translate navigation","translator","vertaling","vlag","vlaggen"]},"sidebar":"componenten","previous":{"title":"Input Group","permalink":"/input-group"},"next":{"title":"Link","permalink":"/link"}}');
   var i = t(86070),
    s = t(18439),
    r = t(45189),
    o = t(80506),
    l = t(44594);
   const d = { title: 'Language Navigation', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Language Navigation', pagination_label: 'Language Navigation', description: 'E\xe9n of meerdere links om de website te openen in een andere taal.', slug: '/language-navigation', keywords: ['language', 'language choices', 'language menu', 'language navigation', 'language options', 'language selection', 'language switcher', 'language switcher menu', 'multilingual', 'switcher', 'taal', 'taalkeuze', 'taalmenu', 'taalnavigatie', 'taalopties', 'taalselectie', 'translate', 'translate navigation', 'translator', 'vertaling', 'vlag', 'vlaggen'] },
    c = void 0,
    g = {},
    m = 'Language Navigation',
    u = 'E\xe9n of meerdere links om de website te openen in een andere taal.',
    h = 243,
    p = 'help wanted',
    f = 'language-navigation',
    v = r.find((e) => e.number === h),
    j = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function x(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(o.Fc, { component: v, headingLevel: 1, description: u }), '\n', (0, i.jsx)(l.s, { relayStep: p, description: `Schets van de ${f} component`, name: f }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(o.VK, { component: v, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(o.mu, { component: v, headingLevel: 3 }), '\n', (0, i.jsx)(o.$9, { component: v, headingLevel: 2 })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
  },
  33062(e, n, t) {
   t.d(n, { bo: () => i, KF: () => m, mJ: () => p, VZ: () => N, cR: () => w, Pv: () => f, qZ: () => r, kD: () => b, B2: () => u, Pc: () => l, f4: () => o, GT: () => k, fX: () => s, eQ: () => x, B_: () => j, o_: () => v, Rc: () => _ });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
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
    u = (e, n) => p(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return g(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => g(c(e.projects.flatMap((e) => h(e)))),
    f = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const a = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: a, id: i, value: s }) => {
        const r = /^(.+) URL/.exec(a)[1],
         o = 'Storybook' === r ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: a, id: i, value: s, description: o };
       });
      return { frameworkName: n, tasks: a };
     });
    },
    v = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    x = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function k(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
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
   const w = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    N = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  44594(e, n, t) {
   t.d(n, { s: () => l });
   var a = t(29181),
    i = t(13526),
    s = t(33062),
    r = t(86070);
   const o = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: n, description: t }) => {
     const l = (0, s.fX)(n),
      d = o[e] ?? e;
     return (0, r.jsxs)(a.WK, { children: [(0, r.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, i.A)('component-illustration', `component-illustration--${l}`), fill: 'none', children: [(0, r.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, r.jsx)('rect', { width: '960', height: '540' }), (0, r.jsx)('rect', { width: '960', height: '540' })] }), (0, r.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, r.jsx)('use', { href: `/svg/componenten_overzicht_${(0, s.fX)(d)}.svg#component-illustration` })] }), (0, r.jsx)(a.$P, { className: 'component-illustration__caption', children: t })] });
    };
  },
  54565(e, n, t) {
   t.d(n, { c: () => i });
   var a = t(30758);
   function i() {
    const [e, n] = (0, a.useState)();
    return ((0, a.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => o });
   var a = t(46447),
    i = t(13526),
    s = t(33062),
    r = t(86070);
   const o = ({ state: e }) => {
    const n = (0, s.fX)(e);
    return (0, r.jsx)(a.KE, { className: (0, i.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => s });
   var a = t(13526),
    i = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...r }) => (0, i.jsxs)('hgroup', { className: (0, a.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...r, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  80506(e, n, t) {
   t.d(n, { VK: () => p, $9: () => v, mu: () => f, Fc: () => j });
   var a = t(29181),
    i = t(13526),
    s = t(1292),
    r = t(90495),
    o = t(54565);
   function l(e) {
    return (0, o.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const a = t(83294).V6;
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
   var g = t(67970),
    m = t(72642),
    u = t(58876),
    h = t(33062);
   const p = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => h.f4.includes(e.id)),
      s = t && h.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(a.If, { sections: s.map((t) => ({ className: (0, i.A)('definition-of-done', t && `definition-of-done--${(0, h.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u._, { children: t.tasks.map(({ checked: e, name: t, id: a }) => (0, d.jsx)(u.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, h.qZ)(a) }, a)) }), (0, d.jsx)(a.fz, { children: (0, d.jsxs)(a.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !h.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(r.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            a = n.progress.max - n.progress.value;
           return t === a ? e.title.localeCompare(n.title) : t - a;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = t?.value,
            o = (0, h.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            g = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            r.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(r.Wu, {
              children: [
               (0, d.jsx)(a.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(a.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(a.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (g.length > 0 || o.length > 0) && (0, d.jsx)(a.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               g.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(a.dk, {
                  links: g
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(s.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               o.length > 0 && (0, d.jsx)(d.Fragment, { children: o.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(a.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, d.jsx)(a.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(s.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(a.fz, { children: 'Er zijn nog geen implementaties' });
    },
    v = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(a.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(a.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(a.Xy, { children: [i ? (0, d.jsxs)(a.Er, { children: ['Vul de ', (0, d.jsx)(a.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(a.Er, { children: [(0, d.jsxs)(a.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(a.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(a.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(a.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    j = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && h.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: i && (0, d.jsx)(g.D, { state: i }), children: e.title }), (0, d.jsx)(a.fz, { lead: !0, children: t })] });
    };
  },
  90495(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => r, Wu: () => o, Zp: () => l });
   var a = t(46447),
    i = t(13526),
    s = t(86070);
   const r = ({ background: e, children: n, className: t, ...a }) => (0, s.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, t), ...a, children: n }),
    o = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: r = 'div', background: o, children: l }) => {
     const d = (e) => ('article' === r ? (0, s.jsx)('article', { ...e }) : 'section' === r ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      c = (0, s.jsx)(d, { className: (0, i.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, s.jsx)(a.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, s.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
