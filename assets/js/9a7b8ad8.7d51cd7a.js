/*! For license information please see 9a7b8ad8.7d51cd7a.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67287],
 {
  18439(e, n, s) {
   s.d(n, { R: () => r, x: () => a });
   var t = s(30758);
   const i = {},
    l = t.createContext(i);
   function r(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : r(e.components)), t.createElement(l.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, s) {
   s.d(n, { A: () => l });
   var t = s(30758),
    i = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const l = (e, n, s, l) => {
    const r = (0, t.forwardRef)(({ color: s = 'currentColor', size: r = 24, stroke: a = 2, title: o, className: c, children: d, ...h }, m) => (0, t.createElement)('svg', { ref: m, ...i[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${n}`, c].join(' '), ...('filled' === e ? { fill: s } : { strokeWidth: a, stroke: s }), ...h }, [o && (0, t.createElement)('title', { key: 'svg-title' }, o), ...l.map(([e, n]) => (0, t.createElement)(e, n)), ...(Array.isArray(d) ? d : [d])]));
    return ((r.displayName = `${s}`), r);
   };
  },
  20698(e, n, s) {
   s.d(n, { v: () => r });
   var t = s(53538),
    i = s(13526),
    l = s(86070);
   const r = ({ appearance: e, ...n }) => (0, l.jsx)(t.F, { className: (0, i.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  53538(e, n, s) {
   s.d(n, { F: () => l, N: () => r });
   var t = s(13526),
    i = s(86070);
   const l = ({ children: e, ...n }) => {
     const { to: s, href: t, ...l } = n;
     let r = s || t;
     const a = new URL(r, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === a.origin ? ((a.pathname = a.pathname.endsWith('/') ? a.pathname : `${a.pathname}/`), (r = a.toString().replace('https://nldesignsystem.nl', ''))) : ((l.target = '_blank'), (l.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: r, ...l, children: e }));
    },
    r = ({ className: e, ...n }) => (0, i.jsx)(l, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  64249(e, n, s) {
   s.d(n, { A: () => t });
   const t = (0, s(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  80232(e, n, s) {
   (s.r(n), s.d(n, { assets: () => h, contentTitle: () => d, default: () => u, frontMatter: () => c, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"community/slack","title":"Slack","description":"Wij hebben chatkanelen in Slack, lees hier hoe je mee kan doen.","source":"@site/docs/community/slack.mdx","sourceDirName":"community","slug":"/slack/","permalink":"/slack/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/slack.mdx","tags":[],"version":"current","frontMatter":{"title":"Slack","slug":"/slack/","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Slack","pagination_label":"Slack","description":"Wij hebben chatkanelen in Slack, lees hier hoe je mee kan doen.","keywords":["chat","Code for NL","codefor.nl","global-design-system","huddle","nl design system","nl-design-system","nl-design-system-a11y","nl-design-system-content","nl-design-system-designers","nl-design-system-developers","rijkshuisstijl-community","Slack"]},"sidebar":"community","previous":{"title":"Belangenorganisaties","permalink":"/community/belangenorganisaties/aanmelden"}}');
   var i = s(86070),
    l = s(18439),
    r = s(20698),
    a = s(64249),
    o = s(29181);
   const c = { title: 'Slack', slug: '/slack/', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Slack', pagination_label: 'Slack', description: 'Wij hebben chatkanelen in Slack, lees hier hoe je mee kan doen.', keywords: ['chat', 'Code for NL', 'codefor.nl', 'global-design-system', 'huddle', 'nl design system', 'nl-design-system', 'nl-design-system-a11y', 'nl-design-system-content', 'nl-design-system-designers', 'nl-design-system-developers', 'rijkshuisstijl-community', 'Slack'] },
    d = 'Slack voor NL Design System',
    h = {},
    m = [
     { value: 'Chatkanalen', id: 'chatkanalen', level: 2 },
     { value: 'Huddle', id: 'huddle', level: 2 },
     { value: 'Bijeenkomsten in Slack', id: 'bijeenkomsten-in-slack', level: 2 },
     { value: 'Bedankt, Code for NL!', id: 'bedankt-code-for-nl', level: 2 },
    ];
   function k(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, l.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'slack-voor-nl-design-system', children: 'Slack voor NL Design System' }) }), '\n', (0, i.jsxs)(n.p, { children: ['NL Design System werkt met de ', (0, i.jsx)(n.a, { href: 'https://codefornl.slack.com/', children: 'Slack van de Code for NL community' }), '. Je kunt jezelf aanmelden via het formulier op ', (0, i.jsx)(n.a, { href: 'https://praatmee.codefor.nl', children: 'praatmee.codefor.nl' }), ', iedereen is welkom!'] }), '\n', (0, i.jsx)(o.e2, { children: (0, i.jsxs)(r.v, { href: 'https://praatmee.codefor.nl/', appearance: 'primary-action', children: ['Doe mee op Slack', (0, i.jsx)(a.A, {})] }) }), '\n', (0, i.jsx)(n.h2, { id: 'chatkanalen', children: 'Chatkanalen' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: (0, i.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C7KDQRXMZ', children: '#nl-design-system' }) }), ': kanaal voor algemene vragen, aankondingen, en voor oproepen aan de community tijdens het ', (0, i.jsx)(n.a, { href: '/handboek/estafettemodel/', children: 'Estafettemodel' }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: (0, i.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C07059B0VK7', children: '#nl-design-system-a11y' }) }), ': kanaal voor toegankelijkheidsspecialisten om onderling samen te werken aan ', (0, i.jsx)(n.a, { href: '/richtlijnen/', children: 'richtlijnen' }), ', acceptatiecriteria voor toegankelijkheid en ', (0, i.jsx)(n.a, { href: '/wcag/', children: "WCAG pagina's" }), '.'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: (0, i.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C01E0C94QG4', children: '#nl-design-system-content' }) }), ': kanaal om contentmakers te bereiken, en voor samenwerken aan de ', (0, i.jsx)(n.a, { href: '/richtlijnen/content/', children: 'richtlijnen voor content' }), '. Het is hier nog wat rustig, maar daar komt binnenkort misschien verandering in!'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: (0, i.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C01D78C2E4E', children: '#nl-design-system-designers' }) }), ': kanaal om designers te bereiken. Je kunt hier samenwerken, vragen stellen over design, UX, Figma, enzovoorts. Developers zijn ook welkom!'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: (0, i.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C01DAT4TRPF', children: '#nl-design-system-developers' }) }), ': kanaal om developers te bereiken. Je kunt hier samenwerken, vragen stellen, breaking changes aankondigen, enzovoorts. Designers zijn ook welkom!'] }), '\n', (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.strong, { children: (0, i.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C05AQK9R41G', children: '#rijkshuisstijl-community' }) }), ': kanaal voor de ', (0, i.jsx)(n.a, { href: '/community/community-sprints/rijkshuisstijl-community/', children: 'Rijkshuisstijl Community' }), ', waar mensen kennis uitwisselen en samenwerken aan websites die de ', (0, i.jsx)(n.a, { href: 'http://rijkshuisstijl.nl', children: 'Rijkshuisstijl' }), ' gebruiken.'] }), '\n'] }), '\n', (0, i.jsxs)(n.p, { children: ['Op de NL Design System kanalen is onze ', (0, i.jsx)(n.a, { href: '/coc/', children: 'Code of Conduct' }), ' van toepassing.'] }), '\n', (0, i.jsx)(n.h2, { id: 'huddle', children: 'Huddle' }), '\n', (0, i.jsxs)(n.p, { children: ['Via Slack kun je met meerdere personen videobellen en je scherm delen, dat heet een "', (0, i.jsx)(n.a, { href: 'https://slack.com/intl/en-gb/help/articles/4402059015315-Use-huddles-in-Slack', children: 'Slack Huddle' }), '". In de community werken veel mensen vaak samen via een Slack Huddle, dus als je mensen hoort spreken over een "huddle" weet je nu wat het is!'] }), '\n', (0, i.jsx)(n.h2, { id: 'bijeenkomsten-in-slack', children: 'Bijeenkomsten in Slack' }), '\n', (0, i.jsxs)(n.p, { children: ['We doen veel ', (0, i.jsx)(n.a, { href: '/community/events/overzicht/', children: 'community bijeenkomsten' }), ' in een Slack Huddle. Wanneer je eenmaal in Slack zit dan kun je met een druk op de knop meedoen. Je kunt je voor diverse events aanmelden via onze website, zodat je een uitnodiging krijgt voor je kalender en je een herinnering kunt instellen.'] }), '\n', (0, i.jsx)(n.p, { children: 'Community Events die in Slack plaats vinden:' }), '\n', (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/events/design-open-hour/', children: 'Design Open Hour' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/events/developer-open-hour/', children: 'Developer Open Hour' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/events/mijn-services-check-in/', children: 'MijnServices Check-in' }) }), '\n', (0, i.jsx)(n.li, { children: (0, i.jsx)(n.a, { href: '/events/rijkshuisstijl-community-open-hour/', children: 'Rijkshuisstijl Community Open Hour' }) }), '\n'] }), '\n', (0, i.jsx)(n.h2, { id: 'bedankt-code-for-nl', children: 'Bedankt, Code for NL!' }), '\n', (0, i.jsxs)(n.p, { children: ['Hartelijk dank aan ', (0, i.jsx)(n.a, { href: 'http://codefor.nl', children: 'Code for NL' }), ', die het mogelijk maakt dat de NL Design System community via Slack kan samenwerken!'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, l.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(k, { ...e }) }) : k(e);
   }
  },
 },
]);
