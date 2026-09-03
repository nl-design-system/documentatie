'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [82479],
 {
  15175(e, n, t) {
   t.d(n, { M: () => c });
   var o = t(46447),
    l = t(16194),
    r = t(30758),
    s = t(51519);
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
   var a = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: u, type: h } = (0, r.useContext)(s.x),
     m = (0, r.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(l.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...l({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => i });
   var o = t(30758);
   const l = {},
    r = o.createContext(l);
   function s(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), o.createElement(r.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, t) {
   t.d(n, { Ay: () => i, RM: () => r });
   var o = t(86070),
    l = t(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  51519(e, n, t) {
   t.d(n, { $: () => u, x: () => d });
   var o = t(4077),
    l = t(58315),
    r = t(46447),
    s = t(13526),
    i = t(66116),
    a = t(30758),
    c = t(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: n, description: t, children: a, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div',
      b = 'string' == typeof t ? (0, c.jsx)(i.oz, { components: { a: r.N_ }, children: t }) : t;
     return (0, c.jsxs)(m, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(r.fz, { children: e })] }), b] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  70348(e, n, t) {
   t.d(n, { K: () => c, n: () => a });
   var o = t(13526),
    l = t(30758),
    r = t(96345),
    s = t(37168),
    i = t(86070);
   const a = (0, l.forwardRef)(({ as: e, className: n, children: t, ...l }, r) => {
     const s = e || 'div',
      a = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(s, { ref: r, className: a, ...l, children: t });
    }),
    c = ({ className: e, classNamePanel: n, label: t, heading: l, headingLevel: a, headingApperance: c, ...d }) => {
     const u = (0, o.A)('utrecht-accordion__section', e),
      h = (0, o.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: u, ...d, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(r.A, {}) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [l && (0, i.jsx)(s.D, { level: a, appearance: c, children: l }), t] })] }) }), (0, i.jsx)('div', { className: h, children: d.children })] });
    };
  },
  80731(e, n, t) {
   t.d(n, { H: () => f });
   var o = t(15175),
    l = t(46447),
    r = t(13526),
    s = t(68148),
    i = t(9016),
    a = t(69303),
    c = t(91635),
    d = t(30734),
    u = t(30758),
    h = t(31186),
    m = t(65904),
    p = t.n(m),
    b = t(70348),
    x = t(89974),
    v = t(86070);
   const g = ({ children: e }) => (0, v.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(l.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, v.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(l.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, v.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: o, copyCode: l, defaultExpandedCode: s, designTokens: i }) => {
       const a = 'string' == typeof t ? t : o || '',
        c = 'string' == typeof t ? p().highlight(t, p().languages[e], e) : p().highlight(o || '', p().languages[e], e);
       return (0, v.jsxs)('div', { className: (0, r.A)('ma-canvas-astro', n), children: [(0, v.jsx)('div', { className: 'voorbeeld-theme', style: i, children: (0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, v.jsx)(b.n, { children: (0, v.jsxs)(b.K, { label: 'Code', open: s, children: [(0, v.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: c } }) }), 'allow' === l && (0, v.jsx)(x.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: m = !0, children: p, container: b = 'document', language: x, designTokens: f }) => {
       const k = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || k),
        [N, A] = (0, u.useState)(w),
        [C, z] = (0, u.useState)(t);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: x, plugins: [s.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let F = u.Fragment;
       return (
        'paragraph' === b ? (F = g) : 'document' === b ? (F = j) : 'surface' === b && (F = y),
        (0, v.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          k && (0, v.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(F, { children: (0, v.jsx)(l.v$, { children: k }) }) }) }),
          m &&
           (0, v.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(l.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!C);
             },
             'aria-expanded': C,
             'aria-controls': S,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, v.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, v.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(l.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  89974(e, n, t) {
   t.d(n, { $: () => o.$n });
   var o = t(50805);
  },
  93621(e, n, t) {
   (t.r(n), t.d(n, { assets: () => v, contentTitle: () => x, default: () => y, frontMatter: () => b, metadata: () => o, toc: () => g }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/keyboard-behaviour/tabindex/index","title":"Gebruik geen positieve tabindex","description":"Richtlijnen voor positieve tabindex in een formulier.","source":"@site/docs/richtlijnen/formulieren/keyboard-behaviour/2-tabindex/index.mdx","sourceDirName":"richtlijnen/formulieren/keyboard-behaviour/2-tabindex","slug":"/richtlijnen/formulieren/toetsenbord/tabindex","permalink":"/richtlijnen/formulieren/toetsenbord/tabindex","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/keyboard-behaviour/2-tabindex/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Gebruik geen positieve tabindex","title_sm":"Geen positieve tabindex","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geen positieve tabindex","pagination_label":"Geen positieve tabindex","description":"Richtlijnen voor positieve tabindex in een formulier.","slug":"/richtlijnen/formulieren/toetsenbord/tabindex","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Zorg dat een formulier werkt met een toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie"},"next":{"title":"Uit te vragen informatie in een formulier","permalink":"/richtlijnen/formulieren/vragen/"}}');
   var l = t(86070),
    r = t(18439),
    s = t(49539),
    i = t(80731),
    a = t(51519);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(a.$, { appearance: 'do', title: 'Formulier zonder tabindex.', children: (0, l.jsx)(i.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('form', { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'naam1', children: 'Uw naam' }) }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'naam1', autoComplete: 'name' }) }), (0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'email1', children: 'Uw e-mailadres' }) }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'email1', autoComplete: 'email' }) }), (0, l.jsx)('p', { children: (0, l.jsx)('button', { children: 'Stuur mij de nieuwsbrief!' }) })] }) }) }) }), '\n', (0, l.jsx)(a.$, { appearance: 'dont', title: 'Formulier met gebruik van een positieve tabindex.', children: (0, l.jsx)(i.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('form', { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'naam2', children: 'Uw naam' }) }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'naam2', autoComplete: 'name', tabIndex: '1' }) }), (0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'email2', children: 'Uw e-mailadres' }) }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'email2', autoComplete: 'email' }) }), (0, l.jsx)('p', { children: (0, l.jsx)('button', { children: 'Stuur mij de nieuwsbrief!' }) })] }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'gebruik-geen-positieve-tabindex', children: 'Gebruik geen positieve tabindex' }) }), '\n', (0, l.jsxs)(n.p, { children: ['Het eerste formulierveld automatisch de focus te geven is een veelgebruikte constructie. Dit kan door het eerste veld een ', (0, l.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex', children: 'tabindex' }), ' te geven met een waarde groter dan nul, bijvoorbeeld ', (0, l.jsx)(n.code, { children: 'tabindex="1"' }), ' of met gebruik van ', (0, l.jsx)(n.code, { children: 'autofocus' }), '. De gebruiker is meteen klaar om het formulier in te gaan vullen.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Maar dit levert problemen op voor gebruikers van ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en toetsenborden. Stel je voor dat je het formulier helemaal niet wilt invullen, maar naar het menu wilt, of de tekst boven het formulier wilt lezen. Dan zul je terug naar boven moeten navigeren.'] }), '\n', (0, l.jsx)(n.p, { children: 'Een screenreadergebruiker kan zo tekst missen die boven het formulier staat. Misschien staan daar wel instructies of aanvullende informatie over hoe het formulier goed in te vullen.' }), '\n', (0, l.jsx)(n.p, { children: 'Gebruik dus ook nooit meerdere positieve tabindexen om de gebruiker te dwingen een bepaalde tabvolgorde aan te houden.' }), '\n', (0, l.jsx)(n.p, { children: 'Laat de bezoeker zelf beslissen wat ze wil lezen en in welke volgorde. Kaap de toetsenbordfocus niet maar hou de natuurlijke tabvolgorde intact.' }), '\n', (0, l.jsxs)(n.p, { children: ['Adam Silver geeft hier uitgebreid uitleg over in ', (0, l.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-automatically-focusing-the-first-input-and-what-to-do-instead/', children: 'The problem with automatically focusing the first input and what to do instead' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Let wel: ', (0, l.jsx)(n.code, { children: 'tabindex="0"' }), ' en ', (0, l.jsx)(n.code, { children: 'tabindex="-1"' }), ' zijn wel toegestaan om bepaalde elementen focus te kunnen geven die van nature geen focus krijgen. Dit verstoort de natuurlijke tabvolgorde niet. Wanneer welke waarde te gebruiken wordt uitgelegd in ', (0, l.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/tabindex#zero-negative-one', children: '0 and -1 Values' }), ' van WebAIM.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Een goede uitleg over de impact van tabindex op toegankelijkheidstaat staat in: ', (0, l.jsx)(n.a, { href: 'https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/', children: 'How To Avoid Breaking Web Pages For Keyboard Users' }), ' van Andrew Nevins.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focusvolgorde' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(m, { ...e }) }) : m(e);
   }
   const b = { title: 'Gebruik geen positieve tabindex', title_sm: 'Geen positieve tabindex', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen positieve tabindex', pagination_label: 'Geen positieve tabindex', description: 'Richtlijnen voor positieve tabindex in een formulier.', slug: '/richtlijnen/formulieren/toetsenbord/tabindex', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    v = {},
    g = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function j(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(p, {}), '\n', (0, l.jsx)(s.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(j, { ...e }) }) : j();
   }
  },
 },
]);
