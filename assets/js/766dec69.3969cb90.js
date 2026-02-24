'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [85661],
 {
  18439(e, n, r) {
   r.d(n, { R: () => l, x: () => s });
   var i = r(30758);
   const t = {},
    o = i.createContext(t);
   function l(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), i.createElement(o.Provider, { value: n }, e.children));
   }
  },
  75427(e, n, r) {
   (r.r(n), r.d(n, { assets: () => c, contentTitle: () => a, default: () => u, frontMatter: () => s, metadata: () => i, toc: () => d }));
   const i = JSON.parse('{"id":"richtlijnen/stijl/colour/README","title":"Introductie richtlijnen voor kleuren \xb7 Richtlijnen","description":"Kleuren zijn een belangrijk onderdeel van een ontwerp. Ze zorgen voor een visuele toon en helpen bij het overbrengen van functie en betekenis. Kleur wordt echter niet door iedereen op dezelfde manier ervaren. Daarom hebben kleuren een ondersteunende en geen essenti\xeble rol.","source":"@site/docs/richtlijnen/stijl/colour/README.mdx","sourceDirName":"richtlijnen/stijl/colour","slug":"/richtlijnen/stijl/kleuren/","permalink":"/richtlijnen/stijl/kleuren/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/colour/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Introductie richtlijnen voor kleuren \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie kleuren","sidebar_position":2,"pagination_label":"Introductie richtlijnen voor kleuren","description":"Kleuren zijn een belangrijk onderdeel van een ontwerp. Ze zorgen voor een visuele toon en helpen bij het overbrengen van functie en betekenis. Kleur wordt echter niet door iedereen op dezelfde manier ervaren. Daarom hebben kleuren een ondersteunende en geen essenti\xeble rol.","slug":"/richtlijnen/stijl/kleuren/","keywords":["kleur","kleuren"]},"sidebar":"richtlijnen","previous":{"title":"Uitlijning","permalink":"/richtlijnen/stijl/typografie/uitlijning"},"next":{"title":"Introductie richtlijnen voor kleuren","permalink":"/richtlijnen/stijl/kleuren/"}}');
   var t = r(86070),
    o = r(18439),
    l = r(78734);
   const s = { title: 'Introductie richtlijnen voor kleuren \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie kleuren', sidebar_position: 2, pagination_label: 'Introductie richtlijnen voor kleuren', description: 'Kleuren zijn een belangrijk onderdeel van een ontwerp. Ze zorgen voor een visuele toon en helpen bij het overbrengen van functie en betekenis. Kleur wordt echter niet door iedereen op dezelfde manier ervaren. Daarom hebben kleuren een ondersteunende en geen essenti\xeble rol.', slug: '/richtlijnen/stijl/kleuren/', keywords: ['kleur', 'kleuren'] },
    a = 'Richtlijnen NL Design System voor kleuren',
    c = {},
    d = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Deel je gebruikersonderzoek', id: 'deel-je-gebruikersonderzoek', level: 2 }, ...l.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components },
     { OverviewPage: r } = n;
    return (
     r ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-kleuren', children: 'Richtlijnen NL Design System voor kleuren' }) }), '\n', (0, t.jsx)(n.p, { children: 'Kleuren zijn een belangrijk onderdeel van een ontwerp. Ze zorgen voor een visuele toon en helpen bij het overbrengen van functie en betekenis.' }), '\n', (0, t.jsx)(n.p, { children: 'Kleur wordt echter niet door iedereen op dezelfde manier ervaren. Daarom hebben kleuren een ondersteunende en geen essenti\xeble rol.' }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(r, { excludeDocIDs: ['richtlijnen/stijl/colour/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/contrast/', children: 'Contrast - NL Design System' }), (0, t.jsx)('br', {}), '\nOnline tool ontwikkelt door NL Design System om contrast tussen twee kleuren te meten.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://help.figma.com/hc/en-us/articles/360041003774-Update-fills-using-the-color-picker#h_01JQF1T71AC72G6VDXN27B77V0', children: 'Contrast - Figma' }), (0, t.jsx)('br', {}), '\nDocumentatie over hoe je in Figma contrast kunt meten.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://colorandcontrast.com/', children: 'Color and Contrast - Nate Baldwin' }), (0, t.jsx)('br', {}), '\nWebsite met uitgebreide en interactieve documentatie over kleur.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://accessiblepalette.com/', children: 'Accessible Palette - Eugene Fedorenko' }), (0, t.jsx)('br', {}), '\nOnline tool waarmee je een kleurenpalet kunt genereren en direct contrast kunt checken.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://contrast-grid.eightshapes.com/', children: 'Contrast grid - Eightshapes' }), (0, t.jsx)('br', {}), '\nOnline tool waarbij je meerdere kleuren kunt invullen. Vervolgens ontstaat er een tabel waardoor je het contrast kunt checken.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://color.review/', children: 'Color review - Anton Robsarve' }), (0, t.jsx)('br', {}), '\nOnline tool waarbij je twee kleuren kunt invullen. Vervolgens kun je checken hoeveel contrast deze kleurcombinatie oplevert. Daarnaast heb je de mogelijkheid om via een colorpicker naar voldoende contrast op zoek te gaan.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://randoma11y.com/', children: 'Radoma11y - Components AI' }), (0, t.jsx)('br', {}), '\nOnline tool die willekeurig twee kleurcombinaties samensteld die altijd voldoende contrast hebben.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://whocanuse.com/', children: 'Who can use - Corey Ginnivan' }), (0, t.jsx)('br', {}), '\nOnline tool waarbij je twee kleuren kunt invullen. Vervolgens kun je checken hoe deze kleurcombinatie overkomt bij verschillende visuele beperkingen.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://projects.susielu.com/viz-palette', children: 'Viz palette - Elijah Meeks & Susie Lu' }), (0, t.jsx)('br', {}), '\nOnline tool waarbij je meerdere kleuren kunt invullen specifiek voor data visualisatie. Vervolgens kun je checken hoe deze kleurcombinatie overkomt bij verschillende visuele beperkingen.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://chromewebstore.google.com/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg', children: 'Chrome plugin: Colorblindly' }), (0, t.jsx)('br', {}), '\nBrowser plugin waarmee je kunt checken hoe een webpagina overkomt bij verschillende vormen van kleurenblindheid.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.bounteous.com/insights/2019/03/22/orange-you-accessible-mini-case-study-color-ratio/', children: 'Orange you accessible?' }), (0, t.jsx)('br', {}), '\nArtikel over een onderzoek naar contrast voor de kleur oranje.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/', children: 'Guide windows high contrast mode' }), (0, t.jsx)('br', {}), '\nArtikel waarin wordt beschreven hoe je een website kan inrichten zodat Windows High Contrast mode wordt ondersteund.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'deel-je-gebruikersonderzoek', children: 'Deel je gebruikersonderzoek' }), '\n', (0, t.jsxs)(n.p, { children: ['Er is nog veel te onderzoeken over het gebruik van kleur. Doe je gebruikersonderzoek? Deel dan alsjeblieft je bevindingen op ', (0, t.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl/', children: 'gebruikersonderzoeken.nl' }), ' zodat we hiervan allemaal kunnen leren.'] }), '\n', (0, t.jsx)(l.Ay, {})] })
    );
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => s, RM: () => o });
   var i = r(86070),
    t = r(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(l, { ...e }) }) : l(e);
   }
  },
 },
]);
