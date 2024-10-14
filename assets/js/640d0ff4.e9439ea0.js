'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [51192],
 {
  55400: (e, l, n) => {
   n.d(l, { ZP: () => r });
   var s = n(52676),
    a = n(24785);
   function o(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, s.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, s.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function r(e = {}) {
    const { wrapper: l } = { ...(0, a.a)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(o, { ...e }) }) : o(e);
   }
  },
  96810: (e, l, n) => {
   n.r(l), n.d(l, { assets: () => g, contentTitle: () => h, default: () => _, frontMatter: () => p, metadata: () => m, toc: () => v });
   var s = n(52676),
    a = n(24785),
    o = n(98480),
    r = n(91050);
   function t(e) {
    const l = { input: 'input', label: 'label', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(r.X, { appearance: 'do', title: 'Het label altijd tonen en een description gebruiken als aanvullende informatie.', children: (0, s.jsx)(o.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.label, { for: 'lievelingskleur1', children: 'Wat is je lievelingskleur?' }), (0, s.jsx)(l.p, { id: 'description-kleur1', children: 'Vul de naam van een kleur in.' }), (0, s.jsx)(l.input, { 'aria-describedby': 'description-kleur1', id: 'lievelingskleur1', name: 'lievelingskleur', type: 'text' })] }) }) }), '\n', (0, s.jsx)(r.X, { appearance: 'do', title: 'Het label altijd tonen en een placeholder als korte hint gebruiken.', children: (0, s.jsx)(o.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.label, { for: 'lievelingskleur2', children: 'Wat is je lievelingskleur?' }), (0, s.jsx)(l.input, { id: 'lievelingskleur2', type: 'text', name: 'lievelingskleur', placeholder: 'Vul een kleurnaam in' })] }) }) }), '\n', (0, s.jsx)(r.X, { appearance: 'dont', title: 'Het label onzichtbaar maken.', children: (0, s.jsx)(o.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.label, { class: 'sr-only', for: 'lievelingskleur3', children: 'Wat is je lievelingskleur?' }), (0, s.jsx)(l.input, { id: 'lievelingskleur3', name: 'lievelingskleur', placeholder: 'Wat is je lievelingskleur?', type: 'text' })] }) }) }), '\n', (0, s.jsx)(r.X, { appearance: 'dont', title: 'Placeholdertekst heel lang maken zodat een deel uit het formulierveld valt en daardoor onleesbaar wordt. Gebruik in dat geval een description.', children: (0, s.jsx)(o.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.label, { for: 'lievelingskleur4', children: 'Wat is je lievelingskleur?' }), (0, s.jsx)(l.input, { id: 'lievelingskleur4', name: 'lievelingskleur', placeholder: 'Geef is je lievelingskleur? Bijvoorbeeld rood, wit, geel of blauw.', type: 'text' })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: l } = { ...(0, a.a)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
   function c(e) {
    const l = { a: 'a', h1: 'h1', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h1, { id: 'een-placeholder-is-geen-vervanger-van-een-label', children: 'Een placeholder is geen vervanger van een label' }), '\n', (0, s.jsx)(l.p, { children: 'De gebruiker moet altijd een zichtbare indicatie hebben over wat in te vullen. Ook tijdens het typen, wanneer de placeholder verdwijnt of als de informatie al automatisch is ingevuld.' }), '\n', (0, s.jsx)(l.p, { children: 'Gebruik dus niet enkel de placeholder om aan te geven wat een gebruiker moet invullen.' }), '\n', (0, s.jsx)(l.p, { children: 'Een ander probleem met placeholders is dat bij inzoomen lange tekst te groot kan worden voor het formulierveld en daardoor afhakt en onleesbaar wordt.' }), '\n', (0, s.jsxs)(l.p, { children: ['Het permanent goed zichtbaar tonen van het label is nodig om te voldoen aan het ', (0, s.jsx)(l.a, { href: '/wcag/3.3.2', children: 'WCAG-succescriterium 3.3.2 Labels of instructies' }), ' (niveau A). Meer hierover bij de richtlijn ', (0, s.jsx)(l.a, { href: '/richtlijnen/formulieren/placeholders/niet-als-label', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, a.a)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   var u = n(55400);
   const p = { title: 'Een placeholder is geen vervanger van een label | Placeholders in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder is geen label', pagination_label: 'Placeholder is geen label', description: 'Richtlijnen over placeholder niet gebruiken als vervanger van een label.', slug: '/richtlijnen/formulieren/placeholders/niet-als-label', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    m = { id: 'richtlijnen/formulieren/placeholder/label/README', title: 'Een placeholder is geen vervanger van een label | Placeholders in een formulier | Richtlijnen', description: 'Richtlijnen over placeholder niet gebruiken als vervanger van een label.', source: '@site/docs/richtlijnen/formulieren/placeholder/1-label/README.mdx', sourceDirName: 'richtlijnen/formulieren/placeholder/1-label', slug: '/richtlijnen/formulieren/placeholders/niet-als-label', permalink: '/richtlijnen/formulieren/placeholders/niet-als-label', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/1-label/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Een placeholder is geen vervanger van een label | Placeholders in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder is geen label', pagination_label: 'Placeholder is geen label', description: 'Richtlijnen over placeholder niet gebruiken als vervanger van een label.', slug: '/richtlijnen/formulieren/placeholders/niet-als-label', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Placeholders in een formulier', permalink: '/richtlijnen/formulieren/placeholders/' }, next: { title: 'Placeholder bij zoekfunctie', permalink: '/richtlijnen/formulieren/placeholders/zoekfunctie' } },
    g = {},
    v = [];
   function b(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(i, {}), '\n', (0, s.jsx)(u.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: l } = { ...(0, a.a)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b();
   }
  },
  98480: (e, l, n) => {
   n.d(l, { X: () => _ });
   var s = n(46506),
    a = n(4814),
    o = n(25585),
    r = n(40282),
    t = n(40678),
    i = n(85722),
    c = n(6374),
    d = n(75271),
    u = n(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var h = n(41179),
    m = n(52676);
   const g = (e) => {
    let { children: l } = e;
    return (0, m.jsx)(s.Tg, { className: p['nlds-canvas__example-surface'], children: (0, m.jsx)(s.BB, { className: (0, a.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, m.jsx)(s.nv, { className: p['nlds-canvas__example-paragraph'], children: l }) }) });
   };
   g.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: l } = e;
    return (0, m.jsx)(s.Tg, { className: p['nlds-canvas__example-surface'], children: (0, m.jsx)(s.BB, { className: (0, a.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: l }) });
   };
   v.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: l } = e;
    return (0, m.jsx)(s.Tg, { className: p['nlds-canvas__example-surface'], children: l });
   };
   b.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: l, copy: n = !0, defaultExpandedCode: _ = !1, displayCode: j = !0, children: y, container: x = 'document', language: k, designTokens: f } = e,
     w = 'function' == typeof y ? y() : y,
     N = 'function' == typeof l ? l() : (0, d.isValidElement)(l) ? l : void 0,
     Z = 'string' == typeof l ? l : u.uS(N || w),
     [P, z] = (0, d.useState)(Z),
     [C, E] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (P = await c.ZP.format(Z, { parser: k, plugins: [o.Z, r.ZP, t.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), z(P);
     })();
    }, [Z]);
    const S = (0, d.useId)();
    let F = d.Fragment;
    return (
     'paragraph' === x ? (F = g) : 'document' === x ? (F = v) : 'surface' === x && (F = b),
     (0, m.jsxs)('div', {
      className: (0, a.Z)(p['nlds-canvas']),
      children: [
       w && (0, m.jsx)('div', { className: (0, a.Z)(p['nlds-canvas__example']), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(F, { children: (0, m.jsx)(s.pu, { children: w }) }) }) }),
       j &&
        (0, m.jsx)('div', {
         className: (0, a.Z)(p['nlds-canvas__toolbar']),
         children: (0, m.jsx)(s.zx, {
          className: (0, a.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           E(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, m.jsxs)('div', {
         className: (0, a.Z)(p['nlds-canvas__code-block'], !n && p['nlds-canvas__code-block--user-select-none']),
         id: S,
         hidden: !C,
         children: [
          (0, m.jsx)(h.u, { syntax: k, textContent: P, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, a.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, m.jsx)(s.zx, {
             className: (0, a.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(P).catch((e) => console.error('Copy code failed', e));
             },
             children: 'Kopieer',
            }),
           }),
         ],
        }),
      ],
     })
    );
   };
  },
  41179: (e, l, n) => {
   n.d(l, { u: () => t });
   var s = n(46506),
    a = n(70739);
   n(75271);
   const o = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
     { types: ['maybe-class-name'], style: { color: 'var(--nlds-code-block-maybe-class-name-color, var(--nlds-code-block-class-name-color))' } },
     { types: ['comment'], style: { color: 'var(--nlds-code-block-comment-color)', fontStyle: 'italic' } },
     { types: ['prolog'], style: { color: 'var(--nlds-code-block-prolog-color)', fontStyle: 'italic' } },
     { types: ['cdata'], style: { color: 'var(--nlds-code-block-cdata-color)', fontStyle: 'italic' } },
     { types: ['punctuation'], style: { color: 'var(--nlds-code-block-punctuation-color)' } },
     { types: ['deleted'], style: { color: 'var(--nlds-code-block-deleted-color)', fontStyle: 'italic' } },
     { types: ['symbol'], style: { color: 'var(--nlds-code-block-symbol-color)' } },
     { types: ['property'], style: { color: 'var(--nlds-code-block-property-color)' } },
     { types: ['tag'], style: { color: 'var(--nlds-code-block-tag-color)' } },
     { types: ['operator'], style: { color: 'var(--nlds-code-block-operator-color)' } },
     { types: ['keyword'], style: { color: 'var(--nlds-code-block-keyword-color)' } },
     { types: ['boolean'], style: { color: 'var(--nlds-code-block-boolean-color)' } },
     { types: ['number'], style: { color: 'var(--nlds-code-block-number-color)' } },
     { types: ['constant'], style: { color: 'var(--nlds-code-block-constant-color)' } },
     { types: ['function'], style: { color: 'var(--nlds-code-block-function-color)' } },
     { types: ['builtin'], style: { color: 'var(--nlds-code-block-builtin-color)' } },
     { types: ['char'], style: { color: 'var(--nlds-code-block-char-color)' } },
     { types: ['selector'], style: { color: 'var(--nlds-code-block-selector-color)', fontStyle: 'italic' } },
     { types: ['doctype'], style: { color: 'var(--nlds-code-block-doctype-color)', fontStyle: 'italic' } },
     { types: ['attr-name'], style: { color: 'var(--nlds-code-block-attr-name-color)', fontStyle: 'italic' } },
     { types: ['inserted'], style: { color: 'var(--nlds-code-block-inserted-color)', fontStyle: 'italic' } },
     { types: ['string'], style: { color: 'var(--nlds-code-block-string-color)' } },
     { types: ['url'], style: { color: 'var(--nlds-code-block-url-color)' } },
     { types: ['entity'], style: { color: 'var(--nlds-code-block-entity-color)' } },
     { types: ['class-name'], style: { color: 'var(--nlds-code-block-class-name-color)' } },
     { types: ['atrule'], style: { color: 'var(--nlds-code-block-atrule-color)' } },
     { types: ['attr-value'], style: { color: 'var(--nlds-code-block-attr-value-color)' } },
     { types: ['regex'], style: { color: 'var(--nlds-code-block-regex-color)' } },
     { types: ['important'], style: { color: 'var(--nlds-code-block-important-color)', fontWeight: 'bold' } },
     { types: ['variable'], style: { color: 'var(--nlds-code-block-variable-color)' } },
     { types: ['bold'], style: { fontWeight: 'bold' } },
     { types: ['italic'], style: { fontStyle: 'italic' } },
    ],
   };
   var r = n(52676);
   function t(e) {
    let { lineNumber: l, syntax: n, textContent: t, trim: i } = e,
     c = t;
    return (
     i && (c = c.trim()),
     (0, r.jsx)(a.y$, {
      theme: o,
      code: c,
      language: n || '',
      children: (e) => {
       let { style: n, tokens: a, getLineProps: o, getTokenProps: t } = e;
       return (0, r.jsx)(s.dn, { style: n, children: a.map((e, n) => (0, r.jsxs)('span', { ...o({ line: e }), children: [l && (0, r.jsx)('span', { children: n + 1 }), e.map((e, l) => (0, r.jsx)('span', { ...t({ token: e }) }, l)), '\n'] }, n)) });
      },
     })
    );
   }
  },
  91050: (e, l, n) => {
   n.d(l, { X: () => c });
   var s = n(77355),
    a = n(67663),
    o = n(46506),
    r = n(4814);
   n(75271);
   const t = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = n(52676);
   const c = (e) => {
    let { title: l, appearance: n, description: c, children: d, figure: u } = e;
    const p = 'Doen',
     h = 'Niet doen',
     m = u ? 'figure' : 'div',
     g = u ? 'figcaption' : 'div';
    return (0, i.jsxs)(m, { className: (0, r.Z)(t['nlds-guideline'], t[`nlds-guideline--${n}`]), id: 'string' == typeof l ? l?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(g, { className: (0, r.Z)(t['nlds-guideline__description']), children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.nv, { className: (0, r.Z)(t['nlds-guideline__badge'], t[`nlds-guideline__badge--${n}`]), children: [(0, i.jsx)(s.Z, { className: t['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: t['nlds-guideline__title'], children: h })] }), (0, i.jsx)(o.nv, { children: l })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.nv, { className: (0, r.Z)(t['nlds-guideline__badge'], t[`nlds-guideline__badge--${n}`]), children: [(0, i.jsx)(a.Z, { className: t['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: t['nlds-guideline__title'], children: p })] }), (0, i.jsx)(o.nv, { children: l })] }), c] }), (0, i.jsx)('div', { className: (0, r.Z)(t['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, l, n) => {
   n.d(l, { Z: () => t, a: () => r });
   var s = n(75271);
   const a = {},
    o = s.createContext(a);
   function r(e) {
    const l = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function t(e) {
    let l;
    return (l = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), s.createElement(o.Provider, { value: l }, e.children);
   }
  },
 },
]);
