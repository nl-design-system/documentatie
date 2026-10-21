'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [6475],
 {
  368(e, n, t) {
   (t.r(n), t.d(n, { assets: () => x, contentTitle: () => b, default: () => y, frontMatter: () => j, metadata: () => r, toc: () => g }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/when-which/compat/index","title":"Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief","description":"Richtlijnen om een formulier door iedereen in te kunnen laten vullen.","source":"@site/docs/richtlijnen/formulieren/when-which/1-compat/index.mdx","sourceDirName":"richtlijnen/formulieren/when-which/1-compat","slug":"/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/when-which/1-compat/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief","title_sm":"Iedereen kan velden invullen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Iedereen kan velden invullen","pagination_label":"Iedereen kan velden invullen","description":"Richtlijnen om een formulier door iedereen in te kunnen laten vullen.","slug":"/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Wanneer gebruik je welk formulierelement","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/"},"next":{"title":"Kies het meest gebruiksvriendelijke formulierelement","permalink":"/richtlijnen/formulieren/wanneer-welk-form-element/kies-gebruiksvriendelijkheid"}}');
   var l = t(86070),
    i = t(18439),
    o = t(56672),
    s = t(38953),
    a = t(56528);
   function d(e) {
    const n = { h2: 'h2', ...(0, i.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden' }), '\n', (0, l.jsx)(a.$, { appearance: 'do', title: 'Uitvragen geboortedatum met een tekstveld.', children: (0, l.jsx)(s.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'date0', children: 'Geboortedatum' }) }), (0, l.jsx)('p', { id: 'description-date0', children: 'Bijvoorbeeld 31 december 1970.' }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'date0', type: 'text', autoComplete: 'bday', 'aria-describedby': 'description-date0' }) })] }) }) }), '\n', (0, l.jsx)(a.$, { appearance: 'do', title: 'Uitvragen geboortedatum met een datumveld.', description: 'De meeste browsers voegen zelf een datumkiezer toe.', children: (0, l.jsx)(s.H, { language: 'html', children: () => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'date1', children: 'Geboortedatum' }) }), (0, l.jsx)('p', { id: 'description-date1', children: 'Bijvoorbeeld 31/12/1970.' }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'date1', type: 'date', 'aria-describedby': 'description-date1', autoComplete: 'bday' }) })] }) }) }), '\n', (0, l.jsx)(a.$, { appearance: 'do', title: 'Uitvragen geboortedatum met een inputmode=numeric.', children: (0, l.jsx)(s.H, { language: 'html', designTokens: { '--utrecht-textbox-max-inline-size': '20ch' }, children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('fieldset', { children: [(0, l.jsx)('legend', { children: 'Geboortedatum' }), (0, l.jsxs)('div', { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'day2', children: 'Dag' }) }), (0, l.jsx)('p', { id: 'description-day2', children: 'Bijvoorbeeld 31.' }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'day2', type: 'text', inputMode: 'numeric', 'aria-describedby': 'description-day2', autoComplete: 'bday-day', maxLength: '2' }) })] }), (0, l.jsxs)('div', { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'month2', children: 'Maand' }) }), (0, l.jsx)('p', { id: 'description-month2', children: 'Bijvoorbeeld 12 voor december.' }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'month2', type: 'text', inputMode: 'numeric', 'aria-describedby': 'description-month2', autoComplete: 'bday-month', maxLength: '2' }) })] }), (0, l.jsxs)('div', { children: [(0, l.jsx)('label', { htmlFor: 'year2', children: 'Jaar' }), (0, l.jsx)('div', { id: 'description-year2', children: 'Bijvoorbeeld 1970.' }), (0, l.jsx)('input', { id: 'year2', type: 'text', inputMode: 'numeric', 'aria-describedby': 'description-year2', autoComplete: 'bday-year', maxLength: '4' })] })] }) }) }) }), '\n', (0, l.jsx)(a.$, { appearance: 'dont', title: 'Uitvragen geboortedatum met een nummerveld (type=number).', children: (0, l.jsx)(s.H, { language: 'html', designTokens: { '--utrecht-textbox-max-inline-size': '20ch' }, children: () => (0, l.jsx)(l.Fragment, { children: (0, l.jsxs)('fieldset', { children: [(0, l.jsx)('legend', { children: 'Geboortedatum' }), (0, l.jsxs)('div', { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'day3', children: 'Dag' }) }), (0, l.jsx)('p', { id: 'description-day3', children: 'Bijvoorbeeld 31.' }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'day3', type: 'number', 'aria-describedby': 'description-day3', autoComplete: 'bday-day', min: '1', max: '31' }) })] }), (0, l.jsxs)('div', { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'month3', children: 'Maand' }) }), (0, l.jsx)('p', { id: 'description-month3', children: 'Bijvoorbeeld 12 voor december.' }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'month3', type: 'number', 'aria-describedby': 'description-month3', autoComplete: 'bday-month', min: '1', max: '12' }) })] }), (0, l.jsxs)('div', { children: [(0, l.jsx)('p', { children: (0, l.jsx)('label', { htmlFor: 'year3', children: 'Jaar' }) }), (0, l.jsx)('p', { id: 'description-year3', children: 'Bijvoorbeeld 1970.' }), (0, l.jsx)('p', { children: (0, l.jsx)('input', { id: 'year3', type: 'number', 'aria-describedby': 'description-year3', autoComplete: 'bday-year' }) })] })] }) }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
   }
   function u(e) {
    const n = { a: 'a', blockquote: 'blockquote', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'zorg-dat-iedereen-een-formulierelement-kan-bedienen-of-geef-een-alternatief', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }) }), '\n', (0, l.jsxs)(n.p, { children: ['Sommige formulierelementen werken (nog) niet goed of zijn complex om te bedienen met toetsenbord, ', (0, l.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' of stembesturing.'] }), '\n', (0, l.jsxs)(n.p, { children: ['Op ', (0, l.jsx)(n.a, { href: 'https://html5accessibility.com/', children: 'HTML5 Accessibility' }), ' houdt Steve Faulkner de ondersteuning bij van HTML-elementen, in de verschillende browsers en voor de diverse hulpmiddelen.'] }), '\n', (0, l.jsx)(n.p, { children: 'De ontwikkeling van browsers gaat snel en het gebruik van HTML geeft niet altijd garantie voor toegankelijkheid. Test daarom altijd een formulier met toetsenbord, screenreader of stembesturing.' }), '\n', (0, l.jsx)(n.h2, { id: 'multiselect', children: 'Multiselect' }), '\n', (0, l.jsxs)(n.p, { children: ['Het multiselect formulierelement ', (0, l.jsx)(n.code, { children: '<select multiple>' }), ' is ingewikkeld te bedienen met toetsenbord. In Safari werkt multiselect (nog) niet met een toetsenbord en daarom ook niet met de screenreader VoiceOver.'] }), '\n', (0, l.jsx)(n.p, { children: 'Gebruik in plaats van multiselect bijvoorbeeld checkboxes om gebruikers meerdere keuzes te laten maken.' }), '\n', (0, l.jsx)(n.h2, { id: 'datum--en-tijdkiezers', children: 'Datum- en tijdkiezers' }), '\n', (0, l.jsx)(n.p, { children: 'Datum- en tijdkiezers zijn lastig goed toegankelijk te maken, zodat ze voor iedereen makkelijk te begrijpen en te bedienen zijn. Maar ze kunnen wel handig zijn voor ziende muisgebruikers.' }), '\n', (0, l.jsx)(n.p, { children: 'De beste optie is om naast de kiezer ook een alternatief toe te voegen, een formulierveld waar gebruikers de datum of tijd kunnen invullen.' }), '\n', (0, l.jsxs)(n.p, { children: ['Veel browsers voegen zelf al een kiezer toe voor de ', (0, l.jsx)(n.code, { children: '<input type="date">' }), ' en ', (0, l.jsx)(n.code, { children: '<input type="time">' }), '-elementen, de gebruiker kan dan beide opties gebruiken. Het is alleen jammer dat deze kiezers (nog) niet te stijlen zijn met CSS. Daarnaast zien de kiezers er per browser verschillend uit en werken ze anders.'] }), '\n', (0, l.jsx)(n.h3, { id: 'input-typenumber-versus-inputmodenumeric', children: 'Input type="number" versus inputmode="numeric"' }), '\n', (0, l.jsxs)(n.p, { children: ['Een andere optie is het laten invoeren van alleen nummers met ', (0, l.jsx)(n.code, { children: '<input type="number">' }), '\nBijvoorbeeld:'] }), '\n', (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: 'language-html', children: '<label for="dag1">Geboortedag</label> <input id="dag1" type="number" autocomplete="bday-day" min="1" max="31" />\n' }) }), '\n', (0, l.jsxs)(n.p, { children: ['GOV.UK heeft hier onderzoek naar gedaan en vindt ', (0, l.jsx)(n.a, { href: 'https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/', children: 'type=number qua gebruikersvriendelijkheid te foutgevoelig' }), '.'] }), '\n', (0, l.jsxs)(n.blockquote, { children: ['\n', (0, l.jsxs)(n.p, { children: ['Met ', (0, l.jsx)(n.code, { children: '<input type="number">' }), ' bestaat het risico dat gebruikers per ongeluk een getal verhogen wanneer ze iets anders proberen te doen, bijvoorbeeld omhoog of omlaag scrollen op de pagina. En als de gebruiker iets probeert in te voeren dat geen getal is, is er geen expliciete feedback over wat verkeerd gaat.'] }), '\n'] }), '\n', (0, l.jsxs)(n.p, { children: ['Zij beveelt het gebruik van ', (0, l.jsx)(n.code, { children: 'inputmode="numeric"' }), ' aan, omdat dit het numerieke toetsenbord op mobile apparaten activeert.'] }), '\n', (0, l.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, l.jsx)(n.pre, { children: (0, l.jsx)(n.code, { className: 'language-html', children: '<label for="dag2">Geboortedag</label> <input id="dag2" type="text" inputmode="numeric" autocomplete="bday-day" />\n' }) }), '\n', (0, l.jsx)(n.h3, { id: 'selects-voor-dag-maand-en-jaar', children: 'Selects voor dag, maand en jaar' }), '\n', (0, l.jsx)(n.p, { children: 'Een optie is het gebruik van 3 select-opties met de waardes van bijvoorbeeld dag, maand en jaar. Het nadeel hiervan is dat de select voor een geboortejaar een hele lange lijst kan worden. Het kan confronterend zijn als, scrollend door een lange lijst aan jaartallen, beseft dat je wel erg oud aan het worden bent...' }), '\n', (0, l.jsx)(n.h3, { id: 'tekstveld', children: 'Tekstveld' }), '\n', (0, l.jsx)(n.p, { children: 'Als de data niet verder automatisch verwerkt gaat worden is een tekstveld een makkelijke optie. Dan is de gebruiker vrij een eigen format te kiezen. Geef dan wel een hint in de description hoe dit het beste te doen.' }), '\n', (0, l.jsx)(n.h3, { id: 'de-keuze-hangt-af-van-de-context', children: 'De keuze hangt af van de context' }), '\n', (0, l.jsx)(n.p, { children: 'Welke optie je kiest, is afhankelijk van de context. Wat vraag je uit? En wat gaat er met de data gebeuren? Bijvoorbeeld:' }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: 'Kent men de datum uit het hoofd (bijvoorbeeld geboortedatum)? Gebruik dan drie losse invulvelden.' }), '\n', (0, l.jsx)(n.li, { children: 'Kan men een datum prikken (bijvoorbeeld een afspraak)? Dan is een datumkiezer in combinatie met zelf invullen een goed plan. "Ik weet de datum niet maar woensdagen komen mij het best uit". Hou wel rekening met \'niet beschikbare\' dagen, gebruik in dat geval als alternatief bijvoorbeeld een select-optie met beperkte keuzes.' }), '\n', (0, l.jsx)(n.li, { children: 'Kan de gebruiker alleen kiezen uit een paar data (bijvoorbeeld vanaf vandaag tot een week vooruit), dan zijn radio buttons geschikt.' }), '\n'] }), '\n', (0, l.jsxs)(n.p, { children: ['Lees hierover meer op ', (0, l.jsx)(n.a, { href: 'https://design-system.service.gov.uk/patterns/dates/', children: 'Ask users for Dates' }), ' van GOV.UK.'] }), '\n', (0, l.jsx)(n.p, { children: 'De regel is altijd: Je kunt een ontoegankelijke component aanbieden, mits je ook een goed toegankelijk alternatief aanbiedt.' })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, l.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, l.jsxs)(n.ul, { children: ['\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'Succescriterium 2.1.1 Toetsenbord' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of Instructies' }) }), '\n', (0, l.jsx)(n.li, { children: (0, l.jsx)(n.a, { href: '/wcag/4.1.2/', children: 'Succescriterium 4.1.2 Naam, rol, waarde' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(h, { ...e }) }) : h(e);
   }
   const j = { title: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief', title_sm: 'Iedereen kan velden invullen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Iedereen kan velden invullen', pagination_label: 'Iedereen kan velden invullen', description: 'Richtlijnen om een formulier door iedereen in te kunnen laten vullen.', slug: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    x = {},
    g = [{ value: 'Multiselect', id: 'multiselect', level: 2 }, { value: 'Datum- en tijdkiezers', id: 'datum--en-tijdkiezers', level: 2 }, { value: 'Input type=&quot;number&quot; versus inputmode=&quot;numeric&quot;', id: 'input-typenumber-versus-inputmodenumeric', level: 3 }, { value: 'Selects voor dag, maand en jaar', id: 'selects-voor-dag-maand-en-jaar', level: 3 }, { value: 'Tekstveld', id: 'tekstveld', level: 3 }, { value: 'De keuze hangt af van de context', id: 'de-keuze-hangt-af-van-de-context', level: 3 }, { value: 'Voorbeelden', id: 'voorbeelden', level: 2 }, { value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function v(e) {
    return (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(m, {}), '\n', (0, l.jsx)(c, {}), '\n', (0, l.jsx)(p, {}), '\n', (0, l.jsx)(o.Ay, {})] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(v, { ...e }) }) : v();
   }
  },
  14881(e, n, t) {
   t.d(n, { K: () => d, n: () => a });
   var r = t(13526),
    l = t(30758),
    i = t(30662),
    o = t(37168),
    s = t(86070);
   const a = (0, l.forwardRef)(({ as: e, className: n, children: t, ...l }, i) => {
     const o = e || 'div',
      a = (0, r.A)('ma-utrecht-accordion', 'utrecht-accordion', n);
     return (0, s.jsx)(o, { ref: i, className: a, ...l, children: t });
    }),
    d = ({ className: e, classNamePanel: n, label: t, heading: l, headingLevel: a, headingApperance: d, ...c }) => {
     const u = (0, r.A)('utrecht-accordion__section', e),
      m = (0, r.A)('utrecht-accordion__panel', n);
     return (0, s.jsxs)('details', { className: u, ...c, children: [(0, s.jsx)('summary', { className: 'utrecht-accordion__header', children: (0, s.jsxs)('span', { className: 'nl-button nl-button--subtle', children: [(0, s.jsx)('span', { className: 'nl-button__icon-start', children: (0, s.jsx)(i.rI, {}) }), (0, s.jsxs)('span', { className: 'nl-button__label', children: [l && (0, s.jsx)(o.D, { level: a, appearance: d, children: l }), t] })] }) }), (0, s.jsx)('div', { className: m, children: c.children })] });
    };
  },
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => s });
   var r = t(30758);
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : o(e.components)), r.createElement(i.Provider, { value: n }, e.children));
   }
  },
  28369(e, n, t) {
   t.d(n, { M: () => d });
   var r = t(46447),
    l = t(16194),
    i = t(30758),
    o = t(56528);
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
   var a = t(86070);
   function d({ lineNumber: e, syntax: n, textContent: t, trim: d }) {
    let c = t;
    const { title: u, type: m } = (0, i.useContext)(o.x),
     h = (0, i.useId)();
    return (d && (c = c.trim()), (0, a.jsx)(l.f4, { theme: s, code: c, language: n || '', children: ({ style: n, tokens: t, getLineProps: l, getTokenProps: i }) => (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)('span', { hidden: !0, id: h, children: ['codevoorbeeld ', m ? `\u201c${m}\u201d` : '', ' ', u ? ': ' : ' ', u] }), (0, a.jsx)(r.NG, { tabIndex: 0, role: u ? 'region' : void 0, 'aria-labelledby': h, style: n, children: t.map((n, t) => (0, a.jsxs)('span', { ...l({ line: n }), children: [e && (0, a.jsx)('span', { children: t + 1 }), n.map((e, n) => (0, a.jsx)('span', { ...i({ token: e }) }, n)), '\n'] }, t)) })] }) }));
   }
  },
  30662(e, n, t) {
   t.d(n, { D4: () => L, GP: () => w, KC: () => G, Nd: () => _, Rt: () => C, Vj: () => N, Wk: () => H, bz: () => A, cB: () => S, e5: () => R, hY: () => T, jK: () => F, jP: () => M, ob: () => B, rI: () => z, t4: () => I, vP: () => D, vg: () => $ });
   var r = t(92081),
    l = t(90578),
    i = t(96345),
    o = t(64249),
    s = t(4603),
    a = t(91525),
    d = t(23436),
    c = t(1375),
    u = t(4077),
    m = t(58315),
    h = t(73563),
    p = t(35193),
    j = t(82999),
    b = t(13088),
    x = t(43864),
    g = t(24214),
    v = t(79532),
    y = t(60529),
    k = t(86070);
   const f = { width: '1em', height: '1em' },
    _ = () => (0, k.jsx)(r.A, { ...f }),
    w = () => (0, k.jsx)(l.A, { ...f }),
    z = () => (0, k.jsx)(i.A, { ...f }),
    N = () => (0, k.jsx)(o.A, { ...f }),
    A = () => (0, k.jsx)(s.A, { ...f }),
    C = () => (0, k.jsx)(a.A, { ...f }),
    S = () => (0, k.jsx)(d.A, { ...f }),
    D = () => (0, k.jsx)(c.A, { ...f }),
    F = () => (0, k.jsx)(u.A, { ...f }),
    M = () => (0, k.jsx)(m.A, { ...f }),
    I = () => (0, k.jsx)(h.A, { ...f }),
    L = () => (0, k.jsx)(p.A, { ...f }),
    T = () => (0, k.jsx)(j.A, { ...f }),
    G = () => (0, k.jsx)(b.A, { ...f }),
    H = () => (0, k.jsx)(x.A, { ...f }),
    R = () => (0, k.jsx)(g.A, { ...f }),
    B = () => (0, k.jsx)(v.A, { ...f }),
    $ = () => (0, k.jsx)(y.A, { ...f });
  },
  38953(e, n, t) {
   t.d(n, { H: () => k });
   var r = t(28369),
    l = t(46447),
    i = t(13526),
    o = t(68148),
    s = t(9016),
    a = t(69303),
    d = t(91635),
    c = t(30734),
    u = t(30758),
    m = t(31186),
    h = t(65904),
    p = t.n(h),
    j = t(14881),
    b = t(46847),
    x = t(86070);
   const g = ({ children: e }) => (0, x.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(l.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: (0, x.jsx)(l.fz, { className: 'nlds-canvas__example-paragraph', children: e }) }) });
   g.displayName = 'ParagraphContainer';
   const v = ({ children: e }) => (0, x.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: (0, x.jsx)(l.yo, { className: (0, i.A)('utrecht-document--surface', 'nlds-canvas__example-document'), children: e }) });
   v.displayName = 'DocumentContainer';
   const y = ({ children: e }) => (0, x.jsx)(l.ui, { className: 'nlds-canvas__example-surface', children: e });
   y.displayName = 'SurfaceContainer';
   const k = globalThis.isAstro
    ? ({ language: e, className: n, code: t = '<p>No code provided</p>', rawCode: r, copyCode: l, defaultExpandedCode: o, designTokens: s }) => {
       const a = 'string' == typeof t ? t : r || '',
        d = 'string' == typeof t ? p().highlight(t, p().languages[e], e) : p().highlight(r || '', p().languages[e], e);
       return (0, x.jsxs)('div', { className: (0, i.A)('ma-canvas-astro', n), children: [(0, x.jsx)('div', { className: 'voorbeeld-theme utrecht-root', style: s, children: (0, x.jsx)('div', { className: 'ma-canvas-astro__example utrecht-html ma-flow', dangerouslySetInnerHTML: { __html: a } }) }), (0, x.jsx)(j.n, { children: (0, x.jsxs)(j.K, { label: 'Code', open: o, children: [(0, x.jsx)('pre', { className: 'language-html nl-code-block', tabIndex: 0, children: (0, x.jsx)('code', { className: 'language-html nl-code-block__code', dangerouslySetInnerHTML: { __html: d } }) }), 'allow' === l && (0, x.jsx)(b.$, { 'data-copy-code': a, purpose: 'secondary', children: 'Kopieer code' })] }) })] });
      }
    : ({ code: e, copy: n = !0, defaultExpandedCode: t = !1, displayCode: h = !0, children: p, container: j = 'document', language: b, designTokens: k }) => {
       const f = 'function' == typeof p ? p() : p,
        _ = 'function' == typeof e ? e() : (0, u.isValidElement)(e) ? e : void 0,
        w = 'string' == typeof e ? e : m.qV(_ || f),
        [z, N] = (0, u.useState)(w),
        [A, C] = (0, u.useState)(t);
       (0, u.useEffect)(() => {
        (async () => {
         const e = await c.Ay.format(w, { parser: b, plugins: [o.A, s.Ay, a.Ay, d.Ay], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' });
         N(e);
        })();
       }, [w]);
       const S = (0, u.useId)();
       let D = u.Fragment;
       return (
        'paragraph' === j ? (D = g) : 'document' === j ? (D = v) : 'surface' === j && (D = y),
        (0, x.jsxs)('div', {
         className: (0, i.A)('nlds-canvas'),
         children: [
          f && (0, x.jsx)('div', { className: (0, i.A)('nlds-canvas__example'), children: (0, x.jsx)('div', { className: 'voorbeeld-theme', style: k, children: (0, x.jsx)(D, { children: (0, x.jsx)(l.v$, { children: f }) }) }) }),
          h &&
           (0, x.jsx)('div', {
            className: (0, i.A)('nlds-canvas__toolbar'),
            children: (0, x.jsx)(l.$n, {
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
          h &&
           (0, x.jsxs)('div', {
            className: (0, i.A)('nlds-canvas__code-block', !n && 'nlds-canvas__code-block--user-select-none'),
            id: S,
            hidden: !A,
            children: [
             (0, x.jsx)(r.M, { codeBlockLabel: 'Codevoorbeeld', syntax: b, textContent: z, trim: !0 }),
             n &&
              (0, x.jsx)('div', {
               className: (0, i.A)('nlds-canvas__toolbar', 'nlds-canvas__toolbar--copy'),
               children: (0, x.jsx)(l.$n, {
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
  46847(e, n, t) {
   t.d(n, { $: () => r.$n });
   var r = t(50805);
  },
  56528(e, n, t) {
   t.d(n, { $: () => c, x: () => d });
   var r = t(30662),
    l = t(46447),
    i = t(13526),
    o = t(94988),
    s = t(30758),
    a = t(86070);
   const d = (0, s.createContext)({}),
    c = ({ title: e, appearance: n, description: t, children: s, figure: c }) => {
     const u = { do: 'Doen', dont: 'Niet doen' },
      m = c ? 'figure' : 'div',
      h = c ? 'figcaption' : 'div',
      p = 'string' == typeof t ? (0, a.jsx)(o.oz, { components: { a: l.N_ }, children: t }) : t;
     return (0, a.jsxs)(m, { className: (0, i.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(h, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(r.jP, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.dont })] }), (0, a.jsx)(l.fz, { children: e })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.fz, { className: (0, i.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, a.jsx)(l.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, a.jsx)(r.jK, {}) }), (0, a.jsx)('span', { className: 'nlds-guideline__title', children: u.do })] }), (0, a.jsx)(l.fz, { children: e })] }), p] }), (0, a.jsx)('div', { className: 'nlds-guideline__example', children: (0, a.jsx)(d.Provider, { value: { title: e, type: u[n] }, children: s }) })] });
    };
  },
  56672(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => i });
   var r = t(86070),
    l = t(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, l.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.strong, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
