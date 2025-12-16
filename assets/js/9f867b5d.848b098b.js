'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [14408],
 {
  14889: (e, t, n) => {
   n.d(t, { AC: () => c, Fu: () => i, Wu: () => l, Zp: () => o });
   var s = n(68873),
    a = n(13526),
    r = n(86070);
   const i = ({ background: e, children: t, className: n, ...s }) => (0, r.jsx)('div', { className: (0, a.A)('card__illustration', e && `card__illustration--${e}`, n), ...s, children: t }),
    l = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    o = ({ href: e, appearance: t, className: n, component: i = 'div', background: l, children: o }) => {
     const c = (e) => ('article' === i ? (0, r.jsx)('article', { ...e }) : 'section' === i ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      d = (0, r.jsx)(c, { className: (0, a.A)('cardgroup__card', l && 'cardgroup__card--light-purple', `cardgroup__card--${t}`, n), children: o });
     return e ? (0, r.jsx)(s.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = ({ appearance: e = 'medium', children: t, className: n }) => (0, r.jsx)('div', { className: (0, a.A)('cardgroup', `cardgroup--${e}`, n), children: t });
  },
  36444: (e, t, n) => {
   n.d(t, { D: () => l });
   var s = n(68873),
    a = n(13526),
    r = n(75916),
    i = n(86070);
   const l = ({ state: e }) => {
    const t = (0, r.fX)(e);
    return (0, i.jsx)(s.KE, { className: (0, a.A)('estafette-badge', t && `estafette-badge--${t}`), children: e });
   };
  },
  63674: (e, t, n) => {
   n.d(t, { $S: () => s, d1: () => a });
   n(34374);
   function s(...e) {
    return n(41863).$S(...e);
   }
   function a(...e) {
    return n(41863).d1(...e);
   }
  },
  75916: (e, t, n) => {
   n.d(t, { B2: () => h, B_: () => f, GT: () => b, KF: () => d, Pc: () => l, Pv: () => u, Rc: () => _, bo: () => s, eQ: () => j, f4: () => i, fX: () => a, kD: () => x, mJ: () => p, o_: () => g, qZ: () => r });
   const s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    a = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
   function o(e) {
    return Array.from(new Set(e));
   }
   const c = (e) => {
     const t = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
     return [...e].sort((e, n) => t.indexOf(e) - t.indexOf(n));
    },
    d = (e) => {
     const t = e.flatMap(({ projects: e }) => e).flatMap((e) => m(e));
     return c(o(t));
    },
    h = (e, t) => p(e).includes(t),
    m = (e) => {
     const t = / URL \(([^)]+)\)/;
     return c(o(e.tasks.filter(({ name: e, value: n }) => '' !== n && t.test(e)).map(({ name: e }) => t.exec(e)?.[1])));
    },
    p = (e) => c(o(e.projects.flatMap((e) => m(e)))),
    u = (e) => {
     const t = m(e),
      n = ((e) => {
       const t = e.tasks.find(({ name: e }) => 'Naam' === e);
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const s = e.tasks
       .filter(({ name: e, value: n }) => '' !== n && e.includes(t))
       .map(({ name: s, id: a, value: r }) => {
        const i = /^(.+) URL/.exec(s)[1],
         l = 'Storybook' === i ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${i}`;
        return { brand: i.toLowerCase(), name: s, id: a, value: r, description: l };
       });
      return { frameworkName: t, tasks: s };
     });
    },
    g = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    j = (e, t) => t.reduce((e, t) => e?.[t], e);
   function x(e, t = []) {
    return Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? x(e[n], [...t, n]) : []));
   }
   function b(e) {
    const t = new Map();
    function n(e) {
     return t.has(e) || t.set(e, g(e)), t.get(e);
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function _(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) e[t] || (e[t] = {}), (e = e[t]);
    }
    return t;
   }
  },
  91683: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => N, contentTitle: () => A, default: () => w, frontMatter: () => v, metadata: () => s, toc: () => k });
   const s = JSON.parse('{"id":"componenten/README","title":"Componenten Overzicht","description":"Een overzicht van alle gedocumenteerde componenten uit NL Design System","source":"@site/docs/componenten/README.mdx","sourceDirName":"componenten","slug":"/componenten/","permalink":"/componenten/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Componenten Overzicht","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Overzicht","sidebar_position":1,"pagination_label":"Overzicht","description":"Een overzicht van alle gedocumenteerde componenten uit NL Design System","keywords":["componenten","design system","overzicht","utrecht","den haag"]},"sidebar":"componenten","next":{"title":"Accordion","permalink":"/accordion"}}');
   var a = n(86070),
    r = n(85248),
    i = n(25557),
    l = n(63674),
    o = n(45648),
    c = n(48976),
    d = n(14537),
    h = n(68873),
    m = n(30758),
    p = n(75916),
    u = n(14889),
    g = n(92420),
    f = n(13526);
   const j = ({ name: e, relayStep: t, description: n }) => {
    const s = (0, p.fX)(t);
    return (0, a.jsxs)(d.WK, { children: [(0, a.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, f.A)('component-illustration', `component-illustration--${s}`), fill: 'none', children: [(0, a.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, a.jsx)('rect', { width: '960', height: '540' }), (0, a.jsx)('rect', { width: '960', height: '540' })] }), (0, a.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, a.jsx)('use', { href: `/svg/componenten_overzicht_${(0, p.fX)(e)}.svg#component-illustration` })] }), (0, a.jsx)(d.$P, { className: 'component-illustration__caption', children: n })] });
   };
   var x = n(36444);
   const b = ({ name: e, description: t, relayStep: n, headingLevel: s = 2, href: r, frameworkNames: i }) => {
     return (0, a.jsxs)(u.Zp, { appearance: 'large', className: (0, f.A)('component-card', !n && 'component-card--suggestion'), component: 'section', children: [(0, a.jsx)(u.Fu, { children: (0, a.jsx)(j, { relayStep: n, description: `Schets van de ${e} component`, name: e }) }), (0, a.jsxs)(u.Wu, { children: [(0, a.jsxs)('div', { children: [(0, a.jsx)(h.DZ, { level: s, className: 'component-card__title', children: e }), n && (0, a.jsx)('p', { children: (0, a.jsx)(x.D, { state: n }) }), t && (0, a.jsx)(h.fz, { children: t }), i && (0, a.jsx)(h._Q, { children: i.map((e) => (0, a.jsx)(h.KE, { children: e }, e)) })] }), r && (0, a.jsx)(h.fz, { children: (0, a.jsxs)(g.N, { className: 'utrecht-link', to: ((l = r), 'string' == typeof l && !1 === l.endsWith('/') ? `${l}/` : l), children: ['Bekijk ', (0, a.jsx)('span', { className: 'w', children: e }), ' component'] }) })] })] });
     var l;
    },
    _ = () => {
     const e = 'framework',
      t = 'status',
      n = (0, l.$S)(),
      { location: s, replace: r } = (0, i.W6)(),
      g = new URLSearchParams(s.search),
      f = (e) => e.title && c.find(({ title: t }) => t && (0, p.Pc)(t) === (0, p.Pc)(e.title)),
      j = n.items
       .filter((e) => !!e && 'string' == typeof e.docId)
       .filter((e) => 'componenten/README' !== e.docId)
       .map((e) => ({ ...e, ...(0, o.cC)(e.docId) }))
       .filter(f)
       .map((e) => ({ ...e, ...f(e) })),
      [_, v] = (0, m.useState)(j),
      [A, N] = (0, m.useState)(g.get(t)?.split(',') || []),
      [k, S] = (0, m.useState)(g.get(e)?.split(',') || []),
      w = (0, p.KF)(j);
     return (
      (0, m.useEffect)(() => {
       v(j.filter((e) => !A.length || A.some((t) => e.relayStep === t)).filter((e) => !k.length || k.some((t) => (0, p.B2)(e, t)))), A.length ? g.set(t, A.join(',')) : g.delete(t), k.length ? g.set(e, k.join(',')) : g.delete(e), r({ ...s, search: g.toString() });
      }, [A, k]),
      (0, a.jsxs)(a.Fragment, {
       children: [
        (0, a.jsx)('div', {
         className: 'filter-accordion',
         children: (0, a.jsx)(d.If, {
          sections: [
           {
            headingLevel: 2,
            expanded: g.size > 0,
            label: (0, a.jsx)('span', { id: 'filter-results-label', children: 'Filter componenten' }),
            body: (0, a.jsxs)(a.Fragment, {
             children: [
              (0, a.jsxs)(d.LB, {
               'aria-describedby': 'filter-results',
               'aria-labelledby': 'filter-results-label',
               children: [
                (0, a.jsx)('h3', { className: 'utrecht-heading-6', children: 'Status' }),
                Object.entries({ HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of Fame' }).map(([e, t]) =>
                 (0, a.jsxs)(
                  h.zB,
                  {
                   type: 'checkbox',
                   children: [
                    (0, a.jsx)(h.Sc, {
                     defaultChecked: A.includes(e),
                     id: e,
                     onChange: (t) =>
                      ((e, t) => {
                       N((n) => (e ? [...n, t] : n.filter((e) => e !== t)));
                      })(t.target.checked, e),
                    }),
                    (0, a.jsx)(h.lR, { htmlFor: e, children: (0, a.jsx)(x.D, { state: t }) }),
                   ],
                  },
                  e,
                 ),
                ),
               ],
              }),
              w.length > 0 &&
               (0, a.jsxs)(d.LB, {
                'aria-describedby': 'filter-results',
                'aria-labelledby': 'filter-results-label',
                children: [
                 (0, a.jsx)('h3', { className: 'utrecht-heading-6', children: 'Implementatie' }),
                 w.map((e) =>
                  (0, a.jsxs)(
                   h.zB,
                   {
                    type: 'checkbox',
                    children: [
                     (0, a.jsx)(h.Sc, {
                      defaultChecked: k.includes(e),
                      id: e,
                      onChange: (t) =>
                       ((e, t) => {
                        S((n) => (e ? [...n, t] : n.filter((e) => e !== t)));
                       })(t.target.checked, e),
                     }),
                     (0, a.jsx)(h.lR, { htmlFor: e, children: e }),
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
        (0, a.jsxs)(d.fz, { role: 'status', id: 'filter-results', children: [_.length, ' van ', j.length, ' componenten zichtbaar'] }),
        0 === _.length &&
         (0, a.jsx)(d.fz, {
          children: (0, a.jsx)(d.bm, {
           onClick: () => {
            window.location.search = '';
           },
           children: 'Toon alle componenten',
          }),
         }),
        (0, a.jsx)(u.AC, {
         appearance: 'large',
         children: _.map(({ title: e, id: t, href: n, description: s }) => {
          const r = c.find((t) => t.title === e),
           i = r && p.bo[r.relayStep],
           l = (0, p.mJ)(r);
          return (0, a.jsx)(b, { name: e, headingLevel: 2, href: n, description: s, relayStep: i, frameworkNames: l }, t);
         }),
        }),
       ],
      })
     );
    },
    v = { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] },
    A = 'Componenten',
    N = {},
    k = [];
   function S(e) {
    const t = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.header, { children: (0, a.jsx)(t.h1, { id: 'componenten', children: 'Componenten' }) }), '\n', (0, a.jsxs)(t.p, { children: ['De componenten van NL Design System worden met een ', (0, a.jsx)(t.a, { href: '/handboek/estafettemodel/', children: 'estafette aanpak' }), ' gemaakt en kunnen dus verschillende statussen hebben.'] }), '\n', (0, a.jsx)(_, { headingLevel: 2 })] });
   }
   function w(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(S, { ...e }) }) : S(e);
   }
  },
  92420: (e, t, n) => {
   n.d(t, { N: () => i });
   var s = n(71170),
    a = n(13526),
    r = n(86070);
   const i = ({ className: e, ...t }) => (0, r.jsx)(s.A, { className: (0, a.$)('utrecht-link', 'utrecht-link--html-a', e), ...t });
  },
 },
]);
