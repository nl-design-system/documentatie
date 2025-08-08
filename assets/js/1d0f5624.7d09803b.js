'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [33990],
 {
  66968: (e, n, o) => {
   o.d(n, { ZP: () => s });
   var l = o(52676),
    t = o(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  28195: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => b, contentTitle: () => u, default: () => g, frontMatter: () => h, metadata: () => m, toc: () => v });
   var l = o(52676),
    t = o(40139),
    r = o(66968),
    s = o(43599),
    i = o(40761);
   function a(e) {
    const n = { h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(i.X, { appearance: 'do', title: 'Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'wachtwoord1', children: 'Nieuw wachtwoord' }), (0, l.jsx)(n.p, { id: 'description-wachtwoord1', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, l.jsx)(n.input, { id: 'wachtwoord1', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord1' })] }) }) }), '\n', (0, l.jsx)(i.X, { appearance: 'do', title: 'Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'wachtwoord2', children: 'Nieuw wachtwoord' }), (0, l.jsx)(n.p, { id: 'description-wachtwoord2', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, l.jsx)(n.p, { id: 'error-wachtwoord2', children: 'Je gekozen wachtwoord is te kort.' }), (0, l.jsx)(n.input, { id: 'wachtwoord2', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord2 error-wachtwoord2' })] }) }) }), '\n', (0, l.jsx)(i.X, { appearance: 'dont', title: 'Description onder het formulierveld plaatsen.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'wachtwoord3', children: 'Nieuw wachtwoord' }), (0, l.jsx)(n.input, { id: 'wachtwoord3', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord3' }), (0, l.jsx)(n.p, { id: 'description-wachtwoord3', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' })] }) }) }), '\n', (0, l.jsx)(i.X, { appearance: 'dont', title: 'Description boven het formulierveld en foutmelding eronder plaatsen.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'wachtwoord4', children: 'Nieuw wachtwoord' }), (0, l.jsx)(n.p, { id: 'description-wachtwoord4', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, l.jsx)(n.input, { id: 'wachtwoord4', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord4 error-wachtwoord4' }), (0, l.jsx)(n.p, { id: 'error-wachtwoord4', children: 'Je gekozen wachtwoord is te kort.' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'plaats-descriptions-tussen-label-en-formulierveld', children: 'Plaats descriptions tussen label en formulierveld' }), '\n', (0, l.jsx)(n.p, { children: 'Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld. Omdat de gebruiker van boven naar beneden leest, komt deze informatie na het label op een logisch moment in de leesvolgorde.' }), '\n', (0, l.jsxs)(n.p, { children: ['Ook is dan de kans dat de informatie overlapt met bijvoorbeeld browserpopups kleiner. Lees hiervoor het artikel ', (0, l.jsx)(n.a, { href: 'https://adrianroselli.com/2017/01/avoid-messages-under-fields.html', children: (0, l.jsx)('span', { lang: 'en', children: 'Avoid Messages Under Fields' }) }), ' van Adrian Roselli.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
   }
   const h = { title: 'Plaats descriptions tussen label en formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing description', pagination_label: 'Plaatsing description', description: 'Richtlijnen voor plaatsing van een description bij een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    u = void 0,
    m = { id: 'richtlijnen/formulieren/description/placement/README', title: 'Plaats descriptions tussen label en formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor plaatsing van een description bij een formulierveld.', source: '@site/docs/richtlijnen/formulieren/description/2-placement/README.mdx', sourceDirName: 'richtlijnen/formulieren/description/2-placement', slug: '/richtlijnen/formulieren/descriptions/plaatsing', permalink: '/richtlijnen/formulieren/descriptions/plaatsing', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/2-placement/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Plaats descriptions tussen label en formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing description', pagination_label: 'Plaatsing description', description: 'Richtlijnen voor plaatsing van een description bij een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Inhoud description', permalink: '/richtlijnen/formulieren/descriptions/inhoud' }, next: { title: 'Meerdere descriptions', permalink: '/richtlijnen/formulieren/descriptions/meerdere-koppelen' } },
    b = {},
    v = [];
   function y(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(p, {}), '\n', (0, l.jsx)(c, {}), '\n', (0, l.jsx)(r.ZP, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(y, { ...e }) }) : y();
   }
  },
  43599: (e, n, o) => {
   o.d(n, { X: () => y });
   var l = o(41179),
    t = o(16167),
    r = o(4814),
    s = o(64642),
    i = o(93872),
    a = o(86017),
    c = o(48231),
    d = o(75119),
    p = o(75271),
    h = o(60027),
    u = o(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(t.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(t.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(t.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   b.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   v.displayName = 'SurfaceContainer';
   const y = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: y = !1, displayCode: g = !0, children: j, container: x = 'document', language: f, designTokens: w } = e;
    const k = 'function' == typeof j ? j() : j,
     _ = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : h.uS(_ || k),
     [P, Z] = (0, p.useState)(N),
     [C, F] = (0, p.useState)(y);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: f, plugins: [s.Z, i.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [N]);
    const S = (0, p.useId)();
    let D = p.Fragment;
    return (
     'paragraph' === x ? (D = m) : 'document' === x ? (D = b) : 'surface' === x && (D = v),
     (0, u.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       k && (0, u.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: w, children: (0, u.jsx)(D, { children: (0, u.jsx)(t.pu, { children: k }) }) }) }),
       g &&
        (0, u.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(t.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           F(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, u.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, u.jsx)(l.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: P, trim: !0 }),
          o &&
           (0, u.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(t.zx, {
             className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, o) => {
   o.d(n, { u: () => c });
   var l = o(16167),
    t = o(60648),
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
   var a = o(52676);
   function c(e) {
    let { lineNumber: n, syntax: o, textContent: c, trim: d } = e,
     p = c;
    const { title: h, type: u } = (0, r.useContext)(s.n),
     m = (0, r.useId)();
    return (
     d && (p = p.trim()),
     (0, a.jsx)(t.y$, {
      theme: i,
      code: p,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: t, getLineProps: r, getTokenProps: s } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(l.dn, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: o, children: t.map((e, o) => (0, a.jsxs)('span', { ...r({ line: e }), children: [n && (0, a.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, o) => {
   o.d(n, { X: () => d, n: () => c });
   var l = o(69244),
    t = o(20061),
    r = o(16167),
    s = o(4814),
    i = o(75271),
    a = o(52676);
   const c = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: o, description: i, children: d, figure: p } = e;
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div';
     return (0, a.jsxs)(u, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(r.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(r.nv, { children: n })] }), i] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: h[o] }, children: d }) })] });
    };
  },
  40139: (e, n, o) => {
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
