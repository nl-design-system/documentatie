'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [17713],
 {
  33984: (e, n, l) => {
   l.d(n, { ZP: () => s });
   var o = l(52676),
    t = l(24785);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  77148: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => g, contentTitle: () => h, default: () => f, frontMatter: () => v, metadata: () => m, toc: () => b });
   var o = l(52676),
    t = l(24785),
    r = l(44585),
    s = l(33376),
    a = l(46506);
   function i(e) {
    const n = { div: 'div', fieldset: 'fieldset', input: 'input', label: 'label', legend: 'legend', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(s.X, { appearance: 'do', title: 'Geef invoerveld een duidelijke rand met voldoende contrast.', description: (0, o.jsxs)(o.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, o.jsx)(a.rU, { href: '/contrast/?color=%23006FA1&background-color=%23ffffff', children: 'een contrast van 5.54:1' }), '.'] }), children: (0, o.jsx)(r.X, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#006FA1' }, children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(n.input, { type: 'text' }) }) }) }), '\n', (0, o.jsx)(s.X, { appearance: 'do', title: 'Geef een radiobutton voldoende kleurcontrast.', description: (0, o.jsxs)(o.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, o.jsx)(a.rU, { href: '/contrast/?color=%23006FA1&background-color=%23ffffff', children: 'een contrast van 5.54:1' }), '.'] }), children: (0, o.jsx)(r.X, { language: 'html', designTokens: { '--utrecht-radio-button-background-color': '#FFFFFF', '--utrecht-radio-button-border-color': '#006FA1' }, children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(n.fieldset, { children: [(0, o.jsx)(n.legend, { children: 'Kies je kleur' }), (0, o.jsxs)(n.div, { children: [(0, o.jsx)(n.input, { type: 'radio', id: 'radio1', name: 'kleur' }), ' ', (0, o.jsx)(n.label, { for: 'radio1', children: 'Blauw' })] }), (0, o.jsxs)(n.div, { children: [(0, o.jsx)(n.input, { type: 'radio', id: 'radio2', name: 'kleur' }), ' ', (0, o.jsx)(n.label, { for: 'radio2', children: 'Groen' })] }), (0, o.jsxs)(n.div, { children: [(0, o.jsx)(n.input, { type: 'radio', id: 'radio3', name: 'kleur' }), ' ', (0, o.jsx)(n.label, { for: 'radio3', children: 'Rood' })] })] }) }) }) }), '\n', (0, o.jsx)(s.X, { appearance: 'dont', title: 'Geef invoerveld een slecht zichtbare rand met onvoldoende contrast.', description: (0, o.jsxs)(o.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, o.jsx)(a.rU, { href: '/contrast/?color=%23f8f5f1&background-color=%23ffffff', children: 'een contrast van 1.08:1' }), '.'] }), children: (0, o.jsx)(r.X, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#f8f4f1' }, children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(n.input, { type: 'text' }) }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function d(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'geef-duidelijk-aan-waar-een-invoerveld-is', children: 'Geef duidelijk aan waar een invoerveld is' }), '\n', (0, o.jsx)(n.p, { children: 'Gebruikers moeten herkennen waar en hoe groot het invoerveld, radiobutton of checkbox is.' }), '\n', (0, o.jsx)(n.p, { children: 'Het kleurcontrast van de randen (borders) ten opzichte van de achtergrondkleur moet daarom 3:1 of hoger zijn.' }), '\n', (0, o.jsxs)(n.p, { children: ['Het duidelijk aangeven van een invoerveld is nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/1.4.11/', children: 'WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content' }), ' (niveau AA).'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   var p = l(33984);
   const v = { title: 'Geef duidelijk aan waar een invoerveld is | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Invoerveld goed zichtbaar', pagination_label: 'Invoerveld goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    m = { id: 'richtlijnen/formulieren/visual-design/field-contrast/README', title: 'Geef duidelijk aan waar een invoerveld is | Visueel ontwerp van een formulier | Richtlijnen', description: 'Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.', source: '@site/docs/richtlijnen/formulieren/visual-design/1-field-contrast/README.mdx', sourceDirName: 'richtlijnen/formulieren/visual-design/1-field-contrast', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/1-field-contrast/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef duidelijk aan waar een invoerveld is | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Invoerveld goed zichtbaar', pagination_label: 'Invoerveld goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Visueel ontwerp van formulieren', permalink: '/richtlijnen/formulieren/visueel-ontwerp/' }, next: { title: 'Tekst goed zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar' } },
    g = {},
    b = [];
   function _(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(p.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(_, { ...e }) }) : _();
   }
  },
  44585: (e, n, l) => {
   l.d(n, { X: () => _ });
   var o = l(46506),
    t = l(4814),
    r = l(25585),
    s = l(40282),
    a = l(40678),
    i = l(85722),
    c = l(6374),
    d = l(75271),
    u = l(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var v = l(41179),
    h = l(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, h.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, h.jsx)(o.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, h.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   b.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: _ = !1, displayCode: f = !0, children: x, container: j = 'document', language: y, designTokens: k } = e,
     w = 'function' == typeof x ? x() : x,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : u.uS(N || w),
     [F, Z] = (0, d.useState)(z),
     [C, S] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (F = await c.ZP.format(z, { parser: y, plugins: [r.Z, s.ZP, a.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), Z(F);
     })();
    }, [z]);
    const A = (0, d.useId)();
    let D = d.Fragment;
    return (
     'paragraph' === j ? (D = m) : 'document' === j ? (D = g) : 'surface' === j && (D = b),
     (0, h.jsxs)('div', {
      className: (0, t.Z)(p['nlds-canvas']),
      children: [
       w && (0, h.jsx)('div', { className: (0, t.Z)(p['nlds-canvas__example']), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, h.jsx)(D, { children: (0, h.jsx)(o.pu, { children: w }) }) }) }),
       f &&
        (0, h.jsx)('div', {
         className: (0, t.Z)(p['nlds-canvas__toolbar']),
         children: (0, h.jsx)(o.zx, {
          className: (0, t.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           S(!C);
          },
          'aria-expanded': C,
          'aria-controls': A,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       f &&
        (0, h.jsxs)('div', {
         className: (0, t.Z)(p['nlds-canvas__code-block'], !l && p['nlds-canvas__code-block--user-select-none']),
         id: A,
         hidden: !C,
         children: [
          (0, h.jsx)(v.u, { syntax: y, textContent: F, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, t.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, h.jsx)(o.zx, {
             className: (0, t.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(F).catch((e) => console.error('Copy code failed', e));
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
   var o = l(46506),
    t = l(12429);
   l(75271);
   const r = {
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
   var s = l(52676);
   function a(e) {
    let { lineNumber: n, syntax: l, textContent: a, trim: i } = e,
     c = a;
    return (
     i && (c = c.trim()),
     (0, s.jsx)(t.y$, {
      theme: r,
      code: c,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: t, getLineProps: r, getTokenProps: a } = e;
       return (0, s.jsx)(o.dn, { style: l, children: t.map((e, l) => (0, s.jsxs)('span', { ...r({ line: e }), children: [n && (0, s.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, s.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  33376: (e, n, l) => {
   l.d(n, { X: () => c });
   var o = l(74986),
    t = l(77380),
    r = l(46506),
    s = l(4814);
   l(75271);
   const a = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = l(52676);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: d, figure: u } = e;
    const p = 'Doen',
     v = 'Niet doen',
     h = u ? 'figure' : 'div',
     m = u ? 'figcaption' : 'div';
    return (0, i.jsxs)(h, { className: (0, s.Z)(a['nlds-guideline'], a[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: (0, s.Z)(a['nlds-guideline__description']), children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, s.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(o.Z, { className: a['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: a['nlds-guideline__title'], children: v })] }), (0, i.jsx)(r.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, s.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(t.Z, { className: a['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: a['nlds-guideline__title'], children: p })] }), (0, i.jsx)(r.nv, { children: n })] }), c] }), (0, i.jsx)('div', { className: (0, s.Z)(a['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => a, a: () => s });
   var o = l(75271);
   const t = {},
    r = o.createContext(t);
   function s(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
