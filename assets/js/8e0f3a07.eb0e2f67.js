'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [50718],
 {
  66968: (e, n, o) => {
   o.d(n, { ZP: () => t });
   var r = o(52676),
    l = o(40139);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  65051: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => b, contentTitle: () => m, default: () => j, frontMatter: () => u, metadata: () => h, toc: () => v });
   var r = o(52676),
    l = o(40139),
    s = o(66968),
    t = o(43599),
    i = o(40761);
   function c(e) {
    const n = { h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(i.X, { appearance: 'do', title: 'Koppel een description aan het formulierveld, met aria-describedby.', children: (0, r.jsx)(t.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }), (0, r.jsx)(n.p, { id: 'description-wachtwoord', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)(n.input, { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord' })] }) }) }), '\n', (0, r.jsx)(i.X, { appearance: 'dont', title: 'Koppeling weglaten.', children: (0, r.jsx)(t.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { htmlFor: 'wachtwoord0', children: 'Nieuw wachtwoord' }), (0, r.jsx)(n.p, { children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)(n.input, { id: 'wachtwoord0', type: 'password', name: 'nieuw-wachtwoord' })] }) }) })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'koppel-een-description-aan-het-formulierveld', children: 'Koppel een description aan het formulierveld' }), '\n', (0, r.jsxs)(n.p, { children: ['Voor gebruikers van ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' is het belangrijk dat de description samen wordt voorgelezen met het formulierveld.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Waarom? Screenreaders, zoals JAWS, schakelen over naar de \u201cformulierenmodus\u201d wanneer ze inhoud binnen een ', (0, r.jsx)(n.code, { children: '<form>' }), ' element verwerken. In deze modus lezen screenreaders alleen de formuliervelden voor, inclusief de daaraan gekoppelde informatie (met bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'aria-describedby' }), '). De niet-gekoppelde informatie wordt dan niet voorgelezen, tenzij de gebruiker er zelf naar zoekt.'] }), '\n', (0, r.jsx)(n.p, { children: 'Meer informatie over de formulierenmodus:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/tutorials/forms/instructions/', children: 'Form Instructions' }), ', Web Accessibility Initiative.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.accessibility-developer-guide.com/knowledge/screen-readers/desktop/browse-focus-modes', children: 'Browse and focus modes' }), ', Accessibility Developer Guide.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: "Door de description aan het formulierveld te koppelen via 'aria'-describedby', wordt het label en de description samen voorgelezen wanneer een screenreadergebruiker het formulierveld focus geeft." }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op:' }), ' De gebruikte ID\u2019s moeten uniek zijn voor de pagina, anders worden de verkeerde descriptions bij de velden voorgelezen.'] }), '\n', (0, r.jsx)(n.p, { children: 'Opzet in de HTML:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Geef description een ID: ', (0, r.jsx)(n.code, { children: 'id="description-name"' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Verwijs in het formulierveld naar dat ID: ', (0, r.jsx)(n.code, { children: 'aria-describedby="description-name"' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<label for="name">Naam</label>\n<p id="description-name">Vul je voornaam en achternaam in.</p>\n<input id="name" aria-describedby="description-name" autocomplete="name" />\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Lees ook: ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby', children: 'MDN over aria-describedby' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Koppel een description aan het formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Koppel description', pagination_label: 'Koppel description', description: 'Richtlijnen voor koppelen van een description aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/koppelen', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    h = { id: 'richtlijnen/formulieren/description/associated/README', title: 'Koppel een description aan het formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor koppelen van een description aan een formulierveld.', source: '@site/docs/richtlijnen/formulieren/description/1-associated/README.mdx', sourceDirName: 'richtlijnen/formulieren/description/1-associated', slug: '/richtlijnen/formulieren/descriptions/koppelen', permalink: '/richtlijnen/formulieren/descriptions/koppelen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/1-associated/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Koppel een description aan het formulierveld \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Koppel description', pagination_label: 'Koppel description', description: 'Richtlijnen voor koppelen van een description aan een formulierveld.', slug: '/richtlijnen/formulieren/descriptions/koppelen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Descriptions in een formulier', permalink: '/richtlijnen/formulieren/descriptions/' }, next: { title: 'Inhoud description', permalink: '/richtlijnen/formulieren/descriptions/inhoud' } },
    b = {},
    v = [];
   function y(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(a, {}), '\n', (0, r.jsx)(s.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y();
   }
  },
  43599: (e, n, o) => {
   o.d(n, { X: () => y });
   var r = o(41179),
    l = o(16167),
    s = o(4814),
    t = o(64642),
    i = o(93872),
    c = o(86017),
    a = o(48231),
    d = o(75119),
    p = o(75271),
    u = o(60027),
    m = o(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(l.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(l.BB, { className: (0, s.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   b.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   v.displayName = 'SurfaceContainer';
   const y = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: y = !1, displayCode: j = !0, children: x, container: g = 'document', language: f, designTokens: k } = e;
    const _ = 'function' == typeof x ? x() : x,
     w = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : u.uS(w || _),
     [z, Z] = (0, p.useState)(N),
     [C, D] = (0, p.useState)(y);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: f, plugins: [t.Z, i.ZP, c.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [N]);
    const S = (0, p.useId)();
    let F = p.Fragment;
    return (
     'paragraph' === g ? (F = h) : 'document' === g ? (F = b) : 'surface' === g && (F = v),
     (0, m.jsxs)('div', {
      className: (0, s.Z)('nlds-canvas'),
      children: [
       _ && (0, m.jsx)('div', { className: (0, s.Z)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(F, { children: (0, m.jsx)(l.pu, { children: _ }) }) }) }),
       j &&
        (0, m.jsx)('div', {
         className: (0, s.Z)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(l.zx, {
          className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           D(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, m.jsxs)('div', {
         className: (0, s.Z)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, m.jsx)(r.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: z, trim: !0 }),
          o &&
           (0, m.jsx)('div', {
            className: (0, s.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(l.zx, {
             className: (0, s.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, o) => {
   o.d(n, { u: () => a });
   var r = o(16167),
    l = o(60648),
    s = o(75271),
    t = o(40761);
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
   var c = o(52676);
   function a(e) {
    let { lineNumber: n, syntax: o, textContent: a, trim: d } = e,
     p = a;
    const { title: u, type: m } = (0, s.useContext)(t.n),
     h = (0, s.useId)();
    return (
     d && (p = p.trim()),
     (0, c.jsx)(l.y$, {
      theme: i,
      code: p,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: l, getLineProps: s, getTokenProps: t } = e;
       return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, c.jsx)(r.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: o, children: l.map((e, o) => (0, c.jsxs)('span', { ...s({ line: e }), children: [n && (0, c.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, c.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, o) => {
   o.d(n, { X: () => d, n: () => a });
   var r = o(69244),
    l = o(20061),
    s = o(16167),
    t = o(4814),
    i = o(75271),
    c = o(52676);
   const a = (0, i.createContext)({}),
    d = (e) => {
     let { title: n, appearance: o, description: i, children: d, figure: p } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      h = p ? 'figcaption' : 'div';
     return (0, c.jsxs)(m, { className: (0, t.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, t.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, c.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(s.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, t.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, c.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(s.nv, { children: n })] }), i] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(a.Provider, { value: { title: n, type: u[o] }, children: d }) })] });
    };
  },
  40139: (e, n, o) => {
   o.d(n, { Z: () => i, a: () => t });
   var r = o(75271);
   const l = {},
    s = r.createContext(l);
   function t(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : t(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
