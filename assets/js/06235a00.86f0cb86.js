'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [9686],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => l });
   var t = i(68873),
    r = i(98584),
    s = i(86070);
   const l = ({ children: e, conformanceLevel: n, ...i }) => (0, s.jsx)(r.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(t.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
   var t = i(85248),
    r = i(68873),
    s = i(86070);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    o = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    d = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    a = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: r = '', components: l = {} }) => (0, s.jsx)(t.x, { components: { ...a(n, i), ...d(r), ...l }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  58872: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => g, default: () => f, frontMatter: () => u, metadata: () => t, toc: () => p });
   const t = JSON.parse('{"id":"wcag/3.2.04","title":"WCAG-succescriterium 3.2.4 Consistente identificatie","description":"Onderdelen die hetzelfde doen moeten ook hetzelfde te herkennen zijn.","source":"@site/docs/wcag/3.2.04.mdx","sourceDirName":"wcag","slug":"/wcag/3.2.4","permalink":"/wcag/3.2.4","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.2.04.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 3.2.4 Consistente identificatie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3.2.4 Consistente identificatie","pagination_label":"WCAG-succescriterium 3.2.4 Consistente identificatie","description":"Onderdelen die hetzelfde doen moeten ook hetzelfde te herkennen zijn.","slug":"3.2.4","keywords":["WCAG","AA","begrijpelijk","voorspelbaar","understandable","predictable","consistent identification"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 3.2.3 Consistente navigatie","permalink":"/wcag/3.2.3"},"next":{"title":"WCAG-succescriterium 3.2.5 Verandering op verzoek","permalink":"/wcag/3.2.5"}}');
   var r = i(86070),
    s = i(85248),
    l = i(46563),
    o = i(19877),
    d = i(68873),
    a = i(52105),
    c = i(28890),
    h = i(47219),
    j = i(87711);
   const u = { title: 'WCAG-succescriterium 3.2.4 Consistente identificatie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.2.4 Consistente identificatie', pagination_label: 'WCAG-succescriterium 3.2.4 Consistente identificatie', description: 'Onderdelen die hetzelfde doen moeten ook hetzelfde te herkennen zijn.', slug: '3.2.4', keywords: ['WCAG', 'AA', 'begrijpelijk', 'voorspelbaar', 'understandable', 'predictable', 'consistent identification'] },
    g = void 0,
    m = {},
    p = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, ...j.RM, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...a.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function k(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 3.2.4 Consistente identificatie' }), '\n', (0, r.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, r.jsxs)('dl', { children: [(0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Acties zijn meer voorspelbaar.' })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Zorg dat functies die herhalen hetzelfde te herkennen zijn.' })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Herhaalde herkenning is extra belangrijk voor mensen met een beperking.' })] })] }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(j.Ay, {}), '\n', (0, r.jsx)(n.p, { children: 'Er zijn verschillende manieren om functies te herkennen. Dit kan door middel van de tekst die je ziet, de naam van het element (die je mogelijk niet ziet), maar ook door kenmerken die geen tekst zijn zoals iconen, kleur of vormgeving.' }), '\n', (0, r.jsx)(n.p, { children: 'Voorbeelden van onderdelen met functies zijn links, buttons, accordions en iconen maar ook labels en buttons in formulieren.' }), '\n', (0, r.jsx)(n.p, { children: 'Praktisch betekent dit:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: "Gebruik dezelfde tekst voor een verzendbutton bij de formulieren in een website. Niet in het ene formulier 'Verzenden' en in een ander formulier 'Versturen'." }), '\n', (0, r.jsx)(n.li, { children: 'Gebruik hetzelfde icoon voor een button om invoer te verwijderen. Niet eerst een prullenbak icoon, terwijl een andere button een kruis als icoon heeft.' }), '\n', (0, r.jsx)(n.li, { children: "Noem de link naar de voorpagina altijd hetzelfde binnen de website. Niet eerst 'Home', dan 'Voorpagina' en dan 'Start'." }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven/', children: 'Geef duidelijk aan wanneer het formulier verzonden gaat worden' })] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/duidelijk-buttontekst/', children: 'Duidelijke buttontekst die beschrijft wat de button doet' })] }), '\n', (0, r.jsxs)(n.li, { children: ['Content: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/linkteksten/', children: 'Toegankelijke linkteksten' })] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Ga door een website en identificeer herhalende onderdelen.' }), '\n', (0, r.jsx)(n.li, { children: 'Controleer of onderdelen die hetzelfde doen, ook hetzelfde herkenbaar zijn. Controleer daarbij zowel de tekst die je ziet, wat in de code staat en visuele kenmerken zoals iconen, kleur en vormgeving.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Deze richtlijn kan ook omgedraaid worden. Zorg ervoor dat onderdelen die hetzelfde te herkennen zijn ook zo veel mogelijk dezelfde functie hebben!' }), '\n', (0, r.jsx)(n.li, { children: 'Namen hoeven niet letterlijk gekopieerd te worden. Soms is het belangrijk dat het patroon herhaald wordt. Pagina 1 heeft misschien een link genaamd "Lees pagina 2". Pagina 2 hoeft niet letterlijk diezelfde link te hebben, maar een link terug naar pagina 1 moet dan wel hetzelfde patroon volgen: "Lees pagina 1". Zo wil je bijvoorbeeld ook overal kiezen voor het werkwoord printen of afdrukken. Dit is beter dan deze werkwoorden door elkaar heen gebruiken.' }), '\n', (0, r.jsxs)(n.li, { children: ['Laat de naam die je ziet overeenkomen met de naam in de code. Dat maakt controleren niet alleen makkelijker, maar is ook praktisch voor ', (0, r.jsx)(n.a, { href: '/wcag/2.5.3/', children: '2.5.3 Label in Naam' })] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(a.Ay, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#consistent-identification', children: (0, r.jsx)('span', { lang: 'en', children: '3.2.4 Consistent Identification' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#consistent-identification', children: '3.2.4 Consistente identificatie' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#consistent-identification', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 3.2.4 Consistent Identification' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 3.2.4 Consistent Identification' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(d.K7, { children: (0, r.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.Ay, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(h.Ay, {}) })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => o });
   var t = i(30758);
   const r = {},
    s = t.createContext(r);
   function l(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
  87711: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [];
   function l(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Onderdelen die hetzelfde doen moeten ook hetzelfde te herkennen zijn.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => s });
   var t = i(13526),
    r = i(86070);
   const s = ({ children: e, className: n, level: i = 1, suffix: s, ...l }) => (0, r.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...l, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
