'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [70766],
 {
  18439(e, n, r) {
   r.d(n, { R: () => i, x: () => s });
   var t = r(30758);
   const a = {},
    o = t.createContext(a);
   function i(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : i(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  41534(e, n, r) {
   function t(e, n) {
    if (null == e) return {};
    var r,
     t,
     a = (function (e, n) {
      if (null == e) return {};
      var r = {};
      for (var t in e)
       if ({}.hasOwnProperty.call(e, t)) {
        if (-1 !== n.indexOf(t)) continue;
        r[t] = e[t];
       }
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (t = 0; t < o.length; t++) ((r = o[t]), -1 === n.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
    }
    return a;
   }
   r.d(n, { A: () => t });
  },
  48171(e, n, r) {
   function t(e) {
    return (
     (t =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     t(e)
    );
   }
   function a(e) {
    var n = (function (e, n) {
     if ('object' != t(e) || !e) return e;
     var r = e[Symbol.toPrimitive];
     if (void 0 !== r) {
      var a = r.call(e, n || 'default');
      if ('object' != t(a)) return a;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == t(n) ? n : n + '';
   }
   function o(e, n, r) {
    return ((n = a(n)) in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e);
   }
   r.d(n, { A: () => o });
  },
  59292(e, n, r) {
   r.d(n, { f: () => t.f });
   var t = r(71544);
  },
  71544(e, n, r) {
   r.d(n, { f: () => p });
   var t = r(48171),
    a = r(41534),
    o = r(86070),
    i = r(13526),
    s = r(30758),
    d = ['children', 'className', 'purpose'];
   function l(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var t = Object.getOwnPropertySymbols(e);
     (n &&
      (t = t.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      r.push.apply(r, t));
    }
    return r;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var r = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? l(Object(r), !0).forEach(function (n) {
         (0, t.A)(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : l(Object(r)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
   }
   var p = (0, s.forwardRef)(function (e, n) {
    var r = e.children,
     s = e.className,
     l = e.purpose,
     p = (0, a.A)(e, d);
    return (0, o.jsx)('p', c(c({ className: (0, i.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === l), s), ref: n }, p), {}, { children: 'lead' === l ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: r }) : r }));
   });
   p.displayName = 'Paragraph';
  },
  88839(e, n, r) {
   (r.r(n), r.d(n, { assets: () => l, contentTitle: () => d, default: () => m, frontMatter: () => s, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"handboek/developer/aan-de-slag/prototypes/cdn-migratie","title":"Migreer van een CDN naar pnpm","description":"Wanneer een prototype dat met een CDN is gebouwd naar productie gaat is het goed naar pnpm te migreren. Hier lees je hoe dat kan.","source":"@site/docs/handboek/developer/02-aan-de-slag/01-prototypes/03-cdn-migratie.mdx","sourceDirName":"handboek/developer/02-aan-de-slag/01-prototypes","slug":"/handboek/developer/cdn-migratie/","permalink":"/handboek/developer/cdn-migratie/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/02-aan-de-slag/01-prototypes/03-cdn-migratie.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Migreer van een CDN naar pnpm","description":"Wanneer een prototype dat met een CDN is gebouwd naar productie gaat is het goed naar pnpm te migreren. Hier lees je hoe dat kan.","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Migreer van een CDN naar pnpm","pagination_label":"Migreer van een CDN naar pnpm","slug":"/handboek/developer/cdn-migratie/"},"sidebar":"handboek","previous":{"title":"CDN gebruiken","permalink":"/handboek/developer/cdn/"},"next":{"title":"Conventies","permalink":"/handboek/developer/conventies/"}}');
   var a = r(86070),
    o = r(18439),
    i = r(59292);
   const s = { title: 'Migreer van een CDN naar pnpm', description: 'Wanneer een prototype dat met een CDN is gebouwd naar productie gaat is het goed naar pnpm te migreren. Hier lees je hoe dat kan.', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Migreer van een CDN naar pnpm', pagination_label: 'Migreer van een CDN naar pnpm', slug: '/handboek/developer/cdn-migratie/' },
    d = 'Migreer van een CDN naar pnpm',
    l = {},
    c = [
     { value: 'Dependencies installeren', id: 'dependencies-installeren', level: 3 },
     { value: 'Web Fonts installeren', id: 'web-fonts-installeren', level: 3 },
     { value: 'CSS en Web Fonts migreren', id: 'css-en-web-fonts-migreren', level: 3 },
     { value: 'JavaScript migreren', id: 'javascript-migreren', level: 3 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h3: 'h3', header: 'header', p: 'p', pre: 'pre', ...(0, o.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'migreer-van-een-cdn-naar-pnpm', children: 'Migreer van een CDN naar pnpm' }) }), '\n', (0, a.jsx)(i.f, { purpose: 'lead', children: (0, a.jsx)(n.p, { children: 'De dependencies op de aanbevolen manier installeren via pnpm is \xe9\xe9n van de eerste stappen wanneer je het prototype gaat doorontwikkelen.' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Zoek alle plekken waar je de ', (0, a.jsx)(n.a, { href: '/handboek/developer/cdn/', children: 'CDN in je prototype' }), ' gebruikt. Bekijk hiervoor de Network-tab in de Developer Tools van je browser. Zoek welke andere servers daar voorkomen. Ken je de URL van de CDN? Zoek deze dan direct op in de code.'] }), '\n', (0, a.jsxs)(n.p, { children: ['De aanpassingen van de code van je prototype die nodig zijn, zijn heel erg afhankelijk van welke build tools je gaat gebruiken. De volgende voorbeelden laten zien hoe je naar ', (0, a.jsx)(n.a, { href: 'https://vite.dev', children: 'Vite' }), ' kan migreren.'] }), '\n', (0, a.jsx)(n.h3, { id: 'dependencies-installeren', children: 'Dependencies installeren' }), '\n', (0, a.jsx)(n.p, { children: 'Zoek in de code naar npm-packages die je via een CDN laadt. In de Network-tab staan vaak te veel packages. Dit komt door indirecte dependencies. Die hoef je niet zelf te installeren. Beperk je daarom alleen tot de npm-packages in de code.' }), '\n', (0, a.jsxs)(n.p, { children: ['Installeer elke npm dependency met ', (0, a.jsx)(n.code, { children: 'pnpm add' }), ', en noem hetzelfde versienummer als die bekend is. Bijvoorbeeld, wanneer de volgende code in je prototype staat:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<script\n  src="https://unpkg.com/@utrecht/web-component-library-stencil@4.1.0/dist/utrecht/utrecht.esm.js"\n  type="module"\n><\/script>\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Dan installeer je de dependency zo via pnpm, met hetzelfde versienummer:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-shell', children: 'pnpm add @utrecht/web-component-library-stencil@4.1.0\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Wanneer er geen versienummer bekend is, dan kun je de laatste versie installeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-shell', children: 'pnpm add @utrecht/web-component-library-stencil\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Wanneer het prototype geen versienummer noemt, dan kan het zijn dat het prototype niet meer werkt met de laatste versie van de dependency. Probeer dan de versie van de dependency te vinden die wel werkt, door uit te zoeken wanneer het prototype gemaakt is en welke versie toen de laatste versie was.' }), '\n', (0, a.jsx)(n.h3, { id: 'web-fonts-installeren', children: 'Web Fonts installeren' }), '\n', (0, a.jsxs)(n.p, { children: ['De meeste open source lettertypes kun je vinden via Fontsource. Bijvoorbeeld: ', (0, a.jsx)(n.a, { href: 'https://fonts.google.com/specimen/Roboto', children: 'Roboto van Google Fonts' }), ' kun je vervangen door ', (0, a.jsx)(n.a, { href: 'https://fontsource.org/fonts/roboto/install', children: 'de npm package voor Roboto van Fontsource' }), '.'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-shell', children: 'pnpm add @fontsource-variable/roboto\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'css-en-web-fonts-migreren', children: 'CSS en Web Fonts migreren' }), '\n', (0, a.jsxs)(n.p, { children: ['De CSS en Web Fonts worden meestal vanaf de CDN ingeladen met een ', (0, a.jsx)(n.code, { children: '<link>' }), ' element.'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://unpkg.com/@fontsource/roboto/index.css" />\n<link rel="stylesheet" href="https://unpkg.com/@nl-design-system-candidate/button-css@1.1.0/dist/button.css" />\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Bij Vite wordt de CSS ingeladen vanuit JavaScript in plaats van via HTML:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<script>\n  import "@fontsource/roboto/index.css";\n  import "@nl-design-system-candidate/button-css/button.css";\n<\/script>\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'javascript-migreren', children: 'JavaScript migreren' }), '\n', (0, a.jsxs)(n.p, { children: ['Uit bestaande imports in code moeten de URL van de CDN en het versienummer verwijderd worden. Het versienummer is al vastgelegd door ', (0, a.jsx)(n.code, { children: 'pnpm add' }), '.'] }), '\n', (0, a.jsx)(n.p, { children: 'Bijvoorbeeld, deze code die een CDN gebruikt:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-js', children: 'import { Button } from "https://unpkg.com/@nl-design-system-candidate/button-react@1.1.0";\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'De aangepaste code zonder CDN en versienummer:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-js', children: 'import { Button } from "@nl-design-system-candidate/button-react";\n' }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
