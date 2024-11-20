'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94730],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => a });
   var o = l(52676),
    s = l(24785);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
  },
  25275: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => g, contentTitle: () => p, default: () => v, frontMatter: () => m, metadata: () => h, toc: () => b });
   var o = l(52676),
    s = l(24785),
    i = l(98480),
    a = l(91050);
   function t(e) {
    const n = { div: 'div', input: 'input', label: 'label', option: 'option', select: 'select', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(a.X, { appearance: 'do', title: 'Koppel het label aan het formulierveld.', children: (0, o.jsx)(i.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'kleur3', children: 'Wat is je lievelingskleur?' }), (0, o.jsx)(n.input, { type: 'text', id: 'kleur3', name: 'lievelingskleur' })] }) }) }), '\n', (0, o.jsx)(a.X, { appearance: 'do', title: 'Koppel het label aan het formulierveld (select).', children: (0, o.jsx)(i.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { for: 'kleur4', children: 'Wat is je lievelingskleur?' }), (0, o.jsxs)(n.select, { id: 'kleur4', name: 'lievelingskleur', children: [(0, o.jsx)(n.option, { children: 'Rood' }), (0, o.jsx)(n.option, { children: 'Blauw' }), (0, o.jsx)(n.option, { children: 'Wit' })] })] }) }) }), '\n', (0, o.jsx)(a.X, { appearance: 'dont', title: 'Een div in plaats van een label gebruiken.', description: 'De for en id koppeling werkt alleen met een label-element.', children: (0, o.jsx)(i.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.div, { for: 'kleur5', children: 'Wat is je lievelingskleur?' }), (0, o.jsx)(n.input, { type: 'text', id: 'kleur5', name: 'lievelingskleur' })] }) }) }), '\n', (0, o.jsx)(a.X, { appearance: 'dont', title: 'Een label zonder gekoppelde input. Door het label-element te gebruiken zonder for mis je de koppeling tussen het label en de input voor mensen die de visuele context niet waarnemen.', children: (0, o.jsx)(i.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { children: 'Wat is je lievelingskleur?' }), (0, o.jsxs)(n.select, { name: 'lievelingskleur', children: [(0, o.jsx)(n.option, { children: 'Rood' }), (0, o.jsx)(n.option, { children: 'Blauw' }), (0, o.jsx)(n.option, { children: 'Wit' })] })] }) }) })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'geef-een-formulierveld-een-toegankelijke-naam-met-een-label', children: 'Geef een formulierveld een toegankelijke naam met een label' }), '\n', (0, o.jsxs)(n.p, { children: ['Elk formulierveld heeft een label nodig dat gekoppeld is aan het formulierveld met een ', (0, o.jsx)(n.code, { children: 'for' }), '/', (0, o.jsx)(n.code, { children: 'id' }), ' relatie. De labeltekst wordt dan de zogenaamde "toegankelijke naam" van het formulierveld.'] }), '\n', (0, o.jsx)(n.p, { children: 'Waarom is dit belangrijk?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Screenreader (schermlezer) gebruikers krijgen die naam voorgelezen als het veld toetsenbordfocus krijgt.' }), '\n', (0, o.jsx)(n.li, { children: 'Voice recognition (stembediening) gebruikers kunnen het veld focus geven door die naam uit te spreken.' }), '\n', (0, o.jsx)(n.li, { children: 'Muis- en touchscreen gebruikers kunnen het label aanklikken om het formulierveld focus te geven.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Is er meer uitleg nodig? Gebruik dan een beschrijving (description).' }), '\n', (0, o.jsx)(n.h2, { id: 'de-forid-relatie', children: 'De for/id relatie' }), '\n', (0, o.jsx)(n.p, { children: 'Opzet in de HTML:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Geef het formulierveld een ID.' }), '\n', (0, o.jsxs)(n.li, { children: ['Geef het label het attribute ', (0, o.jsx)(n.code, { children: 'for' }), ' met als waarde de ID van het bijbehorende formulierveld.'] }), '\n'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<label for="kleur1">Wat is je lievelingskleur</label>\n<input type="text" id="kleur1" name="lievelingskleur" />\n' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Let op: De gebruikte ', (0, o.jsx)(n.strong, { children: "ID's" }), ' moeten uniek zijn voor de pagina, anders worden de verkeerde namen bij de velden voorgelezen.'] }), '\n', (0, o.jsx)(n.p, { children: 'Een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt.' }), '\n', (0, o.jsxs)(n.p, { children: ['Doen: Gekoppeld label met ', (0, o.jsx)(n.code, { children: 'for' }), ' en ', (0, o.jsx)(n.code, { children: 'id' }), '. Het ', (0, o.jsx)(n.code, { children: '<label>' }), '-element heeft een ', (0, o.jsx)(n.code, { children: 'for' }), ' attribuut (of ', (0, o.jsx)(n.code, { children: 'htmlFor' }), ' in React) dat verwijst naar het ', (0, o.jsx)(n.code, { children: 'id' }), ' van het bijbehorende formulierveld.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Zo werkt dit bijvoorbeeld met een ', (0, o.jsx)(n.code, { children: '<select>' }), ':'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<label for="kleur2">Wat is je lievelingskleur?</label>\n<select id="kleur2" name="lievelingskleur">\n  <option>Rood</option>\n  <option>Blauw</option>\n  <option>Wit</option>\n</select>\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Het geven van een goede toegankelijke naam aan formuliervelden is nodig om te voldoen aan de WCAG-succescriteria:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.3.1', children: '1.3.1 Info en relaties' }), ' (niveau A).'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/2.4.6', children: '2.4.6 Koppen en labels' }), ' (niveau AA).'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/3.3.2', children: '3.3.2 Labels of instructies' }), ' (niveau A).'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/4.1.2', children: '4.1.2 Naam, rol, waarde' }), ' (niveau A).'] }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   var u = l(55400);
   const m = { title: 'Geef een formulierveld een toegankelijke naam met een label \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam label', pagination_label: 'Toegankelijke naam label', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    h = { id: 'richtlijnen/formulieren/label/accessible-name/README', title: 'Geef een formulierveld een toegankelijke naam met een label \xb7 Labels in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', source: '@site/docs/richtlijnen/formulieren/label/1-accessible-name/README.mdx', sourceDirName: 'richtlijnen/formulieren/label/1-accessible-name', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', permalink: '/richtlijnen/formulieren/labels/toegankelijke-naam', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/1-accessible-name/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef een formulierveld een toegankelijke naam met een label \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam label', pagination_label: 'Toegankelijke naam label', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Labels in een formulier', permalink: '/richtlijnen/formulieren/labels/' }, next: { title: 'Zichtbare naam label', permalink: '/richtlijnen/formulieren/labels/zichtbare-naam' } },
    g = {},
    b = [];
   function j(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(r, {}), '\n', (0, o.jsx)(u.ZP, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(j, { ...e }) }) : j();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => v });
   var o = l(46506),
    s = l(4814),
    i = l(25585),
    a = l(40282),
    t = l(40678),
    r = l(85722),
    c = l(6374),
    d = l(75271),
    u = l(60027);
   const m = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var p = l(41179),
    h = l(52676);
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: m['nlds-canvas__example-surface'], children: (0, h.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: (0, h.jsx)(o.nv, { className: m['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   g.displayName = 'ParagraphContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: m['nlds-canvas__example-surface'], children: (0, h.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', m['nlds-canvas__example-document']), children: n }) });
   };
   b.displayName = 'DocumentContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(o.Tg, { className: m['nlds-canvas__example-surface'], children: n });
   };
   j.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: v = !1, displayCode: x = !0, children: k, container: _ = 'document', language: f, designTokens: y } = e,
     w = 'function' == typeof k ? k() : k,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(N || w),
     [C, z] = (0, d.useState)(Z),
     [D, S] = (0, d.useState)(v);
    (0, d.useEffect)(() => {
     (async () => {
      (C = await c.ZP.format(Z, { parser: f, plugins: [i.Z, a.ZP, t.ZP, r.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), z(C);
     })();
    }, [Z]);
    const E = (0, d.useId)();
    let R = d.Fragment;
    return (
     'paragraph' === _ ? (R = g) : 'document' === _ ? (R = b) : 'surface' === _ && (R = j),
     (0, h.jsxs)('div', {
      className: (0, s.Z)(m['nlds-canvas']),
      children: [
       w && (0, h.jsx)('div', { className: (0, s.Z)(m['nlds-canvas__example']), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, h.jsx)(R, { children: (0, h.jsx)(o.pu, { children: w }) }) }) }),
       x &&
        (0, h.jsx)('div', {
         className: (0, s.Z)(m['nlds-canvas__toolbar']),
         children: (0, h.jsx)(o.zx, {
          className: (0, s.Z)(m['nlds-canvas__button'], m['nlds-canvas__toggle-code-button']),
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
         className: (0, s.Z)(m['nlds-canvas__code-block'], !l && m['nlds-canvas__code-block--user-select-none']),
         id: E,
         hidden: !D,
         children: [
          (0, h.jsx)(p.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: C, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, s.Z)(m['nlds-canvas__toolbar'], m['nlds-canvas__toolbar--copy']),
            children: (0, h.jsx)(o.zx, {
             className: (0, s.Z)(m['nlds-canvas__button'], m['nlds-canvas__copy-button']),
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
   l.d(n, { u: () => c });
   var o = l(46506),
    s = l(70739),
    i = l(75271),
    a = l(91050);
   const t = {
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
   var r = l(52676);
   function c(e) {
    let { lineNumber: n, syntax: l, textContent: c, trim: d } = e,
     u = c;
    const { title: m, type: p } = (0, i.useContext)(a.n),
     h = (0, i.useId)();
    return (
     d && (u = u.trim()),
     (0, r.jsx)(s.y$, {
      theme: t,
      code: u,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: s, getLineProps: i, getTokenProps: a } = e;
       return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, r.jsx)(o.dn, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: l, children: s.map((e, l) => (0, r.jsxs)('span', { ...i({ line: e }), children: [n && (0, r.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, r.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { n: () => d, X: () => u });
   var o = l(77355),
    s = l(67663),
    i = l(46506),
    a = l(4814),
    t = l(75271);
   const r = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var c = l(52676);
   const d = (0, t.createContext)({}),
    u = (e) => {
     let { title: n, appearance: l, description: t, children: u, figure: m } = e;
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = m ? 'figure' : 'div',
      g = m ? 'figcaption' : 'div';
     return (0, c.jsxs)(h, { className: (0, a.Z)(r['nlds-guideline'], r[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(g, { className: (0, a.Z)(r['nlds-guideline__description']), children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.nv, { className: (0, a.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: r['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: r['nlds-guideline__title'], children: p.dont })] }), (0, c.jsx)(i.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.nv, { className: (0, a.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: r['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: r['nlds-guideline__title'], children: p.do })] }), (0, c.jsx)(i.nv, { children: n })] }), t] }), (0, c.jsx)('div', { className: (0, a.Z)(r['nlds-guideline__example']), children: (0, c.jsx)(d.Provider, { value: { title: n, type: p[l] }, children: u }) })] });
    };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => t, a: () => a });
   var o = l(75271);
   const s = {},
    i = o.createContext(s);
   function a(e) {
    const n = o.useContext(i);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function t(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), o.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
