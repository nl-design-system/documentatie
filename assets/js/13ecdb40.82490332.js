"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5854],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => k, kt: () => p });
   var r = t(67294);
   function o(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function a(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r);
    }
    return t;
   }
   function i(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? a(Object(t), !0).forEach(function (n) {
         o(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : a(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function l(e, n) {
    if (null == e) return {};
    var t,
     r,
     o = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       o = {},
       a = Object.keys(e);
      for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
    }
    return o;
   }
   var s = r.createContext({}),
    d = function (e) {
     var n = r.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
    },
    k = function (e) {
     var n = d(e.components);
     return r.createElement(s.Provider, { value: n }, e.children);
    },
    u = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    c = r.forwardRef(function (e, n) {
     var t = e.components,
      o = e.mdxType,
      a = e.originalType,
      s = e.parentName,
      k = l(e, ["components", "mdxType", "originalType", "parentName"]),
      u = d(t),
      c = o,
      p = u["".concat(s, ".").concat(c)] || u[c] || m[c] || a;
     return t ? r.createElement(p, i(i({ ref: n }, k), {}, { components: t })) : r.createElement(p, i({ ref: n }, k));
    });
   function p(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var a = t.length,
      i = new Array(a);
     i[0] = c;
     var l = {};
     for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
     (l.originalType = e), (l[u] = "string" == typeof e ? e : o), (i[1] = l);
     for (var d = 2; d < a; d++) i[d] = t[d];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, t);
   }
   c.displayName = "MDXCreateElement";
  },
  31745: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => i, default: () => m, frontMatter: () => a, metadata: () => l, toc: () => d });
   var r = t(87462),
    o = (t(67294), t(3905));
   const a = { title: "Kleuren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Kleuren", sidebar_position: 2, pagination_label: "Kleuren", description: "Richtlijnen voor kleuren", keywords: ["kleuren", "toegankelijkheid"] },
    i = void 0,
    l = { unversionedId: "richtlijnen/stijl/kleuren", id: "richtlijnen/stijl/kleuren", title: "Kleuren", description: "Richtlijnen voor kleuren", source: "@site/docs/richtlijnen/stijl/kleuren.md", sourceDirName: "richtlijnen/stijl", slug: "/richtlijnen/stijl/kleuren", permalink: "/richtlijnen/stijl/kleuren", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/kleuren.md", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Kleuren", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Kleuren", sidebar_position: 2, pagination_label: "Kleuren", description: "Richtlijnen voor kleuren", keywords: ["kleuren", "toegankelijkheid"] }, sidebar: "richtlijnen", previous: { title: "Typografie", permalink: "/richtlijnen/stijl/typografie" }, next: { title: "Iconen", permalink: "/richtlijnen/stijl/iconen" } },
    s = {},
    d = [
     { value: "Contrast", id: "contrast", level: 2 },
     { value: "Zorg voor voldoende kleurcontrast.", id: "zorg-voor-voldoende-kleurcontrast", level: 3 },
     { value: "Tekst", id: "tekst", level: 4 },
     { value: "Interface elementen", id: "interface-elementen", level: 4 },
     { value: "Kleurenpalet", id: "kleurenpalet", level: 4 },
     { value: "Tekst over afbeelding", id: "tekst-over-afbeelding", level: 4 },
     { value: "Gebruik", id: "gebruik", level: 2 },
     { value: "Vertrouw niet alleen op kleur.", id: "vertrouw-niet-alleen-op-kleur", level: 3 },
     { value: "Gebruik kleur met een doel.", id: "gebruik-kleur-met-een-doel", level: 3 },
     { value: "Signaalkleuren", id: "signaalkleuren", level: 4 },
     { value: "Interactie", id: "interactie", level: 4 },
     { value: "Overig", id: "overig", level: 2 },
     { value: "Verschillen in waarneming", id: "verschillen-in-waarneming", level: 3 },
     { value: "Voorkeursinstellingen", id: "voorkeursinstellingen", level: 3 },
     { value: "Meer informatie", id: "meer-informatie", level: 2 },
     { value: "Gerelateerde WCAG Richtlijnen", id: "gerelateerde-wcag-richtlijnen", level: 3 },
     { value: "Links", id: "links", level: 3 },
     { value: "Help deze documentatie te verbeteren", id: "help-deze-documentatie-te-verbeteren", level: 2 },
     { value: "Vragen", id: "vragen", level: 2 },
    ],
    k = { toc: d },
    u = "wrapper";
   function m(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(u, (0, r.Z)({}, k, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "kleuren" }, "Kleuren"), (0, o.kt)("p", null, "Kleuren zijn een belangrijk onderdeel van een ontwerp. Ze zorgen voor een visuele toon en helpen bij het overbrengen van functie en betekenis."), (0, o.kt)("p", null, "Echter wordt kleur niet door iedereen op dezelfde manier ervaren. Daarom hebben kleuren een ondersteunende en geen essenti\xeble rol."), (0, o.kt)("h2", { id: "contrast" }, "Contrast"), (0, o.kt)("h3", { id: "zorg-voor-voldoende-kleurcontrast" }, "Zorg voor voldoende kleurcontrast."), (0, o.kt)("p", null, "Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de zon op je smartphone schijnt."), (0, o.kt)("p", null, (0, o.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_kleuren_contrast.png", alt: "Afgebeeld zijn de woorden 'onvoldoende' en 'contrast'. Waarbij 'onvoldoende' te weinig kleurcontrast heeft en 'contrast' wel." })), (0, o.kt)("p", null, "Het W3C is voor ", (0, o.kt)("a", { parentName: "p", href: "https://www.w3.org/TR/wcag-3.0/#visual-contrast-of-text" }, "WCAG 3.0"), " aan het kijken naar een algoritme om kleurcontrast accurater te berekenen. Let wel; voorlopig zal je je aan de huidige contrast richtlijnen moeten houden."), (0, o.kt)("h4", { id: "tekst" }, "Tekst"), (0, o.kt)("p", null, "Voor tekst zou het contrast tussen de voor- en achtergrondkleur 4.5:1 of groter moeten zijn. Bij een lettergrootte van 24px (of 18.5px en bold) of hoger zou het contrast 3:1 of groter moeten zijn."), (0, o.kt)("h4", { id: "interface-elementen" }, "Interface elementen"), (0, o.kt)("p", null, "Er zijn ook interface elementen die voldoende contrast moeten hebben. Denk aan iconen, formulierelementen of datavisualisatie. Voor deze elementen zou het contrast tussen de voor- en achtergrondkleur 3:1 of groter moeten zijn."), (0, o.kt)("h4", { id: "kleurenpalet" }, "Kleurenpalet"), (0, o.kt)("p", null, "Het is handig om een kleurenpalet te hebben waaruit je kan opmaken welke kleurcombinaties voldoende contrast opleveren. Er zijn verschillende tools beschikbaar die je hierbij kunnen helpen. Zo zou je ", (0, o.kt)("a", { parentName: "p", href: "https://accessiblepalette.com/" }, "accessiblepalette.com"), " kunnen gebruiken. Deze tool berekend het contrast op basis van de WCAG 2.1 en 3 (concept) richtlijnen."), (0, o.kt)("p", null, "Het hebben van een uitgebreid kleurenpalet is fijn (ook met het oog op dark-mode). Maar het betekend niet dat je ook veel verschillende kleuren moet gebruiken. Pas de kleuren uit het kleurenpalet toe voor specifieke doeleinden. Het \u2018common\u2019 niveau dat we hanteren bij het NL Design System is hier een mooi voorbeeld van."), (0, o.kt)("h4", { id: "tekst-over-afbeelding" }, "Tekst over afbeelding"), (0, o.kt)("p", null, "Als je tekst over een afbeelding wilt gebruiken, plaats dan een effen vlak achter de tekst of een transparant kleurvlak over de gehele afbeelding."), (0, o.kt)("h2", { id: "gebruik" }, "Gebruik"), (0, o.kt)("h3", { id: "vertrouw-niet-alleen-op-kleur" }, "Vertrouw niet alleen op kleur."), (0, o.kt)("p", null, "Wanneer je alleen kleur gebruikt om informatie over te brengen kan iemand die kleurenblind is de dit soms niet goed interpreteren. Maak daarom gebruik van tekst, iconen en/of andere visuele elementen om de intentie van de boodschap te versterken."), (0, o.kt)("p", null, (0, o.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_kleuren_deuteranoop.png", alt: "Afgebeeld is een formulier bestaande uit twee tekstvelden en een button. Het tweede tekstveld heeft een rode border. Het formulier staat daarnaast nogmaals afgebeeld maar dan is de rode kleur vervangen voor een beide grijstint." })), (0, o.kt)("p", null, "In de afbeelding hierboven zie je een formulier waarbij het tekstveld 'E-mailadres' een rode border heeft. Daarnaast staat het formulier nogmaals afgebeeld, maar dan zoals een kleurenblind persoon dit kan ervaren (in dit voorbeeld deuteranoop)."), (0, o.kt)("p", null, "Enkele tips om niet alleen op kleur te vertrouwen:"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Onderstreep links in je body text."), (0, o.kt)("li", { parentName: "ul" }, "Voeg een icoon toe aan een foutmelding en maak de border van het formulier element dikker."), (0, o.kt)("li", { parentName: "ul" }, "Gebruik vormen of patronen als extra onderscheidend element voor datavisualisatie.")), (0, o.kt)("p", null, "Er zijn verschillende vormen van kleurenblindheid. Je kunt testen hoe jouw ontwerp overkomt op iemand die kleurenblind is. Er zijn verschillende tools beschikbaar die je hierbij kunnen helpen. Zo zou je de ", (0, o.kt)("a", { parentName: "p", href: "https://chrome.google.com/webstore/detail/spectrum/ofclemegkcmilinpcimpjkfhjfgmhieb" }, "Spectrum plugin voor Google Chrome"), " kunnen gebruiken. Deze plugin geeft aan hoe jouw ontwerp per vorm van kleurenblindheid wordt ervaren."), (0, o.kt)("h3", { id: "gebruik-kleur-met-een-doel" }, "Gebruik kleur met een doel."), (0, o.kt)("p", null, "Als je kleuren gebruikt doe je dat met een bepaald doel, hierdoor hebben ze een betekenis. Het is belangrijk dat die kleur consistent hoort bij die betekenis. Bijvoorbeeld: rood wordt gebruikt om risico aan te geven, of een blokkade door een foutmelding. Gebruik rood dan niet wanneer je juist w\xe9l ergens op moet klikken, zoals een link of een verzendknop."), (0, o.kt)("p", null, (0, o.kt)("strong", { parentName: "p" }, "Inzicht vanuit onderzoek."), "\nUit een onderzoek van Gemeente Utrecht blijkt dat laaggeletterden afschrikken van de kleur rood. Bijvoorbeeld als achtergrondkleur van een knop. De tekst wordt niet gelezen, de laaggeletterde acteert op kleur. Deze kleur wordt daarom niet langer als standaard interactie kleur toegepast."), (0, o.kt)("h4", { id: "signaalkleuren" }, "Signaalkleuren"), (0, o.kt)("p", null, "Het kan zijn dat in je huisstijl de 'stoplichtkleuren' rood, amber of groen een belangrijke rol hebben. Gebruik dan rood en groen niet als primaire kleur voor de knop en link componenten. Maar gebruik ze als signaalkleur voor bijvoorbeeld een fout- of succesmelding."), (0, o.kt)("h4", { id: "interactie" }, "Interactie"), (0, o.kt)("p", null, "Het is verstandig om vanuit je kleurenpalet \xe9\xe9n kleur aan te houden voor interactie. Een blauwe tint geeft het sterkste signaal voor links, maar andere kleuren werken bijna net zo goed. Gebruik de gekozen kleur voor interactie daarna niet meer voor niet-interactieve elementen."), (0, o.kt)("h2", { id: "overig" }, "Overig"), (0, o.kt)("h3", { id: "verschillen-in-waarneming" }, "Verschillen in waarneming"), (0, o.kt)("p", null, "Vergeet niet dat mensen kleur op verschillende manieren kunnen waarnemen en ervaren. Soms zelfs helemaal niet."), (0, o.kt)("p", null, "Voorbeelden van verschillen in waarneming:"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("strong", { parentName: "li" }, "Iets niet kunnen zien als er tussen twee tinten te weinig contrast is."), " ", (0, o.kt)("a", { parentName: "li", href: "#contrast" }, "Lees meer over contrast"), "."), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("strong", { parentName: "li" }, "Geen verschil kunnen zien tussen kleuren."), " Wanneer je twee kleuren naast elkaar gebruikt om verschil duidelijk te maken, kies dan kleuren die ook verschillend zijn voor mensen met kleurenblindheid. Dit is essentieel voor bijvoorbeeld datavisualisatie met een grafiek of landkaart. En als je kleur gebruikt om de status van de component duidelijk te maken (bijvoorbeeld \u2018disabled\u2019 of \u2018invalid\u2019). Verander dan niet alleen de kleur maar kies ook voor een donkerdere of lichtere tint, of maak de lijnen en tekst dikker."), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("strong", { parentName: "li" }, "Last ervaren van een te hoog contrast."), " Gebruik daarom geen puur zwarte tekst op een puur witte achtergrond. Zo\u2019n sterk contrast (21:1) kan ertoe leiden dat mensen tekst wazig, bewegend of flikkerend ervaren. Dit staat bekend als het ", (0, o.kt)("a", { parentName: "li", href: "https://en.m.wikipedia.org/wiki/Irlen_syndrome" }, "Irlen-syndroom"), ". Overweeg daarom het contrast te beperken tot bijvoorbeeld 17:1. Kies als tekstkleur bijvoorbeeld niet zwart, maar donker grijs."), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("strong", { parentName: "li" }, "Last ervaren van heldere kleuren en hoog contrast."), " Als je erg gevoelig bent voor licht, dan kun je software gebruiken om alle kleuren op het scherm donkerder te maken en de kleuren minder verzadigd weer te geven. Dat kan bijvoorbeeld met ", (0, o.kt)("a", { parentName: "li", href: "https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696" }, "Windows high contrast mode"), "."), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("strong", { parentName: "li" }, "Meer op kleur dan tekst vertrouwen."), " Als je de nederlandse taal niet spreekt of kan lezen, of als je laaggeletterd bent, dan kunnen kleuren essentieel zijn om de betekenis te begrijpen. Rood is fout, groen is goed, amber is een waarschuwing. Schrik deze gebruikers niet onnodig af door rood te gebruiken voor acties die ongevaarlijk zijn om aan te klikken."), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("strong", { parentName: "li" }, "Geen kleuren zien, alleen lichte en donkere tinten."), " Als je een intense kleur wilt gebruiken om de aandacht te trekken, dan werkt dat niet voor iedereen. Begin eerst met een alternatief zoals een dikkere border, grotere afmeting, vette tekst, of een omgekeerd kleurenpalet."), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("strong", { parentName: "li" }, "Bijna niets tot niets zien."), " Daarom is het belangrijk dat informatie in eerste instantie duidelijk wordt door tekst of door informatie via HTML en ARIA aan hulpmiddelen door te geven.")), (0, o.kt)("h3", { id: "voorkeursinstellingen" }, "Voorkeursinstellingen"), (0, o.kt)("p", null, "Vergeet niet dat men mogelijk voorkeursinstellingen heeft toegepast."), (0, o.kt)("p", null, "Voorbeelden van voorkeursinstellingen:"), (0, o.kt)("p", null, (0, o.kt)("strong", { parentName: "p" }, "Aangepast kleuren thema."), "\nSommige mensen bekijken webpagina\u2019s liever in een donker (dark-mode) of juist licht kleurenthema (light-mode). Zij kunnen deze voorkeur aangeven via een instelling van het besturingssysteem. Door de media query ", (0, o.kt)("a", { parentName: "p", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" }, (0, o.kt)("inlineCode", { parentName: "a" }, "prefers-color-scheme")), " is dit te detecteren en kun je deze mensen een donker kleuren thema aanbieden."), (0, o.kt)("p", null, (0, o.kt)("strong", { parentName: "p" }, "Aangepast contrast."), "\nSommige mensen bekijken webpagina\u2019s liever met meer of juist minder contrast. Zij kunnen deze voorkeur aangeven via een instelling van het besturingssysteem. Door de media query ", (0, o.kt)("a", { parentName: "p", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast" }, (0, o.kt)("inlineCode", { parentName: "a" }, "prefers-contrast")), " is dit te detecteren en kun je deze mensen passend kleurenthema aanbieden. Maar ze zouden ook gebruik kunnen maken van ", (0, o.kt)("a", { parentName: "p", href: "https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696" }, "Windows high contrast mode"), "."), (0, o.kt)("p", null, (0, o.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_kleuren_voorkeursinstellingen.png", alt: "Afgebeeld zijn drie schermen met dezelfde inhoud. Het eerste voorbeeld toont een lichte modus. Het tweede voorbeeld toont een donkere modus. Het derde voorbeeld tot een hoog contrast voorbeeld." })), (0, o.kt)("h2", { id: "meer-informatie" }, "Meer informatie"), (0, o.kt)("h3", { id: "gerelateerde-wcag-richtlijnen" }, "Gerelateerde WCAG Richtlijnen"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("a", { parentName: "li", href: "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html" }, "1.4.1: Use of color")), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("a", { parentName: "li", href: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" }, "1.4.3: Contrast (minimum)")), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("a", { parentName: "li", href: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html" }, "1.4.11: Non-text Contrast"))), (0, o.kt)("h3", { id: "links" }, "Links"), (0, o.kt)("p", null, (0, o.kt)("a", { parentName: "p", href: "https://colorandcontrast.com/" }, "Color and Contrast - Nate Baldwin"), (0, o.kt)("br", null), "\nWebsite met uitgebreide en interactieve documentatie over kleur."), (0, o.kt)("p", null, (0, o.kt)("a", { parentName: "p", href: "https://accessiblepalette.com/" }, "Accessible Palette - Eugene Fedorenko"), (0, o.kt)("br", null), "\nOnline tool waarmee je een kleurenpalet kunt genereren en direct contrast kunt checken."), (0, o.kt)("p", null, (0, o.kt)("a", { parentName: "p", href: "https://contrast-grid.eightshapes.com/" }, "Contrast grid - Eightshapes"), (0, o.kt)("br", null), "\nOnline tool waarbij je meerdere kleuren kunt invullen. Vervolgens ontstaat er een tabel waardoor je het contrast kunt checken."), (0, o.kt)("p", null, (0, o.kt)("a", { parentName: "p", href: "https://color.review/" }, "Color review - Anton Robsarve"), (0, o.kt)("br", null), "\nOnline tool waarbij je twee kleuren kunt invullen. Vervolgens kun je checken hoeveel contrast deze kleurcombinatie oplevert. Daarnaast heb je de mogelijkheid om via een colorpicker naar voldoende contrast op zoek te gaan."), (0, o.kt)("p", null, (0, o.kt)("a", { parentName: "p", href: "https://randoma11y.com/" }, "Radoma11y - Components AI"), (0, o.kt)("br", null), "\nOnline tool die willekeurig twee kleurcombinaties samensteld die altijd voldoende contrast hebben."), (0, o.kt)("p", null, (0, o.kt)("a", { parentName: "p", href: "https://whocanuse.com/" }, "Who can use - Corey Ginnivan"), (0, o.kt)("br", null), "\nOnline tool waarbij je twee kleuren kunt invullen. Vervolgens kun je checken hoe deze kleurcombinatie overkomt bij verschillende visuele beperkingen."), (0, o.kt)("p", null, (0, o.kt)("a", { parentName: "p", href: "https://projects.susielu.com/viz-palette" }, "Viz palette - Elijah Meeks & Susie Lu"), (0, o.kt)("br", null), "\nOnline tool waarbij je meerdere kleuren kunt invullen specifiek voor data visualisatie. Vervolgens kun je checken hoe deze kleurcombinatie overkomt bij verschillende visuele beperkingen."), (0, o.kt)("p", null, (0, o.kt)("a", { parentName: "p", href: "https://chrome.google.com/webstore/detail/spectrum/ofclemegkcmilinpcimpjkfhjfgmhieb" }, "Chrome plugin: Spectrum"), (0, o.kt)("br", null), "\nBroser plugin waarmee je kunt checken hoe een webpagina overkomt bij verschillende vormen van kleurenblindheid."), (0, o.kt)("p", null, (0, o.kt)("a", { parentName: "p", href: "https://www.bounteous.com/insights/2019/03/22/orange-you-accessible-mini-case-study-color-ratio/" }, "Orange you accessible?"), (0, o.kt)("br", null), "\nArtikel over een onderzoek naar contrast voor de kleur oranje."), (0, o.kt)("p", null, (0, o.kt)("a", { parentName: "p", href: "https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/" }, "Guide windows high contrast mode"), (0, o.kt)("br", null), "\nArtikel waarin wordt beschreven hoe je een website kan inrichten zodat Windows High Contrast mode wordt ondersteund."), (0, o.kt)("hr", null), (0, o.kt)("h2", { id: "help-deze-documentatie-te-verbeteren" }, "Help deze documentatie te verbeteren"), (0, o.kt)("p", null, "Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via Github."), (0, o.kt)("h2", { id: "vragen" }, "Vragen"), (0, o.kt)("p", null, "Heb je een vraag? Twijfel niet en ", (0, o.kt)("a", { parentName: "p", href: "/project/kernteam" }, "neem contact op met het kernteam"), "."));
   }
   m.isMDXComponent = !0;
  },
 },
]);
