"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3026],
 {
  92319: (e, n, t) => {
   t.r(n), t.d(n, { default: () => d });
   var o = t(67294),
    a = t(65663),
    i = t(23770),
    l = t(52263),
    r = t(39960),
    m = t(87462);
   const s = { bingo: "bingo_xDhx", bingo__form: "bingo__form_QnVz", bingo__number: "bingo__number_QHsa", bingo__input: "bingo__input_hExE", bingo__label: "bingo__label_Zkip", bingo_items: "bingo_items_sxsC", "bingo-item--checked": "bingo-item--checked_Gvx1" };
   var c = t(86010),
    g = t(87536);
   const u = (e) => {
     let { items: n } = e;
     const t = Array(25)
      .fill(0)
      .map((e, n) => n + 1)
      .filter((e) => 13 !== e)
      .sort(() => (Math.random() > 0.5 ? 1 : -1));
     t.splice(12, 0, "Free"), n.splice(12, 0, "Free");
     const { register: i } = (0, g.cI)();
     return o.createElement(
      "div",
      { className: s.bingo },
      o.createElement(
       "div",
       { className: s.bingo__form },
       t.map((e) => o.createElement("div", { className: s.bingo__number, key: e }, o.createElement("input", (0, m.Z)({}, i(`number-${e}`), { type: "checkbox", className: s.bingo__input, id: `number-${e}`, defaultChecked: "Free" === e, disabled: "Free" === e })), o.createElement("label", { htmlFor: `number-${e}`, className: s.bingo__label }, e)))
      ),
      o.createElement(
       "div",
       { className: s.bingo_items },
       o.createElement(
        a.GS,
        null,
        n.map((e) => o.createElement(a.Ux, { key: `item-${e}`, className: (0, c.Z)(s["bingo-item"], "Free" === e && s["bingo-item--checked"]) }, e))
       )
      )
     );
    },
    d = () => {
     const { siteConfig: e } = (0, l.Z)();
     return o.createElement(i.Z, { title: `${e.title} - homepage` }, o.createElement(a.JH, null, o.createElement(a.nL, null, "Formulieren Workshop - 23 mei 2023"), o.createElement(a.QI, null, o.createElement(a.AS, null, o.createElement(r.Z, { className: "utrecht-link", to: "/bingo/voorbeeld-met-fouten-1" }, "Graffiti formulier met fouten #1")), o.createElement(a.AS, null, o.createElement(r.Z, { className: "utrecht-link", to: "/bingo/voorbeeld-met-fouten-2" }, "Graffiti formulier met fouten #2"))), o.createElement(a.XJ, null, "BINGO!"), o.createElement(a.nv, null, "Speel de veelgemaakte fouten bingo en win!"), o.createElement(u, { items: ["Label die geen focus geeft", "Vragen om invoer te herhalen", "Haakje(s) voor afkorting(en)", "Taal niet consistent", "Invoerfout alleen met kleur aangegeven", "Vragen om onnodige informatie", "Naam of e-mailadres zonder autocomplete", "Alle tekstvelden zijn even lang", "Tekstvelden in kolommen of in een tabel", "Foutmelding voor je klaar bent met invoeren", "Geen uitleg waarom e-mail of telefoonnummer nodig zijn", "Je kunt niet van begin tot eind met de Tab-toets door het formulier", "Onduidelijk waar focus is als je met de Tab-toets door het forulier gaat", "Buttons staan aan het eind van de regel", "Moeilijke afkortingen en jargon worden niet uitgelegd", "Belangrijke informatie in een tooltip of placeholder", "E-mailadres user+inbox@example.com is invalide", "Postcode moet per se m\xe9t of z\xf3nder spatie", "Contactgegevens kunnen niet automatisch ingevuld worden met DigiD", "Als je Google Translate gebruikt wordt je invoer vernacheld op de controlepagina", "De naam van het formulier of de stap van het formulier staat niet in de titel van de browser tab of geschiedenis", "Onduidelijke invoerfoutmelding: \u201cInvoer klopt niet! Pas het aan!\u201d", "Maximum lengte te kort: max 6 voor postcode, minder dan 200 voor voornaam of achternaam, maximaal 10 voor telefoonnummer", "Select met 5 opties of minder"] })));
    };
  },
 },
]);
