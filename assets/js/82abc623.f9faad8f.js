/*! For license information please see 82abc623.f9faad8f.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [78934],
 {
  1375(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'line-height', 'LineHeight', [
    ['path', { d: 'M3 8l3 -3l3 3', key: 'svg-0' }],
    ['path', { d: 'M3 16l3 3l3 -3', key: 'svg-1' }],
    ['path', { d: 'M6 5l0 14', key: 'svg-2' }],
    ['path', { d: 'M13 6l7 0', key: 'svg-3' }],
    ['path', { d: 'M13 12l7 0', key: 'svg-4' }],
    ['path', { d: 'M13 18l7 0', key: 'svg-5' }],
   ]);
  },
  4077(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'mood-happy', 'MoodHappy', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  4603(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'copy', 'Copy', [
    ['path', { d: 'M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666', key: 'svg-0' }],
    ['path', { d: 'M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1', key: 'svg-1' }],
   ]);
  },
  13088(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'ruler', 'Ruler', [
    ['path', { d: 'M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1', key: 'svg-0' }],
    ['path', { d: 'M4 8l2 0', key: 'svg-1' }],
    ['path', { d: 'M4 12l3 0', key: 'svg-2' }],
    ['path', { d: 'M4 16l2 0', key: 'svg-3' }],
    ['path', { d: 'M8 4l0 2', key: 'svg-4' }],
    ['path', { d: 'M12 4l0 3', key: 'svg-5' }],
    ['path', { d: 'M16 4l0 2', key: 'svg-6' }],
   ]);
  },
  14384(e, n, s) {
   (s.r(n), s.d(n, { assets: () => l, contentTitle: () => d, default: () => p, frontMatter: () => r, metadata: () => i, toc: () => c }));
   const i = JSON.parse('{"id":"handboek/developer/conventies/css-conventie","title":"CSS conventie","description":"Conventies voor het schrijven van CSS voor NL Design System","source":"@site/docs/handboek/developer/03-conventies/03-css-conventie.mdx","sourceDirName":"handboek/developer/03-conventies","slug":"/handboek/developer/css-conventie/","permalink":"/handboek/developer/css-conventie/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/03-conventies/03-css-conventie.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"CSS conventie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"CSS conventie","pagination_label":"CSS conventie","description":"Conventies voor het schrijven van CSS voor NL Design System","slug":"/handboek/developer/css-conventie/","keywords":["developer","CSS","componenten"]},"sidebar":"handboek","previous":{"title":"Design Token conventie","permalink":"/handboek/developer/design-token-conventie/"},"next":{"title":"API conventie","permalink":"/handboek/developer/api-conventie/"}}');
   var a = s(86070),
    t = s(18439),
    o = s(56528);
   const r = { title: 'CSS conventie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'CSS conventie', pagination_label: 'CSS conventie', description: 'Conventies voor het schrijven van CSS voor NL Design System', slug: '/handboek/developer/css-conventie/', keywords: ['developer', 'CSS', 'componenten'] },
    d = 'CSS conventie',
    l = {},
    c = [
     { value: 'Huisstijl onafhankelijk', id: 'huisstijl-onafhankelijk', level: 2 },
     { value: 'Ge\xefsoleerde theming', id: 'ge\xefsoleerde-theming', level: 2 },
     { value: 'Herleidbare prefix', id: 'herleidbare-prefix', level: 2 },
     { value: 'Herbruikbare mixins', id: 'herbruikbare-mixins', level: 2 },
     { value: 'Robuuste reset', id: 'robuuste-reset', level: 2 },
     { value: 'Reset in een SCSS mixin', id: 'reset-in-een-scss-mixin', level: 3 },
    ];
   function h(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', pre: 'pre', ...(0, t.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'css-conventie', children: 'CSS conventie' }) }), '\n', (0, a.jsx)(n.p, { children: 'Dit document beschrijft de conventies voor het schrijven van herbruikbare CSS voor componenten en applicaties met NL Design System. Deze zijn bedoeld voor iedereen die nieuwe componenten ontwikkelt of bijdraagt aan gedeelde CSS-bibliotheken en voor iedereen die aanvullende CSS scrhijft in een herbruikbare applicatie.' }), '\n', (0, a.jsx)(n.h2, { id: 'huisstijl-onafhankelijk', children: 'Huisstijl onafhankelijk' }), '\n', (0, a.jsxs)(n.p, { children: ['Schrijf CSS die ook werkt voor anderen. Herbruikbare CSS gebruikt geen huisstijlcode. CSS-variabelen worden gebruikt voor ', (0, a.jsx)('i', { lang: 'en', children: 'component design tokens' }), ' die ingevuld kunnen worden met de huisstijl van een organisatie. Dit is van belang wanneer componenten door anderen worden gebruikt, of wanneer software door meerdere organisaties met hun eigen huisstijl wordt ge\xefnstalleerd, zoals een CMS voor gemeenten of ', (0, a.jsx)(n.a, { href: 'http://commonground.nl', children: 'Common Ground' }), '-software.'] }), '\n', (0, a.jsx)(o.$, { appearance: 'do', title: 'Gebruik component tokens voor de design beslissingen die per huisstijl verschillen.', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '.example-button {\n  background-color: var(--example-button-background-color);\n}\n' }) }) }), '\n', (0, a.jsx)(o.$, { appearance: 'do', title: 'Gebruik basis tokens voor de design beslissingen in een custom.css of componenten die niet in het design system zitten.', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '.example-custom-footer {\n  background-color: var(--basis-color-accent-1-inverse-bg-document);\n  color: var(--basis-color-accent-1-inverse-color-default);\n}\n' }) }) }), '\n', (0, a.jsx)(o.$, { appearance: 'do', title: 'Gebruik basis tokens als fallback voor de design beslissingen in componenten die nog niet in de community zitten.', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '.example-custom-footer {\n  background-color: var(--example-custom-footer-background-color, var(--basis-color-accent-1-inverse-bg-document));\n  color: var(--example-custom-footer-color, var(--basis-color-accent-1-inverse-color-default));\n}\n' }) }) }), '\n', (0, a.jsx)(o.$, { appearance: 'dont', title: 'Hardcoded waardes voor design beslissingen', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '.example-custom-footer {\n  background-color: #663399;\n}\n' }) }) }), '\n', (0, a.jsx)(o.$, { appearance: 'dont', title: 'Huisstijl tokens van jouw organisatie in de component', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '.example-custom-footer {\n  background-color: var(--purple);\n}\n' }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'ge\xefsoleerde-theming', children: 'Ge\xefsoleerde theming' }), '\n', (0, a.jsx)(n.p, { children: 'Zorg dat de CSS van een thema niet de stylesheet van anderen in de weg zit. De huisstijlcode staat voor iedere organisatie in een apart thema-bestand. Gedeelde CSS wordt aangeboden zonder side-effects. De CSS heeft pas effect op een pagina nadat een expliciete CSS-class is toegepast. Zo kan hergebruik plaatsvinden zonder onbedoelde invloed op bestaande stylesheets.' }), '\n', (0, a.jsx)(o.$, { appearance: 'do', title: 'Gebruik brand tokens in je thema', description: 'Daarin verwijst de `component design token` naar de `brand design token`', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '  /* Voorbeeld thema in CSS op basis van de Design Tokens JSON */\n  .example-theme {\n    --example-purple: #663399;\n    --example-button-background-color: var(--example-purple);\n  }\n' }) }) }), '\n', (0, a.jsxs)(n.p, { children: ['Dit thema-bestand kan automatisch worden gegenereerd via een ', (0, a.jsx)(n.a, { href: 'https://design-tokens.github.io/community-group/format/', children: 'Design Tokens JSON-bestand' }), ' met ', (0, a.jsx)(n.a, { href: 'https://styledictionary.com', children: 'Style Dictionary' }), '. Elke huisstijl kan een eigen design token JSON-bestand hebben dat in meerdere projecten wordt gebruikt.'] }), '\n', (0, a.jsx)(o.$, { appearance: 'do', title: 'Huisstijl inladen met een eigen class name', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<html class="utrecht-root example-theme">\n  {/* \n  Example use of Community, Candidate and custom components\n  that will be styled by the example-theme stylesheet\n*/}\n  <body class="utrecht-body">\n    <h1 class="nl-heading nl-heading--level-1">Example page</h1>\n    <div class="example-card-group">\n      <div class="example-card">\n        <h2 class="example-card__heading nl-heading nl-heading--level-2">Hello</h2>\n        <p class="nl-paragraph">Some content here</p>\n      </div>\n    </div>\n  </body>\n</html>\n' }) }) }), '\n', (0, a.jsx)(o.$, { appearance: 'dont', title: 'Huisstijl inladen in de :root', description: 'Zo kunnen andere stylesheets niet makkelijk worden ingeladen zonder mogelijke side-effects', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: ':root {\n  --example-link-color: rebeccapurple;\n}\n' }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'herleidbare-prefix', children: 'Herleidbare prefix' }), '\n', (0, a.jsx)(n.p, { children: 'Zorg dat de prefix van de componenten en tokens herkenbaar en herleidbaar is. De componenten bij NL Design System worden bijgedragen door diverse organisaties. Om te herleiden waar een component vandaan komt en met wie je kan samenwerken om een verbetering door te voeren houden we de prefix van die organisatie aan. Ook in de applicatie van een organisatie met een andere naam. Het kan dus voorkomen dat een thema bestaat uit design tokens van diverse organisaties.' }), '\n', (0, a.jsx)(o.$, { appearance: 'do', title: 'Gebruik de prefix van de organisatie die de componenten beheert', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '/* Voorbeeld CSS Output van de Design Tokens JSON met diverse componenten */\n.example theme {\n  --ams-breadcrumb-link-color: blue;\n  --nl-link-color: blue;\n  --utrecht-button-background-color: rebeccapurple;\n}\n' }) }) }), '\n', (0, a.jsx)(o.$, { appearance: 'do', title: 'Eigen prefix voor nieuwe componenten', description: 'Alle namen in gedeelde CSS beginnen met een prefix die uniek is voor de organisatie. De prefix bestaat uitsluitend uit letters en cijfers, zonder koppelstreepjes of andere tekens.', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '.example-video {\n  border-color: var(--example-video-border-color);\n  border-radius: var(--example-video-border-radius);\n  border-width: var(--example-video-border-width);\n}\n' }) }) }), '\n', (0, a.jsx)(o.$, { appearance: 'do', title: 'Eigen prefix voor specifieke component tokens bij gebruik van andere componenten', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '.example-video__button {\n  --nl-button-background-color: var(--example-video-button-background-color);\n  --nl-button-color: var(--example-video-button-color);\n}\n' }) }) }), '\n', (0, a.jsx)(o.$, { appearance: 'dont', title: 'Eigen CSS om de tokens of CSS van een andere prefix te voorzien', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '/* Voorbeeld CSS Output van de Design Tokens JSON met diverse componenten */\n.example theme {\n--example-breadcrumb-link-color: blue;\n--example-link-color: blue;\n--example-button-background-color: rebeccapurple;\n}\n/* Voorbeeld pseudo CSS om onnodig eigen componenten logica te onderhouden */\n.example-breadcrumb {\n--ams-breadcrumb-link-color: var(--example-breadcrumb-link-color);\n@include ams-breadcrumb;\n}\n' }) }) }), '\n', (0, a.jsx)(n.h2, { id: 'herbruikbare-mixins', children: 'Herbruikbare mixins' }), '\n', (0, a.jsxs)(n.p, { children: ['Schrijf SCSS mixins voor gebruik met andere CSS selectors. CSS-onderdelen worden aangeboden als ', (0, a.jsx)(n.a, { href: 'https://sass-lang.com/documentation/at-rules/mixin', children: 'SCSS-mixin' }), ', zodat andere projecten dezelfde stijlen kunnen toepassen op afwijkende selectors.'] }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.code, { children: '_mixin.scss' }), ':'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-scss', children: '@mixin example-link {\n  color: var(--example-link-color);\n}\n' }) }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.code, { children: 'index.scss' }), ':'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-scss', children: '@import "./mixin";\n\n.example-link {\n  @include example-link;\n}\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Een project dat geen invloed heeft op de HTML past de mixin toe op alle links:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-scss', children: '@import "@example/css-components/link";\n\na:link {\n  @include example-link;\n}\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Een project met Shadow DOM:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-scss', children: '@import "@example/css-components/link";\n\n:host {\n  @include example-link;\n}\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Een project dat de mixin tijdelijk gebruikt tijdens een migratie van oude class names:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-scss', children: '@import "@example/css-components/link";\n\n.old-link {\n  @include example-link;\n}\n' }) }), '\n', (0, a.jsx)(n.h2, { id: 'robuuste-reset', children: 'Robuuste reset' }), '\n', (0, a.jsxs)(n.p, { children: ['Schrijf robuuste CSS die niet afhankelijk is van een algemene ', (0, a.jsx)(n.code, { children: 'reset.css' }), '. Wanneer een HTML-element zoals ', (0, a.jsx)(n.code, { children: '<ul>' }), ' wordt gebruikt voor een navigatiecomponent, worden browser-standaardstijlen \u2014 zoals ', (0, a.jsx)(n.code, { children: 'padding-inline-start' }), ' in ', (0, a.jsx)(n.a, { href: 'https://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css', children: 'Firefox' }), ' of ', (0, a.jsx)(n.a, { href: 'https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css', children: 'Safari' }), ' \u2014 expliciet gereset.'] }), '\n', (0, a.jsx)(o.$, { appearance: 'do', title: 'Reset CSS in de component zelf', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: 'ul.example-nav {\n  padding-inline-start: 0;\n  /* \u2026other styles\u2026 */\n}\n' }) }) }), '\n', (0, a.jsxs)(n.p, { children: ['Ook als het project een ', (0, a.jsxs)(n.a, { href: 'https://meyerweb.com/eric/tools/css/reset/', children: [(0, a.jsx)(n.code, { children: 'reset.css' }), '-variant'] }), ' gebruikt, blijft deze reset aanwezig in de componentcode zodat het ook werkt voor projecten zonder die ', (0, a.jsx)(n.code, { children: 'reset.css' }), '.'] }), '\n', (0, a.jsx)(o.$, { appearance: 'dont', title: 'Globale CSS reset', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', children: '* {\n  padding: 0;\n}\n' }) }) }), '\n', (0, a.jsx)(n.h3, { id: 'reset-in-een-scss-mixin', children: 'Reset in een SCSS mixin' }), '\n', (0, a.jsxs)(n.p, { children: ['Wanneer een property is ingesteld op de ', (0, a.jsx)('i', { lang: 'en', children: 'initial value' }), ' (zoals ', (0, a.jsx)(n.code, { children: '0' }), ' voor padding), kan dit eruitzien als overbodige code. Als reset-code in een losse mixin staat, ontbreekt de context dat het bedoeld is als browser-reset.'] }), '\n', (0, a.jsx)(o.$, { appearance: 'do', title: 'Reset in een mixin', description: 'Om te voorkomen dat de code later als dode code wordt verwijderd, staat reset-code in een eigen mixin', children: (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-scss', children: '  @mixin reset-ul {\n    padding-inline-start: 0;\n    /* \u2026other styles\u2026 */\n  }\n  @mixin example-nav {\n    @include reset-ul;\n    /* \u2026other styles\u2026 */\n  }\n' }) }) })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(h, { ...e }) }) : h(e);
   }
  },
  18439(e, n, s) {
   s.d(n, { R: () => o, x: () => r });
   var i = s(30758);
   const a = {},
    t = i.createContext(a);
   function o(e) {
    const n = i.useContext(t);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function r(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : o(e.components)), i.createElement(t.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, s) {
   s.d(n, { A: () => t });
   var i = s(30758),
    a = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const t = (e, n, s, t) => {
    const o = (0, i.forwardRef)(({ color: s = 'currentColor', size: o = 24, stroke: r = 2, title: d, className: l, children: c, ...h }, p) => (0, i.createElement)('svg', { ref: p, ...a[e], width: o, height: o, className: ['tabler-icon', `tabler-icon-${n}`, l].join(' '), ...('filled' === e ? { fill: s } : { strokeWidth: r, stroke: s }), ...h }, [d && (0, i.createElement)('title', { key: 'svg-title' }, d), ...t.map(([e, n]) => (0, i.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((o.displayName = `${s}`), o);
   };
  },
  23436(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'file-unknown', 'FileUnknown', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2', key: 'svg-1' }],
    ['path', { d: 'M12 17v.01', key: 'svg-2' }],
    ['path', { d: 'M12 14a1.5 1.5 0 1 0 -1.14 -2.474', key: 'svg-3' }],
   ]);
  },
  24214(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'text-size', 'TextSize', [
    ['path', { d: 'M3 7v-2h13v2', key: 'svg-0' }],
    ['path', { d: 'M10 5v14', key: 'svg-1' }],
    ['path', { d: 'M12 19h-4', key: 'svg-2' }],
    ['path', { d: 'M15 13v-1h6v1', key: 'svg-3' }],
    ['path', { d: 'M18 12v7', key: 'svg-4' }],
    ['path', { d: 'M17 19h2', key: 'svg-5' }],
   ]);
  },
  30662(e, n, s) {
   s.d(n, { D4: () => E, GP: () => M, KC: () => R, Nd: () => f, Rt: () => N, Vj: () => A, Wk: () => T, bz: () => C, cB: () => _, e5: () => G, hY: () => O, jK: () => D, jP: () => $, ob: () => L, rI: () => w, t4: () => H, vP: () => z, vg: () => P });
   var i = s(92081),
    a = s(90578),
    t = s(96345),
    o = s(64249),
    r = s(4603),
    d = s(91525),
    l = s(23436),
    c = s(1375),
    h = s(4077),
    p = s(58315),
    g = s(73563),
    v = s(35193),
    m = s(82999),
    u = s(13088),
    x = s(43864),
    k = s(24214),
    j = s(79532),
    b = s(60529),
    y = s(86070);
   const S = { width: '1em', height: '1em' },
    f = () => (0, y.jsx)(i.A, { ...S }),
    M = () => (0, y.jsx)(a.A, { ...S }),
    w = () => (0, y.jsx)(t.A, { ...S }),
    A = () => (0, y.jsx)(o.A, { ...S }),
    C = () => (0, y.jsx)(r.A, { ...S }),
    N = () => (0, y.jsx)(d.A, { ...S }),
    _ = () => (0, y.jsx)(l.A, { ...S }),
    z = () => (0, y.jsx)(c.A, { ...S }),
    D = () => (0, y.jsx)(h.A, { ...S }),
    $ = () => (0, y.jsx)(p.A, { ...S }),
    H = () => (0, y.jsx)(g.A, { ...S }),
    E = () => (0, y.jsx)(v.A, { ...S }),
    O = () => (0, y.jsx)(m.A, { ...S }),
    R = () => (0, y.jsx)(u.A, { ...S }),
    T = () => (0, y.jsx)(x.A, { ...S }),
    G = () => (0, y.jsx)(k.A, { ...S }),
    L = () => (0, y.jsx)(j.A, { ...S }),
    P = () => (0, y.jsx)(b.A, { ...S });
  },
  35193(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'palette', 'Palette', [
    ['path', { d: 'M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25', key: 'svg-0' }],
    ['path', { d: 'M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-1' }],
    ['path', { d: 'M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-2' }],
    ['path', { d: 'M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', key: 'svg-3' }],
   ]);
  },
  43864(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'shadow', 'Shadow', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M13 12h5', key: 'svg-1' }],
    ['path', { d: 'M13 15h4', key: 'svg-2' }],
    ['path', { d: 'M13 18h1', key: 'svg-3' }],
    ['path', { d: 'M13 9h4', key: 'svg-4' }],
    ['path', { d: 'M13 6h1', key: 'svg-5' }],
   ]);
  },
  56528(e, n, s) {
   s.d(n, { $: () => c, x: () => l });
   var i = s(30662),
    a = s(46447),
    t = s(13526),
    o = s(45795),
    r = s(30758),
    d = s(86070);
   const l = (0, r.createContext)({}),
    c = ({ title: e, appearance: n, description: s, children: r, figure: c = !0 }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      p = c ? 'figure' : 'div',
      g = c ? 'figcaption' : 'div',
      v = 'string' == typeof s ? (0, d.jsx)(o.oz, { components: { a: a.N_ }, children: s }) : s;
     return (0, d.jsxs)(p, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(g, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(a.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, d.jsx)(i.jP, {}) }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, d.jsx)(a.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(a.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(a.In, { 'aria-hidden': 'true', className: 'nlds-guideline__icon', children: (0, d.jsx)(i.jK, {}) }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, d.jsx)(a.fz, { children: e })] }), v] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(l.Provider, { value: { title: e, type: h[n] }, children: r }) })] });
    };
  },
  58315(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'mood-sad', 'MoodSad', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
  60529(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'user', 'User', [
    ['path', { d: 'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0', key: 'svg-0' }],
    ['path', { d: 'M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2', key: 'svg-1' }],
   ]);
  },
  64249(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  73563(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'number', 'Number', [
    ['path', { d: 'M4 17v-10l7 10v-10', key: 'svg-0' }],
    ['path', { d: 'M15 17h5', key: 'svg-1' }],
    ['path', { d: 'M15 10a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0', key: 'svg-2' }],
   ]);
  },
  79532(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'underline', 'Underline', [
    ['path', { d: 'M7 5v5a5 5 0 0 0 10 0v-5', key: 'svg-0' }],
    ['path', { d: 'M5 19h14', key: 'svg-1' }],
   ]);
  },
  82999(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'pointer', 'Pointer', [['path', { d: 'M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563', key: 'svg-0' }]]);
  },
  90578(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'calendar-event', 'CalendarEvent', [
    ['path', { d: 'M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12', key: 'svg-0' }],
    ['path', { d: 'M16 3l0 4', key: 'svg-1' }],
    ['path', { d: 'M8 3l0 4', key: 'svg-2' }],
    ['path', { d: 'M4 11l16 0', key: 'svg-3' }],
    ['path', { d: 'M8 15h2v2h-2l0 -2', key: 'svg-4' }],
   ]);
  },
  91525(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'file-typography', 'FileTypography', [
    ['path', { d: 'M14 3v4a1 1 0 0 0 1 1h4', key: 'svg-0' }],
    ['path', { d: 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2', key: 'svg-1' }],
    ['path', { d: 'M11 18h2', key: 'svg-2' }],
    ['path', { d: 'M12 18v-7', key: 'svg-3' }],
    ['path', { d: 'M9 12v-1h6v1', key: 'svg-4' }],
   ]);
  },
  92081(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'bold', 'Bold', [
    ['path', { d: 'M7 5h6a3.5 3.5 0 0 1 0 7h-6l0 -7', key: 'svg-0' }],
    ['path', { d: 'M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7', key: 'svg-1' }],
   ]);
  },
  96345(e, n, s) {
   s.d(n, { A: () => i });
   const i = (0, s(18652).A)('outline', 'chevron-down', 'ChevronDown', [['path', { d: 'M6 9l6 6l6 -6', key: 'svg-0' }]]);
  },
 },
]);
