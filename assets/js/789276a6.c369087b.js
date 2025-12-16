'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [57033],
 {
  31673: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => h, contentTitle: () => c, default: () => g, frontMatter: () => b, metadata: () => t, toc: () => m });
   const t = JSON.parse('{"id":"richtlijnen/formulieren/button/disabled/README","title":"Disabled submitbuttons \xb7 Buttons in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor disabled submitbuttons.","source":"@site/docs/richtlijnen/formulieren/button/7-disabled/README.mdx","sourceDirName":"richtlijnen/formulieren/button/7-disabled","slug":"/richtlijnen/formulieren/buttons/disabled-submitbuttons","permalink":"/richtlijnen/formulieren/buttons/disabled-submitbuttons","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/7-disabled/README.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Disabled submitbuttons \xb7 Buttons in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Disabled submitbuttons","sidebar_position":7,"pagination_label":"Disabled submitbuttons","description":"Richtlijnen voor disabled submitbuttons.","slug":"/richtlijnen/formulieren/buttons/disabled-submitbuttons","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Afbeelding als button","permalink":"/richtlijnen/formulieren/buttons/afbeelding-als-button"},"next":{"title":"Bevestigingspagina","permalink":"/richtlijnen/formulieren/bevestigingspagina/"}}');
   var s = i(86070),
    r = i(85248),
    o = i(78734);
   function d(e) {
    return (0, s.jsx)(s.Fragment, {});
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d();
   }
   function a(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'disabled-submitbuttons', children: 'Disabled submitbuttons' }) }), '\n', (0, s.jsx)(n.p, { children: 'In de praktijk worden disabled submitbuttons vaak gebruikt om te verhinderen dat een gebruiker het formulier verzendt als nog niet alle waarden goed zijn ingevuld.' }), '\n', (0, s.jsx)(n.p, { children: 'Er is een aantal toegankelijkheidsproblemen met het gebruik van disabled buttons:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'De gebuiker moet zoeken wat er mis is, waarom kan het formulier niet worden verzonden?' }), '\n', (0, s.jsx)(n.li, { children: 'Meestal is een disabled button grijs met grijze tekst. Dit is voor veel gebruikers slecht zichtbaar.' }), '\n', (0, s.jsxs)(n.li, { children: ['Gebruikers van ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en toetsenborden kunnen de disabled button geen focus geven en dat is verwarrend en onverwacht in het gebruik.'] }), '\n', (0, s.jsx)(n.li, { children: 'Gebruikers kunnen verandering van disabled in enabled soms niet opmerken als deze uit beeld is en blijven zoeken naar wat er mis is.' }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Een goede oplossing en vervanging voor een disabled button: schrijf goede labelteksten, descriptions en foutmeldingen. Zodat de gebruiker weet wat er mis is en niet hoeft te puzzelen.' }), '\n', (0, s.jsx)(n.p, { children: 'Deze richtlijn is een aanbevolen werkwijze, gebaseerd op gebruikersonderzoek:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-disabled-buttons-and-what-to-do-instead/', children: (0, s.jsx)('span', { lang: 'en', children: 'The problem with disabled buttons and what to do instead' }) }), ', Adam Silver.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://gomakethings.com/dont-disable-buttons/', children: (0, s.jsx)('span', { lang: 'en', children: "Don't disable buttons" }) }), ', Chris Ferdinandi in Go Make Things.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2021/08/frustrating-design-patterns-disabled-buttons/', children: (0, s.jsx)('span', { lang: 'en', children: 'Usability Pitfalls of Disabled Buttons, and How To Avoid Them' }) }), ', Vitaly Friedman in Smashing Magazine.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://axesslab.com/disabled-buttons-suck/', children: (0, s.jsx)('span', { lang: 'en', children: 'Disabled buttons suck' }) }), '.'] }), '\n'] }), '\n', (0, s.jsx)(n.p, { children: 'Een paar praktische tips als de bestaande situatie niet gelijk aangepast kan worden:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Gebruik voor de tekst van de disabled buttons voldoende kleurcontrast, zodat de tekst wel goed leesbaar is. Bijvoorbeeld: ', (0, s.jsx)(n.code, { children: '#767676' }), ' tegen een witte achtergrond.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Gebruik ', (0, s.jsx)(n.code, { children: 'tabindex="0"' }), ' zodat de button wel ontdekt kan worden door screenreadergebruikers.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Leg uit wat je moet doen om zodat de button niet meer disabled is, koppel die tekst met ', (0, s.jsx)(n.code, { children: 'aria-describedby' }), ' aan de button.'] }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
   const b = { title: 'Disabled submitbuttons \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Disabled submitbuttons', sidebar_position: 7, pagination_label: 'Disabled submitbuttons', description: 'Richtlijnen voor disabled submitbuttons.', slug: '/richtlijnen/formulieren/buttons/disabled-submitbuttons', keywords: ['labels', 'formulier', 'design', 'code'] },
    c = void 0,
    h = {},
    m = [...o.RM];
   function j(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(u, {}), '\n', (0, s.jsx)(l, {}), '\n', (0, s.jsx)(o.Ay, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(j, { ...e }) }) : j();
   }
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => d, RM: () => r });
   var t = i(86070),
    s = i(85248);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => o, x: () => d });
   var t = i(30758);
   const s = {},
    r = t.createContext(s);
   function o(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : o(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
