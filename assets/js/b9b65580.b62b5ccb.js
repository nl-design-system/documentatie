'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [44182],
 {
  78734: (e, n, t) => {
   t.d(n, { Ay: () => l, RM: () => r });
   var i = t(86070),
    o = t(85248);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  80692: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => h, contentTitle: () => m, default: () => j, frontMatter: () => u, metadata: () => i, toc: () => p });
   const i = JSON.parse('{"id":"richtlijnen/stijl/space/boxing-model/README","title":"Werk en denk vanuit het box model \xb7 Ruimte \xb7 Richtlijnen","description":"De spacing concepten van NL Design System zijn gebouwd rond het fundamentele layout-principe van CSS, ook wel bekend als het \u2018box model\u2019.","source":"@site/docs/richtlijnen/stijl/space/2-boxing-model/README.mdx","sourceDirName":"richtlijnen/stijl/space/2-boxing-model","slug":"/richtlijnen/stijl/ruimte/box-model","permalink":"/richtlijnen/stijl/ruimte/box-model","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/space/2-boxing-model/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Werk en denk vanuit het box model \xb7 Ruimte \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Box model","pagination_label":"Werk en denk vanuit het box model","description":"De spacing concepten van NL Design System zijn gebouwd rond het fundamentele layout-principe van CSS, ook wel bekend als het \u2018box model\u2019.","slug":"/richtlijnen/stijl/ruimte/box-model","keywords":["kleurcontrast","tekst"]},"sidebar":"richtlijnen","previous":{"title":"Maak gebruik van een spacing scale","permalink":"/richtlijnen/stijl/ruimte/spacing-scale"},"next":{"title":"Maak gebruik van de spacing concepten","permalink":"/richtlijnen/stijl/ruimte/spacing-concepten"}}');
   var o = t(86070),
    r = t(85248),
    s = t(78734);
   function l(e) {
    return (0, o.jsx)(o.Fragment, {});
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l();
   }
   function a(e) {
    const n = { a: 'a', img: 'img', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(n.p, { children: ['De ', (0, o.jsx)(n.a, { href: '#spacing-concepten', children: 'spacing concepten' }), ' van NL Design System zijn gebouwd rond het fundamentele layout-principe van CSS, ook wel bekend als het \u2018box model\u2019.'] }), '\n', (0, o.jsx)(n.p, { children: 'Alle elementen van een webpagina staan in een box, een rechthoek die het element omsluit.' }), '\n', (0, o.jsx)(n.p, { children: (0, o.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_box-model.png', alt: 'Box model structuur met een grotere box die de margin vertegenwoordigt rond een kleinere box die de content voorstelt met zijn padding en border.' }) }), '\n', (0, o.jsx)(n.p, { children: 'Uitleg:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: "Inhoud ofwel 'content' is de ruimte voor tekst, een plaatje of andere elementen." }), '\n', (0, o.jsx)(n.li, { children: 'Border is de rand om de content.' }), '\n', (0, o.jsx)(n.li, { children: 'Padding is de ruimte tussen de content en de border. Zonder padding zou de border strak om de content zitten. Padding heeft dezelfde achtergrondkleur als de content.' }), '\n', (0, o.jsx)(n.li, { children: "Marge ofwel 'Margin' is het deel buiten de border van de box. Margin zorgt voor ruimte tussen aangrenzende boxen. Margin is transparant, heeft geen eigen kleur. Margin draagt niet bij aan de breedte van een element." }), '\n'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
   const u = { title: 'Werk en denk vanuit het box model \xb7 Ruimte \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Box model', pagination_label: 'Werk en denk vanuit het box model', description: 'De spacing concepten van NL Design System zijn gebouwd rond het fundamentele layout-principe van CSS, ook wel bekend als het \u2018box model\u2019.', slug: '/richtlijnen/stijl/ruimte/box-model', keywords: ['kleurcontrast', 'tekst'] },
    m = 'Werk en denk vanuit het box model',
    h = {},
    p = [...s.RM];
   function g(e) {
    const n = { h1: 'h1', header: 'header', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'werk-en-denk-vanuit-het-box-model', children: 'Werk en denk vanuit het box model' }) }), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(d, {}), '\n', (0, o.jsx)(s.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => s, x: () => l });
   var i = t(30758);
   const o = {},
    r = i.createContext(o);
   function s(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), i.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
