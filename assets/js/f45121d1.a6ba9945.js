'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65361],
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
    o = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    a = (e) => ({ img: ({ src: n, ...i }) => (0, t.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: s = '', components: l = {} }) => (0, t.jsx)(r.x, { components: { ...d(n, i), ...a(s), ...l }, children: e });
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
  81524: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => f, contentTitle: () => j, default: () => w, frontMatter: () => u, metadata: () => r, toc: () => m });
   const r = JSON.parse('{"id":"wcag/2.3.01","title":"WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde","description":"Maximaal drie flitsen in een seconde.","source":"@site/docs/wcag/2.3.01.mdx","sourceDirName":"wcag","slug":"/wcag/2.3.1","permalink":"/wcag/2.3.1","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.3.01.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.3.1 Drie flitsen of beneden drempelwaarde","pagination_label":"WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde","description":"Maximaal drie flitsen in een seconde.","slug":"2.3.1","keywords":["WCAG","A","bedienbaar","toevallen en fysieke reacties","operable","seizures and physical reactions","three flashes or below threshold","non-interferentie"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.2.6 Time-outs","permalink":"/wcag/2.2.6"},"next":{"title":"WCAG-succescriterium 2.3.2 Drie flitsen","permalink":"/wcag/2.3.2"}}');
   var s = i(86070),
    t = i(85248),
    l = i(46563),
    o = i(19877),
    a = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(47219);
   function g(e) {
    const n = { p: 'p', ...(0, t.R)(), ...e.components };
    return (0, s.jsx)(n.p, { children: 'Maximaal drie flitsen in een seconde.' });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(g, { ...e }) }) : g(e);
   }
   const u = { title: 'WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.3.1 Drie flitsen of beneden drempelwaarde', pagination_label: 'WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde', description: 'Maximaal drie flitsen in een seconde.', slug: '2.3.1', keywords: ['WCAG', 'A', 'bedienbaar', 'toevallen en fysieke reacties', 'operable', 'seizures and physical reactions', 'three flashes or below threshold', 'non-interferentie'] },
    j = void 0,
    f = {},
    m = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'Bronnen en tools', id: 'bronnen-en-tools', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function v(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde' }), '\n', (0, s.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, s.jsx)(p, {}), '\n', (0, s.jsxs)(n.p, { children: [(0, s.jsx)(n.strong, { children: 'Let op' }), ': Dit succescriterium kan een bezoeker verhinderen om een pagina te gebruiken. Het is niet mogelijk om een alternatief aan te bieden. Meer informatie hierover is te vinden op de W3-pagina ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#cc5', children: ' Conformiteitseis 5: Non-interferentie.' })] }), '\n', (0, s.jsx)(n.p, { children: "Zorg ervoor dat een website geen onderdelen bevat met meer dan drie flitsen binnen \xe9\xe9n seconde. Het tonen van meer dan drie flitsen binnen \xe9\xe9n seconde kan een epileptische aanval veroorzaken bij gebruikers die hiervoor gevoelig zijn. Dit geldt voor alle onderdelen van de website, zoals animaties, video's en de overgang tussen pagina's." }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Bekijk op elke pagina of er flitsen aanwezig zijn.' }), '\n', (0, s.jsxs)(n.li, { children: ['Mocht er inhoud zijn die flitst, kijk of deze binnen de eisen valt. ', (0, s.jsx)(n.a, { href: '#bronnen-en-tools', children: 'PEAT' }), ' kan hiervoor gebruikt worden.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Dit succescriterium kan falen op onverwachtse momenten. Probeer ook te testen wat er gebeurt als een onderdeel niet of traag laadt. Dit kan zorgen voor flitsen.' }), '\n', (0, s.jsx)(n.li, { children: 'Er is in de offici\xeble richtlijn een uitzondering voor flitsen die erg klein zijn.' }), '\n', (0, s.jsxs)(n.li, { children: ['Epilepsie kan niet alleen door flitsen veroorzaakt worden, maar ook door statische afbeeldingen en patronen. Denk bijvoorbeeld aan een strepenpatroon dat afwisselend zwart en wit is, waar langs gescrolld word. Dit kan ervaren worden als flitsen. De pagina ', (0, s.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Seizure_disorders', children: (0, s.jsx)('span', { lang: 'en', children: 'Web accessibility for seizures and physical reactions' }) }), ' van MDN gaat hier dieper op in.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Denk bij het controleren van bewegend beeld ook aan ', (0, s.jsx)(n.a, { href: '/wcag/2.2.2/', children: 'WCAG-succescriterium 2.2.2 Pauzeren, stoppen verbergen' }), ' dat aansluit bij dit succescriterium.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Content: ', (0, s.jsx)(n.a, { href: '/richtlijnen/content/video/flitsen/', children: 'Flitsen in video' }), '.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, s.jsx)(d.Ay, {}), '\n', (0, s.jsx)(n.h2, { id: 'bronnen-en-tools', children: 'Bronnen en tools' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: 'https://trace.umd.edu/peat/', children: (0, s.jsx)('span', { lang: 'en', children: 'Photosensitive Epilepsy Analysis Tool (PEAT)' }) }) }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold', children: (0, s.jsx)('span', { lang: 'en', children: '2.3.1 Three Flashes or Below Threshold' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#three-flashes-or-below-threshold', children: '2.3.1 Drie flitsen of beneden drempelwaarde' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, s.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#three-flashes-or-below-threshold', children: (0, s.jsx)('span', { lang: 'en', children: 'Quick Reference 2.3.1 Three Flashes or Below Threshold' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html', children: (0, s.jsx)('span', { lang: 'en', children: 'Understanding SC 2.3.1 Three Flashes or Below Threshold' }) }), '.'] }), '\n'] }), '\n', (0, s.jsx)(a.K7, { children: (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(c.Ay, {}) }) }), '\n', (0, s.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(h.Ay, {}) })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(v, { ...e }) }) : v(e);
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
