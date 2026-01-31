'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [11135],
 {
  15638(e, l, n) {
   n.d(l, { $: () => d, x: () => i });
   var t = n(4077),
    o = n(58315),
    s = n(46447),
    r = n(13526),
    a = n(30758),
    c = n(86070);
   const i = (0, a.createContext)({}),
    d = ({ title: e, appearance: l, description: n, children: a, figure: d }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div';
     return (0, c.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(s.fz, { children: e })] }), n] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: e, type: u[l] }, children: a }) })] });
    };
  },
  18439(e, l, n) {
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
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), t.createElement(s.Provider, { value: l }, e.children));
   }
  },
  58639(e, l, n) {
   n.d(l, { H: () => y });
   var t = n(69284),
    o = n(46447),
    s = n(13526),
    r = n(68148),
    a = n(9016),
    c = n(69303),
    i = n(91635),
    d = n(30734),
    u = n(30758),
    p = n(31186),
    h = n(86070);
   const m = ({ children: e }) => (0, h.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, h.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, h.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const y = ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: y = !0, children: j, container: x = 'document', language: g, designTokens: f }) => {
    const k = 'function' == typeof j ? j() : j,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     N = 'string' == typeof e ? e : p.qV(_ || k),
     [w, A] = (0, u.useState)(N),
     [z, C] = (0, u.useState)(n);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(N, { parser: g, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [N]);
    const R = (0, u.useId)();
    let S = u.Fragment;
    return (
     'paragraph' === x ? (S = m) : 'document' === x ? (S = b) : 'surface' === x && (S = v),
     (0, h.jsxs)('div', {
      className: (0, s.A)('nlds-canvas'),
      children: [
       k && (0, h.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, h.jsx)(S, { children: (0, h.jsx)(o.v$, { children: k }) }) }) }),
       y &&
        (0, h.jsx)('div', {
         className: (0, s.A)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(o.$n, {
          className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!z);
          },
          'aria-expanded': z,
          'aria-controls': R,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, h.jsxs)('div', {
         className: (0, s.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !z,
         children: [
          (0, h.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: w, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(o.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(w).catch((e) => console.error('Copy code failed', e));
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
  69284(e, l, n) {
   n.d(l, { M: () => i });
   var t = n(46447),
    o = n(16194),
    s = n(30758),
    r = n(15638);
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
    const { title: u, type: p } = (0, s.useContext)(r.x),
     h = (0, s.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(o.f4, { theme: a, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: o, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(t.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: l, children: n.map((l, n) => (0, c.jsxs)('span', { ...o({ line: l }), children: [e && (0, c.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, c.jsx)('span', { ...s({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
  70530(e, l, n) {
   (n.r(l), n.d(l, { assets: () => y, contentTitle: () => v, default: () => g, frontMatter: () => b, metadata: () => t, toc: () => j }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/label/only-text/README","title":"Zet alleen tekst in het label \xb7 Labels in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor alleen tekst in een label van een formulierveld.","source":"@site/docs/richtlijnen/formulieren/label/5-only-text/README.mdx","sourceDirName":"richtlijnen/formulieren/label/5-only-text","slug":"/richtlijnen/formulieren/labels/alleen-tekst","permalink":"/richtlijnen/formulieren/labels/alleen-tekst","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/5-only-text/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet alleen tekst in het label \xb7 Labels in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Label bevat alleen tekst","pagination_label":"Label bevat alleen tekst","description":"Richtlijnen voor alleen tekst in een label van een formulierveld.","slug":"/richtlijnen/formulieren/labels/alleen-tekst","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Label zichtbaar","permalink":"/richtlijnen/formulieren/labels/altijd-zichtbaar"},"next":{"title":"Duidelijke tekst label","permalink":"/richtlijnen/formulieren/labels/duidelijke-tekst"}}');
   var o = n(86070),
    s = n(18439),
    r = n(78734),
    a = n(58639),
    c = n(15638);
   function i(e) {
    const l = { a: 'a', h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(c.$, { appearance: 'do', title: 'De link buiten het label plaatsen.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.p, { children: (0, o.jsx)(l.a, { href: '#', children: 'Onze algemene leveringsvoorwaarden' }) }), (0, o.jsx)(l.input, { id: 'alv1', type: 'checkbox' }), (0, o.jsx)(l.label, { htmlFor: 'alv1', children: 'Ik ga akkoord met de algemene leveringsvoorwaarden' })] }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'De link binnen het label plaatsen.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.input, { id: 'alv2', type: 'checkbox' }), (0, o.jsxs)(l.label, { htmlFor: 'alv2', children: ['Ik ga akkoord met de ', (0, o.jsx)(l.a, { href: '#', children: 'algemene leveringsvoorwaarden' })] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function u(e) {
    const l = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.header, { children: (0, o.jsx)(l.h1, { id: 'zet-alleen-tekst-in-het-label', children: 'Zet alleen tekst in het label' }) }), '\n', (0, o.jsx)(l.p, { children: 'Gebruik alleen tekst in een label. Dus geen links, buttons, tooltips of kopjes.' }), '\n', (0, o.jsxs)(l.p, { children: ['Dit geeft problemen bij het voorlezen van het label door ', (0, o.jsx)(l.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en het activeren via voice recognition.'] }), '\n', (0, o.jsx)(l.p, { children: 'Zet extra informatie boven het formulier, als links boven het label of formulierveld (wat logisch is qua leesvolgorde) of als beschrijving bij het veld. Vermijd tooltips.' }), '\n', (0, o.jsxs)(l.p, { children: ['Lees ook de ', (0, o.jsx)(l.a, { href: '/richtlijnen/formulieren/links/', children: 'richtlijnen voor links in formulieren' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(l.ul, { children: ['\n', (0, o.jsx)(l.li, { children: (0, o.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(l.li, { children: (0, o.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   const b = { title: 'Zet alleen tekst in het label \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Label bevat alleen tekst', pagination_label: 'Label bevat alleen tekst', description: 'Richtlijnen voor alleen tekst in een label van een formulierveld.', slug: '/richtlijnen/formulieren/labels/alleen-tekst', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    y = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function x(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(r.Ay, {})] });
   }
   function g(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(x, { ...e }) }) : x();
   }
  },
  78734(e, l, n) {
   n.d(l, { Ay: () => a, RM: () => s });
   var t = n(86070),
    o = n(18439);
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
 },
]);
