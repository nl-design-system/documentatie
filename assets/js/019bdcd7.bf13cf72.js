'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [90671],
 {
  18439(e, n, i) {
   i.d(n, { R: () => l, x: () => r });
   var t = i(30758);
   const a = {},
    o = t.createContext(a);
   function l(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : l(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  23599(e, n, i) {
   (i.r(n), i.d(n, { assets: () => s, contentTitle: () => r, default: () => c, frontMatter: () => l, metadata: () => t, toc: () => d }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/toegankelijkheid","title":"Toegankelijkheid","description":"Uitleg over de kwaliteitsaanpak voor toegankelijkheid van NL Design System.","source":"@site/docs/project/kwaliteitsaanpak/toegankelijkheid.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/toegankelijkheid","permalink":"/project/kwaliteitsaanpak/toegankelijkheid","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/toegankelijkheid.mdx","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"Toegankelijkheid","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toegankelijkheid","sidebar_position":13,"pagination_label":"Toegankelijkheid","description":"Uitleg over de kwaliteitsaanpak voor toegankelijkheid van NL Design System.","keywords":["toegankelijkheid","a11y"]},"sidebar":"project","previous":{"title":"Sprint review","permalink":"/project/kwaliteitsaanpak/sprint-review"},"next":{"title":"Definition of Done","permalink":"/project/kwaliteitsaanpak/definition-of-done"}}');
   var a = i(86070),
    o = i(18439);
   const l = { title: 'Toegankelijkheid', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijkheid', sidebar_position: 13, pagination_label: 'Toegankelijkheid', description: 'Uitleg over de kwaliteitsaanpak voor toegankelijkheid van NL Design System.', keywords: ['toegankelijkheid', 'a11y'] },
    r = 'Toegankelijkheid',
    s = {},
    d = [
     { value: 'Bekende problemen', id: 'bekende-problemen', level: 2 },
     { value: 'Toegankelijkheidsverklaring', id: 'toegankelijkheidsverklaring', level: 2 },
     { value: 'Keuzes maken', id: 'keuzes-maken', level: 2 },
    ];
   function k(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ['\n', (0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }) }), '\n', (0, a.jsx)(n.p, { children: 'Dit project stelt hogere eisen aan toegankelijkheid dan de wettelijke eisen. We willen niet alleen een toegankelijheidsverklaring, het doel is om volledig te voldoen aan WCAG 2.2 Level AA, en ook aan enkele aanvullende succescriteria uit Level AAA.' }), '\n', (0, a.jsx)(n.p, { children: 'Kies en ontwikkel oplossingen die voldoen aan de volgende eisen:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/', children: 'WCAG 2.2 Level AA' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/2.4.13/', children: 'WCAG 2.2 Level AAA Succescriterium 2.4.3 Focusweergave' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/wcag/2.5.5/', children: 'WCAG 2.2 Level AAA Succescriterium 2.5.5 Grootte van het aanwijsgebied (uitgebreid)' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/richtlijnen/', children: 'NL Design System Richtlijnen' }) }), '\n'] }), '\n', (0, a.jsx)(n.p, { children: 'Het doel is dat alle gevonden problemen met toegankelijkheid worden opgelost.' }), '\n', (0, a.jsx)(n.h2, { id: 'bekende-problemen', children: 'Bekende problemen' }), '\n', (0, a.jsx)(n.p, { children: 'Toegankelijkheidsproblemen die bekend zijn in een release van NL Design System, moeten vastgelegd worden in de product backlog.' }), '\n', (0, a.jsx)(n.h2, { id: 'toegankelijkheidsverklaring', children: 'Toegankelijkheidsverklaring' }), '\n', (0, a.jsx)(n.p, { children: 'Alle websites van NL Design System moeten elke 3 jaar een toegankelijkheidsonderzoek doen. Het onderzoek publiceren we op de website.' }), '\n', (0, a.jsx)(n.h2, { id: 'keuzes-maken', children: 'Keuzes maken' }), '\n', (0, a.jsx)(n.p, { children: 'Als er toegankelijkheidsproblemen zijn, kunnen die op goede gronden geaccepteerd worden door een leidinggevende. Het probleem blijft wel op de product backlog staan.' }), '\n', (0, a.jsxs)(n.p, { children: ['Bijvoorbeeld: als er een screenreader uit de Accessibility Support Baseline onvoldoende ondersteuning heeft voor een bepaalde Web Platform feature, waardoor niet maximaal wordt voldaan aan de mogelijkheden voor WCAG SC 1.3.1. Bijvoorbeeld: wanneer uit gebruikersonderzoek zou blijken dat ', (0, a.jsx)(n.code, { children: 'aria-errormessage' }), ' gebruiken een negatieve impact heeft op de gebruikerservaring.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(k, { ...e }) }) : k(e);
   }
  },
 },
]);
