'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [69217],
 {
  30950: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => h, contentTitle: () => u, default: () => b, frontMatter: () => c, metadata: () => g, toc: () => p });
   var i = r(52676),
    o = r(24785),
    s = r(51515),
    t = r(91410),
    l = r(88435);
   function a(e) {
    const n = { p: 'p', strong: 'strong', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Wanneer een toetsenbordgebruiker binnen de webpagina navigeert, bijvoorbeeld met de Tab-toets, moet de tabvolgorde logisch en voorspelbaar zijn.' }), '\n', (0, i.jsxs)(n.p, { children: ['De ', (0, i.jsx)(n.strong, { children: 'visuele' }), ' focusvolgorde moet betekenisvol zijn.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
   const c = { title: 'WCAG-succescriterium 2.4.3 Focus volgorde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.3 Focus volgorde', pagination_label: 'WCAG-succescriterium 2.4.3 Focus volgorde', description: 'Aan deze inhoud wordt gewerkt en bevat nu referenties en een korte samenvatting.', slug: '2.4.3', keywords: ['WCAG', 'Focus Order', 'Niveau A'] },
    u = void 0,
    g = { id: 'wcag/2.4.03', title: 'WCAG-succescriterium 2.4.3 Focus volgorde', description: 'Aan deze inhoud wordt gewerkt en bevat nu referenties en een korte samenvatting.', source: '@site/docs/wcag/2.4.03.mdx', sourceDirName: 'wcag', slug: '/wcag/2.4.3', permalink: '/en/wcag/2.4.3', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.03.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.4.3 Focus volgorde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.3 Focus volgorde', pagination_label: 'WCAG-succescriterium 2.4.3 Focus volgorde', description: 'Aan deze inhoud wordt gewerkt en bevat nu referenties en een korte samenvatting.', slug: '2.4.3', keywords: ['WCAG', 'Focus Order', 'Niveau A'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.4.2 Paginatitel', permalink: '/en/wcag/2.4.2' }, next: { title: 'WCAG-succescriterium 2.4.4 Linkdoel (in context)', permalink: '/en/wcag/2.4.4' } },
    h = {},
    p = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
    ];
   function v(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', (0, i.jsx)(s.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.4.3 Focus volgorde' }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#focus-order', children: (0, i.jsx)('span', { lang: 'en', children: '2.4.3 Focus Order' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#focus-volgorde', children: '2.4.3 Focus volgorde' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-order', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.3 Focus Order' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.3 Focus Order' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(n.p, { children: 'Een voorspelbare focus volgorde is belangrijk voor toetsenbordgebruikers. Zij kunnen dan bijvoorbeeld makkelijker binnen een pagina links of buttons ontdekken of een formulier invullen.' }), '\n', (0, i.jsx)(n.p, { children: 'Zorg ervoor dat de natuurlijke tabvolgorde bij de verschillende resoluties, schermbreedtes en ori\xebntaties logisch blijft.' }), '\n', (0, i.jsx)(n.p, { children: "Met het tabindex attribuut kan de volgorde ook specifiek worden ingesteld per element, maar dat raden we af, omdat je dan voor elk element op de pagina zo'n tabindex zou moeten zetten, en het is bijna onmogelijk dat goed te doen, zeker bij verschillende resoluties, schermbreedtes en ori\xebntaties." }), '\n', (0, i.jsxs)(n.p, { children: ['Voor een Nederlandstalige website is leesvolgorde van links naar rechts en van boven naar beneden. Zorg er dan voor dat ook de tabvolgorde van links naar rechts en van boven naar beneden is. Voor bijvoorbeeld Hebreeuws of Arabisch kan deze volgorde anders zijn. Laat de tabvolgorde die van de taalinstelling en ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir', children: 'leesrichting' }), ' volgen.'] }), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Toetsenbordnavigatie: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Gebruik geen positieve tabindex' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Meerdere stappen: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming', children: 'Zorg voor een consistente navigatie en benaming van links en buttons' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Visueel ontwerp: ', (0, i.jsx)(n.a, { href: '/visueel-ontwerp/focus-goed-zichtbaar', children: 'Maak toetsenbord focus goed zichtbaar' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(t.ZP, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'Tab met het toetsenbord door de pagina en controleer of de tabvolgorde logisch en zoals verwacht is.\nDe tabvolgorde moet voor elk type weergave logisch, zichtbaar en voorspelbaar zijn en niet alleen voor een breed scherm op hoge resolutie.' }), '\n', (0, i.jsx)(n.p, { children: 'Let vooral op als de volgorde voor een andere weergave wordt aangepast via CSS met grid of flexbox.' }), '\n', (0, i.jsx)(n.p, { children: 'Aanvullende testen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Tab ook terug met shift-tab, werkt dat ook voorspelbaar?' }), '\n', (0, i.jsx)(n.li, { children: 'Controleer dialogs zoals het responsive menu. Is de tabvolgorde logisch. Keert bij het sluiten de focus terug naar de button om het dialog te openen?' }), '\n', (0, i.jsx)(n.li, { children: 'Test bij verschillende schermbreedtes en ori\xebntaties (landscape/portrait).' }), '\n', (0, i.jsx)(n.li, { children: 'Zoom in tot 400% en check de tabvolgorde.' }), '\n', (0, i.jsx)(n.li, { children: 'Controleer dynamisch toegevoegde inhoud, zoals extra formuliervelden bij het selecteren van optie of een uitklapmenu.' }), '\n'] }), '\n', (0, i.jsx)(l.ZP, {})] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
  },
  91410: (e, n, r) => {
   r.d(n, { ZP: () => t });
   var i = r(52676),
    o = r(24785);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88435: (e, n, r) => {
   r.d(n, { ZP: () => t });
   var i = r(52676),
    o = r(24785);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, o.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function t(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  66120: (e, n, r) => {
   r.d(n, { V: () => t });
   var i = r(4814);
   r(75271);
   const o = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var s = r(52676);
   const t = (e) => {
    let { children: n, className: r, level: t = 1, suffix: l, ...a } = e;
    return (0, s.jsxs)('hgroup', { className: (0, i.Z)(o['nlds-inline-heading-group'], `utrecht-heading-${t}`, r), ...a, children: [(0, s.jsx)('h1', { className: (0, i.Z)(o['nlds-inline-heading-group__heading']), children: n }), l && (0, s.jsxs)('p', { className: (0, i.Z)(o['nlds-inline-heading-group__suffix']), children: [l ? ' ' : '', l] })] });
   };
  },
  51515: (e, n, r) => {
   r.d(n, { j: () => a });
   var i = r(46506),
    o = (r(75271), r(66120));
   const s = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    t = 'nlds-inline-heading-group__badge_TgvT';
   var l = r(52676);
   const a = (e) => {
    let { children: n, conformanceLevel: r, ...a } = e;
    return (0, l.jsx)(o.V, { className: s, suffix: r && (0, l.jsx)(i.Ou, { className: t, children: r }), ...a, children: n });
   };
  },
  24785: (e, n, r) => {
   r.d(n, { Z: () => l, a: () => t });
   var i = r(75271);
   const o = {},
    s = i.createContext(o);
   function t(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
