'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [12781],
 {
  14881(e, n, t) {
   t.d(n, { K: () => d, n: () => o });
   var l = t(13526),
    a = t(30758),
    i = t(30662),
    r = t(37168),
    s = t(86070);
   const o = (0, a.forwardRef)(({ as: e, className: n, children: t, ...a }, i) => {
     const r = e || 'div',
      o = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, s.jsx)(r, { ref: i, className: o, ...a, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: a, headingLevel: o, headingApperance: d, ...c }) => {
     const g = (0, l.A)('utrecht-accordion__section', e),
      b = (0, l.A)('utrecht-accordion__panel', n);
     return (0, s.jsxs)('details', { className: g, ...c, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(i.rI, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [a && (0, s.jsx)(r.D, { level: o, appearance: d, children: a }), t] })] }) }), (0, s.jsx)('div', { className: b, children: c.children })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => s });
   var l = t(30758);
   const a = {},
    i = l.createContext(a);
   function r(e) {
    const n = l.useContext(i);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), l.createElement(i.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, t) {
   t.d(n, { M: () => d });
   var l = t(46447),
    a = t(16194),
    i = t(30758),
    r = t(56528);
   const s = {
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
   var o = t(86070);
   function d({ lineNumber: e, syntax: n, textContent: t, trim: d }) {
    let c = t;
    const { title: g, type: b } = (0, i.useContext)(r.x),
     h = (0, i.useId)();
    return (d && (c = c.trim()), (0, o.jsx)(a.f4, { theme: s, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: a, getTokenProps: i }) => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', b ? `\u201c${b}\u201d` : '', ' ', g ? ': ' : ' ', g] }), (0, o.jsx)(l.NG, { tabIndex: 0, role: g ? 'region' : void 0, 'aria-labelledby': h, style: n, children: t.map((n, t) => (0, o.jsxs)('span', { ...a({ line: n }), children: [e && (0, o.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, o.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => P, GP: () => w, KC: () => W, Nd: () => _, Rt: () => D, Vj: () => A, Wk: () => E, bz: () => z, cB: () => C, e5: () => T, hY: () => $, jK: () => I, jP: () => L, ob: () => F, rI: () => N, t4: () => M, vP: () => S, vg: () => H });
   var l = t(92081),
    a = t(90578),
    i = t(96345),
    r = t(64249),
    s = t(4603),
    o = t(91525),
    d = t(23436),
    c = t(1375),
    g = t(4077),
    b = t(58315),
    h = t(73563),
    v = t(35193),
    u = t(82999),
    m = t(13088),
    p = t(43864),
    f = t(24214),
    j = t(79532),
    x = t(60529),
    k = t(86070);
   const y = { width: '1em', height: '1em' },
    _ = () => (0, k.jsx)(l.A, { ...y }),
    w = () => (0, k.jsx)(a.A, { ...y }),
    N = () => (0, k.jsx)(i.A, { ...y }),
    A = () => (0, k.jsx)(r.A, { ...y }),
    z = () => (0, k.jsx)(s.A, { ...y }),
    D = () => (0, k.jsx)(o.A, { ...y }),
    C = () => (0, k.jsx)(d.A, { ...y }),
    S = () => (0, k.jsx)(c.A, { ...y }),
    I = () => (0, k.jsx)(g.A, { ...y }),
    L = () => (0, k.jsx)(b.A, { ...y }),
    M = () => (0, k.jsx)(h.A, { ...y }),
    P = () => (0, k.jsx)(v.A, { ...y }),
    $ = () => (0, k.jsx)(u.A, { ...y }),
    W = () => (0, k.jsx)(m.A, { ...y }),
    E = () => (0, k.jsx)(p.A, { ...y }),
    T = () => (0, k.jsx)(f.A, { ...y }),
    F = () => (0, k.jsx)(j.A, { ...y }),
    H = () => (0, k.jsx)(x.A, { ...y });
  },
  38953(e, n, t) {
   t.d(n, { H: () => k });
   var l = t(28369),
    a = t(46447),
    i = t(13526),
    r = t(68148),
    s = t(9016),
    o = t(69303),
    d = t(91635),
    c = t(30734),
    g = t(30758),
    b = t(31186),
    h = t(65904),
    v = t.n(h),
    u = t(14881),
    m = t(46847),
    p = t(86070);
   const f = ({ children: e }) => (0, p.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   f.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, p.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(a.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, p.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: l, copyCode: a, defaultExpandedCode: r, designTokens: s }) => {
       const o = 'string' == typeof t ? t : l || '',
        d = 'string' == typeof t ? v().highlight(t, v().languages[e], e) : v().highlight(l || '', v().languages[e], e);
       return (0, p.jsxs)('div', { className: (0, i.A)('ma-canvas-astro', n), children: [(0, p.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: s, children: (0, p.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }) }), (0, p.jsx)(u.n, { children: (0, p.jsxs)(u.K, { label: 'Code', open: r, children: [(0, p.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, p.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: d } }) }), 'allow' === a && (0, p.jsx)(m.$, { 'data-copy-code': o, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: h = !0, children: v, container: u = 'document', language: m, designTokens: k }) => {
       const y = 'function' == typeof v ? v() : v,
        _ = 'function' == typeof e ? e() : (0, g.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : b.qV(_ || y),
        [N, A] = (0, g.useState)(w),
        [z, D] = (0, g.useState)(t);
       (0, g.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(w, { parser: m, plugins: [r.A, s.Ay, o.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const C = (0, g.useId)();
       let S = g.Fragment;
       return (
        'paragraph' === u ? (S = f) : 'document' === u ? (S = j) : 'surface' === u && (S = x),
        (0, p.jsxs)('div', {
         className: (0, i.A)('nlds-canvas'),
         children: [
          y && (0, p.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(S, { children: (0, p.jsx)(a.v$, { children: y }) }) }) }),
          h &&
           (0, p.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar'),
            children: (0, p.jsx)(a.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              D(!z);
             },
             'aria-expanded': z,
             'aria-controls': C,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, p.jsxs)('div', {
            className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !z,
            children: [
             (0, p.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: m, textContent: N, trim: !0 }),
             n &&
              (0, p.jsx)('div', {
               className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, p.jsx)(a.$n, {
                className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  46847(e, n, t) {
   t.d(n, { $: () => l.$n });
   var l = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => c, x: () => d });
   var l = t(30662),
    a = t(46447),
    i = t(13526),
    r = t(94988),
    s = t(30758),
    o = t(86070);
   const d = (0, s.createContext)({}),
    c = ({ title: e, appearance: n, description: t, children: s, figure: c }) => {
     const g = { do: 'Doen', dont: 'Niet doen' },
      b = c ? 'figure' : 'div',
      h = c ? 'figcaption' : 'div',
      v = 'string' == typeof t ? (0, o.jsx)(r.oz, { components: { a: a.N_ }, children: t }) : t;
     return (0, o.jsxs)(b, { className: (0, i.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, o.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(a.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, o.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, o.jsx)(l.jP, {}) }), (0, o.jsx)('span', { className: 'nlds-guideline__title', children: g.dont })] }), (0, o.jsx)(a.fz, { children: e })] }) : (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(a.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, o.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, o.jsx)(l.jK, {}) }), (0, o.jsx)('span', { className: 'nlds-guideline__title', children: g.do })] }), (0, o.jsx)(a.fz, { children: e })] }), v] }), (0, o.jsx)('div', { className: 'nlds-guideline__example', children: (0, o.jsx)(d.Provider, { value: { title: e, type: g[n] }, children: s }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => i });
   var l = t(86070),
    a = t(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  68214(e, n, t) {
   (t.r(n), t.d(n, { assets: () => g, contentTitle: () => c, default: () => v, frontMatter: () => d, metadata: () => l, toc: () => b }));
   const l = JSON.parse('{"id":"richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","title":"Decoratieve afbeeldingen","description":"Decoratieve afbeeldingen in NL Design System.","source":"@site/docs/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen.mdx","sourceDirName":"richtlijnen/content/afbeeldingen","slug":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen.mdx","tags":[],"version":"current","frontMatter":{"title":"Decoratieve afbeeldingen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Decoratieve afbeeldingen","pagination_label":"Decoratieve afbeeldingen","description":"Decoratieve afbeeldingen in NL Design System.","slug":"/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen","keywords":["afbeeldingen","alternatieve tekst","alt tekst","beeldbeschrijving","alt attribuut","tekstalternatief","tekstalternatieven","tekst alternatief","tekstueel alternatief","tekst alternatieven","toegankelijke afbeeldingen","decoratieve afbeelding","decoratieve afbeeldingen","decoratief"]},"sidebar":"richtlijnen","previous":{"title":"Waar moet een alternatieve tekst staan?","permalink":"/richtlijnen/content/afbeeldingen/alt-plaats"},"next":{"title":"Functionele afbeeldingen","permalink":"/richtlijnen/content/afbeeldingen/functionele-afbeeldingen"}}');
   var a = t(86070),
    i = t(18439),
    r = t(38953),
    s = t(56528),
    o = t(56672);
   const d = { title: 'Decoratieve afbeeldingen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Decoratieve afbeeldingen', pagination_label: 'Decoratieve afbeeldingen', description: 'Decoratieve afbeeldingen in NL Design System.', slug: '/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen', keywords: ['afbeeldingen', 'alternatieve tekst', 'alt tekst', 'beeldbeschrijving', 'alt attribuut', 'tekstalternatief', 'tekstalternatieven', 'tekst alternatief', 'tekstueel alternatief', 'tekst alternatieven', 'toegankelijke afbeeldingen', 'decoratieve afbeelding', 'decoratieve afbeeldingen', 'decoratief'] },
    c = 'Decoratieve afbeeldingen',
    g = {},
    b = [{ value: 'Overwegingen', id: 'overwegingen', level: 2 }, { value: 'Alternatieve teksten verbergen voor hulpsoftware', id: 'alternatieve-teksten-verbergen-voor-hulpsoftware', level: 2 }, { value: 'Sfeerbeelden', id: 'sfeerbeelden', level: 2 }, { value: 'Decoratieve afbeeldingen beschrijven', id: 'decoratieve-afbeeldingen-beschrijven', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'decoratieve-afbeeldingen', children: 'Decoratieve afbeeldingen' }) }), '\n', (0, a.jsx)(n.p, { children: 'Sommige afbeeldingen op een pagina geven je bezoeker niet m\xe9\xe9r informatie dan de informatie die ook al in de tekst staat. Dit noemen we decoratieve afbeeldingen.' }), '\n', (0, a.jsx)(n.p, { children: 'Voorbeelden van decoratieve afbeeldingen zijn:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Afbeeldingen in de achtergrond van een website.' }), '\n', (0, a.jsx)(n.li, { children: 'Iconen naast een tekst met dezelfde informatie.' }), '\n', (0, a.jsx)(n.li, { children: 'Sfeerbeelden.' }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Of een afbeelding decoratief is, hangt af van de context en het doel van de afbeelding. Een afbeelding van een koe kan decoratief zijn bij een verhaal over het boerenleven en heeft dan geen beschrijving nodig. In een artikel over verschillende koeienrassen geeft dezelfde afbeelding wel informatie en hoort er w\xe9l een alternatieve tekst bij.' }), '\n', (0, a.jsx)(n.h2, { id: 'overwegingen', children: 'Overwegingen' }), '\n', (0, a.jsx)(n.p, { children: 'Vragen die je jezelf kunt stellen als je een decoratieve afbeelding plaatst:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Waarom wil ik deze afbeelding plaatsen?' }), '\n', (0, a.jsx)(n.li, { children: 'Als ik de afbeelding weglaat, welke informatie gaat er dan verloren?' }), '\n', (0, a.jsx)(n.li, { children: 'Als ik deze afbeelding ni\xe9t zou kunnen gebruiken, zou ik dan een vervangende afbeelding zoeken?' }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'alternatieve-teksten-verbergen-voor-hulpsoftware', children: 'Alternatieve teksten verbergen voor hulpsoftware' }), '\n', (0, a.jsxs)(n.p, { children: ['Gaat er geen informatie verloren? Dan heeft de afbeelding geen beschrijving nodig. Je kunt er dan voor kiezen om de afbeelding te verbergen voor hulpsoftware. Er is dan geen informatie meer beschikbaar over de afbeelding: niet w\xe1t er op de afbeelding staat, maar zelfs niet d\xe1t er een afbeelding staat. Bezoekers die gebruik maken van bijvoorbeeld een ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' hoeven dan niet onnodig naar de beschrijving te luisteren. Zorg er wel voor dat je echt zeker weet dat de afbeelding niet informatief is voordat je deze keuze maakt.'] }), '\n', (0, a.jsx)(s.$, { appearance: 'dont', title: 'Informatieve afbeeldingen verbergen voor hulpsoftware door het alt-attribuut leeg te laten.', children: (0, a.jsx)(r.H, { language: 'html', defaultExpandedCode: !0, children: () => (0, a.jsx)(a.Fragment, { children: (0, a.jsx)('img', { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg', alt: '' }) }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'sfeerbeelden', children: 'Sfeerbeelden' }), '\n', (0, a.jsx)(n.p, { children: 'Je plaatst sfeerbeelden voornamelijk omdat ze passen bij de organisatie waar je voor werkt. Ze passen bijvoorbeeld bij jullie kernwaarden of de service die jullie verlenen. Sommige bezoekers die gebruikmaken van hulpsoftware willen daarom juist wel een beschrijving krijgen van decoratieve sfeerbeelden. Je kunt er dus ook voor kiezen om deze afbeeldingen wel een alternatieve tekst te geven. In dat geval beschrijf je inhoudelijk wat er op de afbeelding te zien is.' }), '\n', (0, a.jsx)(n.h2, { id: 'decoratieve-afbeeldingen-beschrijven', children: 'Decoratieve afbeeldingen beschrijven' }), '\n', (0, a.jsx)(n.p, { children: 'Het helpt om je voor te stellen dat je de afbeelding beschrijft aan iemand die hem niet kan zien, bijvoorbeeld iemand aan de telefoon. Denk na over welke kenmerken van een afbeelding belangrijk zijn om te benoemen.' }), '\n', (0, a.jsx)(n.p, { children: 'Mogelijke kenmerken:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'Het precieze aantal mensen, dieren of objecten in de afbeelding.' }), '\n', (0, a.jsx)(n.li, { children: 'De gezichtsuitdrukkingen van de mensen in de afbeelding.' }), '\n', (0, a.jsx)(n.li, { children: 'Het geslacht of gender van de mensen in de afbeelding.' }), '\n', (0, a.jsx)(n.li, { children: 'De huidskleur van de mensen in de afbeelding.' }), '\n', (0, a.jsx)(n.li, { children: 'De acties die de mensen in de afbeelding uitvoeren.' }), '\n', (0, a.jsx)(n.li, { children: "Wat er op de achtergrond te zien is en of het voor ziende bezoekers duidelijk is, of moet zijn, wat er te zien is. Benoem je 'de Eiffeltoren' of 'Een hoge metalen constructie die taps toeloopt, met een antenne er op.'?" }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Of iets relevant is om te benoemen ligt aan de context: het doel van de pagina en bijvoorbeeld de kern- en merkwaarden van je organisatie.' }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, a.jsx)(o.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
