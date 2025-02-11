'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [78311],
 {
  49824: (e, n, t) => {
   t.d(n, { ZP: () => r });
   var o = t(52676),
    s = t(87118);
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  27267: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => h, contentTitle: () => m, default: () => y, frontMatter: () => u, metadata: () => g, toc: () => b });
   var o = t(52676),
    s = t(87118),
    l = t(49824),
    r = t(43599),
    i = t(40761);
   function a(e) {
    const n = { a: 'a', button: 'button', div: 'div', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(i.X, { appearance: 'do', title: 'Benoem de stappen consistent.', children: (0, o.jsx)(r.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: (0, o.jsx)(n.a, { href: './stap-1', children: 'Vorige stap' }) }), '[...]', (0, o.jsx)(n.div, { children: (0, o.jsx)(n.button, { children: 'Volgende stap' }) })] }) }) }), '\n', (0, o.jsx)(i.X, { appearance: 'dont', title: 'Verschillen tussen hoe de vorige en volgende stap worden benoemd.', description: 'Gebruik ofwel \u2018terug\u2019/\u2018verder\u2019 ofwel \u2018Vorige stap\u2019/\u2018Volgende stap\u2019.', children: (0, o.jsx)(r.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: (0, o.jsx)(n.a, { href: './stap-1', children: 'Terug' }) }), '[...]', (0, o.jsx)(n.div, { children: (0, o.jsx)(n.button, { children: 'Volgende stap' }) })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'zorg-voor-een-consistente-navigatie-en-benaming-van-links-en-buttons', children: 'Zorg voor een consistente navigatie en benaming van links en buttons' }), '\n', (0, o.jsx)(n.p, { children: 'Geef op een consistente plek, met een consistente benaming, aan hoe de gebruiker navigeert binnen de stappen, bijvoorbeeld:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: '"Vorige stap", boven het formulier' }), '\n', (0, o.jsx)(n.li, { children: '"Volgende stap" (of als laatste stap: "Versturen") als submitbutton' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Zorg er dus voor dat links en buttons binnen de formulieren op dezelfde plaats staan en dat ze ook een consistente naam hebben. Door consistentie heeft de gebruiker minder moeite de navigatie te begrijpen en weet ook beter wat er gaat komen na een keuze.' }), '\n', (0, o.jsxs)(n.p, { children: ['Consistent gebruik van navigatie in een formulier is nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/3.2.3', children: 'WCAG-succescriterium 3.2.3 Consistente navigatie' }), ' (niveau AA).'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Zorg voor een consistente navigatie en benaming van links en buttons \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Consistente navigatie', pagination_label: 'Consistente navigatie', description: 'Richtlijnen over consistente benaming van navigatie, links en buttons.', slug: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    g = { id: 'richtlijnen/formulieren/multistep/consistency/README', title: 'Zorg voor een consistente navigatie en benaming van links en buttons \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen', description: 'Richtlijnen over consistente benaming van navigatie, links en buttons.', source: '@site/docs/richtlijnen/formulieren/multistep/3-consistency/README.mdx', sourceDirName: 'richtlijnen/formulieren/multistep/3-consistency', slug: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming', permalink: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/multistep/3-consistency/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zorg voor een consistente navigatie en benaming van links en buttons \xb7 Meerdere stappen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Consistente navigatie', pagination_label: 'Consistente navigatie', description: 'Richtlijnen over consistente benaming van navigatie, links en buttons.', slug: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Plaatsing voortgang stappen', permalink: '/richtlijnen/formulieren/meerdere-stappen/plaatsing-voortgang' }, next: { title: 'Samenvatting in laatste stap', permalink: '/richtlijnen/formulieren/meerdere-stappen/samenvatting' } },
    h = {},
    b = [];
   function v(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(l.ZP, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => v });
   var o = t(41179),
    s = t(31916),
    l = t(4814),
    r = t(25585),
    i = t(40282),
    a = t(40678),
    c = t(85722),
    d = t(6374),
    p = t(75271),
    u = t(60027),
    m = t(52676);
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(s.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(s.BB, { className: (0, l.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(s.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   g.displayName = 'ParagraphContainer';
   const h = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(s.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(s.BB, { className: (0, l.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   h.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(s.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   b.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: v = !1, displayCode: y = !0, children: x, container: j = 'document', language: f, designTokens: k } = e;
    const _ = 'function' == typeof x ? x() : x,
     N = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     C = 'string' == typeof n ? n : u.uS(N || _),
     [Z, w] = (0, p.useState)(C),
     [S, P] = (0, p.useState)(v);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(C, { parser: f, plugins: [r.Z, i.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      w(e);
     })();
    }, [C]);
    const z = (0, p.useId)();
    let V = p.Fragment;
    return (
     'paragraph' === j ? (V = g) : 'document' === j ? (V = h) : 'surface' === j && (V = b),
     (0, m.jsxs)('div', {
      className: (0, l.Z)('nlds-canvas'),
      children: [
       _ && (0, m.jsx)('div', { className: (0, l.Z)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(V, { children: (0, m.jsx)(s.pu, { children: _ }) }) }) }),
       y &&
        (0, m.jsx)('div', {
         className: (0, l.Z)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(s.zx, {
          className: (0, l.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           P(!S);
          },
          'aria-expanded': S,
          'aria-controls': z,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, m.jsxs)('div', {
         className: (0, l.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: z,
         hidden: !S,
         children: [
          (0, m.jsx)(o.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: Z, trim: !0 }),
          t &&
           (0, m.jsx)('div', {
            className: (0, l.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(s.zx, {
             className: (0, l.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, t) => {
   t.d(n, { u: () => c });
   var o = t(31916),
    s = t(70739),
    l = t(75271),
    r = t(40761);
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
   var a = t(52676);
   function c(e) {
    let { lineNumber: n, syntax: t, textContent: c, trim: d } = e,
     p = c;
    const { title: u, type: m } = (0, l.useContext)(r.n),
     g = (0, l.useId)();
    return (
     d && (p = p.trim()),
     (0, a.jsx)(s.y$, {
      theme: i,
      code: p,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: s, getLineProps: l, getTokenProps: r } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: g, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(o.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': g, style: t, children: s.map((e, t) => (0, a.jsxs)('span', { ...l({ line: e }), children: [n && (0, a.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => c });
   var o = t(77355),
    s = t(67663),
    l = t(31916),
    r = t(4814),
    i = t(75271),
    a = t(52676);
   const c = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: i, children: d, figure: p } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      g = p ? 'figcaption' : 'div';
     return (0, a.jsxs)(m, { className: (0, r.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(l.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(s.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(l.nv, { children: n })] }), i] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: u[t] }, children: d }) })] });
    };
  },
  87118: (e, n, t) => {
   t.d(n, { Z: () => i, a: () => r });
   var o = t(75271);
   const s = {},
    l = o.createContext(s);
   function r(e) {
    const n = o.useContext(l);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), o.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
