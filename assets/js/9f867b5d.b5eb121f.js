'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [14408],
 {
  33062(e, t, n) {
   n.d(t, { bo: () => s, KF: () => m, mJ: () => u, VZ: () => A, cR: () => k, Pv: () => f, qZ: () => i, kD: () => _, B2: () => p, Pc: () => l, f4: () => o, GT: () => v, fX: () => r, eQ: () => b, B_: () => x, o_: () => j, Rc: () => N });
   const a = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    i = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, t) => c.indexOf(e) - c.indexOf(t)),
    m = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => g(e));
     return h(d(t));
    },
    p = (e, t) => u(e).includes(t),
    g = (e) => {
     const t = / URL \(([^)]+)\)/;
     return h(d(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    u = (e) => h(d(e.projects.flatMap((e) => g(e)))),
    f = (e) => {
     const t = g(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const a = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: a, id: s, value: r }) => {
        const i = /^(.+) URL/.exec(a)[1],
         o = 'Storybook' === i ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${i}`;
        return { brand: i.toLowerCase(), name: a, id: s, value: r, description: o };
       });
      return { frameworkName: t, tasks: a };
     });
    },
    j = (e) => e.join('.'),
    x = (e) => '--' + e.join('-'),
    b = (e, t) => t.reduce((e, t) => e?.[t], e);
   function _(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? _(e[n], [...t, n]) : []));
   }
   function v(e) {
    const t = new Map();
    function n(e) {
     return (t.has(e) || t.set(e, j(e)), t.get(e));
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function N(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) (e[t] || (e[t] = {}), (e = e[t]));
    }
    return t;
   }
   const k = () => {
     const e = a.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = a.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const t = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return t ? t[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  45282(e, t, n) {
   n.d(t, { F: () => r, N: () => i });
   var a = n(13526),
    s = n(86070);
   const r = ({ children: e, ...t }) => {
     const { to: n, href: a, ...r } = t;
     let i = n || a;
     const o = new URL(i, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === o.origin ? ((o.pathname = o.pathname.endsWith('/') ? o.pathname : `${o.pathname}/`), (i = o.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, s.jsx)('a', { href: i, ...r, children: e }));
    },
    i = ({ className: e, ...t }) => (0, s.jsx)(r, { className: (0, a.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
  60316(e, t, n) {
   n.d(t, { $S: () => a, d1: () => s });
   n(74147);
   function a(...e) {
    return n(97819).$S(...e);
   }
   function s(...e) {
    return n(97819).d1(...e);
   }
  },
  67970(e, t, n) {
   n.d(t, { D: () => o });
   var a = n(46447),
    s = n(13526),
    r = n(33062),
    i = n(86070);
   const o = ({ state: e }) => {
    const t = (0, r.fX)(e);
    return (0, i.jsx)(a.KE, { className: (0, s.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  90495(e, t, n) {
   n.d(t, { AC: () => c, Fu: () => i, Wu: () => o, Zp: () => l });
   var a = n(46447),
    s = n(13526),
    r = n(86070);
   const i = ({ background: e, children: t, className: n, ...a }) => (0, r.jsx)('div', { className: (0, s.A)('card__illustration', e && `card__illustration--${e}`, n), ...a, children: t }),
    o = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: t, className: n, component: i = 'div', background: o, children: l }) => {
     const c = (e) => ('article' === i ? (0, r.jsx)('article', { ...e }) : 'section' === i ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      d = (0, r.jsx)(c, { className: (0, s.A)('cardgroup__card', o && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: l });
     return e ? (0, r.jsx)(a.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'medium', children: t, className: n }) => (0, r.jsx)('div', { className: (0, s.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
  93857(e, t, n) {
   (n.r(t), n.d(t, { assets: () => A, contentTitle: () => k, default: () => D, frontMatter: () => N, metadata: () => a, toc: () => w }));
   const a = JSON.parse('{"id":"componenten/README","title":"Componenten Overzicht","description":"Een overzicht van alle gedocumenteerde componenten uit NL Design System","source":"@site/docs/componenten/README.mdx","sourceDirName":"componenten","slug":"/componenten/","permalink":"/componenten/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Componenten Overzicht","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Overzicht","sidebar_position":1,"pagination_label":"Overzicht","description":"Een overzicht van alle gedocumenteerde componenten uit NL Design System","keywords":["componenten","design system","overzicht","utrecht","den haag"]},"sidebar":"componenten","next":{"title":"Accordion","permalink":"/accordion"}}');
   var s = n(86070),
    r = n(18439),
    i = n(25557),
    o = n(60316),
    l = n(2264),
    c = n(57641),
    d = n(29181),
    h = n(46447),
    m = n(30758),
    p = n(33062),
    g = n(90495),
    u = n(45282),
    f = n(13526);
   const j = { 'Heading 1': 'Heading', 'Heading 2': 'Heading', 'Heading 3': 'Heading', 'Heading 4': 'Heading', 'Heading 5': 'Heading', 'Heading 6': 'Heading' },
    x = ({ name: e, relayStep: t, description: n }) => {
     const a = (0, p.fX)(t),
      r = j[e] ?? e;
     return (0, s.jsxs)(d.WK, { children: [(0, s.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, f.A)('component-illustration', `component-illustration--${a}`), fill: 'none', children: [(0, s.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, s.jsx)('rect', { width: '960', height: '540' }), (0, s.jsx)('rect', { width: '960', height: '540' })] }), (0, s.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, s.jsx)('use', { href: `/svg/componenten_overzicht_${(0, p.fX)(r)}.svg#component-illustration` })] }), (0, s.jsx)(d.$P, { className: 'component-illustration__caption', children: n })] });
    };
   var b = n(67970);
   const _ = ({ name: e, description: t, relayStep: n, headingLevel: a = 2, href: r, frameworkNames: i }) => {
     return (0, s.jsxs)(g.Zp, { appearance: 'large', className: (0, f.A)('component-card', !n && 'component-card--suggestion'), component: 'section', children: [(0, s.jsx)(g.Fu, { children: (0, s.jsx)(x, { relayStep: n, description: `Schets van de ${e} component`, name: e }) }), (0, s.jsxs)(g.Wu, { children: [(0, s.jsxs)('div', { children: [(0, s.jsx)(h.DZ, { level: a, className: 'component-card__title', children: e }), n && (0, s.jsx)('p', { children: (0, s.jsx)(b.D, { state: n }) }), t && (0, s.jsx)(h.fz, { children: t }), i && (0, s.jsx)(h._Q, { children: i.map((e) => (0, s.jsx)(h.KE, { children: e }, e)) })] }), r && (0, s.jsx)(h.fz, { children: (0, s.jsxs)(u.N, { className: 'utrecht-link', to: ((o = r), 'string' == typeof o && !1 === o.endsWith('/') ? `${o}/` : o), children: ['Bekijk ', (0, s.jsx)('span', { className: 'w', children: e }), ' component'] }) })] })] });
     var o;
    },
    v = () => {
     const e = 'framework',
      t = 'status',
      n = (0, o.$S)(),
      { location: a, replace: r } = (0, i.W6)(),
      u = new URLSearchParams(a.search),
      f = (e) => e.title && c.find(({ title: t }) => t && (0, p.Pc)(t) === (0, p.Pc)(e.title)),
      j = n.items
       .filter((e) => !!e && 'string' == typeof e.docId)
       .filter((e) => 'componenten/README' !== e.docId)
       .map((e) => ({ ...e, ...(0, l.cC)(e.docId) }))
       .filter(f)
       .map((e) => ({ ...e, ...f(e) })),
      [x, v] = (0, m.useState)(j),
      [N, k] = (0, m.useState)(u.get(t)?.split(',') || []),
      [A, w] = (0, m.useState)(u.get(e)?.split(',') || []),
      S = (0, p.KF)(j);
     return (
      (0, m.useEffect)(() => {
       (v(j.filter((e) => !N.length || N.some((t) => e.relayStep === t)).filter((e) => !A.length || A.some((t) => (0, p.B2)(e, t)))), N.length ? u.set(t, N.join(',')) : u.delete(t), A.length ? u.set(e, A.join(',')) : u.delete(e), r({ ...a, search: u.toString() }));
      }, [N, A]),
      (0, s.jsxs)(s.Fragment, {
       children: [
        (0, s.jsx)('div', {
         className: 'filter-accordion',
         children: (0, s.jsx)(d.If, {
          sections: [
           {
            headingLevel: 2,
            expanded: u.size > 0,
            label: (0, s.jsx)('span', { id: 'filter-results-label', children: 'Filter componenten' }),
            body: (0, s.jsxs)(s.Fragment, {
             children: [
              (0, s.jsxs)(d.LB, {
               'aria-describedby': 'filter-results',
               'aria-labelledby': 'filter-results-label',
               children: [
                (0, s.jsx)('h3', { className: 'utrecht-heading-6', children: 'Status' }),
                Object.entries({ HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of Fame' }).map(([e, t]) =>
                 (0, s.jsxs)(
                  h.zB,
                  {
                   type: 'checkbox',
                   children: [
                    (0, s.jsx)(h.Sc, {
                     defaultChecked: N.includes(e),
                     id: e,
                     onChange: (t) =>
                      ((e, t) => {
                       k((n) => (e ? [...n, t] : n.filter((e) => e !== t)));
                      })(t.target.checked, e),
                    }),
                    (0, s.jsx)(h.lR, { htmlFor: e, children: (0, s.jsx)(b.D, { state: t }) }),
                   ],
                  },
                  e,
                 ),
                ),
               ],
              }),
              S.length > 0 &&
               (0, s.jsxs)(d.LB, {
                'aria-describedby': 'filter-results',
                'aria-labelledby': 'filter-results-label',
                children: [
                 (0, s.jsx)('h3', { className: 'utrecht-heading-6', children: 'Implementatie' }),
                 S.map((e) =>
                  (0, s.jsxs)(
                   h.zB,
                   {
                    type: 'checkbox',
                    children: [
                     (0, s.jsx)(h.Sc, {
                      defaultChecked: A.includes(e),
                      id: e,
                      onChange: (t) =>
                       ((e, t) => {
                        w((n) => (e ? [...n, t] : n.filter((e) => e !== t)));
                       })(t.target.checked, e),
                     }),
                     (0, s.jsx)(h.lR, { htmlFor: e, children: e }),
                    ],
                   },
                   e,
                  ),
                 ),
                ],
               }),
             ],
            }),
           },
          ],
         }),
        }),
        (0, s.jsxs)(d.fz, { role: 'status', id: 'filter-results', children: [x.length, ' van ', j.length, ' componenten zichtbaar'] }),
        0 === x.length &&
         (0, s.jsx)(d.fz, {
          children: (0, s.jsx)(d.bm, {
           onClick: () => {
            window.location.search = '';
           },
           children: 'Toon alle componenten',
          }),
         }),
        (0, s.jsx)(g.AC, {
         appearance: 'large',
         children: x.map(({ title: e, id: t, href: n, description: a }) => {
          const r = c.find((t) => t.title === e),
           i = r && p.bo[r.relayStep],
           o = (0, p.mJ)(r);
          return (0, s.jsx)(_, { name: e, headingLevel: 2, href: n, description: a, relayStep: i, frameworkNames: o }, t);
         }),
        }),
       ],
      })
     );
    },
    N = { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] },
    k = 'Componenten',
    A = {},
    w = [];
   function S(e) {
    const t = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(t.header, { children: (0, s.jsx)(t.h1, { id: 'componenten', children: 'Componenten' }) }), '\n', (0, s.jsxs)(t.p, { children: ['De componenten van NL Design System worden met een ', (0, s.jsx)(t.a, { href: '/handboek/estafettemodel/', children: 'estafette aanpak' }), ' gemaakt en kunnen dus verschillende statussen hebben.'] }), '\n', (0, s.jsx)(v, { headingLevel: 2 })] });
   }
   function D(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(S, { ...e }) }) : S(e);
   }
  },
 },
]);
