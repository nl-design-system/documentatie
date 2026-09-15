'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [77397],
 {
  18439(e, n, i) {
   i.d(n, { R: () => a, x: () => l });
   var t = i(30758);
   const r = {},
    o = t.createContext(r);
   function a(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : a(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  56561(e, n, i) {
   i.d(n, { f: () => g });
   var t = i(15540),
    r = i(69967),
    o = i(86070),
    a = i(13526),
    l = i(30758),
    s = ['children', 'className', 'purpose'];
   function d(e, n) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      i.push.apply(i, t));
    }
    return i;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var i = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(i), !0).forEach(function (n) {
         (0, t.A)(e, n, i[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : d(Object(i)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
          });
    }
    return e;
   }
   var g = (0, l.forwardRef)(function (e, n) {
    var i = e.children,
     l = e.className,
     d = e.purpose,
     g = (0, r.A)(e, s);
    return (0, o.jsx)('p', c(c({ className: (0, a.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), l), ref: n }, g), {}, { children: 'lead' === d ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: i }) : i }));
   });
   g.displayName = 'Paragraph';
  },
  59292(e, n, i) {
   i.d(n, { f: () => t.f });
   var t = i(56561);
  },
  81712(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => s, default: () => m, frontMatter: () => l, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/veilige-werkomgeving","title":"Veilige werkomgeving","description":"Uitleg over een veilige werkomgeving voor NL Design System","source":"@site/docs/project/kwaliteitsaanpak/veilige-werkomgeving.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/project/kwaliteitsaanpak/veilige-werkomgeving","permalink":"/project/kwaliteitsaanpak/veilige-werkomgeving","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/veilige-werkomgeving.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Veilige werkomgeving","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Veilige werkomgeving","sidebar_position":3,"pagination_label":"Veilige werkomgeving","description":"Uitleg over een veilige werkomgeving voor NL Design System","keywords":["coc"]},"sidebar":"project","previous":{"title":"Introductie","permalink":"/project/kwaliteitsaanpak/"},"next":{"title":"Veilig werken","permalink":"/project/kwaliteitsaanpak/veilig-werken"}}');
   var r = i(86070),
    o = i(18439),
    a = i(59292);
   const l = { title: 'Veilige werkomgeving', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Veilige werkomgeving', sidebar_position: 3, pagination_label: 'Veilige werkomgeving', description: 'Uitleg over een veilige werkomgeving voor NL Design System', keywords: ['coc'] },
    s = 'Veilige werkomgeving',
    d = {},
    c = [
     { value: 'Community', id: 'community', level: 2 },
     { value: 'Zichtbaarheid van de Code of Conduct', id: 'zichtbaarheid-van-de-code-of-conduct', level: 2 },
    ];
   function g(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'veilige-werkomgeving', children: 'Veilige werkomgeving' }) }), '\n', (0, r.jsx)(a.f, { purpose: 'lead', children: (0, r.jsx)(n.p, { children: 'Respectvolle en constructieve communicatie is een essenti\xebel onderdeel van softwareontwikkeling, bij het bespreken van\nde product backlog en bij code reviews. De Code of Conduct helpt om te weten wat andere mensen nodig hebben om hun\nbeste werk te doen.' }) }), '\n', (0, r.jsx)(n.p, { children: 'Zorg voor een veilige werkomgeving, zodat je met open communicatie en effectieve samenwerking het beste resultaat kan\nbereiken. De gedragscode maakt duidelijk wat hier voor nodig is, en geeft het vertrouwen dat er een plan is voor\nhandhaving. Controleer periodiek dat iedereen zich veilig voelt, en verbeter de gedragscode en de handhaving op basis\ndie feedback.' }), '\n', (0, r.jsx)(n.h2, { id: 'community', children: 'Community' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik de Code of Conduct voor alle communicatie kanalen van NL Design System, inclusief de community. Zo zorgt het kernteam dat de communicatie tussen de "core contributors" met eigen prioriteiten en de community met hoge verwachtingen en uiteenlopende belangen respectvol verloopt.' }), '\n', (0, r.jsx)(n.p, { children: 'Vermijd druk vanuit de community om wijzigingen van onvoldoende kwaliteit door te voeren. Plaats het belang van een veilige werkomgeving en de belangen van de bredere community boven die van individuen.' }), '\n', (0, r.jsx)(n.h2, { id: 'zichtbaarheid-van-de-code-of-conduct', children: 'Zichtbaarheid van de Code of Conduct' }), '\n', (0, r.jsx)(n.p, { children: 'Deel de Code of Conduct in elk geval in plekken waar wordt samengewerkt met de community, bijvoorbeeld in chatkanalen, in websites waar comments geplaatst kunnen worden en bij events die worden georganiseerd.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Maak een ', (0, r.jsx)(n.code, { children: 'CODE_OF_CONDUCT.md' }), ' bestand in elke Git repository.'] }), '\n', (0, r.jsx)(n.li, { children: 'Noem de Code of Conduct in de beschrijving van Slack-kanalen, en maak een bookmark naar de volledige tekst.' }), '\n'] }), '\n', (0, r.jsxs)(n.p, { children: ['Gebruik de ', (0, r.jsxs)(n.a, { href: 'https://github.com/nl-design-system/example/blob/main/CODE_OF_CONDUCT.md', children: [(0, r.jsx)(n.code, { children: 'CODE_OF_CONDUCT.md' }), ' in de example repository'] }), ' als voorbeeld.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(g, { ...e }) }) : g(e);
   }
  },
 },
]);
