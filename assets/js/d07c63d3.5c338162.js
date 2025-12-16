'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [53763],
 {
  1162: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function a(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvulling-op-dit-wcag-aaa-succescriterium', children: 'Aanvulling op dit WCAG AAA Succescriterium' }) }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Belangrijk:' }), ' Het is volgens de Nederlandse wetgeving niet verplicht om aan dit AAA-succescriterium te voldoen.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  19877: (e, n, i) => {
   i.d(n, { E: () => a });
   var r = i(68873),
    t = i(98584),
    s = i(86070);
   const a = ({ children: e, conformanceLevel: n, ...i }) => (0, s.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function a(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
   var r = i(85248),
    t = i(68873),
    s = i(86070);
   const a = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    l = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    o = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: a(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: a = {} }) => (0, s.jsx)(r.x, { components: { ...d(n, i), ...o(t), ...a }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function a(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  51834: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => v, contentTitle: () => m, default: () => b, frontMatter: () => j, metadata: () => r, toc: () => k });
   const r = JSON.parse('{"id":"wcag/1.3.06","title":"WCAG-succescriterium 1.3.6 Identificeer het doel","description":"Maak ten volste gebruik van de mogelijkheden van bijvoorbeeld HTML en ARIA om het doel van onderdelen van een webpagina duidelijk te maken voor software.","source":"@site/docs/wcag/1.3.06.mdx","sourceDirName":"wcag","slug":"/wcag/1.3.6","permalink":"/wcag/1.3.6","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.3.06.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.3.6 Identificeer het doel","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.3.6 Identificeer het doel","pagination_label":"WCAG-succescriterium 1.3.6 Identificeer het doel","description":"Maak ten volste gebruik van de mogelijkheden van bijvoorbeeld HTML en ARIA om het doel van onderdelen van een webpagina duidelijk te maken voor software.","slug":"1.3.6","keywords":["WCAG","AAA","waarneembaar","aanpasbaar","perceivable","adaptable","identify purpose"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.3.5 Identificeer het doel van de input","permalink":"/wcag/1.3.5"},"next":{"title":"WCAG-succescriterium 1.4.1 Gebruik van kleur","permalink":"/wcag/1.4.1"}}');
   var t = i(86070),
    s = i(85248),
    a = i(46563),
    l = i(19877),
    o = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(1162),
    g = i(47219);
   function u(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Maak ten volste gebruik van de mogelijkheden van bijvoorbeeld HTML en ARIA om het doel van onderdelen van een webpagina duidelijk te maken voor software. Dan kan hulptechnologie aanvullende informatie geven en eventueel ook de vormgeving kunnen aanpassen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Dit succescriterium gaat een stap verder dan ', (0, t.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'WCAG-succescriterium 1.3.5' }), '. Niet alleen het doel van formuliervelden, maar ook die van andere belangrijke onderdelen op een webpagina moet in de HTML-code beschreven zijn.'] }), '\n', (0, t.jsx)(n.p, { children: 'Hierdoor kan hulptechnologie een website aanpassen en beter begrijpbaar en bedienbaar maken voor mensen met een cognitieve beperking. Door bijvoorbeeld icoontjes aan te passen of toe te voegen of door te zorgen dat een gebruiker alleen de hoofdinhoud hoeft te lezen.' }), '\n', (0, t.jsx)(n.p, { children: "Een andere toepassing zou kunnen zijn om een 'schil' om de website te maken die alleen een reeks iconen laat zien, in plaats van een menu in woorden." }), '\n', (0, t.jsx)(n.p, { children: 'Dit helpt gebruikers die moeite hebben met bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'leren, communiceren, lezen, schrijven of rekenen;' }), '\n', (0, t.jsx)(n.li, { children: 'nieuwe of complexe informatie begrijpen of nieuwe vaardigheden leren;' }), '\n', (0, t.jsx)(n.li, { children: 'geheugen en aandacht.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Al deze technologie is volop in ontwikkeling en vergt nog veel onderzoek. Het W3C beveelt op dit moment ook nog geen technieken aan die in de praktijk gebruikt kunnen worden.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const j = { title: 'WCAG-succescriterium 1.3.6 Identificeer het doel', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.6 Identificeer het doel', pagination_label: 'WCAG-succescriterium 1.3.6 Identificeer het doel', description: 'Maak ten volste gebruik van de mogelijkheden van bijvoorbeeld HTML en ARIA om het doel van onderdelen van een webpagina duidelijk te maken voor software.', slug: '1.3.6', keywords: ['WCAG', 'AAA', 'waarneembaar', 'aanpasbaar', 'perceivable', 'adaptable', 'identify purpose'] },
    m = void 0,
    v = {},
    k = [...h.RM, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...g.RM];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(l.E, { level: 1, conformanceLevel: 'Niveau AAA', children: 'WCAG-succescriterium 1.3.6 Identificeer het doel' }), '\n', (0, t.jsx)(o.K7, { children: (0, t.jsx)(a.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(n.p, { children: 'Maar je kunt nu al informatie toevoegen die nuttig is voor mensen met een cognitieve beperking en hulpmiddelen.' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: "Zet zichtbare tekst bij een icoontje. Dus niet alleen 3 streepjes laten zien, maar zet ook het woord 'Menu' erbij." }), '\n', (0, t.jsxs)(n.li, { children: ['Maak gebruik van landmarks om de inhoud van een webpagina te groeperen. Zoals ', (0, t.jsx)(n.code, { children: '<header>' }), ', ', (0, t.jsx)(n.code, { children: '<main>' }), ', ', (0, t.jsx)(n.code, { children: '<aside>' }), ' en ', (0, t.jsx)(n.code, { children: '<footer>' }), '.'] }), '\n', (0, t.jsx)(n.li, { children: 'Geef landmarks die niet uniek zijn en ook sections een aria-label met de functie hiervan.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Bijvoorbeeld, als er meerdere aside landmarks op een pagina staan, voeg dan aan elke een aria-label toe om het onderscheid aan te geven, zoals ', (0, t.jsx)(n.code, { children: '<aside aria-label="De laatste 3 nieuwsberichten">' }), ' en ', (0, t.jsx)(n.code, { children: '<aside aria-label="Geef je op voor de nieuwsbrief">' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: 'Extra informatie over het doel van de link kan software in staat stellen om standaard iconen te tonen bij links, bijvoorbeeld:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: '<a href="/" rel="home">' }), ' met een huisje.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: '<a href="url" rel="next">' }), ' met een pijltje vooruit.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: '<a href="url" rel="prev">' }), ' met een pijltje achteruit.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.code, { children: '<a href="url" rel="external">' }), ' met een herkenbaar icoon.'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Het HTML-attribuut autocomplete is ook bedoeld om hierbij te kunnen helpen.' }), '\n', (0, t.jsxs)(n.p, { children: ["Is een webpagina met tekst betekenisvol ingedeeld in landmarks en kopjes, dan kunnen browsers in de zogenaamde 'Reader mode' of in het Nederlands ", (0, t.jsx)(n.a, { href: 'https://kennisportaal.visio.org/nl-nl/documenten/internet-beter-leesbaar-maken-op-de-pc', children: 'Lezerweergave' }), ' de pagina simpeler weergeven en heeft de gebruiker ook de mogelijkheid om de weergave aan te passen. Wat fijn is voor gebruikers die snel zijn afgeleid door alle reclame en de tekst in voor hen duidelijker weergave te willen lezen.'] }), '\n', (0, t.jsxs)(n.p, { children: ['De ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/about/groups/task-forces/coga/', children: (0, t.jsx)('span', { lang: 'en', children: 'Cognitive and Learning Disabilities Accessibility Task Force' }) }), ' van het W3C is bezig technieken te onderzoeken die hiervoor gebruikt kunnen worden.'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(d.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#identify-purpose', children: (0, t.jsx)('span', { lang: 'en', children: '1.3.6 Identify Purpose' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#identify-purpose', children: '1.3.6 Identificeer het doel' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#identify-purpose', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 1.3.6 Identify Purpose' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 1.3.6 Identify Purpose' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(o.K7, { children: (0, t.jsx)(a.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(a.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(g.Ay, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function a(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => a, x: () => l });
   var r = i(30758);
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
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => s });
   var r = i(13526),
    t = i(86070);
   const s = ({ children: e, className: n, level: i = 1, suffix: s, ...a }) => (0, t.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...a, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
