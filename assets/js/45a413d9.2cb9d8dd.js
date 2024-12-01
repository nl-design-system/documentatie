'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [13026],
 {
  35140: (e, n, i) => {
   i.r(n), i.d(n, { default: () => u });
   var t = i(95071),
    o = i(63304),
    a = i(61460),
    r = i(31916),
    l = i(4814),
    s = i(7035),
    m = i(52676);
   const d = (e) => {
    let { items: n } = e;
    const i = Array(25)
     .fill(0)
     .map((e, n) => n + 1)
     .filter((e) => 13 !== e)
     .sort(() => (Math.random() > 0.5 ? 1 : -1));
    i.splice(12, 0, 'Free'), n.splice(12, 0, 'Free');
    const { register: t } = (0, s.cI)();
    return (0, m.jsxs)('div', { className: 'bingo', children: [(0, m.jsx)(a.Z, { children: (0, m.jsx)('meta', { name: 'argos', content: 'false' }) }), (0, m.jsx)('div', { className: 'bingo__form', children: i.map((e) => (0, m.jsxs)('div', { className: 'bingo__number', children: [(0, m.jsx)('input', { ...t(`number-${e}`), type: 'checkbox', className: 'bingo__input', id: `number-${e}`, defaultChecked: 'Free' === e, disabled: 'Free' === e }), (0, m.jsx)('label', { htmlFor: `number-${e}`, className: 'bingo__label', children: e })] }, e)) }), (0, m.jsx)('div', { className: 'bingo_items', children: (0, m.jsx)(r.GS, { children: n.map((e) => (0, m.jsx)(r.Ux, { className: (0, l.Z)('bingo-item', 'Free' === e && 'bingo-item--checked'), children: e }, `item-${e}`)) }) })] });
   };
   var c = i(36087);
   const u = () => {
    const { siteConfig: e } = (0, o.Z)();
    return (0, m.jsx)(c.Z, { title: `${e.title} - homepage`, children: (0, m.jsxs)(r.JH, { children: [(0, m.jsx)(r.nL, { children: 'Formulieren Workshop - 23 mei 2023' }), (0, m.jsxs)(r.QI, { children: [(0, m.jsx)(r.AS, { children: (0, m.jsx)(t.Z, { className: 'utrecht-link', to: '/bingo/voorbeeld-met-fouten-1', children: 'Graffiti formulier met fouten #1' }) }), (0, m.jsx)(r.AS, { children: (0, m.jsx)(t.Z, { className: 'utrecht-link', to: '/bingo/voorbeeld-met-fouten-2', children: 'Graffiti formulier met fouten #2' }) })] }), (0, m.jsx)(r.XJ, { children: 'BINGO!' }), (0, m.jsx)(r.nv, { children: 'Speel de veelgemaakte fouten bingo en win!' }), (0, m.jsx)(d, { items: ['Label die geen focus geeft', 'Vragen om invoer te herhalen', 'Haakje(s) voor afkorting(en)', 'Taal niet consistent', 'Invoerfout alleen met kleur aangegeven', 'Vragen om onnodige informatie', 'Naam of e-mailadres zonder autocomplete', 'Alle tekstvelden zijn even lang', 'Tekstvelden in kolommen of in een tabel', 'Foutmelding voor je klaar bent met invoeren', 'Geen uitleg waarom e-mail of telefoonnummer nodig zijn', 'Je kunt niet van begin tot eind met de Tab-toets door het formulier', 'Onduidelijk waar focus is als je met de Tab-toets door het forulier gaat', 'Buttons staan aan het eind van de regel', 'Moeilijke afkortingen en jargon worden niet uitgelegd', 'Belangrijke informatie in een tooltip of placeholder', 'E-mailadres user+inbox@example.com is invalide', 'Postcode moet per se m\xe9t of z\xf3nder spatie', 'Contactgegevens kunnen niet automatisch ingevuld worden met DigiD', 'Als je Google Translate gebruikt wordt je invoer vernacheld op de controlepagina', 'De naam van het formulier of de stap van het formulier staat niet in de titel van de browser tab of geschiedenis', 'Onduidelijke invoerfoutmelding: \u201cInvoer klopt niet! Pas het aan!\u201d', 'Maximum lengte te kort: max 6 voor postcode, minder dan 200 voor voornaam of achternaam, maximaal 10 voor telefoonnummer', 'Select met 5 opties of minder'] })] }) });
   };
  },
 },
]);
