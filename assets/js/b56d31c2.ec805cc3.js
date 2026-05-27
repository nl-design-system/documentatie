'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [77397],
 {
  18439(e, n, i) {
   i.d(n, { R: () => a, x: () => d });
   var t = i(30758);
   const o = {},
    r = t.createContext(o);
   function a(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  43833(e, n, i) {
   (i.r(n), i.d(n, { assets: () => s, contentTitle: () => l, default: () => m, frontMatter: () => d, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/veilige-werkomgeving","title":"Veilige werkomgeving","description":"Uitleg over een veilige werkomgeving voor NL Design System","source":"@site/docs/project/kwaliteitsaanpak/veilige-werkomgeving.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/veilige-werkomgeving","permalink":"/project/kwaliteitsaanpak/veilige-werkomgeving","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/veilige-werkomgeving.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Veilige werkomgeving","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Veilige werkomgeving","sidebar_position":3,"pagination_label":"Veilige werkomgeving","description":"Uitleg over een veilige werkomgeving voor NL Design System","keywords":["coc"]},"sidebar":"project","previous":{"title":"Introductie","permalink":"/project/kwaliteitsaanpak/"},"next":{"title":"Veilig werken","permalink":"/project/kwaliteitsaanpak/veilig-werken"}}');
   var o = i(86070),
    r = i(18439),
    a = i(46447);
   const d = { title: 'Veilige werkomgeving', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Veilige werkomgeving', sidebar_position: 3, pagination_label: 'Veilige werkomgeving', description: 'Uitleg over een veilige werkomgeving voor NL Design System', keywords: ['coc'] },
    l = 'Veilige werkomgeving',
    s = {},
    c = [
     { value: 'Community', id: 'community', level: 2 },
     { value: 'Zichtbaarheid van de Code of Conduct', id: 'zichtbaarheid-van-de-code-of-conduct', level: 2 },
    ];
   function g(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'veilige-werkomgeving', children: 'Veilige werkomgeving' }) }), '\n', (0, o.jsx)(a.fz, { lead: !0, children: (0, o.jsx)(n.p, { children: 'Respectvolle en constructieve communicatie is een essenti\xebel onderdeel van softwareontwikkeling, bij het bespreken van\nde product backlog en bij code reviews. De Code of Conduct helpt om te weten wat andere mensen nodig hebben om hun\nbeste werk te doen.' }) }), '\n', (0, o.jsx)(n.p, { children: 'Zorg voor een veilige werkomgeving, zodat je met open communicatie en effectieve samenwerking het beste resultaat kan\nbereiken. De gedragscode maakt duidelijk wat hier voor nodig is, en geeft het vertrouwen dat er een plan is voor\nhandhaving. Controleer periodiek dat iedereen zich veilig voelt, en verbeter de gedragscode en de handhaving op basis\ndie feedback.' }), '\n', (0, o.jsx)(n.h2, { id: 'community', children: 'Community' }), '\n', (0, o.jsx)(n.p, { children: 'Gebruik de Code of Conduct voor alle communicatie kanalen van NL Design System, inclusief de community. Zo zorgt het kernteam dat de communicatie tussen de "core contributors" met eigen prioriteiten en de community met hoge verwachtingen en uiteenlopende belangen respectvol verloopt.' }), '\n', (0, o.jsx)(n.p, { children: 'Vermijd druk vanuit de community om wijzigingen van onvoldoende kwaliteit door te voeren. Plaats het belang van een veilige werkomgeving en de belangen van de bredere community boven die van individuen.' }), '\n', (0, o.jsx)(n.h2, { id: 'zichtbaarheid-van-de-code-of-conduct', children: 'Zichtbaarheid van de Code of Conduct' }), '\n', (0, o.jsx)(n.p, { children: 'Deel de Code of Conduct in elk geval in plekken waar wordt samengewerkt met de community, bijvoorbeeld in chatkanalen, in websites waar comments geplaatst kunnen worden en bij events die worden georganiseerd.' }), '\n', (0, o.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Maak een ', (0, o.jsx)(n.code, { children: 'CODE_OF_CONDUCT.md' }), ' bestand in elke Git repository.'] }), '\n', (0, o.jsx)(n.li, { children: 'Noem de Code of Conduct in de beschrijving van Slack-kanalen, en maak een bookmark naar de volledige tekst.' }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik de ', (0, o.jsxs)(n.a, { href: 'https://github.com/nl-design-system/example/blob/main/CODE_OF_CONDUCT.md', children: [(0, o.jsx)(n.code, { children: 'CODE_OF_CONDUCT.md' }), ' in de example repository'] }), ' als voorbeeld.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
   }
  },
 },
]);
