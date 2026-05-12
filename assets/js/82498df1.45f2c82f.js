'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [30023],
 {
  18127(e, n, o) {
   o.d(n, { H: () => v });
   var t = o(95822),
    s = o(46447),
    r = o(13526),
    l = o(68148),
    i = o(9016),
    c = o(69303),
    a = o(91635),
    d = o(30734),
    u = o(30758),
    b = o(31186),
    p = o(86070);
   const m = ({ children: e }) => (0, p.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const h = ({ children: e }) => (0, p.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   h.displayName = 'DocumentContainer';
   const g = ({ children: e }) => (0, p.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   g.displayName = 'SurfaceContainer';
   const v = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: v = !0, children: y, container: j = 'document', language: x, designTokens: f }) => {
    const k = 'function' == typeof y ? y() : y,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     N = 'string' == typeof e ? e : b.qV(_ || k),
     [w, A] = (0, u.useState)(N),
     [z, C] = (0, u.useState)(o);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(N, { parser: x, plugins: [l.A, i.Ay, c.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [N]);
    const S = (0, u.useId)();
    let T = u.Fragment;
    return (
     'paragraph' === j ? (T = m) : 'document' === j ? (T = h) : 'surface' === j && (T = g),
     (0, p.jsxs)('div', {
      className: (0, r.A)('nlds-canvas'),
      children: [
       k && (0, p.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, p.jsx)(T, { children: (0, p.jsx)(s.v$, { children: k }) }) }) }),
       v &&
        (0, p.jsx)('div', {
         className: (0, r.A)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(s.$n, {
          className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!z);
          },
          'aria-expanded': z,
          'aria-controls': S,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       v &&
        (0, p.jsxs)('div', {
         className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !z,
         children: [
          (0, p.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: w, trim: !0 }),
          n &&
           (0, p.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(s.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, o) {
   o.d(n, { R: () => l, x: () => i });
   var t = o(30758);
   const s = {},
    r = t.createContext(s);
   function l(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  57331(e, n, o) {
   (o.r(n), o.d(n, { assets: () => v, contentTitle: () => g, default: () => x, frontMatter: () => h, metadata: () => t, toc: () => y }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/button/keyboard/index","title":"Toetsenbordbediening van een button","description":"Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.","source":"@site/docs/richtlijnen/formulieren/button/1-keyboard/index.mdx","sourceDirName":"richtlijnen/formulieren/button/1-keyboard","slug":"/richtlijnen/formulieren/buttons/toetsenbordbediening","permalink":"/richtlijnen/formulieren/buttons/toetsenbordbediening","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/1-keyboard/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Toetsenbordbediening van een button","title_sm":"Toetsenbordbediening","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toetsenbordbediening","pagination_label":"Toetsenbordbediening van een button","description":"Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.","slug":"/richtlijnen/formulieren/buttons/toetsenbordbediening","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Buttons in een formulier","permalink":"/richtlijnen/formulieren/buttons"},"next":{"title":"Verstuur niet automatisch","permalink":"/richtlijnen/formulieren/buttons/niet-automatisch-versturen"}}');
   var s = o(86070),
    r = o(18439),
    l = o(78734),
    i = o(18127),
    c = o(88022);
   function a(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(c.$, { appearance: 'do', title: 'Gebruik een button, zodat de toetsenbordinteractie vanzelf goed gaat.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsx)('button', { className: 'doFancyStuff button', children: 'Geef je op' }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Een div gebruiken die alleen met de muis aanklikbaar is.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsx)('div', { className: 'doFancyStuff button', children: 'Geef je op' }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'toetsenbordbediening-van-een-button', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, s.jsx)(n.p, { children: 'Veel gebruikers navigeren door een formulier met hun Tab-toets om van interactief element naar interactief element te springen, zoals buttons, links, invoervelden, radio buttons en checkboxes.' }), '\n', (0, s.jsx)(n.p, { children: 'Krijgt een button de toetsenbordfocus, dan kan die met \u201center\u201d of \u201cspatiebalk\u201d worden geactiveerd. Zorg ervoor dat deze functionaliteit blijft werken als je een webcomponent bouwt, dit is standaard en verwacht gedrag van een button.' }), '\n', (0, s.jsx)(n.p, { children: 'Zorg ervoor dat de volgorde waarin interactieve elementen focus krijgen logisch is en dat er geen onverwachte veranderingen plaatsvinden als een bezoeker de button activeert.' })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'Succescriterium 2.1.1 Toetsenbord' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.2.1/', children: 'Succescriterium 3.2.1 Bij focus' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   const h = { title: 'Toetsenbordbediening van een button', title_sm: 'Toetsenbordbediening', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toetsenbordbediening', pagination_label: 'Toetsenbordbediening van een button', description: 'Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.', slug: '/richtlijnen/formulieren/buttons/toetsenbordbediening', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    v = {},
    y = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...l.RM];
   function j(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(b, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(l.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(j, { ...e }) }) : j();
   }
  },
  78734(e, n, o) {
   o.d(n, { Ay: () => i, RM: () => r });
   var t = o(86070),
    s = o(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  88022(e, n, o) {
   o.d(n, { $: () => u, x: () => d });
   var t = o(4077),
    s = o(58315),
    r = o(46447),
    l = o(13526),
    i = o(9547),
    c = o(30758),
    a = o(86070);
   const d = (0, c.createContext)({}),
    u = ({ title: e, appearance: n, description: o, children: c, figure: u }) => {
     const b = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      h = 'string' == typeof o ? (0, a.jsx)(i.oz, { children: o }) : o;
     return (0, a.jsxs)(p, { className: (0, l.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: b.dont })] }), (0, a.jsx)(r.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: b.do })] }), (0, a.jsx)(r.fz, { children: e })] }), h] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: b[n] }, children: c }) })] });
    };
  },
  95822(e, n, o) {
   o.d(n, { M: () => a });
   var t = o(46447),
    s = o(16194),
    r = o(30758),
    l = o(88022);
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
   var c = o(86070);
   function a({ lineNumber: e, syntax: n, textContent: o, trim: a }) {
    let d = o;
    const { title: u, type: b } = (0, r.useContext)(l.x),
     p = (0, r.useId)();
    return (a && (d = d.trim()), (0, c.jsx)(s.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: s, getTokenProps: r }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', b ? `\u201c${b}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(t.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: o.map((n, o) => (0, c.jsxs)('span', { ...s({ line: n }), children: [e && (0, c.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
 },
]);
