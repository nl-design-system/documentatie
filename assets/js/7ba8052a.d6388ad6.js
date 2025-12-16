'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84677],
 {
  1162: (e, n, r) => {
   r.d(n, { Ay: () => o, RM: () => a });
   var i = r(86070),
    t = r(85248);
   const a = [];
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvulling-op-dit-wcag-aaa-succescriterium', children: 'Aanvulling op dit WCAG AAA Succescriterium' }) }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Belangrijk:' }), ' Het is volgens de Nederlandse wetgeving niet verplicht om aan dit AAA-succescriterium te voldoen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  19877: (e, n, r) => {
   r.d(n, { E: () => s });
   var i = r(68873),
    t = r(98584),
    a = r(86070);
   const s = ({ children: e, conformanceLevel: n, ...r }) => (0, a.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, a.jsx)(i.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...r, children: e });
  },
  28890: (e, n, r) => {
   r.d(n, { Ay: () => o, RM: () => a });
   var i = r(86070),
    t = r(85248);
   const a = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  46563: (e, n, r) => {
   r.d(n, { o: () => d });
   var i = r(85248),
    t = r(68873),
    a = r(86070);
   const s = (e, n) => {
     const r = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === r.protocol) {
      const { pathname: r, search: i, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return r + i + t;
     }
     return r.toString();
    },
    o = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    l = (e) => ({ img: ({ src: n, ...r }) => (0, a.jsx)('img', { ...r, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    c = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    d = ({ children: e, omitH1: n = !1, headingLevel: r = 1, baseUrl: t = '', components: s = {} }) => (0, a.jsx)(i.x, { components: { ...c(n, r), ...l(t), ...s }, children: e });
  },
  47219: (e, n, r) => {
   r.d(n, { Ay: () => o, RM: () => a });
   var i = r(86070),
    t = r(85248);
   const a = [];
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  52105: (e, n, r) => {
   r.d(n, { Ay: () => o, RM: () => a });
   var i = r(86070),
    t = r(85248);
   const a = [];
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  56399: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => v, contentTitle: () => j, default: () => f, frontMatter: () => m, metadata: () => i, toc: () => x });
   const i = JSON.parse('{"id":"wcag/1.2.06","title":"WCAG-succescriterium 1.2.6 Gebarentaal (vooraf opgenomen)","description":"Voeg gebarentaal toe aan een vooraf opgenomen video met gesproken woord.","source":"@site/docs/wcag/1.2.06.mdx","sourceDirName":"wcag","slug":"/wcag/1.2.6","permalink":"/wcag/1.2.6","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.2.06.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.2.6 Gebarentaal (vooraf opgenomen)","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.2.6 Gebarentaal (vooraf opgenomen)","pagination_label":"WCAG-succescriterium 1.2.6 Gebarentaal (vooraf opgenomen)","description":"Voeg gebarentaal toe aan een vooraf opgenomen video met gesproken woord.","slug":"1.2.6","keywords":["WCAG","AAA","waarneembaar","op tijd gebaseerde media","perceivable","time-based media","sign languange (prerecorded)","sign language","prerecorded","gebarentaal","vooraf opgenomen"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.2.5 Audiodescriptie (vooraf opgenomen)","permalink":"/wcag/1.2.5"},"next":{"title":"WCAG-succescriterium 1.2.7 Verlengde audiodescriptie (vooraf opgenomen)","permalink":"/wcag/1.2.7"}}');
   var t = r(86070),
    a = r(85248),
    s = r(46563),
    o = r(19877),
    l = r(68873),
    c = r(52105),
    d = r(28890),
    g = r(1162),
    h = r(47219);
   function p(e) {
    const n = { p: 'p', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Voeg gebarentaal toe aan een vooraf opgenomen video met gesproken woord.' }), '\n', (0, t.jsx)(n.p, { children: 'Gebarentaal is voor dove gebruikers vaak hun eerste taal en daardoor makkelijker te volgen dan uitgeschreven ondertiteling. Daarnaast kan de gebarentolk ook de emotie en intonatie van de teksten overbrengen, die ontbreekt bij ondertiteling.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   const m = { title: 'WCAG-succescriterium 1.2.6 Gebarentaal (vooraf opgenomen)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.2.6 Gebarentaal (vooraf opgenomen)', pagination_label: 'WCAG-succescriterium 1.2.6 Gebarentaal (vooraf opgenomen)', description: 'Voeg gebarentaal toe aan een vooraf opgenomen video met gesproken woord.', slug: '1.2.6', keywords: ['WCAG', 'AAA', 'waarneembaar', 'op tijd gebaseerde media', 'perceivable', 'time-based media', 'sign languange (prerecorded)', 'sign language', 'prerecorded', 'gebarentaal', 'vooraf opgenomen'] },
    j = void 0,
    v = {},
    x = [...g.RM, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Opgelet', id: 'opgelet', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...d.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function w(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AAA', children: 'WCAG-succescriterium 1.2.6 Gebarentaal (vooraf opgenomen)' }), '\n', (0, t.jsx)(l.K7, { children: (0, t.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(g.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(n.h2, { id: 'opgelet', children: 'Opgelet' }), '\n', (0, t.jsx)(n.p, { children: 'Deze inhoud wordt binnenkort aangevuld met uitgebreidere uitleg, bronnen en informatie over hoe te testen.' }), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Content: ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/video/gebarentaal/', children: 'Video met gebarentaal' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(c.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#sign-language-prerecorded', children: (0, t.jsx)('span', { lang: 'en', children: '1.2.6 Sign Language (Prerecorded)' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#sign-language-prerecorded', children: '1.2.6 Gebarentaal (vooraf opgenomen)' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#sign-language-prerecorded', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 1.2.6 Sign Language (Prerecorded)' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 1.2.6 Sign Language (Prerecorded)' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(l.K7, { children: (0, t.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(d.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(w, { ...e }) }) : w(e);
   }
  },
  85248: (e, n, r) => {
   r.d(n, { R: () => s, x: () => o });
   var i = r(30758);
   const t = {},
    a = i.createContext(t);
   function s(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), i.createElement(a.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, r) => {
   r.d(n, { p: () => a });
   var i = r(13526),
    t = r(86070);
   const a = ({ children: e, className: n, level: r = 1, suffix: a, ...s }) => (0, t.jsxs)('hgroup', { className: (0, i.A)('nlds-inline-heading-group', `utrecht-heading-${r}`, n), ...s, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), a && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
  },
 },
]);
