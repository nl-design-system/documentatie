'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [54026],
 {
  15638(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var r = l(4077),
    o = l(58315),
    s = l(46447),
    t = l(13526),
    i = l(9547),
    a = l(30758),
    c = l(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: a, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      v = 'string' == typeof l ? (0, c.jsx)(i.oz, { children: l }) : l;
     return (0, c.jsxs)(m, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(s.fz, { children: e })] }), v] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => i });
   var r = l(30758);
   const o = {},
    s = r.createContext(o);
   function t(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, l) {
   l.d(n, { H: () => b });
   var r = l(69284),
    o = l(46447),
    s = l(13526),
    t = l(68148),
    i = l(9016),
    a = l(69303),
    c = l(91635),
    d = l(30734),
    u = l(30758),
    p = l(31186),
    m = l(86070);
   const h = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   h.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const g = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   g.displayName = 'SurfaceContainer';
   const b = ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: b = !0, children: j, container: y = 'document', language: x, designTokens: f }) => {
    const k = 'function' == typeof j ? j() : j,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : p.qV(_ || k),
     [N, A] = (0, u.useState)(w),
     [z, C] = (0, u.useState)(l);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: x, plugins: [t.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [w]);
    const R = (0, u.useId)();
    let S = u.Fragment;
    return (
     'paragraph' === y ? (S = h) : 'document' === y ? (S = v) : 'surface' === y && (S = g),
     (0, m.jsxs)('div', {
      className: (0, s.A)('nlds-canvas'),
      children: [
       k && (0, m.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(S, { children: (0, m.jsx)(o.v$, { children: k }) }) }) }),
       b &&
        (0, m.jsx)('div', {
         className: (0, s.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(o.$n, {
          className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!z);
          },
          'aria-expanded': z,
          'aria-controls': R,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, m.jsxs)('div', {
         className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !z,
         children: [
          (0, m.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(o.$n, {
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
  69284(e, n, l) {
   l.d(n, { M: () => c });
   var r = l(46447),
    o = l(16194),
    s = l(30758),
    t = l(15638);
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
   var a = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: u, type: p } = (0, s.useContext)(t.x),
     m = (0, s.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(o.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...o({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => s });
   var r = l(86070),
    o = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  97993(e, n, l) {
   (l.r(n), l.d(n, { assets: () => b, contentTitle: () => g, default: () => x, frontMatter: () => v, metadata: () => r, toc: () => j }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/link/above-field/README","title":"Plaats de link boven het gerelateerde formulierveld \xb7 Links in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor link boven het gerelateerde formulierveld.","source":"@site/docs/richtlijnen/formulieren/link/1-above-field/README.mdx","sourceDirName":"richtlijnen/formulieren/link/1-above-field","slug":"/richtlijnen/formulieren/links/plaatsing","permalink":"/richtlijnen/formulieren/links/plaatsing","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/1-above-field/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaats de link boven het gerelateerde formulierveld \xb7 Links in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing link","pagination_label":"Plaatsing link","description":"Richtlijnen voor link boven het gerelateerde formulierveld.","slug":"/richtlijnen/formulieren/links/plaatsing","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Links in een formulier","permalink":"/richtlijnen/formulieren/links/"},"next":{"title":"Geen link in label","permalink":"/richtlijnen/formulieren/links/niet-in-label"}}');
   var o = l(86070),
    s = l(18439),
    t = l(78734),
    i = l(58639),
    a = l(15638);
   function c(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'De link boven het gerelateerde invoerveld plaatsen.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)('p', { children: [(0, o.jsx)('a', { href: '#', children: 'Voorwaarden vrijwilligerswerk' }), '.'] }), (0, o.jsxs)('p', { children: [(0, o.jsx)('input', { type: 'checkbox', name: 'vrijwilliger', id: 'vrijwilliger' }), (0, o.jsx)('label', { htmlFor: 'vrijwilliger', children: 'Ik wil vrijwilliger worden' })] })] }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'dont', title: 'De link onder het gerelateerde invoerveld plaatsen.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)('p', { children: [(0, o.jsx)('input', { type: 'checkbox', name: 'vrijwilliger', id: 'vrijwilliger' }), (0, o.jsx)('label', { htmlFor: 'vrijwilliger', children: 'Ik wil vrijwilliger worden' })] }), (0, o.jsxs)('p', { children: [(0, o.jsx)('a', { href: '#', children: 'Voorwaarden vrijwilligerswerk' }), '.'] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'plaats-de-link-boven-het-gerelateerde-formulierveld', children: 'Plaats de link boven het gerelateerde formulierveld' }) }), '\n', (0, o.jsx)(n.p, { children: 'Gebruikers lezen van boven naar beneden. Dan is het fijn als eerst de link met meer informatie komt, en daarna pas het gerelateerde formulierveld. Geef dus eerst de link met de informatie die nodig is om een keuze te maken en dan pas het formulierveld waarop deze informatie van toepassing is.' }), '\n', (0, o.jsx)(n.p, { children: 'Je kunt informatie ook boven het formulier vermelden, zodat gebruikers alvast voorbereid zijn.\nBijvoorbeeld als de gebruiker een paspoort- of burgerservicenummer nodig heeft, of als er een tijdslimiet op het invullen van het formulier staat ingesteld.' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Let op' }), ': de link moet niet alleen visueel, maar ook in de DOM (Document Object Modal) in de goede volgorde staan.\nDus een link visueel verplaatsen via bijvoorbeeld flex-order is niet voldoende. De DOM-order is echt belangrijk voor gebruikers van ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   const v = { title: 'Plaats de link boven het gerelateerde formulierveld \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing link', pagination_label: 'Plaatsing link', description: 'Richtlijnen voor link boven het gerelateerde formulierveld.', slug: '/richtlijnen/formulieren/links/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    b = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function y(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(t.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(y, { ...e }) }) : y();
   }
  },
 },
]);
