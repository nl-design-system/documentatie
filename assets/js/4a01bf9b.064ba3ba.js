'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [80358],
 {
  8649: (e, o, n) => {
   n.d(o, { H: () => g });
   var l = n(16609),
    r = n(68873),
    t = n(13526),
    s = n(58713),
    c = n(87347),
    a = n(39644),
    d = n(92406),
    i = n(63313),
    p = n(30758),
    u = n(31186),
    h = n(86070);
   const m = ({ children: e }) => (0, h.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, h.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, h.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const g = ({ code: e, copy: o = !0, defaultExpandedCode: n = !1, displayCode: g = !0, children: b, container: j = 'document', language: x, designTokens: k }) => {
    const f = 'function' == typeof b ? b() : b,
     _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     N = 'string' == typeof e ? e : u.qV(_ || f),
     [A, C] = (0, p.useState)(N),
     [S, w] = (0, p.useState)(n);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await i.Ay.format(N, { parser: x, plugins: [s.A, c.Ay, a.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [N]);
    const z = (0, p.useId)();
    let R = p.Fragment;
    return (
     'paragraph' === j ? (R = m) : 'document' === j ? (R = y) : 'surface' === j && (R = v),
     (0, h.jsxs)('div', {
      className: (0, t.A)('nlds-canvas'),
      children: [
       f && (0, h.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, h.jsx)(R, { children: (0, h.jsx)(r.v$, { children: f }) }) }) }),
       g &&
        (0, h.jsx)('div', {
         className: (0, t.A)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(r.$n, {
          className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           w(!S);
          },
          'aria-expanded': S,
          'aria-controls': z,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, h.jsxs)('div', {
         className: (0, t.A)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: z,
         hidden: !S,
         children: [
          (0, h.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: A, trim: !0 }),
          o &&
           (0, h.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(r.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(A).catch((e) => console.error('Copy code failed', e));
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
  16609: (e, o, n) => {
   n.d(o, { M: () => d });
   var l = n(68873),
    r = n(16194),
    t = n(30758),
    s = n(50124);
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
   var a = n(86070);
   function d({ lineNumber: e, syntax: o, textContent: n, trim: d }) {
    let i = n;
    const { title: p, type: u } = (0, t.useContext)(s.x),
     h = (0, t.useId)();
    return d && (i = i.trim()), (0, a.jsx)(r.f4, { theme: c, code: i, language: o || '', children: ({ style: o, tokens: n, getLineProps: r, getTokenProps: t }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': h, style: o, children: n.map((o, n) => (0, a.jsxs)('span', { ...r({ line: o }), children: [e && (0, a.jsx)('span', { children: n + 1 }), o.map((e, o) => (0, a.jsx)('span', { ...t({ token: e }) }, o)), '\n'] }, n)) })] }) });
   }
  },
  50124: (e, o, n) => {
   n.d(o, { $: () => i, x: () => d });
   var l = n(54736),
    r = n(26990),
    t = n(68873),
    s = n(13526),
    c = n(30758),
    a = n(86070);
   const d = (0, c.createContext)({}),
    i = ({ title: e, appearance: o, description: n, children: c, figure: i }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = i ? 'figure' : 'div',
      h = i ? 'figcaption' : 'div';
     return (0, a.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, a.jsx)(t.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, a.jsx)(t.fz, { children: e })] }), n] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: p[o] }, children: c }) })] });
    };
  },
  62078: (e, o, n) => {
   n.r(o), n.d(o, { assets: () => y, contentTitle: () => m, default: () => b, frontMatter: () => h, metadata: () => l, toc: () => v });
   const l = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/colour-contrast/README","title":"Zorg voor een goed kleurcontrast van de placeholdertekst \xb7 Placeholders in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor voldoende kleurcontrast.","source":"@site/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/README.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/4-colour-contrast","slug":"/richtlijnen/formulieren/placeholders/kleurcontrast","permalink":"/richtlijnen/formulieren/placeholders/kleurcontrast","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor een goed kleurcontrast van de placeholdertekst \xb7 Placeholders in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder kleurcontrast","pagination_label":"Placeholder kleurcontrast","description":"Richtlijnen voor voldoende kleurcontrast.","slug":"/richtlijnen/formulieren/placeholders/kleurcontrast","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder kan verwarren","permalink":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen"},"next":{"title":"Toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/"}}');
   var r = n(86070),
    t = n(85248),
    s = n(78734),
    c = n(8649),
    a = n(50124);
   function d(e) {
    const o = { h2: 'h2', input: 'input', label: 'label', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(o.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(a.$, { appearance: 'do', title: 'De placeholder opacity: 1 meegeven in de CSS.', children: (0, r.jsx)(c.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(o.label, { htmlFor: 'auto', children: 'Welk auto rij je?' }), (0, r.jsx)(o.input, { className: 'nlds-opacity', id: 'auto', name: 'merk', type: 'text', placeholder: 'Vul een merknaam in' })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: o } = { ...(0, t.R)(), ...e.components };
    return o ? (0, r.jsx)(o, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   function p(e) {
    const o = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', pre: 'pre', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(o.header, { children: (0, r.jsx)(o.h1, { id: 'zorg-voor-een-goed-kleurcontrast-van-de-placeholdertekst', children: 'Zorg voor een goed kleurcontrast van de placeholdertekst' }) }), '\n', (0, r.jsx)(o.p, { children: 'Kleurcontrast voor tekst ten opzichte van de achtergrond moet voldoen aan WCAG, dit geldt ook voor placeholders.' }), '\n', (0, r.jsxs)(o.p, { children: ['Sommige browsers zoals Firefox maken placeholdertekst standaard doorzichtiger. Voeg daarom in de CSS ', (0, r.jsx)(o.code, { children: 'opacity: 1' }), ' toe voor de placeholder.'] }), '\n', (0, r.jsx)(o.pre, { children: (0, r.jsx)(o.code, { className: 'language-css!', children: '::placeholder {\n    opacity: 1;\n    color: #757575;\n}\n' }) }), '\n', (0, r.jsxs)(o.p, { children: ['Zie ', (0, r.jsx)(o.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder', children: '::placeholder - CSS: Cascading Style Sheets' }), ', op MDN.'] }), '\n', (0, r.jsxs)(o.p, { children: [(0, r.jsx)(o.strong, { children: 'Tip:' }), ' De lichtste kleur grijs die je kunt gebruiken ten opzichte van een witte achtergrond is #757575 of rgb( 117, 117, 117).'] }), '\n', (0, r.jsxs)(o.p, { children: ['Voldoende kleurcontrast tussen placeholder en achtergrond is nodig om te voldoen aan het ', (0, r.jsx)(o.a, { href: '/wcag/1.4.3/', children: 'WCAG-succescriterium 1.4.3 Contrast (minimum)' }), ' (niveau AA).'] })] });
   }
   function u(e = {}) {
    const { wrapper: o } = { ...(0, t.R)(), ...e.components };
    return o ? (0, r.jsx)(o, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   const h = { title: 'Zorg voor een goed kleurcontrast van de placeholdertekst \xb7 Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kleurcontrast', pagination_label: 'Placeholder kleurcontrast', description: 'Richtlijnen voor voldoende kleurcontrast.', slug: '/richtlijnen/formulieren/placeholders/kleurcontrast', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    y = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, ...s.RM];
   function g(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(i, {}), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: o } = { ...(0, t.R)(), ...e.components };
    return o ? (0, r.jsx)(o, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g();
   }
  },
  78734: (e, o, n) => {
   n.d(o, { Ay: () => c, RM: () => t });
   var l = n(86070),
    r = n(85248);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const o = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(o.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(o.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(o.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(o.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(o.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: o } = { ...(0, r.R)(), ...e.components };
    return o ? (0, l.jsx)(o, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, o, n) => {
   n.d(o, { R: () => s, x: () => c });
   var l = n(30758);
   const r = {},
    t = l.createContext(r);
   function s(e) {
    const o = l.useContext(t);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(o) : { ...o, ...e };
     },
     [o, e],
    );
   }
   function c(e) {
    let o;
    return (o = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), l.createElement(t.Provider, { value: o }, e.children);
   }
  },
 },
]);
