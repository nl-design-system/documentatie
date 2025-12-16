'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [52107],
 {
  1162: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function o(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvulling-op-dit-wcag-aaa-succescriterium', children: 'Aanvulling op dit WCAG AAA Succescriterium' }) }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Belangrijk:' }), ' Het is volgens de Nederlandse wetgeving niet verplicht om aan dit AAA-succescriterium te voldoen.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
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
  83858: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => v, contentTitle: () => m, default: () => k, frontMatter: () => j, metadata: () => r, toc: () => w });
   const r = JSON.parse('{"id":"wcag/1.4.07","title":"WCAG-succescriterium 1.4.7 Weinig of geen achtergrondgeluid","description":"Zorg ervoor dat opgenomen en uitgesproken tekst te verstaan is en niet gehinderd wordt door achtergrondgeluid.","source":"@site/docs/wcag/1.4.07.mdx","sourceDirName":"wcag","slug":"/wcag/1.4.7","permalink":"/wcag/1.4.7","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.4.07.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.4.7 Weinig of geen achtergrondgeluid","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.4.7 Weinig of geen achtergrondgeluid","pagination_label":"WCAG-succescriterium 1.4.7 Weinig of geen achtergrondgeluid","description":"Zorg ervoor dat opgenomen en uitgesproken tekst te verstaan is en niet gehinderd wordt door achtergrondgeluid.","slug":"1.4.7","keywords":["WCAG","AAA","waarneembaar","onderscheidbaar","perceivable","distinguishable","low or no background audio"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.4.6 Contrast (versterkt)","permalink":"/wcag/1.4.6"},"next":{"title":"WCAG-succescriterium 1.4.8 Visuele presentatie","permalink":"/wcag/1.4.8"}}');
   var t = i(86070),
    s = i(85248),
    o = i(46563),
    l = i(19877),
    a = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(1162),
    g = i(47219);
   function u(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Zorg ervoor dat opgenomen en uitgesproken tekst te verstaan is en niet gehinderd wordt door achtergrondgeluid.\nSlechthorende luisteraars kunnen last hebben gesproken tekst te onderscheiden van te harde achtergrondgeluiden of muziek.' }), '\n', (0, t.jsx)(n.p, { children: 'Oplossingen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Voeg geen achtergrondgeluiden of muziek toe.' }), '\n', (0, t.jsx)(n.li, { children: 'Zorg bij de opname dat er weinig achtergrondgeluid te horen is, neem bijvoorbeeld een interview niet af in een drukke fabriekshal.' }), '\n', (0, t.jsx)(n.li, { children: 'Zorg ervoor dat de luisteraar achtergrondgeluiden kan uitzetten.' }), '\n', (0, t.jsx)(n.li, { children: 'Zorg ervoor dat de achtergrondgeluiden ten minste 20 decibel zachter zijn dan de uitgesproken tekst.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: "Er is natuurlijk een uitzondering voor (rap)muziek waarin gesproken wordt door de muziek heen. En ook voor audio-CAPTCHA's waar het geluid expres lastig te verstaan gemaakt wordt. En als het geluid incidenteel is en niet langer dan een of twee seconden duurt." })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const j = { title: 'WCAG-succescriterium 1.4.7 Weinig of geen achtergrondgeluid', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.7 Weinig of geen achtergrondgeluid', pagination_label: 'WCAG-succescriterium 1.4.7 Weinig of geen achtergrondgeluid', description: 'Zorg ervoor dat opgenomen en uitgesproken tekst te verstaan is en niet gehinderd wordt door achtergrondgeluid.', slug: '1.4.7', keywords: ['WCAG', 'AAA', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'low or no background audio'] },
    m = void 0,
    v = {},
    w = [...h.RM, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Opgelet', id: 'opgelet', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...g.RM];
   function x(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(l.E, { level: 1, conformanceLevel: 'Niveau AAA', children: 'WCAG-succescriterium 1.4.7 Weinig of geen achtergrondgeluid' }), '\n', (0, t.jsx)(a.K7, { children: (0, t.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(p, {}), '\n', (0, t.jsx)(n.h2, { id: 'opgelet', children: 'Opgelet' }), '\n', (0, t.jsx)(n.p, { children: 'Deze inhoud wordt binnenkort aangevuld met uitgebreidere uitleg, bronnen en informatie over hoe te testen.' }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(d.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#low-or-no-background-audio', children: (0, t.jsx)('span', { lang: 'en', children: '1.4.7 Low or No Background Audio' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#low-or-no-background-audio', children: '1.4.7 Weinig of geen achtergrondgeluid' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#low-or-no-background-audio', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 1.4.7 Low or No Background Audio' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 1.4.7 Low or No Background Audio' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(a.K7, { children: (0, t.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(o.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(g.Ay, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
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
  98584: (e, n, i) => {
   i.d(n, { p: () => s });
   var r = i(13526),
    t = i(86070);
   const s = ({ children: e, className: n, level: i = 1, suffix: s, ...o }) => (0, t.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...o, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
