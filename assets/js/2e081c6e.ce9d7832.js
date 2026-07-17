'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [22151],
 {
  9386(e, n, l) {
   l.d(n, { H: () => b });
   var o = l(95822),
    r = l(46447),
    t = l(13526),
    s = l(68148),
    c = l(9016),
    i = l(69303),
    a = l(91635),
    d = l(30734),
    u = l(30758),
    m = l(31186),
    h = l(65904),
    p = l.n(h),
    g = l(51627),
    f = l(86070);
   const j = ({ children: e }) => (0, f.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, f.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, f.jsx)(r.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, f.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: (0, f.jsx)(r.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, f.jsx)(r.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const b = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        o = (0, m.qV)(l)
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
        r = p().highlight(o, p().languages[n], n);
       return (0, f.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, f.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: o } }), (0, f.jsx)(g.n, { children: (0, f.jsx)(g.K, { label: 'Code', children: (0, f.jsx)('pre', { className: 'language-html nl-code-block', children: (0, f.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: r } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: h = !0, children: p, container: g = 'document', language: b, designTokens: y }) => {
       const _ = 'function' == typeof p ? p() : p,
        k = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : m.qV(k || _),
        [N, A] = (0, u.useState)(w),
        [z, C] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: b, plugins: [s.A, c.Ay, i.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let F = u.Fragment;
       return (
        'paragraph' === g ? (F = j) : 'document' === g ? (F = x) : 'surface' === g && (F = v),
        (0, f.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          _ && (0, f.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, f.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, f.jsx)(F, { children: (0, f.jsx)(r.v$, { children: _ }) }) }) }),
          h &&
           (0, f.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, f.jsx)(r.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          h &&
           (0, f.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, f.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: b, textContent: N, trim: !0 }),
             n &&
              (0, f.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, f.jsx)(r.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  18439(e, n, l) {
   l.d(n, { R: () => s, x: () => c });
   var o = l(30758);
   const r = {},
    t = o.createContext(r);
   function s(e) {
    const n = o.useContext(t);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), o.createElement(t.Provider, { value: n }, e.children));
   }
  },
  22651(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => f, default: () => b, frontMatter: () => g, metadata: () => o, toc: () => x }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/error/location/index","title":"Zet de foutmeldingen bij de betreffende formuliervelden","description":"Richtlijnen voor positie van foutmeldingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/error/4-location/index.mdx","sourceDirName":"richtlijnen/formulieren/error/4-location","slug":"/richtlijnen/formulieren/foutmeldingen/plaatsing","permalink":"/richtlijnen/formulieren/foutmeldingen/plaatsing","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/4-location/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zet de foutmeldingen bij de betreffende formuliervelden","title_sm":"Plaatsing foutmelding","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing foutmelding","pagination_label":"Plaatsing foutmelding","description":"Richtlijnen voor positie van foutmeldingen in een formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/plaatsing","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Duidelijke foutmeldingen","permalink":"/richtlijnen/formulieren/foutmeldingen/duidelijk"},"next":{"title":"HTML-formuliervalidatie","permalink":"/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie"}}');
   var r = l(86070),
    t = l(18439),
    s = l(78734),
    c = l(9386),
    i = l(88022);
   function a(e) {
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(i.$, { appearance: 'do', title: 'Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.', children: (0, r.jsx)(c.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'wachtwoord2', children: 'Nieuw wachtwoord' }) }), (0, r.jsx)('p', { id: 'description-wachtwoord2', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)('p', { id: 'error-wachtwoord2', children: 'Invoerfout: Je gekozen wachtwoord is te kort.' }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { id: 'wachtwoord2', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord2 error-wachtwoord2' }) })] }) }) }), '\n', (0, r.jsx)(i.$, { appearance: 'dont', title: 'Description boven het formulierveld en foutmelding eronder plaatsen.', children: (0, r.jsx)(c.H, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)('p', { children: (0, r.jsx)('label', { htmlFor: 'wachtwoord4', children: 'Nieuw wachtwoord' }) }), (0, r.jsx)('p', { id: 'description-wachtwoord4', children: 'Kies een wachtwoord van minimaal 8 karakters lang.' }), (0, r.jsx)('p', { children: (0, r.jsx)('input', { id: 'wachtwoord4', type: 'password', name: 'nieuw-wachtwoord', 'aria-describedby': 'description-wachtwoord4 error-wachtwoord4' }) }), (0, r.jsx)('p', { id: 'error-wachtwoord4', children: 'Invoerfout: Je gekozen wachtwoord is te kort.' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a();
   }
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'zet-de-foutmeldingen-bij-de-betreffende-formuliervelden', children: 'Zet de foutmeldingen bij de betreffende formuliervelden' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Voor foutmeldingen geldt hetzelfde als voor descriptions: de beste locatie is boven het formulierveld. Bovendien moet de foutmelding ', (0, r.jsx)(n.code, { children: 'aria-describedby' }), ' gekoppeld zijn aan het formulierveld.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hoe dit te doen is beschreven bij de richtlijn ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing/', children: 'Plaats descriptions tussen label en formulierveld' }), '.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'Zet de foutmeldingen bij de betreffende formuliervelden', title_sm: 'Plaatsing foutmelding', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing foutmelding', pagination_label: 'Plaatsing foutmelding', description: 'Richtlijnen voor positie van foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    f = void 0,
    j = {},
    x = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function v(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v();
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => i, n: () => c });
   var o = l(13526),
    r = l(96345),
    t = l(37168),
    s = l(86070);
   const c = ({ className: e, ...n }) => {
     const l = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, s.jsx)('div', { className: l, children: n.children });
    },
    i = ({ className: e, label: n, heading: l, headingLevel: c, headingApperance: i, ...a }) => {
     const d = (0, o.A)('utrecht-accordion__section', e);
     return (0, s.jsxs)('details', { className: d, ...a, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(r.A, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [l && (0, s.jsx)(t.D, { level: c, appearance: i, children: l }), n] })] }) }), (0, s.jsx)('div', { className: 'utrecht-accordion__panel', children: a.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => c, RM: () => t });
   var o = l(86070),
    r = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var o = l(4077),
    r = l(58315),
    t = l(46447),
    s = l(13526),
    c = l(45980),
    i = l(30758),
    a = l(86070);
   const d = (0, i.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: i, figure: u }) => {
     const m = { do: 'Doen', dont: 'Niet doen' },
      h = u ? 'figure' : 'div',
      p = u ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, a.jsx)(c.oz, { children: l }) : l;
     return (0, a.jsxs)(h, { className: (0, s.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.dont })] }), (0, a.jsx)(t.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.fz, { className: (0, s.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: m.do })] }), (0, a.jsx)(t.fz, { children: e })] }), g] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: m[n] }, children: i }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => a });
   var o = l(46447),
    r = l(16194),
    t = l(30758),
    s = l(88022);
   const c = {
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
   function a({ lineNumber: e, syntax: n, textContent: l, trim: a }) {
    let d = l;
    const { title: u, type: m } = (0, t.useContext)(s.x),
     h = (0, t.useId)();
    return (a && (d = d.trim()), (0, i.jsx)(r.f4, { theme: c, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: r, getTokenProps: t }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, i.jsx)(o.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...r({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
