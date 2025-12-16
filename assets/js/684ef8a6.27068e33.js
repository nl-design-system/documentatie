'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [56339],
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
  46563: (e, n, i) => {
   i.d(n, { o: () => d });
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
    c = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: l = {} }) => (0, s.jsx)(r.x, { components: { ...c(n, i), ...a(t), ...l }, children: e });
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
  76542: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => p, contentTitle: () => m, default: () => f, frontMatter: () => g, metadata: () => r, toc: () => v });
   const r = JSON.parse('{"id":"wcag/3.3.02","title":"WCAG-succescriterium 3.3.2 Labels of instructies","description":"Geef invoervelden een label of uitleg.","source":"@site/docs/wcag/3.3.02.mdx","sourceDirName":"wcag","slug":"/wcag/3.3.2","permalink":"/wcag/3.3.2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.3.02.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 3.3.2 Labels of instructies","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3.3.2 Labels of instructies","pagination_label":"WCAG-succescriterium 3.3.2 Labels of instructies","description":"Geef invoervelden een label of uitleg.","slug":"3.3.2","keywords":["WCAG","A","begrijpelijk","assistentie bij invoer","invoer","uitleg","understandable","input assistance","labels or instructions"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 3.3.1 Foutidentificatie","permalink":"/wcag/3.3.1"},"next":{"title":"WCAG-succescriterium 3.3.3 Foutsuggestie","permalink":"/wcag/3.3.3"}}');
   var t = i(86070),
    s = i(85248),
    l = i(46563),
    o = i(19877),
    a = i(68873),
    c = i(52105),
    d = i(28890),
    h = i(47219);
   function u(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Geef invoervelden een label of uitleg.' });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const g = { title: 'WCAG-succescriterium 3.3.2 Labels of instructies', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.3.2 Labels of instructies', pagination_label: 'WCAG-succescriterium 3.3.2 Labels of instructies', description: 'Geef invoervelden een label of uitleg.', slug: '3.3.2', keywords: ['WCAG', 'A', 'begrijpelijk', 'assistentie bij invoer', 'invoer', 'uitleg', 'understandable', 'input assistance', 'labels or instructions'] },
    m = void 0,
    p = {},
    v = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 }, { value: 'Fout: Labels en/of uitleg zijn niet verbonden aan de invoer.', id: 'fout-labels-enof-uitleg-zijn-niet-verbonden-aan-de-invoer', level: 3 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...d.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 3.3.2 Labels of instructies' }), '\n', (0, t.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, t.jsxs)('dl', { children: [(0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Gebruikers weten wat ze in moeten voeren.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Geef een label of uitleg bij invoer.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Iedereen, vooral mensen met cognitieve beperkingen, weet waar men aan toe is.' })] })] }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(j, {}), '\n', (0, t.jsx)(n.p, { children: 'Als er ergens invoer nodig is, is het voor iedereen prettig om te weten wat er verwacht wordt. Labels en uitleg helpen daarbij. Een label betekent in deze context dat er iets zichtbaar is, zoals tekst of een icoon, waardoor je als bezoeker weet wat het doel is. Denk aan:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Voornaam' }), '\n', (0, t.jsx)(n.li, { children: 'Plaatsnaam' }), '\n', (0, t.jsx)(n.li, { children: 'Wachtwoord' }), '\n', (0, t.jsx)(n.li, { children: 'Telefoonnummer' }), '\n', (0, t.jsx)(n.li, { children: 'Een vergrootglas-icoon bij een zoekfunctie' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Het label moet voor iedereen duidelijk genoeg zijn.' }), '\n', (0, t.jsx)(n.p, { children: 'Een uitleg (een instructie) vertelt meer over wat er verwacht wordt van de invoer, zoals de manier van spellen of schrijven. Denk aan:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'een nieuw wachtwoord dat lang genoeg moet zijn' }), '\n', (0, t.jsx)(n.li, { children: 'wel of geen spatie tussen de letters en cijfers van een postcode' }), '\n', (0, t.jsx)(n.li, { children: 'de manier waarop een datum geschreven moet worden' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Als de invoer aan bepaalde eisen moet voldoen, is het een goed idee om een uitleg toe te voegen.' }), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, t.jsx)(n.p, { children: 'Dit succescriterium past bij bijna alle richtlijnen rond formulieren.' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/', children: 'Richtlijnen voor formulieren' }) }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/', children: 'Richtlijnen voor labels in een formulier' })] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Zoek de invoervelden en formulieren.' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer van elk veld of er een beschrijvend label of behulpzame uitleg bij is.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: '##Tips' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Het behalen van dit criterium kan onder andere ook helpen bij ', (0, t.jsx)(n.a, { href: '/wcag/2.4.6/', children: '2.4.6 Koppen en labels' }), ' en ', (0, t.jsx)(n.a, { href: '/wcag/4.1.2/', children: '4.1.2 Naam, rol, waarde' }), '.'] }), '\n', (0, t.jsx)(n.li, { children: 'Zorg voor zowel labels als uitleg om fouten te voorkomen.' }), '\n', (0, t.jsx)(n.li, { children: 'Als een nieuw wachtwoord aan bepaalde eisen moet voldoen, maak die dan meteen zichtbaar.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, t.jsx)(n.h3, { id: 'fout-labels-enof-uitleg-zijn-niet-verbonden-aan-de-invoer', children: 'Fout: Labels en/of uitleg zijn niet verbonden aan de invoer.' }), '\n', (0, t.jsxs)(n.p, { children: ['Voor ', (0, t.jsx)(n.a, { href: '/wcag/1.3.1/', children: '1.3.1 Info en relaties' }), ' is het belangrijk dat labels en uitleg niet alleen aanwezig zijn, maar ook in de code aan elkaar verbonden zijn. De relatie die je ziet moet ook in de code aanwezig zijn. Dit kan met het ', (0, t.jsx)(n.code, { children: '<label>' }), '-element, maar ook met ', (0, t.jsx)(n.code, { children: 'aria-labelledby' }), '. Foutmeldingen kun je ook koppelen aan het invoerveld. Dit kan met ', (0, t.jsx)(n.code, { children: 'aria-describedby' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(c.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#labels-or-instructions', children: (0, t.jsx)('span', { lang: 'en', children: '3.3.2 Labels or Instructions' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#labels-or-instructions', children: '3.3.2 Labels of instructies' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 3.3.2 Labels or Instructions' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 3.3.2 Labels or Instructions' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(a.K7, { children: (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(d.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
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
