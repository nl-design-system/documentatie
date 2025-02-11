'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [51192],
 {
  49824: (e, l, n) => {
   n.d(l, { ZP: () => a });
   var r = n(52676),
    o = n(87118);
   function t(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, r.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: l } = { ...(0, o.a)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  45610: (e, l, n) => {
   n.r(l), n.d(l, { assets: () => b, contentTitle: () => h, default: () => j, frontMatter: () => p, metadata: () => m, toc: () => v });
   var r = n(52676),
    o = n(87118),
    t = n(49824),
    a = n(43599),
    s = n(40761);
   function i(e) {
    const l = { h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(l.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(s.X, { appearance: 'do', title: 'Het label altijd tonen en een description gebruiken als aanvullende informatie.', children: (0, r.jsx)(a.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.label, { htmlFor: 'lievelingskleur1', children: 'Wat is je lievelingskleur?' }), (0, r.jsx)(l.p, { id: 'description-kleur1', children: 'Vul de naam van een kleur in.' }), (0, r.jsx)(l.input, { 'aria-describedby': 'description-kleur1', id: 'lievelingskleur1', name: 'lievelingskleur', type: 'text' })] }) }) }), '\n', (0, r.jsx)(s.X, { appearance: 'do', title: 'Het label altijd tonen en een placeholder als korte hint gebruiken.', children: (0, r.jsx)(a.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.label, { htmlFor: 'lievelingskleur2', children: 'Wat is je lievelingskleur?' }), (0, r.jsx)(l.input, { id: 'lievelingskleur2', type: 'text', name: 'lievelingskleur', placeholder: 'Vul een kleurnaam in' })] }) }) }), '\n', (0, r.jsx)(s.X, { appearance: 'dont', title: 'Het label onzichtbaar maken.', children: (0, r.jsx)(a.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.label, { className: 'sr-only', htmlFor: 'lievelingskleur3', children: 'Wat is je lievelingskleur?' }), (0, r.jsx)(l.input, { id: 'lievelingskleur3', name: 'lievelingskleur', placeholder: 'Wat is je lievelingskleur?', type: 'text' })] }) }) }), '\n', (0, r.jsx)(s.X, { appearance: 'dont', title: 'Placeholdertekst heel lang maken zodat een deel uit het formulierveld valt en daardoor onleesbaar wordt. Gebruik in dat geval een description.', children: (0, r.jsx)(a.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.label, { htmlFor: 'lievelingskleur4', children: 'Wat is je lievelingskleur?' }), (0, r.jsx)(l.input, { id: 'lievelingskleur4', name: 'lievelingskleur', placeholder: 'Geef is je lievelingskleur? Bijvoorbeeld rood, wit, geel of blauw.', type: 'text' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: l } = { ...(0, o.a)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
   function d(e) {
    const l = { a: 'a', h1: 'h1', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.h1, { id: 'een-placeholder-is-geen-vervanger-van-een-label', children: 'Een placeholder is geen vervanger van een label' }), '\n', (0, r.jsx)(l.p, { children: 'De gebruiker moet altijd een zichtbare indicatie hebben over wat in te vullen. Ook tijdens het typen, wanneer de placeholder verdwijnt of als de informatie al automatisch is ingevuld.' }), '\n', (0, r.jsx)(l.p, { children: 'Gebruik dus niet enkel de placeholder om aan te geven wat een gebruiker moet invullen.' }), '\n', (0, r.jsx)(l.p, { children: 'Een ander probleem met placeholders is dat bij inzoomen lange tekst te groot kan worden voor het formulierveld en daardoor afhakt en onleesbaar wordt.' }), '\n', (0, r.jsxs)(l.p, { children: ['Het permanent goed zichtbaar tonen van het label is nodig om te voldoen aan het ', (0, r.jsx)(l.a, { href: '/wcag/3.3.2', children: 'WCAG-succescriterium 3.3.2 Labels of instructies' }), ' (niveau A). Meer hierover bij de richtlijn ', (0, r.jsx)(l.a, { href: '/richtlijnen/formulieren/placeholders/niet-als-label', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: l } = { ...(0, o.a)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   const p = { title: 'Een placeholder is geen vervanger van een label \xb7 Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder is geen label', pagination_label: 'Placeholder is geen label', description: 'Richtlijnen over placeholder niet gebruiken als vervanger van een label.', slug: '/richtlijnen/formulieren/placeholders/niet-als-label', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    m = { id: 'richtlijnen/formulieren/placeholder/label/README', title: 'Een placeholder is geen vervanger van een label \xb7 Placeholders in een formulier \xb7 Richtlijnen', description: 'Richtlijnen over placeholder niet gebruiken als vervanger van een label.', source: '@site/docs/richtlijnen/formulieren/placeholder/1-label/README.mdx', sourceDirName: 'richtlijnen/formulieren/placeholder/1-label', slug: '/richtlijnen/formulieren/placeholders/niet-als-label', permalink: '/richtlijnen/formulieren/placeholders/niet-als-label', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/1-label/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Een placeholder is geen vervanger van een label \xb7 Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Placeholder is geen label', pagination_label: 'Placeholder is geen label', description: 'Richtlijnen over placeholder niet gebruiken als vervanger van een label.', slug: '/richtlijnen/formulieren/placeholders/niet-als-label', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Placeholders in een formulier', permalink: '/richtlijnen/formulieren/placeholders/' }, next: { title: 'Placeholder bij zoekfunctie', permalink: '/richtlijnen/formulieren/placeholders/zoekfunctie' } },
    b = {},
    v = [];
   function g(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(c, {}), '\n', (0, r.jsx)(t.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: l } = { ...(0, o.a)(), ...e.components };
    return l ? (0, r.jsx)(l, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g();
   }
  },
  43599: (e, l, n) => {
   n.d(l, { X: () => g });
   var r = n(41179),
    o = n(31916),
    t = n(4814),
    a = n(25585),
    s = n(40282),
    i = n(40678),
    c = n(85722),
    d = n(6374),
    u = n(75271),
    p = n(60027),
    h = n(52676);
   const m = (e) => {
    let { children: l } = e;
    return (0, h.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(o.nv, { className: 'nlds-canvas__example-paragraph', children: l }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const b = (e) => {
    let { children: l } = e;
    return (0, h.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(o.BB, { className: (0, t.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: l }) });
   };
   b.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: l } = e;
    return (0, h.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: l });
   };
   v.displayName = 'SurfaceContainer';
   const g = (e) => {
    let { code: l, copy: n = !0, defaultExpandedCode: g = !1, displayCode: j = !0, children: y, container: x = 'document', language: k, designTokens: f } = e;
    const _ = 'function' == typeof y ? y() : y,
     N = 'function' == typeof l ? l() : (0, u.isValidElement)(l) ? l : void 0,
     w = 'string' == typeof l ? l : p.uS(N || _),
     [P, Z] = (0, u.useState)(w),
     [C, F] = (0, u.useState)(g);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(w, { parser: k, plugins: [a.Z, s.ZP, i.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [w]);
    const z = (0, u.useId)();
    let E = u.Fragment;
    return (
     'paragraph' === x ? (E = m) : 'document' === x ? (E = b) : 'surface' === x && (E = v),
     (0, h.jsxs)('div', {
      className: (0, t.Z)('nlds-canvas'),
      children: [
       _ && (0, h.jsx)('div', { className: (0, t.Z)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, h.jsx)(E, { children: (0, h.jsx)(o.pu, { children: _ }) }) }) }),
       j &&
        (0, h.jsx)('div', {
         className: (0, t.Z)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(o.zx, {
          className: (0, t.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           F(!C);
          },
          'aria-expanded': C,
          'aria-controls': z,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, h.jsxs)('div', {
         className: (0, t.Z)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: z,
         hidden: !C,
         children: [
          (0, h.jsx)(r.u, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: P, trim: !0 }),
          n &&
           (0, h.jsx)('div', {
            className: (0, t.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(o.zx, {
             className: (0, t.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(P).catch((e) => console.error('Copy code failed', e));
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
  41179: (e, l, n) => {
   n.d(l, { u: () => c });
   var r = n(31916),
    o = n(70739),
    t = n(75271),
    a = n(40761);
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
   var i = n(52676);
   function c(e) {
    let { lineNumber: l, syntax: n, textContent: c, trim: d } = e,
     u = c;
    const { title: p, type: h } = (0, t.useContext)(a.n),
     m = (0, t.useId)();
    return (
     d && (u = u.trim()),
     (0, i.jsx)(o.y$, {
      theme: s,
      code: u,
      language: n || '',
      children: (e) => {
       let { style: n, tokens: o, getLineProps: t, getTokenProps: a } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, i.jsx)(r.dn, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: o.map((e, n) => (0, i.jsxs)('span', { ...t({ line: e }), children: [l && (0, i.jsx)('span', { children: n + 1 }), e.map((e, l) => (0, i.jsx)('span', { ...a({ token: e }) }, l)), '\n'] }, n)) })] });
      },
     })
    );
   }
  },
  40761: (e, l, n) => {
   n.d(l, { X: () => d, n: () => c });
   var r = n(77355),
    o = n(67663),
    t = n(31916),
    a = n(4814),
    s = n(75271),
    i = n(52676);
   const c = (0, s.createContext)({}),
    d = (e) => {
     let { title: l, appearance: n, description: s, children: d, figure: u } = e;
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = u ? 'figure' : 'div',
      m = u ? 'figcaption' : 'div';
     return (0, i.jsxs)(h, { className: (0, a.Z)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof l ? l?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.nv, { className: (0, a.Z)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, i.jsx)(t.nv, { children: l })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(t.nv, { className: (0, a.Z)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, i.jsx)(t.nv, { children: l })] }), s] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: l, type: p[n] }, children: d }) })] });
    };
  },
  87118: (e, l, n) => {
   n.d(l, { Z: () => s, a: () => a });
   var r = n(75271);
   const o = {},
    t = r.createContext(o);
   function a(e) {
    const l = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function s(e) {
    let l;
    return (l = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), r.createElement(t.Provider, { value: l }, e.children);
   }
  },
 },
]);
