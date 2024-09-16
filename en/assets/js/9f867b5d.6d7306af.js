'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [12487],
 {
  77160: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => S, contentTitle: () => v, default: () => T, frontMatter: () => N, metadata: () => k, toc: () => y });
   var a = n(52676),
    r = n(24785),
    s = n(34221),
    l = n(80719),
    o = n(56150),
    i = n(46506),
    c = n(75271),
    d = n(68963),
    h = n(90441),
    m = n(4814);
   const p = { 'component-card': 'component-card_GLdH', 'component-card--suggestion': 'component-card--suggestion_rK4s', 'component-name': 'component-name_lPld' },
    g = { 'component-illustration': 'component-illustration_oeua', 'component-illustration--help-wanted': 'component-illustration--help-wanted_AOKS', 'component-illustration--community': 'component-illustration--community_KaPY', 'component-illustration--candidate': 'component-illustration--candidate_knM2', 'component-illustration--hall-of-fame': 'component-illustration--hall-of-fame_thoe', 'component-illustration__caption': 'component-illustration__caption_be_1' };
   var u = n(14669);
   const _ = (e) => {
    let { name: t, relayStep: n, description: r } = e;
    const s = (0, u.mA)(n);
    return (0, a.jsxs)(o.Bc, { children: [(0, a.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, m.Z)(g['component-illustration'], g[`component-illustration--${s}`]), fill: 'none', children: [(0, a.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, a.jsx)('rect', { width: '960', height: '540' }), (0, a.jsx)('rect', { width: '960', height: '540' })] }), (0, a.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, a.jsx)('use', { href: `/svg/componenten_overzicht_${(0, u.mA)(t)}.svg#component-illustration` })] }), (0, a.jsx)(o.QD, { className: g['component-illustration__caption'], children: r })] });
   };
   var x = n(86964);
   const j = (e) => {
     let { name: t, description: n, relayStep: r, headingLevel: s = 2, href: l } = e;
     return (0, a.jsxs)(d.Zb, { appearance: 'large', className: (0, m.Z)(p['component-card'], !r && p['component-card--suggestion']), component: 'section', children: [(0, a.jsx)(d.wu, { children: (0, a.jsx)(_, { relayStep: r, description: `Schets van de ${t} component`, name: t }) }), (0, a.jsxs)(d.aY, { children: [(0, a.jsxs)('div', { children: [(0, a.jsx)(i.X6, { level: s, className: (0, m.Z)(p['component-card__title']), children: t }), r && (0, a.jsx)('p', { children: (0, a.jsx)(x.y, { state: r }) }), n && (0, a.jsx)(i.nv, { children: n })] }), l && (0, a.jsx)(i.nv, { children: (0, a.jsxs)(h.Z, { className: 'utrecht-link', to: l, children: ['Bekijk ', (0, a.jsx)('span', { className: (0, m.Z)(p.w), children: t }), ' component'] }) })] })] });
    },
    f = 'utrecht-accordion--nlds-subtle_d413',
    b = 'utrecht-form-field--nlds-switch_p5bU',
    A = () => {
     const e = (0, s.jA)(),
      t = (e) =>
       e.title &&
       l.find((t) => {
        let { title: n } = t;
        return n && (0, u.BA)(n) === (0, u.BA)(e.title);
       }),
      n = e.items
       .filter((e) => 'componenten/README' !== e.docId)
       .map((e) => ({ ...e, ...(0, s.xz)(e.docId) }))
       .filter(t)
       .map((e) => ({ ...e, ...t(e) })),
      [r, h] = (0, c.useState)(n),
      [m, p] = (0, c.useState)(!0),
      [g, _] = (0, c.useState)(!0),
      [A, N] = (0, c.useState)(!0),
      [v, k] = (0, c.useState)(!0),
      [S, y] = (0, c.useState)(!0),
      [D, T] = (0, c.useState)(!1);
     (0, c.useEffect)(() => {
      h(() => n.filter((e) => (m && 'UNKNOWN' === e.relayStep) || (g && 'HELP_WANTED' === e.relayStep) || (A && 'COMMUNITY' === e.relayStep) || (v && 'CANDIDATE' === e.relayStep) || (S && 'HALL_OF_FAME' === e.relayStep)).filter((e) => !D || e.projects.filter((e) => !u.e9.includes(e.id)).length > 0));
     }, [m, g, A, v, S, D]);
     const w = n.filter((e) => 'UNKNOWN' === e.relayStep),
      C = n.filter((e) => 'HELP_WANTED' === e.relayStep),
      E = n.filter((e) => 'COMMUNITY' === e.relayStep),
      M = n.filter((e) => 'CANDIDATE' === e.relayStep),
      O = n.filter((e) => 'HALL_OF_FAME' === e.relayStep),
      F = n.filter((e) => e.projects?.filter((e) => !u.e9.includes(e.id)));
     return (0, a.jsxs)(a.Fragment, {
      children: [
       (0, a.jsx)(o.a2, { sections: [{ className: f, headingLevel: 2, expanded: !1, label: (0, a.jsx)('span', { id: 'filter-results-label', children: 'Filter componenten' }), body: (0, a.jsx)(a.Fragment, { children: (0, a.jsxs)(o.pg, { 'aria-describedby': 'filter-results', 'aria-labelledby': 'filter-results-label', children: [!!w.length && (0, a.jsxs)(i.Wi, { type: 'checkbox', children: [(0, a.jsx)(i.XZ, { defaultChecked: m, id: 'TODO', onChange: () => p((e) => !e) }), (0, a.jsx)(i.lX, { htmlFor: 'TODO', children: (0, a.jsx)(x.y, { state: 'Todo' }) })] }), !!C.length && (0, a.jsxs)(i.Wi, { type: 'checkbox', children: [(0, a.jsx)(i.XZ, { defaultChecked: g, id: 'HELP_WANTED', onChange: () => _((e) => !e) }), (0, a.jsx)(i.lX, { htmlFor: 'HELP_WANTED', children: (0, a.jsx)(x.y, { state: 'Help Wanted' }) })] }), !!E.length && (0, a.jsxs)(i.Wi, { type: 'checkbox', children: [(0, a.jsx)(i.XZ, { defaultChecked: A, id: 'COMMUNITY', onChange: () => N((e) => !e) }), (0, a.jsx)(i.lX, { htmlFor: 'COMMUNITY', children: (0, a.jsx)(x.y, { state: 'Community' }) })] }), !!M.length && (0, a.jsxs)(i.Wi, { type: 'checkbox', children: [(0, a.jsx)(i.XZ, { defaultChecked: v, id: 'CANDIDATE', onChange: () => k((e) => !e) }), (0, a.jsx)(i.lX, { htmlFor: 'CANDIDATE', children: (0, a.jsx)(x.y, { state: 'Candidate' }) })] }), !!O.length && (0, a.jsxs)(i.Wi, { type: 'checkbox', children: [(0, a.jsx)(i.XZ, { defaultChecked: S, id: 'HALL_OF_FAME', onChange: () => y((e) => !e) }), (0, a.jsx)(i.lX, { htmlFor: 'HALL_OF_FAME', children: (0, a.jsx)(x.y, { state: 'Hall of Fame' }) })] }), (0, a.jsxs)(o.nv, { style: { '--utrecht-paragraph-margin-block-end': '1rem' }, children: [(0, a.jsx)('b', { children: 'Tip' }), ': Zien welke componenten je nu al kunt gebruiken? Kies dan onderstaande optie om alleen beschikbare componenten te tonen.'] }), !!F.length && (0, a.jsx)(a.Fragment, { children: (0, a.jsxs)(i.Wi, { type: 'checkbox', className: b, children: [(0, a.jsx)(o.NI, { defaultChecked: D, id: 'IMPLEMENTED', onChange: () => T((e) => !e) }), (0, a.jsx)(i.lX, { htmlFor: 'IMPLEMENTED', children: 'Toon alleen beschikbare componenten' })] }) })] }) }) }] }),
       (0, a.jsxs)(o.nv, { role: 'status', id: 'filter-results', children: [r.length, ' van ', n.length, ' componenten zichtbaar'] }),
       (0, a.jsx)(d.um, {
        appearance: 'large',
        children: r.map((e) => {
         let { title: t, id: n, href: r, customProps: s, description: o } = e;
         const i = l.find((e) => e.title === t),
          c = i && u.$3[i.relayStep];
         return (0, a.jsx)(j, { illustration: s?.illustration, name: t, headingLevel: 2, href: r, description: o, relayStep: c }, n);
        }),
       }),
      ],
     });
    },
    N = { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] },
    v = 'Componenten',
    k = { id: 'componenten/README', title: 'Componenten Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', source: '@site/docs/componenten/README.mdx', sourceDirName: 'componenten', slug: '/componenten/', permalink: '/en/componenten/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/README.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] }, sidebar: 'componenten', next: { title: 'Accordion', permalink: '/en/accordion' } },
    S = {},
    y = [];
   function D(e) {
    const t = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: 'componenten', children: 'Componenten' }), '\n', (0, a.jsxs)(t.p, { children: ['De componenten van NL Design System worden met een ', (0, a.jsx)(t.a, { href: '/handboek/estafettemodel', children: 'estafette aanpak' }), ' gemaakt en kunnen dus verschillende statussen hebben.'] }), '\n', (0, a.jsx)(A, { headingLevel: 2 })] });
   }
   function T(e = {}) {
    const { wrapper: t } = { ...(0, r.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(D, { ...e }) }) : D(e);
   }
  },
  68963: (e, t, n) => {
   n.d(t, { Zb: () => c, aY: () => i, um: () => d, wu: () => o });
   var a = n(46506),
    r = n(4814);
   n(75271);
   const s = { cardgroup: 'cardgroup_0VVt', 'cardgroup--small': 'cardgroup--small_BDzz', 'cardgroup--medium': 'cardgroup--medium_xS6r', 'cardgroup--large': 'cardgroup--large_Tjo8', cardgroup__card: 'cardgroup__card_emnt', 'cardgroup__card--small': 'cardgroup__card--small_bxfC', 'cardgroup__card--large': 'cardgroup__card--large_PGe3', cardgroup__link: 'cardgroup__link_YISR', card__illustration: 'card__illustration_MVXv', 'card__illustration--background': 'card__illustration--background_cTcZ', card__content: 'card__content_LYKG' };
   var l = n(52676);
   const o = (e) => {
     let { background: t, children: n, className: a, ...o } = e;
     return (0, l.jsx)('div', { className: (0, r.Z)(s.card__illustration, t && s['card__illustration--background'], a), ...o, children: n });
    },
    i = (e) => (0, l.jsx)('div', { className: (0, r.Z)(s.card__content), ...e }),
    c = (e) => {
     let { href: t, appearance: n, className: o, component: i = 'div', children: c } = e;
     const d = (e) => ('article' === i ? (0, l.jsx)('article', { ...e }) : 'section' === i ? (0, l.jsx)('section', { ...e }) : (0, l.jsx)('div', { ...e })),
      h = (0, l.jsx)(d, { className: (0, r.Z)(s.cardgroup__card, s[`cardgroup__card--${n}`], o), children: c });
     return t ? (0, l.jsx)(a.rU, { href: t, boxContent: !0, className: s.cardgroup__link, children: h }) : h;
    },
    d = (e) => {
     let { appearance: t = 'medium', children: n, className: a } = e;
     return (0, l.jsx)('div', { className: (0, r.Z)(s.cardgroup, s[`cardgroup--${t}`], a), children: n });
    };
  },
  86964: (e, t, n) => {
   n.d(t, { y: () => i });
   var a = n(46506),
    r = n(4814);
   n(75271);
   const s = { 'estafette-badge': 'estafette-badge_amWR', 'estafette-badge--todo': 'estafette-badge--todo_EYw0', 'estafette-badge--help-wanted': 'estafette-badge--help-wanted_N7qd', 'estafette-badge--community': 'estafette-badge--community_FJTQ', 'estafette-badge--candidate': 'estafette-badge--candidate_Q2O5', 'estafette-badge--hall-of-fame': 'estafette-badge--hall-of-fame_SqQ1' };
   var l = n(14669),
    o = n(52676);
   const i = (e) => {
    let { state: t } = e;
    const n = (0, l.mA)(t);
    return (0, o.jsx)(a.Ou, { className: (0, r.Z)(s['estafette-badge'], n && s[`estafette-badge--${n}`]), children: t });
   };
  },
  14669: (e, t, n) => {
   n.d(t, { $3: () => a, BA: () => o, Q6: () => s, e9: () => l, mA: () => r });
   const a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    r = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    s = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
  },
 },
]);
