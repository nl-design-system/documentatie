'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [24515],
 {
  1292(e, n, t) {
   t.d(n, { r: () => h });
   var r = t(29181),
    o = t(74172),
    i = t(15089),
    s = t(28377),
    a = t(33648),
    l = t(83386),
    c = t(86070);
   const d = { figma: (0, c.jsx)(o.A, {}), github: (0, c.jsx)(i.A, {}), npm: (0, c.jsx)(s.A, {}), storybook: (0, c.jsx)(a.A, {}) },
    h = ({ brand: e }) => (0, c.jsx)(r.In, { children: d[e] || (0, c.jsx)(l.A, {}) });
  },
  33062(e, n, t) {
   t.d(n, { bo: () => o, KF: () => m, mJ: () => g, VZ: () => N, cR: () => A, Pv: () => f, qZ: () => s, kD: () => b, B2: () => p, Pc: () => l, f4: () => a, GT: () => v, fX: () => i, eQ: () => k, B_: () => j, o_: () => x, Rc: () => _ });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    o = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    a = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return h(d(n));
    },
    p = (e, n) => g(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(d(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    g = (e) => h(d(e.projects.flatMap((e) => u(e)))),
    f = (e) => {
     const n = u(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: o, value: i }) => {
        const s = /^(.+) URL/.exec(r)[1],
         a = 'Storybook' === s ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${s}`;
        return { brand: s.toLowerCase(), name: r, id: o, value: i, description: a };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    x = (e) => e.join('.'),
    j = (e) => '--' + e.join('-'),
    k = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function v(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, x(e)), n.get(e));
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
   t.d(n, { VK: () => f, $9: () => j, mu: () => x, Fc: () => k, K_: () => b });
   var r = t(29181),
    o = t(13526),
    i = t(1292),
    s = t(90495),
    a = t(54565);
   function l(e) {
    return (0, a.c)() ? e.children() : null;
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
   var h = t(67970),
    m = t(72642),
    p = t(58876),
    u = t(33062);
   const g = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    f = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => u.f4.includes(e.id)),
      i = t && u.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, c.jsx)(r.If, { sections: i.map((t) => ({ className: (0, o.A)('definition-of-done', t && `definition-of-done--${(0, u.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(p._, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, c.jsx)(p.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, u.qZ)(r) }, r)) }), (0, c.jsx)(r.fz, { children: (0, c.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    x = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !u.f4.includes(e.id));
     return e && t.length
      ? (0, c.jsx)(s.AC, {
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
            o = t?.value,
            a = (0, u.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${o} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${o} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, c.jsx)(
            s.Zp,
            {
             className: 'implementation-card',
             children: (0, c.jsxs)(s.Wu, {
              children: [
               (0, c.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, c.jsxs)(r.fz, { children: [(0, c.jsx)(d, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, c.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || a.length > 0) && (0, c.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, c.jsx)(c.Fragment, {
                 children: (0, c.jsx)(r.dk, {
                  links: h
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, c.jsx)(i.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 && (0, c.jsx)(c.Fragment, { children: a.map(({ frameworkName: e, tasks: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.DZ, { level: n + 2, children: [o, ' in ', e] }), (0, c.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, c.jsx)(i.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, c.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    j = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      o = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(r.DZ, { id: 'help-component-verbeteren', level: n, children: 'Help om deze component te verbeteren' }), (0, c.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, c.jsxs)(r.Xy, { children: [o ? (0, c.jsxs)(r.Er, { children: ['Vul de ', (0, c.jsx)(r.N_, { href: o, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, c.jsxs)(r.Er, { children: [(0, c.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, c.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, c.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, c.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    k = ({ component: e, headingLevel: n, description: t }) => {
     const o = e && u.bo[e.relayStep];
     return e && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(m.p, { level: n, suffix: o && (0, c.jsx)(h.D, { state: o }), children: e.title }), (0, c.jsx)(r.fz, { lead: !0, children: t })] });
    },
    b = ({ component: e }) => {
     const n = (e && g[e.title]) || [];
     return n.length > 0 && (0, c.jsxs)(r.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(r.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  44594(e, n, t) {
   t.d(n, { s: () => l });
   var r = t(29181),
    o = t(13526),
    i = t(33062),
    s = t(86070);
   const a = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    l = ({ name: e, relayStep: n, description: t }) => {
     const l = (0, i.fX)(n),
      c = a[e] ?? e;
     return (0, s.jsxs)(r.WK, { children: [(0, s.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, o.A)('component-illustration', `component-illustration--${l}`), fill: 'none', children: [(0, s.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, s.jsx)('rect', { width: '960', height: '540' }), (0, s.jsx)('rect', { width: '960', height: '540' })] }), (0, s.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, s.jsx)('use', { href: `/svg/componenten_overzicht_${(0, i.fX)(c)}.svg#component-illustration` })] }), (0, s.jsx)(r.$P, { className: 'component-illustration__caption', children: t })] });
    };
  },
  54565(e, n, t) {
   t.d(n, { c: () => o });
   var r = t(30758);
   function o() {
    const [e, n] = (0, r.useState)();
    return ((0, r.useEffect)(() => n(!0), []), e);
   }
  },
  57365(e, n, t) {
   (t.r(n), t.d(n, { assets: () => h, component: () => x, componentName: () => f, contentTitle: () => d, default: () => b, description: () => p, frontMatter: () => c, issueNumber: () => u, metadata: () => r, relayStep: () => g, title: () => m, toc: () => j }));
   const r = JSON.parse('{"id":"componenten/checkbox-group/index","title":"Checkbox Group","description":"Biedt de mogelijkheid om geen, \xe9\xe9n of meerdere opties te selecteren uit een lijst.","source":"@site/docs/componenten/checkbox-group/index.mdx","sourceDirName":"componenten/checkbox-group","slug":"/checkbox-group","permalink":"/checkbox-group","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/checkbox-group/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Checkbox Group","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Checkbox Group","pagination_label":"Checkbox Group","description":"Biedt de mogelijkheid om geen, \xe9\xe9n of meerdere opties te selecteren uit een lijst.","slug":"/checkbox-group","keywords":["aankruisen","aankruisvakje","aanvinken","afvinken","aria-disabled","check","check box","checkbox","checkbox button","checkbox group","checkboxes","checked","checkmark","choice","choices","fieldset","form","form control","form field","formulier","formulierveld","indeterminate","invoerveld","kruis","kruisje","meerkeuze","meerkeuzevraag","multiple choice","niet","optie","option","option box","optional","optioneel","options","required","select","selecteren","selectie","selectievakje","selection box","uncheck","unchecked","verplicht","vink","vinkje","wel","X mark"]},"sidebar":"componenten","previous":{"title":"Checkbox","permalink":"/checkbox"},"next":{"title":"Code","permalink":"/code"}}');
   var o = t(86070),
    i = t(18439),
    s = t(64792),
    a = t(37131),
    l = t(44594);
   const c = { title: 'Checkbox Group', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Checkbox Group', pagination_label: 'Checkbox Group', description: 'Biedt de mogelijkheid om geen, \xe9\xe9n of meerdere opties te selecteren uit een lijst.', slug: '/checkbox-group', keywords: ['aankruisen', 'aankruisvakje', 'aanvinken', 'afvinken', 'aria-disabled', 'check', 'check box', 'checkbox', 'checkbox button', 'checkbox group', 'checkboxes', 'checked', 'checkmark', 'choice', 'choices', 'fieldset', 'form', 'form control', 'form field', 'formulier', 'formulierveld', 'indeterminate', 'invoerveld', 'kruis', 'kruisje', 'meerkeuze', 'meerkeuzevraag', 'multiple choice', 'niet', 'optie', 'option', 'option box', 'optional', 'optioneel', 'options', 'required', 'select', 'selecteren', 'selectie', 'selectievakje', 'selection box', 'uncheck', 'unchecked', 'verplicht', 'vink', 'vinkje', 'wel', 'X mark'] },
    d = void 0,
    h = {},
    m = 'Checkbox Group',
    p = 'Biedt de mogelijkheid om geen, \xe9\xe9n of meerdere opties te selecteren uit een lijst.',
    u = 128,
    g = 'help wanted',
    f = 'checkbox-group',
    x = s.find((e) => e.number === u),
    j = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
    ];
   function k(e) {
    const n = { h2: 'h2', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, o.jsx)(a.Fc, { component: x, headingLevel: 1, description: p }), '\n', (0, o.jsx)(l.s, { relayStep: g, description: `Schets van de ${f} component`, name: f }), '\n', (0, o.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, o.jsx)(a.VK, { component: x, headingLevel: 3 }), '\n', (0, o.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, o.jsx)(a.mu, { component: x, headingLevel: 3 }), '\n', (0, o.jsx)(a.K_, { component: x }), '\n', (0, o.jsx)(a.$9, { component: x, headingLevel: 2 })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(k, { ...e }) }) : k(e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => a });
   var r = t(46447),
    o = t(13526),
    i = t(33062),
    s = t(86070);
   const a = ({ state: e }) => {
    const n = (0, i.fX)(e);
    return (0, s.jsx)(r.KE, { className: (0, o.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  72642(e, n, t) {
   t.d(n, { p: () => i });
   var r = t(13526),
    o = t(86070);
   const i = ({ children: e, className: n, level: t = 1, suffix: i, ...s }) => (0, o.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...s, children: [(0, o.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), i && (0, o.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [i ? ' ' : '', i] })] });
  },
  90495(e, n, t) {
   t.d(n, { AC: () => c, Fu: () => s, Wu: () => a, Zp: () => l });
   var r = t(46447),
    o = t(13526),
    i = t(86070);
   const s = ({ background: e, children: n, className: t, ...r }) => (0, i.jsx)('div', { className: (0, o.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    a = (e) => (0, i.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: s = 'div', background: a, children: l }) => {
     const c = (e) => ('article' === s ? (0, i.jsx)('article', { ...e }) : 'section' === s ? (0, i.jsx)('section', { ...e }) : (0, i.jsx)('div', { ...e })),
      d = (0, i.jsx)(c, { className: (0, o.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, i.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'medium', children: n, className: t }) => (0, i.jsx)('div', { className: (0, o.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
 },
]);
