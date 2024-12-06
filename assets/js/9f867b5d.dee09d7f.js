'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [12487],
 {
  64730: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => N, contentTitle: () => A, default: () => k, frontMatter: () => _, metadata: () => b, toc: () => v });
   var a = n(52676),
    s = n(87118),
    r = n(58610),
    l = n(13894),
    i = n(81862),
    o = n(95674),
    c = n(31916),
    d = n(75271),
    h = n(35038),
    m = n(57229),
    p = n(4814),
    g = n(14669);
   const u = (e) => {
    let { name: t, relayStep: n, description: s } = e;
    const r = (0, g.mA)(n);
    return (0, a.jsxs)(o.Bc, { children: [(0, a.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, p.Z)('component-illustration', `component-illustration--${r}`), fill: 'none', children: [(0, a.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, a.jsx)('rect', { width: '960', height: '540' }), (0, a.jsx)('rect', { width: '960', height: '540' })] }), (0, a.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, a.jsx)('use', { href: `/svg/componenten_overzicht_${(0, g.mA)(t)}.svg#component-illustration` })] }), (0, a.jsx)(o.QD, { className: 'component-illustration__caption', children: s })] });
   };
   var x = n(23355);
   const j = (e) => {
     let { name: t, description: n, relayStep: s, headingLevel: r = 2, href: l } = e;
     return (0, a.jsxs)(h.Zb, { appearance: 'large', className: (0, p.Z)('component-card', !s && 'component-card--suggestion'), component: 'section', children: [(0, a.jsx)(h.wu, { children: (0, a.jsx)(u, { relayStep: s, description: `Schets van de ${t} component`, name: t }) }), (0, a.jsxs)(h.aY, { children: [(0, a.jsxs)('div', { children: [(0, a.jsx)(c.X6, { level: r, className: 'component-card__title', children: t }), s && (0, a.jsx)('p', { children: (0, a.jsx)(x.y, { state: s }) }), n && (0, a.jsx)(c.nv, { children: n })] }), l && (0, a.jsx)(c.nv, { children: (0, a.jsxs)(m.r, { className: 'utrecht-link', to: l, children: ['Bekijk ', (0, a.jsx)('span', { className: 'w', children: t }), ' component'] }) })] })] });
    },
    f = () => {
     const e = 'filter',
      t = 'todo',
      n = 'helpWanted',
      s = 'community',
      m = 'candidate',
      p = 'hallOfFame',
      u = 'geenImplementatie',
      f = (0, l.jA)(),
      { location: _, push: A } = (0, r.k6)(),
      b = new URLSearchParams(_.search),
      N = (e) =>
       e.title &&
       i.find((t) => {
        let { title: n } = t;
        return n && (0, g.BA)(n) === (0, g.BA)(e.title);
       }),
      v = f.items
       .filter((e) => !!e && 'string' == typeof e.docId)
       .filter((e) => 'componenten/README' !== e.docId)
       .map((e) => ({ ...e, ...(0, l.xz)(e.docId) }))
       .filter(N)
       .map((e) => ({ ...e, ...N(e) })),
      [S, k] = (0, d.useState)(v),
      [D, y] = (0, d.useState)(!b.has(e, t)),
      [T, C] = (0, d.useState)(!b.has(e, n)),
      [w, E] = (0, d.useState)(!b.has(e, s)),
      [O, M] = (0, d.useState)(!b.has(e, m)),
      [F, L] = (0, d.useState)(!b.has(e, p)),
      [z, X] = (0, d.useState)(b.has(e, u));
     (0, d.useEffect)(() => {
      k(() => v.filter((e) => (D && 'UNKNOWN' === e.relayStep) || (T && 'HELP_WANTED' === e.relayStep) || (w && 'COMMUNITY' === e.relayStep) || (O && 'CANDIDATE' === e.relayStep) || (F && 'HALL_OF_FAME' === e.relayStep)).filter((e) => !z || e.projects.filter((e) => !g.e9.includes(e.id)).length > 0)), D ? b.delete(e, t) : b.has(e, t) || b.append(e, t), T ? b.delete(e, n) : b.has(e, n) || b.append(e, n), w ? b.delete(e, s) : b.has(e, s) || b.append(e, s), O ? b.delete(e, m) : b.has(e, m) || b.append(e, m), F ? b.delete(e, p) : b.has(e, p) || b.append(e, p), z ? b.has(e, u) || b.append(e, u) : b.delete(e, u), A({ ..._, search: b.toString() });
     }, [D, T, w, O, F, z]);
     const I = v.filter((e) => 'UNKNOWN' === e.relayStep),
      P = v.filter((e) => 'HELP_WANTED' === e.relayStep),
      V = v.filter((e) => 'COMMUNITY' === e.relayStep),
      B = v.filter((e) => 'CANDIDATE' === e.relayStep),
      W = v.filter((e) => 'HALL_OF_FAME' === e.relayStep),
      H = v.filter((e) => e.projects?.filter((e) => !g.e9.includes(e.id)));
     return (0, a.jsxs)(a.Fragment, {
      children: [
       (0, a.jsx)(o.a2, { sections: [{ className: 'utrecht-accordion--nlds-subtle', headingLevel: 2, expanded: !1, label: (0, a.jsx)('span', { id: 'filter-results-label', children: 'Filter componenten' }), body: (0, a.jsx)(a.Fragment, { children: (0, a.jsxs)(o.pg, { 'aria-describedby': 'filter-results', 'aria-labelledby': 'filter-results-label', children: [!!I.length && (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: D, id: 'TODO', onChange: () => y((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'TODO', children: (0, a.jsx)(x.y, { state: 'Todo' }) })] }), !!P.length && (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: T, id: 'HELP_WANTED', onChange: () => C((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'HELP_WANTED', children: (0, a.jsx)(x.y, { state: 'Help Wanted' }) })] }), !!V.length && (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: w, id: 'COMMUNITY', onChange: () => E((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'COMMUNITY', children: (0, a.jsx)(x.y, { state: 'Community' }) })] }), !!B.length && (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: O, id: 'CANDIDATE', onChange: () => M((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'CANDIDATE', children: (0, a.jsx)(x.y, { state: 'Candidate' }) })] }), !!W.length && (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: F, id: 'HALL_OF_FAME', onChange: () => L((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'HALL_OF_FAME', children: (0, a.jsx)(x.y, { state: 'Hall of Fame' }) })] }), (0, a.jsxs)(o.nv, { style: { '--utrecht-paragraph-margin-block-end': '1rem' }, children: [(0, a.jsx)('b', { children: 'Tip' }), ': Zien welke componenten je nu al kunt gebruiken? Kies dan onderstaande optie om alleen beschikbare componenten te tonen.'] }), !!H.length && (0, a.jsx)(a.Fragment, { children: (0, a.jsxs)(c.Wi, { type: 'checkbox', className: 'utrecht-form-field--nlds-switch', children: [(0, a.jsx)(o.NI, { defaultChecked: z, id: 'ONLY_IMPLEMENTED', onChange: () => X((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'ONLY_IMPLEMENTED', children: 'Toon alleen beschikbare componenten' })] }) })] }) }) }] }),
       (0, a.jsxs)(o.nv, { role: 'status', id: 'filter-results', children: [S.length, ' van ', v.length, ' componenten zichtbaar'] }),
       (0, a.jsx)(h.um, {
        appearance: 'large',
        children: S.map((e) => {
         let { title: t, id: n, href: s, description: r } = e;
         const l = i.find((e) => e.title === t),
          o = l && g.$3[l.relayStep];
         return (0, a.jsx)(j, { name: t, headingLevel: 2, href: s, description: r, relayStep: o }, n);
        }),
       }),
      ],
     });
    },
    _ = { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] },
    A = 'Componenten',
    b = { id: 'componenten/README', title: 'Componenten Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', source: '@site/docs/componenten/README.mdx', sourceDirName: 'componenten', slug: '/componenten/', permalink: '/componenten/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/README.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] }, sidebar: 'componenten', next: { title: 'Accordion', permalink: '/accordion' } },
    N = {},
    v = [];
   function S(e) {
    const t = { a: 'a', h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: 'componenten', children: 'Componenten' }), '\n', (0, a.jsxs)(t.p, { children: ['De componenten van NL Design System worden met een ', (0, a.jsx)(t.a, { href: '/handboek/estafettemodel', children: 'estafette aanpak' }), ' gemaakt en kunnen dus verschillende statussen hebben.'] }), '\n', (0, a.jsx)(f, { headingLevel: 2 })] });
   }
   function k(e = {}) {
    const { wrapper: t } = { ...(0, s.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(S, { ...e }) }) : S(e);
   }
  },
  35038: (e, t, n) => {
   n.d(t, { Zb: () => o, aY: () => i, um: () => c, wu: () => l });
   var a = n(31916),
    s = n(4814),
    r = n(52676);
   const l = (e) => {
     let { background: t, children: n, className: a, ...l } = e;
     return (0, r.jsx)('div', { className: (0, s.Z)('card__illustration', t && 'card__illustration--background', a), ...l, children: n });
    },
    i = (e) => (0, r.jsx)('div', { className: 'card__content', ...e }),
    o = (e) => {
     let { href: t, appearance: n, className: l, component: i = 'div', children: o } = e;
     const c = (e) => ('article' === i ? (0, r.jsx)('article', { ...e }) : 'section' === i ? (0, r.jsx)('section', { ...e }) : (0, r.jsx)('div', { ...e })),
      d = (0, r.jsx)(c, { className: (0, s.Z)('cardgroup__card', `cardgroup__card--${n}`, l), children: o });
     return t ? (0, r.jsx)(a.rU, { href: t, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    c = (e) => {
     let { appearance: t = 'medium', children: n, className: a } = e;
     return (0, r.jsx)('div', { className: (0, s.Z)('cardgroup', `cardgroup--${t}`, a), children: n });
    };
  },
  23355: (e, t, n) => {
   n.d(t, { y: () => i });
   var a = n(31916),
    s = n(4814),
    r = n(14669),
    l = n(52676);
   const i = (e) => {
    let { state: t } = e;
    const n = (0, r.mA)(t);
    return (0, l.jsx)(a.Ou, { className: (0, s.Z)('estafette-badge', n && `estafette-badge--${n}`), children: t });
   };
  },
  14669: (e, t, n) => {
   n.d(t, { $3: () => a, BA: () => i, Q6: () => r, e9: () => l, mA: () => s });
   const a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    i = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
  },
 },
]);
