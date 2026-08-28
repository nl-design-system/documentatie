'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65850],
 {
  15175(e, n, l) {
   l.d(n, { M: () => i });
   var r = l(46447),
    o = l(16194),
    s = l(30758),
    a = l(51519);
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
   var c = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: h, type: m } = (0, s.useContext)(a.x),
     p = (0, s.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(o.f4, { theme: t, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, c.jsx)(r.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...o({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  18439(e, n, l) {
   l.d(n, { R: () => a, x: () => t });
   var r = l(30758);
   const o = {},
    s = r.createContext(o);
   function a(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function t(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, l) {
   l.d(n, { Ay: () => t, RM: () => s });
   var r = l(86070),
    o = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  51519(e, n, l) {
   l.d(n, { $: () => h, x: () => d });
   var r = l(4077),
    o = l(58315),
    s = l(46447),
    a = l(13526),
    t = l(66116),
    c = l(30758),
    i = l(86070);
   const d = (0, c.createContext)({}),
    h = ({ title: e, appearance: n, description: l, children: c, figure: h }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = h ? 'figure' : 'div',
      u = h ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, i.jsx)(t.oz, { components: { a: s.N_ }, children: l }) : l;
     return (0, i.jsxs)(p, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(s.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: m[n] }, children: c }) })] });
    };
  },
  70348(e, n, l) {
   l.d(n, { K: () => i, n: () => c });
   var r = l(13526),
    o = l(30758),
    s = l(96345),
    a = l(37168),
    t = l(86070);
   const c = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, s) => {
     const a = e || 'div',
      c = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, t.jsx)(a, { ref: s, className: c, ...o, children: l });
    }),
    i = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: c, headingApperance: i, ...d }) => {
     const h = (0, r.A)('utrecht-accordion__section', e),
      m = (0, r.A)('utrecht-accordion__panel', n);
     return (0, t.jsxs)('details', { className: h, ...d, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(s.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [o && (0, t.jsx)(a.D, { level: c, appearance: i, children: o }), l] })] }) }), (0, t.jsx)('div', { className: m, children: d.children })] });
    };
  },
  80731(e, n, l) {
   l.d(n, { H: () => y });
   var r = l(15175),
    o = l(46447),
    s = l(13526),
    a = l(68148),
    t = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    h = l(30758),
    m = l(31186),
    p = l(65904),
    u = l.n(p),
    g = l(70348),
    v = l(86070);
   const b = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: n, className: l }) => {
       const r = 'function' == typeof e ? e() : e,
        o = (0, m.qV)(r)
         .replaceAll(/&quot;/g, '"')
         .replaceAll(/\sclass="[\w-\s]+"/g, '')
         .replace('<astro-static-slot>', '')
         .replace('</astro-static-slot>', '')
         .replaceAll(/{"\s"}/g, '')
         .replaceAll(/\n{2,}/g, '\n')
         .replaceAll(/^\s\s/gm, '')
         .replaceAll(/\salt\s/g, ' alt="" ')
         .replaceAll(' loading="lazy"', ' '),
        a = u().highlight(o, u().languages[n], n);
       return (0, v.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', l), children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: a } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: u, container: g = 'document', language: y, designTokens: f }) => {
       const k = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : m.qV(_ || k),
        [N, A] = (0, h.useState)(w),
        [C, z] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: y, plugins: [a.A, t.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, h.useId)();
       let P = h.Fragment;
       return (
        'paragraph' === g ? (P = b) : 'document' === g ? (P = j) : 'surface' === g && (P = x),
        (0, v.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          k && (0, v.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(P, { children: (0, v.jsx)(o.v$, { children: k }) }) }) }),
          p &&
           (0, v.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(o.$n, {
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
           (0, v.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, v.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: N, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(o.$n, {
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
  84847(e, n, l) {
   (l.r(n), l.d(n, { assets: () => b, contentTitle: () => v, default: () => y, frontMatter: () => g, metadata: () => r, toc: () => j }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/clarity/index","title":"Voorkom verwarring bij de gebruiker","description":"Richtlijnen om verwarring bij de gebruiker te voorkomen.","source":"@site/docs/richtlijnen/formulieren/placeholder/3-clarity/index.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/3-clarity","slug":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen","permalink":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/3-clarity/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Voorkom verwarring bij de gebruiker","title_sm":"Placeholder kan verwarren","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder kan verwarren","pagination_label":"Placeholder kan verwarren","description":"Richtlijnen om verwarring bij de gebruiker te voorkomen.","slug":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder bij zoekfunctie","permalink":"/richtlijnen/formulieren/placeholders/zoekfunctie"},"next":{"title":"Placeholder kleurcontrast","permalink":"/richtlijnen/formulieren/placeholders/kleurcontrast"}}');
   var o = l(86070),
    s = l(18439),
    a = l(49539),
    t = l(80731),
    c = l(51519);
   function i(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(c.$, { appearance: 'do', title: 'Geen placeholder gebruiken als het label duidelijk genoeg is.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'voornaam1', children: 'Je voornaam' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { autoComplete: 'given-name', id: 'voornaam1', name: 'voornaam', type: 'text' }) })] }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'De labeltekst herhalen in de placeholder.', children: (0, o.jsx)(t.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'voornaam2', children: 'Voornaam' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { autoComplete: 'given-name', id: 'voornaam2', name: 'voornaam', placeholder: 'Voornaam', type: 'text' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function h(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'voorkom-verwarring-bij-de-gebruiker', children: 'Voorkom verwarring bij de gebruiker' }) }), '\n', (0, o.jsxs)(n.p, { children: ['De placeholder kan ook voor verwarring zorgen bij gebruikers. Is een veld al ingevuld? De combinatie van een label met een ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'description' }), ' is een betere manier om de gebruiker te vertellen hoe een veld in te vullen. Herhaal nooit de labeltekst in de placeholder, dat geeft geen extra informatie en is dus zinloos.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Zie het onderzoek ', (0, o.jsx)(n.a, { href: 'https://www.nngroup.com/articles/form-design-placeholders/', children: (0, o.jsx)('span', { lang: 'en', children: 'Placeholders in Form Fields Are Harmful' }) }), ' van de Nielsen Norman Group en ', (0, o.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-placeholders-and-what-to-do-instead/', children: 'The problem with placeholders and what to do instead' }), ' van Adam Silver.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Voorkom verwarring bij de gebruiker', title_sm: 'Placeholder kan verwarren', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kan verwarren', pagination_label: 'Placeholder kan verwarren', description: 'Richtlijnen om verwarring bij de gebruiker te voorkomen.', slug: '/richtlijnen/formulieren/placeholders/verwarring-voorkomen', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    b = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function x(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(a.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(x, { ...e }) }) : x();
   }
  },
 },
]);
