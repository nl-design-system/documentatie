"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [77754],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => d, kt: () => u });
   var i = t(67294);
   function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function s(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, i);
    }
    return t;
   }
   function r(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? s(Object(t), !0).forEach(function (n) {
         a(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : s(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function o(e, n) {
    if (null == e) return {};
    var t,
     i,
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       i,
       a = {},
       s = Object.keys(e);
      for (i = 0; i < s.length; i++) (t = s[i]), n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     for (i = 0; i < s.length; i++) (t = s[i]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
    }
    return a;
   }
   var l = i.createContext({}),
    m = function (e) {
     var n = i.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : r(r({}, n), e)), t;
    },
    d = function (e) {
     var n = m(e.components);
     return i.createElement(l.Provider, { value: n }, e.children);
    },
    g = "mdxType",
    k = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return i.createElement(i.Fragment, {}, n);
     },
    },
    p = i.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      s = e.originalType,
      l = e.parentName,
      d = o(e, ["components", "mdxType", "originalType", "parentName"]),
      g = m(t),
      p = a,
      u = g["".concat(l, ".").concat(p)] || g[p] || k[p] || s;
     return t ? i.createElement(u, r(r({ ref: n }, d), {}, { components: t })) : i.createElement(u, r({ ref: n }, d));
    });
   function u(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var s = t.length,
      r = new Array(s);
     r[0] = p;
     var o = {};
     for (var l in n) hasOwnProperty.call(n, l) && (o[l] = n[l]);
     (o.originalType = e), (o[g] = "string" == typeof e ? e : a), (r[1] = o);
     for (var m = 2; m < s; m++) r[m] = t[m];
     return i.createElement.apply(null, r);
    }
    return i.createElement.apply(null, t);
   }
   p.displayName = "MDXCreateElement";
  },
  69375: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => r, default: () => k, frontMatter: () => s, metadata: () => o, toc: () => m });
   var i = t(87462),
    a = (t(67294), t(3905));
   const s = { title: "NL Design System in 2021", slug: "nl-design-system-in-2021", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/12/2021.jpeg", hide_table_of_contents: !1, date: new Date("2021-12-23T00:00:00.000Z") },
    r = void 0,
    o = {
     permalink: "/blog/nl-design-system-in-2021",
     source: "@site/blog/2021/20211223-nl-design-system-in-2021.md",
     title: "NL Design System in 2021",
     description: "Het was weer een bijzonder jaar. Zeker ook voor NL Design System. En we zijn blij dat we zoveel hebben kunnen bereiken en trots op de mooie resultaten die we hebben geboekt. We blikken graag terug op het afgelopen jaar.",
     date: "2021-12-23T00:00:00.000Z",
     formattedDate: "23 december 2021",
     tags: [
      { label: "Figma", permalink: "/blog/tags/figma" },
      { label: "NL design system", permalink: "/blog/tags/nl-design-system" },
     ],
     hasTruncateMarker: !0,
     authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }],
     frontMatter: { title: "NL Design System in 2021", slug: "nl-design-system-in-2021", authors: [{ name: "Jessica Straetemans", title: "Co\xf6rdinator Communicatie bij Gebruiker Centraal", url: "https://www.linkedin.com/in/jessicastraetemans/" }], tags: ["Figma", "NL design system"], image: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/12/2021.jpeg", hide_table_of_contents: !1, date: "2021-12-23T00:00:00.000Z" },
     prevItem: { title: "Bryan de Jong vertelt over zijn ervaring met het NL Design System", permalink: "/blog/bryan-de-jong-vertelt-over-zijn-ervaring-met-het-nl-design-system" },
     nextItem: { title: "Over Figma als keuze voor het NL Design System", permalink: "/blog/over-figma-als-keuze-voor-het-nl-design-system" },
    },
    l = { authorsImageUrls: [void 0] },
    m = [
     { value: "Kernteam", id: "kernteam", level: 2 },
     { value: "Community", id: "community", level: 2 },
     { value: "Kennismakingen met teams", id: "kennismakingen-met-teams", level: 2 },
     { value: "Kennis uitwisselen met design system-teams", id: "kennis-uitwisselen-met-design-system-teams", level: 2 },
     { value: "Slack", id: "slack", level: 2 },
     { value: "NL Design System heartbeat", id: "nl-design-system-heartbeat", level: 2 },
     { value: "Interactieve werksessies", id: "interactieve-werksessies", level: 2 },
     { value: "E-mail nieuwsbrief", id: "e-mail-nieuwsbrief", level: 2 },
     { value: "\u2019The GIT sessions\u2019", id: "the-git-sessions", level: 2 },
     { value: "\u2018The Figma sessions\u2019", id: "the-figma-sessions", level: 2 },
     { value: "Sprint refinements", id: "sprint-refinements", level: 2 },
     { value: "Code reviews", id: "code-reviews", level: 2 },
     { value: "Kruisbestuiving", id: "kruisbestuiving", level: 2 },
     { value: "Onboardingweek", id: "onboardingweek", level: 2 },
     { value: "Webinar \u2018Toegankelijkheid en het NL Design System\u2019", id: "webinar-toegankelijkheid-en-het-nl-design-system", level: 2 },
     { value: "Storybook template", id: "storybook-template", level: 2 },
     { value: "Storybook met thema\u2019s", id: "storybook-met-themas", level: 2 },
     { value: "Gedeelde design tokens", id: "gedeelde-design-tokens", level: 2 },
     { value: "Componenten in Storybook", id: "componenten-in-storybook", level: 2 },
     { value: "Componenten in Figma", id: "componenten-in-figma", level: 2 },
     { value: "Support in Slack", id: "support-in-slack", level: 2 },
     { value: "Documentatie en code schrijven", id: "documentatie-en-code-schrijven", level: 2 },
     { value: "Vragen of suggesties?", id: "vragen-of-suggesties", level: 2 },
    ],
    d = { toc: m },
    g = "wrapper";
   function k(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(g, (0, i.Z)({}, d, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("p", null, "Het was weer een bijzonder jaar. Zeker ook voor NL Design System. En we zijn blij dat we zoveel hebben kunnen bereiken en trots op de mooie resultaten die we hebben geboekt. We blikken graag terug op het afgelopen jaar."), (0, a.kt)("h2", { id: "kernteam" }, "Kernteam"), (0, a.kt)("p", null, "Het kernteam bestaat uit Angela, Robbert, Yolijn en Rogier. We werken al sinds herfst 2019 met elkaar samen. Funfact: we hebben elkaar steeds niet gezien in real life!"), (0, a.kt)("h2", { id: "community" }, "Community"), (0, a.kt)("p", null, "We doen het gelukkig niet alleen. Grote bergen werk zijn verzet door teams bij de gemeente Den Haag, Utrecht en Logius, en door alle deelnemers van werksessies, en deelnemers aan de Onboardingweek."), (0, a.kt)("h2", { id: "kennismakingen-met-teams" }, "Kennismakingen met teams"), (0, a.kt)("p", null, "Afgelopen jaar hebben we vele tientallen ontmoetingen gehad met teams die willen weten hoe NL Design System kan helpen bij hun projecten. En hoe zij NL Design System verder kunnen helpen."), (0, a.kt)("h2", { id: "kennis-uitwisselen-met-design-system-teams" }, "Kennis uitwisselen met design system-teams"), (0, a.kt)("p", null, "We hebben gesproken met diverse design system-teams bij overheden en in het bedrijfsleven, om te leren van elkaar over hoe je een design system effectief laat landen in een organisatie."), (0, a.kt)("h2", { id: "slack" }, "Slack"), (0, a.kt)("p", null, "In 2021 meer dan 200 nieuwe leden bij #nl-design-system, nu bijna 450 ge\xefnteresseerden!"), (0, a.kt)("p", null, (0, a.kt)("img", { parentName: "p", src: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/12/Schermafbeelding-2021-12-23-om-13.59.06-2048x740.png", alt: "Screenshot van Slack #nl-design-system" })), (0, a.kt)("h2", { id: "nl-design-system-heartbeat" }, "NL Design System heartbeat"), (0, a.kt)("p", null, "In 2021 vonden elke 2 weken \u2018heartbeats\u2019 (in totaal 24 keer) plaats. Een (online) bijeenkomst waarin het kernteam de voortgang presenteerde en er gelegenheid voor vragen was."), (0, a.kt)("h2", { id: "interactieve-werksessies" }, "Interactieve werksessies"), (0, a.kt)("p", null, "In de eerste helft van het jaar hebben we 3 keer een interactieve werksessie georganiseerd, met vele tientallen deelnemers. Heel veel dank dat jullie erbij waren en hebben geholpen de kennis samen te brengen, onder andere over goede formulieren."), (0, a.kt)("h2", { id: "e-mail-nieuwsbrief" }, "E-mail nieuwsbrief"), (0, a.kt)("p", null, "Voor iedereen die op zijn eigen tijd wilt meelezen, gaat elke 2 weken de nieuwsbrief eruit. Je kunt je voor de nieuwsbrief aanmelden als je dat nog niet gedaan hebt."), (0, a.kt)("h2", { id: "the-git-sessions" }, "\u2019The GIT sessions\u2019"), (0, a.kt)("p", null, "Afgelopen jaar elk vrijdag vaste prik: samenwerken met Utrecht aan nieuwe componenten voor het Utrecht Design System die gebouwd worden met de NL Design System-architectuur."), (0, a.kt)("h2", { id: "the-figma-sessions" }, "\u2018The Figma sessions\u2019"), (0, a.kt)("p", null, "Afgelopen jaar wekelijks vaste prik: samenwerken met designers van Utrecht, Den Haag en Mijn Overheid om bouwblokken en design tokens te bouwen die herbruikbaar zijn voor iedereen."), (0, a.kt)("h2", { id: "sprint-refinements" }, "Sprint refinements"), (0, a.kt)("p", null, "Het kernteam heeft tijdens \u2018sprint refinements\u2019 van de gemeente Den Haag regelmatig mee kunnen denken over hoe componenten aangepakt kunnen worden, op toegankelijke en herbruikbare wijze."), (0, a.kt)("h2", { id: "code-reviews" }, "Code reviews"), (0, a.kt)("p", null, "Wanneer mogelijk keken (en kijken) we mee met de ontwikkelingen in de community, en helpen we om nieuwe componenten in te zetten bij andere organisaties."), (0, a.kt)("h2", { id: "kruisbestuiving" }, "Kruisbestuiving"), (0, a.kt)("p", null, "Dankzij de fantastische inzet van diverse teams worden steeds meer componenten van de ene organisatie ingezet bij diensten van een andere organisatie. Weer een stap dichterbij een centrale NL Design System-verzameling!"), (0, a.kt)("h2", { id: "onboardingweek" }, "Onboardingweek"), (0, a.kt)("p", null, "Begin november hebben we een week lang workshops voor product owners, developers en designers gegeven hoe je aan de slag kan met NL Design Systems."), (0, a.kt)("h2", { id: "webinar-toegankelijkheid-en-het-nl-design-system" }, "Webinar \u2018Toegankelijkheid en het NL Design System\u2019"), (0, a.kt)("p", null, "De gasten in de studio voor het webinar 'Toegankelijkheid en het NL Design System'\nOp dinsdag 22 juni vond het webinar plaats over toegankelijkheid en het NL Design System. Gespreksleider Peter van Grieken, adviseur digitale toegankelijkheid, ging in gesprek met 3 gasten aan tafel: onze Robbert, toegankelijkheidsexpert Jules Ernst en UX designer Rozerin Ayerdem van de gemeente Den Haag."), (0, a.kt)("p", null, "Wil je het ", (0, a.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/blog/terugblik-op-webinar-toegankelijkheid-en-het-nl-design-system/" }, "webinar terugkijken"), "? Of wil je de vragen en antwoorden uit de chat lezen? Je vindt alles op deze pagina. Inclusief de links die in het webinar en in de chat werden gedeeld en de presentaties."), (0, a.kt)("h2", { id: "storybook-template" }, "Storybook template"), (0, a.kt)("p", null, (0, a.kt)("img", { parentName: "p", src: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/12/Template-2048x1021.png", alt: "Screenshot van voorbeeld van Storybook template repository in GitHub" })), (0, a.kt)("h2", { id: "storybook-met-themas" }, "Storybook met thema\u2019s"), (0, a.kt)("p", null, (0, a.kt)("img", { parentName: "p", src: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/12/Schermafbeelding-2021-12-23-om-14.33.24-1536x537.png", alt: "Screenshot van Storybook met thema's, met componenten voor Nijmegen als voorbeeld" })), (0, a.kt)("h2", { id: "gedeelde-design-tokens" }, "Gedeelde design tokens"), (0, a.kt)("p", null, (0, a.kt)("img", { parentName: "p", src: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/12/Schermafbeelding-2021-12-23-om-14.34.57-1536x1061.png", alt: "Screenshot van design token JSON bestanden in GitHub, van Den Haag, Utrecht en Mijn Overheid" })), (0, a.kt)("h2", { id: "componenten-in-storybook" }, "Componenten in Storybook"), (0, a.kt)("p", null, (0, a.kt)("img", { parentName: "p", src: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/12/Schermafbeelding-2021-12-23-om-14.38.32.png", alt: "Screenshot collage van navigatie in Storybook met vele tientallen componenten" })), (0, a.kt)("h2", { id: "componenten-in-figma" }, "Componenten in Figma"), (0, a.kt)("p", null, (0, a.kt)("img", { parentName: "p", src: "https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/12/Schermafbeelding-2021-12-23-om-14.40.53-1425x600.png", alt: "Screenshot van Figma met design system bestanden van Gemeente Utrecht en Gemeente Den Haag" })), (0, a.kt)("h2", { id: "support-in-slack" }, "Support in Slack"), (0, a.kt)("p", null, "Afgelopen jaar hebben we in Slack honderden vragen beantwoord via direct messages in chat en via videobellen, zodat ontwikkelingen zonder problemen door kunnen."), (0, a.kt)("h2", { id: "documentatie-en-code-schrijven" }, "Documentatie en code schrijven"), (0, a.kt)("p", null, "Afgelopen jaar hebben zijn er honderden \u2018pull requests\u2019 voorbij gekomen zijn er meer dan 2.000 \u2018commits\u2019 gedaan bij NL Design System repositories."), (0, a.kt)("h2", { id: "vragen-of-suggesties" }, "Vragen of suggesties?"), (0, a.kt)("p", null, "Wil je meer informatie over het NL Design System of graag meedoen? Of heb je idee\xebn voor volgend jaar? Neem contact met ons op via ons ", (0, a.kt)("a", { parentName: "p", href: "https://praatmee.codefor.nl" }, "Slackkanaal"), "."), (0, a.kt)("p", null, "Fijne feestdagen!\nDan rest ons niets dan je hele fijne feestdagen te wensen. We kijken uit naar samenwerking in 2022!"), (0, a.kt)("p", null, "Het kernteam,\nAngela, Robbert, Yolijn & Rogier"));
   }
   k.isMDXComponent = !0;
  },
 },
]);
