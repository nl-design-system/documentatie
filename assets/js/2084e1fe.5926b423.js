'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [16216],
 {
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => i });
   var s = t(30758);
   const r = {},
    a = s.createContext(r);
   function o(e) {
    const n = s.useContext(a);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function i(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), s.createElement(a.Provider, { value: n }, e.children));
   }
  },
  56561(e, n, t) {
   t.d(n, { f: () => p });
   var s = t(15540),
    r = t(69967),
    a = t(86070),
    o = t(13526),
    i = t(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     (n &&
      (s = s.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, s));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, s.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var p = (0, i.forwardRef)(function (e, n) {
    var t = e.children,
     i = e.className,
     d = e.purpose,
     p = (0, r.A)(e, l);
    return (0, a.jsx)('p', c(c({ className: (0, o.$)('nl-paragraph', (0, s.A)({}, 'nl-paragraph--lead', 'lead' === d), i), ref: n }, p), {}, { children: 'lead' === d ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   p.displayName = 'Paragraph';
  },
  66153(e, n, t) {
   t.d(n, { f: () => s.f });
   var s = t(56561);
  },
  98832(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => u, frontMatter: () => i, metadata: () => s, toc: () => c }));
   const s = JSON.parse('{"id":"project/kwaliteitsaanpak/release-notes","title":"Release notes","description":"Dit is hoe we release notes bijhouden voor NL Design System.","source":"@site/docs/project/kwaliteitsaanpak/release-notes.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/release-notes","permalink":"/project/kwaliteitsaanpak/release-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/release-notes.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Release notes","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Release notes","sidebar_position":30,"pagination_label":"Release notes","description":"Dit is hoe we release notes bijhouden voor NL Design System.","keywords":["changelog","release notes"]},"sidebar":"project","previous":{"title":"Continuous Deployment","permalink":"/project/kwaliteitsaanpak/continuous-deployment"},"next":{"title":"Productieomgeving","permalink":"/project/kwaliteitsaanpak/productieomgeving"}}');
   var r = t(86070),
    a = t(18439),
    o = t(66153);
   const i = { title: 'Release notes', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Release notes', sidebar_position: 30, pagination_label: 'Release notes', description: 'Dit is hoe we release notes bijhouden voor NL Design System.', keywords: ['changelog', 'release notes'] },
    l = 'Release notes',
    d = {},
    c = [{ value: 'Automatiseer de release notes', id: 'automatiseer-de-release-notes', level: 2 }];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, a.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'release-notes', children: 'Release notes' }) }), '\n', (0, r.jsx)(o.f, { purpose: 'lead', children: (0, r.jsxs)(n.p, { children: ['Publiceer documentatie over de wijzigingen in softwarereleases in een ', (0, r.jsx)(n.code, { children: 'CHANGELOG.md' }), ' bestand, zodat gebruikers weten\nwat ze kunnen verwachten en hoe ze kunnen migreren naar de nieuwe versie.'] }) }), '\n', (0, r.jsxs)(n.p, { children: ['Volg de ', (0, r.jsx)(n.code, { children: 'CHANGELOG.md' }), ' filename-conventie, zodat de release notes op diverse manieren gebruiksvriendelijk beschikbaar worden gemaakt, bijvoorbeeld met in Pull Requests van Dependabot, of in de GitHub user interface.'] }), '\n', (0, r.jsx)(n.h2, { id: 'automatiseer-de-release-notes', children: 'Automatiseer de release notes' }), '\n', (0, r.jsxs)(n.p, { children: ['Voorkom dat iedereen de ', (0, r.jsx)(n.code, { children: 'CHANGELOG.md' }), ' file direct moet wijzigen via Git, en daardoor steeds weer merge conflicts ontstaan. De release notes bijhouden moet niet een tijdrovend en frustrerend proces zijn.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsx)(n.a, { href: '/handboek/developer/changeset-conventie/', children: 'changesets workflow' }), ' voor het vastleggen van wijzigingen in ', (0, r.jsx)(n.code, { children: '.changeset/*.md' }), '-bestanden.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsx)(n.code, { children: 'changeset' }), ' tool in de CI/CD pipeline om de ', (0, r.jsx)(n.code, { children: 'CHANGELOG.md' }), ' bestanden aan te vullen.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
