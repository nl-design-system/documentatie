'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [8381],
 {
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => a });
   var i = t(30758);
   const r = {},
    s = i.createContext(r);
   function o(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children));
   }
  },
  41534(e, n, t) {
   function i(e, n) {
    if (null == e) return {};
    var t,
     i,
     r = (function (e, n) {
      if (null == e) return {};
      var t = {};
      for (var i in e)
       if ({}.hasOwnProperty.call(e, i)) {
        if (-1 !== n.indexOf(i)) continue;
        t[i] = e[i];
       }
      return t;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     for (i = 0; i < s.length; i++) ((t = s[i]), -1 === n.indexOf(t) && {}.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   t.d(n, { A: () => i });
  },
  42901(e, n, t) {
   (t.r(n), t.d(n, { assets: () => l, contentTitle: () => d, default: () => p, frontMatter: () => a, metadata: () => i, toc: () => c }));
   const i = JSON.parse('{"id":"project/kwaliteitsaanpak/product-backlog","title":"Product Backlog","description":"Uitleg over de backlog van NL Design System.","source":"@site/docs/project/kwaliteitsaanpak/product-backlog.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/product-backlog","permalink":"/project/kwaliteitsaanpak/product-backlog","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/product-backlog.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Product Backlog","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Product Backlog","pagination_label":"Product Backlog","sidebar_position":5,"description":"Uitleg over de backlog van NL Design System.","keywords":["backlog"]},"sidebar":"project","previous":{"title":"Veilig werken","permalink":"/project/kwaliteitsaanpak/veilig-werken"},"next":{"title":"Definition of Ready","permalink":"/project/kwaliteitsaanpak/definition-of-ready"}}');
   var r = t(86070),
    s = t(18439),
    o = t(59292);
   const a = { title: 'Product Backlog', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Product Backlog', pagination_label: 'Product Backlog', sidebar_position: 5, description: 'Uitleg over de backlog van NL Design System.', keywords: ['backlog'] },
    d = 'Product backlog',
    l = {},
    c = [
     { value: 'Prioriteit', id: 'prioriteit', level: 2 },
     { value: 'Tijdsinschatting', id: 'tijdsinschatting', level: 2 },
     { value: 'Status', id: 'status', level: 2 },
     { value: 'Sprint', id: 'sprint', level: 2 },
     { value: 'Planning en volgorde', id: 'planning-en-volgorde', level: 2 },
     { value: 'Issue', id: 'issue', level: 2 },
     { value: 'Epic', id: 'epic', level: 2 },
     { value: 'Voorbeelden:', id: 'voorbeelden', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', em: 'em', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', table: 'table', tbody: 'tbody', td: 'td', th: 'th', thead: 'thead', tr: 'tr', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'product-backlog', children: 'Product backlog' }) }), '\n', (0, r.jsx)(o.f, { purpose: 'lead', children: (0, r.jsx)(n.p, { children: 'Om keuzes te kunnen maken welk werk prioriteit krijgt worden alle taken, idee\xebn en processen vooraf vastgelegd in de\nProduct Backlog.' }) }), '\n', (0, r.jsx)(n.p, { children: 'De product backlog wordt vastgelegd in een GitHub Project die bestaat uit GitHub Issues uit meerdere GitHub repositories in de nl-design-system organisatie.' }), '\n', (0, r.jsx)(n.h2, { id: 'prioriteit', children: 'Prioriteit' }), '\n', (0, r.jsxs)(n.p, { children: ['De prioriteit wordt in overleg met de Product Owner vastgelegd, volgens een ', (0, r.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/MoSCoW_method', children: 'MoSCoW methode' }), ':'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['\n', (0, r.jsx)('span', { lang: 'en', children: 'Must have' }), '\n'] }), '\n', (0, r.jsxs)(n.li, { children: ['\n', (0, r.jsx)('span', { lang: 'en', children: 'Should have' }), '\n'] }), '\n', (0, r.jsxs)(n.li, { children: ['\n', (0, r.jsx)('span', { lang: 'en', children: 'Could have' }), '\n'] }), '\n', (0, r.jsxs)(n.li, { children: ['\n', (0, r.jsx)('span', { lang: 'en', children: "Won't have (for now)" }), '\n'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'tijdsinschatting', children: 'Tijdsinschatting' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik t-shirt sizes uit het volgende overzicht voor het maken van een tijdsinschatting. Maak samen met de relevante teamleden de inschatting voor de optelsom van tijd die nodig is van iedereen om te voldoen aan de Definition of Done. Rond naar boven af.' }), '\n', (0, r.jsxs)(n.table, { children: [(0, r.jsx)(n.thead, { children: (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.th, { children: 'T-shirt size' }), (0, r.jsx)(n.th, { children: 'Tijdsinschatting' })] }) }), (0, r.jsxs)(n.tbody, { children: [(0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: 'XS' }), (0, r.jsx)(n.td, { children: '2 uur' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: 'S' }), (0, r.jsx)(n.td, { children: '4 uur' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: 'M' }), (0, r.jsx)(n.td, { children: '1 dag' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: 'L' }), (0, r.jsx)(n.td, { children: '2 dagen' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: 'XL' }), (0, r.jsx)(n.td, { children: '4 dagen' })] }), (0, r.jsxs)(n.tr, { children: [(0, r.jsx)(n.td, { children: 'XXL' }), (0, r.jsx)(n.td, { children: '8 dagen' })] })] })] }), '\n', (0, r.jsx)(n.h2, { id: 'status', children: 'Status' }), '\n', (0, r.jsx)(n.p, { children: 'De product owner beheert in het GitHub projectboard de status van de acceptatiecriteria, om voor backlog grooming, refinement, en sprint planning snel de relevante issues te kunnen vinden.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Triage:' }), ' er zijn nog geen acceptatiecriteria. Alle issues beginnen hier mee.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Ready for refinement:' }), ' de acceptatiecriteria zijn klaar om met het team te bespreken.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Ready:' }), ' de issue voldoet aan de ', (0, r.jsx)(n.a, { href: '/project/kwaliteitsaanpak/definition-of-ready/', children: 'Definition of Ready' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'In progress:' }), ' iemand heeft verantwoordelijkheid genomen voor het werk, en het werk is begonnen.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Review needed:' }), ' het ontwikkelwerk lijkt klaar, maar een code review of handmatige test is nog nodig.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Done:' }), ' het werk is opgeleverd, en er zijn geen verder werkzaamheden meer.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.strong, { children: 'Maintenance:' }), ' het werk is opgeleverd, en de feature moet doorlopend of periodiek onderhouden worden.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'sprint', children: 'Sprint' }), '\n', (0, r.jsx)(n.p, { children: 'In het veld "Sprint" wordt gepland in wanneer het werk wordt uitgevoerd.' }), '\n', (0, r.jsx)(n.p, { children: 'Issues kunnen alvast worden ingesteld op een toekomstige sprint, maar dan is dit slechts een voorstel. Pas bij de sprintplanning wordt de inhoud van de sprint definitief gekozen.' }), '\n', (0, r.jsx)(n.p, { children: 'Wanneer een issue niet klaar is aan het eind van de sprint, dan kan je kiezen om het verdere werk in een volgende sprint te plannen. Pas dan "Sprint" aan naar de volgende sprint.' }), '\n', (0, r.jsx)(n.h2, { id: 'planning-en-volgorde', children: 'Planning en volgorde' }), '\n', (0, r.jsx)(n.p, { children: 'Maak volgorde duidelijk door vast te leggen dat een issue afhankelijk is van andere werkzaamheden. Gebruik de "Relationship" om aan te geven dat de issue "Blocked by" een andere issue is.' }), '\n', (0, r.jsx)(n.p, { children: 'Wanneer een issue een deadline op een bepaalde datum heeft, leg die dan vast in de "Deadline" property van het GitHub Project.' }), '\n', (0, r.jsx)(n.h2, { id: 'issue', children: 'Issue' }), '\n', (0, r.jsxs)(n.p, { children: ['Leg de user stories vast volgens het patroon "Als ', (0, r.jsx)(n.strong, { children: 'stakeholder' }), ' wil ik ', (0, r.jsx)(n.strong, { children: 'iets' }), ' zodat ', (0, r.jsx)(n.strong, { children: 'doel' }), '", zodat de volgende vragen gelijk beantwoord zijn: ', (0, r.jsx)(n.em, { children: 'wat' }), ' er gemaakt moet worden, ', (0, r.jsx)(n.em, { children: 'waarom' }), ', en ', (0, r.jsx)(n.em, { children: 'voor wie' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'Voeg elk issue toe aan het GitHub Project. Issues die onderdeel zijn van het project, kunnen geprioriteerd worden, aan sprints worden toegevoegd, en kunnen opgenomen worden in een maandrapportage.' }), '\n', (0, r.jsx)(n.p, { children: 'Leg de volgorde van user stories vast in door in in GitHub Project de issues op volgorde te zetten in het "Backlog" board.' }), '\n', (0, r.jsx)(n.p, { children: 'Leg de taken voor user stories vast als sub-issues.' }), '\n', (0, r.jsx)(n.p, { children: 'Maak bij elke issue een Heading 2 kopje "Acceptatiecriteria", met een Markdown-checklist voor de acceptatiecriteria.' }), '\n', (0, r.jsx)(n.h2, { id: 'epic', children: 'Epic' }), '\n', (0, r.jsx)(n.p, { children: 'Een Epic is een grote hoeveelheid werk die opgesplitst kan worden in meerdere issues. De losse issues kunnen in meerdere sprints uitgevoerd kunnen.' }), '\n', (0, r.jsx)(n.p, { children: 'De Epic krijgt een eigen issue, die de parent issue is voor de onderliggende issues. De parent issues zijn een goede manier om overzicht te hebben, voor je aan een Epic begint, en om de voortgang te volgen.' }), '\n', (0, r.jsx)(n.p, { children: 'Maak onderscheid tussen Epics en User Stories door het label "Epic" toe te voegen.' }), '\n', (0, r.jsx)(n.h2, { id: 'voorbeelden', children: 'Voorbeelden:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/94/views/1', children: 'NL Design System Kernteam: Backlog' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/70/views/1', children: 'Expertteam Digitale Toegankelijkheid: Backlog' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/108', children: 'Template: Product backlog' }) }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
  48171(e, n, t) {
   function i(e) {
    return (
     (i =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     i(e)
    );
   }
   function r(e) {
    var n = (function (e, n) {
     if ('object' != i(e) || !e) return e;
     var t = e[Symbol.toPrimitive];
     if (void 0 !== t) {
      var r = t.call(e, n || 'default');
      if ('object' != i(r)) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == i(n) ? n : n + '';
   }
   function s(e, n, t) {
    return ((n = r(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e);
   }
   t.d(n, { A: () => s });
  },
  59292(e, n, t) {
   t.d(n, { f: () => i.f });
   var i = t(71544);
  },
  71544(e, n, t) {
   t.d(n, { f: () => h });
   var i = t(48171),
    r = t(41534),
    s = t(86070),
    o = t(13526),
    a = t(30758),
    d = ['children', 'className', 'purpose'];
   function l(e, n) {
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
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? l(Object(t), !0).forEach(function (n) {
         (0, i.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : l(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var h = (0, a.forwardRef)(function (e, n) {
    var t = e.children,
     a = e.className,
     l = e.purpose,
     h = (0, r.A)(e, d);
    return (0, s.jsx)('p', c(c({ className: (0, o.$)('nl-paragraph', (0, i.A)({}, 'nl-paragraph--lead', 'lead' === l), a), ref: n }, h), {}, { children: 'lead' === l ? (0, s.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   h.displayName = 'Paragraph';
  },
 },
]);
