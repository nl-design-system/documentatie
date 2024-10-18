'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [82190],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => r });
   var o = l(52676),
    t = l(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  40220: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => h, contentTitle: () => p, default: () => v, frontMatter: () => m, metadata: () => g, toc: () => _ });
   var o = l(52676),
    t = l(24785),
    s = l(98480),
    r = l(91050);
   function i(e) {
    const n = { input: 'input', label: 'label', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(r.X, { appearance: 'do', title: 'Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'wachtwoord2', children: 'Nieuw wachtwoord' }), (0, o.jsx)(n.p, { id: 'description-wachtwoord2', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, o.jsx)(n.p, { id: 'error-wachtwoord2', children: 'Invoerfout: Je gekozen wachtwoord is te kort.' }), (0, o.jsx)(n.input, { id: 'wachtwoord2', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord2 error-wachtwoord2' })] }) }) }), '\n', (0, o.jsx)(r.X, { appearance: 'dont', title: 'Description boven het formulierveld en foutmelding eronder plaatsen.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'wachtwoord4', children: 'Nieuw wachtwoord' }), (0, o.jsx)(n.p, { id: 'description-wachtwoord4', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, o.jsx)(n.input, { id: 'wachtwoord4', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord4 error-wachtwoord4' }), (0, o.jsx)(n.p, { id: 'error-wachtwoord4', children: 'Invoerfout: Je gekozen wachtwoord is te kort.' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function a(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'zet-de-foutmeldingen-bij-de-betreffende-formuliervelden', children: 'Zet de foutmeldingen bij de betreffende formuliervelden' }), '\n', (0, o.jsxs)(n.p, { children: ['Voor foutmeldingen geldt hetzelfde als voor descriptions: de beste locatie is boven het formulierveld. Bovendien moet de foutmelding ', (0, o.jsx)(n.code, { children: 'aria-describedby' }), ' gekoppeld zijn aan het formulierveld.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Hoe dit te doen is beschreven bij de richtlijn ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing', children: 'Plaats descriptions tussen label en formulierveld' }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   var u = l(55400);
   const m = { title: 'Zet de foutmeldingen bij de betreffende formuliervelden \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing foutmelding', pagination_label: 'Plaatsing foutmelding', description: 'Richtlijnen voor positie van foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    g = { id: 'richtlijnen/formulieren/error/location/README', title: 'Zet de foutmeldingen bij de betreffende formuliervelden \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor positie van foutmeldingen in een formulier.', source: '@site/docs/richtlijnen/formulieren/error/4-location/README.mdx', sourceDirName: 'richtlijnen/formulieren/error/4-location', slug: '/richtlijnen/formulieren/foutmeldingen/plaatsing', permalink: '/en/richtlijnen/formulieren/foutmeldingen/plaatsing', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/4-location/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zet de foutmeldingen bij de betreffende formuliervelden \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing foutmelding', pagination_label: 'Plaatsing foutmelding', description: 'Richtlijnen voor positie van foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Duidelijke foutmeldingen', permalink: '/en/richtlijnen/formulieren/foutmeldingen/duidelijk' }, next: { title: 'HTML-formuliervalidatie', permalink: '/en/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie' } },
    h = {},
    _ = [];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(u.ZP, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => v });
   var o = l(46506),
    t = l(4814),
    s = l(25585),
    r = l(40282),
    i = l(40678),
    c = l(85722),
    a = l(6374),
    d = l(75271),
    u = l(60027);
   const m = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var p = l(41179),
    g = l(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(o.Tg, { className: m['nlds-canvas__example-surface'], children: (0, g.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: (0, g.jsx)(o.nv, { className: m['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const _ = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(o.Tg, { className: m['nlds-canvas__example-surface'], children: (0, g.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: n }) });
   };
   _.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(o.Tg, { className: m['nlds-canvas__example-surface'], children: n });
   };
   b.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: v = !1, displayCode: f = !0, children: y, container: j = 'document', language: x, designTokens: k } = e,
     w = 'function' == typeof y ? y() : y,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [C, P] = (0, d.useState)(Z),
     [z, S] = (0, d.useState)(v);
    (0, d.useEffect)(() => {
     (async () => {
      (C = await a.ZP.format(Z, { parser: x, plugins: [s.Z, r.ZP, i.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), P(C);
     })();
    }, [Z]);
    const F = (0, d.useId)();
    let D = d.Fragment;
    return (
     'paragraph' === j ? (D = h) : 'document' === j ? (D = _) : 'surface' === j && (D = b),
     (0, g.jsxs)('div', {
      className: (0, t.Z)(m['nlds-canvas']),
      children: [
       w && (0, g.jsx)('div', { className: (0, t.Z)(m['nlds-canvas__example']), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, g.jsx)(D, { children: (0, g.jsx)(o.pu, { children: w }) }) }) }),
       f &&
        (0, g.jsx)('div', {
         className: (0, t.Z)(m['nlds-canvas__toolbar']),
         children: (0, g.jsx)(o.zx, {
          className: (0, t.Z)(m['nlds-canvas__button'], m['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           S(!z);
          },
          'aria-expanded': z,
          'aria-controls': F,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       f &&
        (0, g.jsxs)('div', {
         className: (0, t.Z)(m['nlds-canvas__code-block'], !l && m['nlds-canvas__code-block--user-select-none']),
         id: F,
         hidden: !z,
         children: [
          (0, g.jsx)(p.u, { syntax: x, textContent: C, trim: !0 }),
          l &&
           (0, g.jsx)('div', {
            className: (0, t.Z)(m['nlds-canvas__toolbar'], m['nlds-canvas__toolbar--copy']),
            children: (0, g.jsx)(o.zx, {
             className: (0, t.Z)(m['nlds-canvas__button'], m['nlds-canvas__copy-button']),
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
   l.d(n, { u: () => i });
   var o = l(46506),
    t = l(70739);
   l(75271);
   const s = {
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
   function i(e) {
    let { lineNumber: n, syntax: l, textContent: i, trim: c } = e,
     a = i;
    return (
     c && (a = a.trim()),
     (0, r.jsx)(t.y$, {
      theme: s,
      code: a,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: t, getLineProps: s, getTokenProps: i } = e;
       return (0, r.jsx)(o.dn, { style: l, children: t.map((e, l) => (0, r.jsxs)('span', { ...s({ line: e }), children: [n && (0, r.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, r.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => a });
   var o = l(77355),
    t = l(67663),
    s = l(46506),
    r = l(4814);
   l(75271);
   const i = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var c = l(52676);
   const a = (e) => {
    let { title: n, appearance: l, description: a, children: d, figure: u } = e;
    const m = 'Doen',
     p = 'Niet doen',
     g = u ? 'figure' : 'div',
     h = u ? 'figcaption' : 'div';
    return (0, c.jsxs)(g, { className: (0, r.Z)(i['nlds-guideline'], i[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: (0, r.Z)(i['nlds-guideline__description']), children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, r.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(o.Z, { className: i['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: i['nlds-guideline__title'], children: p })] }), (0, c.jsx)(s.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, r.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(t.Z, { className: i['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: i['nlds-guideline__title'], children: m })] }), (0, c.jsx)(s.nv, { children: n })] }), a] }), (0, c.jsx)('div', { className: (0, r.Z)(i['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => i, a: () => r });
   var o = l(75271);
   const t = {},
    s = o.createContext(t);
   function r(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
