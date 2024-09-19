'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [16882],
 {
  25675: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => h, contentTitle: () => u, default: () => j, frontMatter: () => c, metadata: () => g, toc: () => m });
   var r = i(52676),
    t = i(24785),
    s = i(71595),
    a = i(45054),
    o = i(78836);
   function l(e) {
    const n = { code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg ervoor dat, als de gebruiker bijvoorbeeld een link of button indrukt met een aanwijzer zoals een muis of vinger, er de mogelijkheid is om actie te voorkomen of ongedaan te maken.' }), '\n', (0, r.jsx)(n.p, { children: 'Dit voorkomt het per ongeluk aanraken en activeren van functies, waarvan het niet de bedoeling was.' }), '\n', (0, r.jsx)(n.p, { children: 'Dat kan op meerdere manieren:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['De actie gebeurt pas bij de ', (0, r.jsx)(n.code, { children: 'up' }), '-event, en de gebruiker kan nog de aanwijzer verplaatsen naar buiten het element om de up-event te voorkomen.'] }), '\n', (0, r.jsxs)(n.li, { children: ['De actie gebeurt bij de ', (0, r.jsx)(n.code, { children: 'down' }), '-event, maar bij de ', (0, r.jsx)(n.code, { children: 'up' }), '-event wordt het effect weer ongedaan gemaakt.'] }), '\n', (0, r.jsx)(n.li, { children: 'Je kunt het effect achteraf weer ongedaan maken.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Er is een uitzondering voor acties waarbij het essentieel is dat ze bij het ', (0, r.jsx)(n.code, { children: 'down' }), '-event gebeuren.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
   const c = { title: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.2 Aanwijzerannulering', pagination_label: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering', description: 'Zorg ervoor dat, als de gebruiker bijvoorbeeld een link of button indrukt met een aanwijzer zoals een muis of vinger, er de mogelijkheid is om actie te voorkomen of ongedaan te maken.', slug: '2.5.2', keywords: ['WCAG'] },
    u = void 0,
    g = { id: 'wcag/2.5.02', title: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering', description: 'Zorg ervoor dat, als de gebruiker bijvoorbeeld een link of button indrukt met een aanwijzer zoals een muis of vinger, er de mogelijkheid is om actie te voorkomen of ongedaan te maken.', source: '@site/docs/wcag/2.5.02.mdx', sourceDirName: 'wcag', slug: '/wcag/2.5.2', permalink: '/wcag/2.5.2', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.5.02.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.2 Aanwijzerannulering', pagination_label: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering', description: 'Zorg ervoor dat, als de gebruiker bijvoorbeeld een link of button indrukt met een aanwijzer zoals een muis of vinger, er de mogelijkheid is om actie te voorkomen of ongedaan te maken.', slug: '2.5.2', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.5.1 Aanwijzergebaren', permalink: '/wcag/2.5.1' }, next: { title: 'WCAG-succescriterium 2.5.3 Label in Naam', permalink: '/wcag/2.5.3' } },
    h = {},
    m = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Opgelet', id: 'opgelet', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', (0, r.jsx)(s.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering' }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#pointer-cancellation', children: (0, r.jsx)('span', { lang: 'en', children: '2.5.2 Pointer Cancellation' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#aanwijzerannulering', children: '2.5.2 Aanwijzerannulering' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#pointer-cancellation', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 2.5.2 Pointer Cancellation' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.5.2 Pointer Cancellation' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(n.h2, { id: 'opgelet', children: 'Opgelet' }), '\n', (0, r.jsx)(n.p, { children: 'Deze inhoud wordt binnenkort aangevuld met uitgebreidere uitleg, bronnen en informatie over hoe te testen.' }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(a.ZP, {}), '\n', (0, r.jsx)(o.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
  45054: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var r = i(52676),
    t = i(24785);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  78836: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var r = i(52676),
    t = i(24785);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  72657: (e, n, i) => {
   i.d(n, { V: () => a });
   var r = i(4814);
   i(75271);
   const t = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var s = i(52676);
   const a = (e) => {
    let { children: n, className: i, level: a = 1, suffix: o, ...l } = e;
    return (0, s.jsxs)('hgroup', { className: (0, r.Z)(t['nlds-inline-heading-group'], `utrecht-heading-${a}`, i), ...l, children: [(0, s.jsx)('h1', { className: (0, r.Z)(t['nlds-inline-heading-group__heading']), children: n }), o && (0, s.jsxs)('p', { className: (0, r.Z)(t['nlds-inline-heading-group__suffix']), children: [o ? ' ' : '', o] })] });
   };
  },
  71595: (e, n, i) => {
   i.d(n, { j: () => l });
   var r = i(46506),
    t = (i(75271), i(72657));
   const s = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    a = 'nlds-inline-heading-group__badge_TgvT';
   var o = i(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: i, ...l } = e;
    return (0, o.jsx)(t.V, { className: s, suffix: i && (0, o.jsx)(r.Ou, { className: a, children: i }), ...l, children: n });
   };
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => a });
   var r = i(75271);
   const t = {},
    s = r.createContext(t);
   function a(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
