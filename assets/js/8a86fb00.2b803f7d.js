'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [65647],
 {
  91181: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => j, default: () => v, frontMatter: () => g, metadata: () => b, toc: () => p });
   var t = i(52676),
    r = i(40139),
    s = i(57716),
    o = i(46364),
    l = i(16167),
    a = i(60256),
    d = i(99042),
    c = i(91114);
   function h(e) {
    const n = { p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Zorg dat alle functionaliteit met een toetsenbord te bedienen is.' }), '\n', (0, t.jsx)(n.p, { children: 'Alle functionaliteit moet bedienbaar zijn met een toetsenbord zonder dat afzonderlijke toetsaanslagen aan tijd gebonden zijn.' }), '\n', (0, t.jsx)(n.p, { children: 'Uitgezonderd zijn functies die niet met het toetsenbord zijn uit te voeren, zoals het invoeren van met de hand geschreven tekst.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'WCAG-succescriterium 2.1.1 Toetsenbord', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.1.1 Toetsenbord', pagination_label: 'WCAG-succescriterium 2.1.1 Toetsenbord', description: 'Zorg dat alle functionaliteit met een toetsenbord te bedienen is.', slug: '2.1.1', keywords: ['WCAG', 'A', 'bedienbaar', 'toetsenbordtoegankelijk', 'operable', 'keyboard accessible', 'keyboard'] },
    j = void 0,
    b = { id: 'wcag/2.1.01', title: 'WCAG-succescriterium 2.1.1 Toetsenbord', description: 'Zorg dat alle functionaliteit met een toetsenbord te bedienen is.', source: '@site/docs/wcag/2.1.01.mdx', sourceDirName: 'wcag', slug: '/wcag/2.1.1', permalink: '/wcag/2.1.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.1.01.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.1.1 Toetsenbord', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.1.1 Toetsenbord', pagination_label: 'WCAG-succescriterium 2.1.1 Toetsenbord', description: 'Zorg dat alle functionaliteit met een toetsenbord te bedienen is.', slug: '2.1.1', keywords: ['WCAG', 'A', 'bedienbaar', 'toetsenbordtoegankelijk', 'operable', 'keyboard accessible', 'keyboard'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', permalink: '/wcag/1.4.13' }, next: { title: 'WCAG-succescriterium 2.1.2 Geen toetsenbordval', permalink: '/wcag/2.1.2' } },
    m = {},
    p = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Werkt alle functionaliteit met een toetsenbord', id: 'werkt-alle-functionaliteit-met-een-toetsenbord', level: 3 },
     { value: 'Toetsenbordfocus', id: 'toetsenbordfocus', level: 3 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function x(e) {
    const n = { a: 'a', code: 'code', em: 'em', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(o.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.1.1 Toetsenbord' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Formulieren - Toetsenbord: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Zorg dat het formulier werkt met een toetsenbord' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren - Toetsenbord: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/tabindex', children: 'Gebruik geen positieve tabindex' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren - Buttons: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening', children: 'Toetsenbordbediening van een button' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren - Buttons: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons', children: 'Disabled submitbuttons' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren - Foutmeldingen: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/samenvatting', children: 'Zet een samenvatting van de foutmeldingen boven het formulier' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren - Wanneer gebruik je welk formulierelement: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/', children: (0, t.jsx)('span', { lang: 'en', children: 'A Guide To Keyboard Accessibility: HTML And CSS' }) }), ' by Cristian D\xedaz in Smashing Magazine.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-automatically-focusing-the-first-input-and-what-to-do-instead/', children: (0, t.jsx)('span', { lang: 'en', children: 'The problem with automatically focusing the first input and what to do instead' }) }), ' van Adam Silver.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/tabindex#zero-negative-one', children: (0, t.jsx)('span', { lang: 'en', children: 'Tabindex: 0 and -1 Values' }) }), ' van WebAIM.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/', children: (0, t.jsx)('span', { lang: 'en', children: 'How To Avoid Breaking Web Pages For Keyboard Users' }) }), ' van Andrew Nevins.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(a.ZP, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Een website testen met een toetsenbord is essentieel bij het controleren van de toegankelijkheid.\nHierbij is een aantal testen belangrijk:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'werkt alle functionaliteit met een toetsenbord?' }), '\n', (0, t.jsx)(n.li, { children: 'is de tabvolgorde logisch en voorspelbaar?' }), '\n', (0, t.jsx)(n.li, { children: 'is alles goed bereikbaar, ook als je inzoomt?' }), '\n', (0, t.jsx)(n.li, { children: 'verplaatst de toetsenbordfocus zich goed bij het openen van een menu of dialog?' }), '\n', (0, t.jsxs)(n.li, { children: ['is er geen "toetsenbordval"? Dat betekent: kun je met Tab-navigatie door naar de rest van de pagina, of kom je in een ', (0, t.jsx)(n.em, { children: 'loop' }), ' terecht waardoor je niet verder komt?'] }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Hoe toetsenbordnavigatie werkt, is beschreven op ', (0, t.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/#testing', children: (0, t.jsx)('span', { lang: 'en', children: 'Keyboard testing' }) }), ' van WebAIM.'] }), '\n', (0, t.jsx)(n.p, { children: 'Zorg dat de instellingen van de MacOS en browsers goed staan:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://support.apple.com/en-gb/guide/mac-help/mchlc06d1059/mac', children: (0, t.jsx)('span', { lang: 'en', children: 'Keyboard navigation on MacOS' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.a11y-collective.com/blog/how-to-activate-keyboard-navigation-on-macos/', children: (0, t.jsx)('span', { lang: 'en', children: 'How to activate keyboard navigation on MacOS' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'werkt-alle-functionaliteit-met-een-toetsenbord', children: 'Werkt alle functionaliteit met een toetsenbord' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Controleer of links en buttons focus krijgen en doen wat ze moeten doen. Bijvoorbeeld: een menu openen, een dialog openen of sluiten, een accordeon openen en sluiten.' }), '\n', (0, t.jsxs)(n.li, { children: ['Controleer dat je buttons op beide manieren kan activeren: met ', (0, t.jsx)(n.code, { children: 'Space' }), ' en met ', (0, t.jsx)(n.code, { children: 'Enter' }), '.'] }), '\n', (0, t.jsx)(n.li, { children: 'Doe alle testen op de verschillende weergaves van een website, door bijvoorbeeld in te zoomen en nogmaals te testen.' }), '\n'] }), '\n', (0, t.jsx)(n.h3, { id: 'toetsenbordfocus', children: 'Toetsenbordfocus' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Tab door de website en controleer of de focus volgorde logisch en voorspelbaar is. De logische volgorde van Nederlandse websites is meestal: van boven naar beneden, van links naar rechts.' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer of het onderdeel met focus en de focus-ring niet verborgen zit achter een ander element.' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer of de focus niet ineens verdwijnt (weer bovenaan de pagina staat) na het uitvoeren van een actie.' }), '\n', (0, t.jsx)(n.li, { children: 'Wanneer de focus zich verplaatst naar een dialog die wordt geopend, kun je dan de dialog weer sluiten met het toetsenbord en met de Escape toets? Wanneer de dialog gesloten wordt, komt de focus weer terug op de "open dialog"-button?' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#keyboard', children: (0, t.jsx)('span', { lang: 'en', children: '2.1.1 Keyboard' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#toetsenbord', children: '2.1.1 Toetsenbord' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#keyboard', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.1.1 Keyboard' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 2.1.1 Keyboard' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(l.CY, { children: (0, t.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(d.ZP, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.ZP, {}) })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
   }
  },
  60256: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  99042: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  91114: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => s });
   var t = i(4814),
    r = i(52676);
   const s = (e) => {
    let { children: n, className: i, level: s = 1, suffix: o, ...l } = e;
    return (0, r.jsxs)('hgroup', { className: (0, t.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, i), ...l, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), o && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var t = i(40139),
    r = i(16167),
    s = i(52676);
   const o = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    l = { 1: {}, 2: { h1: r.XJ, h2: r.aC, h3: r.k8, h4: r.by, h5: r.Cd }, 3: { h1: r.aC, h2: r.k8, h3: r.by, h4: r.Cd, h5: r.Cd }, 4: { h1: r.k8, h2: r.by, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 5: { h1: r.by, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 6: { h1: r.Cd, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd } },
    a = (e) => ({
     img: (n) => {
      let { src: i, ...t } = n;
      return (0, s.jsx)('img', { ...t, src: o(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: r = 1, baseUrl: o = '', components: l = {} } = e;
     return (0, s.jsx)(t.Z, { components: { ...d(i, r), ...a(o), ...l }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => o });
   var t = i(16167),
    r = i(41757),
    s = i(52676);
   const o = (e) => {
    let { children: n, conformanceLevel: i, ...o } = e;
    return (0, s.jsx)(r.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, s.jsx)(t.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...o, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => o });
   var t = i(75271);
   const r = {},
    s = t.createContext(r);
   function o(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
