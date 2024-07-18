(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [43166],
 {
  29943: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => j, component: () => y, contentTitle: () => h, default: () => v, description: () => p, frontMatter: () => d, issueNumber: () => b, metadata: () => u, title: () => g, toc: () => m });
   var r = t(52676),
    i = t(24785),
    a = t(50549);
   function o(e) {
    const n = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'tabel', children: 'Tabel' }), '\n', (0, r.jsx)(n.p, { children: "Er zijn eindeloos veel varianten van de tabel, daarom is het niet mogelijk op \xe9\xe9n pagina een volledig overzicht te hebben met tips. Op deze pagina zullen we algemene tips geven. In de toekomst willen we losse pagina's aanbieden voor speciale soorten tabellen." }), '\n', (0, r.jsx)(n.h2, { id: 'duidelijke-koppen', children: 'Duidelijke koppen' }), '\n', (0, r.jsxs)(n.p, { children: ["In tabellen staat vaak veel informatie en daarom helpen koppen gebruikers om snel informatie over te slaan die niet relevant is. De data in tabellen kan op drie niveau's koppen bevatten: kop van de tabel (", (0, r.jsx)(n.em, { children: 'caption' }), '), kop van de kolom (', (0, r.jsx)(n.em, { children: 'column header' }), ') en kop van de rij (', (0, r.jsx)(n.em, { children: 'row header' }), '). Het is belangrijk dat je precies de goede HTML gebruikt voor elke kop:'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<caption>' }), ' voor de kop van de tabel'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<th scope="col">' }), ' voor de kop van de kolom'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<th scope="row">' }), ' voor de kop van de rij'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'sorteer-de-tabelrijen', children: 'Sorteer de tabelrijen' }), '\n', (0, r.jsx)(n.p, { children: 'Voor screen reader gebruikers is het belangrijk dat je de kolom kunt vinden waarop gesorteerd is, en dat je makkelijk vanuit die kolom naar de vorige of volgende rij kunt gaan om snel de relevante rij te vinden. Wanneer je informatie zoekt op een bepaalde datum dan is het belangrijk dat je met \xe9\xe9n druk op de knop naar de volgende datum kunt gaan, daarna nog een keer, enzovoorts.' }), '\n', (0, r.jsx)(n.p, { children: 'Als je de informatie niet kan vinden bij de datum die je verwacht, dan is het belangrijk om te weten dat op datum is gesorteerd: alleen dan kun weet je zeker dat de informatie helemaal niet in de tabel staat.' }), '\n', (0, r.jsxs)(n.p, { children: ['Plaats de gegevens waarop gesorteerd is in een eigen kolom, en geef met ', (0, r.jsx)(n.code, { children: 'aria-sort="\u2026"' }), ' aan dat deze kolom de volgorde bepaalt.'] }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<table>\n  <caption>\n    Openingstijden gemeentehuis\n  </caption>\n  <thead>\n    <tr>\n      <th scope="col" aria-sort="ascending">Dag</th>\n      <th scope="col">Geopend</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">Maandag</th>\n      <td>12:00\u201418:00</td>\n    </tr>\n    <tr>\n      <th scope="row">Dinsdag</th>\n      <td>08:00\u201418:00</td>\n    </tr>\n    \u2026\n  </tbody>\n</table>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je geeft met de volgende code aan in welke volgorde de informatie staat:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: 'aria-sort="ascending"' }), ' voor "oplopende volgorde", bijvoorbeeld namen van A tot Z (namen), van bedragen en aantallen van klein naar groot, geplande activiteiten van eerdere naar latere datums'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: 'aria-sort="descending"' }), ' voor "aflopende volgorde", bijvoorbeeld namen van Z naar A, ontvangen berichten van nieuw naar oud, bedragen en aantallen van groot naar klein'] }), '\n'] }), '\n', (0, r.jsxs)(n.h2, { id: 'responsive-tabellen', children: [(0, r.jsx)(n.em, { children: 'Responsive' }), ' tabellen'] }), '\n', (0, r.jsx)(n.p, { children: "Volgens WCAG 1.4.10 moeten pagina's leesbaar zijn bij een breedte van 1280px met 400% zoom, zonder dat horizontaal scrollen nodig is. Datatabellen worden genoemd als uitzondering, maar een voor een betere gebruiksvriendelijkheid zijn er technieken om te herkennen dat een tabel niet goed bekeken kan worden en in die situaties een alternatieve layout te gebruiken. Met CSS media queries of container queries kun je herkennen dat er niet voldoende ruimte is voor een tabel, en vervolgens heb je twee opties:" }), '\n', (0, r.jsxs)(n.p, { children: ['Techniek 1: de bestaande ', (0, r.jsx)(n.code, { children: 'table' }), '-HTML niet te tonen als tabel door met CSS een andere ', (0, r.jsx)(n.code, { children: 'display' }), ' te gebruiken voor ', (0, r.jsx)(n.code, { children: 'table' }), ', ', (0, r.jsx)(n.code, { children: 'td' }), ' en alle andere tabel-elementen. ', (0, r.jsx)(n.em, { children: 'Tabel-elementen niet weergeven als tabel kan de toegankelijkheid van de informatie kapot maken.' }), ' Deze techniek gaat in de praktijk heel vaak mis. Gebruik deze techniek alleen als je vaak gebruikerstesten doet voor toegankelijkheid.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Techniek 2: HTML aanbieden in twee varianten. Naast de HTML ', (0, r.jsx)(n.code, { children: '<table>' }), ' element, ook de gegevens tonen met HTML elementen die niet zoveel ruimte nodig hebben in twee dimensies, zoals koppen met daaronder een datalijst. Afhankelijk van de situatie verberg je de \xe9ne of de andere variant.'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-het-niet-moet', children: 'Hoe het niet moet' }), '\n', (0, r.jsx)(n.h3, { id: 'koppen-niet-gekoppeld', children: 'Koppen van tabel niet gekoppeld aan datacellen' }), '\n', (0, r.jsx)(n.p, { children: "Tabellen bevatten vaak veel informatie, daarom kan het gebruikers heel veel tijd kosten om de relevante informatie te vinden als je niet de goede HTML gebruikt voor de 3 niveau's van koppen. Gebruikers die de tabel visueel kunnen waarnemen hebben het voordeel dat je kan zien dat er een kop is bovenaan de kolom, of aan het begin van de regel, en kunnen de kop herkennen omdat die bijvoorbeeld vetgedrukt is." }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#info-and-relationships', children: 'WCAG 2.1, 1.3.1' }), ' zegt dat het belangrijk is om voor gebruikers die niet die relaties kunnen zien zoals de twee-dimensionale opmaak of vetgedrukte tekst, code te gebruiken waardoor bijvoorbeeld screen readers ook weten welke koppen bij de cel hoort.'] }), '\n', (0, r.jsx)(n.h4, { id: 'tabel-kop-niet-gekoppeld', children: 'Kop van de tabel niet gekoppeld' }), '\n', (0, r.jsx)(n.p, { children: 'Niet:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<h2>Openingstijden</h2>\n<table>\n  <thead>\n    \u2026\n  </thead>\n</table>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Wel:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<table>\n  <caption class="heading-2">\n    Openingstijden\n  </caption>\n  <thead>\n    \u2026\n  </thead>\n</table>\n' }) }), '\n', (0, r.jsx)(n.h4, { id: 'tabelrij-kop-niet-gekoppeld', children: 'Kop van de tabelrij niet gekoppeld' }), '\n', (0, r.jsx)(n.p, { children: 'Niet:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<tr>\n  <td>\n    <strong>maandag</strong>\n  </td>\n  <td>gesloten</td>\n</tr>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Wel:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<tr>\n  <th scope="row">maandag</td>\n  <td>gesloten</td>\n</tr>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-tabel-kop-in-de-tabel', children: 'Kop van de tabel in de tabel zelf' }), '\n', (0, r.jsx)(n.p, { children: 'Niet:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<table>\n  <thead>\n    <tr>\n      <th colspan="2">Openingstijden</th>\n    </tr>\n  </thead>\n  \u2026\n</table>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Wel:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<table>\n  <caption>\n    Openingstijden\n  </caption>\n  \u2026\n</table>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-grote-afstand-tussen-kolommen', children: 'Afstand tussen kolommen is te groot' }), '\n', (0, r.jsx)(n.p, { children: 'Je moet goed kunnen zien welke cellen bij elkaar horen. Een tabel die breed is en relatief weinig informatie bevat, is moeilijk te begrijpen als er veel lege ruimte zit tussen de cellen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Voorkom teveel lege ruimte: gebruik bijvoorbeeld niet ', (0, r.jsx)(n.code, { children: 'width: 100%' }), ' voor een tabel met openingstijden. Kies per tabel welke breedte het meest duidelijk is. Als er lege ruimte ontstaat, zorg dan dat die niet tussen kolommen is, maar plaats de lege ruimte aan het eind van de laatste kolom.'] }), '\n', (0, r.jsxs)(n.h3, { id: 'geen-eigen-css-display', children: ['Tabel niet toegankelijk door eigen CSS ', (0, r.jsx)(n.code, { children: 'display' })] }), '\n', (0, r.jsxs)(n.p, { children: ['Screen readers maken het begrijpen van HTML-tabellen makkelijk, want ze kunnen voor elke datacel de context geven. Hier voor is het belangrijk dat de automatische tools zoals screen readers uit de code begrijpen wat de ', (0, r.jsx)(n.em, { children: 'column header' }), ' is en wat de ', (0, r.jsx)(n.em, { children: 'row header' }), ' is.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer je met CSS ', (0, r.jsx)(n.code, { children: 'display' }), ' aanpast om een tabel een andere layout te geven, dan is niet meer een tabel in de ', (0, r.jsx)(n.em, { children: 'accessibility tree' }), ' en maak je de relatie tussen de ', (0, r.jsx)(n.em, { children: 'data cell' }), ' en de ', (0, r.jsx)(n.em, { children: 'header cell' }), ' kapot. Tabellen waarvan de ', (0, r.jsx)(n.code, { children: 'display' }), ' wordt aangepast werken daarom niet meer in screen readers, tenzij de ', (0, r.jsx)(n.em, { children: 'accessibility tree' }), ' door extra code wordt hersteld.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Je kunt voorkomen dat de ', (0, r.jsx)(n.em, { children: 'accessibility tree' }), ' anders wordt opgebouwd. Je moet dan op \xe9lk element van de tabel expliciet zeggen welke ', (0, r.jsx)(n.code, { children: 'role' }), ' het heeft. Omdat deze techniek veel extra werk geeft en foutgevoelig is, raden wij aan om alternatieven te kiezen zoals niet ', (0, r.jsx)(n.code, { children: 'display' }), ' aanpassen of twee varianten maken.'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<caption id="unique-id-here">' }), ' samen met ', (0, r.jsx)(n.code, { children: '<table aria-labelledby="unique-id-here">' })] }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<table role="table">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<tbody role="table-row-group">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<td role="cell">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<tfoot role="table-row-group">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<th scope="col" role="columnheader">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<th scope="row" role="rowheader">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<thead role="table-row-group">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<tr role="table-row">' }) }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'links', children: 'Links' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table', children: ['MDN: ', (0, r.jsx)(n.code, { children: '<table>' }), ': The Table element'] }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort', children: ['MDN: ', (0, r.jsx)(n.code, { children: 'aria-sort' })] }) }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'relevante-wcag-regels', children: 'Relevante WCAG regels' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/#reflow', children: 'WCAG 1.4.10' }) }), '\n'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
   var c = t(60851),
    l = t(57716);
   const d = { title: 'Table', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Table', pagination_label: 'Table', description: 'Structureert data in rijen en kolommen.', slug: '/table' },
    h = void 0,
    u = { id: 'componenten/table/index', title: 'Table', description: 'Structureert data in rijen en kolommen.', source: '@site/docs/componenten/table/index.mdx', sourceDirName: 'componenten/table', slug: '/table', permalink: '/table', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/table/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Table', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Table', pagination_label: 'Table', description: 'Structureert data in rijen en kolommen.', slug: '/table' }, sidebar: 'componenten', previous: { title: 'Switch', permalink: '/switch' }, next: { title: 'Tabs', permalink: '/tabs' } },
    j = {},
    m = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Richtlijnen', id: 'richtlijnen', level: 2 },
     { value: 'Levende Backlog', id: 'levende-backlog', level: 2 },
    ],
    g = 'Table',
    p = 'Structureert data in rijen en kolommen.',
    b = '',
    y = a.find((e) => e.number === b);
   function k(e) {
    const n = { h2: 'h2', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, r.jsx)(c.Rv, { component: y, headingLevel: 1, description: p }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(c.cN, { component: y, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'implementaties', children: 'Implementaties' }), '\n', (0, r.jsx)(c.W, { component: y, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'richtlijnen', children: 'Richtlijnen' }), '\n', (0, r.jsx)(l.U, { omitH1: !0, headingLevel: 3, children: (0, r.jsx)(s, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'levende-backlog', children: 'Levende Backlog' }), '\n', (0, r.jsx)(c.Gn, { component: y, headingLevel: 3 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
  82489: (e, n, t) => {
   var r = { './utrecht-alert_46.entry.js': [35914, 35914], './utrecht-backdrop.entry.js': [78370, 78370], './utrecht-breadcrumb-nav.entry.js': [87636, 87636], './utrecht-checkbox.entry.js': [43264, 43264], './utrecht-column-layout.entry.js': [85895, 85895], './utrecht-contact-card-template.entry.js': [28535, 28535], './utrecht-custom-checkbox.entry.js': [72109, 72109], './utrecht-data-list-actions.entry.js': [11828, 11828], './utrecht-data-list-item.entry.js': [7075, 7075], './utrecht-data-list-key.entry.js': [66376, 66376], './utrecht-data-list-value.entry.js': [57468, 57468], './utrecht-data-list.entry.js': [75315, 75315], './utrecht-digid-button.entry.js': [95967, 95967], './utrecht-digid-logo.entry.js': [45213, 45213], './utrecht-eherkenning-logo.entry.js': [61466, 61466], './utrecht-eidas-logo.entry.js': [93136, 93136], './utrecht-form-field-error-message.entry.js': [62090, 62090], './utrecht-form-toggle.entry.js': [22473, 22473], './utrecht-html-content.entry.js': [78498, 78498], './utrecht-icon-afspraak-maken.entry.js': [82661, 82661], './utrecht-icon-afval-container.entry.js': [24369, 24369], './utrecht-icon-afval-containerpas.entry.js': [34427, 34427], './utrecht-icon-afval-kalender.entry.js': [12291, 12291], './utrecht-icon-afval-pmd.entry.js': [94590, 94590], './utrecht-icon-afval-scheiden.entry.js': [44487, 44487], './utrecht-icon-afval.entry.js': [6003, 6003], './utrecht-icon-afvalkalender.entry.js': [57413, 57413], './utrecht-icon-alleen.entry.js': [97461, 97461], './utrecht-icon-arrow.entry.js': [30580, 30580], './utrecht-icon-auto.entry.js': [14251, 14251], './utrecht-icon-begroting.entry.js': [58789, 58789], './utrecht-icon-bestemmingsplan.entry.js': [36753, 36753], './utrecht-icon-betaaldatum.entry.js': [88601, 88601], './utrecht-icon-bewijsstukken.entry.js': [2510, 2510], './utrecht-icon-bijstand.entry.js': [97616, 97616], './utrecht-icon-blad.entry.js': [44618, 44618], './utrecht-icon-bouwproject.entry.js': [3338, 3338], './utrecht-icon-brandgevaar.entry.js': [43387, 43387], './utrecht-icon-brief-betalen.entry.js': [97558, 97558], './utrecht-icon-checkmark.entry.js': [76879, 76879], './utrecht-icon-chevron-down.entry.js': [1101, 1101], './utrecht-icon-chevron-left.entry.js': [64317, 64317], './utrecht-icon-chevron-right.entry.js': [49109, 49109], './utrecht-icon-chevron-up.entry.js': [38715, 38715], './utrecht-icon-close.entry.js': [16870, 16870], './utrecht-icon-college-b-w.entry.js': [39159, 39159], './utrecht-icon-container-bio.entry.js': [93639, 93639], './utrecht-icon-container-glas.entry.js': [27266, 27266], './utrecht-icon-container-groenafval.entry.js': [24062, 24062], './utrecht-icon-container-met-zak.entry.js': [17143, 17143], './utrecht-icon-container-papier.entry.js': [13006, 13006], './utrecht-icon-container-pmd.entry.js': [19085, 19085], './utrecht-icon-container-restafval.entry.js': [14891, 14891], './utrecht-icon-container-textiel.entry.js': [62693, 62693], './utrecht-icon-container.entry.js': [40428, 40428], './utrecht-icon-cross.entry.js': [15791, 15791], './utrecht-icon-dakloos.entry.js': [30328, 30328], './utrecht-icon-dementie.entry.js': [72816, 72816], './utrecht-icon-documenten.entry.js': [67328, 67328], './utrecht-icon-duurzaam.entry.js': [22458, 22458], './utrecht-icon-eenzaamheid.entry.js': [27430, 27430], './utrecht-icon-eikenprocessie.entry.js': [77518, 77518], './utrecht-icon-elektrisch-rijden.entry.js': [28077, 28077], './utrecht-icon-energie-vergoeding.entry.js': [77586, 77586], './utrecht-icon-energietransitie.entry.js': [3899, 3899], './utrecht-icon-error.entry.js': [80718, 80718], './utrecht-icon-evenementen.entry.js': [34208, 34208], './utrecht-icon-facebook.entry.js': [95700, 95700], './utrecht-icon-fiets.entry.js': [74613, 74613], './utrecht-icon-filter.entry.js': [16550, 16550], './utrecht-icon-geboorte.entry.js': [88448, 88448], './utrecht-icon-gebruiker-centraal.entry.js': [13120, 13120], './utrecht-icon-gebruiker-ingelogd.entry.js': [26259, 26259], './utrecht-icon-gegevenswoordenboek.entry.js': [88940, 88940], './utrecht-icon-geluid.entry.js': [78887, 78887], './utrecht-icon-gemeente-locatie.entry.js': [82769, 82769], './utrecht-icon-gemeenteraad.entry.js': [94051, 94051], './utrecht-icon-gereedschap.entry.js': [74492, 74492], './utrecht-icon-gezicht.entry.js': [96320, 96320], './utrecht-icon-gezin.entry.js': [10844, 10844], './utrecht-icon-glas-afval.entry.js': [25085, 25085], './utrecht-icon-glijbaan.entry.js': [77720, 77720], './utrecht-icon-grafiek.entry.js': [591, 591], './utrecht-icon-grofvuil-ophalen.entry.js': [68642, 10744], './utrecht-icon-grofvuil.entry.js': [26328, 26328], './utrecht-icon-hamburger-menu.entry.js': [12626, 12626], './utrecht-icon-herdenking.entry.js': [17093, 17093], './utrecht-icon-hondenbelasting.entry.js': [84492, 84492], './utrecht-icon-horeca.entry.js': [34543, 34543], './utrecht-icon-horecavergunning.entry.js': [7903, 7903], './utrecht-icon-huis-en-omgeving.entry.js': [15547, 15547], './utrecht-icon-huis.entry.js': [30872, 30872], './utrecht-icon-huishoudelijk-geweld.entry.js': [22217, 22217], './utrecht-icon-hulp-huishouden.entry.js': [57489, 57489], './utrecht-icon-hulp-vervoer.entry.js': [68564, 68564], './utrecht-icon-hulp-zorg.entry.js': [28832, 28832], './utrecht-icon-hulpmiddelen-gezin.entry.js': [8151, 8151], './utrecht-icon-hulpverlening.entry.js': [45578, 45578], './utrecht-icon-idee.entry.js': [8706, 8706], './utrecht-icon-informatie.entry.js': [14258, 14258], './utrecht-icon-information.entry.js': [90944, 90944], './utrecht-icon-innovatie.entry.js': [27218, 27218], './utrecht-icon-inspraak-inwoners.entry.js': [70448, 70448], './utrecht-icon-instagram.entry.js': [93562, 93562], './utrecht-icon-kalender.entry.js': [39540, 39540], './utrecht-icon-kennis.entry.js': [15218, 15218], './utrecht-icon-kerstbomen.entry.js': [14078, 14078], './utrecht-icon-klachten.entry.js': [47557, 47557], './utrecht-icon-kroon.entry.js': [77845, 77845], './utrecht-icon-laadpaal.entry.js': [51975, 51975], './utrecht-icon-language.entry.js': [61282, 61282], './utrecht-icon-lantaarnpaal-oud.entry.js': [39792, 39792], './utrecht-icon-lantaarnpaal.entry.js': [73457, 73457], './utrecht-icon-leren.entry.js': [40354, 40354], './utrecht-icon-let-op.entry.js': [55534, 55534], './utrecht-icon-linkedin.entry.js': [98, 98], './utrecht-icon-list-check.entry.js': [59816, 59816], './utrecht-icon-list-number.entry.js': [64596, 64596], './utrecht-icon-list.entry.js': [79548, 79548], './utrecht-icon-loupe.entry.js': [78905, 78905], './utrecht-icon-markt.entry.js': [86907, 86907], './utrecht-icon-melding-boom.entry.js': [24632, 24632], './utrecht-icon-melding-klacht.entry.js': [95311, 95311], './utrecht-icon-melding-openbareruimte.entry.js': [24644, 24644], './utrecht-icon-melding-verlichting.entry.js': [62232, 62232], './utrecht-icon-melding.entry.js': [27, 27], './utrecht-icon-menselijk.entry.js': [80444, 80444], './utrecht-icon-menu-dot-open.entry.js': [76990, 76990], './utrecht-icon-menu-dot.entry.js': [80841, 80841], './utrecht-icon-meterkast.entry.js': [35678, 35678], './utrecht-icon-milieu-ontheffing.entry.js': [68086, 68086], './utrecht-icon-milieu-zone.entry.js': [77660, 77660], './utrecht-icon-minus-vertical.entry.js': [87588, 87588], './utrecht-icon-minus.entry.js': [86232, 86232], './utrecht-icon-mobiliteit.entry.js': [47370, 47370], './utrecht-icon-natuur.entry.js': [75729, 75729], './utrecht-icon-nieuw-huis.entry.js': [80170, 80170], './utrecht-icon-nieuwsbrief.entry.js': [95839, 95839], './utrecht-icon-nummerbord.entry.js': [86095, 86095], './utrecht-icon-om-het-huis.entry.js': [78344, 78344], './utrecht-icon-omgeving.entry.js': [34631, 34631], './utrecht-icon-omgevingsvisie.entry.js': [92313, 92313], './utrecht-icon-omgevingswet.entry.js': [33994, 33994], './utrecht-icon-onderhoud.entry.js': [75222, 75222], './utrecht-icon-ondernemen.entry.js': [80819, 80819], './utrecht-icon-openingstijden.entry.js': [38629, 38629], './utrecht-icon-over-de-stad.entry.js': [92918, 92918], './utrecht-icon-overlijden.entry.js': [61356, 61356], './utrecht-icon-panden.entry.js': [95396, 95396], './utrecht-icon-park.entry.js': [61448, 61448], './utrecht-icon-parkeerkaart.entry.js': [77245, 77245], './utrecht-icon-parkeervergunning.entry.js': [84749, 84749], './utrecht-icon-parken.entry.js': [46839, 46839], './utrecht-icon-parkeren-bedrijven.entry.js': [9118, 9118], './utrecht-icon-parkeren-betaalautomaat.entry.js': [64926, 64926], './utrecht-icon-parkeren-betalen.entry.js': [1345, 1345], './utrecht-icon-parkeren.entry.js': [10454, 10454], './utrecht-icon-participatie-campagne.entry.js': [74054, 74054], './utrecht-icon-participatie-like.entry.js': [67088, 67088], './utrecht-icon-participatie-pitch.entry.js': [84929, 84929], './utrecht-icon-paspoort.entry.js': [76944, 76944], './utrecht-icon-presentatie.entry.js': [77179, 77179], './utrecht-icon-prijskaartje.entry.js': [30397, 30397], './utrecht-icon-read-aloud.entry.js': [28258, 28258], './utrecht-icon-rijbewijs.entry.js': [86107, 86107], './utrecht-icon-rioolheffing.entry.js': [9924, 9924], './utrecht-icon-rolstoel.entry.js': [10946, 10946], './utrecht-icon-schild-gemeente-utrecht.entry.js': [1144, 1144], './utrecht-icon-search.entry.js': [39911, 39911], './utrecht-icon-shoppen.entry.js': [95587, 95587], './utrecht-icon-sinterklaas.entry.js': [15508, 15508], './utrecht-icon-slechtziende-hoordende.entry.js': [36438, 36438], './utrecht-icon-sport-en-cultuur.entry.js': [54643, 54643], './utrecht-icon-sport-voetbal.entry.js': [33776, 33776], './utrecht-icon-sport.entry.js': [76389, 76389], './utrecht-icon-stookverbod.entry.js': [79526, 79526], './utrecht-icon-strand.entry.js': [76238, 76238], './utrecht-icon-strooien.entry.js': [39791, 39791], './utrecht-icon-subsidie-gezin.entry.js': [73481, 73481], './utrecht-icon-subsidie.entry.js': [34372, 34372], './utrecht-icon-t-shirt.entry.js': [42059, 42059], './utrecht-icon-thuiswerken.entry.js': [73612, 73612], './utrecht-icon-toeslag.entry.js': [8001, 8001], './utrecht-icon-trein.entry.js': [95981, 95981], './utrecht-icon-trouwen.entry.js': [13340, 13340], './utrecht-icon-twitter.entry.js': [4977, 55510], './utrecht-icon-user.entry.js': [95933, 95933], './utrecht-icon-uw-wijk.entry.js': [49509, 49509], './utrecht-icon-vaccinatie.entry.js': [20795, 20795], './utrecht-icon-veilige-wijk.entry.js': [73887, 73887], './utrecht-icon-vergaderen.entry.js': [86955, 86955], './utrecht-icon-vergaderendigitaal.entry.js': [54058, 54058], './utrecht-icon-vergoeding.entry.js': [44306, 44306], './utrecht-icon-verhuizen.entry.js': [32296, 32296], './utrecht-icon-verkeerslicht.entry.js': [49040, 49040], './utrecht-icon-verkiezingen.entry.js': [74518, 74518], './utrecht-icon-verslaving.entry.js': [2808, 2808], './utrecht-icon-vervoersvoorziening.entry.js': [90459, 90459], './utrecht-icon-virus.entry.js': [74513, 74513], './utrecht-icon-vluchtelingen.entry.js': [61823, 61823], './utrecht-icon-voorzieningen-vervoer.entry.js': [14275, 14275], './utrecht-icon-vrijwilligerswerk.entry.js': [2367, 2367], './utrecht-icon-vuilnisbak.entry.js': [60023, 60023], './utrecht-icon-vuilniszak.entry.js': [87830, 87830], './utrecht-icon-vuurwerk.entry.js': [76671, 77811], './utrecht-icon-wandelstok.entry.js': [75507, 75507], './utrecht-icon-warm.entry.js': [55046, 55046], './utrecht-icon-warning.entry.js': [2949, 2949], './utrecht-icon-werken.entry.js': [38313, 38313], './utrecht-icon-werkzaamheden.entry.js': [39239, 39239], './utrecht-icon-whatsapp.entry.js': [78901, 78901], './utrecht-icon-wonen-kosten.entry.js': [12698, 12698], './utrecht-icon-woning-zoeken.entry.js': [71409, 71409], './utrecht-icon-x.entry.js': [7775, 7775], './utrecht-icon-youtube.entry.js': [31933, 31933], './utrecht-icon-zelfstandig-wonen.entry.js': [83039, 83039], './utrecht-icon-zoom-minus.entry.js': [72736, 72736], './utrecht-icon-zoom-plus.entry.js': [99585, 99585], './utrecht-icon-zoomin.entry.js': [32529, 32529], './utrecht-icon-zoomout.entry.js': [55033, 55033], './utrecht-icon-zorg-huis.entry.js': [35337, 35337], './utrecht-icon-zweefpaal.entry.js': [39611, 39611], './utrecht-icon-zwemmen.entry.js': [81680, 81680], './utrecht-logo-button.entry.js': [47265, 47265], './utrecht-map-marker.entry.js': [60820, 60820], './utrecht-multiline-data.entry.js': [96681, 96681], './utrecht-page-footer.entry.js': [47455, 47455], './utrecht-pagination.entry.js': [59605, 59605], './utrecht-progress-list-item.entry.js': [79552, 79552], './utrecht-progress-list.entry.js': [15419, 15419], './utrecht-progress-sublist-item.entry.js': [67098, 67098], './utrecht-sidenav.entry.js': [60940, 60940], './utrecht-surface.entry.js': [31524, 31524], './utrecht-table-body.entry.js': [5271, 5271], './utrecht-table-caption.entry.js': [97036, 97036], './utrecht-table-cell.entry.js': [93419, 93419], './utrecht-table-footer.entry.js': [62675, 62675], './utrecht-table-header-cell.entry.js': [83937, 83937], './utrecht-table-header.entry.js': [87764, 87764], './utrecht-table-row.entry.js': [53095, 53095], './utrecht-table.entry.js': [86708, 86708], './utrecht-textarea.entry.js': [10420, 10420], './utrecht-textbox.entry.js': [41926, 41926] };
   function i(e) {
    if (!t.o(r, e))
     return Promise.resolve().then(() => {
      var n = new Error("Cannot find module '" + e + "'");
      throw ((n.code = 'MODULE_NOT_FOUND'), n);
     });
    var n = r[e],
     i = n[0];
    return t.e(n[1]).then(() => t(i));
   }
   (i.keys = () => Object.keys(r)), (i.id = 82489), (e.exports = i);
  },
  95929: (e, n, t) => {
   'use strict';
   t.d(n, { Zb: () => l, aY: () => c, um: () => d, wu: () => s });
   var r = t(93706),
    i = t(4814);
   t(75271);
   const a = { cardgroup: 'cardgroup_0VVt', 'cardgroup--small': 'cardgroup--small_BDzz', 'cardgroup--medium': 'cardgroup--medium_xS6r', 'cardgroup--large': 'cardgroup--large_Tjo8', cardgroup__card: 'cardgroup__card_emnt', 'cardgroup__card--small': 'cardgroup__card--small_bxfC', 'cardgroup__card--medium': 'cardgroup__card--medium_xiP2', 'cardgroup__card--large': 'cardgroup__card--large_PGe3', cardgroup__link: 'cardgroup__link_YISR', card__illustration: 'card__illustration_MVXv', 'card__illustration--background': 'card__illustration--background_cTcZ', card__content: 'card__content_LYKG' };
   var o = t(52676);
   const s = (e) => {
     let { background: n, children: t, className: r, ...s } = e;
     return (0, o.jsx)('div', { className: (0, i.Z)(a.card__illustration, n && a['card__illustration--background'], r), ...s, children: t });
    },
    c = (e) => (0, o.jsx)('div', { className: (0, i.Z)(a.card__content), ...e }),
    l = (e) => {
     let { href: n, appearance: t, className: s, component: c = 'div', children: l } = e;
     const d = (e) => ('article' === c ? (0, o.jsx)('article', { ...e }) : 'section' === c ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      h = (0, o.jsx)(d, { className: (0, i.Z)(a.cardgroup__card, a[`cardgroup__card--${t}`], s), children: l });
     return n ? (0, o.jsx)(r.rU, { href: n, boxContent: !0, className: a.cardgroup__link, children: h }) : h;
    },
    d = (e) => {
     let { appearance: n = 'medium', children: t, className: r } = e;
     return (0, o.jsx)('div', { className: (0, i.Z)(a.cardgroup, a[`cardgroup--${n}`], r), children: t });
    };
  },
  60851: (e, n, t) => {
   'use strict';
   t.d(n, { Gn: () => D, cN: () => C, W: () => L, Rv: () => M });
   var r = t(47027),
    i = t(4814),
    a = (t(75271), t(39854)),
    o = t(7522),
    s = t(62559),
    c = t(79734),
    l = t(32636),
    d = t(52676);
   const h = { figma: (0, d.jsx)(a.Z, {}), github: (0, d.jsx)(o.Z, {}), npm: (0, d.jsx)(s.Z, {}), storybook: (0, d.jsx)(c.Z, {}) },
    u = (e) => {
     let { brand: n } = e;
     return (0, d.jsx)(r.JO, { children: h[n] || (0, d.jsx)(l.Z, {}) });
    };
   var j = t(95929);
   const m = { 'definition-of-done': 'definition-of-done_hA8T', 'definition-of-done--help-wanted': 'definition-of-done--help-wanted_eyW6', 'definition-of-done--community': 'definition-of-done--community_s9uY', 'definition-of-done--candidate': 'definition-of-done--candidate_kcli', 'definition-of-done--hall-of-fame': 'definition-of-done--hall-of-fame_uZjI', 'implementation-card-group': 'implementation-card-group_aUZX', 'implementation-card': 'implementation-card_nkoa' };
   var g = t(64909);
   const p = (e) => {
    let { checked: n, unchecked: r } = e;
    return (0, d.jsx)(g.Z, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const e = t(47700).YE;
      return (0, d.jsx)(e, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--component-progress-background-color--checked, currentColor)', key: 'Done', value: n, stroke: '2' },
        { fill: 'var(--component-progress-background-color--unchecked, #ddd)', key: 'Todo', value: r, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   };
   var b = t(42677);
   const y = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' },
    k = (e) => {
     let { children: n, level: t = 1, suffix: r } = e;
     return (0, d.jsxs)('hgroup', { className: (0, i.Z)(y['nlds-inline-heading-group'], `utrecht-heading-${t}`), children: [(0, d.jsx)('h1', { className: (0, i.Z)(y['nlds-inline-heading-group__heading']), children: n }), r && (0, d.jsxs)('p', { className: (0, i.Z)(y['nlds-inline-heading-group__suffix']), children: [r ? ' ' : '', r] })] });
    };
   var v = t(93706),
    x = t(49427);
   const f = 'task-list_hh8j',
    _ = 'task-list-item_oypx',
    w = 'task-list-item__marker_Eefn',
    z = 'task-list-item__marker--checked_y8Vc',
    N = 'task-list-item__marker-label_XAyi',
    T = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: f, children: n });
    },
    A = (e) => {
     let { checked: n, title: t, description: r } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)(_), children: [(0, d.jsxs)('div', { className: (0, i.Z)(w, { [z]: n }), children: [(0, d.jsx)('span', { className: N, children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(x.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(v.aC, { role: 'presentation', children: t }), (0, d.jsx)(v.nv, { children: r })] })] });
    };
   var S = t(14669);
   const C = (e) => {
     let { component: n, headingLevel: t } = e;
     const a = n && n.projects.filter((e) => S.e9.includes(e.id)),
      o = a && S.e9.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: o.map((e) => ({
        className: (0, i.Z)(m['definition-of-done'], e && m[`definition-of-done--${(0, S.mA)(e.title)}`]),
        headingLevel: t,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(T, {
            children: e.tasks.map((e) => {
             let { checked: n, name: t, id: r } = e;
             return (0, d.jsx)(A, { checked: n, title: t, description: (0, S.Q6)(r) }, r);
            }),
           }),
           (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: `${e.url}?filterQuery=${n.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
          ],
         }),
       })),
      })
     );
    },
    L = (e) => {
     let { component: n, headingLevel: t } = e;
     const a = n && n.projects.filter((e) => !S.e9.includes(e.id));
     return n && a.length
      ? (0, d.jsx)(j.um, {
         appearance: 'large',
         className: (0, i.Z)(m['implementation-card-group']),
         children: a
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            r = n.progress.max - n.progress.value;
           return t === r ? e.title.localeCompare(n.title) : t - r;
          })
          .map((e) => {
           const n = e.tasks.find((e) => {
             let { name: n } = e;
             return 'Naam' === n;
            }),
            a = n?.value,
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${a} in Figma` }],
             ['NPM URL (CSS)', { brand: 'npm', desciption: `${a} op NPM` }],
             ['GitHub URL (CSS)', { brand: 'github', desciption: `${a} op GitHub` }],
             ['Storybook URL (CSS)', { brand: 'storybook', desciption: `${a} in Storybook van ${e.title}` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${a} voor visuele regressie tests` }],
            ]),
            s = e.tasks.filter((e) => {
             let { name: n, value: t } = e;
             return o.has(n) && URL.canParse(t) && 'https:' === new URL(t).protocol;
            });
           return (0, d.jsx)(
            j.Zb,
            {
             className: (0, i.Z)(m['implementation-card']),
             children: (0, d.jsxs)(j.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: t, children: e.title }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(p, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               s.length &&
                (0, d.jsxs)(d.Fragment, {
                 children: [
                  (0, d.jsx)(r.X6, { level: t + 1, children: 'Component gebruiken?' }),
                  (0, d.jsx)(r.Mc, {
                   children: s.map((e) => {
                    const n = o.get(e.name);
                    return n ? (0, d.jsxs)(r.k7, { href: e.value, children: [(0, d.jsx)(u, { brand: n.brand }), ' ', n.desciption] }, e.id) : (0, d.jsx)(d.Fragment, {});
                   }),
                  }),
                 ],
                }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.nv, { children: 'Er zijn nog geen implementaties' });
    },
    D = (e) => {
     let { component: n } = e;
     return n && (0, d.jsxs)(r.nv, { children: ['De ', n.title, ' component staat bij NL Design System in de', ' ', (0, d.jsx)(r.rU, { href: n.backlog, children: 'levende backlog' }), ', heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!'] });
    },
    M = (e) => {
     let { component: n, headingLevel: t, description: i } = e;
     const a = n && S.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(k, { level: t, suffix: a && (0, d.jsx)(b.y, { state: a }), children: n.title }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  42677: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => c });
   var r = t(93706),
    i = t(4814);
   t(75271);
   const a = { 'estafette-badge': 'estafette-badge_amWR', 'estafette-badge--todo': 'estafette-badge--todo_EYw0', 'estafette-badge--help-wanted': 'estafette-badge--help-wanted_N7qd', 'estafette-badge--community': 'estafette-badge--community_FJTQ', 'estafette-badge--candidate': 'estafette-badge--candidate_Q2O5', 'estafette-badge--hall-of-fame': 'estafette-badge--hall-of-fame_SqQ1' };
   var o = t(14669),
    s = t(52676);
   const c = (e) => {
    let { state: n } = e;
    const t = (0, o.mA)(n);
    return (0, s.jsx)(r.Ou, { className: (0, i.Z)(a['estafette-badge'], t && a[`estafette-badge--${t}`]), children: n });
   };
  },
  57716: (e, n, t) => {
   'use strict';
   t.d(n, { U: () => d });
   var r = t(24785),
    i = t(93706),
    a = (t(75271), t(52676));
   const o = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    s = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    c = (e) => ({
     img: (n) => {
      let { src: t, ...r } = n;
      return (0, a.jsx)('img', { ...r, src: o(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    l = (e, n) => {
     if (e) {
      const e = { ...s[n - 1] };
      return (e.h1 = () => null), e;
     }
     return s[n];
    },
    d = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: i = 1, baseUrl: o = '' } = e;
     return (0, a.jsx)(r.Z, { components: { ...l(t, i), ...c(o) }, children: n });
    };
  },
  14669: (e, n, t) => {
   'use strict';
   t.d(n, { $3: () => r, Q6: () => a, e9: () => o, mA: () => i });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' });
  },
 },
]);
