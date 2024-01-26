"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3874],
 {
  5604: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => X, contentTitle: () => S, default: () => D, frontMatter: () => Z, metadata: () => U, toc: () => C });
   var t = i(1527),
    l = i(7214),
    r = i(3324),
    o = i(3460),
    a = i(36);
   function s(e) {
    const n = { input: "input", label: "label", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", "\n", (0, t.jsx)(a.X, { appearance: "do", title: "Naast een telefoonnummer ook een e-mailadres uitvragen.", children: (0, t.jsx)(o.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "telefoon1", children: "Uw telefoonnummer" }), (0, t.jsx)(n.input, { id: "telefoon1", type: "tel", name: "telefoon", autocomplete: "tel" }), (0, t.jsx)(n.label, { for: "email1", children: "Uw e-mailadres" }), (0, t.jsx)(n.input, { id: "email1", type: "email", name: "email", autocomplete: "email" })] }) }) }), "\n", (0, t.jsx)(a.X, { appearance: "dont", title: "Alleen een telefoonnummer uitvragen.", children: (0, t.jsx)(o.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "telefoon2", children: "Uw telefoonnummer (verplicht)" }), (0, t.jsx)(n.input, { id: "telefoon2", type: "tel", name: "telefoon", autocomplete: "tel", "aria-required": "true" })] }) }) })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
   function c(e) {
    const n = { h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "biedt-verschillende-manieren-om-contact-op-te-nemen", children: "Biedt verschillende manieren om contact op te nemen" }), "\n", (0, t.jsx)(n.p, { children: "Vraag niet alleen om contact via een telefoonnummer.\nGebruikers die doof zijn of heel verlegen, stotteren of een vorm van autisme hebben, kunnen soms niet (goed) bellen. Andere gebruikers spreken de Nederlandse taal misschien niet goed, waardoor zij liever niet bellen.\nVoeg een alternatief toe, bijvoorbeeld in de vorm van een e-mailadres of chat functionaliteit." })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { input: "input", label: "label", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", "\n", (0, t.jsx)(a.X, { appearance: "dont", title: "Herhaling ter bevestiging.", children: (0, t.jsx)(o.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "email1", children: "Uw e-mailadres" }), (0, t.jsx)(n.input, { id: "email1", type: "email", name: "email", autocomplete: "email" }), (0, t.jsx)(n.label, { for: "email2", children: "Herhaal uw e-mailadres" }), (0, t.jsx)(n.input, { id: "email2", type: "email", name: "email", autocomplete: "email" })] }) }) })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   function h(e) {
    const n = { a: "a", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "vraag-niet-meerdere-keren-dezelfde-informatie-uit", children: "Vraag niet meerdere keren dezelfde informatie uit" }), "\n", (0, t.jsx)(n.p, { children: "Voorkom herhaling: om zeker te weten dat iemand het juiste e-mailadres heeft ingevuld, wordt in sommige formulieren de vraag twee keer gesteld en dan vergeleken. Dit kan gebruiksvriendelijker!" }), "\n", (0, t.jsx)(n.p, { children: "Als het essentieel is dat de informatie correct is, zijn er deze alternatieven:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "toon dan voor het verzenden nog eens de invoer, bijvoorbeeld op een controlepagina;" }), "\n", (0, t.jsx)(n.li, { children: "(als het om een e-mailadres gaat) stuur een e-mail ter bevestiging om de juistheid van het e-mailadres te controleren." }), "\n"] }), "\n", (0, t.jsxs)(n.p, { children: ["Door gegevens niet meerdere keren binnen een formulier uit te vragen voldoe je aan het WCAG-Succescriterium ", (0, t.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html", children: "3.3.7 Overbodige Invoer" }), " (niveau A)."] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   function j(e) {
    const n = { input: "input", label: "label", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", "\n", (0, t.jsx)(a.X, { appearance: "do", title: "Geef de mogelijkheid korte en lange teksten in te vullen.", children: (0, t.jsx)(o.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "woonplaats1", children: "Uw woonplaats" }), (0, t.jsx)(n.input, { id: "woonplaats1", type: "text", name: "woonplaats", autocomplete: "address-level2" })] }) }) }), "\n", (0, t.jsx)(a.X, { appearance: "dont", title: "Limiteer het maximaal aantal in te voeren tekens.", description: "Mensen uit Gasselterboerveenschemond of Westerhaar-Vriezenveensewijk willen ook graag hun woonplaats invoeren.", children: (0, t.jsx)(o.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "woonplaats2", children: "Uw woonplaats" }), (0, t.jsx)(n.input, { id: "woonplaats2", type: "text", name: "email", maxlength: "20", autocomplete: "address-level2" })] }) }) }), "\n", (0, t.jsx)(a.X, { appearance: "dont", title: "Limiteer het minimaal aantal in te voeren tekens.", description: "Jo, Bo en X willen ook graag hun voornaam invullen.", children: (0, t.jsx)(o.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "voornaam1", children: "Je voornaam" }), (0, t.jsx)(n.input, { id: "voornaam1", type: "text", name: "voornaam", minlength: "3", autocomplete: "given-name" })] }) }) })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j(e);
   }
   function x(e) {
    const n = { h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "geef-invoervelden-geen-minimummaximum-tekstlengte", children: "Geef invoervelden geen minimum/maximum tekstlengte" }), "\n", (0, t.jsx)(n.p, { children: "Soms is het verleidelijk om met minimale of maximale lengtes te werken. Maar in veel gevallen, bijvoorbeeld bij namen, kan dit bijvoorbeeld zorgen dat mensen hun naam niet kunnen invullen. Optimaliseer in dit geval voor uitersten. Er zijn namen van \xe9\xe9n karakter en van vijftig: aannames vermijden is dus het devies." })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
   }
   function f(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f();
   }
   function y(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "check-of-informatie-\xe8cht-nodig-is", children: "Check of informatie \xe8cht nodig is" }), "\n", (0, t.jsx)(n.p, { children: "Kortere formulieren kunnen sneller worden ingevuld. Ga dus per vraag na of deze informatie echt nodig is." }), "\n", (0, t.jsx)(n.p, { children: "Zo is het vaak onnodig om te vragen naar een straatnaam, als huisnummer en postcode al bekend zijn. Is het echt belangrijk om te weten of iemand een man/vrouw/andere is?" }), "\n", (0, t.jsxs)(n.p, { children: ["Is het nodig voor het afhandelen van het formulier dat gebruiker via DigiD inlogt, zodat ook het burgerservicenummer van de verzender bekend wordt? ", (0, t.jsx)(n.a, { href: "https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).", children: "Uitvragen van een BSN" }), " is aan wettelijke richtlijnen gebonden."] })] });
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(y, { ...e }) }) : y(e);
   }
   function w(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", "\n", (0, t.jsx)(a.X, { appearance: "do", title: "Leg het doel uit.", description: "Met uitleg weet de gebruiker waar die aan toe is.", children: (0, t.jsx)(o.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "email", children: "E-mailadres" }), (0, t.jsx)(n.p, { id: "email-description", children: "We hebben uw e-mailadres nodig om een afspraakbevestiging te kunnen sturen." }), (0, t.jsx)(n.input, { "aria-describedby": "email-description", autocomplete: "email", id: "email", type: "email" })] }) }) }), "\n", (0, t.jsx)(a.X, { appearance: "dont", title: "Privacygevoelige informatie vragen zonder uitleg waarom deze gegevens nodig zijn.", children: (0, t.jsx)(o.X, { language: "html", children: () => (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.label, { for: "bsn", children: "Burgerservicenummer" }), (0, t.jsx)(n.input, { id: "bsn", type: "text" })] }) }) })] });
   }
   function z(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(w, { ...e }) }) : w(e);
   }
   function N(e) {
    const n = { h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "leg-uit-waarom-informatie-nodig-is", children: "Leg uit waarom informatie nodig is" }), "\n", (0, t.jsx)(n.p, { children: "Soms lijkt een vraag overbodig, terwijl deze informatie essentieel is voor het verwerken van de gegevens. In zulke gevallen is het een goed idee een korte uitleg toe te voegen, om bijvoorbeeld het doel te beschrijven." }), "\n", (0, t.jsx)(n.p, { children: "Vertel waarom je deze informatie nodig hebt en wat je ermee doet. Uitleg geeft duidelijkheid aan de gebruiker en voorkomt onzekerheid bij het invullen." })] });
   }
   function F(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(N, { ...e }) }) : N(e);
   }
   const Z = { title: "Uit te vragen informatie in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Uit te vragen informatie", pagination_label: "Uit te vragen informatie in een formulier", description: "Richtlijnen voor uit te vragen informatie in een formulier.", slug: "vragen", keywords: ["informatie", "formulier", "design", "code"] },
    S = "Uit te vragen informatie in een formulier",
    U = { id: "richtlijnen/formulieren/alle-richtlijnen/questions", title: "Uit te vragen informatie in een formulier | Richtlijnen | NL Design System", description: "Richtlijnen voor uit te vragen informatie in een formulier.", source: "@site/docs/richtlijnen/formulieren/00-alle-richtlijnen/06-questions.mdx", sourceDirName: "richtlijnen/formulieren/00-alle-richtlijnen", slug: "/richtlijnen/formulieren/alle-richtlijnen/vragen", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/vragen", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/00-alle-richtlijnen/06-questions.mdx", tags: [], version: "current", sidebarPosition: 6, frontMatter: { title: "Uit te vragen informatie in een formulier | Richtlijnen | NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Uit te vragen informatie", pagination_label: "Uit te vragen informatie in een formulier", description: "Richtlijnen voor uit te vragen informatie in een formulier.", slug: "vragen", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Placeholders in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/placeholders" }, next: { title: "Voorkom fouten in een formulier", permalink: "/en/richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker" } },
    X = {},
    C = [];
   function A(e) {
    const n = { h1: "h1", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ["\n", "\n", "\n", (0, t.jsx)(n.h1, { id: "uit-te-vragen-informatie-in-een-formulier", children: "Uit te vragen informatie in een formulier" }), "\n", (0, t.jsx)(n.p, { children: "Welke informatie heb je nodig van je gebruiker? En welke niet? Waarom heb je bepaalde informatie nodig en wat doe je ermee? Overweeg dit zorgvuldig bij het samenstellen van een formulier." }), "\n", (0, t.jsx)(n.p, { children: "Bij het uitvragen van informatie in een formulier zijn de volgende punten belangrijk:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: "Leg uit waarom informatie nodig is." }), "\n", (0, t.jsx)(n.li, { children: "Check of informatie \xe8cht nodig is." }), "\n", (0, t.jsx)(n.li, { children: "Biedt verschillende manieren om contact op te nemen." }), "\n", (0, t.jsx)(n.li, { children: "Vraag niet meerdere keren dezelfde informatie uit." }), "\n", (0, t.jsx)(n.li, { children: "Geef invoervelden geen minimum en/of maximum aantal in te voeren tekens." }), "\n"] }), "\n", (0, t.jsx)(F, {}), "\n", (0, t.jsx)(z, {}), "\n", (0, t.jsx)(_, {}), "\n", (0, t.jsx)(k, {}), "\n", (0, t.jsx)(m, {}), "\n", (0, t.jsx)(d, {}), "\n", (0, t.jsx)(p, {}), "\n", (0, t.jsx)(g, {}), "\n", (0, t.jsx)(b, {}), "\n", (0, t.jsx)(v, {}), "\n", (0, t.jsx)(r.ZP, {})] });
   }
   function D(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(A, { ...e }) }) : A(e);
   }
  },
  3324: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(1527),
    l = i(7214);
   function r(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, t.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  3460: (e, n, i) => {
   i.d(n, { X: () => v });
   var t = i(6532),
    l = i(6259),
    r = i(1910),
    o = i(9560),
    a = i(486),
    s = i(9267),
    d = i(495),
    c = i(959),
    m = i(9995),
    u = i(2950);
   const g = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var h = i(1179),
    p = i(1527);
   const j = (e) => {
     let { target: n } = e;
     const i = n.getAttribute("aria-controls"),
      t = n.ownerDocument.getElementById(i);
     (t.hidden = !t.hidden), n.setAttribute("aria-expanded", !t.hidden), (n.innerText = t.hidden ? "Bekijk code" : "Verberg code");
    },
    v = (e) => {
     let { code: n, copy: i = !1, defaultCollapsed: v = !0, children: x, language: b, designTokens: f } = e,
      k = "function" == typeof x ? x() : x,
      y = "function" == typeof n ? n() : (0, c.isValidElement)(n) ? n : void 0,
      _ = "string" == typeof n ? n : m.uS(y || k),
      [w, z] = (0, c.useState)(_);
     (0, c.useEffect)(() => {
      (async () => {
       (w = await d.ZP.format(_, { parser: b, plugins: [r.Z, o.ZP, a.ZP, s.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), z(w);
      })();
     }, [_]);
     const N = (0, u.Z)();
     return (0, p.jsxs)("div", {
      className: (0, l.Z)(g["nlds-canvas"]),
      children: [
       k && (0, p.jsx)("div", { className: (0, l.Z)(g["nlds-canvas__example"]), children: (0, p.jsx)(t.pu, { className: "voorbeeld-theme", style: f, children: k }) }),
       (0, p.jsx)("div", { className: (0, l.Z)(g["nlds-canvas__toolbar"]), children: (0, p.jsx)(t.zx, { className: (0, l.Z)(g["nlds-canvas__button"], g["nlds-canvas__toggle-code-button"]), appearance: "subtle-button", onClick: j, "aria-expanded": !v, "aria-controls": N, children: v ? "Bekijk code" : "Verberg code" }) }),
       (0, p.jsxs)("div", {
        className: (0, l.Z)(g["nlds-canvas__code-block"], !i && g["nlds-canvas__code-block--user-select-none"]),
        id: N,
        hidden: v,
        children: [
         (0, p.jsx)(h.u, { syntax: b, textContent: w, trim: !0 }),
         i &&
          (0, p.jsx)("div", {
           className: (0, l.Z)(g["nlds-canvas__toolbar"]),
           children: (0, p.jsx)(t.zx, {
            className: (0, l.Z)(g["nlds-canvas__button"], g["nlds-canvas__copy-button"]),
            appearance: "subtle-button",
            onClick: () => {
             navigator.clipboard.writeText(w).catch((e) => console.error("Copy code failed", e));
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
   i.d(n, { u: () => a });
   var t = i(6532),
    l = i(2425);
   i(959);
   const r = {
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
   function a(e) {
    let { lineNumber: n, syntax: i, textContent: a, trim: s } = e,
     d = a;
    return (
     s && (d = d.trim()),
     (0, o.jsx)(l.y$, {
      theme: r,
      code: d,
      language: i || "",
      children: (e) => {
       let { style: i, tokens: l, getLineProps: r, getTokenProps: a } = e;
       return (0, o.jsx)(t.dn, { style: i, children: l.map((e, i) => (0, o.jsxs)("span", { ...r({ line: e }), children: [n && (0, o.jsx)("span", { children: i + 1 }), e.map((e, n) => (0, o.jsx)("span", { ...a({ token: e }) }, n)), "\n"] }, i)) });
      },
     })
    );
   }
  },
  36: (e, n, i) => {
   i.d(n, { X: () => d });
   var t = i(5893),
    l = i(1139),
    r = i(6532),
    o = i(6259);
   i(959);
   const a = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var s = i(1527);
   const d = (e) => {
    let { title: n, appearance: i, description: d, children: c } = e;
    const m = "Doen",
     u = "Niet doen";
    return (0, s.jsxs)("div", { className: (0, o.Z)(a["nlds-guideline"], a[`nlds-guideline--${i}`]), id: n?.toLowerCase().replace(/\s/g, "-"), children: [(0, s.jsxs)("div", { className: (0, o.Z)(a["nlds-guideline__description"]), children: ["dont" === i ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(r.nv, { className: (0, o.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${i}`]), children: [(0, s.jsx)(t.Z, { className: a["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: a["nlds-guideline__title"], children: u })] }), (0, s.jsx)(r.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(r.nv, { className: (0, o.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${i}`]), children: [(0, s.jsx)(l.Z, { className: a["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: a["nlds-guideline__title"], children: m })] }), (0, s.jsx)(r.nv, { children: n })] }), d] }), (0, s.jsx)("div", { className: (0, o.Z)(a["nlds-guideline__example"]), children: c })] });
   };
  },
 },
]);
