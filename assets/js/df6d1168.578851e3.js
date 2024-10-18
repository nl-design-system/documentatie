'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [46756],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => a });
   var o = l(52676),
    s = l(24785);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(t, { ...e }) }) : t(e);
   }
  },
  58097: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => v, contentTitle: () => h, default: () => _, frontMatter: () => p, metadata: () => m, toc: () => g });
   var o = l(52676),
    s = l(24785),
    t = l(98480),
    a = l(91050);
   function r(e) {
    const n = { input: 'input', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(a.X, { appearance: 'do', title: 'Geef invoerveld een duidelijke visuele focusstijl.', description: (0, o.jsx)(o.Fragment, { children: 'In dit voorbeeld is de focus herkenbaar aan een stippellijn rond het invoerveld. Klik in het veld of tab ernaar met het toetsenbord om het effect te zien.' }), children: (0, o.jsx)(t.X, { language: 'html', children: () => (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(n.input, { type: 'text' }) }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
   function i(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'maak-toetsenbord-focus-goed-zichtbaar', children: 'Maak toetsenbord focus goed zichtbaar' }), '\n', (0, o.jsx)(n.p, { children: 'Voor gebruikers van een toetsenbord of van spraakherkenning moet duidelijk zijn welk formulierveld de focus heeft. Maak de focusstijl makkelijk te herkennen en geef het voldoende kleurcontrast. Dan kunnen ook slechtziende of kleurenblinde bezoekers het element met focus goed herkennen.' }), '\n', (0, o.jsxs)(n.p, { children: ['Dit doe je door een minimale dikte van ', (0, o.jsx)(n.strong, { children: '2 pixels' }), ' en een ', (0, o.jsx)(n.strong, { children: 'minimaal contrast van 3:1' }), ' ten opzichte van aangrenzende kleuren. En daarmee bedoelen we de kleur van de component dat focus heeft, maar ook de achtergrond waar de component \u2018bovenop\u2019 ligt.'] }), '\n', (0, o.jsx)(n.p, { children: 'Een button of link komt namelijk misschien het meest voor op een witte achtergrond, maar houdt ook het scenario\u2019s in gedachten waarbij de link of button op een getinte achtergrond staat zoals bijvoorbeeld een footer.' }), '\n', (0, o.jsxs)(n.p, { children: ['Zorg er ook voor dat de focusring heeft een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de ', (0, o.jsx)(n.strong, { children: 'gefocuste' }), ' en ', (0, o.jsx)(n.strong, { children: 'niet-gefocuste' }), ' staat.'] }), '\n', (0, o.jsx)(n.p, { children: 'Goed zichtbare focusstijlen zijn nodig om te voldoen het aan de WCAG-succescriteria:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.4.11', children: '1.4.11 Contrast van niet-tekstuele content' }), ' (niveau AA).'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/2.4.7/', children: '2.4.7 Focus zichtbaar' }), ' (niveau AA).'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/2.4.13', children: '2.4.13 Focusweergave' }), ' (niveau AAA)'] }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
   var u = l(55400);
   const p = { title: 'Maak toetsenbord focus goed zichtbaar | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Focus goed zichtbaar', pagination_label: 'Focus goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.', slug: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    m = { id: 'richtlijnen/formulieren/visual-design/focus-visible/README', title: 'Maak toetsenbord focus goed zichtbaar | Visueel ontwerp van een formulier | Richtlijnen', description: 'Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.', source: '@site/docs/richtlijnen/formulieren/visual-design/4-focus-visible/README.mdx', sourceDirName: 'richtlijnen/formulieren/visual-design/4-focus-visible', slug: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/4-focus-visible/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Maak toetsenbord focus goed zichtbaar | Visueel ontwerp van een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Focus goed zichtbaar', pagination_label: 'Focus goed zichtbaar', description: 'Richtlijnen om met contrast duidelijk aan te geven welke formulierveld focus heeft.', slug: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Placeholder goed zichtbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/placeholder-goed-zichtbaar' }, next: { title: 'Invoerveld goed aanklikbaar', permalink: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar' } },
    v = {},
    g = [];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(u.ZP, {})] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => _ });
   var o = l(46506),
    s = l(4814),
    t = l(25585),
    a = l(40282),
    r = l(40678),
    c = l(85722),
    i = l(6374),
    d = l(75271),
    u = l(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var h = l(41179),
    m = l(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, m.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, m.jsx)(o.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: (0, m.jsx)(o.BB, { className: (0, s.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(o.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   b.displayName = 'SurfaceContainer';
   const _ = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: _ = !1, displayCode: f = !0, children: j, container: y = 'document', language: x, designTokens: k } = e,
     w = 'function' == typeof j ? j() : j,
     z = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : u.uS(z || w),
     [Z, C] = (0, d.useState)(N),
     [F, S] = (0, d.useState)(_);
    (0, d.useEffect)(() => {
     (async () => {
      (Z = await i.ZP.format(N, { parser: x, plugins: [t.Z, a.ZP, r.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(Z);
     })();
    }, [N]);
    const A = (0, d.useId)();
    let E = d.Fragment;
    return (
     'paragraph' === y ? (E = v) : 'document' === y ? (E = g) : 'surface' === y && (E = b),
     (0, m.jsxs)('div', {
      className: (0, s.Z)(p['nlds-canvas']),
      children: [
       w && (0, m.jsx)('div', { className: (0, s.Z)(p['nlds-canvas__example']), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(E, { children: (0, m.jsx)(o.pu, { children: w }) }) }) }),
       f &&
        (0, m.jsx)('div', {
         className: (0, s.Z)(p['nlds-canvas__toolbar']),
         children: (0, m.jsx)(o.zx, {
          className: (0, s.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           S(!F);
          },
          'aria-expanded': F,
          'aria-controls': A,
          children: F ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       f &&
        (0, m.jsxs)('div', {
         className: (0, s.Z)(p['nlds-canvas__code-block'], !l && p['nlds-canvas__code-block--user-select-none']),
         id: A,
         hidden: !F,
         children: [
          (0, m.jsx)(h.u, { syntax: x, textContent: Z, trim: !0 }),
          l &&
           (0, m.jsx)('div', {
            className: (0, s.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, m.jsx)(o.zx, {
             className: (0, s.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
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
  41179: (e, n, l) => {
   l.d(n, { u: () => r });
   var o = l(46506),
    s = l(70739);
   l(75271);
   const t = {
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
   var a = l(52676);
   function r(e) {
    let { lineNumber: n, syntax: l, textContent: r, trim: c } = e,
     i = r;
    return (
     c && (i = i.trim()),
     (0, a.jsx)(s.y$, {
      theme: t,
      code: i,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: s, getLineProps: t, getTokenProps: r } = e;
       return (0, a.jsx)(o.dn, { style: l, children: s.map((e, l) => (0, a.jsxs)('span', { ...t({ line: e }), children: [n && (0, a.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { X: () => i });
   var o = l(77355),
    s = l(67663),
    t = l(46506),
    a = l(4814);
   l(75271);
   const r = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var c = l(52676);
   const i = (e) => {
    let { title: n, appearance: l, description: i, children: d, figure: u } = e;
    const p = 'Doen',
     h = 'Niet doen',
     m = u ? 'figure' : 'div',
     v = u ? 'figcaption' : 'div';
    return (0, c.jsxs)(m, { className: (0, a.Z)(r['nlds-guideline'], r[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(v, { className: (0, a.Z)(r['nlds-guideline__description']), children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.nv, { className: (0, a.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(o.Z, { className: r['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: r['nlds-guideline__title'], children: h })] }), (0, c.jsx)(t.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.nv, { className: (0, a.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(s.Z, { className: r['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: r['nlds-guideline__title'], children: p })] }), (0, c.jsx)(t.nv, { children: n })] }), i] }), (0, c.jsx)('div', { className: (0, a.Z)(r['nlds-guideline__example']), children: d })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => r, a: () => a });
   var o = l(75271);
   const s = {},
    t = o.createContext(s);
   function a(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), o.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
