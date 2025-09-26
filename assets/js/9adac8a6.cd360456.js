'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [79871],
 {
  5547: (e, n, l) => {
   l.d(n, { ZP: () => i });
   var t = l(52676),
    r = l(40139);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  74541: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => m, contentTitle: () => h, default: () => k, frontMatter: () => u, metadata: () => b, toc: () => g });
   var t = l(52676),
    r = l(40139),
    o = l(5547),
    i = l(43599),
    a = l(40761);
   function s(e) {
    const n = { a: 'a', h2: 'h2', span: 'span', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(a.X, { appearance: 'do', title: 'Alle informatie als zichtbare tekst in de link plaatsen.', children: (0, t.jsx)(i.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.a, { href: '#', target: '_blank', children: 'Lees het privacybeleid (opent in een nieuwe tab)' }), '.'] }) }) }), '\n', (0, t.jsx)(a.X, { appearance: 'do', title: 'Zichtbaar icoontje plus onzichtbare, maar uitgesproken tekst voor screenreaders.', children: (0, t.jsx)(i.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(n.a, { href: '#', target: '_blank', className: 'nlds-icon-ext', children: ['Lees het privacybeleid', (0, t.jsx)(n.span, { className: 'sr-only', children: ', opent in een nieuwe tab' })] }), '.'] }) }) }), '\n', (0, t.jsx)(a.X, { appearance: 'do', title: 'Zichtbaar icoontje plus een aria-label voor screenreaders.', children: (0, t.jsx)(i.X, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.a, { href: '#', target: '_blank', className: 'nlds-icon-ext', 'aria-label': 'Lees het privacybeleid (opent in een nieuwe tab)', children: 'Lees het privacybeleid' }) }) }) }), '\n', (0, t.jsx)(a.X, { appearance: 'dont', title: 'Informatie over het openen in een nieuwe tab alleen aan screenreadergebruikers geven.', children: (0, t.jsx)(i.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.a, { href: '#', target: '_blank', 'aria-label': 'Lees het privacybeleid (opent in een nieuwe tab)', children: 'Lees het privacybeleid' }), '.'] }) }) }), '\n', (0, t.jsx)(a.X, { appearance: 'dont', title: 'Informatie over het openen in een nieuwe tab voor iedereen weglaten.', children: (0, t.jsx)(i.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.a, { href: '#', target: '_blank', children: 'Lees het privacybeleid' }), '.'] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'geef-aan-als-een-link-in-een-nieuwe-tab-opent', children: 'Geef aan als een link in een nieuwe tab opent' }), '\n', (0, t.jsx)(n.p, { children: 'Het is onhandig als je de ingevulde informatie van een formulier kwijt raakt als je een link opent. In formulieren is het daarom handiger dat links niet openen in hetzelfde browser-venster.' }), '\n', (0, t.jsxs)(n.p, { children: ['In de HTML kan dit met het attribuut ', (0, t.jsx)(n.code, { children: 'target="_blank"' }), ' in de link.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Een link openen in een nieuwe tab is geen standaard browser gedrag. Maak duidelijk hoe deze speciale links in formulieren werken, zodat de gebruiker bijvoorbeeld weet waarom de terugknop het niet doet. Voor gebruikers van ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' is dit extra belangrijk.'] }), '\n', (0, t.jsx)(n.p, { children: 'Daarnaast: alle gebruikers moeten dezelfde informatie krijgen, dus er moet ook een visuele indicatie zijn dat de link in een nieuwe tab opent.' }), '\n', (0, t.jsx)(n.p, { children: 'Het aangeven kan op verschillende manieren: via een icoontje, via tekst en via een aria-label. Zo kun je voor ziende gebruikers een icoontje gebruiken en voor screenreadergebruikers visueel verborgen tekst.' }), '\n', (0, t.jsx)(n.p, { children: 'Zorg dat de informatie over het openen van een nieuwe tab in de linktekst zelf is opgenomen. Dan wordt deze voorgelezen zodra de link focus krijgt. Als de tekst buiten (achter) de link staat bestaat de kans dat een screenreadergebruiker deze info mist.' }), '\n', (0, t.jsxs)(n.p, { children: ['Hiermee volg je de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#predictable', children: 'WCAG-richtlijn 3.2 Voorspelbaar' }), ": maak het uiterlijk en de bediening van webpagina's voorspelbaar."] }), '\n', (0, t.jsx)(n.h2, { id: 'technieken-voor-een-link-openen-in-een-nieuwe-tab-of-venster', children: 'Technieken voor een link openen in een nieuwe tab of venster' }), '\n', (0, t.jsx)(n.p, { children: 'Alle informatie als zichtbare tekst in de linktekst plaatsen heeft de voorkeur, vanwege de eenvoud en eenduidigheid. Niet iedereen snapt alle icoontjes.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Geef aan als een link in een nieuwe tab opent \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Link in nieuwe tab', pagination_label: 'Link in nieuwe tab', description: 'Richtlijnen voor aangeven als een link een nieuwe tab opent.', slug: '/richtlijnen/formulieren/links/nieuwe-tab', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    b = { id: 'richtlijnen/formulieren/link/in-new-tab/README', title: 'Geef aan als een link in een nieuwe tab opent \xb7 Links in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor aangeven als een link een nieuwe tab opent.', source: '@site/docs/richtlijnen/formulieren/link/3-in-new-tab/README.mdx', sourceDirName: 'richtlijnen/formulieren/link/3-in-new-tab', slug: '/richtlijnen/formulieren/links/nieuwe-tab', permalink: '/richtlijnen/formulieren/links/nieuwe-tab', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/3-in-new-tab/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef aan als een link in een nieuwe tab opent \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Link in nieuwe tab', pagination_label: 'Link in nieuwe tab', description: 'Richtlijnen voor aangeven als een link een nieuwe tab opent.', slug: '/richtlijnen/formulieren/links/nieuwe-tab', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Geen link in label', permalink: '/richtlijnen/formulieren/links/niet-in-label' }, next: { title: 'Meerdere stappen', permalink: '/richtlijnen/formulieren/meerdere-stappen/' } },
    m = {},
    g = [];
   function v(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(o.ZP, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(v, { ...e }) }) : v();
   }
  },
  43599: (e, n, l) => {
   l.d(n, { X: () => v });
   var t = l(41179),
    r = l(28439),
    o = l(4814),
    i = l(64642),
    a = l(93872),
    s = l(86017),
    c = l(48231),
    d = l(75119),
    p = l(75271),
    u = l(60027),
    h = l(52676);
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(r.BB, { className: (0, o.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(r.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   b.displayName = 'ParagraphContainer';
   const m = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(r.BB, { className: (0, o.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   m.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   g.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: v = !1, displayCode: k = !0, children: j, container: y = 'document', language: x, designTokens: f } = e;
    const _ = 'function' == typeof j ? j() : j,
     w = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : u.uS(w || _),
     [Z, z] = (0, p.useState)(N),
     [C, L] = (0, p.useState)(v);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: x, plugins: [i.Z, a.ZP, s.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [N]);
    const S = (0, p.useId)();
    let F = p.Fragment;
    return (
     'paragraph' === y ? (F = b) : 'document' === y ? (F = m) : 'surface' === y && (F = g),
     (0, h.jsxs)('div', {
      className: (0, o.Z)('nlds-canvas'),
      children: [
       _ && (0, h.jsx)('div', { className: (0, o.Z)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, h.jsx)(F, { children: (0, h.jsx)(r.pu, { children: _ }) }) }) }),
       k &&
        (0, h.jsx)('div', {
         className: (0, o.Z)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(r.zx, {
          className: (0, o.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           L(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       k &&
        (0, h.jsxs)('div', {
         className: (0, o.Z)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, h.jsx)(t.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: Z, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, o.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(r.zx, {
             className: (0, o.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(Z).catch((e) => console.error('Copy code failed', e));
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
  41179: (e, n, l) => {
   l.d(n, { u: () => c });
   var t = l(28439),
    r = l(60648),
    o = l(75271),
    i = l(40761);
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
   var s = l(52676);
   function c(e) {
    let { lineNumber: n, syntax: l, textContent: c, trim: d } = e,
     p = c;
    const { title: u, type: h } = (0, o.useContext)(i.n),
     b = (0, o.useId)();
    return (
     d && (p = p.trim()),
     (0, s.jsx)(r.y$, {
      theme: a,
      code: p,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: r, getLineProps: o, getTokenProps: i } = e;
       return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: b, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, s.jsx)(t.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': b, style: l, children: r.map((e, l) => (0, s.jsxs)('span', { ...o({ line: e }), children: [n && (0, s.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, s.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, l) => {
   l.d(n, { X: () => d, n: () => c });
   var t = l(69244),
    r = l(20061),
    o = l(28439),
    i = l(4814),
    a = l(75271),
    s = l(52676);
   const c = (0, a.createContext)({}),
    d = (e) => {
     let { title: n, appearance: l, description: a, children: d, figure: p } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = p ? 'figure' : 'div',
      b = p ? 'figcaption' : 'div';
     return (0, s.jsxs)(h, { className: (0, i.Z)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(b, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(o.nv, { className: (0, i.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, s.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, s.jsx)(o.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(o.nv, { className: (0, i.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, s.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, s.jsx)(o.nv, { children: n })] }), a] }), (0, s.jsx)('div', { className: 'nlds-guideline__example', children: (0, s.jsx)(c.Provider, { value: { title: n, type: u[l] }, children: d }) })] });
    };
  },
  40139: (e, n, l) => {
   l.d(n, { Z: () => a, a: () => i });
   var t = l(75271);
   const r = {},
    o = t.createContext(r);
   function i(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : i(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
