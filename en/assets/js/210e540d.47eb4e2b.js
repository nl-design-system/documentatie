'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2601],
 {
  96819: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => g, contentTitle: () => h, default: () => f, frontMatter: () => c, metadata: () => u, toc: () => j });
   var r = t(52676),
    i = t(24785),
    s = t(71595),
    o = t(45054),
    d = t(78836);
   function l(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt.' }), '\n', (0, r.jsxs)(n.p, { children: ['Een optie is het geven van een outline (focusring). Dit kan via de CSS-properties ', (0, r.jsx)(n.code, { children: 'outline' }), ' of ', (0, r.jsx)(n.code, { children: 'border' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Geef de outline:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['een dikte van minimaal 2 ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel', children: 'CSS-pixels' }), ';'] }), '\n', (0, r.jsx)(n.li, { children: 'een kleurcontrast van ten minste 3:1 ten opzichte van de aangrenzende kleuren;' }), '\n', (0, r.jsxs)(n.li, { children: ['een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de ', (0, r.jsx)(n.strong, { children: 'gefocuste' }), ' en ', (0, r.jsx)(n.strong, { children: 'niet-gefocuste' }), ' staat.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Een andere optie is geen outline toepassen, maar het hele element van kleur te laten veranderen.\nBijvoorbeeld een button die van kleur verandert bij toetsenbordfocus. Ook hier geldt een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de ', (0, r.jsx)(n.strong, { children: 'gefocuste' }), ' en ', (0, r.jsx)(n.strong, { children: 'niet-gefocuste' }), ' staat.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
   const c = { title: 'WCAG-succescriterium 2.4.13 Focusweergave', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.13 Focusweergave', pagination_label: '2.4.13 Focusweergave', description: 'Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt.', slug: '2.4.13', keywords: ['WCAG'] },
    h = void 0,
    u = { id: 'wcag/2.4.13', title: 'WCAG-succescriterium 2.4.13 Focusweergave', description: 'Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt.', source: '@site/docs/wcag/2.4.13.mdx', sourceDirName: 'wcag', slug: '/wcag/2.4.13', permalink: '/en/wcag/2.4.13', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.13.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.4.13 Focusweergave', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.13 Focusweergave', pagination_label: '2.4.13 Focusweergave', description: 'Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt.', slug: '2.4.13', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.4.12 Focus niet bedekt (uitgebreid)', permalink: '/en/wcag/2.4.12' }, next: { title: 'WCAG-succescriterium 2.5.1 Aanwijzergebaren', permalink: '/en/wcag/2.5.1' } },
    g = {},
    j = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', (0, r.jsx)(s.j, { level: 1, conformanceLevel: 'Niveau AAA', children: 'WCAG-succescriterium 2.4.13 Focusweergave' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Voor het NL Design System houden de richtlijnen van WCAG 2.2 ', (0, r.jsx)(n.strong, { children: 'AA' }), ' aan, maar we willen we ook voldoen aan dit WCAG-succescriterium 2.4.13 Focusweergave, niveau ', (0, r.jsx)(n.strong, { children: 'AAA' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Het intact laten van de standaard outline die door een browser wordt geleverd is voldoende voor het WCAG-succescriterium ', (0, r.jsx)(n.a, { href: '/wcag/2.4.7', children: '2.4.7 Focus zichtbaar' }), '. Maar in de praktijk is deze standaard outline niet altijd duidelijk genoeg. Elke browser hanteert een eigen stijl voor de outline. Hierdoor kun je niet op de standaard browser-outline vertrouwen voor een consistente, goed zichtbare focus.'] }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Success Criterion 2.4.13 Focus Appearance' }) }), '.'] }), '\n', (0, r.jsx)(n.li, { children: 'De Nederlandse vertaling van het WCAG-succescriterium 2.4.13 Focusweergave verschijnt binnenkort.' }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-appearance', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.13 Focus Appearance' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.13: Focus Appearance' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(a, {}), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Formulieren - Visueel ontwerp: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar', children: 'Maak de toetsenbordfocus goed zichtbaar' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren- Toetsenbord: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord', children: 'Zorg dat het formulier werkt met een toetsenbord' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: 'https://www.sarasoueidan.com/blog/focus-indicators/', children: 'A guide to designing accessible, WCAG-conformant focus indicators' }), ' van Sara Soueidan.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsxs)(n.p, { children: ['In het onderzoek van het ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/wmebv/vng-online-formulieren', children: 'Contactformulier voor WMEBV' }), ' staat het advies:\nzorg voor een zichtbare focusindicator voor mensen met een visuele beperking.'] }), '\n', (0, r.jsx)(o.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt. Gebruik de tab-toets om te controleren of links, buttons, invoervelden en checkboxes duidelijk zichtbaar de focus aangeven. Controleer de focus van radiobuttons en tabs met de pijltjestoetsen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Als in de CSS de outline is verwijderd door de CSS ', (0, r.jsx)(n.code, { children: 'outline: none;' }), ', moet er een alternatief zijn die de toetsenbordfocus visueel duidelijk aangeeft. Bijvoorbeeld door het defini\xebren van een border als een element focus krijgt.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Controleer of de breedte van de outline tenminste 2 ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel', children: 'CSS-pixels' }), ' breed is.\nInspecteer in de gegenereerde HTML-code van de webpagina de elementen die de toetsenbordfocus kunnen krijgen, bijvoorbeeld met een ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Zorg dat het element wat je wilt inspecteren de focus heeft.' }), '\n', (0, r.jsxs)(n.li, { children: ['In de CSS-properties moet gedefinieerd staan dat de ', (0, r.jsx)(n.code, { children: 'outline-width' }), ' of ', (0, r.jsx)(n.code, { children: 'border-width' }), ' ten minste 2 pixels is.'] }), '\n', (0, r.jsx)(n.li, { children: 'Controleer of het kleurcontrast van de outline ten minste 3:1 is ten opzichte van de aangrenzende kleuren, dus de binnen- en buitenkant van de lijn.' }), '\n', (0, r.jsx)(n.li, { children: 'Controleer dan of er een kleurcontrast is van ten minste 3:1 tussen dezelfde pixels in de gefocuste en niet-gefocuste staat.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Is er geen outline, maar verandert de kleur van het hele element?' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Controleer dan of er een kleurcontrast is van ten minste 3:1 tussen dezelfde pixels in de ', (0, r.jsx)(n.strong, { children: 'gefocuste' }), ' en ', (0, r.jsx)(n.strong, { children: 'niet-gefocuste' }), ' staat. Bijvoorbeeld voor een button die van kleur verandert bij toetsenbordfocus.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Controleer of de tekst in dit element aan de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#contrast-minimum', children: 'richtlijnen voor contrast' }), ' voldoet in gefocuste en niet-gefocuste staat.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Mooie tools om het kleurcontrast te testen en zo nodig een alternatief te kiezen zijn:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast van kleuren' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://accessiblepalette.com/', children: 'Accessible Palette' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://color.review/', children: 'Color Review' }) }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Additionele testen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['de ', (0, r.jsx)(n.a, { href: '/wcag/2.4.1', children: 'skip link' }), ' wordt zichtbaar als deze toetsenbord krijgt.'] }), '\n', (0, r.jsx)(n.li, { children: 'de outline (of het alternatief) is goed zichtbaar bij componenten met verschillende achtergrondkleuren, zoals bij een Page-header of footer.' }), '\n', (0, r.jsx)(n.li, { children: 'de outline (of het alternatief) is goed zichtbaar in dark- en light-mode, als deze optie aangeboden wordt op de webpagina.' }), '\n'] }), '\n', (0, r.jsx)(d.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
  45054: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(24785);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  78836: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var r = t(52676),
    i = t(24785);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  72657: (e, n, t) => {
   t.d(n, { V: () => o });
   var r = t(4814);
   t(75271);
   const i = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var s = t(52676);
   const o = (e) => {
    let { children: n, className: t, level: o = 1, suffix: d, ...l } = e;
    return (0, s.jsxs)('hgroup', { className: (0, r.Z)(i['nlds-inline-heading-group'], `utrecht-heading-${o}`, t), ...l, children: [(0, s.jsx)('h1', { className: (0, r.Z)(i['nlds-inline-heading-group__heading']), children: n }), d && (0, s.jsxs)('p', { className: (0, r.Z)(i['nlds-inline-heading-group__suffix']), children: [d ? ' ' : '', d] })] });
   };
  },
  71595: (e, n, t) => {
   t.d(n, { j: () => l });
   var r = t(46506),
    i = (t(75271), t(72657));
   const s = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    o = 'nlds-inline-heading-group__badge_TgvT';
   var d = t(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: t, ...l } = e;
    return (0, d.jsx)(i.V, { className: s, suffix: t && (0, d.jsx)(r.Ou, { className: o, children: t }), ...l, children: n });
   };
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => o });
   var r = t(75271);
   const i = {},
    s = r.createContext(i);
   function o(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
