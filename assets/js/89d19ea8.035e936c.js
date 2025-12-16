'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [39882],
 {
  8649: (e, n, o) => {
   o.d(n, { H: () => b });
   var l = o(16609),
    t = o(68873),
    s = o(13526),
    r = o(58713),
    a = o(87347),
    i = o(39644),
    c = o(92406),
    d = o(63313),
    p = o(30758),
    u = o(31186),
    g = o(86070);
   const v = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const m = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   m.displayName = 'DocumentContainer';
   const h = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   h.displayName = 'SurfaceContainer';
   const b = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: b = !0, children: y, container: j = 'document', language: x, designTokens: f }) => {
    const k = 'function' == typeof y ? y() : y,
     _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : u.qV(_ || k),
     [N, z] = (0, p.useState)(w),
     [A, C] = (0, p.useState)(o);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: x, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [w]);
    const R = (0, p.useId)();
    let S = p.Fragment;
    return (
     'paragraph' === j ? (S = v) : 'document' === j ? (S = m) : 'surface' === j && (S = h),
     (0, g.jsxs)('div', {
      className: (0, s.A)('nlds-canvas'),
      children: [
       k && (0, g.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, g.jsx)(S, { children: (0, g.jsx)(t.v$, { children: k }) }) }) }),
       b &&
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
       b &&
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
  13858: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => m, contentTitle: () => v, default: () => y, frontMatter: () => g, metadata: () => l, toc: () => h });
   const l = JSON.parse('{"id":"richtlijnen/formulieren/confirmation/next-steps/README","title":"Vertel wat de vervolgacties zijn \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen","description":"Richtlijnen voor vervolgstappen.","source":"@site/docs/richtlijnen/formulieren/confirmation/3-next-steps/README.mdx","sourceDirName":"richtlijnen/formulieren/confirmation/3-next-steps","slug":"/richtlijnen/formulieren/bevestigingspagina/vervolgstappen","permalink":"/richtlijnen/formulieren/bevestigingspagina/vervolgstappen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/confirmation/3-next-steps/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Vertel wat de vervolgacties zijn \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Benoem vervolgstappen","pagination_label":"Benoem vervolgstappen","description":"Richtlijnen voor vervolgstappen.","slug":"/richtlijnen/formulieren/bevestigingspagina/vervolgstappen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Toegankelijke succesmelding","permalink":"/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding"},"next":{"title":"Contact opnemen","permalink":"/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen"}}');
   var t = o(86070),
    s = o(85248),
    r = o(78734),
    a = o(8649),
    i = o(50124);
   function c(e) {
    const n = { div: 'div', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Informeren dat het formulier is verzonden en wat de vervolgacties zijn.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.p, { children: 'Uw vraag is met succes verstuurd. Zaaknummer 123456789.' }), (0, t.jsx)(n.p, { children: 'Wat gaat er nu gebeuren?' }), (0, t.jsxs)(n.ul, { children: [(0, t.jsx)(n.li, { children: 'U ontvangt een bevestigingsmail op gebruiker@voorbeeld.com' }), (0, t.jsx)(n.li, { children: 'De afdeling Vraagbaak gaat met uw vraag aan de slag.' }), (0, t.jsx)(n.li, { children: 'U wordt per e-mail op de hoogte gehouden maar kunt de voortgang ook inzien binnen uw Mijn omgeving.' })] })] }) }) }), '\n', (0, t.jsx)(i.$, { appearance: 'dont', title: 'Vervolgstappen weglaten.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsx)(n.p, { children: 'Uw vraag is verstuurd.' }) }) })] });
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
   const g = { title: 'Vertel wat de vervolgacties zijn \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Benoem vervolgstappen', pagination_label: 'Benoem vervolgstappen', description: 'Richtlijnen voor vervolgstappen.', slug: '/richtlijnen/formulieren/bevestigingspagina/vervolgstappen', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    m = {},
    h = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, ...r.RM];
   function b(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(b, { ...e }) }) : b();
   }
  },
  16609: (e, n, o) => {
   o.d(n, { M: () => c });
   var l = o(68873),
    t = o(16194),
    s = o(30758),
    r = o(50124);
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
   var i = o(86070);
   function c({ lineNumber: e, syntax: n, textContent: o, trim: c }) {
    let d = o;
    const { title: p, type: u } = (0, s.useContext)(r.x),
     g = (0, s.useId)();
    return c && (d = d.trim()), (0, i.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: t, getTokenProps: s }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': g, style: n, children: o.map((n, o) => (0, i.jsxs)('span', { ...t({ line: n }), children: [e && (0, i.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] }) });
   }
  },
  50124: (e, n, o) => {
   o.d(n, { $: () => d, x: () => c });
   var l = o(54736),
    t = o(26990),
    s = o(68873),
    r = o(13526),
    a = o(30758),
    i = o(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: a, figure: d }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      g = d ? 'figcaption' : 'div';
     return (0, i.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(s.fz, { children: e })] }), o] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  78734: (e, n, o) => {
   o.d(n, { Ay: () => a, RM: () => s });
   var l = o(86070),
    t = o(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  85248: (e, n, o) => {
   o.d(n, { R: () => r, x: () => a });
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
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), l.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
