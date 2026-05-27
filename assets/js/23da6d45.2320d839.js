'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [74360],
 {
  18439(e, n, i) {
   i.d(n, { R: () => s, x: () => a });
   var t = i(30758);
   const o = {},
    r = t.createContext(o);
   function s(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), t.createElement(r.Provider, { value: n }, e.children));
   }
  },
  51297(e, n, i) {
   (i.r(n), i.d(n, { assets: () => d, contentTitle: () => a, default: () => h, frontMatter: () => s, metadata: () => t, toc: () => l }));
   const t = JSON.parse('{"id":"project/schrijfwijzer/afbeeldingen","title":"Afbeeldingen","description":"Afbeeldingen voor communicatie vanuit het project NL Design System.","source":"@site/docs/project/schrijfwijzer/afbeeldingen.mdx","sourceDirName":"project/schrijfwijzer","slug":"/project/schrijfwijzer/afbeeldingen","permalink":"/project/schrijfwijzer/afbeeldingen","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/schrijfwijzer/afbeeldingen.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Afbeeldingen","hide_title":true,"sidebar_label":"Afbeeldingen","sidebar_position":7,"pagination_label":"Afbeeldingen","description":"Afbeeldingen voor communicatie vanuit het project NL Design System.","keywords":["kernteam"]},"sidebar":"project","previous":{"title":"Engels","permalink":"/project/schrijfwijzer/engels"},"next":{"title":"Video","permalink":"/project/schrijfwijzer/video"}}');
   var o = i(86070),
    r = i(18439);
   i(46447);
   const s = { title: 'Afbeeldingen', hide_title: !0, sidebar_label: 'Afbeeldingen', sidebar_position: 7, pagination_label: 'Afbeeldingen', description: 'Afbeeldingen voor communicatie vanuit het project NL Design System.', keywords: ['kernteam'] },
    a = 'Afbeeldingen',
    d = {},
    l = [
     { value: 'Toestemming voor gebruik', id: 'toestemming-voor-gebruik', level: 2 },
     { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 2 },
     { value: 'Screenshots', id: 'screenshots', level: 2 },
     { value: 'Gedateerde screenshots', id: 'gedateerde-screenshots', level: 3 },
     { value: 'Vector-afbeeldingen', id: 'vector-afbeeldingen', level: 2 },
    ];
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'afbeeldingen', children: 'Afbeeldingen' }) }), '\n', (0, o.jsx)(n.h2, { id: 'toestemming-voor-gebruik', children: 'Toestemming voor gebruik' }), '\n', '\n', (0, o.jsx)(n.p, { children: "Gebruik nooit zomaar afbeeldingen van internet. Krijg je een afbeelding aangeleverd? Check dan of je deze mag gebruiken en of bronvermelding nodig is. Maak je zelf foto's op een evenement of bijeenkomst? Vraag dan altijd toestemming aan de aanwezigen of je de foto mag delen." }), '\n', (0, o.jsx)(n.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, o.jsx)(n.p, { children: 'Wanneer afbeeldingen veel tekst erin hebben, beoordeel dan of een rich text alternatief gebruiksvriendelijker en toegankelijker zou zijn.' }), '\n', (0, o.jsx)(n.p, { children: 'Een afbeelding heeft een alt-tekst nodig. In de alt-tekst beschrijf je wat er op de afbeelding staat. Houd afbeeldingen daarom zo simpel mogelijk.' }), '\n', (0, o.jsx)(n.h2, { id: 'screenshots', children: 'Screenshots' }), '\n', (0, o.jsx)(n.p, { children: 'Gebruik PNG voor het opslaan van screenshots, niet een lossy formaat zoals JPEG. Laat het optimaliseren van afbeeldingen over aan de software voor de website. In de toekomst kunnen nieuwe technieken voor optimalisaties gebruikt worden, en dan is het handig dat het bronbestand van hoge kwaliteit nog beschikbaar is.' }), '\n', (0, o.jsxs)(n.p, { children: ["Zorg voor een rustige layout van de pagina door afbeeldingen en video's te gebruiken met consistente formaten. Gebruik voor screenshots de volgende formaten die relevant zijn voor ", (0, o.jsx)(n.a, { href: '/wcag/1.4.10/', children: 'WCAG-succescriterium 1.4.10 Reflow' }), ', tenzij er een belangrijke reden is om een ander formaat te gebruiken.'] }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: '1280 \xd7 1024 pixels: 100% zoom' }), '\n', (0, o.jsx)(n.li, { children: '320 \xd7 256 pixels: 400% zoom' }), '\n', (0, o.jsx)(n.li, { children: '256 \xd7 320 pixels: 400% zoom, portretmodus' }), '\n', (0, o.jsx)(n.li, { children: '1024 \xd71280 pixels: 100% zoom, landschapsmodus' }), '\n'] }), '\n', (0, o.jsx)(n.p, { children: 'Een handige manier om screenshots in een vast formaat te maken is via de Chrome Developer Tools. Je kunt Devices aanmaken die je "WCAG 100%" en "WCAG 400%" noemt, zodat je makkelijk de website op het juiste formaat kunt instellen. Maak dan een screenshot via de developer tools.' }), '\n', (0, o.jsxs)(n.p, { children: ['Bekijk een video over hoe dit werkt: ', (0, o.jsx)(n.a, { href: 'https://youtu.be/tL-R9KzZA0s?t=55', children: '4 ways to capture screenshots in Chrome DevTools' })] }), '\n', (0, o.jsx)(n.p, { children: 'Zorg dat screenshots er niet onscherp uit zien op high-end beeldschermen. Maak daarom screenshots met een pixel density van tenminste 2 dots per pixel. Gebruik een apparaat met een pixel-density van tenminste 2 dots per pixel, of simuleer een hoge pixel density via de Device instellingen in Developer Tools. Beeldschermen van Apple en high-end mobiele telefoons voldoen hieraan.' }), '\n', (0, o.jsx)(n.h3, { id: 'gedateerde-screenshots', children: 'Gedateerde screenshots' }), '\n', (0, o.jsx)(n.p, { children: 'Afbeeldingen kunnen na een paar jaar de indruk wekken dat ze gedateerd zijn. De kans bestaat dat door een oude screenshot de hele pagina gedateerd voelt. Afbeeldingen moeten daarom periodiek vernieuwd worden. Maak de afweging of hebben van de afbeelding opweegt tegen het onderhoud dat er voor nodig is.' }), '\n', (0, o.jsx)(n.p, { children: 'Een screenshot zonder de user interface van de browser of het besturingssysteem zal minder snel gedateerd zijn. Maak een screenshots van websites daarom alleen van de website zelf, via de Developer Tools.' }), '\n', (0, o.jsx)(n.h2, { id: 'vector-afbeeldingen', children: 'Vector-afbeeldingen' }), '\n', (0, o.jsxs)(n.p, { children: ['SVG afbeeldingen zijn soms beter! Gebruik ', (0, o.jsx)(n.code, { children: 'fill="currentColor"' }), ' in plaats van vaste kleuren, zodat de illustratie zich aanpast in dark mode en in forced colors mode. Gebruik ', (0, o.jsx)(n.code, { children: '<svg>' }), ' in de HTML van de pagina, gebruik niet ', (0, o.jsx)(n.code, { children: '<img src="image.svg">' })] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
   }
  },
 },
]);
