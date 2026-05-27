'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [12041],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => r });
   var t = i(30758);
   const o = {},
    a = t.createContext(o);
   function s(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), t.createElement(a.Provider, { value: n }, e.children));
   }
  },
  92580(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => h, frontMatter: () => r, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/definition-of-done","title":"Definition of Done","description":"Definition of Done voor mensen die de NL Design System kwaliteitsaanpak gebruiken.","source":"@site/docs/project/kwaliteitsaanpak/definition-of-done.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/definition-of-done","permalink":"/project/kwaliteitsaanpak/definition-of-done","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/definition-of-done.mdx","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"Definition of Done","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Definition of Done","sidebar_position":14,"pagination_label":"Definition of Done","description":"Definition of Done voor mensen die de NL Design System kwaliteitsaanpak gebruiken."},"sidebar":"project","previous":{"title":"Toegankelijkheid","permalink":"/project/kwaliteitsaanpak/toegankelijkheid"},"next":{"title":"Software supply chain","permalink":"/project/kwaliteitsaanpak/supply-chain"}}');
   var o = i(86070),
    a = i(18439),
    s = i(46447);
   const r = { title: 'Definition of Done', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Definition of Done', sidebar_position: 14, pagination_label: 'Definition of Done', description: 'Definition of Done voor mensen die de NL Design System kwaliteitsaanpak gebruiken.' },
    l = 'Definition of Done',
    d = {},
    c = [];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'definition-of-done', children: 'Definition of Done' }) }), '\n', (0, o.jsx)(s.fz, { lead: !0, children: (0, o.jsx)(n.p, { children: 'Controleer met Definition of Done of het werk klaar is om te presenteren aan de product owner, voor de laatste check.' }) }), '\n', '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['Het resultaat voldoet aan de acceptatiecriteria uit de ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/product-backlog/', children: 'backlog' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Het resultaat getest in de ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/testomgeving/', children: 'testomgeving' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['De ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/broncodekwaliteit/', children: 'broncodekwaliteit' }), ' voldoet aan de eisen.'] }), '\n', (0, o.jsxs)(n.li, { children: ['De ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/continuous-integration/', children: 'continuous integration' }), ' checks slagen, en die controleren in elk geval de broncodekwaliteit, testautomatisering en de build.'] }), '\n', (0, o.jsx)(n.li, { children: 'Testautomatisering voldoet aan het niveau dat is afgesproken voor de repository.' }), '\n', (0, o.jsxs)(n.li, { children: ['De ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/supply-chain/', children: 'dependencies' }), ' zijn up-to-date, hebben geen kritieke kwetsbaarheden, en hebben een open source licentie die compatible is.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Het resultaat is gepubliceerd onder de juiste ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/open-source/', children: 'open source' }), ' licentie.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Het werkt in de browsers en hulpsoftware uit de ', (0, o.jsx)(n.a, { href: '/baseline/', children: 'NL Design System Baseline' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Het resultaat voldoet aan de toegankelijkseisen van de ', (0, o.jsx)(n.a, { href: '/baseline/', children: 'NL Design System Baseline' }), '.'] }), '\n', (0, o.jsx)(n.li, { children: 'De oplossing is zoveel mogelijk gemaakt met NL Design System\xa0componenten en volgens instructies in het handboek en de richtlijnen.' }), '\n', (0, o.jsxs)(n.li, { children: ['De ', (0, o.jsx)(n.a, { href: '/kwaliteitsaanpak/code-review/', children: 'code review' }), ' is klaar en goedgekeurd.'] }), '\n', (0, o.jsxs)(n.li, { children: ['Er zijn ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/release-notes/', children: 'release notes' }), ' voor de wijzigingen, en die zijn per package vastgelegd met semantic versioning.'] }), '\n', (0, o.jsxs)(n.li, { children: ['De code en documentatie zijn ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/versiebeheer/', children: 'opgeleverd in Git' }), ' en gemerged naar de ', (0, o.jsx)(n.code, { children: 'main' }), ' branch.'] }), '\n', (0, o.jsx)(n.li, { children: 'Technical debt is vastgelegd in de backlog, en de product owner is ge\xefnformeerd dat de technical debt is gekoppeld aan dit item op de backlog.' }), '\n', (0, o.jsxs)(n.li, { children: ['De software is ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/continuous-deployment/', children: 'klaar voor een release' }), ', of de release is al gepubliceerd.'] }), '\n', (0, o.jsxs)(n.li, { children: ['De product owner accepteert de oplevering bij de ', (0, o.jsx)(n.a, { href: 'sprint-review/', children: 'sprint review' }), ', en is akkoord met de technical debt.'] }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Voor de volgende onderwerpen is een specifieke Definition of Done:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/candidate/', children: 'Definition of Done voor Candidate componenten' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/handboek/estafettemodel/componenten/hall-of-fame/', children: 'Definition of Done voor Hall of Fame componenten' }) }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['Sommige repositories hebben een eigen Definition of Done, die kun je vinden via ', (0, o.jsx)(n.code, { children: 'CONTRIBUTING.md' }), '.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
