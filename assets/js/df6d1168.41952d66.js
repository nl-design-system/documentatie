'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46756],
 {
  5547: (e, n, o) => {
   o.d(n, { ZP: () => r });
   var t = o(52676),
    l = o(40139);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  44070: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => v, contentTitle: () => p, default: () => f, frontMatter: () => h, metadata: () => m, toc: () => b });
   var t = o(52676),
    l = o(40139),
    s = o(5547),
    r = o(43599),
    c = o(40761);
   function a(e) {
    const n = { input: 'input', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(c.X, { appearance: 'do', title: 'Geef invoerveld een duidelijke visuele focusstijl.', description: (0, t.jsx)(t.Fragment, { children: 'In dit voorbeeld is de focus herkenbaar aan een stippellijn rond het invoerveld. Klik in het veld of tab ernaar met het toetsenbord om het effect te zien.' }), children: (0, t.jsx)(r.X, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(n.input, { type: 'text' }) }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'maak-toetsenbordfocus-goed-zichtbaar', children: 'Maak toetsenbordfocus goed zichtbaar' }), '\n', (0, t.jsx)(n.p, { children: 'Voor gebruikers van een toetsenbord of van spraakherkenning moet duidelijk zijn welk formulierveld de focus heeft. Maak de focusstijl makkelijk te herkennen en geef het voldoende kleurcontrast. Dan kunnen ook slechtziende of kleurenblinde bezoekers het element met focus goed herkennen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Dit doe je door een minimale dikte van ', (0, t.jsx)(n.strong, { children: '2 pixels' }), ' en een ', (0, t.jsx)(n.strong, { children: 'minimaal contrast van 3:1' }), ' ten opzichte van aangrenzende kleuren. En daarmee bedoelen we de kleur van de component dat focus heeft, maar ook de achtergrond waar de component \u2018bovenop\u2019 ligt.'] }), '\n', (0, t.jsx)(n.p, { children: 'Een button of link komt namelijk misschien het meest voor op een witte achtergrond, maar houdt ook het scenario\u2019s in gedachten waarbij de link of button op een getinte achtergrond staat zoals bijvoorbeeld een footer.' }), '\n', (0, t.jsxs)(n.p, { children: ['Zorg er ook voor dat de focusring heeft een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de ', (0, t.jsx)(n.strong, { children: 'gefocuste' }), ' en ', (0, t.jsx)(n.strong, { children: 'niet-gefocuste' }), ' staat.'] }), '\n', (0, t.jsx)(n.p, { children: 'Goed zichtbare focusstijlen zijn nodig om te voldoen het aan de WCAG-succescriteria:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/1.4.11/', children: '1.4.11 Contrast van niet-tekstuele content' }), ' (niveau AA).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.4.7/', children: '2.4.7 Focus zichtbaar' }), ' (niveau AA).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.4.13/', children: '2.4.13 Focusweergave' }), ' (niveau AAA)'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
   const h = { title: 'Maak toetsenbordfocus goed zichtbaar | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Focus goed zichtbaar', pagination_label: 'Focus goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.', slug: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    m = { id: 'richtlijnen/formulieren/visual-design/focus-visible/README', title: 'Maak toetsenbordfocus goed zichtbaar | Visueel ontwerp van een formulier | Richtlijnen', description: 'Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.', source: '@site/docs/richtlijnen/formulieren/visual-design/4-focus-visible/README.mdx', sourceDirName: 'richtlijnen/formulieren/visual-design/4-focus-visible', slug: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/4-focus-visible/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Maak toetsenbordfocus goed zichtbaar | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Focus goed zichtbaar', pagination_label: 'Focus goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.', slug: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Placeholder goed zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar' }, next: { title: 'Invoerveld goed aanklikbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar' } },
    v = {},
    b = [];
   function g(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(i, {}), '\n', (0, t.jsx)(s.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g();
   }
  },
  43599: (e, n, o) => {
   o.d(n, { X: () => g });
   var t = o(41179),
    l = o(37943),
    s = o(4814),
    r = o(64642),
    c = o(93872),
    a = o(86017),
    i = o(48231),
    d = o(75119),
    u = o(75271),
    h = o(60027),
    p = o(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   b.displayName = 'SurfaceContainer';
   const g = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: g = !1, displayCode: f = !0, children: j, container: y = 'document', language: x, designTokens: k } = e;
    const _ = 'function' == typeof j ? j() : j,
     w = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : h.uS(w || _),
     [N, Z] = (0, u.useState)(z),
     [C, F] = (0, u.useState)(g);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(z, { parser: x, plugins: [r.Z, c.ZP, a.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [z]);
    const S = (0, u.useId)();
    let P = u.Fragment;
    return (
     'paragraph' === y ? (P = m) : 'document' === y ? (P = v) : 'surface' === y && (P = b),
     (0, p.jsxs)('div', {
      className: (0, s.Z)('nlds-canvas'),
      children: [
       _ && (0, p.jsx)('div', { className: (0, s.Z)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(P, { children: (0, p.jsx)(l.pu, { children: _ }) }) }) }),
       f &&
        (0, p.jsx)('div', {
         className: (0, s.Z)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(l.zx, {
          className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           F(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       f &&
        (0, p.jsxs)('div', {
         className: (0, s.Z)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, p.jsx)(t.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          o &&
           (0, p.jsx)('div', {
            className: (0, s.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(l.zx, {
             className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, o) => {
   o.d(n, { u: () => i });
   var t = o(37943),
    l = o(60648),
    s = o(75271),
    r = o(40761);
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
     u = i;
    const { title: h, type: p } = (0, s.useContext)(r.n),
     m = (0, s.useId)();
    return (
     d && (u = u.trim()),
     (0, a.jsx)(l.y$, {
      theme: c,
      code: u,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: l, getLineProps: s, getTokenProps: r } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(t.dn, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: o, children: l.map((e, o) => (0, a.jsxs)('span', { ...s({ line: e }), children: [n && (0, a.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, o) => {
   o.d(n, { X: () => d, n: () => i });
   var t = o(69244),
    l = o(20061),
    s = o(37943),
    r = o(4814),
    c = o(75271),
    a = o(52676);
   const i = (0, c.createContext)({}),
    d = (e) => {
     let { title: n, appearance: o, description: c, children: d, figure: u } = e;
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div';
     return (0, a.jsxs)(p, { className: (0, r.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(s.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(s.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(s.nv, { children: n })] }), c] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(i.Provider, { value: { title: n, type: h[o] }, children: d }) })] });
    };
  },
  40139: (e, n, o) => {
   o.d(n, { Z: () => c, a: () => r });
   var t = o(75271);
   const l = {},
    s = t.createContext(l);
   function r(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : r(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
