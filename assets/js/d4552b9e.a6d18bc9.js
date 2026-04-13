'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [70767],
 {
  1292(e, n, r) {
   r.d(n, { r: () => m });
   var o = r(29181),
    t = r(74172),
    i = r(15089),
    s = r(28377),
    a = r(33648),
    l = r(83386),
    d = r(86070);
   const c = { figma: (0, d.jsx)(t.A, {}), github: (0, d.jsx)(i.A, {}), npm: (0, d.jsx)(s.A, {}), storybook: (0, d.jsx)(a.A, {}) },
    m = ({ brand: e }) => (0, d.jsx)(o.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  33062(e, n, r) {
   r.d(n, { bo: () => t, KF: () => g, mJ: () => f, VZ: () => N, cR: () => A, Pv: () => h, qZ: () => s, kD: () => b, B2: () => u, Pc: () => l, f4: () => a, GT: () => _, fX: () => i, eQ: () => x, B_: () => v, o_: () => j, Rc: () => k });
   const o = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    t = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    g = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return m(c(n));
    },
    u = (e, n) => f(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: r }) => '' !== r && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    f = (e) => m(c(e.projects.flatMap((e) => p(e)))),
    h = (e) => {
     const n = p(e),
      r = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const o = e.tasks
       .filter(({ name: e, value: r }) => '' !== r && e.includes(n))
       .map(({ name: o, id: t, value: i }) => {
        const s = /^(.+) URL/.exec(o)[1],
         a = 'Storybook' === s ? `${r} (${n}) in Storybook van ${e.title}` : `${r} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: o, id: t, value: i, description: a };
       });
      return { frameworkName: n, tasks: o };
     });
    },
    j = (e) => e.join('.'),
    v = (e) => '--' + e.join('-'),
    x = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((r) => ('object' == typeof e[r] && null !== e[r] ? b(e[r], [...n, r]) : []));
   }
   function _(e) {
    const n = new Map();
    function r(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || r(e).localeCompare(r(n)));
   }
   function k(e) {
    const n = {};
    for (const r of e) {
     let e = n;
     for (const n of r) (e[n] || (e[n] = {}), (e = e[n]));
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
  37131(e, n, r) {
   r.d(n, { VK: () => h, $9: () => v, mu: () => j, Fc: () => x, K_: () => b });
   var o = r(29181),
    t = r(13526),
    i = r(1292),
    s = r(90495),
    a = r(54565);
   function l(e) {
    return (0, a.c)() ? e.children() : null;
   }
   var d = r(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const o = r(83294).V6;
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
   var m = r(67970),
    g = r(72642),
    u = r(58876),
    p = r(33062);
   const f = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    h = ({ component: e, headingLevel: n }) => {
     const r = e && e.projects.filter((e) => p.f4.includes(e.id)),
      i = r && p.f4.map((e) => r.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(o.If, { sections: i.map((r) => ({ className: (0, t.A)('definition-of-done', r && `definition-of-done--${(0, p.fX)(r.title)}`), headingLevel: n, expanded: !1, label: r ? `${r.title} - ${r.progress.value} van ${r.progress.max}` : '', body: r && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u._, { children: r.tasks.map(({ checked: e, name: r, id: o }) => (0, d.jsx)(u.Z, { headingLevel: n + 1, checked: e, heading: r, description: (0, p.qZ)(o) }, o)) }), (0, d.jsx)(o.fz, { children: (0, d.jsxs)(o.N_, { href: `${r.url}?filterQuery=${e.title}`, children: [r.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    j = ({ component: e, headingLevel: n }) => {
     const r = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && r.length
      ? (0, d.jsx)(s.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: r
          .sort((e, n) => {
           const r = e.progress.max - e.progress.value,
            o = n.progress.max - n.progress.value;
           return r === o ? e.title.localeCompare(n.title) : r - o;
          })
          .map((e) => {
           const r = e.tasks.find(({ name: e }) => 'Naam' === e),
            t = r?.value,
            a = (0, p.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${t} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${t} voor visuele regressie tests` }],
            ]),
            m = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            s.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(s.Wu, {
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
               a.length > 0 && (0, d.jsx)(d.Fragment, { children: a.map(({ frameworkName: e, tasks: r }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(o.DZ, { level: n + 2, children: [t, ' in ', e] }), (0, d.jsx)(o.dk, { links: r.map((e) => ({ children: e.description, icon: (0, d.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(o.fz, { children: 'Er zijn nog geen implementaties' });
    },
    v = ({ component: e, headingLevel: n }) => {
     const r = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      t = r?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(o.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(o.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(o.Xy, { children: [t ? (0, d.jsxs)(o.Er, { children: ['Vul de ', (0, d.jsx)(o.N_, { href: t, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(o.Er, { children: [(0, d.jsxs)(o.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(o.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(o.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(o.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    x = ({ component: e, headingLevel: n, description: r }) => {
     const t = e && p.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(g.p, { level: n, suffix: t && (0, d.jsx)(m.D, { state: t }), children: e.title }), (0, d.jsx)(o.fz, { lead: !0, children: r })] });
    },
    b = ({ component: e }) => {
     const n = (e && f[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(o.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, r) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(o.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), r < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  54565(e, n, r) {
   r.d(n, { c: () => t });
   var o = r(30758);
   function t() {
    const [e, n] = (0, o.useState)();
    return ((0, o.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, r) {
   r.d(n, { D: () => a });
   var o = r(46447),
    t = r(13526),
    i = r(33062),
    s = r(86070);
   const a = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, s.jsx)(o.KE, { className: (0, t.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, r) {
   r.d(n, { p: () => i });
   var o = r(13526),
    t = r(86070);
   const i = ({ children: e, className: n, level: r = 1, suffix: i, ...s }) => (0, t.jsxs)('hgroup', { className: (0, o.A)('nlds-inline-heading-group', `utrecht-heading-${r}`, n), ...s, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  89840(e, n, r) {
   (r.r(n), r.d(n, { assets: () => c, component: () => p, contentTitle: () => d, default: () => j, description: () => g, frontMatter: () => l, issueNumber: () => u, metadata: () => o, title: () => m, toc: () => f }));
   const o = JSON.parse('{"id":"componenten/form-field-error-message/index","title":"Form Field Error Message","description":"Toont een foutmelding die informeert wat er is fout gegaan en hoe dit is op te lossen.","source":"@site/docs/componenten/form-field-error-message/index.mdx","sourceDirName":"componenten/form-field-error-message","slug":"/form-field-error-message","permalink":"/form-field-error-message","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/form-field-error-message/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Form Field Error Message","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Form Field Error Message","pagination_label":"Form Field Error Message","description":"Toont een foutmelding die informeert wat er is fout gegaan en hoe dit is op te lossen.","slug":"/form-field-error-message","keywords":["danger","error","error message","form","form error","form field","form field error message","formulier","formulierelement","fout","foutmelding","invalid","ongeldig","onjuist","problem","validatie","validation","waarschuwing"]},"sidebar":"componenten","previous":{"title":"Form Field Description","permalink":"/form-field-description"},"next":{"title":"Form Field Label","permalink":"/form-field-label"}}');
   var t = r(86070),
    i = r(18439),
    s = r(64792),
    a = r(37131);
   const l = { title: 'Form Field Error Message', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Form Field Error Message', pagination_label: 'Form Field Error Message', description: 'Toont een foutmelding die informeert wat er is fout gegaan en hoe dit is op te lossen.', slug: '/form-field-error-message', keywords: ['danger', 'error', 'error message', 'form', 'form error', 'form field', 'form field error message', 'formulier', 'formulierelement', 'fout', 'foutmelding', 'invalid', 'ongeldig', 'onjuist', 'problem', 'validatie', 'validation', 'waarschuwing'] },
    d = void 0,
    c = {},
    m = 'Form Field Error Message',
    g = 'Toont een foutmelding die informeert wat er is fout gegaan en hoe dit is op te lossen.',
    u = 122,
    p = s.find((e) => e.number === u),
    f = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function h(e) {
    const n = { h2: 'h2', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, t.jsx)(a.Fc, { component: p, headingLevel: 1, description: g }), '\n', (0, t.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, t.jsx)(a.VK, { component: p, headingLevel: 3 }), '\n', (0, t.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, t.jsx)(a.mu, { component: p, headingLevel: 3 }), '\n', (0, t.jsx)(a.K_, { component: p }), '\n', (0, t.jsx)(a.$9, { component: p, headingLevel: 2 })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  90495(e, n, r) {
   r.d(n, { AC: () => d, Fu: () => s, Wu: () => a, Zp: () => l });
   var o = r(46447),
    t = r(13526),
    i = r(86070);
   const s = ({ background: e, children: n, className: r, ...o }) => (0, i.jsx)('div', { className: (0, t.A)('card__illustration', e && `card__illustration--${e}`, r), ...o, children: n }),
    a = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: r, component: s = 'div', background: a, children: l }) => {
     const d = (e) => ('article' === s ? (0, i.jsx)('article', { ...e }) : 'section' === s ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      c = (0, i.jsx)(d, { className: (0, t.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, r), children: l });
     return e ? (0, i.jsx)(o.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: r }) => (0, i.jsx)('div', { className: (0, t.A)('cardgroup', `cardgroup--${e}`, r), children: n });
  },
 },
]);
