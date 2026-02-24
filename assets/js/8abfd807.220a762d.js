'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [59797],
 {
  15638(e, n, o) {
   o.d(n, { $: () => u, x: () => d });
   var r = o(4077),
    t = o(58315),
    l = o(46447),
    s = o(13526),
    c = o(9547),
    i = o(30758),
    a = o(86070);
   const d = (0, i.createContext)({}),
    u = ({ title: e, appearance: n, description: o, children: i, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      v = 'string' == typeof o ? (0, a.jsx)(c.oz, { children: o }) : o;
     return (0, a.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, a.jsx)(l.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, a.jsx)(l.fz, { children: e })] }), v] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: i }) })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => s, x: () => c });
   var r = o(30758);
   const t = {},
    l = r.createContext(t);
   function s(e) {
    const n = r.useContext(l);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(l.Provider, { value: n }, e.children));
   }
  },
  58489(e, n, o) {
   (o.r(n), o.d(n, { assets: () => b, contentTitle: () => f, default: () => j, frontMatter: () => v, metadata: () => r, toc: () => g }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/field-contrast/README","title":"Geef duidelijk aan waar een invoerveld is | Visueel ontwerp van een formulier | Richtlijnen","description":"Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.","source":"@site/docs/richtlijnen/formulieren/visual-design/1-field-contrast/README.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/1-field-contrast","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/1-field-contrast/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef duidelijk aan waar een invoerveld is | Visueel ontwerp van een formulier | Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Invoerveld goed zichtbaar","pagination_label":"Invoerveld goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Visueel ontwerp van formulieren","permalink":"/richtlijnen/formulieren/visueel-ontwerp/"},"next":{"title":"Tekst goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar"}}');
   var t = o(86070),
    l = o(18439),
    s = o(78734),
    c = o(58639),
    i = o(15638);
   o(46447);
   function a(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Geef invoerveld een duidelijke rand met voldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 5.54:1](/contrast/?color=%23006FA1&background-color=%23ffffff)', children: (0, t.jsx)(c.H, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#006FA1' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)('input', { type: 'text' }) }) }) }), '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Geef een radiobutton voldoende kleurcontrast.', description: 'Dit voorbeeld heeft [een contrast van 5.54:1](/contrast/?color=%23006FA1&background-color=%23ffffff)', children: (0, t.jsx)(c.H, { language: 'html', designTokens: { '--utrecht-radio-button-background-color': '#FFFFFF', '--utrecht-radio-button-border-color': '#006FA1' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)('fieldset', { children: [(0, t.jsx)('legend', { children: 'Kies je kleur' }), (0, t.jsxs)('p', { children: [(0, t.jsx)('input', { type: 'radio', id: 'radio1', name: 'kleur' }), ' ', (0, t.jsx)('label', { htmlFor: 'radio1', children: 'Blauw' })] }), (0, t.jsxs)('p', { children: [(0, t.jsx)('input', { type: 'radio', id: 'radio2', name: 'kleur' }), ' ', (0, t.jsx)('label', { htmlFor: 'radio2', children: 'Groen' })] }), (0, t.jsxs)('p', { children: [(0, t.jsx)('input', { type: 'radio', id: 'radio3', name: 'kleur' }), ' ', (0, t.jsx)('label', { htmlFor: 'radio3', children: 'Rood' })] })] }) }) }) }), '\n', (0, t.jsx)(i.$, { appearance: 'dont', title: 'Geef invoerveld een slecht zichtbare rand met onvoldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 1.08:1](/contrast/?color=%23f8f5f1&background-color=%23ffffff)', children: (0, t.jsx)(c.H, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#f8f4f1' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)('input', { type: 'text' }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a();
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'geef-duidelijk-aan-waar-een-invoerveld-is', children: 'Geef duidelijk aan waar een invoerveld is' }) }), '\n', (0, t.jsx)(n.p, { children: 'Gebruikers moeten herkennen waar en hoe groot het invoerveld, radiobutton of checkbox is.' }), '\n', (0, t.jsx)(n.p, { children: 'Het kleurcontrast van de randen (borders) ten opzichte van de achtergrondkleur moet daarom 3:1 of hoger zijn.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.4.11/', children: 'Succescriterium 1.4.11 Contrast van niet-tekstuele content' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   const v = { title: 'Geef duidelijk aan waar een invoerveld is | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Invoerveld goed zichtbaar', pagination_label: 'Invoerveld goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    f = void 0,
    b = {},
    g = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function y(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(y, { ...e }) }) : y();
   }
  },
  58639(e, n, o) {
   o.d(n, { H: () => b });
   var r = o(69284),
    t = o(46447),
    l = o(13526),
    s = o(68148),
    c = o(9016),
    i = o(69303),
    a = o(91635),
    d = o(30734),
    u = o(30758),
    p = o(31186),
    h = o(86070);
   const m = ({ children: e }) => (0, h.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(t.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, h.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(t.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, h.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const b = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: b = !0, children: g, container: y = 'document', language: j, designTokens: x }) => {
    const k = 'function' == typeof g ? g() : g,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : p.qV(_ || k),
     [N, z] = (0, u.useState)(w),
     [A, F] = (0, u.useState)(o);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: j, plugins: [s.A, c.Ay, i.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [w]);
    const C = (0, u.useId)();
    let R = u.Fragment;
    return (
     'paragraph' === y ? (R = m) : 'document' === y ? (R = v) : 'surface' === y && (R = f),
     (0, h.jsxs)('div', {
      className: (0, l.A)('nlds-canvas'),
      children: [
       k && (0, h.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, h.jsx)(R, { children: (0, h.jsx)(t.v$, { children: k }) }) }) }),
       b &&
        (0, h.jsx)('div', {
         className: (0, l.A)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(t.$n, {
          className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           F(!A);
          },
          'aria-expanded': A,
          'aria-controls': C,
          children: A ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, h.jsxs)('div', {
         className: (0, l.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: C,
         hidden: !A,
         children: [
          (0, h.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: N, trim: !0 }),
          n &&
           (0, h.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(t.$n, {
             className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  69284(e, n, o) {
   o.d(n, { M: () => a });
   var r = o(46447),
    t = o(16194),
    l = o(30758),
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
   var i = o(86070);
   function a({ lineNumber: e, syntax: n, textContent: o, trim: a }) {
    let d = o;
    const { title: u, type: p } = (0, l.useContext)(s.x),
     h = (0, l.useId)();
    return (a && (d = d.trim()), (0, i.jsx)(t.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: t, getTokenProps: l }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: n, children: o.map((n, o) => (0, i.jsxs)('span', { ...t({ line: n }), children: [e && (0, i.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  78734(e, n, o) {
   o.d(n, { Ay: () => c, RM: () => l });
   var r = o(86070),
    t = o(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
