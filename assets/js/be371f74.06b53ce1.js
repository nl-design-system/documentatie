'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4137],
 {
  7574: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => j, contentTitle: () => g, default: () => m, frontMatter: () => u, metadata: () => b, toc: () => p });
   var t = i(52676),
    r = i(40139),
    s = i(57716),
    o = i(46364),
    a = i(16167),
    l = i(60256),
    d = i(99042),
    c = i(91114),
    h = i(23051);
   const u = { title: 'WCAG-succescriterium 2.4.7 Focus zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.7 Focus zichtbaar', pagination_label: '2.4.7 Focus zichtbaar', description: 'Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Dit kan bijvoorbeeld door het gebruik van een focusring (outline).', slug: '2.4.7', keywords: ['WCAG', 'AA', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'focus visible'] },
    g = void 0,
    b = { id: 'wcag/2.4.07', title: 'WCAG-succescriterium 2.4.7 Focus zichtbaar', description: 'Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Dit kan bijvoorbeeld door het gebruik van een focusring (outline).', source: '@site/docs/wcag/2.4.07.mdx', sourceDirName: 'wcag', slug: '/wcag/2.4.7', permalink: '/wcag/2.4.7', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.07.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.4.7 Focus zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.7 Focus zichtbaar', pagination_label: '2.4.7 Focus zichtbaar', description: 'Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Dit kan bijvoorbeeld door het gebruik van een focusring (outline).', slug: '2.4.7', keywords: ['WCAG', 'AA', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'focus visible'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.4.6 Koppen en labels', permalink: '/wcag/2.4.6' }, next: { title: '2.4.8 Locatie', permalink: '/wcag/2.4.8' } },
    j = {},
    p = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijn', id: 'gerelateerde-nl-design-system-richtlijn', level: 2 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function v(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(o.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 2.4.7 Focus zichtbaar' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(h.ZP, {}), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijn', children: 'Gerelateerde NL Design System-richtlijn' }), '\n', (0, t.jsxs)(n.p, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak de toetsenbordfocus goed zichtbaar' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: 'https://www.sarasoueidan.com/blog/focus-indicators/#wcag-2.1-and-wcag-2.2-focus-indicator-accessibility-requirements', children: (0, t.jsx)('span', { lang: 'en', children: 'A guide to designing accessible, WCAG-conformant focus indicators' }) }), ' van Sara Soueidan.'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(l.ZP, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt. Gebruik de tab-toets om te controleren of links, buttons, invoervelden en checkboxes duidelijk zichtbaar de focus aangeven. Controleer de focus van radiobuttons en tabs met de pijltjestoetsen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Als in de CSS de outline is verwijderd (', (0, t.jsx)(n.code, { children: 'outline: none;' }), '), moet er een alternatief zijn die de toetsenbordfocus visueel aangeeft, bijvoorbeeld door het toevoegen een CSS-border.'] }), '\n', (0, t.jsx)(n.p, { children: 'Additionele testen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['de ', (0, t.jsx)(n.a, { href: '/wcag/2.4.1', children: 'skip link' }), ' wordt zichtbaar als deze toetsenbord krijgt.'] }), '\n', (0, t.jsx)(n.li, { children: 'de outline (of het alternatief) is goed zichtbaar in dark- en in light-mode, als deze optie aangeboden wordt op de webpagina.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#focus-visible', children: (0, t.jsx)('span', { lang: 'en', children: '2.4.7 Focus Visible' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#focus-zichtbaar', children: '2.4.7 Focus zichtbaar' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-visible', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.7 Focus Visible' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.7 Focus Visible' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(a.CY, { children: (0, t.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(d.ZP, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.ZP, {}) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(v, { ...e }) }) : v(e);
   }
  },
  60256: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  99042: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  91114: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  23051: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Dit kan bijvoorbeeld door het gebruik van een focusring (outline).' });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => s });
   var t = i(4814),
    r = i(52676);
   const s = (e) => {
    let { children: n, className: i, level: s = 1, suffix: o, ...a } = e;
    return (0, r.jsxs)('hgroup', { className: (0, t.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, i), ...a, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), o && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var t = i(40139),
    r = i(16167),
    s = i(52676);
   const o = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    a = { 1: {}, 2: { h1: r.XJ, h2: r.aC, h3: r.k8, h4: r.by, h5: r.Cd }, 3: { h1: r.aC, h2: r.k8, h3: r.by, h4: r.Cd, h5: r.Cd }, 4: { h1: r.k8, h2: r.by, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 5: { h1: r.by, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 6: { h1: r.Cd, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd } },
    l = (e) => ({
     img: (n) => {
      let { src: i, ...t } = n;
      return (0, s.jsx)('img', { ...t, src: o(e, i), className: 'utrecht-img utrecht-img--fit' });
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
     let { children: n, omitH1: i = !1, headingLevel: r = 1, baseUrl: o = '', components: a = {} } = e;
     return (0, s.jsx)(t.Z, { components: { ...d(i, r), ...l(o), ...a }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => o });
   var t = i(16167),
    r = i(41757),
    s = i(52676);
   const o = (e) => {
    let { children: n, conformanceLevel: i, ...o } = e;
    return (0, s.jsx)(r.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, s.jsx)(t.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...o, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => o });
   var t = i(75271);
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
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
