'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [56947],
 {
  8584: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => r });
   var t = i(86070),
    s = i(85248);
   const r = [];
   function l(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  19877: (e, n, i) => {
   i.d(n, { E: () => l });
   var t = i(68873),
    s = i(98584),
    r = i(86070);
   const l = ({ children: e, conformanceLevel: n, ...i }) => (0, r.jsx)(s.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, r.jsx)(t.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => r });
   var t = i(86070),
    s = i(85248);
   const r = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => a });
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
    o = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    c = (e) => ({ img: ({ src: n, ...i }) => (0, r.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    a = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: s = '', components: l = {} }) => (0, r.jsx)(t.x, { components: { ...d(n, i), ...c(s), ...l }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => r });
   var t = i(86070),
    s = i(85248);
   const r = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => r });
   var t = i(86070),
    s = i(85248);
   const r = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => o });
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
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
  91483: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => j, contentTitle: () => g, default: () => v, frontMatter: () => m, metadata: () => t, toc: () => p });
   const t = JSON.parse('{"id":"wcag/2.4.11","title":"WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)","description":"Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.","source":"@site/docs/wcag/2.4.11.mdx","sourceDirName":"wcag","slug":"/wcag/2.4.11","permalink":"/wcag/2.4.11","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.11.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.4.11 Focus niet bedekt (minimum)","pagination_label":"WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)","description":"Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.","slug":"2.4.11","keywords":["WCAG","AA","bedienbaar","navigeerbaar","operable","navigable","focus not obscured (minimum)","focus"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.4.10 Paragraafkoppen","permalink":"/wcag/2.4.10"},"next":{"title":"WCAG-succescriterium 2.4.12 Focus niet bedekt (uitgebreid)","permalink":"/wcag/2.4.12"}}');
   var s = i(86070),
    r = i(85248),
    l = i(46563),
    o = i(19877),
    c = i(68873),
    d = i(52105),
    a = i(28890),
    h = i(47219),
    u = i(8584);
   const m = { title: 'WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.11 Focus niet bedekt (minimum)', pagination_label: 'WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)', description: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.', slug: '2.4.11', keywords: ['WCAG', 'AA', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'focus not obscured (minimum)', 'focus'] },
    g = void 0,
    j = {},
    p = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, ...u.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...a.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function x(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)' }), '\n', (0, s.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, s.jsxs)('dl', { children: [(0, s.jsxs)('div', { class: 'dl__item', children: [(0, s.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, s.jsx)('dd', { class: 'dl__definition', children: 'Houd een gefocussed onderdeel zichtbaar.' })] }), (0, s.jsxs)('div', { class: 'dl__item', children: [(0, s.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, s.jsx)('dd', { class: 'dl__definition', children: 'Zorg ervoor dat een onderdeel met toetsenbordfocus minstens deels zichtbaar is.' })] }), (0, s.jsxs)('div', { class: 'dl__item', children: [(0, s.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, s.jsx)('dd', { class: 'dl__definition', children: (0, s.jsx)(n.p, { children: 'Wat toetsenbordfocus heeft moet zichtbaar zijn voor mensen die een toetsenbord gebruiken.' }) })] })] }), '\n', (0, s.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, s.jsx)(u.Ay, {}), '\n', (0, s.jsx)(n.p, { children: 'Dit criterium kan makkelijk fout gaan als een pagina in een onverwachte vorm is. Een ontwerp houdt niet altijd rekening met alle interacties die plaats kunnen vinden:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Een interactieve footer kan achter een cookie consent modal zitten.' }), '\n', (0, s.jsx)(n.li, { children: 'Een uitklapmenu kan een link bedekken.' }), '\n', (0, s.jsx)(n.li, { children: 'Een verandering in resolutie of zoom kan er voor zorgen dat onderdelen die sticky zijn ineens overlappen.' }), '\n', (0, s.jsx)(n.li, { children: 'Een verplaatstbaar onderdeel kan ergens over of onder geplaatst worden.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Ga door een pagina met het toetsenbord.' }), '\n', (0, s.jsx)(n.li, { children: 'Kijk welke onderdelen de focus krijgen.' }), '\n', (0, s.jsx)(n.li, { children: 'Controleer of de focus (deels) zichtbaar is.' }), '\n', (0, s.jsxs)(n.li, { children: ['Doe dit ook voor andere vormen van de pagina zoals:', '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Met een open cookie consent modal.' }), '\n', (0, s.jsx)(n.li, { children: 'Met opengeklapte menus.' }), '\n', (0, s.jsx)(n.li, { children: 'Op verschillende resoluties.' }), '\n', (0, s.jsx)(n.li, { children: 'Met geopende modals of andere overlappende content.' }), '\n', (0, s.jsx)(n.li, { children: 'Met foutmeldingen.' }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['In plaats van deels zichtbaar kun je beter onderdelen helemaal zichtbaar laten zijn. Je voldoet dan aan ', (0, s.jsx)(n.a, { href: '/wcag/2.4.12/', children: 'WCAG-succescriterium 2.4.12 Focus niet bedekt (uitgebreid)' })] }), '\n', (0, s.jsxs)(n.li, { children: ['Zodra je dit criterium test, kun je meteen ', (0, s.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'WCAG-succescriterium 2.1.1 Toetsenbord' }), ' en ', (0, s.jsx)(n.a, { href: '/wcag/2.4.7/', children: 'WCAG-Succescriterium 2.4.7 Focus zichtbaar' }), ' testen.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, s.jsx)(d.Ay, {}), '\n', (0, s.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', children: (0, s.jsx)('span', { lang: 'en', children: '2.4.11 Focus Not Obscured (Minimum)' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#focus-not-obscured-minimum', children: '2.4.11 Focus niet bedekt (minimum)' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, s.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-not-obscured-minimum', children: (0, s.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.11 Focus Not Obscured (Minimum)' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html', children: (0, s.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.11 Focus Not Obscured (Minimum)' }) }), '.'] }), '\n'] }), '\n', (0, s.jsx)(c.K7, { children: (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(a.Ay, {}) }) }), '\n', (0, s.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(h.Ay, {}) })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(x, { ...e }) }) : x(e);
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
