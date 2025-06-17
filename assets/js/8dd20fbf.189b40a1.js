'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [80450],
 {
  66968: (e, n, r) => {
   r.d(n, { ZP: () => l });
   var i = r(52676),
    t = r(40139);
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  37729: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => g, contentTitle: () => u, default: () => x, frontMatter: () => m, metadata: () => j, toc: () => v });
   var i = r(52676),
    t = r(40139),
    o = r(66968),
    l = r(43599),
    s = r(40761);
   function a(e) {
    const n = { div: 'div', form: 'form', h2: 'h2', h3: 'h3', input: 'input', label: 'label', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, i.jsx)(s.X, { appearance: 'dont', title: 'Een opsomming in een description.', children: (0, i.jsx)(l.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }), (0, i.jsxs)(n.div, { id: 'description-wachtwoord', children: ['Je wachtwoord moet de volgende elementen bevatten:', (0, i.jsxs)(n.ul, { children: [(0, i.jsx)(n.li, { children: 'Minimaal 9 karakters.' }), (0, i.jsx)(n.li, { children: 'Een hoofdletter.' }), (0, i.jsx)(n.li, { children: 'Een cijfer.' })] })] }), (0, i.jsx)(n.input, { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' })] }) }) }), '\n', (0, i.jsx)(s.X, { appearance: 'do', title: 'Alleen tekst in een description.', children: (0, i.jsx)(l.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }), (0, i.jsx)(n.p, { id: 'description-wachtwoord', children: 'Je wachtwoord moet de volgende elementen bevatten: minimaal 9 karakters, een hoofdletter en een cijfer.' }), (0, i.jsx)(n.input, { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' })] }) }) }), '\n', (0, i.jsx)(s.X, { appearance: 'do', title: 'Zet informatie in rich tekst boven het formulier en onder het bijbehorende kopje.', children: (0, i.jsx)(l.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h3, { children: 'Open een spaarrekening' }), (0, i.jsx)(n.p, { children: 'Om een spaarrekening te openen hebben we de volgende gegevens nodig:' }), (0, i.jsxs)(n.ul, { children: [(0, i.jsx)(n.li, { children: 'Het nummer van je paspoort of identiteitskaart.' }), (0, i.jsx)(n.li, { children: 'Je Burgerservicenummer (BSN), dit kun je vinden op je paspoort of identiteitskaart.' }), (0, i.jsx)(n.li, { children: 'Je adresgegevens.' }), (0, i.jsx)(n.li, { children: 'Je e-mailadres.' })] }), (0, i.jsx)(n.form, { children: '[het formulier]' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
   var c = r(97233);
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'gebruik-alleen-tekst-in-descriptions', children: 'Gebruik alleen tekst in descriptions' }), '\n', (0, i.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby', children: 'aria-describedby' }), ", waarmee je een description toevoegt, mag alleen 'platte tekst' bevatten. Platte tekst staat voor tekst zonder verdere opmaak en heeft geen extra HTML voor opmaak of betekenis."] }), '\n', (0, i.jsxs)(n.p, { children: ['Opgemaakte tekst noemen we ', (0, i.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/289', children: "'rich text'" }), '. ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' geven deze informatie niet goed door of slaan het zelfs helemaal over in een description.'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': het NL Design System adviseert ook geen tooltip te gebruiken voor het verbergen van ', (0, i.jsx)(n.strong, { children: 'essenti\xeble informatie' }), '. Zie de discussie over ', (0, i.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/298', children: 'Toggletip' }), ' op GitHub.'] }), '\n', (0, i.jsx)(n.h2, { id: 'demo-video', children: 'Demo video' }), '\n', (0, i.jsx)(n.p, { children: 'In de demo-video kun je zien en/of horen dat VoiceOver de opsomming uit de description overslaat als een formulierveld de toetsenbordfocus krijgt. NVDA in Firefox doet hetzelfde.' }), '\n', (0, i.jsx)(c.Y, { videoId: 'ejiB-JSJzPE' }), '\n', (0, i.jsx)(n.h2, { id: 'description-beslisboom', children: 'Description-beslisboom' }), '\n', (0, i.jsx)(n.p, { children: 'Wat zijn de opties om informatie en uitleg toe te voegen aan een formulier en de invoervelden?\nVolg de beslisboom.' }), '\n', (0, i.jsx)(n.h3, { id: 'vraag-1-gaat-de-informatie-over-alle-formuliervelden', children: 'Vraag 1: Gaat de informatie over alle formuliervelden?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie vlak boven het formulier en onder het bijbehorende kopje. Je kunt hierbij rich text gebruiken.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 2.'] }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'vraag-2-gaat-de-informatie-over-een-enkel-veld-of-een-groep-velden-gegroepeerd-in-een-fieldset', children: 'Vraag 2: Gaat de informatie over een enkel veld of een groep velden, gegroepeerd in een fieldset?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Een enkel veld' }), ': Ga naar vraag 3a.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Een groep velden' }), ': Ga naar vraag 4a.'] }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'vraag-3a-is-de-informatie-bij-het-formulierveld-platte-tekst', children: 'Vraag 3a: Is de informatie bij het formulierveld platte tekst?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 3b.'] }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'vraag-3b-is-het-noodzakelijk-dat-de-informatie-bij-het-formulierveld-rich-text-bevat', children: 'Vraag 3b: Is het noodzakelijk dat de informatie bij het formulierveld rich text bevat?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier en onder het bijbehorende kopje van de betreffende stap staat.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze alleen platte tekst bevat.'] }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'vraag-4a-is-de-informatie-bij-de-gegroepeerde-velden-platte-tekst', children: 'Vraag 4a: Is de informatie bij de gegroepeerde velden platte tekst?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description gekoppelt aan de ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset', children: (0, i.jsx)(n.code, { children: '<fieldset>' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 4b.'] }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'vraag-4b-is-het-noodzakelijk-dat-de-informatie-bij-de-gegroepeerde-velden-rich-text-bevat', children: 'Vraag 4b: Is het noodzakelijk dat de informatie bij de gegroepeerde velden rich text bevat?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier van de betreffende stap staat.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze toch alleen platte tekst bevat. Dan ben je er zeker van dat \xe0lle gebruikers de informatie kunnen lezen.'] }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
   const m = { title: 'Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Inhoud description', pagination_label: 'Inhoud description', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', slug: '/richtlijnen/formulieren/descriptions/inhoud', keywords: ['labels', 'formulier', 'design', 'code'] },
    u = void 0,
    j = { id: 'richtlijnen/formulieren/description/content/README', title: 'Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', source: '@site/docs/richtlijnen/formulieren/description/2-content/README.mdx', sourceDirName: 'richtlijnen/formulieren/description/2-content', slug: '/richtlijnen/formulieren/descriptions/inhoud', permalink: '/richtlijnen/formulieren/descriptions/inhoud', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/2-content/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Inhoud description', pagination_label: 'Inhoud description', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', slug: '/richtlijnen/formulieren/descriptions/inhoud', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Koppel description', permalink: '/richtlijnen/formulieren/descriptions/koppelen' }, next: { title: 'Plaatsing description', permalink: '/richtlijnen/formulieren/descriptions/plaatsing' } },
    g = {},
    v = [];
   function b(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(p, {}), '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(o.ZP, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(b, { ...e }) }) : b();
   }
  },
  43599: (e, n, r) => {
   r.d(n, { X: () => v });
   var i = r(41179),
    t = r(16167),
    o = r(4814),
    l = r(64642),
    s = r(93872),
    a = r(86017),
    d = r(48231),
    c = r(75119),
    h = r(75271),
    p = r(60027),
    m = r(52676);
   const u = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(t.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   u.displayName = 'ParagraphContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(t.BB, { className: (0, o.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   j.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(t.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   g.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: r = !0, defaultExpandedCode: v = !1, displayCode: b = !0, children: x, container: f = 'document', language: y, designTokens: k } = e;
    const _ = 'function' == typeof x ? x() : x,
     w = 'function' == typeof n ? n() : (0, h.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : p.uS(w || _),
     [z, Z] = (0, h.useState)(N),
     [S, C] = (0, h.useState)(v);
    (0, h.useEffect)(() => {
     (async () => {
      const e = await c.ZP.format(N, { parser: y, plugins: [l.Z, s.ZP, a.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      Z(e);
     })();
    }, [N]);
    const P = (0, h.useId)();
    let D = h.Fragment;
    return (
     'paragraph' === f ? (D = u) : 'document' === f ? (D = j) : 'surface' === f && (D = g),
     (0, m.jsxs)('div', {
      className: (0, o.Z)('nlds-canvas'),
      children: [
       _ && (0, m.jsx)('div', { className: (0, o.Z)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, m.jsx)(D, { children: (0, m.jsx)(t.pu, { children: _ }) }) }) }),
       b &&
        (0, m.jsx)('div', {
         className: (0, o.Z)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(t.zx, {
          className: (0, o.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!S);
          },
          'aria-expanded': S,
          'aria-controls': P,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, m.jsxs)('div', {
         className: (0, o.Z)('nlds-canvas__code-block', !r && 'nlds-canvas__code-block--user-select-none'),
         id: P,
         hidden: !S,
         children: [
          (0, m.jsx)(i.u, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: z, trim: !0 }),
          r &&
           (0, m.jsx)('div', {
            className: (0, o.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(t.zx, {
             className: (0, o.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  41179: (e, n, r) => {
   r.d(n, { u: () => d });
   var i = r(16167),
    t = r(60648),
    o = r(75271),
    l = r(40761);
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
   var a = r(52676);
   function d(e) {
    let { lineNumber: n, syntax: r, textContent: d, trim: c } = e,
     h = d;
    const { title: p, type: m } = (0, o.useContext)(l.n),
     u = (0, o.useId)();
    return (
     c && (h = h.trim()),
     (0, a.jsx)(t.y$, {
      theme: s,
      code: h,
      language: r || '',
      children: (e) => {
       let { style: r, tokens: t, getLineProps: o, getTokenProps: l } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, a.jsx)(i.dn, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: r, children: t.map((e, r) => (0, a.jsxs)('span', { ...o({ line: e }), children: [n && (0, a.jsx)('span', { children: r + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, r)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, r) => {
   r.d(n, { X: () => c, n: () => d });
   var i = r(69244),
    t = r(20061),
    o = r(16167),
    l = r(4814),
    s = r(75271),
    a = r(52676);
   const d = (0, s.createContext)({}),
    c = (e) => {
     let { title: n, appearance: r, description: s, children: c, figure: h } = e;
     const p = { do: 'Doen', dont: 'Niet doen' },
      m = h ? 'figure' : 'div',
      u = h ? 'figcaption' : 'div';
     return (0, a.jsxs)(m, { className: (0, l.Z)('nlds-guideline', `nlds-guideline--${r}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === r ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.nv, { className: (0, l.Z)('nlds-guideline__badge', `nlds-guideline__badge--${r}`), children: [(0, a.jsx)(i.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.dont })] }), (0, a.jsx)(o.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.nv, { className: (0, l.Z)('nlds-guideline__badge', `nlds-guideline__badge--${r}`), children: [(0, a.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: p.do })] }), (0, a.jsx)(o.nv, { children: n })] }), s] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: n, type: p[r] }, children: c }) })] });
    };
  },
  97233: (e, n, r) => {
   r.d(n, { Y: () => s });
   var i = r(4814),
    t = r(95110),
    o = r.n(t),
    l = r(52676);
   const s = (e) => {
    let { videoId: n, className: r, ...t } = e;
    return (0, l.jsx)(o(), { url: `https://youtube.com/watch?v=${n}`, className: (0, i.Z)('video-player', r), width: '100%', height: '100%', controls: !0, ...t, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
 },
]);
