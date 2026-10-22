'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [57892],
 {
  7047(e, n, i) {
   i.d(n, { Ay: () => a });
   var t = i(86070),
    r = i(18439);
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'aanvulling-op-dit-wcag-aaa-succescriterium', children: 'Aanvulling op dit WCAG AAA Succescriterium' }) }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Belangrijk:' }), ' Het is volgens de Nederlandse wetgeving niet verplicht om aan dit AAA-succescriterium te voldoen.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  18439(e, n, i) {
   i.d(n, { R: () => a, x: () => l });
   var t = i(30758);
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(s.Provider, { value: n }, e.children));
   }
  },
  24703(e, n, i) {
   i.d(n, { o: () => d });
   var t = i(18439),
    r = i(46447),
    s = i(86070);
   const a = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    l = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    o = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: a(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return l[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: r = '', components: a = {} }) => (0, s.jsx)(t.x, { components: { ...c(n, i), ...o(r), ...a }, children: e });
  },
  25431(e, n, i) {
   i.d(n, { Ay: () => l, RM: () => s });
   var t = i(86070),
    r = i(18439);
   const s = [];
   function a(e) {
    const n = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  29882(e, n, i) {
   i.d(n, { Ay: () => a });
   var t = i(86070),
    r = i(18439);
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  33857(e, n, i) {
   (i.r(n), i.d(n, { assets: () => v, contentTitle: () => m, default: () => f, frontMatter: () => j, metadata: () => t, toc: () => w }));
   const t = JSON.parse('{"id":"wcag/2.4.08","title":"WCAG-succescriterium 2.4.8 Locatie","description":"Laat gebruikers weten waar ze zich precies bevinden binnen een website.","source":"@site/docs/wcag/2.4.08.mdx","sourceDirName":"wcag","slug":"/wcag/2.4.8","permalink":"/wcag/2.4.8","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.08.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.4.8 Locatie","title_sm":"WCAG 2.4.8: Locatie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.4.8 Locatie","pagination_label":"2.4.8 Locatie","description":"Laat gebruikers weten waar ze zich precies bevinden binnen een website.","slug":"2.4.8","conformance_level":"Niveau AAA","keywords":["WCAG","AAA","bedienbaar","navigeerbaar","operable","navigable","location"]},"sidebar":"richtlijnen","previous":{"title":"2.4.7 Focus zichtbaar","permalink":"/wcag/2.4.7"},"next":{"title":"WCAG-succescriterium 2.4.9 Linkdoel (alleen link)","permalink":"/wcag/2.4.9"}}');
   var r = i(86070),
    s = i(18439),
    a = i(24703),
    l = i(61473),
    o = i(93681),
    c = i(25431),
    d = i(88275),
    h = i(7047),
    g = i(29882);
   function p(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Laat gebruikers weten waar ze zich precies bevinden binnen een website.' }), '\n', (0, r.jsx)(n.p, { children: 'Dit is voor iedereen fijn, maar speciaal ook voor mensen met een cognitieve beperking. Ook bezoekers die via een zoekmachine en niet via de homepagina binnenkomen begrijpen dan waar ze zich bevinden.' }), '\n', (0, r.jsx)(n.p, { children: 'Dit kan via bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Een broodkruimelpad.' }), '\n', (0, r.jsx)(n.li, { children: 'Het aangeven van de huidige pagina in een menu.' }), '\n', (0, r.jsx)(n.li, { children: 'Een sitemap.' }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
   const j = { title: 'WCAG-succescriterium 2.4.8 Locatie', title_sm: 'WCAG 2.4.8: Locatie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.8 Locatie', pagination_label: '2.4.8 Locatie', description: 'Laat gebruikers weten waar ze zich precies bevinden binnen een website.', slug: '2.4.8', conformance_level: 'Niveau AAA', keywords: ['WCAG', 'AAA', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'location'] },
    m = void 0,
    v = {},
    w = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Opgelet', id: 'opgelet', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }];
   function x(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(l.E, { level: 1, conformanceLevel: 'Niveau AAA', children: 'WCAG-succescriterium 2.4.8 Locatie' }), '\n', (0, r.jsx)(o.K, { children: (0, r.jsx)(a.o, { omitH1: !0, headingLevel: 3, content: h.Ay }) }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(n.h2, { id: 'opgelet', children: 'Opgelet' }), '\n', (0, r.jsx)(n.p, { children: 'Deze inhoud wordt binnenkort aangevuld met uitgebreidere uitleg, bronnen en informatie over hoe te testen.' }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(c.Ay, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#location', children: (0, r.jsx)('span', { lang: 'en', children: '2.4.8 Location' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#location', children: '2.4.8 Locatie' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#location', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.8 Location' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/location.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.8 Location' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(o.K, { children: (0, r.jsx)(a.o, { omitH1: !0, headingLevel: 3, content: d.Ay }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(a.o, { omitH1: !0, headingLevel: 3, content: g.Ay })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
  },
  46276(e, n, i) {
   i.d(n, { p: () => s });
   var t = i(13526),
    r = i(86070);
   const s = ({ children: e, className: n, level: i = 1, suffix: s, ...a }) => (0, r.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...a, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  61473(e, n, i) {
   i.d(n, { E: () => a });
   var t = i(46447),
    r = i(46276),
    s = i(86070);
   const a = ({ children: e, conformanceLevel: n, ...i }) => (globalThis.isAstro ? null : (0, s.jsx)(r.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(t.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e }));
  },
  88275(e, n, i) {
   i.d(n, { Ay: () => a });
   var t = i(86070),
    r = i(18439);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  88547(e, n, i) {
   i.d(n, { L: () => a });
   var t = i(86070);
   function r(e) {
    var n,
     i,
     t = '';
    if ('string' == typeof e || 'number' == typeof e) t += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var s = e.length;
      for (n = 0; n < s; n++) e[n] && (i = r(e[n])) && (t && (t += ' '), (t += i));
     } else for (i in e) e[i] && (t && (t += ' '), (t += i));
    return t;
   }
   function s() {
    for (var e, n, i = 0, t = '', s = arguments.length; i < s; i++) (e = arguments[i]) && (n = r(e)) && (t && (t += ' '), (t += n));
    return t;
   }
   const a = (0, i(30758).forwardRef)(({ aside: e, children: n, className: i, purpose: r, ...a }, l) => {
    const o = { ...a, ref: l, className: s('utrecht-note', { [`utrecht-note--${r}`]: r }, i) };
    return e ? (0, t.jsx)('aside', { ...o, children: n }) : (0, t.jsx)('section', { role: 'note', ...o, children: n });
   });
   a.displayName = 'Note';
  },
  93681(e, n, i) {
   i.d(n, { K: () => s });
   var t = i(88547),
    r = i(29181);
   const s = globalThis.isAstro ? t.L : r.K7;
  },
 },
]);
