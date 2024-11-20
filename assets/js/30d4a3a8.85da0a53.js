'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [59590],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => t });
   var o = l(52676),
    r = l(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  24972: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => v, contentTitle: () => m, default: () => _, frontMatter: () => p, metadata: () => h, toc: () => g });
   var o = l(52676),
    r = l(24785),
    s = l(98480),
    t = l(91050);
   function a(e) {
    const n = { input: 'input', label: 'label', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(t.X, { appearance: 'do', title: 'Geen placeholder gebruiken als het label duidelijk genoeg is.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'voornaam1', children: 'Je voornaam' }), (0, o.jsx)(n.input, { autocomplete: 'given-name', id: 'voornaam1', name: 'voornaam', type: 'text' })] }) }) }), '\n', (0, o.jsx)(t.X, { appearance: 'dont', title: 'De labeltekst herhalen in de placeholder.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'voornaam2', children: 'Voornaam' }), (0, o.jsx)(n.input, { autocomplete: 'given-name', id: 'voornaam2', name: 'voornaam', placeholder: 'Voornaam', type: 'text' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   function i(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'voorkom-verwarring-bij-de-gebruiker', children: 'Voorkom verwarring bij de gebruiker' }), '\n', (0, o.jsxs)(n.p, { children: ['De placeholder kan ook voor verwarring zorgen bij gebruikers. Is een veld al ingevuld? De combinatie van een label met een ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions', children: 'description' }), ' is een betere manier om de gebruiker te vertellen hoe een veld in te vullen. Herhaal nooit de labeltekst in de placeholder, dat geeft geen extra informatie en is dus zinloos.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Zie het onderzoek ', (0, o.jsx)(n.a, { href: 'https://www.nngroup.com/articles/form-design-placeholders/', children: (0, o.jsx)('span', { lang: 'en', children: 'Placeholders in Form Fields Are Harmful' }) }), ' van de Nielsen Norman Group en ', (0, o.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-placeholders-and-what-to-do-instead/', children: 'The problem with placeholders and what to do instead' }), ' van Adam Silver.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   var u = l(55400);
   const p = { title: 'Voorkom verwarring bij de gebruiker \xb7 Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kan verwarren', pagination_label: 'Placeholder kan verwarren', description: 'Richtlijnen om verwarring bij de gebruiker te voorkomen.', slug: '/richtlijnen/formulieren/placeholders/verwarring-voorkomen', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    h = { id: 'richtlijnen/formulieren/placeholder/clarity/README', title: 'Voorkom verwarring bij de gebruiker \xb7 Placeholders in een formulier \xb7 Richtlijnen', description: 'Richtlijnen om verwarring bij de gebruiker te voorkomen.', source: '@site/docs/richtlijnen/formulieren/placeholder/3-clarity/README.mdx', sourceDirName: 'richtlijnen/formulieren/placeholder/3-clarity', slug: '/richtlijnen/formulieren/placeholders/verwarring-voorkomen', permalink: '/richtlijnen/formulieren/placeholders/verwarring-voorkomen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/3-clarity/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Voorkom verwarring bij de gebruiker \xb7 Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kan verwarren', pagination_label: 'Placeholder kan verwarren', description: 'Richtlijnen om verwarring bij de gebruiker te voorkomen.', slug: '/richtlijnen/formulieren/placeholders/verwarring-voorkomen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Placeholder bij zoekfunctie', permalink: '/richtlijnen/formulieren/placeholders/zoekfunctie' }, next: { title: 'Placeholder kleurcontrast', permalink: '/richtlijnen/formulieren/placeholders/kleurcontrast' } },
    v = {},
    g = [];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(u.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => _ });
   var o = l(46506),
    r = l(4814),
    s = l(25585),
    t = l(40282),
    a = l(40678),
    c = l(85722),
    i = l(6374),
    d = l(75271),
    u = l(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = l(41179),
    h = l(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, h.jsx)(o.BB, { className: (0, r.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, h.jsx)(o.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, h.jsx)(o.BB, { className: (0, r.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   b.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: _ = !1, displayCode: y = !0, children: j, container: x = 'document', language: k, designTokens: f } = e,
     w = 'function' == typeof j ? j() : j,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [P, C] = (0, d.useState)(Z),
     [S, z] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (P = await i.ZP.format(Z, { parser: k, plugins: [s.Z, t.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(P);
     })();
    }, [Z]);
    const F = (0, d.useId)();
    let D = d.Fragment;
    return (
     'paragraph' === x ? (D = v) : 'document' === x ? (D = g) : 'surface' === x && (D = b),
     (0, h.jsxs)('div', {
      className: (0, r.Z)(p['nlds-canvas']),
      children: [
       w && (0, h.jsx)('div', { className: (0, r.Z)(p['nlds-canvas__example']), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, h.jsx)(D, { children: (0, h.jsx)(o.pu, { children: w }) }) }) }),
       y &&
        (0, h.jsx)('div', {
         className: (0, r.Z)(p['nlds-canvas__toolbar']),
         children: (0, h.jsx)(o.zx, {
          className: (0, r.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           z(!S);
          },
          'aria-expanded': S,
          'aria-controls': F,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, h.jsxs)('div', {
         className: (0, r.Z)(p['nlds-canvas__code-block'], !l && p['nlds-canvas__code-block--user-select-none']),
         id: F,
         hidden: !S,
         children: [
          (0, h.jsx)(m.u, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: P, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, r.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, h.jsx)(o.zx, {
             className: (0, r.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
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
   l.d(n, { u: () => i });
   var o = l(46506),
    r = l(70739),
    s = l(75271),
    t = l(91050);
   const a = {
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
   function i(e) {
    let { lineNumber: n, syntax: l, textContent: i, trim: d } = e,
     u = i;
    const { title: p, type: m } = (0, s.useContext)(t.n),
     h = (0, s.useId)();
    return (
     d && (u = u.trim()),
     (0, c.jsx)(r.y$, {
      theme: a,
      code: u,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: r, getLineProps: s, getTokenProps: t } = e;
       return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(o.dn, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': h, style: l, children: r.map((e, l) => (0, c.jsxs)('span', { ...s({ line: e }), children: [n && (0, c.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, c.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { n: () => d, X: () => u });
   var o = l(77355),
    r = l(67663),
    s = l(46506),
    t = l(4814),
    a = l(75271);
   const c = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = l(52676);
   const d = (0, a.createContext)({}),
    u = (e) => {
     let { title: n, appearance: l, description: a, children: u, figure: p } = e;
     const m = { do: 'Doen', dont: 'Niet doen' },
      h = p ? 'figure' : 'div',
      v = p ? 'figcaption' : 'div';
     return (0, i.jsxs)(h, { className: (0, t.Z)(c['nlds-guideline'], c[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(v, { className: (0, t.Z)(c['nlds-guideline__description']), children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, t.Z)(c['nlds-guideline__badge'], c[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: c['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: c['nlds-guideline__title'], children: m.dont })] }), (0, i.jsx)(s.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, t.Z)(c['nlds-guideline__badge'], c[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: c['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: c['nlds-guideline__title'], children: m.do })] }), (0, i.jsx)(s.nv, { children: n })] }), a] }), (0, i.jsx)('div', { className: (0, t.Z)(c['nlds-guideline__example']), children: (0, i.jsx)(d.Provider, { value: { title: n, type: m[l] }, children: u }) })] });
    };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => a, a: () => t });
   var o = l(75271);
   const r = {},
    s = o.createContext(r);
   function t(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
