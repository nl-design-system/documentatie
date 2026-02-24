'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [37759],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => o });
   var r = i(30758);
   const t = {},
    l = r.createContext(t);
   function s(e) {
    const n = r.useContext(l);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), r.createElement(l.Provider, { value: n }, e.children));
   }
  },
  28961(e, n, i) {
   (i.r(n), i.d(n, { assets: () => a, contentTitle: () => d, default: () => m, frontMatter: () => o, metadata: () => r, toc: () => c }));
   const r = JSON.parse('{"id":"richtlijnen/formulieren/fieldset/README","title":"Fieldsets in een formulier \xb7 Richtlijnen","description":"Groepeer formuliervelden die bij elkaar horen in een fieldset met een beschrijvende legend.","source":"@site/docs/richtlijnen/formulieren/fieldset/README.mdx","sourceDirName":"richtlijnen/formulieren/fieldset","slug":"/richtlijnen/formulieren/fieldsets/","permalink":"/richtlijnen/formulieren/fieldsets/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/fieldset/README.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Fieldsets in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie fieldsets","sidebar_position":5,"pagination_label":"Fieldsets","description":"Groepeer formuliervelden die bij elkaar horen in een fieldset met een beschrijvende legend.","slug":"/richtlijnen/formulieren/fieldsets/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Screenreaderfeedback","permalink":"/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback"},"next":{"title":"Fieldsets","permalink":"/richtlijnen/formulieren/fieldsets/"}}');
   var t = i(86070),
    l = i(18439),
    s = i(78734);
   const o = { title: 'Fieldsets in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie fieldsets', sidebar_position: 5, pagination_label: 'Fieldsets', description: 'Groepeer formuliervelden die bij elkaar horen in een fieldset met een beschrijvende legend.', slug: '/richtlijnen/formulieren/fieldsets/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    d = 'Richtlijnen NL Design System voor fieldsets in een formulier',
    a = {},
    c = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, ...s.RM];
   function h(e) {
    const n = { code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, l.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-fieldsets-in-een-formulier', children: 'Richtlijnen NL Design System voor fieldsets in een formulier' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Groepeer formuliervelden die bij elkaar horen in een ', (0, t.jsx)(n.code, { children: '<fieldset>' }), ' met een beschrijvende ', (0, t.jsx)(n.code, { children: '<legend>' }), '.\nHet voordeel hiervan is dat je zo de velden visueel, maar ook in de code aan elkaar koppelt.'] }), '\n', (0, t.jsx)(n.p, { children: 'De legend dient als de naam van de groep.' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-html', children: '<fieldset>\n  <legend>Kies je maat</legend>\n  <input id="size-s" name="size" type="radio" value="small" />\n  <label for="size-s">Small</label>\n  <input id="size-m" name="size" type="radio" value="medium" />\n  <label for="size-m">Medium</label>\n  <input id="size-l" name="size" type="radio" value="large" />\n  <label for="size-l">Large</label>\n</fieldset>\n' }) }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(i, { excludeDocIDs: ['richtlijnen/formulieren/fieldset/README'] }), '\n', (0, t.jsx)(s.Ay, {})] })
    );
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => o, RM: () => l });
   var r = i(86070),
    t = i(18439);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
