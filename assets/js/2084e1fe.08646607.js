'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [16216],
 {
  18439(e, n, t) {
   t.d(n, { R: () => a, x: () => r });
   var s = t(30758);
   const i = {},
    o = s.createContext(i);
   function a(e) {
    const n = s.useContext(o);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), s.createElement(o.Provider, { value: n }, e.children));
   }
  },
  75775(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => r, metadata: () => s, toc: () => c }));
   const s = JSON.parse('{"id":"project/kwaliteitsaanpak/release-notes","title":"Release notes","description":"Dit is hoe we release notes bijhouden voor NL Design System.","source":"@site/docs/project/kwaliteitsaanpak/release-notes.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/release-notes","permalink":"/project/kwaliteitsaanpak/release-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/release-notes.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Release notes","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Release notes","sidebar_position":30,"pagination_label":"Release notes","description":"Dit is hoe we release notes bijhouden voor NL Design System.","keywords":["changelog","release notes"]},"sidebar":"project","previous":{"title":"Continuous Deployment","permalink":"/project/kwaliteitsaanpak/continuous-deployment"},"next":{"title":"Productieomgeving","permalink":"/project/kwaliteitsaanpak/productieomgeving"}}');
   var i = t(86070),
    o = t(18439),
    a = t(46447);
   const r = { title: 'Release notes', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Release notes', sidebar_position: 30, pagination_label: 'Release notes', description: 'Dit is hoe we release notes bijhouden voor NL Design System.', keywords: ['changelog', 'release notes'] },
    l = 'Release notes',
    d = {},
    c = [{ value: 'Automatiseer de release notes', id: 'automatiseer-de-release-notes', level: 2 }];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'release-notes', children: 'Release notes' }) }), '\n', (0, i.jsx)(a.fz, { lead: !0, children: (0, i.jsxs)(n.p, { children: ['Publiceer documentatie over de wijzigingen in softwarereleases in een ', (0, i.jsx)(n.code, { children: 'CHANGELOG.md' }), ' bestand, zodat gebruikers weten\nwat ze kunnen verwachten en hoe ze kunnen migreren naar de nieuwe versie.'] }) }), '\n', (0, i.jsxs)(n.p, { children: ['Volg de ', (0, i.jsx)(n.code, { children: 'CHANGELOG.md' }), ' filename-conventie, zodat de release notes op diverse manieren gebruiksvriendelijk beschikbaar worden gemaakt, bijvoorbeeld met in Pull Requests van Dependabot, of in de GitHub user interface.'] }), '\n', (0, i.jsx)(n.h2, { id: 'automatiseer-de-release-notes', children: 'Automatiseer de release notes' }), '\n', (0, i.jsxs)(n.p, { children: ['Voorkom dat iedereen de ', (0, i.jsx)(n.code, { children: 'CHANGELOG.md' }), ' file direct moet wijzigen via Git, en daardoor steeds weer merge conflicts ontstaan. De release notes bijhouden moet niet een tijdrovend en frustrerend proces zijn.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsx)(n.a, { href: '/handboek/developer/changeset-conventie/', children: 'changesets workflow' }), ' voor het vastleggen van wijzigingen in ', (0, i.jsx)(n.code, { children: '.changeset/*.md' }), '-bestanden.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsx)(n.code, { children: 'changeset' }), ' tool in de CI/CD pipeline om de ', (0, i.jsx)(n.code, { children: 'CHANGELOG.md' }), ' bestanden aan te vullen.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
