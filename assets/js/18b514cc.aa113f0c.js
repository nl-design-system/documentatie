'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [89914],
 {
  15638(e, n, o) {
   o.d(n, { $: () => p, x: () => a });
   var r = o(4077),
    l = o(58315),
    s = o(46447),
    t = o(13526),
    c = o(9547),
    i = o(30758),
    d = o(86070);
   const a = (0, i.createContext)({}),
    p = ({ title: e, appearance: n, description: o, children: i, figure: p }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      h = p ? 'figcaption' : 'div',
      y = 'string' == typeof o ? (0, d.jsx)(c.oz, { children: o }) : o;
     return (0, d.jsxs)(m, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, d.jsx)(s.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, d.jsx)(s.fz, { children: e })] }), y] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(a.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => t, x: () => c });
   var r = o(30758);
   const l = {},
    s = r.createContext(l);
   function t(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : t(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, o) {
   o.d(n, { H: () => j });
   var r = o(69284),
    l = o(46447),
    s = o(13526),
    t = o(68148),
    c = o(9016),
    i = o(69303),
    d = o(91635),
    a = o(30734),
    p = o(30758),
    u = o(31186),
    m = o(86070);
   const h = ({ children: e }) => (0, m.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(l.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   h.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, m.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(l.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, m.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const j = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: j = !0, children: g, container: b = 'document', language: x, designTokens: f }) => {
    const k = 'function' == typeof g ? g() : g,
     _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : u.qV(_ || k),
     [N, A] = (0, p.useState)(w),
     [C, S] = (0, p.useState)(o);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await a.Ay.format(w, { parser: x, plugins: [t.A, c.Ay, i.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [w]);
    const z = (0, p.useId)();
    let R = p.Fragment;
    return (
     'paragraph' === b ? (R = h) : 'document' === b ? (R = y) : 'surface' === b && (R = v),
     (0, m.jsxs)('div', {
      className: (0, s.A)('nlds-canvas'),
      children: [
       k && (0, m.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(R, { children: (0, m.jsx)(l.v$, { children: k }) }) }) }),
       j &&
        (0, m.jsx)('div', {
         className: (0, s.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(l.$n, {
          className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
         className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: z,
         hidden: !C,
         children: [
          (0, m.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(l.$n, {
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
   o.d(n, { M: () => d });
   var r = o(46447),
    l = o(16194),
    s = o(30758),
    t = o(15638);
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
   var i = o(86070);
   function d({ lineNumber: e, syntax: n, textContent: o, trim: d }) {
    let a = o;
    const { title: p, type: u } = (0, s.useContext)(t.x),
     m = (0, s.useId)();
    return (d && (a = a.trim()), (0, i.jsx)(l.f4, { theme: c, code: a, language: n || '', children: ({ style: n, tokens: o, getLineProps: l, getTokenProps: s }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(r.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: o.map((n, o) => (0, i.jsxs)('span', { ...l({ line: n }), children: [e && (0, i.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  74079(e, n, o) {
   (o.r(n), o.d(n, { assets: () => j, contentTitle: () => v, default: () => x, frontMatter: () => y, metadata: () => r, toc: () => g }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/description/multiple/README","title":"Meerdere descriptions koppelen \xb7 Descriptions in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.","source":"@site/docs/richtlijnen/formulieren/description/4-multiple/README.mdx","sourceDirName":"richtlijnen/formulieren/description/4-multiple","slug":"/richtlijnen/formulieren/descriptions/meerdere-koppelen","permalink":"/richtlijnen/formulieren/descriptions/meerdere-koppelen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/4-multiple/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Meerdere descriptions koppelen \xb7 Descriptions in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Meerdere descriptions","pagination_label":"Meerdere descriptions","description":"Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.","slug":"/richtlijnen/formulieren/descriptions/meerdere-koppelen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Plaatsing description","permalink":"/richtlijnen/formulieren/descriptions/plaatsing"},"next":{"title":"Description bij fieldsets","permalink":"/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset"}}');
   var l = o(86070),
    s = o(18439),
    t = o(78734),
    c = o(58639),
    i = o(15638);
   function d(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'Koppel alle descriptions aan het formulierveld.', children: (0, l.jsx)(c.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'wachtwoord5', children: 'Nieuw wachtwoord' }) }), (0, l.jsx)('p', { id: 'description-wachtwoord5', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, l.jsx)('p', { id: 'error-wachtwoord5', children: 'Je gekozen wachtwoord is te kort.' }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'wachtwoord5', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord5 error-wachtwoord5' }) })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
   }
   function p(e) {
    const n = { code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'meerdere-descriptions-koppelen', children: 'Meerdere descriptions koppelen' }) }), '\n', (0, l.jsx)(n.p, { children: 'Je kunt meerdere descriptions koppelen aan een formulierveld. Bijvoorbeeld als er een ook nog een foutmelding is.' }), '\n', (0, l.jsxs)(n.p, { children: ['Geef dan ', (0, l.jsx)(n.code, { children: 'aria-describedby' }), " twee waardes (IDs) mee, gescheiden door een spatie. De volgorde van de ID's meegegeven in de ", (0, l.jsx)(n.code, { children: 'aria-describedby' }), ' is de volgorde waarin het voorgelezen wordt.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(m, { ...e }) }) : m(e);
   }
   const y = { title: 'Meerdere descriptions koppelen \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Meerdere descriptions', pagination_label: 'Meerdere descriptions', description: 'Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/meerdere-koppelen', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    g = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function b(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(u, {}), '\n', (0, l.jsx)(a, {}), '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(t.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(b, { ...e }) }) : b();
   }
  },
  78734(e, n, o) {
   o.d(n, { Ay: () => c, RM: () => s });
   var r = o(86070),
    l = o(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
 },
]);
