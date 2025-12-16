'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [31764],
 {
  19877: (e, n, t) => {
   t.d(n, { E: () => l });
   var s = t(68873),
    i = t(98584),
    r = t(86070);
   const l = ({ children: e, conformanceLevel: n, ...t }) => (0, r.jsx)(i.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, r.jsx)(s.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...t, children: e });
  },
  28890: (e, n, t) => {
   t.d(n, { Ay: () => o, RM: () => r });
   var s = t(86070),
    i = t(85248);
   const r = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, s.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, s.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, t) => {
   t.d(n, { o: () => d });
   var s = t(85248),
    i = t(68873),
    r = t(86070);
   const l = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: s, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + s + i;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    a = (e) => ({ img: ({ src: n, ...t }) => (0, r.jsx)('img', { ...t, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: i = '', components: l = {} }) => (0, r.jsx)(s.x, { components: { ...c(n, t), ...a(i), ...l }, children: e });
  },
  47219: (e, n, t) => {
   t.d(n, { Ay: () => o, RM: () => r });
   var s = t(86070),
    i = t(85248);
   const r = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, s.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105: (e, n, t) => {
   t.d(n, { Ay: () => o, RM: () => r });
   var s = t(86070),
    i = t(85248);
   const r = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, s.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, s.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
   }
  },
  72573: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => k, default: () => v, frontMatter: () => j, metadata: () => s, toc: () => m });
   const s = JSON.parse('{"id":"wcag/2.1.04","title":"WCAG-succescriterium 2.1.4 Enkel teken sneltoetsen","description":"Bied geen sneltoetsen aan die bestaan uit \xe9\xe9n teken.","source":"@site/docs/wcag/2.1.04.mdx","sourceDirName":"wcag","slug":"/wcag/2.1.4","permalink":"/wcag/2.1.4","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.1.04.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.1.4 Enkel teken sneltoetsen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.1.4 Enkel teken sneltoetsen","pagination_label":"WCAG-succescriterium 2.1.4 Enkel teken sneltoetsen","description":"Bied geen sneltoetsen aan die bestaan uit \xe9\xe9n teken.","slug":"2.1.4","keywords":["WCAG","A","bedienbaar","toetsenbordtoegankelijk","operable","keyboard accessible","character key shortcuts"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.1.3 Toetsenbord (geen uitzondering)","permalink":"/wcag/2.1.3"},"next":{"title":"WCAG-succescriterium 2.2.1 Timing aanpasbaar","permalink":"/wcag/2.2.1"}}');
   var i = t(86070),
    r = t(85248),
    l = t(46563),
    o = t(19877),
    a = t(68873),
    c = t(52105),
    d = t(28890),
    h = t(47219);
   function g(e) {
    const n = { p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'Bied geen sneltoetsen aan die bestaan uit \xe9\xe9n teken.' });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
   const j = { title: 'WCAG-succescriterium 2.1.4 Enkel teken sneltoetsen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.1.4 Enkel teken sneltoetsen', pagination_label: 'WCAG-succescriterium 2.1.4 Enkel teken sneltoetsen', description: 'Bied geen sneltoetsen aan die bestaan uit \xe9\xe9n teken.', slug: '2.1.4', keywords: ['WCAG', 'A', 'bedienbaar', 'toetsenbordtoegankelijk', 'operable', 'keyboard accessible', 'character key shortcuts'] },
    k = void 0,
    p = {},
    m = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'Bronnen en tools', id: 'bronnen-en-tools', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...d.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', ol: 'ol', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.1.4 Enkel teken sneltoetsen' }), '\n', (0, i.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, i.jsxs)('dl', { children: [(0, i.jsxs)('div', { class: 'dl__item', children: [(0, i.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, i.jsx)('dd', { class: 'dl__definition', children: 'Verminder onbedoeld gebruik van sneltoetsen.' })] }), (0, i.jsxs)('div', { class: 'dl__item', children: [(0, i.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, i.jsx)('dd', { class: 'dl__definition', children: 'Zorg ervoor dat sneltoetsen uitgeschakeld of aangepast kunnen worden.' })] }), (0, i.jsxs)('div', { class: 'dl__item', children: [(0, i.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, i.jsx)('dd', { class: 'dl__definition', children: (0, i.jsx)(n.p, { children: 'Sneltoetsen met \xe9\xe9n teken zijn makkelijk onbedoeld te activeren, vooral met spraakbediening.' }) })] })] }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(u, {}), '\n', (0, i.jsxs)(n.p, { children: ['Voor een sneltoets van \xe9\xe9n teken houden we rekening met hoofdletters, kleine letters, leestekens, cijfers en symbolen. Dit soort sneltoetsen zijn makkelijk onbedoeld te activeren. Denk hierbij bijvoorbeeld aan bezoekers met een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' en spraakbediening. Bezoekers kunnen hun eigen sneltoetsen hebben die conflicteren met de sneltoetsen op de website. Invoer van spraakbediening bereikt een website vaak als losse tekens die ook deze sneltoetsen kunnen activeren.'] }), '\n', (0, i.jsx)(n.p, { children: 'Mochten dit soort sneltoetsen toch aanwezig zijn, dan zijn ze tenminste:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Uit te schakelen of,' }), '\n', (0, i.jsx)(n.li, { children: 'Toe te wijzen aan andere tekens of toetsen of,' }), '\n', (0, i.jsx)(n.li, { children: 'Alleen actief bij focus op een relevant component.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsxs)(n.ol, { children: ['\n', (0, i.jsx)(n.li, { children: 'Zorg ervoor dat niks focus heeft. Dit kan vaak door op de achtergrond te klikken.' }), '\n', (0, i.jsxs)(n.li, { children: ['Gebruik de ', (0, i.jsx)(n.a, { href: 'http://3needs.org/en/testing/code/kb-shortcuts.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Character key shortcut bookmarklet' }) }), ' en controleer of er niks geactiveerd wordt.'] }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': Als er tijdens de test iets de focus krijgt, dan moet de focus eerst verwijderd worden voordat de test verder kan gaan.'] }), '\n', (0, i.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Dit criterium gaat meestal fout bij het gebruik van externe videospelers. Let bij het toevoegen van externe video op of dit goed gaat. Bij YouTube kan de parameter ', (0, i.jsx)(n.code, { children: 'disablekb=1' }), ' toegevoegd worden aan de URL van de video. Voor Vimeo is dit ', (0, i.jsx)(n.code, { children: 'keyboard=false' }), '.'] }), '\n', (0, i.jsx)(n.li, { children: 'Een teken dat op het ene toetsenbord een losse knop is, kan op een ander toetsenbord een combinatie van knoppen zijn. Uiteindelijk gaat om het aantal tekens en niet het aantal knoppen.' }), '\n', (0, i.jsx)(n.li, { children: 'Ook sneltoetsen die in een reeks gebruikt moeten worden kunnen dit succescriterium doen falen.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(c.Ay, {}), '\n', (0, i.jsx)(n.h2, { id: 'bronnen-en-tools', children: 'Bronnen en tools' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'http://3needs.org/en/testing/code/kb-shortcuts.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Character key shortcut bookmarklet' }) }) }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#character-key-shortcuts', children: (0, i.jsx)('span', { lang: 'en', children: '2.1.4 Character Key Shortcuts' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#character-key-shortcuts', children: '2.1.4 Enkel teken sneltoetsen' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#character-key-shortcuts', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 2.1.4 Character Key Shortcuts' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 2.1.4 Character Key Shortcuts' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(a.K7, { children: (0, i.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(d.Ay, {}) }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(h.Ay, {}) })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => l, x: () => o });
   var s = t(30758);
   const i = {},
    r = s.createContext(i);
   function l(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), s.createElement(r.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, t) => {
   t.d(n, { p: () => r });
   var s = t(13526),
    i = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...l }) => (0, i.jsxs)('hgroup', { className: (0, s.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...l, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
 },
]);
