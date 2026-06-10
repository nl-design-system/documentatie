'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67209],
 {
  18439(e, t, n) {
   n.d(t, { R: () => r, x: () => o });
   var i = n(30758);
   const a = {},
    s = i.createContext(a);
   function r(e) {
    const t = i.useContext(s);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function o(e) {
    let t;
    return ((t = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), i.createElement(s.Provider, { value: t }, e.children));
   }
  },
  24817(e, t, n) {
   (n.r(t), n.d(t, { assets: () => l, contentTitle: () => o, default: () => c, frontMatter: () => r, metadata: () => i, toc: () => h }));
   const i = JSON.parse('{"id":"handboek/huisstijl-vastleggen/themas/start-thema","title":"Start-thema","description":"Informatie over het Start-thema.","source":"@site/docs/handboek/huisstijl-vastleggen/themas/start-thema.mdx","sourceDirName":"handboek/huisstijl-vastleggen/themas","slug":"/handboek/huisstijl/themas/start-thema","permalink":"/handboek/huisstijl/themas/start-thema","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/huisstijl-vastleggen/themas/start-thema.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Start-thema","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Start-thema","sidebar_position":1,"navigation_order":1,"pagination_label":"Start-thema","description":"Informatie over het Start-thema.","slug":"/handboek/huisstijl/themas/start-thema","keywords":["componenten","design system","design tokens","thema\'s","start-thema"]},"sidebar":"handboek","previous":{"title":"Thema\'s","permalink":"/handboek/huisstijl/themas"},"next":{"title":"Voorbeeld-thema","permalink":"/handboek/huisstijl/themas/voorbeeld-thema"}}');
   var a = n(86070),
    s = n(18439);
   const r = { title: 'Start-thema', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Start-thema', sidebar_position: 1, navigation_order: 1, pagination_label: 'Start-thema', description: 'Informatie over het Start-thema.', slug: '/handboek/huisstijl/themas/start-thema', keywords: ['componenten', 'design system', 'design tokens', "thema's", 'start-thema'] },
    o = 'Start-thema',
    l = {},
    h = [
     { value: 'Doel van het Start-thema', id: 'doel-van-het-start-thema', level: 2 },
     { value: 'Stijl van het Start-thema', id: 'stijl-van-het-start-thema', level: 2 },
     { value: 'Typografie', id: 'typografie', level: 3 },
     { value: 'Kleur', id: 'kleur', level: 3 },
     { value: 'Iconen', id: 'iconen', level: 3 },
     { value: 'Functionele iconen', id: 'functionele-iconen', level: 4 },
     { value: 'Toptaak iconen', id: 'toptaak-iconen', level: 4 },
     { value: 'Voor designers', id: 'voor-designers', level: 3 },
     { value: 'Help deze documentatie te verbeteren', id: 'help-deze-documentatie-te-verbeteren', level: 2 },
     { value: 'Vragen', id: 'vragen', level: 2 },
    ];
   function d(e) {
    const t = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', header: 'header', hr: 'hr', img: 'img', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t.header, { children: (0, a.jsx)(t.h1, { id: 'start-thema', children: 'Start-thema' }) }), '\n', (0, a.jsxs)(t.p, { children: ["Vanuit NL Design System bieden we het 'Start-thema' aan. De stijl van dit Start-thema hebben we vastgelegd in een set aan ", (0, a.jsx)(t.a, { href: '/handboek/huisstijl/basis-tokens/', children: "'basis-tokens'" }), '. Deze basis-tokens leven op het ', (0, a.jsx)(t.a, { href: '/handboek/huisstijl/design-tokens/#common-tokens', children: "'Common' niveau" }), '.'] }), '\n', (0, a.jsx)(t.p, { children: "Op deze pagina lees je over het doel en de stijl van het 'Start-thema'." }), '\n', (0, a.jsx)(t.h2, { id: 'doel-van-het-start-thema', children: 'Doel van het Start-thema' }), '\n', (0, a.jsx)(t.p, { children: "Met het Start-thema bieden we organisaties een stevig 'startpunt'. Het thema bevat toegankelijke en gebruiksvriendelijke standaarden, zodat je stap voor stap de huisstijl van jouw organisatie kunt doorvoeren. Zo kun je direct aan de slag met een consistente en inclusieve huisstijl, zonder alles zelf op te hoeven bouwen." }), '\n', (0, a.jsx)(t.p, { children: (0, a.jsx)(t.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_start-thema_stijl.png', alt: 'Stijl van het Start-thema: een donkerblauw vlak met witte letters \u2018Start-thema. Eenvoudig en neutraal.\u2019 Rechts een illustratie van Nederland in dezelfde kleur.' }) }), '\n', (0, a.jsx)(t.h2, { id: 'stijl-van-het-start-thema', children: 'Stijl van het Start-thema' }), '\n', (0, a.jsx)(t.p, { children: 'De stijl is bewust eenvoudig en neutraal. Toch zijn er duidelijke keuzes gemaakt voor typografie, kleuren en iconen.' }), '\n', (0, a.jsx)(t.h3, { id: 'typografie', children: 'Typografie' }), '\n', (0, a.jsxs)(t.p, { children: ['Als lettertype is gekozen voor IBM Plex Sans, een open source-lettertype dat voldoet aan onze ', (0, a.jsx)(t.a, { href: '/richtlijnen/stijl/typografie/', children: 'richtlijnen voor typografie' }), '. Leuk detail: het is ontworpen door Mike Abbink van het Nederlandse bureau Bold Monday.'] }), '\n', (0, a.jsx)(t.p, { children: (0, a.jsx)(t.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_start-thema_typografie.png', alt: 'De tekst IMB Plex Sans wordt afgebeeld met het lettertype IBM Plex Sans.' }) }), '\n', (0, a.jsx)(t.h3, { id: 'kleur', children: 'Kleur' }), '\n', (0, a.jsxs)(t.p, { children: ['De kleuren in het Start-thema bestaan uit blauw- en grijstinten, aangevuld met signaalkleuren. Alle combinaties voldoen aan de ', (0, a.jsx)(t.a, { href: '/richtlijnen/stijl/kleuren/', children: 'richtlijnen voor kleur' }), '. Denk daarbij aan voldoende contrast voor ', (0, a.jsx)(t.a, { href: '/wcag/1.4.3/', children: 'tekstkleur ten opzichte van de achtergrondkleur' }), '. Maar ook voldoende contrast voor ', (0, a.jsx)(t.a, { href: '/wcag/1.4.11/', children: 'niet-textuele content' }), '.'] }), '\n', (0, a.jsx)(t.p, { children: 'Ook is er direct een dark-mode beschikbaar.' }), '\n', (0, a.jsx)(t.p, { children: (0, a.jsx)(t.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_start-thema_kleur.png', alt: 'Twee cirkels. De linker is donkerblauw de rechter is donkergrijs.' }) }), '\n', (0, a.jsx)(t.h3, { id: 'iconen', children: 'Iconen' }), '\n', (0, a.jsx)(t.h4, { id: 'functionele-iconen', children: 'Functionele iconen' }), '\n', (0, a.jsx)(t.p, { children: (0, a.jsx)(t.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_voorbeeld-thema_functionele-iconen.png', alt: 'Tabler logo met op de achtergrond allerlei verschillende iconen uit deze set.' }) }), '\n', (0, a.jsxs)(t.p, { children: ['Voor functionele iconen gebruiken we een selectie uit de ', (0, a.jsx)(t.a, { href: 'https://tabler-icons.io/', children: 'Tabler iconenset' }), '. Deze open-source set bevat meer dan 3100 outline iconen en mag ook binnen jouw organisatie worden gebruikt.'] }), '\n', (0, a.jsx)(t.p, { children: 'Let op: deze set wordt niet door NL Design System beheerd. Je bent zelf verantwoordelijk voor het gebruik. Mis je een icoon? Dan kun je deze zelf toevoegen.' }), '\n', (0, a.jsxs)(t.p, { children: ['Aangezien de originele iconen uit lijnen van 2px bestaan die niet meeschalen met het formaat, hebben we ze omgezet naar vaste vormen (outline stroke). Dit sluit aan bij onze ', (0, a.jsx)(t.a, { href: '/richtlijnen/stijl/iconen/', children: 'richtlijnen rondom iconen' }), '.'] }), '\n', (0, a.jsx)(t.h4, { id: 'toptaak-iconen', children: 'Toptaak iconen' }), '\n', (0, a.jsx)(t.p, { children: (0, a.jsx)(t.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_voorbeeld-thema_toptaak-iconen.png', alt: 'Gemeente iconen logo met op de achtergrond allerlei verschillende iconen uit deze set.' }) }), '\n', (0, a.jsxs)(t.p, { children: ['Voor toptaak iconen maken we gebruik van de outline-versie van de ', (0, a.jsx)(t.a, { href: 'https://www.gemeenteniconen.nl/', children: 'OpenGemeenten iconenset' }), '. Deze set met meer dan 200 iconen is open source en mag je vrij gebruiken.'] }), '\n', (0, a.jsxs)(t.p, { children: ['Ook deze set valt buiten ons beheer. Mis je een icoon? Neem dan contact op met ', (0, a.jsx)(t.a, { href: 'https://www.gemeenteniconen.nl/doe-mee', children: 'OpenGemeenten' }), '.'] }), '\n', (0, a.jsx)(t.h3, { id: 'voor-designers', children: 'Voor designers' }), '\n', (0, a.jsxs)(t.p, { children: ['Wil je zien hoe het Start thema is toegepast op componenten? Neem dan gerust een kijkje in de ', (0, a.jsx)(t.a, { href: 'https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=197-664&t=t25LHoMjEkUZyEi1-1', children: 'NL Design System Figma Bibliotheek met het Start thema' }), '.'] }), '\n', (0, a.jsxs)(t.p, { children: ['Je kunt deze bibliotheek gebruiken om zelf prototypes te maken of als startpunt om je eigen thema op te bouwen. Lees de ', (0, a.jsx)(t.a, { href: '/handboek/designer/introductie/', children: 'introductie voor designers' }), ' of volg het ', (0, a.jsx)(t.a, { href: '/handboek/designer/figma-stappenplan/', children: 'Figma stappenplan' }), ' om direct aan de slag te gaan.'] }), '\n', (0, a.jsx)(t.hr, {}), '\n', (0, a.jsx)(t.h2, { id: 'help-deze-documentatie-te-verbeteren', children: 'Help deze documentatie te verbeteren' }), '\n', (0, a.jsxs)(t.p, { children: ['Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ', (0, a.jsx)(t.a, { href: 'https://github.com/nl-design-system/documentatie', children: 'GitHub' }), '.'] }), '\n', (0, a.jsx)(t.h2, { id: 'vragen', children: 'Vragen' }), '\n', (0, a.jsxs)(t.p, { children: ['Heb je een vraag? Twijfel niet en ', (0, a.jsx)(t.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' }), '.'] })] });
   }
   function c(e = {}) {
    const { wrapper: t } = { ...(0, s.R)(), ...e.components };
    return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
   }
  },
 },
]);
