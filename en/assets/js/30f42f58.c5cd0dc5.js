'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [98818],
 {
  34950: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => v, contentTitle: () => p, default: () => b, frontMatter: () => u, metadata: () => j, toc: () => m });
   var a = t(52676),
    i = t(24785),
    r = t(57716),
    l = t(71595),
    s = t(46506),
    o = t(45054),
    d = t(52057),
    c = t(78836);
   function h(e) {
    const n = { code: 'code', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.p, { children: ['Geef de menselijke taal waarin de tekst van een webpagina is geschreven aan. Dit kan door in het ', (0, a.jsx)(n.code, { children: 'html' }), '-element het attribuut ', (0, a.jsx)(n.code, { children: 'lang' }), ' mee te geven met als waarde de taal.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Bijvoorbeeld ', (0, a.jsx)(n.code, { children: '<html lang="nl">' }), ' voor een pagina met Nederlandse tekst.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Met het ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut vertel je aan een screenreader en andere voorleessoftware in welke taal de tekst van de pagina staat. Dan wordt deze tekst goed voorgelezen.'] }), '\n', (0, a.jsx)(n.p, { children: 'Of de software deze aangegeven taal ook echt goed voorleest, is ervan afhankelijk of deze taal beschikbaar is op de computer van de gebruiker.' })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(h, { ...e }) }) : h(e);
   }
   const u = { title: 'WCAG-succescriterium 3.1.1 Taal van de pagina', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.1.1 Taal van de pagina', pagination_label: 'WCAG-succescriterium 3.1.1 Taal van de pagina', description: 'Geef de menselijke taal waarin de tekst van een webpagina is geschreven aan. Dit kan door in het html-element het attribuut \u2018lang\u2019 mee te geven.', slug: '3.1.1', keywords: ['WCAG'] },
    p = void 0,
    j = { id: 'wcag/3.1.01', title: 'WCAG-succescriterium 3.1.1 Taal van de pagina', description: 'Geef de menselijke taal waarin de tekst van een webpagina is geschreven aan. Dit kan door in het html-element het attribuut \u2018lang\u2019 mee te geven.', source: '@site/docs/wcag/3.1.01.mdx', sourceDirName: 'wcag', slug: '/wcag/3.1.1', permalink: '/en/wcag/3.1.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.1.01.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 3.1.1 Taal van de pagina', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.1.1 Taal van de pagina', pagination_label: 'WCAG-succescriterium 3.1.1 Taal van de pagina', description: 'Geef de menselijke taal waarin de tekst van een webpagina is geschreven aan. Dit kan door in het html-element het attribuut \u2018lang\u2019 mee te geven.', slug: '3.1.1', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)', permalink: '/en/wcag/2.5.8' }, next: { title: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', permalink: '/en/wcag/3.1.2' } },
    v = {},
    m = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 },
     { value: 'Fout: Ontbrekend lang-attribuut', id: 'fout-ontbrekend-lang-attribuut', level: 3 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', (0, a.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 3.1.1 Taal van de pagina' }), '\n', (0, a.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, a.jsx)(g, {}), '\n', (0, a.jsxs)(n.p, { children: ['Deze waarde is als volgt samengesteld: Twee (kleine) letters voor de taalgroep uit de ', (0, a.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes', children: 'ISO 639-1 standaard' }), ' en, optioneel, een koppelteken, met daarna twee of drie letters voor de variatie of regio van de taal in hoofdletters.'] }), '\n', (0, a.jsx)(n.p, { children: 'De code voor taalgroep is verplicht, de regio-code is optioneel.' }), '\n', (0, a.jsxs)(n.p, { children: ['Een uitgebreid overzicht staat op ', (0, a.jsx)(n.a, { href: 'https://gist.github.com/JamieMason/3748498', children: 'HTML lang attribute / ISO language code reference / Culture names' }), ' van Jamie Mason.'] }), '\n', (0, a.jsx)(n.p, { children: 'Voor Nederlands:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.code, { children: '<html lang="nl">' }), ' voor algemeen Nederlands.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.code, { children: '<html lang="nl-NL">' }), ' voor Nederlands.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.code, { children: '<html lang="nl-BE">' }), ' voor Vlaams.'] }), '\n'] }), '\n', (0, a.jsxs)(n.p, { children: ['Het Fries is geen variatie van het Nederlands maar een eigen taal en heeft daarom een eigen ISO 639-1 code: ', (0, a.jsx)(n.code, { children: '<html lang="fy">' }), '.'] }), '\n', (0, a.jsx)(n.p, { children: 'Voor Engels bijvoorbeeld:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.code, { children: '<html lang="en">' }), ' voor algemeen Engels.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.code, { children: '<html lang="en-GB">' }), ' voor Brits.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.code, { children: '<html lang="en-US">' }), ' voor Amerikaans.'] }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'De gebruiker kan verschillende talen (stemmen) downloaden en ervoor kiezen bijvoorbeeld alleen Brits-Engels te gebruiken. Een Amerikaans gelabelde website wordt dan toch in het Brits voorgelezen.' }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.strong, { children: 'Let op' }), ': dit succescriterium betreft de taal van de hele pagina. Wil je alleen een deel in een andere taal publiceren, gebruik dan het ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut op elementen in de andere taal binnen de pagina. Hoe dit te doen staat bij het WCAG-succescriterium ', (0, a.jsx)(n.a, { href: '/wcag/3.1.2', children: '3.1.2 Taal van onderdelen' }), '.'] }), '\n', (0, a.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.a, { href: 'https://www.matuzo.at/blog/lang-attribute', children: (0, a.jsx)('span', { lang: 'en', children: 'The lang attribute: browsers telling lies, telling sweet little lies' }) }), ' van Manuel Matuzovi\u0107 over de problemen met het automatisch vertalen met Google Translate.'] }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://r12a.github.io/app-subtags/', children: (0, a.jsx)('span', { lang: 'en', children: 'Language subtag lookup' }) }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang', children: (0, a.jsxs)('span', { lang: 'en', children: [(0, a.jsx)(n.code, { children: 'lang' }), '-attribuut op MDN'] }) }) }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.a, { href: 'https://www.w3.org/International/articles/language-tags/index.en', children: (0, a.jsx)('span', { lang: 'en', children: 'Language tags in HTML and XML' }) }), ' van de W3C.'] }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, a.jsx)(o.ZP, {}), '\n', (0, a.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, a.jsxs)(n.p, { children: ['Inspecteer de gegenereerde HTML-code van de webpagina, bijvoorbeeld met een ', (0, a.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.\nHeeft het ', (0, a.jsx)(n.code, { children: 'html' }), '-element een ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut en is dit een geldige waarde?'] }), '\n', (0, a.jsx)(n.p, { children: 'Staat er op een website een taalkeuze? Controleer bij de verschillende talen of ook de waarde van het lang-attribuut is aangepast.' }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.strong, { children: 'Let op' }), ': alleen de tekst (de content) wordt in een andere taal voorgelezen. Dus alle ander informatie die een screenreader voorleest blijft in de taal van de computer. Dit is informatie over bijvoorbeeld formulierelementen, het niveau van een kopje, of een element een button of een link is, etc. Dit is gewenst gedrag.'] }), '\n', (0, a.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, a.jsx)(n.h3, { id: 'fout-ontbrekend-lang-attribuut', children: 'Fout: Ontbrekend lang-attribuut' }), '\n', (0, a.jsxs)(n.p, { children: ["Jaarlijks meet WebAIM de toegankelijkheid van 1 miljoen voorpagina's van websites. Volgens het onderzoek ", (0, a.jsx)(n.a, { href: 'https://webaim.org/projects/million/', children: 'WebAIM Million uit 2024' }), ' mist bij 17% van de gemeten websites het ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut. Het hoort hierbij tot de top 5 van meest gemaakte fouten.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Het controleren van de taal is dus geen overbodige luxe. Een goed CMS zet zelf het ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut in de code. Maar check dan ook of dat de juiste waarde is voor de tekst van de website.'] }), '\n', (0, a.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#language-of-page', children: (0, a.jsx)('span', { lang: 'en', children: '3.1.1 Language of Page' }) }), '.'] }), '\n', (0, a.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#taal-van-de-pagina', children: '3.1.1 Taal van de pagina' }), '.'] }), '\n', (0, a.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, a.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#language-of-page', children: (0, a.jsx)('span', { lang: 'en', children: 'Quick Reference 3.1.1 Language of Page' }) }), '.'] }), '\n', (0, a.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html', children: (0, a.jsx)('span', { lang: 'en', children: 'Understanding SC 3.1.1: Language of Page' }) }), '.'] }), '\n'] }), '\n', (0, a.jsx)(s.CY, { children: (0, a.jsx)(r.U, { omitH1: !0, headinglevel: 3, children: (0, a.jsx)(d.ZP, {}) }) }), '\n', (0, a.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, a.jsx)(r.U, { omitH1: !0, headinglevel: 3, children: (0, a.jsx)(c.ZP, {}) })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(x, { ...e }) }) : x(e);
   }
  },
  45054: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var a = t(52676),
    i = t(24785);
   function r(e) {
    const n = { a: 'a', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, a.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  52057: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var a = t(52676),
    i = t(24785);
   function r(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'aanvulling-op-wcag', children: 'Aanvulling op WCAG' }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.strong, { children: 'Belangrijk:' }), ' De richtlijnen van NL Design System zijn niet verplicht en zijn geen vervanging voor de ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, a.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  78836: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var a = t(52676),
    i = t(24785);
   function r(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, a.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  72657: (e, n, t) => {
   t.d(n, { V: () => l });
   var a = t(4814);
   t(75271);
   const i = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var r = t(52676);
   const l = (e) => {
    let { children: n, className: t, level: l = 1, suffix: s, ...o } = e;
    return (0, r.jsxs)('hgroup', { className: (0, a.Z)(i['nlds-inline-heading-group'], `utrecht-heading-${l}`, t), ...o, children: [(0, r.jsx)('h1', { className: (0, a.Z)(i['nlds-inline-heading-group__heading']), children: n }), s && (0, r.jsxs)('p', { className: (0, a.Z)(i['nlds-inline-heading-group__suffix']), children: [s ? ' ' : '', s] })] });
   };
  },
  57716: (e, n, t) => {
   t.d(n, { U: () => c });
   var a = t(24785),
    i = t(46506),
    r = (t(75271), t(52676));
   const l = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: a, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + a + i;
     }
     return t.toString();
    },
    s = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    o = (e) => ({
     img: (n) => {
      let { src: t, ...a } = n;
      return (0, r.jsx)('img', { ...a, src: l(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...s[n - 1] };
      return (e.h1 = () => null), e;
     }
     return s[n];
    },
    c = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: i = 1, baseUrl: l = '' } = e;
     return (0, r.jsx)(a.Z, { components: { ...d(t, i), ...o(l) }, children: n });
    };
  },
  71595: (e, n, t) => {
   t.d(n, { j: () => o });
   var a = t(46506),
    i = (t(75271), t(72657));
   const r = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    l = 'nlds-inline-heading-group__badge_TgvT';
   var s = t(52676);
   const o = (e) => {
    let { children: n, conformanceLevel: t, ...o } = e;
    return (0, s.jsx)(i.V, { className: r, suffix: t && (0, s.jsx)(a.Ou, { className: l, children: t }), ...o, children: n });
   };
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => l });
   var a = t(75271);
   const i = {},
    r = a.createContext(i);
   function l(e) {
    const n = a.useContext(r);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), a.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
