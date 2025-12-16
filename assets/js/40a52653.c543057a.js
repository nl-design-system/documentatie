'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [96545],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => l });
   var r = i(68873),
    t = i(98584),
    s = i(86070);
   const l = ({ children: e, conformanceLevel: n, ...i }) => (0, s.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  30536: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function l(e) {
    const n = { p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De gebruiker moet de webpagina 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, r.jsx)(n.p, { children: 'Alle functies, zoals het menu, moeten werken en zichtbaar zijn. Alle tekst moet leesbaar zijn.' }), '\n', (0, r.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 pixels).' }), '\n', (0, r.jsx)(n.p, { children: "Zorg ervoor dat er geen horizontale scrollbar nodig is. Uitzonderingen zijn voor onderdelen die in essentie twee-dimensionaal zijn, zoals tabellen, grafieken, video's en landkaarten." }), '\n', (0, r.jsx)(n.p, { children: 'Definieer in de CSS een wijze om lange woorden af te breken en door te laten lopen op de volgende regel. Voorkom zo een horizontale scrollbar en onleesbare tekst.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
   var r = i(85248),
    t = i(68873),
    s = i(86070);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    o = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    a = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: l = {} }) => (0, s.jsx)(r.x, { components: { ...d(n, i), ...a(t), ...l }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  74180: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => j, contentTitle: () => p, default: () => v, frontMatter: () => u, metadata: () => r, toc: () => m });
   const r = JSON.parse('{"id":"wcag/1.4.10","title":"WCAG-succescriterium 1.4.10 Reflow","description":"De gebruiker moet de webpagina tot 400% kunnen vergroten in de browser. Dezelfde inhoud moet aanwezig zijn, en alles moet nog op eenzelfde manier werken.","source":"@site/docs/wcag/1.4.10.mdx","sourceDirName":"wcag","slug":"/wcag/1.4.10","permalink":"/wcag/1.4.10","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.4.10.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.4.10 Reflow","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.4.10 Reflow","pagination_label":"WCAG-succescriterium 1.4.10 Reflow","description":"De gebruiker moet de webpagina tot 400% kunnen vergroten in de browser. Dezelfde inhoud moet aanwezig zijn, en alles moet nog op eenzelfde manier werken.","slug":"1.4.10","keywords":["WCAG","AA","waarneembaar","onderscheidbaar","perceivable","distinguishable","reflow"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.4.9 Afbeeldingen van tekst (geen uitzondering)","permalink":"/wcag/1.4.9"},"next":{"title":"WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content","permalink":"/wcag/1.4.11"}}');
   var t = i(86070),
    s = i(85248),
    l = i(46563),
    o = i(19877),
    a = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(47219),
    g = i(30536);
   const u = { title: 'WCAG-succescriterium 1.4.10 Reflow', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.10 Reflow', pagination_label: 'WCAG-succescriterium 1.4.10 Reflow', description: 'De gebruiker moet de webpagina tot 400% kunnen vergroten in de browser. Dezelfde inhoud moet aanwezig zijn, en alles moet nog op eenzelfde manier werken.', slug: '1.4.10', keywords: ['WCAG', 'AA', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'reflow'] },
    p = void 0,
    j = {},
    m = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, ...g.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function w(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', ol: 'ol', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 1.4.10 Reflow' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(g.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Er zijn minimaal 2 manieren om tot 400% te vergroten en dit criterium te testen.' }), '\n', (0, t.jsxs)(n.ol, { children: ['\n', (0, t.jsx)(n.li, { children: 'Stel de schermbreedte van de browser op 1280 pixels breedte. Dit kan vaak via de developer tools. Zoom vervolgens in in de browser naar een percentage van 400%.' }), '\n', (0, t.jsx)(n.li, { children: 'Stel de schermbreedte van de browser in op 320 pixels breedte. Dit komt overeen met 1280 pixels en 4 maal vergroten.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Als de browser op 1 van deze 2 manieren ingesteld is, controleer dan het volgende:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Er mogen geen horizontale scrollbars zijn.' }), '\n', (0, t.jsx)(n.li, { children: 'Alle content moet bereikbaar en leesbaar zijn. Het hoeft niet meteen zichtbaar te zijn. Dit mag ook in accordions of andere uitklapbare delen zijn.' }), '\n', (0, t.jsx)(n.li, { children: 'Alle functionaliteit moet ook bereikbaar en bruikbaar zijn. Een ingeklapt menu is een voldoende alternatief voor een zichtbaar menu.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Er is een uitzondering voor content die voor het gebruik of de betekenis een tweedimensionale lay-out vereist. Denk hierbij aan bepaalde tabellen, kaarten en datavisualizaties die niet gesplitst en gescheiden kunnen worden. In die gevallen kunnen er lokaal scrollbars aanwezig zijn.' }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(d.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['\n', (0, t.jsxs)(n.p, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#reflow', children: (0, t.jsx)('span', { lang: 'en', children: '1.4.10 Reflow' }) }), '.'] }), '\n'] }), '\n', (0, t.jsxs)(n.li, { children: ['\n', (0, t.jsxs)(n.p, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#reflow', children: '1.4.10 Reflow' }), '.'] }), '\n'] }), '\n', (0, t.jsxs)(n.li, { children: ['\n', (0, t.jsxs)(n.p, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#reflow', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 1.4.10 Reflow' }) }), '.'] }), '\n'] }), '\n', (0, t.jsxs)(n.li, { children: ['\n', (0, t.jsxs)(n.p, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/reflow.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 1.4.10 Reflow' }) }), '.'] }), '\n', (0, t.jsx)(a.K7, { children: (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(w, { ...e }) }) : w(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => o });
   var r = i(30758);
   const t = {},
    s = r.createContext(t);
   function l(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => s });
   var r = i(13526),
    t = i(86070);
   const s = ({ children: e, className: n, level: i = 1, suffix: s, ...l }) => (0, t.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...l, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
