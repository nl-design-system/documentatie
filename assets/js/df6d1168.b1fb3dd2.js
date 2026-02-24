'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [9019],
 {
  10976(e, n, o) {
   (o.r(n), o.d(n, { assets: () => b, contentTitle: () => v, default: () => j, frontMatter: () => g, metadata: () => t, toc: () => f }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/focus-visible/README","title":"Maak toetsenbordfocus goed zichtbaar | Visueel ontwerp van een formulier | Richtlijnen","description":"Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.","source":"@site/docs/richtlijnen/formulieren/visual-design/4-focus-visible/README.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/4-focus-visible","slug":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/4-focus-visible/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Maak toetsenbordfocus goed zichtbaar | Visueel ontwerp van een formulier | Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Focus goed zichtbaar","pagination_label":"Focus goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.","slug":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar"},"next":{"title":"Invoerveld goed aanklikbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar"}}');
   var l = o(86070),
    s = o(18439),
    r = o(78734),
    c = o(58639),
    i = o(15638);
   function a(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(i.$, { appearance: 'do', title: 'Geef invoerveld een duidelijke visuele focusstijl.', description: 'In dit voorbeeld is de focus herkenbaar aan een stippellijn rond het invoerveld. Klik in het veld of tab ernaar met het toetsenbord om het effect te zien.', children: (0, l.jsx)(c.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)('input', { type: 'text' }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(a, { ...e }) }) : a();
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'maak-toetsenbordfocus-goed-zichtbaar', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, l.jsx)(n.p, { children: 'Voor gebruikers van een toetsenbord of van spraakherkenning moet duidelijk zijn welk formulierveld de focus heeft. Maak de focusstijl makkelijk te herkennen en geef het voldoende kleurcontrast. Dan kunnen ook slechtziende of kleurenblinde bezoekers het element met focus goed herkennen.' }), '\n', (0, l.jsxs)(n.p, { children: ['Dit doe je door een minimale dikte van ', (0, l.jsx)(n.strong, { children: '2 pixels' }), ' en een ', (0, l.jsx)(n.strong, { children: 'minimaal contrast van 3:1' }), ' ten opzichte van aangrenzende kleuren. En daarmee bedoelen we de kleur van de component dat focus heeft, maar ook de achtergrond waar de component \u2018bovenop\u2019 ligt.'] }), '\n', (0, l.jsx)(n.p, { children: 'Een button of link komt namelijk misschien het meest voor op een witte achtergrond, maar houdt ook het scenario\u2019s in gedachten waarbij de link of button op een getinte achtergrond staat zoals bijvoorbeeld een footer.' }), '\n', (0, l.jsxs)(n.p, { children: ['Zorg er ook voor dat de focusring heeft een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de ', (0, l.jsx)(n.strong, { children: 'gefocuste' }), ' en ', (0, l.jsx)(n.strong, { children: 'niet-gefocuste' }), ' staat.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.4.11/', children: 'Succescriterium 1.4.11 Contrast van niet-tekstuele content' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.7/', children: 'Succescriterium 2.4.7 Focus zichtbaar' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.13/', children: 'Succescriterium 2.4.13 Focusweergave' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Maak toetsenbordfocus goed zichtbaar | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Focus goed zichtbaar', pagination_label: 'Focus goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.', slug: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    b = {},
    f = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function y(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(m, {}), '\n', (0, l.jsx)(r.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(y, { ...e }) }) : y();
   }
  },
  15638(e, n, o) {
   o.d(n, { $: () => u, x: () => d });
   var t = o(4077),
    l = o(58315),
    s = o(46447),
    r = o(13526),
    c = o(9547),
    i = o(30758),
    a = o(86070);
   const d = (0, i.createContext)({}),
    u = ({ title: e, appearance: n, description: o, children: i, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      g = 'string' == typeof o ? (0, a.jsx)(c.oz, { children: o }) : o;
     return (0, a.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(s.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(s.fz, { children: e })] }), g] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: i }) })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => r, x: () => c });
   var t = o(30758);
   const l = {},
    s = t.createContext(l);
   function r(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), t.createElement(s.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, o) {
   o.d(n, { H: () => b });
   var t = o(69284),
    l = o(46447),
    s = o(13526),
    r = o(68148),
    c = o(9016),
    i = o(69303),
    a = o(91635),
    d = o(30734),
    u = o(30758),
    h = o(31186),
    p = o(86070);
   const m = ({ children: e }) => (0, p.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const g = ({ children: e }) => (0, p.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   g.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, p.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const b = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: b = !0, children: f, container: y = 'document', language: j, designTokens: x }) => {
    const k = 'function' == typeof f ? f() : f,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : h.qV(_ || k),
     [z, N] = (0, u.useState)(w),
     [A, C] = (0, u.useState)(o);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: j, plugins: [r.A, c.Ay, i.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const R = (0, u.useId)();
    let S = u.Fragment;
    return (
     'paragraph' === y ? (S = m) : 'document' === y ? (S = g) : 'surface' === y && (S = v),
     (0, p.jsxs)('div', {
      className: (0, s.A)('nlds-canvas'),
      children: [
       k && (0, p.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, p.jsx)(S, { children: (0, p.jsx)(l.v$, { children: k }) }) }) }),
       b &&
        (0, p.jsx)('div', {
         className: (0, s.A)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(l.$n, {
          className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
        (0, p.jsxs)('div', {
         className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !A,
         children: [
          (0, p.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: z, trim: !0 }),
          n &&
           (0, p.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(l.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   o.d(n, { M: () => a });
   var t = o(46447),
    l = o(16194),
    s = o(30758),
    r = o(15638);
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
    const { title: u, type: h } = (0, s.useContext)(r.x),
     p = (0, s.useId)();
    return (a && (d = d.trim()), (0, i.jsx)(l.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: l, getTokenProps: s }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(t.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: o.map((n, o) => (0, i.jsxs)('span', { ...l({ line: n }), children: [e && (0, i.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  78734(e, n, o) {
   o.d(n, { Ay: () => c, RM: () => s });
   var t = o(86070),
    l = o(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
 },
]);
