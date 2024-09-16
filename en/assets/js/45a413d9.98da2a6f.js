'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [13026],
 {
  8845: (e, n, i) => {
   i.r(n), i.d(n, { default: () => b });
   var o = i(90441),
    t = i(87502),
    a = i(93176),
    r = i(46506),
    l = i(4814),
    s = (i(75271), i(51686));
   const m = { bingo: 'bingo_xDhx', bingo__form: 'bingo__form_QnVz', bingo__number: 'bingo__number_QHsa', bingo__input: 'bingo__input_hExE', bingo__label: 'bingo__label_Zkip', bingo_items: 'bingo_items_sxsC', 'bingo-item--checked': 'bingo-item--checked_Gvx1' };
   var d = i(52676);
   const c = (e) => {
    let { items: n } = e;
    const i = Array(25)
     .fill(0)
     .map((e, n) => n + 1)
     .filter((e) => 13 !== e)
     .sort(() => (Math.random() > 0.5 ? 1 : -1));
    i.splice(12, 0, 'Free'), n.splice(12, 0, 'Free');
    const { register: o } = (0, s.cI)();
    return (0, d.jsxs)('div', { className: m.bingo, children: [(0, d.jsx)(a.Z, { children: (0, d.jsx)('meta', { name: 'argos', content: 'false' }) }), (0, d.jsx)('div', { className: m.bingo__form, children: i.map((e) => (0, d.jsxs)('div', { className: m.bingo__number, children: [(0, d.jsx)('input', { ...o(`number-${e}`), type: 'checkbox', className: m.bingo__input, id: `number-${e}`, defaultChecked: 'Free' === e, disabled: 'Free' === e }), (0, d.jsx)('label', { htmlFor: `number-${e}`, className: m.bingo__label, children: e })] }, e)) }), (0, d.jsx)('div', { className: m.bingo_items, children: (0, d.jsx)(r.GS, { children: n.map((e) => (0, d.jsx)(r.Ux, { className: (0, l.Z)(m['bingo-item'], 'Free' === e && m['bingo-item--checked']), children: e }, `item-${e}`)) }) })] });
   };
   var g = i(38889);
   const b = () => {
    const { siteConfig: e } = (0, t.Z)();
    return (0, d.jsx)(g.Z, { title: `${e.title} - homepage`, children: (0, d.jsxs)(r.JH, { children: [(0, d.jsx)(r.nL, { children: 'Formulieren Workshop - 23 mei 2023' }), (0, d.jsxs)(r.QI, { children: [(0, d.jsx)(r.AS, { children: (0, d.jsx)(o.Z, { className: 'utrecht-link', to: '/bingo/voorbeeld-met-fouten-1', children: 'Graffiti formulier met fouten #1' }) }), (0, d.jsx)(r.AS, { children: (0, d.jsx)(o.Z, { className: 'utrecht-link', to: '/bingo/voorbeeld-met-fouten-2', children: 'Graffiti formulier met fouten #2' }) })] }), (0, d.jsx)(r.XJ, { children: 'BINGO!' }), (0, d.jsx)(r.nv, { children: 'Speel de veelgemaakte fouten bingo en win!' }), (0, d.jsx)(c, { items: ['Label die geen focus geeft', 'Vragen om invoer te herhalen', 'Haakje(s) voor afkorting(en)', 'Taal niet consistent', 'Invoerfout alleen met kleur aangegeven', 'Vragen om onnodige informatie', 'Naam of e-mailadres zonder autocomplete', 'Alle tekstvelden zijn even lang', 'Tekstvelden in kolommen of in een tabel', 'Foutmelding voor je klaar bent met invoeren', 'Geen uitleg waarom e-mail of telefoonnummer nodig zijn', 'Je kunt niet van begin tot eind met de Tab-toets door het formulier', 'Onduidelijk waar focus is als je met de Tab-toets door het forulier gaat', 'Buttons staan aan het eind van de regel', 'Moeilijke afkortingen en jargon worden niet uitgelegd', 'Belangrijke informatie in een tooltip of placeholder', 'E-mailadres user+inbox@example.com is invalide', 'Postcode moet per se m\xe9t of z\xf3nder spatie', 'Contactgegevens kunnen niet automatisch ingevuld worden met DigiD', 'Als je Google Translate gebruikt wordt je invoer vernacheld op de controlepagina', 'De naam van het formulier of de stap van het formulier staat niet in de titel van de browser tab of geschiedenis', 'Onduidelijke invoerfoutmelding: \u201cInvoer klopt niet! Pas het aan!\u201d', 'Maximum lengte te kort: max 6 voor postcode, minder dan 200 voor voornaam of achternaam, maximaal 10 voor telefoonnummer', 'Select met 5 opties of minder'] })] }) });
   };
  },
 },
]);
