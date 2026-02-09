'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [39882],
 {
  15638(e, n, o) {
   o.d(n, { $: () => d, x: () => c });
   var l = o(4077),
    t = o(58315),
    s = o(46447),
    r = o(13526),
    i = o(30758),
    a = o(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: i, figure: d }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      g = d ? 'figcaption' : 'div';
     return (0, a.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, a.jsx)(s.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, a.jsx)(s.fz, { children: e })] }), o] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: p[n] }, children: i }) })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => r, x: () => i });
   var l = o(30758);
   const t = {},
    s = l.createContext(t);
   function r(e) {
    const n = l.useContext(s);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), l.createElement(s.Provider, { value: n }, e.children));
   }
  },
  22931(e, n, o) {
   (o.r(n), o.d(n, { assets: () => j, contentTitle: () => h, default: () => x, frontMatter: () => m, metadata: () => l, toc: () => b }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/confirmation/next-steps/README","title":"Vertel wat de vervolgacties zijn \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen","description":"Richtlijnen voor vervolgstappen.","source":"@site/docs/richtlijnen/formulieren/confirmation/3-next-steps/README.mdx","sourceDirName":"richtlijnen/formulieren/confirmation/3-next-steps","slug":"/richtlijnen/formulieren/bevestigingspagina/vervolgstappen","permalink":"/richtlijnen/formulieren/bevestigingspagina/vervolgstappen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/confirmation/3-next-steps/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Vertel wat de vervolgacties zijn \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Benoem vervolgstappen","pagination_label":"Benoem vervolgstappen","description":"Richtlijnen voor vervolgstappen.","slug":"/richtlijnen/formulieren/bevestigingspagina/vervolgstappen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Toegankelijke succesmelding","permalink":"/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding"},"next":{"title":"Contact opnemen","permalink":"/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen"}}');
   var t = o(86070),
    s = o(18439),
    r = o(78734),
    i = o(58639),
    a = o(15638);
   function c(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(a.$, { appearance: 'do', title: 'Informeren dat het formulier is verzonden en wat de vervolgacties zijn.', children: (0, t.jsx)(i.H, { language: 'html', children: () => (0, t.jsxs)('div', { children: [(0, t.jsx)('p', { children: 'Uw vraag is met succes verstuurd. Zaaknummer 123456789.' }), (0, t.jsx)('p', { children: 'Wat gaat er nu gebeuren?' }), (0, t.jsxs)('ul', { children: [(0, t.jsx)('li', { children: 'U ontvangt een bevestigingsmail op gebruiker@voorbeeld.com' }), (0, t.jsx)('li', { children: 'De afdeling Vraagbaak gaat met uw vraag aan de slag.' }), (0, t.jsx)('li', { children: 'U wordt per e-mail op de hoogte gehouden maar kunt de voortgang ook inzien binnen uw Mijn omgeving.' })] })] }) }) }), '\n', (0, t.jsx)(a.$, { appearance: 'dont', title: 'Vervolgstappen weglaten.', children: (0, t.jsx)(i.H, { language: 'html', children: () => (0, t.jsx)('p', { children: 'Uw vraag is verstuurd.' }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function p(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'vertel-wat-de-vervolgacties-zijn', children: 'Vertel wat de vervolgacties zijn' }) }), '\n', (0, t.jsx)(n.p, { children: 'Vermeld wat er gaat gebeuren, bijvoorbeeld "U krijgt na 5 werkdagen reactie via een e-mail", "Wij nemen contact met u op via e-mail als we een antwoord hebben op uw vraag". Wat van toepassing is voor het betreffende formulier.' }), '\n', (0, t.jsxs)(n.p, { children: ['Uit gebruikersonderzoek van de "Mijn Omgeving" van Den Haag is \xe9\xe9n van de conclusies: ', (0, t.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/mijn-zaken/denhaag-mijn-omgeving', children: 'Houd rekening met de wens van inwoners om veel bevestiging te krijgen' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   function g(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.2.6/', children: 'Succescriterium 3.2.6 Consistente hulp' }) }), '\n'] })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
   const m = { title: 'Vertel wat de vervolgacties zijn \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Benoem vervolgstappen', pagination_label: 'Benoem vervolgstappen', description: 'Richtlijnen voor vervolgstappen.', slug: '/richtlijnen/formulieren/bevestigingspagina/vervolgstappen', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    j = {},
    b = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function y(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(v, {}), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(y, { ...e }) }) : y();
   }
  },
  58639(e, n, o) {
   o.d(n, { H: () => j });
   var l = o(69284),
    t = o(46447),
    s = o(13526),
    r = o(68148),
    i = o(9016),
    a = o(69303),
    c = o(91635),
    d = o(30734),
    p = o(30758),
    u = o(31186),
    g = o(86070);
   const v = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const m = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   m.displayName = 'DocumentContainer';
   const h = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   h.displayName = 'SurfaceContainer';
   const j = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: j = !0, children: b, container: y = 'document', language: x, designTokens: f }) => {
    const k = 'function' == typeof b ? b() : b,
     _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : u.qV(_ || k),
     [N, z] = (0, p.useState)(w),
     [A, C] = (0, p.useState)(o);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: x, plugins: [r.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [w]);
    const R = (0, p.useId)();
    let S = p.Fragment;
    return (
     'paragraph' === y ? (S = v) : 'document' === y ? (S = m) : 'surface' === y && (S = h),
     (0, g.jsxs)('div', {
      className: (0, s.A)('nlds-canvas'),
      children: [
       k && (0, g.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, g.jsx)(S, { children: (0, g.jsx)(t.v$, { children: k }) }) }) }),
       j &&
        (0, g.jsx)('div', {
         className: (0, s.A)('nlds-canvas__toolbar'),
         children: (0, g.jsx)(t.$n, {
          className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
        (0, g.jsxs)('div', {
         className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !A,
         children: [
          (0, g.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          n &&
           (0, g.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, g.jsx)(t.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  69284(e, n, o) {
   o.d(n, { M: () => c });
   var l = o(46447),
    t = o(16194),
    s = o(30758),
    r = o(15638);
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
   var a = o(86070);
   function c({ lineNumber: e, syntax: n, textContent: o, trim: c }) {
    let d = o;
    const { title: p, type: u } = (0, s.useContext)(r.x),
     g = (0, s.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(t.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: t, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': g, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...t({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  78734(e, n, o) {
   o.d(n, { Ay: () => i, RM: () => s });
   var l = o(86070),
    t = o(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
 },
]);
