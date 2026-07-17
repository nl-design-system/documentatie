'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [1998],
 {
  9386(e, n, l) {
   l.d(n, { H: () => y });
   var s = l(95822),
    t = l(46447),
    r = l(13526),
    i = l(68148),
    o = l(9016),
    a = l(69303),
    c = l(91635),
    d = l(30734),
    h = l(30758),
    p = l(31186),
    m = l(65904),
    u = l.n(m),
    b = l(51627),
    g = l(86070);
   const j = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, g.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, g.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, g.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const y = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        s = (0, p.qV)(l)
         .replaceAll(/&quot;/g, '"')
         .replaceAll(/\sclass="[\w-\s]+"/g, '')
         .replaceAll(/\sid="[\w-\s]+"/g, '')
         .replace('<astro-static-slot>', '')
         .replace('</astro-static-slot>', '')
         .replaceAll(/{"\s"}/g, '')
         .replaceAll(/\n{2,}/g, '\n')
         .replaceAll(/^\s\s/gm, '')
         .replaceAll(/\salt\s/g, ' alt="" ')
         .replaceAll(' loading="lazy"', ' '),
        t = u().highlight(s, u().languages[n], n);
       return (0, g.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, g.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: s } }), (0, g.jsx)(b.n, { children: (0, g.jsx)(b.K, { label: 'Code', children: (0, g.jsx)('pre', { className: 'language-html nl-code-block', children: (0, g.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: t } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: u, container: b = 'document', language: y, designTokens: k }) => {
       const f = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(_ || f),
        [w, A] = (0, h.useState)(N),
        [z, S] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: y, plugins: [i.A, o.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const C = (0, h.useId)();
       let L = h.Fragment;
       return (
        'paragraph' === b ? (L = j) : 'document' === b ? (L = x) : 'surface' === b && (L = v),
        (0, g.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          f && (0, g.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, g.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, g.jsx)(L, { children: (0, g.jsx)(t.v$, { children: f }) }) }) }),
          m &&
           (0, g.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, g.jsx)(t.$n, {
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
          m &&
           (0, g.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !z,
            children: [
             (0, g.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: w, trim: !0 }),
             n &&
              (0, g.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, g.jsx)(t.$n, {
                className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, l) {
   l.d(n, { R: () => i, x: () => o });
   var s = l(30758);
   const t = {},
    r = s.createContext(t);
   function i(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : i(e.components)), s.createElement(r.Provider, { value: n }, e.children));
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => a, n: () => o });
   var s = l(13526),
    t = l(96345),
    r = l(37168),
    i = l(86070);
   const o = ({ className: e, ...n }) => {
     const l = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, i.jsx)('div', { className: l, children: n.children });
    },
    a = ({ className: e, label: n, heading: l, headingLevel: o, headingApperance: a, ...c }) => {
     const d = (0, s.A)('utrecht-accordion__section', e);
     return (0, i.jsxs)('details', { className: d, ...c, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(t.A, {}) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [l && (0, i.jsx)(r.D, { level: o, appearance: a, children: l }), n] })] }) }), (0, i.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => o, RM: () => r });
   var s = l(86070),
    t = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(i, { ...e }) }) : i(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => h, x: () => d });
   var s = l(4077),
    t = l(58315),
    r = l(46447),
    i = l(13526),
    o = l(45980),
    a = l(30758),
    c = l(86070);
   const d = (0, a.createContext)({}),
    h = ({ title: e, appearance: n, description: l, children: a, figure: h }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = h ? 'figure' : 'div',
      u = h ? 'figcaption' : 'div',
      b = 'string' == typeof l ? (0, c.jsx)(o.oz, { children: l }) : l;
     return (0, c.jsxs)(m, { className: (0, i.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(r.fz, { children: e })] }), b] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => c });
   var s = l(46447),
    t = l(16194),
    r = l(30758),
    i = l(88022);
   const o = {
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
    const { title: h, type: p } = (0, r.useContext)(i.x),
     m = (0, r.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(t.f4, { theme: o, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...t({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  97158(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => g, default: () => y, frontMatter: () => b, metadata: () => s, toc: () => x }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/link/not-in-label/index","title":"Zet geen link in een label","description":"Richtlijnen voor link niet in het label plaatsen van een formulierveld.","source":"@site/docs/richtlijnen/formulieren/link/2-not-in-label/index.mdx","sourceDirName":"richtlijnen/formulieren/link/2-not-in-label","slug":"/richtlijnen/formulieren/links/niet-in-label","permalink":"/richtlijnen/formulieren/links/niet-in-label","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/2-not-in-label/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet geen link in een label","title_sm":"Geen link in label","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geen link in label","pagination_label":"Geen link in label","description":"Richtlijnen voor link niet in het label plaatsen van een formulierveld.","slug":"/richtlijnen/formulieren/links/niet-in-label","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Plaatsing link","permalink":"/richtlijnen/formulieren/links/plaatsing"},"next":{"title":"Link in nieuwe tab","permalink":"/richtlijnen/formulieren/links/nieuwe-tab"}}');
   var t = l(86070),
    r = l(18439),
    i = l(78734),
    o = l(9386),
    a = l(88022);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(a.$, { appearance: 'do', title: 'Heel basaal, de link vlak boven het formulierveld plaatsen.', children: (0, t.jsx)(o.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)('p', { children: [(0, t.jsx)('a', { href: '#', children: 'Privacybeleid gemeente Voorbeeld' }), '.'] }), (0, t.jsxs)('p', { children: [(0, t.jsx)('input', { id: 'pb', type: 'checkbox', name: 'privacybeleid' }), (0, t.jsx)('label', { htmlFor: 'pb', children: 'Ik ga akkoord met het privacybeleid' })] })] }) }) }), '\n', (0, t.jsx)(a.$, { appearance: 'do', title: 'Groeperen met een fieldset en de informatie koppelen aan het formulierveld met een aria-describedby.', children: (0, t.jsx)(o.H, { language: 'html', children: () => (0, t.jsxs)('fieldset', { children: [(0, t.jsx)('legend', { children: 'Privacystatement gemeente Voorbeeld' }), (0, t.jsxs)('p', { id: 'desc', children: ['Wij hebben jouw toestemming nodig om je e-mailadres op te slaan zodat we je onze nieuwsbrief kunnen sturen. Lees onze ', (0, t.jsx)('a', { href: '#', target: '_blank', children: 'privacybeleid (opent in een nieuw venster)' }), '.'] }), (0, t.jsxs)('p', { children: [(0, t.jsx)('input', { type: 'checkbox', 'aria-describedby': 'desc', id: 'pvs' }), (0, t.jsx)('label', { htmlFor: 'pvs', children: 'Ik ga akkoord met het privacybeleid' })] })] }) }) }), '\n', (0, t.jsx)(a.$, { appearance: 'dont', title: 'Link in het label plaatsen.', children: (0, t.jsx)(o.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsxs)('p', { children: [(0, t.jsx)('input', { id: 'privacybeleid', type: 'checkbox', name: 'privacybeleid' }), ' ', (0, t.jsxs)('label', { htmlFor: 'privacybeleid', children: ['Ik ga akkoord met het ', (0, t.jsx)('a', { href: '#', children: 'privacybeleid' })] })] }) }) }) }), '\n', (0, t.jsx)(a.$, { appearance: 'dont', title: 'Link samen met het invoerveld in een impliciet label plaatsen.', children: (0, t.jsx)(o.H, { language: 'html', children: () => (0, t.jsx)('p', { children: (0, t.jsxs)('label', { htmlFor: 'tac', children: [(0, t.jsx)('input', { id: 'tac', type: 'checkbox', name: 'terms-and-conditions' }), 'Ik ga akkoord met het ', (0, t.jsx)('a', { href: '#', children: 'privacybeleid' })] }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', img: 'img', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'zet-geen-link-in-een-label', children: 'Zet geen link in een label' }) }), '\n', (0, t.jsx)(n.p, { children: 'Een link in een label wordt vaak gebruikt bij het accepteren van bijvoorbeeld het privacybeleid.' }), '\n', (0, t.jsx)(n.p, { children: 'Dit is om twee redenen geen goede constructie:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Een label kan ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns', children: 'geen links of buttons elementen' }), ' bevatten. Lees hierover meer in de richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/alleen-tekst/', children: 'Zet alleen tekst in het label' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' kunnen struikelen over de combinatie "label en link" en lezen daardoor het label niet goed voor.'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld:\nEen checkbox met in het label "Ik ga akkoord met het privacybeleid", en de tekst privacybeleid is ook een link.\nDit is geen goede constructie:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<input id="p" type="checkbox" name="privacybeleid" />\n<label for="p">Ik ga akkoord met het <a href="#">privacybeleid</a></label>\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'VoiceOver in Safari op Mac OS Sonoma 14 leest als label voor: "Ik ga akkoord met het en nog 1 onderdeel", dat onderdeel is de link.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/_img_links-vo-link-in-label.png', alt: 'Screenshot van uitvoer VoiceOver met de tekst: Ik ga akkoord met het en nog 1 onderdeel, dat onderdeel is de link.' }) }), '\n', (0, t.jsx)(n.p, { children: 'Een link buiten het label plaatsen is een aanbevolen werkwijze, vanuit gebruikersvriendelijk voor screenreadergebruikers en om te voldoen aan de HTML-specificaties.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   const b = { title: 'Zet geen link in een label', title_sm: 'Geen link in label', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen link in label', pagination_label: 'Geen link in label', description: 'Richtlijnen voor link niet in het label plaatsen van een formulierveld.', slug: '/richtlijnen/formulieren/links/niet-in-label', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    j = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function v(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(i.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(v, { ...e }) }) : v();
   }
  },
 },
]);
