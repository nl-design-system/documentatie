'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [96233],
 {
  5547: (e, n, o) => {
   o.d(n, { ZP: () => l });
   var t = o(52676),
    r = o(40139);
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
  },
  36870: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => h, contentTitle: () => m, default: () => b, frontMatter: () => u, metadata: () => v, toc: () => g });
   var t = o(52676),
    r = o(40139),
    i = o(5547);
   function l(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'vermijd-invoerpatroon-op-een-formulierveld', children: 'Vermijd invoerpatroon op een formulierveld' }), '\n', (0, t.jsx)(n.p, { children: 'Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.' }), '\n', (0, t.jsx)(n.p, { children: 'Wanneer je een gebruiker dwingt om volgens een vast patroon bijvoorbeeld van telefoonnummer in te voeren, kan dit leiden tot verwarring als ze alleen een mobiel nummer heeft.' }), '\n', (0, t.jsx)(n.p, { children: 'Een vast patroon kan ook een blokkade zijn om een formulier in te vullen. Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Het telefoonnummer past niet in het vereiste patroon: de gebruiker wil een buitenlands nummer invoeren, maar dat kan niet.' }), '\n', (0, t.jsx)(n.li, { children: "De gebruiker wil belangrijke informatie toevoegen zoals: 'alleen 's middags bellen' maar dat kan niet." }), '\n', (0, t.jsx)(n.li, { children: 'De gebruiker begrijpt niet wat er fout gaat omdat bijvoorbeeld letters niet kunnen worden ingevoerd en er geen goede feedback is over wat er fout gaat.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': Er zijn situaties waar het precies invullen van een formulierveld vereist is, zoals bijvoorbeeld bij het invoeren van een wachtwoord. Geef in dat geval altijd duidelijk in de description aan ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes/', children: 'hoe een veld in te vullen' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'wat-is-een-patroon-op-een-invoerveld', children: 'Wat is een patroon op een invoerveld?' }), '\n', (0, t.jsx)(n.p, { children: 'Een patroon legt precies vast hoe een formulierveld moet worden ingevuld en staat geen andere invoer toe.' }), '\n', (0, t.jsxs)(n.p, { children: ['Dus kan door het gebruik van het ', (0, t.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern', children: ['HTML-attribuut ', (0, t.jsx)(n.code, { children: 'pattern' })] }), ', in combinatie met JavaScript.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het ', (0, t.jsx)(n.code, { children: 'pattern' }), ' legt vast wat precies de waarde moet zijn, JavaScript controleert die waarde, past eventueel de layout aan en blokkeert niet-geldige invoer.'] }), '\n', (0, t.jsx)(n.p, { children: 'Hoe de gebruiker een veld moet invoeren volgens het gewenste patroon staat dan in de description of in een placeholder.' }), '\n', (0, t.jsx)(n.p, { children: 'Je kunt een invoerveld van een voornaam beperken tot bijvoorbeeld minimaal 3 en maximaal 12 karakters.\nDan heb je pech als je Jo of Claus-Casimir heet.' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<input id="voornaam" name="voornaam" type="text" pattern="\\w{3,16}" autocomplete="given-name" />\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Je kunt een invoerveld voor een telefoonnummer een verplicht formaat geven.\nDan heb je pech als je geen vaste telefoon meer hebt of een buitenlands nummer wilt opgeven.' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<input\n  type="tel"\n  id="telefoon"\n  name="telefoon"\n  pattern="[0-9]{3}-[0-9]{7}"\n  placeholder="___-_______"\n  autocomplete="tel"\n/>\n' }) }), '\n', (0, t.jsx)(n.h2, { id: 'de-problemen-met-de-gebruikerservaring-en-de-toegankelijkheid-van-invoerpatronen', children: 'De problemen met de gebruikerservaring en de toegankelijkheid van invoerpatronen' }), '\n', (0, t.jsxs)(n.p, { children: ['Adam Silver vat het goed samen in zijn artikel ', (0, t.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-input-masks-and-what-to-do-instead/', children: (0, t.jsx)('span', { lang: 'en', children: 'The problem with input masks and what to do instead' }) }), '.'] }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Het patroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.' }), '\n', (0, t.jsx)(n.li, { children: "Afgedwongen patronen zijn verwarrend, de cursor verspringt automatisch naar een volgende positie en speciale tekens zoals '-', '(' of ')' kunnen niet worden verwijderd." }), '\n', (0, t.jsx)(n.li, { children: 'De placeholder met het voorbeeld kan lijken op een al ingevuld veld.' }), '\n', (0, t.jsx)(n.li, { children: 'De placeholder met het voorbeeld verdwijnt bij het invullen en je weet niet meer hoe de rest van de waarde in te vullen.' }), '\n', (0, t.jsx)(n.li, { children: 'Omdat de er tekens worden verwijderd of overgeslagen lijkt het alsof er wat fout gaat zonder dat er een meteen foutmelding verschijnt.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['In het artikel van Giovani Camara ', (0, t.jsx)(n.a, { href: 'https://giovanicamara.com/blog/accessible-input-masking/', children: (0, t.jsx)('span', { lang: 'en', children: 'Accessible input masking' }) }), ' laat hij de YouTube video ', (0, t.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=rTk3XNSXJXY', children: (0, t.jsx)('span', { lang: 'en', children: 'Allow users to edit anywhere' }) }), ' zien wat er fout kan gaan als een gebruiker een waarde wil wijzigen. De cursus kan vanzelf naar het einde van de waarde springen, terwijl je het eerste karakter wilt aanpassen. Dit is voor iedereen irritant en leidt tot fouten.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het aangeven van invoerpatronen in de placeholder of in het value-attribute kan heel zijn onduidelijk voor gebruikers van ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '. Een opsomming van underscores is niet erg informatief. Kijk en luister naar de ', (0, t.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=7WWQXGgRDLc', children: 'demo op YouTube van Giovani Camara' }), ' hiervan met VoiceOver.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Is een exacte invoer nodig, bijvoorbeeld bij een geboortedatum, biedt dan een optie aan die iedereen makkelijk kan invullen. De richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen/', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), ' gaat hier uitgebreid op in.'] }), '\n', (0, t.jsx)(n.p, { children: 'Daarnaast zijn een goede description en duidelijke foutmeldingen belangrijk. Help de gebruiker en laat deze niet puzzelen over hoe precies een veld in te vullen en wat er nu weer fout gaat.' }), '\n', (0, t.jsx)(n.p, { children: 'Het geven van goede feedback over het juist invoeren van gegevens in formuliervelden is nodig om te voldoen aan de WCAG-succescriteria:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/3.3.1/', children: '3.3.1 Foutidentificatie' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/3.3.3/', children: '3.3.3 Foutsuggestie' }), ' (niveau AA).'] }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
   var s = o(43599),
    d = o(40761);
   function c(e) {
    const n = { h2: 'h2', input: 'input', label: 'label', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(d.X, { appearance: 'do', title: 'Geef in de description aan hoe een veld kan worden ingevoerd.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { htmlFor: 'bevestigingcode', children: 'Je bevestigingcode' }), (0, t.jsx)(n.p, { id: 'description-bevestigingcode', children: 'Vul een nummer van 8 cijfers in.' }), (0, t.jsx)(n.input, { type: 'text', inputMode: 'numeric', id: 'bevestigingcode', name: 'bevestigingcode', 'aria-describedby': 'description-bevestigingcode' })] }) }) }), '\n', (0, t.jsx)(d.X, { appearance: 'dont', title: 'Gebruik het pattern-attribuut met het invoerpatroon en geef aan hoe een veld in te vullen met de placeholder.', description: 'Dit voorbeeld valideert de waarde niet met JavaScript en is alleen ter illustratie.', children: (0, t.jsx)(s.X, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { htmlFor: 'postcode2', children: 'Je postcode' }), (0, t.jsx)(n.input, { type: 'text', placeholder: '____ __', id: 'postcode2', name: 'postcode', pattern: '[1-9][0-9]{3}\\s?[a-zA-Z]{2}', autoComplete: 'postal-code' })] }) }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   const u = { title: 'Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Vermijd invoerpatronen', pagination_label: 'Vermijd invoerpatronen', description: 'Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.', slug: '/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    v = { id: 'richtlijnen/formulieren/help/avoid-input-mask/README', title: 'Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', description: 'Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.', source: '@site/docs/richtlijnen/formulieren/help/8-avoid-input-mask/README.mdx', sourceDirName: 'richtlijnen/formulieren/help/8-avoid-input-mask', slug: '/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen', permalink: '/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/8-avoid-input-mask/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken \xb7 Voorkom fouten in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Vermijd invoerpatronen', pagination_label: 'Vermijd invoerpatronen', description: 'Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.', slug: '/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Controleren en aanpassen', permalink: '/richtlijnen/formulieren/voorkom-fouten/controleren-en-aanpassen' }, next: { title: 'Wanneer gebruik je welk formulierelement', permalink: '/richtlijnen/formulieren/wanneer-welk-form-element/' } },
    h = {},
    g = [];
   function j(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(a, {}), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(i.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j();
   }
  },
  43599: (e, n, o) => {
   o.d(n, { X: () => j });
   var t = o(41179),
    r = o(37943),
    i = o(4814),
    l = o(64642),
    a = o(93872),
    s = o(86017),
    d = o(48231),
    c = o(75119),
    p = o(75271),
    u = o(60027),
    m = o(52676);
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(r.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, m.jsx)(r.nv, { className: 'nlds-canvas__example-paragraph', children: n }) }) });
   };
   v.displayName = 'ParagraphContainer';
   const h = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: (0, m.jsx)(r.BB, { className: (0, i.Z)('utrecht-document--surface', 'nlds-canvas__example-document'), children: n }) });
   };
   h.displayName = 'DocumentContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(r.Tg, { className: 'nlds-canvas__example-surface', children: n });
   };
   g.displayName = 'SurfaceContainer';
   const j = (e) => {
    let { code: n, copy: o = !0, defaultExpandedCode: j = !1, displayCode: b = !0, children: k, container: x = 'document', language: f, designTokens: y } = e;
    const w = 'function' == typeof k ? k() : k,
     _ = 'function' == typeof n ? n() : (0, p.isValidElement)(n) ? n : void 0,
     z = 'string' == typeof n ? n : u.uS(_ || w),
     [N, C] = (0, p.useState)(z),
     [Z, D] = (0, p.useState)(j);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await c.ZP.format(z, { parser: f, plugins: [l.Z, a.ZP, s.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      C(e);
     })();
    }, [z]);
    const S = (0, p.useId)();
    let E = p.Fragment;
    return (
     'paragraph' === x ? (E = v) : 'document' === x ? (E = h) : 'surface' === x && (E = g),
     (0, m.jsxs)('div', {
      className: (0, i.Z)('nlds-canvas'),
      children: [
       w && (0, m.jsx)('div', { className: (0, i.Z)('nlds-canvas__example'), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, m.jsx)(E, { children: (0, m.jsx)(r.pu, { children: w }) }) }) }),
       b &&
        (0, m.jsx)('div', {
         className: (0, i.Z)('nlds-canvas__toolbar'),
         children: (0, m.jsx)(r.zx, {
          className: (0, i.Z)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           D(!Z);
          },
          'aria-expanded': Z,
          'aria-controls': S,
          children: Z ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       b &&
        (0, m.jsxs)('div', {
         className: (0, i.Z)('nlds-canvas__code-block', !o && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !Z,
         children: [
          (0, m.jsx)(t.u, { codeBlockLabel: 'Codevoorbeeld', syntax: f, textContent: N, trim: !0 }),
          o &&
           (0, m.jsx)('div', {
            className: (0, i.Z)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, m.jsx)(r.zx, {
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
  41179: (e, n, o) => {
   o.d(n, { u: () => d });
   var t = o(37943),
    r = o(60648),
    i = o(75271),
    l = o(40761);
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
   var s = o(52676);
   function d(e) {
    let { lineNumber: n, syntax: o, textContent: d, trim: c } = e,
     p = d;
    const { title: u, type: m } = (0, i.useContext)(l.n),
     v = (0, i.useId)();
    return (
     c && (p = p.trim()),
     (0, s.jsx)(r.y$, {
      theme: a,
      code: p,
      language: o || '',
      children: (e) => {
       let { style: o, tokens: r, getLineProps: i, getTokenProps: l } = e;
       return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: v, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, s.jsx)(t.dn, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': v, style: o, children: r.map((e, o) => (0, s.jsxs)('span', { ...i({ line: e }), children: [n && (0, s.jsx)('span', { children: o + 1 }), e.map((e, n) => (0, s.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, o)) })] });
      },
     })
    );
   }
  },
  40761: (e, n, o) => {
   o.d(n, { X: () => c, n: () => d });
   var t = o(69244),
    r = o(20061),
    i = o(37943),
    l = o(4814),
    a = o(75271),
    s = o(52676);
   const d = (0, a.createContext)({}),
    c = (e) => {
     let { title: n, appearance: o, description: a, children: c, figure: p } = e;
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      v = p ? 'figcaption' : 'div';
     return (0, s.jsxs)(m, { className: (0, l.Z)('nlds-guideline', `nlds-guideline--${o}`), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(v, { className: 'nlds-guideline__description', children: ['dont' === o ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(i.nv, { className: (0, l.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, s.jsx)(t.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, s.jsx)(i.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(i.nv, { className: (0, l.Z)('nlds-guideline__badge', `nlds-guideline__badge--${o}`), children: [(0, s.jsx)(r.Z, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, s.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, s.jsx)(i.nv, { children: n })] }), a] }), (0, s.jsx)('div', { className: 'nlds-guideline__example', children: (0, s.jsx)(d.Provider, { value: { title: n, type: u[o] }, children: c }) })] });
    };
  },
  40139: (e, n, o) => {
   o.d(n, { Z: () => a, a: () => l });
   var t = o(75271);
   const r = {},
    i = t.createContext(r);
   function l(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), t.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
