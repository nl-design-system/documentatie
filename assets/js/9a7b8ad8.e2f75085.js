/*! For license information please see 9a7b8ad8.e2f75085.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [67287],
 {
  18439(e, n, s) {
   s.d(n, { R: () => r, x: () => l });
   var t = s(30758);
   const a = {},
    i = t.createContext(a);
   function r(e) {
    const n = t.useContext(i);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : r(e.components)), t.createElement(i.Provider, { value: n }, e.children));
   }
  },
  18652(e, n, s) {
   s.d(n, { A: () => i });
   var t = s(30758),
    a = { outline: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, filled: { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none' } };
   const i = (e, n, s, i) => {
    const r = (0, t.forwardRef)(({ color: s = 'currentColor', size: r = 24, stroke: l = 2, title: o, className: c, children: d, ...h }, m) => (0, t.createElement)('svg', { ref: m, ...a[e], width: r, height: r, className: ['tabler-icon', `tabler-icon-${n}`, c].join(' '), ...('filled' === e ? { fill: s } : { strokeWidth: l, stroke: s }), ...h }, [o && (0, t.createElement)('title', { key: 'svg-title' }, o), ...i.map(([e, n]) => (0, t.createElement)(e, n)), ...(Array.isArray(d) ? d : [d])]));
    return ((r.displayName = `${s}`), r);
   };
  },
  27843(e, n, s) {
   s.d(n, { v: () => l });
   var t = s(53538),
    a = s(13526),
    i = s(86070);
   const r = ({ className: e, children: n, purpose: s, iconStart: t, iconEnd: r, href: l }) => (0, i.jsxs)('a', { className: (0, a.A)('nl-button', e, { 'nl-button--primary': 'primary' === s, 'nl-button--secondary': 'secondary' === s, 'nl-button--subtle': 'subtle' === s }), href: l, children: [t && (0, i.jsx)('span', { className: 'nl-button__icon-start', children: t }), (0, i.jsx)('span', { className: 'nl-button__label', children: n }), r && (0, i.jsx)('span', { className: 'nl-button__icon-end', children: r })] }),
    l = globalThis.isAstro
     ? ({ appearance: e, href: n, ...s }) => {
        let t = 'primary';
        return ((t = 'secondary-action' === e ? 'secondary' : t), (0, i.jsx)(r, { purpose: t, href: n, ...s }));
       }
     : ({ appearance: e, ...n }) => (0, i.jsx)(t.F, { className: (0, a.$)('utrecht-button-link', `utrecht-button-link--${e}`), ...n });
  },
  53538(e, n, s) {
   s.d(n, { F: () => r, N: () => l });
   var t = s(13526),
    a = s(76097),
    i = s(86070);
   const r = ({ children: e, ...n }) => {
     const { to: s, href: t, ...r } = n;
     let l = s || t;
     const o = new URL(l, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === o.origin ? (o.pathname.endsWith('/') || (0, a.QQ)(o.pathname) || (o.pathname = `${o.pathname}/`), (l = o.toString().replace('https://nldesignsystem.nl', ''))) : ((r.target = '_blank'), (r.rel = 'noopener noreferrer')), (0, i.jsx)('a', { href: l, ...r, children: e }));
    },
    l = ({ className: e, ...n }) => (0, i.jsx)(r, { className: (0, t.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  64249(e, n, s) {
   s.d(n, { A: () => t });
   const t = (0, s(18652).A)('outline', 'chevron-right', 'ChevronRight', [['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }]]);
  },
  76097(e, n, s) {
   s.d(n, { bo: () => a, KF: () => m, mJ: () => p, VZ: () => S, cR: () => x, Pv: () => g, qZ: () => r, kD: () => b, QQ: () => C, B2: () => k, Pc: () => o, f4: () => l, GT: () => y, fX: () => i, eQ: () => v, B_: () => f, o_: () => j });
   const t = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    a = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    i = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    r = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    l = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    o = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    c = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function d(e) {
    return Array.from(new Set(e));
   }
   const h = (e) => [...e].sort((e, n) => c.indexOf(e) - c.indexOf(n)),
    m = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => u(e));
     return h(d(n));
    },
    k = (e, n) => p(e).includes(n),
    u = (e) => {
     const n = / URL \(([^)]+)\)/;
     return h(d(e.tasks.filter(({ name: e, value: s }) => '' !== s && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    p = (e) => h(d(e.projects.flatMap((e) => u(e)))),
    g = (e) => {
     const n = u(e),
      s = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const t = e.tasks
       .filter(({ name: e, value: s }) => '' !== s && e.includes(n))
       .map(({ name: t, id: a, value: i }) => {
        const r = /^(.+) URL/.exec(t)[1],
         l = 'Storybook' === r ? `${s} (${n}) in Storybook van ${e.title}` : `${s} (${n}) op ${r}`;
        return { brand: r.toLowerCase(), name: t, id: a, value: i, description: l };
       });
      return { frameworkName: n, tasks: t };
     });
    },
    j = (e) => e.join('.'),
    f = (e) => '--' + e.join('-'),
    v = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((s) => ('object' == typeof e[s] && null !== e[s] ? b(e[s], [...n, s]) : []));
   }
   function y(e) {
    const n = new Map();
    function s(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || s(e).localeCompare(s(n)));
   }
   const x = () => {
     const e = t.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    S = () => {
     const e = t.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    w = new Set(['ics', 'json', 'pdf']),
    C = (e) => {
     const n = e.split('/').pop() ?? '',
      s = n.split('.').pop()?.toLowerCase();
     return void 0 !== s && w.has(s);
    };
  },
  80232(e, n, s) {
   (s.r(n), s.d(n, { assets: () => h, contentTitle: () => d, default: () => u, frontMatter: () => c, metadata: () => t, toc: () => m }));
   const t = JSON.parse('{"id":"community/slack","title":"Slack","description":"Wij hebben chatkanelen in Slack, lees hier hoe je mee kan doen.","source":"@site/docs/community/slack.mdx","sourceDirName":"community","slug":"/slack/","permalink":"/slack/","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/community/slack.mdx","tags":[],"version":"current","frontMatter":{"title":"Slack","slug":"/slack/","hide_title":true,"hide_table_of_contents":true,"sidebar_label":"Slack","pagination_label":"Slack","description":"Wij hebben chatkanelen in Slack, lees hier hoe je mee kan doen.","keywords":["chat","Code for NL","codefor.nl","global-design-system","huddle","nl design system","nl-design-system","nl-design-system-a11y","nl-design-system-content","nl-design-system-designers","nl-design-system-developers","rijkshuisstijl-community","Slack"]},"sidebar":"community","previous":{"title":"Belangenorganisaties","permalink":"/community/belangenorganisaties/aanmelden"}}');
   var a = s(86070),
    i = s(18439),
    r = s(27843),
    l = s(64249),
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
    const n = { a: 'a', h1: 'h1', h2: 'h2', header: 'header', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, i.R)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.header, { children: (0, a.jsx)(n.h1, { id: 'slack-voor-nl-design-system', children: 'Slack voor NL Design System' }) }), '\n', (0, a.jsxs)(n.p, { children: ['NL Design System werkt met de ', (0, a.jsx)(n.a, { href: 'https://codefornl.slack.com/', children: 'Slack van de Code for NL community' }), '. Je kunt jezelf aanmelden via het formulier op ', (0, a.jsx)(n.a, { href: 'https://praatmee.codefor.nl', children: 'praatmee.codefor.nl' }), ', iedereen is welkom!'] }), '\n', (0, a.jsx)(o.e2, { children: (0, a.jsxs)(r.v, { href: 'https://praatmee.codefor.nl/', appearance: 'primary-action', children: ['Doe mee op Slack', (0, a.jsx)(l.A, {})] }) }), '\n', (0, a.jsx)(n.h2, { id: 'chatkanalen', children: 'Chatkanalen' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.strong, { children: (0, a.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C7KDQRXMZ', children: '#nl-design-system' }) }), ': kanaal voor algemene vragen, aankondingen, en voor oproepen aan de community tijdens het ', (0, a.jsx)(n.a, { href: '/handboek/estafettemodel/', children: 'Estafettemodel' }), '.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.strong, { children: (0, a.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C07059B0VK7', children: '#nl-design-system-a11y' }) }), ': kanaal voor toegankelijkheidsspecialisten om onderling samen te werken aan ', (0, a.jsx)(n.a, { href: '/richtlijnen/', children: 'richtlijnen' }), ', acceptatiecriteria voor toegankelijkheid en ', (0, a.jsx)(n.a, { href: '/wcag/', children: "WCAG pagina's" }), '.'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.strong, { children: (0, a.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C01E0C94QG4', children: '#nl-design-system-content' }) }), ': kanaal om contentmakers te bereiken, en voor samenwerken aan de ', (0, a.jsx)(n.a, { href: '/richtlijnen/content/', children: 'richtlijnen voor content' }), '. Het is hier nog wat rustig, maar daar komt binnenkort misschien verandering in!'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.strong, { children: (0, a.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C01D78C2E4E', children: '#nl-design-system-designers' }) }), ': kanaal om designers te bereiken. Je kunt hier samenwerken, vragen stellen over design, UX, Figma, enzovoorts. Developers zijn ook welkom!'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.strong, { children: (0, a.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C01DAT4TRPF', children: '#nl-design-system-developers' }) }), ': kanaal om developers te bereiken. Je kunt hier samenwerken, vragen stellen, breaking changes aankondigen, enzovoorts. Designers zijn ook welkom!'] }), '\n', (0, a.jsxs)(n.li, { children: [(0, a.jsx)(n.strong, { children: (0, a.jsx)(n.a, { href: 'https://codefornl.slack.com/archives/C05AQK9R41G', children: '#rijkshuisstijl-community' }) }), ': kanaal voor de ', (0, a.jsx)(n.a, { href: '/community/community-sprints/rijkshuisstijl-community/', children: 'Rijkshuisstijl Community' }), ', waar mensen kennis uitwisselen en samenwerken aan websites die de ', (0, a.jsx)(n.a, { href: 'http://rijkshuisstijl.nl', children: 'Rijkshuisstijl' }), ' gebruiken.'] }), '\n'] }), '\n', (0, a.jsxs)(n.p, { children: ['Op de NL Design System kanalen is onze ', (0, a.jsx)(n.a, { href: '/coc/', children: 'Code of Conduct' }), ' van toepassing.'] }), '\n', (0, a.jsx)(n.h2, { id: 'huddle', children: 'Huddle' }), '\n', (0, a.jsxs)(n.p, { children: ['Via Slack kun je met meerdere personen videobellen en je scherm delen, dat heet een "', (0, a.jsx)(n.a, { href: 'https://slack.com/intl/en-gb/help/articles/4402059015315-Use-huddles-in-Slack', children: 'Slack Huddle' }), '". In de community werken veel mensen vaak samen via een Slack Huddle, dus als je mensen hoort spreken over een "huddle" weet je nu wat het is!'] }), '\n', (0, a.jsx)(n.h2, { id: 'bijeenkomsten-in-slack', children: 'Bijeenkomsten in Slack' }), '\n', (0, a.jsxs)(n.p, { children: ['We doen veel ', (0, a.jsx)(n.a, { href: '/community/events/overzicht/', children: 'community bijeenkomsten' }), ' in een Slack Huddle. Wanneer je eenmaal in Slack zit dan kun je met een druk op de knop meedoen. Je kunt je voor diverse events aanmelden via onze website, zodat je een uitnodiging krijgt voor je kalender en je een herinnering kunt instellen.'] }), '\n', (0, a.jsx)(n.p, { children: 'Community Events die in Slack plaats vinden:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/events/design-open-hour/', children: 'Design Open Hour' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/events/developer-open-hour/', children: 'Developer Open Hour' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/events/mijn-services-check-in/', children: 'MijnServices Check-in' }) }), '\n', (0, a.jsx)(n.li, { children: (0, a.jsx)(n.a, { href: '/events/rijkshuisstijl-community-open-hour/', children: 'Rijkshuisstijl Community Open Hour' }) }), '\n'] }), '\n', (0, a.jsx)(n.h2, { id: 'bedankt-code-for-nl', children: 'Bedankt, Code for NL!' }), '\n', (0, a.jsxs)(n.p, { children: ['Hartelijk dank aan ', (0, a.jsx)(n.a, { href: 'http://codefor.nl', children: 'Code for NL' }), ', die het mogelijk maakt dat de NL Design System community via Slack kan samenwerken!'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, i.R)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(k, { ...e }) }) : k(e);
   }
  },
 },
]);
