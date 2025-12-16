'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [77667],
 {
  85248: (e, n, i) => {
   i.d(n, { R: () => s, x: () => l });
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
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : s(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
  90534: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => a, contentTitle: () => l, default: () => c, frontMatter: () => s, metadata: () => t, toc: () => d });
   const t = JSON.parse('{"id":"footer/toegankelijkheidsverklaring","title":"Toegankelijkheid","description":"Componenten uit de community","source":"@site/docs/footer/toegankelijkheidsverklaring.md","sourceDirName":"footer","slug":"/toegankelijkheidsverklaring","permalink":"/toegankelijkheidsverklaring","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/footer/toegankelijkheidsverklaring.md","tags":[],"version":"current","frontMatter":{"title":"Toegankelijkheid","hide_title":true,"hide_table_of_contents":false,"pagination_label":"Toegankelijkheid","slug":"/toegankelijkheidsverklaring"}}');
   var o = i(86070),
    r = i(85248);
   const s = { title: 'Toegankelijkheid', hide_title: !0, hide_table_of_contents: !1, pagination_label: 'Toegankelijkheid', slug: '/toegankelijkheidsverklaring' },
    l = 'Toegankelijkheid',
    a = {},
    d = [
     { value: 'Componenten uit de community', id: 'componenten-uit-de-community', level: 2 },
     { value: 'Verzameling offici\xeble componenten van NL Design System', id: 'verzameling-offici\xeble-componenten-van-nl-design-system', level: 2 },
     { value: 'Website NL Design System', id: 'website-nl-design-system', level: 2 },
     { value: 'Rapporten', id: 'rapporten', level: 3 },
     { value: 'Huidige status', id: 'huidige-status', level: 3 },
    ];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }) }), '\n', (0, o.jsx)(n.h2, { id: 'componenten-uit-de-community', children: 'Componenten uit de community' }), '\n', (0, o.jsx)(n.p, { children: 'De componenten die de NL Design System community ontwikkelt worden direct open source gedeeld.\nComponenten zijn vaak beschikbaar zodra teams beginnen met de ontwikkeling, wanneer toegankelijkheid nog niet onafhankelijk is getest.\nLet op welk label de component heeft in het componenten-overzicht van Storybook: "work in progress", "alpha", "beta" of "production".' }), '\n', (0, o.jsx)(n.p, { children: 'De bedoeling is dat componenten het label "production" krijgen wanneer het team de component heeft ingezet, de website vervolgens is gecontroleerd en een toegankelijkheidsverklaring heeft, en geconstateerde toegankelijkheidsproblemen zijn verholpen.' }), '\n', (0, o.jsx)(n.p, { children: 'Alle componenten die nu op de website staan zijn nog de "community" componenten. Controleer daarom zelf naar beste kunnen de toegankelijkheid wanneer je de component inzet, deel resultaten uit een onafhankelijke toegankelijkheidsverklaring, en werk samen met de community om de kwaliteit te verbeteren.' }), '\n', (0, o.jsx)(n.h2, { id: 'verzameling-offici\xeble-componenten-van-nl-design-system', children: 'Verzameling offici\xeble componenten van NL Design System' }), '\n', (0, o.jsx)(n.p, { children: 'Het kernteam van NL Design System zal de komende periode veelgebruikte componenten uit de community in beheer nemen, en helpen bij het controleren van toegankelijkheid. We werken met het estafettemodel, waarbij het kernteam het stokje overneemt wanneer een component succesvol werkt in de praktijk.' }), '\n', (0, o.jsx)(n.p, { children: 'Wanneer tenminste tw\xe9\xe9 organisaties in de community een component van elkaar hergebruiken "in productie", en de component beide keren een positieve toegankelijkheidsverklaring krijgt of alle geconstateerde problemen nadien zijn verholpen, wordt het een kandidaat om op te nemen in de offici\xeble verzameling.' }), '\n', (0, o.jsx)(n.h2, { id: 'website-nl-design-system', children: 'Website NL Design System' }), '\n', (0, o.jsxs)(n.p, { children: ['We streven ernaar voor de website nldesignsystem.nl te voldoen aan de ', (0, o.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'WCAG 2.2 AA richtlijnen' }), ', zoals opgesteld door het W3C.'] }), '\n', (0, o.jsxs)(n.p, { children: ['Ondervind je een probleem bij het gebruik van deze website of heb je hier een vraag over?\nNeem dan ', (0, o.jsx)(n.a, { href: '/project/kernteam/', children: 'contact' }), ' met ons op.'] }), '\n', (0, o.jsx)(n.h3, { id: 'rapporten', children: 'Rapporten' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/toegankelijkheidsverklaring/rapport-2024/', children: 'Auditrapport v2 (26 november 2024)' }), '.'] }), '\n', (0, o.jsxs)(n.li, { children: [(0, o.jsx)(n.a, { href: '/toegankelijkheidsverklaring/rapport-2023/', children: 'Auditrapport v1 (20 november 2023)' }), '.'] }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'huidige-status', children: 'Huidige status' }), '\n', (0, o.jsx)(n.p, { children: 'Bekende issues:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: "1.2.2: video's van v\xf3\xf3r 2023 zijn niet ondertiteld. Mocht je een video van voor 2023 willen kijken en ondertiteling willen gebruiken, laat het ons weten." }), '\n'] }), '\n', (0, o.jsxs)(n.p, { children: ['Een overzicht van alle issues die in onze website zijn geconstateerd, inclusief issues die geen WCAG-overtredingen zijn, is terug te vinden op onze ', (0, o.jsx)(n.a, { href: 'https://github.com/orgs/nl-design-system/projects/17/views/1', children: 'projectbord voor toegankelijkheidsissues' }), '.'] }), '\n', (0, o.jsx)('p', { children: (0, o.jsx)('a', { href: 'https://www.toegankelijkheidsverklaring.nl/register/12250', children: (0, o.jsx)('img', { src: 'https://www.toegankelijkheidsverklaring.nl/files/verklaring/label/c35c932f9287cfbe2ced503c9d3fa04d.12250.svg?1700559665', alt: 'Status toegankelijkheidslabel van NL Design System. Volg de link voor de volledige toegankelijkheidsverklaring.', width: '692', height: '251' }) }) })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, r.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(h, { ...e }) }) : h(e);
   }
  },
 },
]);
