(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [21229],
 {
  21744: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => j, component: () => v, contentTitle: () => h, default: () => b, description: () => p, frontMatter: () => d, issueNumber: () => k, metadata: () => u, title: () => m, toc: () => g });
   var r = t(52676),
    i = t(24785),
    o = t(31612);
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'iconen', children: 'Iconen' }), '\n', (0, r.jsx)(n.p, { children: 'Iconen moeten opzettelijk gebruikt worden en waar mogelijk, met het oog op de toegankelijkheid, gekoppeld aan een tekstlabel. Iconen kunnen zowel als interactieve als statische elementen fungeren.' }), '\n', (0, r.jsx)(n.p, { children: 'Grofweg zijn er twee categorie\xebn iconen; functionele en illustratieve iconen.' }), '\n', (0, r.jsx)(n.p, { children: 'Denk bij functionele iconen bijvoorbeeld aan:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Chevrons' }), '\n', (0, r.jsx)(n.li, { children: 'Opslaan en download indicatoren' }), '\n', (0, r.jsx)(n.li, { children: 'Een \xd7 om een dialoogvenster te sluiten' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Functionele iconen zijn vaak abstract en hun betekenis is vaak aangeleerd, denk hierbij bijvoorbeeld aan het floppy icoon voor opslaan, of een vergrootglas om te zoeken. Illustratieve iconen zorgen in \xe9\xe9n oogopslag dat een tekstlabel verduidelijkt of een thema uitgebeeld kan worden.' }), '\n', (0, r.jsx)(n.h2, { id: 'icoon-en-tekst', children: 'Combinatie van icoon en tekst' }), '\n', (0, r.jsx)(n.p, { children: 'Combineer waar mogelijk een icoon met tekst.' }), '\n', (0, r.jsx)(n.p, { children: 'Het kan zijn dat een bezoeker een icoon niet helemaal goed begrijpt. Het gebruik van tekst (label) is ook een belangrijke factor in de navigatie. Een eenvoudig en duidelijk icoon met een goed omschreven label is superieur aan iconen of labels alleen.' }), '\n', (0, r.jsx)(n.h2, { id: 'hoeveelheid-iconen', children: 'Niet te veel iconen op een pagina' }), '\n', (0, r.jsx)(n.p, { children: 'Te veel iconen gebruiken op een pagina kan een soort blindheid veroorzaken.' }), '\n', (0, r.jsx)(n.p, { children: 'Let er op dat er niet te veel iconen op een pagina komen te staan en voorkom een oerwoud van plaatjes. Bij het gebruik van te veel iconen worden de iconen niets meer dan decoratie op je pagina en mist het z\u2019n doel als navigatiehulp voor de bezoeker.' }), '\n', (0, r.jsx)(n.p, { children: 'Door het aantal iconen te beperken, trekken de iconen die je wel gebruikt sneller de aandacht van de gebruiker en wordt het navigeren op de pagina eenvoudiger.' }), '\n', (0, r.jsx)(n.p, { children: 'De uitstraling van iconen hebben een effect op de vormgeving van de portaal/webpagina. Let dus goed op hoe en welke iconen jullie willen gaan gebruiken.' }), '\n', (0, r.jsx)(n.h2, { id: 'kleur', children: 'Icoon kleuren' }), '\n', (0, r.jsx)(n.p, { children: 'Icoon kleuren moeten automatisch de kleur kunnen overnemen van nabije content.' }), '\n', (0, r.jsx)(n.p, { children: 'De valkuil is om hardcoded kleur waardes zoals fill="#ABCDEF te gebruiken. Gebruik in plaats daar van de CSS waarde currentColor: fill="currentColor". Dit is een handmatige aanpassing in de code van de SVG, en een essenti\xeble. Dit principe is ook toepasbaar op andere kleur-gerelateerde eigenschappen zoals stroke.' }), '\n', (0, r.jsx)(n.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, r.jsx)(n.p, { children: 'Functionele iconen communiceren belangrijke functionaliteit. Hierdoor dienen deze voor iedereen toegankelijk te zijn. Zo dient de informatie die zij overbrengen tevens voor voorlees-software beschikbaar te zijn en hebben ze voldoende kleurcontrast voor mensen met een visuele beperking. Puur decoratieve iconen hoeven niet aan toegankelijkheidsrichtlijnen te voldoen. Als een illustratief icoon tekst verduidelijkt, zorg dan dat deze verduidelijking tevens aangeboden wordt aan voorlees-software.' }), '\n', (0, r.jsx)(n.h3, { id: 'tekstlabels', children: 'Tekstlabels' }), '\n', (0, r.jsx)(n.p, { children: 'Probeer zoveel mogelijk iconen van een tekstlabel te voorzien. Wanneer een (interactief) icoon zonder tekstlabel aangeboden wordt, zorg dan een een tekstverduidelijking wel aan voorlees-software aangeboden wordt.' }), '\n', (0, r.jsx)(n.h3, { id: 'contrast', children: 'Contrast' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg voor functionele iconen dat deze voldoende contrast hebben met de achtergrond en omliggende kleuren. Zie hiervoor ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G207', children: 'WCAG techniek G207' }), ' en ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#contrast-van-niet-tekstuele-content', children: 'succescriterium 1.4.11, contrast van niet-tekstuele content' }), '. Er dient een minimale contrastverhouding van 3:1 ten opzichte van onderliggende en aangrenzende kleuren te zijn.'] }), '\n', (0, r.jsx)(n.p, { children: 'Puur decoratieve iconen hoeven niet aan deze eis te voldoen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Als iconen ondersteund worden door tekst is het niet noodzakelijk deze van een ', (0, r.jsx)(n.code, { children: 'alt' }), ' tekst te voorzien, een leeg ', (0, r.jsx)(n.code, { children: 'alt=""' }), ' attribuut is dan voldoende.'] }), '\n', (0, r.jsx)(n.h3, { id: 'interactieve-iconen', children: 'Interactieve iconen' }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer een interactief icoon gebruik wordt voor muisgestuurde acties, dan dient het icoon voorzien te zijn van een ', (0, r.jsx)(n.code, { children: 'hover' }), ' staat. Voor toetsenbordbediening dient tevens een ', (0, r.jsx)(n.code, { children: 'focus' }), ' staat aanwezig te zijn zodat gebruikers kunnen zien waar de focus zich op dat moment bevindt.'] }), '\n', (0, r.jsx)(n.p, { children: 'Zorg bij deze interactieve iconen ervoor dat interactie niet alleen gecommuniceerd wordt door middel van kleurverschil.' }), '\n', (0, r.jsx)(n.p, { children: 'Het aanbieden van gevulde iconen voor geselecteerde staten waar standaard lijn-iconen gebruikt worden kan een oplossing zijn. Ook het gebruiken van een wijziging in een icoon bij een bepaalde staat kan uitkomst bieden. Een voorbeeld hiervan is een prullenbak icoon dat een volle prullenbak toont, en een geleegde wanneer deze geleegd is.' }), '\n', (0, r.jsx)(n.h3, { id: 'klik-tapoppervlakte', children: 'Klik en tapoppervlakte' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg voor voldoende klik of tapoppervlakte van interactieve iconen, zeker als deze niet vergezeld zijn van een (klikbaar) tekstueel label. Mocht er onvoldoende oppervlakte zijn van het icoon zelf, dan kan het vergoten van de interactieve marge rondom het icoon bijdragen aan het klik/tapoppervlakte. Gebruikers kunnen echter verward raken en denken dat de interactieve oppervlakte kleiner is dan ze waarnemen, en bovendien kunnen t\xe9 kleine iconen onduidelijk zijn.' }), '\n', (0, r.jsxs)(n.p, { children: ['Hanteer voor een vrijstaand icoon ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size.html', children: 'een minimale oppervlakte van 44\xd744 dp' }), '. Zo wordt gewaarborgd dat een interactief icoon met zowel een muis als op een touchscreen voor gebruikers makkelijk te activeren is. Dit is in het bijzonder belangrijk voor gebruikers met een motorische stoornis, zoals gebruikers met Arthritis of Parkinson.'] }), '\n', (0, r.jsx)(n.h3, { id: 'marge', children: 'Afstanden (marge)' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg tevens voor voldoende ruimte tussen iconen. Iconen moeten duidelijk gescheiden zijn en zeker wanneer iconen van interactie zijn voorzien dient de gebruiker deze afzonderlijke interacties bewust te kunnen onderscheiden en uit te voeren.' }), '\n', (0, r.jsx)(n.h2, { id: 'inclusiviteit', children: 'Inclusiviteit' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg, bijvoorbeeld bij profiel iconen, dat deze gender-neutraal en cultuur-onafhankelijk zijn.' }), '\n', (0, r.jsx)(n.h3, { id: 'context', children: 'Context' }), '\n', (0, r.jsx)(n.p, { children: 'In sommige contexten kunnen iconen verkeerd op gevat worden. Denk bijvoorbeeld aan het gebruiken van een prullenbak om een persoon uit een lijst te verwijderen. Ook een \u2018like\u2019 icoon van een duimpje kan in sommige contexten verkeerd opgevat worden. Biedt in dat geval meerdere iconen aan waarmee waardering gegeven kan worden, maar die niet altijd positief hoeft te zijn.' }), '\n', (0, r.jsx)(n.h2, { id: 'referenties', children: 'Referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://directduidelijk.gebruikercentraal.nl/terugkijken-webinars/inclusief-communiceren-met-iconen/', children: 'Inclusief communiceren met iconen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://uxdesign.cc/make-your-design-system-accessible-part-2-icons-f3f7bd0b4b5a', children: 'Make your design system accessible \u2014 Part 2: Icons' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://taalunie.org/publicaties/204/onderzoek-naar-het-gebruik-van-iconen-als-middel-voor-inclusievere-gemeentelijke-communicatie-in-nederland-en-vlaanderen', children: 'Het complete plaatje? Onderzoek naar het gebruik van iconen als middel voor inclusievere gemeentelijke communicatie in Nederland en Vlaanderen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/utrecht-iconen--iconen', children: 'Utrecht design system' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.designsystems.com/iconography-guide/', children: 'A complete guide to iconography' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.nngroup.com/articles/icon-usability/', children: 'Icon Usability' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2016/10/icons-as-part-of-a-great-user-experience/', children: 'Icons As Part Of A Great User Experience' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://uxdesign.cc/crimes-of-ux-3-useless-iconography-5bf06ef9fed', children: 'When does iconography start to become useless?' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.beeldkompas.nl/kennisbank/wat-is-een-icoon', children: 'Beelkompas: Wat is een icoon' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   var s = t(60851),
    l = t(57716);
   const d = { title: 'Icon', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Icon', pagination_label: 'Icon', description: ' ', slug: '/icon' },
    h = void 0,
    u = { id: 'componenten/icon/index', title: 'Icon', description: ' ', source: '@site/docs/componenten/icon/index.mdx', sourceDirName: 'componenten/icon', slug: '/icon', permalink: '/icon', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/icon/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Icon', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Icon', pagination_label: 'Icon', description: ' ', slug: '/icon' }, sidebar: 'componenten', previous: { title: 'Heading group', permalink: '/heading-group' }, next: { title: 'Invalid form alert', permalink: '/invalid-form-alert' } },
    j = {},
    g = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Richtlijnen', id: 'richtlijnen', level: 2 },
     { value: 'Levende Backlog', id: 'levende-backlog', level: 2 },
    ],
    m = 'Icon',
    p = ' ',
    k = 275,
    v = o.find((e) => e.number === k);
   function y(e) {
    const n = { h2: 'h2', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, r.jsx)(s.Rv, { component: v, headingLevel: 1, description: p }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(s.cN, { component: v, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'implementaties', children: 'Implementaties' }), '\n', (0, r.jsx)(s.W, { component: v, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'richtlijnen', children: 'Richtlijnen' }), '\n', (0, r.jsx)(l.U, { omitH1: !0, headingLevel: 3, children: (0, r.jsx)(a, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'levende-backlog', children: 'Levende Backlog' }), '\n', (0, r.jsx)(s.Gn, { component: v, headingLevel: 3 })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y(e);
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
   t.d(n, { Zb: () => l, aY: () => s, um: () => d, wu: () => a });
   var r = t(93706),
    i = t(4814);
   t(75271);
   const o = { cardgroup: 'cardgroup_0VVt', 'cardgroup--small': 'cardgroup--small_BDzz', 'cardgroup--medium': 'cardgroup--medium_xS6r', 'cardgroup--large': 'cardgroup--large_Tjo8', cardgroup__card: 'cardgroup__card_emnt', 'cardgroup__card--small': 'cardgroup__card--small_bxfC', 'cardgroup__card--medium': 'cardgroup__card--medium_xiP2', 'cardgroup__card--large': 'cardgroup__card--large_PGe3', cardgroup__link: 'cardgroup__link_YISR', card__illustration: 'card__illustration_MVXv', 'card__illustration--background': 'card__illustration--background_cTcZ', card__content: 'card__content_LYKG' };
   var c = t(52676);
   const a = (e) => {
     let { background: n, children: t, className: r, ...a } = e;
     return (0, c.jsx)('div', { className: (0, i.Z)(o.card__illustration, n && o['card__illustration--background'], r), ...a, children: t });
    },
    s = (e) => (0, c.jsx)('div', { className: (0, i.Z)(o.card__content), ...e }),
    l = (e) => {
     let { href: n, appearance: t, className: a, component: s = 'div', children: l } = e;
     const d = (e) => ('article' === s ? (0, c.jsx)('article', { ...e }) : 'section' === s ? (0, c.jsx)('section', { ...e }) : (0, c.jsx)('div', { ...e })),
      h = (0, c.jsx)(d, { className: (0, i.Z)(o.cardgroup__card, o[`cardgroup__card--${t}`], a), children: l });
     return n ? (0, c.jsx)(r.rU, { href: n, boxContent: !0, className: o.cardgroup__link, children: h }) : h;
    },
    d = (e) => {
     let { appearance: n = 'medium', children: t, className: r } = e;
     return (0, c.jsx)('div', { className: (0, i.Z)(o.cardgroup, o[`cardgroup--${n}`], r), children: t });
    };
  },
  60851: (e, n, t) => {
   'use strict';
   t.d(n, { Gn: () => T, cN: () => S, W: () => L, Rv: () => I });
   var r = t(47027),
    i = t(4814),
    o = (t(75271), t(39854)),
    c = t(7522),
    a = t(62559),
    s = t(79734),
    l = t(32636),
    d = t(52676);
   const h = { figma: (0, d.jsx)(o.Z, {}), github: (0, d.jsx)(c.Z, {}), npm: (0, d.jsx)(a.Z, {}), storybook: (0, d.jsx)(s.Z, {}) },
    u = (e) => {
     let { brand: n } = e;
     return (0, d.jsx)(r.JO, { children: h[n] || (0, d.jsx)(l.Z, {}) });
    };
   var j = t(95929);
   const g = { 'definition-of-done': 'definition-of-done_hA8T', 'definition-of-done--help-wanted': 'definition-of-done--help-wanted_eyW6', 'definition-of-done--community': 'definition-of-done--community_s9uY', 'definition-of-done--candidate': 'definition-of-done--candidate_kcli', 'definition-of-done--hall-of-fame': 'definition-of-done--hall-of-fame_uZjI', 'implementation-card-group': 'implementation-card-group_aUZX', 'implementation-card': 'implementation-card_nkoa' };
   var m = t(64909);
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
   var k = t(42677);
   const v = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' },
    y = (e) => {
     let { children: n, level: t = 1, suffix: r } = e;
     return (0, d.jsxs)('hgroup', { className: (0, i.Z)(v['nlds-inline-heading-group'], `utrecht-heading-${t}`), children: [(0, d.jsx)('h1', { className: (0, i.Z)(v['nlds-inline-heading-group__heading']), children: n }), r && (0, d.jsxs)('p', { className: (0, i.Z)(v['nlds-inline-heading-group__suffix']), children: [r ? ' ' : '', r] })] });
    };
   var b = t(93706),
    f = t(49427);
   const x = 'task-list_hh8j',
    _ = 'task-list-item_oypx',
    w = 'task-list-item__marker_Eefn',
    z = 'task-list-item__marker--checked_y8Vc',
    A = 'task-list-item__marker-label_XAyi',
    C = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: x, children: n });
    },
    N = (e) => {
     let { checked: n, title: t, description: r } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)(_), children: [(0, d.jsxs)('div', { className: (0, i.Z)(w, { [z]: n }), children: [(0, d.jsx)('span', { className: A, children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(f.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(b.aC, { role: 'presentation', children: t }), (0, d.jsx)(b.nv, { children: r })] })] });
    };
   var D = t(14669);
   const S = (e) => {
     let { component: n, headingLevel: t } = e;
     const o = n && n.projects.filter((e) => D.e9.includes(e.id)),
      c = o && D.e9.map((e) => o.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: c.map((e) => ({
        className: (0, i.Z)(g['definition-of-done'], e && g[`definition-of-done--${(0, D.mA)(e.title)}`]),
        headingLevel: t,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(C, {
            children: e.tasks.map((e) => {
             let { checked: n, name: t, id: r } = e;
             return (0, d.jsx)(N, { checked: n, title: t, description: (0, D.Q6)(r) }, r);
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
     const o = n && n.projects.filter((e) => !D.e9.includes(e.id));
     return n && o.length
      ? (0, d.jsx)(j.um, {
         appearance: 'large',
         className: (0, i.Z)(g['implementation-card-group']),
         children: o
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
            o = n?.value,
            c = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${o} in Figma` }],
             ['NPM URL (CSS)', { brand: 'npm', desciption: `${o} op NPM` }],
             ['GitHub URL (CSS)', { brand: 'github', desciption: `${o} op GitHub` }],
             ['Storybook URL (CSS)', { brand: 'storybook', desciption: `${o} in Storybook van ${e.title}` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${o} voor visuele regressie tests` }],
            ]),
            a = e.tasks.filter((e) => {
             let { name: n, value: t } = e;
             return c.has(n) && URL.canParse(t) && 'https:' === new URL(t).protocol;
            });
           return (0, d.jsx)(
            j.Zb,
            {
             className: (0, i.Z)(g['implementation-card']),
             children: (0, d.jsxs)(j.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: t, children: e.title }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(p, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               a.length &&
                (0, d.jsxs)(d.Fragment, {
                 children: [
                  (0, d.jsx)(r.X6, { level: t + 1, children: 'Component gebruiken?' }),
                  (0, d.jsx)(r.Mc, {
                   children: a.map((e) => {
                    const n = c.get(e.name);
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
    T = (e) => {
     let { component: n } = e;
     return n && (0, d.jsxs)(r.nv, { children: ['De ', n.title, ' component staat bij NL Design System in de', ' ', (0, d.jsx)(r.rU, { href: n.backlog, children: 'levende backlog' }), ', heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!'] });
    },
    I = (e) => {
     let { component: n, headingLevel: t, description: i } = e;
     const o = n && D.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(y, { level: t, suffix: o && (0, d.jsx)(k.y, { state: o }), children: n.title }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  42677: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => s });
   var r = t(93706),
    i = t(4814);
   t(75271);
   const o = { 'estafette-badge': 'estafette-badge_amWR', 'estafette-badge--todo': 'estafette-badge--todo_EYw0', 'estafette-badge--help-wanted': 'estafette-badge--help-wanted_N7qd', 'estafette-badge--community': 'estafette-badge--community_FJTQ', 'estafette-badge--candidate': 'estafette-badge--candidate_Q2O5', 'estafette-badge--hall-of-fame': 'estafette-badge--hall-of-fame_SqQ1' };
   var c = t(14669),
    a = t(52676);
   const s = (e) => {
    let { state: n } = e;
    const t = (0, c.mA)(n);
    return (0, a.jsx)(r.Ou, { className: (0, i.Z)(o['estafette-badge'], t && o[`estafette-badge--${t}`]), children: n });
   };
  },
  57716: (e, n, t) => {
   'use strict';
   t.d(n, { U: () => d });
   var r = t(24785),
    i = t(93706),
    o = (t(75271), t(52676));
   const c = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    a = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    s = (e) => ({
     img: (n) => {
      let { src: t, ...r } = n;
      return (0, o.jsx)('img', { ...r, src: c(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    l = (e, n) => {
     if (e) {
      const e = { ...a[n - 1] };
      return (e.h1 = () => null), e;
     }
     return a[n];
    },
    d = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: i = 1, baseUrl: c = '' } = e;
     return (0, o.jsx)(r.Z, { components: { ...l(t, i), ...s(c) }, children: n });
    };
  },
  14669: (e, n, t) => {
   'use strict';
   t.d(n, { $3: () => r, Q6: () => o, e9: () => c, mA: () => i });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    c = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' });
  },
 },
]);
