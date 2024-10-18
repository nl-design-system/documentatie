'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [84367],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => t });
   var o = l(52676),
    a = l(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  64333: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => m, contentTitle: () => p, default: () => _, frontMatter: () => b, metadata: () => h, toc: () => v });
   var o = l(52676),
    a = l(24785),
    s = l(98480),
    t = l(91050);
   function r(e) {
    const n = { input: 'input', label: 'label', ...(0, a.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(t.X, { appearance: 'do', title: 'Het label blijft zichtbaar, ook als de gebruiker gaat invullen.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'dier1', children: 'Wat is je lievelingsdier?' }), (0, o.jsx)(n.input, { type: 'text', id: 'dier1', name: 'lievelingsdier', placeholder: 'Bijvoorbeeld cavia' })] }) }) }), '\n', (0, o.jsx)(t.X, { appearance: 'dont', title: 'Alleen een placeholder gebruiken als zichtbaar label.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'dier2', class: 'visually-hidden', children: 'Wat is je lievelingsdier?' }), (0, o.jsx)(n.input, { type: 'text', id: 'dier2', name: 'lievelingsdier', placeholder: 'Wat is je lievelingsdier?' })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
   function c(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, a.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'zorg-ervoor-dat-het-label-altijd-zichtbaar-is', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '\n', (0, o.jsx)(n.p, { children: 'Waarom? Als het label verdwijnt bij het typen kan er verwarring ontstaan: wat moet je ook alweer invullen? Daarom is een placeholder geen goede vervanging van het label.' }), '\n', (0, o.jsxs)(n.p, { children: ['De placeholder kan ook voor verwarring zorgen bij gebruikers. Is het al veld ingevuld? Zie het onderzoek ', (0, o.jsx)(n.a, { href: 'https://www.nngroup.com/articles/form-design-placeholders/', children: (0, o.jsx)('span', { lang: 'en', children: 'Placeholders in Form Fields Are Harmful' }) }), ' van de Nielsen Norman Group.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Een label vertelt ', (0, o.jsx)(n.strong, { children: 'wat' }), ' je moet invullen en een placeholder ', (0, o.jsx)(n.strong, { children: 'hoe' }), ' je een formulierveld moet invullen. Voor een e-mailveld kan het label bijvoorbeeld "Jouw e-mailadres" zijn en de placeholder "', (0, o.jsx)(n.a, { href: 'mailto:naam@voorbeeld.com', children: 'naam@voorbeeld.com' }), '".'] }), '\n', (0, o.jsxs)(n.p, { children: ['De ', (0, o.jsx)(n.strong, { children: 'hoe' }), ' informatie kan ook in een description worden opgenomen, dan blijft deze informatie ook zichtbaar tijdens het invullen.'] }), '\n', (0, o.jsx)(n.p, { children: 'Een andere reden om een label niet te verbergen is om beter te kunnen controleren of alles goed is ingevuld met autocomplete.' }), '\n', (0, o.jsx)(n.p, { children: 'Namen, adressen en telefoonnummers kunnen automatisch vooraf worden ingevuld door de browser. Wanneer het label verborgen is, moet de gebruiker controleren of elke waarde juist is ingevuld bij het goede formulierveld. Dat is veel gemakkelijker, als het label altijd zichtbaar is.' })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   var u = l(55400);
   const b = { title: 'Zorg ervoor dat het label altijd zichtbaar is \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Label zichtbaar', pagination_label: 'Label zichtbaar', description: 'Richtlijnen voor zichtbaarheid label van een formulierveld.', slug: '/richtlijnen/formulieren/labels/altijd-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    h = { id: 'richtlijnen/formulieren/label/always-visible/README', title: 'Zorg ervoor dat het label altijd zichtbaar is \xb7 Labels in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor zichtbaarheid label van een formulierveld.', source: '@site/docs/richtlijnen/formulieren/label/4-always-visible/README.mdx', sourceDirName: 'richtlijnen/formulieren/label/4-always-visible', slug: '/richtlijnen/formulieren/labels/altijd-zichtbaar', permalink: '/en/richtlijnen/formulieren/labels/altijd-zichtbaar', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/4-always-visible/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zorg ervoor dat het label altijd zichtbaar is \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Label zichtbaar', pagination_label: 'Label zichtbaar', description: 'Richtlijnen voor zichtbaarheid label van een formulierveld.', slug: '/richtlijnen/formulieren/labels/altijd-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Plaatsing label', permalink: '/en/richtlijnen/formulieren/labels/plaatsing' }, next: { title: 'Label bevat alleen tekst', permalink: '/en/richtlijnen/formulieren/labels/alleen-tekst' } },
    m = {},
    v = [];
   function g(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(i, {}), '\n', (0, o.jsx)(u.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => _ });
   var o = l(46506),
    a = l(4814),
    s = l(25585),
    t = l(40282),
    r = l(40678),
    i = l(85722),
    c = l(6374),
    d = l(75271),
    u = l(60027);
   const b = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var p = l(41179),
    h = l(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: b['nlds-canvas__example-surface'], children: (0, h.jsx)(o.BB, { className: (0, a.Z)('utrecht-document--surface', b['nlds-canvas__example-document']), children: (0, h.jsx)(o.nv, { className: b['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: b['nlds-canvas__example-surface'], children: (0, h.jsx)(o.BB, { className: (0, a.Z)('utrecht-document--surface', b['nlds-canvas__example-document']), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: b['nlds-canvas__example-surface'], children: n });
   };
   g.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: _ = !1, displayCode: j = !0, children: y, container: x = 'document', language: f, designTokens: k } = e,
     w = 'function' == typeof y ? y() : y,
     z = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : u.uS(z || w),
     [Z, C] = (0, d.useState)(N),
     [S, P] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (Z = await c.ZP.format(N, { parser: f, plugins: [s.Z, t.ZP, r.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(Z);
     })();
    }, [N]);
    const D = (0, d.useId)();
    let E = d.Fragment;
    return (
     'paragraph' === x ? (E = m) : 'document' === x ? (E = v) : 'surface' === x && (E = g),
     (0, h.jsxs)('div', {
      className: (0, a.Z)(b['nlds-canvas']),
      children: [
       w && (0, h.jsx)('div', { className: (0, a.Z)(b['nlds-canvas__example']), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, h.jsx)(E, { children: (0, h.jsx)(o.pu, { children: w }) }) }) }),
       j &&
        (0, h.jsx)('div', {
         className: (0, a.Z)(b['nlds-canvas__toolbar']),
         children: (0, h.jsx)(o.zx, {
          className: (0, a.Z)(b['nlds-canvas__button'], b['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           P(!S);
          },
          'aria-expanded': S,
          'aria-controls': D,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, h.jsxs)('div', {
         className: (0, a.Z)(b['nlds-canvas__code-block'], !l && b['nlds-canvas__code-block--user-select-none']),
         id: D,
         hidden: !S,
         children: [
          (0, h.jsx)(p.u, { syntax: f, textContent: Z, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, a.Z)(b['nlds-canvas__toolbar'], b['nlds-canvas__toolbar--copy']),
            children: (0, h.jsx)(o.zx, {
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
  41179: (e, n, l) => {
   l.d(n, { u: () => r });
   var o = l(46506),
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
   var t = l(52676);
   function r(e) {
    let { lineNumber: n, syntax: l, textContent: r, trim: i } = e,
     c = r;
    return (
     i && (c = c.trim()),
     (0, t.jsx)(a.y$, {
      theme: s,
      code: c,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: a, getLineProps: s, getTokenProps: r } = e;
       return (0, t.jsx)(o.dn, { style: l, children: a.map((e, l) => (0, t.jsxs)('span', { ...s({ line: e }), children: [n && (0, t.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, t.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => c });
   var o = l(77355),
    a = l(67663),
    s = l(46506),
    t = l(4814);
   l(75271);
   const r = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var i = l(52676);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: d, figure: u } = e;
    const b = 'Doen',
     p = 'Niet doen',
     h = u ? 'figure' : 'div',
     m = u ? 'figcaption' : 'div';
    return (0, i.jsxs)(h, { className: (0, t.Z)(r['nlds-guideline'], r[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: (0, t.Z)(r['nlds-guideline__description']), children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, t.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(o.Z, { className: r['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: r['nlds-guideline__title'], children: p })] }), (0, i.jsx)(s.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.nv, { className: (0, t.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, i.jsx)(a.Z, { className: r['nlds-guideline__icon'] }), (0, i.jsx)('span', { className: r['nlds-guideline__title'], children: b })] }), (0, i.jsx)(s.nv, { children: n })] }), c] }), (0, i.jsx)('div', { className: (0, t.Z)(r['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => r, a: () => t });
   var o = l(75271);
   const a = {},
    s = o.createContext(a);
   function t(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : t(e.components)), o.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
