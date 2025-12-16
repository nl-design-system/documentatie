'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [76285],
 {
  78734: (e, n, i) => {
   i.d(n, { Ay: () => s, RM: () => o });
   var r = i(86070),
    t = i(85248);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function a(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => a, x: () => s });
   var r = i(30758);
   const t = {},
    o = r.createContext(t);
   function a(e) {
    const n = r.useContext(o);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : a(e.components)), r.createElement(o.Provider, { value: n }, e.children);
   }
  },
  92602: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => m, default: () => j, frontMatter: () => h, metadata: () => r, toc: () => g });
   const r = JSON.parse('{"id":"richtlijnen/formulieren/questions/needed/README","title":"Check of informatie \xe8cht nodig is \xb7 Uit te vragen informatie in een formulier \xb7 Richtlijnen","description":"Richtlijnen over checken of informatie \xe8cht nodig is.","source":"@site/docs/richtlijnen/formulieren/questions/2-needed/README.mdx","sourceDirName":"richtlijnen/formulieren/questions/2-needed","slug":"/richtlijnen/formulieren/vragen/check-noodzaak","permalink":"/richtlijnen/formulieren/vragen/check-noodzaak","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/questions/2-needed/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Check of informatie \xe8cht nodig is \xb7 Uit te vragen informatie in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Waarom is informatie nodig","pagination_label":"Waarom is informatie nodig","description":"Richtlijnen over checken of informatie \xe8cht nodig is.","slug":"/richtlijnen/formulieren/vragen/check-noodzaak","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Waarom stel je de vraag","permalink":"/richtlijnen/formulieren/vragen/leg-uit-waarom"},"next":{"title":"Bied contactmogelijkheden","permalink":"/richtlijnen/formulieren/vragen/manieren-voor-contact"}}');
   var t = i(86070),
    o = i(85248),
    a = i(78734);
   function s(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s();
   }
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'check-of-informatie-\xe8cht-nodig-is', children: 'Check of informatie \xe8cht nodig is' }) }), '\n', (0, t.jsx)(n.p, { children: 'Kortere formulieren kunnen sneller worden ingevuld. Ga dus per vraag na of deze informatie echt nodig is.' }), '\n', (0, t.jsx)(n.p, { children: 'Zo is het vaak onnodig om te vragen naar een straatnaam, als huisnummer en postcode al bekend zijn. Is het echt belangrijk om te weten of iemand een man/vrouw/andere is?' }), '\n', (0, t.jsxs)(n.p, { children: ['Is het nodig voor het afhandelen van het formulier dat gebruiker via DigiD inlogt, zodat ook het burgerservicenummer van de verzender bekend wordt? ', (0, t.jsx)(n.a, { href: 'https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/welke-organisaties-mogen-mijn-burgerservicenummer-bsn-gebruiken#:~:text=Alle%20overheidsorganisaties%20mogen%20gebruik%20maken%20van%20uw%20burgerservicenummer%20(BSN).', children: 'Uitvragen van een BSN' }), ' is aan wettelijke richtlijnen gebonden.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
   const h = { title: 'Check of informatie \xe8cht nodig is \xb7 Uit te vragen informatie in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Waarom is informatie nodig', pagination_label: 'Waarom is informatie nodig', description: 'Richtlijnen over checken of informatie \xe8cht nodig is.', slug: '/richtlijnen/formulieren/vragen/check-noodzaak', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    u = {},
    g = [...a.RM];
   function f(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(a.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f();
   }
  },
 },
]);
