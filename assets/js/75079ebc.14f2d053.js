'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [34384],
 {
  74831: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => p, contentTitle: () => j, default: () => f, frontMatter: () => g, metadata: () => m, toc: () => v });
   var r = i(52676),
    t = i(40139),
    s = i(57716),
    l = i(46364),
    d = i(28439),
    o = i(21339),
    a = i(92828),
    c = i(38391);
   function h(e) {
    const n = { p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Zorg ervoor dat een gebruiker geen informatie dubbel hoeft in te vullen in een formulier.' });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'WCAG-succescriterium 3.3.7 Overbodige invoer', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.3.7 Overbodige invoer', pagination_label: 'WCAG-succescriterium 3.3.7 Overbodige invoer', description: 'Zorg ervoor dat een gebruiker geen informatie dubbel hoeft in te vullen in een formulier.', slug: '3.3.7', keywords: ['WCAG', 'A', 'begrijpelijk', 'assistentie bij invoer', 'understandable', 'input assistance', 'redundant entry'] },
    j = void 0,
    m = { id: 'wcag/3.3.07', title: 'WCAG-succescriterium 3.3.7 Overbodige invoer', description: 'Zorg ervoor dat een gebruiker geen informatie dubbel hoeft in te vullen in een formulier.', source: '@site/docs/wcag/3.3.07.mdx', sourceDirName: 'wcag', slug: '/wcag/3.3.7', permalink: '/wcag/3.3.7', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.3.07.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 3.3.7 Overbodige invoer', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.3.7 Overbodige invoer', pagination_label: 'WCAG-succescriterium 3.3.7 Overbodige invoer', description: 'Zorg ervoor dat een gebruiker geen informatie dubbel hoeft in te vullen in een formulier.', slug: '3.3.7', keywords: ['WCAG', 'A', 'begrijpelijk', 'assistentie bij invoer', 'understandable', 'input assistance', 'redundant entry'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 3.3.6 Foutpreventie (alle)', permalink: '/wcag/3.3.6' }, next: { title: 'WCAG-succescriterium 3.3.8 Toegankelijke authenticatie (minimum)', permalink: '/wcag/3.3.8' } },
    p = {},
    v = [
     { value: 'In het kort', id: 'in-het-kort', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnens', id: 'gerelateerde-nl-design-system-richtlijnens', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function x(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 3.3.7 Overbodige invoer' }), '\n', (0, r.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, r.jsxs)('dl', { children: [(0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, r.jsx)('dd', { class: 'dl__definition', children: (0, r.jsxs)(n.p, { children: ['Maak het gemakkelijker om een ', (0, r.jsx)('a', { href: '/woordenlijst/#proces', children: 'proces' }), ' van meerdere stappen te doorlopen.'] }) })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Vraag geen dubbele informatie in dezelfde sessie.' })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, r.jsx)('dd', { class: 'dl__definition', children: (0, r.jsx)(n.p, { children: 'Mensen met cognitieve beperkingen kunnen moeite hebben met het onthouden van eerdere invoer.' }) })] })] }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(n.p, { children: 'In een proces kan dezelfde informatie op meerdere momenten handig zijn. Informatie is soms eerder ingevoerd door de gebruiker, of eerder aangeboden aan de gebruiker. Als deze informatie opnieuw moet worden ingevoerd is:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'de informatie automatisch ingevuld, of' }), '\n', (0, r.jsx)(n.li, { children: 'beschikbaar voor de gebruiker om te selecteren.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Behalve wanneer:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'opnieuw invoeren van de informatie essentieel is (bijvoorbeeld bij een geheugenspelletje),' }), '\n', (0, r.jsx)(n.li, { children: 'de dubbele informatie nodig is om de veiligheid te waarborgen (zoals bevestiging van een wachtwoord), of' }), '\n', (0, r.jsx)(n.li, { children: 'eerder ingevoerde informatie niet langer geldig is.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Dit maakt het voor alle gebruikers makkelijker om gegevens door te geven, maar speciaal voor mensen die moeite hebben met lezen, typen of onthouden.' }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnens', children: 'Gerelateerde NL Design System-richtlijnens' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/vragen/', children: 'Uit te vragen informatie' })] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/', children: 'Meerdere stappen' })] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Controleer voor alle plekken waar gebruikers informatie in kunnen voeren.' }), '\n', (0, r.jsx)(n.p, { children: 'Is de informatie eerder ingevuld? Dan moet deze:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'automatisch worden ingevuld, of' }), '\n', (0, r.jsx)(n.li, { children: 'beschikbaar zijn voor de gebruiker om te selecteren.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Een browser die informatie in kan vullen is prettig (en soms essentieel: ', (0, r.jsx)(n.a, { href: '/wcag/1.3.5/', children: 'WCAG succescriterium 1.3.5 Identificeer het doel van de input' }), ') maar is niet voldoende voor goedkeuring van dit criterium.'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Het proces kan over meerdere domeinen verdeeld zijn.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(o.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#redundant-entry', children: (0, r.jsx)('span', { lang: 'en', children: '3.3.7 Redundant Entry' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#redundant-entry', children: '3.3.7 Overbodige invoer' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#redundant-entry', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 3.3.7 Redundant Entry' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 3.3.7 Redundant Entry' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(d.CY, { children: (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(a.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
  },
  21339: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  92828: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  38391: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => s });
   var r = i(4814),
    t = i(52676);
   const s = (e) => {
    let { children: n, className: i, level: s = 1, suffix: l, ...d } = e;
    return (0, t.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, i), ...d, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var r = i(40139),
    t = i(28439),
    s = i(52676);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    d = { 1: {}, 2: { h1: t.XJ, h2: t.aC, h3: t.k8, h4: t.by, h5: t.Cd }, 3: { h1: t.aC, h2: t.k8, h3: t.by, h4: t.Cd, h5: t.Cd }, 4: { h1: t.k8, h2: t.by, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 5: { h1: t.by, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 6: { h1: t.Cd, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd } },
    o = (e) => ({
     img: (n) => {
      let { src: i, ...r } = n;
      return (0, s.jsx)('img', { ...r, src: l(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    a = (e, n) => {
     if (e) {
      const e = { ...d[n - 1] };
      return (e.h1 = () => null), e;
     }
     return d[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: t = 1, baseUrl: l = '', components: d = {} } = e;
     return (0, s.jsx)(r.Z, { components: { ...a(i, t), ...o(l), ...d }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => l });
   var r = i(28439),
    t = i(41757),
    s = i(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: i, ...l } = e;
    return (0, s.jsx)(t.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, s.jsx)(r.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...l, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => d, a: () => l });
   var r = i(75271);
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
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
