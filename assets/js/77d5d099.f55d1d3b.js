'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [1710],
 {
  19877: (e, n, t) => {
   t.d(n, { E: () => o });
   var i = t(68873),
    r = t(98584),
    s = t(86070);
   const o = ({ children: e, conformanceLevel: n, ...t }) => (0, s.jsx)(r.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(i.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...t, children: e });
  },
  28890: (e, n, t) => {
   t.d(n, { Ay: () => l, RM: () => s });
   var i = t(86070),
    r = t(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  46563: (e, n, t) => {
   t.d(n, { o: () => d });
   var i = t(85248),
    r = t(68873),
    s = t(86070);
   const o = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + r;
     }
     return t.toString();
    },
    l = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    a = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: r = '', components: o = {} }) => (0, s.jsx)(i.x, { components: { ...c(n, t), ...a(r), ...o }, children: e });
  },
  47219: (e, n, t) => {
   t.d(n, { Ay: () => l, RM: () => s });
   var i = t(86070),
    r = t(85248);
   const s = [];
   function o(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  52105: (e, n, t) => {
   t.d(n, { Ay: () => l, RM: () => s });
   var i = t(86070),
    r = t(85248);
   const s = [];
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => o, x: () => l });
   var i = t(30758);
   const r = {},
    s = i.createContext(r);
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
  87073: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => m, default: () => k, frontMatter: () => j, metadata: () => i, toc: () => v });
   const i = JSON.parse('{"id":"wcag/1.4.11","title":"WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content","description":"Het contrast van essentiele onderdelen van componenten en de directe omgeving moet sterk genoeg zijn, zodat de onderdelen herkenbaar zijn.","source":"@site/docs/wcag/1.4.11.mdx","sourceDirName":"wcag","slug":"/wcag/1.4.11","permalink":"/wcag/1.4.11","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.4.11.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.4.11 Contrast van niet-tekstuele content","pagination_label":"WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content","description":"Het contrast van essentiele onderdelen van componenten en de directe omgeving moet sterk genoeg zijn, zodat de onderdelen herkenbaar zijn.","slug":"1.4.11","keywords":["WCAG","AA","waarneembaar","onderscheidbaar","perceivable","distinguishable","non-text contrast"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.4.10 Reflow","permalink":"/wcag/1.4.10"},"next":{"title":"WCAG-succescriterium 1.4.12 Tekstafstand","permalink":"/wcag/1.4.12"}}');
   var r = t(86070),
    s = t(85248),
    o = t(46563),
    l = t(19877),
    a = t(68873),
    c = t(52105),
    d = t(28890),
    h = t(47219);
   function g(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg voor voldoende kleurcontrast tussen de kleur van componenten die visueel betekenis hebben en hun directe omgeving.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Een icoon dat betekenis heeft, zoals de 3 streepjes voor een menu of een pijltje naar rechts voor de volgende pagina.' }), '\n', (0, r.jsx)(n.li, { children: 'Een icoon dat de status aangeeft van een bericht zoals een oranje driehoek voor een waarschuwing en een groen vinkje voor succes.' }), '\n', (0, r.jsx)(n.li, { children: 'Een rode rand die aangeeft dat een invoerveld fouten bevat (als aanvulling op de foutmelding in tekst).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Het gemeten kleurcontrast tussen het element en de omgeving moet minstens 3:1 zijn. Dit is te controleren met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
   const j = { title: 'WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.11 Contrast van niet-tekstuele content', pagination_label: 'WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content', description: 'Het contrast van essentiele onderdelen van componenten en de directe omgeving moet sterk genoeg zijn, zodat de onderdelen herkenbaar zijn.', slug: '1.4.11', keywords: ['WCAG', 'AA', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'non-text contrast'] },
    m = void 0,
    p = {},
    v = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Bronnen en tools', id: 'bronnen-en-tools', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...d.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function x(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(l.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Stijl: ', (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Kleuren' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/', children: 'Visueel ontwerp' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Content: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/', children: 'Afbeeldingen' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Content: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Kleurgebruik in tekst' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'bronnen-en-tools', children: 'Bronnen en tools' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Een overzicht van goede bronnen en tools voor kleurcontrast staat bij ', (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/', children: 'Richtlijnen NL Design System voor kleuren' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.figma.com/community/accessibility/contrast', children: 'Figma contrast accessibility plugin tools' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.deque.com/axe/browser-extensions/', children: 'axe DevTools browser add-on' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://wave.webaim.org/', children: 'WAVE Web Accessibility Evaluation Tools' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.tpgi.com/color-contrast-checker/', children: 'Colour Contrast Analyser (CCA)' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast van kleuren - NL Design System' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsxs)(n.p, { children: ['Naast tekst (', (0, r.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'WCAG-succescriterium 1.4.3 Contrast (minimum)' }), ') moet ook andere essentiele content goed zichtbaar zijn.'] }), '\n', (0, r.jsx)(n.p, { children: 'Dit kan bijvoorbeeld gaan om grafische objecten, zoals iconen en delen van complexe diagrammen. Het contrast van het (deel van het) icoon dat nodig is voor begrip, moet een contrast van 3:1 hebben met de directe omgeving.' }), '\n', (0, r.jsx)(n.p, { children: 'Het kan ook gaan om een component van de gebruikersinterface, zoals een link, een knop of een formulier element. Dan moet de visuele informatie die nodig is om het component (of de status ervan) te identificeren een contrast van 3:1 hebben met de directe omgeving.' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op:' }), ' Als een component van de gebruikersinterface een tekst bevat, dan moet deze tekst (', (0, r.jsx)(n.a, { href: '/wcag/1.4.3/', children: 'WCAG-succescriterium 1.4.3 Contrast (minimum)' }), ') voldoen aan de contrasteisen van tekst, en mag de knop onopvallend zijn. Als deze een afbeelding bevat, dan is successcriterium 1.4.11 van toepassing op de afbeelding. Bevat het component niks dat het component identificeert? Dan moet het component zelf contrastrijk genoeg zijn.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op:' }), ' Controleer het kleurcontrast altijd in de gegenereerde webpagina in een browser en niet alleen in de code zelf. Linters kunnen helpen om laaghangend fruit te ondervangen, maar de eindtest voor kleurcontrast moet gebeuren op de webpagina zelf als alle componenten worden samengevoegd tot \xe9\xe9n geheel.'] }), '\n', (0, r.jsx)(n.p, { children: 'Controleer in de volgende situaties of het kleurcontrast van de componenten voldoende blijft:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Verschillende gebruikelijke schermgroottes inclusief mobiele weergave.' }), '\n', (0, r.jsxs)(n.li, { children: ['Verschillend ori\xebntaties: ', (0, r.jsx)(n.em, { children: 'portrait' }), ' en ', (0, r.jsx)(n.em, { children: 'landscape' }), '.'] }), '\n', (0, r.jsx)(n.li, { children: 'Vergroot de tekst alleen tot 200%.' }), '\n', (0, r.jsx)(n.li, { children: 'Zoom in tot 400% vanaf schermbreedte van 1280px (of zet de schermbreedte op 320px).' }), '\n', (0, r.jsx)(n.li, { children: 'Is er een dark mode aanwezig? Test ook hier het kleurcontrast van de componenten.' }), '\n', (0, r.jsx)(n.li, { children: 'Controleer de verschillende weergaves en statussen van buttons, menus en de links zoals: met toetsenbordfocus, als je er overheen hovert met de muis, ingedrukt, en al eerder bezocht.' }), '\n', (0, r.jsx)(n.li, { children: 'Vergeet ook de skiplinks niet.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(c.Ay, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#non-text-contrast', children: (0, r.jsx)('span', { lang: 'en', children: '1.4.11 Non-text Contrast' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#non-text-contrast', children: '1.4.11 Contrast van niet-tekstuele content' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 1.4.11 Non-text Contrast' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 1.4.11 Non-text Contrast' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(a.K7, { children: (0, r.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.Ay, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(h.Ay, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
  },
  98584: (e, n, t) => {
   t.d(n, { p: () => s });
   var i = t(13526),
    r = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...o }) => (0, r.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
