"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8267],
 {
  3324: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var r = i(1527),
    t = i(7214);
   function l(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, r.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  2484: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => V, contentTitle: () => C, default: () => I, frontMatter: () => G, metadata: () => S, toc: () => Z });
   var r = i(1527),
    t = i(7214),
    l = i(3460),
    o = i(36);
   function d(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(o.X, { appearance: "do", title: "Leg uit waarom een datum wordt afgekeurd.", children: (0, r.jsx)(l.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "passport-validity", children: "Geldig tot" }), (0, r.jsx)(n.p, { id: "description-passport-validity", children: "Invoerfout: De geldigheidsdatum van uw paspoort moet in de toekomst liggen." }), (0, r.jsx)(n.input, { id: "passport-validity", type: "text", name: "passport-validity", "aria-describedby": "description-passport-validity" })] }) }) }), "\n", (0, r.jsx)(o.X, { appearance: "do", title: "Geef een voorbeeld van wat er verwacht wordt.", children: (0, r.jsx)(l.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "email", children: "E-mail" }), (0, r.jsx)(n.p, { id: "description-email", children: "Invoerfout: Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl." }), (0, r.jsx)(n.input, { id: "email", type: "email", name: "email", "aria-describedby": "description-email" })] }) }) }), "\n", (0, r.jsx)(o.X, { appearance: "dont", title: "Alleen beschrijven dat het veld verplicht is, zonder toelichting dat er informatie mist of aan welke voorwaarde niet is voldaan.", children: (0, r.jsx)(l.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "passport-validity-2", children: "Geldig tot" }), (0, r.jsx)(n.p, { id: "description-passport-validity-2", children: "Invoerfout: Dit veld is verplicht." }), (0, r.jsx)(n.input, { id: "passport-validity-2", "aria-invalid": "false", type: "text", name: "passport-validity-2", "aria-describedby": "description-passport-validity-2" })] }) }) })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   function a(e) {
    const n = { a: "a", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "schrijf-een-duidelijke-foutmelding", children: "Schrijf een duidelijke foutmelding" }), "\n", (0, r.jsx)(n.p, { children: '"Dit veld is verplicht" geeft onvoldoende informatie. Een op maat geschreven foutmelding geeft de gebruiker veel meer houvast.' }), "\n", (0, r.jsx)(n.p, { children: "Geef de gebruiker ook nooit de schuld. De meeste mensen worstelen met alle informatie en functionaliteit op het web. Help gebruikers zo goed mogelijk om het formulier te versturen." }), "\n", (0, r.jsx)(n.p, { children: 'Maak foutmeldingen daarom zo veel mogelijk beschrijvend en op maat. Schrijf in plaats van "Ongeldige invoer" of "Dit veld is verplicht" bijvoorbeeld:' }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsxs)(n.li, { children: ["Vul een geldig e-mailadres in, bijvoorbeeld ", (0, r.jsx)(n.a, { href: "mailto:naam@voorbeeld.nl", children: "naam@voorbeeld.nl" }), "."] }), "\n", (0, r.jsx)(n.li, { children: "De geldigheidsdatum van uw paspoort moet in de toekomst zijn." }), "\n", (0, r.jsx)(n.li, { children: "Vul het huisnummer in zodat wij je bestelling kunnen opsturen." }), "\n"] }), "\n", (0, r.jsx)(n.p, { children: "Gebruik een punt aan het eind van de foutmelding (of andere melding). Dan stopt de screenreader even en is het duidelijker dat de foutmelding apart een zin is." }), "\n", (0, r.jsxs)(n.p, { children: ["Het design system van GOV.UK geeft duidelijke (Engelstalige) informatie over de tekst van foutmeldingen ", (0, r.jsx)(n.a, { href: "https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise", children: "Be clear and concise" }), "."] }), "\n", (0, r.jsx)(n.p, { children: "Door het schrijven van foutmeldingen en een duidelijke toelichting op wat er mis gaat, voldoe je aan de volgende WCAG-succescriteria:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html", children: "3.3.1 Foutidentificatie" }), " (niveau A)."] }), "\n", (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html", children: "3.3.3 Foutsuggestie" }), " (niveau AA)."] }), "\n"] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
   function h(e) {
    const n = { a: "a", h2: "h2", p: "p", strong: "strong", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "schrijf-een-foutmelding-uit-in-tekst", children: "Schrijf een foutmelding uit in tekst" }), "\n", (0, r.jsx)(n.p, { children: "Schrijf de foutmelding altijd uit in tekst. Dus niet alleen met een rood randje om het veld heen of met een icoontje van een uitroepteken, maar in duidelijke taal." }), "\n", (0, r.jsxs)(n.p, { children: ["Je kunt zeker kleur en icoontjes gebruiken, maar niet als ", (0, r.jsx)(n.strong, { children: "enige" }), " foutindicatie."] }), "\n", (0, r.jsxs)(n.p, { children: ["Wanneer je formulierfouten in tekst beschrijft, voldoe je aan het WCAG succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html", children: "3.3.1 Foutidentificatie" }), " (niveau A)."] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   function p(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(o.X, { appearance: "do", title: "Naast een visuele indicatie ook een foutmelding in tekst tonen.", description: "In dit voorbeeld staat er een rood randje om het invoerveld heen, plus de foutmelding in tekst.", children: (0, r.jsx)(l.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "passport-validity-1", children: "Geldig tot" }), (0, r.jsx)(n.p, { id: "passport-validity-date-1", children: "Invoerfout: Vul een geldige datum in (bijvoorbeeld 6 januari 2030)." }), (0, r.jsx)(n.input, { id: "passport-validity-1", "aria-invalid": "true", type: "text", name: "passport-validity-1", "aria-describedby": "description-passport-validity-1" })] }) }) }), "\n", (0, r.jsx)(o.X, { appearance: "dont", title: "Alleen een visuele indicatie geven dat er iets fout is gegaan.", description: "In dit voorbeeld staat er alleen een rood randje om het invoerveld heen.", children: (0, r.jsx)(l.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "passport-validity-2", children: "Geldig tot" }), (0, r.jsx)(n.input, { id: "passport-validity-2", "aria-invalid": "true", type: "text", name: "passport-validity-2" })] }) }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   function j(e) {
    const n = { a: "a", code: "code", h2: "h2", h3: "h3", li: "li", p: "p", pre: "pre", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "feedback-voor-screenreadergebruikers", children: "Feedback voor screenreadergebruikers" }), "\n", (0, r.jsxs)(n.p, { children: ["We geven je 3 extra manieren om feedback te geven over foutmeldingen voor screenreadergebruikers. Met ", (0, r.jsx)(n.code, { children: "aria-required" }), ", ", (0, r.jsx)(n.code, { children: "aria-invalid" }), " in het formulierveld en het ", (0, r.jsx)(n.code, { children: "<title>" }), " element in de ", (0, r.jsx)(n.code, { children: "<head>" }), " van de webpagina."] }), "\n", (0, r.jsxs)(n.p, { children: ["Door het geven van feedback aan screenreadergebuikers foutmeldingen voldoe je aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html", children: "3.3.1 Foutidentificatie" }), " (niveau A)."] }), "\n", (0, r.jsx)(n.h3, { id: "gebruik-aria-voor-feedback", children: "Gebruik ARIA voor feedback" }), "\n", (0, r.jsx)(n.p, { children: "Gebruik ARIA om aanvullende informatie en feedback te geven aan screenreadergebruikers. Informatie die nodig is om het formulier goed te gebruiken en te begrijpen." }), "\n", (0, r.jsx)(n.p, { children: "Twee ARIA-attributen zijn belangrijk voor screenreaderfeedback:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: 'aria-required="true"' }), " vertelt dat een veld verplicht is."] }), "\n", (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: 'aria-invalid="true"' }), " vertelt dat een veld niet goed is ingevuld."] }), "\n"] }), "\n", (0, r.jsxs)(n.p, { children: ["Initieel staat de waarde van ", (0, r.jsx)(n.code, { children: "aria-invalid" }), " op ", (0, r.jsx)(n.code, { children: "false" }), ". Verander bij foutmeldingen de waarde van ", (0, r.jsx)(n.code, { children: "true" }), " naar ", (0, r.jsx)(n.code, { children: "false" }), ". Eventueel kan het attribuut ", (0, r.jsx)(n.code, { children: "aria-invalid" }), " kan ook worden weggelaten totdat de tot validatie is uitgevoerd."] }), "\n", (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: "language-html", children: '<label for="voorbeeld">Voorbeeld</label>\n<input aria-required="true" aria-invalid="false" id="voorbeeld" name="voorbeeld" type="text" />\n' }) }), "\n", (0, r.jsx)(n.p, { children: 'VoiceOver leest voor: "Voorbeeld, vereist, bewerkt tekst".' }), "\n", (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: "language-html", children: '<label for="voorbeeld">Voorbeeld</label>\n<input aria-required="true" aria-invalid="true" id="voorbeeld" name="voorbeeld" type="text" />\n' }) }), "\n", (0, r.jsx)(n.p, { children: 'VoiceOver leest voor: "Voorbeeld, vereist, ongeldige gegevens, bewerk tekst".' }), "\n", (0, r.jsx)(n.h3, { id: "screenreaderfeedback-en-focusmanagement-na-submit", children: "Screenreaderfeedback en focusmanagement na submit" }), "\n", (0, r.jsx)(n.p, { children: "Voor toetsenbord- en screenreadergebruikers is het van belang dat na een submit, de visuele- en toetsenbordfocus op een logische plek komt." }), "\n", (0, r.jsxs)(n.h3, { id: "update-het-title-element-in-de-head", children: ["Update het ", (0, r.jsx)(n.code, { children: "<title>" }), " element in de ", (0, r.jsx)(n.code, { children: "<head>" })] }), "\n", (0, r.jsxs)(n.p, { children: ["De inhoud van het ", (0, r.jsx)(n.code, { children: "<title>" }), " element is het eerste wat een screenreader voorleest bij het inladen van een webpagina."] }), "\n", (0, r.jsx)(n.p, { children: "Je kunt hier dus waardevolle informatie kwijt zoals:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "een formulier heeft 2 foutmeldingen;" }), "\n", (0, r.jsx)(n.li, { children: "bij welke stap je bent in een formulier met meerdere stappen;" }), "\n", (0, r.jsx)(n.li, { children: "een formulier is succesvol verzonden." }), "\n"] }), "\n", (0, r.jsx)(n.p, { children: "Bijvoorbeeld:" }), "\n", (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: "language-html", children: "<head>\n  <title>Fout: Stap 1 van 4: Uw vraag - Gemeente Voorbeeld</title>\n  [...]\n</head>\n" }) }), "\n", (0, r.jsx)(n.p, { children: "Of:" }), "\n", (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: "language-html", children: "<head>\n  <title>Uw vraag is met succes verstuurd - Gemeente Voorbeeld</title>\n  [...]\n</head>\n" }) }), "\n", (0, r.jsxs)(n.p, { children: ["Door een beschrijvend ", (0, r.jsx)(n.code, { children: "<title>" }), "-element te geven voldoe je aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html", children: "2.4.2 Paginatitel" }), " (niveau A)."] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
   }
   function v(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(o.X, { appearance: "do", title: "Plaats alle descriptions, ook de foutmeldingen, op een consistente plek, liefst tussen het label en het formulierveld.", children: (0, r.jsx)(l.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "wachtwoord2", children: "Nieuw wachtwoord" }), (0, r.jsx)(n.p, { id: "description-wachtwoord2", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, r.jsx)(n.p, { id: "error-wachtwoord2", children: "Invoerfout: Je gekozen wachtwoord is te kort." }), (0, r.jsx)(n.input, { id: "wachtwoord2", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord2 error-wachtwoord2" })] }) }) }), "\n", (0, r.jsx)(o.X, { appearance: "dont", title: "Description boven het formulierveld en foutmelding eronder plaatsen.", children: (0, r.jsx)(l.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.label, { for: "wachtwoord4", children: "Nieuw wachtwoord" }), (0, r.jsx)(n.p, { id: "description-wachtwoord4", children: "Kies een wachtwoord van minimaal 8 karakters lang." }), (0, r.jsx)(n.input, { id: "wachtwoord4", type: "password", name: "nieuw-wachtwoord", "aria-describedby": "description-wachtwoord4 error-wachtwoord4" }), (0, r.jsx)(n.p, { id: "error-wachtwoord4", children: "Invoerfout: Je gekozen wachtwoord is te kort." })] }) }) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
   function f(e) {
    const n = { a: "a", code: "code", h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "zet-de-foutmeldingen-bij-de-betreffende-formuliervelden", children: "Zet de foutmeldingen bij de betreffende formuliervelden" }), "\n", (0, r.jsxs)(n.p, { children: ["Voor foutmeldingen geldt hetzelfde als voor descriptions: de beste locatie is boven het formulierveld. Bovendien moet de foutmelding ", (0, r.jsx)(n.code, { children: "aria-describedby" }), " gekoppeld zijn aan het formulierveld."] }), "\n", (0, r.jsxs)(n.p, { children: ["Hoe dit te doen is beschreven bij de ", (0, r.jsx)(n.a, { href: "/richtlijnen/formulieren/alle-richtlijnen/descriptions", children: "richlijnen over descriptions" }), "."] })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(f, { ...e }) }) : f(e);
   }
   function k(e) {
    const n = { a: "a", code: "code", h2: "h2", img: "img", p: "p", pre: "pre", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "gebruik-geen-html-formuliervalidatie", children: "Gebruik geen HTML-formuliervalidatie" }), "\n", (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.img, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_html_validatie.png", alt: "Voorbeeld van HTML-validatie, een ballonnetje boven het formulierveld met de tekst: vul dit veld in" }), "."] }), "\n", (0, r.jsxs)(n.p, { children: ["De meeste browsers kunnen zelf controleren of een veld is ingevuld. Dit gebeurt als het HTML-attribuut ", (0, r.jsx)(n.code, { children: "required" }), " in het formulierveld staat."] }), "\n", (0, r.jsx)(n.p, { children: "Dit type foutafhandeling geeft onvoldoende informatie en is niet altijd toegankelijk genoeg voor screenreadergebruikers." }), "\n", (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: "language-html", children: '<input type="text" id="voorbeeld" name="voorbeeld" required />\n' }) }), "\n", (0, r.jsxs)(n.p, { children: ["De richtlijn ", (0, r.jsx)(n.a, { href: "richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker", children: "Voorkom fouten" }), " gaat hier dieper op in."] }), "\n", (0, r.jsxs)(n.p, { children: ["Alhoewel het gebruik van ", (0, r.jsx)(n.code, { children: "required" }), " in plaats van ", (0, r.jsx)(n.code, { children: "aria-required" }), " niet fout is, geven we de voorkeur aan ", (0, r.jsx)(n.code, { children: "aria-required" }), ". Met ", (0, r.jsx)(n.code, { children: "aria-required" }), " wordt het veld voor hulptechnologie\xebn, zoals een screenreader, gemarkeerd als verplicht, maar gaat de browser niet zelf valideren."] }), "\n", (0, r.jsxs)(n.p, { children: ["Door het toegankelijk maken van foutmeldingen voldoe je aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#foutidentificatie", children: "3.3.1 Foutidentificatie" }), " (niveau A)."] })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
   function y(e) {
    const n = { a: "a", form: "form", h2: "h2", li: "li", span: "span", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, r.jsx)(o.X, { appearance: "do", title: "Een samenvatting van de fouten boven het formulier.", description: "Met role=alert op een span in het kopje van het formulier.", children: (0, r.jsx)(l.X, { language: "html", children: () => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { children: (0, r.jsx)(n.span, { role: "alert", children: "Er was een probleem met je inzending. Controleer de onderstaande velden" }) }), (0, r.jsxs)(n.ul, { children: [(0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: "#naam", children: "Vul uw naam in." }) }), (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: "#email", children: "Vul uw e-mailadres in." }) }), (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: "#privacybeleid", children: "Ga akkoord met ons privacybeleid." }) })] }), (0, r.jsx)(n.form, { children: "[...]" })] }) }) });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y(e);
   }
   function A(e) {
    const n = { a: "a", h2: "h2", li: "li", p: "p", strong: "strong", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "samenvatting-boven-het-formulier", children: "Samenvatting boven het formulier" }), "\n", (0, r.jsx)(n.p, { children: "Een zeer gebruikersvriendelijke manier om fouten weer te geven is een combinatie van een" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "samenvatting boven het formulier en;" }), "\n", (0, r.jsx)(n.li, { children: "per formulierveld de foutmelding herhalen." }), "\n"] }), "\n", (0, r.jsx)(n.p, { children: "Elke foutmelding in de samenvatting is ook een link naar het formulier. Hierdoor kan de toetsenbordgebruiker direct doorgaan naar het veld met de foutmelding." }), "\n", (0, r.jsx)(n.p, { children: "De constructie is als volgt:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsxs)(n.li, { children: ["Na het versturen van een formulier met fouten wordt ", (0, r.jsx)(n.strong, { children: "boven" }), " het formulier een lijst met fouten getoond."] }), "\n", (0, r.jsx)(n.li, { children: 'Deze lijst heeft een kopje met bijvoorbeeld de tekst:\n"Er was een probleem met je inzending. Controleer de onderstaande velden.".' }), "\n", (0, r.jsx)(n.li, { children: "Dit kopje krijgt de toetsenbordfocus zodat het meteen in beeld staat en ook voorgelezen wordt door een screenreader." }), "\n", (0, r.jsx)(n.li, { children: "Daaronder staat een lijst met de foutmeldingen. Elke foutmelding is ook een link naar het bijbehorende formulierveld." }), "\n"] }), "\n", (0, r.jsxs)(n.p, { children: ["Door het schrijven van duidelijke foutmeldingen voldoe je aan het WCAG-succescriterium ", (0, r.jsx)(n.a, { href: "https://www.w3.org/Translations/WCAG21-nl/#foutidentificatie", children: "3.3.1 Foutidentificatie" }), " (niveau A)."] })] });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(A, { ...e }) }) : A(e);
   }
   function F(e) {
    const n = { a: "a", em: "em", h2: "h2", p: "p", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: "controleer-op-het-juiste-moment-op-fouten", children: "Controleer op het juiste moment op fouten" }), "\n", (0, r.jsxs)(n.p, { children: ["Het is van belang ", (0, r.jsx)(n.em, { children: "wanneer" }), " een veld op fouten wordt gecheckt."] }), "\n", (0, r.jsx)(n.p, { children: 'Stel, je typt een e-mailadres en na het invoeren van het eerste karakter verschijnt al een foutmelding "Ongeldig e-mailadres".' }), "\n", (0, r.jsx)(n.p, { children: "Die melding verdwijnt pas als het hele e-mailadres is ingevuld. Dit is niet alleen irritant, het kan ook onzekerheid en verwarring veroorzaken. Wat doe ik fout? Ik ben nog niet klaar met invullen en het is nu al fout!" }), "\n", (0, r.jsx)(n.p, { children: "Controleer een veld bijvoorbeeld als de gebruiker het veld heeft aangepast en daarna verlaat ('blur' en 'input') of wanneer het formulier wordt verzonden." }), "\n", (0, r.jsxs)(n.p, { children: ['Meer informatie over de bezwaren van "live" validatie: ', (0, r.jsx)(n.a, { href: "https://adamsilver.io/blog/the-problem-with-live-validation-and-what-to-do-instead/", children: "The problem with live validation and what to do instead" }), " van Adam Silver."] })] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(F, { ...e }) }) : F(e);
   }
   var N = i(3324);
   const G = { title: "Foutmeldingen | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Foutmeldingen", pagination_label: "Foutmeldingen", description: "Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als deze onjuiste of onvolledige informatie invult?", slug: "foutmeldingen", keywords: ["informatie", "formulier", "design", "code"] },
    C = "Foutmeldingen",
    S = { id: "richtlijnen/formulieren/alle-richtlijnen/errors", title: "Foutmeldingen | Richtlijnen | NL Design System", description: "Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als deze onjuiste of onvolledige informatie invult?", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/errors.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/foutmeldingen", permalink: "/richtlijnen/formulieren/alle-richtlijnen/foutmeldingen", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/errors.mdx", tags: [], version: "current", frontMatter: { title: "Foutmeldingen | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Foutmeldingen", pagination_label: "Foutmeldingen", description: "Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als deze onjuiste of onvolledige informatie invult?", slug: "foutmeldingen", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Bevestigingspagina", permalink: "/richtlijnen/formulieren/alle-richtlijnen/bevestigingspagina" }, next: { title: "Visueel ontwerp van formulieren", permalink: "/richtlijnen/formulieren/alle-richtlijnen/visueel-ontwerp" } },
    V = {},
    Z = [];
   function W(e) {
    const n = { h1: "h1", li: "li", p: "p", ul: "ul", ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ["\n", "\n", "\n", (0, r.jsx)(n.h1, { id: "foutmeldingen", children: "Foutmeldingen" }), "\n", (0, r.jsx)(n.p, { children: "Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als deze onjuiste of onvolledige informatie invult?" }), "\n", (0, r.jsx)(n.p, { children: "Belangrijk bij het aangeven van fouten:" }), "\n", (0, r.jsxs)(n.ul, { children: ["\n", (0, r.jsx)(n.li, { children: "Controleer op het juiste moment op fouten." }), "\n", (0, r.jsx)(n.li, { children: "Schrijf een foutmelding uit in tekst." }), "\n", (0, r.jsx)(n.li, { children: "Schrijf een duidelijke foutmelding." }), "\n", (0, r.jsx)(n.li, { children: "Zet de foutmeldingen bij de betreffende formuliervelden." }), "\n", (0, r.jsx)(n.li, { children: "Gebruik geen HTML-formuliervalidatie." }), "\n", (0, r.jsx)(n.li, { children: "Zet een samenvatting van de foutmeldingen boven het formulier." }), "\n", (0, r.jsx)(n.li, { children: "Geef feedback aan screenreadergebruikers." }), "\n"] }), "\n", (0, r.jsx)(D, {}), "\n", (0, r.jsx)(u, {}), "\n", (0, r.jsx)(m, {}), "\n", (0, r.jsx)(c, {}), "\n", (0, r.jsx)(s, {}), "\n", (0, r.jsx)(b, {}), "\n", (0, r.jsx)(x, {}), "\n", (0, r.jsx)(w, {}), "\n", (0, r.jsx)(z, {}), "\n", (0, r.jsx)(_, {}), "\n", (0, r.jsx)(g, {}), "\n", (0, r.jsx)(N.ZP, {})] });
   }
   function I(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(W, { ...e }) }) : W(e);
   }
  },
  3460: (e, n, i) => {
   i.d(n, { X: () => v });
   var r = i(6532),
    t = i(6259),
    l = i(1910),
    o = i(9560),
    d = i(486),
    s = i(9267),
    a = i(495),
    c = i(959),
    h = i(9995),
    u = i(2950);
   const p = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var m = i(1179),
    j = i(1527);
   const g = (e) => {
     let { target: n } = e;
     const i = n.getAttribute("aria-controls"),
      r = n.ownerDocument.getElementById(i);
     (r.hidden = !r.hidden), n.setAttribute("aria-expanded", !r.hidden), (n.innerText = r.hidden ? "Bekijk code" : "Verberg code");
    },
    v = (e) => {
     let { code: n, copy: i = !1, defaultCollapsed: v = !0, children: x, language: f, designTokens: b } = e,
      k = "function" == typeof x ? x() : x,
      w = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
      y = "string" == typeof n ? n : h.uS(w || k),
      [_, A] = (0, c.useState)(y);
     (0, c.useEffect)(() => {
      (async () => {
       (_ = await a.ZP.format(y, { parser: f, plugins: [l.Z, o.ZP, d.ZP, s.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), A(_);
      })();
     }, [y]);
     const z = (0, u.Z)();
     return (0, j.jsxs)("div", {
      className: (0, t.Z)(p["nlds-canvas"]),
      children: [
       k && (0, j.jsx)("div", { className: (0, t.Z)(p["nlds-canvas__example"]), children: (0, j.jsx)(r.pu, { className: "voorbeeld-theme", style: b, children: k }) }),
       (0, j.jsx)("div", { className: (0, t.Z)(p["nlds-canvas__toolbar"]), children: (0, j.jsx)(r.zx, { className: (0, t.Z)(p["nlds-canvas__button"], p["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: g, "aria-expanded": !v, "aria-controls": z, children: v ? "Bekijk code" : "Verberg code" }) }),
       (0, j.jsxs)("div", {
        className: (0, t.Z)(p["nlds-canvas__code-block"], !i && p["nlds-canvas__code-block--user-select-none"]),
        id: z,
        hidden: v,
        children: [
         (0, j.jsx)(m.u, { syntax: f, textContent: _, trim: !0 }),
         i &&
          (0, j.jsx)("div", {
           className: (0, t.Z)(p["nlds-canvas__toolbar"]),
           children: (0, j.jsx)(r.zx, {
            className: (0, t.Z)(p["nlds-canvas__button"], p["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(_).catch((e) => console.error("Copy code failed", e));
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
  1179: (e, n, i) => {
   i.d(n, { u: () => d });
   var r = i(6532),
    t = i(2425);
   i(959);
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
   var o = i(1527);
   function d(e) {
    let { lineNumber: n, syntax: i, textContent: d, trim: s } = e,
     a = d;
    return (
     s && (a = a.trim()),
     (0, o.jsx)(t.y$, {
      theme: l,
      code: a,
      language: i || "",
      children: (e) => {
       let { style: i, tokens: t, getLineProps: l, getTokenProps: d } = e;
       return (0, o.jsx)(r.dn, { style: i, children: t.map((e, i) => (0, o.jsxs)("span", { ...l({ line: e }), children: [n && (0, o.jsx)("span", { children: i + 1 }), e.map((e, n) => (0, o.jsx)("span", { ...d({ token: e }) }, n)), "\n"] }, i)) });
      },
     })
    );
   }
  },
  36: (e, n, i) => {
   i.d(n, { X: () => a });
   var r = i(5893),
    t = i(1139),
    l = i(6532),
    o = i(6259);
   i(959);
   const d = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var s = i(1527);
   const a = (e) => {
    let { title: n, appearance: i, description: a, children: c } = e;
    const h = "Doen",
     u = "Niet doen";
    return (0, s.jsxs)("div", { className: (0, o.Z)(d["nlds-guideline"], d[`nlds-guideline--${i}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, s.jsxs)("div", { className: (0, o.Z)(d["nlds-guideline__description"]), children: ["dont" === i ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(l.nv, { className: (0, o.Z)(d["nlds-guideline__badge"], d[`nlds-guideline__badge--${i}`]), children: [(0, s.jsx)(r.Z, { className: d["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: d["nlds-guideline__title"], children: u })] }), (0, s.jsx)(l.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(l.nv, { className: (0, o.Z)(d["nlds-guideline__badge"], d[`nlds-guideline__badge--${i}`]), children: [(0, s.jsx)(t.Z, { className: d["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: d["nlds-guideline__title"], children: h })] }), (0, s.jsx)(l.nv, { children: n })] }), a] }), (0, s.jsx)("div", { className: (0, o.Z)(d["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
