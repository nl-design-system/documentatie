'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [76341],
 {
  18439(e, n, i) {
   i.d(n, { R: () => l, x: () => o });
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
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), r.createElement(t.Provider, { value: n }, e.children));
   }
  },
  39070(e, n, i) {
   (i.r(n), i.d(n, { assets: () => p, contentTitle: () => h, default: () => j, frontMatter: () => u, metadata: () => r, toc: () => f }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/fieldset/description/README","title":"Descriptions in een fieldset","description":"Richtlijnen voor descriptions in een fieldset in een formulier.","source":"@site/docs/richtlijnen/formulieren/fieldset/2-description/README.mdx","sourceDirName":"richtlijnen/formulieren/fieldset/2-description","slug":"/richtlijnen/formulieren/fieldsets/descriptions","permalink":"/richtlijnen/formulieren/fieldsets/descriptions","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/fieldset/2-description/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Descriptions in een fieldset","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Descriptions in een fieldset","pagination_label":"Descriptions in een fieldset","description":"Richtlijnen voor descriptions in een fieldset in een formulier.","slug":"/richtlijnen/formulieren/fieldsets/descriptions","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Legends in een fieldset","permalink":"/richtlijnen/formulieren/fieldsets/legends"},"next":{"title":"Labels in een formulier","permalink":"/richtlijnen/formulieren/labels/"}}');
   var s = i(86070),
    t = i(18439),
    l = i(78734);
   function o(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', pre: 'pre', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'descriptions-bij-een-fieldset', children: 'Descriptions bij een fieldset' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Plaats de description onder de legend vlak boven het eerste label/formulierveld. De description kan aan het ', (0, s.jsx)(n.code, { children: 'fieldset' }), '-element worden gekoppeld met ', (0, s.jsx)(n.code, { children: 'aria-describedby' }), '.'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '<fieldset aria-describedby="description-inloggen">\n  <legend>Wilt u inloggen?</legend>\n  <p id="description-inloggen">Als u inlogt worden uw gegevens al ingevuld en kunnen we u makkelijker helpen.</p>\n  [...]\n</fieldset>\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Dit is ook beschreven in de ', (0, s.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'richtlijnen voor descriptions' }), '.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(o, { ...e }) }) : o(e);
   }
   function d(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, s.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.1/', children: 'Succescriterium 1.3.1 Info en relaties' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/1.3.2/', children: 'Succescriterium 1.3.2 Betekenisvolle volgorde' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, s.jsx)(n.li, { children: (0, s.jsx)(n.a, { href: '/wcag/3.3.2/', children: 'Succescriterium 3.3.2 Labels of instructies' }) }), '\n'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
   const u = { title: 'Descriptions in een fieldset', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Descriptions in een fieldset', pagination_label: 'Descriptions in een fieldset', description: 'Richtlijnen voor descriptions in een fieldset in een formulier.', slug: '/richtlijnen/formulieren/fieldsets/descriptions', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    p = {},
    f = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...l.RM];
   function m(e) {
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', (0, s.jsx)(c, {}), '\n', (0, s.jsx)(a, {}), '\n', (0, s.jsx)(l.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(m, { ...e }) }) : m();
   }
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => o, RM: () => t });
   var r = i(86070),
    s = i(18439);
   const t = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
