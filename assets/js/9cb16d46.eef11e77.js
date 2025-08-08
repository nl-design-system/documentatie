'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [70605],
 {
  66968: (e, n, o) => {
   o.d(n, { ZP: () => s });
   var t = o(52676),
    l = o(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  23519: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => v, contentTitle: () => p, default: () => j, frontMatter: () => m, metadata: () => h, toc: () => b });
   var t = o(52676),
    l = o(40139),
    r = o(66968),
    s = o(43599),
    a = o(40761);
   function i(e) {
    const n = { h2: 'h2', input: 'input', label: 'label', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(a.X, { appearance: 'do', title: 'Voeg autocomplete waarden toe aan adresgegevens.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { htmlFor: 'adres1', children: 'Straat en huisnummer' }), (0, t.jsx)(n.input, { type: 'text', id: 'adres1', autoComplete: 'street-address', name: 'adres' }), (0, t.jsx)(n.label, { htmlFor: 'postcode1', children: 'Postcode' }), (0, t.jsx)(n.input, { type: 'text', id: 'postcode1', autoComplete: 'postal-code', name: 'postcode' }), (0, t.jsx)(n.label, { htmlFor: 'woonplaats1', children: 'Woonplaats' }), (0, t.jsx)(n.input, { type: 'text', id: 'woonplaats1', autoComplete: 'address-level2', name: 'woonplaats' })] }) }) }), '\n', (0, t.jsx)(a.X, { appearance: 'dont', title: 'Laat autocomplete waarden weg bij adresgegevens.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { htmlFor: 'adres2', children: 'Straat en huisnummer' }), (0, t.jsx)(n.input, { type: 'text', id: 'adres2', name: 'adres' }), (0, t.jsx)(n.label, { htmlFor: 'postcode2', children: 'Postcode' }), (0, t.jsx)(n.input, { type: 'text', id: 'postcode2', name: 'postcode' }), (0, t.jsx)(n.label, { htmlFor: 'woonplaats2', children: 'Woonplaats' }), (0, t.jsx)(n.input, { type: 'text', id: 'woonplaats2', name: 'woonplaats' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h3: 'h3', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'vul-bekende-informatie-in-waar-mogelijk', children: 'Vul bekende informatie in waar mogelijk' }), '\n', (0, t.jsxs)(n.p, { children: ['Als de gebruiker is ingelogd, gebruik dan bekende informatie om velden vast in te vullen. In DigiD-sessies is bijvoorbeeld al veel informatie beschikbaar, die zou kunnen worden gebruikt om velden vooraf in te vullen.\nHet ', (0, t.jsx)(n.a, { href: 'https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).', children: 'gebruik van DigiD' }), ' is wel aan wettelijke voorwaarden verbonden.'] }), '\n', (0, t.jsx)(n.h3, { id: 'autocomplete', children: 'Autocomplete' }), '\n', (0, t.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, t.jsx)(n.code, { children: 'autocomplete' }), ' maakt het voor de gebruiker makkelijker om al eerder ingevulde informatie automatisch toe te voegen. De volledige lijst waarden staat op de MDN-website: ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete', children: 'HTML-attribuut: autocomplete' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Sommige waarden zijn onduidelijk of ontbreken voor Nederlandse toepassingen. Jules Ernst van 200 OK heeft een overzicht gemaakt van de beste manier om ', (0, t.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/#dutch', children: 'autocomplete in Nederlandse formulieren' }), ' toe te passen.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Toevoegen van autocomplete aan de formuliervelden is nodig om te voldoen aan het ', (0, t.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'WCAG-Succescriterium 1.3.5 Identificeer het doel van de input' }), ' (niveau AA).'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
   const m = { title: 'Vul bekende informatie in waar mogelijk \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Automatisch invullen', pagination_label: 'Automatisch invullen', description: 'Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.', slug: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    h = { id: 'richtlijnen/formulieren/help/autofill/README', title: 'Vul bekende informatie in waar mogelijk \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', description: 'Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.', source: '@site/docs/richtlijnen/formulieren/help/6-autofill/README.mdx', sourceDirName: 'richtlijnen/formulieren/help/6-autofill', slug: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen', permalink: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/6-autofill/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Vul bekende informatie in waar mogelijk \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Automatisch invullen', pagination_label: 'Automatisch invullen', description: 'Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.', slug: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Autocomplete in een formulier', permalink: '/richtlijnen/formulieren/voorkom-fouten/autocomplete' }, next: { title: 'Controleren en aanpassen', permalink: '/richtlijnen/formulieren/voorkom-fouten/controleren-en-aanpassen' } },
    v = {},
    b = [];
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
    l = o(16167),
    r = o(4814),
    s = o(64642),
    a = o(93872),
    i = o(86017),
    c = o(48231),
    d = o(75119),
    u = o(75271),
    m = o(60027),
    p = o(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   b.displayName = 'SurfaceContainer';
   const g = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: g = !1, displayCode: j = !0, children: y, container: x = 'document', language: f, designTokens: k } = e;
    const _ = 'function' == typeof y ? y() : y,
     w = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : m.uS(w || _),
     [C, Z] = (0, u.useState)(N),
     [S, F] = (0, u.useState)(g);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: f, plugins: [s.Z, a.ZP, i.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [N]);
    const A = (0, u.useId)();
    let z = u.Fragment;
    return (
     'paragraph' === x ? (z = h) : 'document' === x ? (z = v) : 'surface' === x && (z = b),
     (0, p.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       _ && (0, p.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(z, { children: (0, p.jsx)(l.pu, { children: _ }) }) }) }),
       j &&
        (0, p.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(l.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           F(!S);
          },
          'aria-expanded': S,
          'aria-controls': A,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, p.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: A,
         hidden: !S,
         children: [
          (0, p.jsx)(t.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: C, trim: !0 }),
          o &&
           (0, p.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(l.zx, {
             className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(C).catch((e) => console.error('Copy code failed', e));
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
   var t = o(16167),
    l = o(60648),
    r = o(75271),
    s = o(40761);
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
   var i = o(52676);
   function c(e) {
    let { lineNumber: n, syntax: o, textContent: c, trim: d } = e,
     u = c;
    const { title: m, type: p } = (0, r.useContext)(s.n),
     h = (0, r.useId)();
    return (
     d && (u = u.trim()),
     (0, i.jsx)(l.y$, {
      theme: a,
      code: u,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: l, getLineProps: r, getTokenProps: s } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(t.dn, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: o, children: l.map((e, o) => (0, i.jsxs)('span', { ...r({ line: e }), children: [n && (0, i.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, i.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, o) => {
   o.d(n, { X: () => d, n: () => c });
   var t = o(69244),
    l = o(20061),
    r = o(16167),
    s = o(4814),
    a = o(75271),
    i = o(52676);
   const c = (0, a.createContext)({}),
    d = (e) => {
     let { title: n, appearance: o, description: a, children: d, figure: u } = e;
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div';
     return (0, i.jsxs)(p, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, i.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(r.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, i.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(r.nv, { children: n })] }), a] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: n, type: m[o] }, children: d }) })] });
    };
  },
  40139: (e, n, o) => {
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
