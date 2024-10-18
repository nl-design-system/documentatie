'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [96233],
 {
  55400: (e, n, o) => {
   o.d(n, { ZP: () => i });
   var t = o(52676),
    l = o(24785);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  55863: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => g, contentTitle: () => m, default: () => b, frontMatter: () => p, metadata: () => v, toc: () => h });
   var t = o(52676),
    l = o(24785);
   function r(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'vermijd-invoerpatroon-op-een-formulierveld', children: 'Vermijd invoerpatroon op een formulierveld' }), '\n', (0, t.jsx)(n.p, { children: 'Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.' }), '\n', (0, t.jsx)(n.p, { children: 'Wanneer je een gebruiker dwingt om volgens een vast patroon bijvoorbeeld van telefoonnummer in te voeren, kan dit leiden tot verwarring als ze alleen een mobiel nummer heeft.' }), '\n', (0, t.jsx)(n.p, { children: 'Een vast patroon kan ook een blokkade zijn om een formulier in te vullen. Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Het telefoonnummer past niet in het vereiste patroon: de gebruiker wil een buitenlands nummer invoeren, maar dat kan niet.' }), '\n', (0, t.jsx)(n.li, { children: "De gebruiker wil belangrijke informatie toevoegen zoals: 'alleen 's middags bellen' maar dat kan niet." }), '\n', (0, t.jsx)(n.li, { children: 'De gebruiker begrijpt niet wat er fout gaat omdat bijvoorbeeld letters niet kunnen worden ingevoerd en er geen goede feedback is over wat er fout gaat.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': Er zijn situaties waar het precies invullen van een formulierveld vereist is, zoals bijvoorbeeld bij het invoeren van een wachtwoord. Geef in dat geval altijd duidelijk in de description aan ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes', children: 'hoe een veld in te vullen' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'wat-is-een-patroon-op-een-invoerveld', children: 'Wat is een patroon op een invoerveld?' }), '\n', (0, t.jsx)(n.p, { children: 'Een patroon legt precies vast hoe een formulierveld moet worden ingevuld en staat geen andere invoer toe.' }), '\n', (0, t.jsxs)(n.p, { children: ['Dus kan door het gebruik van het ', (0, t.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern', children: ['HTML-attribuut ', (0, t.jsx)(n.code, { children: 'pattern' })] }), ', in combinatie met JavaScript.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het ', (0, t.jsx)(n.code, { children: 'pattern' }), ' legt vast wat precies de waarde moet zijn, JavaScript controleert die waarde, past eventueel de layout aan en blokkeert niet-geldige invoer.'] }), '\n', (0, t.jsx)(n.p, { children: 'Hoe de gebruiker een veld moet invoeren volgens het gewenste patroon staat dan in de description of in een placeholder.' }), '\n', (0, t.jsx)(n.p, { children: 'Je kunt een invoerveld van een voornaam beperken tot bijvoorbeeld minimaal 3 en maximaal 12 karakters.\nDan heb je pech als je Jo of Claus-Casimir heet.' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<input id="voornaam" name="voornaam" type="text" pattern="\\w{3,16}" autocomplete="given-name" />\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Je kunt een invoerveld voor een telefoonnummer een verplicht formaat geven.\nDan heb je pech als je geen vaste telefoon meer hebt of een buitenlands nummer wilt opgeven.' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<input\n  type="tel"\n  id="telefoon"\n  name="telefoon"\n  pattern="[0-9]{3}-[0-9]{7}"\n  placeholder="___-_______"\n  autocomplete="tel"\n/>\n' }) }), '\n', (0, t.jsx)(n.h2, { id: 'de-problemen-met-de-gebruikerservaring-en-de-toegankelijkheid-van-invoerpatronen', children: 'De problemen met de gebruikerservaring en de toegankelijkheid van invoerpatronen' }), '\n', (0, t.jsxs)(n.p, { children: ['Adam Silver vat het goed samen in zijn artikel ', (0, t.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-input-masks-and-what-to-do-instead/', children: (0, t.jsx)('span', { lang: 'en', children: 'The problem with input masks and what to do instead' }) }), '.'] }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Het patroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.' }), '\n', (0, t.jsx)(n.li, { children: "Afgedwongen patronen zijn verwarrend, de cursor verspringt automatisch naar een volgende positie en speciale tekens zoals '-', '(' of ')' kunnen niet worden verwijderd." }), '\n', (0, t.jsx)(n.li, { children: 'De placeholder met het voorbeeld kan lijken op een al ingevuld veld.' }), '\n', (0, t.jsx)(n.li, { children: 'De placeholder met het voorbeeld verdwijnt bij het invullen en je weet niet meer hoe de rest van de waarde in te vullen.' }), '\n', (0, t.jsx)(n.li, { children: 'Omdat de er tekens worden verwijderd of overgeslagen lijkt het alsof er wat fout gaat zonder dat er een meteen foutmelding verschijnt.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['In het artikel van Giovani Camara ', (0, t.jsx)(n.a, { href: 'https://giovanicamara.com/blog/accessible-input-masking/', children: (0, t.jsx)('span', { lang: 'en', children: 'Accessible input masking' }) }), ' laat hij de YouTube video ', (0, t.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=rTk3XNSXJXY', children: (0, t.jsx)('span', { lang: 'en', children: 'Allow users to edit anywhere' }) }), ' zien wat er fout kan gaan als een gebruiker een waarde wil wijzigen. De cursus kan vanzelf naar het einde van de waarde springen, terwijl je het eerste karakter wilt aanpassen. Dit is voor iedereen irritant en leidt tot fouten.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het aangeven van invoerpatronen in de placeholder of in het value-attribute kan heel zijn onduidelijk voor screenreader gebruikers. Een opsomming van underscores is niet erg informatief. Kijk en luister naar de ', (0, t.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=7WWQXGgRDLc', children: 'demo op YouTube van Giovani Camara' }), ' hiervan met VoiceOver.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Is een exacte invoer nodig, bijvoorbeeld bij een geboortedatum, biedt dan een optie aan die iedereen makkelijk kan invullen. De richtlijn ', (0, t.jsx)(n.a, { href: 'https://nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), ' gaat hier uitgebreid op in.'] }), '\n', (0, t.jsx)(n.p, { children: 'Daarnaast zijn een goede description en duidelijke foutmeldingen belangrijk. Help de gebruiker en laat deze niet puzzelen over hoe precies een veld in te vullen en wat er nu weer fout gaat.' }), '\n', (0, t.jsx)(n.p, { children: 'Het geven van goede feedback over het juist invoeren van gegevens in formuliervelden is nodig om te voldoen aan de WCAG-succescriteria:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://nldesignsystem.nl/wcag/3.3.1', children: '3.3.1 Foutidentificatie' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://nldesignsystem.nl/wcag/3.3.3', children: '3.3.3 Foutsuggestie' }), ' (niveau AA).'] }), '\n'] })] });
   }
   function i(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
   var a = o(98480),
    s = o(91050);
   function d(e) {
    const n = { input: 'input', label: 'label', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(s.X, { appearance: 'do', title: 'Geef in de description aan hoe een veld kan worden ingevoerd.', children: (0, t.jsx)(a.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'bevestigingcode', children: 'Je bevestigingcode' }), (0, t.jsx)(n.p, { id: 'description-bevestigingcode', children: 'Vul een nummer van 8 cijfers in.' }), (0, t.jsx)(n.input, { type: 'text', inputmode: 'numeric', id: 'bevestigingcode', name: 'bevestigingcode', 'aria-describedby': 'description-bevestigingcode' })] }) }) }), '\n', (0, t.jsx)(s.X, { appearance: 'dont', title: 'Gebruik het pattern-attribuut met het invoerpatroon en geef aan hoe een veld in te vullen met de placeholder.', description: 'Dit voorbeeld valideert de waarde niet met JavaScript en is alleen ter illustratie.', children: (0, t.jsx)(a.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: 'postcode2', children: 'Je postcode' }), (0, t.jsx)(n.input, { type: 'text', placeholder: '____ __', id: 'postcode2', name: 'postcode', pattern: '[1-9][0-9]{3}\\s?[a-zA-Z]{2}', autocomplete: 'postal-code' })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
   var u = o(55400);
   const p = { title: 'Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Vermijd invoerpatronen', pagination_label: 'Vermijd invoerpatronen', description: 'Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.', slug: '/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    v = { id: 'richtlijnen/formulieren/help/avoid-input-mask/README', title: 'Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', description: 'Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.', source: '@site/docs/richtlijnen/formulieren/help/8-avoid-input-mask/README.mdx', sourceDirName: 'richtlijnen/formulieren/help/8-avoid-input-mask', slug: '/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/8-avoid-input-mask/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Vermijd invoerpatronen', pagination_label: 'Vermijd invoerpatronen', description: 'Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.', slug: '/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Controleren en aanpassen', permalink: '/en/richtlijnen/formulieren/voorkom-fouten/controleren-en-aanpassen' }, next: { title: 'Wanneer gebruik je welk formulierelement', permalink: '/en/richtlijnen/formulieren/wanneer-welk-form-element/' } },
    g = {},
    h = [];
   function j(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(i, {}), '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(u.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j();
   }
  },
  98480: (e, n, o) => {
   o.d(n, { X: () => b });
   var t = o(46506),
    l = o(4814),
    r = o(25585),
    i = o(40282),
    a = o(40678),
    s = o(85722),
    d = o(6374),
    c = o(75271),
    u = o(60027);
   const p = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = o(41179),
    v = o(52676);
   const g = (e) => {
    let { children: n } = e;
    return (0, v.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: (0, v.jsx)(t.BB, { className: (0, l.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: (0, v.jsx)(t.nv, { className: p['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   g.displayName = 'ParagraphContainer';
   const h = (e) => {
    let { children: n } = e;
    return (0, v.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: (0, v.jsx)(t.BB, { className: (0, l.Z)('utrecht-document--surface', p['nlds-canvas__example-document']), children: n }) });
   };
   h.displayName = 'DocumentContainer';
   const j = (e) => {
    let { children: n } = e;
    return (0, v.jsx)(t.Tg, { className: p['nlds-canvas__example-surface'], children: n });
   };
   j.displayName = 'SurfaceContainer';
   const b = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: b = !1, displayCode: k = !0, children: x, container: _ = 'document', language: f, designTokens: y } = e,
     w = 'function' == typeof x ? x() : x,
     z = 'function' == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : u.uS(z || w),
     [Z, C] = (0, c.useState)(N),
     [D, S] = (0, c.useState)(b);
    (0, c.useEffect)(() => {
     (async () => {
      (Z = await d.ZP.format(N, { parser: f, plugins: [r.Z, i.ZP, a.ZP, s.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), C(Z);
     })();
    }, [N]);
    const E = (0, c.useId)();
    let M = c.Fragment;
    return (
     'paragraph' === _ ? (M = g) : 'document' === _ ? (M = h) : 'surface' === _ && (M = j),
     (0, v.jsxs)('div', {
      className: (0, l.Z)(p['nlds-canvas']),
      children: [
       w && (0, v.jsx)('div', { className: (0, l.Z)(p['nlds-canvas__example']), children: (0, v.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, v.jsx)(M, { children: (0, v.jsx)(t.pu, { children: w }) }) }) }),
       k &&
        (0, v.jsx)('div', {
         className: (0, l.Z)(p['nlds-canvas__toolbar']),
         children: (0, v.jsx)(t.zx, {
          className: (0, l.Z)(p['nlds-canvas__button'], p['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           S(!D);
          },
          'aria-expanded': D,
          'aria-controls': E,
          children: D ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       k &&
        (0, v.jsxs)('div', {
         className: (0, l.Z)(p['nlds-canvas__code-block'], !o && p['nlds-canvas__code-block--user-select-none']),
         id: E,
         hidden: !D,
         children: [
          (0, v.jsx)(m.u, { syntax: f, textContent: Z, trim: !0 }),
          o &&
           (0, v.jsx)('div', {
            className: (0, l.Z)(p['nlds-canvas__toolbar'], p['nlds-canvas__toolbar--copy']),
            children: (0, v.jsx)(t.zx, {
             className: (0, l.Z)(p['nlds-canvas__button'], p['nlds-canvas__copy-button']),
             appearance: 'subtle-button',
             onClick: () => {
              navigator.clipboard.writeText(Z).catch((e) => console.error('Copy code failed', e));
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
  41179: (e, n, o) => {
   o.d(n, { u: () => a });
   var t = o(46506),
    l = o(70739);
   o(75271);
   const r = {
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
   var i = o(52676);
   function a(e) {
    let { lineNumber: n, syntax: o, textContent: a, trim: s } = e,
     d = a;
    return (
     s && (d = d.trim()),
     (0, i.jsx)(l.y$, {
      theme: r,
      code: d,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: l, getLineProps: r, getTokenProps: a } = e;
       return (0, i.jsx)(t.dn, { style: o, children: l.map((e, o) => (0, i.jsxs)('span', { ...r({ line: e }), children: [n && (0, i.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, i.jsx)('span', { ...a({ token: e }) }, n)), '\n'] }, o)) });
      },
     })
    );
   }
  },
  91050: (e, n, o) => {
   o.d(n, { X: () => d });
   var t = o(77355),
    l = o(67663),
    r = o(46506),
    i = o(4814);
   o(75271);
   const a = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var s = o(52676);
   const d = (e) => {
    let { title: n, appearance: o, description: d, children: c, figure: u } = e;
    const p = 'Doen',
     m = 'Niet doen',
     v = u ? 'figure' : 'div',
     g = u ? 'figcaption' : 'div';
    return (0, s.jsxs)(v, { className: (0, i.Z)(a['nlds-guideline'], a[`nlds-guideline--${o}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(g, { className: (0, i.Z)(a['nlds-guideline__description']), children: ['dont' === o ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(r.nv, { className: (0, i.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${o}`]), children: [(0, s.jsx)(t.Z, { className: a['nlds-guideline__icon'] }), (0, s.jsx)('span', { className: a['nlds-guideline__title'], children: m })] }), (0, s.jsx)(r.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(r.nv, { className: (0, i.Z)(a['nlds-guideline__badge'], a[`nlds-guideline__badge--${o}`]), children: [(0, s.jsx)(l.Z, { className: a['nlds-guideline__icon'] }), (0, s.jsx)('span', { className: a['nlds-guideline__title'], children: p })] }), (0, s.jsx)(r.nv, { children: n })] }), d] }), (0, s.jsx)('div', { className: (0, i.Z)(a['nlds-guideline__example']), children: c })] });
   };
  },
  24785: (e, n, o) => {
   o.d(n, { Z: () => a, a: () => i });
   var t = o(75271);
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
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : i(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
