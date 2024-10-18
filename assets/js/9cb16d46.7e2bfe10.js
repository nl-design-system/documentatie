'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [70605],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => a });
   var o = l(52676),
    t = l(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  73093: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => h, contentTitle: () => p, default: () => _, frontMatter: () => m, metadata: () => v, toc: () => g });
   var o = l(52676),
    t = l(24785),
    s = l(98480),
    a = l(91050);
   function r(e) {
    const n = { input: 'input', label: 'label', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(a.X, { appearance: 'do', title: 'Voeg autocomplete waarden toe aan adresgegevens.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'adres1', children: 'Straat en huisnummer' }), (0, o.jsx)(n.input, { type: 'text', id: 'adres1', autocomplete: 'street-address', name: 'adres' }), (0, o.jsx)(n.label, { for: 'postcode1', children: 'Postcode' }), (0, o.jsx)(n.input, { type: 'text', id: 'postcode1', autocomplete: 'postal-code', name: 'postcode' }), (0, o.jsx)(n.label, { for: 'woonplaats1', children: 'Woonplaats' }), (0, o.jsx)(n.input, { type: 'text', id: 'woonplaats1', autocomplete: 'address-level2', name: 'woonplaats' })] }) }) }), '\n', (0, o.jsx)(a.X, { appearance: 'dont', title: 'Laat autocomplete waarden weg bij adresgegevens.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'adres2', children: 'Straat en huisnummer' }), (0, o.jsx)(n.input, { type: 'text', id: 'adres2', name: 'adres' }), (0, o.jsx)(n.label, { for: 'postcode2', children: 'Postcode' }), (0, o.jsx)(n.input, { type: 'text', id: 'postcode2', name: 'postcode' }), (0, o.jsx)(n.label, { for: 'woonplaats2', children: 'Woonplaats' }), (0, o.jsx)(n.input, { type: 'text', id: 'woonplaats2', name: 'woonplaats' })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h3: 'h3', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'vul-bekende-informatie-in-waar-mogelijk', children: 'Vul bekende informatie in waar mogelijk' }), '\n', (0, o.jsxs)(n.p, { children: ['Als de gebruiker is ingelogd, gebruik dan bekende informatie om velden vast in te vullen. In DigiD-sessies is bijvoorbeeld al veel informatie beschikbaar, die zou kunnen worden gebruikt om velden vooraf in te vullen.\nHet ', (0, o.jsx)(n.a, { href: 'https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).', children: 'gebruik van DigiD' }), ' is wel aan wettelijke voorwaarden verbonden.'] }), '\n', (0, o.jsx)(n.h3, { id: 'autocomplete', children: 'Autocomplete' }), '\n', (0, o.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, o.jsx)(n.code, { children: 'autocomplete' }), ' maakt het voor de gebruiker makkelijker om al eerder ingevulde informatie automatisch toe te voegen. De volledige lijst waarden staat op de MDN-website: ', (0, o.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete', children: 'HTML-attribuut: autocomplete' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Sommige waarden zijn onduidelijk of ontbreken voor Nederlandse toepassingen. Jules Ernst van 200 OK heeft een overzicht gemaakt van de beste manier om ', (0, o.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/#dutch', children: 'autocomplete in Nederlandse formulieren' }), ' toe te passen.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Toevoegen van autocomplete aan de formuliervelden is nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'WCAG-Succescriterium 1.3.5 Identificeer het doel van de input' }), ' (niveau AA).'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   var u = l(55400);
   const m = { title: 'Vul bekende informatie in waar mogelijk \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Automatisch invullen', pagination_label: 'Automatisch invullen', description: 'Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.', slug: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    v = { id: 'richtlijnen/formulieren/help/autofill/README', title: 'Vul bekende informatie in waar mogelijk \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', description: 'Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.', source: '@site/docs/richtlijnen/formulieren/help/6-autofill/README.mdx', sourceDirName: 'richtlijnen/formulieren/help/6-autofill', slug: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen', permalink: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/6-autofill/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Vul bekende informatie in waar mogelijk \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Automatisch invullen', pagination_label: 'Automatisch invullen', description: 'Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.', slug: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Autocomplete in een formulier', permalink: '/richtlijnen/formulieren/voorkom-fouten/autocomplete' }, next: { title: 'Controleren en aanpassen', permalink: '/richtlijnen/formulieren/voorkom-fouten/controleren-en-aanpassen' } },
    h = {},
    g = [];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(i, {}), '\n', (0, o.jsx)(u.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => _ });
   var o = l(46506),
    t = l(4814),
    s = l(25585),
    a = l(40282),
    r = l(40678),
    i = l(85722),
    c = l(6374),
    d = l(75271),
    u = l(60027);
   const m = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var p = l(41179),
    v = l(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, v.jsx)(o.Tg, { className: m['nlds-canvas__example-surface'], children: (0, v.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: (0, v.jsx)(o.nv, { className: m['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, v.jsx)(o.Tg, { className: m['nlds-canvas__example-surface'], children: (0, v.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, v.jsx)(o.Tg, { className: m['nlds-canvas__example-surface'], children: n });
   };
   b.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: _ = !1, displayCode: j = !0, children: y, container: x = 'document', language: f, designTokens: k } = e,
     w = 'function' == typeof y ? y() : y,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [S, C] = (0, d.useState)(Z),
     [z, A] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (S = await c.ZP.format(Z, { parser: f, plugins: [s.Z, a.ZP, r.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(S);
     })();
    }, [Z]);
    const D = (0, d.useId)();
    let P = d.Fragment;
    return (
     'paragraph' === x ? (P = h) : 'document' === x ? (P = g) : 'surface' === x && (P = b),
     (0, v.jsxs)('div', {
      className: (0, t.Z)(m['nlds-canvas']),
      children: [
       w && (0, v.jsx)('div', { className: (0, t.Z)(m['nlds-canvas__example']), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, v.jsx)(P, { children: (0, v.jsx)(o.pu, { children: w }) }) }) }),
       j &&
        (0, v.jsx)('div', {
         className: (0, t.Z)(m['nlds-canvas__toolbar']),
         children: (0, v.jsx)(o.zx, {
          className: (0, t.Z)(m['nlds-canvas__button'], m['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           A(!z);
          },
          'aria-expanded': z,
          'aria-controls': D,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, v.jsxs)('div', {
         className: (0, t.Z)(m['nlds-canvas__code-block'], !l && m['nlds-canvas__code-block--user-select-none']),
         id: D,
         hidden: !z,
         children: [
          (0, v.jsx)(p.u, { syntax: f, textContent: S, trim: !0 }),
          l &&
           (0, v.jsx)('div', {
            className: (0, t.Z)(m['nlds-canvas__toolbar'], m['nlds-canvas__toolbar--copy']),
            children: (0, v.jsx)(o.zx, {
             className: (0, t.Z)(m['nlds-canvas__button'], m['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(S).catch((e) => console.error('Copy code failed', e));
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
   l.d(n, { u: () => r });
   var o = l(46506),
    t = l(70739);
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
   var a = l(52676);
   function r(e) {
    let { lineNumber: n, syntax: l, textContent: r, trim: i } = e,
     c = r;
    return (
     i && (c = c.trim()),
     (0, a.jsx)(t.y$, {
      theme: s,
      code: c,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: t, getLineProps: s, getTokenProps: r } = e;
       return (0, a.jsx)(o.dn, { style: l, children: t.map((e, l) => (0, a.jsxs)('span', { ...s({ line: e }), children: [n && (0, a.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => c });
   var o = l(77355),
    t = l(67663),
    s = l(46506),
    a = l(4814);
   l(75271);
   const r = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = l(52676);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: d, figure: u } = e;
    const m = 'Doen',
     p = 'Niet doen',
     v = u ? 'figure' : 'div',
     h = u ? 'figcaption' : 'div';
    return (0, i.jsxs)(v, { className: (0, a.Z)(r['nlds-guideline'], r[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: (0, a.Z)(r['nlds-guideline__description']), children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, a.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(o.Z, { className: r['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: r['nlds-guideline__title'], children: p })] }), (0, i.jsx)(s.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, a.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(t.Z, { className: r['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: r['nlds-guideline__title'], children: m })] }), (0, i.jsx)(s.nv, { children: n })] }), c] }), (0, i.jsx)('div', { className: (0, a.Z)(r['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => r, a: () => a });
   var o = l(75271);
   const t = {},
    s = o.createContext(t);
   function a(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
