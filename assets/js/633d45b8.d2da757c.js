'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [98724],
 {
  535(e, n, l) {
   (l.r(n), l.d(n, { assets: () => g, contentTitle: () => v, default: () => k, frontMatter: () => b, metadata: () => t, toc: () => j }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/link/not-in-label/README","title":"Zet geen link in een label \xb7 Links in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor link niet in het label plaatsen van een formulierveld.","source":"@site/docs/richtlijnen/formulieren/link/2-not-in-label/README.mdx","sourceDirName":"richtlijnen/formulieren/link/2-not-in-label","slug":"/richtlijnen/formulieren/links/niet-in-label","permalink":"/richtlijnen/formulieren/links/niet-in-label","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/2-not-in-label/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet geen link in een label \xb7 Links in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geen link in label","pagination_label":"Geen link in label","description":"Richtlijnen voor link niet in het label plaatsen van een formulierveld.","slug":"/richtlijnen/formulieren/links/niet-in-label","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Plaatsing link","permalink":"/richtlijnen/formulieren/links/plaatsing"},"next":{"title":"Link in nieuwe tab","permalink":"/richtlijnen/formulieren/links/nieuwe-tab"}}');
   var i = l(86070),
    r = l(18439),
    o = l(78734),
    s = l(58639),
    a = l(15638);
   function c(e) {
    const n = { a: 'a', fieldset: 'fieldset', h2: 'h2', input: 'input', label: 'label', legend: 'legend', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, i.jsx)(a.$, { appearance: 'do', title: 'Heel basaal, de link vlak boven het formulierveld plaatsen.', children: (0, i.jsx)(s.H, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '#', children: 'Privacybeleid gemeente Voorbeeld' }), '.'] }), (0, i.jsx)(n.input, { id: 'pb', type: 'checkbox', name: 'privacybeleid' }), (0, i.jsx)(n.label, { htmlFor: 'pb', children: 'Ik ga akkoord met het privacybeleid' })] }) }) }), '\n', (0, i.jsx)(a.$, { appearance: 'do', title: 'Groeperen met een fieldset en de informatie koppelen aan het formulierveld met een aria-describedby.', children: (0, i.jsx)(s.H, { language: 'html', children: () => (0, i.jsxs)(n.fieldset, { children: [(0, i.jsx)(n.legend, { children: 'Privacystatement gemeente Voorbeeld' }), (0, i.jsxs)(n.p, { id: 'desc', children: ['Wij hebben jouw toestemming nodig om je e-mailadres op te slaan zodat we je onze nieuwsbrief kunnen sturen. Lees onze ', (0, i.jsx)(n.a, { href: '#', target: '_blank', children: 'privacybeleid (opent in een nieuw venster)' }), '.'] }), (0, i.jsx)(n.input, { type: 'checkbox', 'aria-describedby': 'desc', id: 'pvs' }), (0, i.jsx)(n.label, { htmlFor: 'pvs', children: 'Ik ga akkoord met het privacybeleid' })] }) }) }), '\n', (0, i.jsx)(a.$, { appearance: 'dont', title: 'Link in het label plaatsen.', children: (0, i.jsx)(s.H, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.input, { id: 'privacybeleid', type: 'checkbox', name: 'privacybeleid' }), ' ', (0, i.jsxs)(n.label, { htmlFor: 'privacybeleid', children: ['Ik ga akkoord met het ', (0, i.jsx)(n.a, { href: '#', children: 'privacybeleid' })] })] }) }) }), '\n', (0, i.jsx)(a.$, { appearance: 'dont', title: 'Link samen met het invoerveld in een impliciet label plaatsen.', children: (0, i.jsx)(s.H, { language: 'html', children: () => (0, i.jsxs)(n.label, { htmlFor: 'tac', children: [(0, i.jsx)(n.input, { id: 'tac', type: 'checkbox', name: 'terms-and-conditions' }), 'Ik ga akkoord met het ', (0, i.jsx)(n.a, { href: '#', children: 'privacybeleid' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', img: 'img', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'zet-geen-link-in-een-label', children: 'Zet geen link in een label' }) }), '\n', (0, i.jsx)(n.p, { children: 'Een link in een label wordt vaak gebruikt bij het accepteren van bijvoorbeeld het privacybeleid.' }), '\n', (0, i.jsx)(n.p, { children: 'Dit is om twee redenen geen goede constructie:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Een label kan ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns', children: 'geen links of buttons elementen' }), ' bevatten. Lees hierover meer in de richtlijn ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/alleen-tekst/', children: 'Zet alleen tekst in het label' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' kunnen struikelen over de combinatie "label en link" en lezen daardoor het label niet goed voor.'] }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:\nEen checkbox met in het label "Ik ga akkoord met het privacybeleid", en de tekst privacybeleid is ook een link.\nDit is geen goede constructie:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<input id="p" type="checkbox" name="privacybeleid" />\n<label for="p">Ik ga akkoord met het <a href="#">privacybeleid</a></label>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'VoiceOver in Safari op Mac OS Sonoma 14 leest als label voor: "Ik ga akkoord met het en nog 1 onderdeel", dat onderdeel is de link.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/_img_links-vo-link-in-label.png', alt: 'Screenshot van uitvoer VoiceOver met de tekst: Ik ga akkoord met het en nog 1 onderdeel, dat onderdeel is de link.' }) }), '\n', (0, i.jsx)(n.p, { children: 'Een link buiten het label plaatsen is een aanbevolen werkwijze, vanuit gebruikersvriendelijk voor screenreadergebruikers en om te voldoen aan de HTML-specificaties.' })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, i.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
   const b = { title: 'Zet geen link in een label \xb7 Links in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen link in label', pagination_label: 'Geen link in label', description: 'Richtlijnen voor link niet in het label plaatsen van een formulierveld.', slug: '/richtlijnen/formulieren/links/niet-in-label', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    g = {},
    j = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function y(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(h, {}), '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(m, {}), '\n', (0, i.jsx)(o.Ay, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(y, { ...e }) }) : y();
   }
  },
  15638(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var t = l(4077),
    i = l(58315),
    r = l(46447),
    o = l(13526),
    s = l(30758),
    a = l(86070);
   const c = (0, s.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: s, figure: d }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = d ? 'figure' : 'div',
      u = d ? 'figcaption' : 'div';
     return (0, a.jsxs)(h, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(i.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, a.jsx)(r.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, a.jsx)(r.fz, { children: e })] }), l] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: p[n] }, children: s }) })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => o, x: () => s });
   var t = l(30758);
   const i = {},
    r = t.createContext(i);
   function o(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  58639(e, n, l) {
   l.d(n, { H: () => g });
   var t = l(69284),
    i = l(46447),
    r = l(13526),
    o = l(68148),
    s = l(9016),
    a = l(69303),
    c = l(91635),
    d = l(30734),
    p = l(30758),
    h = l(31186),
    u = l(86070);
   const m = ({ children: e }) => (0, u.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(i.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(i.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const b = ({ children: e }) => (0, u.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(i.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   b.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, u.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const g = ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: g = !0, children: j, container: y = 'document', language: k, designTokens: x }) => {
    const f = 'function' == typeof j ? j() : j,
     _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : h.qV(_ || f),
     [N, A] = (0, p.useState)(w),
     [z, S] = (0, p.useState)(l);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(w, { parser: k, plugins: [o.A, s.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [w]);
    const C = (0, p.useId)();
    let R = p.Fragment;
    return (
     'paragraph' === y ? (R = m) : 'document' === y ? (R = b) : 'surface' === y && (R = v),
     (0, u.jsxs)('div', {
      className: (0, r.A)('nlds-canvas'),
      children: [
       f && (0, u.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: x, children: (0, u.jsx)(R, { children: (0, u.jsx)(i.v$, { children: f }) }) }) }),
       g &&
        (0, u.jsx)('div', {
         className: (0, r.A)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(i.$n, {
          className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           S(!z);
          },
          'aria-expanded': z,
          'aria-controls': C,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, u.jsxs)('div', {
         className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: C,
         hidden: !z,
         children: [
          (0, u.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: k, textContent: N, trim: !0 }),
          n &&
           (0, u.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(i.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(N).catch((e) => console.error('Copy code failed', e));
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
  69284(e, n, l) {
   l.d(n, { M: () => c });
   var t = l(46447),
    i = l(16194),
    r = l(30758),
    o = l(15638);
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
   var a = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: p, type: h } = (0, r.useContext)(o.x),
     u = (0, r.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(i.f4, { theme: s, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: i, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, a.jsx)(t.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...i({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => s, RM: () => r });
   var t = l(86070),
    i = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
