'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [92060],
 {
  26453: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => g, contentTitle: () => u, default: () => m, frontMatter: () => a, metadata: () => h, toc: () => f });
   var t = r(52676),
    i = r(24785),
    o = r(71595),
    s = r(45054),
    d = r(78836);
   function l(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Als de inhoud wijzigt wanneer een gebruiker over een element hovert met de muis of het de toetsenbordfocus geeft, zorg er dan voor dat de interactie voorspelbaar is.' }), '\n', (0, t.jsx)(n.p, { children: 'Bij sommige componenten wordt aanvullende content zichtbaar en daarna weer verborgen door het gebruik van hover met de aanwijzer (muis) of via focus met het toetsenbord. Bijvoorbeeld bij een uitklapmenu of bij het tonen van extra informatie in een tooltip.' }), '\n', (0, t.jsx)(n.p, { children: 'Hiervoor gelden enkele regels:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'De gebruiker moet de aanvullende content kunnen verbergen zonder de muis of toetsenbordfocus te verplaatsen, bijvoorbeeld door op de Escape-toets te drukken.' }), '\n', (0, t.jsx)(n.li, { children: 'De gebruiker moet met de aanwijzer (muis) over de extra inhoud kunnen bewegen, zonder dat de inhoud weer wordt verborgen.' }), '\n', (0, t.jsxs)(n.li, { children: ['De extra inhoud moet zichtbaar blijven totdat:', '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'de toetsenbordfocus of de aanwijzer (muis) zich buiten de extra inhoud verplaatst;' }), '\n', (0, t.jsx)(n.li, { children: 'of de gebruiker de extra inhoud heeft verborgen;' }), '\n', (0, t.jsx)(n.li, { children: 'of de extra inhoud niet langer geldig is.' }), '\n'] }), '\n'] }), '\n'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
   const a = { title: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.13 Content bij hover of focus', pagination_label: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', description: 'Als de inhoud wijzigt wanneer een gebruiker over een element hovert met de muis of het de toetsenbordfocus geeft, zorg er dan voor dat de interactie voorspelbaar is.', slug: '1.4.13', keywords: ['WCAG'] },
    u = void 0,
    h = { id: 'wcag/1.4.13', title: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', description: 'Als de inhoud wijzigt wanneer een gebruiker over een element hovert met de muis of het de toetsenbordfocus geeft, zorg er dan voor dat de interactie voorspelbaar is.', source: '@site/docs/wcag/1.4.13.mdx', sourceDirName: 'wcag', slug: '/wcag/1.4.13', permalink: '/wcag/1.4.13', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.4.13.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.13 Content bij hover of focus', pagination_label: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', description: 'Als de inhoud wijzigt wanneer een gebruiker over een element hovert met de muis of het de toetsenbordfocus geeft, zorg er dan voor dat de interactie voorspelbaar is.', slug: '1.4.13', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.4.12 Tekstafstand', permalink: '/wcag/1.4.12' }, next: { title: 'WCAG-succescriterium 2.1.1 Toetsenbord', permalink: '/wcag/2.1.1' } },
    g = {},
    f = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Opgelet', id: 'opgelet', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', '\n', (0, t.jsx)(o.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 1.4.13 Content bij hover of focus' }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#content-on-hover-or-focus', children: (0, t.jsx)('span', { lang: 'en', children: '1.4.13 Content on Hover or Focus' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#content-bij-hover-of-focus', children: '1.4.13 Content bij hover of focus' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#content-on-hover-or-focus', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 1.4.13 Content on Hover or Focus' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 1.4.13 Content on Hover or Focus' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(n.h2, { id: 'opgelet', children: 'Opgelet' }), '\n', (0, t.jsx)(n.p, { children: 'Deze inhoud wordt binnenkort aangevuld met uitgebreidere uitleg, bronnen en informatie over hoe te testen.' }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(s.ZP, {}), '\n', (0, t.jsx)(d.ZP, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
  },
  45054: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var t = r(52676),
    i = r(24785);
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  78836: (e, n, r) => {
   r.d(n, { ZP: () => s });
   var t = r(52676),
    i = r(24785);
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  72657: (e, n, r) => {
   r.d(n, { V: () => s });
   var t = r(4814);
   r(75271);
   const i = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var o = r(52676);
   const s = (e) => {
    let { children: n, className: r, level: s = 1, suffix: d, ...l } = e;
    return (0, o.jsxs)('hgroup', { className: (0, t.Z)(i['nlds-inline-heading-group'], `utrecht-heading-${s}`, r), ...l, children: [(0, o.jsx)('h1', { className: (0, t.Z)(i['nlds-inline-heading-group__heading']), children: n }), d && (0, o.jsxs)('p', { className: (0, t.Z)(i['nlds-inline-heading-group__suffix']), children: [d ? ' ' : '', d] })] });
   };
  },
  71595: (e, n, r) => {
   r.d(n, { j: () => l });
   var t = r(46506),
    i = (r(75271), r(72657));
   const o = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    s = 'nlds-inline-heading-group__badge_TgvT';
   var d = r(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: r, ...l } = e;
    return (0, d.jsx)(i.V, { className: o, suffix: r && (0, d.jsx)(t.Ou, { className: s, children: r }), ...l, children: n });
   };
  },
  24785: (e, n, r) => {
   r.d(n, { Z: () => d, a: () => s });
   var t = r(75271);
   const i = {},
    o = t.createContext(i);
   function s(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
