'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [76558],
 {
  9386(e, n, l) {
   l.d(n, { H: () => y });
   var o = l(95822),
    t = l(46447),
    s = l(13526),
    r = l(68148),
    a = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    u = l(30758),
    m = l(31186),
    p = l(65904),
    h = l.n(p),
    v = l(51627),
    g = l(86070);
   const j = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        o = (0, m.qV)(l)
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
        t = h().highlight(o, h().languages[n], n);
       return (0, g.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }), (0, g.jsx)(v.n, { children: (0, g.jsx)(v.K, { label: 'Code', children: (0, g.jsx)('pre', { className: 'language-html nl-code-block', children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: h, container: v = 'document', language: y, designTokens: f }) => {
       const k = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : m.qV(_ || k),
        [N, A] = (0, u.useState)(w),
        [C, z] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: y, plugins: [r.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let F = u.Fragment;
       return (
        'paragraph' === v ? (F = j) : 'document' === v ? (F = x) : 'surface' === v && (F = b),
        (0, g.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          k && (0, g.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, g.jsx)(F, { children: (0, g.jsx)(t.v$, { children: k }) }) }) }),
          p &&
           (0, g.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(t.$n, {
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
           (0, g.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !C,
            children: [
             (0, g.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: N, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(t.$n, {
                className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, l) {
   l.d(n, { R: () => r, x: () => a });
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
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => c, n: () => a });
   var o = l(13526),
    t = l(96345),
    s = l(37168),
    r = l(86070);
   const a = ({ className: e, ...n }) => {
     const l = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, r.jsx)('div', { className: l, children: n.children });
    },
    c = ({ className: e, label: n, heading: l, headingLevel: a, headingApperance: c, ...i }) => {
     const d = (0, o.A)('utrecht-accordion__section', e);
     return (0, r.jsxs)('details', { className: d, ...i, children: [(0, r.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, r.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, r.jsx)('span', { className: 'nl-button__icon-start', children: (0, r.jsx)(t.A, {}) }), (0, r.jsxs)('span', { className: 'nl-button__label', children: [l && (0, r.jsx)(s.D, { level: a, appearance: c, children: l }), n] })] }) }), (0, r.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  61266(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => g, default: () => y, frontMatter: () => v, metadata: () => o, toc: () => x }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/help/autofill/index","title":"Vul bekende informatie in waar mogelijk","description":"Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.","source":"@site/docs/richtlijnen/formulieren/help/6-autofill/index.mdx","sourceDirName":"richtlijnen/formulieren/help/6-autofill","slug":"/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen","permalink":"/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/6-autofill/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Vul bekende informatie in waar mogelijk","title_sm":"Automatisch invullen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Automatisch invullen","pagination_label":"Automatisch invullen","description":"Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.","slug":"/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Autocomplete in een formulier","permalink":"/richtlijnen/formulieren/voorkom-fouten/autocomplete"},"next":{"title":"Controleren en aanpassen","permalink":"/richtlijnen/formulieren/voorkom-fouten/controleren-en-aanpassen"}}');
   var t = l(86070),
    s = l(18439),
    r = l(78734),
    a = l(9386),
    c = l(88022);
   function i(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Voeg autocomplete waarden toe aan adresgegevens.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'adres1', children: 'Straat en huisnummer' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'adres1', autoComplete: 'street-address', name: 'adres' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'postcode1', children: 'Postcode' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'postcode1', autoComplete: 'postal-code', name: 'postcode' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'woonplaats1', children: 'Woonplaats' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'woonplaats1', autoComplete: 'address-level2', name: 'woonplaats' }) })] }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'Laat autocomplete waarden weg bij adresgegevens.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'adres2', children: 'Straat en huisnummer' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'adres2', name: 'adres' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'postcode2', children: 'Postcode' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'postcode2', name: 'postcode' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'woonplaats2', children: 'Woonplaats' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', id: 'woonplaats2', name: 'woonplaats' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h3: 'h3', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'vul-bekende-informatie-in-waar-mogelijk', children: 'Vul bekende informatie in waar mogelijk' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Als de gebruiker is ingelogd, gebruik dan bekende informatie om velden vast in te vullen. In DigiD-sessies is bijvoorbeeld al veel informatie beschikbaar, die zou kunnen worden gebruikt om velden vooraf in te vullen.\nHet ', (0, t.jsx)(n.a, { href: 'https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).', children: 'gebruik van DigiD' }), ' is wel aan wettelijke voorwaarden verbonden.'] }), '\n', (0, t.jsx)(n.h3, { id: 'autocomplete', children: 'Autocomplete' }), '\n', (0, t.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, t.jsx)(n.code, { children: 'autocomplete' }), ' maakt het voor de gebruiker makkelijker om al eerder ingevulde informatie automatisch toe te voegen. De volledige lijst waarden staat op de MDN-website: ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete', children: 'HTML-attribuut: autocomplete' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Sommige waarden zijn onduidelijk of ontbreken voor Nederlandse toepassingen. Jules Ernst van 200 OK heeft een overzicht gemaakt van de beste manier om ', (0, t.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/#dutch', children: 'autocomplete in Nederlandse formulieren' }), ' toe te passen.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'Succescriterium 1.3.5 Identificeer het doel van de input' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.7/', children: 'succescriterium 3.3.7 Overbodige invoer' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   const v = { title: 'Vul bekende informatie in waar mogelijk', title_sm: 'Automatisch invullen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Automatisch invullen', pagination_label: 'Automatisch invullen', description: 'Richtlijnen om invoervelden zoveel mogelijk automatisch in te vullen.', slug: '/richtlijnen/formulieren/voorkom-fouten/automatisch-invullen', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    j = {},
    x = [{ value: 'Autocomplete', id: 'autocomplete', level: 3 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function b(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(r.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(b, { ...e }) }) : b();
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => s });
   var o = l(86070),
    t = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var o = l(4077),
    t = l(58315),
    s = l(46447),
    r = l(13526),
    a = l(45980),
    c = l(30758),
    i = l(86070);
   const d = (0, c.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: c, figure: u }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      v = 'string' == typeof l ? (0, i.jsx)(a.oz, { children: l }) : l;
     return (0, i.jsxs)(p, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(s.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(s.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(s.fz, { children: e })] }), v] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: m[n] }, children: c }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => i });
   var o = l(46447),
    t = l(16194),
    s = l(30758),
    r = l(88022);
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
   var c = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: u, type: m } = (0, s.useContext)(r.x),
     p = (0, s.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: s }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(o.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...t({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
