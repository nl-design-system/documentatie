'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [6001],
 {
  18439(e, n, t) {
   t.d(n, { R: () => d, x: () => s });
   var i = t(30758);
   const o = {},
    a = i.createContext(o);
   function d(e) {
    const n = i.useContext(a);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : d(e.components)), i.createElement(a.Provider, { value: n }, e.children));
   }
  },
  88504(e, n, t) {
   (t.r(n), t.d(n, { assets: () => l, contentTitle: () => s, default: () => k, frontMatter: () => d, metadata: () => i, toc: () => r }));
   const i = JSON.parse('{"id":"handboek/definition-of-done/candidate-stappenplan/ontwikkelfase","title":"3. Ontwikkelfase \xb7 Candidate stappenplan \xb7 Component bijdragen \xb7 Handboek","description":"Stappen voor de Ontwikkelfase van de Definition of Done voor Candidate","source":"@site/docs/handboek/definition-of-done/candidate-stappenplan/3-ontwikkelfase.md","sourceDirName":"handboek/definition-of-done/candidate-stappenplan","slug":"/handboek/estafettemodel/componenten/candidate/ontwikkelfase","permalink":"/handboek/estafettemodel/componenten/candidate/ontwikkelfase","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/definition-of-done/candidate-stappenplan/3-ontwikkelfase.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"3. Ontwikkelfase \xb7 Candidate stappenplan \xb7 Component bijdragen \xb7 Handboek","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"3. Ontwikkelfase","sidebar_position":3,"pagination_label":"3. Ontwikkelfase","description":"Stappen voor de Ontwikkelfase van de Definition of Done voor Candidate","slug":"/handboek/estafettemodel/componenten/candidate/ontwikkelfase","keywords":["componenten","design system","estafettemodel","definition of done","candidate"]},"sidebar":"handboek","previous":{"title":"2. Voorbereidingsfase","permalink":"/handboek/estafettemodel/componenten/candidate/Voorbereidingsfase"},"next":{"title":"4. Testfase","permalink":"/handboek/estafettemodel/componenten/candidate/testfase"}}');
   var o = t(86070),
    a = t(18439);
   const d = { title: '3. Ontwikkelfase \xb7 Candidate stappenplan \xb7 Component bijdragen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '3. Ontwikkelfase', sidebar_position: 3, pagination_label: '3. Ontwikkelfase', description: 'Stappen voor de Ontwikkelfase van de Definition of Done voor Candidate', slug: '/handboek/estafettemodel/componenten/candidate/ontwikkelfase', keywords: ['componenten', 'design system', 'estafettemodel', 'definition of done', 'candidate'] },
    s = 'Ontwikkelfase voor Candidate componenten',
    l = {},
    r = [
     { value: 'React component', id: 'react', level: 2 },
     { value: 'Doel', id: 'doel', level: 3 },
     { value: 'Uitkomst', id: 'uitkomst', level: 3 },
     { value: 'CSS component', id: 'css', level: 2 },
     { value: 'Doel', id: 'doel-1', level: 3 },
     { value: 'Uitkomst', id: 'uitkomst-1', level: 3 },
     { value: 'Figma component', id: 'figma', level: 2 },
     { value: 'Doel', id: 'doel-2', level: 3 },
     { value: 'Uitkomst', id: 'uitkomst-2', level: 3 },
     { value: 'Voorbeeld-thema', id: 'voorbeeld-thema', level: 2 },
     { value: 'Doel', id: 'doel-3', level: 3 },
     { value: 'Uitkomst', id: 'uitkomst-3', level: 3 },
     { value: 'Documentatie', id: 'documentatie', level: 2 },
     { value: 'Doel', id: 'doel-4', level: 3 },
     { value: 'Uitkomst', id: 'uitkomst-4', level: 3 },
     { value: 'Rond de Ontwikkelfase af', id: 'afronden', level: 2 },
     { value: 'Doel', id: 'doel-5', level: 3 },
     { value: 'Uitkomst', id: 'uitkomst-5', level: 3 },
    ];
   function c(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', img: 'img', li: 'li', ol: 'ol', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'ontwikkelfase-voor-candidate-componenten', children: 'Ontwikkelfase voor Candidate componenten' }) }), '\n', (0, o.jsx)(n.p, { children: 'De Ontwikkelfase start wanneer de Voorbereidingsfase is afgerond. Dan zijn alle acceptatiecriteria en benodigde testcases bepaald.' }), '\n', (0, o.jsx)(n.p, { children: 'In de Ontwikkelfase wordt de component in CSS, React en Figma beschikbaar gemaakt en wordt documentatie geschreven waarmee de community de component kan gebruiken.' }), '\n', (0, o.jsx)(n.p, { children: (0, o.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/candidate-stappenplan-ontwikkelfase.png', alt: 'Een overzicht van de stappen in de Ontwikkelfase, van links naar rechts op volgorde en van boven naar beneden gegroepeerd per specialisme dat hierbij betrokken is: Developer relations en Design relations (samen relations), toegankelijkheidsspecialist, developer, designer en design system lead met productmanager (samen lead).' }) }), '\n', (0, o.jsx)(n.p, { children: (0, o.jsx)(n.a, { href: 'https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/candidate-stappenplan-ontwikkelfase.png', children: 'Bekijk de illustratie voor de Ontwikkelfase op een losse pagina' }) }), '\n', (0, o.jsx)(n.p, { children: 'De stappen en substappen in de Ontwikkelfase kunnen soms parallel worden opgepakt, maar hebben hierin wel relatie tot elkaar. Bovenstaande visualisatie laat de volgende stappen zien:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: ['React Component', '\n', (0, o.jsxs)(n.ol, { children: ['\n', (0, o.jsx)(n.li, { children: 'Gemaakt door de developer.' }), '\n', (0, o.jsx)(n.li, { children: 'Gereviewed door de Design System Lead & Product Manager.' }), '\n'] }), '\n'] }), '\n', (0, o.jsxs)(n.li, { children: ['CSS Component', '\n', (0, o.jsxs)(n.ol, { children: ['\n', (0, o.jsx)(n.li, { children: 'Gemaakt door de developer.' }), '\n', (0, o.jsx)(n.li, { children: 'Gereviewed door de Design System Lead & Product Manager.' }), '\n'] }), '\n'] }), '\n', (0, o.jsxs)(n.li, { children: ['Figma Component', '\n', (0, o.jsxs)(n.ol, { children: ['\n', (0, o.jsx)(n.li, { children: 'Gemaakt door de designer.' }), '\n', (0, o.jsx)(n.li, { children: 'Gereviewed door de Design System Lead & Product Manager.' }), '\n'] }), '\n'] }), '\n', (0, o.jsx)(n.li, { children: 'Voorbeeld-thema ingesteld door relations.' }), '\n', (0, o.jsxs)(n.li, { children: ['Documentatie', '\n', (0, o.jsxs)(n.ol, { children: ['\n', (0, o.jsx)(n.li, { children: 'Geschreven door de toegankelijkheidsspecialist, developer, designer.' }), '\n', (0, o.jsx)(n.li, { children: 'Gereviewed door de Design System Lead & Product Manager.' }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'react', children: 'React component' }), '\n', (0, o.jsx)(n.h3, { id: 'doel', children: 'Doel' }), '\n', (0, o.jsx)(n.p, { children: 'De Candidate component is aantoonbaar te gebruiken in ten minste 1 veelgebruikt frontend framework, kan makkelijk gedocumenteerd worden in Storybook en werkt goed op onze eigen websites.' }), '\n', (0, o.jsx)(n.h3, { id: 'uitkomst', children: 'Uitkomst' }), '\n', (0, o.jsx)(n.p, { children: 'De React component is ontwikkeld, maakt gebruik van de CSS component en wordt gebruikt in de Storybook en testbestanden.' }), '\n', (0, o.jsx)(n.h2, { id: 'css', children: 'CSS component' }), '\n', (0, o.jsx)(n.h3, { id: 'doel-1', children: 'Doel' }), '\n', (0, o.jsx)(n.p, { children: "De Candidate component kan makkelijk beschikbaar worden gemaakt in elk framework naar keuze en heeft hierbij dezelfde gedeelde stylesheet. Bij componenten met een native equivalent is er een HTML variant te gebruiken, zodat deze ook kan worden gebruikt voor output uit CMS'en en API's waar geen classnames kunnen worden toegepast op de HTML." }), '\n', (0, o.jsx)(n.h3, { id: 'uitkomst-1', children: 'Uitkomst' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'De component is beschikbaar in mixins die goed kunnen worden ingezet in systemen waar geen controle is over de HTML, maar wel een losse stylesheet kan worden ingeladen.' }), '\n', (0, o.jsx)(n.li, { children: 'De CSS is herbruikbaar opgezet zodat deze als \xe9\xe9n bron van waarheid gebruikt kan worden tussen verschillende framework implementaties, in situaties waar geen controle is over de HTML of in de Shadow DOM van een web component.' }), '\n', (0, o.jsx)(n.li, { children: 'De component heeft mogelijkheden om alle variaties en states te testen in visuele regressietests.' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'figma', children: 'Figma component' }), '\n', (0, o.jsx)(n.h3, { id: 'doel-2', children: 'Doel' }), '\n', (0, o.jsx)(n.p, { children: 'De Candidate component kan makkelijk ingezet worden door designers en is snel in te stellen op een eigen huisstijl.' }), '\n', (0, o.jsx)(n.h3, { id: 'uitkomst-2', children: 'Uitkomst' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: "De component is beschikbaar in Figma en heeft dezelfde API's en states zoals deze in code zijn vastgelegd zodat hij goed overdraagbaar is naar development." }), '\n', (0, o.jsx)(n.li, { children: 'De component is ingesteld in het Start-thema met gebruik van basis-tokens.' }), '\n'] }), '\n', (0, o.jsx)(n.h2, { id: 'voorbeeld-thema', children: 'Voorbeeld-thema' }), '\n', (0, o.jsx)(n.h3, { id: 'doel-3', children: 'Doel' }), '\n', (0, o.jsx)(n.p, { children: 'De Candidate component is goed in te zetten voor prototyping zonder eerst een eigen huisstijl in te stellen.' }), '\n', (0, o.jsx)(n.h3, { id: 'uitkomst-3', children: 'Uitkomst' }), '\n', (0, o.jsx)(n.p, { children: 'De component is beschikbaar in de Voorbeeld-bibliotheek in Figma en is goed in te zetten voor prototyping. Er is een voorbeeld-huisstijl die gebruikt kan worden in de documentatie van de component.' }), '\n', (0, o.jsx)(n.h2, { id: 'documentatie', children: 'Documentatie' }), '\n', (0, o.jsx)(n.h3, { id: 'doel-4', children: 'Doel' }), '\n', (0, o.jsx)(n.p, { children: 'De Candidate component en varianten zijn makkelijk te gebruiken voor developers en designers zodat het laagdrempelig is om de component te gebruiken, en het kernteam daardoor voldoende feedback krijgt om de component te selecteren voor de Hall of Fame stappen.' }), '\n', (0, o.jsx)(n.h3, { id: 'uitkomst-4', children: 'Uitkomst' }), '\n', (0, o.jsx)(n.p, { children: "De component documentatie van de beschikbare varianten en API's is beschikbaar in een herbruikbaar Markdown-bestand, op npm en in Storybook voor developers en in Figma voor designers." }), '\n', (0, o.jsx)(n.h2, { id: 'afronden', children: 'Rond de Ontwikkelfase af' }), '\n', (0, o.jsx)(n.h3, { id: 'doel-5', children: 'Doel' }), '\n', (0, o.jsx)(n.p, { children: 'De Candidate component is consistent in code, Figma en documentatie.' }), '\n', (0, o.jsx)(n.h3, { id: 'uitkomst-5', children: 'Uitkomst' }), '\n', (0, o.jsx)(n.p, { children: 'De Testfase kan starten en parallel uitgevoerd worden. De Candidate component wordt pas getest wanneer alle onderdelen klaar staan.' })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
