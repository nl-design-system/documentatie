'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [31686],
 {
  55400: (e, n, t) => {
   t.d(n, { ZP: () => r });
   var o = t(52676),
    l = t(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  40378: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => h, contentTitle: () => p, default: () => y, frontMatter: () => b, metadata: () => m, toc: () => g });
   var o = t(52676),
    l = t(24785),
    s = t(55400),
    r = t(43599),
    i = t(40761);
   function c(e) {
    const n = { button: 'button', div: 'div', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(i.X, { appearance: 'do', title: 'Gebruik een button, zodat de toetsenbordinteractie vanzelf goed gaat.', children: (0, o.jsx)(r.X, { language: 'html', children: () => (0, o.jsx)(n.button, { className: 'doFancyStuff button', children: 'Geef je op' }) }) }), '\n', (0, o.jsx)(i.X, { appearance: 'dont', title: 'Een div gebruiken die alleen met de muis aanklikbaar is.', children: (0, o.jsx)(r.X, { language: 'html', children: () => (0, o.jsx)(n.div, { className: 'doFancyStuff button', children: 'Geef je op' }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function d(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'toetsenbordbediening-van-een-button', children: 'Toetsenbordbediening van een button' }), '\n', (0, o.jsx)(n.p, { children: 'Veel gebruikers navigeren door een formulier met hun Tab-toets om van focusable element naar focusable element te springen (buttons, links, invoervelden, radio buttons, checkboxes etc).' }), '\n', (0, o.jsx)(n.p, { children: 'Krijgt een button de toetsenbordfocus, dan kan die met \u201center\u201d of \u201cspatiebalk\u201d worden geactiveerd. Zorg ervoor dat deze functionaliteit blijft werken als je een webcomponent bouwt, dit is standaard en verwacht gedrag van een button.' }), '\n', (0, o.jsxs)(n.p, { children: ['Een consistente toetsenbordbediening is nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/2.1.1', children: 'WCAG-succescriterium 2.1.1 Toetsenbord' }), ' (niveau A).'] }), '\n', (0, o.jsxs)(n.p, { children: ['En ook volg je dan de ', (0, o.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/predictable.html', children: 'WCAG-richtlijn 3.2 Voorspelbaar' }), ": maak het uiterlijk en de bediening van webpagina's voorspelbaar."] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   const b = { title: 'Toetsenbordbediening van een button \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toetsenbordbediening', pagination_label: 'Toetsenbordbediening van een button', description: 'Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.', slug: '/richtlijnen/formulieren/buttons/toetsenbordbediening', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    m = { id: 'richtlijnen/formulieren/button/keyboard/README', title: 'Toetsenbordbediening van een button \xb7 Buttons in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.', source: '@site/docs/richtlijnen/formulieren/button/1-keyboard/README.mdx', sourceDirName: 'richtlijnen/formulieren/button/1-keyboard', slug: '/richtlijnen/formulieren/buttons/toetsenbordbediening', permalink: '/richtlijnen/formulieren/buttons/toetsenbordbediening', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/1-keyboard/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Toetsenbordbediening van een button \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toetsenbordbediening', pagination_label: 'Toetsenbordbediening van een button', description: 'Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.', slug: '/richtlijnen/formulieren/buttons/toetsenbordbediening', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Buttons in een formulier', permalink: '/richtlijnen/formulieren/buttons' }, next: { title: 'Verstuur niet automatisch', permalink: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen' } },
    h = {},
    g = [];
   function v(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(a, {}), '\n', (0, o.jsx)(s.ZP, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => v });
   var o = t(46506),
    l = t(41179),
    s = t(4814),
    r = t(25585),
    i = t(40282),
    c = t(40678),
    a = t(85722),
    d = t(6374),
    u = t(75271),
    b = t(60027),
    p = t(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(o.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const h = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   h.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   g.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: v = !1, displayCode: y = !0, children: j, container: x = 'document', language: f, designTokens: k } = e,
     _ = 'function' == typeof j ? j() : j,
     N = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     w = 'string' == typeof n ? n : b.uS(N || _),
     [C, Z] = (0, u.useState)(w),
     [S, T] = (0, u.useState)(v);
    (0, u.useEffect)(() => {
     (async () => {
      (C = await d.ZP.format(w, { parser: f, plugins: [r.Z, i.ZP, c.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), Z(C);
     })();
    }, [w]);
    const E = (0, u.useId)();
    let P = u.Fragment;
    return (
     'paragraph' === x ? (P = m) : 'document' === x ? (P = h) : 'surface' === x && (P = g),
     (0, p.jsxs)('div', {
      className: (0, s.Z)('nlds-canvas'),
      children: [
       _ && (0, p.jsx)('div', { className: (0, s.Z)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(P, { children: (0, p.jsx)(o.pu, { children: _ }) }) }) }),
       y &&
        (0, p.jsx)('div', {
         className: (0, s.Z)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(o.zx, {
          className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           T(!S);
          },
          'aria-expanded': S,
          'aria-controls': E,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, p.jsxs)('div', {
         className: (0, s.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: E,
         hidden: !S,
         children: [
          (0, p.jsx)(l.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: C, trim: !0 }),
          t &&
           (0, p.jsx)('div', {
            className: (0, s.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(o.zx, {
             className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   t.d(n, { u: () => a });
   var o = t(46506),
    l = t(70739),
    s = t(75271),
    r = t(40761);
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
   var c = t(52676);
   function a(e) {
    let { lineNumber: n, syntax: t, textContent: a, trim: d } = e,
     u = a;
    const { title: b, type: p } = (0, s.useContext)(r.n),
     m = (0, s.useId)();
    return (
     d && (u = u.trim()),
     (0, c.jsx)(l.y$, {
      theme: i,
      code: u,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: l, getLineProps: s, getTokenProps: r } = e;
       return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', b ? ': ' : ' ', b] }), (0, c.jsx)(o.dn, { tabIndex: 0, role: b ? 'region' : void 0, 'aria-labelledby': m, style: t, children: l.map((e, t) => (0, c.jsxs)('span', { ...s({ line: e }), children: [n && (0, c.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, c.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => a });
   var o = t(77355),
    l = t(67663),
    s = t(46506),
    r = t(4814),
    i = t(75271),
    c = t(52676);
   const a = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: i, children: d, figure: u } = e;
     const b = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div';
     return (0, c.jsxs)(p, { className: (0, r.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: b.dont })] }), (0, c.jsx)(s.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: b.do })] }), (0, c.jsx)(s.nv, { children: n })] }), i] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(a.Provider, { value: { title: n, type: b[t] }, children: d }) })] });
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
