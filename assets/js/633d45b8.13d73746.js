'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [84756],
 {
  55400: (e, n, l) => {
   l.d(n, { ZP: () => r });
   var t = l(52676),
    o = l(24785);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
  },
  4487: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => b, contentTitle: () => m, default: () => y, frontMatter: () => h, metadata: () => u, toc: () => v });
   var t = l(52676),
    o = l(24785),
    i = l(55400),
    r = l(43599),
    s = l(40761);
   function a(e) {
    const n = { a: 'a', fieldset: 'fieldset', input: 'input', label: 'label', legend: 'legend', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(s.X, { appearance: 'do', title: 'Heel basaal, de link vlak boven het formulierveld plaatsen.', children: (0, t.jsx)(r.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '#', children: 'Privacybeleid gemeente Voorbeeld' }), '.'] }), (0, t.jsx)(n.input, { id: 'pb', type: 'checkbox', name: 'privacybeleid' }), (0, t.jsx)(n.label, { htmlFor: 'pb', children: 'Ik ga akkoord met het privacybeleid' })] }) }) }), '\n', (0, t.jsx)(s.X, { appearance: 'do', title: 'Groeperen met een fieldset en de informatie koppelen aan het formulierveld met een aria-describedby.', children: (0, t.jsx)(r.X, { language: 'html', children: () => (0, t.jsxs)(n.fieldset, { children: [(0, t.jsx)(n.legend, { children: 'Privacystatement gemeente Voorbeeld' }), (0, t.jsxs)(n.p, { id: 'desc', children: ['Wij hebben jouw toestemming nodig om je e-mailadres op te slaan zodat we je onze nieuwsbrief kunnen sturen. Lees onze ', (0, t.jsx)(n.a, { href: '#', target: '_blank', children: 'privacybeleid (opent in een nieuw venster)' }), '.'] }), (0, t.jsx)(n.input, { type: 'checkbox', 'aria-describedby': 'desc', id: 'pvs' }), (0, t.jsx)(n.label, { htmlFor: 'pvs', children: 'Ik ga akkoord met het privacybeleid' })] }) }) }), '\n', (0, t.jsx)(s.X, { appearance: 'dont', title: 'Link in het label plaatsen.', children: (0, t.jsx)(r.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.input, { id: 'privacybeleid', type: 'checkbox', name: 'privacybeleid' }), ' ', (0, t.jsxs)(n.label, { htmlFor: 'privacybeleid', children: ['Ik ga akkoord met het ', (0, t.jsx)(n.a, { href: '#', children: 'privacybeleid' })] })] }) }) }), '\n', (0, t.jsx)(s.X, { appearance: 'dont', title: 'Link samen met het invoerveld in een impliciet label plaatsen.', children: (0, t.jsx)(r.X, { language: 'html', children: () => (0, t.jsxs)(n.label, { htmlFor: 'tac', children: [(0, t.jsx)(n.input, { id: 'tac', type: 'checkbox', name: 'terms-and-conditions' }), 'Ik ga akkoord met het ', (0, t.jsx)(n.a, { href: '#', children: 'privacybeleid' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   function d(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', img: 'img', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'zet-geen-link-in-een-label', children: 'Zet geen link in een label' }), '\n', (0, t.jsx)(n.p, { children: 'Een link in een label wordt vaak gebruikt bij het accepteren van bijvoorbeeld het privacybeleid.' }), '\n', (0, t.jsx)(n.p, { children: 'Dit is om twee redenen geen goede constructie:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Een label kan ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns', children: 'geen links of buttons elementen' }), ' bevatten. Lees hierover meer in de richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/alleen-tekst', children: 'Zet alleen tekst in het label' }), '.'] }), '\n', (0, t.jsx)(n.li, { children: 'Screenreaders kunnen struikelen over de combinatie "label en link" en lezen daardoor het label niet goed voor.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld:\nEen checkbox met in het label "Ik ga akkoord met het privacybeleid", en de tekst privacybeleid is ook een link.\nDit is geen goede constructie:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<input id="p" type="checkbox" name="privacybeleid" />\n<label for="p">Ik ga akkoord met het <a href="#">privacybeleid</a></label>\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'VoiceOver in Safari op Mac OS Sonoma 14 leest als label voor: "Ik ga akkoord met het en nog 1 onderdeel", dat onderdeel is de link.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/_img_links-vo-link-in-label.png', alt: 'Screenshot van uitvoer VoiceOver met de tekst: Ik ga akkoord met het en nog 1 onderdeel, dat onderdeel is de link.' }) }), '\n', (0, t.jsx)(n.p, { children: 'Een link buiten het label plaatsen is een aanbevolen werkwijze, vanuit gebruikersvriendelijk voor screenreadergebruikers en om te voldoen aan de HTML-specificaties.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
   const h = { title: 'Zet geen link in een label \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen link in label', pagination_label: 'Geen link in label', description: 'Richtlijnen voor link niet in het label plaatsen van een formulierveld.', slug: '/richtlijnen/formulieren/links/niet-in-label', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    u = { id: 'richtlijnen/formulieren/link/not-in-label/README', title: 'Zet geen link in een label \xb7 Links in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor link niet in het label plaatsen van een formulierveld.', source: '@site/docs/richtlijnen/formulieren/link/2-not-in-label/README.mdx', sourceDirName: 'richtlijnen/formulieren/link/2-not-in-label', slug: '/richtlijnen/formulieren/links/niet-in-label', permalink: '/richtlijnen/formulieren/links/niet-in-label', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/2-not-in-label/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Zet geen link in een label \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen link in label', pagination_label: 'Geen link in label', description: 'Richtlijnen voor link niet in het label plaatsen van een formulierveld.', slug: '/richtlijnen/formulieren/links/niet-in-label', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Plaatsing link', permalink: '/richtlijnen/formulieren/links/plaatsing' }, next: { title: 'Link in nieuwe tab', permalink: '/richtlijnen/formulieren/links/nieuwe-tab' } },
    b = {},
    v = [];
   function k(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(i.ZP, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(k, { ...e }) }) : k();
   }
  },
  43599: (e, n, l) => {
   l.d(n, { X: () => k });
   var t = l(46506),
    o = l(41179),
    i = l(4814),
    r = l(25585),
    s = l(40282),
    a = l(40678),
    c = l(85722),
    d = l(6374),
    p = l(75271),
    h = l(60027),
    m = l(52676);
   const u = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(t.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   u.displayName = 'ParagraphContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   b.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   v.displayName = 'SurfaceContainer';
   const k = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: k = !1, displayCode: y = !0, children: g, container: j = 'document', language: x, designTokens: f } = e,
     _ = 'function' == typeof g ? g() : g,
     N = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     w = 'string' == typeof n ? n : h.uS(N || _),
     [Z, S] = (0, p.useState)(w),
     [C, L] = (0, p.useState)(k);
    (0, p.useEffect)(() => {
     (async () => {
      (Z = await d.ZP.format(w, { parser: x, plugins: [r.Z, s.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), S(Z);
     })();
    }, [w]);
    const P = (0, p.useId)();
    let z = p.Fragment;
    return (
     'paragraph' === j ? (z = u) : 'document' === j ? (z = b) : 'surface' === j && (z = v),
     (0, m.jsxs)('div', {
      className: (0, i.Z)('nlds-canvas'),
      children: [
       _ && (0, m.jsx)('div', { className: (0, i.Z)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, m.jsx)(z, { children: (0, m.jsx)(t.pu, { children: _ }) }) }) }),
       y &&
        (0, m.jsx)('div', {
         className: (0, i.Z)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(t.zx, {
          className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           L(!C);
          },
          'aria-expanded': C,
          'aria-controls': P,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       y &&
        (0, m.jsxs)('div', {
         className: (0, i.Z)('nlds-canvas__code-block', !l && 'nlds-canvas__code-block--user-select-none'),
         id: P,
         hidden: !C,
         children: [
          (0, m.jsx)(o.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: Z, trim: !0 }),
          l &&
           (0, m.jsx)('div', {
            className: (0, i.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(t.zx, {
             className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   l.d(n, { u: () => c });
   var t = l(46506),
    o = l(70739),
    i = l(75271),
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
   var a = l(52676);
   function c(e) {
    let { lineNumber: n, syntax: l, textContent: c, trim: d } = e,
     p = c;
    const { title: h, type: m } = (0, i.useContext)(r.n),
     u = (0, i.useId)();
    return (
     d && (p = p.trim()),
     (0, a.jsx)(o.y$, {
      theme: s,
      code: p,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: o, getLineProps: i, getTokenProps: r } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(t.dn, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: l, children: o.map((e, l) => (0, a.jsxs)('span', { ...i({ line: e }), children: [n && (0, a.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, l) => {
   l.d(n, { X: () => d, n: () => c });
   var t = l(77355),
    o = l(67663),
    i = l(46506),
    r = l(4814),
    s = l(75271),
    a = l(52676);
   const c = (0, s.createContext)({}),
    d = (e) => {
     let { title: n, appearance: l, description: s, children: d, figure: p } = e;
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      u = p ? 'figcaption' : 'div';
     return (0, a.jsxs)(m, { className: (0, r.Z)('nlds-guideline', `nlds-guideline--${l}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === l ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, a.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(i.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, r.Z)('nlds-guideline__badge', `nlds-guideline__badge--${l}`), children: [(0, a.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(i.nv, { children: n })] }), s] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: h[l] }, children: d }) })] });
    };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => s, a: () => r });
   var t = l(75271);
   const o = {},
    i = t.createContext(o);
   function r(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), t.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
