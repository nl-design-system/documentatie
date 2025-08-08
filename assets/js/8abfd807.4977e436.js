'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [17713],
 {
  66968: (e, n, o) => {
   o.d(n, { ZP: () => s });
   var t = o(52676),
    l = o(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  84487: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => b, contentTitle: () => v, default: () => x, frontMatter: () => h, metadata: () => m, toc: () => f });
   var t = o(52676),
    l = o(40139),
    r = o(66968),
    s = o(43599),
    a = o(40761),
    i = o(16167);
   function c(e) {
    const n = { div: 'div', fieldset: 'fieldset', input: 'input', label: 'label', legend: 'legend', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(a.X, { appearance: 'do', title: 'Geef invoerveld een duidelijke rand met voldoende contrast.', description: (0, t.jsxs)(t.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, t.jsx)(i.rU, { href: '/contrast/?color=%23006FA1&background-color=%23ffffff', children: 'een contrast van 5.54:1' }), '.'] }), children: (0, t.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#006FA1' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.input, { type: 'text' }) }) }) }), '\n', (0, t.jsx)(a.X, { appearance: 'do', title: 'Geef een radiobutton voldoende kleurcontrast.', description: (0, t.jsxs)(t.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, t.jsx)(i.rU, { href: '/contrast/?color=%23006FA1&background-color=%23ffffff', children: 'een contrast van 5.54:1' }), '.'] }), children: (0, t.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-radio-button-background-color': '#FFFFFF', '--utrecht-radio-button-border-color': '#006FA1' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)(n.fieldset, { children: [(0, t.jsx)(n.legend, { children: 'Kies je kleur' }), (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.input, { type: 'radio', id: 'radio1', name: 'kleur' }), ' ', (0, t.jsx)(n.label, { htmlFor: 'radio1', children: 'Blauw' })] }), (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.input, { type: 'radio', id: 'radio2', name: 'kleur' }), ' ', (0, t.jsx)(n.label, { htmlFor: 'radio2', children: 'Groen' })] }), (0, t.jsxs)(n.div, { children: [(0, t.jsx)(n.input, { type: 'radio', id: 'radio3', name: 'kleur' }), ' ', (0, t.jsx)(n.label, { htmlFor: 'radio3', children: 'Rood' })] })] }) }) }) }), '\n', (0, t.jsx)(a.X, { appearance: 'dont', title: 'Geef invoerveld een slecht zichtbare rand met onvoldoende contrast.', description: (0, t.jsxs)(t.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, t.jsx)(i.rU, { href: '/contrast/?color=%23f8f5f1&background-color=%23ffffff', children: 'een contrast van 1.08:1' }), '.'] }), children: (0, t.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-textbox-background-color': '#ffffff', '--utrecht-textbox-border-color': '#f8f4f1' }, children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.input, { type: 'text' }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'geef-duidelijk-aan-waar-een-invoerveld-is', children: 'Geef duidelijk aan waar een invoerveld is' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruikers moeten herkennen waar en hoe groot het invoerveld, radiobutton of checkbox is.' }), '\n', (0, t.jsx)(n.p, { children: 'Het kleurcontrast van de randen (borders) ten opzichte van de achtergrondkleur moet daarom 3:1 of hoger zijn.' }), '\n', (0, t.jsxs)(n.p, { children: ['Het duidelijk aangeven van een invoerveld is nodig om te voldoen aan het ', (0, t.jsx)(n.a, { href: '/wcag/1.4.11/', children: 'WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content' }), ' (niveau AA).'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const h = { title: 'Geef duidelijk aan waar een invoerveld is | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Invoerveld goed zichtbaar', pagination_label: 'Invoerveld goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    m = { id: 'richtlijnen/formulieren/visual-design/field-contrast/README', title: 'Geef duidelijk aan waar een invoerveld is | Visueel ontwerp van een formulier | Richtlijnen', description: 'Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.', source: '@site/docs/richtlijnen/formulieren/visual-design/1-field-contrast/README.mdx', sourceDirName: 'richtlijnen/formulieren/visual-design/1-field-contrast', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/1-field-contrast/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef duidelijk aan waar een invoerveld is | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Invoerveld goed zichtbaar', pagination_label: 'Invoerveld goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar een invoerveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Visueel ontwerp van formulieren', permalink: '/richtlijnen/formulieren/visueel-ontwerp/' }, next: { title: 'Tekst goed zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar' } },
    b = {},
    f = [];
   function g(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(r.ZP, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g();
   }
  },
  43599: (e, n, o) => {
   o.d(n, { X: () => f });
   var t = o(41179),
    l = o(16167),
    r = o(4814),
    s = o(64642),
    a = o(93872),
    i = o(86017),
    c = o(48231),
    d = o(75119),
    u = o(75271),
    p = o(60027),
    h = o(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const m = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   m.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   b.displayName = 'SurfaceContainer';
   const f = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: f = !1, displayCode: g = !0, children: x, container: j = 'document', language: y, designTokens: k } = e;
    const _ = 'function' == typeof x ? x() : x,
     w = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : p.uS(w || _),
     [F, C] = (0, u.useState)(N),
     [Z, z] = (0, u.useState)(f);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: y, plugins: [s.Z, a.ZP, i.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [N]);
    const S = (0, u.useId)();
    let P = u.Fragment;
    return (
     'paragraph' === j ? (P = v) : 'document' === j ? (P = m) : 'surface' === j && (P = b),
     (0, h.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       _ && (0, h.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, h.jsx)(P, { children: (0, h.jsx)(l.pu, { children: _ }) }) }) }),
       g &&
        (0, h.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(l.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           z(!Z);
          },
          'aria-expanded': Z,
          'aria-controls': S,
          children: Z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, h.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !Z,
         children: [
          (0, h.jsx)(t.u, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: F, trim: !0 }),
          o &&
           (0, h.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(l.zx, {
             className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(F).catch((e) => console.error('Copy code failed', e));
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
   o.d(n, { u: () => c });
   var t = o(16167),
    l = o(60648),
    r = o(75271),
    s = o(40761);
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
   var i = o(52676);
   function c(e) {
    let { lineNumber: n, syntax: o, textContent: c, trim: d } = e,
     u = c;
    const { title: p, type: h } = (0, r.useContext)(s.n),
     v = (0, r.useId)();
    return (
     d && (u = u.trim()),
     (0, i.jsx)(l.y$, {
      theme: a,
      code: u,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: l, getLineProps: r, getTokenProps: s } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: v, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(t.dn, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': v, style: o, children: l.map((e, o) => (0, i.jsxs)('span', { ...r({ line: e }), children: [n && (0, i.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, i.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, o) => {
   o.d(n, { X: () => d, n: () => c });
   var t = o(69244),
    l = o(20061),
    r = o(16167),
    s = o(4814),
    a = o(75271),
    i = o(52676);
   const c = (0, a.createContext)({}),
    d = (e) => {
     let { title: n, appearance: o, description: a, children: d, figure: u } = e;
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = u ? 'figure' : 'div',
      v = u ? 'figcaption' : 'div';
     return (0, i.jsxs)(h, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(v, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, i.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(r.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, i.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(r.nv, { children: n })] }), a] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: n, type: p[o] }, children: d }) })] });
    };
  },
  40139: (e, n, o) => {
   o.d(n, { Z: () => a, a: () => s });
   var t = o(75271);
   const l = {},
    r = t.createContext(l);
   function s(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
