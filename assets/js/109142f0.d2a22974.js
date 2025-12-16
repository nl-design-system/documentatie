'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [23730],
 {
  8649: (e, n, t) => {
   t.d(n, { H: () => g });
   var l = t(16609),
    s = t(68873),
    i = t(13526),
    o = t(58713),
    r = t(87347),
    a = t(39644),
    c = t(92406),
    d = t(63313),
    k = t(30758),
    h = t(31186),
    p = t(86070);
   const u = ({ children: e }) => (0, p.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(s.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   u.displayName = 'ParagraphContainer';
   const j = ({ children: e }) => (0, p.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(s.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   j.displayName = 'DocumentContainer';
   const m = ({ children: e }) => (0, p.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   m.displayName = 'SurfaceContainer';
   const g = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: g = !0, children: b, container: v = 'document', language: y, designTokens: x }) => {
    const f = 'function' == typeof b ? b() : b,
     _ = 'function' == typeof e ? e() : (0, k.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : h.qV(_ || f),
     [z, N] = (0, k.useState)(w),
     [C, A] = (0, k.useState)(t);
    (0, k.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: y, plugins: [o.A, r.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const S = (0, k.useId)();
    let T = k.Fragment;
    return (
     'paragraph' === v ? (T = u) : 'document' === v ? (T = j) : 'surface' === v && (T = m),
     (0, p.jsxs)('div', {
      className: (0, i.A)('nlds-canvas'),
      children: [
       f && (0, p.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, p.jsx)(T, { children: (0, p.jsx)(s.v$, { children: f }) }) }) }),
       g &&
        (0, p.jsx)('div', {
         className: (0, i.A)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(s.$n, {
          className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           A(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, p.jsxs)('div', {
         className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, p.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: z, trim: !0 }),
          n &&
           (0, p.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(s.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   var l = t(68873),
    s = t(16194),
    i = t(30758),
    o = t(50124);
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
   var a = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: k, type: h } = (0, i.useContext)(o.x),
     p = (0, i.useId)();
    return c && (d = d.trim()), (0, a.jsx)(s.f4, { theme: r, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: s, getTokenProps: i }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', k ? ': ' : ' ', k] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: k ? 'region' : void 0, 'aria-labelledby': p, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...s({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) })] }) });
   }
  },
  46311: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => k, contentTitle: () => d, default: () => u, frontMatter: () => c, metadata: () => l, toc: () => h });
   const l = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/link-text","title":"Toegankelijke linkteksten \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen","description":"Schrijf duidelijke linkteksten. Dit helpt je bezoekers om het doel van de link te begrijpen.","source":"@site/docs/richtlijnen/content/tekstopmaak/link-text.md","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/linkteksten","permalink":"/richtlijnen/content/tekstopmaak/linkteksten","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/link-text.md","tags":[],"version":"current","frontMatter":{"title":"Toegankelijke linkteksten \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toegankelijke linkteksten","pagination_label":"Toegankelijke linkteksten","description":"Schrijf duidelijke linkteksten. Dit helpt je bezoekers om het doel van de link te begrijpen.","slug":"/richtlijnen/content/tekstopmaak/linkteksten","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","links"]},"sidebar":"richtlijnen","previous":{"title":"De juiste taal instellen","permalink":"/richtlijnen/content/tekstopmaak/taal"},"next":{"title":"Citaten","permalink":"/richtlijnen/content/citaten"}}');
   var s = t(86070),
    i = t(85248),
    o = t(8649),
    r = t(50124),
    a = t(78734);
   const c = { title: 'Toegankelijke linkteksten \xb7 Tekstopmaak \xb7 Content \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke linkteksten', pagination_label: 'Toegankelijke linkteksten', description: 'Schrijf duidelijke linkteksten. Dit helpt je bezoekers om het doel van de link te begrijpen.', slug: '/richtlijnen/content/tekstopmaak/linkteksten', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'links'] },
    d = 'Toegankelijke linkteksten',
    k = {},
    h = [{ value: 'Wat werkt wel (en wat niet)?', id: 'wat-werkt-wel-en-wat-niet', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'toegankelijke-linkteksten', children: 'Toegankelijke linkteksten' }) }), '\n', (0, s.jsx)(n.p, { children: 'Veel gebruikers krijgen links te zien of te horen los van de rest van de tekst. Een link als \u2018klik hier\u2019 of \u2018lees meer\u2019 zegt dan niets. Zorg daarom dat de linktekst op zichzelf duidelijk is. Dat maakt je content toegankelijker \xe9n beter vindbaar in zoekmachines.' }), '\n', (0, s.jsxs)(n.p, { children: ['Linkteksten moeten duidelijk maken waar een link naartoe gaat. Dat helpt iedereen die snel door een pagina scant, en is extra belangrijk voor mensen die niet alle context kunnen zien of horen \u2014 bijvoorbeeld omdat ze een ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' gebruiken, het scherm sterk vergroten, of moeite hebben met lezen.'] }), '\n', (0, s.jsx)(n.p, { children: 'Op deze pagina lees je hoe je goede linkteksten schrijft en welke fouten je beter kunt vermijden.' }), '\n', (0, s.jsx)(n.p, { children: 'Hieronder zie je voorbeelden van wat wel werkt en wat je beter kunt laten.' }), '\n', (0, s.jsx)(n.h2, { id: 'wat-werkt-wel-en-wat-niet', children: 'Wat werkt wel (en wat niet)?' }), '\n', (0, s.jsx)(r.$, { appearance: 'do', title: 'Schrijf goede toegankelijke linkteksten waaruit blijkt wat er gebeurt als je erop klikt.', children: (0, s.jsx)(o.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)(n.ul, { children: [(0, s.jsxs)(n.li, { children: ['Meer informatie staat op de pagina ', (0, s.jsx)(n.a, { href: 'https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link', children: 'Rechten van mensen met een beperking' })] }), (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: 'https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link', children: 'Download de rapportage digitale toegankelijkheid 2023 (pdf 400 kB)' }) }), (0, s.jsxs)(n.li, { children: ['Stuur een mail naar ', (0, s.jsx)(n.a, { href: 'https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link', children: 'test@test.nl' })] })] }) }) }) }), '\n', (0, s.jsx)(r.$, { appearance: 'dont', title: 'Onduidelijke linkteksten gebruiken waaruit niet blijkt wat er gebeurt als je erop klikt.', children: (0, s.jsx)(o.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)(n.ul, { children: [(0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link', children: 'Klik hier' }), ' voor meer informatie over de rechten van mensen met een beperking'] }), (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link', children: 'Lees meer' }), ' over  digitale toegankelijkheid'] })] }) }) }) }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsx)(n.p, { children: 'Lees de pagina door en controleer alle linkteksten. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Controleer of de linktekst duidelijk maakt waar de link naartoe leidt.\nVermijd vage teksten zoals \u2018klik hier\u2019 of \u2018lees meer\u2019. De linktekst moet zelfstandig begrijpelijk zijn, zodat gebruikers weten wat ze kunnen verwachten.' }), '\n', (0, s.jsx)(n.li, { children: 'Controleer of links naar verschillende bestemmingen unieke en beschrijvende linkteksten hebben.\nDit voorkomt verwarring, vooral voor gebruikers van screenreaders die een lijst van links opvragen.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.4/', children: 'Succescriterium 2.4.4 Linkdoel(in context)' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.9/', children: 'Succescriterium 2.4.9 Linkdoel (alleen link)' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.5.3/', children: 'Succescriterium 2.5.3 Label in naam' }) }), '\n'] }), '\n', (0, s.jsx)(a.Ay, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
  },
  50124: (e, n, t) => {
   t.d(n, { $: () => d, x: () => c });
   var l = t(54736),
    s = t(26990),
    i = t(68873),
    o = t(13526),
    r = t(30758),
    a = t(86070);
   const c = (0, r.createContext)({}),
    d = ({ title: e, appearance: n, description: t, children: r, figure: d }) => {
     const k = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      p = d ? 'figcaption' : 'div';
     return (0, a.jsxs)(h, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: k.dont })] }), (0, a.jsx)(i.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: k.do })] }), (0, a.jsx)(i.fz, { children: e })] }), t] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: k[n] }, children: r }) })] });
    };
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => r, RM: () => i });
   var l = t(86070),
    s = t(85248);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => o, x: () => r });
   var l = t(30758);
   const s = {},
    i = l.createContext(s);
   function o(e) {
    const n = l.useContext(i);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), l.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
