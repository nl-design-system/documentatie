'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [77410],
 {
  61747: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => j, default: () => k, frontMatter: () => u, metadata: () => p, toc: () => v });
   var i = t(52676),
    r = t(40139),
    s = t(57716),
    l = t(46364),
    a = t(16167),
    c = t(60256),
    o = t(99042),
    d = t(91114);
   function h(e) {
    const n = { p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Tekst moet twee keer zo groot kunnen zijn.' }), '\n', (0, i.jsx)(n.p, { children: 'Een bezoeker moet tekst groter kunnen maken, tot wel twee keer zo groot. De pagina hoeft deze vergroting niet voor de bezoeker uit te voeren. Er hoeven bijvoorbeeld geen knoppen te zijn om mee te vergroten of verkleinen. De pagina moet ruimte bieden dat de bezoeker dit zelf kan doen. Groter maken moet niet tegengehouden worden, en de inhoud en werking van de pagina moet gelijk blijven.' }), '\n', (0, i.jsx)(n.p, { children: 'Dit geldt alleen voor losse teksten en niet voor ondertitels of afbeeldingen van tekst.' }), '\n', (0, i.jsx)(n.p, { children: 'Sommige mensen kunnen tekst alleen lezen als deze groter is.' })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e);
   }
   const u = { title: 'WCAG-succescriterium 1.4.4 Herschalen van tekst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.4 Herschalen van tekst', pagination_label: 'WCAG-succescriterium 1.4.4 Herschalen van tekst', description: 'Tekst moet twee keer zo groot kunnen zijn.', slug: '1.4.4', keywords: ['WCAG', 'AA', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'resize text'] },
    j = void 0,
    p = { id: 'wcag/1.4.04', title: 'WCAG-succescriterium 1.4.4 Herschalen van tekst', description: 'Tekst moet twee keer zo groot kunnen zijn.', source: '@site/docs/wcag/1.4.04.mdx', sourceDirName: 'wcag', slug: '/wcag/1.4.4', permalink: '/wcag/1.4.4', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/1.4.04.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 1.4.4 Herschalen van tekst', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '1.4.4 Herschalen van tekst', pagination_label: 'WCAG-succescriterium 1.4.4 Herschalen van tekst', description: 'Tekst moet twee keer zo groot kunnen zijn.', slug: '1.4.4', keywords: ['WCAG', 'AA', 'waarneembaar', 'onderscheidbaar', 'perceivable', 'distinguishable', 'resize text'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.4.3 Contrast (minimum)', permalink: '/wcag/1.4.3' }, next: { title: 'WCAG-succescriterium 1.4.5 Afbeeldingen van tekst', permalink: '/wcag/1.4.5' } },
    m = {},
    v = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Tips', id: 'tips', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 1.4.4 Herschalen van tekst' }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(g, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsxs)(n.p, { children: ['Volg de instructies van ', (0, i.jsx)(n.a, { href: '/wcag/1.4.10/', children: 'WCAG succescriterium 1.4.10' }), '. Als de webpagina voldoet aan 1.4.10, dan voldoet hij zeer waarschijnlijk ook aan de eisen van 1.4.4.'] }), '\n', (0, i.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Als een pagina niet goed te vergroten is, dan kan dit in de HTML zijn ingesteld. In de ', (0, i.jsx)(n.code, { children: '<head>' }), ' kan een ', (0, i.jsx)(n.code, { children: '<meta>' }), '-element staan met het attribuut ', (0, i.jsx)(n.code, { children: 'name="viewport"' }), '. Dit element mag geen ', (0, i.jsx)(n.code, { children: 'maximum-scale' }), ' met een waarde onder de 3, of ', (0, i.jsx)(n.code, { children: 'user-scalable' }), ' met als waarde ', (0, i.jsx)(n.code, { children: '0' }), ' of ', (0, i.jsx)(n.code, { children: 'no' }), ' bevatten.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Stijl - Typografie: ', (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/', children: 'Introductie typografie' })] }), '\n', (0, i.jsxs)(n.li, { children: ['Stijl - Ruimte: ', (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/', children: 'Introductie ruimte' })] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(c.ZP, {}), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#resize-text', children: (0, i.jsx)('span', { lang: 'en', children: '1.4.4. Resize Text' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#herschalen-van-tekst', children: '1.4.4 Herschalen van tekst' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#resize-text', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 1.4.4. Resize Text' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 1.4.4. Resize Text' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(a.CY, { children: (0, i.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(o.ZP, {}) }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(d.ZP, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
   }
  },
  60256: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var i = t(52676),
    r = t(40139);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, i.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  99042: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var i = t(52676),
    r = t(40139);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, i.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, i.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  91114: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var i = t(52676),
    r = t(40139);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, i.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, t) => {
   t.d(n, { V: () => s });
   var i = t(4814),
    r = t(52676);
   const s = (e) => {
    let { children: n, className: t, level: s = 1, suffix: l, ...a } = e;
    return (0, r.jsxs)('hgroup', { className: (0, i.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, t), ...a, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, t) => {
   t.d(n, { U: () => d });
   var i = t(40139),
    r = t(16167),
    s = t(52676);
   const l = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: i, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return t + i + r;
     }
     return t.toString();
    },
    a = { 1: {}, 2: { h1: r.XJ, h2: r.aC, h3: r.k8, h4: r.by, h5: r.Cd }, 3: { h1: r.aC, h2: r.k8, h3: r.by, h4: r.Cd, h5: r.Cd }, 4: { h1: r.k8, h2: r.by, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 5: { h1: r.by, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 6: { h1: r.Cd, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd } },
    c = (e) => ({
     img: (n) => {
      let { src: t, ...i } = n;
      return (0, s.jsx)('img', { ...i, src: l(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    o = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    d = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: r = 1, baseUrl: l = '', components: a = {} } = e;
     return (0, s.jsx)(i.Z, { components: { ...o(t, r), ...c(l), ...a }, children: n });
    };
  },
  46364: (e, n, t) => {
   t.d(n, { j: () => l });
   var i = t(16167),
    r = t(41757),
    s = t(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: t, ...l } = e;
    return (0, s.jsx)(r.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: t && (0, s.jsx)(i.Ou, { className: 'nlds-inline-heading-group__badge', children: t }), ...l, children: n });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => a, a: () => l });
   var i = t(75271);
   const r = {},
    s = i.createContext(r);
   function l(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
