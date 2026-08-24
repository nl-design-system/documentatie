/*! For license information please see 71fb168a.d3721fde.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [31399],
 {
  18439(e, s, n) {
   n.d(s, { R: () => r, x: () => a });
   var t = n(30758);
   const i = {},
    o = t.createContext(i);
   function r(e) {
    const s = t.useContext(o);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(s) : { ...s, ...e };
     },
     [s, e],
    );
   }
   function a(e) {
    let s;
    return ((s = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), t.createElement(o.Provider, { value: s }, e.children));
   }
  },
  18652(e, s, n) {
   n.d(s, { A: () => o });
   var t = n(30758),
    i = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const o = (e, s, n, o) => {
    const r = (0, t.forwardRef)(({ color: n = 'currentColor', size: r = 24, stroke: a = 2, title: l, className: d, children: c, ...g }, m) => (0, t.createElement)('svg', { ref: m, ...i[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${s}`, d].join(' '), ...('filled' === e ? { fill: n } : { strokeWidth: a, stroke: n }), ...g }, [l && (0, t.createElement)('title', { key: 'svg-title' }, l), ...o.map(([e, s]) => (0, t.createElement)(e, s)), ...(Array.isArray(c) ? c : [c])]));
    return ((r.displayName = `${n}`), r);
   };
  },
  18945(e, s, n) {
   (n.r(s), n.d(s, { assets: () => g, contentTitle: () => c, default: () => y, frontMatter: () => d, isUpComingOrHappening: () => m, metadata: () => t, toc: () => h }));
   const t = JSON.parse('{"id":"community/events/design-systems-week/en/index","title":"Design Systems Week - English","description":"Design Systems Week is an online event organized by NL Design System with several short sessions about the ins and outs of design systems","source":"@site/docs/community/events/design-systems-week/en/index.mdx","sourceDirName":"community/events/design-systems-week/en","slug":"/events/design-systems-week/en","permalink":"/events/design-systems-week/en","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/events/design-systems-week/en/index.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Design Systems Week - English","description":"Design Systems Week is an online event organized by NL Design System with several short sessions about the ins and outs of design systems","lang":"en","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"About Design Systems Week","pagination_label":"About Design Systems Week","sidebar_position":1,"navigation_order":1,"slug":"/events/design-systems-week/en","image":"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png","image_alt":"NL Design System Design Systems Week 2026 26-29 October, online"},"sidebar":"community","previous":{"title":"Tijdschema","permalink":"/events/design-systems-week-2026/tijdschema/"},"next":{"title":"About Design Systems Week","permalink":"/events/design-systems-week/en"}}');
   var i = n(86070),
    o = n(18439),
    r = n(64249),
    a = n(46447),
    l = n(51130);
   const d = { title: 'Design Systems Week - English', description: 'Design Systems Week is an online event organized by NL Design System with several short sessions about the ins and outs of design systems', lang: 'en', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'About Design Systems Week', pagination_label: 'About Design Systems Week', sidebar_position: 1, navigation_order: 1, slug: '/events/design-systems-week/en', image: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/community-design-systems-week-en-2026.png', image_alt: 'NL Design System Design Systems Week 2026 26-29 October, online' },
    c = 'Design Systems Week',
    g = {},
    m = !!l.p$ || !!l.dF,
    h = [
     { value: 'Previous editions', id: 'previous-editions', level: 2 },
     { value: 'Organisation', id: 'organisation', level: 2 },
     { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
     { value: 'Accessibility', id: 'accessibility', level: 2 },
    ];
   function u(e) {
    const s = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', hr: 'hr', li: 'li', p: 'p', ul: 'ul', ...(0, o.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.header, { children: (0, i.jsx)(s.h1, { id: 'design-systems-week', children: 'Design Systems Week' }) }), '\n', !!m && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)(a.fz, { lead: !0, children: ['NL Design System is organising the Design Systems Week for the ', l.en.Z, ' time. It will feature a number of short talks about the how and why of design systems. All online. From ', l.en.M, ', we will cover subjects like managing design systems, integrating accessibility, user research and code.'] }), (0, i.jsxs)(a.e2, { children: [(0, i.jsxs)(a.vx, { href: '/events/design-systems-week/en/sign-up', appearance: 'primary-action-button', children: ['Sign up', (0, i.jsx)(r.A, {})] }), (0, i.jsxs)(a.vx, { href: `/events/design-systems-week-${l.Ok}/en/program`, appearance: 'secondary-action-button', children: ['View the Program', (0, i.jsx)(r.A, {})] })] })] }), '\n', !m && (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(a.fz, { lead: !0, children: 'Design Systems Week is an online event organized by NL Design System. During this week, several short sessions are offered in which various (international) organizations share how and why they use design systems. The goal is to bring together designers, developers, and other professionals working on digital government services to exchange experiences and best practices.' }) }), '\n', (0, i.jsx)(s.hr, {}), '\n', (0, i.jsx)(s.h2, { id: 'previous-editions', children: 'Previous editions' }), '\n', !!m && `This is the ${l.en.Z} year that NL Design System is organizing Design Systems Week. Can't wait? Then check out the videos from previous years!`, '\n', !m && 'Check out the videos from previous years.', '\n', (0, i.jsxs)(s.ul, { children: ['\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2025/en/program/', children: 'Design Systems Week 2025' }) }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2024/en/program/', children: 'Design Systems Week 2024' }) }), '\n', (0, i.jsx)(s.li, { children: (0, i.jsx)(s.a, { href: '/events/design-systems-week-2023/en/program/', children: 'Design Systems Week 2023' }) }), '\n'] }), '\n', (0, i.jsx)(s.h2, { id: 'organisation', children: 'Organisation' }), '\n', (0, i.jsx)(s.p, { children: 'Design Systems Week is organised by the NL Design System core team.' }), '\n', (0, i.jsx)(s.p, { children: 'At NL Design System, web professionals from across the government collaborate on building blocks for websites and applications, like code, design and guidelines. The project is managed by ICTU for the Dutch Ministry of the Interior and Kingdom Relations.' }), '\n', (0, i.jsx)(s.h2, { id: 'code-of-conduct', children: 'Code of Conduct' }), '\n', (0, i.jsxs)(s.p, { children: ['All participants of Design Systems Week are expected to abide by our ', (0, i.jsx)(s.a, { href: 'https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.md', children: 'NL Design System Code of Conduct' }), " van toepassing. By signing up for one or more sessions you've agreed to these terms."] }), '\n', (0, i.jsx)(s.h2, { id: 'accessibility', children: 'Accessibility' }), '\n', (0, i.jsxs)(s.p, { children: ['We do our best to organise Design Systems Week accessibly. If you have specific questions or requests, please do reach to the NL Design System core team at ', (0, i.jsx)(s.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' }), '.'] })] });
   }
   function y(e = {}) {
    const { wrapper: s } = { ...(0, o.R)(), ...e.components };
    return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
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
