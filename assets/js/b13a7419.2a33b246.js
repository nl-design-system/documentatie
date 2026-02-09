'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [5011],
 {
  15638(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var r = l(4077),
    o = l(58315),
    s = l(46447),
    t = l(13526),
    i = l(30758),
    a = l(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: i, figure: d }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div';
     return (0, a.jsxs)(h, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(s.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(s.fz, { children: e })] }), l] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => i });
   var r = l(30758);
   const o = {},
    s = r.createContext(o);
   function t(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  50226(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => b, default: () => k, frontMatter: () => j, metadata: () => r, toc: () => v }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/label/accessible-name/README","title":"Geef een formulierveld een toegankelijke naam met een label \xb7 Labels in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor toegankelijke naam van formuliervelden.","source":"@site/docs/richtlijnen/formulieren/label/1-accessible-name/README.mdx","sourceDirName":"richtlijnen/formulieren/label/1-accessible-name","slug":"/richtlijnen/formulieren/labels/toegankelijke-naam","permalink":"/richtlijnen/formulieren/labels/toegankelijke-naam","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/1-accessible-name/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef een formulierveld een toegankelijke naam met een label \xb7 Labels in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toegankelijke naam label","pagination_label":"Toegankelijke naam label","description":"Richtlijnen voor toegankelijke naam van formuliervelden.","slug":"/richtlijnen/formulieren/labels/toegankelijke-naam","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Labels in een formulier","permalink":"/richtlijnen/formulieren/labels/"},"next":{"title":"Zichtbare naam label","permalink":"/richtlijnen/formulieren/labels/zichtbare-naam"}}');
   var o = l(86070),
    s = l(18439),
    t = l(78734),
    i = l(58639),
    a = l(15638);
   function c(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Koppel het label aan het formulierveld.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('label', { htmlFor: 'kleur3', children: 'Wat is je lievelingskleur?' }), (0, o.jsx)('input', { type: 'text', id: 'kleur3', name: 'lievelingskleur' })] }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'Koppel het label aan het formulierveld (select).', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('label', { htmlFor: 'kleur4', children: 'Wat is je lievelingskleur?' }), (0, o.jsxs)('select', { id: 'kleur4', name: 'lievelingskleur', children: [(0, o.jsx)('option', { children: 'Rood' }), (0, o.jsx)('option', { children: 'Blauw' }), (0, o.jsx)('option', { children: 'Wit' })] })] }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'dont', title: 'Een div in plaats van een label gebruiken.', description: 'De for en id koppeling werkt alleen met een label-element.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('div', { htmlFor: 'kleur5', children: 'Wat is je lievelingskleur?' }), (0, o.jsx)('input', { type: 'text', id: 'kleur5', name: 'lievelingskleur' })] }) }) }), '\n', (0, o.jsx)(a.$, { appearance: 'dont', title: 'Een label zonder gekoppelde input. Door het label-element te gebruiken zonder for mis je de koppeling tussen het label en de input voor mensen die de visuele context niet waarnemen.', children: (0, o.jsx)(i.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('label', { children: 'Wat is je lievelingskleur?' }), (0, o.jsxs)('select', { name: 'lievelingskleur', children: [(0, o.jsx)('option', { children: 'Rood' }), (0, o.jsx)('option', { children: 'Blauw' }), (0, o.jsx)('option', { children: 'Wit' })] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'geef-een-formulierveld-een-toegankelijke-naam-met-een-label', children: 'Geef een formulierveld een toegankelijke naam met een label' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Elk formulierveld heeft een label nodig dat gekoppeld is aan het formulierveld met een ', (0, o.jsx)(n.code, { children: 'for' }), '/', (0, o.jsx)(n.code, { children: 'id' }), ' relatie. De labeltekst wordt dan de zogenaamde "toegankelijke naam" van het formulierveld.'] }), '\n', (0, o.jsx)(n.p, { children: 'Waarom is dit belangrijk?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Gebruikers van ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' krijgen die naam voorgelezen als het veld toetsenbordfocus krijgt.'] }), '\n', (0, o.jsx)(n.li, { children: 'Voice recognition (stembediening) gebruikers kunnen het veld focus geven door die naam uit te spreken.' }), '\n', (0, o.jsx)(n.li, { children: 'Muis- en touchscreen gebruikers kunnen het label aanklikken om het formulierveld focus te geven.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Is er meer uitleg nodig? Gebruik dan een beschrijving (description).' }), '\n', (0, o.jsx)(n.h2, { id: 'de-forid-relatie', children: 'De for/id relatie' }), '\n', (0, o.jsx)(n.p, { children: 'Opzet in de HTML:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Geef het formulierveld een ID.' }), '\n', (0, o.jsxs)(n.li, { children: ['Geef het label het attribute ', (0, o.jsx)(n.code, { children: 'for' }), ' met als waarde de ID van het bijbehorende formulierveld.'] }), '\n'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<label for="kleur1">Wat is je lievelingskleur</label>\n<input type="text" id="kleur1" name="lievelingskleur" />\n' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Let op: De gebruikte ', (0, o.jsx)(n.strong, { children: "ID's" }), ' moeten uniek zijn voor de pagina, anders worden de verkeerde namen bij de velden voorgelezen.'] }), '\n', (0, o.jsx)(n.p, { children: 'Een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt.' }), '\n', (0, o.jsxs)(n.p, { children: ['Doen: Gekoppeld label met ', (0, o.jsx)(n.code, { children: 'for' }), ' en ', (0, o.jsx)(n.code, { children: 'id' }), '. Het ', (0, o.jsx)(n.code, { children: '<label>' }), '-element heeft een ', (0, o.jsx)(n.code, { children: 'for' }), ' attribuut (of ', (0, o.jsx)(n.code, { children: 'htmlFor' }), ' in React) dat verwijst naar het ', (0, o.jsx)(n.code, { children: 'id' }), ' van het bijbehorende formulierveld.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Zo werkt dit bijvoorbeeld met een ', (0, o.jsx)(n.code, { children: '<select>' }), ':'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<label for="kleur2">Wat is je lievelingskleur?</label>\n<select id="kleur2" name="lievelingskleur">\n  <option>Rood</option>\n  <option>Blauw</option>\n  <option>Wit</option>\n</select>\n' }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   const j = { title: 'Geef een formulierveld een toegankelijke naam met een label \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam label', pagination_label: 'Toegankelijke naam label', description: 'Richtlijnen voor toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    g = {},
    v = [{ value: 'De for/id relatie', id: 'de-forid-relatie', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function x(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(t.Ay, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(x, { ...e }) }) : x();
   }
  },
  58639(e, n, l) {
   l.d(n, { H: () => g });
   var r = l(69284),
    o = l(46447),
    s = l(13526),
    t = l(68148),
    i = l(9016),
    a = l(69303),
    c = l(91635),
    d = l(30734),
    u = l(30758),
    h = l(31186),
    m = l(86070);
   const p = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   p.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const g = ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: g = !0, children: v, container: x = 'document', language: k, designTokens: f }) => {
    const y = 'function' == typeof v ? v() : v,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : h.qV(_ || y),
     [N, A] = (0, u.useState)(w),
     [z, R] = (0, u.useState)(l);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: k, plugins: [t.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [w]);
    const C = (0, u.useId)();
    let S = u.Fragment;
    return (
     'paragraph' === x ? (S = p) : 'document' === x ? (S = j) : 'surface' === x && (S = b),
     (0, m.jsxs)('div', {
      className: (0, s.A)('nlds-canvas'),
      children: [
       y && (0, m.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(S, { children: (0, m.jsx)(o.v$, { children: y }) }) }) }),
       g &&
        (0, m.jsx)('div', {
         className: (0, s.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(o.$n, {
          className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           R(!z);
          },
          'aria-expanded': z,
          'aria-controls': C,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, m.jsxs)('div', {
         className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: C,
         hidden: !z,
         children: [
          (0, m.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: N, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(o.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(N).catch((e) => console.error('Copy code failed', e));
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
  69284(e, n, l) {
   l.d(n, { M: () => c });
   var r = l(46447),
    o = l(16194),
    s = l(30758),
    t = l(15638);
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
   var a = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: u, type: h } = (0, s.useContext)(t.x),
     m = (0, s.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(o.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...o({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => s });
   var r = l(86070),
    o = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
 },
]);
