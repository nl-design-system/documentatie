'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [60447],
 {
  90388: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => g, contentTitle: () => d, default: () => j, frontMatter: () => c, metadata: () => u, toc: () => h });
   var i = r(52676),
    t = r(24785),
    s = r(10757),
    o = r(47277);
   function a(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Aanwijsgebaren zijn bijvoorbeeld het slepen van inhoud binnen bepaalde kaders, het swipen van foto's of het vergroten van een kaart met twee vingers." }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de gebruiker deze acties ook kan doen met \xe9\xe9n aanwijzer zoals een muis of een vinger zonder deze extra gebaren te hoeven maken.' }), '\n', (0, i.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: "Je kunt foto's swipen om meer foto's te bekijken. Maar je kunt ook op een button klikken." }), '\n', (0, i.jsx)(n.li, { children: 'Je kunt een slider voor de maximumprijs verslepen. Maar je kunt ook klikken op de maximumprijs die je wilt instellen of het getal handmatig invoeren.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Er is een uitzondering voor als aanwijsgebaar essentieel is voor de functionaliteit.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
   const c = { title: 'WCAG-succescriterium 2.5.1 Aanwijzergebaren', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.1 Aanwijzergebaren', pagination_label: 'WCAG-succescriterium 2.5.1 Aanwijzergebaren', description: 'Aan deze inhoud wordt gewerkt en bevat nu referenties en een korte samenvatting.', slug: '2.5.1', keywords: ['WCAG'] },
    d = 'WCAG-succescriterium 2.5.1 Aanwijzergebaren',
    u = { id: 'wcag/2.5.01', title: 'WCAG-succescriterium 2.5.1 Aanwijzergebaren', description: 'Aan deze inhoud wordt gewerkt en bevat nu referenties en een korte samenvatting.', source: '@site/docs/wcag/2.5.01.mdx', sourceDirName: 'wcag', slug: '/wcag/2.5.1', permalink: '/en/wcag/2.5.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.5.01.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.5.1 Aanwijzergebaren', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.1 Aanwijzergebaren', pagination_label: 'WCAG-succescriterium 2.5.1 Aanwijzergebaren', description: 'Aan deze inhoud wordt gewerkt en bevat nu referenties en een korte samenvatting.', slug: '2.5.1', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: '2.4.13 Focusweergave', permalink: '/en/wcag/2.4.13' }, next: { title: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering', permalink: '/en/wcag/2.5.2' } },
    g = {},
    h = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Opgelet', id: 'opgelet', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'wcag-succescriterium-251-aanwijzergebaren', children: 'WCAG-succescriterium 2.5.1 Aanwijzergebaren' }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#pointer-gestures', children: (0, i.jsx)('span', { lang: 'en', children: '2.5.1 Pointer Gestures' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#aanwijzergebaren', children: '2.5.1 Aanwijzergebaren' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#pointer-gestures', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 2.5.1 Pointer Gestures' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 2.5.1 Pointer Gestures' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(l, {}), '\n', (0, i.jsx)(n.h2, { id: 'opgelet', children: 'Opgelet' }), '\n', (0, i.jsx)(n.p, { children: 'Deze inhoud wordt binnenkort aangevuld met uitgebreidere uitleg, bronnen en informatie over hoe te testen.' }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(s.ZP, {}), '\n', (0, i.jsx)(o.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  10757: (e, n, r) => {
   r.d(n, { ZP: () => o });
   var i = r(52676),
    t = r(24785);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  47277: (e, n, r) => {
   r.d(n, { ZP: () => o });
   var i = r(52676),
    t = r(24785);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  24785: (e, n, r) => {
   r.d(n, { Z: () => a, a: () => o });
   var i = r(75271);
   const t = {},
    s = i.createContext(t);
   function o(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
