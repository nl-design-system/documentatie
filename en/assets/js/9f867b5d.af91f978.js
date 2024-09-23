'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [12487],
 {
  77160: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => y, contentTitle: () => S, default: () => w, frontMatter: () => v, metadata: () => k, toc: () => D });
   var a = n(52676),
    r = n(24785),
    s = n(3225),
    l = n(34221),
    o = n(80719),
    i = n(56150),
    c = n(46506),
    d = n(75271),
    h = n(68963),
    m = n(90441),
    p = n(4814);
   const g = { 'component-card': 'component-card_GLdH', 'component-card--suggestion': 'component-card--suggestion_rK4s', 'component-name': 'component-name_lPld' },
    u = { 'component-illustration': 'component-illustration_oeua', 'component-illustration--help-wanted': 'component-illustration--help-wanted_AOKS', 'component-illustration--community': 'component-illustration--community_KaPY', 'component-illustration--candidate': 'component-illustration--candidate_knM2', 'component-illustration--hall-of-fame': 'component-illustration--hall-of-fame_thoe', 'component-illustration__caption': 'component-illustration__caption_be_1' };
   var _ = n(14669);
   const x = (e) => {
    let { name: t, relayStep: n, description: r } = e;
    const s = (0, _.mA)(n);
    return (0, a.jsxs)(i.Bc, { children: [(0, a.jsxs)('svg', { width: '960', height: '540', viewBox: '0 0 960 540', xmlns: 'http://www.w3.org/2000/svg', className: (0, p.Z)(u['component-illustration'], u[`component-illustration--${s}`]), fill: 'none', children: [(0, a.jsxs)('g', { fill: 'var(--component-illustration-background-color, white)', children: [(0, a.jsx)('rect', { width: '960', height: '540' }), (0, a.jsx)('rect', { width: '960', height: '540' })] }), (0, a.jsxs)('g', { fill: 'var(--component-illustration-grid-color, #eee)', children: [(0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(69)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(151)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(233)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(315)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(397)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(479)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(561)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(643)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(725)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(807)' }), (0, a.jsx)('rect', { width: '2', height: '540', transform: 'translate(889)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 64)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 146)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 228)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 310)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 392)' }), (0, a.jsx)('rect', { width: '960', height: '2', transform: 'translate(0 474)' })] }), (0, a.jsx)('use', { href: `/svg/componenten_overzicht_${(0, _.mA)(t)}.svg#component-illustration` })] }), (0, a.jsx)(i.QD, { className: u['component-illustration__caption'], children: r })] });
   };
   var f = n(86964);
   const j = (e) => {
     let { name: t, description: n, relayStep: r, headingLevel: s = 2, href: l } = e;
     return (0, a.jsxs)(h.Zb, { appearance: 'large', className: (0, p.Z)(g['component-card'], !r && g['component-card--suggestion']), component: 'section', children: [(0, a.jsx)(h.wu, { children: (0, a.jsx)(x, { relayStep: r, description: `Schets van de ${t} component`, name: t }) }), (0, a.jsxs)(h.aY, { children: [(0, a.jsxs)('div', { children: [(0, a.jsx)(c.X6, { level: s, className: (0, p.Z)(g['component-card__title']), children: t }), r && (0, a.jsx)('p', { children: (0, a.jsx)(f.y, { state: r }) }), n && (0, a.jsx)(c.nv, { children: n })] }), l && (0, a.jsx)(c.nv, { children: (0, a.jsxs)(m.Z, { className: 'utrecht-link', to: l, children: ['Bekijk ', (0, a.jsx)('span', { className: (0, p.Z)(g.w), children: t }), ' component'] }) })] })] });
    },
    b = 'utrecht-accordion--nlds-subtle_d413',
    A = 'utrecht-form-field--nlds-switch_p5bU',
    N = () => {
     const e = 'filter',
      t = 'todo',
      n = 'helpWanted',
      r = 'community',
      m = 'candidate',
      p = 'hallOfFame',
      g = 'geenImplementatie',
      u = (0, l.jA)(),
      { location: x, push: N } = (0, s.k6)(),
      v = new URLSearchParams(x.search),
      S = (e) =>
       e.title &&
       o.find((t) => {
        let { title: n } = t;
        return n && (0, _.BA)(n) === (0, _.BA)(e.title);
       }),
      k = u.items
       .filter((e) => 'componenten/README' !== e.docId)
       .map((e) => ({ ...e, ...(0, l.xz)(e.docId) }))
       .filter(S)
       .map((e) => ({ ...e, ...S(e) })),
      [y, D] = (0, d.useState)(k),
      [T, w] = (0, d.useState)(!v.has(e, t)),
      [C, E] = (0, d.useState)(!v.has(e, n)),
      [O, M] = (0, d.useState)(!v.has(e, r)),
      [L, F] = (0, d.useState)(!v.has(e, m)),
      [z, P] = (0, d.useState)(!v.has(e, p)),
      [V, X] = (0, d.useState)(v.has(e, g));
     (0, d.useEffect)(() => {
      D(() => k.filter((e) => (T && 'UNKNOWN' === e.relayStep) || (C && 'HELP_WANTED' === e.relayStep) || (O && 'COMMUNITY' === e.relayStep) || (L && 'CANDIDATE' === e.relayStep) || (z && 'HALL_OF_FAME' === e.relayStep)).filter((e) => !V || e.projects.filter((e) => !_.e9.includes(e.id)).length > 0)), T ? v.delete(e, t) : v.has(e, t) || v.append(e, t), C ? v.delete(e, n) : v.has(e, n) || v.append(e, n), O ? v.delete(e, r) : v.has(e, r) || v.append(e, r), L ? v.delete(e, m) : v.has(e, m) || v.append(e, m), z ? v.delete(e, p) : v.has(e, p) || v.append(e, p), V ? v.has(e, g) || v.append(e, g) : v.delete(e, g), N({ ...x, search: v.toString() });
     }, [T, C, O, L, z, V]);
     const I = k.filter((e) => 'UNKNOWN' === e.relayStep),
      B = k.filter((e) => 'HELP_WANTED' === e.relayStep),
      W = k.filter((e) => 'COMMUNITY' === e.relayStep),
      H = k.filter((e) => 'CANDIDATE' === e.relayStep),
      Z = k.filter((e) => 'HALL_OF_FAME' === e.relayStep),
      U = k.filter((e) => e.projects?.filter((e) => !_.e9.includes(e.id)));
     return (0, a.jsxs)(a.Fragment, {
      children: [
       (0, a.jsx)(i.a2, { sections: [{ className: b, headingLevel: 2, expanded: !1, label: (0, a.jsx)('span', { id: 'filter-results-label', children: 'Filter componenten' }), body: (0, a.jsx)(a.Fragment, { children: (0, a.jsxs)(i.pg, { 'aria-describedby': 'filter-results', 'aria-labelledby': 'filter-results-label', children: [!!I.length && (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: T, id: 'TODO', onChange: () => w((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'TODO', children: (0, a.jsx)(f.y, { state: 'Todo' }) })] }), !!B.length && (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: C, id: 'HELP_WANTED', onChange: () => E((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'HELP_WANTED', children: (0, a.jsx)(f.y, { state: 'Help Wanted' }) })] }), !!W.length && (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: O, id: 'COMMUNITY', onChange: () => M((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'COMMUNITY', children: (0, a.jsx)(f.y, { state: 'Community' }) })] }), !!H.length && (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: L, id: 'CANDIDATE', onChange: () => F((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'CANDIDATE', children: (0, a.jsx)(f.y, { state: 'Candidate' }) })] }), !!Z.length && (0, a.jsxs)(c.Wi, { type: 'checkbox', children: [(0, a.jsx)(c.XZ, { defaultChecked: z, id: 'HALL_OF_FAME', onChange: () => P((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'HALL_OF_FAME', children: (0, a.jsx)(f.y, { state: 'Hall of Fame' }) })] }), (0, a.jsxs)(i.nv, { style: { '--utrecht-paragraph-margin-block-end': '1rem' }, children: [(0, a.jsx)('b', { children: 'Tip' }), ': Zien welke componenten je nu al kunt gebruiken? Kies dan onderstaande optie om alleen beschikbare componenten te tonen.'] }), !!U.length && (0, a.jsx)(a.Fragment, { children: (0, a.jsxs)(c.Wi, { type: 'checkbox', className: A, children: [(0, a.jsx)(i.NI, { defaultChecked: V, id: 'ONLY_IMPLEMENTED', onChange: () => X((e) => !e) }), (0, a.jsx)(c.lX, { htmlFor: 'ONLY_IMPLEMENTED', children: 'Toon alleen beschikbare componenten' })] }) })] }) }) }] }),
       (0, a.jsxs)(i.nv, { role: 'status', id: 'filter-results', children: [y.length, ' van ', k.length, ' componenten zichtbaar'] }),
       (0, a.jsx)(h.um, {
        appearance: 'large',
        children: y.map((e) => {
         let { title: t, id: n, href: r, customProps: s, description: l } = e;
         const i = o.find((e) => e.title === t),
          c = i && _.$3[i.relayStep];
         return (0, a.jsx)(j, { illustration: s?.illustration, name: t, headingLevel: 2, href: r, description: l, relayStep: c }, n);
        }),
       }),
      ],
     });
    },
    v = { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] },
    S = 'Componenten',
    k = { id: 'componenten/README', title: 'Componenten Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', source: '@site/docs/componenten/README.mdx', sourceDirName: 'componenten', slug: '/componenten/', permalink: '/en/componenten/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/README.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Componenten Overzicht', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Overzicht', sidebar_position: 1, pagination_label: 'Overzicht', description: 'Een overzicht van alle gedocumenteerde componenten uit NL Design System', keywords: ['componenten', 'design system', 'overzicht', 'utrecht', 'den haag'] }, sidebar: 'componenten', next: { title: 'Accordion', permalink: '/en/accordion' } },
    y = {},
    D = [];
   function T(e) {
    const t = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.h1, { id: 'componenten', children: 'Componenten' }), '\n', (0, a.jsxs)(t.p, { children: ['De componenten van NL Design System worden met een ', (0, a.jsx)(t.a, { href: '/handboek/estafettemodel', children: 'estafette aanpak' }), ' gemaakt en kunnen dus verschillende statussen hebben.'] }), '\n', (0, a.jsx)(N, { headingLevel: 2 })] });
   }
   function w(e = {}) {
    const { wrapper: t } = { ...(0, r.a)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(T, { ...e }) }) : T(e);
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
