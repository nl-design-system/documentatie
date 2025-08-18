'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [12487],
 {
  47605: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => A, contentTitle: () => v, default: () => N, frontMatter: () => b, metadata: () => _, toc: () => k });
   var r = n(52676),
    s = n(40139),
    a = n(87573),
    i = n(73436),
    l = n(91670),
    o = n(41115),
    c = n(16167),
    d = n(75271),
    h = n(14669),
    m = n(35038),
    p = n(57229),
    u = n(4814);
   const g = (e) => {
    let { name: t, relayStep: n, description: s } = e;
    const a = (0, h.mA)(n);
    return (0, r.jsxs)(o.Bc, { children: [(0, r.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, u.Z)('component-illustration', `component-illustration--${a}`), fill: 'none', children: [(0, r.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, r.jsx)('rect', { width: '960', height: '540' }), (0, r.jsx)('rect', { width: '960', height: '540' })] }), (0, r.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, r.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, r.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, r.jsx)('use', { href: `/svg/componenten_overzicht_${(0, h.mA)(t)}.svg#component-illustration` })] }), (0, r.jsx)(o.QD, { className: 'component-illustration__caption', children: s })] });
   };
   var f = n(23355);
   const j = (e) => {
     let { name: t, description: n, relayStep: s, headingLevel: a = 2, href: i, frameworkNames: l } = e;
     return (0, r.jsxs)(m.Zb, { appearance: 'large', className: (0, u.Z)('component-card', !s && 'component-card--suggestion'), component: 'section', children: [(0, r.jsx)(m.wu, { children: (0, r.jsx)(g, { relayStep: s, description: `Schets van de ${t} component`, name: t }) }), (0, r.jsxs)(m.aY, { children: [(0, r.jsxs)('div', { children: [(0, r.jsx)(c.X6, { level: a, className: 'component-card__title', children: t }), s && (0, r.jsx)('p', { children: (0, r.jsx)(f.y, { state: s }) }), n && (0, r.jsx)(c.nv, { children: n }), l && (0, r.jsx)(c.k, { children: l.map((e) => (0, r.jsx)(c.Ou, { children: e }, e)) })] }), i && (0, r.jsx)(c.nv, { children: (0, r.jsxs)(p.r, { className: 'utrecht-link', to: ((o = i), 'string' == typeof o && !1 === o.endsWith('/') ? `${o}/` : o), children: ['Bekijk ', (0, r.jsx)('span', { className: 'w', children: t }), ' component'] }) })] })] });
     var o;
    },
    x = () => {
     const e = 'framework',
      t = 'status',
      n = (0, i.jA)(),
      { location: s, replace: p } = (0, a.k6)(),
      u = new URLSearchParams(s.search),
      g = (e) =>
       e.title &&
       l.find((t) => {
        let { title: n } = t;
        return n && (0, h.BA)(n) === (0, h.BA)(e.title);
       }),
      x = n.items
       .filter((e) => !!e && 'string' == typeof e.docId)
       .filter((e) => 'componenten/README' !== e.docId)
       .map((e) => ({ ...e, ...(0, i.xz)(e.docId) }))
       .filter(g)
       .map((e) => ({ ...e, ...g(e) })),
      [b, v] = (0, d.useState)(x),
      [_, A] = (0, d.useState)(u.get(t)?.split(',') || []),
      [k, w] = (0, d.useState)(u.get(e)?.split(',') || []),
      N = (0, h.Ee)(x);
     return (
      (0, d.useEffect)(() => {
       v(x.filter((e) => !_.length || _.some((t) => e.relayStep === t)).filter((e) => !k.length || k.some((t) => (0, h.d)(e, t)))), _.length ? u.set(t, _.join(',')) : u.delete(t), k.length ? u.set(e, k.join(',')) : u.delete(e), p({ ...s, search: u.toString() });
      }, [_, k]),
      (0, r.jsxs)(r.Fragment, {
       children: [
        (0, r.jsx)(o.a2, {
         sections: [
          {
           className: 'utrecht-accordion--nlds-subtle',
           headingLevel: 2,
           expanded: u.size > 0,
           label: (0, r.jsx)('span', { id: 'filter-results-label', children: 'Filter componenten' }),
           body: (0, r.jsxs)(r.Fragment, {
            children: [
             (0, r.jsxs)(o.pg, {
              'aria-describedby': 'filter-results',
              'aria-labelledby': 'filter-results-label',
              children: [
               (0, r.jsx)('h3', { className: 'utrecht-heading-6', children: 'Status' }),
               Object.entries({ HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of Fame' }).map((e) => {
                let [t, n] = e;
                return (0, r.jsxs)(
                 c.Wi,
                 {
                  type: 'checkbox',
                  children: [
                   (0, r.jsx)(c.XZ, {
                    defaultChecked: _.includes(t),
                    id: t,
                    onChange: (e) =>
                     ((e, t) => {
                      A((n) => (e ? [...n, t] : n.filter((e) => e !== t)));
                     })(e.target.checked, t),
                   }),
                   (0, r.jsx)(c.lX, { htmlFor: t, children: (0, r.jsx)(f.y, { state: n }) }),
                  ],
                 },
                 t,
                );
               }),
              ],
             }),
             N.length > 0 &&
              (0, r.jsxs)(o.pg, {
               'aria-describedby': 'filter-results',
               'aria-labelledby': 'filter-results-label',
               children: [
                (0, r.jsx)('h3', { className: 'utrecht-heading-6', children: 'Implementatie' }),
                N.map((e) =>
                 (0, r.jsxs)(
                  c.Wi,
                  {
                   type: 'checkbox',
                   children: [
                    (0, r.jsx)(c.XZ, {
                     defaultChecked: k.includes(e),
                     id: e,
                     onChange: (t) =>
                      ((e, t) => {
                       w((n) => (e ? [...n, t] : n.filter((e) => e !== t)));
                      })(t.target.checked, e),
                    }),
                    (0, r.jsx)(c.lX, { htmlFor: e, children: e }),
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
        (0, r.jsxs)(o.nv, { role: 'status', id: 'filter-results', children: [b.length, ' van ', x.length, ' componenten zichtbaar'] }),
        0 === b.length &&
         (0, r.jsx)(o.nv, {
          children: (0, r.jsx)(o.Ll, {
           onClick: () => {
            window.location.search = '';
           },
           children: 'Toon alle componenten',
          }),
         }),
        (0, r.jsx)(m.um, {
         appearance: 'large',
         children: b.map((e) => {
          let { title: t, id: n, href: s, description: a } = e;
          const i = l.find((e) => e.title === t),
           o = i && h.$3[i.relayStep],
           c = (0, h.U)(i);
          return (0, r.jsx)(j, { name: t, headingLevel: 2, href: s, description: a, relayStep: o, frameworkNames: c }, n);
         }),
        }),
       ],
      })
     );
    },
    b = { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] },
    v = 'Componenten',
    _ = { id: 'componenten/README', title: 'Componenten Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', source: '@site/docs/componenten/README.mdx', sourceDirName: 'componenten', slug: '/componenten/', permalink: '/componenten/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/README.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] }, sidebar: 'componenten', next: { title: 'Accordion', permalink: '/accordion' } },
    A = {},
    k = [];
   function w(e) {
    const t = { a: 'a', h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t.h1, { id: 'componenten', children: 'Componenten' }), '\n', (0, r.jsxs)(t.p, { children: ['De componenten van NL Design System worden met een ', (0, r.jsx)(t.a, { href: '/handboek/estafettemodel/', children: 'estafette aanpak' }), ' gemaakt en kunnen dus verschillende statussen hebben.'] }), '\n', (0, r.jsx)(x, { headingLevel: 2 })] });
   }
   function N(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(w, { ...e }) }) : w(e);
   }
  },
  35038: (e, t, n) => {
   n.d(t, { Zb: () => o, aY: () => l, um: () => c, wu: () => i });
   var r = n(16167),
    s = n(4814),
    a = n(52676);
   const i = (e) => {
     let { background: t, children: n, className: r, ...i } = e;
     return (0, a.jsx)('div', { className: (0, s.Z)('card__illustration', t && 'card__illustration--background', r), ...i, children: n });
    },
    l = (e) => (0, a.jsx)('div', { className: 'card__content', ...e }),
    o = (e) => {
     let { href: t, appearance: n, className: i, component: l = 'div', children: o } = e;
     const c = (e) => ('article' === l ? (0, a.jsx)('article', { ...e }) : 'section' === l ? (0, a.jsx)('section', { ...e }) : (0, a.jsx)('div', { ...e })),
      d = (0, a.jsx)(c, { className: (0, s.Z)('cardgroup__card', `cardgroup__card--${n}`, i), children: o });
     return t ? (0, a.jsx)(r.rU, { href: t, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = (e) => {
     let { appearance: t = 'medium', children: n, className: r } = e;
     return (0, a.jsx)('div', { className: (0, s.Z)('cardgroup', `cardgroup--${t}`, r), children: n });
    };
  },
  23355: (e, t, n) => {
   n.d(t, { y: () => l });
   var r = n(16167),
    s = n(4814),
    a = n(14669),
    i = n(52676);
   const l = (e) => {
    let { state: t } = e;
    const n = (0, a.mA)(t);
    return (0, i.jsx)(r.Ou, { className: (0, s.Z)('estafette-badge', n && `estafette-badge--${n}`), children: t });
   };
  },
  14669: (e, t, n) => {
   n.d(t, { $3: () => r, $e: () => f, BA: () => l, Ee: () => d, Q6: () => a, U: () => p, Yr: () => j, d: () => h, e9: () => i, fO: () => b, mA: () => s, ps: () => u, qU: () => v, s0: () => x, zP: () => g });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
   function o(e) {
    return Array.from(new Set(e));
   }
   const c = (e) => {
     const t = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular'];
     return [...e].sort((e, n) => t.indexOf(e) - t.indexOf(n));
    },
    d = (e) => {
     const t = e
      .flatMap((e) => {
       let { projects: t } = e;
       return t;
      })
      .flatMap((e) => m(e));
     return c(o(t));
    },
    h = (e, t) => p(e).includes(t),
    m = (e) => {
     const t = / URL \(([^)]+)\)/;
     return c(
      o(
       e.tasks
        .filter((e) => {
         let { name: n, value: r } = e;
         return '' !== r && t.test(n);
        })
        .map((e) => {
         let { name: n } = e;
         return t.exec(n)?.[1];
        }),
      ),
     );
    },
    p = (e) => c(o(e.projects.flatMap((e) => m(e)))),
    u = (e) => {
     const t = m(e),
      n = ((e) => {
       const t = e.tasks.find((e) => {
        let { name: t } = e;
        return 'Naam' === t;
       });
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const r = e.tasks
       .filter((e) => {
        let { name: n, value: r } = e;
        return '' !== r && n.includes(t);
       })
       .map((r) => {
        let { name: s, id: a, value: i } = r;
        const l = /^(.+) URL/.exec(s)[1],
         o = 'Storybook' === l ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${l}`;
        return { brand: l.toLowerCase(), name: s, id: a, value: i, description: o };
       });
      return { frameworkName: t, tasks: r };
     });
    },
    g = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    j = (e, t) => t.reduce((e, t) => e?.[t], e);
   function x(e, t) {
    return void 0 === t && (t = []), Object.hasOwn(e, '$type') ? [t] : Object.keys(e).flatMap((n) => ('object' == typeof e[n] && null !== e[n] ? x(e[n], [...t, n]) : []));
   }
   function b(e) {
    const t = new Map();
    function n(e) {
     return t.has(e) || t.set(e, g(e)), t.get(e);
    }
    return e.sort((e, t) => e.length - t.length || n(e).localeCompare(n(t)));
   }
   function v(e) {
    const t = {};
    for (const n of e) {
     let e = t;
     for (const t of n) e[t] || (e[t] = {}), (e = e[t]);
    }
    return t;
   }
  },
 },
]);
