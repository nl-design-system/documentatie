'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [70096],
 {
  15638(e, n, o) {
   o.d(n, { $: () => u, x: () => d });
   var l = o(4077),
    r = o(58315),
    t = o(46447),
    s = o(13526),
    i = o(9547),
    a = o(30758),
    c = o(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: n, description: o, children: a, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      g = 'string' == typeof o ? (0, c.jsx)(i.oz, { children: o }) : o;
     return (0, c.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(t.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(t.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => s, x: () => i });
   var l = o(30758);
   const r = {},
    t = l.createContext(r);
   function s(e) {
    const n = l.useContext(t);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), l.createElement(t.Provider, { value: n }, e.children));
   }
  },
  58091(e, n, o) {
   (o.r(n), o.d(n, { assets: () => j, contentTitle: () => v, default: () => x, frontMatter: () => g, metadata: () => l, toc: () => y }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/help/show-values/README","title":"Geef geldige waardes aan voor een invoerveld \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen","description":"Richtlijnen om geldige waardes aan een invoerveld te geven.","source":"@site/docs/richtlijnen/formulieren/help/4-show-values/README.mdx","sourceDirName":"richtlijnen/formulieren/help/4-show-values","slug":"/richtlijnen/formulieren/voorkom-fouten/geldige-waardes","permalink":"/richtlijnen/formulieren/voorkom-fouten/geldige-waardes","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/4-show-values/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef geldige waardes aan voor een invoerveld \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geef geldige waardes aan","pagination_label":"Geef geldige waardes aan een invoerveld","description":"Richtlijnen om geldige waardes aan een invoerveld te geven.","slug":"/richtlijnen/formulieren/voorkom-fouten/geldige-waardes","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Keur niet te snel af","permalink":"/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af"},"next":{"title":"Autocomplete in een formulier","permalink":"/richtlijnen/formulieren/voorkom-fouten/autocomplete"}}');
   var r = o(86070),
    t = o(18439),
    s = o(78734),
    i = o(58639),
    a = o(15638);
   function c(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(a.$, { appearance: 'do', title: 'Leg uit hoe een veld in te vullen.', description: 'Bijvoorbeeld in de description.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'ww', children: 'Nieuw wachtwoord' }) }), (0, r.jsx)('p', { id: 'ww_description', children: 'Minimaal 8 karakters, waarvan 2 cijfers en 1 hoofdletter.' }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { type: 'password', id: 'ww', name: 'wachtwoord', 'aria-describedby': 'ww_description' }) })] }) }) }), '\n', (0, r.jsx)(a.$, { appearance: 'dont', title: 'Wijze van invullen weglaten.', description: 'Laat de gebruiker niet raden of pas bij de foutmeldingen ontdekken wat er mis is.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'ww2', children: 'Nieuw wachtwoord' }) }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { type: 'password', id: 'ww2', name: 'wachtwoord' }) })] }) }) }), '\n', (0, r.jsx)(a.$, { appearance: 'dont', title: 'Wijze van invullen alleen in de placeholder zetten.', description: 'Zeker als de wijze van invullen precies goed moet zijn.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'geboortedatum2', children: 'Geboortedatum' }) }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { type: 'text', id: 'geboortedatum2', name: 'geboortedatum', placeholder: 'dd/mm/jjjj' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', img: 'img', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'geef-geldige-waardes-aan-voor-een-invoerveld', children: 'Geef geldige waardes aan voor een invoerveld' }) }), '\n', (0, r.jsx)(n.p, { children: 'Geef geldige waardes aan voor een invoerveld (bijvoorbeeld de datum- of wachtwoordeisen) en niet alleen in de placeholder.' }), '\n', (0, r.jsx)(n.p, { children: 'Bedenk ook of het echt belangrijk is of, bijvoorbeeld een geboortedatum of telefoonnummer aan exacte invoereisen moet voldoen.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_wachtwoord-alt.png', alt: 'Wachtwoord-eisen zijn in de description getoond' }) }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_geboortedatum.png', alt: 'Voorbeeld van de waarden voor de geboortedatum worden in de description getoond' }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
   const g = { title: 'Geef geldige waardes aan voor een invoerveld \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geef geldige waardes aan', pagination_label: 'Geef geldige waardes aan een invoerveld', description: 'Richtlijnen om geldige waardes aan een invoerveld te geven.', slug: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    y = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function b(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(h, {}), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b();
   }
  },
  58639(e, n, o) {
   o.d(n, { H: () => j });
   var l = o(69284),
    r = o(46447),
    t = o(13526),
    s = o(68148),
    i = o(9016),
    a = o(69303),
    c = o(91635),
    d = o(30734),
    u = o(30758),
    p = o(31186),
    m = o(86070);
   const h = ({ children: e }) => (0, m.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   h.displayName = 'ParagraphContainer';
   const g = ({ children: e }) => (0, m.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   g.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, m.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const j = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: j = !0, children: y, container: b = 'document', language: x, designTokens: f }) => {
    const w = 'function' == typeof y ? y() : y,
     k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     _ = 'string' == typeof e ? e : p.qV(k || w),
     [N, A] = (0, u.useState)(_),
     [z, C] = (0, u.useState)(o);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(_, { parser: x, plugins: [s.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [_]);
    const R = (0, u.useId)();
    let S = u.Fragment;
    return (
     'paragraph' === b ? (S = h) : 'document' === b ? (S = g) : 'surface' === b && (S = v),
     (0, m.jsxs)('div', {
      className: (0, t.A)('nlds-canvas'),
      children: [
       w && (0, m.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(S, { children: (0, m.jsx)(r.v$, { children: w }) }) }) }),
       j &&
        (0, m.jsx)('div', {
         className: (0, t.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(r.$n, {
          className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!z);
          },
          'aria-expanded': z,
          'aria-controls': R,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, m.jsxs)('div', {
         className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !z,
         children: [
          (0, m.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(r.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
    r = o(16194),
    t = o(30758),
    s = o(15638);
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
    const { title: u, type: p } = (0, t.useContext)(s.x),
     m = (0, t.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(r.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: r, getTokenProps: t }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...r({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  78734(e, n, o) {
   o.d(n, { Ay: () => i, RM: () => t });
   var l = o(86070),
    r = o(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
