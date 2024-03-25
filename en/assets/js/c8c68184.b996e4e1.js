"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8373],
 {
  70592: (e, n, r) => {
   r.d(n, { ZP: () => o });
   var i = r(11527),
    l = r(80877);
   function t(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, i.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(t, { ...e }) }) : t(e);
   }
  },
  32442: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => G, contentTitle: () => M, default: () => E, frontMatter: () => L, metadata: () => q, toc: () => P });
   var i = r(11527),
    l = r(80877),
    t = r(70592),
    o = r(73460),
    s = r(30036);
   function a(e) {
    const n = { input: "input", label: "label", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Sta kopi\xebren van een wachtwoord toe.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "pw1", children: "Uw nieuwe wachtwoord" }), (0, i.jsx)(n.input, { type: "password", id: "wachtwoord2", autocomplete: "new-password", name: "wachtwoord" })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
   function c(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "sta-knippen-en-plakken-van-een-wachtwoord-toe", children: "Sta knippen en plakken van een wachtwoord toe" }), "\n", (0, i.jsx)(n.p, { children: "Een wachtwoord moet veilig zijn. Als je het knippen en plakken van een wachtwoord verhindert, dwing je gebruikers tot een simpel en goed te onthouden wachtwoord. Dat is nu juist niet de bedoeling." }), "\n", (0, i.jsx)(n.p, { children: "Kopi\xebren/plakken vanuit een wachtwoordmanager is een veel veiligere manier om een gebruiker een wachtwoord te laten invullen." }), "\n", (0, i.jsxs)(n.p, { children: ["Zoals het Britse ", (0, i.jsx)("span", { lang: "en", children: "National Cyber Security Centre" }), " uitlegt in ", (0, i.jsx)(n.a, { href: "https://www.ncsc.gov.uk/blog-post/let-them-paste-passwords", children: (0, i.jsx)("span", { lang: "en", children: "Let them paste passwords" }) }), "."] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { input: "input", label: "label", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Voeg autocomplete waarden toe aan adresgegevens.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "adres1", children: "Straat en huisnummer" }), (0, i.jsx)(n.input, { type: "text", id: "adres1", autocomplete: "street-address", name: "adres" }), (0, i.jsx)(n.label, { for: "postcode1", children: "Postcode" }), (0, i.jsx)(n.input, { type: "text", id: "postcode1", autocomplete: "postal-code", name: "postcode" }), (0, i.jsx)(n.label, { for: "woonplaats1", children: "Woonplaats" }), (0, i.jsx)(n.input, { type: "text", id: "woonplaats1", autocomplete: "address-level2", name: "woonplaats" })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "dont", title: "Laat autocomplete waarden weg bij adresgegevens.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "adres2", children: "Straat en huisnummer" }), (0, i.jsx)(n.input, { type: "text", id: "adres2", name: "adres" }), (0, i.jsx)(n.label, { for: "postcode2", children: "Postcode" }), (0, i.jsx)(n.input, { type: "text", id: "postcode2", name: "postcode" }), (0, i.jsx)(n.label, { for: "woonplaats2", children: "Woonplaats" }), (0, i.jsx)(n.input, { type: "text", id: "woonplaats2", name: "woonplaats" })] }) }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
   function m(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "vul-bekende-informatie-in-waar-mogelijk", children: "Vul bekende informatie in waar mogelijk" }), "\n", (0, i.jsxs)(n.p, { children: ["Als de gebruiker is ingelogd, gebruik dan bekende informatie om velden vast in te vullen. In DigiD-sessies is bijvoorbeeld al veel informatie beschikbaar, die zou kunnen worden gebruikt om velden vooraf in te vullen.\nHet ", (0, i.jsx)(n.a, { href: "https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).", children: "gebruik van DigiD" }), " is wel aan wettelijke voorwaarden verbonden."] }), "\n", (0, i.jsx)(n.h3, { id: "autocomplete", children: "Autocomplete" }), "\n", (0, i.jsxs)(n.p, { children: ["Het HTML-attribuut ", (0, i.jsx)(n.code, { children: "autocomplete" }), " maakt het voor de gebruiker makkelijker om al eerder ingevulde informatie automatisch toe te voegen. De volledige lijst waarden staat op de MDN-website: ", (0, i.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete", children: "HTML-attribuut: autocomplete" }), "."] }), "\n", (0, i.jsxs)(n.p, { children: ["Sommige waarden zijn onduidelijk of ontbreken voor Nederlandse toepassingen. Jules Ernst van 200 OK heeft een overzicht gemaakt van de beste manier om ", (0, i.jsx)(n.a, { href: "https://www.200ok.nl/tips/autocomplete/#dutch", children: "autocomplete in Nederlandse formulieren" }), " toe te passen."] }), "\n", (0, i.jsxs)(n.p, { children: ["Toevoegen van autocomplete aan de formuliervelden is nodig om te voldoen aan het WCAG-Succescriterium ", (0, i.jsx)(n.a, { href: "/wcag/1.3.5/", children: "1.3.5 Identificeer het doel van de input" }), " (niveau AA)."] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
   function j(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j();
   }
   function x(e) {
    const n = { a: "a", h3: "h3", img: "img", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h3, { id: "geldige-e-mailadressen", children: "Geldige e-mailadressen" }), "\n", (0, i.jsx)(n.p, { children: "Sommige mensen gebruiken een + in hun e-mailadres, bijvoorbeeld om e-mails makkelijker te kunnen groeperen." }), "\n", (0, i.jsxs)(n.p, { children: ["Zo kiezen ze voor ", (0, i.jsx)(n.a, { href: "mailto:naam+school@voorbeeld.nl", children: "naam+school@voorbeeld.nl" }), " voor e-mails van school en ", (0, i.jsx)(n.a, { href: "mailto:naam+werk@voorbeeld.nl", children: "naam+werk@voorbeeld.nl" }), " voor e-mails over werk. Dit zijn geldige e-mailadressen, keur ze dus niet af."] }), "\n", (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_email.png", alt: "email met een plus teken is goedgekeurd" }) })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
   function k(e) {
    const n = { h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "keur-niet-te-snel-af", children: "Keur niet te snel af" }), "\n", (0, i.jsx)(n.p, { children: "In de formuliervalidatie kan er al veel afgevangen worden.\nDenk met de gebruiker mee." })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k(e);
   }
   function w(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(w, { ...e }) }) : w();
   }
   function y(e) {
    const n = { h3: "h3", img: "img", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h3, { id: "eenduidig-te-herschrijven", children: "Eenduidig te herschrijven" }), "\n", (0, i.jsx)(n.p, { children: "Postcodes kunnen op verschillende manieren worden geschreven: bijvoorbeeld \u201c1234 AA\u201d (met spatie), \u201c1234AA\u201d (zonder spatie), \u201c1234aa\u201d (met kleine letters). Ook extra spaties aan het begin of eind kunnen meekomen bij het knippen/plakken van tekst." }), "\n", (0, i.jsx)(n.p, { children: "In code kunnen deze vormen gemakkelijk naar elkaar worden herschreven. Door alle vormen te accepteren en door de software te laten corrigeren, geef je prioriteit aan de gebruiker, in plaats van aan je systeem." }), "\n", (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_herschrijven.png", alt: "De 3 verschillende wijzen van postcode invoeren die allemaal goed zijn" }) })] });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(y, { ...e }) }) : y(e);
   }
   function N(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Leg uit hoe een veld in te vullen.", description: "Bijvoorbeeld in de description.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "ww", children: "Nieuw wachtwoord" }), (0, i.jsx)(n.p, { id: "ww_description", children: "Minimaal 8 karakters, waarvan 2 cijfers en 1 hoofdletter." }), (0, i.jsx)(n.input, { type: "password", id: "ww", name: "wachtwoord", "aria-describedby": "ww_description" })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "dont", title: "Wijze van invullen weglaten.", description: "Laat de gebruiker niet raden of pas bij de foutmeldingen ontdekken wat er mis is.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "ww2", children: "Nieuw wachtwoord" }), (0, i.jsx)(n.input, { type: "password", id: "ww2", name: "wachtwoord" })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "dont", title: "Wijze van invullen alleen in de placeholder zetten.", description: "Zeker als de wijze van invullen precies goed moet zijn.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "geboortedatum2", children: "Geboortedatum" }), (0, i.jsx)(n.input, { type: "text", id: "geboortedatum2", name: "geboortedatum", placeholder: "dd/mm/jjjj" })] }) }) })] });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(N, { ...e }) }) : N(e);
   }
   function F(e) {
    const n = { h2: "h2", img: "img", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "geef-geldige-waardes-aan-voor-een-invoerveld", children: "Geef geldige waardes aan voor een invoerveld" }), "\n", (0, i.jsx)(n.p, { children: "Geef geldige waardes aan voor een invoerveld (bijvoorbeeld de datum- of wachtwoordeisen) en niet alleen in de placeholder." }), "\n", (0, i.jsx)(n.p, { children: "Bedenk ook of het echt belangrijk is of, bijvoorbeeld een geboortedatum of telefoonnummer aan exacte invoereisen moet voldoen." }), "\n", (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_wachtwoord-alt.png", alt: "Wachtwoord-eisen zijn in de description getoond" }) }), "\n", (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_geboortedatum.png", alt: "Voorbeeld van de waarden voor de geboortedatum worden in de description getoond" }) })] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(F, { ...e }) }) : F(e);
   }
   function Z(e) {
    const n = { a: "a", h2: "h2", h3: "h3", li: "li", p: "p", strong: "strong", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "maak-het-mogelijk-een-inzending-te-controleren-te-wijzigen-of-ongedaan-te-maken", children: "Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken" }), "\n", (0, i.jsx)(n.p, { children: "Wanneer een gebruiker een formulier invult met juridische, financi\xeble of persoonlijke gegevens, is het extra belangrijk dat de gegevens juist zijn en dat de gebruiker goed kan controleren wat is ingevuld." }), "\n", (0, i.jsx)(n.p, { children: "Een verkeerd of onvolledig ingevuld formulier kan grote consequenties hebben voor de inzender." }), "\n", (0, i.jsx)(n.p, { children: "Dit is niet alleen belangrijk voor mensen met een functiebeperking, maar voor iedereen. Je wilt toch graag extra goed controleren of je de juiste aankomst- en vertrekdatum hebt ingevuld bij het boeken van een dure vakantie. Of dat je alles naar waarheid en compleet hebt ingevuld bij de belastingaangifte." }), "\n", (0, i.jsx)(n.p, { children: "Zorg er daarom voor dat gebruiker de ingevulde gegevens kan controleren en indien gewenst kan corrigeren. En als dat niet mogelijk is: bied de mogelijkheid om een inzending of transactie te annuleren." }), "\n", (0, i.jsxs)(n.p, { children: ["Bied ", (0, i.jsx)(n.strong, { children: "ten minste \xe9\xe9n" }), ' van de volgende opties aan: "omkeerbaar", "gecontroleerd" of "bevestigd".'] }), "\n", (0, i.jsx)(n.h3, { id: "omkeerbaar", children: "Omkeerbaar" }), "\n", (0, i.jsx)(n.p, { children: "Geef de gebruiker de mogelijkheid om een online aanvraag, opzegging of financi\xeble transactie terug te draaien of naderhand te wijzigen." }), "\n", (0, i.jsx)(n.p, { children: "Bijvoorbeeld:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsx)(n.li, { children: "Het is mogelijk om een bestelling binnen 24 uur te annuleren." }), "\n", (0, i.jsx)(n.li, { children: "De gebruiker heeft een week bedenktijd voordat gegevens definitief worden verwijderd." }), "\n", (0, i.jsx)(n.li, { children: 'Persoonlijke gegevens zijn te wijzigen in een "Mijn-omgeving".' }), "\n"] }), "\n", (0, i.jsx)(n.h3, { id: "gecontroleerd", children: "Gecontroleerd" }), "\n", (0, i.jsx)(n.p, { children: "Controleer tijdens het invullen de gegevens op invoerfouten en geef de gebruiker de mogelijkheid de gegevens te verbeteren." }), "\n", (0, i.jsxs)(n.p, { children: ["Een goede foutafhandeling tijdens het invullen van een formulier helpt de gebruiker fouten te voorkomen en te corrigeren. Lees hiervoor ook de ", (0, i.jsx)(n.a, { href: "/richtlijnen/formulieren/foutmeldingen/", children: "richtlijnen over foutmeldingen" }), "."] }), "\n", (0, i.jsx)(n.h3, { id: "bevestigd", children: "Bevestigd" }), "\n", (0, i.jsx)(n.p, { children: "Geef de gebruiker, voor inzending, de mogelijkheid om de ingevulde gegevens te lezen en te verbeteren." }), "\n", (0, i.jsx)(n.p, { children: "Bij een complex formulier en als er juridische, financi\xeble of persoonlijke gegevens worden uitgevraagd, is het essentieel dat de gebruiker kan controleren of alles goed is ingevuld voor verzenden." }), "\n", (0, i.jsxs)(n.p, { children: ["Alles op een rij in de laatste stap van het formulier, met de mogelijkheid om nog correcties te maken. Dit staat uitgebreider beschreven in ", (0, i.jsx)(n.a, { href: "https://nldesignsystem.nl/richtlijnen/formulieren/meerdere-stappen", children: "Meerdere stappen in een formulier" }), "."] }), "\n", (0, i.jsxs)(n.p, { children: ["Gebruikersonderzoek voor het ", (0, i.jsx)(n.a, { href: "https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/wmebv/vng-online-formulieren", children: "Contactformulier voor WMEBV" }), " laat goed zien hoe belangrijk deze laatste stap is."] }), "\n", (0, i.jsxs)(n.p, { children: ["GOV.UK beschrijft hoe gebruikers te helpen in ", (0, i.jsx)(n.a, { href: "https://design-system.service.gov.uk/patterns/check-answers/", children: (0, i.jsx)("span", { lang: "en", children: "Help users to Check answers" }) }), "."] }), "\n", (0, i.jsx)(n.p, { children: "Voorbeelden van patronen in het NL Design System:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: "https://nldesignsystem.nl/voorbeelden/patronen/formulieren/meer-stappen-formulier", children: "Meer-stappen-formulier" }) }), "\n", (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: "https://nldesignsystem.nl/voorbeelden/patronen/formulieren/controlepagina", children: "Controlepagina" }) }), "\n", (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: "https://nldesignsystem.nl/voorbeelden/patronen/formulieren/foutmeldingen", children: "Foutmeldingen" }) }), "\n"] }), "\n", (0, i.jsxs)(n.p, { children: ["Omkeerbaarheid, controle of bevestiging bij een formulier waarin om juridische, financi\xeble of persoonlijke gegevens wordt gevraagd, is nodig om te voldoen aan het WCAG-succescriterium ", (0, i.jsx)(n.a, { href: "/wcag/3.3.4/", children: "3.3.4 Foutpreventie (wettelijk, financieel, gegevens)" }), " (niveau AA)."] })] });
   }
   function C(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(Z, { ...e }) }) : Z(e);
   }
   function V(e) {
    const n = { button: "button", form: "form", input: "input", label: "label", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Voeg novalidate toe als je required gebruikt.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(n.form, { novalidate: "novalidate", children: [(0, i.jsx)(n.label, { for: "kleur1", children: "Wat is je lievelingskleur (verplicht)" }), (0, i.jsx)(n.input, { type: "text", id: "kleur1", name: "lievelingskleur", required: !0, "aria-invalid": "false" }), (0, i.jsx)(n.button, { children: "Mijn lievelingskleur" })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Vertel duidelijk wat het verplichte veld is.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { for: "email1", children: "Uw e-mailadres (verplicht)" }), (0, i.jsx)(n.input, { type: "text", id: "email1", name: "email", "aria-required": "true", "aria-invalid": "false" }), (0, i.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "do", title: "Leg het sterretje uit boven het formulier", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "* betekent verplicht in te vullen." }), (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { for: "email2", children: "Uw e-mailadres *" }), (0, i.jsx)(n.input, { type: "text", id: "email2", name: "email", "aria-required": "true", "aria-invalid": "false" }), (0, i.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "dont", title: "Vertrouw op HTML5-formuliervalidatie.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { for: "email3", children: "Uw e-mailadres *" }), (0, i.jsx)(n.input, { type: "text", id: "email3", name: "email", required: "required" }), (0, i.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "dont", title: "Leg het sterretje niet uit.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { for: "email4", children: "Uw e-mailadres *" }), (0, i.jsx)(n.input, { type: "text", id: "email4", name: "email", "aria-required": "true", "aria-invalid": "false" }), (0, i.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] }) }) }), "\n", (0, i.jsx)(s.X, { appearance: "dont", title: "Geef geen feedback aan screenreadergebruikers.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "* betekent verplicht in te vullen." }), (0, i.jsxs)(n.form, { children: [(0, i.jsx)(n.label, { for: "email3", children: "Uw e-mailadres *" }), (0, i.jsx)(n.input, { type: "text", id: "email3", name: "email" }), (0, i.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] })] }) }) })] });
   }
   function A(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(V, { ...e }) }) : V(e);
   }
   function X(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", li: "li", p: "p", pre: "pre", strong: "strong", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "vermeld-duidelijk-of-een-veld-verplicht-is", children: "Vermeld duidelijk of een veld verplicht is" }), "\n", (0, i.jsx)(n.p, { children: "Laat bezoekers niet raden, maar wees duidelijk welke velden verplicht zijn. Dit kan op een aantal manieren:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsx)(n.li, { children: "Door boven het formulier te vermelden dat alle velden verplicht zijn, mits anders vermeld. Dan kan in het label de tekst '(niet verplicht)' worden opgenomen." }), "\n", (0, i.jsx)(n.li, { children: "Door bij de verplichte velden in het label de tekst '(verplicht)' op te nemen." }), "\n", (0, i.jsx)(n.li, { children: "Door bij de verplichte velden in het label een asterisk '*' op te nemen. Leg dan wel boven het formulier uit wat de asterisk betekent. Een asterisk alleen bij het formulierveld is niet voldoende." }), "\n"] }), "\n", (0, i.jsx)(n.p, { children: "Zet eventuele extra uitleg altijd boven het formulier en niet in het formulier. Screenreadergebruiker kunnen extra tekst missen binnen een formulier, als die niet gekoppeld zijn aan een formulierveld." }), "\n", (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: "language-html", children: '<p>* betekent verplicht in te vullen.</p>\n<form>\n  <label for="kleur1">Wat is je lievelingskleur *</label>\n  <input type="text" id="kleur1" name="lievelingskleur" aria-required="true" aria-invalid="false" />\n  [... etc ...]\n</form>\n' }) }), "\n", (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: "language-html", children: '<p>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</p>\n<form>\n  <label for="kleur2">Wat is je lievelingskleur</label>\n  <input type="text" id="kleur2" name="lievelingskleur" aria-required="true" aria-invalid="false" />\n  <label for="kleur1">Wat is je lievelingsdier (niet verplicht)</label>\n  <input type="text" id="dier2" name="lievelingsdier" />\n  [... etc ...]\n</form>\n' }) }), "\n", (0, i.jsx)(n.h3, { id: "screenreaderfeedback", children: "Screenreaderfeedback" }), "\n", (0, i.jsxs)(n.p, { children: ["Vertel altijd aan een gebruiker van hulptechnologie\xebn (als screenreaders) dat een veld verplicht is met het ARIA-attribuut ", (0, i.jsx)(n.code, { children: 'aria-required="true"' }), "."] }), "\n", (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: "language-html", children: '<form>\n  <label for="kleur3">Wat is je lievelingskleur (verplicht)</label>\n  <input type="text" id="kleur3" name="lievelingskleur" aria-required="true" aria-invalid="false" />\n  [... etc ...]\n</form>\n' }) }), "\n", (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: (0, i.jsx)(n.code, { children: "Let op" }) }), ": Gebruik liever geen ", (0, i.jsx)(n.code, { children: "required" }), " in een invoerveld, dit vereist ook het attribuut ", (0, i.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate", children: "novalidate" }), " als attribute op in het ", (0, i.jsx)(n.code, { children: "<form>" }), " element.\nDit voorkomt dat de formuliervalidatie van de browser in werking treedt. Voor ", (0, i.jsx)(n.code, { children: 'aria-required="true"' }), " hoeft dit niet. Alhoewel het gebruik van ", (0, i.jsx)(n.code, { children: "required" }), " in plaats van ", (0, i.jsx)(n.code, { children: "aria-required" }), " niet fout is, geven we hierom de voorkeur aan ", (0, i.jsx)(n.code, { children: "aria-required" }), "."] }), "\n", (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: "language-html", children: '<form novalidate>\n  <label for="kleur4">Wat is je lievelingskleur (verplicht)</label>\n  <input type="text" id="kleur4" name="lievelingskleur" required aria-invalid="false" />\n  [... etc ...]\n</form>\n' }) }), "\n", (0, i.jsxs)(n.p, { children: ["Door te helpen fouten te voorkomen voldoe van aan WCAG ", (0, i.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#labels-of-instructies", children: "Succescriterium 3.3.2 Labels of instructies" }), " (niveau A)."] })] });
   }
   function W(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(X, { ...e }) }) : X(e);
   }
   const L = { title: "Voorkom fouten in een formulier | Richtlijnen", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Voorkom fouten", sidebar_position: 13, pagination_label: "Voorkom fouten in een formulier", description: "Richtlijnen het voorkomen van fouten door hulp aan de gebruiker in een formulier.", slug: "voorkom-fouten", keywords: ["informatie", "formulier", "design", "code"] },
    M = "Voorkom fouten, help de gebruiker",
    q = { id: "richtlijnen/formulieren/help-the-user", title: "Voorkom fouten in een formulier | Richtlijnen", description: "Richtlijnen het voorkomen van fouten door hulp aan de gebruiker in een formulier.", source: "@site/docs/richtlijnen/formulieren/help-the-user.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/voorkom-fouten", permalink: "/en/richtlijnen/formulieren/voorkom-fouten", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/help-the-user.mdx", tags: [], version: "current", sidebarPosition: 13, frontMatter: { title: "Voorkom fouten in een formulier | Richtlijnen", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Voorkom fouten", sidebar_position: 13, pagination_label: "Voorkom fouten in een formulier", description: "Richtlijnen het voorkomen van fouten door hulp aan de gebruiker in een formulier.", slug: "voorkom-fouten", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Visueel ontwerp van formulieren", permalink: "/en/richtlijnen/formulieren/visueel-ontwerp" }, next: { title: "Wanneer gebruik je welk formulierelement", permalink: "/en/richtlijnen/formulieren/wanneer-welk-form-element" } },
    G = {},
    P = [];
   function B(e) {
    const n = { a: "a", h1: "h1", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(n.h1, { id: "voorkom-fouten-help-de-gebruiker", children: "Voorkom fouten, help de gebruiker" }), "\n", (0, i.jsx)(n.p, { children: "Een formulier invullen moet zo gemakkelijk mogelijk zijn. Hoe help je je gebruiker het beste?" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#vermeld-duidelijk-of-een-veld-verplicht-is", children: "Vermeld duidelijk of een veld verplicht is" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#sta-knippen-en-plakken-van-een-wachtwoord-toe", children: "Sta knippen en plakken van gegevens (zoals een wachtwoord) toe" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#keur-niet-te-snel-af", children: "Keur niet te snel af" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#geef-geldige-waardes-aan-voor-een-invoerveld", children: "Geef geldige waardes aan voor een invoerveld" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#vul-bekende-informatie-in-waar-mogelijk", children: "Vul bekende informatie in waar mogelijk" }), "."] }), "\n", (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: "#maak-het-mogelijk-een-inzending-te-controleren-te-wijzigen-of-ongedaan-te-maken", children: "Maak het mogelijk een inzending te controleren, te wijzigen of ongedaan te maken" }), "."] }), "\n"] }), "\n", (0, i.jsx)(W, {}), "\n", (0, i.jsx)(A, {}), "\n", (0, i.jsx)(u, {}), "\n", (0, i.jsx)(d, {}), "\n", (0, i.jsx)(b, {}), "\n", (0, i.jsx)(f, {}), "\n", (0, i.jsx)(v, {}), "\n", (0, i.jsx)(z, {}), "\n", (0, i.jsx)(_, {}), "\n", (0, i.jsx)(D, {}), "\n", (0, i.jsx)(S, {}), "\n", (0, i.jsx)(g, {}), "\n", (0, i.jsx)(p, {}), "\n", (0, i.jsx)(C, {}), "\n", (0, i.jsx)(t.ZP, {})] });
   }
   function E(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(B, { ...e }) }) : B(e);
   }
  },
  73460: (e, n, r) => {
   r.d(n, { X: () => x });
   var i = r(16532),
    l = r(86259),
    t = r(28942),
    o = r(76653),
    s = r(33691),
    a = r(99821),
    d = r(64663),
    c = r(50959),
    u = r(9995);
   const h = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var p = r(41179),
    m = r(11527);
   const g = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(i.Tg, { className: h["nlds-canvas__example-surface"], children: (0, m.jsx)(i.BB, { className: (0, l.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: (0, m.jsx)(i.nv, { className: h["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   g.displayName = "ParagraphContainer";
   const j = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(i.Tg, { className: h["nlds-canvas__example-surface"], children: (0, m.jsx)(i.BB, { className: (0, l.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: n }) });
   };
   j.displayName = "DocumentContainer";
   const v = (e) => {
    let { children: n } = e;
    return (0, m.jsx)(i.Tg, { className: h["nlds-canvas__example-surface"], children: n });
   };
   v.displayName = "SurfaceContainer";
   const x = (e) => {
    let { code: n, copy: r = !1, defaultExpandedCode: x = !1, displayCode: f = !0, children: k, container: b = "document", language: w, designTokens: _ } = e,
     y = "function" == typeof k ? k() : k,
     z = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     N = "string" == typeof n ? n : u.uS(z || y),
     [S, F] = (0, c.useState)(N),
     [D, Z] = (0, c.useState)(x);
    (0, c.useEffect)(() => {
     (async () => {
      (S = await d.ZP.format(N, { parser: w, plugins: [t.Z, o.ZP, s.ZP, a.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), F(S);
     })();
    }, [N]);
    const C = (0, c.useId)();
    let V = c.Fragment;
    return (
     "paragraph" === b ? (V = g) : "document" === b ? (V = j) : "surface" === b && (V = v),
     (0, m.jsxs)("div", {
      className: (0, l.Z)(h["nlds-canvas"]),
      children: [
       y && (0, m.jsx)("div", { className: (0, l.Z)(h["nlds-canvas__example"]), children: (0, m.jsx)("div", { className: "voorbeeld-theme", style: _, children: (0, m.jsx)(V, { children: (0, m.jsx)(i.pu, { children: y }) }) }) }),
       f &&
        (0, m.jsx)("div", {
         className: (0, l.Z)(h["nlds-canvas__toolbar"]),
         children: (0, m.jsx)(i.zx, {
          className: (0, l.Z)(h["nlds-canvas__button"], h["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           Z(!D);
          },
          "aria-expanded": D,
          "aria-controls": C,
          children: D ? "Verberg code" : "Bekijk code",
         }),
        }),
       f &&
        (0, m.jsxs)("div", {
         className: (0, l.Z)(h["nlds-canvas__code-block"], !r && h["nlds-canvas__code-block--user-select-none"]),
         id: C,
         hidden: !D,
         children: [
          (0, m.jsx)(p.u, { syntax: w, textContent: S, trim: !0 }),
          r &&
           (0, m.jsx)("div", {
            className: (0, l.Z)(h["nlds-canvas__toolbar"]),
            children: (0, m.jsx)(i.zx, {
             className: (0, l.Z)(h["nlds-canvas__button"], h["nlds-canvas__copy-button"]),
             appearance: "subtle-button",
             onClick: () => {
              navigator.clipboard.writeText(S).catch((e) => console.error("Copy code failed", e));
             },
             children: "Kopieer",
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
   var i = r(16532),
    l = r(2425);
   r(50959);
   const t = {
    plain: { color: "var(--nlds-code-block-color)", backgroundColor: "var(--nlds-code-block-background-color)" },
    styles: [
     { types: ["comment"], style: { color: "var(--nlds-code-block-comment-color)", fontStyle: "italic" } },
     { types: ["prolog"], style: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "italic" } },
     { types: ["cdata"], style: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "italic" } },
     { types: ["punctuation"], style: { color: "var(--nlds-code-block-punctuation-color)" } },
     { types: ["deleted"], style: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "italic" } },
     { types: ["symbol"], style: { color: "var(--nlds-code-block-symbol-color)" } },
     { types: ["property"], style: { color: "var(--nlds-code-block-property-color)" } },
     { types: ["tag"], style: { color: "var(--nlds-code-block-tag-color)" } },
     { types: ["operator"], style: { color: "var(--nlds-code-block-operator-color)" } },
     { types: ["keyword"], style: { color: "var(--nlds-code-block-keyword-color)" } },
     { types: ["boolean"], style: { color: "var(--nlds-code-block-boolean-color)" } },
     { types: ["number"], style: { color: "var(--nlds-code-block-number-color)" } },
     { types: ["constant"], style: { color: "var(--nlds-code-block-constant-color)" } },
     { types: ["function"], style: { color: "var(--nlds-code-block-function-color)" } },
     { types: ["builtin"], style: { color: "var(--nlds-code-block-builtin-color)" } },
     { types: ["char"], style: { color: "var(--nlds-code-block-char-color)" } },
     { types: ["selector"], style: { color: "var(--nlds-code-block-selector-color)", fontStyle: "italic" } },
     { types: ["doctype"], style: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "italic" } },
     { types: ["attr-name"], style: { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "italic" } },
     { types: ["inserted"], style: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "italic" } },
     { types: ["string"], style: { color: "var(--nlds-code-block-string-color)" } },
     { types: ["url"], style: { color: "var(--nlds-code-block-url-color)" } },
     { types: ["entity"], style: { color: "var(--nlds-code-block-entity-color)" } },
     { types: ["class-name"], style: { color: "var(--nlds-code-block-class-name-color)" } },
     { types: ["atrule"], style: { color: "var(--nlds-code-block-atrule-color)" } },
     { types: ["attr-value"], style: { color: "var(--nlds-code-block-attr-value-color)" } },
     { types: ["regex"], style: { color: "var(--nlds-code-block-regex-color)" } },
     { types: ["important"], style: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" } },
     { types: ["variable"], style: { color: "var(--nlds-code-block-variable-color)" } },
     { types: ["bold"], style: { fontWeight: "bold" } },
     { types: ["italic"], style: { fontStyle: "italic" } },
    ],
   };
   var o = r(11527);
   function s(e) {
    let { lineNumber: n, syntax: r, textContent: s, trim: a } = e,
     d = s;
    return (
     a && (d = d.trim()),
     (0, o.jsx)(l.y$, {
      theme: t,
      code: d,
      language: r || "",
      children: (e) => {
       let { style: r, tokens: l, getLineProps: t, getTokenProps: s } = e;
       return (0, o.jsx)(i.dn, { style: r, children: l.map((e, r) => (0, o.jsxs)("span", { ...t({ line: e }), children: [n && (0, o.jsx)("span", { children: r + 1 }), e.map((e, n) => (0, o.jsx)("span", { ...s({ token: e }) }, n)), "\n"] }, r)) });
      },
     })
    );
   }
  },
  30036: (e, n, r) => {
   r.d(n, { X: () => d });
   var i = r(9842),
    l = r(91406),
    t = r(16532),
    o = r(86259);
   r(50959);
   const s = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var a = r(11527);
   const d = (e) => {
    let { title: n, appearance: r, description: d, children: c, figure: u } = e;
    const h = "Doen",
     p = "Niet doen",
     m = u ? "figure" : "div",
     g = u ? "figcaption" : "div";
    return (0, a.jsxs)(m, { className: (0, o.Z)(s["nlds-guideline"], s[`nlds-guideline--${r}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, a.jsxs)(g, { className: (0, o.Z)(s["nlds-guideline__description"]), children: ["dont" === r ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, o.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${r}`]), children: [(0, a.jsx)(i.Z, { className: s["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: s["nlds-guideline__title"], children: p })] }), (0, a.jsx)(t.nv, { children: n })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(t.nv, { className: (0, o.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${r}`]), children: [(0, a.jsx)(l.Z, { className: s["nlds-guideline__icon"] }), (0, a.jsx)("span", { className: s["nlds-guideline__title"], children: h })] }), (0, a.jsx)(t.nv, { children: n })] }), d] }), (0, a.jsx)("div", { className: (0, o.Z)(s["nlds-guideline__example"]), children: c })] });
   };
  },
  80877: (e, n, r) => {
   r.d(n, { Z: () => s, a: () => o });
   var i = r(50959);
   const l = {},
    t = i.createContext(l);
   function o(e) {
    const n = i.useContext(t);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : o(e.components)), i.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
