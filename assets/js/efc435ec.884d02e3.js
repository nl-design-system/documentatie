'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [16267],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => s });
   var r = i(68873),
    t = i(98584),
    o = i(86070);
   const s = ({ children: e, conformanceLevel: n, ...i }) => (0, o.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, o.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => o });
   var r = i(86070),
    t = i(85248);
   const o = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
   var r = i(85248),
    t = i(68873),
    o = i(86070);
   const s = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    a = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    d = (e) => ({ img: ({ src: n, ...i }) => (0, o.jsx)('img', { ...i, src: s(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    l = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: s = {} }) => (0, o.jsx)(r.x, { components: { ...l(n, i), ...d(t), ...s }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => o });
   var r = i(86070),
    t = i(85248);
   const o = [];
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => a, RM: () => o });
   var r = i(86070),
    t = i(85248);
   const o = [];
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  76771: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => j, contentTitle: () => m, default: () => x, frontMatter: () => g, metadata: () => r, toc: () => v });
   const r = JSON.parse('{"id":"wcag/1.2.03","title":"WCAG-succescriterium 1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)","description":"Opgenomen audio en video heeft een transcript of audiodescriptie.","source":"@site/docs/wcag/1.2.03.mdx","sourceDirName":"wcag","slug":"/wcag/1.2.3","permalink":"/wcag/1.2.3","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.2.03.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)","pagination_label":"WCAG-succescriterium 1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)","description":"Opgenomen audio en video heeft een transcript of audiodescriptie.","slug":"1.2.3","keywords":["WCAG","A","waarneembaar","op tijd gebaseerde media","perceivable","time-based media","audio description or media alternative (prerecorded)","audiodescriptie","media-alternatief","vooraf opgenomen","audio description","media alternative","prerecorded"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.2.2 Ondertitels voor doven en slechthorenden (vooraf opgenomen)","permalink":"/wcag/1.2.2"},"next":{"title":"WCAG-succescriterium 1.2.4 Ondertitels voor doven en slechthorenden (live)","permalink":"/wcag/1.2.4"}}');
   var t = i(86070),
    o = i(85248),
    s = i(46563),
    a = i(19877),
    d = i(68873),
    l = i(52105),
    c = i(28890),
    h = i(47219);
   function p(e) {
    const n = { a: 'a', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(n.p, { children: ['Opgenomen audio en video heeft een ', (0, t.jsx)(n.a, { href: '/woordenlijst/#transcript', children: 'transcript' }), ' of ', (0, t.jsx)(n.a, { href: '/woordenlijst/#audiodescriptie', children: 'audiodescriptie' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: 'Deel alle zichtbare informatie in een audiotrack of alle hoorbare informatie in een uitgeschreven tekst.' }), '\n', (0, t.jsx)(n.p, { children: 'Denk bij een de audiotrack aan de mensen die in beeld zijn, hun uiterlijke kenmerken en belangrijke gebeurtenissen zoals bewegingen. Maar denk ook aan teksten in beeld zoals namen, slogans en links.\nEr is een alternatief door deze informatie niet alleen via beeld te communiceren. Sommige mensen kunnen visuele inhoud niet zien of begrijpen.' }), '\n', (0, t.jsx)(n.p, { children: 'Denk bij een tekst aan gesproken dialoog. Maar denk ook aan omgevingsgeluiden en benoem wie er aan het woord is. Sommige mensen kunnen auditieve inhoud niet zien of begrijpen.\nIdealiter is ook alle zichtbare informatie in de tekst verwerkt. Zo is het een alternatief voor de hele video, en niet alleen het geluid.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(p, { ...e }) }) : p(e);
   }
   const g = { title: 'WCAG-succescriterium 1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)', pagination_label: 'WCAG-succescriterium 1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)', description: 'Opgenomen audio en video heeft een transcript of audiodescriptie.', slug: '1.2.3', keywords: ['WCAG', 'A', 'waarneembaar', 'op tijd gebaseerde media', 'perceivable', 'time-based media', 'audio description or media alternative (prerecorded)', 'audiodescriptie', 'media-alternatief', 'vooraf opgenomen', 'audio description', 'media alternative', 'prerecorded'] },
    m = void 0,
    j = {},
    v = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...l.RM, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function f(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(a.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsxs)(n.p, { children: ['Een uitgebreide uitleg van transcripts vind je in de richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/video/transcript/', children: 'Transcript bij video' }), '. Een uitgebreide uitleg van audiodescriptie vind je in de richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/video/audiodescriptie/', children: 'Audiodescriptie bij video' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Kijk of het geluid of beeld bij een video een gelijkwaardig alternatief heeft. Hierbij beoordelen we de originele audio, een eventuele losse audiotrack en een eventuele uitgeschreven tekst.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Content: ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/video/audiodescriptie/', children: 'Audiodescriptie bij video' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Content: ', (0, t.jsx)(n.a, { href: '/richtlijnen/content/video/transcript/', children: 'Transcript bij video' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(l.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#audio-description-or-media-alternative-prerecorded', children: (0, t.jsx)('span', { lang: 'en', children: '1.2.3 Audio Description or Media Alternative (Prerecorded)' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#audio-description-or-media-alternative-prerecorded', children: '1.2.3 Audiodescriptie of media-alternatief' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-description-or-media-alternative-prerecorded', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 1.2.3 Audio Description or Media Alternative (Prerecorded)' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 1.2.3 Audio Description or Media Alternative (Prerecorded)' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(d.K7, { children: (0, t.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(s.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => s, x: () => a });
   var r = i(30758);
   const t = {},
    o = r.createContext(t);
   function s(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(o.Provider, { value: n }, e.children);
   }
  },
  98584: (e, n, i) => {
   i.d(n, { p: () => o });
   var r = i(13526),
    t = i(86070);
   const o = ({ children: e, className: n, level: i = 1, suffix: o, ...s }) => (0, t.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...s, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
 },
]);
