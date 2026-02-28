'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [13470],
 {
  18439(e, n, i) {
   i.d(n, { R: () => l, x: () => o });
   var s = i(30758);
   const r = {},
    t = s.createContext(r);
   function l(e) {
    const n = s.useContext(t);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), s.createElement(t.Provider, { value: n }, e.children));
   }
  },
  51366(e, n, i) {
   (i.r(n), i.d(n, { assets: () => a, contentTitle: () => d, default: () => h, frontMatter: () => o, metadata: () => s, toc: () => j }));
   const s = JSON.parse('{"id":"project/schrijfwijzer/beslissingen","title":"Beslissingen voor schrijfwijze","description":"Beslissingen voor de schrijfwijze binnen het project NL Design System.","source":"@site/docs/project/schrijfwijzer/beslissingen.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/beslissingen","permalink":"/project/schrijfwijzer/beslissingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/beslissingen.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Beslissingen voor schrijfwijze","hide_title":true,"sidebar_label":"Beslissingen voor schrijfwijze","sidebar_position":7,"pagination_label":"Beslissingen voor schrijfwijze","description":"Beslissingen voor de schrijfwijze binnen het project NL Design System.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Engels","permalink":"/project/schrijfwijzer/engels"},"next":{"title":"Reviews","permalink":"/project/schrijfwijzer/reviews"}}');
   var r = i(86070),
    t = i(18439),
    l = i(46447);
   const o = { title: 'Beslissingen voor schrijfwijze', hide_title: !0, sidebar_label: 'Beslissingen voor schrijfwijze', sidebar_position: 7, pagination_label: 'Beslissingen voor schrijfwijze', description: 'Beslissingen voor de schrijfwijze binnen het project NL Design System.', keywords: ['kernteam'] },
    d = 'Beslissingen voor schrijfwijze',
    a = {},
    j = [
     { value: 'Veelgebruikte termen', id: 'veelgebruikte-termen', level: 2 },
     { value: 'Lidwoorden', id: 'lidwoorden', level: 2 },
     { value: 'Meervouden', id: 'meervouden', level: 2 },
     { value: 'Overige', id: 'overige', level: 2 },
     { value: 'Mis je iets?', id: 'mis-je-iets', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'beslissingen-voor-schrijfwijze', children: 'Beslissingen voor schrijfwijze' }) }), '\n', (0, r.jsx)(l.fz, { lead: !0, children: (0, r.jsx)(n.p, { children: 'Wanneer we keuze maken voor de schrijfwijze van een term, dan willen we die vastleggen zodat de teksten consistent en\nbegrijpelijk zijn.' }) }), '\n', (0, r.jsx)(n.h2, { id: 'veelgebruikte-termen', children: 'Veelgebruikte termen' }), '\n', (0, r.jsx)(n.p, { children: 'Schrijfwijze van woorden in het project:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Het is NL Design System. Dus niet "NLDS", "NL Design" of "NL Design Systems".' }), '\n', (0, r.jsx)(n.li, { children: '"NL Design System Community" met hoofdletters, en "de Community" met hoofdletters wanneer de NL Design System Community bedoeld wordt.' }), '\n', (0, r.jsx)(n.li, { children: '"Heartbeat", "Developer Open Hour" en "Design Open Hour".' }), '\n', (0, r.jsx)(n.li, { children: '"kernteam" met kleiner letters.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik geen afkortingen, zodat mensen die nieuw zijn in de community afgeschrikt worden door afkortingen die ze niet begrijpen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: "Altijd voluit 'NL Design System' in plaats van 'NLDS'. Ook niet in publieke chatkanalen." }), '\n', (0, r.jsx)(n.li, { children: 'Altijd Developer Open Hour of Design Open Hour, niet "DOH".' }), '\n', (0, r.jsx)(n.li, { children: 'Altijd "Rijkshuisstijl Community", niet RHS.' }), '\n', (0, r.jsxs)(n.li, { children: ['"MijnServices" aan elkaar geschreven in ', (0, r.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Camel_case', children: 'PascalCase' }), ', niet "Mijn services".'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Schrijf Engelstalige termen die eigennamen zijn met hoofdletters volgens ', (0, r.jsx)(n.a, { href: 'https://en.wikipedia.org/wiki/Title_case', children: 'Title case' }), ':'] }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: "Altijd 'Help Wanted' en 'Hall of Fame' in plaats van 'Help wanted' en 'Hall of fame'." }), '\n', (0, r.jsx)(n.li, { children: "Altijd 'GitHub' in plaats van 'Github'." }), '\n', (0, r.jsx)(n.li, { children: "Altijd 'GitHub Discussion' in plaats van 'discussion' of 'Discussion'." }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Schrijf ingeburgerde termen met kleine letters:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: "Altijd 'design tokens' in plaats van 'Design Tokens'." }), '\n', (0, r.jsx)(n.li, { children: "Altijd 'backlog' in plaats van 'Backlog'." }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'lidwoorden', children: 'Lidwoorden' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: "Altijd 'de component' in plaats van 'het component'." }), '\n', (0, r.jsx)(n.li, { children: 'Altijd \u2018de blog\u2019 in plaats van \u2018het blog\u2019.' }), '\n', (0, r.jsx)(n.li, { children: 'Altijd \u2018het webinar\u2019.' }), '\n', (0, r.jsx)(n.li, { children: "Altijd 'de Design Open Hour' in plaats van 'het Design Open Hour'. Geldt ook voor 'Developer Open Hour'." }), '\n', (0, r.jsx)(n.li, { children: 'Altijd \u2018de gemeente\u2019. Als we een gemeente noemen, dan doen we dit altijd met \u2018de\u2019 erbij: \u201cde gemeente Amsterdam\u201d. Het woord \u2018gemeente\u2019 schrijven we met kleine letter.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'meervouden', children: 'Meervouden' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Altijd datums en niet data.' }), '\n', (0, r.jsx)(n.li, { children: 'Altijd \u2018gemeenten\u2019 in plaats van \u2018gemeentes\u2019.' }), '\n', (0, r.jsx)(n.li, { children: 'Altijd \u2018community\u2019s\u2019. We schrijven niet \u2018communities\u2019 (Engels meervoud), maar \u2018community\u2019s\u2019 (Nederlands meervoud). Net als hobby\u2019s en baby\u2019s.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'overige', children: 'Overige' }), '\n', '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: "Altijd 'screenreadergebruikers' en 'toetsenbordgebruikers' of 'toetsenbord- en screenreadergebruikers'" }), '\n', (0, r.jsx)(n.li, { children: "Altijd 'toetsenbord, screenreader of stembesturing'." }), '\n', (0, r.jsx)(n.li, { children: "Altijd 'link' in plaats van 'hyperlink'." }), '\n', (0, r.jsx)(n.li, { children: "Altijd 'Mijn omgeving' in plaats van 'Mijn-omgeving' of 'MijnOmgeving'." }), '\n', (0, r.jsx)(n.li, { children: "Altijd 'meerstappenformulier' in plaats van 'meer-stappen-formulier' of 'meer-stappen formulier'." }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'mis-je-iets', children: 'Mis je iets?' }), '\n', (0, r.jsxs)(n.p, { children: ['Ben je op zoek naar een beslissing, maar is die er niet? Overleg dan met ', (0, r.jsx)(n.a, { href: '/project/kernteam/', children: 'het kernteam' }), ' en maak een Pull Request om de beslissing hier vast te leggen.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
