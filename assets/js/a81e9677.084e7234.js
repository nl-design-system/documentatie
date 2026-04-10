'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [11933],
 {
  1292(e, n, t) {
   t.d(n, { r: () => h });
   var r = t(29181),
    i = t(74172),
    o = t(15089),
    a = t(28377),
    s = t(33648),
    l = t(83386),
    d = t(86070);
   const c = { figma: (0, d.jsx)(i.A, {}), github: (0, d.jsx)(o.A, {}), npm: (0, d.jsx)(a.A, {}), storybook: (0, d.jsx)(s.A, {}) },
    h = ({ brand: e }) => (0, d.jsx)(r.In, { children: c[e] || (0, d.jsx)(l.A, {}) });
  },
  6392(e, n, t) {
   (t.r(n), t.d(n, { assets: () => O, component: () => I, contentTitle: () => V, default: () => U, description: () => $, frontMatter: () => G, issueNumber: () => Z, metadata: () => r, title: () => P, toc: () => W }));
   const r = JSON.parse('{"id":"componenten/breadcrumb-navigation/index","title":"Breadcrumb Navigation","description":"Toont de locatie van de pagina binnen de hi\xebrarchie van een website en biedt de mogelijkheid om tussen niveaus te navigeren.","source":"@site/docs/componenten/breadcrumb-navigation/index.mdx","sourceDirName":"componenten/breadcrumb-navigation","slug":"/breadcrumb-navigation","permalink":"/breadcrumb-navigation","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/breadcrumb-navigation/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Breadcrumb Navigation","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Breadcrumb Navigation","pagination_label":"Breadcrumb Navigation","description":"Toont de locatie van de pagina binnen de hi\xebrarchie van een website en biedt de mogelijkheid om tussen niveaus te navigeren.","slug":"/breadcrumb-navigation","keywords":["back","back link","breadcrumb navigation","breadcrumb trail","breadcrumbs","broodkruimelpad","broodkruimels","hi\xebrarchie","hierarchy","home","homepage","home","kruimelpad","links","nav","navigatie","navigeren","navigation","trail","up"]},"sidebar":"componenten","previous":{"title":"Blockquote","permalink":"/blockquote"},"next":{"title":"Button","permalink":"/button"}}');
   var i = t(86070),
    o = t(18439),
    a = t(45189),
    s = t(62528),
    l = t(37131);
   function d(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Als het broodkruimelpad een afbeelding bevat, bijvoorbeeld een huisje om de homepage aan te geven, heeft de afbeelding een alternatieve tekst. Als deze afbeelding een link bevat, beschrijft de alternatieve tekst ook het linkdoel.' }), '\n', (0, i.jsxs)(n.p, { children: ['Als tussen de links in het broodkruimelpad tekens staan, zoals een schuine streep of een groter-dan-teken, zijn deze verborgen voor hulpsoftware. De relatie tussen de links wordt namelijk al op een andere manier duidelijk gemaakt aan bezoekers die gebruik maken van een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ', door de georderende lijst (', (0, i.jsx)(n.code, { children: 'ol' }), ') binnen het ', (0, i.jsx)(n.code, { children: 'nav' }), ' element.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/iconen/', children: 'Richtlijnen voor iconen' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/content/afbeeldingen/functionele-afbeeldingen/', children: 'Functionele afbeeldingen' }) }), '\n'] })] });
   }
   function c(e) {
    const n = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['De relatie tussen de links in het broodkruimelpad moet niet alleen visueel, maar ook voor bezoekers die gebruik maken van een ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' duidelijk zijn.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Het broodkruimelpad is herkenbaar als navigatiemenu door het ', (0, i.jsx)(n.code, { children: 'nav' }), ' element te gebruiken, of door ', (0, i.jsx)(n.code, { children: 'role="navigation"' }), ' te gebruiken. Gebruik bij voorkeur altijd HTML elementen, tenzij het echt niet anders kan.'] }), '\n', (0, i.jsxs)(n.p, { children: ["Het navigatiemenu heeft een toegankelijke naam om het te onderscheiden van andere navigatiemenu's op de pagina. Bijvoorbeeld met ", (0, i.jsx)(n.code, { children: 'aria-label' }), ', of door met ', (0, i.jsx)(n.code, { children: 'aria-labelledby' }), ' te verwijzen naar een visueel verborgen ', (0, i.jsx)(n.code, { children: 'h2' }), ' element in het broodkruimelpad.'] }), '\n', (0, i.jsxs)(n.p, { children: ['De links in het broodkruimelpad staan binnen het ', (0, i.jsx)(n.code, { children: 'nav' }), ' element in een georderende lijst: het ', (0, i.jsx)(n.code, { children: 'ol' }), ' element. Dit geeft de hi\xebrarchie in de links aan. Iedere link is afzonderlijk opgemaakt met een ', (0, i.jsx)(n.code, { children: 'li' }), ' element en staat genest binnen het ', (0, i.jsx)(n.code, { children: 'ol' }), ' element.'] }), '\n', (0, i.jsxs)(n.p, { children: ['De huidige pagina in het broodkruimelpad hoeft niet als link opgemaakt te zijn, maar bevat wel het ', (0, i.jsx)(n.code, { children: 'aria-current="page"' }), ' attribuut.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<nav aria-label="Broodkruimelpad">\n  <ol>\n    <li><a href="/">Home</a></li>\n    <li><a href="/zelfregelen">Zelf regelen</a></li>\n    <li><a aria-current="page" href="/zelfregelen/rijbewijsaanvragen">Rijbewijs aanvragen</a></li>\n  </ol>\n</nav>\n' }) })] });
   }
   var h = t(83672);
   function u(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De gebruiker moet tekst twee keer (200%) kunnen vergroten. Het gaat hierbij alleen om het vergroten van tekst en niet om bijvoorbeeld afbeeldingen of de layout.\nAlle functies moeten werken en zichtbaar zijn. Alle tekst moet leesbaar zijn. Er mag geen inhoud buiten beeld vallen, verborgen zijn of maar gedeeltelijk zichtbaar zijn.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar.'] }), '\n', (0, i.jsx)(n.p, { children: 'Een broodkruimelpad mag van vorm veranderen bij het vergroten of aanpassen van tekst, of bij inzoomen, als het broodkruimelpad door het doorlopen op een volgende of meerdere regels teveel ruimte in beslag neemt.' }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Let op voorkeursinstellingen voor typografie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/lettergrootte/', children: 'Zorg ervoor dat letters groot genoeg zijn' }) }), '\n'] })] });
   }
   function m(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'De gebruiker moet de webpagina bij een schermgrootte van 1280 bij 124 pixels tot 400% kunnen vergroten in de browser. Het gaat hierbij om alle elementen van een webpagina.' }), '\n', (0, i.jsx)(n.p, { children: 'Alle functies moeten werken en zichtbaar zijn. Alle tekst moet leesbaar zijn.' }), '\n', (0, i.jsx)(n.p, { children: 'Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of gedeeltelijk verborgen worden door andere inhoud wanneer de gebruiker 400% inzoomt of op een buitengewoon klein scherm werkt (320 bij 256 CSS).' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar.'] }), '\n', (0, i.jsx)(n.p, { children: 'Een broodkruimelpad mag van vorm veranderen bij het vergroten of aanpassen van tekst, of bij inzoomen, als het broodkruimelpad door het doorlopen op een volgende of meerdere regels teveel ruimte in beslag neemt.' })] });
   }
   function p(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Als het broodkruimelpad niet-tekstuele content zoals afbeeldingen bevat, bijvoorbeeld een huisje voor de homepage en iconen van / of > tussen de links, dan is het contrast tussen de afbeelding en de achtergrond minimaal 3:1. Dit is te controleren met de ', (0, i.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function g(e) {
    const n = { code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Tekst kan op een aantal manieren aangepast worden, door mensen voor wie dat prettig is.' }), '\n', (0, i.jsx)(n.p, { children: 'Alle tekst moet leesbaar blijven. Er mag geen inhoud buiten beeld vallen, onbereikbaar of verborgen zijn of maar gedeeltelijk zichtbaar zijn.' }), '\n', (0, i.jsxs)(n.p, { children: ['Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Gebruik hiervoor bijvoorbeeld ', (0, i.jsx)(n.code, { children: 'word-break: break-word; hyphens: auto;' }), ' in combinatie met ', (0, i.jsx)(n.code, { children: 'text-wrap-style: pretty' }), ' of ', (0, i.jsx)(n.code, { children: 'text-wrap-style: balance' }), '. Zo ontstaat er geen horizontale scrollbar en wordt tekst niet onleesbaar.'] }), '\n', (0, i.jsx)(n.p, { children: 'Een broodkruimelpad mag van vorm veranderen bij het vergroten of aanpassen van tekst, of bij inzoomen, als het broodkruimelpad door het doorlopen op een volgende of meerdere regels teveel ruimte in beslag neemt.' }), '\n', (0, i.jsx)(n.p, { children: 'Het gaat om:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'De ruimte tussen tekstregels kan relatief groot ingesteld worden, zodat de ruimte tussen tekstregels anderhalf keer groter is dan de hoogte van een tekstregel zelf.' }), '\n', (0, i.jsx)(n.li, { children: "De ruimte tussen alinea's kan ingesteld worden op minimaal de twee keer de hoogte van een tekstregel." }), '\n', (0, i.jsx)(n.li, { children: 'De ruimte tussen letters kan 12% groter worden ingesteld dan normaal.' }), '\n', (0, i.jsx)(n.li, { children: 'De ruimte tussen woorden kan 16% groter worden ingesteld dan normaal.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Gebruikers kunnen dit instellen vanuit hun browser. Het is niet nodig om hier buttons voor te maken in de website zelf.' })] });
   }
   var j = t(25872);
   function k(e) {
    const n = { p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsx)(n.p, { children: 'De links in het broodkruimelpad krijgen afzonderlijk toetsenbordfocus met de Tab-toets (en shift + Tab-toets). De focusvolgorde volgt de hierarchische structuur in het broodkruimelpad.' });
   }
   var b = t(92233),
    v = t(75978);
   function x(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg ervoor dat als de gebruiker links in het broodkruimelpad aanraakt met een enkele aanwijzer, zoals een muis of vinger, er de mogelijkheid is om de actie te voorkomen of ongedaan te maken.' }), '\n', (0, i.jsx)(n.p, { children: 'Dit voorkomt het per ongeluk aanraken en openen van content, wanneer het niet de bedoeling was.' }), '\n', (0, i.jsxs)(n.p, { children: ['Met een HTML link (', (0, i.jsx)(n.code, { children: 'a' }), ' element met een ', (0, i.jsx)(n.code, { children: 'href' }), ' attribuut) gaat dit automatisch goed. Bij een ', (0, i.jsx)(n.code, { children: 'div' }), ' element met ', (0, i.jsx)(n.code, { children: 'role="link"' }), ' moet dit nog worden aangepast. Gebruik voor dit laatste bij voorkeur het ', (0, i.jsx)(n.code, { children: 'click' }), ' event, omdat dit apparaatonafhankelijk is.'] })] });
   }
   function f(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Zorg ervoor dat de aanklikbare elementen op een pagina groot genoeg zijn om makkelijk aan te klikken met een muis of vinger.' }), '\n', (0, i.jsx)(n.p, { children: 'Hierbij geldt dat het aan te klikken gebied ten minste 24 bij 24 pixels groot is, behalve als het aanklikbare element en de ruimte om het element samen tenminste 24 pixels groot zijn.' }), '\n', (0, i.jsxs)(n.p, { children: ['Hou als dat mogelijk is een groter aanwijsgebied van 44 bij 44 pixels aan, om ook te voldoen ', (0, i.jsx)(n.a, { href: '/wcag/2.5.5/', children: 'succescriterium 2.5.5 Grootte van het aanwijsgebied (uitgebreid)' })] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar/', children: 'Maak aanklikbare formuliervelden groot genoeg' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/stijl/ruimte/interactieve-elementen/', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n'] })] });
   }
   function w(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(f, { ...e }) }) : f(e);
   }
   function z(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: "Als je het broodkruimelpad op meerdere pagina's toevoegt, zijn er een aantal dingen om rekening mee te houden:" }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ["Het broodkruimelpad moet op alle pagina's in dezelfde relatieve volgorde op de pagina voorkomen. Bijvoorbeeld: Het broodkruimelpad staat altijd onder de ", (0, i.jsx)(n.code, { children: 'header' }), ' en boven de eerste kop op de pagina.'] }), '\n', (0, i.jsx)(n.li, { children: "De links in het broodkruimelpad staan op alle pagina's in dezelfde relatieve volgorde. Bijvoorbeeld: Als de link naar de homepage in het broodkruimelpad staat, is dit op iedere pagina waar dit zo is de eerste link in het broodkruimelpad." }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/meerdere-stappen/consistente-benaming/', children: 'Consistente navigatie' }) }), '\n'] })] });
   }
   function A(e) {
    const n = { code: 'code', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(n.p, { children: ['Het broodkruimelpad staat in een ', (0, i.jsx)(n.code, { children: 'nav' }), ' element, of heeft ', (0, i.jsx)(n.code, { children: 'role="navigation"' }), ", met een toegankelijke naam (bijvoorbeeld 'broodkruimelpad'). Gebruik bij voorkeur altijd HTML elementen, tenzij het echt niet anders kan."] }), '\n', (0, i.jsxs)(n.p, { children: ['De links in het broodkruimelpad staan genest in een ', (0, i.jsx)(n.code, { children: 'ol' }), ' element en iedere link staat in een ', (0, i.jsx)(n.code, { children: 'li' }), ' element. Gebruik geen ', (0, i.jsx)(n.code, { children: 'role="list\'' }), ', omdat de hi\xebrarchie tussen de links dan verloren gaat.'] }), '\n', (0, i.jsxs)(n.p, { children: ['De links in het broodkruimelpad hebben de rol van link. Gebruik hiervoor bij voorkeur het ', (0, i.jsx)(n.code, { children: 'a' }), ' element (met een ', (0, i.jsx)(n.code, { children: 'href' }), ' attribuut). Het is mogelijk om met ARIA een ', (0, i.jsx)(n.code, { children: 'role="link"' }), ' toe te voegen aan een ander element dan een ', (0, i.jsx)(n.code, { children: 'a' }), ', maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc. Let erop dat je hiervoor JavaScript nodig hebt.'] }), '\n', (0, i.jsxs)(n.p, { children: ['De huidige (laatste) pagina in het broodkruimelpad geeft daarnaast ook met ', (0, i.jsx)(n.code, { children: 'aria-current="page"' }), ' aan dat het om de huidige pagina gaat.'] })] });
   }
   var D = t(92544),
    y = t(96412),
    N = t(36599),
    R = t(76334),
    _ = t(8584),
    L = t(30788),
    S = t(69488),
    T = t(31820),
    M = t(87711);
   const F = [
     { title: 'De linkteksten van de links in het broodkruimelpad zijn voor iedereen duidelijk', sc: '2.4.4', status: '', component: R.Ay },
     {
      title: 'De bezoeker kan het activeren van links in het broodkruimelpad annuleren',
      sc: '2.5.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(x, { ...e }) }) : x(e);
      },
     },
     { title: 'De visuele naam van de links in het broodkruimelpad komen voor in de toegankelijke naam van de links in het broodkruimelpad', sc: '2.5.3', status: '', component: L.Ay },
     { title: 'Het aanwijsgebied van de links in het broodkruimelpad is groot genoeg', sc: '2.5.8', status: '', component: w },
     { title: 'Als het broodkruimelpad tekst in een andere taal dan de hoofdtaal van de pagina bevat, wordt hier een taalwissel voor aangegeven', sc: '3.1.2', status: '', component: S.Ay },
     { title: 'Het gedrag van het broodkruimelpad is voorspelbaar', sc: '3.2.1', status: '', component: T.Ay },
     {
      title: "Als het broodkruimelpad op meerdere pagina's voorkomt, staat het overal op dezelfde plek en de links in het broodkruimelpad staan in dezelfde volgorde",
      sc: '3.2.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(z, { ...e }) }) : z(e);
      },
     },
    ],
    H = [
     { title: 'De contrastratio tussen de tekst en de achtergrondkleur in het broodkruimelpad is hoog genoeg', sc: '1.4.3', status: '', component: h.Ay },
     { title: 'Het broodkruimelpad bevat niet onnodig afbeeldingen van tekst', sc: '1.4.5', status: '', component: y.Ay },
     {
      title: 'Niet-tekstuele content in het broodkruimelpad heeft een contrastratio van minimaal 3:1 met de achtergrond',
      sc: '1.4.11',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
      },
     },
     { title: 'Het is zichtbaar wanneer links in het broodkruimelpad toetsenbordfocus hebben', sc: '2.4.7', status: '', component: b.Ay },
     { title: 'Het aanwijsgebied van de links in het broodkruimelpad is groot genoeg', sc: '2.5.8', status: '', component: w },
     { title: 'Het is duidelijk zichtbaar wanneer links in het broodkruimelpad toetsenbordfocus hebben', sc: '2.4.13', status: '', component: v.Ay },
     { title: "Als het broodkruimelpad op meerdere pagina's voorkomt, ziet het er hetzelfde uit en werkt het hetzelfde", sc: '3.2.4', status: '', component: M.Ay },
    ],
    C = [
     {
      title: 'Als je de tekst vergroot tot 200% blijft deze in zijn geheel zichtbaar',
      sc: '1.4.4',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
      },
     },
     {
      title: 'Bij inzoomen gaat er geen informatie of functionaliteit verloren',
      sc: '1.4.10',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
      },
     },
     {
      title: 'Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar',
      sc: '1.4.12',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
      },
     },
    ],
    B = [
     { title: 'Links in het broodkruimelpad zijn bereikbaar en bedienbaar met het toetsenbord', sc: '2.1.1', status: '', component: j.Ay },
     { title: 'Het broodkruimelpad zorgt niet voor een toetsenbordval', sc: '2.1.2', status: '', component: N.Ay },
     {
      title: 'De focus volgorde volgt de hi\xebrarchische structuur van het broodkruimelpad',
      sc: '2.4.3',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k(e);
      },
     },
     { title: 'Het is zichtbaar wanneer links in het broodkruimelpad toetsenbordfocus hebben', sc: '2.4.7', status: '', component: b.Ay },
     { title: 'De links in het broodkruimelpad worden niet bedekt door andere content', sc: '2.4.11', status: '', component: _.Ay },
     { title: 'Het is duidelijk zichtbaar wanneer links in het broodkruimelpad toetsenbordfocus hebben', sc: '2.4.13', status: '', component: v.Ay },
    ],
    E = [
     {
      title: 'Informatieve afbeeldingen hebben een alternatieve tekst en decoratieve tekens en iconen zijn verborgen',
      sc: '1.1.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
      },
     },
     {
      title: 'Het is duidelijk dat het om een navigatiemenu gaat en de relatie tussen de links in het broodkruimelpad is voor iedereen duidelijk ',
      sc: '1.3.1',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
      },
     },
     { title: 'De leesvolgorde van tekst en links in het broodkruimelpad is voor iedereen logisch', sc: '1.3.2', status: '', component: D.Ay },
     { title: 'Als het broodkruimelpad tekst in een andere taal dan de hoofdtaal van de pagina bevat, wordt hier een taalwissel voor aangegeven', sc: '3.1.2', status: '', component: S.Ay },
     {
      title: 'Het broodkruimelpad en de links in het broodkruimelpad hebben een toegankelijke naam, rol en status',
      sc: '4.1.2',
      status: '',
      component: function (e = {}) {
       const { wrapper: n } = { ...(0, o.R)(), ...e.components };
       return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(A, { ...e }) }) : A(e);
      },
     },
    ],
    G = { title: 'Breadcrumb Navigation', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Breadcrumb Navigation', pagination_label: 'Breadcrumb Navigation', description: 'Toont de locatie van de pagina binnen de hi\xebrarchie van een website en biedt de mogelijkheid om tussen niveaus te navigeren.', slug: '/breadcrumb-navigation', keywords: ['back', 'back link', 'breadcrumb navigation', 'breadcrumb trail', 'breadcrumbs', 'broodkruimelpad', 'broodkruimels', 'hi\xebrarchie', 'hierarchy', 'home', 'homepage', 'home', 'kruimelpad', 'links', 'nav', 'navigatie', 'navigeren', 'navigation', 'trail', 'up'] },
    V = void 0,
    O = {},
    P = 'Breadcrumb Navigation',
    $ = 'Toont de locatie van de pagina binnen de hi\xebrarchie van een website en biedt de mogelijkheid om tussen niveaus te navigeren.',
    Z = 54,
    I = a.find((e) => e.number === Z),
    W = [{ value: 'Definition of Done', id: 'definition-of-done', level: 2 }, { value: 'Community implementaties', id: 'community-implementaties', level: 2 }, { value: 'Acceptatiecriteria', id: 'acceptatiecriteria', level: 2 }, ...s.RM];
   function X(e) {
    const n = { h2: 'h2', ...(0, o.R)(), ...e.components },
     { CriteriaList: t, CriteriaListItem: r } = n;
    return (t || K('CriteriaList', !0), r || K('CriteriaListItem', !0), (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', '\n', '\n', (0, i.jsx)(l.Fc, { component: I, headingLevel: 1, description: $ }), '\n', (0, i.jsx)(n.h2, { id: 'definition-of-done', children: 'Definition of Done' }), '\n', (0, i.jsx)(l.VK, { component: I, headingLevel: 3 }), '\n', (0, i.jsx)(n.h2, { id: 'community-implementaties', children: 'Community implementaties' }), '\n', (0, i.jsx)(l.mu, { component: I, headingLevel: 3 }), '\n', (0, i.jsx)(l.K_, { component: I }), '\n', (0, i.jsx)(n.h2, { id: 'acceptatiecriteria', children: 'Acceptatiecriteria' }), '\n', (0, i.jsx)(s.Ay, {}), '\n', (0, i.jsx)(t, { headingLevel: 4, testCategory: 'Toegankelijkheid algemeen', children: F.map(({ component: e, ...n }) => (0, i.jsx)(r, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(t, { headingLevel: 4, testCategory: 'Toegankelijkheid visueel ontwerp', children: H.map(({ component: e, ...n }) => (0, i.jsx)(r, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(t, { headingLevel: 4, testCategory: 'Toegankelijkheid zoom en herschalen', children: C.map(({ component: e, ...n }) => (0, i.jsx)(r, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(t, { headingLevel: 4, testCategory: 'Toegankelijkheid toetsenbord', children: B.map(({ component: e, ...n }) => (0, i.jsx)(r, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(t, { headingLevel: 4, testCategory: 'Toegankelijkheid screenreader', children: E.map(({ component: e, ...n }) => (0, i.jsx)(r, { ...n, children: (0, i.jsx)(e, {}) })) }), '\n', (0, i.jsx)(l.$9, { component: I, headingLevel: 2 })] }));
   }
   function U(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(X, { ...e }) }) : X(e);
   }
   function K(e, n) {
    throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
   }
  },
  8584(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een onderdeel dat toetsenbordfocus heeft mag niet volledig bedekt zijn.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  25872(e, n, t) {
   t.d(n, { Ay: () => a });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Je kunt het element focussen met de tabtoets en activeren met de spacebar en de entertoets.' }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening/', children: 'Toetsenbordbediening van een button' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons/', children: 'Disabled submitbuttons' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  30788(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'De zichtbare naam van een onderdeel moet terugkomen in de toegankelijke naam.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  31820(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Verras een gebruiker niet als die een interactief element focus geeft. Maak functionaliteit voorspelbaar en daardoor goed te begrijpen.' }), '\n', (0, r.jsx)(n.p, { children: 'Als een gebruiker een component focus geeft met het toetsenbord of door erop te klikken met de muis, zorg dan dat die actie niet automatisch een contextwijziging veroorzaakt.' }), '\n', (0, r.jsx)(n.p, { children: 'Bij een contextwijziging verandert onverwacht de indeling, informatie, toetsenbordfocus of functionaliteit. Bijvoorbeeld door het direct versturen van een formulier na het kiezen van een select-optie, waarna de gebruiker naar een andere pagina wordt doorgestuurd.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  33062(e, n, t) {
   t.d(n, { bo: () => i, KF: () => u, mJ: () => g, VZ: () => A, cR: () => z, Pv: () => j, qZ: () => a, kD: () => x, B2: () => m, Pc: () => l, f4: () => s, GT: () => f, fX: () => o, eQ: () => v, B_: () => b, o_: () => k, Rc: () => w });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^10.17.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    o = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    s = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    u = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return h(c(n));
    },
    m = (e, n) => g(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    g = (e) => h(c(e.projects.flatMap((e) => p(e)))),
    j = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: i, value: o }) => {
        const a = /^(.+) URL/.exec(r)[1],
         s = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: r, id: i, value: o, description: s };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    k = (e) => e.join('.'),
    b = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function x(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? x(e[t], [...n, t]) : []));
   }
   function f(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, k(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   function w(e) {
    const n = {};
    for (const t of e) {
     let e = n;
     for (const n of t) (e[n] || (e[n] = {}), (e = e[n]));
    }
    return n;
   }
   const z = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    A = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    };
  },
  36599(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Focus die met een toetsenbord geplaatst kan worden, moet ook met het toetsenbord weg te halen zijn.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  37131(e, n, t) {
   t.d(n, { VK: () => j, $9: () => b, mu: () => k, Fc: () => v, K_: () => x });
   var r = t(29181),
    i = t(13526),
    o = t(1292),
    a = t(90495),
    s = t(54565);
   function l(e) {
    return (0, s.c)() ? e.children() : null;
   }
   var d = t(86070);
   const c = ({ checked: e, unchecked: n }) =>
    (0, d.jsx)(l, {
     children: () => {
      const r = t(83294).V6;
      return (0, d.jsx)(r, {
       radius: 20,
       arcWidth: 4,
       data: [
        { fill: 'var(--basis-color-accent-1-inverse-bg-default)', key: 'Done', value: e, stroke: '2' },
        { fill: 'var(--basis-color-disabled-bg-default)', key: 'Todo', value: n, stroke: '2' },
       ],
       donutValue: null,
       showLabels: !1,
      });
     },
    });
   var h = t(67970),
    u = t(72642),
    m = t(58876),
    p = t(33062);
   const g = JSON.parse('{"Notification Banner":["Alert","Note"],"Note":["Alert","Notification Banner"],"Modal Dialog":["Alert Dialog","Drawer","Dialog"],"Drawer":["Modal Dialog","Dialog"],"Dialog":["Alert Dialog","Drawer"],"Alert Dialog":["Alert","Modal Dialog","Dialog"],"Alert":["Alert Dialog","Notification Banner","Note"],"Unordered List":["Ordered List","Rich Text Content","Link List","Task List"],"Ordered List":["Rich Text Content","Unordered List"]}'),
    j = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => p.f4.includes(e.id)),
      o = t && p.f4.map((e) => t.find((n) => n.id === e)).filter(Boolean);
     return e && (0, d.jsx)(r.If, { sections: o.map((t) => ({ className: (0, i.A)('definition-of-done', t && `definition-of-done--${(0, p.fX)(t.title)}`), headingLevel: n, expanded: !1, label: t ? `${t.title} - ${t.progress.value} van ${t.progress.max}` : '', body: t && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(m._, { children: t.tasks.map(({ checked: e, name: t, id: r }) => (0, d.jsx)(m.Z, { headingLevel: n + 1, checked: e, heading: t, description: (0, p.qZ)(r) }, r)) }), (0, d.jsx)(r.fz, { children: (0, d.jsxs)(r.N_, { href: `${t.url}?filterQuery=${e.title}`, children: [t.title, ' projectbord op GitHub'] }) })] }) })) });
    },
    k = ({ component: e, headingLevel: n }) => {
     const t = e && e.projects.filter((e) => !p.f4.includes(e.id));
     return e && t.length
      ? (0, d.jsx)(a.AC, {
         appearance: 'large',
         className: 'implementation-card-group',
         children: t
          .sort((e, n) => {
           const t = e.progress.max - e.progress.value,
            r = n.progress.max - n.progress.value;
           return t === r ? e.title.localeCompare(n.title) : t - r;
          })
          .map((e) => {
           const t = e.tasks.find(({ name: e }) => 'Naam' === e),
            i = t?.value,
            s = (0, p.Pv)(e),
            l = new Map([
             ['Figma URL', { brand: 'figma', desciption: `${i} in Figma` }],
             ['Theme Storybook URL', { brand: 'storybook', desciption: `${i} voor visuele regressie tests` }],
            ]),
            h = e.tasks.filter(({ name: e, value: n }) => l.has(e) && URL.canParse(n) && 'https:' === new URL(n).protocol);
           return (0, d.jsx)(
            a.Zp,
            {
             className: 'implementation-card',
             children: (0, d.jsxs)(a.Wu, {
              children: [
               (0, d.jsx)(r.DZ, { level: n, children: e.title.replace(/^Community/i, '') }),
               (0, d.jsxs)(r.fz, { children: [(0, d.jsx)(c, { checked: e.progress.value, unchecked: e.progress.max - e.progress.value }), e.progress.value, ' van ', e.progress.max, ' stappen gedocumenteerd op het', ' ', (0, d.jsxs)(r.N_, { href: e.url, children: [e.title, ' projectbord'] })] }),
               (h.length > 0 || s.length > 0) && (0, d.jsx)(r.DZ, { level: n + 1, children: 'Snel aan de slag' }),
               h.length > 0 &&
                (0, d.jsx)(d.Fragment, {
                 children: (0, d.jsx)(r.dk, {
                  links: h
                   .filter((e) => !!l.get(e.name))
                   .map((e) => {
                    const n = l.get(e.name);
                    return { children: n.desciption, icon: (0, d.jsx)(o.r, { brand: n.brand }), href: e.value };
                   }),
                 }),
                }),
               s.length > 0 && (0, d.jsx)(d.Fragment, { children: s.map(({ frameworkName: e, tasks: t }) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.DZ, { level: n + 2, children: [i, ' in ', e] }), (0, d.jsx)(r.dk, { links: t.map((e) => ({ children: e.description, icon: (0, d.jsx)(o.r, { brand: e.brand }), href: e.value })) })] })) }),
              ],
             }),
            },
            e.title,
           );
          }),
        })
      : (0, d.jsx)(r.fz, { children: 'Er zijn nog geen implementaties' });
    },
    b = ({ component: e, headingLevel: n }) => {
     const t = e?.projects.find((e) => 'HELP_WANTED' === e.id),
      i = t?.tasks.find((e) => 'PVTF_lADOBGdlVM4AdX8lzgcig7o' === e.id)?.value;
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(r.DZ, { level: n, children: 'Help om deze component te verbeteren' }), (0, d.jsxs)(r.fz, { children: ['We vinden het belangrijk dat de component ', e.title, ' goed te gebruiken is door iedereen. Help je mee?'] }), (0, d.jsxs)(r.Xy, { children: [i ? (0, d.jsxs)(r.Er, { children: ['Vul de ', (0, d.jsx)(r.N_, { href: i, children: 'GitHub Discussion' }), ' aan met de eisen en wensen voor jouw project of organisatie.'] }) : (0, d.jsxs)(r.Er, { children: [(0, d.jsxs)(r.N_, { href: 'https://github.com/orgs/nl-design-system/discussions/categories/component-suggestions', children: ['Start een GitHub Discussion voor ', e.title] }), ' ', 'en voeg de eisen en wensen voor jouw project of organisatie toe.'] }), (0, d.jsxs)(r.Er, { children: ['Draag bij aan de voortgang van ', e.title, ' door te zorgen dat deze aan meer checkpoints van de', ' ', (0, d.jsx)(r.N_, { href: '#definition-of-done', children: 'Definition of Done' }), ' voldoet. Deze houden we bij in de projectborden bij de ', (0, d.jsx)(r.N_, { href: e.backlog, children: 'publieke GitHub Backlog' }), '.', ' '] })] })] });
    },
    v = ({ component: e, headingLevel: n, description: t }) => {
     const i = e && p.bo[e.relayStep];
     return e && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(u.p, { level: n, suffix: i && (0, d.jsx)(h.D, { state: i }), children: e.title }), (0, d.jsx)(r.fz, { lead: !0, children: t })] });
    },
    x = ({ component: e }) => {
     const n = (e && g[e.title]) || [];
     return n.length > 0 && (0, d.jsxs)(r.fz, { children: ['Gerelateerde componenten:', ' ', n.map((e, t) => (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(r.N_, { href: `/${e.toLowerCase().replaceAll(' ', '-')}/`, children: e }), t < n.length - 1 ? ', ' : '.'] }))] });
    };
  },
  54565(e, n, t) {
   t.d(n, { c: () => i });
   var r = t(30758);
   function i() {
    const [e, n] = (0, r.useState)();
    return ((0, r.useEffect)(() => n(!0), []), e);
   }
  },
  62528(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Gebruik jij \xe9\xe9n van de implementaties van deze component of heb je je eigen component gemaakt? In beide gevallen geldt: met onderstaande acceptatiecriteria kun je nagaan of jouw gebruik van deze component klopt met NL Design System.' }), '\n', (0, r.jsx)(n.p, { children: 'Als je implementatie voldoet aan de acceptatiecriteria voor deze component, kun je er vanuit gaan dat je gebruik van deze component voldoet aan WCAG, niveau A en AA.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  67970(e, n, t) {
   t.d(n, { D: () => s });
   var r = t(46447),
    i = t(13526),
    o = t(33062),
    a = t(86070);
   const s = ({ state: e }) => {
    const n = (0, o.fX)(e);
    return (0, a.jsx)(r.KE, { className: (0, i.A)('estafette-badge', n && `estafette-badge--${n}`), children: e });
   };
  },
  69488(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function a(e) {
    const n = { a: 'a', code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Geef wisseling van de taal aan waarin de tekst van elke passage of zin is geschreven. Als er in de tekst woorden of zinnen voorkomen in een andere taal dan die van de webpagina, brengt markering van die taal hulpmiddelen op de hoogte. Dit kan door in het HTML-element waarbinnen deze tekst staat het attribuut ', (0, r.jsx)(n.code, { children: 'lang' }), ' mee te geven.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Dan wordt tekst in die andere taal correct uitgesproken en daardoor beter te begrijpen voor gebruikers die de website laten voorlezen, bijvoorbeeld door ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Er is een uitzondering voor eigennamen, technische termen, woorden in een onbekende taal, en woorden of zinsdelen die deel uitmaken van het jargon van de omliggende tekst.' }), '\n', (0, r.jsxs)(n.p, { children: ['Met het ', (0, r.jsx)(n.code, { children: 'lang' }), '-attribuut breng je over welke taal (een deel van) je tekst heeft. Dan kunnen hulptechnologie\xebn als screenreaders of vertaalsoftware daarop handelen. In het geval van screenreaders bijvoorbeeld door de tekst met de juiste stem voor te lezen.'] }), '\n', (0, r.jsx)(n.p, { children: 'Of de juiste stem ook echt wordt gebruikt is afhankelijk van de instellingen van de gebruikte screenreader.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  72642(e, n, t) {
   t.d(n, { p: () => o });
   var r = t(13526),
    i = t(86070);
   const o = ({ children: e, className: n, level: t = 1, suffix: o, ...a }) => (0, i.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${t}`, n), ...a, children: [(0, i.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), o && (0, i.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [o ? ' ' : '', o] })] });
  },
  75978(e, n, t) {
   t.d(n, { Ay: () => a });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Er is een goed zichtbare focusindicator. Dit doe je met een minimale dikte van 2 pixels en een minimaal contrast van 3:1 ten opzichte van aangrenzende kleuren. Hou ook rekening met het contrast met de verschillende achtergrondkleuren waarop een element gebruikt kan worden. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  76334(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function a(e) {
    const n = { p: 'p', strong: 'strong', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De linktekst vertelt eenduidig aan de gebruiker waar de link naar toe gaat (het linkdoel).' }), '\n', (0, r.jsxs)(n.p, { children: ['Wat is een ', (0, r.jsx)(n.strong, { children: 'linktekst' }), '? Het is de tekst die zichtbaar is, maar ook de tekst die aan een gebruiker van hulpsoftware wordt voorgelezen.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wat is het ', (0, r.jsx)(n.strong, { children: 'linkdoel' }), '? De locatie waar de link naartoe gaat. Bijvoorbeeld de contactpagina, een nieuwsbericht, een andere website of een download van een document.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Wat betekent ', (0, r.jsx)(n.strong, { children: 'In context' }), '? Het doel van de link kan ook door omringende content worden aangegeven. Dit moet dan wel ook voor gebruikers van hulpmiddelen duidelijk zijn, bijvoorbeeld door aanvullende tekst of een afbeelding naast de link. Dit laatste is onderwerp van veel discussie. Het beste is om altijd goed in de linktekst zelf te vertellen want het doel is.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  83672(e, n, t) {
   t.d(n, { Ay: () => a });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'De contrastverhouding van de tekstkleur met de achtergrondkleur is hoog genoeg. Minimale contrastverhoudingen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: '4,5:1 contrast voor normale tekst.' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor grotere letters (vanaf 24 pixels).' }), '\n', (0, r.jsx)(n.li, { children: '3:1 contrast voor vette letters (vet en groter of gelijk aan 19 pixels).' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Hogere verhoudingen mogen natuurlijk altijd. Met de ', (0, r.jsx)(n.a, { href: '/contrast/', children: 'Contrast checker' }), ' kun je controleren of je gekozen kleuren voldoen. Denk erom dat dit moet gelden voor alle achtergrondkleuren waarop de tekst geplaatst kan worden. Het kan dus zijn dat je meerdere checks moet doen.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/contrast-tekst/', children: 'Zorg voor voldoende kleurcontrast voor tekst tegen de achtergrond' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/tekst-goed-zichtbaar/', children: 'Geef tekst voldoende kleurcontrast' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/content/tekstopmaak/kleurgebruik-in-tekst/', children: 'Gebruik van kleur in tekst' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  87711(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Onderdelen die hetzelfde doen moeten ook hetzelfde te herkennen zijn.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  90495(e, n, t) {
   t.d(n, { AC: () => d, Fu: () => a, Wu: () => s, Zp: () => l });
   var r = t(46447),
    i = t(13526),
    o = t(86070);
   const a = ({ background: e, children: n, className: t, ...r }) => (0, o.jsx)('div', { className: (0, i.A)('card__illustration', e && `card__illustration--${e}`, t), ...r, children: n }),
    s = (e) => (0, o.jsx)('div', { className: 'card__content', ...e }),
    l = ({ href: e, appearance: n, className: t, component: a = 'div', background: s, children: l }) => {
     const d = (e) => ('article' === a ? (0, o.jsx)('article', { ...e }) : 'section' === a ? (0, o.jsx)('section', { ...e }) : (0, o.jsx)('div', { ...e })),
      c = (0, o.jsx)(d, { className: (0, i.A)('cardgroup__card', s && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, t), children: l });
     return e ? (0, o.jsx)(r.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: t }) => (0, o.jsx)('div', { className: (0, i.A)('cardgroup', `cardgroup--${e}`, t), children: n });
  },
  92233(e, n, t) {
   t.d(n, { Ay: () => a });
   var r = t(86070),
    i = t(18439);
   function o(e) {
    const n = { a: 'a', code: 'code', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Wanneer het element de toetsenbordfocus krijgt is de focus zichtbaar.' }), '\n', (0, r.jsxs)(n.p, { children: ['Verberg de standaard browserfocusstijl nooit met ', (0, r.jsx)(n.code, { children: 'outline:none' }), ' zonder er een goede focusstijl voor in de plaats te zetten die rekening houdt met goede zichtbaarheid.'] }), '\n', (0, r.jsx)(n.p, { children: 'NL Design System richtlijnen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak toetsenbordfocus goed zichtbaar' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/kleuren/voorkeuren/', children: 'Let op voorkeursinstellingen voor kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/stijl/typografie/voorkeur/', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
  },
  92544(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Een bezoeker die een screenreader gebruikt, hoort de content van een pagina in de volgorde waarin die in de HTML staat. Die volgorde komt overeen met wat een ziende bezoeker op het scherm ziet. Zo begrijpt iedereen welke informatie bij welk onderdeel hoort, ongeacht hoe iemand de pagina gebruikt.' });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  96412(e, n, t) {
   t.d(n, { Ay: () => s, RM: () => o });
   var r = t(86070),
    i = t(18439);
   const o = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Laat tekst buiten afbeeldingen.' }), '\n', (0, r.jsx)(n.p, { children: 'Als je losse tekst een vergelijkbaar uiterlijk kan geven als in een afbeelding, laat het dan losse tekst zijn. Er is een uitzondering als de tekst onderdeel is van een logo.' }), '\n', (0, r.jsx)(n.p, { children: 'Sommige mensen hebben teksten nodig met een ander uiterlijk. Dit kan bij losse tekst en niet bij afbeeldingen.' })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
 },
]);
