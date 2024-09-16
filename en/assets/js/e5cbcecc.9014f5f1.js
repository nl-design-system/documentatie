'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [98554],
 {
  23680: (e, n, l) => {
   l.d(n, { ZP: () => r });
   var o = l(52676),
    t = l(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  22559: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => v, contentTitle: () => m, default: () => b, frontMatter: () => p, metadata: () => g, toc: () => h });
   var o = l(52676),
    t = l(24785),
    s = l(98480),
    r = l(91050);
   function a(e) {
    const n = { input: 'input', label: 'label', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(r.X, { appearance: 'do', title: 'Leg uit hoe een veld in te vullen.', description: 'Bijvoorbeeld in de description.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'ww', children: 'Nieuw wachtwoord' }), (0, o.jsx)(n.p, { id: 'ww_description', children: 'Minimaal 8 karakters, waarvan 2 cijfers en 1 hoofdletter.' }), (0, o.jsx)(n.input, { type: 'password', id: 'ww', name: 'wachtwoord', 'aria-describedby': 'ww_description' })] }) }) }), '\n', (0, o.jsx)(r.X, { appearance: 'dont', title: 'Wijze van invullen weglaten.', description: 'Laat de gebruiker niet raden of pas bij de foutmeldingen ontdekken wat er mis is.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'ww2', children: 'Nieuw wachtwoord' }), (0, o.jsx)(n.input, { type: 'password', id: 'ww2', name: 'wachtwoord' })] }) }) }), '\n', (0, o.jsx)(r.X, { appearance: 'dont', title: 'Wijze van invullen alleen in de placeholder zetten.', description: 'Zeker als de wijze van invullen precies goed moet zijn.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'geboortedatum2', children: 'Geboortedatum' }), (0, o.jsx)(n.input, { type: 'text', id: 'geboortedatum2', name: 'geboortedatum', placeholder: 'dd/mm/jjjj' })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { h1: 'h1', img: 'img', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'geef-geldige-waardes-aan-voor-een-invoerveld', children: 'Geef geldige waardes aan voor een invoerveld' }), '\n', (0, o.jsx)(n.p, { children: 'Geef geldige waardes aan voor een invoerveld (bijvoorbeeld de datum- of wachtwoordeisen) en niet alleen in de placeholder.' }), '\n', (0, o.jsx)(n.p, { children: 'Bedenk ook of het echt belangrijk is of, bijvoorbeeld een geboortedatum of telefoonnummer aan exacte invoereisen moet voldoen.' }), '\n', (0, o.jsx)(n.p, { children: (0, o.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_wachtwoord-alt.png', alt: 'Wachtwoord-eisen zijn in de description getoond' }) }), '\n', (0, o.jsx)(n.p, { children: (0, o.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_geboortedatum.png', alt: 'Voorbeeld van de waarden voor de geboortedatum worden in de description getoond' }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   var u = l(23680);
   const p = { title: 'Geef geldige waardes aan voor een invoerveld | Voorkom fouten in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geef geldige waardes aan', pagination_label: 'Geef geldige waardes aan een invoerveld', description: 'Richtlijnen om geldige waardes aan een invoerveld te geven.', slug: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    g = { id: 'richtlijnen/formulieren/help/show-values/README', title: 'Geef geldige waardes aan voor een invoerveld | Voorkom fouten in een formulier | Richtlijnen', description: 'Richtlijnen om geldige waardes aan een invoerveld te geven.', source: '@site/docs/richtlijnen/formulieren/help/4-show-values/README.mdx', sourceDirName: 'richtlijnen/formulieren/help/4-show-values', slug: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/geldige-waardes', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/4-show-values/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef geldige waardes aan voor een invoerveld | Voorkom fouten in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geef geldige waardes aan', pagination_label: 'Geef geldige waardes aan een invoerveld', description: 'Richtlijnen om geldige waardes aan een invoerveld te geven.', slug: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Keur niet te snel af', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af' }, next: { title: 'Autocomplete in een formulier', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/autocomplete' } },
    v = {},
    h = [];
   function _(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(i, {}), '\n', (0, o.jsx)(u.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(_, { ...e }) }) : _();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => b });
   var o = l(46506),
    t = l(4814),
    s = l(25585),
    r = l(40282),
    a = l(40678),
    i = l(85722),
    d = l(6374),
    c = l(75271),
    u = l(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = l(41179),
    g = l(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, g.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, g.jsx)(o.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const h = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, g.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   h.displayName = 'DocumentContainer';
   const _ = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   _.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: b = !1, displayCode: j = !0, children: y, container: f = 'document', language: x, designTokens: k } = e,
     w = 'function' == typeof y ? y() : y,
     N = 'function' == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [C, z] = (0, c.useState)(Z),
     [S, G] = (0, c.useState)(b);
    (0, c.useEffect)(() => {
     (async () => {
      (C = await d.ZP.format(Z, { parser: x, plugins: [s.Z, r.ZP, a.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), z(C);
     })();
    }, [Z]);
    const P = (0, c.useId)();
    let E = c.Fragment;
    return (
     'paragraph' === f ? (E = v) : 'document' === f ? (E = h) : 'surface' === f && (E = _),
     (0, g.jsxs)('div', {
      className: (0, t.Z)(p['nlds-canvas']),
      children: [
       w && (0, g.jsx)('div', { className: (0, t.Z)(p['nlds-canvas__example']), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, g.jsx)(E, { children: (0, g.jsx)(o.pu, { children: w }) }) }) }),
       j &&
        (0, g.jsx)('div', {
         className: (0, t.Z)(p['nlds-canvas__toolbar']),
         children: (0, g.jsx)(o.zx, {
          className: (0, t.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           G(!S);
          },
          'aria-expanded': S,
          'aria-controls': P,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, g.jsxs)('div', {
         className: (0, t.Z)(p['nlds-canvas__code-block'], !l && p['nlds-canvas__code-block--user-select-none']),
         id: P,
         hidden: !S,
         children: [
          (0, g.jsx)(m.u, { syntax: x, textContent: C, trim: !0 }),
          l &&
           (0, g.jsx)('div', {
            className: (0, t.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, g.jsx)(o.zx, {
             className: (0, t.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
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
  41179: (e, n, l) => {
   l.d(n, { u: () => a });
   var o = l(46506),
    t = l(70739);
   l(75271);
   const s = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
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
   var r = l(52676);
   function a(e) {
    let { lineNumber: n, syntax: l, textContent: a, trim: i } = e,
     d = a;
    return (
     i && (d = d.trim()),
     (0, r.jsx)(t.y$, {
      theme: s,
      code: d,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: t, getLineProps: s, getTokenProps: a } = e;
       return (0, r.jsx)(o.dn, { style: l, children: t.map((e, l) => (0, r.jsxs)('span', { ...s({ line: e }), children: [n && (0, r.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, r.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => d });
   var o = l(77355),
    t = l(67663),
    s = l(46506),
    r = l(4814);
   l(75271);
   const a = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = l(52676);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c, figure: u } = e;
    const p = 'Doen',
     m = 'Niet doen',
     g = u ? 'figure' : 'div',
     v = u ? 'figcaption' : 'div';
    return (0, i.jsxs)(g, { className: (0, r.Z)(a['nlds-guideline'], a[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(v, { className: (0, r.Z)(a['nlds-guideline__description']), children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, r.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(o.Z, { className: a['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: a['nlds-guideline__title'], children: m })] }), (0, i.jsx)(s.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, r.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(t.Z, { className: a['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: a['nlds-guideline__title'], children: p })] }), (0, i.jsx)(s.nv, { children: n })] }), d] }), (0, i.jsx)('div', { className: (0, r.Z)(a['nlds-guideline__example']), children: c })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => a, a: () => r });
   var o = l(75271);
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
