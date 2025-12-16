'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [32184],
 {
  19877: (e, n, t) => {
   t.d(n, { E: () => a });
   var i = t(68873),
    r = t(98584),
    s = t(86070);
   const a = ({ children: e, conformanceLevel: n, ...t }) => (0, s.jsx)(r.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(i.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...t, children: e });
  },
  25583: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => j, contentTitle: () => m, default: () => x, frontMatter: () => p, metadata: () => i, toc: () => v });
   const i = JSON.parse('{"id":"wcag/4.1.03","title":"WCAG-succescriterium 4.1.3 Statusberichten","description":"Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht. Zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meekrijgen.","source":"@site/docs/wcag/4.1.03.mdx","sourceDirName":"wcag","slug":"/wcag/4.1.3","permalink":"/wcag/4.1.3","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/4.1.03.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 4.1.3 Statusberichten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"4.1.3 Statusberichten","pagination_label":"WCAG-succescriterium 4.1.3 Statusberichten","description":"Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht. Zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meekrijgen.","slug":"4.1.3","keywords":["WCAG","AA","robuust","compatibel","robust","compatible","status messages"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 4.1.2 Naam, rol, waarde","permalink":"/wcag/4.1.2"},"next":{"title":"Changelog","permalink":"/CHANGELOG"}}');
   var r = t(86070),
    s = t(85248),
    a = t(46563),
    o = t(19877),
    l = t(68873),
    c = t(52105),
    d = t(28890),
    h = t(47219);
   function g(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht. Als dit bericht bij verschijnen geen toetsenbordfocus krijgt, zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meekrijgen.' }), '\n', (0, r.jsx)(n.p, { children: 'Het doel van dit succescriterium is om gebruikers te informeren over statusberichten, zonder onverwacht hun werk te onderbreken door bijvoorbeeld de focus te verplaatsen.' }), '\n', (0, r.jsx)(n.p, { children: 'Onder een statusbericht verstaan we: een dynamische verandering in inhoud die informatie aan de gebruiker geeft over het succes of de resultaten van een actie, over de wachttoestand van een applicatie, over de voortgang van een proces of over foutmeldingen.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
   const p = { title: 'WCAG-succescriterium 4.1.3 Statusberichten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '4.1.3 Statusberichten', pagination_label: 'WCAG-succescriterium 4.1.3 Statusberichten', description: 'Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht. Zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meekrijgen.', slug: '4.1.3', keywords: ['WCAG', 'AA', 'robuust', 'compatibel', 'robust', 'compatible', 'status messages'] },
    m = void 0,
    j = {},
    v = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...d.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function b(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 4.1.3 Statusberichten' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Op ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 4.1.3: Status Messages' }) }), ' staat goed beschreven wanneer dit succescriterium van toepassing is. Deze pagina bevat ook een aantal links naar wanneer en hoe ARIA-roles hiervoor te gebruiken. Zoals ', (0, r.jsx)(n.code, { children: 'role="status"' }), ', ', (0, r.jsx)(n.code, { children: 'role="log"' }), ' en ', (0, r.jsx)(n.code, { children: 'aria-live' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(c.Ay, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsxs)(n.p, { children: ['Test elk statusbericht dat dynamisch aan de content wordt toegevoegd en geen toetsenbordfocus krijgt.\nWordt de tekst van de melding goed voorgelezen door een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), '?'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': dit geldt alleen voor statusberichten die worden getoond zonder dat de pagina opnieuw geladen wordt.'] }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#status-messages', children: (0, r.jsx)('span', { lang: 'en', children: '4.1.3 Status Messages' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#status-messages', children: '4.1.3 Statusberichten' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#status-messages', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 4.1.3 Status Messages' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 4.1.3: Status Messages' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(l.K7, { children: (0, r.jsx)(a.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.Ay, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(a.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(h.Ay, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b(e);
   }
  },
  28890: (e, n, t) => {
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    r = t(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function a(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  46563: (e, n, t) => {
   t.d(n, { o: () => d });
   var i = t(85248),
    r = t(68873),
    s = t(86070);
   const a = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + r;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: a(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: r = '', components: a = {} }) => (0, s.jsx)(i.x, { components: { ...c(n, t), ...l(r), ...a }, children: e });
  },
  47219: (e, n, t) => {
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    r = t(85248);
   const s = [];
   function a(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  52105: (e, n, t) => {
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    r = t(85248);
   const s = [];
   function a(e) {
    const n = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => a, x: () => o });
   var i = t(30758);
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
  98584: (e, n, t) => {
   t.d(n, { p: () => s });
   var i = t(13526),
    r = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...a }) => (0, r.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...a, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
