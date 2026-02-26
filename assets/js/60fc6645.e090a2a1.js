'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [34105],
 {
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => l });
   var o = t(30758);
   const r = {},
    i = o.createContext(r);
   function s(e) {
    const n = o.useContext(i);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), o.createElement(i.Provider, { value: n }, e.children));
   }
  },
  52138(e, n, t) {
   (t.r(n), t.d(n, { assets: () => k, contentTitle: () => h, default: () => m, frontMatter: () => u, metadata: () => o, toc: () => j }));
   const o = JSON.parse('{"id":"richtlijnen/stijl/colour/contrast-non-text/README","title":"Zorg voor voldoende kleurcontrast voor niet-tekstuele content","description":"Zorg voor voldoende kleurcontrast tussen de achtergrondkleur en de kleur van componenten die visueel betekenis hebben.","source":"@site/docs/richtlijnen/stijl/colour/2-contrast-non-text/README.mdx","sourceDirName":"richtlijnen/stijl/colour/2-contrast-non-text","slug":"/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content","permalink":"/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/colour/2-contrast-non-text/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor voldoende kleurcontrast voor niet-tekstuele content","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Kleurcontrast voor niet-tekstuele content","pagination_label":"Voldoende kleurcontrast voor niet-tekstuele content","description":"Zorg voor voldoende kleurcontrast tussen de achtergrondkleur en de kleur van componenten die visueel betekenis hebben.","slug":"/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content","keywords":["iconen"]},"sidebar":"richtlijnen","previous":{"title":"Zorg voor voldoende kleurcontrast voor tekst","permalink":"/richtlijnen/stijl/kleuren/contrast-tekst"},"next":{"title":"Gebruik kleur met een doel","permalink":"/richtlijnen/stijl/kleuren/doel"}}');
   var r = t(86070),
    i = t(18439),
    s = t(78734);
   function l(e) {
    return (0, r.jsx)(r.Fragment, {});
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l();
   }
   function d(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.p, { children: 'Zorg voor voldoende kleurcontrast tussen de achtergrondkleur en de kleur van componenten die visueel betekenis hebben.' }), '\n', (0, r.jsx)(n.p, { children: 'Er zijn elementen die inhoud of betekenis hebben die voldoende contrast moeten hebben. Denk aan iconen, formulierelementen of datavisualisatie. Voor deze elementen zou het contrast tussen de voor- en achtergrondkleur 3:1 of groter moeten zijn.' }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-wcag-succescriteria', children: 'Gerelateerde WCAG-succescriteria:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.1/', children: '1.4.1 Gebruik van kleur' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.3/', children: '1.4.3 Contrast (minimum)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/1.4.11/', children: '1.4.11 Contrast van niet-tekstuele content' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Kleurcontrast voor niet-tekstuele content', pagination_label: 'Voldoende kleurcontrast voor niet-tekstuele content', description: 'Zorg voor voldoende kleurcontrast tussen de achtergrondkleur en de kleur van componenten die visueel betekenis hebben.', slug: '/richtlijnen/stijl/kleuren/contrast-niet-tekstuele-content', keywords: ['iconen'] },
    h = 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content',
    k = {},
    j = [{ value: 'Gerelateerde WCAG-succescriteria:', id: 'gerelateerde-wcag-succescriteria', level: 2 }, ...s.RM];
   function v(e) {
    const n = { h1: 'h1', header: 'header', ...(0, i.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'zorg-voor-voldoende-kleurcontrast-voor-niet-tekstuele-content', children: 'Zorg voor voldoende kleurcontrast voor niet-tekstuele content' }) }), '\n', (0, r.jsx)(a, {}), '\n', (0, r.jsx)(c, {}), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(v, { ...e }) }) : v(e);
   }
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => i });
   var o = t(86070),
    r = t(18439);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, o.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, o.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, o.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
