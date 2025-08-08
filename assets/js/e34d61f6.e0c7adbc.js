'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [11767],
 {
  30540: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => j, contentTitle: () => g, default: () => p, frontMatter: () => m, metadata: () => u, toc: () => k });
   var t = i(52676),
    r = i(40139),
    a = i(57716),
    l = i(46364),
    s = i(16167),
    d = i(60256),
    o = i(99042),
    c = i(91114),
    h = i(77027);
   const m = { title: 'WCAG-succescriterium 2.5.3 Label in Naam', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.3 Label in Naam', pagination_label: 'WCAG-succescriterium 2.5.3 Label in Naam', description: 'De zichtbare naam van een onderdeel moet terugkomen in de toegankelijke naam.', slug: '2.5.3', keywords: ['WCAG', 'A', 'bedienbaar', 'input modaliteiten', 'operable', 'input modalities', 'label in name'] },
    g = void 0,
    u = { id: 'wcag/2.5.03', title: 'WCAG-succescriterium 2.5.3 Label in Naam', description: 'De zichtbare naam van een onderdeel moet terugkomen in de toegankelijke naam.', source: '@site/docs/wcag/2.5.03.mdx', sourceDirName: 'wcag', slug: '/wcag/2.5.3', permalink: '/wcag/2.5.3', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.5.03.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.5.3 Label in Naam', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.3 Label in Naam', pagination_label: 'WCAG-succescriterium 2.5.3 Label in Naam', description: 'De zichtbare naam van een onderdeel moet terugkomen in de toegankelijke naam.', slug: '2.5.3', keywords: ['WCAG', 'A', 'bedienbaar', 'input modaliteiten', 'operable', 'input modalities', 'label in name'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering', permalink: '/wcag/2.5.2' }, next: { title: 'WCAG-succescriterium 2.5.4 Bewegingsactivering', permalink: '/wcag/2.5.4' } },
    j = {},
    k = [
     { value: 'In het kort', id: 'in-het-kort', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Bronnen en tools', id: 'bronnen-en-tools', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Tips', id: 'tips', level: 2 },
     { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 },
     { value: 'Fout: <code>aria-label</code> overschrijft de zichtbare naam', id: 'fout-aria-label-overschrijft-de-zichtbare-naam', level: 3 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function b(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.5.3 Label in Naam' }), '\n', (0, t.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, t.jsxs)('dl', { children: [(0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'De zichtbare naam kan gebruikt worden voor spraakbediening.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Laat de zichtbare naam overeenkomen met de toegankelijke naam.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Mensen met spraakbediening gebruiken de zichtbare naam voor bediening.' })] })] }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(h.ZP, {}), '\n', (0, t.jsx)(n.p, { children: 'De zichtbare naam is wat veel gebruikers zien als ze een website gebruiken. Denk hierbij aan labels bij invoervelden, linkteksten of de inhoud van een knop.' }), '\n', (0, t.jsxs)(n.p, { children: ['Iemand die spraakbediening gebruikt zal deze naam gebruiken bij het uitspreken van commando\'s. "Klik contact" zorgt ervoor dat het onderdeel dat "contact" heet geactiveerd wordt.\nDe software voor spraakbediening gebruikt hiervoor de ', (0, t.jsx)(n.a, { href: '/woordenlijst/#toegankelijke-naam', children: 'toegankelijke naam' }), '. Als die niet overeenkomt met de zichtbare naam, dan kan de software het commando niet uitvoeren.\nOok als veel onderdelen op de pagina hetzelfde heten kan dit een probleem zijn. Denk hierbij aan linkteksten als "lees meer" of "hier".'] }), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: 'https://nldesignsystem.nl/richtlijnen/formulieren/labels/zichtbare-naam', children: 'De zichtbare naam moet overeenkomen met de toegankelijke naam' })] }), '\n', (0, t.jsxs)(n.li, { children: ['Content: ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/linkteksten', children: 'Toegankelijke linkteksten' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'bronnen-en-tools', children: 'Bronnen en tools' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'https://developer.chrome.com/docs/devtools/accessibility/reference', children: 'Chrome Accessibility Pane' }) }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Controleer voor elk interactief onderdeel wat de zichtbare naam is.' }), '\n', (0, t.jsx)(n.li, { children: 'Gebruik een tool zoals de "accessibility pane" in Chrome of een screenreader om de toegankelijke naam te vinden.' }), '\n', (0, t.jsx)(n.li, { children: 'Zorg dat de zichtbare naam onderdeel is van de toegankelijke naam.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Gebruik geen ', (0, t.jsx)(n.code, { children: 'placeholder' }), '-attributen. Deze kunnen een toegankelijk naam geven, maar verdwijnen zodra de gebruiker ze het meest nodig heeft. Daarnaast zijn ze een bron van problemen met contrast en zorgen ze voor verwarring.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Gebruik zo weinig mogelijk ', (0, t.jsx)(n.code, { children: 'title' }), '-attributen. Dit attribuut is een soort laatste redmiddel om iets een toegankelijke naam te geven. Het is de laatste in een rij met opties en geeft vaak verkeerde en onverwachte resultaten. Frames een naam geven is de uitzondering op deze regel.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Wees spaarzaam met het gebruik van ', (0, t.jsx)(n.code, { children: 'aria-labelledby' }), ' en ', (0, t.jsx)(n.code, { children: 'aria-label' }), '. De eerste regel van ARIA-gebruik stuurt op zo min mogelijk ARIA-gebruik. HTML wordt beter ondersteund dan ARIA. Deze attributen zijn ook verreweg de makkelijkste manier om te falen voor dit succescriterium. Daarnaast worden deze attributen vaak slecht meegenomen bij veranderingen van code en door tools (en mensen) die vertalen.'] }), '\n', (0, t.jsx)(n.li, { children: 'Zorg voor unieke toegankelijke namen op een pagina. Dit maakt het gebruik van spraakbediening makkelijker.' }), '\n', (0, t.jsx)(n.li, { children: 'Voor dit succescriterium is het ook belangrijk om tekst in afbeeldingen in het tekstalternatief te gebruiken. Zo kan de afbeelding als zichtbare naam gebruikt worden.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, t.jsxs)(n.h3, { id: 'fout-aria-label-overschrijft-de-zichtbare-naam', children: ['Fout: ', (0, t.jsx)(n.code, { children: 'aria-label' }), ' overschrijft de zichtbare naam'] }), '\n', (0, t.jsxs)(n.p, { children: ['Het ', (0, t.jsx)(n.code, { children: 'aria-label' }), '-attribuut overschrijft de zichtbare naam bij het bepalen van de toegankelijke naam. Waar men denkt de zichtbare naam aan te vullen, daar gaat deze juist verloren.'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { children: '\x3c!-- Foute code, niet gebruiken  ->\n<a href="#" aria-label=", opent externe website">Geef uw melding door</a>\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'In dit voorbeeld wordt de toegankelijke naam ", opent externe website" in plaats van "Geef uw melding door, opent externe website".' }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(d.ZP, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#label-in-name', children: (0, t.jsx)('span', { lang: 'en', children: '2.5.3 Label in Name' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#label-in-naam', children: '2.5.3 Label in Naam' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#label-in-name', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.5.3 Label in Name' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 2.5.3 Label in Name' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(s.CY, { children: (0, t.jsx)(a.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(o.ZP, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(a.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.ZP, {}) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(b, { ...e }) }) : b(e);
   }
  },
  60256: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var t = i(52676),
    r = i(40139);
   function a(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  99042: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var t = i(52676),
    r = i(40139);
   function a(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  91114: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var t = i(52676),
    r = i(40139);
   function a(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  77027: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var t = i(52676),
    r = i(40139);
   function a(e) {
    const n = { p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'De zichtbare naam van een onderdeel moet terugkomen in de toegankelijke naam.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => a });
   var t = i(4814),
    r = i(52676);
   const a = (e) => {
    let { children: n, className: i, level: a = 1, suffix: l, ...s } = e;
    return (0, r.jsxs)('hgroup', { className: (0, t.Z)('nlds-inline-heading-group', `utrecht-heading-${a}`, i), ...s, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var t = i(40139),
    r = i(16167),
    a = i(52676);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    s = { 1: {}, 2: { h1: r.XJ, h2: r.aC, h3: r.k8, h4: r.by, h5: r.Cd }, 3: { h1: r.aC, h2: r.k8, h3: r.by, h4: r.Cd, h5: r.Cd }, 4: { h1: r.k8, h2: r.by, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 5: { h1: r.by, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 6: { h1: r.Cd, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd } },
    d = (e) => ({
     img: (n) => {
      let { src: i, ...t } = n;
      return (0, a.jsx)('img', { ...t, src: l(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    o = (e, n) => {
     if (e) {
      const e = { ...s[n - 1] };
      return (e.h1 = () => null), e;
     }
     return s[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: r = 1, baseUrl: l = '', components: s = {} } = e;
     return (0, a.jsx)(t.Z, { components: { ...o(i, r), ...d(l), ...s }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => l });
   var t = i(16167),
    r = i(41757),
    a = i(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: i, ...l } = e;
    return (0, a.jsx)(r.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, a.jsx)(t.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...l, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => s, a: () => l });
   var t = i(75271);
   const r = {},
    a = t.createContext(r);
   function l(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
