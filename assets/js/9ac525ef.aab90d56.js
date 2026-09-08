'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [68459],
 {
  18439(e, n, t) {
   t.d(n, { R: () => a, x: () => o });
   var i = t(30758);
   const s = {},
    r = i.createContext(s);
   function a(e) {
    const n = i.useContext(r);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), i.createElement(r.Provider, { value: n }, e.children));
   }
  },
  41534(e, n, t) {
   function i(e, n) {
    if (null == e) return {};
    var t,
     i,
     s = (function (e, n) {
      if (null == e) return {};
      var t = {};
      for (var i in e)
       if ({}.hasOwnProperty.call(e, i)) {
        if (-1 !== n.indexOf(i)) continue;
        t[i] = e[i];
       }
      return t;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (i = 0; i < r.length; i++) ((t = r[i]), -1 === n.indexOf(t) && {}.propertyIsEnumerable.call(e, t) && (s[t] = e[t]));
    }
    return s;
   }
   t.d(n, { A: () => i });
  },
  48171(e, n, t) {
   function i(e) {
    return (
     (i =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
         }),
     i(e)
    );
   }
   function s(e) {
    var n = (function (e, n) {
     if ('object' != i(e) || !e) return e;
     var t = e[Symbol.toPrimitive];
     if (void 0 !== t) {
      var s = t.call(e, n || 'default');
      if ('object' != i(s)) return s;
      throw new TypeError('@@toPrimitive must return a primitive value.');
     }
     return ('string' === n ? String : Number)(e);
    })(e, 'string');
    return 'symbol' == i(n) ? n : n + '';
   }
   function r(e, n, t) {
    return ((n = s(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e);
   }
   t.d(n, { A: () => r });
  },
  59292(e, n, t) {
   t.d(n, { f: () => i.f });
   var i = t(71544);
  },
  71544(e, n, t) {
   t.d(n, { f: () => p });
   var i = t(48171),
    s = t(41534),
    r = t(86070),
    a = t(13526),
    o = t(30758),
    l = ['children', 'className', 'purpose'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     (n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, i));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, i.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var p = (0, o.forwardRef)(function (e, n) {
    var t = e.children,
     o = e.className,
     d = e.purpose,
     p = (0, s.A)(e, l);
    return (0, r.jsx)('p', c(c({ className: (0, a.$)('nl-paragraph', (0, i.A)({}, 'nl-paragraph--lead', 'lead' === d), o), ref: n }, p), {}, { children: 'lead' === d ? (0, r.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   p.displayName = 'Paragraph';
  },
  92506(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => l, default: () => g, frontMatter: () => o, metadata: () => i, toc: () => c }));
   const i = JSON.parse('{"id":"community/expertteam-digitale-toegankelijkheid/design-tokens-lint/index","title":"Design Tokens valideren","description":"Linten en valideren van bestaande thema tokens JSON bestanden","source":"@site/docs/community/expertteam-digitale-toegankelijkheid/design-tokens-lint/index.mdx","sourceDirName":"community/expertteam-digitale-toegankelijkheid/design-tokens-lint","slug":"/project/expertteam-digitale-toegankelijkheid/design-tokens-lint","permalink":"/project/expertteam-digitale-toegankelijkheid/design-tokens-lint","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/expertteam-digitale-toegankelijkheid/design-tokens-lint/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Design Tokens valideren","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Design Tokens valideren","pagination_label":"Design Tokens valideren","description":"Linten en valideren van bestaande thema tokens JSON bestanden","slug":"/project/expertteam-digitale-toegankelijkheid/design-tokens-lint","keywords":["Expertteam","deelproject","nl design system","componenten","design system","design tokens","basis tokens","thema\'s"]},"sidebar":"community","previous":{"title":"Expertteam Digitale Toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid"},"next":{"title":"Bijeenkomsten","permalink":"/community/events/overzicht"}}');
   var s = t(86070),
    r = t(18439),
    a = t(59292);
   const o = { title: 'Design Tokens valideren', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Design Tokens valideren', pagination_label: 'Design Tokens valideren', description: 'Linten en valideren van bestaande thema tokens JSON bestanden', slug: '/project/expertteam-digitale-toegankelijkheid/design-tokens-lint', keywords: ['Expertteam', 'deelproject', 'nl design system', 'componenten', 'design system', 'design tokens', 'basis tokens', "thema's"] },
    l = 'Design Tokens valideren',
    d = {},
    c = [
     { value: 'Installatie', id: 'installatie', level: 2 },
     { value: 'Valideer een tokens-bestand', id: 'valideer-een-tokens-bestand', level: 2 },
     { value: 'Valideer een Tokens Studio-bestand', id: 'valideer-een-tokens-studio-bestand', level: 2 },
     { value: 'Verbeteringen opslaan', id: 'verbeteringen-opslaan', level: 2 },
     { value: 'Command line opties', id: 'command-line-opties', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, r.R)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: 'design-tokens-valideren', children: 'Design Tokens valideren' }) }), '\n', (0, s.jsx)(a.f, { appearance: 'lead', children: (0, s.jsxs)(n.p, { children: ['Gebruik de ', (0, s.jsx)(n.code, { children: 'design-tokens-lint' }), ' CLI tool om automatisch de Design Tokens JSON bestanden te valideren.'] }) }), '\n', (0, s.jsx)(n.h2, { id: 'installatie', children: 'Installatie' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-shell', children: 'pnpm add --save-dev @nl-design-system-community/design-tokens-lint\n' }) }), '\n', (0, s.jsx)(n.h2, { id: 'valideer-een-tokens-bestand', children: 'Valideer een tokens-bestand' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint src/tokens.json\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Meerdere bestanden worden voor validatie in volgorde samengevoegd. Bij conflicten overschrijven latere bestanden eerdere.' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint theme.tokens.json dark-mode.tokens.json\n' }) }), '\n', (0, s.jsx)(n.h2, { id: 'valideer-een-tokens-studio-bestand', children: 'Valideer een Tokens Studio-bestand' }), '\n', (0, s.jsx)(n.p, { children: 'Bij gebruik van een tokens.json die door Tokens Studio is gegenereerd moeten we 1 laag van de JSON afhalen.' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint --exclude-parent-keys figma/figma.tokens.json\n' }) }), '\n', (0, s.jsx)(n.h2, { id: 'verbeteringen-opslaan', children: 'Verbeteringen opslaan' }), '\n', (0, s.jsxs)(n.p, { children: ['Sla het resultaat op in een bestand, in plaats van alleen het resultaat zien in de terminal. Dit werkt voor zowel geslaagde als mislukte validaties. Bij succes wordt de volledige tokens-tree geschreven, inclusief aanvullende NL Design System-extensies en ge\xfcpgradede tokens die overeenkomen met ', (0, s.jsx)(n.a, { href: 'https://www.designtokens.org/tr/2025.10/format/', children: 'het Design Tokens JSON-formaat' }), '. Bij een fout worden de problemen als JSON naar het bestand geschreven.'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint --out result.json src/tokens.json\n' }) }), '\n', (0, s.jsx)(n.h2, { id: 'command-line-opties', children: 'Command line opties' }), '\n', (0, s.jsxs)(n.p, { children: ['Gebruik ', (0, s.jsx)(n.code, { children: '--help' }), ' om alle opties te bekijken:'] }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint --help\n' }) })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
