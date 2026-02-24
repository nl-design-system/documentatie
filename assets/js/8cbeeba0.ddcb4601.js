'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [77493],
 {
  15638(e, n, o) {
   o.d(n, { $: () => v, x: () => d });
   var i = o(4077),
    t = o(58315),
    s = o(46447),
    r = o(13526),
    l = o(9547),
    a = o(30758),
    c = o(86070);
   const d = (0, a.createContext)({}),
    v = ({ title: e, appearance: n, description: o, children: a, figure: v }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = v ? 'figure' : 'div',
      j = v ? 'figcaption' : 'div',
      g = 'string' == typeof o ? (0, c.jsx)(l.oz, { children: o }) : o;
     return (0, c.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(j, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(i.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(s.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  18439(e, n, o) {
   o.d(n, { R: () => r, x: () => l });
   var i = o(30758);
   const t = {},
    s = i.createContext(t);
   function r(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), i.createElement(s.Provider, { value: n }, e.children));
   }
  },
  50263(e, n, o) {
   (o.r(n), o.d(n, { assets: () => v, contentTitle: () => d, default: () => j, frontMatter: () => c, metadata: () => i, toc: () => h }));
   const i = JSON.parse('{"id":"richtlijnen/content/video/beschrijving","title":"Beschrijving voor video \xb7 Video \xb7 Content \xb7 Richtlijnen","description":"Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.","source":"@site/docs/richtlijnen/content/video/beschrijving.md","sourceDirName":"richtlijnen/content/video","slug":"/richtlijnen/content/video/beschrijving","permalink":"/richtlijnen/content/video/beschrijving","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/video/beschrijving.md","tags":[],"version":"current","frontMatter":{"title":"Beschrijving voor video \xb7 Video \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Video beschrijving","pagination_label":"Video beschrijving","description":"Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.","slug":"/richtlijnen/content/video/beschrijving","keywords":["video","YouTube","Vimeo","iFrame","alternatieve tekst video","video beschrijving"]},"sidebar":"richtlijnen","previous":{"title":"Audiodescriptie","permalink":"/richtlijnen/content/video/audiodescriptie"},"next":{"title":"Flitsen","permalink":"/richtlijnen/content/video/flitsen"}}');
   var t = o(86070),
    s = o(18439),
    r = o(58639),
    l = o(15638),
    a = o(78734);
   const c = { title: 'Beschrijving voor video \xb7 Video \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Video beschrijving', pagination_label: 'Video beschrijving', description: 'Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.', slug: '/richtlijnen/content/video/beschrijving', keywords: ['video', 'YouTube', 'Vimeo', 'iFrame', 'alternatieve tekst video', 'video beschrijving'] },
    d = 'Video beschrijving',
    v = {},
    h = [{ value: 'Een beschrijving op de pagina', id: 'een-beschrijving-op-de-pagina', level: 2 }, { value: 'Een beschrijving in de videospeler', id: 'een-beschrijving-in-de-videospeler', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'video-beschrijving', children: 'Video beschrijving' }) }), '\n', (0, t.jsx)(n.p, { children: 'Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.' }), '\n', (0, t.jsx)(n.h2, { id: 'een-beschrijving-op-de-pagina', children: 'Een beschrijving op de pagina' }), '\n', (0, t.jsx)(n.p, { children: 'Beschrijf b\xf3ven de videospeler op de pagina waar de video over gaat. Dit kan bijvoorbeeld in een beschrijvende paragraaf, of met een kopje. Zo begrijpen alle bezoekers wat zij kunnen verwachten van de video en bepalen of ze de video willen bekijken.' }), '\n', (0, t.jsx)(l.$, { appearance: 'do', title: "Video's op de pagina een beschrijving geven", children: (0, t.jsx)(r.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('h1', { children: 'Heartbeat terugkijken' }), (0, t.jsx)('p', { children: 'Heartbeat terugkijken? Op deze pagina vind je de opnames.' }), (0, t.jsx)('h2', { children: '10 juni 2025' }), (0, t.jsx)('p', { children: 'Renate vertelt over de nieuwe richtlijnen voor tekstopmaak en waar je allemaal rekening mee moet houden.' })] }) }) }), '\n', (0, t.jsx)(n.h2, { id: 'een-beschrijving-in-de-videospeler', children: 'Een beschrijving in de videospeler' }), '\n', (0, t.jsxs)(n.p, { children: ['Voor bezoekers die gebruik maken van een ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' is het belangrijk dat de videospeler ook een beschrijving heeft. Een goede beschrijving van de videospeler is de titel van je video. Zo weet je als bezoeker wat je kunt verwachten.'] }), '\n', (0, t.jsxs)(n.p, { children: ["Video's die je vanaf YouTube en Vimeo op je pagina plaatst, worden meestal in een ", (0, t.jsx)(n.code, { children: 'iFrame' }), ' op de pagina geplaatst. Het is niet altijd nodig om zelf de beschrijving van het ', (0, t.jsx)(n.code, { children: 'iFrame' }), " of een videospeler aan te passen. Vraag bij de beheerder van je contentmanagementsysteem (CMS) na of video's automatisch een beschrijving krijgen. Wordt er niet automatisch een beschrijving meegegeven? Vraag dan na wat de beste manier is om dit in jullie CMS te doen."] }), '\n', (0, t.jsx)(n.p, { children: 'Gebruikt jouw organisatie een eigen videospeler? Het hangt af van welke videospeler jouw organisatie gebruikt of je zelf een beschrijving moet toevoegen en hoe je dat doet. Vraag dit na bij de beheerder van je CMS.' }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Controleer voor iedere video:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Heeft de video een beschrijving op de pagina, bijvoorbeeld in een paragraaf of een kopje?' }), '\n', (0, t.jsx)(n.li, { children: 'Krijgt de videospeler automatisch een beschrijving mee? Vraag dit na bij de beheerder van je CMS. Zo nee, vraag dan na hoe je het beste zelf een beschrijving mee kunt geven. Daar controleer je vervolgens ook of de video een beschrijving heeft, bijvoorbeeld de titel van de video.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n'] }), '\n', (0, t.jsx)(a.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
  },
  58639(e, n, o) {
   o.d(n, { H: () => b });
   var i = o(69284),
    t = o(46447),
    s = o(13526),
    r = o(68148),
    l = o(9016),
    a = o(69303),
    c = o(91635),
    d = o(30734),
    v = o(30758),
    h = o(31186),
    p = o(86070);
   const j = ({ children: e }) => (0, p.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const g = ({ children: e }) => (0, p.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   g.displayName = 'DocumentContainer';
   const u = ({ children: e }) => (0, p.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   u.displayName = 'SurfaceContainer';
   const b = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: b = !0, children: m, container: y = 'document', language: x, designTokens: k }) => {
    const f = 'function' == typeof m ? m() : m,
     _ = 'function' == typeof e ? e() : (0, v.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : h.qV(_ || f),
     [z, N] = (0, v.useState)(w),
     [C, A] = (0, v.useState)(o);
    (0, v.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: x, plugins: [r.A, l.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const S = (0, v.useId)();
    let V = v.Fragment;
    return (
     'paragraph' === y ? (V = j) : 'document' === y ? (V = g) : 'surface' === y && (V = u),
     (0, p.jsxs)('div', {
      className: (0, s.A)('nlds-canvas'),
      children: [
       f && (0, p.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(V, { children: (0, p.jsx)(t.v$, { children: f }) }) }) }),
       b &&
        (0, p.jsx)('div', {
         className: (0, s.A)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(t.$n, {
          className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           A(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, p.jsxs)('div', {
         className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, p.jsx)(i.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: z, trim: !0 }),
          n &&
           (0, p.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(t.$n, {
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
   o.d(n, { M: () => c });
   var i = o(46447),
    t = o(16194),
    s = o(30758),
    r = o(15638);
   const l = {
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
    const { title: v, type: h } = (0, s.useContext)(r.x),
     p = (0, s.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(t.f4, { theme: l, code: d, language: n || '', children: ({ style: n, tokens: o, getLineProps: t, getTokenProps: s }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', v ? ': ' : ' ', v] }), (0, a.jsx)(i.NG, { tabIndex: 0, role: v ? 'region' : void 0, 'aria-labelledby': p, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...t({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] }) }));
   }
  },
  78734(e, n, o) {
   o.d(n, { Ay: () => l, RM: () => s });
   var i = o(86070),
    t = o(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
 },
]);
