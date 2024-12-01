'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [82190],
 {
  55400: (e, n, o) => {
   o.d(n, { ZP: () => s });
   var l = o(52676),
    t = o(24785);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  40220: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => g, contentTitle: () => p, default: () => y, frontMatter: () => m, metadata: () => h, toc: () => f });
   var l = o(52676),
    t = o(24785),
    r = o(55400),
    s = o(43599),
    i = o(40761);
   function c(e) {
    const n = { input: 'input', label: 'label', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.X, { appearance: 'do', title: 'Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'wachtwoord2', children: 'Nieuw wachtwoord' }), (0, l.jsx)(n.p, { id: 'description-wachtwoord2', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, l.jsx)(n.p, { id: 'error-wachtwoord2', children: 'Invoerfout: Je gekozen wachtwoord is te kort.' }), (0, l.jsx)(n.input, { id: 'wachtwoord2', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord2 error-wachtwoord2' })] }) }) }), '\n', (0, l.jsx)(i.X, { appearance: 'dont', title: 'Description boven het formulierveld en foutmelding eronder plaatsen.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'wachtwoord4', children: 'Nieuw wachtwoord' }), (0, l.jsx)(n.p, { id: 'description-wachtwoord4', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, l.jsx)(n.input, { id: 'wachtwoord4', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord4 error-wachtwoord4' }), (0, l.jsx)(n.p, { id: 'error-wachtwoord4', children: 'Invoerfout: Je gekozen wachtwoord is te kort.' })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'zet-de-foutmeldingen-bij-de-betreffende-formuliervelden', children: 'Zet de foutmeldingen bij de betreffende formuliervelden' }), '\n', (0, l.jsxs)(n.p, { children: ['Voor foutmeldingen geldt hetzelfde als voor descriptions: de beste locatie is boven het formulierveld. Bovendien moet de foutmelding ', (0, l.jsx)(n.code, { children: 'aria-describedby' }), ' gekoppeld zijn aan het formulierveld.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Hoe dit te doen is beschreven bij de richtlijn ', (0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing', children: 'Plaats descriptions tussen label en formulierveld' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
   }
   const m = { title: 'Zet de foutmeldingen bij de betreffende formuliervelden \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing foutmelding', pagination_label: 'Plaatsing foutmelding', description: 'Richtlijnen voor positie van foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    h = { id: 'richtlijnen/formulieren/error/location/README', title: 'Zet de foutmeldingen bij de betreffende formuliervelden \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor positie van foutmeldingen in een formulier.', source: '@site/docs/richtlijnen/formulieren/error/4-location/README.mdx', sourceDirName: 'richtlijnen/formulieren/error/4-location', slug: '/richtlijnen/formulieren/foutmeldingen/plaatsing', permalink: '/richtlijnen/formulieren/foutmeldingen/plaatsing', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/4-location/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zet de foutmeldingen bij de betreffende formuliervelden \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing foutmelding', pagination_label: 'Plaatsing foutmelding', description: 'Richtlijnen voor positie van foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Duidelijke foutmeldingen', permalink: '/richtlijnen/formulieren/foutmeldingen/duidelijk' }, next: { title: 'HTML-formuliervalidatie', permalink: '/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie' } },
    g = {},
    f = [];
   function b(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(u, {}), '\n', (0, l.jsx)(a, {}), '\n', (0, l.jsx)(r.ZP, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(b, { ...e }) }) : b();
   }
  },
  43599: (e, n, o) => {
   o.d(n, { X: () => b });
   var l = o(46506),
    t = o(41179),
    r = o(4814),
    s = o(25585),
    i = o(40282),
    c = o(40678),
    a = o(85722),
    d = o(6374),
    u = o(75271),
    m = o(60027),
    p = o(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const f = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   f.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: b = !1, displayCode: y = !0, children: v, container: j = 'document', language: x, designTokens: k } = e,
     _ = 'function' == typeof v ? v() : v,
     w = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : m.uS(w || _),
     [Z, C] = (0, u.useState)(N),
     [P, F] = (0, u.useState)(b);
    (0, u.useEffect)(() => {
     (async () => {
      (Z = await d.ZP.format(N, { parser: x, plugins: [s.Z, i.ZP, c.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(Z);
     })();
    }, [N]);
    const S = (0, u.useId)();
    let z = u.Fragment;
    return (
     'paragraph' === j ? (z = h) : 'document' === j ? (z = g) : 'surface' === j && (z = f),
     (0, p.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       _ && (0, p.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(z, { children: (0, p.jsx)(l.pu, { children: _ }) }) }) }),
       y &&
        (0, p.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(l.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           F(!P);
          },
          'aria-expanded': P,
          'aria-controls': S,
          children: P ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, p.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !P,
         children: [
          (0, p.jsx)(t.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: Z, trim: !0 }),
          o &&
           (0, p.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(l.zx, {
             className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, o) => {
   o.d(n, { u: () => a });
   var l = o(46506),
    t = o(70739),
    r = o(75271),
    s = o(40761);
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
   var c = o(52676);
   function a(e) {
    let { lineNumber: n, syntax: o, textContent: a, trim: d } = e,
     u = a;
    const { title: m, type: p } = (0, r.useContext)(s.n),
     h = (0, r.useId)();
    return (
     d && (u = u.trim()),
     (0, c.jsx)(t.y$, {
      theme: i,
      code: u,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: t, getLineProps: r, getTokenProps: s } = e;
       return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, c.jsx)(l.dn, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: o, children: t.map((e, o) => (0, c.jsxs)('span', { ...r({ line: e }), children: [n && (0, c.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, o) => {
   o.d(n, { X: () => d, n: () => a });
   var l = o(77355),
    t = o(67663),
    r = o(46506),
    s = o(4814),
    i = o(75271),
    c = o(52676);
   const a = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: o, description: i, children: d, figure: u } = e;
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div';
     return (0, c.jsxs)(p, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, c.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, c.jsx)(r.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, c.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, c.jsx)(r.nv, { children: n })] }), i] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(a.Provider, { value: { title: n, type: m[o] }, children: d }) })] });
    };
  },
  24785: (e, n, o) => {
   o.d(n, { Z: () => i, a: () => s });
   var l = o(75271);
   const t = {},
    r = l.createContext(t);
   function s(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), l.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
