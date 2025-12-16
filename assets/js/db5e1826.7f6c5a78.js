'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [42684],
 {
  8649: (e, n, r) => {
   r.d(n, { H: () => x });
   var l = r(16609),
    i = r(68873),
    t = r(13526),
    o = r(58713),
    s = r(87347),
    a = r(39644),
    d = r(92406),
    c = r(63313),
    h = r(30758),
    u = r(31186),
    p = r(86070);
   const v = ({ children: e }) => (0, p.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(i.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(i.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const m = ({ children: e }) => (0, p.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(i.yo, { className: (0, t.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   m.displayName = 'DocumentContainer';
   const j = ({ children: e }) => (0, p.jsx)(i.ui, { className: 'nlds-canvas__example-surface', children: e });
   j.displayName = 'SurfaceContainer';
   const x = ({ code: e, copy: n = !0, defaultExpandedCode: r = !1, displayCode: x = !0, children: g, container: b = 'document', language: f, designTokens: k }) => {
    const y = 'function' == typeof g ? g() : g,
     w = 'function' == typeof e ? e() : (0, h.isValidElement)(e) ? e : void 0,
     _ = 'string' == typeof e ? e : u.qV(w || y),
     [z, T] = (0, h.useState)(_),
     [R, F] = (0, h.useState)(r);
    (0, h.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(_, { parser: f, plugins: [o.A, s.Ay, a.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      T(e);
     })();
    }, [_]);
    const N = (0, h.useId)();
    let A = h.Fragment;
    return (
     'paragraph' === b ? (A = v) : 'document' === b ? (A = m) : 'surface' === b && (A = j),
     (0, p.jsxs)('div', {
      className: (0, t.A)('nlds-canvas'),
      children: [
       y && (0, p.jsx)('div', { className: (0, t.A)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(A, { children: (0, p.jsx)(i.v$, { children: y }) }) }) }),
       x &&
        (0, p.jsx)('div', {
         className: (0, t.A)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(i.$n, {
          className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           F(!R);
          },
          'aria-expanded': R,
          'aria-controls': N,
          children: R ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       x &&
        (0, p.jsxs)('div', {
         className: (0, t.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: N,
         hidden: !R,
         children: [
          (0, p.jsx)(l.M, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: z, trim: !0 }),
          n &&
           (0, p.jsx)('div', {
            className: (0, t.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(i.$n, {
             className: (0, t.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  16609: (e, n, r) => {
   r.d(n, { M: () => d });
   var l = r(68873),
    i = r(16194),
    t = r(30758),
    o = r(50124);
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
   var a = r(86070);
   function d({ lineNumber: e, syntax: n, textContent: r, trim: d }) {
    let c = r;
    const { title: h, type: u } = (0, t.useContext)(o.x),
     p = (0, t.useId)();
    return d && (c = c.trim()), (0, a.jsx)(i.f4, { theme: s, code: c, language: n || '', children: ({ style: n, tokens: r, getLineProps: i, getTokenProps: t }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: p, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(l.NG, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': p, style: n, children: r.map((n, r) => (0, a.jsxs)('span', { ...i({ line: n }), children: [e && (0, a.jsx)('span', { children: r + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...t({ token: e }) }, n)), '\n'] }, r)) })] }) });
   }
  },
  46563: (e, n, r) => {
   r.d(n, { o: () => c });
   var l = r(85248),
    i = r(68873),
    t = r(86070);
   const o = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: l, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return r + l + i;
     }
     return r.toString();
    },
    s = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    a = (e) => ({ img: ({ src: n, ...r }) => (0, t.jsx)('img', { ...r, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...s[n - 1] };
      return (e.h1 = () => null), e;
     }
     return s[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: r = 1, baseUrl: i = '', components: o = {} }) => (0, t.jsx)(l.x, { components: { ...d(n, r), ...a(i), ...o }, children: e });
  },
  50124: (e, n, r) => {
   r.d(n, { $: () => c, x: () => d });
   var l = r(54736),
    i = r(26990),
    t = r(68873),
    o = r(13526),
    s = r(30758),
    a = r(86070);
   const d = (0, s.createContext)({}),
    c = ({ title: e, appearance: n, description: r, children: s, figure: c }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = c ? 'figure' : 'div',
      p = c ? 'figcaption' : 'div';
     return (0, a.jsxs)(u, { className: (0, o.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(p, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(i.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(t.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.fz, { className: (0, o.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(t.fz, { children: e })] }), r] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: h[n] }, children: s }) })] });
    };
  },
  78734: (e, n, r) => {
   r.d(n, { Ay: () => s, RM: () => t });
   var l = r(86070),
    i = r(85248);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, l.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, l.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, l.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, r) => {
   r.d(n, { R: () => o, x: () => s });
   var l = r(30758);
   const i = {},
    t = l.createContext(i);
   function o(e) {
    const n = l.useContext(t);
    return l.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), l.createElement(t.Provider, { value: n }, e.children);
   }
  },
  86225: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => T, contentTitle: () => z, default: () => N, frontMatter: () => _, metadata: () => l, toc: () => R });
   const l = JSON.parse('{"id":"richtlijnen/formulieren/help/show-required/README","title":"Vermeld duidelijk of een veld wel of niet verplicht is \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen","description":"Richtlijnen om duidelijk aan te geven welke velden een gebruiker kan overslaan in een formulier.","source":"@site/docs/richtlijnen/formulieren/help/1-show-required/README.mdx","sourceDirName":"richtlijnen/formulieren/help/1-show-required","slug":"/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/","permalink":"/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/1-show-required/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Vermeld duidelijk of een veld wel of niet verplicht is \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Optioneel of verplicht","pagination_label":"Optioneel of verplicht","description":"Richtlijnen om duidelijk aan te geven welke velden een gebruiker kan overslaan in een formulier.","slug":"/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Voorkom fouten in een formulier","permalink":"/richtlijnen/formulieren/voorkom-fouten/"},"next":{"title":"Wachtwoord plakken","permalink":"/richtlijnen/formulieren/voorkom-fouten/wachtwoord-plakken/"}}');
   var i = r(86070),
    t = r(85248),
    o = r(78734),
    s = r(46563);
   function a(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'vermeld-duidelijk-of-een-veld-wel-of-niet-verplicht-is', children: 'Vermeld duidelijk of een veld wel of niet verplicht is' }) }), '\n', (0, i.jsx)(n.p, { children: 'Laat gebruikers duidelijk weten welke informatie ingevuld moeten worden om een formulier te verzenden. Hiervoor heb je twee opties.' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Door de ', (0, i.jsx)(n.strong, { children: 'niet-verplichte' }), ' velden te markeren.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Door de ', (0, i.jsx)(n.strong, { children: 'verplichte' }), ' velden te markeren.'] }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Op basis van gebruikersonderzoek zouden wij de eerste optie aanbevelen.' }), '\n', (0, i.jsx)(n.p, { children: 'Plaats de uitleg over wel of niet verplichte velden altijd boven het formulier, zodat de gebruiker weet wat te verwachten bij het invullen.' }), '\n', (0, i.jsx)(n.p, { children: 'Maak de markering ook onderdeel van de labeltekst.' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruikers van ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' krijgen deze informatie daarnaast ook voorgelezen door ', (0, i.jsx)(n.code, { children: 'aria-required' }), ' of ', (0, i.jsx)(n.code, { children: 'required' }), ' in de code op te nemen bij de verplichte velden.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Door te helpen fouten te voorkomen voldoe van aan ', (0, i.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'WCAG-succescriterium 3.3.2 Labels of instructies' }), ' (niveau A).'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
   var c = r(8649),
    h = r(50124);
   function u(e) {
    const n = { button: 'button', form: 'form', h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, i.jsx)(h.$, { appearance: 'do', title: 'Geef boven het formulier aan hoe niet-verplichte velden worden aangegeven.', children: (0, i.jsx)(c.H, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Vul alles in. Als iets niet verplicht is, staat dat erbij.' }), (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { htmlFor: 'kleur1', children: 'Wat is je lievelingskleur' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur1', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, i.jsx)(n.label, { htmlFor: 'dier1', children: 'Wat is je lievelingsdier (niet verplicht)' }), (0, i.jsx)(n.input, { type: 'text', id: 'dier1', name: 'lievelingsdier' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] })] }) }) }), '\n', (0, i.jsx)(h.$, { appearance: 'dont', title: 'De gebruiker laten raden wat er al dan niet verplicht is.', children: (0, i.jsx)(c.H, { language: 'html', children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { htmlFor: 'kleur2', children: 'Wat is je lievelingskleur' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur2', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, i.jsx)(n.label, { htmlFor: 'dier2', children: 'Wat is je lievelingsdier' }), (0, i.jsx)(n.input, { type: 'text', id: 'dier2', name: 'lievelingsdier' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] }) }) }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
   function v(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'niet-verplichte-velden-markeren', children: 'Niet-verplichte velden markeren' }) }), '\n', (0, i.jsx)(n.p, { children: "Uitgaande van het gegeven dat je in formulieren enkel het broodnodige uitvraagt zullen de meeste velden verplicht zijn. Hierdoor vormen de niet-verplichte velden een uitzondering. Geef dit aan door bij de niet-verplichte velden de tekst '(niet verplicht)' in het label op te nemen." }), '\n', (0, i.jsx)(n.p, { children: "Gebruikersonderzoek over de toepassing van 'niet verplicht' versus 'verplicht':" }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://adamsilver.io/blog/how-to-highlight-required-and-optional-form-fields/', children: (0, i.jsx)('span', { lang: 'en', children: '4 common mistakes UI/UX designers make when trying to help users spot required form fields (and what user research shows is better)' }) }), ' van Adam Silver.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://www.lukew.com/ff/entry.asp?725', children: (0, i.jsx)('span', { lang: 'en', children: 'Blog post: Marking Required vs. Optional form fields' }) }), ' van Luke Wroblewski.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://ask.lukew.com/chat?id=f6862342-64d1-4de9-a28a-16f4fe614452', children: (0, i.jsx)('span', { lang: 'en', children: 'Chatbot answer: Required versus optional fields' }) }), ' van Luke Wroblewski.'] }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ": Het woord 'optioneel' kan te moeilijk zijn voor mensen die laaggeletterd zijn. Gebruik dus 'niet verplicht'."] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
   function j(e) {
    const n = { button: 'button', form: 'form', h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, i.jsx)(h.$, { appearance: 'do', title: 'Geef boven het formulier aan hoe verplichte velden worden aangegeven.', children: (0, i.jsx)(c.H, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als iets verplicht is, staat dit erbij.' }), (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { htmlFor: 'kleur3', children: 'Wat is je lievelingskleur (verplicht)' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur3', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, i.jsx)(n.label, { htmlFor: 'dier3', children: 'Wat is je lievelingsdier' }), (0, i.jsx)(n.input, { type: 'text', id: 'dier3', name: 'lievelingsdier' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] })] }) }) }), '\n', (0, i.jsx)(h.$, { appearance: 'do', title: 'Geef boven het formulier aan hoe verplichte velden worden aangegeven en leg uit wat asterisk betekent.', children: (0, i.jsx)(c.H, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als iets verplicht is, staat er een * bij.' }), (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { htmlFor: 'kleur4', children: 'Wat is je lievelingskleur *' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur24', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, i.jsx)(n.label, { htmlFor: 'dier4', children: 'Wat is je lievelingsdier' }), (0, i.jsx)(n.input, { type: 'text', id: 'dier4', name: 'lievelingsdier' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] })] }) }) }), '\n', (0, i.jsx)(h.$, { appearance: 'dont', title: 'Bij alle velden aangeven of het al dan niet verplicht is.', children: (0, i.jsx)(c.H, { language: 'html', children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { htmlFor: 'kleur5', children: 'Wat is je lievelingskleur (verplicht)' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur5', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, i.jsx)(n.label, { htmlFor: 'dier5', children: 'Wat is je lievelingsdier (niet verplicht)' }), (0, i.jsx)(n.input, { type: 'text', id: 'dier5', name: 'lievelingsdier' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] }) }) }) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j(e);
   }
   function g(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'verplichte-velden-markeren', children: 'Verplichte velden markeren' }) }), '\n', (0, i.jsx)(n.p, { children: "Zijn de meeste velden in een formulier 'niet verplicht'? Of is het technisch niet mogelijk om de niet-verplichte velden te markeren? Geef dit dan aan door bij de verplichte velden de tekst '(verplicht)' in het label op te nemen." }), '\n', (0, i.jsx)(n.p, { children: "Een populaire manier om verplichte velden aan te duiden is door in het label een asterisk '*' op te nemen. Dit heeft niet de voorkeur omdat dit een extra denkstap voor de gebruikers vergt, zoals blijkt uit bovenstaand gebruikersonderzoek." }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik je deze constructie toch omdat je CMS of plug-in alleen deze mogelijkheid biedt, leg dan boven het formulier uit wat de asterisk betekent. Een asterisk alleen bij het formulierveld is niet voldoende, niet iedereen bezit deze voorkennis.' }), '\n', (0, i.jsxs)(n.p, { children: ['Uit onderzoek van Elevenways blijkt dat de asterisk goed wordt voorgelezen door ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ': ', (0, i.jsx)(n.a, { href: 'https://elevenways.be/nl/artikels/hoe-screen-readers-speciale-tekens-lezen', children: 'Hoe screenreaders speciale tekens lezen: een update' }), '.\nDit is wel afhankelijk van hoe de asterisk ge\xefmplementeerd is. De test baseert zich op platte tekst, en niet op afbeeldingen, iconen of tekst die door middel van CSS toegevoegd is.'] })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
   function f(e) {
    const n = { button: 'button', form: 'form', h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, i.jsx)(h.$, { appearance: 'do', title: 'Gebruik aria-required om aan te geven of een veld verplicht is.', children: (0, i.jsx)(c.H, { language: 'html', children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { htmlFor: 'kleur8', children: 'Wat is je lievelingskleur (verplicht)' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur8', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] }) }) }) }), '\n', (0, i.jsx)(h.$, { appearance: 'do', title: 'Gebruik required om aan te geven of een veld verplicht is, in combinatie met novalidate.', children: (0, i.jsx)(c.H, { language: 'html', children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(n.form, { noValidate: !0, children: [(0, i.jsx)(n.label, { htmlFor: 'kleur9', children: 'Wat is je lievelingskleur (verplicht)' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur9', name: 'lievelingskleur', required: !0, 'aria-invalid': 'false' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] }) }) }) }), '\n', (0, i.jsx)(h.$, { appearance: 'dont', title: 'Geef helemaal niet aan of een veld verplicht is, en laat de gebruiker dit pas weten bij de foutmeldingen.', children: (0, i.jsx)(c.H, { language: 'html', children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { htmlFor: 'kleur10', children: 'Wat is je lievelingskleur' }), (0, i.jsx)(n.p, { id: 'fout10', children: 'Invoerfout: Vul de naam van een kleur in.' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur10', 'aria-describedby': 'fout10', name: 'lievelingskleur' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] }) }) }) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(f, { ...e }) }) : f(e);
   }
   function y(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'screenreaderfeedback', children: 'Screenreaderfeedback' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Vertel een gebruiker van hulptechnologie\xebn (zoals ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ') dat een veld verplicht is met het ARIA-attribuut ', (0, i.jsx)(n.code, { children: 'aria-required="true"' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Je kunt ook het HTML-attribuut ', (0, i.jsx)(n.code, { children: 'required' }), ' gebruiken in plaats van ', (0, i.jsx)(n.code, { children: 'aria-required' }), ', maar dit vereist ook het attribuut ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate', children: 'novalidate' }), ' in het ', (0, i.jsx)(n.code, { children: '<form>' }), ' element.\nNovalidate voorkomt dat de formuliervalidatie van de browser in werking treedt. Voor aria-required="true" hoeft dit niet. Alhoewel het gebruik van required in plaats van aria-required niet fout is, geven we daarom de voorkeur aan aria-required.'] })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(y, { ...e }) }) : y(e);
   }
   const _ = { title: 'Vermeld duidelijk of een veld wel of niet verplicht is \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Optioneel of verplicht', pagination_label: 'Optioneel of verplicht', description: 'Richtlijnen om duidelijk aan te geven welke velden een gebruiker kan overslaan in een formulier.', slug: '/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/', keywords: ['labels', 'formulier', 'design', 'code'] },
    z = void 0,
    T = {},
    R = [{ value: 'Optie 1: &#39;niet-verplichte&#39; velden markeren', id: 'optie-1-niet-verplichte-velden-markeren', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Optie 2: &#39;verplichte&#39; velden markeren', id: 'optie-2-verplichte-velden-markeren', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, ...o.RM];
   function F(e) {
    const n = { h2: 'h2', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(n.h2, { id: 'optie-1-niet-verplichte-velden-markeren', children: "Optie 1: 'niet-verplichte' velden markeren" }), '\n', (0, i.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(m, {}) }), '\n', (0, i.jsx)(p, {}), '\n', (0, i.jsx)(n.h2, { id: 'optie-2-verplichte-velden-markeren', children: "Optie 2: 'verplichte' velden markeren" }), '\n', (0, i.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(b, {}) }), '\n', (0, i.jsx)(x, {}), '\n', (0, i.jsx)(s.o, { headinglevel: 2, children: (0, i.jsx)(w, {}) }), '\n', (0, i.jsx)(k, {}), '\n', (0, i.jsx)(o.Ay, {})] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(F, { ...e }) }) : F(e);
   }
  },
 },
]);
