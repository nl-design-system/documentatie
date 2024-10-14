'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [44617],
 {
  23680: (e, n, o) => {
   o.d(n, { ZP: () => s });
   var t = o(52676),
    l = o(24785);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  60151: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => v, contentTitle: () => p, default: () => _, frontMatter: () => m, metadata: () => h, toc: () => b });
   var t = o(52676),
    l = o(24785),
    r = o(98480),
    s = o(91050);
   function a(e) {
    const n = { input: 'input', label: 'label', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(s.X, { appearance: 'do', title: 'Het autocomplete-attribuut gebruiken.', children: (0, t.jsx)(r.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'voornaam', children: 'Je voornaam' }), (0, t.jsx)(n.input, { id: 'voornaam', type: 'text', autocomplete: 'given-name' })] }) }) }), '\n', (0, t.jsx)(s.X, { appearance: 'dont', title: 'Het autocomplete-attribuut niet gebruiken.', description: 'Het input type alleen is hier niet voldoende om te voldoen aan WCAG.', children: (0, t.jsx)(r.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'telefoon', children: 'Uw telefoonnummer' }), (0, t.jsx)(n.input, { id: 'telefoon', type: 'tel' })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', strong: 'strong', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'autocomplete-in-een-formulier', children: 'Autocomplete in een formulier' }), '\n', (0, t.jsxs)(n.p, { children: ['Het ', (0, t.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete', children: ['HTML-attribuut ', (0, t.jsx)(n.code, { children: 'autocomplete' })] }), ' vertelt aan de browser welke waarde verwacht wordt bij het invullen van een formulierveld. Browsers kunnen voor gebruikers onthouden wat ze eerder hebben ingevuld.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Die opgeslagen waarden kunnen browsers gebruiken om velden vast in te vullen, door het ', (0, t.jsx)(n.code, { children: 'autocomplete' }), ' attribuut weten ze welke velden dat moeten zijn. Gegevens zoals namen, adres en telefoonnummer kunnen dan automatisch worden ingevuld door de browser.'] }), '\n', (0, t.jsx)(n.p, { children: 'Autocomplete is fijn voor gebruikers die moeite hebben met typen, problemen hebben met hun geheugen en voor gebruikers die moeite hebben met taal.' }), '\n', (0, t.jsx)(n.h2, { id: 'gebruik-autocomplete-als-er-een-waarde-voor-is-gedefinieerd', children: 'Gebruik autocomplete als er een waarde voor is gedefinieerd' }), '\n', (0, t.jsxs)(n.p, { children: ['WCAG bevat een volledige ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#input-purposes', children: 'lijst van waarden voor autocomplete' }), '. Gebruik altijd een autocomplete-attribuut als er een waarde voor een formulierveld gedefinieerd is in deze lijst.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Jules Ernst van 200 OK heeft van deze lijst een ', (0, t.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/', children: 'Nederlandse interpretatie' }), ' gemaakt.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Belangrijk bij het gebruik van autocomplete is dat het label altijd zichtbaar moet blijven, de gebruiker moet weten of de juiste waarde in het juiste veld is ingevoerd. Zie hiervoor de richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/altijd-zichtbaar', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het gebruik van het juiste ', (0, t.jsx)(n.code, { children: 'autocomplete' }), '-attribuut is nodig om te voldoen aan het ', (0, t.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input' }), ' (niveau AA).'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete', children: 'aria-autocomplete' }), ' heeft een ander doel en ander gebruik dan autocomplete bij formuliervelden. ', (0, t.jsx)(n.code, { children: 'aria-autocomplete' }), ' wordt gebruikt in webcomponenten, bijvoorbeeld om aan te geven dat er suggesties zijn bij zoekresultaten.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   var u = o(23680);
   const m = { title: 'Autocomplete in een formulier | Voorkom fouten in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Autocomplete', pagination_label: 'Autocomplete in een formulier', description: 'Richtlijnen voor het gebruik van het autocomplete-attribuut.', slug: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', keywords: ['informatie', 'formulier', 'design', 'code'] },
    p = void 0,
    h = { id: 'richtlijnen/formulieren/help/autocomplete/README', title: 'Autocomplete in een formulier | Voorkom fouten in een formulier | Richtlijnen', description: 'Richtlijnen voor het gebruik van het autocomplete-attribuut.', source: '@site/docs/richtlijnen/formulieren/help/5-autocomplete/README.mdx', sourceDirName: 'richtlijnen/formulieren/help/5-autocomplete', slug: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', permalink: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/5-autocomplete/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Autocomplete in een formulier | Voorkom fouten in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Autocomplete', pagination_label: 'Autocomplete in een formulier', description: 'Richtlijnen voor het gebruik van het autocomplete-attribuut.', slug: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', keywords: ['informatie', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Geef geldige waardes aan een invoerveld', permalink: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes' }, next: { title: 'Automatisch invullen', permalink: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen' } },
    v = {},
    b = [];
   function g(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(i, {}), '\n', (0, t.jsx)(u.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g();
   }
  },
  98480: (e, n, o) => {
   o.d(n, { X: () => _ });
   var t = o(46506),
    l = o(4814),
    r = o(25585),
    s = o(40282),
    a = o(40678),
    i = o(85722),
    c = o(6374),
    d = o(75271),
    u = o(60027);
   const m = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var p = o(41179),
    h = o(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: m['nlds-canvas__example-surface'], children: (0, h.jsx)(t.BB, { className: (0, l.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: (0, h.jsx)(t.nv, { className: m['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: m['nlds-canvas__example-surface'], children: (0, h.jsx)(t.BB, { className: (0, l.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: n }) });
   };
   b.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: m['nlds-canvas__example-surface'], children: n });
   };
   g.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: _ = !1, displayCode: j = !0, children: y, container: f = 'document', language: x, designTokens: k } = e,
     w = 'function' == typeof y ? y() : y,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     A = 'string' == typeof n ? n : u.uS(N || w),
     [Z, z] = (0, d.useState)(A),
     [C, S] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (Z = await c.ZP.format(A, { parser: x, plugins: [r.Z, s.ZP, a.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), z(Z);
     })();
    }, [A]);
    const E = (0, d.useId)();
    let P = d.Fragment;
    return (
     'paragraph' === f ? (P = v) : 'document' === f ? (P = b) : 'surface' === f && (P = g),
     (0, h.jsxs)('div', {
      className: (0, l.Z)(m['nlds-canvas']),
      children: [
       w && (0, h.jsx)('div', { className: (0, l.Z)(m['nlds-canvas__example']), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, h.jsx)(P, { children: (0, h.jsx)(t.pu, { children: w }) }) }) }),
       j &&
        (0, h.jsx)('div', {
         className: (0, l.Z)(m['nlds-canvas__toolbar']),
         children: (0, h.jsx)(t.zx, {
          className: (0, l.Z)(m['nlds-canvas__button'], m['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           S(!C);
          },
          'aria-expanded': C,
          'aria-controls': E,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, h.jsxs)('div', {
         className: (0, l.Z)(m['nlds-canvas__code-block'], !o && m['nlds-canvas__code-block--user-select-none']),
         id: E,
         hidden: !C,
         children: [
          (0, h.jsx)(p.u, { syntax: x, textContent: Z, trim: !0 }),
          o &&
           (0, h.jsx)('div', {
            className: (0, l.Z)(m['nlds-canvas__toolbar'], m['nlds-canvas__toolbar--copy']),
            children: (0, h.jsx)(t.zx, {
             className: (0, l.Z)(m['nlds-canvas__button'], m['nlds-canvas__copy-button']),
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
  41179: (e, n, o) => {
   o.d(n, { u: () => a });
   var t = o(46506),
    l = o(70739);
   o(75271);
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
   var s = o(52676);
   function a(e) {
    let { lineNumber: n, syntax: o, textContent: a, trim: i } = e,
     c = a;
    return (
     i && (c = c.trim()),
     (0, s.jsx)(l.y$, {
      theme: r,
      code: c,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: l, getLineProps: r, getTokenProps: a } = e;
       return (0, s.jsx)(t.dn, { style: o, children: l.map((e, o) => (0, s.jsxs)('span', { ...r({ line: e }), children: [n && (0, s.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, s.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, o)) });
      },
     })
    );
   }
  },
  91050: (e, n, o) => {
   o.d(n, { X: () => c });
   var t = o(77355),
    l = o(67663),
    r = o(46506),
    s = o(4814);
   o(75271);
   const a = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = o(52676);
   const c = (e) => {
    let { title: n, appearance: o, description: c, children: d, figure: u } = e;
    const m = 'Doen',
     p = 'Niet doen',
     h = u ? 'figure' : 'div',
     v = u ? 'figcaption' : 'div';
    return (0, i.jsxs)(h, { className: (0, s.Z)(a['nlds-guideline'], a[`nlds-guideline--${o}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(v, { className: (0, s.Z)(a['nlds-guideline__description']), children: ['dont' === o ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, s.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${o}`]), children: [(0, i.jsx)(t.Z, { className: a['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: a['nlds-guideline__title'], children: p })] }), (0, i.jsx)(r.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, s.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${o}`]), children: [(0, i.jsx)(l.Z, { className: a['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: a['nlds-guideline__title'], children: m })] }), (0, i.jsx)(r.nv, { children: n })] }), c] }), (0, i.jsx)('div', { className: (0, s.Z)(a['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, o) => {
   o.d(n, { Z: () => a, a: () => s });
   var t = o(75271);
   const l = {},
    r = t.createContext(l);
   function s(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
