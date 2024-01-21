"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [32733],
 {
  32429: (e, n, l) => {
   l.r(n), l.d(n, { assets: () => q, contentTitle: () => Z, default: () => B, frontMatter: () => L, metadata: () => H, toc: () => M });
   var r = l(11527),
    o = l(47214),
    i = l(3324),
    t = l(53623),
    a = l(30036);
   function s(e) {
    const n = { input: "input", label: "label", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(a.X, { appearance: "do", title: "Sta kopi\xebren van een wachtwoord toe.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "pw1", children: "Uw nieuwe wachtwoord" }), (0, r.jsx)(n.input, { type: "password", id: "wachtwoord2", autocomplete: "new-password", name: "wachtwoord" })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
   function c(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "sta-knippen-en-plakken-van-een-wachtwoord-toe", children: "Sta knippen en plakken van een wachtwoord toe" }), "\n", (0, r.jsx)(n.p, { children: "Een wachtwoord moet veilig zijn. Als je het knippen en plakken van een wachtwoord verhindert, dwing je gebruikers tot een simpel en goed te onthouden wachtwoord. Dat is nu juist niet de bedoeling." }), "\n", (0, r.jsx)(n.p, { children: "Kopi\xebren/plakken vanuit een wachtwoordmanager is een veel veiligere manier om een gebruiker een wachtwoord te laten invullen." }), "\n", (0, r.jsxs)(n.p, { children: ["Zoals het Britse National Cyber Security Centre uitlegt in ", (0, r.jsx)(n.a, { href: "https://www.ncsc.gov.uk/blog-post/let-them-paste-passwords", children: "Let them paste passwords" }), "."] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function h(e) {
    const n = { input: "input", label: "label", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(a.X, { appearance: "do", title: "Voeg autocomplete waarden toe aan adresgegevens.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "adres1", children: "Straat en huisnummer" }), (0, r.jsx)(n.input, { type: "text", id: "adres1", autocomplete: "street-address", name: "adres" }), (0, r.jsx)(n.label, { for: "postcode1", children: "Postcode" }), (0, r.jsx)(n.input, { type: "text", id: "postcode1", autocomplete: "postal-code", name: "postcode" }), (0, r.jsx)(n.label, { for: "woonplaats1", children: "Woonplaats" }), (0, r.jsx)(n.input, { type: "text", id: "woonplaats1", autocomplete: "address-level2", name: "woonplaats" })] }) }) }), "\n", (0, r.jsx)(a.X, { appearance: "dont", title: "Laat autocomplete waarden weg bij adresgegevens.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "adres2", children: "Straat en huisnummer" }), (0, r.jsx)(n.input, { type: "text", id: "adres2", name: "adres" }), (0, r.jsx)(n.label, { for: "postcode2", children: "Postcode" }), (0, r.jsx)(n.input, { type: "text", id: "postcode2", name: "postcode" }), (0, r.jsx)(n.label, { for: "woonplaats2", children: "Woonplaats" }), (0, r.jsx)(n.input, { type: "text", id: "woonplaats2", name: "woonplaats" })] }) }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "vul-bekende-informatie-in-waar-mogelijk", children: "Vul bekende informatie in waar mogelijk" }), "\n", (0, r.jsxs)(n.p, { children: ["Als de gebruiker is ingelogd, gebruik dan bekende informatie om velden vast in te vullen. In DigiD-sessies is bijvoorbeeld al veel informatie beschikbaar, die zou kunnen worden gebruikt om velden vooraf in te vullen.\nHet ", (0, r.jsx)(n.a, { href: "https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).", children: "gebruik van DigiD" }), " is wel aan wettelijke voorwaarden verbonden."] }), "\n", (0, r.jsx)(n.h3, { id: "autocomplete", children: "Autocomplete" }), "\n", (0, r.jsxs)(n.p, { children: ["Het HTML-attribuut ", (0, r.jsx)(n.code, { children: "autocomplete" }), " maakt het voor de gebruiker makkelijker om al eerder ingevulde informatie automatisch toe te voegen. De volledige lijst waarden staat op de MDN-website: ", (0, r.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete", children: "HTML-attribuut: autocomplete" }), "."] }), "\n", (0, r.jsxs)(n.p, { children: ["Sommige waarden zijn onduidelijk of ontbreken voor Nederlandse toepassingen. Jules Ernst van 200 OK heeft een overzicht gemaakt van de beste manier om ", (0, r.jsx)(n.a, { href: "https://www.200ok.nl/tips/autocomplete/#dutch", children: "autocomplete in Nederlandse formulieren" }), " toe te passen."] }), "\n", (0, r.jsxs)(n.p, { children: ["Door het toevoegen van autocomplete aan de formuliervelden voldoe je aan het WCAG Succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#identificeer-het-doel-van-de-input", children: "1.3.5 Identificeer het doel van de input" }), " (niveau AA)."] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   function j(e) {
    return (0, r.jsx)(r.Fragment, {});
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j();
   }
   function v(e) {
    const n = { a: "a", h3: "h3", img: "img", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h3, { id: "geldige-e-mailadressen", children: "Geldige e-mailadressen" }), "\n", (0, r.jsx)(n.p, { children: "Sommige mensen gebruiken een + in hun e-mailadres, bijvoorbeeld om e-mails makkelijker te kunnen groeperen." }), "\n", (0, r.jsxs)(n.p, { children: ["Zo kiezen ze voor ", (0, r.jsx)(n.a, { href: "mailto:naam+school@voorbeeld.nl", children: "naam+school@voorbeeld.nl" }), " voor e-mails van school en ", (0, r.jsx)(n.a, { href: "mailto:naam+werk@voorbeeld.nl", children: "naam+werk@voorbeeld.nl" }), " voor e-mails over werk. Dit zijn geldige e-mailadressen, keur ze dus niet af."] }), "\n", (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_email.png", alt: "email met een plus teken is goedgekeurd" }) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
   function x(e) {
    const n = { h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "keur-niet-te-snel-af", children: "Keur niet te snel af" }), "\n", (0, r.jsx)(n.p, { children: "In de formuliervalidatie kan er al veel afgevangen worden.\nDenk met de gebruiker mee." })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
   function w(e) {
    return (0, r.jsx)(r.Fragment, {});
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(w, { ...e }) }) : w();
   }
   function y(e) {
    const n = { h3: "h3", img: "img", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h3, { id: "eenduidig-te-herschrijven", children: "Eenduidig te herschrijven" }), "\n", (0, r.jsx)(n.p, { children: "Postcodes kunnen op verschillende manieren worden geschreven: bijvoorbeeld \u201c1234 AA\u201d (met spatie), \u201c1234AA\u201d (zonder spatie), \u201c1234aa\u201d (met kleine letters). Ook extra spaties aan het begin of eind kunnen meekomen bij het knippen/plakken van tekst." }), "\n", (0, r.jsx)(n.p, { children: "In code kunnen deze vormen gemakkelijk naar elkaar worden herschreven. Door alle vormen te accepteren en door de software te laten corrigeren, geef je prioriteit aan de gebruiker, in plaats van aan je systeem." }), "\n", (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_herschrijven.png", alt: "De 3 verschillende wijzen van postcode invoeren die allemaal goed zijn" }) })] });
   }
   function S(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y(e);
   }
   function z(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(a.X, { appearance: "do", title: "Leg uit hoe een veld in te vullen.", description: "Bijvoorbeeld in de description.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "ww", children: "Nieuw wachtwoord" }), (0, r.jsx)(n.p, { id: "ww_description", children: "Minimaal 8 karakters, waarvan 2 cijfers en 1 hoofdletter." }), (0, r.jsx)(n.input, { type: "password", id: "ww", name: "wachtwoord", "aria-describedby": "ww_description" })] }) }) }), "\n", (0, r.jsx)(a.X, { appearance: "dont", title: "Wijze van invullen weglaten.", description: "Laat de gebruiker niet raden of pas bij de foutmeldingen ontdekken wat er mis is.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "ww2", children: "Nieuw wachtwoord" }), (0, r.jsx)(n.input, { type: "password", id: "ww2", name: "wachtwoord" })] }) }) }), "\n", (0, r.jsx)(a.X, { appearance: "dont", title: "Wijze van invullen alleen in de placeholder zetten.", description: "Zeker als de wijze van invullen precies goed moet zijn.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "geboortedatum2", children: "Geboortedatum" }), (0, r.jsx)(n.input, { type: "text", id: "geboortedatum2", name: "geboortedatum", placeholder: "dd/mm/jjjj" })] }) }) })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(z, { ...e }) }) : z(e);
   }
   function A(e) {
    const n = { h2: "h2", img: "img", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "geef-geldige-waardes-aan-voor-een-invoerveld", children: "Geef geldige waardes aan voor een invoerveld" }), "\n", (0, r.jsx)(n.p, { children: "Geef geldige waardes aan voor een invoerveld (bijvoorbeeld de datum- of wachtwoordeisen) en niet alleen in de placeholder." }), "\n", (0, r.jsx)(n.p, { children: "Bedenk ook of het echt belangrijk is of, bijvoorbeeld een geboortedatum of telefoonnummer aan exacte invoereisen moet voldoen." }), "\n", (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_wachtwoord-alt.png", alt: "Wachtwoord-eisen zijn in de description getoond" }) }), "\n", (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_voorkom-fouten_geboortedatum.png", alt: "Voorbeeld van de waarden voor de geboortedatum worden in de description getoond" }) })] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(A, { ...e }) }) : A(e);
   }
   function F(e) {
    const n = { button: "button", form: "form", input: "input", label: "label", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(a.X, { appearance: "do", title: "Voeg novalidate toe als je required gebruikt.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(n.form, { novalidate: "novalidate", children: [(0, r.jsx)(n.label, { for: "kleur1", children: "Wat is je lievelingskleur (verplicht)" }), (0, r.jsx)(n.input, { type: "text", id: "kleur1", name: "lievelingskleur", required: !0, "aria-invalid": "false" }), (0, r.jsx)(n.button, { children: "Mijn lievelingskleur" })] }) }) }), "\n", (0, r.jsx)(a.X, { appearance: "do", title: "Vertel duidelijk wat het verplichte veld is.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(n.form, { children: [(0, r.jsx)(n.label, { for: "email1", children: "Uw e-mailadres (verplicht)" }), (0, r.jsx)(n.input, { type: "text", id: "email1", name: "email", "aria-required": "true", "aria-invalid": "false" }), (0, r.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] }) }) }), "\n", (0, r.jsx)(a.X, { appearance: "do", title: "Leg het sterretje uit boven het formulier", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "* betekent verplicht in te vullen." }), (0, r.jsxs)(n.form, { children: [(0, r.jsx)(n.label, { for: "email2", children: "Uw e-mailadres *" }), (0, r.jsx)(n.input, { type: "text", id: "email2", name: "email", "aria-required": "true", "aria-invalid": "false" }), (0, r.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] })] }) }) }), "\n", (0, r.jsx)(a.X, { appearance: "dont", title: "Vertrouw op HTML5-formuliervalidatie.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(n.form, { children: [(0, r.jsx)(n.label, { for: "email3", children: "Uw e-mailadres *" }), (0, r.jsx)(n.input, { type: "text", id: "email3", name: "email", required: "required" }), (0, r.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] }) }) }), "\n", (0, r.jsx)(a.X, { appearance: "dont", title: "Leg het sterretje niet uit.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(n.form, { children: [(0, r.jsx)(n.label, { for: "email4", children: "Uw e-mailadres *" }), (0, r.jsx)(n.input, { type: "text", id: "email4", name: "email", "aria-required": "true", "aria-invalid": "false" }), (0, r.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] }) }) }), "\n", (0, r.jsx)(a.X, { appearance: "dont", title: "Geef geen feedback aan screenreadergebruikers.", children: (0, r.jsx)(t.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: "* betekent verplicht in te vullen." }), (0, r.jsxs)(n.form, { children: [(0, r.jsx)(n.label, { for: "email3", children: "Uw e-mailadres *" }), (0, r.jsx)(n.input, { type: "text", id: "email3", name: "email" }), (0, r.jsx)(n.button, { children: "Stuur mij de nieuwsbrief" })] })] }) }) })] });
   }
   function X(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(F, { ...e }) }) : F(e);
   }
   function V(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", li: "li", p: "p", pre: "pre", strong: "strong", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "vermeld-duidelijk-of-een-veld-verplicht-is", children: "Vermeld duidelijk of een veld verplicht is" }), "\n", (0, r.jsx)(n.p, { children: "Laat bezoekers niet raden, maar wees duidelijk welke velden verplicht zijn. Dit kan op een aantal manieren:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: 'Door boven het formulier te vermelden dat alle velden verplicht zijn, mits anders vermeld. Dan kan in het label de tekst "(optioneel)" worden gezet.' }), "\n", (0, r.jsx)(n.li, { children: "Door bij de verplichte velden in het label de tekst (verplicht) op te nemen." }), "\n", (0, r.jsx)(n.li, { children: "Met een asterisk bij het label. Leg dan wel boven het formulier uit wat het sterretje betekent. Een sterretje alleen bij het formulierveld is niet voldoende." }), "\n"] }), "\n", (0, r.jsx)(n.p, { children: "Zet eventuele extra uitleg altijd boven het formulier en niet in het formulier. Screenreadergebruiker kunnen extra tekst missen binnen een formulier, als die niet gekoppeld zijn aan een formulierveld." }), "\n", (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: "language-html", children: '<p>* betekent verplicht in te vullen.</p>\n<form>\n  <label for="kleur1">Wat is je lievelingskleur *</label>\n  <input type="text" id="kleur1" name="lievelingskleur" aria-required="true" aria-invalid="false" />\n  [... etc ...]\n</form>\n' }) }), "\n", (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: "language-html", children: '<p>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</p>\n<form>\n  <label for="kleur2">Wat is je lievelingskleur</label>\n  <input type="text" id="kleur2" name="lievelingskleur" aria-required="true" aria-invalid="false" />\n  <label for="kleur1">Wat is je lievelingsdier (optioneel)</label>\n  <input type="text" id="dier2" name="lievelingsdier" />\n  [... etc ...]\n</form>\n' }) }), "\n", (0, r.jsx)(n.h3, { id: "screenreaderfeedback", children: "Screenreaderfeedback" }), "\n", (0, r.jsxs)(n.p, { children: ["Vertel altijd aan een gebruiker van hulptechnologie\xebn (als screenreaders) dat een veld verplicht is met het ARIA-attribuut ", (0, r.jsx)(n.code, { children: 'aria-required="true"' }), "."] }), "\n", (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: "language-html", children: '<form>\n  <label for="kleur3">Wat is je lievelingskleur (verplicht)</label>\n  <input type="text" id="kleur3" name="lievelingskleur" aria-required="true" aria-invalid="false" />\n  [... etc ...]\n</form>\n' }) }), "\n", (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: (0, r.jsx)(n.code, { children: "Let op" }) }), ": Gebruik liever geen ", (0, r.jsx)(n.code, { children: "required" }), " in een invoerveld, dit vereist ook het attribuut ", (0, r.jsx)(n.a, { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate", children: "novalidate" }), " als attribute op in het ", (0, r.jsx)(n.code, { children: "<form>" }), " element.\nDit voorkomt dat de formuliervalidatie van de browser in werking treedt. Voor ", (0, r.jsx)(n.code, { children: 'aria-required="true"' }), " hoeft dit niet. Alhoewel het gebruik van ", (0, r.jsx)(n.code, { children: "required" }), " in plaats van ", (0, r.jsx)(n.code, { children: "aria-required" }), " niet fout is, geven we hierom de voorkeur aan ", (0, r.jsx)(n.code, { children: "aria-required" }), "."] }), "\n", (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: "language-html", children: '<form novalidate>\n  <label for="kleur4">Wat is je lievelingskleur (verplicht)</label>\n  <input type="text" id="kleur4" name="lievelingskleur" required aria-invalid="false" />\n  [... etc ...]\n</form>\n' }) }), "\n", (0, r.jsxs)(n.p, { children: ["Door te helpen fouten te voorkomen voldoe van aan WCAG ", (0, r.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#labels-of-instructies", children: "Succescriterium 3.3.2 Labels of instructies" }), " (niveau A)."] })] });
   }
   function W(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(V, { ...e }) }) : V(e);
   }
   const L = { title: "Voorkom fouten in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Voorkom fouten", pagination_label: "Voorkom fouten in een formulier", description: "Richtlijnen het voorkomen van fouten door hulp aan de gebruiker in een formulier.", slug: "help-de-gebruiker", keywords: ["informatie", "formulier", "design", "code"] },
    Z = "Voorkom fouten, help de gebruiker",
    H = { id: "richtlijnen/formulieren/alle-richtlijnen/help-the-user", title: "Voorkom fouten in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen het voorkomen van fouten door hulp aan de gebruiker in een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/07-help-the-user.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/07-help-the-user.mdx", tags: [], version: "current", sidebarPosition: 7, frontMatter: { title: "Voorkom fouten in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Voorkom fouten", pagination_label: "Voorkom fouten in een formulier", description: "Richtlijnen het voorkomen van fouten door hulp aan de gebruiker in een formulier.", slug: "help-de-gebruiker", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Uit te vragen informatie in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/vragen" }, next: { title: "Toegankelijk", permalink: "/en/richtlijnen/formulieren/toegankelijk" } },
    q = {},
    M = [];
   function C(e) {
    const n = { h1: "h1", li: "li", p: "p", ul: "ul", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(n.h1, { id: "voorkom-fouten-help-de-gebruiker", children: "Voorkom fouten, help de gebruiker" }), "\n", (0, r.jsx)(n.p, { children: "Een formulier invullen moet zo gemakkelijk mogelijk zijn. Hoe help je je gebruiker het beste?" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "Vermeld het duidelijk of een veld verplicht is." }), "\n", (0, r.jsx)(n.li, { children: "Sta knippen en plakken van gegevens (zoals een wachtwoord) toe." }), "\n", (0, r.jsx)(n.li, { children: "Keur niet te snel af." }), "\n", (0, r.jsx)(n.li, { children: "Geef geldige waardes aan voor een invoerveld." }), "\n", (0, r.jsx)(n.li, { children: "Vul bekende informatie in waar mogelijk." }), "\n"] }), "\n", (0, r.jsx)(W, {}), "\n", (0, r.jsx)(X, {}), "\n", (0, r.jsx)(u, {}), "\n", (0, r.jsx)(d, {}), "\n", (0, r.jsx)(f, {}), "\n", (0, r.jsx)(k, {}), "\n", (0, r.jsx)(b, {}), "\n", (0, r.jsx)(S, {}), "\n", (0, r.jsx)(_, {}), "\n", (0, r.jsx)(D, {}), "\n", (0, r.jsx)(N, {}), "\n", (0, r.jsx)(g, {}), "\n", (0, r.jsx)(m, {}), "\n", (0, r.jsx)(i.ZP, {})] });
   }
   function B(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(C, { ...e }) }) : C(e);
   }
  },
  3324: (e, n, l) => {
   l.d(n, { ZP: () => t });
   var r = l(11527),
    o = l(47214);
   function i(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, o.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, r.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  53623: (e, n, l) => {
   l.d(n, { X: () => v });
   var r = l(16532),
    o = l(86259),
    i = l(85630),
    t = l.n(i),
    a = l(63273),
    s = l.n(a),
    d = l(77192),
    c = l.n(d),
    u = (l(50959), l(9995)),
    h = l(4014),
    m = l(62950);
   const p = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" },
    g = { 'code[class*="language-"]': { color: "var(--nlds-cod-block-code-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)" }, 'pre[class*="language-"]': { color: "var(--nlds-code-block-color)", fontFamily: "var(--nlds-code-block-font-family, monospace)", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", wordWrap: "normal", lineHeight: "var(--nlds-code-block-line-height, 1.5)", fontSize: "var(--nlds-code-block-font-size, 1em)", MozTabSize: "var(--nlds-code-block-tab-size, 4)", OTabSize: "var(--nlds-code-block-tab-size, 4)", tabSize: "var(--nlds-code-block-tab-size, 4)", WebkitHyphens: "var(--nlds-code-block-hyphens, none)", MozHyphens: "var(--nlds-code-block-hyphens, none)", msHyphens: "var(--nlds-code-block-hyphens, none)", hyphens: "var(--nlds-code-block-hyphens, none)", paddingInlineStart: "var(--nlds-code-block-padding-inline-start, 1em)", paddingInlineEnd: "var(--nlds-code-block-padding-inline-end, 1em)", paddingBlockStart: "var(--nlds-code-block-padding-block-start, 1em)", paddingBlockEnd: "var(--nlds-code-block-padding-block-end, 1em)", marginInlineStart: "var(--nlds-code-block-margin-inline-start, 0)", marginInlineEnd: "var(--nlds-code-block-margin-inline-end, 0)", marginBlockStart: "var(--nlds-code-block-margin-inline-start, 0.5em)", marginBlockEnd: "var(--nlds-code-block-margin-inline-end, 0.5em)", overflow: "auto", backgroundColor: "var(--nlds-code-block-background-color)" }, 'pre[class*="language-"]::-moz-selection': { textShadow: "none", backgroundColor: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::-moz-selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'pre[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"]::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, 'code[class*="language-"] ::selection': { textShadow: "none", background: "var(--nlds-code-block-selected-background-color)" }, comment: { color: "var(--nlds-code-block-comment-color)", fontStyle: "var(--nlds-code-block-comment-font-style)" }, prolog: { color: "var(--nlds-code-block-prolog-color)", fontStyle: "var(--nlds-code-block-prolog-font-style)" }, cdata: { color: "var(--nlds-code-block-cdata-color)", fontStyle: "var(--nlds-code-block-cdata-font-style)" }, punctuation: { color: "var(--nlds-code-block-punctuation-color)" }, ".namespace": { color: "var(--nlds-code-block-namespace-color)" }, deleted: { color: "var(--nlds-code-block-deleted-color)", fontStyle: "var(--nlds-code-block-deleted-font-style)" }, symbol: { color: "var(--nlds-code-block-symbol-color)" }, property: { color: "var(--nlds-code-block-property-color)" }, tag: { color: "var(--nlds-code-block-tag-color)" }, operator: { color: "var(--nlds-code-block-operator-color)" }, keyword: { color: "var(--nlds-code-block-keyword-color)" }, boolean: { color: "var(--nlds-code-block-boolean-color)" }, number: { color: "var(--nlds-code-block-number-color)" }, constant: { color: "var(--nlds-code-block-constant-color)" }, function: { color: "var(--nlds-code-block-function-color)" }, builtin: { color: "var(--nlds-code-block-builtin-color)" }, char: { color: "var(--nlds-code-block-char-color)" }, selector: { color: "var(--nlds-code-block-selector-color)", fontStyle: "var(--nlds-code-block-selector-font-style)" }, doctype: { color: "var(--nlds-code-block-doctype-color)", fontStyle: "var(--nlds-code-block-doctype-font-style)" }, "attr-name": { color: "var(--nlds-code-block-attr-name-color)", fontStyle: "var(--nlds-code-block-attr-name-font-style)" }, inserted: { color: "var(--nlds-code-block-inserted-color)", fontStyle: "var(--nlds-code-block-inserted-font-style)" }, string: { color: "var(--nlds-code-block-string-color)" }, url: { color: "var(--nlds-code-block-url-color)" }, entity: { color: "var(--nlds-code-block-entity-color)" }, ".language-css .token.string": { color: "var(--nlds-code-block-css-token-color)" }, ".style .token.string": { color: "var(--nlds-code-block-style-token-color)" }, "class-name": { color: "var(--nlds-code-block-class-name-color)" }, atrule: { color: "var(--nlds-code-block-atrule-color)" }, "attr-value": { color: "var(--nlds-code-block-attr-value-color)" }, regex: { color: "var(--nlds-code-block-regex-color)" }, important: { color: "var(--nlds-code-block-important-color)", fontWeight: "bold" }, variable: { color: "var(--nlds-code-block-variable-color)" }, bold: { fontWeight: "bold" }, italic: { fontStyle: "italic" } };
   var j = l(11527);
   const b = (e) => {
     let { target: n } = e;
     const l = n.getAttribute("aria-controls"),
      r = n.ownerDocument.getElementById(l);
     (r.hidden = !r.hidden), n.setAttribute("aria-expanded", !r.hidden), (n.innerText = r.hidden ? "Bekijk code" : "Verberg code");
    },
    v = (e) => {
     let n,
      { code: l, copy: i = !1, defaultCollapsed: a = !0, children: d, language: v } = e;
     n = "function" == typeof d ? d() : d;
     const k = c().format(u.uS(l || n), { parser: "html", plugins: [t(), s()], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" }),
      x = (0, m.Z)();
     return (0, j.jsxs)("div", {
      className: (0, o.Z)(p["nlds-canvas"]),
      children: [
       (0, j.jsx)("div", { className: (0, o.Z)(p["nlds-canvas__example"]), children: (0, j.jsx)(r.pu, { className: "voorbeeld-theme", children: n }) }),
       (0, j.jsx)("div", { className: (0, o.Z)(p["nlds-canvas__toolbar"]), children: (0, j.jsx)(r.zx, { className: (0, o.Z)(p["nlds-canvas__button"], p["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: b, "aria-expanded": !a, "aria-controls": x, children: a ? "Bekijk code" : "Verberg code" }) }),
       (0, j.jsxs)("div", {
        className: (0, o.Z)(p["nlds-canvas__code-block"], !i && p["nlds-canvas__code-block--user-select-none"]),
        id: x,
        hidden: a,
        children: [
         (0, j.jsx)(h.Z, { language: v, style: g, children: k }),
         i &&
          (0, j.jsx)("div", {
           className: (0, o.Z)(p["nlds-canvas__toolbar"]),
           children: (0, j.jsx)(r.zx, {
            className: (0, o.Z)(p["nlds-canvas__button"], p["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(k).catch((e) => console.error("Copy code failed", e));
            },
            children: "Kopieer",
           }),
          }),
        ],
       }),
      ],
     });
    };
  },
  30036: (e, n, l) => {
   l.d(n, { X: () => d });
   var r = l(35893),
    o = l(71139),
    i = l(16532),
    t = l(86259);
   l(50959);
   const a = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var s = l(11527);
   const d = (e) => {
    let { title: n, appearance: l, description: d, children: c } = e;
    const u = "Doen",
     h = "Niet doen";
    return (0, s.jsxs)("div", { className: (0, t.Z)(a["nlds-guideline"], a[`nlds-guideline--${l}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, s.jsxs)("div", { className: (0, t.Z)(a["nlds-guideline__description"]), children: ["dont" === l ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(i.nv, { className: (0, t.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${l}`]), children: [(0, s.jsx)(r.Z, { className: a["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: a["nlds-guideline__title"], children: h })] }), (0, s.jsx)(i.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(i.nv, { className: (0, t.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${l}`]), children: [(0, s.jsx)(o.Z, { className: a["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: a["nlds-guideline__title"], children: u })] }), (0, s.jsx)(i.nv, { children: n })] }), d] }), (0, s.jsx)("div", { className: (0, t.Z)(a["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
