'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [37389],
 {
  10645(e, n, t) {
   t.d(n, { p: () => s });
   var r = t(13526),
    i = t(86070);
   const s = ({ children: e, className: n, level: t = 1, suffix: s, ...o }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...o, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
  14433(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function o(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => l });
   var r = t(30758);
   const i = {},
    s = r.createContext(i);
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  34353(e, n, t) {
   (t.r(n), t.d(n, { assets: () => m, contentTitle: () => j, default: () => b, frontMatter: () => g, metadata: () => r, toc: () => p }));
   const r = JSON.parse('{"id":"wcag/2.1.02","title":"WCAG-succescriterium 2.1.2 Geen toetsenbordval","description":"Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.","source":"@site/docs/wcag/2.1.02.mdx","sourceDirName":"wcag","slug":"/wcag/2.1.2","permalink":"/wcag/2.1.2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.1.02.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.1.2 Geen toetsenbordval","title_sm":"2.1.2 Geen toetsenbordval","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.1.2 Geen toetsenbordval","pagination_label":"WCAG-succescriterium 2.1.2 Geen toetsenbordval","description":"Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.","slug":"2.1.2","conformance_level":"Niveau A","keywords":["WCAG","A","bedienbaar","toetsenbordtoegankelijk","operable","keyboard accessible","no keyboard trap"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 2.1.1 Toetsenbord","permalink":"/wcag/2.1.1"},"next":{"title":"WCAG-succescriterium 2.1.3 Toetsenbord (geen uitzondering)","permalink":"/wcag/2.1.3"}}');
   var i = t(86070),
    s = t(18439),
    o = t(51582),
    l = t(66820),
    a = t(95857),
    d = t(91170),
    c = t(14433),
    h = t(37026),
    u = t(50348);
   const g = { title: 'WCAG-succescriterium 2.1.2 Geen toetsenbordval', title_sm: '2.1.2 Geen toetsenbordval', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.1.2 Geen toetsenbordval', pagination_label: 'WCAG-succescriterium 2.1.2 Geen toetsenbordval', description: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.', slug: '2.1.2', conformance_level: 'Niveau A', keywords: ['WCAG', 'A', 'bedienbaar', 'toetsenbordtoegankelijk', 'operable', 'keyboard accessible', 'no keyboard trap'] },
    j = void 0,
    m = {},
    p = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, ...u.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function v(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(l.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.1.2 Geen toetsenbordval' }), '\n', (0, i.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, i.jsxs)('dl', { children: [(0, i.jsxs)('div', { class: 'dl__item', children: [(0, i.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, i.jsx)('dd', { class: 'dl__definition', children: 'Bezoekers die een toetsenbord gebruiken komen niet vast te zitten.' })] }), (0, i.jsxs)('div', { class: 'dl__item', children: [(0, i.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, i.jsx)('dd', { class: 'dl__definition', children: 'Zorg ervoor dat bezoekers altijd weg kunnen navigeren van onderdelen.' })] }), (0, i.jsxs)('div', { class: 'dl__item', children: [(0, i.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, i.jsx)('dd', { class: 'dl__definition', children: (0, i.jsx)(n.p, { children: 'Mensen die leunen op toetsenbordgebruik kunnen vaak niet op een andere manier navigeren.' }) })] })] }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(u.Ay, {}), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'WCAG-succescriterium 2.1.1 Toetsenbord' }), ' vereist dat alle interactieve onderdelen van een pagina, waar je acties mee uit kan voeren, te bedienen zijn met een toetsenbord. Dit succescriterium vereist dat de bezoeker een component niet alleen kan bereiken, maar ook verder of terug kan navigeren.'] }), '\n', (0, i.jsx)(n.p, { children: 'Als de focus niet te verplaatsen is met standaardtoetsen zoals escape-, pijltjes- of tabtoetsen, geef dan aan hoe het wel kan. Een onderdeel wat wel te bereiken is maar waar men niet meer weg kan, wordt ook toetsenbordval genoemd.' }), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Navigeer door de pagina met het toetsenbord zoals bij ', (0, i.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'WCAG-succescriterium 2.1.1 Toetsenbord' })] }), '\n', (0, i.jsx)(n.li, { children: 'Als je niet verder kan navigeren, controleer dan of er instructies zijn hoe dit wel kan.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Als je niet de hele pagina doorkan met standaardnavigatie \xe9n er zijn geen alternatieve instructies, dan faalt dit criterium.' }), '\n', (0, i.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Be\xefnvloed zo min mogelijk de focus van de gebruiker met JavaScript, het ', (0, i.jsx)(n.code, { children: 'autofocus' }), '-attribuut of het ', (0, i.jsx)(n.code, { children: 'tabindex' }), '-attribuut. Door er niet aan te komen kun je het ook niet slechter maken.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Toetsenbord: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Zorg dat het formulier werkt met een toetsenbord' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Toetsenbord: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/tabindex/', children: 'Gebruik geen positieve tabindex' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Formulieren - Wanneer gebruik je welk formulierelement: ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen/', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(d.Ay, {}), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#content-on-hover-or-focus', children: (0, i.jsx)('span', { lang: 'en', children: '2.1.2 No Keyboard Trap' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#content-on-hover-or-focus', children: '2.1.2 Geen toetsenbordval' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#content-on-hover-or-focus', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 2.1.2 No Keyboard Trap' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 2.1.2 No Keyboard Trap' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(a.K, { children: (0, i.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(c.Ay, {}) }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(h.Ay, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(v, { ...e }) }) : v(e);
   }
  },
  37026(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [];
   function o(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  50348(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [];
   function o(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  51582(e, n, t) {
   t.d(n, { o: () => c });
   var r = t(18439),
    i = t(46447),
    s = t(86070);
   const o = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    l = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    a = (e) => ({ img: ({ src: n, ...t }) => (0, s.jsx)('img', { ...t, src: o(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return l[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: i = '', components: o = {} }) => (0, s.jsx)(r.x, { components: { ...d(n, t), ...a(i), ...o }, children: e });
  },
  66820(e, n, t) {
   t.d(n, { E: () => o });
   var r = t(46447),
    i = t(10645),
    s = t(86070);
   const o = ({ children: e, conformanceLevel: n, ...t }) => (globalThis.isAstro ? null : (0, s.jsx)(i.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...t, children: e }));
  },
  91170(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => s });
   var r = t(86070),
    i = t(18439);
   const s = [];
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  95857(e, n, t) {
   t.d(n, { K: () => a });
   var r = t(86070);
   function i(e) {
    var n,
     t,
     r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var s = e.length;
      for (n = 0; n < s; n++) e[n] && (t = i(e[n])) && (r && (r += ' '), (r += t));
     } else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
   }
   function s() {
    for (var e, n, t = 0, r = '', s = arguments.length; t < s; t++) (e = arguments[t]) && (n = i(e)) && (r && (r += ' '), (r += n));
    return r;
   }
   const o = (0, t(30758).forwardRef)(({ aside: e, children: n, className: t, purpose: i, ...o }, l) => {
    const a = { ...o, ref: l, className: s('utrecht-note', { [`utrecht-note--${i}`]: i }, t) };
    return e ? (0, r.jsx)('aside', { ...a, children: n }) : (0, r.jsx)('section', { role: 'note', ...a, children: n });
   });
   o.displayName = 'Note';
   var l = t(29181);
   const a = globalThis.isAstro ? o : l.K7;
  },
 },
]);
