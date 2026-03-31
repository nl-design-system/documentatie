'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [66492],
 {
  1292(e, n, t) {
   t.d(n, { r: () => m });
   var r = t(29181),
    i = t(74172),
    o = t(15089),
    s = t(28377),
    a = t(33648),
    d = t(83386),
    l = t(86070);
   const c = { figma: (0, l.jsx)(i.A, {}), github: (0, l.jsx)(o.A, {}), npm: (0, l.jsx)(s.A, {}), storybook: (0, l.jsx)(a.A, {}) },
    m = ({ brand: e }) => (0, l.jsx)(r.In, { children: c[e] || (0, l.jsx)(d.A, {}) });
  },
  33062(e, n, t) {
   t.d(n, { bo: () => i, KF: () => p, mJ: () => g, VZ: () => A, cR: () => w, Pv: () => f, qZ: () => s, kD: () => b, B2: () => h, Pc: () => d, f4: () => a, GT: () => k, fX: () => o, eQ: () => v, B_: () => x, o_: () => j, Rc: () => _ });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    d = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    l = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => l.indexOf(e) - l.indexOf(n)),
    p = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return m(c(n));
    },
    h = (e, n) => g(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    g = (e) => m(c(e.projects.flatMap((e) => u(e)))),
    f = (e) => {
     const n = u(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: i, value: o }) => {
        const s = /^(.+) URL/.exec(r)[1],
         a = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: r, id: i, value: o, description: a };
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
   function k(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
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
  44594(e, n, t) {
   t.d(n, { s: () => d });
   var r = t(29181),
    i = t(13526),
    o = t(33062),
    s = t(86070);
   const a = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    d = ({ name: e, relayStep: n, description: t }) => {
     const d = (0, o.fX)(n),
      l = a[e] ?? e;
     return (0, s.jsxs)(r.WK, { children: [(0, s.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, i.A)('component-illustration', `component-illustration--${d}`), fill: 'none', children: [(0, s.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, s.jsx)('rect', { width: '960', height: '540' }), (0, s.jsx)('rect', { width: '960', height: '540' })] }), (0, s.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, s.jsx)('use', { href: `/svg/componenten_overzicht_${(0, o.fX)(l)}.svg#component-illustration` })] }), (0, s.jsx)(r.$P, { className: 'component-illustration__caption', children: t })] });
    };
  },
  54565(e, n, t) {
   t.d(n, { c: () => i });
   var r = t(30758);
   function i() {
    const [e, n] = (0, r.useState)();
    return ((0, r.useEffect)(() => n(!0), []), e);
   }
  },
  64276(e, n, t) {
   (t.r(n), t.d(n, { assets: () => m, component: () => j, componentName: () => f, contentTitle: () => c, default: () => b, description: () => h, frontMatter: () => l, issueNumber: () => u, metadata: () => r, relayStep: () => g, title: () => p, toc: () => x }));
   const r = JSON.parse('{"id":"componenten/radio-group/index","title":"Radio Group","description":"Biedt de mogelijkheid om \xe9\xe9n optie te selecteren uit een lijst.","source":"@site/docs/componenten/radio-group/index.mdx","sourceDirName":"componenten/radio-group","slug":"/radio-group","permalink":"/radio-group","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/radio-group/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Radio Group","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Radio Group","pagination_label":"Radio Group","description":"Biedt de mogelijkheid om \xe9\xe9n optie te selecteren uit een lijst.","slug":"/radio-group","keywords":["fieldset","form","formulierveld","keuze","keuzerondje","optie","opties","option","option button","radio","radio button","radio group","radioknop","radios"]},"sidebar":"componenten","previous":{"title":"Radio Button","permalink":"/radio-button"},"next":{"title":"Range","permalink":"/range"}}');
   var i = t(86070),
    o = t(18439),
    s = t(45189),
    a = t(80506),
    d = t(44594);
   const l = { title: 'Radio Group', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Radio Group', pagination_label: 'Radio Group', description: 'Biedt de mogelijkheid om \xe9\xe9n optie te selecteren uit een lijst.', slug: '/radio-group', keywords: ['fieldset', 'form', 'formulierveld', 'keuze', 'keuzerondje', 'optie', 'opties', 'option', 'option button', 'radio', 'radio button', 'radio group', 'radioknop', 'radios'] },
    c = void 0,
    m = {},
    p = 'Radio Group',
    h = 'Biedt de mogelijkheid om \xe9\xe9n optie te selecteren uit een lijst.',
    u = 129,
    g = 'help wanted',
    f = 'radio-group',
    j = s.find((e) => e.number === u),
    x = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function v(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(a.Fc, { component: j, headingLevel: 1, description: h }), '\n', (0, i.jsx)(d.s, { relayStep: g, description: `Schets van de ${f} component`, name: f }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(a.VK, { component: j, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(a.mu, { component: j, headingLevel: 3 }), '\n', (0, i.jsx)(a.$9, { component: j, headingLevel: 2 })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => a });
   var r = t(46447),
    i = t(13526),
    o = t(33062),
    s = t(86070);
   const a = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, s.jsx)(r.KE, { className: (0, i.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => o });
   var r = t(13526),
    i = t(86070);
   const o = ({ children: e, className: n, level: t = 1, suffix: o, ...s }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...s, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  80506(e, n, t) {
   t.d(n, { VK: () => g, $9: () => j, mu: () => f, Fc: () => x });
   var r = t(29181),
    i = t(13526),
    o = t(1292),
    s = t(90495),
    a = t(54565);
   function d(e) {
    return (0, a.c)() ? e.children() : null;
   }
   var l = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, l.jsx)(d, {
     children: () => {
      const r = t(83294).V6;
      return (0, l.jsx)(r, {
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
    p = t(72642),
    h = t(58876),
    u = t(33062);
   const g = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => u.f4.includes(e.id)),
      o = t && u.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, l.jsx)(r.If, { sections: o.map((t) => ({ className: (0, i.A)('definition-of-done', t && `definition-of-done--${(0, u.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(h._, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, l.jsx)(h.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, u.qZ)(r) }, r)) }), (0, l.jsx)(r.fz, { children: (0, l.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !u.f4.includes(e.id));
     return e && t.length
      ? (0, l.jsx)(s.AC, {
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
            i = t?.value,
            a = (0, u.Pv)(e),
            d = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            m = e.tasks.filter(({ name: e, value: n }) => d.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, l.jsx)(
            s.Zp,
            {
             className: 'implementation-card',
             children: (0, l.jsxs)(s.Wu, {
              children: [
               (0, l.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, l.jsxs)(r.fz, { children: [(0, l.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, l.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (m.length > 0 || a.length > 0) && (0, l.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               m.length > 0 &&
                (0, l.jsx)(l.Fragment, {
                 children: (0, l.jsx)(r.dk, {
                  links: m
                   .filter((e) => !!d.get(e.name))
                   .map((e) => {
                    const n = d.get(e.name);
                    return { children: n.desciption, icon: (0, l.jsx)(o.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 && (0, l.jsx)(l.Fragment, { children: a.map(({ frameworkName: e, tasks: t }) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)(r.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, l.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, l.jsx)(o.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, l.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    j = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(r.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, l.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, l.jsxs)(r.Xy, { children: [i ? (0, l.jsxs)(r.Er, { children: ['Vul de ', (0, l.jsx)(r.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, l.jsxs)(r.Er, { children: [(0, l.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, l.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, l.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, l.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    x = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && u.bo[e.relayStep];
     return e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(p.p, { level: n, suffix: i && (0, l.jsx)(m.D, { state: i }), children: e.title }), (0, l.jsx)(r.fz, { lead: !0, children: t })] });
    };
  },
  90495(e, n, t) {
   t.d(n, { AC: () => l, Fu: () => s, Wu: () => a, Zp: () => d });
   var r = t(46447),
    i = t(13526),
    o = t(86070);
   const s = ({ background: e, children: n, className: t, ...r }) => (0, o.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    a = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    d = ({ href: e, appearance: n, className: t, component: s = 'div', background: a, children: d }) => {
     const l = (e) => ('article' === s ? (0, o.jsx)('article', { ...e }) : 'section' === s ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      c = (0, o.jsx)(l, { className: (0, i.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: d });
     return e ? (0, o.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    l = ({ appearance: e = 'medium', children: n, className: t }) => (0, o.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
