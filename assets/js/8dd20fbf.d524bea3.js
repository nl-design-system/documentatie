/*! For license information please see 8dd20fbf.d524bea3.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [80450],
 {
  5547: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var r = t(52676),
    o = t(40139);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  53127: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => j, contentTitle: () => m, default: () => f, frontMatter: () => u, metadata: () => g, toc: () => v });
   var r = t(52676),
    o = t(40139),
    i = t(5547),
    l = t(43599),
    s = t(40761);
   function a(e) {
    const n = { div: 'div', form: 'form', h2: 'h2', h3: 'h3', input: 'input', label: 'label', li: 'li', p: 'p', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, r.jsx)(s.X, { appearance: 'dont', title: 'Een opsomming in een description.', children: (0, r.jsx)(l.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }), (0, r.jsxs)(n.div, { id: 'description-wachtwoord', children: ['Je wachtwoord moet de volgende elementen bevatten:', (0, r.jsxs)(n.ul, { children: [(0, r.jsx)(n.li, { children: 'Minimaal 9 karakters.' }), (0, r.jsx)(n.li, { children: 'Een hoofdletter.' }), (0, r.jsx)(n.li, { children: 'Een cijfer.' })] })] }), (0, r.jsx)(n.input, { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' })] }) }) }), '\n', (0, r.jsx)(s.X, { appearance: 'do', title: 'Alleen tekst in een description.', children: (0, r.jsx)(l.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { htmlFor: 'wachtwoord', children: 'Nieuw wachtwoord' }), (0, r.jsx)(n.p, { id: 'description-wachtwoord', children: 'Je wachtwoord moet de volgende elementen bevatten: minimaal 9 karakters, een hoofdletter en een cijfer.' }), (0, r.jsx)(n.input, { id: 'wachtwoord', type: 'password', name: 'nieuw-wachtwoord', autocomplete: 'new-password', 'aria-describedby': 'description-wachtwoord' })] }) }) }), '\n', (0, r.jsx)(s.X, { appearance: 'do', title: 'Zet informatie in rich tekst boven het formulier en onder het bijbehorende kopje.', children: (0, r.jsx)(l.X, { language: 'html', children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h3, { children: 'Open een spaarrekening' }), (0, r.jsx)(n.p, { children: 'Om een spaarrekening te openen hebben we de volgende gegevens nodig:' }), (0, r.jsxs)(n.ul, { children: [(0, r.jsx)(n.li, { children: 'Het nummer van je paspoort of identiteitskaart.' }), (0, r.jsx)(n.li, { children: 'Je Burgerservicenummer (BSN), dit kun je vinden op je paspoort of identiteitskaart.' }), (0, r.jsx)(n.li, { children: 'Je adresgegevens.' }), (0, r.jsx)(n.li, { children: 'Je e-mailadres.' })] }), (0, r.jsx)(n.form, { children: '[het formulier]' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
   var d = t(97233);
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'gebruik-alleen-tekst-in-descriptions', children: 'Gebruik alleen tekst in descriptions' }), '\n', (0, r.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby', children: 'aria-describedby' }), ", waarmee je een description toevoegt, mag alleen 'platte tekst' bevatten. Platte tekst staat voor tekst zonder verdere opmaak en heeft geen extra HTML voor opmaak of betekenis."] }), '\n', (0, r.jsxs)(n.p, { children: ['Opgemaakte tekst noemen we ', (0, r.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/289', children: "'rich text'" }), '. ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'Screenreaders' }), ' geven deze informatie niet goed door of slaan het zelfs helemaal over in een description.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': NL Design System adviseert ook geen tooltip te gebruiken voor het verbergen van ', (0, r.jsx)(n.strong, { children: 'essenti\xeble informatie' }), '. Zie de discussie over ', (0, r.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/discussions/298', children: 'Toggletip' }), ' op GitHub.'] }), '\n', (0, r.jsx)(n.h2, { id: 'demo-video', children: 'Demo video' }), '\n', (0, r.jsx)(n.p, { children: 'In de demo-video kun je zien en/of horen dat VoiceOver de opsomming uit de description overslaat als een formulierveld de toetsenbordfocus krijgt. NVDA in Firefox doet hetzelfde.' }), '\n', (0, r.jsx)(d.Y, { id: 'ejiB-JSJzPE', title: 'Demo video opsomming uit de description in VoiceOver' }), '\n', (0, r.jsx)(n.h2, { id: 'description-beslisboom', children: 'Description-beslisboom' }), '\n', (0, r.jsx)(n.p, { children: 'Wat zijn de opties om informatie en uitleg toe te voegen aan een formulier en de invoervelden?\nVolg de beslisboom.' }), '\n', (0, r.jsx)(n.h3, { id: 'vraag-1-gaat-de-informatie-over-alle-formuliervelden', children: 'Vraag 1: Gaat de informatie over alle formuliervelden?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie vlak boven het formulier en onder het bijbehorende kopje. Je kunt hierbij rich text gebruiken.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 2.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'vraag-2-gaat-de-informatie-over-een-enkel-veld-of-een-groep-velden-gegroepeerd-in-een-fieldset', children: 'Vraag 2: Gaat de informatie over een enkel veld of een groep velden, gegroepeerd in een fieldset?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Een enkel veld' }), ': Ga naar vraag 3a.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Een groep velden' }), ': Ga naar vraag 4a.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'vraag-3a-is-de-informatie-bij-het-formulierveld-platte-tekst', children: 'Vraag 3a: Is de informatie bij het formulierveld platte tekst?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 3b.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'vraag-3b-is-het-noodzakelijk-dat-de-informatie-bij-het-formulierveld-rich-text-bevat', children: 'Vraag 3b: Is het noodzakelijk dat de informatie bij het formulierveld rich text bevat?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier en onder het bijbehorende kopje van de betreffende stap staat.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze alleen platte tekst bevat.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'vraag-4a-is-de-informatie-bij-de-gegroepeerde-velden-platte-tekst', children: 'Vraag 4a: Is de informatie bij de gegroepeerde velden platte tekst?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Ja' }), ': Plaats de informatie in een description gekoppelt aan de ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset/', children: (0, r.jsx)(n.code, { children: '<fieldset>' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Nee' }), ': Ga naar vraag 4b.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'vraag-4b-is-het-noodzakelijk-dat-de-informatie-bij-de-gegroepeerde-velden-rich-text-bevat', children: 'Vraag 4b: Is het noodzakelijk dat de informatie bij de gegroepeerde velden rich text bevat?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Ja' }), ': Overweeg een ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'meerstappenformulier' }), ', waarbij de informatie vlak boven het formulier van de betreffende stap staat.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Nee' }), ': Herschrijf de tekst van de description, zodat deze toch alleen platte tekst bevat. Dan ben je er zeker van dat \xe0lle gebruikers de informatie kunnen lezen.'] }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   const u = { title: 'Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Inhoud description', pagination_label: 'Inhoud description', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', slug: '/richtlijnen/formulieren/descriptions/inhoud', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    g = { id: 'richtlijnen/formulieren/description/content/README', title: 'Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', source: '@site/docs/richtlijnen/formulieren/description/2-content/README.mdx', sourceDirName: 'richtlijnen/formulieren/description/2-content', slug: '/richtlijnen/formulieren/descriptions/inhoud', permalink: '/richtlijnen/formulieren/descriptions/inhoud', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/2-content/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Gebruik alleen tekst in descriptions \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Inhoud description', pagination_label: 'Inhoud description', description: 'Richtlijnen voor de inhoud van beschrijvingen in een formulier.', slug: '/richtlijnen/formulieren/descriptions/inhoud', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Koppel description', permalink: '/richtlijnen/formulieren/descriptions/koppelen' }, next: { title: 'Plaatsing description', permalink: '/richtlijnen/formulieren/descriptions/plaatsing' } },
    j = {},
    v = [];
   function b(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(h, {}), '\n', (0, r.jsx)(c, {}), '\n', (0, r.jsx)(i.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b();
   }
  },
  43599: (e, n, t) => {
   t.d(n, { X: () => v });
   var r = t(41179),
    o = t(37943),
    i = t(4814),
    l = t(64642),
    s = t(93872),
    a = t(86017),
    c = t(48231),
    d = t(75119),
    p = t(75271),
    h = t(60027),
    u = t(52676);
   const m = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(o.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, u.jsx)(o.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   m.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: (0, u.jsx)(o.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, u.jsx)(o.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   j.displayName = 'SurfaceContainer';
   const v = (e) => {
    let { code: n, copy: t = !0, defaultExpandedCode: v = !1, displayCode: b = !0, children: f, container: x = 'document', language: y, designTokens: k } = e;
    const w = 'function' == typeof f ? f() : f,
     _ = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : h.uS(_ || w),
     [E, C] = (0, p.useState)(N),
     [S, z] = (0, p.useState)(v);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await d.ZP.format(N, { parser: y, plugins: [l.Z, s.ZP, a.ZP, c.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [N]);
    const Z = (0, p.useId)();
    let P = p.Fragment;
    return (
     'paragraph' === x ? (P = m) : 'document' === x ? (P = g) : 'surface' === x && (P = j),
     (0, u.jsxs)('div', {
      className: (0, i.Z)('nlds-canvas'),
      children: [
       w && (0, u.jsx)('div', { className: (0, i.Z)('nlds-canvas__example'), children: (0, u.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, u.jsx)(P, { children: (0, u.jsx)(o.pu, { children: w }) }) }) }),
       b &&
        (0, u.jsx)('div', {
         className: (0, i.Z)('nlds-canvas__toolbar'),
         children: (0, u.jsx)(o.zx, {
          className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           z(!S);
          },
          'aria-expanded': S,
          'aria-controls': Z,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, u.jsxs)('div', {
         className: (0, i.Z)('nlds-canvas__code-block', !t && 'nlds-canvas__code-block--user-select-none'),
         id: Z,
         hidden: !S,
         children: [
          (0, u.jsx)(r.u, { codeBlockLabel: 'Codevoorbeeld', syntax: y, textContent: E, trim: !0 }),
          t &&
           (0, u.jsx)('div', {
            className: (0, i.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, u.jsx)(o.zx, {
             className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__copy-button'),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(E).catch((e) => console.error('Copy code failed', e));
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
   var r = t(37943),
    o = t(60648),
    i = t(75271),
    l = t(40761);
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
     p = c;
    const { title: h, type: u } = (0, i.useContext)(l.n),
     m = (0, i.useId)();
    return (
     d && (p = p.trim()),
     (0, a.jsx)(o.y$, {
      theme: s,
      code: p,
      language: t || '',
      children: (e) => {
       let { style: t, tokens: o, getLineProps: i, getTokenProps: l } = e;
       return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: m, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', h ? ': ' : ' ', h] }), (0, a.jsx)(r.dn, { tabIndex: 0, role: h ? 'region' : void 0, 'aria-labelledby': m, style: t, children: o.map((e, t) => (0, a.jsxs)('span', { ...i({ line: e }), children: [n && (0, a.jsx)('span', { children: t + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, t)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, t) => {
   t.d(n, { X: () => d, n: () => c });
   var r = t(69244),
    o = t(20061),
    i = t(37943),
    l = t(4814),
    s = t(75271),
    a = t(52676);
   const c = (0, s.createContext)({}),
    d = (e) => {
     let { title: n, appearance: t, description: s, children: d, figure: p } = e;
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div';
     return (0, a.jsxs)(u, { className: (0, l.Z)('nlds-guideline', `nlds-guideline--${t}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === t ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, l.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, a.jsx)(i.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(i.nv, { className: (0, l.Z)('nlds-guideline__badge', `nlds-guideline__badge--${t}`), children: [(0, a.jsx)(o.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, a.jsx)(i.nv, { children: n })] }), s] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(c.Provider, { value: { title: n, type: h[t] }, children: d }) })] });
    };
  },
  97233: (e, n, t) => {
   t.d(n, { Y: () => i });
   var r = t(84263),
    o = t(52676);
   const i = (e) => {
    let { id: n, title: t, ...i } = e;
    return (0, o.jsx)(r.Z, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: n, title: t, poster: 'maxresdefault', ...i });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => l });
   var r = t(75271);
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
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : l(e.components)), r.createElement(i.Provider, { value: n }, e.children);
   }
  },
  84263: (e, n, t) => {
   t.d(n, { Z: () => l });
   var r = t(75271),
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
     s = t[1],
     a = r.useState(e.alwaysLoadIframe || !1),
     c = a[0],
     d = a[1],
     p = encodeURIComponent(e.id),
     h = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     u = e.title,
     m = e.poster || 'hqdefault',
     g = e.announce || 'Watch',
     j = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     v = new URLSearchParams(o(o(o(o({}, e.muted ? { mute: '1' } : {}), j ? { autoplay: '1' } : {}), e.enableJsApi ? { enablejsapi: '1' } : {}), e.playlist ? { list: p } : {}));
    e.params &&
     new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach(function (e, n) {
      v.append(n, e);
     });
    var b = e.noCookie;
    b = e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com';
    var f = e.playlist ? ''.concat(b, '/embed/videoseries?').concat(v.toString()) : ''.concat(b, '/embed/').concat(p, '?').concat(v.toString()),
     x = !e.thumbnail && !e.playlist && 'maxresdefault' === m,
     y = e.webp ? 'webp' : 'jpg',
     k = e.webp ? 'vi_webp' : 'vi',
     w = x
      ? (function (e, n, t, o) {
         void 0 === o && (o = 'maxresdefault');
         var l = (0, r.useState)(''),
          s = l[0],
          a = l[1];
         return (
          (0, r.useEffect)(
           function () {
            var r = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/').concat(o, '.').concat(t),
             l = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/hqdefault.').concat(t),
             s = i[o],
             c = new Image();
            (c.onload = function () {
             c.width < s ? a(l) : a(r);
            }),
             (c.onerror = function () {
              return a(l);
             }),
             (c.src = r);
           },
           [e],
          ),
          s
         );
        })(e.id, k, y, m)
      : null,
     _ =
      e.thumbnail ||
      w ||
      'https://i.ytimg.com/'
       .concat(k, '/')
       .concat(e.playlist ? h : p, '/')
       .concat(m, '.')
       .concat(y),
     N = e.activatedClass || 'lyt-activated',
     E = e.adNetwork || !1,
     C = e.aspectHeight || 9,
     S = e.aspectWidth || 16,
     z = e.iframeClass || '',
     Z = e.playerClass || 'lty-playbtn',
     P = e.wrapperClass || 'yt-lite',
     I = e.onIframeAdded || function () {},
     F = e.rel ? 'prefetch' : 'preload',
     D = e.containerElement || 'article',
     R = e.style || {};
    return (
     r.useEffect(
      function () {
       c && I();
      },
      [c],
     ),
     r.createElement(
      r.Fragment,
      null,
      r.createElement('link', { rel: F, href: _, as: 'image' }),
      r.createElement(r.Fragment, null, l && r.createElement(r.Fragment, null, r.createElement('link', { rel: 'preconnect', href: b }), r.createElement('link', { rel: 'preconnect', href: 'https://www.google.com' }), E && r.createElement(r.Fragment, null, r.createElement('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), r.createElement('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })))),
      r.createElement(
       D,
       {
        onPointerOver: function () {
         l || s(!0);
        },
        onClick: function () {
         c || d(!0);
        },
        className: ''.concat(P, ' ').concat(c ? N : ''),
        'data-title': u,
        style: o(o({ backgroundImage: 'url('.concat(_, ')') }, { '--aspect-ratio': ''.concat((C / S) * 100, '%') }), R),
       },
       r.createElement('button', { type: 'button', className: Z, 'aria-label': ''.concat(g, ' ').concat(u) }),
       c && r.createElement('iframe', { ref: n, className: z, title: u, width: '560', height: '315', frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: f }),
      ),
     )
    );
   });
  },
 },
]);
