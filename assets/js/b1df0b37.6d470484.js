'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [92060],
 {
  30658: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => v, contentTitle: () => g, default: () => x, frontMatter: () => j, metadata: () => p, toc: () => m });
   var r = i(52676),
    t = i(40139),
    o = i(57716),
    s = i(46364),
    l = i(16167),
    a = i(60256),
    c = i(99042),
    d = i(91114);
   function h(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Maak tijdelijke inhoud voorspelbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Soms wordt inhoud pas zichtbaar bij focus met een toetsenbord of bij een hover met een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#aanwijzer', children: 'aanwijzer' }), ' zoals een muis. Dit gebeurt bijvoorbeeld bij een uitklapmenu of tooltip. De interactie moet dan voorspelbaar zijn.'] }), '\n', (0, r.jsx)(n.p, { children: 'Hiervoor gelden enkele regels:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['De bezoeker moet de inhoud kunnen verbergen zonder de aanwijzer of focus te verplaatsen, bijvoorbeeld met de ', (0, r.jsx)('kbd', { children: 'esc' }), '-toets.'] }), '\n', (0, r.jsx)(n.li, { children: 'Als de inhoud tevoorschijn komt door de aanwijzer, dan moet de aanwijzer ook over deze inhoud bewogen kunnen worden zonder dat deze verdwijnt.' }), '\n', (0, r.jsxs)(n.li, { children: ['De extra inhoud moet aanwezig blijven totdat:', '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'de zichtbaar-makende focus of aanwijzer verwijderd wordt;' }), '\n', (0, r.jsx)(n.li, { children: 'of de bezoeker de extra inhoud verbergt;' }), '\n', (0, r.jsx)(n.li, { children: 'of de extra inhoud niet meer geldig is.' }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Voor sommige mensen is onvoorspelbare tijdelijke inhoud lastig te verwerken of storend. Bijvoorbeeld voor mensen met een cognitieve beperking en mensen die snel afgeleid zijn.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const j = { title: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.13 Content bij hover of focus', pagination_label: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', description: 'Maak tijdelijke inhoud voorspelbaar.', slug: '1.4.13', keywords: ['WCAG', 'AA', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'content on hover or focus'] },
    g = void 0,
    p = { id: 'wcag/1.4.13', title: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', description: 'Maak tijdelijke inhoud voorspelbaar.', source: '@site/docs/wcag/1.4.13.mdx', sourceDirName: 'wcag', slug: '/wcag/1.4.13', permalink: '/wcag/1.4.13', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.4.13.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.13 Content bij hover of focus', pagination_label: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', description: 'Maak tijdelijke inhoud voorspelbaar.', slug: '1.4.13', keywords: ['WCAG', 'AA', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'content on hover or focus'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.4.12 Tekstafstand', permalink: '/wcag/1.4.12' }, next: { title: 'WCAG-succescriterium 2.1.1 Toetsenbord', permalink: '/wcag/2.1.1' } },
    v = {},
    m = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Tips', id: 'tips', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function f(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(s.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 1.4.13 Content bij hover of focus' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Hover over of focus op het element dat je wil testen.' }), '\n', (0, r.jsx)(n.li, { children: 'Wacht 10 seconden om te ervaren of de extra inhoud niet vanzelf sluit.' }), '\n', (0, r.jsxs)(n.li, { children: ['Test of de extra inhoud te sluiten is met de ', (0, r.jsx)('kbd', { children: 'esc' }), '-toets.'] }), '\n', (0, r.jsx)(n.li, { children: 'Probeer met de aanwijzer over de extra inhoud te hoveren, en controleer of deze niet verdwijnt.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Door inhoud alleen te laten verschijnen bij activaties, zoals met een toetsenbord of klikken met een aanwijzer, hoeft er geen rekening gehouden te worden met dit succescriterium.' }), '\n', (0, r.jsx)(n.li, { children: 'Inhoud die afhankelijk is van focus of hover is ook problematisch voor apparaten met een touchscreen.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(a.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#content-on-hover-or-focus', children: (0, r.jsx)('span', { lang: 'en', children: '1.4.13 Content on Hover or Focus' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#content-bij-hover-of-focus', children: '1.4.13 Content bij hover of focus' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#content-on-hover-or-focus', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 1.4.13 Content on Hover or Focus' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 1.4.13 Content on Hover or Focus' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(l.CY, { children: (0, r.jsx)(o.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(o.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.ZP, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(f, { ...e }) }) : f(e);
   }
  },
  60256: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var r = i(52676),
    t = i(40139);
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  99042: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var r = i(52676),
    t = i(40139);
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  91114: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var r = i(52676),
    t = i(40139);
   function o(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => o });
   var r = i(4814),
    t = i(52676);
   const o = (e) => {
    let { children: n, className: i, level: o = 1, suffix: s, ...l } = e;
    return (0, t.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${o}`, i), ...l, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => d });
   var r = i(40139),
    t = i(16167),
    o = i(52676);
   const s = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    l = { 1: {}, 2: { h1: t.XJ, h2: t.aC, h3: t.k8, h4: t.by, h5: t.Cd }, 3: { h1: t.aC, h2: t.k8, h3: t.by, h4: t.Cd, h5: t.Cd }, 4: { h1: t.k8, h2: t.by, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 5: { h1: t.by, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 6: { h1: t.Cd, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd } },
    a = (e) => ({
     img: (n) => {
      let { src: i, ...r } = n;
      return (0, o.jsx)('img', { ...r, src: s(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    c = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    d = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: t = 1, baseUrl: s = '', components: l = {} } = e;
     return (0, o.jsx)(r.Z, { components: { ...c(i, t), ...a(s), ...l }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => s });
   var r = i(16167),
    t = i(41757),
    o = i(52676);
   const s = (e) => {
    let { children: n, conformanceLevel: i, ...s } = e;
    return (0, o.jsx)(t.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, o.jsx)(r.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...s, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => s });
   var r = i(75271);
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
 },
]);
