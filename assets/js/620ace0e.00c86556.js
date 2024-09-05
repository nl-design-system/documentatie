'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [49159],
 {
  32936: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => p, contentTitle: () => u, default: () => j, frontMatter: () => c, metadata: () => h, toc: () => g });
   var i = r(52676),
    t = r(24785),
    s = r(51515),
    o = r(91410),
    l = r(88435);
   function a(e) {
    const n = { code: 'code', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg dat de browser (en andere software, zoals een password manager) kan begrijpen wat een gebruiker moet invoeren, zodat die kan helpen en het invoeren makkelijker kan maken.' }), '\n', (0, i.jsxs)(n.p, { children: ['Dit kan door gebruik te maken van het HTML-attribuut ', (0, i.jsx)(n.code, { children: 'autocomplete' }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
   const c = { title: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.5 Identificeer het doel van de input', pagination_label: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', description: 'Zorg dat de browser kan begrijpen wat een gebruiker moet invoeren, zodat die kan helpen en het makkelijker kan maken.', slug: '1.3.5', keywords: ['WCAG'] },
    u = void 0,
    h = { id: 'wcag/1.3.05', title: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', description: 'Zorg dat de browser kan begrijpen wat een gebruiker moet invoeren, zodat die kan helpen en het makkelijker kan maken.', source: '@site/docs/wcag/1.3.05.mdx', sourceDirName: 'wcag', slug: '/wcag/1.3.5', permalink: '/wcag/1.3.5', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.3.05.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.5 Identificeer het doel van de input', pagination_label: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', description: 'Zorg dat de browser kan begrijpen wat een gebruiker moet invoeren, zodat die kan helpen en het makkelijker kan maken.', slug: '1.3.5', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.3.4 Weergavestand', permalink: '/wcag/1.3.4' }, next: { title: 'WCAG-succescriterium 1.3.6 Identificeer het doel', permalink: '/wcag/1.3.6' } },
    p = {},
    g = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijn', id: 'gerelateerde-nl-design-system-richtlijn', level: 2 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', (0, i.jsx)(s.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input' }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#identify-input-purpose', children: (0, i.jsx)('span', { lang: 'en', children: '1.3.5 Identify Input Purpose' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#niet-tekstuele-content', children: '1.3.5 Identificeer het doel van de input' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#identify-input-purpose', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 1.3.5 Identify Input Purpose' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 1.3.5 Identify Input Purpose' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijn', children: 'Gerelateerde NL Design System-richtlijn' }), '\n', (0, i.jsxs)(n.p, { children: ['Formulieren - Voorkom fouten: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', children: 'Autocomplete' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['WCAG bevat een volledige lijst van ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#input-purposes', children: 'waarden voor autocomplete' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Jules Ernst van 200 OK heeft van deze lijst een ', (0, i.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/', children: 'Nederlandse interpretatie van autocomplete' }), 'gemaakt.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(o.ZP, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: 'https://www.deque.com/axe/browser-extensions/', children: 'Axe DevTools' }), ' kan controleren op ongeldige waarden (typefouten) voor autocomplete.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Inspecteer daarna in de gegenereerde HTML-code van de webpagina de invoervelden, bijvoorbeeld met een ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Controleer of de invoervelden van formulieren een autocomplete-attribuut hebben met een juiste waarde.' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op:' }), ' dit geldt alleen voor invoervelden waarin persoonlijke gegevens worden uitgevraagd en niet voor bijvoorbeeld een formulier om op de website te zoeken.'] }), '\n', (0, i.jsx)(l.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  91410: (e, n, r) => {
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
  88435: (e, n, r) => {
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
  66120: (e, n, r) => {
   r.d(n, { V: () => o });
   var i = r(4814);
   r(75271);
   const t = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var s = r(52676);
   const o = (e) => {
    let { children: n, className: r, level: o = 1, suffix: l, ...a } = e;
    return (0, s.jsxs)('hgroup', { className: (0, i.Z)(t['nlds-inline-heading-group'], `utrecht-heading-${o}`, r), ...a, children: [(0, s.jsx)('h1', { className: (0, i.Z)(t['nlds-inline-heading-group__heading']), children: n }), l && (0, s.jsxs)('p', { className: (0, i.Z)(t['nlds-inline-heading-group__suffix']), children: [l ? ' ' : '', l] })] });
   };
  },
  51515: (e, n, r) => {
   r.d(n, { j: () => a });
   var i = r(46506),
    t = (r(75271), r(66120));
   const s = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    o = 'nlds-inline-heading-group__badge_TgvT';
   var l = r(52676);
   const a = (e) => {
    let { children: n, conformanceLevel: r, ...a } = e;
    return (0, l.jsx)(t.V, { className: s, suffix: r && (0, l.jsx)(i.Ou, { className: o, children: r }), ...a, children: n });
   };
  },
  24785: (e, n, r) => {
   r.d(n, { Z: () => l, a: () => o });
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
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
