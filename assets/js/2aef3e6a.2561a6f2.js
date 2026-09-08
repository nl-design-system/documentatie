'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [52374],
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
  71544(e, n, r) {
   r.d(n, { f: () => p });
   var t = r(48171),
    i = r(41534),
    o = r(86070),
    l = r(13526),
    s = r(30758),
    a = ['children', 'className', 'purpose'];
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
   function c(e) {
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
     p = (0, i.A)(e, a);
    return (0, o.jsx)('p', c(c({ className: (0, l.$)('nl-paragraph', (0, t.A)({}, 'nl-paragraph--lead', 'lead' === d), s), ref: n }, p), {}, { children: 'lead' === d ? (0, o.jsx)('b', { className: 'nl-paragraph__lead', children: r }) : r }));
   });
   p.displayName = 'Paragraph';
  },
  81452(e, n, r) {
   (r.r(n), r.d(n, { assets: () => d, contentTitle: () => a, default: () => u, frontMatter: () => s, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/schrijfwijzer/doelgroepen","title":"Doelgroepen","description":"Doelgroepen voor NL Design System communicatie.","source":"@site/docs/project/schrijfwijzer/doelgroepen.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/doelgroepen","permalink":"/project/schrijfwijzer/doelgroepen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/doelgroepen.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Doelgroepen","hide_title":true,"sidebar_label":"Doelgroepen","sidebar_position":4,"navigation_order":4,"pagination_label":"Doelgroepen","description":"Doelgroepen voor NL Design System communicatie.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Doelen","permalink":"/project/schrijfwijzer/doelen"},"next":{"title":"Nederlands","permalink":"/project/schrijfwijzer/nederlands"}}');
   var i = r(86070),
    o = r(18439),
    l = r(59292);
   const s = { title: 'Doelgroepen', hide_title: !0, sidebar_label: 'Doelgroepen', sidebar_position: 4, navigation_order: 4, pagination_label: 'Doelgroepen', description: 'Doelgroepen voor NL Design System communicatie.', keywords: ['kernteam'] },
    a = 'Meerdere doelgroepen aanspreken',
    d = {},
    c = [
     { value: 'Doelgroepen', id: 'doelgroepen', level: 2 },
     { value: 'Soorten content', id: 'soorten-content', level: 2 },
     { value: 'Scanbare teksten voor een gemengd publiek', id: 'scanbare-teksten-voor-een-gemengd-publiek', level: 2 },
    ];
   function p(e) {
    const n = { code: 'code', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'meerdere-doelgroepen-aanspreken', children: 'Meerdere doelgroepen aanspreken' }) }), '\n', (0, i.jsx)(l.f, { purpose: 'lead', children: (0, i.jsx)(n.p, { children: 'Pas je schrijfwijze aan voor de doelgroep van de content die je maakt. We willen specialisten in de community niet\nbetuttelen door vaktaal te vermijden. Maar we willen ook bijvoorbeeld managers of nieuwe doelgroepen goed kunnen\nuitleggen wat we doen. Daarom hebben we een aanpak waar we rekening houden met een gemengd publiek.' }) }), '\n', (0, i.jsx)(n.h2, { id: 'doelgroepen', children: 'Doelgroepen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Breed publiek' }), '\n', (0, i.jsx)(n.li, { children: 'Specialisten' }), '\n', (0, i.jsx)(n.li, { children: 'Gemengd publiek' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'soorten-content', children: 'Soorten content' }), '\n', (0, i.jsx)(n.p, { children: 'Pas je tekst aan voor de doelgroep van het soort content:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Homepage en projectinformatie op de website:' }), ' breed publiek.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Documentatie op de website:' }), " bijna overal schrijf je voor een gemengd publiek, maar sommige pagina's zijn voor een breed publiek."] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Berichten voor Slack:' }), ' in het algemene ', (0, i.jsx)(n.code, { children: '#nl-design-system' }), ' kanaal schrijf je voor een breed publiek, in ', (0, i.jsx)(n.code, { children: '#nl-design-system-designers' }), ' en ', (0, i.jsx)(n.code, { children: '#nl-design-system-developers' }), ' is het logisch om vaktaal te gebruiken.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Berichten voor social media:' }), ' breed publiek. Plaats een link naar meer informatie voor specialisten, wanneer die informatie nodig is.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Nieuwsbrieven e-mails:' }), ' het is afhankelijk naar welke mailinglist je mailt. Mail je een groep developers? Gebruik dan gerust vaktaal. Mail je een algemene nieuwsbrief? Schrijf dan voor een breed publiek.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Blogposts voor de website:' }), ' ligt erg aan het onderwerp van de blog, dat kan varieren van een breed publiek tot een gemengd publiek.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: 'Presentatie met slides:' }), ' dit is afhankelijk van de soort presentatie, dat kan varieren van een breed publiek tot een specialistisch publiek.'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'scanbare-teksten-voor-een-gemengd-publiek', children: 'Scanbare teksten voor een gemengd publiek' }), '\n', (0, i.jsx)(n.p, { children: "Gebruik de volgende aanpak wanneer je schrijft voor een gemengd publiek. Schrijf de introductie-alinea, de koppen en het begin van alinea's na een kop voor een brede doelgroep zodat iedereen de tekst kan scannen. Wanneer het doel van de tekst duidelijk voor een breed publiek, dan zullen mensen vaker de tekst delen met een specialist die ze kennen." }), '\n', (0, i.jsx)(n.p, { children: 'Schrijf de verdere tekst gericht op specialisten, en gebruik alle vaktaal die nodig is voor een duidelijke tekst.' }), '\n'] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
