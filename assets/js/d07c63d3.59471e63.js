'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [86792],
 {
  91775: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => p, default: () => b, frontMatter: () => g, metadata: () => j, toc: () => v });
   var r = i(52676),
    t = i(87118),
    s = i(57716),
    o = i(46364),
    a = i(31916),
    l = i(57705),
    d = i(7140),
    c = i(39745);
   function h(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Maak ten volste gebruik van de mogelijkheden van bijvoorbeeld HTML en ARIA om het doel van onderdelen van een webpagina duidelijk te maken voor software. Dan kan hulptechnologie aanvullende informatie geven en eventueel ook de vormgeving kunnen aanpassen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Dit succescriterium gaat een stap verder dan ', (0, r.jsx)(n.a, { href: '/wcag/1.3.5', children: 'WCAG-succescriterium 1.3.5' }), '. Niet alleen het doel van formuliervelden, maar ook die van andere belangrijke onderdelen op een webpagina moet in de HTML-code beschreven zijn.'] }), '\n', (0, r.jsx)(n.p, { children: 'Hierdoor kan hulptechnologie een website aanpassen en beter begrijpbaar en bedienbaar maken voor mensen met een cognitieve beperking. Door bijvoorbeeld icoontjes aan te passen of toe te voegen of door te zorgen dat een gebruiker alleen de hoofdinhoud hoeft te lezen.' }), '\n', (0, r.jsx)(n.p, { children: "Een andere toepassing zou kunnen zijn om een 'schil' om de website te maken die alleen een reeks iconen laat zien, in plaats van een menu in woorden." }), '\n', (0, r.jsx)(n.p, { children: 'Dit helpt gebruikers die moeite hebben met bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'leren, communiceren, lezen, schrijven of rekenen;' }), '\n', (0, r.jsx)(n.li, { children: 'nieuwe of complexe informatie begrijpen of nieuwe vaardigheden leren;' }), '\n', (0, r.jsx)(n.li, { children: 'geheugen en aandacht.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Al deze technologie is volop in ontwikkeling en vergt nog veel onderzoek. Het W3C beveelt op dit moment ook nog geen technieken aan die in de praktijk gebruikt kunnen worden.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'WCAG-succescriterium 1.3.6 Identificeer het doel', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.6 Identificeer het doel', pagination_label: 'WCAG-succescriterium 1.3.6 Identificeer het doel', description: 'Maak ten volste gebruik van de mogelijkheden van bijvoorbeeld HTML en ARIA om het doel van onderdelen van een webpagina duidelijk te maken voor software.', slug: '1.3.6', keywords: ['WCAG'] },
    p = void 0,
    j = { id: 'wcag/1.3.06', title: 'WCAG-succescriterium 1.3.6 Identificeer het doel', description: 'Maak ten volste gebruik van de mogelijkheden van bijvoorbeeld HTML en ARIA om het doel van onderdelen van een webpagina duidelijk te maken voor software.', source: '@site/docs/wcag/1.3.06.mdx', sourceDirName: 'wcag', slug: '/wcag/1.3.6', permalink: '/wcag/1.3.6', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.3.06.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 1.3.6 Identificeer het doel', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.6 Identificeer het doel', pagination_label: 'WCAG-succescriterium 1.3.6 Identificeer het doel', description: 'Maak ten volste gebruik van de mogelijkheden van bijvoorbeeld HTML en ARIA om het doel van onderdelen van een webpagina duidelijk te maken voor software.', slug: '1.3.6', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', permalink: '/wcag/1.3.5' }, next: { title: 'WCAG-succescriterium 1.4.1 Gebruik van kleur', permalink: '/wcag/1.4.1' } },
    m = {},
    v = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function k(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(o.j, { level: 1, conformanceLevel: 'Niveau AAA', children: 'WCAG-succescriterium 1.3.6 Identificeer het doel' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(n.p, { children: 'Maar je kunt nu al informatie toevoegen die nuttig is voor mensen met een cognitieve beperking en hulpmiddelen.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: "Zet zichtbare tekst bij een icoontje. Dus niet alleen 3 streepjes laten zien, maar zet ook het woord 'Menu' erbij." }), '\n', (0, r.jsxs)(n.li, { children: ['Maak gebruik van landmarks om de inhoud van een webpagina te groeperen. Zoals ', (0, r.jsx)(n.code, { children: '<header>' }), ', ', (0, r.jsx)(n.code, { children: '<main>' }), ', ', (0, r.jsx)(n.code, { children: '<aside>' }), ' en ', (0, r.jsx)(n.code, { children: '<footer>' }), '.'] }), '\n', (0, r.jsx)(n.li, { children: 'Geef landmarks die niet uniek zijn en ook sections een aria-label met de functie hiervan.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Bijvoorbeeld, als er meerdere aside landmarks op een pagina staan, voeg dan aan elke een aria-label toe om het onderscheid aan te geven, zoals ', (0, r.jsx)(n.code, { children: '<aside aria-label="De laatste 3 nieuwsberichten">' }), ' en ', (0, r.jsx)(n.code, { children: '<aside aria-label="Geef je op voor de nieuwsbrief">' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Extra informatie over het doel van de link kan software in staat stellen om standaard iconen te tonen bij links, bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<a href="/" rel="home">' }), ' met een huisje.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<a href="url" rel="next">' }), ' met een pijltje vooruit.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<a href="url" rel="prev">' }), ' met een pijltje achteruit.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<a href="url" rel="external">' }), ' met een herkenbaar icoon.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Het HTML-attribuut autocomplete is ook bedoeld om hierbij te kunnen helpen.' }), '\n', (0, r.jsxs)(n.p, { children: ["Is een webpagina met tekst betekenisvol ingedeeld in landmarks en kopjes, dan kunnen browsers in de zogenaamde 'Reader mode' of in het Nederlands ", (0, r.jsx)(n.a, { href: 'https://kennisportaal.visio.org/nl-nl/documenten/internet-beter-leesbaar-maken-op-de-pc', children: 'Lezerweergave' }), ' de pagina simpeler weergeven en heeft de gebruiker ook de mogelijkheid om de weergave aan te passen. Wat fijn is voor gebruikers die snel zijn afgeleid door alle reclame en de tekst in voor hen duidelijker weergave te willen lezen.'] }), '\n', (0, r.jsxs)(n.p, { children: ['De ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/about/groups/task-forces/coga/', children: (0, r.jsx)('span', { lang: 'en', children: 'Cognitive and Learning Disabilities Accessibility Task Force' }) }), ' van het W3C is bezig technieken te onderzoeken die hiervoor gebruikt kunnen worden.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(l.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#identify-purpose', children: (0, r.jsx)('span', { lang: 'en', children: '1.3.6 Identify Purpose' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#identificeer-het-doel', children: '1.3.6 Identificeer het doel' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#identify-purpose', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 1.3.6 Identify Purpose' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 1.3.6 Identify Purpose' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(a.CY, { children: (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
  57705: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var r = i(52676),
    t = i(87118);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  7140: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var r = i(52676),
    t = i(87118);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvulling-op-wcag', children: 'Aanvulling op WCAG' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Belangrijk:' }), ' De richtlijnen van NL Design System zijn niet verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  39745: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var r = i(52676),
    t = i(87118);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => s });
   var r = i(4814),
    t = i(52676);
   const s = (e) => {
    let { children: n, className: i, level: s = 1, suffix: o, ...a } = e;
    return (0, t.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, i), ...a, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), o && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var r = i(87118),
    t = i(31916),
    s = i(52676);
   const o = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    a = { 1: {}, 2: { h1: t.XJ, h2: t.aC, h3: t.k8, h4: t.by, h5: t.Cd }, 3: { h1: t.aC, h2: t.k8, h3: t.by, h4: t.Cd, h5: t.Cd }, 4: { h1: t.k8, h2: t.by, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 5: { h1: t.by, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 6: { h1: t.Cd, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd } },
    l = (e) => ({
     img: (n) => {
      let { src: i, ...r } = n;
      return (0, s.jsx)('img', { ...r, src: o(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: t = 1, baseUrl: o = '', components: a = {} } = e;
     return (0, s.jsx)(r.Z, { components: { ...d(i, t), ...l(o), ...a }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => o });
   var r = i(31916),
    t = i(41757),
    s = i(52676);
   const o = (e) => {
    let { children: n, conformanceLevel: i, ...o } = e;
    return (0, s.jsx)(t.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, s.jsx)(r.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...o, children: n });
   };
  },
  87118: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => o });
   var r = i(75271);
   const t = {},
    s = r.createContext(t);
   function o(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
