'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [51297],
 {
  15638(e, n, r) {
   r.d(n, { $: () => p, x: () => c });
   var o = r(4077),
    t = r(58315),
    i = r(46447),
    l = r(13526),
    a = r(9547),
    s = r(30758),
    d = r(86070);
   const c = (0, s.createContext)({}),
    p = ({ title: e, appearance: n, description: r, children: s, figure: p }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      h = p ? 'figure' : 'div',
      v = p ? 'figcaption' : 'div',
      m = 'string' == typeof r ? (0, d.jsx)(a.oz, { children: r }) : r;
     return (0, d.jsxs)(h, { className: (0, l.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(v, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(t.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, d.jsx)(i.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(i.fz, { className: (0, l.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, d.jsx)(i.fz, { children: e })] }), m] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(c.Provider, { value: { title: e, type: u[n] }, children: s }) })] });
    };
  },
  18439(e, n, r) {
   r.d(n, { R: () => l, x: () => a });
   var o = r(30758);
   const t = {},
    i = o.createContext(t);
   function l(e) {
    const n = o.useContext(i);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), o.createElement(i.Provider, { value: n }, e.children));
   }
  },
  21479(e, n, r) {
   (r.r(n), r.d(n, { assets: () => j, contentTitle: () => g, default: () => x, frontMatter: () => m, metadata: () => o, toc: () => b }));
   const o = JSON.parse('{"id":"richtlijnen/formulieren/help/avoid-input-mask/README","title":"Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken","description":"Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.","source":"@site/docs/richtlijnen/formulieren/help/8-avoid-input-mask/README.mdx","sourceDirName":"richtlijnen/formulieren/help/8-avoid-input-mask","slug":"/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen","permalink":"/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help/8-avoid-input-mask/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Vermijd invoerpatronen","pagination_label":"Vermijd invoerpatronen","description":"Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.","slug":"/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Controleren en aanpassen","permalink":"/richtlijnen/formulieren/voorkom-fouten/controleren-en-aanpassen"},"next":{"title":"Wanneer gebruik je welk formulierelement","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/"}}');
   var t = r(86070),
    i = r(18439),
    l = r(78734);
   function a(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'vermijd-invoerpatroon-op-een-formulierveld', children: 'Vermijd invoerpatroon op een formulierveld' }) }), '\n', (0, t.jsx)(n.p, { children: 'Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.' }), '\n', (0, t.jsx)(n.p, { children: 'Wanneer je een gebruiker dwingt om volgens een vast patroon bijvoorbeeld van telefoonnummer in te voeren, kan dit leiden tot verwarring als ze alleen een mobiel nummer heeft.' }), '\n', (0, t.jsx)(n.p, { children: 'Een vast patroon kan ook een blokkade zijn om een formulier in te vullen. Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Het telefoonnummer past niet in het vereiste patroon: de gebruiker wil een buitenlands nummer invoeren, maar dat kan niet.' }), '\n', (0, t.jsx)(n.li, { children: "De gebruiker wil belangrijke informatie toevoegen zoals: 'alleen 's middags bellen' maar dat kan niet." }), '\n', (0, t.jsx)(n.li, { children: 'De gebruiker begrijpt niet wat er fout gaat omdat bijvoorbeeld letters niet kunnen worden ingevoerd en er geen goede feedback is over wat er fout gaat.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': Er zijn situaties waar het precies invullen van een formulierveld vereist is, zoals bijvoorbeeld bij het invoeren van een wachtwoord. Geef in dat geval altijd duidelijk in de description aan ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/geldige-waardes/', children: 'hoe een veld in te vullen' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'wat-is-een-patroon-op-een-invoerveld', children: 'Wat is een patroon op een invoerveld?' }), '\n', (0, t.jsx)(n.p, { children: 'Een patroon legt precies vast hoe een formulierveld moet worden ingevuld en staat geen andere invoer toe.' }), '\n', (0, t.jsxs)(n.p, { children: ['Dus kan door het gebruik van het ', (0, t.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern', children: ['HTML-attribuut ', (0, t.jsx)(n.code, { children: 'pattern' })] }), ', in combinatie met JavaScript.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het ', (0, t.jsx)(n.code, { children: 'pattern' }), ' legt vast wat precies de waarde moet zijn, JavaScript controleert die waarde, past eventueel de layout aan en blokkeert niet-geldige invoer.'] }), '\n', (0, t.jsx)(n.p, { children: 'Hoe de gebruiker een veld moet invoeren volgens het gewenste patroon staat dan in de description of in een placeholder.' }), '\n', (0, t.jsx)(n.p, { children: 'Je kunt een invoerveld van een voornaam beperken tot bijvoorbeeld minimaal 3 en maximaal 12 karakters.\nDan heb je pech als je Jo of Claus-Casimir heet.' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<input id="voornaam" name="voornaam" type="text" pattern="\\w{3,16}" autocomplete="given-name" />\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Je kunt een invoerveld voor een telefoonnummer een verplicht formaat geven.\nDan heb je pech als je geen vaste telefoon meer hebt of een buitenlands nummer wilt opgeven.' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<input\n  type="tel"\n  id="telefoon"\n  name="telefoon"\n  pattern="[0-9]{3}-[0-9]{7}"\n  placeholder="___-_______"\n  autocomplete="tel"\n/>\n' }) }), '\n', (0, t.jsx)(n.h2, { id: 'de-problemen-met-de-gebruikerservaring-en-de-toegankelijkheid-van-invoerpatronen', children: 'De problemen met de gebruikerservaring en de toegankelijkheid van invoerpatronen' }), '\n', (0, t.jsxs)(n.p, { children: ['Adam Silver vat het goed samen in zijn artikel ', (0, t.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-input-masks-and-what-to-do-instead/', children: (0, t.jsx)('span', { lang: 'en', children: 'The problem with input masks and what to do instead' }) }), '.'] }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Het patroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.' }), '\n', (0, t.jsx)(n.li, { children: "Afgedwongen patronen zijn verwarrend, de cursor verspringt automatisch naar een volgende positie en speciale tekens zoals '-', '(' of ')' kunnen niet worden verwijderd." }), '\n', (0, t.jsx)(n.li, { children: 'De placeholder met het voorbeeld kan lijken op een al ingevuld veld.' }), '\n', (0, t.jsx)(n.li, { children: 'De placeholder met het voorbeeld verdwijnt bij het invullen en je weet niet meer hoe de rest van de waarde in te vullen.' }), '\n', (0, t.jsx)(n.li, { children: 'Omdat de er tekens worden verwijderd of overgeslagen lijkt het alsof er wat fout gaat zonder dat er een meteen foutmelding verschijnt.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['In het artikel van Giovani Camara ', (0, t.jsx)(n.a, { href: 'https://giovanicamara.com/blog/accessible-input-masking/', children: (0, t.jsx)('span', { lang: 'en', children: 'Accessible input masking' }) }), ' laat hij de YouTube video ', (0, t.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=rTk3XNSXJXY', children: (0, t.jsx)('span', { lang: 'en', children: 'Allow users to edit anywhere' }) }), ' zien wat er fout kan gaan als een gebruiker een waarde wil wijzigen. De cursus kan vanzelf naar het einde van de waarde springen, terwijl je het eerste karakter wilt aanpassen. Dit is voor iedereen irritant en leidt tot fouten.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het aangeven van invoerpatronen in de placeholder of in het value-attribute kan heel zijn onduidelijk voor gebruikers van ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '. Een opsomming van underscores is niet erg informatief. Kijk en luister naar de ', (0, t.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=7WWQXGgRDLc', children: 'demo op YouTube van Giovani Camara' }), ' hiervan met VoiceOver.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Is een exacte invoer nodig, bijvoorbeeld bij een geboortedatum, biedt dan een optie aan die iedereen makkelijk kan invullen. De richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen/', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), ' gaat hier uitgebreid op in.'] }), '\n', (0, t.jsx)(n.p, { children: 'Daarnaast zijn een goede description en duidelijke foutmeldingen belangrijk. Help de gebruiker en laat deze niet puzzelen over hoe precies een veld in te vullen en wat er nu weer fout gaat.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   var d = r(58639),
    c = r(15638);
   function p(e) {
    const n = { h2: 'h2', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, t.jsx)(c.$, { appearance: 'do', title: 'Geef in de description aan hoe een veld kan worden ingevoerd.', children: (0, t.jsx)(d.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'bevestigingcode', children: 'Je bevestigingcode' }) }), (0, t.jsx)('p', { id: 'description-bevestigingcode', children: 'Vul een nummer van 8 cijfers in.' }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', inputMode: 'numeric', id: 'bevestigingcode', name: 'bevestigingcode', 'aria-describedby': 'description-bevestigingcode' }) })] }) }) }), '\n', (0, t.jsx)(c.$, { appearance: 'dont', title: 'Gebruik het pattern-attribuut met het invoerpatroon en geef aan hoe een veld in te vullen met de placeholder.', description: 'Dit voorbeeld valideert de waarde niet met JavaScript en is alleen ter illustratie.', children: (0, t.jsx)(d.H, { language: 'html', children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)('p', { children: (0, t.jsx)('label', { htmlFor: 'postcode2', children: 'Je postcode' }) }), (0, t.jsx)('p', { children: (0, t.jsx)('input', { type: 'text', placeholder: '____ __', id: 'postcode2', name: 'postcode', pattern: '[1-9][0-9]{3}\\s?[a-zA-Z]{2}', autoComplete: 'postal-code' }) })] }) }) })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.3/', children: 'Succescriterium 3.3.3 Foutsuggestie' }) }), '\n'] })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   const m = { title: 'Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Vermijd invoerpatronen', pagination_label: 'Vermijd invoerpatronen', description: 'Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.', slug: '/richtlijnen/formulieren/voorkom-fouten/geen-invoerpatronen', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    j = {},
    b = [{ value: 'Wat is een patroon op een invoerveld?', id: 'wat-is-een-patroon-op-een-invoerveld', level: 2 }, { value: 'De problemen met de gebruikerservaring en de toegankelijkheid van invoerpatronen', id: 'de-problemen-met-de-gebruikerservaring-en-de-toegankelijkheid-van-invoerpatronen', level: 2 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...l.RM];
   function k(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(s, {}), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(v, {}), '\n', (0, t.jsx)(l.Ay, {})] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(k, { ...e }) }) : k();
   }
  },
  58639(e, n, r) {
   r.d(n, { H: () => j });
   var o = r(69284),
    t = r(46447),
    i = r(13526),
    l = r(68148),
    a = r(9016),
    s = r(69303),
    d = r(91635),
    c = r(30734),
    p = r(30758),
    u = r(31186),
    h = r(86070);
   const v = ({ children: e }) => (0, h.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(t.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, h.jsx)(t.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   v.displayName = 'ParagraphContainer';
   const m = ({ children: e }) => (0, h.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: (0, h.jsx)(t.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   m.displayName = 'DocumentContainer';
   const g = ({ children: e }) => (0, h.jsx)(t.ui, { className: 'nlds-canvas__example-surface', children: e });
   g.displayName = 'SurfaceContainer';
   const j = ({ code: e, copy: n = !0, defaultExpandedCode: r = !1, displayCode: j = !0, children: b, container: k = 'document', language: x, designTokens: f }) => {
    const y = 'function' == typeof b ? b() : b,
     w = 'function' == typeof e ? e() : (0, p.isValidElement)(e) ? e : void 0,
     _ = 'string' == typeof e ? e : u.qV(w || y),
     [z, N] = (0, p.useState)(_),
     [A, C] = (0, p.useState)(r);
    (0, p.useEffect)(() => {
     (async () => {
      const e = await c.Ay.format(_, { parser: x, plugins: [l.A, a.Ay, s.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
      N(e);
     })();
    }, [_]);
    const S = (0, p.useId)();
    let D = p.Fragment;
    return (
     'paragraph' === k ? (D = v) : 'document' === k ? (D = m) : 'surface' === k && (D = g),
     (0, h.jsxs)('div', {
      className: (0, i.A)('nlds-canvas'),
      children: [
       y && (0, h.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, h.jsx)('div', { className: 'voorbeeld-theme', style: f, children: (0, h.jsx)(D, { children: (0, h.jsx)(t.v$, { children: y }) }) }) }),
       j &&
        (0, h.jsx)('div', {
         className: (0, i.A)('nlds-canvas__toolbar'),
         children: (0, h.jsx)(t.$n, {
          className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__toggle-code-button'),
          appearance: 'subtle-button',
          onClick: () => {
           C(!A);
          },
          'aria-expanded': A,
          'aria-controls': S,
          children: A ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       j &&
        (0, h.jsxs)('div', {
         className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
         id: S,
         hidden: !A,
         children: [
          (0, h.jsx)(o.M, { codeBlockLabel: 'Codevoorbeeld', syntax: x, textContent: z, trim: !0 }),
          n &&
           (0, h.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
            children: (0, h.jsx)(t.$n, {
             className: (0, i.A)('nlds-canvas__button', 'nlds-canvas__copy-button'),
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
  69284(e, n, r) {
   r.d(n, { M: () => d });
   var o = r(46447),
    t = r(16194),
    i = r(30758),
    l = r(15638);
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
    const { title: p, type: u } = (0, i.useContext)(l.x),
     h = (0, i.useId)();
    return (d && (c = c.trim()), (0, s.jsx)(t.f4, { theme: a, code: c, language: n || '', children: ({ style: n, tokens: r, getLineProps: t, getTokenProps: i }) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', u ? `\u201c${u}\u201d` : '', ' ', p ? ': ' : ' ', p] }), (0, s.jsx)(o.NG, { tabIndex: 0, role: p ? 'region' : void 0, 'aria-labelledby': h, style: n, children: r.map((n, r) => (0, s.jsxs)('span', { ...t({ line: n }), children: [e && (0, s.jsx)('span', { children: r + 1 }), n.map((e, n) => (0, s.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, r)) })] }) }));
   }
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => a, RM: () => i });
   var o = r(86070),
    t = r(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
