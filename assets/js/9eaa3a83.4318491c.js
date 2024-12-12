'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [48457],
 {
  50074: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => v, default: () => k, frontMatter: () => p, metadata: () => j, toc: () => w });
   var a = t(52676),
    r = t(87118),
    i = t(57716),
    l = t(97233),
    s = t(46364),
    d = t(31916),
    o = t(57705),
    h = t(7140),
    c = t(39745);
   function g(e) {
    const n = { code: 'code', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.p, { children: ['Geef wisseling van de taal aan waarin de tekst van elke passage of zin is geschreven. Als er in de tekst woorden of zinnen voorkomen in een andere taal dan die van de webpagina, brengt markering van die taal hulpmiddelen op de hoogte. Dit kan door in het HTML-element waarbinnen deze tekst staat het attribuut ', (0, a.jsx)(n.code, { children: 'lang' }), ' mee te geven.'] }), '\n', (0, a.jsx)(n.p, { children: 'Dan wordt tekst in die andere taal correct uitgesproken en daardoor beter te begrijpen voor gebruikers die de website laten voorlezen, bijvoorbeeld door screenreaders.' }), '\n', (0, a.jsx)(n.p, { children: 'Er is een uitzondering voor eigennamen, technische termen, woorden in een onbekende taal, en woorden of zinsdelen die deel uitmaken van het jargon van de omliggende tekst.' }), '\n', (0, a.jsxs)(n.p, { children: ['Met het ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut breng je over welke taal (een deel van) je tekst heeft. Dan kunnen hulptechnologie\xebn als screenreaders of vertaalsoftware daarop handelen. In het geval van screenreaders bijvoorbeeld door de tekst met de juiste stem voor te lezen.'] }), '\n', (0, a.jsx)(n.p, { children: 'Of de juiste stem ook echt wordt gebruikt is afhankelijk van de instellingen van de gebruikte screenreader of voorleessoftware.' })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(g, { ...e }) }) : g(e);
   }
   const p = { title: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.1.2 Taal van onderdelen', pagination_label: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', description: 'Als je pagina tekst bevat in een andere taal dan de hoofdtaal, geef dit dan aan. Dit kan door in het html-element waarbinnen de tekst staat het attribuut \u2018lang\u2019 mee te geven.', slug: '3.1.2', keywords: ['WCAG'] },
    v = void 0,
    j = { id: 'wcag/3.1.02', title: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', description: 'Als je pagina tekst bevat in een andere taal dan de hoofdtaal, geef dit dan aan. Dit kan door in het html-element waarbinnen de tekst staat het attribuut \u2018lang\u2019 mee te geven.', source: '@site/docs/wcag/3.1.02.mdx', sourceDirName: 'wcag', slug: '/wcag/3.1.2', permalink: '/wcag/3.1.2', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.1.02.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.1.2 Taal van onderdelen', pagination_label: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', description: 'Als je pagina tekst bevat in een andere taal dan de hoofdtaal, geef dit dan aan. Dit kan door in het html-element waarbinnen de tekst staat het attribuut \u2018lang\u2019 mee te geven.', slug: '3.1.2', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 3.1.1 Taal van de pagina', permalink: '/wcag/3.1.1' }, next: { title: 'WCAG-succescriterium 3.1.3 Ongebruikelijke woorden', permalink: '/wcag/3.1.3' } },
    m = {},
    w = [
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
    return (0, a.jsxs)(a.Fragment, { children: ['\n', '\n', '\n', (0, a.jsx)(s.j, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 3.1.2 Taal van onderdelen' }), '\n', (0, a.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, a.jsx)(u, {}), '\n', (0, a.jsx)(n.p, { children: 'Geef wisseling van de taal aan waarin de tekst van elke passage of zin is geschreven. Als er in de tekst woorden of zinnen voorkomen in een andere taal dan die van de webpagina, brengt markering van die taal hulpmiddelen op de hoogte. Dit kan door in het HTML-element waarbinnen deze tekst staat het attribuut \u2018lang\u2019 mee te geven.' }), '\n', (0, a.jsx)(n.p, { children: 'Dan wordt tekst in die andere taal correct uitgesproken en daardoor beter te begrijpen voor gebruikers die de website laten voorlezen, bijvoorbeeld door screenreaders.' }), '\n', (0, a.jsx)(n.p, { children: 'Er is een uitzondering voor eigennamen, technische termen, woorden in een onbekende taal, en woorden of zinsdelen die deel uitmaken van het jargon van de omliggende tekst.' }), '\n', (0, a.jsxs)(n.p, { children: ['Met het ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut breng je over welke taal (een deel van) je tekst heeft. Dan kunnen hulptechnologie\xebn als screenreaders of vertaalsoftware daarop handelen. In het geval van screenreaders bijvoorbeeld door de tekst met de juiste stem voor te lezen.'] }), '\n', (0, a.jsx)(n.p, { children: 'Of de juiste stem ook echt wordt gebruikt is afhankelijk van de instellingen van de gebruikte screenreader of voorleessoftware.' }), '\n', (0, a.jsxs)(n.p, { children: ['Bijvoorbeeld ', (0, a.jsx)(n.code, { children: '<p lang="en">Not all those who wander are lost.</p>' }), ' voor een zin in het Engels, in een verder Nederlandse tekst.'] }), '\n', (0, a.jsx)(n.p, { children: 'Of voor een taalwisselmenu:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<ul>\n  <li><a href="url" lang="nl">Nederlands</a></li>\n  <li><a href="url" lang="en">English</a></li>\n  <li><a href="url" lang="de">Deutsch</a></li>\n  <li><a href="url" lang="it">Italiano</a></li>\n  <li><a href="url" lang="fr">Fran\xe7ais</a></li>\n</ul>\n' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Bij het WCAG-succescriterium ', (0, a.jsx)(n.a, { href: '/wcag/3.1.1', children: '3.1.1 Taal van de pagina' }), ' staat uitgelegd hoe deze lang-code is samengesteld en wat geldige waarden zijn.'] }), '\n', (0, a.jsx)(n.h3, { id: 'demo-taalwisseling-met-voiceover', children: 'Demo taalwisseling met VoiceOver' }), '\n', (0, a.jsxs)(n.p, { children: ['In deze video hoor je hoe de screenreader VoiceOver wisselt van stem en taal voor teksten die met het ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut zijn gemarkeerd.'] }), '\n', (0, a.jsx)(l.Y, { videoId: '2UAjJ_5nxqw' }), '\n', (0, a.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.a, { href: 'https://www.matuzo.at/blog/lang-attribute', children: (0, a.jsx)('span', { lang: 'en', children: 'The lang attribute: browsers telling lies, telling sweet little lies' }) }), ' van Manuel Matuzovi\u0107 over de problemen met het automatisch vertalen met Google Translate.'] }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://r12a.github.io/app-subtags/', children: (0, a.jsx)('span', { lang: 'en', children: 'Language subtag lookup' }) }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang', children: (0, a.jsxs)('span', { lang: 'en', children: [(0, a.jsx)(n.code, { children: 'lang' }), '-attribuut op MDN'] }) }) }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.a, { href: 'https://www.w3.org/International/articles/language-tags/index.en', children: (0, a.jsx)('span', { lang: 'en', children: 'Language tags in HTML and XML' }) }), ' van het W3C.'] }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, a.jsx)(o.ZP, {}), '\n', (0, a.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, a.jsx)(n.p, { children: 'Lees de tekst van de pagina en bepaal of er tekst in een andere taal dan die van de webpagina aanwezig is.' }), '\n', (0, a.jsxs)(n.p, { children: ['Inspecteer de gegenereerde HTML-code van die teksten, bijvoorbeeld met een ', (0, a.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.\nIs het HTML-element, dat de tekst in een andere taal bevat, aangeduid met een ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut en heeft de taalcode een geldige waarde?'] }), '\n', (0, a.jsx)(n.p, { children: 'Staat er op een website een taalwisselmenu? Controleer bij de verschillende talen of ook de waarde van het lang-attribuut goed is ingesteld.' }), '\n', (0, a.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, a.jsx)(n.h3, { id: 'fout-ontbrekend-lang-attribuut', children: 'Fout: Ontbrekend lang-attribuut' }), '\n', (0, a.jsx)(n.p, { children: 'Het kan zijn dat het CMS wat je gebruikt geen mogelijkheid geeft om een taalwisseling aan te geven. Dan zul je dit zelf in de HTML-code moeten aangeven.' }), '\n', (0, a.jsxs)(n.p, { children: ['Zo biedt WordPress standaard geen taalwissel-optie aan voor onderdelen van tekst. Whodunit ontwikkelde daarom de plugin ', (0, a.jsx)(n.a, { href: 'https://wordpress.org/plugins/lang-attribute/', children: 'Lang Attribute for the Block Editor' }), '.'] }), '\n', (0, a.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#language-of-parts', children: (0, a.jsx)('span', { lang: 'en', children: '3.1.2 Language of Parts' }) }), '.'] }), '\n', (0, a.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#taal-van-onderdelen', children: '3.1.2 Taal van onderdelen' }), '.'] }), '\n', (0, a.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, a.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#language-of-page', children: (0, a.jsx)('span', { lang: 'en', children: 'Quick Reference 3.1.2 Language of Parts' }) }), '.'] }), '\n', (0, a.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-page', children: (0, a.jsx)('span', { lang: 'en', children: 'Understanding SC 3.1.2: Language of Parts' }) }), '.'] }), '\n'] }), '\n', (0, a.jsx)(d.CY, { children: (0, a.jsx)(i.U, { omitH1: !0, headinglevel: 3, children: (0, a.jsx)(h.ZP, {}) }) }), '\n', (0, a.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, a.jsx)(i.U, { omitH1: !0, headinglevel: 3, children: (0, a.jsx)(c.ZP, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(b, { ...e }) }) : b(e);
   }
  },
  57705: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var a = t(52676),
    r = t(87118);
   function i(e) {
    const n = { a: 'a', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, a.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, a.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  7140: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var a = t(52676),
    r = t(87118);
   function i(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', strong: 'strong', ...(0, r.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'aanvulling-op-wcag', children: 'Aanvulling op WCAG' }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.strong, { children: 'Belangrijk:' }), ' De richtlijnen van NL Design System zijn niet verplicht en zijn geen vervanging voor de ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, a.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  39745: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var a = t(52676),
    r = t(87118);
   function i(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, a.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(i, { ...e }) }) : i(e);
   }
  },
  41757: (e, n, t) => {
   t.d(n, { V: () => i });
   var a = t(4814),
    r = t(52676);
   const i = (e) => {
    let { children: n, className: t, level: i = 1, suffix: l, ...s } = e;
    return (0, r.jsxs)('hgroup', { className: (0, a.Z)('nlds-inline-heading-group', `utrecht-heading-${i}`, t), ...s, children: [(0, r.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, r.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, t) => {
   t.d(n, { U: () => h });
   var a = t(87118),
    r = t(31916),
    i = t(52676);
   const l = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: a, hash: r } = new URL(n, new URL(e, 'http://example.com/'));
      return t + a + r;
     }
     return t.toString();
    },
    s = { 1: {}, 2: { h1: r.XJ, h2: r.aC, h3: r.k8, h4: r.by, h5: r.Cd }, 3: { h1: r.aC, h2: r.k8, h3: r.by, h4: r.Cd, h5: r.Cd }, 4: { h1: r.k8, h2: r.by, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 5: { h1: r.by, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd }, 6: { h1: r.Cd, h2: r.Cd, h3: r.Cd, h4: r.Cd, h5: r.Cd } },
    d = (e) => ({
     img: (n) => {
      let { src: t, ...a } = n;
      return (0, i.jsx)('img', { ...a, src: l(e, t), className: 'utrecht-img utrecht-img--fit' });
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
     let { children: n, omitH1: t = !1, headingLevel: r = 1, baseUrl: l = '', components: s = {} } = e;
     return (0, i.jsx)(a.Z, { components: { ...o(t, r), ...d(l), ...s }, children: n });
    };
  },
  97233: (e, n, t) => {
   t.d(n, { Y: () => s });
   var a = t(4814),
    r = t(95110),
    i = t.n(r),
    l = t(52676);
   const s = (e) => {
    let { videoId: n, className: t, ...r } = e;
    return (0, l.jsx)(i(), { url: `https://youtube.com/watch?v=${n}`, className: (0, a.Z)('video-player', t), width: '100%', height: '100%', controls: !0, ...r, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
  46364: (e, n, t) => {
   t.d(n, { j: () => l });
   var a = t(31916),
    r = t(41757),
    i = t(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: t, ...l } = e;
    return (0, i.jsx)(r.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: t && (0, i.jsx)(a.Ou, { className: 'nlds-inline-heading-group__badge', children: t }), ...l, children: n });
   };
  },
 },
]);
