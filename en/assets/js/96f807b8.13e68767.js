'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [84367],
 {
  55400: (e, l, n) => {
   n.d(l, { ZP: () => t });
   var o = n(52676),
    a = n(24785);
   function s(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, o.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function t(e = {}) {
    const { wrapper: l } = { ...(0, a.a)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  64333: (e, l, n) => {
   n.r(l), n.d(l, { assets: () => h, contentTitle: () => p, default: () => _, frontMatter: () => b, metadata: () => m, toc: () => v });
   var o = n(52676),
    a = n(24785),
    s = n(98480),
    t = n(91050);
   function r(e) {
    const l = { input: 'input', label: 'label', ...(0, a.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(t.X, { appearance: 'do', title: 'Het label blijft zichtbaar, ook als de gebruiker gaat invullen.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.label, { for: 'dier1', children: 'Wat is je lievelingsdier?' }), (0, o.jsx)(l.input, { type: 'text', id: 'dier1', name: 'lievelingsdier', placeholder: 'Bijvoorbeeld cavia' })] }) }) }), '\n', (0, o.jsx)(t.X, { appearance: 'dont', title: 'Alleen een placeholder gebruiken als zichtbaar label.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.label, { for: 'dier2', class: 'visually-hidden', children: 'Wat is je lievelingsdier?' }), (0, o.jsx)(l.input, { type: 'text', id: 'dier2', name: 'lievelingsdier', placeholder: 'Wat is je lievelingsdier?' })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: l } = { ...(0, a.a)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
   function c(e) {
    const l = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, a.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.h1, { id: 'zorg-ervoor-dat-het-label-altijd-zichtbaar-is', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '\n', (0, o.jsx)(l.p, { children: 'Waarom? Als het label verdwijnt bij het typen kan er verwarring ontstaan: wat moet je ook alweer invullen? Daarom is een placeholder geen goede vervanging van het label.' }), '\n', (0, o.jsxs)(l.p, { children: ['De placeholder kan ook voor verwarring zorgen bij gebruikers. Is het al veld ingevuld? Zie het onderzoek ', (0, o.jsx)(l.a, { href: 'https://www.nngroup.com/articles/form-design-placeholders/', children: (0, o.jsx)('span', { lang: 'en', children: 'Placeholders in Form Fields Are Harmful' }) }), ' van de Nielsen Norman Group.'] }), '\n', (0, o.jsxs)(l.p, { children: ['Een label vertelt ', (0, o.jsx)(l.strong, { children: 'wat' }), ' je moet invullen en een placeholder ', (0, o.jsx)(l.strong, { children: 'hoe' }), ' je een formulierveld moet invullen. Voor een e-mailveld kan het label bijvoorbeeld "Jouw e-mailadres" zijn en de placeholder "', (0, o.jsx)(l.a, { href: 'mailto:naam@voorbeeld.com', children: 'naam@voorbeeld.com' }), '".'] }), '\n', (0, o.jsxs)(l.p, { children: ['De ', (0, o.jsx)(l.strong, { children: 'hoe' }), ' informatie kan ook in een description worden opgenomen, dan blijft deze informatie ook zichtbaar tijdens het invullen.'] }), '\n', (0, o.jsx)(l.p, { children: 'Een andere reden om een label niet te verbergen is om beter te kunnen controleren of alles goed is ingevuld met autocomplete.' }), '\n', (0, o.jsx)(l.p, { children: 'Namen, adressen en telefoonnummers kunnen automatisch vooraf worden ingevuld door de browser. Wanneer het label verborgen is, moet de gebruiker controleren of elke waarde juist is ingevuld bij het goede formulierveld. Dat is veel gemakkelijker, als het label altijd zichtbaar is.' })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, a.a)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   var u = n(55400);
   const b = { title: 'Zorg ervoor dat het label altijd zichtbaar is \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Label zichtbaar', pagination_label: 'Label zichtbaar', description: 'Richtlijnen voor zichtbaarheid label van een formulierveld.', slug: '/richtlijnen/formulieren/labels/altijd-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    m = { id: 'richtlijnen/formulieren/label/always-visible/README', title: 'Zorg ervoor dat het label altijd zichtbaar is \xb7 Labels in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor zichtbaarheid label van een formulierveld.', source: '@site/docs/richtlijnen/formulieren/label/4-always-visible/README.mdx', sourceDirName: 'richtlijnen/formulieren/label/4-always-visible', slug: '/richtlijnen/formulieren/labels/altijd-zichtbaar', permalink: '/en/richtlijnen/formulieren/labels/altijd-zichtbaar', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/4-always-visible/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zorg ervoor dat het label altijd zichtbaar is \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Label zichtbaar', pagination_label: 'Label zichtbaar', description: 'Richtlijnen voor zichtbaarheid label van een formulierveld.', slug: '/richtlijnen/formulieren/labels/altijd-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Plaatsing label', permalink: '/en/richtlijnen/formulieren/labels/plaatsing' }, next: { title: 'Label bevat alleen tekst', permalink: '/en/richtlijnen/formulieren/labels/alleen-tekst' } },
    h = {},
    v = [];
   function g(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(i, {}), '\n', (0, o.jsx)(u.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: l } = { ...(0, a.a)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g();
   }
  },
  98480: (e, l, n) => {
   n.d(l, { X: () => _ });
   var o = n(46506),
    a = n(4814),
    s = n(25585),
    t = n(40282),
    r = n(40678),
    i = n(85722),
    c = n(6374),
    d = n(75271),
    u = n(60027);
   const b = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var p = n(41179),
    m = n(52676);
   const h = (e) => {
    let { children: l } = e;
    return (0, m.jsx)(o.Tg, { className: b['nlds-canvas__example-surface'], children: (0, m.jsx)(o.BB, { className: (0, a.Z)('utrecht-document--surface', b['nlds-canvas__example-document']), children: (0, m.jsx)(o.nv, { className: b['nlds-canvas__example-paragraph'], children: l }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: l } = e;
    return (0, m.jsx)(o.Tg, { className: b['nlds-canvas__example-surface'], children: (0, m.jsx)(o.BB, { className: (0, a.Z)('utrecht-document--surface', b['nlds-canvas__example-document']), children: l }) });
   };
   v.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: l } = e;
    return (0, m.jsx)(o.Tg, { className: b['nlds-canvas__example-surface'], children: l });
   };
   g.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: l, copy: n = !0, defaultExpandedCode: _ = !1, displayCode: j = !0, children: y, container: x = 'document', language: f, designTokens: k } = e,
     w = 'function' == typeof y ? y() : y,
     z = 'function' == typeof l ? l() : (0, d.isValidElement)(l) ? l : void 0,
     N = 'string' == typeof l ? l : u.uS(z || w),
     [Z, C] = (0, d.useState)(N),
     [S, D] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (Z = await c.ZP.format(N, { parser: f, plugins: [s.Z, t.ZP, r.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(Z);
     })();
    }, [N]);
    const P = (0, d.useId)();
    let E = d.Fragment;
    return (
     'paragraph' === x ? (E = h) : 'document' === x ? (E = v) : 'surface' === x && (E = g),
     (0, m.jsxs)('div', {
      className: (0, a.Z)(b['nlds-canvas']),
      children: [
       w && (0, m.jsx)('div', { className: (0, a.Z)(b['nlds-canvas__example']), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(E, { children: (0, m.jsx)(o.pu, { children: w }) }) }) }),
       j &&
        (0, m.jsx)('div', {
         className: (0, a.Z)(b['nlds-canvas__toolbar']),
         children: (0, m.jsx)(o.zx, {
          className: (0, a.Z)(b['nlds-canvas__button'], b['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           D(!S);
          },
          'aria-expanded': S,
          'aria-controls': P,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, m.jsxs)('div', {
         className: (0, a.Z)(b['nlds-canvas__code-block'], !n && b['nlds-canvas__code-block--user-select-none']),
         id: P,
         hidden: !S,
         children: [
          (0, m.jsx)(p.u, { syntax: f, textContent: Z, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, a.Z)(b['nlds-canvas__toolbar'], b['nlds-canvas__toolbar--copy']),
            children: (0, m.jsx)(o.zx, {
             className: (0, a.Z)(b['nlds-canvas__button'], b['nlds-canvas__copy-button']),
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
  41179: (e, l, n) => {
   n.d(l, { u: () => r });
   var o = n(46506),
    a = n(70739);
   n(75271);
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
   var t = n(52676);
   function r(e) {
    let { lineNumber: l, syntax: n, textContent: r, trim: i } = e,
     c = r;
    return (
     i && (c = c.trim()),
     (0, t.jsx)(a.y$, {
      theme: s,
      code: c,
      language: n || '',
      children: (e) => {
       let { style: n, tokens: a, getLineProps: s, getTokenProps: r } = e;
       return (0, t.jsx)(o.dn, { style: n, children: a.map((e, n) => (0, t.jsxs)('span', { ...s({ line: e }), children: [l && (0, t.jsx)('span', { children: n + 1 }), e.map((e, l) => (0, t.jsx)('span', { ...r({ token: e }) }, l)), '\n'] }, n)) });
      },
     })
    );
   }
  },
  91050: (e, l, n) => {
   n.d(l, { X: () => c });
   var o = n(77355),
    a = n(67663),
    s = n(46506),
    t = n(4814);
   n(75271);
   const r = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = n(52676);
   const c = (e) => {
    let { title: l, appearance: n, description: c, children: d, figure: u } = e;
    const b = 'Doen',
     p = 'Niet doen',
     m = u ? 'figure' : 'div',
     h = u ? 'figcaption' : 'div';
    return (0, i.jsxs)(m, { className: (0, t.Z)(r['nlds-guideline'], r[`nlds-guideline--${n}`]), id: 'string' == typeof l ? l?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: (0, t.Z)(r['nlds-guideline__description']), children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, t.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${n}`]), children: [(0, i.jsx)(o.Z, { className: r['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: r['nlds-guideline__title'], children: p })] }), (0, i.jsx)(s.nv, { children: l })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, t.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${n}`]), children: [(0, i.jsx)(a.Z, { className: r['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: r['nlds-guideline__title'], children: b })] }), (0, i.jsx)(s.nv, { children: l })] }), c] }), (0, i.jsx)('div', { className: (0, t.Z)(r['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, l, n) => {
   n.d(l, { Z: () => r, a: () => t });
   var o = n(75271);
   const a = {},
    s = o.createContext(a);
   function t(e) {
    const l = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function r(e) {
    let l;
    return (l = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : t(e.components)), o.createElement(s.Provider, { value: l }, e.children);
   }
  },
 },
]);
