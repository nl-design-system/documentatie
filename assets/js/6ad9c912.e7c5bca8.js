'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67688],
 {
  15638(e, n, o) {
   o.d(n, { $: () => p, x: () => d });
   var l = o(4077),
    t = o(58315),
    r = o(46447),
    s = o(13526),
    c = o(9547),
    a = o(30758),
    i = o(86070);
   const d = (0, a.createContext)({}),
    p = ({ title: e, appearance: n, description: o, children: a, figure: p }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div',
      y = 'string' == typeof o ? (0, i.jsx)(c.oz, { children: o }) : o;
     return (0, i.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(r.fz, { children: e })] }), y] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: a }) })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => s, x: () => c });
   var l = o(30758);
   const t = {},
    r = l.createContext(t);
   function s(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), l.createElement(r.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, o) {
   o.d(n, { H: () => k });
   var l = o(69284),
    t = o(46447),
    r = o(13526),
    s = o(68148),
    c = o(9016),
    a = o(69303),
    i = o(91635),
    d = o(30734),
    p = o(30758),
    u = o(31186),
    h = o(86070);
   const m = ({ children: e }) => (0, h.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, h.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, h.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const k = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: k = !0, children: g, container: j = 'document', language: b, designTokens: x }) => {
    const f = 'function' == typeof g ? g() : g,
     w = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     _ = 'string' == typeof e ? e : u.qV(w || f),
     [N, A] = (0, p.useState)(_),
     [C, S] = (0, p.useState)(o);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(_, { parser: b, plugins: [s.A, c.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [_]);
    const R = (0, p.useId)();
    let z = p.Fragment;
    return (
     'paragraph' === j ? (z = m) : 'document' === j ? (z = y) : 'surface' === j && (z = v),
     (0, h.jsxs)('div', {
      className: (0, r.A)('nlds-canvas'),
      children: [
       f && (0, h.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, h.jsx)(z, { children: (0, h.jsx)(t.v$, { children: f }) }) }) }),
       k &&
        (0, h.jsx)('div', {
         className: (0, r.A)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(t.$n, {
          className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           S(!C);
          },
          'aria-expanded': C,
          'aria-controls': R,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       k &&
        (0, h.jsxs)('div', {
         className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !C,
         children: [
          (0, h.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: b, textContent: N, trim: !0 }),
          n &&
           (0, h.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(t.$n, {
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
  69284(e, n, o) {
   o.d(n, { M: () => i });
   var l = o(46447),
    t = o(16194),
    r = o(30758),
    s = o(15638);
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
   var a = o(86070);
   function i({ lineNumber: e, syntax: n, textContent: o, trim: i }) {
    let d = o;
    const { title: p, type: u } = (0, r.useContext)(s.x),
     h = (0, r.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(t.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: t, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': h, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...t({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  72389(e, n, o) {
   (o.r(n), o.d(n, { assets: () => k, contentTitle: () => v, default: () => b, frontMatter: () => y, metadata: () => l, toc: () => g }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/help/allow-copy-paste/README","title":"Sta knippen en plakken van een wachtwoord toe \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen","description":"Richtlijnen om knippen en plakken van een wachtwoord toe te staan.","source":"@site/docs/richtlijnen/formulieren/help/2-allow-copy-paste/README.mdx","sourceDirName":"richtlijnen/formulieren/help/2-allow-copy-paste","slug":"/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/","permalink":"/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/2-allow-copy-paste/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Sta knippen en plakken van een wachtwoord toe \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Wachtwoord plakken","pagination_label":"Wachtwoord plakken","description":"Richtlijnen om knippen en plakken van een wachtwoord toe te staan.","slug":"/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Optioneel of verplicht","permalink":"/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/"},"next":{"title":"Keur niet te snel af","permalink":"/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af"}}');
   var t = o(86070),
    r = o(18439),
    s = o(78734),
    c = o(58639),
    a = o(15638);
   function i(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(a.$, { appearance: 'do', title: 'Sta kopi\xebren van een wachtwoord toe.', children: (0, t.jsx)(c.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'pw1', children: 'Uw nieuwe wachtwoord' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'password', id: 'wachtwoord2', autoComplete: 'new-password', name: 'wachtwoord' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   function p(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'sta-knippen-en-plakken-van-een-wachtwoord-toe', children: 'Sta knippen en plakken van een wachtwoord toe' }) }), '\n', (0, t.jsx)(n.p, { children: 'Een wachtwoord moet veilig zijn. Als je het knippen en plakken van een wachtwoord verhindert, dwing je gebruikers tot een simpel en goed te onthouden wachtwoord. Dat is nu juist niet de bedoeling.' }), '\n', (0, t.jsx)(n.p, { children: 'Kopi\xebren/plakken vanuit een wachtwoordmanager is een veel veiligere manier om een gebruiker een wachtwoord te laten invullen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Zoals het Britse ', (0, t.jsx)('span', { lang: 'en', children: 'National Cyber Security Centre' }), ' uitlegt in ', (0, t.jsx)(n.a, { href: 'https://www.ncsc.gov.uk/blog-post/let-them-paste-passwords', children: (0, t.jsx)('span', { lang: 'en', children: 'Let them paste passwords' }) }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.8/', children: 'Succescriterium 3.3.8 Toegankelijke authenticatie (minimum)' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.9/', children: 'Succescriterium 3.3.9 Toegankelijke authenticatie (uitgebreid)' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   const y = { title: 'Sta knippen en plakken van een wachtwoord toe \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Wachtwoord plakken', pagination_label: 'Wachtwoord plakken', description: 'Richtlijnen om knippen en plakken van een wachtwoord toe te staan.', slug: '/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    k = {},
    g = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function j(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j();
   }
  },
  78734(e, n, o) {
   o.d(n, { Ay: () => c, RM: () => r });
   var l = o(86070),
    t = o(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
