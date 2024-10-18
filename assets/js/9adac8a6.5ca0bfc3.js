'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [79871],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => i });
   var t = l(52676),
    a = l(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  62577: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => m, contentTitle: () => b, default: () => _, frontMatter: () => p, metadata: () => h, toc: () => g });
   var t = l(52676),
    a = l(24785),
    s = l(98480),
    i = l(91050);
   function o(e) {
    const n = { a: 'a', span: 'span', ...(0, a.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(i.X, { appearance: 'do', title: 'Alle informatie als zichtbare tekst in de link plaatsen.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.a, { href: '#', target: '_blank', children: 'Lees het privacybeleid (opent in een nieuwe tab)' }), '.'] }) }) }), '\n', (0, t.jsx)(i.X, { appearance: 'do', title: 'Zichtbaar icoontje plus onzichtbare, maar uitgesproken tekst voor screenreaders.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(n.a, { href: '#', target: '_blank', class: 'nlds-icon-ext', children: ['Lees het privacybeleid', (0, t.jsx)(n.span, { class: 'sr-only', children: ', opent in een nieuwe tab' })] }), '.'] }) }) }), '\n', (0, t.jsx)(i.X, { appearance: 'do', title: 'Zichtbaar icoontje plus een aria-label voor screenreaders.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.a, { href: '#', target: '_blank', class: 'nlds-icon-ext', 'aria-label': 'Lees het privacybeleid (opent in een nieuwe tab)', children: 'Lees het privacybeleid' }) }) }) }), '\n', (0, t.jsx)(i.X, { appearance: 'dont', title: 'Informatie over het openen in een nieuwe tab alleen aan screenreadergebruikers geven.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.a, { href: '#', target: '_blank', 'aria-label': 'Lees het privacybeleid (opent in een nieuwe tab)', children: 'Lees het privacybeleid' }), '.'] }) }) }), '\n', (0, t.jsx)(i.X, { appearance: 'dont', title: 'Informatie over het openen in een nieuwe tab voor iedereen weglaten.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.a, { href: '#', target: '_blank', children: 'Lees het privacybeleid' }), '.'] }) }) })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'geef-aan-als-een-link-in-een-nieuwe-tab-opent', children: 'Geef aan als een link in een nieuwe tab opent' }), '\n', (0, t.jsx)(n.p, { children: 'Het is onhandig als je de ingevulde informatie van een formulier kwijt raakt als je een link opent. In formulieren is het daarom handiger dat links niet openen in hetzelfde browser-venster.' }), '\n', (0, t.jsxs)(n.p, { children: ['In de HTML kan dit met het attribuut ', (0, t.jsx)(n.code, { children: 'target="_blank"' }), ' in de link.'] }), '\n', (0, t.jsx)(n.p, { children: 'Een link openen in een nieuwe tab is geen standaard browser gedrag. Maak duidelijk hoe deze speciale links in formulieren werken, zodat de gebruiker bijvoorbeeld weet waarom de terugknop het niet doet. Voor screenreadergebruikers is dit extra belangrijk.' }), '\n', (0, t.jsx)(n.p, { children: 'Daarnaast: alle gebruikers moeten dezelfde informatie krijgen, dus er moet ook een visuele indicatie zijn dat de link in een nieuwe tab opent.' }), '\n', (0, t.jsx)(n.p, { children: 'Het aangeven kan op verschillende manieren: via een icoontje, via tekst en via een aria-label. Zo kun je voor ziende gebruikers een icoontje gebruiken en voor screenreadergebruikers visueel verborgen tekst.' }), '\n', (0, t.jsx)(n.p, { children: 'Zorg dat de informatie over het openen van een nieuwe tab in de linktekst zelf is opgenomen. Dan wordt deze voorgelezen zodra de link focus krijgt. Als de tekst buiten (achter) de link staat bestaat de kans dat een screenreadergebruiker deze info mist.' }), '\n', (0, t.jsxs)(n.p, { children: ['Hiermee volg je de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#voorspelbaar', children: 'WCAG-richtlijn 3.2 Voorspelbaar' }), ": maak het uiterlijk en de bediening van webpagina's voorspelbaar."] }), '\n', (0, t.jsx)(n.h2, { id: 'technieken-voor-een-link-openen-in-een-nieuwe-tab-of-venster', children: 'Technieken voor een link openen in een nieuwe tab of venster' }), '\n', (0, t.jsx)(n.p, { children: 'Alle informatie als zichtbare tekst in de linktekst plaatsen heeft de voorkeur, vanwege de eenvoud en eenduidigheid. Niet iedereen snapt alle icoontjes.' })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   var u = l(55400);
   const p = { title: 'Geef aan als een link in een nieuwe tab opent \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Link in nieuwe tab', pagination_label: 'Link in nieuwe tab', description: 'Richtlijnen voor aangeven als een link een nieuwe tab opent.', slug: '/richtlijnen/formulieren/links/nieuwe-tab', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    h = { id: 'richtlijnen/formulieren/link/in-new-tab/README', title: 'Geef aan als een link in een nieuwe tab opent \xb7 Links in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor aangeven als een link een nieuwe tab opent.', source: '@site/docs/richtlijnen/formulieren/link/3-in-new-tab/README.mdx', sourceDirName: 'richtlijnen/formulieren/link/3-in-new-tab', slug: '/richtlijnen/formulieren/links/nieuwe-tab', permalink: '/richtlijnen/formulieren/links/nieuwe-tab', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/3-in-new-tab/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef aan als een link in een nieuwe tab opent \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Link in nieuwe tab', pagination_label: 'Link in nieuwe tab', description: 'Richtlijnen voor aangeven als een link een nieuwe tab opent.', slug: '/richtlijnen/formulieren/links/nieuwe-tab', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Geen link in label', permalink: '/richtlijnen/formulieren/links/niet-in-label' }, next: { title: 'Meerdere stappen', permalink: '/richtlijnen/formulieren/meerdere-stappen/' } },
    m = {},
    g = [];
   function v(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(r, {}), '\n', (0, t.jsx)(u.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(v, { ...e }) }) : v();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => _ });
   var t = l(46506),
    a = l(4814),
    s = l(25585),
    i = l(40282),
    o = l(40678),
    r = l(85722),
    c = l(6374),
    d = l(75271),
    u = l(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var b = l(41179),
    h = l(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: (0, h.jsx)(t.BB, { className: (0, a.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, h.jsx)(t.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: (0, h.jsx)(t.BB, { className: (0, a.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   v.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: _ = !1, displayCode: k = !0, children: j, container: y = 'document', language: x, designTokens: f } = e,
     w = 'function' == typeof j ? j() : j,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [z, C] = (0, d.useState)(Z),
     [L, S] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (z = await c.ZP.format(Z, { parser: x, plugins: [s.Z, i.ZP, o.ZP, r.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(z);
     })();
    }, [Z]);
    const F = (0, d.useId)();
    let E = d.Fragment;
    return (
     'paragraph' === y ? (E = m) : 'document' === y ? (E = g) : 'surface' === y && (E = v),
     (0, h.jsxs)('div', {
      className: (0, a.Z)(p['nlds-canvas']),
      children: [
       w && (0, h.jsx)('div', { className: (0, a.Z)(p['nlds-canvas__example']), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, h.jsx)(E, { children: (0, h.jsx)(t.pu, { children: w }) }) }) }),
       k &&
        (0, h.jsx)('div', {
         className: (0, a.Z)(p['nlds-canvas__toolbar']),
         children: (0, h.jsx)(t.zx, {
          className: (0, a.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           S(!L);
          },
          'aria-expanded': L,
          'aria-controls': F,
          children: L ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       k &&
        (0, h.jsxs)('div', {
         className: (0, a.Z)(p['nlds-canvas__code-block'], !l && p['nlds-canvas__code-block--user-select-none']),
         id: F,
         hidden: !L,
         children: [
          (0, h.jsx)(b.u, { syntax: x, textContent: z, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, a.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, h.jsx)(t.zx, {
             className: (0, a.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(z).catch((e) => console.error('Copy code failed', e));
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
   l.d(n, { u: () => o });
   var t = l(46506),
    a = l(70739);
   l(75271);
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
   var i = l(52676);
   function o(e) {
    let { lineNumber: n, syntax: l, textContent: o, trim: r } = e,
     c = o;
    return (
     r && (c = c.trim()),
     (0, i.jsx)(a.y$, {
      theme: s,
      code: c,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: a, getLineProps: s, getTokenProps: o } = e;
       return (0, i.jsx)(t.dn, { style: l, children: a.map((e, l) => (0, i.jsxs)('span', { ...s({ line: e }), children: [n && (0, i.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => c });
   var t = l(77355),
    a = l(67663),
    s = l(46506),
    i = l(4814);
   l(75271);
   const o = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var r = l(52676);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: d, figure: u } = e;
    const p = 'Doen',
     b = 'Niet doen',
     h = u ? 'figure' : 'div',
     m = u ? 'figcaption' : 'div';
    return (0, r.jsxs)(h, { className: (0, i.Z)(o['nlds-guideline'], o[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, r.jsxs)(m, { className: (0, i.Z)(o['nlds-guideline__description']), children: ['dont' === l ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(s.nv, { className: (0, i.Z)(o['nlds-guideline__badge'], o[`nlds-guideline__badge--${l}`]), children: [(0, r.jsx)(t.Z, { className: o['nlds-guideline__icon'] }), (0, r.jsx)('span', { className: o['nlds-guideline__title'], children: b })] }), (0, r.jsx)(s.nv, { children: n })] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(s.nv, { className: (0, i.Z)(o['nlds-guideline__badge'], o[`nlds-guideline__badge--${l}`]), children: [(0, r.jsx)(a.Z, { className: o['nlds-guideline__icon'] }), (0, r.jsx)('span', { className: o['nlds-guideline__title'], children: p })] }), (0, r.jsx)(s.nv, { children: n })] }), c] }), (0, r.jsx)('div', { className: (0, i.Z)(o['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => o, a: () => i });
   var t = l(75271);
   const a = {},
    s = t.createContext(a);
   function i(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : i(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
