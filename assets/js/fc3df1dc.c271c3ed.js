'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [75960],
 {
  2254: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => p, default: () => w, frontMatter: () => u, metadata: () => j, toc: () => v });
   var r = i(52676),
    t = i(40139),
    s = i(57716),
    o = i(46364),
    l = i(28439),
    d = i(21339),
    a = i(92828),
    c = i(38391);
   function h(e) {
    const n = { p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Beweging mag niet storen.' });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const u = { title: 'WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.2.2 Pauzeren, stoppen, verbergen', pagination_label: 'WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen', description: 'Beweging mag niet storen.', slug: '2.2.2', keywords: ['WCAG', 'A', 'bedienbaar', 'genoeg tijd', 'operable', 'enough time', 'pause, stop, hide', 'non-interferentie'] },
    p = void 0,
    j = { id: 'wcag/2.2.02', title: 'WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen', description: 'Beweging mag niet storen.', source: '@site/docs/wcag/2.2.02.mdx', sourceDirName: 'wcag', slug: '/wcag/2.2.2', permalink: '/wcag/2.2.2', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.2.02.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.2.2 Pauzeren, stoppen, verbergen', pagination_label: 'WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen', description: 'Beweging mag niet storen.', slug: '2.2.2', keywords: ['WCAG', 'A', 'bedienbaar', 'genoeg tijd', 'operable', 'enough time', 'pause, stop, hide', 'non-interferentie'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.2.1 Timing aanpasbaar', permalink: '/wcag/2.2.1' }, next: { title: 'WCAG-succescriterium 2.2.3 Geen timing', permalink: '/wcag/2.2.3' } },
    m = {},
    v = [
     { value: 'In het kort', id: 'in-het-kort', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Tips', id: 'tips', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(o.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen' }), '\n', (0, r.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, r.jsxs)('dl', { children: [(0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Minder bezoekers worden afgeleid door inhoud die vernieuwt of beweegt.' })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Geef gebruikers controle over inhoud die verandert.' })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Mensen met cognitieve beperkingen kunnen afgeleid raken.' })] })] }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(g, {}), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Dit succescriterium kan een bezoeker verhinderen om een pagina te gebruiken. Het is niet mogelijk om een alternatief aan te bieden. Meer informatie hierover is te vinden op de W3-pagina ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#cc5', children: ' Conformiteitseis 5: Non-interferentie.' })] }), '\n', (0, r.jsx)(n.p, { children: 'Zorg ervoor dat gebruikers zich op de inhoud van de website kunnen concentreren. Ze mogen niet worden afgeleid door bewegingen of automatische vernieuwingen.' }), '\n', (0, r.jsx)(n.p, { children: 'Voorkom inhoud die vanzelf 5 seconden of langer beweegt of knippert. Anders moet de bezoeker deze kunnen pauzeren, stoppen of verbergen.\nVoor inhoud die automatisch vernieuwt geldt hetzelfde, tenzij de bezoeker zelf kan bepalen hoe vaak dat gebeurt.' }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Voor alle inhoud die vernieuwt of beweegt:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Controleer of deze niet automatisch start,' }), '\n', (0, r.jsx)(n.li, { children: 'Controleer of deze niet langer dan 5 seconden duurt,' }), '\n', (0, r.jsx)(n.li, { children: 'Controleer of deze te pauzeren, stoppen of verbergen is,' }), '\n', (0, r.jsx)(n.li, { children: 'Als de inhoud automatisch vernieuwt, controleer dan of de bezoeker zelf kan bepalen hoe vaak dat gebeurt.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Zorg dat er geen inhoud is automatisch verandert of beweegt. Zo voorkom je problemen met dit succescriterium en zoek je niet de grenzen op van wat bezoekers fijn vinden.' }), '\n', (0, r.jsxs)(n.li, { children: ['De CSS-functie ', (0, r.jsx)(n.code, { children: 'prefers-reduced-motion' }), ' is een manier om beweging te beperken. De veilige aanpak is om standaard geen beweging te tonen. Toon bewegende inhoud alleen aan mensen die expliciet een voorkeur hebben voor beweging.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(d.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#pause-stop-hide', children: (0, r.jsx)('span', { lang: 'en', children: '2.2.2 Pause, Stop, Hide' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#pause-stop-hide', children: '2.2.2 Pauzeren, stoppen, verbergen' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#pause-stop-hide', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 2.2.2 Pause, Stop, Hide' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.2.2 Pause, Stop, Hide' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(l.CY, { children: (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(a.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
  },
  21339: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  92828: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  38391: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => s });
   var r = i(4814),
    t = i(52676);
   const s = (e) => {
    let { children: n, className: i, level: s = 1, suffix: o, ...l } = e;
    return (0, t.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, i), ...l, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), o && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var r = i(40139),
    t = i(28439),
    s = i(52676);
   const o = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    l = { 1: {}, 2: { h1: t.XJ, h2: t.aC, h3: t.k8, h4: t.by, h5: t.Cd }, 3: { h1: t.aC, h2: t.k8, h3: t.by, h4: t.Cd, h5: t.Cd }, 4: { h1: t.k8, h2: t.by, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 5: { h1: t.by, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 6: { h1: t.Cd, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd } },
    d = (e) => ({
     img: (n) => {
      let { src: i, ...r } = n;
      return (0, s.jsx)('img', { ...r, src: o(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    a = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: t = 1, baseUrl: o = '', components: l = {} } = e;
     return (0, s.jsx)(r.Z, { components: { ...a(i, t), ...d(o), ...l }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => o });
   var r = i(28439),
    t = i(41757),
    s = i(52676);
   const o = (e) => {
    let { children: n, conformanceLevel: i, ...o } = e;
    return (0, s.jsx)(t.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, s.jsx)(r.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...o, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => o });
   var r = i(75271);
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
 },
]);
