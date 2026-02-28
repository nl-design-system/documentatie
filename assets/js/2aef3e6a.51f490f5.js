'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [52374],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => l });
   var r = i(30758);
   const o = {},
    t = r.createContext(o);
   function s(e) {
    const n = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), r.createElement(t.Provider, { value: n }, e.children));
   }
  },
  54020(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => a, default: () => g, frontMatter: () => l, metadata: () => r, toc: () => c }));
   const r = JSON.parse('{"id":"project/schrijfwijzer/doelgroepen","title":"Doelgroepen","description":"Doelgroepen voor NL Design System communicatie.","source":"@site/docs/project/schrijfwijzer/doelgroepen.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/doelgroepen","permalink":"/project/schrijfwijzer/doelgroepen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/doelgroepen.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Doelgroepen","hide_title":true,"sidebar_label":"Doelgroepen","sidebar_position":4,"pagination_label":"Doelgroepen","description":"Doelgroepen voor NL Design System communicatie.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Doelen","permalink":"/project/schrijfwijzer/doelen"},"next":{"title":"Nederlands","permalink":"/project/schrijfwijzer/nederlands"}}');
   var o = i(86070),
    t = i(18439),
    s = i(46447);
   const l = { title: 'Doelgroepen', hide_title: !0, sidebar_label: 'Doelgroepen', sidebar_position: 4, pagination_label: 'Doelgroepen', description: 'Doelgroepen voor NL Design System communicatie.', keywords: ['kernteam'] },
    a = 'Meerdere doelgroepen aanspreken',
    d = {},
    c = [
     { value: 'Doelgroepen', id: 'doelgroepen', level: 2 },
     { value: 'Soorten content', id: 'soorten-content', level: 2 },
     { value: 'Scanbare teksten voor een gemengd publiek', id: 'scanbare-teksten-voor-een-gemengd-publiek', level: 2 },
    ];
   function p(e) {
    const n = { code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'meerdere-doelgroepen-aanspreken', children: 'Meerdere doelgroepen aanspreken' }) }), '\n', (0, o.jsx)(s.fz, { lead: !0, children: (0, o.jsx)(n.p, { children: 'Pas je schrijfwijze aan voor de doelgroep van de content die je maakt. We willen specialisten in de community niet\nbetuttelen door vaktaal te vermijden. Maar we willen ook bijvoorbeeld managers of nieuwe doelgroepen goed kunnen\nuitleggen wat we doen. Daarom hebben we een aanpak waar we rekening houden met een gemengd publiek.' }) }), '\n', (0, o.jsx)(n.h2, { id: 'doelgroepen', children: 'Doelgroepen' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Breed publiek' }), '\n', (0, o.jsx)(n.li, { children: 'Specialisten' }), '\n', (0, o.jsx)(n.li, { children: 'Gemengd publiek' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'soorten-content', children: 'Soorten content' }), '\n', (0, o.jsx)(n.p, { children: 'Pas je tekst aan voor de doelgroep van het soort content:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Homepage en projectinformatie op de website:' }), ' breed publiek.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Documentatie op de website:' }), " bijna overal schrijf je voor een gemengd publiek, maar sommige pagina's zijn voor een breed publiek."] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Berichten voor Slack:' }), ' in het algemene ', (0, o.jsx)(n.code, { children: '#nl-design-system' }), ' kanaal schrijf je voor een breed publiek, in ', (0, o.jsx)(n.code, { children: '#nl-design-system-designers' }), ' en ', (0, o.jsx)(n.code, { children: '#nl-design-system-developers' }), ' is het logisch om vaktaal te gebruiken.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Berichten voor social media:' }), ' breed publiek. Plaats een link naar meer informatie voor specialisten, wanneer die informatie nodig is.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Nieuwsbrieven e-mails:' }), ' het is afhankelijk naar welke mailinglist je mailt. Mail je een groep developers? Gebruik dan gerust vaktaal. Mail je een algemene nieuwsbrief? Schrijf dan voor een breed publiek.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Blogposts voor de website:' }), ' ligt erg aan het onderwerp van de blog, dat kan varieren van een breed publiek tot een gemengd publiek.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.strong, { children: 'Presentatie met slides:' }), ' dit is afhankelijk van de soort presentatie, dat kan varieren van een breed publiek tot een specialistisch publiek.'] }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'scanbare-teksten-voor-een-gemengd-publiek', children: 'Scanbare teksten voor een gemengd publiek' }), '\n', (0, o.jsx)(n.p, { children: "Gebruik de volgende aanpak wanneer je schrijft voor een gemengd publiek. Schrijf de introductie-alinea, de koppen en het begin van alinea's na een kop voor een brede doelgroep zodat iedereen de tekst kan scannen. Wanneer het doel van de tekst duidelijk voor een breed publiek, dan zullen mensen vaker de tekst delen met een specialist die ze kennen." }), '\n', (0, o.jsx)(n.p, { children: 'Schrijf de verdere tekst gericht op specialisten, en gebruik alle vaktaal die nodig is voor een duidelijke tekst.' }), '\n'] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
