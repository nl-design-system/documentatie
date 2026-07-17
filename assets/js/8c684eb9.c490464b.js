'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [44684],
 {
  9386(e, n, l) {
   l.d(n, { H: () => x });
   var r = l(95822),
    t = l(46447),
    s = l(13526),
    o = l(68148),
    a = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    u = l(30758),
    m = l(31186),
    p = l(65904),
    h = l.n(p),
    g = l(51627),
    v = l(86070);
   const j = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const x = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        r = (0, m.qV)(l)
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
        t = h().highlight(r, h().languages[n], n);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: r } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: h, container: g = 'document', language: x, designTokens: f }) => {
       const k = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : m.qV(_ || k),
        [z, N] = (0, u.useState)(w),
        [A, C] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: x, plugins: [o.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let D = u.Fragment;
       return (
        'paragraph' === g ? (D = j) : 'document' === g ? (D = y) : 'surface' === g && (D = b),
        (0, v.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          k && (0, v.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(D, { children: (0, v.jsx)(t.v$, { children: k }) }) }) }),
          p &&
           (0, v.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(t.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, v.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, v.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: z, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(t.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(z).catch((e) => console.error('Copy code failed', e));
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
   var r = l(30758);
   const t = {},
    s = r.createContext(t);
   function o(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  36415(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => x, frontMatter: () => g, metadata: () => r, toc: () => y }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/multistep/timing/index","title":"Geef duidelijk aan wanneer het formulier verzonden gaat worden","description":"Richtlijnen over duidelijk aangeven wanneer een formulier wordt verzonden.","source":"@site/docs/richtlijnen/formulieren/multistep/5-timing/index.mdx","sourceDirName":"richtlijnen/formulieren/multistep/5-timing","slug":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven","permalink":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/5-timing/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef duidelijk aan wanneer het formulier verzonden gaat worden","title_sm":"Duidelijk aangeven verzenden","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Duidelijk aangeven verzenden","pagination_label":"Duidelijk aangeven verzenden","description":"Richtlijnen over duidelijk aangeven wanneer een formulier wordt verzonden.","slug":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Samenvatting in laatste stap","permalink":"/richtlijnen/formulieren/meerdere-stappen/samenvatting"},"next":{"title":"Placeholders in een formulier","permalink":"/richtlijnen/formulieren/placeholders/"}}');
   var t = l(86070),
    s = l(18439),
    o = l(78734),
    a = l(9386),
    c = l(88022);
   function i(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Geef duidelijk aan dat een formulier verzonden gaat worden.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)('button', { children: 'Versturen' }) }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'Gebruik hetzelfde label voor verzenden als voor de navigatie in een meerstappenformulier.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)('button', { type: 'submit', children: 'Volgende' }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'geef-duidelijk-aan-wanneer-het-formulier-verzonden-gaat-worden', children: 'Geef duidelijk aan wanneer het formulier verzonden gaat worden' }) }), '\n', (0, t.jsx)(n.p, { children: 'Maak duidelijk aan de gebruiker wanneer het formulier echt gaat worden verzonden. Geef ook de gebruiker, als laatste stap, een samenvatting van wat is ingevuld met de mogelijkheid om te wijzigen.' }), '\n', (0, t.jsx)(n.p, { children: 'De tekst van de laatste submitbutton kan dan bijvoorbeeld \u201cVersturen\u201d zijn, afhankelijk van de inhoud van het formulier.' }), '\n', (0, t.jsx)(n.p, { children: 'Dit geeft de gebruiker zekerheid: \u201cik kan nog wat wijzigen\u201d of \u201cnu gaat het formulier echt verzonden worden\u201d.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.4/', children: 'Succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens)' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.6/', children: 'Succescriterium 3.3.6 Foutpreventie (alle)' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Geef duidelijk aan wanneer het formulier verzonden gaat worden', title_sm: 'Duidelijk aangeven verzenden', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Duidelijk aangeven verzenden', pagination_label: 'Duidelijk aangeven verzenden', description: 'Richtlijnen over duidelijk aangeven wanneer een formulier wordt verzonden.', slug: '/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    y = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function b(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(o.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(b, { ...e }) }) : b();
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => c, n: () => a });
   var r = l(13526),
    t = l(96345),
    s = l(37168),
    o = l(86070);
   const a = ({ className: e, ...n }) => {
     const l = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, o.jsx)('div', { className: l, children: n.children });
    },
    c = ({ className: e, label: n, heading: l, headingLevel: a, headingApperance: c, ...i }) => {
     const d = (0, r.A)('utrecht-accordion__section', e);
     return (0, o.jsxs)('details', { className: d, ...i, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(t.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [l && (0, o.jsx)(s.D, { level: a, appearance: c, children: l }), n] })] }) }), (0, o.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => s });
   var r = l(86070),
    t = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var r = l(4077),
    t = l(58315),
    s = l(46447),
    o = l(13526),
    a = l(45980),
    c = l(30758),
    i = l(86070);
   const d = (0, c.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: c, figure: u }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, i.jsx)(a.oz, { children: l }) : l;
     return (0, i.jsxs)(p, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(s.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: m[n] }, children: c }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => i });
   var r = l(46447),
    t = l(16194),
    s = l(30758),
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
   var c = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: u, type: m } = (0, s.useContext)(o.x),
     p = (0, s.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...t({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
