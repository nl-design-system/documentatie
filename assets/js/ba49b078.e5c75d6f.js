'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [69121],
 {
  5547: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var o = t(52676),
    l = t(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  4055: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => b, contentTitle: () => h, default: () => x, frontMatter: () => m, metadata: () => v, toc: () => g });
   var o = t(52676),
    l = t(40139),
    r = t(5547),
    s = t(43599),
    a = t(40761),
    c = t(37943);
   function i(e) {
    const n = { input: 'input', label: 'label', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(a.X, { appearance: 'do', title: 'Maak het label goed leesbaar door voldoende contrast.', description: (0, o.jsxs)(o.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, o.jsx)(c.rU, { href: '/contrast/?color=%23006FA1&background-color=%23ffffff', children: 'een contrast van 5.54:1' }), '.'] }), children: (0, o.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-form-label-color': '#006FA1' }, children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { htmlFor: 'naam1', children: 'Uw naam' }), (0, o.jsx)(n.input, { type: 'text', id: 'naam1', autoComplete: 'name' })] }) }) }), '\n', (0, o.jsx)(a.X, { appearance: 'dont', title: 'Maak het label slecht leesbaar door onvoldoende contrast.', description: (0, o.jsxs)(o.Fragment, { children: ['Dit voorbeeld heeft', ' ', (0, o.jsx)(c.rU, { href: '/contrast/?color=%23999999&background-color=%23f8f5f1', children: 'een contrast van 2.62:1' }), '.'] }), children: (0, o.jsx)(s.X, { language: 'html', designTokens: { '--utrecht-form-label-color': '#999999' }, children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { htmlFor: 'naam2', children: 'Uw naam' }), (0, o.jsx)(n.input, { type: 'text', id: 'naam2', autoComplete: 'name' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function u(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'geef-tekst-voldoende-kleurcontrast', children: 'Geef tekst voldoende kleurcontrast' }), '\n', (0, o.jsx)(n.p, { children: 'Gebruikers moeten goed kunnen lezer wat ze moeten invullen of waaruit ze kunnen kiezen.' }), '\n', (0, o.jsx)(n.p, { children: 'Het kleurcontrast van de tekst van labels en descriptions ten opzichte van de achtergrondkleur moet daarom 4,5:1 of hoger zijn.' }), '\n', (0, o.jsxs)(n.p, { children: ['Voldoende kleurcontrast van tekst is nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'WCAG-succescriterium 1.4.3 Contrast (minimum)' }), ' (niveau AA).'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   const m = { title: 'Geef tekst voldoende kleurcontrast \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tekst goed zichtbaar', pagination_label: 'Tekst goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    v = { id: 'richtlijnen/formulieren/visual-design/text-contrast/README', title: 'Geef tekst voldoende kleurcontrast \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.', source: '@site/docs/richtlijnen/formulieren/visual-design/2-text-contrast/README.mdx', sourceDirName: 'richtlijnen/formulieren/visual-design/2-text-contrast', slug: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/2-text-contrast/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Geef tekst voldoende kleurcontrast \xb7 Visueel ontwerp van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Tekst goed zichtbaar', pagination_label: 'Tekst goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven waar de tekst van een formulierveld is.', slug: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Invoerveld goed zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-zichtbaar' }, next: { title: 'Placeholder goed zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar' } },
    b = {},
    g = [];
   function y(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(r.ZP, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(y, { ...e }) }) : y();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => g });
   var o = t(41179),
    l = t(37943),
    r = t(4814),
    s = t(64642),
    a = t(93872),
    c = t(86017),
    i = t(48231),
    d = t(75119),
    u = t(75271),
    p = t(60027),
    m = t(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   b.displayName = 'SurfaceContainer';
   const g = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: g = !1, displayCode: y = !0, children: x, container: j = 'document', language: f, designTokens: k } = e;
    const _ = 'function' == typeof x ? x() : x,
     w = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : p.uS(w || _),
     [z, C] = (0, u.useState)(N),
     [Z, F] = (0, u.useState)(g);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: f, plugins: [s.Z, a.ZP, c.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [N]);
    const S = (0, u.useId)();
    let P = u.Fragment;
    return (
     'paragraph' === j ? (P = h) : 'document' === j ? (P = v) : 'surface' === j && (P = b),
     (0, m.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       _ && (0, m.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(P, { children: (0, m.jsx)(l.pu, { children: _ }) }) }) }),
       y &&
        (0, m.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(l.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           F(!Z);
          },
          'aria-expanded': Z,
          'aria-controls': S,
          children: Z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, m.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !Z,
         children: [
          (0, m.jsx)(o.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: z, trim: !0 }),
          t &&
           (0, m.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(l.zx, {
             className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(z).catch((e) => console.error('Copy code failed', e));
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
   t.d(n, { u: () => i });
   var o = t(37943),
    l = t(60648),
    r = t(75271),
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
   var c = t(52676);
   function i(e) {
    let { lineNumber: n, syntax: t, textContent: i, trim: d } = e,
     u = i;
    const { title: p, type: m } = (0, r.useContext)(s.n),
     h = (0, r.useId)();
    return (
     d && (u = u.trim()),
     (0, c.jsx)(l.y$, {
      theme: a,
      code: u,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: l, getLineProps: r, getTokenProps: s } = e;
       return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, c.jsx)(o.dn, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': h, style: t, children: l.map((e, t) => (0, c.jsxs)('span', { ...r({ line: e }), children: [n && (0, c.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, c.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => i });
   var o = t(69244),
    l = t(20061),
    r = t(37943),
    s = t(4814),
    a = t(75271),
    c = t(52676);
   const i = (0, a.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: a, children: d, figure: u } = e;
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div';
     return (0, c.jsxs)(m, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(r.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, c.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(r.nv, { children: n })] }), a] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(i.Provider, { value: { title: n, type: p[t] }, children: d }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => s });
   var o = t(75271);
   const l = {},
    r = o.createContext(l);
   function s(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
