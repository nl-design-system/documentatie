'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [30588],
 {
  7047(e, n, r) {
   r.d(n, { Ay: () => o });
   var i = r(86070),
    t = r(18439);
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvulling-op-dit-wcag-aaa-succescriterium', children: 'Aanvulling op dit WCAG AAA Succescriterium' }) }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Belangrijk:' }), ' Het is volgens de Nederlandse wetgeving niet verplicht om aan dit AAA-succescriterium te voldoen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  18439(e, n, r) {
   r.d(n, { R: () => o, x: () => a });
   var i = r(30758);
   const t = {},
    s = i.createContext(t);
   function o(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children));
   }
  },
  24703(e, n, r) {
   r.d(n, { o: () => d });
   var i = r(18439),
    t = r(46447),
    s = r(86070);
   const o = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: i, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return r + i + t;
     }
     return r.toString();
    },
    a = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    l = (e) => ({ img: ({ src: n, ...r }) => (0, s.jsx)('img', { ...r, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return a[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: r = 1, baseUrl: t = '', components: o = {} }) => (0, s.jsx)(i.x, { components: { ...c(n, r), ...l(t), ...o }, children: e });
  },
  25431(e, n, r) {
   r.d(n, { Ay: () => a, RM: () => s });
   var i = r(86070),
    t = r(18439);
   const s = [];
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  29882(e, n, r) {
   r.d(n, { Ay: () => o });
   var i = r(86070),
    t = r(18439);
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  46276(e, n, r) {
   r.d(n, { p: () => s });
   var i = r(13526),
    t = r(86070);
   const s = ({ children: e, className: n, level: r = 1, suffix: s, ...o }) => (0, t.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${r}`, n), ...o, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  61473(e, n, r) {
   r.d(n, { E: () => o });
   var i = r(46447),
    t = r(46276),
    s = r(86070);
   const o = ({ children: e, conformanceLevel: n, ...r }) => (globalThis.isAstro ? null : (0, s.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(i.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...r, children: e }));
  },
  88275(e, n, r) {
   r.d(n, { Ay: () => o });
   var i = r(86070),
    t = r(18439);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88547(e, n, r) {
   r.d(n, { L: () => o });
   var i = r(86070);
   function t(e) {
    var n,
     r,
     i = '';
    if ('string' == typeof e || 'number' == typeof e) i += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var s = e.length;
      for (n = 0; n < s; n++) e[n] && (r = t(e[n])) && (i && (i += ' '), (i += r));
     } else for (r in e) e[r] && (i && (i += ' '), (i += r));
    return i;
   }
   function s() {
    for (var e, n, r = 0, i = '', s = arguments.length; r < s; r++) (e = arguments[r]) && (n = t(e)) && (i && (i += ' '), (i += n));
    return i;
   }
   const o = (0, r(30758).forwardRef)(({ aside: e, children: n, className: r, purpose: t, ...o }, a) => {
    const l = { ...o, ref: a, className: s('utrecht-note', { [`utrecht-note--${t}`]: t }, r) };
    return e ? (0, i.jsx)('aside', { ...l, children: n }) : (0, i.jsx)('section', { role: 'note', ...l, children: n });
   });
   o.displayName = 'Note';
  },
  90203(e, n, r) {
   (r.r(n), r.d(n, { assets: () => m, contentTitle: () => j, default: () => k, frontMatter: () => v, metadata: () => i, toc: () => f }));
   const i = JSON.parse('{"id":"wcag/3.2.05","title":"WCAG-succescriterium 3.2.5 Verandering op verzoek","description":"Geef gebruikers volledige controle over veranderingen in de content. Of bied de mogelijkheid automatische veranderingen uit te zetten.","source":"@site/docs/wcag/3.2.05.mdx","sourceDirName":"wcag","slug":"/wcag/3.2.5","permalink":"/wcag/3.2.5","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.2.05.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 3.2.5 Verandering op verzoek","title_sm":"WCAG 3.2.5: Verandering op verzoek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3.2.5 Verandering op verzoek","pagination_label":"WCAG-succescriterium 3.2.5 Verandering op verzoek","description":"Geef gebruikers volledige controle over veranderingen in de content. Of bied de mogelijkheid automatische veranderingen uit te zetten.","slug":"3.2.5","conformance_level":"Niveau AAA","keywords":["WCAG","AAA","begrijpelijk","voorspelbaar","understandable","predictable","change on request"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 3.2.4 Consistente identificatie","permalink":"/wcag/3.2.4"},"next":{"title":"WCAG-succescriterium 3.2.6 Consistente hulp","permalink":"/wcag/3.2.6"}}');
   var t = r(86070),
    s = r(18439),
    o = r(24703),
    a = r(61473),
    l = r(93681),
    c = r(25431),
    d = r(88275),
    h = r(7047),
    g = r(29882);
   function u(e) {
    const n = { a: 'a', p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Geef gebruikers volledige controle over veranderingen in de content.\nOf bied de mogelijkheid automatische veranderingen uit te zetten.' }), '\n', (0, t.jsx)(n.p, { children: 'Veranderingen van content zijn bijvoorbeeld het aanpassen van de zoekresultaten na het selecteren van een checkbox in een filter. Voeg in dat geval een "Pas het filter toe"-button toe.' }), '\n', (0, t.jsx)(n.p, { children: 'Dit is van belang voor gebruikers die de veranderingen niet goed opmerken omdat ze zijn ingezoomd, of voor gebruikers met een cognitieve beperking, die moeite hebben te begrijpen dat er meteen content aangepast wordt.' }), '\n', (0, t.jsxs)(n.p, { children: ['Dit succescriterium gaat dus een stap verder dan het ', (0, t.jsx)(n.a, { href: '/wcag/3.2.1/', children: 'WCAG-succescriterium 3.2.1 Bij input' }), ', door te vereisen dat gebruikers ', (0, t.jsx)(n.strong, { children: 'altijd zelf' }), ' veranderingen van de context initi\xebren.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const v = { title: 'WCAG-succescriterium 3.2.5 Verandering op verzoek', title_sm: 'WCAG 3.2.5: Verandering op verzoek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.2.5 Verandering op verzoek', pagination_label: 'WCAG-succescriterium 3.2.5 Verandering op verzoek', description: 'Geef gebruikers volledige controle over veranderingen in de content. Of bied de mogelijkheid automatische veranderingen uit te zetten.', slug: '3.2.5', conformance_level: 'Niveau AAA', keywords: ['WCAG', 'AAA', 'begrijpelijk', 'voorspelbaar', 'understandable', 'predictable', 'change on request'] },
    j = void 0,
    m = {},
    f = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Opgelet', id: 'opgelet', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }];
   function x(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau AAA', children: 'WCAG-succescriterium 3.2.5 Verandering op verzoek' }), '\n', (0, t.jsx)(l.K, { children: (0, t.jsx)(o.o, { omitH1: !0, headingLevel: 3, content: h.Ay }) }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(n.h2, { id: 'opgelet', children: 'Opgelet' }), '\n', (0, t.jsx)(n.p, { children: 'Deze inhoud wordt binnenkort aangevuld met uitgebreidere uitleg, bronnen en informatie over hoe te testen.' }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(c.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#change-on-request', children: (0, t.jsx)('span', { lang: 'en', children: '3.2.5 Change on Request' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#change-on-request', children: '3.2.5 Verandering op verzoek' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#change-on-request', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 3.2.5 Change on Request' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 3.2.5: Change on Request ' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(l.K, { children: (0, t.jsx)(o.o, { omitH1: !0, headingLevel: 3, content: d.Ay }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(o.o, { omitH1: !0, headingLevel: 3, content: g.Ay })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
   }
  },
  93681(e, n, r) {
   r.d(n, { K: () => s });
   var i = r(88547),
    t = r(29181);
   const s = globalThis.isAstro ? i.L : t.K7;
  },
 },
]);
