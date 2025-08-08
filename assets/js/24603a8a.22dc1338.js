'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [95635],
 {
  51933: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => p, contentTitle: () => g, default: () => v, frontMatter: () => k, metadata: () => u, toc: () => j });
   var r = i(52676),
    t = i(40139),
    l = i(57716),
    s = i(46364),
    a = i(16167),
    o = i(60256),
    d = i(99042),
    c = i(91114),
    h = i(15953);
   const k = { title: 'WCAG-succescriterium 2.4.4 Linkdoel (in context)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.4 Linkdoel (in context)', pagination_label: 'WCAG-succescriterium 2.4.4 Linkdoel (in context)', description: 'De linktekst vertelt aan de gebruiker waar de link naar toe gaat (het linkdoel).', slug: '2.4.4', keywords: ['WCAG', 'A', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'link purpose (in context)'] },
    g = void 0,
    u = { id: 'wcag/2.4.04', title: 'WCAG-succescriterium 2.4.4 Linkdoel (in context)', description: 'De linktekst vertelt aan de gebruiker waar de link naar toe gaat (het linkdoel).', source: '@site/docs/wcag/2.4.04.mdx', sourceDirName: 'wcag', slug: '/wcag/2.4.4', permalink: '/wcag/2.4.4', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.04.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.4.4 Linkdoel (in context)', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.4 Linkdoel (in context)', pagination_label: 'WCAG-succescriterium 2.4.4 Linkdoel (in context)', description: 'De linktekst vertelt aan de gebruiker waar de link naar toe gaat (het linkdoel).', slug: '2.4.4', keywords: ['WCAG', 'A', 'bedienbaar', 'navigeerbaar', 'operable', 'navigable', 'link purpose (in context)'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.4.3 Focus volgorde', permalink: '/wcag/2.4.3' }, next: { title: 'WCAG-succescriterium 2.4.5 Meerdere manieren', permalink: '/wcag/2.4.5' } },
    p = {},
    j = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 },
     { value: 'Fout: De hele inhoud van een card/teaser/tile is de linktekst', id: 'fout-de-hele-inhoud-van-een-cardteasertile-is-de-linktekst', level: 3 },
     { value: 'Fout: Verkeerde linktekst voor een link met een afbeelding', id: 'fout-verkeerde-linktekst-voor-een-link-met-een-afbeelding', level: 3 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function m(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(s.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.4.4 Linkdoel (in context)' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(h.ZP, {}), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Een linktekst wordt voor dit succescriterium niet afgekeurd als de betekenis voor alle gebruikers onduidelijk is. Wat natuurlijk niet wegneemt dat dit voor iedereen een slechte gebruikerservaring is.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Een eenduidige tekst is belangrijk voor alle gebruikers, zodat ze goed weten wat er gebeurt bij het aanklikken van een link. Gebruikers van ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' kunnen een lijst van alle links op een pagina oproepen en zo snel door de website navigeren, maar dan moeten de linkteksten wel onderscheidbaar zijn.'] }), '\n', (0, r.jsx)(n.p, { children: 'Het kan overduidelijk zijn waar een link heen gaat, maar soms is meer context nodig. Zijn er veel links met dezelfde linktekst op een pagina? Maak dan onderscheid tussen de linktekst door het toevoegen van meer informatie.' }), '\n', (0, r.jsx)(n.p, { children: 'Voor ziende gebruikers kan duidelijk zijn waar een "Lees meer" link naar toe gaat, als deze linktekst onder een korte samenvatting staat. Om het voor screenreadergebruikers ook duidelijk te maken waar de link naar toe gaat kan er extra tekst worden toegevoegd die onzichtbaar, maar wel hoorbaar is.' }), '\n', (0, r.jsxs)(n.p, { children: ['Dit kan door gebruik te maken van CSS-classes zoals ', (0, r.jsx)(n.a, { href: 'https://tailwindcss.com/docs/screen-readers', children: '.sr-only' }), ' of ', (0, r.jsx)(n.a, { href: 'https://make.wordpress.org/accessibility/handbook/markup/the-css-class-screen-reader-text/', children: '.screen-reader-text' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'In code:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<a href="url">Lees meer<span class="sr-only"> over warmtepompen</a>.\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Of door het toevoegen van een ', (0, r.jsx)(n.code, { children: 'aria-label' }), ' aan de link.'] }), '\n', (0, r.jsx)(n.p, { children: 'In code:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<a href="url" aria-label="Lees meer over warmtepompen">Lees meer</a>.\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Ook in tekstparagrafen is een duidelijke linktekst belangrijk. Vergelijk de scanbaarheid en duidelijkheid van de volgende twee voorbeelden.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://nl.wikipedia.org/wiki/Waddenzee', children: 'Klik hier' }), ' om verder te lezen over de Waddenzee.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Lees verder over ', (0, r.jsx)(n.a, { href: 'https://nl.wikipedia.org/wiki/Waddenzee', children: 'de Waddenzee' }), '.'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ["\u2018Klik hier\u2019 is de slechtste linktekst die er is. Alle gebruikers moeten eerst de hele zin lezen om te weten waar de link naar toe gaat. Specifiek voor gebruikers met een screenreader die een lijst van links opvragen is het zeer onduidelijk als er \xe9\xe9n of meer keer \u2018Klik hier\u2019 in die lijst staat. De linktekst \u2018de Waddenzee\u2019 voor een link naar informatie over de Waddenzee werkt juist heel goed. De linktekst schept hier een verwachting die goed aansluit bij het linkdoel.\nVermijd ook het linken van een hele URL, zoals in 'Lees verder op ", (0, r.jsx)(n.a, { href: 'https://nl.wikipedia.org/wiki/Waddenzee', children: 'https://nl.wikipedia.org/wiki/Waddenzee' }), "'."] }), '\n', (0, r.jsxs)(n.p, { children: ['In de blogpost ', (0, r.jsx)(n.a, { href: 'https://www.a11y-collective.com/blog/the-perfect-link/', children: (0, r.jsx)('span', { lang: 'en', children: 'The perfect link' }) }), ' staan uitgebreid voorbeelden en toepassingen van goede linkteksten.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Content: ', (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/linkteksten', children: 'Toegankelijke linkteksten' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://yoast.com/what-is-anchor-text/', children: 'What is anchor text?' }), ' van Yoast.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.nngroup.com/articles/better-link-labels/', children: 'Better Link Labels: 4Ss for Encouraging Clicks' }), ' van de Nielsen Norman Group.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.webdesignerdepot.com/2018/07/8-secrets-of-the-perfect-link/', children: '8 Secrets of the Perfect Link' }), ' van Web Designer Depot.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2012/06/links-should-never-say-click-here/', children: 'Why Your Links Should Never Say \u201cClick Here\u201d' }), ' van Smashing Magazine.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.a11y-collective.com/blog/the-perfect-link/', children: (0, r.jsx)('span', { lang: 'en', children: 'The perfect link' }) }), ' van The A11Y Collective.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(o.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Goede tools voor het controleren voor dit succescriterium:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'De accessibility tree van je browser.' }), '\n', (0, r.jsxs)(n.li, { children: ['Een screenreader, bijvoorbeeld ', (0, r.jsx)(n.a, { href: 'https://www.nvaccess.org/download/', children: 'NVDA voor Windows' }), ' of ', (0, r.jsx)(n.a, { href: 'https://support.apple.com/nl-nl/guide/voiceover/welcome/mac', children: 'VoiceOver/Safari' }), ' voor MacOS.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Controleer de linkteksten:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Heeft de link een ', (0, r.jsx)(n.a, { href: '/wcag/4.1.2', children: 'toegankelijke naam' }), '?'] }), '\n', (0, r.jsx)(n.li, { children: 'Beschrijft de linktekst duidelijk en eenduidig het linkdoel, of kan dit doel uit de omringende content worden begrepen?' }), '\n', (0, r.jsx)(n.li, { children: 'Is de linktekst en het linkdoel ook door gebruikers van hulpmiddelen te begrijpen?' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, r.jsx)(n.h3, { id: 'fout-de-hele-inhoud-van-een-cardteasertile-is-de-linktekst', children: 'Fout: De hele inhoud van een card/teaser/tile is de linktekst' }), '\n', (0, r.jsx)(n.p, { children: 'Om een card/teaser/tile helemaal te linken wordt er een link om de hele inhoud gezet. Dit leidt tot een onleesbare linktekst voor screenreadergebruikers.' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Foute code, niet gebruiken --\x3e\n<a href="url">\n  <img src="url" alt="Tulpen" />\n  <h3>Wanneer bloeien tulpen?</h3>\n  <p>\n    Op welk moment bloeien tulpen precies en waar kun je de prachtigste tulpenvelden vinden? Ontdek hier alles over de\n    lentepracht van Nederlandse bloemen <span>Lees meer ... </span>\n  </p>\n</a>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'De linktekst wordt dan:\n\u2018Tulpen Wanneer bloeien tulpen? Op welk moment bloeien tulpen precies en waar kun je de prachtigste tulpenvelden vinden? Ontdek hier alles over de lentepracht van Nederlandse bloemen. Lees meer ...\u2019' }), '\n', (0, r.jsx)(n.p, { children: 'Deze constructie om een card te linken is een ramp om naar te luisteren met een screenreader.' }), '\n', (0, r.jsx)(n.p, { children: 'Mogelijke oplossingen:' }), '\n', (0, r.jsxs)(n.p, { children: ['Florian Schroiff beschrijft hoe een card aanklikbaar te maken via CSS met een ', (0, r.jsx)(n.a, { href: 'https://www.frontendbbq.com/articles/accessible-teaser', children: 'pseudo-element link overlay' }), '. In de YouTube video ', (0, r.jsx)(n.a, { href: 'https://www.youtube.com/watch?v=AH2NagMoYYE', children: 'What makes an accessible card?' }), ' onderzoekt Rian Rietveld de manieren om een card zo toegankelijk mogelijk te maken.'] }), '\n', (0, r.jsx)(n.h3, { id: 'fout-verkeerde-linktekst-voor-een-link-met-een-afbeelding', children: 'Fout: Verkeerde linktekst voor een link met een afbeelding' }), '\n', (0, r.jsx)(n.p, { children: 'Een link naar de voorpagina die een afbeelding van het logo bevat in de header is een bekend patroon.\nEen veel voorkomende fout is bijvoorbeeld de alt-tekst \u2018Logo gemeente Voorbeeld\u2019.\nDe alt-tekst beschrijft de afbeelding. Maar de alt tekst is hier ook de toegankelijke naam van de link.\nIn code:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Dit is fout, niet gebruiken --\x3e\n<a href="link-url">\n  <img src="img-url" alt="Logo gemeente Voorbeeld" />\n</a>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'De toegankelijke naam van de link is in dit geval de alt-tekst en de linktekst wordt dus \u2018Logo gemeente Voorbeeld\u2019.\nDit is geen goede toegankelijke naam. De naam beschrijft niet waar de link naar toe gaat.' }), '\n', (0, r.jsx)(n.p, { children: 'Een goede oplossing is de alt-tekst te wijzigen in \u2018Gemeente Voorbeeld logo, naar de homepagina\u2019.' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<a href="link-url">\n  <img src="img-url" alt="Gemeente Voorbeeld logo, naar de homepagina" />\n</a>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Dan vertel je wat er op de afbeelding staat en waar de link naar toe gaat.\nVoiceOver leest dit voor als: \u2018Link, afbeelding, Gemeente Voorbeeld logo, naar de voorpagina\u2019.' }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#link-purpose-in-context', children: (0, r.jsx)('span', { lang: 'en', children: '2.4.4 Link Purpose (In Context)' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl//#linkdoel-in-context', children: '2.4.4 Linkdoel (in context)' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.4 Link Purpose (In Context)' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.4 Link Purpose (In Context)' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(a.CY, { children: (0, r.jsx)(l.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(l.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e);
   }
  },
  60256: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var r = i(52676),
    t = i(40139);
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  99042: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var r = i(52676),
    t = i(40139);
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  91114: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var r = i(52676),
    t = i(40139);
   function l(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  15953: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var r = i(52676),
    t = i(40139);
   function l(e) {
    const n = { p: 'p', strong: 'strong', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De linktekst vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).' }), '\n', (0, r.jsxs)(n.p, { children: ['Wat is een ', (0, r.jsx)(n.strong, { children: 'linktekst' }), '? Het is de tekst die zichtbaar is, maar ook de tekst die aan een gebruiker van hulpsoftware wordt voorgelezen.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wat is het ', (0, r.jsx)(n.strong, { children: 'linkdoel' }), '? De locatie waar de link naartoe gaat. Bijvoorbeeld de contactpagina, een nieuwsbericht, een andere website of een download van een document.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wat betekent ', (0, r.jsx)(n.strong, { children: 'In context' }), '? Het doel van de link kan ook door omringende content worden aangegeven. Dit moet dan wel ook voor gebruikers van hulpmiddelen duidelijk zijn, bijvoorbeeld door aanvullende tekst of een afbeelding naast de link. Dit laatste is onderwerp van veel discussie. Het beste is om altijd goed in de linktekst zelf te vertellen want het doel is.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => l });
   var r = i(4814),
    t = i(52676);
   const l = (e) => {
    let { children: n, className: i, level: l = 1, suffix: s, ...a } = e;
    return (0, t.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${l}`, i), ...a, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var r = i(40139),
    t = i(16167),
    l = i(52676);
   const s = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    a = { 1: {}, 2: { h1: t.XJ, h2: t.aC, h3: t.k8, h4: t.by, h5: t.Cd }, 3: { h1: t.aC, h2: t.k8, h3: t.by, h4: t.Cd, h5: t.Cd }, 4: { h1: t.k8, h2: t.by, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 5: { h1: t.by, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 6: { h1: t.Cd, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd } },
    o = (e) => ({
     img: (n) => {
      let { src: i, ...r } = n;
      return (0, l.jsx)('img', { ...r, src: s(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: t = 1, baseUrl: s = '', components: a = {} } = e;
     return (0, l.jsx)(r.Z, { components: { ...d(i, t), ...o(s), ...a }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => s });
   var r = i(16167),
    t = i(41757),
    l = i(52676);
   const s = (e) => {
    let { children: n, conformanceLevel: i, ...s } = e;
    return (0, l.jsx)(t.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, l.jsx)(r.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...s, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => s });
   var r = i(75271);
   const t = {},
    l = r.createContext(t);
   function s(e) {
    const n = r.useContext(l);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
