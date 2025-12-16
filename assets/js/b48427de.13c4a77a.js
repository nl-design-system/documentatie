'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [39377],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => l });
   var r = i(68873),
    t = i(98584),
    s = i(86070);
   const l = ({ children: e, conformanceLevel: n, ...i }) => (0, s.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
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
    a = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    o = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: l = {} }) => (0, s.jsx)(r.x, { components: { ...d(n, i), ...o(t), ...l }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => a });
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
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
  88428: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => p, contentTitle: () => m, default: () => x, frontMatter: () => j, metadata: () => r, toc: () => f });
   const r = JSON.parse('{"id":"wcag/3.3.01","title":"WCAG-succescriterium 3.3.1 Foutidentificatie","description":"Laat een gebruiker weten als er fouten zijn bij het invullen van een formulier.","source":"@site/docs/wcag/3.3.01.mdx","sourceDirName":"wcag","slug":"/wcag/3.3.1","permalink":"/wcag/3.3.1","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.3.01.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 3.3.1 Foutidentificatie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3.3.1 Foutidentificatie","pagination_label":"WCAG-succescriterium 3.3.1 Foutidentificatie","description":"Laat een gebruiker weten als er fouten zijn bij het invullen van een formulier.","slug":"3.3.1","keywords":["WCAG","A","begrijpelijk","assistentie bij invoer","understandable","input assistance","error identification"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 3.2.6 Consistente hulp","permalink":"/wcag/3.2.6"},"next":{"title":"WCAG-succescriterium 3.3.2 Labels of instructies","permalink":"/wcag/3.3.2"}}');
   var t = i(86070),
    s = i(85248),
    l = i(46563),
    a = i(19877),
    o = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(47219);
   function u(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Laat een gebruiker weten als er fouten zijn bij het invullen van een formulier. Vertel duidelijk en toegankelijk wanneer een formulierveld niet, of niet goed is ingevuld.' });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const j = { title: 'WCAG-succescriterium 3.3.1 Foutidentificatie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.3.1 Foutidentificatie', pagination_label: 'WCAG-succescriterium 3.3.1 Foutidentificatie', description: 'Laat een gebruiker weten als er fouten zijn bij het invullen van een formulier.', slug: '3.3.1', keywords: ['WCAG', 'A', 'begrijpelijk', 'assistentie bij invoer', 'understandable', 'input assistance', 'error identification'] },
    m = void 0,
    p = {},
    f = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function v(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 3.3.1 Foutidentificatie' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(g, {}), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Foutmeldingen' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'Descriptions' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, t.jsx)(n.p, { children: 'Op GOV.UK:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-message/', children: (0, t.jsx)('span', { lang: 'en', children: 'Error Message' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-summary/', children: (0, t.jsx)('span', { lang: 'en', children: 'Error summary' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise', children: (0, t.jsx)('span', { lang: 'en', children: 'Be clear and concise' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://github.com/alphagov/wcag-primer/wiki/3.3.1', children: (0, t.jsx)('span', { lang: 'en', children: '3.3.1 Error Identification' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Overige bronnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/blog/toegankelijke-foutmeldingen-formulieren/', children: 'Toegankelijke foutmeldingen in formulieren' }), ', op het blog van het NL Design System.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-live-validation-and-what-to-do-instead/', children: (0, t.jsx)('span', { lang: 'en', children: 'The problem with live validation and what to do instead van Adam Silver' }) }), ' van Adam Silver.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://adrianroselli.com/2019/02/avoid-default-field-validation.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Avoid Default Field Validation' }) }), ' van Adrian Roselli.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/formulieren/vng-online-formulieren/', children: 'Contactformulier voor WMEBV' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/utrecht-online-meldingen', children: 'Onderzoek online meldingen' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(d.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsxs)(n.p, { children: ['Dit is een samenvatting van de richtlijnen in ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Foutmeldingen in een formulier' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: 'Controleer het formulier op foutmeldingen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'De foutmelding mag niet al zichtbaar als de gebruiker nog aan het typen is.' }), '\n', (0, t.jsx)(n.li, { children: 'De foutmelding wordt niet automatisch door de browser gegenereerd.' }), '\n', (0, t.jsx)(n.li, { children: 'De foutmelding staat zichtbaar, in tekst, boven het formulierveld.' }), '\n', (0, t.jsx)(n.li, { children: 'De foutmelding staat niet over andere informatie heen.' }), '\n', (0, t.jsx)(n.li, { children: 'De tekst van foutmelding heeft dezelfde vergroting en tekstafstand als de rest van de pagina' }), '\n', (0, t.jsx)(n.li, { children: 'De tekst van de foutmelding is duidelijk en niet algemeen. Dus niet "Dit veld is verplicht", maar bijvoorbeeld "Vul uw achternaam in".' }), '\n', (0, t.jsxs)(n.li, { children: ['Het is duidelijk voor gebruikers van ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' wanneer een veld niet goed is ingevuld, bijvoorbeeld met ', (0, t.jsx)(n.code, { children: 'aria-invalid' }), '.'] }), '\n', (0, t.jsx)(n.li, { children: 'De tekst van de foutmelding wordt goed voorgelezen door een screenreader.' }), '\n', (0, t.jsx)(n.li, { children: 'Wanneer de gebruiker een formulier verzend en er dan nog foutmeldingen zijn, staat er boven het formulier een samenvatting van alle foutmeldingen.' }), '\n', (0, t.jsxs)(n.li, { children: ['Is er een page-reload na submit van het formulier, dan staat er in het ', (0, t.jsx)(n.code, { children: '<title>' }), '-element in de ', (0, t.jsx)(n.code, { children: '<head>' }), ' dat het formulier fouten bevat.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#error-identification', children: (0, t.jsx)('span', { lang: 'en', children: '3.3.1 Error Identification' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#error-identification', children: '3.3.1 Foutidentificatie' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#error-identification', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 3.3.1 Error Identification' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 3.3.1 Error Identification' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(o.K7, { children: (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(v, { ...e }) }) : v(e);
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
