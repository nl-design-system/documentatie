'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [55628],
 {
  15638(e, n, r) {
   r.d(n, { $: () => d, x: () => c });
   var o = r(4077),
    t = r(58315),
    l = r(46447),
    s = r(13526),
    i = r(30758),
    a = r(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: r, children: i, figure: d }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div';
     return (0, a.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, a.jsx)(l.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, a.jsx)(l.fz, { children: e })] }), r] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: p[n] }, children: i }) })] });
    };
  },
  18439(e, n, r) {
   r.d(n, { R: () => s, x: () => i });
   var o = r(30758);
   const t = {},
    l = o.createContext(t);
   function s(e) {
    const n = o.useContext(l);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), o.createElement(l.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, r) {
   r.d(n, { H: () => j });
   var o = r(69284),
    t = r(46447),
    l = r(13526),
    s = r(68148),
    i = r(9016),
    a = r(69303),
    c = r(91635),
    d = r(30734),
    p = r(30758),
    u = r(31186),
    m = r(86070);
   const h = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   h.displayName = 'ParagraphContainer';
   const g = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   g.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const j = ({ code: e, copy: n = !0, defaultExpandedCode: r = !1, displayCode: j = !0, children: b, container: y = 'document', language: x, designTokens: f }) => {
    const k = 'function' == typeof b ? b() : b,
     _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : u.qV(_ || k),
     [N, A] = (0, p.useState)(w),
     [C, z] = (0, p.useState)(r);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: x, plugins: [s.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [w]);
    const R = (0, p.useId)();
    let S = p.Fragment;
    return (
     'paragraph' === y ? (S = h) : 'document' === y ? (S = g) : 'surface' === y && (S = v),
     (0, m.jsxs)('div', {
      className: (0, l.A)('nlds-canvas'),
      children: [
       k && (0, m.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(S, { children: (0, m.jsx)(t.v$, { children: k }) }) }) }),
       j &&
        (0, m.jsx)('div', {
         className: (0, l.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(t.$n, {
          className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           z(!C);
          },
          'aria-expanded': C,
          'aria-controls': R,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, m.jsxs)('div', {
         className: (0, l.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !C,
         children: [
          (0, m.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(t.$n, {
             className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(N).catch((e) => console.error('Copy code failed', e));
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
  60510(e, n, r) {
   (r.r(n), r.d(n, { assets: () => j, contentTitle: () => v, default: () => x, frontMatter: () => g, metadata: () => o, toc: () => b }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/multistep/location/README","title":"Plaats de informatie over waar de gebruiker is in de stappen boven het formulier \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen","description":"Richtlijnen over positie van de formulier voortgang.","source":"@site/docs/richtlijnen/formulieren/multistep/2-location/README.mdx","sourceDirName":"richtlijnen/formulieren/multistep/2-location","slug":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang","permalink":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/2-location/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaats de informatie over waar de gebruiker is in de stappen boven het formulier \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing voortgang stappen","pagination_label":"Plaatsing voortgang stappen","description":"Richtlijnen over positie van de formulier voortgang.","slug":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Voortgang stappen tonen","permalink":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen"},"next":{"title":"Consistente navigatie","permalink":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming"}}');
   var t = r(86070),
    l = r(18439),
    s = r(78734),
    i = r(58639),
    a = r(15638);
   function c(e) {
    const n = { h2: 'h2', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(a.$, { appearance: 'do', title: 'Info boven het form element.', children: (0, t.jsx)(i.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('h2', { children: 'Uw gegevens' }), (0, t.jsx)('p', { children: 'Stap 2 van 3' }), (0, t.jsx)('form', { children: '[... inhoud formulier \u2026]' })] }) }) }), '\n', (0, t.jsx)(a.$, { appearance: 'do', title: 'De tekst van de stap opnemen in het kopje, boven het formulier.', description: 'En deze tekst visueel op een andere regel plaatsen. ', children: (0, t.jsx)(i.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)('h2', { children: [(0, t.jsx)('span', { class: 'progress-indicator', children: 'Stap 2 van 3' }), 'Uw gegevens'] }), (0, t.jsx)('form', { children: '[... inhoud formulier \u2026]' })] }) }) }), '\n', (0, t.jsx)(a.$, { appearance: 'dont', title: 'Info binnen het formulier.', children: (0, t.jsx)(i.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('h2', { children: 'Uw gegevens' }), (0, t.jsxs)('form', { children: [(0, t.jsx)('h3', { children: 'Stap 2 van 3' }), '[... inhoud formulier \u2026]'] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Plaats tekst en uitleg die hoort bij het formulier buiten het ', (0, t.jsx)(n.code, { children: '<form>' }), ' element. Dus zet informatie over de stappen ', (0, t.jsx)(n.strong, { children: 'boven' }), ' en niet ', (0, t.jsx)(n.strong, { children: 'binnen' }), ' het ', (0, t.jsx)(n.code, { children: '<form>' }), ' element. Dan is de kans dat gebruikers van ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' deze informatie missen het kleinst. Het waarom staat uitgelegd bij de richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/koppelen/', children: 'Koppel een description aan het formulierveld' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het voordeel van een formulier in meer stappen is, dat je makkelijker uitgebreide informatie per stap kunt toevoegen ', (0, t.jsx)(n.strong, { children: 'boven' }), ' het formulier. Dat scheelt de complexiteit van eventueel gebruik van ARIA om tekst te laten voorlezen bij een formulierveld.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   const g = { title: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing voortgang stappen', pagination_label: 'Plaatsing voortgang stappen', description: 'Richtlijnen over positie van de formulier voortgang.', slug: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    b = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function y(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(y, { ...e }) }) : y();
   }
  },
  69284(e, n, r) {
   r.d(n, { M: () => c });
   var o = r(46447),
    t = r(16194),
    l = r(30758),
    s = r(15638);
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
   var a = r(86070);
   function c({ lineNumber: e, syntax: n, textContent: r, trim: c }) {
    let d = r;
    const { title: p, type: u } = (0, l.useContext)(s.x),
     m = (0, l.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(t.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: r, getLineProps: t, getTokenProps: l }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: r.map((n, r) => (0, a.jsxs)('span', { ...t({ line: n }), children: [e && (0, a.jsx)('span', { children: r + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, r)) })] }) }));
   }
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => i, RM: () => l });
   var o = r(86070),
    t = r(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
