'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [97366],
 {
  49824: (e, n, l) => {
   l.d(n, { ZP: () => i });
   var s = l(52676),
    t = l(87118);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(o, { ...e }) }) : o(e);
   }
  },
  87800: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => b, contentTitle: () => m, default: () => j, frontMatter: () => u, metadata: () => g, toc: () => h });
   var s = l(52676),
    t = l(87118),
    o = l(49824),
    i = l(43599),
    r = l(40761);
   function c(e) {
    const n = { div: 'div', fieldset: 'fieldset', input: 'input', label: 'label', legend: 'legend', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(r.X, { appearance: 'do', title: 'Koppel een description aan de legend van de fieldset, met aria-describedby.', children: (0, s.jsx)(i.X, { language: 'html', children: () => (0, s.jsxs)(n.fieldset, { 'aria-describedby': 'description-inloggen', children: [(0, s.jsx)(n.legend, { children: 'Wilt u inloggen?' }), (0, s.jsx)(n.p, { id: 'description-inloggen', children: 'Als u inlogt worden uw gegevens al ingevuld en kunnen we u makkelijker helpen.' }), (0, s.jsxs)(n.div, { children: [(0, s.jsx)(n.input, { id: 'inloggen-ja', type: 'radio', name: 'inloggen', value: 'ja' }), (0, s.jsx)(n.label, { htmlFor: 'inloggen-ja', children: ' Ja' })] }), (0, s.jsxs)(n.div, { children: [(0, s.jsx)(n.input, { id: 'inloggen-nee', type: 'radio', name: 'inloggen', value: 'nee' }), (0, s.jsx)(n.label, { htmlFor: 'inloggen-nee', children: ' Nee' })] })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function d(e) {
    const n = { h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h1, { id: 'fieldset-plaats-descriptions-tussen-legend-en-eerste-item', children: 'Fieldset: Plaats descriptions tussen legend en eerste item' }), '\n', (0, s.jsx)(n.p, { children: 'Radiobuttons en checkboxes worden gegroepeerd in een fieldset. De "vraag" staat in de legend. Plaats de description dan onder de legend vlak boven het eerste label/formulierveld. De description kan aan de fieldset worden gekoppeld.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Plaats descriptions bij een fieldset tussen legend en eerste item \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Description bij fieldsets', pagination_label: 'Description bij fieldsets', description: 'Richtlijnen voor plaatsing van een descriptions bij een fieldset.', slug: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    g = { id: 'richtlijnen/formulieren/description/fieldset/README', title: 'Plaats descriptions bij een fieldset tussen legend en eerste item \xb7 Descriptions in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor plaatsing van een descriptions bij een fieldset.', source: '@site/docs/richtlijnen/formulieren/description/4-fieldset/README.mdx', sourceDirName: 'richtlijnen/formulieren/description/4-fieldset', slug: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset', permalink: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/4-fieldset/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Plaats descriptions bij een fieldset tussen legend en eerste item \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Description bij fieldsets', pagination_label: 'Description bij fieldsets', description: 'Richtlijnen voor plaatsing van een descriptions bij een fieldset.', slug: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Meerdere descriptions', permalink: '/richtlijnen/formulieren/descriptions/meerdere-koppelen' }, next: { title: 'Grootte aanklikbaar gedeelte', permalink: '/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte' } },
    b = {},
    h = [];
   function y(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(a, {}), '\n', (0, s.jsx)(o.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(y, { ...e }) }) : y();
   }
  },
  43599: (e, n, l) => {
   l.d(n, { X: () => y });
   var s = l(41179),
    t = l(31916),
    o = l(4814),
    i = l(25585),
    r = l(40282),
    c = l(40678),
    a = l(85722),
    d = l(6374),
    p = l(75271),
    u = l(60027),
    m = l(52676);
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(t.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   g.displayName = 'ParagraphContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   b.displayName = 'DocumentContainer';
   const h = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   h.displayName = 'SurfaceContainer';
   const y = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: y = !1, displayCode: j = !0, children: v, container: f = 'document', language: x, designTokens: k } = e;
    const _ = 'function' == typeof v ? v() : v,
     N = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     w = 'string' == typeof n ? n : u.uS(N || _),
     [Z, C] = (0, p.useState)(w),
     [P, D] = (0, p.useState)(y);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(w, { parser: x, plugins: [i.Z, r.ZP, c.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [w]);
    const S = (0, p.useId)();
    let F = p.Fragment;
    return (
     'paragraph' === f ? (F = g) : 'document' === f ? (F = b) : 'surface' === f && (F = h),
     (0, m.jsxs)('div', {
      className: (0, o.Z)('nlds-canvas'),
      children: [
       _ && (0, m.jsx)('div', { className: (0, o.Z)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(F, { children: (0, m.jsx)(t.pu, { children: _ }) }) }) }),
       j &&
        (0, m.jsx)('div', {
         className: (0, o.Z)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(t.zx, {
          className: (0, o.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           D(!P);
          },
          'aria-expanded': P,
          'aria-controls': S,
          children: P ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, m.jsxs)('div', {
         className: (0, o.Z)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !P,
         children: [
          (0, m.jsx)(s.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: Z, trim: !0 }),
          l &&
           (0, m.jsx)('div', {
            className: (0, o.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(t.zx, {
             className: (0, o.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(Z).catch((e) => console.error('Copy code failed', e));
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
  41179: (e, n, l) => {
   l.d(n, { u: () => a });
   var s = l(31916),
    t = l(70739),
    o = l(75271),
    i = l(40761);
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
   var c = l(52676);
   function a(e) {
    let { lineNumber: n, syntax: l, textContent: a, trim: d } = e,
     p = a;
    const { title: u, type: m } = (0, o.useContext)(i.n),
     g = (0, o.useId)();
    return (
     d && (p = p.trim()),
     (0, c.jsx)(t.y$, {
      theme: r,
      code: p,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: t, getLineProps: o, getTokenProps: i } = e;
       return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(s.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': g, style: l, children: t.map((e, l) => (0, c.jsxs)('span', { ...o({ line: e }), children: [n && (0, c.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, c.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, l) => {
   l.d(n, { X: () => d, n: () => a });
   var s = l(77355),
    t = l(67663),
    o = l(31916),
    i = l(4814),
    r = l(75271),
    c = l(52676);
   const a = (0, r.createContext)({}),
    d = (e) => {
     let { title: n, appearance: l, description: r, children: d, figure: p } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      g = p ? 'figcaption' : 'div';
     return (0, c.jsxs)(m, { className: (0, i.Z)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.nv, { className: (0, i.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(o.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(o.nv, { className: (0, i.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, c.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(o.nv, { children: n })] }), r] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(a.Provider, { value: { title: n, type: u[l] }, children: d }) })] });
    };
  },
  87118: (e, n, l) => {
   l.d(n, { Z: () => r, a: () => i });
   var s = l(75271);
   const t = {},
    o = s.createContext(t);
   function i(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : i(e.components)), s.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
