'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8742],
 {
  55400: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var r = i(52676),
    t = i(24785);
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  39694: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => s, default: () => v, frontMatter: () => d, metadata: () => c, toc: () => m });
   var r = i(52676),
    t = i(24785);
   function l(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h3: 'h3', img: 'img', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'gebruik-geen-html-formuliervalidatie', children: 'Gebruik geen HTML-formuliervalidatie' }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_html_validatie.png', alt: 'Voorbeeld van HTML-validatie, een ballonnetje boven het formulierveld met de tekst: vul dit veld in' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['De meeste browsers kunnen zelf controleren of een veld is ingevuld. Dit gebeurt als het HTML-attribuut ', (0, r.jsx)(n.code, { children: 'required' }), ' in het formulierveld staat.'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<input type="text" id="voorbeeld" name="voorbeeld" required />\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Dit type foutafhandeling geeft onvoldoende informatie. In veel browsers wordt niet aan alle gebruikers overgebracht dat het veld verplicht is, en mist uitleg wanneer niet wordt voldaan een een opgegeven ', (0, r.jsx)(n.code, { children: 'pattern' }), '. Zie ook: ', (0, r.jsx)(n.a, { href: 'https://adrianroselli.com/2019/02/avoid-default-field-validation.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Avoid default field validation' }) }), ' van Adrian Roselli.'] }), '\n', (0, r.jsx)(n.p, { children: 'Wanneer er voldoende tijd en kennis is, heeft het de voorkeur om zelf client-side validatie toe te voegen.' }), '\n', (0, r.jsxs)(n.p, { children: ['Om specifiek aan hulptechnologie\xebn te communiceren dat een veld verplicht is, kan ', (0, r.jsx)(n.code, { children: 'aria-required' }), ' worden gebruikt. Als je alleen ', (0, r.jsx)(n.code, { children: 'aria-required' }), ' gebruikt, zal de browser niet zelf valideren of feedback geven.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Het toegankelijk maken van foutmeldingen is nodig om te voldoen aan het ', (0, r.jsx)(n.a, { href: '/wcag/3.3.1/', children: 'WCAG-succescriterium 3.3.1 Foutidentificatie' }), ' (niveau A).'] }), '\n', (0, r.jsx)(n.h3, { id: 'progressive-enhancement', children: 'Progressive enhancement' }), '\n', (0, r.jsx)(n.p, { children: 'Alhoewel we HTML-formuliervalidatie afraden en niet als eindoplossing zien, kan het nuttig zijn om te gebruiken als fallback bij een slechte internetverbinding als er nog geen JavaScript beschikbaar is.' }), '\n', (0, r.jsx)(n.p, { children: 'Deze optie geldt alleen voor formulieren waarbij de foutmeldingen worden afgehandeld door JavaScript.' }), '\n', (0, r.jsx)(n.p, { children: 'De opzet is dan als volgt:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Bij de formuliervelden wordt het attribuut ', (0, r.jsx)(n.code, { children: 'required' }), " gebruikt in plaats van 'aria-required`."] }), '\n', (0, r.jsxs)(n.li, { children: ['Zodra de JavaScript wordt ingeladen wordt meteen het attribuut ', (0, r.jsx)(n.code, { children: 'novalidate' }), ' toegevoegd aan het ', (0, r.jsx)(n.code, { children: '<form>' }), ' element om de HTML-validatie uit te schakelen.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Dan voorkom je dat gebruikers met een slechte internetverbinding niet op tijd worden ge\xefnformeerd over fouten in het formulier.' }), '\n', (0, r.jsx)(n.p, { children: 'Dit is een optie en geen vereiste. Uiteindelijk is een op maat gemaakte server side eind-validatie van de formuliervelden het meest betrouwbaar en toegankelijk en daardoor de richtlijn.' })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
   var a = i(55400);
   const d = { title: 'Gebruik geen HTML-formuliervalidatie \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'HTML-formuliervalidatie', pagination_label: 'HTML-formuliervalidatie', description: 'Richtlijnen voor gebruik van HTML-formuliervalidatie in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie', keywords: ['labels', 'formulier', 'design', 'code'] },
    s = void 0,
    c = { id: 'richtlijnen/formulieren/error/no-native-validation/README', title: 'Gebruik geen HTML-formuliervalidatie \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor gebruik van HTML-formuliervalidatie in een formulier.', source: '@site/docs/richtlijnen/formulieren/error/5-no-native-validation/README.mdx', sourceDirName: 'richtlijnen/formulieren/error/5-no-native-validation', slug: '/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie', permalink: '/en/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/5-no-native-validation/README.mdx', tags: [], version: 'current', frontMatter: { title: 'Gebruik geen HTML-formuliervalidatie \xb7 Foutmeldingen in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'HTML-formuliervalidatie', pagination_label: 'HTML-formuliervalidatie', description: 'Richtlijnen voor gebruik van HTML-formuliervalidatie in een formulier.', slug: '/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie', keywords: ['labels', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Plaatsing foutmelding', permalink: '/en/richtlijnen/formulieren/foutmeldingen/plaatsing' }, next: { title: 'Samenvatting fouten', permalink: '/en/richtlijnen/formulieren/foutmeldingen/samenvatting' } },
    u = {},
    m = [];
   function h(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(o, {}), '\n', (0, r.jsx)(a.ZP, {})] });
   }
   function v(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h();
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => o });
   var r = i(75271);
   const t = {},
    l = r.createContext(t);
   function o(e) {
    const n = r.useContext(l);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), r.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
