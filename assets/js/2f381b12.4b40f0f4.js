'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [63986],
 {
  6141(e, l, n) {
   (n.r(l), n.d(l, { assets: () => v, contentTitle: () => g, default: () => y, frontMatter: () => b, metadata: () => r, toc: () => j }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/label/always-visible/index","title":"Zorg ervoor dat het label altijd zichtbaar is","description":"Richtlijnen voor zichtbaarheid label van een formulierveld.","source":"@site/docs/richtlijnen/formulieren/label/4-always-visible/index.mdx","sourceDirName":"richtlijnen/formulieren/label/4-always-visible","slug":"/richtlijnen/formulieren/labels/altijd-zichtbaar","permalink":"/richtlijnen/formulieren/labels/altijd-zichtbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/4-always-visible/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg ervoor dat het label altijd zichtbaar is","title_sm":"Label zichtbaar","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Label zichtbaar","pagination_label":"Label zichtbaar","description":"Richtlijnen voor zichtbaarheid label van een formulierveld.","slug":"/richtlijnen/formulieren/labels/altijd-zichtbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Plaatsing label","permalink":"/richtlijnen/formulieren/labels/plaatsing"},"next":{"title":"Label bevat alleen tekst","permalink":"/richtlijnen/formulieren/labels/alleen-tekst"}}');
   var s = n(86070),
    a = n(18439),
    o = n(78734),
    t = n(9386),
    i = n(88022);
   function c(e) {
    const l = { h2: 'h2', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(i.$, { appearance: 'do', title: 'Het label blijft zichtbaar, ook als de gebruiker gaat invullen.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'dier1', children: 'Wat is je lievelingsdier?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'dier1', name: 'lievelingsdier', placeholder: 'Bijvoorbeeld cavia' }) })] }) }) }), '\n', (0, s.jsx)(i.$, { appearance: 'dont', title: 'Alleen een placeholder gebruiken als zichtbaar label.', children: (0, s.jsx)(t.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'dier2', name: 'lievelingsdier', placeholder: 'Wat is je lievelingsdier?', 'aria-label': 'Wat is je lievelingsdier?' }) }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const l = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.header, { children: (0, s.jsx)(l.h1, { id: 'zorg-ervoor-dat-het-label-altijd-zichtbaar-is', children: 'Zorg ervoor dat het label altijd zichtbaar is' }) }), '\n', (0, s.jsx)(l.p, { children: 'Waarom? Als het label verdwijnt bij het typen kan er verwarring ontstaan: wat moet je ook alweer invullen? Daarom is een placeholder geen goede vervanging van het label.' }), '\n', (0, s.jsxs)(l.p, { children: ['De placeholder kan ook voor verwarring zorgen bij gebruikers. Is het al veld ingevuld? Zie het onderzoek ', (0, s.jsx)(l.a, { href: 'https://www.nngroup.com/articles/form-design-placeholders/', children: (0, s.jsx)('span', { lang: 'en', children: 'Placeholders in Form Fields Are Harmful' }) }), ' van de Nielsen Norman Group.'] }), '\n', (0, s.jsxs)(l.p, { children: ['Een label vertelt ', (0, s.jsx)(l.strong, { children: 'wat' }), ' je moet invullen en een placeholder ', (0, s.jsx)(l.strong, { children: 'hoe' }), ' je een formulierveld moet invullen. Voor een e-mailveld kan het label bijvoorbeeld "Jouw e-mailadres" zijn en de placeholder "', (0, s.jsx)(l.a, { href: 'mailto:naam@voorbeeld.com', children: 'naam@voorbeeld.com' }), '".'] }), '\n', (0, s.jsxs)(l.p, { children: ['De ', (0, s.jsx)(l.strong, { children: 'hoe' }), ' informatie kan ook in een description worden opgenomen, dan blijft deze informatie ook zichtbaar tijdens het invullen.'] }), '\n', (0, s.jsx)(l.p, { children: 'Een andere reden om een label niet te verbergen is om beter te kunnen controleren of alles goed is ingevuld met autocomplete.' }), '\n', (0, s.jsx)(l.p, { children: 'Namen, adressen en telefoonnummers kunnen automatisch vooraf worden ingevuld door de browser. Wanneer het label verborgen is, moet de gebruiker controleren of elke waarde juist is ingevuld bij het goede formulierveld. Dat is veel gemakkelijker, als het label altijd zichtbaar is.' })] });
   }
   function u(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(l.ul, { children: ['\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   const b = { title: 'Zorg ervoor dat het label altijd zichtbaar is', title_sm: 'Label zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Label zichtbaar', pagination_label: 'Label zichtbaar', description: 'Richtlijnen voor zichtbaarheid label van een formulierveld.', slug: '/richtlijnen/formulieren/labels/altijd-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    v = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function x(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(o.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x();
   }
  },
  9386(e, l, n) {
   n.d(l, { H: () => y });
   var r = n(95822),
    s = n(46447),
    a = n(13526),
    o = n(68148),
    t = n(9016),
    i = n(69303),
    c = n(91635),
    d = n(30734),
    h = n(30758),
    u = n(31186),
    p = n(65904),
    m = n.n(p),
    b = n(51627),
    g = n(86070);
   const v = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, g.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: l }) => {
       const n = 'function' == typeof e ? e() : e,
        r = (0, u.qV)(n)
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
        s = m().highlight(r, m().languages[l], l);
       return (0, g.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: r } }), (0, g.jsx)(b.n, { children: (0, g.jsx)(b.K, { label: 'Code', children: (0, g.jsx)('pre', { className: 'language-html nl-code-block', children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: p = !0, children: m, container: b = 'document', language: y, designTokens: f }) => {
       const _ = 'function' == typeof m ? m() : m,
        k = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(k || _),
        [w, z] = (0, h.useState)(N),
        [A, C] = (0, h.useState)(n);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: y, plugins: [o.A, t.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let L = h.Fragment;
       return (
        'paragraph' === b ? (L = v) : 'document' === b ? (L = j) : 'surface' === b && (L = x),
        (0, g.jsxs)('div', {
         className: (0, a.A)('nlds-canvas'),
         children: [
          _ && (0, g.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, g.jsx)(L, { children: (0, g.jsx)(s.v$, { children: _ }) }) }) }),
          p &&
           (0, g.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(s.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
           (0, g.jsxs)('div', {
            className: (0, a.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, g.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: w, trim: !0 }),
             l &&
              (0, g.jsx)('div', {
               className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(s.$n, {
                className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, l, n) {
   n.d(l, { R: () => o, x: () => t });
   var r = n(30758);
   const s = {},
    a = r.createContext(s);
   function o(e) {
    const l = r.useContext(a);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function t(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), r.createElement(a.Provider, { value: l }, e.children));
   }
  },
  51627(e, l, n) {
   n.d(l, { K: () => i, n: () => t });
   var r = n(13526),
    s = n(96345),
    a = n(37168),
    o = n(86070);
   const t = ({ className: e, ...l }) => {
     const n = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, o.jsx)('div', { className: n, children: l.children });
    },
    i = ({ className: e, label: l, heading: n, headingLevel: t, headingApperance: i, ...c }) => {
     const d = (0, r.A)('utrecht-accordion__section', e);
     return (0, o.jsxs)('details', { className: d, ...c, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(s.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [n && (0, o.jsx)(a.D, { level: t, appearance: i, children: n }), l] })] }) }), (0, o.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, l, n) {
   n.d(l, { Ay: () => t, RM: () => a });
   var r = n(86070),
    s = n(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  88022(e, l, n) {
   n.d(l, { $: () => h, x: () => d });
   var r = n(4077),
    s = n(58315),
    a = n(46447),
    o = n(13526),
    t = n(45980),
    i = n(30758),
    c = n(86070);
   const d = (0, i.createContext)({}),
    h = ({ title: e, appearance: l, description: n, children: i, figure: h }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = h ? 'figure' : 'div',
      m = h ? 'figcaption' : 'div',
      b = 'string' == typeof n ? (0, c.jsx)(t.oz, { children: n }) : n;
     return (0, c.jsxs)(p, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(a.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(a.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(a.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(a.fz, { children: e })] }), b] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: u[l] }, children: i }) })] });
    };
  },
  95822(e, l, n) {
   n.d(l, { M: () => c });
   var r = n(46447),
    s = n(16194),
    a = n(30758),
    o = n(88022);
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
   var i = n(86070);
   function c({ lineNumber: e, syntax: l, textContent: n, trim: c }) {
    let d = n;
    const { title: h, type: u } = (0, a.useContext)(o.x),
     p = (0, a.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: t, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: s, getTokenProps: a }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(r.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: l, children: n.map((l, n) => (0, i.jsxs)('span', { ...s({ line: l }), children: [e && (0, i.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, i.jsx)('span', { ...a({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
 },
]);
