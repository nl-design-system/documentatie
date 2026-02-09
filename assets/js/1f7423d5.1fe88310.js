'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [61575],
 {
  15638(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var r = l(4077),
    t = l(58315),
    o = l(46447),
    s = l(13526),
    i = l(30758),
    a = l(86070);
   const c = (0, i.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: i, figure: d }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      m = d ? 'figcaption' : 'div';
     return (0, a.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(o.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(o.fz, { children: e })] }), l] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => s, x: () => i });
   var r = l(30758);
   const t = {},
    o = r.createContext(t);
   function s(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, l) {
   l.d(n, { H: () => j });
   var r = l(69284),
    t = l(46447),
    o = l(13526),
    s = l(68148),
    i = l(9016),
    a = l(69303),
    c = l(91635),
    d = l(30734),
    u = l(30758),
    h = l(31186),
    m = l(86070);
   const p = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   p.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, m.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const j = ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: j = !0, children: g, container: y = 'document', language: x, designTokens: f }) => {
    const k = 'function' == typeof g ? g() : g,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : h.qV(_ || k),
     [z, N] = (0, u.useState)(w),
     [A, C] = (0, u.useState)(l);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: x, plugins: [s.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const R = (0, u.useId)();
    let S = u.Fragment;
    return (
     'paragraph' === y ? (S = p) : 'document' === y ? (S = b) : 'surface' === y && (S = v),
     (0, m.jsxs)('div', {
      className: (0, o.A)('nlds-canvas'),
      children: [
       k && (0, m.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(S, { children: (0, m.jsx)(t.v$, { children: k }) }) }) }),
       j &&
        (0, m.jsx)('div', {
         className: (0, o.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(t.$n, {
          className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!A);
          },
          'aria-expanded': A,
          'aria-controls': R,
          children: A ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, m.jsxs)('div', {
         className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: R,
         hidden: !A,
         children: [
          (0, m.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: z, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(t.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  69284(e, n, l) {
   l.d(n, { M: () => c });
   var r = l(46447),
    t = l(16194),
    o = l(30758),
    s = l(15638);
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
   var a = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: u, type: h } = (0, o.useContext)(s.x),
     m = (0, o.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(t.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: o }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...t({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => o });
   var r = l(86070),
    t = l(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  93257(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => x, frontMatter: () => b, metadata: () => r, toc: () => g }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/label/above-field/README","title":"Zet het label boven het formulierveld \xb7 Labels in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor label boven het formulierveld.","source":"@site/docs/richtlijnen/formulieren/label/3-above-field/README.mdx","sourceDirName":"richtlijnen/formulieren/label/3-above-field","slug":"/richtlijnen/formulieren/labels/plaatsing","permalink":"/richtlijnen/formulieren/labels/plaatsing","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/3-above-field/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet het label boven het formulierveld \xb7 Labels in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing label","pagination_label":"Plaatsing label","description":"Richtlijnen voor label boven het formulierveld.","slug":"/richtlijnen/formulieren/labels/plaatsing","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Zichtbare naam label","permalink":"/richtlijnen/formulieren/labels/zichtbare-naam"},"next":{"title":"Label zichtbaar","permalink":"/richtlijnen/formulieren/labels/altijd-zichtbaar"}}');
   var t = l(86070),
    o = l(18439),
    s = l(78734),
    i = l(58639),
    a = l(15638);
   function c(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(a.$, { appearance: 'dont', title: 'Het label inconsequent plaatsen in een formulier (visueel en in code).', children: (0, t.jsx)(i.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('label', { htmlFor: 'lievelingskleur', children: 'Wat is je lievelingskleur?' }), (0, t.jsxs)('select', { name: 'lievelingskleur', id: 'lievelingskleur', children: [(0, t.jsx)('option', { children: 'Rood' }), (0, t.jsx)('option', { children: 'Blauw' }), (0, t.jsx)('option', { children: 'Wit' })] }), (0, t.jsx)('input', { type: 'text', id: 'dier', name: 'lievelingsdier' }), (0, t.jsx)('label', { htmlFor: 'dier', children: 'Wat is je lievelingsdier?' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'zet-het-label-boven-het-formulierveld', children: 'Zet het label boven het formulierveld' }) }), '\n', (0, t.jsx)(n.p, { children: 'Zet het label boven het formulierveld. Niet ernaast, niet eronder en niet in het formulierveld, maar op de regel boven het formulierveld. Doe dit consequent voor alle formuliervelden. Voor left-to-right talen is het label links uitgelijnd.' }), '\n', (0, t.jsx)(n.p, { children: 'Deze plaatsing heeft meerdere voordelen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Het biedt voldoende ruimte voor labels van verschillende lengtes. Het kan zijn dat gebruikers vertaalsoftware gebruiken op de pagina, waardoor labels langer of korter kunnen zijn dan je verwacht.' }), '\n', (0, t.jsx)(n.li, { children: 'Dit werkt beter voor gebruikers die de tekst inzoomen.' }), '\n', (0, t.jsx)(n.li, { children: "Door labels, formuliervelden en acties verticaal uit te lijnen, wordt een natuurlijke 'scan-lijn' gecre\xeberd. Hierdoor kunnen mensen hun aandacht gemakkelijk op deze lijn richten." }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Waarom is dit belangrijk? Mensen lezen van boven naar beneden en verwachten dat de informatie in die volgorde staat.' }), '\n', (0, t.jsxs)(n.p, { children: ['Je brein verbindt automatisch wat er bij elkaar is geplaatst, dus zorg er ook voordat het label visueel dicht bij het formulierveld staat. Dan is duidelijk wat bij elkaar hoort. Lees hierover mee over bij ', (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/', children: 'de richtlijnen over stijl: Ruimte' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: 'Plaats labels buiten het formulierveld en niet daarbinnen. Op deze manier heeft het label altijd een vaste positie en kan het in een leesbare grootte worden getoond.' }), '\n', (0, t.jsxs)(n.p, { children: ['Gebruik geen zogenaamde \u201cfloating labels\u201d. Deze zijn moeilijker te begrijpen. Zie: ', (0, t.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2021/02/material-design-text-fields/', children: (0, t.jsx)('span', { lang: 'en', children: 'Material Design Text Fields Are Badly Designed in Smashing Magazine' }) }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   const b = { title: 'Zet het label boven het formulierveld \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing label', pagination_label: 'Plaatsing label', description: 'Richtlijnen voor label boven het formulierveld.', slug: '/richtlijnen/formulieren/labels/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    g = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function y(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(y, { ...e }) }) : y();
   }
  },
 },
]);
