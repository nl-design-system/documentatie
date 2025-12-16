'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [73059],
 {
  78734: (e, n, t) => {
   t.d(n, { Ay: () => s, RM: () => r });
   var o = t(86070),
    i = t(85248);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => a, x: () => s });
   var o = t(30758);
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
  92219: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => h, default: () => g, frontMatter: () => u, metadata: () => o, toc: () => j });
   const o = JSON.parse('{"id":"richtlijnen/formulieren/button/accessible-name/README","title":"De toegankelijke naam van een button \xb7 Buttons in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor de toegankelijke naam van een button.","source":"@site/docs/richtlijnen/formulieren/button/5-accessible-name/README.mdx","sourceDirName":"richtlijnen/formulieren/button/5-accessible-name","slug":"/richtlijnen/formulieren/buttons/toegankelijke-naam","permalink":"/richtlijnen/formulieren/buttons/toegankelijke-naam","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/5-accessible-name/README.mdx","tags":[],"version":"current","frontMatter":{"title":"De toegankelijke naam van een button \xb7 Buttons in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toegankelijke naam button","pagination_label":"Toegankelijke naam button","description":"Richtlijnen voor de toegankelijke naam van een button.","slug":"/richtlijnen/formulieren/buttons/toegankelijke-naam","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Duidelijke buttontekst","permalink":"/richtlijnen/formulieren/buttons/duidelijk-buttontekst"},"next":{"title":"Afbeelding als button","permalink":"/richtlijnen/formulieren/buttons/afbeelding-als-button"}}');
   var i = t(86070),
    r = t(85248),
    a = t(78734);
   function s(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s();
   }
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'de-toegankelijke-naam-van-een-button', children: 'De toegankelijke naam van een button' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Maak de buttontekst voor iedereen beschikbaar, zorg dus voor een toegankelijke naam. Dan kunnen gebruikers van ', (0, i.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' deze tekst ook lezen en weten ze wat er gaat gebeuren als ze op de button klikken.'] }), '\n', (0, i.jsx)(n.p, { children: 'We beschrijven hieronder een aantal technieken om een button een toegankelijke naam te geven.' }), '\n', (0, i.jsx)(n.h2, { id: 'button-met-alleen-tekst', children: 'Button met alleen tekst' }), '\n', (0, i.jsx)(n.p, { children: 'Dit is de eenvoudigste en meest robuuste manier om een button een naam te geven. Met CSS kan de buttontekst gestyled worden. De toegankelijke naam is de buttontekst.' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button>Geef je op</button>\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'een-button-met-een-icoontje-en-tekst', children: 'Een button met een icoontje en tekst' }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Optie 1' }), ': Een icoon toevoegen via CSS met daarnaast tekst geplaatst. De toegankelijke naam is de buttontekst.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button class="icon-delete" type="button">Verwijder bestand</button>\n' }) }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button type="button">\n  <span class="fa-solid fa-trash-can" aria-hidden="true"> </span>\n  Verwijder bestand\n</button>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Optie 2' }), ': Een decoratief icoon als SVG-bestand samen met tekst. De afbeelding heeft een ', (0, i.jsx)(n.code, { children: 'alt' }), ' attribuut met een lege waarde, waardoor het wordt overgeslagen door screenreaders. De toegankelijke naam is de buttontekst.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button type="button">\n  <img src="close.svg" alt="" />\n  Sluit\n</button>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Optie 3' }), ': Een decoratief icoon als SVG-code samen met de tekst. Voeg hiervoor ', (0, i.jsx)(n.code, { children: 'aria-hidden="true"' }), ' toe aan de SVG, waardoor het wordt overgeslagen door hulptechnologie\xebn zoals screenreaders. De toegankelijke naam is de buttontekst.\nDeze optie heeft de voorkeur omdat nu ', (0, i.jsx)(n.code, { children: 'currentColor' }), ' kan worden gebruikt in de CSS waardoor forced colors kunnen worden overgenomen.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button type="button">\n  <svg aria-hidden="true" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line>\n    <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line>\n  </svg>\n  Sluit\n</button>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.strong, { children: 'Optie 4' }), ': SVG-code met een ', (0, i.jsx)(n.code, { children: 'role="img"' }), ' en een ', (0, i.jsx)(n.code, { children: 'aria-label' }), ' met de toegankelijke naam.\nDeze optie heeft niet de voorkeur omdat er geen visuele tekst bij het icoontje staat.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-html', children: '<button type="button">\n  <svg role="img" aria-label="Sluit" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line>\n    <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line>\n  </svg>\n</button>\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ["Voor het toekennen van toegankelijke namen aan SVG's bestaan ook andere technieken, Carie Fisher beschrijft ze in ", (0, i.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/', children: (0, i.jsx)('span', { lang: 'en', children: 'Accessible SVGs: Perfect Patterns For Screen Reader Users' }) }), '.'] }), '\n', (0, i.jsx)(n.p, { children: 'Een toegankelijke naam voor de button, is nodig om te voldoen aan \xe9\xe9n van de voorwaarden voor de WCAG-succescriteria:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/wcag/1.3.1/', children: '1.3.1 Info en relaties' }), ' (niveau A).'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: '/wcag/4.1.2/', children: '4.1.2 Naam, rol, waarde' }), ' (niveau A).'] }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   const u = { title: 'De toegankelijke naam van een button \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke naam button', pagination_label: 'Toegankelijke naam button', description: 'Richtlijnen voor de toegankelijke naam van een button.', slug: '/richtlijnen/formulieren/buttons/toegankelijke-naam', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    m = {},
    j = [{ value: 'Button met alleen tekst', id: 'button-met-alleen-tekst', level: 2 }, { value: 'Een button met een icoontje en tekst', id: 'een-button-met-een-icoontje-en-tekst', level: 2 }, ...a.RM];
   function k(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(l, {}), '\n', (0, i.jsx)(a.Ay, {})] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k();
   }
  },
 },
]);
