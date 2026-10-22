'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [45618],
 {
  7047(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvulling-op-dit-wcag-aaa-succescriterium', children: 'Aanvulling op dit WCAG AAA Succescriterium' }) }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Belangrijk:' }), ' Het is volgens de Nederlandse wetgeving niet verplicht om aan dit AAA-succescriterium te voldoen.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => l });
   var r = t(30758);
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
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  24703(e, n, t) {
   t.d(n, { o: () => c });
   var r = t(18439),
    i = t(46447),
    s = t(86070);
   const o = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    l = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    a = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: i = '', components: o = {} }) => (0, s.jsx)(r.x, { components: { ...d(n, t), ...a(i), ...o }, children: e });
  },
  25431(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [];
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  29882(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  46276(e, n, t) {
   t.d(n, { p: () => s });
   var r = t(13526),
    i = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...o }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  61473(e, n, t) {
   t.d(n, { E: () => o });
   var r = t(46447),
    i = t(46276),
    s = t(86070);
   const o = ({ children: e, conformanceLevel: n, ...t }) => (globalThis.isAstro ? null : (0, s.jsx)(i.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...t, children: e }));
  },
  70797(e, n, t) {
   (t.r(n), t.d(n, { assets: () => f, contentTitle: () => v, default: () => b, frontMatter: () => p, metadata: () => r, toc: () => m }));
   const r = JSON.parse('{"id":"wcag/2.4.13","title":"WCAG-succescriterium 2.4.13 Focusweergave","description":"Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt.","source":"@site/docs/wcag/2.4.13.mdx","sourceDirName":"wcag","slug":"/wcag/2.4.13","permalink":"/wcag/2.4.13","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.13.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.4.13 Focusweergave","title_sm":"WCAG 2.4.13: Focusweergave","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.4.13 Focusweergave","pagination_label":"2.4.13 Focusweergave","description":"Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt.","slug":"2.4.13","conformance_level":"Niveau AAA","keywords":["WCAG","AAA","bedienbaar","navigeerbaar","operable","navigable","focus appearance"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.4.12 Focus niet bedekt (uitgebreid)","permalink":"/wcag/2.4.12"},"next":{"title":"WCAG-succescriterium 2.5.1 Aanwijzergebaren","permalink":"/wcag/2.5.1"}}');
   var i = t(86070),
    s = t(18439),
    o = t(24703),
    l = t(61473),
    a = t(93681),
    d = t(25431),
    c = t(88275),
    h = t(7047),
    u = t(29882);
   function g(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt.' }), '\n', (0, i.jsxs)(n.p, { children: ['Een optie is het geven van een outline (focusring). Dit kan via de CSS-properties ', (0, i.jsx)(n.code, { children: 'outline' }), ' of ', (0, i.jsx)(n.code, { children: 'border' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Geef de outline:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['een dikte van minimaal 2 ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel', children: 'CSS-pixels' }), ';'] }), '\n', (0, i.jsx)(n.li, { children: 'een kleurcontrast van ten minste 3:1 ten opzichte van de aangrenzende kleuren;' }), '\n', (0, i.jsxs)(n.li, { children: ['een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de ', (0, i.jsx)(n.strong, { children: 'gefocuste' }), ' en ', (0, i.jsx)(n.strong, { children: 'niet-gefocuste' }), ' staat.'] }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Een andere optie is geen outline toepassen, maar het hele element van kleur te laten veranderen.\nBijvoorbeeld een button die van kleur verandert bij toetsenbordfocus. Ook hier geldt een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de ', (0, i.jsx)(n.strong, { children: 'gefocuste' }), ' en ', (0, i.jsx)(n.strong, { children: 'niet-gefocuste' }), ' staat.'] })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
   const p = { title: 'WCAG-succescriterium 2.4.13 Focusweergave', title_sm: 'WCAG 2.4.13: Focusweergave', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.13 Focusweergave', pagination_label: '2.4.13 Focusweergave', description: 'Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt.', slug: '2.4.13', conformance_level: 'Niveau AAA', keywords: ['WCAG', 'AAA', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'focus appearance'] },
    v = void 0,
    f = {},
    m = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(l.E, { level: 1, conformanceLevel: 'Niveau AAA', children: 'WCAG-succescriterium 2.4.13 Focusweergave' }), '\n', (0, i.jsx)(a.K, { children: (0, i.jsx)(o.o, { omitH1: !0, headingLevel: 3, content: h.Ay }) }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': Voor NL Design System houden de richtlijnen van WCAG 2.2 ', (0, i.jsx)(n.strong, { children: 'AA' }), ' aan, maar we willen we ook voldoen aan dit WCAG-succescriterium 2.4.13 Focusweergave, niveau ', (0, i.jsx)(n.strong, { children: 'AAA' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Het intact laten van de standaard outline die door een browser wordt geleverd is voldoende voor het WCAG-succescriterium ', (0, i.jsx)(n.a, { href: '/wcag/2.4.7/', children: '2.4.7 Focus zichtbaar' }), '. Maar in de praktijk is deze standaard outline niet altijd duidelijk genoeg. Elke browser hanteert een eigen stijl voor de outline. Hierdoor kun je niet op de standaard browser-outline vertrouwen voor een consistente, goed zichtbare focus.'] }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(j, {}), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Formulieren: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak de toetsenbordfocus goed zichtbaar' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Formulieren: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie/', children: 'Zorg dat het formulier werkt met een toetsenbord' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: 'https://www.sarasoueidan.com/blog/focus-indicators/', children: 'A guide to designing accessible, WCAG-conformant focus indicators' }), ' van Sara Soueidan.'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsxs)(n.p, { children: ['In het onderzoek van het ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken/formulieren/vng-online-formulieren/', children: 'Contactformulier voor WMEBV' }), ' staat het advies:\nzorg voor een zichtbare focusindicator voor mensen met een visuele beperking.'] }), '\n', (0, i.jsx)(d.Ay, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt. Gebruik de tab-toets om te controleren of links, buttons, invoervelden en checkboxes duidelijk zichtbaar de focus aangeven. Controleer de focus van radiobuttons en tabs met de pijltjestoetsen.' }), '\n', (0, i.jsxs)(n.p, { children: ['Als in de CSS de outline is verwijderd door de CSS ', (0, i.jsx)(n.code, { children: 'outline: none;' }), ', moet er een alternatief zijn die de toetsenbordfocus visueel duidelijk aangeeft. Bijvoorbeeld door het defini\xebren van een border als een element focus krijgt.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Controleer of de breedte van de outline tenminste 2 ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel', children: 'CSS-pixels' }), ' breed is.\nInspecteer in de gegenereerde HTML-code van de webpagina de elementen die de toetsenbordfocus kunnen krijgen, bijvoorbeeld met een ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.'] }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Zorg dat het element wat je wilt inspecteren de focus heeft.' }), '\n', (0, i.jsxs)(n.li, { children: ['In de CSS-properties moet gedefinieerd staan dat de ', (0, i.jsx)(n.code, { children: 'outline-width' }), ' of ', (0, i.jsx)(n.code, { children: 'border-width' }), ' ten minste 2 pixels is.'] }), '\n', (0, i.jsx)(n.li, { children: 'Controleer of het kleurcontrast van de outline ten minste 3:1 is ten opzichte van de aangrenzende kleuren, dus de binnen- en buitenkant van de lijn.' }), '\n', (0, i.jsx)(n.li, { children: 'Controleer dan of er een kleurcontrast is van ten minste 3:1 tussen dezelfde pixels in de gefocuste en niet-gefocuste staat.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Is er geen outline, maar verandert de kleur van het hele element?' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Controleer dan of er een kleurcontrast is van ten minste 3:1 tussen dezelfde pixels in de ', (0, i.jsx)(n.strong, { children: 'gefocuste' }), ' en ', (0, i.jsx)(n.strong, { children: 'niet-gefocuste' }), ' staat. Bijvoorbeeld voor een button die van kleur verandert bij toetsenbordfocus.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Controleer of de tekst in dit element aan de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#contrast-minimum', children: 'richtlijnen voor contrast' }), ' voldoet in gefocuste en niet-gefocuste staat.'] }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Mooie tools om het kleurcontrast te testen en zo nodig een alternatief te kiezen zijn:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast van kleuren' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://accessiblepalette.com/', children: 'Accessible Palette' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://color.review/', children: 'Color Review' }) }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Additionele testen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['de ', (0, i.jsx)(n.a, { href: '/wcag/2.4.1/', children: 'skip link' }), ' wordt zichtbaar als deze toetsenbord krijgt.'] }), '\n', (0, i.jsx)(n.li, { children: 'de outline (of het alternatief) is goed zichtbaar bij componenten met verschillende achtergrondkleuren, zoals bij een Page-header of footer.' }), '\n', (0, i.jsx)(n.li, { children: 'de outline (of het alternatief) is goed zichtbaar in dark- en light-mode, als deze optie aangeboden wordt op de webpagina.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#focus-appearance', children: (0, i.jsx)('span', { lang: 'en', children: '2.4.13 Focus Appearance' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#focus-appearance', children: '2.4.13 Focusweergave' })] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-appearance', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.13 Focus Appearance' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.13: Focus Appearance' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(a.K, { children: (0, i.jsx)(o.o, { omitH1: !0, headingLevel: 3, content: c.Ay }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(o.o, { omitH1: !0, headingLevel: 3, content: u.Ay })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
  },
  88275(e, n, t) {
   t.d(n, { Ay: () => o });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88547(e, n, t) {
   t.d(n, { L: () => o });
   var r = t(86070);
   function i(e) {
    var n,
     t,
     r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var s = e.length;
      for (n = 0; n < s; n++) e[n] && (t = i(e[n])) && (r && (r += ' '), (r += t));
     } else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
   }
   function s() {
    for (var e, n, t = 0, r = '', s = arguments.length; t < s; t++) (e = arguments[t]) && (n = i(e)) && (r && (r += ' '), (r += n));
    return r;
   }
   const o = (0, t(30758).forwardRef)(({ aside: e, children: n, className: t, purpose: i, ...o }, l) => {
    const a = { ...o, ref: l, className: s('utrecht-note', { [`utrecht-note--${i}`]: i }, t) };
    return e ? (0, r.jsx)('aside', { ...a, children: n }) : (0, r.jsx)('section', { role: 'note', ...a, children: n });
   });
   o.displayName = 'Note';
  },
  93681(e, n, t) {
   t.d(n, { K: () => s });
   var r = t(88547),
    i = t(29181);
   const s = globalThis.isAstro ? r.L : i.K7;
  },
 },
]);
