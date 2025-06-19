'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [49159],
 {
  43170: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => g, default: () => k, frontMatter: () => u, metadata: () => j, toc: () => v });
   var r = t(52676),
    i = t(40139),
    s = t(57716),
    a = t(46364),
    l = t(16167),
    o = t(60256),
    d = t(99042),
    c = t(91114);
   function h(e) {
    const n = { code: 'code', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg dat de browser (en andere software, zoals een password manager) kan begrijpen wat een gebruiker moet invoeren, zodat die kan helpen en het invoeren makkelijker kan maken.' }), '\n', (0, r.jsxs)(n.p, { children: ['Dit kan door gebruik te maken van het HTML-attribuut ', (0, r.jsx)(n.code, { children: 'autocomplete' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const u = { title: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.5 Identificeer het doel van de input', pagination_label: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', description: 'Zorg dat de browser kan begrijpen wat een gebruiker moet invoeren, zodat die kan helpen en het makkelijker kan maken.', slug: '1.3.5', keywords: ['WCAG', 'AA', 'waarneembaar', 'aanpasbaar', 'perceivable', 'adaptable', 'identify input purpose'] },
    g = void 0,
    j = { id: 'wcag/1.3.05', title: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', description: 'Zorg dat de browser kan begrijpen wat een gebruiker moet invoeren, zodat die kan helpen en het makkelijker kan maken.', source: '@site/docs/wcag/1.3.05.mdx', sourceDirName: 'wcag', slug: '/wcag/1.3.5', permalink: '/wcag/1.3.5', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.3.05.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.3.5 Identificeer het doel van de input', pagination_label: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input', description: 'Zorg dat de browser kan begrijpen wat een gebruiker moet invoeren, zodat die kan helpen en het makkelijker kan maken.', slug: '1.3.5', keywords: ['WCAG', 'AA', 'waarneembaar', 'aanpasbaar', 'perceivable', 'adaptable', 'identify input purpose'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.3.4 Weergavestand', permalink: '/wcag/1.3.4' }, next: { title: 'WCAG-succescriterium 1.3.6 Identificeer het doel', permalink: '/wcag/1.3.6' } },
    m = {},
    v = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijn', id: 'gerelateerde-nl-design-system-richtlijn', level: 2 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function w(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(a.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 1.3.5 Identificeer het doel van de input' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(p, {}), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijn', children: 'Gerelateerde NL Design System-richtlijn' }), '\n', (0, r.jsxs)(n.p, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/autocomplete', children: 'Autocomplete in een formulier' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['WCAG bevat een volledige lijst van ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#input-purposes', children: 'waarden voor autocomplete' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Jules Ernst van 200 OK heeft van deze lijst een ', (0, r.jsx)(n.a, { href: 'https://www.200ok.nl/tips/autocomplete/', children: 'Nederlandse interpretatie van autocomplete' }), 'gemaakt.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(o.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: 'https://www.deque.com/axe/browser-extensions/', children: 'Axe DevTools' }), ' kan controleren op ongeldige waarden (typefouten) voor autocomplete.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Inspecteer daarna in de gegenereerde HTML-code van de webpagina de invoervelden, bijvoorbeeld met een ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Controleer of de invoervelden van formulieren een autocomplete-attribuut hebben met een juiste waarde.' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op:' }), ' dit geldt alleen voor invoervelden waarin persoonlijke gegevens worden uitgevraagd en niet voor bijvoorbeeld een formulier om op de website te zoeken.'] }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#identify-input-purpose', children: (0, r.jsx)('span', { lang: 'en', children: '1.3.5 Identify Input Purpose' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#niet-tekstuele-content', children: '1.3.5 Identificeer het doel van de input' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#identify-input-purpose', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 1.3.5 Identify Input Purpose' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 1.3.5 Identify Input Purpose' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(l.CY, { children: (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(w, { ...e }) }) : w(e);
   }
  },
  60256: (e, n, t) => {
   t.d(n, { ZP: () => a });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  99042: (e, n, t) => {
   t.d(n, { ZP: () => a });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  91114: (e, n, t) => {
   t.d(n, { ZP: () => a });
   var r = t(52676),
    i = t(40139);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, t) => {
   t.d(n, { V: () => s });
   var r = t(4814),
    i = t(52676);
   const s = (e) => {
    let { children: n, className: t, level: s = 1, suffix: a, ...l } = e;
    return (0, i.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, t), ...l, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), a && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
   };
  },
  57716: (e, n, t) => {
   t.d(n, { U: () => c });
   var r = t(40139),
    i = t(16167),
    s = t(52676);
   const a = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    l = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    o = (e) => ({
     img: (n) => {
      let { src: t, ...r } = n;
      return (0, s.jsx)('img', { ...r, src: a(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    c = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: i = 1, baseUrl: a = '', components: l = {} } = e;
     return (0, s.jsx)(r.Z, { components: { ...d(t, i), ...o(a), ...l }, children: n });
    };
  },
  46364: (e, n, t) => {
   t.d(n, { j: () => a });
   var r = t(16167),
    i = t(41757),
    s = t(52676);
   const a = (e) => {
    let { children: n, conformanceLevel: t, ...a } = e;
    return (0, s.jsx)(i.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: t && (0, s.jsx)(r.Ou, { className: 'nlds-inline-heading-group__badge', children: t }), ...a, children: n });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => l, a: () => a });
   var r = t(75271);
   const i = {},
    s = r.createContext(i);
   function a(e) {
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
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
