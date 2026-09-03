'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65844],
 {
  15175(e, n, t) {
   t.d(n, { M: () => i });
   var o = t(46447),
    a = t(16194),
    l = t(30758),
    s = t(51519);
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
   var c = t(86070);
   function i({ lineNumber: e, syntax: n, textContent: t, trim: i }) {
    let d = t;
    const { title: p, type: h } = (0, l.useContext)(s.x),
     u = (0, l.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(a.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: a, getTokenProps: l }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(o.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: t.map((n, t) => (0, c.jsxs)('span', { ...a({ line: n }), children: [e && (0, c.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => r });
   var o = t(30758);
   const a = {},
    l = o.createContext(a);
   function s(e) {
    const n = o.useContext(l);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), o.createElement(l.Provider, { value: n }, e.children));
   }
  },
  49539(e, n, t) {
   t.d(n, { Ay: () => r, RM: () => l });
   var o = t(86070),
    a = t(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  51519(e, n, t) {
   t.d(n, { $: () => p, x: () => d });
   var o = t(4077),
    a = t(58315),
    l = t(46447),
    s = t(13526),
    r = t(66116),
    c = t(30758),
    i = t(86070);
   const d = (0, c.createContext)({}),
    p = ({ title: e, appearance: n, description: t, children: c, figure: p }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div',
      b = 'string' == typeof t ? (0, i.jsx)(r.oz, { components: { a: l.N_ }, children: t }) : t;
     return (0, i.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(a.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(l.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(l.fz, { children: e })] }), b] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: c }) })] });
    };
  },
  70348(e, n, t) {
   t.d(n, { K: () => i, n: () => c });
   var o = t(13526),
    a = t(30758),
    l = t(96345),
    s = t(37168),
    r = t(86070);
   const c = (0, a.forwardRef)(({ as: e, className: n, children: t, ...a }, l) => {
     const s = e || 'div',
      c = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, r.jsx)(s, { ref: l, className: c, ...a, children: t });
    }),
    i = ({ className: e, classNamePanel: n, label: t, heading: a, headingLevel: c, headingApperance: i, ...d }) => {
     const p = (0, o.A)('utrecht-accordion__section', e),
      h = (0, o.A)('utrecht-accordion__panel', n);
     return (0, r.jsxs)('details', { className: p, ...d, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(l.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [a && (0, r.jsx)(s.D, { level: c, appearance: i, children: a }), t] })] }) }), (0, r.jsx)('div', { className: h, children: d.children })] });
    };
  },
  80731(e, n, t) {
   t.d(n, { H: () => x });
   var o = t(15175),
    a = t(46447),
    l = t(13526),
    s = t(68148),
    r = t(9016),
    c = t(69303),
    i = t(91635),
    d = t(30734),
    p = t(30758),
    h = t(31186),
    u = t(65904),
    m = t.n(u),
    b = t(70348),
    g = t(89974),
    j = t(86070);
   const k = ({ children: e }) => (0, j.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(a.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   k.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, j.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(a.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, j.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const x = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: o, copyCode: a, defaultExpandedCode: s, designTokens: r }) => {
       const c = 'string' == typeof t ? t : o || '',
        i = 'string' == typeof t ? m().highlight(t, m().languages[e], e) : m().highlight(o || '', m().languages[e], e);
       return (0, j.jsxs)('div', { className: (0, l.A)('ma-canvas-astro', n), children: [(0, j.jsx)('div', { className: 'voorbeeld-theme', style: r, children: (0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: c } }) }), (0, j.jsx)(b.n, { children: (0, j.jsxs)(b.K, { label: 'Code', open: s, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: i } }) }), 'allow' === a && (0, j.jsx)(g.$, { 'data-copy-code': c, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: u = !0, children: m, container: b = 'document', language: g, designTokens: x }) => {
       const f = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || f),
        [w, z] = (0, p.useState)(N),
        [A, C] = (0, p.useState)(t);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: g, plugins: [s.A, r.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [N]);
       const S = (0, p.useId)();
       let K = p.Fragment;
       return (
        'paragraph' === b ? (K = k) : 'document' === b ? (K = v) : 'surface' === b && (K = y),
        (0, j.jsxs)('div', {
         className: (0, l.A)('nlds-canvas'),
         children: [
          f && (0, j.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, j.jsx)(K, { children: (0, j.jsx)(a.v$, { children: f }) }) }) }),
          u &&
           (0, j.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(a.$n, {
             className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
            className: (0, l.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, j.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: w, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(a.$n, {
                className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  86954(e, n, t) {
   (t.r(n), t.d(n, { assets: () => p, contentTitle: () => d, default: () => m, frontMatter: () => i, metadata: () => o, toc: () => h }));
   const o = JSON.parse('{"id":"richtlijnen/content/office-docs","title":"Kantoorbestanden","description":"...","source":"@site/docs/richtlijnen/content/office-docs.mdx","sourceDirName":"richtlijnen/content","slug":"/richtlijnen/content/kantoorbestanden","permalink":"/richtlijnen/content/kantoorbestanden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/office-docs.mdx","tags":[],"version":"current","frontMatter":{"title":"Kantoorbestanden","hide_title":true,"hide_table_of_contents":false,"navigation_order":4,"sidebar_label":"Kantoorbestanden","pagination_label":"Kantoorbestanden","description":"...","slug":"/richtlijnen/content/kantoorbestanden","keywords":["links","documenten"]},"sidebar":"richtlijnen","previous":{"title":"Transcript","permalink":"/richtlijnen/content/video/transcript"},"next":{"title":"Introductie","permalink":"/richtlijnen/formulieren"}}');
   var a = t(86070),
    l = t(18439),
    s = t(80731),
    r = t(51519),
    c = t(49539);
   const i = { title: 'Kantoorbestanden', hide_title: !0, hide_table_of_contents: !1, navigation_order: 4, sidebar_label: 'Kantoorbestanden', pagination_label: 'Kantoorbestanden', description: '...', slug: '/richtlijnen/content/kantoorbestanden', keywords: ['links', 'documenten'] },
    d = 'Kantoorbestanden',
    p = {},
    h = [{ value: 'Ook kantoorbestanden moeten toegankelijk zijn', id: 'ook-kantoorbestanden-moeten-toegankelijk-zijn', level: 2 }, { value: 'Waar kun je als contentmaker op letten?', id: 'waar-kun-je-als-contentmaker-op-letten', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...c.RM];
   function u(e) {
    const n = { a: 'a', br: 'br', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'kantoorbestanden', children: 'Kantoorbestanden' }) }), '\n', (0, a.jsx)(n.p, { children: 'Soms link je naar een bestand buiten de webpagina \u2014 bijvoorbeeld een PDF of Word-bestand. Maar zulke bestanden zijn niet altijd goed toegankelijk. Waarschijnlijk maak je deze bestanden niet zelf, maar publiceer je ze w\xe9l. Daarom is het belangrijk dat je alert bent op de toegankelijkheid ervan.' }), '\n', (0, a.jsx)(n.h2, { id: 'ook-kantoorbestanden-moeten-toegankelijk-zijn', children: 'Ook kantoorbestanden moeten toegankelijk zijn' }), '\n', (0, a.jsx)(n.p, { children: 'Kantoorbestanden die je op de website zet of waar je naar verwijst, zoals pdf\u2019s of Word-bestanden, moeten net zo goed toegankelijk zijn als de rest van je content. Denk aan koppenstructuur, duidelijke leesvolgorde, alternatieve teksten en toegankelijke formulieren. Als contentmaker kun je vaak niet alles zelf controleren, maar je kunt w\xe9l kritisch meekijken en vragen stellen.' }), '\n', (0, a.jsx)(n.h2, { id: 'waar-kun-je-als-contentmaker-op-letten', children: 'Waar kun je als contentmaker op letten?' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: ['Is het echt nodig om een kantoorbestand te gebruiken?', (0, a.jsx)(n.br, {}), '\n', 'Kun je de inhoud ook gewoon als webpagina aanbieden? Dat is bijna altijd gebruiksvriendelijker \xe9n beter toegankelijk.'] }), '\n', (0, a.jsxs)(n.li, { children: ['Is het kantoorbestand goed opgemaakt?', (0, a.jsx)(n.br, {}), '\n', 'Vraag na of de maker het kantoorbestand toegankelijk heeft gemaakt. Gebruik hierbij ', (0, a.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/aan-de-slag/tips/kantoorbestanden', children: 'de documentatie over kantoorbestanden van DigiToegankelijk' }), '.'] }), '\n', (0, a.jsxs)(n.li, { children: ['Heb je een duidelijke linktekst gebruikt?', (0, a.jsx)(n.br, {}), '\n', 'Vermeld wat voor document het is (zoals \u2018pdf\u2019 of \u2018Word\u2019) en geef aan waar het over gaat. Bijvoorbeeld:\nJaarverslag 2024 (pdf) of Aanvraagformulier (Word)'] }), '\n', (0, a.jsxs)(n.li, { children: ['Bied je alternatieven aan?', (0, a.jsx)(n.br, {}), '\n', 'Kan iemand die het kantoorbestand niet kan openen, de informatie op een andere manier krijgen? Biedt de inhoud bijvoorbeeld ook als een webpagina aan, of biedt contactgegevens aan waarmee bezoekers de informatie kunnen opvragen.'] }), '\n'] }), '\n', (0, a.jsx)(r.$, { appearance: 'do', title: 'In de linktekst vermelden om wat voor document het gaat', children: (0, a.jsx)(s.H, { language: 'html', children: () => (0, a.jsx)(a.Fragment, { children: (0, a.jsx)('a', { href: 'https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link', children: 'Download de rapportage digitale toegankelijkheid 2023 (pdf 400 kB)' }) }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(n.p, { children: 'Ook kantoorbestanden zoals pdf\u2019s vallen onder dezelfde toegankelijkheidsprincipes als webpagina\u2019s. Veel verschillende WCAG-richtlijnen kunnen daarom van toepassing zijn. Hieronder staan een paar succescriteria waarop het het vaakst misgaat in bestanden:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Successcriterium 1.1.1 Niet-tekstuele content' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Successcriterium 1.3.1 Info en relaties' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/2.4.2/', children: 'Successcriterium 2.4.2 Paginatitel' }) }), '\n'] }), '\n', (0, a.jsx)(c.Ay, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(u, { ...e }) }) : u(e);
   }
  },
  89974(e, n, t) {
   t.d(n, { $: () => o.$n });
   var o = t(50805);
  },
 },
]);
