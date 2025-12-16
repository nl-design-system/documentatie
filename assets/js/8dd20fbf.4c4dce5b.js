/*! For license information please see 8dd20fbf.4c4dce5b.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [28631],
 {
  8649: (e, n, t) => {
   t.d(n, { H: () => b });
   var r = t(16609),
    o = t(68873),
    i = t(13526),
    l = t(58713),
    a = t(87347),
    s = t(39644),
    d = t(92406),
    c = t(63313),
    p = t(30758),
    h = t(31186),
    m = t(86070);
   const u = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(o.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   u.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(o.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const g = ({ children: e }) => (0, m.jsx)(o.ui, { className: 'nlds-canvas__example-surface', children: e });
   g.displayName = 'SurfaceContainer';
   const b = ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: b = !0, children: f, container: j = 'document', language: x, designTokens: y }) => {
    const k = 'function' == typeof f ? f() : f,
     w = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     _ = 'string' == typeof e ? e : h.qV(w || k),
     [N, z] = (0, p.useState)(_),
     [A, E] = (0, p.useState)(t);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(_, { parser: x, plugins: [l.A, a.Ay, s.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      z(e);
     })();
    }, [_]);
    const C = (0, p.useId)();
    let S = p.Fragment;
    return (
     'paragraph' === j ? (S = u) : 'document' === j ? (S = v) : 'surface' === j && (S = g),
     (0, m.jsxs)('div', {
      className: (0, i.A)('nlds-canvas'),
      children: [
       k && (0, m.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, m.jsx)(S, { children: (0, m.jsx)(o.v$, { children: k }) }) }) }),
       b &&
        (0, m.jsx)('div', {
         className: (0, i.A)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(o.$n, {
          className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           E(!A);
          },
          'aria-expanded': A,
          'aria-controls': C,
          children: A ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, m.jsxs)('div', {
         className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: C,
         hidden: !A,
         children: [
          (0, m.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          n &&
           (0, m.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(o.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  16609: (e, n, t) => {
   t.d(n, { M: () => d });
   var r = t(68873),
    o = t(16194),
    i = t(30758),
    l = t(50124);
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
   var s = t(86070);
   function d({ lineNumber: e, syntax: n, textContent: t, trim: d }) {
    let c = t;
    const { title: p, type: h } = (0, i.useContext)(l.x),
     m = (0, i.useId)();
    return d && (c = c.trim()), (0, s.jsx)(o.f4, { theme: a, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: o, getTokenProps: i }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, s.jsx)(r.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': m, style: n, children: t.map((n, t) => (0, s.jsxs)('span', { ...o({ line: n }), children: [e && (0, s.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) })] }) });
   }
  },
  50124: (e, n, t) => {
   t.d(n, { $: () => c, x: () => d });
   var r = t(54736),
    o = t(26990),
    i = t(68873),
    l = t(13526),
    a = t(30758),
    s = t(86070);
   const d = (0, a.createContext)({}),
    c = ({ title: e, appearance: n, description: t, children: a, figure: c }) => {
     const p = { do: 'Doen', dont: 'Niet doen' },
      h = c ? 'figure' : 'div',
      m = c ? 'figcaption' : 'div';
     return (0, s.jsxs)(h, { className: (0, l.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(i.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, s.jsx)(i.fz, { children: e })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(i.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, s.jsx)(r.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, s.jsx)(i.fz, { children: e })] }), t] }), (0, s.jsx)('div', { className: 'nlds-guideline__example', children: (0, s.jsx)(d.Provider, { value: { title: e, type: p[n] }, children: a }) })] });
    };
  },
  70034: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => v, default: () => j, frontMatter: () => u, metadata: () => r, toc: () => b });
   const r = JSON.parse('{"id":"richtlijnen/formulieren/description/content/README","title":"Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor de inhoud van beschrijvingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/description/2-content/README.mdx","sourceDirName":"richtlijnen/formulieren/description/2-content","slug":"/richtlijnen/formulieren/descriptions/inhoud","permalink":"/richtlijnen/formulieren/descriptions/inhoud","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/2-content/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Inhoud description","pagination_label":"Inhoud description","description":"Richtlijnen voor de inhoud van beschrijvingen in een formulier.","slug":"/richtlijnen/formulieren/descriptions/inhoud","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Koppel description","permalink":"/richtlijnen/formulieren/descriptions/koppelen"},"next":{"title":"Plaatsing description","permalink":"/richtlijnen/formulieren/descriptions/plaatsing"}}');
   var o = t(86070),
    i = t(85248),
    l = t(78734),
    a = t(8649),
    s = t(50124);
   function d(e) {
    const n = { div: 'div', form: 'form', h2: 'h2', h3: 'h3', input: 'input', label: 'label', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, o.jsx)(s.$, { appearance: 'dont', title: 'Een opsomming in een description.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }), (0, o.jsxs)(n.div, { id: 'description-wachtwoord', children: ['Je wachtwoord moet de volgende elementen bevatten:', (0, o.jsxs)(n.ul, { children: [(0, o.jsx)(n.li, { children: 'Minimaal 9 karakters.' }), (0, o.jsx)(n.li, { children: 'Een hoofdletter.' }), (0, o.jsx)(n.li, { children: 'Een cijfer.' })] })] }), (0, o.jsx)(n.input, { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' })] }) }) }), '\n', (0, o.jsx)(s.$, { appearance: 'do', title: 'Alleen tekst in een description.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.label, { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }), (0, o.jsx)(n.p, { id: 'description-wachtwoord', children: 'Je wachtwoord moet de volgende elementen bevatten: minimaal 9 karakters, een hoofdletter en een cijfer.' }), (0, o.jsx)(n.input, { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' })] }) }) }), '\n', (0, o.jsx)(s.$, { appearance: 'do', title: 'Zet informatie in rich tekst boven het formulier en onder het bijbehorende kopje.', children: (0, o.jsx)(a.H, { language: 'html', children: () => (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h3, { children: 'Open een spaarrekening' }), (0, o.jsx)(n.p, { children: 'Om een spaarrekening te openen hebben we de volgende gegevens nodig:' }), (0, o.jsxs)(n.ul, { children: [(0, o.jsx)(n.li, { children: 'Het nummer van je paspoort of identiteitskaart.' }), (0, o.jsx)(n.li, { children: 'Je Burgerservicenummer (BSN), dit kun je vinden op je paspoort of identiteitskaart.' }), (0, o.jsx)(n.li, { children: 'Je adresgegevens.' }), (0, o.jsx)(n.li, { children: 'Je e-mailadres.' })] }), (0, o.jsx)(n.form, { children: '[het formulier]' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   var p = t(99060);
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'gebruik-alleen-tekst-in-descriptions', children: 'Gebruik alleen tekst in descriptions' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, o.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby', children: 'aria-describedby' }), ", waarmee je een description toevoegt, mag alleen 'platte tekst' bevatten. Platte tekst staat voor tekst zonder verdere opmaak en heeft geen extra HTML voor opmaak of betekenis."] }), '\n', (0, o.jsxs)(n.p, { children: ['Opgemaakte tekst noemen we ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/289', children: "'rich text'" }), '. ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' geven deze informatie niet goed door of slaan het zelfs helemaal over in een description.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Let op' }), ': NL Design System adviseert ook geen tooltip te gebruiken voor het verbergen van ', (0, o.jsx)(n.strong, { children: 'essenti\xeble informatie' }), '. Zie de discussie over ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/298', children: 'Toggletip' }), ' op GitHub.'] }), '\n', (0, o.jsx)(n.h2, { id: 'demo-video', children: 'Demo video' }), '\n', (0, o.jsx)(n.p, { children: 'In de demo-video kun je zien en/of horen dat VoiceOver de opsomming uit de description overslaat als een formulierveld de toetsenbordfocus krijgt. NVDA in Firefox doet hetzelfde.' }), '\n', (0, o.jsx)(p.L, { id: 'ejiB-JSJzPE', title: 'Demo video opsomming uit de description in VoiceOver' }), '\n', (0, o.jsx)(n.h2, { id: 'description-beslisboom', children: 'Description-beslisboom' }), '\n', (0, o.jsx)(n.p, { children: 'Wat zijn de opties om informatie en uitleg toe te voegen aan een formulier en de invoervelden?\nVolg de beslisboom.' }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-1-gaat-de-informatie-over-alle-formuliervelden', children: 'Vraag 1: Gaat de informatie over alle formuliervelden?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie vlak boven het formulier en onder het bijbehorende kopje. Je kunt hierbij rich text gebruiken.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 2.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-2-gaat-de-informatie-over-een-enkel-veld-of-een-groep-velden-gegroepeerd-in-een-fieldset', children: 'Vraag 2: Gaat de informatie over een enkel veld of een groep velden, gegroepeerd in een fieldset?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Een enkel veld' }), ': Ga naar vraag 3a.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Een groep velden' }), ': Ga naar vraag 4a.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-3a-is-de-informatie-bij-het-formulierveld-platte-tekst', children: 'Vraag 3a: Is de informatie bij het formulierveld platte tekst?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 3b.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-3b-is-het-noodzakelijk-dat-de-informatie-bij-het-formulierveld-rich-text-bevat', children: 'Vraag 3b: Is het noodzakelijk dat de informatie bij het formulierveld rich text bevat?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier en onder het bijbehorende kopje van de betreffende stap staat.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze alleen platte tekst bevat.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-4a-is-de-informatie-bij-de-gegroepeerde-velden-platte-tekst', children: 'Vraag 4a: Is de informatie bij de gegroepeerde velden platte tekst?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description gekoppelt aan de ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset/', children: (0, o.jsx)(n.code, { children: '<fieldset>' }) }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 4b.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'vraag-4b-is-het-noodzakelijk-dat-de-informatie-bij-de-gegroepeerde-velden-rich-text-bevat', children: 'Vraag 4b: Is het noodzakelijk dat de informatie bij de gegroepeerde velden rich text bevat?' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, o.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier van de betreffende stap staat.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze toch alleen platte tekst bevat. Dan ben je er zeker van dat \xe0lle gebruikers de informatie kunnen lezen.'] }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
   const u = { title: 'Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Inhoud description', pagination_label: 'Inhoud description', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', slug: '/richtlijnen/formulieren/descriptions/inhoud', keywords: ['labels', 'formulier', 'design', 'code'] },
    v = void 0,
    g = {},
    b = [{ value: 'Demo video', id: 'demo-video', level: 2 }, { value: 'Description-beslisboom', id: 'description-beslisboom', level: 2 }, { value: 'Vraag 1: Gaat de informatie over alle formuliervelden?', id: 'vraag-1-gaat-de-informatie-over-alle-formuliervelden', level: 3 }, { value: 'Vraag 2: Gaat de informatie over een enkel veld of een groep velden, gegroepeerd in een fieldset?', id: 'vraag-2-gaat-de-informatie-over-een-enkel-veld-of-een-groep-velden-gegroepeerd-in-een-fieldset', level: 3 }, { value: 'Vraag 3a: Is de informatie bij het formulierveld platte tekst?', id: 'vraag-3a-is-de-informatie-bij-het-formulierveld-platte-tekst', level: 3 }, { value: 'Vraag 3b: Is het noodzakelijk dat de informatie bij het formulierveld rich text bevat?', id: 'vraag-3b-is-het-noodzakelijk-dat-de-informatie-bij-het-formulierveld-rich-text-bevat', level: 3 }, { value: 'Vraag 4a: Is de informatie bij de gegroepeerde velden platte tekst?', id: 'vraag-4a-is-de-informatie-bij-de-gegroepeerde-velden-platte-tekst', level: 3 }, { value: 'Vraag 4b: Is het noodzakelijk dat de informatie bij de gegroepeerde velden rich text bevat?', id: 'vraag-4b-is-het-noodzakelijk-dat-de-informatie-bij-de-gegroepeerde-velden-rich-text-bevat', level: 3 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, ...l.RM];
   function f(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(m, {}), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(l.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(f, { ...e }) }) : f();
   }
  },
  78734: (e, n, t) => {
   t.d(n, { Ay: () => a, RM: () => i });
   var r = t(86070),
    o = t(85248);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => l, x: () => a });
   var r = t(30758);
   const o = {},
    i = r.createContext(o);
   function l(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : l(e.components)), r.createElement(i.Provider, { value: n }, e.children);
   }
  },
  87423: (e, n, t) => {
   t.d(n, { A: () => l });
   var r = t(30758),
    o = function () {
     return (
      (o =
       Object.assign ||
       function (e) {
        for (var n, t = 1, r = arguments.length; t < r; t++) for (var o in (n = arguments[t])) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        return e;
       }),
      o.apply(this, arguments)
     );
    },
    i = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   var l = r.forwardRef(function (e, n) {
    var t = r.useState(!1),
     l = t[0],
     a = t[1],
     s = r.useState(e.alwaysLoadIframe || !1),
     d = s[0],
     c = s[1],
     p = encodeURIComponent(e.id),
     h = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     m = e.title,
     u = e.poster || 'hqdefault',
     v = e.announce || 'Watch',
     g = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     b = new URLSearchParams(o(o(o(o({}, e.muted ? { mute: '1' } : {}), g ? { autoplay: '1' } : {}), e.enableJsApi ? { enablejsapi: '1' } : {}), e.playlist ? { list: p } : {}));
    e.params &&
     new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach(function (e, n) {
      b.append(n, e);
     });
    var f = e.noCookie;
    f = e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com';
    var j = e.playlist ? ''.concat(f, '/embed/videoseries?').concat(b.toString()) : ''.concat(f, '/embed/').concat(p, '?').concat(b.toString()),
     x = !e.thumbnail && !e.playlist && 'maxresdefault' === u,
     y = e.webp ? 'webp' : 'jpg',
     k = e.webp ? 'vi_webp' : 'vi',
     w = x
      ? (function (e, n, t, o) {
         void 0 === o && (o = 'maxresdefault');
         var l = (0, r.useState)(''),
          a = l[0],
          s = l[1];
         return (
          (0, r.useEffect)(
           function () {
            var r = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/').concat(o, '.').concat(t),
             l = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/hqdefault.').concat(t),
             a = i[o],
             d = new Image();
            (d.onload = function () {
             d.width < a ? s(l) : s(r);
            }),
             (d.onerror = function () {
              return s(l);
             }),
             (d.src = r);
           },
           [e],
          ),
          a
         );
        })(e.id, k, y, u)
      : null,
     _ =
      e.thumbnail ||
      w ||
      'https://i.ytimg.com/'
       .concat(k, '/')
       .concat(e.playlist ? h : p, '/')
       .concat(u, '.')
       .concat(y),
     N = e.activatedClass || 'lyt-activated',
     z = e.adNetwork || !1,
     A = e.aspectHeight || 9,
     E = e.aspectWidth || 16,
     C = e.iframeClass || '',
     S = e.playerClass || 'lty-playbtn',
     I = e.wrapperClass || 'yt-lite',
     R = e.onIframeAdded || function () {},
     V = e.rel ? 'prefetch' : 'preload',
     F = e.containerElement || 'article',
     D = e.style || {};
    return (
     r.useEffect(
      function () {
       d && R();
      },
      [d],
     ),
     r.createElement(
      r.Fragment,
      null,
      r.createElement('link', { rel: V, href: _, as: 'image' }),
      r.createElement(r.Fragment, null, l && r.createElement(r.Fragment, null, r.createElement('link', { rel: 'preconnect', href: f }), r.createElement('link', { rel: 'preconnect', href: 'https://www.google.com' }), z && r.createElement(r.Fragment, null, r.createElement('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), r.createElement('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })))),
      r.createElement(
       F,
       {
        onPointerOver: function () {
         l || a(!0);
        },
        onClick: function () {
         d || c(!0);
        },
        className: ''.concat(I, ' ').concat(d ? N : ''),
        'data-title': m,
        style: o(o({ backgroundImage: 'url('.concat(_, ')') }, { '--aspect-ratio': ''.concat((A / E) * 100, '%') }), D),
       },
       r.createElement('button', { type: 'button', className: S, 'aria-label': ''.concat(v, ' ').concat(m) }),
       d && r.createElement('iframe', { ref: n, className: C, title: m, width: '560', height: '315', frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: j }),
      ),
     )
    );
   });
  },
  99060: (e, n, t) => {
   t.d(n, { L: () => i });
   var r = t(87423),
    o = t(86070);
   const i = ({ id: e, title: n, ...t }) => (0, o.jsx)(r.A, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: n, poster: 'maxresdefault', ...t });
  },
 },
]);
