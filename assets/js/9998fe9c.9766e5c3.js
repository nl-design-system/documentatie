'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [97366],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => i });
   var s = l(52676),
    t = l(24785);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(o, { ...e }) }) : o(e);
   }
  },
  55875: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => b, contentTitle: () => g, default: () => h, frontMatter: () => u, metadata: () => m, toc: () => _ });
   var s = l(52676),
    t = l(24785),
    o = l(98480),
    i = l(91050);
   function r(e) {
    const n = { div: 'div', fieldset: 'fieldset', input: 'input', label: 'label', legend: 'legend', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(i.X, { appearance: 'do', title: 'Koppel een description aan de legend van de fieldset, met aria-describedby.', children: (0, s.jsx)(o.X, { language: 'html', children: () => (0, s.jsxs)(n.fieldset, { 'aria-describedby': 'description-inloggen', children: [(0, s.jsx)(n.legend, { children: 'Wilt u inloggen?' }), (0, s.jsx)(n.p, { id: 'description-inloggen', children: 'Als u inlogt worden uw gegevens al ingevuld en kunnen we u makkelijker helpen.' }), (0, s.jsxs)(n.div, { children: [(0, s.jsx)(n.input, { id: 'inloggen-ja', type: 'radio', name: 'inloggen', value: 'ja' }), (0, s.jsx)(n.label, { for: 'inloggen-ja', children: ' Ja' })] }), (0, s.jsxs)(n.div, { children: [(0, s.jsx)(n.input, { id: 'inloggen-nee', type: 'radio', name: 'inloggen', value: 'nee' }), (0, s.jsx)(n.label, { for: 'inloggen-nee', children: ' Nee' })] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
   function c(e) {
    const n = { h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'fieldset-plaats-descriptions-tussen-legend-en-eerste-item', children: 'Fieldset: Plaats descriptions tussen legend en eerste item' }), '\n', (0, s.jsx)(n.p, { children: 'Radiobuttons en checkboxes worden gegroepeerd in een fieldset. De "vraag" staat in de legend. Plaats de description dan onder de legend vlak boven het eerste label/formulierveld. De description kan aan de fieldset worden gekoppeld.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   var p = l(55400);
   const u = { title: 'Plaats descriptions bij een fieldset tussen legend en eerste item \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Description bij fieldsets', pagination_label: 'Description bij fieldsets', description: 'Richtlijnen voor plaatsing van een descriptions bij een fieldset.', slug: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    m = { id: 'richtlijnen/formulieren/description/fieldset/README', title: 'Plaats descriptions bij een fieldset tussen legend en eerste item \xb7 Descriptions in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor plaatsing van een descriptions bij een fieldset.', source: '@site/docs/richtlijnen/formulieren/description/4-fieldset/README.mdx', sourceDirName: 'richtlijnen/formulieren/description/4-fieldset', slug: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset', permalink: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/4-fieldset/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Plaats descriptions bij een fieldset tussen legend en eerste item \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Description bij fieldsets', pagination_label: 'Description bij fieldsets', description: 'Richtlijnen voor plaatsing van een descriptions bij een fieldset.', slug: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Meerdere descriptions', permalink: '/richtlijnen/formulieren/descriptions/meerdere-koppelen' }, next: { title: 'Grootte aanklikbaar gedeelte', permalink: '/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte' } },
    b = {},
    _ = [];
   function v(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(a, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(p.ZP, {})] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(v, { ...e }) }) : v();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => h });
   var s = l(46506),
    t = l(4814),
    o = l(25585),
    i = l(40282),
    r = l(40678),
    d = l(85722),
    c = l(6374),
    a = l(75271),
    p = l(60027);
   const u = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var g = l(41179),
    m = l(52676);
   const b = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(s.Tg, { className: u['nlds-canvas__example-surface'], children: (0, m.jsx)(s.BB, { className: (0, t.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: (0, m.jsx)(s.nv, { className: u['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   b.displayName = 'ParagraphContainer';
   const _ = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(s.Tg, { className: u['nlds-canvas__example-surface'], children: (0, m.jsx)(s.BB, { className: (0, t.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: n }) });
   };
   _.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(s.Tg, { className: u['nlds-canvas__example-surface'], children: n });
   };
   v.displayName = 'SurfaceContainer';
   const h = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: h = !1, displayCode: y = !0, children: j, container: x = 'document', language: f, designTokens: k } = e,
     N = 'function' == typeof j ? j() : j,
     w = 'function' == typeof n ? n() : (0, a.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : p.uS(w || N),
     [C, D] = (0, a.useState)(Z),
     [P, S] = (0, a.useState)(h);
    (0, a.useEffect)(() => {
     (async () => {
      (C = await c.ZP.format(Z, { parser: f, plugins: [o.Z, i.ZP, r.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), D(C);
     })();
    }, [Z]);
    const R = (0, a.useId)();
    let z = a.Fragment;
    return (
     'paragraph' === x ? (z = b) : 'document' === x ? (z = _) : 'surface' === x && (z = v),
     (0, m.jsxs)('div', {
      className: (0, t.Z)(u['nlds-canvas']),
      children: [
       N && (0, m.jsx)('div', { className: (0, t.Z)(u['nlds-canvas__example']), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(z, { children: (0, m.jsx)(s.pu, { children: N }) }) }) }),
       y &&
        (0, m.jsx)('div', {
         className: (0, t.Z)(u['nlds-canvas__toolbar']),
         children: (0, m.jsx)(s.zx, {
          className: (0, t.Z)(u['nlds-canvas__button'], u['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           S(!P);
          },
          'aria-expanded': P,
          'aria-controls': R,
          children: P ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, m.jsxs)('div', {
         className: (0, t.Z)(u['nlds-canvas__code-block'], !l && u['nlds-canvas__code-block--user-select-none']),
         id: R,
         hidden: !P,
         children: [
          (0, m.jsx)(g.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: C, trim: !0 }),
          l &&
           (0, m.jsx)('div', {
            className: (0, t.Z)(u['nlds-canvas__toolbar'], u['nlds-canvas__toolbar--copy']),
            children: (0, m.jsx)(s.zx, {
             className: (0, t.Z)(u['nlds-canvas__button'], u['nlds-canvas__copy-button']),
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
   var s = l(46506),
    t = l(70739),
    o = l(75271),
    i = l(91050);
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
   var d = l(52676);
   function c(e) {
    let { lineNumber: n, syntax: l, textContent: c, trim: a } = e,
     p = c;
    const { title: u, type: g } = (0, o.useContext)(i.n),
     m = (0, o.useId)();
    return (
     a && (p = p.trim()),
     (0, d.jsx)(t.y$, {
      theme: r,
      code: p,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: t, getLineProps: o, getTokenProps: i } = e;
       return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', g ? `\u201c${g}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, d.jsx)(s.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: l, children: t.map((e, l) => (0, d.jsxs)('span', { ...o({ line: e }), children: [n && (0, d.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, d.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { n: () => a, X: () => p });
   var s = l(77355),
    t = l(67663),
    o = l(46506),
    i = l(4814),
    r = l(75271);
   const d = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var c = l(52676);
   const a = (0, r.createContext)({}),
    p = (e) => {
     let { title: n, appearance: l, description: r, children: p, figure: u } = e;
     const g = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      b = u ? 'figcaption' : 'div';
     return (0, c.jsxs)(m, { className: (0, i.Z)(d['nlds-guideline'], d[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(b, { className: (0, i.Z)(d['nlds-guideline__description']), children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.nv, { className: (0, i.Z)(d['nlds-guideline__badge'], d[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: d['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: d['nlds-guideline__title'], children: g.dont })] }), (0, c.jsx)(o.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.nv, { className: (0, i.Z)(d['nlds-guideline__badge'], d[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: d['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: d['nlds-guideline__title'], children: g.do })] }), (0, c.jsx)(o.nv, { children: n })] }), r] }), (0, c.jsx)('div', { className: (0, i.Z)(d['nlds-guideline__example']), children: (0, c.jsx)(a.Provider, { value: { title: n, type: g[l] }, children: p }) })] });
    };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => r, a: () => i });
   var s = l(75271);
   const t = {},
    o = s.createContext(t);
   function i(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : i(e.components)), s.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
