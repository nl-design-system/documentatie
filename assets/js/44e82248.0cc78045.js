'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [32184],
 {
  18439(e, n, t) {
   t.d(n, { R: () => a, x: () => o });
   var r = t(30758);
   const i = {},
    s = r.createContext(i);
   function a(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  24703(e, n, t) {
   t.d(n, { o: () => d });
   var r = t(18439),
    i = t(46447),
    s = t(86070);
   const a = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    l = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: a(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return o[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: i = '', components: a = {} }) => (0, s.jsx)(r.x, { components: { ...c(n, t), ...l(i), ...a }, children: e });
  },
  25431(e, n, t) {
   t.d(n, { Ay: () => o, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [];
   function a(e) {
    const n = { a: 'a', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  29882(e, n, t) {
   t.d(n, { Ay: () => a });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  46276(e, n, t) {
   t.d(n, { p: () => s });
   var r = t(13526),
    i = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...a }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...a, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  61473(e, n, t) {
   t.d(n, { E: () => a });
   var r = t(46447),
    i = t(46276),
    s = t(86070);
   const a = ({ children: e, conformanceLevel: n, ...t }) => (globalThis.isAstro ? null : (0, s.jsx)(i.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...t, children: e }));
  },
  82531(e, n, t) {
   (t.r(n), t.d(n, { assets: () => j, contentTitle: () => m, default: () => f, frontMatter: () => p, metadata: () => r, toc: () => v }));
   const r = JSON.parse('{"id":"wcag/4.1.03","title":"WCAG-succescriterium 4.1.3 Statusberichten","description":"Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht. Zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meekrijgen.","source":"@site/docs/wcag/4.1.03.mdx","sourceDirName":"wcag","slug":"/wcag/4.1.3","permalink":"/wcag/4.1.3","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/4.1.03.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 4.1.3 Statusberichten","title_sm":"WCAG 4.1.3: Statusberichten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"4.1.3 Statusberichten","pagination_label":"WCAG-succescriterium 4.1.3 Statusberichten","description":"Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht. Zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meekrijgen.","slug":"4.1.3","conformance_level":"Niveau AA","keywords":["WCAG","AA","robuust","compatibel","robust","compatible","status messages"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 4.1.2 Naam, rol, waarde","permalink":"/wcag/4.1.2"},"next":{"title":"Changelog","permalink":"/CHANGELOG"}}');
   var i = t(86070),
    s = t(18439),
    a = t(24703),
    o = t(61473),
    l = t(93681),
    c = t(25431),
    d = t(88275),
    h = t(29882);
   function u(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht. Als dit bericht bij verschijnen geen toetsenbordfocus krijgt, zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meekrijgen.' }), '\n', (0, i.jsx)(n.p, { children: 'Het doel van dit succescriterium is om gebruikers te informeren over statusberichten, zonder onverwacht hun werk te onderbreken door bijvoorbeeld de focus te verplaatsen.' }), '\n', (0, i.jsx)(n.p, { children: 'Onder een statusbericht verstaan we: een dynamische verandering in inhoud die informatie aan de gebruiker geeft over het succes of de resultaten van een actie, over de wachttoestand van een applicatie, over de voortgang van een proces of over foutmeldingen.' })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
   const p = { title: 'WCAG-succescriterium 4.1.3 Statusberichten', title_sm: 'WCAG 4.1.3: Statusberichten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '4.1.3 Statusberichten', pagination_label: 'WCAG-succescriterium 4.1.3 Statusberichten', description: 'Je kunt updates met belangrijke informatie met de gebruiker delen via een statusbericht. Zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meekrijgen.', slug: '4.1.3', conformance_level: 'Niveau AA', keywords: ['WCAG', 'AA', 'robuust', 'compatibel', 'robust', 'compatible', 'status messages'] },
    m = void 0,
    j = {},
    v = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }];
   function b(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 4.1.3 Statusberichten' }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(g, {}), '\n', (0, i.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Op ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 4.1.3: Status Messages' }) }), ' staat goed beschreven wanneer dit succescriterium van toepassing is. Deze pagina bevat ook een aantal links naar wanneer en hoe ARIA-roles hiervoor te gebruiken. Zoals ', (0, i.jsx)(n.code, { children: 'role="status"' }), ', ', (0, i.jsx)(n.code, { children: 'role="log"' }), ' en ', (0, i.jsx)(n.code, { children: 'aria-live' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(c.Ay, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsxs)(n.p, { children: ['Test elk statusbericht dat dynamisch aan de content wordt toegevoegd en geen toetsenbordfocus krijgt.\nWordt de tekst van de melding goed voorgelezen door een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), '?'] }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Let op' }), ': dit geldt alleen voor statusberichten die worden getoond zonder dat de pagina opnieuw geladen wordt.'] }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#status-messages', children: (0, i.jsx)('span', { lang: 'en', children: '4.1.3 Status Messages' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#status-messages', children: '4.1.3 Statusberichten' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#status-messages', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 4.1.3 Status Messages' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 4.1.3: Status Messages' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(l.K, { children: (0, i.jsx)(a.o, { omitH1: !0, headingLevel: 3, content: d.Ay }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(a.o, { omitH1: !0, headingLevel: 3, content: h.Ay })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(b, { ...e }) }) : b(e);
   }
  },
  88275(e, n, t) {
   t.d(n, { Ay: () => a });
   var r = t(86070),
    i = t(18439);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88547(e, n, t) {
   t.d(n, { L: () => a });
   var r = t(86070);
   function i(e) {
    var n,
     t,
     r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var s = e.length;
      for (n = 0; n < s; n++) e[n] && (t = i(e[n])) && (r && (r += ' '), (r += t));
     } else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
   }
   function s() {
    for (var e, n, t = 0, r = '', s = arguments.length; t < s; t++) (e = arguments[t]) && (n = i(e)) && (r && (r += ' '), (r += n));
    return r;
   }
   const a = (0, t(30758).forwardRef)(({ aside: e, children: n, className: t, purpose: i, ...a }, o) => {
    const l = { ...a, ref: o, className: s('utrecht-note', { [`utrecht-note--${i}`]: i }, t) };
    return e ? (0, r.jsx)('aside', { ...l, children: n }) : (0, r.jsx)('section', { role: 'note', ...l, children: n });
   });
   a.displayName = 'Note';
  },
  93681(e, n, t) {
   t.d(n, { K: () => s });
   var r = t(88547),
    i = t(29181);
   const s = globalThis.isAstro ? r.L : i.K7;
  },
 },
]);
