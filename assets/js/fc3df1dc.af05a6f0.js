'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [15067],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => o });
   var r = i(68873),
    t = i(98584),
    s = i(86070);
   const o = ({ children: e, conformanceLevel: n, ...i }) => (0, s.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
   var r = i(85248),
    t = i(68873),
    s = i(86070);
   const o = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    l = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    a = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: o = {} }) => (0, s.jsx)(r.x, { components: { ...d(n, i), ...a(t), ...o }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function o(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => o, x: () => l });
   var r = i(30758);
   const t = {},
    s = r.createContext(t);
   function o(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
  92968: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => j, default: () => f, frontMatter: () => p, metadata: () => r, toc: () => v });
   const r = JSON.parse('{"id":"wcag/2.2.02","title":"WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen","description":"Beweging mag niet storen.","source":"@site/docs/wcag/2.2.02.mdx","sourceDirName":"wcag","slug":"/wcag/2.2.2","permalink":"/wcag/2.2.2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.2.02.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.2.2 Pauzeren, stoppen, verbergen","pagination_label":"WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen","description":"Beweging mag niet storen.","slug":"2.2.2","keywords":["WCAG","A","bedienbaar","genoeg tijd","operable","enough time","pause, stop, hide","non-interferentie"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.2.1 Timing aanpasbaar","permalink":"/wcag/2.2.1"},"next":{"title":"WCAG-succescriterium 2.2.3 Geen timing","permalink":"/wcag/2.2.3"}}');
   var t = i(86070),
    s = i(85248),
    o = i(46563),
    l = i(19877),
    a = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(47219);
   function g(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Beweging mag niet storen.' });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
   const p = { title: 'WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.2.2 Pauzeren, stoppen, verbergen', pagination_label: 'WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen', description: 'Beweging mag niet storen.', slug: '2.2.2', keywords: ['WCAG', 'A', 'bedienbaar', 'genoeg tijd', 'operable', 'enough time', 'pause, stop, hide', 'non-interferentie'] },
    j = void 0,
    m = {},
    v = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(l.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen' }), '\n', (0, t.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, t.jsxs)('dl', { children: [(0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Minder bezoekers worden afgeleid door inhoud die vernieuwt of beweegt.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Geef gebruikers controle over inhoud die verandert.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Mensen met cognitieve beperkingen kunnen afgeleid raken.' })] })] }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': Dit succescriterium kan een bezoeker verhinderen om een pagina te gebruiken. Het is niet mogelijk om een alternatief aan te bieden. Meer informatie hierover is te vinden op de W3-pagina ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#cc5', children: ' Conformiteitseis 5: Non-interferentie.' })] }), '\n', (0, t.jsx)(n.p, { children: 'Zorg ervoor dat gebruikers zich op de inhoud van de website kunnen concentreren. Ze mogen niet worden afgeleid door bewegingen of automatische vernieuwingen.' }), '\n', (0, t.jsx)(n.p, { children: 'Voorkom inhoud die vanzelf 5 seconden of langer beweegt of knippert. Anders moet de bezoeker deze kunnen pauzeren, stoppen of verbergen.\nVoor inhoud die automatisch vernieuwt geldt hetzelfde, tenzij de bezoeker zelf kan bepalen hoe vaak dat gebeurt.' }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Voor alle inhoud die vernieuwt of beweegt:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Controleer of deze niet automatisch start,' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer of deze niet langer dan 5 seconden duurt,' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer of deze te pauzeren, stoppen of verbergen is,' }), '\n', (0, t.jsx)(n.li, { children: 'Als de inhoud automatisch vernieuwt, controleer dan of de bezoeker zelf kan bepalen hoe vaak dat gebeurt.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Zorg dat er geen inhoud is automatisch verandert of beweegt. Zo voorkom je problemen met dit succescriterium en zoek je niet de grenzen op van wat bezoekers fijn vinden.' }), '\n', (0, t.jsxs)(n.li, { children: ['De CSS-functie ', (0, t.jsx)(n.code, { children: 'prefers-reduced-motion' }), ' is een manier om beweging te beperken. De veilige aanpak is om standaard geen beweging te tonen. Toon bewegende inhoud alleen aan mensen die expliciet een voorkeur hebben voor beweging.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(d.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#pause-stop-hide', children: (0, t.jsx)('span', { lang: 'en', children: '2.2.2 Pause, Stop, Hide' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#pause-stop-hide', children: '2.2.2 Pauzeren, stoppen, verbergen' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#pause-stop-hide', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.2.2 Pause, Stop, Hide' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 2.2.2 Pause, Stop, Hide' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(a.K7, { children: (0, t.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => s });
   var r = i(13526),
    t = i(86070);
   const s = ({ children: e, className: n, level: i = 1, suffix: s, ...o }) => (0, t.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...o, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
