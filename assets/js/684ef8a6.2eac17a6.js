'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [67208],
 {
  51074: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => p, contentTitle: () => g, default: () => b, frontMatter: () => j, metadata: () => m, toc: () => v });
   var r = i(52676),
    t = i(40139),
    s = i(57716),
    l = i(46364),
    a = i(16167),
    o = i(60256),
    d = i(99042),
    c = i(91114);
   function h(e) {
    const n = { p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Geef invoervelden een label of uitleg.' });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const j = { title: 'WCAG-succescriterium 3.3.2 Labels of instructies', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.3.2 Labels of instructies', pagination_label: 'WCAG-succescriterium 3.3.2 Labels of instructies', description: 'Geef invoervelden een label of uitleg.', slug: '3.3.2', keywords: ['WCAG', 'A', 'begrijpelijk', 'assistentie bij invoer', 'invoer', 'uitleg', 'understandable', 'input assistance', 'labels or instructions'] },
    g = void 0,
    m = { id: 'wcag/3.3.02', title: 'WCAG-succescriterium 3.3.2 Labels of instructies', description: 'Geef invoervelden een label of uitleg.', source: '@site/docs/wcag/3.3.02.mdx', sourceDirName: 'wcag', slug: '/wcag/3.3.2', permalink: '/wcag/3.3.2', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.3.02.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 3.3.2 Labels of instructies', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.3.2 Labels of instructies', pagination_label: 'WCAG-succescriterium 3.3.2 Labels of instructies', description: 'Geef invoervelden een label of uitleg.', slug: '3.3.2', keywords: ['WCAG', 'A', 'begrijpelijk', 'assistentie bij invoer', 'invoer', 'uitleg', 'understandable', 'input assistance', 'labels or instructions'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 3.3.1 Foutidentificatie', permalink: '/wcag/3.3.1' }, next: { title: 'WCAG-succescriterium 3.3.3 Foutsuggestie', permalink: '/wcag/3.3.3' } },
    p = {},
    v = [
     { value: 'In het kort', id: 'in-het-kort', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 },
     { value: 'Fout: Labels en/of uitleg zijn niet verbonden aan de invoer.', id: 'fout-labels-enof-uitleg-zijn-niet-verbonden-aan-de-invoer', level: 3 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 3.3.2 Labels of instructies' }), '\n', (0, r.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, r.jsxs)('dl', { children: [(0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Gebruikers weten wat ze in moeten voeren.' })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Geef een label of uitleg bij invoer.' })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Iedereen, vooral mensen met cognitieve beperkingen, weet waar men aan toe is.' })] })] }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(n.p, { children: 'Als er ergens invoer nodig is, is het voor iedereen prettig om te weten wat er verwacht wordt. Labels en uitleg helpen daarbij. Een label betekent in deze context dat er iets zichtbaar is, zoals tekst of een icoon, waardoor je als bezoeker weet wat het doel is. Denk aan:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Voornaam' }), '\n', (0, r.jsx)(n.li, { children: 'Plaatsnaam' }), '\n', (0, r.jsx)(n.li, { children: 'Wachtwoord' }), '\n', (0, r.jsx)(n.li, { children: 'Telefoonnummer' }), '\n', (0, r.jsx)(n.li, { children: 'Een vergrootglas-icoon bij een zoekfunctie' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Het label moet voor iedereen duidelijk genoeg zijn.' }), '\n', (0, r.jsx)(n.p, { children: 'Een uitleg (een instructie) vertelt meer over wat er verwacht wordt van de invoer, zoals de manier van spellen of schrijven. Denk aan:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'een nieuw wachtwoord dat lang genoeg moet zijn' }), '\n', (0, r.jsx)(n.li, { children: 'wel of geen spatie tussen de letters en cijfers van een postcode' }), '\n', (0, r.jsx)(n.li, { children: 'de manier waarop een datum geschreven moet worden' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Als de invoer aan bepaalde eisen moet voldoen, is het een goed idee om een uitleg toe te voegen.' }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsx)(n.p, { children: 'Dit succescriterium past bij bijna alle richtlijnen rond formulieren.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Richtlijnen voor formulieren' }) }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/', children: 'Richtlijnen voor labels in een formulier' })] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Zoek de invoervelden en formulieren.' }), '\n', (0, r.jsx)(n.li, { children: 'Controleer van elk veld of er een beschrijvend label of behulpzame uitleg bij is.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: '##Tips' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Het behalen van dit criterium kan onder andere ook helpen bij ', (0, r.jsx)(n.a, { href: '/wcag/2.4.6', children: '2.4.6 Koppen en labels' }), ' en ', (0, r.jsx)(n.a, { href: '/wcag/4.1.2', children: '4.1.2 Naam, rol, waarde' }), '.'] }), '\n', (0, r.jsx)(n.li, { children: 'Zorg voor zowel labels als uitleg om fouten te voorkomen.' }), '\n', (0, r.jsx)(n.li, { children: 'Als een nieuw wachtwoord aan bepaalde eisen moet voldoen, maak die dan meteen zichtbaar.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, r.jsx)(n.h3, { id: 'fout-labels-enof-uitleg-zijn-niet-verbonden-aan-de-invoer', children: 'Fout: Labels en/of uitleg zijn niet verbonden aan de invoer.' }), '\n', (0, r.jsxs)(n.p, { children: ['Voor ', (0, r.jsx)(n.a, { href: '/wcag/1.3.1', children: '1.3.1 Info en relaties' }), ' is het belangrijk dat labels en uitleg niet alleen aanwezig zijn, maar ook in de code aan elkaar verbonden zijn. De relatie die je ziet moet ook in de code aanwezig zijn. Dit kan met het ', (0, r.jsx)(n.code, { children: '<label>' }), '-element, maar ook met ', (0, r.jsx)(n.code, { children: 'aria-labelledby' }), '. Foutmeldingen kun je ook koppelen aan het invoerveld. Dit kan met ', (0, r.jsx)(n.code, { children: 'aria-describedby' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(o.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#labels-or-instructions', children: (0, r.jsx)('span', { lang: 'en', children: '3.3.2 Labels or Instructions' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#koppen-en-labels', children: '3.3.2 Labels of instructies' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 3.3.2 Labels or Instructions' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 3.3.2 Labels or Instructions' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(a.CY, { children: (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
  },
  60256: (e, n, i) => {
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
  99042: (e, n, i) => {
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
  91114: (e, n, i) => {
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
    let { children: n, className: i, level: s = 1, suffix: l, ...a } = e;
    return (0, t.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, i), ...a, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var r = i(40139),
    t = i(16167),
    s = i(52676);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    a = { 1: {}, 2: { h1: t.XJ, h2: t.aC, h3: t.k8, h4: t.by, h5: t.Cd }, 3: { h1: t.aC, h2: t.k8, h3: t.by, h4: t.Cd, h5: t.Cd }, 4: { h1: t.k8, h2: t.by, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 5: { h1: t.by, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 6: { h1: t.Cd, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd } },
    o = (e) => ({
     img: (n) => {
      let { src: i, ...r } = n;
      return (0, s.jsx)('img', { ...r, src: l(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: t = 1, baseUrl: l = '', components: a = {} } = e;
     return (0, s.jsx)(r.Z, { components: { ...d(i, t), ...o(l), ...a }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => l });
   var r = i(16167),
    t = i(41757),
    s = i(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: i, ...l } = e;
    return (0, s.jsx)(t.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, s.jsx)(r.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...l, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => l });
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
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
