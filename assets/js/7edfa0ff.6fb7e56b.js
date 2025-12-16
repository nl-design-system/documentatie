'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [33322],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => o });
   var t = i(68873),
    r = i(98584),
    s = i(86070);
   const o = ({ children: e, conformanceLevel: n, ...i }) => (0, s.jsx)(r.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(t.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => d });
   var t = i(85248),
    r = i(68873),
    s = i(86070);
   const o = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    l = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    a = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: r = '', components: o = {} }) => (0, s.jsx)(t.x, { components: { ...c(n, i), ...a(r), ...o }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [];
   function o(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [];
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => o, x: () => l });
   var t = i(30758);
   const r = {},
    s = t.createContext(r);
   function o(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => s });
   var t = i(13526),
    r = i(86070);
   const s = ({ children: e, className: n, level: i = 1, suffix: s, ...o }) => (0, r.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...o, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  99457: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => j, default: () => v, frontMatter: () => p, metadata: () => t, toc: () => w });
   const t = JSON.parse('{"id":"wcag/2.5.04","title":"WCAG-succescriterium 2.5.4 Bewegingsactivering","description":"Acties waarbij men een apparaat of zichzelf moeten bewegen, werken ook zonder die beweging. De mogelijkheid om te bewegen is ook uit te schakelen.","source":"@site/docs/wcag/2.5.04.mdx","sourceDirName":"wcag","slug":"/wcag/2.5.4","permalink":"/wcag/2.5.4","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.5.04.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.5.4 Bewegingsactivering","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.5.4 Bewegingsactivering","pagination_label":"WCAG-succescriterium 2.5.4 Bewegingsactivering","description":"Acties waarbij men een apparaat of zichzelf moeten bewegen, werken ook zonder die beweging. De mogelijkheid om te bewegen is ook uit te schakelen.","slug":"2.5.4","keywords":["WCAG","A","bedienbaar","input modaliteiten","operable","input modalities","motion actuation"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.5.3 Label in Naam","permalink":"/wcag/2.5.3"},"next":{"title":"WCAG-succescriterium 2.5.5 Grootte van het aanwijsgebied (uitgebreid)","permalink":"/wcag/2.5.5"}}');
   var r = i(86070),
    s = i(85248),
    o = i(46563),
    l = i(19877),
    a = i(68873),
    c = i(52105),
    d = i(28890),
    h = i(47219);
   function g(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Acties waarbij men een apparaat of zichzelf moeten bewegen, werken ook zonder die beweging. De mogelijkheid om te bewegen is ook uit te schakelen.' });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
   const p = { title: 'WCAG-succescriterium 2.5.4 Bewegingsactivering', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.4 Bewegingsactivering', pagination_label: 'WCAG-succescriterium 2.5.4 Bewegingsactivering', description: 'Acties waarbij men een apparaat of zichzelf moeten bewegen, werken ook zonder die beweging. De mogelijkheid om te bewegen is ook uit te schakelen.', slug: '2.5.4', keywords: ['WCAG', 'A', 'bedienbaar', 'input modaliteiten', 'operable', 'input modalities', 'motion actuation'] },
    j = void 0,
    m = {},
    w = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...d.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function k(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(l.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.5.4 Bewegingsactivering' }), '\n', (0, r.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, r.jsxs)('dl', { children: [(0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Een pagina leunt niet op de beweging van de gebruiker.' })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, r.jsx)('dd', { class: 'dl__definition', children: (0, r.jsx)(n.p, { children: 'Als een actie met een beweging uitgevoerd kan worden, zorg dan ook voor een manier zonder beweging.' }) })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Niet iedereen kan (een apparaat) bewegen.' })] })] }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(n.p, { children: 'Bij bewegen kun je denken aan verschillende patronen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Schudden om iets ongedaan te maken.' }), '\n', (0, r.jsx)(n.li, { children: 'Beweging bestuurt een karakter of camera in een digitale omgeving.' }), '\n', (0, r.jsx)(n.li, { children: 'Schudden activeert de mogelijkheden voor feedback of hulp.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Voor al deze situaties moet er ook een manier zijn om hetzelfde te doen, maar dan zonder te bewegen. Denk bijvoorbeeld aan een knop waarmee je hetzelfde kan doen.' }), '\n', (0, r.jsx)(n.p, { children: 'Er is een uitzondering als beweging noodzakelijk is. Dit is bijvoorbeeld bij een stappenteller.' }), '\n', (0, r.jsx)(n.p, { children: 'Vergeet niet dat er een instelling moet zijn om er voor te zorgen dat beweging niks doet. Zo voorkom je dat beweging per ongeluk iets doet.' }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Gebruik een apparaat met een bewegingssensor, zoals een mobiele telefoon.' }), '\n', (0, r.jsx)(n.li, { children: 'Probeer op elke pagina te schudden, draaien en andere bewegingen te maken.' }), '\n', (0, r.jsx)(n.li, { children: 'Gebeurt er iets door de beweging? Kijk of het ook anders kan, en of het ook uitgeschakeld kan worden' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(c.Ay, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#motion-actuation', children: (0, r.jsx)('span', { lang: 'en', children: '2.5.4 Motion Actuation' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#motion-actuation', children: '2.5.4 Bewegingsactivering' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#motion-actuation', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 2.5.4 Motion Actuation' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.5.4 Motion Actuation' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(a.K7, { children: (0, r.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.Ay, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(h.Ay, {}) })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
 },
]);
