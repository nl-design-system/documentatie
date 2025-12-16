'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [85661],
 {
  7361: (e, n, r) => {
   r.d(n, { A: () => m });
   var i = r(63674),
    t = r(92420),
    l = r(45648),
    o = r(14537),
    s = r(13526),
    c = r(86070);
   function a({ href: e, icon: n = '', title: r, description: i, children: l }) {
    return (0, c.jsxs)('div', { className: 'card', children: [e ? (0, c.jsx)(t.N, { href: e, className: (0, s.A)('cardLink', 'utrecht-link'), children: (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', r] }) }) : (0, c.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', r] }), i && (0, c.jsx)('p', { className: 'cardDescription', children: i }), l] });
   }
   function d({ item: e }) {
    return (0, c.jsx)(a, { title: e.label, description: e.description, children: (0, c.jsx)(o.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, c.jsx)(o.Er, { children: 'link' === e.type ? (0, c.jsx)(t.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, c.jsxs)(t.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, c.jsx)(c.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, l.cC)(e.docId);
    return (0, c.jsx)(a, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function u({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, c.jsx)(h, { item: e });
     case 'category':
      return (0, c.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function j({ className: e }) {
    const n = (0, i.$S)();
    return (0, c.jsx)(m, { items: n.items, className: e });
   }
   function m(e) {
    const { items: n, className: r } = e;
    if (!n) return (0, c.jsx)(j, { ...e });
    const t = (0, i.d1)(n);
    return (0, c.jsx)('section', { className: (0, s.A)('row', r), ...e, children: t.map((e, n) => (0, c.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, c.jsx)(u, { item: e }) }, n)) });
   }
  },
  49484: (e, n, r) => {
   r.d(n, { F: () => c });
   var i = r(63674),
    t = r(13526),
    l = r(7361),
    o = r(86070);
   const s = (e, n) => e.reduce((e, r) => ('link' === r.type ? (n.includes(r.docId) ? e : [...e, r]) : 'category' === r.type ? [...e, { ...r, items: s(r.items, n) }] : e), []),
    c = ({ excludeDocIDs: e = [], className: n, ...r }) => {
     const c = (0, i.$S)();
     return (0, o.jsx)('div', { ...r, className: (0, t.A)('margin-top--lg', n), children: (0, o.jsx)(l.A, { items: s(c.items, e) }) });
    };
  },
  63674: (e, n, r) => {
   r.d(n, { $S: () => i, d1: () => t });
   r(34374);
   function i(...e) {
    return r(41863).$S(...e);
   }
   function t(...e) {
    return r(41863).d1(...e);
   }
  },
  75427: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => d, contentTitle: () => a, default: () => j, frontMatter: () => c, metadata: () => i, toc: () => h });
   const i = JSON.parse('{"id":"richtlijnen/stijl/colour/README","title":"Introductie richtlijnen voor kleuren \xb7 Richtlijnen","description":"Kleuren zijn een belangrijk onderdeel van een ontwerp. Ze zorgen voor een visuele toon en helpen bij het overbrengen van functie en betekenis. Kleur wordt echter niet door iedereen op dezelfde manier ervaren. Daarom hebben kleuren een ondersteunende en geen essenti\xeble rol.","source":"@site/docs/richtlijnen/stijl/colour/README.mdx","sourceDirName":"richtlijnen/stijl/colour","slug":"/richtlijnen/stijl/kleuren/","permalink":"/richtlijnen/stijl/kleuren/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/colour/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Introductie richtlijnen voor kleuren \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie kleuren","sidebar_position":2,"pagination_label":"Introductie richtlijnen voor kleuren","description":"Kleuren zijn een belangrijk onderdeel van een ontwerp. Ze zorgen voor een visuele toon en helpen bij het overbrengen van functie en betekenis. Kleur wordt echter niet door iedereen op dezelfde manier ervaren. Daarom hebben kleuren een ondersteunende en geen essenti\xeble rol.","slug":"/richtlijnen/stijl/kleuren/","keywords":["kleur","kleuren"]},"sidebar":"richtlijnen","previous":{"title":"Uitlijning","permalink":"/richtlijnen/stijl/typografie/uitlijning"},"next":{"title":"Introductie richtlijnen voor kleuren","permalink":"/richtlijnen/stijl/kleuren/"}}');
   var t = r(86070),
    l = r(85248),
    o = r(78734),
    s = r(49484);
   const c = { title: 'Introductie richtlijnen voor kleuren \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie kleuren', sidebar_position: 2, pagination_label: 'Introductie richtlijnen voor kleuren', description: 'Kleuren zijn een belangrijk onderdeel van een ontwerp. Ze zorgen voor een visuele toon en helpen bij het overbrengen van functie en betekenis. Kleur wordt echter niet door iedereen op dezelfde manier ervaren. Daarom hebben kleuren een ondersteunende en geen essenti\xeble rol.', slug: '/richtlijnen/stijl/kleuren/', keywords: ['kleur', 'kleuren'] },
    a = 'Richtlijnen NL Design System voor kleuren',
    d = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Deel je gebruikersonderzoek', id: 'deel-je-gebruikersonderzoek', level: 2 }, ...o.RM];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-kleuren', children: 'Richtlijnen NL Design System voor kleuren' }) }), '\n', (0, t.jsx)(n.p, { children: 'Kleuren zijn een belangrijk onderdeel van een ontwerp. Ze zorgen voor een visuele toon en helpen bij het overbrengen van functie en betekenis.' }), '\n', (0, t.jsx)(n.p, { children: 'Kleur wordt echter niet door iedereen op dezelfde manier ervaren. Daarom hebben kleuren een ondersteunende en geen essenti\xeble rol.' }), '\n', (0, t.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, t.jsx)(s.F, { excludeDocIDs: ['richtlijnen/stijl/colour/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/contrast/', children: 'Contrast - NL Design System' }), (0, t.jsx)('br', {}), '\nOnline tool ontwikkelt door NL Design System om contrast tussen twee kleuren te meten.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://help.figma.com/hc/en-us/articles/360041003774-Update-fills-using-the-color-picker#h_01JQF1T71AC72G6VDXN27B77V0', children: 'Contrast - Figma' }), (0, t.jsx)('br', {}), '\nDocumentatie over hoe je in Figma contrast kunt meten.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://colorandcontrast.com/', children: 'Color and Contrast - Nate Baldwin' }), (0, t.jsx)('br', {}), '\nWebsite met uitgebreide en interactieve documentatie over kleur.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://accessiblepalette.com/', children: 'Accessible Palette - Eugene Fedorenko' }), (0, t.jsx)('br', {}), '\nOnline tool waarmee je een kleurenpalet kunt genereren en direct contrast kunt checken.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://contrast-grid.eightshapes.com/', children: 'Contrast grid - Eightshapes' }), (0, t.jsx)('br', {}), '\nOnline tool waarbij je meerdere kleuren kunt invullen. Vervolgens ontstaat er een tabel waardoor je het contrast kunt checken.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://color.review/', children: 'Color review - Anton Robsarve' }), (0, t.jsx)('br', {}), '\nOnline tool waarbij je twee kleuren kunt invullen. Vervolgens kun je checken hoeveel contrast deze kleurcombinatie oplevert. Daarnaast heb je de mogelijkheid om via een colorpicker naar voldoende contrast op zoek te gaan.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://randoma11y.com/', children: 'Radoma11y - Components AI' }), (0, t.jsx)('br', {}), '\nOnline tool die willekeurig twee kleurcombinaties samensteld die altijd voldoende contrast hebben.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://whocanuse.com/', children: 'Who can use - Corey Ginnivan' }), (0, t.jsx)('br', {}), '\nOnline tool waarbij je twee kleuren kunt invullen. Vervolgens kun je checken hoe deze kleurcombinatie overkomt bij verschillende visuele beperkingen.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://projects.susielu.com/viz-palette', children: 'Viz palette - Elijah Meeks & Susie Lu' }), (0, t.jsx)('br', {}), '\nOnline tool waarbij je meerdere kleuren kunt invullen specifiek voor data visualisatie. Vervolgens kun je checken hoe deze kleurcombinatie overkomt bij verschillende visuele beperkingen.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://chromewebstore.google.com/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg', children: 'Chrome plugin: Colorblindly' }), (0, t.jsx)('br', {}), '\nBrowser plugin waarmee je kunt checken hoe een webpagina overkomt bij verschillende vormen van kleurenblindheid.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.bounteous.com/insights/2019/03/22/orange-you-accessible-mini-case-study-color-ratio/', children: 'Orange you accessible?' }), (0, t.jsx)('br', {}), '\nArtikel over een onderzoek naar contrast voor de kleur oranje.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/', children: 'Guide windows high contrast mode' }), (0, t.jsx)('br', {}), '\nArtikel waarin wordt beschreven hoe je een website kan inrichten zodat Windows High Contrast mode wordt ondersteund.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'deel-je-gebruikersonderzoek', children: 'Deel je gebruikersonderzoek' }), '\n', (0, t.jsxs)(n.p, { children: ['Er is nog veel te onderzoeken over het gebruik van kleur. Doe je gebruikersonderzoek? Deel dan alsjeblieft je bevindingen op ', (0, t.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl/', children: 'gebruikersonderzoeken.nl' }), ' zodat we hiervan allemaal kunnen leren.'] }), '\n', (0, t.jsx)(o.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(u, { ...e }) }) : u(e);
   }
  },
  78734: (e, n, r) => {
   r.d(n, { Ay: () => s, RM: () => l });
   var i = r(86070),
    t = r(85248);
   const l = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function o(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
   }
  },
  85248: (e, n, r) => {
   r.d(n, { R: () => o, x: () => s });
   var i = r(30758);
   const t = {},
    l = i.createContext(t);
   function o(e) {
    const n = i.useContext(l);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), i.createElement(l.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, r) => {
   r.d(n, { N: () => o });
   var i = r(71170),
    t = r(13526),
    l = r(86070);
   const o = ({ className: e, ...n }) => (0, l.jsx)(i.A, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
