'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [27918],
 {
  18439(e, n, r) {
   r.d(n, { R: () => o, x: () => s });
   var i = r(30758);
   const t = {},
    l = i.createContext(t);
   function o(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), i.createElement(l.Provider, { value: n }, e.children));
   }
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => s, RM: () => l });
   var i = r(86070),
    t = r(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  81321(e, n, r) {
   (r.r(n), r.d(n, { assets: () => h, contentTitle: () => m, default: () => p, frontMatter: () => d, metadata: () => i, toc: () => f }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/visual-design/use-of-color/README","title":"Geef fouten weer met meer dan alleen kleur","description":"Richtlijnen om fouten niet alleen met kleur aan te geven.","source":"@site/docs/richtlijnen/formulieren/visual-design/6-use-of-color/README.mdx","sourceDirName":"richtlijnen/formulieren/visual-design/6-use-of-color","slug":"/richtlijnen/formulieren/visueel-ontwerp/fout-niet-alleen-met-kleur","permalink":"/richtlijnen/formulieren/visueel-ontwerp/fout-niet-alleen-met-kleur","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/visual-design/6-use-of-color/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Geef fouten weer met meer dan alleen kleur","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Fouten niet kleurafhankelijk","pagination_label":"Fouten niet kleurafhankelijk","description":"Richtlijnen om fouten niet alleen met kleur aan te geven.","slug":"/richtlijnen/formulieren/visueel-ontwerp/fout-niet-alleen-met-kleur","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Invoerveld goed aanklikbaar","permalink":"/richtlijnen/formulieren/visueel-ontwerp/invoerveld-goed-aanklikbaar"},"next":{"title":"Geen afbeelding voor buttons","permalink":"/richtlijnen/formulieren/visueel-ontwerp/geen-afbeelding-voor-buttons"}}');
   var t = r(86070),
    l = r(18439),
    o = r(78734);
   function s(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'geef-fouten-weer-met-meer-dan-alleen-kleur', children: 'Geef fouten weer met meer dan alleen kleur' }) }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik van iconen en kleur bij foutmeldingen is goed voor de duidelijkheid, maar zorg ook altijd voor tekstuele foutmeldingen. Niet iedereen kan alle kleuren zien of begrijpt de icoontjes goed.' }), '\n', (0, t.jsxs)(n.p, { children: ['Vermeld de foutmeldingen in beschrijvende tekst. Hoe dit te doen is uitgebreid beschreven bij de richtlijnen over ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/voorkom-fouten/', children: 'Voorkom fouten' }), ' en ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'Foutmeldingen' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.4.1/', children: 'Succescriterium 1.4.1 Gebruik van kleur' }) }), '\n'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const d = { title: 'Geef fouten weer met meer dan alleen kleur', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Fouten niet kleurafhankelijk', pagination_label: 'Fouten niet kleurafhankelijk', description: 'Richtlijnen om fouten niet alleen met kleur aan te geven.', slug: '/richtlijnen/formulieren/visueel-ontwerp/fout-niet-alleen-met-kleur', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    h = {},
    f = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...o.RM];
   function j(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(a, {}), '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(o.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j();
   }
  },
 },
]);
