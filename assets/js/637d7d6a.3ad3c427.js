'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [36401],
 {
  9386(e, n, l) {
   l.d(n, { H: () => y });
   var o = l(95822),
    t = l(46447),
    r = l(13526),
    s = l(68148),
    a = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    u = l(30758),
    p = l(31186),
    m = l(65904),
    h = l.n(m),
    v = l(51627),
    b = l(86070);
   const g = ({ children: e }) => (0, b.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, b.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, b.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        o = (0, p.qV)(l)
         .replaceAll(/&quot;/g, '"')
         .replaceAll(/\sclass="[\w-\s]+"/g, '')
         .replaceAll(/\sid="[\w-\s]+"/g, '')
         .replace('<astro-static-slot>', '')
         .replace('</astro-static-slot>', '')
         .replaceAll(/{"\s"}/g, '')
         .replaceAll(/\n{2,}/g, '\n')
         .replaceAll(/^\s\s/gm, '')
         .replaceAll(/\salt\s/g, ' alt="" ')
         .replaceAll(' loading="lazy"', ' '),
        t = h().highlight(o, h().languages[n], n);
       return (0, b.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }), (0, b.jsx)(v.n, { children: (0, b.jsx)(v.K, { label: 'Code', children: (0, b.jsx)('pre', { className: 'language-html nl-code-block', children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: h, container: v = 'document', language: y, designTokens: f }) => {
       const k = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : p.qV(_ || k),
        [A, N] = (0, u.useState)(w),
        [z, C] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: y, plugins: [s.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let R = u.Fragment;
       return (
        'paragraph' === v ? (R = g) : 'document' === v ? (R = j) : 'surface' === v && (R = x),
        (0, b.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          k && (0, b.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, b.jsx)(R, { children: (0, b.jsx)(t.v$, { children: k }) }) }) }),
          m &&
           (0, b.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(t.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, b.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, b.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: A, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(t.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(A).catch((e) => console.error('Copy code failed', e));
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
  18439(e, n, l) {
   l.d(n, { R: () => s, x: () => a });
   var o = l(30758);
   const t = {},
    r = o.createContext(t);
   function s(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), o.createElement(r.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => c, n: () => a });
   var o = l(13526),
    t = l(96345),
    r = l(37168),
    s = l(86070);
   const a = ({ className: e, ...n }) => {
     const l = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, s.jsx)('div', { className: l, children: n.children });
    },
    c = ({ className: e, label: n, heading: l, headingLevel: a, headingApperance: c, ...i }) => {
     const d = (0, o.A)('utrecht-accordion__section', e);
     return (0, s.jsxs)('details', { className: d, ...i, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(t.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [l && (0, s.jsx)(r.D, { level: a, appearance: c, children: l }), n] })] }) }), (0, s.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => r });
   var o = l(86070),
    t = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var o = l(4077),
    t = l(58315),
    r = l(46447),
    s = l(13526),
    a = l(45980),
    c = l(30758),
    i = l(86070);
   const d = (0, c.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: c, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      v = 'string' == typeof l ? (0, i.jsx)(a.oz, { children: l }) : l;
     return (0, i.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(r.fz, { children: e })] }), v] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: c }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => i });
   var o = l(46447),
    t = l(16194),
    r = l(30758),
    s = l(88022);
   const a = {
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
   var c = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: u, type: p } = (0, r.useContext)(s.x),
     m = (0, r.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: r }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(o.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...t({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  97521(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => b, default: () => y, frontMatter: () => v, metadata: () => o, toc: () => j }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/help/autocomplete/index","title":"Autocomplete in een formulier","description":"Richtlijnen voor het gebruik van het autocomplete-attribuut.","source":"@site/docs/richtlijnen/formulieren/help/5-autocomplete/index.mdx","sourceDirName":"richtlijnen/formulieren/help/5-autocomplete","slug":"/richtlijnen/formulieren/voorkom-fouten/autocomplete","permalink":"/richtlijnen/formulieren/voorkom-fouten/autocomplete","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/5-autocomplete/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Autocomplete in een formulier","title_sm":"Autocomplete","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Autocomplete","pagination_label":"Autocomplete in een formulier","description":"Richtlijnen voor het gebruik van het autocomplete-attribuut.","slug":"/richtlijnen/formulieren/voorkom-fouten/autocomplete","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geef geldige waardes aan een invoerveld","permalink":"/richtlijnen/formulieren/voorkom-fouten/geldige-waardes"},"next":{"title":"Automatisch invullen","permalink":"/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen"}}');
   var t = l(86070),
    r = l(18439),
    s = l(78734),
    a = l(9386),
    c = l(88022);
   function i(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Het autocomplete-attribuut gebruiken.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'voornaam', children: 'Je voornaam' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'voornaam', type: 'text', autoComplete: 'given-name' }) })] }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'Het autocomplete-attribuut niet gebruiken.', description: 'Het input type alleen is hier niet voldoende om te voldoen aan WCAG.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'telefoon', children: 'Uw telefoonnummer' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'telefoon', type: 'tel' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'autocomplete-in-een-formulier', children: 'Autocomplete in een formulier' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Het ', (0, t.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete', children: ['HTML-attribuut ', (0, t.jsx)(n.code, { children: 'autocomplete' })] }), ' vertelt aan de browser welke waarde verwacht wordt bij het invullen van een formulierveld. Browsers kunnen voor gebruikers onthouden wat ze eerder hebben ingevuld.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Die opgeslagen waarden kunnen browsers gebruiken om velden vast in te vullen, door het ', (0, t.jsx)(n.code, { children: 'autocomplete' }), ' attribuut weten ze welke velden dat moeten zijn. Gegevens zoals namen, adres en telefoonnummer kunnen dan automatisch worden ingevuld door de browser.'] }), '\n', (0, t.jsx)(n.p, { children: 'Autocomplete is fijn voor gebruikers die moeite hebben met typen, problemen hebben met hun geheugen en voor gebruikers die moeite hebben met taal.' }), '\n', (0, t.jsx)(n.h2, { id: 'gebruik-autocomplete-als-er-een-waarde-voor-is-gedefinieerd', children: 'Gebruik autocomplete als er een waarde voor is gedefinieerd' }), '\n', (0, t.jsxs)(n.p, { children: ['WCAG bevat een volledige ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#input-purposes', children: 'lijst van waarden voor autocomplete' }), '. Gebruik altijd een autocomplete-attribuut als er een waarde voor een formulierveld gedefinieerd is in deze lijst.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Jules Ernst van 200 OK heeft van deze lijst een ', (0, t.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/', children: 'Nederlandse interpretatie' }), ' gemaakt.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Belangrijk bij het gebruik van autocomplete is dat het label altijd zichtbaar moet blijven, de gebruiker moet weten of de juiste waarde in het juiste veld is ingevoerd. Zie hiervoor de richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/altijd-zichtbaar/', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete', children: 'aria-autocomplete' }), ' heeft een ander doel en ander gebruik dan autocomplete bij formuliervelden. ', (0, t.jsx)(n.code, { children: 'aria-autocomplete' }), ' wordt gebruikt in webcomponenten, bijvoorbeeld om aan te geven dat er suggesties zijn bij zoekresultaten.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'Succescriterium 1.3.5 Identificeer het doel van de input' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   const v = { title: 'Autocomplete in een formulier', title_sm: 'Autocomplete', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Autocomplete', pagination_label: 'Autocomplete in een formulier', description: 'Richtlijnen voor het gebruik van het autocomplete-attribuut.', slug: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', keywords: ['informatie', 'formulier', 'design', 'code'] },
    b = void 0,
    g = {},
    j = [{ value: 'Gebruik autocomplete als er een waarde voor is gedefinieerd', id: 'gebruik-autocomplete-als-er-een-waarde-voor-is-gedefinieerd', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function x(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x();
   }
  },
 },
]);
