'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [55372],
 {
  66968: (e, n, o) => {
   o.d(n, { ZP: () => s });
   var t = o(52676),
    l = o(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  25703: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => v, contentTitle: () => p, default: () => y, frontMatter: () => u, metadata: () => h, toc: () => g });
   var t = o(52676),
    l = o(40139),
    r = o(66968),
    s = o(43599),
    c = o(40761);
   function a(e) {
    const n = { h2: 'h2', input: 'input', label: 'label', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(c.X, { appearance: 'do', title: 'Naast een telefoonnummer ook een e-mailadres uitvragen.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { htmlFor: 'telefoon1', children: 'Uw telefoonnummer' }), (0, t.jsx)(n.input, { id: 'telefoon1', type: 'tel', name: 'telefoon', autoComplete: 'tel' }), (0, t.jsx)(n.label, { htmlFor: 'email1', children: 'Uw e-mailadres' }), (0, t.jsx)(n.input, { id: 'email1', type: 'email', name: 'email', autoComplete: 'email' })] }) }) }), '\n', (0, t.jsx)(c.X, { appearance: 'dont', title: 'Alleen een telefoonnummer uitvragen.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { htmlFor: 'telefoon2', children: 'Uw telefoonnummer (verplicht)' }), (0, t.jsx)(n.input, { id: 'telefoon2', type: 'tel', name: 'telefoon', autoComplete: 'tel', 'aria-required': 'true' })] }) }) })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'biedt-verschillende-manieren-om-contact-op-te-nemen', children: 'Biedt verschillende manieren om contact op te nemen' }), '\n', (0, t.jsx)(n.p, { children: 'Vraag niet alleen om contact via een telefoonnummer.' }), '\n', (0, t.jsx)(n.p, { children: 'Vraag niet alleen om contact via een telefoonnummer. Gebruikers die doof zijn of heel verlegen, stotteren of een vorm van autisme hebben, kunnen soms niet (goed) bellen. Andere gebruikers spreken de Nederlandse taal misschien niet goed, waardoor zij liever niet bellen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Voeg een alternatief toe, bijvoorbeeld een e-mailadres. De blogpost ', (0, t.jsx)(n.a, { href: '/blog/meerdere-manieren-contact', children: 'Ik wil je wat vragen, maar ik heb geen WhatsApp!' }), ' gaat hier uitgebreid op in.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Biedt verschillende manieren om contact op te nemen \xb7 Uit te vragen informatie in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Bied contactmogelijkheden', pagination_label: 'Bied contactmogelijkheden', description: 'Richtlijnen over checken of informatie \xe8cht nodig is.', slug: '/richtlijnen/formulieren/vragen/manieren-voor-contact', keywords: ['labels', 'formulier', 'design', 'code'] },
    p = void 0,
    h = { id: 'richtlijnen/formulieren/questions/contact/README', title: 'Biedt verschillende manieren om contact op te nemen \xb7 Uit te vragen informatie in een formulier \xb7 Richtlijnen', description: 'Richtlijnen over checken of informatie \xe8cht nodig is.', source: '@site/docs/richtlijnen/formulieren/questions/3-contact/README.mdx', sourceDirName: 'richtlijnen/formulieren/questions/3-contact', slug: '/richtlijnen/formulieren/vragen/manieren-voor-contact', permalink: '/richtlijnen/formulieren/vragen/manieren-voor-contact', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/3-contact/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Biedt verschillende manieren om contact op te nemen \xb7 Uit te vragen informatie in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Bied contactmogelijkheden', pagination_label: 'Bied contactmogelijkheden', description: 'Richtlijnen over checken of informatie \xe8cht nodig is.', slug: '/richtlijnen/formulieren/vragen/manieren-voor-contact', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Waarom is informatie nodig', permalink: '/richtlijnen/formulieren/vragen/check-noodzaak' }, next: { title: 'Stel een vraag \xe9\xe9n keer', permalink: '/richtlijnen/formulieren/vragen/voorkom-dubbel-werk' } },
    v = {},
    g = [];
   function b(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(i, {}), '\n', (0, t.jsx)(r.ZP, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(b, { ...e }) }) : b();
   }
  },
  43599: (e, n, o) => {
   o.d(n, { X: () => b });
   var t = o(41179),
    l = o(16167),
    r = o(4814),
    s = o(64642),
    c = o(93872),
    a = o(86017),
    i = o(48231),
    d = o(75119),
    m = o(75271),
    u = o(60027),
    p = o(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   g.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: b = !1, displayCode: y = !0, children: j, container: f = 'document', language: x, designTokens: k } = e;
    const _ = 'function' == typeof j ? j() : j,
     N = 'function' == typeof n ? n() : (0, m.isValidElement)(n) ? n : void 0,
     w = 'string' == typeof n ? n : u.uS(N || _),
     [C, Z] = (0, m.useState)(w),
     [S, B] = (0, m.useState)(b);
    (0, m.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(w, { parser: x, plugins: [s.Z, c.ZP, a.ZP, i.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [w]);
    const F = (0, m.useId)();
    let P = m.Fragment;
    return (
     'paragraph' === f ? (P = h) : 'document' === f ? (P = v) : 'surface' === f && (P = g),
     (0, p.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       _ && (0, p.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(P, { children: (0, p.jsx)(l.pu, { children: _ }) }) }) }),
       y &&
        (0, p.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(l.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           B(!S);
          },
          'aria-expanded': S,
          'aria-controls': F,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, p.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: F,
         hidden: !S,
         children: [
          (0, p.jsx)(t.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: C, trim: !0 }),
          o &&
           (0, p.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(l.zx, {
             className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, o) => {
   o.d(n, { u: () => i });
   var t = o(16167),
    l = o(60648),
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
     m = i;
    const { title: u, type: p } = (0, r.useContext)(s.n),
     h = (0, r.useId)();
    return (
     d && (m = m.trim()),
     (0, a.jsx)(l.y$, {
      theme: c,
      code: m,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: l, getLineProps: r, getTokenProps: s } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(t.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: o, children: l.map((e, o) => (0, a.jsxs)('span', { ...r({ line: e }), children: [n && (0, a.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, o) => {
   o.d(n, { X: () => d, n: () => i });
   var t = o(69244),
    l = o(20061),
    r = o(16167),
    s = o(4814),
    c = o(75271),
    a = o(52676);
   const i = (0, c.createContext)({}),
    d = (e) => {
     let { title: n, appearance: o, description: c, children: d, figure: m } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = m ? 'figure' : 'div',
      h = m ? 'figcaption' : 'div';
     return (0, a.jsxs)(p, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(r.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(r.nv, { children: n })] }), c] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(i.Provider, { value: { title: n, type: u[o] }, children: d }) })] });
    };
  },
  40139: (e, n, o) => {
   o.d(n, { Z: () => c, a: () => s });
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
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : s(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
