'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [48457],
 {
  87628: (e, n, a) => {
   a.r(n), a.d(n, { assets: () => v, contentTitle: () => p, default: () => k, frontMatter: () => u, metadata: () => j, toc: () => m });
   var t = a(52676),
    r = a(40139),
    i = a(57716),
    l = a(97233),
    s = a(46364),
    d = a(16167),
    o = a(60256),
    h = a(99042),
    c = a(91114),
    g = a(13361);
   const u = { title: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.1.2 Taal van onderdelen', pagination_label: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', description: 'Als je pagina tekst bevat in een andere taal dan de hoofdtaal, geef dit dan aan. Dit kan door in het html-element waarbinnen de tekst staat het attribuut \u2018lang\u2019 mee te geven.', slug: '3.1.2', keywords: ['WCAG', 'AA', 'begrijpelijk', 'leesbaar', 'understandable', 'readable', 'language of parts'] },
    p = void 0,
    j = { id: 'wcag/3.1.02', title: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', description: 'Als je pagina tekst bevat in een andere taal dan de hoofdtaal, geef dit dan aan. Dit kan door in het html-element waarbinnen de tekst staat het attribuut \u2018lang\u2019 mee te geven.', source: '@site/docs/wcag/3.1.02.mdx', sourceDirName: 'wcag', slug: '/wcag/3.1.2', permalink: '/wcag/3.1.2', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.1.02.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.1.2 Taal van onderdelen', pagination_label: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', description: 'Als je pagina tekst bevat in een andere taal dan de hoofdtaal, geef dit dan aan. Dit kan door in het html-element waarbinnen de tekst staat het attribuut \u2018lang\u2019 mee te geven.', slug: '3.1.2', keywords: ['WCAG', 'AA', 'begrijpelijk', 'leesbaar', 'understandable', 'readable', 'language of parts'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 3.1.1 Taal van de pagina', permalink: '/wcag/3.1.1' }, next: { title: 'WCAG-succescriterium 3.1.3 Ongebruikelijke woorden', permalink: '/wcag/3.1.3' } },
    v = {},
    m = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Demo taalwisseling met VoiceOver', id: 'demo-taalwisseling-met-voiceover', level: 3 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 },
     { value: 'Fout: Ontbrekend lang-attribuut', id: 'fout-ontbrekend-lang-attribuut', level: 3 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function b(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(s.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 3.1.2 Taal van onderdelen' }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(g.ZP, {}), '\n', (0, t.jsx)(n.p, { children: 'Geef wisseling van de taal aan waarin de tekst van elke passage of zin is geschreven. Als er in de tekst woorden of zinnen voorkomen in een andere taal dan die van de webpagina, brengt markering van die taal hulpmiddelen op de hoogte. Dit kan door in het HTML-element waarbinnen deze tekst staat het attribuut \u2018lang\u2019 mee te geven.' }), '\n', (0, t.jsx)(n.p, { children: 'Dan wordt tekst in die andere taal correct uitgesproken en daardoor beter te begrijpen voor gebruikers die de website laten voorlezen, bijvoorbeeld door screenreaders.' }), '\n', (0, t.jsx)(n.p, { children: 'Er is een uitzondering voor eigennamen, technische termen, woorden in een onbekende taal, en woorden of zinsdelen die deel uitmaken van het jargon van de omliggende tekst.' }), '\n', (0, t.jsxs)(n.p, { children: ['Met het ', (0, t.jsx)(n.code, { children: 'lang' }), '-attribuut breng je over welke taal (een deel van) je tekst heeft. Dan kunnen hulptechnologie\xebn als screenreaders of vertaalsoftware daarop handelen. In het geval van screenreaders bijvoorbeeld door de tekst met de juiste stem voor te lezen.'] }), '\n', (0, t.jsx)(n.p, { children: 'Of de juiste stem ook echt wordt gebruikt is afhankelijk van de instellingen van de gebruikte screenreader.' }), '\n', (0, t.jsxs)(n.p, { children: ['Bijvoorbeeld ', (0, t.jsx)(n.code, { children: '<p lang="en">Not all those who wander are lost.</p>' }), ' voor een zin in het Engels, in een verder Nederlandse tekst.'] }), '\n', (0, t.jsx)(n.p, { children: 'Of voor een taalwisselmenu:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<ul>\n  <li><a href="url" lang="nl">Nederlands</a></li>\n  <li><a href="url" lang="en">English</a></li>\n  <li><a href="url" lang="de">Deutsch</a></li>\n  <li><a href="url" lang="it">Italiano</a></li>\n  <li><a href="url" lang="fr">Fran\xe7ais</a></li>\n</ul>\n' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Bij het WCAG-succescriterium ', (0, t.jsx)(n.a, { href: '/wcag/3.1.1', children: '3.1.1 Taal van de pagina' }), ' staat uitgelegd hoe deze lang-code is samengesteld en wat geldige waarden zijn.'] }), '\n', (0, t.jsx)(n.h3, { id: 'demo-taalwisseling-met-voiceover', children: 'Demo taalwisseling met VoiceOver' }), '\n', (0, t.jsxs)(n.p, { children: ['In deze video hoor je hoe de screenreader VoiceOver wisselt van stem en taal voor teksten die met het ', (0, t.jsx)(n.code, { children: 'lang' }), '-attribuut zijn gemarkeerd.'] }), '\n', (0, t.jsx)(l.Y, { videoId: '2UAjJ_5nxqw' }), '\n', (0, t.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.matuzo.at/blog/lang-attribute', children: (0, t.jsx)('span', { lang: 'en', children: 'The lang attribute: browsers telling lies, telling sweet little lies' }) }), ' van Manuel Matuzovi\u0107 over de problemen met het automatisch vertalen met Google Translate.'] }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'https://r12a.github.io/app-subtags/', children: (0, t.jsx)('span', { lang: 'en', children: 'Language subtag lookup' }) }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang', children: (0, t.jsxs)('span', { lang: 'en', children: [(0, t.jsx)(n.code, { children: 'lang' }), '-attribuut op MDN'] }) }) }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.w3.org/International/articles/language-tags/index.en', children: (0, t.jsx)('span', { lang: 'en', children: 'Language tags in HTML and XML' }) }), ' van het W3C.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(o.ZP, {}), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Lees de tekst van de pagina en bepaal of er tekst in een andere taal dan die van de webpagina aanwezig is.' }), '\n', (0, t.jsxs)(n.p, { children: ['Inspecteer de gegenereerde HTML-code van die teksten, bijvoorbeeld met een ', (0, t.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.\nIs het HTML-element, dat de tekst in een andere taal bevat, aangeduid met een ', (0, t.jsx)(n.code, { children: 'lang' }), '-attribuut en heeft de taalcode een geldige waarde?'] }), '\n', (0, t.jsx)(n.p, { children: 'Staat er op een website een taalwisselmenu? Controleer bij de verschillende talen of ook de waarde van het lang-attribuut goed is ingesteld.' }), '\n', (0, t.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, t.jsx)(n.h3, { id: 'fout-ontbrekend-lang-attribuut', children: 'Fout: Ontbrekend lang-attribuut' }), '\n', (0, t.jsx)(n.p, { children: 'Het kan zijn dat het CMS wat je gebruikt geen mogelijkheid geeft om een taalwisseling aan te geven. Dan zul je dit zelf in de HTML-code moeten aangeven.' }), '\n', (0, t.jsxs)(n.p, { children: ['Zo biedt WordPress standaard geen taalwissel-optie aan voor onderdelen van tekst. Whodunit ontwikkelde daarom de plugin ', (0, t.jsx)(n.a, { href: 'https://wordpress.org/plugins/lang-attribute/', children: 'Lang Attribute for the Block Editor' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#language-of-parts', children: (0, t.jsx)('span', { lang: 'en', children: '3.1.2 Language of Parts' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#taal-van-onderdelen', children: '3.1.2 Taal van onderdelen' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#language-of-page', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 3.1.2 Language of Parts' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-page', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 3.1.2: Language of Parts' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(d.CY, { children: (0, t.jsx)(i.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.ZP, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(i.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.ZP, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(b, { ...e }) }) : b(e);
   }
  },
  60256: (e, n, a) => {
   a.d(n, { ZP: () => l });
   var t = a(52676),
    r = a(40139);
   function i(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
  },
  99042: (e, n, a) => {
   a.d(n, { ZP: () => l });
   var t = a(52676),
    r = a(40139);
   function i(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
  },
  91114: (e, n, a) => {
   a.d(n, { ZP: () => l });
   var t = a(52676),
    r = a(40139);
   function i(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
  },
  13361: (e, n, a) => {
   a.d(n, { ZP: () => l });
   var t = a(52676),
    r = a(40139);
   function i(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(n.p, { children: ['Geef wisseling van de taal aan waarin de tekst van elke passage of zin is geschreven. Als er in de tekst woorden of zinnen voorkomen in een andere taal dan die van de webpagina, brengt markering van die taal hulpmiddelen op de hoogte. Dit kan door in het HTML-element waarbinnen deze tekst staat het attribuut ', (0, t.jsx)(n.code, { children: 'lang' }), ' mee te geven.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Dan wordt tekst in die andere taal correct uitgesproken en daardoor beter te begrijpen voor gebruikers die de website laten voorlezen, bijvoorbeeld door ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: 'Er is een uitzondering voor eigennamen, technische termen, woorden in een onbekende taal, en woorden of zinsdelen die deel uitmaken van het jargon van de omliggende tekst.' }), '\n', (0, t.jsxs)(n.p, { children: ['Met het ', (0, t.jsx)(n.code, { children: 'lang' }), '-attribuut breng je over welke taal (een deel van) je tekst heeft. Dan kunnen hulptechnologie\xebn als screenreaders of vertaalsoftware daarop handelen. In het geval van screenreaders bijvoorbeeld door de tekst met de juiste stem voor te lezen.'] }), '\n', (0, t.jsx)(n.p, { children: 'Of de juiste stem ook echt wordt gebruikt is afhankelijk van de instellingen van de gebruikte screenreader.' })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(i, { ...e }) }) : i(e);
   }
  },
  41757: (e, n, a) => {
   a.d(n, { V: () => i });
   var t = a(4814),
    r = a(52676);
   const i = (e) => {
    let { children: n, className: a, level: i = 1, suffix: l, ...s } = e;
    return (0, r.jsxs)('hgroup', { className: (0, t.Z)('nlds-inline-heading-group', `utrecht-heading-${i}`, a), ...s, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, a) => {
   a.d(n, { U: () => h });
   var t = a(40139),
    r = a(16167),
    i = a(52676);
   const l = (e, n) => {
     const a = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === a.protocol) {
      const { pathname: a, search: t, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return a + t + r;
     }
     return a.toString();
    },
    s = { 1: {}, 2: { h1: r.XJ, h2: r.aC, h3: r.k8, h4: r.by, h5: r.Cd }, 3: { h1: r.aC, h2: r.k8, h3: r.by, h4: r.Cd, h5: r.Cd }, 4: { h1: r.k8, h2: r.by, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 5: { h1: r.by, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 6: { h1: r.Cd, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd } },
    d = (e) => ({
     img: (n) => {
      let { src: a, ...t } = n;
      return (0, i.jsx)('img', { ...t, src: l(e, a), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    o = (e, n) => {
     if (e) {
      const e = { ...s[n - 1] };
      return (e.h1 = () => null), e;
     }
     return s[n];
    },
    h = (e) => {
     let { children: n, omitH1: a = !1, headingLevel: r = 1, baseUrl: l = '', components: s = {} } = e;
     return (0, i.jsx)(t.Z, { components: { ...o(a, r), ...d(l), ...s }, children: n });
    };
  },
  97233: (e, n, a) => {
   a.d(n, { Y: () => s });
   var t = a(4814),
    r = a(95110),
    i = a.n(r),
    l = a(52676);
   const s = (e) => {
    let { videoId: n, className: a, ...r } = e;
    return (0, l.jsx)(i(), { url: `https://youtube.com/watch?v=${n}`, className: (0, t.Z)('video-player', a), width: '100%', height: '100%', controls: !0, ...r, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
  46364: (e, n, a) => {
   a.d(n, { j: () => l });
   var t = a(16167),
    r = a(41757),
    i = a(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: a, ...l } = e;
    return (0, i.jsx)(r.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: a && (0, i.jsx)(t.Ou, { className: 'nlds-inline-heading-group__badge', children: a }), ...l, children: n });
   };
  },
 },
]);
