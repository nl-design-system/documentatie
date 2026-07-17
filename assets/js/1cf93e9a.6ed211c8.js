'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [53342],
 {
  9386(e, n, l) {
   l.d(n, { H: () => y });
   var s = l(95822),
    r = l(46447),
    o = l(13526),
    t = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    p = l(30758),
    h = l(31186),
    u = l(65904),
    m = l.n(u),
    g = l(51627),
    x = l(86070);
   const j = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(r.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(r.yo, { className: (0, o.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        s = (0, h.qV)(l)
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
        r = m().highlight(s, m().languages[n], n);
       return (0, x.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, x.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: s } }), (0, x.jsx)(g.n, { children: (0, x.jsx)(g.K, { label: 'Code', children: (0, x.jsx)('pre', { className: 'language-html nl-code-block', children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: r } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: u = !0, children: m, container: g = 'document', language: y, designTokens: f }) => {
       const w = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        k = 'string' == typeof e ? e : h.qV(_ || w),
        [N, A] = (0, p.useState)(k),
        [C, S] = (0, p.useState)(l);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(k, { parser: y, plugins: [t.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [k]);
       const z = (0, p.useId)();
       let F = p.Fragment;
       return (
        'paragraph' === g ? (F = j) : 'document' === g ? (F = b) : 'surface' === g && (F = v),
        (0, x.jsxs)('div', {
         className: (0, o.A)('nlds-canvas'),
         children: [
          w && (0, x.jsx)('div', { className: (0, o.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, x.jsx)(F, { children: (0, x.jsx)(r.v$, { children: w }) }) }) }),
          u &&
           (0, x.jsx)('div', {
            className: (0, o.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(r.$n, {
             className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': z,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, x.jsxs)('div', {
            className: (0, o.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, x.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: N, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, o.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(r.$n, {
                className: (0, o.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  14293(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => x, default: () => y, frontMatter: () => g, metadata: () => s, toc: () => b }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/description/placement/index","title":"Plaats descriptions tussen label en formulierveld","description":"Richtlijnen voor plaatsing van een description bij een formulierveld.","source":"@site/docs/richtlijnen/formulieren/description/2-placement/index.mdx","sourceDirName":"richtlijnen/formulieren/description/2-placement","slug":"/richtlijnen/formulieren/descriptions/plaatsing","permalink":"/richtlijnen/formulieren/descriptions/plaatsing","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/2-placement/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaats descriptions tussen label en formulierveld","title_sm":"Plaatsing description","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing description","pagination_label":"Plaatsing description","description":"Richtlijnen voor plaatsing van een description bij een formulierveld.","slug":"/richtlijnen/formulieren/descriptions/plaatsing","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Inhoud description","permalink":"/richtlijnen/formulieren/descriptions/inhoud"},"next":{"title":"Meerdere descriptions","permalink":"/richtlijnen/formulieren/descriptions/meerdere-koppelen"}}');
   var r = l(86070),
    o = l(18439),
    t = l(78734),
    a = l(9386),
    i = l(88022);
   function c(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(i.$, { appearance: 'do', title: 'Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'wachtwoord1', children: 'Nieuw wachtwoord' }) }), (0, r.jsx)('p', { id: 'description-wachtwoord1', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { id: 'wachtwoord1', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord1' }) })] }) }) }), '\n', (0, r.jsx)(i.$, { appearance: 'do', title: 'Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'wachtwoord2', children: 'Nieuw wachtwoord' }) }), (0, r.jsx)('p', { id: 'description-wachtwoord2', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)('p', { id: 'error-wachtwoord2', children: 'Je gekozen wachtwoord is te kort.' }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { id: 'wachtwoord2', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord2 error-wachtwoord2' }) })] }) }) }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Description onder het formulierveld plaatsen.', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'wachtwoord3', children: 'Nieuw wachtwoord' }) }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { id: 'wachtwoord3', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord3' }) }), (0, r.jsx)('p', { id: 'description-wachtwoord3', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' })] }) }) }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Description boven het formulierveld en foutmelding eronder plaatsen.', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'wachtwoord4', children: 'Nieuw wachtwoord' }) }), (0, r.jsx)('p', { id: 'description-wachtwoord4', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { id: 'wachtwoord4', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord4 error-wachtwoord4' }) }), (0, r.jsx)('p', { id: 'error-wachtwoord4', children: 'Je gekozen wachtwoord is te kort.' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function p(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'plaats-descriptions-tussen-label-en-formulierveld', children: 'Plaats descriptions tussen label en formulierveld' }) }), '\n', (0, r.jsx)(n.p, { children: 'Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld. Omdat de gebruiker van boven naar beneden leest, komt deze informatie na het label op een logisch moment in de leesvolgorde.' }), '\n', (0, r.jsxs)(n.p, { children: ['Ook is dan de kans dat de informatie overlapt met bijvoorbeeld browserpopups kleiner. Lees hiervoor het artikel ', (0, r.jsx)(n.a, { href: 'https://adrianroselli.com/2017/01/avoid-messages-under-fields.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Avoid Messages Under Fields' }) }), ' van Adrian Roselli.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'Plaats descriptions tussen label en formulierveld', title_sm: 'Plaatsing description', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing description', pagination_label: 'Plaatsing description', description: 'Richtlijnen voor plaatsing van een description bij een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    x = void 0,
    j = {},
    b = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function v(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(h, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v();
   }
  },
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => a });
   var s = l(30758);
   const r = {},
    o = s.createContext(r);
   function t(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => i, n: () => a });
   var s = l(13526),
    r = l(96345),
    o = l(37168),
    t = l(86070);
   const a = ({ className: e, ...n }) => {
     const l = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, t.jsx)('div', { className: l, children: n.children });
    },
    i = ({ className: e, label: n, heading: l, headingLevel: a, headingApperance: i, ...c }) => {
     const d = (0, s.A)('utrecht-accordion__section', e);
     return (0, t.jsxs)('details', { className: d, ...c, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(r.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [l && (0, t.jsx)(o.D, { level: a, appearance: i, children: l }), n] })] }) }), (0, t.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => o });
   var s = l(86070),
    r = l(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => p, x: () => d });
   var s = l(4077),
    r = l(58315),
    o = l(46447),
    t = l(13526),
    a = l(45980),
    i = l(30758),
    c = l(86070);
   const d = (0, i.createContext)({}),
    p = ({ title: e, appearance: n, description: l, children: i, figure: p }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, c.jsx)(a.oz, { children: l }) : l;
     return (0, c.jsxs)(u, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, c.jsx)(o.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, c.jsx)(o.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: i }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => c });
   var s = l(46447),
    r = l(16194),
    o = l(30758),
    t = l(88022);
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
   var i = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: p, type: h } = (0, o.useContext)(t.x),
     u = (0, o.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(r.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: r, getTokenProps: o }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...r({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
