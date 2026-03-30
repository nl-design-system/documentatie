'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [6907],
 {
  12013(e, n, t) {
   t.d(n, { o: () => d });
   var i = t(18439),
    s = t(46447),
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
      return ((e.h1 = () => null), e);
     }
     return a[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: s = '', components: l = {} }) => (0, r.jsx)(i.x, { components: { ...c(n, t), ...o(s), ...l }, children: e });
  },
  18439(e, n, t) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), i.createElement(r.Provider, { value: n }, e.children));
   }
  },
  28890(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => r });
   var i = t(86070),
    s = t(18439);
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
  47219(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => r });
   var i = t(86070),
    s = t(18439);
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
  52105(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => r });
   var i = t(86070),
    s = t(18439);
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
  72642(e, n, t) {
   t.d(n, { p: () => r });
   var i = t(13526),
    s = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...l }) => (0, s.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...l, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  75900(e, n, t) {
   (t.r(n), t.d(n, { assets: () => p, contentTitle: () => j, default: () => v, frontMatter: () => u, metadata: () => i, toc: () => m }));
   const i = JSON.parse('{"id":"wcag/1.4.05","title":"WCAG-succescriterium 1.4.5 Afbeeldingen van tekst","description":"Laat tekst buiten afbeeldingen.","source":"@site/docs/wcag/1.4.05.mdx","sourceDirName":"wcag","slug":"/wcag/1.4.5","permalink":"/wcag/1.4.5","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.4.05.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.4.5 Afbeeldingen van tekst","title_sm":"WCAG 1.4.5","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.4.5 Afbeeldingen van tekst","pagination_label":"WCAG-succescriterium 1.4.5 Afbeeldingen van tekst","description":"Laat tekst buiten afbeeldingen.","slug":"1.4.5","keywords":["WCAG","AA","waarneembaar","onderscheidbaar","perceivable","distinguishable","images of text"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.4.4 Herschalen van tekst","permalink":"/wcag/1.4.4"},"next":{"title":"WCAG-succescriterium 1.4.6 Contrast (versterkt)","permalink":"/wcag/1.4.6"}}');
   var s = t(86070),
    r = t(18439),
    l = t(12013),
    a = t(80003),
    o = t(46447),
    c = t(52105),
    d = t(28890),
    h = t(47219),
    g = t(96412);
   const u = { title: 'WCAG-succescriterium 1.4.5 Afbeeldingen van tekst', title_sm: 'WCAG 1.4.5', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.5 Afbeeldingen van tekst', pagination_label: 'WCAG-succescriterium 1.4.5 Afbeeldingen van tekst', description: 'Laat tekst buiten afbeeldingen.', slug: '1.4.5', keywords: ['WCAG', 'AA', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'images of text'] },
    j = void 0,
    p = {},
    m = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, ...g.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...d.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function k(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 1.4.5 Afbeeldingen van tekst' }), '\n', (0, s.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, s.jsx)(g.Ay, {}), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Controleer voor alle tekst dat deze niet (alleen) in een afbeelding zit. Losse tekst herken je aan:', '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Vaak kan losse tekst geselecteerd worden. Tekst in afbeeldingen kun je niet selecteren. Een afbeelding kun je mogelijk wel slepen.' }), '\n', (0, s.jsx)(n.li, { children: 'Losse tekst is terug te vinden in de HTML-code. Tekst in een afbeelding is daar niet te vinden.' }), '\n', (0, s.jsx)(n.li, { children: 'Losse tekst kan aangepast worden met een vertaaltool, met eigen CSS of met instellingen van je computer of browser. Tekst in een afbeelding is niet aan te passen.' }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Als de tekst in een afbeelding zit maar toch aangepast kan worden hoe deze eruit ziet, dan voldoet het ook.' }), '\n', (0, s.jsx)(n.li, { children: "Dit succescriterium klinkt mogelijk strenger dan het is. Het geldt niet voor afbeeldingen waar tekst niet het hoofdonderwerp is zoals screenshots, grafieken en foto's van objecten met tekst." }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, s.jsx)(c.Ay, {}), '\n', (0, s.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#resize-text', children: (0, s.jsx)('span', { lang: 'en', children: '1.4.5 Images of Text' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#resize-text', children: '1.4.5 Afbeeldingen van tekst' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, s.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#resize-text', children: (0, s.jsx)('span', { lang: 'en', children: 'Quick Reference 1.4.5 Images of Text' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html', children: (0, s.jsx)('span', { lang: 'en', children: 'Understanding SC 1.4.5 Images of Text' }) }), '.'] }), '\n'] }), '\n', (0, s.jsx)(o.K7, { children: (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(d.Ay, {}) }) }), '\n', (0, s.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, s.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, s.jsx)(h.Ay, {}) })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(k, { ...e }) }) : k(e);
   }
  },
  80003(e, n, t) {
   t.d(n, { E: () => l });
   var i = t(46447),
    s = t(72642),
    r = t(86070);
   const l = ({ children: e, conformanceLevel: n, ...t }) => (0, r.jsx)(s.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, r.jsx)(i.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...t, children: e });
  },
  96412(e, n, t) {
   t.d(n, { Ay: () => a, RM: () => r });
   var i = t(86070),
    s = t(18439);
   const r = [];
   function l(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Laat tekst buiten afbeeldingen.' }), '\n', (0, i.jsx)(n.p, { children: 'Als je losse tekst een vergelijkbaar uiterlijk kan geven als in een afbeelding, laat het dan losse tekst zijn. Er is een uitzondering als de tekst onderdeel is van een logo.' }), '\n', (0, i.jsx)(n.p, { children: 'Sommige mensen hebben teksten nodig met een ander uiterlijk. Dit kan bij losse tekst en niet bij afbeeldingen.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
