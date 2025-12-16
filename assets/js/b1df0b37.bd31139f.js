'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [18498],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => s });
   var r = i(68873),
    t = i(98584),
    o = i(86070);
   const s = ({ children: e, conformanceLevel: n, ...i }) => (0, o.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, o.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => o });
   var r = i(86070),
    t = i(85248);
   const o = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => d });
   var r = i(85248),
    t = i(68873),
    o = i(86070);
   const s = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    l = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    c = (e) => ({ img: ({ src: n, ...i }) => (0, o.jsx)('img', { ...i, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    a = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: s = {} }) => (0, o.jsx)(r.x, { components: { ...a(n, i), ...c(t), ...s }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => o });
   var r = i(86070),
    t = i(85248);
   const o = [];
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => o });
   var r = i(86070),
    t = i(85248);
   const o = [];
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  71883: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => v, contentTitle: () => p, default: () => x, frontMatter: () => g, metadata: () => r, toc: () => m });
   const r = JSON.parse('{"id":"wcag/1.4.13","title":"WCAG-succescriterium 1.4.13 Content bij hover of focus","description":"Maak tijdelijke inhoud voorspelbaar.","source":"@site/docs/wcag/1.4.13.mdx","sourceDirName":"wcag","slug":"/wcag/1.4.13","permalink":"/wcag/1.4.13","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.4.13.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.4.13 Content bij hover of focus","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.4.13 Content bij hover of focus","pagination_label":"WCAG-succescriterium 1.4.13 Content bij hover of focus","description":"Maak tijdelijke inhoud voorspelbaar.","slug":"1.4.13","keywords":["WCAG","AA","waarneembaar","onderscheidbaar","perceivable","distinguishable","content on hover or focus"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.4.12 Tekstafstand","permalink":"/wcag/1.4.12"},"next":{"title":"WCAG-succescriterium 2.1.1 Toetsenbord","permalink":"/wcag/2.1.1"}}');
   var t = i(86070),
    o = i(85248),
    s = i(46563),
    l = i(19877),
    c = i(68873),
    a = i(52105),
    d = i(28890),
    h = i(47219);
   function u(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Maak tijdelijke inhoud voorspelbaar.' }), '\n', (0, t.jsxs)(n.p, { children: ['Soms wordt inhoud pas zichtbaar bij focus met een toetsenbord of bij een hover met een ', (0, t.jsx)(n.a, { href: '/woordenlijst/#aanwijzer', children: 'aanwijzer' }), ' zoals een muis. Dit gebeurt bijvoorbeeld bij een uitklapmenu of tooltip. De interactie moet dan voorspelbaar zijn.'] }), '\n', (0, t.jsx)(n.p, { children: 'Hiervoor gelden enkele regels:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['De bezoeker moet de inhoud kunnen verbergen zonder de aanwijzer of focus te verplaatsen, bijvoorbeeld met de ', (0, t.jsx)('kbd', { children: 'esc' }), '-toets.'] }), '\n', (0, t.jsx)(n.li, { children: 'Als de inhoud tevoorschijn komt door de aanwijzer, dan moet de aanwijzer ook over deze inhoud bewogen kunnen worden zonder dat deze verdwijnt.' }), '\n', (0, t.jsxs)(n.li, { children: ['De extra inhoud moet aanwezig blijven totdat:', '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'de zichtbaar-makende focus of aanwijzer verwijderd wordt;' }), '\n', (0, t.jsx)(n.li, { children: 'of de bezoeker de extra inhoud verbergt;' }), '\n', (0, t.jsx)(n.li, { children: 'of de extra inhoud niet meer geldig is.' }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Voor sommige mensen is onvoorspelbare tijdelijke inhoud lastig te verwerken of storend. Bijvoorbeeld voor mensen met een cognitieve beperking en mensen die snel afgeleid zijn.' })] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.13 Content bij hover of focus', pagination_label: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', description: 'Maak tijdelijke inhoud voorspelbaar.', slug: '1.4.13', keywords: ['WCAG', 'AA', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'content on hover or focus'] },
    p = void 0,
    v = {},
    m = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...a.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...d.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function f(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(l.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 1.4.13 Content bij hover of focus' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(j, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Hover over of focus op het element dat je wil testen.' }), '\n', (0, t.jsx)(n.li, { children: 'Wacht 10 seconden om te ervaren of de extra inhoud niet vanzelf sluit.' }), '\n', (0, t.jsxs)(n.li, { children: ['Test of de extra inhoud te sluiten is met de ', (0, t.jsx)('kbd', { children: 'esc' }), '-toets.'] }), '\n', (0, t.jsx)(n.li, { children: 'Probeer met de aanwijzer over de extra inhoud te hoveren, en controleer of deze niet verdwijnt.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Door inhoud alleen te laten verschijnen bij activaties, zoals met een toetsenbord of klikken met een aanwijzer, hoeft er geen rekening gehouden te worden met dit succescriterium.' }), '\n', (0, t.jsx)(n.li, { children: 'Inhoud die afhankelijk is van focus of hover is ook problematisch voor apparaten met een touchscreen.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(a.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#content-on-hover-or-focus', children: (0, t.jsx)('span', { lang: 'en', children: '1.4.13 Content on Hover or Focus' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#content-on-hover-or-focus', children: '1.4.13 Content bij hover of focus' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#content-on-hover-or-focus', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 1.4.13 Content on Hover or Focus' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 1.4.13 Content on Hover or Focus' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(c.K7, { children: (0, t.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(d.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => s, x: () => l });
   var r = i(30758);
   const t = {},
    o = r.createContext(t);
   function s(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(o.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => o });
   var r = i(13526),
    t = i(86070);
   const o = ({ children: e, className: n, level: i = 1, suffix: o, ...s }) => (0, t.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...s, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
 },
]);
