'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [94396],
 {
  18439(e, n, t) {
   t.d(n, { R: () => o, x: () => l });
   var i = t(30758);
   const r = {},
    s = i.createContext(r);
   function o(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), i.createElement(s.Provider, { value: n }, e.children));
   }
  },
  50277(e, n, t) {
   (t.r(n), t.d(n, { assets: () => p, contentTitle: () => j, default: () => f, frontMatter: () => h, metadata: () => i, toc: () => g }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/button/placement/README","title":"Plaatsing van een button binnen een formulier \xb7 Buttons in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor plaatsing van een button binnen een formulier.","source":"@site/docs/richtlijnen/formulieren/button/3-placement/README.mdx","sourceDirName":"richtlijnen/formulieren/button/3-placement","slug":"/richtlijnen/formulieren/buttons/plaatsing","permalink":"/richtlijnen/formulieren/buttons/plaatsing","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/button/3-placement/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Plaatsing van een button binnen een formulier \xb7 Buttons in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Plaatsing button","pagination_label":"Plaatsing button","description":"Richtlijnen voor plaatsing van een button binnen een formulier.","slug":"/richtlijnen/formulieren/buttons/plaatsing","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Verstuur niet automatisch","permalink":"/richtlijnen/formulieren/buttons/niet-automatisch-versturen"},"next":{"title":"Duidelijke buttontekst","permalink":"/richtlijnen/formulieren/buttons/duidelijk-buttontekst"}}');
   var r = t(86070),
    s = t(18439),
    o = t(78734);
   function l(e) {
    return (0, r.jsx)(r.Fragment, {});
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l();
   }
   function c(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', img: 'img', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'plaatsing-van-een-button-binnen-een-formulier', children: 'Plaatsing van een button binnen een formulier' }) }), '\n', (0, r.jsx)(n.p, { children: "Plaats buttons aan het begin van de regel. Zo wordt een natuurlijke 'scan-lijn' gecre\xeberd. Hierdoor kunnen mensen hun aandacht gemakkelijk op deze lijn richten." }), '\n', (0, r.jsxs)(n.p, { children: ['Ze vormen zo \xe9\xe9n lijn. Ook is het zo voor gebruikers die inzoomen (bijvoorbeeld gebruikers met een visuele beperking) makkelijker om de button te vinden.\nDaarbij zullen gebruikers die inzoomen, een scherm vergrootglas gebruiken of een visuele beperking zoals ', (0, r.jsx)(n.a, { href: 'https://nl.wikipedia.org/wiki/Kokervisus', children: 'Kokervisus' }), ' hebben buttons goed kunnen vinden.'] }), '\n', (0, r.jsx)(n.p, { children: 'Deze richtlijn is een aanbevolen werkwijze, gebaseerd op gebruikersonderzoek:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.lukew.com/ff/entry.asp?571', children: (0, r.jsx)('span', { lang: 'en', children: 'Primary & Secondary Actions in Web Forms' }) }), ', Luke Wroblewski'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://adamsilver.io/blog/where-to-put-buttons-on-forms/', children: (0, r.jsx)('span', { lang: 'en', children: 'Where to put buttons on forms' }) }), ', Adam Silver'] }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Doen:' }), ' Button uitlijnen met formulier labels en invoervelden.\n', (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_buttons_placement--do.png', alt: 'Button uitgelijnd met formulier labels en invoervelden' })] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Niet doen:' }), ' Button rechts uitlijnen.\n', (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_buttons_placement--dont.png', alt: 'Button niet uitgelijnd met formulier labels en invoervelden' })] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function d(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.4/', children: 'Succescriterium 1.4.4 Herschalen van tekst' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.10/', children: 'Succescriterium 1.4.10 Reflow' }) }), '\n'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   const h = { title: 'Plaatsing van een button binnen een formulier \xb7 Buttons in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Plaatsing button', pagination_label: 'Plaatsing button', description: 'Richtlijnen voor plaatsing van een button binnen een formulier.', slug: '/richtlijnen/formulieren/buttons/plaatsing', keywords: ['labels', 'formulier', 'design', 'code'] },
    j = void 0,
    p = {},
    g = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function b(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsx)(a, {}), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(o.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b();
   }
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => s });
   var i = t(86070),
    r = t(18439);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
 },
]);
