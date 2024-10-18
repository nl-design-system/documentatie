'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [12274],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => t });
   var o = l(52676),
    s = l(24785);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  44534: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => h, contentTitle: () => m, default: () => b, frontMatter: () => u, metadata: () => _, toc: () => v });
   var o = l(52676),
    s = l(24785),
    r = l(98480),
    t = l(91050);
   function c(e) {
    const n = { div: 'div', input: 'input', label: 'label', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(t.X, { appearance: 'do', title: 'Koppel alle descriptions aan het formulierveld.', children: (0, o.jsx)(r.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'wachtwoord5', children: 'Nieuw wachtwoord' }), (0, o.jsx)(n.div, { id: 'description-wachtwoord5', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, o.jsx)(n.div, { id: 'error-wachtwoord5', children: 'Je gekozen wachtwoord is te kort.' }), (0, o.jsx)(n.input, { id: 'wachtwoord5', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord5 error-wachtwoord5' })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function d(e) {
    const n = { code: 'code', h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'meerdere-descriptions-koppelen', children: 'Meerdere descriptions koppelen' }), '\n', (0, o.jsx)(n.p, { children: 'Je kunt meerdere descriptions koppelen aan een formulierveld. Bijvoorbeeld als er een ook nog een foutmelding is.' }), '\n', (0, o.jsxs)(n.p, { children: ['Geef dan ', (0, o.jsx)(n.code, { children: 'aria-describedby' }), " twee waardes (IDs) mee, gescheiden door een spatie. De volgorde van de ID's meegegeven in de ", (0, o.jsx)(n.code, { children: 'aria-describedby' }), ' is de volgorde waarin het voorgelezen wordt.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   var p = l(55400);
   const u = { title: 'Meerdere descriptions koppelen \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Meerdere descriptions', pagination_label: 'Meerdere descriptions', description: 'Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/meerdere-koppelen', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    _ = { id: 'richtlijnen/formulieren/description/multiple/README', title: 'Meerdere descriptions koppelen \xb7 Descriptions in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.', source: '@site/docs/richtlijnen/formulieren/description/3-multiple/README.mdx', sourceDirName: 'richtlijnen/formulieren/description/3-multiple', slug: '/richtlijnen/formulieren/descriptions/meerdere-koppelen', permalink: '/richtlijnen/formulieren/descriptions/meerdere-koppelen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/3-multiple/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Meerdere descriptions koppelen \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Meerdere descriptions', pagination_label: 'Meerdere descriptions', description: 'Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/meerdere-koppelen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Plaatsing description', permalink: '/richtlijnen/formulieren/descriptions/plaatsing' }, next: { title: 'Description bij fieldsets', permalink: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset' } },
    h = {},
    v = [];
   function g(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(a, {}), '\n', (0, o.jsx)(i, {}), '\n', (0, o.jsx)(p.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => b });
   var o = l(46506),
    s = l(4814),
    r = l(25585),
    t = l(40282),
    c = l(40678),
    i = l(85722),
    d = l(6374),
    a = l(75271),
    p = l(60027);
   const u = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = l(41179),
    _ = l(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, _.jsx)(o.Tg, { className: u['nlds-canvas__example-surface'], children: (0, _.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: (0, _.jsx)(o.nv, { className: u['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, _.jsx)(o.Tg, { className: u['nlds-canvas__example-surface'], children: (0, _.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, _.jsx)(o.Tg, { className: u['nlds-canvas__example-surface'], children: n });
   };
   g.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: b = !1, displayCode: y = !0, children: x, container: j = 'document', language: f, designTokens: k } = e,
     w = 'function' == typeof x ? x() : x,
     N = 'function' == typeof n ? n() : (0, a.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : p.uS(N || w),
     [C, D] = (0, a.useState)(Z),
     [M, S] = (0, a.useState)(b);
    (0, a.useEffect)(() => {
     (async () => {
      (C = await d.ZP.format(Z, { parser: f, plugins: [r.Z, t.ZP, c.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), D(C);
     })();
    }, [Z]);
    const z = (0, a.useId)();
    let P = a.Fragment;
    return (
     'paragraph' === j ? (P = h) : 'document' === j ? (P = v) : 'surface' === j && (P = g),
     (0, _.jsxs)('div', {
      className: (0, s.Z)(u['nlds-canvas']),
      children: [
       w && (0, _.jsx)('div', { className: (0, s.Z)(u['nlds-canvas__example']), children: (0, _.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, _.jsx)(P, { children: (0, _.jsx)(o.pu, { children: w }) }) }) }),
       y &&
        (0, _.jsx)('div', {
         className: (0, s.Z)(u['nlds-canvas__toolbar']),
         children: (0, _.jsx)(o.zx, {
          className: (0, s.Z)(u['nlds-canvas__button'], u['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           S(!M);
          },
          'aria-expanded': M,
          'aria-controls': z,
          children: M ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, _.jsxs)('div', {
         className: (0, s.Z)(u['nlds-canvas__code-block'], !l && u['nlds-canvas__code-block--user-select-none']),
         id: z,
         hidden: !M,
         children: [
          (0, _.jsx)(m.u, { syntax: f, textContent: C, trim: !0 }),
          l &&
           (0, _.jsx)('div', {
            className: (0, s.Z)(u['nlds-canvas__toolbar'], u['nlds-canvas__toolbar--copy']),
            children: (0, _.jsx)(o.zx, {
             className: (0, s.Z)(u['nlds-canvas__button'], u['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(C).catch((e) => console.error('Copy code failed', e));
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
   l.d(n, { u: () => c });
   var o = l(46506),
    s = l(70739);
   l(75271);
   const r = {
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
   var t = l(52676);
   function c(e) {
    let { lineNumber: n, syntax: l, textContent: c, trim: i } = e,
     d = c;
    return (
     i && (d = d.trim()),
     (0, t.jsx)(s.y$, {
      theme: r,
      code: d,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: s, getLineProps: r, getTokenProps: c } = e;
       return (0, t.jsx)(o.dn, { style: l, children: s.map((e, l) => (0, t.jsxs)('span', { ...r({ line: e }), children: [n && (0, t.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, t.jsx)('span', { ...c({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => d });
   var o = l(77355),
    s = l(67663),
    r = l(46506),
    t = l(4814);
   l(75271);
   const c = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = l(52676);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: a, figure: p } = e;
    const u = 'Doen',
     m = 'Niet doen',
     _ = p ? 'figure' : 'div',
     h = p ? 'figcaption' : 'div';
    return (0, i.jsxs)(_, { className: (0, t.Z)(c['nlds-guideline'], c[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: (0, t.Z)(c['nlds-guideline__description']), children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, t.Z)(c['nlds-guideline__badge'], c[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(o.Z, { className: c['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: c['nlds-guideline__title'], children: m })] }), (0, i.jsx)(r.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, t.Z)(c['nlds-guideline__badge'], c[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(s.Z, { className: c['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: c['nlds-guideline__title'], children: u })] }), (0, i.jsx)(r.nv, { children: n })] }), d] }), (0, i.jsx)('div', { className: (0, t.Z)(c['nlds-guideline__example']), children: a })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => c, a: () => t });
   var o = l(75271);
   const s = {},
    r = o.createContext(s);
   function t(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
