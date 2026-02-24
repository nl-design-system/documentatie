'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [91488],
 {
  18368(e, n, i) {
   (i.r(n), i.d(n, { assets: () => c, contentTitle: () => a, default: () => m, frontMatter: () => d, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/keyboard-behaviour/README","title":"Toetsenbordnavigatie in een formulier \xb7 Richtlijnen","description":"Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.","source":"@site/docs/richtlijnen/formulieren/keyboard-behaviour/README.mdx","sourceDirName":"richtlijnen/formulieren/keyboard-behaviour","slug":"/richtlijnen/formulieren/toetsenbord/","permalink":"/richtlijnen/formulieren/toetsenbord/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/keyboard-behaviour/README.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Toetsenbordnavigatie in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Introductie toetsenbordnavigatie","sidebar_position":10,"pagination_label":"Toetsenbord","description":"Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.","slug":"/richtlijnen/formulieren/toetsenbord/","keywords":["informatie","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Placeholder kleurcontrast","permalink":"/richtlijnen/formulieren/placeholders/kleurcontrast"},"next":{"title":"Toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/"}}');
   var r = i(86070),
    o = i(18439),
    s = i(78734),
    l = i(67414);
   const d = { title: 'Toetsenbordnavigatie in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie toetsenbordnavigatie', sidebar_position: 10, pagination_label: 'Toetsenbord', description: 'Het formulier moet goed werken met alleen een toetsenbord, zonder gebruik te maken van een muis.', slug: '/richtlijnen/formulieren/toetsenbord/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    a = 'Richtlijnen NL Design System voor toetsenbordtoegankelijkheid',
    c = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }, { value: 'Documentatie over hoe formuliervelden moeten werken met het toetsenbord:', id: 'documentatie-over-hoe-formuliervelden-moeten-werken-met-het-toetsenbord', level: 2 }, ...s.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-toetsenbordtoegankelijkheid', children: 'Richtlijnen NL Design System voor toetsenbordtoegankelijkheid' }) }), '\n', (0, r.jsx)(n.p, { children: 'Een formulier moet goed werken en goed te begrijpen zijn voor een toetsenbordgebruiker.' }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(i, { excludeDocIDs: ['richtlijnen/formulieren/keyboard-behaviour/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(l.T, { id: 'zorg-dat-het-formulier-werkt-met-een-toetsenbord', children: (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie/', children: 'Zorg dat het formulier werkt met een toetsenbord' }) }) }), '\n', (0, r.jsx)(l.T, { id: 'gebruik-geen-positieve-tabindex', children: (0, r.jsx)(n.p, { children: (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/tabindex/', children: 'Gebruik geen positieve tabindex' }) }) }), '\n', (0, r.jsx)(n.h2, { id: 'documentatie-over-hoe-formuliervelden-moeten-werken-met-het-toetsenbord', children: 'Documentatie over hoe formuliervelden moeten werken met het toetsenbord:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/', children: 'Keyboard Accessibility' }), ' van WebAIM.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/', children: 'A Guide To Keyboard Accessibility: HTML And CSS' }), ' by Cristian D\xedaz in Smashing Magazine.'] }), '\n'] }), '\n', (0, r.jsx)(s.Ay, {})] })
    );
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
  },
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => l });
   var t = i(30758);
   const r = {},
    o = t.createContext(r);
   function s(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  67414(e, n, i) {
   i.d(n, { T: () => o });
   var t = i(13526),
    r = i(86070);
   const o = ({ children: e, className: n, ...i }) => (0, r.jsx)('div', { ...i, className: (0, t.A)('nlds-fragment-redirect', n), children: e });
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => l, RM: () => o });
   var t = i(86070),
    r = i(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
