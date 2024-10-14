'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [37572],
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
  14538: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => v, contentTitle: () => m, default: () => y, frontMatter: () => h, metadata: () => g, toc: () => _ });
   var o = l(52676),
    t = l(24785),
    s = l(98480),
    r = l(91050),
    c = l(46506);
   function a(e) {
    const n = { input: 'input', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(r.X, { appearance: 'do', title: 'Maak de placeholder goed leesbaar door voldoende contrast.', description: (0, o.jsxs)(o.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, o.jsx)(c.rU, { href: '/contrast/?color=%23606060&background-color=%23ffffff', children: 'een contrast van 6.28:1' }), '.'] }), children: (0, o.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-placeholder-color': '#606060' }, children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(n.input, { placeholder: 'Zoeken' }) }) }) }), '\n', (0, o.jsx)(r.X, { appearance: 'dont', title: 'Maak de placeholder slecht zichtbaar door te laag contrast.', description: (0, o.jsxs)(o.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, o.jsx)(c.rU, { href: '/contrast/?color=%23888888&background-color=%23ffffff', children: 'een contrast van 3.54:1' }), '.'] }), children: (0, o.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-placeholder-color': '#888888' }, children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(n.input, { placeholder: 'Zoeken' }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   function i(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'geef-placeholders-voldoende-kleurcontrast', children: 'Geef placeholders voldoende kleurcontrast' }), '\n', (0, o.jsx)(n.p, { children: 'Ook het kleurcontrast van de tekst van placeholders ten opzichte van de achtergrondkleur moet 4,5:1 of hoger zijn.' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Let op' }), ': sommige browsers geven een placeholder lichter weer dan in de CSS is bepaald. Dit wordt verder uitgelegd bij de richtlijn ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/kleurcontrast', children: 'Zorg voor een goed kleurcontrast van de placeholdertekst' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   var p = l(55400);
   const h = { title: 'Geef placeholders voldoende kleurcontrast | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder goed zichtbaar', pagination_label: 'Placeholder goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de placeholder van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    g = { id: 'richtlijnen/formulieren/visual-design/placeholder-contrast/README', title: 'Geef placeholders voldoende kleurcontrast | Visueel ontwerp van een formulier | Richtlijnen', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de placeholder van een formulierveld is.', source: '@site/docs/richtlijnen/formulieren/visual-design/3-placeholder-contrast/README.mdx', sourceDirName: 'richtlijnen/formulieren/visual-design/3-placeholder-contrast', slug: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/3-placeholder-contrast/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef placeholders voldoende kleurcontrast | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder goed zichtbaar', pagination_label: 'Placeholder goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de placeholder van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Tekst goed zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar' }, next: { title: 'Focus goed zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar' } },
    v = {},
    _ = [];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(p.ZP, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => b });
   var o = l(46506),
    t = l(4814),
    s = l(25585),
    r = l(40282),
    c = l(40678),
    a = l(85722),
    d = l(6374),
    i = l(75271),
    u = l(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var h = l(41179),
    m = l(52676);
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, m.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, m.jsx)(o.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   g.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, m.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const _ = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   _.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: b = !1, displayCode: y = !0, children: f, container: x = 'document', language: j, designTokens: k } = e,
     w = 'function' == typeof f ? f() : f,
     N = 'function' == typeof n ? n() : (0, i.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [z, C] = (0, i.useState)(Z),
     [S, P] = (0, i.useState)(b);
    (0, i.useEffect)(() => {
     (async () => {
      (z = await d.ZP.format(Z, { parser: j, plugins: [s.Z, r.ZP, c.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(z);
     })();
    }, [Z]);
    const D = (0, i.useId)();
    let F = i.Fragment;
    return (
     'paragraph' === x ? (F = g) : 'document' === x ? (F = v) : 'surface' === x && (F = _),
     (0, m.jsxs)('div', {
      className: (0, t.Z)(p['nlds-canvas']),
      children: [
       w && (0, m.jsx)('div', { className: (0, t.Z)(p['nlds-canvas__example']), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(F, { children: (0, m.jsx)(o.pu, { children: w }) }) }) }),
       y &&
        (0, m.jsx)('div', {
         className: (0, t.Z)(p['nlds-canvas__toolbar']),
         children: (0, m.jsx)(o.zx, {
          className: (0, t.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           P(!S);
          },
          'aria-expanded': S,
          'aria-controls': D,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, m.jsxs)('div', {
         className: (0, t.Z)(p['nlds-canvas__code-block'], !l && p['nlds-canvas__code-block--user-select-none']),
         id: D,
         hidden: !S,
         children: [
          (0, m.jsx)(h.u, { syntax: j, textContent: z, trim: !0 }),
          l &&
           (0, m.jsx)('div', {
            className: (0, t.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, m.jsx)(o.zx, {
             className: (0, t.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(z).catch((e) => console.error('Copy code failed', e));
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
   function c(e) {
    let { lineNumber: n, syntax: l, textContent: c, trim: a } = e,
     d = c;
    return (
     a && (d = d.trim()),
     (0, r.jsx)(t.y$, {
      theme: s,
      code: d,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: t, getLineProps: s, getTokenProps: c } = e;
       return (0, r.jsx)(o.dn, { style: l, children: t.map((e, l) => (0, r.jsxs)('span', { ...s({ line: e }), children: [n && (0, r.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, r.jsx)('span', { ...c({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => d });
   var o = l(77355),
    t = l(67663),
    s = l(46506),
    r = l(4814);
   l(75271);
   const c = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var a = l(52676);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: i, figure: u } = e;
    const p = 'Doen',
     h = 'Niet doen',
     m = u ? 'figure' : 'div',
     g = u ? 'figcaption' : 'div';
    return (0, a.jsxs)(m, { className: (0, r.Z)(c['nlds-guideline'], c[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(g, { className: (0, r.Z)(c['nlds-guideline__description']), children: ['dont' === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)(c['nlds-guideline__badge'], c[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(o.Z, { className: c['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: c['nlds-guideline__title'], children: h })] }), (0, a.jsx)(s.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)(c['nlds-guideline__badge'], c[`nlds-guideline__badge--${l}`]), children: [(0, a.jsx)(t.Z, { className: c['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: c['nlds-guideline__title'], children: p })] }), (0, a.jsx)(s.nv, { children: n })] }), d] }), (0, a.jsx)('div', { className: (0, r.Z)(c['nlds-guideline__example']), children: i })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => c, a: () => r });
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
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
