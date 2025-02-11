'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [44617],
 {
  49824: (e, n, o) => {
   o.d(n, { ZP: () => s });
   var t = o(52676),
    l = o(87118);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  53578: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => b, contentTitle: () => p, default: () => j, frontMatter: () => m, metadata: () => h, toc: () => v });
   var t = o(52676),
    l = o(87118),
    r = o(49824),
    s = o(43599),
    i = o(40761);
   function a(e) {
    const n = { h2: 'h2', input: 'input', label: 'label', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(i.X, { appearance: 'do', title: 'Het autocomplete-attribuut gebruiken.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { htmlFor: 'voornaam', children: 'Je voornaam' }), (0, t.jsx)(n.input, { id: 'voornaam', type: 'text', autoComplete: 'given-name' })] }) }) }), '\n', (0, t.jsx)(i.X, { appearance: 'dont', title: 'Het autocomplete-attribuut niet gebruiken.', description: 'Het input type alleen is hier niet voldoende om te voldoen aan WCAG.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { htmlFor: 'telefoon', children: 'Uw telefoonnummer' }), (0, t.jsx)(n.input, { id: 'telefoon', type: 'tel' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', p: 'p', strong: 'strong', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'autocomplete-in-een-formulier', children: 'Autocomplete in een formulier' }), '\n', (0, t.jsxs)(n.p, { children: ['Het ', (0, t.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete', children: ['HTML-attribuut ', (0, t.jsx)(n.code, { children: 'autocomplete' })] }), ' vertelt aan de browser welke waarde verwacht wordt bij het invullen van een formulierveld. Browsers kunnen voor gebruikers onthouden wat ze eerder hebben ingevuld.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Die opgeslagen waarden kunnen browsers gebruiken om velden vast in te vullen, door het ', (0, t.jsx)(n.code, { children: 'autocomplete' }), ' attribuut weten ze welke velden dat moeten zijn. Gegevens zoals namen, adres en telefoonnummer kunnen dan automatisch worden ingevuld door de browser.'] }), '\n', (0, t.jsx)(n.p, { children: 'Autocomplete is fijn voor gebruikers die moeite hebben met typen, problemen hebben met hun geheugen en voor gebruikers die moeite hebben met taal.' }), '\n', (0, t.jsx)(n.h2, { id: 'gebruik-autocomplete-als-er-een-waarde-voor-is-gedefinieerd', children: 'Gebruik autocomplete als er een waarde voor is gedefinieerd' }), '\n', (0, t.jsxs)(n.p, { children: ['WCAG bevat een volledige ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#input-purposes', children: 'lijst van waarden voor autocomplete' }), '. Gebruik altijd een autocomplete-attribuut als er een waarde voor een formulierveld gedefinieerd is in deze lijst.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Jules Ernst van 200 OK heeft van deze lijst een ', (0, t.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/', children: 'Nederlandse interpretatie' }), ' gemaakt.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Belangrijk bij het gebruik van autocomplete is dat het label altijd zichtbaar moet blijven, de gebruiker moet weten of de juiste waarde in het juiste veld is ingevoerd. Zie hiervoor de richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/altijd-zichtbaar', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het gebruik van het juiste ', (0, t.jsx)(n.code, { children: 'autocomplete' }), '-attribuut is nodig om te voldoen aan het ', (0, t.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input' }), ' (niveau AA).'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete', children: 'aria-autocomplete' }), ' heeft een ander doel en ander gebruik dan autocomplete bij formuliervelden. ', (0, t.jsx)(n.code, { children: 'aria-autocomplete' }), ' wordt gebruikt in webcomponenten, bijvoorbeeld om aan te geven dat er suggesties zijn bij zoekresultaten.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
   const m = { title: 'Autocomplete in een formulier \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Autocomplete', pagination_label: 'Autocomplete in een formulier', description: 'Richtlijnen voor het gebruik van het autocomplete-attribuut.', slug: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', keywords: ['informatie', 'formulier', 'design', 'code'] },
    p = void 0,
    h = { id: 'richtlijnen/formulieren/help/autocomplete/README', title: 'Autocomplete in een formulier \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor het gebruik van het autocomplete-attribuut.', source: '@site/docs/richtlijnen/formulieren/help/5-autocomplete/README.mdx', sourceDirName: 'richtlijnen/formulieren/help/5-autocomplete', slug: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', permalink: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/5-autocomplete/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Autocomplete in een formulier \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Autocomplete', pagination_label: 'Autocomplete in een formulier', description: 'Richtlijnen voor het gebruik van het autocomplete-attribuut.', slug: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', keywords: ['informatie', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Geef geldige waardes aan een invoerveld', permalink: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes' }, next: { title: 'Automatisch invullen', permalink: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen' } },
    b = {},
    v = [];
   function g(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(r.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g();
   }
  },
  43599: (e, n, o) => {
   o.d(n, { X: () => g });
   var t = o(41179),
    l = o(31916),
    r = o(4814),
    s = o(25585),
    i = o(40282),
    a = o(40678),
    c = o(85722),
    d = o(6374),
    u = o(75271),
    m = o(60027),
    p = o(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   b.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   v.displayName = 'SurfaceContainer';
   const g = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: g = !1, displayCode: j = !0, children: y, container: f = 'document', language: x, designTokens: k } = e;
    const _ = 'function' == typeof y ? y() : y,
     w = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : m.uS(w || _),
     [A, C] = (0, u.useState)(N),
     [Z, z] = (0, u.useState)(g);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: x, plugins: [s.Z, i.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [N]);
    const S = (0, u.useId)();
    let F = u.Fragment;
    return (
     'paragraph' === f ? (F = h) : 'document' === f ? (F = b) : 'surface' === f && (F = v),
     (0, p.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       _ && (0, p.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(F, { children: (0, p.jsx)(l.pu, { children: _ }) }) }) }),
       j &&
        (0, p.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(l.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           z(!Z);
          },
          'aria-expanded': Z,
          'aria-controls': S,
          children: Z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, p.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !Z,
         children: [
          (0, p.jsx)(t.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: A, trim: !0 }),
          o &&
           (0, p.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(l.zx, {
             className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(A).catch((e) => console.error('Copy code failed', e));
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
   o.d(n, { u: () => c });
   var t = o(31916),
    l = o(70739),
    r = o(75271),
    s = o(40761);
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
   var a = o(52676);
   function c(e) {
    let { lineNumber: n, syntax: o, textContent: c, trim: d } = e,
     u = c;
    const { title: m, type: p } = (0, r.useContext)(s.n),
     h = (0, r.useId)();
    return (
     d && (u = u.trim()),
     (0, a.jsx)(l.y$, {
      theme: i,
      code: u,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: l, getLineProps: r, getTokenProps: s } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, a.jsx)(t.dn, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: o, children: l.map((e, o) => (0, a.jsxs)('span', { ...r({ line: e }), children: [n && (0, a.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, o) => {
   o.d(n, { X: () => d, n: () => c });
   var t = o(77355),
    l = o(67663),
    r = o(31916),
    s = o(4814),
    i = o(75271),
    a = o(52676);
   const c = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: o, description: i, children: d, figure: u } = e;
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div';
     return (0, a.jsxs)(p, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, a.jsx)(r.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, a.jsx)(r.nv, { children: n })] }), i] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: m[o] }, children: d }) })] });
    };
  },
  87118: (e, n, o) => {
   o.d(n, { Z: () => i, a: () => s });
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
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
