'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [81733],
 {
  55400: (e, n, t) => {
   t.d(n, { ZP: () => r });
   var l = t(52676),
    o = t(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  8340: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => v, contentTitle: () => h, default: () => _, frontMatter: () => m, metadata: () => p, toc: () => b });
   var l = t(52676),
    o = t(24785),
    s = t(98480),
    r = t(91050);
   function i(e) {
    const n = { button: 'button', form: 'form', label: 'label', option: 'option', select: 'select', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(r.X, { appearance: 'do', title: 'Het formulier wordt verzonden na het kiezen van de submitbutton.', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { for: 'kleur1', children: 'Kies een kleur' }), (0, l.jsxs)(n.select, { id: 'kleur1', children: [(0, l.jsx)(n.option, { name: 'groen', children: 'Groen' }), (0, l.jsx)(n.option, { name: 'blauw', children: 'Blauw' }), (0, l.jsx)(n.option, { name: 'rood', children: 'Rood' })] }), (0, l.jsx)(n.button, { children: 'Verstuur' })] }) }) }) }), '\n', (0, l.jsx)(r.X, { appearance: 'dont', title: 'Het formulier wordt automatisch verzonden na het kiezen van van een kleur.', description: 'In dit voorbeeld ontbreekt de submitbutton en wordt het formulier direct verstuurt na het kiezen van een kleur', children: (0, l.jsx)(s.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { for: 'kleur2', children: 'Kies een kleur' }), (0, l.jsxs)(n.select, { id: 'kleur2', children: [(0, l.jsx)(n.option, { name: 'groen', children: 'Groen' }), (0, l.jsx)(n.option, { name: 'blauw', children: 'Blauw' }), (0, l.jsx)(n.option, { name: 'rood', children: 'Rood' })] })] }) }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
   function c(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'verstuur-een-formulier-niet-automatisch-na-het-wijzigen-of-invullen-van-een-formulierveld', children: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld' }), '\n', (0, l.jsx)(n.p, { children: 'Verstuur bij voorkeur alleen het formulier wanneer de gebruiker de submitbutton gebruikt, doe dit niet automatisch met een andere aanleiding. Is het echt noodzakelijk om het formulier op een ander moment te versturen, informeer de gebruiker dan duidelijk vooraf.' }), '\n', (0, l.jsx)(n.p, { children: 'Versturen na bijvoorbeeld het kiezen van een optie kan de gebruiker verrassen: wat gebeurt er, ik wilde nog even checken wat ik had ingevuld, heb ik nu het goede gekozen?' }), '\n', (0, l.jsxs)(n.p, { children: ['Let wel: het gaat hier om het daadwerkelijk versturen van het formulier. Dus als de ', (0, l.jsx)(n.strong, { children: 'context' }), ' verandert. Bijvoorbeeld: je gaat naar een bevestigingspagina.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Het updaten van bijvoorbeeld zoekresultaten waarbij alleen de ', (0, l.jsx)(n.strong, { children: 'content' }), ' verandert valt hier niet onder. Bijvoorbeeld: alleen het aantal zoekresultaten verandert, maar je blijft op dezelfde pagina.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Een formulier niet onverwacht versturen is nodig om te voldoen aan het ', (0, l.jsx)(n.a, { href: '/wcag/3.2.2/', children: 'WCAG-succescriterium 3.2.2 Bij Input' }), ' (niveau A).'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   var u = t(55400);
   const m = { title: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Verstuur niet automatisch', pagination_label: 'Verstuur niet automatisch', description: 'Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.', slug: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    p = { id: 'richtlijnen/formulieren/button/submit/README', title: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld \xb7 Buttons in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.', source: '@site/docs/richtlijnen/formulieren/button/2-submit/README.mdx', sourceDirName: 'richtlijnen/formulieren/button/2-submit', slug: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', permalink: '/en/richtlijnen/formulieren/buttons/niet-automatisch-versturen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/2-submit/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Verstuur niet automatisch', pagination_label: 'Verstuur niet automatisch', description: 'Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.', slug: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Toetsenbordbediening van een button', permalink: '/en/richtlijnen/formulieren/buttons/toetsenbordbediening' }, next: { title: 'Plaatsing button', permalink: '/en/richtlijnen/formulieren/buttons/plaatsing' } },
    v = {},
    b = [];
   function g(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(a, {}), '\n', (0, l.jsx)(u.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(g, { ...e }) }) : g();
   }
  },
  98480: (e, n, t) => {
   t.d(n, { X: () => _ });
   var l = t(46506),
    o = t(4814),
    s = t(25585),
    r = t(40282),
    i = t(40678),
    a = t(85722),
    c = t(6374),
    d = t(75271),
    u = t(60027);
   const m = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var h = t(41179),
    p = t(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: m['nlds-canvas__example-surface'], children: (0, p.jsx)(l.BB, { className: (0, o.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: (0, p.jsx)(l.nv, { className: m['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: m['nlds-canvas__example-surface'], children: (0, p.jsx)(l.BB, { className: (0, o.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: n }) });
   };
   b.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: m['nlds-canvas__example-surface'], children: n });
   };
   g.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: _ = !1, displayCode: j = !0, children: y, container: f = 'document', language: x, designTokens: k } = e,
     w = 'function' == typeof y ? y() : y,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : u.uS(N || w),
     [Z, C] = (0, d.useState)(z),
     [S, B] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (Z = await c.ZP.format(z, { parser: x, plugins: [s.Z, r.ZP, i.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(Z);
     })();
    }, [z]);
    const V = (0, d.useId)();
    let P = d.Fragment;
    return (
     'paragraph' === f ? (P = v) : 'document' === f ? (P = b) : 'surface' === f && (P = g),
     (0, p.jsxs)('div', {
      className: (0, o.Z)(m['nlds-canvas']),
      children: [
       w && (0, p.jsx)('div', { className: (0, o.Z)(m['nlds-canvas__example']), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(P, { children: (0, p.jsx)(l.pu, { children: w }) }) }) }),
       j &&
        (0, p.jsx)('div', {
         className: (0, o.Z)(m['nlds-canvas__toolbar']),
         children: (0, p.jsx)(l.zx, {
          className: (0, o.Z)(m['nlds-canvas__button'], m['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           B(!S);
          },
          'aria-expanded': S,
          'aria-controls': V,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, p.jsxs)('div', {
         className: (0, o.Z)(m['nlds-canvas__code-block'], !t && m['nlds-canvas__code-block--user-select-none']),
         id: V,
         hidden: !S,
         children: [
          (0, p.jsx)(h.u, { syntax: x, textContent: Z, trim: !0 }),
          t &&
           (0, p.jsx)('div', {
            className: (0, o.Z)(m['nlds-canvas__toolbar'], m['nlds-canvas__toolbar--copy']),
            children: (0, p.jsx)(l.zx, {
             className: (0, o.Z)(m['nlds-canvas__button'], m['nlds-canvas__copy-button']),
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
  41179: (e, n, t) => {
   t.d(n, { u: () => i });
   var l = t(46506),
    o = t(70739);
   t(75271);
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
   var r = t(52676);
   function i(e) {
    let { lineNumber: n, syntax: t, textContent: i, trim: a } = e,
     c = i;
    return (
     a && (c = c.trim()),
     (0, r.jsx)(o.y$, {
      theme: s,
      code: c,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: o, getLineProps: s, getTokenProps: i } = e;
       return (0, r.jsx)(l.dn, { style: t, children: o.map((e, t) => (0, r.jsxs)('span', { ...s({ line: e }), children: [n && (0, r.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, r.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) });
      },
     })
    );
   }
  },
  91050: (e, n, t) => {
   t.d(n, { X: () => c });
   var l = t(77355),
    o = t(67663),
    s = t(46506),
    r = t(4814);
   t(75271);
   const i = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var a = t(52676);
   const c = (e) => {
    let { title: n, appearance: t, description: c, children: d, figure: u } = e;
    const m = 'Doen',
     h = 'Niet doen',
     p = u ? 'figure' : 'div',
     v = u ? 'figcaption' : 'div';
    return (0, a.jsxs)(p, { className: (0, r.Z)(i['nlds-guideline'], i[`nlds-guideline--${t}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(v, { className: (0, r.Z)(i['nlds-guideline__description']), children: ['dont' === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(l.Z, { className: i['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: i['nlds-guideline__title'], children: h })] }), (0, a.jsx)(s.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)(i['nlds-guideline__badge'], i[`nlds-guideline__badge--${t}`]), children: [(0, a.jsx)(o.Z, { className: i['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: i['nlds-guideline__title'], children: m })] }), (0, a.jsx)(s.nv, { children: n })] }), c] }), (0, a.jsx)('div', { className: (0, r.Z)(i['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => i, a: () => r });
   var l = t(75271);
   const o = {},
    s = l.createContext(o);
   function r(e) {
    const n = l.useContext(s);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), l.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
