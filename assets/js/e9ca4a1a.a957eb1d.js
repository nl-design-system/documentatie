'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [76558],
 {
  15175(e, n, l) {
   l.d(n, { M: () => c });
   var o = l(46447),
    t = l(16194),
    s = l(30758),
    r = l(51519);
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
   var i = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: u, type: m } = (0, s.useContext)(r.x),
     p = (0, s.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: s }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(o.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...t({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => a });
   var o = l(30758);
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  47250(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => g, default: () => y, frontMatter: () => v, metadata: () => o, toc: () => x }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/help/autofill/index","title":"Vul bekende informatie in waar mogelijk","description":"Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.","source":"@site/docs/richtlijnen/formulieren/help/6-autofill/index.mdx","sourceDirName":"richtlijnen/formulieren/help/6-autofill","slug":"/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen","permalink":"/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/6-autofill/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Vul bekende informatie in waar mogelijk","title_sm":"Automatisch invullen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Automatisch invullen","pagination_label":"Automatisch invullen","description":"Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.","slug":"/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Autocomplete in een formulier","permalink":"/richtlijnen/formulieren/voorkom-fouten/autocomplete"},"next":{"title":"Controleren en aanpassen","permalink":"/richtlijnen/formulieren/voorkom-fouten/controleren-en-aanpassen"}}');
   var t = l(86070),
    s = l(18439),
    r = l(49539),
    a = l(80731),
    i = l(51519);
   function c(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Voeg autocomplete waarden toe aan adresgegevens.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'adres1', children: 'Straat en huisnummer' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'adres1', autoComplete: 'street-address', name: 'adres' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'postcode1', children: 'Postcode' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'postcode1', autoComplete: 'postal-code', name: 'postcode' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'woonplaats1', children: 'Woonplaats' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'woonplaats1', autoComplete: 'address-level2', name: 'woonplaats' }) })] }) }) }), '\n', (0, t.jsx)(i.$, { appearance: 'dont', title: 'Laat autocomplete waarden weg bij adresgegevens.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'adres2', children: 'Straat en huisnummer' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'adres2', name: 'adres' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'postcode2', children: 'Postcode' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'postcode2', name: 'postcode' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'woonplaats2', children: 'Woonplaats' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'woonplaats2', name: 'woonplaats' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h3: 'h3', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'vul-bekende-informatie-in-waar-mogelijk', children: 'Vul bekende informatie in waar mogelijk' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Als de gebruiker is ingelogd, gebruik dan bekende informatie om velden vast in te vullen. In DigiD-sessies is bijvoorbeeld al veel informatie beschikbaar, die zou kunnen worden gebruikt om velden vooraf in te vullen.\nHet ', (0, t.jsx)(n.a, { href: 'https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).', children: 'gebruik van DigiD' }), ' is wel aan wettelijke voorwaarden verbonden.'] }), '\n', (0, t.jsx)(n.h3, { id: 'autocomplete', children: 'Autocomplete' }), '\n', (0, t.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, t.jsx)(n.code, { children: 'autocomplete' }), ' maakt het voor de gebruiker makkelijker om al eerder ingevulde informatie automatisch toe te voegen. De volledige lijst waarden staat op de MDN-website: ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete', children: 'HTML-attribuut: autocomplete' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Sommige waarden zijn onduidelijk of ontbreken voor Nederlandse toepassingen. Jules Ernst van 200 OK heeft een overzicht gemaakt van de beste manier om ', (0, t.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/#dutch', children: 'autocomplete in Nederlandse formulieren' }), ' toe te passen.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'Succescriterium 1.3.5 Identificeer het doel van de input' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.7/', children: 'succescriterium 3.3.7 Overbodige invoer' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   const v = { title: 'Vul bekende informatie in waar mogelijk', title_sm: 'Automatisch invullen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Automatisch invullen', pagination_label: 'Automatisch invullen', description: 'Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.', slug: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    j = {},
    x = [{ value: 'Autocomplete', id: 'autocomplete', level: 3 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function b(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(b, { ...e }) }) : b();
   }
  },
  49539(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => s });
   var o = l(86070),
    t = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  51519(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var o = l(4077),
    t = l(58315),
    s = l(46447),
    r = l(13526),
    a = l(66116),
    i = l(30758),
    c = l(86070);
   const d = (0, i.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: i, figure: u }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      v = 'string' == typeof l ? (0, c.jsx)(a.oz, { components: { a: s.N_ }, children: l }) : l;
     return (0, c.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, c.jsx)(s.fz, { children: e })] }), v] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: m[n] }, children: i }) })] });
    };
  },
  70348(e, n, l) {
   l.d(n, { K: () => c, n: () => i });
   var o = l(13526),
    t = l(30758),
    s = l(96345),
    r = l(37168),
    a = l(86070);
   const i = (0, t.forwardRef)(({ as: e, className: n, children: l, ...t }, s) => {
     const r = e || 'div',
      i = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(r, { ref: s, className: i, ...t, children: l });
    }),
    c = ({ className: e, classNamePanel: n, label: l, heading: t, headingLevel: i, headingApperance: c, ...d }) => {
     const u = (0, o.A)('utrecht-accordion__section', e),
      m = (0, o.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: u, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(s.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [t && (0, a.jsx)(r.D, { level: i, appearance: c, children: t }), l] })] }) }), (0, a.jsx)('div', { className: m, children: d.children })] });
    };
  },
  80731(e, n, l) {
   l.d(n, { H: () => f });
   var o = l(15175),
    t = l(46447),
    s = l(13526),
    r = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    u = l(30758),
    m = l(31186),
    p = l(65904),
    h = l.n(p),
    v = l(70348),
    g = l(89974),
    j = l(86070);
   const x = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   x.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: o, copyCode: t, defaultExpandedCode: r, designTokens: a }) => {
       const i = 'string' == typeof l ? l : o || '',
        c = 'string' == typeof l ? h().highlight(l, h().languages[e], e) : h().highlight(o || '', h().languages[e], e);
       return (0, j.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [(0, j.jsx)('div', { className: 'voorbeeld-theme', style: a, children: (0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, j.jsx)(v.n, { children: (0, j.jsxs)(v.K, { label: 'Code', open: r, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === t && (0, j.jsx)(g.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: h, container: v = 'document', language: g, designTokens: f }) => {
       const k = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : m.qV(_ || k),
        [N, A] = (0, u.useState)(w),
        [C, z] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: g, plugins: [r.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let F = u.Fragment;
       return (
        'paragraph' === v ? (F = x) : 'document' === v ? (F = b) : 'surface' === v && (F = y),
        (0, j.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          k && (0, j.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, j.jsx)(F, { children: (0, j.jsx)(t.v$, { children: k }) }) }) }),
          p &&
           (0, j.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(t.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!C);
             },
             'aria-expanded': C,
             'aria-controls': S,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, j.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, j.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: N, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(t.$n, {
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
  89974(e, n, l) {
   l.d(n, { $: () => o.$n });
   var o = l(50805);
  },
 },
]);
