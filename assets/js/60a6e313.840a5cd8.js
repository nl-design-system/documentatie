'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [41316],
 {
  18439(e, n, r) {
   r.d(n, { R: () => s, x: () => d });
   var t = r(30758);
   const a = {},
    i = t.createContext(a);
   function s(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : s(e.components)), t.createElement(i.Provider, { value: n }, e.children));
   }
  },
  48240(e, n, r) {
   (r.r(n), r.d(n, { assets: () => l, contentTitle: () => o, default: () => m, frontMatter: () => d, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"handboek/developer/cdn-migratie","title":"Migreer van een CDN naar pnpm","description":"De dependencies op de aanbevolen manier installeren via pnpm is \xe9\xe9n van de eerste stappen wanneer je het prototype gaat doorontwikkelen.","source":"@site/docs/handboek/developer/cdn-migratie.mdx","sourceDirName":"handboek/developer","slug":"/handboek/developer/cdn-migratie","permalink":"/handboek/developer/cdn-migratie","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/cdn-migratie.mdx","tags":[],"version":"current","frontMatter":{"title":"Migreer van een CDN naar pnpm","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Migreer van een CDN naar pnpm","pagination_label":"Migreer van een CDN naar pnpm"},"sidebar":"handboek","previous":{"title":"API conventie","permalink":"/handboek/developer/api-conventie"},"next":{"title":"CDN gebruiken","permalink":"/handboek/developer/cdn"}}');
   var a = r(86070),
    i = r(18439),
    s = r(46447);
   const d = { title: 'Migreer van een CDN naar pnpm', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Migreer van een CDN naar pnpm', pagination_label: 'Migreer van een CDN naar pnpm' },
    o = 'Migreer van een CDN naar pnpm',
    l = {},
    c = [
     { value: 'Dependencies installeren', id: 'dependencies-installeren', level: 3 },
     { value: 'Web Fonts installeren', id: 'web-fonts-installeren', level: 3 },
     { value: 'CSS en Web Fonts migreren', id: 'css-en-web-fonts-migreren', level: 3 },
     { value: 'JavaScript migreren', id: 'javascript-migreren', level: 3 },
    ];
   function p(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h3: 'h3', header: 'header', p: 'p', pre: 'pre', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'migreer-van-een-cdn-naar-pnpm', children: 'Migreer van een CDN naar pnpm' }) }), '\n', (0, a.jsx)(s.fz, { lead: !0, children: (0, a.jsx)(n.p, { children: 'De dependencies op de aanbevolen manier installeren via pnpm is \xe9\xe9n van de eerste stappen wanneer je het prototype gaat doorontwikkelen.' }) }), '\n', (0, a.jsxs)(n.p, { children: ['Zoek alle plekken waar je de ', (0, a.jsx)(n.a, { href: '/handboek/developer/cdn/', children: 'CDN in je prototype' }), ' gebruikt. Bekijk hiervoor de Network-tab in de Developer Tools van je browser. Zoek welke andere servers daar voorkomen. Ken je de URL van de CDN? Zoek deze dan direct op in de code.'] }), '\n', (0, a.jsxs)(n.p, { children: ['De aanpassingen van de code van je prototype die nodig zijn, zijn heel erg afhankelijk van welke build tools je gaat gebruiken. De volgende voorbeelden laten zien hoe je naar ', (0, a.jsx)(n.a, { href: 'https://vite.dev', children: 'Vite' }), ' kan migreren.'] }), '\n', (0, a.jsx)(n.h3, { id: 'dependencies-installeren', children: 'Dependencies installeren' }), '\n', (0, a.jsx)(n.p, { children: 'Zoek in de code naar npm-packages die je via een CDN laadt. In de Network-tab staan vaak te veel packages. Dit komt door indirecte dependencies. Die hoef je niet zelf te installeren. Beperk je daarom alleen tot de npm-packages in de code.' }), '\n', (0, a.jsxs)(n.p, { children: ['Installeer elke npm dependency met ', (0, a.jsx)(n.code, { children: 'pnpm add' }), ', en noem hetzelfde versienummer als die bekend is. Bijvoorbeeld, wanneer de volgende code in je prototype staat:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<script\n  src="https://unpkg.com/@utrecht/web-component-library-stencil@4.1.0/dist/utrecht/utrecht.esm.js"\n  type="module"\n><\/script>\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Dan installeer je de dependency zo via pnpm, met hetzelfde versienummer:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-shell', children: 'pnpm add @utrecht/web-component-library-stencil@4.1.0\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Wanneer er geen versienummer bekend is, dan kun je de laatste versie installeren:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-shell', children: 'pnpm add @utrecht/web-component-library-stencil\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Wanneer het prototype geen versienummer noemt, dan kan het zijn dat het prototype niet meer werkt met de laatste versie van de dependency. Probeer dan de versie van de dependency te vinden die wel werkt, door uit te zoeken wanneer het prototype gemaakt is en welke versie toen de laatste versie was.' }), '\n', (0, a.jsx)(n.h3, { id: 'web-fonts-installeren', children: 'Web Fonts installeren' }), '\n', (0, a.jsxs)(n.p, { children: ['De meeste open source lettertypes kun je vinden via Fontsource. Bijvoorbeeld: ', (0, a.jsx)(n.a, { href: 'https://fonts.google.com/specimen/Roboto', children: 'Roboto van Google Fonts' }), ' kun je vervangen door ', (0, a.jsx)(n.a, { href: 'https://fontsource.org/fonts/roboto/install', children: 'de npm package voor Roboto van Fontsource' }), '.'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-shell', children: 'pnpm add @fontsource-variable/roboto\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'css-en-web-fonts-migreren', children: 'CSS en Web Fonts migreren' }), '\n', (0, a.jsxs)(n.p, { children: ['De CSS en Web Fonts worden meestal vanaf de CDN ingeladen met een ', (0, a.jsx)(n.code, { children: '<link>' }), ' element.'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<link rel="stylesheet" href="https://unpkg.com/@fontsource/roboto/index.css" />\n<link rel="stylesheet" href="https://unpkg.com/@nl-design-system-candidate/button-css@1.1.0/dist/button.css" />\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Bij Vite wordt de CSS ingeladen vanuit JavaScript in plaats van via HTML:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-html', children: '<script>\n  import "@fontsource/roboto/index.css";\n  import "@nl-design-system-candidate/button-css/button.css";\n<\/script>\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'javascript-migreren', children: 'JavaScript migreren' }), '\n', (0, a.jsxs)(n.p, { children: ['Uit bestaande imports in code moeten de URL van de CDN en het versienummer verwijderd worden. Het versienummer is al vastgelegd door ', (0, a.jsx)(n.code, { children: 'pnpm add' }), '.'] }), '\n', (0, a.jsx)(n.p, { children: 'Bijvoorbeeld, deze code die een CDN gebruikt:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-js', children: 'import { Button } from "https://unpkg.com/@nl-design-system-candidate/button-react@1.1.0";\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'De aangepaste code zonder CDN en versienummer:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-js', children: 'import { Button } from "@nl-design-system-candidate/button-react";\n' }) })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(p, { ...e }) }) : p(e);
   }
  },
 },
]);
