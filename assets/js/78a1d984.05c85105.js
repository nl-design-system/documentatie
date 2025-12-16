'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [95257],
 {
  7361: (e, n, i) => {
   i.d(n, { A: () => g });
   var t = i(63674),
    r = i(92420),
    o = i(45648),
    s = i(14537),
    l = i(13526),
    a = i(86070);
   function c({ href: e, icon: n = '', title: i, description: t, children: o }) {
    return (0, a.jsxs)('div', { className: 'card', children: [e ? (0, a.jsx)(r.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, a.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }) }) : (0, a.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', i] }), t && (0, a.jsx)('p', { className: 'cardDescription', children: t }), o] });
   }
   function d({ item: e }) {
    return (0, a.jsx)(c, { title: e.label, description: e.description, children: (0, a.jsx)(s.Xy, { children: e.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, a.jsx)(s.Er, { children: 'link' === e.type ? (0, a.jsx)(r.N, { to: e.href, children: e.label }) : 'category' === e.type ? (0, a.jsxs)(r.N, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, a.jsx)(a.Fragment, {}) }, n)) }) });
   }
   function h({ item: e }) {
    const n = (0, o.cC)(e.docId);
    return (0, a.jsx)(c, { href: e.href, title: e.label, description: e.description ?? n?.description });
   }
   function j({ item: e }) {
    switch (e.type) {
     case 'link':
      return (0, a.jsx)(h, { item: e });
     case 'category':
      return (0, a.jsx)(d, { item: e });
     default:
      throw new Error(`unknown item type ${JSON.stringify(e)}`);
    }
   }
   function p({ className: e }) {
    const n = (0, t.$S)();
    return (0, a.jsx)(g, { items: n.items, className: e });
   }
   function g(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, a.jsx)(p, { ...e });
    const r = (0, t.d1)(n);
    return (0, a.jsx)('section', { className: (0, l.A)('row', i), ...e, children: r.map((e, n) => (0, a.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, a.jsx)(j, { item: e }) }, n)) });
   }
  },
  49484: (e, n, i) => {
   i.d(n, { F: () => a });
   var t = i(63674),
    r = i(13526),
    o = i(7361),
    s = i(86070);
   const l = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: l(i.items, n) }] : e), []),
    a = ({ excludeDocIDs: e = [], className: n, ...i }) => {
     const a = (0, t.$S)();
     return (0, s.jsx)('div', { ...i, className: (0, r.A)('margin-top--lg', n), children: (0, s.jsx)(o.A, { items: l(a.items, e) }) });
    };
  },
  63674: (e, n, i) => {
   i.d(n, { $S: () => t, d1: () => r });
   i(34374);
   function t(...e) {
    return i(41863).$S(...e);
   }
   function r(...e) {
    return i(41863).d1(...e);
   }
  },
  78734: (e, n, i) => {
   i.d(n, { Ay: () => l, RM: () => o });
   var t = i(86070),
    r = i(85248);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => s, x: () => l });
   var t = i(30758);
   const r = {},
    o = t.createContext(r);
   function s(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, i) => {
   i.d(n, { N: () => s });
   var t = i(71170),
    r = i(13526),
    o = i(86070);
   const s = ({ className: e, ...n }) => (0, o.jsx)(t.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  92698: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => c, default: () => p, frontMatter: () => a, metadata: () => t, toc: () => h });
   const t = JSON.parse('{"id":"richtlijnen/stijl/typography/README","title":"Introductie richtlijnen voor typografie \xb7 Richtlijnen","description":"Goede typografie helpt bij het cre\xebren van een duidelijke hi\xebrarchie en het ordenen van informatie. Hierdoor zijn teksten gemakkelijk te lezen en te begrijpen.","source":"@site/docs/richtlijnen/stijl/typography/README.mdx","sourceDirName":"richtlijnen/stijl/typography","slug":"/richtlijnen/stijl/typografie/","permalink":"/richtlijnen/stijl/typografie/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/typography/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Introductie richtlijnen voor typografie \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie typografie","sidebar_position":1,"pagination_label":"Introductie richtlijnen voor typografie","description":"Goede typografie helpt bij het cre\xebren van een duidelijke hi\xebrarchie en het ordenen van informatie. Hierdoor zijn teksten gemakkelijk te lezen en te begrijpen.","slug":"/richtlijnen/stijl/typografie/","keywords":["typografie"]},"sidebar":"richtlijnen","previous":{"title":"Introductie","permalink":"/richtlijnen/stijl"},"next":{"title":"Introductie richtlijnen voor typografie","permalink":"/richtlijnen/stijl/typografie/"}}');
   var r = i(86070),
    o = i(85248),
    s = i(78734),
    l = i(49484);
   const a = { title: 'Introductie richtlijnen voor typografie \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie typografie', sidebar_position: 1, pagination_label: 'Introductie richtlijnen voor typografie', description: 'Goede typografie helpt bij het cre\xebren van een duidelijke hi\xebrarchie en het ordenen van informatie. Hierdoor zijn teksten gemakkelijk te lezen en te begrijpen.', slug: '/richtlijnen/stijl/typografie/', keywords: ['typografie'] },
    c = 'Richtlijnen NL Design System voor typografie',
    d = {},
    h = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Deel je gebruikersonderzoek', id: 'deel-je-gebruikersonderzoek', level: 2 }, ...s.RM];
   function j(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-typografie', children: 'Richtlijnen NL Design System voor typografie' }) }), '\n', (0, r.jsx)(n.p, { children: 'Goede typografie helpt bij het cre\xebren van een duidelijke hi\xebrarchie en het ordenen van informatie. Hierdoor zijn teksten gemakkelijk te lezen en te begrijpen.' }), '\n', (0, r.jsx)(n.p, { children: 'Belangrijke typografische overwegingen voor tekst zijn: lettergrootte, regelafstand, regellengte en lettertype.' }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(l.F, { excludeDocIDs: ['richtlijnen/stijl/typography/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://webaim.org/techniques/fonts/', children: 'Typefaces and Fonts - WebAIM' }), (0, r.jsx)('br', {}), '\nArtikel over typografie en toegankelijkheid.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://practicaltypography.com/', children: 'Practical Typography - Matthew Butterick' }), (0, r.jsx)('br', {}), '\nBoek (digitaal) over typografie.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://fonts.google.com/knowledge', children: 'Knowledge - Google Fonts' }), (0, r.jsx)('br', {}), '\nKennisbank over typografie.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://baymard.com/blog/line-length-readability', children: 'Line Length Readbility - Baymard' }), (0, r.jsx)('br', {}), '\nArtikel over een onderzoek naar de ideale regellengte.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://web.dev/variable-fonts/', children: 'Variable fonts - Web.dev' }), (0, r.jsx)('br', {}), '\nArtikel over variabele fonts.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://abookapart.com/products/on-web-typography', children: 'On Web Typography by Jason Santa Maria - A Book Apart' }), (0, r.jsx)('br', {}), '\nBoek over typografie voor het web.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://alistapart.com/article/say-no-to-faux-bold', children: 'Say no to faux bold - A List Apart' }), (0, r.jsx)('br', {}), '\nArtikel over de weergave van bold teksten.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'deel-je-gebruikersonderzoek', children: 'Deel je gebruikersonderzoek' }), '\n', (0, r.jsxs)(n.p, { children: ['Er is nog veel te onderzoeken over het gebruik van typografie. Doe je gebruikersonderzoek? Deel dan alsjeblieft je bevindingen op ', (0, r.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl/', children: 'gebruikersonderzoeken.nl' }), ' zodat we hiervan allemaal kunnen leren.'] }), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(j, { ...e }) }) : j(e);
   }
  },
 },
]);
