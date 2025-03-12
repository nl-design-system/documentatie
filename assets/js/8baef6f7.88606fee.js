(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [21229],
 {
  90618: (e, n, t) => {
   'use strict';
   t.r(n), t.d(n, { assets: () => j, component: () => k, contentTitle: () => h, default: () => b, description: () => p, frontMatter: () => d, issueNumber: () => v, metadata: () => u, title: () => m, toc: () => g });
   var r = t(52676),
    i = t(40139),
    o = t(40064),
    c = t(8657),
    s = t(57716);
   function a(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'iconen', children: 'Iconen' }), '\n', (0, r.jsx)(n.p, { children: 'Iconen moeten opzettelijk gebruikt worden en waar mogelijk, met het oog op de toegankelijkheid, gekoppeld aan een tekstlabel. Iconen kunnen zowel als interactieve als statische elementen fungeren.' }), '\n', (0, r.jsx)(n.p, { children: 'Grofweg zijn er twee categorie\xebn iconen; functionele en illustratieve iconen.' }), '\n', (0, r.jsx)(n.p, { children: 'Denk bij functionele iconen bijvoorbeeld aan:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Chevrons' }), '\n', (0, r.jsx)(n.li, { children: 'Opslaan en download indicatoren' }), '\n', (0, r.jsx)(n.li, { children: 'Een \xd7 om een dialoogvenster te sluiten' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Functionele iconen zijn vaak abstract en hun betekenis is vaak aangeleerd, denk hierbij bijvoorbeeld aan het floppy icoon voor opslaan, of een vergrootglas om te zoeken. Illustratieve iconen zorgen in \xe9\xe9n oogopslag dat een tekstlabel verduidelijkt of een thema uitgebeeld kan worden.' }), '\n', (0, r.jsx)(n.h2, { id: 'icoon-en-tekst', children: 'Combinatie van icoon en tekst' }), '\n', (0, r.jsx)(n.p, { children: 'Combineer waar mogelijk een icoon met tekst.' }), '\n', (0, r.jsx)(n.p, { children: 'Het kan zijn dat een bezoeker een icoon niet helemaal goed begrijpt. Het gebruik van tekst (label) is ook een belangrijke factor in de navigatie. Een eenvoudig en duidelijk icoon met een goed omschreven label is superieur aan iconen of labels alleen.' }), '\n', (0, r.jsx)(n.h2, { id: 'hoeveelheid-iconen', children: 'Niet te veel iconen op een pagina' }), '\n', (0, r.jsx)(n.p, { children: 'Te veel iconen gebruiken op een pagina kan een soort blindheid veroorzaken.' }), '\n', (0, r.jsx)(n.p, { children: 'Let er op dat er niet te veel iconen op een pagina komen te staan en voorkom een oerwoud van plaatjes. Bij het gebruik van te veel iconen worden de iconen niets meer dan decoratie op je pagina en mist het z\u2019n doel als navigatiehulp voor de bezoeker.' }), '\n', (0, r.jsx)(n.p, { children: 'Door het aantal iconen te beperken, trekken de iconen die je wel gebruikt sneller de aandacht van de gebruiker en wordt het navigeren op de pagina eenvoudiger.' }), '\n', (0, r.jsx)(n.p, { children: 'De uitstraling van iconen hebben een effect op de vormgeving van de portaal/webpagina. Let dus goed op hoe en welke iconen jullie willen gaan gebruiken.' }), '\n', (0, r.jsx)(n.h2, { id: 'kleur', children: 'Icoon kleuren' }), '\n', (0, r.jsx)(n.p, { children: 'Icoon kleuren moeten automatisch de kleur kunnen overnemen van nabije content.' }), '\n', (0, r.jsx)(n.p, { children: 'De valkuil is om hardcoded kleur waardes zoals fill="#ABCDEF te gebruiken. Gebruik in plaats daar van de CSS waarde currentColor: fill="currentColor". Dit is een handmatige aanpassing in de code van de SVG, en een essenti\xeble. Dit principe is ook toepasbaar op andere kleur-gerelateerde eigenschappen zoals stroke.' }), '\n', (0, r.jsx)(n.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, r.jsx)(n.p, { children: 'Functionele iconen communiceren belangrijke functionaliteit. Hierdoor dienen deze voor iedereen toegankelijk te zijn. Zo dient de informatie die zij overbrengen tevens voor voorlees-software beschikbaar te zijn en hebben ze voldoende kleurcontrast voor mensen met een visuele beperking. Puur decoratieve iconen hoeven niet aan toegankelijkheidsrichtlijnen te voldoen. Als een illustratief icoon tekst verduidelijkt, zorg dan dat deze verduidelijking tevens aangeboden wordt aan voorlees-software.' }), '\n', (0, r.jsx)(n.h3, { id: 'tekstlabels', children: 'Tekstlabels' }), '\n', (0, r.jsx)(n.p, { children: 'Probeer zoveel mogelijk iconen van een tekstlabel te voorzien. Wanneer een (interactief) icoon zonder tekstlabel aangeboden wordt, zorg dan een een tekstverduidelijking wel aan voorlees-software aangeboden wordt.' }), '\n', (0, r.jsx)(n.h3, { id: 'contrast', children: 'Contrast' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg voor functionele iconen dat deze voldoende contrast hebben met de achtergrond en omliggende kleuren. Zie hiervoor ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G207', children: 'WCAG techniek G207' }), ' en het ', (0, r.jsx)(n.a, { href: '/wcag/1.4.11', children: 'WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content' }), '. Er dient een minimale contrastverhouding van 3:1 ten opzichte van onderliggende en aangrenzende kleuren te zijn.'] }), '\n', (0, r.jsx)(n.p, { children: 'Puur decoratieve iconen hoeven niet aan deze eis te voldoen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Als iconen ondersteund worden door tekst is het niet noodzakelijk deze van een ', (0, r.jsx)(n.code, { children: 'alt' }), ' tekst te voorzien, een leeg ', (0, r.jsx)(n.code, { children: 'alt=""' }), ' attribuut is dan voldoende.'] }), '\n', (0, r.jsx)(n.h3, { id: 'interactieve-iconen', children: 'Interactieve iconen' }), '\n', (0, r.jsxs)(n.p, { children: ['Wanneer een interactief icoon gebruik wordt voor muisgestuurde acties, dan dient het icoon voorzien te zijn van een ', (0, r.jsx)(n.code, { children: 'hover' }), ' staat. Voor toetsenbordbediening dient tevens een ', (0, r.jsx)(n.code, { children: 'focus' }), ' staat aanwezig te zijn zodat gebruikers kunnen zien waar de focus zich op dat moment bevindt.'] }), '\n', (0, r.jsx)(n.p, { children: 'Zorg bij deze interactieve iconen ervoor dat interactie niet alleen gecommuniceerd wordt door middel van kleurverschil.' }), '\n', (0, r.jsx)(n.p, { children: 'Het aanbieden van gevulde iconen voor geselecteerde staten waar standaard lijn-iconen gebruikt worden kan een oplossing zijn. Ook het gebruiken van een wijziging in een icoon bij een bepaalde staat kan uitkomst bieden. Een voorbeeld hiervan is een prullenbak icoon dat een volle prullenbak toont, en een geleegde wanneer deze geleegd is.' }), '\n', (0, r.jsx)(n.h3, { id: 'klik-tapoppervlakte', children: 'Klik en tapoppervlakte' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg voor voldoende klik of tapoppervlakte van interactieve iconen, zeker als deze niet vergezeld zijn van een (klikbaar) tekstueel label. Mocht er onvoldoende oppervlakte zijn van het icoon zelf, dan kan het vergoten van de interactieve marge rondom het icoon bijdragen aan het klik/tapoppervlakte. Gebruikers kunnen echter verward raken en denken dat de interactieve oppervlakte kleiner is dan ze waarnemen, en bovendien kunnen t\xe9 kleine iconen onduidelijk zijn.' }), '\n', (0, r.jsxs)(n.p, { children: ['Hanteer voor een vrijstaand icoon ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size.html', children: 'een minimale oppervlakte van 44\xd744 dp' }), '. Zo wordt gewaarborgd dat een interactief icoon met zowel een muis als op een touchscreen voor gebruikers makkelijk te activeren is. Dit is in het bijzonder belangrijk voor gebruikers met een motorische stoornis, zoals gebruikers met Arthritis of Parkinson.'] }), '\n', (0, r.jsx)(n.h3, { id: 'marge', children: 'Afstanden (marge)' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg tevens voor voldoende ruimte tussen iconen. Iconen moeten duidelijk gescheiden zijn en zeker wanneer iconen van interactie zijn voorzien dient de gebruiker deze afzonderlijke interacties bewust te kunnen onderscheiden en uit te voeren.' }), '\n', (0, r.jsx)(n.h2, { id: 'inclusiviteit', children: 'Inclusiviteit' }), '\n', (0, r.jsx)(n.p, { children: 'Zorg, bijvoorbeeld bij profiel iconen, dat deze gender-neutraal en cultuur-onafhankelijk zijn.' }), '\n', (0, r.jsx)(n.h3, { id: 'context', children: 'Context' }), '\n', (0, r.jsx)(n.p, { children: 'In sommige contexten kunnen iconen verkeerd op gevat worden. Denk bijvoorbeeld aan het gebruiken van een prullenbak om een persoon uit een lijst te verwijderen. Ook een \u2018like\u2019 icoon van een duimpje kan in sommige contexten verkeerd opgevat worden. Biedt in dat geval meerdere iconen aan waarmee waardering gegeven kan worden, maar die niet altijd positief hoeft te zijn.' }), '\n', (0, r.jsx)(n.h2, { id: 'referenties', children: 'Referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://directduidelijk.gebruikercentraal.nl/terugkijken-webinars/inclusief-communiceren-met-iconen/', children: 'Inclusief communiceren met iconen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://uxdesign.cc/make-your-design-system-accessible-part-2-icons-f3f7bd0b4b5a', children: 'Make your design system accessible \u2014 Part 2: Icons' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://taalunie.org/publicaties/204/onderzoek-naar-het-gebruik-van-iconen-als-middel-voor-inclusievere-gemeentelijke-communicatie-in-nederland-en-vlaanderen', children: 'Het complete plaatje? Onderzoek naar het gebruik van iconen als middel voor inclusievere gemeentelijke communicatie in Nederland en Vlaanderen' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/utrecht-iconen--iconen', children: 'Utrecht design system' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.designsystems.com/iconography-guide/', children: 'A complete guide to iconography' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.nngroup.com/articles/icon-usability/', children: 'Icon Usability' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2016/10/icons-as-part-of-a-great-user-experience/', children: 'Icons As Part Of A Great User Experience' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://uxdesign.cc/crimes-of-ux-3-useless-iconography-5bf06ef9fed', children: 'When does iconography start to become useless?' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://www.beeldkompas.nl/kennisbank/wat-is-een-icoon', children: 'Beelkompas: Wat is een icoon' }) }), '\n'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
   const d = { title: 'Icon', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Icon', pagination_label: 'Icon', description: ' ', slug: '/icon' },
    h = void 0,
    u = { id: 'componenten/icon/index', title: 'Icon', description: ' ', source: '@site/docs/componenten/icon/index.mdx', sourceDirName: 'componenten/icon', slug: '/icon', permalink: '/icon', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/icon/index.mdx', tags: [], version: 'current', frontMatter: { title: 'Icon', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Icon', pagination_label: 'Icon', description: ' ', slug: '/icon' }, sidebar: 'componenten', previous: { title: 'Heading Group', permalink: '/heading-group' }, next: { title: 'Image', permalink: '/image' } },
    j = {},
    g = [
     { value: 'Definition of Done', id: 'definition-of-done', level: 2 },
     { value: 'Implementaties', id: 'implementaties', level: 2 },
     { value: 'Richtlijnen', id: 'richtlijnen', level: 2 },
     { value: 'Help component verbeteren', id: 'help-component-verbeteren', level: 2 },
    ],
    m = 'Icon',
    p = ' ',
    v = 275,
    k = o.find((e) => e.number === v);
   function y(e) {
    const n = { h2: 'h2', ...(0, i.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', '\n', (0, r.jsx)(c.Rv, { component: k, headingLevel: 1, description: p }), '\n', (0, r.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, r.jsx)(c.cN, { component: k, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'implementaties', children: 'Implementaties' }), '\n', (0, r.jsx)(c.W, { component: k, headingLevel: 3 }), '\n', (0, r.jsx)(n.h2, { id: 'richtlijnen', children: 'Richtlijnen' }), '\n', (0, r.jsx)(s.U, { omitH1: !0, headingLevel: 3, children: (0, r.jsx)(l, {}) }), '\n', (0, r.jsx)(n.h2, { id: 'help-component-verbeteren', children: 'Help component verbeteren' }), '\n', (0, r.jsx)(c.vM, { component: k, headingLevel: 3 })] });
   }
   function b(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(y, { ...e }) }) : y(e);
   }
  },
  54907: (e, n, t) => {
   var r = { './utrecht-alert_46.entry.js': [16972, 16972], './utrecht-backdrop.entry.js': [52078, 52078], './utrecht-breadcrumb-nav.entry.js': [79009, 79009], './utrecht-checkbox.entry.js': [40557, 40557], './utrecht-column-layout.entry.js': [91097, 91097], './utrecht-contact-card-template.entry.js': [78516, 78516], './utrecht-custom-checkbox.entry.js': [92912, 92912], './utrecht-data-list-actions.entry.js': [59737, 59737], './utrecht-data-list-item.entry.js': [65183, 65183], './utrecht-data-list-key.entry.js': [22659, 22659], './utrecht-data-list-value.entry.js': [22226, 22226], './utrecht-data-list.entry.js': [94967, 94967], './utrecht-digid-button.entry.js': [9767, 9767], './utrecht-digid-logo.entry.js': [70738, 70738], './utrecht-eherkenning-logo.entry.js': [97179, 97179], './utrecht-eidas-logo.entry.js': [85142, 85142], './utrecht-form-field-error-message.entry.js': [94003, 94003], './utrecht-form-toggle.entry.js': [69578, 69578], './utrecht-html-content.entry.js': [13111, 13111], './utrecht-icon-afspraak-maken.entry.js': [74085, 74085], './utrecht-icon-afval-container.entry.js': [8380, 8380], './utrecht-icon-afval-containerpas.entry.js': [73921, 73921], './utrecht-icon-afval-kalender.entry.js': [35838, 35838], './utrecht-icon-afval-pmd.entry.js': [70258, 70258], './utrecht-icon-afval-scheiden.entry.js': [73169, 73169], './utrecht-icon-afval.entry.js': [30047, 30047], './utrecht-icon-afvalkalender.entry.js': [7893, 7893], './utrecht-icon-alleen.entry.js': [96351, 96351], './utrecht-icon-arrow.entry.js': [6280, 6280], './utrecht-icon-auto.entry.js': [20926, 20926], './utrecht-icon-begroting.entry.js': [26977, 26977], './utrecht-icon-bestemmingsplan.entry.js': [19164, 19164], './utrecht-icon-betaaldatum.entry.js': [39098, 39098], './utrecht-icon-bewijsstukken.entry.js': [2026, 2026], './utrecht-icon-bijstand.entry.js': [2557, 2557], './utrecht-icon-blad.entry.js': [63857, 63857], './utrecht-icon-bouwproject.entry.js': [53604, 53604], './utrecht-icon-brandgevaar.entry.js': [74905, 74905], './utrecht-icon-brief-betalen.entry.js': [81034, 81034], './utrecht-icon-checkmark.entry.js': [60864, 74128], './utrecht-icon-chevron-down.entry.js': [64999, 64999], './utrecht-icon-chevron-left.entry.js': [24758, 24758], './utrecht-icon-chevron-right.entry.js': [77469, 77469], './utrecht-icon-chevron-up.entry.js': [55652, 55652], './utrecht-icon-close.entry.js': [79952, 79952], './utrecht-icon-college-b-w.entry.js': [75898, 75898], './utrecht-icon-container-bio.entry.js': [31755, 31755], './utrecht-icon-container-glas.entry.js': [83173, 83173], './utrecht-icon-container-groenafval.entry.js': [59761, 59761], './utrecht-icon-container-met-zak.entry.js': [96408, 96408], './utrecht-icon-container-papier.entry.js': [91158, 91158], './utrecht-icon-container-pmd.entry.js': [89783, 89783], './utrecht-icon-container-restafval.entry.js': [10406, 10406], './utrecht-icon-container-textiel.entry.js': [66131, 66131], './utrecht-icon-container.entry.js': [1461, 1461], './utrecht-icon-cross.entry.js': [38826, 38826], './utrecht-icon-dakloos.entry.js': [39885, 39885], './utrecht-icon-dementie.entry.js': [69566, 69566], './utrecht-icon-documenten.entry.js': [86548, 86548], './utrecht-icon-duurzaam.entry.js': [48962, 48962], './utrecht-icon-eenzaamheid.entry.js': [89742, 89742], './utrecht-icon-eikenprocessie.entry.js': [6216, 6216], './utrecht-icon-elektrisch-rijden.entry.js': [61879, 61879], './utrecht-icon-energie-vergoeding.entry.js': [26188, 26188], './utrecht-icon-energietransitie.entry.js': [32518, 32518], './utrecht-icon-error.entry.js': [33743, 33743], './utrecht-icon-evenementen.entry.js': [29820, 29820], './utrecht-icon-facebook.entry.js': [19030, 19030], './utrecht-icon-fiets.entry.js': [31091, 31091], './utrecht-icon-filter.entry.js': [22837, 22837], './utrecht-icon-geboorte.entry.js': [79323, 79323], './utrecht-icon-gebruiker-centraal.entry.js': [74635, 74635], './utrecht-icon-gebruiker-ingelogd.entry.js': [49541, 49541], './utrecht-icon-gegevenswoordenboek.entry.js': [43115, 43115], './utrecht-icon-geluid.entry.js': [89497, 89497], './utrecht-icon-gemeente-locatie.entry.js': [98544, 98544], './utrecht-icon-gemeenteraad.entry.js': [6130, 6130], './utrecht-icon-gereedschap.entry.js': [60876, 60876], './utrecht-icon-gezicht.entry.js': [70334, 70334], './utrecht-icon-gezin.entry.js': [54918, 54918], './utrecht-icon-glas-afval.entry.js': [26105, 26105], './utrecht-icon-glijbaan.entry.js': [34660, 34660], './utrecht-icon-grafiek.entry.js': [51307, 51307], './utrecht-icon-grofvuil-ophalen.entry.js': [43954, 43954], './utrecht-icon-grofvuil.entry.js': [14169, 14169], './utrecht-icon-hamburger-menu.entry.js': [82625, 82625], './utrecht-icon-herdenking.entry.js': [20733, 20733], './utrecht-icon-hondenbelasting.entry.js': [30716, 30716], './utrecht-icon-horeca.entry.js': [13184, 94971], './utrecht-icon-horecavergunning.entry.js': [23463, 23463], './utrecht-icon-huis-en-omgeving.entry.js': [49431, 49431], './utrecht-icon-huis.entry.js': [61342, 61342], './utrecht-icon-huishoudelijk-geweld.entry.js': [46064, 46064], './utrecht-icon-hulp-huishouden.entry.js': [83765, 83765], './utrecht-icon-hulp-vervoer.entry.js': [36393, 36393], './utrecht-icon-hulp-zorg.entry.js': [57093, 57093], './utrecht-icon-hulpmiddelen-gezin.entry.js': [47490, 47490], './utrecht-icon-hulpverlening.entry.js': [28993, 28993], './utrecht-icon-idee.entry.js': [28821, 28821], './utrecht-icon-informatie.entry.js': [53212, 53212], './utrecht-icon-information.entry.js': [45569, 45569], './utrecht-icon-innovatie.entry.js': [73749, 73749], './utrecht-icon-inspraak-inwoners.entry.js': [95335, 95335], './utrecht-icon-instagram.entry.js': [70878, 70878], './utrecht-icon-kalender.entry.js': [9566, 9566], './utrecht-icon-kennis.entry.js': [98742, 98742], './utrecht-icon-kerstbomen.entry.js': [63846, 63846], './utrecht-icon-klachten.entry.js': [2727, 2727], './utrecht-icon-kroon.entry.js': [55176, 55176], './utrecht-icon-laadpaal.entry.js': [90512, 90512], './utrecht-icon-language.entry.js': [64754, 64754], './utrecht-icon-lantaarnpaal-oud.entry.js': [69909, 36257], './utrecht-icon-lantaarnpaal.entry.js': [92511, 92511], './utrecht-icon-leren.entry.js': [17941, 17941], './utrecht-icon-let-op.entry.js': [93473, 93473], './utrecht-icon-linkedin.entry.js': [16570, 16570], './utrecht-icon-list-check.entry.js': [5875, 5875], './utrecht-icon-list-number.entry.js': [43033, 43033], './utrecht-icon-list.entry.js': [63983, 63983], './utrecht-icon-loupe.entry.js': [32649, 32649], './utrecht-icon-markt.entry.js': [2436, 2436], './utrecht-icon-melding-boom.entry.js': [750, 750], './utrecht-icon-melding-klacht.entry.js': [32543, 32543], './utrecht-icon-melding-openbareruimte.entry.js': [53376, 53376], './utrecht-icon-melding-verlichting.entry.js': [24930, 24930], './utrecht-icon-melding.entry.js': [96035, 96035], './utrecht-icon-menselijk.entry.js': [14769, 14769], './utrecht-icon-menu-dot-open.entry.js': [82806, 82806], './utrecht-icon-menu-dot.entry.js': [66049, 66049], './utrecht-icon-meterkast.entry.js': [35165, 35165], './utrecht-icon-milieu-ontheffing.entry.js': [76015, 76015], './utrecht-icon-milieu-zone.entry.js': [58570, 58570], './utrecht-icon-minus-vertical.entry.js': [42635, 42635], './utrecht-icon-minus.entry.js': [28496, 28496], './utrecht-icon-mobiliteit.entry.js': [12294, 12294], './utrecht-icon-natuur.entry.js': [99563, 99563], './utrecht-icon-nieuw-huis.entry.js': [62672, 62672], './utrecht-icon-nieuwsbrief.entry.js': [87584, 87584], './utrecht-icon-nummerbord.entry.js': [18866, 18866], './utrecht-icon-om-het-huis.entry.js': [28408, 28408], './utrecht-icon-omgeving.entry.js': [99690, 99690], './utrecht-icon-omgevingsvisie.entry.js': [32683, 32683], './utrecht-icon-omgevingswet.entry.js': [99536, 99536], './utrecht-icon-onderhoud.entry.js': [65024, 65024], './utrecht-icon-ondernemen.entry.js': [93386, 93386], './utrecht-icon-openingstijden.entry.js': [87141, 87141], './utrecht-icon-over-de-stad.entry.js': [21962, 21962], './utrecht-icon-overlijden.entry.js': [8355, 8355], './utrecht-icon-panden.entry.js': [24623, 24623], './utrecht-icon-park.entry.js': [71062, 71062], './utrecht-icon-parkeerkaart.entry.js': [39396, 39396], './utrecht-icon-parkeervergunning.entry.js': [80821, 80821], './utrecht-icon-parken.entry.js': [64639, 64639], './utrecht-icon-parkeren-bedrijven.entry.js': [63253, 63253], './utrecht-icon-parkeren-betaalautomaat.entry.js': [97549, 97549], './utrecht-icon-parkeren-betalen.entry.js': [27509, 27509], './utrecht-icon-parkeren.entry.js': [98802, 98802], './utrecht-icon-participatie-campagne.entry.js': [42189, 42189], './utrecht-icon-participatie-like.entry.js': [22727, 22727], './utrecht-icon-participatie-pitch.entry.js': [77481, 77481], './utrecht-icon-paspoort.entry.js': [31350, 31350], './utrecht-icon-presentatie.entry.js': [86378, 86378], './utrecht-icon-prijskaartje.entry.js': [66375, 66375], './utrecht-icon-read-aloud.entry.js': [56911, 56911], './utrecht-icon-rijbewijs.entry.js': [21081, 21081], './utrecht-icon-rioolheffing.entry.js': [18216, 18216], './utrecht-icon-rolstoel.entry.js': [94479, 94479], './utrecht-icon-schild-gemeente-utrecht.entry.js': [37446, 37446], './utrecht-icon-search.entry.js': [32835, 32835], './utrecht-icon-shoppen.entry.js': [24709, 24709], './utrecht-icon-sinterklaas.entry.js': [55432, 55432], './utrecht-icon-slechtziende-hoordende.entry.js': [26098, 26098], './utrecht-icon-sport-en-cultuur.entry.js': [42266, 42266], './utrecht-icon-sport-voetbal.entry.js': [71966, 71966], './utrecht-icon-sport.entry.js': [95628, 95628], './utrecht-icon-stookverbod.entry.js': [96254, 96254], './utrecht-icon-strand.entry.js': [23488, 23488], './utrecht-icon-strooien.entry.js': [32778, 32778], './utrecht-icon-subsidie-gezin.entry.js': [80567, 80567], './utrecht-icon-subsidie.entry.js': [94682, 94682], './utrecht-icon-t-shirt.entry.js': [54545, 54545], './utrecht-icon-thuiswerken.entry.js': [25321, 25321], './utrecht-icon-toeslag.entry.js': [39183, 39183], './utrecht-icon-trein.entry.js': [87486, 87486], './utrecht-icon-trouwen.entry.js': [34612, 34612], './utrecht-icon-twitter.entry.js': [82414, 82414], './utrecht-icon-user.entry.js': [65113, 65113], './utrecht-icon-uw-wijk.entry.js': [32690, 32690], './utrecht-icon-vaccinatie.entry.js': [75263, 75263], './utrecht-icon-veilige-wijk.entry.js': [28892, 28892], './utrecht-icon-vergaderen.entry.js': [74219, 74219], './utrecht-icon-vergaderendigitaal.entry.js': [19472, 19472], './utrecht-icon-vergoeding.entry.js': [42704, 42704], './utrecht-icon-verhuizen.entry.js': [7159, 7159], './utrecht-icon-verkeerslicht.entry.js': [49443, 49443], './utrecht-icon-verkiezingen.entry.js': [91507, 91507], './utrecht-icon-verslaving.entry.js': [56316, 56316], './utrecht-icon-vervoersvoorziening.entry.js': [31768, 31768], './utrecht-icon-virus.entry.js': [49030, 49030], './utrecht-icon-vluchtelingen.entry.js': [10731, 10731], './utrecht-icon-voorzieningen-vervoer.entry.js': [31915, 31915], './utrecht-icon-vrijwilligerswerk.entry.js': [77206, 77206], './utrecht-icon-vuilnisbak.entry.js': [26762, 26762], './utrecht-icon-vuilniszak.entry.js': [3290, 3290], './utrecht-icon-vuurwerk.entry.js': [81261, 21118], './utrecht-icon-wandelstok.entry.js': [44566, 44566], './utrecht-icon-warm.entry.js': [90649, 90649], './utrecht-icon-warning.entry.js': [32737, 32737], './utrecht-icon-werken.entry.js': [1415, 1415], './utrecht-icon-werkzaamheden.entry.js': [17237, 17237], './utrecht-icon-whatsapp.entry.js': [33821, 33821], './utrecht-icon-wonen-kosten.entry.js': [81883, 81883], './utrecht-icon-woning-zoeken.entry.js': [80571, 80571], './utrecht-icon-x.entry.js': [45434, 45434], './utrecht-icon-youtube.entry.js': [46609, 46609], './utrecht-icon-zelfstandig-wonen.entry.js': [29956, 29956], './utrecht-icon-zoom-minus.entry.js': [72154, 72154], './utrecht-icon-zoom-plus.entry.js': [77634, 77634], './utrecht-icon-zoomin.entry.js': [54755, 54755], './utrecht-icon-zoomout.entry.js': [21405, 21405], './utrecht-icon-zorg-huis.entry.js': [50787, 50787], './utrecht-icon-zweefpaal.entry.js': [90563, 90563], './utrecht-icon-zwemmen.entry.js': [10572, 10572], './utrecht-logo-button.entry.js': [34913, 34913], './utrecht-map-marker.entry.js': [38104, 38104], './utrecht-multiline-data.entry.js': [10150, 10150], './utrecht-number-badge.entry.js': [87062, 87062], './utrecht-page-footer.entry.js': [84907, 84907], './utrecht-pagination.entry.js': [57930, 57930], './utrecht-progress-list-item.entry.js': [26946, 26946], './utrecht-progress-list.entry.js': [36009, 36009], './utrecht-progress-sublist-item.entry.js': [26235, 26235], './utrecht-sidenav.entry.js': [38835, 38835], './utrecht-surface.entry.js': [61084, 81261], './utrecht-table-body.entry.js': [99709, 99709], './utrecht-table-caption.entry.js': [24554, 24554], './utrecht-table-cell.entry.js': [82736, 82736], './utrecht-table-footer.entry.js': [80097, 80097], './utrecht-table-header-cell.entry.js': [9931, 9931], './utrecht-table-header.entry.js': [19668, 19668], './utrecht-table-row.entry.js': [30422, 30422], './utrecht-table.entry.js': [62665, 62665], './utrecht-textarea.entry.js': [83251, 83251], './utrecht-textbox.entry.js': [958, 958] };
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
   t.d(n, { Zb: () => a, aY: () => s, um: () => l, wu: () => c });
   var r = t(16167),
    i = t(4814),
    o = t(52676);
   const c = (e) => {
     let { background: n, children: t, className: r, ...c } = e;
     return (0, o.jsx)('div', { className: (0, i.Z)('card__illustration', n && 'card__illustration--background', r), ...c, children: t });
    },
    s = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    a = (e) => {
     let { href: n, appearance: t, className: c, component: s = 'div', children: a } = e;
     const l = (e) => ('article' === s ? (0, o.jsx)('article', { ...e }) : 'section' === s ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      d = (0, o.jsx)(l, { className: (0, i.Z)('cardgroup__card', `cardgroup__card--${t}`, c), children: a });
     return n ? (0, o.jsx)(r.rU, { href: n, boxContent: !0, className: 'cardgroup__link', children: d }) : d;
    },
    l = (e) => {
     let { appearance: n = 'medium', children: t, className: r } = e;
     return (0, o.jsx)('div', { className: (0, i.Z)('cardgroup', `cardgroup--${n}`, r), children: t });
    };
  },
  8657: (e, n, t) => {
   'use strict';
   t.d(n, { cN: () => w, vM: () => _, W: () => z, Rv: () => A });
   var r = t(41115),
    i = t(4814),
    o = t(39854),
    c = t(7522),
    s = t(62559),
    a = t(79734),
    l = t(32636),
    d = t(52676);
   const h = { figma: (0, d.jsx)(o.Z, {}), github: (0, d.jsx)(c.Z, {}), npm: (0, d.jsx)(s.Z, {}), storybook: (0, d.jsx)(a.Z, {}) },
    u = (e) => {
     let { brand: n } = e;
     return (0, d.jsx)(r.JO, { children: h[n] || (0, d.jsx)(l.Z, {}) });
    };
   var j = t(35038),
    g = t(40598);
   const m = (e) => {
    let { checked: n, unchecked: r } = e;
    return (0, d.jsx)(g.Z, {
     fallback: (0, d.jsx)(d.Fragment, {}),
     children: () => {
      const e = t(79333).YE;
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
   var p = t(23355),
    v = t(41757),
    k = t(16167),
    y = t(55476);
   const b = (e) => {
     let { children: n } = e;
     return (0, d.jsx)('ul', { className: 'task-list', children: n });
    },
    x = (e) => {
     let { checked: n, children: t, title: r, description: o, headingLevel: c = 3 } = e;
     return (0, d.jsxs)('li', { className: (0, i.Z)('task-list-item'), children: [(0, d.jsxs)('div', { className: (0, i.Z)('task-list-item__marker', n && 'task-list-item__marker--checked'), children: [(0, d.jsx)('span', { className: 'task-list-item__marker-label', children: n ? 'Afgevinkt. ' : 'Niet afgevinkt. ' }), n && (0, d.jsx)(y.NgG, { 'aria-hidden': !0, className: 'utrecht-icon' })] }), (0, d.jsxs)('div', { children: [(0, d.jsx)(k.X6, { appearance: 'utrecht-heading-3', level: c, children: r }), o, t] })] });
    };
   var f = t(14669);
   const w = (e) => {
     let { component: n, headingLevel: t } = e;
     const o = n && n.projects.filter((e) => f.e9.includes(e.id)),
      c = o && f.e9.map((e) => o.find((n) => n.id === e)).filter(Boolean);
     return (
      n &&
      (0, d.jsx)(r.a2, {
       appearance: '',
       sections: c.map((e) => ({
        className: (0, i.Z)('definition-of-done', e && `definition-of-done--${(0, f.mA)(e.title)}`),
        headingLevel: t,
        expanded: !1,
        label: e ? `${e.title} - ${e.progress.value} van ${e.progress.max}` : '',
        body:
         e &&
         (0, d.jsxs)(d.Fragment, {
          children: [
           (0, d.jsx)(b, {
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
            o = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['NPM URL (CSS)', { brand: 'npm', desciption: `${i} op NPM` }],
             ['GitHub URL (CSS)', { brand: 'github', desciption: `${i} op GitHub` }],
             ['Storybook URL (CSS)', { brand: 'storybook', desciption: `${i} in Storybook van ${e.title}` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            c = e.tasks.filter((e) => {
             let { name: n, value: t } = e;
             return o.has(n) && URL.canParse(t) && 'https:' === new URL(t).protocol;
            });
           return (0, d.jsx)(
            j.Zb,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(j.aY, {
              children: [
               (0, d.jsx)(r.X6, { level: t, children: e.title }),
               (0, d.jsxs)(r.nv, { children: [(0, d.jsx)(m, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.rU, { href: e.url, children: [e.title, ' projectbord'] })] }),
               c.length > 0 &&
                (0, d.jsxs)(d.Fragment, {
                 children: [
                  (0, d.jsx)(r.X6, { level: t + 1, children: 'Component gebruiken?' }),
                  (0, d.jsx)(r.Mc, {
                   children: c.map((e) => {
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
    _ = (e) => {
     let { component: n } = e;
     const t = n?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id).value;
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.nv, { children: ['We vinden het belangrijk dat de component ', n.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.QI, { children: [i ? (0, d.jsxs)(r.AS, { children: ['Vul de ', (0, d.jsx)(r.rU, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.AS, { children: [(0, d.jsxs)(r.rU, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', n.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.AS, { children: ['Draag bij aan de voortang van ', n.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.rU, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.rU, { href: n.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    A = (e) => {
     let { component: n, headingLevel: t, description: i } = e;
     const o = n && f.$3[n.relayStep];
     return n && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(v.V, { level: t, suffix: o && (0, d.jsx)(p.y, { state: o }), children: n.title }), (0, d.jsx)(r.nv, { lead: !0, children: i })] });
    };
  },
  23355: (e, n, t) => {
   'use strict';
   t.d(n, { y: () => s });
   var r = t(16167),
    i = t(4814),
    o = t(14669),
    c = t(52676);
   const s = (e) => {
    let { state: n } = e;
    const t = (0, o.mA)(n);
    return (0, c.jsx)(r.Ou, { className: (0, i.Z)('estafette-badge', t && `estafette-badge--${t}`), children: n });
   };
  },
  41757: (e, n, t) => {
   'use strict';
   t.d(n, { V: () => o });
   var r = t(4814),
    i = t(52676);
   const o = (e) => {
    let { children: n, className: t, level: o = 1, suffix: c, ...s } = e;
    return (0, i.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${o}`, t), ...s, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), c && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [c ? ' ' : '', c] })] });
   };
  },
  57716: (e, n, t) => {
   'use strict';
   t.d(n, { U: () => d });
   var r = t(40139),
    i = t(16167),
    o = t(52676);
   const c = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: i } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + i;
     }
     return t.toString();
    },
    s = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    a = (e) => ({
     img: (n) => {
      let { src: t, ...r } = n;
      return (0, o.jsx)('img', { ...r, src: c(e, t), className: 'utrecht-img utrecht-img--fit' });
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
     let { children: n, omitH1: t = !1, headingLevel: i = 1, baseUrl: c = '', components: s = {} } = e;
     return (0, o.jsx)(r.Z, { components: { ...l(t, i), ...a(c), ...s }, children: n });
    };
  },
  14669: (e, n, t) => {
   'use strict';
   t.d(n, { $3: () => r, BA: () => s, Q6: () => o, e9: () => c, mA: () => i });
   const r = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    o = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    c = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    s = (e) => e.toLowerCase().replace(/(\s|-)+/, '');
  },
 },
]);
