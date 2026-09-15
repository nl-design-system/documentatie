'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [68459],
 {
  18439(e, n, t) {
   t.d(n, { R: () => l, x: () => r });
   var s = t(30758);
   const i = {},
    a = s.createContext(i);
   function l(e) {
    const n = s.useContext(a);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), s.createElement(a.Provider, { value: n }, e.children));
   }
  },
  56561(e, n, t) {
   t.d(n, { f: () => g });
   var s = t(15540),
    i = t(69967),
    a = t(86070),
    l = t(13526),
    r = t(30758),
    o = ['children', 'className', 'purpose'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     (n &&
      (s = s.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, s));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, s.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var g = (0, r.forwardRef)(function (e, n) {
    var t = e.children,
     r = e.className,
     d = e.purpose,
     g = (0, i.A)(e, o);
    return (0, a.jsx)('p', c(c({ className: (0, l.$)('nl-paragraph', (0, s.A)({}, 'nl-paragraph--lead', 'lead' === d), r), ref: n }, g), {}, { children: 'lead' === d ? (0, a.jsx)('b', { className: 'nl-paragraph__lead', children: t }) : t }));
   });
   g.displayName = 'Paragraph';
  },
  59292(e, n, t) {
   t.d(n, { f: () => s.f });
   var s = t(56561);
  },
  92506(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => o, default: () => p, frontMatter: () => r, metadata: () => s, toc: () => c }));
   const s = JSON.parse('{"id":"community/expertteam-digitale-toegankelijkheid/design-tokens-lint/index","title":"Design Tokens valideren","description":"Linten en valideren van bestaande thema tokens JSON bestanden","source":"@site/docs/community/expertteam-digitale-toegankelijkheid/design-tokens-lint/index.mdx","sourceDirName":"community/expertteam-digitale-toegankelijkheid/design-tokens-lint","slug":"/project/expertteam-digitale-toegankelijkheid/design-tokens-lint","permalink":"/project/expertteam-digitale-toegankelijkheid/design-tokens-lint","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/expertteam-digitale-toegankelijkheid/design-tokens-lint/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Design Tokens valideren","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Design Tokens valideren","pagination_label":"Design Tokens valideren","description":"Linten en valideren van bestaande thema tokens JSON bestanden","slug":"/project/expertteam-digitale-toegankelijkheid/design-tokens-lint","keywords":["Expertteam","deelproject","nl design system","componenten","design system","design tokens","basis tokens","thema\'s"]},"sidebar":"community","previous":{"title":"Expertteam Digitale Toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid"},"next":{"title":"Bijeenkomsten","permalink":"/community/events/overzicht"}}');
   var i = t(86070),
    a = t(18439),
    l = t(59292);
   const r = { title: 'Design Tokens valideren', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Design Tokens valideren', pagination_label: 'Design Tokens valideren', description: 'Linten en valideren van bestaande thema tokens JSON bestanden', slug: '/project/expertteam-digitale-toegankelijkheid/design-tokens-lint', keywords: ['Expertteam', 'deelproject', 'nl design system', 'componenten', 'design system', 'design tokens', 'basis tokens', "thema's"] },
    o = 'Design Tokens valideren',
    d = {},
    c = [
     { value: 'Installatie', id: 'installatie', level: 2 },
     { value: 'Valideer een tokens-bestand', id: 'valideer-een-tokens-bestand', level: 2 },
     { value: 'Valideer een Tokens Studio-bestand', id: 'valideer-een-tokens-studio-bestand', level: 2 },
     { value: 'Verbeteringen opslaan', id: 'verbeteringen-opslaan', level: 2 },
     { value: 'Command line opties', id: 'command-line-opties', level: 2 },
    ];
   function g(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'design-tokens-valideren', children: 'Design Tokens valideren' }) }), '\n', (0, i.jsx)(l.f, { appearance: 'lead', children: (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsx)(n.code, { children: 'design-tokens-lint' }), ' CLI tool om automatisch de Design Tokens JSON bestanden te valideren.'] }) }), '\n', (0, i.jsx)(n.h2, { id: 'installatie', children: 'Installatie' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-shell', children: 'pnpm add --save-dev @nl-design-system-community/design-tokens-lint\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'valideer-een-tokens-bestand', children: 'Valideer een tokens-bestand' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint src/tokens.json\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Meerdere bestanden worden voor validatie in volgorde samengevoegd. Bij conflicten overschrijven latere bestanden eerdere.' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint theme.tokens.json dark-mode.tokens.json\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'valideer-een-tokens-studio-bestand', children: 'Valideer een Tokens Studio-bestand' }), '\n', (0, i.jsx)(n.p, { children: 'Bij gebruik van een tokens.json die door Tokens Studio is gegenereerd moeten we 1 laag van de JSON afhalen.' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint --exclude-parent-keys figma/figma.tokens.json\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'verbeteringen-opslaan', children: 'Verbeteringen opslaan' }), '\n', (0, i.jsxs)(n.p, { children: ['Sla het resultaat op in een bestand, in plaats van alleen het resultaat zien in de terminal. Dit werkt voor zowel geslaagde als mislukte validaties. Bij succes wordt de volledige tokens-tree geschreven, inclusief aanvullende NL Design System-extensies en ge\xfcpgradede tokens die overeenkomen met ', (0, i.jsx)(n.a, { href: 'https://www.designtokens.org/tr/2025.10/format/', children: 'het Design Tokens JSON-formaat' }), '. Bij een fout worden de problemen als JSON naar het bestand geschreven.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint --out result.json src/tokens.json\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'command-line-opties', children: 'Command line opties' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik ', (0, i.jsx)(n.code, { children: '--help' }), ' om alle opties te bekijken:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint --help\n' }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
  },
 },
]);
