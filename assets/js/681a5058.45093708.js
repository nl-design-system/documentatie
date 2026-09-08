'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [56175],
 {
  15175(e, n, r) {
   r.d(n, { M: () => d });
   var o = r(46447),
    t = r(16194),
    l = r(30758),
    i = r(51519);
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
   var s = r(86070);
   function d({ lineNumber: e, syntax: n, textContent: r, trim: d }) {
    let c = r;
    const { title: p, type: h } = (0, l.useContext)(i.x),
     u = (0, l.useId)();
    return (d && (c = c.trim()), (0, s.jsx)(t.f4, { theme: a, code: c, language: n || '', children: ({ style: n, tokens: r, getLineProps: t, getTokenProps: l }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: u, children: ['codevoorbeeld ', h ? `\u201c${h}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, s.jsx)(o.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': u, style: n, children: r.map((n, r) => (0, s.jsxs)('span', { ...t({ line: n }), children: [e && (0, s.jsx)('span', { children: r + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...l({ token: e }) }, n)), '\n'] }, r)) })] }) }));
   }
  },
  18439(e, n, r) {
   r.d(n, { R: () => i, x: () => a });
   var o = r(30758);
   const t = {},
    l = o.createContext(t);
   function i(e) {
    const n = o.useContext(l);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : i(e.components)), o.createElement(l.Provider, { value: n }, e.children));
   }
  },
  20729(e, n, r) {
   (r.r(n), r.d(n, { assets: () => j, contentTitle: () => g, default: () => k, frontMatter: () => v, metadata: () => o, toc: () => b }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/help/avoid-input-mask/index","title":"Maak het makkelijk om flexibel een veld in te voeren","description":"Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.","source":"@site/docs/richtlijnen/formulieren/help/8-avoid-input-mask/index.mdx","sourceDirName":"richtlijnen/formulieren/help/8-avoid-input-mask","slug":"/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen","permalink":"/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/8-avoid-input-mask/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Maak het makkelijk om flexibel een veld in te voeren","title_sm":"Vermijd invoerpatronen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Vermijd invoerpatronen","pagination_label":"Vermijd invoerpatronen","description":"Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.","slug":"/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Controleren en aanpassen","permalink":"/richtlijnen/formulieren/voorkom-fouten/controleren-en-aanpassen"},"next":{"title":"Wanneer gebruik je welk formulierelement","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/"}}');
   var t = r(86070),
    l = r(18439),
    i = r(49539);
   function a(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'vermijd-invoerpatroon-op-een-formulierveld', children: 'Vermijd invoerpatroon op een formulierveld' }) }), '\n', (0, t.jsx)(n.p, { children: 'Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.' }), '\n', (0, t.jsx)(n.p, { children: 'Wanneer je een gebruiker dwingt om volgens een vast patroon bijvoorbeeld van telefoonnummer in te voeren, kan dit leiden tot verwarring als ze alleen een mobiel nummer heeft.' }), '\n', (0, t.jsx)(n.p, { children: 'Een vast patroon kan ook een blokkade zijn om een formulier in te vullen. Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Het telefoonnummer past niet in het vereiste patroon: de gebruiker wil een buitenlands nummer invoeren, maar dat kan niet.' }), '\n', (0, t.jsx)(n.li, { children: "De gebruiker wil belangrijke informatie toevoegen zoals: 'alleen 's middags bellen' maar dat kan niet." }), '\n', (0, t.jsx)(n.li, { children: 'De gebruiker begrijpt niet wat er fout gaat omdat bijvoorbeeld letters niet kunnen worden ingevoerd en er geen goede feedback is over wat er fout gaat.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': Er zijn situaties waar het precies invullen van een formulierveld vereist is, zoals bijvoorbeeld bij het invoeren van een wachtwoord. Geef in dat geval altijd duidelijk in de description aan ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes/', children: 'hoe een veld in te vullen' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'wat-is-een-patroon-op-een-invoerveld', children: 'Wat is een patroon op een invoerveld?' }), '\n', (0, t.jsx)(n.p, { children: 'Een patroon legt precies vast hoe een formulierveld moet worden ingevuld en staat geen andere invoer toe.' }), '\n', (0, t.jsxs)(n.p, { children: ['Dus kan door het gebruik van het ', (0, t.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern', children: ['HTML-attribuut ', (0, t.jsx)(n.code, { children: 'pattern' })] }), ', in combinatie met JavaScript.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het ', (0, t.jsx)(n.code, { children: 'pattern' }), ' legt vast wat precies de waarde moet zijn, JavaScript controleert die waarde, past eventueel de layout aan en blokkeert niet-geldige invoer.'] }), '\n', (0, t.jsx)(n.p, { children: 'Hoe de gebruiker een veld moet invoeren volgens het gewenste patroon staat dan in de description of in een placeholder.' }), '\n', (0, t.jsx)(n.p, { children: 'Je kunt een invoerveld van een voornaam beperken tot bijvoorbeeld minimaal 3 en maximaal 12 karakters.\nDan heb je pech als je Jo of Claus-Casimir heet.' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<input id="voornaam" name="voornaam" type="text" pattern="\\w{3,16}" autocomplete="given-name" />\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Je kunt een invoerveld voor een telefoonnummer een verplicht formaat geven.\nDan heb je pech als je geen vaste telefoon meer hebt of een buitenlands nummer wilt opgeven.' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<input\n  type="tel"\n  id="telefoon"\n  name="telefoon"\n  pattern="[0-9]{3}-[0-9]{7}"\n  placeholder="___-_______"\n  autocomplete="tel"\n/>\n' }) }), '\n', (0, t.jsx)(n.h2, { id: 'de-problemen-met-de-gebruikerservaring-en-de-toegankelijkheid-van-invoerpatronen', children: 'De problemen met de gebruikerservaring en de toegankelijkheid van invoerpatronen' }), '\n', (0, t.jsxs)(n.p, { children: ['Adam Silver vat het goed samen in zijn artikel ', (0, t.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-input-masks-and-what-to-do-instead/', children: (0, t.jsx)('span', { lang: 'en', children: 'The problem with input masks and what to do instead' }) }), '.'] }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Het patroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.' }), '\n', (0, t.jsx)(n.li, { children: "Afgedwongen patronen zijn verwarrend, de cursor verspringt automatisch naar een volgende positie en speciale tekens zoals '-', '(' of ')' kunnen niet worden verwijderd." }), '\n', (0, t.jsx)(n.li, { children: 'De placeholder met het voorbeeld kan lijken op een al ingevuld veld.' }), '\n', (0, t.jsx)(n.li, { children: 'De placeholder met het voorbeeld verdwijnt bij het invullen en je weet niet meer hoe de rest van de waarde in te vullen.' }), '\n', (0, t.jsx)(n.li, { children: 'Omdat de er tekens worden verwijderd of overgeslagen lijkt het alsof er wat fout gaat zonder dat er een meteen foutmelding verschijnt.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['In het artikel van Giovani Camara ', (0, t.jsx)(n.a, { href: 'https://giovanicamara.com/blog/accessible-input-masking/', children: (0, t.jsx)('span', { lang: 'en', children: 'Accessible input masking' }) }), ' laat hij de YouTube video ', (0, t.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=rTk3XNSXJXY', children: (0, t.jsx)('span', { lang: 'en', children: 'Allow users to edit anywhere' }) }), ' zien wat er fout kan gaan als een gebruiker een waarde wil wijzigen. De cursus kan vanzelf naar het einde van de waarde springen, terwijl je het eerste karakter wilt aanpassen. Dit is voor iedereen irritant en leidt tot fouten.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het aangeven van invoerpatronen in de placeholder of in het value-attribute kan heel zijn onduidelijk voor gebruikers van ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '. Een opsomming van underscores is niet erg informatief. Kijk en luister naar de ', (0, t.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=7WWQXGgRDLc', children: 'demo op YouTube van Giovani Camara' }), ' hiervan met VoiceOver.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Is een exacte invoer nodig, bijvoorbeeld bij een geboortedatum, biedt dan een optie aan die iedereen makkelijk kan invullen. De richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen/', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), ' gaat hier uitgebreid op in.'] }), '\n', (0, t.jsx)(n.p, { children: 'Daarnaast zijn een goede description en duidelijke foutmeldingen belangrijk. Help de gebruiker en laat deze niet puzzelen over hoe precies een veld in te vullen en wat er nu weer fout gaat.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   var d = r(80731),
    c = r(51519);
   function p(e) {
    const n = { h2: 'h2', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Geef in de description aan hoe een veld kan worden ingevoerd.', children: (0, t.jsx)(d.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'bevestigingcode', children: 'Je bevestigingcode' }) }), (0, t.jsx)('p', { id: 'description-bevestigingcode', children: 'Vul een nummer van 8 cijfers in.' }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', inputMode: 'numeric', id: 'bevestigingcode', name: 'bevestigingcode', 'aria-describedby': 'description-bevestigingcode' }) })] }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'Gebruik het pattern-attribuut met het invoerpatroon en geef aan hoe een veld in te vullen met de placeholder.', description: 'Dit voorbeeld valideert de waarde niet met JavaScript en is alleen ter illustratie.', children: (0, t.jsx)(d.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'postcode2', children: 'Je postcode' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', placeholder: '____ __', id: 'postcode2', name: 'postcode', pattern: '[1-9][0-9]{3}\\s?[a-zA-Z]{2}', autoComplete: 'postal-code' }) })] }) }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.3/', children: 'Succescriterium 3.3.3 Foutsuggestie' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const v = { title: 'Maak het makkelijk om flexibel een veld in te voeren', title_sm: 'Vermijd invoerpatronen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Vermijd invoerpatronen', pagination_label: 'Vermijd invoerpatronen', description: 'Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.', slug: '/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    j = {},
    b = [{ value: 'Wat is een patroon op een invoerveld?', id: 'wat-is-een-patroon-op-een-invoerveld', level: 2 }, { value: 'De problemen met de gebruikerservaring en de toegankelijkheid van invoerpatronen', id: 'de-problemen-met-de-gebruikerservaring-en-de-toegankelijkheid-van-invoerpatronen', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...i.RM];
   function x(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(s, {}), '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(m, {}), '\n', (0, t.jsx)(i.Ay, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x();
   }
  },
  49539(e, n, r) {
   r.d(n, { Ay: () => a, RM: () => l });
   var o = r(86070),
    t = r(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function i(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(i, { ...e }) }) : i(e);
   }
  },
  51519(e, n, r) {
   r.d(n, { $: () => p, x: () => c });
   var o = r(4077),
    t = r(58315),
    l = r(46447),
    i = r(13526),
    a = r(66116),
    s = r(30758),
    d = r(86070);
   const c = (0, s.createContext)({}),
    p = ({ title: e, appearance: n, description: r, children: s, figure: p }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      u = p ? 'figure' : 'div',
      m = p ? 'figcaption' : 'div',
      v = 'string' == typeof r ? (0, d.jsx)(a.oz, { components: { a: l.N_ }, children: r }) : r;
     return (0, d.jsxs)(u, { className: (0, i.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(m, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(l.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, d.jsx)(l.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(l.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, d.jsx)(l.fz, { children: e })] }), v] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: s }) })] });
    };
  },
  70348(e, n, r) {
   r.d(n, { K: () => d, n: () => s });
   var o = r(13526),
    t = r(30758),
    l = r(96345),
    i = r(37168),
    a = r(86070);
   const s = (0, t.forwardRef)(({ as: e, className: n, children: r, ...t }, l) => {
     const i = e || 'div',
      s = (0, o.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, a.jsx)(i, { ref: l, className: s, ...t, children: r });
    }),
    d = ({ className: e, classNamePanel: n, label: r, heading: t, headingLevel: s, headingApperance: d, ...c }) => {
     const p = (0, o.A)('utrecht-accordion__section', e),
      h = (0, o.A)('utrecht-accordion__panel', n);
     return (0, a.jsxs)('details', { className: p, ...c, children: [(0, a.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, a.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, a.jsx)('span', { className: 'nl-button__icon-start', children: (0, a.jsx)(l.A, {}) }), (0, a.jsxs)('span', { className: 'nl-button__label', children: [t && (0, a.jsx)(i.D, { level: s, appearance: d, children: t }), r] })] }) }), (0, a.jsx)('div', { className: h, children: c.children })] });
    };
  },
  80731(e, n, r) {
   r.d(n, { H: () => f });
   var o = r(15175),
    t = r(46447),
    l = r(13526),
    i = r(68148),
    a = r(9016),
    s = r(69303),
    d = r(91635),
    c = r(30734),
    p = r(30758),
    h = r(31186),
    u = r(65904),
    m = r.n(u),
    v = r(70348),
    g = r(89974),
    j = r(86070);
   const b = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(t.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, j.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   b.displayName = 'ParagraphContainer';
   const x = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, j.jsx)(t.yo, { className: (0, l.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   x.displayName = 'DocumentContainer';
   const k = ({ children: e }) => (0, j.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   k.displayName = 'SurfaceContainer';
   const f = globalThis.isAstro
    ? ({ language: e, className: n, code: r = '<p>No code provided</p>', rawCode: o, copyCode: t, defaultExpandedCode: i, designTokens: a }) => {
       const s = 'string' == typeof r ? r : o || '',
        d = 'string' == typeof r ? m().highlight(r, m().languages[e], e) : m().highlight(o || '', m().languages[e], e);
       return (0, j.jsxs)('div', { className: (0, l.A)('ma-canvas-astro', n), children: [(0, j.jsx)('div', { className: 'voorbeeld-theme', style: a, children: (0, j.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: s } }) }), (0, j.jsx)(v.n, { children: (0, j.jsxs)(v.K, { label: 'Code', open: i, children: [(0, j.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, j.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: d } }) }), 'allow' === t && (0, j.jsx)(g.$, { 'data-copy-code': s, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: r = !1, displayCode: u = !0, children: m, container: v = 'document', language: g, designTokens: f }) => {
       const y = 'function' == typeof m ? m() : m,
        _ = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : h.qV(_ || y),
        [N, z] = (0, p.useState)(w),
        [A, C] = (0, p.useState)(r);
       (0, p.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(w, { parser: g, plugins: [i.A, a.Ay, s.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         z(e);
        })();
       }, [w]);
       const S = (0, p.useId)();
       let D = p.Fragment;
       return (
        'paragraph' === v ? (D = b) : 'document' === v ? (D = x) : 'surface' === v && (D = k),
        (0, j.jsxs)('div', {
         className: (0, l.A)('nlds-canvas'),
         children: [
          y && (0, j.jsx)('div', { className: (0, l.A)('nlds-canvas__example'), children: (0, j.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, j.jsx)(D, { children: (0, j.jsx)(t.v$, { children: y }) }) }) }),
          u &&
           (0, j.jsx)('div', {
            className: (0, l.A)('nlds-canvas__toolbar'),
            children: (0, j.jsx)(t.$n, {
             className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
             appearance: 'subtle-button',
             onClick: () => {
              C(!A);
             },
             'aria-expanded': A,
             'aria-controls': S,
             children: A ? 'Verberg code' : 'Bekijk code',
            }),
           }),
          u &&
           (0, j.jsxs)('div', {
            className: (0, l.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, j.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: g, textContent: N, trim: !0 }),
             n &&
              (0, j.jsx)('div', {
               className: (0, l.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, j.jsx)(t.$n, {
                className: (0, l.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  89974(e, n, r) {
   r.d(n, { $: () => o.$n });
   var o = r(50805);
  },
 },
]);
