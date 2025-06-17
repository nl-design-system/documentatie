'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [45671],
 {
  66968: (e, n, t) => {
   t.d(n, { ZP: () => a });
   var o = t(52676),
    i = t(40139);
   function r(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e);
   }
  },
  5698: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => u, default: () => k, frontMatter: () => d, metadata: () => h, toc: () => j });
   var o = t(52676),
    i = t(40139),
    r = t(66968);
   function a(e) {
    return (0, o.jsx)(o.Fragment, {});
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a();
   }
   function l(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h1, { id: 'de-toegankelijke-naam-van-een-button', children: 'De toegankelijke naam van een button' }), '\n', (0, o.jsxs)(n.p, { children: ['Maak de buttontekst voor iedereen beschikbaar, zorg dus voor een toegankelijke naam. Dan kunnen gebruikers van ', (0, o.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' deze tekst ook lezen en weten ze wat er gaat gebeuren als ze op de button klikken.'] }), '\n', (0, o.jsx)(n.p, { children: 'We beschrijven hieronder een aantal technieken om een button een toegankelijke naam te geven.' }), '\n', (0, o.jsx)(n.h2, { id: 'button-met-alleen-tekst', children: 'Button met alleen tekst' }), '\n', (0, o.jsx)(n.p, { children: 'Dit is de eenvoudigste en meest robuuste manier om een button een naam te geven. Met CSS kan de buttontekst gestyled worden. De toegankelijke naam is de buttontekst.' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<button>Geef je op</button>\n' }) }), '\n', (0, o.jsx)(n.h2, { id: 'een-button-met-een-icoontje-en-tekst', children: 'Een button met een icoontje en tekst' }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Optie 1' }), ': Een icoon toevoegen via CSS met daarnaast tekst geplaatst. De toegankelijke naam is de buttontekst.'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<button class="icon-delete" type="button">Verwijder bestand</button>\n' }) }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<button type="button">\n  <span class="fa-solid fa-trash-can" aria-hidden="true"> </span>\n  Verwijder bestand\n</button>\n' }) }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Optie 2' }), ': Een decoratief icoon als SVG-bestand samen met tekst. De afbeelding heeft een ', (0, o.jsx)(n.code, { children: 'alt' }), ' attribuut met een lege waarde, waardoor het wordt overgeslagen door screenreaders. De toegankelijke naam is de buttontekst.'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<button type="button">\n  <img src="close.svg" alt="" />\n  Sluit\n</button>\n' }) }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Optie 3' }), ': Een decoratief icoon als SVG-code samen met de tekst. Voeg hiervoor ', (0, o.jsx)(n.code, { children: 'aria-hidden="true"' }), ' toe aan de SVG, waardoor het wordt overgeslagen door hulptechnologie\xebn zoals screenreaders. De toegankelijke naam is de buttontekst.\nDeze optie heeft de voorkeur omdat nu ', (0, o.jsx)(n.code, { children: 'currentColor' }), ' kan worden gebruikt in de CSS waardoor forced colors kunnen worden overgenomen.'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<button type="button">\n  <svg aria-hidden="true" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line>\n    <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line>\n  </svg>\n  Sluit\n</button>\n' }) }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.strong, { children: 'Optie 4' }), ': SVG-code met een ', (0, o.jsx)(n.code, { children: 'role="img"' }), ' en een ', (0, o.jsx)(n.code, { children: 'aria-label' }), ' met de toegankelijke naam.\nDeze optie heeft niet de voorkeur omdat er geen visuele tekst bij het icoontje staat.'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<button type="button">\n  <svg role="img" aria-label="Sluit" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line>\n    <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line>\n  </svg>\n</button>\n' }) }), '\n', (0, o.jsxs)(n.p, { children: ["Voor het toekennen van toegankelijke namen aan SVG's bestaan ook andere technieken, Carie Fisher beschrijft ze in ", (0, o.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/', children: (0, o.jsx)('span', { lang: 'en', children: 'Accessible SVGs: Perfect Patterns For Screen Reader Users' }) }), '.'] }), '\n', (0, o.jsx)(n.p, { children: 'Een toegankelijke naam voor de button, is nodig om te voldoen aan \xe9\xe9n van de voorwaarden voor de WCAG-succescriteria:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/1.3.1', children: '1.3.1 Info en relaties' }), ' (niveau A).'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/wcag/4.1.2', children: '4.1.2 Naam, rol, waarde' }), ' (niveau A).'] }), '\n'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
   const d = { title: 'De toegankelijke naam van een button \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam button', pagination_label: 'Toegankelijke naam button', description: 'Richtlijnen voor de toegankelijke naam van een button.', slug: '/richtlijnen/formulieren/buttons/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    u = void 0,
    h = { id: 'richtlijnen/formulieren/button/accessible-name/README', title: 'De toegankelijke naam van een button \xb7 Buttons in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor de toegankelijke naam van een button.', source: '@site/docs/richtlijnen/formulieren/button/5-accessible-name/README.mdx', sourceDirName: 'richtlijnen/formulieren/button/5-accessible-name', slug: '/richtlijnen/formulieren/buttons/toegankelijke-naam', permalink: '/richtlijnen/formulieren/buttons/toegankelijke-naam', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/5-accessible-name/README.mdx', tags: [], version: 'current', frontMatter: { title: 'De toegankelijke naam van een button \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam button', pagination_label: 'Toegankelijke naam button', description: 'Richtlijnen voor de toegankelijke naam van een button.', slug: '/richtlijnen/formulieren/buttons/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Duidelijke buttontekst', permalink: '/richtlijnen/formulieren/buttons/duidelijk-buttontekst' }, next: { title: 'Afbeelding als button', permalink: '/richtlijnen/formulieren/buttons/afbeelding-als-button' } },
    m = {},
    j = [];
   function g(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(s, {}), '\n', (0, o.jsx)(r.ZP, {})] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g();
   }
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => a });
   var o = t(75271);
   const i = {},
    r = o.createContext(i);
   function a(e) {
    const n = o.useContext(r);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), o.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
