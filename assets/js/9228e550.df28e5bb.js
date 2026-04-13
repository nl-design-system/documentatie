'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [73649],
 {
  1292(e, n, t) {
   t.d(n, { r: () => p });
   var s = t(29181),
    o = t(74172),
    r = t(15089),
    i = t(28377),
    a = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(o.A, {}), github: (0, d.jsx)(r.A, {}), npm: (0, d.jsx)(i.A, {}), storybook: (0, d.jsx)(a.A, {}) },
    p = ({ brand: e }) => (0, d.jsx)(s.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  33062(e, n, t) {
   t.d(n, { bo: () => o, KF: () => m, mJ: () => g, VZ: () => A, cR: () => _, Pv: () => f, qZ: () => i, kD: () => b, B2: () => u, Pc: () => l, f4: () => a, GT: () => k, fX: () => r, eQ: () => x, B_: () => j, o_: () => v, Rc: () => w });
   const s = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    o = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const p = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => h(e));
     return p(c(n));
    },
    u = (e, n) => g(e).includes(n),
    h = (e) => {
     const n = / URL \(([^)]+)\)/;
     return p(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    g = (e) => p(c(e.projects.flatMap((e) => h(e)))),
    f = (e) => {
     const n = h(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const s = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: s, id: o, value: r }) => {
        const i = /^(.+) URL/.exec(s)[1],
         a = 'Storybook' === i ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${i}`;
        return { brand: i.toLowerCase(), name: s, id: o, value: r, description: a };
       });
      return { frameworkName: n, tasks: s };
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
   function w(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const _ = () => {
     const e = s.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = s.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  37131(e, n, t) {
   t.d(n, { VK: () => f, $9: () => j, mu: () => v, Fc: () => x, K_: () => b });
   var s = t(29181),
    o = t(13526),
    r = t(1292),
    i = t(90495),
    a = t(54565);
   function l(e) {
    return (0, a.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const s = t(83294).V6;
      return (0, d.jsx)(s, {
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
   var p = t(67970),
    m = t(72642),
    u = t(58876),
    h = t(33062);
   const g = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => h.f4.includes(e.id)),
      r = t && h.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(s.If, { sections: r.map((t) => ({ className: (0, o.A)('definition-of-done', t && `definition-of-done--${(0, h.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u._, { children: t.tasks.map(({ checked: e, name: t, id: s }) => (0, d.jsx)(u.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, h.qZ)(s) }, s)) }), (0, d.jsx)(s.fz, { children: (0, d.jsxs)(s.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    v = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !h.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(i.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            s = n.progress.max - n.progress.value;
           return t === s ? e.title.localeCompare(n.title) : t - s;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            o = t?.value,
            a = (0, h.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${o} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${o} voor visuele regressie tests` }],
            ]),
            p = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            i.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(i.Wu, {
              children: [
               (0, d.jsx)(s.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(s.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(s.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (p.length > 0 || a.length > 0) && (0, d.jsx)(s.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               p.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(s.dk, {
                  links: p
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(r.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 && (0, d.jsx)(d.Fragment, { children: a.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(s.DZ, { level: n + 2, children: [o, ' in ', e] }), (0, d.jsx)(s.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(r.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(s.fz, { children: 'Er zijn nog geen implementaties' });
    },
    j = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      o = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(s.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(s.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(s.Xy, { children: [o ? (0, d.jsxs)(s.Er, { children: ['Vul de ', (0, d.jsx)(s.N_, { href: o, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(s.Er, { children: [(0, d.jsxs)(s.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(s.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(s.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(s.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    x = ({ component: e, headingLevel: n, description: t }) => {
     const o = e && h.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m.p, { level: n, suffix: o && (0, d.jsx)(p.D, { state: o }), children: e.title }), (0, d.jsx)(s.fz, { lead: !0, children: t })] });
    },
    b = ({ component: e }) => {
     const n = (e && g[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(s.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(s.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  54565(e, n, t) {
   t.d(n, { c: () => o });
   var s = t(30758);
   function o() {
    const [e, n] = (0, s.useState)();
    return ((0, s.useEffect)(() => n(!0), []), e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => a });
   var s = t(46447),
    o = t(13526),
    r = t(33062),
    i = t(86070);
   const a = ({ state: e }) => {
    const n = (0, r.fX)(e);
    return (0, i.jsx)(s.KE, { className: (0, o.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => r });
   var s = t(13526),
    o = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...i }) => (0, o.jsxs)('hgroup', { className: (0, s.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...i, children: [(0, o.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, o.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  90495(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => i, Wu: () => a, Zp: () => l });
   var s = t(46447),
    o = t(13526),
    r = t(86070);
   const i = ({ background: e, children: n, className: t, ...s }) => (0, r.jsx)('div', { className: (0, o.A)('card__illustration', e && `card__illustration--${e}`, t), ...s, children: n }),
    a = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: i = 'div', background: a, children: l }) => {
     const d = (e) => ('article' === i ? (0, r.jsx)('article', { ...e }) : 'section' === i ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      c = (0, r.jsx)(d, { className: (0, o.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, r.jsx)(s.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, r.jsx)('div', { className: (0, o.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
  93510(e, n, t) {
   (t.r(n), t.d(n, { assets: () => c, component: () => h, contentTitle: () => d, default: () => v, description: () => m, frontMatter: () => l, issueNumber: () => u, metadata: () => s, title: () => p, toc: () => g }));
   const s = JSON.parse('{"id":"componenten/password-input/index","title":"Password Input","description":"Afgeschermd invoerveld om een geheime tekst in te vullen, zoals een wachtwoord.","source":"@site/docs/componenten/password-input/index.mdx","sourceDirName":"componenten/password-input","slug":"/password-input","permalink":"/password-input","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/password-input/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Password Input","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Password Input","pagination_label":"Password Input","description":"Afgeschermd invoerveld om een geheime tekst in te vullen, zoals een wachtwoord.","slug":"/password-input","keywords":["code","confidential input","form","form control","form field","hidden","hidden input","input field","mask","masker","masked input","password","password field","secret","secure input","verborgen","wachtwoord","wachtwoordinvoer","wachtwoordveld"]},"sidebar":"componenten","previous":{"title":"Paragraph","permalink":"/paragraph"},"next":{"title":"Progress Bar","permalink":"/progress-bar"}}');
   var o = t(86070),
    r = t(18439),
    i = t(45189),
    a = t(37131);
   const l = { title: 'Password Input', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Password Input', pagination_label: 'Password Input', description: 'Afgeschermd invoerveld om een geheime tekst in te vullen, zoals een wachtwoord.', slug: '/password-input', keywords: ['code', 'confidential input', 'form', 'form control', 'form field', 'hidden', 'hidden input', 'input field', 'mask', 'masker', 'masked input', 'password', 'password field', 'secret', 'secure input', 'verborgen', 'wachtwoord', 'wachtwoordinvoer', 'wachtwoordveld'] },
    d = void 0,
    c = {},
    p = 'Password Input',
    m = 'Afgeschermd invoerveld om een geheime tekst in te vullen, zoals een wachtwoord.',
    u = 133,
    h = i.find((e) => e.number === u),
    g = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function f(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, o.jsx)(a.Fc, { component: h, headingLevel: 1, description: m }), '\n', (0, o.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, o.jsx)(a.VK, { component: h, headingLevel: 3 }), '\n', (0, o.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, o.jsx)(a.mu, { component: h, headingLevel: 3 }), '\n', (0, o.jsx)(a.K_, { component: h }), '\n', (0, o.jsx)(a.$9, { component: h, headingLevel: 2 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(f, { ...e }) }) : f(e);
   }
  },
 },
]);
