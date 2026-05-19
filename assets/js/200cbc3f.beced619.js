'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [43952],
 {
  18127(e, n, s) {
   s.d(n, { H: () => j });
   var l = s(95822),
    t = s(46447),
    o = s(13526),
    i = s(68148),
    r = s(9016),
    c = s(69303),
    a = s(91635),
    d = s(30734),
    p = s(30758),
    u = s(31186),
    m = s(86070);
   const h = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   h.displayName = 'ParagraphContainer';
   const g = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   g.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const j = ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: j = !0, children: y, container: v = 'document', language: x, designTokens: f }) => {
    const k = 'function' == typeof y ? y() : y,
     _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : u.qV(_ || k),
     [N, A] = (0, p.useState)(w),
     [C, S] = (0, p.useState)(s);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: x, plugins: [i.A, r.Ay, c.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [w]);
    const z = (0, p.useId)();
    let R = p.Fragment;
    return (
     'paragraph' === v ? (R = h) : 'document' === v ? (R = g) : 'surface' === v && (R = b),
     (0, m.jsxs)('div', {
      className: (0, o.A)('nlds-canvas'),
      children: [
       k && (0, m.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(R, { children: (0, m.jsx)(t.v$, { children: k }) }) }) }),
       j &&
        (0, m.jsx)('div', {
         className: (0, o.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(t.$n, {
          className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           S(!C);
          },
          'aria-expanded': C,
          'aria-controls': z,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, m.jsxs)('div', {
         className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: z,
         hidden: !C,
         children: [
          (0, m.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(t.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, s) {
   s.d(n, { R: () => i, x: () => r });
   var l = s(30758);
   const t = {},
    o = l.createContext(t);
   function i(e) {
    const n = l.useContext(o);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : i(e.components)), l.createElement(o.Provider, { value: n }, e.children));
   }
  },
  78734(e, n, s) {
   s.d(n, { Ay: () => r, RM: () => o });
   var l = s(86070),
    t = s(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
  },
  88022(e, n, s) {
   s.d(n, { $: () => p, x: () => d });
   var l = s(4077),
    t = s(58315),
    o = s(46447),
    i = s(13526),
    r = s(9547),
    c = s(30758),
    a = s(86070);
   const d = (0, c.createContext)({}),
    p = ({ title: e, appearance: n, description: s, children: c, figure: p }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      h = p ? 'figcaption' : 'div',
      g = 'string' == typeof s ? (0, a.jsx)(r.oz, { children: s }) : s;
     return (0, a.jsxs)(m, { className: (0, i.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(o.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(o.fz, { children: e })] }), g] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: c }) })] });
    };
  },
  95822(e, n, s) {
   s.d(n, { M: () => a });
   var l = s(46447),
    t = s(16194),
    o = s(30758),
    i = s(88022);
   const r = {
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
   var c = s(86070);
   function a({ lineNumber: e, syntax: n, textContent: s, trim: a }) {
    let d = s;
    const { title: p, type: u } = (0, o.useContext)(i.x),
     m = (0, o.useId)();
    return (a && (d = d.trim()), (0, c.jsx)(t.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: t, getTokenProps: o }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(l.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: s.map((n, s) => (0, c.jsxs)('span', { ...t({ line: n }), children: [e && (0, c.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
  96039(e, n, s) {
   (s.r(n), s.d(n, { assets: () => j, contentTitle: () => b, default: () => x, frontMatter: () => g, metadata: () => l, toc: () => y }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/description/fieldset/index","title":"Plaats descriptions bij een fieldset tussen legend en eerste item","description":"Richtlijnen voor plaatsing van een descriptions bij een fieldset.","source":"@site/docs/richtlijnen/formulieren/description/5-fieldset/index.mdx","sourceDirName":"richtlijnen/formulieren/description/5-fieldset","slug":"/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset","permalink":"/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/5-fieldset/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaats descriptions bij een fieldset tussen legend en eerste item","title_sm":"Description bij fieldsets","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Description bij fieldsets","pagination_label":"Description bij fieldsets","description":"Richtlijnen voor plaatsing van een descriptions bij een fieldset.","slug":"/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Meerdere descriptions","permalink":"/richtlijnen/formulieren/descriptions/meerdere-koppelen"},"next":{"title":"Grootte aanklikbaar gedeelte","permalink":"/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte"}}');
   var t = s(86070),
    o = s(18439),
    i = s(78734),
    r = s(18127),
    c = s(88022);
   function a(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeeld', children: 'Voorbeeld' }), '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Koppel een description aan het fieldset-element, met aria-describedby.', children: (0, t.jsx)(r.H, { language: 'html', children: () => (0, t.jsxs)('fieldset', { 'aria-describedby': 'description-inloggen', children: [(0, t.jsx)('legend', { children: 'Wilt u inloggen?' }), (0, t.jsx)('p', { id: 'description-inloggen', children: 'Als u inlogt worden uw gegevens al ingevuld en kunnen we u makkelijker helpen.' }), (0, t.jsxs)('p', { children: [(0, t.jsx)('input', { id: 'inloggen-ja', type: 'radio', name: 'inloggen', value: 'ja' }), (0, t.jsx)('label', { htmlFor: 'inloggen-ja', children: ' Ja' })] }), (0, t.jsxs)('p', { children: [(0, t.jsx)('input', { id: 'inloggen-nee', type: 'radio', name: 'inloggen', value: 'nee' }), (0, t.jsx)('label', { htmlFor: 'inloggen-nee', children: ' Nee' })] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   function p(e) {
    const n = { code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'plaats-descriptions-van-een-fieldset-tussen-de-legend-en-eerste-item', children: 'Plaats descriptions van een fieldset tussen de legend en eerste item' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Radiobuttons, checkboxes en bijvoorbeeld adresgegevens kunnen worden gegroepeerd in een fieldset. De vraag of het onderwerp staat dan in de legend. Plaats de description onder de legend vlak boven het eerste label/formulierveld. De description wordt aan het ', (0, t.jsx)(n.code, { children: 'fieldset' }), '-element gekoppeld met ', (0, t.jsx)(n.code, { children: 'aria-describedby' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   const g = { title: 'Plaats descriptions bij een fieldset tussen legend en eerste item', title_sm: 'Description bij fieldsets', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Description bij fieldsets', pagination_label: 'Description bij fieldsets', description: 'Richtlijnen voor plaatsing van een descriptions bij een fieldset.', slug: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    j = {},
    y = [{ value: 'Voorbeeld', id: 'voorbeeld', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function v(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(i.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(v, { ...e }) }) : v();
   }
  },
 },
]);
