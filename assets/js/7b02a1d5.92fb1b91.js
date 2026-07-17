'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33145],
 {
  9386(e, n, o) {
   o.d(n, { H: () => x });
   var s = o(95822),
    l = o(46447),
    i = o(13526),
    t = o(68148),
    r = o(9016),
    a = o(69303),
    c = o(91635),
    d = o(30734),
    h = o(30758),
    v = o(31186),
    p = o(65904),
    g = o.n(p),
    j = o(51627),
    u = o(86070);
   const b = ({ children: e }) => (0, u.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(l.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const m = ({ children: e }) => (0, u.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(l.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   m.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, u.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const x = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const o = 'function' == typeof e ? e() : e,
        s = (0, v.qV)(o)
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
        l = g().highlight(s, g().languages[n], n);
       return (0, u.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, u.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: s } }), (0, u.jsx)(j.n, { children: (0, u.jsx)(j.K, { label: 'Code', children: (0, u.jsx)('pre', { className: 'language-html nl-code-block', children: (0, u.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: l } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: p = !0, children: g, container: j = 'document', language: x, designTokens: k }) => {
       const f = 'function' == typeof g ? g() : g,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : v.qV(_ || f),
        [N, z] = (0, h.useState)(w),
        [A, C] = (0, h.useState)(o);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: x, plugins: [t.A, r.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [w]);
       const S = (0, h.useId)();
       let V = h.Fragment;
       return (
        'paragraph' === j ? (V = b) : 'document' === j ? (V = m) : 'surface' === j && (V = y),
        (0, u.jsxs)('div', {
         className: (0, i.A)('nlds-canvas'),
         children: [
          f && (0, u.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, u.jsx)(V, { children: (0, u.jsx)(l.v$, { children: f }) }) }) }),
          p &&
           (0, u.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar'),
            children: (0, u.jsx)(l.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
           (0, u.jsxs)('div', {
            className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, u.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
             n &&
              (0, u.jsx)('div', {
               className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, u.jsx)(l.$n, {
                className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, o) {
   o.d(n, { R: () => t, x: () => r });
   var s = o(30758);
   const l = {},
    i = s.createContext(l);
   function t(e) {
    const n = s.useContext(i);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : t(e.components)), s.createElement(i.Provider, { value: n }, e.children));
   }
  },
  25214(e, n, o) {
   (o.r(n), o.d(n, { assets: () => h, contentTitle: () => d, default: () => g, frontMatter: () => c, metadata: () => s, toc: () => v }));
   const s = JSON.parse('{"id":"richtlijnen/content/video/beschrijving","title":"Beschrijving voor video","description":"Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.","source":"@site/docs/richtlijnen/content/video/beschrijving.mdx","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video/beschrijving","permalink":"/richtlijnen/content/video/beschrijving","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/beschrijving.mdx","tags":[],"version":"current","frontMatter":{"title":"Beschrijving voor video","title_sm":"Video beschrijving","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Video beschrijving","pagination_label":"Video beschrijving","description":"Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.","slug":"/richtlijnen/content/video/beschrijving","keywords":["video","YouTube","Vimeo","iFrame","alternatieve tekst video","video beschrijving"]},"sidebar":"richtlijnen","previous":{"title":"Audiodescriptie","permalink":"/richtlijnen/content/video/audiodescriptie"},"next":{"title":"Flitsen","permalink":"/richtlijnen/content/video/flitsen"}}');
   var l = o(86070),
    i = o(18439),
    t = o(9386),
    r = o(88022),
    a = o(78734);
   const c = { title: 'Beschrijving voor video', title_sm: 'Video beschrijving', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Video beschrijving', pagination_label: 'Video beschrijving', description: 'Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.', slug: '/richtlijnen/content/video/beschrijving', keywords: ['video', 'YouTube', 'Vimeo', 'iFrame', 'alternatieve tekst video', 'video beschrijving'] },
    d = 'Video beschrijving',
    h = {},
    v = [{ value: 'Een beschrijving op de pagina', id: 'een-beschrijving-op-de-pagina', level: 2 }, { value: 'Een beschrijving in de videospeler', id: 'een-beschrijving-in-de-videospeler', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'video-beschrijving', children: 'Video beschrijving' }) }), '\n', (0, l.jsx)(n.p, { children: 'Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.' }), '\n', (0, l.jsx)(n.h2, { id: 'een-beschrijving-op-de-pagina', children: 'Een beschrijving op de pagina' }), '\n', (0, l.jsx)(n.p, { children: 'Beschrijf b\xf3ven de videospeler op de pagina waar de video over gaat. Dit kan bijvoorbeeld in een beschrijvende paragraaf, of met een kopje. Zo begrijpen alle bezoekers wat zij kunnen verwachten van de video en bepalen of ze de video willen bekijken.' }), '\n', (0, l.jsx)(r.$, { appearance: 'do', title: "Video's op de pagina een beschrijving geven", children: (0, l.jsx)(t.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('h1', { children: 'Heartbeat terugkijken' }), (0, l.jsx)('p', { children: 'Heartbeat terugkijken? Op deze pagina vind je de opnames.' }), (0, l.jsx)('h2', { children: '10 juni 2025' }), (0, l.jsx)('p', { children: 'Renate vertelt over de nieuwe richtlijnen voor tekstopmaak en waar je allemaal rekening mee moet houden.' })] }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'een-beschrijving-in-de-videospeler', children: 'Een beschrijving in de videospeler' }), '\n', (0, l.jsxs)(n.p, { children: ['Voor bezoekers die gebruik maken van een ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' is het belangrijk dat de videospeler ook een beschrijving heeft. Een goede beschrijving van de videospeler is de titel van je video. Zo weet je als bezoeker wat je kunt verwachten.'] }), '\n', (0, l.jsxs)(n.p, { children: ["Video's die je vanaf YouTube en Vimeo op je pagina plaatst, worden meestal in een ", (0, l.jsx)(n.code, { children: 'iFrame' }), ' op de pagina geplaatst. Het is niet altijd nodig om zelf de beschrijving van het ', (0, l.jsx)(n.code, { children: 'iFrame' }), " of een videospeler aan te passen. Vraag bij de beheerder van je contentmanagementsysteem (CMS) na of video's automatisch een beschrijving krijgen. Wordt er niet automatisch een beschrijving meegegeven? Vraag dan na wat de beste manier is om dit in jullie CMS te doen."] }), '\n', (0, l.jsx)(n.p, { children: 'Gebruikt jouw organisatie een eigen videospeler? Het hangt af van welke videospeler jouw organisatie gebruikt of je zelf een beschrijving moet toevoegen en hoe je dat doet. Vraag dit na bij de beheerder van je CMS.' }), '\n', (0, l.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, l.jsx)(n.p, { children: 'Controleer voor iedere video:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: 'Heeft de video een beschrijving op de pagina, bijvoorbeeld in een paragraaf of een kopje?' }), '\n', (0, l.jsx)(n.li, { children: 'Krijgt de videospeler automatisch een beschrijving mee? Vraag dit na bij de beheerder van je CMS. Zo nee, vraag dan na hoe je het beste zelf een beschrijving mee kunt geven. Daar controleer je vervolgens ook of de video een beschrijving heeft, bijvoorbeeld de titel van de video.' }), '\n'] }), '\n', (0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, l.jsx)(a.Ay, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
  },
  51627(e, n, o) {
   o.d(n, { K: () => a, n: () => r });
   var s = o(13526),
    l = o(96345),
    i = o(37168),
    t = o(86070);
   const r = ({ className: e, ...n }) => {
     const o = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, t.jsx)('div', { className: o, children: n.children });
    },
    a = ({ className: e, label: n, heading: o, headingLevel: r, headingApperance: a, ...c }) => {
     const d = (0, s.A)('utrecht-accordion__section', e);
     return (0, t.jsxs)('details', { className: d, ...c, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(l.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [o && (0, t.jsx)(i.D, { level: r, appearance: a, children: o }), n] })] }) }), (0, t.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, o) {
   o.d(n, { Ay: () => r, RM: () => i });
   var s = o(86070),
    l = o(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
  },
  88022(e, n, o) {
   o.d(n, { $: () => h, x: () => d });
   var s = o(4077),
    l = o(58315),
    i = o(46447),
    t = o(13526),
    r = o(45980),
    a = o(30758),
    c = o(86070);
   const d = (0, a.createContext)({}),
    h = ({ title: e, appearance: n, description: o, children: a, figure: h }) => {
     const v = { do: 'Doen', dont: 'Niet doen' },
      p = h ? 'figure' : 'div',
      g = h ? 'figcaption' : 'div',
      j = 'string' == typeof o ? (0, c.jsx)(r.oz, { children: o }) : o;
     return (0, c.jsxs)(p, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: v.dont })] }), (0, c.jsx)(i.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(i.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: v.do })] }), (0, c.jsx)(i.fz, { children: e })] }), j] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: v[n] }, children: a }) })] });
    };
  },
  95822(e, n, o) {
   o.d(n, { M: () => c });
   var s = o(46447),
    l = o(16194),
    i = o(30758),
    t = o(88022);
   const r = {
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
   var a = o(86070);
   function c({ lineNumber: e, syntax: n, textContent: o, trim: c }) {
    let d = o;
    const { title: h, type: v } = (0, i.useContext)(t.x),
     p = (0, i.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(l.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: l, getTokenProps: i }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', v ? `\u201c${v}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...l({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
 },
]);
