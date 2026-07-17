'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18227],
 {
  9386(e, n, l) {
   l.d(n, { H: () => y });
   var t = l(95822),
    s = l(46447),
    r = l(13526),
    o = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    p = l(30758),
    u = l(31186),
    m = l(65904),
    h = l.n(m),
    g = l(51627),
    v = l(86070);
   const j = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        t = (0, u.qV)(l)
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
        s = h().highlight(t, h().languages[n], n);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: t } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: h, container: g = 'document', language: y, designTokens: f }) => {
       const _ = 'function' == typeof h ? h() : h,
        k = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(k || _),
        [A, w] = (0, p.useState)(N),
        [C, z] = (0, p.useState)(l);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: y, plugins: [o.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, p.useId)();
       let P = p.Fragment;
       return (
        'paragraph' === g ? (P = j) : 'document' === g ? (P = x) : 'surface' === g && (P = b),
        (0, v.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          _ && (0, v.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(P, { children: (0, v.jsx)(s.v$, { children: _ }) }) }) }),
          m &&
           (0, v.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(s.$n, {
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
             (0, v.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: A, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(s.$n, {
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
   l.d(n, { R: () => o, x: () => a });
   var t = l(30758);
   const s = {},
    r = t.createContext(s);
   function o(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => i, n: () => a });
   var t = l(13526),
    s = l(96345),
    r = l(37168),
    o = l(86070);
   const a = ({ className: e, ...n }) => {
     const l = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, o.jsx)('div', { className: l, children: n.children });
    },
    i = ({ className: e, label: n, heading: l, headingLevel: a, headingApperance: i, ...c }) => {
     const d = (0, t.A)('utrecht-accordion__section', e);
     return (0, o.jsxs)('details', { className: d, ...c, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(s.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [l && (0, o.jsx)(r.D, { level: a, appearance: i, children: l }), n] })] }) }), (0, o.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  58764(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => y, frontMatter: () => g, metadata: () => t, toc: () => x }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/multistep/location/index","title":"Plaats de informatie over waar de gebruiker is in de stappen boven het formulier","description":"Richtlijnen over positie van de formulier voortgang.","source":"@site/docs/richtlijnen/formulieren/multistep/2-location/index.mdx","sourceDirName":"richtlijnen/formulieren/multistep/2-location","slug":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang","permalink":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/2-location/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaats de informatie over waar de gebruiker is in de stappen boven het formulier","title_sm":"Plaatsing voortgang stappen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing voortgang stappen","pagination_label":"Plaatsing voortgang stappen","description":"Richtlijnen over positie van de formulier voortgang.","slug":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Voortgang stappen tonen","permalink":"/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen"},"next":{"title":"Consistente navigatie","permalink":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming"}}');
   var s = l(86070),
    r = l(18439),
    o = l(78734),
    a = l(9386),
    i = l(88022);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Info boven het form element.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('h2', { children: 'Uw gegevens' }), (0, s.jsx)('p', { children: 'Stap 2 van 3' }), (0, s.jsx)('form', { children: '[... inhoud formulier \u2026]' })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'De tekst van de stap opnemen in het kopje, boven het formulier.', description: 'En deze tekst visueel op een andere regel plaatsen. ', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('h2', { children: [(0, s.jsx)('span', { class: 'example-progress-indicator', children: 'Stap 2 van 3' }), 'Uw gegevens'] }), (0, s.jsx)('form', { children: '[... inhoud formulier \u2026]' })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Info binnen het formulier.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('h2', { children: 'Uw gegevens' }), (0, s.jsxs)('form', { children: [(0, s.jsx)('h3', { children: 'Stap 2 van 3' }), '[... inhoud formulier \u2026]'] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Plaats tekst en uitleg die hoort bij het formulier buiten het ', (0, s.jsx)(n.code, { children: '<form>' }), ' element. Dus zet informatie over de stappen ', (0, s.jsx)(n.strong, { children: 'boven' }), ' en niet ', (0, s.jsx)(n.strong, { children: 'binnen' }), ' het ', (0, s.jsx)(n.code, { children: '<form>' }), ' element. Dan is de kans dat gebruikers van ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' deze informatie missen het kleinst. Het waarom staat uitgelegd bij de richtlijn ', (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/koppelen/', children: 'Koppel een description aan het formulierveld' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Het voordeel van een formulier in meer stappen is, dat je makkelijker uitgebreide informatie per stap kunt toevoegen ', (0, s.jsx)(n.strong, { children: 'boven' }), ' het formulier. Dat scheelt de complexiteit van eventueel gebruik van ARIA om tekst te laten voorlezen bij een formulierveld.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
   const g = { title: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier', title_sm: 'Plaatsing voortgang stappen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing voortgang stappen', pagination_label: 'Plaatsing voortgang stappen', description: 'Richtlijnen over positie van de formulier voortgang.', slug: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function b(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(h, {}), '\n', (0, s.jsx)(o.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b();
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => r });
   var t = l(86070),
    s = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => p, x: () => d });
   var t = l(4077),
    s = l(58315),
    r = l(46447),
    o = l(13526),
    a = l(45980),
    i = l(30758),
    c = l(86070);
   const d = (0, i.createContext)({}),
    p = ({ title: e, appearance: n, description: l, children: i, figure: p }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      h = p ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, c.jsx)(a.oz, { children: l }) : l;
     return (0, c.jsxs)(m, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(r.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => c });
   var t = l(46447),
    s = l(16194),
    r = l(30758),
    o = l(88022);
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
    const { title: p, type: u } = (0, r.useContext)(o.x),
     m = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(t.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...s({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
