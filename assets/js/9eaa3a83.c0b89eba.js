'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [77104],
 {
  4258(e, n, t) {
   t.d(n, { L: () => r });
   var a = t(78236),
    i = t(86070);
   const r = ({ id: e, title: n, ...t }) => (0, i.jsx)(a.A, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: e, title: n, poster: 'maxresdefault', ...t });
  },
  12013(e, n, t) {
   t.d(n, { o: () => c });
   var a = t(18439),
    i = t(46447),
    r = t(86070);
   const l = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: a, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + a + i;
     }
     return t.toString();
    },
    s = { 1: {}, 2: { h1: i.fV, h2: i._B, h3: i.f_, h4: i.mM, h5: i.TT }, 3: { h1: i._B, h2: i.f_, h3: i.mM, h4: i.TT, h5: i.TT }, 4: { h1: i.f_, h2: i.mM, h3: i.TT, h4: i.TT, h5: i.TT }, 5: { h1: i.mM, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT }, 6: { h1: i.TT, h2: i.TT, h3: i.TT, h4: i.TT, h5: i.TT } },
    o = (e) => ({ img: ({ src: n, ...t }) => (0, r.jsx)('img', { ...t, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    d = (e, n) => {
     if (e) {
      const e = { ...s[n - 1] };
      return ((e.h1 = () => null), e);
     }
     return s[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: t = 1, baseUrl: i = '', components: l = {} }) => (0, r.jsx)(a.x, { components: { ...d(n, t), ...o(i), ...l }, children: e });
  },
  18439(e, n, t) {
   t.d(n, { R: () => l, x: () => s });
   var a = t(30758);
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), a.createElement(r.Provider, { value: n }, e.children));
   }
  },
  28890(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => r });
   var a = t(86070),
    i = t(18439);
   const r = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, a.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, a.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, a.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
  47219(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => r });
   var a = t(86070),
    i = t(18439);
   const r = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, a.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, a.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
  52105(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => r });
   var a = t(86070),
    i = t(18439);
   const r = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, a.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
  69451(e, n, t) {
   (t.r(n), t.d(n, { assets: () => j, contentTitle: () => m, default: () => w, frontMatter: () => p, metadata: () => a, toc: () => v }));
   const a = JSON.parse('{"id":"wcag/3.1.02","title":"WCAG-succescriterium 3.1.2 Taal van onderdelen","description":"Als je pagina tekst bevat in een andere taal dan de hoofdtaal, geef dit dan aan. Dit kan door in het html-element waarbinnen de tekst staat het attribuut \u2018lang\u2019 mee te geven.","source":"@site/docs/wcag/3.1.02.mdx","sourceDirName":"wcag","slug":"/wcag/3.1.2","permalink":"/wcag/3.1.2","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/3.1.02.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 3.1.2 Taal van onderdelen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3.1.2 Taal van onderdelen","pagination_label":"WCAG-succescriterium 3.1.2 Taal van onderdelen","description":"Als je pagina tekst bevat in een andere taal dan de hoofdtaal, geef dit dan aan. Dit kan door in het html-element waarbinnen de tekst staat het attribuut \u2018lang\u2019 mee te geven.","slug":"3.1.2","keywords":["WCAG","AA","begrijpelijk","leesbaar","understandable","readable","language of parts"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 3.1.1 Taal van de pagina","permalink":"/wcag/3.1.1"},"next":{"title":"WCAG-succescriterium 3.1.3 Ongebruikelijke woorden","permalink":"/wcag/3.1.3"}}');
   var i = t(86070),
    r = t(18439),
    l = t(12013),
    s = t(4258),
    o = t(80003),
    d = t(46447),
    c = t(52105),
    h = t(28890),
    u = t(47219),
    g = t(69488);
   const p = { title: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3.1.2 Taal van onderdelen', pagination_label: 'WCAG-succescriterium 3.1.2 Taal van onderdelen', description: 'Als je pagina tekst bevat in een andere taal dan de hoofdtaal, geef dit dan aan. Dit kan door in het html-element waarbinnen de tekst staat het attribuut \u2018lang\u2019 mee te geven.', slug: '3.1.2', keywords: ['WCAG', 'AA', 'begrijpelijk', 'leesbaar', 'understandable', 'readable', 'language of parts'] },
    m = void 0,
    j = {},
    v = [{ value: 'Uitleg', id: 'uitleg', level: 2 }, ...g.RM, { value: 'Demo taalwisseling met VoiceOver', id: 'demo-taalwisseling-met-voiceover', level: 3 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...c.RM, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 }, { value: 'Fout: Ontbrekend lang-attribuut', id: 'fout-ontbrekend-lang-attribuut', level: 3 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...h.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...u.RM];
   function b(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(o.E, { level: 1, conformanceLevel: 'Niveau AA', children: 'WCAG-succescriterium 3.1.2 Taal van onderdelen' }), '\n', (0, i.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, i.jsx)(g.Ay, {}), '\n', (0, i.jsx)(n.p, { children: 'Geef wisseling van de taal aan waarin de tekst van elke passage of zin is geschreven. Als er in de tekst woorden of zinnen voorkomen in een andere taal dan die van de webpagina, brengt markering van die taal hulpmiddelen op de hoogte. Dit kan door in het HTML-element waarbinnen deze tekst staat het attribuut \u2018lang\u2019 mee te geven.' }), '\n', (0, i.jsx)(n.p, { children: 'Dan wordt tekst in die andere taal correct uitgesproken en daardoor beter te begrijpen voor gebruikers die de website laten voorlezen, bijvoorbeeld door screenreaders.' }), '\n', (0, i.jsx)(n.p, { children: 'Er is een uitzondering voor eigennamen, technische termen, woorden in een onbekende taal, en woorden of zinsdelen die deel uitmaken van het jargon van de omliggende tekst.' }), '\n', (0, i.jsxs)(n.p, { children: ['Met het ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut breng je over welke taal (een deel van) je tekst heeft. Dan kunnen hulptechnologie\xebn als screenreaders of vertaalsoftware daarop handelen. In het geval van screenreaders bijvoorbeeld door de tekst met de juiste stem voor te lezen.'] }), '\n', (0, i.jsx)(n.p, { children: 'Of de juiste stem ook echt wordt gebruikt is afhankelijk van de instellingen van de gebruikte screenreader.' }), '\n', (0, i.jsxs)(n.p, { children: ['Bijvoorbeeld ', (0, i.jsx)(n.code, { children: '<p lang="en">Not all those who wander are lost.</p>' }), ' voor een zin in het Engels, in een verder Nederlandse tekst.'] }), '\n', (0, i.jsx)(n.p, { children: 'Of voor een taalwisselmenu:' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<ul>\n  <li><a href="url" lang="nl">Nederlands</a></li>\n  <li><a href="url" lang="en">English</a></li>\n  <li><a href="url" lang="de">Deutsch</a></li>\n  <li><a href="url" lang="it">Italiano</a></li>\n  <li><a href="url" lang="fr">Fran\xe7ais</a></li>\n</ul>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Bij het WCAG-succescriterium ', (0, i.jsx)(n.a, { href: '/wcag/3.1.1/', children: '3.1.1 Taal van de pagina' }), ' staat uitgelegd hoe deze lang-code is samengesteld en wat geldige waarden zijn.'] }), '\n', (0, i.jsx)(n.h3, { id: 'demo-taalwisseling-met-voiceover', children: 'Demo taalwisseling met VoiceOver' }), '\n', (0, i.jsxs)(n.p, { children: ['In deze video hoor je hoe de screenreader VoiceOver wisselt van stem en taal voor teksten die met het ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut zijn gemarkeerd.'] }), '\n', (0, i.jsx)(s.L, { id: '2UAjJ_5nxqw', title: 'Demo taalwisseling met VoiceOver' }), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Content: ', (0, i.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/taal/', children: 'De juiste taal instellen' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://www.matuzo.at/blog/lang-attribute', children: (0, i.jsx)('span', { lang: 'en', children: 'The lang attribute: browsers telling lies, telling sweet little lies' }) }), ' van Manuel Matuzovi\u0107 over de problemen met het automatisch vertalen met Google Translate.'] }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://r12a.github.io/app-subtags/', children: (0, i.jsx)('span', { lang: 'en', children: 'Language subtag lookup' }) }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang', children: (0, i.jsxs)('span', { lang: 'en', children: [(0, i.jsx)(n.code, { children: 'lang' }), '-attribuut op MDN'] }) }) }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://www.w3.org/International/articles/language-tags/index.en', children: (0, i.jsx)('span', { lang: 'en', children: 'Language tags in HTML and XML' }) }), ' van het W3C.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, i.jsx)(c.Ay, {}), '\n', (0, i.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, i.jsx)(n.p, { children: 'Lees de tekst van de pagina en bepaal of er tekst in een andere taal dan die van de webpagina aanwezig is.' }), '\n', (0, i.jsxs)(n.p, { children: ['Inspecteer de gegenereerde HTML-code van die teksten, bijvoorbeeld met een ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools', children: 'browser inspector' }), '.\nIs het HTML-element, dat de tekst in een andere taal bevat, aangeduid met een ', (0, i.jsx)(n.code, { children: 'lang' }), '-attribuut en heeft de taalcode een geldige waarde?'] }), '\n', (0, i.jsx)(n.p, { children: 'Staat er op een website een taalwisselmenu? Controleer bij de verschillende talen of ook de waarde van het lang-attribuut goed is ingesteld.' }), '\n', (0, i.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, i.jsx)(n.h3, { id: 'fout-ontbrekend-lang-attribuut', children: 'Fout: Ontbrekend lang-attribuut' }), '\n', (0, i.jsx)(n.p, { children: 'Het kan zijn dat het CMS wat je gebruikt geen mogelijkheid geeft om een taalwisseling aan te geven. Dan zul je dit zelf in de HTML-code moeten aangeven.' }), '\n', (0, i.jsxs)(n.p, { children: ['Zo biedt WordPress standaard geen taalwissel-optie aan voor onderdelen van tekst. Whodunit ontwikkelde daarom de plugin ', (0, i.jsx)(n.a, { href: 'https://wordpress.org/plugins/lang-attribute/', children: 'Lang Attribute for the Block Editor' }), '.'] }), '\n', (0, i.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#language-of-parts', children: (0, i.jsx)('span', { lang: 'en', children: '3.1.2 Language of Parts' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#language-of-parts', children: '3.1.2 Taal van onderdelen' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, i.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#language-of-page', children: (0, i.jsx)('span', { lang: 'en', children: 'Quick Reference 3.1.2 Language of Parts' }) }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, i.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-page', children: (0, i.jsx)('span', { lang: 'en', children: 'Understanding SC 3.1.2: Language of Parts' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(d.K7, { children: (0, i.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(h.Ay, {}) }) }), '\n', (0, i.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, i.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, i.jsx)(u.Ay, {}) })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(b, { ...e }) }) : b(e);
   }
  },
  69488(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => r });
   var a = t(86070),
    i = t(18439);
   const r = [];
   function l(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(n.p, { children: ['Geef wisseling van de taal aan waarin de tekst van elke passage of zin is geschreven. Als er in de tekst woorden of zinnen voorkomen in een andere taal dan die van de webpagina, brengt markering van die taal hulpmiddelen op de hoogte. Dit kan door in het HTML-element waarbinnen deze tekst staat het attribuut ', (0, a.jsx)(n.code, { children: 'lang' }), ' mee te geven.'] }), '\n', (0, a.jsxs)(n.p, { children: ['Dan wordt tekst in die andere taal correct uitgesproken en daardoor beter te begrijpen voor gebruikers die de website laten voorlezen, bijvoorbeeld door ', (0, a.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '.'] }), '\n', (0, a.jsx)(n.p, { children: 'Er is een uitzondering voor eigennamen, technische termen, woorden in een onbekende taal, en woorden of zinsdelen die deel uitmaken van het jargon van de omliggende tekst.' }), '\n', (0, a.jsxs)(n.p, { children: ['Met het ', (0, a.jsx)(n.code, { children: 'lang' }), '-attribuut breng je over welke taal (een deel van) je tekst heeft. Dan kunnen hulptechnologie\xebn als screenreaders of vertaalsoftware daarop handelen. In het geval van screenreaders bijvoorbeeld door de tekst met de juiste stem voor te lezen.'] }), '\n', (0, a.jsx)(n.p, { children: 'Of de juiste stem ook echt wordt gebruikt is afhankelijk van de instellingen van de gebruikte screenreader.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(l, { ...e }) }) : l(e);
   }
  },
  72642(e, n, t) {
   t.d(n, { p: () => r });
   var a = t(13526),
    i = t(86070);
   const r = ({ children: e, className: n, level: t = 1, suffix: r, ...l }) => (0, i.jsxs)('hgroup', { className: (0, a.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...l, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), r && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [r ? ' ' : '', r] })] });
  },
  78236(e, n, t) {
   t.d(n, { A: () => s });
   var a = t(86070),
    i = t(30758);
   const r = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   function l(e, n, t, a, i) {
    const r = { '@context': 'https://schema.org', '@type': 'VideoObject', name: (null == i ? void 0 : i.name) || n, thumbnailUrl: [(null == i ? void 0 : i.thumbnailUrl) || t], embedUrl: (null == i ? void 0 : i.embedUrl) || `${a}/embed/${e}`, contentUrl: (null == i ? void 0 : i.contentUrl) || `https://www.youtube.com/watch?v=${e}`, ...((null == i ? void 0 : i.description) && { description: i.description }), ...((null == i ? void 0 : i.uploadDate) && { uploadDate: i.uploadDate }), ...((null == i ? void 0 : i.duration) && { duration: i.duration }) };
    return JSON.stringify(r);
   }
   const s = i.forwardRef(function (e, n) {
    const [t, s] = i.useState(!1),
     [o, d] = i.useState(e.alwaysLoadIframe || !1),
     c = encodeURIComponent(e.id),
     h = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     u = e.title,
     g = e.poster || 'hqdefault',
     p = e.announce || 'Watch',
     m = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     j = i.useMemo(() => {
      const n = new URLSearchParams({ ...(e.muted ? { mute: '1' } : {}), ...(m ? { autoplay: '1' } : {}), ...(e.enableJsApi ? { enablejsapi: '1' } : {}), ...(e.playlist ? { list: c } : {}) });
      return (
       e.params &&
        new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach((e, t) => {
         n.append(t, e);
        }),
       n
      );
     }, [e.muted, m, e.enableJsApi, e.playlist, c, e.params]),
     v = i.useMemo(() => (e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'), [e.cookie]),
     b = i.useMemo(() => (e.playlist ? `${v}/embed/videoseries?${j.toString()}` : `${v}/embed/${c}?${j.toString()}`), [e.playlist, v, c, j]),
     w = !e.thumbnail && !e.playlist && 'maxresdefault' === g,
     f = e.webp ? 'webp' : 'jpg',
     k = e.webp ? 'vi_webp' : 'vi',
     x = w
      ? ((e, n, t, a = 'maxresdefault') => {
         const [l, s] = (0, i.useState)('');
         return (
          (0, i.useEffect)(() => {
           const i = `https://img.youtube.com/${n}/${e}/${a}.${t}`,
            l = `https://img.youtube.com/${n}/${e}/hqdefault.${t}`,
            o = r[a],
            d = new Image();
           ((d.onload = () => {
            d.width < o ? s(l) : s(i);
           }),
            (d.onerror = () => s(l)),
            (d.src = i));
          }, [e, n, t, a]),
          l
         );
        })(e.id, k, f, g)
      : null,
     y = i.useMemo(() => e.thumbnail || x || `https://i.ytimg.com/${k}/${e.playlist ? h : c}/${g}.${f}`, [e.thumbnail, x, k, e.playlist, h, c, g, f]),
     T = e.activatedClass || 'lyt-activated',
     A = e.adNetwork || !1,
     z = e.aspectHeight || 9,
     C = e.aspectWidth || 16,
     _ = e.iframeClass || '',
     L = e.playerClass || 'lty-playbtn',
     W = e.wrapperClass || 'yt-lite',
     M = i.useCallback(e.onIframeAdded || function () {}, [e.onIframeAdded]),
     G = e.rel ? 'prefetch' : 'preload',
     D = e.containerElement || 'article',
     R = !1 !== e.noscriptFallback;
    return (
     i.useEffect(() => {
      o && (M(), e.focusOnLoad && 'object' == typeof n && null != n && n.current && n.current.focus());
     }, [o, M, e.focusOnLoad, n]),
     (0, a.jsxs)(a.Fragment, {
      children: [
       !e.lazyLoad && (0, a.jsx)('link', { rel: G, href: y, as: 'image' }),
       (0, a.jsx)(a.Fragment, { children: t && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: v }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://www.google.com' }), A && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), (0, a.jsx)('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })] })] }) }),
       e.seo && !e.playlist && (0, a.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: l(e.id, u, y, v, e.seo) } }),
       R && !e.playlist && (0, a.jsx)('noscript', { children: (0, a.jsxs)('a', { href: `https://www.youtube.com/watch?v=${e.id}`, 'aria-label': `Watch ${u} on YouTube`, children: ['Watch "', u, '" on YouTube'] }) }),
       (0, a.jsxs)(D, {
        onPointerOver: () => {
         t || s(!0);
        },
        onClick: () => {
         o || d(!0);
        },
        className: `${W} ${o ? T : ''}`,
        'data-title': u,
        role: o ? void 0 : 'img',
        'aria-label': o ? void 0 : `${u} - YouTube video preview`,
        style: { ...(!e.lazyLoad && { backgroundImage: `url(${y})` }), '--aspect-ratio': (z / C) * 100 + '%', ...(e.style || {}) },
        children: [e.lazyLoad && !o && (0, a.jsx)('img', { src: y, alt: `${u} - YouTube thumbnail`, className: 'lty-thumbnail', loading: 'lazy' }), (0, a.jsx)('button', { type: 'button', className: L, 'aria-label': `${p} ${u}`, 'aria-hidden': o || void 0, tabIndex: o ? -1 : 0, children: (0, a.jsx)('span', { className: 'lty-visually-hidden', children: p }) }), o && (0, a.jsx)('iframe', { ref: n, className: _, title: u, width: '560', height: '315', style: { border: 0 }, allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: b, referrerPolicy: e.referrerPolicy || 'strict-origin-when-cross-origin' })],
       }),
      ],
     })
    );
   });
  },
  80003(e, n, t) {
   t.d(n, { E: () => l });
   var a = t(46447),
    i = t(72642),
    r = t(86070);
   const l = ({ children: e, conformanceLevel: n, ...t }) => (0, r.jsx)(i.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, r.jsx)(a.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...t, children: e });
  },
 },
]);
