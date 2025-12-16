'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [77619],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => l });
   var r = i(68873),
    s = i(98584),
    t = i(86070);
   const l = ({ children: e, conformanceLevel: n, ...i }) => (0, t.jsx)(s.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, t.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => t });
   var r = i(86070),
    s = i(85248);
   const t = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => d });
   var r = i(85248),
    s = i(68873),
    t = i(86070);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + s;
     }
     return i.toString();
    },
    o = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    c = (e) => ({ img: ({ src: n, ...i }) => (0, t.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    a = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: s = '', components: l = {} }) => (0, t.jsx)(r.x, { components: { ...a(n, i), ...c(s), ...l }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => t });
   var r = i(86070),
    s = i(85248);
   const t = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => t });
   var r = i(86070),
    s = i(85248);
   const t = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  55473: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => p, default: () => f, frontMatter: () => j, metadata: () => r, toc: () => v });
   const r = JSON.parse('{"id":"wcag/3.3.03","title":"WCAG-succescriterium 3.3.3 Foutsuggestie","description":"Laat een gebruiker op een toegankelijke manier weten hoe een formulierveld goed in te vullen.","source":"@site/docs/wcag/3.3.03.mdx","sourceDirName":"wcag","slug":"/wcag/3.3.3","permalink":"/wcag/3.3.3","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.3.03.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 3.3.3 Foutsuggestie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3.3.3 Foutsuggestie","pagination_label":"WCAG-succescriterium 3.3.3 Foutsuggestie","description":"Laat een gebruiker op een toegankelijke manier weten hoe een formulierveld goed in te vullen.","slug":"3.3.3","keywords":["WCAG","AA","begrijpelijk","assistentie bij invoer","understandable","input assistance","error suggestion"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 3.3.2 Labels of instructies","permalink":"/wcag/3.3.2"},"next":{"title":"WCAG-succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens)","permalink":"/wcag/3.3.4"}}');
   var s = i(86070),
    t = i(85248),
    l = i(46563),
    o = i(19877),
    c = i(68873),
    a = i(52105),
    d = i(28890),
    h = i(47219);
   function g(e) {
    const n = { p: 'p', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Laat een gebruiker op een toegankelijke manier weten hoe een formulierveld goed in te vullen. Geef hiervoor hints, suggesties en voorbeelden.' }), '\n', (0, s.jsx)(n.p, { children: 'Uitzonderingen hierop zijn bijvoorbeeld wachtwoorden, examenvragen of vragen waarvan het niet mogelijk is te weten hoe de fout te corrigeren.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(g, { ...e }) }) : g(e);
   }
   const j = { title: 'WCAG-succescriterium 3.3.3 Foutsuggestie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.3.3 Foutsuggestie', pagination_label: 'WCAG-succescriterium 3.3.3 Foutsuggestie', description: 'Laat een gebruiker op een toegankelijke manier weten hoe een formulierveld goed in te vullen.', slug: '3.3.3', keywords: ['WCAG', 'AA', 'begrijpelijk', 'assistentie bij invoer', 'understandable', 'input assistance', 'error suggestion'] },
    p = void 0,
    m = {},
    v = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...a.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...d.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function x(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 3.3.3 Foutsuggestie' }), '\n', (0, s.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Formulieren: ', (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Foutmeldingen' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Formulieren: ', (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'Descriptions' }), '.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, s.jsx)(n.p, { children: 'Op GOV.UK:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-message/', children: (0, s.jsx)('span', { lang: 'en', children: 'Error Message' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise', children: (0, s.jsx)('span', { lang: 'en', children: 'Be clear and concise' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://github.com/alphagov/wcag-primer/wiki/3.3.3', children: (0, s.jsx)('span', { lang: 'en', children: 'Wiki 3.3.3 Error Suggestion' }) }), '.'] }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Overige bronnen:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: '/blog/toegankelijke-foutmeldingen-formulieren/', children: 'Toegankelijke foutmeldingen in formulieren' }), ', op het blog van het NL Design System.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.nngroup.com/articles/error-message-guidelines/', children: (0, s.jsx)('span', { lang: 'en', children: 'Error-Message Guidelines' }) }), ' van de Nielsen Norman Group.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/formulieren/vng-online-formulieren/', children: 'Contactformulier voor WMEBV' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/utrecht-online-meldingen', children: 'Onderzoek online meldingen' }), '.'] }), '\n'] }), '\n', (0, s.jsx)(a.Ay, {}), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsx)(n.p, { children: 'Controleer de foutmeldingen in het formulier:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'De foutmeldingen staan zichtbaar, in tekst, boven het formulierveld.' }), '\n', (0, s.jsx)(n.li, { children: 'De foutmeldingen helpen de gebruiker het veld in te vullen. Ze bevatten informatie over wat het probleem is en hoe dit op te lossen.' }), '\n', (0, s.jsx)(n.li, { children: 'Alleen de tekst "Dit is een verplicht veld" is onvoldoende informatie.' }), '\n'] }), '\n', (0, s.jsxs)(n.p, { children: ['Meer informatie en voorbeelden staan op ', (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Foutmeldingen in een formulier' }), '.'] }), '\n', (0, s.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#error-suggestion', children: (0, s.jsx)('span', { lang: 'en', children: '3.3.3 Error Suggestion' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#error-suggestion', children: '3.3.3 Foutsuggestie' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, s.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#error-suggestion', children: (0, s.jsx)('span', { lang: 'en', children: 'Quick Reference 3.3.3 Error Suggestion' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html', children: (0, s.jsx)('span', { lang: 'en', children: 'Understanding SC 3.3.3 Error Suggestion' }) }), '.'] }), '\n'] }), '\n', (0, s.jsx)(c.K7, { children: (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(d.Ay, {}) }) }), '\n', (0, s.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(h.Ay, {}) })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => o });
   var r = i(30758);
   const s = {},
    t = r.createContext(s);
   function l(e) {
    const n = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), r.createElement(t.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => t });
   var r = i(13526),
    s = i(86070);
   const t = ({ children: e, className: n, level: i = 1, suffix: t, ...l }) => (0, s.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...l, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), t && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [t ? ' ' : '', t] })] });
  },
 },
]);
