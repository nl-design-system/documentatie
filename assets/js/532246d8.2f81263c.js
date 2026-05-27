'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [84773],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => l });
   var t = i(30758);
   const r = {},
    a = t.createContext(r);
   function s(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(a.Provider, { value: n }, e.children));
   }
  },
  57043(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => o, default: () => p, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/index","title":"Kwaliteitsaanpak","description":"Kwaliteitsaanpak NL Design System","source":"@site/docs/project/kwaliteitsaanpak/index.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/","permalink":"/project/kwaliteitsaanpak/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/index.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Kwaliteitsaanpak","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie","sidebar_position":1,"pagination_label":"Introductie","description":"Kwaliteitsaanpak NL Design System","keywords":["kwaliteitsaanpak"]},"sidebar":"project","previous":{"title":"Reviews","permalink":"/project/schrijfwijzer/reviews"},"next":{"title":"Introductie","permalink":"/project/kwaliteitsaanpak/"}}');
   var r = i(86070),
    a = i(18439),
    s = i(46447);
   const l = { title: 'Kwaliteitsaanpak', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie', sidebar_position: 1, pagination_label: 'Introductie', description: 'Kwaliteitsaanpak NL Design System', keywords: ['kwaliteitsaanpak'] },
    o = 'Kwaliteitsaanpak',
    d = {},
    c = [{ value: 'Overzicht', id: 'overzicht', level: 2 }];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'kwaliteitsaanpak', children: 'Kwaliteitsaanpak' }) }), '\n', (0, r.jsx)(s.fz, { lead: !0, children: (0, r.jsx)(n.p, { children: 'Werk je in opdracht van NL Design System? Gebruik dan deze aanpak om veilige software van hoge kwaliteit te maken.\nWanneer je in de community werkt, dan heb je misschien ook veel aan deze aanpak.' }) }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht', children: 'Overzicht' }), '\n', (0, r.jsx)(n.p, { children: 'Voor je aan de slag gaat, is het belangrijk om te weten hoe je veilig je werk kunt doen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'veilige-werkomgeving/', children: 'Veilige werkomgeving' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'veilig-werken/', children: 'Veilig werken' }) }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Alle taken, idee\xebn en processen worden vastgelegd in de Product Backlog. De product owner bepaalt de prioriteiten, en die werkzaamheden worden uitgevoerd in Agile Sprints. Lees de details:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'product-backlog/', children: 'Product Backlog' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'definition-of-ready/', children: 'Definition of Ready' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'agile-sprint/', children: 'Agile sprint' }) }), '\n'] }), '\n', '\n', (0, r.jsx)(n.p, { children: 'Wanneer code wordt ontwikkeld, is het doel om toegankelijke software te maken van hoge kwaliteit die goed onderhoudbaar is. De software moet open source herbruikbaar zijn in andere websites en in andere talen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'broncodekwaliteit/', children: 'Broncodekwaliteit' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'open-source/', children: 'Open source' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'toegankelijkheid/', children: 'Toegankelijkheid' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'supply-chain/', children: 'Software supply chain' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'baseline/README/', children: 'Baseline' }) }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'We werken samen via Git om de software te reviewen, te testen en later te releasen.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'versiebeheer/', children: 'Versiebeheer' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'testomgeving/', children: 'Testomgeving' }) }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Controleren van de kwaliteit:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'continuous-integration/', children: 'Continuous Integration' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'code-review/', children: 'Code reviews' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'definition-of-done/', children: 'Definition of Done' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'sprint-review/', children: 'Sprint review' }) }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Software releases doen:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'continuous-delivery/', children: 'Continuous Delivery' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'continuous-deployment/', children: 'Continuous Deployment' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'release-notes/', children: 'Release notes' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: 'productieomgeving/', children: 'Productieomgeving' }) }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Beheer:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'backup/', children: 'Backups' }), ': van de broncode moet een backup zijn.'] }), '\n'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
