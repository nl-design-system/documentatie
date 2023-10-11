"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8737],
 {
  8861: (e, s, n) => {
   n.d(s, { Z: () => a });
   var a = (0, n(30853).Z)("user", "IconUser", [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
   ]);
  },
  75041: (e, s, n) => {
   n.d(s, { L: () => m });
   var a = n(87462),
    t = n(67294),
    i = n(86010);
   const r = { "session-table": "session-table_UjSe", "session-table__row": "session-table__row_Q8zO", "session-table__time": "session-table__time_X4_g", "session-table__speakers": "session-table__speakers_zhez", "session-table__speaker": "session-table__speaker_Ghbm", speaker__icon: "speaker__icon_kFX7", speaker__organisation: "speaker__organisation_bGt9" };
   var o = n(65663),
    l = n(8861),
    d = (0, n(30853).Z)("calendar-check", "IconCalendarCheck", [
     ["path", { d: "M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6", key: "svg-0" }],
     ["path", { d: "M16 3v4", key: "svg-1" }],
     ["path", { d: "M8 3v4", key: "svg-2" }],
     ["path", { d: "M4 11h16", key: "svg-3" }],
     ["path", { d: "M15 19l2 2l4 -4", key: "svg-4" }],
    ]);
   const g = (e) => {
     let { name: s, organisation: n } = e;
     return t.createElement(o.nv, { className: (0, i.Z)(r["session-table__speaker"], r.speaker) }, t.createElement(o.JO, { role: "presentational", className: r.speaker__icon }, t.createElement(l.Z, null)), t.createElement("span", { className: (0, i.Z)(r.speaker__name) }, s), t.createElement("br", null), t.createElement("span", { className: (0, i.Z)(r.speaker__organisation) }, n));
    },
    m = (e) => {
     let { lang: s, sessions: n, className: l, ...m } = e;
     return t.createElement(
      o.iA,
      (0, a.Z)({ className: (0, i.Z)(r["session-table"], l) }, m),
      t.createElement(o.xD, null, t.createElement(o.SC, { className: (0, i.Z)(r["session-table__row"]) }, t.createElement(o.xs, null, "nl-NL" === s ? "Tijd" : "Time"), t.createElement(o.xs, null, "nl-NL" === s ? "Spreker" : "Speaker"), t.createElement(o.xs, null, "nl-NL" === s ? "Onderwerp" : "Subject"), "nl-NL" === s && t.createElement(o.xs, null, "Taal"), t.createElement(o.xs, null, "nl-NL" === s ? "Agenda" : "Calendar"))),
      t.createElement(
       o.RM,
       null,
       n.map((e) => {
        let { isoDateTime: n, speakers: a, subject: l, singupLink: m, icalLink: k, language: c } = e;
        return t.createElement(
         o.SC,
         { className: (0, i.Z)(r["session-table__row"]) },
         t.createElement(o.pj, { className: (0, i.Z)(r["session-table__time"]) }, t.createElement(o.nv, null, t.createElement("time", { dateTime: n }, new Intl.DateTimeFormat(s, { hour: "numeric", minute: "numeric", timeZone: "Europe/Amsterdam", timeZoneName: "nl-NL" !== s ? "short" : void 0 }).format(new Date(n))))),
         t.createElement(
          o.pj,
          null,
          t.createElement(
           "div",
           { className: (0, i.Z)(r["session-table__speakers"]) },
           a.map((e) => t.createElement(g, e))
          )
         ),
         t.createElement(o.pj, { className: (0, i.Z)(r["session-table__subject"]) }, t.createElement(o.nv, null, t.createElement(o.rU, { href: m }, l))),
         "nl-NL" === s && t.createElement(o.pj, { className: (0, i.Z)(r["session-table__language"]) }, t.createElement("abbr", { title: c.description }, c.abbr)),
         t.createElement(o.pj, { className: (0, i.Z)(r["session-table__time"]) }, k && t.createElement(o.rU, { href: k, download: k }, t.createElement(o.JO, { "aria-label": "Download uitnodiging" }, t.createElement(d, null)), " ", "iCal"))
        );
       })
      )
     );
    };
  },
  57397: (e, s, n) => {
   n.r(s), n.d(s, { assets: () => g, contentTitle: () => l, default: () => p, frontMatter: () => o, metadata: () => d, toc: () => m });
   var a = n(87462),
    t = (n(67294), n(3905)),
    i = n(53579),
    r = n(75041);
   const o = { title: "Tijdschema", description: "Tijdschema per dag voor de Design Systems Week 2023", hide_table_of_contents: !0, sidebar_label: "Tijdschema", pagination_label: "Tijdschema", slug: "/events/design-systems-week-2023/tijdschema" },
    l = "Design Systems Week Tijdschema",
    d = { unversionedId: "project/events/design-systems-week-2023/tijdschema-per-dag", id: "project/events/design-systems-week-2023/tijdschema-per-dag", title: "Tijdschema", description: "Tijdschema per dag voor de Design Systems Week 2023", source: "@site/docs/project/events/design-systems-week-2023/2-tijdschema-per-dag.md", sourceDirName: "project/events/design-systems-week-2023", slug: "/events/design-systems-week-2023/tijdschema", permalink: "/en/events/design-systems-week-2023/tijdschema", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/project/events/design-systems-week-2023/2-tijdschema-per-dag.md", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Tijdschema", description: "Tijdschema per dag voor de Design Systems Week 2023", hide_table_of_contents: !0, sidebar_label: "Tijdschema", pagination_label: "Tijdschema", slug: "/events/design-systems-week-2023/tijdschema" }, sidebar: "project", previous: { title: "Programma", permalink: "/en/events/design-systems-week-2023/programma" }, next: { title: "English only", permalink: "/en/events/design-systems-week-2023/en/overview" } },
    g = {},
    m = [
     { value: "maandag 2 oktober", id: "maandag-2-oktober", level: 2 },
     { value: "dinsdag 3 oktober", id: "dinsdag-3-oktober", level: 2 },
     { value: "woensdag 4 oktober", id: "woensdag-4-oktober", level: 2 },
     { value: "donderdag 5 oktober", id: "donderdag-5-oktober", level: 2 },
     { value: "Organisatie", id: "organisatie", level: 2 },
     { value: "Code of Conduct", id: "code-of-conduct", level: 2 },
     { value: "Toegankelijkheid", id: "toegankelijkheid", level: 2 },
    ],
    k = { toc: m },
    c = "wrapper";
   function p(e) {
    let { components: s, ...n } = e;
    return (0, t.kt)(
     c,
     (0, a.Z)({}, k, n, { components: s, mdxType: "MDXLayout" }),
     (0, t.kt)("h1", { id: "design-systems-week-tijdschema" }, "Design Systems Week Tijdschema"),
     (0, t.kt)("p", null, "NL Design System organiseert dit jaar voor de 3e keer de Design Systems Week. Van ", (0, t.kt)("strong", { parentName: "p" }, "2 tot 5 oktober"), " zijn er dagelijks meerdere korte sessies van diverse organisaties over het ", (0, t.kt)("strong", { parentName: "p" }, "hoe en waarom van design systems"), "."),
     (0, t.kt)("p", null, "Dit jaar hebben we nationale \xe9n internationale sprekers. We laten ons inspireren door andere design systems en horen waarom organisaties in een design system investeren. Vanuit verschillende perspectieven leren we hoe design systems bijdragen aan toegankelijkheid en gaan we technisch de diepte in met design tokens en web components."),
     (0, t.kt)("p", null, "Kijk of luister je mee? Alle sessies zijn gratis online bij te wonen en duren ongeveer 30 minuten. ", (0, t.kt)("a", { parentName: "p", href: "https://www.gebruikercentraal.nl/agenda/design-systems-week-2023/#event-booking" }, "Meld je aan"), " voor de hele week of voor losse sessies. Na aanmelding ontvang je een link die voor alle sessies van de week gebruikt wordt."),
     (0, t.kt)("h2", { id: "maandag-2-oktober" }, "maandag 2 oktober"),
     (0, t.kt)(r.L, {
      lang: "nl-NL",
      sessions: [
       { isoDateTime: "2023-10-02T09:00:00.000Z", speakers: [{ name: "Peter Berrevoets", organisation: "NL Design System" }], subject: "Toegankelijkheid verzekeren met NL Design System", singupLink: "https://www.gebruikercentraal.nl/agenda/toegankelijkheid-verzekeren-met-nl-design-system/", icalLink: "/dsweek-2023/toegankelijkheid-verzekeren-met-nl-design-system.ics", language: { abbr: "NL", description: "Nederlands" } },
       { isoDateTime: "2023-10-02T11:00:00.000Z", speakers: [{ name: "Martijn Rietveld", organisation: "OpenGemeenten" }], subject: "Waarom wij als leverancier werken met NL Design System", singupLink: "https://www.gebruikercentraal.nl/agenda/waarom-wij-als-leverancier-werken-met-nl-design-system/", icalLink: "/dsweek-2023/waarom-wij-als-leverancier-werken-met-nl-design-system.ics", language: { abbr: "NL", description: "Nederlands" } },
       { isoDateTime: "2023-10-02T13:00:00.000Z", speakers: [{ name: "Jeffrey Lauwers", organisation: "NL Design System" }], subject: "Design Tokens - onze componenten jouw huisstijl", singupLink: "https://www.gebruikercentraal.nl/agenda/onze-componenten-jouw-huisstijl-over-design-tokens/", icalLink: "/dsweek-2023/onze-componenten-jouw-huisstijl.ics", language: { abbr: "NL", description: "Nederlands" } },
       {
        isoDateTime: "2023-10-02T14:30:00.000Z",
        speakers: [
         { name: "Marco-Christian Krenn", organisation: "Token Studio" },
         { name: "Jan Six", organisation: "GitHub" },
        ],
        subject: "The future of design decisions",
        singupLink: "https://www.gebruikercentraal.nl/agenda/the-future-of-design-decisions/",
        icalLink: "/dsweek-2023/the-future-of-design-decisions.ics",
        language: { abbr: "EN", description: "English" },
       },
      ],
      mdxType: "SessionTable",
     }),
     (0, t.kt)("h2", { id: "dinsdag-3-oktober" }, "dinsdag 3 oktober"),
     (0, t.kt)(r.L, {
      lang: "nl-NL",
      sessions: [
       { isoDateTime: "2023-10-03T09:00:00.000Z", speakers: [{ name: "Arash Azizi", organisation: "PostNL" }], subject: "Design system laten meegroeien met je organisatie", singupLink: "https://www.gebruikercentraal.nl/agenda/design-system-laten-meegroeien-met-je-organisatie/", icalLink: "/dsweek-2023/design-system-laten-meegroeien.ics", language: { abbr: "NL", description: "Nederlands" } },
       { isoDateTime: "2023-10-03T11:00:00.000Z", speakers: [{ name: "Community", organisation: "NL Design System" }], subject: "Heartbeat NL Design System", singupLink: "https://www.gebruikercentraal.nl/agenda/update-heartbeat-van-het-nl-design-system-3/", language: { abbr: "NL", description: "Nederlands" } },
       {
        isoDateTime: "2023-10-03T13:00:00.000Z",
        speakers: [
         { name: "H\xfclya Bozkurt", organisation: "Kamer van Koophandel" },
         { name: "Joshua Grootveld", organisation: "Kamer van Koophandel" },
        ],
        subject: "Trinity: het design system van KvK",
        singupLink: "https://www.gebruikercentraal.nl/agenda/trinity-het-design-system-van-de-kvk/",
        icalLink: "/dsweek-2023/trinity-het-design-system-van-kvk.ics",
        language: { abbr: "NL", description: "Nederlands" },
       },
       {
        isoDateTime: "2023-10-03T14:30:00.000Z",
        speakers: [
         { name: "Hidde de Vries", organisation: "NL Design System" },
         { name: "Robbert Broersma", organisation: "NL Design System" },
        ],
        subject: "Toegankelijke formulieren met NL Design System",
        singupLink: "https://www.gebruikercentraal.nl/agenda/toegankelijke-formulieren-met-nl-design-system/",
        icalLink: "/dsweek-2023/toegan\xadkelijke-formulieren-met-nlds.ics",
        language: { abbr: "NL", description: "Nederlands" },
       },
      ],
      mdxType: "SessionTable",
     }),
     (0, t.kt)("h2", { id: "woensdag-4-oktober" }, "woensdag 4 oktober"),
     (0, t.kt)(r.L, {
      lang: "nl-NL",
      sessions: [
       { isoDateTime: "2023-10-04T09:00:00.000Z", speakers: [{ name: "Mu-An Chiou", organisation: "Taiwan Design System" }], subject: "Design systems as public infrastructure", singupLink: "https://www.gebruikercentraal.nl/agenda/design-systems-as-public-infrastructure", icalLink: "/dsweek-2023/design-systems-as-public-infrastructure.ics", language: { abbr: "EN", description: "English" } },
       { isoDateTime: "2023-10-04T11:00:00.000Z", speakers: [{ name: "Joe Lanman", organisation: "GOV.UK " }], subject: "GOV.UK Prototype Kit", singupLink: "https://www.gebruikercentraal.nl/agenda/the-gov-uk-prototype-kit/", icalLink: "/dsweek-2023/the-gov-uk-prototype-kit.ics", language: { abbr: "EN", description: "English" } },
       { isoDateTime: "2023-10-04T13:00:00.000Z", speakers: [{ name: "Aleksandr Beliaev", organisation: "Estland Design System" }], subject: "Estonia Design System", singupLink: "https://www.gebruikercentraal.nl/agenda/estland-design-system/", icalLink: "/dsweek-2023/estonia-design-system.ics", language: { abbr: "EN", description: "English" } },
      ],
      mdxType: "SessionTable",
     }),
     (0, t.kt)("h2", { id: "donderdag-5-oktober" }, "donderdag 5 oktober"),
     (0, t.kt)(r.L, {
      lang: "nl-NL",
      sessions: [
       { isoDateTime: "2023-10-05T09:00:00.000Z", speakers: [{ name: "Dani\xeblle Rameau", organisation: "Sanoma Learning" }], subject: "Betere toegankelijkheid met een design system", singupLink: "https://www.gebruikercentraal.nl/agenda/betere-toegankelijkheid-met-een-design-system/", icalLink: "/dsweek-2023/betere-toegankelijkheid-met-een-design-system.ics", language: { abbr: "NL", description: "Nederlands" } },
       { isoDateTime: "2023-10-05T11:00:00.000Z", speakers: [{ name: "David Darnes", organisation: "Nord Health " }], subject: "Design Systems & Web Components: what works & what doesn\u2019t", singupLink: "https://www.gebruikercentraal.nl/agenda/design-systems-web-components-what-works-what-doesnt/", icalLink: "/dsweek-2023/design-systems-and-web-components.ics", language: { abbr: "EN", description: "English" } },
       { isoDateTime: "2023-10-05T13:00:00.000Z", speakers: [{ name: "Inayaili L\xe9on", organisation: "GitHub" }], subject: "DesignOps: designing the API of design teams", singupLink: "https://www.gebruikercentraal.nl/agenda/designops-designing-the-api-of-design-teams/", icalLink: "/dsweek-2023/designing-the-api-of-design-teams.ics", language: { abbr: "EN", description: "English" } },
       {
        isoDateTime: "2023-10-05T14:30:00.000Z",
        speakers: [
         { name: "Jeffrey Klardie", organisation: "Gemeente Amsterdam" },
         { name: "Roel Derksen", organisation: "RIVM" },
         { name: "Peter Berrevoets", organisation: "NL Design System" },
        ],
        subject: "Management-panel: ervaringen met NL Design System uit de praktijk",
        singupLink: "https://www.gebruikercentraal.nl/agenda/management-panel-ervaringen-met-nl-design-system-uit-de-praktijk/",
        icalLink: "/dsweek-2023/management-panel.ics",
        language: { abbr: "NL", description: "Nederlands" },
       },
      ],
      mdxType: "SessionTable",
     }),
     (0, t.kt)("h2", { id: "organisatie" }, "Organisatie"),
     (0, t.kt)("p", null, "Design Systems Week wordt georganiseerd door het kernteam van NL Design System, met dank aan het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties en ", (0, t.kt)(i.rU, { href: "https://www.gebruikercentraal.nl", mdxType: "Link" }, "Gebruiker Centraal"), ". Alle sessies zijn ook via Gebruiker Centraal bereikbaar ", (0, t.kt)(i.rU, { href: "https://www.gebruikercentraal.nl/design-systems-week/", mdxType: "Link" }, "Design Systems Week 2023")),
     (0, t.kt)("h2", { id: "code-of-conduct" }, "Code of Conduct"),
     (0, t.kt)("p", null, "Op Design Systems Week is de ", (0, t.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.nl.md" }, "NL Design System Code of Conduct"), " van toepassing. Je gaat daarmee akkoord als je je aanmeldt of spreekt."),
     (0, t.kt)("h2", { id: "toegankelijkheid" }, "Toegankelijkheid"),
     (0, t.kt)("p", null, "We doen ons best Design Systems Week zo toegankelijk als mogelijk te organiseren. Indien je specifieke toegankelijkheidsvragen- of behoeften hebt, schroom niet te mailen met het NL Design System kernteam op ", (0, t.kt)("a", { parentName: "p", href: "mailto:nldesignsystem@gebruikercentraal.nl" }, "nldesignsystem@gebruikercentraal.nl"), ".")
    );
   }
   p.isMDXComponent = !0;
  },
 },
]);
