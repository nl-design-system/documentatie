'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [7971],
 {
  1292(e, n, t) {
   t.d(n, { r: () => m });
   var o = t(29181),
    s = t(74172),
    i = t(15089),
    r = t(28377),
    a = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(s.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(r.A, {}), storybook: (0, d.jsx)(a.A, {}) },
    m = ({ brand: e }) => (0, d.jsx)(o.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  33062(e, n, t) {
   t.d(n, { bo: () => s, KF: () => h, mJ: () => u, VZ: () => A, cR: () => _, Pv: () => f, qZ: () => r, kD: () => v, B2: () => p, Pc: () => l, f4: () => a, GT: () => k, fX: () => i, eQ: () => j, B_: () => x, o_: () => b, Rc: () => w });
   const o = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    h = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return m(c(n));
    },
    p = (e, n) => u(e).includes(n),
    g = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => m(c(e.projects.flatMap((e) => g(e)))),
    f = (e) => {
     const n = g(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const o = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: o, id: s, value: i }) => {
        const r = /^(.+) URL/.exec(o)[1],
         a = 'Storybook' === r ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: o, id: s, value: i, description: a };
       });
      return { frameworkName: n, tasks: o };
     });
    },
    b = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function v(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? v(e[t], [...n, t]) : []));
   }
   function k(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, b(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function w(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const _ = () => {
     const e = o.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = o.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  44594(e, n, t) {
   t.d(n, { s: () => l });
   var o = t(29181),
    s = t(13526),
    i = t(33062),
    r = t(86070);
   const a = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: n, description: t }) => {
     const l = (0, i.fX)(n),
      d = a[e] ?? e;
     return (0, r.jsxs)(o.WK, { children: [(0, r.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, s.A)('component-illustration', `component-illustration--${l}`), fill: 'none', children: [(0, r.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, r.jsx)('rect', { width: '960', height: '540' }), (0, r.jsx)('rect', { width: '960', height: '540' })] }), (0, r.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, r.jsx)('use', { href: `/svg/componenten_overzicht_${(0, i.fX)(d)}.svg#component-illustration` })] }), (0, r.jsx)(o.$P, { className: 'component-illustration__caption', children: t })] });
    };
  },
  54565(e, n, t) {
   t.d(n, { c: () => s });
   var o = t(30758);
   function s() {
    const [e, n] = (0, o.useState)();
    return ((0, o.useEffect)(() => n(!0), []), e);
   }
  },
  62943(e, n, t) {
   (t.r(n), t.d(n, { assets: () => m, component: () => b, componentName: () => f, contentTitle: () => c, default: () => v, description: () => p, frontMatter: () => d, issueNumber: () => g, metadata: () => o, relayStep: () => u, title: () => h, toc: () => x }));
   const o = JSON.parse('{"id":"componenten/select-combobox/index","title":"Select Combobox","description":"Biedt de mogelijkheid om \xe9\xe9n optie te selecteren, waarbij de getoonde opties kunnen worden gefilterd door tekst in een invoerveld in te voeren.","source":"@site/docs/componenten/select-combobox/index.mdx","sourceDirName":"componenten/select-combobox","slug":"/select-combobox","permalink":"/select-combobox","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/select-combobox/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Select Combobox","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Select Combobox","pagination_label":"Select Combobox","description":"Biedt de mogelijkheid om \xe9\xe9n optie te selecteren, waarbij de getoonde opties kunnen worden gefilterd door tekst in een invoerveld in te voeren.","slug":"/select-combobox","keywords":["autocomplete","automatisch aanvullen","combo box","combobox","dropdown","dropdown list","dropdown menu","dropdown with filter","filter","keuzeveld","multiselect","opties","options","option list","optie kiezen","option selector","select","select field","select input","select combobox","selection box","typeahead"]},"sidebar":"componenten","previous":{"title":"Select","permalink":"/select"},"next":{"title":"Separator","permalink":"/separator"}}');
   var s = t(86070),
    i = t(18439),
    r = t(45189),
    a = t(80506),
    l = t(44594);
   const d = { title: 'Select Combobox', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Select Combobox', pagination_label: 'Select Combobox', description: 'Biedt de mogelijkheid om \xe9\xe9n optie te selecteren, waarbij de getoonde opties kunnen worden gefilterd door tekst in een invoerveld in te voeren.', slug: '/select-combobox', keywords: ['autocomplete', 'automatisch aanvullen', 'combo box', 'combobox', 'dropdown', 'dropdown list', 'dropdown menu', 'dropdown with filter', 'filter', 'keuzeveld', 'multiselect', 'opties', 'options', 'option list', 'optie kiezen', 'option selector', 'select', 'select field', 'select input', 'select combobox', 'selection box', 'typeahead'] },
    c = void 0,
    m = {},
    h = 'Select Combobox',
    p = 'Biedt de mogelijkheid om \xe9\xe9n optie te selecteren, waarbij de getoonde opties kunnen worden gefilterd door tekst in een invoerveld in te voeren.',
    g = 341,
    u = 'help wanted',
    f = 'select-combobox',
    b = r.find((e) => e.number === g),
    x = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function j(e) {
    const n = { h2: 'h2', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, s.jsx)(a.Fc, { component: b, headingLevel: 1, description: p }), '\n', (0, s.jsx)(l.s, { relayStep: u, description: `Schets van de ${f} component`, name: f }), '\n', (0, s.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, s.jsx)(a.VK, { component: b, headingLevel: 3 }), '\n', (0, s.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, s.jsx)(a.mu, { component: b, headingLevel: 3 }), '\n', (0, s.jsx)(a.$9, { component: b, headingLevel: 2 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(j, { ...e }) }) : j(e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => a });
   var o = t(46447),
    s = t(13526),
    i = t(33062),
    r = t(86070);
   const a = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, r.jsx)(o.KE, { className: (0, s.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => i });
   var o = t(13526),
    s = t(86070);
   const i = ({ children: e, className: n, level: t = 1, suffix: i, ...r }) => (0, s.jsxs)('hgroup', { className: (0, o.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...r, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  80506(e, n, t) {
   t.d(n, { VK: () => u, $9: () => b, mu: () => f, Fc: () => x });
   var o = t(29181),
    s = t(13526),
    i = t(1292),
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
   var m = t(67970),
    h = t(72642),
    p = t(58876),
    g = t(33062);
   const u = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => g.f4.includes(e.id)),
      i = t && g.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(o.If, { sections: i.map((t) => ({ className: (0, s.A)('definition-of-done', t && `definition-of-done--${(0, g.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p._, { children: t.tasks.map(({ checked: e, name: t, id: o }) => (0, d.jsx)(p.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, g.qZ)(o) }, o)) }), (0, d.jsx)(o.fz, { children: (0, d.jsxs)(o.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    f = ({ component: e, headingLevel: n }) => {
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
            s = t?.value,
            a = (0, g.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${s} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${s} voor visuele regressie tests` }],
            ]),
            m = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            r.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(r.Wu, {
              children: [
               (0, d.jsx)(o.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(o.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(o.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (m.length > 0 || a.length > 0) && (0, d.jsx)(o.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               m.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(o.dk, {
                  links: m
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(i.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 && (0, d.jsx)(d.Fragment, { children: a.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(o.DZ, { level: n + 2, children: [s, ' in ', e] }), (0, d.jsx)(o.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(o.fz, { children: 'Er zijn nog geen implementaties' });
    },
    b = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      s = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(o.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(o.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(o.Xy, { children: [s ? (0, d.jsxs)(o.Er, { children: ['Vul de ', (0, d.jsx)(o.N_, { href: s, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(o.Er, { children: [(0, d.jsxs)(o.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(o.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(o.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(o.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    x = ({ component: e, headingLevel: n, description: t }) => {
     const s = e && g.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(h.p, { level: n, suffix: s && (0, d.jsx)(m.D, { state: s }), children: e.title }), (0, d.jsx)(o.fz, { lead: !0, children: t })] });
    };
  },
  90495(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => r, Wu: () => a, Zp: () => l });
   var o = t(46447),
    s = t(13526),
    i = t(86070);
   const r = ({ background: e, children: n, className: t, ...o }) => (0, i.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, t), ...o, children: n }),
    a = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: r = 'div', background: a, children: l }) => {
     const d = (e) => ('article' === r ? (0, i.jsx)('article', { ...e }) : 'section' === r ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      c = (0, i.jsx)(d, { className: (0, s.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, i.jsx)(o.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, i.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
