'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [26592],
 {
  9386(e, n, t) {
   t.d(n, { H: () => v });
   var l = t(95822),
    s = t(46447),
    a = t(13526),
    r = t(68148),
    o = t(9016),
    i = t(69303),
    c = t(91635),
    d = t(30734),
    h = t(30758),
    k = t(31186),
    p = t(65904),
    u = t.n(p),
    m = t(51627),
    j = t(86070);
   const g = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, a.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const v = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const t = 'function' == typeof e ? e() : e,
        l = (0, k.qV)(t)
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
        s = u().highlight(l, u().languages[n], n);
       return (0, j.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: l } }), (0, j.jsx)(m.n, { children: (0, j.jsx)(m.K, { label: 'Code', children: (0, j.jsx)('pre', { className: 'language-html nl-code-block', children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: p = !0, children: u, container: m = 'document', language: v, designTokens: y }) => {
       const f = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : k.qV(_ || f),
        [N, z] = (0, h.useState)(w),
        [A, C] = (0, h.useState)(t);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: v, plugins: [r.A, o.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [w]);
       const S = (0, h.useId)();
       let T = h.Fragment;
       return (
        'paragraph' === m ? (T = g) : 'document' === m ? (T = b) : 'surface' === m && (T = x),
        (0, j.jsxs)('div', {
         className: (0, a.A)('nlds-canvas'),
         children: [
          f && (0, j.jsx)('div', { className: (0, a.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, j.jsx)(T, { children: (0, j.jsx)(s.v$, { children: f }) }) }) }),
          p &&
           (0, j.jsx)('div', {
            className: (0, a.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(s.$n, {
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
           (0, j.jsxs)('div', {
            className: (0, a.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, j.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: N, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, a.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(s.$n, {
                className: (0, a.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, t) {
   t.d(n, { R: () => r, x: () => o });
   var l = t(30758);
   const s = {},
    a = l.createContext(s);
   function r(e) {
    const n = l.useContext(a);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), l.createElement(a.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, t) {
   t.d(n, { K: () => i, n: () => o });
   var l = t(13526),
    s = t(96345),
    a = t(37168),
    r = t(86070);
   const o = ({ className: e, ...n }) => {
     const t = (0, l.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: t, children: n.children });
    },
    i = ({ className: e, label: n, heading: t, headingLevel: o, headingApperance: i, ...c }) => {
     const d = (0, l.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: d, ...c, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(s.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [t && (0, r.jsx)(a.D, { level: o, appearance: i, children: t }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => o, RM: () => a });
   var l = t(86070),
    s = t(18439);
   const a = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, t) {
   t.d(n, { $: () => h, x: () => d });
   var l = t(4077),
    s = t(58315),
    a = t(46447),
    r = t(13526),
    o = t(45980),
    i = t(30758),
    c = t(86070);
   const d = (0, i.createContext)({}),
    h = ({ title: e, appearance: n, description: t, children: i, figure: h }) => {
     const k = { do: 'Doen', dont: 'Niet doen' },
      p = h ? 'figure' : 'div',
      u = h ? 'figcaption' : 'div',
      m = 'string' == typeof t ? (0, c.jsx)(o.oz, { children: t }) : t;
     return (0, c.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(a.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: k.dont })] }), (0, c.jsx)(a.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(a.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: k.do })] }), (0, c.jsx)(a.fz, { children: e })] }), m] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: k[n] }, children: i }) })] });
    };
  },
  92453(e, n, t) {
   (t.r(n), t.d(n, { assets: () => h, contentTitle: () => d, default: () => u, frontMatter: () => c, metadata: () => l, toc: () => k }));
   const l = JSON.parse('{"id":"richtlijnen/content/tekstopmaak/link-text","title":"Toegankelijke linkteksten","description":"Schrijf duidelijke linkteksten. Dit helpt je bezoekers om het doel van de link te begrijpen.","source":"@site/docs/richtlijnen/content/tekstopmaak/link-text.mdx","sourceDirName":"richtlijnen/content/tekstopmaak","slug":"/richtlijnen/content/tekstopmaak/linkteksten","permalink":"/richtlijnen/content/tekstopmaak/linkteksten","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/content/tekstopmaak/link-text.mdx","tags":[],"version":"current","frontMatter":{"title":"Toegankelijke linkteksten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toegankelijke linkteksten","pagination_label":"Toegankelijke linkteksten","description":"Schrijf duidelijke linkteksten. Dit helpt je bezoekers om het doel van de link te begrijpen.","slug":"/richtlijnen/content/tekstopmaak/linkteksten","keywords":["semantiek","tekstopmaak","structuur","tekststructuur","links"]},"sidebar":"richtlijnen","previous":{"title":"De juiste taal instellen","permalink":"/richtlijnen/content/tekstopmaak/taal"},"next":{"title":"Citaten","permalink":"/richtlijnen/content/citaten"}}');
   var s = t(86070),
    a = t(18439),
    r = t(9386),
    o = t(88022),
    i = t(78734);
   const c = { title: 'Toegankelijke linkteksten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke linkteksten', pagination_label: 'Toegankelijke linkteksten', description: 'Schrijf duidelijke linkteksten. Dit helpt je bezoekers om het doel van de link te begrijpen.', slug: '/richtlijnen/content/tekstopmaak/linkteksten', keywords: ['semantiek', 'tekstopmaak', 'structuur', 'tekststructuur', 'links'] },
    d = 'Toegankelijke linkteksten',
    h = {},
    k = [{ value: 'Wat werkt wel (en wat niet)?', id: 'wat-werkt-wel-en-wat-niet', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'toegankelijke-linkteksten', children: 'Toegankelijke linkteksten' }) }), '\n', (0, s.jsx)(n.p, { children: 'Veel gebruikers krijgen links te zien of te horen los van de rest van de tekst. Een link als \u2018klik hier\u2019 of \u2018lees meer\u2019 zegt dan niets. Zorg daarom dat de linktekst op zichzelf duidelijk is. Dat maakt je content toegankelijker \xe9n beter vindbaar in zoekmachines.' }), '\n', (0, s.jsxs)(n.p, { children: ['Linkteksten moeten duidelijk maken waar een link naartoe gaat. Dat helpt iedereen die snel door een pagina scant, en is extra belangrijk voor mensen die niet alle context kunnen zien of horen \u2014 bijvoorbeeld omdat ze een ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' gebruiken, het scherm sterk vergroten, of moeite hebben met lezen.'] }), '\n', (0, s.jsx)(n.p, { children: 'Op deze pagina lees je hoe je goede linkteksten schrijft en welke fouten je beter kunt vermijden.' }), '\n', (0, s.jsx)(n.p, { children: 'Hieronder zie je voorbeelden van wat wel werkt en wat je beter kunt laten.' }), '\n', (0, s.jsx)(n.h2, { id: 'wat-werkt-wel-en-wat-niet', children: 'Wat werkt wel (en wat niet)?' }), '\n', (0, s.jsx)(o.$, { appearance: 'do', title: 'Schrijf goede toegankelijke linkteksten waaruit blijkt wat er gebeurt als je erop klikt.', children: (0, s.jsx)(r.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)('ul', { children: [(0, s.jsxs)('li', { children: ['Meer informatie staat op de pagina ', (0, s.jsx)('a', { href: 'https://example.com/', children: 'Rechten van mensen met een beperking' })] }), (0, s.jsx)('li', { children: (0, s.jsx)('a', { href: 'https://example.com/', children: 'Download de rapportage digitale toegankelijkheid 2023 (pdf 400 kB)' }) }), (0, s.jsxs)('li', { children: ['Stuur een mail naar ', (0, s.jsx)('a', { href: 'https://example.com/', children: 'test@test.nl' })] })] }) }) }) }), '\n', (0, s.jsx)(o.$, { appearance: 'dont', title: 'Onduidelijke linkteksten gebruiken waaruit niet blijkt wat er gebeurt als je erop klikt.', children: (0, s.jsx)(r.H, { language: 'html', children: () => (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)('ul', { children: [(0, s.jsxs)('li', { children: [(0, s.jsx)('a', { href: 'https://example.com/', children: 'Klik hier' }), ' voor meer informatie over de rechten van mensen met een beperking'] }), (0, s.jsxs)('li', { children: [(0, s.jsx)('a', { href: 'https://example.com/', children: 'Lees meer' }), ' over digitale toegankelijkheid'] })] }) }) }) }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsx)(n.p, { children: 'Lees de pagina door en controleer alle linkteksten. Gebruik de onderstaande stappen als checklist:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Controleer of de linktekst duidelijk maakt waar de link naartoe leidt.\nVermijd vage teksten zoals \u2018klik hier\u2019 of \u2018lees meer\u2019. De linktekst moet zelfstandig begrijpelijk zijn, zodat gebruikers weten wat ze kunnen verwachten.' }), '\n', (0, s.jsx)(n.li, { children: 'Controleer of links naar verschillende bestemmingen unieke en beschrijvende linkteksten hebben.\nDit voorkomt verwarring, vooral voor gebruikers van screenreaders die een lijst van links opvragen.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.4/', children: 'Succescriterium 2.4.4 Linkdoel(in context)' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.9/', children: 'Succescriterium 2.4.9 Linkdoel (alleen link)' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.5.3/', children: 'Succescriterium 2.5.3 Label in naam' }) }), '\n'] }), '\n', (0, s.jsx)(i.Ay, {})] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
  },
  95822(e, n, t) {
   t.d(n, { M: () => c });
   var l = t(46447),
    s = t(16194),
    a = t(30758),
    r = t(88022);
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
   var i = t(86070);
   function c({ lineNumber: e, syntax: n, textContent: t, trim: c }) {
    let d = t;
    const { title: h, type: k } = (0, a.useContext)(r.x),
     p = (0, a.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(s.f4, { theme: o, code: d, language: n || '', children: ({ style: n, tokens: t, getLineProps: s, getTokenProps: a }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', k ? `\u201c${k}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: t.map((n, t) => (0, i.jsxs)('span', { ...s({ line: n }), children: [e && (0, i.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
 },
]);
