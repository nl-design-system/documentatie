'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [63986],
 {
  15175(e, l, n) {
   n.d(l, { M: () => i });
   var r = n(46447),
    a = n(16194),
    s = n(30758),
    o = n(51519);
   const t = {
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
   var c = n(86070);
   function i({ lineNumber: e, syntax: l, textContent: n, trim: i }) {
    let d = n;
    const { title: h, type: u } = (0, s.useContext)(o.x),
     m = (0, s.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(a.f4, { theme: t, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: a, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, c.jsx)(r.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: l, children: n.map((l, n) => (0, c.jsxs)('span', { ...a({ line: l }), children: [e && (0, c.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, c.jsx)('span', { ...s({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
  18439(e, l, n) {
   n.d(l, { R: () => o, x: () => t });
   var r = n(30758);
   const a = {},
    s = r.createContext(a);
   function o(e) {
    const l = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function t(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), r.createElement(s.Provider, { value: l }, e.children));
   }
  },
  49539(e, l, n) {
   n.d(l, { Ay: () => t, RM: () => s });
   var r = n(86070),
    a = n(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  51519(e, l, n) {
   n.d(l, { $: () => h, x: () => d });
   var r = n(4077),
    a = n(58315),
    s = n(46447),
    o = n(13526),
    t = n(66116),
    c = n(30758),
    i = n(86070);
   const d = (0, c.createContext)({}),
    h = ({ title: e, appearance: l, description: n, children: c, figure: h }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = h ? 'figure' : 'div',
      p = h ? 'figcaption' : 'div',
      b = 'string' == typeof n ? (0, i.jsx)(t.oz, { components: { a: s.N_ }, children: n }) : n;
     return (0, i.jsxs)(m, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(a.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(s.fz, { children: e })] }), b] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: u[l] }, children: c }) })] });
    };
  },
  70348(e, l, n) {
   n.d(l, { K: () => i, n: () => c });
   var r = n(13526),
    a = n(30758),
    s = n(96345),
    o = n(37168),
    t = n(86070);
   const c = (0, a.forwardRef)(({ as: e, className: l, children: n, ...a }, s) => {
     const o = e || 'div',
      c = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', l);
     return (0, t.jsx)(o, { ref: s, className: c, ...a, children: n });
    }),
    i = ({ className: e, classNamePanel: l, label: n, heading: a, headingLevel: c, headingApperance: i, ...d }) => {
     const h = (0, r.A)('utrecht-accordion__section', e),
      u = (0, r.A)('utrecht-accordion__panel', l);
     return (0, t.jsxs)('details', { className: h, ...d, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(s.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [a && (0, t.jsx)(o.D, { level: c, appearance: i, children: a }), n] })] }) }), (0, t.jsx)('div', { className: u, children: d.children })] });
    };
  },
  80731(e, l, n) {
   n.d(l, { H: () => y });
   var r = n(15175),
    a = n(46447),
    s = n(13526),
    o = n(68148),
    t = n(9016),
    c = n(69303),
    i = n(91635),
    d = n(30734),
    h = n(30758),
    u = n(31186),
    m = n(65904),
    p = n.n(m),
    b = n(70348),
    g = n(86070);
   const v = ({ children: e }) => (0, g.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(a.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(a.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, g.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(a.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, g.jsx)(a.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: l, className: n }) => {
       const r = 'function' == typeof e ? e() : e,
        a = (0, u.qV)(r)
         .replaceAll(/&quot;/g, '"')
         .replaceAll(/\sclass="[\w-\s]+"/g, '')
         .replace('<astro-static-slot>', '')
         .replace('</astro-static-slot>', '')
         .replaceAll(/{"\s"}/g, '')
         .replaceAll(/\n{2,}/g, '\n')
         .replaceAll(/^\s\s/gm, '')
         .replaceAll(/\salt\s/g, ' alt="" ')
         .replaceAll(' loading="lazy"', ' '),
        o = p().highlight(a, p().languages[l], l);
       return (0, g.jsxs)('div', { className: (0, s.A)('ma-canvas-astro', n), children: [(0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }), (0, g.jsx)(b.n, { children: (0, g.jsx)(b.K, { label: 'Code', children: (0, g.jsx)('pre', { className: 'language-html nl-code-block', children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: o } }) }) }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: m = !0, children: p, container: b = 'document', language: y, designTokens: f }) => {
       const _ = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(k || _),
        [w, z] = (0, h.useState)(N),
        [A, C] = (0, h.useState)(n);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: y, plugins: [o.A, t.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let L = h.Fragment;
       return (
        'paragraph' === b ? (L = v) : 'document' === b ? (L = j) : 'surface' === b && (L = x),
        (0, g.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          _ && (0, g.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, g.jsx)(L, { children: (0, g.jsx)(a.v$, { children: _ }) }) }) }),
          m &&
           (0, g.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(a.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, g.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, g.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: w, trim: !0 }),
             l &&
              (0, g.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(a.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  90713(e, l, n) {
   (n.r(l), n.d(l, { assets: () => v, contentTitle: () => g, default: () => y, frontMatter: () => b, metadata: () => r, toc: () => j }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/label/always-visible/index","title":"Zorg ervoor dat het label altijd zichtbaar is","description":"Richtlijnen voor zichtbaarheid label van een formulierveld.","source":"@site/docs/richtlijnen/formulieren/label/4-always-visible/index.mdx","sourceDirName":"richtlijnen/formulieren/label/4-always-visible","slug":"/richtlijnen/formulieren/labels/altijd-zichtbaar","permalink":"/richtlijnen/formulieren/labels/altijd-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/4-always-visible/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg ervoor dat het label altijd zichtbaar is","title_sm":"Label zichtbaar","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Label zichtbaar","pagination_label":"Label zichtbaar","description":"Richtlijnen voor zichtbaarheid label van een formulierveld.","slug":"/richtlijnen/formulieren/labels/altijd-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Plaatsing label","permalink":"/richtlijnen/formulieren/labels/plaatsing"},"next":{"title":"Label bevat alleen tekst","permalink":"/richtlijnen/formulieren/labels/alleen-tekst"}}');
   var a = n(86070),
    s = n(18439),
    o = n(49539),
    t = n(80731),
    c = n(51519);
   function i(e) {
    const l = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, a.jsx)(c.$, { appearance: 'do', title: 'Het label blijft zichtbaar, ook als de gebruiker gaat invullen.', children: (0, a.jsx)(t.H, { language: 'html', children: () => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('p', { children: (0, a.jsx)('label', { htmlFor: 'dier1', children: 'Wat is je lievelingsdier?' }) }), (0, a.jsx)('p', { children: (0, a.jsx)('input', { type: 'text', id: 'dier1', name: 'lievelingsdier', placeholder: 'Bijvoorbeeld cavia' }) })] }) }) }), '\n', (0, a.jsx)(c.$, { appearance: 'dont', title: 'Alleen een placeholder gebruiken als zichtbaar label.', children: (0, a.jsx)(t.H, { language: 'html', children: () => (0, a.jsx)(a.Fragment, { children: (0, a.jsx)('p', { children: (0, a.jsx)('input', { type: 'text', id: 'dier2', name: 'lievelingsdier', placeholder: 'Wat is je lievelingsdier?', 'aria-label': 'Wat is je lievelingsdier?' }) }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, a.jsx)(l, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
   function h(e) {
    const l = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(l.header, { children: (0, a.jsx)(l.h1, { id: 'zorg-ervoor-dat-het-label-altijd-zichtbaar-is', children: 'Zorg ervoor dat het label altijd zichtbaar is' }) }), '\n', (0, a.jsx)(l.p, { children: 'Waarom? Als het label verdwijnt bij het typen kan er verwarring ontstaan: wat moet je ook alweer invullen? Daarom is een placeholder geen goede vervanging van het label.' }), '\n', (0, a.jsxs)(l.p, { children: ['De placeholder kan ook voor verwarring zorgen bij gebruikers. Is het al veld ingevuld? Zie het onderzoek ', (0, a.jsx)(l.a, { href: 'https://www.nngroup.com/articles/form-design-placeholders/', children: (0, a.jsx)('span', { lang: 'en', children: 'Placeholders in Form Fields Are Harmful' }) }), ' van de Nielsen Norman Group.'] }), '\n', (0, a.jsxs)(l.p, { children: ['Een label vertelt ', (0, a.jsx)(l.strong, { children: 'wat' }), ' je moet invullen en een placeholder ', (0, a.jsx)(l.strong, { children: 'hoe' }), ' je een formulierveld moet invullen. Voor een e-mailveld kan het label bijvoorbeeld "Jouw e-mailadres" zijn en de placeholder "', (0, a.jsx)(l.a, { href: 'mailto:naam@voorbeeld.com', children: 'naam@voorbeeld.com' }), '".'] }), '\n', (0, a.jsxs)(l.p, { children: ['De ', (0, a.jsx)(l.strong, { children: 'hoe' }), ' informatie kan ook in een description worden opgenomen, dan blijft deze informatie ook zichtbaar tijdens het invullen.'] }), '\n', (0, a.jsx)(l.p, { children: 'Een andere reden om een label niet te verbergen is om beter te kunnen controleren of alles goed is ingevuld met autocomplete.' }), '\n', (0, a.jsx)(l.p, { children: 'Namen, adressen en telefoonnummers kunnen automatisch vooraf worden ingevuld door de browser. Wanneer het label verborgen is, moet de gebruiker controleren of elke waarde juist is ingevuld bij het goede formulierveld. Dat is veel gemakkelijker, als het label altijd zichtbaar is.' })] });
   }
   function u(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, a.jsx)(l, { ...e, children: (0, a.jsx)(h, { ...e }) }) : h(e);
   }
   function m(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, a.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, a.jsxs)(l.ul, { children: ['\n', (0, a.jsx)(l.li, { children: (0, a.jsx)(l.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, a.jsx)(l.li, { children: (0, a.jsx)(l.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, a.jsx)(l.li, { children: (0, a.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, a.jsx)(l.li, { children: (0, a.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, a.jsx)(l, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
   }
   const b = { title: 'Zorg ervoor dat het label altijd zichtbaar is', title_sm: 'Label zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Label zichtbaar', pagination_label: 'Label zichtbaar', description: 'Richtlijnen voor zichtbaarheid label van een formulierveld.', slug: '/richtlijnen/formulieren/labels/altijd-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    v = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function x(e) {
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', (0, a.jsx)(u, {}), '\n', (0, a.jsx)(d, {}), '\n', (0, a.jsx)(p, {}), '\n', (0, a.jsx)(o.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, a.jsx)(l, { ...e, children: (0, a.jsx)(x, { ...e }) }) : x();
   }
  },
 },
]);
