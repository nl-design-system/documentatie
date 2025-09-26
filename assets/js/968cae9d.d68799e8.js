'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [81733],
 {
  5547: (e, n, t) => {
   t.d(n, { ZP: () => s });
   var o = t(52676),
    r = t(40139);
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
  11220: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => v, contentTitle: () => h, default: () => g, frontMatter: () => m, metadata: () => p, toc: () => b });
   var o = t(52676),
    r = t(40139),
    l = t(5547),
    s = t(43599),
    i = t(40761);
   function a(e) {
    const n = { button: 'button', form: 'form', h2: 'h2', label: 'label', option: 'option', select: 'select', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(i.X, { appearance: 'do', title: 'Het formulier wordt verzonden na het kiezen van de submitbutton.', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(n.form, { children: [(0, o.jsx)(n.label, { htmlFor: 'kleur1', children: 'Kies een kleur' }), (0, o.jsxs)(n.select, { id: 'kleur1', children: [(0, o.jsx)(n.option, { name: 'groen', children: 'Groen' }), (0, o.jsx)(n.option, { name: 'blauw', children: 'Blauw' }), (0, o.jsx)(n.option, { name: 'rood', children: 'Rood' })] }), (0, o.jsx)(n.button, { children: 'Verstuur' })] }) }) }) }), '\n', (0, o.jsx)(i.X, { appearance: 'dont', title: 'Het formulier wordt automatisch verzonden na het kiezen van van een kleur.', description: 'In dit voorbeeld ontbreekt de submitbutton en wordt het formulier direct verstuurt na het kiezen van een kleur', children: (0, o.jsx)(s.X, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)(n.form, { children: [(0, o.jsx)(n.label, { htmlFor: 'kleur2', children: 'Kies een kleur' }), (0, o.jsxs)(n.select, { id: 'kleur2', children: [(0, o.jsx)(n.option, { name: 'groen', children: 'Groen' }), (0, o.jsx)(n.option, { name: 'blauw', children: 'Blauw' }), (0, o.jsx)(n.option, { name: 'rood', children: 'Rood' })] })] }) }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, r.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'verstuur-een-formulier-niet-automatisch-na-het-wijzigen-of-invullen-van-een-formulierveld', children: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld' }), '\n', (0, o.jsx)(n.p, { children: 'Verstuur bij voorkeur alleen het formulier wanneer de gebruiker de submitbutton gebruikt, doe dit niet automatisch met een andere aanleiding. Is het echt noodzakelijk om het formulier op een ander moment te versturen, informeer de gebruiker dan duidelijk vooraf.' }), '\n', (0, o.jsx)(n.p, { children: 'Versturen na bijvoorbeeld het kiezen van een optie kan de gebruiker verrassen: wat gebeurt er, ik wilde nog even checken wat ik had ingevuld, heb ik nu het goede gekozen?' }), '\n', (0, o.jsxs)(n.p, { children: ['Let wel: het gaat hier om het daadwerkelijk versturen van het formulier. Dus als de ', (0, o.jsx)(n.strong, { children: 'context' }), ' verandert. Bijvoorbeeld: je gaat naar een bevestigingspagina.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Het updaten van bijvoorbeeld zoekresultaten waarbij alleen de ', (0, o.jsx)(n.strong, { children: 'content' }), ' verandert valt hier niet onder. Bijvoorbeeld: alleen het aantal zoekresultaten verandert, maar je blijft op dezelfde pagina.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Een formulier niet onverwacht versturen is nodig om te voldoen aan het ', (0, o.jsx)(n.a, { href: '/wcag/3.2.2/', children: 'WCAG-succescriterium 3.2.2 Bij Input' }), ' (niveau A).'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   const m = { title: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Verstuur niet automatisch', pagination_label: 'Verstuur niet automatisch', description: 'Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.', slug: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    p = { id: 'richtlijnen/formulieren/button/submit/README', title: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld \xb7 Buttons in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.', source: '@site/docs/richtlijnen/formulieren/button/2-submit/README.mdx', sourceDirName: 'richtlijnen/formulieren/button/2-submit', slug: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', permalink: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/2-submit/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Verstuur een formulier niet automatisch na het wijzigen of invullen van een formulierveld \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Verstuur niet automatisch', pagination_label: 'Verstuur niet automatisch', description: 'Richtlijnen voor niet automatisch versturen na het wijzigen of invullen van een formulierveld.', slug: '/richtlijnen/formulieren/buttons/niet-automatisch-versturen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Toetsenbordbediening van een button', permalink: '/richtlijnen/formulieren/buttons/toetsenbordbediening' }, next: { title: 'Plaatsing button', permalink: '/richtlijnen/formulieren/buttons/plaatsing' } },
    v = {},
    b = [];
   function j(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(l.ZP, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(j, { ...e }) }) : j();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => j });
   var o = t(41179),
    r = t(28439),
    l = t(4814),
    s = t(64642),
    i = t(93872),
    a = t(86017),
    c = t(48231),
    d = t(75119),
    u = t(75271),
    m = t(60027),
    h = t(52676);
   const p = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(r.BB, { className: (0, l.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(r.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   p.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(r.BB, { className: (0, l.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   b.displayName = 'SurfaceContainer';
   const j = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: j = !1, displayCode: g = !0, children: y, container: x = 'document', language: f, designTokens: k } = e;
    const _ = 'function' == typeof y ? y() : y,
     w = 'function' == typeof n ? n() : (0, u.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : m.uS(w || _),
     [z, Z] = (0, u.useState)(N),
     [C, S] = (0, u.useState)(j);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: f, plugins: [s.Z, i.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [N]);
    const B = (0, u.useId)();
    let P = u.Fragment;
    return (
     'paragraph' === x ? (P = p) : 'document' === x ? (P = v) : 'surface' === x && (P = b),
     (0, h.jsxs)('div', {
      className: (0, l.Z)('nlds-canvas'),
      children: [
       _ && (0, h.jsx)('div', { className: (0, l.Z)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, h.jsx)(P, { children: (0, h.jsx)(r.pu, { children: _ }) }) }) }),
       g &&
        (0, h.jsx)('div', {
         className: (0, l.Z)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(r.zx, {
          className: (0, l.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           S(!C);
          },
          'aria-expanded': C,
          'aria-controls': B,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, h.jsxs)('div', {
         className: (0, l.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: B,
         hidden: !C,
         children: [
          (0, h.jsx)(o.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: z, trim: !0 }),
          t &&
           (0, h.jsx)('div', {
            className: (0, l.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(r.zx, {
             className: (0, l.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   t.d(n, { u: () => c });
   var o = t(28439),
    r = t(60648),
    l = t(75271),
    s = t(40761);
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
     u = c;
    const { title: m, type: h } = (0, l.useContext)(s.n),
     p = (0, l.useId)();
    return (
     d && (u = u.trim()),
     (0, a.jsx)(r.y$, {
      theme: i,
      code: u,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: r, getLineProps: l, getTokenProps: s } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, a.jsx)(o.dn, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': p, style: t, children: r.map((e, t) => (0, a.jsxs)('span', { ...l({ line: e }), children: [n && (0, a.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => c });
   var o = t(69244),
    r = t(20061),
    l = t(28439),
    s = t(4814),
    i = t(75271),
    a = t(52676);
   const c = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: i, children: d, figure: u } = e;
     const m = { do: 'Doen', dont: 'Niet doen' },
      h = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div';
     return (0, a.jsxs)(h, { className: (0, s.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, a.jsx)(l.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.nv, { className: (0, s.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, a.jsx)(l.nv, { children: n })] }), i] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: m[t] }, children: d }) })] });
    };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => i, a: () => s });
   var o = t(75271);
   const r = {},
    l = o.createContext(r);
   function s(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), o.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
