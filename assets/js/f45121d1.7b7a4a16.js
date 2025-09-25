'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [94846],
 {
  77583: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => f, contentTitle: () => g, default: () => v, frontMatter: () => u, metadata: () => j, toc: () => m });
   var r = i(52676),
    s = i(40139),
    t = i(57716),
    l = i(46364),
    a = i(16167),
    o = i(60256),
    d = i(99042),
    c = i(91114);
   function h(e) {
    const n = { p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Maximaal drie flitsen in een seconde.' });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const u = { title: 'WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.3.1 Drie flitsen of beneden drempelwaarde', pagination_label: 'WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde', description: 'Maximaal drie flitsen in een seconde.', slug: '2.3.1', keywords: ['WCAG', 'A', 'bedienbaar', 'toevallen en fysieke reacties', 'operable', 'seizures and physical reactions', 'three flashes or below threshold', 'non-interferentie'] },
    g = void 0,
    j = { id: 'wcag/2.3.01', title: 'WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde', description: 'Maximaal drie flitsen in een seconde.', source: '@site/docs/wcag/2.3.01.mdx', sourceDirName: 'wcag', slug: '/wcag/2.3.1', permalink: '/wcag/2.3.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.3.01.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.3.1 Drie flitsen of beneden drempelwaarde', pagination_label: 'WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde', description: 'Maximaal drie flitsen in een seconde.', slug: '2.3.1', keywords: ['WCAG', 'A', 'bedienbaar', 'toevallen en fysieke reacties', 'operable', 'seizures and physical reactions', 'three flashes or below threshold', 'non-interferentie'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.2.6 Time-outs', permalink: '/wcag/2.2.6' }, next: { title: 'WCAG-succescriterium 2.3.2 Drie flitsen', permalink: '/wcag/2.3.2' } },
    f = {},
    m = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Tips', id: 'tips', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Bronnen en tools', id: 'bronnen-en-tools', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function w(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Dit succescriterium kan een bezoeker verhinderen om een pagina te gebruiken. Het is niet mogelijk om een alternatief aan te bieden. Meer informatie hierover is te vinden op de W3-pagina ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#cc5', children: ' Conformiteitseis 5: Non-interferentie.' })] }), '\n', (0, r.jsx)(n.p, { children: "Zorg ervoor dat een website geen onderdelen bevat met meer dan drie flitsen binnen \xe9\xe9n seconde. Het tonen van meer dan drie flitsen binnen \xe9\xe9n seconde kan een epileptische aanval veroorzaken bij gebruikers die hiervoor gevoelig zijn. Dit geldt voor alle onderdelen van de website, zoals animaties, video's en de overgang tussen pagina's." }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Bekijk op elke pagina of er flitsen aanwezig zijn.' }), '\n', (0, r.jsxs)(n.li, { children: ['Mocht er inhoud zijn die flitst, kijk of deze binnen de eisen valt. ', (0, r.jsx)(n.a, { href: '#bronnen-en-tools', children: 'PEAT' }), ' kan hiervoor gebruikt worden.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Dit succescriterium kan falen op onverwachtse momenten. Probeer ook te testen wat er gebeurt als een onderdeel niet of traag laadt. Dit kan zorgen voor flitsen.' }), '\n', (0, r.jsx)(n.li, { children: 'Er is in de offici\xeble richtlijn een uitzondering voor flitsen die erg klein zijn.' }), '\n', (0, r.jsxs)(n.li, { children: ['Epilepsie kan niet alleen door flitsen veroorzaakt worden, maar ook door statische afbeeldingen en patronen. Denk bijvoorbeeld aan een strepenpatroon dat afwisselend zwart en wit is, waar langs gescrolld word. Dit kan ervaren worden als flitsen. De pagina ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Seizure_disorders', children: (0, r.jsx)('span', { lang: 'en', children: 'Web accessibility for seizures and physical reactions' }) }), ' van MDN gaat hier dieper op in.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Denk bij het controleren van bewegend beeld ook aan ', (0, r.jsx)(n.a, { href: '/wcag/2.2.2/', children: 'WCAG-succescriterium 2.2.2 Pauzeren, stoppen verbergen' }), ' dat aansluit bij dit succescriterium.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Content: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/video/flitsen/', children: 'Flitsen in video' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(o.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'bronnen-en-tools', children: 'Bronnen en tools' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://trace.umd.edu/peat/', children: (0, r.jsx)('span', { lang: 'en', children: 'Photosensitive Epilepsy Analysis Tool (PEAT)' }) }) }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold', children: (0, r.jsx)('span', { lang: 'en', children: '2.3.1 Three Flashes or Below Threshold' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#three-flashes-or-below-threshold', children: '2.3.1 Drie flitsen of beneden drempelwaarde' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#three-flashes-or-below-threshold', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 2.3.1 Three Flashes or Below Threshold' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.3.1 Three Flashes or Below Threshold' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(a.CY, { children: (0, r.jsx)(t.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(t.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(w, { ...e }) }) : w(e);
   }
  },
  60256: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    s = i(40139);
   function t(e) {
    const n = { a: 'a', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  99042: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    s = i(40139);
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  91114: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    s = i(40139);
   function t(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => t });
   var r = i(4814),
    s = i(52676);
   const t = (e) => {
    let { children: n, className: i, level: t = 1, suffix: l, ...a } = e;
    return (0, s.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${t}`, i), ...a, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var r = i(40139),
    s = i(16167),
    t = i(52676);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + s;
     }
     return i.toString();
    },
    a = { 1: {}, 2: { h1: s.XJ, h2: s.aC, h3: s.k8, h4: s.by, h5: s.Cd }, 3: { h1: s.aC, h2: s.k8, h3: s.by, h4: s.Cd, h5: s.Cd }, 4: { h1: s.k8, h2: s.by, h3: s.Cd, h4: s.Cd, h5: s.Cd }, 5: { h1: s.by, h2: s.Cd, h3: s.Cd, h4: s.Cd, h5: s.Cd }, 6: { h1: s.Cd, h2: s.Cd, h3: s.Cd, h4: s.Cd, h5: s.Cd } },
    o = (e) => ({
     img: (n) => {
      let { src: i, ...r } = n;
      return (0, t.jsx)('img', { ...r, src: l(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: s = 1, baseUrl: l = '', components: a = {} } = e;
     return (0, t.jsx)(r.Z, { components: { ...d(i, s), ...o(l), ...a }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => l });
   var r = i(16167),
    s = i(41757),
    t = i(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: i, ...l } = e;
    return (0, t.jsx)(s.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, t.jsx)(r.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...l, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => l });
   var r = i(75271);
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
 },
]);
