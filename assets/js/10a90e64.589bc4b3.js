'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [41089],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => l });
   var t = i(68873),
    r = i(98584),
    s = i(86070);
   const l = ({ children: e, conformanceLevel: n, ...i }) => (0, s.jsx)(r.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(t.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
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
    a = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    o = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: r = '', components: l = {} }) => (0, s.jsx)(t.x, { components: { ...d(n, i), ...o(r), ...l }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  65483: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => p, default: () => w, frontMatter: () => j, metadata: () => t, toc: () => v });
   const t = JSON.parse('{"id":"wcag/2.5.08","title":"WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)","description":"Zorg ervoor dat de aanwijsbare elementen op een pagina groot genoeg zijn om makkelijk aan te wijzen met bijvoorbeeld een muis of vinger. Hierbij geldt dat het aan te wijzen gebied ten minste 24 bij 24 pixels groot is.","source":"@site/docs/wcag/2.5.08.mdx","sourceDirName":"wcag","slug":"/wcag/2.5.8","permalink":"/wcag/2.5.8","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.5.08.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.5.8 Grootte van het aanwijsgebied (minimum)","pagination_label":"WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)","description":"Zorg ervoor dat de aanwijsbare elementen op een pagina groot genoeg zijn om makkelijk aan te wijzen met bijvoorbeeld een muis of vinger. Hierbij geldt dat het aan te wijzen gebied ten minste 24 bij 24 pixels groot is.","slug":"2.5.8","keywords":["WCAG","AA","bedienbaar","input modaliteiten","operable","input modalities","target size (minimum)"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.5.7 Sleepbewegingen","permalink":"/wcag/2.5.7"},"next":{"title":"WCAG-succescriterium 3.1.1 Taal van de pagina","permalink":"/wcag/3.1.1"}}');
   var r = i(86070),
    s = i(85248),
    l = i(46563),
    a = i(19877),
    o = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(47219);
   function g(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Aanwijsbare elementen op een pagina zijn groot genoeg om makkelijk aan te wijzen met bijvoorbeeld een muis of vinger. Het aan te wijzen gebied is ten minste 24 bij 24 pixels groot.' });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
   const j = { title: 'WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.8 Grootte van het aanwijsgebied (minimum)', pagination_label: 'WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)', description: 'Zorg ervoor dat de aanwijsbare elementen op een pagina groot genoeg zijn om makkelijk aan te wijzen met bijvoorbeeld een muis of vinger. Hierbij geldt dat het aan te wijzen gebied ten minste 24 bij 24 pixels groot is.', slug: '2.5.8', keywords: ['WCAG', 'AA', 'bedienbaar', 'input modaliteiten', 'operable', 'input modalities', 'target size (minimum)'] },
    p = void 0,
    u = {},
    v = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Bronnen en tools', id: 'bronnen-en-tools', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function b(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', ol: 'ol', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(n.p, { children: 'Behalve in de volgende gevallen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Het gebied is te klein, maar een cirkel met een diameter van 24 pixels, gecentreerd op het aanwijsbare element overlapt niet met andere (denkbeeldige) cirkels.' }), '\n', (0, r.jsx)(n.li, { children: 'Er is op de pagina een alternatief voor dit element dat wel groot genoeg is.' }), '\n', (0, r.jsx)(n.li, { children: 'Het aanwijsbare element, bijvoorbeeld een link, is onderdeel van een zin.' }), '\n', (0, r.jsx)(n.li, { children: 'De browser bepaalt de grootte van het element en dit kan niet gewijzigd worden.' }), '\n', (0, r.jsx)(n.li, { children: 'De kleine weergave is essentieel of wettelijk verplicht.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'bronnen-en-tools', children: 'Bronnen en tools' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://adrianroselli.com/2022/05/24x24-pixel-cursor-bookmarklet.html', children: 'De bookmarklet van Adrian Roselli' }) }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Voor elk aanwijsbaar element op de pagina, test het volgende:' }), '\n', (0, r.jsxs)(n.ol, { children: ['\n', (0, r.jsx)(n.li, { children: 'Het aanwijsbare gebied moet minimaal 24 bij 24 pixels zijn.' }), '\n', (0, r.jsx)(n.li, { children: 'Als het niet 24 bij 24 pixels is, teken dan een cirkel in het midden van het element met een diameter van 24 pixels. Dit mag niet overlappen met het gebied (of een cirkel) van een ander element.' }), '\n', (0, r.jsx)(n.li, { children: 'Als het alsnog niet voldoet, beoordeel dan de andere uitzonderingen.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(d.Ay, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', children: (0, r.jsx)('span', { lang: 'en', children: '2.5.8 Target Size (Minimum)' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#target-size-minimum', children: '2.5.8 Grootte van het aanwijsgebied (minimum)' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#target-size-minimum', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 2.5.8 Target Size (Minimum)' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.5.8 Target Size (Minimum)' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(o.K7, { children: (0, r.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.Ay, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(h.Ay, {}) })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => a });
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
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), t.createElement(s.Provider, { value: n }, e.children);
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
