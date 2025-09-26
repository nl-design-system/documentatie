/*! For license information please see 0b07a63f.d86c7895.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [41627],
 {
  76294: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => r, default: () => p, frontMatter: () => o, metadata: () => c, toc: () => d });
   var i = t(52676),
    s = t(40139),
    m = t(86135),
    a = t(68257);
   const o = { title: 'Bedankt voor je aanmelding \xb7 MijnServices Community \xb7 Community Sprints', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Bedankt voor je aanmelding', pagination_label: 'Bedankt voor je aanmelding', slug: '/community/community-sprints/mijn-services-community/aanmelden/bedankt', unlisted: !0 },
    r = 'Bedankt!',
    c = { id: 'community/community-sprints/mijn-services-community/aanmelden-success', title: 'Bedankt voor je aanmelding \xb7 MijnServices Community \xb7 Community Sprints', description: 'Welkom bij de MijnServices Community, fijn dat je erbij bent!', source: '@site/docs/community/community-sprints/mijn-services-community/aanmelden-success.mdx', sourceDirName: 'community/community-sprints/mijn-services-community', slug: '/community/community-sprints/mijn-services-community/aanmelden/bedankt', permalink: '/community/community-sprints/mijn-services-community/aanmelden/bedankt', draft: !1, unlisted: !0, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/community/community-sprints/mijn-services-community/aanmelden-success.mdx', tags: [], version: 'current', frontMatter: { title: 'Bedankt voor je aanmelding \xb7 MijnServices Community \xb7 Community Sprints', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Bedankt voor je aanmelding', pagination_label: 'Bedankt voor je aanmelding', slug: '/community/community-sprints/mijn-services-community/aanmelden/bedankt', unlisted: !0 } },
    l = {},
    d = [];
   function u(e) {
    const n = { a: 'a', h1: 'h1', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h1, { id: 'bedankt', children: 'Bedankt!' }), '\n', (0, i.jsx)(n.p, { children: 'Welkom bij de MijnServices Community, fijn dat je erbij bent!' }), '\n', (0, i.jsx)(n.p, { children: 'Handige links:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://praatmee.codefor.nl', children: 'Word lid van het #nl-design-system-developers Slack kanaal' }), ' op CodeForNL, daar kun je meepraten, vragen stellen of beantwoorden of gesprekken volgen.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/mijn-services', children: 'Bekijk de code op GitHub' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Bekijk onze ', (0, i.jsx)(n.a, { href: 'https://www.youtube.com/playlist?list=PLnAxFMscDU3F1VYQxlJLpmV-Z-FQ6hCU_', children: "video's in de MijnServices Community Sprint playlist op YouTube" }), ' en abonneer je op ons kanaal.'] }), '\n', (0, i.jsxs)(n.li, { children: ['Vind alle relevante linkjes en informatie op de ', (0, i.jsx)(n.a, { href: '/community/community-sprints/mijn-services-community/', children: 'MijnServices Community pagina' }), '.'] }), '\n'] }), '\n', (0, i.jsx)(n.p, { children: 'Elke twee weken heeft de MijnServices Community een afstemming in het #nl-design-system-developers kanaal om aan de NL Design System adoptie binnen mijn omgevingen te werken.' }), '\n', (0, i.jsxs)(a.Z, { appearance: 'secondary-action', href: 'https://nldesignsystem.nl/mijn-services-community/mijn-services-community-afstemming.ics', download: 'https://nldesignsystem.nl/mijn-services-community/mijn-services-community-afstemming.ics', 'aria-label': 'iCal bestand voor de MijnServices Community Afstemming (download)', children: [(0, i.jsx)(m.Z, {}), ' Download het kalenderbestand'] })] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  68257: (e, n, t) => {
   t.d(n, { Z: () => a });
   var i = t(44679),
    s = t(4814),
    m = t(52676);
   const a = (e) => {
    let { appearance: n, ...t } = e;
    return (0, m.jsx)(i.Z, { className: (0, s.W)('utrecht-button-link', `utrecht-button-link--${n}`), ...t });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => a });
   var i = t(75271);
   const s = {},
    m = i.createContext(s);
   function a(e) {
    const n = i.useContext(m);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), i.createElement(m.Provider, { value: n }, e.children);
   }
  },
  86135: (e, n, t) => {
   t.d(n, { Z: () => i });
   var i = (0, t(72315).Z)('outline', 'calendar-event', 'IconCalendarEvent', [
    ['path', { d: 'M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z', key: 'svg-0' }],
    ['path', { d: 'M16 3l0 4', key: 'svg-1' }],
    ['path', { d: 'M8 3l0 4', key: 'svg-2' }],
    ['path', { d: 'M4 11l16 0', key: 'svg-3' }],
    ['path', { d: 'M8 15h2v2h-2z', key: 'svg-4' }],
   ]);
  },
 },
]);
