'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71273],
 {
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => r });
   var a = t(30758);
   const i = {},
    o = a.createContext(i);
   function s(e) {
    const n = a.useContext(o);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), a.createElement(o.Provider, { value: n }, e.children));
   }
  },
  58189(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => h, frontMatter: () => r, metadata: () => a, toc: () => c }));
   const a = JSON.parse('{"id":"project/kwaliteitsaanpak/i18n","title":"Internationalisatie en localisatie","description":"Uitleg over de internationalisatie en localisatie in code in NL Design System","source":"@site/docs/project/kwaliteitsaanpak/i18n.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/i18n","permalink":"/project/kwaliteitsaanpak/i18n","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/i18n.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Internationalisatie en localisatie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Internationalisatie en localisatie","sidebar_position":11,"pagination_label":"Internationalisatie en localisatie","description":"Uitleg over de internationalisatie en localisatie in code in NL Design System","keywords":["i18n","l10n"]},"sidebar":"project","previous":{"title":"Code reviews","permalink":"/kwaliteitsaanpak/code-review/"},"next":{"title":"Testomgeving","permalink":"/project/kwaliteitsaanpak/testomgeving"}}');
   var i = t(86070),
    o = t(18439),
    s = t(46447);
   const r = { title: 'Internationalisatie en localisatie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Internationalisatie en localisatie', sidebar_position: 11, pagination_label: 'Internationalisatie en localisatie', description: 'Uitleg over de internationalisatie en localisatie in code in NL Design System', keywords: ['i18n', 'l10n'] },
    l = 'Internationalisatie en localisatie',
    d = {},
    c = [{ value: 'Taal', id: 'taal', level: 2 }];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'internationalisatie-en-localisatie', children: 'Internationalisatie en localisatie' }) }), '\n', (0, i.jsx)(s.fz, { appearance: 'lead', children: (0, i.jsx)(n.p, { children: 'Voor betere onderhoudbaarheid en om te voldoen aan WCAG wat betreft "Taal van de onderdelen", is het aanbevolen om\nhardcoded teksten voor de user-interace apart op te slaan in i18n-bestanden, in plaats van hardcoded teksten\ngebruiken.' }) }), '\n', (0, i.jsx)(n.p, { children: 'Het niet gebruiken van i18n kan worden beschouwd als "technical debt", en daarvoor moet een issue aangemaakt worden op de backlog.' }), '\n', (0, i.jsx)(n.h2, { id: 'taal', children: 'Taal' }), '\n', (0, i.jsx)(n.p, { children: 'Nieuwe software moet ontwikkeld worden met ondersteuning voor tweetaligheid, tenzij de product owner een uitzondering wil maken. De standaard-taal van de ontwikkelde software moet Nederlands zijn. De software moet ook geconfigureerd kunnen worden met een andere taal.' }), '\n', (0, i.jsx)(n.p, { children: 'Het moet mogelijk zijn om left-to-right talen te gebruiken (zoals Nederlands en Engels), om right-to-left talen te gebruiken (zoals Arabisch en Farsi), en om CJK-talen te gebruiken.' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik altijd localisatie voor het tonen van aantallen, bedragen, datums en tijden. Bijvoorbeeld, in JavaScript is daarvoor de ', (0, i.jsxs)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl', children: [(0, i.jsx)(n.code, { children: 'Intl' }), ' API'] }), '. Dit helpt voorkomen dat screenreaders aantallen verkeerd voorlezen.'] }), '\n', (0, i.jsxs)(n.p, { children: ['Pas de ', (0, i.jsx)(n.a, { href: 'https://ictubeheer.sharepoint.com/:w:/r/teams/Project_NLDesignSystem/_layouts/15/Doc.aspx?sourcedoc=%7B810EA922-9C8D-4BED-93C3-1EFE6788854D%7D&file=Schrijfwijzer%20NL%20Design%20System.docx&action=default&mobileredirect=true', children: 'NL Design System Schrijfwijzer' }), ' toe bij het maken van teksten.'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
