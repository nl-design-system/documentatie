'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3247],
 {
  3510: (e, n, l) => {
   l.d(n, { ZP: () => a });
   var i = l(52676),
    r = l(24785);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(t, { ...e }) }) : t(e);
   }
  },
  43067: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => S, contentTitle: () => C, default: () => P, frontMatter: () => A, metadata: () => L, toc: () => G });
   var i = l(52676),
    r = l(24785),
    t = l(3510),
    a = l(66771),
    o = l(81014);
   function s(e) {
    const n = { input: 'input', label: 'label', option: 'option', select: 'select', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(o.X, { appearance: 'dont', title: 'Het label inconsequent plaatsen in een formulier (visueel en in code).', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'lievelingskleur', children: 'Wat is je lievelingskleur?' }), (0, i.jsxs)(n.select, { name: 'lievelingskleur', id: 'lievelingskleur', children: [(0, i.jsx)(n.option, { children: 'Rood' }), (0, i.jsx)(n.option, { children: 'Blauw' }), (0, i.jsx)(n.option, { children: 'Wit' })] }), (0, i.jsx)(n.input, { type: 'text', id: 'dier', name: 'lievelingsdier' }), (0, i.jsx)(n.label, { for: 'dier', children: 'Wat is je lievelingsdier?' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
   function c(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'zet-het-label-boven-het-formulierveld', children: 'Zet het label boven het formulierveld' }), '\n', (0, i.jsx)(n.p, { children: 'Zet het label boven het formulierveld. Niet ernaast, niet eronder en niet in het formulierveld, maar op de regel boven het formulierveld. Doe dit consequent voor alle formuliervelden. Voor left-to-right talen is het label links uitgelijnd.' }), '\n', (0, i.jsx)(n.p, { children: 'Deze plaatsing heeft meerdere voordelen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Het biedt voldoende ruimte voor labels van verschillende lengtes. Het kan zijn dat gebruikers vertaalsoftware gebruiken op de pagina, waardoor labels langer of korter kunnen zijn dan je verwacht.' }), '\n', (0, i.jsx)(n.li, { children: 'Dit werkt beter voor gebruikers die de tekst inzoomen.' }), '\n', (0, i.jsx)(n.li, { children: "Door labels, formuliervelden en acties verticaal uit te lijnen, wordt een natuurlijke 'scan-lijn' gecre\xeberd. Hierdoor kunnen mensen hun aandacht gemakkelijk op deze lijn richten." }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Waarom is dit belangrijk? Mensen lezen van boven naar beneden en verwachten dat de informatie in die volgorde staat.' }), '\n', (0, i.jsxs)(n.p, { children: ['Je brein verbindt automatisch wat er bij elkaar is geplaatst, dus zorg er ook voordat het label visueel dicht bij het formulierveld staat. Dan is duidelijk wat bij elkaar hoort. Lees hierover mee over bij ', (0, i.jsx)(n.a, { href: 'https://www.nldesignsystem.nl/richtlijnen/stijl/ruimte#ontwerpen-met-ruimte', children: 'de richtlijnen over stijl: Ruimte' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Plaats labels buiten het formulierveld en niet daarbinnen. Op deze manier heeft het label altijd een vaste positie en kan het in een leesbare grootte worden getoond.' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik geen zogenaamde \u201cfloating labels\u201d. Deze zijn moeilijker te begrijpen. Zie: ', (0, i.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2021/02/material-design-text-fields/', children: (0, i.jsx)('span', { lang: 'en', children: 'Material Design Text Fields Are Badly Designed in Smashing Magazine' }) }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { div: 'div', input: 'input', label: 'label', option: 'option', select: 'select', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(o.X, { appearance: 'do', title: 'Koppel het label aan het formulierveld.', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'kleur3', children: 'Wat is je lievelingskleur?' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur3', name: 'lievelingskleur' })] }) }) }), '\n', (0, i.jsx)(o.X, { appearance: 'do', title: 'Koppel het label aan het formulierveld (select).', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'kleur4', children: 'Wat is je lievelingskleur?' }), (0, i.jsxs)(n.select, { id: 'kleur4', name: 'lievelingskleur', children: [(0, i.jsx)(n.option, { children: 'Rood' }), (0, i.jsx)(n.option, { children: 'Blauw' }), (0, i.jsx)(n.option, { children: 'Wit' })] })] }) }) }), '\n', (0, i.jsx)(o.X, { appearance: 'dont', title: 'Een div in plaats van een label gebruiken.', description: 'De for en id koppeling werkt alleen met een label-element.', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.div, { for: 'kleur5', children: 'Wat is je lievelingskleur?' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur5', name: 'lievelingskleur' })] }) }) }), '\n', (0, i.jsx)(o.X, { appearance: 'dont', title: 'Een label zonder gekoppelde input. Door het label-element te gebruiken zonder for mis je de koppeling tussen het label en de input voor mensen die de visuele context niet waarnemen.', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { children: 'Wat is je lievelingskleur?' }), (0, i.jsxs)(n.select, { name: 'lievelingskleur', children: [(0, i.jsx)(n.option, { children: 'Rood' }), (0, i.jsx)(n.option, { children: 'Blauw' }), (0, i.jsx)(n.option, { children: 'Wit' })] })] }) }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
   function p(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'geef-een-formulierveld-toegankelijke-naam-met-een-label', children: 'Geef een formulierveld toegankelijke naam met een label' }), '\n', (0, i.jsxs)(n.p, { children: ['Elk formulierveld heeft een label nodig dat gekoppeld is aan het formulierveld met een ', (0, i.jsx)(n.code, { children: 'for' }), '/', (0, i.jsx)(n.code, { children: 'id' }), ' relatie. De labeltekst wordt dan de zogenaamde "toegankelijke naam" van het formulierveld.'] }), '\n', (0, i.jsx)(n.p, { children: 'Waarom is dit belangrijk?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Screenreader (schermlezer) gebruikers krijgen die naam voorgelezen als het veld toetsenbordfocus krijgt.' }), '\n', (0, i.jsx)(n.li, { children: 'Voice recognition (stembediening) gebruikers kunnen het veld focus geven door die naam uit te spreken.' }), '\n', (0, i.jsx)(n.li, { children: 'Muis- en touchscreen gebruikers kunnen het label aanklikken om het formulierveld focus te geven.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Is er meer uitleg nodig? Gebruik dan een beschrijving (description).' }), '\n', (0, i.jsx)(n.h3, { id: 'de-forid-relatie', children: 'De for/id relatie' }), '\n', (0, i.jsx)(n.p, { children: 'Opzet in de HTML:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Geef het formulierveld een ID.' }), '\n', (0, i.jsxs)(n.li, { children: ['Geef het label het attribute ', (0, i.jsx)(n.code, { children: 'for' }), ' met als waarde de ID van het bijbehorende formulierveld.'] }), '\n'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<label for="kleur1">Wat is je lievelingskleur</label>\n<input type="text" id="kleur1" name="lievelingskleur" />\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Let op: De gebruikte ', (0, i.jsx)(n.strong, { children: "ID's" }), ' moeten uniek zijn voor de pagina, anders worden de verkeerde namen bij de velden voorgelezen.'] }), '\n', (0, i.jsx)(n.p, { children: 'Een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt.' }), '\n', (0, i.jsxs)(n.p, { children: ['Doen: Gekoppeld label met ', (0, i.jsx)(n.code, { children: 'for' }), ' en ', (0, i.jsx)(n.code, { children: 'id' }), '. Het ', (0, i.jsx)(n.code, { children: '<label>' }), '-element heeft een ', (0, i.jsx)(n.code, { children: 'for' }), ' attribuut (of ', (0, i.jsx)(n.code, { children: 'htmlFor' }), ' in React) dat verwijst naar het ', (0, i.jsx)(n.code, { children: 'id' }), ' van het bijbehorende formulierveld.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Zo werkt dit bijvoorbeeld met een ', (0, i.jsx)(n.code, { children: '<select>' }), ':'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<label for="kleur2">Wat is je lievelingskleur?</label>\n<select id="kleur2" name="lievelingskleur">\n  <option>Rood</option>\n  <option>Blauw</option>\n  <option>Wit</option>\n</select>\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Het geven van een goede toegankelijke naam aan formuliervelden is nodig om te voldoen aan de WCAG-succescriteria:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/wcag/1.3.1', children: '1.3.1 Info en relaties' }), ' (niveau A).'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/wcag/2.4.6', children: '2.4.6: Koppen en labels' }), ' (niveau AA).'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions', children: '3.3.2: Labels of instructies' }), ' (niveau A).'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/wcag/4.1.2', children: '4.1.2 Naam, rol, waarde' }), ' (niveau A).'] }), '\n'] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
   function g(e) {
    const n = { input: 'input', label: 'label', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(o.X, { appearance: 'do', title: 'Het label blijft zichtbaar, ook als de gebruiker gaat invullen.', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'dier1', children: 'Wat is je lievelingsdier?' }), (0, i.jsx)(n.input, { type: 'text', id: 'dier1', name: 'lievelingsdier', placeholder: 'Bijvoorbeeld cavia' })] }) }) }), '\n', (0, i.jsx)(o.X, { appearance: 'dont', title: 'Alleen een placeholder gebruiken als zichtbaar label.', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'dier2', class: 'visually-hidden', children: 'Wat is je lievelingsdier?' }), (0, i.jsx)(n.input, { type: 'text', id: 'dier2', name: 'lievelingsdier', placeholder: 'Wat is je lievelingsdier?' })] }) }) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
   function x(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', strong: 'strong', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'zorg-ervoor-dat-het-label-altijd-zichtbaar-is', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '\n', (0, i.jsx)(n.p, { children: 'Waarom? Als het label verdwijnt bij het typen kan er verwarring ontstaan: wat moet je ook alweer invullen? Daarom is een placeholder geen goede vervanging van het label.' }), '\n', (0, i.jsxs)(n.p, { children: ['De placeholder kan ook voor verwarring zorgen bij gebruikers. Is het al veld ingevuld? Zie het onderzoek ', (0, i.jsx)(n.a, { href: 'https://www.nngroup.com/articles/form-design-placeholders/', children: (0, i.jsx)('span', { lang: 'en', children: 'Placeholders in Form Fields Are Harmful' }) }), ' van de Nielsen Norman Group.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Een label vertelt ', (0, i.jsx)(n.strong, { children: 'wat' }), ' je moet invullen en een placeholder ', (0, i.jsx)(n.strong, { children: 'hoe' }), ' je een formulierveld moet invullen. Voor een e-mailveld kan het label bijvoorbeeld \u201cJouw e-mailadres\u201d zijn en de placeholder \u201c', (0, i.jsx)(n.a, { href: 'mailto:naam@voorbeeld.com', children: 'naam@voorbeeld.com' }), '\u201d.'] }), '\n', (0, i.jsxs)(n.p, { children: ['De ', (0, i.jsx)(n.strong, { children: 'hoe' }), ' informatie kan ook in een description worden opgenomen, dan blijft deze informatie ook zichtbaar tijdens het invullen.'] }), '\n', (0, i.jsx)(n.p, { children: 'Een andere reden om een label niet te verbergen is om beter te kunnen controleren of alles goed is ingevuld met autocomplete.' }), '\n', (0, i.jsx)(n.p, { children: 'Namen, adressen en telefoonnummers kunnen automatisch vooraf worden ingevuld door de browser. Wanneer het label verborgen is, moet de gebruiker controleren of elke waarde juist is ingevuld bij het goede formulierveld. Dat is veel gemakkelijker als het label altijd zichtbaar is.' })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
   function k(e) {
    const n = { a: 'a', input: 'input', label: 'label', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(o.X, { appearance: 'do', title: 'De link buiten het label plaatsen.', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: '#', children: 'Onze algemene leveringsvoorwaarden' }) }), (0, i.jsx)(n.input, { id: 'alv1', type: 'checkbox' }), (0, i.jsx)(n.label, { for: 'alv1', children: 'Ik ga akkoord met de algemene leveringsvoorwaarden' })] }) }) }), '\n', (0, i.jsx)(o.X, { appearance: 'dont', title: 'De link binnen het label plaatsen.', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.input, { id: 'alv2', type: 'checkbox' }), (0, i.jsxs)(n.label, { for: 'alv2', children: ['Ik ga akkoord met de ', (0, i.jsx)(n.a, { href: '#', children: 'algemene leveringsvoorwaarden' })] })] }) }) })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k(e);
   }
   function _(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'zet-alleen-tekst-in-het-label', children: 'Zet alleen tekst in het label' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik alleen tekst in een label. Dus geen links, buttons, tooltips of kopjes.' }), '\n', (0, i.jsx)(n.p, { children: 'Dit geeft problemen bij het voorlezen van het label door screenreaders en het activeren via voice recognition.' }), '\n', (0, i.jsx)(n.p, { children: 'Zet extra informatie boven het formulier, als links boven het label of formulierveld (wat logisch is qua leesvolgorde) of als beschrijving bij het veld. Vermijd tooltips.' }), '\n', (0, i.jsxs)(n.p, { children: ['Lees ook de ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/links', children: 'richtlijnen voor links in formulieren' }), '.'] })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(_, { ...e }) }) : _(e);
   }
   function w(e) {
    const n = { input: 'input', label: 'label', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(o.X, { appearance: 'do', title: 'Simpel label met extra beschrijving. Gebruik waar nodig een losse description om meer uitleg te geven.', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'first-name', children: 'Voornaam (een of meerdere)' }), (0, i.jsx)(n.p, { id: 'first-name-description', children: 'Vul de voornaam of voornamen in zoals deze op je id-kaart of paspoort staan.' }), (0, i.jsx)(n.input, { autocomplete: 'given-name', type: 'text', name: 'first_name', id: 'first-name', 'aria-describedby': 'first-name-description' })] }) }) }), '\n', (0, i.jsx)(o.X, { appearance: 'dont', title: 'Ingewikkeld label. Door veel informatie in te korten wordt het label onduidelijk', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'first-name2', children: 'Voornaam(en)' }), (0, i.jsx)(n.input, { autocomplete: 'given-name', type: 'text', name: 'first_name', id: 'first-name2' })] }) }) })] });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(w, { ...e }) }) : w(e);
   }
   function N(e) {
    const n = { h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'gebruik-duidelijke-labelteksten', children: 'Gebruik duidelijke labelteksten' }), '\n', (0, i.jsx)(n.p, { children: 'Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Waar nodig wordt er ook extra hulp geboden worden, zoals een omschrijving van waar een BSN-nummer te vinden is.' }), '\n', (0, i.jsx)(n.p, { children: 'Wanneer je een afkorting gebruikt, of je moet jargon gebruiken omdat de offici\xeble term verplicht is, geef dan in de beschrijving een voorbeeld of uitleg.' })] });
   }
   function Z(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(N, { ...e }) }) : N(e);
   }
   function D(e) {
    const n = { div: 'div', input: 'input', label: 'label', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(o.X, { appearance: 'do', title: 'Het zichtbare label is de toegankelijke naam.', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'hond', children: 'Hoe heet je hond' }), (0, i.jsx)(n.input, { type: 'text', id: 'hond', name: 'hond' })] }) }) }), '\n', (0, i.jsx)(o.X, { appearance: 'dont', title: 'Alleen een placeholder gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsx)(n.input, { type: 'text', name: 'lievelingskleur', 'aria-label': 'Vul een kleur in', placeholder: 'Wat is je lievelingskleur' }) }) }), '\n', (0, i.jsx)(o.X, { appearance: 'dont', title: 'Alleen losse tekst gebruiken om te laten zien wat de gebruiker moet invullen,', description: 'terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.', children: (0, i.jsx)(a.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.div, { children: 'Zoek' }), (0, i.jsx)(n.input, { type: 'search', name: 'trefwoord', 'aria-label': 'Trefwoord' })] }) }) })] });
   }
   function F(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(D, { ...e }) }) : D(e);
   }
   function W(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'de-zichtbare-naam-moet-overeenkomen-met-de-toegankelijke-naam', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruikers van voice recognition software kunnen een formulierveld focus geven door de naam uit te spreken.' }), '\n', (0, i.jsxs)(n.p, { children: ['Als de toegankelijke naam niet begint met de zichtbare naam werkt dit niet goed. Dit kan gebeuren bij het verkeerd gebruik van het attribute ', (0, i.jsx)(n.code, { children: 'aria-label' }), '. Met ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' kan een formulierveld ook een toegankelijke naam worden gegeven, onzichtbaar voor de ziende gebruiker.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Zorgen dat de zichtbare naam en toegankelijke naam overeenkomen, is nodig om te voldoen WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html', children: '2.5.3: Label in naam' }), ' (niveau A).'] })] });
   }
   function X(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(W, { ...e }) }) : W(e);
   }
   const A = { title: 'Labels in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Labels', sidebar_position: 6, pagination_label: 'Labels in een formulier', description: 'Richtlijnen voor het ontwerp en de code van labels in een formulier.', keywords: ['labels', 'formulier', 'design', 'code'] },
    C = 'Labels in een formulier',
    L = { id: 'richtlijnen/formulieren/labels', title: 'Labels in een formulier | Richtlijnen', description: 'Richtlijnen voor het ontwerp en de code van labels in een formulier.', source: '@site/docs/richtlijnen/formulieren/labels.mdx', sourceDirName: 'richtlijnen/formulieren', slug: '/richtlijnen/formulieren/labels', permalink: '/richtlijnen/formulieren/labels', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/labels.mdx', tags: [], version: 'current', sidebarPosition: 6, frontMatter: { title: 'Labels in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Labels', sidebar_position: 6, pagination_label: 'Labels in een formulier', description: 'Richtlijnen voor het ontwerp en de code van labels in een formulier.', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Foutmeldingen', permalink: '/richtlijnen/formulieren/foutmeldingen' }, next: { title: 'Links in een formulier', permalink: '/richtlijnen/formulieren/links' } },
    S = {},
    G = [];
   function H(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'labels-in-een-formulier', children: 'Labels in een formulier' }), '\n', (0, i.jsx)(n.p, { children: 'Een label geeft aan welke gegevens de gebruiker bij een formulierveld in kan vullen.\nVoor de toegankelijkheid van labels en dus ook formuliervelden zijn de volgende punten belangrijk:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '#geef-een-formulierveld-toegankelijke-naam-met-een-label', children: 'Geef een formulierveld een toegankelijke naam met een label' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '#de-zichtbare-naam-moet-overeenkomen-met-de-toegankelijke-naam', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '#zet-het-label-boven-het-formulierveld', children: 'Zet het label boven het formulierveld' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '#zorg-ervoor-dat-het-label-altijd-zichtbaar-is', children: 'Zorg ervoor dat het label altijd zichtbaar is' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '#zet-alleen-tekst-in-het-label', children: 'Zet alleen tekst in het label' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '#gebruik-duidelijke-labelteksten', children: 'Gebruik duidelijke labelteksten' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(j, {}), '\n', (0, i.jsx)(m, {}), '\n', (0, i.jsx)(X, {}), '\n', (0, i.jsx)(F, {}), '\n', (0, i.jsx)(h, {}), '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(v, {}), '\n', (0, i.jsx)(b, {}), '\n', (0, i.jsx)(y, {}), '\n', (0, i.jsx)(f, {}), '\n', (0, i.jsx)(Z, {}), '\n', (0, i.jsx)(z, {}), '\n', (0, i.jsx)(t.ZP, {})] });
   }
   function P(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(H, { ...e }) }) : H(e);
   }
  },
  66771: (e, n, l) => {
   l.d(n, { X: () => x });
   var i = l(93706),
    r = l(4814),
    t = l(73891),
    a = l(65420),
    o = l(58243),
    s = l(25032),
    d = l(74642),
    c = l(75271),
    h = l(60027);
   const u = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var m = l(41179),
    p = l(52676);
   const j = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(i.Tg, { className: u['nlds-canvas__example-surface'], children: (0, p.jsx)(i.BB, { className: (0, r.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: (0, p.jsx)(i.nv, { className: u['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   j.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(i.Tg, { className: u['nlds-canvas__example-surface'], children: (0, p.jsx)(i.BB, { className: (0, r.Z)('utrecht-document--surface', u['nlds-canvas__example-document']), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const b = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(i.Tg, { className: u['nlds-canvas__example-surface'], children: n });
   };
   b.displayName = 'SurfaceContainer';
   const x = (e) => {
    let { code: n, copy: l = !0, defaultExpandedCode: x = !1, displayCode: v = !0, children: k, container: f = 'document', language: _, designTokens: y } = e,
     w = 'function' == typeof k ? k() : k,
     z = 'function' == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     N = 'string' == typeof n ? n : h.uS(z || w),
     [Z, D] = (0, c.useState)(N),
     [F, W] = (0, c.useState)(x);
    (0, c.useEffect)(() => {
     (async () => {
      (Z = await d.ZP.format(N, { parser: _, plugins: [t.Z, a.ZP, o.ZP, s.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), D(Z);
     })();
    }, [N]);
    const X = (0, c.useId)();
    let A = c.Fragment;
    return (
     'paragraph' === f ? (A = j) : 'document' === f ? (A = g) : 'surface' === f && (A = b),
     (0, p.jsxs)('div', {
      className: (0, r.Z)(u['nlds-canvas']),
      children: [
       w && (0, p.jsx)('div', { className: (0, r.Z)(u['nlds-canvas__example']), children: (0, p.jsx)('div', { className: 'voorbeeld-theme', style: y, children: (0, p.jsx)(A, { children: (0, p.jsx)(i.pu, { children: w }) }) }) }),
       v &&
        (0, p.jsx)('div', {
         className: (0, r.Z)(u['nlds-canvas__toolbar']),
         children: (0, p.jsx)(i.zx, {
          className: (0, r.Z)(u['nlds-canvas__button'], u['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           W(!F);
          },
          'aria-expanded': F,
          'aria-controls': X,
          children: F ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       v &&
        (0, p.jsxs)('div', {
         className: (0, r.Z)(u['nlds-canvas__code-block'], !l && u['nlds-canvas__code-block--user-select-none']),
         id: X,
         hidden: !F,
         children: [
          (0, p.jsx)(m.u, { syntax: _, textContent: Z, trim: !0 }),
          l &&
           (0, p.jsx)('div', {
            className: (0, r.Z)(u['nlds-canvas__toolbar'], u['nlds-canvas__toolbar--copy']),
            children: (0, p.jsx)(i.zx, {
             className: (0, r.Z)(u['nlds-canvas__button'], u['nlds-canvas__copy-button']),
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
  41179: (e, n, l) => {
   l.d(n, { u: () => o });
   var i = l(93706),
    r = l(12429);
   l(75271);
   const t = {
    plain: { color: 'var(--nlds-code-block-color)', backgroundColor: 'var(--nlds-code-block-background-color)' },
    styles: [
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
   var a = l(52676);
   function o(e) {
    let { lineNumber: n, syntax: l, textContent: o, trim: s } = e,
     d = o;
    return (
     s && (d = d.trim()),
     (0, a.jsx)(r.y$, {
      theme: t,
      code: d,
      language: l || '',
      children: (e) => {
       let { style: l, tokens: r, getLineProps: t, getTokenProps: o } = e;
       return (0, a.jsx)(i.dn, { style: l, children: r.map((e, l) => (0, a.jsxs)('span', { ...t({ line: e }), children: [n && (0, a.jsx)('span', { children: l + 1 }), e.map((e, n) => (0, a.jsx)('span', { ...o({ token: e }) }, n)), '\n'] }, l)) });
      },
     })
    );
   }
  },
  81014: (e, n, l) => {
   l.d(n, { X: () => d });
   var i = l(5195),
    r = l(41190),
    t = l(93706),
    a = l(4814);
   l(75271);
   const o = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var s = l(52676);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c, figure: h } = e;
    const u = 'Doen',
     m = 'Niet doen',
     p = h ? 'figure' : 'div',
     j = h ? 'figcaption' : 'div';
    return (0, s.jsxs)(p, { className: (0, a.Z)(o['nlds-guideline'], o[`nlds-guideline--${l}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, s.jsxs)(j, { className: (0, a.Z)(o['nlds-guideline__description']), children: ['dont' === l ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(t.nv, { className: (0, a.Z)(o['nlds-guideline__badge'], o[`nlds-guideline__badge--${l}`]), children: [(0, s.jsx)(i.Z, { className: o['nlds-guideline__icon'] }), (0, s.jsx)('span', { className: o['nlds-guideline__title'], children: m })] }), (0, s.jsx)(t.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(t.nv, { className: (0, a.Z)(o['nlds-guideline__badge'], o[`nlds-guideline__badge--${l}`]), children: [(0, s.jsx)(r.Z, { className: o['nlds-guideline__icon'] }), (0, s.jsx)('span', { className: o['nlds-guideline__title'], children: u })] }), (0, s.jsx)(t.nv, { children: n })] }), d] }), (0, s.jsx)('div', { className: (0, a.Z)(o['nlds-guideline__example']), children: c })] });
   };
  },
  24785: (e, n, l) => {
   l.d(n, { Z: () => o, a: () => a });
   var i = l(75271);
   const r = {},
    t = i.createContext(r);
   function a(e) {
    const n = i.useContext(t);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), i.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
