'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [68459],
 {
  18439(e, n, t) {
   t.d(n, { R: () => l, x: () => d });
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
   function d(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : l(e.components)), s.createElement(a.Provider, { value: n }, e.children));
   }
  },
  77786(e, n, t) {
   (t.r(n), t.d(n, { assets: () => r, contentTitle: () => o, default: () => m, frontMatter: () => d, metadata: () => s, toc: () => c }));
   const s = JSON.parse('{"id":"community/expertteam-digitale-toegankelijkheid/design-tokens-lint/index","title":"Design Tokens valideren","description":"Linten en valideren van bestaande thema tokens JSON bestanden","source":"@site/docs/community/expertteam-digitale-toegankelijkheid/design-tokens-lint/index.mdx","sourceDirName":"community/expertteam-digitale-toegankelijkheid/design-tokens-lint","slug":"/project/expertteam-digitale-toegankelijkheid/lint-design-tokens","permalink":"/project/expertteam-digitale-toegankelijkheid/lint-design-tokens","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/expertteam-digitale-toegankelijkheid/design-tokens-lint/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Design Tokens valideren","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Design Tokens valideren","pagination_label":"Design Tokens valideren","description":"Linten en valideren van bestaande thema tokens JSON bestanden","slug":"/project/expertteam-digitale-toegankelijkheid/lint-design-tokens","keywords":["Expertteam","deelproject","nl design system","componenten","design system","design tokens","basis tokens","thema\'s"]},"sidebar":"community","previous":{"title":"Expertteam Digitale Toegankelijkheid","permalink":"/project/expertteam-digitale-toegankelijkheid"},"next":{"title":"Bijeenkomsten","permalink":"/community/events/overzicht"}}');
   var i = t(86070),
    a = t(18439),
    l = t(46447);
   const d = { title: 'Design Tokens valideren', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Design Tokens valideren', pagination_label: 'Design Tokens valideren', description: 'Linten en valideren van bestaande thema tokens JSON bestanden', slug: '/project/expertteam-digitale-toegankelijkheid/lint-design-tokens', keywords: ['Expertteam', 'deelproject', 'nl design system', 'componenten', 'design system', 'design tokens', 'basis tokens', "thema's"] },
    o = 'Design Tokens valideren',
    r = {},
    c = [
     { value: 'Installatie', id: 'installatie', level: 2 },
     { value: 'Valideer een tokens-bestand', id: 'valideer-een-tokens-bestand', level: 2 },
     { value: 'Valideer een Tokens Studio-bestand', id: 'valideer-een-tokens-studio-bestand', level: 2 },
     { value: 'Verbeteringen opslaan', id: 'verbeteringen-opslaan', level: 2 },
     { value: 'Command line opties', id: 'command-line-opties', level: 2 },
    ];
   function g(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', header: 'header', p: 'p', pre: 'pre', ...(0, a.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'design-tokens-valideren', children: 'Design Tokens valideren' }) }), '\n', (0, i.jsx)(l.fz, { appearance: 'lead', children: (0, i.jsxs)(n.p, { children: ['Gebruik de ', (0, i.jsx)(n.code, { children: 'design-tokens-lint' }), ' CLI tool om automatisch de Design Tokens JSON bestanden te valideren.'] }) }), '\n', (0, i.jsx)(n.h2, { id: 'installatie', children: 'Installatie' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-shell', children: 'pnpm add --save-dev @nl-design-system-community/design-tokens-lint\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'valideer-een-tokens-bestand', children: 'Valideer een tokens-bestand' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint src/tokens.json\n' }) }), '\n', (0, i.jsx)(n.p, { children: 'Meerdere bestanden worden voor validatie in volgorde samengevoegd. Bij conflicten overschrijven latere bestanden eerdere.' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint theme.tokens.json dark-mode.tokens.json\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'valideer-een-tokens-studio-bestand', children: 'Valideer een Tokens Studio-bestand' }), '\n', (0, i.jsx)(n.p, { children: 'Bij gebruik van een tokens.json die door Tokens Studio is gegenereerd moeten we 1 laag van de JSON afhalen.' }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint --exclude-parent-keys figma/figma.tokens.json\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'verbeteringen-opslaan', children: 'Verbeteringen opslaan' }), '\n', (0, i.jsxs)(n.p, { children: ['Sla het resultaat op in een bestand, in plaats van alleen het resultaat zien in de terminal. Dit werkt voor zowel geslaagde als mislukte validaties. Bij succes wordt de volledige tokens-tree geschreven, inclusief aanvullende NL Design System-extensies en ge\xfcpgradede tokens die overeenkomen met ', (0, i.jsx)(n.a, { href: 'https://www.designtokens.org/tr/2025.10/format/', children: 'het Design Tokens JSON-formaat' }), '. Bij een fout worden de problemen als JSON naar het bestand geschreven.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint --out result.json src/tokens.json\n' }) }), '\n', (0, i.jsx)(n.h2, { id: 'command-line-opties', children: 'Command line opties' }), '\n', (0, i.jsxs)(n.p, { children: ['Gebruik ', (0, i.jsx)(n.code, { children: '--help' }), ' om alle opties te bekijken:'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-shell', children: 'design-tokens-lint --help\n' }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
  },
 },
]);
