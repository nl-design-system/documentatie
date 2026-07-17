'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [22144],
 {
  2825(e, l, n) {
   (n.r(l), n.d(l, { assets: () => b, contentTitle: () => v, default: () => y, frontMatter: () => g, metadata: () => r, toc: () => j }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/link/above-field/index","title":"Plaats de link boven het gerelateerde formulierveld","description":"Richtlijnen voor link boven het gerelateerde formulierveld.","source":"@site/docs/richtlijnen/formulieren/link/1-above-field/index.mdx","sourceDirName":"richtlijnen/formulieren/link/1-above-field","slug":"/richtlijnen/formulieren/links/plaatsing","permalink":"/richtlijnen/formulieren/links/plaatsing","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/1-above-field/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaats de link boven het gerelateerde formulierveld","title_sm":"Plaatsing link","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing link","pagination_label":"Plaatsing link","description":"Richtlijnen voor link boven het gerelateerde formulierveld.","slug":"/richtlijnen/formulieren/links/plaatsing","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Links in een formulier","permalink":"/richtlijnen/formulieren/links/"},"next":{"title":"Geen link in label","permalink":"/richtlijnen/formulieren/links/niet-in-label"}}');
   var s = n(86070),
    o = n(18439),
    t = n(78734),
    i = n(9386),
    a = n(88022);
   function c(e) {
    const l = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'De link boven het gerelateerde invoerveld plaatsen.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('p', { children: [(0, s.jsx)('a', { href: '#', children: 'Voorwaarden vrijwilligerswerk' }), '.'] }), (0, s.jsxs)('p', { children: [(0, s.jsx)('input', { type: 'checkbox', name: 'vrijwilliger', id: 'vrijwilliger' }), (0, s.jsx)('label', { htmlFor: 'vrijwilliger', children: 'Ik wil vrijwilliger worden' })] })] }) }) }), '\n', (0, s.jsx)(a.$, { appearance: 'dont', title: 'De link onder het gerelateerde invoerveld plaatsen.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('p', { children: [(0, s.jsx)('input', { type: 'checkbox', name: 'vrijwilliger', id: 'vrijwilliger' }), (0, s.jsx)('label', { htmlFor: 'vrijwilliger', children: 'Ik wil vrijwilliger worden' })] }), (0, s.jsxs)('p', { children: [(0, s.jsx)('a', { href: '#', children: 'Voorwaarden vrijwilligerswerk' }), '.'] })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const l = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.header, { children: (0, s.jsx)(l.h1, { id: 'plaats-de-link-boven-het-gerelateerde-formulierveld', children: 'Plaats de link boven het gerelateerde formulierveld' }) }), '\n', (0, s.jsx)(l.p, { children: 'Gebruikers lezen van boven naar beneden. Dan is het fijn als eerst de link met meer informatie komt, en daarna pas het gerelateerde formulierveld. Geef dus eerst de link met de informatie die nodig is om een keuze te maken en dan pas het formulierveld waarop deze informatie van toepassing is.' }), '\n', (0, s.jsx)(l.p, { children: 'Je kunt informatie ook boven het formulier vermelden, zodat gebruikers alvast voorbereid zijn.\nBijvoorbeeld als de gebruiker een paspoort- of burgerservicenummer nodig heeft, of als er een tijdslimiet op het invullen van het formulier staat ingesteld.' }), '\n', (0, s.jsxs)(l.p, { children: [(0, s.jsx)(l.strong, { children: 'Let op' }), ': de link moet niet alleen visueel, maar ook in de DOM (Document Object Modal) in de goede volgorde staan.\nDus een link visueel verplaatsen via bijvoorbeeld flex-order is niet voldoende. De DOM-order is echt belangrijk voor gebruikers van ', (0, s.jsx)(l.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(l.ul, { children: ['\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Plaats de link boven het gerelateerde formulierveld', title_sm: 'Plaatsing link', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing link', pagination_label: 'Plaatsing link', description: 'Richtlijnen voor link boven het gerelateerde formulierveld.', slug: '/richtlijnen/formulieren/links/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    b = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function x(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(h, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x();
   }
  },
  9386(e, l, n) {
   n.d(l, { H: () => y });
   var r = n(95822),
    s = n(46447),
    o = n(13526),
    t = n(68148),
    i = n(9016),
    a = n(69303),
    c = n(91635),
    d = n(30734),
    u = n(30758),
    h = n(31186),
    p = n(65904),
    m = n.n(p),
    g = n(51627),
    v = n(86070);
   const b = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: l }) => {
       const n = 'function' == typeof e ? e() : e,
        r = (0, h.qV)(n)
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
        s = m().highlight(r, m().languages[l], l);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: r } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: p = !0, children: m, container: g = 'document', language: y, designTokens: f }) => {
       const k = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || k),
        [N, A] = (0, u.useState)(w),
        [z, C] = (0, u.useState)(n);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: y, plugins: [t.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let P = u.Fragment;
       return (
        'paragraph' === g ? (P = b) : 'document' === g ? (P = j) : 'surface' === g && (P = x),
        (0, v.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          k && (0, v.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(P, { children: (0, v.jsx)(s.v$, { children: k }) }) }) }),
          p &&
           (0, v.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(s.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, v.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, v.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: N, trim: !0 }),
             l &&
              (0, v.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(s.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, l, n) {
   n.d(l, { R: () => t, x: () => i });
   var r = n(30758);
   const s = {},
    o = r.createContext(s);
   function t(e) {
    const l = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function i(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), r.createElement(o.Provider, { value: l }, e.children));
   }
  },
  51627(e, l, n) {
   n.d(l, { K: () => a, n: () => i });
   var r = n(13526),
    s = n(96345),
    o = n(37168),
    t = n(86070);
   const i = ({ className: e, ...l }) => {
     const n = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, t.jsx)('div', { className: n, children: l.children });
    },
    a = ({ className: e, label: l, heading: n, headingLevel: i, headingApperance: a, ...c }) => {
     const d = (0, r.A)('utrecht-accordion__section', e);
     return (0, t.jsxs)('details', { className: d, ...c, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(s.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [n && (0, t.jsx)(o.D, { level: i, appearance: a, children: n }), l] })] }) }), (0, t.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, l, n) {
   n.d(l, { Ay: () => i, RM: () => o });
   var r = n(86070),
    s = n(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  88022(e, l, n) {
   n.d(l, { $: () => u, x: () => d });
   var r = n(4077),
    s = n(58315),
    o = n(46447),
    t = n(13526),
    i = n(45980),
    a = n(30758),
    c = n(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: l, description: n, children: a, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      g = 'string' == typeof n ? (0, c.jsx)(i.oz, { children: n }) : n;
     return (0, c.jsxs)(p, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(o.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[l] }, children: a }) })] });
    };
  },
  95822(e, l, n) {
   n.d(l, { M: () => c });
   var r = n(46447),
    s = n(16194),
    o = n(30758),
    t = n(88022);
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
   var a = n(86070);
   function c({ lineNumber: e, syntax: l, textContent: n, trim: c }) {
    let d = n;
    const { title: u, type: h } = (0, o.useContext)(t.x),
     p = (0, o.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(s.f4, { theme: i, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: s, getTokenProps: o }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: l, children: n.map((l, n) => (0, a.jsxs)('span', { ...s({ line: l }), children: [e && (0, a.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, a.jsx)('span', { ...o({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
 },
]);
