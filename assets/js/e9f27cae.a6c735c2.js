'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [11341],
 {
  9386(e, n, l) {
   l.d(n, { H: () => b });
   var o = l(95822),
    t = l(46447),
    s = l(13526),
    r = l(68148),
    a = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    p = l(30758),
    h = l(31186),
    u = l(65904),
    m = l.n(u),
    g = l(51627),
    v = l(86070);
   const y = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const b = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        o = (0, h.qV)(l)
         .replaceAll(/&quot;/g, '"')
         .replaceAll(/\sclass="[\w-\s]+"/g, '')
         .replaceAll(/\sid="[\w-\s]+"/g, '')
         .replace('<astro-static-slot>', '')
         .replace('</astro-static-slot>', '')
         .replaceAll(/{"\s"}/g, '')
         .replaceAll(/\n{2,}/g, '\n')
         .replaceAll(/^\s\s/gm, '')
         .replaceAll(/\salt\s/g, ' alt="" ')
         .replaceAll(' loading="lazy"', ' '),
        t = m().highlight(o, m().languages[n], n);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: u = !0, children: m, container: g = 'document', language: b, designTokens: k }) => {
       const f = 'function' == typeof m ? m() : m,
        w = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        _ = 'string' == typeof e ? e : h.qV(w || f),
        [N, A] = (0, p.useState)(_),
        [C, S] = (0, p.useState)(l);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(_, { parser: b, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [_]);
       const z = (0, p.useId)();
       let R = p.Fragment;
       return (
        'paragraph' === g ? (R = y) : 'document' === g ? (R = j) : 'surface' === g && (R = x),
        (0, v.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          f && (0, v.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, v.jsx)(R, { children: (0, v.jsx)(t.v$, { children: f }) }) }) }),
          u &&
           (0, v.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(t.$n, {
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
          u &&
           (0, v.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, v.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: b, textContent: N, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(t.$n, {
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
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => a });
   var o = l(30758);
   const t = {},
    s = o.createContext(t);
   function r(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => c, n: () => a });
   var o = l(13526),
    t = l(96345),
    s = l(37168),
    r = l(86070);
   const a = ({ className: e, ...n }) => {
     const l = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: l, children: n.children });
    },
    c = ({ className: e, label: n, heading: l, headingLevel: a, headingApperance: c, ...i }) => {
     const d = (0, o.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: d, ...i, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(t.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [l && (0, r.jsx)(s.D, { level: a, appearance: c, children: l }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => s });
   var o = l(86070),
    t = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => p, x: () => d });
   var o = l(4077),
    t = l(58315),
    s = l(46447),
    r = l(13526),
    a = l(45980),
    c = l(30758),
    i = l(86070);
   const d = (0, c.createContext)({}),
    p = ({ title: e, appearance: n, description: l, children: c, figure: p }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, i.jsx)(a.oz, { children: l }) : l;
     return (0, i.jsxs)(u, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(s.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: c }) })] });
    };
  },
  92012(e, n, l) {
   (l.r(n), l.d(n, { assets: () => y, contentTitle: () => v, default: () => b, frontMatter: () => g, metadata: () => o, toc: () => j }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/help/allow-copy-paste/index","title":"Sta knippen en plakken van een wachtwoord toe","description":"Richtlijnen om knippen en plakken van een wachtwoord toe te staan.","source":"@site/docs/richtlijnen/formulieren/help/2-allow-copy-paste/index.mdx","sourceDirName":"richtlijnen/formulieren/help/2-allow-copy-paste","slug":"/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/","permalink":"/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/2-allow-copy-paste/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Sta knippen en plakken van een wachtwoord toe","title_sm":"Wachtwoord plakken","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Wachtwoord plakken","pagination_label":"Wachtwoord plakken","description":"Richtlijnen om knippen en plakken van een wachtwoord toe te staan.","slug":"/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Optioneel of verplicht","permalink":"/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/"},"next":{"title":"Keur niet te snel af","permalink":"/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af"}}');
   var t = l(86070),
    s = l(18439),
    r = l(78734),
    a = l(9386),
    c = l(88022);
   function i(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Sta kopi\xebren van een wachtwoord toe.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('label', { htmlFor: 'pw1', children: 'Uw nieuwe wachtwoord' }), (0, t.jsx)('input', { type: 'password', id: 'pw1', autoComplete: 'new-password', name: 'wachtwoord' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   function p(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'sta-knippen-en-plakken-van-een-wachtwoord-toe', children: 'Sta knippen en plakken van een wachtwoord toe' }) }), '\n', (0, t.jsx)(n.p, { children: 'Een wachtwoord moet veilig zijn. Als je het knippen en plakken van een wachtwoord verhindert, dwing je gebruikers tot een simpel en goed te onthouden wachtwoord. Dat is nu juist niet de bedoeling.' }), '\n', (0, t.jsx)(n.p, { children: 'Kopi\xebren/plakken vanuit een wachtwoordmanager is een veel veiligere manier om een gebruiker een wachtwoord te laten invullen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Zoals het Britse ', (0, t.jsx)('span', { lang: 'en', children: 'National Cyber Security Centre' }), ' uitlegt in ', (0, t.jsx)(n.a, { href: 'https://www.ncsc.gov.uk/blog-post/let-them-paste-passwords', children: (0, t.jsx)('span', { lang: 'en', children: 'Let them paste passwords' }) }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.8/', children: 'Succescriterium 3.3.8 Toegankelijke authenticatie (minimum)' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.9/', children: 'Succescriterium 3.3.9 Toegankelijke authenticatie (uitgebreid)' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'Sta knippen en plakken van een wachtwoord toe', title_sm: 'Wachtwoord plakken', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Wachtwoord plakken', pagination_label: 'Wachtwoord plakken', description: 'Richtlijnen om knippen en plakken van een wachtwoord toe te staan.', slug: '/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    y = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function x(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x();
   }
  },
  95822(e, n, l) {
   l.d(n, { M: () => i });
   var o = l(46447),
    t = l(16194),
    s = l(30758),
    r = l(88022);
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
   var c = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: p, type: h } = (0, s.useContext)(r.x),
     u = (0, s.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(o.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...t({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
