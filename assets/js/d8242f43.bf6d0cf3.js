'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [8238],
 {
  525(e, n, l) {
   (l.r(n), l.d(n, { assets: () => v, contentTitle: () => b, default: () => x, frontMatter: () => g, metadata: () => o, toc: () => j }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/focus-visible/index","title":"Maak toetsenbordfocus goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.","source":"@site/docs/richtlijnen/formulieren/visual-design/4-focus-visible/index.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/4-focus-visible","slug":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/4-focus-visible/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Maak toetsenbordfocus goed zichtbaar","title_sm":"Focus goed zichtbaar","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Focus goed zichtbaar","pagination_label":"Focus goed zichtbaar","description":"Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.","slug":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar"},"next":{"title":"Invoerveld goed aanklikbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar"}}');
   var s = l(86070),
    t = l(18439),
    r = l(78734),
    c = l(9386),
    a = l(88022);
   function i(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'Geef invoerveld een duidelijke visuele focusstijl.', description: 'In dit voorbeeld is de focus herkenbaar aan een stippellijn rond het invoerveld. Klik in het veld of tab ernaar met het toetsenbord om het effect te zien.', children: (0, s.jsx)(c.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'focus-voorbeeld', children: 'Onderwerp' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'focus-voorbeeld' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i();
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'maak-toetsenbordfocus-goed-zichtbaar', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, s.jsx)(n.p, { children: 'Voor gebruikers van een toetsenbord of van spraakherkenning moet duidelijk zijn welk formulierveld de focus heeft. Maak de focusstijl makkelijk te herkennen en geef het voldoende kleurcontrast. Dan kunnen ook slechtziende of kleurenblinde bezoekers het element met focus goed herkennen.' }), '\n', (0, s.jsxs)(n.p, { children: ['Dit doe je door een minimale dikte van ', (0, s.jsx)(n.strong, { children: '2 pixels' }), ' en een ', (0, s.jsx)(n.strong, { children: 'minimaal contrast van 3:1' }), ' ten opzichte van aangrenzende kleuren. En daarmee bedoelen we de kleur van de component dat focus heeft, maar ook de achtergrond waar de component \u2018bovenop\u2019 ligt.'] }), '\n', (0, s.jsx)(n.p, { children: 'Een button of link komt namelijk misschien het meest voor op een witte achtergrond, maar houdt ook het scenario\u2019s in gedachten waarbij de link of button op een getinte achtergrond staat zoals bijvoorbeeld een footer.' }), '\n', (0, s.jsxs)(n.p, { children: ['Zorg er ook voor dat de focusring heeft een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de ', (0, s.jsx)(n.strong, { children: 'gefocuste' }), ' en ', (0, s.jsx)(n.strong, { children: 'niet-gefocuste' }), ' staat.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.4.11/', children: 'Succescriterium 1.4.11 Contrast van niet-tekstuele content' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.7/', children: 'Succescriterium 2.4.7 Focus zichtbaar' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.13/', children: 'Succescriterium 2.4.13 Focusweergave' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Maak toetsenbordfocus goed zichtbaar', title_sm: 'Focus goed zichtbaar', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Focus goed zichtbaar', pagination_label: 'Focus goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.', slug: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    v = {},
    j = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function f(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(h, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(r.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(f, { ...e }) }) : f();
   }
  },
  9386(e, n, l) {
   l.d(n, { H: () => x });
   var o = l(95822),
    s = l(46447),
    t = l(13526),
    r = l(68148),
    c = l(9016),
    a = l(69303),
    i = l(91635),
    d = l(30734),
    u = l(30758),
    h = l(31186),
    p = l(65904),
    m = l.n(p),
    g = l(51627),
    b = l(86070);
   const v = ({ children: e }) => (0, b.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(s.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, b.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(s.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, b.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const x = globalThis.isAstro
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
        s = m().highlight(o, m().languages[n], n);
       return (0, b.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, b.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }), (0, b.jsx)(g.n, { children: (0, b.jsx)(g.K, { label: 'Code', children: (0, b.jsx)('pre', { className: 'language-html nl-code-block', children: (0, b.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: m, container: g = 'document', language: x, designTokens: y }) => {
       const k = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(_ || k),
        [w, z] = (0, u.useState)(N),
        [A, C] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: x, plugins: [r.A, c.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [N]);
       const S = (0, u.useId)();
       let F = u.Fragment;
       return (
        'paragraph' === g ? (F = v) : 'document' === g ? (F = j) : 'surface' === g && (F = f),
        (0, b.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          k && (0, b.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, b.jsx)(F, { children: (0, b.jsx)(s.v$, { children: k }) }) }) }),
          p &&
           (0, b.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, b.jsx)(s.$n, {
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
          p &&
           (0, b.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, b.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: w, trim: !0 }),
             n &&
              (0, b.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, b.jsx)(s.$n, {
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
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => c });
   var o = l(30758);
   const s = {},
    t = o.createContext(s);
   function r(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), o.createElement(t.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => a, n: () => c });
   var o = l(13526),
    s = l(96345),
    t = l(37168),
    r = l(86070);
   const c = ({ className: e, ...n }) => {
     const l = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: l, children: n.children });
    },
    a = ({ className: e, label: n, heading: l, headingLevel: c, headingApperance: a, ...i }) => {
     const d = (0, o.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: d, ...i, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(s.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [l && (0, r.jsx)(t.D, { level: c, appearance: a, children: l }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => c, RM: () => t });
   var o = l(86070),
    s = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var o = l(4077),
    s = l(58315),
    t = l(46447),
    r = l(13526),
    c = l(45980),
    a = l(30758),
    i = l(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: a, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, i.jsx)(c.oz, { children: l }) : l;
     return (0, i.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(t.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(t.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => i });
   var o = l(46447),
    s = l(16194),
    t = l(30758),
    r = l(88022);
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
   var a = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: u, type: h } = (0, t.useContext)(r.x),
     p = (0, t.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(s.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: t }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...s({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
