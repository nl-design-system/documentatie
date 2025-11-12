'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [76130],
 {
  63987: (e, s, n) => {
   n.r(s), n.d(s, { assets: () => l, contentTitle: () => a, default: () => g, frontMatter: () => r, metadata: () => d, toc: () => c });
   var i = n(52676),
    t = n(40139),
    o = n(37943);
   const r = { title: 'Design Systems Week', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'About Design Systems Week', pagination_label: 'About Design Systems Week', sidebar_position: 1, slug: '/events/design-systems-week/en', image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2025.png' },
    a = 'Design Systems Week',
    d = { id: 'community/events/design-systems-week/en/index', title: 'Design Systems Week', description: 'Design Systems Week is an online event organized by NL Design System. During this week, several short sessions are', source: '@site/docs/community/events/design-systems-week/en/index.mdx', sourceDirName: 'community/events/design-systems-week/en', slug: '/events/design-systems-week/en', permalink: '/events/design-systems-week/en', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/index.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Design Systems Week', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'About Design Systems Week', pagination_label: 'About Design Systems Week', sidebar_position: 1, slug: '/events/design-systems-week/en', image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2025.png' }, sidebar: 'community', previous: { title: 'Over Design Systems Week', permalink: '/events/design-systems-week' }, next: { title: 'About Design Systems Week', permalink: '/events/design-systems-week/en' } },
    l = {},
    c = [
     { value: 'Previous editions', id: 'previous-editions', level: 2 },
     { value: 'Organisation', id: 'organisation', level: 2 },
     { value: 'Accessibility', id: 'accessibility', level: 2 },
     { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
    ];
   function m(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.h1, { id: 'design-systems-week', children: 'Design Systems Week' }), '\n', (0, i.jsx)(o.nv, { lead: !0, children: (0, i.jsx)(s.p, { children: 'Design Systems Week is an online event organized by NL Design System. During this week, several short sessions are\noffered in which various (international) organizations share how and why they use design systems. The goal is to bring\ntogether designers, developers, and other professionals working on digital government services to exchange experiences\nand best practices.' }) }), '\n', (0, i.jsx)(s.hr, {}), '\n', (0, i.jsx)(s.h2, { id: 'previous-editions', children: 'Previous editions' }), '\n', (0, i.jsx)(s.p, { children: 'Check out the videos from previous years.' }), '\n', (0, i.jsxs)(s.ul, { children: ['\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2025/en/program/', children: 'Design Systems Week 2025' }) }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2024/en/program/', children: 'Design Systems Week 2024' }) }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2023/en/program/', children: 'Design Systems Week 2023' }) }), '\n'] }), '\n', (0, i.jsx)(s.h2, { id: 'organisation', children: 'Organisation' }), '\n', (0, i.jsx)(s.p, { children: 'Design Systems Week is organised by the NL Design System core team.' }), '\n', (0, i.jsx)(s.p, { children: 'At NL Design System, web professionals from across the government collaborate on building blocks for websites and applications, like code, design and guidelines. The project is managed by ICTU for the Dutch Ministry of the Interior and Kingdom Relations.' }), '\n', (0, i.jsx)(s.h2, { id: 'accessibility', children: 'Accessibility' }), '\n', (0, i.jsxs)(s.p, { children: ['We do our best to organise Design Systems Week accessibly. If you have specific questions or requests, please do reach to the NL Design System core team at i', (0, i.jsx)(s.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] }), '\n', (0, i.jsx)(s.h2, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, i.jsxs)(s.p, { children: ['All participants of Design Systems Week are expected to abide by our ', (0, i.jsx)(s.a, { href: 'https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.md', children: 'NL Design System Code of Conduct' }), " van toepassing. By signing up for one or more sessions you've agreed to these terms."] })] });
   }
   function g(e = {}) {
    const { wrapper: s } = { ...(0, t.a)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(m, { ...e }) }) : m(e);
   }
  },
  40139: (e, s, n) => {
   n.d(s, { Z: () => a, a: () => r });
   var i = n(75271);
   const t = {},
    o = i.createContext(t);
   function r(e) {
    const s = i.useContext(o);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function a(e) {
    let s;
    return (s = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : r(e.components)), i.createElement(o.Provider, { value: s }, e.children);
   }
  },
 },
]);
