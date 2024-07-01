(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [21229],
 {
  3538: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => j, component: () => y, contentTitle: () => h, default: () => f, description: () => p, frontMatter: () => d, illustration: () => k, issueNumber: () => v, metadata: () => u, title: () => m, toc: () => g });
   var r = t(52676),
    i = t(24785),
    o = t(61475);
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'iconen', children: 'Iconen' }), '\n', (0, r.jsx)(n.p, { children: 'Iconen moeten opzettelijk gebruikt worden en waar mogelijk, met het oog op de toegankelijkheid, gekoppeld aan een tekstlabel. Iconen kunnen zowel als interactieve als statische elementen fungeren.' }), '\n', (0, r.jsx)(n.p, { children: 'Grofweg zijn er twee categorie\xebn iconen; functionele en illustratieve iconen.' }), '\n', (0, r.jsx)(n.p, { children: 'Denk bij functionele iconen bijvoorbeeld aan:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Chevrons' }), '\n', (0, r.jsx)(n.li, { children: 'Opslaan en download indicatoren' }), '\n', (0, r.jsx)(n.li, { children: 'Een \xd7 om een dialoogvenster te sluiten' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Functionele iconen zijn vaak abstract en hun betekenis is vaak aangeleerd, denk hierbij bijvoorbeeld aan het floppy icoon voor opslaan, of een vergrootglas om te zoeken. Illustratieve iconen zorgen in \xe9\xe9n oogopslag dat een tekstlabel verduidelijkt of een thema uitgebeeld kan worden.' }), '\n', (0, r.jsx)(n.h2, { id: 'icoon-en-tekst', children: 'Combinatie van icoon en tekst' }), '\n', (0, r.jsx)(n.p, { children: 'Combineer waar mogelijk een icoon met tekst.' }), '\n', (0, r.jsx)(n.p, { children: 'Het kan zijn dat een bezoeker een icoon niet helemaal goed begrijpt. Het gebruik van tekst (label) is ook een belangrijke factor in de navigatie. Een eenvoudig en duidelijk icoon met een goed omschreven label is superieur aan iconen of labels alleen.' }), '\n', (0, r.jsx)(n.h2, { id: 'hoeveelheid-iconen', children: 'Niet te veel iconen op een pagina' }), '\n', (0, r.jsx)(n.p, { children: 'Te veel iconen gebruiken op een pagina kan een soort blindheid veroorzaken.' }), '\n', (0, r.jsx)(n.p, { children: 'Let er op dat er niet te veel iconen op een pagina komen te staan en voorkom een oerwoud van plaatjes. Bij het gebruik van te veel iconen worden de iconen niets meer dan decoratie op je pagina en mist het z\u2019n doel als navigatiehulp voor de bezoeker.' }), '\n', (0, r.jsx)(n.p, { children: 'Door het aantal iconen te beperken, trekken de iconen die je wel gebruikt sneller de aandacht van de gebruiker en wordt het navigeren op de pagina eenvoudiger.' }), '\n', (0, r.jsx)(n.p, { children: 'De uitstraling van iconen hebben een effect op de vormgeving van de portaal/webpagina. Let dus goed op hoe en welke iconen jullie willen gaan gebruiken.' }), '\n', (0, r.jsx)(n.h2, { id: 'kleur', children: 'Icoon kleuren' }), '\n', (0, r.jsx)(n.p, { children: 'Icoon kleuren moeten automatisch de kleur kunnen overnemen van nabije content.' }), '\n', (0, r.jsx)(n.p, { children: 'De valkuil is om hardcoded kleur waardes zoals fill="#ABCDEF te gebruiken. Gebruik in plaats daar van de CSS waarde currentColor: fill="currentColor". Dit is een handmatige aanpassing in de code van de SVG, en een essenti\xeble. Dit principe is ook toepasbaar op andere kleur-gerelateerde eigenschappen zoals stroke.' }), '\n', (0, r.jsx)(n.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, r.jsx)(n.p, { children: 'Functionele iconen communiceren belangrijke functionaliteit. Hierdoor dienen deze voor iedereen toegankelijk te zijn. Zo dient de informatie die zij overbrengen tevens voor voorlees-software beschikbaar te zijn en hebben ze voldoende kleurcontrast voor mensen met een visuele beperking. Puur decoratieve iconen hoeven niet aan toegankelijkheidsrichtlijnen te voldoen. Als een illustratief icoon tekst verduidelijkt, zorg dan dat deze verduidelijking tevens aangeboden wordt aan voorlees-software.' }), '\n', (0, r.jsx)(n.h3, { id: 'tekstlabels', children: 'Tekstlabels' }), '\n', (0, r.jsx)(n.p, { children: 'Probeer zoveel mogelijk iconen van een tekstlabel te voorzien. Wanneer een (interactief) icoon zonder tekstlabel aangeboden wordt, zorg dan een een tekstverduidelijking wel aan voorlees-software aangeboden wordt.' }), '\n', (0, r.jsx)(n.h3, { id: 'contrast', children: 'Contrast' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg voor functionele iconen dat deze voldoende contrast hebben met de achtergrond en omliggende kleuren. Zie hiervoor ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G207', children: 'WCAG techniek G207' }), ' en ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#contrast-van-niet-tekstuele-content', children: 'succescriterium 1.4.11, contrast van niet-tekstuele content' }), '. Er dient een minimale contrastverhouding van 3:1 ten opzichte van onderliggende en aangrenzende kleuren te zijn.'] }), '\n', (0, r.jsx)(n.p, { children: 'Puur decoratieve iconen hoeven niet aan deze eis te voldoen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Als iconen ondersteund worden door tekst is het niet noodzakelijk deze van een ', (0, r.jsx)(n.code, { children: 'alt' }), ' tekst te voorzien, een leeg ', (0, r.jsx)(n.code, { children: 'alt=""' }), ' attribuut is dan voldoende.'] }), '\n', (0, r.jsx)(n.h3, { id: 'interactieve-iconen', children: 'Interactieve iconen' }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer een interactief icoon gebruik wordt voor muisgestuurde acties, dan dient het icoon voorzien te zijn van een ', (0, r.jsx)(n.code, { children: 'hover' }), ' staat. Voor toetsenbordbediening dient tevens een ', (0, r.jsx)(n.code, { children: 'focus' }), ' staat aanwezig te zijn zodat gebruikers kunnen zien waar de focus zich op dat moment bevindt.'] }), '\n', (0, r.jsx)(n.p, { children: 'Zorg bij deze interactieve iconen ervoor dat interactie niet alleen gecommuniceerd wordt door middel van kleurverschil.' }), '\n', (0, r.jsx)(n.p, { children: 'Het aanbieden van gevulde iconen voor geselecteerde staten waar standaard lijn-iconen gebruikt worden kan een oplossing zijn. Ook het gebruiken van een wijziging in een icoon bij een bepaalde staat kan uitkomst bieden. Een voorbeeld hiervan is een prullenbak icoon dat een volle prullenbak toont, en een geleegde wanneer deze geleegd is.' }), '\n', (0, r.jsx)(n.h3, { id: 'klik-tapoppervlakte', children: 'Klik en tapoppervlakte' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg voor voldoende klik of tapoppervlakte van interactieve iconen, zeker als deze niet vergezeld zijn van een (klikbaar) tekstueel label. Mocht er onvoldoende oppervlakte zijn van het icoon zelf, dan kan het vergoten van de interactieve marge rondom het icoon bijdragen aan het klik/tapoppervlakte. Gebruikers kunnen echter verward raken en denken dat de interactieve oppervlakte kleiner is dan ze waarnemen, en bovendien kunnen t\xe9 kleine iconen onduidelijk zijn.' }), '\n', (0, r.jsxs)(n.p, { children: ['Hanteer voor een vrijstaand icoon ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size.html', children: 'een minimale oppervlakte van 44\xd744 dp' }), '. Zo wordt gewaarborgd dat een interactief icoon met zowel een muis als op een touchscreen voor gebruikers makkelijk te activeren is. Dit is in het bijzonder belangrijk voor gebruikers met een motorische stoornis, zoals gebruikers met Arthritis of Parkinson.'] }), '\n', (0, r.jsx)(n.h3, { id: 'marge', children: 'Afstanden (marge)' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg tevens voor voldoende ruimte tussen iconen. Iconen moeten duidelijk gescheiden zijn en zeker wanneer iconen van interactie zijn voorzien dient de gebruiker deze afzonderlijke interacties bewust te kunnen onderscheiden en uit te voeren.' }), '\n', (0, r.jsx)(n.h2, { id: 'inclusiviteit', children: 'Inclusiviteit' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg, bijvoorbeeld bij profiel iconen, dat deze gender-neutraal en cultuur-onafhankelijk zijn.' }), '\n', (0, r.jsx)(n.h3, { id: 'context', children: 'Context' }), '\n', (0, r.jsx)(n.p, { children: 'In sommige contexten kunnen iconen verkeerd op gevat worden. Denk bijvoorbeeld aan het gebruiken van een prullenbak om een persoon uit een lijst te verwijderen. Ook een \u2018like\u2019 icoon van een duimpje kan in sommige contexten verkeerd opgevat worden. Biedt in dat geval meerdere iconen aan waarmee waardering gegeven kan worden, maar die niet altijd positief hoeft te zijn.' }), '\n', (0, r.jsx)(n.h2, { id: 'referenties', children: 'Referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://directduidelijk.gebruikercentraal.nl/terugkijken-webinars/inclusief-communiceren-met-iconen/', children: 'Inclusief communiceren met iconen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://uxdesign.cc/make-your-design-system-accessible-part-2-icons-f3f7bd0b4b5a', children: 'Make your design system accessible \u2014 Part 2: Icons' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://taalunie.org/publicaties/204/onderzoek-naar-het-gebruik-van-iconen-als-middel-voor-inclusievere-gemeentelijke-communicatie-in-nederland-en-vlaanderen', children: 'Het complete plaatje? Onderzoek naar het gebruik van iconen als middel voor inclusievere gemeentelijke communicatie in Nederland en Vlaanderen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/utrecht-iconen--iconen', children: 'Utrecht design system' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.designsystems.com/iconography-guide/', children: 'A complete guide to iconography' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.nngroup.com/articles/icon-usability/', children: 'Icon Usability' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2016/10/icons-as-part-of-a-great-user-experience/', children: 'Icons As Part Of A Great User Experience' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://uxdesign.cc/crimes-of-ux-3-useless-iconography-5bf06ef9fed', children: 'When does iconography start to become useless?' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.beeldkompas.nl/kennisbank/wat-is-een-icoon', children: 'Beelkompas: Wat is een icoon' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   var s = t(21998),
    l = t(57716);
   const d = { title: 'Icon', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Icon', pagination_label: 'Icon', description: ' ', slug: '/icon', sidebar_custom_props: { illustration: 'IconSketch' } },
    h = void 0,
    u = { id: 'componenten/icon/index', title: 'Icon', description: ' ', source: '@site/docs/componenten/icon/index.mdx', sourceDirName: 'componenten/icon', slug: '/icon', permalink: '/en/icon', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/icon/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Icon', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Icon', pagination_label: 'Icon', description: ' ', slug: '/icon', sidebar_custom_props: { illustration: 'IconSketch' } }, sidebar: 'componenten', previous: { title: 'Heading group', permalink: '/en/heading-group' }, next: { title: 'Invalid form alert', permalink: '/en/invalid-form-alert' } },
    j = {},
    g = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Richtlijnen', id: 'richtlijnen', level: 2 },
     { value: 'Levende Backlog', id: 'levende-backlog', level: 2 },
    ],
    m = 'Icon',
    p = ' ',
    k = 'IconSketch',
    v = 275,
    y = o.find((e) => e.number === v);
   function b(e) {
    const n = { h2: 'h2', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, r.jsx)(s.Rv, { component: y, headingLevel: 1, description: p, illustration: k }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(s.cN, { component: y, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'implementaties', children: 'Implementaties' }), '\n', (0, r.jsx)(s.W, { component: y, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'richtlijnen', children: 'Richtlijnen' }), '\n', (0, r.jsx)(l.U, { omitH1: !0, headingLevel: 3, children: (0, r.jsx)(a, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'levende-backlog', children: 'Levende Backlog' }), '\n', (0, r.jsx)(s.Gn, { component: y, headingLevel: 3 })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b(e);
   }
  },
  87230: (e, n, t) => {
   var r = { './utrecht-alert_46.entry.js': [71115, 71115], './utrecht-backdrop.entry.js': [63455, 63455], './utrecht-breadcrumb-nav.entry.js': [19566, 19566], './utrecht-checkbox.entry.js': [1779, 1779], './utrecht-column-layout.entry.js': [94923, 94923], './utrecht-contact-card-template.entry.js': [20603, 20603], './utrecht-custom-checkbox.entry.js': [79886, 79886], './utrecht-data-list-actions.entry.js': [47086, 47086], './utrecht-data-list-item.entry.js': [11973, 11973], './utrecht-data-list-key.entry.js': [55159, 55159], './utrecht-data-list-value.entry.js': [12440, 12440], './utrecht-data-list.entry.js': [61607, 61607], './utrecht-digid-button.entry.js': [74283, 74283], './utrecht-digid-logo.entry.js': [86278, 86278], './utrecht-eherkenning-logo.entry.js': [87515, 87515], './utrecht-eidas-logo.entry.js': [10316, 10316], './utrecht-form-field-error-message.entry.js': [37929, 37929], './utrecht-form-toggle.entry.js': [43972, 43972], './utrecht-html-content.entry.js': [87249, 87249], './utrecht-icon-afspraak-maken.entry.js': [33380, 33380], './utrecht-icon-afval-container.entry.js': [96852, 96852], './utrecht-icon-afval-containerpas.entry.js': [91338, 91338], './utrecht-icon-afval-kalender.entry.js': [63431, 63431], './utrecht-icon-afval-pmd.entry.js': [60482, 60482], './utrecht-icon-afval-scheiden.entry.js': [36679, 36679], './utrecht-icon-afval.entry.js': [54777, 54777], './utrecht-icon-afvalkalender.entry.js': [27102, 27102], './utrecht-icon-alleen.entry.js': [25692, 25692], './utrecht-icon-arrow.entry.js': [99570, 99570], './utrecht-icon-auto.entry.js': [98458, 98458], './utrecht-icon-begroting.entry.js': [7249, 7249], './utrecht-icon-bestemmingsplan.entry.js': [23697, 23697], './utrecht-icon-betaaldatum.entry.js': [9847, 9847], './utrecht-icon-bewijsstukken.entry.js': [33160, 33160], './utrecht-icon-bijstand.entry.js': [16097, 16097], './utrecht-icon-blad.entry.js': [93341, 93341], './utrecht-icon-bouwproject.entry.js': [59777, 59777], './utrecht-icon-brandgevaar.entry.js': [90938, 90938], './utrecht-icon-brief-betalen.entry.js': [38431, 38431], './utrecht-icon-checkmark.entry.js': [65959, 65959], './utrecht-icon-chevron-down.entry.js': [20478, 20478], './utrecht-icon-chevron-left.entry.js': [99840, 99840], './utrecht-icon-chevron-right.entry.js': [52317, 52317], './utrecht-icon-chevron-up.entry.js': [55011, 55011], './utrecht-icon-close.entry.js': [69246, 69246], './utrecht-icon-college-b-w.entry.js': [62025, 62025], './utrecht-icon-container-bio.entry.js': [17176, 17176], './utrecht-icon-container-glas.entry.js': [42713, 42713], './utrecht-icon-container-groenafval.entry.js': [2165, 2165], './utrecht-icon-container-met-zak.entry.js': [85697, 85697], './utrecht-icon-container-papier.entry.js': [53020, 53020], './utrecht-icon-container-pmd.entry.js': [30728, 30728], './utrecht-icon-container-restafval.entry.js': [31742, 31742], './utrecht-icon-container-textiel.entry.js': [43095, 43095], './utrecht-icon-container.entry.js': [31787, 31787], './utrecht-icon-cross.entry.js': [15811, 15811], './utrecht-icon-dakloos.entry.js': [61994, 61994], './utrecht-icon-dementie.entry.js': [64635, 64635], './utrecht-icon-documenten.entry.js': [94377, 94377], './utrecht-icon-duurzaam.entry.js': [39556, 39556], './utrecht-icon-eenzaamheid.entry.js': [13221, 13221], './utrecht-icon-eikenprocessie.entry.js': [37786, 37786], './utrecht-icon-elektrisch-rijden.entry.js': [7292, 7292], './utrecht-icon-energie-vergoeding.entry.js': [54904, 54904], './utrecht-icon-energietransitie.entry.js': [61220, 61220], './utrecht-icon-error.entry.js': [8178, 8178], './utrecht-icon-evenementen.entry.js': [3236, 3236], './utrecht-icon-facebook.entry.js': [49128, 49128], './utrecht-icon-fiets.entry.js': [9520, 9520], './utrecht-icon-filter.entry.js': [21364, 21364], './utrecht-icon-geboorte.entry.js': [19686, 19686], './utrecht-icon-gebruiker-centraal.entry.js': [26804, 26804], './utrecht-icon-gebruiker-ingelogd.entry.js': [78635, 78635], './utrecht-icon-gegevenswoordenboek.entry.js': [25081, 25081], './utrecht-icon-geluid.entry.js': [55374, 55374], './utrecht-icon-gemeente-locatie.entry.js': [11513, 11513], './utrecht-icon-gemeenteraad.entry.js': [5690, 5690], './utrecht-icon-gereedschap.entry.js': [58150, 58150], './utrecht-icon-gezicht.entry.js': [39329, 39329], './utrecht-icon-gezin.entry.js': [88470, 88470], './utrecht-icon-glas-afval.entry.js': [57781, 57781], './utrecht-icon-glijbaan.entry.js': [11376, 11376], './utrecht-icon-grafiek.entry.js': [70029, 70029], './utrecht-icon-grofvuil-ophalen.entry.js': [82627, 82627], './utrecht-icon-grofvuil.entry.js': [45714, 45714], './utrecht-icon-hamburger-menu.entry.js': [63090, 63090], './utrecht-icon-herdenking.entry.js': [3274, 3274], './utrecht-icon-hondenbelasting.entry.js': [71386, 71386], './utrecht-icon-horeca.entry.js': [89543, 89543], './utrecht-icon-horecavergunning.entry.js': [28737, 28737], './utrecht-icon-huis-en-omgeving.entry.js': [23592, 23592], './utrecht-icon-huis.entry.js': [77982, 77982], './utrecht-icon-huishoudelijk-geweld.entry.js': [35252, 35252], './utrecht-icon-hulp-huishouden.entry.js': [34557, 34557], './utrecht-icon-hulp-vervoer.entry.js': [43521, 43521], './utrecht-icon-hulp-zorg.entry.js': [87282, 87282], './utrecht-icon-hulpmiddelen-gezin.entry.js': [29047, 58243], './utrecht-icon-hulpverlening.entry.js': [38411, 38411], './utrecht-icon-idee.entry.js': [94751, 94751], './utrecht-icon-informatie.entry.js': [30663, 30663], './utrecht-icon-information.entry.js': [16980, 16980], './utrecht-icon-innovatie.entry.js': [18791, 18791], './utrecht-icon-inspraak-inwoners.entry.js': [12437, 12437], './utrecht-icon-instagram.entry.js': [85931, 85931], './utrecht-icon-kalender.entry.js': [30102, 30102], './utrecht-icon-kennis.entry.js': [51808, 51808], './utrecht-icon-kerstbomen.entry.js': [70463, 70463], './utrecht-icon-klachten.entry.js': [74392, 74392], './utrecht-icon-kroon.entry.js': [64025, 64025], './utrecht-icon-laadpaal.entry.js': [18618, 18618], './utrecht-icon-language.entry.js': [69099, 69099], './utrecht-icon-lantaarnpaal-oud.entry.js': [50670, 50670], './utrecht-icon-lantaarnpaal.entry.js': [62890, 62890], './utrecht-icon-leren.entry.js': [79670, 79670], './utrecht-icon-let-op.entry.js': [85307, 85307], './utrecht-icon-linkedin.entry.js': [11475, 11475], './utrecht-icon-list-check.entry.js': [74682, 74682], './utrecht-icon-list-number.entry.js': [32603, 32603], './utrecht-icon-list.entry.js': [10343, 10343], './utrecht-icon-loupe.entry.js': [13622, 13622], './utrecht-icon-markt.entry.js': [37305, 37305], './utrecht-icon-melding-boom.entry.js': [22787, 22787], './utrecht-icon-melding-klacht.entry.js': [72938, 72938], './utrecht-icon-melding-openbareruimte.entry.js': [25332, 25332], './utrecht-icon-melding-verlichting.entry.js': [58309, 58309], './utrecht-icon-melding.entry.js': [71529, 71529], './utrecht-icon-menselijk.entry.js': [57750, 57750], './utrecht-icon-menu-dot-open.entry.js': [83591, 83591], './utrecht-icon-menu-dot.entry.js': [44075, 44075], './utrecht-icon-meterkast.entry.js': [63378, 63378], './utrecht-icon-milieu-ontheffing.entry.js': [16438, 16438], './utrecht-icon-milieu-zone.entry.js': [13004, 13004], './utrecht-icon-minus-vertical.entry.js': [25945, 25945], './utrecht-icon-minus.entry.js': [94200, 94200], './utrecht-icon-mobiliteit.entry.js': [83596, 83596], './utrecht-icon-natuur.entry.js': [71178, 71178], './utrecht-icon-nieuw-huis.entry.js': [37131, 37131], './utrecht-icon-nieuwsbrief.entry.js': [33071, 33071], './utrecht-icon-nummerbord.entry.js': [45079, 45079], './utrecht-icon-om-het-huis.entry.js': [84757, 84757], './utrecht-icon-omgeving.entry.js': [42609, 42609], './utrecht-icon-omgevingsvisie.entry.js': [73631, 73631], './utrecht-icon-omgevingswet.entry.js': [86408, 86408], './utrecht-icon-onderhoud.entry.js': [52223, 52223], './utrecht-icon-ondernemen.entry.js': [10296, 10296], './utrecht-icon-openingstijden.entry.js': [76357, 76357], './utrecht-icon-over-de-stad.entry.js': [9037, 9037], './utrecht-icon-overlijden.entry.js': [88508, 88508], './utrecht-icon-panden.entry.js': [99626, 99626], './utrecht-icon-park.entry.js': [78816, 78816], './utrecht-icon-parkeerkaart.entry.js': [37045, 37045], './utrecht-icon-parkeervergunning.entry.js': [5870, 5870], './utrecht-icon-parken.entry.js': [61656, 61656], './utrecht-icon-parkeren-bedrijven.entry.js': [37506, 37506], './utrecht-icon-parkeren-betaalautomaat.entry.js': [4304, 4304], './utrecht-icon-parkeren-betalen.entry.js': [31803, 31803], './utrecht-icon-parkeren.entry.js': [24905, 24905], './utrecht-icon-participatie-campagne.entry.js': [45398, 45398], './utrecht-icon-participatie-like.entry.js': [90153, 90153], './utrecht-icon-participatie-pitch.entry.js': [48209, 48209], './utrecht-icon-paspoort.entry.js': [57518, 57518], './utrecht-icon-presentatie.entry.js': [83784, 83784], './utrecht-icon-prijskaartje.entry.js': [82645, 82645], './utrecht-icon-read-aloud.entry.js': [1026, 1026], './utrecht-icon-rijbewijs.entry.js': [73958, 73958], './utrecht-icon-rioolheffing.entry.js': [47612, 47612], './utrecht-icon-rolstoel.entry.js': [64239, 64239], './utrecht-icon-schild-gemeente-utrecht.entry.js': [9053, 9053], './utrecht-icon-search.entry.js': [14236, 14236], './utrecht-icon-shoppen.entry.js': [42871, 42871], './utrecht-icon-sinterklaas.entry.js': [51470, 51470], './utrecht-icon-slechtziende-hoordende.entry.js': [78935, 78935], './utrecht-icon-sport-en-cultuur.entry.js': [29778, 29778], './utrecht-icon-sport-voetbal.entry.js': [84106, 84106], './utrecht-icon-sport.entry.js': [64218, 64218], './utrecht-icon-stookverbod.entry.js': [87439, 87439], './utrecht-icon-strand.entry.js': [89276, 89276], './utrecht-icon-strooien.entry.js': [79609, 79609], './utrecht-icon-subsidie-gezin.entry.js': [61903, 61903], './utrecht-icon-subsidie.entry.js': [8376, 8376], './utrecht-icon-t-shirt.entry.js': [98212, 98212], './utrecht-icon-thuiswerken.entry.js': [39139, 39139], './utrecht-icon-toeslag.entry.js': [44692, 44692], './utrecht-icon-trein.entry.js': [41671, 41671], './utrecht-icon-trouwen.entry.js': [43120, 43120], './utrecht-icon-twitter.entry.js': [39302, 39302], './utrecht-icon-user.entry.js': [45538, 45538], './utrecht-icon-uw-wijk.entry.js': [53214, 53214], './utrecht-icon-vaccinatie.entry.js': [14985, 14985], './utrecht-icon-veilige-wijk.entry.js': [33337, 33337], './utrecht-icon-vergaderen.entry.js': [36109, 36109], './utrecht-icon-vergaderendigitaal.entry.js': [342, 342], './utrecht-icon-vergoeding.entry.js': [87176, 87176], './utrecht-icon-verhuizen.entry.js': [7559, 7559], './utrecht-icon-verkeerslicht.entry.js': [85743, 85743], './utrecht-icon-verkiezingen.entry.js': [27026, 27026], './utrecht-icon-verslaving.entry.js': [85879, 85879], './utrecht-icon-vervoersvoorziening.entry.js': [65676, 65676], './utrecht-icon-virus.entry.js': [86965, 86965], './utrecht-icon-vluchtelingen.entry.js': [79199, 79199], './utrecht-icon-voorzieningen-vervoer.entry.js': [86744, 86744], './utrecht-icon-vrijwilligerswerk.entry.js': [64916, 64916], './utrecht-icon-vuilnisbak.entry.js': [6692, 6692], './utrecht-icon-vuilniszak.entry.js': [84454, 84454], './utrecht-icon-vuurwerk.entry.js': [27824, 27824], './utrecht-icon-wandelstok.entry.js': [41378, 41378], './utrecht-icon-warm.entry.js': [76987, 76987], './utrecht-icon-warning.entry.js': [43444, 43444], './utrecht-icon-werken.entry.js': [47413, 47413], './utrecht-icon-werkzaamheden.entry.js': [75967, 75967], './utrecht-icon-whatsapp.entry.js': [16300, 16300], './utrecht-icon-wonen-kosten.entry.js': [40475, 40475], './utrecht-icon-woning-zoeken.entry.js': [4032, 4032], './utrecht-icon-x.entry.js': [43252, 43252], './utrecht-icon-youtube.entry.js': [26789, 26789], './utrecht-icon-zelfstandig-wonen.entry.js': [25668, 25668], './utrecht-icon-zoom-minus.entry.js': [17628, 17628], './utrecht-icon-zoom-plus.entry.js': [75442, 75442], './utrecht-icon-zoomin.entry.js': [12282, 12282], './utrecht-icon-zoomout.entry.js': [23038, 23038], './utrecht-icon-zorg-huis.entry.js': [95567, 95567], './utrecht-icon-zweefpaal.entry.js': [32865, 32865], './utrecht-icon-zwemmen.entry.js': [31709, 31709], './utrecht-logo-button.entry.js': [5087, 5087], './utrecht-map-marker.entry.js': [81463, 81463], './utrecht-multiline-data.entry.js': [60065, 60065], './utrecht-page-footer.entry.js': [93727, 93727], './utrecht-pagination.entry.js': [74325, 74325], './utrecht-progress-list-item.entry.js': [1839, 1839], './utrecht-progress-list.entry.js': [56161, 56161], './utrecht-progress-sublist-item.entry.js': [38917, 38917], './utrecht-sidenav.entry.js': [44781, 44781], './utrecht-surface.entry.js': [68955, 68955], './utrecht-table-body.entry.js': [79554, 79554], './utrecht-table-caption.entry.js': [69811, 69811], './utrecht-table-cell.entry.js': [82972, 82972], './utrecht-table-footer.entry.js': [2171, 2171], './utrecht-table-header-cell.entry.js': [66, 66], './utrecht-table-header.entry.js': [43142, 43142], './utrecht-table-row.entry.js': [57840, 57840], './utrecht-table.entry.js': [52203, 52203], './utrecht-textarea.entry.js': [17410, 17410], './utrecht-textbox.entry.js': [11701, 11701] };
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
   (i.keys = () => Object.keys(r)), (i.id = 87230), (e.exports = i);
  },
  48459: (e, n, t) => {
   'use strict';
   t.d(n, { Zb: () => l, aY: () => s, um: () => d, wu: () => a });
   var r = t(78187),
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
  21998: (e, n, t) => {
   'use strict';
   t.d(n, { Gn: () => L, cN: () => S, W: () => D, Rv: () => T });
   var r = t(40168),
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
   var j = t(48459);
   const g = { 'definition-of-done': 'definition-of-done_hA8T', 'definition-of-done--help-wanted': 'definition-of-done--help-wanted_eyW6', 'definition-of-done--community': 'definition-of-done--community_s9uY', 'definition-of-done--candidate': 'definition-of-done--candidate_kcli', 'definition-of-done--hall-of-fame': 'definition-of-done--hall-of-fame_uZjI', 'implementation-card-group': 'implementation-card-group_aUZX', 'implementation-card': 'implementation-card_nkoa' };
   var m = t(29795);
   const p = (e) => {
    let { checked: n, unchecked: r } = e;
    return (0, d.jsx)(m.Z, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const e = t(99487).YE;
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
   var k = t(5671),
    v = t(78187),
    y = t(89870);
   const b = 'task-list_hh8j',
    f = 'task-list-item_oypx',
    x = 'task-list-item__marker_Eefn',
    w = 'task-list-item__marker--checked_y8Vc',
    _ = 'task-list-item__marker-label_XAyi',
    z = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: b, children: n });
    },
    A = (e) => {
     let { checked: n, title: t, description: r } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)(f), children: [(0, d.jsxs)('div', { className: (0, i.Z)(x, { [w]: n }), children: [(0, d.jsx)('span', { className: _, children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(y.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(v.aC, { role: 'presentation', children: t }), (0, d.jsx)(v.nv, { children: r })] })] });
    };
   var C = t(14669);
   const N = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    S = (e) => {
     let { component: n, headingLevel: t } = e;
     const o = n && n.projects.filter((e) => N.includes(e.id)),
      c = o && N.map((e) => o.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: c.map((e) => ({
        className: (0, i.Z)(g['definition-of-done'], g[`definition-of-done--${(0, C.mA)(e.title)}`]),
        headingLevel: t,
        expanded: !1,
        label: `${e.title} - ${e.progress.value} van ${e.progress.max}`,
        body: (0, d.jsxs)(d.Fragment, {
         children: [
          (0, d.jsx)(z, {
           children: e.tasks.map((e) => {
            let { checked: n, name: t, id: r } = e;
            return (0, d.jsx)(A, { checked: n, title: t, description: (0, C.Q6)(r) }, r);
           }),
          }),
          (0, d.jsx)(r.nv, { children: (0, d.jsxs)(r.rU, { href: `${e.url}?filterQuery=${n.title}`, children: [e.title, ' projectbord op GitHub'] }) }),
         ],
        }),
       })),
      })
     );
    },
    D = (e) => {
     let { component: n, headingLevel: t } = e;
     const o = n && n.projects.filter((e) => !N.includes(e.id));
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
           const { value: n } = e.tasks.find((e) => {
             let { name: n } = e;
             return 'Naam' === n;
            }),
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${n} in Figma` }],
             ['NPM URL (CSS)', { brand: 'npm', desciption: `${n} op NPM` }],
             ['GitHub URL (CSS)', { brand: 'github', desciption: `${n} op GitHub` }],
             ['Storybook URL (CSS)', { brand: 'storybook', desciption: `${n} in Storybook van ${e.title}` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${n} voor visuele regressie tests` }],
            ]),
            c = e.tasks.filter((e) => {
             let { name: n, value: t } = e;
             return o.has(n) && URL.canParse(t) && 'https:' === new URL(t).protocol;
            });
           return (0, d.jsx)(
            j.Zb,
            {
             className: (0, i.Z)(g['implementation-card']),
             children: (0, d.jsxs)(j.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: t, children: e.title }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(p, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               c.length &&
                (0, d.jsxs)(d.Fragment, {
                 children: [
                  (0, d.jsx)(r.X6, { level: t + 1, children: 'Component gebruiken?' }),
                  (0, d.jsx)(r.Mc, {
                   children: c.map((e) => {
                    const { brand: n, desciption: t } = o.get(e.name);
                    return (0, d.jsxs)(r.k7, { href: e.value, children: [(0, d.jsx)(u, { brand: n }), ' ', t] }, e.id);
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
    L = (e) => {
     let { component: n } = e;
     return n && (0, d.jsxs)(r.nv, { children: ['De ', n.title, ' component staat bij NL Design System in de', ' ', (0, d.jsx)(r.rU, { href: n.backlog, children: 'levende backlog' }), ', heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!'] });
    },
    T = (e) => {
     let { component: n, headingLevel: t, description: i } = e;
     const o = n && C.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.X6, { level: t, children: [n.title, ' ', o && (0, d.jsx)(k.y, { state: o })] }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  5671: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => s });
   var r = t(78187),
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
    i = t(78187),
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
   t.d(n, { $3: () => r, Q6: () => o, mA: () => i });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e];
  },
 },
]);
