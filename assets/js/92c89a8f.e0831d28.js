'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [26263],
 {
  18439(e, n, i) {
   i.d(n, { R: () => o, x: () => a });
   var t = i(30758);
   const r = {},
    s = t.createContext(r);
   function o(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(s.Provider, { value: n }, e.children));
   }
  },
  39049(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => d, default: () => p, frontMatter: () => a, metadata: () => t, toc: () => l }));
   const t = JSON.parse('{"id":"project/schrijfwijzer/reviews","title":"Reviews","description":"Reviews voor NL Design System communicatie.","source":"@site/docs/project/schrijfwijzer/reviews.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/reviews","permalink":"/project/schrijfwijzer/reviews","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/reviews.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Reviews","hide_title":true,"sidebar_label":"Reviews","sidebar_position":8,"pagination_label":"Reviews","description":"Reviews voor NL Design System communicatie.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Beslissingen voor schrijfwijze","permalink":"/project/schrijfwijzer/beslissingen"}}');
   var r = i(86070),
    s = i(18439),
    o = i(46447);
   const a = { title: 'Reviews', hide_title: !0, sidebar_label: 'Reviews', sidebar_position: 8, pagination_label: 'Reviews', description: 'Reviews voor NL Design System communicatie.', keywords: ['kernteam'] },
    d = 'Reviews',
    c = {},
    l = [
     { value: 'Website en documentatie', id: 'website-en-documentatie', level: 2 },
     { value: 'Berichten voor social media', id: 'berichten-voor-social-media', level: 2 },
     { value: 'Presentaties', id: 'presentaties', level: 2 },
     { value: 'Drukwerk en fysieke media', id: 'drukwerk-en-fysieke-media', level: 2 },
     { value: 'Aankondigingen in chatkanalen', id: 'aankondigingen-in-chatkanalen', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'reviews', children: 'Reviews' }) }), '\n', (0, r.jsx)(o.fz, { lead: !0, children: (0, r.jsx)(n.p, { children: 'Heb je een tekst geschreven? Laat dan altijd een ander meelezen v\xf3\xf3r je de tekst publiceert. Zou houden we elkaar\nscherp.' }) }), '\n', (0, r.jsx)(n.p, { children: 'Wie je om een review vraag verschilt per soort content. Wanneer je een tekst schrijft voor specialisten, en je bent zelf geen specialist, laat de tekst dan altijd reviewen door iemand die wel specialist is op dat gebied.' }), '\n', (0, r.jsx)(n.p, { children: 'Wanneer je een review nodig hebt, vermeld er dan bij wanneer je de feedback uiterlijk nodig hebt en attendeer eventueel de persoon die je nodig hebt door te taggen.' }), '\n', (0, r.jsx)(n.h2, { id: 'website-en-documentatie', children: 'Website en documentatie' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik de Pull Request reviews op GitHub.' }), '\n', (0, r.jsx)(n.h2, { id: 'berichten-voor-social-media', children: 'Berichten voor social media' }), '\n', (0, r.jsx)(n.p, { children: 'Communicatieadviseur maakt berichten voor social media. De productmanager geeft akkoord voor plaatsing.' }), '\n', (0, r.jsx)(n.h2, { id: 'presentaties', children: 'Presentaties' }), '\n', (0, r.jsx)(n.p, { children: 'Slides die gemaakt worden in PowerPoint of Figma moeten gecheckt worden op spelling, zinsopbouw en consistentie door een collega en geaccordeerd worden door de productmanager of projectmanager.' }), '\n', (0, r.jsx)(n.h2, { id: 'drukwerk-en-fysieke-media', children: 'Drukwerk en fysieke media' }), '\n', (0, r.jsx)(n.p, { children: 'De teksten moeten gecheckt worden op spelling, zinsopbouw en consistentie door de communicatieadviseur en akkoord bevonden worden door de productmanager of projectmanager.' }), '\n', (0, r.jsx)(n.h2, { id: 'aankondigingen-in-chatkanalen', children: 'Aankondigingen in chatkanalen' }), '\n', (0, r.jsxs)(n.p, { children: ['Vraag om een review aan de productmanager in een priv\xe9chatkanaal voordat je een algemene aankondiging doet ', (0, r.jsx)(n.a, { href: '/slack/', children: 'in Slack' }), '.'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
