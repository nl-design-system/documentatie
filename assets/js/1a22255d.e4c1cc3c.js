'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [90813],
 {
  10175(e, n, i) {
   (i.r(n), i.d(n, { assets: () => s, contentTitle: () => l, default: () => k, frontMatter: () => d, metadata: () => t, toc: () => c }));
   const t = JSON.parse('{"id":"project/kwaliteitsaanpak/code-review","title":"Code reviews","description":"Dit is hoe we de code reviews doen","source":"@site/docs/project/kwaliteitsaanpak/code-review.mdx","sourceDirName":"project/kwaliteitsaanpak","slug":"/kwaliteitsaanpak/code-review/","permalink":"/kwaliteitsaanpak/code-review/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kwaliteitsaanpak/code-review.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Code reviews","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Code reviews","pagination_label":"Code reviews","sidebar_position":11,"description":"Dit is hoe we de code reviews doen","slug":"/kwaliteitsaanpak/code-review/","keywords":["pr review","review"]},"sidebar":"project","previous":{"title":"Versiebeheer","permalink":"/project/kwaliteitsaanpak/versiebeheer"},"next":{"title":"Internationalisatie en localisatie","permalink":"/project/kwaliteitsaanpak/i18n"}}');
   var o = i(86070),
    a = i(18439),
    r = i(46447);
   const d = { title: 'Code reviews', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Code reviews', pagination_label: 'Code reviews', sidebar_position: 11, description: 'Dit is hoe we de code reviews doen', slug: '/kwaliteitsaanpak/code-review/', keywords: ['pr review', 'review'] },
    l = 'Code reviews',
    s = {},
    c = [
     { value: 'Belangrijke perspectieven', id: 'belangrijke-perspectieven', level: 2 },
     { value: 'Aandachtspunten', id: 'aandachtspunten', level: 2 },
     { value: 'Volledigheid', id: 'volledigheid', level: 3 },
     { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 3 },
     { value: 'Begrijpelijkheid', id: 'begrijpelijkheid', level: 3 },
     { value: 'Veiligheid', id: 'veiligheid', level: 3 },
     { value: 'Etiquette', id: 'etiquette', level: 2 },
     { value: 'Draft Pull Request', id: 'draft-pull-request', level: 3 },
     { value: 'Leer van feedback', id: 'leer-van-feedback', level: 3 },
     { value: 'Verplichte reviews', id: 'verplichte-reviews', level: 2 },
     { value: 'Backlog voor doorontwikkeling', id: 'backlog-voor-doorontwikkeling', level: 2 },
    ];
   function v(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, a.R)(), ...e.components };
    return (0, o.jsxs)(o.Fragment, { children: ['\n', (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'code-reviews', children: 'Code reviews' }) }), '\n', (0, o.jsx)(r.fz, { lead: !0, children: (0, o.jsx)(n.p, { children: 'Werk samen met anderen om jouw wijzigingen te controleren, en gebruik de feedback om het afgesproken kwaliteitsniveau\nte bereiken.' }) }), '\n', (0, o.jsx)(n.h2, { id: 'belangrijke-perspectieven', children: 'Belangrijke perspectieven' }), '\n', (0, o.jsx)(n.p, { children: 'Gebruik andere perspectieven om de begrijpelijkheid, duurzaamheid en kwaliteit te verbeteren.' }), '\n', (0, o.jsx)(n.p, { children: 'Wie heeft de meest relevante ervaring voor een code review? Wie kan het best beoordelen of de code past bij toekomstige ontwikkelingen? Wie kan beoordelen of de wijziging volledig is?' }), '\n', (0, o.jsx)(n.p, { children: 'Besteed voldoende tijd en aandacht aan code reviews, wanneer je de aanpak voor toekomstige ontwikkelingen. Komen er in de toekomst nog veel meer van dit soort wijzigingen? Dan is het een goed moment om een aandachtige review te doen, en om consensus te bereiken over de aanpak. Hiermee voorkom je veel rework achteraf.' }), '\n', (0, o.jsx)(n.h2, { id: 'aandachtspunten', children: 'Aandachtspunten' }), '\n', (0, o.jsx)(n.h3, { id: 'volledigheid', children: 'Volledigheid' }), '\n', (0, o.jsx)(n.p, { children: 'De inhoud van de wijziging kan er goed uit zien, maar de moeilijke taak is vaak om te beoordelen: is de wijziging volledig?' }), '\n', (0, o.jsx)(n.p, { children: 'Maak het makkelijk voor anderen om de volledigheid te beoordelen, door de Pull Request te koppelen aan de Issue met acceptatiecriteria.' }), '\n', (0, o.jsx)(n.h3, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, o.jsx)(n.p, { children: 'Wijzigigen in dependencies, design, functionaliteit en content kunnen allemaal effect hebben op toegankelijkheid. Een groot gedeelte van toegankelijkheid kan nog niet automatisch getest worden.' }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik ervaring met digitale toegankelijkheid om te weten wat de impact is en te bepalen welke tests gedaan moeten om de toegankelijkheid te controleren. Toegankelijkheid testen tijdens code reviews is extra belangrijk wanneer door ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/continuous-delivery/', children: 'continuous delivery' }), ' en ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/continuous-deployment/', children: 'continuous deployment' }), ' de nieuwe release snel bij eindgebruikers komen.'] }), '\n', (0, o.jsx)(n.h3, { id: 'begrijpelijkheid', children: 'Begrijpelijkheid' }), '\n', (0, o.jsx)(n.p, { children: 'Maak een inschatting of de code ook in de toekomst duidelijk genoeg zal zijn voor doorontwikkeling.' }), '\n', (0, o.jsx)(n.p, { children: 'Samenwerken aan code reviews geeft vaak inspiratie voor het toevoegen van effectieve documentatie en code comments, doordat uit vragen en onbegrip blijkt wat niet voldoende duidelijk is voor reviewers.' }), '\n', (0, o.jsx)(n.p, { children: 'Gebruik de feedback uit samenwerking voor vebeteren van de begrijpelijkheid. Bijvoorbeeld:' }), '\n', (0, o.jsxs)(n.ul, { children: ['\n', (0, o.jsx)(n.li, { children: 'Voeg documentatie en code comments toe op de plekken waar het een verschil maakt.' }), '\n', (0, o.jsx)(n.li, { children: 'Maak code minder complex zodat meer mensen de code kunnen onderhouden.' }), '\n', (0, o.jsx)(n.li, { children: 'Gebruik een aanpak die consistent is met de rest van de codebase.' }), '\n'] }), '\n', (0, o.jsx)(n.h3, { id: 'veiligheid', children: 'Veiligheid' }), '\n', (0, o.jsxs)(n.p, { children: ['Let op: wijzigingen aan dependencies kunnen kwetsbaarheden toevoegen aan je repository, controleer die wijzigingen extra goed. Lees meer bij ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/supply-chain/', children: 'software supply chain' }), ' over het beheren van dependencies.'] }), '\n', (0, o.jsx)(n.p, { children: 'Kies bij voorkeur iemand met relevante ervaring als verantwoordelijke voor het reviewen van dependencies.' }), '\n', (0, o.jsx)(n.h2, { id: 'etiquette', children: 'Etiquette' }), '\n', (0, o.jsxs)(n.p, { children: ['Gebruik de ', (0, o.jsx)(n.a, { href: './code-of-conduct.mdx', children: 'Code of Conduct' }), ' voor respectvolle communicatie bij het samenwerken aan code reviews.'] }), '\n', (0, o.jsx)(n.h3, { id: 'draft-pull-request', children: 'Draft Pull Request' }), '\n', (0, o.jsx)(n.p, { children: 'Maak een Draft Pull Request om anderen te laten zien in welke code je wijzigingen wilt doen, om code reviews in een vroeg stadium mogelijk te maken.' }), '\n', (0, o.jsx)(n.p, { children: 'Wanneer jij zelf vind dat de branch klaar is om te mergen, en je bent klaar met de beschrijving van de Pull Request, dan maak een Pull Request zonder "draft" status. Ga op deze manier effectief en respectvol om met de tijd en aandacht van anderen.' }), '\n', (0, o.jsx)(n.h3, { id: 'leer-van-feedback', children: 'Leer van feedback' }), '\n', (0, o.jsx)(n.p, { children: 'Controleer of feedback ook van toepassing is op andere delen van je wijziging, zodat reviewers niet bij elk detail een comment hoeven te plaatsen.' }), '\n', (0, o.jsx)(n.h2, { id: 'verplichte-reviews', children: 'Verplichte reviews' }), '\n', (0, o.jsx)(n.p, { children: 'Maak minimaal 1 review verplicht.' }), '\n', (0, o.jsxs)(n.p, { children: ['Maak iemand verantwoordelijk voor het controleren van wijzigingen aan risicovolle bestanden, en stel een review van hun verplicht via ', (0, o.jsx)(n.code, { children: 'CODEOWNERS.md' }), '. Bijvoorbeeld: stel voor het wijzigen van dependencies een code owner in voor lockfiles zoals ', (0, o.jsx)(n.code, { children: 'package-lock.json' }), ', ', (0, o.jsx)(n.code, { children: 'pnpm-lock.yaml' }), ' en ', (0, o.jsx)(n.code, { children: 'yarn.lock' }), '.'] }), '\n', (0, o.jsx)(n.h2, { id: 'backlog-voor-doorontwikkeling', children: 'Backlog voor doorontwikkeling' }), '\n', (0, o.jsxs)(n.p, { children: ['Leg plannen voor verbetering vast in de ', (0, o.jsx)(n.a, { href: '/project/kwaliteitsaanpak/product-backlog/', children: 'product backlog' }), ', wanneer je bepaalde feedback uit een code review direct op een later moment wil doorvoeren. Bijvoorbeeld voor het verminderen van technical debt door toevoegen van testautomatisering, het doen van refactorings of het oplossen van bugs.'] })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, a.R)(), ...e.components };
    return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(v, { ...e }) }) : v(e);
   }
  },
  18439(e, n, i) {
   i.d(n, { R: () => r, x: () => d });
   var t = i(30758);
   const o = {},
    a = t.createContext(o);
   function r(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), t.createElement(a.Provider, { value: n }, e.children));
   }
  },
 },
]);
