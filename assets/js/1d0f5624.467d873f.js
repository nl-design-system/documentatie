'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [33990],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => r });
   var s = l(52676),
    o = l(24785);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
  },
  80287: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => g, contentTitle: () => m, default: () => v, frontMatter: () => u, metadata: () => h, toc: () => b });
   var s = l(52676),
    o = l(24785),
    t = l(98480),
    r = l(91050);
   function a(e) {
    const n = { input: 'input', label: 'label', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(r.X, { appearance: 'do', title: 'Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, s.jsx)(t.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.label, { for: 'wachtwoord1', children: 'Nieuw wachtwoord' }), (0, s.jsx)(n.p, { id: 'description-wachtwoord1', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, s.jsx)(n.input, { id: 'wachtwoord1', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord1' })] }) }) }), '\n', (0, s.jsx)(r.X, { appearance: 'do', title: 'Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, s.jsx)(t.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.label, { for: 'wachtwoord2', children: 'Nieuw wachtwoord' }), (0, s.jsx)(n.p, { id: 'description-wachtwoord2', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, s.jsx)(n.p, { id: 'error-wachtwoord2', children: 'Je gekozen wachtwoord is te kort.' }), (0, s.jsx)(n.input, { id: 'wachtwoord2', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord2 error-wachtwoord2' })] }) }) }), '\n', (0, s.jsx)(r.X, { appearance: 'dont', title: 'Description onder het formulierveld plaatsen.', children: (0, s.jsx)(t.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.label, { for: 'wachtwoord3', children: 'Nieuw wachtwoord' }), (0, s.jsx)(n.input, { id: 'wachtwoord3', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord3' }), (0, s.jsx)(n.p, { id: 'description-wachtwoord3', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' })] }) }) }), '\n', (0, s.jsx)(r.X, { appearance: 'dont', title: 'Description boven het formulierveld en foutmelding eronder plaatsen.', children: (0, s.jsx)(t.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.label, { for: 'wachtwoord4', children: 'Nieuw wachtwoord' }), (0, s.jsx)(n.p, { id: 'description-wachtwoord4', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, s.jsx)(n.input, { id: 'wachtwoord4', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord4 error-wachtwoord4' }), (0, s.jsx)(n.p, { id: 'error-wachtwoord4', children: 'Je gekozen wachtwoord is te kort.' })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
   function c(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'plaats-descriptions-tussen-label-en-formulierveld', children: 'Plaats descriptions tussen label en formulierveld' }), '\n', (0, s.jsx)(n.p, { children: 'Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld. Omdat de gebruiker van boven naar beneden leest, komt deze informatie na het label op een logisch moment in de leesvolgorde.' }), '\n', (0, s.jsxs)(n.p, { children: ['Ook is dan de kans dat de informatie overlapt met bijvoorbeeld browserpopups kleiner. Lees hiervoor het artikel ', (0, s.jsx)(n.a, { href: 'https://adrianroselli.com/2017/01/avoid-messages-under-fields.html', children: (0, s.jsx)('span', { lang: 'en', children: 'Avoid Messages Under Fields' }) }), ' van Adrian Roselli.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   var p = l(55400);
   const u = { title: 'Plaats descriptions tussen label en formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing description', pagination_label: 'Plaatsing description', description: 'Richtlijnen voor plaatsing van een description bij een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    h = { id: 'richtlijnen/formulieren/description/placement/README', title: 'Plaats descriptions tussen label en formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor plaatsing van een description bij een formulierveld.', source: '@site/docs/richtlijnen/formulieren/description/2-placement/README.mdx', sourceDirName: 'richtlijnen/formulieren/description/2-placement', slug: '/richtlijnen/formulieren/descriptions/plaatsing', permalink: '/richtlijnen/formulieren/descriptions/plaatsing', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/2-placement/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Plaats descriptions tussen label en formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing description', pagination_label: 'Plaatsing description', description: 'Richtlijnen voor plaatsing van een description bij een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Koppel description', permalink: '/richtlijnen/formulieren/descriptions/koppelen' }, next: { title: 'Meerdere descriptions', permalink: '/richtlijnen/formulieren/descriptions/meerdere-koppelen' } },
    g = {},
    b = [];
   function _(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(i, {}), '\n', (0, s.jsx)(p.ZP, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(_, { ...e }) }) : _();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => v });
   var s = l(46506),
    o = l(4814),
    t = l(25585),
    r = l(40282),
    a = l(40678),
    i = l(85722),
    c = l(6374),
    d = l(75271),
    p = l(60027);
   const u = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = l(41179),
    h = l(52676);
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(s.Tg, { className: u['nlds-canvas__example-surface'], children: (0, h.jsx)(s.BB, { className: (0, o.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: (0, h.jsx)(s.nv, { className: u['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   g.displayName = 'ParagraphContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(s.Tg, { className: u['nlds-canvas__example-surface'], children: (0, h.jsx)(s.BB, { className: (0, o.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: n }) });
   };
   b.displayName = 'DocumentContainer';
   const _ = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(s.Tg, { className: u['nlds-canvas__example-surface'], children: n });
   };
   _.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: v = !1, displayCode: y = !0, children: x, container: j = 'document', language: f, designTokens: w } = e,
     k = 'function' == typeof x ? x() : x,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : p.uS(N || k),
     [P, C] = (0, d.useState)(Z),
     [S, z] = (0, d.useState)(v);
    (0, d.useEffect)(() => {
     (async () => {
      (P = await c.ZP.format(Z, { parser: f, plugins: [t.Z, r.ZP, a.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(P);
     })();
    }, [Z]);
    const D = (0, d.useId)();
    let F = d.Fragment;
    return (
     'paragraph' === j ? (F = g) : 'document' === j ? (F = b) : 'surface' === j && (F = _),
     (0, h.jsxs)('div', {
      className: (0, o.Z)(u['nlds-canvas']),
      children: [
       k && (0, h.jsx)('div', { className: (0, o.Z)(u['nlds-canvas__example']), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: w, children: (0, h.jsx)(F, { children: (0, h.jsx)(s.pu, { children: k }) }) }) }),
       y &&
        (0, h.jsx)('div', {
         className: (0, o.Z)(u['nlds-canvas__toolbar']),
         children: (0, h.jsx)(s.zx, {
          className: (0, o.Z)(u['nlds-canvas__button'], u['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           z(!S);
          },
          'aria-expanded': S,
          'aria-controls': D,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, h.jsxs)('div', {
         className: (0, o.Z)(u['nlds-canvas__code-block'], !l && u['nlds-canvas__code-block--user-select-none']),
         id: D,
         hidden: !S,
         children: [
          (0, h.jsx)(m.u, { syntax: f, textContent: P, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, o.Z)(u['nlds-canvas__toolbar'], u['nlds-canvas__toolbar--copy']),
            children: (0, h.jsx)(s.zx, {
             className: (0, o.Z)(u['nlds-canvas__button'], u['nlds-canvas__copy-button']),
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
  41179: (e, n, l) => {
   l.d(n, { u: () => a });
   var s = l(46506),
    o = l(70739);
   l(75271);
   const t = {
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
   var r = l(52676);
   function a(e) {
    let { lineNumber: n, syntax: l, textContent: a, trim: i } = e,
     c = a;
    return (
     i && (c = c.trim()),
     (0, r.jsx)(o.y$, {
      theme: t,
      code: c,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: o, getLineProps: t, getTokenProps: a } = e;
       return (0, r.jsx)(s.dn, { style: l, children: o.map((e, l) => (0, r.jsxs)('span', { ...t({ line: e }), children: [n && (0, r.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, r.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => c });
   var s = l(77355),
    o = l(67663),
    t = l(46506),
    r = l(4814);
   l(75271);
   const a = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = l(52676);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: d, figure: p } = e;
    const u = 'Doen',
     m = 'Niet doen',
     h = p ? 'figure' : 'div',
     g = p ? 'figcaption' : 'div';
    return (0, i.jsxs)(h, { className: (0, r.Z)(a['nlds-guideline'], a[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(g, { className: (0, r.Z)(a['nlds-guideline__description']), children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.nv, { className: (0, r.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(s.Z, { className: a['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: a['nlds-guideline__title'], children: m })] }), (0, i.jsx)(t.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.nv, { className: (0, r.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(o.Z, { className: a['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: a['nlds-guideline__title'], children: u })] }), (0, i.jsx)(t.nv, { children: n })] }), c] }), (0, i.jsx)('div', { className: (0, r.Z)(a['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => a, a: () => r });
   var s = l(75271);
   const o = {},
    t = s.createContext(o);
   function r(e) {
    const n = s.useContext(t);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), s.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
