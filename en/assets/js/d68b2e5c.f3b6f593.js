'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [52116],
 {
  23680: (e, n, l) => {
   l.d(n, { ZP: () => r });
   var t = l(52676),
    o = l(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  16464: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => h, contentTitle: () => m, default: () => b, frontMatter: () => u, metadata: () => g, toc: () => v });
   var t = l(52676),
    o = l(24785),
    s = l(98480),
    r = l(91050);
   function a(e) {
    const n = { form: 'form', h2: 'h2', h3: 'h3', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(r.X, { appearance: 'do', title: 'Info boven het form element.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { children: 'Uw gegevens' }), (0, t.jsx)(n.p, { children: 'Stap 2 van 3' }), (0, t.jsx)(n.form, { children: '[... inhoud formulier \u2026]' })] }) }) }), '\n', (0, t.jsx)(r.X, { appearance: 'dont', title: 'Info binnen het formulier.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { children: 'Uw gegevens' }), (0, t.jsxs)(n.form, { children: [(0, t.jsx)(n.h3, { children: 'Stap 2 van 3' }), '[... inhoud formulier \u2026]'] })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', p: 'p', strong: 'strong', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier' }), '\n', (0, t.jsxs)(n.p, { children: ['Plaats tekst en uitleg die hoort bij het formulier buiten het ', (0, t.jsx)(n.code, { children: '<form>' }), ' element. Dus zet informatie over de stappen ', (0, t.jsx)(n.strong, { children: 'boven' }), ' en niet ', (0, t.jsx)(n.strong, { children: 'binnen' }), ' het ', (0, t.jsx)(n.code, { children: '<form>' }), ' element. Dan is de kans dat screenreadergebruikers deze informatie missen het kleinst. Het waarom staat uitgelegd bij de richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/koppelen', children: 'Koppel een description aan het formulierveld' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het voordeel van een formulier in meer stappen is, dat je makkelijker uitgebreide informatie per stap kunt toevoegen ', (0, t.jsx)(n.strong, { children: 'boven' }), ' het formulier. Dat scheelt de complexiteit van eventueel gebruik van ARIA om tekst te laten voorlezen bij een formulierveld.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het aangeven van de hoeveelheid stappen boven het formulier is nodig om te voldoen aan het ', (0, t.jsx)(n.a, { href: '/wcag/1.3.2', children: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde' }), ' (niveau A).'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   var p = l(23680);
   const u = { title: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier | Meerdere stappen in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing voortgang stappen', pagination_label: 'Plaatsing voortgang stappen', description: 'Richtlijnen over positie van de formulier voortgang.', slug: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    g = { id: 'richtlijnen/formulieren/multistep/location/README', title: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier | Meerdere stappen in een formulier | Richtlijnen', description: 'Richtlijnen over positie van de formulier voortgang.', source: '@site/docs/richtlijnen/formulieren/multistep/2-location/README.mdx', sourceDirName: 'richtlijnen/formulieren/multistep/2-location', slug: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', permalink: '/en/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/2-location/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier | Meerdere stappen in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing voortgang stappen', pagination_label: 'Plaatsing voortgang stappen', description: 'Richtlijnen over positie van de formulier voortgang.', slug: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Voortgang stappen tonen', permalink: '/en/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen' }, next: { title: 'Consistente navigatie', permalink: '/en/richtlijnen/formulieren/meerdere-stappen/consistente-benaming' } },
    h = {},
    v = [];
   function _(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(i, {}), '\n', (0, t.jsx)(p.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(_, { ...e }) }) : _();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => b });
   var t = l(46506),
    o = l(4814),
    s = l(25585),
    r = l(40282),
    a = l(40678),
    i = l(85722),
    c = l(6374),
    d = l(75271),
    p = l(60027);
   const u = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = l(41179),
    g = l(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(t.Tg, { className: u['nlds-canvas__example-surface'], children: (0, g.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: (0, g.jsx)(t.nv, { className: u['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(t.Tg, { className: u['nlds-canvas__example-surface'], children: (0, g.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const _ = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(t.Tg, { className: u['nlds-canvas__example-surface'], children: n });
   };
   _.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: b = !1, displayCode: f = !0, children: y, container: j = 'document', language: x, designTokens: k } = e,
     N = 'function' == typeof y ? y() : y,
     w = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : p.uS(w || N),
     [P, C] = (0, d.useState)(Z),
     [S, z] = (0, d.useState)(b);
    (0, d.useEffect)(() => {
     (async () => {
      (P = await c.ZP.format(Z, { parser: x, plugins: [s.Z, r.ZP, a.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(P);
     })();
    }, [Z]);
    const D = (0, d.useId)();
    let R = d.Fragment;
    return (
     'paragraph' === j ? (R = h) : 'document' === j ? (R = v) : 'surface' === j && (R = _),
     (0, g.jsxs)('div', {
      className: (0, o.Z)(u['nlds-canvas']),
      children: [
       N && (0, g.jsx)('div', { className: (0, o.Z)(u['nlds-canvas__example']), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, g.jsx)(R, { children: (0, g.jsx)(t.pu, { children: N }) }) }) }),
       f &&
        (0, g.jsx)('div', {
         className: (0, o.Z)(u['nlds-canvas__toolbar']),
         children: (0, g.jsx)(t.zx, {
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
       f &&
        (0, g.jsxs)('div', {
         className: (0, o.Z)(u['nlds-canvas__code-block'], !l && u['nlds-canvas__code-block--user-select-none']),
         id: D,
         hidden: !S,
         children: [
          (0, g.jsx)(m.u, { syntax: x, textContent: P, trim: !0 }),
          l &&
           (0, g.jsx)('div', {
            className: (0, o.Z)(u['nlds-canvas__toolbar'], u['nlds-canvas__toolbar--copy']),
            children: (0, g.jsx)(t.zx, {
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
   var t = l(46506),
    o = l(70739);
   l(75271);
   const s = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
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
      theme: s,
      code: c,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: o, getLineProps: s, getTokenProps: a } = e;
       return (0, r.jsx)(t.dn, { style: l, children: o.map((e, l) => (0, r.jsxs)('span', { ...s({ line: e }), children: [n && (0, r.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, r.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => c });
   var t = l(77355),
    o = l(67663),
    s = l(46506),
    r = l(4814);
   l(75271);
   const a = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = l(52676);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: d, figure: p } = e;
    const u = 'Doen',
     m = 'Niet doen',
     g = p ? 'figure' : 'div',
     h = p ? 'figcaption' : 'div';
    return (0, i.jsxs)(g, { className: (0, r.Z)(a['nlds-guideline'], a[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: (0, r.Z)(a['nlds-guideline__description']), children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, r.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(t.Z, { className: a['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: a['nlds-guideline__title'], children: m })] }), (0, i.jsx)(s.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, r.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(o.Z, { className: a['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: a['nlds-guideline__title'], children: u })] }), (0, i.jsx)(s.nv, { children: n })] }), c] }), (0, i.jsx)('div', { className: (0, r.Z)(a['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => a, a: () => r });
   var t = l(75271);
   const o = {},
    s = t.createContext(o);
   function r(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
