'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [1754],
 {
  9386(e, n, s) {
   s.d(n, { H: () => j });
   var t = s(95822),
    l = s(46447),
    o = s(13526),
    r = s(68148),
    a = s(9016),
    c = s(69303),
    i = s(91635),
    d = s(30734),
    p = s(30758),
    u = s(31186),
    m = s(65904),
    h = s.n(m),
    g = s(51627),
    v = s(86070);
   const b = ({ children: e }) => (0, v.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, v.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(l.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, v.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const j = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const s = 'function' == typeof e ? e() : e,
        t = (0, u.qV)(s)
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
        l = h().highlight(t, h().languages[n], n);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: t } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: l } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: s = !1, displayCode: m = !0, children: h, container: g = 'document', language: j, designTokens: f }) => {
       const _ = 'function' == typeof h ? h() : h,
        k = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(k || _),
        [A, w] = (0, p.useState)(N),
        [C, z] = (0, p.useState)(s);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, p.useId)();
       let R = p.Fragment;
       return (
        'paragraph' === g ? (R = b) : 'document' === g ? (R = x) : 'surface' === g && (R = y),
        (0, v.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          _ && (0, v.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(R, { children: (0, v.jsx)(l.v$, { children: _ }) }) }) }),
          m &&
           (0, v.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(l.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, v.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: A, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(l.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, s) {
   s.d(n, { R: () => r, x: () => a });
   var t = s(30758);
   const l = {},
    o = t.createContext(l);
   function r(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  49439(e, n, s) {
   (s.r(n), s.d(n, { assets: () => b, contentTitle: () => v, default: () => j, frontMatter: () => g, metadata: () => t, toc: () => x }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/multistep/consistency/index","title":"Zorg voor een consistente navigatie en benaming van links en buttons","description":"Richtlijnen over consistente benaming van navigatie, links en buttons.","source":"@site/docs/richtlijnen/formulieren/multistep/3-consistency/index.mdx","sourceDirName":"richtlijnen/formulieren/multistep/3-consistency","slug":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming","permalink":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/3-consistency/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor een consistente navigatie en benaming van links en buttons","title_sm":"Consistente navigatie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Consistente navigatie","pagination_label":"Consistente navigatie","description":"Richtlijnen over consistente benaming van navigatie, links en buttons.","slug":"/richtlijnen/formulieren/meerdere-stappen/consistente-benaming","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Plaatsing voortgang stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang"},"next":{"title":"Samenvatting in laatste stap","permalink":"/richtlijnen/formulieren/meerdere-stappen/samenvatting"}}');
   var l = s(86070),
    o = s(18439),
    r = s(78734),
    a = s(9386),
    c = s(88022);
   function i(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(c.$, { appearance: 'do', title: 'Benoem de stappen consistent.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('a', { href: 'https://example.com/stap-1', children: 'Vorige stap' }) }), (0, l.jsx)('p', { children: '[...]' }), (0, l.jsx)('p', { children: (0, l.jsx)('button', { children: 'Volgende stap' }) })] }) }) }), '\n', (0, l.jsx)(c.$, { appearance: 'dont', title: 'Verschillen tussen hoe de vorige en volgende stap worden benoemd.', description: 'Gebruik ofwel \u2018terug\u2019/\u2018verder\u2019 ofwel \u2018Vorige stap\u2019/\u2018Volgende stap\u2019.', children: (0, l.jsx)(a.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('a', { href: 'https://example.com/stap-1', children: 'Terug' }) }), (0, l.jsx)('p', { children: '[...]' }), (0, l.jsx)('p', { children: (0, l.jsx)('button', { children: 'Volgende stap' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
   function p(e) {
    const n = { h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'zorg-voor-een-consistente-navigatie-en-benaming-van-links-en-buttons', children: 'Zorg voor een consistente navigatie en benaming van links en buttons' }) }), '\n', (0, l.jsx)(n.p, { children: 'Geef op een consistente plek, met een consistente benaming, aan hoe de gebruiker navigeert binnen de stappen, bijvoorbeeld:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: '"Vorige stap", boven het formulier' }), '\n', (0, l.jsx)(n.li, { children: '"Volgende stap" (of als laatste stap: "Versturen") als submitbutton' }), '\n'] }), '\n', (0, l.jsx)(n.p, { children: 'Zorg er dus voor dat links en buttons binnen de formulieren op dezelfde plaats staan en dat ze ook een consistente naam hebben. Door consistentie heeft de gebruiker minder moeite de navigatie te begrijpen en weet ook beter wat er gaat komen na een keuze.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.3/', children: 'Succescriterium 3.2.3 Consistente navigatie' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.2.4/', children: 'Succescriterium 3.2.4 Consistente identificatie' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(m, { ...e }) }) : m(e);
   }
   const g = { title: 'Zorg voor een consistente navigatie en benaming van links en buttons', title_sm: 'Consistente navigatie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Consistente navigatie', pagination_label: 'Consistente navigatie', description: 'Richtlijnen over consistente benaming van navigatie, links en buttons.', slug: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    b = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function y(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(u, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(r.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(y, { ...e }) }) : y();
   }
  },
  51627(e, n, s) {
   s.d(n, { K: () => c, n: () => a });
   var t = s(13526),
    l = s(96345),
    o = s(37168),
    r = s(86070);
   const a = ({ className: e, ...n }) => {
     const s = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: s, children: n.children });
    },
    c = ({ className: e, label: n, heading: s, headingLevel: a, headingApperance: c, ...i }) => {
     const d = (0, t.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: d, ...i, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(l.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [s && (0, r.jsx)(o.D, { level: a, appearance: c, children: s }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  78734(e, n, s) {
   s.d(n, { Ay: () => a, RM: () => o });
   var t = s(86070),
    l = s(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, s) {
   s.d(n, { $: () => p, x: () => d });
   var t = s(4077),
    l = s(58315),
    o = s(46447),
    r = s(13526),
    a = s(45980),
    c = s(30758),
    i = s(86070);
   const d = (0, c.createContext)({}),
    p = ({ title: e, appearance: n, description: s, children: c, figure: p }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      h = p ? 'figcaption' : 'div',
      g = 'string' == typeof s ? (0, i.jsx)(a.oz, { children: s }) : s;
     return (0, i.jsxs)(m, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(o.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(o.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(o.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: c }) })] });
    };
  },
  95822(e, n, s) {
   s.d(n, { M: () => i });
   var t = s(46447),
    l = s(16194),
    o = s(30758),
    r = s(88022);
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
   var c = s(86070);
   function i({ lineNumber: e, syntax: n, textContent: s, trim: i }) {
    let d = s;
    const { title: p, type: u } = (0, o.useContext)(r.x),
     m = (0, o.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(l.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: s, getLineProps: l, getTokenProps: o }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(t.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: s.map((n, s) => (0, c.jsxs)('span', { ...l({ line: n }), children: [e && (0, c.jsx)('span', { children: s + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, s)) })] }) }));
   }
  },
 },
]);
