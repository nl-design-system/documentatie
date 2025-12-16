'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [3176],
 {
  78734: (e, n, t) => {
   t.d(n, { Ay: () => o, RM: () => s });
   var i = t(86070),
    r = t(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
  },
  83578: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => h, contentTitle: () => u, default: () => v, frontMatter: () => d, metadata: () => i, toc: () => p });
   const i = JSON.parse('{"id":"richtlijnen/stijl/space/interactive/README","title":"Reserveer ruimte tussen interactieve elementen \xb7 Ruimte \xb7 Richtlijnen","description":"Om ruimte consistent toe te passen is het verstandig om te werken met een vaste set aan waardes die oplopen in grootte. Een zogenoemde spacing scale.","source":"@site/docs/richtlijnen/stijl/space/7-interactive/README.mdx","sourceDirName":"richtlijnen/stijl/space/7-interactive","slug":"/richtlijnen/stijl/ruimte/interactieve-elementen","permalink":"/richtlijnen/stijl/ruimte/interactieve-elementen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/space/7-interactive/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Reserveer ruimte tussen interactieve elementen \xb7 Ruimte \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Interactieve elementen","pagination_label":"Reserveer ruimte tussen interactieve elementen","description":"Om ruimte consistent toe te passen is het verstandig om te werken met een vaste set aan waardes die oplopen in grootte. Een zogenoemde spacing scale.","slug":"/richtlijnen/stijl/ruimte/interactieve-elementen","keywords":["kleurcontrast","tekst"]},"sidebar":"richtlijnen","previous":{"title":"Stem het gebruik van ruimte af op de functie en inhoud","permalink":"/richtlijnen/stijl/ruimte/ruim-compact"},"next":{"title":"Introductie richtlijnen voor iconen","permalink":"/richtlijnen/stijl/iconen/"}}');
   var r = t(86070),
    s = t(85248),
    a = t(78734);
   function o(e) {
    return (0, r.jsx)(r.Fragment, {});
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o();
   }
   function l(e) {
    const n = { em: 'em', img: 'img', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Hoewel WCAG wel een richtlijnen heeft voor de grootte van het aanwijsgebied (', (0, r.jsx)(n.em, { children: 'target size' }), '), wordt er niets vermeld over ruimte tussen interactieve elementen. Toch is het aan te raden om tussen interactieve elementen wat ruimte te reserveren. Op die manier neemt de kans om onbedoeld iets te activeren af.'] }), '\n', (0, r.jsx)(n.p, { children: 'Voor iemand met een bevende hand kan een website lastiger te gebruiken zijn als grote delen van het scherm interactief (button of link) zijn.' }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_interactieve-elementen.png', alt: "Drie verticaal gestapelde vlakken met daarin het woord 'Interactie element'. Tussen deze vlakken bevindt zich een lege ruimte met de tekst 'witruimte'" }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
   const d = { title: 'Reserveer ruimte tussen interactieve elementen \xb7 Ruimte \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Interactieve elementen', pagination_label: 'Reserveer ruimte tussen interactieve elementen', description: 'Om ruimte consistent toe te passen is het verstandig om te werken met een vaste set aan waardes die oplopen in grootte. Een zogenoemde spacing scale.', slug: '/richtlijnen/stijl/ruimte/interactieve-elementen', keywords: ['kleurcontrast', 'tekst'] },
    u = 'Reserveer ruimte tussen interactieve elementen',
    h = {},
    p = [...a.RM];
   function j(e) {
    const n = { h1: 'h1', header: 'header', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'reserveer-ruimte-tussen-interactieve-elementen', children: 'Reserveer ruimte tussen interactieve elementen' }) }), '\n', (0, r.jsx)(m, {}), '\n', (0, r.jsx)(c, {}), '\n', (0, r.jsx)(a.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
   }
  },
  85248: (e, n, t) => {
   t.d(n, { R: () => a, x: () => o });
   var i = t(30758);
   const r = {},
    s = i.createContext(r);
   function a(e) {
    const n = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), i.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
