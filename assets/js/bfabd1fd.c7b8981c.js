'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [17197],
 {
  18439(e, n, r) {
   r.d(n, { R: () => s, x: () => l });
   var i = r(30758);
   const t = {},
    o = i.createContext(t);
   function s(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children));
   }
  },
  29082(e, n, r) {
   (r.r(n), r.d(n, { assets: () => h, contentTitle: () => m, default: () => f, frontMatter: () => u, metadata: () => i, toc: () => g }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/status/zoomed-in/README","title":"Informeer ingezoomde gebruikers","description":"Richtlijnen over het informeren van ingezoomde gebruikers.","source":"@site/docs/richtlijnen/formulieren/status/2-zoomed-in/README.mdx","sourceDirName":"richtlijnen/formulieren/status/2-zoomed-in","slug":"/richtlijnen/formulieren/status/zoom","permalink":"/richtlijnen/formulieren/status/zoom","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/status/2-zoomed-in/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Informeer ingezoomde gebruikers","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Informeer ingezoomde gebruikers","pagination_label":"Informeer ingezoomde gebruikers","description":"Richtlijnen over het informeren van ingezoomde gebruikers.","slug":"/richtlijnen/formulieren/status/zoom","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Informeer screenreaders","permalink":"/richtlijnen/formulieren/status/screenreaders"},"next":{"title":"Geef gebruikers voldoende tijd","permalink":"/richtlijnen/formulieren/status/enough-time"}}');
   var t = r(86070),
    o = r(18439),
    s = r(78734);
   function l(e) {
    const n = { h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'informeer-ingezoomde-gebruikers-over-het-statusbericht', children: 'Informeer ingezoomde gebruikers over het statusbericht' }) }), '\n', (0, t.jsx)(n.p, { children: 'Als een statusbericht visueel niet in de buurt staat van het element waar de melding bij hoort, kan deze worden gemist door gebruikers die zijn ingezoomd.' }), '\n', (0, t.jsx)(n.p, { children: 'Zet bij elkaar wat bij elkaar hoort. Is er een statusbericht, zet deze dan vlak bij waar de gebruiker op dat moment aan het werk is. Zodat het bericht in beeld is voor ingezoomde gebruikers.' }), '\n', (0, t.jsx)(n.p, { children: 'Zet dynamisch gegenereerde meldingen voor een formulier altijd vlak bij het formulierveld of bijvoorbeeld bovenaan de pagina, afhankelijk van waar en wanneer de foutmelding getoond wordt. Zoals de melding over het totaal aantal ingevoerde karakters voor een tekstveld of de totaalprijs in een berekening.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
   function c(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.4.10/', children: 'Succescriterium 1.4.10 Reflow' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/4.1.3/', children: 'Succescriterium 4.1.3 Statusberichten' }) }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(c, { ...e }) }) : c(e);
   }
   const u = { title: 'Informeer ingezoomde gebruikers', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Informeer ingezoomde gebruikers', pagination_label: 'Informeer ingezoomde gebruikers', description: 'Richtlijnen over het informeren van ingezoomde gebruikers.', slug: '/richtlijnen/formulieren/status/zoom', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    h = {},
    g = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function j(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(a, {}), '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j();
   }
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => l, RM: () => o });
   var i = r(86070),
    t = r(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
