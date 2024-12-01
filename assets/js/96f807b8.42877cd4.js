'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [84367],
 {
  49824: (e, l, n) => {
   n.d(l, { ZP: () => a });
   var o = n(52676),
    t = n(87118);
   function r(e) {
    const l = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(l.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(l.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(l.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(l.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: l } = { ...(0, t.a)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  40616: (e, l, n) => {
   n.r(l), n.d(l, { assets: () => m, contentTitle: () => b, default: () => j, frontMatter: () => u, metadata: () => p, toc: () => v });
   var o = n(52676),
    t = n(87118),
    r = n(49824),
    a = n(43599),
    s = n(40761);
   function i(e) {
    const l = { input: 'input', label: 'label', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(s.X, { appearance: 'do', title: 'Het label blijft zichtbaar, ook als de gebruiker gaat invullen.', children: (0, o.jsx)(a.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.label, { htmlFor: 'dier1', children: 'Wat is je lievelingsdier?' }), (0, o.jsx)(l.input, { type: 'text', id: 'dier1', name: 'lievelingsdier', placeholder: 'Bijvoorbeeld cavia' })] }) }) }), '\n', (0, o.jsx)(s.X, { appearance: 'dont', title: 'Alleen een placeholder gebruiken als zichtbaar label.', children: (0, o.jsx)(a.X, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.label, { htmlFor: 'dier2', className: 'visually-hidden', children: 'Wat is je lievelingsdier?' }), (0, o.jsx)(l.input, { type: 'text', id: 'dier2', name: 'lievelingsdier', placeholder: 'Wat is je lievelingsdier?' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: l } = { ...(0, t.a)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   function d(e) {
    const l = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, t.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(l.h1, { id: 'zorg-ervoor-dat-het-label-altijd-zichtbaar-is', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '\n', (0, o.jsx)(l.p, { children: 'Waarom? Als het label verdwijnt bij het typen kan er verwarring ontstaan: wat moet je ook alweer invullen? Daarom is een placeholder geen goede vervanging van het label.' }), '\n', (0, o.jsxs)(l.p, { children: ['De placeholder kan ook voor verwarring zorgen bij gebruikers. Is het al veld ingevuld? Zie het onderzoek ', (0, o.jsx)(l.a, { href: 'https://www.nngroup.com/articles/form-design-placeholders/', children: (0, o.jsx)('span', { lang: 'en', children: 'Placeholders in Form Fields Are Harmful' }) }), ' van de Nielsen Norman Group.'] }), '\n', (0, o.jsxs)(l.p, { children: ['Een label vertelt ', (0, o.jsx)(l.strong, { children: 'wat' }), ' je moet invullen en een placeholder ', (0, o.jsx)(l.strong, { children: 'hoe' }), ' je een formulierveld moet invullen. Voor een e-mailveld kan het label bijvoorbeeld "Jouw e-mailadres" zijn en de placeholder "', (0, o.jsx)(l.a, { href: 'mailto:naam@voorbeeld.com', children: 'naam@voorbeeld.com' }), '".'] }), '\n', (0, o.jsxs)(l.p, { children: ['De ', (0, o.jsx)(l.strong, { children: 'hoe' }), ' informatie kan ook in een description worden opgenomen, dan blijft deze informatie ook zichtbaar tijdens het invullen.'] }), '\n', (0, o.jsx)(l.p, { children: 'Een andere reden om een label niet te verbergen is om beter te kunnen controleren of alles goed is ingevuld met autocomplete.' }), '\n', (0, o.jsx)(l.p, { children: 'Namen, adressen en telefoonnummers kunnen automatisch vooraf worden ingevuld door de browser. Wanneer het label verborgen is, moet de gebruiker controleren of elke waarde juist is ingevuld bij het goede formulierveld. Dat is veel gemakkelijker, als het label altijd zichtbaar is.' })] });
   }
   function h(e = {}) {
    const { wrapper: l } = { ...(0, t.a)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Zorg ervoor dat het label altijd zichtbaar is \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Label zichtbaar', pagination_label: 'Label zichtbaar', description: 'Richtlijnen voor zichtbaarheid label van een formulierveld.', slug: '/richtlijnen/formulieren/labels/altijd-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    p = { id: 'richtlijnen/formulieren/label/always-visible/README', title: 'Zorg ervoor dat het label altijd zichtbaar is \xb7 Labels in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor zichtbaarheid label van een formulierveld.', source: '@site/docs/richtlijnen/formulieren/label/4-always-visible/README.mdx', sourceDirName: 'richtlijnen/formulieren/label/4-always-visible', slug: '/richtlijnen/formulieren/labels/altijd-zichtbaar', permalink: '/richtlijnen/formulieren/labels/altijd-zichtbaar', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/label/4-always-visible/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zorg ervoor dat het label altijd zichtbaar is \xb7 Labels in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Label zichtbaar', pagination_label: 'Label zichtbaar', description: 'Richtlijnen voor zichtbaarheid label van een formulierveld.', slug: '/richtlijnen/formulieren/labels/altijd-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Plaatsing label', permalink: '/richtlijnen/formulieren/labels/plaatsing' }, next: { title: 'Label bevat alleen tekst', permalink: '/richtlijnen/formulieren/labels/alleen-tekst' } },
    m = {},
    v = [];
   function g(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(r.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: l } = { ...(0, t.a)(), ...e.components };
    return l ? (0, o.jsx)(l, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g();
   }
  },
  43599: (e, l, n) => {
   n.d(l, { X: () => g });
   var o = n(41179),
    t = n(31916),
    r = n(4814),
    a = n(25585),
    s = n(40282),
    i = n(40678),
    c = n(85722),
    d = n(6374),
    h = n(75271),
    u = n(60027),
    b = n(52676);
   const p = (e) => {
    let { children: l } = e;
    return (0, b.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(t.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(t.nv, { className: 'nlds-canvas__example-paragraph', children: l }) }) });
   };
   p.displayName = 'ParagraphContainer';
   const m = (e) => {
    let { children: l } = e;
    return (0, b.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(t.BB, { className: (0, r.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: l }) });
   };
   m.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: l } = e;
    return (0, b.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: l });
   };
   v.displayName = 'SurfaceContainer';
   const g = (e) => {
    let { code: l, copy: n = !0, defaultExpandedCode: g = !1, displayCode: j = !0, children: y, container: x = 'document', language: f, designTokens: k } = e;
    const _ = 'function' == typeof y ? y() : y,
     w = 'function' == typeof l ? l() : (0, h.isValidElement)(l) ? l : void 0,
     N = 'string' == typeof l ? l : u.uS(w || _),
     [z, Z] = (0, h.useState)(N),
     [C, F] = (0, h.useState)(g);
    (0, h.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: f, plugins: [a.Z, s.ZP, i.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [N]);
    const P = (0, h.useId)();
    let S = h.Fragment;
    return (
     'paragraph' === x ? (S = p) : 'document' === x ? (S = m) : 'surface' === x && (S = v),
     (0, b.jsxs)('div', {
      className: (0, r.Z)('nlds-canvas'),
      children: [
       _ && (0, b.jsx)('div', { className: (0, r.Z)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, b.jsx)(S, { children: (0, b.jsx)(t.pu, { children: _ }) }) }) }),
       j &&
        (0, b.jsx)('div', {
         className: (0, r.Z)('nlds-canvas__toolbar'),
         children: (0, b.jsx)(t.zx, {
          className: (0, r.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           F(!C);
          },
          'aria-expanded': C,
          'aria-controls': P,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, b.jsxs)('div', {
         className: (0, r.Z)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: P,
         hidden: !C,
         children: [
          (0, b.jsx)(o.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: z, trim: !0 }),
          n &&
           (0, b.jsx)('div', {
            className: (0, r.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, b.jsx)(t.zx, {
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
  41179: (e, l, n) => {
   n.d(l, { u: () => c });
   var o = n(31916),
    t = n(70739),
    r = n(75271),
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
     h = c;
    const { title: u, type: b } = (0, r.useContext)(a.n),
     p = (0, r.useId)();
    return (
     d && (h = h.trim()),
     (0, i.jsx)(t.y$, {
      theme: s,
      code: h,
      language: n || '',
      children: (e) => {
       let { style: n, tokens: t, getLineProps: r, getTokenProps: a } = e;
       return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', b ? `\u201c${b}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(o.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': p, style: n, children: t.map((e, n) => (0, i.jsxs)('span', { ...r({ line: e }), children: [l && (0, i.jsx)('span', { children: n + 1 }), e.map((e, l) => (0, i.jsx)('span', { ...a({ token: e }) }, l)), '\n'] }, n)) })] });
      },
     })
    );
   }
  },
  40761: (e, l, n) => {
   n.d(l, { X: () => d, n: () => c });
   var o = n(77355),
    t = n(67663),
    r = n(31916),
    a = n(4814),
    s = n(75271),
    i = n(52676);
   const c = (0, s.createContext)({}),
    d = (e) => {
     let { title: l, appearance: n, description: s, children: d, figure: h } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      b = h ? 'figure' : 'div',
      p = h ? 'figcaption' : 'div';
     return (0, i.jsxs)(b, { className: (0, a.Z)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof l ? l?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, a.Z)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, i.jsx)(r.nv, { children: l })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.nv, { className: (0, a.Z)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, i.jsx)(r.nv, { children: l })] }), s] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: l, type: u[n] }, children: d }) })] });
    };
  },
  87118: (e, l, n) => {
   n.d(l, { Z: () => s, a: () => a });
   var o = n(75271);
   const t = {},
    r = o.createContext(t);
   function a(e) {
    const l = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(l) : { ...l, ...e };
     },
     [l, e],
    );
   }
   function s(e) {
    let l;
    return (l = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), o.createElement(r.Provider, { value: l }, e.children);
   }
  },
 },
]);
