'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [7308],
 {
  19877: (e, n, r) => {
   r.d(n, { E: () => o });
   var i = r(68873),
    t = r(98584),
    s = r(86070);
   const o = ({ children: e, conformanceLevel: n, ...r }) => (0, s.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(i.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...r, children: e });
  },
  28890: (e, n, r) => {
   r.d(n, { Ay: () => l, RM: () => s });
   var i = r(86070),
    t = r(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  46563: (e, n, r) => {
   r.d(n, { o: () => c });
   var i = r(85248),
    t = r(68873),
    s = r(86070);
   const o = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: i, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return r + i + t;
     }
     return r.toString();
    },
    l = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    a = (e) => ({ img: ({ src: n, ...r }) => (0, s.jsx)('img', { ...r, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: r = 1, baseUrl: t = '', components: o = {} }) => (0, s.jsx)(i.x, { components: { ...d(n, r), ...a(t), ...o }, children: e });
  },
  47219: (e, n, r) => {
   r.d(n, { Ay: () => l, RM: () => s });
   var i = r(86070),
    t = r(85248);
   const s = [];
   function o(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  52105: (e, n, r) => {
   r.d(n, { Ay: () => l, RM: () => s });
   var i = r(86070),
    t = r(85248);
   const s = [];
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, r) => {
   r.d(n, { R: () => o, x: () => l });
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
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
  89299: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => v, contentTitle: () => j, default: () => x, frontMatter: () => p, metadata: () => i, toc: () => b });
   const i = JSON.parse('{"id":"wcag/2.4.03","title":"WCAG-succescriterium 2.4.3 Focus volgorde","description":"Wanneer een toetsenbordgebruiker binnen de webpagina navigeert, bijvoorbeeld met de Tab-toets, moet de tabvolgorde logisch en voorspelbaar zijn.","source":"@site/docs/wcag/2.4.03.mdx","sourceDirName":"wcag","slug":"/wcag/2.4.3","permalink":"/wcag/2.4.3","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.03.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.4.3 Focus volgorde","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.4.3 Focus volgorde","pagination_label":"WCAG-succescriterium 2.4.3 Focus volgorde","description":"Wanneer een toetsenbordgebruiker binnen de webpagina navigeert, bijvoorbeeld met de Tab-toets, moet de tabvolgorde logisch en voorspelbaar zijn.","slug":"2.4.3","keywords":["WCAG","A","bedienbaar","navigeerbaar","operable","navigable","focus order"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.4.2 Paginatitel","permalink":"/wcag/2.4.2"},"next":{"title":"WCAG-succescriterium 2.4.4 Linkdoel (in context)","permalink":"/wcag/2.4.4"}}');
   var t = r(86070),
    s = r(85248),
    o = r(46563),
    l = r(19877),
    a = r(68873),
    d = r(52105),
    c = r(28890),
    h = r(47219);
   function g(e) {
    const n = { p: 'p', strong: 'strong', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Wanneer een toetsenbordgebruiker binnen de webpagina navigeert, bijvoorbeeld met de Tab-toets, moet de tabvolgorde logisch en voorspelbaar zijn.' }), '\n', (0, t.jsxs)(n.p, { children: ['De ', (0, t.jsx)(n.strong, { children: 'visuele' }), ' focusvolgorde moet betekenisvol zijn.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
   const p = { title: 'WCAG-succescriterium 2.4.3 Focus volgorde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.3 Focus volgorde', pagination_label: 'WCAG-succescriterium 2.4.3 Focus volgorde', description: 'Wanneer een toetsenbordgebruiker binnen de webpagina navigeert, bijvoorbeeld met de Tab-toets, moet de tabvolgorde logisch en voorspelbaar zijn.', slug: '2.4.3', keywords: ['WCAG', 'A', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'focus order'] },
    j = void 0,
    v = {},
    b = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function m(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(l.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.4.3 Focus volgorde' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(n.p, { children: 'Een voorspelbare focus volgorde is belangrijk voor toetsenbordgebruikers. Zij kunnen dan bijvoorbeeld makkelijker binnen een pagina links of buttons ontdekken of een formulier invullen.' }), '\n', (0, t.jsx)(n.p, { children: 'Zorg ervoor dat de natuurlijke tabvolgorde bij de verschillende resoluties, schermbreedtes en ori\xebntaties logisch blijft.' }), '\n', (0, t.jsx)(n.p, { children: "Met het tabindex attribuut kan de volgorde ook specifiek worden ingesteld per element, maar dat raden we af, omdat je dan voor elk element op de pagina zo'n tabindex zou moeten zetten, en het is bijna onmogelijk dat goed te doen, zeker bij verschillende resoluties, schermbreedtes en ori\xebntaties." }), '\n', (0, t.jsxs)(n.p, { children: ['Voor een Nederlandstalige website is leesvolgorde van links naar rechts en van boven naar beneden. Zorg er dan voor dat ook de tabvolgorde van links naar rechts en van boven naar beneden is. Voor bijvoorbeeld Hebreeuws of Arabisch kan deze volgorde anders zijn. Laat de tabvolgorde die van de taalinstelling en ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir', children: 'leesrichting' }), ' volgen.'] }), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/tabindex/', children: 'Gebruik geen positieve tabindex' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming/', children: 'Zorg voor een consistente navigatie en benaming van links en buttons' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(d.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Tab met het toetsenbord door de pagina en controleer of de tabvolgorde logisch en zoals verwacht is.\nDe tabvolgorde moet voor elk type weergave logisch, zichtbaar en voorspelbaar zijn en niet alleen voor een breed scherm op hoge resolutie.' }), '\n', (0, t.jsx)(n.p, { children: 'Let vooral op als de volgorde voor een andere weergave wordt aangepast via CSS met grid of flexbox.' }), '\n', (0, t.jsx)(n.p, { children: 'Aanvullende testen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Tab ook terug met shift-tab, werkt dat ook voorspelbaar?' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer dialogs zoals het responsive menu. Is de tabvolgorde logisch. Keert bij het sluiten de focus terug naar de button om het dialog te openen?' }), '\n', (0, t.jsx)(n.li, { children: 'Test bij verschillende schermbreedtes en ori\xebntaties (landscape/portrait).' }), '\n', (0, t.jsx)(n.li, { children: 'Zoom in tot 400% en check de tabvolgorde.' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer dynamisch toegevoegde inhoud, zoals extra formuliervelden bij het selecteren van optie of een uitklapmenu.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, t.jsxs)('dl', { children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Focus en autonomie' }), (0, t.jsx)('dd', { class: 'dl__definition', children: (0, t.jsx)(n.p, { children: 'Verplaats de focus van de gebruiker zo min mogelijk. Het is geen prettige ervaring om "verplaatst te worden" op een\nwebsite.' }) })] }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#focus-order', children: (0, t.jsx)('span', { lang: 'en', children: '2.4.3 Focus Order' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#focus-order', children: '2.4.3 Focus volgorde' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-order', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.3 Focus Order' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.3 Focus Order' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(a.K7, { children: (0, t.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
   }
  },
  98584: (e, n, r) => {
   r.d(n, { p: () => s });
   var i = r(13526),
    t = r(86070);
   const s = ({ children: e, className: n, level: r = 1, suffix: s, ...o }) => (0, t.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${r}`, n), ...o, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
