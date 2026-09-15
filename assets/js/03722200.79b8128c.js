'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [24171],
 {
  18439(e, n, t) {
   t.d(n, { R: () => a, x: () => o });
   var r = t(30758);
   const i = {},
    s = r.createContext(i);
   function a(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return ((n = e.disableParentContext ? ('function' == typeof e.components ? e.components(i) : e.components || i) : a(e.components)), r.createElement(s.Provider, { value: n }, e.children));
   }
  },
  19707(e, n, t) {
   t.d(n, { Z: () => r.Z });
   var r = t(50172);
  },
  24456(e, n, t) {
   t.d(n, { F: () => a, N: () => o });
   var r = t(13526),
    i = t(84471),
    s = t(86070);
   const a = ({ children: e, ...n }) => {
     const { to: t, href: r, ...a } = n;
     let o = t || r;
     const l = new URL(o, 'https://nldesignsystem.nl');
     return ('https://nldesignsystem.nl' === l.origin ? (l.pathname.endsWith('/') || (0, i.QQ)(l.pathname) || (l.pathname = `${l.pathname}/`), (o = l.toString().replace('https://nldesignsystem.nl', ''))) : ((a.target = '_blank'), (a.rel = 'noopener noreferrer')), (0, s.jsx)('a', { href: o, ...a, children: e }));
    },
    o = ({ className: e, ...n }) => (0, s.jsx)(a, { className: (0, r.$)('utrecht-link', 'utrecht-link--html-a', e), ...n });
  },
  38332(e, n, t) {
   (t.r(n), t.d(n, { assets: () => u, contentTitle: () => p, default: () => k, frontMatter: () => g, metadata: () => r, toc: () => v }));
   const r = JSON.parse('{"id":"project/kernteam","title":"Kernteam","description":"Contact met NL Design System Kernteam","source":"@site/docs/project/kernteam.mdx","sourceDirName":"project","slug":"/project/kernteam","permalink":"/project/kernteam","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/project/kernteam.mdx","tags":[],"version":"current","frontMatter":{"title":"Kernteam","hide_title":true,"hide_table_of_contents":true,"navigation_order":3,"sidebar_label":"Kernteam","pagination_label":"Kernteam","description":"Contact met NL Design System Kernteam","keywords":["kernteam","over ons","nl design system","contact"]},"sidebar":"project","previous":{"title":"Veelgestelde vragen","permalink":"/project/faq"},"next":{"title":"Op de hoogte blijven","permalink":"/project/blijf-op-de-hoogte"}}');
   var i = t(86070),
    s = t(18439),
    a = t(19707),
    o = t(46447);
   const l = { name: 'Ali Kadhim', role: 'Front-end Developer', slack: { mention: '@Ali Kadhim', id: 'U02196SHCF6' }, Description: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(o.fz, { children: 'Ali is de kracht achter de schermen voor de ontwikkel en testfase van de Candidate en Hall of Fame componenten. Dat doet hij op basis van alle inzichten uit het gebruik van Community componenten.' }) }) },
    d = { name: 'Astrid Brantjes', role: 'Project Manager', slack: { mention: '@Astrid Brantjes', id: 'U06S00GPXC7' }, Description: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.fz, { children: 'Astrid is het aanspreekpunt voor vragen over de opdracht van het NL Design System en voor het verkennen van nieuwe samenwerkingen vanuit beleid.' }), (0, i.jsx)(o.fz, { children: 'Ze stemt af met betrokken organisaties om te werken aan gemeenschappelijke doelen en bewaakt daarbij de opdracht.' }), (0, i.jsx)(o.fz, { children: "Risico's, escalaties, feedback en zaken rondom de Code of Conduct kunnen bij haar worden gemeld." })] }) };
   var c = t(24456);
   const m = [d, { name: 'Yolijn van der Kolk', role: 'Productmanager', slack: { mention: '@Yolijn', id: 'U01B7T1F24S' }, Description: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.fz, { children: 'Yolijn is het aanspreekpunt voor vragen over de product backlog en prioritering binnen NL Design System en voor het verkennen van nieuwe samenwerkingen.' }), (0, i.jsx)(o.fz, { children: 'Hierbij helpt ze nieuwe organisaties aansluiting te vinden bij NL Design System, helpt bij complexe vraagstukken en geeft uitleg over de werkwijze, zoals het Estafettemodel met bijbehorende Definition of Done.' }), (0, i.jsx)(o.fz, { children: "Ze verbindt verschillende organisaties en initiatieven aan elkaar en stimuleert samenwerking en kennisdeling binnen de community. Risico's, escalaties, feedback en zaken rondom de Code of Conduct kunnen bij haar worden gemeld." })] }) }, { name: 'Robbert Broersma', role: 'Design System lead', slack: { mention: '@Robbert', id: 'U019X17U5HQ' }, Description: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.fz, { children: 'Robbert helpt organisaties bij het complexe vraagstukken waarbij NL Design System gebruikt wordt. Hij verbindt verschillende organisaties en initiatieven aan elkaar en stimuleert samenwerking en kennisdeling binnen de community.' }), (0, i.jsxs)(o.fz, { children: ['Je kunt via ', (0, i.jsx)(c.N, { href: '/slack/', children: '#nl-design-system-designers en #nl-design-system-developers' }), ' en tijdens', ' ', (0, i.jsx)(c.N, { href: '/events/developer-open-hour/', children: 'Developer Open Hour' }), ' bij hem terecht voor vragen over de architectuur, de werkwijze en het Estafettemodel van NL Design System.'] })] }) }, { name: 'Jeffrey Lauwers', role: 'Designer Relations & Design System Designer', slack: { mention: '@Jeffrey Lauwers', id: 'U0412KZ9TV1' }, Description: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.fz, { children: 'Jeffrey verbindt designers uit verschillende organisaties, stimuleert samenwerking en kennisdeling binnen de community.' }), (0, i.jsxs)(o.fz, { children: ['Je kunt bij hem terecht voor designvragen rondom: huisstijl, design tokens, componenten, patronen, templates en richtlijnen. Je vindt hem in het Slack kanaal ', (0, i.jsx)(c.N, { href: '/slack/', children: '#nl-design-system-designers' }), ', tijdens', ' ', (0, i.jsx)(c.N, { href: '/events/design-open-hour/', children: 'Design Open Hours' }), ' en bij', ' ', (0, i.jsx)(c.N, { href: '/events/design-open-dag/', children: 'Design Open Dagen' }), '.'] })] }) }, { name: 'Rozerin Ayerdem', role: 'Designer Relations & Design System Designer', slack: { mention: '@Rozerin', id: 'D038ABXNAG3' }, Description: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.fz, { children: 'Rozerin verbindt designers uit verschillende organisaties, stimuleert samenwerking en kennisdeling binnen de community en heeft altijd wel een handig linkje paraat.' }), (0, i.jsxs)(o.fz, { children: ['Je kunt bij haar terecht voor designvragen rondom: huisstijl, design tokens, componenten, patronen, templates en richtlijnen. Je vindt haar in het Slack kanaal ', (0, i.jsx)(c.N, { href: '/slack/', children: '#nl-design-system-designers' }), ', tijdens', ' ', (0, i.jsx)(c.N, { href: '/events/design-open-hour/', children: 'Design Open Hours' }), ' en bij', ' ', (0, i.jsx)(c.N, { href: '/events/design-open-dag/', children: 'Design Open Dagen' }), '.'] })] }) }, { name: 'Charlotte Gieltjes', role: 'Developer Relations', slack: { mention: '@Charlotte Gieltjes', id: 'U08BBDLLFGE' }, Description: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.fz, { children: 'Charlotte verbindt developers uit verschillende organisaties en stimuleert samenwerking en kennisdeling binnen de community.' }), (0, i.jsxs)(o.fz, { children: ['Je kunt tijdens ', (0, i.jsx)(c.N, { href: '/events/developer-open-hour/', children: 'Developer Open Hour' }), ' en in het', ' ', (0, i.jsx)(c.N, { href: '/slack/', children: '#nl-design-system/developers Slack kanaal' }), ' bij haar terecht voor developer vragen rondom het gebruik van NL Design System zoals over de componenten, het handboek, het estafettemodel, bijeenkomsten en community sprints.'] })] }) }, { name: 'Eelco Bosklopper', role: 'Developer Relations Engineer', slack: { mention: '@Eelco Bosklopper', id: 'U0B9642SC3F' }, Description: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.fz, { children: 'Eelco verbindt developers uit verschillende organisaties en stimuleert samenwerking en kennisdeling binnen de community.' }), (0, i.jsxs)(o.fz, { children: ['Je kunt tijdens ', (0, i.jsx)(c.N, { href: '/events/developer-open-hour/', children: 'Developer Open Hour' }), ' en in het', ' ', (0, i.jsx)(c.N, { href: '/slack/', children: '#nl-design-system/developers Slack kanaal' }), ' bij hem terecht voor developer vragen rondom het gebruik van NL Design System zoals over de componenten, het handboek, het estafettemodel, bijeenkomsten en community sprints.'] })] }) }, { name: 'Renate Roke', role: 'Specialist webtoegankelijkheid', slack: { mention: '@Renate Roke', id: 'U08BJAEAEUU' }, Description: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.fz, { children: 'Julia onderzoekt en schrijft richtlijnen voor het toegankelijk inzetten van NL Design System componenten.' }), (0, i.jsxs)(o.fz, { children: ['Je kunt via ', (0, i.jsx)(c.N, { href: '/slack/', children: '#nl-design-system-designers en #nl-design-system-developers' }), ' bij haar terecht met vragen rondom toegankelijkheid. Bijvoorbeeld over semantische HTML, ARIA, en focusmanagement.'] })] }) }, { name: 'Julia Tol', role: 'Specialist webtoegankelijkheid', slack: { mention: '@Julia Tol', id: 'U07H8798ZV5' }, Description: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.fz, { children: 'Julia onderzoekt en schrijft richtlijnen voor het toegankelijk inzetten van NL Design System componenten.' }), (0, i.jsxs)(o.fz, { children: ['Je kunt via ', (0, i.jsx)(c.N, { href: '/slack/', children: '#nl-design-system-designers en #nl-design-system-developers' }), ' bij haar terecht met vragen rondom toegankelijkheid. Bijvoorbeeld over semantische HTML, ARIA, en focusmanagement.'] })] }) }, { name: 'Richard van Heuven van Staereling', role: 'DevOps & Front-end Developer', slack: { mention: '@Richard', id: 'U094W1UDJ6A' }, Description: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.fz, { children: 'Richard adviseert de community op het gebied van security, betrouwbare build- en releasetrajecten, en het toepassen van best practices.' }), (0, i.jsxs)(o.fz, { children: ['Je kunt bij hem op ', (0, i.jsx)(c.N, { href: '/slack/', children: '#nl-design-system-developers' }), ' en tijdens', ' ', (0, i.jsx)(c.N, { href: '/events/developer-open-hour/', children: 'Developer Open Hour' }), ' terecht met vragen over het inrichten van repositories, over automatisering en pipelines, en over het waarborgen van de veiligheid van NL Design System.'] })] }) }, { name: 'Peter Goes', role: 'Front-end Developer', slack: { mention: '@Peter Goes', id: 'U08NPCEF41Z' }, Description: () => (0, i.jsx)(i.Fragment, { children: (0, i.jsxs)(o.fz, { children: ['Peter is de kracht achter de schermen die de rebuild van', ' ', (0, i.jsx)(c.N, { href: 'gebruikersonderzoeken.nl', children: 'gebruikersonderzoeken.nl' }), ' en', ' ', (0, i.jsx)(c.N, { href: 'nldesignsystem.nl', children: 'nldesignsystem.nl' }), ' doorvoert met gebruik van NL Design System.'] }) }) }, l, { name: 'Sandra de Jong', role: 'Co\xf6rdinator communicatie en evenementen', slack: { mention: '@Sandra de Jong', id: 'U093GT9PY6A' }, Description: () => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.fz, { children: 'Sandra is communicatieadviseur en eventmanager voor NL Design System.' }), (0, i.jsx)(o.fz, { children: 'Je kunt bij haar terecht voor idee\xebn en vragen rondom Design Systems week, bijeenkomsten en communicatie.' })] }) }],
    h = ({ headingLevel: e }) => (0, i.jsx)('div', { className: 'ma-core-team', children: m.map(({ name: n, role: t, Description: r, slack: s }) => (0, i.jsxs)(a.Z, { heading: n, headingLevel: e, subheading: t, children: [(0, i.jsx)(r, {}), ' ', (0, i.jsxs)(o.fz, { children: ['Slack: ', (0, i.jsx)(o.N_, { href: `https://codefornl.slack.com/team/${s.id}`, children: s.mention })] })] }, n)) }),
    g = { title: 'Kernteam', hide_title: !0, hide_table_of_contents: !0, navigation_order: 3, sidebar_label: 'Kernteam', pagination_label: 'Kernteam', description: 'Contact met NL Design System Kernteam', keywords: ['kernteam', 'over ons', 'nl design system', 'contact'] },
    p = 'Kernteam',
    u = {},
    v = [];
   function j(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, s.R)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: 'kernteam', children: 'Kernteam' }) }), '\n', (0, i.jsxs)(n.p, { children: ['Naast de community is er een enthousiast kernteam dat zich dagelijks inzet voor NL Design System. Kennismaken met het kernteam? Neem contact op door een e-mail te sturen naar ', (0, i.jsx)(n.a, { href: 'mailto:info@nldesignsystem.nl', children: 'info@nldesignsystem.nl' })] }), '\n', (0, i.jsx)(h, { headingLevel: 2 })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(j, { ...e }) }) : j(e);
   }
  },
  50172(e, n, t) {
   t.d(n, { Z: () => h });
   var r = t(86070),
    i = t(63009);
   function s(e) {
    var n,
     t,
     r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var i = e.length;
      for (n = 0; n < i; n++) e[n] && (t = s(e[n])) && (r && (r += ' '), (r += t));
     } else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
   }
   function a() {
    for (var e, n, t = 0, r = '', i = arguments.length; t < i; t++) (e = arguments[t]) && (n = s(e)) && (r && (r += ' '), (r += n));
    return r;
   }
   const o = ({ ref: e, children: n, className: t, inline: s, ...o }) => (0, r.jsx)(i.N, { ...o, className: a('rhc-link', { 'rhc-link--inline': s }, t), disabled: !1, ref: e, children: n });
   o.displayName = 'Link';
   var l = t(30758);
   function d(e) {
    var n,
     t,
     r = '';
    if ('string' == typeof e || 'number' == typeof e) r += e;
    else if ('object' == typeof e)
     if (Array.isArray(e)) {
      var i = e.length;
      for (n = 0; n < i; n++) e[n] && (t = d(e[n])) && (r && (r += ' '), (r += t));
     } else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
   }
   function c() {
    for (var e, n, t = 0, r = '', i = arguments.length; t < i; t++) (e = arguments[t]) && (n = d(e)) && (r && (r += ' '), (r += n));
    return r;
   }
   const m = ({ level: e = 2, children: n, ...t }) => {
     const r = `h${e}`;
     return l.createElement(r, t, n);
    },
    h = (0, l.forwardRef)(({ heading: e, headingLevel: n = 2, subheading: t, description: i, metadata: s, image: a, href: l, target: d, linkLabel: h, title: g, className: p, children: u, ...v }, j) => (0, r.jsxs)('div', { className: c('rhc-card', 'rhc-card--default', p), ref: j, ...v, children: [a && (0, r.jsx)('div', { className: 'rhc-card__image', children: a }), (0, r.jsxs)('div', { className: 'rhc-card__content', children: [(0, r.jsx)(m, { className: 'rhc-card__heading', level: n, children: l ? (0, r.jsx)(o, { className: 'rhc-card__link', href: l, target: d, title: g, children: e }) : e }), t && (0, r.jsx)('p', { className: 'rhc-card__subheading', children: t }), i && (0, r.jsx)('p', { className: 'rhc-card__description', children: i }), s && (0, r.jsx)('p', { className: 'rhc-card__metadata', children: s }), u] }), h && (0, r.jsx)('div', { className: 'rhc-card__footer', children: (0, r.jsx)('div', { className: 'rhc-card__link', 'data-testid': 'rhc-card__link', children: (0, r.jsx)(o, { href: l, target: d, title: g, children: h }) }) })] }));
   h.displayName = 'Card';
  },
  63009(e, n, t) {
   t.d(n, { N: () => m });
   var r = t(15540),
    i = t(69967),
    s = t(86070),
    a = t(13526),
    o = t(30758),
    l = ['children', 'className', 'current', 'disabled', 'href', 'inlineBox'];
   function d(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     (n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r));
    }
    return t;
   }
   function c(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? d(Object(t), !0).forEach(function (n) {
         (0, r.A)(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : d(Object(t)).forEach(function (n) {
           Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
    }
    return e;
   }
   var m = (0, o.forwardRef)(function (e, n) {
    var t = e.children,
     o = e.className,
     d = e.current,
     m = e.disabled,
     h = e.href,
     g = e.inlineBox,
     p = (0, i.A)(e, l);
    return (0, s.jsx)('a', c(c({ 'aria-current': d || void 0, 'aria-disabled': m, className: (0, a.$)('nl-link', (0, r.A)((0, r.A)((0, r.A)({}, 'nl-link--current', d), 'nl-link--disabled', m), 'nl-link--inline-box', g), o), href: m ? void 0 : h, role: m ? 'link' : void 0, ref: n, tabIndex: m ? 0 : void 0 }, p), {}, { children: t }));
   });
   m.displayName = 'Link';
  },
  84471(e, n, t) {
   t.d(n, { bo: () => i, KF: () => h, mJ: () => u, VZ: () => D, cR: () => y, Pv: () => v, qZ: () => a, kD: () => b, QQ: () => S, B2: () => g, Pc: () => l, f4: () => o, GT: () => x, fX: () => s, eQ: () => f, B_: () => k, o_: () => j });
   const r = JSON.parse('{"sP":{"//":"Update @types/node to match the highest node version here","node":">=24 <=25","pnpm":"^11.4.0"}}'),
    i = { UNKNOWN: 'Todo', HELP_WANTED: 'Help Wanted', COMMUNITY: 'Community', CANDIDATE: 'Candidate', HALL_OF_FAME: 'Hall of fame' },
    s = (e) => e?.toLowerCase().replace(/\s+/gi, '-'),
    a = (e) => ({ PVTSSF_lADOBGdlVM4AdX8lzgasA5I: 'Naam bepaald op basis van NL Design System naamgeving.', PVTSSF_lADOBGdlVM4AdX8lzgTC4tM: 'Doel van component is in \xe9\xe9n zin beschreven.', PVTSSF_lADOBGdlVM4AdX8lzgasBXs: 'Afbeelding gemaakt om de component visueel duidelijk te maken.', PVTSSF_lADOBGdlVM4AdX8lzgTDAP0: 'Staat in de publieke backlog van NL Design System.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-Ug': 'Bewijs verzameld dat de component algemeen bruikbaar is.', PVTSSF_lADOBGdlVM4AdX8lzgasBms: 'Aangemaakt als een GitHub Discussion.', PVTSSF_lADOBGdlVM4AdX8lzgTC95M: 'Link beschikbaar naar component in Figma of Storybook met alle belangrijke states en varianten.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-BI': 'Naam en doel van benodigde varianten beschreven.', 'PVTSSF_lADOBGdlVM4AdX8lzgTC-1c': 'Nut van component is onderbouwd door gebruikersonderzoek.', PVTSSF_lADOBGdlVM4AdX8lzgTC_5o: 'Kernteam verwacht dat dit component tot Hall of Fame kan komen.', PVTSSF_lADOBGdlVM4AdX8lzgTC_W0: 'Vindbaar op de NL Design System website.' })[e],
    o = Object.keys({ HELP_WANTED: 'UNKNOWN', COMMUNITY: 'HELP_WANTED', CANDIDATE: 'COMMUNITY', HALL_OF_FAME: 'CANDIDATE' }),
    l = (e) => e.toLowerCase().replace(/(\s|-)+/, ''),
    d = ['CSS', 'HTML', 'Web Component', 'React', 'Vue', 'Angular', 'Twig'];
   function c(e) {
    return Array.from(new Set(e));
   }
   const m = (e) => [...e].sort((e, n) => d.indexOf(e) - d.indexOf(n)),
    h = (e) => {
     const n = e.flatMap(({ projects: e }) => e).flatMap((e) => p(e));
     return m(c(n));
    },
    g = (e, n) => u(e).includes(n),
    p = (e) => {
     const n = / URL \(([^)]+)\)/;
     return m(c(e.tasks.filter(({ name: e, value: t }) => '' !== t && n.test(e)).map(({ name: e }) => n.exec(e)?.[1])));
    },
    u = (e) => m(c(e.projects.flatMap((e) => p(e)))),
    v = (e) => {
     const n = p(e),
      t = ((e) => {
       const n = e.tasks.find(({ name: e }) => 'Naam' === e);
       return n?.value || '';
      })(e);
     return n.map((n) => {
      const r = e.tasks
       .filter(({ name: e, value: t }) => '' !== t && e.includes(n))
       .map(({ name: r, id: i, value: s }) => {
        const a = /^(.+) URL/.exec(r)[1],
         o = 'Storybook' === a ? `${t} (${n}) in Storybook van ${e.title}` : `${t} (${n}) op ${a}`;
        return { brand: a.toLowerCase(), name: r, id: i, value: s, description: o };
       });
      return { frameworkName: n, tasks: r };
     });
    },
    j = (e) => e.join('.'),
    k = (e) => '--' + e.join('-'),
    f = (e, n) => n.reduce((e, n) => e?.[n], e);
   function b(e, n = []) {
    return Object.hasOwn(e, '$type') ? [n] : Object.keys(e).flatMap((t) => ('object' == typeof e[t] && null !== e[t] ? b(e[t], [...n, t]) : []));
   }
   function x(e) {
    const n = new Map();
    function t(e) {
     return (n.has(e) || n.set(e, j(e)), n.get(e));
    }
    return e.sort((e, n) => e.length - n.length || t(e).localeCompare(t(n)));
   }
   const y = () => {
     const e = r.sP?.pnpm;
     if (!e) throw new Error('No pnpm version found in package.json#engines.pnpm');
     return e.replace(/^[\^~>=<]+/, '');
    },
    D = () => {
     const e = r.sP?.node;
     if (!e) throw new Error('No node version found in package.json#engines.node');
     const n = e.match(/^[>]=?\s*(\d+(?:\.\d+)*(?:\.\d+)?)/);
     return n ? n[1] : e.replace(/^[\^~>=<]+/, '');
    },
    N = new Set(['ics', 'json', 'pdf']),
    S = (e) => {
     const n = e.split('/').pop() ?? '',
      t = n.split('.').pop()?.toLowerCase();
     return void 0 !== t && N.has(t);
    };
  },
 },
]);
