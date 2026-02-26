'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [15342],
 {
  18439(e, n, r) {
   r.d(n, { R: () => t, x: () => s });
   var i = r(30758);
   const l = {},
    o = i.createContext(l);
   function t(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : t(e.components)), i.createElement(o.Provider, { value: n }, e.children));
   }
  },
  44325(e, n, r) {
   (r.r(n), r.d(n, { assets: () => a, contentTitle: () => d, default: () => p, frontMatter: () => c, metadata: () => i, toc: () => h }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/placeholder/README","title":"Placeholders in een formulier","description":"Richtlijnen voor het ontwerp en de code van placeholders in een formulier.","source":"@site/docs/richtlijnen/formulieren/placeholder/README.mdx","sourceDirName":"richtlijnen/formulieren/placeholder","slug":"/richtlijnen/formulieren/placeholders/","permalink":"/richtlijnen/formulieren/placeholders/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/README.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Placeholders in een formulier","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie placeholders","sidebar_position":9,"pagination_label":"Placeholders in een formulier","description":"Richtlijnen voor het ontwerp en de code van placeholders in een formulier.","slug":"/richtlijnen/formulieren/placeholders/","keywords":["placeholders","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Duidelijk aangeven verzenden","permalink":"/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven"},"next":{"title":"Placeholders in een formulier","permalink":"/richtlijnen/formulieren/placeholders/"}}');
   var l = r(86070),
    o = r(18439),
    t = r(78734),
    s = r(67414);
   const c = { title: 'Placeholders in een formulier', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie placeholders', sidebar_position: 9, pagination_label: 'Placeholders in een formulier', description: 'Richtlijnen voor het ontwerp en de code van placeholders in een formulier.', slug: '/richtlijnen/formulieren/placeholders/', keywords: ['placeholders', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor placeholders in een formulier',
    a = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, ...t.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components },
     { OverviewPage: r } = n;
    return (
     r ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, l.jsxs)(l.Fragment, { children: ['\n', '\n', (0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-placeholders-in-een-formulier', children: 'Richtlijnen NL Design System voor placeholders in een formulier' }) }), '\n', (0, l.jsx)(n.p, { children: 'Een placeholder geeft de gebruiker een korte hint over het verwachte type gegevens dat in het formulierveld moet worden.' }), '\n', (0, l.jsxs)(n.p, { children: ['Een ', (0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/', children: 'label' }), ' vertelt ', (0, l.jsx)(n.strong, { children: 'wat' }), ' je moet invullen en een ', (0, l.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder', children: 'placeholder' }), ' vertelt wat voor ', (0, l.jsx)(n.strong, { children: 'soort gegevens' }), ' in een veld wordt verwacht. Voor een e-mailveld kan het label bijvoorbeeld "Jouw e-mailadres" zijn en de placeholder "', (0, l.jsx)(n.a, { href: 'mailto:naam@voorbeeld.com', children: 'naam@voorbeeld.com' }), '".'] }), '\n', (0, l.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, l.jsx)(r, { excludeDocIDs: ['richtlijnen/formulieren/placeholder/README'] }), '\n', (0, l.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, l.jsx)(s.T, { id: 'een-placeholder-is-geen-vervanger-van-een-label', children: (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/niet-als-label/', children: 'Een placeholder is geen vervanger van een label' }), '.'] }) }), '\n', (0, l.jsx)(s.T, { id: 'placeholders-en-de-zoekfunctie', children: (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/zoekfunctie/', children: 'Placeholders en de zoekfunctie' }), '.'] }) }), '\n', (0, l.jsx)(s.T, { id: 'voorkom-verwarring-bij-de-gebruiker', children: (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/verwarring-voorkomen/', children: 'Voorkom verwarring bij de gebruiker' }), '.'] }) }), '\n', (0, l.jsx)(s.T, { id: 'zorg-voor-een-goed-kleurcontrast-van-de-placeholdertekst', children: (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/kleurcontrast/', children: 'Zorg voor een voldoende kleurcontract voor de placeholdertekst' }), '.'] }) }), '\n', (0, l.jsx)(t.Ay, {})] })
    );
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(u, { ...e }) }) : u(e);
   }
  },
  67414(e, n, r) {
   r.d(n, { T: () => o });
   var i = r(13526),
    l = r(86070);
   const o = ({ children: e, className: n, ...r }) => (0, l.jsx)('div', { ...r, className: (0, i.A)('nlds-fragment-redirect', n), children: e });
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => s, RM: () => o });
   var i = r(86070),
    l = r(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(t, { ...e }) }) : t(e);
   }
  },
 },
]);
