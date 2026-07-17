'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [25974],
 {
  9386(e, n, l) {
   l.d(n, { H: () => f });
   var r = l(95822),
    s = l(46447),
    t = l(13526),
    o = l(68148),
    i = l(9016),
    a = l(69303),
    c = l(91635),
    d = l(30734),
    u = l(30758),
    p = l(31186),
    m = l(65904),
    h = l.n(m),
    g = l(51627),
    j = l(86070);
   const v = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(s.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(s.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, j.jsx)(s.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ children: e, language: n }) => {
       const l = 'function' == typeof e ? e() : e,
        r = (0, p.qV)(l)
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
        s = h().highlight(r, h().languages[n], n);
       return (0, j.jsxs)('div', { className: 'ma-canvas-astro', children: [(0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: r } }), (0, j.jsx)(g.n, { children: (0, j.jsx)(g.K, { label: 'Code', children: (0, j.jsx)('pre', { className: 'language-html nl-code-block', children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: s } }) }) }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: l = !1, displayCode: m = !0, children: h, container: g = 'document', language: f, designTokens: b }) => {
       const k = 'function' == typeof h ? h() : h,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        N = 'string' == typeof e ? e : p.qV(_ || k),
        [w, A] = (0, u.useState)(N),
        [z, S] = (0, u.useState)(l);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await d.Ay.format(N, { parser: f, plugins: [o.A, i.Ay, a.Ay, c.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         A(e);
        })();
       }, [N]);
       const C = (0, u.useId)();
       let D = u.Fragment;
       return (
        'paragraph' === g ? (D = v) : 'document' === g ? (D = x) : 'surface' === g && (D = y),
        (0, j.jsxs)('div', {
         className: (0, t.A)('nlds-canvas'),
         children: [
          k && (0, j.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: b, children: (0, j.jsx)(D, { children: (0, j.jsx)(s.v$, { children: k }) }) }) }),
          m &&
           (0, j.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(s.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
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
           (0, j.jsxs)('div', {
            className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: C,
            hidden: !z,
            children: [
             (0, j.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: w, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(s.$n, {
                className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
   l.d(n, { R: () => o, x: () => i });
   var r = l(30758);
   const s = {},
    t = r.createContext(s);
   function o(e) {
    const n = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), r.createElement(t.Provider, { value: n }, e.children));
   }
  },
  39906(e, n, l) {
   (l.r(n), l.d(n, { assets: () => v, contentTitle: () => j, default: () => f, frontMatter: () => g, metadata: () => r, toc: () => x }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/error/clarity/index","title":"Schrijf een duidelijke foutmelding","description":"Richtlijnen voor duidelijke foutmeldingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/error/3-clarity/index.mdx","sourceDirName":"richtlijnen/formulieren/error/3-clarity","slug":"/richtlijnen/formulieren/foutmeldingen/duidelijk","permalink":"/richtlijnen/formulieren/foutmeldingen/duidelijk","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/3-clarity/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Schrijf een duidelijke foutmelding","title_sm":"Duidelijke foutmeldingen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Duidelijke foutmeldingen","pagination_label":"Duidelijke foutmeldingen","description":"Richtlijnen voor duidelijke foutmeldingen in een formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/duidelijk","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Fouten beschrijven","permalink":"/richtlijnen/formulieren/foutmeldingen/beschrijven"},"next":{"title":"Plaatsing foutmelding","permalink":"/richtlijnen/formulieren/foutmeldingen/plaatsing"}}');
   var s = l(86070),
    t = l(18439),
    o = l(78734),
    i = l(9386),
    a = l(88022);
   function c(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'Leg uit waarom een datum wordt afgekeurd.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'passport-validity', children: 'Geldig tot' }) }), (0, s.jsx)('p', { id: 'description-passport-validity', children: 'Invoerfout: De geldigheidsdatum van uw paspoort moet in de toekomst liggen.' }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'passport-validity', type: 'text', name: 'passport-validity', 'aria-describedby': 'description-passport-validity' }) })] }) }) }), '\n', (0, s.jsx)(a.$, { appearance: 'do', title: 'Geef een voorbeeld van wat er verwacht wordt.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'email', children: 'E-mail' }) }), (0, s.jsx)('p', { id: 'description-email', children: 'Invoerfout: Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.' }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'email', type: 'email', name: 'email', 'aria-describedby': 'description-email' }) })] }) }) }), '\n', (0, s.jsx)(a.$, { appearance: 'dont', title: 'Alleen beschrijven dat het veld verplicht is, zonder toelichting dat er informatie mist of aan welke voorwaarde niet is voldaan.', children: (0, s.jsx)(i.H, { language: 'html', children: () => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)('p', { children: (0, s.jsx)('label', { htmlFor: 'passport-validity-2', children: 'Geldig tot' }) }), (0, s.jsx)('p', { id: 'description-passport-validity-2', children: 'Invoerfout: Dit veld is verplicht.' }), (0, s.jsx)('p', { children: (0, s.jsx)('input', { id: 'passport-validity-2', 'aria-invalid': 'false', type: 'text', name: 'passport-validity-2', 'aria-describedby': 'description-passport-validity-2' }) })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'schrijf-een-duidelijke-foutmelding', children: 'Schrijf een duidelijke foutmelding' }) }), '\n', (0, s.jsx)(n.p, { children: '"Dit veld is verplicht" geeft onvoldoende informatie. Een op maat geschreven foutmelding geeft de gebruiker veel meer houvast.' }), '\n', (0, s.jsx)(n.p, { children: 'Geef de gebruiker ook nooit de schuld. De meeste mensen worstelen met alle informatie en functionaliteit op het web. Help gebruikers zo goed mogelijk om het formulier te versturen.' }), '\n', (0, s.jsx)(n.p, { children: 'Maak foutmeldingen daarom zo veel mogelijk beschrijvend en op maat. Schrijf in plaats van "Ongeldige invoer" of "Dit veld is verplicht" bijvoorbeeld:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Vul een geldig e-mailadres in, bijvoorbeeld ', (0, s.jsx)(n.a, { href: 'mailto:naam@voorbeeld.nl', children: 'naam@voorbeeld.nl' }), '.'] }), '\n', (0, s.jsx)(n.li, { children: 'De geldigheidsdatum van uw paspoort moet in de toekomst zijn.' }), '\n', (0, s.jsx)(n.li, { children: 'Vul het huisnummer in zodat wij je bestelling kunnen opsturen.' }), '\n'] }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik een punt aan het eind van de foutmelding (of andere melding). Dan stopt de ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' even en is het duidelijker dat de foutmelding apart een zin is.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Het design system van GOV.UK geeft duidelijke (Engelstalige) informatie over de tekst van foutmeldingen ', (0, s.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise', children: (0, s.jsx)('span', { lang: 'en', children: 'Be clear and concise' }) }), '. In de video ', (0, s.jsx)(n.a, { href: 'https://www.nngroup.com/videos/usability-heuristic-recognize-errors/', children: (0, s.jsx)('span', { lang: 'en', children: 'Help Users Recognize, Diagnose, and Recover from Errors' }) }), ' geeft de Nielsen Norman Group tips voor goede hulp aan gebruikers voor het verhelpen van fouten.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.3/', children: 'Succescriterium 3.3.3 Foutsuggestie' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m(e);
   }
   const g = { title: 'Schrijf een duidelijke foutmelding', title_sm: 'Duidelijke foutmeldingen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Duidelijke foutmeldingen', pagination_label: 'Duidelijke foutmeldingen', description: 'Richtlijnen voor duidelijke foutmeldingen in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/duidelijk', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    v = {},
    x = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function y(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(h, {}), '\n', (0, s.jsx)(o.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(y, { ...e }) }) : y();
   }
  },
  51627(e, n, l) {
   l.d(n, { K: () => a, n: () => i });
   var r = l(13526),
    s = l(96345),
    t = l(37168),
    o = l(86070);
   const i = ({ className: e, ...n }) => {
     const l = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', e);
     return (0, o.jsx)('div', { className: l, children: n.children });
    },
    a = ({ className: e, label: n, heading: l, headingLevel: i, headingApperance: a, ...c }) => {
     const d = (0, r.A)('utrecht-accordion__section', e);
     return (0, o.jsxs)('details', { className: d, ...c, children: [(0, o.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, o.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, o.jsx)('span', { className: 'nl-button__icon-start', children: (0, o.jsx)(s.A, {}) }), (0, o.jsxs)('span', { className: 'nl-button__label', children: [l && (0, o.jsx)(t.D, { level: i, appearance: a, children: l }), n] })] }) }), (0, o.jsx)('div', { className: 'utrecht-accordion__panel', children: c.children })] });
    };
  },
  78734(e, n, l) {
   l.d(n, { Ay: () => i, RM: () => t });
   var r = l(86070),
    s = l(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  88022(e, n, l) {
   l.d(n, { $: () => u, x: () => d });
   var r = l(4077),
    s = l(58315),
    t = l(46447),
    o = l(13526),
    i = l(45980),
    a = l(30758),
    c = l(86070);
   const d = (0, a.createContext)({}),
    u = ({ title: e, appearance: n, description: l, children: a, figure: u }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = u ? 'figure' : 'div',
      h = u ? 'figcaption' : 'div',
      g = 'string' == typeof l ? (0, c.jsx)(i.oz, { children: l }) : l;
     return (0, c.jsxs)(m, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, c.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, c.jsx)(t.fz, { children: e })] }) : (0, c.jsxs)(c.Fragment, { children: [(0, c.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, c.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, c.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, c.jsx)(t.fz, { children: e })] }), g] }), (0, c.jsx)('div', { className: 'nlds-guideline__example', children: (0, c.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  95822(e, n, l) {
   l.d(n, { M: () => c });
   var r = l(46447),
    s = l(16194),
    t = l(30758),
    o = l(88022);
   const i = {
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
    const { title: u, type: p } = (0, t.useContext)(o.x),
     m = (0, t.useId)();
    return (c && (d = d.trim()), (0, a.jsx)(s.f4, { theme: i, code: d, language: n || '', children: ({ style: n, tokens: l, getLineProps: s, getTokenProps: t }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: n, children: l.map((n, l) => (0, a.jsxs)('span', { ...s({ line: n }), children: [e && (0, a.jsx)('span', { children: l + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, l)) })] }) }));
   }
  },
 },
]);
