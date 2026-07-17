'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [2990],
 {
  9386(e, n, l) {
   l.d(n, { H: () => b });
   var o = l(95822),
    t = l(46447),
    s = l(13526),
    r = l(68148),
    c = l(9016),
    a = l(69303),
    i = l(91635),
    d = l(30734),
    m = l(30758),
    h = l(31186),
    p = l(65904),
    u = l.n(p),
    g = l(51627),
    v = l(86070);
   const j = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, v.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const b = globalThis.isAstro
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
        t = u().highlight(o, u().languages[n], n);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: u, container: g = 'document', language: b, designTokens: f }) => {
       const _ = 'function' == typeof u ? u() : u,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : h.qV(k || _),
        [A, w] = (0, m.useState)(N),
        [C, z] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: b, plugins: [r.A, c.Ay, a.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, m.useId)();
       let F = m.Fragment;
       return (
        'paragraph' === g ? (F = j) : 'document' === g ? (F = x) : 'surface' === g && (F = y),
        (0, v.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          _ && (0, v.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(F, { children: (0, v.jsx)(t.v$, { children: _ }) }) }) }),
          p &&
           (0, v.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(t.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!C);
             },
             'aria-expanded': C,
             'aria-controls': S,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, v.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, v.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: b, textContent: A, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(t.$n, {
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
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => c });
   var o = l(30758);
   const t = {},
    s = o.createContext(t);
   function r(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  31561(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => b, frontMatter: () => g, metadata: () => o, toc: () => x }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/questions/contact/index","title":"Biedt verschillende manieren om contact op te nemen","description":"Richtlijnen over checken of informatie \xe8cht nodig is.","source":"@site/docs/richtlijnen/formulieren/questions/3-contact/index.mdx","sourceDirName":"richtlijnen/formulieren/questions/3-contact","slug":"/richtlijnen/formulieren/vragen/manieren-voor-contact","permalink":"/richtlijnen/formulieren/vragen/manieren-voor-contact","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/3-contact/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Biedt verschillende manieren om contact op te nemen","title_sm":"Bied contactmogelijkheden","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Bied contactmogelijkheden","pagination_label":"Bied contactmogelijkheden","description":"Richtlijnen over checken of informatie \xe8cht nodig is.","slug":"/richtlijnen/formulieren/vragen/manieren-voor-contact","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Waarom is informatie nodig","permalink":"/richtlijnen/formulieren/vragen/check-noodzaak"},"next":{"title":"Stel een vraag \xe9\xe9n keer","permalink":"/richtlijnen/formulieren/vragen/voorkom-dubbel-werk"}}');
   var t = l(86070),
    s = l(18439),
    r = l(78734),
    c = l(9386),
    a = l(88022);
   function i(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(a.$, { appearance: 'do', title: 'Naast een telefoonnummer ook een e-mailadres uitvragen.', children: (0, t.jsx)(c.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'telefoon1', children: 'Uw telefoonnummer' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'telefoon1', type: 'tel', name: 'telefoon', autoComplete: 'tel' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'email1', children: 'Uw e-mailadres' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'email1', type: 'email', name: 'email', autoComplete: 'email' }) })] }) }) }), '\n', (0, t.jsx)(a.$, { appearance: 'dont', title: 'Alleen een telefoonnummer uitvragen.', children: (0, t.jsx)(c.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'telefoon2', children: 'Uw telefoonnummer (verplicht)' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { id: 'telefoon2', type: 'tel', name: 'telefoon', autoComplete: 'tel', 'aria-required': 'true' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   function m(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'biedt-verschillende-manieren-om-contact-op-te-nemen', children: 'Biedt verschillende manieren om contact op te nemen' }) }), '\n', (0, t.jsx)(n.p, { children: 'Vraag niet alleen om contact via een telefoonnummer.' }), '\n', (0, t.jsx)(n.p, { children: 'Vraag niet alleen om contact via een telefoonnummer. Gebruikers die doof zijn of heel verlegen, stotteren of een vorm van autisme hebben, kunnen soms niet (goed) bellen. Andere gebruikers spreken de Nederlandse taal misschien niet goed, waardoor zij liever niet bellen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Voeg een alternatief toe, bijvoorbeeld een e-mailadres. De blogpost ', (0, t.jsx)(n.a, { href: '/blog/meerdere-manieren-contact/', children: 'Ik wil je wat vragen, maar ik heb geen WhatsApp!' }), ' gaat hier uitgebreid op in.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.2.6/', children: 'Succescriterium 3.2.6 Consistente hulp' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Biedt verschillende manieren om contact op te nemen', title_sm: 'Bied contactmogelijkheden', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Bied contactmogelijkheden', pagination_label: 'Bied contactmogelijkheden', description: 'Richtlijnen over checken of informatie \xe8cht nodig is.', slug: '/richtlijnen/formulieren/vragen/manieren-voor-contact', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function y(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(y, { ...e }) }) : y();
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => a, n: () => c });
   var o = l(13526),
    t = l(96345),
    s = l(37168),
    r = l(86070);
   const c = ({ className: e, ...n }) => {
     const l = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: l, children: n.children });
    },
    a = ({ className: e, label: n, heading: l, headingLevel: c, headingApperance: a, ...i }) => {
     const d = (0, o.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: d, ...i, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(t.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [l && (0, r.jsx)(s.D, { level: c, appearance: a, children: l }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => c, RM: () => s });
   var o = l(86070),
    t = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => m, x: () => d });
   var o = l(4077),
    t = l(58315),
    s = l(46447),
    r = l(13526),
    c = l(45980),
    a = l(30758),
    i = l(86070);
   const d = (0, a.createContext)({}),
    m = ({ title: e, appearance: n, description: l, children: a, figure: m }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = m ? 'figure' : 'div',
      u = m ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, i.jsx)(c.oz, { children: l }) : l;
     return (0, i.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(s.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => i });
   var o = l(46447),
    t = l(16194),
    s = l(30758),
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
    const { title: m, type: h } = (0, s.useContext)(r.x),
     p = (0, s.useId)();
    return (i && (d = d.trim()), (0, a.jsx)(t.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, a.jsx)(o.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...t({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
