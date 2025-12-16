'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [19678],
 {
  1162: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'aanvulling-op-dit-wcag-aaa-succescriterium', children: 'Aanvulling op dit WCAG AAA Succescriterium' }) }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Belangrijk:' }), ' Het is volgens de Nederlandse wetgeving niet verplicht om aan dit AAA-succescriterium te voldoen.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  19877: (e, n, i) => {
   i.d(n, { E: () => l });
   var t = i(68873),
    r = i(98584),
    s = i(86070);
   const l = ({ children: e, conformanceLevel: n, ...i }) => (0, s.jsx)(r.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(t.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
   var t = i(85248),
    r = i(68873),
    s = i(86070);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    o = { 1: {}, 2: { h1: r.fV, h2: r._B, h3: r.f_, h4: r.mM, h5: r.TT }, 3: { h1: r._B, h2: r.f_, h3: r.mM, h4: r.TT, h5: r.TT }, 4: { h1: r.f_, h2: r.mM, h3: r.TT, h4: r.TT, h5: r.TT }, 5: { h1: r.mM, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT }, 6: { h1: r.TT, h2: r.TT, h3: r.TT, h4: r.TT, h5: r.TT } },
    a = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: r = '', components: l = {} }) => (0, s.jsx)(t.x, { components: { ...d(n, i), ...a(r), ...l }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  71165: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => j, default: () => w, frontMatter: () => v, metadata: () => t, toc: () => x });
   const t = JSON.parse('{"id":"wcag/1.2.09","title":"WCAG-succescriterium 1.2.9 Louter-geluid (live)","description":"Maak bij een live audio-opname de inhoud ook als uitgeschreven tekst beschikbaar, als live ondertitels of vooraf als tekstdocument.","source":"@site/docs/wcag/1.2.09.mdx","sourceDirName":"wcag","slug":"/wcag/1.2.9","permalink":"/wcag/1.2.9","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.2.09.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.2.9 Louter-geluid (live)","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.2.9 Louter-geluid (live)","pagination_label":"WCAG-succescriterium 1.2.9 Louter-geluid (live)","description":"Maak bij een live audio-opname de inhoud ook als uitgeschreven tekst beschikbaar, als live ondertitels of vooraf als tekstdocument.","slug":"1.2.9","keywords":["WCAG","AAA","waarneembaar","op tijd gebaseerde media","perceivable","time-based media","audio-only (live)","audio-only","live"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.2.8 Media-alternatief (vooraf opgenomen)","permalink":"/wcag/1.2.8"},"next":{"title":"WCAG-succescriterium 1.3.1 Info en relaties","permalink":"/wcag/1.3.1"}}');
   var r = i(86070),
    s = i(85248),
    l = i(46563),
    o = i(19877),
    a = i(68873),
    d = i(52105),
    c = i(28890),
    h = i(1162),
    u = i(47219);
   function g(e) {
    const n = { li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Voeg bij een live audio-opname de inhoud ook als uitgeschreven tekst toe. Bijvoorbeeld bij een live podcast, de audio-opname van een theatervoorstelling of een radio-uitzending.' }), '\n', (0, r.jsx)(n.p, { children: 'Bied tekst op de website aan via bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Live ondertiteling (', (0, r.jsx)('span', { lang: 'en', children: 'live captioning' }), ').'] }), '\n', (0, r.jsx)(n.li, { children: 'Het vooraf publiceren van de precies zo uitgesproken tekst.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Uitgeschreven tekst van de inhoud van de live-uitzending helpt gebruikers die slechthorend, doof of doofblind zijn de uitgesproken tekst te volgen.' }), '\n', (0, r.jsx)(n.p, { children: 'Het is belangrijk dat deze tekst op een website komt te staan. Dan hebben doofblinde gebruikers gemakkelijk toegang tot deze inhoud omdat zij de inhoud kunnen lezen met een brailleregel.' })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
   const v = { title: 'WCAG-succescriterium 1.2.9 Louter-geluid (live)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.2.9 Louter-geluid (live)', pagination_label: 'WCAG-succescriterium 1.2.9 Louter-geluid (live)', description: 'Maak bij een live audio-opname de inhoud ook als uitgeschreven tekst beschikbaar, als live ondertitels of vooraf als tekstdocument.', slug: '1.2.9', keywords: ['WCAG', 'AAA', 'waarneembaar', 'op tijd gebaseerde media', 'perceivable', 'time-based media', 'audio-only (live)', 'audio-only', 'live'] },
    j = void 0,
    m = {},
    x = [...h.RM, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Opgelet', id: 'opgelet', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...d.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...u.RM];
   function k(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AAA', children: 'WCAG-succescriterium 1.2.9 Louter-geluid (live)' }), '\n', (0, r.jsx)(a.K7, { children: (0, r.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(h.Ay, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(n.h2, { id: 'opgelet', children: 'Opgelet' }), '\n', (0, r.jsx)(n.p, { children: 'Deze inhoud wordt binnenkort aangevuld met uitgebreidere uitleg, bronnen en informatie over hoe te testen.' }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(d.Ay, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#audio-only-live', children: (0, r.jsx)('span', { lang: 'en', children: '1.2.9 Audio-only (live)' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#audio-only-live', children: '1.2.9 Louter-geluid (live)' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-only-live', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 1.2.9 Audio-only (live)' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 1.2.9 Audio-only (live)' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(a.K7, { children: (0, r.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.Ay, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(u.Ay, {}) })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => o });
   var t = i(30758);
   const r = {},
    s = t.createContext(r);
   function l(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => s });
   var t = i(13526),
    r = i(86070);
   const s = ({ children: e, className: n, level: i = 1, suffix: s, ...l }) => (0, r.jsxs)('hgroup', { className: (0, t.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...l, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
