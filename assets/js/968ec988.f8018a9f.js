'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [34051],
 {
  8649: (e, n, o) => {
   o.d(n, { H: () => x });
   var t = o(16609),
    l = o(68873),
    r = o(13526),
    i = o(58713),
    s = o(87347),
    a = o(39644),
    d = o(92406),
    c = o(63313),
    u = o(30758),
    h = o(31186),
    b = o(86070);
   const m = ({ children: e }) => (0, b.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(l.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, b.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   m.displayName = 'ParagraphContainer';
   const p = ({ children: e }) => (0, b.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, b.jsx)(l.yo, { className: (0, r.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   p.displayName = 'DocumentContainer';
   const v = ({ children: e }) => (0, b.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   v.displayName = 'SurfaceContainer';
   const x = ({ code: e, copy: n = !0, defaultExpandedCode: o = !1, displayCode: x = !0, children: g, container: j = 'document', language: y, designTokens: f }) => {
    const k = 'function' == typeof g ? g() : g,
     _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
     w = 'string' == typeof e ? e : h.qV(_ || k),
     [A, N] = (0, u.useState)(w),
     [C, z] = (0, u.useState)(o);
    (0, u.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(w, { parser: y, plugins: [i.A, s.Ay, a.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [w]);
    const S = (0, u.useId)();
    let F = u.Fragment;
    return (
     'paragraph' === j ? (F = m) : 'document' === j ? (F = p) : 'surface' === j && (F = v),
     (0, b.jsxs)('div', {
      className: (0, r.A)('nlds-canvas'),
      children: [
       k && (0, b.jsx)('div', { className: (0, r.A)('nlds-canvas__example'), children: (0, b.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, b.jsx)(F, { children: (0, b.jsx)(l.v$, { children: k }) }) }) }),
       x &&
        (0, b.jsx)('div', {
         className: (0, r.A)('nlds-canvas__toolbar'),
         children: (0, b.jsx)(l.$n, {
          className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           z(!C);
          },
          'aria-expanded': C,
          'aria-controls': S,
          children: C ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       x &&
        (0, b.jsxs)('div', {
         className: (0, r.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !C,
         children: [
          (0, b.jsx)(t.M, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: A, trim: !0 }),
          n &&
           (0, b.jsx)('div', {
            className: (0, r.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, b.jsx)(l.$n, {
             className: (0, r.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  16609: (e, n, o) => {
   o.d(n, { M: () => d });
   var t = o(68873),
    l = o(16194),
    r = o(30758),
    i = o(50124);
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
   var a = o(86070);
   function d({ lineNumber: e, syntax: n, textContent: o, trim: d }) {
    let c = o;
    const { title: u, type: h } = (0, r.useContext)(i.x),
     b = (0, r.useId)();
    return d && (c = c.trim()), (0, a.jsx)(l.f4, { theme: s, code: c, language: n || '', children: ({ style: n, tokens: o, getLineProps: l, getTokenProps: r }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: b, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(t.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': b, style: n, children: o.map((n, o) => (0, a.jsxs)('span', { ...l({ line: n }), children: [e && (0, a.jsx)('span', { children: o + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...r({ token: e }) }, n)), '\n'] }, o)) })] }) });
   }
  },
  37102: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => p, contentTitle: () => m, default: () => g, frontMatter: () => b, metadata: () => t, toc: () => v });
   const t = JSON.parse('{"id":"richtlijnen/formulieren/keyboard-behaviour/tabindex/README","title":"Gebruik geen positieve tabindex | Toetsenbordnavigatie in een formulier | Richtlijnen","description":"Richtlijnen voor positieve tabindex in een formulier.","source":"@site/docs/richtlijnen/formulieren/keyboard-behaviour/2-tabindex/README.mdx","sourceDirName":"richtlijnen/formulieren/keyboard-behaviour/2-tabindex","slug":"/richtlijnen/formulieren/toetsenbord/tabindex","permalink":"/richtlijnen/formulieren/toetsenbord/tabindex","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/keyboard-behaviour/2-tabindex/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Gebruik geen positieve tabindex | Toetsenbordnavigatie in een formulier | Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Geen positieve tabindex","pagination_label":"Geen positieve tabindex","description":"Richtlijnen voor positieve tabindex in een formulier.","slug":"/richtlijnen/formulieren/toetsenbord/tabindex","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Zorg dat een formulier werkt met een toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie"},"next":{"title":"Uit te vragen informatie in een formulier","permalink":"/richtlijnen/formulieren/vragen/"}}');
   var l = o(86070),
    r = o(85248),
    i = o(78734),
    s = o(8649),
    a = o(50124);
   function d(e) {
    const n = { button: 'button', div: 'div', form: 'form', h2: 'h2', input: 'input', label: 'label', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(a.$, { appearance: 'do', title: 'Formulier zonder tabindex.', children: (0, l.jsx)(s.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.div, { children: (0, l.jsx)(n.label, { htmlFor: 'naam1', children: 'Uw naam' }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.input, { id: 'naam1', autoComplete: 'name' }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.label, { htmlFor: 'email1', children: 'Uw e-mailadres' }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.input, { id: 'email1', autoComplete: 'email' }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.button, { children: 'Stuur mij de nieuwsbrief!' }) })] }) }) }) }), '\n', (0, l.jsx)(a.$, { appearance: 'dont', title: 'Formulier met gebruik van een positieve tabindex.', children: (0, l.jsx)(s.H, { language: 'html', children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)(n.form, { children: [(0, l.jsx)(n.div, { children: (0, l.jsx)(n.label, { htmlFor: 'naam2', children: 'Uw naam' }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.input, { id: 'naam2', autoComplete: 'name', tabIndex: '1' }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.label, { htmlFor: 'email2', children: 'Uw e-mailadres' }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.input, { id: 'email2', autoComplete: 'email' }) }), (0, l.jsx)(n.div, { children: (0, l.jsx)(n.button, { children: 'Stuur mij de nieuwsbrief!' }) })] }) }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
   }
   function u(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'gebruik-geen-positieve-tabindex', children: 'Gebruik geen positieve tabindex' }) }), '\n', (0, l.jsxs)(n.p, { children: ['Het eerste formulierveld automatisch de focus te geven is een veelgebruikte constructie. Dit kan door het eerste veld een ', (0, l.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex', children: 'tabindex' }), ' te geven met een waarde groter dan nul, bijvoorbeeld ', (0, l.jsx)(n.code, { children: 'tabindex="1"' }), ' of met gebruik van ', (0, l.jsx)(n.code, { children: 'autofocus' }), '. De gebruiker is meteen klaar om het formulier in te gaan vullen.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Maar dit levert problemen op voor gebruikers van ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en toetsenborden. Stel je voor dat je het formulier helemaal niet wilt invullen, maar naar het menu wilt, of de tekst boven het formulier wilt lezen. Dan zul je terug naar boven moeten navigeren.'] }), '\n', (0, l.jsx)(n.p, { children: 'Een screenreadergebruiker kan zo tekst missen die boven het formulier staat. Misschien staan daar wel instructies of aanvullende informatie over hoe het formulier goed in te vullen.' }), '\n', (0, l.jsx)(n.p, { children: 'Gebruik dus ook nooit meerdere positieve tabindexen om de gebruiker te dwingen een bepaalde tabvolgorde aan te houden.' }), '\n', (0, l.jsx)(n.p, { children: 'Laat de bezoeker zelf beslissen wat ze wil lezen en in welke volgorde. Kaap de toetsenbordfocus niet maar hou de natuurlijke tabvolgorde intact.' }), '\n', (0, l.jsxs)(n.p, { children: ['Adam Silver geeft hier uitgebreid uitleg over in ', (0, l.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-automatically-focusing-the-first-input-and-what-to-do-instead/', children: 'The problem with automatically focusing the first input and what to do instead' }), '.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Let wel: ', (0, l.jsx)(n.code, { children: 'tabindex="0"' }), ' en ', (0, l.jsx)(n.code, { children: 'tabindex="-1"' }), ' zijn wel toegestaan om bepaalde elementen focus te kunnen geven die van nature geen focus krijgen. Dit verstoort de natuurlijke tabvolgorde niet. Wanneer welke waarde te gebruiken wordt uitgelegd in ', (0, l.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/tabindex#zero-negative-one', children: '0 and -1 Values' }), ' van WebAIM.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Een goede uitleg over de impact van tabindex op toegankelijkheidstaat staat in: ', (0, l.jsx)(n.a, { href: 'https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/', children: 'How To Avoid Breaking Web Pages For Keyboard Users' }), ' van Andrew Nevins.'] }), '\n', (0, l.jsx)(n.p, { children: 'Geen positieve tabindex of autofocus gebruiken is nodig om te voldoen aan de volgende WCAG-succescriteria:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: '/wcag/2.4.3/', children: '2.4.3 Focusvolgorde' }), ' (niveau A).'] }), '\n', (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.a, { href: '/wcag/3.2.3/', children: '3.2.3 Consistente navigatie' }), ' (niveau AA).'] }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
   const b = { title: 'Gebruik geen positieve tabindex | Toetsenbordnavigatie in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Geen positieve tabindex', pagination_label: 'Geen positieve tabindex', description: 'Richtlijnen voor positieve tabindex in een formulier.', slug: '/richtlijnen/formulieren/toetsenbord/tabindex', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    p = {},
    v = [{ value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, ...i.RM];
   function x(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(h, {}), '\n', (0, l.jsx)(c, {}), '\n', (0, l.jsx)(i.Ay, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(x, { ...e }) }) : x();
   }
  },
  50124: (e, n, o) => {
   o.d(n, { $: () => c, x: () => d });
   var t = o(54736),
    l = o(26990),
    r = o(68873),
    i = o(13526),
    s = o(30758),
    a = o(86070);
   const d = (0, s.createContext)({}),
    c = ({ title: e, appearance: n, description: o, children: s, figure: c }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = c ? 'figure' : 'div',
      b = c ? 'figcaption' : 'div';
     return (0, a.jsxs)(h, { className: (0, i.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(b, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(r.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(r.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(r.fz, { children: e })] }), o] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: s }) })] });
    };
  },
  78734: (e, n, o) => {
   o.d(n, { Ay: () => s, RM: () => r });
   var t = o(86070),
    l = o(85248);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
  },
  85248: (e, n, o) => {
   o.d(n, { R: () => i, x: () => s });
   var t = o(30758);
   const l = {},
    r = t.createContext(l);
   function i(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : i(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
