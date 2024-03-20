"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3800],
 {
  70592: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var i = t(11527),
    l = t(80877);
   function r(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, i.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/discussions/473", children: "Deel je mening op GitHub" }), " met je suggesties."] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  31903: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => U, contentTitle: () => C, default: () => P, frontMatter: () => F, metadata: () => S, toc: () => X });
   var i = t(11527),
    l = t(80877),
    r = t(70592),
    o = t(73460),
    a = t(30036);
   function s(e) {
    const n = { input: "input", label: "label", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Naast een telefoonnummer ook een e-mailadres uitvragen.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "telefoon1", children: "Uw telefoonnummer" }), (0, i.jsx)(n.input, { id: "telefoon1", type: "tel", name: "telefoon", autocomplete: "tel" }), (0, i.jsx)(n.label, { for: "email1", children: "Uw e-mailadres" }), (0, i.jsx)(n.input, { id: "email1", type: "email", name: "email", autocomplete: "email" })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Alleen een telefoonnummer uitvragen.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "telefoon2", children: "Uw telefoonnummer (verplicht)" }), (0, i.jsx)(n.input, { id: "telefoon2", type: "tel", name: "telefoon", autocomplete: "tel", "aria-required": "true" })] }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
   function d(e) {
    const n = { h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "biedt-verschillende-manieren-om-contact-op-te-nemen", children: "Biedt verschillende manieren om contact op te nemen" }), "\n", (0, i.jsx)(n.p, { children: "Vraag niet alleen om contact via een telefoonnummer.\nGebruikers die doof zijn of heel verlegen, stotteren of een vorm van autisme hebben, kunnen soms niet (goed) bellen. Andere gebruikers spreken de Nederlandse taal misschien niet goed, waardoor zij liever niet bellen.\nVoeg een alternatief toe, bijvoorbeeld in de vorm van een e-mailadres of chat functionaliteit." })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
   }
   function u(e) {
    const n = { input: "input", label: "label", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Herhaling ter bevestiging.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "email1", children: "Uw e-mailadres" }), (0, i.jsx)(n.input, { id: "email1", type: "email", name: "email", autocomplete: "email" }), (0, i.jsx)(n.label, { for: "email2", children: "Herhaal uw e-mailadres" }), (0, i.jsx)(n.input, { id: "email2", type: "email", name: "email", autocomplete: "email" })] }) }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
   function g(e) {
    const n = { a: "a", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "vraag-niet-meerdere-keren-dezelfde-informatie-uit", children: "Vraag niet meerdere keren dezelfde informatie uit" }), "\n", (0, i.jsx)(n.p, { children: "Voorkom herhaling: om zeker te weten dat iemand het juiste e-mailadres heeft ingevuld, wordt in sommige formulieren de vraag twee keer gesteld en dan vergeleken. Dit kan gebruiksvriendelijker!" }), "\n", (0, i.jsx)(n.p, { children: "Als het essentieel is dat de informatie correct is, zijn er deze alternatieven:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsx)(n.li, { children: "toon dan voor het verzenden nog eens de invoer, bijvoorbeeld op een controlepagina;" }), "\n", (0, i.jsx)(n.li, { children: "(als het om een e-mailadres gaat) stuur een e-mail ter bevestiging om de juistheid van het e-mailadres te controleren." }), "\n"] }), "\n", (0, i.jsxs)(n.p, { children: ["Gegevens niet meerdere keren binnen een formulier uit vragen is nodig om te voldoen aan het WCAG-Succescriterium ", (0, i.jsx)(n.a, { href: "https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html", children: "3.3.7 Overbodige Invoer" }), " (niveau A)."] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
   function v(e) {
    const n = { input: "input", label: "label", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Geef de mogelijkheid korte en lange teksten in te vullen.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "woonplaats1", children: "Uw woonplaats" }), (0, i.jsx)(n.input, { id: "woonplaats1", type: "text", name: "woonplaats", autocomplete: "address-level2" })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Limiteer het maximaal aantal in te voeren tekens.", description: "Mensen uit Gasselterboerveenschemond of Westerhaar-Vriezenveensewijk willen ook graag hun woonplaats invoeren.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "woonplaats2", children: "Uw woonplaats" }), (0, i.jsx)(n.input, { id: "woonplaats2", type: "text", name: "email", maxlength: "20", autocomplete: "address-level2" })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Limiteer het minimaal aantal in te voeren tekens.", description: "Jo, Bo en X willen ook graag hun voornaam invullen.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "voornaam1", children: "Je voornaam" }), (0, i.jsx)(n.input, { id: "voornaam1", type: "text", name: "voornaam", minlength: "3", autocomplete: "given-name" })] }) }) })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
   function x(e) {
    const n = { h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "geef-invoervelden-geen-minimummaximum-tekstlengte", children: "Geef invoervelden geen minimum/maximum tekstlengte" }), "\n", (0, i.jsx)(n.p, { children: "Soms is het verleidelijk om met minimale of maximale lengtes te werken. Maar in veel gevallen, bijvoorbeeld bij namen, kan dit bijvoorbeeld zorgen dat mensen hun naam niet kunnen invullen. Optimaliseer in dit geval voor uitersten. Er zijn namen van \xe9\xe9n karakter en van vijftig: aannames vermijden is dus het devies." })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
   function b(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function _(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(b, { ...e }) }) : b();
   }
   function y(e) {
    const n = { a: "a", h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "check-of-informatie-\xe8cht-nodig-is", children: "Check of informatie \xe8cht nodig is" }), "\n", (0, i.jsx)(n.p, { children: "Kortere formulieren kunnen sneller worden ingevuld. Ga dus per vraag na of deze informatie echt nodig is." }), "\n", (0, i.jsx)(n.p, { children: "Zo is het vaak onnodig om te vragen naar een straatnaam, als huisnummer en postcode al bekend zijn. Is het echt belangrijk om te weten of iemand een man/vrouw/andere is?" }), "\n", (0, i.jsxs)(n.p, { children: ["Is het nodig voor het afhandelen van het formulier dat gebruiker via DigiD inlogt, zodat ook het burgerservicenummer van de verzender bekend wordt? ", (0, i.jsx)(n.a, { href: "https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).", children: "Uitvragen van een BSN" }), " is aan wettelijke richtlijnen gebonden."] })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(y, { ...e }) }) : y(e);
   }
   function w(e) {
    const n = { input: "input", label: "label", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(a.X, { appearance: "do", title: "Leg het doel uit.", description: "Met uitleg weet de gebruiker waar die aan toe is.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "email", children: "E-mailadres" }), (0, i.jsx)(n.p, { id: "email-description", children: "We hebben uw e-mailadres nodig om een afspraakbevestiging te kunnen sturen." }), (0, i.jsx)(n.input, { "aria-describedby": "email-description", autocomplete: "email", id: "email", type: "email" })] }) }) }), "\n", (0, i.jsx)(a.X, { appearance: "dont", title: "Privacygevoelige informatie vragen zonder uitleg waarom deze gegevens nodig zijn.", children: (0, i.jsx)(o.X, { language: "html", children: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.label, { for: "bsn", children: "Burgerservicenummer" }), (0, i.jsx)(n.input, { id: "bsn", type: "text" })] }) }) })] });
   }
   function N(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(w, { ...e }) }) : w(e);
   }
   function z(e) {
    const n = { h2: "h2", p: "p", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: "leg-uit-waarom-informatie-nodig-is", children: "Leg uit waarom informatie nodig is" }), "\n", (0, i.jsx)(n.p, { children: "Soms lijkt een vraag overbodig, terwijl deze informatie essentieel is voor het verwerken van de gegevens. In zulke gevallen is het een goed idee een korte uitleg toe te voegen, om bijvoorbeeld het doel te beschrijven." }), "\n", (0, i.jsx)(n.p, { children: "Vertel waarom je deze informatie nodig hebt en wat je ermee doet. Uitleg geeft duidelijkheid aan de gebruiker en voorkomt onzekerheid bij het invullen." })] });
   }
   function Z(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(z, { ...e }) }) : z(e);
   }
   const F = { title: "Uit te vragen informatie in een formulier | Richtlijnen", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Uit te vragen informatie", sidebar_position: 11, pagination_label: "Uit te vragen informatie in een formulier", description: "Richtlijnen voor uit te vragen informatie in een formulier.", slug: "vragen", keywords: ["informatie", "formulier", "design", "code"] },
    C = "Uit te vragen informatie in een formulier",
    S = { id: "richtlijnen/formulieren/questions", title: "Uit te vragen informatie in een formulier | Richtlijnen", description: "Richtlijnen voor uit te vragen informatie in een formulier.", source: "@site/docs/richtlijnen/formulieren/questions.mdx", sourceDirName: "richtlijnen/formulieren", slug: "/richtlijnen/formulieren/vragen", permalink: "/en/richtlijnen/formulieren/vragen", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions.mdx", tags: [], version: "current", sidebarPosition: 11, frontMatter: { title: "Uit te vragen informatie in een formulier | Richtlijnen", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Uit te vragen informatie", sidebar_position: 11, pagination_label: "Uit te vragen informatie in een formulier", description: "Richtlijnen voor uit te vragen informatie in een formulier.", slug: "vragen", keywords: ["informatie", "formulier", "design", "code"] }, sidebar: "richtlijnen", previous: { title: "Zorg dat het formulier werkt met een toetsenbord", permalink: "/en/richtlijnen/formulieren/toetsenbord" }, next: { title: "Visueel ontwerp van formulieren", permalink: "/en/richtlijnen/formulieren/visueel-ontwerp" } },
    U = {},
    X = [];
   function B(e) {
    const n = { h1: "h1", li: "li", p: "p", ul: "ul", ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ["\n", "\n", "\n", (0, i.jsx)(n.h1, { id: "uit-te-vragen-informatie-in-een-formulier", children: "Uit te vragen informatie in een formulier" }), "\n", (0, i.jsx)(n.p, { children: "Welke informatie heb je nodig van je gebruiker? En welke niet? Waarom heb je bepaalde informatie nodig en wat doe je ermee? Overweeg dit zorgvuldig bij het samenstellen van een formulier." }), "\n", (0, i.jsx)(n.p, { children: "Bij het uitvragen van informatie in een formulier zijn de volgende punten belangrijk:" }), "\n", (0, i.jsxs)(n.ul, { children: ["\n", (0, i.jsx)(n.li, { children: "Leg uit waarom informatie nodig is." }), "\n", (0, i.jsx)(n.li, { children: "Check of informatie \xe8cht nodig is." }), "\n", (0, i.jsx)(n.li, { children: "Biedt verschillende manieren om contact op te nemen." }), "\n", (0, i.jsx)(n.li, { children: "Vraag niet meerdere keren dezelfde informatie uit." }), "\n", (0, i.jsx)(n.li, { children: "Geef invoervelden geen minimum en/of maximum aantal in te voeren tekens." }), "\n"] }), "\n", (0, i.jsx)(Z, {}), "\n", (0, i.jsx)(N, {}), "\n", (0, i.jsx)(k, {}), "\n", (0, i.jsx)(_, {}), "\n", (0, i.jsx)(m, {}), "\n", (0, i.jsx)(c, {}), "\n", (0, i.jsx)(h, {}), "\n", (0, i.jsx)(p, {}), "\n", (0, i.jsx)(f, {}), "\n", (0, i.jsx)(j, {}), "\n", (0, i.jsx)(r.ZP, {})] });
   }
   function P(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(B, { ...e }) }) : B(e);
   }
  },
  73460: (e, n, t) => {
   t.d(n, { X: () => x });
   var i = t(16532),
    l = t(86259),
    r = t(28942),
    o = t(76653),
    a = t(33691),
    s = t(99821),
    c = t(64663),
    d = t(50959),
    m = t(9995);
   const u = { "nlds-canvas": "nlds-canvas_h8Yz", "nlds-canvas--distanced": "nlds-canvas--distanced_BU4b", "nlds-canvas__example": "nlds-canvas__example_sS53", "nlds-canvas__example-document": "nlds-canvas__example-document_cR3e", "nlds-canvas__code-block--user-select-none": "nlds-canvas__code-block--user-select-none_Jv1j", "nlds-canvas__toolbar": "nlds-canvas__toolbar_AMcV", "nlds-canvas__button": "nlds-canvas__button_cHBw" };
   var p = t(41179),
    g = t(11527);
   const h = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(i.Tg, { className: u["nlds-canvas__example-surface"], children: (0, g.jsx)(i.BB, { className: (0, l.Z)("utrecht-document--surface", u["nlds-canvas__example-document"]), children: (0, g.jsx)(i.nv, { className: u["nlds-canvas__example-paragraph"], children: n }) }) });
   };
   h.displayName = "ParagraphContainer";
   const v = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(i.Tg, { className: u["nlds-canvas__example-surface"], children: (0, g.jsx)(i.BB, { className: (0, l.Z)("utrecht-document--surface", u["nlds-canvas__example-document"]), children: n }) });
   };
   v.displayName = "DocumentContainer";
   const j = (e) => {
    let { children: n } = e;
    return (0, g.jsx)(i.Tg, { className: u["nlds-canvas__example-surface"], children: n });
   };
   j.displayName = "SurfaceContainer";
   const x = (e) => {
    let { code: n, copy: t = !1, defaultExpandedCode: x = !1, displayCode: f = !0, children: b, container: _ = "document", language: y, designTokens: k } = e,
     w = "function" == typeof b ? b() : b,
     N = "function" == typeof n ? n() : (0, d.isValidElement)(n) ? n : void 0,
     z = "string" == typeof n ? n : m.uS(N || w),
     [Z, F] = (0, d.useState)(z),
     [C, S] = (0, d.useState)(x);
    (0, d.useEffect)(() => {
     (async () => {
      (Z = await c.ZP.format(z, { parser: y, plugins: [r.Z, o.ZP, a.ZP, s.ZP], semi: !1, singleAttributePerLine: !0, embeddedLanguageFormatting: "off", htmlWhitespaceSensitivity: "ignore" })), F(Z);
     })();
    }, [z]);
    const U = (0, d.useId)();
    let X = d.Fragment;
    return (
     "paragraph" === _ ? (X = h) : "document" === _ ? (X = v) : "surface" === _ && (X = j),
     (0, g.jsxs)("div", {
      className: (0, l.Z)(u["nlds-canvas"]),
      children: [
       w && (0, g.jsx)("div", { className: (0, l.Z)(u["nlds-canvas__example"]), children: (0, g.jsx)("div", { className: "voorbeeld-theme", style: k, children: (0, g.jsx)(X, { children: (0, g.jsx)(i.pu, { children: w }) }) }) }),
       f &&
        (0, g.jsx)("div", {
         className: (0, l.Z)(u["nlds-canvas__toolbar"]),
         children: (0, g.jsx)(i.zx, {
          className: (0, l.Z)(u["nlds-canvas__button"], u["nlds-canvas__toggle-code-button"]),
          appearance: "subtle-button",
          onClick: () => {
           S(!C);
          },
          "aria-expanded": C,
          "aria-controls": U,
          children: C ? "Verberg code" : "Bekijk code",
         }),
        }),
       f &&
        (0, g.jsxs)("div", {
         className: (0, l.Z)(u["nlds-canvas__code-block"], !t && u["nlds-canvas__code-block--user-select-none"]),
         id: U,
         hidden: !C,
         children: [
          (0, g.jsx)(p.u, { syntax: y, textContent: Z, trim: !0 }),
          t &&
           (0, g.jsx)("div", {
            className: (0, l.Z)(u["nlds-canvas__toolbar"]),
            children: (0, g.jsx)(i.zx, {
             className: (0, l.Z)(u["nlds-canvas__button"], u["nlds-canvas__copy-button"]),
             appearance: "subtle-button",
             onClick: () => {
              navigator.clipboard.writeText(Z).catch((e) => console.error("Copy code failed", e));
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
  41179: (e, n, t) => {
   t.d(n, { u: () => a });
   var i = t(16532),
    l = t(2425);
   t(50959);
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
   var o = t(11527);
   function a(e) {
    let { lineNumber: n, syntax: t, textContent: a, trim: s } = e,
     c = a;
    return (
     s && (c = c.trim()),
     (0, o.jsx)(l.y$, {
      theme: r,
      code: c,
      language: t || "",
      children: (e) => {
       let { style: t, tokens: l, getLineProps: r, getTokenProps: a } = e;
       return (0, o.jsx)(i.dn, { style: t, children: l.map((e, t) => (0, o.jsxs)("span", { ...r({ line: e }), children: [n && (0, o.jsx)("span", { children: t + 1 }), e.map((e, n) => (0, o.jsx)("span", { ...a({ token: e }) }, n)), "\n"] }, t)) });
      },
     })
    );
   }
  },
  30036: (e, n, t) => {
   t.d(n, { X: () => c });
   var i = t(9842),
    l = t(91406),
    r = t(16532),
    o = t(86259);
   t(50959);
   const a = { "nlds-guideline": "nlds-guideline_tEmj", "nlds-guideline__description": "nlds-guideline__description_Rmd2", "nlds-guideline__example": "nlds-guideline__example_Npzh", "nlds-guideline__icon": "nlds-guideline__icon_CMAh", "nlds-guideline__title": "nlds-guideline__title_Kp8d", "nlds-guideline__badge": "nlds-guideline__badge_cDbY", "nlds-guideline__badge--dont": "nlds-guideline__badge--dont_w4Jz", "nlds-guideline__badge--do": "nlds-guideline__badge--do_wylG" };
   var s = t(11527);
   const c = (e) => {
    let { title: n, appearance: t, description: c, children: d, figure: m } = e;
    const u = "Doen",
     p = "Niet doen",
     g = m ? "figure" : "div",
     h = m ? "figcaption" : "div";
    return (0, s.jsxs)(g, { className: (0, o.Z)(a["nlds-guideline"], a[`nlds-guideline--${t}`]), id: "string" == typeof n ? n?.toLowerCase().replace(/\s/g, "-") : void 0, children: [(0, s.jsxs)(h, { className: (0, o.Z)(a["nlds-guideline__description"]), children: ["dont" === t ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(r.nv, { className: (0, o.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${t}`]), children: [(0, s.jsx)(i.Z, { className: a["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: a["nlds-guideline__title"], children: p })] }), (0, s.jsx)(r.nv, { children: n })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(r.nv, { className: (0, o.Z)(a["nlds-guideline__badge"], a[`nlds-guideline__badge--${t}`]), children: [(0, s.jsx)(l.Z, { className: a["nlds-guideline__icon"] }), (0, s.jsx)("span", { className: a["nlds-guideline__title"], children: u })] }), (0, s.jsx)(r.nv, { children: n })] }), c] }), (0, s.jsx)("div", { className: (0, o.Z)(a["nlds-guideline__example"]), children: d })] });
   };
  },
  80877: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => o });
   var i = t(50959);
   const l = {},
    r = i.createContext(l);
   function o(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(l) : e.components || l) : o(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
