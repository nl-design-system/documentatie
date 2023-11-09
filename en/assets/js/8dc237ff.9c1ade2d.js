"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [30968],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => c });
   var a = t(67294);
   function o(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function r(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     n &&
      (a = a.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, a);
    }
    return t;
   }
   function i(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? r(Object(t), !0).forEach(function (n) {
         o(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : r(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function l(e, n) {
    if (null == e) return {};
    var t,
     a,
     o = (function (e, n) {
      if (null == e) return {};
      var t,
       a,
       o = {},
       r = Object.keys(e);
      for (a = 0; a < r.length; a++) (t = r[a]), n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (a = 0; a < r.length; a++) (t = r[a]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
    }
    return o;
   }
   var s = a.createContext({}),
    d = function (e) {
     var n = a.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
    },
    m = function (e) {
     var n = d(e.components);
     return a.createElement(s.Provider, { value: n }, e.children);
    },
    k = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return a.createElement(a.Fragment, {}, n);
     },
    },
    p = a.forwardRef(function (e, n) {
     var t = e.components,
      o = e.mdxType,
      r = e.originalType,
      s = e.parentName,
      m = l(e, ["components", "mdxType", "originalType", "parentName"]),
      k = d(t),
      p = o,
      c = k["".concat(s, ".").concat(p)] || k[p] || u[p] || r;
     return t ? a.createElement(c, i(i({ ref: n }, m), {}, { components: t })) : a.createElement(c, i({ ref: n }, m));
    });
   function c(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var r = t.length,
      i = new Array(r);
     i[0] = p;
     var l = {};
     for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
     (l.originalType = e), (l[k] = "string" == typeof e ? e : o), (i[1] = l);
     for (var d = 2; d < r; d++) i[d] = t[d];
     return a.createElement.apply(null, i);
    }
    return a.createElement.apply(null, t);
   }
   p.displayName = "MDXCreateElement";
  },
  69120: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => i, default: () => u, frontMatter: () => r, metadata: () => l, toc: () => d });
   var a = t(87462),
    o = (t(67294), t(3905));
   const r = { title: "Architectuur", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Architectuur", pagination_label: "Architectuur", description: "NL Design System architectuur" },
    i = "Jouw project inrichten op de NL Design System architectuur",
    l = { unversionedId: "meedoen/als-developer/architectuur", id: "meedoen/als-developer/architectuur", title: "Architectuur", description: "NL Design System architectuur", source: "@site/docs/meedoen/als-developer/02-architectuur.md", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/architectuur", permalink: "/en/meedoen/als-developer/architectuur", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/02-architectuur.md", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Architectuur", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Architectuur", pagination_label: "Architectuur", description: "NL Design System architectuur" }, sidebar: "meedoen", previous: { title: "Aan de slag", permalink: "/en/meedoen/als-developer/aan-de-slag" }, next: { title: "Thema maken", permalink: "/en/meedoen/als-developer/thema-maken" } },
    s = {},
    d = [
     { value: "Design Tokens voor CSS", id: "design-tokens-voor-css", level: 2 },
     { value: "BEM class names voor CSS", id: "bem-class-names-voor-css", level: 2 },
     { value: "Storybook voor elke organisatie", id: "storybook-voor-elke-organisatie", level: 2 },
     { value: "Backlog voor co\xf6rdinatie van eisen", id: "backlog-voor-co\xf6rdinatie-van-eisen", level: 2 },
    ],
    m = { toc: d },
    k = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(k, (0, a.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "jouw-project-inrichten-op-de-nl-design-system-architectuur" }, "Jouw project inrichten op de NL Design System architectuur"), (0, o.kt)("p", null, "Twee teams bij verschillende organisaties werken deze periode voor hun eigen doeleinden aan NL Design System componenten. De ontwikkelingen zijn ver genoeg gevorderd dat ze de komende twee weken gebruik gaan maken van elkaars componenten. Binnenkort sluiten meer teams aan. Daarna komen de componenten \xe9\xe9n voor \xe9\xe9n beschikbaar voor Rijkshuisstijl en voor projecten voor Gemeente Amsterdam. Hoe kunnen ze zo succesvol samenwerken, terwijl ze technisch andere eisen hebben? Hoe kunnen projecten samenwerken en ook een helemaal eigen visueel ontwerp realiseren?"), (0, o.kt)("p", null, "De NL Design System architectuur is bedacht om organisaties die op het eerste gezicht weinig raakvlakken hebben, mogelijkheid te bieden samen te werken aan uitdagingen die om veel tijd en expertise vragen, zoals toegankelijke websites maken en teams binnen \xe9\xe9n organisatie laten werken met hun framework naar keuze."), (0, o.kt)("p", null, "Wij vroegen organisaties die al aan hun eigen design system werken of ze hun websites willen en kunnen bouwen met open source componenten die al door andere overheden worden gedeeld. De meeste organisaties hadden wensen waar het bestaande aanbod nog niet goed in voorzag."), (0, o.kt)("p", null, (0, o.kt)("strong", { parentName: "p" }, "Hergebruik in uiteenlopende technieken:"), " Het eerste struikelblok is dat er qua techniek vaak geen gemene deler is: de organisatie zelf ontwikkelt bijvoorbeeld in het framework Angular, terwijl de open source teams werken met React en styled-components waardoor geen aansluiting mogelijk is."), (0, o.kt)("p", null, (0, o.kt)("strong", { parentName: "p" }, "Doorlooptijd voor nieuwe componenten:"), " Een tweede bezwaar dat genoemd wordt: op het moment dat je voor je project een nieuw onderdeel wil toevoegen dat een intern team gauw nodig heeft, dan is het proces om de hele community daarbij te betrekken een te grote vertraging. Je wilt nog wel werk gedaan krijgen en niet alleen moeten overleggen met andere teams."), (0, o.kt)("p", null, (0, o.kt)("strong", { parentName: "p" }, "Hergebruik voor andere huisstijlen:"), " Zonder ingrijpende wijzigingen van een open source component heb je bovendien nog een drempel: als je een ", (0, o.kt)("em", { parentName: "p" }, "component"), " van bijvoorbeeld Gemeente Amsterdam gebruikt, dan ziet jouw website er automatisch een beetje uit zoals de website van Amsterdam. Om jouw eigen huisstijl te realiseren op basis van een component van een ander, moet je vaak een kopie maken en zelf naar eigen smaak doorontwikkelen."), (0, o.kt)("p", null, 'Het veelgehoorde argument om een open source project te gebruiken vanwege de "grote community" zodat je toegang hebt tot veel kennis en support op internet, gaat niet meer op wanneer je een kopie moet maken. Die kopie is al gauw achterhaald ten opzichte van de ontwikkelingen van een groot open source project. Je wilt juist werken met een centraal open source project waar je een verbetering aan kan toevoegen wanneer je die zelf nodig hebt, waar vervolgens de hele community van kan profiteren. Maar daarna gaan de ontwikkelingen gewoon door, en jouw verbetering blijft doorleven in het project.'), (0, o.kt)("p", null, 'We vroegen deze organisaties ook of ze hun eigen design system werk uit Git als open source op internet wilden zetten. Veelgenoemd bezwaar was: onze componenten zijn niet "algemeen" genoeg, daar hebben anderen toch niets aan! Ook: wij hebben helemaal geen tijd om allemaal bijdragen van vrijwilligers te beoordelen in ons project. En wat als ze bugs veroorzaken?!'), (0, o.kt)("p", null, "Wij hebben geluisterd naar alle wensen en dit jaar zijn we begonnen met enkele teams om een architectuur te beproeven die bovenstaande wensen mogelijk moet maken."), (0, o.kt)("h2", { id: "design-tokens-voor-css" }, "Design Tokens voor CSS"), (0, o.kt)("p", null, 'Het uiterlijk van websites wordt geprogrammeerd met CSS, een taal waarin kleuren, lettertypes, witruimte en vlakverdeling van websites worden ingesteld. Met de NL Design System architectuur wordt de CSS opgedeeld in verschillende lagen: de onderste laag gaat over componenten en kan hergebruikt worden voor andere huisstijlen en andere teams. De bovenste laag bevat de kenmerken van de huisstijl van een organisatie: deze laag wordt in software vaak een "thema" genoemd. De laag in het midden is de lijm die het mogelijk maakt: de design tokens van NL Design System.'), (0, o.kt)("p", null, "Een design token is een kleine eigenschap van je visueel ontwerp, zoals een kleur of een lettertype. Elke huisstijl bestaat uit kleurenpalet en \xe9\xe9n of meerdere lettertypes: dit noemen wij ", (0, o.kt)("em", { parentName: "p" }, "brand identity design tokens"), ', maar we korten het vaak af als "', (0, o.kt)("em", { parentName: "p" }, "brand tokens"), '". Deze design tokens zijn er om de herkenbaarheid van je websites te waarborgen. Meestal is het de bedoeling dat geen kleuren of lettertypes worden gebruikt die niet een offici\xeble design token zijn.'), (0, o.kt)("p", null, 'Meestal wordt CSS geschreven op een manier dat deze kleuren en lettertypes in elke uithoek van de code voorkomen, zodat elke component aan de huisstijl voldoet. Uit onze rondvraag bleek dat al die huisstijl-specifieke code een belangrijke belemmering is om samen te werken aan code van een andere organisatie. Daarom vervangen onze teams al deze kleuren in hun code door CSS variabelen van NL Design System. De naam "variabele" zegt het al: de kleur of lettertype wordt afhankelijk van de website waarin je de component gebruikt.'), (0, o.kt)("p", null, 'Front-end developers zullen zich inmiddels afvragen: hoe ziet dat er uit in de code? Hier bijvoorbeeld twee "brand tokens" voor Rijkshuisstijl, uit de bovenste laag:'), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-css" }, ':root {\n  --rijkshuisstijl-color-hemelblauw-basis: hsl(203deg 100% 39%);\n\n  --rijkshuisstijl-typography-sans-serif-font-family: "Rijksoverheid SansWebText";\n}\n')), (0, o.kt)("p", null, "Om de code van componenten vrij te houden van huisstijl (en zo hergebruik mogelijk te maken) moet de code natuurlijk ook geen gebruik maken van de CSS variabele ", (0, o.kt)("inlineCode", { parentName: "p" }, "var(--rijkshuisstijl-color-hemelblauw-basis)"), ", net zo min als de kleurcode ", (0, o.kt)("inlineCode", { parentName: "p" }, "#007bc7"), " herbruikbaar is voor anderen. In plaats daarvan gebruiken we CSS variabelen van NL Design System in de onderste laag, de CSs van componenten:"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-css" }, ".nl-paragraph {\n  font-family: var(--nl-document-font-family);\n}\n\n.nl-button {\n  color: var(--nl-action-primary-color);\n}\n")), (0, o.kt)("p", null, "Elke huisstijl kan op deze manier een eigen invulling geven aan de componenten, door de lijm van de middelste laag waarin de ", (0, o.kt)("em", { parentName: "p" }, "brand identity design token"), " worden gekoppeld aan ", (0, o.kt)("em", { parentName: "p" }, "component design tokens"), ":"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-css" }, ":root {\n  --nl-document-font-family: var(--rijkshuisstijl-typography-sans-serif-font-family);\n\n  --nl-action-primary-color: var(--rijkshuisstijl-color-hemelblauw-basis);\n}\n")), (0, o.kt)("p", null, "Elke organisatie kan nu al beginnen met design tokens bepalen voor de huisstijl. Design tokens maken het veel makkelijker om aan te sluiten bij NL Design System, maar ze kunnen al gelijk ingezet worden je huidige websites en het is bovendien een goede handreiking aan marktpartijen die voor jouw organisaties websites en apps ontwikkelen. NL Design System biedt templates aan om design tokens te beheren en te publiceren naar verschillende kanalen: JSON, CSS, SCSS, Less, eventueel zelfs naar Android en iOS apps."), (0, o.kt)("h2", { id: "bem-class-names-voor-css" }, "BEM class names voor CSS"), (0, o.kt)("p", null, "Teams die werken aan templates in een CMS en teams die werken aan code in een framework naar keuze (zoals React, Vue.js, Angular, Stencil of Svelte) hebben iets gemeen: ze kunnen allemaal gebruik maken van de NL Design System design tokens en CSS variabelen. Zelfs als teams binnen je organisatie werken met verschillende frameworks, kunnen ze al beginnen om centraal de design tokens te beheren."), (0, o.kt)("p", null, "Alle teams hebben n\xf3g iets gemeen: de CSS van componenten kan op alle soorten HTML toegepast worden met de ", (0, o.kt)("a", { parentName: "p", href: "http://getbem.com" }, "BEM class names"), " van de NL Design System architectuur, waardoor hergebruik in uiteenlopende technieken mogelijk wordt."), (0, o.kt)("p", null, "Een simpel voorbeeld is een button in een HTML template van bijvoorbeeld een CMS of een Angular template:"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-html" }, '<button class="nl-button nl-button--primary-action">OK</button>\n')), (0, o.kt)("p", null, "Het essentiele voordeel van BEM class names is dat elk onderdeel van de CSS een unieke naam heeft waar je gemakkelijk naar kan verwijzen, iets dat niet vanzelfsprekend is voor een complexe CSS selector zoals ", (0, o.kt)("inlineCode", { parentName: "p" }, "form button:hover"), ". Dat betekent dat je de CSS zelfs kan gebruiken in situaties waarin je niet de class name van NL Design System op een HTML element kan of wilt plaatsen."), (0, o.kt)("p", null, "Met SCSS kun je de BEM class name van NL Design System bijvoorbeeld toepassen op de HTML van je huidige CMS templates, waardoor je oude system al gedeeltelijk naar NL Design System kan migreren:"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-scss" }, '@import "./nl-design-system";\n\n.content p {\n  @extend .nl-paragraph;\n}\n.content a {\n  @extend .nl-link;\n}\n.content a:hover {\n  @extend .nl-link--hover;\n}\n')), (0, o.kt)("p", null, "Veel React projecten maken gebruik van ", (0, o.kt)("inlineCode", { parentName: "p" }, "styled-components"), ": dat is een alternatief voor CSS bestanden. Zulke projecten zonder CSS hebben niet een mogelijkheid om samen te werken aan het visueel ontwerp met teams in de organisatie die een ander framework gebruiken zoals Vue.js."), (0, o.kt)("p", null, "De BEM class names van NL Design System maken het mogelijk dat beide teams samenwerken aan de CSS. Hier volgt een voorbeeld van BEM class names in React door gebruik te maken van CSS modules:"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-jsx" }, 'import styles from "./nl-design-system.css";\n\nconst Button = () => <button className={styles["nl-button"]}>OK</button>;\n')), (0, o.kt)("p", null, "Dezelfde CSS kan met CSS modules in een Vue.js template worden gebruikt:"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-html" }, "<template>\n  <button :class=\"$style['nl-button']\">OK</button>\n</template>\n")), (0, o.kt)("p", null, "De NL Design System architectuur richt zich dus in eerste instantie op herbruikbare CSS en simpele HTML codevoorbeelden, waardoor alle organisaties die meebouwen gelijk veel raakvlakken voor samenwerking hebben, zelfs wanneer heel uiteenlopende technieken worden gebruikt."), (0, o.kt)("h2", { id: "storybook-voor-elke-organisatie" }, "Storybook voor elke organisatie"), (0, o.kt)("p", null, "Je kunt beginnen met de NL Design System architectuur voor jouw organisatie gebruiken met onze ", (0, o.kt)("a", { parentName: "p", href: "http://github.com/nl-design-system/template" }, "GitHub template repository"), ", zodat je als basis een Storybook website hebt waarin je de design tokens, componenten en patronen van jouw organisatie kunt documenteren en doorontwikkelen."), (0, o.kt)("p", null, "Deze eigen omgeving biedt je de mogelijkheid om op eigen tempo een bibliotheek samen te stellen van eigen componenten en ge\xefmporteerde componenten die in de bredere NL Design System community gevonden kunnen worden. Je kunt zelf kiezen welke onderdelen je overneemt van anderen en welke je anders gaat aanpakken. De doorlooptijd van eigen componenten heb je volledig zelf in de hand, terwijl je nog steeds tijd kunt besparen door gedeeltelijke hergebruik. Je kunt bijvoorbeeld de code van een component zelf schrijven, maar de documentatie over toegankelijkheid van zo'n component uit NL Design System overnemen."), (0, o.kt)("p", null, "De nieuwe ", (0, o.kt)("a", { parentName: "p", href: "https://designsystem.gebruikercentraal.nl/nieuwe-werkwijze/" }, "NL Design System werkwijze"), " betekent dat je ge\xefmporteerde componenten van anderen kunt nomineren voor de centrale NL Design System componentenbibliotheek, wanneer ze in jouw organisatie ook succesvol blijken te werken."), (0, o.kt)("h2", { id: "backlog-voor-co\xf6rdinatie-van-eisen" }, "Backlog voor co\xf6rdinatie van eisen"), (0, o.kt)("p", null, 'De "levende" ', (0, o.kt)("a", { parentName: "p", href: "http://github.com/nl-design-system/backlog/issues" }, "backlog van NL Design System"), " moet ontwikkelaars en designers per component en goed overzicht geven van de uiteenlopende wensen en eisen die in community bestaan."), (0, o.kt)("p", null, "Wanneer je extra wensen hebt voor een component, dan kun je die melden op de ", (0, o.kt)("a", { parentName: "p", href: "http://github.com/nl-design-system/backlog/issues" }, "NL Design System backlog"), "."), (0, o.kt)("p", null, "Wanneer deelnemende organisaties helpen om voor elk component en patroon de eisen volledig te krijgen, dan kunnen teams die daadwerkelijk de component bouwen sneller aan alle eisen voldoen. Bovendien helpt het om de eisen te documenteren waaraan een huidige versie van een component voldoet, zodat die functionaliteit niet per ongeluk verloren gaat in een latere versie."), (0, o.kt)("p", null, "De backlog is ook de centrale plek waar je kunt ontdekken welke organisaties eigen varianten van een component hebben, waar jouw organisatie mogelijk op door kan bouwen."), (0, o.kt)("hr", null), (0, o.kt)("p", null, "Voorbeeldcode in dit artikel loopt vooruit op een stabiele versie van de componenten, dus niet alles bestaat nu al in Git."));
   }
   u.isMDXComponent = !0;
  },
 },
]);
