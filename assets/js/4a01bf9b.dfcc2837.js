'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [13612],
 {
  66968: (e, n, o) => {
   o.d(n, { ZP: () => s });
   var l = o(52676),
    r = o(40139);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(t, { ...e }) }) : t(e);
   }
  },
  8724: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => v, contentTitle: () => h, default: () => b, frontMatter: () => u, metadata: () => m, toc: () => y });
   var l = o(52676),
    r = o(40139),
    t = o(66968),
    s = o(43599),
    c = o(40761);
   function a(e) {
    const n = { h2: 'h2', input: 'input', label: 'label', ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(c.X, { appearance: 'do', title: 'De placeholder opacity: 1 meegeven in de CSS.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'auto', children: 'Welk auto rij je?' }), (0, l.jsx)(n.input, { className: 'nlds-opacity', id: 'auto', name: 'merk', type: 'text', placeholder: 'Vul een merknaam in' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(a, { ...e }) }) : a(e);
   }
   function i(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', p: 'p', pre: 'pre', strong: 'strong', ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'zorg-voor-een-goed-kleurcontrast-van-de-placeholdertekst', children: 'Zorg voor een goed kleurcontrast van de placeholdertekst' }), '\n', (0, l.jsx)(n.p, { children: 'Kleurcontrast voor tekst ten opzichte van de achtergrond moet voldoen aan WCAG, dit geldt ook voor placeholders.' }), '\n', (0, l.jsxs)(n.p, { children: ['Sommige browsers zoals Firefox maken placeholdertekst standaard doorzichtiger. Voeg daarom in de CSS ', (0, l.jsx)(n.code, { children: 'opacity: 1' }), ' toe voor de placeholder.'] }), '\n', (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: 'language-css!', children: '::placeholder {\n    opacity: 1;\n    color: #757575;\n}\n' }) }), '\n', (0, l.jsxs)(n.p, { children: ['Zie ', (0, l.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder', children: '::placeholder - CSS: Cascading Style Sheets' }), ', op MDN.'] }), '\n', (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.strong, { children: 'Tip:' }), ' De lichtste kleur grijs die je kunt gebruiken ten opzichte van een witte achtergrond is #757575 of rgb( 117, 117, 117).'] }), '\n', (0, l.jsxs)(n.p, { children: ['Voldoende kleurcontrast tussen placeholder en achtergrond is nodig om te voldoen aan het ', (0, l.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'WCAG-succescriterium 1.4.3 Contrast (minimum)' }), ' (niveau AA).'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
   const u = { title: 'Zorg voor een goed kleurcontrast van de placeholdertekst \xb7 Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kleurcontrast', pagination_label: 'Placeholder kleurcontrast', description: 'Richtlijnen voor voldoende kleurcontrast.', slug: '/richtlijnen/formulieren/placeholders/kleurcontrast', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    m = { id: 'richtlijnen/formulieren/placeholder/colour-contrast/README', title: 'Zorg voor een goed kleurcontrast van de placeholdertekst \xb7 Placeholders in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor voldoende kleurcontrast.', source: '@site/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/README.mdx', sourceDirName: 'richtlijnen/formulieren/placeholder/4-colour-contrast', slug: '/richtlijnen/formulieren/placeholders/kleurcontrast', permalink: '/richtlijnen/formulieren/placeholders/kleurcontrast', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zorg voor een goed kleurcontrast van de placeholdertekst \xb7 Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kleurcontrast', pagination_label: 'Placeholder kleurcontrast', description: 'Richtlijnen voor voldoende kleurcontrast.', slug: '/richtlijnen/formulieren/placeholders/kleurcontrast', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Placeholder kan verwarren', permalink: '/richtlijnen/formulieren/placeholders/verwarring-voorkomen' }, next: { title: 'Toetsenbord', permalink: '/richtlijnen/formulieren/toetsenbord/' } },
    v = {},
    y = [];
   function g(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(p, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(t.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(g, { ...e }) }) : g();
   }
  },
  43599: (e, n, o) => {
   o.d(n, { X: () => g });
   var l = o(41179),
    r = o(16167),
    t = o(4814),
    s = o(64642),
    c = o(93872),
    a = o(86017),
    d = o(48231),
    i = o(75119),
    p = o(75271),
    u = o(60027),
    h = o(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(r.BB, { className: (0, t.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(r.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(r.BB, { className: (0, t.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const y = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   y.displayName = 'SurfaceContainer';
   const g = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: g = !1, displayCode: b = !0, children: x, container: j = 'document', language: k, designTokens: f } = e;
    const _ = 'function' == typeof x ? x() : x,
     N = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     C = 'string' == typeof n ? n : u.uS(N || _),
     [S, Z] = (0, p.useState)(C),
     [w, P] = (0, p.useState)(g);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await i.ZP.format(C, { parser: k, plugins: [s.Z, c.ZP, a.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [C]);
    const z = (0, p.useId)();
    let F = p.Fragment;
    return (
     'paragraph' === j ? (F = m) : 'document' === j ? (F = v) : 'surface' === j && (F = y),
     (0, h.jsxs)('div', {
      className: (0, t.Z)('nlds-canvas'),
      children: [
       _ && (0, h.jsx)('div', { className: (0, t.Z)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, h.jsx)(F, { children: (0, h.jsx)(r.pu, { children: _ }) }) }) }),
       b &&
        (0, h.jsx)('div', {
         className: (0, t.Z)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(r.zx, {
          className: (0, t.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           P(!w);
          },
          'aria-expanded': w,
          'aria-controls': z,
          children: w ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, h.jsxs)('div', {
         className: (0, t.Z)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: z,
         hidden: !w,
         children: [
          (0, h.jsx)(l.u, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: S, trim: !0 }),
          o &&
           (0, h.jsx)('div', {
            className: (0, t.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(r.zx, {
             className: (0, t.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(S).catch((e) => console.error('Copy code failed', e));
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
   o.d(n, { u: () => d });
   var l = o(16167),
    r = o(60648),
    t = o(75271),
    s = o(40761);
   const c = {
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
   function d(e) {
    let { lineNumber: n, syntax: o, textContent: d, trim: i } = e,
     p = d;
    const { title: u, type: h } = (0, t.useContext)(s.n),
     m = (0, t.useId)();
    return (
     i && (p = p.trim()),
     (0, a.jsx)(r.y$, {
      theme: c,
      code: p,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: r, getLineProps: t, getTokenProps: s } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(l.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: o, children: r.map((e, o) => (0, a.jsxs)('span', { ...t({ line: e }), children: [n && (0, a.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, o) => {
   o.d(n, { X: () => i, n: () => d });
   var l = o(69244),
    r = o(20061),
    t = o(16167),
    s = o(4814),
    c = o(75271),
    a = o(52676);
   const d = (0, c.createContext)({}),
    i = (e) => {
     let { title: n, appearance: o, description: c, children: i, figure: p } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div';
     return (0, a.jsxs)(h, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(t.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(t.nv, { children: n })] }), c] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: n, type: u[o] }, children: i }) })] });
    };
  },
  40139: (e, n, o) => {
   o.d(n, { Z: () => c, a: () => s });
   var l = o(75271);
   const r = {},
    t = l.createContext(r);
   function s(e) {
    const n = l.useContext(t);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), l.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
