'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [40168],
 {
  9386(e, n, l) {
   l.d(n, { H: () => y });
   var s = l(95822),
    o = l(46447),
    t = l(13526),
    r = l(68148),
    a = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    p = l(30758),
    u = l(31186),
    g = l(65904),
    m = l.n(g),
    h = l(51627),
    v = l(86070);
   const j = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        s = (0, u.qV)(l)
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
        o = m().highlight(s, m().languages[n], n);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: s } }), (0, v.jsx)(h.n, { children: (0, v.jsx)(h.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: o } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: g = !0, children: m, container: h = 'document', language: y, designTokens: f }) => {
       const _ = 'function' == typeof m ? m() : m,
        k = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : u.qV(k || _),
        [N, A] = (0, p.useState)(w),
        [z, C] = (0, p.useState)(l);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: y, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, p.useId)();
       let R = p.Fragment;
       return (
        'paragraph' === h ? (R = j) : 'document' === h ? (R = b) : 'surface' === h && (R = x),
        (0, v.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          _ && (0, v.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(R, { children: (0, v.jsx)(o.v$, { children: _ }) }) }) }),
          g &&
           (0, v.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(o.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          g &&
           (0, v.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, v.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: N, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(o.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => a });
   var s = l(30758);
   const o = {},
    t = s.createContext(o);
   function r(e) {
    const n = s.useContext(t);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), s.createElement(t.Provider, { value: n }, e.children));
   }
  },
  32054(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => y, frontMatter: () => h, metadata: () => s, toc: () => b }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/confirmation/next-steps/index","title":"Vertel wat de vervolgacties zijn","description":"Richtlijnen voor vervolgstappen.","source":"@site/docs/richtlijnen/formulieren/confirmation/3-next-steps/index.mdx","sourceDirName":"richtlijnen/formulieren/confirmation/3-next-steps","slug":"/richtlijnen/formulieren/bevestigingspagina/vervolgstappen","permalink":"/richtlijnen/formulieren/bevestigingspagina/vervolgstappen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/confirmation/3-next-steps/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Vertel wat de vervolgacties zijn","title_sm":"Benoem vervolgstappen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Benoem vervolgstappen","pagination_label":"Benoem vervolgstappen","description":"Richtlijnen voor vervolgstappen.","slug":"/richtlijnen/formulieren/bevestigingspagina/vervolgstappen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Toegankelijke succesmelding","permalink":"/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding"},"next":{"title":"Contact opnemen","permalink":"/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen"}}');
   var o = l(86070),
    t = l(18439),
    r = l(78734),
    a = l(9386),
    c = l(88022);
   function i(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(c.$, { appearance: 'do', title: 'Informeren dat het formulier is verzonden en wat de vervolgacties zijn.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)('div', { children: [(0, o.jsx)('p', { children: 'Uw vraag is met succes verstuurd. Zaaknummer 123456789.' }), (0, o.jsx)('p', { children: 'Wat gaat er nu gebeuren?' }), (0, o.jsxs)('ul', { children: [(0, o.jsx)('li', { children: 'U ontvangt een bevestigingsmail op gebruiker@voorbeeld.com' }), (0, o.jsx)('li', { children: 'De afdeling Vraagbaak gaat met uw vraag aan de slag.' }), (0, o.jsx)('li', { children: 'U wordt per e-mail op de hoogte gehouden maar kunt de voortgang ook inzien binnen uw Mijn omgeving.' })] })] }) }) }), '\n', (0, o.jsx)(c.$, { appearance: 'dont', title: 'Vervolgstappen weglaten.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsx)('p', { children: 'Uw vraag is verstuurd.' }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function p(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'vertel-wat-de-vervolgacties-zijn', children: 'Vertel wat de vervolgacties zijn' }) }), '\n', (0, o.jsx)(n.p, { children: 'Vermeld wat er gaat gebeuren, bijvoorbeeld "U krijgt na 5 werkdagen reactie via een e-mail", "Wij nemen contact met u op via e-mail als we een antwoord hebben op uw vraag". Wat van toepassing is voor het betreffende formulier.' }), '\n', (0, o.jsxs)(n.p, { children: ['Uit gebruikersonderzoek van de "Mijn Omgeving" van Den Haag is \xe9\xe9n van de conclusies: ', (0, o.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/mijn-zaken/denhaag-mijn-omgeving', children: 'Houd rekening met de wens van inwoners om veel bevestiging te krijgen' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   function g(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.2.6/', children: 'Succescriterium 3.2.6 Consistente hulp' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
   }
   const h = { title: 'Vertel wat de vervolgacties zijn', title_sm: 'Benoem vervolgstappen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Benoem vervolgstappen', pagination_label: 'Benoem vervolgstappen', description: 'Richtlijnen voor vervolgstappen.', slug: '/richtlijnen/formulieren/bevestigingspagina/vervolgstappen', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    b = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function x(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(x, { ...e }) }) : x();
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => c, n: () => a });
   var s = l(13526),
    o = l(96345),
    t = l(37168),
    r = l(86070);
   const a = ({ className: e, ...n }) => {
     const l = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: l, children: n.children });
    },
    c = ({ className: e, label: n, heading: l, headingLevel: a, headingApperance: c, ...i }) => {
     const d = (0, s.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: d, ...i, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(o.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [l && (0, r.jsx)(t.D, { level: a, appearance: c, children: l }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => t });
   var s = l(86070),
    o = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => p, x: () => d });
   var s = l(4077),
    o = l(58315),
    t = l(46447),
    r = l(13526),
    a = l(45980),
    c = l(30758),
    i = l(86070);
   const d = (0, c.createContext)({}),
    p = ({ title: e, appearance: n, description: l, children: c, figure: p }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      g = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div',
      h = 'string' == typeof l ? (0, i.jsx)(a.oz, { children: l }) : l;
     return (0, i.jsxs)(g, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(t.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(t.fz, { children: e })] }), h] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: c }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => i });
   var s = l(46447),
    o = l(16194),
    t = l(30758),
    r = l(88022);
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
    const { title: p, type: u } = (0, t.useContext)(r.x),
     g = (0, t.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(o.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: t }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(s.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': g, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...o({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
