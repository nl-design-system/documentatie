"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [13026],
 {
  50686: (e, n, i) => {
   i.r(n), i.d(n, { default: () => g });
   i(50959);
   var o = i(16532),
    t = i(7993),
    a = i(1050),
    r = i(62384);
   const l = { bingo: "bingo_xDhx", bingo__form: "bingo__form_QnVz", bingo__number: "bingo__number_QHsa", bingo__input: "bingo__input_hExE", bingo__label: "bingo__label_Zkip", bingo_items: "bingo_items_sxsC", "bingo-item--checked": "bingo-item--checked_Gvx1" };
   var s = i(5341),
    m = i(48433),
    d = i(11527);
   const c = (e) => {
     let { items: n } = e;
     const i = Array(25)
      .fill(0)
      .map((e, n) => n + 1)
      .filter((e) => 13 !== e)
      .sort(() => (Math.random() > 0.5 ? 1 : -1));
     i.splice(12, 0, "Free"), n.splice(12, 0, "Free");
     const { register: t } = (0, m.cI)();
     return (0, d.jsxs)("div", { className: l.bingo, children: [(0, d.jsx)("div", { className: l.bingo__form, children: i.map((e) => (0, d.jsxs)("div", { className: l.bingo__number, children: [(0, d.jsx)("input", { ...t(`number-${e}`), type: "checkbox", className: l.bingo__input, id: `number-${e}`, defaultChecked: "Free" === e, disabled: "Free" === e }), (0, d.jsx)("label", { htmlFor: `number-${e}`, className: l.bingo__label, children: e })] }, e)) }), (0, d.jsx)("div", { className: l.bingo_items, children: (0, d.jsx)(o.GS, { children: n.map((e) => (0, d.jsx)(o.Ux, { className: (0, s.Z)(l["bingo-item"], "Free" === e && l["bingo-item--checked"]), children: e }, `item-${e}`)) }) })] });
    },
    g = () => {
     const { siteConfig: e } = (0, a.Z)();
     return (0, d.jsx)(t.Z, { title: `${e.title} - homepage`, children: (0, d.jsxs)(o.JH, { children: [(0, d.jsx)(o.nL, { children: "Formulieren Workshop - 23 mei 2023" }), (0, d.jsxs)(o.QI, { children: [(0, d.jsx)(o.AS, { children: (0, d.jsx)(r.Z, { className: "utrecht-link", to: "/bingo/voorbeeld-met-fouten-1", children: "Graffiti formulier met fouten #1" }) }), (0, d.jsx)(o.AS, { children: (0, d.jsx)(r.Z, { className: "utrecht-link", to: "/bingo/voorbeeld-met-fouten-2", children: "Graffiti formulier met fouten #2" }) })] }), (0, d.jsx)(o.XJ, { children: "BINGO!" }), (0, d.jsx)(o.nv, { children: "Speel de veelgemaakte fouten bingo en win!" }), (0, d.jsx)(c, { items: ["Label die geen focus geeft", "Vragen om invoer te herhalen", "Haakje(s) voor afkorting(en)", "Taal niet consistent", "Invoerfout alleen met kleur aangegeven", "Vragen om onnodige informatie", "Naam of e-mailadres zonder autocomplete", "Alle tekstvelden zijn even lang", "Tekstvelden in kolommen of in een tabel", "Foutmelding voor je klaar bent met invoeren", "Geen uitleg waarom e-mail of telefoonnummer nodig zijn", "Je kunt niet van begin tot eind met de Tab-toets door het formulier", "Onduidelijk waar focus is als je met de Tab-toets door het forulier gaat", "Buttons staan aan het eind van de regel", "Moeilijke afkortingen en jargon worden niet uitgelegd", "Belangrijke informatie in een tooltip of placeholder", "E-mailadres user+inbox@example.com is invalide", "Postcode moet per se m\xe9t of z\xf3nder spatie", "Contactgegevens kunnen niet automatisch ingevuld worden met DigiD", "Als je Google Translate gebruikt wordt je invoer vernacheld op de controlepagina", "De naam van het formulier of de stap van het formulier staat niet in de titel van de browser tab of geschiedenis", "Onduidelijke invoerfoutmelding: \u201cInvoer klopt niet! Pas het aan!\u201d", "Maximum lengte te kort: max 6 voor postcode, minder dan 200 voor voornaam of achternaam, maximaal 10 voor telefoonnummer", "Select met 5 opties of minder"] })] }) });
    };
  },
 },
]);
