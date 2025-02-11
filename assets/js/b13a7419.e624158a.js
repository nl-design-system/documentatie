'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94730],
 {
  49824: (e, n, l) => {
   l.d(n, { ZP: () => i });
   var o = l(52676),
    r = l(87118);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  13111: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => j, contentTitle: () => m, default: () => v, frontMatter: () => h, metadata: () => p, toc: () => b });
   var o = l(52676),
    r = l(87118),
    t = l(49824),
    i = l(43599),
    s = l(40761);
   function a(e) {
    const n = { div: 'div', h2: 'h2', input: 'input', label: 'label', option: 'option', select: 'select', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(s.X, { appearance: 'do', title: 'Koppel het label aan het formulierveld.', children: (0, o.jsx)(i.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { htmlFor: 'kleur3', children: 'Wat is je lievelingskleur?' }), (0, o.jsx)(n.input, { type: 'text', id: 'kleur3', name: 'lievelingskleur' })] }) }) }), '\n', (0, o.jsx)(s.X, { appearance: 'do', title: 'Koppel het label aan het formulierveld (select).', children: (0, o.jsx)(i.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { htmlFor: 'kleur4', children: 'Wat is je lievelingskleur?' }), (0, o.jsxs)(n.select, { id: 'kleur4', name: 'lievelingskleur', children: [(0, o.jsx)(n.option, { children: 'Rood' }), (0, o.jsx)(n.option, { children: 'Blauw' }), (0, o.jsx)(n.option, { children: 'Wit' })] })] }) }) }), '\n', (0, o.jsx)(s.X, { appearance: 'dont', title: 'Een div in plaats van een label gebruiken.', description: 'De for en id koppeling werkt alleen met een label-element.', children: (0, o.jsx)(i.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.div, { htmlFor: 'kleur5', children: 'Wat is je lievelingskleur?' }), (0, o.jsx)(n.input, { type: 'text', id: 'kleur5', name: 'lievelingskleur' })] }) }) }), '\n', (0, o.jsx)(s.X, { appearance: 'dont', title: 'Een label zonder gekoppelde input. Door het label-element te gebruiken zonder for mis je de koppeling tussen het label en de input voor mensen die de visuele context niet waarnemen.', children: (0, o.jsx)(i.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { children: 'Wat is je lievelingskleur?' }), (0, o.jsxs)(n.select, { name: 'lievelingskleur', children: [(0, o.jsx)(n.option, { children: 'Rood' }), (0, o.jsx)(n.option, { children: 'Blauw' }), (0, o.jsx)(n.option, { children: 'Wit' })] })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'geef-een-formulierveld-een-toegankelijke-naam-met-een-label', children: 'Geef een formulierveld een toegankelijke naam met een label' }), '\n', (0, o.jsxs)(n.p, { children: ['Elk formulierveld heeft een label nodig dat gekoppeld is aan het formulierveld met een ', (0, o.jsx)(n.code, { children: 'for' }), '/', (0, o.jsx)(n.code, { children: 'id' }), ' relatie. De labeltekst wordt dan de zogenaamde "toegankelijke naam" van het formulierveld.'] }), '\n', (0, o.jsx)(n.p, { children: 'Waarom is dit belangrijk?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Screenreader (schermlezer) gebruikers krijgen die naam voorgelezen als het veld toetsenbordfocus krijgt.' }), '\n', (0, o.jsx)(n.li, { children: 'Voice recognition (stembediening) gebruikers kunnen het veld focus geven door die naam uit te spreken.' }), '\n', (0, o.jsx)(n.li, { children: 'Muis- en touchscreen gebruikers kunnen het label aanklikken om het formulierveld focus te geven.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Is er meer uitleg nodig? Gebruik dan een beschrijving (description).' }), '\n', (0, o.jsx)(n.h2, { id: 'de-forid-relatie', children: 'De for/id relatie' }), '\n', (0, o.jsx)(n.p, { children: 'Opzet in de HTML:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Geef het formulierveld een ID.' }), '\n', (0, o.jsxs)(n.li, { children: ['Geef het label het attribute ', (0, o.jsx)(n.code, { children: 'for' }), ' met als waarde de ID van het bijbehorende formulierveld.'] }), '\n'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<label for="kleur1">Wat is je lievelingskleur</label>\n<input type="text" id="kleur1" name="lievelingskleur" />\n' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Let op: De gebruikte ', (0, o.jsx)(n.strong, { children: "ID's" }), ' moeten uniek zijn voor de pagina, anders worden de verkeerde namen bij de velden voorgelezen.'] }), '\n', (0, o.jsx)(n.p, { children: 'Een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt.' }), '\n', (0, o.jsxs)(n.p, { children: ['Doen: Gekoppeld label met ', (0, o.jsx)(n.code, { children: 'for' }), ' en ', (0, o.jsx)(n.code, { children: 'id' }), '. Het ', (0, o.jsx)(n.code, { children: '<label>' }), '-element heeft een ', (0, o.jsx)(n.code, { children: 'for' }), ' attribuut (of ', (0, o.jsx)(n.code, { children: 'htmlFor' }), ' in React) dat verwijst naar het ', (0, o.jsx)(n.code, { children: 'id' }), ' van het bijbehorende formulierveld.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Zo werkt dit bijvoorbeeld met een ', (0, o.jsx)(n.code, { children: '<select>' }), ':'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<label for="kleur2">Wat is je lievelingskleur?</label>\n<select id="kleur2" name="lievelingskleur">\n  <option>Rood</option>\n  <option>Blauw</option>\n  <option>Wit</option>\n</select>\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Het geven van een goede toegankelijke naam aan formuliervelden is nodig om te voldoen aan de WCAG-succescriteria:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.3.1', children: '1.3.1 Info en relaties' }), ' (niveau A).'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/2.4.6', children: '2.4.6 Koppen en labels' }), ' (niveau AA).'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/3.3.2', children: '3.3.2 Labels of instructies' }), ' (niveau A).'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/4.1.2', children: '4.1.2 Naam, rol, waarde' }), ' (niveau A).'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   const h = { title: 'Geef een formulierveld een toegankelijke naam met een label \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam label', pagination_label: 'Toegankelijke naam label', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    p = { id: 'richtlijnen/formulieren/label/accessible-name/README', title: 'Geef een formulierveld een toegankelijke naam met een label \xb7 Labels in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', source: '@site/docs/richtlijnen/formulieren/label/1-accessible-name/README.mdx', sourceDirName: 'richtlijnen/formulieren/label/1-accessible-name', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', permalink: '/richtlijnen/formulieren/labels/toegankelijke-naam', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/1-accessible-name/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef een formulierveld een toegankelijke naam met een label \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam label', pagination_label: 'Toegankelijke naam label', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Labels in een formulier', permalink: '/richtlijnen/formulieren/labels/' }, next: { title: 'Zichtbare naam label', permalink: '/richtlijnen/formulieren/labels/zichtbare-naam' } },
    j = {},
    b = [];
   function g(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(t.ZP, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g();
   }
  },
  43599: (e, n, l) => {
   l.d(n, { X: () => g });
   var o = l(41179),
    r = l(31916),
    t = l(4814),
    i = l(25585),
    s = l(40282),
    a = l(40678),
    c = l(85722),
    d = l(6374),
    u = l(75271),
    h = l(60027),
    m = l(52676);
   const p = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(r.BB, { className: (0, t.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(r.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   p.displayName = 'ParagraphContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(r.BB, { className: (0, t.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   j.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   b.displayName = 'SurfaceContainer';
   const g = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: g = !1, displayCode: v = !0, children: x, container: k = 'document', language: f, designTokens: y } = e;
    const _ = 'function' == typeof x ? x() : x,
     w = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : h.uS(w || _),
     [Z, C] = (0, u.useState)(N),
     [z, D] = (0, u.useState)(g);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: f, plugins: [i.Z, s.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [N]);
    const F = (0, u.useId)();
    let S = u.Fragment;
    return (
     'paragraph' === k ? (S = p) : 'document' === k ? (S = j) : 'surface' === k && (S = b),
     (0, m.jsxs)('div', {
      className: (0, t.Z)('nlds-canvas'),
      children: [
       _ && (0, m.jsx)('div', { className: (0, t.Z)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, m.jsx)(S, { children: (0, m.jsx)(r.pu, { children: _ }) }) }) }),
       v &&
        (0, m.jsx)('div', {
         className: (0, t.Z)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(r.zx, {
          className: (0, t.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           D(!z);
          },
          'aria-expanded': z,
          'aria-controls': F,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       v &&
        (0, m.jsxs)('div', {
         className: (0, t.Z)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
         id: F,
         hidden: !z,
         children: [
          (0, m.jsx)(o.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: Z, trim: !0 }),
          l &&
           (0, m.jsx)('div', {
            className: (0, t.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(r.zx, {
             className: (0, t.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   l.d(n, { u: () => c });
   var o = l(31916),
    r = l(70739),
    t = l(75271),
    i = l(40761);
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
   function c(e) {
    let { lineNumber: n, syntax: l, textContent: c, trim: d } = e,
     u = c;
    const { title: h, type: m } = (0, t.useContext)(i.n),
     p = (0, t.useId)();
    return (
     d && (u = u.trim()),
     (0, a.jsx)(r.y$, {
      theme: s,
      code: u,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: r, getLineProps: t, getTokenProps: i } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(o.dn, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: l, children: r.map((e, l) => (0, a.jsxs)('span', { ...t({ line: e }), children: [n && (0, a.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, l) => {
   l.d(n, { X: () => d, n: () => c });
   var o = l(77355),
    r = l(67663),
    t = l(31916),
    i = l(4814),
    s = l(75271),
    a = l(52676);
   const c = (0, s.createContext)({}),
    d = (e) => {
     let { title: n, appearance: l, description: s, children: d, figure: u } = e;
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div';
     return (0, a.jsxs)(m, { className: (0, i.Z)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, i.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, a.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(t.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, i.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, a.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(t.nv, { children: n })] }), s] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: h[l] }, children: d }) })] });
    };
  },
  87118: (e, n, l) => {
   l.d(n, { Z: () => s, a: () => i });
   var o = l(75271);
   const r = {},
    t = o.createContext(r);
   function i(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : i(e.components)), o.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
