'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4206],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => i });
   var t = l(52676),
    o = l(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  67416: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => v, contentTitle: () => m, default: () => b, frontMatter: () => p, metadata: () => h, toc: () => g });
   var t = l(52676),
    o = l(24785),
    s = l(98480),
    i = l(91050);
   function r(e) {
    const n = { input: 'input', label: 'label', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(i.X, { appearance: 'do', title: 'Naast een visuele indicatie ook een foutmelding in tekst tonen.', description: 'In dit voorbeeld staat er een rood randje om het invoerveld heen, plus de foutmelding in tekst.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'passport-validity-1', children: 'Geldig tot' }), (0, t.jsx)(n.p, { id: 'passport-validity-date-1', children: 'Invoerfout: Vul een geldige datum in (bijvoorbeeld 6 januari 2030).' }), (0, t.jsx)(n.input, { id: 'passport-validity-1', 'aria-invalid': 'true', type: 'text', name: 'passport-validity-1', 'aria-describedby': 'description-passport-validity-1' })] }) }) }), '\n', (0, t.jsx)(i.X, { appearance: 'dont', title: 'Alleen een visuele indicatie geven dat er iets fout is gegaan.', description: 'In dit voorbeeld staat er alleen een rood randje om het invoerveld heen.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'passport-validity-2', children: 'Geldig tot' }), (0, t.jsx)(n.input, { id: 'passport-validity-2', 'aria-invalid': 'true', type: 'text', name: 'passport-validity-2' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
   function a(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'schrijf-een-foutmelding-uit-in-tekst', children: 'Schrijf een foutmelding uit in tekst' }), '\n', (0, t.jsx)(n.p, { children: 'Schrijf de foutmelding altijd uit in tekst. Dus niet alleen met een rood randje om het veld heen of met een icoontje van een uitroepteken, maar in duidelijke taal.' }), '\n', (0, t.jsxs)(n.p, { children: ['Je kunt zeker kleur en icoontjes gebruiken, maar niet als ', (0, t.jsx)(n.strong, { children: 'enige' }), ' foutindicatie.'] }), '\n', (0, t.jsx)(n.p, { children: 'Formulierfouten in tekst beschrijven is nodig om te voldoen aan de WCAG-succescriteria:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/1.3.1', children: '1.3.1 Info en relaties' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/3.3.1/', children: '3.3.1 Foutidentificatie' }), ' (niveau A).'] }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   var u = l(55400);
   const p = { title: 'Schrijf een foutmelding uit in tekst \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Fouten beschrijven', pagination_label: 'Fouten beschrijven', description: 'Richtlijnen voor uitschrijven van een foutmelding in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/beschrijven', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    h = { id: 'richtlijnen/formulieren/error/description/README', title: 'Schrijf een foutmelding uit in tekst \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor uitschrijven van een foutmelding in een formulier.', source: '@site/docs/richtlijnen/formulieren/error/2-description/README.mdx', sourceDirName: 'richtlijnen/formulieren/error/2-description', slug: '/richtlijnen/formulieren/foutmeldingen/beschrijven', permalink: '/en/richtlijnen/formulieren/foutmeldingen/beschrijven', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/2-description/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Schrijf een foutmelding uit in tekst \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Fouten beschrijven', pagination_label: 'Fouten beschrijven', description: 'Richtlijnen voor uitschrijven van een foutmelding in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/beschrijven', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Fouten controleren', permalink: '/en/richtlijnen/formulieren/foutmeldingen/controleren' }, next: { title: 'Duidelijke foutmeldingen', permalink: '/en/richtlijnen/formulieren/foutmeldingen/duidelijk' } },
    v = {},
    g = [];
   function _(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(u.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(_, { ...e }) }) : _();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => b });
   var t = l(46506),
    o = l(4814),
    s = l(25585),
    i = l(40282),
    r = l(40678),
    c = l(85722),
    a = l(6374),
    d = l(75271),
    u = l(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = l(41179),
    h = l(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: (0, h.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, h.jsx)(t.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: (0, h.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const _ = (e) => {
    let { children: n } = e;
    return (0, h.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   _.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: b = !1, displayCode: j = !0, children: y, container: f = 'document', language: x, designTokens: k } = e,
     N = 'function' == typeof y ? y() : y,
     w = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : u.uS(w || N),
     [S, F] = (0, d.useState)(Z),
     [C, z] = (0, d.useState)(b);
    (0, d.useEffect)(() => {
     (async () => {
      (S = await a.ZP.format(Z, { parser: x, plugins: [s.Z, i.ZP, r.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), F(S);
     })();
    }, [Z]);
    const P = (0, d.useId)();
    let D = d.Fragment;
    return (
     'paragraph' === f ? (D = v) : 'document' === f ? (D = g) : 'surface' === f && (D = _),
     (0, h.jsxs)('div', {
      className: (0, o.Z)(p['nlds-canvas']),
      children: [
       N && (0, h.jsx)('div', { className: (0, o.Z)(p['nlds-canvas__example']), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, h.jsx)(D, { children: (0, h.jsx)(t.pu, { children: N }) }) }) }),
       j &&
        (0, h.jsx)('div', {
         className: (0, o.Z)(p['nlds-canvas__toolbar']),
         children: (0, h.jsx)(t.zx, {
          className: (0, o.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           z(!C);
          },
          'aria-expanded': C,
          'aria-controls': P,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, h.jsxs)('div', {
         className: (0, o.Z)(p['nlds-canvas__code-block'], !l && p['nlds-canvas__code-block--user-select-none']),
         id: P,
         hidden: !C,
         children: [
          (0, h.jsx)(m.u, { syntax: x, textContent: S, trim: !0 }),
          l &&
           (0, h.jsx)('div', {
            className: (0, o.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, h.jsx)(t.zx, {
             className: (0, o.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(S).catch((e) => console.error('Copy code failed', e));
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
   l.d(n, { u: () => r });
   var t = l(46506),
    o = l(70739);
   l(75271);
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
   function r(e) {
    let { lineNumber: n, syntax: l, textContent: r, trim: c } = e,
     a = r;
    return (
     c && (a = a.trim()),
     (0, i.jsx)(o.y$, {
      theme: s,
      code: a,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: o, getLineProps: s, getTokenProps: r } = e;
       return (0, i.jsx)(t.dn, { style: l, children: o.map((e, l) => (0, i.jsxs)('span', { ...s({ line: e }), children: [n && (0, i.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => a });
   var t = l(77355),
    o = l(67663),
    s = l(46506),
    i = l(4814);
   l(75271);
   const r = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var c = l(52676);
   const a = (e) => {
    let { title: n, appearance: l, description: a, children: d, figure: u } = e;
    const p = 'Doen',
     m = 'Niet doen',
     h = u ? 'figure' : 'div',
     v = u ? 'figcaption' : 'div';
    return (0, c.jsxs)(h, { className: (0, i.Z)(r['nlds-guideline'], r[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(v, { className: (0, i.Z)(r['nlds-guideline__description']), children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, i.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(t.Z, { className: r['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: r['nlds-guideline__title'], children: m })] }), (0, c.jsx)(s.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, i.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(o.Z, { className: r['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: r['nlds-guideline__title'], children: p })] }), (0, c.jsx)(s.nv, { children: n })] }), a] }), (0, c.jsx)('div', { className: (0, i.Z)(r['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => r, a: () => i });
   var t = l(75271);
   const o = {},
    s = t.createContext(o);
   function i(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
