'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [4168],
 {
  9386(e, n, l) {
   l.d(n, { H: () => x });
   var s = l(95822),
    o = l(46447),
    r = l(13526),
    t = l(68148),
    a = l(9016),
    i = l(69303),
    c = l(91635),
    d = l(30734),
    m = l(30758),
    u = l(31186),
    p = l(65904),
    h = l.n(p),
    g = l(51627),
    v = l(86070);
   const j = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, v.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   j.displayName = 'ParagraphContainer';
   const y = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, v.jsx)(o.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   y.displayName = 'DocumentContainer';
   const b = ({ children: e }) => (0, v.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   b.displayName = 'SurfaceContainer';
   const x = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        s = (0, u.qV)(l)
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
        o = h().highlight(s, h().languages[n], n);
       return (0, v.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, v.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: s } }), (0, v.jsx)(g.n, { children: (0, v.jsx)(g.K, { label: 'Code', children: (0, v.jsx)('pre', { className: 'language-html nl-code-block', children: (0, v.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: o } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: p = !0, children: h, container: g = 'document', language: x, designTokens: f }) => {
       const _ = 'function' == typeof h ? h() : h,
        k = 'function' == typeof e ? e() : (0, m.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : u.qV(k || _),
        [N, A] = (0, m.useState)(w),
        [z, C] = (0, m.useState)(l);
       (0, m.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(w, { parser: x, plugins: [t.A, a.Ay, i.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [w]);
       const S = (0, m.useId)();
       let L = m.Fragment;
       return (
        'paragraph' === g ? (L = j) : 'document' === g ? (L = y) : 'surface' === g && (L = b),
        (0, v.jsxs)('div', {
         className: (0, r.A)('nlds-canvas'),
         children: [
          _ && (0, v.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, v.jsx)(L, { children: (0, v.jsx)(o.v$, { children: _ }) }) }) }),
          p &&
           (0, v.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar'),
            children: (0, v.jsx)(o.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!z);
             },
             'aria-expanded': z,
             'aria-controls': S,
             children: z ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          p &&
           (0, v.jsxs)('div', {
            className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !z,
            children: [
             (0, v.jsx)(s.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
             n &&
              (0, v.jsx)('div', {
               className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, v.jsx)(o.$n, {
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
  18439(e, n, l) {
   l.d(n, { R: () => t, x: () => a });
   var s = l(30758);
   const o = {},
    r = s.createContext(o);
   function t(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), s.createElement(r.Provider, { value: n }, e.children));
   }
  },
  50784(e, n, l) {
   (l.r(n), l.d(n, { assets: () => j, contentTitle: () => v, default: () => x, frontMatter: () => g, metadata: () => s, toc: () => y }));
   const s = JSON.parse('{"id":"richtlijnen/formulieren/questions/why/index","title":"Leg uit waarom informatie nodig is","description":"Richtlijnen over uitleggen waarom informatie nodig is.","source":"@site/docs/richtlijnen/formulieren/questions/1-why/index.mdx","sourceDirName":"richtlijnen/formulieren/questions/1-why","slug":"/richtlijnen/formulieren/vragen/leg-uit-waarom","permalink":"/richtlijnen/formulieren/vragen/leg-uit-waarom","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/1-why/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Leg uit waarom informatie nodig is","title_sm":"Waarom stel je de vraag","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Waarom stel je de vraag","pagination_label":"Waarom stel je de vraag","description":"Richtlijnen over uitleggen waarom informatie nodig is.","slug":"/richtlijnen/formulieren/vragen/leg-uit-waarom","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Uit te vragen informatie in een formulier","permalink":"/richtlijnen/formulieren/vragen/"},"next":{"title":"Waarom is informatie nodig","permalink":"/richtlijnen/formulieren/vragen/check-noodzaak"}}');
   var o = l(86070),
    r = l(18439),
    t = l(78734),
    a = l(9386),
    i = l(88022);
   function c(e) {
    const n = { h2: 'h2', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(i.$, { appearance: 'do', title: 'Leg het doel uit.', description: 'Met uitleg weet de gebruiker waar die aan toe is.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'email', children: 'E-mailadres' }) }), (0, o.jsx)('p', { id: 'email-description', children: 'We hebben uw e-mailadres nodig om een afspraakbevestiging te kunnen sturen.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { 'aria-describedby': 'email-description', autoComplete: 'email', id: 'email', type: 'email' }) })] }) }) }), '\n', (0, o.jsx)(i.$, { appearance: 'dont', title: 'Privacygevoelige informatie vragen zonder uitleg waarom deze gegevens nodig zijn.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'bsn', children: 'Burgerservicenummer' }) }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'bsn', type: 'text' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
   function m(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'leg-uit-waarom-informatie-nodig-is', children: 'Leg uit waarom informatie nodig is' }) }), '\n', (0, o.jsx)(n.p, { children: 'Soms lijkt een vraag overbodig, terwijl deze informatie essentieel is voor het verwerken van de gegevens. In zulke gevallen is het een goed idee een korte uitleg toe te voegen, om bijvoorbeeld het doel te beschrijven.' }), '\n', (0, o.jsx)(n.p, { children: 'Vertel waarom je deze informatie nodig hebt en wat je ermee doet. Uitleg geeft duidelijkheid aan de gebruiker en voorkomt onzekerheid bij het invullen.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'Leg uit waarom informatie nodig is', title_sm: 'Waarom stel je de vraag', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Waarom stel je de vraag', pagination_label: 'Waarom stel je de vraag', description: 'Richtlijnen over uitleggen waarom informatie nodig is.', slug: '/richtlijnen/formulieren/vragen/leg-uit-waarom', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    j = {},
    y = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...t.RM];
   function b(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(u, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(t.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b();
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => i, n: () => a });
   var s = l(13526),
    o = l(96345),
    r = l(37168),
    t = l(86070);
   const a = ({ className: e, ...n }) => {
     const l = (0, s.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, t.jsx)('div', { className: l, children: n.children });
    },
    i = ({ className: e, label: n, heading: l, headingLevel: a, headingApperance: i, ...c }) => {
     const d = (0, s.A)('utrecht-accordion__section', e);
     return (0, t.jsxs)('details', { className: d, ...c, children: [(0, t.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, t.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, t.jsx)('span', { className: 'nl-button__icon-start', children: (0, t.jsx)(o.A, {}) }), (0, t.jsxs)('span', { className: 'nl-button__label', children: [l && (0, t.jsx)(r.D, { level: a, appearance: i, children: l }), n] })] }) }), (0, t.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => a, RM: () => r });
   var s = l(86070),
    o = l(18439);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, s.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => m, x: () => d });
   var s = l(4077),
    o = l(58315),
    r = l(46447),
    t = l(13526),
    a = l(45980),
    i = l(30758),
    c = l(86070);
   const d = (0, i.createContext)({}),
    m = ({ title: e, appearance: n, description: l, children: i, figure: m }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = m ? 'figure' : 'div',
      h = m ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, c.jsx)(a.oz, { children: l }) : l;
     return (0, c.jsxs)(p, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, c.jsx)(r.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, c.jsx)(r.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: i }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => c });
   var s = l(46447),
    o = l(16194),
    r = l(30758),
    t = l(88022);
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
    const { title: m, type: u } = (0, r.useContext)(t.x),
     p = (0, r.useId)();
    return (c && (d = d.trim()), (0, i.jsx)(o.f4, { theme: a, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: r }) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', m ? ': ' : ' ', m] }), (0, i.jsx)(s.NG, { tabIndex: 0, role: m ? 'region' : void 0, 'aria-labelledby': p, style: n, children: l.map((n, l) => (0, i.jsxs)('span', { ...o({ line: n }), children: [e && (0, i.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, i.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
