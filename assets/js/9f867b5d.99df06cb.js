'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [12487],
 {
  47605: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => v, contentTitle: () => _, default: () => S, frontMatter: () => b, metadata: () => A, toc: () => k });
   var a = n(52676),
    s = n(40139),
    r = n(87573),
    i = n(73436),
    l = n(65739),
    o = n(41115),
    c = n(16167),
    d = n(75271),
    h = n(14669),
    m = n(35038),
    p = n(57229),
    u = n(4814);
   const g = (e) => {
    let { name: t, relayStep: n, description: s } = e;
    const r = (0, h.mA)(n);
    return (0, a.jsxs)(o.Bc, { children: [(0, a.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, u.Z)('component-illustration', `component-illustration--${r}`), fill: 'none', children: [(0, a.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, a.jsx)('rect', { width: '960', height: '540' }), (0, a.jsx)('rect', { width: '960', height: '540' })] }), (0, a.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, a.jsx)('use', { href: `/svg/componenten_overzicht_${(0, h.mA)(t)}.svg#component-illustration` })] }), (0, a.jsx)(o.QD, { className: 'component-illustration__caption', children: s })] });
   };
   var x = n(23355);
   const j = (e) => {
     let { name: t, description: n, relayStep: s, headingLevel: r = 2, href: i, frameworkNames: l } = e;
     return (0, a.jsxs)(m.Zb, { appearance: 'large', className: (0, u.Z)('component-card', !s && 'component-card--suggestion'), component: 'section', children: [(0, a.jsx)(m.wu, { children: (0, a.jsx)(g, { relayStep: s, description: `Schets van de ${t} component`, name: t }) }), (0, a.jsxs)(m.aY, { children: [(0, a.jsxs)('div', { children: [(0, a.jsx)(c.X6, { level: r, className: 'component-card__title', children: t }), s && (0, a.jsx)('p', { children: (0, a.jsx)(x.y, { state: s }) }), n && (0, a.jsx)(c.nv, { children: n }), l?.length ? (0, a.jsx)(c.k, { children: l.map((e) => (0, a.jsx)(c.Ou, { children: e }, e)) }) : ''] }), i && (0, a.jsx)(c.nv, { children: (0, a.jsxs)(p.r, { className: 'utrecht-link', to: i, children: ['Bekijk ', (0, a.jsx)('span', { className: 'w', children: t }), ' component'] }) })] })] });
    },
    f = () => {
     const e = 'filter',
      t = 'todo',
      n = 'helpWanted',
      s = 'community',
      p = 'candidate',
      u = 'hallOfFame',
      g = 'geenImplementatie',
      f = (0, i.jA)(),
      { location: b, replace: _ } = (0, r.k6)(),
      A = new URLSearchParams(b.search),
      v = (e) =>
       e.title &&
       l.find((t) => {
        let { title: n } = t;
        return n && (0, h.BA)(n) === (0, h.BA)(e.title);
       }),
      k = f.items
       .filter((e) => !!e && 'string' == typeof e.docId)
       .filter((e) => 'componenten/README' !== e.docId)
       .map((e) => ({ ...e, ...(0, i.xz)(e.docId) }))
       .filter(v)
       .map((e) => ({ ...e, ...v(e) })),
      [N, S] = (0, d.useState)(k),
      [w, y] = (0, d.useState)(!A.has(e, t)),
      [D, C] = (0, d.useState)(!A.has(e, n)),
      [T, O] = (0, d.useState)(!A.has(e, s)),
      [M, E] = (0, d.useState)(!A.has(e, p)),
      [L, F] = (0, d.useState)(!A.has(e, u)),
      [z, V] = (0, d.useState)(A.has(e, g));
     (0, d.useEffect)(() => {
      S(() => k.filter((e) => (w && 'UNKNOWN' === e.relayStep) || (D && 'HELP_WANTED' === e.relayStep) || (T && 'COMMUNITY' === e.relayStep) || (M && 'CANDIDATE' === e.relayStep) || (L && 'HALL_OF_FAME' === e.relayStep)).filter((e) => !z || e.projects.filter((e) => !h.e9.includes(e.id)).length > 0)), w ? A.delete(e, t) : A.has(e, t) || A.append(e, t), D ? A.delete(e, n) : A.has(e, n) || A.append(e, n), T ? A.delete(e, s) : A.has(e, s) || A.append(e, s), M ? A.delete(e, p) : A.has(e, p) || A.append(e, p), L ? A.delete(e, u) : A.has(e, u) || A.append(e, u), z ? A.has(e, g) || A.append(e, g) : A.delete(e, g), _({ ...b, search: A.toString() });
     }, [w, D, T, M, L, z]);
     const X = k.filter((e) => e.projects?.filter((e) => !h.e9.includes(e.id)));
     return (0, a.jsxs)(a.Fragment, {
      children: [
       (0, a.jsx)(o.a2, { sections: [{ className: 'utrecht-accordion--nlds-subtle', headingLevel: 2, expanded: A.size > 0, label: (0, a.jsx)('span', { id: 'filter-results-label', children: 'Filter componenten' }), body: (0, a.jsx)(a.Fragment, { children: (0, a.jsxs)(o.pg, { 'aria-describedby': 'filter-results', 'aria-labelledby': 'filter-results-label', children: [(0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: w, id: 'TODO', onChange: () => y((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'TODO', children: (0, a.jsx)(x.y, { state: 'Todo' }) })] }), (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: D, id: 'HELP_WANTED', onChange: () => C((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'HELP_WANTED', children: (0, a.jsx)(x.y, { state: 'Help Wanted' }) })] }), (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: T, id: 'COMMUNITY', onChange: () => O((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'COMMUNITY', children: (0, a.jsx)(x.y, { state: 'Community' }) })] }), (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: M, id: 'CANDIDATE', onChange: () => E((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'CANDIDATE', children: (0, a.jsx)(x.y, { state: 'Candidate' }) })] }), (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: L, id: 'HALL_OF_FAME', onChange: () => F((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'HALL_OF_FAME', children: (0, a.jsx)(x.y, { state: 'Hall of Fame' }) })] }), (0, a.jsxs)(o.nv, { style: { '--utrecht-paragraph-margin-block-end': '1rem' }, children: [(0, a.jsx)('b', { children: 'Tip' }), ': Zien welke componenten je nu al kunt gebruiken? Kies dan onderstaande optie om alleen beschikbare componenten te tonen.'] }), !!X.length && (0, a.jsx)(a.Fragment, { children: (0, a.jsxs)(c.Wi, { type: 'checkbox', className: 'utrecht-form-field--nlds-switch', children: [(0, a.jsx)(o.NI, { defaultChecked: z, id: 'ONLY_IMPLEMENTED', onChange: () => V((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'ONLY_IMPLEMENTED', children: 'Toon alleen beschikbare componenten' })] }) })] }) }) }] }),
       (0, a.jsxs)(o.nv, { role: 'status', id: 'filter-results', children: [N.length, ' van ', k.length, ' componenten zichtbaar'] }),
       0 === N.length &&
        (0, a.jsx)(o.nv, {
         children: (0, a.jsx)(o.Ll, {
          onClick: () => {
           window.location.search = '';
          },
          children: 'Toon alle componenten',
         }),
        }),
       (0, a.jsx)(m.um, {
        appearance: 'large',
        children: N.map((e) => {
         let { title: t, id: n, href: s, description: r } = e;
         const i = l.find((e) => e.title === t),
          o = i && h.$3[i.relayStep],
          c = (0, h.U)(i);
         return (0, a.jsx)(j, { name: t, headingLevel: 2, href: s, description: r, relayStep: o, frameworkNames: c }, n);
        }),
       }),
      ],
     });
    },
    b = { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] },
    _ = 'Componenten',
    A = { id: 'componenten/README', title: 'Componenten Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', source: '@site/docs/componenten/README.mdx', sourceDirName: 'componenten', slug: '/componenten/', permalink: '/componenten/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/README.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] }, sidebar: 'componenten', next: { title: 'Accordion', permalink: '/accordion' } },
    v = {},
    k = [];
   function N(e) {
    const t = { a: 'a', h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: 'componenten', children: 'Componenten' }), '\n', (0, a.jsxs)(t.p, { children: ['De componenten van NL Design System worden met een ', (0, a.jsx)(t.a, { href: '/handboek/estafettemodel', children: 'estafette aanpak' }), ' gemaakt en kunnen dus verschillende statussen hebben.'] }), '\n', (0, a.jsx)(f, { headingLevel: 2 })] });
   }
   function S(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(N, { ...e }) }) : N(e);
   }
  },
  35038: (e, t, n) => {
   n.d(t, { Zb: () => o, aY: () => l, um: () => c, wu: () => i });
   var a = n(16167),
    s = n(4814),
    r = n(52676);
   const i = (e) => {
     let { background: t, children: n, className: a, ...i } = e;
     return (0, r.jsx)('div', { className: (0, s.Z)('card__illustration', t && 'card__illustration--background', a), ...i, children: n });
    },
    l = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    o = (e) => {
     let { href: t, appearance: n, className: i, component: l = 'div', children: o } = e;
     const c = (e) => ('article' === l ? (0, r.jsx)('article', { ...e }) : 'section' === l ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      d = (0, r.jsx)(c, { className: (0, s.Z)('cardgroup__card', `cardgroup__card--${n}`, i), children: o });
     return t ? (0, r.jsx)(a.rU, { href: t, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = (e) => {
     let { appearance: t = 'medium', children: n, className: a } = e;
     return (0, r.jsx)('div', { className: (0, s.Z)('cardgroup', `cardgroup--${t}`, a), children: n });
    };
  },
  23355: (e, t, n) => {
   n.d(t, { y: () => l });
   var a = n(16167),
    s = n(4814),
    r = n(14669),
    i = n(52676);
   const l = (e) => {
    let { state: t } = e;
    const n = (0, r.mA)(t);
    return (0, i.jsx)(a.Ou, { className: (0, s.Z)('estafette-badge', n && `estafette-badge--${n}`), children: t });
   };
  },
  14669: (e, t, n) => {
   n.d(t, { $3: () => a, BA: () => l, Q6: () => r, U: () => c, e9: () => i, mA: () => s, ps: () => d });
   const a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    o = (e) => {
     const t = / URL \((\w+)\)/,
      n = ['CSS', 'HTML', 'React', 'Vue', 'Angular'];
     return Array.from(
      new Set(
       e.tasks
        .filter((e) => {
         let { name: n, value: a } = e;
         return '' !== a && t.test(n);
        })
        .map((e) => {
         let { name: n } = e;
         return n.match(t)?.[1];
        })
        .sort((e, t) => n.indexOf(e) - n.indexOf(t)),
      ),
     );
    },
    c = (e) => Array.from(new Set(e.projects.flatMap((e) => o(e)))),
    d = (e) => {
     const t = o(e),
      n = ((e) => {
       const t = e.tasks.find((e) => {
        let { name: t } = e;
        return 'Naam' === t;
       });
       return t?.value || '';
      })(e);
     return t.map((t) => {
      const a = e.tasks
       .filter((e) => {
        let { name: n, value: a } = e;
        return '' !== a && n.includes(t);
       })
       .map((a) => {
        let { name: s, id: r, value: i } = a;
        const l = s.match(/^(.+) URL/)[1],
         o = 'Storybook' === l ? `${n} (${t}) in Storybook van ${e.title}` : `${n} (${t}) op ${l}`;
        return { brand: l.toLowerCase(), name: s, id: r, value: i, description: o };
       });
      return { frameworkName: t, tasks: a };
     });
    };
  },
 },
]);
