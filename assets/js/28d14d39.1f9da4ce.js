'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [8240],
 {
  18439(e, n, a) {
   a.d(n, { R: () => d, x: () => t });
   var r = a(30758);
   const i = {},
    o = r.createContext(i);
   function d(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function t(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : d(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  26841(e, n, a) {
   (a.r(n), a.d(n, { assets: () => s, contentTitle: () => t, default: () => p, frontMatter: () => d, metadata: () => r, toc: () => c }));
   const r = JSON.parse('{"id":"handboek/developer/conventies/versionering/deprecation","title":"Deprecation","description":"Hoe en waarom je een package of specifieke versie als verouderd (deprecated) markeert op npm, zonder deze te verwijderen.","source":"@site/docs/handboek/developer/03-conventies/06-versionering/13-deprecation.md","sourceDirName":"handboek/developer/03-conventies/06-versionering","slug":"/handboek/developer/deprecation-conventie/","permalink":"/handboek/developer/deprecation-conventie/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/03-conventies/06-versionering/13-deprecation.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"Deprecation","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Deprecation","pagination_label":"Deprecation","description":"Hoe en waarom je een package of specifieke versie als verouderd (deprecated) markeert op npm, zonder deze te verwijderen.","slug":"/handboek/developer/deprecation-conventie/","keywords":["developer","aan de slag","componenten","versionering","semver","deprecation"]},"sidebar":"handboek","previous":{"title":"Changesets","permalink":"/handboek/developer/changeset-conventie/"},"next":{"title":"Design tokens","permalink":"/handboek/developer/design-tokens/"}}');
   var i = a(86070),
    o = a(18439);
   const d = { title: 'Deprecation', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Deprecation', pagination_label: 'Deprecation', description: 'Hoe en waarom je een package of specifieke versie als verouderd (deprecated) markeert op npm, zonder deze te verwijderen.', slug: '/handboek/developer/deprecation-conventie/', keywords: ['developer', 'aan de slag', 'componenten', 'versionering', 'semver', 'deprecation'] },
    t = 'Deprecation',
    s = {},
    c = [
     { value: 'Markeren van alle versies van een package', id: 'markeren-van-alle-versies-van-een-package', level: 2 },
     { value: 'Via de npm website', id: 'via-de-npm-website', level: 3 },
     { value: 'Via de command line', id: 'via-de-command-line', level: 3 },
     { value: 'Markeren van een specifieke versie van een package', id: 'markeren-van-een-specifieke-versie-van-een-package', level: 2 },
     { value: 'Ongedaan maken', id: 'ongedaan-maken', level: 2 },
    ];
   function l(e) {
    const n = { a: 'a', blockquote: 'blockquote', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', ol: 'ol', p: 'p', pre: 'pre', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'deprecation', children: 'Deprecation' }) }), '\n', (0, i.jsx)(n.p, { children: 'Het kan voorkomen dat een package of een specifieke versie van een package overbodig is geworden. Het package zal in dat geval als verouderd gemarkeerd moeten worden bij npm.' }), '\n', (0, i.jsx)(n.p, { children: 'Het markeren als verouderd heeft als voordeel dat het package gewoon beschikbaar blijft voor mensen die het willen blijven gebruiken. Het alternatief zou zijn om het package helemaal van npm te verwijderen maar dit is vanwege bovenstaande reden onwenselijk.' }), '\n', (0, i.jsxs)(n.p, { children: ['Dit is ook relevant als je een npm package hernoemt. Bijvoorbeeld: ', (0, i.jsx)(n.code, { children: '@example/counter-badge' }), ' naar ', (0, i.jsx)(n.code, { children: '@example/number-badge' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Deprecation kan dan helpen met mensen wijzen op de nieuwe naam van de package. Anders weten mensen niet dat er een nieuwe package is: dan lijkt het alsof er nooit meer updates uitkomen.' }), '\n', (0, i.jsx)(n.h2, { id: 'markeren-van-alle-versies-van-een-package', children: 'Markeren van alle versies van een package' }), '\n', (0, i.jsx)(n.h3, { id: 'via-de-npm-website', children: 'Via de npm website' }), '\n', (0, i.jsxs)(n.ol, { children: ['\n', (0, i.jsx)(n.li, { children: 'Maak een bericht voor gebruikers van de deprecated package. Is de package hernoemd, dan kun je een template tekst aanbieden die verwijst naar de nieuwe naam.' }), '\n', (0, i.jsxs)(n.li, { children: ['Login bij ', (0, i.jsx)(n.a, { href: 'https://www.npmjs.com/login', children: 'npm' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Navigeer naar het package dat je als verouderd wilt markeren (', (0, i.jsx)(n.code, { children: 'https://www.npmjs.com/package/<package-naam>' }), ').'] }), '\n', (0, i.jsx)(n.li, { children: 'Klik op "Settings".' }), '\n', (0, i.jsx)(n.li, { children: 'Klik op de knop "Deprecate package" bijna onderaan de pagina.' }), '\n', (0, i.jsx)(n.li, { children: 'Bevestig dat je alle versies van het package wilt markeren als verouderd door de naam van het package over te typen en op de knop "Deprecate package" te klikken.' }), '\n'] }), '\n', (0, i.jsx)(n.h3, { id: 'via-de-command-line', children: 'Via de command line' }), '\n', (0, i.jsxs)(n.p, { children: ['Zorg dat je bent ingelogd bij npm (', (0, i.jsx)(n.code, { children: 'npm login' }), ').'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-bash', children: '$ npm deprecate <package-naam> "<reden>" --otp=<123456>\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'markeren-van-een-specifieke-versie-van-een-package', children: 'Markeren van een specifieke versie van een package' }), '\n', (0, i.jsxs)(n.p, { children: ['Het is ook mogelijk om een specifieke versie van een package te markeren als verouderd. Dit kan alleen vanaf de command line. Voeg hiervoor de ', (0, i.jsx)(n.code, { children: '<versie>' }), ' van het package toe aan het commando.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-bash', children: '$ npm deprecate <package-naam>@<versie> "<reden>" --otp=<123456>\n' }) }), '\n', (0, i.jsxs)(n.blockquote, { children: ['\n', (0, i.jsx)(n.p, { children: 'Let op: het is mogelijk om een versie reeks op te geven om meerdere versies tegelijk te markeren als verouderd.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'ongedaan-maken', children: 'Ongedaan maken' }), '\n', (0, i.jsx)(n.p, { children: 'Het is mogelijk om het markeren als verouderd weer ongedaan te maken.' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-bash', children: '$ npm deprecate <package-naam> "" --otp=<12345>\n# of voor een specifieke versie\n$ npm deprecate <package-naam>@<versie> "" --otp=<123456>\n' }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
