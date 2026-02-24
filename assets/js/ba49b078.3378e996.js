'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71602],
 {
  15638(e, n, t) {
   t.d(n, { $: () => u, x: () => d });
   var o = t(4077),
    l = t(58315),
    r = t(46447),
    s = t(13526),
    c = t(9547),
    a = t(30758),
    i = t(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: n, description: t, children: a, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      v = 'string' == typeof t ? (0, i.jsx)(c.oz, { children: t }) : t;
     return (0, i.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(r.fz, { children: e })] }), v] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => c });
   var o = t(30758);
   const l = {},
    r = o.createContext(l);
   function s(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), o.createElement(r.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, t) {
   t.d(n, { H: () => y });
   var o = t(69284),
    l = t(46447),
    r = t(13526),
    s = t(68148),
    c = t(9016),
    a = t(69303),
    i = t(91635),
    d = t(30734),
    u = t(30758),
    p = t(31186),
    m = t(86070);
   const h = ({ children: e }) => (0, m.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(l.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   h.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, m.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(l.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const g = ({ children: e }) => (0, m.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   g.displayName = 'SurfaceContainer';
   const y = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: y = !0, children: b, container: x = 'document', language: j, designTokens: f }) => {
    const k = 'function' == typeof b ? b() : b,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : p.qV(_ || k),
     [z, N] = (0, u.useState)(w),
     [A, C] = (0, u.useState)(t);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: j, plugins: [s.A, c.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const R = (0, u.useId)();
    let S = u.Fragment;
    return (
     'paragraph' === x ? (S = h) : 'document' === x ? (S = v) : 'surface' === x && (S = g),
     (0, m.jsxs)('div', {
      className: (0, r.A)('nlds-canvas'),
      children: [
       k && (0, m.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(S, { children: (0, m.jsx)(l.v$, { children: k }) }) }) }),
       y &&
        (0, m.jsx)('div', {
         className: (0, r.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(l.$n, {
          className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!A);
          },
          'aria-expanded': A,
          'aria-controls': R,
          children: A ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, m.jsxs)('div', {
         className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !A,
         children: [
          (0, m.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: z, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(l.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(z).catch((e) => console.error('Copy code failed', e));
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
  69284(e, n, t) {
   t.d(n, { M: () => i });
   var o = t(46447),
    l = t(16194),
    r = t(30758),
    s = t(15638);
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
   var a = t(86070);
   function i({ lineNumber: e, syntax: n, textContent: t, trim: i }) {
    let d = t;
    const { title: u, type: p } = (0, r.useContext)(s.x),
     m = (0, r.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(l.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...l({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  69677(e, n, t) {
   (t.r(n), t.d(n, { assets: () => y, contentTitle: () => g, default: () => j, frontMatter: () => v, metadata: () => o, toc: () => b }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/text-contrast/README","title":"Geef tekst voldoende kleurcontrast \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen","description":"Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.","source":"@site/docs/richtlijnen/formulieren/visual-design/2-text-contrast/README.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/2-text-contrast","slug":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/2-text-contrast/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef tekst voldoende kleurcontrast \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Tekst goed zichtbaar","pagination_label":"Tekst goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.","slug":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Invoerveld goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar"},"next":{"title":"Placeholder goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar"}}');
   var l = t(86070),
    r = t(18439),
    s = t(78734),
    c = t(58639),
    a = t(15638);
   t(46447);
   function i(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(a.$, { appearance: 'do', title: 'Maak het label goed leesbaar door voldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 5.54:1](/contrast/?color=%23006FA1&background-color=%23ffffff)', children: (0, l.jsx)(c.H, { language: 'html', designTokens: { '--utrecht-form-label-color': '#006FA1' }, children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'naam1', children: 'Uw naam' }) }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { type: 'text', id: 'naam1', autoComplete: 'name' }) })] }) }) }), '\n', (0, l.jsx)(a.$, { appearance: 'dont', title: 'Maak het label slecht leesbaar door onvoldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 2.62:1](/contrast/?color=%23999999&background-color=%23f8f5f1)', children: (0, l.jsx)(c.H, { language: 'html', designTokens: { '--utrecht-form-label-color': '#999999' }, children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'naam2', children: 'Uw naam' }) }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { type: 'text', id: 'naam2', autoComplete: 'name' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i();
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'geef-tekst-voldoende-kleurcontrast', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, l.jsx)(n.p, { children: 'Gebruikers moeten goed kunnen lezer wat ze moeten invullen of waaruit ze kunnen kiezen.' }), '\n', (0, l.jsx)(n.p, { children: 'Het kleurcontrast van de tekst van labels en descriptions ten opzichte van de achtergrondkleur moet daarom 4,5:1 of hoger zijn.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'Succescriterium 1.4.3 Contrast (minimum)' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(m, { ...e }) }) : m(e);
   }
   const v = { title: 'Geef tekst voldoende kleurcontrast \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tekst goed zichtbaar', pagination_label: 'Tekst goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    y = {},
    b = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function x(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(p, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(s.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(x, { ...e }) }) : x();
   }
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => c, RM: () => r });
   var o = t(86070),
    l = t(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
