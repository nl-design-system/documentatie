'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [41349],
 {
  8649: (e, n, o) => {
   o.d(n, { H: () => y });
   var l = o(16609),
    t = o(68873),
    r = o(13526),
    i = o(58713),
    s = o(87347),
    a = o(39644),
    c = o(92406),
    d = o(63313),
    m = o(30758),
    u = o(31186),
    p = o(86070);
   const g = ({ children: e }) => (0, p.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const h = ({ children: e }) => (0, p.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   h.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, p.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const y = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: y = !0, children: b, container: j = 'document', language: f, designTokens: x }) => {
    const k = 'function' == typeof b ? b() : b,
     _ = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : u.qV(_ || k),
     [N, A] = (0, m.useState)(w),
     [z, C] = (0, m.useState)(o);
    (0, m.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: f, plugins: [i.A, s.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [w]);
    const R = (0, m.useId)();
    let S = m.Fragment;
    return (
     'paragraph' === j ? (S = g) : 'document' === j ? (S = h) : 'surface' === j && (S = v),
     (0, p.jsxs)('div', {
      className: (0, r.A)('nlds-canvas'),
      children: [
       k && (0, p.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, p.jsx)(S, { children: (0, p.jsx)(t.v$, { children: k }) }) }) }),
       y &&
        (0, p.jsx)('div', {
         className: (0, r.A)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(t.$n, {
          className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
        (0, p.jsxs)('div', {
         className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !z,
         children: [
          (0, p.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: N, trim: !0 }),
          n &&
           (0, p.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(t.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  16609: (e, n, o) => {
   o.d(n, { M: () => c });
   var l = o(68873),
    t = o(16194),
    r = o(30758),
    i = o(50124);
   const s = {
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
    const { title: m, type: u } = (0, r.useContext)(i.x),
     p = (0, r.useId)();
    return c && (d = d.trim()), (0, a.jsx)(t.f4, { theme: s, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: t, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': p, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...t({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, o)) })] }) });
   }
  },
  22198: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => h, contentTitle: () => g, default: () => b, frontMatter: () => p, metadata: () => l, toc: () => v });
   const l = JSON.parse('{"id":"richtlijnen/formulieren/questions/why/README","title":"Leg uit waarom informatie nodig is \xb7 Uit te vragen informatie in een formulier \xb7 Richtlijnen","description":"Richtlijnen over uitleggen waarom informatie nodig is.","source":"@site/docs/richtlijnen/formulieren/questions/1-why/README.mdx","sourceDirName":"richtlijnen/formulieren/questions/1-why","slug":"/richtlijnen/formulieren/vragen/leg-uit-waarom","permalink":"/richtlijnen/formulieren/vragen/leg-uit-waarom","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/1-why/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Leg uit waarom informatie nodig is \xb7 Uit te vragen informatie in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Waarom stel je de vraag","pagination_label":"Waarom stel je de vraag","description":"Richtlijnen over uitleggen waarom informatie nodig is.","slug":"/richtlijnen/formulieren/vragen/leg-uit-waarom","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Uit te vragen informatie in een formulier","permalink":"/richtlijnen/formulieren/vragen/"},"next":{"title":"Waarom is informatie nodig","permalink":"/richtlijnen/formulieren/vragen/check-noodzaak"}}');
   var t = o(86070),
    r = o(85248),
    i = o(78734),
    s = o(8649),
    a = o(50124);
   function c(e) {
    const n = { h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(a.$, { appearance: 'do', title: 'Leg het doel uit.', description: 'Met uitleg weet de gebruiker waar die aan toe is.', children: (0, t.jsx)(s.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { htmlFor: 'email', children: 'E-mailadres' }), (0, t.jsx)(n.p, { id: 'email-description', children: 'We hebben uw e-mailadres nodig om een afspraakbevestiging te kunnen sturen.' }), (0, t.jsx)(n.input, { 'aria-describedby': 'email-description', autoComplete: 'email', id: 'email', type: 'email' })] }) }) }), '\n', (0, t.jsx)(a.$, { appearance: 'dont', title: 'Privacygevoelige informatie vragen zonder uitleg waarom deze gegevens nodig zijn.', children: (0, t.jsx)(s.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { htmlFor: 'bsn', children: 'Burgerservicenummer' }), (0, t.jsx)(n.input, { id: 'bsn', type: 'text' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function m(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'leg-uit-waarom-informatie-nodig-is', children: 'Leg uit waarom informatie nodig is' }) }), '\n', (0, t.jsx)(n.p, { children: 'Soms lijkt een vraag overbodig, terwijl deze informatie essentieel is voor het verwerken van de gegevens. In zulke gevallen is het een goed idee een korte uitleg toe te voegen, om bijvoorbeeld het doel te beschrijven.' }), '\n', (0, t.jsx)(n.p, { children: 'Vertel waarom je deze informatie nodig hebt en wat je ermee doet. Uitleg geeft duidelijkheid aan de gebruiker en voorkomt onzekerheid bij het invullen.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   const p = { title: 'Leg uit waarom informatie nodig is \xb7 Uit te vragen informatie in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Waarom stel je de vraag', pagination_label: 'Waarom stel je de vraag', description: 'Richtlijnen over uitleggen waarom informatie nodig is.', slug: '/richtlijnen/formulieren/vragen/leg-uit-waarom', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    h = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, ...i.RM];
   function y(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(i.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(y, { ...e }) }) : y();
   }
  },
  50124: (e, n, o) => {
   o.d(n, { $: () => d, x: () => c });
   var l = o(54736),
    t = o(26990),
    r = o(68873),
    i = o(13526),
    s = o(30758),
    a = o(86070);
   const c = (0, s.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: s, figure: d }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      p = d ? 'figcaption' : 'div';
     return (0, a.jsxs)(u, { className: (0, i.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, a.jsx)(r.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, a.jsx)(r.fz, { children: e })] }), o] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: m[n] }, children: s }) })] });
    };
  },
  78734: (e, n, o) => {
   o.d(n, { Ay: () => s, RM: () => r });
   var l = o(86070),
    t = o(85248);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
  },
  85248: (e, n, o) => {
   o.d(n, { R: () => i, x: () => s });
   var l = o(30758);
   const t = {},
    r = l.createContext(t);
   function i(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : i(e.components)), l.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
