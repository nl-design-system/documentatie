'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [42754],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => l });
   var r = i(30758);
   const t = {},
    o = r.createContext(t);
   function s(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(o.Provider, { value: n }, e.children));
   }
  },
  25947(e, n, i) {
   (i.r(n), i.d(n, { assets: () => p, contentTitle: () => g, default: () => v, frontMatter: () => m, metadata: () => r, toc: () => j }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/description/length/README","title":"Houd de description kort en to-the-point","description":"Richtlijnen voor lengte van beschrijvingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/description/7-length/README.mdx","sourceDirName":"richtlijnen/formulieren/description/7-length","slug":"/richtlijnen/formulieren/descriptions/lengte","permalink":"/richtlijnen/formulieren/descriptions/lengte","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/7-length/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Houd de description kort en to-the-point","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Lengte description","pagination_label":"Lengte description","description":"Richtlijnen voor lengte van beschrijvingen in een formulier.","slug":"/richtlijnen/formulieren/descriptions/lengte","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Grootte aanklikbaar gedeelte","permalink":"/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte"},"next":{"title":"Foutmeldingen","permalink":"/richtlijnen/formulieren/foutmeldingen/"}}');
   var t = i(86070),
    o = i(18439),
    s = i(78734);
   function l(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l();
   }
   function d(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'houd-de-description-kort-en-to-the-point', children: 'Houd de description kort en to-the-point' }) }), '\n', (0, t.jsx)(n.p, { children: 'Heb je erg veel tekst nodig om het formulier goed in te vullen, vermeld deze tekst dan boven het formulier of op een introductiepagina voordat een gebruiker het formulier gaat invullen.' }), '\n', (0, t.jsx)(n.p, { children: "Soms is het niet te voorkomen dat een formulier jargon bevat, bijvoorbeeld omdat termen wettelijk zijn vastgelegd. Leg in zulke gevallen duidelijk uit wat zo'n term betekent." }), '\n', (0, t.jsxs)(n.p, { children: ['Als informatie als losse tekstblokken tussen de vragen staat, bestaat de kans dat een gebruiker van een ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' deze informatie mist.'] }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik liever geen tooltips, dan maak je het voor de gebruiker moeilijker om belangrijke informatie te lezen. Het vergt een extra klik (of toetsenbordaanslagen) en wordt niet door alle gebruikers goed begrepen. Als het echt belangrijk is, laat de informatie dan meteen zien.' })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.6/', children: 'Succescriterium 2.4.6 Koppen en labels' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.1.3/', children: 'Succescriterium 3.1.3 Ongebruikelijke woorden' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
   const m = { title: 'Houd de description kort en to-the-point', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Lengte description', pagination_label: 'Lengte description', description: 'Richtlijnen voor lengte van beschrijvingen in een formulier.', slug: '/richtlijnen/formulieren/descriptions/lengte', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    p = {},
    j = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function f(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(a, {}), '\n', (0, t.jsx)(h, {}), '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f();
   }
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => l, RM: () => o });
   var r = i(86070),
    t = i(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
