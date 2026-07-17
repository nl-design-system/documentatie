'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [28737],
 {
  9386(e, n, l) {
   l.d(n, { H: () => k });
   var t = l(95822),
    r = l(46447),
    s = l(13526),
    a = l(68148),
    i = l(9016),
    o = l(69303),
    c = l(91635),
    d = l(30734),
    u = l(30758),
    h = l(31186),
    p = l(65904),
    m = l.n(p),
    b = l(51627),
    g = l(86070);
   const j = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(r.yo, { className: (0, s.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const x = ({ children: e }) => (0, g.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   x.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        t = (0, h.qV)(l)
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
        r = m().highlight(t, m().languages[n], n);
       return (0, g.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: t } }), (0, g.jsx)(b.n, { children: (0, g.jsx)(b.K, { label: 'Code', children: (0, g.jsx)('pre', { className: 'language-html nl-code-block', children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: r } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: m, container: b = 'document', language: k, designTokens: y }) => {
       const f = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || f),
        [N, A] = (0, u.useState)(w),
        [z, L] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: k, plugins: [a.A, i.Ay, o.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const C = (0, u.useId)();
       let S = u.Fragment;
       return (
        'paragraph' === b ? (S = j) : 'document' === b ? (S = v) : 'surface' === b && (S = x),
        (0, g.jsxs)('div', {
         className: (0, s.A)('nlds-canvas'),
         children: [
          f && (0, g.jsx)('div', { className: (0, s.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, g.jsx)(S, { children: (0, g.jsx)(r.v$, { children: f }) }) }) }),
          p &&
           (0, g.jsx)('div', {
            className: (0, s.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(r.$n, {
             className: (0, s.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              L(!z);
             },
             'aria-expanded': z,
             'aria-controls': C,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, g.jsxs)('div', {
            className: (0, s.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !z,
            children: [
             (0, g.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: N, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, s.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(r.$n, {
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
   l.d(n, { R: () => a, x: () => i });
   var t = l(30758);
   const r = {},
    s = t.createContext(r);
   function a(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(s.Provider, { value: n }, e.children));
   }
  },
  34974(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => g, default: () => k, frontMatter: () => b, metadata: () => t, toc: () => v }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/link/in-new-tab/index","title":"Geef aan als een link in een nieuwe tab opent","description":"Richtlijnen voor aangeven als een link een nieuwe tab opent.","source":"@site/docs/richtlijnen/formulieren/link/3-in-new-tab/index.mdx","sourceDirName":"richtlijnen/formulieren/link/3-in-new-tab","slug":"/richtlijnen/formulieren/links/nieuwe-tab","permalink":"/richtlijnen/formulieren/links/nieuwe-tab","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/3-in-new-tab/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef aan als een link in een nieuwe tab opent","title_sm":"Link in nieuwe tab","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Link in nieuwe tab","pagination_label":"Link in nieuwe tab","description":"Richtlijnen voor aangeven als een link een nieuwe tab opent.","slug":"/richtlijnen/formulieren/links/nieuwe-tab","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geen link in label","permalink":"/richtlijnen/formulieren/links/niet-in-label"},"next":{"title":"Meerdere stappen","permalink":"/richtlijnen/formulieren/meerdere-stappen/"}}');
   var r = l(86070),
    s = l(18439),
    a = l(78734),
    i = l(9386),
    o = l(88022);
   function c(e) {
    const n = { h2: 'h2', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(o.$, { appearance: 'do', title: 'Alle informatie als zichtbare tekst in de link plaatsen.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)('p', { children: [(0, r.jsx)('a', { href: '#', target: '_blank', children: 'Lees het privacybeleid (opent in een nieuwe tab)' }), '.'] }) }) }), '\n', (0, r.jsx)(o.$, { appearance: 'do', title: 'Zichtbaar icoontje plus onzichtbare, maar uitgesproken tekst voor screenreaders.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)('p', { children: [(0, r.jsxs)('a', { href: '#', target: '_blank', className: 'nlds-icon-ext', children: ['Lees het privacybeleid', (0, r.jsx)('span', { className: 'sr-only', children: ', opent in een nieuwe tab' })] }), '.'] }) }) }), '\n', (0, r.jsx)(o.$, { appearance: 'do', title: 'Zichtbaar icoontje plus een aria-label voor screenreaders.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsx)('p', { children: (0, r.jsx)('a', { href: '#', target: '_blank', className: 'nlds-icon-ext', 'aria-label': 'Lees het privacybeleid (opent in een nieuwe tab)', children: 'Lees het privacybeleid' }) }) }) }), '\n', (0, r.jsx)(o.$, { appearance: 'dont', title: 'Informatie over het openen in een nieuwe tab alleen aan screenreadergebruikers geven.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)('p', { children: [(0, r.jsx)('a', { href: '#', target: '_blank', 'aria-label': 'Lees het privacybeleid (opent in een nieuwe tab)', children: 'Lees het privacybeleid' }), '.'] }) }) }), '\n', (0, r.jsx)(o.$, { appearance: 'dont', title: 'Informatie over het openen in een nieuwe tab voor iedereen weglaten.', children: (0, r.jsx)(i.H, { language: 'html', children: () => (0, r.jsxs)('p', { children: [(0, r.jsx)('a', { href: '#', target: '_blank', children: 'Lees het privacybeleid' }), '.'] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'geef-aan-als-een-link-in-een-nieuwe-tab-opent', children: 'Geef aan als een link in een nieuwe tab opent' }) }), '\n', (0, r.jsx)(n.p, { children: 'Het is onhandig als je de ingevulde informatie van een formulier kwijt raakt als je een link opent. In formulieren is het daarom handiger dat links niet openen in hetzelfde browser-venster.' }), '\n', (0, r.jsxs)(n.p, { children: ['In de HTML kan dit met het attribuut ', (0, r.jsx)(n.code, { children: 'target="_blank"' }), ' in de link.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Een link openen in een nieuwe tab is geen standaard browser gedrag. Maak duidelijk hoe deze speciale links in formulieren werken, zodat de gebruiker bijvoorbeeld weet waarom de terugknop het niet doet. Voor gebruikers van ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' is dit extra belangrijk.'] }), '\n', (0, r.jsx)(n.p, { children: 'Daarnaast: alle gebruikers moeten dezelfde informatie krijgen, dus er moet ook een visuele indicatie zijn dat de link in een nieuwe tab opent.' }), '\n', (0, r.jsx)(n.p, { children: 'Het aangeven kan op verschillende manieren: via een icoontje, via tekst en via een aria-label. Zo kun je voor ziende gebruikers een icoontje gebruiken en voor screenreadergebruikers visueel verborgen tekst.' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg dat de informatie over het openen van een nieuwe tab in de linktekst zelf is opgenomen. Dan wordt deze voorgelezen zodra de link focus krijgt. Als de tekst buiten (achter) de link staat bestaat de kans dat een screenreadergebruiker deze info mist.' }), '\n', (0, r.jsxs)(n.p, { children: ['Hiermee volg je de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#predictable', children: 'WCAG-richtlijn 3.2 Voorspelbaar' }), ": maak het uiterlijk en de bediening van webpagina's voorspelbaar."] }), '\n', (0, r.jsx)(n.h2, { id: 'technieken-voor-een-link-openen-in-een-nieuwe-tab-of-venster', children: 'Technieken voor een link openen in een nieuwe tab of venster' }), '\n', (0, r.jsx)(n.p, { children: 'Alle informatie als zichtbare tekst in de linktekst plaatsen heeft de voorkeur, vanwege de eenvoud en eenduidigheid. Niet iedereen snapt alle icoontjes.' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.1.1/', children: 'Succescriterium 1.1.1 Niet-tekstuele content' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.4/', children: 'Succescriterium 2.4.4 Linkdoel (in context)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.9/', children: 'Succescriterium 2.4.9 Linkdoel (alleen link)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.2.1/', children: 'Succescriterium 3.2.1 Bij focus' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.2.2/', children: 'Succescriterium 3.2.2 Bij input' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   const b = { title: 'Geef aan als een link in een nieuwe tab opent', title_sm: 'Link in nieuwe tab', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Link in nieuwe tab', pagination_label: 'Link in nieuwe tab', description: 'Richtlijnen voor aangeven als een link een nieuwe tab opent.', slug: '/richtlijnen/formulieren/links/nieuwe-tab', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    j = {},
    v = [{ value: 'Technieken voor een link openen in een nieuwe tab of venster', id: 'technieken-voor-een-link-openen-in-een-nieuwe-tab-of-venster', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...a.RM];
   function x(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(h, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(a.Ay, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x();
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => o, n: () => i });
   var t = l(13526),
    r = l(96345),
    s = l(37168),
    a = l(86070);
   const i = ({ className: e, ...n }) => {
     const l = (0, t.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, a.jsx)('div', { className: l, children: n.children });
    },
    o = ({ className: e, label: n, heading: l, headingLevel: i, headingApperance: o, ...c }) => {
     const d = (0, t.A)('utrecht-accordion__section', e);
     return (0, a.jsxs)('details', { className: d, ...c, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(r.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [l && (0, a.jsx)(s.D, { level: i, appearance: o, children: l }), n] })] }) }), (0, a.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => s });
   var t = l(86070),
    r = l(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var t = l(4077),
    r = l(58315),
    s = l(46447),
    a = l(13526),
    i = l(45980),
    o = l(30758),
    c = l(86070);
   const d = (0, o.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: o, figure: u }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div',
      b = 'string' == typeof l ? (0, c.jsx)(i.oz, { children: l }) : l;
     return (0, c.jsxs)(p, { className: (0, a.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(s.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.fz, { className: (0, a.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(s.fz, { children: e })] }), b] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: o }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => c });
   var t = l(46447),
    r = l(16194),
    s = l(30758),
    a = l(88022);
   const i = {
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
   var o = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: u, type: h } = (0, s.useContext)(a.x),
     p = (0, s.useId)();
    return (c && (d = d.trim()), (0, o.jsx)(r.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: r, getTokenProps: s }) => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, o.jsx)(t.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, o.jsxs)('span', { ...r({ line: n }), children: [e && (0, o.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, o.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
