'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [60890],
 {
  18439(e, n, r) {
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
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : s(e.components)), i.createElement(o.Provider, { value: n }, e.children));
   }
  },
  40221(e, n, r) {
   (r.r(n), r.d(n, { assets: () => j, contentTitle: () => g, default: () => p, frontMatter: () => m, metadata: () => i, toc: () => b }));
   const i = JSON.parse('{"id":"richtlijnen/formulieren/keyboard-behaviour/keyboard/README","title":"Zorg dat het formulier werkt met een toetsenbord | Toetsenbordnavigatie in een formulier | Richtlijnen","description":"Zorg dat een formulier werkt met een toetsenbord.","source":"@site/docs/richtlijnen/formulieren/keyboard-behaviour/1-keyboard/README.mdx","sourceDirName":"richtlijnen/formulieren/keyboard-behaviour/1-keyboard","slug":"/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie","permalink":"/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/keyboard-behaviour/1-keyboard/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg dat het formulier werkt met een toetsenbord | Toetsenbordnavigatie in een formulier | Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Toetsenbordnavigatie","pagination_label":"Zorg dat een formulier werkt met een toetsenbord","description":"Zorg dat een formulier werkt met een toetsenbord.","slug":"/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Toetsenbord","permalink":"/richtlijnen/formulieren/toetsenbord/"},"next":{"title":"Geen positieve tabindex","permalink":"/richtlijnen/formulieren/toetsenbord/tabindex"}}');
   var t = r(86070),
    o = r(18439),
    s = r(78734);
   function a(e) {
    return (0, t.jsx)(t.Fragment, {});
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a();
   }
   function l(e) {
    const n = { a: 'a', em: 'em', h1: 'h1', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: 'zorg-dat-het-formulier-werkt-met-een-toetsenbord', children: 'Zorg dat het formulier werkt met een toetsenbord' }) }), '\n', (0, t.jsx)(n.p, { children: 'Sommige gebruikers navigeren door een formulier met hun toetsenbord. Zorg dat alle onderdelen waar je ook op kunt klikken in het formulier bereikbaar zijn en gebruikt kunnen worden met alleen een toetsenbord.' }), '\n', (0, t.jsxs)(n.p, { children: ['Is het niet mogelijk een component met een toetsenbord te bedienen, zorg dan voor een toegankelijk alternatief. De richtlijn ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen/', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), ' gaat hier dieper op in.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Dit ondersteunt toetsenbordgebruikers, maar ook gebruikers met andere randapparatuur die zich als toetsenbord presenteert, zoals een ', (0, t.jsx)(n.em, { children: 'switch control' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/', children: 'Maak de toetsenbordfocus goed zichtbaar' }), ' en geef de focusring voldoende kleurcontrast.'] }), '\n', (0, t.jsx)(n.p, { children: 'Hoe een website met een toetsenbord te navigeren, en wat hiervoor belangrijk is, staat op:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://scholar.harvard.edu/ccwilcox/blog/how-keyboard-navigate-websites-mac-browsers', children: (0, t.jsx)('span', { lang: 'en', children: 'How to keyboard navigate websites in Mac browsers' }) }), ' van Harvard University.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/', children: (0, t.jsx)('span', { lang: 'en', children: 'Keyboard Accessibility' }) }), ' van WebAIM.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/', children: (0, t.jsx)('span', { lang: 'en', children: 'A Guide To Keyboard Accessibility HTML And CSS' }) }), ' van Cristian D\xedaz in Smashing Magazine.'] }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
   function h(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, t.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.1.1/', children: 'Succescriterium 2.1.1 Toetsenbord)' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.1.2/', children: 'Succescriterium 2.1.2 Geen toetsenbordval' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.1.4/', children: 'Succescriterium 2.1.4 Enkel teken sneltoetsen' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.1/', children: 'Succescriterium 2.4.1 Blokken omzeilen' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'Succescriterium 2.4.3 Focus volgorde' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.7/', children: 'Succescriterium 2.4.7 Focus zichtbaar' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.11/', children: 'Succescriterium 2.4.11 Focus niet bedekt (minimum)' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.4.13/', children: 'Succescriterium 2.4.13 Focusweergave' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.5.2/', children: 'Succescriterium 2.5.2 Aanwijzerannulering' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/2.5.4/', children: 'Succescriterium 2.5.4 Bewegingsactivering' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.2.1/', children: 'Succescriterium 3.2.1 Bij focus' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: '/wcag/3.2.2/', children: 'Succescriterium 3.2.2 Bij input' }) }), '\n'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   const m = { title: 'Zorg dat het formulier werkt met een toetsenbord | Toetsenbordnavigatie in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Toetsenbordnavigatie', pagination_label: 'Zorg dat een formulier werkt met een toetsenbord', description: 'Zorg dat een formulier werkt met een toetsenbord.', slug: '/richtlijnen/formulieren/toetsenbord/toetsenbordnavigatie', keywords: ['labels', 'formulier', 'design', 'code'] },
    g = void 0,
    j = {},
    b = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function f(e) {
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(d, {}), '\n', (0, t.jsx)(c, {}), '\n', (0, t.jsx)(u, {}), '\n', (0, t.jsx)(s.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(f, { ...e }) }) : f();
   }
  },
  78734(e, n, r) {
   r.d(n, { Ay: () => a, RM: () => o });
   var i = r(86070),
    t = r(18439);
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
 },
]);
