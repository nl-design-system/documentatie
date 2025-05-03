'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [40334],
 {
  78196: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => j, contentTitle: () => p, default: () => k, frontMatter: () => g, metadata: () => m, toc: () => v });
   var i = t(52676),
    r = t(40139),
    s = t(57716),
    a = t(46364),
    o = t(16167),
    d = t(60256),
    l = t(99042),
    c = t(91114);
   function h(e) {
    const n = { p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht. Als dit bericht bij verschijnen geen toetsenbordfocus krijgt, zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meekrijgen.' }), '\n', (0, i.jsx)(n.p, { children: 'Het doel van dit succescriterium is om gebruikers te informeren over statusberichten, zonder onverwacht hun werk te onderbreken door bijvoorbeeld de focus te verplaatsen.' }), '\n', (0, i.jsx)(n.p, { children: 'Onder een statusbericht verstaan we: een dynamische verandering in inhoud die informatie aan de gebruiker geeft over het succes of de resultaten van een actie, over de wachttoestand van een applicatie, over de voortgang van een proces of over foutmeldingen.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'WCAG-succescriterium 4.1.3 Statusberichten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '4.1.3 Statusberichten', pagination_label: 'WCAG-succescriterium 4.1.3 Statusberichten', description: 'Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht. Zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meekrijgen.', slug: '4.1.3', keywords: ['WCAG', 'AA', 'robuust', 'compatibel', 'robust', 'compatible', 'status messages'] },
    p = void 0,
    m = { id: 'wcag/4.1.03', title: 'WCAG-succescriterium 4.1.3 Statusberichten', description: 'Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht. Zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meekrijgen.', source: '@site/docs/wcag/4.1.03.mdx', sourceDirName: 'wcag', slug: '/wcag/4.1.3', permalink: '/wcag/4.1.3', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/4.1.03.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 4.1.3 Statusberichten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '4.1.3 Statusberichten', pagination_label: 'WCAG-succescriterium 4.1.3 Statusberichten', description: 'Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht. Zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meekrijgen.', slug: '4.1.3', keywords: ['WCAG', 'AA', 'robuust', 'compatibel', 'robust', 'compatible', 'status messages'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 4.1.2 Naam, rol, waarde', permalink: '/wcag/4.1.2' }, next: { title: '@nl-design-system-unstable/documentation', permalink: '/CHANGELOG' } },
    j = {},
    v = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function b(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(a.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 4.1.3 Statusberichten' }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(u, {}), '\n', (0, i.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Op ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 4.1.3: Status Messages' }) }), ' staat goed beschreven wanneer dit succescriterium van toepassing is. Deze pagina bevat ook een aantal links naar wanneer en hoe ARIA-roles hiervoor te gebruiken. Zoals ', (0, i.jsx)(n.code, { children: 'role="status"' }), ', ', (0, i.jsx)(n.code, { children: 'role="log"' }), ' en ', (0, i.jsx)(n.code, { children: 'aria-live' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(d.ZP, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'Test elk statusbericht dat dynamisch aan de content wordt toegevoegd en geen toetsenbordfocus krijgt.\nWordt de tekst van de melding goed voorgelezen door een screenreader?' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': dit geldt alleen voor statusberichten die worden getoond zonder dat de pagina opnieuw geladen wordt.'] }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#status-messages', children: (0, i.jsx)('span', { lang: 'en', children: '4.1.3 Status Messages' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#statusberichten', children: '4.1.3 Statusberichten' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#status-messages', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 4.1.3 Status Messages' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 4.1.3: Status Messages' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(o.CY, { children: (0, i.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(l.ZP, {}) }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(c.ZP, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(b, { ...e }) }) : b(e);
   }
  },
  60256: (e, n, t) => {
   t.d(n, { ZP: () => a });
   var i = t(52676),
    r = t(40139);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  99042: (e, n, t) => {
   t.d(n, { ZP: () => a });
   var i = t(52676),
    r = t(40139);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  91114: (e, n, t) => {
   t.d(n, { ZP: () => a });
   var i = t(52676),
    r = t(40139);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, t) => {
   t.d(n, { V: () => s });
   var i = t(4814),
    r = t(52676);
   const s = (e) => {
    let { children: n, className: t, level: s = 1, suffix: a, ...o } = e;
    return (0, r.jsxs)('hgroup', { className: (0, i.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, t), ...o, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), a && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
   };
  },
  57716: (e, n, t) => {
   t.d(n, { U: () => c });
   var i = t(40139),
    r = t(16167),
    s = t(52676);
   const a = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + r;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: r.XJ, h2: r.aC, h3: r.k8, h4: r.by, h5: r.Cd }, 3: { h1: r.aC, h2: r.k8, h3: r.by, h4: r.Cd, h5: r.Cd }, 4: { h1: r.k8, h2: r.by, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 5: { h1: r.by, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 6: { h1: r.Cd, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd } },
    d = (e) => ({
     img: (n) => {
      let { src: t, ...i } = n;
      return (0, s.jsx)('img', { ...i, src: a(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    l = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: r = 1, baseUrl: a = '', components: o = {} } = e;
     return (0, s.jsx)(i.Z, { components: { ...l(t, r), ...d(a), ...o }, children: n });
    };
  },
  46364: (e, n, t) => {
   t.d(n, { j: () => a });
   var i = t(16167),
    r = t(41757),
    s = t(52676);
   const a = (e) => {
    let { children: n, conformanceLevel: t, ...a } = e;
    return (0, s.jsx)(r.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: t && (0, s.jsx)(i.Ou, { className: 'nlds-inline-heading-group__badge', children: t }), ...a, children: n });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => a });
   var i = t(75271);
   const r = {},
    s = i.createContext(r);
   function a(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
