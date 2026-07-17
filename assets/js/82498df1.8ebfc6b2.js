'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [30023],
 {
  9386(e, n, t) {
   t.d(n, { H: () => x });
   var o = t(95822),
    l = t(46447),
    s = t(13526),
    r = t(68148),
    c = t(9016),
    a = t(69303),
    i = t(91635),
    d = t(30734),
    u = t(30758),
    p = t(31186),
    b = t(65904),
    m = t.n(b),
    h = t(51627),
    g = t(86070);
   const v = ({ children: e }) => (0, g.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(l.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, g.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(l.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, g.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const x = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const t = 'function' == typeof e ? e() : e,
        o = (0, p.qV)(t)
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
        l = m().highlight(o, m().languages[n], n);
       return (0, g.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }), (0, g.jsx)(h.n, { children: (0, g.jsx)(h.K, { label: 'Code', children: (0, g.jsx)('pre', { className: 'language-html nl-code-block', children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: l } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: b = !0, children: m, container: h = 'document', language: x, designTokens: f }) => {
       const _ = 'function' == typeof m ? m() : m,
        k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(k || _),
        [A, w] = (0, u.useState)(N),
        [z, C] = (0, u.useState)(t);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: x, plugins: [r.A, c.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, u.useId)();
       let T = u.Fragment;
       return (
        'paragraph' === h ? (T = v) : 'document' === h ? (T = y) : 'surface' === h && (T = j),
        (0, g.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          _ && (0, g.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, g.jsx)(T, { children: (0, g.jsx)(l.v$, { children: _ }) }) }) }),
          b &&
           (0, g.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(l.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          b &&
           (0, g.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, g.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: A, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(l.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => c });
   var o = t(30758);
   const l = {},
    s = o.createContext(l);
   function r(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, t) {
   t.d(n, { K: () => a, n: () => c });
   var o = t(13526),
    l = t(96345),
    s = t(37168),
    r = t(86070);
   const c = ({ className: e, ...n }) => {
     const t = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: t, children: n.children });
    },
    a = ({ className: e, label: n, heading: t, headingLevel: c, headingApperance: a, ...i }) => {
     const d = (0, o.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: d, ...i, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(l.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [t && (0, r.jsx)(s.D, { level: c, appearance: a, children: t }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  57331(e, n, t) {
   (t.r(n), t.d(n, { assets: () => v, contentTitle: () => g, default: () => x, frontMatter: () => h, metadata: () => o, toc: () => y }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/button/keyboard/index","title":"Toetsenbordbediening van een button","description":"Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.","source":"@site/docs/richtlijnen/formulieren/button/1-keyboard/index.mdx","sourceDirName":"richtlijnen/formulieren/button/1-keyboard","slug":"/richtlijnen/formulieren/buttons/toetsenbordbediening","permalink":"/richtlijnen/formulieren/buttons/toetsenbordbediening","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/1-keyboard/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Toetsenbordbediening van een button","title_sm":"Toetsenbordbediening","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toetsenbordbediening","pagination_label":"Toetsenbordbediening van een button","description":"Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.","slug":"/richtlijnen/formulieren/buttons/toetsenbordbediening","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Buttons in een formulier","permalink":"/richtlijnen/formulieren/buttons"},"next":{"title":"Verstuur niet automatisch","permalink":"/richtlijnen/formulieren/buttons/niet-automatisch-versturen"}}');
   var l = t(86070),
    s = t(18439),
    r = t(78734),
    c = t(9386),
    a = t(88022);
   function i(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(a.$, { appearance: 'do', title: 'Gebruik een button, zodat de toetsenbordinteractie vanzelf goed gaat.', children: (0, l.jsx)(c.H, { language: 'html', children: () => (0, l.jsx)('button', { className: 'doFancyStuff button', children: 'Geef je op' }) }) }), '\n', (0, l.jsx)(a.$, { appearance: 'dont', title: 'Een div gebruiken die alleen met de muis aanklikbaar is.', children: (0, l.jsx)(c.H, { language: 'html', children: () => (0, l.jsx)('div', { className: 'doFancyStuff button', children: 'Geef je op' }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'toetsenbordbediening-van-een-button', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, l.jsx)(n.p, { children: 'Veel gebruikers navigeren door een formulier met hun Tab-toets om van interactief element naar interactief element te springen, zoals buttons, links, invoervelden, radio buttons en checkboxes.' }), '\n', (0, l.jsx)(n.p, { children: 'Krijgt een button de toetsenbordfocus, dan kan die met \u201center\u201d of \u201cspatiebalk\u201d worden geactiveerd. Zorg ervoor dat deze functionaliteit blijft werken als je een webcomponent bouwt, dit is standaard en verwacht gedrag van een button.' }), '\n', (0, l.jsx)(n.p, { children: 'Zorg ervoor dat de volgorde waarin interactieve elementen focus krijgen logisch is en dat er geen onverwachte veranderingen plaatsvinden als een bezoeker de button activeert.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
   function b(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'Succescriterium 2.1.1 Toetsenbord' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.1/', children: 'Succescriterium 3.2.1 Bij focus' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(b, { ...e }) }) : b(e);
   }
   const h = { title: 'Toetsenbordbediening van een button', title_sm: 'Toetsenbordbediening', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toetsenbordbediening', pagination_label: 'Toetsenbordbediening van een button', description: 'Richtlijnen voor toetsenbordbediening van buttons (knoppen) in een formulier.', slug: '/richtlijnen/formulieren/buttons/toetsenbordbediening', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    v = {},
    y = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function j(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(p, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(m, {}), '\n', (0, l.jsx)(r.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(j, { ...e }) }) : j();
   }
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => c, RM: () => s });
   var o = t(86070),
    l = t(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, t) {
   t.d(n, { $: () => u, x: () => d });
   var o = t(4077),
    l = t(58315),
    s = t(46447),
    r = t(13526),
    c = t(45980),
    a = t(30758),
    i = t(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: n, description: t, children: a, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      b = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      h = 'string' == typeof t ? (0, i.jsx)(c.oz, { children: t }) : t;
     return (0, i.jsxs)(b, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(s.fz, { children: e })] }), h] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  95822(e, n, t) {
   t.d(n, { M: () => i });
   var o = t(46447),
    l = t(16194),
    s = t(30758),
    r = t(88022);
   const c = {
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
   function i({ lineNumber: e, syntax: n, textContent: t, trim: i }) {
    let d = t;
    const { title: u, type: p } = (0, s.useContext)(r.x),
     b = (0, s.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(l.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: b, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': b, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...l({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
 },
]);
