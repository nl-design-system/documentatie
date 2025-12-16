'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [9198],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => l });
   var r = i(68873),
    s = i(98584),
    t = i(86070);
   const l = ({ children: e, conformanceLevel: n, ...i }) => (0, t.jsx)(s.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, t.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => t });
   var r = i(86070),
    s = i(85248);
   const t = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
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
    a = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    d = (e) => ({ img: ({ src: n, ...i }) => (0, t.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    o = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: s = '', components: l = {} }) => (0, t.jsx)(r.x, { components: { ...o(n, i), ...d(s), ...l }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => t });
   var r = i(86070),
    s = i(85248);
   const t = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => t });
   var r = i(86070),
    s = i(85248);
   const t = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => a });
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
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), r.createElement(t.Provider, { value: n }, e.children);
   }
  },
  95061: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => j, contentTitle: () => p, default: () => x, frontMatter: () => g, metadata: () => r, toc: () => v });
   const r = JSON.parse('{"id":"wcag/2.4.05","title":"WCAG-succescriterium 2.4.5 Meerdere manieren","description":"Een webpagina is op meerdere manieren te vinden.","source":"@site/docs/wcag/2.4.05.mdx","sourceDirName":"wcag","slug":"/wcag/2.4.5","permalink":"/wcag/2.4.5","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.05.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.4.5 Meerdere manieren","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.4.5 Meerdere manieren","pagination_label":"WCAG-succescriterium 2.4.5 Meerdere manieren","description":"Een webpagina is op meerdere manieren te vinden.","slug":"2.4.5","keywords":["WCAG","AA","bedienbaar","navigeerbaar","operable","navigable","multiple ways"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.4.4 Linkdoel (in context)","permalink":"/wcag/2.4.4"},"next":{"title":"WCAG-succescriterium 2.4.6 Koppen en labels","permalink":"/wcag/2.4.6"}}');
   var s = i(86070),
    t = i(85248),
    l = i(46563),
    a = i(19877),
    d = i(68873),
    o = i(52105),
    c = i(28890),
    h = i(47219);
   function u(e) {
    const n = { p: 'p', ...(0, t.R)(), ...e.components };
    return (0, s.jsx)(n.p, { children: 'Een webpagina is op meerdere manieren te vinden.' });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'WCAG-succescriterium 2.4.5 Meerdere manieren', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.5 Meerdere manieren', pagination_label: 'WCAG-succescriterium 2.4.5 Meerdere manieren', description: 'Een webpagina is op meerdere manieren te vinden.', slug: '2.4.5', keywords: ['WCAG', 'AA', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'multiple ways'] },
    p = void 0,
    j = {},
    v = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...o.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function k(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 2.4.5 Meerdere manieren' }), '\n', (0, s.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, s.jsxs)('dl', { children: [(0, s.jsxs)('div', { class: 'dl__item', children: [(0, s.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, s.jsx)('dd', { class: 'dl__definition', children: 'Gebruiker kunnen op meerdere manier bij inhoud komen.' })] }), (0, s.jsxs)('div', { class: 'dl__item', children: [(0, s.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, s.jsx)('dd', { class: 'dl__definition', children: 'Zorg voor minstens 2 manieren om bij dezelfde inhoud te komen.' })] }), (0, s.jsxs)('div', { class: 'dl__item', children: [(0, s.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, s.jsx)('dd', { class: 'dl__definition', children: 'Niet iedereen kan op dezelfde manier naar inhoud navigeren.' })] })] }), '\n', (0, s.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, s.jsx)(m, {}), '\n', (0, s.jsxs)(n.p, { children: ["Binnen een website, dus niet via een zoekmachine, moet een pagina op minstens 2 manieren te bereiken zijn. Sommige bezoekers hebben baat bij een sitemap. Andere bezoekers kunnen beter navigeren met een zoekfunctie.\nNog belangrijker is dat sommige methodes een barri\xe8re kunnen vormen voor bezoekers. Dyslexie en een zoekfunctie kunnen lastig zijn. Uitgebreide menu's kunnen een drempel vormen voor ", (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '. Ook als een gebruiker inzoomt kan een uitgebreid menu lastig zijn om te overzien.\nAls er meerdere manieren aangeboden worden dan kan de bezoeker kiezen.'] }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Controleer voor elke pagina of deze op meerdere manieren te bereiken is.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: "Een logische structuur helpt gebruikers een beeld te vormen van hoe pagina's samenhangen. Dit vergemakkelijkt navigeren. Deze structuur maakt het vervolgens weer makkelijker om menu's te maken." }), '\n', (0, s.jsxs)(n.li, { children: ['Veel voorkomende manieren van navigatie zijn:', '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: "menu's," }), '\n', (0, s.jsx)(n.li, { children: 'links in de footer,' }), '\n', (0, s.jsx)(n.li, { children: 'een zoekfunctie,' }), '\n', (0, s.jsx)(n.li, { children: 'archiefpaginas,' }), '\n', (0, s.jsx)(n.li, { children: 'een index,' }), '\n', (0, s.jsx)(n.li, { children: 'een sitemap.' }), '\n'] }), '\n'] }), '\n', (0, s.jsx)(n.li, { children: 'Links tussen vergelijkbare pagina\'s kunnen ook bijdragen aan het voldoen aan dit succescriterium. Denk bijvoorbeeld aan een linkje "vorig blogbericht".' }), '\n', (0, s.jsx)(n.li, { children: 'Zorg ervoor dat methodes zoals zoekfuncties en sitemaps volledig zijn. Bij veranderende websites kunnen deze functies uit de pas lopen met de daadwerkelijke inhoud.' }), '\n', (0, s.jsx)(n.li, { children: 'Bevindt een pagina zich binnen een proces? Dan is er een uitzondering.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, s.jsx)(o.Ay, {}), '\n', (0, s.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#multiple-ways', children: (0, s.jsx)('span', { lang: 'en', children: '2.4.5 Multiple Ways' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#multiple-ways', children: '2.4.5 Meerdere manieren' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, s.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#multiple-ways', children: (0, s.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.5 Multiple Ways' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html', children: (0, s.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.5 Multiple Ways' }) }), '.'] }), '\n'] }), '\n', (0, s.jsx)(d.K7, { children: (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(c.Ay, {}) }) }), '\n', (0, s.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(h.Ay, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(k, { ...e }) }) : k(e);
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
