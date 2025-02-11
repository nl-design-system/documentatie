'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [52116],
 {
  49824: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var o = t(52676),
    r = t(87118);
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  50872: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => u, default: () => j, frontMatter: () => m, metadata: () => h, toc: () => v });
   var o = t(52676),
    r = t(87118),
    l = t(49824),
    s = t(43599),
    a = t(40761);
   function i(e) {
    const n = { form: 'form', h2: 'h2', h3: 'h3', p: 'p', span: 'span', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(a.X, { appearance: 'do', title: 'Info boven het form element.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { children: 'Uw gegevens' }), (0, o.jsx)(n.p, { children: 'Stap 2 van 3' }), (0, o.jsx)(n.form, { children: '[... inhoud formulier \u2026]' })] }) }) }), '\n', (0, o.jsx)(a.X, { appearance: 'do', title: 'De tekst van de stap opnemen in het kopje, boven het formulier.', description: 'En deze tekst visueel op een andere regel plaatsen. ', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(n.h2, { children: [(0, o.jsx)(n.span, { class: 'progress-indicator', children: 'Stap 2 van 3' }), 'Uw gegevens'] }), (0, o.jsx)(n.form, { children: '[... inhoud formulier \u2026]' })] }) }) }), '\n', (0, o.jsx)(a.X, { appearance: 'dont', title: 'Info binnen het formulier.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { children: 'Uw gegevens' }), (0, o.jsxs)(n.form, { children: [(0, o.jsx)(n.h3, { children: 'Stap 2 van 3' }), '[... inhoud formulier \u2026]'] })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', p: 'p', strong: 'strong', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier', children: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier' }), '\n', (0, o.jsxs)(n.p, { children: ['Plaats tekst en uitleg die hoort bij het formulier buiten het ', (0, o.jsx)(n.code, { children: '<form>' }), ' element. Dus zet informatie over de stappen ', (0, o.jsx)(n.strong, { children: 'boven' }), ' en niet ', (0, o.jsx)(n.strong, { children: 'binnen' }), ' het ', (0, o.jsx)(n.code, { children: '<form>' }), ' element. Dan is de kans dat screenreadergebruikers deze informatie missen het kleinst. Het waarom staat uitgelegd bij de richtlijn ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/koppelen', children: 'Koppel een description aan het formulierveld' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Het voordeel van een formulier in meer stappen is, dat je makkelijker uitgebreide informatie per stap kunt toevoegen ', (0, o.jsx)(n.strong, { children: 'boven' }), ' het formulier. Dat scheelt de complexiteit van eventueel gebruik van ARIA om tekst te laten voorlezen bij een formulierveld.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Het aangeven van de hoeveelheid stappen boven het formulier is nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/1.3.2', children: 'WCAG-succescriterium 1.3.2 Betekenisvolle volgorde' }), ' (niveau A).'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   const m = { title: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing voortgang stappen', pagination_label: 'Plaatsing voortgang stappen', description: 'Richtlijnen over positie van de formulier voortgang.', slug: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', keywords: ['labels', 'formulier', 'design', 'code'] },
    u = void 0,
    h = { id: 'richtlijnen/formulieren/multistep/location/README', title: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen', description: 'Richtlijnen over positie van de formulier voortgang.', source: '@site/docs/richtlijnen/formulieren/multistep/2-location/README.mdx', sourceDirName: 'richtlijnen/formulieren/multistep/2-location', slug: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', permalink: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/2-location/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Plaats de informatie over waar de gebruiker is in de stappen boven het formulier \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing voortgang stappen', pagination_label: 'Plaatsing voortgang stappen', description: 'Richtlijnen over positie van de formulier voortgang.', slug: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Voortgang stappen tonen', permalink: '/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen' }, next: { title: 'Consistente navigatie', permalink: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming' } },
    g = {},
    v = [];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(l.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => b });
   var o = t(41179),
    r = t(31916),
    l = t(4814),
    s = t(25585),
    a = t(40282),
    i = t(40678),
    c = t(85722),
    d = t(6374),
    p = t(75271),
    m = t(60027),
    u = t(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(r.BB, { className: (0, l.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(r.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(r.BB, { className: (0, l.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   v.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: b = !1, displayCode: j = !0, children: y, container: f = 'document', language: x, designTokens: k } = e;
    const _ = 'function' == typeof y ? y() : y,
     N = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     w = 'string' == typeof n ? n : m.uS(N || _),
     [C, P] = (0, p.useState)(w),
     [Z, S] = (0, p.useState)(b);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(w, { parser: x, plugins: [s.Z, a.ZP, i.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      P(e);
     })();
    }, [w]);
    const z = (0, p.useId)();
    let D = p.Fragment;
    return (
     'paragraph' === f ? (D = h) : 'document' === f ? (D = g) : 'surface' === f && (D = v),
     (0, u.jsxs)('div', {
      className: (0, l.Z)('nlds-canvas'),
      children: [
       _ && (0, u.jsx)('div', { className: (0, l.Z)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, u.jsx)(D, { children: (0, u.jsx)(r.pu, { children: _ }) }) }) }),
       j &&
        (0, u.jsx)('div', {
         className: (0, l.Z)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(r.zx, {
          className: (0, l.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           S(!Z);
          },
          'aria-expanded': Z,
          'aria-controls': z,
          children: Z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, u.jsxs)('div', {
         className: (0, l.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: z,
         hidden: !Z,
         children: [
          (0, u.jsx)(o.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: C, trim: !0 }),
          t &&
           (0, u.jsx)('div', {
            className: (0, l.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(r.zx, {
             className: (0, l.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(C).catch((e) => console.error('Copy code failed', e));
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
  41179: (e, n, t) => {
   t.d(n, { u: () => c });
   var o = t(31916),
    r = t(70739),
    l = t(75271),
    s = t(40761);
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
   var i = t(52676);
   function c(e) {
    let { lineNumber: n, syntax: t, textContent: c, trim: d } = e,
     p = c;
    const { title: m, type: u } = (0, l.useContext)(s.n),
     h = (0, l.useId)();
    return (
     d && (p = p.trim()),
     (0, i.jsx)(r.y$, {
      theme: a,
      code: p,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: r, getLineProps: l, getTokenProps: s } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(o.dn, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': h, style: t, children: r.map((e, t) => (0, i.jsxs)('span', { ...l({ line: e }), children: [n && (0, i.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, i.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => c });
   var o = t(77355),
    r = t(67663),
    l = t(31916),
    s = t(4814),
    a = t(75271),
    i = t(52676);
   const c = (0, a.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: a, children: d, figure: p } = e;
     const m = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      h = p ? 'figcaption' : 'div';
     return (0, i.jsxs)(u, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, i.jsx)(l.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(l.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, i.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, i.jsx)(l.nv, { children: n })] }), a] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: n, type: m[t] }, children: d }) })] });
    };
  },
  87118: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => s });
   var o = t(75271);
   const r = {},
    l = o.createContext(r);
   function s(e) {
    const n = o.useContext(l);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), o.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
