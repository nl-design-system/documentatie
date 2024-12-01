'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [37572],
 {
  49824: (e, n, o) => {
   o.d(n, { ZP: () => s });
   var l = o(52676),
    t = o(87118);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(r, { ...e }) }) : r(e);
   }
  },
  4460: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => v, contentTitle: () => m, default: () => f, frontMatter: () => h, metadata: () => g, toc: () => b });
   var l = o(52676),
    t = o(87118),
    r = o(49824),
    s = o(43599),
    c = o(40761),
    a = o(31916);
   function i(e) {
    const n = { input: 'input', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(c.X, { appearance: 'do', title: 'Maak de placeholder goed leesbaar door voldoende contrast.', description: (0, l.jsxs)(l.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, l.jsx)(a.rU, { href: '/contrast/?color=%23606060&background-color=%23ffffff', children: 'een contrast van 6.28:1' }), '.'] }), children: (0, l.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-placeholder-color': '#606060' }, children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(n.input, { placeholder: 'Zoeken' }) }) }) }), '\n', (0, l.jsx)(c.X, { appearance: 'dont', title: 'Maak de placeholder slecht zichtbaar door te laag contrast.', description: (0, l.jsxs)(l.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, l.jsx)(a.rU, { href: '/contrast/?color=%23888888&background-color=%23ffffff', children: 'een contrast van 3.54:1' }), '.'] }), children: (0, l.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-placeholder-color': '#888888' }, children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsx)(n.input, { placeholder: 'Zoeken' }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(i, { ...e }) }) : i(e);
   }
   function p(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, t.a)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h1, { id: 'geef-placeholders-voldoende-kleurcontrast', children: 'Geef placeholders voldoende kleurcontrast' }), '\n', (0, l.jsx)(n.p, { children: 'Ook het kleurcontrast van de tekst van placeholders ten opzichte van de achtergrondkleur moet 4,5:1 of hoger zijn.' }), '\n', (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.strong, { children: 'Let op' }), ': sommige browsers geven een placeholder lichter weer dan in de CSS is bepaald. Dit wordt verder uitgelegd bij de richtlijn ', (0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/kleurcontrast', children: 'Zorg voor een goed kleurcontrast van de placeholdertekst' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(p, { ...e }) }) : p(e);
   }
   const h = { title: 'Geef placeholders voldoende kleurcontrast | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder goed zichtbaar', pagination_label: 'Placeholder goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de placeholder van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    g = { id: 'richtlijnen/formulieren/visual-design/placeholder-contrast/README', title: 'Geef placeholders voldoende kleurcontrast | Visueel ontwerp van een formulier | Richtlijnen', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de placeholder van een formulierveld is.', source: '@site/docs/richtlijnen/formulieren/visual-design/3-placeholder-contrast/README.mdx', sourceDirName: 'richtlijnen/formulieren/visual-design/3-placeholder-contrast', slug: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/3-placeholder-contrast/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef placeholders voldoende kleurcontrast | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder goed zichtbaar', pagination_label: 'Placeholder goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de placeholder van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Tekst goed zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar' }, next: { title: 'Focus goed zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar' } },
    v = {},
    b = [];
   function y(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', '\n', (0, l.jsx)(u, {}), '\n', (0, l.jsx)(d, {}), '\n', (0, l.jsx)(r.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(y, { ...e }) }) : y();
   }
  },
  43599: (e, n, o) => {
   o.d(n, { X: () => b });
   var l = o(41179),
    t = o(31916),
    r = o(4814),
    s = o(25585),
    c = o(40282),
    a = o(40678),
    i = o(85722),
    d = o(6374),
    p = o(75271),
    u = o(60027),
    h = o(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(t.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(t.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(t.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   v.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: b = !1, displayCode: y = !0, children: f, container: x = 'document', language: j, designTokens: k } = e;
    const _ = 'function' == typeof f ? f() : f,
     w = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : u.uS(w || _),
     [Z, z] = (0, p.useState)(N),
     [C, P] = (0, p.useState)(b);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: j, plugins: [s.Z, c.ZP, a.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [N]);
    const S = (0, p.useId)();
    let F = p.Fragment;
    return (
     'paragraph' === x ? (F = m) : 'document' === x ? (F = g) : 'surface' === x && (F = v),
     (0, h.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       _ && (0, h.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, h.jsx)(F, { children: (0, h.jsx)(t.pu, { children: _ }) }) }) }),
       y &&
        (0, h.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(t.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           P(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, h.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, h.jsx)(l.u, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: Z, trim: !0 }),
          o &&
           (0, h.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(t.zx, {
             className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   o.d(n, { u: () => i });
   var l = o(31916),
    t = o(70739),
    r = o(75271),
    s = o(40761);
   const c = {
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
   var a = o(52676);
   function i(e) {
    let { lineNumber: n, syntax: o, textContent: i, trim: d } = e,
     p = i;
    const { title: u, type: h } = (0, r.useContext)(s.n),
     m = (0, r.useId)();
    return (
     d && (p = p.trim()),
     (0, a.jsx)(t.y$, {
      theme: c,
      code: p,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: t, getLineProps: r, getTokenProps: s } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(l.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: o, children: t.map((e, o) => (0, a.jsxs)('span', { ...r({ line: e }), children: [n && (0, a.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, o) => {
   o.d(n, { X: () => d, n: () => i });
   var l = o(77355),
    t = o(67663),
    r = o(31916),
    s = o(4814),
    c = o(75271),
    a = o(52676);
   const i = (0, c.createContext)({}),
    d = (e) => {
     let { title: n, appearance: o, description: c, children: d, figure: p } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div';
     return (0, a.jsxs)(h, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(r.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(r.nv, { children: n })] }), c] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(i.Provider, { value: { title: n, type: u[o] }, children: d }) })] });
    };
  },
  87118: (e, n, o) => {
   o.d(n, { Z: () => c, a: () => s });
   var l = o(75271);
   const t = {},
    r = l.createContext(t);
   function s(e) {
    const n = l.useContext(r);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), l.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
