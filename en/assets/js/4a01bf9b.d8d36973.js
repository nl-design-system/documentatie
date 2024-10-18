'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [13612],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => r });
   var o = l(52676),
    s = l(24785);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  88566: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => _, contentTitle: () => h, default: () => y, frontMatter: () => p, metadata: () => m, toc: () => g });
   var o = l(52676),
    s = l(24785),
    t = l(98480),
    r = l(91050);
   function c(e) {
    const n = { input: 'input', label: 'label', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(r.X, { appearance: 'do', title: 'De placeholder opacity: 1 meegeven in de CSS.', children: (0, o.jsx)(t.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'auto', children: 'Welk auto rij je?' }), (0, o.jsx)(n.input, { class: 'nlds-opacity', id: 'auto', name: 'merk', type: 'text', placeholder: 'Vul een merknaam in' })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', p: 'p', pre: 'pre', strong: 'strong', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'zorg-voor-een-goed-kleurcontrast-van-de-placeholdertekst', children: 'Zorg voor een goed kleurcontrast van de placeholdertekst' }), '\n', (0, o.jsx)(n.p, { children: 'Kleurcontrast voor tekst ten opzichte van de achtergrond moet voldoen aan WCAG, dit geldt ook voor placeholders.' }), '\n', (0, o.jsxs)(n.p, { children: ['Sommige browsers zoals Firefox maken placeholdertekst standaard doorzichtiger. Voeg daarom in de CSS ', (0, o.jsx)(n.code, { children: 'opacity: 1' }), ' toe voor de placeholder.'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css!', children: '::placeholder {\n    opacity: 1;\n    color: #757575;\n}\n' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Zie ', (0, o.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder', children: '::placeholder - CSS: Cascading Style Sheets' }), ', op MDN.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Tip:' }), ' De lichtste kleur grijs die je kunt gebruiken ten opzichte van een witte achtergrond is #757575 of rgb( 117, 117, 117).'] }), '\n', (0, o.jsxs)(n.p, { children: ['Voldoende kleurcontrast tussen placeholder en achtergrond is nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/1.4.3', children: 'WCAG-succescriterium 1.4.3 Contrast (minimum)' }), ' (niveau AA).'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   var u = l(55400);
   const p = { title: 'Zorg voor een goed kleurcontrast van de placeholdertekst \xb7 Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kleurcontrast', pagination_label: 'Placeholder kleurcontrast', description: 'Richtlijnen voor voldoende kleurcontrast.', slug: '/richtlijnen/formulieren/placeholders/kleurcontrast', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    m = { id: 'richtlijnen/formulieren/placeholder/colour-contrast/README', title: 'Zorg voor een goed kleurcontrast van de placeholdertekst \xb7 Placeholders in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor voldoende kleurcontrast.', source: '@site/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/README.mdx', sourceDirName: 'richtlijnen/formulieren/placeholder/4-colour-contrast', slug: '/richtlijnen/formulieren/placeholders/kleurcontrast', permalink: '/en/richtlijnen/formulieren/placeholders/kleurcontrast', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zorg voor een goed kleurcontrast van de placeholdertekst \xb7 Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kleurcontrast', pagination_label: 'Placeholder kleurcontrast', description: 'Richtlijnen voor voldoende kleurcontrast.', slug: '/richtlijnen/formulieren/placeholders/kleurcontrast', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Placeholder kan verwarren', permalink: '/en/richtlijnen/formulieren/placeholders/verwarring-voorkomen' }, next: { title: 'Toetsenbord', permalink: '/en/richtlijnen/formulieren/toetsenbord/' } },
    _ = {},
    g = [];
   function v(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(i, {}), '\n', (0, o.jsx)(a, {}), '\n', (0, o.jsx)(u.ZP, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => y });
   var o = l(46506),
    s = l(4814),
    t = l(25585),
    r = l(40282),
    c = l(40678),
    a = l(85722),
    d = l(6374),
    i = l(75271),
    u = l(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var h = l(41179),
    m = l(52676);
   const _ = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, m.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, m.jsx)(o.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   _.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, m.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   v.displayName = 'SurfaceContainer';
   const y = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: y = !1, displayCode: b = !0, children: x, container: j = 'document', language: k, designTokens: f } = e,
     N = 'function' == typeof x ? x() : x,
     Z = 'function' == typeof n ? n() : (0, i.isValidElement)(n) ? n : void 0,
     S = 'string' == typeof n ? n : u.uS(Z || N),
     [w, C] = (0, i.useState)(S),
     [P, z] = (0, i.useState)(y);
    (0, i.useEffect)(() => {
     (async () => {
      (w = await d.ZP.format(S, { parser: k, plugins: [t.Z, r.ZP, c.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(w);
     })();
    }, [S]);
    const D = (0, i.useId)();
    let E = i.Fragment;
    return (
     'paragraph' === j ? (E = _) : 'document' === j ? (E = g) : 'surface' === j && (E = v),
     (0, m.jsxs)('div', {
      className: (0, s.Z)(p['nlds-canvas']),
      children: [
       N && (0, m.jsx)('div', { className: (0, s.Z)(p['nlds-canvas__example']), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(E, { children: (0, m.jsx)(o.pu, { children: N }) }) }) }),
       b &&
        (0, m.jsx)('div', {
         className: (0, s.Z)(p['nlds-canvas__toolbar']),
         children: (0, m.jsx)(o.zx, {
          className: (0, s.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           z(!P);
          },
          'aria-expanded': P,
          'aria-controls': D,
          children: P ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, m.jsxs)('div', {
         className: (0, s.Z)(p['nlds-canvas__code-block'], !l && p['nlds-canvas__code-block--user-select-none']),
         id: D,
         hidden: !P,
         children: [
          (0, m.jsx)(h.u, { syntax: k, textContent: w, trim: !0 }),
          l &&
           (0, m.jsx)('div', {
            className: (0, s.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, m.jsx)(o.zx, {
             className: (0, s.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(w).catch((e) => console.error('Copy code failed', e));
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
   function c(e) {
    let { lineNumber: n, syntax: l, textContent: c, trim: a } = e,
     d = c;
    return (
     a && (d = d.trim()),
     (0, r.jsx)(s.y$, {
      theme: t,
      code: d,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: s, getLineProps: t, getTokenProps: c } = e;
       return (0, r.jsx)(o.dn, { style: l, children: s.map((e, l) => (0, r.jsxs)('span', { ...t({ line: e }), children: [n && (0, r.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, r.jsx)('span', { ...c({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => d });
   var o = l(77355),
    s = l(67663),
    t = l(46506),
    r = l(4814);
   l(75271);
   const c = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var a = l(52676);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: i, figure: u } = e;
    const p = 'Doen',
     h = 'Niet doen',
     m = u ? 'figure' : 'div',
     _ = u ? 'figcaption' : 'div';
    return (0, a.jsxs)(m, { className: (0, r.Z)(c['nlds-guideline'], c[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(_, { className: (0, r.Z)(c['nlds-guideline__description']), children: ['dont' === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, r.Z)(c['nlds-guideline__badge'], c[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(o.Z, { className: c['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: c['nlds-guideline__title'], children: h })] }), (0, a.jsx)(t.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, r.Z)(c['nlds-guideline__badge'], c[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(s.Z, { className: c['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: c['nlds-guideline__title'], children: p })] }), (0, a.jsx)(t.nv, { children: n })] }), d] }), (0, a.jsx)('div', { className: (0, r.Z)(c['nlds-guideline__example']), children: i })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => c, a: () => r });
   var o = l(75271);
   const s = {},
    t = o.createContext(s);
   function r(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), o.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
