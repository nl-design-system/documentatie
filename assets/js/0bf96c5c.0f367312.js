'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [93431],
 {
  15638(e, n, l) {
   l.d(n, { $: () => h, x: () => d });
   var o = l(4077),
    t = l(58315),
    r = l(46447),
    s = l(13526),
    a = l(9547),
    i = l(30758),
    c = l(86070);
   const d = (0, i.createContext)({}),
    h = ({ title: e, appearance: n, description: l, children: i, figure: h }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      u = h ? 'figure' : 'div',
      g = h ? 'figcaption' : 'div',
      m = 'string' == typeof l ? (0, c.jsx)(a.oz, { children: l }) : l;
     return (0, c.jsxs)(u, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(r.fz, { children: e })] }), m] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: i }) })] });
    };
  },
  18439(e, n, l) {
   l.d(n, { R: () => s, x: () => a });
   var o = l(30758);
   const t = {},
    r = o.createContext(t);
   function s(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), o.createElement(r.Provider, { value: n }, e.children));
   }
  },
  26753(e, n, l) {
   (l.r(n), l.d(n, { assets: () => k, contentTitle: () => v, default: () => x, frontMatter: () => m, metadata: () => o, toc: () => b }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/field-size/README","title":"Maak aanklikbare formuliervelden groot genoeg","description":"Richtlijnen om aanklikbare formuliervelden makkelijk te kunnen selecteren.","source":"@site/docs/richtlijnen/formulieren/visual-design/5-field-size/README.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/5-field-size","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/5-field-size/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Maak aanklikbare formuliervelden groot genoeg","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Invoerveld goed aanklikbaar","pagination_label":"Invoerveld goed aanklikbaar","description":"Richtlijnen om aanklikbare formuliervelden makkelijk te kunnen selecteren.","slug":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Focus goed zichtbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar"},"next":{"title":"Fouten niet kleurafhankelijk","permalink":"/richtlijnen/formulieren/visueel-ontwerp/fout-niet-alleen-met-kleur"}}');
   var t = l(86070),
    r = l(18439),
    s = l(78734),
    a = l(58639),
    i = l(15638);
   function c(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Maak het aanklikbare deel groot genoeg.', description: 'Dit voorbeeld is het icoontje 50 bij 50 pixels.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)('p', { children: (0, t.jsx)('a', { href: 'https://www.linkedin.com/company/nl-design-system/', 'aria-label': 'LinkedIn', children: (0, t.jsx)('svg', { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '50x50', fill: 'currentColor', width: '50', height: '50', focusable: 'false', children: (0, t.jsx)('path', { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) }) }) }) }) }) }), '\n', (0, t.jsx)(i.$, { appearance: 'do', title: 'Maak het aanklikbare deel groot genoeg voor er ook tekst toe te voegen.', description: 'Toevoegen van tekst aan een icoontje maakt het voor iedereen duidelijker waar de link naartoe gaat.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)('p', { children: (0, t.jsxs)('a', { href: 'https://www.linkedin.com/company/nl-design-system/', children: [' ', (0, t.jsx)('div', { children: 'LinkedIn' }), (0, t.jsx)('svg', { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '50x50', fill: 'currentColor', width: '24', height: '24', focusable: 'false', children: (0, t.jsx)('path', { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) })] }) }) }) }) }), '\n', (0, t.jsx)(i.$, { appearance: 'dont', title: 'Maak het aanklikbare te klein.', description: 'Dit voorbeeld is het icoontje 24 bij 24 pixels.', children: (0, t.jsx)(a.H, { language: 'html', children: () => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)('p', { children: (0, t.jsx)('a', { href: 'https://www.linkedin.com/company/nl-design-system/', 'aria-label': 'LinkedIn', children: (0, t.jsx)('svg', { role: 'presentation', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'data-supported-dps': '24x24', fill: 'currentColor', width: '24', height: '24', focusable: 'false', children: (0, t.jsx)('path', { d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' }) }) }) }) }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c();
   }
   function h(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'maak-interactieve-elementen-groot-genoeg', children: 'Maak interactieve elementen groot genoeg' }) }), '\n', (0, t.jsx)(n.p, { children: 'Zorg dat het aanwijsgebied (aanklikbare deel) van radio buttons, checkboxes en icons tenminste 24 bij 24 pixels groot is.' }), '\n', (0, t.jsx)(n.p, { children: 'Maar een aanklikbaar gebied van 44 bij 44 pixels, voor het aanklikbare deel, is veel gebruiksvriendelijker voor mensen met dikke vingers of een trillende hand. Houdt daarom een aanklikbaar gedeelte aan van tenminste 44 bij 44 pixels.' }), '\n', (0, t.jsxs)(n.p, { children: ['Adrian Roselli over doelgrootte in ', (0, t.jsx)(n.a, { href: 'https://adrianroselli.com/2019/06/target-size-and-2-5-5.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Target Size and 2.5.5' }) }), ': "Ongeacht het toegankelijkheidsniveau dat je wilt aanhouden, probeer ervoor te zorgen dat interactieve besturingselementen minimaal 44 bij 44 pixels groot zijn. Links in tekstblokken zijn uitgezonderd.".'] }), '\n', (0, t.jsxs)(n.p, { children: ['In ', (0, t.jsx)(n.a, { href: 'https://ishadeed.com/article/target-size', children: (0, t.jsx)('span', { lang: 'en', children: 'Designing better target sizes' }) }), ' legt Ahmad Shadeed duidelijk uit wat doelgrootte precies is en wat de impact is voor een gebruiker. Hij pleit ook voor een minimale doelgrootte van 44 bij 44 pixels.'] }), '\n', (0, t.jsxs)(n.p, { children: ["Google's Material Design kiest ook voor een groter aanklikgebied, ondersteund met gebruikersonderzoek. Dit wordt uitgelegd in de YouTube video ", (0, t.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=nTNwZXVRGdY&t=163s', children: (0, t.jsx)('span', { lang: 'en', children: 'Designing A11y with Material Design' }) }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.5.8/', children: 'Succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.5.5/', children: 'Succescriterium 2.5.5 Grootte van het aanwijsgebied (uitgebreid)' }) }), '\n'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const m = { title: 'Maak aanklikbare formuliervelden groot genoeg', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Invoerveld goed aanklikbaar', pagination_label: 'Invoerveld goed aanklikbaar', description: 'Richtlijnen om aanklikbare formuliervelden makkelijk te kunnen selecteren.', slug: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    k = {},
    b = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function j(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(g, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j();
   }
  },
  58639(e, n, l) {
   l.d(n, { H: () => k });
   var o = l(69284),
    t = l(46447),
    r = l(13526),
    s = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    h = l(30758),
    p = l(31186),
    u = l(86070);
   const g = ({ children: e }) => (0, u.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const m = ({ children: e }) => (0, u.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(t.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   m.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, u.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const k = ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: k = !0, children: b, container: j = 'document', language: x, designTokens: y }) => {
    const f = 'function' == typeof b ? b() : b,
     w = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
     _ = 'string' == typeof e ? e : p.qV(w || f),
     [z, A] = (0, h.useState)(_),
     [N, M] = (0, h.useState)(l);
    (0, h.useEffect)(() => {
     (async () => {
      const e = await d.Ay.format(_, { parser: x, plugins: [s.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      A(e);
     })();
    }, [_]);
    const C = (0, h.useId)();
    let S = h.Fragment;
    return (
     'paragraph' === j ? (S = g) : 'document' === j ? (S = m) : 'surface' === j && (S = v),
     (0, u.jsxs)('div', {
      className: (0, r.A)('nlds-canvas'),
      children: [
       f && (0, u.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, u.jsx)(S, { children: (0, u.jsx)(t.v$, { children: f }) }) }) }),
       k &&
        (0, u.jsx)('div', {
         className: (0, r.A)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(t.$n, {
          className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           M(!N);
          },
          'aria-expanded': N,
          'aria-controls': C,
          children: N ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       k &&
        (0, u.jsxs)('div', {
         className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: C,
         hidden: !N,
         children: [
          (0, u.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: z, trim: !0 }),
          n &&
           (0, u.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(t.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  69284(e, n, l) {
   l.d(n, { M: () => c });
   var o = l(46447),
    t = l(16194),
    r = l(30758),
    s = l(15638);
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
    const { title: h, type: p } = (0, r.useContext)(s.x),
     u = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(t.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: t, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, i.jsx)(o.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': u, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...t({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => r });
   var o = l(86070),
    t = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
