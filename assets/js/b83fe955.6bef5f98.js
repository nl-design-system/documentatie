"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8883],
 {
  56108: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(11527),
    r = i(27034);
   function l(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, t.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  57997: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => G, contentTitle: () => Z, default: () => I, frontMatter: () => D, metadata: () => S, toc: () => V });
   var t = i(11527),
    r = i(27034),
    l = i(73460),
    o = i(30036);
   function s(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(o.X, { appearance: "do", title: "Leg uit waarom een datum wordt afgekeurd.", children: (0, t.jsx)(l.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "passport-validity", children: "Geldig tot" }), (0, t.jsx)(n.p, { id: "description-passport-validity", children: "Invoerfout: De geldigheidsdatum van uw paspoort moet in de toekomst liggen." }), (0, t.jsx)(n.input, { id: "passport-validity", type: "text", name: "passport-validity", "aria-describedby": "description-passport-validity" })] }) }) }), "\n", (0, t.jsx)(o.X, { appearance: "do", title: "Geef een voorbeeld van wat er verwacht wordt.", children: (0, t.jsx)(l.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "email", children: "E-mail" }), (0, t.jsx)(n.p, { id: "description-email", children: "Invoerfout: Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl." }), (0, t.jsx)(n.input, { id: "email", type: "email", name: "email", "aria-describedby": "description-email" })] }) }) }), "\n", (0, t.jsx)(o.X, { appearance: "dont", title: "Alleen beschrijven dat het veld verplicht is, zonder toelichting dat er informatie mist of aan welke voorwaarde niet is voldaan.", children: (0, t.jsx)(l.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "passport-validity-2", children: "Geldig tot" }), (0, t.jsx)(n.p, { id: "description-passport-validity-2", children: "Invoerfout: Dit veld is verplicht." }), (0, t.jsx)(n.input, { id: "passport-validity-2", "aria-invalid": "false", type: "text", name: "passport-validity-2", "aria-describedby": "description-passport-validity-2" })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
   function a(e) {
    const n = { a: "a", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "schrijf-een-duidelijke-foutmelding", children: "Schrijf een duidelijke foutmelding" }), "\n", (0, t.jsx)(n.p, { children: '"Dit veld is verplicht" geeft onvoldoende informatie. Een op maat geschreven foutmelding geeft de gebruiker veel meer houvast.' }), "\n", (0, t.jsx)(n.p, { children: "Geef de gebruiker ook nooit de schuld. De meeste mensen worstelen met alle informatie en functionaliteit op het web. Help gebruikers zo goed mogelijk om het formulier te versturen." }), "\n", (0, t.jsx)(n.p, { children: 'Maak foutmeldingen daarom zo veel mogelijk beschrijvend en op maat. Schrijf in plaats van "Ongeldige invoer" of "Dit veld is verplicht" bijvoorbeeld:' }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Vul een geldig e-mailadres in, bijvoorbeeld ", (0, t.jsx)(n.a, { href: "mailto:naam@voorbeeld.nl", children: "naam@voorbeeld.nl" }), "."] }), "\n", (0, t.jsx)(n.li, { children: "De geldigheidsdatum van uw paspoort moet in de toekomst zijn." }), "\n", (0, t.jsx)(n.li, { children: "Vul het huisnummer in zodat wij je bestelling kunnen opsturen." }), "\n"] }), "\n", (0, t.jsx)(n.p, { children: "Gebruik een punt aan het eind van de foutmelding (of andere melding). Dan stopt de screenreader even en is het duidelijker dat de foutmelding apart een zin is." }), "\n", (0, t.jsxs)(n.p, { children: ["Het design system van GOV.UK geeft duidelijke (Engelstalige) informatie over de tekst van foutmeldingen ", (0, t.jsx)(n.a, { href: "https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise", children: (0, t.jsx)("span", { lang: "en", children: "Be clear and concise" }) }), "."] }), "\n", (0, t.jsx)(n.p, { children: "Het schrijven van foutmeldingen en een duidelijke toelichting op wat er mis gaat, is nodig om te voldoen de volgende WCAG-succescriteria:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "/wcag/3.3.1/", children: "3.3.1 Foutidentificatie" }), " (niveau A)."] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html", children: "3.3.3 Foutsuggestie" }), " (niveau AA)."] }), "\n"] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
   function u(e) {
    const n = { a: "a", h2: "h2", p: "p", strong: "strong", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "schrijf-een-foutmelding-uit-in-tekst", children: "Schrijf een foutmelding uit in tekst" }), "\n", (0, t.jsx)(n.p, { children: "Schrijf de foutmelding altijd uit in tekst. Dus niet alleen met een rood randje om het veld heen of met een icoontje van een uitroepteken, maar in duidelijke taal." }), "\n", (0, t.jsxs)(n.p, { children: ["Je kunt zeker kleur en icoontjes gebruiken, maar niet als ", (0, t.jsx)(n.strong, { children: "enige" }), " foutindicatie."] }), "\n", (0, t.jsxs)(n.p, { children: ["Formulierfouten in tekst beschrijven is nodig om te voldoen aan het WCAG-succescriterium ", (0, t.jsx)(n.a, { href: "/wcag/3.3.1/", children: "3.3.1 Foutidentificatie" }), " (niveau A)."] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function m(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(o.X, { appearance: "do", title: "Naast een visuele indicatie ook een foutmelding in tekst tonen.", description: "In dit voorbeeld staat er een rood randje om het invoerveld heen, plus de foutmelding in tekst.", children: (0, t.jsx)(l.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "passport-validity-1", children: "Geldig tot" }), (0, t.jsx)(n.p, { id: "passport-validity-date-1", children: "Invoerfout: Vul een geldige datum in (bijvoorbeeld 6 januari 2030)." }), (0, t.jsx)(n.input, { id: "passport-validity-1", "aria-invalid": "true", type: "text", name: "passport-validity-1", "aria-describedby": "description-passport-validity-1" })] }) }) }), "\n", (0, t.jsx)(o.X, { appearance: "dont", title: "Alleen een visuele indicatie geven dat er iets fout is gegaan.", description: "In dit voorbeeld staat er alleen een rood randje om het invoerveld heen.", children: (0, t.jsx)(l.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "passport-validity-2", children: "Geldig tot" }), (0, t.jsx)(n.input, { id: "passport-validity-2", "aria-invalid": "true", type: "text", name: "passport-validity-2" })] }) }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
   function g(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", li: "li", p: "p", pre: "pre", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "feedback-voor-screenreadergebruikers", children: "Feedback voor screenreadergebruikers" }), "\n", (0, t.jsxs)(n.p, { children: ["We geven je 3 extra manieren om feedback te geven over foutmeldingen voor screenreadergebruikers. Met ", (0, t.jsx)(n.code, { children: "aria-required" }), ", ", (0, t.jsx)(n.code, { children: "aria-invalid" }), " in het formulierveld en het ", (0, t.jsx)(n.code, { children: "<title>" }), " element in de ", (0, t.jsx)(n.code, { children: "<head>" }), " van de webpagina."] }), "\n", (0, t.jsxs)(n.p, { children: ["Het geven van feedback aan screenreadergebuikers foutmeldingen is nodig om te voldoen aan het WCAG-succescriterium ", (0, t.jsx)(n.a, { href: "/wcag/3.3.1/", children: "3.3.1 Foutidentificatie" }), " (niveau A)."] }), "\n", (0, t.jsx)(n.h3, { id: "gebruik-aria-voor-feedback", children: "Gebruik ARIA voor feedback" }), "\n", (0, t.jsx)(n.p, { children: "Gebruik ARIA om aanvullende informatie en feedback te geven aan screenreadergebruikers. Informatie die nodig is om het formulier goed te gebruiken en te begrijpen." }), "\n", (0, t.jsx)(n.p, { children: "Twee ARIA-attributen zijn belangrijk voor screenreaderfeedback:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'aria-required="true"' }), " vertelt dat een veld verplicht is."] }), "\n", (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: 'aria-invalid="true"' }), " vertelt dat een veld niet goed is ingevuld."] }), "\n"] }), "\n", (0, t.jsxs)(n.p, { children: ["Initieel staat de waarde van ", (0, t.jsx)(n.code, { children: "aria-invalid" }), " op ", (0, t.jsx)(n.code, { children: "false" }), ". Verander bij foutmeldingen de waarde van ", (0, t.jsx)(n.code, { children: "false" }), " naar ", (0, t.jsx)(n.code, { children: "true" }), ". Eventueel kan het attribuut ", (0, t.jsx)(n.code, { children: "aria-invalid" }), " kan ook worden weggelaten totdat de validatie is uitgevoerd."] }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-html", children: '<label for="voorbeeld">Voorbeeld</label>\n<input aria-required="true" aria-invalid="false" id="voorbeeld" name="voorbeeld" type="text" />\n' }) }), "\n", (0, t.jsx)(n.p, { children: 'VoiceOver leest voor: "Voorbeeld, vereist, bewerkt tekst".' }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-html", children: '<label for="voorbeeld">Voorbeeld</label>\n<input aria-required="true" aria-invalid="true" id="voorbeeld" name="voorbeeld" type="text" />\n' }) }), "\n", (0, t.jsx)(n.p, { children: 'VoiceOver leest voor: "Voorbeeld, vereist, ongeldige gegevens, bewerk tekst".' }), "\n", (0, t.jsx)(n.h3, { id: "screenreaderfeedback-en-focusmanagement-na-submit", children: "Screenreaderfeedback en focusmanagement na submit" }), "\n", (0, t.jsx)(n.p, { children: "Voor toetsenbord- en screenreadergebruikers is het van belang dat na een submit, de visuele- en toetsenbordfocus op een logische plek komt." }), "\n", (0, t.jsxs)(n.h3, { id: "update-het-title-element-in-de-head", children: ["Update het ", (0, t.jsx)(n.code, { children: "<title>" }), " element in de ", (0, t.jsx)(n.code, { children: "<head>" })] }), "\n", (0, t.jsxs)(n.p, { children: ["De inhoud van het ", (0, t.jsx)(n.code, { children: "<title>" }), " element is het eerste wat een screenreader voorleest bij het inladen van een webpagina."] }), "\n", (0, t.jsx)(n.p, { children: "Je kunt hier dus waardevolle informatie kwijt zoals:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "een formulier heeft 2 foutmeldingen;" }), "\n", (0, t.jsx)(n.li, { children: "bij welke stap je bent in een formulier met meerdere stappen;" }), "\n", (0, t.jsx)(n.li, { children: "een formulier is succesvol verzonden." }), "\n"] }), "\n", (0, t.jsx)(n.p, { children: "Bijvoorbeeld:" }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-html", children: "<head>\n  <title>Fout: Stap 1 van 4: Uw vraag - Gemeente Voorbeeld</title>\n  [...]\n</head>\n" }) }), "\n", (0, t.jsx)(n.p, { children: "Of:" }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-html", children: "<head>\n  <title>Uw vraag is met succes verstuurd - Gemeente Voorbeeld</title>\n  [...]\n</head>\n" }) }), "\n", (0, t.jsxs)(n.p, { children: ["Het geven van een beschrijvend ", (0, t.jsx)(n.code, { children: "<title>" }), "-element is nodig om te voldoen aan het WCAG-succescriterium ", (0, t.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html", children: "2.4.2 Paginatitel" }), " (niveau A)."] })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
   function j(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(o.X, { appearance: "do", title: "Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.", children: (0, t.jsx)(l.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "wachtwoord2", children: "Nieuw wachtwoord" }), (0, t.jsx)(n.p, { id: "description-wachtwoord2", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, t.jsx)(n.p, { id: "error-wachtwoord2", children: "Invoerfout: Je gekozen wachtwoord is te kort." }), (0, t.jsx)(n.input, { id: "wachtwoord2", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord2 error-wachtwoord2" })] }) }) }), "\n", (0, t.jsx)(o.X, { appearance: "dont", title: "Description boven het formulierveld en foutmelding eronder plaatsen.", children: (0, t.jsx)(l.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "wachtwoord4", children: "Nieuw wachtwoord" }), (0, t.jsx)(n.p, { id: "description-wachtwoord4", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, t.jsx)(n.input, { id: "wachtwoord4", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord4 error-wachtwoord4" }), (0, t.jsx)(n.p, { id: "error-wachtwoord4", children: "Invoerfout: Je gekozen wachtwoord is te kort." })] }) }) })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j(e);
   }
   function x(e) {
    const n = { a: "a", code: "code", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "zet-de-foutmeldingen-bij-de-betreffende-formuliervelden", children: "Zet de foutmeldingen bij de betreffende formuliervelden" }), "\n", (0, t.jsxs)(n.p, { children: ["Voor foutmeldingen geldt hetzelfde als voor descriptions: de beste locatie is boven het formulierveld. Bovendien moet de foutmelding ", (0, t.jsx)(n.code, { children: "aria-describedby" }), " gekoppeld zijn aan het formulierveld."] }), "\n", (0, t.jsxs)(n.p, { children: ["Hoe dit te doen is beschreven bij de ", (0, t.jsx)(n.a, { href: "/richtlijnen/formulieren/descriptions", children: "richtlijnen over descriptions" }), "."] })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
   }
   function k(e) {
    const n = { a: "a", code: "code", h2: "h2", img: "img", p: "p", pre: "pre", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "gebruik-geen-html-formuliervalidatie", children: "Gebruik geen HTML-formuliervalidatie" }), "\n", (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_html_validatie.png", alt: "Voorbeeld van HTML-validatie, een ballonnetje boven het formulierveld met de tekst: vul dit veld in" }), "."] }), "\n", (0, t.jsxs)(n.p, { children: ["De meeste browsers kunnen zelf controleren of een veld is ingevuld. Dit gebeurt als het HTML-attribuut ", (0, t.jsx)(n.code, { children: "required" }), " in het formulierveld staat."] }), "\n", (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: "language-html", children: '<input type="text" id="voorbeeld" name="voorbeeld" required />\n' }) }), "\n", (0, t.jsxs)(n.p, { children: ["Dit type foutafhandeling geeft onvoldoende informatie. In veel browsers wordt niet aan alle gebruikers overgebracht dat het veld verplicht is, en mist uitleg wanneer niet wordt voldaan een een opgegeven ", (0, t.jsx)(n.code, { children: "pattern" }), ". Zie ook: ", (0, t.jsx)(n.a, { href: "https://adrianroselli.com/2019/02/avoid-default-field-validation.html", children: (0, t.jsx)("span", { lang: "en", children: "Avoid default field validation" }) }), " van Adrian Roselli."] }), "\n", (0, t.jsx)(n.p, { children: "Wanneer er voldoende tijd en kennis is, heeft het de voorkeur om zelf client-side validatie toe te voegen." }), "\n", (0, t.jsxs)(n.p, { children: ["Om specifiek aan hulptechnologie\xebn te communiceren dat een veld verplicht is, kan ", (0, t.jsx)(n.code, { children: "aria-required" }), " worden gebruikt. Als je alleen ", (0, t.jsx)(n.code, { children: "aria-required" }), " gebruikt, zal de browser niet zelf valideren of feedback geven."] }), "\n", (0, t.jsxs)(n.p, { children: ["Het toegankelijk maken van foutmeldingen is nodig om te voldoen aan het WCAG-succescriterium ", (0, t.jsx)(n.a, { href: "/wcag/3.3.1/", children: "3.3.1 Foutidentificatie" }), " (niveau A)."] })] });
   }
   function y(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(k, { ...e }) }) : k(e);
   }
   function w(e) {
    const n = { a: "a", form: "form", h2: "h2", li: "li", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsx)(o.X, { appearance: "do", title: "Een samenvatting van de fouten boven het formulier.", description: "Verplaats focus naar de samenvatting of de kop van de samenvatting.", children: (0, t.jsx)(l.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { children: "Invoerfouten gevonden in het formulier" }), (0, t.jsxs)(n.ul, { children: [(0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: "#naam", children: "Vul uw naam in." }) }), (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: "#email", children: "Vul uw e-mailadres in." }) })] }), (0, t.jsx)(n.form, { children: "[...]" })] }) }) });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(w, { ...e }) }) : w(e);
   }
   function F(e) {
    const n = { a: "a", h2: "h2", li: "li", p: "p", strong: "strong", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "samenvatting-boven-het-formulier", children: "Samenvatting boven het formulier" }), "\n", (0, t.jsx)(n.p, { children: "Een zeer gebruikersvriendelijke manier om fouten weer te geven is een combinatie van:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "een samenvatting boven het formulier en;" }), "\n", (0, t.jsx)(n.li, { children: "per formulierveld de foutmelding herhalen." }), "\n"] }), "\n", (0, t.jsx)(n.p, { children: "Elke foutmelding in de samenvatting is ook een link naar het formulier. Hierdoor kan de toetsenbordgebruiker direct doorgaan naar het veld met de foutmelding." }), "\n", (0, t.jsx)(n.p, { children: "De constructie is als volgt:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsxs)(n.li, { children: ["Na het versturen van een formulier met fouten wordt ", (0, t.jsx)(n.strong, { children: "boven" }), " het formulier een lijst met fouten getoond."] }), "\n", (0, t.jsx)(n.li, { children: 'Deze lijst heeft een kopje met bijvoorbeeld de tekst:\n"Er was een probleem met je inzending. Verbeter de fouten voor je verder gaat.".' }), "\n", (0, t.jsx)(n.li, { children: "Daaronder staat een lijst met de foutmeldingen. Elke foutmelding is ook een link naar het bijbehorende formulierveld." }), "\n", (0, t.jsx)(n.li, { children: "Het kopje boven de fouten krijgt de toetsenbordfocus. Dan staat het meteen in beeld, wordt het voorgelezen door screenreaders en is de tabvolgorde logisch: de links naar de betreffende velden zijn de eerstvolgende items." }), "\n"] }), "\n", (0, t.jsxs)(n.p, { children: ["GOV.UK geeft hiervan enkele duidelijke voorbeelden op ", (0, t.jsx)(n.a, { href: "https://design-system.service.gov.uk/components/error-summary/", children: (0, t.jsx)("span", { lang: "en", children: "Components Error summary" }) }), "."] }), "\n", (0, t.jsxs)(n.p, { children: ["Duidelijke foutmeldingen zijn nodig om te voldoen aan het WCAG-succescriterium ", (0, t.jsx)(n.a, { href: "/wcag/3.3.1/", children: "3.3.1 Foutidentificatie" }), " (niveau A)."] })] });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(F, { ...e }) }) : F(e);
   }
   function N(e) {
    const n = { a: "a", em: "em", h2: "h2", p: "p", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "controleer-op-het-juiste-moment-op-fouten", children: "Controleer op het juiste moment op fouten" }), "\n", (0, t.jsxs)(n.p, { children: ["Het is van belang ", (0, t.jsx)(n.em, { children: "wanneer" }), " een veld op fouten wordt gecheckt."] }), "\n", (0, t.jsx)(n.p, { children: 'Stel, je typt een e-mailadres en na het invoeren van het eerste karakter verschijnt al een foutmelding "Ongeldig e-mailadres".' }), "\n", (0, t.jsx)(n.p, { children: "Die melding verdwijnt pas als het hele e-mailadres is ingevuld. Dit is niet alleen irritant, het kan ook onzekerheid en verwarring veroorzaken. \u201cWat doe ik fout? Ik ben nog niet klaar met invullen en het is nu al fout!\u201d" }), "\n", (0, t.jsx)(n.p, { children: "Controleer een veld bijvoorbeeld als de gebruiker het veld heeft aangepast en daarna verlaat ('blur' en 'input') of wanneer het formulier wordt verzonden." }), "\n", (0, t.jsxs)(n.p, { children: ['Meer informatie over de bezwaren van "live" validatie: ', (0, t.jsx)(n.a, { href: "https://adamsilver.io/blog/the-problem-with-live-validation-and-what-to-do-instead/", children: (0, t.jsx)("span", { lang: "en", children: "The problem with live validation and what to do instead" }) }), " van Adam Silver."] })] });
   }
   function A(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(N, { ...e }) }) : N(e);
   }
   var C = i(56108);
   const D = { title: "Foutmeldingen in een formulier| Richtlijnen", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Foutmeldingen", sidebar_position: 5, pagination_label: "Foutmeldingen", description: "Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als die onjuiste of onvolledige informatie invult?", slug: "foutmeldingen", keywords: ["informatie", "formulier", "design", "code"] },
    Z = "Foutmeldingen in een formulier",
    S = { id: "richtlijnen/formulieren/errors", title: "Foutmeldingen in een formulier| Richtlijnen", description: "Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als die onjuiste of onvolledige informatie invult?", source: "@site/docs/richtlijnen/formulieren/errors.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/foutmeldingen", permalink: "/richtlijnen/formulieren/foutmeldingen", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/errors.mdx", tags: [], version: "current", sidebarPosition: 5, frontMatter: { title: "Foutmeldingen in een formulier| Richtlijnen", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Foutmeldingen", sidebar_position: 5, pagination_label: "Foutmeldingen", description: "Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als die onjuiste of onvolledige informatie invult?", slug: "foutmeldingen", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Descriptions in een formulier", permalink: "/richtlijnen/formulieren/descriptions" }, next: { title: "Labels in een formulier", permalink: "/richtlijnen/formulieren/labels" } },
    G = {},
    V = [];
   function H(e) {
    const n = { h1: "h1", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", "\n", (0, t.jsx)(n.h1, { id: "foutmeldingen-in-een-formulier", children: "Foutmeldingen in een formulier" }), "\n", (0, t.jsx)(n.p, { children: "Formuliervalidatie werkt het best met duidelijke en goed getimede foutmeldingen en logische validatieregels. Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als deze onjuiste of onvolledige informatie invult?" }), "\n", (0, t.jsx)(n.p, { children: "Belangrijk bij het aangeven van fouten:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "Controleer op het juiste moment op fouten." }), "\n", (0, t.jsx)(n.li, { children: "Schrijf een foutmelding uit in tekst." }), "\n", (0, t.jsx)(n.li, { children: "Schrijf een duidelijke foutmelding." }), "\n", (0, t.jsx)(n.li, { children: "Zet de foutmeldingen bij de betreffende formuliervelden." }), "\n", (0, t.jsx)(n.li, { children: "Gebruik geen HTML-formuliervalidatie." }), "\n", (0, t.jsx)(n.li, { children: "Zet een samenvatting van de foutmeldingen boven het formulier." }), "\n", (0, t.jsx)(n.li, { children: "Geef feedback aan screenreadergebruikers." }), "\n"] }), "\n", (0, t.jsx)(A, {}), "\n", (0, t.jsx)(h, {}), "\n", (0, t.jsx)(p, {}), "\n", (0, t.jsx)(c, {}), "\n", (0, t.jsx)(d, {}), "\n", (0, t.jsx)(b, {}), "\n", (0, t.jsx)(f, {}), "\n", (0, t.jsx)(y, {}), "\n", (0, t.jsx)(z, {}), "\n", (0, t.jsx)(_, {}), "\n", (0, t.jsx)(v, {}), "\n", (0, t.jsx)(C.ZP, {})] });
   }
   function I(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(H, { ...e }) }) : H(e);
   }
  },
  73460: (e, n, i) => {
   i.d(n, { X: () => f });
   var t = i(16532),
    r = i(86259),
    l = i(11910),
    o = i(59560),
    s = i(80486),
    d = i(69267),
    a = i(80495),
    c = i(50959),
    u = i(9995);
   const h = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var m = i(41179),
    p = i(11527);
   const g = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(t.Tg, { className: h["nlds-canvas__example-surface"], children: (0, p.jsx)(t.BB, { className: (0, r.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: (0, p.jsx)(t.nv, { className: h["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   g.displayName = "ParagraphContainer";
   const v = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(t.Tg, { className: h["nlds-canvas__example-surface"], children: (0, p.jsx)(t.BB, { className: (0, r.Z)("utrecht-document--surface", h["nlds-canvas__example-document"]), children: n }) });
   };
   v.displayName = "DocumentContainer";
   const j = (e) => {
    let { children: n } = e;
    return (0, p.jsx)(t.Tg, { className: h["nlds-canvas__example-surface"], children: n });
   };
   j.displayName = "SurfaceContainer";
   const f = (e) => {
    let { code: n, copy: i = !1, defaultExpandedCode: f = !1, displayCode: x = !0, children: b, container: k = "document", language: y, designTokens: w } = e,
     _ = "function" == typeof b ? b() : b,
     F = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
     z = "string" == typeof n ? n : u.uS(F || _),
     [N, A] = (0, c.useState)(z),
     [C, D] = (0, c.useState)(f);
    (0, c.useEffect)(() => {
     (async () => {
      (N = await a.ZP.format(z, { parser: y, plugins: [l.Z, o.ZP, s.ZP, d.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), A(N);
     })();
    }, [z]);
    const Z = (0, c.useId)();
    let S = c.Fragment;
    return (
     "paragraph" === k ? (S = g) : "document" === k ? (S = v) : "surface" === k && (S = j),
     (0, p.jsxs)("div", {
      className: (0, r.Z)(h["nlds-canvas"]),
      children: [
       _ && (0, p.jsx)("div", { className: (0, r.Z)(h["nlds-canvas__example"]), children: (0, p.jsx)("div", { className: "voorbeeld-theme", style: w, children: (0, p.jsx)(S, { children: (0, p.jsx)(t.pu, { children: _ }) }) }) }),
       x &&
        (0, p.jsx)("div", {
         className: (0, r.Z)(h["nlds-canvas__toolbar"]),
         children: (0, p.jsx)(t.zx, {
          className: (0, r.Z)(h["nlds-canvas__button"], h["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           D(!C);
          },
          "aria-expanded": C,
          "aria-controls": Z,
          children: C ? "Verberg code" : "Bekijk code",
         }),
        }),
       x &&
        (0, p.jsxs)("div", {
         className: (0, r.Z)(h["nlds-canvas__code-block"], !i && h["nlds-canvas__code-block--user-select-none"]),
         id: Z,
         hidden: !C,
         children: [
          (0, p.jsx)(m.u, { syntax: y, textContent: N, trim: !0 }),
          i &&
           (0, p.jsx)("div", {
            className: (0, r.Z)(h["nlds-canvas__toolbar"]),
            children: (0, p.jsx)(t.zx, {
             className: (0, r.Z)(h["nlds-canvas__button"], h["nlds-canvas__copy-button"]),
             appearance: "subtle-button",
             onClick: () => {
              navigator.clipboard.writeText(N).catch((e) => console.error("Copy code failed", e));
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
  41179: (e, n, i) => {
   i.d(n, { u: () => s });
   var t = i(16532),
    r = i(2425);
   i(50959);
   const l = {
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
   var o = i(11527);
   function s(e) {
    let { lineNumber: n, syntax: i, textContent: s, trim: d } = e,
     a = s;
    return (
     d && (a = a.trim()),
     (0, o.jsx)(r.y$, {
      theme: l,
      code: a,
      language: i || "",
      children: (e) => {
       let { style: i, tokens: r, getLineProps: l, getTokenProps: s } = e;
       return (0, o.jsx)(t.dn, { style: i, children: r.map((e, i) => (0, o.jsxs)("span", { ...l({ line: e }), children: [n && (0, o.jsx)("span", { children: i + 1 }), e.map((e, n) => (0, o.jsx)("span", { ...s({ token: e }) }, n)), "\n"] }, i)) });
      },
     })
    );
   }
  },
  30036: (e, n, i) => {
   i.d(n, { X: () => a });
   var t = i(9842),
    r = i(91406),
    l = i(16532),
    o = i(86259);
   i(50959);
   const s = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var d = i(11527);
   const a = (e) => {
    let { title: n, appearance: i, description: a, children: c, figure: u } = e;
    const h = "Doen",
     m = "Niet doen",
     p = u ? "figure" : "div",
     g = u ? "figcaption" : "div";
    return (0, d.jsxs)(p, { className: (0, o.Z)(s["nlds-guideline"], s[`nlds-guideline--${i}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, d.jsxs)(g, { className: (0, o.Z)(s["nlds-guideline__description"]), children: ["dont" === i ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(l.nv, { className: (0, o.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${i}`]), children: [(0, d.jsx)(t.Z, { className: s["nlds-guideline__icon"] }), (0, d.jsx)("span", { className: s["nlds-guideline__title"], children: m })] }), (0, d.jsx)(l.nv, { children: n })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(l.nv, { className: (0, o.Z)(s["nlds-guideline__badge"], s[`nlds-guideline__badge--${i}`]), children: [(0, d.jsx)(r.Z, { className: s["nlds-guideline__icon"] }), (0, d.jsx)("span", { className: s["nlds-guideline__title"], children: h })] }), (0, d.jsx)(l.nv, { children: n })] }), a] }), (0, d.jsx)("div", { className: (0, o.Z)(s["nlds-guideline__example"]), children: c })] });
   };
  },
  27034: (e, n, i) => {
   i.d(n, { Z: () => s, a: () => o });
   var t = i(50959);
   const r = {},
    l = t.createContext(r);
   function o(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
