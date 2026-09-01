/*! For license information please see ab29330a.bd6b538d.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [85130],
 {
  18439(e, s, n) {
   n.d(s, { R: () => o, x: () => a });
   var t = n(30758);
   const i = {},
    r = t.createContext(i);
   function o(e) {
    const s = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function a(e) {
    let s;
    return ((s = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : o(e.components)), t.createElement(r.Provider, { value: s }, e.children));
   }
  },
  18652(e, s, n) {
   n.d(s, { A: () => r });
   var t = n(30758),
    i = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const r = (e, s, n, r) => {
    const o = (0, t.forwardRef)(({ color: n = 'currentColor', size: o = 24, stroke: a = 2, title: d, className: l, children: m, ...g }, c) => (0, t.createElement)('svg', { ref: c, ...i[e], width: o, height: o, className: ['tabler-icon', `tabler-icon-${s}`, l].join(' '), ...('filled' === e ? { fill: n } : { strokeWidth: a, stroke: n }), ...g }, [d && (0, t.createElement)('title', { key: 'svg-title' }, d), ...r.map(([e, s]) => (0, t.createElement)(e, s)), ...(Array.isArray(m) ? m : [m])]));
    return ((o.displayName = `${n}`), o);
   };
  },
  36625(e, s, n) {
   (n.r(s), n.d(s, { assets: () => g, contentTitle: () => m, default: () => v, frontMatter: () => l, isUpComingOrHappening: () => c, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/index","title":"Design Systems Week","description":"Een online evenement georganiseerd door NL Design System met verschillende korte sessies over alles rondom design systems","source":"@site/docs/community/events/design-systems-week/index.mdx","sourceDirName":"community/events/design-systems-week","slug":"/events/design-systems-week","permalink":"/events/design-systems-week","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/index.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Design Systems Week","description":"Een online evenement georganiseerd door NL Design System met verschillende korte sessies over alles rondom design systems","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Over Design Systems Week","pagination_label":"Over Design Systems Week","sidebar_position":1,"navigation_order":1,"slug":"/events/design-systems-week","translations":{"en":"/events/design-systems-week/en/"},"image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 Oktober, online"},"sidebar":"community","previous":{"title":"Estafettemodeldag","permalink":"/community/events/estafettemodeldag"},"next":{"title":"Over Design Systems Week","permalink":"/events/design-systems-week"}}');
   var i = n(86070),
    r = n(18439),
    o = n(64249),
    a = n(46447),
    d = n(51130);
   const l = { title: 'Design Systems Week', description: 'Een online evenement georganiseerd door NL Design System met verschillende korte sessies over alles rondom design systems', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Over Design Systems Week', pagination_label: 'Over Design Systems Week', sidebar_position: 1, navigation_order: 1, slug: '/events/design-systems-week', translations: { en: '/events/design-systems-week/en/' }, image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 Oktober, online' },
    m = 'Design Systems Week',
    g = {},
    c = !!d.p$ || !!d.dF,
    h = [
     { value: 'Eerdere edities', id: 'eerdere-edities', level: 2 },
     { value: 'Organisatie', id: 'organisatie', level: 2 },
     { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
     { value: 'Toegankelijkheid', id: 'toegankelijkheid', level: 2 },
    ];
   function k(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.header, { children: (0, i.jsx)(s.h1, { id: 'design-systems-week', children: 'Design Systems Week' }) }), '\n', !!c && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(a.fz, { lead: !0, children: ['NL Design System organiseert in ', d.Ok, ' voor de ', d.nl.Z, ' keer de Design Systems Week. Van', ' ', (0, i.jsx)('strong', { children: d.nl.M }), ' zijn er dagelijks meerdere korte sessies van diverse organisaties online te volgen over het ', (0, i.jsx)('strong', { children: 'hoe en waarom van design systems' }), '.'] }), (0, i.jsxs)(a.e2, { children: [(0, i.jsxs)(a.vx, { href: '/events/design-systems-week/aanmelden', appearance: 'primary-action-button', children: ['Meld je aan', (0, i.jsx)(o.A, {})] }), (0, i.jsxs)(a.vx, { href: `/events/design-systems-week-${d.Ok}/programma`, appearance: 'secondary-action-button', children: ['Bekijk het programma', (0, i.jsx)(o.A, {})] })] })] }), '\n', !c && (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(a.fz, { lead: !0, children: 'Design Systems Week is een online evenement georganiseerd door NL Design System. Tijdens deze week worden meerdere korte sessies aangeboden waarin diverse (internationale) organisaties delen hoe en waarom ze design systems inzetten. Het doel is om designers, developers of andere professionals die werken aan digitale diensten voor de overheid samen te brengen om ervaringen en best practices uit te wisselen.' }) }), '\n', (0, i.jsx)(s.hr, {}), '\n', (0, i.jsx)(s.h2, { id: 'eerdere-edities', children: 'Eerdere edities' }), '\n', !!c && `Dit is het ${d.nl.Z} jaar dat NL Design System de Design Systems Week organiseert. Kun je niet wachten? Kijk dan de video's van voorgaande jaren terug!`, '\n', !c && "Kijk de video's van afgelopen jaren terug.", '\n', (0, i.jsxs)(s.ul, { children: ['\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2025/programma/', children: 'Design Systems Week 2025' }) }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2024/programma/', children: 'Design Systems Week 2024' }) }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2023/programma/', children: 'Design Systems Week 2023' }) }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2022/', children: 'Design Systems Week 2022' }) }), '\n'] }), '\n', (0, i.jsx)(s.h2, { id: 'organisatie', children: 'Organisatie' }), '\n', (0, i.jsx)(s.p, { children: 'Design Systems Week wordt georganiseerd door het kernteam van NL Design System.' }), '\n', (0, i.jsxs)(s.p, { children: ['NL Design System is een project dat specialisten van verschillende overheidsorganisaties laat samenwerken aan concrete oplossingen voor websites en applicaties. Denk bijvoorbeeld aan code, ontwerp en richtlijnen. Het project wordt uitgevoerd door ICTU, in opdracht van het Ministerie van Binnenlandse Zaken en Koninkrijksrelaties. Zie ook: meer ', (0, i.jsx)(s.a, { href: '/project/over-nl-design-system/', children: 'over NL Design System' }), ' en ', (0, i.jsx)(s.a, { href: '/project/faq/', children: 'Veelgestelde vragen' }), '.'] }), '\n', (0, i.jsx)(s.h2, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, i.jsxs)(s.p, { children: ['Op Design Systems Week is de ', (0, i.jsx)(s.a, { href: 'https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.nl.md', children: 'NL Design System Code of Conduct' }), ' van toepassing. Je gaat daarmee akkoord als je je aanmeldt of spreekt.'] }), '\n', (0, i.jsx)(s.h2, { id: 'toegankelijkheid', children: 'Toegankelijkheid' }), '\n', (0, i.jsxs)(s.p, { children: ['We doen ons best Design Systems Week zo toegankelijk als mogelijk te organiseren. Indien je specifieke toegankelijkheidsvragen- of behoeften hebt, schroom niet te mailen met het NL Design System kernteam op ', (0, i.jsx)(s.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function v(e = {}) {
    const { wrapper: s } = { ...(0, r.R)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k(e);
   }
  },
  51130(e) {
   e.exports = JSON.parse('{"Ok":"2026","p$":true,"dF":false,"MX":false,"nl":{"M":"26 tot en met 29 oktober","Z":"5e"},"en":{"M":"October 26 to October 29","Z":"5th"}}');
  },
  64249(e, s, n) {
   n.d(s, { A: () => t });
   const t = (0, n(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
 },
]);
