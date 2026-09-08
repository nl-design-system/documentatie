'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [88963],
 {
  15175(e, n, l) {
   l.d(n, { M: () => i });
   var a = l(46447),
    o = l(16194),
    t = l(30758),
    s = l(51519);
   const r = {
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
    const { title: m, type: h } = (0, t.useContext)(s.x),
     u = (0, t.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(o.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, c.jsx)(a.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': u, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...o({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  18439(e, n, l) {
   l.d(n, { R: () => s, x: () => r });
   var a = l(30758);
   const o = {},
    t = a.createContext(o);
   function s(e) {
    const n = a.useContext(t);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), a.createElement(t.Provider, { value: n }, e.children));
   }
  },
  24383(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => g, default: () => y, frontMatter: () => b, metadata: () => a, toc: () => v }));
   const a = JSON.parse('{"id":"richtlijnen/formulieren/label/visible-acccessible-name/index","title":"De zichtbare naam moet overeenkomen met de toegankelijke naam","description":"Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.","source":"@site/docs/richtlijnen/formulieren/label/2-visible-acccessible-name/index.mdx","sourceDirName":"richtlijnen/formulieren/label/2-visible-acccessible-name","slug":"/richtlijnen/formulieren/labels/zichtbare-naam","permalink":"/richtlijnen/formulieren/labels/zichtbare-naam","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/2-visible-acccessible-name/index.mdx","tags":[],"version":"current","frontMatter":{"title":"De zichtbare naam moet overeenkomen met de toegankelijke naam","title_sm":"Zichtbare naam label","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Zichtbare naam label","pagination_label":"Zichtbare naam label","description":"Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.","slug":"/richtlijnen/formulieren/labels/zichtbare-naam","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Toegankelijke naam label","permalink":"/richtlijnen/formulieren/labels/toegankelijke-naam"},"next":{"title":"Plaatsing label","permalink":"/richtlijnen/formulieren/labels/plaatsing"}}');
   var o = l(86070),
    t = l(18439),
    s = l(49539),
    r = l(80731),
    c = l(51519);
   function i(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(c.$, { appearance: 'do', title: 'Het zichtbare label is de toegankelijke naam.', children: (0, o.jsx)(r.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'hond', children: 'Hoe heet je hond' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { type: 'text', id: 'hond', name: 'hond' }) })] }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'Alleen een placeholder gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, o.jsx)(r.H, { language: 'html', children: () => (0, o.jsx)('p', { children: (0, o.jsx)('input', { type: 'text', name: 'lievelingskleur', 'aria-label': 'Vul een kleur in', placeholder: 'Wat is je lievelingskleur' }) }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'Alleen losse tekst gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, o.jsx)(r.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: 'Zoek' }), (0, o.jsx)('input', { type: 'search', name: 'trefwoord', 'aria-label': 'Trefwoord' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function m(e) {
    const n = { code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'de-zichtbare-naam-moet-overeenkomen-met-de-toegankelijke-naam', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }) }), '\n', (0, o.jsx)(n.p, { children: 'Gebruikers van voice recognition software kunnen een formulierveld focus geven door de naam uit te spreken.' }), '\n', (0, o.jsxs)(n.p, { children: ['Als de toegankelijke naam niet begint met de zichtbare naam werkt dit niet goed. Dit kan gebeuren bij het verkeerd gebruik van het attribute ', (0, o.jsx)(n.code, { children: 'aria-label' }), '. Met ', (0, o.jsx)(n.code, { children: 'aria-label' }), ' kan een formulierveld ook een toegankelijke naam worden gegeven, onzichtbaar voor de ziende gebruiker.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.5.3/', children: 'Succescriterium 2.5.3: Label in naam' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   const b = { title: 'De zichtbare naam moet overeenkomen met de toegankelijke naam', title_sm: 'Zichtbare naam label', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Zichtbare naam label', pagination_label: 'Zichtbare naam label', description: 'Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/zichtbare-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    j = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function x(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(s.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(x, { ...e }) }) : x();
   }
  },
  49539(e, n, l) {
   l.d(n, { Ay: () => r, RM: () => t });
   var a = l(86070),
    o = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, a.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, a.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(s, { ...e }) }) : s(e);
   }
  },
  51519(e, n, l) {
   l.d(n, { $: () => m, x: () => d });
   var a = l(4077),
    o = l(58315),
    t = l(46447),
    s = l(13526),
    r = l(66116),
    c = l(30758),
    i = l(86070);
   const d = (0, c.createContext)({}),
    m = ({ title: e, appearance: n, description: l, children: c, figure: m }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = m ? 'figure' : 'div',
      p = m ? 'figcaption' : 'div',
      b = 'string' == typeof l ? (0, i.jsx)(r.oz, { components: { a: t.N_ }, children: l }) : l;
     return (0, i.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(t.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(a.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(t.fz, { children: e })] }), b] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: c }) })] });
    };
  },
  70348(e, n, l) {
   l.d(n, { K: () => i, n: () => c });
   var a = l(13526),
    o = l(30758),
    t = l(96345),
    s = l(37168),
    r = l(86070);
   const c = (0, o.forwardRef)(({ as: e, className: n, children: l, ...o }, t) => {
     const s = e || 'div',
      c = (0, a.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, r.jsx)(s, { ref: t, className: c, ...o, children: l });
    }),
    i = ({ className: e, classNamePanel: n, label: l, heading: o, headingLevel: c, headingApperance: i, ...d }) => {
     const m = (0, a.A)('utrecht-accordion__section', e),
      h = (0, a.A)('utrecht-accordion__panel', n);
     return (0, r.jsxs)('details', { className: m, ...d, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(t.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [o && (0, r.jsx)(s.D, { level: c, appearance: i, children: o }), l] })] }) }), (0, r.jsx)('div', { className: h, children: d.children })] });
    };
  },
  80731(e, n, l) {
   l.d(n, { H: () => k });
   var a = l(15175),
    o = l(46447),
    t = l(13526),
    s = l(68148),
    r = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    m = l(30758),
    h = l(31186),
    u = l(65904),
    p = l.n(u),
    b = l(70348),
    g = l(89974),
    j = l(86070);
   const v = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: a, copyCode: o, defaultExpandedCode: s, designTokens: r }) => {
       const c = 'string' == typeof l ? l : a || '',
        i = 'string' == typeof l ? p().highlight(l, p().languages[e], e) : p().highlight(a || '', p().languages[e], e);
       return (0, j.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [(0, j.jsx)('div', { className: 'voorbeeld-theme', style: r, children: (0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: c } }) }), (0, j.jsx)(b.n, { children: (0, j.jsxs)(b.K, { label: 'Code', open: s, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: i } }) }), 'allow' === o && (0, j.jsx)(g.$, { 'data-copy-code': c, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: u = !0, children: p, container: b = 'document', language: g, designTokens: k }) => {
       const f = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || f),
        [z, w] = (0, m.useState)(N),
        [A, C] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [s.A, r.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, m.useId)();
       let R = m.Fragment;
       return (
        'paragraph' === b ? (R = v) : 'document' === b ? (R = x) : 'surface' === b && (R = y),
        (0, j.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          f && (0, j.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, j.jsx)(R, { children: (0, j.jsx)(o.v$, { children: f }) }) }) }),
          u &&
           (0, j.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(o.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, j.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, j.jsx)(a.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: z, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(o.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  89974(e, n, l) {
   l.d(n, { $: () => a.$n });
   var a = l(50805);
  },
 },
]);
