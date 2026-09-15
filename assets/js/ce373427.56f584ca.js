'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71273],
 {
  18439(e, t, n) {
   n.d(t, { R: () => o, x: () => s });
   var a = n(30758);
   const i = {},
    r = a.createContext(i);
   function o(e) {
    const t = a.useContext(r);
    return a.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function s(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), a.createElement(r.Provider, { value: t }, e.children));
   }
  },
  56561(e, t, n) {
   n.d(t, { f: () => p });
   var a = n(15540),
    i = n(69967),
    r = n(86070),
    o = n(13526),
    s = n(30758),
    l = ['children', 'className', 'purpose'];
   function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     (t &&
      (a = a.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a));
    }
    return n;
   }
   function d(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? c(Object(n), !0).forEach(function (t) {
         (0, a.A)(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : c(Object(n)).forEach(function (t) {
           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
   }
   var p = (0, s.forwardRef)(function (e, t) {
    var n = e.children,
     s = e.className,
     c = e.purpose,
     p = (0, i.A)(e, l);
    return (0, r.jsx)('p', d(d({ className: (0, o.$)('nl-paragraph', (0, a.A)({}, 'nl-paragraph--lead', 'lead' === c), s), ref: t }, p), {}, { children: 'lead' === c ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: n }) : n }));
   });
   p.displayName = 'Paragraph';
  },
  66153(e, t, n) {
   n.d(t, { f: () => a.f });
   var a = n(56561);
  },
  72249(e, t, n) {
   (n.r(t), n.d(t, { assets: () => c, contentTitle: () => l, default: () => h, frontMatter: () => s, metadata: () => a, toc: () => d }));
   const a = JSON.parse('{"id":"project/kwaliteitsaanpak/i18n","title":"Internationalisatie en localisatie","description":"Uitleg over de internationalisatie en localisatie in code in NL Design System","source":"@site/docs/project/kwaliteitsaanpak/i18n.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/i18n","permalink":"/project/kwaliteitsaanpak/i18n","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/i18n.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Internationalisatie en localisatie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Internationalisatie en localisatie","sidebar_position":11,"pagination_label":"Internationalisatie en localisatie","description":"Uitleg over de internationalisatie en localisatie in code in NL Design System","keywords":["i18n","l10n"]},"sidebar":"project","previous":{"title":"Code reviews","permalink":"/kwaliteitsaanpak/code-review/"},"next":{"title":"Testomgeving","permalink":"/project/kwaliteitsaanpak/testomgeving"}}');
   var i = n(86070),
    r = n(18439),
    o = n(66153);
   const s = { title: 'Internationalisatie en localisatie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Internationalisatie en localisatie', sidebar_position: 11, pagination_label: 'Internationalisatie en localisatie', description: 'Uitleg over de internationalisatie en localisatie in code in NL Design System', keywords: ['i18n', 'l10n'] },
    l = 'Internationalisatie en localisatie',
    c = {},
    d = [{ value: 'Taal', id: 'taal', level: 2 }];
   function p(e) {
    const t = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(t.header, { children: (0, i.jsx)(t.h1, { id: 'internationalisatie-en-localisatie', children: 'Internationalisatie en localisatie' }) }), '\n', (0, i.jsx)(o.f, { appearance: 'lead', children: (0, i.jsx)(t.p, { children: 'Voor betere onderhoudbaarheid en om te voldoen aan WCAG wat betreft "Taal van de onderdelen", is het aanbevolen om\nhardcoded teksten voor de user-interace apart op te slaan in i18n-bestanden, in plaats van hardcoded teksten\ngebruiken.' }) }), '\n', (0, i.jsx)(t.p, { children: 'Het niet gebruiken van i18n kan worden beschouwd als "technical debt", en daarvoor moet een issue aangemaakt worden op de backlog.' }), '\n', (0, i.jsx)(t.h2, { id: 'taal', children: 'Taal' }), '\n', (0, i.jsx)(t.p, { children: 'Nieuwe software moet ontwikkeld worden met ondersteuning voor tweetaligheid, tenzij de product owner een uitzondering wil maken. De standaard-taal van de ontwikkelde software moet Nederlands zijn. De software moet ook geconfigureerd kunnen worden met een andere taal.' }), '\n', (0, i.jsx)(t.p, { children: 'Het moet mogelijk zijn om left-to-right talen te gebruiken (zoals Nederlands en Engels), om right-to-left talen te gebruiken (zoals Arabisch en Farsi), en om CJK-talen te gebruiken.' }), '\n', (0, i.jsxs)(t.p, { children: ['Gebruik altijd localisatie voor het tonen van aantallen, bedragen, datums en tijden. Bijvoorbeeld, in JavaScript is daarvoor de ', (0, i.jsxs)(t.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl', children: [(0, i.jsx)(t.code, { children: 'Intl' }), ' API'] }), '. Dit helpt voorkomen dat screenreaders aantallen verkeerd voorlezen.'] }), '\n', (0, i.jsxs)(t.p, { children: ['Pas de ', (0, i.jsx)(t.a, { href: 'https://ictubeheer.sharepoint.com/:w:/r/teams/Project_NLDesignSystem/_layouts/15/Doc.aspx?sourcedoc=%7B810EA922-9C8D-4BED-93C3-1EFE6788854D%7D&file=Schrijfwijzer%20NL%20Design%20System.docx&action=default&mobileredirect=true', children: 'NL Design System Schrijfwijzer' }), ' toe bij het maken van teksten.'] })] });
   }
   function h(e = {}) {
    const { wrapper: t } = { ...(0, r.R)(), ...e.components };
    return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
