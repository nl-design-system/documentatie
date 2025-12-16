'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [55200],
 {
  19877: (e, n, t) => {
   t.d(n, { E: () => l });
   var i = t(68873),
    s = t(98584),
    r = t(86070);
   const l = ({ children: e, conformanceLevel: n, ...t }) => (0, r.jsx)(s.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, r.jsx)(i.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...t, children: e });
  },
  28890: (e, n, t) => {
   t.d(n, { Ay: () => a, RM: () => r });
   var i = t(86070),
    s = t(85248);
   const r = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  32066: (e, n, t) => {
   t.d(n, { Ay: () => a, RM: () => r });
   var i = t(86070),
    s = t(85248);
   const r = [];
   function l(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Tekst is door bezoekers aan te passen.' }), '\n', (0, i.jsx)(n.p, { children: 'Bezoekers kunnen eigen instelling en voorkeuren hebben voor hoe teksten eruit zien. Deze instellingen moeten ondersteund worden. Er mag geen inhoud of functionaliteit wegvallen. De volgende instellingen moeten ondersteund worden:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Een regelhoogte van ten minste 1,5 keer de lettergrootte;' }), '\n', (0, i.jsx)(n.li, { children: "Een afstand tussen alinea's van ten minste 2 keer de lettergrootte;" }), '\n', (0, i.jsx)(n.li, { children: 'Een letterafstand van ten minste 0,12 keer de lettergrootte;' }), '\n', (0, i.jsx)(n.li, { children: 'Een afstand tussen woorden van ten minste 0,16 keer de lettergrootte.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Sommige mensen hebben teksten nodig met een ander uiterlijk. Bijvoorbeeld voor mensen met een visuele beperking en mensen met dyslexie.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, t) => {
   t.d(n, { o: () => d });
   var i = t(85248),
    s = t(68873),
    r = t(86070);
   const l = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + s;
     }
     return t.toString();
    },
    a = { 1: {}, 2: { h1: s.fV, h2: s._B, h3: s.f_, h4: s.mM, h5: s.TT }, 3: { h1: s._B, h2: s.f_, h3: s.mM, h4: s.TT, h5: s.TT }, 4: { h1: s.f_, h2: s.mM, h3: s.TT, h4: s.TT, h5: s.TT }, 5: { h1: s.mM, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT }, 6: { h1: s.TT, h2: s.TT, h3: s.TT, h4: s.TT, h5: s.TT } },
    o = (e) => ({ img: ({ src: n, ...t }) => (0, r.jsx)('img', { ...t, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: s = '', components: l = {} }) => (0, r.jsx)(i.x, { components: { ...c(n, t), ...o(s), ...l }, children: e });
  },
  47219: (e, n, t) => {
   t.d(n, { Ay: () => a, RM: () => r });
   var i = t(86070),
    s = t(85248);
   const r = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105: (e, n, t) => {
   t.d(n, { Ay: () => a, RM: () => r });
   var i = t(86070),
    s = t(85248);
   const r = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  71654: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => j, contentTitle: () => p, default: () => x, frontMatter: () => u, metadata: () => i, toc: () => m });
   const i = JSON.parse('{"id":"wcag/1.4.12","title":"WCAG-succescriterium 1.4.12 Tekstafstand","description":"Tekst is door bezoekers aan te passen.","source":"@site/docs/wcag/1.4.12.mdx","sourceDirName":"wcag","slug":"/wcag/1.4.12","permalink":"/wcag/1.4.12","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.4.12.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.4.12 Tekstafstand","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.4.12 Tekstafstand","pagination_label":"WCAG-succescriterium 1.4.12 Tekstafstand","description":"Tekst is door bezoekers aan te passen.","slug":"1.4.12","keywords":["WCAG","AA","waarneembaar","onderscheidbaar","perceivable","distinguishable","text spacing"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content","permalink":"/wcag/1.4.11"},"next":{"title":"WCAG-succescriterium 1.4.13 Content bij hover of focus","permalink":"/wcag/1.4.13"}}');
   var s = t(86070),
    r = t(85248),
    l = t(46563),
    a = t(19877),
    o = t(68873),
    c = t(52105),
    d = t(28890),
    h = t(47219),
    g = t(32066);
   const u = { title: 'WCAG-succescriterium 1.4.12 Tekstafstand', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.12 Tekstafstand', pagination_label: 'WCAG-succescriterium 1.4.12 Tekstafstand', description: 'Tekst is door bezoekers aan te passen.', slug: '1.4.12', keywords: ['WCAG', 'AA', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'text spacing'] },
    p = void 0,
    j = {},
    m = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, ...g.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...d.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function k(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 1.4.12 Tekstafstand' }), '\n', (0, s.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, s.jsx)(g.Ay, {}), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Op de pagina die je wil testen gebruik je de ', (0, s.jsxs)(n.a, { href: 'https://www.html5accessibility.com/tests/tsbookmarklet.html', children: [(0, s.jsx)('span', { lang: 'en', children: 'text spacing bookmarklet' }), ' van HTML5 Accessibility/Steve Faulkner'] }), '. Zie je niks veranderen? Mogelijk is er een security policy (CSP) aktief die je bookmarklet blokkeert. Je kan ook een extensie voor je browser gebruiken zoals ', (0, s.jsx)(n.a, { href: 'https://github.com/openstyles/stylus', children: 'Stylus' }), '.'] }), '\n', (0, s.jsx)(n.li, { children: 'Controleer of er geen tekst of functionaliteit wegvalt.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'De website hoeft zelf niet deze instellingen te gebruiken. De instellingen moeten alleen ondersteund worden als de gebruiker ze zelf instelt. Denk hierbij bijvoorbeeld aan eigen custom CSS-stylesheets.' }), '\n', (0, s.jsx)(n.li, { children: 'De website hoeft geen instellingen te bieden om dit aan te passen. De instellingen moeten alleen ondersteund worden als de gebruiker ze zelf instelt.' }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, s.jsx)(c.Ay, {}), '\n', (0, s.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#text-spacing', children: (0, s.jsx)('span', { lang: 'en', children: '1.4.12 Text Spacing' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#text-spacing', children: '1.4.12 Tekstafstand' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, s.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#text-spacing', children: (0, s.jsx)('span', { lang: 'en', children: 'Quick Reference 1.4.12 Text Spacing' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html', children: (0, s.jsx)('span', { lang: 'en', children: 'Understanding SC 1.4.12 Text Spacing' }) }), '.'] }), '\n'] }), '\n', (0, s.jsx)(o.K7, { children: (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(d.Ay, {}) }) }), '\n', (0, s.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(h.Ay, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(k, { ...e }) }) : k(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => l, x: () => a });
   var i = t(30758);
   const s = {},
    r = i.createContext(s);
   function l(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, t) => {
   t.d(n, { p: () => r });
   var i = t(13526),
    s = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...l }) => (0, s.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...l, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
 },
]);
