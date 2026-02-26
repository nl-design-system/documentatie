'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [19525],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => l });
   var r = i(30758);
   const o = {},
    t = r.createContext(o);
   function s(e) {
    const n = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), r.createElement(t.Provider, { value: n }, e.children));
   }
  },
  66004(e, n, i) {
   (i.r(n), i.d(n, { assets: () => g, contentTitle: () => h, default: () => f, frontMatter: () => u, metadata: () => r, toc: () => m }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/order/README","title":"Zorg voor een logische volgorde van de informatie","description":"Richtlijnen om informatie in een logische volgorde te tonen.","source":"@site/docs/richtlijnen/formulieren/visual-design/8-order/README.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/8-order","slug":"/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde","permalink":"/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/8-order/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor een logische volgorde van de informatie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Logische volgorde","pagination_label":"Logische volgorde","description":"Richtlijnen om informatie in een logische volgorde te tonen.","slug":"/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Geen afbeelding voor buttons","permalink":"/richtlijnen/formulieren/visueel-ontwerp/geen-afbeelding-voor-buttons"},"next":{"title":"Voorkom fouten in een formulier","permalink":"/richtlijnen/formulieren/voorkom-fouten/"}}');
   var o = i(86070),
    t = i(18439),
    s = i(78734);
   function l(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'zorg-voor-een-logische-volgorde-van-de-informatie', children: 'Zorg voor een logische volgorde van de informatie' }) }), '\n', (0, o.jsx)(n.p, { children: 'De informatie in een formulier moet logisch zijn als de gebruiker van boven naar beneden leest.' }), '\n', (0, o.jsx)(n.p, { children: 'Zet dus geen belangrijke informatie onder de submitbutton. Bezoekers verwachten dit niet en kunnen die informatie missen, zeker als deze slechtziend of blind zijn.' }), '\n', (0, o.jsx)(n.p, { children: 'Is deze constructie toch dringend gewenst: Geef aan als er meer formuliervelden of links of buttons volgen onder de submitbutton.' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e);
   }
   function d(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, o.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, o.jsx)(n.li, { children: (0, o.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Zorg voor een logische volgorde van de informatie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Logische volgorde', pagination_label: 'Logische volgorde', description: 'Richtlijnen om informatie in een logische volgorde te tonen.', slug: '/richtlijnen/formulieren/visueel-ontwerp/logische-volgorde', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    g = {},
    m = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function v(e) {
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(a, {}), '\n', (0, o.jsx)(s.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v();
   }
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => l, RM: () => t });
   var r = i(86070),
    o = i(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
