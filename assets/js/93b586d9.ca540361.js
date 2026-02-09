'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [34875],
 {
  15638(e, n, l) {
   l.d(n, { $: () => d, x: () => a });
   var o = l(4077),
    r = l(58315),
    t = l(46447),
    s = l(13526),
    c = l(30758),
    i = l(86070);
   const a = (0, c.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: c, figure: d }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      p = d ? 'figcaption' : 'div';
     return (0, i.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(t.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(t.fz, { children: e })] }), l] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(a.Provider, { value: { title: e, type: u[n] }, children: c }) })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => s, x: () => c });
   var o = l(30758);
   const r = {},
    t = o.createContext(r);
   function s(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), o.createElement(t.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, l) {
   l.d(n, { H: () => j });
   var o = l(69284),
    r = l(46447),
    t = l(13526),
    s = l(68148),
    c = l(9016),
    i = l(69303),
    a = l(91635),
    d = l(30734),
    u = l(30758),
    h = l(31186),
    p = l(86070);
   const m = ({ children: e }) => (0, p.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, p.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, p.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const j = ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: j = !0, children: v, container: g = 'document', language: x, designTokens: f }) => {
    const k = 'function' == typeof v ? v() : v,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     z = 'string' == typeof e ? e : h.qV(_ || k),
     [w, N] = (0, u.useState)(z),
     [A, C] = (0, u.useState)(l);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(z, { parser: x, plugins: [s.A, c.Ay, i.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [z]);
    const S = (0, u.useId)();
    let P = u.Fragment;
    return (
     'paragraph' === g ? (P = m) : 'document' === g ? (P = b) : 'surface' === g && (P = y),
     (0, p.jsxs)('div', {
      className: (0, t.A)('nlds-canvas'),
      children: [
       k && (0, p.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, p.jsx)(P, { children: (0, p.jsx)(r.v$, { children: k }) }) }) }),
       j &&
        (0, p.jsx)('div', {
         className: (0, t.A)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(r.$n, {
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
       j &&
        (0, p.jsxs)('div', {
         className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !A,
         children: [
          (0, p.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: w, trim: !0 }),
          n &&
           (0, p.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(r.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  59845(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => y, default: () => x, frontMatter: () => b, metadata: () => o, toc: () => v }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/search/README","title":"Placeholders en de zoekfunctie \xb7 Placeholders in een formulier \xb7 Richtlijnen","description":"Richtlijnen over placeholder gebruiken in de zoekfunctie.","source":"@site/docs/richtlijnen/formulieren/placeholder/2-search/README.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/2-search","slug":"/richtlijnen/formulieren/placeholders/zoekfunctie","permalink":"/richtlijnen/formulieren/placeholders/zoekfunctie","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/2-search/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Placeholders en de zoekfunctie \xb7 Placeholders in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder bij zoekfunctie","pagination_label":"Placeholder bij zoekfunctie","description":"Richtlijnen over placeholder gebruiken in de zoekfunctie.","slug":"/richtlijnen/formulieren/placeholders/zoekfunctie","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder is geen label","permalink":"/richtlijnen/formulieren/placeholders/niet-als-label"},"next":{"title":"Placeholder kan verwarren","permalink":"/richtlijnen/formulieren/placeholders/verwarring-voorkomen"}}');
   var r = l(86070),
    t = l(18439),
    s = l(78734),
    c = l(58639),
    i = l(15638);
   function a(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(i.$, { appearance: 'do', title: 'De placeholder samen met tekst van de submitbutton gebruiken zichtbaar label in een kort zoekformulier.', children: (0, r.jsx)(c.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('label', { className: 'sr-only', htmlFor: 'header-search', children: 'Zoek' }), (0, r.jsx)('input', { id: 'header-search', placeholder: 'Zoek', type: 'search' }), (0, r.jsx)('button', { children: 'Zoek' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a();
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'placeholders-en-de-zoekfunctie', children: 'Placeholders en de zoekfunctie' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een gebruikelijke opzet voor een zoekoptie in de header is:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'een onzichtbaar label;' }), '\n', (0, r.jsx)(n.li, { children: 'de placeholder als zichtbaar label;' }), '\n', (0, r.jsx)(n.li, { children: 'rechts naast het formulierveld een submitbutton met de tekst "Zoek" en/of een icoontje van een loopje.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Hierbij wordt het zoekloopje als zichtbaar label gebruikt over wat in te vullen als de placeholder verdwijnt. Omdat dit een veel gebruikte constructie is, is dit prima. Het is door buttontekst of icoon voldoende duidelijk wat er wordt verwacht.' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   const b = { title: 'Placeholders en de zoekfunctie \xb7 Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder bij zoekfunctie', pagination_label: 'Placeholder bij zoekfunctie', description: 'Richtlijnen over placeholder gebruiken in de zoekfunctie.', slug: '/richtlijnen/formulieren/placeholders/zoekfunctie', keywords: ['labels', 'formulier', 'design', 'code'] },
    y = void 0,
    j = {},
    v = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function g(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(h, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g();
   }
  },
  69284(e, n, l) {
   l.d(n, { M: () => a });
   var o = l(46447),
    r = l(16194),
    t = l(30758),
    s = l(15638);
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
   var i = l(86070);
   function a({ lineNumber: e, syntax: n, textContent: l, trim: a }) {
    let d = l;
    const { title: u, type: h } = (0, t.useContext)(s.x),
     p = (0, t.useId)();
    return (a && (d = d.trim()), (0, i.jsx)(r.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: r, getTokenProps: t }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(o.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...r({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => c, RM: () => t });
   var o = l(86070),
    r = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
