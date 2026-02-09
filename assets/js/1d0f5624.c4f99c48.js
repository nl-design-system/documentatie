'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [58293],
 {
  15638(e, n, o) {
   o.d(n, { $: () => d, x: () => a });
   var l = o(4077),
    r = o(58315),
    s = o(46447),
    t = o(13526),
    i = o(30758),
    c = o(86070);
   const a = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: o, children: i, figure: d }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div';
     return (0, c.jsxs)(h, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(s.fz, { children: e })] }), o] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(a.Provider, { value: { title: e, type: p[n] }, children: i }) })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => t, x: () => i });
   var l = o(30758);
   const r = {},
    s = l.createContext(r);
   function t(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), l.createElement(s.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, o) {
   o.d(n, { H: () => b });
   var l = o(69284),
    r = o(46447),
    s = o(13526),
    t = o(68148),
    i = o(9016),
    c = o(69303),
    a = o(91635),
    d = o(30734),
    p = o(30758),
    h = o(31186),
    u = o(86070);
   const m = ({ children: e }) => (0, u.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const g = ({ children: e }) => (0, u.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   g.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, u.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const b = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: b = !0, children: j, container: y = 'document', language: x, designTokens: f }) => {
    const w = 'function' == typeof j ? j() : j,
     k = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     _ = 'string' == typeof e ? e : h.qV(k || w),
     [N, A] = (0, p.useState)(_),
     [C, R] = (0, p.useState)(o);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(_, { parser: x, plugins: [t.A, i.Ay, c.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [_]);
    const S = (0, p.useId)();
    let z = p.Fragment;
    return (
     'paragraph' === y ? (z = m) : 'document' === y ? (z = g) : 'surface' === y && (z = v),
     (0, u.jsxs)('div', {
      className: (0, s.A)('nlds-canvas'),
      children: [
       w && (0, u.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, u.jsx)(z, { children: (0, u.jsx)(r.v$, { children: w }) }) }) }),
       b &&
        (0, u.jsx)('div', {
         className: (0, s.A)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(r.$n, {
          className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           R(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, u.jsxs)('div', {
         className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, u.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          n &&
           (0, u.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(r.$n, {
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
   o.d(n, { M: () => a });
   var l = o(46447),
    r = o(16194),
    s = o(30758),
    t = o(15638);
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
    const { title: p, type: h } = (0, s.useContext)(t.x),
     u = (0, s.useId)();
    return (a && (d = d.trim()), (0, c.jsx)(r.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: r, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(l.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: o.map((n, o) => (0, c.jsxs)('span', { ...r({ line: n }), children: [e && (0, c.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  73033(e, n, o) {
   (o.r(n), o.d(n, { assets: () => b, contentTitle: () => v, default: () => x, frontMatter: () => g, metadata: () => l, toc: () => j }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/description/placement/README","title":"Plaats descriptions tussen label en formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor plaatsing van een description bij een formulierveld.","source":"@site/docs/richtlijnen/formulieren/description/2-placement/README.mdx","sourceDirName":"richtlijnen/formulieren/description/2-placement","slug":"/richtlijnen/formulieren/descriptions/plaatsing","permalink":"/richtlijnen/formulieren/descriptions/plaatsing","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/2-placement/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaats descriptions tussen label en formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing description","pagination_label":"Plaatsing description","description":"Richtlijnen voor plaatsing van een description bij een formulierveld.","slug":"/richtlijnen/formulieren/descriptions/plaatsing","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Inhoud description","permalink":"/richtlijnen/formulieren/descriptions/inhoud"},"next":{"title":"Meerdere descriptions","permalink":"/richtlijnen/formulieren/descriptions/meerdere-koppelen"}}');
   var r = o(86070),
    s = o(18439),
    t = o(78734),
    i = o(58639),
    c = o(15638);
   function a(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(c.$, { appearance: 'do', title: 'Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('label', { htmlFor: 'wachtwoord1', children: 'Nieuw wachtwoord' }), (0, r.jsx)('p', { id: 'description-wachtwoord1', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)('input', { id: 'wachtwoord1', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord1' })] }) }) }), '\n', (0, r.jsx)(c.$, { appearance: 'do', title: 'Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('label', { htmlFor: 'wachtwoord2', children: 'Nieuw wachtwoord' }), (0, r.jsx)('p', { id: 'description-wachtwoord2', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)('p', { id: 'error-wachtwoord2', children: 'Je gekozen wachtwoord is te kort.' }), (0, r.jsx)('input', { id: 'wachtwoord2', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord2 error-wachtwoord2' })] }) }) }), '\n', (0, r.jsx)(c.$, { appearance: 'dont', title: 'Description onder het formulierveld plaatsen.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('label', { htmlFor: 'wachtwoord3', children: 'Nieuw wachtwoord' }), (0, r.jsx)('input', { id: 'wachtwoord3', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord3' }), (0, r.jsx)('p', { id: 'description-wachtwoord3', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' })] }) }) }), '\n', (0, r.jsx)(c.$, { appearance: 'dont', title: 'Description boven het formulierveld en foutmelding eronder plaatsen.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('label', { htmlFor: 'wachtwoord4', children: 'Nieuw wachtwoord' }), (0, r.jsx)('p', { id: 'description-wachtwoord4', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)('input', { id: 'wachtwoord4', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord4 error-wachtwoord4' }), (0, r.jsx)('p', { id: 'error-wachtwoord4', children: 'Je gekozen wachtwoord is te kort.' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
   function p(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'plaats-descriptions-tussen-label-en-formulierveld', children: 'Plaats descriptions tussen label en formulierveld' }) }), '\n', (0, r.jsx)(n.p, { children: 'Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld. Omdat de gebruiker van boven naar beneden leest, komt deze informatie na het label op een logisch moment in de leesvolgorde.' }), '\n', (0, r.jsxs)(n.p, { children: ['Ook is dan de kans dat de informatie overlapt met bijvoorbeeld browserpopups kleiner. Lees hiervoor het artikel ', (0, r.jsx)(n.a, { href: 'https://adrianroselli.com/2017/01/avoid-messages-under-fields.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Avoid Messages Under Fields' }) }), ' van Adrian Roselli.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'Plaats descriptions tussen label en formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing description', pagination_label: 'Plaatsing description', description: 'Richtlijnen voor plaatsing van een description bij een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    b = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function y(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(h, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(t.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y();
   }
  },
  78734(e, n, o) {
   o.d(n, { Ay: () => i, RM: () => s });
   var l = o(86070),
    r = o(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(t, { ...e }) }) : t(e);
   }
  },
 },
]);
