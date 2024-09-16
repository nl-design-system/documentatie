'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [31686],
 {
  23680: (e, n, t) => {
   t.d(n, { ZP: () => r });
   var o = t(52676),
    l = t(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  40378: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => p, default: () => h, frontMatter: () => b, metadata: () => m, toc: () => _ });
   var o = t(52676),
    l = t(24785),
    s = t(98480),
    r = t(91050);
   function i(e) {
    const n = { button: 'button', div: 'div', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(r.X, { appearance: 'do', title: 'Gebruik een button, zodat de toetsenbordinteractie vanzelf goed gaat.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsx)(n.button, { class: 'doFancyStuff button', children: 'Geef je op' }) }) }), '\n', (0, o.jsx)(r.X, { appearance: 'dont', title: 'Een div gebruiken die alleen met de muis aanklikbaar is.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsx)(n.div, { class: 'doFancyStuff button', children: 'Geef je op' }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function c(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'toetsenbordbediening-van-een-button', children: 'Toetsenbordbediening van een button' }), '\n', (0, o.jsx)(n.p, { children: 'Veel gebruikers navigeren door een formulier met hun Tab-toets om van focusable element naar focusable element te springen (buttons, links, invoervelden, radio buttons, checkboxes etc).' }), '\n', (0, o.jsx)(n.p, { children: 'Krijgt een button de toetsenbordfocus, dan kan die met \u201center\u201d of \u201cspatiebalk\u201d worden geactiveerd. Zorg ervoor dat deze functionaliteit blijft werken als je een webcomponent bouwt, dit is standaard en verwacht gedrag van een button.' }), '\n', (0, o.jsxs)(n.p, { children: ['Een consistente toetsenbordbediening is nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/2.1.1', children: 'WCAG-succescriterium 2.1.1 Toetsenbord' }), ' (niveau A).'] }), '\n', (0, o.jsxs)(n.p, { children: ['En ook volg je dan de ', (0, o.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/predictable.html', children: 'WCAG-richtlijn 3.2 Voorspelbaar' }), ": maak het uiterlijk en de bediening van webpagina's voorspelbaar."] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   var u = t(23680);
   const b = { title: 'Toetsenbordbediening van een button | Buttons in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toetsenbordbediening', pagination_label: 'Toetsenbordbediening van een button', description: 'Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.', slug: '/richtlijnen/formulieren/buttons/toetsenbordbediening', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    m = { id: 'richtlijnen/formulieren/button/keyboard/README', title: 'Toetsenbordbediening van een button | Buttons in een formulier | Richtlijnen', description: 'Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.', source: '@site/docs/richtlijnen/formulieren/button/1-keyboard/README.mdx', sourceDirName: 'richtlijnen/formulieren/button/1-keyboard', slug: '/richtlijnen/formulieren/buttons/toetsenbordbediening', permalink: '/richtlijnen/formulieren/buttons/toetsenbordbediening', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/1-keyboard/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Toetsenbordbediening van een button | Buttons in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toetsenbordbediening', pagination_label: 'Toetsenbordbediening van een button', description: 'Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.', slug: '/richtlijnen/formulieren/buttons/toetsenbordbediening', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Buttons in een formulier', permalink: '/richtlijnen/formulieren/buttons' }, next: { title: 'Verstuur niet automatisch', permalink: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen' } },
    g = {},
    _ = [];
   function v(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(a, {}), '\n', (0, o.jsx)(u.ZP, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v();
   }
  },
  98480: (e, n, t) => {
   t.d(n, { X: () => h });
   var o = t(46506),
    l = t(4814),
    s = t(25585),
    r = t(40282),
    i = t(40678),
    a = t(85722),
    c = t(6374),
    d = t(75271),
    u = t(60027);
   const b = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var p = t(41179),
    m = t(52676);
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: b['nlds-canvas__example-surface'], children: (0, m.jsx)(o.BB, { className: (0, l.Z)('utrecht-document--surface', b['nlds-canvas__example-document']), children: (0, m.jsx)(o.nv, { className: b['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   g.displayName = 'ParagraphContainer';
   const _ = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: b['nlds-canvas__example-surface'], children: (0, m.jsx)(o.BB, { className: (0, l.Z)('utrecht-document--surface', b['nlds-canvas__example-document']), children: n }) });
   };
   _.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: b['nlds-canvas__example-surface'], children: n });
   };
   v.displayName = 'SurfaceContainer';
   const h = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: h = !1, displayCode: y = !0, children: j, container: x = 'document', language: f, designTokens: k } = e,
     w = 'function' == typeof j ? j() : j,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [C, S] = (0, d.useState)(Z),
     [T, z] = (0, d.useState)(h);
    (0, d.useEffect)(() => {
     (async () => {
      (C = await c.ZP.format(Z, { parser: f, plugins: [s.Z, r.ZP, i.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), S(C);
     })();
    }, [Z]);
    const E = (0, d.useId)();
    let P = d.Fragment;
    return (
     'paragraph' === x ? (P = g) : 'document' === x ? (P = _) : 'surface' === x && (P = v),
     (0, m.jsxs)('div', {
      className: (0, l.Z)(b['nlds-canvas']),
      children: [
       w && (0, m.jsx)('div', { className: (0, l.Z)(b['nlds-canvas__example']), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(P, { children: (0, m.jsx)(o.pu, { children: w }) }) }) }),
       y &&
        (0, m.jsx)('div', {
         className: (0, l.Z)(b['nlds-canvas__toolbar']),
         children: (0, m.jsx)(o.zx, {
          className: (0, l.Z)(b['nlds-canvas__button'], b['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           z(!T);
          },
          'aria-expanded': T,
          'aria-controls': E,
          children: T ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, m.jsxs)('div', {
         className: (0, l.Z)(b['nlds-canvas__code-block'], !t && b['nlds-canvas__code-block--user-select-none']),
         id: E,
         hidden: !T,
         children: [
          (0, m.jsx)(p.u, { syntax: f, textContent: C, trim: !0 }),
          t &&
           (0, m.jsx)('div', {
            className: (0, l.Z)(b['nlds-canvas__toolbar'], b['nlds-canvas__toolbar--copy']),
            children: (0, m.jsx)(o.zx, {
             className: (0, l.Z)(b['nlds-canvas__button'], b['nlds-canvas__copy-button']),
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
  41179: (e, n, t) => {
   t.d(n, { u: () => i });
   var o = t(46506),
    l = t(70739);
   t(75271);
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
   var r = t(52676);
   function i(e) {
    let { lineNumber: n, syntax: t, textContent: i, trim: a } = e,
     c = i;
    return (
     a && (c = c.trim()),
     (0, r.jsx)(l.y$, {
      theme: s,
      code: c,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: l, getLineProps: s, getTokenProps: i } = e;
       return (0, r.jsx)(o.dn, { style: t, children: l.map((e, t) => (0, r.jsxs)('span', { ...s({ line: e }), children: [n && (0, r.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, r.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) });
      },
     })
    );
   }
  },
  91050: (e, n, t) => {
   t.d(n, { X: () => c });
   var o = t(77355),
    l = t(67663),
    s = t(46506),
    r = t(4814);
   t(75271);
   const i = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var a = t(52676);
   const c = (e) => {
    let { title: n, appearance: t, description: c, children: d, figure: u } = e;
    const b = 'Doen',
     p = 'Niet doen',
     m = u ? 'figure' : 'div',
     g = u ? 'figcaption' : 'div';
    return (0, a.jsxs)(m, { className: (0, r.Z)(i['nlds-guideline'], i[`nlds-guideline--${t}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(g, { className: (0, r.Z)(i['nlds-guideline__description']), children: ['dont' === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(o.Z, { className: i['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: i['nlds-guideline__title'], children: p })] }), (0, a.jsx)(s.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(l.Z, { className: i['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: i['nlds-guideline__title'], children: b })] }), (0, a.jsx)(s.nv, { children: n })] }), c] }), (0, a.jsx)('div', { className: (0, r.Z)(i['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => i, a: () => r });
   var o = t(75271);
   const l = {},
    s = o.createContext(l);
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
