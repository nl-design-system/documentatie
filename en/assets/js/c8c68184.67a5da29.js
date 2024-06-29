'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [48373],
 {
  2065: (e, n, r) => {
   r.d(n, { ZP: () => o });
   var i = r(52676),
    t = r(24785);
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  44876: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => K, contentTitle: () => U, default: () => $, frontMatter: () => R, metadata: () => I, toc: () => J });
   var i = r(52676),
    t = r(24785),
    l = r(2065),
    o = r(94091),
    s = r(69265);
   function a(e) {
    const n = { input: 'input', label: 'label', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(s.X, { appearance: 'do', title: 'Sta kopi\xebren van een wachtwoord toe.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'pw1', children: 'Uw nieuwe wachtwoord' }), (0, i.jsx)(n.input, { type: 'password', id: 'wachtwoord2', autocomplete: 'new-password', name: 'wachtwoord' })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
   function c(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'sta-knippen-en-plakken-van-een-wachtwoord-toe', children: 'Sta knippen en plakken van een wachtwoord toe' }), '\n', (0, i.jsx)(n.p, { children: 'Een wachtwoord moet veilig zijn. Als je het knippen en plakken van een wachtwoord verhindert, dwing je gebruikers tot een simpel en goed te onthouden wachtwoord. Dat is nu juist niet de bedoeling.' }), '\n', (0, i.jsx)(n.p, { children: 'Kopi\xebren/plakken vanuit een wachtwoordmanager is een veel veiligere manier om een gebruiker een wachtwoord te laten invullen.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zoals het Britse ', (0, i.jsx)('span', { lang: 'en', children: 'National Cyber Security Centre' }), ' uitlegt in ', (0, i.jsx)(n.a, { href: 'https://www.ncsc.gov.uk/blog-post/let-them-paste-passwords', children: (0, i.jsx)('span', { lang: 'en', children: 'Let them paste passwords' }) }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { input: 'input', label: 'label', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(s.X, { appearance: 'do', title: 'Voeg autocomplete waarden toe aan adresgegevens.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'adres1', children: 'Straat en huisnummer' }), (0, i.jsx)(n.input, { type: 'text', id: 'adres1', autocomplete: 'street-address', name: 'adres' }), (0, i.jsx)(n.label, { for: 'postcode1', children: 'Postcode' }), (0, i.jsx)(n.input, { type: 'text', id: 'postcode1', autocomplete: 'postal-code', name: 'postcode' }), (0, i.jsx)(n.label, { for: 'woonplaats1', children: 'Woonplaats' }), (0, i.jsx)(n.input, { type: 'text', id: 'woonplaats1', autocomplete: 'address-level2', name: 'woonplaats' })] }) }) }), '\n', (0, i.jsx)(s.X, { appearance: 'dont', title: 'Laat autocomplete waarden weg bij adresgegevens.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'adres2', children: 'Straat en huisnummer' }), (0, i.jsx)(n.input, { type: 'text', id: 'adres2', name: 'adres' }), (0, i.jsx)(n.label, { for: 'postcode2', children: 'Postcode' }), (0, i.jsx)(n.input, { type: 'text', id: 'postcode2', name: 'postcode' }), (0, i.jsx)(n.label, { for: 'woonplaats2', children: 'Woonplaats' }), (0, i.jsx)(n.input, { type: 'text', id: 'woonplaats2', name: 'woonplaats' })] }) }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
   function m(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'vul-bekende-informatie-in-waar-mogelijk', children: 'Vul bekende informatie in waar mogelijk' }), '\n', (0, i.jsxs)(n.p, { children: ['Als de gebruiker is ingelogd, gebruik dan bekende informatie om velden vast in te vullen. In DigiD-sessies is bijvoorbeeld al veel informatie beschikbaar, die zou kunnen worden gebruikt om velden vooraf in te vullen.\nHet ', (0, i.jsx)(n.a, { href: 'https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).', children: 'gebruik van DigiD' }), ' is wel aan wettelijke voorwaarden verbonden.'] }), '\n', (0, i.jsx)(n.h3, { id: 'autocomplete', children: 'Autocomplete' }), '\n', (0, i.jsxs)(n.p, { children: ['Het HTML-attribuut ', (0, i.jsx)(n.code, { children: 'autocomplete' }), ' maakt het voor de gebruiker makkelijker om al eerder ingevulde informatie automatisch toe te voegen. De volledige lijst waarden staat op de MDN-website: ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete', children: 'HTML-attribuut: autocomplete' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Sommige waarden zijn onduidelijk of ontbreken voor Nederlandse toepassingen. Jules Ernst van 200 OK heeft een overzicht gemaakt van de beste manier om ', (0, i.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/#dutch', children: 'autocomplete in Nederlandse formulieren' }), ' toe te passen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Toevoegen van autocomplete aan de formuliervelden is nodig om te voldoen aan het WCAG-Succescriterium ', (0, i.jsx)(n.a, { href: '/wcag/1.3.5/', children: '1.3.5 Identificeer het doel van de input' }), ' (niveau AA).'] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
   function g(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g();
   }
   function x(e) {
    const n = { a: 'a', h3: 'h3', img: 'img', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h3, { id: 'geldige-e-mailadressen', children: 'Geldige e-mailadressen' }), '\n', (0, i.jsx)(n.p, { children: 'Sommige mensen gebruiken een + in hun e-mailadres, bijvoorbeeld om e-mails makkelijker te kunnen groeperen.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zo kiezen ze voor ', (0, i.jsx)(n.a, { href: 'mailto:naam+school@voorbeeld.nl', children: 'naam+school@voorbeeld.nl' }), ' voor e-mails van school en ', (0, i.jsx)(n.a, { href: 'mailto:naam+werk@voorbeeld.nl', children: 'naam+werk@voorbeeld.nl' }), ' voor e-mails over werk. Dit zijn geldige e-mailadressen, keur ze dus niet af.'] }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_email.png', alt: 'email met een plus teken is goedgekeurd' }) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
   function f(e) {
    const n = { h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'keur-niet-te-snel-af', children: 'Keur niet te snel af' }), '\n', (0, i.jsx)(n.p, { children: 'In de formuliervalidatie kan er al veel afgevangen worden.\nDenk met de gebruiker mee.' })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(f, { ...e }) }) : f(e);
   }
   function w(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(w, { ...e }) }) : w();
   }
   function y(e) {
    const n = { h3: 'h3', img: 'img', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h3, { id: 'eenduidig-te-herschrijven', children: 'Eenduidig te herschrijven' }), '\n', (0, i.jsx)(n.p, { children: 'Postcodes kunnen op verschillende manieren worden geschreven: bijvoorbeeld \u201c1234 AA\u201d (met spatie), \u201c1234AA\u201d (zonder spatie), \u201c1234aa\u201d (met kleine letters). Ook extra spaties aan het begin of eind kunnen meekomen bij het knippen/plakken van tekst.' }), '\n', (0, i.jsx)(n.p, { children: 'In code kunnen deze vormen gemakkelijk naar elkaar worden herschreven. Door alle vormen te accepteren en door de software te laten corrigeren, geef je prioriteit aan de gebruiker, in plaats van aan je systeem.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_herschrijven.png', alt: 'De 3 verschillende wijzen van postcode invoeren die allemaal goed zijn' }) })] });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(y, { ...e }) }) : y(e);
   }
   function F(e) {
    const n = { input: 'input', label: 'label', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(s.X, { appearance: 'do', title: 'Leg uit hoe een veld in te vullen.', description: 'Bijvoorbeeld in de description.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'ww', children: 'Nieuw wachtwoord' }), (0, i.jsx)(n.p, { id: 'ww_description', children: 'Minimaal 8 karakters, waarvan 2 cijfers en 1 hoofdletter.' }), (0, i.jsx)(n.input, { type: 'password', id: 'ww', name: 'wachtwoord', 'aria-describedby': 'ww_description' })] }) }) }), '\n', (0, i.jsx)(s.X, { appearance: 'dont', title: 'Wijze van invullen weglaten.', description: 'Laat de gebruiker niet raden of pas bij de foutmeldingen ontdekken wat er mis is.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'ww2', children: 'Nieuw wachtwoord' }), (0, i.jsx)(n.input, { type: 'password', id: 'ww2', name: 'wachtwoord' })] }) }) }), '\n', (0, i.jsx)(s.X, { appearance: 'dont', title: 'Wijze van invullen alleen in de placeholder zetten.', description: 'Zeker als de wijze van invullen precies goed moet zijn.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: 'geboortedatum2', children: 'Geboortedatum' }), (0, i.jsx)(n.input, { type: 'text', id: 'geboortedatum2', name: 'geboortedatum', placeholder: 'dd/mm/jjjj' })] }) }) })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(F, { ...e }) }) : F(e);
   }
   function V(e) {
    const n = { h2: 'h2', img: 'img', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'geef-geldige-waardes-aan-voor-een-invoerveld', children: 'Geef geldige waardes aan voor een invoerveld' }), '\n', (0, i.jsx)(n.p, { children: 'Geef geldige waardes aan voor een invoerveld (bijvoorbeeld de datum- of wachtwoordeisen) en niet alleen in de placeholder.' }), '\n', (0, i.jsx)(n.p, { children: 'Bedenk ook of het echt belangrijk is of, bijvoorbeeld een geboortedatum of telefoonnummer aan exacte invoereisen moet voldoen.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_wachtwoord-alt.png', alt: 'Wachtwoord-eisen zijn in de description getoond' }) }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_geboortedatum.png', alt: 'Voorbeeld van de waarden voor de geboortedatum worden in de description getoond' }) })] });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(V, { ...e }) }) : V(e);
   }
   function W(e) {
    const n = { a: 'a', h2: 'h2', h3: 'h3', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'maak-het-mogelijk-een-inzending-te-controleren-te-wijzigen-of-ongedaan-te-maken', children: 'Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken' }), '\n', (0, i.jsx)(n.p, { children: 'Wanneer een gebruiker een formulier invult met juridische, financi\xeble of persoonlijke gegevens, is het extra belangrijk dat de gegevens juist zijn en dat de gebruiker goed kan controleren wat is ingevuld.' }), '\n', (0, i.jsx)(n.p, { children: 'Een verkeerd of onvolledig ingevuld formulier kan grote consequenties hebben voor de inzender.' }), '\n', (0, i.jsx)(n.p, { children: 'Dit is niet alleen belangrijk voor mensen met een functiebeperking, maar voor iedereen. Je wilt toch graag extra goed controleren of je de juiste aankomst- en vertrekdatum hebt ingevuld bij het boeken van een dure vakantie. Of dat je alles naar waarheid en compleet hebt ingevuld bij de belastingaangifte.' }), '\n', (0, i.jsx)(n.p, { children: 'Zorg er daarom voor dat gebruiker de ingevulde gegevens kan controleren en indien gewenst kan corrigeren. En als dat niet mogelijk is: bied de mogelijkheid om een inzending of transactie te annuleren.' }), '\n', (0, i.jsxs)(n.p, { children: ['Bied ', (0, i.jsx)(n.strong, { children: 'ten minste \xe9\xe9n' }), ' van de volgende opties aan: "omkeerbaar", "gecontroleerd" of "bevestigd".'] }), '\n', (0, i.jsx)(n.h3, { id: 'omkeerbaar', children: 'Omkeerbaar' }), '\n', (0, i.jsx)(n.p, { children: 'Geef de gebruiker de mogelijkheid om een online aanvraag, opzegging of financi\xeble transactie terug te draaien of naderhand te wijzigen.' }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Het is mogelijk om een bestelling binnen 24 uur te annuleren.' }), '\n', (0, i.jsx)(n.li, { children: 'De gebruiker heeft een week bedenktijd voordat gegevens definitief worden verwijderd.' }), '\n', (0, i.jsx)(n.li, { children: 'Persoonlijke gegevens zijn te wijzigen in een "Mijn-omgeving".' }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'gecontroleerd', children: 'Gecontroleerd' }), '\n', (0, i.jsx)(n.p, { children: 'Controleer tijdens het invullen de gegevens op invoerfouten en geef de gebruiker de mogelijkheid de gegevens te verbeteren.' }), '\n', (0, i.jsxs)(n.p, { children: ['Een goede foutafhandeling tijdens het invullen van een formulier helpt de gebruiker fouten te voorkomen en te corrigeren. Lees hiervoor ook de ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'richtlijnen over foutmeldingen' }), '.'] }), '\n', (0, i.jsx)(n.h3, { id: 'bevestigd', children: 'Bevestigd' }), '\n', (0, i.jsx)(n.p, { children: 'Geef de gebruiker, voor inzending, de mogelijkheid om de ingevulde gegevens te lezen en te verbeteren.' }), '\n', (0, i.jsx)(n.p, { children: 'Bij een complex formulier en als er juridische, financi\xeble of persoonlijke gegevens worden uitgevraagd, is het essentieel dat de gebruiker kan controleren of alles goed is ingevuld voor verzenden.' }), '\n', (0, i.jsxs)(n.p, { children: ['Alles op een rij in de laatste stap van het formulier, met de mogelijkheid om nog correcties te maken. Dit staat uitgebreider beschreven in ', (0, i.jsx)(n.a, { href: 'https://nldesignsystem.nl/richtlijnen/formulieren/meerdere-stappen', children: 'Meerdere stappen in een formulier' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruikersonderzoek voor het ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/wmebv/vng-online-formulieren', children: 'Contactformulier voor WMEBV' }), ' laat goed zien hoe belangrijk deze laatste stap is.'] }), '\n', (0, i.jsxs)(n.p, { children: ['GOV.UK beschrijft hoe gebruikers te helpen in ', (0, i.jsx)(n.a, { href: 'https://design-system.service.gov.uk/patterns/check-answers/', children: (0, i.jsx)('span', { lang: 'en', children: 'Help users to Check answers' }) }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Voorbeelden van patronen in het NL Design System:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://nldesignsystem.nl/voorbeelden/patronen/formulieren/meer-stappen-formulier', children: 'Meer-stappen-formulier' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://nldesignsystem.nl/voorbeelden/patronen/formulieren/controlepagina', children: 'Controlepagina' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://nldesignsystem.nl/voorbeelden/patronen/formulieren/foutmeldingen', children: 'Foutmeldingen' }) }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Omkeerbaarheid, controle of bevestiging bij een formulier waarin om juridische, financi\xeble of persoonlijke gegevens wordt gevraagd, is nodig om te voldoen aan het WCAG-succescriterium ', (0, i.jsx)(n.a, { href: '/wcag/3.3.4/', children: '3.3.4 Foutpreventie (wettelijk, financieel, gegevens)' }), ' (niveau AA).'] })] });
   }
   function X(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(W, { ...e }) }) : W(e);
   }
   function C(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'vermeld-duidelijk-of-een-veld-wel-of-niet-verplicht-is', children: 'Vermeld duidelijk of een veld wel of niet verplicht is' }), '\n', (0, i.jsx)(n.p, { children: 'Laat gebruikers duidelijk weten welke informatie ingevuld moeten worden om een formulier te verzenden. Hiervoor heb je twee opties.' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Door de ', (0, i.jsx)(n.strong, { children: 'niet-verplichte' }), ' velden te markeren.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Door de ', (0, i.jsx)(n.strong, { children: 'verplichte' }), ' velden te markeren.'] }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Op basis van gebruikersonderzoek zouden wij de eerste optie aanbevelen.' }), '\n', (0, i.jsx)(n.p, { children: 'Plaats de uitleg over wel of niet verplichte velden altijd boven het formulier, zodat de gebruiker weet wat te verwachten bij het invullen.' }), '\n', (0, i.jsx)(n.p, { children: 'Maak de markering ook onderdeel van de labeltekst.' }), '\n', (0, i.jsxs)(n.p, { children: ['Screenreadergebruikers krijgen deze informatie daarnaast ook voorgelezen door ', (0, i.jsx)(n.code, { children: 'aria-required' }), ' of ', (0, i.jsx)(n.code, { children: 'required' }), ' in de code op te nemen bij de verplichte velden.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Door te helpen fouten te voorkomen voldoe van aan WCAG-Succescriterium ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#labels-of-instructies', children: '3.3.2 Labels of instructies' }), ' (niveau A).'] })] });
   }
   function A(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(C, { ...e }) }) : C(e);
   }
   function Z(e) {
    const n = { button: 'button', form: 'form', input: 'input', label: 'label', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(s.X, { appearance: 'do', title: 'Geef boven het formulier aan hoe niet-verplichte velden worden aangegeven.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.' }), (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { for: 'kleur1', children: 'Wat is je lievelingskleur' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur1', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, i.jsx)(n.label, { for: 'dier1', children: 'Wat is je lievelingsdier (niet verplicht)' }), (0, i.jsx)(n.input, { type: 'text', id: 'dier1', name: 'lievelingsdier' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] })] }) }) }), '\n', (0, i.jsx)(s.X, { appearance: 'dont', title: 'De gebruiker laten raden wat er al dan niet verplicht is.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { for: 'kleur2', children: 'Wat is je lievelingskleur' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur2', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, i.jsx)(n.label, { for: 'dier2', children: 'Wat is je lievelingsdier' }), (0, i.jsx)(n.input, { type: 'text', id: 'dier2', name: 'lievelingsdier' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] }) }) }) })] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(Z, { ...e }) }) : Z(e);
   }
   function G(e) {
    const n = { a: 'a', h3: 'h3', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h3, { id: 'optie-1-niet-verplichte-velden-markeren', children: "Optie 1: 'niet-verplichte' velden markeren" }), '\n', (0, i.jsx)(n.p, { children: "Uitgaande van het gegeven dat je in formulieren enkel het broodnodige uitvraagt zullen de meeste velden verplicht zijn. Hierdoor vormen de niet-verplichte velden een uitzondering. Geef dit aan door bij de niet-verplichte velden de tekst '(niet verplicht)' in het label op te nemen." }), '\n', (0, i.jsx)(n.p, { children: "Gebruikersonderzoek over de toepassing van 'niet verplicht' versus 'verplicht':" }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://adamsilver.io/blog/how-to-highlight-required-and-optional-form-fields/', children: (0, i.jsx)('span', { lang: 'en', children: '4 common mistakes UI/UX designers make when trying to help users spot required form fields (and what user research shows is better)' }) }), ' van Adam Silver.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://www.lukew.com/ff/entry.asp?725', children: (0, i.jsx)('span', { lang: 'en', children: 'Blog post: Marking Required vs. Optional form fields' }) }), ' van Luke Wroblewski.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://ask.lukew.com/chat?id=f6862342-64d1-4de9-a28a-16f4fe614452', children: (0, i.jsx)('span', { lang: 'en', children: 'Chatbot answer: Required versus optional fields' }) }), ' van Luke Wroblewski.'] }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ": Het woord 'optioneel' kan te moeilijk zijn voor mensen die laaggeletterd zijn. Gebruik dus 'niet verplicht'."] })] });
   }
   function q(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(G, { ...e }) }) : G(e);
   }
   function L(e) {
    const n = { button: 'button', form: 'form', input: 'input', label: 'label', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(s.X, { appearance: 'do', title: 'Geef boven het formulier aan hoe verplichte velden worden aangegeven.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als een veld verplicht is, staat dit erbij.' }), (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { for: 'kleur3', children: 'Wat is je lievelingskleur (verplicht)' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur3', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, i.jsx)(n.label, { for: 'dier3', children: 'Wat is je lievelingsdier' }), (0, i.jsx)(n.input, { type: 'text', id: 'dier3', name: 'lievelingsdier' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] })] }) }) }), '\n', (0, i.jsx)(s.X, { appearance: 'do', title: 'Geef boven het formulier aan hoe verplichte velden worden aangegeven en leg uit wat asterisk betekent.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als een veld verplicht is, staat er een * bij.' }), (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { for: 'kleur4', children: 'Wat is je lievelingskleur *' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur24', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, i.jsx)(n.label, { for: 'dier4', children: 'Wat is je lievelingsdier' }), (0, i.jsx)(n.input, { type: 'text', id: 'dier4', name: 'lievelingsdier' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] })] }) }) }), '\n', (0, i.jsx)(s.X, { appearance: 'dont', title: 'Bij alle velden aangeven of het al dan niet verplicht is.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { for: 'kleur5', children: 'Wat is je lievelingskleur (verplicht)' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur5', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, i.jsx)(n.label, { for: 'dier5', children: 'Wat is je lievelingsdier (niet verplicht)' }), (0, i.jsx)(n.input, { type: 'text', id: 'dier5', name: 'lievelingsdier' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] }) }) }) })] });
   }
   function M(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(L, { ...e }) }) : L(e);
   }
   function B(e) {
    const n = { a: 'a', h3: 'h3', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h3, { id: 'optie-2-verplichte-velden-markeren', children: "Optie 2: 'verplichte' velden markeren" }), '\n', (0, i.jsx)(n.p, { children: "Zijn de meeste velden in een formulier 'niet verplicht'? Of is het technisch niet mogelijk om de niet-verplichte velden te markeren? Geef dit dan aan door bij de verplichte velden de tekst '(verplicht)' in het label op te nemen." }), '\n', (0, i.jsx)(n.p, { children: "Een populaire manier om verplichte velden aan te duiden is door in het label een asterisk '*' op te nemen. Dit heeft niet de voorkeur omdat dit een extra denkstap voor de gebruikers vergt, zoals blijkt uit bovenstaand gebruikersonderzoek." }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik je deze constructie toch omdat je CMS of plug-in alleen deze mogelijkheid biedt, leg dan boven het formulier uit wat de asterisk betekent. Een asterisk alleen bij het formulierveld is niet voldoende, niet iedereen bezit deze voorkennis.' }), '\n', (0, i.jsxs)(n.p, { children: ['Uit onderzoek van Elevenways blijkt dat de asterisk goed wordt voorgelezen door screenreaders: ', (0, i.jsx)(n.a, { href: 'https://elevenways.be/nl/artikels/hoe-screen-readers-speciale-tekens-lezen', children: 'Hoe screenreaders speciale tekens lezen: een update' }), '.'] })] });
   }
   function H(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(B, { ...e }) }) : B(e);
   }
   function P(e) {
    const n = { button: 'button', form: 'form', input: 'input', label: 'label', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(s.X, { appearance: 'do', title: 'Gebruik aria-required om aan te geven of een veld verplicht is.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { for: 'kleur8', children: 'Wat is je lievelingskleur (verplicht)' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur8', name: 'lievelingskleur', 'aria-required': 'true', 'aria-invalid': 'false' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] }) }) }) }), '\n', (0, i.jsx)(s.X, { appearance: 'do', title: 'Gebruik required om aan te geven of een veld verplicht is, in combinatie met novalidate.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(n.form, { novalidate: !0, children: [(0, i.jsx)(n.label, { for: 'kleur9', children: 'Wat is je lievelingskleur (verplicht)' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur9', name: 'lievelingskleur', required: !0, 'aria-invalid': 'false' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] }) }) }) }), '\n', (0, i.jsx)(s.X, { appearance: 'dont', title: 'Geef helemaal niet aan of een veld verplicht is, en laat de gebruiker dit pas weten bij de foutmeldingen.', children: (0, i.jsx)(o.X, { language: 'html', children: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { for: 'kleur10', children: 'Wat is je lievelingskleur' }), (0, i.jsx)(n.p, { id: 'fout10', children: 'Invoerfout: Vul de naam van een kleur in.' }), (0, i.jsx)(n.input, { type: 'text', id: 'kleur10', 'aria-describedby': 'fout10', name: 'lievelingskleur' }), (0, i.jsx)(n.button, { children: 'Verstuur' })] }) }) }) })] });
   }
   function E(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(P, { ...e }) }) : P(e);
   }
   function T(e) {
    const n = { a: 'a', code: 'code', h3: 'h3', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h3, { id: 'screenreaderfeedback', children: 'Screenreaderfeedback' }), '\n', (0, i.jsxs)(n.p, { children: ['Vertel een gebruiker van hulptechnologie\xebn (als screenreaders) dat een veld verplicht is met het ARIA-attribuut ', (0, i.jsx)(n.code, { children: 'aria-required="true"' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Je kunt ook het HTML-attribuut ', (0, i.jsx)(n.code, { children: 'required' }), ' gebruiken in plaats van ', (0, i.jsx)(n.code, { children: 'aria-required' }), ', maar dit vereist ook het attribuut ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate', children: 'novalidate' }), ' in het ', (0, i.jsx)(n.code, { children: '<form>' }), ' element.\nNovalidate voorkomt dat de formuliervalidatie van de browser in werking treedt. Voor aria-required="true" hoeft dit niet. Alhoewel het gebruik van required in plaats van aria-required niet fout is, geven we daarom de voorkeur aan aria-required.'] })] });
   }
   function O(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(T, { ...e }) }) : T(e);
   }
   const R = { title: 'Voorkom fouten in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Voorkom fouten', sidebar_position: 13, pagination_label: 'Voorkom fouten in een formulier', description: 'Richtlijnen het voorkomen van fouten door hulp aan de gebruiker in een formulier.', slug: 'voorkom-fouten', keywords: ['informatie', 'formulier', 'design', 'code'] },
    U = 'Voorkom fouten, help de gebruiker',
    I = { id: 'richtlijnen/formulieren/help-the-user', title: 'Voorkom fouten in een formulier | Richtlijnen', description: 'Richtlijnen het voorkomen van fouten door hulp aan de gebruiker in een formulier.', source: '@site/docs/richtlijnen/formulieren/help-the-user.mdx', sourceDirName: 'richtlijnen/formulieren', slug: '/richtlijnen/formulieren/voorkom-fouten', permalink: '/en/richtlijnen/formulieren/voorkom-fouten', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help-the-user.mdx', tags: [], version: 'current', sidebarPosition: 13, frontMatter: { title: 'Voorkom fouten in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Voorkom fouten', sidebar_position: 13, pagination_label: 'Voorkom fouten in een formulier', description: 'Richtlijnen het voorkomen van fouten door hulp aan de gebruiker in een formulier.', slug: 'voorkom-fouten', keywords: ['informatie', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Visueel ontwerp van formulieren', permalink: '/en/richtlijnen/formulieren/visueel-ontwerp' }, next: { title: 'Wanneer gebruik je welk formulierelement', permalink: '/en/richtlijnen/formulieren/wanneer-welk-form-element' } },
    K = {},
    J = [];
   function Y(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'voorkom-fouten-help-de-gebruiker', children: 'Voorkom fouten, help de gebruiker' }), '\n', (0, i.jsx)(n.p, { children: 'Een formulier invullen moet zo gemakkelijk mogelijk zijn. Hoe help je je gebruiker het beste?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '#vermeld-duidelijk-of-een-veld-verplicht-is', children: 'Vermeld duidelijk of een veld verplicht is' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '#sta-knippen-en-plakken-van-een-wachtwoord-toe', children: 'Sta knippen en plakken van gegevens (zoals een wachtwoord) toe' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '#keur-niet-te-snel-af', children: 'Keur niet te snel af' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '#geef-geldige-waardes-aan-voor-een-invoerveld', children: 'Geef geldige waardes aan voor een invoerveld' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '#vul-bekende-informatie-in-waar-mogelijk', children: 'Vul bekende informatie in waar mogelijk' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '#maak-het-mogelijk-een-inzending-te-controleren-te-wijzigen-of-ongedaan-te-maken', children: 'Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(A, {}), '\n', (0, i.jsx)(q, {}), '\n', (0, i.jsx)(D, {}), '\n', (0, i.jsx)(H, {}), '\n', (0, i.jsx)(M, {}), '\n', (0, i.jsx)(O, {}), '\n', (0, i.jsx)(E, {}), '\n', (0, i.jsx)(u, {}), '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(b, {}), '\n', (0, i.jsx)(k, {}), '\n', (0, i.jsx)(v, {}), '\n', (0, i.jsx)(z, {}), '\n', (0, i.jsx)(_, {}), '\n', (0, i.jsx)(S, {}), '\n', (0, i.jsx)(N, {}), '\n', (0, i.jsx)(j, {}), '\n', (0, i.jsx)(p, {}), '\n', (0, i.jsx)(X, {}), '\n', (0, i.jsx)(l.ZP, {})] });
   }
   function $(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(Y, { ...e }) }) : Y(e);
   }
  },
  94091: (e, n, r) => {
   r.d(n, { X: () => x });
   var i = r(78187),
    t = r(4814),
    l = r(73891),
    o = r(65420),
    s = r(58243),
    a = r(25032),
    d = r(74642),
    c = r(75271),
    u = r(60027);
   const h = { 'nlds-canvas': 'nlds-canvas_h8Yz', 'nlds-canvas--distanced': 'nlds-canvas--distanced_BU4b', 'nlds-canvas__example': 'nlds-canvas__example_sS53', 'nlds-canvas__example-document': 'nlds-canvas__example-document_cR3e', 'nlds-canvas__code-block': 'nlds-canvas__code-block_eqxI', 'nlds-canvas__code-block--user-select-none': 'nlds-canvas__code-block--user-select-none_Jv1j', 'nlds-canvas__toolbar': 'nlds-canvas__toolbar_AMcV', 'nlds-canvas__toolbar--copy': 'nlds-canvas__toolbar--copy_HaYV', 'nlds-canvas__button': 'nlds-canvas__button_cHBw' };
   var p = r(41179),
    m = r(52676);
   const j = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(i.Tg, { className: h['nlds-canvas__example-surface'], children: (0, m.jsx)(i.BB, { className: (0, t.Z)('utrecht-document--surface', h['nlds-canvas__example-document']), children: (0, m.jsx)(i.nv, { className: h['nlds-canvas__example-paragraph'], children: n }) }) });
   };
   j.displayName = 'ParagraphContainer';
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(i.Tg, { className: h['nlds-canvas__example-surface'], children: (0, m.jsx)(i.BB, { className: (0, t.Z)('utrecht-document--surface', h['nlds-canvas__example-document']), children: n }) });
   };
   g.displayName = 'DocumentContainer';
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(i.Tg, { className: h['nlds-canvas__example-surface'], children: n });
   };
   v.displayName = 'SurfaceContainer';
   const x = (e) => {
    let { code: n, copy: r = !0, defaultExpandedCode: x = !1, displayCode: k = !0, children: f, container: b = 'document', language: w, designTokens: _ } = e,
     y = 'function' == typeof f ? f() : f,
     z = 'function' == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     F = 'string' == typeof n ? n : u.uS(z || y),
     [N, V] = (0, c.useState)(F),
     [S, W] = (0, c.useState)(x);
    (0, c.useEffect)(() => {
     (async () => {
      (N = await d.ZP.format(F, { parser: w, plugins: [l.Z, o.ZP, s.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: 'off', htmlWhitespaceSensitivity: 'ignore' })), V(N);
     })();
    }, [F]);
    const X = (0, c.useId)();
    let C = c.Fragment;
    return (
     'paragraph' === b ? (C = j) : 'document' === b ? (C = g) : 'surface' === b && (C = v),
     (0, m.jsxs)('div', {
      className: (0, t.Z)(h['nlds-canvas']),
      children: [
       y && (0, m.jsx)('div', { className: (0, t.Z)(h['nlds-canvas__example']), children: (0, m.jsx)('div', { className: 'voorbeeld-theme', style: _, children: (0, m.jsx)(C, { children: (0, m.jsx)(i.pu, { children: y }) }) }) }),
       k &&
        (0, m.jsx)('div', {
         className: (0, t.Z)(h['nlds-canvas__toolbar']),
         children: (0, m.jsx)(i.zx, {
          className: (0, t.Z)(h['nlds-canvas__button'], h['nlds-canvas__toggle-code-button']),
          appearance: 'subtle-button',
          onClick: () => {
           W(!S);
          },
          'aria-expanded': S,
          'aria-controls': X,
          children: S ? 'Verberg code' : 'Bekijk code',
         }),
        }),
       k &&
        (0, m.jsxs)('div', {
         className: (0, t.Z)(h['nlds-canvas__code-block'], !r && h['nlds-canvas__code-block--user-select-none']),
         id: X,
         hidden: !S,
         children: [
          (0, m.jsx)(p.u, { syntax: w, textContent: N, trim: !0 }),
          r &&
           (0, m.jsx)('div', {
            className: (0, t.Z)(h['nlds-canvas__toolbar'], h['nlds-canvas__toolbar--copy']),
            children: (0, m.jsx)(i.zx, {
             className: (0, t.Z)(h['nlds-canvas__button'], h['nlds-canvas__copy-button']),
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
  41179: (e, n, r) => {
   r.d(n, { u: () => s });
   var i = r(78187),
    t = r(12429);
   r(75271);
   const l = {
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
   var o = r(52676);
   function s(e) {
    let { lineNumber: n, syntax: r, textContent: s, trim: a } = e,
     d = s;
    return (
     a && (d = d.trim()),
     (0, o.jsx)(t.y$, {
      theme: l,
      code: d,
      language: r || '',
      children: (e) => {
       let { style: r, tokens: t, getLineProps: l, getTokenProps: s } = e;
       return (0, o.jsx)(i.dn, { style: r, children: t.map((e, r) => (0, o.jsxs)('span', { ...l({ line: e }), children: [n && (0, o.jsx)('span', { children: r + 1 }), e.map((e, n) => (0, o.jsx)('span', { ...s({ token: e }) }, n)), '\n'] }, r)) });
      },
     })
    );
   }
  },
  69265: (e, n, r) => {
   r.d(n, { X: () => d });
   var i = r(10709),
    t = r(27266),
    l = r(78187),
    o = r(4814);
   r(75271);
   const s = { 'nlds-guideline': 'nlds-guideline_tEmj', 'nlds-guideline__description': 'nlds-guideline__description_Rmd2', 'nlds-guideline__example': 'nlds-guideline__example_Npzh', 'nlds-guideline__icon': 'nlds-guideline__icon_CMAh', 'nlds-guideline__title': 'nlds-guideline__title_Kp8d', 'nlds-guideline__badge': 'nlds-guideline__badge_cDbY', 'nlds-guideline__badge--dont': 'nlds-guideline__badge--dont_w4Jz', 'nlds-guideline__badge--do': 'nlds-guideline__badge--do_wylG', 'nlds-guideline--dont': 'nlds-guideline--dont_NsYw' };
   var a = r(52676);
   const d = (e) => {
    let { title: n, appearance: r, description: d, children: c, figure: u } = e;
    const h = 'Doen',
     p = 'Niet doen',
     m = u ? 'figure' : 'div',
     j = u ? 'figcaption' : 'div';
    return (0, a.jsxs)(m, { className: (0, o.Z)(s['nlds-guideline'], s[`nlds-guideline--${r}`]), id: 'string' == typeof n ? n?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, a.jsxs)(j, { className: (0, o.Z)(s['nlds-guideline__description']), children: ['dont' === r ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.nv, { className: (0, o.Z)(s['nlds-guideline__badge'], s[`nlds-guideline__badge--${r}`]), children: [(0, a.jsx)(i.Z, { className: s['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: s['nlds-guideline__title'], children: p })] }), (0, a.jsx)(l.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.nv, { className: (0, o.Z)(s['nlds-guideline__badge'], s[`nlds-guideline__badge--${r}`]), children: [(0, a.jsx)(t.Z, { className: s['nlds-guideline__icon'] }), (0, a.jsx)('span', { className: s['nlds-guideline__title'], children: h })] }), (0, a.jsx)(l.nv, { children: n })] }), d] }), (0, a.jsx)('div', { className: (0, o.Z)(s['nlds-guideline__example']), children: c })] });
   };
  },
  24785: (e, n, r) => {
   r.d(n, { Z: () => s, a: () => o });
   var i = r(75271);
   const t = {},
    l = i.createContext(t);
   function o(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), i.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
