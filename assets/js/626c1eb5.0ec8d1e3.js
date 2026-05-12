/*! For license information please see 626c1eb5.0ec8d1e3.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [71919],
 {
  2003(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => l, default: () => h, frontMatter: () => a, metadata: () => s, toc: () => c }));
   const s = JSON.parse('{"id":"handboek/developer/conventies/css-conventie","title":"CSS conventie","description":"Conventies voor het schrijven van CSS voor NL Design System","source":"@site/docs/handboek/developer/03-conventies/03-css-conventie.md","sourceDirName":"handboek/developer/03-conventies","slug":"/handboek/developer/css-conventie/","permalink":"/handboek/developer/css-conventie/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/03-conventies/03-css-conventie.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"CSS conventie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"CSS conventie","pagination_label":"CSS conventie","description":"Conventies voor het schrijven van CSS voor NL Design System","slug":"/handboek/developer/css-conventie/","keywords":["developer","CSS","componenten"]},"sidebar":"handboek","previous":{"title":"Design Token conventie","permalink":"/handboek/developer/design-token-conventie/"},"next":{"title":"API conventie","permalink":"/handboek/developer/api-conventie/"}}');
   var o = i(86070),
    r = i(18439),
    t = i(88022);
   const a = { title: 'CSS conventie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'CSS conventie', pagination_label: 'CSS conventie', description: 'Conventies voor het schrijven van CSS voor NL Design System', slug: '/handboek/developer/css-conventie/', keywords: ['developer', 'CSS', 'componenten'] },
    l = 'CSS conventie',
    d = {},
    c = [
     { value: 'Huisstijl onafhankelijk', id: 'huisstijl-onafhankelijk', level: 2 },
     { value: 'Ge\xefsoleerde theming', id: 'ge\xefsoleerde-theming', level: 2 },
     { value: 'Herleidbare prefix', id: 'herleidbare-prefix', level: 2 },
     { value: 'Herbruikbare mixins', id: 'herbruikbare-mixins', level: 2 },
     { value: 'Robuuste reset', id: 'robuuste-reset', level: 2 },
     { value: 'Reset in een SCSS mixin', id: 'reset-in-een-scss-mixin', level: 3 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', p: 'p', pre: 'pre', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'css-conventie', children: 'CSS conventie' }) }), '\n', (0, o.jsx)(n.p, { children: 'Dit document beschrijft de conventies voor het schrijven van herbruikbare CSS voor componenten en applicaties met NL Design System. Deze zijn bedoeld voor iedereen die nieuwe componenten ontwikkelt of bijdraagt aan gedeelde CSS-bibliotheken en voor iedereen die aanvullende CSS scrhijft in een herbruikbare applicatie.' }), '\n', (0, o.jsx)(n.h2, { id: 'huisstijl-onafhankelijk', children: 'Huisstijl onafhankelijk' }), '\n', (0, o.jsxs)(n.p, { children: ['Schrijf CSS die ook werkt voor anderen. Herbruikbare CSS gebruikt geen huisstijlcode. CSS-variabelen worden gebruikt voor ', (0, o.jsx)(n.em, { children: 'component design tokens' }), ' die ingevuld kunnen worden met de huisstijl van een organisatie. Dit is van belang wanneer componenten door anderen worden gebruikt, of wanneer software door meerdere organisaties met hun eigen huisstijl wordt ge\xefnstalleerd, zoals een CMS voor gemeenten of ', (0, o.jsx)(n.a, { href: 'http://commonground.nl', children: 'Common Ground' }), '-software.'] }), '\n', (0, o.jsx)(t.$, { appearance: 'do', title: 'Gebruik component tokens voor de design beslissingen die per huisstijl verschillen.', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '.example-button {\n  background-color: var(--example-button-background-color);\n}\n' }) }) }), '\n', (0, o.jsx)(t.$, { appearance: 'do', title: 'Gebruik basis tokens voor de design beslissingen in een custom.css of componenten die niet in het design system zitten.', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '.example-custom-footer {\n  background-color: var(--basis-color-accent-1-inverse-bg-document);\n  color: var(--basis-color-accent-1-inverse-color-default);\n}\n' }) }) }), '\n', (0, o.jsx)(t.$, { appearance: 'do', title: 'Gebruik basis tokens als fallback voor de design beslissingen in componenten die nog niet in de community zitten.', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '.example-custom-footer {\n  background-color: var(--example-custom-footer-background-color, var(--basis-color-accent-1-inverse-bg-document));\n  color: var(--example-custom-footer-color, var(--basis-color-accent-1-inverse-color-default));\n}\n' }) }) }), '\n', (0, o.jsx)(t.$, { appearance: 'dont', title: 'Hardcoded waardes voor design beslissingen', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '.example-custom-footer {\n  background-color: #663399;\n}\n' }) }) }), '\n', (0, o.jsx)(t.$, { appearance: 'dont', title: 'Huisstijl tokens van jouw organisatie in de component', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '.example-custom-footer {\n  background-color: var(--purple);\n}\n' }) }) }), '\n', (0, o.jsx)(n.h2, { id: 'ge\xefsoleerde-theming', children: 'Ge\xefsoleerde theming' }), '\n', (0, o.jsx)(n.p, { children: 'Zorg dat de CSS van een thema niet de stylesheet van anderen in de weg zit. De huisstijlcode staat voor iedere organisatie in een apart thema-bestand. Gedeelde CSS wordt aangeboden zonder side-effects. De CSS heeft pas effect op een pagina nadat een expliciete CSS-class is toegepast. Zo kan hergebruik plaatsvinden zonder onbedoelde invloed op bestaande stylesheets.' }), '\n', (0, o.jsx)(t.$, { appearance: 'do', title: 'Gebruik brand tokens in je thema', description: 'Daarin verwijst de `component design token` naar de `brand design token`', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '  /* Voorbeeld thema in CSS op basis van de Design Tokens JSON */\n  .example-theme {\n    --example-purple: #663399;\n    --example-button-background-color: var(--example-purple);\n  }\n' }) }) }), '\n', (0, o.jsxs)(n.p, { children: ['Dit thema-bestand kan automatisch worden gegenereerd via een ', (0, o.jsx)(n.a, { href: 'https://design-tokens.github.io/community-group/format/', children: 'Design Tokens JSON-bestand' }), ' met ', (0, o.jsx)(n.a, { href: 'https://styledictionary.com', children: 'Style Dictionary' }), '. Elke huisstijl kan een eigen design token JSON-bestand hebben dat in meerdere projecten wordt gebruikt.'] }), '\n', (0, o.jsx)(t.$, { appearance: 'do', title: 'Huisstijl inladen met een eigen class name', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-html', children: '<html class="utrecht-root example-theme">\n\x3c!-- \n  Example use of Community, Candidate and custom components\n  that will be styled by the example-theme stylesheet\n--\x3e\n  <body class="utrecht-body">\n    <h1 class="nl-heading nl-heading--level-1">Example page</h1>\n    <div class="example-card-group">\n      <div class="example-card">\n        <h2 class="example-card__heading nl-heading nl-heading--level-2">Hello</h2>\n        <p class="nl-paragraph">Some content here</p>\n      </div>\n    </div>\n  </body>\n</html>\n' }) }) }), '\n', (0, o.jsx)(t.$, { appearance: 'dont', title: 'Huisstijl inladen in de :root', description: 'Zo kunnen andere stylesheets niet makkelijk worden ingeladen zonder mogelijke side-effects', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: ':root {\n  --example-link-color: rebeccapurple;\n}\n' }) }) }), '\n', (0, o.jsx)(n.h2, { id: 'herleidbare-prefix', children: 'Herleidbare prefix' }), '\n', (0, o.jsx)(n.p, { children: 'Zorg dat de prefix van de componenten en tokens herkenbaar en herleidbaar is. De componenten bij NL Design System worden bijgedragen door diverse organisaties. Om te herleiden waar een component vandaan komt en met wie je kan samenwerken om een verbetering door te voeren houden we de prefix van die organisatie aan. Ook in de applicatie van een organisatie met een andere naam. Het kan dus voorkomen dat een thema bestaat uit design tokens van diverse organisaties.' }), '\n', (0, o.jsx)(t.$, { appearance: 'do', title: 'Gebruik de prefix van de organisatie die de componenten beheert', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '/* Voorbeeld CSS Output van de Design Tokens JSON met diverse componenten */\n.example theme {\n  --ams-breadcrumb-link-color: blue;\n  --nl-link-color: blue;\n  --utrecht-button-background-color: rebeccapurple;\n}\n' }) }) }), '\n', (0, o.jsx)(t.$, { appearance: 'do', title: 'Eigen prefix voor nieuwe componenten', description: 'Alle namen in gedeelde CSS beginnen met een prefix die uniek is voor de organisatie. De prefix bestaat uitsluitend uit letters en cijfers, zonder koppelstreepjes of andere tekens.', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '.example-video {\n  border-color: var(--example-video-border-color);\n  border-radius: var(--example-video-border-radius);\n  border-width: var(--example-video-border-width);\n}\n' }) }) }), '\n', (0, o.jsx)(t.$, { appearance: 'do', title: 'Eigen prefix voor specifieke component tokens bij gebruik van andere componenten', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '.example-video__button {\n  --nl-button-background-color: var(--example-video-button-background-color);\n  --nl-button-color: var(--example-video-button-color);\n}\n' }) }) }), '\n', (0, o.jsx)(t.$, { appearance: 'dont', title: 'Eigen CSS om de tokens of CSS van een andere prefix te voorzien', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '/* Voorbeeld CSS Output van de Design Tokens JSON met diverse componenten */\n.example theme {\n--example-breadcrumb-link-color: blue;\n--example-link-color: blue;\n--example-button-background-color: rebeccapurple;\n}\n/* Voorbeeld pseudo CSS om onnodig eigen componenten logica te onderhouden */\n.example-breadcrumb {\n--ams-breadcrumb-link-color: var(--example-breadcrumb-link-color);\n@include ams-breadcrumb;\n}\n' }) }) }), '\n', (0, o.jsx)(n.h2, { id: 'herbruikbare-mixins', children: 'Herbruikbare mixins' }), '\n', (0, o.jsxs)(n.p, { children: ['Schrijf SCSS mixins voor gebruik met andere CSS selectors. CSS-onderdelen worden aangeboden als ', (0, o.jsx)(n.a, { href: 'https://sass-lang.com/documentation/at-rules/mixin', children: 'SCSS-mixin' }), ', zodat andere projecten dezelfde stijlen kunnen toepassen op afwijkende selectors.'] }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.code, { children: '_mixin.scss' }), ':'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-scss', children: '@mixin example-link {\n  color: var(--example-link-color);\n}\n' }) }), '\n', (0, o.jsxs)(n.p, { children: [(0, o.jsx)(n.code, { children: 'index.scss' }), ':'] }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-scss', children: '@import "./mixin";\n\n.example-link {\n  @include example-link;\n}\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Een project dat geen invloed heeft op de HTML past de mixin toe op alle links:' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-scss', children: '@import "@example/css-components/link";\n\na:link {\n  @include example-link;\n}\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Een project met Shadow DOM:' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-scss', children: '@import "@example/css-components/link";\n\n:host {\n  @include example-link;\n}\n' }) }), '\n', (0, o.jsx)(n.p, { children: 'Een project dat de mixin tijdelijk gebruikt tijdens een migratie van oude class names:' }), '\n', (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-scss', children: '@import "@example/css-components/link";\n\n.old-link {\n  @include example-link;\n}\n' }) }), '\n', (0, o.jsx)(n.h2, { id: 'robuuste-reset', children: 'Robuuste reset' }), '\n', (0, o.jsxs)(n.p, { children: ['Schrijf robuuste CSS die niet afhankelijk is van een algemene ', (0, o.jsx)(n.code, { children: 'reset.css' }), '. Wanneer een HTML-element zoals ', (0, o.jsx)(n.code, { children: '<ul>' }), ' wordt gebruikt voor een navigatiecomponent, worden browser-standaardstijlen \u2014 zoals ', (0, o.jsx)(n.code, { children: 'padding-inline-start' }), ' in ', (0, o.jsx)(n.a, { href: 'https://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css', children: 'Firefox' }), ' of ', (0, o.jsx)(n.a, { href: 'https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css', children: 'Safari' }), ' \u2014 expliciet gereset.'] }), '\n', (0, o.jsx)(t.$, { appearance: 'do', title: 'Reset CSS in de component zelf', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: 'ul.example-nav {\n  padding-inline-start: 0;\n  /* \u2026other styles\u2026 */\n}\n' }) }) }), '\n', (0, o.jsxs)(n.p, { children: ['Ook als het project een ', (0, o.jsxs)(n.a, { href: 'https://meyerweb.com/eric/tools/css/reset/', children: [(0, o.jsx)(n.code, { children: 'reset.css' }), '-variant'] }), ' gebruikt, blijft deze reset aanwezig in de componentcode zodat het ook werkt voor projecten zonder die ', (0, o.jsx)(n.code, { children: 'reset.css' }), '.'] }), '\n', (0, o.jsx)(t.$, { appearance: 'dont', title: 'Globale CSS reset', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-css', children: '* {\n  padding: 0;\n}\n' }) }) }), '\n', (0, o.jsx)(n.h3, { id: 'reset-in-een-scss-mixin', children: 'Reset in een SCSS mixin' }), '\n', (0, o.jsxs)(n.p, { children: ['Wanneer een property is ingesteld op de ', (0, o.jsx)(n.em, { children: 'initial value' }), ' (zoals ', (0, o.jsx)(n.code, { children: '0' }), ' voor padding), kan dit eruitzien als overbodige code. Als reset-code in een losse mixin staat, ontbreekt de context dat het bedoeld is als browser-reset.'] }), '\n', (0, o.jsx)(t.$, { appearance: 'do', title: 'Reset in een mixin', description: 'Om te voorkomen dat de code later als dode code wordt verwijderd, staat reset-code in een eigen mixin', children: (0, o.jsx)(n.pre, { children: (0, o.jsx)(n.code, { className: 'language-scss', children: '@mixin reset-ul {\n  padding-inline-start: 0;\n  /* \u2026other styles\u2026 */\n}\n\n@mixin example-nav {\n  @include reset-ul;\n  /* \u2026other styles\u2026 */\n}\n' }) }) })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
   }
  },
  4077(e, n, i) {
   i.d(n, { A: () => s });
   const s = (0, i(18652).A)('outline', 'mood-happy', 'MoodHappy', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 9l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 9l.01 0', key: 'svg-2' }],
    ['path', { d: 'M8 13a4 4 0 1 0 8 0h-8', key: 'svg-3' }],
   ]);
  },
  18439(e, n, i) {
   i.d(n, { R: () => t, x: () => a });
   var s = i(30758);
   const o = {},
    r = s.createContext(o);
   function t(e) {
    const n = s.useContext(r);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : t(e.components)), s.createElement(r.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, i) {
   i.d(n, { A: () => r });
   var s = i(30758),
    o = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const r = (e, n, i, r) => {
    const t = (0, s.forwardRef)(({ color: i = 'currentColor', size: t = 24, stroke: a = 2, title: l, className: d, children: c, ...p }, h) => (0, s.createElement)('svg', { ref: h, ...o[e], width: t, height: t, className: ['tabler-icon', `tabler-icon-${n}`, d].join(' '), ...('filled' === e ? { fill: i } : { strokeWidth: a, stroke: i }), ...p }, [l && (0, s.createElement)('title', { key: 'svg-title' }, l), ...r.map(([e, n]) => (0, s.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]));
    return ((t.displayName = `${i}`), t);
   };
  },
  58315(e, n, i) {
   i.d(n, { A: () => s });
   const s = (0, i(18652).A)('outline', 'mood-sad', 'MoodSad', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M9 10l.01 0', key: 'svg-1' }],
    ['path', { d: 'M15 10l.01 0', key: 'svg-2' }],
    ['path', { d: 'M9.5 15.25a3.5 3.5 0 0 1 5 0', key: 'svg-3' }],
   ]);
  },
  88022(e, n, i) {
   i.d(n, { $: () => p, x: () => c });
   var s = i(4077),
    o = i(58315),
    r = i(46447),
    t = i(13526),
    a = i(9547),
    l = i(30758),
    d = i(86070);
   const c = (0, l.createContext)({}),
    p = ({ title: e, appearance: n, description: i, children: l, figure: p }) => {
     const h = { do: 'Doen', dont: 'Niet doen' },
      m = p ? 'figure' : 'div',
      u = p ? 'figcaption' : 'div',
      g = 'string' == typeof i ? (0, d.jsx)(a.oz, { children: i }) : i;
     return (0, d.jsxs)(m, { className: (0, t.A)('nlds-guideline', `nlds-guideline--${n}`), id: 'string' == typeof e ? e?.toLowerCase().replace(/\s/g, '-') : void 0, children: [(0, d.jsxs)(u, { className: 'nlds-guideline__description', children: ['dont' === n ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(o.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.dont })] }), (0, d.jsx)(r.fz, { children: e })] }) : (0, d.jsxs)(d.Fragment, { children: [(0, d.jsxs)(r.fz, { className: (0, t.A)('nlds-guideline__badge', `nlds-guideline__badge--${n}`), children: [(0, d.jsx)(s.A, { 'aria-hidden': 'true', role: 'presentation', className: 'nlds-guideline__icon' }), (0, d.jsx)('span', { className: 'nlds-guideline__title', children: h.do })] }), (0, d.jsx)(r.fz, { children: e })] }), g] }), (0, d.jsx)('div', { className: 'nlds-guideline__example', children: (0, d.jsx)(c.Provider, { value: { title: e, type: h[n] }, children: l }) })] });
    };
  },
 },
]);
