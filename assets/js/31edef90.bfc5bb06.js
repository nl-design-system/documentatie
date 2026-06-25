'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25974],
 {
  18127(e, n, l) {
   l.d(n, { H: () => v });
   var i = l(95822),
    o = l(46447),
    t = l(13526),
    r = l(68148),
    s = l(9016),
    d = l(69303),
    a = l(91635),
    c = l(30734),
    u = l(30758),
    p = l(31186),
    m = l(86070);
   const h = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   h.displayName = 'ParagraphContainer';
   const g = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   g.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const v = ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: v = !0, children: y, container: f = 'document', language: x, designTokens: b }) => {
    const k = 'function' == typeof y ? y() : y,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : p.qV(_ || k),
     [N, z] = (0, u.useState)(w),
     [A, S] = (0, u.useState)(l);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(w, { parser: x, plugins: [r.A, s.Ay, d.Ay, a.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [w]);
    const C = (0, u.useId)();
    let D = u.Fragment;
    return (
     'paragraph' === f ? (D = h) : 'document' === f ? (D = g) : 'surface' === f && (D = j),
     (0, m.jsxs)('div', {
      className: (0, t.A)('nlds-canvas'),
      children: [
       k && (0, m.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: b, children: (0, m.jsx)(D, { children: (0, m.jsx)(o.v$, { children: k }) }) }) }),
       v &&
        (0, m.jsx)('div', {
         className: (0, t.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(o.$n, {
          className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           S(!A);
          },
          'aria-expanded': A,
          'aria-controls': C,
          children: A ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       v &&
        (0, m.jsxs)('div', {
         className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: C,
         hidden: !A,
         children: [
          (0, m.jsx)(i.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(o.$n, {
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
   l.d(n, { R: () => r, x: () => s });
   var i = l(30758);
   const o = {},
    t = i.createContext(o);
   function r(e) {
    const n = i.useContext(t);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), i.createElement(t.Provider, { value: n }, e.children));
   }
  },
  39906(e, n, l) {
   (l.r(n), l.d(n, { assets: () => v, contentTitle: () => j, default: () => x, frontMatter: () => g, metadata: () => i, toc: () => y }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/error/clarity/index","title":"Schrijf een duidelijke foutmelding","description":"Richtlijnen voor duidelijke foutmeldingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/error/3-clarity/index.mdx","sourceDirName":"richtlijnen/formulieren/error/3-clarity","slug":"/richtlijnen/formulieren/foutmeldingen/duidelijk","permalink":"/richtlijnen/formulieren/foutmeldingen/duidelijk","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/3-clarity/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Schrijf een duidelijke foutmelding","title_sm":"Duidelijke foutmeldingen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Duidelijke foutmeldingen","pagination_label":"Duidelijke foutmeldingen","description":"Richtlijnen voor duidelijke foutmeldingen in een formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/duidelijk","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Fouten beschrijven","permalink":"/richtlijnen/formulieren/foutmeldingen/beschrijven"},"next":{"title":"Plaatsing foutmelding","permalink":"/richtlijnen/formulieren/foutmeldingen/plaatsing"}}');
   var o = l(86070),
    t = l(18439),
    r = l(78734),
    s = l(18127),
    d = l(88022);
   function a(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(d.$, { appearance: 'do', title: 'Leg uit waarom een datum wordt afgekeurd.', children: (0, o.jsx)(s.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'passport-validity', children: 'Geldig tot' }) }), (0, o.jsx)('p', { id: 'description-passport-validity', children: 'Invoerfout: De geldigheidsdatum van uw paspoort moet in de toekomst liggen.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'passport-validity', type: 'text', name: 'passport-validity', 'aria-describedby': 'description-passport-validity' }) })] }) }) }), '\n', (0, o.jsx)(d.$, { appearance: 'do', title: 'Geef een voorbeeld van wat er verwacht wordt.', children: (0, o.jsx)(s.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'email', children: 'E-mail' }) }), (0, o.jsx)('p', { id: 'description-email', children: 'Invoerfout: Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'email', type: 'email', name: 'email', 'aria-describedby': 'description-email' }) })] }) }) }), '\n', (0, o.jsx)(d.$, { appearance: 'dont', title: 'Alleen beschrijven dat het veld verplicht is, zonder toelichting dat er informatie mist of aan welke voorwaarde niet is voldaan.', children: (0, o.jsx)(s.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)('p', { children: (0, o.jsx)('label', { htmlFor: 'passport-validity-2', children: 'Geldig tot' }) }), (0, o.jsx)('p', { id: 'description-passport-validity-2', children: 'Invoerfout: Dit veld is verplicht.' }), (0, o.jsx)('p', { children: (0, o.jsx)('input', { id: 'passport-validity-2', 'aria-invalid': 'false', type: 'text', name: 'passport-validity-2', 'aria-describedby': 'description-passport-validity-2' }) })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   function u(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'schrijf-een-duidelijke-foutmelding', children: 'Schrijf een duidelijke foutmelding' }) }), '\n', (0, o.jsx)(n.p, { children: '"Dit veld is verplicht" geeft onvoldoende informatie. Een op maat geschreven foutmelding geeft de gebruiker veel meer houvast.' }), '\n', (0, o.jsx)(n.p, { children: 'Geef de gebruiker ook nooit de schuld. De meeste mensen worstelen met alle informatie en functionaliteit op het web. Help gebruikers zo goed mogelijk om het formulier te versturen.' }), '\n', (0, o.jsx)(n.p, { children: 'Maak foutmeldingen daarom zo veel mogelijk beschrijvend en op maat. Schrijf in plaats van "Ongeldige invoer" of "Dit veld is verplicht" bijvoorbeeld:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Vul een geldig e-mailadres in, bijvoorbeeld ', (0, o.jsx)(n.a, { href: 'mailto:naam@voorbeeld.nl', children: 'naam@voorbeeld.nl' }), '.'] }), '\n', (0, o.jsx)(n.li, { children: 'De geldigheidsdatum van uw paspoort moet in de toekomst zijn.' }), '\n', (0, o.jsx)(n.li, { children: 'Vul het huisnummer in zodat wij je bestelling kunnen opsturen.' }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik een punt aan het eind van de foutmelding (of andere melding). Dan stopt de ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' even en is het duidelijker dat de foutmelding apart een zin is.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Het design system van GOV.UK geeft duidelijke (Engelstalige) informatie over de tekst van foutmeldingen ', (0, o.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise', children: (0, o.jsx)('span', { lang: 'en', children: 'Be clear and concise' }) }), '. In de video ', (0, o.jsx)(n.a, { href: 'https://www.nngroup.com/videos/usability-heuristic-recognize-errors/', children: (0, o.jsx)('span', { lang: 'en', children: 'Help Users Recognize, Diagnose, and Recover from Errors' }) }), ' geeft de Nielsen Norman Group tips voor goede hulp aan gebruikers voor het verhelpen van fouten.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.3/', children: 'Succescriterium 3.3.3 Foutsuggestie' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
   const g = { title: 'Schrijf een duidelijke foutmelding', title_sm: 'Duidelijke foutmeldingen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Duidelijke foutmeldingen', pagination_label: 'Duidelijke foutmeldingen', description: 'Richtlijnen voor duidelijke foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/duidelijk', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    v = {},
    y = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...r.RM];
   function f(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(p, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(h, {}), '\n', (0, o.jsx)(r.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(f, { ...e }) }) : f();
   }
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => s, RM: () => t });
   var i = l(86070),
    o = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => u, x: () => c });
   var i = l(4077),
    o = l(58315),
    t = l(46447),
    r = l(13526),
    s = l(45980),
    d = l(30758),
    a = l(86070);
   const c = (0, d.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: d, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, a.jsx)(s.oz, { children: l }) : l;
     return (0, a.jsxs)(m, { className: (0, r.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, a.jsx)(t.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.fz, { className: (0, r.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(i.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, a.jsx)(t.fz, { children: e })] }), g] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: e, type: p[n] }, children: d }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => a });
   var i = l(46447),
    o = l(16194),
    t = l(30758),
    r = l(88022);
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
   var d = l(86070);
   function a({ lineNumber: e, syntax: n, textContent: l, trim: a }) {
    let c = l;
    const { title: u, type: p } = (0, t.useContext)(r.x),
     m = (0, t.useId)();
    return (a && (c = c.trim()), (0, d.jsx)(o.f4, { theme: s, code: c, language: n || '', children: ({ style: n, tokens: l, getLineProps: o, getTokenProps: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, d.jsx)(i.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, d.jsxs)('span', { ...o({ line: n }), children: [e && (0, d.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, d.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
