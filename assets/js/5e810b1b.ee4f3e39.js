'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [32288],
 {
  54804: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => j, contentTitle: () => m, default: () => b, frontMatter: () => u, metadata: () => g, toc: () => p });
   var t = i(52676),
    r = i(40139),
    s = i(57716),
    l = i(46364),
    d = i(37943),
    o = i(21339),
    c = i(92828),
    a = i(38391),
    h = i(73591);
   const u = { title: 'WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.11 Focus niet bedekt (minimum)', pagination_label: 'WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)', description: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.', slug: '2.4.11', keywords: ['WCAG', 'AA', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'focus not obscured (minimum)', 'focus'] },
    m = void 0,
    g = { id: 'wcag/2.4.11', title: 'WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)', description: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.', source: '@site/docs/wcag/2.4.11.mdx', sourceDirName: 'wcag', slug: '/wcag/2.4.11', permalink: '/wcag/2.4.11', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.11.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.11 Focus niet bedekt (minimum)', pagination_label: 'WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)', description: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.', slug: '2.4.11', keywords: ['WCAG', 'AA', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'focus not obscured (minimum)', 'focus'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.4.10 Paragraafkoppen', permalink: '/wcag/2.4.10' }, next: { title: 'WCAG-succescriterium 2.4.12 Focus niet bedekt (uitgebreid)', permalink: '/wcag/2.4.12' } },
    j = {},
    p = [
     { value: 'In het kort', id: 'in-het-kort', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Tips', id: 'tips', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function x(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 2.4.11 Focus niet bedekt (minimum)' }), '\n', (0, t.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, t.jsxs)('dl', { children: [(0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Houd een gefocussed onderdeel zichtbaar.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Zorg ervoor dat een onderdeel met toetsenbordfocus minstens deels zichtbaar is.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, t.jsx)('dd', { class: 'dl__definition', children: (0, t.jsx)(n.p, { children: 'Wat toetsenbordfocus heeft moet zichtbaar zijn voor mensen die een toetsenbord gebruiken.' }) })] })] }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(h.ZP, {}), '\n', (0, t.jsx)(n.p, { children: 'Dit criterium kan makkelijk fout gaan als een pagina in een onverwachte vorm is. Een ontwerp houdt niet altijd rekening met alle interacties die plaats kunnen vinden:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Een interactieve footer kan achter een cookie consent modal zitten.' }), '\n', (0, t.jsx)(n.li, { children: 'Een uitklapmenu kan een link bedekken.' }), '\n', (0, t.jsx)(n.li, { children: 'Een verandering in resolutie of zoom kan er voor zorgen dat onderdelen die sticky zijn ineens overlappen.' }), '\n', (0, t.jsx)(n.li, { children: 'Een verplaatstbaar onderdeel kan ergens over of onder geplaatst worden.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Ga door een pagina met het toetsenbord.' }), '\n', (0, t.jsx)(n.li, { children: 'Kijk welke onderdelen de focus krijgen.' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer of de focus (deels) zichtbaar is.' }), '\n', (0, t.jsxs)(n.li, { children: ['Doe dit ook voor andere vormen van de pagina zoals:', '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Met een open cookie consent modal.' }), '\n', (0, t.jsx)(n.li, { children: 'Met opengeklapte menus.' }), '\n', (0, t.jsx)(n.li, { children: 'Op verschillende resoluties.' }), '\n', (0, t.jsx)(n.li, { children: 'Met geopende modals of andere overlappende content.' }), '\n', (0, t.jsx)(n.li, { children: 'Met foutmeldingen.' }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['In plaats van deels zichtbaar kun je beter onderdelen helemaal zichtbaar laten zijn. Je voldoet dan aan ', (0, t.jsx)(n.a, { href: '/wcag/2.4.12/', children: 'WCAG-succescriterium 2.4.12 Focus niet bedekt (uitgebreid)' })] }), '\n', (0, t.jsxs)(n.li, { children: ['Zodra je dit criterium test, kun je meteen ', (0, t.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'WCAG-succescriterium 2.1.1 Toetsenbord' }), ' en ', (0, t.jsx)(n.a, { href: '/wcag/2.4.7/', children: 'WCAG-Succescriterium 2.4.7 Focus zichtbaar' }), ' testen.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(o.ZP, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum', children: (0, t.jsx)('span', { lang: 'en', children: '2.4.11 Focus Not Obscured (Minimum)' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#focus-not-obscured-minimum', children: '2.4.11 Focus niet bedekt (minimum)' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-not-obscured-minimum', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.11 Focus Not Obscured (Minimum)' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.11 Focus Not Obscured (Minimum)' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(d.CY, { children: (0, t.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.ZP, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(a.ZP, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
   }
  },
  21339: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  92828: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  38391: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  73591: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => s });
   var t = i(4814),
    r = i(52676);
   const s = (e) => {
    let { children: n, className: i, level: s = 1, suffix: l, ...d } = e;
    return (0, r.jsxs)('hgroup', { className: (0, t.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, i), ...d, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => a });
   var t = i(40139),
    r = i(37943),
    s = i(52676);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    d = { 1: {}, 2: { h1: r.XJ, h2: r.aC, h3: r.k8, h4: r.by, h5: r.Cd }, 3: { h1: r.aC, h2: r.k8, h3: r.by, h4: r.Cd, h5: r.Cd }, 4: { h1: r.k8, h2: r.by, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 5: { h1: r.by, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 6: { h1: r.Cd, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd } },
    o = (e) => ({
     img: (n) => {
      let { src: i, ...t } = n;
      return (0, s.jsx)('img', { ...t, src: l(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    c = (e, n) => {
     if (e) {
      const e = { ...d[n - 1] };
      return (e.h1 = () => null), e;
     }
     return d[n];
    },
    a = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: r = 1, baseUrl: l = '', components: d = {} } = e;
     return (0, s.jsx)(t.Z, { components: { ...c(i, r), ...o(l), ...d }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => l });
   var t = i(37943),
    r = i(41757),
    s = i(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: i, ...l } = e;
    return (0, s.jsx)(r.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, s.jsx)(t.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...l, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => d, a: () => l });
   var t = i(75271);
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
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
