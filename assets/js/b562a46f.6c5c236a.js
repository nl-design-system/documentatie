'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [12274],
 {
  55400: (e, n, o) => {
   o.d(n, { ZP: () => t });
   var l = o(52676),
    r = o(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e);
   }
  },
  44534: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => y, contentTitle: () => m, default: () => g, frontMatter: () => u, metadata: () => h, toc: () => v });
   var l = o(52676),
    r = o(24785),
    s = o(55400),
    t = o(43599),
    i = o(40761);
   function c(e) {
    const n = { div: 'div', input: 'input', label: 'label', ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(i.X, { appearance: 'do', title: 'Koppel alle descriptions aan het formulierveld.', children: (0, l.jsx)(t.X, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.label, { htmlFor: 'wachtwoord5', children: 'Nieuw wachtwoord' }), (0, l.jsx)(n.div, { id: 'description-wachtwoord5', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, l.jsx)(n.div, { id: 'error-wachtwoord5', children: 'Je gekozen wachtwoord is te kort.' }), (0, l.jsx)(n.input, { id: 'wachtwoord5', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord5 error-wachtwoord5' })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(c, { ...e }) }) : c(e);
   }
   function d(e) {
    const n = { code: 'code', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'meerdere-descriptions-koppelen', children: 'Meerdere descriptions koppelen' }), '\n', (0, l.jsx)(n.p, { children: 'Je kunt meerdere descriptions koppelen aan een formulierveld. Bijvoorbeeld als er een ook nog een foutmelding is.' }), '\n', (0, l.jsxs)(n.p, { children: ['Geef dan ', (0, l.jsx)(n.code, { children: 'aria-describedby' }), " twee waardes (IDs) mee, gescheiden door een spatie. De volgorde van de ID's meegegeven in de ", (0, l.jsx)(n.code, { children: 'aria-describedby' }), ' is de volgorde waarin het voorgelezen wordt.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Meerdere descriptions koppelen \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Meerdere descriptions', pagination_label: 'Meerdere descriptions', description: 'Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/meerdere-koppelen', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    h = { id: 'richtlijnen/formulieren/description/multiple/README', title: 'Meerdere descriptions koppelen \xb7 Descriptions in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.', source: '@site/docs/richtlijnen/formulieren/description/3-multiple/README.mdx', sourceDirName: 'richtlijnen/formulieren/description/3-multiple', slug: '/richtlijnen/formulieren/descriptions/meerdere-koppelen', permalink: '/richtlijnen/formulieren/descriptions/meerdere-koppelen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/3-multiple/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Meerdere descriptions koppelen \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Meerdere descriptions', pagination_label: 'Meerdere descriptions', description: 'Richtlijnen voor koppelen van meerdere descriptions aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/meerdere-koppelen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Plaatsing description', permalink: '/richtlijnen/formulieren/descriptions/plaatsing' }, next: { title: 'Description bij fieldsets', permalink: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset' } },
    y = {},
    v = [];
   function b(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(p, {}), '\n', (0, l.jsx)(a, {}), '\n', (0, l.jsx)(s.ZP, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(b, { ...e }) }) : b();
   }
  },
  43599: (e, n, o) => {
   o.d(n, { X: () => b });
   var l = o(46506),
    r = o(41179),
    s = o(4814),
    t = o(25585),
    i = o(40282),
    c = o(40678),
    a = o(85722),
    d = o(6374),
    p = o(75271),
    u = o(60027),
    m = o(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(l.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const y = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(l.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   y.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   v.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: b = !1, displayCode: g = !0, children: j, container: x = 'document', language: f, designTokens: k } = e,
     _ = 'function' == typeof j ? j() : j,
     w = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : u.uS(w || _),
     [Z, C] = (0, p.useState)(N),
     [D, S] = (0, p.useState)(b);
    (0, p.useEffect)(() => {
     (async () => {
      (Z = await d.ZP.format(N, { parser: f, plugins: [t.Z, i.ZP, c.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(Z);
     })();
    }, [N]);
    const M = (0, p.useId)();
    let P = p.Fragment;
    return (
     'paragraph' === x ? (P = h) : 'document' === x ? (P = y) : 'surface' === x && (P = v),
     (0, m.jsxs)('div', {
      className: (0, s.Z)('nlds-canvas'),
      children: [
       _ && (0, m.jsx)('div', { className: (0, s.Z)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(P, { children: (0, m.jsx)(l.pu, { children: _ }) }) }) }),
       g &&
        (0, m.jsx)('div', {
         className: (0, s.Z)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(l.zx, {
          className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           S(!D);
          },
          'aria-expanded': D,
          'aria-controls': M,
          children: D ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, m.jsxs)('div', {
         className: (0, s.Z)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: M,
         hidden: !D,
         children: [
          (0, m.jsx)(r.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: Z, trim: !0 }),
          o &&
           (0, m.jsx)('div', {
            className: (0, s.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(l.zx, {
             className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, o) => {
   o.d(n, { u: () => a });
   var l = o(46506),
    r = o(70739),
    s = o(75271),
    t = o(40761);
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
   var c = o(52676);
   function a(e) {
    let { lineNumber: n, syntax: o, textContent: a, trim: d } = e,
     p = a;
    const { title: u, type: m } = (0, s.useContext)(t.n),
     h = (0, s.useId)();
    return (
     d && (p = p.trim()),
     (0, c.jsx)(r.y$, {
      theme: i,
      code: p,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: r, getLineProps: s, getTokenProps: t } = e;
       return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(l.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: o, children: r.map((e, o) => (0, c.jsxs)('span', { ...s({ line: e }), children: [n && (0, c.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, c.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, o) => {
   o.d(n, { X: () => d, n: () => a });
   var l = o(77355),
    r = o(67663),
    s = o(46506),
    t = o(4814),
    i = o(75271),
    c = o(52676);
   const a = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: o, description: i, children: d, figure: p } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      h = p ? 'figcaption' : 'div';
     return (0, c.jsxs)(m, { className: (0, t.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, t.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, c.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(s.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, t.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, c.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(s.nv, { children: n })] }), i] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(a.Provider, { value: { title: n, type: u[o] }, children: d }) })] });
    };
  },
  24785: (e, n, o) => {
   o.d(n, { Z: () => i, a: () => t });
   var l = o(75271);
   const r = {},
    s = l.createContext(r);
   function t(e) {
    const n = l.useContext(s);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : t(e.components)), l.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
