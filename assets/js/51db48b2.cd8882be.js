'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [96291],
 {
  8649: (e, n, t) => {
   t.d(n, { H: () => j });
   var o = t(16609),
    l = t(68873),
    a = t(13526),
    s = t(58713),
    r = t(87347),
    i = t(39644),
    c = t(92406),
    d = t(63313),
    p = t(30758),
    u = t(31186),
    h = t(86070);
   const b = ({ children: e }) => (0, h.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(l.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const k = ({ children: e }) => (0, h.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(l.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   k.displayName = 'DocumentContainer';
   const m = ({ children: e }) => (0, h.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   m.displayName = 'SurfaceContainer';
   const j = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: j = !0, children: g, container: v = 'document', language: y, designTokens: x }) => {
    const f = 'function' == typeof g ? g() : g,
     _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : u.qV(_ || f),
     [z, N] = (0, p.useState)(w),
     [A, C] = (0, p.useState)(t);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: y, plugins: [s.A, r.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const S = (0, p.useId)();
    let W = p.Fragment;
    return (
     'paragraph' === v ? (W = b) : 'document' === v ? (W = k) : 'surface' === v && (W = m),
     (0, h.jsxs)('div', {
      className: (0, a.A)('nlds-canvas'),
      children: [
       f && (0, h.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, h.jsx)(W, { children: (0, h.jsx)(l.v$, { children: f }) }) }) }),
       j &&
        (0, h.jsx)('div', {
         className: (0, a.A)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(l.$n, {
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
       j &&
        (0, h.jsxs)('div', {
         className: (0, a.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !A,
         children: [
          (0, h.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: z, trim: !0 }),
          n &&
           (0, h.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(l.$n, {
             className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  16609: (e, n, t) => {
   t.d(n, { M: () => c });
   var o = t(68873),
    l = t(16194),
    a = t(30758),
    s = t(50124);
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
   var i = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: p, type: u } = (0, a.useContext)(s.x),
     h = (0, a.useId)();
    return c && (d = d.trim()), (0, i.jsx)(l.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: a }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(o.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': h, style: n, children: t.map((n, t) => (0, i.jsxs)('span', { ...l({ line: n }), children: [e && (0, i.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, t)) })] }) });
   }
  },
  50124: (e, n, t) => {
   t.d(n, { $: () => d, x: () => c });
   var o = t(54736),
    l = t(26990),
    a = t(68873),
    s = t(13526),
    r = t(30758),
    i = t(86070);
   const c = (0, r.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: r, figure: d }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = d ? 'figure' : 'div',
      h = d ? 'figcaption' : 'div';
     return (0, i.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(a.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(a.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(a.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(a.fz, { children: e })] }), t] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: p[n] }, children: r }) })] });
    };
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => r, RM: () => a });
   var o = t(86070),
    l = t(85248);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => s, x: () => r });
   var o = t(30758);
   const l = {},
    a = o.createContext(l);
   function s(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), o.createElement(a.Provider, { value: n }, e.children);
   }
  },
  92061: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => d, default: () => b, frontMatter: () => c, metadata: () => o, toc: () => u });
   const o = JSON.parse('{"id":"richtlijnen/content/office-docs","title":"Kantoorbestanden \xb7 Content \xb7 Richtlijnen","description":"...","source":"@site/docs/richtlijnen/content/office-docs.md","sourceDirName":"richtlijnen/content","slug":"/richtlijnen/content/kantoorbestanden","permalink":"/richtlijnen/content/kantoorbestanden","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/office-docs.md","tags":[],"version":"current","frontMatter":{"title":"Kantoorbestanden \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Kantoorbestanden","pagination_label":"Kantoorbestanden","description":"...","slug":"/richtlijnen/content/kantoorbestanden","keywords":["links","documenten"]},"sidebar":"richtlijnen","previous":{"title":"Transcript","permalink":"/richtlijnen/content/video/transcript"},"next":{"title":"Introductie","permalink":"/richtlijnen/formulieren"}}');
   var l = t(86070),
    a = t(85248),
    s = t(8649),
    r = t(50124),
    i = t(78734);
   const c = { title: 'Kantoorbestanden \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Kantoorbestanden', pagination_label: 'Kantoorbestanden', description: '...', slug: '/richtlijnen/content/kantoorbestanden', keywords: ['links', 'documenten'] },
    d = 'Kantoorbestanden',
    p = {},
    u = [{ value: 'Ook kantoorbestanden moeten toegankelijk zijn', id: 'ook-kantoorbestanden-moeten-toegankelijk-zijn', level: 2 }, { value: 'Waar kun je als contentmaker op letten?', id: 'waar-kun-je-als-contentmaker-op-letten', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function h(e) {
    const n = { a: 'a', br: 'br', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'kantoorbestanden', children: 'Kantoorbestanden' }) }), '\n', (0, l.jsx)(n.p, { children: 'Soms link je naar een bestand buiten de webpagina \u2014 bijvoorbeeld een PDF of Word-bestand. Maar zulke bestanden zijn niet altijd goed toegankelijk. Waarschijnlijk maak je deze bestanden niet zelf, maar publiceer je ze w\xe9l. Daarom is het belangrijk dat je alert bent op de toegankelijkheid ervan.' }), '\n', (0, l.jsx)(n.h2, { id: 'ook-kantoorbestanden-moeten-toegankelijk-zijn', children: 'Ook kantoorbestanden moeten toegankelijk zijn' }), '\n', (0, l.jsx)(n.p, { children: 'Kantoorbestanden die je op de website zet of waar je naar verwijst, zoals pdf\u2019s of Word-bestanden, moeten net zo goed toegankelijk zijn als de rest van je content. Denk aan koppenstructuur, duidelijke leesvolgorde, alternatieve teksten en toegankelijke formulieren. Als contentmaker kun je vaak niet alles zelf controleren, maar je kunt w\xe9l kritisch meekijken en vragen stellen.' }), '\n', (0, l.jsx)(n.h2, { id: 'waar-kun-je-als-contentmaker-op-letten', children: 'Waar kun je als contentmaker op letten?' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: ['Is het echt nodig om een kantoorbestand te gebruiken?', (0, l.jsx)(n.br, {}), '\n', 'Kun je de inhoud ook gewoon als webpagina aanbieden? Dat is bijna altijd gebruiksvriendelijker \xe9n beter toegankelijk.'] }), '\n', (0, l.jsxs)(n.li, { children: ['Is het kantoorbestand goed opgemaakt?', (0, l.jsx)(n.br, {}), '\n', 'Vraag na of de maker het kantoorbestand toegankelijk heeft gemaakt. Gebruik hierbij ', (0, l.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/aan-de-slag/tips/kantoorbestanden', children: 'de documentatie over kantoorbestanden van DigiToegankelijk' }), '.'] }), '\n', (0, l.jsxs)(n.li, { children: ['Heb je een duidelijke linktekst gebruikt?', (0, l.jsx)(n.br, {}), '\n', 'Vermeld wat voor document het is (zoals \u2018pdf\u2019 of \u2018Word\u2019) en geef aan waar het over gaat. Bijvoorbeeld:\nJaarverslag 2024 (pdf) of Aanvraagformulier (Word)'] }), '\n', (0, l.jsxs)(n.li, { children: ['Bied je alternatieven aan?', (0, l.jsx)(n.br, {}), '\n', 'Kan iemand die het kantoorbestand niet kan openen, de informatie op een andere manier krijgen? Biedt de inhoud bijvoorbeeld ook als een webpagina aan, of biedt contactgegevens aan waarmee bezoekers de informatie kunnen opvragen.'] }), '\n'] }), '\n', (0, l.jsx)(r.$, { appearance: 'do', title: 'In de linktekst vermelden om wat voor document het gaat', children: (0, l.jsx)(s.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(n.a, { href: 'https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link', children: 'Download de rapportage digitale toegankelijkheid 2023 (pdf 400 kB)' }) }) }) }), '\n', (0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: 'Ook kantoorbestanden zoals pdf\u2019s vallen onder dezelfde toegankelijkheidsprincipes als webpagina\u2019s. Veel verschillende WCAG-richtlijnen kunnen daarom van toepassing zijn. Hieronder staan een paar succescriteria waarop het het vaakst misgaat in bestanden:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Successcriterium 1.1.1 Niet-tekstuele content' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Successcriterium 1.3.1 Info en relaties' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.2/', children: 'Successcriterium 2.4.2 Paginatitel' }) }), '\n'] }), '\n', (0, l.jsx)(i.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
