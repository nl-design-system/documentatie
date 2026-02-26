'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [95257],
 {
  18439(e, n, i) {
   i.d(n, { R: () => l, x: () => a });
   var t = i(30758);
   const r = {},
    o = t.createContext(r);
   function l(e) {
    const n = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : l(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => a, RM: () => o });
   var t = i(86070),
    r = i(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  92698(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => s, default: () => j, frontMatter: () => a, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"richtlijnen/stijl/typography/README","title":"Introductie richtlijnen voor typografie","description":"Goede typografie helpt bij het cre\xebren van een duidelijke hi\xebrarchie en het ordenen van informatie. Hierdoor zijn teksten gemakkelijk te lezen en te begrijpen.","source":"@site/docs/richtlijnen/stijl/typography/README.mdx","sourceDirName":"richtlijnen/stijl/typography","slug":"/richtlijnen/stijl/typografie/","permalink":"/richtlijnen/stijl/typografie/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/typography/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Introductie richtlijnen voor typografie","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Introductie typografie","sidebar_position":1,"pagination_label":"Introductie richtlijnen voor typografie","description":"Goede typografie helpt bij het cre\xebren van een duidelijke hi\xebrarchie en het ordenen van informatie. Hierdoor zijn teksten gemakkelijk te lezen en te begrijpen.","slug":"/richtlijnen/stijl/typografie/","keywords":["typografie"]},"sidebar":"richtlijnen","previous":{"title":"Introductie","permalink":"/richtlijnen/stijl"},"next":{"title":"Introductie richtlijnen voor typografie","permalink":"/richtlijnen/stijl/typografie/"}}');
   var r = i(86070),
    o = i(18439),
    l = i(78734);
   const a = { title: 'Introductie richtlijnen voor typografie', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie typografie', sidebar_position: 1, pagination_label: 'Introductie richtlijnen voor typografie', description: 'Goede typografie helpt bij het cre\xebren van een duidelijke hi\xebrarchie en het ordenen van informatie. Hierdoor zijn teksten gemakkelijk te lezen en te begrijpen.', slug: '/richtlijnen/stijl/typografie/', keywords: ['typografie'] },
    s = 'Richtlijnen NL Design System voor typografie',
    d = {},
    c = [{ value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 }, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'Deel je gebruikersonderzoek', id: 'deel-je-gebruikersonderzoek', level: 2 }, ...l.RM];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components },
     { OverviewPage: i } = n;
    return (
     i ||
      (function (e, n) {
       throw new Error('Expected ' + (n ? 'component' : 'object') + ' `' + e + '` to be defined: you likely forgot to import, pass, or provide it.');
      })('OverviewPage', !0),
     (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-typografie', children: 'Richtlijnen NL Design System voor typografie' }) }), '\n', (0, r.jsx)(n.p, { children: 'Goede typografie helpt bij het cre\xebren van een duidelijke hi\xebrarchie en het ordenen van informatie. Hierdoor zijn teksten gemakkelijk te lezen en te begrijpen.' }), '\n', (0, r.jsx)(n.p, { children: 'Belangrijke typografische overwegingen voor tekst zijn: lettergrootte, regelafstand, regellengte en lettertype.' }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(i, { excludeDocIDs: ['richtlijnen/stijl/typography/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://webaim.org/techniques/fonts/', children: 'Typefaces and Fonts - WebAIM' }), (0, r.jsx)('br', {}), '\nArtikel over typografie en toegankelijkheid.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://practicaltypography.com/', children: 'Practical Typography - Matthew Butterick' }), (0, r.jsx)('br', {}), '\nBoek (digitaal) over typografie.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://fonts.google.com/knowledge', children: 'Knowledge - Google Fonts' }), (0, r.jsx)('br', {}), '\nKennisbank over typografie.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://baymard.com/blog/line-length-readability', children: 'Line Length Readbility - Baymard' }), (0, r.jsx)('br', {}), '\nArtikel over een onderzoek naar de ideale regellengte.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://web.dev/variable-fonts/', children: 'Variable fonts - Web.dev' }), (0, r.jsx)('br', {}), '\nArtikel over variabele fonts.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://abookapart.com/products/on-web-typography', children: 'On Web Typography by Jason Santa Maria - A Book Apart' }), (0, r.jsx)('br', {}), '\nBoek over typografie voor het web.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://alistapart.com/article/say-no-to-faux-bold', children: 'Say no to faux bold - A List Apart' }), (0, r.jsx)('br', {}), '\nArtikel over de weergave van bold teksten.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'deel-je-gebruikersonderzoek', children: 'Deel je gebruikersonderzoek' }), '\n', (0, r.jsxs)(n.p, { children: ['Er is nog veel te onderzoeken over het gebruik van typografie. Doe je gebruikersonderzoek? Deel dan alsjeblieft je bevindingen op ', (0, r.jsx)(n.a, { href: 'http://gebruikersonderzoeken.nl/', children: 'gebruikersonderzoeken.nl' }), ' zodat we hiervan allemaal kunnen leren.'] }), '\n', (0, r.jsx)(l.Ay, {})] })
    );
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
