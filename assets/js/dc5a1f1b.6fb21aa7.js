'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [1998],
 {
  14881(e, n, l) {
   l.d(n, { K: () => d, n: () => c });
   var s = l(13526),
    r = l(30758),
    t = l(30662),
    o = l(32065),
    a = l(37168),
    i = l(86070);
   const c = (0, r.forwardRef)(({ as: e, className: n, children: l, ...r }, t) => {
     const o = e || 'div',
      a = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, i.jsx)(o, { ref: t, className: a, ...r, children: l });
    }),
    d = ({ className: e, classNamePanel: n, label: l, heading: r, headingLevel: c, headingApperance: d, ...h }) => {
     const m = (0, s.A)('utrecht-accordion__section', e),
      p = (0, s.A)('utrecht-accordion__panel', n);
     return (0, i.jsxs)('details', { className: m, ...h, children: [(0, i.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, i.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, i.jsx)('span', { className: 'nl-button__icon-start', children: (0, i.jsx)(o.I, { children: (0, i.jsx)(t.rI, {}) }) }), (0, i.jsxs)('span', { className: 'nl-button__label', children: [r && (0, i.jsx)(a.D, { level: c, appearance: d, children: r }), l] })] }) }), (0, i.jsx)('div', { className: p, children: h.children })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => o, x: () => a });
   var s = l(30758);
   const r = {},
    t = s.createContext(r);
   function o(e) {
    const n = s.useContext(t);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), s.createElement(t.Provider, { value: n }, e.children));
   }
  },
  21619(e, n, l) {
   (l.r(n), l.d(n, { assets: () => x, contentTitle: () => j, default: () => y, frontMatter: () => b, metadata: () => s, toc: () => g }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/link/not-in-label/index","title":"Zet geen link in een label","description":"Richtlijnen voor link niet in het label plaatsen van een formulierveld.","source":"@site/docs/richtlijnen/formulieren/link/2-not-in-label/index.mdx","sourceDirName":"richtlijnen/formulieren/link/2-not-in-label","slug":"/richtlijnen/formulieren/links/niet-in-label","permalink":"/richtlijnen/formulieren/links/niet-in-label","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/2-not-in-label/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet geen link in een label","title_sm":"Geen link in label","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geen link in label","pagination_label":"Geen link in label","description":"Richtlijnen voor link niet in het label plaatsen van een formulierveld.","slug":"/richtlijnen/formulieren/links/niet-in-label","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Plaatsing link","permalink":"/richtlijnen/formulieren/links/plaatsing"},"next":{"title":"Link in nieuwe tab","permalink":"/richtlijnen/formulieren/links/nieuwe-tab"}}');
   var r = l(86070),
    t = l(18439),
    o = l(56672),
    a = l(87682),
    i = l(56528);
   function c(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(i.$, { appearance: 'do', title: 'Heel basaal, de link vlak boven het formulierveld plaatsen.', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)('p', { children: [(0, r.jsx)('a', { href: '#', children: 'Privacybeleid gemeente Voorbeeld' }), '.'] }), (0, r.jsxs)('p', { children: [(0, r.jsx)('input', { id: 'pb', type: 'checkbox', name: 'privacybeleid' }), (0, r.jsx)('label', { htmlFor: 'pb', children: 'Ik ga akkoord met het privacybeleid' })] })] }) }) }), '\n', (0, r.jsx)(i.$, { appearance: 'do', title: 'Groeperen met een fieldset en de informatie koppelen aan het formulierveld met een aria-describedby.', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsxs)('fieldset', { children: [(0, r.jsx)('legend', { children: 'Privacystatement gemeente Voorbeeld' }), (0, r.jsxs)('p', { id: 'desc', children: ['Wij hebben jouw toestemming nodig om je e-mailadres op te slaan zodat we je onze nieuwsbrief kunnen sturen. Lees onze ', (0, r.jsx)('a', { href: '#', target: '_blank', children: 'privacybeleid (opent in een nieuw venster)' }), '.'] }), (0, r.jsxs)('p', { children: [(0, r.jsx)('input', { type: 'checkbox', 'aria-describedby': 'desc', id: 'pvs' }), (0, r.jsx)('label', { htmlFor: 'pvs', children: 'Ik ga akkoord met het privacybeleid' })] })] }) }) }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Link in het label plaatsen.', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsx)(r.Fragment, { children: (0, r.jsxs)('p', { children: [(0, r.jsx)('input', { id: 'privacybeleid', type: 'checkbox', name: 'privacybeleid' }), ' ', (0, r.jsxs)('label', { htmlFor: 'privacybeleid', children: ['Ik ga akkoord met het ', (0, r.jsx)('a', { href: '#', children: 'privacybeleid' })] })] }) }) }) }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Link samen met het invoerveld in een impliciet label plaatsen.', children: (0, r.jsx)(a.H, { language: 'html', children: () => (0, r.jsx)('p', { children: (0, r.jsxs)('label', { htmlFor: 'tac', children: [(0, r.jsx)('input', { id: 'tac', type: 'checkbox', name: 'terms-and-conditions' }), 'Ik ga akkoord met het ', (0, r.jsx)('a', { href: '#', children: 'privacybeleid' })] }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', img: 'img', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'zet-geen-link-in-een-label', children: 'Zet geen link in een label' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een link in een label wordt vaak gebruikt bij het accepteren van bijvoorbeeld het privacybeleid.' }), '\n', (0, r.jsx)(n.p, { children: 'Dit is om twee redenen geen goede constructie:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Een label kan ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns', children: 'geen links of buttons elementen' }), ' bevatten. Lees hierover meer in de richtlijn ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/alleen-tekst/', children: 'Zet alleen tekst in het label' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' kunnen struikelen over de combinatie "label en link" en lezen daardoor het label niet goed voor.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:\nEen checkbox met in het label "Ik ga akkoord met het privacybeleid", en de tekst privacybeleid is ook een link.\nDit is geen goede constructie:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<input id="p" type="checkbox" name="privacybeleid" />\n<label for="p">Ik ga akkoord met het <a href="#">privacybeleid</a></label>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'VoiceOver in Safari op Mac OS Sonoma 14 leest als label voor: "Ik ga akkoord met het en nog 1 onderdeel", dat onderdeel is de link.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/_img_links-vo-link-in-label.png', alt: 'Screenshot van uitvoer VoiceOver met de tekst: Ik ga akkoord met het en nog 1 onderdeel, dat onderdeel is de link.' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een link buiten het label plaatsen is een aanbevolen werkwijze, vanuit gebruikersvriendelijk voor screenreadergebruikers en om te voldoen aan de HTML-specificaties.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   const b = { title: 'Zet geen link in een label', title_sm: 'Geen link in label', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen link in label', pagination_label: 'Geen link in label', description: 'Richtlijnen voor link niet in het label plaatsen van een formulierveld.', slug: '/richtlijnen/formulieren/links/niet-in-label', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    x = {},
    g = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function v(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(o.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v();
   }
  },
  28369(e, n, l) {
   l.d(n, { M: () => c });
   var s = l(46447),
    r = l(16194),
    t = l(30758),
    o = l(56528);
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
   var i = l(86070);
   function c({ lineNumber: e, syntax: n, textContent: l, trim: c }) {
    let d = l;
    const { title: h, type: m } = (0, t.useContext)(o.x),
     p = (0, t.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(r.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: r, getTokenProps: t }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...r({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  30662(e, n, l) {
   l.d(n, { D4: () => M, GP: () => N, KC: () => $, Nd: () => _, Rt: () => S, Vj: () => w, Wk: () => H, bz: () => C, cB: () => z, e5: () => T, hY: () => P, jK: () => L, jP: () => R, ob: () => G, rI: () => A, t4: () => F, vP: () => I, vg: () => D });
   var s = l(92081),
    r = l(90578),
    t = l(96345),
    o = l(64249),
    a = l(4603),
    i = l(91525),
    c = l(23436),
    d = l(1375),
    h = l(4077),
    m = l(58315),
    p = l(73563),
    u = l(35193),
    b = l(82999),
    j = l(13088),
    x = l(43864),
    g = l(24214),
    v = l(79532),
    y = l(60529),
    k = l(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, k.jsx)(s.A, { ...f }),
    N = () => (0, k.jsx)(r.A, { ...f }),
    A = () => (0, k.jsx)(t.A, { ...f }),
    w = () => (0, k.jsx)(o.A, { ...f }),
    C = () => (0, k.jsx)(a.A, { ...f }),
    S = () => (0, k.jsx)(i.A, { ...f }),
    z = () => (0, k.jsx)(c.A, { ...f }),
    I = () => (0, k.jsx)(d.A, { ...f }),
    L = () => (0, k.jsx)(h.A, { ...f }),
    R = () => (0, k.jsx)(m.A, { ...f }),
    F = () => (0, k.jsx)(p.A, { ...f }),
    M = () => (0, k.jsx)(u.A, { ...f }),
    P = () => (0, k.jsx)(b.A, { ...f }),
    $ = () => (0, k.jsx)(j.A, { ...f }),
    H = () => (0, k.jsx)(x.A, { ...f }),
    T = () => (0, k.jsx)(g.A, { ...f }),
    G = () => (0, k.jsx)(v.A, { ...f }),
    D = () => (0, k.jsx)(y.A, { ...f });
  },
  32065(e, n, l) {
   l.d(n, { I: () => s.In });
   var s = l(29181);
  },
  46847(e, n, l) {
   l.d(n, { $: () => s.$n });
   var s = l(50805);
  },
  56528(e, n, l) {
   l.d(n, { $: () => d, x: () => c });
   var s = l(30662),
    r = l(46447),
    t = l(13526),
    o = l(45795),
    a = l(30758),
    i = l(86070);
   const c = (0, a.createContext)({}),
    d = ({ title: e, appearance: n, description: l, children: a, figure: d = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = d ? 'figure' : 'div',
      p = d ? 'figcaption' : 'div',
      u = 'string' == typeof l ? (0, i.jsx)(o.oz, { components: { a: r.N_ }, children: l }) : l;
     return (0, i.jsxs)(m, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, i.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jP, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, i.jsx)(r.fz, { children: e })] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, i.jsx)(r.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, i.jsx)(s.jK, {}) }), (0, i.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, i.jsx)(r.fz, { children: e })] }), u] }), (0, i.jsx)('div', { className: 'nlds-guideline__example', children: (0, i.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: a }) })] });
    };
  },
  56672(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => t });
   var s = l(86070),
    r = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(o, { ...e }) }) : o(e);
   }
  },
  87682(e, n, l) {
   l.d(n, { H: () => _ });
   var s = l(28369),
    r = l(46447),
    t = l(13526),
    o = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    h = l(30758),
    m = l(31186),
    p = l(65904),
    u = l.n(p),
    b = l(14881),
    j = l(46847),
    x = l(86070);
   const g = ({ label: e, labelId: n, className: l, colorScheme: s, forcedColorsAdjust: r = !1, children: o, dangerouslySetInnerHTML: a, ...i }) => (0, x.jsxs)('figure', { className: (0, t.A)('ma-html-image', l), role: e ? 'img' : void 0, 'aria-labelledby': e ? n : void 0, ...i, children: [e && (0, x.jsx)('figcaption', { className: 'ma-html-image__label', hidden: !0, id: n, children: e }), (0, x.jsx)('div', { className: (0, t.A)('ma-html-image__body', { 'ma-html-image__body--color-scheme-dark': 'dark' === s, 'ma-html-image__body--color-scheme-light': 'light' === s, 'ma-html-image__body--forced-colors-adjust': r }), inert: 'true', dangerouslySetInnerHTML: a, 'aria-hidden': 'true', children: o })] });
   var v = l(68197);
   const y = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   y.displayName = 'ParagraphContainer';
   const k = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   k.displayName = 'DocumentContainer';
   const f = ({ children: e }) => (0, x.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   f.displayName = 'SurfaceContainer';
   const _ = globalThis.isAstro
    ? ({ language: e, className: n, code: l = '<p>No code provided</p>', rawCode: s, copyCode: r, colorScheme: o, defaultExpandedCode: a, designTokens: i, forcedColorsAdjust: c = !0, label: d }) => {
       const m = 'string' == typeof l ? l : s || '',
        p = 'string' == typeof l ? u().highlight(l, u().languages[e], e) : u().highlight(s || '', u().languages[e], e),
        y = (0, x.jsx)(v.b, { Component: 'div', className: (0, t.A)('ma-canvas-astro__example', 'voorbeeld-theme', 'utrecht-html', 'ma-flow', { 'ma-canvas-astro__example--color-scheme-dark': 'dark' === o, 'ma-canvas-astro__example--color-scheme-light': 'light' === o }), style: i, dangerouslySetInnerHTML: { __html: m } });
       return (0, x.jsxs)('div', { className: (0, t.A)('ma-canvas-astro', n), children: [d ? (0, x.jsx)(g, { forcedColorsAdjust: c, label: d, labelId: d ? (0, h.useId)() : void 0, children: y }) : y, (0, x.jsx)(b.n, { children: (0, x.jsxs)(b.K, { label: 'Code', open: a, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: p } }) }), 'allow' === r && (0, x.jsx)(j.$, { 'data-copy-code': m, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: u, container: b = 'document', language: j, designTokens: g }) => {
       const v = 'function' == typeof u ? u() : u,
        _ = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : m.qV(_ || v),
        [A, w] = (0, h.useState)(N),
        [C, S] = (0, h.useState)(l);
       (0, h.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: j, plugins: [o.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         w(e);
        })();
       }, [N]);
       const z = (0, h.useId)();
       let I = h.Fragment;
       return (
        'paragraph' === b ? (I = y) : 'document' === b ? (I = k) : 'surface' === b && (I = f),
        (0, x.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          v && (0, x.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: g, children: (0, x.jsx)(I, { children: (0, x.jsx)(r.v$, { children: v }) }) }) }),
          p &&
           (0, x.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(r.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              S(!C);
             },
             'aria-expanded': C,
             'aria-controls': z,
             children: C ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, x.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: z,
            hidden: !C,
            children: [
             (0, x.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: j, textContent: A, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(r.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
                appearance: 'subtle-button',
                onClick: () => {
                 navigator.clipboard.writeText(A).catch((e) => console.error('Copy code failed', e));
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
 },
]);
