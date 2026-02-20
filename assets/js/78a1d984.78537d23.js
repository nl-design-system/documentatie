'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [95257],
 {
  3227(e, n, t) {
   t.d(n, { A: () => g });
   var i = t(60316),
    r = t(45282),
    o = t(2264),
    s = t(29181),
    l = t(13526),
    a = t(86070);
   function c({ href: e, icon: n = '', title: t, description: i, children: o }) {
    return (0, a.jsxs)('div', { className: 'card', children: [e ? (0, a.jsx)(r.N, { href: e, className: (0, l.A)('cardLink', 'utrecht-link'), children: (0, a.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }) }) : (0, a.jsxs)('h2', { className: 'cardTitle', children: [n, ' ', t] }), i && (0, a.jsx)('p', { className: 'cardDescription', children: i }), o] });
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
    const n = (0, i.$S)();
    return (0, a.jsx)(g, { items: n.items, className: e });
   }
   function g(e) {
    const { items: n, className: t } = e;
    if (!n) return (0, a.jsx)(p, { ...e });
    const r = (0, i.d1)(n);
    return (0, a.jsx)('section', { className: (0, l.A)('row', t), ...e, children: r.map((e, n) => (0, a.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, a.jsx)(j, { item: e }) }, n)) });
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => s, x: () => l });
   var i = t(30758);
   const r = {},
    o = i.createContext(r);
   function s(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children));
   }
  },
  45282(e, n, t) {
   t.d(n, { F: () => o, N: () => s });
   var i = t(13526),
    r = t(86070);
   const o = ({ children: e, ...n }) => {
     const { to: t, href: i, ...o } = n;
     let s = t || i;
     const l = new URL(s, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? ((l.pathname = l.pathname.endsWith('/') ? l.pathname : `${l.pathname}/`), (s = l.toString().replace('https://nldesignsystem.nl', ''))) : ((o.target = '_blank'), (o.rel = 'noopener noreferrer')), (0, r.jsx)('a', { href: s, ...o, children: e }));
    },
    s = ({ className: e, ...n }) => (0, r.jsx)(o, { className: (0, i.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  60316(e, n, t) {
   t.d(n, { $S: () => i, d1: () => r });
   t(74147);
   function i(...e) {
    return t(97819).$S(...e);
   }
   function r(...e) {
    return t(97819).d1(...e);
   }
  },
  78734(e, n, t) {
   t.d(n, { Ay: () => l, RM: () => o });
   var i = t(86070),
    r = t(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  89874(e, n, t) {
   t.d(n, { F: () => a });
   var i = t(60316),
    r = t(13526),
    o = t(3227),
    s = t(86070);
   const l = (e, n) => e.reduce((e, t) => ('link' === t.type ? (n.includes(t.docId) ? e : [...e, t]) : 'category' === t.type ? [...e, { ...t, items: l(t.items, n) }] : e), []),
    a = ({ excludeDocIDs: e = [], className: n, ...t }) => {
     const a = (0, i.$S)();
     return (0, s.jsx)('div', { ...t, className: (0, r.A)('margin-top--lg', n), children: (0, s.jsx)(o.A, { items: l(a.items, e) }) });
    };
  },
  92698(e, n, t) {
   (t.r(n), t.d(n, { assets: () => d, contentTitle: () => c, default: () => p, frontMatter: () => a, metadata: () => i, toc: () => h }));
   const i = JSON.parse('{"id":"richtlijnen/stijl/typography/README","title":"Introductie richtlijnen voor typografie \xb7 Richtlijnen","description":"Goede typografie helpt bij het cre\xebren van een duidelijke hi\xebrarchie en het ordenen van informatie. Hierdoor zijn teksten gemakkelijk te lezen en te begrijpen.","source":"@site/docs/richtlijnen/stijl/typography/README.mdx","sourceDirName":"richtlijnen/stijl/typography","slug":"/richtlijnen/stijl/typografie/","permalink":"/richtlijnen/stijl/typografie/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/typography/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Introductie richtlijnen voor typografie \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie typografie","sidebar_position":1,"pagination_label":"Introductie richtlijnen voor typografie","description":"Goede typografie helpt bij het cre\xebren van een duidelijke hi\xebrarchie en het ordenen van informatie. Hierdoor zijn teksten gemakkelijk te lezen en te begrijpen.","slug":"/richtlijnen/stijl/typografie/","keywords":["typografie"]},"sidebar":"richtlijnen","previous":{"title":"Introductie","permalink":"/richtlijnen/stijl"},"next":{"title":"Introductie richtlijnen voor typografie","permalink":"/richtlijnen/stijl/typografie/"}}');
   var r = t(86070),
    o = t(18439),
    s = t(78734),
    l = t(89874);
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
