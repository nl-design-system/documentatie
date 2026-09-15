'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [91832],
 {
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => o });
   var i = t(30758);
   const r = {},
    a = i.createContext(r);
   function s(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(a.Provider, { value: n }, e.children));
   }
  },
  18788(e, n, t) {
   (t.r(n), t.d(n, { assets: () => p, contentTitle: () => l, default: () => h, frontMatter: () => o, metadata: () => i, toc: () => d }));
   const i = JSON.parse('{"id":"project/kwaliteitsaanpak/agile-sprint","title":"Agile sprint","description":"Aanpak voor het voorbereiden van agile sprints voor mensen die de NL Design System kwaliteitsaanpak gebruiken.","source":"@site/docs/project/kwaliteitsaanpak/agile-sprint.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/agile-sprint","permalink":"/project/kwaliteitsaanpak/agile-sprint","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/agile-sprint.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Agile sprint","sidebar_label":"Agile sprint","pagination_label":"Agile sprint","sidebar_position":7,"description":"Aanpak voor het voorbereiden van agile sprints voor mensen die de NL Design System kwaliteitsaanpak gebruiken."},"sidebar":"project","previous":{"title":"Definition of Ready","permalink":"/project/kwaliteitsaanpak/definition-of-ready"},"next":{"title":"Broncodekwaliteit","permalink":"/project/kwaliteitsaanpak/broncodekwaliteit"}}');
   var r = t(86070),
    a = t(18439),
    s = t(66153);
   const o = { title: 'Agile sprint', sidebar_label: 'Agile sprint', pagination_label: 'Agile sprint', sidebar_position: 7, description: 'Aanpak voor het voorbereiden van agile sprints voor mensen die de NL Design System kwaliteitsaanpak gebruiken.' },
    l = 'Agile sprint',
    p = {},
    d = [
     { value: 'Sprint planning in GitHub Projects', id: 'sprint-planning-in-github-projects', level: 2 },
     { value: 'Vertrouwelijke issues', id: 'vertrouwelijke-issues', level: 2 },
     { value: 'Sprint planning', id: 'sprint-planning', level: 2 },
     { value: 'Voorbereiding', id: 'voorbereiding', level: 3 },
     { value: 'Sprint capaciteit', id: 'sprint-capaciteit', level: 3 },
     { value: 'Resultaten opleveren', id: 'resultaten-opleveren', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'agile-sprint', children: 'Agile sprint' }) }), '\n', (0, r.jsx)(s.f, { purpose: 'lead', children: (0, r.jsx)(n.p, { children: 'Elke twee weken wordt een sprint gepland, waar prioriteit wordt gegeven aan werkzaamheden binnen het open source\nproject.' }) }), '\n', (0, r.jsx)(n.h2, { id: 'sprint-planning-in-github-projects', children: 'Sprint planning in GitHub Projects' }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik een GitHub Project om de sprint backlog te maken die issues bevat uit 1 of meerdere repositories. Lees meer over hoe dit werkt in deze blog post: ', (0, r.jsx)(n.a, { href: 'https://github.blog/developer-skills/github/getting-started-with-project-planning-on-github/', children: 'Getting started with project planning on GitHub' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['De planning van het kernteam is publiek: ', (0, r.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/94', children: 'NL Design System kernteam 2026' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Deelprojecten van NL Design System maken een eigen GitHub Project, bijvoorbeeld: ', (0, r.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/70', children: 'Expertteam Digitale Toegankelijkheid 2025' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Elk werkplan krijgt een eigen project, in de praktijk betekent dat elk jaar een nieuw GitHub Project voor NL Design System.' }), '\n', (0, r.jsx)(n.p, { children: 'Maak in de "Project settings" een Custom field voor "Sprint", met als type "Iteration". Hernoem de eerste sprint in de iteratie naar het sprintnummer waar het project is gebleven, bijvoorbeeld "Sprint 42" die begint op 1 januari. Hierna kun je sprints aanmaken tot het einde van het jaar of het einddatum van het project.' }), '\n', (0, r.jsxs)(n.p, { children: ['Voor het sprintbord maken we een "Board" met de filter ', (0, r.jsx)(n.code, { children: 'sprint:@current' }), '. Om de volgende sprint te plannen maken we een Board met de filter ', (0, r.jsx)(n.code, { children: 'sprint:@next' }), '. Om te controleren of er nog items uit de vorige sprint verplaatst moeten worden, maken we een Board met de filter ', (0, r.jsx)(n.code, { children: 'sprint:@previous' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Voor de sprints kun je een burn-up chart maken: ', (0, r.jsx)(n.a, { href: 'https://docs.github.com/en/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects#about-historical-charts', children: 'GitHub: About insights for Projects - About historical charts' }), '.'] }), '\n', (0, r.jsx)(n.h2, { id: 'vertrouwelijke-issues', children: 'Vertrouwelijke issues' }), '\n', (0, r.jsx)(n.p, { children: 'Sommige items op de backlog kunnen vertrouwelijke gegevens bevatten. Gebruik hiervoor de GitHub Issues in de private repository van het project.' }), '\n', (0, r.jsx)(n.h2, { id: 'sprint-planning', children: 'Sprint planning' }), '\n', (0, r.jsx)(n.h3, { id: 'voorbereiding', children: 'Voorbereiding' }), '\n', (0, r.jsx)(n.p, { children: 'Een gedeelte van de werkzaamheden in de sprint zijn gebaseerd op de jaardoelen en kwartaaldoelen die de product manager heeft gepresenteerd aan het team. De doelen zijn vastgelegd als "Milestone" in het GitHub Project. (We gebruiken geen GitHub Milestones, omdat die beperkt zijn tot 1 repository.)' }), '\n', (0, r.jsx)(n.p, { children: 'Een ander gedeelte zijn periodieke werkzaamheden, zoals het organiseren van events of het onderhouden van infrastructuur.' }), '\n', (0, r.jsx)(n.p, { children: 'Een ander gedeelte is voor incidentele werkzaamheden, gebaseerd op de actualiteit in de community.' }), '\n', (0, r.jsx)(n.p, { children: 'Iedereen in het team zet als voorbereiding van de volgende sprint alvast GitHub Issues op de volgende sprint. Zorg eerst dat het issue in het GitHub Project staat. Selecteer daarna als "Sprint" de eerstvolgende optie na "Current".' }), '\n', (0, r.jsx)(n.h3, { id: 'sprint-capaciteit', children: 'Sprint capaciteit' }), '\n', (0, r.jsxs)(n.p, { children: ['Zorg bij de sprint planning dat er voldoende capaciteit is om aan de volledige ', (0, r.jsx)(n.a, { href: '/project/kwaliteitsaanpak/definition-of-done/', children: 'Definition of Done' }), ' te voldoen. Er moet voldoende tijd zijn voor ', (0, r.jsx)(n.a, { href: '/kwaliteitsaanpak/code-review/', children: 'code reviews' }), ', en eventuele software releases.'] }), '\n', (0, r.jsx)(n.h2, { id: 'resultaten-opleveren', children: 'Resultaten opleveren' }), '\n', (0, r.jsxs)(n.p, { children: ['Deel het resultaat van de sprint met de belangrijkste stakeholders in de ', (0, r.jsx)(n.a, { href: '/project/kwaliteitsaanpak/sprint-review/', children: 'sprint review' }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
  56561(e, n, t) {
   t.d(n, { f: () => c });
   var i = t(15540),
    r = t(69967),
    a = t(86070),
    s = t(13526),
    o = t(30758),
    l = ['children', 'className', 'purpose'];
   function p(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     (n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, i));
    }
    return t;
   }
   function d(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? p(Object(t), !0).forEach(function (n) {
         (0, i.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : p(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var c = (0, o.forwardRef)(function (e, n) {
    var t = e.children,
     o = e.className,
     p = e.purpose,
     c = (0, r.A)(e, l);
    return (0, a.jsx)('p', d(d({ className: (0, s.$)('nl-paragraph', (0, i.A)({}, 'nl-paragraph--lead', 'lead' === p), o), ref: n }, c), {}, { children: 'lead' === p ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   c.displayName = 'Paragraph';
  },
  66153(e, n, t) {
   t.d(n, { f: () => i.f });
   var i = t(56561);
  },
 },
]);
