'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [89886],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => s });
   var t = i(68873),
    r = i(98584),
    a = i(86070);
   const s = ({ children: e, conformanceLevel: n, ...i }) => (0, a.jsx)(r.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, a.jsx)(t.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => a });
   var t = i(86070),
    r = i(85248);
   const a = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
   var t = i(85248),
    r = i(68873),
    a = i(86070);
   const s = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    l = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    o = (e) => ({ img: ({ src: n, ...i }) => (0, a.jsx)('img', { ...i, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: r = '', components: s = {} }) => (0, a.jsx)(t.x, { components: { ...d(n, i), ...o(r), ...s }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => a });
   var t = i(86070),
    r = i(85248);
   const a = [];
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => a });
   var t = i(86070),
    r = i(85248);
   const a = [];
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => s, x: () => l });
   var t = i(30758);
   const r = {},
    a = t.createContext(r);
   function s(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
  87404: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => p, default: () => k, frontMatter: () => u, metadata: () => t, toc: () => v });
   const t = JSON.parse('{"id":"wcag/2.5.02","title":"WCAG-succescriterium 2.5.2 Aanwijzerannulering","description":"Het annuleren van acties die je met een aanwijzer uitvoert is voorspelbaar.","source":"@site/docs/wcag/2.5.02.mdx","sourceDirName":"wcag","slug":"/wcag/2.5.2","permalink":"/wcag/2.5.2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.5.02.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.5.2 Aanwijzerannulering","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.5.2 Aanwijzerannulering","pagination_label":"WCAG-succescriterium 2.5.2 Aanwijzerannulering","description":"Het annuleren van acties die je met een aanwijzer uitvoert is voorspelbaar.","slug":"2.5.2","keywords":["WCAG","A","bedienbaar","input modaliteiten","operable","input modalities","pointer cancellation"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.5.1 Aanwijzergebaren","permalink":"/wcag/2.5.1"},"next":{"title":"WCAG-succescriterium 2.5.3 Label in Naam","permalink":"/wcag/2.5.3"}}');
   var r = i(86070),
    a = i(85248),
    s = i(46563),
    l = i(19877),
    o = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(47219);
   function g(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Het annuleren van acties die je met een aanwijzer uitvoert is voorspelbaar.' });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
   const u = { title: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.2 Aanwijzerannulering', pagination_label: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering', description: 'Het annuleren van acties die je met een aanwijzer uitvoert is voorspelbaar.', slug: '2.5.2', keywords: ['WCAG', 'A', 'bedienbaar', 'input modaliteiten', 'operable', 'input modalities', 'pointer cancellation'] },
    p = void 0,
    m = {},
    v = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function w(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(l.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering' }), '\n', (0, r.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, r.jsxs)('dl', { children: [(0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Verminder acties die per ongeluk zijn.' })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Maak het annuleren van acties voorspelbaar en consistent.' })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, r.jsx)('dd', { class: 'dl__definition', children: (0, r.jsx)(n.p, { children: 'Maakt het voor iedereen gemakkelijker om een actie die per ongeluk was ongedaan te maken.' }) })] })] }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(j, {}), '\n', (0, r.jsxs)(n.p, { children: ['Voor alle acties die je kunt uitvoeren met een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#aanwijzer', children: 'aanwijzer' }), ', moet \xe9\xe9n van de volgende dingen kloppen:'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'De actie wordt niet uitgevoerd door de start van de activering. Bijvoorbeeld: alleen de muisknop indrukken of het scherm aanraken mag nog geen actie uitvoeren.' }), '\n', (0, r.jsx)(n.li, { children: "De actie wordt pas uitgevoerd bij het afmaken van de activering. Daarnaast kan de actie afgebroken worden voor het afmaken, of erna ongedaan gemaakt worden. Bijvoorbeeld: je kunt iets verslepen, maar door het item weer los te laten buiten het doelgebied, verschuift het item weer naar zijn oorspronkelijke plek. Een andere optie om iets weer ongedaan te maken, is door bevestiging te vragen ('Weet u zeker dat...?') of door een knop toe te voegen waarmee de actie weer ongedaan gemaakt kan worden." }), '\n', (0, r.jsx)(n.li, { children: 'Het afmaken van de activering annuleert de actie aan de start. Bijvoorbeeld: als er iets verschijnt zodra een muisknop ingedrukt wordt, maar dit verdwijnt als de knop losgelaten wordt.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Voor alle acties die met een aanwijzer uit te voeren zijn, test of een van de volgende dingen klopt:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'De actie wordt niet uitgevoerd aan de start van de activering.' }), '\n', (0, r.jsx)(n.li, { children: 'De actie wordt pas gedaan bij het afmaken van de activering en kan afgebroken worden.' }), '\n', (0, r.jsx)(n.li, { children: 'De actie wordt pas gedaan bij het afmaken van de activering en kan erna ongedaan gemaakt worden.' }), '\n', (0, r.jsx)(n.li, { children: 'De actie wordt uitgevoerd bij de start van de activering, maar het einde annuleert deze weer.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Bij acties kun je aan veel interactieve onderdelen denken. Deze kunnen relatief simpel zijn, zoals links en buttons, maar ook ingewikkelder zoals sliders en patronen voor drag-and-drop.' }), '\n', (0, r.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik het ', (0, r.jsx)(n.code, { children: 'click' }), '-event. Dit is apparaatonafhankelijk.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(d.Ay, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#pointer-cancellation', children: (0, r.jsx)('span', { lang: 'en', children: '2.5.2 Pointer Cancellation' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#pointer-cancellation', children: '2.5.2 Aanwijzerannulering' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#pointer-cancellation', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 2.5.2 Pointer Cancellation' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.5.2 Pointer Cancellation' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(o.K7, { children: (0, r.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.Ay, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(h.Ay, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(w, { ...e }) }) : w(e);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => a });
   var t = i(13526),
    r = i(86070);
   const a = ({ children: e, className: n, level: i = 1, suffix: a, ...s }) => (0, r.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...s, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), a && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
  },
 },
]);
