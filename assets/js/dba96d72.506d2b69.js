'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [54862],
 {
  66968: (e, n, l) => {
   l.d(n, { ZP: () => s });
   var r = l(52676),
    o = l(40139);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  78518: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => v, contentTitle: () => m, default: () => j, frontMatter: () => p, metadata: () => h, toc: () => b });
   var r = l(52676),
    o = l(40139),
    t = l(66968),
    s = l(43599),
    i = l(40761);
   function a(e) {
    const n = { a: 'a', h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(i.X, { appearance: 'do', title: 'De link boven het gerelateerde invoerveld plaatsen.', children: (0, r.jsx)(s.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '#', children: 'Voorwaarden vrijwilligerswerk' }), '.'] }), (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.input, { type: 'checkbox', name: 'vrijwilliger', id: 'vrijwilliger' }), (0, r.jsx)(n.label, { htmlFor: 'vrijwilliger', children: 'Ik wil vrijwilliger worden' })] })] }) }) }), '\n', (0, r.jsx)(i.X, { appearance: 'dont', title: 'De link onder het gerelateerde invoerveld plaatsen.', children: (0, r.jsx)(s.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.input, { type: 'checkbox', name: 'vrijwilliger', id: 'vrijwilliger' }), (0, r.jsx)(n.label, { htmlFor: 'vrijwilliger', children: 'Ik wil vrijwilliger worden' })] }), (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '#', children: 'Voorwaarden vrijwilligerswerk' }), '.'] })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { h1: 'h1', p: 'p', strong: 'strong', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'plaats-de-link-boven-het-gerelateerde-formulierveld', children: 'Plaats de link boven het gerelateerde formulierveld' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruikers lezen van boven naar beneden. Dan is het fijn als eerst de link met meer informatie komt, en daarna pas het gerelateerde formulierveld. Geef dus eerst de link met de informatie die nodig is om een keuze te maken en dan pas het formulierveld waarop deze informatie van toepassing is.' }), '\n', (0, r.jsx)(n.p, { children: 'Je kunt informatie ook boven het formulier vermelden, zodat gebruikers alvast voorbereid zijn.\nBijvoorbeeld als de gebruiker een paspoort- of burgerservicenummer nodig heeft, of als er een tijdslimiet op het invullen van het formulier staat ingesteld.' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': de link moet niet alleen visueel, maar ook in de DOM (Document Object Modal) in de goede volgorde staan.\nDus een link visueel verplaatsen via bijvoorbeeld flex-order is niet voldoende. De DOM-order is echt belangrijk voor screenreadergebruikers.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   const p = { title: 'Plaats de link boven het gerelateerde formulierveld \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing link', pagination_label: 'Plaatsing link', description: 'Richtlijnen voor link boven het gerelateerde formulierveld.', slug: '/richtlijnen/formulieren/links/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    h = { id: 'richtlijnen/formulieren/link/above-field/README', title: 'Plaats de link boven het gerelateerde formulierveld \xb7 Links in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor link boven het gerelateerde formulierveld.', source: '@site/docs/richtlijnen/formulieren/link/1-above-field/README.mdx', sourceDirName: 'richtlijnen/formulieren/link/1-above-field', slug: '/richtlijnen/formulieren/links/plaatsing', permalink: '/richtlijnen/formulieren/links/plaatsing', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/1-above-field/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Plaats de link boven het gerelateerde formulierveld \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing link', pagination_label: 'Plaatsing link', description: 'Richtlijnen voor link boven het gerelateerde formulierveld.', slug: '/richtlijnen/formulieren/links/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Links in een formulier', permalink: '/richtlijnen/formulieren/links/' }, next: { title: 'Geen link in label', permalink: '/richtlijnen/formulieren/links/niet-in-label' } },
    v = {},
    b = [];
   function g(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(c, {}), '\n', (0, r.jsx)(t.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g();
   }
  },
  43599: (e, n, l) => {
   l.d(n, { X: () => g });
   var r = l(41179),
    o = l(16167),
    t = l(4814),
    s = l(64642),
    i = l(93872),
    a = l(86017),
    c = l(48231),
    d = l(75119),
    u = l(75271),
    p = l(60027),
    m = l(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(o.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   b.displayName = 'SurfaceContainer';
   const g = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: g = !1, displayCode: j = !0, children: y, container: x = 'document', language: k, designTokens: f } = e;
    const _ = 'function' == typeof y ? y() : y,
     w = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : p.uS(w || _),
     [Z, P] = (0, u.useState)(N),
     [C, D] = (0, u.useState)(g);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: k, plugins: [s.Z, i.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      P(e);
     })();
    }, [N]);
    const S = (0, u.useId)();
    let z = u.Fragment;
    return (
     'paragraph' === x ? (z = h) : 'document' === x ? (z = v) : 'surface' === x && (z = b),
     (0, m.jsxs)('div', {
      className: (0, t.Z)('nlds-canvas'),
      children: [
       _ && (0, m.jsx)('div', { className: (0, t.Z)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(z, { children: (0, m.jsx)(o.pu, { children: _ }) }) }) }),
       j &&
        (0, m.jsx)('div', {
         className: (0, t.Z)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(o.zx, {
          className: (0, t.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           D(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, m.jsxs)('div', {
         className: (0, t.Z)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, m.jsx)(r.u, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: Z, trim: !0 }),
          l &&
           (0, m.jsx)('div', {
            className: (0, t.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(o.zx, {
             className: (0, t.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(Z).catch((e) => console.error('Copy code failed', e));
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
   var r = l(16167),
    o = l(60648),
    t = l(75271),
    s = l(40761);
   const i = {
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
   var a = l(52676);
   function c(e) {
    let { lineNumber: n, syntax: l, textContent: c, trim: d } = e,
     u = c;
    const { title: p, type: m } = (0, t.useContext)(s.n),
     h = (0, t.useId)();
    return (
     d && (u = u.trim()),
     (0, a.jsx)(o.y$, {
      theme: i,
      code: u,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: o, getLineProps: t, getTokenProps: s } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, a.jsx)(r.dn, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': h, style: l, children: o.map((e, l) => (0, a.jsxs)('span', { ...t({ line: e }), children: [n && (0, a.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, l) => {
   l.d(n, { X: () => d, n: () => c });
   var r = l(69244),
    o = l(20061),
    t = l(16167),
    s = l(4814),
    i = l(75271),
    a = l(52676);
   const c = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: l, description: i, children: d, figure: u } = e;
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div';
     return (0, a.jsxs)(m, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, a.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, a.jsx)(t.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, a.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, a.jsx)(t.nv, { children: n })] }), i] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: p[l] }, children: d }) })] });
    };
  },
  40139: (e, n, l) => {
   l.d(n, { Z: () => i, a: () => s });
   var r = l(75271);
   const o = {},
    t = r.createContext(o);
   function s(e) {
    const n = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), r.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
