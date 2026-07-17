'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [7966],
 {
  9386(e, l, n) {
   n.d(l, { H: () => v });
   var s = n(95822),
    o = n(46447),
    r = n(13526),
    t = n(68148),
    c = n(9016),
    a = n(69303),
    i = n(91635),
    d = n(30734),
    u = n(30758),
    h = n(31186),
    p = n(65904),
    m = n.n(p),
    b = n(51627),
    j = n(86070);
   const g = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, j.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const v = globalThis.isAstro
    ? ({ children: e, language: l }) => {
       const n = 'function' == typeof e ? e() : e,
        s = (0, h.qV)(n)
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
        o = m().highlight(s, m().languages[l], l);
       return (0, j.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: s } }), (0, j.jsx)(b.n, { children: (0, j.jsx)(b.K, { label: 'Code', children: (0, j.jsx)('pre', { className: 'language-html nl-code-block', children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: o } }) }) }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: p = !0, children: m, container: b = 'document', language: v, designTokens: f }) => {
       const k = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || k),
        [z, w] = (0, u.useState)(N),
        [A, C] = (0, u.useState)(n);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [t.A, c.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, u.useId)();
       let P = u.Fragment;
       return (
        'paragraph' === b ? (P = g) : 'document' === b ? (P = x) : 'surface' === b && (P = y),
        (0, j.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          k && (0, j.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, j.jsx)(P, { children: (0, j.jsx)(o.v$, { children: k }) }) }) }),
          p &&
           (0, j.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(o.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
           (0, j.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, j.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: z, trim: !0 }),
             l &&
              (0, j.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(o.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, l, n) {
   n.d(l, { R: () => t, x: () => c });
   var s = n(30758);
   const o = {},
    r = s.createContext(o);
   function t(e) {
    const l = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function c(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), s.createElement(r.Provider, { value: l }, e.children));
   }
  },
  51627(e, l, n) {
   n.d(l, { K: () => a, n: () => c });
   var s = n(13526),
    o = n(96345),
    r = n(37168),
    t = n(86070);
   const c = ({ className: e, ...l }) => {
     const n = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, t.jsx)('div', { className: n, children: l.children });
    },
    a = ({ className: e, label: l, heading: n, headingLevel: c, headingApperance: a, ...i }) => {
     const d = (0, s.A)('utrecht-accordion__section', e);
     return (0, t.jsxs)('details', { className: d, ...i, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(o.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [n && (0, t.jsx)(r.D, { level: c, appearance: a, children: n }), l] })] }) }), (0, t.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  69024(e, l, n) {
   (n.r(l), n.d(l, { assets: () => g, contentTitle: () => j, default: () => v, frontMatter: () => b, metadata: () => s, toc: () => x }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/search/index","title":"Placeholders en de zoekfunctie","description":"Richtlijnen over placeholder gebruiken in de zoekfunctie.","source":"@site/docs/richtlijnen/formulieren/placeholder/2-search/index.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/2-search","slug":"/richtlijnen/formulieren/placeholders/zoekfunctie","permalink":"/richtlijnen/formulieren/placeholders/zoekfunctie","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/2-search/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Placeholders en de zoekfunctie","title_sm":"Placeholder bij zoekfunctie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder bij zoekfunctie","pagination_label":"Placeholder bij zoekfunctie","description":"Richtlijnen over placeholder gebruiken in de zoekfunctie.","slug":"/richtlijnen/formulieren/placeholders/zoekfunctie","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder is geen label","permalink":"/richtlijnen/formulieren/placeholders/niet-als-label"},"next":{"title":"Placeholder kan verwarren","permalink":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen"}}');
   var o = n(86070),
    r = n(18439),
    t = n(78734),
    c = n(9386),
    a = n(88022);
   function i(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(a.$, { appearance: 'do', title: 'De placeholder samen met tekst van de submitbutton gebruiken zichtbaar label in een kort zoekformulier.', children: (0, o.jsx)(c.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { className: 'sr-only', htmlFor: 'header-search', children: 'Zoek' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'header-search', placeholder: 'Zoek', type: 'search' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('button', { children: 'Zoek' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i();
   }
   function u(e) {
    const l = { h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.header, { children: (0, o.jsx)(l.h1, { id: 'placeholders-en-de-zoekfunctie', children: 'Placeholders en de zoekfunctie' }) }), '\n', (0, o.jsx)(l.p, { children: 'Een gebruikelijke opzet voor een zoekoptie in de header is:' }), '\n', (0, o.jsxs)(l.ul, { children: ['\n', (0, o.jsx)(l.li, { children: 'een onzichtbaar label;' }), '\n', (0, o.jsx)(l.li, { children: 'de placeholder als zichtbaar label;' }), '\n', (0, o.jsx)(l.li, { children: 'rechts naast het formulierveld een submitbutton met de tekst "Zoek" en/of een icoontje van een loopje.' }), '\n'] }), '\n', (0, o.jsx)(l.p, { children: 'Hierbij wordt het zoekloopje als zichtbaar label gebruikt over wat in te vullen als de placeholder verdwijnt. Omdat dit een veel gebruikte constructie is, is dit prima. Het is door buttontekst of icoon voldoende duidelijk wat er wordt verwacht.' })] });
   }
   function h(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(l.ul, { children: ['\n', (0, o.jsx)(l.li, { children: (0, o.jsx)(l.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n', (0, o.jsx)(l.li, { children: (0, o.jsx)(l.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(l.li, { children: (0, o.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(l.li, { children: (0, o.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   const b = { title: 'Placeholders en de zoekfunctie', title_sm: 'Placeholder bij zoekfunctie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder bij zoekfunctie', pagination_label: 'Placeholder bij zoekfunctie', description: 'Richtlijnen over placeholder gebruiken in de zoekfunctie.', slug: '/richtlijnen/formulieren/placeholders/zoekfunctie', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    g = {},
    x = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function y(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(t.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(y, { ...e }) }) : y();
   }
  },
  78734(e, l, n) {
   n.d(l, { Ay: () => c, RM: () => r });
   var s = n(86070),
    o = n(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: l } = { ...(0, o.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
  },
  88022(e, l, n) {
   n.d(l, { $: () => u, x: () => d });
   var s = n(4077),
    o = n(58315),
    r = n(46447),
    t = n(13526),
    c = n(45980),
    a = n(30758),
    i = n(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: l, description: n, children: a, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      b = 'string' == typeof n ? (0, i.jsx)(c.oz, { children: n }) : n;
     return (0, i.jsxs)(p, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(r.fz, { children: e })] }), b] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: h[l] }, children: a }) })] });
    };
  },
  95822(e, l, n) {
   n.d(l, { M: () => i });
   var s = n(46447),
    o = n(16194),
    r = n(30758),
    t = n(88022);
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
   var a = n(86070);
   function i({ lineNumber: e, syntax: l, textContent: n, trim: i }) {
    let d = n;
    const { title: u, type: h } = (0, r.useContext)(t.x),
     p = (0, r.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(o.f4, { theme: c, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: o, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(s.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: l, children: n.map((l, n) => (0, a.jsxs)('span', { ...o({ line: l }), children: [e && (0, a.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, a.jsx)('span', { ...r({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
 },
]);
