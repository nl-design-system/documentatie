'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [12487],
 {
  47605: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => v, contentTitle: () => _, default: () => S, frontMatter: () => b, metadata: () => A, toc: () => N });
   var s = n(52676),
    a = n(40139),
    r = n(87573),
    i = n(73436),
    l = n(32818),
    o = n(41115),
    c = n(16167),
    d = n(75271),
    h = n(14669),
    m = n(35038),
    p = n(57229),
    g = n(4814);
   const x = (e) => {
    let { name: t, relayStep: n, description: a } = e;
    const r = (0, h.mA)(n);
    return (0, s.jsxs)(o.Bc, { children: [(0, s.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, g.Z)('component-illustration', `component-illustration--${r}`), fill: 'none', children: [(0, s.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, s.jsx)('rect', { width: '960', height: '540' }), (0, s.jsx)('rect', { width: '960', height: '540' })] }), (0, s.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, s.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, s.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, s.jsx)('use', { href: `/svg/componenten_overzicht_${(0, h.mA)(t)}.svg#component-illustration` })] }), (0, s.jsx)(o.QD, { className: 'component-illustration__caption', children: a })] });
   };
   var u = n(23355);
   const j = (e) => {
     let { name: t, description: n, relayStep: a, headingLevel: r = 2, href: i } = e;
     return (0, s.jsxs)(m.Zb, { appearance: 'large', className: (0, g.Z)('component-card', !a && 'component-card--suggestion'), component: 'section', children: [(0, s.jsx)(m.wu, { children: (0, s.jsx)(x, { relayStep: a, description: `Schets van de ${t} component`, name: t }) }), (0, s.jsxs)(m.aY, { children: [(0, s.jsxs)('div', { children: [(0, s.jsx)(c.X6, { level: r, className: 'component-card__title', children: t }), a && (0, s.jsx)('p', { children: (0, s.jsx)(u.y, { state: a }) }), n && (0, s.jsx)(c.nv, { children: n })] }), i && (0, s.jsx)(c.nv, { children: (0, s.jsxs)(p.r, { className: 'utrecht-link', to: i, children: ['Bekijk ', (0, s.jsx)('span', { className: 'w', children: t }), ' component'] }) })] })] });
    },
    f = () => {
     const e = 'filter',
      t = 'todo',
      n = 'helpWanted',
      a = 'community',
      p = 'candidate',
      g = 'hallOfFame',
      x = 'geenImplementatie',
      f = (0, i.jA)(),
      { location: b, replace: _ } = (0, r.k6)(),
      A = new URLSearchParams(b.search),
      v = (e) =>
       e.title &&
       l.find((t) => {
        let { title: n } = t;
        return n && (0, h.BA)(n) === (0, h.BA)(e.title);
       }),
      N = f.items
       .filter((e) => !!e && 'string' == typeof e.docId)
       .filter((e) => 'componenten/README' !== e.docId)
       .map((e) => ({ ...e, ...(0, i.xz)(e.docId) }))
       .filter(v)
       .map((e) => ({ ...e, ...v(e) })),
      [k, S] = (0, d.useState)(N),
      [D, w] = (0, d.useState)(!A.has(e, t)),
      [y, T] = (0, d.useState)(!A.has(e, n)),
      [C, E] = (0, d.useState)(!A.has(e, a)),
      [O, M] = (0, d.useState)(!A.has(e, p)),
      [F, L] = (0, d.useState)(!A.has(e, g)),
      [z, X] = (0, d.useState)(A.has(e, x));
     (0, d.useEffect)(() => {
      S(() => N.filter((e) => (D && 'UNKNOWN' === e.relayStep) || (y && 'HELP_WANTED' === e.relayStep) || (C && 'COMMUNITY' === e.relayStep) || (O && 'CANDIDATE' === e.relayStep) || (F && 'HALL_OF_FAME' === e.relayStep)).filter((e) => !z || e.projects.filter((e) => !h.e9.includes(e.id)).length > 0)), D ? A.delete(e, t) : A.has(e, t) || A.append(e, t), y ? A.delete(e, n) : A.has(e, n) || A.append(e, n), C ? A.delete(e, a) : A.has(e, a) || A.append(e, a), O ? A.delete(e, p) : A.has(e, p) || A.append(e, p), F ? A.delete(e, g) : A.has(e, g) || A.append(e, g), z ? A.has(e, x) || A.append(e, x) : A.delete(e, x), _({ ...b, search: A.toString() });
     }, [D, y, C, O, F, z]);
     const V = N.filter((e) => e.projects?.filter((e) => !h.e9.includes(e.id)));
     return (0, s.jsxs)(s.Fragment, {
      children: [
       (0, s.jsx)(o.a2, { sections: [{ className: 'utrecht-accordion--nlds-subtle', headingLevel: 2, expanded: A.size > 0, label: (0, s.jsx)('span', { id: 'filter-results-label', children: 'Filter componenten' }), body: (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)(o.pg, { 'aria-describedby': 'filter-results', 'aria-labelledby': 'filter-results-label', children: [(0, s.jsxs)(c.Wi, { type: 'checkbox', children: [(0, s.jsx)(c.XZ, { defaultChecked: D, id: 'TODO', onChange: () => w((e) => !e) }), (0, s.jsx)(c.lX, { htmlFor: 'TODO', children: (0, s.jsx)(u.y, { state: 'Todo' }) })] }), (0, s.jsxs)(c.Wi, { type: 'checkbox', children: [(0, s.jsx)(c.XZ, { defaultChecked: y, id: 'HELP_WANTED', onChange: () => T((e) => !e) }), (0, s.jsx)(c.lX, { htmlFor: 'HELP_WANTED', children: (0, s.jsx)(u.y, { state: 'Help Wanted' }) })] }), (0, s.jsxs)(c.Wi, { type: 'checkbox', children: [(0, s.jsx)(c.XZ, { defaultChecked: C, id: 'COMMUNITY', onChange: () => E((e) => !e) }), (0, s.jsx)(c.lX, { htmlFor: 'COMMUNITY', children: (0, s.jsx)(u.y, { state: 'Community' }) })] }), (0, s.jsxs)(c.Wi, { type: 'checkbox', children: [(0, s.jsx)(c.XZ, { defaultChecked: O, id: 'CANDIDATE', onChange: () => M((e) => !e) }), (0, s.jsx)(c.lX, { htmlFor: 'CANDIDATE', children: (0, s.jsx)(u.y, { state: 'Candidate' }) })] }), (0, s.jsxs)(c.Wi, { type: 'checkbox', children: [(0, s.jsx)(c.XZ, { defaultChecked: F, id: 'HALL_OF_FAME', onChange: () => L((e) => !e) }), (0, s.jsx)(c.lX, { htmlFor: 'HALL_OF_FAME', children: (0, s.jsx)(u.y, { state: 'Hall of Fame' }) })] }), (0, s.jsxs)(o.nv, { style: { '--utrecht-paragraph-margin-block-end': '1rem' }, children: [(0, s.jsx)('b', { children: 'Tip' }), ': Zien welke componenten je nu al kunt gebruiken? Kies dan onderstaande optie om alleen beschikbare componenten te tonen.'] }), !!V.length && (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)(c.Wi, { type: 'checkbox', className: 'utrecht-form-field--nlds-switch', children: [(0, s.jsx)(o.NI, { defaultChecked: z, id: 'ONLY_IMPLEMENTED', onChange: () => X((e) => !e) }), (0, s.jsx)(c.lX, { htmlFor: 'ONLY_IMPLEMENTED', children: 'Toon alleen beschikbare componenten' })] }) })] }) }) }] }),
       (0, s.jsxs)(o.nv, { role: 'status', id: 'filter-results', children: [k.length, ' van ', N.length, ' componenten zichtbaar'] }),
       0 === k.length &&
        (0, s.jsx)(o.nv, {
         children: (0, s.jsx)(o.Ll, {
          onClick: () => {
           window.location.search = '';
          },
          children: 'Toon alle componenten',
         }),
        }),
       (0, s.jsx)(m.um, {
        appearance: 'large',
        children: k.map((e) => {
         let { title: t, id: n, href: a, description: r } = e;
         const i = l.find((e) => e.title === t),
          o = i && h.$3[i.relayStep];
         return (0, s.jsx)(j, { name: t, headingLevel: 2, href: a, description: r, relayStep: o }, n);
        }),
       }),
      ],
     });
    },
    b = { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] },
    _ = 'Componenten',
    A = { id: 'componenten/README', title: 'Componenten Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', source: '@site/docs/componenten/README.mdx', sourceDirName: 'componenten', slug: '/componenten/', permalink: '/componenten/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/README.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] }, sidebar: 'componenten', next: { title: 'Accordion', permalink: '/accordion' } },
    v = {},
    N = [];
   function k(e) {
    const t = { a: 'a', h1: 'h1', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(t.h1, { id: 'componenten', children: 'Componenten' }), '\n', (0, s.jsxs)(t.p, { children: ['De componenten van NL Design System worden met een ', (0, s.jsx)(t.a, { href: '/handboek/estafettemodel', children: 'estafette aanpak' }), ' gemaakt en kunnen dus verschillende statussen hebben.'] }), '\n', (0, s.jsx)(f, { headingLevel: 2 })] });
   }
   function S(e = {}) {
    const { wrapper: t } = { ...(0, a.a)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(k, { ...e }) }) : k(e);
   }
  },
  35038: (e, t, n) => {
   n.d(t, { Zb: () => o, aY: () => l, um: () => c, wu: () => i });
   var s = n(16167),
    a = n(4814),
    r = n(52676);
   const i = (e) => {
     let { background: t, children: n, className: s, ...i } = e;
     return (0, r.jsx)('div', { className: (0, a.Z)('card__illustration', t && 'card__illustration--background', s), ...i, children: n });
    },
    l = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    o = (e) => {
     let { href: t, appearance: n, className: i, component: l = 'div', children: o } = e;
     const c = (e) => ('article' === l ? (0, r.jsx)('article', { ...e }) : 'section' === l ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      d = (0, r.jsx)(c, { className: (0, a.Z)('cardgroup__card', `cardgroup__card--${n}`, i), children: o });
     return t ? (0, r.jsx)(s.rU, { href: t, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = (e) => {
     let { appearance: t = 'medium', children: n, className: s } = e;
     return (0, r.jsx)('div', { className: (0, a.Z)('cardgroup', `cardgroup--${t}`, s), children: n });
    };
  },
  23355: (e, t, n) => {
   n.d(t, { y: () => l });
   var s = n(16167),
    a = n(4814),
    r = n(14669),
    i = n(52676);
   const l = (e) => {
    let { state: t } = e;
    const n = (0, r.mA)(t);
    return (0, i.jsx)(s.Ou, { className: (0, a.Z)('estafette-badge', n && `estafette-badge--${n}`), children: t });
   };
  },
  14669: (e, t, n) => {
   n.d(t, { $3: () => s, BA: () => l, Q6: () => r, e9: () => i, mA: () => a });
   const s = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    a = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    i = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
  },
 },
]);
