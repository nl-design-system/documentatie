'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [12757],
 {
  13985(e, n, t) {
   t.d(n, { Ay: () => d, RM: () => s });
   var o = t(86070),
    i = t(18439);
   const s = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: 'De Candidate component en varianten zijn makkelijk te gebruiken voor developers en designers.' }), '\n', (0, o.jsx)(n.p, { children: 'Doordat de component veel gebruikt wordt krijgt het kernteam voldoende feedback om de component te selecteren voor de Hall of Fame stappen.' })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  18439(e, n, t) {
   t.d(n, { R: () => a, x: () => d });
   var o = t(30758);
   const i = {},
    s = o.createContext(i);
   function a(e) {
    const n = o.useContext(s);
    return o.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), o.createElement(s.Provider, { value: n }, e.children));
   }
  },
  18527(e, n, t) {
   t.d(n, { Ay: () => d, RM: () => s });
   var o = t(86070),
    i = t(18439);
   const s = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsx)(n.p, { children: 'De Candidate component kan makkelijk beschikbaar worden gemaakt in elk framework naar keuze en heeft hierbij dezelfde gedeelde stylesheet. Bij componenten met een native equivalent is er een HTML variant te gebruiken, zodat deze ook kan worden gebruik voor output uit CMSen en APIs waar geen classnames kunnen worden toegepast op de HTML.' });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  28201(e, n, t) {
   (t.r(n), t.d(n, { assets: () => u, contentTitle: () => h, default: () => f, frontMatter: () => k, metadata: () => o, toc: () => v }));
   const o = JSON.parse('{"id":"handboek/definition-of-done/candidate-stappenplan/ontwikkelfase","title":"3. Ontwikkelfase","description":"Stappen voor de Ontwikkelfase van de Definition of Done voor Candidate","source":"@site/docs/handboek/definition-of-done/candidate-stappenplan/3-ontwikkelfase.mdx","sourceDirName":"handboek/definition-of-done/candidate-stappenplan","slug":"/handboek/estafettemodel/componenten/candidate/ontwikkelfase","permalink":"/handboek/estafettemodel/componenten/candidate/ontwikkelfase","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/definition-of-done/candidate-stappenplan/3-ontwikkelfase.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"3. Ontwikkelfase","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3. Ontwikkelfase","sidebar_position":3,"pagination_label":"3. Ontwikkelfase","description":"Stappen voor de Ontwikkelfase van de Definition of Done voor Candidate","slug":"/handboek/estafettemodel/componenten/candidate/ontwikkelfase","keywords":["componenten","design system","estafettemodel","definition of done","candidate"]},"sidebar":"handboek","previous":{"title":"2. Voorbereidingsfase","permalink":"/handboek/estafettemodel/componenten/candidate/Voorbereidingsfase"},"next":{"title":"4. Testfase","permalink":"/handboek/estafettemodel/componenten/candidate/testfase"}}');
   var i = t(86070),
    s = t(18439),
    a = t(98503),
    d = t(18527),
    r = t(30348),
    l = t(37055),
    c = t(71641),
    p = t(13985),
    m = t(70205);
   const k = { title: '3. Ontwikkelfase', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3. Ontwikkelfase', sidebar_position: 3, pagination_label: '3. Ontwikkelfase', description: 'Stappen voor de Ontwikkelfase van de Definition of Done voor Candidate', slug: '/handboek/estafettemodel/componenten/candidate/ontwikkelfase', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'candidate'] },
    h = 'Ontwikkelfase voor Candidate componenten',
    u = {},
    v = [{ value: 'React component', id: 'react', level: 2 }, { value: 'Doel', id: 'doel', level: 3 }, ...a.RM, { value: 'Uitkomst', id: 'uitkomst', level: 3 }, { value: 'CSS component', id: 'css', level: 2 }, { value: 'Doel', id: 'doel-1', level: 3 }, ...d.RM, { value: 'Uitkomst', id: 'uitkomst-1', level: 3 }, { value: 'SCSS component', id: 'css', level: 2 }, { value: 'Doel', id: 'doel-2', level: 3 }, ...r.RM, { value: 'Uitkomst', id: 'uitkomst-2', level: 3 }, { value: 'Figma component', id: 'figma', level: 2 }, { value: 'Doel', id: 'doel-3', level: 3 }, ...l.RM, { value: 'Uitkomst', id: 'uitkomst-3', level: 3 }, { value: 'Voorbeeld-thema', id: 'voorbeeld-thema', level: 2 }, { value: 'Doel', id: 'doel-4', level: 3 }, ...c.RM, { value: 'Uitkomst', id: 'uitkomst-4', level: 3 }, { value: 'Documentatie', id: 'documentatie', level: 2 }, { value: 'Doel', id: 'doel-5', level: 3 }, ...p.RM, { value: 'Uitkomst', id: 'uitkomst-5', level: 3 }, { value: 'Rond de Ontwikkelfase af', id: 'afronden', level: 2 }, { value: 'Doel', id: 'doel-6', level: 3 }, ...m.RM, { value: 'Uitkomst', id: 'uitkomst-6', level: 3 }];
   function g(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', img: 'img', li: 'li', ol: 'ol', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'ontwikkelfase-voor-candidate-componenten', children: 'Ontwikkelfase voor Candidate componenten' }) }), '\n', (0, i.jsx)(n.p, { children: 'De Ontwikkelfase start wanneer de Voorbereidingsfase is afgerond. Dan zijn alle acceptatiecriteria en benodigde testcases bepaald.' }), '\n', (0, i.jsx)(n.p, { children: 'In de Ontwikkelfase wordt de component in CSS, React en Figma beschikbaar gemaakt en wordt documentatie geschreven waarmee de community de component kan gebruiken.' }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/candidate-stappenplan-ontwikkelfase.png', alt: 'Een overzicht van de stappen in de Ontwikkelfase, van links naar rechts op volgorde en van boven naar beneden gegroepeerd per specialisme dat hierbij betrokken is: Developer relations en Design relations (samen relations), toegankelijkheidsspecialist, developer, designer en design system lead met productmanager (samen lead).' }) }), '\n', (0, i.jsx)(n.p, { children: (0, i.jsx)(n.a, { href: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/candidate-stappenplan-ontwikkelfase.png', children: 'Bekijk de illustratie voor de Ontwikkelfase op een losse pagina' }) }), '\n', (0, i.jsx)(n.p, { children: 'De stappen en substappen in de Ontwikkelfase kunnen soms parallel worden opgepakt, maar hebben hierin wel relatie tot elkaar. Bovenstaande visualisatie laat de volgende stappen zien:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: ['React Component', '\n', (0, i.jsxs)(n.ol, { children: ['\n', (0, i.jsx)(n.li, { children: 'Gemaakt door de developer.' }), '\n', (0, i.jsx)(n.li, { children: 'Gereviewed door de Design System Lead & Product Manager.' }), '\n'] }), '\n'] }), '\n', (0, i.jsxs)(n.li, { children: ['CSS Component', '\n', (0, i.jsxs)(n.ol, { children: ['\n', (0, i.jsx)(n.li, { children: 'Gemaakt door de developer.' }), '\n', (0, i.jsx)(n.li, { children: 'Gereviewed door de Design System Lead & Product Manager.' }), '\n'] }), '\n'] }), '\n', (0, i.jsxs)(n.li, { children: ['Figma Component', '\n', (0, i.jsxs)(n.ol, { children: ['\n', (0, i.jsx)(n.li, { children: 'Gemaakt door de designer.' }), '\n', (0, i.jsx)(n.li, { children: 'Gereviewed door de Design System Lead & Product Manager.' }), '\n'] }), '\n'] }), '\n', (0, i.jsx)(n.li, { children: 'Voorbeeld-thema ingesteld door relations.' }), '\n', (0, i.jsxs)(n.li, { children: ['Documentatie', '\n', (0, i.jsxs)(n.ol, { children: ['\n', (0, i.jsx)(n.li, { children: 'Geschreven door de toegankelijkheidsspecialist, developer, designer.' }), '\n', (0, i.jsx)(n.li, { children: 'Gereviewed door de Design System Lead & Product Manager.' }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'react', children: 'React component' }), '\n', (0, i.jsx)(n.h3, { id: 'doel', children: 'Doel' }), '\n', (0, i.jsx)(a.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst', children: 'Uitkomst' }), '\n', (0, i.jsx)(n.p, { children: 'De React component is ontwikkeld, maakt gebruik van de CSS component en wordt gebruikt in de Storybook en testbestanden.' }), '\n', (0, i.jsx)(n.h2, { id: 'css', children: 'CSS component' }), '\n', (0, i.jsx)(n.h3, { id: 'doel-1', children: 'Doel' }), '\n', (0, i.jsx)(d.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst-1', children: 'Uitkomst' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'De CSS is herbruikbaar opgezet zodat deze als 1 bron van waarheid gebruikt kan worden tussen verschillende framework implementaties, in situaties waar geen controle is over de HTML of in de shadow dom van een web component.' }), '\n', (0, i.jsx)(n.li, { children: 'De component heeft mogelijkheden om alle variaties en states te testen in visuele regressietests' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'css', children: 'SCSS component' }), '\n', (0, i.jsx)(n.h3, { id: 'doel-2', children: 'Doel' }), '\n', (0, i.jsx)(r.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst-2', children: 'Uitkomst' }), '\n', (0, i.jsx)(n.p, { children: 'De component is beschikbaar in mixins die goed kunnen worden ingezet in systemen waar geen controle is over de HTML, maar wel een losse stylesheet kan worden ingeladen.' }), '\n', (0, i.jsx)(n.h2, { id: 'figma', children: 'Figma component' }), '\n', (0, i.jsx)(n.h3, { id: 'doel-3', children: 'Doel' }), '\n', (0, i.jsx)(l.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst-3', children: 'Uitkomst' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: "De component is beschikbaar in Figma en heeft dezelfde API's en states zoals deze in code zijn vastgelegd zodat hij goed overdraagbaar is naar development." }), '\n', (0, i.jsx)(n.li, { children: 'De component is ingesteld in het Start-thema met gebruik van basis-tokens.' }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'voorbeeld-thema', children: 'Voorbeeld-thema' }), '\n', (0, i.jsx)(n.h3, { id: 'doel-4', children: 'Doel' }), '\n', (0, i.jsx)(c.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst-4', children: 'Uitkomst' }), '\n', (0, i.jsx)(n.p, { children: 'De component is beschikbaar in de Voorbeeld-bibliotheek in Figma en is goed in te zetten voor prototyping. Er is een voorbeeld-huisstijl die gebruikt kan worden in de documentatie van de component.' }), '\n', (0, i.jsx)(n.h2, { id: 'documentatie', children: 'Documentatie' }), '\n', (0, i.jsx)(n.h3, { id: 'doel-5', children: 'Doel' }), '\n', (0, i.jsx)(p.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst-5', children: 'Uitkomst' }), '\n', (0, i.jsx)(n.p, { children: "De component documentatie van de beschikbare varianten en API's is beschikbaar in een herbruikbaar Markdown-bestand, op npm en in Storybook voor developers en in Figma voor designers." }), '\n', (0, i.jsx)(n.h2, { id: 'afronden', children: 'Rond de Ontwikkelfase af' }), '\n', (0, i.jsx)(n.h3, { id: 'doel-6', children: 'Doel' }), '\n', (0, i.jsx)(m.Ay, {}), '\n', (0, i.jsx)(n.h3, { id: 'uitkomst-6', children: 'Uitkomst' }), '\n', (0, i.jsx)(n.p, { children: 'De Testfase kan starten en parallel uitgevoerd worden. De Candidate component wordt pas getest wanneer alle onderdelen klaar staan.' })] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(g, { ...e }) }) : g(e);
   }
  },
  30348(e, n, t) {
   t.d(n, { Ay: () => d, RM: () => s });
   var o = t(86070),
    i = t(18439);
   const s = [];
   function a(e) {
    const n = { code: 'code', p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.p, { children: 'Developers kunnen de CSS-implementatie gebruiken voor eigen CSS selectors.' }), '\n', (0, o.jsx)(n.p, { children: 'De CSS-implementatie kan gebruikt worden in de Shadow DOM van een Web Component.' }), '\n', (0, o.jsxs)(n.p, { children: ['De CSS-implementatie kan gebruikt worden op de ', (0, o.jsx)(n.code, { children: ':host' }), ' element van een Web Component.'] }), '\n', (0, o.jsx)(n.p, { children: 'De CSS-implementatie kan gebruikt worden in code waar geen API prefixes van anderen gebruikt moeten worden.' }), '\n', (0, o.jsx)(n.p, { children: 'De CSS-implementatie kan gebruikt worden voor HTML elementen zonder class names.' })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  37055(e, n, t) {
   t.d(n, { Ay: () => d, RM: () => s });
   var o = t(86070),
    i = t(18439);
   const s = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsx)(n.p, { children: 'De Candidate component kan makkelijk worden gebruikt voor prototypes en designs in Figma zodat er genoeg feedback wordt gegeven door designers om er uiteindelijk een Hall of Fame component van te maken.' });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  70205(e, n, t) {
   t.d(n, { Ay: () => d, RM: () => s });
   var o = t(86070),
    i = t(18439);
   const s = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsx)(n.p, { children: 'De component is consistent in alle onderdelen van de implementatie: code, Figma en documentatie.' });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  71641(e, n, t) {
   t.d(n, { Ay: () => d, RM: () => s });
   var o = t(86070),
    i = t(18439);
   const s = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsx)(n.p, { children: 'De Candidate component is goed in te zetten voor prototyping zonder eerst een eigen huisstijl in te stellen.' });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
  98503(e, n, t) {
   t.d(n, { Ay: () => d, RM: () => s });
   var o = t(86070),
    i = t(18439);
   const s = [];
   function a(e) {
    const n = { p: 'p', ...(0, i.R)(), ...e.components };
    return (0, o.jsx)(n.p, { children: 'De Candidate component is aantoonbaar te gebruiken in tenminste 1 veelgebruikt frontend framework, kan makkelijk gedocumenteerd worden in Storybook en werkt goed op onze eigen websites.' });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
   }
  },
 },
]);
