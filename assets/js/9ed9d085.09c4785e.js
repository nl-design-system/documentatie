'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [65429],
 {
  14889: (e, n, i) => {
   i.d(n, { AC: () => d, Fu: () => o, Wu: () => a, Zp: () => m });
   var t = i(68873),
    r = i(13526),
    s = i(86070);
   const o = ({ background: e, children: n, className: i, ...t }) => (0, s.jsx)('div', { className: (0, r.A)('card__illustration', e && `card__illustration--${e}`, i), ...t, children: n }),
    a = (e) => (0, s.jsx)('div', { className: 'card__content', ...e }),
    m = ({ href: e, appearance: n, className: i, component: o = 'div', background: a, children: m }) => {
     const d = (e) => ('article' === o ? (0, s.jsx)('article', { ...e }) : 'section' === o ? (0, s.jsx)('section', { ...e }) : (0, s.jsx)('div', { ...e })),
      c = (0, s.jsx)(d, { className: (0, r.A)('cardgroup__card', a && 'cardgroup__card--light-purple', `cardgroup__card--${n}`, i), children: m });
     return e ? (0, s.jsx)(t.N_, { href: e, boxContent: !0, className: 'cardgroup__link', children: c }) : c;
    },
    d = ({ appearance: e = 'medium', children: n, className: i }) => (0, s.jsx)('div', { className: (0, r.A)('cardgroup', `cardgroup--${e}`, i), children: n });
  },
  75344: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => l, contentTitle: () => c, default: () => h, frontMatter: () => d, metadata: () => t, toc: () => u });
   const t = JSON.parse('{"id":"community/community-sprints/index","title":"Over Community Sprints \xb7 Community","description":"Uitleg over de NL Design System Community Sprints","source":"@site/docs/community/community-sprints/index.mdx","sourceDirName":"community/community-sprints","slug":"/community/community-sprints/","permalink":"/community/community-sprints/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Over Community Sprints \xb7 Community","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"Over Community Sprints","pagination_label":"Over Community Sprints","description":"Uitleg over de NL Design System Community Sprints","keywords":["nl design system","community sprints","rijkshuisstijl community","mijn services community","mijnservices community","overheidsbrede portalen community"]},"sidebar":"community","previous":{"title":"Wie doet mee?","permalink":"/community/wie-doet-mee"},"next":{"title":"Over Community Sprints","permalink":"/community/community-sprints/"}}');
   var r = i(86070),
    s = i(85248),
    o = i(68873),
    a = i(14889),
    m = i(92420);
   const d = { title: 'Over Community Sprints \xb7 Community', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Over Community Sprints', pagination_label: 'Over Community Sprints', description: 'Uitleg over de NL Design System Community Sprints', keywords: ['nl design system', 'community sprints', 'rijkshuisstijl community', 'mijn services community', 'mijnservices community', 'overheidsbrede portalen community'] },
    c = 'Over Community Sprints',
    l = {},
    u = [
     { value: 'Voordelen', id: 'voordelen', level: 2 },
     { value: 'Aanpak', id: 'aanpak', level: 2 },
     { value: 'Actieve Community Sprints', id: 'actieve-community-sprints', level: 2 },
    ];
   function p(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'over-community-sprints', children: 'Over Community Sprints' }) }), '\n', (0, r.jsx)(n.p, { children: 'In onze community werken veel organisaties mee aan het doorontwikkelen, valideren en toepassen van NL Design System. Op sommige onderwerpen zit daarbij veel overlap. Daarom faciliteert het kernteam vanaf 2024 zogenaamde \u2018Community Sprints\u2019 waar verschillende teams samen kunnen werken aan hetzelfde onderwerp.' }), '\n', (0, r.jsx)(n.h2, { id: 'voordelen', children: 'Voordelen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'We zorgen dat we zo min mogelijk dubbel werk doen.' }), '\n', (0, r.jsx)(n.li, { children: 'Het kernteam wordt niet overbelast met dezelfde vragen uit verschillende teams.' }), '\n', (0, r.jsx)(n.li, { children: 'Het is fijn om met een groter team van experts effectief samen te werken.' }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'aanpak', children: 'Aanpak' }), '\n', (0, r.jsxs)(n.p, { children: ['Een Community Sprint gaat over een bepaald onderwerp waar minimaal twee teams uit de community actief op werken. Zij hebben hun eigen sprint planning, maar stemmen deze met elkaar af om dubbel werk te voorkomen. Ze geven een demo in de ', (0, r.jsx)(n.a, { href: '/events/heartbeat/', children: 'heartbeat' }), ' waar ze kort delen wat ze hebben bereikt zodat ook de rest van de community op de hoogte blijft. Het kernteam faciliteert daarnaast af en toe een retrospective, sprint planning of een gefocuste Open Hour. Zo kunnen de teams steeds effectiever samenwerken en wordt het proces zo afgestemd dat meedoen aan een Community Sprint de eigen organisatiedoelen en sprintdoelen niet in de weg zit.'] }), '\n', (0, r.jsx)(n.p, { children: 'Een Community Sprint heeft altijd een onderwerp. Zodra de teams aan een ander onderwerp gaan werken waardoor er niet meer aan het minimaal aantal teams wordt voldaan, dan stoppen de Community Sprints voor dit onderwerp.' }), '\n', (0, r.jsx)(n.h2, { id: 'actieve-community-sprints', children: 'Actieve Community Sprints' }), '\n', (0, r.jsx)(n.p, { children: 'Lees meer over de actieve Community Sprints. Hieronder vind je links naar pagina\u2019s met informatie over het onderwerp van de sprint, het werk en de resultaten, voor wie het relevant is en hoe je kunt meedoen.' }), '\n', (0, r.jsxs)(a.AC, { children: [(0, r.jsx)(a.Zp, { component: 'section', appearance: 'medium', children: (0, r.jsxs)(a.Wu, { children: [(0, r.jsxs)('div', { children: [(0, r.jsx)(o._B, { children: 'Rijkshuisstijl Community' }), (0, r.jsx)(o.fz, { children: 'Binnen de Rijkshuisstijl Community werken we toe naar componenten in verschillende frameworks welke voldoen aan de Rijkshuisstijl. Deze componenten zijn huisstijl-onafhankelijk en kunnen eenvoudig worden gestyled volgens de verschillende Rijkshuisstijl-deelidentiteiten.' })] }), (0, r.jsx)(o.fz, { children: (0, r.jsx)(m.N, { to: '/community/community-sprints/rijkshuisstijl-community', children: 'Lees verder over de Rijkshuisstijl Community' }) })] }) }), (0, r.jsx)(a.Zp, { component: 'section', appearance: 'medium', children: (0, r.jsxs)(a.Wu, { children: [(0, r.jsxs)('div', { children: [(0, r.jsx)(o._B, { children: 'MijnServices Community' }), (0, r.jsx)(o.fz, { children: 'In deze Community Sprint ontwikkelen we aan een uitgebreide set van huisstijl-onafhankelijke templates voor Mijn Omgevingen en Formulieren die direct te gebruiken zijn voor websites en applicaties binnen de overheid.' })] }), (0, r.jsx)(o.fz, { children: (0, r.jsx)(m.N, { to: '/community/community-sprints/mijn-services-community', children: (0, r.jsx)(n.p, { children: 'Lees verder over de MijnServices Community' }) }) })] }) })] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => o, x: () => a });
   var t = i(30758);
   const r = {},
    s = t.createContext(r);
   function o(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
  92420: (e, n, i) => {
   i.d(n, { N: () => o });
   var t = i(71170),
    r = i(13526),
    s = i(86070);
   const o = ({ className: e, ...n }) => (0, s.jsx)(t.A, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
 },
]);
