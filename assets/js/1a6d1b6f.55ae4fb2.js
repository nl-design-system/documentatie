'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [27938],
 {
  15638(e, n, o) {
   o.d(n, { $: () => u, x: () => d });
   var l = o(4077),
    r = o(58315),
    t = o(46447),
    s = o(13526),
    c = o(9547),
    a = o(30758),
    i = o(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: n, description: o, children: a, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      g = 'string' == typeof o ? (0, i.jsx)(c.oz, { children: o }) : o;
     return (0, i.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(t.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(t.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => s, x: () => c });
   var l = o(30758);
   const r = {},
    t = l.createContext(r);
   function s(e) {
    const n = l.useContext(t);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), l.createElement(t.Provider, { value: n }, e.children));
   }
  },
  45436(e, n, o) {
   (o.r(n), o.d(n, { assets: () => b, contentTitle: () => v, default: () => j, frontMatter: () => g, metadata: () => l, toc: () => y }));
   const l = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/placeholder-contrast/README","title":"Geef placeholders voldoende kleurcontrast | Visueel ontwerp van een formulier | Richtlijnen","description":"Richtlijnen om met contrast duidelijk aan te geven waar de placeholder van een formulierveld is.","source":"@site/docs/richtlijnen/formulieren/visual-design/3-placeholder-contrast/README.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/3-placeholder-contrast","slug":"/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/3-placeholder-contrast/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef placeholders voldoende kleurcontrast | Visueel ontwerp van een formulier | Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder goed zichtbaar","pagination_label":"Placeholder goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven waar de placeholder van een formulierveld is.","slug":"/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Tekst goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar"},"next":{"title":"Focus goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar"}}');
   var r = o(86070),
    t = o(18439),
    s = o(78734),
    c = o(58639),
    a = o(15638);
   o(46447);
   function i(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(a.$, { appearance: 'do', title: 'Maak de placeholder goed leesbaar door voldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 6.28:1](/contrast/?color=%23606060&background-color=%23ffffff)', children: (0, r.jsx)(c.H, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-placeholder-color': '#606060' }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)('input', { placeholder: 'Zoeken' }) }) }) }), '\n', (0, r.jsx)(a.$, { appearance: 'dont', title: 'Maak de placeholder slecht zichtbaar door te laag contrast.', description: 'Dit voorbeeld heeft [een contrast van 3.54:1](/contrast/?color=%23888888&background-color=%23ffffff)', children: (0, r.jsx)(c.H, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-placeholder-color': '#888888' }, children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)('input', { placeholder: 'Zoeken' }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
   function u(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'geef-placeholders-voldoende-kleurcontrast', children: 'Geef placeholders voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(n.p, { children: 'Ook het kleurcontrast van de tekst van placeholders ten opzichte van de achtergrondkleur moet 4,5:1 of hoger zijn.' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': sommige browsers geven een placeholder lichter weer dan in de CSS is bepaald. Dit wordt verder uitgelegd bij de richtlijn ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/kleurcontrast/', children: 'Zorg voor een goed kleurcontrast van de placeholdertekst' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'Succescriterium 1.4.3 Contrast (minimum)' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'Geef placeholders voldoende kleurcontrast | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder goed zichtbaar', pagination_label: 'Placeholder goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de placeholder van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    b = {},
    y = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function f(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(f, { ...e }) }) : f();
   }
  },
  58639(e, n, o) {
   o.d(n, { H: () => b });
   var l = o(69284),
    r = o(46447),
    t = o(13526),
    s = o(68148),
    c = o(9016),
    a = o(69303),
    i = o(91635),
    d = o(30734),
    u = o(30758),
    p = o(31186),
    h = o(86070);
   const m = ({ children: e }) => (0, h.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const g = ({ children: e }) => (0, h.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   g.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, h.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const b = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: b = !0, children: y, container: f = 'document', language: j, designTokens: x }) => {
    const k = 'function' == typeof y ? y() : y,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : p.qV(_ || k),
     [z, N] = (0, u.useState)(w),
     [A, C] = (0, u.useState)(o);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: j, plugins: [s.A, c.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const R = (0, u.useId)();
    let S = u.Fragment;
    return (
     'paragraph' === f ? (S = m) : 'document' === f ? (S = g) : 'surface' === f && (S = v),
     (0, h.jsxs)('div', {
      className: (0, t.A)('nlds-canvas'),
      children: [
       k && (0, h.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, h.jsx)(S, { children: (0, h.jsx)(r.v$, { children: k }) }) }) }),
       b &&
        (0, h.jsx)('div', {
         className: (0, t.A)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(r.$n, {
          className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!A);
          },
          'aria-expanded': A,
          'aria-controls': R,
          children: A ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, h.jsxs)('div', {
         className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !A,
         children: [
          (0, h.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: z, trim: !0 }),
          n &&
           (0, h.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(r.$n, {
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
  69284(e, n, o) {
   o.d(n, { M: () => i });
   var l = o(46447),
    r = o(16194),
    t = o(30758),
    s = o(15638);
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
   var a = o(86070);
   function i({ lineNumber: e, syntax: n, textContent: o, trim: i }) {
    let d = o;
    const { title: u, type: p } = (0, t.useContext)(s.x),
     h = (0, t.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(r.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: r, getTokenProps: t }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...r({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  78734(e, n, o) {
   o.d(n, { Ay: () => c, RM: () => t });
   var l = o(86070),
    r = o(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
