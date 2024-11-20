'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [84756],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => o });
   var t = l(52676),
    i = l(24785);
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  4487: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => h, contentTitle: () => b, default: () => k, frontMatter: () => u, metadata: () => m, toc: () => v });
   var t = l(52676),
    i = l(24785),
    s = l(98480),
    o = l(91050);
   function a(e) {
    const n = { a: 'a', fieldset: 'fieldset', input: 'input', label: 'label', legend: 'legend', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(o.X, { appearance: 'do', title: 'Heel basaal, de link vlak boven het formulierveld plaatsen.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '#', children: 'Privacybeleid gemeente Voorbeeld' }), '.'] }), (0, t.jsx)(n.input, { id: 'pb', type: 'checkbox', name: 'privacybeleid' }), (0, t.jsx)(n.label, { for: 'pb', children: 'Ik ga akkoord met het privacybeleid' })] }) }) }), '\n', (0, t.jsx)(o.X, { appearance: 'do', title: 'Groeperen met een fieldset en de informatie koppelen aan het formulierveld met een aria-describedby.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(n.fieldset, { children: [(0, t.jsx)(n.legend, { children: 'Privacystatement gemeente Voorbeeld' }), (0, t.jsxs)(n.p, { id: 'desc', children: ['Wij hebben jouw toestemming nodig om je e-mailadres op te slaan zodat we je onze nieuwsbrief kunnen sturen. Lees onze ', (0, t.jsx)(n.a, { href: '#', target: '_blank', children: 'privacybeleid (opent in een nieuw venster)' }), '.'] }), (0, t.jsx)(n.input, { type: 'checkbox', 'aria-describedby': 'desc', id: 'pvs' }), (0, t.jsx)(n.label, { for: 'pvs', children: 'Ik ga akkoord met het privacybeleid' })] }) }) }), '\n', (0, t.jsx)(o.X, { appearance: 'dont', title: 'Link in het label plaatsen.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.input, { id: 'privacybeleid', type: 'checkbox', name: 'privacybeleid' }), ' ', (0, t.jsxs)(n.label, { for: 'privacybeleid', children: ['Ik ga akkoord met het ', (0, t.jsx)(n.a, { href: '#', children: 'privacybeleid' })] })] }) }) }), '\n', (0, t.jsx)(o.X, { appearance: 'dont', title: 'Link samen met het invoerveld in een impliciet label plaatsen.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(n.label, { for: 'tac', children: [(0, t.jsx)(n.input, { id: 'tac', type: 'checkbox', name: 'terms-and-conditions' }), 'Ik ga akkoord met het ', (0, t.jsx)(n.a, { href: '#', children: 'privacybeleid' })] }) }) })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', img: 'img', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'zet-geen-link-in-een-label', children: 'Zet geen link in een label' }), '\n', (0, t.jsx)(n.p, { children: 'Een link in een label wordt vaak gebruikt bij het accepteren van bijvoorbeeld het privacybeleid.' }), '\n', (0, t.jsx)(n.p, { children: 'Dit is om twee redenen geen goede constructie:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Een label kan ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns', children: 'geen links of buttons elementen' }), ' bevatten. Lees hierover meer in de richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/alleen-tekst', children: 'Zet alleen tekst in het label' }), '.'] }), '\n', (0, t.jsx)(n.li, { children: 'Screenreaders kunnen struikelen over de combinatie "label en link" en lezen daardoor het label niet goed voor.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld:\nEen checkbox met in het label "Ik ga akkoord met het privacybeleid", en de tekst privacybeleid is ook een link.\nDit is geen goede constructie:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<input id="p" type="checkbox" name="privacybeleid" />\n<label for="p">Ik ga akkoord met het <a href="#">privacybeleid</a></label>\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'VoiceOver in Safari op Mac OS Sonoma 14 leest als label voor: "Ik ga akkoord met het en nog 1 onderdeel", dat onderdeel is de link.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/_img_links-vo-link-in-label.png', alt: 'Screenshot van uitvoer VoiceOver met de tekst: Ik ga akkoord met het en nog 1 onderdeel, dat onderdeel is de link.' }) }), '\n', (0, t.jsx)(n.p, { children: 'Een link buiten het label plaatsen is een aanbevolen werkwijze, vanuit gebruikersvriendelijk voor screenreadergebruikers en om te voldoen aan de HTML-specificaties.' })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   var p = l(55400);
   const u = { title: 'Zet geen link in een label \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen link in label', pagination_label: 'Geen link in label', description: 'Richtlijnen voor link niet in het label plaatsen van een formulierveld.', slug: '/richtlijnen/formulieren/links/niet-in-label', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    m = { id: 'richtlijnen/formulieren/link/not-in-label/README', title: 'Zet geen link in een label \xb7 Links in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor link niet in het label plaatsen van een formulierveld.', source: '@site/docs/richtlijnen/formulieren/link/2-not-in-label/README.mdx', sourceDirName: 'richtlijnen/formulieren/link/2-not-in-label', slug: '/richtlijnen/formulieren/links/niet-in-label', permalink: '/richtlijnen/formulieren/links/niet-in-label', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/2-not-in-label/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zet geen link in een label \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen link in label', pagination_label: 'Geen link in label', description: 'Richtlijnen voor link niet in het label plaatsen van een formulierveld.', slug: '/richtlijnen/formulieren/links/niet-in-label', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Plaatsing link', permalink: '/richtlijnen/formulieren/links/plaatsing' }, next: { title: 'Link in nieuwe tab', permalink: '/richtlijnen/formulieren/links/nieuwe-tab' } },
    h = {},
    v = [];
   function g(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(r, {}), '\n', (0, t.jsx)(p.ZP, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g();
   }
  },
  98480: (e, n, l) => {
   l.d(n, { X: () => k });
   var t = l(46506),
    i = l(4814),
    s = l(25585),
    o = l(40282),
    a = l(40678),
    r = l(85722),
    c = l(6374),
    d = l(75271),
    p = l(60027);
   const u = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var b = l(41179),
    m = l(52676);
   const h = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: u['nlds-canvas__example-surface'], children: (0, m.jsx)(t.BB, { className: (0, i.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: (0, m.jsx)(t.nv, { className: u['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   h.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: u['nlds-canvas__example-surface'], children: (0, m.jsx)(t.BB, { className: (0, i.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: u['nlds-canvas__example-surface'], children: n });
   };
   g.displayName = 'SurfaceContainer';
   const k = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: k = !1, displayCode: _ = !0, children: y, container: x = 'document', language: j, designTokens: f } = e,
     w = 'function' == typeof y ? y() : y,
     N = 'function' == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     Z = 'string' == typeof n ? n : p.uS(N || w),
     [S, C] = (0, d.useState)(Z),
     [z, E] = (0, d.useState)(k);
    (0, d.useEffect)(() => {
     (async () => {
      (S = await c.ZP.format(Z, { parser: j, plugins: [s.Z, o.ZP, a.ZP, r.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(S);
     })();
    }, [Z]);
    const L = (0, d.useId)();
    let P = d.Fragment;
    return (
     'paragraph' === x ? (P = h) : 'document' === x ? (P = v) : 'surface' === x && (P = g),
     (0, m.jsxs)('div', {
      className: (0, i.Z)(u['nlds-canvas']),
      children: [
       w && (0, m.jsx)('div', { className: (0, i.Z)(u['nlds-canvas__example']), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(P, { children: (0, m.jsx)(t.pu, { children: w }) }) }) }),
       _ &&
        (0, m.jsx)('div', {
         className: (0, i.Z)(u['nlds-canvas__toolbar']),
         children: (0, m.jsx)(t.zx, {
          className: (0, i.Z)(u['nlds-canvas__button'], u['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           E(!z);
          },
          'aria-expanded': z,
          'aria-controls': L,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       _ &&
        (0, m.jsxs)('div', {
         className: (0, i.Z)(u['nlds-canvas__code-block'], !l && u['nlds-canvas__code-block--user-select-none']),
         id: L,
         hidden: !z,
         children: [
          (0, m.jsx)(b.u, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: S, trim: !0 }),
          l &&
           (0, m.jsx)('div', {
            className: (0, i.Z)(u['nlds-canvas__toolbar'], u['nlds-canvas__toolbar--copy']),
            children: (0, m.jsx)(t.zx, {
             className: (0, i.Z)(u['nlds-canvas__button'], u['nlds-canvas__copy-button']),
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
   l.d(n, { u: () => c });
   var t = l(46506),
    i = l(70739),
    s = l(75271),
    o = l(91050);
   const a = {
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
   var r = l(52676);
   function c(e) {
    let { lineNumber: n, syntax: l, textContent: c, trim: d } = e,
     p = c;
    const { title: u, type: b } = (0, s.useContext)(o.n),
     m = (0, s.useId)();
    return (
     d && (p = p.trim()),
     (0, r.jsx)(i.y$, {
      theme: a,
      code: p,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: i, getLineProps: s, getTokenProps: o } = e;
       return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', b ? `\u201c${b}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, r.jsx)(t.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: l, children: i.map((e, l) => (0, r.jsxs)('span', { ...s({ line: e }), children: [n && (0, r.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, r.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  91050: (e, n, l) => {
   l.d(n, { n: () => d, X: () => p });
   var t = l(77355),
    i = l(67663),
    s = l(46506),
    o = l(4814),
    a = l(75271);
   const r = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var c = l(52676);
   const d = (0, a.createContext)({}),
    p = (e) => {
     let { title: n, appearance: l, description: a, children: p, figure: u } = e;
     const b = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div';
     return (0, c.jsxs)(m, { className: (0, o.Z)(r['nlds-guideline'], r[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: (0, o.Z)(r['nlds-guideline__description']), children: ['dont' === l ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, o.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: r['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: r['nlds-guideline__title'], children: b.dont })] }), (0, c.jsx)(s.nv, { children: n })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(s.nv, { className: (0, o.Z)(r['nlds-guideline__badge'], r[`nlds-guideline__badge--${l}`]), children: [(0, c.jsx)(i.Z, { 'aria-hidden': 'true', role: 'presentation', className: r['nlds-guideline__icon'] }), (0, c.jsx)('span', { className: r['nlds-guideline__title'], children: b.do })] }), (0, c.jsx)(s.nv, { children: n })] }), a] }), (0, c.jsx)('div', { className: (0, o.Z)(r['nlds-guideline__example']), children: (0, c.jsx)(d.Provider, { value: { title: n, type: b[l] }, children: p }) })] });
    };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => a, a: () => o });
   var t = l(75271);
   const i = {},
    s = t.createContext(i);
   function o(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
