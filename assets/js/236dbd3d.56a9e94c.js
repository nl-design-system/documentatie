'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [15483],
 {
  9386(e, l, n) {
   n.d(l, { H: () => v });
   var s = n(95822),
    t = n(46447),
    r = n(13526),
    o = n(68148),
    a = n(9016),
    i = n(69303),
    c = n(91635),
    d = n(30734),
    u = n(30758),
    p = n(31186),
    m = n(65904),
    h = n.n(m),
    b = n(51627),
    j = n(86070);
   const g = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const v = globalThis.isAstro
    ? ({ children: e, language: l }) => {
       const n = 'function' == typeof e ? e() : e,
        s = (0, p.qV)(n)
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
        t = h().highlight(s, h().languages[l], l);
       return (0, j.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: s } }), (0, j.jsx)(b.n, { children: (0, j.jsx)(b.K, { label: 'Code', children: (0, j.jsx)('pre', { className: 'language-html nl-code-block', children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: l = !0, defaultExpandedCode: n = !1, displayCode: m = !0, children: h, container: b = 'document', language: v, designTokens: k }) => {
       const f = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(_ || f),
        [A, w] = (0, u.useState)(N),
        [C, z] = (0, u.useState)(n);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: v, plugins: [o.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const S = (0, u.useId)();
       let D = u.Fragment;
       return (
        'paragraph' === b ? (D = g) : 'document' === b ? (D = x) : 'surface' === b && (D = y),
        (0, j.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          f && (0, j.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, j.jsx)(D, { children: (0, j.jsx)(t.v$, { children: f }) }) }) }),
          m &&
           (0, j.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(t.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              z(!C);
             },
             'aria-expanded': C,
             'aria-controls': S,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, j.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, j.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: v, textContent: A, trim: !0 }),
             l &&
              (0, j.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(t.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, l, n) {
   n.d(l, { R: () => o, x: () => a });
   var s = n(30758);
   const t = {},
    r = s.createContext(t);
   function o(e) {
    const l = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function a(e) {
    let l;
    return ((l = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), s.createElement(r.Provider, { value: l }, e.children));
   }
  },
  51627(e, l, n) {
   n.d(l, { K: () => i, n: () => a });
   var s = n(13526),
    t = n(96345),
    r = n(37168),
    o = n(86070);
   const a = ({ className: e, ...l }) => {
     const n = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, o.jsx)('div', { className: n, children: l.children });
    },
    i = ({ className: e, label: l, heading: n, headingLevel: a, headingApperance: i, ...c }) => {
     const d = (0, s.A)('utrecht-accordion__section', e);
     return (0, o.jsxs)('details', { className: d, ...c, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(t.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [n && (0, o.jsx)(r.D, { level: a, appearance: i, children: n }), l] })] }) }), (0, o.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  73942(e, l, n) {
   (n.r(l), n.d(l, { assets: () => g, contentTitle: () => j, default: () => v, frontMatter: () => b, metadata: () => s, toc: () => x }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/label/text/index","title":"Gebruik duidelijke labelteksten","description":"Richtlijnen voor duidelijke labelteksten.","source":"@site/docs/richtlijnen/formulieren/label/6-text/index.mdx","sourceDirName":"richtlijnen/formulieren/label/6-text","slug":"/richtlijnen/formulieren/labels/duidelijke-tekst","permalink":"/richtlijnen/formulieren/labels/duidelijke-tekst","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/6-text/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Gebruik duidelijke labelteksten","title_sm":"Duidelijke tekst label","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Duidelijke tekst label","pagination_label":"Duidelijke tekst label","description":"Richtlijnen voor duidelijke labelteksten.","slug":"/richtlijnen/formulieren/labels/duidelijke-tekst","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Label bevat alleen tekst","permalink":"/richtlijnen/formulieren/labels/alleen-tekst"},"next":{"title":"Links in een formulier","permalink":"/richtlijnen/formulieren/links/"}}');
   var t = n(86070),
    r = n(18439),
    o = n(78734),
    a = n(9386),
    i = n(88022);
   function c(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Simpel label met extra beschrijving. Gebruik waar nodig een losse description om meer uitleg te geven.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'first-name', children: 'Voornaam (een of meerdere)' }) }), (0, t.jsx)('p', { id: 'first-name-description', children: 'Vul de voornaam of voornamen in zoals deze op je id-kaart of paspoort staan.' }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { autoComplete: 'given-name', type: 'text', name: 'first_name', id: 'first-name', 'aria-describedby': 'first-name-description' }) })] }) }) }), '\n', (0, t.jsx)(i.$, { appearance: 'dont', title: 'Ingewikkeld label. Door veel informatie in te korten wordt het label onduidelijk', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'first-name2', children: 'Voornaam(en)' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { autoComplete: 'given-name', type: 'text', name: 'first_name', id: 'first-name2' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, t.jsx)(l, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c();
   }
   function u(e) {
    const l = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(l.header, { children: (0, t.jsx)(l.h1, { id: 'gebruik-duidelijke-labelteksten', children: 'Gebruik duidelijke labelteksten' }) }), '\n', (0, t.jsx)(l.p, { children: 'Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Waar nodig wordt er ook extra hulp geboden worden, zoals een omschrijving van waar een BSN-nummer te vinden is.' }), '\n', (0, t.jsx)(l.p, { children: 'Wanneer je een afkorting gebruikt, of je moet jargon gebruiken omdat de offici\xeble term verplicht is, geef dan in de beschrijving een voorbeeld of uitleg.' })] });
   }
   function p(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, t.jsx)(l, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const l = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(l.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(l.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(l.ul, { children: ['\n', (0, t.jsx)(l.li, { children: (0, t.jsx)(l.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, t.jsx)(l.li, { children: (0, t.jsx)(l.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, t.jsx)(l, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   const b = { title: 'Gebruik duidelijke labelteksten', title_sm: 'Duidelijke tekst label', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Duidelijke tekst label', pagination_label: 'Duidelijke tekst label', description: 'Richtlijnen voor duidelijke labelteksten.', slug: '/richtlijnen/formulieren/labels/duidelijke-tekst', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    g = {},
    x = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function y(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(o.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: l } = { ...(0, r.R)(), ...e.components };
    return l ? (0, t.jsx)(l, { ...e, children: (0, t.jsx)(y, { ...e }) }) : y();
   }
  },
  78734(e, l, n) {
   n.d(l, { Ay: () => a, RM: () => r });
   var s = n(86070),
    t = n(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: l } = { ...(0, t.R)(), ...e.components };
    return l ? (0, s.jsx)(l, { ...e, children: (0, s.jsx)(o, { ...e }) }) : o(e);
   }
  },
  88022(e, l, n) {
   n.d(l, { $: () => u, x: () => d });
   var s = n(4077),
    t = n(58315),
    r = n(46447),
    o = n(13526),
    a = n(45980),
    i = n(30758),
    c = n(86070);
   const d = (0, i.createContext)({}),
    u = ({ title: e, appearance: l, description: n, children: i, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      b = 'string' == typeof n ? (0, c.jsx)(a.oz, { children: n }) : n;
     return (0, c.jsxs)(m, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(r.fz, { children: e })] }), b] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: p[l] }, children: i }) })] });
    };
  },
  95822(e, l, n) {
   n.d(l, { M: () => c });
   var s = n(46447),
    t = n(16194),
    r = n(30758),
    o = n(88022);
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
   var i = n(86070);
   function c({ lineNumber: e, syntax: l, textContent: n, trim: c }) {
    let d = n;
    const { title: u, type: p } = (0, r.useContext)(o.x),
     m = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(t.f4, { theme: a, code: d, language: l || '', children: ({ style: l, tokens: n, getLineProps: t, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: l, children: n.map((l, n) => (0, i.jsxs)('span', { ...t({ line: l }), children: [e && (0, i.jsx)('span', { children: n + 1 }), l.map((e, l) => (0, i.jsx)('span', { ...r({ token: e }) }, l)), '\n'] }, n)) })] }) }));
   }
  },
 },
]);
