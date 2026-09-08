'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [26263],
 {
  18439(e, n, r) {
   r.d(n, { R: () => a, x: () => s });
   var t = r(30758);
   const i = {},
    o = t.createContext(i);
   function a(e) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  41534(e, n, r) {
   function t(e, n) {
    if (null == e) return {};
    var r,
     t,
     i = (function (e, n) {
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
     for (t = 0; t < o.length; t++) ((r = o[t]), -1 === n.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
    }
    return i;
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
   function i(e) {
    var n = (function (e, n) {
     if ('object' != t(e) || !e) return e;
     var r = e[Symbol.toPrimitive];
     if (void 0 !== r) {
      var i = r.call(e, n || 'default');
      if ('object' != t(i)) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == t(n) ? n : n + '';
   }
   function o(e, n, r) {
    return ((n = i(n)) in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e);
   }
   r.d(n, { A: () => o });
  },
  59292(e, n, r) {
   r.d(n, { f: () => t.f });
   var t = r(71544);
  },
  65002(e, n, r) {
   (r.r(n), r.d(n, { assets: () => d, contentTitle: () => c, default: () => u, frontMatter: () => s, metadata: () => t, toc: () => l }));
   const t = JSON.parse('{"id":"project/schrijfwijzer/reviews","title":"Reviews","description":"Reviews voor NL Design System communicatie.","source":"@site/docs/project/schrijfwijzer/reviews.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/reviews","permalink":"/project/schrijfwijzer/reviews","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/reviews.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"Reviews","hide_title":true,"sidebar_label":"Reviews","sidebar_position":9,"navigation_order":9,"pagination_label":"Reviews","description":"Reviews voor NL Design System communicatie.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Code","permalink":"/project/schrijfwijzer/code"},"next":{"title":"Introductie","permalink":"/project/kwaliteitsaanpak/"}}');
   var i = r(86070),
    o = r(18439),
    a = r(59292);
   const s = { title: 'Reviews', hide_title: !0, sidebar_label: 'Reviews', sidebar_position: 9, navigation_order: 9, pagination_label: 'Reviews', description: 'Reviews voor NL Design System communicatie.', keywords: ['kernteam'] },
    c = 'Reviews',
    d = {},
    l = [
     { value: 'Website en documentatie', id: 'website-en-documentatie', level: 2 },
     { value: 'Berichten voor social media', id: 'berichten-voor-social-media', level: 2 },
     { value: 'Presentaties', id: 'presentaties', level: 2 },
     { value: 'Drukwerk en fysieke media', id: 'drukwerk-en-fysieke-media', level: 2 },
     { value: 'Aankondigingen in chatkanalen', id: 'aankondigingen-in-chatkanalen', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', p: 'p', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'reviews', children: 'Reviews' }) }), '\n', (0, i.jsx)(a.f, { purpose: 'lead', children: (0, i.jsx)(n.p, { children: 'Heb je een tekst geschreven? Laat dan altijd een ander meelezen v\xf3\xf3r je de tekst publiceert. Zou houden we elkaar\nscherp.' }) }), '\n', (0, i.jsx)(n.p, { children: 'Wie je om een review vraag verschilt per soort content. Wanneer je een tekst schrijft voor specialisten, en je bent zelf geen specialist, laat de tekst dan altijd reviewen door iemand die wel specialist is op dat gebied.' }), '\n', (0, i.jsx)(n.p, { children: 'Wanneer je een review nodig hebt, vermeld er dan bij wanneer je de feedback uiterlijk nodig hebt en attendeer eventueel de persoon die je nodig hebt door te taggen.' }), '\n', (0, i.jsx)(n.h2, { id: 'website-en-documentatie', children: 'Website en documentatie' }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik de Pull Request reviews op GitHub.' }), '\n', (0, i.jsx)(n.h2, { id: 'berichten-voor-social-media', children: 'Berichten voor social media' }), '\n', (0, i.jsx)(n.p, { children: 'Communicatieadviseur maakt berichten voor social media. De productmanager geeft akkoord voor plaatsing.' }), '\n', (0, i.jsx)(n.h2, { id: 'presentaties', children: 'Presentaties' }), '\n', (0, i.jsx)(n.p, { children: 'Slides die gemaakt worden in PowerPoint of Figma moeten gecheckt worden op spelling, zinsopbouw en consistentie door een collega en geaccordeerd worden door de productmanager of projectmanager.' }), '\n', (0, i.jsx)(n.h2, { id: 'drukwerk-en-fysieke-media', children: 'Drukwerk en fysieke media' }), '\n', (0, i.jsx)(n.p, { children: 'De teksten moeten gecheckt worden op spelling, zinsopbouw en consistentie door de communicatieadviseur en akkoord bevonden worden door de productmanager of projectmanager.' }), '\n', (0, i.jsx)(n.h2, { id: 'aankondigingen-in-chatkanalen', children: 'Aankondigingen in chatkanalen' }), '\n', (0, i.jsxs)(n.p, { children: ['Vraag om een review aan de productmanager in een priv\xe9chatkanaal voordat je een algemene aankondiging doet ', (0, i.jsx)(n.a, { href: '/slack/', children: 'in Slack' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
  71544(e, n, r) {
   r.d(n, { f: () => p });
   var t = r(48171),
    i = r(41534),
    o = r(86070),
    a = r(13526),
    s = r(30758),
    c = ['children', 'className', 'purpose'];
   function d(e, n) {
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
   function l(e) {
    for (var n = 1; n < arguments.length; n++) {
     var r = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(r), !0).forEach(function (n) {
         (0, t.A)(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : d(Object(r)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
   }
   var p = (0, s.forwardRef)(function (e, n) {
    var r = e.children,
     s = e.className,
     d = e.purpose,
     p = (0, i.A)(e, c);
    return (0, o.jsx)('p', l(l({ className: (0, a.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), s), ref: n }, p), {}, { children: 'lead' === d ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: r }) : r }));
   });
   p.displayName = 'Paragraph';
  },
 },
]);
