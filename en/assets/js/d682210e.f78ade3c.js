"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1421],
 {
  3905: (e, t, s) => {
   s.d(t, { Zo: () => m, kt: () => u });
   var n = s(67294);
   function a(e, t, s) {
    return t in e ? Object.defineProperty(e, t, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = s), e;
   }
   function i(e, t) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      s.push.apply(s, n);
    }
    return s;
   }
   function r(e) {
    for (var t = 1; t < arguments.length; t++) {
     var s = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(s), !0).forEach(function (t) {
         a(e, t, s[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
      : i(Object(s)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var s,
     n,
     a = (function (e, t) {
      if (null == e) return {};
      var s,
       n,
       a = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (s = i[n]), t.indexOf(s) >= 0 || (a[s] = e[s]);
      return a;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (s = i[n]), t.indexOf(s) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, s) && (a[s] = e[s]));
    }
    return a;
   }
   var o = n.createContext({}),
    c = function (e) {
     var t = n.useContext(o),
      s = t;
     return e && (s = "function" == typeof e ? e(t) : r(r({}, t), e)), s;
    },
    m = function (e) {
     var t = c(e.components);
     return n.createElement(o.Provider, { value: t }, e.children);
    },
    d = "mdxType",
    g = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return n.createElement(n.Fragment, {}, t);
     },
    },
    p = n.forwardRef(function (e, t) {
     var s = e.components,
      a = e.mdxType,
      i = e.originalType,
      o = e.parentName,
      m = l(e, ["components", "mdxType", "originalType", "parentName"]),
      d = c(s),
      p = a,
      u = d["".concat(o, ".").concat(p)] || d[p] || g[p] || i;
     return s ? n.createElement(u, r(r({ ref: t }, m), {}, { components: s })) : n.createElement(u, r({ ref: t }, m));
    });
   function u(e, t) {
    var s = arguments,
     a = t && t.mdxType;
    if ("string" == typeof e || a) {
     var i = s.length,
      r = new Array(i);
     r[0] = p;
     var l = {};
     for (var o in t) hasOwnProperty.call(t, o) && (l[o] = t[o]);
     (l.originalType = e), (l[d] = "string" == typeof e ? e : a), (r[1] = l);
     for (var c = 2; c < i; c++) r[c] = s[c];
     return n.createElement.apply(null, r);
    }
    return n.createElement.apply(null, s);
   }
   p.displayName = "MDXCreateElement";
  },
  8861: (e, t, s) => {
   s.d(t, { Z: () => n });
   var n = (0, s(30853).Z)("user", "IconUser", [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
   ]);
  },
  75041: (e, t, s) => {
   s.d(t, { L: () => d });
   var n = s(87462),
    a = s(67294),
    i = s(86010);
   const r = { "session-table": "session-table_UjSe", "session-table__row": "session-table__row_Q8zO", "session-table__time": "session-table__time_X4_g", "session-table__speakers": "session-table__speakers_zhez", "session-table__speaker": "session-table__speaker_Ghbm", speaker__icon: "speaker__icon_kFX7", speaker__organisation: "speaker__organisation_bGt9" };
   var l = s(65663),
    o = s(8861),
    c = (0, s(30853).Z)("calendar-check", "IconCalendarCheck", [
     ["path", { d: "M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6", key: "svg-0" }],
     ["path", { d: "M16 3v4", key: "svg-1" }],
     ["path", { d: "M8 3v4", key: "svg-2" }],
     ["path", { d: "M4 11h16", key: "svg-3" }],
     ["path", { d: "M15 19l2 2l4 -4", key: "svg-4" }],
    ]);
   const m = (e) => {
     let { name: t, organisation: s } = e;
     return a.createElement(l.nv, { className: (0, i.Z)(r["session-table__speaker"], r.speaker) }, a.createElement(l.JO, { role: "presentational", className: r.speaker__icon }, a.createElement(o.Z, null)), a.createElement("span", { className: (0, i.Z)(r.speaker__name) }, t), a.createElement("br", null), a.createElement("span", { className: (0, i.Z)(r.speaker__organisation) }, s));
    },
    d = (e) => {
     let { lang: t, sessions: s, className: o, ...d } = e;
     return a.createElement(
      l.iA,
      (0, n.Z)({ className: (0, i.Z)(r["session-table"], o) }, d),
      a.createElement(l.xD, null, a.createElement(l.SC, { className: (0, i.Z)(r["session-table__row"]) }, a.createElement(l.xs, null, "nl-NL" === t ? "Tijd" : "Time"), a.createElement(l.xs, null, "nl-NL" === t ? "Spreker" : "Speaker"), a.createElement(l.xs, null, "nl-NL" === t ? "Onderwerp" : "Subject"), "nl-NL" === t && a.createElement(l.xs, null, "Taal"), a.createElement(l.xs, null, "nl-NL" === t ? "Agenda" : "Calendar"))),
      a.createElement(
       l.RM,
       null,
       s.map((e) => {
        let { isoDateTime: s, speakers: n, subject: o, singupLink: d, icalLink: g, language: p } = e;
        return a.createElement(
         l.SC,
         { className: (0, i.Z)(r["session-table__row"]) },
         a.createElement(l.pj, { className: (0, i.Z)(r["session-table__time"]) }, a.createElement(l.nv, null, a.createElement("time", { dateTime: s }, new Intl.DateTimeFormat(t, { hour: "numeric", minute: "numeric", timeZone: "Europe/Amsterdam", timeZoneName: "nl-NL" !== t ? "short" : void 0 }).format(new Date(s))))),
         a.createElement(
          l.pj,
          null,
          a.createElement(
           "div",
           { className: (0, i.Z)(r["session-table__speakers"]) },
           n.map((e) => a.createElement(m, e))
          )
         ),
         a.createElement(l.pj, { className: (0, i.Z)(r["session-table__subject"]) }, a.createElement(l.nv, null, a.createElement(l.rU, { href: d }, o))),
         "nl-NL" === t && a.createElement(l.pj, { className: (0, i.Z)(r["session-table__language"]) }, a.createElement("abbr", { title: p.description }, p.abbr)),
         a.createElement(l.pj, { className: (0, i.Z)(r["session-table__time"]) }, g && a.createElement(l.rU, { href: g, download: g }, a.createElement(l.JO, { "aria-label": "Download uitnodiging" }, a.createElement(c, null)), " ", "iCal"))
        );
       })
      )
     );
    };
  },
  10920: (e, t, s) => {
   s.r(t), s.d(t, { assets: () => m, contentTitle: () => o, default: () => u, frontMatter: () => l, metadata: () => c, toc: () => d });
   var n = s(87462),
    a = (s(67294), s(3905)),
    i = s(65663),
    r = s(75041);
   const l = { title: "Timetable", description: "Timetable for all English talks of the Design Systems Week 2023", hide_table_of_contents: !0, hide_title: !0, sidebar_label: "Timetable", pagination_label: "Timetable", slug: "/events/design-systems-week-2023/en/timetable" },
    o = void 0,
    c = { unversionedId: "project/events/design-systems-week-2023/english/timetable", id: "project/events/design-systems-week-2023/english/timetable", title: "Timetable", description: "Timetable for all English talks of the Design Systems Week 2023", source: "@site/docs/project/events/design-systems-week-2023/english/2-timetable.md", sourceDirName: "project/events/design-systems-week-2023/english", slug: "/events/design-systems-week-2023/en/timetable", permalink: "/en/events/design-systems-week-2023/en/timetable", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/project/events/design-systems-week-2023/english/2-timetable.md", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Timetable", description: "Timetable for all English talks of the Design Systems Week 2023", hide_table_of_contents: !0, hide_title: !0, sidebar_label: "Timetable", pagination_label: "Timetable", slug: "/events/design-systems-week-2023/en/timetable" }, sidebar: "project", previous: { title: "Program", permalink: "/en/events/design-systems-week-2023/en/program" }, next: { title: "Design Systems Week 2022", permalink: "/en/events/design-systems-week-2022" } },
    m = {},
    d = [
     { value: "Monday October 2th", id: "monday-october-2th", level: 2 },
     { value: "Wednesday October 4rd", id: "wednesday-october-4rd", level: 2 },
     { value: "Thursday October 5th", id: "thursday-october-5th", level: 2 },
     { value: "Organisation", id: "organisation", level: 2 },
     { value: "Code of Conduct", id: "code-of-conduct", level: 2 },
    ],
    g = { toc: d },
    p = "wrapper";
   function u(e) {
    let { components: t, ...s } = e;
    return (0, a.kt)(
     p,
     (0, n.Z)({}, g, s, { components: t, mdxType: "MDXLayout" }),
     (0, a.kt)(
      "div",
      { lang: "en" },
      (0, a.kt)("h1", { id: "design-systems-week-timetable" }, "Design Systems Week Timetable"),
      (0, a.kt)(i.nv, { lead: !0, mdxType: "Paragraph" }, "From 2 to 5 October NL Design System organises the third edition of Design Systems Week. Speakers from various organisations will join us for short talks about the how and why of design systems. This year there will be talks both in Dutch and English. For convenience we also have a ", (0, a.kt)(i.rU, { href: "/events/design-systems-week-2023/en/program", mdxType: "Link" }, "program of all talks that will be in English"), "."),
      (0, a.kt)(i.nv, { mdxType: "Paragraph" }, "All sessions can be joined online for free. You will receive a link after sign-up. This link is valid for all talks during the week. Each talk will take about 30 minutes, including time for questions."),
      (0, a.kt)(i.nv, { mdxType: "Paragraph" }, "These are all timeslots with talks in English, ", (0, a.kt)(i.rU, { href: "/events/design-systems-week-2023/tijdschema", hrefLang: "nl-NL", mdxType: "Link" }, "the Dutch timetable"), " shows the complete Design Systems Week 2023 timetable."),
      (0, a.kt)("h2", { id: "monday-october-2th" }, "Monday October 2th"),
      (0, a.kt)(r.L, {
       lang: "en-EN",
       sessions: [
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
      (0, a.kt)("h2", { id: "wednesday-october-4rd" }, "Wednesday October 4rd"),
      (0, a.kt)(r.L, {
       lang: "en-EN",
       sessions: [
        { isoDateTime: "2023-10-04T09:00:00.000Z", speakers: [{ name: "Mu-An Chiou", organisation: "Taiwan Design System" }], subject: "Design systems as public infrastructure", singupLink: "https://www.gebruikercentraal.nl/agenda/design-systems-as-public-infrastructure", icalLink: "/dsweek-2023/design-systems-as-public-infrastructure.ics", language: { abbr: "EN", description: "English" } },
        { isoDateTime: "2023-10-04T11:00:00.000Z", speakers: [{ name: "Joe Lanman", organisation: "GOV.UK " }], subject: "GOV.UK Prototype Kit", singupLink: "https://www.gebruikercentraal.nl/agenda/the-gov-uk-prototype-kit/", icalLink: "/dsweek-2023/the-gov-uk-prototype-kit.ics", language: { abbr: "EN", description: "English" } },
        { isoDateTime: "2023-10-04T13:00:00.000Z", speakers: [{ name: "Aleksandr Beliaev", organisation: "Estland Design System" }], subject: "Estonia Design System", singupLink: "https://www.gebruikercentraal.nl/agenda/estland-design-system/", icalLink: "/dsweek-2023/estonia-design-system.ics", language: { abbr: "EN", description: "English" } },
       ],
       mdxType: "SessionTable",
      }),
      (0, a.kt)("h2", { id: "thursday-october-5th" }, "Thursday October 5th"),
      (0, a.kt)(r.L, {
       lang: "en-EN",
       sessions: [
        { isoDateTime: "2023-10-05T11:00:00.000Z", speakers: [{ name: "David Darnes", organisation: "Nord Health " }], subject: "Design Systems & Web Components: what works & what doesn\u2019t", singupLink: "https://www.gebruikercentraal.nl/agenda/design-systems-web-components-what-works-what-doesnt/", icalLink: "/dsweek-2023/design-systems-and-web-components.ics", language: { abbr: "EN", description: "English" } },
        { isoDateTime: "2023-10-05T13:00:00.000Z", speakers: [{ name: "Inayaili L\xe9on", organisation: "GitHub" }], subject: "DesignOps: designing the API of design teams", singupLink: "https://www.gebruikercentraal.nl/agenda/designops-designing-the-api-of-design-teams/", icalLink: "/dsweek-2023/designing-the-api-of-design-teams.ics", language: { abbr: "EN", description: "English" } },
       ],
       mdxType: "SessionTable",
      })
     ),
     (0, a.kt)("h2", { id: "organisation" }, "Organisation"),
     (0, a.kt)("p", null, "Design Systems Week is organised by the NL Design System core team, thanks to the support of the Ministry of the Interior and Kingdom Relations (BZK) and ", (0, a.kt)(i.rU, { href: "https://international.gebruikercentraal.nl", mdxType: "Link" }, "User Needs First"), ". All sessions can also be found there ", (0, a.kt)(i.rU, { href: "https://international.gebruikercentraal.nl/design-systems-week-2023/", mdxType: "Link" }, "Design Systems Week 2023")),
     (0, a.kt)("h2", { id: "code-of-conduct" }, "Code of Conduct"),
     (0, a.kt)("p", null, "All participants of Design Systems Week are expected to abide by our ", (0, a.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.md" }, "NL Design System Code of Conduct"), ". By signing up for one or more sessions you've agreed to these terms.")
    );
   }
   u.isMDXComponent = !0;
  },
 },
]);
