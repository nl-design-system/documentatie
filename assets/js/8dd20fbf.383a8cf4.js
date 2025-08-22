'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [80450],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var r = t(52676),
    l = t(40139);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  37729: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => b, contentTitle: () => m, default: () => f, frontMatter: () => p, metadata: () => v, toc: () => y });
   var r = t(52676),
    l = t(40139),
    i = t(66968),
    o = t(43599),
    s = t(40761);
   function a(e) {
    const n = { div: 'div', form: 'form', h2: 'h2', h3: 'h3', input: 'input', label: 'label', li: 'li', p: 'p', ul: 'ul', ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(s.X, { appearance: 'dont', title: 'Een opsomming in een description.', children: (0, r.jsx)(o.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }), (0, r.jsxs)(n.div, { id: 'description-wachtwoord', children: ['Je wachtwoord moet de volgende elementen bevatten:', (0, r.jsxs)(n.ul, { children: [(0, r.jsx)(n.li, { children: 'Minimaal 9 karakters.' }), (0, r.jsx)(n.li, { children: 'Een hoofdletter.' }), (0, r.jsx)(n.li, { children: 'Een cijfer.' })] })] }), (0, r.jsx)(n.input, { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' })] }) }) }), '\n', (0, r.jsx)(s.X, { appearance: 'do', title: 'Alleen tekst in een description.', children: (0, r.jsx)(o.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }), (0, r.jsx)(n.p, { id: 'description-wachtwoord', children: 'Je wachtwoord moet de volgende elementen bevatten: minimaal 9 karakters, een hoofdletter en een cijfer.' }), (0, r.jsx)(n.input, { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' })] }) }) }), '\n', (0, r.jsx)(s.X, { appearance: 'do', title: 'Zet informatie in rich tekst boven het formulier en onder het bijbehorende kopje.', children: (0, r.jsx)(o.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h3, { children: 'Open een spaarrekening' }), (0, r.jsx)(n.p, { children: 'Om een spaarrekening te openen hebben we de volgende gegevens nodig:' }), (0, r.jsxs)(n.ul, { children: [(0, r.jsx)(n.li, { children: 'Het nummer van je paspoort of identiteitskaart.' }), (0, r.jsx)(n.li, { children: 'Je Burgerservicenummer (BSN), dit kun je vinden op je paspoort of identiteitskaart.' }), (0, r.jsx)(n.li, { children: 'Je adresgegevens.' }), (0, r.jsx)(n.li, { children: 'Je e-mailadres.' })] }), (0, r.jsx)(n.form, { children: '[het formulier]' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
   var d = t(97233);
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, l.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'gebruik-alleen-tekst-in-descriptions', children: 'Gebruik alleen tekst in descriptions' }), '\n', (0, r.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby', children: 'aria-describedby' }), ", waarmee je een description toevoegt, mag alleen 'platte tekst' bevatten. Platte tekst staat voor tekst zonder verdere opmaak en heeft geen extra HTML voor opmaak of betekenis."] }), '\n', (0, r.jsxs)(n.p, { children: ['Opgemaakte tekst noemen we ', (0, r.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/289', children: "'rich text'" }), '. ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' geven deze informatie niet goed door of slaan het zelfs helemaal over in een description.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': NL Design System adviseert ook geen tooltip te gebruiken voor het verbergen van ', (0, r.jsx)(n.strong, { children: 'essenti\xeble informatie' }), '. Zie de discussie over ', (0, r.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/298', children: 'Toggletip' }), ' op GitHub.'] }), '\n', (0, r.jsx)(n.h2, { id: 'demo-video', children: 'Demo video' }), '\n', (0, r.jsx)(n.p, { children: 'In de demo-video kun je zien en/of horen dat VoiceOver de opsomming uit de description overslaat als een formulierveld de toetsenbordfocus krijgt. NVDA in Firefox doet hetzelfde.' }), '\n', (0, r.jsx)(d.Y, { videoId: 'ejiB-JSJzPE' }), '\n', (0, r.jsx)(n.h2, { id: 'description-beslisboom', children: 'Description-beslisboom' }), '\n', (0, r.jsx)(n.p, { children: 'Wat zijn de opties om informatie en uitleg toe te voegen aan een formulier en de invoervelden?\nVolg de beslisboom.' }), '\n', (0, r.jsx)(n.h3, { id: 'vraag-1-gaat-de-informatie-over-alle-formuliervelden', children: 'Vraag 1: Gaat de informatie over alle formuliervelden?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie vlak boven het formulier en onder het bijbehorende kopje. Je kunt hierbij rich text gebruiken.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 2.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'vraag-2-gaat-de-informatie-over-een-enkel-veld-of-een-groep-velden-gegroepeerd-in-een-fieldset', children: 'Vraag 2: Gaat de informatie over een enkel veld of een groep velden, gegroepeerd in een fieldset?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Een enkel veld' }), ': Ga naar vraag 3a.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Een groep velden' }), ': Ga naar vraag 4a.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'vraag-3a-is-de-informatie-bij-het-formulierveld-platte-tekst', children: 'Vraag 3a: Is de informatie bij het formulierveld platte tekst?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 3b.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'vraag-3b-is-het-noodzakelijk-dat-de-informatie-bij-het-formulierveld-rich-text-bevat', children: 'Vraag 3b: Is het noodzakelijk dat de informatie bij het formulierveld rich text bevat?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier en onder het bijbehorende kopje van de betreffende stap staat.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze alleen platte tekst bevat.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'vraag-4a-is-de-informatie-bij-de-gegroepeerde-velden-platte-tekst', children: 'Vraag 4a: Is de informatie bij de gegroepeerde velden platte tekst?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description gekoppelt aan de ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset/', children: (0, r.jsx)(n.code, { children: '<fieldset>' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 4b.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'vraag-4b-is-het-noodzakelijk-dat-de-informatie-bij-de-gegroepeerde-velden-rich-text-bevat', children: 'Vraag 4b: Is het noodzakelijk dat de informatie bij de gegroepeerde velden rich text bevat?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier van de betreffende stap staat.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze toch alleen platte tekst bevat. Dan ben je er zeker van dat \xe0lle gebruikers de informatie kunnen lezen.'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const p = { title: 'Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Inhoud description', pagination_label: 'Inhoud description', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', slug: '/richtlijnen/formulieren/descriptions/inhoud', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    v = { id: 'richtlijnen/formulieren/description/content/README', title: 'Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', source: '@site/docs/richtlijnen/formulieren/description/2-content/README.mdx', sourceDirName: 'richtlijnen/formulieren/description/2-content', slug: '/richtlijnen/formulieren/descriptions/inhoud', permalink: '/richtlijnen/formulieren/descriptions/inhoud', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/2-content/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Inhoud description', pagination_label: 'Inhoud description', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', slug: '/richtlijnen/formulieren/descriptions/inhoud', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Koppel description', permalink: '/richtlijnen/formulieren/descriptions/koppelen' }, next: { title: 'Plaatsing description', permalink: '/richtlijnen/formulieren/descriptions/plaatsing' } },
    b = {},
    y = [];
   function g(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(c, {}), '\n', (0, r.jsx)(i.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => y });
   var r = t(41179),
    l = t(16167),
    i = t(4814),
    o = t(64642),
    s = t(93872),
    a = t(86017),
    c = t(48231),
    d = t(75119),
    h = t(75271),
    u = t(60027),
    p = t(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, p.jsx)(l.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: (0, p.jsx)(l.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   v.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(l.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   b.displayName = 'SurfaceContainer';
   const y = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: y = !1, displayCode: g = !0, children: f, container: j = 'document', language: x, designTokens: k } = e;
    const w = 'function' == typeof f ? f() : f,
     P = 'function' == typeof n ? n() : (0, h.isValidElement)(n) ? n : void 0,
     _ = 'string' == typeof n ? n : u.uS(P || w),
     [N, E] = (0, h.useState)(_),
     [z, I] = (0, h.useState)(y);
    (0, h.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(_, { parser: x, plugins: [o.Z, s.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      E(e);
     })();
    }, [_]);
    const Z = (0, h.useId)();
    let S = h.Fragment;
    return (
     'paragraph' === j ? (S = m) : 'document' === j ? (S = v) : 'surface' === j && (S = b),
     (0, p.jsxs)('div', {
      className: (0, i.Z)('nlds-canvas'),
      children: [
       w && (0, p.jsx)('div', { className: (0, i.Z)('nlds-canvas__example'), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, p.jsx)(S, { children: (0, p.jsx)(l.pu, { children: w }) }) }) }),
       g &&
        (0, p.jsx)('div', {
         className: (0, i.Z)('nlds-canvas__toolbar'),
         children: (0, p.jsx)(l.zx, {
          className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           I(!z);
          },
          'aria-expanded': z,
          'aria-controls': Z,
          children: z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       g &&
        (0, p.jsxs)('div', {
         className: (0, i.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: Z,
         hidden: !z,
         children: [
          (0, p.jsx)(r.u, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: N, trim: !0 }),
          t &&
           (0, p.jsx)('div', {
            className: (0, i.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, p.jsx)(l.zx, {
             className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, t) => {
   t.d(n, { u: () => c });
   var r = t(16167),
    l = t(60648),
    i = t(75271),
    o = t(40761);
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
   var a = t(52676);
   function c(e) {
    let { lineNumber: n, syntax: t, textContent: c, trim: d } = e,
     h = c;
    const { title: u, type: p } = (0, i.useContext)(o.n),
     m = (0, i.useId)();
    return (
     d && (h = h.trim()),
     (0, a.jsx)(l.y$, {
      theme: s,
      code: h,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: l, getLineProps: i, getTokenProps: o } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', p ? `\u201c${p}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(r.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': m, style: t, children: l.map((e, t) => (0, a.jsxs)('span', { ...i({ line: e }), children: [n && (0, a.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => c });
   var r = t(69244),
    l = t(20061),
    i = t(16167),
    o = t(4814),
    s = t(75271),
    a = t(52676);
   const c = (0, s.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: s, children: d, figure: h } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      p = h ? 'figure' : 'div',
      m = h ? 'figcaption' : 'div';
     return (0, a.jsxs)(p, { className: (0, o.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, o.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(i.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, o.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(l.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(i.nv, { children: n })] }), s] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: u[t] }, children: d }) })] });
    };
  },
  97233: (e, n, t) => {
   t.d(n, { Y: () => o });
   var r = t(4814),
    l = t(46686),
    i = t(52676);
   const o = (e) => {
    let { videoId: n, className: t } = e;
    return (0, i.jsx)(l.Z, { src: `https://youtube.com/watch?v=${n}`, className: (0, r.Z)('video-player', t), width: '100%', height: '100%', controls: !0, config: { youtube: { disablekb: 1 } } });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => o });
   var r = t(75271);
   const l = {},
    i = r.createContext(l);
   function o(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : o(e.components)), r.createElement(i.Provider, { value: n }, e.children);
   }
  },
  46686: (e, n, t) => {
   t.d(n, { Z: () => _ });
   var r = t(75271);
   const l = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
    i = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
    o = /\.(m3u8)($|\?)/i,
    s = /\.(mpd)($|\?)/i,
    a = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
    c = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
    d = /vimeo\.com\/(?!progressive_redirect).+/,
    h = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
    u = /open\.spotify\.com\/(\w+)\/(\w+)/i,
    p = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
    m = /tiktok\.com\/(?:@[^/]+\/video\/)?(\d+)(?:\/([\w-]+))?/,
    v = (e, n) => {
     if (Array.isArray(e)) {
      for (const t of e) {
       if ('string' == typeof t && v(t, n)) return !0;
       if (v(t.src, n)) return !0;
      }
      return !1;
     }
     return n(e);
    },
    b = { html: (e) => v(e, (e) => l.test(e) || i.test(e)), hls: (e) => v(e, (e) => o.test(e)), dash: (e) => v(e, (e) => s.test(e)), mux: (e) => a.test(e), youtube: (e) => c.test(e), vimeo: (e) => d.test(e) && !i.test(e) && !o.test(e), wistia: (e) => h.test(e), spotify: (e) => u.test(e), twitch: (e) => p.test(e), tiktok: (e) => m.test(e) };
   var y = r.forwardRef((e, n) => {
    const t = l.test(`${e.src}`) ? 'audio' : 'video';
    return r.createElement(t, { ...e, ref: n }, e.children);
   });
   var g = [
    { key: 'hls', name: 'hls.js', canPlay: b.hls, canEnablePIP: () => !0, player: (0, r.lazy)(() => Promise.all([t.e(29177), t.e(53184)]).then(t.bind(t, 99823))) },
    { key: 'dash', name: 'dash.js', canPlay: b.dash, canEnablePIP: () => !0, player: (0, r.lazy)(() => t.e(78443).then(t.bind(t, 67177))) },
    { key: 'mux', name: 'Mux', canPlay: b.mux, canEnablePIP: () => !0, player: (0, r.lazy)(() => Promise.all([t.e(29177), t.e(64258)]).then(t.bind(t, 74486))) },
    { key: 'youtube', name: 'YouTube', canPlay: b.youtube, player: (0, r.lazy)(() => t.e(64439).then(t.bind(t, 21489))) },
    { key: 'vimeo', name: 'Vimeo', canPlay: b.vimeo, player: (0, r.lazy)(() => t.e(73743).then(t.bind(t, 20667))) },
    { key: 'wistia', name: 'Wistia', canPlay: b.wistia, canEnablePIP: () => !0, player: (0, r.lazy)(() => t.e(88055).then(t.bind(t, 51820))) },
    { key: 'spotify', name: 'Spotify', canPlay: b.spotify, canEnablePIP: () => !1, player: (0, r.lazy)(() => t.e(41954).then(t.bind(t, 37949))) },
    { key: 'twitch', name: 'Twitch', canPlay: b.twitch, canEnablePIP: () => !1, player: (0, r.lazy)(() => t.e(86216).then(t.bind(t, 1997))) },
    { key: 'tiktok', name: 'TikTok', canPlay: b.tiktok, canEnablePIP: () => !1, player: (0, r.lazy)(() => t.e(34491).then(t.bind(t, 51102))) },
    { key: 'html', name: 'html', canPlay: b.html, canEnablePIP: () => !0, player: y },
   ];
   const f = { width: '320px', height: '180px', volume: 1, playbackRate: 1, previewTabIndex: 0, previewAriaLabel: '', oEmbedUrl: 'https://noembed.com/embed?url={url}' },
    j = r.forwardRef((e, n) => {
     const { playing: t, pip: l } = e,
      i = e.activePlayer,
      o = (0, r.useRef)(null),
      s = (0, r.useRef)(!0);
     (0, r.useEffect)(() => {
      var n, r;
      o.current && (o.current.paused && !0 === t && o.current.play(), o.current.paused || !1 !== t || o.current.pause(), (o.current.playbackRate = null != (n = e.playbackRate) ? n : 1), (o.current.volume = null != (r = e.volume) ? r : 1));
     }),
      (0, r.useEffect)(() => {
       var e, n, t, r, i;
       if (o.current && globalThis.document) {
        if (l && !document.pictureInPictureElement)
         try {
          null == (n = (e = o.current).requestPictureInPicture) || n.call(e);
         } catch (s) {}
        if (!l && document.pictureInPictureElement)
         try {
          null == (r = (t = o.current).exitPictureInPicture) || r.call(t), null == (i = document.exitPictureInPicture) || i.call(document);
         } catch (s) {}
       }
      }, [l]);
     if (!i) return null;
     const a = {};
     for (const r in e) r.startsWith('on') && (a[r] = e[r]);
     return r.createElement(
      i,
      {
       ...a,
       style: e.style,
       className: e.className,
       slot: e.slot,
       ref: (0, r.useCallback)(
        (e) => {
         (o.current = e), 'function' == typeof n ? n(e) : null !== n && (n.current = e);
        },
        [n],
       ),
       src: e.src,
       crossOrigin: e.crossOrigin,
       preload: e.preload,
       controls: e.controls,
       muted: e.muted,
       autoPlay: e.autoPlay,
       loop: e.loop,
       playsInline: e.playsInline,
       config: e.config,
       onLoadStart: (n) => {
        var t, r;
        (s.current = !0), null == (t = e.onReady) || t.call(e), null == (r = e.onLoadStart) || r.call(e, n);
       },
       onPlay: (n) => {
        var t, r;
        s.current && ((s.current = !1), null == (t = e.onStart) || t.call(e, n)), null == (r = e.onPlay) || r.call(e, n);
       },
      },
      e.children,
     );
    });
   j.displayName = 'Player';
   var x = j;
   const k = (0, r.lazy)(() => t.e(87664).then(t.bind(t, 79240))),
    w = [],
    P = ({ children: e }) => e;
   var _ = ((e, n) => {
    const t = r.forwardRef((t, l) => {
     const i = { ...f, ...t },
      { src: o, slot: s, className: a, style: c, width: d, height: h, fallback: u, wrapper: p } = i,
      [m, v] = (0, r.useState)(!!i.light);
     (0, r.useEffect)(() => {
      i.light ? v(!0) : v(!1);
     }, [i.light]);
     const b = (e) => {
       var n;
       v(!1), null == (n = i.onClickPreview) || n.call(i, e);
      },
      y = null == p ? P : p,
      g = !1 === u ? P : r.Suspense;
     return r.createElement(
      y,
      { slot: s, className: a, style: { width: d, height: h, ...c } },
      r.createElement(
       g,
       { fallback: u },
       m
        ? ((e) => {
           if (!e) return null;
           const { light: n, playIcon: t, previewTabIndex: l, oEmbedUrl: o, previewAriaLabel: s } = i;
           return r.createElement(k, { src: e, light: n, playIcon: t, previewTabIndex: l, previewAriaLabel: s, oEmbedUrl: o, onClickPreview: b });
          })(o)
        : ((t) => {
           var o, c;
           const d = ((t) => {
            for (const n of [...w, ...e]) if (t && n.canPlay(t)) return n;
            return n || null;
           })(t);
           if (!d) return null;
           const { style: h, width: u, height: p, wrapper: m } = i,
            v = null == (o = i.config) ? void 0 : o[d.key];
           return r.createElement(x, { ...i, ref: l, activePlayer: null != (c = d.player) ? c : d, slot: m ? void 0 : s, className: m ? void 0 : a, style: m ? { display: 'block', width: '100%', height: '100%' } : { display: 'block', width: u, height: p, ...h }, config: v });
          })(o),
      ),
     );
    });
    return (
     (t.displayName = 'ReactPlayer'),
     (t.addCustomPlayer = (e) => {
      w.push(e);
     }),
     (t.removeCustomPlayers = () => {
      w.length = 0;
     }),
     (t.canPlay = (n) => {
      if (n) for (const t of [...w, ...e]) if (t.canPlay(n)) return !0;
      return !1;
     }),
     (t.canEnablePIP = (n) => {
      var t;
      if (n) for (const r of [...w, ...e]) if (r.canPlay(n) && (null == (t = r.canEnablePIP) ? void 0 : t.call(r))) return !0;
      return !1;
     }),
     t
    );
   })(g, g[g.length - 1]);
  },
 },
]);
