'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [15683],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => a });
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
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(o.Provider, { value: n }, e.children));
   }
  },
  38294(e, n, i) {
   (i.r(n), i.d(n, { assets: () => p, contentTitle: () => m, default: () => f, frontMatter: () => h, metadata: () => t, toc: () => j }));
   const t = JSON.parse('{"id":"richtlijnen/formulieren/description/target-size/README","title":"Houd het aanklikbare gedeelte groot genoeg \xb7 Descriptions in een formulier \xb7 Richtlijnen","description":"Richtlijnen voor formaat aanklikbaar gedeelte van beschrijvingen in een formulier.","source":"@site/docs/richtlijnen/formulieren/description/6-target-size/README.mdx","sourceDirName":"richtlijnen/formulieren/description/6-target-size","slug":"/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte","permalink":"/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/description/6-target-size/README.mdx","tags":[],"version":"current","frontMatter":{"title":"Houd het aanklikbare gedeelte groot genoeg \xb7 Descriptions in een formulier \xb7 Richtlijnen","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Grootte aanklikbaar gedeelte","pagination_label":"Grootte aanklikbaar gedeelte","description":"Richtlijnen voor formaat aanklikbaar gedeelte van beschrijvingen in een formulier.","slug":"/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte","keywords":["labels","formulier","design","code"]},"sidebar":"richtlijnen","previous":{"title":"Description bij fieldsets","permalink":"/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset"},"next":{"title":"Lengte description","permalink":"/richtlijnen/formulieren/descriptions/lengte"}}');
   var r = i(86070),
    o = i(18439),
    s = i(78734);
   function a(e) {
    return (0, r.jsx)(r.Fragment, {});
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a();
   }
   function c(e) {
    const n = { h1: 'h1', header: 'header', img: 'img', p: 'p', strong: 'strong', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'houd-het-aanklikbare-gedeelte-groot-genoeg', children: 'Houd het aanklikbare gedeelte groot genoeg' }) }), '\n', (0, r.jsx)(n.p, { children: 'Bij een goede koppeling tussen het label en het formulierveld, zijn beide elementen aanklikbaar. Dat maakt het aanklikbare gedeelte groot.' }), '\n', (0, r.jsxs)(n.p, { children: ['Een description ertussen verkleint de aanklikbare ruimte. Zorg er daarom voor dat het aanklikbare gedeelte van een formulierveld ', (0, r.jsx)(n.strong, { children: 'tenminste' }), ' 24 bij 24 pixels is, liever nog groter waar mogelijk. Zodat gebruikers met dikke vingertoppen op een mobiel of met trillende handen met een muis toch een formulierveld kunnen selecteren.'] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_description_size.png', alt: 'Formfield met textbox van 48 pixels hoog, en formfield met radiobuttons van 24 pixels hoog.' }) }), '\n', (0, r.jsx)(n.p, { children: "Voor het 'Start-thema' maken we gebruik van een grootte van 24x24 bij checkboxes en radio buttons. En houden we een grootte van 48x48px aan voor componenten zoals buttons en text inputs. Dit sluit mooi aan bij de spacing scale van het Start-thema." })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
   }
   function u(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', children: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System' }), '\n', (0, r.jsx)(n.p, { children: "Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet." }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.5.8/', children: 'Succescriterium 2.5.8 Grootte van het aanwijsgebied (minimum)' }) }), '\n', (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/wcag/2.5.5/', children: 'Succescriterium 2.5.5 Grootte van het aanwijsgebied (uitgebreid)' }) }), '\n'] })] });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
   }
   const h = { title: 'Houd het aanklikbare gedeelte groot genoeg \xb7 Descriptions in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Grootte aanklikbaar gedeelte', pagination_label: 'Grootte aanklikbaar gedeelte', description: 'Richtlijnen voor formaat aanklikbaar gedeelte van beschrijvingen in een formulier.', slug: '/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte', keywords: ['labels', 'formulier', 'design', 'code'] },
    m = void 0,
    p = {},
    j = [{ value: 'Meer lezen over gerelateerde WCAG-succescriteria op NL Design System', id: 'meer-lezen-over-gerelateerde-wcag-succescriteria-op-nl-design-system', level: 2 }, ...s.RM];
   function b(e) {
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(d, {}), '\n', (0, r.jsx)(l, {}), '\n', (0, r.jsx)(g, {}), '\n', (0, r.jsx)(s.Ay, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, o.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(b, { ...e }) }) : b();
   }
  },
  78734(e, n, i) {
   i.d(n, { Ay: () => a, RM: () => o });
   var t = i(86070),
    r = i(18439);
   const o = [{ value: 'Over deze richtlijnen', id: 'over-deze-richtlijnen', level: 2 }];
   function s(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(s, { ...e }) }) : s(e);
   }
  },
 },
]);
