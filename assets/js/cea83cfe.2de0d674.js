'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [28057],
 {
  78734: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => o, x: () => l });
   var r = i(30758);
   const t = {},
    s = r.createContext(t);
   function o(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
  94382: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => d, default: () => g, frontMatter: () => a, metadata: () => r, toc: () => m });
   const r = JSON.parse('{"id":"richtlijnen/formulieren/confirmation/success/README","title":"Vermeld dat het formulier succesvol is verzonden \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen","description":"Richtlijnen voor vermelding na succesvol verzenden.","source":"@site/docs/richtlijnen/formulieren/confirmation/1-success/README.mdx","sourceDirName":"richtlijnen/formulieren/confirmation/1-success","slug":"/richtlijnen/formulieren/bevestigingspagina/succesmelding","permalink":"/richtlijnen/formulieren/bevestigingspagina/succesmelding","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/confirmation/1-success/README.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Vermeld dat het formulier succesvol is verzonden \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Duidelijke succesmelding","sidebar_position":7,"pagination_label":"Duidelijke succesmelding","description":"Richtlijnen voor vermelding na succesvol verzenden.","slug":"/richtlijnen/formulieren/bevestigingspagina/succesmelding","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Contact opnemen","permalink":"/richtlijnen/formulieren/bevestigingspagina/contact-bij-vragen"},"next":{"title":"Descriptions in een formulier","permalink":"/richtlijnen/formulieren/descriptions/"}}');
   var t = i(86070),
    s = i(85248),
    o = i(78734);
   function l(e) {
    const n = { a: 'a', blockquote: 'blockquote', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'vermeld-dat-het-formulier-succesvol-is-verzonden', children: 'Vermeld dat het formulier succesvol is verzonden' }) }), '\n', (0, t.jsx)(n.p, { children: 'Geef de gebruiker de zekerheid dat het formulier en de inhoud ervan succesvol zijn verzonden. Dat voorkomt onzekerheid: heb ik het goed gedaan, is de informatie wel verstuurd?' }), '\n', (0, t.jsx)(n.p, { children: 'Geef duidelijk aan dat het formulier succesvol is verzonden door een zichtbare melding op de website.' }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.blockquote, { children: ['\n', (0, t.jsxs)(n.p, { children: ['"Bedankt voor uw aanvraag. Er is een e-mail ter bevestiging gestuurd naar ', (0, t.jsx)(n.a, { href: 'mailto:gebruiker@voorbeeld.com', children: 'gebruiker@voorbeeld.com' }), '. Heeft u geen e-mail ontvangen, neem dan contact op."'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Waarbij contact bijvoorbeeld linkt naar de contactpagina van de website, of vermeld concrete contactgegevens.' }), '\n', (0, t.jsx)(n.p, { children: 'Geef de gebruiker zekerheid welke informatie is verstuurd. Dit kan bijvoorbeeld in een bevestigingsmail waarin de ingevulde informatie wordt herhaald of een verwijzing naar de "Mijn Omgeving", waar de informatie is terug te vinden.' }), '\n', (0, t.jsx)(n.p, { children: 'Alleen de melding geven "Uw formulier is verzonden", of automatisch naar de voorpagina gaan is onvoldoende.' }), '\n', (0, t.jsxs)(n.p, { children: ['Goede feedback is geen vereiste om te voldoen aan WCAG, maar wordt wel geadviseerd in ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Techniques/general/G199.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Technique G199: Providing success feedback when data is submitted successfully' }) }), '.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
   const a = { title: 'Vermeld dat het formulier succesvol is verzonden \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Duidelijke succesmelding', sidebar_position: 7, pagination_label: 'Duidelijke succesmelding', description: 'Richtlijnen voor vermelding na succesvol verzenden.', slug: '/richtlijnen/formulieren/bevestigingspagina/succesmelding', keywords: ['labels', 'formulier', 'design', 'code'] },
    d = void 0,
    u = {},
    m = [...o.RM];
   function h(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(o.Ay, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h();
   }
  },
 },
]);
