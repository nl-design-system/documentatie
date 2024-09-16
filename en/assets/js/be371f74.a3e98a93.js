'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4137],
 {
  61943: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => g, contentTitle: () => u, default: () => b, frontMatter: () => d, metadata: () => h, toc: () => j });
   var r = i(52676),
    s = i(24785),
    t = i(71595),
    o = i(45054),
    a = i(78836);
   function c(e) {
    const n = { p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Dit kan bijvoorbeeld door het gebruik van een focusring (outline).' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   const d = { title: 'WCAG-succescriterium 2.4.7 Focus zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.7 Focus zichtbaar', pagination_label: '2.4.7 Focus zichtbaar', description: 'Beschrijving, documentatie, gerelateerde richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.', slug: '2.4.7', keywords: ['WCAG', 'Toetsenbord'] },
    u = void 0,
    h = { id: 'wcag/2.4.07', title: 'WCAG-succescriterium 2.4.7 Focus zichtbaar', description: 'Beschrijving, documentatie, gerelateerde richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.', source: '@site/docs/wcag/2.4.07.mdx', sourceDirName: 'wcag', slug: '/wcag/2.4.7', permalink: '/en/wcag/2.4.7', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.07.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.4.7 Focus zichtbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.7 Focus zichtbaar', pagination_label: '2.4.7 Focus zichtbaar', description: 'Beschrijving, documentatie, gerelateerde richtlijnen, bronnen, gebruikersonderzoek en hoe te testen.', slug: '2.4.7', keywords: ['WCAG', 'Toetsenbord'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.4.6 Koppen en labels', permalink: '/en/wcag/2.4.6' }, next: { title: 'WCAG-succescriterium 2.4.10 Paragraafkoppen', permalink: '/en/wcag/2.4.10' } },
    g = {},
    j = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijn', id: 'gerelateerde-nl-design-system-richtlijn', level: 2 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', (0, r.jsx)(t.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 2.4.7 Focus zichtbaar' }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#focus-visible', children: (0, r.jsx)('span', { lang: 'en', children: '2.4.7 Focus Visible' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#focus-zichtbaar', children: '2.4.7 Focus zichtbaar' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-visible', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 12.4.7 Focus Visible' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.7 Focus Visible' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(l, {}), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': voor het NL Design System willen we ook voldoen aan het WCAG-succescriterium ', (0, r.jsx)(n.a, { href: '/wcag/2.4.13', children: '2.4.13 Focusweergave' }), ' (niveau AAA), dat eisen stelt aan de weergave en het kleurcontrast van de focusring. Dit staat beschreven bij de richtlijn ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren//visueel-ontwerp/#maak-toetsenbord-focus-goed-zichtbaar', children: 'Maak de toetsenbordfocus goed zichtbaar' }), '. Het ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Techniques/general/G149.html', children: 'intact houden van de browser-outline' }), ' is voldoende voor WCAG-succescriterium 2.4.7 (versie 2.2 niveau AA) maar in de praktijk is die focusring niet voldoende duidelijk in alle situaties.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijn', children: 'Gerelateerde NL Design System-richtlijn' }), '\n', (0, r.jsxs)(n.p, { children: ['Formulieren - Visueel Ontwerp: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', children: 'Maak de toetsenbordfocus goed zichtbaar' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: 'https://www.sarasoueidan.com/blog/focus-indicators/#wcag-2.1-and-wcag-2.2-focus-indicator-accessibility-requirements', children: (0, r.jsx)('span', { lang: 'en', children: 'A guide to designing accessible, WCAG-conformant focus indicators' }) }), ' van Sara Soueidan.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(o.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt. Gebruik de tab-toets om te controleren of links, buttons, invoervelden en checkboxes duidelijk zichtbaar de focus aangeven. Controleer de focus van radiobuttons en tabs met de pijltjestoetsen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Als in de CSS de outline is verwijderd (', (0, r.jsx)(n.code, { children: 'outline: none;' }), '), moet er een alternatief zijn die de toetsenbordfocus visueel aangeeft, bijvoorbeeld door het toevoegen een CSS-border.'] }), '\n', (0, r.jsx)(n.p, { children: 'Additionele testen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['de ', (0, r.jsx)(n.a, { href: '/wcag/2.4.1', children: 'skip link' }), ' wordt zichtbaar als deze toetsenbord krijgt.'] }), '\n', (0, r.jsx)(n.li, { children: 'de outline (of het alternatief) is goed zichtbaar in dark- en in light-mode, als deze optie aangeboden wordt op de webpagina.' }), '\n'] }), '\n', (0, r.jsx)(a.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
  45054: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var r = i(52676),
    s = i(24785);
   function t(e) {
    const n = { a: 'a', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  78836: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var r = i(52676),
    s = i(24785);
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(t, { ...e }) }) : t(e);
   }
  },
  72657: (e, n, i) => {
   i.d(n, { V: () => o });
   var r = i(4814);
   i(75271);
   const s = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var t = i(52676);
   const o = (e) => {
    let { children: n, className: i, level: o = 1, suffix: a, ...c } = e;
    return (0, t.jsxs)('hgroup', { className: (0, r.Z)(s['nlds-inline-heading-group'], `utrecht-heading-${o}`, i), ...c, children: [(0, t.jsx)('h1', { className: (0, r.Z)(s['nlds-inline-heading-group__heading']), children: n }), a && (0, t.jsxs)('p', { className: (0, r.Z)(s['nlds-inline-heading-group__suffix']), children: [a ? ' ' : '', a] })] });
   };
  },
  71595: (e, n, i) => {
   i.d(n, { j: () => c });
   var r = i(46506),
    s = (i(75271), i(72657));
   const t = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    o = 'nlds-inline-heading-group__badge_TgvT';
   var a = i(52676);
   const c = (e) => {
    let { children: n, conformanceLevel: i, ...c } = e;
    return (0, a.jsx)(s.V, { className: t, suffix: i && (0, a.jsx)(r.Ou, { className: o, children: i }), ...c, children: n });
   };
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => o });
   var r = i(75271);
   const s = {},
    t = r.createContext(s);
   function o(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), r.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
