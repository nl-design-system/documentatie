'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [7755],
 {
  18439(e, n, i) {
   i.d(n, { R: () => l, x: () => c });
   var r = i(30758);
   const s = {},
    t = r.createContext(s);
   function l(e) {
    const n = r.useContext(t);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), r.createElement(t.Provider, { value: n }, e.children));
   }
  },
  73767(e, n, i) {
   (i.r(n), i.d(n, { assets: () => m, contentTitle: () => u, default: () => p, frontMatter: () => g, metadata: () => r, toc: () => h }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/confirmation/accessibility/README","title":"Maak de succesmelding toegankelijk voor alle gebruikers \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen","description":"Richtlijnen voor succesmelding die toegankelijk is voor alle gebruikers.","source":"@site/docs/richtlijnen/formulieren/confirmation/2-accessibility/README.mdx","sourceDirName":"richtlijnen/formulieren/confirmation/2-accessibility","slug":"/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding","permalink":"/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/confirmation/2-accessibility/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Maak de succesmelding toegankelijk voor alle gebruikers \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toegankelijke succesmelding","pagination_label":"Toegankelijke succesmelding","description":"Richtlijnen voor succesmelding die toegankelijk is voor alle gebruikers.","slug":"/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Bevestigingspagina","permalink":"/richtlijnen/formulieren/bevestigingspagina/"},"next":{"title":"Benoem vervolgstappen","permalink":"/richtlijnen/formulieren/bevestigingspagina/vervolgstappen"}}');
   var s = i(86070),
    t = i(18439),
    l = i(78734);
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'maak-de-succesmelding-toegankelijk-voor-alle-gebruikers', children: 'Maak de succesmelding toegankelijk voor alle gebruikers' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Net zoals bij de foutmeldingen is het belangrijk dat de gebruiker de succesmelding ziet en/of hoort. Dit kan met dezelfde technieken die zijn beschrijven bij de richtlijnen voor ', (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/', children: 'foutmeldingen' }), ' zoals:'] }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Feedback van ', (0, s.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreaders' }), ' en focusmanagement na submit.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Update van de ', (0, s.jsx)(n.code, { children: '<title>' }), ' in het ', (0, s.jsx)(n.code, { children: '<head>' }), '-element.'] }), '\n'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
   }
   function a(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.2/', children: 'Succescriterium 2.4.2 Paginatitel' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/4.1.3/', children: 'Succescriterium 4.1.3 Statusberichten' }) }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
   }
   const g = { title: 'Maak de succesmelding toegankelijk voor alle gebruikers \xb7 Bevestigingspagina van een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toegankelijke succesmelding', pagination_label: 'Toegankelijke succesmelding', description: 'Richtlijnen voor succesmelding die toegankelijk is voor alle gebruikers.', slug: '/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding', keywords: ['labels', 'formulier', 'design', 'code'] },
    u = void 0,
    m = {},
    h = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...l.RM];
   function j(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(o, {}), '\n', (0, s.jsx)(d, {}), '\n', (0, s.jsx)(l.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(j, { ...e }) }) : j();
   }
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => c, RM: () => t });
   var r = i(86070),
    s = i(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
