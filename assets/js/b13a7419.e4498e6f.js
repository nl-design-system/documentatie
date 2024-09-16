'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94730],
 {
  23680: (e, n, l) => {
   l.d(n, { ZP: () => t });
   var s = l(52676),
    o = l(24785);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i(e);
   }
  },
  25275: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => g, contentTitle: () => p, default: () => v, frontMatter: () => m, metadata: () => h, toc: () => j });
   var s = l(52676),
    o = l(24785),
    i = l(98480),
    t = l(91050);
   function a(e) {
    const n = { div: 'div', input: 'input', label: 'label', option: 'option', select: 'select', ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(t.X, { appearance: 'do', title: 'Koppel het label aan het formulierveld.', children: (0, s.jsx)(i.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.label, { for: 'kleur3', children: 'Wat is je lievelingskleur?' }), (0, s.jsx)(n.input, { type: 'text', id: 'kleur3', name: 'lievelingskleur' })] }) }) }), '\n', (0, s.jsx)(t.X, { appearance: 'do', title: 'Koppel het label aan het formulierveld (select).', children: (0, s.jsx)(i.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.label, { for: 'kleur4', children: 'Wat is je lievelingskleur?' }), (0, s.jsxs)(n.select, { id: 'kleur4', name: 'lievelingskleur', children: [(0, s.jsx)(n.option, { children: 'Rood' }), (0, s.jsx)(n.option, { children: 'Blauw' }), (0, s.jsx)(n.option, { children: 'Wit' })] })] }) }) }), '\n', (0, s.jsx)(t.X, { appearance: 'dont', title: 'Een div in plaats van een label gebruiken.', description: 'De for en id koppeling werkt alleen met een label-element.', children: (0, s.jsx)(i.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.div, { for: 'kleur5', children: 'Wat is je lievelingskleur?' }), (0, s.jsx)(n.input, { type: 'text', id: 'kleur5', name: 'lievelingskleur' })] }) }) }), '\n', (0, s.jsx)(t.X, { appearance: 'dont', title: 'Een label zonder gekoppelde input. Door het label-element te gebruiken zonder for mis je de koppeling tussen het label en de input voor mensen die de visuele context niet waarnemen.', children: (0, s.jsx)(i.X, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.label, { children: 'Wat is je lievelingskleur?' }), (0, s.jsxs)(n.select, { name: 'lievelingskleur', children: [(0, s.jsx)(n.option, { children: 'Rood' }), (0, s.jsx)(n.option, { children: 'Blauw' }), (0, s.jsx)(n.option, { children: 'Wit' })] })] }) }) })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'geef-een-formulierveld-een-toegankelijke-naam-met-een-label', children: 'Geef een formulierveld een toegankelijke naam met een label' }), '\n', (0, s.jsxs)(n.p, { children: ['Elk formulierveld heeft een label nodig dat gekoppeld is aan het formulierveld met een ', (0, s.jsx)(n.code, { children: 'for' }), '/', (0, s.jsx)(n.code, { children: 'id' }), ' relatie. De labeltekst wordt dan de zogenaamde "toegankelijke naam" van het formulierveld.'] }), '\n', (0, s.jsx)(n.p, { children: 'Waarom is dit belangrijk?' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Screenreader (schermlezer) gebruikers krijgen die naam voorgelezen als het veld toetsenbordfocus krijgt.' }), '\n', (0, s.jsx)(n.li, { children: 'Voice recognition (stembediening) gebruikers kunnen het veld focus geven door die naam uit te spreken.' }), '\n', (0, s.jsx)(n.li, { children: 'Muis- en touchscreen gebruikers kunnen het label aanklikken om het formulierveld focus te geven.' }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Is er meer uitleg nodig? Gebruik dan een beschrijving (description).' }), '\n', (0, s.jsx)(n.h2, { id: 'de-forid-relatie', children: 'De for/id relatie' }), '\n', (0, s.jsx)(n.p, { children: 'Opzet in de HTML:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Geef het formulierveld een ID.' }), '\n', (0, s.jsxs)(n.li, { children: ['Geef het label het attribute ', (0, s.jsx)(n.code, { children: 'for' }), ' met als waarde de ID van het bijbehorende formulierveld.'] }), '\n'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<label for="kleur1">Wat is je lievelingskleur</label>\n<input type="text" id="kleur1" name="lievelingskleur" />\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Let op: De gebruikte ', (0, s.jsx)(n.strong, { children: "ID's" }), ' moeten uniek zijn voor de pagina, anders worden de verkeerde namen bij de velden voorgelezen.'] }), '\n', (0, s.jsx)(n.p, { children: 'Een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt.' }), '\n', (0, s.jsxs)(n.p, { children: ['Doen: Gekoppeld label met ', (0, s.jsx)(n.code, { children: 'for' }), ' en ', (0, s.jsx)(n.code, { children: 'id' }), '. Het ', (0, s.jsx)(n.code, { children: '<label>' }), '-element heeft een ', (0, s.jsx)(n.code, { children: 'for' }), ' attribuut (of ', (0, s.jsx)(n.code, { children: 'htmlFor' }), ' in React) dat verwijst naar het ', (0, s.jsx)(n.code, { children: 'id' }), ' van het bijbehorende formulierveld.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Zo werkt dit bijvoorbeeld met een ', (0, s.jsx)(n.code, { children: '<select>' }), ':'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<label for="kleur2">Wat is je lievelingskleur?</label>\n<select id="kleur2" name="lievelingskleur">\n  <option>Rood</option>\n  <option>Blauw</option>\n  <option>Wit</option>\n</select>\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Het geven van een goede toegankelijke naam aan formuliervelden is nodig om te voldoen aan de WCAG-succescriteria:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: '/wcag/1.3.1', children: '1.3.1 Info en relaties' }), ' (niveau A).'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: '/wcag/2.4.6', children: '2.4.6 Koppen en labels' }), ' (niveau AA).'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: '/wcag/3.3.2', children: '3.3.2 Labels of instructies' }), ' (niveau A).'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: '/wcag/4.1.2', children: '4.1.2 Naam, rol, waarde' }), ' (niveau A).'] }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   var u = l(23680);
   const m = { title: 'Geef een formulierveld een toegankelijke naam met een label | Labels in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam label', pagination_label: 'Toegankelijke naam label', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    h = { id: 'richtlijnen/formulieren/label/accessible-name/README', title: 'Geef een formulierveld een toegankelijke naam met een label | Labels in een formulier | Richtlijnen', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', source: '@site/docs/richtlijnen/formulieren/label/1-accessible-name/README.mdx', sourceDirName: 'richtlijnen/formulieren/label/1-accessible-name', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', permalink: '/richtlijnen/formulieren/labels/toegankelijke-naam', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/1-accessible-name/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef een formulierveld een toegankelijke naam met een label | Labels in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam label', pagination_label: 'Toegankelijke naam label', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Labels in een formulier', permalink: '/richtlijnen/formulieren/labels/' }, next: { title: 'Zichtbare naam label', permalink: '/richtlijnen/formulieren/labels/zichtbare-naam' } },
    g = {},
    j = [];
   function b(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(r, {}), '\n', (0, s.jsx)(u.ZP, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => v });
   var s = l(46506),
    o = l(4814),
    i = l(25585),
    t = l(40282),
    a = l(40678),
    r = l(85722),
    c = l(6374),
    d = l(75271),
    u = l(60027);
   const m = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var p = l(41179),
    h = l(52676);
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(s.Tg, { className: m['nlds-canvas__example-surface'], children: (0, h.jsx)(s.BB, { className: (0, o.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: (0, h.jsx)(s.nv, { className: m['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   g.displayName = 'ParagraphContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(s.Tg, { className: m['nlds-canvas__example-surface'], children: (0, h.jsx)(s.BB, { className: (0, o.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: n }) });
   };
   j.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(s.Tg, { className: m['nlds-canvas__example-surface'], children: n });
   };
   b.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: v = !1, displayCode: x = !0, children: k, container: _ = 'document', language: f, designTokens: y } = e,
     w = 'function' == typeof k ? k() : k,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [z, C] = (0, d.useState)(Z),
     [D, S] = (0, d.useState)(v);
    (0, d.useEffect)(() => {
     (async () => {
      (z = await c.ZP.format(Z, { parser: f, plugins: [i.Z, t.ZP, a.ZP, r.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(z);
     })();
    }, [Z]);
    const E = (0, d.useId)();
    let R = d.Fragment;
    return (
     'paragraph' === _ ? (R = g) : 'document' === _ ? (R = j) : 'surface' === _ && (R = b),
     (0, h.jsxs)('div', {
      className: (0, o.Z)(m['nlds-canvas']),
      children: [
       w && (0, h.jsx)('div', { className: (0, o.Z)(m['nlds-canvas__example']), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, h.jsx)(R, { children: (0, h.jsx)(s.pu, { children: w }) }) }) }),
       x &&
        (0, h.jsx)('div', {
         className: (0, o.Z)(m['nlds-canvas__toolbar']),
         children: (0, h.jsx)(s.zx, {
          className: (0, o.Z)(m['nlds-canvas__button'], m['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           S(!D);
          },
          'aria-expanded': D,
          'aria-controls': E,
          children: D ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       x &&
        (0, h.jsxs)('div', {
         className: (0, o.Z)(m['nlds-canvas__code-block'], !l && m['nlds-canvas__code-block--user-select-none']),
         id: E,
         hidden: !D,
         children: [
          (0, h.jsx)(p.u, { syntax: f, textContent: z, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, o.Z)(m['nlds-canvas__toolbar'], m['nlds-canvas__toolbar--copy']),
            children: (0, h.jsx)(s.zx, {
             className: (0, o.Z)(m['nlds-canvas__button'], m['nlds-canvas__copy-button']),
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
   l.d(n, { u: () => a });
   var s = l(46506),
    o = l(70739);
   l(75271);
   const i = {
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
   var t = l(52676);
   function a(e) {
    let { lineNumber: n, syntax: l, textContent: a, trim: r } = e,
     c = a;
    return (
     r && (c = c.trim()),
     (0, t.jsx)(o.y$, {
      theme: i,
      code: c,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: o, getLineProps: i, getTokenProps: a } = e;
       return (0, t.jsx)(s.dn, { style: l, children: o.map((e, l) => (0, t.jsxs)('span', { ...i({ line: e }), children: [n && (0, t.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, t.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => c });
   var s = l(77355),
    o = l(67663),
    i = l(46506),
    t = l(4814);
   l(75271);
   const a = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var r = l(52676);
   const c = (e) => {
    let { title: n, appearance: l, description: c, children: d, figure: u } = e;
    const m = 'Doen',
     p = 'Niet doen',
     h = u ? 'figure' : 'div',
     g = u ? 'figcaption' : 'div';
    return (0, r.jsxs)(h, { className: (0, t.Z)(a['nlds-guideline'], a[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, r.jsxs)(g, { className: (0, t.Z)(a['nlds-guideline__description']), children: ['dont' === l ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(i.nv, { className: (0, t.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, r.jsx)(s.Z, { className: a['nlds-guideline__icon'] }), (0, r.jsx)('span', { className: a['nlds-guideline__title'], children: p })] }), (0, r.jsx)(i.nv, { children: n })] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(i.nv, { className: (0, t.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${l}`]), children: [(0, r.jsx)(o.Z, { className: a['nlds-guideline__icon'] }), (0, r.jsx)('span', { className: a['nlds-guideline__title'], children: m })] }), (0, r.jsx)(i.nv, { children: n })] }), c] }), (0, r.jsx)('div', { className: (0, t.Z)(a['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => a, a: () => t });
   var s = l(75271);
   const o = {},
    i = s.createContext(o);
   function t(e) {
    const n = s.useContext(i);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), s.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
