'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [93527],
 {
  78003: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => p, contentTitle: () => j, default: () => b, frontMatter: () => m, metadata: () => u, toc: () => v });
   var t = i(52676),
    r = i(40139),
    s = i(57716),
    a = i(46364),
    l = i(16167),
    o = i(60256),
    d = i(99042),
    c = i(91114);
   function h(e) {
    const n = { p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Aanwijsbare elementen op een pagina zijn groot genoeg om makkelijk aan te wijzen met bijvoorbeeld een muis of vinger. Het aan te wijzen gebied is ten minste 24 bij 24 pixels groot.' });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   const m = { title: 'WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.8 Grootte van het aanwijsgebied (minimum)', pagination_label: 'WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)', description: 'Zorg ervoor dat de aanwijsbare elementen op een pagina groot genoeg zijn om makkelijk aan te wijzen met bijvoorbeeld een muis of vinger. Hierbij geldt dat het aan te wijzen gebied ten minste 24 bij 24 pixels groot is.', slug: '2.5.8', keywords: ['WCAG'] },
    j = void 0,
    u = { id: 'wcag/2.5.08', title: 'WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)', description: 'Zorg ervoor dat de aanwijsbare elementen op een pagina groot genoeg zijn om makkelijk aan te wijzen met bijvoorbeeld een muis of vinger. Hierbij geldt dat het aan te wijzen gebied ten minste 24 bij 24 pixels groot is.', source: '@site/docs/wcag/2.5.08.mdx', sourceDirName: 'wcag', slug: '/wcag/2.5.8', permalink: '/wcag/2.5.8', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.5.08.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.8 Grootte van het aanwijsgebied (minimum)', pagination_label: 'WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)', description: 'Zorg ervoor dat de aanwijsbare elementen op een pagina groot genoeg zijn om makkelijk aan te wijzen met bijvoorbeeld een muis of vinger. Hierbij geldt dat het aan te wijzen gebied ten minste 24 bij 24 pixels groot is.', slug: '2.5.8', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.5.7 Sleepbewegingen', permalink: '/wcag/2.5.7' }, next: { title: 'WCAG-succescriterium 3.1.1 Taal van de pagina', permalink: '/wcag/3.1.1' } },
    p = {},
    v = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Bronnen en tools', id: 'bronnen-en-tools', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function w(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', ol: 'ol', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(a.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(g, {}), '\n', (0, t.jsx)(n.p, { children: 'Behalve in de volgende gevallen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Het gebied is te klein, maar een cirkel met een diameter van 24 pixels, gecentreerd op het aanwijsbare element overlapt niet met andere (denkbeeldige) cirkels.' }), '\n', (0, t.jsx)(n.li, { children: 'Er is op de pagina een alternatief voor dit element dat wel groot genoeg is.' }), '\n', (0, t.jsx)(n.li, { children: 'Het aanwijsbare element, bijvoorbeeld een link, is onderdeel van een zin.' }), '\n', (0, t.jsx)(n.li, { children: 'De browser bepaalt de grootte van het element en dit kan niet gewijzigd worden.' }), '\n', (0, t.jsx)(n.li, { children: 'De kleine weergave is essentieel of wettelijk verplicht.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'bronnen-en-tools', children: 'Bronnen en tools' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'https://adrianroselli.com/2022/05/24x24-pixel-cursor-bookmarklet.html', children: 'De bookmarklet van Adrian Roselli' }) }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Voor elk aanwijsbaar element op de pagina, test het volgende:' }), '\n', (0, t.jsxs)(n.ol, { children: ['\n', (0, t.jsx)(n.li, { children: 'Het aanwijsbare gebied moet minimaal 24 bij 24 pixels zijn.' }), '\n', (0, t.jsx)(n.li, { children: 'Als het niet 24 bij 24 pixels is, teken dan een cirkel in het midden van het element met een diameter van 24 pixels. Dit mag niet overlappen met het gebied (of een cirkel) van een ander element.' }), '\n', (0, t.jsx)(n.li, { children: 'Als het alsnog niet voldoet, beoordeel dan de andere uitzonderingen.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(o.ZP, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#target-size-minimum', children: (0, t.jsx)('span', { lang: 'en', children: '2.5.8 Target Size (Minimum)' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#target-size-minimum', children: '2.5.8 Grootte van het aanwijsgebied (minimum)' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#target-size-minimum', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.5.8 Target Size (Minimum)' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 2.5.8 Target Size (Minimum)' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(l.CY, { children: (0, t.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(d.ZP, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.ZP, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(w, { ...e }) }) : w(e);
   }
  },
  60256: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  99042: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  91114: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var t = i(52676),
    r = i(40139);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => s });
   var t = i(4814),
    r = i(52676);
   const s = (e) => {
    let { children: n, className: i, level: s = 1, suffix: a, ...l } = e;
    return (0, r.jsxs)('hgroup', { className: (0, t.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, i), ...l, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), a && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var t = i(40139),
    r = i(16167),
    s = i(52676);
   const a = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    l = { 1: {}, 2: { h1: r.XJ, h2: r.aC, h3: r.k8, h4: r.by, h5: r.Cd }, 3: { h1: r.aC, h2: r.k8, h3: r.by, h4: r.Cd, h5: r.Cd }, 4: { h1: r.k8, h2: r.by, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 5: { h1: r.by, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 6: { h1: r.Cd, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd } },
    o = (e) => ({
     img: (n) => {
      let { src: i, ...t } = n;
      return (0, s.jsx)('img', { ...t, src: a(e, i), className: 'utrecht-img utrecht-img--fit' });
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
     let { children: n, omitH1: i = !1, headingLevel: r = 1, baseUrl: a = '', components: l = {} } = e;
     return (0, s.jsx)(t.Z, { components: { ...d(i, r), ...o(a), ...l }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => a });
   var t = i(16167),
    r = i(41757),
    s = i(52676);
   const a = (e) => {
    let { children: n, conformanceLevel: i, ...a } = e;
    return (0, s.jsx)(r.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, s.jsx)(t.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...a, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => a });
   var t = i(75271);
   const r = {},
    s = t.createContext(r);
   function a(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
