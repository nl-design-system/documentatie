'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [79649],
 {
  49824: (e, n, l) => {
   l.d(n, { ZP: () => r });
   var o = l(52676),
    t = l(87118);
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  96502: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => p, contentTitle: () => h, default: () => j, frontMatter: () => u, metadata: () => b, toc: () => g });
   var o = l(52676),
    t = l(87118),
    a = l(49824),
    r = l(43599),
    s = l(40761);
   function i(e) {
    const n = { div: 'div', h2: 'h2', input: 'input', label: 'label', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(s.X, { appearance: 'do', title: 'Het zichtbare label is de toegankelijke naam.', children: (0, o.jsx)(r.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { htmlFor: 'hond', children: 'Hoe heet je hond' }), (0, o.jsx)(n.input, { type: 'text', id: 'hond', name: 'hond' })] }) }) }), '\n', (0, o.jsx)(s.X, { appearance: 'dont', title: 'Alleen een placeholder gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, o.jsx)(r.X, { language: 'html', children: () => (0, o.jsx)(n.input, { type: 'text', name: 'lievelingskleur', 'aria-label': 'Vul een kleur in', placeholder: 'Wat is je lievelingskleur' }) }) }), '\n', (0, o.jsx)(s.X, { appearance: 'dont', title: 'Alleen losse tekst gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, o.jsx)(r.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.div, { children: 'Zoek' }), (0, o.jsx)(n.input, { type: 'search', name: 'trefwoord', 'aria-label': 'Trefwoord' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'de-zichtbare-naam-moet-overeenkomen-met-de-toegankelijke-naam', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }), '\n', (0, o.jsx)(n.p, { children: 'Gebruikers van voice recognition software kunnen een formulierveld focus geven door de naam uit te spreken.' }), '\n', (0, o.jsxs)(n.p, { children: ['Als de toegankelijke naam niet begint met de zichtbare naam werkt dit niet goed. Dit kan gebeuren bij het verkeerd gebruik van het attribute ', (0, o.jsx)(n.code, { children: 'aria-label' }), '. Met ', (0, o.jsx)(n.code, { children: 'aria-label' }), ' kan een formulierveld ook een toegankelijke naam worden gegeven, onzichtbaar voor de ziende gebruiker.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Zorgen dat de zichtbare naam en toegankelijke naam overeenkomen, is nodig om te voldoen ', (0, o.jsx)(n.a, { href: '/wcag/2.5.3', children: 'WCAG-succescriterium 2.5.3: Label in naam' }), ' (niveau A).'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'De zichtbare naam moet overeenkomen met de toegankelijke naam \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Zichtbare naam label', pagination_label: 'Zichtbare naam label', description: 'Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/zichtbare-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    b = { id: 'richtlijnen/formulieren/label/visible-acccessible-name/README', title: 'De zichtbare naam moet overeenkomen met de toegankelijke naam \xb7 Labels in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.', source: '@site/docs/richtlijnen/formulieren/label/2-visible-acccessible-name/README.mdx', sourceDirName: 'richtlijnen/formulieren/label/2-visible-acccessible-name', slug: '/richtlijnen/formulieren/labels/zichtbare-naam', permalink: '/richtlijnen/formulieren/labels/zichtbare-naam', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/2-visible-acccessible-name/README.mdx', tags: [], version: 'current', frontMatter: { title: 'De zichtbare naam moet overeenkomen met de toegankelijke naam \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Zichtbare naam label', pagination_label: 'Zichtbare naam label', description: 'Richtlijnen voor zichtbare naam gelijk maken aan toegankelijke naam van formuliervelden.', slug: '/richtlijnen/formulieren/labels/zichtbare-naam', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Toegankelijke naam label', permalink: '/richtlijnen/formulieren/labels/toegankelijke-naam' }, next: { title: 'Plaatsing label', permalink: '/richtlijnen/formulieren/labels/plaatsing' } },
    p = {},
    g = [];
   function v(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(a.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v();
   }
  },
  43599: (e, n, l) => {
   l.d(n, { X: () => v });
   var o = l(41179),
    t = l(31916),
    a = l(4814),
    r = l(25585),
    s = l(40282),
    i = l(40678),
    c = l(85722),
    d = l(6374),
    m = l(75271),
    u = l(60027),
    h = l(52676);
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(t.BB, { className: (0, a.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(t.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   b.displayName = 'ParagraphContainer';
   const p = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(t.BB, { className: (0, a.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   p.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   g.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: v = !1, displayCode: j = !0, children: k, container: y = 'document', language: x, designTokens: f } = e;
    const _ = 'function' == typeof k ? k() : k,
     N = 'function' == typeof n ? n() : (0, m.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : u.uS(N || _),
     [w, Z] = (0, m.useState)(z),
     [C, S] = (0, m.useState)(v);
    (0, m.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(z, { parser: x, plugins: [r.Z, s.ZP, i.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [z]);
    const P = (0, m.useId)();
    let D = m.Fragment;
    return (
     'paragraph' === y ? (D = b) : 'document' === y ? (D = p) : 'surface' === y && (D = g),
     (0, h.jsxs)('div', {
      className: (0, a.Z)('nlds-canvas'),
      children: [
       _ && (0, h.jsx)('div', { className: (0, a.Z)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, h.jsx)(D, { children: (0, h.jsx)(t.pu, { children: _ }) }) }) }),
       j &&
        (0, h.jsx)('div', {
         className: (0, a.Z)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(t.zx, {
          className: (0, a.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           S(!C);
          },
          'aria-expanded': C,
          'aria-controls': P,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, h.jsxs)('div', {
         className: (0, a.Z)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
         id: P,
         hidden: !C,
         children: [
          (0, h.jsx)(o.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: w, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, a.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(t.zx, {
             className: (0, a.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(w).catch((e) => console.error('Copy code failed', e));
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
   l.d(n, { u: () => c });
   var o = l(31916),
    t = l(70739),
    a = l(75271),
    r = l(40761);
   const s = {
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
   var i = l(52676);
   function c(e) {
    let { lineNumber: n, syntax: l, textContent: c, trim: d } = e,
     m = c;
    const { title: u, type: h } = (0, a.useContext)(r.n),
     b = (0, a.useId)();
    return (
     d && (m = m.trim()),
     (0, i.jsx)(t.y$, {
      theme: s,
      code: m,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: t, getLineProps: a, getTokenProps: r } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: b, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(o.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': b, style: l, children: t.map((e, l) => (0, i.jsxs)('span', { ...a({ line: e }), children: [n && (0, i.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, l) => {
   l.d(n, { X: () => d, n: () => c });
   var o = l(77355),
    t = l(67663),
    a = l(31916),
    r = l(4814),
    s = l(75271),
    i = l(52676);
   const c = (0, s.createContext)({}),
    d = (e) => {
     let { title: n, appearance: l, description: s, children: d, figure: m } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = m ? 'figure' : 'div',
      b = m ? 'figcaption' : 'div';
     return (0, i.jsxs)(h, { className: (0, r.Z)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(b, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(a.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(a.nv, { children: n })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(a.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, i.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(a.nv, { children: n })] }), s] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: n, type: u[l] }, children: d }) })] });
    };
  },
  87118: (e, n, l) => {
   l.d(n, { Z: () => s, a: () => r });
   var o = l(75271);
   const t = {},
    a = o.createContext(t);
   function r(e) {
    const n = o.useContext(a);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), o.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
