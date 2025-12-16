'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [75052],
 {
  8526: (e, n, o) => {
   o.r(n), o.d(n, { assets: () => j, contentTitle: () => u, default: () => p, frontMatter: () => h, metadata: () => t, toc: () => m });
   const t = JSON.parse('{"id":"richtlijnen/stijl/icons/colour-contrast/README","title":"Zorg ook bij iconen voor voldoende contrast \xb7 Iconen \xb7 Richtlijnen","description":"Gebruik je een icoon zonder tekst? Maak het contrast tussen de voor- en achtergrondkleur 3:1 of groter. Tenzij het icoon puur decoratief is.","source":"@site/docs/richtlijnen/stijl/icons/6-colour-contrast/README.mdx","sourceDirName":"richtlijnen/stijl/icons/6-colour-contrast","slug":"/richtlijnen/stijl/iconen/kleurcontrast-iconen","permalink":"/richtlijnen/stijl/iconen/kleurcontrast-iconen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/icons/6-colour-contrast/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Zorg ook bij iconen voor voldoende contrast \xb7 Iconen \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Zorg voor voldoende contrast","pagination_label":"Zorg ook bij iconen voor voldoende contrast","description":"Gebruik je een icoon zonder tekst? Maak het contrast tussen de voor- en achtergrondkleur 3:1 of groter. Tenzij het icoon puur decoratief is.","slug":"/richtlijnen/stijl/iconen/kleurcontrast-iconen","keywords":["iconen"]},"sidebar":"richtlijnen","previous":{"title":"Laat de lijndikte meeschalen","permalink":"/richtlijnen/stijl/iconen/lijndikte-iconen"},"next":{"title":"Respecteer conventies","permalink":"/richtlijnen/stijl/iconen/respecteer-conventies"}}');
   var i = o(86070),
    r = o(85248),
    s = o(78734);
   function c(e) {
    return (0, i.jsx)(i.Fragment, {});
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c();
   }
   function a(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', img: 'img', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.p, { children: 'Iconen nemen vaak de kleur van de bijbehorende tekst over. Zodoende hebben ze, als de tekst het ook heeft, vanzelf voldoende contrast.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_kleuren-overnemen.png', alt: 'Button met pijl icoon, foutmelding met uitroepteken icoon, en link met potloot icoon. Alle iconen hebben dezelfde kleur als de bijbehorende teksten.' }) }), '\n', (0, i.jsx)(n.p, { children: 'Gebruik je een icoon zonder tekst? Of wil je het icoon een andere kleur geven dan de bijbehorende tekst? Houd dan ook rekening met contrast. Voor iconen zou het contrast tussen de voor- en achtergrondkleur 3:1 of groter moeten zijn. Tenzij het icoon puur decoratief is.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_eigen-kleuren.png', alt: 'Rechter bovenhoek van een modal scherm rechts daarvan een waarschuwing. Sluit icoon van modal scherm is paars. Uitroepteken icoon in waarschuwing is donkergeel. De tekst van de waarschuwing is donkergrijs.' }) }), '\n', (0, i.jsx)(n.p, { children: 'Iconen zijn een ideaal hulpmiddel om niet alleen op kleur te vertrouwen om een boodschap over te brengen. Denk bijvoorbeeld aan een foutmeldingen of feedback elementen.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_niet-op-kleur-vertrouwen.png', alt: "Vier meldingen. Waarschuwingsmelding met uitroepteken in driehoek icoon. Positieve melding met check icoon. Negatieve melding met uitroepteken in cirkel icoon. Informatieve melding met 'i' in cirkel icoon." }) }), '\n', (0, i.jsxs)(n.p, { children: ['Wanneer je iconen als SVG gebruikt kun je de iconen kleuren door middel van ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword', children: (0, i.jsx)(n.code, { children: 'current color' }) }), '. Op die manier neemt het icoon de waarde over van de ', (0, i.jsx)(n.code, { children: 'color' }), ' die is toegepast. Hierdoor kleuren je iconen ook netjes mee als iemand gebruik maakt van bijvoorbeeld een donker thema (dark-mode) of Windows High Contrast Mode.'] }), '\n', (0, i.jsx)(n.pre, { children: (0, i.jsx)(n.code, { className: 'language-css', children: '.icon {\n  fill: currentColor;\n}\n' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Let wel; SVG gebruikt ', (0, i.jsx)(n.code, { children: 'fill' }), ', niet ', (0, i.jsx)(n.code, { children: 'color' }), ' of ', (0, i.jsx)(n.code, { children: 'background-color' }), '.'] }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_high-contrast.png', alt: "Drie schermen met dezelfde inhoud (onder andere een button met pijl icoon) maar verschillende thema's. Light-mode, dark-mode en high-contrast-mode." }) }), '\n', (0, i.jsx)(n.p, { children: 'Soms wordt een icoon gebruikt om een status aan te geven. Denk bijvoorbeeld aan geluid aan/uit zetten of het wel/niet tonen van een wachtwoord. In dit soort gevallen is het belangrijk om niet enkel op kleur te vertrouwen, omdat kleur niet door iedereen op dezelfde manier wordt ervaren. Een afwijking in de vorm van het icoon is dan een oplossing.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_status.png', alt: "Twee keer een lijstje van twee labels met een icoon ervoor. Links 'Geluid aan' en 'Geluid uit' waarbij een speaker icoon per label van vorm verschilt. Rechts 'Toon wachtwoord' en 'Verberg wachtwoord' waarbij een oog icoon van vorm verschilt." }) }), '\n', (0, i.jsx)(n.h2, { id: 'gerelateerde-wcag-richtlijnen', children: 'Gerelateerde WCAG Richtlijnen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/1.1.1/', children: '1.1.1 Niet-tekstuele content' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/wcag/1.4.11/', children: '1.4.11 Contrast van niet-tekstuele content' }) }), '\n'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
   }
   const h = { title: 'Zorg ook bij iconen voor voldoende contrast \xb7 Iconen \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Zorg voor voldoende contrast', pagination_label: 'Zorg ook bij iconen voor voldoende contrast', description: 'Gebruik je een icoon zonder tekst? Maak het contrast tussen de voor- en achtergrondkleur 3:1 of groter. Tenzij het icoon puur decoratief is.', slug: '/richtlijnen/stijl/iconen/kleurcontrast-iconen', keywords: ['iconen'] },
    u = 'Zorg ook bij iconen voor voldoende contrast',
    j = {},
    m = [{ value: 'Gerelateerde WCAG Richtlijnen', id: 'gerelateerde-wcag-richtlijnen', level: 2 }, ...s.RM];
   function g(e) {
    const n = { h1: 'h1', header: 'header', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'zorg-ook-bij-iconen-voor-voldoende-contrast', children: 'Zorg ook bij iconen voor voldoende contrast' }) }), '\n', (0, i.jsx)(d, {}), '\n', (0, i.jsx)(l, {}), '\n', (0, i.jsx)(s.Ay, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
  },
  78734: (e, n, o) => {
   o.d(n, { Ay: () => c, RM: () => r });
   var t = o(86070),
    i = o(85248);
   const r = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
  85248: (e, n, o) => {
   o.d(n, { R: () => s, x: () => c });
   var t = o(30758);
   const i = {},
    r = t.createContext(i);
   function s(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : s(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
