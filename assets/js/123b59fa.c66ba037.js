'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [90316],
 {
  21971: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => j, contentTitle: () => g, default: () => k, frontMatter: () => p, metadata: () => m, toc: () => v });
   var r = i(52676),
    t = i(40139),
    s = i(57716),
    l = i(46364),
    o = i(16167),
    a = i(60256),
    d = i(99042),
    c = i(91114);
   function h(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Geluiden moet je kunnen pauzeren, stoppen of dempen.' }), '\n', (0, r.jsx)(n.p, { children: 'Speelt een pagina een geluid van meer dan 3 seconden? De bezoeker moet dit kunnen stoppen, pauzeren, of het volume kunnen regelen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Sommige mensen raken afgeleid door geluid. Geluiden van een webpagina kunnen ook de geluiden van ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' verstoren. Daardoor worden screenreaders onverstaanbaar en onbruikbaar.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const p = { title: 'WCAG-succescriterium 1.4.2 Geluidsbediening', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.2 Geluidsbediening', pagination_label: 'WCAG-succescriterium 1.4.2 Geluidsbediening', description: 'Geluiden moet je kunnen pauzeren, stoppen of dempen.', slug: '1.4.2', keywords: ['WCAG', 'A', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'audio control'] },
    g = void 0,
    m = { id: 'wcag/1.4.02', title: 'WCAG-succescriterium 1.4.2 Geluidsbediening', description: 'Geluiden moet je kunnen pauzeren, stoppen of dempen.', source: '@site/docs/wcag/1.4.02.mdx', sourceDirName: 'wcag', slug: '/wcag/1.4.2', permalink: '/wcag/1.4.2', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.4.02.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 1.4.2 Geluidsbediening', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.2 Geluidsbediening', pagination_label: 'WCAG-succescriterium 1.4.2 Geluidsbediening', description: 'Geluiden moet je kunnen pauzeren, stoppen of dempen.', slug: '1.4.2', keywords: ['WCAG', 'A', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'audio control'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.4.1 Gebruik van kleur', permalink: '/wcag/1.4.1' }, next: { title: 'WCAG-succescriterium 1.4.3 Contrast (minimum)', permalink: '/wcag/1.4.3' } },
    j = {},
    v = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Tips', id: 'tips', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function x(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 1.4.2 Geluidsbediening' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Dit succescriterium kan een bezoeker verhinderen om een pagina te gebruiken. Het is niet mogelijk om een alternatief aan te bieden. Meer informatie hierover is te vinden op de W3-pagina ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#cc5', children: ' Conformiteitseis 5: Non-interferentie.' })] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Zorg ervoor dat je geluid niet gedempt is.' }), '\n', (0, r.jsxs)(n.li, { children: ['Laad een pagina en luister. Voor elke geluid dat langer dan 3 seconden duurt, moet het volgende kloppen:', '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Het geluid is te pauzeren, stoppen of het volume is te veranderen.' }), '\n', (0, r.jsx)(n.li, { children: 'De manier om te pauzeren, stoppen of dempen is zelf toegankelijk.' }), '\n', (0, r.jsx)(n.li, { children: 'De verandering van volume is niet voor het algemene volume van het apparaat van de bezoeker.' }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Zorg dat geluiden niet automatisch afspelen. Dat voorkomt problemen met dit succescriterium en is gebruiksvriendelijker dan geluiden kunnen pauzeren, stoppen of dempen.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(a.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#audio-control', children: (0, r.jsx)('span', { lang: 'en', children: '1.4.2 Audio Control' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#audio-control', children: '1.4.2 Geluidsbediening' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-control', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 1.4.2 Audio Control' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 1.4.2 Audio Control' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(o.CY, { children: (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) })] });
   }
   function k(e = {}) {
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
    let { children: n, className: i, level: s = 1, suffix: l, ...o } = e;
    return (0, t.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, i), ...o, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
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
    o = { 1: {}, 2: { h1: t.XJ, h2: t.aC, h3: t.k8, h4: t.by, h5: t.Cd }, 3: { h1: t.aC, h2: t.k8, h3: t.by, h4: t.Cd, h5: t.Cd }, 4: { h1: t.k8, h2: t.by, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 5: { h1: t.by, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 6: { h1: t.Cd, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd } },
    a = (e) => ({
     img: (n) => {
      let { src: i, ...r } = n;
      return (0, s.jsx)('img', { ...r, src: l(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: t = 1, baseUrl: l = '', components: o = {} } = e;
     return (0, s.jsx)(r.Z, { components: { ...d(i, t), ...a(l), ...o }, children: n });
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
   i.d(n, { Z: () => o, a: () => l });
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
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
