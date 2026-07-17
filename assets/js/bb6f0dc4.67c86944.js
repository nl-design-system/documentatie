'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [31466],
 {
  9386(e, l, n) {
   n.d(l, { H: () => y });
   var r = n(95822),
    s = n(46447),
    a = n(13526),
    t = n(68148),
    o = n(9016),
    c = n(69303),
    i = n(91635),
    d = n(30734),
    h = n(30758),
    u = n(31186),
    p = n(65904),
    m = n.n(p),
    g = n(51627),
    v = n(86070);
   const b = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
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
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: r } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: p = !0, children: m, container: g = 'document', language: y, designTokens: f }) => {
       const k = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : u.qV(_ || k),
        [w, A] = (0, h.useState)(N),
        [z, C] = (0, h.useState)(n);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: y, plugins: [t.A, o.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const S = (0, h.useId)();
       let F = h.Fragment;
       return (
        'paragraph' === g ? (F = b) : 'document' === g ? (F = j) : 'surface' === g && (F = x),
        (0, v.jsxs)('div', {
         className: (0, a.A)('nlds-canvas'),
         children: [
          k && (0, v.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(F, { children: (0, v.jsx)(s.v$, { children: k }) }) }) }),
          p &&
           (0, v.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(s.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, v.jsxs)('div', {
            className: (0, a.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, v.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: w, trim: !0 }),
             l &&
              (0, v.jsx)('div', {
               className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(s.$n, {
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
   n.d(l, { R: () => t, x: () => o });
   var r = n(30758);
   const s = {},
    a = r.createContext(s);
   function t(e) {
    const l = r.useContext(a);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function o(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), r.createElement(a.Provider, { value: l }, e.children));
   }
  },
  51627(e, l, n) {
   n.d(l, { K: () => c, n: () => o });
   var r = n(13526),
    s = n(96345),
    a = n(37168),
    t = n(86070);
   const o = ({ className: e, ...l }) => {
     const n = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, t.jsx)('div', { className: n, children: l.children });
    },
    c = ({ className: e, label: l, heading: n, headingLevel: o, headingApperance: c, ...i }) => {
     const d = (0, r.A)('utrecht-accordion__section', e);
     return (0, t.jsxs)('details', { className: d, ...i, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(s.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [n && (0, t.jsx)(a.D, { level: o, appearance: c, children: n }), l] })] }) }), (0, t.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  78734(e, l, n) {
   n.d(l, { Ay: () => o, RM: () => a });
   var r = n(86070),
    s = n(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: l } = { ...(0, s.R)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  88022(e, l, n) {
   n.d(l, { $: () => h, x: () => d });
   var r = n(4077),
    s = n(58315),
    a = n(46447),
    t = n(13526),
    o = n(45980),
    c = n(30758),
    i = n(86070);
   const d = (0, c.createContext)({}),
    h = ({ title: e, appearance: l, description: n, children: c, figure: h }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = h ? 'figure' : 'div',
      m = h ? 'figcaption' : 'div',
      g = 'string' == typeof n ? (0, i.jsx)(o.oz, { children: n }) : n;
     return (0, i.jsxs)(p, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(a.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(a.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(a.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(a.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: u[l] }, children: c }) })] });
    };
  },
  95822(e, l, n) {
   n.d(l, { M: () => i });
   var r = n(46447),
    s = n(16194),
    a = n(30758),
    t = n(88022);
   const o = {
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
    const { title: h, type: u } = (0, a.useContext)(t.x),
     p = (0, a.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(s.f4, { theme: o, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: s, getTokenProps: a }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, c.jsx)(r.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: l, children: n.map((l, n) => (0, c.jsxs)('span', { ...s({ line: l }), children: [e && (0, c.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, c.jsx)('span', { ...a({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
  98687(e, l, n) {
   (n.r(l), n.d(l, { assets: () => b, contentTitle: () => v, default: () => y, frontMatter: () => g, metadata: () => r, toc: () => j }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/label/index","title":"Een placeholder is geen vervanger van een label","description":"Richtlijnen over placeholder niet gebruiken als vervanger van een label.","source":"@site/docs/richtlijnen/formulieren/placeholder/1-label/index.mdx","sourceDirName":"richtlijnen/formulieren/placeholder/1-label","slug":"/richtlijnen/formulieren/placeholders/niet-als-label","permalink":"/richtlijnen/formulieren/placeholders/niet-als-label","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/1-label/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Een placeholder is geen vervanger van een label","title_sm":"Placeholder is geen label","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Placeholder is geen label","pagination_label":"Placeholder is geen label","description":"Richtlijnen over placeholder niet gebruiken als vervanger van een label.","slug":"/richtlijnen/formulieren/placeholders/niet-als-label","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholders in een formulier","permalink":"/richtlijnen/formulieren/placeholders/"},"next":{"title":"Placeholder bij zoekfunctie","permalink":"/richtlijnen/formulieren/placeholders/zoekfunctie"}}');
   var s = n(86070),
    a = n(18439),
    t = n(78734),
    o = n(9386),
    c = n(88022);
   function i(e) {
    const l = { h2: 'h2', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(c.$, { appearance: 'do', title: 'Het label altijd tonen en een description gebruiken als aanvullende informatie.', children: (0, s.jsx)(o.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'lievelingskleur1', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { id: 'description-kleur1', children: 'Vul de naam van een kleur in.' }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { 'aria-describedby': 'description-kleur1', id: 'lievelingskleur1', name: 'lievelingskleur', type: 'text' }) })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'do', title: 'Het label altijd tonen en een placeholder als korte hint gebruiken.', children: (0, s.jsx)(o.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'lievelingskleur2', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'lievelingskleur2', type: 'text', name: 'lievelingskleur', placeholder: 'Vul een kleurnaam in' }) })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Het label onzichtbaar maken.', children: (0, s.jsx)(o.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { className: 'sr-only', htmlFor: 'lievelingskleur3', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'lievelingskleur3', name: 'lievelingskleur', placeholder: 'Wat is je lievelingskleur?', type: 'text' }) })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Placeholdertekst heel lang maken zodat een deel uit het formulierveld valt en daardoor onleesbaar wordt. Gebruik in dat geval een description.', children: (0, s.jsx)(o.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'lievelingskleur4', children: 'Wat is je lievelingskleur?' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'lievelingskleur4', name: 'lievelingskleur', placeholder: 'Geef is je lievelingskleur? Bijvoorbeeld rood, wit, geel of blauw.', type: 'text' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i(e);
   }
   function h(e) {
    const l = { h1: 'h1', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.header, { children: (0, s.jsx)(l.h1, { id: 'een-placeholder-is-geen-vervanger-van-een-label', children: 'Een placeholder is geen vervanger van een label' }) }), '\n', (0, s.jsx)(l.p, { children: 'De gebruiker moet altijd een zichtbare indicatie hebben over wat in te vullen. Ook tijdens het typen, wanneer de placeholder verdwijnt of als de informatie al automatisch is ingevuld.' }), '\n', (0, s.jsx)(l.p, { children: 'Gebruik dus niet enkel de placeholder om aan te geven wat een gebruiker moet invullen.' }), '\n', (0, s.jsx)(l.p, { children: 'Een ander probleem met placeholders is dat bij inzoomen lange tekst te groot kan worden voor het formulierveld en daardoor afhakt en onleesbaar wordt.' })] });
   }
   function u(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(l.ul, { children: ['\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/1.4.10/', children: 'Succescriterium 1.4.10 Reflow' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n', (0, s.jsx)(l.li, { children: (0, s.jsx)(l.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Een placeholder is geen vervanger van een label', title_sm: 'Placeholder is geen label', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder is geen label', pagination_label: 'Placeholder is geen label', description: 'Richtlijnen over placeholder niet gebruiken als vervanger van een label.', slug: '/richtlijnen/formulieren/placeholders/niet-als-label', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    b = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function x(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: l } = { ...(0, a.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x();
   }
  },
 },
]);
