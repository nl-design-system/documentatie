'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18491],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => l });
   var t = i(68873),
    s = i(98584),
    r = i(86070);
   const l = ({ children: e, conformanceLevel: n, ...i }) => (0, r.jsx)(s.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, r.jsx)(t.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => r });
   var t = i(86070),
    s = i(85248);
   const r = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
   var t = i(85248),
    s = i(68873),
    r = i(86070);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + s;
     }
     return i.toString();
    },
    a = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    o = (e) => ({ img: ({ src: n, ...i }) => (0, r.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: s = '', components: l = {} }) => (0, r.jsx)(t.x, { components: { ...d(n, i), ...o(s), ...l }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => r });
   var t = i(86070),
    s = i(85248);
   const r = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => r });
   var t = i(86070),
    s = i(85248);
   const r = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  63650: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => j, default: () => x, frontMatter: () => u, metadata: () => t, toc: () => v });
   const t = JSON.parse('{"id":"wcag/3.2.06","title":"WCAG-succescriterium 3.2.6 Consistente hulp","description":"Hulp moet op elke pagina binnen de website op dezelfde plek terugkomen.","source":"@site/docs/wcag/3.2.06.mdx","sourceDirName":"wcag","slug":"/wcag/3.2.6","permalink":"/wcag/3.2.6","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.2.06.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 3.2.6 Consistente hulp","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3.2.6 Consistente hulp","pagination_label":"WCAG-succescriterium 3.2.6 Consistente hulp","description":"Hulp moet op elke pagina binnen de website op dezelfde plek terugkomen.","slug":"3.2.6","keywords":["WCAG","A","begrijpelijk","voorspelbaar","understandable","predictable","consistent help"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 3.2.5 Verandering op verzoek","permalink":"/wcag/3.2.5"},"next":{"title":"WCAG-succescriterium 3.3.1 Foutidentificatie","permalink":"/wcag/3.3.1"}}');
   var s = i(86070),
    r = i(85248),
    l = i(46563),
    a = i(19877),
    o = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(47219);
   function p(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, s.jsx)(n.p, { children: 'Hulp moet op elke pagina binnen de website op dezelfde plek terugkomen.' });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
   const u = { title: 'WCAG-succescriterium 3.2.6 Consistente hulp', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.2.6 Consistente hulp', pagination_label: 'WCAG-succescriterium 3.2.6 Consistente hulp', description: 'Hulp moet op elke pagina binnen de website op dezelfde plek terugkomen.', slug: '3.2.6', keywords: ['WCAG', 'A', 'begrijpelijk', 'voorspelbaar', 'understandable', 'predictable', 'consistent help'] },
    j = void 0,
    m = {},
    v = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function k(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', ol: 'ol', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 3.2.6 Consistente hulp' }), '\n', (0, s.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, s.jsxs)('dl', { children: [(0, s.jsxs)('div', { class: 'dl__item', children: [(0, s.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, s.jsx)('dd', { class: 'dl__definition', children: 'Maak het gemakkelijker hulp en ondersteuning te vinden.' })] }), (0, s.jsxs)('div', { class: 'dl__item', children: [(0, s.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, s.jsx)('dd', { class: 'dl__definition', children: "Plaats hulp op dezelfde plek wanneer deze op meerdere pagina's beschikbaar is." })] }), (0, s.jsxs)('div', { class: 'dl__item', children: [(0, s.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, s.jsx)('dd', { class: 'dl__definition', children: 'Mensen kunnen makkelijker hulp vinden als het op dezelfde plek beschikbaar is.' })] })] }), '\n', (0, s.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, s.jsx)(g, {}), '\n', (0, s.jsx)(n.p, { children: 'Denk hierbij aan:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Contactgegevens of een link naar de contactpagina, met bijvoorbeeld een telefoonnummer en e-mailadres.' }), '\n', (0, s.jsx)(n.li, { children: 'Andere manieren van contact opnemen zoals de mogelijkheid tot chatten, een contactformulier of links naar social media.' }), '\n', (0, s.jsx)(n.li, { children: 'Zelfhulpopties, zoals een pagina met veelgestelde vragen.' }), '\n', (0, s.jsx)(n.li, { children: 'Een volledig geautomatiseerde manier van contact zoals een chat.' }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Zijn deze opties beschikbaar, zorg er dan voor dat deze consistent terugkomen. Bijvoorbeeld in de footer-navigatie, boven in de header of in het hoofdmenu. Dan is het voor gebruikers makkelijker om hulp te vinden en te vragen.' }), '\n', (0, s.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Formulieren - Uit te vragen informatie: ', (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/manieren-voor-contact/', children: 'Bied contactmogelijkheden' })] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsxs)(n.ol, { children: ['\n', (0, s.jsx)(n.li, { children: 'Controleer of er hulp of ondersteuning aanwezig is op de pagina. Dit kan directe hulp zijn, of een van de variaties zoals aangegeven bij de kop Uitleg.' }), '\n', (0, s.jsx)(n.li, { children: "Als er hulp of ondersteuning aanwezig is, controleer dan of deze ook op andere pagina's aanwezig is." }), '\n', (0, s.jsx)(n.li, { children: "Als deze ook op andere pagina's aanwezig is, controleer dan of deze overal op dezelfde plek op de pagina beschikbaar is." }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Zorg dat er op elke pagina hulp beschikbaar is.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, s.jsx)(d.Ay, {}), '\n', (0, s.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#consistent-help', children: (0, s.jsx)('span', { lang: 'en', children: '3.2.6 Consistent Help' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#consistent-help', children: '3.2.6 Consistente hulp' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, s.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#consistent-help', children: (0, s.jsx)('span', { lang: 'en', children: 'Quick Reference 3.2.6 Consistent Help' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html', children: (0, s.jsx)('span', { lang: 'en', children: 'Understanding SC 3.2.6 Consistent Help' }) }), '.'] }), '\n'] }), '\n', (0, s.jsx)(o.K7, { children: (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(c.Ay, {}) }) }), '\n', (0, s.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(h.Ay, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(k, { ...e }) }) : k(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => a });
   var t = i(30758);
   const s = {},
    r = t.createContext(s);
   function l(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => r });
   var t = i(13526),
    s = i(86070);
   const r = ({ children: e, className: n, level: i = 1, suffix: r, ...l }) => (0, s.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...l, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
 },
]);
