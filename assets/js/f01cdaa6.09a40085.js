'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [74309],
 {
  15175(e, n, l) {
   l.d(n, { M: () => c });
   var t = l(46447),
    o = l(16194),
    r = l(30758),
    s = l(51519);
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
    const { title: u, type: m } = (0, r.useContext)(s.x),
     h = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(o.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(t.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...o({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  18439(e, n, l) {
   l.d(n, { R: () => s, x: () => a });
   var t = l(30758);
   const o = {},
    r = t.createContext(o);
   function s(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  28670(e, n, l) {
   (l.r(n), l.d(n, { assets: () => f, contentTitle: () => v, default: () => b, frontMatter: () => g, metadata: () => t, toc: () => j }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/error/summary/index","title":"Zet een samenvatting van de foutmeldingen boven het formulier","description":"Richtlijnen voor samenvatting van de foutmeldingen boven het formulier.","source":"@site/docs/richtlijnen/formulieren/error/6-summary/index.mdx","sourceDirName":"richtlijnen/formulieren/error/6-summary","slug":"/richtlijnen/formulieren/foutmeldingen/samenvatting","permalink":"/richtlijnen/formulieren/foutmeldingen/samenvatting","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/6-summary/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet een samenvatting van de foutmeldingen boven het formulier","title_sm":"Samenvatting fouten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Samenvatting fouten","pagination_label":"Samenvatting fouten","description":"Richtlijnen voor samenvatting van de foutmeldingen boven het formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/samenvatting","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"HTML-formuliervalidatie","permalink":"/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie"},"next":{"title":"Screenreaderfeedback","permalink":"/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback"}}');
   var o = l(86070),
    r = l(18439),
    s = l(49539),
    a = l(80731),
    i = l(51519);
   function c(e) {
    return (0, o.jsx)(i.$, { appearance: 'do', title: 'Een samenvatting van de fouten boven het formulier.', description: 'Verplaats focus naar de samenvatting of de kop van de samenvatting.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('h2', { children: 'Invoerfouten gevonden in het formulier' }), (0, o.jsxs)('ul', { children: [(0, o.jsx)('li', { children: (0, o.jsx)('a', { href: '#naam', children: 'Vul uw naam in.' }) }), (0, o.jsx)('li', { children: (0, o.jsx)('a', { href: '#email', children: 'Vul uw e-mailadres in.' }) })] }), (0, o.jsx)('form', { children: (0, o.jsx)('p', { children: '[...]' }) })] }) }) });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c();
   }
   function u(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'zet-een-samenvatting-van-de-foutmeldingen-boven-het-formulier', children: 'Zet een samenvatting van de foutmeldingen boven het formulier' }) }), '\n', (0, o.jsx)(n.p, { children: 'Een zeer gebruikersvriendelijke manier om fouten weer te geven is een combinatie van:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'een samenvatting boven het formulier en;' }), '\n', (0, o.jsx)(n.li, { children: 'per formulierveld de foutmelding herhalen.' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Elke foutmelding in de samenvatting is ook een link naar het formulier. Hierdoor kan de toetsenbordgebruiker direct doorgaan naar het veld met de foutmelding.' }), '\n', (0, o.jsx)(n.p, { children: 'De constructie is als volgt:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Na het versturen van een formulier met fouten wordt ', (0, o.jsx)(n.strong, { children: 'boven' }), ' het formulier een lijst met fouten getoond.'] }), '\n', (0, o.jsx)(n.li, { children: 'Deze lijst heeft een kopje met bijvoorbeeld de tekst:\n"Er was een probleem met je inzending. Verbeter de fouten voor je verder gaat.".' }), '\n', (0, o.jsx)(n.li, { children: 'Daaronder staat een lijst met de foutmeldingen. Elke foutmelding is ook een link naar het bijbehorende formulierveld.' }), '\n', (0, o.jsxs)(n.li, { children: ['Het kopje boven de fouten krijgt de toetsenbordfocus. Dan staat het meteen in beeld, wordt het voorgelezen door ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en is de tabvolgorde logisch: de links naar de betreffende velden zijn de eerstvolgende items.'] }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['GOV.UK geeft hiervan enkele duidelijke voorbeelden op ', (0, o.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-summary/', children: (0, o.jsx)('span', { lang: 'en', children: 'Components Error summary' }) }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Duidelijke foutmeldingen zijn nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'WCAG-succescriterium 3.3.1 Foutidentificatie' }), ' (niveau A).'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.3/', children: 'Succescriterium 3.3.3 Foutsuggestie' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'Zet een samenvatting van de foutmeldingen boven het formulier', title_sm: 'Samenvatting fouten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Samenvatting fouten', pagination_label: 'Samenvatting fouten', description: 'Richtlijnen voor samenvatting van de foutmeldingen boven het formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/samenvatting', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    f = {},
    j = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function x(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(s.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(x, { ...e }) }) : x();
   }
  },
  49539(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => r });
   var t = l(86070),
    o = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  51519(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var t = l(4077),
    o = l(58315),
    r = l(46447),
    s = l(13526),
    a = l(66116),
    i = l(30758),
    c = l(86070);
   const d = (0, i.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: i, figure: u }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      h = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, c.jsx)(a.oz, { components: { a: r.N_ }, children: l }) : l;
     return (0, c.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, c.jsx)(r.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: m[n] }, children: i }) })] });
    };
  },
  70348(e, n, l) {
   l.d(n, { K: () => c, n: () => i });
   var t = l(13526),
    o = l(30758),
    r = l(96345),
    s = l(37168),
    a = l(86070);
   const i = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, r) => {
     const s = e || 'div',
      i = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(s, { ref: r, className: i, ...o, children: l });
    }),
    c = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: i, headingApperance: c, ...d }) => {
     const u = (0, t.A)('utrecht-accordion__section', e),
      m = (0, t.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: u, ...d, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(r.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [o && (0, a.jsx)(s.D, { level: i, appearance: c, children: o }), l] })] }) }), (0, a.jsx)('div', { className: m, children: d.children })] });
    };
  },
  80731(e, n, l) {
   l.d(n, { H: () => y });
   var t = l(15175),
    o = l(46447),
    r = l(13526),
    s = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    u = l(30758),
    m = l(31186),
    h = l(65904),
    p = l.n(h),
    g = l(70348),
    v = l(89974),
    f = l(86070);
   const j = ({ children: e }) => (0, f.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, f.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, f.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, f.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, f.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, f.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: t, copyCode: o, defaultExpandedCode: s, designTokens: a }) => {
       const i = 'string' == typeof l ? l : t || '',
        c = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(t || '', p().languages[e], e);
       return (0, f.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [(0, f.jsx)('div', { className: 'voorbeeld-theme', style: a, children: (0, f.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: i } }) }), (0, f.jsx)(g.n, { children: (0, f.jsxs)(g.K, { label: 'Code', open: s, children: [(0, f.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, f.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === o && (0, f.jsx)(v.$, { 'data-copy-code': i, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: p, container: g = 'document', language: v, designTokens: y }) => {
       const _ = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(k || _),
        [w, A] = (0, u.useState)(N),
        [C, S] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [s.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const z = (0, u.useId)();
       let R = u.Fragment;
       return (
        'paragraph' === g ? (R = j) : 'document' === g ? (R = x) : 'surface' === g && (R = b),
        (0, f.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          _ && (0, f.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, f.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, f.jsx)(R, { children: (0, f.jsx)(o.v$, { children: _ }) }) }) }),
          h &&
           (0, f.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, f.jsx)(o.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': z,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, f.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, f.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: w, trim: !0 }),
             n &&
              (0, f.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, f.jsx)(o.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(w).catch((e) => console.error('Copy code failed', e));
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
   l.d(n, { $: () => t.$n });
   var t = l(50805);
  },
 },
]);
