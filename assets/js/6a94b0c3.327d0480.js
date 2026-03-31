'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [59071],
 {
  1292(e, n, i) {
   i.d(n, { r: () => m });
   var t = i(29181),
    r = i(74172),
    o = i(15089),
    s = i(28377),
    l = i(33648),
    a = i(83386),
    d = i(86070);
   const c = { figma: (0, d.jsx)(r.A, {}), github: (0, d.jsx)(o.A, {}), npm: (0, d.jsx)(s.A, {}), storybook: (0, d.jsx)(l.A, {}) },
    m = ({ brand: e }) => (0, d.jsx)(t.In, { children: c[e] || (0, d.jsx)(a.A, {}) });
  },
  33062(e, n, i) {
   i.d(n, { bo: () => r, KF: () => p, mJ: () => h, VZ: () => N, cR: () => A, Pv: () => g, qZ: () => s, kD: () => x, B2: () => u, Pc: () => a, f4: () => l, GT: () => k, fX: () => o, eQ: () => j, B_: () => b, o_: () => v, Rc: () => _ });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    a = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    p = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => f(e));
     return m(c(n));
    },
    u = (e, n) => h(e).includes(n),
    f = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: i }) => '' !== i && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    h = (e) => m(c(e.projects.flatMap((e) => f(e)))),
    g = (e) => {
     const n = f(e),
      i = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: i }) => '' !== i && e.includes(n))
       .map(({ name: t, id: r, value: o }) => {
        const s = /^(.+) URL/.exec(t)[1],
         l = 'Storybook' === s ? `${i} (${n}) in Storybook van ${e.title}` : `${i} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: t, id: r, value: o, description: l };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    v = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    j = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((i) => ('object' == typeof e[i] && null !== e[i] ? x(e[i], [...n, i]) : []));
   }
   function k(e) {
    const n = new Map();
    function i(e) {
     return (n.has(e) || n.set(e, v(e)), n.get(e));
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
   const A = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    N = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  53279(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, component: () => f, contentTitle: () => d, default: () => v, description: () => p, frontMatter: () => a, issueNumber: () => u, metadata: () => t, title: () => m, toc: () => h }));
   const t = JSON.parse('{"id":"componenten/form-field/index","title":"Form Field","description":"Een invoerveld en bijbehorende onderdelen die helpen bij het invullen.","source":"@site/docs/componenten/form-field/index.mdx","sourceDirName":"componenten/form-field","slug":"/form-field","permalink":"/form-field","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/form-field/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Form Field","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Form Field","pagination_label":"Form Field","description":"Een invoerveld en bijbehorende onderdelen die helpen bij het invullen.","slug":"/form-field","keywords":["description","field","form","form field","form field description","form field label","form input","formulier","formulierveld","input","input field","invoerveld","label","tekstveld","textbox","text field","text input","veld"]},"sidebar":"componenten","previous":{"title":"File Input","permalink":"/file-input"},"next":{"title":"Form Field Description","permalink":"/form-field-description"}}');
   var r = i(86070),
    o = i(18439),
    s = i(45189),
    l = i(80506);
   const a = { title: 'Form Field', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Form Field', pagination_label: 'Form Field', description: 'Een invoerveld en bijbehorende onderdelen die helpen bij het invullen.', slug: '/form-field', keywords: ['description', 'field', 'form', 'form field', 'form field description', 'form field label', 'form input', 'formulier', 'formulierveld', 'input', 'input field', 'invoerveld', 'label', 'tekstveld', 'textbox', 'text field', 'text input', 'veld'] },
    d = void 0,
    c = {},
    m = 'Form Field',
    p = 'Een invoerveld en bijbehorende onderdelen die helpen bij het invullen.',
    u = 176,
    f = s.find((e) => e.number === u),
    h = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function g(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, r.jsx)(l.Fc, { component: f, headingLevel: 1, description: p }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(l.VK, { component: f, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, r.jsx)(l.mu, { component: f, headingLevel: 3 }), '\n', (0, r.jsx)(l.$9, { component: f, headingLevel: 2 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
  },
  54565(e, n, i) {
   i.d(n, { c: () => r });
   var t = i(30758);
   function r() {
    const [e, n] = (0, t.useState)();
    return ((0, t.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, i) {
   i.d(n, { D: () => l });
   var t = i(46447),
    r = i(13526),
    o = i(33062),
    s = i(86070);
   const l = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, s.jsx)(t.KE, { className: (0, r.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, i) {
   i.d(n, { p: () => o });
   var t = i(13526),
    r = i(86070);
   const o = ({ children: e, className: n, level: i = 1, suffix: o, ...s }) => (0, r.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...s, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  80506(e, n, i) {
   i.d(n, { VK: () => h, $9: () => v, mu: () => g, Fc: () => b });
   var t = i(29181),
    r = i(13526),
    o = i(1292),
    s = i(90495),
    l = i(54565);
   function a(e) {
    return (0, l.c)() ? e.children() : null;
   }
   var d = i(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(a, {
     children: () => {
      const t = i(83294).V6;
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
   var m = i(67970),
    p = i(72642),
    u = i(58876),
    f = i(33062);
   const h = ({ component: e, headingLevel: n }) => {
     const i = e && e.projects.filter((e) => f.f4.includes(e.id)),
      o = i && f.f4.map((e) => i.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(t.If, { sections: o.map((i) => ({ className: (0, r.A)('definition-of-done', i && `definition-of-done--${(0, f.fX)(i.title)}`), headingLevel: n, expanded: !1, label: i ? `${i.title} - ${i.progress.value} van ${i.progress.max}` : '', body: i && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u._, { children: i.tasks.map(({ checked: e, name: i, id: t }) => (0, d.jsx)(u.Z, { headingLevel: n + 1, checked: e, heading: i, description: (0, f.qZ)(t) }, t)) }), (0, d.jsx)(t.fz, { children: (0, d.jsxs)(t.N_, { href: `${i.url}?filterQuery=${e.title}`, children: [i.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    g = ({ component: e, headingLevel: n }) => {
     const i = e && e.projects.filter((e) => !f.f4.includes(e.id));
     return e && i.length
      ? (0, d.jsx)(s.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: i
          .sort((e, n) => {
           const i = e.progress.max - e.progress.value,
            t = n.progress.max - n.progress.value;
           return i === t ? e.title.localeCompare(n.title) : i - t;
          })
          .map((e) => {
           const i = e.tasks.find(({ name: e }) => 'Naam' === e),
            r = i?.value,
            l = (0, f.Pv)(e),
            a = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${r} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${r} voor visuele regressie tests` }],
            ]),
            m = e.tasks.filter(({ name: e, value: n }) => a.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            s.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(s.Wu, {
              children: [
               (0, d.jsx)(t.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(t.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(t.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (m.length > 0 || l.length > 0) && (0, d.jsx)(t.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               m.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(t.dk, {
                  links: m
                   .filter((e) => !!a.get(e.name))
                   .map((e) => {
                    const n = a.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(o.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               l.length > 0 && (0, d.jsx)(d.Fragment, { children: l.map(({ frameworkName: e, tasks: i }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(t.DZ, { level: n + 2, children: [r, ' in ', e] }), (0, d.jsx)(t.dk, { links: i.map((e) => ({ children: e.description, icon: (0, d.jsx)(o.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(t.fz, { children: 'Er zijn nog geen implementaties' });
    },
    v = ({ component: e, headingLevel: n }) => {
     const i = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      r = i?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(t.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(t.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(t.Xy, { children: [r ? (0, d.jsxs)(t.Er, { children: ['Vul de ', (0, d.jsx)(t.N_, { href: r, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(t.Er, { children: [(0, d.jsxs)(t.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(t.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(t.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(t.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    b = ({ component: e, headingLevel: n, description: i }) => {
     const r = e && f.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(p.p, { level: n, suffix: r && (0, d.jsx)(m.D, { state: r }), children: e.title }), (0, d.jsx)(t.fz, { lead: !0, children: i })] });
    };
  },
  90495(e, n, i) {
   i.d(n, { AC: () => d, Fu: () => s, Wu: () => l, Zp: () => a });
   var t = i(46447),
    r = i(13526),
    o = i(86070);
   const s = ({ background: e, children: n, className: i, ...t }) => (0, o.jsx)('div', { className: (0, r.A)('card__illustration', e && `card__illustration--${e}`, i), ...t, children: n }),
    l = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    a = ({ href: e, appearance: n, className: i, component: s = 'div', background: l, children: a }) => {
     const d = (e) => ('article' === s ? (0, o.jsx)('article', { ...e }) : 'section' === s ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      c = (0, o.jsx)(d, { className: (0, r.A)('cardgroup__card', l && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, i), children: a });
     return e ? (0, o.jsx)(t.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: i }) => (0, o.jsx)('div', { className: (0, r.A)('cardgroup', `cardgroup--${e}`, i), children: n });
  },
 },
]);
