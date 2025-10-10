(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [43166],
 {
  3843: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => j, component: () => y, contentTitle: () => h, default: () => v, description: () => g, frontMatter: () => d, issueNumber: () => b, metadata: () => u, title: () => p, toc: () => m });
   var r = t(52676),
    i = t(40139),
    a = t(56995),
    s = t(8657),
    o = t(57716);
   function c(e) {
    const n = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'tabel', children: 'Tabel' }), '\n', (0, r.jsx)(n.p, { children: "Er zijn eindeloos veel varianten van de tabel, daarom is het niet mogelijk op \xe9\xe9n pagina een volledig overzicht te hebben met tips. Op deze pagina zullen we algemene tips geven. In de toekomst willen we losse pagina's aanbieden voor speciale soorten tabellen." }), '\n', (0, r.jsx)(n.h2, { id: 'duidelijke-koppen', children: 'Duidelijke koppen' }), '\n', (0, r.jsxs)(n.p, { children: ['In tabellen staat vaak veel informatie en daarom helpen koppen gebruikers om snel informatie over te slaan die niet relevant is. De data in tabellen kan op drie niveaus koppen bevatten: kop van de tabel (', (0, r.jsx)(n.em, { children: 'caption' }), '), kop van de kolom (', (0, r.jsx)(n.em, { children: 'column header' }), ') en kop van de rij (', (0, r.jsx)(n.em, { children: 'row header' }), '). Het is belangrijk dat je precies de goede HTML gebruikt voor elke kop:'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<caption>' }), ' voor de kop van de tabel'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<th scope="col">' }), ' voor de kop van de kolom'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<th scope="row">' }), ' voor de kop van de rij'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'sorteer-de-tabelrijen', children: 'Sorteer de tabelrijen' }), '\n', (0, r.jsxs)(n.p, { children: ['Voor gebruikers van ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' is het belangrijk dat je de kolom kunt vinden waarop gesorteerd is, en dat je makkelijk vanuit die kolom naar de vorige of volgende rij kunt gaan om snel de relevante rij te vinden. Wanneer je informatie zoekt op een bepaalde datum dan is het belangrijk dat je met \xe9\xe9n druk op de knop naar de volgende datum kunt gaan, daarna nog een keer, enzovoorts.'] }), '\n', (0, r.jsx)(n.p, { children: 'Als je de informatie niet kan vinden bij de datum die je verwacht, dan is het belangrijk om te weten dat op datum is gesorteerd: alleen dan kun weet je zeker dat de informatie helemaal niet in de tabel staat.' }), '\n', (0, r.jsxs)(n.p, { children: ['Plaats de gegevens waarop gesorteerd is in een eigen kolom, en geef met ', (0, r.jsx)(n.code, { children: 'aria-sort="\u2026"' }), ' aan dat deze kolom de volgorde bepaalt.'] }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<table>\n  <caption>\n    Openingstijden gemeentehuis\n  </caption>\n  <thead>\n    <tr>\n      <th scope="col" aria-sort="ascending">Dag</th>\n      <th scope="col">Geopend</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">Maandag</th>\n      <td>12:00\u201418:00</td>\n    </tr>\n    <tr>\n      <th scope="row">Dinsdag</th>\n      <td>08:00\u201418:00</td>\n    </tr>\n    \u2026\n  </tbody>\n</table>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Je geeft met de volgende code aan in welke volgorde de informatie staat:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: 'aria-sort="ascending"' }), ' voor "oplopende volgorde", bijvoorbeeld namen van A tot Z (namen), van bedragen en aantallen van klein naar groot, geplande activiteiten van eerdere naar latere datums'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: 'aria-sort="descending"' }), ' voor "aflopende volgorde", bijvoorbeeld namen van Z naar A, ontvangen berichten van nieuw naar oud, bedragen en aantallen van groot naar klein'] }), '\n'] }), '\n', (0, r.jsxs)(n.h2, { id: 'responsive-tabellen', children: [(0, r.jsx)(n.em, { children: 'Responsive' }), ' tabellen'] }), '\n', (0, r.jsxs)(n.p, { children: ['Volgens het ', (0, r.jsx)(n.a, { href: '/wcag/1.4.10/', children: 'WCAG-succescriterium 1.4.10 Reflow' }), " moeten pagina's leesbaar zijn bij een breedte van 1280px met 400% zoom, zonder dat horizontaal scrollen nodig is. Datatabellen worden genoemd als uitzondering, maar een voor een betere gebruiksvriendelijkheid zijn er technieken om te herkennen dat een tabel niet goed bekeken kan worden en in die situaties een alternatieve layout te gebruiken. Met CSS media queries of container queries kun je herkennen dat er niet voldoende ruimte is voor een tabel, en vervolgens heb je twee opties:"] }), '\n', (0, r.jsxs)(n.p, { children: ['Techniek 1: de bestaande ', (0, r.jsx)(n.code, { children: 'table' }), '-HTML niet te tonen als tabel door met CSS een andere ', (0, r.jsx)(n.code, { children: 'display' }), ' te gebruiken voor ', (0, r.jsx)(n.code, { children: 'table' }), ', ', (0, r.jsx)(n.code, { children: 'td' }), ' en alle andere tabel-elementen. ', (0, r.jsx)(n.em, { children: 'Tabel-elementen niet weergeven als tabel kan de toegankelijkheid van de informatie kapot maken.' }), ' Deze techniek gaat in de praktijk heel vaak mis. Gebruik deze techniek alleen als je vaak gebruikerstesten doet voor toegankelijkheid.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Techniek 2: HTML aanbieden in twee varianten. Naast de HTML ', (0, r.jsx)(n.code, { children: '<table>' }), ' element, ook de gegevens tonen met HTML elementen die niet zoveel ruimte nodig hebben in twee dimensies, zoals koppen met daaronder een datalijst. Afhankelijk van de situatie verberg je de \xe9ne of de andere variant.'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-het-niet-moet', children: 'Hoe het niet moet' }), '\n', (0, r.jsx)(n.h3, { id: 'koppen-niet-gekoppeld', children: 'Koppen van tabel niet gekoppeld aan datacellen' }), '\n', (0, r.jsx)(n.p, { children: 'Tabellen bevatten vaak veel informatie, daarom kan het gebruikers heel veel tijd kosten om de relevante informatie te vinden als je niet de goede HTML gebruikt voor de 3 niveaus van koppen. Gebruikers die de tabel visueel kunnen waarnemen hebben het voordeel dat je kan zien dat er een kop is bovenaan de kolom, of aan het begin van de regel, en kunnen de kop herkennen omdat die bijvoorbeeld vetgedrukt is.' }), '\n', (0, r.jsxs)(n.p, { children: ['Het ', (0, r.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'WCAG-succescriterium 1.3.1 Info en relaties' }), ' zegt dat het belangrijk is om voor gebruikers die niet die relaties kunnen zien zoals de twee-dimensionale opmaak of vetgedrukte tekst, code te gebruiken waardoor bijvoorbeeld screenreaders ook weten welke koppen bij de cel horen.'] }), '\n', (0, r.jsx)(n.h4, { id: 'tabel-kop-niet-gekoppeld', children: 'Kop van de tabel niet gekoppeld' }), '\n', (0, r.jsx)(n.p, { children: 'Niet:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<h2>Openingstijden</h2>\n<table>\n  <thead>\n    \u2026\n  </thead>\n</table>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Wel:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<table>\n  <caption class="heading-2">\n    Openingstijden\n  </caption>\n  <thead>\n    \u2026\n  </thead>\n</table>\n' }) }), '\n', (0, r.jsx)(n.h4, { id: 'tabelrij-kop-niet-gekoppeld', children: 'Kop van de tabelrij niet gekoppeld' }), '\n', (0, r.jsx)(n.p, { children: 'Niet:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<tr>\n  <td>\n    <strong>maandag</strong>\n  </td>\n  <td>gesloten</td>\n</tr>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Wel:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<tr>\n  <th scope="row">maandag</td>\n  <td>gesloten</td>\n</tr>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-tabel-kop-in-de-tabel', children: 'Kop van de tabel in de tabel zelf' }), '\n', (0, r.jsx)(n.p, { children: 'Niet:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<table>\n  <thead>\n    <tr>\n      <th colspan="2">Openingstijden</th>\n    </tr>\n  </thead>\n  \u2026\n</table>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Wel:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<table>\n  <caption>\n    Openingstijden\n  </caption>\n  \u2026\n</table>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'geen-grote-afstand-tussen-kolommen', children: 'Afstand tussen kolommen is te groot' }), '\n', (0, r.jsx)(n.p, { children: 'Je moet goed kunnen zien welke cellen bij elkaar horen. Een tabel die breed is en relatief weinig informatie bevat, is moeilijk te begrijpen als er veel lege ruimte zit tussen de cellen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Voorkom teveel lege ruimte: gebruik bijvoorbeeld niet ', (0, r.jsx)(n.code, { children: 'width: 100%' }), ' voor een tabel met openingstijden. Kies per tabel welke breedte het meest duidelijk is. Als er lege ruimte ontstaat, zorg dan dat die niet tussen kolommen is, maar plaats de lege ruimte aan het eind van de laatste kolom.'] }), '\n', (0, r.jsxs)(n.h3, { id: 'geen-eigen-css-display', children: ['Tabel niet toegankelijk door eigen CSS ', (0, r.jsx)(n.code, { children: 'display' })] }), '\n', (0, r.jsxs)(n.p, { children: ['Screenreaders maken het begrijpen van HTML-tabellen makkelijk, want ze kunnen voor elke datacel de context geven. Hier voor is het belangrijk dat de automatische tools zoals screenreaders uit de code begrijpen wat de ', (0, r.jsx)(n.em, { children: 'column header' }), ' is en wat de ', (0, r.jsx)(n.em, { children: 'row header' }), ' is.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer je met CSS ', (0, r.jsx)(n.code, { children: 'display' }), ' aanpast om een tabel een andere layout te geven, dan is niet meer een tabel in de ', (0, r.jsx)(n.em, { children: 'accessibility tree' }), ' en maak je de relatie tussen de ', (0, r.jsx)(n.em, { children: 'data cell' }), ' en de ', (0, r.jsx)(n.em, { children: 'header cell' }), ' kapot. Tabellen waarvan de ', (0, r.jsx)(n.code, { children: 'display' }), ' wordt aangepast werken daarom niet meer in screenreaders, tenzij de ', (0, r.jsx)(n.em, { children: 'accessibility tree' }), ' door extra code wordt hersteld.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Je kunt voorkomen dat de ', (0, r.jsx)(n.em, { children: 'accessibility tree' }), ' anders wordt opgebouwd. Je moet dan op \xe9lk element van de tabel expliciet zeggen welke ', (0, r.jsx)(n.code, { children: 'role' }), ' het heeft. Omdat deze techniek veel extra werk geeft en foutgevoelig is, raden wij aan om alternatieven te kiezen zoals niet ', (0, r.jsx)(n.code, { children: 'display' }), ' aanpassen of twee varianten maken.'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<caption id="unique-id-here">' }), ' samen met ', (0, r.jsx)(n.code, { children: '<table aria-labelledby="unique-id-here">' })] }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<table role="table">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<tbody role="table-row-group">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<td role="cell">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<tfoot role="table-row-group">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<th scope="col" role="columnheader">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<th scope="row" role="rowheader">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<thead role="table-row-group">' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.code, { children: '<tr role="table-row">' }) }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'links', children: 'Links' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table', children: ['MDN: ', (0, r.jsx)(n.code, { children: '<table>' }), ': The Table element'] }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort', children: ['MDN: ', (0, r.jsx)(n.code, { children: 'aria-sort' })] }) }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'relevante-wcag-regels', children: 'Relevante WCAG-succescriteria' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.10/', children: '1.4.10 Reflow' }) }), '\n'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   const d = { title: 'Table', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Table', pagination_label: 'Table', description: 'Structureert data in rijen en kolommen.', slug: '/table', keywords: ['basic table', 'column', 'data', 'data grid', 'data table', 'data view', 'detailslist', 'dynamic table', 'grid', 'kolom', 'layout', 'markup table', 'responsive table', 'rij', 'row', 'semantic table', 'spreadsheet', 'tabel', 'table', 'table-grid', 'table tree'] },
    h = void 0,
    u = { id: 'componenten/table/index', title: 'Table', description: 'Structureert data in rijen en kolommen.', source: '@site/docs/componenten/table/index.mdx', sourceDirName: 'componenten/table', slug: '/table', permalink: '/table', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/table/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Table', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Table', pagination_label: 'Table', description: 'Structureert data in rijen en kolommen.', slug: '/table', keywords: ['basic table', 'column', 'data', 'data grid', 'data table', 'data view', 'detailslist', 'dynamic table', 'grid', 'kolom', 'layout', 'markup table', 'responsive table', 'rij', 'row', 'semantic table', 'spreadsheet', 'tabel', 'table', 'table-grid', 'table tree'] }, sidebar: 'componenten', previous: { title: 'Switch', permalink: '/switch' }, next: { title: 'Tabs', permalink: '/tabs' } },
    j = {},
    m = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Community implementaties', id: 'community-implementaties', level: 2 },
     { value: 'Richtlijnen', id: 'richtlijnen', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ],
    p = 'Table',
    g = 'Structureert data in rijen en kolommen.',
    b = 39,
    y = a.find((e) => e.number === b);
   function k(e) {
    const n = { h2: 'h2', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, r.jsx)(s.Rv, { component: y, headingLevel: 1, description: g }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(s.cN, { component: y, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, r.jsx)(s.W, { component: y, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'richtlijnen', children: 'Richtlijnen' }), '\n', (0, r.jsx)(o.U, { omitH1: !0, headingLevel: 3, children: (0, r.jsx)(l, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }), '\n', (0, r.jsx)(s.vM, { component: y, headingLevel: 3 })] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(k, { ...e }) }) : k(e);
   }
  },
  54907: (e, n, t) => {
   var r = { './utrecht-alert_46.entry.js': [16972, 16972], './utrecht-backdrop.entry.js': [52078, 52078], './utrecht-breadcrumb-nav.entry.js': [79009, 79009], './utrecht-checkbox.entry.js': [40557, 40557], './utrecht-column-layout.entry.js': [91097, 91097], './utrecht-contact-card-template.entry.js': [78516, 78516], './utrecht-custom-checkbox.entry.js': [92912, 92912], './utrecht-data-list-actions.entry.js': [59737, 59737], './utrecht-data-list-item.entry.js': [65183, 65183], './utrecht-data-list-key.entry.js': [22659, 22659], './utrecht-data-list-value.entry.js': [22226, 22226], './utrecht-data-list.entry.js': [94967, 94967], './utrecht-digid-button.entry.js': [9767, 9767], './utrecht-digid-logo.entry.js': [70738, 70738], './utrecht-eherkenning-logo.entry.js': [97179, 97179], './utrecht-eidas-logo.entry.js': [85142, 85142], './utrecht-form-field-error-message.entry.js': [94003, 94003], './utrecht-form-toggle.entry.js': [69578, 69578], './utrecht-html-content.entry.js': [13111, 13111], './utrecht-icon-afspraak-maken.entry.js': [74085, 74085], './utrecht-icon-afval-container.entry.js': [8380, 8380], './utrecht-icon-afval-containerpas.entry.js': [73921, 73921], './utrecht-icon-afval-kalender.entry.js': [35838, 35838], './utrecht-icon-afval-pmd.entry.js': [70258, 70258], './utrecht-icon-afval-scheiden.entry.js': [73169, 73169], './utrecht-icon-afval.entry.js': [30047, 30047], './utrecht-icon-afvalkalender.entry.js': [7893, 7893], './utrecht-icon-alleen.entry.js': [96351, 96351], './utrecht-icon-arrow.entry.js': [6280, 6280], './utrecht-icon-auto.entry.js': [20926, 20926], './utrecht-icon-begroting.entry.js': [26977, 26977], './utrecht-icon-bestemmingsplan.entry.js': [19164, 19164], './utrecht-icon-betaaldatum.entry.js': [39098, 39098], './utrecht-icon-bewijsstukken.entry.js': [2026, 2026], './utrecht-icon-bijstand.entry.js': [2557, 2557], './utrecht-icon-blad.entry.js': [63857, 63857], './utrecht-icon-bouwproject.entry.js': [53604, 53604], './utrecht-icon-brandgevaar.entry.js': [74905, 74905], './utrecht-icon-brief-betalen.entry.js': [81034, 81034], './utrecht-icon-checkmark.entry.js': [60864, 74128], './utrecht-icon-chevron-down.entry.js': [64999, 64999], './utrecht-icon-chevron-left.entry.js': [24758, 24758], './utrecht-icon-chevron-right.entry.js': [77469, 77469], './utrecht-icon-chevron-up.entry.js': [55652, 55652], './utrecht-icon-close.entry.js': [79952, 79952], './utrecht-icon-college-b-w.entry.js': [75898, 75898], './utrecht-icon-container-bio.entry.js': [31755, 31755], './utrecht-icon-container-glas.entry.js': [83173, 83173], './utrecht-icon-container-groenafval.entry.js': [59761, 59761], './utrecht-icon-container-met-zak.entry.js': [96408, 96408], './utrecht-icon-container-papier.entry.js': [91158, 91158], './utrecht-icon-container-pmd.entry.js': [89783, 89783], './utrecht-icon-container-restafval.entry.js': [10406, 10406], './utrecht-icon-container-textiel.entry.js': [66131, 66131], './utrecht-icon-container.entry.js': [1461, 1461], './utrecht-icon-cross.entry.js': [38826, 38826], './utrecht-icon-dakloos.entry.js': [39885, 39885], './utrecht-icon-dementie.entry.js': [69566, 69566], './utrecht-icon-documenten.entry.js': [86548, 86548], './utrecht-icon-duurzaam.entry.js': [48962, 48962], './utrecht-icon-eenzaamheid.entry.js': [89742, 89742], './utrecht-icon-eikenprocessie.entry.js': [6216, 6216], './utrecht-icon-elektrisch-rijden.entry.js': [61879, 61879], './utrecht-icon-energie-vergoeding.entry.js': [26188, 26188], './utrecht-icon-energietransitie.entry.js': [32518, 32518], './utrecht-icon-error.entry.js': [33743, 33743], './utrecht-icon-evenementen.entry.js': [29820, 29820], './utrecht-icon-facebook.entry.js': [19030, 19030], './utrecht-icon-fiets.entry.js': [31091, 31091], './utrecht-icon-filter.entry.js': [22837, 22837], './utrecht-icon-geboorte.entry.js': [79323, 79323], './utrecht-icon-gebruiker-centraal.entry.js': [74635, 74635], './utrecht-icon-gebruiker-ingelogd.entry.js': [49541, 49541], './utrecht-icon-gegevenswoordenboek.entry.js': [43115, 43115], './utrecht-icon-geluid.entry.js': [91271, 89497], './utrecht-icon-gemeente-locatie.entry.js': [98544, 98544], './utrecht-icon-gemeenteraad.entry.js': [6130, 6130], './utrecht-icon-gereedschap.entry.js': [60876, 60876], './utrecht-icon-gezicht.entry.js': [70334, 70334], './utrecht-icon-gezin.entry.js': [54918, 54918], './utrecht-icon-glas-afval.entry.js': [26105, 26105], './utrecht-icon-glijbaan.entry.js': [34660, 34660], './utrecht-icon-grafiek.entry.js': [51307, 51307], './utrecht-icon-grofvuil-ophalen.entry.js': [43954, 43954], './utrecht-icon-grofvuil.entry.js': [14169, 14169], './utrecht-icon-hamburger-menu.entry.js': [82625, 82625], './utrecht-icon-herdenking.entry.js': [20733, 20733], './utrecht-icon-hondenbelasting.entry.js': [30716, 30716], './utrecht-icon-horeca.entry.js': [94971, 94971], './utrecht-icon-horecavergunning.entry.js': [23463, 23463], './utrecht-icon-huis-en-omgeving.entry.js': [49431, 49431], './utrecht-icon-huis.entry.js': [61342, 61342], './utrecht-icon-huishoudelijk-geweld.entry.js': [46064, 46064], './utrecht-icon-hulp-huishouden.entry.js': [83765, 83765], './utrecht-icon-hulp-vervoer.entry.js': [36393, 36393], './utrecht-icon-hulp-zorg.entry.js': [57093, 57093], './utrecht-icon-hulpmiddelen-gezin.entry.js': [47490, 47490], './utrecht-icon-hulpverlening.entry.js': [28993, 28993], './utrecht-icon-idee.entry.js': [28821, 28821], './utrecht-icon-informatie.entry.js': [53212, 53212], './utrecht-icon-information.entry.js': [45569, 45569], './utrecht-icon-innovatie.entry.js': [73749, 73749], './utrecht-icon-inspraak-inwoners.entry.js': [95335, 95335], './utrecht-icon-instagram.entry.js': [70878, 70878], './utrecht-icon-kalender.entry.js': [9566, 9566], './utrecht-icon-kennis.entry.js': [98742, 98742], './utrecht-icon-kerstbomen.entry.js': [63846, 63846], './utrecht-icon-klachten.entry.js': [2727, 2727], './utrecht-icon-kroon.entry.js': [55176, 55176], './utrecht-icon-laadpaal.entry.js': [90512, 90512], './utrecht-icon-language.entry.js': [64754, 64754], './utrecht-icon-lantaarnpaal-oud.entry.js': [69909, 36257], './utrecht-icon-lantaarnpaal.entry.js': [92511, 92511], './utrecht-icon-leren.entry.js': [17941, 17941], './utrecht-icon-let-op.entry.js': [93473, 93473], './utrecht-icon-linkedin.entry.js': [16570, 16570], './utrecht-icon-list-check.entry.js': [5875, 5875], './utrecht-icon-list-number.entry.js': [43033, 43033], './utrecht-icon-list.entry.js': [63983, 63983], './utrecht-icon-loupe.entry.js': [32649, 32649], './utrecht-icon-markt.entry.js': [2436, 2436], './utrecht-icon-melding-boom.entry.js': [750, 750], './utrecht-icon-melding-klacht.entry.js': [32543, 32543], './utrecht-icon-melding-openbareruimte.entry.js': [53376, 53376], './utrecht-icon-melding-verlichting.entry.js': [24930, 24930], './utrecht-icon-melding.entry.js': [96035, 96035], './utrecht-icon-menselijk.entry.js': [14769, 14769], './utrecht-icon-menu-dot-open.entry.js': [82806, 82806], './utrecht-icon-menu-dot.entry.js': [66049, 66049], './utrecht-icon-meterkast.entry.js': [35165, 35165], './utrecht-icon-milieu-ontheffing.entry.js': [76015, 76015], './utrecht-icon-milieu-zone.entry.js': [58570, 58570], './utrecht-icon-minus-vertical.entry.js': [42635, 42635], './utrecht-icon-minus.entry.js': [28496, 28496], './utrecht-icon-mobiliteit.entry.js': [12294, 12294], './utrecht-icon-natuur.entry.js': [99563, 99563], './utrecht-icon-nieuw-huis.entry.js': [62672, 62672], './utrecht-icon-nieuwsbrief.entry.js': [87584, 87584], './utrecht-icon-nummerbord.entry.js': [18866, 18866], './utrecht-icon-om-het-huis.entry.js': [28408, 28408], './utrecht-icon-omgeving.entry.js': [99690, 99690], './utrecht-icon-omgevingsvisie.entry.js': [32683, 32683], './utrecht-icon-omgevingswet.entry.js': [99536, 99536], './utrecht-icon-onderhoud.entry.js': [65024, 65024], './utrecht-icon-ondernemen.entry.js': [93386, 93386], './utrecht-icon-openingstijden.entry.js': [87141, 87141], './utrecht-icon-over-de-stad.entry.js': [21962, 21962], './utrecht-icon-overlijden.entry.js': [8355, 8355], './utrecht-icon-panden.entry.js': [24623, 24623], './utrecht-icon-park.entry.js': [71062, 71062], './utrecht-icon-parkeerkaart.entry.js': [39396, 39396], './utrecht-icon-parkeervergunning.entry.js': [80821, 80821], './utrecht-icon-parken.entry.js': [64639, 64639], './utrecht-icon-parkeren-bedrijven.entry.js': [63253, 63253], './utrecht-icon-parkeren-betaalautomaat.entry.js': [97549, 97549], './utrecht-icon-parkeren-betalen.entry.js': [27509, 27509], './utrecht-icon-parkeren.entry.js': [98802, 98802], './utrecht-icon-participatie-campagne.entry.js': [42189, 42189], './utrecht-icon-participatie-like.entry.js': [22727, 22727], './utrecht-icon-participatie-pitch.entry.js': [77481, 77481], './utrecht-icon-paspoort.entry.js': [31350, 31350], './utrecht-icon-presentatie.entry.js': [86378, 86378], './utrecht-icon-prijskaartje.entry.js': [66375, 66375], './utrecht-icon-read-aloud.entry.js': [56911, 56911], './utrecht-icon-rijbewijs.entry.js': [21081, 21081], './utrecht-icon-rioolheffing.entry.js': [18216, 18216], './utrecht-icon-rolstoel.entry.js': [94479, 94479], './utrecht-icon-schild-gemeente-utrecht.entry.js': [37446, 37446], './utrecht-icon-search.entry.js': [32835, 32835], './utrecht-icon-shoppen.entry.js': [24709, 24709], './utrecht-icon-sinterklaas.entry.js': [55432, 55432], './utrecht-icon-slechtziende-hoordende.entry.js': [26098, 26098], './utrecht-icon-sport-en-cultuur.entry.js': [42266, 42266], './utrecht-icon-sport-voetbal.entry.js': [71966, 71966], './utrecht-icon-sport.entry.js': [95628, 95628], './utrecht-icon-stookverbod.entry.js': [49057, 96254], './utrecht-icon-strand.entry.js': [23488, 23488], './utrecht-icon-strooien.entry.js': [32778, 32778], './utrecht-icon-subsidie-gezin.entry.js': [80567, 80567], './utrecht-icon-subsidie.entry.js': [94682, 94682], './utrecht-icon-t-shirt.entry.js': [54545, 54545], './utrecht-icon-thuiswerken.entry.js': [25321, 25321], './utrecht-icon-toeslag.entry.js': [39183, 39183], './utrecht-icon-trein.entry.js': [87486, 87486], './utrecht-icon-trouwen.entry.js': [34612, 34612], './utrecht-icon-twitter.entry.js': [82414, 82414], './utrecht-icon-user.entry.js': [65113, 65113], './utrecht-icon-uw-wijk.entry.js': [32690, 32690], './utrecht-icon-vaccinatie.entry.js': [75263, 75263], './utrecht-icon-veilige-wijk.entry.js': [28892, 28892], './utrecht-icon-vergaderen.entry.js': [74219, 74219], './utrecht-icon-vergaderendigitaal.entry.js': [19472, 19472], './utrecht-icon-vergoeding.entry.js': [42704, 42704], './utrecht-icon-verhuizen.entry.js': [7159, 7159], './utrecht-icon-verkeerslicht.entry.js': [49443, 49443], './utrecht-icon-verkiezingen.entry.js': [91507, 91507], './utrecht-icon-verslaving.entry.js': [56316, 56316], './utrecht-icon-vervoersvoorziening.entry.js': [31768, 31768], './utrecht-icon-virus.entry.js': [49030, 49030], './utrecht-icon-vluchtelingen.entry.js': [10731, 10731], './utrecht-icon-voorzieningen-vervoer.entry.js': [31915, 31915], './utrecht-icon-vrijwilligerswerk.entry.js': [77206, 77206], './utrecht-icon-vuilnisbak.entry.js': [26762, 26762], './utrecht-icon-vuilniszak.entry.js': [3290, 3290], './utrecht-icon-vuurwerk.entry.js': [81261, 21118], './utrecht-icon-wandelstok.entry.js': [44566, 44566], './utrecht-icon-warm.entry.js': [90649, 90649], './utrecht-icon-warning.entry.js': [32737, 32737], './utrecht-icon-werken.entry.js': [1415, 1415], './utrecht-icon-werkzaamheden.entry.js': [17237, 17237], './utrecht-icon-whatsapp.entry.js': [33821, 33821], './utrecht-icon-wonen-kosten.entry.js': [81883, 81883], './utrecht-icon-woning-zoeken.entry.js': [80571, 80571], './utrecht-icon-x.entry.js': [45434, 45434], './utrecht-icon-youtube.entry.js': [46609, 46609], './utrecht-icon-zelfstandig-wonen.entry.js': [29956, 29956], './utrecht-icon-zoom-minus.entry.js': [72154, 72154], './utrecht-icon-zoom-plus.entry.js': [77634, 77634], './utrecht-icon-zoomin.entry.js': [54755, 54755], './utrecht-icon-zoomout.entry.js': [21405, 21405], './utrecht-icon-zorg-huis.entry.js': [50787, 50787], './utrecht-icon-zweefpaal.entry.js': [90563, 90563], './utrecht-icon-zwemmen.entry.js': [10572, 10572], './utrecht-logo-button.entry.js': [34913, 34913], './utrecht-map-marker.entry.js': [38104, 38104], './utrecht-multiline-data.entry.js': [10150, 10150], './utrecht-number-badge.entry.js': [87062, 87062], './utrecht-page-footer.entry.js': [84907, 84907], './utrecht-pagination.entry.js': [57930, 57930], './utrecht-progress-list-item.entry.js': [26946, 26946], './utrecht-progress-list.entry.js': [36009, 36009], './utrecht-progress-sublist-item.entry.js': [26235, 26235], './utrecht-sidenav.entry.js': [38835, 38835], './utrecht-surface.entry.js': [61084, 81261], './utrecht-table-body.entry.js': [99709, 99709], './utrecht-table-caption.entry.js': [24554, 24554], './utrecht-table-cell.entry.js': [82736, 82736], './utrecht-table-footer.entry.js': [80097, 80097], './utrecht-table-header-cell.entry.js': [9931, 9931], './utrecht-table-header.entry.js': [19668, 19668], './utrecht-table-row.entry.js': [30422, 30422], './utrecht-table.entry.js': [62665, 62665], './utrecht-textarea.entry.js': [83251, 83251], './utrecht-textbox.entry.js': [958, 958] };
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
   (i.keys = () => Object.keys(r)), (i.id = 54907), (e.exports = i);
  },
  35038: (e, n, t) => {
   'use strict';
   t.d(n, { Zb: () => c, aY: () => o, um: () => l, wu: () => s });
   var r = t(28439),
    i = t(4814),
    a = t(52676);
   const s = (e) => {
     let { background: n, children: t, className: r, ...s } = e;
     return (0, a.jsx)('div', { className: (0, i.Z)('card__illustration', n && 'card__illustration--background', r), ...s, children: t });
    },
    o = (e) => (0, a.jsx)('div', { className: 'card__content', ...e }),
    c = (e) => {
     let { href: n, appearance: t, className: s, component: o = 'div', children: c } = e;
     const l = (e) => ('article' === o ? (0, a.jsx)('article', { ...e }) : 'section' === o ? (0, a.jsx)('section', { ...e }) : (0, a.jsx)('div', { ...e })),
      d = (0, a.jsx)(l, { className: (0, i.Z)('cardgroup__card', `cardgroup__card--${t}`, s), children: c });
     return n ? (0, a.jsx)(r.rU, { href: n, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    l = (e) => {
     let { appearance: n = 'medium', children: t, className: r } = e;
     return (0, a.jsx)('div', { className: (0, i.Z)('cardgroup', `cardgroup--${n}`, r), children: t });
    };
  },
  8657: (e, n, t) => {
   'use strict';
   t.d(n, { cN: () => w, vM: () => N, W: () => z, Rv: () => _ });
   var r = t(35076),
    i = t(4814),
    a = t(39854),
    s = t(7522),
    o = t(62559),
    c = t(79734),
    l = t(32636),
    d = t(52676);
   const h = { figma: (0, d.jsx)(a.Z, {}), github: (0, d.jsx)(s.Z, {}), npm: (0, d.jsx)(o.Z, {}), storybook: (0, d.jsx)(c.Z, {}) },
    u = (e) => {
     let { brand: n } = e;
     return (0, d.jsx)(r.JO, { children: h[n] || (0, d.jsx)(l.Z, {}) });
    };
   var j = t(35038),
    m = t(28743);
   const p = (e) => {
    let { checked: n, unchecked: r } = e;
    return (0, d.jsx)(m.Z, {
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
   var g = t(23355),
    b = t(41757),
    y = t(28439),
    k = t(55476);
   const v = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: 'task-list', children: n });
    },
    x = (e) => {
     let { checked: n, children: t, title: r, description: a, headingLevel: s = 3 } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, i.Z)('task-list-item__marker', n && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(k.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(y.X6, { appearance: 'utrecht-heading-3', level: s, children: r }), a, t] })] });
    };
   var f = t(14669);
   const w = (e) => {
     let { component: n, headingLevel: t } = e;
     const a = n && n.projects.filter((e) => f.e9.includes(e.id)),
      s = a && f.e9.map((e) => a.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: s.map((e) => ({
        className: (0, i.Z)('definition-of-done', e && `definition-of-done--${(0, f.mA)(e.title)}`),
        headingLevel: t,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(v, {
            children: e.tasks.map((e) => {
             let { checked: n, name: r, id: i } = e;
             return (0, d.jsx)(x, { headingLevel: t + 1, checked: n, title: r, description: (0, f.Q6)(i) }, i);
            }),
           }),
           (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: `${e.url}?filterQuery=${n.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
          ],
         }),
       })),
      })
     );
    },
    z = (e) => {
     let { component: n, headingLevel: t } = e;
     const i = n && n.projects.filter((e) => !f.e9.includes(e.id));
     return n && i.length
      ? (0, d.jsx)(j.um, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: i
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
            i = n?.value,
            a = (0, f.ps)(e),
            s = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            o = e.tasks.filter((e) => {
             let { name: n, value: t } = e;
             return s.has(n) && URL.canParse(t) && 'https:' === new URL(t).protocol;
            });
           return (0, d.jsx)(
            j.Zb,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(j.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: t, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(p, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (o.length > 0 || a.length > 0) && (0, d.jsx)(r.X6, { level: t + 1, children: 'Snel aan de slag' }),
               o.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.Mc, {
                  links: o
                   .filter((e) => !!s.get(e.name))
                   .map((e) => {
                    const n = s.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(u, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               a.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: a.map((e) => {
                  let { frameworkName: n, tasks: a } = e;
                  return (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.X6, { level: t + 2, children: [i, ' in ', n] }), (0, d.jsx)(r.Mc, { links: a.map((e) => ({ children: e.description, icon: (0, d.jsx)(u, { brand: e.brand }), href: e.value })) })] });
                 }),
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
    N = (e) => {
     let { component: n } = e;
     const t = n?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { children: ['We vinden het belangrijk dat de component ', n.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.QI, { children: [i ? (0, d.jsxs)(r.AS, { children: ['Vul de ', (0, d.jsx)(r.rU, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.AS, { children: [(0, d.jsxs)(r.rU, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', n.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.AS, { children: ['Draag bij aan de voortgang van ', n.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.rU, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.rU, { href: n.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    _ = (e) => {
     let { component: n, headingLevel: t, description: i } = e;
     const a = n && f.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(b.V, { level: t, suffix: a && (0, d.jsx)(g.y, { state: a }), children: n.title }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  23355: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => o });
   var r = t(28439),
    i = t(4814),
    a = t(14669),
    s = t(52676);
   const o = (e) => {
    let { state: n } = e;
    const t = (0, a.mA)(n);
    return (0, s.jsx)(r.Ou, { className: (0, i.Z)('estafette-badge', t && `estafette-badge--${t}`), children: n });
   };
  },
  41757: (e, n, t) => {
   'use strict';
   t.d(n, { V: () => a });
   var r = t(4814),
    i = t(52676);
   const a = (e) => {
    let { children: n, className: t, level: a = 1, suffix: s, ...o } = e;
    return (0, i.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${a}`, t), ...o, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), s && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
   };
  },
  57716: (e, n, t) => {
   'use strict';
   t.d(n, { U: () => d });
   var r = t(40139),
    i = t(28439),
    a = t(52676);
   const s = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    c = (e) => ({
     img: (n) => {
      let { src: t, ...r } = n;
      return (0, a.jsx)('img', { ...r, src: s(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    l = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    d = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: i = 1, baseUrl: s = '', components: o = {} } = e;
     return (0, a.jsx)(r.Z, { components: { ...l(t, i), ...c(s), ...o }, children: n });
    };
  },
  14669: (e, n, t) => {
   'use strict';
   t.d(n, { $3: () => r, $e: () => g, BA: () => o, Ee: () => d, Q6: () => a, U: () => j, Yr: () => b, d: () => h, e9: () => s, fO: () => k, mA: () => i, ps: () => m, qU: () => v, s0: () => y, zP: () => p });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
   function c(e) {
    return Array.from(new Set(e));
   }
   const l = (e) => {
     const n = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular'];
     return [...e].sort((e, t) => n.indexOf(e) - n.indexOf(t));
    },
    d = (e) => {
     const n = e
      .flatMap((e) => {
       let { projects: n } = e;
       return n;
      })
      .flatMap((e) => u(e));
     return l(c(n));
    },
    h = (e, n) => j(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return l(
      c(
       e.tasks
        .filter((e) => {
         let { name: t, value: r } = e;
         return '' !== r && n.test(t);
        })
        .map((e) => {
         let { name: t } = e;
         return n.exec(t)?.[1];
        }),
      ),
     );
    },
    j = (e) => l(c(e.projects.flatMap((e) => u(e)))),
    m = (e) => {
     const n = u(e),
      t = ((e) => {
       const n = e.tasks.find((e) => {
        let { name: n } = e;
        return 'Naam' === n;
       });
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter((e) => {
        let { name: t, value: r } = e;
        return '' !== r && t.includes(n);
       })
       .map((r) => {
        let { name: i, id: a, value: s } = r;
        const o = /^(.+) URL/.exec(i)[1],
         c = 'Storybook' === o ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${o}`;
        return { brand: o.toLowerCase(), name: i, id: a, value: s, description: c };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    p = (e) => e.join('.'),
    g = (e) => '--' + e.join('-'),
    b = (e, n) => n.reduce((e, n) => e?.[n], e);
   function y(e, n) {
    return void 0 === n && (n = []), Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? y(e[t], [...n, t]) : []));
   }
   function k(e) {
    const n = new Map();
    function t(e) {
     return n.has(e) || n.set(e, p(e)), n.get(e);
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function v(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) e[n] || (e[n] = {}), (e = e[n]);
    }
    return n;
   }
  },
 },
]);
