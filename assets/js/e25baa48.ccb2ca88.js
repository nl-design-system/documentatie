'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [97845],
 {
  15638(e, n, r) {
   r.d(n, { $: () => d, x: () => c });
   var l = r(4077),
    t = r(58315),
    o = r(46447),
    s = r(13526),
    a = r(30758),
    i = r(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: r, children: a, figure: d }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div';
     return (0, i.jsxs)(p, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(o.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(o.fz, { children: e })] }), r] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: u[n] }, children: a }) })] });
    };
  },
  18439(e, n, r) {
   r.d(n, { R: () => s, x: () => a });
   var l = r(30758);
   const t = {},
    o = l.createContext(t);
   function s(e) {
    const n = l.useContext(o);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), l.createElement(o.Provider, { value: n }, e.children));
   }
  },
  23293(e, n, r) {
   (r.r(n), r.d(n, { assets: () => j, contentTitle: () => g, default: () => f, frontMatter: () => v, metadata: () => l, toc: () => y }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/multistep/timing/README","title":"Geef duidelijk aan wanneer het formulier verzonden gaat worden \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen","description":"Richtlijnen over duidelijk aangeven wanneer een formulier wordt verzonden.","source":"@site/docs/richtlijnen/formulieren/multistep/5-timing/README.mdx","sourceDirName":"richtlijnen/formulieren/multistep/5-timing","slug":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven","permalink":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/5-timing/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef duidelijk aan wanneer het formulier verzonden gaat worden \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Duidelijk aangeven verzenden","pagination_label":"Duidelijk aangeven verzenden","description":"Richtlijnen over duidelijk aangeven wanneer een formulier wordt verzonden.","slug":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Samenvatting in laatste stap","permalink":"/richtlijnen/formulieren/meerdere-stappen/samenvatting"},"next":{"title":"Placeholders in een formulier","permalink":"/richtlijnen/formulieren/placeholders/"}}');
   var t = r(86070),
    o = r(18439),
    s = r(78734),
    a = r(58639),
    i = r(15638);
   function c(e) {
    const n = { button: 'button', h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Geef duidelijk aan dat een formulier verzonden gaat worden.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.button, { children: 'Versturen' }) }) }) }), '\n', (0, t.jsx)(i.$, { appearance: 'dont', title: 'Gebruik hetzelfde label voor verzenden als voor de navigatie in een meerstappenformulier.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.button, { type: 'submit', children: 'Volgende' }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'geef-duidelijk-aan-wanneer-het-formulier-verzonden-gaat-worden', children: 'Geef duidelijk aan wanneer het formulier verzonden gaat worden' }) }), '\n', (0, t.jsx)(n.p, { children: 'Maak duidelijk aan de gebruiker wanneer het formulier echt gaat worden verzonden. Geef ook de gebruiker, als laatste stap, een samenvatting van wat is ingevuld met de mogelijkheid om te wijzigen.' }), '\n', (0, t.jsx)(n.p, { children: 'De tekst van de laatste submitbutton kan dan bijvoorbeeld \u201cVersturen\u201d zijn, afhankelijk van de inhoud van het formulier.' }), '\n', (0, t.jsx)(n.p, { children: 'Dit geeft de gebruiker zekerheid: \u201cik kan nog wat wijzigen\u201d of \u201cnu gaat het formulier echt verzonden worden\u201d.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.4/', children: 'Succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens)' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.6/', children: 'Succescriterium 3.3.6 Foutpreventie (alle)' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   const v = { title: 'Geef duidelijk aan wanneer het formulier verzonden gaat worden \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Duidelijk aangeven verzenden', pagination_label: 'Duidelijk aangeven verzenden', description: 'Richtlijnen over duidelijk aangeven wanneer een formulier wordt verzonden.', slug: '/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    j = {},
    y = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function b(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(b, { ...e }) }) : b();
   }
  },
  58639(e, n, r) {
   r.d(n, { H: () => j });
   var l = r(69284),
    t = r(46447),
    o = r(13526),
    s = r(68148),
    a = r(9016),
    i = r(69303),
    c = r(91635),
    d = r(30734),
    u = r(30758),
    p = r(31186),
    m = r(86070);
   const h = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   h.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const g = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   g.displayName = 'SurfaceContainer';
   const j = ({ code: e, copy: n = !0, defaultExpandedCode: r = !1, displayCode: j = !0, children: y, container: b = 'document', language: f, designTokens: x }) => {
    const k = 'function' == typeof y ? y() : y,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : p.qV(_ || k),
     [z, N] = (0, u.useState)(w),
     [A, C] = (0, u.useState)(r);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: f, plugins: [s.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const R = (0, u.useId)();
    let S = u.Fragment;
    return (
     'paragraph' === b ? (S = h) : 'document' === b ? (S = v) : 'surface' === b && (S = g),
     (0, m.jsxs)('div', {
      className: (0, o.A)('nlds-canvas'),
      children: [
       k && (0, m.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, m.jsx)(S, { children: (0, m.jsx)(t.v$, { children: k }) }) }) }),
       j &&
        (0, m.jsx)('div', {
         className: (0, o.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(t.$n, {
          className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!A);
          },
          'aria-expanded': A,
          'aria-controls': R,
          children: A ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, m.jsxs)('div', {
         className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !A,
         children: [
          (0, m.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: z, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(t.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  69284(e, n, r) {
   r.d(n, { M: () => c });
   var l = r(46447),
    t = r(16194),
    o = r(30758),
    s = r(15638);
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
   var i = r(86070);
   function c({ lineNumber: e, syntax: n, textContent: r, trim: c }) {
    let d = r;
    const { title: u, type: p } = (0, o.useContext)(s.x),
     m = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: r, getLineProps: t, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: r.map((n, r) => (0, i.jsxs)('span', { ...t({ line: n }), children: [e && (0, i.jsx)('span', { children: r + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, r)) })] }) }));
   }
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => a, RM: () => o });
   var l = r(86070),
    t = r(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
