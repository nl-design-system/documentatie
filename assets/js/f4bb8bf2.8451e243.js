'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [30347],
 {
  9386(e, n, l) {
   l.d(n, { H: () => f });
   var o = l(95822),
    t = l(46447),
    r = l(13526),
    s = l(68148),
    a = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    u = l(30758),
    h = l(31186),
    p = l(65904),
    m = l.n(p),
    v = l(51627),
    g = l(86070);
   const b = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        o = (0, h.qV)(l)
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
        t = m().highlight(o, m().languages[n], n);
       return (0, g.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }), (0, g.jsx)(v.n, { children: (0, g.jsx)(v.K, { label: 'Code', children: (0, g.jsx)('pre', { className: 'language-html nl-code-block', children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: m, container: v = 'document', language: f, designTokens: y }) => {
       const k = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || k),
        [w, A] = (0, u.useState)(N),
        [z, F] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: f, plugins: [s.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const C = (0, u.useId)();
       let S = u.Fragment;
       return (
        'paragraph' === v ? (S = b) : 'document' === v ? (S = x) : 'surface' === v && (S = j),
        (0, g.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          k && (0, g.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, g.jsx)(S, { children: (0, g.jsx)(t.v$, { children: k }) }) }) }),
          p &&
           (0, g.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(t.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              F(!z);
             },
             'aria-expanded': z,
             'aria-controls': C,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, g.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !z,
            children: [
             (0, g.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: w, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(t.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, l) {
   l.d(n, { R: () => s, x: () => a });
   var o = l(30758);
   const t = {},
    r = o.createContext(t);
   function s(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), o.createElement(r.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => c, n: () => a });
   var o = l(13526),
    t = l(96345),
    r = l(37168),
    s = l(86070);
   const a = ({ className: e, ...n }) => {
     const l = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, s.jsx)('div', { className: l, children: n.children });
    },
    c = ({ className: e, label: n, heading: l, headingLevel: a, headingApperance: c, ...i }) => {
     const d = (0, o.A)('utrecht-accordion__section', e);
     return (0, s.jsxs)('details', { className: d, ...i, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(t.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [l && (0, s.jsx)(r.D, { level: a, appearance: c, children: l }), n] })] }) }), (0, s.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => r });
   var o = l(86070),
    t = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var o = l(4077),
    t = l(58315),
    r = l(46447),
    s = l(13526),
    a = l(45980),
    c = l(30758),
    i = l(86070);
   const d = (0, c.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: c, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      v = 'string' == typeof l ? (0, i.jsx)(a.oz, { children: l }) : l;
     return (0, i.jsxs)(p, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(r.fz, { children: e })] }), v] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: c }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => i });
   var o = l(46447),
    t = l(16194),
    r = l(30758),
    s = l(88022);
   const a = {
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
   var c = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: u, type: h } = (0, r.useContext)(s.x),
     p = (0, r.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: r }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(o.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...t({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  96045(e, n, l) {
   (l.r(n), l.d(n, { assets: () => b, contentTitle: () => g, default: () => f, frontMatter: () => v, metadata: () => o, toc: () => x }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/field-contrast/index","title":"Geef duidelijk aan waar een invoerveld is","description":"Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.","source":"@site/docs/richtlijnen/formulieren/visual-design/1-field-contrast/index.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/1-field-contrast","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/1-field-contrast/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef duidelijk aan waar een invoerveld is","title_sm":"Invoerveld goed zichtbaar","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Invoerveld goed zichtbaar","pagination_label":"Invoerveld goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Visueel ontwerp van formulieren","permalink":"/richtlijnen/formulieren/visueel-ontwerp/"},"next":{"title":"Tekst goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar"}}');
   var t = l(86070),
    r = l(18439),
    s = l(78734),
    a = l(9386),
    c = l(88022);
   l(46447);
   function i(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Geef invoerveld een duidelijke rand met voldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 5.54:1](/contrast/?color=%23006FA1&background-color=%23ffffff)', children: (0, t.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#006FA1' }, children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('label', { htmlFor: 'contrast-input-goed', children: 'Voorbeeld invoerveld met goed contrast' }), (0, t.jsx)('input', { type: 'text', id: 'contrast-input-goed' })] }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Geef een radiobutton voldoende kleurcontrast.', description: 'Dit voorbeeld heeft [een contrast van 5.54:1](/contrast/?color=%23006FA1&background-color=%23ffffff)', children: (0, t.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-radio-button-background-color': '#FFFFFF', '--utrecht-radio-button-border-color': '#006FA1' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)('fieldset', { children: [(0, t.jsx)('legend', { children: 'Kies je kleur' }), (0, t.jsxs)('div', { children: [(0, t.jsx)('input', { type: 'radio', id: 'radio1', name: 'kleur' }), (0, t.jsx)('label', { htmlFor: 'radio1', children: 'Blauw' })] }), (0, t.jsxs)('div', { children: [(0, t.jsx)('input', { type: 'radio', id: 'radio2', name: 'kleur' }), (0, t.jsx)('label', { htmlFor: 'radio2', children: 'Groen' })] }), (0, t.jsxs)('div', { children: [(0, t.jsx)('input', { type: 'radio', id: 'radio3', name: 'kleur' }), (0, t.jsx)('label', { htmlFor: 'radio3', children: 'Rood' })] })] }) }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'Geef invoerveld een slecht zichtbare rand met onvoldoende contrast.', description: 'Dit voorbeeld heeft [een contrast van 1.08:1](/contrast/?color=%23f8f5f1&background-color=%23ffffff)', children: (0, t.jsx)(a.H, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#f8f4f1' }, children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('label', { htmlFor: 'contrast-input-slecht', children: 'Voorbeeld invoerveld met slecht contrast' }), (0, t.jsx)('input', { type: 'text', id: 'contrast-input-slecht' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i();
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'geef-duidelijk-aan-waar-een-invoerveld-is', children: 'Geef duidelijk aan waar een invoerveld is' }) }), '\n', (0, t.jsx)(n.p, { children: 'Gebruikers moeten herkennen waar en hoe groot het invoerveld, radiobutton of checkbox is.' }), '\n', (0, t.jsx)(n.p, { children: 'Het kleurcontrast van de randen (borders) ten opzichte van de achtergrondkleur moet daarom 3:1 of hoger zijn.' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.4.11/', children: 'Succescriterium 1.4.11 Contrast van niet-tekstuele content' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   const v = { title: 'Geef duidelijk aan waar een invoerveld is', title_sm: 'Invoerveld goed zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Invoerveld goed zichtbaar', pagination_label: 'Invoerveld goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    b = {},
    x = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function j(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j();
   }
  },
 },
]);
