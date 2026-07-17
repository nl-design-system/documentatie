'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [29468],
 {
  9386(e, n, l) {
   l.d(n, { H: () => y });
   var o = l(95822),
    s = l(46447),
    r = l(13526),
    t = l(68148),
    a = l(9016),
    c = l(69303),
    i = l(91635),
    d = l(30734),
    u = l(30758),
    p = l(31186),
    m = l(65904),
    h = l.n(m),
    g = l(51627),
    v = l(86070);
   const j = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(s.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, v.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        o = (0, p.qV)(l)
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
        s = h().highlight(o, h().languages[n], n);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: h, container: g = 'document', language: y, designTokens: f }) => {
       const _ = 'function' == typeof h ? h() : h,
        w = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        k = 'string' == typeof e ? e : p.qV(w || _),
        [N, A] = (0, u.useState)(k),
        [z, C] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(k, { parser: y, plugins: [t.A, a.Ay, c.Ay, i.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [k]);
       const S = (0, u.useId)();
       let G = u.Fragment;
       return (
        'paragraph' === g ? (G = j) : 'document' === g ? (G = x) : 'surface' === g && (G = b),
        (0, v.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          _ && (0, v.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(G, { children: (0, v.jsx)(s.v$, { children: _ }) }) }) }),
          m &&
           (0, v.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(s.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          m &&
           (0, v.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, v.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: N, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(s.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   l.d(n, { R: () => t, x: () => a });
   var o = l(30758);
   const s = {},
    r = o.createContext(s);
   function t(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : t(e.components)), o.createElement(r.Provider, { value: n }, e.children));
   }
  },
  21810(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => y, frontMatter: () => g, metadata: () => o, toc: () => x }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/help/show-values/index","title":"Geef geldige waardes aan voor een invoerveld","description":"Richtlijnen om geldige waardes aan een invoerveld te geven.","source":"@site/docs/richtlijnen/formulieren/help/4-show-values/index.mdx","sourceDirName":"richtlijnen/formulieren/help/4-show-values","slug":"/richtlijnen/formulieren/voorkom-fouten/geldige-waardes","permalink":"/richtlijnen/formulieren/voorkom-fouten/geldige-waardes","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/4-show-values/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef geldige waardes aan voor een invoerveld","title_sm":"Geef geldige waardes aan","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geef geldige waardes aan","pagination_label":"Geef geldige waardes aan een invoerveld","description":"Richtlijnen om geldige waardes aan een invoerveld te geven.","slug":"/richtlijnen/formulieren/voorkom-fouten/geldige-waardes","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Keur niet te snel af","permalink":"/richtlijnen/formulieren/voorkom-fouten/keur-niet-te-snel-af"},"next":{"title":"Autocomplete in een formulier","permalink":"/richtlijnen/formulieren/voorkom-fouten/autocomplete"}}');
   var s = l(86070),
    r = l(18439),
    t = l(78734),
    a = l(9386),
    c = l(88022);
   function i(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(c.$, { appearance: 'do', title: 'Leg uit hoe een veld in te vullen.', description: 'Bijvoorbeeld in de description.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'ww', children: 'Nieuw wachtwoord' }) }), (0, s.jsx)('p', { id: 'ww_description', children: 'Minimaal 8 karakters, waarvan 2 cijfers en 1 hoofdletter.' }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'password', id: 'ww', name: 'wachtwoord', 'aria-describedby': 'ww_description' }) })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Wijze van invullen weglaten.', description: 'Laat de gebruiker niet raden of pas bij de foutmeldingen ontdekken wat er mis is.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'ww2', children: 'Nieuw wachtwoord' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'password', id: 'ww2', name: 'wachtwoord' }) })] }) }) }), '\n', (0, s.jsx)(c.$, { appearance: 'dont', title: 'Wijze van invullen alleen in de placeholder zetten.', description: 'Zeker als de wijze van invullen precies goed moet zijn.', children: (0, s.jsx)(a.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'geboortedatum2', children: 'Geboortedatum' }) }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { type: 'text', id: 'geboortedatum2', name: 'geboortedatum', placeholder: 'dd/mm/jjjj' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i(e);
   }
   function u(e) {
    const n = { h1: 'h1', header: 'header', img: 'img', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'geef-geldige-waardes-aan-voor-een-invoerveld', children: 'Geef geldige waardes aan voor een invoerveld' }) }), '\n', (0, s.jsx)(n.p, { children: 'Geef geldige waardes aan voor een invoerveld (bijvoorbeeld de datum- of wachtwoordeisen) en niet alleen in de placeholder.' }), '\n', (0, s.jsx)(n.p, { children: 'Bedenk ook of het echt belangrijk is of, bijvoorbeeld een geboortedatum of telefoonnummer aan exacte invoereisen moet voldoen.' }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_wachtwoord-alt.png', alt: 'Wachtwoord-eisen zijn in de description getoond' }) }), '\n', (0, s.jsx)(n.p, { children: (0, s.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_geboortedatum.png', alt: 'Voorbeeld van de waarden voor de geboortedatum worden in de description getoond' }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
   const g = { title: 'Geef geldige waardes aan voor een invoerveld', title_sm: 'Geef geldige waardes aan', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geef geldige waardes aan', pagination_label: 'Geef geldige waardes aan een invoerveld', description: 'Richtlijnen om geldige waardes aan een invoerveld te geven.', slug: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function b(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(h, {}), '\n', (0, s.jsx)(t.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b();
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => c, n: () => a });
   var o = l(13526),
    s = l(96345),
    r = l(37168),
    t = l(86070);
   const a = ({ className: e, ...n }) => {
     const l = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, t.jsx)('div', { className: l, children: n.children });
    },
    c = ({ className: e, label: n, heading: l, headingLevel: a, headingApperance: c, ...i }) => {
     const d = (0, o.A)('utrecht-accordion__section', e);
     return (0, t.jsxs)('details', { className: d, ...i, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(s.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [l && (0, t.jsx)(r.D, { level: a, appearance: c, children: l }), n] })] }) }), (0, t.jsx)('div', { className: 'utrecht-accordion__panel', children: i.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => r });
   var o = l(86070),
    s = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var o = l(4077),
    s = l(58315),
    r = l(46447),
    t = l(13526),
    a = l(45980),
    c = l(30758),
    i = l(86070);
   const d = (0, c.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: c, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, i.jsx)(a.oz, { children: l }) : l;
     return (0, i.jsxs)(m, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(r.fz, { children: e })] }), g] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: c }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => i });
   var o = l(46447),
    s = l(16194),
    r = l(30758),
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
   var c = l(86070);
   function i({ lineNumber: e, syntax: n, textContent: l, trim: i }) {
    let d = l;
    const { title: u, type: p } = (0, r.useContext)(t.x),
     m = (0, r.useId)();
    return (i && (d = d.trim()), (0, c.jsx)(s.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: r }) => (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(o.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, c.jsxs)('span', { ...s({ line: n }), children: [e && (0, c.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, c.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
