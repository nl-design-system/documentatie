'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [95456],
 {
  13110(e, n, l) {
   (l.r(n), l.d(n, { assets: () => v, contentTitle: () => j, default: () => x, frontMatter: () => m, metadata: () => t, toc: () => g }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/link/in-new-tab/README","title":"Geef aan als een link in een nieuwe tab opent \xb7 Links in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor aangeven als een link een nieuwe tab opent.","source":"@site/docs/richtlijnen/formulieren/link/3-in-new-tab/README.mdx","sourceDirName":"richtlijnen/formulieren/link/3-in-new-tab","slug":"/richtlijnen/formulieren/links/nieuwe-tab","permalink":"/richtlijnen/formulieren/links/nieuwe-tab","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/3-in-new-tab/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef aan als een link in een nieuwe tab opent \xb7 Links in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Link in nieuwe tab","pagination_label":"Link in nieuwe tab","description":"Richtlijnen voor aangeven als een link een nieuwe tab opent.","slug":"/richtlijnen/formulieren/links/nieuwe-tab","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geen link in label","permalink":"/richtlijnen/formulieren/links/niet-in-label"},"next":{"title":"Meerdere stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/"}}');
   var i = l(86070),
    r = l(18439),
    o = l(78734),
    s = l(58639),
    a = l(15638);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, i.jsx)(a.$, { appearance: 'do', title: 'Alle informatie als zichtbare tekst in de link plaatsen.', children: (0, i.jsx)(s.H, { language: 'html', children: () => (0, i.jsxs)('p', { children: [(0, i.jsx)('a', { href: '#', target: '_blank', children: 'Lees het privacybeleid (opent in een nieuwe tab)' }), '.'] }) }) }), '\n', (0, i.jsx)(a.$, { appearance: 'do', title: 'Zichtbaar icoontje plus onzichtbare, maar uitgesproken tekst voor screenreaders.', children: (0, i.jsx)(s.H, { language: 'html', children: () => (0, i.jsxs)('p', { children: [(0, i.jsxs)('a', { href: '#', target: '_blank', className: 'nlds-icon-ext', children: ['Lees het privacybeleid', (0, i.jsx)('span', { className: 'sr-only', children: ', opent in een nieuwe tab' })] }), '.'] }) }) }), '\n', (0, i.jsx)(a.$, { appearance: 'do', title: 'Zichtbaar icoontje plus een aria-label voor screenreaders.', children: (0, i.jsx)(s.H, { language: 'html', children: () => (0, i.jsx)('p', { children: (0, i.jsx)('a', { href: '#', target: '_blank', className: 'nlds-icon-ext', 'aria-label': 'Lees het privacybeleid (opent in een nieuwe tab)', children: 'Lees het privacybeleid' }) }) }) }), '\n', (0, i.jsx)(a.$, { appearance: 'dont', title: 'Informatie over het openen in een nieuwe tab alleen aan screenreadergebruikers geven.', children: (0, i.jsx)(s.H, { language: 'html', children: () => (0, i.jsxs)('p', { children: [(0, i.jsx)('a', { href: '#', target: '_blank', 'aria-label': 'Lees het privacybeleid (opent in een nieuwe tab)', children: 'Lees het privacybeleid' }), '.'] }) }) }), '\n', (0, i.jsx)(a.$, { appearance: 'dont', title: 'Informatie over het openen in een nieuwe tab voor iedereen weglaten.', children: (0, i.jsx)(s.H, { language: 'html', children: () => (0, i.jsxs)('p', { children: [(0, i.jsx)('a', { href: '#', target: '_blank', children: 'Lees het privacybeleid' }), '.'] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'geef-aan-als-een-link-in-een-nieuwe-tab-opent', children: 'Geef aan als een link in een nieuwe tab opent' }) }), '\n', (0, i.jsx)(n.p, { children: 'Het is onhandig als je de ingevulde informatie van een formulier kwijt raakt als je een link opent. In formulieren is het daarom handiger dat links niet openen in hetzelfde browser-venster.' }), '\n', (0, i.jsxs)(n.p, { children: ['In de HTML kan dit met het attribuut ', (0, i.jsx)(n.code, { children: 'target="_blank"' }), ' in de link.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Een link openen in een nieuwe tab is geen standaard browser gedrag. Maak duidelijk hoe deze speciale links in formulieren werken, zodat de gebruiker bijvoorbeeld weet waarom de terugknop het niet doet. Voor gebruikers van ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' is dit extra belangrijk.'] }), '\n', (0, i.jsx)(n.p, { children: 'Daarnaast: alle gebruikers moeten dezelfde informatie krijgen, dus er moet ook een visuele indicatie zijn dat de link in een nieuwe tab opent.' }), '\n', (0, i.jsx)(n.p, { children: 'Het aangeven kan op verschillende manieren: via een icoontje, via tekst en via een aria-label. Zo kun je voor ziende gebruikers een icoontje gebruiken en voor screenreadergebruikers visueel verborgen tekst.' }), '\n', (0, i.jsx)(n.p, { children: 'Zorg dat de informatie over het openen van een nieuwe tab in de linktekst zelf is opgenomen. Dan wordt deze voorgelezen zodra de link focus krijgt. Als de tekst buiten (achter) de link staat bestaat de kans dat een screenreadergebruiker deze info mist.' }), '\n', (0, i.jsxs)(n.p, { children: ['Hiermee volg je de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#predictable', children: 'WCAG-richtlijn 3.2 Voorspelbaar' }), ": maak het uiterlijk en de bediening van webpagina's voorspelbaar."] }), '\n', (0, i.jsx)(n.h2, { id: 'technieken-voor-een-link-openen-in-een-nieuwe-tab-of-venster', children: 'Technieken voor een link openen in een nieuwe tab of venster' }), '\n', (0, i.jsx)(n.p, { children: 'Alle informatie als zichtbare tekst in de linktekst plaatsen heeft de voorkeur, vanwege de eenvoud en eenduidigheid. Niet iedereen snapt alle icoontjes.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, i.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/2.4.4/', children: 'Succescriterium 2.4.4 Linkdoel (in context)' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/2.4.9/', children: 'Succescriterium 2.4.9 Linkdoel (alleen link)' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/3.2.1/', children: 'Succescriterium 3.2.1 Bij focus' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/3.2.2/', children: 'Succescriterium 3.2.2 Bij input' }) }), '\n'] })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
   const m = { title: 'Geef aan als een link in een nieuwe tab opent \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Link in nieuwe tab', pagination_label: 'Link in nieuwe tab', description: 'Richtlijnen voor aangeven als een link een nieuwe tab opent.', slug: '/richtlijnen/formulieren/links/nieuwe-tab', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    v = {},
    g = [{ value: 'Technieken voor een link openen in een nieuwe tab of venster', id: 'technieken-voor-een-link-openen-in-een-nieuwe-tab-of-venster', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function k(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(p, {}), '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(b, {}), '\n', (0, i.jsx)(o.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k();
   }
  },
  15638(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var t = l(4077),
    i = l(58315),
    r = l(46447),
    o = l(13526),
    s = l(9547),
    a = l(30758),
    c = l(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: a, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = u ? 'figure' : 'div',
      b = u ? 'figcaption' : 'div',
      m = 'string' == typeof l ? (0, c.jsx)(s.oz, { children: l }) : l;
     return (0, c.jsxs)(h, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(b, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(i.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(r.fz, { children: e })] }), m] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => o, x: () => s });
   var t = l(30758);
   const i = {},
    r = t.createContext(i);
   function o(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, l) {
   l.d(n, { H: () => v });
   var t = l(69284),
    i = l(46447),
    r = l(13526),
    o = l(68148),
    s = l(9016),
    a = l(69303),
    c = l(91635),
    d = l(30734),
    u = l(30758),
    p = l(31186),
    h = l(86070);
   const b = ({ children: e }) => (0, h.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(i.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(i.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const m = ({ children: e }) => (0, h.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(i.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   m.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, h.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const v = ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: v = !0, children: g, container: k = 'document', language: x, designTokens: y }) => {
    const f = 'function' == typeof g ? g() : g,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : p.qV(_ || f),
     [N, z] = (0, u.useState)(w),
     [A, C] = (0, u.useState)(l);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: x, plugins: [o.A, s.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [w]);
    const L = (0, u.useId)();
    let S = u.Fragment;
    return (
     'paragraph' === k ? (S = b) : 'document' === k ? (S = m) : 'surface' === k && (S = j),
     (0, h.jsxs)('div', {
      className: (0, r.A)('nlds-canvas'),
      children: [
       f && (0, h.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, h.jsx)(S, { children: (0, h.jsx)(i.v$, { children: f }) }) }) }),
       v &&
        (0, h.jsx)('div', {
         className: (0, r.A)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(i.$n, {
          className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!A);
          },
          'aria-expanded': A,
          'aria-controls': L,
          children: A ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       v &&
        (0, h.jsxs)('div', {
         className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: L,
         hidden: !A,
         children: [
          (0, h.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          n &&
           (0, h.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(i.$n, {
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
  69284(e, n, l) {
   l.d(n, { M: () => c });
   var t = l(46447),
    i = l(16194),
    r = l(30758),
    o = l(15638);
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
   var a = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: u, type: p } = (0, r.useContext)(o.x),
     h = (0, r.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(i.f4, { theme: s, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: i, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(t.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...i({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => s, RM: () => r });
   var t = l(86070),
    i = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
