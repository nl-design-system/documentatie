'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [24237],
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
    o = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    d = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    a = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: l = {} }) => (0, s.jsx)(r.x, { components: { ...a(n, i), ...d(t), ...l }, children: e });
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
  67918: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => m, default: () => x, frontMatter: () => j, metadata: () => r, toc: () => k });
   const r = JSON.parse('{"id":"wcag/2.5.07","title":"WCAG-succescriterium 2.5.7 Sleepbewegingen","description":"Acties waarbij men moet slepen, kunnen ook zonder slepen.","source":"@site/docs/wcag/2.5.07.mdx","sourceDirName":"wcag","slug":"/wcag/2.5.7","permalink":"/wcag/2.5.7","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.5.07.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.5.7 Sleepbewegingen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.5.7 Sleepbewegingen","pagination_label":"WCAG-succescriterium 2.5.7 Sleepbewegingen","description":"Acties waarbij men moet slepen, kunnen ook zonder slepen.","slug":"2.5.7","keywords":["WCAG","AA","bedienbaar","input modaliteiten","slepen","operable","input modalities","dragging movements"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.5.6 Input gelijktijdige invoermechanismen","permalink":"/wcag/2.5.6"},"next":{"title":"WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)","permalink":"/wcag/2.5.8"}}');
   var t = i(86070),
    s = i(85248),
    l = i(46563),
    o = i(19877),
    d = i(68873),
    a = i(52105),
    c = i(28890),
    h = i(47219);
   function g(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Acties waarbij men moet slepen, kunnen ook zonder slepen.' });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
   const j = { title: 'WCAG-succescriterium 2.5.7 Sleepbewegingen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.7 Sleepbewegingen', pagination_label: 'WCAG-succescriterium 2.5.7 Sleepbewegingen', description: 'Acties waarbij men moet slepen, kunnen ook zonder slepen.', slug: '2.5.7', keywords: ['WCAG', 'AA', 'bedienbaar', 'input modaliteiten', 'slepen', 'operable', 'input modalities', 'dragging movements'] },
    m = void 0,
    u = {},
    k = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...a.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function v(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 2.5.7 Sleepbewegingen' }), '\n', (0, t.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, t.jsxs)('dl', { children: [(0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Wees niet afhankelijk van slepen voor acties.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Als men moet slepen, zorg er ook een andere makkelijke manier is.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Niet iedereen kan slepen.' })] })] }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(n.p, { children: 'Slepen is bijvoorbeeld het indrukken van een muisknop op een plek, de muis bewegen, en op een tweede plek weer los laten. Dit kan ook met andere vormen van bediening zoals aanraken.' }), '\n', (0, t.jsx)(n.p, { children: 'Bij slepen kun je denken aan verschillende patronen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Een plek vinden op een kaart.' }), '\n', (0, t.jsx)(n.li, { children: 'Een slider waarmee je voor- en achteruit kan in een video, voor volume, of om aantallen in te voeren.' }), '\n', (0, t.jsx)(n.li, { children: 'Objecten die van volgorde veranderd kunnen worden met een "drag and drop"-patroon.' }), '\n', (0, t.jsx)(n.li, { children: 'Een onderdeel dat kan draaien of schuiven, bijvoorbeeld om een kleur uit te kiezen.' }), '\n', (0, t.jsx)(n.li, { children: 'Notities of andere zelfgeschreven teksten die geordend kunnen worden.' }), '\n', (0, t.jsx)(n.li, { children: 'Sliders en carousels die door slepen in een andere stand gaan.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Voor al deze situaties moet er ook een manier zijn om hetzelfde te doen, maar dan zonder te slepen. Denk bijvoorbeeld aan een kaart met pijltjes knoppen die geactiveerd kunnen worden. Bij een slider kan ook op de balk geklikt worden, en voor gebruiksvriendelijkheid kunnen er ook knoppen toegevoegd worden die hetzelfde doen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Let op: De andere manier moet ook met een ', (0, t.jsx)(n.a, { href: '/woordenlijst/', children: 'aanwijzer' }), ' bediend kunnen worden, een andere manier via het toetsenbord is niet voldoende voor dit succescriterium.'] }), '\n', (0, t.jsx)(n.p, { children: 'Als slepen noodzakelijk is, of het gedrag van het onderdeel is niet door de bouwer bepaald, dan is er een uitzondering.' }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Vind alle plekken op een website waar je iets kan doen.' }), '\n', (0, t.jsx)(n.li, { children: 'Als je iets kan doen door te slepen, controleer dan of het ook zonder slepen kan.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, t.jsxs)(n.p, { children: ['Slepen als enige optie is niet goed. Er moet een makkelijkere manier zijn die ook werkt met bijvoorbeeld muis of aanraking. Denk ook aan andere manieren om een apparaat te bedienen zoals een toetsenbord of screen reader. Dit heb je nodig voor ', (0, t.jsx)(n.a, { href: '/wcag/2.1.1/', children: '2.1.1 Keyboard' }), ' (niveau A).'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(a.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#dragging-movements', children: (0, t.jsx)('span', { lang: 'en', children: '2.5.7 Dragging Movements' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#dragging-movements', children: '2.5.7 Sleepbewegingen' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#dragging-movements', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.5.7 Dragging Movements' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 2.5.7 Dragging Movements' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(d.K7, { children: (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(v, { ...e }) }) : v(e);
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
