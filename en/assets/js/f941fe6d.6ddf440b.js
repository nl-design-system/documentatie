'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [16110],
 {
  11971: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => j, contentTitle: () => p, default: () => x, frontMatter: () => g, metadata: () => m, toc: () => f });
   var t = i(52676),
    r = i(24785),
    o = i(57716),
    s = i(71595),
    a = i(46506),
    l = i(45054),
    c = i(52057),
    d = i(78836);
   function h(e) {
    const n = { p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.p, { children: 'Verras een gebruiker niet als die een interactief element focus geeft. Maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, t.jsx)(n.p, { children: 'Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.' }), '\n', (0, t.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'WCAG-succescriterium 3.2.1 Bij focus', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.2.1 Bij focus', pagination_label: 'WCAG-succescriterium 3.2.1 Bij focus', description: 'Maak functionaliteit voorspelbaar en daardoor goed te begrijpen. Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.', slug: '3.2.1', keywords: ['WCAG'] },
    p = void 0,
    m = { id: 'wcag/3.2.01', title: 'WCAG-succescriterium 3.2.1 Bij focus', description: 'Maak functionaliteit voorspelbaar en daardoor goed te begrijpen. Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.', source: '@site/docs/wcag/3.2.01.mdx', sourceDirName: 'wcag', slug: '/wcag/3.2.1', permalink: '/en/wcag/3.2.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.2.01.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 3.2.1 Bij focus', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.2.1 Bij focus', pagination_label: 'WCAG-succescriterium 3.2.1 Bij focus', description: 'Maak functionaliteit voorspelbaar en daardoor goed te begrijpen. Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.', slug: '3.2.1', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 3.1.6 Uitspraak', permalink: '/en/wcag/3.1.6' }, next: { title: 'WCAG-succescriterium 3.2.2 Bij input', permalink: '/en/wcag/3.2.2' } },
    j = {},
    f = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function v(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(s.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 3.2.1 Bij focus' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Let op' }), ': Als er onverwacht een dialog opent met bijvoorbeeld een advertentie of oproep om je aan te melden voor de nieuwsbrief, valt dit niet onder dit succescriterium. Dit omdat het openen niet het gevolg is van een actie van de gebruiker, maar door de website zelf wordt gestart.'] }), '\n', (0, t.jsx)(n.p, { children: 'Ook een onverwachte actie wanneer een gebruiker met de muis over een element gaat, valt niet onder dit succescriterium. Bijvoorbeeld door het openen van een modal als een gebruiker alleen over een button hovert en het geen focus geeft.' }), '\n', (0, t.jsx)(n.p, { children: "Onverwacht gedrag door de website zelf of muisbeweging valt strict genomen niet onder dit WCAG-succescriterium. We raden wel aan om ook in die gevallen onverwacht gedrag te vermijden, in lijn met de intentie van WCAG-richtlijn 3.2 Voorspelbaar: 'Maak het uiterlijk en de bediening van webpagina's voorspelbaar'." }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(l.ZP, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Bepaal eerst of er interactieve elementen op de pagina zijn, zoals formuliervelden, buttons of links. En dan:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Tab met het toetsenbord door elk interactief element, geef ook aanwezige radiobuttons en select-opties toetsenbordfocus.' }), '\n', (0, t.jsx)(n.li, { children: 'Klik met de muis interactieve elementen aan, ook aanwezige select-opties.' }), '\n', (0, t.jsx)(n.li, { children: 'Test of er geen onverwachte dingen gebeuren zoals het verzenden van het formulier, het verplaatsen van de focus of het openen van een nieuw venster of tab.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#on-focus', children: (0, t.jsx)('span', { lang: 'en', children: '3.2.1 On focus' }) })] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#bij-focus', children: '3.2.2 Bij focus' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#on-focus', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 3.2.1 On Focus' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 3.2.1: On Input' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(a.CY, { children: (0, t.jsx)(o.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.ZP, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(o.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(d.ZP, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(v, { ...e }) }) : v(e);
   }
  },
  45054: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var t = i(52676),
    r = i(24785);
   function o(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  52057: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var t = i(52676),
    r = i(24785);
   function o(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'aanvulling-op-wcag', children: 'Aanvulling op WCAG' }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.strong, { children: 'Belangrijk:' }), ' De richtlijnen van NL Design System zijn niet verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  78836: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var t = i(52676),
    r = i(24785);
   function o(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  72657: (e, n, i) => {
   i.d(n, { V: () => s });
   var t = i(4814);
   i(75271);
   const r = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var o = i(52676);
   const s = (e) => {
    let { children: n, className: i, level: s = 1, suffix: a, ...l } = e;
    return (0, o.jsxs)('hgroup', { className: (0, t.Z)(r['nlds-inline-heading-group'], `utrecht-heading-${s}`, i), ...l, children: [(0, o.jsx)('h1', { className: (0, t.Z)(r['nlds-inline-heading-group__heading']), children: n }), a && (0, o.jsxs)('p', { className: (0, t.Z)(r['nlds-inline-heading-group__suffix']), children: [a ? ' ' : '', a] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => d });
   var t = i(24785),
    r = i(46506),
    o = (i(75271), i(52676));
   const s = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + r;
     }
     return i.toString();
    },
    a = { 1: {}, 2: { h1: r.XJ, h2: r.aC, h3: r.k8, h4: r.by, h5: r.Cd }, 3: { h1: r.aC, h2: r.k8, h3: r.by, h4: r.Cd, h5: r.Cd }, 4: { h1: r.k8, h2: r.by, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 5: { h1: r.by, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 6: { h1: r.Cd, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd } },
    l = (e) => ({
     img: (n) => {
      let { src: i, ...t } = n;
      return (0, o.jsx)('img', { ...t, src: s(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    c = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    d = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: r = 1, baseUrl: s = '' } = e;
     return (0, o.jsx)(t.Z, { components: { ...c(i, r), ...l(s) }, children: n });
    };
  },
  71595: (e, n, i) => {
   i.d(n, { j: () => l });
   var t = i(46506),
    r = (i(75271), i(72657));
   const o = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    s = 'nlds-inline-heading-group__badge_TgvT';
   var a = i(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: i, ...l } = e;
    return (0, a.jsx)(r.V, { className: o, suffix: i && (0, a.jsx)(t.Ou, { className: s, children: i }), ...l, children: n });
   };
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => s });
   var t = i(75271);
   const r = {},
    o = t.createContext(r);
   function s(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
