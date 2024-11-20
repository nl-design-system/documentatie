'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [81733],
 {
  55400: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var l = t(52676),
    o = t(24785);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  8340: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => v, contentTitle: () => h, default: () => _, frontMatter: () => m, metadata: () => p, toc: () => b });
   var l = t(52676),
    o = t(24785),
    r = t(98480),
    s = t(91050);
   function i(e) {
    const n = { button: 'button', form: 'form', label: 'label', option: 'option', select: 'select', ...(0, o.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(s.X, { appearance: 'do', title: 'Het formulier wordt verzonden na het kiezen van de submitbutton.', children: (0, l.jsx)(r.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { for: 'kleur1', children: 'Kies een kleur' }), (0, l.jsxs)(n.select, { id: 'kleur1', children: [(0, l.jsx)(n.option, { name: 'groen', children: 'Groen' }), (0, l.jsx)(n.option, { name: 'blauw', children: 'Blauw' }), (0, l.jsx)(n.option, { name: 'rood', children: 'Rood' })] }), (0, l.jsx)(n.button, { children: 'Verstuur' })] }) }) }) }), '\n', (0, l.jsx)(s.X, { appearance: 'dont', title: 'Het formulier wordt automatisch verzonden na het kiezen van van een kleur.', description: 'In dit voorbeeld ontbreekt de submitbutton en wordt het formulier direct verstuurt na het kiezen van een kleur', children: (0, l.jsx)(r.X, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.label, { for: 'kleur2', children: 'Kies een kleur' }), (0, l.jsxs)(n.select, { id: 'kleur2', children: [(0, l.jsx)(n.option, { name: 'groen', children: 'Groen' }), (0, l.jsx)(n.option, { name: 'blauw', children: 'Blauw' }), (0, l.jsx)(n.option, { name: 'rood', children: 'Rood' })] })] }) }) }) })] });
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
    p = { id: 'richtlijnen/formulieren/button/submit/README', title: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld \xb7 Buttons in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.', source: '@site/docs/richtlijnen/formulieren/button/2-submit/README.mdx', sourceDirName: 'richtlijnen/formulieren/button/2-submit', slug: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', permalink: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/2-submit/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Verstuur niet automatisch', pagination_label: 'Verstuur niet automatisch', description: 'Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.', slug: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Toetsenbordbediening van een button', permalink: '/richtlijnen/formulieren/buttons/toetsenbordbediening' }, next: { title: 'Plaatsing button', permalink: '/richtlijnen/formulieren/buttons/plaatsing' } },
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
    r = t(25585),
    s = t(40282),
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
    let { code: n, copy: t = !0, defaultExpandedCode: _ = !1, displayCode: j = !0, children: x, container: y = 'document', language: f, designTokens: k } = e,
     w = 'function' == typeof x ? x() : x,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : u.uS(N || w),
     [Z, C] = (0, d.useState)(z),
     [B, S] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (Z = await c.ZP.format(z, { parser: f, plugins: [r.Z, s.ZP, i.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(Z);
     })();
    }, [z]);
    const V = (0, d.useId)();
    let P = d.Fragment;
    return (
     'paragraph' === y ? (P = v) : 'document' === y ? (P = b) : 'surface' === y && (P = g),
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
           S(!B);
          },
          'aria-expanded': B,
          'aria-controls': V,
          children: B ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, p.jsxs)('div', {
         className: (0, o.Z)(m['nlds-canvas__code-block'], !t && m['nlds-canvas__code-block--user-select-none']),
         id: V,
         hidden: !B,
         children: [
          (0, p.jsx)(h.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: Z, trim: !0 }),
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
   t.d(n, { u: () => c });
   var l = t(46506),
    o = t(70739),
    r = t(75271),
    s = t(91050);
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
   var a = t(52676);
   function c(e) {
    let { lineNumber: n, syntax: t, textContent: c, trim: d } = e,
     u = c;
    const { title: m, type: h } = (0, r.useContext)(s.n),
     p = (0, r.useId)();
    return (
     d && (u = u.trim()),
     (0, a.jsx)(o.y$, {
      theme: i,
      code: u,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: o, getLineProps: r, getTokenProps: s } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, a.jsx)(l.dn, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': p, style: t, children: o.map((e, t) => (0, a.jsxs)('span', { ...r({ line: e }), children: [n && (0, a.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  91050: (e, n, t) => {
   t.d(n, { n: () => d, X: () => u });
   var l = t(77355),
    o = t(67663),
    r = t(46506),
    s = t(4814),
    i = t(75271);
   const a = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var c = t(52676);
   const d = (0, i.createContext)({}),
    u = (e) => {
     let { title: n, appearance: t, description: i, children: u, figure: m } = e;
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = m ? 'figure' : 'div',
      v = m ? 'figcaption' : 'div';
     return (0, c.jsxs)(p, { className: (0, s.Z)(a['nlds-guideline'], a[`nlds-guideline--${t}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(v, { className: (0, s.Z)(a['nlds-guideline__description']), children: ['dont' === t ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.nv, { className: (0, s.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${t}`]), children: [(0, c.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: a['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: a['nlds-guideline__title'], children: h.dont })] }), (0, c.jsx)(r.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.nv, { className: (0, s.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${t}`]), children: [(0, c.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: a['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: a['nlds-guideline__title'], children: h.do })] }), (0, c.jsx)(r.nv, { children: n })] }), i] }), (0, c.jsx)('div', { className: (0, s.Z)(a['nlds-guideline__example']), children: (0, c.jsx)(d.Provider, { value: { title: n, type: h[t] }, children: u }) })] });
    };
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => i, a: () => s });
   var l = t(75271);
   const o = {},
    r = l.createContext(o);
   function s(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), l.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
