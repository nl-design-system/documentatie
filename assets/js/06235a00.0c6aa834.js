'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [95617],
 {
  51244: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => g, contentTitle: () => u, default: () => m, frontMatter: () => c, metadata: () => h, toc: () => p });
   var t = i(52676),
    s = i(24785),
    r = i(71595),
    o = i(45054),
    l = i(78836);
   function d(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Zorg ervoor dat componenten die dezelfde functie hebben binnen een website, er hetzelfde uitzien en ook hetzelfde werken.' }), '\n', (0, t.jsx)(n.p, { children: 'Denk hierbij aan links, accordeons, iconen en linkteksten of labels en buttons in formulieren. Wees consistent, dan begrijpt de gebruiker beter wat de betekenis is.' }), '\n', (0, t.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: "Gebruik dezelfde tekst voor een verzendbutton bij de formulieren in een website. Niet in het ene formulier 'Verzenden' en in een ander formulier 'Versturen'." }), '\n', (0, t.jsx)(n.li, { children: 'Gebruik hetzelfde icoon voor een button om invoer te verwijderen. Niet eerst een prullenbak icoon, terwijl een andere button een kruis als icoon heeft.' }), '\n', (0, t.jsx)(n.li, { children: "Noem de link naar de voorpagina altijd hetzelfde binnen de website. Niet eerst 'Home', dan 'Voorpagina' en dan 'Start'." }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
   const c = { title: 'WCAG-succescriterium 3.2.4 Consistente identificatie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.2.4 Consistente identificatie', pagination_label: 'WCAG-succescriterium 3.2.4 Consistente identificatie', description: 'Aan deze inhoud wordt gewerkt en bevat nu referenties en een korte samenvatting.', slug: '3.2.4', keywords: ['WCAG'] },
    u = void 0,
    h = { id: 'wcag/3.2.04', title: 'WCAG-succescriterium 3.2.4 Consistente identificatie', description: 'Aan deze inhoud wordt gewerkt en bevat nu referenties en een korte samenvatting.', source: '@site/docs/wcag/3.2.04.mdx', sourceDirName: 'wcag', slug: '/wcag/3.2.4', permalink: '/wcag/3.2.4', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.2.04.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 3.2.4 Consistente identificatie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.2.4 Consistente identificatie', pagination_label: 'WCAG-succescriterium 3.2.4 Consistente identificatie', description: 'Aan deze inhoud wordt gewerkt en bevat nu referenties en een korte samenvatting.', slug: '3.2.4', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 3.2.3 Consistente navigatie', permalink: '/wcag/3.2.3' }, next: { title: 'WCAG-succescriterium 3.2.6 Consistente hulp', permalink: '/wcag/3.2.6' } },
    g = {},
    p = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Opgelet', id: 'opgelet', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
    ];
   function f(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', '\n', (0, t.jsx)(r.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 3.2.4 Consistente identificatie' }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#consistent-identification', children: (0, t.jsx)('span', { lang: 'en', children: '3.2.4 Consistente Identification' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#consistente-identificatie', children: '3.2.4 Consistente identificatie' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#consistent-identification', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 3.2.4 Consistente Identification' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 3.2.4 Consistente Identification' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(a, {}), '\n', (0, t.jsx)(n.h2, { id: 'opgelet', children: 'Opgelet' }), '\n', (0, t.jsx)(n.p, { children: 'Deze inhoud wordt binnenkort aangevuld met uitgebreidere uitleg, bronnen en informatie over hoe te testen.' }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(o.ZP, {}), '\n', (0, t.jsx)(l.ZP, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f(e);
   }
  },
  45054: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(52676),
    s = i(24785);
   function r(e) {
    const n = { a: 'a', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  78836: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(52676),
    s = i(24785);
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  72657: (e, n, i) => {
   i.d(n, { V: () => o });
   var t = i(4814);
   i(75271);
   const s = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var r = i(52676);
   const o = (e) => {
    let { children: n, className: i, level: o = 1, suffix: l, ...d } = e;
    return (0, r.jsxs)('hgroup', { className: (0, t.Z)(s['nlds-inline-heading-group'], `utrecht-heading-${o}`, i), ...d, children: [(0, r.jsx)('h1', { className: (0, t.Z)(s['nlds-inline-heading-group__heading']), children: n }), l && (0, r.jsxs)('p', { className: (0, t.Z)(s['nlds-inline-heading-group__suffix']), children: [l ? ' ' : '', l] })] });
   };
  },
  71595: (e, n, i) => {
   i.d(n, { j: () => d });
   var t = i(46506),
    s = (i(75271), i(72657));
   const r = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    o = 'nlds-inline-heading-group__badge_TgvT';
   var l = i(52676);
   const d = (e) => {
    let { children: n, conformanceLevel: i, ...d } = e;
    return (0, l.jsx)(s.V, { className: r, suffix: i && (0, l.jsx)(t.Ou, { className: o, children: i }), ...d, children: n });
   };
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => o });
   var t = i(75271);
   const s = {},
    r = t.createContext(s);
   function o(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
