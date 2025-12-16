'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [60890],
 {
  35466: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => b, contentTitle: () => u, default: () => j, frontMatter: () => h, metadata: () => i, toc: () => m });
   const i = JSON.parse('{"id":"richtlijnen/formulieren/keyboard-behaviour/keyboard/README","title":"Zorg dat het formulier werkt met een toetsenbord | Toetsenbordnavigatie in een formulier | Richtlijnen","description":"Zorg dat een formulier werkt met een toetsenbord.","source":"@site/docs/richtlijnen/formulieren/keyboard-behaviour/1-keyboard/README.mdx","sourceDirName":"richtlijnen/formulieren/keyboard-behaviour/1-keyboard","slug":"/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie","permalink":"/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/keyboard-behaviour/1-keyboard/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg dat het formulier werkt met een toetsenbord | Toetsenbordnavigatie in een formulier | Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toetsenbordnavigatie","pagination_label":"Zorg dat een formulier werkt met een toetsenbord","description":"Zorg dat een formulier werkt met een toetsenbord.","slug":"/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/"},"next":{"title":"Geen positieve tabindex","permalink":"/richtlijnen/formulieren/toetsenbord/tabindex"}}');
   var t = r(86070),
    o = r(85248),
    s = r(78734);
   function a(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a();
   }
   function d(e) {
    const n = { a: 'a', em: 'em', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'zorg-dat-het-formulier-werkt-met-een-toetsenbord', children: 'Zorg dat het formulier werkt met een toetsenbord' }) }), '\n', (0, t.jsx)(n.p, { children: 'Sommige gebruikers navigeren door een formulier met hun toetsenbord. Zorg dat alle onderdelen waar je ook op kunt klikken in het formulier bereikbaar zijn en gebruikt kunnen worden met alleen een toetsenbord.' }), '\n', (0, t.jsxs)(n.p, { children: ['Is het niet mogelijk een component met een toetsenbord te bedienen, zorg dan voor een toegankelijk alternatief. De richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen/', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), ' gaat hier dieper op in.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Dit ondersteunt toetsenbordgebruikers, maar ook gebruikers met andere randapparatuur die zich als toetsenbord presenteert, zoals een ', (0, t.jsx)(n.em, { children: 'switch control' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak de toetsenbordfocus goed zichtbaar' }), ' en geef de focusring voldoende kleurcontrast.'] }), '\n', (0, t.jsx)(n.p, { children: 'Hoe een website met een toetsenbord te navigeren, en wat hiervoor belangrijk is, staat op:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://scholar.harvard.edu/ccwilcox/blog/how-keyboard-navigate-websites-mac-browsers', children: (0, t.jsx)('span', { lang: 'en', children: 'How to keyboard navigate websites in Mac browsers' }) }), ' van Harvard University.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/', children: (0, t.jsx)('span', { lang: 'en', children: 'Keyboard Accessibility' }) }), ' van WebAIM.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/', children: (0, t.jsx)('span', { lang: 'en', children: 'A Guide To Keyboard Accessibility HTML And CSS' }) }), ' van Cristian D\xedaz in Smashing Magazine.'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'De volgende WCAG-succescriteria zijn nodig voor een goede gebruikerservaring bij toetsenbordbediening:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.1.1/', children: '2.1.1 Toetsenbord)' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.1.2/', children: '2.1.2 Geen toetsenbordval' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.1.4/', children: '2.1.4 Enkel teken sneltoetsen' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.4.1/', children: '2.4.1 Blokken omzeilen' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.4.3/', children: '2.4.3 Focus volgorde' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.4.7/', children: '2.4.7 Focus zichtbaar' }), ' (niveau AA).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.4.11/', children: '2.4.11 Focus niet bedekt (minimum)' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.4.13/', children: '2.4.13 Focusweergave' }), ' (niveau AAA)'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.5.1/', children: '2.5.1 Aanwijzergebaren' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.5.2/', children: '2.5.2 Aanwijzerannulering' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.5.4/', children: '2.5.4 Bewegingsactivering' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/2.5.7/', children: '2.5.7 Sleepbewegingen' }), ' (niveau AA).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/3.2.1/', children: '3.2.1 Bij focus' }), ' (niveau A).'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: '/wcag/3.2.2/', children: '3.2.2 Bij input' }), ' (niveau A).'] }), '\n'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
   }
   const h = { title: 'Zorg dat het formulier werkt met een toetsenbord | Toetsenbordnavigatie in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toetsenbordnavigatie', pagination_label: 'Zorg dat een formulier werkt met een toetsenbord', description: 'Zorg dat een formulier werkt met een toetsenbord.', slug: '/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie', keywords: ['labels', 'formulier', 'design', 'code'] },
    u = void 0,
    b = {},
    m = [...s.RM];
   function g(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(l, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g();
   }
  },
  78734: (e, n, r) => {
   r.d(n, { Ay: () => a, RM: () => o });
   var i = r(86070),
    t = r(85248);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, r) => {
   r.d(n, { R: () => s, x: () => a });
   var i = r(30758);
   const t = {},
    o = i.createContext(t);
   function s(e) {
    const n = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
