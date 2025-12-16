'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [90654],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => l });
   var r = i(68873),
    t = i(98584),
    s = i(86070);
   const l = ({ children: e, conformanceLevel: n, ...i }) => (0, s.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => d });
   var r = i(85248),
    t = i(68873),
    s = i(86070);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    o = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    a = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: l = {} }) => (0, s.jsx)(r.x, { components: { ...c(n, i), ...a(t), ...l }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  61627: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => v, contentTitle: () => p, default: () => k, frontMatter: () => j, metadata: () => r, toc: () => m });
   const r = JSON.parse('{"id":"wcag/3.3.04","title":"WCAG-succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens)","description":"Wanneer een gebruiker een formulier invult met juridische, financi\xeble of persoonlijke gegevens, zorg er dan voor dat gebruiker de ingevulde gegevens kan controleren en corrigeren.","source":"@site/docs/wcag/3.3.04.mdx","sourceDirName":"wcag","slug":"/wcag/3.3.4","permalink":"/wcag/3.3.4","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.3.04.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens)","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3.3.4 Foutpreventie (wettelijk, financieel, gegevens)","pagination_label":"WCAG-succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens)","description":"Wanneer een gebruiker een formulier invult met juridische, financi\xeble of persoonlijke gegevens, zorg er dan voor dat gebruiker de ingevulde gegevens kan controleren en corrigeren.","slug":"3.3.4","keywords":["WCAG","AA","begrijpelijk","assistentie bij invoer","understandable","input assistance","error prevention (legal, finance, data)"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 3.3.3 Foutsuggestie","permalink":"/wcag/3.3.3"},"next":{"title":"WCAG-succescriterium 3.3.5 Hulp","permalink":"/wcag/3.3.5"}}');
   var t = i(86070),
    s = i(85248),
    l = i(46563),
    o = i(19877),
    a = i(68873),
    c = i(52105),
    d = i(28890),
    g = i(47219);
   function h(e) {
    const n = { li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Wanneer een gebruiker een formulier invult met juridische, financi\xeble of persoonlijke gegevens, zorg er dan voor dat gebruiker de ingevulde gegevens kan controleren en corrigeren.' }), '\n', (0, t.jsx)(n.p, { children: 'Bied ten minste \xe9\xe9n van de volgende opties aan:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: 'Omkeerbaar' }), ': Geef de gebruiker de mogelijkheid om de inzending of transactie terug te draaien.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: 'Gecontroleerd' }), ': Controleer tijdens het invullen de gegevens op invoerfouten en geef de gebruiker de mogelijkheid de gegevens te verbeteren.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: 'Bevestigd' }), ': Geef de gebruiker, voor inzending, de mogelijkheid om de ingevulde gegevens te beoordelen, te bevestigen en te verbeteren.'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   const j = { title: 'WCAG-succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.3.4 Foutpreventie (wettelijk, financieel, gegevens)', pagination_label: 'WCAG-succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens)', description: 'Wanneer een gebruiker een formulier invult met juridische, financi\xeble of persoonlijke gegevens, zorg er dan voor dat gebruiker de ingevulde gegevens kan controleren en corrigeren.', slug: '3.3.4', keywords: ['WCAG', 'AA', 'begrijpelijk', 'assistentie bij invoer', 'understandable', 'input assistance', 'error prevention (legal, finance, data)'] },
    p = void 0,
    v = {},
    m = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijn', id: 'gerelateerde-nl-design-system-richtlijn', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...d.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...g.RM];
   function f(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens)' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijn', children: 'Gerelateerde NL Design System-richtlijn' }), '\n', (0, t.jsxs)(n.p, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Richtlijnen voor foutmeldingen in een formulier' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, t.jsx)(n.p, { children: 'Op GOV.UK:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://design-system.service.gov.uk/patterns/check-answers/', children: (0, t.jsx)('span', { lang: 'en', children: 'Help users to Check answers' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://github.com/alphagov/wcag-primer/wiki/3.3.4', children: (0, t.jsx)('span', { lang: 'en', children: 'Wiki 3.3.4 Error Prevention (Legal, Financial, Data)' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/formulieren/vng-online-formulieren/', children: 'Contactformulier voor WMEBV' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(c.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Controleer of de gebruiker de mogelijkheid heeft ingevoerde gegevens te bekijken en te wijzigen voordat deze het formulier verzendt.' }), '\n', (0, t.jsx)(n.p, { children: 'Als deze optie niet beschikbaar is, controleer dan of het mogelijk is een inzending of transactie terug te draaien of te annuleren.' }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data', children: (0, t.jsx)('span', { lang: 'en', children: '3.3.4 Error Prevention (Legal, Financial, Data)' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#error-prevention-legal-financial-data', children: '3.3.4 Foutpreventie (wettelijk, financieel, gegevens)' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#error-prevention-legal-financial-data', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 3.3.4 Error Prevention (Legal, Financial, Data)' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html', children: (0, t.jsxs)('span', { lang: 'en', children: ['Understanding SC 3.3.4', ':Error', ' Prevention (Legal, Financial, Data)'] }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(a.K7, { children: (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(d.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(g.Ay, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => o });
   var r = i(30758);
   const t = {},
    s = r.createContext(t);
   function l(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => s });
   var r = i(13526),
    t = i(86070);
   const s = ({ children: e, className: n, level: i = 1, suffix: s, ...l }) => (0, t.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...l, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
