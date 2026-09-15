'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [89886],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => l });
   var r = i(30758);
   const t = {},
    a = r.createContext(t);
   function s(e) {
    const n = r.useContext(a);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(a.Provider, { value: n }, e.children));
   }
  },
  24703(e, n, i) {
   i.d(n, { o: () => c });
   var r = i(18439),
    t = i(46447),
    a = i(86070);
   const s = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    l = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    o = (e) => ({ img: ({ src: n, ...i }) => (0, a.jsx)('img', { ...i, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: s = {} }) => (0, a.jsx)(r.x, { components: { ...d(n, i), ...o(t), ...s }, children: e });
  },
  25431(e, n, i) {
   i.d(n, { Ay: () => l, RM: () => a });
   var r = i(86070),
    t = i(18439);
   const a = [];
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  39512(e, n, i) {
   i.d(n, { Ay: () => l, RM: () => a });
   var r = i(86070),
    t = i(18439);
   const a = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  46276(e, n, i) {
   i.d(n, { p: () => a });
   var r = i(13526),
    t = i(86070);
   const a = ({ children: e, className: n, level: i = 1, suffix: a, ...s }) => (0, t.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...s, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), a && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
  },
  61473(e, n, i) {
   i.d(n, { E: () => s });
   var r = i(46447),
    t = i(46276),
    a = i(86070);
   const s = ({ children: e, conformanceLevel: n, ...i }) => (globalThis.isAstro ? null : (0, a.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, a.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e }));
  },
  66117(e, n, i) {
   i.d(n, { Ay: () => l, RM: () => a });
   var r = i(86070),
    t = i(18439);
   const a = [];
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  66119(e, n, i) {
   i.d(n, { K: () => o });
   var r = i(86070);
   function t(e) {
    var n,
     i,
     r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var a = e.length;
      for (n = 0; n < a; n++) e[n] && (i = t(e[n])) && (r && (r += ' '), (r += i));
     } else for (i in e) e[i] && (r && (r += ' '), (r += i));
    return r;
   }
   function a() {
    for (var e, n, i = 0, r = '', a = arguments.length; i < a; i++) (e = arguments[i]) && (n = t(e)) && (r && (r += ' '), (r += n));
    return r;
   }
   const s = (0, i(30758).forwardRef)(({ aside: e, children: n, className: i, purpose: t, ...s }, l) => {
    const o = { ...s, ref: l, className: a('utrecht-note', { [`utrecht-note--${t}`]: t }, i) };
    return e ? (0, r.jsx)('aside', { ...o, children: n }) : (0, r.jsx)('section', { role: 'note', ...o, children: n });
   });
   s.displayName = 'Note';
   var l = i(29181);
   const o = globalThis.isAstro ? s : l.K7;
  },
  90151(e, n, i) {
   (i.r(n), i.d(n, { assets: () => m, contentTitle: () => p, default: () => k, frontMatter: () => j, metadata: () => r, toc: () => v }));
   const r = JSON.parse('{"id":"wcag/2.5.02","title":"WCAG-succescriterium 2.5.2 Aanwijzerannulering","description":"Het annuleren van acties die je met een aanwijzer uitvoert is voorspelbaar.","source":"@site/docs/wcag/2.5.02.mdx","sourceDirName":"wcag","slug":"/wcag/2.5.2","permalink":"/wcag/2.5.2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.5.02.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.5.2 Aanwijzerannulering","title_sm":"2.5.2 Aanwijzerannulering","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.5.2 Aanwijzerannulering","pagination_label":"WCAG-succescriterium 2.5.2 Aanwijzerannulering","description":"Het annuleren van acties die je met een aanwijzer uitvoert is voorspelbaar.","slug":"2.5.2","conformance_level":"Niveau A","keywords":["WCAG","A","bedienbaar","input modaliteiten","operable","input modalities","pointer cancellation"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.5.1 Aanwijzergebaren","permalink":"/wcag/2.5.1"},"next":{"title":"WCAG-succescriterium 2.5.3 Label in Naam","permalink":"/wcag/2.5.3"}}');
   var t = i(86070),
    a = i(18439),
    s = i(24703),
    l = i(61473),
    o = i(66119),
    d = i(25431),
    c = i(39512),
    h = i(66117);
   function u(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Het annuleren van acties die je met een aanwijzer uitvoert is voorspelbaar.' });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const j = { title: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering', title_sm: '2.5.2 Aanwijzerannulering', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.5.2 Aanwijzerannulering', pagination_label: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering', description: 'Het annuleren van acties die je met een aanwijzer uitvoert is voorspelbaar.', slug: '2.5.2', conformance_level: 'Niveau A', keywords: ['WCAG', 'A', 'bedienbaar', 'input modaliteiten', 'operable', 'input modalities', 'pointer cancellation'] },
    p = void 0,
    m = {},
    v = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function w(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(l.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.5.2 Aanwijzerannulering' }), '\n', (0, t.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, t.jsxs)('dl', { children: [(0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Verminder acties die per ongeluk zijn.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Maak het annuleren van acties voorspelbaar en consistent.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, t.jsx)('dd', { class: 'dl__definition', children: (0, t.jsx)(n.p, { children: 'Maakt het voor iedereen gemakkelijker om een actie die per ongeluk was ongedaan te maken.' }) })] })] }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(g, {}), '\n', (0, t.jsxs)(n.p, { children: ['Voor alle acties die je kunt uitvoeren met een ', (0, t.jsx)(n.a, { href: '/woordenlijst/#aanwijzer', children: 'aanwijzer' }), ', moet \xe9\xe9n van de volgende dingen kloppen:'] }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'De actie wordt niet uitgevoerd door de start van de activering. Bijvoorbeeld: alleen de muisknop indrukken of het scherm aanraken mag nog geen actie uitvoeren.' }), '\n', (0, t.jsx)(n.li, { children: "De actie wordt pas uitgevoerd bij het afmaken van de activering. Daarnaast kan de actie afgebroken worden voor het afmaken, of erna ongedaan gemaakt worden. Bijvoorbeeld: je kunt iets verslepen, maar door het item weer los te laten buiten het doelgebied, verschuift het item weer naar zijn oorspronkelijke plek. Een andere optie om iets weer ongedaan te maken, is door bevestiging te vragen ('Weet u zeker dat...?') of door een knop toe te voegen waarmee de actie weer ongedaan gemaakt kan worden." }), '\n', (0, t.jsx)(n.li, { children: 'Het afmaken van de activering annuleert de actie aan de start. Bijvoorbeeld: als er iets verschijnt zodra een muisknop ingedrukt wordt, maar dit verdwijnt als de knop losgelaten wordt.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Voor alle acties die met een aanwijzer uit te voeren zijn, test of een van de volgende dingen klopt:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'De actie wordt niet uitgevoerd aan de start van de activering.' }), '\n', (0, t.jsx)(n.li, { children: 'De actie wordt pas gedaan bij het afmaken van de activering en kan afgebroken worden.' }), '\n', (0, t.jsx)(n.li, { children: 'De actie wordt pas gedaan bij het afmaken van de activering en kan erna ongedaan gemaakt worden.' }), '\n', (0, t.jsx)(n.li, { children: 'De actie wordt uitgevoerd bij de start van de activering, maar het einde annuleert deze weer.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Bij acties kun je aan veel interactieve onderdelen denken. Deze kunnen relatief simpel zijn, zoals links en buttons, maar ook ingewikkelder zoals sliders en patronen voor drag-and-drop.' }), '\n', (0, t.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, t.jsxs)(n.p, { children: ['Gebruik het ', (0, t.jsx)(n.code, { children: 'click' }), '-event. Dit is apparaatonafhankelijk.'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(d.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#pointer-cancellation', children: (0, t.jsx)('span', { lang: 'en', children: '2.5.2 Pointer Cancellation' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#pointer-cancellation', children: '2.5.2 Aanwijzerannulering' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#pointer-cancellation', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.5.2 Pointer Cancellation' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 2.5.2 Pointer Cancellation' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(o.K, { children: (0, t.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(w, { ...e }) }) : w(e);
   }
  },
 },
]);
