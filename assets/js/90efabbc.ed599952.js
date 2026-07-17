'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [79837],
 {
  9386(e, l, n) {
   n.d(l, { H: () => b });
   var o = n(95822),
    r = n(46447),
    s = n(13526),
    t = n(68148),
    c = n(9016),
    a = n(69303),
    i = n(91635),
    d = n(30734),
    p = n(30758),
    u = n(31186),
    h = n(65904),
    m = n.n(h),
    g = n(51627),
    v = n(86070);
   const y = ({ children: e }) => (0, v.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, v.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, v.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const b = globalThis.isAstro
    ? ({ children: e, language: l }) => {
       const n = 'function' == typeof e ? e() : e,
        o = (0, u.qV)(n)
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
        r = m().highlight(o, m().languages[l], l);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: r } }) }) }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: h = !0, children: m, container: g = 'document', language: b, designTokens: k }) => {
       const f = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(_ || f),
        [A, w] = (0, p.useState)(N),
        [S, C] = (0, p.useState)(n);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: b, plugins: [t.A, c.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const z = (0, p.useId)();
       let R = p.Fragment;
       return (
        'paragraph' === g ? (R = y) : 'document' === g ? (R = x) : 'surface' === g && (R = j),
        (0, v.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          f && (0, v.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, v.jsx)(R, { children: (0, v.jsx)(r.v$, { children: f }) }) }) }),
          h &&
           (0, v.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(r.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!S);
             },
             'aria-expanded': S,
             'aria-controls': z,
             children: S ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, v.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !S,
            children: [
             (0, v.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: b, textContent: A, trim: !0 }),
             l &&
              (0, v.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(r.$n, {
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
  18439(e, l, n) {
   n.d(l, { R: () => t, x: () => c });
   var o = n(30758);
   const r = {},
    s = o.createContext(r);
   function t(e) {
    const l = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function c(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), o.createElement(s.Provider, { value: l }, e.children));
   }
  },
  51627(e, l, n) {
   n.d(l, { K: () => a, n: () => c });
   var o = n(13526),
    r = n(96345),
    s = n(37168),
    t = n(86070);
   const c = ({ className: e, ...l }) => {
     const n = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, t.jsx)('div', { className: n, children: l.children });
    },
    a = ({ className: e, label: l, heading: n, headingLevel: c, headingApperance: a, ...i }) => {
     const d = (0, o.A)('utrecht-accordion__section', e);
     return (0, t.jsxs)('details', { className: d, ...i, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(r.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [n && (0, t.jsx)(s.D, { level: c, appearance: a, children: n }), l] })] }) }), (0, t.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  72825(e, l, n) {
   (n.r(l), n.d(l, { assets: () => y, contentTitle: () => v, default: () => b, frontMatter: () => g, metadata: () => o, toc: () => x }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/colour-contrast/index","title":"Zorg voor een goed kleurcontrast van de placeholdertekst","description":"Richtlijnen voor voldoende kleurcontrast.","source":"@site/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/index.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/4-colour-contrast","slug":"/richtlijnen/formulieren/placeholders/kleurcontrast","permalink":"/richtlijnen/formulieren/placeholders/kleurcontrast","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/4-colour-contrast/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor een goed kleurcontrast van de placeholdertekst","title_sm":"Placeholder kleurcontrast","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder kleurcontrast","pagination_label":"Placeholder kleurcontrast","description":"Richtlijnen voor voldoende kleurcontrast.","slug":"/richtlijnen/formulieren/placeholders/kleurcontrast","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder kan verwarren","permalink":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen"},"next":{"title":"Toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/"}}');
   var r = n(86070),
    s = n(18439),
    t = n(78734),
    c = n(9386),
    a = n(88022);
   function i(e) {
    const l = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(a.$, { appearance: 'do', title: 'De placeholder opacity: 1 meegeven in de CSS.', children: (0, r.jsx)(c.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'auto', children: 'Welk auto rij je?' }) }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { className: 'nlds-opacity', id: 'auto', name: 'merk', type: 'text', placeholder: 'Vul een merknaam in' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
   function p(e) {
    const l = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', pre: 'pre', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.header, { children: (0, r.jsx)(l.h1, { id: 'zorg-voor-een-goed-kleurcontrast-van-de-placeholdertekst', children: 'Zorg voor een goed kleurcontrast van de placeholdertekst' }) }), '\n', (0, r.jsx)(l.p, { children: 'Kleurcontrast voor tekst ten opzichte van de achtergrond moet voldoen aan WCAG, dit geldt ook voor placeholders.' }), '\n', (0, r.jsxs)(l.p, { children: ['Sommige browsers zoals Firefox maken placeholdertekst standaard doorzichtiger. Voeg daarom in de CSS ', (0, r.jsx)(l.code, { children: 'opacity: 1' }), ' toe voor de placeholder.'] }), '\n', (0, r.jsx)(l.pre, { children: (0, r.jsx)(l.code, { className: 'language-css!', children: '::placeholder {\n    opacity: 1;\n    color: #757575;\n}\n' }) }), '\n', (0, r.jsxs)(l.p, { children: ['Zie ', (0, r.jsx)(l.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder', children: '::placeholder - CSS: Cascading Style Sheets' }), ', op MDN.'] }), '\n', (0, r.jsxs)(l.p, { children: [(0, r.jsx)(l.strong, { children: 'Tip:' }), ' De lichtste kleur grijs die je kunt gebruiken ten opzichte van een witte achtergrond is #757575 of rgb( 117, 117, 117).'] })] });
   }
   function u(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   function h(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(l.ul, { children: ['\n', (0, r.jsx)(l.li, { children: (0, r.jsx)(l.a, { href: '/wcag/1.4.3/', children: 'Succescriterium 1.4.3 Contrast (minimum)' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'Zorg voor een goed kleurcontrast van de placeholdertekst', title_sm: 'Placeholder kleurcontrast', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder kleurcontrast', pagination_label: 'Placeholder kleurcontrast', description: 'Richtlijnen voor voldoende kleurcontrast.', slug: '/richtlijnen/formulieren/placeholders/kleurcontrast', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    y = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function j(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(t.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j();
   }
  },
  78734(e, l, n) {
   n.d(l, { Ay: () => c, RM: () => s });
   var o = n(86070),
    r = n(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  88022(e, l, n) {
   n.d(l, { $: () => p, x: () => d });
   var o = n(4077),
    r = n(58315),
    s = n(46447),
    t = n(13526),
    c = n(45980),
    a = n(30758),
    i = n(86070);
   const d = (0, a.createContext)({}),
    p = ({ title: e, appearance: l, description: n, children: a, figure: p }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div',
      g = 'string' == typeof n ? (0, i.jsx)(c.oz, { children: n }) : n;
     return (0, i.jsxs)(h, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(s.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: u[l] }, children: a }) })] });
    };
  },
  95822(e, l, n) {
   n.d(l, { M: () => i });
   var o = n(46447),
    r = n(16194),
    s = n(30758),
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
    const { title: p, type: u } = (0, s.useContext)(t.x),
     h = (0, s.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(r.f4, { theme: c, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: r, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': h, style: l, children: n.map((l, n) => (0, a.jsxs)('span', { ...r({ line: l }), children: [e && (0, a.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, a.jsx)('span', { ...s({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
 },
]);
