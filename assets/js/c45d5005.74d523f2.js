'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [11135],
 {
  8649: (e, l, n) => {
   n.d(l, { H: () => y });
   var t = n(16609),
    o = n(68873),
    s = n(13526),
    r = n(58713),
    a = n(87347),
    c = n(39644),
    i = n(92406),
    d = n(63313),
    p = n(30758),
    u = n(31186),
    h = n(86070);
   const b = ({ children: e }) => (0, h.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const m = ({ children: e }) => (0, h.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   m.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, h.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const y = ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: y = !0, children: j, container: x = 'document', language: g, designTokens: f }) => {
    const k = 'function' == typeof j ? j() : j,
     _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     N = 'string' == typeof e ? e : u.qV(_ || k),
     [A, w] = (0, p.useState)(N),
     [C, R] = (0, p.useState)(n);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(N, { parser: g, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      w(e);
     })();
    }, [N]);
    const z = (0, p.useId)();
    let L = p.Fragment;
    return (
     'paragraph' === x ? (L = b) : 'document' === x ? (L = m) : 'surface' === x && (L = v),
     (0, h.jsxs)('div', {
      className: (0, s.A)('nlds-canvas'),
      children: [
       k && (0, h.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, h.jsx)(L, { children: (0, h.jsx)(o.v$, { children: k }) }) }) }),
       y &&
        (0, h.jsx)('div', {
         className: (0, s.A)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(o.$n, {
          className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           R(!C);
          },
          'aria-expanded': C,
          'aria-controls': z,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, h.jsxs)('div', {
         className: (0, s.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
         id: z,
         hidden: !C,
         children: [
          (0, h.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: A, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(o.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  16609: (e, l, n) => {
   n.d(l, { M: () => i });
   var t = n(68873),
    o = n(16194),
    s = n(30758),
    r = n(50124);
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
   var c = n(86070);
   function i({ lineNumber: e, syntax: l, textContent: n, trim: i }) {
    let d = n;
    const { title: p, type: u } = (0, s.useContext)(r.x),
     h = (0, s.useId)();
    return i && (d = d.trim()), (0, c.jsx)(o.f4, { theme: a, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: o, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(t.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': h, style: l, children: n.map((l, n) => (0, c.jsxs)('span', { ...o({ line: l }), children: [e && (0, c.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, c.jsx)('span', { ...s({ token: e }) }, l)), '\n'] }, n)) })] }) });
   }
  },
  50124: (e, l, n) => {
   n.d(l, { $: () => d, x: () => i });
   var t = n(54736),
    o = n(26990),
    s = n(68873),
    r = n(13526),
    a = n(30758),
    c = n(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: l, description: n, children: a, figure: d }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div';
     return (0, c.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(s.fz, { children: e })] }), n] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: p[l] }, children: a }) })] });
    };
  },
  78734: (e, l, n) => {
   n.d(l, { Ay: () => a, RM: () => s });
   var t = n(86070),
    o = n(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, t.jsx)(l, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  85248: (e, l, n) => {
   n.d(l, { R: () => r, x: () => a });
   var t = n(30758);
   const o = {},
    s = t.createContext(o);
   function r(e) {
    const l = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function a(e) {
    let l;
    return (l = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), t.createElement(s.Provider, { value: l }, e.children);
   }
  },
  95396: (e, l, n) => {
   n.r(l), n.d(l, { assets: () => m, contentTitle: () => b, default: () => j, frontMatter: () => h, metadata: () => t, toc: () => v });
   const t = JSON.parse('{"id":"richtlijnen/formulieren/label/only-text/README","title":"Zet alleen tekst in het label \xb7 Labels in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor alleen tekst in een label van een formulierveld.","source":"@site/docs/richtlijnen/formulieren/label/5-only-text/README.mdx","sourceDirName":"richtlijnen/formulieren/label/5-only-text","slug":"/richtlijnen/formulieren/labels/alleen-tekst","permalink":"/richtlijnen/formulieren/labels/alleen-tekst","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/5-only-text/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet alleen tekst in het label \xb7 Labels in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Label bevat alleen tekst","pagination_label":"Label bevat alleen tekst","description":"Richtlijnen voor alleen tekst in een label van een formulierveld.","slug":"/richtlijnen/formulieren/labels/alleen-tekst","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Label zichtbaar","permalink":"/richtlijnen/formulieren/labels/altijd-zichtbaar"},"next":{"title":"Duidelijke tekst label","permalink":"/richtlijnen/formulieren/labels/duidelijke-tekst"}}');
   var o = n(86070),
    s = n(85248),
    r = n(78734),
    a = n(8649),
    c = n(50124);
   function i(e) {
    const l = { a: 'a', h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(c.$, { appearance: 'do', title: 'De link buiten het label plaatsen.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.p, { children: (0, o.jsx)(l.a, { href: '#', children: 'Onze algemene leveringsvoorwaarden' }) }), (0, o.jsx)(l.input, { id: 'alv1', type: 'checkbox' }), (0, o.jsx)(l.label, { htmlFor: 'alv1', children: 'Ik ga akkoord met de algemene leveringsvoorwaarden' })] }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'De link binnen het label plaatsen.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.input, { id: 'alv2', type: 'checkbox' }), (0, o.jsxs)(l.label, { htmlFor: 'alv2', children: ['Ik ga akkoord met de ', (0, o.jsx)(l.a, { href: '#', children: 'algemene leveringsvoorwaarden' })] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function p(e) {
    const l = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.header, { children: (0, o.jsx)(l.h1, { id: 'zet-alleen-tekst-in-het-label', children: 'Zet alleen tekst in het label' }) }), '\n', (0, o.jsx)(l.p, { children: 'Gebruik alleen tekst in een label. Dus geen links, buttons, tooltips of kopjes.' }), '\n', (0, o.jsxs)(l.p, { children: ['Dit geeft problemen bij het voorlezen van het label door ', (0, o.jsx)(l.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en het activeren via voice recognition.'] }), '\n', (0, o.jsx)(l.p, { children: 'Zet extra informatie boven het formulier, als links boven het label of formulierveld (wat logisch is qua leesvolgorde) of als beschrijving bij het veld. Vermijd tooltips.' }), '\n', (0, o.jsxs)(l.p, { children: ['Lees ook de ', (0, o.jsx)(l.a, { href: '/richtlijnen/formulieren/links/', children: 'richtlijnen voor links in formulieren' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   const h = { title: 'Zet alleen tekst in het label \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Label bevat alleen tekst', pagination_label: 'Label bevat alleen tekst', description: 'Richtlijnen voor alleen tekst in een label van een formulierveld.', slug: '/richtlijnen/formulieren/labels/alleen-tekst', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    m = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, ...r.RM];
   function y(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(r.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(y, { ...e }) }) : y();
   }
  },
 },
]);
