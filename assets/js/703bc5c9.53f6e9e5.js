'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [76341],
 {
  78734: (e, n, i) => {
   i.d(n, { Ay: () => o, RM: () => s });
   var t = i(86070),
    r = i(85248);
   const s = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => o });
   var t = i(30758);
   const r = {},
    s = t.createContext(r);
   function l(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
  95508: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => a, default: () => f, frontMatter: () => c, metadata: () => t, toc: () => p });
   const t = JSON.parse('{"id":"richtlijnen/formulieren/fieldset/description/README","title":"Descriptions in een fieldset \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor descriptions in een fieldset in een formulier.","source":"@site/docs/richtlijnen/formulieren/fieldset/2-description/README.mdx","sourceDirName":"richtlijnen/formulieren/fieldset/2-description","slug":"/richtlijnen/formulieren/fieldsets/descriptions","permalink":"/richtlijnen/formulieren/fieldsets/descriptions","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/fieldset/2-description/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Descriptions in een fieldset \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Descriptions in een fieldset","pagination_label":"Descriptions in een fieldset","description":"Richtlijnen voor descriptions in een fieldset in een formulier.","slug":"/richtlijnen/formulieren/fieldsets/descriptions","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Legends in een fieldset","permalink":"/richtlijnen/formulieren/fieldsets/legends"},"next":{"title":"Labels in een formulier","permalink":"/richtlijnen/formulieren/labels/"}}');
   var r = i(86070),
    s = i(85248),
    l = i(78734);
   function o(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', header: 'header', p: 'p', pre: 'pre', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'descriptions-bij-een-fieldset', children: 'Descriptions bij een fieldset' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Plaats de description onder de legend vlak boven het eerste label/formulierveld. De description kan aan het ', (0, r.jsx)(n.code, { children: 'fieldset' }), '-element worden gekoppeld met ', (0, r.jsx)(n.code, { children: 'aria-describedby' }), '.'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<fieldset aria-describedby="description-inloggen">\n  <legend>Wilt u inloggen?</legend>\n  <p id="description-inloggen">Als u inlogt worden uw gegevens al ingevuld en kunnen we u makkelijker helpen.</p>\n  [...]\n</fieldset>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Dit is ook beschreven in de ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/descriptions/', children: 'richtlijnen voor descriptions' }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
   }
   const c = { title: 'Descriptions in een fieldset \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Descriptions in een fieldset', pagination_label: 'Descriptions in een fieldset', description: 'Richtlijnen voor descriptions in een fieldset in een formulier.', slug: '/richtlijnen/formulieren/fieldsets/descriptions', keywords: ['labels', 'formulier', 'design', 'code'] },
    a = void 0,
    u = {},
    p = [...l.RM];
   function h(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(l.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h();
   }
  },
 },
]);
