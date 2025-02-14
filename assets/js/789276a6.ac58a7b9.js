'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [43819],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => o });
   var i = t(52676),
    s = t(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
   }
  },
  35151: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => h, contentTitle: () => b, default: () => g, frontMatter: () => u, metadata: () => c, toc: () => m });
   var i = t(52676),
    s = t(40139),
    r = t(66968);
   function o(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o();
   }
   function l(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'disabled-submitbuttons', children: 'Disabled submitbuttons' }), '\n', (0, i.jsx)(n.p, { children: 'In de praktijk worden disabled submitbuttons vaak gebruikt om te verhinderen dat een gebruiker het formulier verzendt als nog niet alle waarden goed zijn ingevuld.' }), '\n', (0, i.jsx)(n.p, { children: 'Er is een aantal toegankelijkheidsproblemen met het gebruik van disabled buttons:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'De gebuiker moet zoeken wat er mis is, waarom kan het formulier niet worden verzonden?' }), '\n', (0, i.jsx)(n.li, { children: 'Meestal is een disabled button grijs met grijze tekst. Dit is voor veel gebruikers slecht zichtbaar.' }), '\n', (0, i.jsx)(n.li, { children: 'Toetsenbord- en screenreadergebruikers kunnen de disabled button geen focus geven en dat is verwarrend en onverwacht in het gebruik.' }), '\n', (0, i.jsx)(n.li, { children: 'Gebruikers kunnen verandering van disabled in enabled soms niet opmerken als deze uit beeld is en blijven zoeken naar wat er mis is.' }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Een goede oplossing en vervanging voor een disabled button: schrijf goede labelteksten, descriptions en foutmeldingen. Zodat de gebruiker weet wat er mis is en niet hoeft te puzzelen.' }), '\n', (0, i.jsx)(n.p, { children: 'Deze richtlijn is een aanbevolen werkwijze, gebaseerd op gebruikersonderzoek:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-disabled-buttons-and-what-to-do-instead/', children: (0, i.jsx)('span', { lang: 'en', children: 'The problem with disabled buttons and what to do instead' }) }), ', Adam Silver.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://gomakethings.com/dont-disable-buttons/', children: (0, i.jsx)('span', { lang: 'en', children: "Don't disable buttons" }) }), ', Chris Ferdinandi in Go Make Things.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2021/08/frustrating-design-patterns-disabled-buttons/', children: (0, i.jsx)('span', { lang: 'en', children: 'Usability Pitfalls of Disabled Buttons, and How To Avoid Them' }) }), ', Vitaly Friedman in Smashing Magazine.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://axesslab.com/disabled-buttons-suck/', children: (0, i.jsx)('span', { lang: 'en', children: 'Disabled buttons suck' }) }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Een paar praktische tips als de bestaande situatie niet gelijk aangepast kan worden:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['Gebruik voor de tekst van de disabled buttons voldoende kleurcontrast, zodat de tekst wel goed leesbaar is. Bijvoorbeeld: ', (0, i.jsx)(n.code, { children: '#767676' }), ' tegen een witte achtergrond.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Gebruik ', (0, i.jsx)(n.code, { children: 'tabindex="0"' }), ' zodat de button wel ontdekt kan worden door screenreadergebruikers.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Leg uit wat je moet doen om zodat de button niet meer disabled is, koppel die tekst met ', (0, i.jsx)(n.code, { children: 'aria-describedby' }), ' aan de button.'] }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
   const u = { title: 'Disabled submitbuttons \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Disabled submitbuttons', sidebar_position: 7, pagination_label: 'Disabled submitbuttons', description: 'Richtlijnen voor disabled submitbuttons.', slug: '/richtlijnen/formulieren/buttons/disabled-submitbuttons', keywords: ['labels', 'formulier', 'design', 'code'] },
    b = void 0,
    c = { id: 'richtlijnen/formulieren/button/disabled/README', title: 'Disabled submitbuttons \xb7 Buttons in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor disabled submitbuttons.', source: '@site/docs/richtlijnen/formulieren/button/7-disabled/README.mdx', sourceDirName: 'richtlijnen/formulieren/button/7-disabled', slug: '/richtlijnen/formulieren/buttons/disabled-submitbuttons', permalink: '/richtlijnen/formulieren/buttons/disabled-submitbuttons', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/7-disabled/README.mdx', tags: [], version: 'current', sidebarPosition: 7, frontMatter: { title: 'Disabled submitbuttons \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Disabled submitbuttons', sidebar_position: 7, pagination_label: 'Disabled submitbuttons', description: 'Richtlijnen voor disabled submitbuttons.', slug: '/richtlijnen/formulieren/buttons/disabled-submitbuttons', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Afbeelding als button', permalink: '/richtlijnen/formulieren/buttons/afbeelding-als-button' }, next: { title: 'Bevestigingspagina', permalink: '/richtlijnen/formulieren/bevestigingspagina/' } },
    h = {},
    m = [];
   function j(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(a, {}), '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(r.ZP, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j();
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => d, a: () => o });
   var i = t(75271);
   const s = {},
    r = i.createContext(s);
   function o(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
