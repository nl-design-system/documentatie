'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [95095],
 {
  18439(e, n, r) {
   r.d(n, { R: () => l, x: () => s });
   var t = r(30758);
   const i = {},
    o = t.createContext(i);
   function l(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  65412(e, n, r) {
   (r.r(n), r.d(n, { assets: () => m, contentTitle: () => h, default: () => f, frontMatter: () => u, metadata: () => t, toc: () => p }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/error/timing/README","title":"Controleer op het juiste moment op fouten","description":"Richtlijnen voor controleren van fouten in een formulier.","source":"@site/docs/richtlijnen/formulieren/error/1-timing/README.mdx","sourceDirName":"richtlijnen/formulieren/error/1-timing","slug":"/richtlijnen/formulieren/foutmeldingen/controleren","permalink":"/richtlijnen/formulieren/foutmeldingen/controleren","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/1-timing/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Controleer op het juiste moment op fouten","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Fouten controleren","pagination_label":"Fouten controleren","description":"Richtlijnen voor controleren van fouten in een formulier.","slug":"/richtlijnen/formulieren/foutmeldingen/controleren","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Foutmeldingen","permalink":"/richtlijnen/formulieren/foutmeldingen/"},"next":{"title":"Fouten beschrijven","permalink":"/richtlijnen/formulieren/foutmeldingen/beschrijven"}}');
   var i = r(86070),
    o = r(18439),
    l = r(78734);
   function s(e) {
    const n = { a: 'a', em: 'em', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'controleer-op-het-juiste-moment-op-fouten', children: 'Controleer op het juiste moment op fouten' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Het is van belang ', (0, i.jsx)(n.em, { children: 'wanneer' }), ' een veld op fouten wordt gecheckt.'] }), '\n', (0, i.jsx)(n.p, { children: 'Stel, je typt een e-mailadres en na het invoeren van het eerste karakter verschijnt al een foutmelding "Ongeldig e-mailadres".' }), '\n', (0, i.jsx)(n.p, { children: 'Die melding verdwijnt pas als het hele e-mailadres is ingevuld. Dit is niet alleen irritant, het kan ook onzekerheid en verwarring veroorzaken. \u201cWat doe ik fout? Ik ben nog niet klaar met invullen en het is nu al fout!\u201d' }), '\n', (0, i.jsx)(n.p, { children: "Controleer een veld bijvoorbeeld als de gebruiker het veld heeft aangepast en daarna verlaat ('blur' en 'input') of wanneer het formulier wordt verzonden." }), '\n', (0, i.jsxs)(n.p, { children: ['Meer informatie over de bezwaren van "live" validatie: ', (0, i.jsx)(n.a, { href: 'https://adamsilver.io/blog/the-problem-with-live-validation-and-what-to-do-instead/', children: (0, i.jsx)('span', { lang: 'en', children: 'The problem with live validation and what to do instead' }) }), ' van Adam Silver.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
   function c(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, i.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'Succescriterium 3.3.1 Foutidentificatie' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/4.1.3/', children: 'Succescriterium 4.1.3 Statusberichten' }) }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e);
   }
   const u = { title: 'Controleer op het juiste moment op fouten', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Fouten controleren', pagination_label: 'Fouten controleren', description: 'Richtlijnen voor controleren van fouten in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/controleren', keywords: ['labels', 'formulier', 'design', 'code'] },
    h = void 0,
    m = {},
    p = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...l.RM];
   function j(e) {
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(a, {}), '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(l.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j();
   }
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => s, RM: () => o });
   var t = r(86070),
    i = r(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
