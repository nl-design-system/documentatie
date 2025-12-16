'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [52207],
 {
  1162: (e, n, r) => {
   r.d(n, { Ay: () => o, RM: () => s });
   var i = r(86070),
    t = r(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvulling-op-dit-wcag-aaa-succescriterium', children: 'Aanvulling op dit WCAG AAA Succescriterium' }) }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Belangrijk:' }), ' Het is volgens de Nederlandse wetgeving niet verplicht om aan dit AAA-succescriterium te voldoen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  19877: (e, n, r) => {
   r.d(n, { E: () => l });
   var i = r(68873),
    t = r(98584),
    s = r(86070);
   const l = ({ children: e, conformanceLevel: n, ...r }) => (0, s.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(i.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...r, children: e });
  },
  28890: (e, n, r) => {
   r.d(n, { Ay: () => o, RM: () => s });
   var i = r(86070),
    t = r(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, r) => {
   r.d(n, { o: () => d });
   var i = r(85248),
    t = r(68873),
    s = r(86070);
   const l = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: i, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return r + i + t;
     }
     return r.toString();
    },
    o = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    a = (e) => ({ img: ({ src: n, ...r }) => (0, s.jsx)('img', { ...r, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: r = 1, baseUrl: t = '', components: l = {} }) => (0, s.jsx)(i.x, { components: { ...c(n, r), ...a(t), ...l }, children: e });
  },
  47219: (e, n, r) => {
   r.d(n, { Ay: () => o, RM: () => s });
   var i = r(86070),
    t = r(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
  55635: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => j, contentTitle: () => v, default: () => w, frontMatter: () => p, metadata: () => i, toc: () => m });
   const i = JSON.parse('{"id":"wcag/3.3.06","title":"WCAG-succescriterium 3.3.6 Foutpreventie (alle)","description":"Wanneer een gebruiker een formulier invult zorg er dan voor dat gebruiker de ingevulde gegevens kan controleren en corrigeren.","source":"@site/docs/wcag/3.3.06.mdx","sourceDirName":"wcag","slug":"/wcag/3.3.6","permalink":"/wcag/3.3.6","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.3.06.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 3.3.6 Foutpreventie (alle)","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3.3.6 Foutpreventie (alle)","pagination_label":"WCAG-succescriterium 3.3.6 Foutpreventie (alle)","description":"Wanneer een gebruiker een formulier invult zorg er dan voor dat gebruiker de ingevulde gegevens kan controleren en corrigeren.","slug":"3.3.6","keywords":["WCAG","AAA","begrijpelijk","assistentie bij invoer","understandable","input assistance","error prevention (all)"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 3.3.5 Hulp","permalink":"/wcag/3.3.5"},"next":{"title":"WCAG-succescriterium 3.3.7 Overbodige invoer","permalink":"/wcag/3.3.7"}}');
   var t = r(86070),
    s = r(85248),
    l = r(46563),
    o = r(19877),
    a = r(68873),
    c = r(1162),
    d = r(28890),
    h = r(47219);
   function g(e) {
    const n = { a: 'a', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Wanneer een gebruiker een formulier invult zorg er dan voor dat gebruiker de ingevulde gegevens kan controleren en corrigeren.' }), '\n', (0, t.jsx)(n.p, { children: 'Bied ten minste \xe9\xe9n van de volgende opties aan:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: 'Omkeerbaar' }), ': Geef de gebruiker de mogelijkheid om de inzending of transactie terug te draaien.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: 'Gecontroleerd' }), ': Controleer tijdens het invullen de gegevens op invoerfouten en geef de gebruiker de mogelijkheid de gegevens te verbeteren.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.strong, { children: 'Bevestigd' }), ': Geef de gebruiker, voor inzending, de mogelijkheid om de ingevulde gegevens te beoordelen, te bevestigen en te verbeteren.'] }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Dit komt overeen met ', (0, t.jsx)(n.a, { href: '/wcag/3.3.4/', children: 'WCAG Succescriterium 3.3.4 Foutpreventie (wettelijk, financieel, gegevens)' }), ', maar nu geldt het voor alle formulieren.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
   const p = { title: 'WCAG-succescriterium 3.3.6 Foutpreventie (alle)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.3.6 Foutpreventie (alle)', pagination_label: 'WCAG-succescriterium 3.3.6 Foutpreventie (alle)', description: 'Wanneer een gebruiker een formulier invult zorg er dan voor dat gebruiker de ingevulde gegevens kan controleren en corrigeren.', slug: '3.3.6', keywords: ['WCAG', 'AAA', 'begrijpelijk', 'assistentie bij invoer', 'understandable', 'input assistance', 'error prevention (all)'] },
    v = void 0,
    j = {},
    m = [...c.RM, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...d.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function x(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AAA', children: 'WCAG-succescriterium 3.3.6 Foutpreventie (alle)' }), '\n', (0, t.jsx)(a.K7, { children: (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsxs)(n.p, { children: ['Informatie over bronnen, gebruikersonderzoek en hoe te testen kun je vinden op de pagina ', (0, t.jsx)(n.a, { href: '/wcag/3.3.4/', children: 'WCAG Succescriterium 3.3.4' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#error-prevention-all.', children: (0, t.jsx)('span', { lang: 'en', children: '3.3.6 Error Prevention (All)' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#error-prevention-all.', children: '3.3.6 Foutpreventie (alle)' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#error-prevention-all', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 3.3.6 Error Prevention (All)' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 3.3.6: Error Prevention (All)' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(a.K7, { children: (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(d.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
   }
  },
  85248: (e, n, r) => {
   r.d(n, { R: () => l, x: () => o });
   var i = r(30758);
   const t = {},
    s = i.createContext(t);
   function l(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, r) => {
   r.d(n, { p: () => s });
   var i = r(13526),
    t = r(86070);
   const s = ({ children: e, className: n, level: r = 1, suffix: s, ...l }) => (0, t.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${r}`, n), ...l, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
