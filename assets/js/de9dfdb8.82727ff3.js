'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [86205],
 {
  78734: (e, n, t) => {
   t.d(n, { Ay: () => l, RM: () => i });
   var r = t(86070),
    o = t(85248);
   const i = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85151: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => h, default: () => f, frontMatter: () => g, metadata: () => r, toc: () => j });
   const r = JSON.parse('{"id":"richtlijnen/stijl/typography/line-spacing/README","title":"Zorg voor een comfortabele regelafstand \xb7 Typografie \xb7 Richtlijnen","description":"Een goed afgestelde regelafstand zorgt ervoor dat het oog op een vloeiende manier het einde van een regel kan koppelen aan het begin van de volgende.","source":"@site/docs/richtlijnen/stijl/typography/2-line-spacing/README.mdx","sourceDirName":"richtlijnen/stijl/typography/2-line-spacing","slug":"/richtlijnen/stijl/typografie/regelafstand","permalink":"/richtlijnen/stijl/typografie/regelafstand","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/typography/2-line-spacing/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg voor een comfortabele regelafstand \xb7 Typografie \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Comfortabele regelafstand","pagination_label":"Zorg voor een comfortabele regelafstand","description":"Een goed afgestelde regelafstand zorgt ervoor dat het oog op een vloeiende manier het einde van een regel kan koppelen aan het begin van de volgende.","slug":"/richtlijnen/stijl/typografie/regelafstand","keywords":["regelafstand"]},"sidebar":"richtlijnen","previous":{"title":"Zorg ervoor dat letters groot genoeg zijn","permalink":"/richtlijnen/stijl/typografie/lettergrootte"},"next":{"title":"Zorg voor een comfortabele regellengte","permalink":"/richtlijnen/stijl/typografie/regellengte"}}');
   var o = t(86070),
    i = t(85248),
    a = t(78734);
   function l(e) {
    return (0, o.jsx)(o.Fragment, {});
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l();
   }
   function d(e) {
    const n = { code: 'code', img: 'img', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsxs)(n.p, { children: ['Een goed afgestelde regelafstand zorgt ervoor dat het oog op een vloeiende manier het einde van een regel kan koppelen aan het begin van de volgende. Regelafstand wordt ook wel ', (0, o.jsx)(n.code, { children: 'line-height' }), ' of \u2018Leading\u2019 genoemd.'] }), '\n', (0, o.jsx)(n.p, { children: (0, o.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_regelafstand.png', alt: 'Paragrafen met verschillende regelaftanden. De eerste te kort, de tweede te lang, de derde goed. Bij de eerste twee paragrafen staat een rood kruis.' }) }), '\n', (0, o.jsxs)(n.p, { children: ['Standaard gebruiken browsers een ', (0, o.jsx)(n.code, { children: 'line-height' }), ' van circa ', (0, o.jsx)(n.code, { children: '1.2' }), ', maar voor veel mensen is tekst met een hogere ', (0, o.jsx)(n.code, { children: 'line-height' }), ' beter leesbaar. De ideale ', (0, o.jsx)(n.code, { children: 'line-height' }), ' hangt af van verschillende factoren (lettertype, lettergrootte, regellengte, etc.) maar met een ', (0, o.jsx)(n.code, { children: 'line-height' }), ' tussen ', (0, o.jsx)(n.code, { children: '1.5' }), ' en ', (0, o.jsx)(n.code, { children: '2.0' }), ' zit je goed. Groter dan ', (0, o.jsx)(n.code, { children: '2.0' }), ' wordt minder leesbaar.'] }), '\n', (0, o.jsxs)(n.p, { children: ['We gebruiken geen unit notatie zoals ', (0, o.jsx)(n.code, { children: 'px' }), ' of ', (0, o.jsx)(n.code, { children: 'pt' }), ' voor ', (0, o.jsx)(n.code, { children: 'line-height' }), '. Dit is met opzet. Op deze manier schaalt de ', (0, o.jsx)(n.code, { children: 'line-height' }), ' keurig mee met elke lettergrootte.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Kleinere teksten hebben een ruimere ', (0, o.jsx)(n.code, { children: 'line-height' }), ' nodig. Grotere teksten zoals Kopteksten ofwel \u2018Headings\u2019 komen vaak weg met een compactere ', (0, o.jsx)(n.code, { children: 'line-height' }), '.'] }), '\n', (0, o.jsxs)(n.p, { children: ['In Figma is het niet mogelijk om ', (0, o.jsx)(n.code, { children: 'line-height' }), ' zonder unit notatie toe te passen. Daarom maken we binnen Figma gebruik van een percentage als unit (', (0, o.jsx)(n.code, { children: '1.5' }), ' = ', (0, o.jsx)(n.code, { children: '150%' }), '). Deze vertaling wordt gedaan op basis van het JSON-bestand dankzij Style Dictionary.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e);
   }
   const g = { title: 'Zorg voor een comfortabele regelafstand \xb7 Typografie \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Comfortabele regelafstand', pagination_label: 'Zorg voor een comfortabele regelafstand', description: 'Een goed afgestelde regelafstand zorgt ervoor dat het oog op een vloeiende manier het einde van een regel kan koppelen aan het begin van de volgende.', slug: '/richtlijnen/stijl/typografie/regelafstand', keywords: ['regelafstand'] },
    h = 'Zorg voor een comfortabele regelafstand',
    p = {},
    j = [...a.RM];
   function m(e) {
    const n = { h1: 'h1', header: 'header', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', '\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'zorg-voor-een-comfortabele-regelafstand', children: 'Zorg voor een comfortabele regelafstand' }) }), '\n', (0, o.jsx)(c, {}), '\n', (0, o.jsx)(s, {}), '\n', (0, o.jsx)(a.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(m, { ...e }) }) : m(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => a, x: () => l });
   var r = t(30758);
   const o = {},
    i = r.createContext(o);
   function a(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : a(e.components)), r.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
