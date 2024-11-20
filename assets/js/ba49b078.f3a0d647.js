'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [20360],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => a });
   var t = l(52676),
    o = l(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  45432: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => g, contentTitle: () => h, default: () => y, frontMatter: () => m, metadata: () => v, toc: () => b });
   var t = l(52676),
    o = l(24785),
    s = l(98480),
    a = l(91050),
    r = l(46506);
   function c(e) {
    const n = { input: 'input', label: 'label', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(a.X, { appearance: 'do', title: 'Maak het label goed leesbaar door voldoende contrast.', description: (0, t.jsxs)(t.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, t.jsx)(r.rU, { href: '/contrast/?color=%23006FA1&background-color=%23ffffff', children: 'een contrast van 5.54:1' }), '.'] }), children: (0, t.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-form-label-color': '#006FA1' }, children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'naam1', children: 'Uw naam' }), (0, t.jsx)(n.input, { type: 'text', id: 'naam1', autoComplete: 'name' })] }) }) }), '\n', (0, t.jsx)(a.X, { appearance: 'dont', title: 'Maak het label slecht leesbaar door onvoldoende contrast.', description: (0, t.jsxs)(t.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, t.jsx)(r.rU, { href: '/contrast/?color=%23999999&background-color=%23f8f5f1', children: 'een contrast van 2.62:1' }), '.'] }), children: (0, t.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-form-label-color': '#999999' }, children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'naam2', children: 'Uw naam' }), (0, t.jsx)(n.input, { type: 'text', id: 'naam2', autoComplete: 'name' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function i(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'geef-tekst-voldoende-kleurcontrast', children: 'Geef tekst voldoende kleurcontrast' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruikers moeten goed kunnen lezer wat ze moeten invullen of waaruit ze kunnen kiezen.' }), '\n', (0, t.jsx)(n.p, { children: 'Het kleurcontrast van de tekst van labels en descriptions ten opzichte van de achtergrondkleur moet daarom 4,5:1 of hoger zijn.' }), '\n', (0, t.jsxs)(n.p, { children: ['Voldoende kleurcontrast van tekst is nodig om te voldoen aan het ', (0, t.jsx)(n.a, { href: '/wcag/1.4.3', children: 'WCAG-succescriterium 1.4.3 Contrast (minimum)' }), ' (niveau AA).'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   var p = l(55400);
   const m = { title: 'Geef tekst voldoende kleurcontrast \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tekst goed zichtbaar', pagination_label: 'Tekst goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    v = { id: 'richtlijnen/formulieren/visual-design/text-contrast/README', title: 'Geef tekst voldoende kleurcontrast \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.', source: '@site/docs/richtlijnen/formulieren/visual-design/2-text-contrast/README.mdx', sourceDirName: 'richtlijnen/formulieren/visual-design/2-text-contrast', slug: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/2-text-contrast/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef tekst voldoende kleurcontrast \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tekst goed zichtbaar', pagination_label: 'Tekst goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Invoerveld goed zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar' }, next: { title: 'Placeholder goed zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar' } },
    g = {},
    b = [];
   function _(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(p.ZP, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(_, { ...e }) }) : _();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => _ });
   var t = l(46506),
    o = l(4814),
    s = l(25585),
    a = l(40282),
    r = l(40678),
    c = l(85722),
    d = l(6374),
    i = l(75271),
    u = l(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = l(41179),
    h = l(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: (0, h.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, h.jsx)(t.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: (0, h.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   b.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: _ = !1, displayCode: y = !0, children: x, container: j = 'document', language: f, designTokens: k } = e,
     w = 'function' == typeof x ? x() : x,
     N = 'function' == typeof n ? n() : (0, i.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : u.uS(N || w),
     [C, Z] = (0, i.useState)(z),
     [S, F] = (0, i.useState)(_);
    (0, i.useEffect)(() => {
     (async () => {
      (C = await d.ZP.format(z, { parser: f, plugins: [s.Z, a.ZP, r.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), Z(C);
     })();
    }, [z]);
    const P = (0, i.useId)();
    let T = i.Fragment;
    return (
     'paragraph' === j ? (T = v) : 'document' === j ? (T = g) : 'surface' === j && (T = b),
     (0, h.jsxs)('div', {
      className: (0, o.Z)(p['nlds-canvas']),
      children: [
       w && (0, h.jsx)('div', { className: (0, o.Z)(p['nlds-canvas__example']), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, h.jsx)(T, { children: (0, h.jsx)(t.pu, { children: w }) }) }) }),
       y &&
        (0, h.jsx)('div', {
         className: (0, o.Z)(p['nlds-canvas__toolbar']),
         children: (0, h.jsx)(t.zx, {
          className: (0, o.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           F(!S);
          },
          'aria-expanded': S,
          'aria-controls': P,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, h.jsxs)('div', {
         className: (0, o.Z)(p['nlds-canvas__code-block'], !l && p['nlds-canvas__code-block--user-select-none']),
         id: P,
         hidden: !S,
         children: [
          (0, h.jsx)(m.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: C, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, o.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, h.jsx)(t.zx, {
             className: (0, o.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
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
   l.d(n, { u: () => d });
   var t = l(46506),
    o = l(70739),
    s = l(75271),
    a = l(91050);
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
   var c = l(52676);
   function d(e) {
    let { lineNumber: n, syntax: l, textContent: d, trim: i } = e,
     u = d;
    const { title: p, type: m } = (0, s.useContext)(a.n),
     h = (0, s.useId)();
    return (
     i && (u = u.trim()),
     (0, c.jsx)(o.y$, {
      theme: r,
      code: u,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: o, getLineProps: s, getTokenProps: a } = e;
       return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(t.dn, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': h, style: l, children: o.map((e, l) => (0, c.jsxs)('span', { ...s({ line: e }), children: [n && (0, c.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, c.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { n: () => i, X: () => u });
   var t = l(77355),
    o = l(67663),
    s = l(46506),
    a = l(4814),
    r = l(75271);
   const c = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var d = l(52676);
   const i = (0, r.createContext)({}),
    u = (e) => {
     let { title: n, appearance: l, description: r, children: u, figure: p } = e;
     const m = { do: 'Doen', dont: 'Niet doen' },
      h = p ? 'figure' : 'div',
      v = p ? 'figcaption' : 'div';
     return (0, d.jsxs)(h, { className: (0, a.Z)(c['nlds-guideline'], c[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(v, { className: (0, a.Z)(c['nlds-guideline__description']), children: ['dont' === l ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(s.nv, { className: (0, a.Z)(c['nlds-guideline__badge'], c[`nlds-guideline__badge--${l}`]), children: [(0, d.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: c['nlds-guideline__icon'] }), (0, d.jsx)('span', { className: c['nlds-guideline__title'], children: m.dont })] }), (0, d.jsx)(s.nv, { children: n })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(s.nv, { className: (0, a.Z)(c['nlds-guideline__badge'], c[`nlds-guideline__badge--${l}`]), children: [(0, d.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: c['nlds-guideline__icon'] }), (0, d.jsx)('span', { className: c['nlds-guideline__title'], children: m.do })] }), (0, d.jsx)(s.nv, { children: n })] }), r] }), (0, d.jsx)('div', { className: (0, a.Z)(c['nlds-guideline__example']), children: (0, d.jsx)(i.Provider, { value: { title: n, type: m[l] }, children: u }) })] });
    };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => r, a: () => a });
   var t = l(75271);
   const o = {},
    s = t.createContext(o);
   function a(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
